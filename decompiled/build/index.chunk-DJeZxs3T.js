"use strict";

(function () {
  try {
    var a = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    a.SENTRY_RELEASE = {
      id: "df1d8a339dfabcf359af7144fe142b59ff7d9a0f"
    };
  } catch {}
})();
try {
  (function () {
    var a = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    var r = new a.Error().stack;
    if (r) {
      a._sentryDebugIds = a._sentryDebugIds || {};
      a._sentryDebugIds[r] = "026ff0c9-46cc-4642-a626-ab98091b9340";
      a._sentryDebugIdIdentifier = "sentry-dbid-026ff0c9-46cc-4642-a626-ab98091b9340";
    }
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
const k = require("./index.chunk-DzRNRXNe.js");
const m = require("./index.chunk-c42vKsva.js");
const P = require("./index.chunk-CO6ZZEeq.js");
const N = 60000;
const R = 5;
const I = "__merge_conflict__";
function L(a) {
  const r = (a.prs ?? []).filter(s => !s.inherited && !P.isTerminalPrState(s.state)).map(s => ({
    pr: s,
    branchMatched: a.branch !== undefined && s.branch === a.branch
  }));
  const n = r.filter(s => s.branchMatched);
  if (n.length > 0) {
    return n;
  } else {
    return r;
  }
}
const D = new Set(["CHANGES_REQUESTED", "COMMENTED"]);
const O = new Set(["OWNER", "MEMBER", "COLLABORATOR"]);
function q(a) {
  return a.userType === "Bot" || O.has(a.authorAssociation ?? "");
}
function E(a, r) {
  return `${(r ?? "").toLowerCase()}#${a}`;
}
class B {
  constructor(r) {
    this.sessionManager = r;
    this.sweepTimer = null;
    this.diffState = new Map();
    this.failureCounts = new Map();
    this.sendFailureCounts = new Map();
    this.sweepTick = 0;
    this.sweeping = false;
    this.resweepPending = false;
    this.onSessionEvent = n => this.handleSessionEvent(n);
  }
  start() {
    if (!this.sweepTimer) {
      this.sweepTimer = setInterval(() => void this.sweep(), N);
      setTimeout(() => void this.sweep(), 15000);
      this.sessionManager.on("event", this.onSessionEvent);
    }
  }
  stop() {
    if (this.sweepTimer) {
      clearInterval(this.sweepTimer);
      this.sweepTimer = null;
    }
    this.sessionManager.off("event", this.onSessionEvent);
  }
  handleSessionEvent(r) {
    var s;
    if (r.type !== "session_updated" || !r.session) {
      return;
    }
    const n = r.session;
    if (!n.autoFixEnabled) {
      this.diffState.delete(n.sessionId);
      this.failureCounts.delete(n.sessionId);
      this.sendFailureCounts.delete(n.sessionId);
      return;
    }
    if (!this.diffState.has(n.sessionId) && !n.isArchived && (s = n.prs) != null && !!s.length) {
      this.diffState.set(n.sessionId, new Map());
      if (!n.isRunning) {
        m.logger.info(`[AutoFixEngine] auto-fix enabled; kicking ${n.sessionId}`);
        this.requestSweep();
      }
    }
  }
  requestSweep() {
    if (this.sweeping) {
      this.resweepPending = true;
      return;
    }
    this.sweep();
  }
  async sweep() {
    var r;
    if (!this.sweeping) {
      this.sweeping = true;
      try {
        const s = (await this.sessionManager.getAllSessions()).filter(e => {
          var i;
          return e.autoFixEnabled && !e.isArchived && (((i = e.prs) == null ? undefined : i.length) ?? 0) > 0;
        });
        const h = (e, i) => e.branchMatched !== i.branchMatched ? e.branchMatched : e.session.createdAt !== i.session.createdAt ? e.session.createdAt < i.session.createdAt : e.session.sessionId.localeCompare(i.session.sessionId) < 0;
        const u = new Map();
        for (const e of s) {
          for (const i of L(e)) {
            const o = {
              session: e,
              ...i
            };
            const l = E(o.pr.prNumber, o.pr.repo);
            const w = u.get(l);
            if (w) {
              w.push(o);
            } else {
              u.set(l, [o]);
            }
          }
        }
        const p = [...u.entries()].sort((e, i) => i[1][0].pr.prNumber - e[1][0].pr.prNumber || e[0].localeCompare(i[0]));
        const c = new Map();
        for (const [, e] of p) {
          const i = e.some(l => l.branchMatched);
          let o;
          for (const l of e) {
            if (!c.has(l.session.sessionId) && (!i || !!l.branchMatched)) {
              if (!o || h(l, o)) {
                o = l;
              }
            }
          }
          if (o) {
            c.set(o.session.sessionId, {
              ...o.pr,
              renamedFrom: o.pr.renamedFrom ?? ((r = e.find(l => l.pr.renamedFrom)) == null ? undefined : r.pr.renamedFrom)
            });
          }
        }
        const f = new Set(s.map(e => e.sessionId));
        for (const [e, i] of this.diffState) {
          if (!f.has(e)) {
            this.diffState.delete(e);
            continue;
          }
          const o = c.get(e);
          const l = o ? E(o.prNumber, o.repo) : undefined;
          for (const w of i.keys()) {
            if (w !== l) {
              i.delete(w);
            }
          }
        }
        for (const e of this.failureCounts.keys()) {
          if (!f.has(e)) {
            this.failureCounts.delete(e);
          }
        }
        for (const e of this.sendFailureCounts.keys()) {
          if (!f.has(e)) {
            this.sendFailureCounts.delete(e);
          }
        }
        const g = this.sweepTick++;
        const d = s.filter(e => {
          if (!c.has(e.sessionId) || e.isRunning) {
            return false;
          }
          const i = Math.max(this.failureCounts.get(e.sessionId) ?? 0, this.sendFailureCounts.get(e.sessionId) ?? 0);
          if (i === 0) {
            return true;
          }
          const o = Math.min(2 ** i, 16);
          return g % o === 0;
        });
        for (let e = 0; e < d.length; e += R) {
          const i = d.slice(e, e + R);
          await Promise.all(i.map(o => this.checkSession(o, c.get(o.sessionId))));
        }
      } catch (n) {
        m.logger.error("[AutoFixEngine] Sweep failed", n);
      } finally {
        this.sweeping = false;
        if (this.resweepPending) {
          this.resweepPending = false;
          this.sweep();
        }
      }
    }
  }
  async checkSession(r, n) {
    var d;
    const {
      sessionId: s
    } = r;
    const {
      prNumber: h,
      repo: u
    } = n;
    const p = E(h, u);
    let c = this.diffState.get(s);
    if (!c) {
      c = new Map();
      this.diffState.set(s, c);
    }
    const f = c.get(p) ?? {
      notifiedFailures: new Set()
    };
    const g = r.originCwd || r.cwd;
    try {
      const [e, i, o, l, w] = await Promise.all([this.sessionManager.githubPr.getPrChecks(g, h, u), this.sessionManager.githubPr.getPrReviewComments(g, h, u, {
        includeResolved: false
      }).catch(() => ({
        success: false
      })), this.sessionManager.githubPr.getPrReviews(g, h, u).catch(() => ({
        success: false
      })), this.sessionManager.githubPr.getPrIssueComments(g, h, u).catch(() => ({
        success: false
      })), this.sessionManager.githubPr.getGhLogin()]);
      if (!e.success) {
        this.failureCounts.set(s, e.transient ? 1 : (this.failureCounts.get(s) ?? 0) + 1);
        return;
      }
      this.failureCounts.delete(s);
      const b = (d = e.prState) == null ? undefined : d.toUpperCase();
      if (P.isTerminalPrState(b)) {
        if (c.delete(p)) {
          m.logger.info(`[AutoFixEngine] PR ${h} is ${b}; dropped diff entry for ${s}`);
        }
        if (u && b === "MERGED") {
          this.sessionManager.githubPr.markPrBindingState(s, u, h, b);
        }
        this.sendFailureCounts.delete(s);
        return;
      }
      c.set(p, f);
      const v = new Set((e.checks ?? []).filter(t => t.bucket === "fail").map(t => t.name));
      const T = k.isConflicting(e.mergeable, e.mergeStateStatus);
      const _ = [...(i.success ? (i.comments ?? []).map(t => ({
        ...t,
        dedupId: t.id
      })) : []), ...(o.success ? (o.reviews ?? []).filter(t => D.has(t.state) && (t.body ?? "").trim().length > 0).map(t => ({
        ...t,
        dedupId: `r${t.id}`
      })) : []), ...(l.success ? (l.comments ?? []).filter(t => (t.body ?? "").trim().length > 0).map(t => ({
        ...t,
        dedupId: `i${t.id}`
      })) : [])];
      const y = new Set(v);
      if (T || f.notifiedFailures.has(I) && k.isMergeStateUnknown(e.mergeable, e.mergeStateStatus)) {
        y.add(I);
      }
      const A = new Set(this.sessionManager.getSeenCommentIdsForPr(p));
      if (n.renamedFrom) {
        for (const t of this.sessionManager.getSeenCommentIdsForPr(E(h, n.renamedFrom))) {
          A.add(t);
        }
      }
      const $ = [...v].filter(t => !f.notifiedFailures.has(t));
      const F = T && !f.notifiedFailures.has(I);
      const S = _.filter(t => !A.has(t.dedupId) && t.author !== w && q(t));
      if ($.length === 0 && !F && S.length === 0) {
        f.notifiedFailures = y;
        return;
      }
      const x = W($, F, S, h, u);
      const C = () => {
        f.notifiedFailures = new Set([...f.notifiedFailures].filter(t => y.has(t)));
      };
      if (this.sessionManager.cliGovernor.isAtCap()) {
        m.logger.info(`[AutoFixEngine] CLI process cap hit; deferring wake for ${s} to next sweep`);
        C();
        return;
      }
      m.logger.info(`[AutoFixEngine] Waking ${s}: ${$.length} new failure(s)${F ? " + conflict" : ""}${S.length ? ` + ${S.length} comment(s)` : ""}`);
      const M = await this.sessionManager.sendMessage(s, x, undefined, {
        origin: {
          kind: "auto-continuation"
        },
        initiator: "ci-monitor"
      }).catch(t => {
        C();
        this.sendFailureCounts.set(s, (this.sendFailureCounts.get(s) ?? 0) + 1);
        throw t;
      });
      if (!M.delivered) {
        m.logger.info(`[AutoFixEngine] sendMessage dropped for ${s}: ${M.reason}`);
        C();
        this.sendFailureCounts.set(s, (this.sendFailureCounts.get(s) ?? 0) + 1);
        return;
      }
      this.sendFailureCounts.delete(s);
      if (M.queued) {
        m.logger.info(`[AutoFixEngine] sendMessage queued for ${s}; deferring dedup commit`);
        C();
        return;
      }
      f.notifiedFailures = y;
      this.sessionManager.addSeenCommentIds(s, p, S.map(t => t.dedupId));
    } catch (e) {
      m.logger.error(`[AutoFixEngine] checkSession failed for ${s}`, e);
    }
  }
}
function W(a, r, n, s, h) {
  const u = h ? `${h} PR #${s}` : `PR #${s}`;
  const p = h ? ` --repo ${h}` : "";
  const c = [];
  if (a.length > 0) {
    const f = a.map(d => `"${d}"`).join(", ");
    const g = a.length === 1 ? "check" : "checks";
    c.push(`CI ${g} ${f} failed on ${u}. Run \`gh pr checks ${s}${p}\` to see details, then fix the failing ${g}.`);
  }
  if (r) {
    c.push(`${u} has merge conflicts. Please resolve the conflicts so the PR can be merged.`);
  }
  if (n.length > 0) {
    const f = n.length === 1 ? "comment" : "comments";
    const g = n.map(d => {
      if (d.path) {
        const i = d.line ? `${d.path}:${d.line}` : d.path;
        const o = typeof d.dedupId == "number" ? ` [comment_id=${d.dedupId}]` : "";
        return `- ${d.author} on ${i}${o}: ${d.body}`;
      }
      const e = d.state ? ` (${d.state.toLowerCase().replace(/_/g, " ")})` : "";
      return `- ${d.author}${e}: ${d.body}`;
    }).join(`
`);
    c.push(`${u} has ${n.length} new review ${f}:
${g}

Please address the feedback and push a fix. Then, for each inline comment you addressed (those with a comment_id), post a one-line reply on the thread via \`gh api\` saying what you changed (or why you didn't). End each reply with the line "_🤖 Addressed by [Claude Code](https://claude.com/claude-code)_" so reviewers can see it was automated. Then resolve the thread. Skip replies for comments you didn't act on.`);
  }
  return `<ci-monitor-event>${c.join(`

`)}</ci-monitor-event>`;
}
exports.AutoFixEngine = B;
//# sourceMappingURL=index.chunk-DJeZxs3T.js.map