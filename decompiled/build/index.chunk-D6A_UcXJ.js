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
    var r = new i.Error().stack;
    if (r) {
      i._sentryDebugIds = i._sentryDebugIds || {};
      i._sentryDebugIds[r] = "a8c6e564-f515-434f-b81e-65707385b4be";
      i._sentryDebugIdIdentifier = "sentry-dbid-a8c6e564-f515-434f-b81e-65707385b4be";
    }
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
const ae = require("node:crypto");
const X = require("node:fs/promises");
const _ = require("node:path");
const H = require("electron");
const n = require("./index.chunk-c42vKsva.js");
const A = require("./index.chunk-B9PQH87U.js");
const N = require("./index.chunk-Cbl_wHZ5.js");
const T = require("./index.chunk-B12bkqAs.js");
const F = require("./index.chunk-BCx6X-Yy.js");
async function Y(i, r) {
  if (!r.startsWith("~")) {
    return r;
  }
  const a = F.getRemoteServerControllerForTarget(i);
  await a.ensureReady();
  return a.expandRemoteTilde(r);
}
async function le(i, r) {
  if (i.kind !== "wsl") {
    return {
      ok: false,
      error: "unsupported"
    };
  }
  try {
    n.assertSafeWslDistro(i.distro);
    const a = await Y(i, r);
    const u = n.wslUncPath(i.distro, a);
    if (!u) {
      n.logger.warn(`[remotePaths] reveal refused an unmappable path for ${n.remoteTargetLabel(i)}`);
      return {
        ok: false,
        error: "invalid path"
      };
    }
    const l = await X.lstat(u).catch(d => d);
    if (l instanceof Error && (l.code === "ENOENT" || l.code === "ENOTDIR")) {
      n.logger.warn(`[remotePaths] reveal target does not exist for ${n.remoteTargetLabel(i)}`);
      return {
        ok: false,
        error: "not found"
      };
    } else {
      H.shell.showItemInFolder(u);
      return {
        ok: true
      };
    }
  } catch {
    n.logger.warn(`[remotePaths] reveal failed for ${n.remoteTargetLabel(i)}`);
    return {
      ok: false,
      error: "reveal failed"
    };
  }
}
const ce = 30000;
const B = 5242880;
const ue = 2097152;
const de = 15000;
const fe = "4b825dc642cb6eb9a060e54bf8d69288fbee4904";
const ge = ["-c", "core.quotepath=false", "-c", "safe.directory=*", "-c", "core.fsmonitor=false"];
class J extends Error {}
function Z(i) {
  return i instanceof J;
}
const he = 262144;
const me = 67108864;
const Se = 6;
const V = 5000;
function O(i, r, a, u) {
  const {
    cwd: l,
    timeout: d = ce,
    maxBuffer: g = me,
    env: h
  } = u;
  return new Promise((y, S) => {
    const p = i.spawnAuxProcess({
      command: r,
      args: a,
      cwd: l,
      env: h
    });
    const w = [];
    const $ = [];
    let v = 0;
    let k = 0;
    let P = false;
    let e = false;
    let t = null;
    let o = false;
    const s = m => {
      if (!P) {
        P = true;
        clearTimeout(C);
        m();
      }
    };
    const c = m => s(() => {
      p.kill("SIGKILL");
      S(m);
    });
    const f = () => {
      if (!!e && !!o) {
        s(() => {
          if (t === 0) {
            y(Buffer.concat(w).toString("utf8"));
          } else {
            S(new Error(`remote ${r} ${a[0] ?? ""} exited ${t}: ${Buffer.concat($).toString("utf8").trim()}`));
          }
        });
      }
    };
    const C = setTimeout(() => c(new Error(`remote ${r} ${a[0] ?? ""} timed out`)), d);
    p.on("error", m => c(m instanceof Error ? m : new Error(String(m))));
    p.stdout.on("error", m => c(m instanceof Error ? m : new Error(String(m))));
    p.stderr.on("error", () => {});
    p.stdout.on("data", m => {
      v += m.length;
      if (v > g) {
        c(new J(`remote ${r} exceeded maxBuffer`));
        return;
      }
      w.push(m);
    });
    p.stdout.on("end", () => {
      o = true;
      f();
    });
    p.stderr.on("data", m => {
      if (k < he) {
        k += m.length;
        $.push(m);
      }
    });
    p.on("exit", m => {
      e = true;
      t = m;
      f();
    });
  });
}
function L(i, r, a, u = {}) {
  return O(i, "git", [...ge, ...a], {
    cwd: r,
    timeout: u.timeout,
    maxBuffer: u.maxBuffer,
    env: {
      GIT_TERMINAL_PROMPT: "0",
      GIT_OPTIONAL_LOCKS: "0"
    }
  });
}
function M(i, r, a = de) {
  let u;
  const l = new Promise((d, g) => {
    u = setTimeout(() => g(new Error("remote file read timed out")), a);
  });
  return Promise.race([i.readFile(r).then(d => d.exists ? d.content : null), l]).finally(() => clearTimeout(u));
}
async function ye(i, r, a) {
  const u = new Array(i.length);
  let l = 0;
  const d = async () => {
    while (l < i.length) {
      const g = l++;
      u[g] = await a(i[g]);
    }
  };
  await Promise.all(Array.from({
    length: Math.min(r, i.length)
  }, () => d()));
  return u;
}
function ee(i, r) {
  return `${i.replace(/\/$/, "")}/${r}`;
}
function x(i) {
  if (!i || i.startsWith("/") || i.startsWith("\\") || /^[a-zA-Z]:/.test(i)) {
    return true;
  } else {
    return i.split(/[/\\]/).some(r => r === "..");
  }
}
async function te(i, r, a, u) {
  if (!a || i.isWindows) {
    return {
      kind: "unverifiable"
    };
  }
  let l;
  try {
    l = (await O(i, "realpath", [u], {
      cwd: r,
      timeout: V
    })).trim();
  } catch {
    return {
      kind: "unverifiable"
    };
  }
  if (!l) {
    return {
      kind: "unverifiable"
    };
  }
  const d = a.replace(/\/$/, "");
  if (l === d || l.startsWith(`${d}/`)) {
    return {
      kind: "within",
      real: l
    };
  } else {
    return {
      kind: "escape"
    };
  }
}
async function re(i, r, a) {
  if (i.isWindows) {
    return null;
  }
  try {
    return (await O(i, "realpath", [a], {
      cwd: r,
      timeout: V
    })).trim() || null;
  } catch {
    return null;
  }
}
async function oe(i, r) {
  try {
    await i(["rev-parse", "--verify", `origin/${r}`]);
    return `origin/${r}`;
  } catch {}
  await i(["rev-parse", "--verify", r]);
  return r;
}
async function pe(i, r) {
  try {
    return await oe(i, r);
  } catch {
    return "HEAD";
  }
}
async function ne(i) {
  try {
    return (await i(["hash-object", "-t", "tree", "/dev/null"])).trim();
  } catch {
    return fe;
  }
}
async function G(i, r, a, u) {
  const l = (k, P) => L(i, r, k, P ? {
    timeout: P
  } : {});
  let d;
  try {
    d = (await l(["rev-parse", "--show-toplevel"])).trim();
  } catch {
    return {
      kind: "not_git"
    };
  }
  if (!d) {
    return {
      kind: "not_git"
    };
  }
  let g = true;
  try {
    await l(["rev-parse", "--verify", "HEAD"]);
  } catch {
    g = false;
  }
  if (!g) {
    if (u) {
      throw new Error(`[remoteGitDiff] explicit head '${u}' against unborn branch`);
    }
    let k = "HEAD";
    try {
      k = (await l(["symbolic-ref", "--short", "HEAD"])).trim() || "HEAD";
    } catch {}
    const P = await ne(l);
    return {
      kind: "ok",
      meta: {
        gitRoot: d,
        head: k,
        resolvedBase: P,
        mergeBase: P,
        aheadBy: 0,
        behindBy: 0
      }
    };
  }
  let h;
  try {
    h = (await l(["rev-parse", "--abbrev-ref", "HEAD"])).trim();
  } catch {
    return {
      kind: "not_git"
    };
  }
  const y = await pe(l, a);
  let S;
  if (u) {
    if (y === "HEAD") {
      throw new Error(`[remoteGitDiff] base ref '${a}' unresolvable for explicit-head diff`);
    }
    S = await oe(l, u);
  }
  const p = S ?? "HEAD";
  let w;
  try {
    w = (await l(["merge-base", y, p])).trim() || y;
  } catch {
    w = y;
  }
  let $ = 0;
  let v = 0;
  try {
    const k = await l(["rev-list", "--left-right", "--count", `${y}...${p}`]);
    const [P, e] = k.trim().split(/\s+/).map(Number);
    v = P || 0;
    $ = e || 0;
  } catch {}
  return {
    kind: "ok",
    meta: {
      gitRoot: d,
      head: u ?? h,
      resolvedBase: y,
      resolvedHead: S,
      mergeBase: w,
      aheadBy: $,
      behindBy: v
    }
  };
}
async function se(i, r, a, u) {
  let l;
  try {
    l = await L(i, r, ["ls-files", "--others", "--exclude-standard", "--full-name", ":/"]);
  } catch {
    return [];
  }
  const d = l.split(`
`).filter(Boolean);
  if (d.length === 0) {
    return [];
  }
  const g = d.slice(0, T.UNTRACKED_FILE_LIMIT);
  const h = await re(i, r, a);
  const S = (await ye(g, Se, w => $e(i, r, a, h, w, u))).filter(w => w !== null);
  const p = d.slice(T.UNTRACKED_FILE_LIMIT);
  for (const w of p.slice(0, T.UNTRACKED_FILE_LIMIT)) {
    S.push(T.zeroStatAddedFile(w));
  }
  if (p.length > T.UNTRACKED_FILE_LIMIT) {
    n.logger.info(`[remoteGitDiff] ${p.length - T.UNTRACKED_FILE_LIMIT} untracked files beyond the render cap omitted from the diff`);
  }
  return S;
}
function we(i) {
  if (i.includes("\0")) {
    return true;
  }
  let r = 0;
  for (let a = 0; a < i.length; a++) {
    if (i.charCodeAt(a) === 65533) {
      r++;
    }
  }
  return r > 3 && i.length > 0 && r / i.length > 0.01;
}
async function $e(i, r, a, u, l, d) {
  if (x(l)) {
    return null;
  }
  const g = ee(a, l);
  const h = await te(i, r, u, g);
  if (h.kind === "escape") {
    return null;
  }
  if (h.kind === "unverifiable") {
    return T.zeroStatAddedFile(l);
  }
  const y = h.real;
  let S;
  try {
    S = await M(i, y);
  } catch {
    S = null;
  }
  if (S === null) {
    try {
      const v = await i.statFile(y);
      if (v.exists && !v.isDir) {
        return T.zeroStatAddedFile(l);
      } else {
        return null;
      }
    } catch {
      return null;
    }
  }
  if (we(S)) {
    return T.zeroStatAddedFile(l);
  }
  const p = S.split(`
`);
  if (p[p.length - 1] === "") {
    p.pop();
  }
  const w = p.length;
  let $;
  if (d && w > 0 && w <= T.PER_FILE_LINE_THRESHOLD) {
    $ = [`diff --git a/${l} b/${l}`, "new file mode 100644", "--- /dev/null", `+++ b/${l}`, `@@ -0,0 +1,${w} @@`, ...p.map(v => `+${v}`)].join(`
`);
  } else if (d) {
    $ = T.zeroStatAddedFile(l).patch;
  }
  return {
    filename: l,
    status: "added",
    additions: w,
    deletions: 0,
    changes: w,
    patch: $
  };
}
async function W(i, r, a, u) {
  try {
    const l = await G(i, r, a, u);
    if (l.kind === "not_git") {
      return null;
    }
    const {
      gitRoot: d,
      head: g,
      resolvedBase: h,
      resolvedHead: y,
      mergeBase: S,
      aheadBy: p,
      behindBy: w
    } = l.meta;
    const $ = y ? [y] : [];
    const v = y ? [S, y] : [S];
    const [k, P, e, t] = await Promise.all([L(i, r, ["diff", "--no-textconv", "--numstat", "-M", S, ...$]), L(i, r, [...T.PATCH_DIFF_ARGS, ...v], {
      maxBuffer: B
    }).catch(s => {
      if (Z(s)) {
        n.logger.info(`[remoteGitDiff] patch exceeded ${B} bytes for ${r}; omitting patches`);
        return "";
      }
      throw s;
    }), L(i, r, ["diff", "--name-status", "-M", S, ...$]), y ? Promise.resolve([]) : se(i, r, d, true)]);
    const o = await T.buildDiffResult(k, P, e, h, g, S, p, w);
    T.appendUntracked(o.files, t);
    return o;
  } catch (l) {
    n.logger.error(`[remoteGitDiff] getGitDiff failed for ${r}: ${l}`);
    return null;
  }
}
async function z(i, r, a, u) {
  try {
    const l = await G(i, r, a, u);
    if (l.kind === "not_git") {
      return null;
    }
    const {
      gitRoot: d,
      resolvedHead: g,
      mergeBase: h,
      aheadBy: y,
      behindBy: S
    } = l.meta;
    const p = g ? [g] : [];
    const [w, $] = await Promise.all([L(i, r, ["diff", "--no-textconv", "--numstat", "-M", h, ...p]), g ? Promise.resolve([]) : se(i, r, d, false)]);
    const v = await T.parseNumstat(w);
    return {
      ...T.sumUntrackedStats($, v),
      ahead_by: y,
      behind_by: S
    };
  } catch (l) {
    n.logger.error(`[remoteGitDiff] getGitDiffStats failed for ${r}: ${l}`);
    return null;
  }
}
async function q(i, r, a, u) {
  try {
    const l = await G(i, r, a, u);
    if (l.kind === "not_git") {
      return null;
    }
    const {
      resolvedBase: d,
      resolvedHead: g,
      aheadBy: h
    } = l.meta;
    if (h === 0) {
      return [];
    }
    const y = g ?? "HEAD";
    const S = await L(i, r, ["log", "--no-show-signature", `--format=${T.COMMIT_LOG_FORMAT}`, `${d}..${y}`]);
    return T.parseCommits(S);
  } catch (l) {
    n.logger.error(`[remoteGitDiff] getGitCommits failed for ${r}: ${l}`);
    return null;
  }
}
async function K(i, r, a) {
  if (!/^[0-9a-f]{4,64}$/i.test(a)) {
    return null;
  }
  try {
    let u;
    try {
      u = (await L(i, r, ["rev-parse", "--show-toplevel"])).trim();
    } catch {
      return null;
    }
    if (!u) {
      return null;
    }
    try {
      await L(i, r, ["rev-parse", "--verify", `${a}^{commit}`]);
    } catch {
      return null;
    }
    let l;
    try {
      l = (await L(i, r, ["rev-parse", "--verify", `${a}^`])).trim();
    } catch {
      l = await ne(S => L(i, r, S));
    }
    const d = `${l}..${a}`;
    const [g, h, y] = await Promise.all([L(i, r, ["diff", "--no-textconv", "--numstat", "-M", d]), L(i, r, [...T.PATCH_DIFF_ARGS, d], {
      maxBuffer: B
    }).catch(S => {
      if (Z(S)) {
        return "";
      }
      throw S;
    }), L(i, r, ["diff", "--name-status", "-M", d])]);
    return await T.buildDiffResult(g, h, y, l, a, l, 1, 0);
  } catch (u) {
    n.logger.error(`[remoteGitDiff] getCommitDiff failed for ${r} ${a}: ${u}`);
    return null;
  }
}
async function j(i, r, a, u, l) {
  if (!a || a.startsWith("-") || x(u) || l !== undefined && x(l)) {
    return null;
  }
  let d;
  try {
    d = (await L(i, r, ["rev-parse", "--show-toplevel"])).trim();
  } catch {
    return null;
  }
  if (!d) {
    return null;
  }
  const g = l ?? u;
  const h = await re(i, r, d);
  const [y, S] = await Promise.all([L(i, r, ["show", `${a}:${g}`, "--"], {
    maxBuffer: ue
  }).catch(() => null), (async () => {
    const p = ee(d, u);
    const w = await te(i, r, h, p);
    if (w.kind !== "within") {
      return null;
    } else {
      return M(i, w.real).catch(() => null);
    }
  })()]);
  if (y === null && S === null) {
    return null;
  } else {
    return {
      oldText: y,
      newText: S
    };
  }
}
const Ce = "oauth-2025-04-20";
const Te = "claude-haiku-4-5-20251001";
const ve = 15000;
const Pe = 50000;
class Q {
  constructor(r) {
    this.sessionManager = r;
  }
  async checkReadiness(r) {
    const a = await this.sessionManager.getSession(r);
    if (a) {
      if (a.remoteTarget) {
        return {
          ready: false,
          needsCommitAndPush: false,
          needsAuth: false,
          error: "Remote sessions cannot be teleported to the cloud."
        };
      } else if (await n.getApiToken(n.DESKTOP_OAUTH_CONFIGS[n.getOAuthEnvironment()])) {
        if (await this.hasDirtyWorkingTree(a.cwd)) {
          return {
            ready: false,
            needsCommitAndPush: true,
            needsAuth: false
          };
        } else {
          return {
            ready: true,
            needsCommitAndPush: false,
            needsAuth: false
          };
        }
      } else {
        return {
          ready: false,
          needsCommitAndPush: false,
          needsAuth: true
        };
      }
    } else {
      return null;
    }
  }
  async teleportToCloud(r, a, u) {
    const l = await this.sessionManager.getSession(r);
    if (!l) {
      n.logger.error(`[TeleportToCloud] Session not found: sessionId=${r}`);
      throw new Error("Session not found.");
    }
    const {
      getLastActiveOrg: d
    } = await Promise.resolve().then(() => require("./index.chunk-c42vKsva.js")).then(t => t.account);
    const g = await d();
    if (!g) {
      n.logger.error("[TeleportToCloud] No active org UUID");
      throw new Error("No active organization. Sign in and try again.");
    }
    const h = await this.sessionManager.gitStatus.getGitInfo(l.cwd);
    if (h) {
      try {
        if (u != null) {
          u("pushing_branch");
        }
        await this.pushBranch(l.cwd, h.branch);
      } catch (t) {
        n.logger.error("[TeleportToCloud] Failed to push branch:", t);
        throw new Error("Failed to push branch. Pull the latest changes and try again.");
      }
    }
    const y = await this.sessionManager.getTranscript(r);
    if (l.isRunning) {
      await this.sessionManager.stopSession(r);
    }
    const S = [];
    const p = [];
    if (h) {
      const t = `https://github.com/${h.repo}`;
      S.push({
        type: "git_repository",
        url: t,
        revision: `refs/heads/${h.branch}`
      });
      p.push({
        type: "git_repository",
        git_info: {
          type: "github",
          repo: h.repo,
          branches: [h.branch]
        }
      });
    }
    const w = n.claudeAiUrl();
    const $ = {
      "Content-Type": "application/json",
      "anthropic-version": "2023-06-01",
      "anthropic-beta": "ccr-byoc-2025-07-29",
      "anthropic-client-feature": "ccr",
      "x-organization-uuid": g
    };
    if (u != null) {
      u("generating_summary");
    }
    const v = await this.generateTranscriptSummary(y);
    const k = {
      ...(l.title ? {
        title: l.title
      } : {}),
      environment_id: a,
      session_context: {
        sources: S,
        ...(p.length > 0 ? {
          outcomes: p
        } : {}),
        ...(l.model ? {
          model: l.model
        } : {})
      }
    };
    n.logger.info(`[TeleportToCloud] Creating cloud session: title="${l.title}", environmentId=${a}, hasGit=${!!h}, hasSummary=${!!v} (from ${y.length} transcript entries)`);
    if (u != null) {
      u("creating_session");
    }
    const P = await H.net.fetch(`${w}/v1/sessions`, {
      method: "POST",
      headers: $,
      body: JSON.stringify(k)
    });
    if (!P.ok) {
      const t = await P.text();
      n.logger.error(`[TeleportToCloud] Failed to create session: status=${P.status}, body=${t}`);
      throw new Error("Failed to create session. You can try again.");
    }
    const e = await P.json();
    n.logger.info(`[TeleportToCloud] Cloud session created: id=${e.id}, title="${e.title}"`);
    return {
      sessionId: e.id,
      title: e.title || l.title || "Untitled session",
      url: `${w}/code/${e.id}`,
      summary: v ?? undefined
    };
  }
  extractTextFromMessage(r) {
    var u;
    if (r.type !== "user" && r.type !== "assistant") {
      return null;
    }
    const a = (u = r.message) == null ? undefined : u.content;
    if (typeof a == "string") {
      return a;
    }
    if (Array.isArray(a)) {
      const l = [];
      for (const d of a) {
        if ("type" in d && d.type === "text" && "text" in d) {
          const g = d.text;
          if (typeof g == "string" && g) {
            l.push(g);
          }
        }
      }
      if (l.length > 0) {
        return l.join(`
`);
      } else {
        return null;
      }
    }
    return null;
  }
  buildTranscriptText(r) {
    const a = [];
    let u = 0;
    for (const l of r) {
      if (l.type !== "user" && l.type !== "assistant") {
        continue;
      }
      const d = this.extractTextFromMessage(l);
      if (d == null || !d.trim()) {
        continue;
      }
      const h = `${l.type === "user" ? "User" : "Assistant"}: ${d.trim()}`;
      if (u + h.length > Pe) {
        a.push("[...transcript truncated...]");
        break;
      }
      a.push(h);
      u += h.length;
    }
    return a.join(`

`);
  }
  async generateTranscriptSummary(r) {
    const a = this.buildTranscriptText(r);
    if (!a.trim()) {
      n.logger.info("[TeleportToCloud] No transcript text to summarize");
      return null;
    }
    try {
      const u = await n.getApiToken(n.DESKTOP_OAUTH_CONFIGS[n.getOAuthEnvironment()]);
      if (!u) {
        n.logger.warn("[TeleportToCloud] No OAuth token available for summary, falling back to user messages");
        return this.buildFallbackSummary(r);
      }
      const l = new n.Anthropic({
        apiKey: null,
        authToken: u,
        baseURL: n.DESKTOP_OAUTH_CONFIGS[n.getOAuthEnvironment()].apiHost,
        defaultHeaders: {
          "anthropic-beta": Ce
        }
      });
      const g = (await Promise.race([l.messages.create({
        model: Te,
        max_tokens: 1024,
        messages: [{
          role: "user",
          content: `Summarize this conversation for handoff to a new session. Include what the user asked, what was done, the current state, and any unfinished work. Be concise but thorough.

<transcript>
${a}
</transcript>`
        }]
      }), new Promise((h, y) => setTimeout(() => y(new Error("Summary generation timed out")), ve))])).content.filter(h => h.type === "text").map(h => h.text).join(`
`);
      if (g.trim()) {
        n.logger.info(`[TeleportToCloud] Generated summary: ${g.length} chars from ${a.length} chars of transcript`);
        return g;
      } else {
        n.logger.warn("[TeleportToCloud] LLM returned empty summary, falling back");
        return this.buildFallbackSummary(r);
      }
    } catch (u) {
      n.logger.error("[TeleportToCloud] Failed to generate summary, falling back:", u);
      return this.buildFallbackSummary(r);
    }
  }
  buildFallbackSummary(r) {
    const a = [];
    for (const d of r) {
      if (d.type !== "user") {
        continue;
      }
      const g = this.extractTextFromMessage(d);
      if (g != null && g.trim()) {
        a.push(g.trim());
      }
    }
    if (a.length === 0) {
      return null;
    }
    const u = a.join(`

`);
    return `Previous session user messages:

${u.length > 4000 ? `${u.slice(0, 4000)}

[...truncated]` : u}`;
  }
  async hasDirtyWorkingTree(r) {
    try {
      const {
        spawnAsync: a
      } = await Promise.resolve().then(() => require("./index.chunk-c42vKsva.js")).then(l => l.spawnPromise);
      return (await a("git", ["status", "--porcelain"], {
        cwd: r
      })).stdout.trim().length > 0;
    } catch (a) {
      n.logger.error("[TeleportToCloud] Git status check failed:", a);
      return true;
    }
  }
  async pushBranch(r, a) {
    const {
      spawnAsync: u
    } = await Promise.resolve().then(() => require("./index.chunk-c42vKsva.js")).then(d => d.spawnPromise);
    n.logger.info(`[TeleportToCloud] Pushing branch "${a}" to remote`);
    const l = await u("git", ["push", "--set-upstream", "origin", a], {
      cwd: r
    });
    n.logger.info(`[TeleportToCloud] Push completed: stdout="${l.stdout.trim()}", stderr="${l.stderr.trim()}"`);
  }
}
const be = i => Array.from(i).some(r => {
  const a = r.codePointAt(0) ?? 0;
  return a < 32 || a >= 127 && a <= 159 || a === 1564 || a === 8203 || a === 8206 || a === 8207 || a === 8232 || a === 8233 || a >= 8234 && a <= 8238 || a >= 8294 && a <= 8297 || a === 65279;
});
const E = new Map();
function ke(i, r, a) {
  const u = async e => {
    if (e == null || !e.length) {
      return;
    }
    const t = i.webContents.session;
    if (e.length > A.MAX_ATTACHMENT_COUNT) {
      n.logger.warn(`LocalSessions: dropping ${e.length - A.MAX_ATTACHMENT_COUNT} attachment(s) over the ${A.MAX_ATTACHMENT_COUNT} cap`);
    }
    const o = e.slice(0, A.MAX_ATTACHMENT_COUNT);
    const s = e.slice(A.MAX_ATTACHMENT_COUNT).map(f => ({
      name: f.name,
      bytes: Buffer.alloc(0),
      readFailed: true
    }));
    return [...(await Promise.all(o.map(async (f, C) => {
      const m = {
        name: f.name,
        bytes: Buffer.alloc(0),
        readFailed: true
      };
      try {
        const b = await n.withTimeout(t.getBlobData(f.blobUuid), 15000, "getBlobData: timed out");
        if (b.length > A.MAX_ATTACHMENT_BYTES) {
          n.logger.warn(`LocalSessions: attachment blob #${C} over byte cap (${b.length})`);
          return m;
        } else {
          return {
            name: f.name,
            bytes: b
          };
        }
      } catch (b) {
        n.logger.warn(`LocalSessions: failed to read attachment blob #${C}`, b);
        return m;
      }
    }))), ...s];
  };
  r.setSSHPasswordPromptFactory(y);
  r.initializeWithAccount();
  const l = new Set();
  const d = e => {
    for (const t of l) {
      r.setSessionVisibility(t, false, e);
    }
    l.clear();
  };
  i.webContents.on("did-navigate", () => d("webcontents_navigated"));
  i.webContents.on("render-process-gone", () => d("render_process_gone"));
  i.webContents.once("destroyed", () => d("webcontents_destroyed"));
  const g = 120000;
  function h() {
    return (e, t) => {
      var o;
      if (i.webContents && !i.webContents.isDestroyed()) {
        if ((o = a(i.webContents)) != null) {
          o.dispatchOnEvent({
            type: "initialization_status",
            sessionId: "",
            initializationStatus: {
              step: e,
              message: t,
              isComplete: false
            }
          });
        }
      }
    };
  }
  function y(e) {
    return t => new Promise(o => {
      const s = ae.randomUUID();
      E.set(s, o);
      const c = setTimeout(() => {
        if (E.has(s)) {
          E.delete(s);
          o(null);
        }
      }, g);
      const f = o;
      E.set(s, m => {
        clearTimeout(c);
        f(m);
      });
      const C = i.webContents && !i.webContents.isDestroyed() ? a(i.webContents) : undefined;
      if (C) {
        C.dispatchOnSSHPasswordRequired({
          requestId: s,
          host: e,
          prompt: t
        });
      } else {
        clearTimeout(c);
        E.delete(s);
        o(null);
      }
    });
  }
  function S(e, t) {
    if (e.kind === "wsl") {
      return `wsl:${e.distro.toLowerCase()}:${t}`;
    } else {
      return `ssh:${e.sshHost}:${t}`;
    }
  }
  async function p(e, t) {
    return N.checkHasTrustDialogAccepted(S(e, t));
  }
  function w(e) {
    return {
      kind: "ssh",
      sshHost: e.sshHost,
      sshPort: e.sshPort,
      sshIdentityFile: e.sshIdentityFile,
      remoteCwd: e.remoteCwd
    };
  }
  async function $(e, t, o, s) {
    try {
      const c = F.getRemoteServerControllerForTarget(e);
      await c.ensureReady("warm_up");
      return await s(c);
    } catch (c) {
      n.logger.error(`${t} error:`, c);
      return o;
    }
  }
  async function v(e, t) {
    const o = await e.getGitInfo(t);
    if (!o.isRepo || !o.branch) {
      return null;
    } else {
      return {
        repo: o.repoSlug ?? "",
        branch: o.branch,
        defaultBranch: o.defaultBranch || undefined,
        root: o.root
      };
    }
  }
  async function k(e, t, o) {
    try {
      const s = F.getRemoteServerController(e);
      await s.ensureReady("send_message", h(), y(e.sshHost));
      return await t(s);
    } catch (s) {
      return o(s instanceof Error ? s.message : String(s));
    }
  }
  async function P(e, t, o) {
    if (await N.checkHasTrustDialogAccepted(t)) {
      return {
        trusted: true,
        sources: []
      };
    }
    try {
      const s = F.getRemoteServerControllerForTarget(e);
      await s.ensureReady("warm_up", h(), e.kind === "ssh" ? y(e.sshHost) : undefined);
      const c = await F.readRemoteSettingsFiles(C => s.readFile(C), s.expandRemoteTilde(o));
      return {
        trusted: false,
        sources: T.getDangerousFeatureSourcesFromContent(c)
      };
    } catch (s) {
      n.logger.error(`checkTrustForRemoteTarget(${n.remoteTargetLabel(e)}) error:`, s);
      return {
        trusted: false,
        sources: ["Unable to verify remote workspace trust"]
      };
    }
  }
  return {
    async start(e) {
      n.logger.info("LocalSessions.start:");
      const t = e.cwd.trim() || "~";
      const o = e.sshConfig ?? n.sshConfigFromTarget(e.remoteTarget);
      const s = n.wslConfigFromTarget(e.remoteTarget);
      try {
        return {
          sessionId: await r.startSession({
            cwd: o || s ? t : n.expandTildePath(t),
            message: e.message,
            sessionId: e.sessionId,
            model: e.model,
            useWorktree: e.useWorktree,
            sourceBranch: e.sourceBranch,
            branchHint: e.branchHint,
            title: e.title,
            systemPrompt: e.systemPrompt,
            mcpServers: e.mcpServers,
            remoteMcpServers: e.remoteMcpServers,
            images: e.images,
            permissionMode: e.permissionMode,
            enabledMcpTools: e.enabledMcpTools,
            sshConfig: o,
            wslConfig: s,
            scheduledTaskId: e.scheduledTaskId,
            spaceId: e.spaceId,
            systemPromptAppend: e.systemPromptAppend,
            messageUuid: e.messageUuid,
            agent: e.agent,
            effort: e.effort,
            fastMode: e.fastMode,
            additionalDirectories: e.additionalDirectories,
            rendererSurface: e.rendererSurface,
            classifierSummaryEnabled: e.classifierSummaryEnabled,
            spawnedFrom: e.spawnedFrom
          }, {
            attachments: await u(e.attachments)
          })
        };
      } catch (c) {
        A.appendCcdErrorCategory(c);
        throw c;
      }
    },
    async sendMessage(e, t, o, s, c, f, C) {
      const m = f === "now" || f === "next" || f === "later" ? f : undefined;
      n.logger.info(`LocalSessions.sendMessage: sessionId=${e}, messageLength=${t.length}, imageCount=${(o == null ? undefined : o.length) ?? 0}, toolStates=${(s == null ? undefined : s.length) ?? 0}, attachmentCount=${(c == null ? undefined : c.length) ?? 0}, priority=${m ?? "(default)"}`);
      const b = await u(c);
      try {
        await r.sendMessage(e, t, o, s !== undefined || b !== undefined || m !== undefined || C !== undefined ? {
          ...(s !== undefined ? {
            toolStates: s
          } : {}),
          ...(b !== undefined ? {
            attachments: b
          } : {}),
          ...(m !== undefined ? {
            priority: m
          } : {}),
          ...(C !== undefined ? {
            steeringGates: C
          } : {})
        } : undefined);
      } catch (R) {
        A.appendCcdErrorCategory(R);
        throw R;
      }
    },
    async setModel(e, t) {
      n.logger.info(`LocalSessions.setModel: sessionId=${e}, model=${t}`);
      await r.setModel(e, t);
    },
    async setEffort(e, t) {
      n.logger.info(`LocalSessions.setEffort: sessionId=${e}, effort=${t ?? "default"}`);
      await r.setEffort(e, t);
    },
    async getEffort(e) {
      n.logger.info(`LocalSessions.getEffort: sessionId=${e}`);
      return r.getEffort(e);
    },
    async getDefaultEffort() {
      return r.getDefaultEffort();
    },
    async setFastMode(e, t) {
      n.logger.info(`LocalSessions.setFastMode: sessionId=${e}, fastMode=${t}`);
      await r.setFastMode(e, t);
    },
    async applyFlagSettings(e, t) {
      if (t === null || typeof t != "object") {
        throw new Error("applyFlagSettings: settings must be an object");
      }
      const o = t;
      n.logger.info(`LocalSessions.applyFlagSettings: sessionId=${e}, count=${Object.keys(o).length}`);
      await r.applyFlagSettings(e, o);
    },
    async forkSession(e, t, o, s) {
      n.logger.info(`LocalSessions.forkSession: parentSessionId=${e}${s !== undefined ? " (retargeted)" : ""}`);
      let c;
      if (s !== undefined) {
        const f = n.expandTildePath(s.trim());
        if (n.isUnsafeUnc(f) || !_.isAbsolute(f)) {
          throw new Error("Cannot fork: target folder must be a local absolute path.");
        }
        const C = _.resolve(f);
        const m = await n.realpathWithAncestor(C).catch(() => null);
        if (!m || n.isUnsafeUnc(m)) {
          throw new Error("Cannot fork: target folder must be a local absolute path.");
        }
        c = C;
      }
      try {
        return {
          sessionId: await r.forkSession(e, t, o, c)
        };
      } catch (f) {
        A.appendCcdErrorCategory(f);
        throw f;
      }
    },
    async startSideChat(e) {
      n.logger.info(`LocalSessions.startSideChat: sessionId=${e}`);
      return r.sideQuery.startSideChat(e);
    },
    sendSideChatMessage(e, t) {
      n.logger.info(`LocalSessions.sendSideChatMessage: sessionId=${e}, textLength=${t.length}`);
      r.sideQuery.sendSideChatMessage(e, t);
    },
    stopSideChat(e) {
      n.logger.info(`LocalSessions.stopSideChat: sessionId=${e}`);
      r.sideQuery.stopSideChat(e);
    },
    async summarizeSession(e) {
      n.logger.info(`LocalSessions.summarizeSession: sessionId=${e}`);
      return r.sideQuery.summarizeSession(e);
    },
    async summarizeTranscript(e, t) {
      n.logger.info(`LocalSessions.summarizeTranscript: sessionId=${e}, transcriptLength=${t.length}`);
      return r.sideQuery.summarizeTranscript(e, t);
    },
    stopSessionSummary(e) {
      n.logger.info(`LocalSessions.stopSessionSummary: sessionId=${e}`);
      r.sideQuery.stopSessionSummary(e);
    },
    async stop(e) {
      n.logger.info(`LocalSessions.stop: sessionId=${e}`);
      await r.stopSession(e);
    },
    async interrupt(e) {
      n.logger.info(`LocalSessions.interrupt: sessionId=${e}`);
      await r.interruptSession(e);
    },
    async stopTask(e, t) {
      n.logger.info(`LocalSessions.stopTask: sessionId=${e}, taskId=${t}`);
      await r.stopBackgroundTask(e, t);
    },
    async cancelQueuedMessage(e, t) {
      n.logger.info(`LocalSessions.cancelQueuedMessage: sessionId=${e}, uuid=${t}`);
      return r.cancelQueuedMessage(e, t);
    },
    async reorderQueuedMessage(e, t, o) {
      n.logger.info(`LocalSessions.reorderQueuedMessage: sessionId=${e}, uuid=${t}, over=${o}`);
      return r.reorderQueuedMessage(e, t, o);
    },
    async promoteQueuedMessage(e, t) {
      n.logger.info(`LocalSessions.promoteQueuedMessage: sessionId=${e}, uuid=${t}`);
      return r.promoteQueuedMessage(e, t);
    },
    logCliEvent(e, t, o) {
      n.logger.info(`LocalSessions.logCliEvent: sessionId=${e}, event=${t}`);
      r.logCliEvent(e, t, o ?? {});
    },
    reportSwitchTiming(e) {
      r.reportSwitchTiming(e);
    },
    reportComposerInp(e) {
      r.reportComposerInp(e);
    },
    reportStreamRender(e) {
      r.reportStreamRender(e);
    },
    async clearSession(e, t) {
      n.logger.info(`LocalSessions.clearSession: sessionId=${e}`);
      await r.clearSession(e, t);
    },
    async rewind(e, t) {
      n.logger.info(`LocalSessions.rewind: sessionId=${e} target=${t}`);
      const o = await r.rewindSession(e, t);
      return (o == null ? undefined : o.prefill) ?? null;
    },
    async rewindV2(e, t) {
      n.logger.info(`LocalSessions.rewindV2: sessionId=${e} target=${t}`);
      return r.rewindSession(e, t);
    },
    async resumePreClearSession(e) {
      n.logger.info(`LocalSessions.resumePreClearSession: sessionId=${e}`);
      return r.resumePreClearSession(e);
    },
    async getUncommittedChanges(e) {
      return T.gitWorktreeManager.getUncommittedChanges(e);
    },
    async archive(e, t) {
      n.logger.info(`LocalSessions.archive: sessionId=${e}`);
      await r.archiveSession(e, t);
    },
    unarchive(e) {
      n.logger.info(`LocalSessions.unarchive: sessionId=${e}`);
      r.unarchiveSession(e);
    },
    async delete(e) {
      n.logger.info(`LocalSessions.delete: sessionId=${e}`);
      await r.deleteSession(e);
    },
    async shareSession(e) {
      try {
        n.refuseIfHipaaGated("share_session_export");
      } catch (t) {
        return {
          success: false,
          error: t.message
        };
      }
      n.logger.info(`LocalSessions.shareSession: sessionId=${e}`);
      return r.shareSession(e);
    },
    updateSession(e, t) {
      n.logger.info(`LocalSessions.updateSession: sessionId=${e}, options=${JSON.stringify(t)}`);
      r.updateSession(e, {
        ...t,
        titleSource: t.titleSource === "auto" ? "auto" : "user"
      });
    },
    async getSession(e) {
      return r.getSession(e);
    },
    async findLocalSessionIdForBridgeId(e) {
      await r.waitForSessionsLoaded();
      return r.findSessionIdByBridgeSessionId(e) ?? null;
    },
    getAll() {
      return r.getAllSessions();
    },
    getSessionsForScheduledTask(e) {
      return r.getSessionsForScheduledTaskFormatted(e);
    },
    async getDetectedProjects() {
      const {
        getDetectedProjects: e
      } = await Promise.resolve().then(() => require("./index.chunk-c42vKsva.js")).then(t => t.detectedProjects);
      return e();
    },
    async getCodeStats() {
      try {
        return await A.aggregateCodeStats();
      } catch (e) {
        n.logger.error("LocalSessions.getCodeStats failed", e);
        return null;
      }
    },
    getGitInfo: async e => r.gitStatus.getGitInfo(n.expandTildePath(e)),
    getLocalBranches: async e => r.gitStatus.getLocalBranches(n.expandTildePath(e)),
    getGitDiff: async (e, t, o) => {
      const s = await r.gitStatus.getGitDiff(e, t, o);
      const c = (s == null ? undefined : s.files.filter(f => f.patch).length) ?? 0;
      n.logger.info(`LocalSessions.getGitDiff: cwd=${e}, base=${t}, head=${o ?? "<tree>"} → ${s ? `${s.files.length} files (${c} with patch)` : "null"}`);
      return s;
    },
    getGitDiffStats: async (e, t, o) => r.gitStatus.getGitDiffStats(e, t, o),
    getDiffFileContent: async (e, t, o, s) => {
      var f;
      var C;
      const c = await r.gitStatus.getDiffFileContent(e, t, o, s ?? undefined);
      n.logger.info(`LocalSessions.getDiffFileContent: cwd=${e}, mergeBase=${t.slice(0, 8)}, file=${o} → old=${((f = c == null ? undefined : c.oldText) == null ? undefined : f.length) ?? "null"}b, new=${((C = c == null ? undefined : c.newText) == null ? undefined : C.length) ?? "null"}b`);
      return c;
    },
    getGitCommits: async (e, t, o) => r.gitStatus.getGitCommits(e, t, o),
    getCommitDiff: async (e, t) => r.gitStatus.getCommitDiff(e, t),
    getTranscript(e) {
      return r.getTranscript(e);
    },
    searchSessions(e, t) {
      return r.searchSessions(e, t);
    },
    openInVSCode: async e => await r.editorLauncher.openInVSCode(e),
    isVSCodeInstalled: async () => await r.editorLauncher.isVSCodeInstalled(),
    getInstalledEditors: async e => await r.editorLauncher.getInstalledEditors(e ?? undefined),
    openInEditor: async (e, t, o, s, c) => {
      let f = e;
      if (c) {
        try {
          f = await Y(c, e);
        } catch {
          n.logger.warn("openInEditor: remote path expansion failed");
          return false;
        }
      }
      return await r.editorLauncher.openInEditor(f, t, o, s, c);
    },
    revealRemotePath: async (e, t) => await le(e, t),
    pickSessionFile: async e => await r.fileAccess.pickSessionFile(e),
    pickFileAtCwd: async e => await r.fileAccess.pickFileAtCwd(e),
    readSessionFile: async (e, t) => await r.readSessionFile(e, t),
    resolveSessionFile: async (e, t) => await r.resolveSessionFile(e, t),
    showSessionFileInFolder: async (e, t) => {
      const o = await r.resolveSessionFile(e, t);
      const s = o ? await n.realpathWithAncestor(o).catch(() => null) : null;
      if (!s || n.isUnsafeUnc(s)) {
        return false;
      } else {
        H.shell.showItemInFolder(n.devirtualizeMsixPath(s));
        return true;
      }
    },
    showSessionFilePreview: async (e, t, o, s) => {
      const {
        EPITAXY_PREVIEW_EXTENSIONS: c,
        isEpitaxyNativeFilePreviewEnabled: f,
        showHostFilePreview: C
      } = await Promise.resolve().then(() => require("./index.chunk-c42vKsva.js")).then(m => m.FilePreviewManager);
      if (f()) {
        if (c.has(_.extname(t).toLowerCase())) {
          return await C(e, t, o, s, async () => {
            const m = await r.resolveSessionFile(e, t);
            const b = m ? await n.realpathWithAncestor(m).catch(() => null) : null;
            if (!b || n.isUnsafeUnc(b)) {
              return null;
            }
            const R = await r.getSession(e);
            const I = (R == null ? undefined : R.worktreePath) ?? (R == null ? undefined : R.cwd);
            const D = I ? await n.realpathWithAncestor(n.expandTildePath(I)).catch(() => null) : null;
            if (!D || !(await n.isPathContainedInFolders(b, [D]))) {
              return null;
            } else {
              return b;
            }
          });
        } else {
          return {
            ok: false,
            declineReason: "unsupported_extension"
          };
        }
      } else {
        return {
          ok: false,
          declineReason: "gate_disabled"
        };
      }
    },
    openSessionFileInDefaultApp: async (e, t) => {
      const {
        isEpitaxyOpenInDefaultAppEnabled: o
      } = await Promise.resolve().then(() => require("./index.chunk-c42vKsva.js")).then(ie => ie.FilePreviewManager);
      if (!o()) {
        return {
          ok: false,
          error: "Feature disabled"
        };
      }
      const s = await r.resolveSessionFile(e, t);
      if (!s) {
        return {
          ok: false,
          error: "File not found"
        };
      }
      const c = await n.realpathWithAncestor(s).catch(() => null);
      if (!c) {
        return {
          ok: false,
          error: "Path unresolvable"
        };
      }
      if (n.isUnsafeUnc(c)) {
        return {
          ok: false,
          error: "Blocked network path"
        };
      }
      const f = await r.getSession(e);
      const C = (f == null ? undefined : f.worktreePath) ?? (f == null ? undefined : f.cwd);
      const m = C ? await n.realpathWithAncestor(n.expandTildePath(C)).catch(() => null) : null;
      if (!m || !(await n.isPathContainedInFolders(c, [m]))) {
        return {
          ok: false,
          error: "Blocked: outside the session folder"
        };
      }
      if (_.extname(s).toLowerCase() !== _.extname(c).toLowerCase()) {
        return {
          ok: false,
          error: "Blocked: symlink target type differs"
        };
      }
      if (be(c)) {
        return {
          ok: false,
          error: "Blocked: unsafe characters in path"
        };
      }
      const b = n.validateFilenameForOpen(_.basename(c));
      if (b) {
        return {
          ok: false,
          error: `Blocked: ${b}`
        };
      }
      if (n.isBlockedExtension(c, "open")) {
        return {
          ok: false,
          error: "Blocked executable file type"
        };
      }
      if (await n.isOpenBlockedByExecBit(c)) {
        return {
          ok: false,
          error: "Blocked executable file"
        };
      }
      const {
        confirmOpenSessionFileWithDefaultApp: R
      } = await Promise.resolve().then(() => require("./index.chunk-B2WFCMlK.js"));
      if (!(await R(i.webContents, e, c))) {
        return {
          ok: false,
          error: "Declined"
        };
      }
      if (!(await n.isPathSymlinkFree(c))) {
        return {
          ok: false,
          error: "Path changed during open"
        };
      }
      const D = await X.lstat(c).catch(() => null);
      if (D == null || !D.isFile()) {
        return {
          ok: false,
          error: "Path changed during open"
        };
      }
      if (await n.isOpenBlockedByExecBit(c)) {
        return {
          ok: false,
          error: "Blocked executable file"
        };
      }
      const U = await H.shell.openPath(n.devirtualizeMsixPath(c));
      if (U) {
        return {
          ok: false,
          error: U
        };
      } else {
        return {
          ok: true
        };
      }
    },
    listSessionDirectory: async (e, t) => await r.fileAccess.listSessionDirectory(e, t),
    readSessionImageAsDataUrl: async (e, t, o) => await r.readSessionImageAsDataUrl(e, t, o),
    readSessionMediaAsDataUrl: async (e, t) => await r.fileAccess.readSessionMediaAsDataUrl(e, t),
    readSessionPanelMediaAsDataUrl: async (e, t) => await r.fileAccess.readSessionPanelMediaAsDataUrl(e, t),
    getSessionMediaStreamUrl: async (e, t) => await r.fileAccess.getSessionMediaStreamUrl(e, t),
    getSessionPanelMediaStreamUrl: async (e, t) => await r.fileAccess.getSessionPanelMediaStreamUrl(e, t),
    readFileAtCwd: async (e, t) => await r.fileAccess.readFileAtCwd(e, t),
    writeSessionFile: async (e, t, o, s) => await r.fileAccess.writeSessionFile(e, t, o, s),
    async startPty(e, t, o) {
      n.logger.info(`LocalSessions.startPty: sessionId=${e}, cols=${t}, rows=${o}`);
      return (await r.shellPty.startPty(e, t, o)) !== null;
    },
    stopPty(e) {
      n.logger.info(`LocalSessions.stopPty: sessionId=${e}`);
      r.shellPty.stopPty(e);
    },
    resizePty(e, t, o) {
      r.shellPty.resizePty(e, t, o);
    },
    writePty(e, t) {
      r.shellPty.writePty(e, t);
    },
    async startShellPty(e, t, o) {
      n.logger.info(`LocalSessions.startShellPty: sessionId=${e}, cols=${t}, rows=${o}`);
      return await r.shellPty.startShellPty(e, t, o);
    },
    stopShellPty(e) {
      n.logger.info(`LocalSessions.stopShellPty: sessionId=${e}`);
      r.shellPty.stopShellPty(e, {
        noSweep: true
      });
    },
    resizeShellPty(e, t, o) {
      r.shellPty.resizeShellPty(e, t, o);
    },
    writeShellPty(e, t) {
      r.shellPty.writeShellPty(e, t);
    },
    getShellPtyBuffer(e) {
      return r.shellPty.getShellPtyBuffer(e);
    },
    async getBusyShellPtyKeys(e) {
      return await r.shellPty.getBusyShellPtyKeys(e);
    },
    async runBashCommand(e, t) {
      n.logger.info(`LocalSessions.runBashCommand: sessionId=${e}, command=${t.slice(0, 80)}`);
      return await r.runBashCommand(e, t);
    },
    respondToToolPermission(e, t, o) {
      n.logger.info(`LocalSessions.respondToToolPermission: requestId=${e}, decision=${t}, hasUpdatedInput=${o !== undefined}`);
      n.notificationService.closePermissionNotification(e);
      r.respondToToolPermission(e, t, o);
    },
    respondToRefusalFallbackPrompt(e, t, o) {
      n.logger.info(`LocalSessions.respondToRefusalFallbackPrompt: sessionId=${e}, promptId=${t}, choice=${JSON.stringify(o).slice(0, 64)}`);
      return r.respondToRefusalFallbackPrompt(e, t, o);
    },
    checkTrust(e) {
      const t = n.expandTildePath(e);
      n.logger.info(`LocalSessions.checkTrust: cwd=${t}`);
      return r.checkWorkspaceTrust(t);
    },
    async saveTrust(e) {
      const t = n.expandTildePath(e);
      n.logger.info(`LocalSessions.saveTrust: cwd=${t}`);
      await r.saveWorkspaceTrust(t);
    },
    async changeCwd(e, t, o, s) {
      const c = n.expandTildePath(t);
      n.logger.info(`LocalSessions.changeCwd: sessionId=${e}, cwd=${c}, trustAccepted=${o === true}`);
      return r.changeSessionCwd(e, c, o, s);
    },
    async setPermissionMode(e, t) {
      n.logger.info(`[CCD] LocalSessions.setPermissionMode: sessionId=${e}, mode=${t}`);
      return r.setPermissionMode(e, t);
    },
    getPermissionMode(e) {
      n.logger.info(`[CCD] LocalSessions.getPermissionMode: sessionId=${e}`);
      return r.getPermissionMode(e);
    },
    async launchUltrareview(e, t, o) {
      n.logger.info(`[CCD] LocalSessions.launchUltrareview: sessionId=${e}, confirm=${o ?? false}`);
      return r.launchUltrareview(e, t, o);
    },
    async submitFeedback(e, t) {
      n.logger.info(`[CCD] LocalSessions.submitFeedback: sessionId=${e}, descLen=${t.length}`);
      return r.submitFeedback(e, t);
    },
    addDirectories(e, t) {
      n.logger.info(`[CCD] LocalSessions.addDirectories: sessionId=${e}, dirs=${t.length}`);
      return r.addDirectories(e, t);
    },
    async getDefaultPermissionMode(e) {
      const t = n.expandTildePath(e);
      n.logger.info(`[CCD] LocalSessions.getDefaultPermissionMode: cwd=${t}`);
      return r.getDefaultPermissionMode(t);
    },
    async getSupportedCommands(e) {
      try {
        return await r.getSupportedCommands(e);
      } catch (t) {
        A.appendCcdErrorCategory(t);
        throw t;
      }
    },
    async getContextUsage(e) {
      return r.getContextUsage(e);
    },
    async warmSession(e) {
      return r.warmSession(e);
    },
    async getAgents(e) {
      try {
        return await r.getAgents(e);
      } catch (t) {
        A.appendCcdErrorCategory(t);
        throw t;
      }
    },
    async createAgent(e) {
      n.logger.info(`[CCD] LocalSessions.createAgent: name=${e.name}, scope=${e.scope}`);
      return r.createAgent(e);
    },
    async getPlanForSession(e) {
      n.logger.info(`[CCD] LocalSessions.getPlanForSession: sessionId=${e}`);
      return r.getPlanForSession(e);
    },
    async setMcpServers(e, t) {
      n.logger.info(`[CCD] LocalSessions.setMcpServers: sessionId=${e}, serverCount=${t.length}`);
      return r.setMcpServers(e, t);
    },
    async replaceRemoteMcpServers(e, t) {
      n.logger.info(`[CCD] LocalSessions.replaceRemoteMcpServers: sessionId=${e}, serverCount=${t.length}`);
      return r.replaceRemoteMcpServers(e, t);
    },
    async replaceEnabledMcpTools(e, t) {
      n.logger.info(`[CCD] LocalSessions.replaceEnabledMcpTools: sessionId=${e}, toolCount=${Object.keys(t.tools).length}`);
      return r.replaceEnabledMcpTools(e, t);
    },
    async mcpAuthenticate(e, t, o) {
      n.logger.info(`[CCD] LocalSessions.mcpAuthenticate: sessionId=${e}, server=${t}`);
      return r.mcpAuthenticate(e, t, o);
    },
    async mcpReconnect(e, t) {
      n.logger.info(`[CCD] LocalSessions.mcpReconnect: sessionId=${e}, server=${t}`);
      return r.mcpReconnect(e, t);
    },
    async mcpSubmitOAuthCallbackUrl(e, t, o) {
      n.logger.info(`[CCD] LocalSessions.mcpSubmitOAuthCallbackUrl: sessionId=${e}, server=${t}`);
      return r.mcpSubmitOAuthCallbackUrl(e, t, o);
    },
    async mcpCallTool(e, t, o, s) {
      n.logger.debug(`[CCD] LocalSessions.mcpCallTool: sessionId=${e}, server=${t}, tool=${o}`);
      return r.mcpCallTool(e, t, o, s);
    },
    async mcpReadResource(e, t, o) {
      n.logger.debug(`[CCD] LocalSessions.mcpReadResource: sessionId=${e}, server=${t}, uri=${o}`);
      return r.mcpReadResource(e, t, o);
    },
    async mcpListResources(e, t) {
      n.logger.debug(`[CCD] LocalSessions.mcpListResources: sessionId=${e}, server=${t}`);
      return r.mcpListResources(e, t);
    },
    async importCliSession(e) {
      n.logger.info(`[CCD] LocalSessions.importCliSession: cliSessionId=${e}`);
      return r.importCliSession(e);
    },
    setVisibility(e, t, o) {
      n.logger.debug(`[CCD] LocalSessions.setVisibility: sessionId=${e}, isVisible=${t}, reason=${o}`);
      if (t) {
        l.add(e);
      } else {
        l.delete(e);
      }
      r.setSessionVisibility(e, t, o);
    },
    setAvailableCodeModels(e) {
      r.setAvailableCodeModels(e);
    },
    setAccountBranchPrefix(e) {
      T.setAccountBranchPrefix(e ?? undefined);
    },
    openMacFilesAndFoldersSettings() {},
    getMacTccRecoveryInfo() {
      return {
        bundleId: H.app.isPackaged ? "com.anthropic.claudefordesktop" : "com.github.Electron",
        appName: H.app.getName()
      };
    },
    classifyTccFolderKind(e) {
      return n.classifyTccFolderKind(n.expandTildePath(e));
    },
    setFocusedSession(e) {
      n.logger.info(`[CCD] LocalSessions.setFocusedSession: sessionId=${e ?? "null"}`);
      n.setFocusedSession(e ?? null);
      n.updateHandoffForFocusedSession(e ?? null);
      if (e) {
        n.notificationService.closeIdleNotificationForSession(e);
        n.notificationService.closeNotification(`scheduled-${e}`);
        r.preconnectSSHIfNeeded(e);
      }
    },
    async checkGhAvailable(e) {
      const t = n.expandTildePath(e);
      n.logger.info(`LocalSessions.checkGhAvailable: cwd=${t}`);
      return r.checkGhAvailable(t);
    },
    async listGhIssues(e, t) {
      n.logger.info(`LocalSessions.listGhIssues: cwd=${e}`);
      return r.listGhIssues(e, t);
    },
    async getGhIssue(e, t, o) {
      n.logger.info(`LocalSessions.getGhIssue: ${e}#${t}`);
      return r.githubPr.getGhIssue(e, t, o ?? undefined);
    },
    async getGhRefSummary(e, t, o) {
      return r.githubPr.getGhRefSummary(e, t, o);
    },
    async getCrRefSummary(e, t, o) {
      const {
        getCrRefSummary: s
      } = await n.nestOnlyImport();
      if (s) {
        return s(o);
      } else {
        return null;
      }
    },
    async getCrCliStatus() {
      const {
        getCrCliStatus: e
      } = await n.nestOnlyImport();
      if (e) {
        return e();
      } else {
        return "unsupported";
      }
    },
    async getCrForSession(e) {
      const {
        getCrForSession: t
      } = await n.nestOnlyImport();
      if (!t) {
        return null;
      }
      const o = await r.getSession(e);
      if (o == null || !o.cwd || o.remoteTarget) {
        return null;
      } else {
        return t(o.cwd);
      }
    },
    async isWorkingTreeDirty(e) {
      return r.gitStatus.isWorkingTreeDirty(e);
    },
    async commitAllChanges(e, t) {
      n.logger.info(`LocalSessions.commitAllChanges: cwd=${e}`);
      return r.gitStatus.commitAllChanges(e, t);
    },
    async getWorkingTreeStatus(e) {
      return r.gitStatus.getWorkingTreeStatus(e);
    },
    async stashWorkingTree(e, t) {
      n.logger.info(`LocalSessions.stashWorkingTree: cwd=${e}`);
      return r.gitStatus.stashWorkingTree(e, t);
    },
    async commitWipForBranchSwitch(e, t) {
      n.logger.info(`LocalSessions.commitWipForBranchSwitch: cwd=${e}`);
      return r.gitStatus.commitWipForBranchSwitch(e, t);
    },
    async discardWorkingTree(e) {
      n.logger.info(`LocalSessions.discardWorkingTree: cwd=${e}`);
      return r.gitStatus.discardWorkingTree(e);
    },
    async generateLocalPrContent(e, t) {
      n.logger.info(`LocalSessions.generateLocalPrContent: cwd=${e}, baseBranch=${t}`);
      return r.generateLocalPrContent(e, t);
    },
    async reviewDiff(e) {
      n.logger.info("LocalSessions.reviewDiff");
      return r.githubPr.reviewDiff(e);
    },
    async ensureBranchPushed(e) {
      n.logger.info(`LocalSessions.ensureBranchPushed: cwd=${e}`);
      return r.ensureBranchPushed(e);
    },
    async createLocalPr(e) {
      n.logger.info(`LocalSessions.createLocalPr: cwd=${e.cwd}`);
      return r.createLocalPr(e);
    },
    async installGh() {
      n.logger.info("LocalSessions.installGh");
      return r.githubPr.installGh();
    },
    async getPrChecks(e, t, o) {
      n.logger.info(`LocalSessions.getPrChecks: cwd=${e}, prNumber=${t}, repo=${o ?? "<none>"}`);
      return r.getPrChecks(e, t, o);
    },
    async getCheckRunAnnotations(e, t, o, s) {
      n.logger.info(`LocalSessions.getCheckRunAnnotations: sessionId=${e}, prNumber=${t}, checkRunId=${o}`);
      return r.githubPr.getCheckRunAnnotations(e, t, o, s ?? undefined);
    },
    async rerunPrCheck(e, t, o, s) {
      n.logger.info(`LocalSessions.rerunPrCheck: sessionId=${e}, prNumber=${t}, checkRunId=${o}`);
      return r.githubPr.rerunPrCheck(e, t, o, s ?? undefined);
    },
    async getPrStateForBranch(e, t, o) {
      n.logger.debug(`LocalSessions.getPrStateForBranch: cwd=${e}, branch=${t ?? "<inferred>"}`);
      return r.getPrStateForBranch(e, t, o);
    },
    async getPrDetails(e, t, o) {
      n.logger.info(`LocalSessions.getPrDetails: cwd=${e}, prNumber=${t}, repo=${o}`);
      return r.getPrDetails(e, t, o);
    },
    async getPrReviewComments(e, t, o) {
      n.logger.info(`LocalSessions.getPrReviewComments: cwd=${e}, prNumber=${t}, repo=${o}`);
      return r.getPrReviewComments(e, t, o);
    },
    async getPrOverview(e, t, o, s) {
      n.logger.info(`LocalSessions.getPrOverview: cwd=${e}, prNumber=${t}, repo=${o ?? "<none>"}, sessionId=${s ?? "<none>"}`);
      return r.getPrOverview(e, t, o, s);
    },
    async getPrCommits(e, t, o) {
      n.logger.info(`LocalSessions.getPrCommits: cwd=${e}, prNumber=${t}, repo=${o ?? "<none>"}`);
      return r.githubPr.getPrCommits(e, t, o);
    },
    async replyToPrReviewComment(e, t, o, s, c) {
      n.logger.info(`LocalSessions.replyToPrReviewComment: cwd=${e}, prNumber=${t}, commentId=${o}`);
      return r.replyToPrReviewComment(e, t, o, s, c);
    },
    async resolvePrReviewThread(e, t, o, s) {
      n.logger.info(`LocalSessions.resolvePrReviewThread: cwd=${e}, prNumber=${t}, commentId=${o}`);
      return r.resolvePrReviewThread(e, t, o, s);
    },
    async updatePrComment(e, t, o, s, c) {
      n.logger.info(`LocalSessions.updatePrComment: cwd=${e}, commentId=${t}, isReviewComment=${s}`);
      return r.updatePrComment(e, t, o, s, c);
    },
    async submitPrReview(e, t, o, s, c) {
      n.logger.info(`LocalSessions.submitPrReview: cwd=${e}, prNumber=${t}, event=${o}`);
      return r.submitPrReview(e, t, o, s, c);
    },
    async createPrReviewComment(e, t, o, s, c, f, C, m, b) {
      n.logger.info(`LocalSessions.createPrReviewComment: cwd=${e}, prNumber=${t}, path=${s}:${c}`);
      return r.createPrReviewComment(e, t, o, s, c, f, C, m, b);
    },
    async updatePrBody(e, t, o, s) {
      n.logger.info(`LocalSessions.updatePrBody: cwd=${e}, prNumber=${t}, repo=${s ?? "<none>"}`);
      return r.updatePrBody(e, t, o, s);
    },
    async setAutoFixEnabled(e, t) {
      n.logger.info(`LocalSessions.setAutoFixEnabled: sessionId=${e}, enabled=${t}`);
      r.setAutoFixEnabled(e, t);
    },
    async dismissBoundPr(e, t, o) {
      n.logger.info(`LocalSessions.dismissBoundPr: sessionId=${e}, repo=${t}, prNumber=${o}`);
      r.githubPr.dismissBoundPr(e, t, o);
    },
    async enableAutoMerge(e, t, o) {
      n.logger.info(`LocalSessions.enableAutoMerge: cwd=${e}, prNumber=${t}, repo=${o ?? "<none>"}`);
      return r.enableAutoMerge(e, t, o);
    },
    async disableAutoMerge(e, t, o) {
      n.logger.info(`LocalSessions.disableAutoMerge: cwd=${e}, prNumber=${t}, repo=${o ?? "<none>"}`);
      return r.disableAutoMerge(e, t, o);
    },
    async markPrReady(e, t, o) {
      n.logger.info(`LocalSessions.markPrReady: cwd=${e}, prNumber=${t}, repo=${o ?? "<none>"}`);
      return r.markPrReady(e, t, o);
    },
    async markPrDraft(e, t, o) {
      n.logger.info(`LocalSessions.markPrDraft: cwd=${e}, prNumber=${t}, repo=${o ?? "<none>"}`);
      return r.markPrDraft(e, t, o);
    },
    async dequeuePr(e, t, o, s) {
      n.logger.info(`LocalSessions.dequeuePr: sessionId=${e}, cwd=${t}, prNumber=${o}, repo=${s ?? "<none>"}`);
      return r.dequeuePr(e, t, o, s);
    },
    async mergePr(e, t, o, s) {
      n.logger.info(`LocalSessions.mergePr: cwd=${e}, prNumber=${t}, method=${o ?? "squash"}, repo=${s ?? "<none>"}`);
      return r.mergePr(e, t, o, s);
    },
    popBackgroundTaskSuggestion(e, t) {
      n.logger.info(`LocalSessions.popBackgroundTaskSuggestion: sessionId=${e}, launched=${t}`);
      r.popBackgroundTaskSuggestion(e, t);
    },
    popBackgroundTaskSuggestionById(e, t, o) {
      n.logger.info(`LocalSessions.popBackgroundTaskSuggestionById: sessionId=${e}, taskId=${t}, launched=${o}`);
      return r.popBackgroundTaskSuggestionById(e, t, o);
    },
    notifySpawnedTaskStarted(e, t, o, s, c) {
      r.notifySpawnedTaskStarted(e, t, o, s, c);
    },
    async getTeleportReadiness(e) {
      n.logger.info(`LocalSessions.getTeleportReadiness: sessionId=${e}`);
      return new Q(r).checkReadiness(e);
    },
    async teleportToCloud(e, t) {
      n.refuseIfHipaaGated("teleport_to_cloud");
      n.logger.info(`LocalSessions.teleportToCloud: sessionId=${e}, environmentId=${t}`);
      return await new Q(r).teleportToCloud(e, t, s => {
        var c;
        if (i.webContents && !i.webContents.isDestroyed()) {
          if ((c = a(i.webContents)) != null) {
            c.dispatchOnEvent({
              type: "teleport_progress",
              sessionId: e,
              data: s
            });
          }
        }
      });
    },
    async beginTearOffHalo(e, t) {
      var o;
      var s;
      if ((s = (o = await n.maybeGetClaudeSwift()) == null ? undefined : o.tearOffHalo) != null) {
        s.begin(e, t);
      }
    },
    async setTearOffHalo(e) {
      var t;
      var o;
      if ((o = (t = await n.maybeGetClaudeSwift()) == null ? undefined : t.tearOffHalo) != null) {
        o.setArmed(e);
      }
    },
    async endTearOffHalo() {
      var e;
      var t;
      if ((t = (e = await n.maybeGetClaudeSwift()) == null ? undefined : e.tearOffHalo) != null) {
        t.end();
      }
    },
    respondToSSHPassword(e, t) {
      n.logger.info(`LocalSessions.respondToSSHPassword: requestId=${e}`);
      const o = E.get(e);
      if (o) {
        E.delete(e);
        o(t ?? null);
      }
    },
    async testSSHConnection(e) {
      n.logger.info(`LocalSessions.testSSHConnection: host=${e.sshHost}`);
      return k(e, async t => {
        await t.ping();
        return {
          valid: true
        };
      }, t => ({
        valid: false,
        error: t
      }));
    },
    async validateSSHPath(e, t) {
      n.logger.info(`LocalSessions.validateSSHPath: host=${e.sshHost}, path=${t}`);
      return k(e, async o => {
        const s = await o.validatePath(t);
        if (s.valid) {
          if (s.isDir) {
            return {
              valid: true
            };
          } else {
            return {
              valid: false,
              error: "Path is not a directory"
            };
          }
        } else {
          return {
            valid: false,
            error: s.error
          };
        }
      }, o => ({
        valid: false,
        error: o
      }));
    },
    async listSSHDirectory(e, t) {
      n.logger.info(`LocalSessions.listSSHDirectory: host=${e.sshHost}, path=${t}`);
      return k(e, async o => ({
        entries: (await o.listDirectory(t)).map(c => ({
          name: c.name,
          path: c.path,
          isDirectory: c.isDir
        })),
        resolvedPath: o.expandRemoteTilde(t)
      }), o => ({
        entries: [],
        error: o
      }));
    },
    async getSSHGitInfo(e, t) {
      n.logger.info(`LocalSessions.getSSHGitInfo: host=${e.sshHost}, path=${t}`);
      return $(w(e), "getSSHGitInfo", null, o => v(o, t));
    },
    async getSSHLocalBranches(e, t) {
      n.logger.info(`LocalSessions.getSSHLocalBranches: host=${e.sshHost}, path=${t}`);
      return $(w(e), "getSSHLocalBranches", [], o => o.listBranches(t));
    },
    async getSSHGitDiff(e, t, o, s) {
      n.logger.info(`LocalSessions.getSSHGitDiff: host=${e.sshHost}, cwd=${t}, base=${o}, head=${s ?? "<tree>"}`);
      return $(w(e), "getSSHGitDiff", null, c => W(c, t, o, s));
    },
    async getSSHGitDiffStats(e, t, o, s) {
      return $(w(e), "getSSHGitDiffStats", null, c => z(c, t, o, s));
    },
    async getSSHGitCommits(e, t, o, s) {
      return $(w(e), "getSSHGitCommits", null, c => q(c, t, o, s));
    },
    async getSSHCommitDiff(e, t, o) {
      return $(w(e), "getSSHCommitDiff", null, s => K(s, t, o));
    },
    async getSSHDiffFileContent(e, t, o, s, c) {
      return $(w(e), "getSSHDiffFileContent", null, f => j(f, t, o, s, c ?? undefined));
    },
    async getRemoteGitInfo(e, t) {
      n.logger.info(`LocalSessions.getRemoteGitInfo: target=${n.remoteTargetLabel(e)}, path=${t}`);
      if (await p(e, t)) {
        return $(e, "getRemoteGitInfo", null, o => v(o, t));
      } else {
        return null;
      }
    },
    async getRemoteGitDiff(e, t, o, s) {
      n.logger.info(`LocalSessions.getRemoteGitDiff: target=${n.remoteTargetLabel(e)}, cwd=${t}, base=${o}, head=${s ?? "<tree>"}`);
      if (await p(e, t)) {
        return $(e, "getRemoteGitDiff", null, c => W(c, t, o, s));
      } else {
        return null;
      }
    },
    async getRemoteGitDiffStats(e, t, o, s) {
      if (await p(e, t)) {
        return $(e, "getRemoteGitDiffStats", null, c => z(c, t, o, s));
      } else {
        return null;
      }
    },
    async getRemoteGitCommits(e, t, o, s) {
      if (await p(e, t)) {
        return $(e, "getRemoteGitCommits", null, c => q(c, t, o, s));
      } else {
        return null;
      }
    },
    async getRemoteCommitDiff(e, t, o) {
      if (await p(e, t)) {
        return $(e, "getRemoteCommitDiff", null, s => K(s, t, o));
      } else {
        return null;
      }
    },
    async getRemoteDiffFileContent(e, t, o, s, c) {
      if (await p(e, t)) {
        return $(e, "getRemoteDiffFileContent", null, f => j(f, t, o, s, c ?? undefined));
      } else {
        return null;
      }
    },
    async getSSHSupportedCommands(e, t) {
      n.logger.info(`LocalSessions.getSSHSupportedCommands: host=${e.sshHost}, cwd=${t}`);
      return [];
    },
    async ensureSSHConnected(e) {
      const t = r.getSSHConfig(e);
      if (!t) {
        return true;
      }
      const o = F.getRemoteServerController(t);
      if (!o.isConnected()) {
        await o.ensureReady("send_message", undefined, y(t.sshHost));
      }
      return true;
    },
    async checkRemoteTrust(e, t) {
      n.logger.info(`LocalSessions.checkRemoteTrust: host=${e.sshHost}, cwd=${t}`);
      return P({
        kind: "ssh",
        sshHost: e.sshHost,
        sshPort: e.sshPort,
        sshIdentityFile: e.sshIdentityFile,
        remoteCwd: e.remoteCwd
      }, `ssh:${e.sshHost}:${t}`, t);
    },
    async checkRemoteTargetTrust(e, t) {
      n.logger.info(`LocalSessions.checkRemoteTargetTrust: target=${n.remoteTargetLabel(e)}, cwd=${t}`);
      const o = n.remoteTargetFromConfigs(n.sshConfigFromTarget(e), n.wslConfigFromTarget(e));
      if (!o) {
        throw new Error("checkRemoteTargetTrust: unsupported remote target");
      }
      const s = S(o, t);
      return P(o, s, t);
    },
    async resolveSSHSettings(e, t) {
      const o = async () => ({
        ...(await n.resolveLocalSettingsForIpc()),
        availableModels: undefined
      });
      try {
        const s = F.getRemoteServerController(e);
        await s.ensureReady("warm_up", h(), y(e.sshHost));
        const c = s.remoteHome;
        if (c) {
          return n.resolveSSHSettingsForIpc(f => s.readFile(f), c, t);
        } else {
          return o();
        }
      } catch (s) {
        n.logger.warn(`LocalSessions.resolveSSHSettings fell back to local cascade for ${e.sshHost}:`, s);
        return o();
      }
    },
    getSSHConfigs() {
      return n.getSSHConfigs();
    },
    listWslDistros() {
      return n.listWslDistros();
    },
    async setSSHConfigs(e) {
      const t = await n.getSSHConfigs();
      await n.setSSHConfigs(e);
      const o = new Set(e.map(n.controllerCacheKey));
      for (const s of t) {
        if (!o.has(n.controllerCacheKey(s))) {
          F.evictRemoteServerController(s);
        }
      }
    },
    getTrustedSSHHosts() {
      return n.getTrustedSSHHosts();
    },
    async setTrustedSSHHosts(e) {
      await n.setTrustedSSHHosts(e);
    }
  };
}
exports.createLocalSessionsApi = ke;
//# sourceMappingURL=index.chunk-D6A_UcXJ.js.map