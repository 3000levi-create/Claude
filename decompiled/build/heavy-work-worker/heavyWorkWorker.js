"use strict";
var _a;
Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
const node_fs = require("node:fs");
const node_path = require("node:path");
const SYNTHETIC_MODEL = "<synthetic>";
const COLD_SCAN_DAYS = 182;
const MAX_LINE_LEN = 16 * 1024 * 1024;
const MAX_TRANSCRIPT_BYTES = 1024 * 1024 * 1024;
const STAT_BATCH_SIZE = 20;
const BATCH_SIZE = 8;

function toDateString(d) {
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${d.getFullYear()}-${m}-${day}`;
}
async function loadCliStatsCache(claudeConfigDir) {
    const cachePath = node_path.join(claudeConfigDir, "stats-cache.json");
    try {
        const raw = await node_fs.promises.readFile(cachePath, "utf-8");
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed.dailyActivity) ? parsed : null;
    } catch {
        return null;
    }
}
async function mapBatched(items, batchSize, fn) {
    const out = [];
    for (let i = 0; i < items.length; i += batchSize) {
        out.push(
            ...await Promise.all(items.slice(i, i + batchSize).map((x) => fn(x)))
        );
    }
    return out;
}
async function getAllSessionFiles(claudeConfigDir) {
    const projectsDir = node_path.join(claudeConfigDir, "projects");
    let projectEntries;
    try {
        projectEntries = await node_fs.promises.readdir(projectsDir, {
            withFileTypes: true
        });
    } catch {
        return [];
    }
    const projectDirs = projectEntries.filter((d) => d.isDirectory()).map((d) => node_path.join(projectsDir, d.name));
    const projectResults = await mapBatched(
        projectDirs,
        STAT_BATCH_SIZE,
        async (projectDir) => {
            try {
                const entries = await node_fs.promises.readdir(projectDir, {
                    withFileTypes: true
                });
                const mainFiles = entries.filter((e) => e.isFile() && e.name.endsWith(".jsonl")).map((e) => node_path.join(projectDir, e.name));
                const sessionDirs = entries.filter((e) => e.isDirectory());
                const subagentResults = await mapBatched(
                    sessionDirs,
                    STAT_BATCH_SIZE,
                    async (sd) => {
                        const subDir = node_path.join(projectDir, sd.name, "subagents");
                        try {
                            const subs = await node_fs.promises.readdir(subDir, {
                                withFileTypes: true
                            });
                            return subs.filter(
                                (s) => s.isFile() && s.name.endsWith(".jsonl") && s.name.startsWith("agent-")
                            ).map((s) => node_path.join(subDir, s.name));
                        } catch {
                            return [];
                        }
                    }
                );
                return [...mainFiles, ...subagentResults.flat()];
            } catch {
                return [];
            }
        }
    );
    return projectResults.flat();
}
async function* boundedLines(file, maxLen, onSkip) {
    const stream = node_fs.createReadStream(file, {
        encoding: "utf-8"
    });
    let buf = "";
    let discarding = false;
    let pendingCR = false;
    try {
        for await (let chunk of stream) {
            if (pendingCR && chunk[0] === "\n") {
                chunk = chunk.slice(1);
            }
            pendingCR = chunk.at(-1) === "\r";
            if (chunk.includes("\r")) {
                chunk = chunk.replace(/\r\n?/g, "\n");
            }
            let pos = 0;
            while (pos < chunk.length) {
                const nl = chunk.indexOf("\n", pos);
                const end = nl === -1 ? chunk.length : nl;
                if (discarding) {
                    if (nl === -1) {
                        break;
                    }
                    discarding = false;
                    pos = nl + 1;
                    continue;
                }
                buf += chunk.slice(pos, end);
                pos = end + 1;
                if (nl === -1) {
                    if (buf.length > maxLen) {
                        buf = "";
                        discarding = true;
                        onSkip == null ? void 0 : onSkip();
                    }
                    break;
                }
                if (buf.length > maxLen) {
                    onSkip == null ? void 0 : onSkip();
                } else if (buf) {
                    yield buf;
                }
                buf = "";
            }
        }
        if (buf && !discarding) {
            if (buf.length > maxLen) {
                onSkip == null ? void 0 : onSkip();
            } else {
                yield buf;
            }
        }
    } finally {
        stream.destroy();
    }
}
async function foldTranscript(file, isSubagentFile, fromDate, onSkip) {
    var _a2, _b, _c;
    let firstTs = null;
    let messageCount = 0;
    let toolCallCount = 0;
    const usageByModel = /* @__PURE__ */ Object.create(null);
    for await (const line of boundedLines(file, MAX_LINE_LEN, onSkip)) {
        let e;
        try {
            e = JSON.parse(line);
        } catch {
            continue;
        }
        if (e === null || typeof e !== "object") {
            continue;
        }
        if (e.type !== "user" && e.type !== "assistant") {
            continue;
        }
        if (!isSubagentFile && e.isSidechain) {
            continue;
        }
        if (firstTs === null) {
            if (!e.timestamp || isNaN(new Date(e.timestamp).getTime())) {
                return null;
            }
            firstTs = e.timestamp;
            if (toDateString(new Date(firstTs)) < fromDate) {
                return null;
            }
        }
        messageCount++;
        if (e.type !== "assistant") {
            continue;
        }
        const content = (_a2 = e.message) == null ? void 0 : _a2.content;
        if (Array.isArray(content)) {
            for (const block of content) {
                if ((block == null ? void 0 : block.type) === "tool_use") {
                    toolCallCount++;
                }
            }
        }
        const usage = (_b = e.message) == null ? void 0 : _b.usage;
        const model = ((_c = e.message) == null ? void 0 : _c.model) ?? "unknown";
        if (!usage || model === SYNTHETIC_MODEL) {
            continue;
        }
        const mu = usageByModel[model] ?? (usageByModel[model] = {
            inputTokens: 0,
            outputTokens: 0,
            cacheReadInputTokens: 0,
            cacheCreationInputTokens: 0
        });
        mu.inputTokens += usage.input_tokens ?? 0;
        mu.outputTokens += usage.output_tokens ?? 0;
        mu.cacheReadInputTokens += usage.cache_read_input_tokens ?? 0;
        mu.cacheCreationInputTokens += usage.cache_creation_input_tokens ?? 0;
    }
    if (firstTs === null) {
        return null;
    }
    return {
        firstTs,
        messageCount,
        toolCallCount,
        usageByModel
    };
}

function calculateStreaks(activeDates) {
    if (activeDates.size === 0) {
        return {
            currentStreak: 0,
            longestStreak: 0
        };
    }
    const checkDate = /* @__PURE__ */ new Date();
    checkDate.setHours(0, 0, 0, 0);
    let currentStreak = 0;
    while (activeDates.has(toDateString(checkDate))) {
        currentStreak++;
        checkDate.setDate(checkDate.getDate() - 1);
    }
    const sorted = Array.from(activeDates).sort();
    let longestStreak = 1;
    let temp = 1;
    for (let i = 1; i < sorted.length; i++) {
        const prev = new Date(sorted[i - 1]);
        const curr = new Date(sorted[i]);
        const dayDiff = Math.round(
            (curr.getTime() - prev.getTime()) / (1e3 * 60 * 60 * 24)
        );
        if (dayDiff === 1) {
            temp++;
        } else {
            longestStreak = Math.max(longestStreak, temp);
            temp = 1;
        }
    }
    longestStreak = Math.max(longestStreak, temp);
    return {
        currentStreak,
        longestStreak
    };
}

function dayAfter(date) {
    const d = /* @__PURE__ */ new Date(`${date}T00:00:00`);
    d.setDate(d.getDate() + 1);
    return toDateString(d);
}
async function computeCodeStats(claudeConfigDir) {
    const cache = await loadCliStatsCache(claudeConfigDir);
    const fromDate = (cache == null ? void 0 : cache.lastComputedDate) ? dayAfter(cache.lastComputedDate) : toDateString(new Date(Date.now() - COLD_SCAN_DAYS * 24 * 60 * 60 * 1e3));
    const fromMs = ( /* @__PURE__ */ new Date(`${fromDate}T00:00:00`)).getTime();
    const sessionFiles = await getAllSessionFiles(claudeConfigDir);
    const dailyActivityMap = /* @__PURE__ */ new Map();
    for (const d of (cache == null ? void 0 : cache.dailyActivity) ?? []) {
        if (d.date < fromDate) {
            dailyActivityMap.set(d.date, {
                ...d
            });
        }
    }
    const dailyModelTokensMap = /* @__PURE__ */ new Map();
    for (const d of (cache == null ? void 0 : cache.dailyModelTokens) ?? []) {
        if (d.date < fromDate) {
            dailyModelTokensMap.set(d.date, {
                ...d.tokensByModel
            });
        }
    }
    const modelUsage = /* @__PURE__ */ Object.create(null);
    for (const [model, u] of Object.entries((cache == null ? void 0 : cache.modelUsage) ?? {})) {
        modelUsage[model] = {
            inputTokens: u.inputTokens ?? 0,
            outputTokens: u.outputTokens ?? 0,
            cacheReadInputTokens: u.cacheReadInputTokens ?? 0,
            cacheCreationInputTokens: u.cacheCreationInputTokens ?? 0
        };
    }
    const hourCounts = /* @__PURE__ */ new Map();
    for (const [h, c] of Object.entries((cache == null ? void 0 : cache.hourCounts) ?? {})) {
        hourCounts.set(Number(h), c);
    }
    let totalSessions = (cache == null ? void 0 : cache.totalSessions) ?? 0;
    let totalMessages = (cache == null ? void 0 : cache.totalMessages) ?? 0;
    let firstSessionDate = (cache == null ? void 0 : cache.firstSessionDate) ?? null;
    let lastSessionDate = null;
    const candidateFiles = [];
    let skippedOversizedFiles = 0;
    await mapBatched(sessionFiles, STAT_BATCH_SIZE, async (file) => {
        try {
            const st = await node_fs.promises.stat(file);
            if (st.mtimeMs < fromMs) {
                return;
            }
            if (st.size > MAX_TRANSCRIPT_BYTES) {
                skippedOversizedFiles++;
                return;
            }
            candidateFiles.push(file);
        } catch {}
    });
    let totalSkippedLines = 0;
    let fileErrors = 0;
    for (let i = 0; i < candidateFiles.length; i += BATCH_SIZE) {
        const batch = candidateFiles.slice(i, i + BATCH_SIZE);
        const results = await Promise.all(
            batch.map(async (file) => {
                const isSubagentFile = file.includes(`${node_path.sep}subagents${node_path.sep}`);
                try {
                    return {
                        isSubagentFile,
                        summary: await foldTranscript(
                            file,
                            isSubagentFile,
                            fromDate,
                            () => {
                                totalSkippedLines++;
                            }
                        )
                    };
                } catch {
                    fileErrors++;
                    return {
                        isSubagentFile,
                        summary: null
                    };
                }
            })
        );
        for (const {
                isSubagentFile,
                summary
            }
            of results) {
            if (!summary) {
                continue;
            }
            const firstTs = new Date(summary.firstTs);
            const dateKey = toDateString(firstTs);
            if (!isSubagentFile) {
                const dayActivity2 = dailyActivityMap.get(dateKey) ?? {
                    date: dateKey,
                    messageCount: 0,
                    sessionCount: 0,
                    toolCallCount: 0
                };
                totalSessions++;
                totalMessages += summary.messageCount;
                dayActivity2.sessionCount++;
                dayActivity2.messageCount += summary.messageCount;
                dailyActivityMap.set(dateKey, dayActivity2);
                const hour = firstTs.getHours();
                hourCounts.set(hour, (hourCounts.get(hour) ?? 0) + 1);
                if (!firstSessionDate || summary.firstTs < firstSessionDate) {
                    firstSessionDate = summary.firstTs;
                }
                if (!lastSessionDate || summary.firstTs > lastSessionDate) {
                    lastSessionDate = summary.firstTs;
                }
            }
            const dayActivity = dailyActivityMap.get(dateKey);
            if (dayActivity) {
                dayActivity.toolCallCount += summary.toolCallCount;
            }
            for (const [model, u] of Object.entries(summary.usageByModel)) {
                const mu = modelUsage[model] ?? (modelUsage[model] = {
                    inputTokens: 0,
                    outputTokens: 0,
                    cacheReadInputTokens: 0,
                    cacheCreationInputTokens: 0
                });
                mu.inputTokens += u.inputTokens;
                mu.outputTokens += u.outputTokens;
                mu.cacheReadInputTokens += u.cacheReadInputTokens;
                mu.cacheCreationInputTokens += u.cacheCreationInputTokens;
                const total = u.inputTokens + u.outputTokens;
                if (total > 0) {
                    const day = dailyModelTokensMap.get(dateKey) ?? /* @__PURE__ */ Object.create(null);
                    day[model] = (day[model] ?? 0) + total;
                    dailyModelTokensMap.set(dateKey, day);
                }
            }
        }
    }
    const dailyActivity = Array.from(dailyActivityMap.values()).sort(
        (a, b) => a.date.localeCompare(b.date)
    );
    const dailyModelTokens = Array.from(dailyModelTokensMap.entries()).map(([date, tokensByModel]) => ({
        date,
        tokensByModel
    })).sort((a, b) => a.date.localeCompare(b.date));
    const activeDates = new Set(dailyActivity.map((d) => d.date));
    let peakActivityHour = null;
    let peakCount = 0;
    for (const [hour, count] of hourCounts) {
        if (count > peakCount) {
            peakCount = count;
            peakActivityHour = hour;
        }
    }
    return {
        payload: {
            totalSessions,
            totalMessages,
            activeDays: activeDates.size,
            firstSessionDate,
            lastSessionDate,
            peakActivityHour,
            streaks: calculateStreaks(activeDates),
            dailyActivity,
            dailyModelTokens,
            modelUsage
        },
        diag: {
            fromDate,
            totalFiles: sessionFiles.length,
            scannedFiles: candidateFiles.length,
            skippedOversizedFiles,
            skippedOversizedLines: totalSkippedLines,
            fileErrors
        }
    };
}
const handlers = {
    codeStats: ({
        claudeConfigDir
    }) => computeCodeStats(claudeConfigDir)
};

function postToParent(port, message) {
    try {
        port.postMessage(message);
    } catch {}
}

function isHeavyWorkRequest(data) {
    if (typeof data !== "object" || data === null) {
        return false;
    }
    const c = data;
    return typeof c.requestId === "number" && typeof c.task === "string" && c.task in handlers && typeof c.params === "object" && c.params !== null;
}
async function handle(port, req) {
        try {
            const result = await handlers[req.task](req.params);
            postToParent(port, {
                type: "result",
                requestId: req.requestId,
                task: req.task,
                result
            });
        } catch (err) {
            postToParent(port, {
                type: "error",
                requestId: req.requestId,
                message: err instanceof Error ? err.message : String(err),
                stack: err instanceof Error ? err.stack : void 0
            });
        }
    }
    (_a = process.parentPort) == null ? void 0 : _a.once("message", (e) => {
        const [port] = e.ports;
        port.on("message", (event) => {
            const data = event.data;
            if (!isHeavyWorkRequest(data)) {
                return;
            }
            void handle(port, data);
        });
        port.start();
    });
process.on("SIGTERM", () => process.exit(0));
process.on("SIGINT", () => process.exit(0));
const _test = {
    handlers,
    isHeavyWorkRequest
};
exports._test = _test;