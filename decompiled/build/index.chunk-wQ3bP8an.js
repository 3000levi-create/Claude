"use strict";

var p = Object.create;
var d = Object.defineProperty;
var E = Object.getOwnPropertyDescriptor;
var y = Object.getOwnPropertyNames;
var h = Object.getPrototypeOf;
var b = Object.prototype.hasOwnProperty;
var w = (e, o, n, r) => {
  if (o && typeof o == "object" || typeof o == "function") {
    for (let t of y(o)) {
      if (!b.call(e, t) && t !== n) {
        d(e, t, {
          get: () => o[t],
          enumerable: !(r = E(o, t)) || r.enumerable
        });
      }
    }
  }
  return e;
};
var T = (e, o, n) => {
  n = e != null ? p(h(e)) : {};
  return w(o || !e || !e.__esModule ? d(n, "default", {
    value: e,
    enumerable: true
  }) : n, e);
};
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
    var o = new e.Error().stack;
    if (o) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[o] = "497009a7-d1f0-4f42-85b5-da6867e31238";
      e._sentryDebugIdIdentifier = "sentry-dbid-497009a7-d1f0-4f42-85b5-da6867e31238";
    }
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
const a = require("node:path");
const c = require("electron");
const g = "fmkadmapgofadopljbjfkapdkoienihi";
async function m() {
  if (!(await D()) && !(await v())) {
    console.error("[profile] Could not load React DevTools. Install it in Chrome first.");
  }
}
async function D() {
  var e;
  var o;
  try {
    const n = await Promise.resolve().then(() => require("./index.chunk-Df16HAY4.js")).then(l => l.index);
    const r = n.installExtension ?? ((e = n.default) == null ? undefined : e.installExtension);
    const t = n.REACT_DEVELOPER_TOOLS ?? ((o = n.default) == null ? undefined : o.REACT_DEVELOPER_TOOLS);
    if (typeof r != "function" || !t) {
      throw new Error("installExtension export not found");
    }
    const i = await r(t);
    console.log(`[profile] React DevTools loaded via installer: ${i.name}`);
    return true;
  } catch (n) {
    console.warn("[profile] electron-devtools-installer failed:", n);
    return false;
  }
}
async function v() {
  try {
    const e = await import("node:fs");
    const o = a.join(c.app.getPath("home"), "Library/Application Support/Google/Chrome");
    const r = (await e.promises.readdir(o)).filter(t => t === "Default" || t.startsWith("Profile ")).sort();
    for (const t of r) {
      const i = a.join(o, t, "Extensions", g);
      try {
        const f = (await e.promises.readdir(i)).filter(s => !s.startsWith(".")).sort().pop();
        if (f) {
          const s = a.join(i, f);
          const u = await c.session.defaultSession.loadExtension(s);
          console.log(`[profile] React DevTools loaded from Chrome (${t}): ${u.name}`);
          return true;
        }
      } catch {}
    }
  } catch (e) {
    console.error("[profile] Chrome fallback failed:", e);
  }
  return false;
}
exports.loadReactDevTools = m;
//# sourceMappingURL=index.chunk-wQ3bP8an.js.map