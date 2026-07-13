"use strict";

(function () {
  try {
    var i = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    i.SENTRY_RELEASE = {
      id: "df1d8a339dfabcf359af7144fe142b59ff7d9a0f"
    };
  } catch {}
})();
try {
  (function () {
    var i = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    var e = new i.Error().stack;
    if (e) {
      i._sentryDebugIds = i._sentryDebugIds || {};
      i._sentryDebugIds[e] = "b479b8c3-6bc8-49b6-be05-5aa3160cccaf";
      i._sentryDebugIdIdentifier = "sentry-dbid-b479b8c3-6bc8-49b6-be05-5aa3160cccaf";
    }
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
const I = require("node:fs/promises");
const u = require("node:path");
const o = require("./index.chunk-c42vKsva.js");
require("node:os");
const v = require("./index.chunk-B12bkqAs.js");
const f = require("./index.chunk-CO6ZZEeq.js");
const y = 300000;
const S = 3600000;
const k = 10;
class m {
  constructor(e) {
    this.sessionManager = e;
    this.sweepTimer = null;
    this.prCheckedAt = new Map();
    this.sweeping = false;
  }
  start() {
    if (!this.sweepTimer) {
      this.sweepTimer = setInterval(() => void this.sweep(), y);
      setTimeout(() => void this.sweep(), 30000);
    }
  }
  stop() {
    if (this.sweepTimer) {
      clearInterval(this.sweepTimer);
      this.sweepTimer = null;
    }
  }
  async sweep() {
    if (!this.sweeping && o.getAppPreference("ccAutoArchiveOnPrClose")) {
      this.sweeping = true;
      try {
        const e = await this.sessionManager.getAllSessions();
        const n = Date.now();
        const a = e.filter(r => {
          if (r.isArchived || r.isRunning || this.sessionManager.hasLosableWork(r.sessionId) || this.sessionManager.isAutoArchiveExempt(r.sessionId)) {
            return false;
          }
          const s = b(r.prs);
          if (s.length && s.every(d => f.isTerminalPrState(d.state))) {
            return true;
          }
          const t = this.prCheckedAt.get(r.sessionId) ?? 0;
          return n - t >= S;
        });
        for (let r = 0; r < a.length; r += k) {
          const s = a.slice(r, r + k);
          await Promise.all(s.map(t => this.checkAndArchive(t, n, e)));
        }
      } catch (e) {
        o.logger.error("[AutoArchiveEngine] Sweep failed", e);
      } finally {
        this.sweeping = false;
      }
    }
  }
  async checkAndArchive(e, n, a) {
    var r;
    var s;
    try {
      const t = b(e.prs);
      const d = t.filter(h => !f.isTerminalPrState(h.state));
      if (d.length > 1) {
        this.prCheckedAt.set(e.sessionId, n);
        return;
      }
      let c = t.length > 0 && d.length === 0 ? ((s = (r = t[t.length - 1]) == null ? undefined : r.state) == null ? undefined : s.toLowerCase()) ?? null : null;
      if (!f.isTerminalPrState(c)) {
        c = await this.lookupPrState(e);
        if (c !== null) {
          this.prCheckedAt.set(e.sessionId, n);
        }
      }
      if (!f.isTerminalPrState(c)) {
        return;
      }
      const l = v.gitWorktreeManager.getWorktreeForSession(e.sessionId);
      const p = l ? o.canonicalizeWslPath(l.path) : undefined;
      const P = p && !o.isUnsafeUnc(p) ? await I.access(p).then(() => true, () => false) : false;
      if (l && P && !(await v.gitWorktreeManager.isWorktreeClean(l))) {
        o.logger.info(`[AutoArchiveEngine] Skipping ${e.sessionId}: worktree ${l.name} not confirmed clean`);
        return;
      }
      if (this.sessionManager.hasLosableWork(e.sessionId)) {
        return;
      }
      const w = e.worktreePath;
      const A = w ? a.find(h => h.sessionId !== e.sessionId && !h.isArchived && T(h.cwd, w)) : undefined;
      if (A) {
        o.logger.info(`[AutoArchiveEngine] Archiving ${e.sessionId} without worktree cleanup: ${A.sessionId} is using ${w}`);
      } else {
        o.logger.info(`[AutoArchiveEngine] Archiving ${e.sessionId} (PR ${c})`);
      }
      await this.sessionManager.archiveSession(e.sessionId, {
        cleanupWorktree: !A
      });
    } catch (t) {
      o.logger.error(`[AutoArchiveEngine] checkAndArchive failed for ${e.sessionId}`, t);
    }
  }
  async lookupPrState(e) {
    var r;
    var s;
    const n = b(e.prs);
    const a = n.find(t => !f.isTerminalPrState(t.state)) ?? n[0];
    if (a) {
      const t = await this.sessionManager.githubPr.getPrChecks(e.originCwd || e.cwd, a.prNumber, a.repo);
      if (t.success) {
        return ((r = t.prState) == null ? undefined : r.toLowerCase()) ?? g;
      } else if (t.transient) {
        return null;
      } else {
        return g;
      }
    }
    if (e.worktreePath) {
      const t = await this.sessionManager.githubPr.getPrStateForBranch(e.worktreePath, undefined, undefined, {
        includeTerminal: true
      });
      if (t.success) {
        return ((s = t.state) == null ? undefined : s.toLowerCase()) ?? g;
      } else {
        return null;
      }
    }
    return g;
  }
}
function b(i) {
  return (i ?? []).filter(e => !e.inherited);
}
const g = "no_pr_found";
function T(i, e) {
  const n = u.relative(u.resolve(e), u.resolve(i));
  if (n === "") {
    return true;
  } else {
    return !u.isAbsolute(n) && n !== ".." && !n.startsWith(`..${u.sep}`);
  }
}
exports.AutoArchiveEngine = m;
//# sourceMappingURL=index.chunk-B1RbNaKt.js.map