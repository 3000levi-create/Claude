"use strict";

(function () {
  try {
    var e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    e.SENTRY_RELEASE = {
      id: "df1d8a339dfabcf359af7144fe142b59ff7d9a0f"
    };
  } catch {}
})();
try {
  (function () {
    var e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    var t = new e.Error().stack;
    if (t) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[t] = "892e1d7f-c1a9-4c23-8ebc-d60069d59375";
      e._sentryDebugIdIdentifier = "sentry-dbid-892e1d7f-c1a9-4c23-8ebc-d60069d59375";
    }
  })();
} catch {}
const f = require("node:fs/promises");
const C = require("node:os");
const a = require("node:path");
const N = require("node:timers/promises");
const c = require("./index.chunk-c42vKsva.js");
const d = require("node:fs");
function W(e) {
  const t = new Map();
  let n = null;
  for (const r of e.split(`
`)) {
    const i = r.trim();
    if (!i || i.startsWith("#") || i.startsWith(";")) {
      continue;
    }
    if (i.startsWith("[")) {
      const u = i.indexOf("]");
      if (u === -1) {
        continue;
      }
      const m = i.slice(1, u);
      const w = m.indexOf("\"");
      if (w === -1) {
        n = m.trim().toLowerCase();
      } else {
        const $ = m.slice(0, w).trim().toLowerCase();
        const R = U(m.slice(w));
        n = `${$}.${R}`;
      }
      if (!t.has(n)) {
        t.set(n, {});
      }
      continue;
    }
    if (n === null) {
      continue;
    }
    const o = i.indexOf("=");
    if (o === -1) {
      const u = E(i).trim().toLowerCase();
      if (u) {
        t.get(n)[u] = "true";
      }
      continue;
    }
    const s = i.slice(0, o).trim().toLowerCase();
    const l = x(i.slice(o + 1).trim());
    if (s) {
      t.get(n)[s] = l;
    }
  }
  return {
    sections: t
  };
}
function U(e) {
  const t = e.indexOf("\"");
  if (t === -1) {
    return e;
  }
  let n = "";
  let r = t + 1;
  while (r < e.length && e[r] !== "\"") {
    if (e[r] === "\\" && r + 1 < e.length) {
      n += e[r + 1];
      r += 2;
    } else {
      n += e[r];
      r++;
    }
  }
  return n;
}
function x(e) {
  if (e) {
    if (e.startsWith("\"")) {
      return B(e);
    } else {
      return E(e).trim();
    }
  } else {
    return "";
  }
}
function B(e) {
  let t = "";
  let n = 1;
  while (n < e.length && e[n] !== "\"") {
    if (e[n] === "\\" && n + 1 < e.length) {
      switch (e[n + 1]) {
        case "n":
          t += `
`;
          break;
        case "t":
          t += "\t";
          break;
        case "b":
          t += "\b";
          break;
        case "\\":
          t += "\\";
          break;
        case "\"":
          t += "\"";
          break;
        default:
          t += e[n + 1];
      }
      n += 2;
    } else {
      t += e[n];
      n++;
    }
  }
  return t;
}
function E(e) {
  for (let t = 1; t < e.length; t++) {
    if ((e[t] === "#" || e[t] === ";") && /\s/.test(e[t - 1])) {
      return e.slice(0, t);
    }
  }
  return e;
}
async function G(e) {
  try {
    const t = await d.promises.readFile(e, "utf-8");
    return W(t);
  } catch {
    return null;
  }
}
const z = ".invalid";
async function k(e) {
  let t = a.resolve(e);
  while (true) {
    const n = a.join(t, ".git");
    if (await c.isRealpathWithin(n, t, {
      allowEqual: false
    })) {
      return t;
    }
    const r = a.dirname(t);
    if (r === t) {
      break;
    }
    t = r;
  }
  return null;
}
async function v(e) {
  let t;
  try {
    t = (await d.promises.readFile(a.join(e, "commondir"), "utf-8")).split("\0")[0].trim();
  } catch {
    return null;
  }
  if (!t) {
    return null;
  }
  const n = a.isAbsolute(t) ? t : a.resolve(e, t);
  await c.assertNoUncSymlinkHop(n);
  return n;
}
async function g(e) {
  const t = a.join(e, ".git");
  try {
    const n = await d.promises.lstat(t);
    if (n.isDirectory()) {
      const r = (await v(t)) ?? t;
      return {
        gitDir: t,
        commonDir: r
      };
    }
    if (n.isFile()) {
      const i = (await d.promises.readFile(t, "utf-8")).trim().match(/^gitdir:\s*(.+)$/);
      if (!i) {
        return null;
      }
      const o = i[1].trim();
      const s = a.isAbsolute(o) ? o : a.resolve(e, o);
      await c.assertNoUncSymlinkHop(s);
      if (!(await d.promises.stat(s)).isDirectory()) {
        return null;
      }
      const u = (await v(s)) ?? s;
      return {
        gitDir: s,
        commonDir: u
      };
    }
  } catch {}
  return null;
}
async function q(e) {
  const t = await g(e);
  if (!t) {
    return null;
  }
  const n = a.join(e, ".git");
  const r = a.resolve(t.commonDir);
  if (r !== a.resolve(n) && r !== a.resolve(t.gitDir) && a.basename(r) === ".git") {
    return a.dirname(r);
  } else {
    return e;
  }
}
async function T(e) {
  try {
    const n = (await d.promises.readFile(a.join(e, "HEAD"), "utf-8")).trim();
    const r = n.match(/^ref:\s*refs\/heads\/(.+)$/);
    if (r && r[1]) {
      return r[1];
    } else if (/^[0-9a-f]{40,64}$/i.test(n)) {
      return "HEAD";
    } else {
      return null;
    }
  } catch {
    return null;
  }
}
async function H(e, t) {
  const n = await G(a.join(e, "config"));
  if (!n) {
    return null;
  }
  const r = n.sections.get(`remote.${t}`);
  return (r == null ? undefined : r.url) ?? null;
}
async function J(e, t, n) {
  try {
    if ((await d.promises.lstat(a.join(e, "refs", "remotes", t, n))).isFile()) {
      return true;
    }
  } catch {}
  try {
    const r = a.join(e, "packed-refs");
    if (!(await d.promises.lstat(r)).isFile()) {
      return false;
    }
    const i = await d.promises.readFile(r, "utf-8");
    const o = `refs/remotes/${t}/${n}`;
    for (const s of i.split(`
`)) {
      const l = s.trim();
      if (!l || l.startsWith("#") || l.startsWith("^")) {
        continue;
      }
      const u = l.indexOf(" ");
      if (u !== -1 && l.slice(u + 1) === o) {
        return true;
      }
    }
  } catch {}
  return false;
}
async function j(e, t) {
  try {
    const n = a.join(e, "refs", "remotes", t, "HEAD");
    if ((await d.promises.lstat(n)).isFile()) {
      const i = (await d.promises.readFile(n, "utf-8")).trim().match(/^ref:\s*refs\/remotes\/[^/]+\/(.+)$/);
      if (i != null && i[1]) {
        return i[1];
      }
    }
  } catch {}
  for (const n of ["main", "master"]) {
    if (await J(e, t, n)) {
      return n;
    }
  }
  return null;
}
async function K(e) {
  try {
    return (await d.promises.lstat(a.join(e, ".git"))).isFile();
  } catch {
    return false;
  }
}
async function Q(e) {
  const t = await g(e);
  if (t) {
    return j(t.commonDir, "origin");
  } else {
    return null;
  }
}
async function V(e) {
  const t = await g(e);
  if (t) {
    return T(t.gitDir);
  } else {
    return null;
  }
}
async function S(e, t = "") {
  const n = [];
  let r;
  try {
    r = await d.promises.readdir(e, {
      withFileTypes: true,
      encoding: "utf-8"
    });
  } catch {
    return n;
  }
  for (const i of r) {
    const o = String(i.name);
    const s = t ? `${t}/${o}` : o;
    if (i.isDirectory()) {
      const l = await S(a.join(e, o), s);
      n.push(...l);
    } else if (i.isFile()) {
      n.push(s);
    }
  }
  return n;
}
async function X(e) {
  try {
    const t = await d.promises.readFile(a.join(e, "packed-refs"), "utf-8");
    const n = [];
    for (const r of t.split(`
`)) {
      const i = r.trim();
      if (!i || i.startsWith("#") || i.startsWith("^")) {
        continue;
      }
      const o = i.match(/^[0-9a-f]+ refs\/heads\/(.+)$/);
      if (o != null && o[1]) {
        n.push(o[1]);
      }
    }
    return n;
  } catch {
    return [];
  }
}
async function Z(e) {
  const t = await g(e);
  if (!t) {
    return [];
  }
  const [n, r] = await Promise.all([S(a.join(t.commonDir, "refs", "heads")), X(t.commonDir)]);
  const i = new Set(n);
  for (const o of r) {
    i.add(o);
  }
  return Array.from(i).sort((o, s) => o.localeCompare(s));
}
async function Y(e) {
  const t = await g(e);
  if (!t) {
    return null;
  }
  const [n, r, i] = await Promise.all([T(t.gitDir), H(t.commonDir, "origin"), j(t.commonDir, "origin")]);
  if (!n || !r) {
    return null;
  } else {
    return {
      branch: n,
      remoteUrl: r,
      defaultBranch: i
    };
  }
}
const tt = 200;
function A(e) {
  const t = e.replace(/[^a-zA-Z0-9]/g, "-");
  if (t.length > tt) {
    return undefined;
  } else {
    return t;
  }
}
async function F() {
  var o;
  const e = c.loadUserEnvVars().CLAUDE_CODE_TMPDIR ?? process.env.CLAUDE_CODE_TMPDIR ?? (process.platform === "darwin" ? "/tmp" : C.tmpdir());
  const t = (o = process.getuid) == null ? undefined : o.call(process);
  const n = process.platform === "win32" ? "claude" : `claude-${t ?? 0}`;
  const r = a.join(e, n);
  if (c.isUnsafeUnc(r)) {
    return;
  }
  let i;
  try {
    i = await f.lstat(r);
  } catch (s) {
    const l = s.code;
    if (l === "ENOENT" || l === "ENOTDIR") {
      return {
        dir: r,
        verified: false
      };
    } else {
      return undefined;
    }
  }
  if (!!i.isDirectory() && (t === undefined || i.uid === t)) {
    try {
      return {
        dir: await f.realpath(r),
        verified: true
      };
    } catch {
      return {
        dir: r,
        verified: true
      };
    }
  }
}
const L = {
  allowedTools: [],
  mcpContextUris: [],
  enabledMcpjsonServers: [],
  disabledMcpjsonServers: [],
  hasTrustDialogAccepted: false,
  projectOnboardingSeenCount: 0,
  hasClaudeMdExternalIncludesApproved: false,
  hasClaudeMdExternalIncludesWarningShown: false
};
const y = {
  numStartups: 0,
  theme: "dark",
  verbose: false
};
function _() {
  if (process.env.CLAUDE_CONFIG_DIR) {
    return a.join(c.getClaudeConfigDir(), ".claude.json");
  } else {
    return a.join(C.homedir(), ".claude.json");
  }
}
async function D(e) {
  if (!a.isAbsolute(e)) {
    return e;
  }
  try {
    const t = await k(e);
    if (t) {
      return c.canonicalizeWslPath(await f.realpath(t));
    }
  } catch {}
  return c.canonicalizeWslPath(a.resolve(e));
}
function h(e, t) {
  if (!e) {
    return;
  }
  const n = e[t];
  if (n || !c.isWslUncPath(t)) {
    return n;
  }
  for (const [r, i] of Object.entries(e)) {
    if (c.isWslUncPath(r) && c.canonicalizeWslPath(r) === t) {
      return i;
    }
  }
}
const p = new Map();
async function O(e, t) {
  let n;
  let r;
  try {
    ({
      mtimeMs: n,
      size: r
    } = await f.stat(e));
  } catch {
    p.delete(e);
    return {
      ...t
    };
  }
  const i = p.get(e);
  if (i && i.mtimeMs === n && i.size === r) {
    return {
      ...t,
      ...i.parsed
    };
  }
  try {
    const o = await f.readFile(e, {
      encoding: "utf-8"
    });
    const s = JSON.parse(o);
    p.set(e, {
      mtimeMs: n,
      size: r,
      parsed: s
    });
    return {
      ...t,
      ...s
    };
  } catch (o) {
    const s = (o == null ? undefined : o.code) ?? (o == null ? undefined : o.name) ?? "unknown";
    c.logger.error(`Failed to parse config file ${e} (${s})`);
    return {
      ...t
    };
  }
}
async function b() {
  return O(_(), y);
}
function et(e) {
  if (typeof e != "object" || e === null) {
    return false;
  }
  const t = e;
  return (t.type === undefined || t.type === "stdio") && typeof t.command == "string";
}
async function I(e) {
  const t = await b();
  const n = {};
  const r = i => {
    if (typeof i == "object" && i !== null) {
      for (const [o, s] of Object.entries(i)) {
        if (et(s)) {
          n[o] = {
            command: s.command,
            args: s.args,
            env: s.env
          };
        }
      }
    }
  };
  r(t.mcpServers);
  if (e) {
    const i = await D(e);
    const o = h(t.projects, i) ?? L;
    r(o.mcpServers);
    for (const s of o.disabledMcpServers ?? []) {
      delete n[s];
    }
  }
  return n;
}
const nt = new c.Mutex();
function rt(e, t) {
  return nt.runExclusive(() => at(e, t));
}
const it = 10000;
const ot = 15000;
async function st(e) {
  const t = `${e}.lock`;
  const n = async () => {
    await f.rm(t, {
      recursive: true,
      force: true
    }).catch(o => c.logger.warn(`Failed to remove ${t}: ${o}`));
  };
  const r = Date.now() + ot;
  while (true) {
    try {
      await f.mkdir(t, {
        mode: 448
      });
      break;
    } catch (s) {
      if (s.code !== "EEXIST") {
        c.logger.warn(`Cannot create ${t}: ${s}; writing without it`);
        return async () => {};
      }
    }
    const o = await f.stat(t).catch(() => null);
    if (o && Date.now() - o.mtimeMs > it) {
      await n();
    }
    if (Date.now() > r) {
      c.logger.warn(`Timed out waiting for ${t}; writing without it`);
      return async () => {};
    }
    await N.setTimeout(15);
  }
  const i = await f.stat(t).catch(() => null);
  return async () => {
    const o = await f.stat(t).catch(() => null);
    if (i && o && (o.ino !== i.ino || o.birthtimeMs !== i.birthtimeMs)) {
      c.logger.warn(`${t} was taken over during the save; leaving it`);
      return;
    }
    await n();
  };
}
async function at(e, t) {
  const n = _();
  await f.mkdir(a.dirname(n), {
    recursive: true,
    mode: 448
  });
  let r;
  try {
    r = await f.realpath(n);
  } catch (o) {
    if (o.code !== "ENOENT") {
      throw o;
    }
    const s = await f.lstat(n).catch(() => null);
    r = s != null && s.isSymbolicLink() ? await c.realpathWithAncestor(n) : n;
  }
  const i = await st(n);
  try {
    p.delete(n);
    const o = await O(n, y);
    const s = {
      ...o,
      projects: {
        ...o.projects,
        ...Object.fromEntries(e.map(u => [u, t(h(o.projects, u) ?? {
          ...L
        })]))
      }
    };
    const l = Object.fromEntries(Object.entries(s).filter(([u, m]) => JSON.stringify(m) !== JSON.stringify(y[u])));
    try {
      const u = `${n}.backup`;
      await f.copyFile(n, u);
    } catch (u) {
      if (u.code !== "ENOENT") {
        c.logger.warn(`Failed to backup config: ${u}`);
      }
    }
    await c.writeJsonAtomic(r, l);
    p.delete(n);
  } catch (o) {
    c.logger.error(`Failed to save config: ${o}`);
    throw o;
  } finally {
    await i();
  }
}
async function P(e, t = false) {
  var s;
  const n = await b();
  if (!a.isAbsolute(e)) {
    return ((s = h(n.projects, e)) == null ? undefined : s.hasTrustDialogAccepted) === true;
  }
  let r = c.canonicalizeWslPath(a.resolve(e));
  if (t) {
    const l = h(n.projects, r);
    return (l == null ? undefined : l.hasTrustDialogAccepted) === true;
  }
  const i = await D(e);
  const o = h(n.projects, i);
  if (o != null && o.hasTrustDialogAccepted) {
    return true;
  }
  while (r !== null) {
    const l = h(n.projects, r);
    if (l != null && l.hasTrustDialogAccepted) {
      return true;
    }
    const u = a.resolve(r, "..");
    r = u === r ? null : u;
  }
  return false;
}
async function M(e) {
  const t = await D(e);
  const n = [t];
  if (a.isAbsolute(e)) {
    const r = c.canonicalizeWslPath(a.resolve(e));
    if (r !== t) {
      n.push(r);
    }
  }
  await rt(n, r => ({
    ...r,
    hasTrustDialogAccepted: true
  }));
}
async function ct() {
  const e = await b();
  if (!e.projects) {
    return [];
  }
  const t = Object.entries(e.projects).filter(([, r]) => (r == null ? undefined : r.hasTrustDialogAccepted) === true).map(([r]) => r);
  return (await Promise.all(t.map(async r => {
    const i = c.canonicalizeWslPath(r);
    if (c.isUnsafeUnc(i)) {
      return null;
    }
    try {
      await f.access(i);
      return r;
    } catch {
      return null;
    }
  }))).filter(r => r !== null);
}
const lt = Object.freeze(Object.defineProperty({
  __proto__: null,
  acceptTrustDialog: M,
  checkHasTrustDialogAccepted: P,
  cliClaudeTempDir: F,
  cliSanitizeCwdSimple: A,
  getClaudeJsonMcpServers: I,
  listTrustedWorkspaces: ct
}, Symbol.toStringTag, {
  value: "Module"
}));
exports.ClaudeCodeConfig = lt;
exports.REFTABLE_HEAD_SENTINEL = z;
exports.acceptTrustDialog = M;
exports.checkHasTrustDialogAccepted = P;
exports.cliClaudeTempDir = F;
exports.cliSanitizeCwdSimple = A;
exports.findGitRoot = k;
exports.getClaudeJsonMcpServers = I;
exports.isLinkedCheckout = K;
exports.readBranchFromRoot = V;
exports.readDefaultBranchFromRoot = Q;
exports.readGitInfo = Y;
exports.readLocalBranches = Z;
exports.resolveMainRepoRoot = q;
//# sourceMappingURL=index.chunk-Cbl_wHZ5.js.map