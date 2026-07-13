"use strict";
(function() {
    try {
        var s = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
        s.SENTRY_RELEASE = {
            id: "df1d8a339dfabcf359af7144fe142b59ff7d9a0f"
        }
    } catch {}
})();
try {
    (function() {
        var s = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            e = new s.Error().stack;
        e && (s._sentryDebugIds = s._sentryDebugIds || {}, s._sentryDebugIds[e] = "167ad1da-c32c-4482-b6c9-7daa5053aacf", s._sentryDebugIdIdentifier = "sentry-dbid-167ad1da-c32c-4482-b6c9-7daa5053aacf")
    })()
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
const m = require("node:fs/promises"),
    y = require("node:path"),
    l = require("./index.chunk-c42vKsva.js"),
    h = require("./index.chunk-B12bkqAs.js");

function p(s) {
    const e = Object.create(null, {
        [Symbol.toStringTag]: {
            value: "Module"
        }
    });
    if (s) {
        for (const i in s)
            if (i !== "default") {
                const r = Object.getOwnPropertyDescriptor(s, i);
                Object.defineProperty(e, i, r.get ? r : {
                    enumerable: !0,
                    get: () => s[i]
                })
            }
    }
    return e.default = s, Object.freeze(e)
}
const u = p(m),
    d = p(y),
    b = 1800 * 1e3,
    W = 3,
    A = 300 * 1e3;

function g(s, e, i, r) {
    return s.leasedBy === null ? {
        eligible: !0,
        lastActivityAt: 0,
        unleased: !0
    } : r - s.createdAt < A ? {
        eligible: !1,
        reason: "recent"
    } : e ? e.isRemote ? {
        eligible: !1,
        reason: "remote"
    } : e.worktreePinned ? {
        eligible: !1,
        reason: "pinned"
    } : e.isArchived ? {
        eligible: !0,
        lastActivityAt: e.lastActivityAt,
        unleased: !1
    } : e.isRunning ? {
        eligible: !1,
        reason: "running"
    } : r - e.lastActivityAt < i ? {
        eligible: !1,
        reason: "recent"
    } : {
        eligible: !0,
        lastActivityAt: e.lastActivityAt,
        unleased: !1
    } : {
        eligible: !0,
        lastActivityAt: 0,
        unleased: !0
    }
}

function f(s) {
    return [...s].sort((e, i) => {
        const r = e.pooledAt,
            a = i.pooledAt;
        return !!r != !!a ? r ? -1 : 1 : r && a ? a - r : e.unleased !== i.unleased ? e.unleased ? -1 : 1 : e.lastActivityAt - i.lastActivityAt
    })
}

function k(s, e) {
    const i = new Map;
    for (const a of s) {
        const n = i.get(a.baseRepo) ?? [];
        n.push(a), i.set(a.baseRepo, n)
    }
    const r = [];
    for (const a of i.values())
        if (a.sort((n, t) => t.lastActivityAt - n.lastActivityAt), e.maxWarm > 0) r.push(...a.slice(e.maxWarm));
        else
            for (let n = 1; n < a.length; n++) e.now - a[n].lastActivityAt >= e.reapAfterMs && r.push(a[n]);
    return r
}
class w {
    constructor(e) {
        this.deps = e, this.sweepTimer = null, this.initialSweepTimer = null, this.sweeping = !1, this.mutex = Promise.resolve(), this.now = e.now ?? Date.now
    }
    withLock(e) {
        const i = this.mutex.then(e, e);
        return this.mutex = i.catch(() => {}), i
    }
    leaseStillMatches(e, i) {
        var a;
        return ((a = this.deps.worktreeManager.listAllWorktrees().find(n => n.name === e)) == null ? void 0 : a.leasedBy) === i
    }
    isEnabled() {
        return this.deps.isEnabled()
    }
    start() {
        this.sweepTimer || (this.sweepTimer = setInterval(() => void this.sweep(), b), this.initialSweepTimer = setTimeout(() => void this.sweep(), 6e4))
    }
    stop() {
        this.sweepTimer && (clearInterval(this.sweepTimer), this.sweepTimer = null), this.initialSweepTimer && (clearTimeout(this.initialSweepTimer), this.initialSweepTimer = null)
    }
    async tryAcquire(e) {
        var i, r;
        if (!this.isEnabled() || !this.deps.hasLoadedSessions() || !e.existingBranch && await h.hasWorktreeCreateHook(e.baseRepo).catch(() => !1)) return null;
        if (e.sourceBranch && !e.existingBranch && !((i = e.signal) != null && i.aborted)) {
            const a = f(this.eligibleEntries(e.baseRepo).filter(n => !n.hookBased))[0];
            if (a && (await this.deps.worktreeManager.refreshSourceRef(a.baseRepo, e.sourceBranch, e.signal), (r = e.signal) != null && r.aborted)) return null
        }
        return this.withLock(() => this.tryAcquireLocked(e))
    }
    async tryAcquireLocked(e) {
        var a, n;
        if (!this.isEnabled() || !this.deps.hasLoadedSessions()) return null;
        const i = f(this.eligibleEntries(e.baseRepo).filter(t => !t.hookBased));
        if (i.length === 0) return null;
        if (e.preferPath) {
            const t = d.normalize(e.preferPath),
                o = i.findIndex(c => d.normalize(c.path) === t);
            o > 0 && i.unshift(...i.splice(o, 1))
        }
        let r = 0;
        for (const t of i) {
            if (r++, !await this.deps.dirExists(t.path)) {
                this.pruneOrphan(t);
                continue
            }
            if (!await this.deps.dirExists(t.baseRepo)) {
                this.pruneOrphan(t);
                continue
            }
            if (await this.deps.hasKeepSentinel(t.path)) continue;
            if (!await this.deps.worktreeManager.isWorktreeClean(t)) {
                t.pooledAt && this.deps.worktreeManager.setWorktreePooledAt(t.name, void 0);
                continue
            }
            if ((a = e.signal) != null && a.aborted) return null;
            const o = await this.deps.worktreeManager.rebindWorktree({
                name: t.name,
                expectedLeasedBy: t.leasedBy,
                toSessionId: e.sessionId,
                originalBaseRepo: e.baseRepo,
                sourceBranch: e.sourceBranch,
                existingBranch: e.existingBranch,
                signal: e.signal,
                branchHint: e.branchHint
            });
            if (!(o != null && o.success)) {
                if ((n = e.signal) != null && n.aborted) return null;
                continue
            }
            return t.leasedBy && this.deps.detachWorktreeFromSession(t.leasedBy), l.logger.info(`[WorktreePool] Reused worktree ${o.worktree.name} for session ${e.sessionId} (was leased by ${t.leasedBy??"none"})`), o
        }
        return l.logger.info(`[WorktreePool] No reusable worktree for ${e.baseRepo} (${r}/${i.length} candidates checked)`), null
    }
    pruneOrphan(e) {
        l.logger.info(`[WorktreePool] Pruning orphaned store entry ${e.name} (directory gone)`), this.deps.worktreeManager.removeWorktreeByName(e.name).catch(i => l.logger.warn("[WorktreePool] orphan prune failed", i)), e.leasedBy && this.deps.detachWorktreeFromSession(e.leasedBy, e.path)
    }
    stillEligibleForSweep(e) {
        if (!this.leaseStillMatches(e.name, e.leasedBy)) return !1;
        if (e.leasedBy) {
            const i = this.deps.getSessionPoolState(e.leasedBy);
            if (i && (i.isRunning || i.worktreePinned)) return !1
        }
        return !0
    }
    async releaseOrRemove(e, i) {
        const r = this.deps.worktreeManager.getWorktreeForSession(e);
        if (r != null && r.hookBased) {
            this.deps.detachWorktreeFromSession(e), await this.deps.worktreeManager.removeWorktreeByName(r.name, i);
            return
        }
        if (!this.isEnabled()) {
            await this.deps.worktreeManager.removeWorktree(e, i);
            return
        }
        return this.withLock(() => this.releaseOrRemoveLocked(e, i))
    }
    async releaseOrRemoveLocked(e, i) {
        const r = this.deps.worktreeManager.getWorktreeForSession(e);
        if (r) {
            if (!await this.deps.dirExists(r.path)) {
                l.logger.info(`[WorktreePool] ${r.name} directory gone on release; dropping store entry`), await this.deps.worktreeManager.removeWorktreeByName(r.name, i), this.deps.detachWorktreeFromSession(e);
                return
            }
            if (await this.deps.hasKeepSentinel(r.path)) {
                l.logger.info(`[WorktreePool] ${r.name} has ${h.WORKTREE_KEEP_FILENAME}; leaving on disk`);
                return
            }
            if (!await this.deps.worktreeManager.isWorktreeClean(r)) {
                if (!await this.deps.worktreeManager.resetWorktreeToClean(r)) {
                    await this.deps.worktreeManager.removeWorktree(e, i), this.deps.detachWorktreeFromSession(e);
                    return
                }
                l.logger.info(`[WorktreePool] Reset dirty worktree ${r.name} to clean for pooling`)
            }
            if (!this.leaseStillMatches(r.name, e)) {
                l.logger.info(`[WorktreePool] Skipping release of ${r.name} — lease changed during reset`);
                return
            }
            await this.deps.worktreeManager.detachWorktreeHead(r), this.deps.worktreeManager.setWorktreeLeasedBy(r.name, null), this.deps.worktreeManager.setWorktreePooledAt(r.name, this.now()), this.deps.detachWorktreeFromSession(e), l.logger.info(`[WorktreePool] Released worktree ${r.name} to pool (was leased by ${e})`)
        }
    }
    async sweep() {
        if (!this.sweeping) {
            this.sweeping = !0;
            try {
                if (await this.deps.worktreeManager.reapCreatingOrphans(), !this.isEnabled()) return;
                if (!this.deps.hasLoadedSessions()) {
                    l.logger.warn("[WorktreePool] sweep: skipping (sessions not loaded)");
                    return
                }
                const {
                    reapAfterMs: e,
                    maxWarm: i
                } = this.deps.prefs(), r = [];
                for (const t of this.eligibleEntries())
                    if (!t.hookBased) {
                        if (!await this.deps.dirExists(t.path)) {
                            this.pruneOrphan(t);
                            continue
                        }
                        await this.deps.hasKeepSentinel(t.path) || await this.deps.worktreeManager.isWorktreeClean(t) && r.push(t)
                    } const a = k(r, {
                        reapAfterMs: e,
                        maxWarm: i,
                        now: this.now()
                    }).sort((t, o) => t.lastActivityAt - o.lastActivityAt).slice(0, W),
                    n = new Set(a.map(t => t.name));
                for (const t of r) n.has(t.name) || await this.withLock(async () => {
                    if (this.stillEligibleForSweep(t)) try {
                        t.leasedBy && (await this.deps.worktreeManager.detachWorktreeHead(t), this.deps.worktreeManager.setWorktreeLeasedBy(t.name, null), this.deps.detachWorktreeFromSession(t.leasedBy, t.path)), t.pooledAt || this.deps.worktreeManager.setWorktreePooledAt(t.name, this.now())
                    } catch (o) {
                        l.logger.error(`[WorktreePool] survivor-loop failed for ${t.name}`, o)
                    }
                });
                for (const t of a) await this.withLock(async () => {
                    if (!this.stillEligibleForSweep(t)) {
                        l.logger.info(`[WorktreePool] Skipping reap of ${t.name} — leased/resumed since scan`);
                        return
                    }
                    try {
                        l.logger.info(`[WorktreePool] Reaping idle worktree ${t.name} in ${t.baseRepo}`), await this.deps.worktreeManager.removeWorktreeByName(t.name), t.leasedBy && this.deps.detachWorktreeFromSession(t.leasedBy, t.path)
                    } catch (o) {
                        l.logger.error(`[WorktreePool] reap failed for ${t.name}`, o)
                    }
                })
            } catch (e) {
                l.logger.error("[WorktreePool] sweep failed", e)
            } finally {
                this.sweeping = !1
            }
        }
    }
    eligibleEntries(e) {
        const {
            reapAfterMs: i
        } = this.deps.prefs(), r = this.now(), a = e ? d.normalize(e) : void 0, n = [];
        for (const t of this.deps.worktreeManager.listAllWorktrees()) {
            if (t.status === "creating") continue;
            if (a !== void 0) {
                const c = d.normalize(t.baseRepo);
                if (a !== c && !a.startsWith(c + d.sep)) continue
            }
            const o = g(t, t.leasedBy ? this.deps.getSessionPoolState(t.leasedBy) : void 0, i, r);
            o.eligible && n.push({
                name: t.name,
                path: t.path,
                baseRepo: t.baseRepo,
                leasedBy: t.leasedBy,
                pooledAt: t.pooledAt,
                lastActivityAt: o.unleased ? t.pooledAt ?? 0 : o.lastActivityAt,
                unleased: o.unleased,
                hookBased: t.hookBased ?? !1
            })
        }
        return n
    }
}

function S(s) {
    return new w({
        worktreeManager: h.gitWorktreeManager,
        getSessionPoolState: s.getSessionPoolState,
        hasLoadedSessions: s.hasLoadedSessions,
        detachWorktreeFromSession: s.detachWorktreeFromSession,
        dirExists: async e => {
            try {
                return await u.access(e), !0
            } catch {
                return !1
            }
        },
        hasKeepSentinel: async e => {
            try {
                return await u.access(d.join(e, h.WORKTREE_KEEP_FILENAME)), !0
            } catch {
                return !1
            }
        },
        isEnabled: () => l.isFeatureEnabled("1992087837"),
        prefs: () => ({
            reapAfterMs: l.getAppPreference("ccWorktreeReapAfterHours") * 60 * 60 * 1e3,
            maxWarm: l.getAppPreference("ccMaxWarmWorktrees")
        })
    })
}
exports.WorktreePool = w;
exports.classifyWorktree = g;
exports.createWorktreePool = S;
exports.planReap = k;
exports.rankAcquireCandidates = f;
//# sourceMappingURL=index.chunk-CeewR2qL.js.map