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
      e._sentryDebugIds[t] = "8e9145cb-6f62-4750-be8a-e0c427845372";
      e._sentryDebugIdIdentifier = "sentry-dbid-8e9145cb-6f62-4750-be8a-e0c427845372";
    }
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
const D = require("node:fs/promises");
const u = require("node:path");
const E = require("node:url");
const m = require("./index.chunk-c42vKsva.js");
const y = "--";
function A(e) {
  if (e.length === 0) {
    return new Map();
  }
  const t = new Map();
  const s = new Map();
  for (const n of e) {
    const c = n.split(u.sep).filter(r => r.length > 0);
    s.set(n, c.reverse());
    t.set(n, $(n));
  }
  let i = 20;
  while (i-- > 0) {
    const n = new Map();
    for (const [a, l] of t) {
      const f = n.get(l);
      if (f) {
        f.push(a);
      } else {
        n.set(l, [a]);
      }
    }
    let c = false;
    let r = false;
    for (const [, a] of n) {
      if (!(a.length <= 1)) {
        c = true;
        for (const l of a) {
          const f = s.get(l);
          const d = t.get(l);
          const p = d.split(y).length;
          if (p < f.length) {
            const g = f[p];
            t.set(l, g + y + d);
            r = true;
          }
        }
      }
    }
    if (!c || !r) {
      break;
    }
  }
  const o = new Set();
  for (const [n, c] of t) {
    let r = c;
    if (o.has(r)) {
      let a = 2;
      while (o.has(`${c}-${a}`)) {
        a++;
      }
      r = `${c}-${a}`;
      t.set(n, r);
    }
    o.add(r);
  }
  return t;
}
function $(e) {
  const t = u.basename(e);
  if (t !== "") {
    return t;
  }
  const s = /^([A-Za-z]):/.exec(e);
  if (s) {
    return s[1].toLowerCase();
  } else {
    return "drive";
  }
}
function j(e, t) {
  const s = new Set(t);
  const i = e.split(u.sep).filter(c => c.length > 0).reverse();
  let o = $(e);
  let n = 1;
  while (s.has(o) && n < i.length) {
    o = i[n] + y + o;
    n++;
  }
  if (s.has(o)) {
    const c = o;
    let r = 2;
    while (s.has(`${c}-${r}`)) {
      r++;
    }
    o = `${c}-${r}`;
  }
  return o;
}
const C = ["outputs", "uploads", ".host-home", m.AUTO_MEMORY_MOUNT_NAME, m.REMOTE_PLUGINS_MOUNT_NAME_RAW, m.LOCAL_PLUGINS_MOUNT_NAME_RAW, ".projects"];
function L(e, t = []) {
  const s = new Map();
  const i = [...t];
  for (const o of e) {
    const n = j(o, i);
    i.push(n);
    s.set(o, n);
  }
  return s;
}
function I(e) {
  if (e.mountNameMap) {
    return e.mountNameMap;
  } else {
    return A(e.userSelectedFolders ?? []);
  }
}
function k(e) {
  const t = I(e);
  const s = new Map();
  for (const [i, o] of t) {
    s.set(o, i);
  }
  return s;
}
function M(e) {
  return e.split(u.sep).join("/");
}
function H(e) {
  return e === ".." || e === "." || e === "";
}
function N(e) {
  if (e) {
    return e.split(/[/\\]/).some(H);
  } else {
    return false;
  }
}
function h(e, t, s) {
  const {
    vmProcessName: i,
    sessionStorageDir: o
  } = t;
  const n = `/sessions/${i}/`;
  if (!e.startsWith(n)) {
    return null;
  }
  const c = e.slice(n.length);
  if (N(c)) {
    return null;
  }
  if (c.startsWith("mnt/")) {
    const r = c.slice(4);
    const a = r.indexOf("/");
    const l = a === -1 ? r : r.slice(0, a);
    const f = a === -1 ? "" : r.slice(a + 1);
    let d;
    let p;
    if ((s == null ? undefined : s.decodeSegments) === false) {
      d = l;
      p = f;
    } else {
      try {
        d = decodeURIComponent(l);
      } catch {
        d = l;
      }
      try {
        p = decodeURIComponent(f);
      } catch {
        p = f;
      }
    }
    if (N(d) || N(p)) {
      return null;
    }
    if (d === "outputs") {
      if (o) {
        return u.join(o, "outputs", p);
      } else {
        return null;
      }
    }
    if (d === "uploads") {
      if (o) {
        return u.join(o, "uploads", p);
      } else {
        return null;
      }
    }
    if (d === ".host-home") {
      if (p) {
        return m.fromGuestCompatibleRootPath(p);
      } else {
        return null;
      }
    }
    if (d === m.AUTO_MEMORY_MOUNT_NAME) {
      if (t.autoMemoryDir) {
        return u.join(t.autoMemoryDir, p);
      } else {
        return null;
      }
    }
    const _ = k(t).get(d);
    if (_) {
      return u.join(_, p);
    } else {
      return null;
    }
  }
  return null;
}
function G(e, t) {
  const s = `/sessions/${t}/`;
  return e.startsWith(s) && !e.startsWith(`${s}mnt/`);
}
function W(e, t) {
  const {
    vmProcessName: s,
    sessionStorageDir: i,
    userSelectedFolders: o
  } = t;
  const n = `/sessions/${s}`;
  if (i) {
    const r = u.join(i, "outputs");
    if (e.startsWith(r + u.sep) || e === r) {
      const l = M(u.relative(r, e));
      return u.posix.join(n, "mnt", "outputs", l);
    }
    const a = u.join(i, "uploads");
    if (e.startsWith(a + u.sep) || e === a) {
      const l = M(u.relative(a, e));
      return u.posix.join(n, "mnt", "uploads", l);
    }
  }
  if (t.autoMemoryDir) {
    const r = t.autoMemoryDir;
    if (e.startsWith(r + u.sep) || e === r) {
      const a = M(u.relative(r, e));
      return u.posix.join(n, "mnt", m.AUTO_MEMORY_MOUNT_NAME, a);
    }
  }
  const c = I(t);
  for (const r of o ?? []) {
    const a = r.endsWith(u.sep) ? r : r + u.sep;
    if (e === r || e.startsWith(a)) {
      const l = c.get(r) ?? u.basename(r);
      const f = M(u.relative(r, e));
      return u.posix.join(n, "mnt", l, f);
    }
  }
  throw new Error(`Path not accessible in VM: ${e}`);
}
function S(e, t, s, i = false) {
  if (typeof e == "string") {
    const o = i ? V(e) : e;
    return Y(o, t, s);
  }
  if (Array.isArray(e)) {
    let o;
    for (let n = 0; n < e.length; n++) {
      const c = S(e[n], t, s, i);
      if (c !== e[n]) {
        o ??= e.slice();
        o[n] = c;
      }
    }
    return o ?? e;
  }
  if (e !== null && typeof e == "object") {
    const o = e;
    if (o.type === "base64" && typeof o.data == "string") {
      return e;
    }
    let n;
    for (const [c, r] of Object.entries(e)) {
      const a = S(r, t, s, i);
      if (a !== r) {
        n ??= {
          ...e
        };
        n[c] = a;
      }
    }
    return n ?? e;
  }
  return e;
}
function Y(e, t, s) {
  if (!e.includes(t)) {
    return e;
  }
  if (e.includes("file://")) {
    if (e.startsWith("file://") && !/\s/.test(e)) {
      return w(e, s, "vm-to-host");
    }
    e = e.replace(/file:\/\/\/[^\s)"'`\]\\#?]+/g, o => w(o, s, "vm-to-host"));
    if (!e.includes(t)) {
      return e;
    }
  }
  const i = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  if (e.startsWith(t) && !e.includes(`
`)) {
    const o = e.split("/").pop() ?? "";
    if (!/\.\w+\s/.test(o)) {
      const n = h(e, s);
      if (n) {
        return n;
      }
    }
  }
  e = O(e, `](computer://${t}`, "](computer://", null, true, o => {
    const n = h(t + o, s);
    if (n) {
      return R(n);
    } else {
      return null;
    }
  });
  e = e.replace(new RegExp(`\`computer://(${i}[^\`]+)\``, "g"), (o, n) => {
    const c = h(n, s);
    if (c) {
      return `\`computer://${c}\``;
    } else {
      return `\`computer://${n}\``;
    }
  });
  e = O(e, `computer://${t}`, "computer://", F, false, o => {
    const n = h(t + o, s);
    if (n) {
      return R(n);
    } else {
      return null;
    }
  });
  e = e.replace(new RegExp(`(?<![a-zA-Z0-9])(${i}[^\\s)"\`\\]\\\\]+)`, "g"), (o, n) => h(n, s) ?? n);
  return e;
}
function P(e) {
  return encodeURIComponent(e).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/!/g, "%21");
}
const F = new Set(["\"", "`", "]", "\\"]);
function b(e, t, s) {
  let i = 0;
  let o = -1;
  for (let n = t; n < e.length; n++) {
    const c = e.charAt(n);
    if (c === "(") {
      if (i === 0) {
        o = n;
      }
      i++;
    } else if (c === ")") {
      if (i === 0) {
        return n;
      }
      i--;
      if (i === 0) {
        o = -1;
      }
    } else if (i === 0 && s !== null && (s.has(c) || /\s/.test(c))) {
      return n;
    }
  }
  if (i > 0) {
    return o;
  } else {
    return e.length;
  }
}
function O(e, t, s, i, o, n) {
  let c = "";
  let r = 0;
  let a = e.indexOf(t, r);
  while (a !== -1) {
    c += e.slice(r, a);
    const l = a + t.length;
    const f = b(e, l, i);
    if (o && e.charAt(f) !== ")") {
      c += t;
      r = l;
    } else {
      const d = o ? ")" : "";
      const p = e.slice(l, f);
      const g = n(p);
      if (g === null) {
        c += t + p + d;
      } else {
        c += s + g + d;
      }
      r = f + d.length;
    }
    a = e.indexOf(t, r);
  }
  c += e.slice(r);
  return c;
}
function R(e) {
  return e.split("/").map(t => P(t)).join("/");
}
function V(e) {
  if (!e.includes("computer://")) {
    return e;
  }
  const t = /(`computer:\/\/[^`]+`)|(\]\(computer:\/\/)|(computer:\/\/)/g;
  let s = "";
  let i = 0;
  let o;
  while ((o = t.exec(e)) !== null) {
    const [n, c, r, a] = o;
    s += e.slice(i, o.index);
    if (c !== undefined) {
      s += c;
      i = o.index + n.length;
    } else if (r !== undefined) {
      const l = o.index + n.length;
      const f = b(e, l, null);
      if (e.charAt(f) === ")") {
        const d = e.slice(l, f);
        s += r + U(d) + ")";
        i = f + 1;
      } else {
        s += r;
        i = l;
      }
    } else if (a !== undefined) {
      const l = o.index + n.length;
      const f = b(e, l, F);
      const d = e.slice(l, f);
      s += a + U(d);
      i = f;
    } else {
      s += n;
      i = o.index + n.length;
    }
    t.lastIndex = i;
  }
  s += e.slice(i);
  return s;
}
function U(e) {
  return e.split("/").map(t => {
    let s = t;
    try {
      s = decodeURIComponent(t);
    } catch {}
    return P(s);
  }).join("/");
}
function w(e, t, s) {
  if (!e.startsWith("file://")) {
    return e;
  }
  const i = e.slice(7);
  if (!i.startsWith("/")) {
    return e;
  }
  if (s === "vm-to-host") {
    const o = h(i, t);
    if (o === null) {
      return e;
    } else {
      return E.pathToFileURL(o).href;
    }
  } else {
    let o;
    try {
      o = E.fileURLToPath(e);
    } catch {
      return e;
    }
    try {
      return `file://${W(o, t).split("/").map(r => encodeURIComponent(r)).join("/")}`;
    } catch {
      return e;
    }
  }
}
function T(e, t, s) {
  if (typeof e == "string") {
    if (e.startsWith("file://")) {
      return w(e, t, s);
    } else {
      return e;
    }
  }
  if (Array.isArray(e)) {
    return e.map(i => T(i, t, s));
  }
  if (e !== null && typeof e == "object") {
    const i = {};
    for (const [o, n] of Object.entries(e)) {
      i[o] = T(n, t, s);
    }
    return i;
  }
  return e;
}
function q(e, t, s) {
  if (s) {
    return "rw";
  } else if (t != null && t.includes(e)) {
    return "rwd";
  } else {
    return "rw";
  }
}
async function B(e) {
  for (const t of e) {
    try {
      await D.access(u.join(t, "CLAUDE.md"));
      return true;
    } catch {}
  }
  return false;
}
exports.HOST_LOOP_RESERVED_MOUNT_NAMES = C;
exports.deepTranslateVMPaths = S;
exports.deriveMountName = j;
exports.deriveMountNames = A;
exports.deriveMountNamesIncremental = L;
exports.encodeComputerUrlsForHostLoop = V;
exports.hasClaudeMdInFolders = B;
exports.isScratchpadVMPath = G;
exports.mapHostPathToVMPath = W;
exports.mapVMPathToHostPath = h;
exports.resolveWorkspaceMountMode = q;
exports.translateFileUrisInValue = T;
//# sourceMappingURL=index.chunk-BLNdD7Yt.js.map