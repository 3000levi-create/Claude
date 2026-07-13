"use strict";

(function () {
  try {
    var s = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    s.SENTRY_RELEASE = {
      id: "df1d8a339dfabcf359af7144fe142b59ff7d9a0f"
    };
  } catch {}
})();
try {
  (function () {
    var s = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    var e = new s.Error().stack;
    if (e) {
      s._sentryDebugIds = s._sentryDebugIds || {};
      s._sentryDebugIds[e] = "167ad1da-c32c-4482-b6c9-7daa5053aacf";
      s._sentryDebugIdIdentifier = "sentry-dbid-167ad1da-c32c-4482-b6c9-7daa5053aacf";
    }
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
const m = require("node:fs/promises");
const y = require("node:path");
const l = require("./index.chunk-c42vKsva.js");
const h = require("./index.chunk-B12bkqAs.js");
function p(s) {
  const e = Object.create(null, {
    [Symbol.toStringTag]: {
      value: "Module"
    }
  });
  if (s) {
    for (const i in s) {
      if (i !== "default") {
        const r = Object.getOwnPropertyDescriptor(s, i);
        Object.defineProperty(e, i, r.get ? r : {
          enumerable: true,
          get: () => s[i]
        });
      }
    }
  }
  e.default = s;
  return Object.freeze(e);
}
const u = p(m);
const d = p(y);
const b = 1800000;
const W = 3;
const A = 300000;
function g(s, e, i, r) {
  if (s.leasedBy === null) {
    return {
      eligible: true,
      lastActivityAt: 0,
      unleased: true
    };
  } else if (r - s.createdAt < A) {
    return {
      eligible: false,
      reason: "recent"
    };
  } else if (e) {
    if (e.isRemote) {
      return {
        eligible: false,
        reason: "remote"
      };
    } else if (e.worktreePinned) {
      return {
        eligible: false,
        reason: "pinned"
      };
    } else if (e.isArchived) {
      return {
        eligible: true,
        lastActivityAt: e.lastActivityAt,
        unleased: false
      };
    } else if (e.isRunning) {
      return {
        eligible: false,
        reason: "running"
      };
    } else if (r - e.lastActivityAt < i) {
      return {
        eligible: false,
        reason: "recent"
      };
    } else {
      return {
        eligible: true,
        lastActivityAt: e.lastActivityAt,
        unleased: false
      };
    }
  } else {
    return {
      eligible: true,
      lastActivityAt: 0,
      unleased: true
    };
  }
}
function f(s) {
  return [...s].sort((e, i) => {
    const r = e.pooledAt;
    const a = i.pooledAt;
    if (!!r != !!a) {
      if (r) {
        return -1;
      } else {
        return 1;
      }
    } else if (r && a) {
      return a - r;
    } else if (e.unleased !== i.unleased) {
      if (e.unleased) {
        return -1;
      } else {
        return 1;
      }
    } else {
      return e.lastActivityAt - i.lastActivityAt;
    }
  });
}
function k(s, e) {
  const i = new Map();
  for (const a of s) {
    const n = i.get(a.baseRepo) ?? [];
    n.push(a);
    i.set(a.baseRepo, n);
  }
  const r = [];
  for (const a of i.values()) {
    a.sort((n, t) => t.lastActivityAt - n.lastActivityAt);
    if (e.maxWarm > 0) {
      r.push(...a.slice(e.maxWarm));
    } else {
      for (let n = 1; n < a.length; n++) {
        if (e.now - a[n].lastActivityAt >= e.reapAfterMs) {
          r.push(a[n]);
        }
      }
    }
  }
  return r;
}
class w {
  constructor(e) {
    this.deps = e;
    this.sweepTimer = null;
    this.initialSweepTimer = null;
    this.sweeping = false;
    this.mutex = Promise.resolve();
    this.now = e.now ?? Date.now;
  }
  withLock(e) {
    const i = this.mutex.then(e, e);
    this.mutex = i.catch(() => {});
    return i;
  }
  leaseStillMatches(e, i) {
    var a;
    return ((a = this.deps.worktreeManager.listAllWorktrees().find(n => n.name === e)) == null ? undefined : a.leasedBy) === i;
  }
  isEnabled() {
    return this.deps.isEnabled();
  }
  start() {
    if (!this.sweepTimer) {
      this.sweepTimer = setInterval(() => void this.sweep(), b);
      this.initialSweepTimer = setTimeout(() => void this.sweep(), 60000);
    }
  }
  stop() {
    if (this.sweepTimer) {
      clearInterval(this.sweepTimer);
      this.sweepTimer = null;
    }
    if (this.initialSweepTimer) {
      clearTimeout(this.initialSweepTimer);
      this.initialSweepTimer = null;
    }
  }
  async tryAcquire(e) {
    var i;
    var r;
    if (!this.isEnabled() || !this.deps.hasLoadedSessions() || !e.existingBranch && (await h.hasWorktreeCreateHook(e.baseRepo).catch(() => false))) {
      return null;
    }
    if (e.sourceBranch && !e.existingBranch && ((i = e.signal) == null || !i.aborted)) {
      const a = f(this.eligibleEntries(e.baseRepo).filter(n => !n.hookBased))[0];
      if (a && (await this.deps.worktreeManager.refreshSourceRef(a.baseRepo, e.sourceBranch, e.signal), (r = e.signal) != null && r.aborted)) {
        return null;
      }
    }
    return this.withLock(() => this.tryAcquireLocked(e));
  }
  async tryAcquireLocked(e) {
    var a;
    var n;
    if (!this.isEnabled() || !this.deps.hasLoadedSessions()) {
      return null;
    }
    const i = f(this.eligibleEntries(e.baseRepo).filter(t => !t.hookBased));
    if (i.length === 0) {
      return null;
    }
    if (e.preferPath) {
      const t = d.normalize(e.preferPath);
      const o = i.findIndex(c => d.normalize(c.path) === t);
      if (o > 0) {
        i.unshift(...i.splice(o, 1));
      }
    }
    let r = 0;
    for (const t of i) {
      r++;
      if (!(await this.deps.dirExists(t.path))) {
        this.pruneOrphan(t);
        continue;
      }
      if (!(await this.deps.dirExists(t.baseRepo))) {
        this.pruneOrphan(t);
        continue;
      }
      if (await this.deps.hasKeepSentinel(t.path)) {
        continue;
      }
      if (!(await this.deps.worktreeManager.isWorktreeClean(t))) {
        if (t.pooledAt) {
          this.deps.worktreeManager.setWorktreePooledAt(t.name, undefined);
        }
        continue;
      }
      if ((a = e.signal) != null && a.aborted) {
        return null;
      }
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
      if (o == null || !o.success) {
        if ((n = e.signal) != null && n.aborted) {
          return null;
        }
        continue;
      }
      if (t.leasedBy) {
        this.deps.detachWorktreeFromSession(t.leasedBy);
      }
      l.logger.info(`[WorktreePool] Reused worktree ${o.worktree.name} for session ${e.sessionId} (was leased by ${t.leasedBy ?? "none"})`);
      return o;
    }
    l.logger.info(`[WorktreePool] No reusable worktree for ${e.baseRepo} (${r}/${i.length} candidates checked)`);
    return null;
  }
  pruneOrphan(e) {
    l.logger.info(`[WorktreePool] Pruning orphaned store entry ${e.name} (directory gone)`);
    this.deps.worktreeManager.removeWorktreeByName(e.name).catch(i => l.logger.warn("[WorktreePool] orphan prune failed", i));
    if (e.leasedBy) {
      this.deps.detachWorktreeFromSession(e.leasedBy, e.path);
    }
  }
  stillEligibleForSweep(e) {
    if (!this.leaseStillMatches(e.name, e.leasedBy)) {
      return false;
    }
    if (e.leasedBy) {
      const i = this.deps.getSessionPoolState(e.leasedBy);
      if (i && (i.isRunning || i.worktreePinned)) {
        return false;
      }
    }
    return true;
  }
  async releaseOrRemove(e, i) {
    const r = this.deps.worktreeManager.getWorktreeForSession(e);
    if (r != null && r.hookBased) {
      this.deps.detachWorktreeFromSession(e);
      await this.deps.worktreeManager.removeWorktreeByName(r.name, i);
      return;
    }
    if (!this.isEnabled()) {
      await this.deps.worktreeManager.removeWorktree(e, i);
      return;
    }
    return this.withLock(() => this.releaseOrRemoveLocked(e, i));
  }
  async releaseOrRemoveLocked(e, i) {
    const r = this.deps.worktreeManager.getWorktreeForSession(e);
    if (r) {
      if (!(await this.deps.dirExists(r.path))) {
        l.logger.info(`[WorktreePool] ${r.name} directory gone on release; dropping store entry`);
        await this.deps.worktreeManager.removeWorktreeByName(r.name, i);
        this.deps.detachWorktreeFromSession(e);
        return;
      }
      if (await this.deps.hasKeepSentinel(r.path)) {
        l.logger.info(`[WorktreePool] ${r.name} has ${h.WORKTREE_KEEP_FILENAME}; leaving on disk`);
        return;
      }
      if (!(await this.deps.worktreeManager.isWorktreeClean(r))) {
        if (!(await this.deps.worktreeManager.resetWorktreeToClean(r))) {
          await this.deps.worktreeManager.removeWorktree(e, i);
          this.deps.detachWorktreeFromSession(e);
          return;
        }
        l.logger.info(`[WorktreePool] Reset dirty worktree ${r.name} to clean for pooling`);
      }
      if (!this.leaseStillMatches(r.name, e)) {
        l.logger.info(`[WorktreePool] Skipping release of ${r.name} — lease changed during reset`);
        return;
      }
      await this.deps.worktreeManager.detachWorktreeHead(r);
      this.deps.worktreeManager.setWorktreeLeasedBy(r.name, null);
      this.deps.worktreeManager.setWorktreePooledAt(r.name, this.now());
      this.deps.detachWorktreeFromSession(e);
      l.logger.info(`[WorktreePool] Released worktree ${r.name} to pool (was leased by ${e})`);
    }
  }
  async sweep() {
    if (!this.sweeping) {
      this.sweeping = true;
      try {
        await this.deps.worktreeManager.reapCreatingOrphans();
        if (!this.isEnabled()) {
          return;
        }
        if (!this.deps.hasLoadedSessions()) {
          l.logger.warn("[WorktreePool] sweep: skipping (sessions not loaded)");
          return;
        }
        const {
          reapAfterMs: e,
          maxWarm: i
        } = this.deps.prefs();
        const r = [];
        for (const t of this.eligibleEntries()) {
          if (!t.hookBased) {
            if (!(await this.deps.dirExists(t.path))) {
              this.pruneOrphan(t);
              continue;
            }
            if (!(await this.deps.hasKeepSentinel(t.path))) {
              if (await this.deps.worktreeManager.isWorktreeClean(t)) {
                r.push(t);
              }
            }
          }
        }
        const a = k(r, {
          reapAfterMs: e,
          maxWarm: i,
          now: this.now()
        }).sort((t, o) => t.lastActivityAt - o.lastActivityAt).slice(0, W);
        const n = new Set(a.map(t => t.name));
        for (const t of r) {
          if (!n.has(t.name)) {
            await this.withLock(async () => {
              if (this.stillEligibleForSweep(t)) {
                try {
                  if (t.leasedBy) {
                    await this.deps.worktreeManager.detachWorktreeHead(t);
                    this.deps.worktreeManager.setWorktreeLeasedBy(t.name, null);
                    this.deps.detachWorktreeFromSession(t.leasedBy, t.path);
                  }
                  if (!t.pooledAt) {
                    this.deps.worktreeManager.setWorktreePooledAt(t.name, this.now());
                  }
                } catch (o) {
                  l.logger.error(`[WorktreePool] survivor-loop failed for ${t.name}`, o);
                }
              }
            });
          }
        }
        for (const t of a) {
          await this.withLock(async () => {
            if (!this.stillEligibleForSweep(t)) {
              l.logger.info(`[WorktreePool] Skipping reap of ${t.name} — leased/resumed since scan`);
              return;
            }
            try {
              l.logger.info(`[WorktreePool] Reaping idle worktree ${t.name} in ${t.baseRepo}`);
              await this.deps.worktreeManager.removeWorktreeByName(t.name);
              if (t.leasedBy) {
                this.deps.detachWorktreeFromSession(t.leasedBy, t.path);
              }
            } catch (o) {
              l.logger.error(`[WorktreePool] reap failed for ${t.name}`, o);
            }
          });
        }
      } catch (e) {
        l.logger.error("[WorktreePool] sweep failed", e);
      } finally {
        this.sweeping = false;
      }
    }
  }
  eligibleEntries(e) {
    const {
      reapAfterMs: i
    } = this.deps.prefs();
    const r = this.now();
    const a = e ? d.normalize(e) : undefined;
    const n = [];
    for (const t of this.deps.worktreeManager.listAllWorktrees()) {
      if (t.status === "creating") {
        continue;
      }
      if (a !== undefined) {
        const c = d.normalize(t.baseRepo);
        if (a !== c && !a.startsWith(c + d.sep)) {
          continue;
        }
      }
      const o = g(t, t.leasedBy ? this.deps.getSessionPoolState(t.leasedBy) : undefined, i, r);
      if (o.eligible) {
        n.push({
          name: t.name,
          path: t.path,
          baseRepo: t.baseRepo,
          leasedBy: t.leasedBy,
          pooledAt: t.pooledAt,
          lastActivityAt: o.unleased ? t.pooledAt ?? 0 : o.lastActivityAt,
          unleased: o.unleased,
          hookBased: t.hookBased ?? false
        });
      }
    }
    return n;
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
        await u.access(e);
        return true;
      } catch {
        return false;
      }
    },
    hasKeepSentinel: async e => {
      try {
        await u.access(d.join(e, h.WORKTREE_KEEP_FILENAME));
        return true;
      } catch {
        return false;
      }
    },
    isEnabled: () => l.isFeatureEnabled("1992087837"),
    prefs: () => ({
      reapAfterMs: l.getAppPreference("ccWorktreeReapAfterHours") * 60 * 60 * 1000,
      maxWarm: l.getAppPreference("ccMaxWarmWorktrees")
    })
  });
}
exports.WorktreePool = w;
exports.classifyWorktree = g;
exports.createWorktreePool = S;
exports.planReap = k;
exports.rankAcquireCandidates = f;
//# sourceMappingURL=index.chunk-CeewR2qL.js.map