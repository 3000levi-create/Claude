"use strict";
(function() {
    try {
        var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
        r.SENTRY_RELEASE = {
            id: "df1d8a339dfabcf359af7144fe142b59ff7d9a0f"
        }
    } catch {}
})();
try {
    (function() {
        var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            e = new r.Error().stack;
        e && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[e] = "35181713-7fa8-41da-9e07-e2707024e59e", r._sentryDebugIdIdentifier = "sentry-dbid-35181713-7fa8-41da-9e07-e2707024e59e")
    })()
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
const T = require("node:path"),
    d = require("./index.chunk-c42vKsva.js"),
    _ = require("./index.chunk-B3Z2xpgG.js"),
    f = require("./index.chunk-IUD6Pydn.js"),
    h = "cowork",
    u = "code",
    D = {
        [h]: {
            manager: d.coworkScheduledTasks,
            normalizeModel: r => d.resolveSessionModel(r, "scheduled_task_create")
        },
        [u]: {
            manager: d.ccdScheduledTasks,
            normalizeModel: r => d.resolveCodeSessionModel(r, "scheduled_task_create", _.claudeCodeSessionManager.getAvailableCodeModels())
        }
    };

function c(r) {
    return r === h || r === u ? D[r] : null
}
async function z(r, e) {
    const o = c(r);
    if (!o || !o.manager.isInitialized()) return !1;
    const n = await o.manager.get(e);
    return !!(n != null && n.dispatchSubscribed)
}

function b(r, e, o) {
    return {
        id: r.id,
        hostId: o,
        runnerId: e,
        cron: r.cronExpression,
        fireAt: r.fireAt !== void 0 ? new Date(r.fireAt).toISOString() : void 0,
        enabled: r.enabled,
        subscribed: !!r.dispatchSubscribed,
        title: T.basename(T.dirname(r.filePath)) || r.id
    }
}

function E(r) {
    if (!r) return;
    const e = Date.parse(r);
    return Number.isFinite(e) ? e : void 0
}

function M(r, e) {
    var o, n, a;
    if ((o = e.code) != null && o.cwd) {
        const i = f.validateDispatchPath(e.code.cwd, "cwd");
        if (!i.ok) return {
            error: i.error
        };
        e.code.cwd = i.resolved
    } else if (r === u) return {
        error: "code spec missing cwd"
    };
    if ((n = e.cowork) != null && n.folders)
        for (let i = 0; i < e.cowork.folders.length; i++) {
            const t = f.validateDispatchPath(e.cowork.folders[i], "folder");
            if (!t.ok) return {
                error: t.error
            };
            e.cowork.folders[i] = t.resolved
        }
    if ((a = e.cowork) != null && a.files)
        for (let i = 0; i < e.cowork.files.length; i++) {
            const t = f.validateDispatchPath(e.cowork.files[i], "file");
            if (!t.ok) return {
                error: t.error
            };
            e.cowork.files[i] = t.resolved
        }
    return null
}
async function R(r, e) {
    var w, p, v, S, I, y, A;
    const o = e.runnerId ?? "",
        n = c(o);
    if (!n) return {
        error: `unknown runner "${o}"`
    };
    if (!n.manager.isInitialized()) return {
        error: "scheduled tasks not initialized on this host"
    };
    const a = (e.title ?? "").trim();
    if (!a) return {
        error: "title is required"
    };
    const i = d.sanitizeTaskId(a);
    if (e.cron && e.fireAt) return {
        error: "provide either cron or fireAt, not both"
    };
    if (e.cron && !d.isValidCron(e.cron)) return {
        error: `invalid cron expression: "${e.cron}"`
    };
    const t = E(e.fireAt);
    if (e.fireAt && t === void 0) return {
        error: `invalid fireAt: "${e.fireAt}"`
    };
    if (t !== void 0 && t < Date.now()) return {
        error: "fireAt must be in the future"
    };
    if (await n.manager.get(i)) return {
        error: `a scheduled task named "${i}" already exists`
    };
    const s = e.spec ?? {},
        k = M(o, s);
    if (k) return k;
    const g = n.manager.getTaskFilesDir();
    if (!g) return {
        error: "scheduled tasks not initialized for this account"
    };
    const $ = await d.writeScheduledTaskFile(i, s.prompt ?? "", a, g),
        l = await n.manager.create({
            scheduledTaskId: i,
            filePath: $,
            cronExpression: e.cron,
            fireAt: t,
            model: n.normalizeModel(s.model),
            userSelectedFolders: (w = s.cowork) == null ? void 0 : w.folders,
            userSelectedFiles: (p = s.cowork) == null ? void 0 : p.files,
            userSelectedProjectUuids: (v = s.cowork) == null ? void 0 : v.projectUuids,
            spaceId: (S = s.cowork) == null ? void 0 : S.spaceId,
            cwd: (I = s.code) == null ? void 0 : I.cwd,
            useWorktree: (y = s.code) == null ? void 0 : y.useWorktree,
            sourceBranch: (A = s.code) == null ? void 0 : A.sourceBranch,
            dispatchSubscribed: e.subscribed
        });
    return l ? (d.logger.info(`[dispatch-scheduled-tasks] created ${l.id} (runner=${o}, cron=${l.cronExpression??"-"}, fireAt=${l.fireAt??"-"}, subscribed=${!!e.subscribed})`), {
        task: b(l, o, r)
    }) : {
        error: "failed to create scheduled task"
    }
}
async function x(r, e) {
    const o = e.runnerId ?? "",
        n = c(o);
    if (!n) return {
        error: `unknown runner "${o}"`
    };
    if (!n.manager.isInitialized()) return {
        error: "scheduled tasks not initialized on this host"
    };
    if (!e.taskId) return {
        error: "taskId is required"
    };
    const a = await n.manager.get(e.taskId);
    if (!a) return {
        error: `scheduled task "${e.taskId}" not found`
    };
    if (e.cron !== void 0 && !d.isValidCron(e.cron)) return {
        error: `invalid cron expression: "${e.cron}"`
    };
    const i = E(e.fireAt);
    if (e.fireAt !== void 0 && i === void 0) return {
        error: `invalid fireAt: "${e.fireAt}"`
    };
    const t = {};
    e.enabled !== void 0 && (t.enabled = e.enabled), e.cron !== void 0 && (t.cronExpression = e.cron), i !== void 0 && (t.fireAt = i), e.subscribed !== void 0 && (t.dispatchSubscribed = e.subscribed), e.title !== void 0 && d.logger.info(`[dispatch-scheduled-tasks] update ${e.taskId}: title rename not supported, ignoring`);
    const s = Object.keys(t).length > 0 ? await n.manager.update(e.taskId, t) : a;
    return s ? {
        task: b(s, o, r)
    } : {
        error: "failed to update scheduled task"
    }
}
async function C(r, e) {
    const o = e.runnerId ? c(e.runnerId) ? [e.runnerId] : [] : [h, u],
        n = [];
    for (const a of o) {
        const {
            manager: i
        } = D[a];
        if (i.isInitialized())
            for (const t of await i.getAll()) n.push(b(t, a, r))
    }
    return n
}
exports.handleCreateScheduledTask = R;
exports.handleListScheduledTasks = C;
exports.handleUpdateScheduledTask = x;
exports.isDispatchSubscribed = z;
//# sourceMappingURL=index.chunk-DgthhoM5.js.map