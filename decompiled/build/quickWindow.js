"use strict";

(function () {
  try {
    var t = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    t.SENTRY_RELEASE = {
      id: "df1d8a339dfabcf359af7144fe142b59ff7d9a0f"
    };
  } catch {}
})();
try {
  (function () {
    var t = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    var e = new t.Error().stack;
    if (e) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[e] = "b08317d9-dc29-4394-9989-2fba899ecb5e";
      t._sentryDebugIdIdentifier = "sentry-dbid-b08317d9-dc29-4394-9989-2fba899ecb5e";
    }
  })();
} catch {}
const I = require("electron");
const D = require("electron/renderer");
function Zt() {
  var t;
  if ("frameToken" in D.webFrame && D.webFrame.top && "frameToken" in D.webFrame.top) {
    return D.webFrame.top.frameToken === D.webFrame.frameToken;
  } else {
    return ((t = D.webFrame.top) == null ? undefined : t.routingId) === D.webFrame.routingId;
  }
}
const xs = {
  openHelp() {
    return I.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.internal.ui_$_AboutWindow_$_openHelp");
  },
  getSupport() {
    return I.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.internal.ui_$_AboutWindow_$_getSupport");
  },
  getAppName() {
    return I.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.internal.ui_$_AboutWindow_$_getAppName");
  },
  getBuildProps() {
    return I.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.internal.ui_$_AboutWindow_$_getBuildProps");
  }
};
const Ts = t => {
  if (Zt()) {
    t["claude.internal.ui"] = t["claude.internal.ui"] || {};
    t["claude.internal.ui"].AboutWindow = xs;
  }
};
const ws = {
  requestDismiss(t) {
    return I.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.internal.ui_$_QuickWindow_$_requestDismiss", t);
  },
  requestDismissWithPayload(t) {
    return I.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.internal.ui_$_QuickWindow_$_requestDismissWithPayload", t);
  },
  requestSkooch(t, e) {
    return I.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.internal.ui_$_QuickWindow_$_requestSkooch", t, e);
  }
};
const Is = t => {
  if (Zt()) {
    t["claude.internal.ui"] = t["claude.internal.ui"] || {};
    t["claude.internal.ui"].QuickWindow = ws;
  }
};
const Rs = {
  titleBarReady() {
    return I.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.internal.ui_$_MainWindowTitleBar_$_titleBarReady");
  },
  requestReloadMainView() {
    return I.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.internal.ui_$_MainWindowTitleBar_$_requestReloadMainView");
  },
  requestMainMenuPopup() {
    return I.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.internal.ui_$_MainWindowTitleBar_$_requestMainMenuPopup");
  },
  isClaudeCurrentlyHealthy() {
    return I.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.internal.ui_$_MainWindowTitleBar_$_isClaudeCurrentlyHealthy");
  },
  onUpdateTitleBar(t) {
    const e = (n, r) => t(r);
    I.ipcRenderer.on("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.internal.ui_$_MainWindowTitleBar_$_updateTitleBar", e);
    return () => {
      I.ipcRenderer.removeListener("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.internal.ui_$_MainWindowTitleBar_$_updateTitleBar", e);
    };
  },
  onShowLoadError(t) {
    const e = (n, r) => t(r);
    I.ipcRenderer.on("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.internal.ui_$_MainWindowTitleBar_$_showLoadError", e);
    return () => {
      I.ipcRenderer.removeListener("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.internal.ui_$_MainWindowTitleBar_$_showLoadError", e);
    };
  },
  onHideLoadError(t) {
    const e = n => t();
    I.ipcRenderer.on("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.internal.ui_$_MainWindowTitleBar_$_hideLoadError", e);
    return () => {
      I.ipcRenderer.removeListener("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.internal.ui_$_MainWindowTitleBar_$_hideLoadError", e);
    };
  }
};
const $s = t => {
  if (Zt()) {
    t["claude.internal.ui"] = t["claude.internal.ui"] || {};
    t["claude.internal.ui"].MainWindowTitleBar = Rs;
  }
};
const et = {};
Ts(et);
Is(et);
$s(et);
for (const [t, e] of Object.entries(et)) {
  I.contextBridge.exposeInMainWorld(t, e);
}
function Ns() {
  var e;
  let t;
  try {
    t = new URL(window.location.href);
  } catch {
    return false;
  }
  return !!("frameToken" in D.webFrame && D.webFrame.top && "frameToken" in D.webFrame.top ? D.webFrame.top.frameToken === D.webFrame.frameToken : ((e = D.webFrame.top) == null ? undefined : e.routingId) === D.webFrame.routingId) && ((t.origin === "null" || t.origin === null ? `${t.protocol}//${t.host}` : t.origin) === "https://claude.ai" || (t.origin === "null" || t.origin === null ? `${t.protocol}//${t.host}` : t.origin) === "https://preview.claude.ai" || (t.origin === "null" || t.origin === null ? `${t.protocol}//${t.host}` : t.origin) === "https://claude.com" || (t.origin === "null" || t.origin === null ? `${t.protocol}//${t.host}` : t.origin) === "https://preview.claude.com" || t.hostname === "localhost" || !!(t.origin === "null" || t.origin === null ? `${t.protocol}//${t.host}` : t.origin).endsWith(".ant.dev") || t.hostname === "localhost" || t.protocol === "file:" || (t.origin === "null" || t.origin === null ? `${t.protocol}//${t.host}` : t.origin) === "app://localhost");
}
const Cs = {
  getInitialLocale() {
    return I.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.hybrid_$_DesktopIntl_$_getInitialLocale");
  },
  requestLocaleChange(t) {
    return I.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.hybrid_$_DesktopIntl_$_requestLocaleChange", t);
  },
  onLocaleChanged(t) {
    const e = (n, r, s) => t(r, s);
    I.ipcRenderer.on("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.hybrid_$_DesktopIntl_$_localeChanged", e);
    return () => {
      I.ipcRenderer.removeListener("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.hybrid_$_DesktopIntl_$_localeChanged", e);
    };
  }
};
const Os = t => {
  if (Ns()) {
    t["claude.hybrid"] = t["claude.hybrid"] || {};
    t["claude.hybrid"].DesktopIntl = Cs;
  }
};
const xr = {};
Os(xr);
for (const [t, e] of Object.entries(xr)) {
  I.contextBridge.exposeInMainWorld(t, e);
}
const E = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const T = globalThis;
const se = "10.27.0";
function tt() {
  nt(T);
  return T;
}
function nt(t) {
  const e = t.__SENTRY__ = t.__SENTRY__ || {};
  e.version = e.version || se;
  return e[se] = e[se] || {};
}
function ve(t, e, n = T) {
  const r = n.__SENTRY__ = n.__SENTRY__ || {};
  const s = r[se] = r[se] || {};
  return s[t] ||= e();
}
const As = ["debug", "info", "warn", "error", "log", "assert", "trace"];
const Ds = "Sentry Logger ";
const ze = {};
function Ee(t) {
  if (!("console" in T)) {
    return t();
  }
  const e = T.console;
  const n = {};
  const r = Object.keys(ze);
  r.forEach(s => {
    const i = ze[s];
    n[s] = e[s];
    e[s] = i;
  });
  try {
    return t();
  } finally {
    r.forEach(s => {
      e[s] = n[s];
    });
  }
}
function Ms() {
  Ht().enabled = true;
}
function Ls() {
  Ht().enabled = false;
}
function Tr() {
  return Ht().enabled;
}
function Ps(...t) {
  Wt("log", ...t);
}
function js(...t) {
  Wt("warn", ...t);
}
function Fs(...t) {
  Wt("error", ...t);
}
function Wt(t, ...e) {
  if (E && Tr()) {
    Ee(() => {
      T.console[t](`${Ds}[${t}]:`, ...e);
    });
  }
}
function Ht() {
  if (E) {
    return ve("loggerSettings", () => ({
      enabled: false
    }));
  } else {
    return {
      enabled: false
    };
  }
}
const y = {
  enable: Ms,
  disable: Ls,
  isEnabled: Tr,
  log: Ps,
  warn: js,
  error: Fs
};
const wr = 50;
const X = "?";
const dn = /\(error: (.*)\)/;
const ln = /captureMessage|captureException/;
function Ir(...t) {
  const e = t.sort((n, r) => n[0] - r[0]).map(n => n[1]);
  return (n, r = 0, s = 0) => {
    const i = [];
    const a = n.split(`
`);
    for (let o = r; o < a.length; o++) {
      let c = a[o];
      if (c.length > 1024) {
        c = c.slice(0, 1024);
      }
      const u = dn.test(c) ? c.replace(dn, "$1") : c;
      if (!u.match(/\S*Error: /)) {
        for (const d of e) {
          const l = d(u);
          if (l) {
            i.push(l);
            break;
          }
        }
        if (i.length >= wr + s) {
          break;
        }
      }
    }
    return Rr(i.slice(s));
  };
}
function Bs(t) {
  if (Array.isArray(t)) {
    return Ir(...t);
  } else {
    return t;
  }
}
function Rr(t) {
  if (!t.length) {
    return [];
  }
  const e = Array.from(t);
  if (/sentryWrapped/.test(Pe(e).function || "")) {
    e.pop();
  }
  e.reverse();
  if (ln.test(Pe(e).function || "")) {
    e.pop();
    if (ln.test(Pe(e).function || "")) {
      e.pop();
    }
  }
  return e.slice(0, wr).map(n => ({
    ...n,
    filename: n.filename || Pe(e).filename,
    function: n.function || X
  }));
}
function Pe(t) {
  return t[t.length - 1] || {};
}
const ut = "<anonymous>";
function Q(t) {
  try {
    if (!t || typeof t != "function") {
      return ut;
    } else {
      return t.name || ut;
    }
  } catch {
    return ut;
  }
}
function fn(t) {
  const e = t.exception;
  if (e) {
    const n = [];
    try {
      e.values.forEach(r => {
        if (r.stacktrace.frames) {
          n.push(...r.stacktrace.frames);
        }
      });
      return n;
    } catch {
      return;
    }
  }
}
function $r(t) {
  if ("__v_isVNode" in t && t.__v_isVNode) {
    return "[VueVNode]";
  } else {
    return "[VueViewModel]";
  }
}
const Ze = {};
const pn = {};
function ce(t, e) {
  Ze[t] = Ze[t] || [];
  Ze[t].push(e);
}
function ue(t, e) {
  if (!pn[t]) {
    pn[t] = true;
    try {
      e();
    } catch (n) {
      if (E) {
        y.error(`Error while instrumenting ${t}`, n);
      }
    }
  }
}
function F(t, e) {
  const n = t && Ze[t];
  if (n) {
    for (const r of n) {
      try {
        r(e);
      } catch (s) {
        if (E) {
          y.error(`Error while triggering instrumentation handler.
Type: ${t}
Name: ${Q(r)}
Error:`, s);
        }
      }
    }
  }
}
let dt = null;
function Us(t) {
  const e = "error";
  ce(e, t);
  ue(e, Zs);
}
function Zs() {
  dt = T.onerror;
  T.onerror = function (t, e, n, r, s) {
    F("error", {
      column: r,
      error: s,
      line: n,
      msg: t,
      url: e
    });
    if (dt) {
      return dt.apply(this, arguments);
    } else {
      return false;
    }
  };
  T.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let lt = null;
function Ws(t) {
  const e = "unhandledrejection";
  ce(e, t);
  ue(e, Hs);
}
function Hs() {
  lt = T.onunhandledrejection;
  T.onunhandledrejection = function (t) {
    F("unhandledrejection", t);
    if (lt) {
      return lt.apply(this, arguments);
    } else {
      return true;
    }
  };
  T.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
const Nr = Object.prototype.toString;
function Vt(t) {
  switch (Nr.call(t)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
    case "[object WebAssembly.Exception]":
      return true;
    default:
      return ee(t, Error);
  }
}
function Se(t, e) {
  return Nr.call(t) === `[object ${e}]`;
}
function Cr(t) {
  return Se(t, "ErrorEvent");
}
function hn(t) {
  return Se(t, "DOMError");
}
function Vs(t) {
  return Se(t, "DOMException");
}
function H(t) {
  return Se(t, "String");
}
function zt(t) {
  return typeof t == "object" && t !== null && "__sentry_template_string__" in t && "__sentry_template_values__" in t;
}
function rt(t) {
  return t === null || zt(t) || typeof t != "object" && typeof t != "function";
}
function we(t) {
  return Se(t, "Object");
}
function st(t) {
  return typeof Event !== "undefined" && ee(t, Event);
}
function zs(t) {
  return typeof Element !== "undefined" && ee(t, Element);
}
function qs(t) {
  return Se(t, "RegExp");
}
function Oe(t) {
  return t != null && !!t.then && typeof t.then == "function";
}
function Gs(t) {
  return we(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t;
}
function ee(t, e) {
  try {
    return t instanceof e;
  } catch {
    return false;
  }
}
function Or(t) {
  return typeof t == "object" && t !== null && (!!t.__isVue || !!t._isVue || !!t.__v_isVNode);
}
function Ys(t) {
  return typeof Request !== "undefined" && ee(t, Request);
}
const qt = T;
const Js = 80;
function Ar(t, e = {}) {
  if (!t) {
    return "<unknown>";
  }
  try {
    let n = t;
    const r = 5;
    const s = [];
    let i = 0;
    let a = 0;
    const o = " > ";
    const c = o.length;
    let u;
    const d = Array.isArray(e) ? e : e.keyAttrs;
    const l = !Array.isArray(e) && e.maxStringLength || Js;
    while (n && i++ < r && (u = Ks(n, d), u !== "html" && (!(i > 1) || !(a + s.length * c + u.length >= l)))) {
      s.push(u);
      a += u.length;
      n = n.parentNode;
    }
    return s.reverse().join(o);
  } catch {
    return "<unknown>";
  }
}
function Ks(t, e) {
  const n = t;
  const r = [];
  if (n == null || !n.tagName) {
    return "";
  }
  if (qt.HTMLElement && n instanceof HTMLElement && n.dataset) {
    if (n.dataset.sentryComponent) {
      return n.dataset.sentryComponent;
    }
    if (n.dataset.sentryElement) {
      return n.dataset.sentryElement;
    }
  }
  r.push(n.tagName.toLowerCase());
  const s = e != null && e.length ? e.filter(a => n.getAttribute(a)).map(a => [a, n.getAttribute(a)]) : null;
  if (s != null && s.length) {
    s.forEach(a => {
      r.push(`[${a[0]}="${a[1]}"]`);
    });
  } else {
    if (n.id) {
      r.push(`#${n.id}`);
    }
    const a = n.className;
    if (a && H(a)) {
      const o = a.split(/\s+/);
      for (const c of o) {
        r.push(`.${c}`);
      }
    }
  }
  const i = ["aria-label", "type", "name", "title", "alt"];
  for (const a of i) {
    const o = n.getAttribute(a);
    if (o) {
      r.push(`[${a}="${o}"]`);
    }
  }
  return r.join("");
}
function Gt() {
  try {
    return qt.document.location.href;
  } catch {
    return "";
  }
}
function Xs(t) {
  if (!qt.HTMLElement) {
    return null;
  }
  let e = t;
  const n = 5;
  for (let r = 0; r < n; r++) {
    if (!e) {
      return null;
    }
    if (e instanceof HTMLElement) {
      if (e.dataset.sentryComponent) {
        return e.dataset.sentryComponent;
      }
      if (e.dataset.sentryElement) {
        return e.dataset.sentryElement;
      }
    }
    e = e.parentNode;
  }
  return null;
}
function M(t, e, n) {
  if (!(e in t)) {
    return;
  }
  const r = t[e];
  if (typeof r != "function") {
    return;
  }
  const s = n(r);
  if (typeof s == "function") {
    Dr(s, r);
  }
  try {
    t[e] = s;
  } catch {
    if (E) {
      y.log(`Failed to replace method "${e}" in object`, t);
    }
  }
}
function ie(t, e, n) {
  try {
    Object.defineProperty(t, e, {
      value: n,
      writable: true,
      configurable: true
    });
  } catch {
    if (E) {
      y.log(`Failed to add non-enumerable property "${e}" to object`, t);
    }
  }
}
function Dr(t, e) {
  try {
    const n = e.prototype || {};
    t.prototype = e.prototype = n;
    ie(t, "__sentry_original__", e);
  } catch {}
}
function Yt(t) {
  return t.__sentry_original__;
}
function Mr(t) {
  if (Vt(t)) {
    return {
      message: t.message,
      name: t.name,
      stack: t.stack,
      ..._n(t)
    };
  }
  if (st(t)) {
    const e = {
      type: t.type,
      target: mn(t.target),
      currentTarget: mn(t.currentTarget),
      ..._n(t)
    };
    if (typeof CustomEvent !== "undefined" && ee(t, CustomEvent)) {
      e.detail = t.detail;
    }
    return e;
  } else {
    return t;
  }
}
function mn(t) {
  try {
    if (zs(t)) {
      return Ar(t);
    } else {
      return Object.prototype.toString.call(t);
    }
  } catch {
    return "<unknown>";
  }
}
function _n(t) {
  if (typeof t == "object" && t !== null) {
    const e = {};
    for (const n in t) {
      if (Object.prototype.hasOwnProperty.call(t, n)) {
        e[n] = t[n];
      }
    }
    return e;
  } else {
    return {};
  }
}
function Qs(t) {
  const e = Object.keys(Mr(t));
  e.sort();
  if (e[0]) {
    return e.join(", ");
  } else {
    return "[object has no keys]";
  }
}
function vt(t, e = 0) {
  if (typeof t != "string" || e === 0 || t.length <= e) {
    return t;
  } else {
    return `${t.slice(0, e)}...`;
  }
}
function gn(t, e) {
  if (!Array.isArray(t)) {
    return "";
  }
  const n = [];
  for (let r = 0; r < t.length; r++) {
    const s = t[r];
    try {
      if (Or(s)) {
        n.push($r(s));
      } else {
        n.push(String(s));
      }
    } catch {
      n.push("[value cannot be serialized]");
    }
  }
  return n.join(e);
}
function We(t, e, n = false) {
  if (H(t)) {
    if (qs(e)) {
      return e.test(t);
    } else if (H(e)) {
      if (n) {
        return t === e;
      } else {
        return t.includes(e);
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function it(t, e = [], n = false) {
  return e.some(r => We(t, r, n));
}
function ei() {
  const t = T;
  return t.crypto || t.msCrypto;
}
let ft;
function ti() {
  return Math.random() * 16;
}
function L(t = ei()) {
  try {
    if (t != null && t.randomUUID) {
      return t.randomUUID().replace(/-/g, "");
    }
  } catch {}
  ft ||= "10000000100040008000100000000000";
  return ft.replace(/[018]/g, e => (e ^ (ti() & 15) >> e / 4).toString(16));
}
function Lr(t) {
  var e;
  var n;
  if ((n = (e = t.exception) == null ? undefined : e.values) == null) {
    return undefined;
  } else {
    return n[0];
  }
}
function re(t) {
  const {
    message: e,
    event_id: n
  } = t;
  if (e) {
    return e;
  }
  const r = Lr(t);
  if (r) {
    if (r.type && r.value) {
      return `${r.type}: ${r.value}`;
    } else {
      return r.type || r.value || n || "<unknown>";
    }
  } else {
    return n || "<unknown>";
  }
}
function Et(t, e, n) {
  const r = t.exception = t.exception || {};
  const s = r.values = r.values || [];
  const i = s[0] = s[0] || {};
  i.value ||= e || "";
  i.type ||= "Error";
}
function fe(t, e) {
  const n = Lr(t);
  if (!n) {
    return;
  }
  const r = {
    type: "generic",
    handled: true
  };
  const s = n.mechanism;
  n.mechanism = {
    ...r,
    ...s,
    ...e
  };
  if (e && "data" in e) {
    const i = {
      ...(s == null ? undefined : s.data),
      ...e.data
    };
    n.mechanism.data = i;
  }
}
function yn(t) {
  if (ni(t)) {
    return true;
  }
  try {
    ie(t, "__sentry_captured__", true);
  } catch {}
  return false;
}
function ni(t) {
  try {
    return t.__sentry_captured__;
  } catch {}
}
const Pr = 1000;
function Ae() {
  return Date.now() / Pr;
}
function ri() {
  const {
    performance: t
  } = T;
  if (t == null || !t.now || !t.timeOrigin) {
    return Ae;
  }
  const e = t.timeOrigin;
  return () => (e + t.now()) / Pr;
}
let bn;
function V() {
  return (bn ??= ri())();
}
function si(t) {
  const e = V();
  const n = {
    sid: L(),
    init: true,
    timestamp: e,
    started: e,
    duration: 0,
    status: "ok",
    errors: 0,
    ignoreDuration: false,
    toJSON: () => ai(n)
  };
  if (t) {
    pe(n, t);
  }
  return n;
}
function pe(t, e = {}) {
  if (e.user) {
    if (!t.ipAddress && e.user.ip_address) {
      t.ipAddress = e.user.ip_address;
    }
    if (!t.did && !e.did) {
      t.did = e.user.id || e.user.email || e.user.username;
    }
  }
  t.timestamp = e.timestamp || V();
  if (e.abnormal_mechanism) {
    t.abnormal_mechanism = e.abnormal_mechanism;
  }
  if (e.ignoreDuration) {
    t.ignoreDuration = e.ignoreDuration;
  }
  if (e.sid) {
    t.sid = e.sid.length === 32 ? e.sid : L();
  }
  if (e.init !== undefined) {
    t.init = e.init;
  }
  if (!t.did && e.did) {
    t.did = `${e.did}`;
  }
  if (typeof e.started == "number") {
    t.started = e.started;
  }
  if (t.ignoreDuration) {
    t.duration = undefined;
  } else if (typeof e.duration == "number") {
    t.duration = e.duration;
  } else {
    const n = t.timestamp - t.started;
    t.duration = n >= 0 ? n : 0;
  }
  if (e.release) {
    t.release = e.release;
  }
  if (e.environment) {
    t.environment = e.environment;
  }
  if (!t.ipAddress && e.ipAddress) {
    t.ipAddress = e.ipAddress;
  }
  if (!t.userAgent && e.userAgent) {
    t.userAgent = e.userAgent;
  }
  if (typeof e.errors == "number") {
    t.errors = e.errors;
  }
  if (e.status) {
    t.status = e.status;
  }
}
function ii(t, e) {
  let n = {};
  if (t.status === "ok") {
    n = {
      status: "exited"
    };
  }
  pe(t, n);
}
function ai(t) {
  return {
    sid: `${t.sid}`,
    init: t.init,
    started: new Date(t.started * 1000).toISOString(),
    timestamp: new Date(t.timestamp * 1000).toISOString(),
    status: t.status,
    errors: t.errors,
    did: typeof t.did == "number" || typeof t.did == "string" ? `${t.did}` : undefined,
    duration: t.duration,
    abnormal_mechanism: t.abnormal_mechanism,
    attrs: {
      release: t.release,
      environment: t.environment,
      ip_address: t.ipAddress,
      user_agent: t.userAgent
    }
  };
}
function De(t, e, n = 2) {
  if (!e || typeof e != "object" || n <= 0) {
    return e;
  }
  if (t && Object.keys(e).length === 0) {
    return t;
  }
  const r = {
    ...t
  };
  for (const s in e) {
    if (Object.prototype.hasOwnProperty.call(e, s)) {
      r[s] = De(r[s], e[s], n - 1);
    }
  }
  return r;
}
function vn() {
  return L();
}
function jr() {
  return L().substring(16);
}
const St = "_sentrySpan";
function En(t, e) {
  if (e) {
    ie(t, St, e);
  } else {
    delete t[St];
  }
}
function Sn(t) {
  return t[St];
}
const oi = 100;
class z {
  constructor() {
    this._notifyingListeners = false;
    this._scopeListeners = [];
    this._eventProcessors = [];
    this._breadcrumbs = [];
    this._attachments = [];
    this._user = {};
    this._tags = {};
    this._attributes = {};
    this._extra = {};
    this._contexts = {};
    this._sdkProcessingMetadata = {};
    this._propagationContext = {
      traceId: vn(),
      sampleRand: Math.random()
    };
  }
  clone() {
    const e = new z();
    e._breadcrumbs = [...this._breadcrumbs];
    e._tags = {
      ...this._tags
    };
    e._attributes = {
      ...this._attributes
    };
    e._extra = {
      ...this._extra
    };
    e._contexts = {
      ...this._contexts
    };
    if (this._contexts.flags) {
      e._contexts.flags = {
        values: [...this._contexts.flags.values]
      };
    }
    e._user = this._user;
    e._level = this._level;
    e._session = this._session;
    e._transactionName = this._transactionName;
    e._fingerprint = this._fingerprint;
    e._eventProcessors = [...this._eventProcessors];
    e._attachments = [...this._attachments];
    e._sdkProcessingMetadata = {
      ...this._sdkProcessingMetadata
    };
    e._propagationContext = {
      ...this._propagationContext
    };
    e._client = this._client;
    e._lastEventId = this._lastEventId;
    En(e, Sn(this));
    return e;
  }
  setClient(e) {
    this._client = e;
  }
  setLastEventId(e) {
    this._lastEventId = e;
  }
  getClient() {
    return this._client;
  }
  lastEventId() {
    return this._lastEventId;
  }
  addScopeListener(e) {
    this._scopeListeners.push(e);
  }
  addEventProcessor(e) {
    this._eventProcessors.push(e);
    return this;
  }
  setUser(e) {
    this._user = e || {
      email: undefined,
      id: undefined,
      ip_address: undefined,
      username: undefined
    };
    if (this._session) {
      pe(this._session, {
        user: e
      });
    }
    this._notifyScopeListeners();
    return this;
  }
  getUser() {
    return this._user;
  }
  setTags(e) {
    this._tags = {
      ...this._tags,
      ...e
    };
    this._notifyScopeListeners();
    return this;
  }
  setTag(e, n) {
    return this.setTags({
      [e]: n
    });
  }
  setAttributes(e) {
    this._attributes = {
      ...this._attributes,
      ...e
    };
    this._notifyScopeListeners();
    return this;
  }
  setAttribute(e, n) {
    return this.setAttributes({
      [e]: n
    });
  }
  removeAttribute(e) {
    if (e in this._attributes) {
      delete this._attributes[e];
      this._notifyScopeListeners();
    }
    return this;
  }
  setExtras(e) {
    this._extra = {
      ...this._extra,
      ...e
    };
    this._notifyScopeListeners();
    return this;
  }
  setExtra(e, n) {
    this._extra = {
      ...this._extra,
      [e]: n
    };
    this._notifyScopeListeners();
    return this;
  }
  setFingerprint(e) {
    this._fingerprint = e;
    this._notifyScopeListeners();
    return this;
  }
  setLevel(e) {
    this._level = e;
    this._notifyScopeListeners();
    return this;
  }
  setTransactionName(e) {
    this._transactionName = e;
    this._notifyScopeListeners();
    return this;
  }
  setContext(e, n) {
    if (n === null) {
      delete this._contexts[e];
    } else {
      this._contexts[e] = n;
    }
    this._notifyScopeListeners();
    return this;
  }
  setSession(e) {
    if (e) {
      this._session = e;
    } else {
      delete this._session;
    }
    this._notifyScopeListeners();
    return this;
  }
  getSession() {
    return this._session;
  }
  update(e) {
    if (!e) {
      return this;
    }
    const n = typeof e == "function" ? e(this) : e;
    const r = n instanceof z ? n.getScopeData() : we(n) ? e : undefined;
    const {
      tags: s,
      attributes: i,
      extra: a,
      user: o,
      contexts: c,
      level: u,
      fingerprint: d = [],
      propagationContext: l
    } = r || {};
    this._tags = {
      ...this._tags,
      ...s
    };
    this._attributes = {
      ...this._attributes,
      ...i
    };
    this._extra = {
      ...this._extra,
      ...a
    };
    this._contexts = {
      ...this._contexts,
      ...c
    };
    if (o && Object.keys(o).length) {
      this._user = o;
    }
    if (u) {
      this._level = u;
    }
    if (d.length) {
      this._fingerprint = d;
    }
    if (l) {
      this._propagationContext = l;
    }
    return this;
  }
  clear() {
    this._breadcrumbs = [];
    this._tags = {};
    this._attributes = {};
    this._extra = {};
    this._user = {};
    this._contexts = {};
    this._level = undefined;
    this._transactionName = undefined;
    this._fingerprint = undefined;
    this._session = undefined;
    En(this, undefined);
    this._attachments = [];
    this.setPropagationContext({
      traceId: vn(),
      sampleRand: Math.random()
    });
    this._notifyScopeListeners();
    return this;
  }
  addBreadcrumb(e, n) {
    var i;
    const r = typeof n == "number" ? n : oi;
    if (r <= 0) {
      return this;
    }
    const s = {
      timestamp: Ae(),
      ...e,
      message: e.message ? vt(e.message, 2048) : e.message
    };
    this._breadcrumbs.push(s);
    if (this._breadcrumbs.length > r) {
      this._breadcrumbs = this._breadcrumbs.slice(-r);
      if ((i = this._client) != null) {
        i.recordDroppedEvent("buffer_overflow", "log_item");
      }
    }
    this._notifyScopeListeners();
    return this;
  }
  getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1];
  }
  clearBreadcrumbs() {
    this._breadcrumbs = [];
    this._notifyScopeListeners();
    return this;
  }
  addAttachment(e) {
    this._attachments.push(e);
    return this;
  }
  clearAttachments() {
    this._attachments = [];
    return this;
  }
  getScopeData() {
    return {
      breadcrumbs: this._breadcrumbs,
      attachments: this._attachments,
      contexts: this._contexts,
      tags: this._tags,
      attributes: this._attributes,
      extra: this._extra,
      user: this._user,
      level: this._level,
      fingerprint: this._fingerprint || [],
      eventProcessors: this._eventProcessors,
      propagationContext: this._propagationContext,
      sdkProcessingMetadata: this._sdkProcessingMetadata,
      transactionName: this._transactionName,
      span: Sn(this)
    };
  }
  setSDKProcessingMetadata(e) {
    this._sdkProcessingMetadata = De(this._sdkProcessingMetadata, e, 2);
    return this;
  }
  setPropagationContext(e) {
    this._propagationContext = e;
    return this;
  }
  getPropagationContext() {
    return this._propagationContext;
  }
  captureException(e, n) {
    const r = (n == null ? undefined : n.event_id) || L();
    if (!this._client) {
      if (E) {
        y.warn("No client configured on scope - will not capture exception!");
      }
      return r;
    }
    const s = new Error("Sentry syntheticException");
    this._client.captureException(e, {
      originalException: e,
      syntheticException: s,
      ...n,
      event_id: r
    }, this);
    return r;
  }
  captureMessage(e, n, r) {
    const s = (r == null ? undefined : r.event_id) || L();
    if (!this._client) {
      if (E) {
        y.warn("No client configured on scope - will not capture message!");
      }
      return s;
    }
    const i = (r == null ? undefined : r.syntheticException) ?? new Error(e);
    this._client.captureMessage(e, n, {
      originalException: e,
      syntheticException: i,
      ...r,
      event_id: s
    }, this);
    return s;
  }
  captureEvent(e, n) {
    const r = (n == null ? undefined : n.event_id) || L();
    if (this._client) {
      this._client.captureEvent(e, {
        ...n,
        event_id: r
      }, this);
      return r;
    } else {
      if (E) {
        y.warn("No client configured on scope - will not capture event!");
      }
      return r;
    }
  }
  _notifyScopeListeners() {
    if (!this._notifyingListeners) {
      this._notifyingListeners = true;
      this._scopeListeners.forEach(e => {
        e(this);
      });
      this._notifyingListeners = false;
    }
  }
}
function ci() {
  return ve("defaultCurrentScope", () => new z());
}
function ui() {
  return ve("defaultIsolationScope", () => new z());
}
class di {
  constructor(e, n) {
    let r;
    if (e) {
      r = e;
    } else {
      r = new z();
    }
    let s;
    if (n) {
      s = n;
    } else {
      s = new z();
    }
    this._stack = [{
      scope: r
    }];
    this._isolationScope = s;
  }
  withScope(e) {
    const n = this._pushScope();
    let r;
    try {
      r = e(n);
    } catch (s) {
      this._popScope();
      throw s;
    }
    if (Oe(r)) {
      return r.then(s => {
        this._popScope();
        return s;
      }, s => {
        this._popScope();
        throw s;
      });
    } else {
      this._popScope();
      return r;
    }
  }
  getClient() {
    return this.getStackTop().client;
  }
  getScope() {
    return this.getStackTop().scope;
  }
  getIsolationScope() {
    return this._isolationScope;
  }
  getStackTop() {
    return this._stack[this._stack.length - 1];
  }
  _pushScope() {
    const e = this.getScope().clone();
    this._stack.push({
      client: this.getClient(),
      scope: e
    });
    return e;
  }
  _popScope() {
    if (this._stack.length <= 1) {
      return false;
    } else {
      return !!this._stack.pop();
    }
  }
}
function he() {
  const t = tt();
  const e = nt(t);
  return e.stack = e.stack || new di(ci(), ui());
}
function li(t) {
  return he().withScope(t);
}
function fi(t, e) {
  const n = he();
  return n.withScope(() => {
    n.getStackTop().scope = t;
    return e(t);
  });
}
function kn(t) {
  return he().withScope(() => t(he().getIsolationScope()));
}
function pi() {
  return {
    withIsolationScope: kn,
    withScope: li,
    withSetScope: fi,
    withSetIsolationScope: (t, e) => kn(e),
    getCurrentScope: () => he().getScope(),
    getIsolationScope: () => he().getIsolationScope()
  };
}
function Jt(t) {
  const e = nt(t);
  if (e.acs) {
    return e.acs;
  } else {
    return pi();
  }
}
function Z() {
  const t = tt();
  return Jt(t).getCurrentScope();
}
function de() {
  const t = tt();
  return Jt(t).getIsolationScope();
}
function Kt() {
  return ve("globalScope", () => new z());
}
function hi(...t) {
  const e = tt();
  const n = Jt(e);
  if (t.length === 2) {
    const [r, s] = t;
    if (r) {
      return n.withSetScope(r, s);
    } else {
      return n.withScope(s);
    }
  }
  return n.withScope(t[0]);
}
function C() {
  return Z().getClient();
}
function mi(t) {
  const e = t.getPropagationContext();
  const {
    traceId: n,
    parentSpanId: r,
    propagationSpanId: s
  } = e;
  const i = {
    trace_id: n,
    span_id: s || jr()
  };
  if (r) {
    i.parent_span_id = r;
  }
  return i;
}
const _i = "sentry.source";
const gi = "sentry.sample_rate";
const yi = "sentry.previous_trace_sample_rate";
const bi = "sentry.op";
const vi = "sentry.origin";
const Fr = "sentry.profile_id";
const Br = "sentry.exclusive_time";
const Ei = 0;
const Si = 1;
const ki = "_sentryScope";
const xi = "_sentryIsolationScope";
function Ti(t) {
  if (t) {
    if (typeof t == "object" && "deref" in t && typeof t.deref == "function") {
      try {
        return t.deref();
      } catch {
        return;
      }
    }
    return t;
  }
}
function Ur(t) {
  const e = t;
  return {
    scope: e[ki],
    isolationScope: Ti(e[xi])
  };
}
const wi = "sentry-";
const Ii = /^sentry-/;
function Ri(t) {
  const e = $i(t);
  if (!e) {
    return;
  }
  const n = Object.entries(e).reduce((r, [s, i]) => {
    if (s.match(Ii)) {
      const a = s.slice(wi.length);
      r[a] = i;
    }
    return r;
  }, {});
  if (Object.keys(n).length > 0) {
    return n;
  }
}
function $i(t) {
  if (!!t && (!!H(t) || !!Array.isArray(t))) {
    if (Array.isArray(t)) {
      return t.reduce((e, n) => {
        const r = xn(n);
        Object.entries(r).forEach(([s, i]) => {
          e[s] = i;
        });
        return e;
      }, {});
    } else {
      return xn(t);
    }
  }
}
function xn(t) {
  return t.split(",").map(e => {
    const n = e.indexOf("=");
    if (n === -1) {
      return [];
    }
    const r = e.slice(0, n);
    const s = e.slice(n + 1);
    return [r, s].map(i => {
      try {
        return decodeURIComponent(i.trim());
      } catch {
        return;
      }
    });
  }).reduce((e, [n, r]) => {
    if (n && r) {
      e[n] = r;
    }
    return e;
  }, {});
}
const Ni = /^o(\d+)\./;
const Ci = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function Oi(t) {
  return t === "http" || t === "https";
}
function Me(t, e = false) {
  const {
    host: n,
    path: r,
    pass: s,
    port: i,
    projectId: a,
    protocol: o,
    publicKey: c
  } = t;
  return `${o}://${c}${e && s ? `:${s}` : ""}@${n}${i ? `:${i}` : ""}/${r && `${r}/`}${a}`;
}
function Ai(t) {
  const e = Ci.exec(t);
  if (!e) {
    Ee(() => {
      console.error(`Invalid Sentry Dsn: ${t}`);
    });
    return;
  }
  const [n, r, s = "", i = "", a = "", o = ""] = e.slice(1);
  let c = "";
  let u = o;
  const d = u.split("/");
  if (d.length > 1) {
    c = d.slice(0, -1).join("/");
    u = d.pop();
  }
  if (u) {
    const l = u.match(/^\d+/);
    if (l) {
      u = l[0];
    }
  }
  return Zr({
    host: i,
    pass: s,
    path: c,
    projectId: u,
    port: a,
    protocol: n,
    publicKey: r
  });
}
function Zr(t) {
  return {
    protocol: t.protocol,
    publicKey: t.publicKey || "",
    pass: t.pass || "",
    host: t.host,
    port: t.port || "",
    path: t.path || "",
    projectId: t.projectId
  };
}
function Di(t) {
  if (!E) {
    return true;
  }
  const {
    port: e,
    projectId: n,
    protocol: r
  } = t;
  if (["protocol", "publicKey", "host", "projectId"].find(a => t[a] ? false : (y.error(`Invalid Sentry Dsn: ${a} missing`), true))) {
    return false;
  } else if (n.match(/^\d+$/)) {
    if (Oi(r)) {
      if (e && isNaN(parseInt(e, 10))) {
        y.error(`Invalid Sentry Dsn: Invalid port ${e}`);
        return false;
      } else {
        return true;
      }
    } else {
      y.error(`Invalid Sentry Dsn: Invalid protocol ${r}`);
      return false;
    }
  } else {
    y.error(`Invalid Sentry Dsn: Invalid projectId ${n}`);
    return false;
  }
}
function Mi(t) {
  const e = t.match(Ni);
  if (e == null) {
    return undefined;
  } else {
    return e[1];
  }
}
function Li(t) {
  const e = t.getOptions();
  const {
    host: n
  } = t.getDsn() || {};
  let r;
  if (e.orgId) {
    r = String(e.orgId);
  } else if (n) {
    r = Mi(n);
  }
  return r;
}
function Pi(t) {
  const e = typeof t == "string" ? Ai(t) : Zr(t);
  if (!!e && !!Di(e)) {
    return e;
  }
}
function ji(t) {
  if (typeof t == "boolean") {
    return Number(t);
  }
  const e = typeof t == "string" ? parseFloat(t) : t;
  if (typeof e == "number" && !isNaN(e) && !(e < 0) && !(e > 1)) {
    return e;
  }
}
const Wr = 1;
let Tn = false;
function Fi(t) {
  const {
    spanId: e,
    traceId: n,
    isRemote: r
  } = t.spanContext();
  const s = r ? e : Xt(t).parent_span_id;
  const i = Ur(t).scope;
  const a = r ? (i == null ? undefined : i.getPropagationContext().propagationSpanId) || jr() : e;
  return {
    parent_span_id: s,
    span_id: a,
    trace_id: n
  };
}
function Bi(t) {
  if (t && t.length > 0) {
    return t.map(({
      context: {
        spanId: e,
        traceId: n,
        traceFlags: r,
        ...s
      },
      attributes: i
    }) => ({
      span_id: e,
      trace_id: n,
      sampled: r === Wr,
      attributes: i,
      ...s
    }));
  }
}
function wn(t) {
  if (typeof t == "number") {
    return In(t);
  } else if (Array.isArray(t)) {
    return t[0] + t[1] / 1000000000;
  } else if (t instanceof Date) {
    return In(t.getTime());
  } else {
    return V();
  }
}
function In(t) {
  if (t > 9999999999) {
    return t / 1000;
  } else {
    return t;
  }
}
function Xt(t) {
  var r;
  if (Zi(t)) {
    return t.getSpanJSON();
  }
  const {
    spanId: e,
    traceId: n
  } = t.spanContext();
  if (Ui(t)) {
    const {
      attributes: s,
      startTime: i,
      name: a,
      endTime: o,
      status: c,
      links: u
    } = t;
    const d = "parentSpanId" in t ? t.parentSpanId : "parentSpanContext" in t ? (r = t.parentSpanContext) == null ? undefined : r.spanId : undefined;
    return {
      span_id: e,
      trace_id: n,
      data: s,
      description: a,
      parent_span_id: d,
      start_timestamp: wn(i),
      timestamp: wn(o) || undefined,
      status: Hi(c),
      op: s[bi],
      origin: s[vi],
      links: Bi(u)
    };
  }
  return {
    span_id: e,
    trace_id: n,
    start_timestamp: 0,
    data: {}
  };
}
function Ui(t) {
  const e = t;
  return !!e.attributes && !!e.startTime && !!e.name && !!e.endTime && !!e.status;
}
function Zi(t) {
  return typeof t.getSpanJSON == "function";
}
function Wi(t) {
  const {
    traceFlags: e
  } = t.spanContext();
  return e === Wr;
}
function Hi(t) {
  if (!!t && t.code !== Ei) {
    if (t.code === Si) {
      return "ok";
    } else {
      return t.message || "internal_error";
    }
  }
}
const Vi = "_sentryRootSpan";
function Hr(t) {
  return t[Vi] || t;
}
function Rn() {
  if (!Tn) {
    Ee(() => {
      console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.");
    });
    Tn = true;
  }
}
function zi(t) {
  var n;
  if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) {
    return false;
  }
  const e = (n = C()) == null ? undefined : n.getOptions();
  return !!e && (e.tracesSampleRate != null || !!e.tracesSampler);
}
function $n(t) {
  y.log(`Ignoring span ${t.op} - ${t.description} because it matches \`ignoreSpans\`.`);
}
function Nn(t, e) {
  if (e == null || !e.length || !t.description) {
    return false;
  }
  for (const n of e) {
    if (Gi(n)) {
      if (We(t.description, n)) {
        if (E) {
          $n(t);
        }
        return true;
      }
      continue;
    }
    if (!n.name && !n.op) {
      continue;
    }
    const r = n.name ? We(t.description, n.name) : true;
    const s = n.op ? t.op && We(t.op, n.op) : true;
    if (r && s) {
      if (E) {
        $n(t);
      }
      return true;
    }
  }
  return false;
}
function qi(t, e) {
  const n = e.parent_span_id;
  const r = e.span_id;
  if (n) {
    for (const s of t) {
      if (s.parent_span_id === r) {
        s.parent_span_id = n;
      }
    }
  }
}
function Gi(t) {
  return typeof t == "string" || t instanceof RegExp;
}
const Qt = "production";
const Yi = "_frozenDsc";
function Vr(t, e) {
  const n = e.getOptions();
  const {
    publicKey: r
  } = e.getDsn() || {};
  const s = {
    environment: n.environment || Qt,
    release: n.release,
    public_key: r,
    trace_id: t,
    org_id: Li(e)
  };
  e.emit("createDsc", s);
  return s;
}
function Ji(t, e) {
  const n = e.getPropagationContext();
  return n.dsc || Vr(n.traceId, t);
}
function Ki(t) {
  var w;
  const e = C();
  if (!e) {
    return {};
  }
  const n = Hr(t);
  const r = Xt(n);
  const s = r.data;
  const i = n.spanContext().traceState;
  const a = (i == null ? undefined : i.get("sentry.sample_rate")) ?? s[gi] ?? s[yi];
  function o(A) {
    if (typeof a == "number" || typeof a == "string") {
      A.sample_rate = `${a}`;
    }
    return A;
  }
  const c = n[Yi];
  if (c) {
    return o(c);
  }
  const u = i == null ? undefined : i.get("sentry.dsc");
  const d = u && Ri(u);
  if (d) {
    return o(d);
  }
  const l = Vr(t.spanContext().traceId, e);
  const g = s[_i];
  const p = r.description;
  if (g !== "url" && p) {
    l.transaction = p;
  }
  if (zi()) {
    l.sampled = String(Wi(n));
    l.sample_rand = (i == null ? undefined : i.get("sentry.sample_rand")) ?? ((w = Ur(n).scope) == null ? undefined : w.getPropagationContext().sampleRand.toString());
  }
  o(l);
  e.emit("createDsc", l, n);
  return l;
}
function B(t, e = 100, n = Infinity) {
  try {
    return kt("", t, e, n);
  } catch (r) {
    return {
      ERROR: `**non-serializable** (${r})`
    };
  }
}
function zr(t, e = 3, n = 102400) {
  const r = B(t, e);
  if (ta(r) > n) {
    return zr(t, e - 1, n);
  } else {
    return r;
  }
}
function kt(t, e, n = Infinity, r = Infinity, s = na()) {
  const [i, a] = s;
  if (e == null || ["boolean", "string"].includes(typeof e) || typeof e == "number" && Number.isFinite(e)) {
    return e;
  }
  const o = Xi(t, e);
  if (!o.startsWith("[object ")) {
    return o;
  }
  if (e.__sentry_skip_normalization__) {
    return e;
  }
  const c = typeof e.__sentry_override_normalization_depth__ == "number" ? e.__sentry_override_normalization_depth__ : n;
  if (c === 0) {
    return o.replace("object ", "");
  }
  if (i(e)) {
    return "[Circular ~]";
  }
  const u = e;
  if (u && typeof u.toJSON == "function") {
    try {
      const p = u.toJSON();
      return kt("", p, c - 1, r, s);
    } catch {}
  }
  const d = Array.isArray(e) ? [] : {};
  let l = 0;
  const g = Mr(e);
  for (const p in g) {
    if (!Object.prototype.hasOwnProperty.call(g, p)) {
      continue;
    }
    if (l >= r) {
      d[p] = "[MaxProperties ~]";
      break;
    }
    const w = g[p];
    d[p] = kt(p, w, c - 1, r, s);
    l++;
  }
  a(e);
  return d;
}
function Xi(t, e) {
  try {
    if (t === "domain" && e && typeof e == "object" && e._events) {
      return "[Domain]";
    }
    if (t === "domainEmitter") {
      return "[DomainEmitter]";
    }
    if (typeof global !== "undefined" && e === global) {
      return "[Global]";
    }
    if (typeof window !== "undefined" && e === window) {
      return "[Window]";
    }
    if (typeof document !== "undefined" && e === document) {
      return "[Document]";
    }
    if (Or(e)) {
      return $r(e);
    }
    if (Gs(e)) {
      return "[SyntheticEvent]";
    }
    if (typeof e == "number" && !Number.isFinite(e)) {
      return `[${e}]`;
    }
    if (typeof e == "function") {
      return `[Function: ${Q(e)}]`;
    }
    if (typeof e == "symbol") {
      return `[${String(e)}]`;
    }
    if (typeof e == "bigint") {
      return `[BigInt: ${String(e)}]`;
    }
    const n = Qi(e);
    if (/^HTML(\w*)Element$/.test(n)) {
      return `[HTMLElement: ${n}]`;
    } else {
      return `[object ${n}]`;
    }
  } catch (n) {
    return `**non-serializable** (${n})`;
  }
}
function Qi(t) {
  const e = Object.getPrototypeOf(t);
  if (e != null && e.constructor) {
    return e.constructor.name;
  } else {
    return "null prototype";
  }
}
function ea(t) {
  return ~-encodeURI(t).split(/%..|./).length;
}
function ta(t) {
  return ea(JSON.stringify(t));
}
function na() {
  const t = new WeakSet();
  function e(r) {
    if (t.has(r)) {
      return true;
    } else {
      t.add(r);
      return false;
    }
  }
  function n(r) {
    t.delete(r);
  }
  return [e, n];
}
function ke(t, e = []) {
  return [t, e];
}
function ra(t, e) {
  const [n, r] = t;
  return [n, [...r, e]];
}
function Cn(t, e) {
  const n = t[1];
  for (const r of n) {
    const s = r[0].type;
    if (e(r, s)) {
      return true;
    }
  }
  return false;
}
function xt(t) {
  const e = nt(T);
  if (e.encodePolyfill) {
    return e.encodePolyfill(t);
  } else {
    return new TextEncoder().encode(t);
  }
}
function sa(t) {
  const [e, n] = t;
  let r = JSON.stringify(e);
  function s(i) {
    if (typeof r == "string") {
      r = typeof i == "string" ? r + i : [xt(r), i];
    } else {
      r.push(typeof i == "string" ? xt(i) : i);
    }
  }
  for (const i of n) {
    const [a, o] = i;
    s(`
${JSON.stringify(a)}
`);
    if (typeof o == "string" || o instanceof Uint8Array) {
      s(o);
    } else {
      let c;
      try {
        c = JSON.stringify(o);
      } catch {
        c = JSON.stringify(B(o));
      }
      s(c);
    }
  }
  if (typeof r == "string") {
    return r;
  } else {
    return ia(r);
  }
}
function ia(t) {
  const e = t.reduce((s, i) => s + i.length, 0);
  const n = new Uint8Array(e);
  let r = 0;
  for (const s of t) {
    n.set(s, r);
    r += s.length;
  }
  return n;
}
function aa(t) {
  const e = typeof t.data == "string" ? xt(t.data) : t.data;
  return [{
    type: "attachment",
    length: e.length,
    filename: t.filename,
    content_type: t.contentType,
    attachment_type: t.attachmentType
  }, e];
}
const oa = {
  session: "session",
  sessions: "session",
  attachment: "attachment",
  transaction: "transaction",
  event: "error",
  client_report: "internal",
  user_report: "default",
  profile: "profile",
  profile_chunk: "profile",
  replay_event: "replay",
  replay_recording: "replay",
  check_in: "monitor",
  feedback: "feedback",
  span: "span",
  raw_security: "security",
  log: "log_item",
  metric: "metric",
  trace_metric: "metric"
};
function On(t) {
  return oa[t];
}
function qr(t) {
  if (t == null || !t.sdk) {
    return;
  }
  const {
    name: e,
    version: n
  } = t.sdk;
  return {
    name: e,
    version: n
  };
}
function ca(t, e, n, r) {
  var i;
  const s = (i = t.sdkProcessingMetadata) == null ? undefined : i.dynamicSamplingContext;
  return {
    event_id: t.event_id,
    sent_at: new Date().toISOString(),
    ...(e && {
      sdk: e
    }),
    ...(!!n && r && {
      dsn: Me(r)
    }),
    ...(s && {
      trace: s
    })
  };
}
function ua(t, e) {
  var r;
  var s;
  var i;
  var a;
  if (!e) {
    return t;
  }
  const n = t.sdk || {};
  t.sdk = {
    ...n,
    name: n.name || e.name,
    version: n.version || e.version,
    integrations: [...(((r = t.sdk) == null ? undefined : r.integrations) || []), ...(e.integrations || [])],
    packages: [...(((s = t.sdk) == null ? undefined : s.packages) || []), ...(e.packages || [])],
    settings: (i = t.sdk) != null && i.settings || e.settings ? {
      ...((a = t.sdk) == null ? undefined : a.settings),
      ...e.settings
    } : undefined
  };
  return t;
}
function da(t, e, n, r) {
  const s = qr(n);
  const i = {
    sent_at: new Date().toISOString(),
    ...(s && {
      sdk: s
    }),
    ...(!!r && e && {
      dsn: Me(e)
    })
  };
  const a = "aggregates" in t ? [{
    type: "sessions"
  }, t] : [{
    type: "session"
  }, t.toJSON()];
  return ke(i, [a]);
}
function la(t, e, n, r) {
  const s = qr(n);
  const i = t.type && t.type !== "replay_event" ? t.type : "event";
  ua(t, n == null ? undefined : n.sdk);
  const a = ca(t, s, r, e);
  delete t.sdkProcessingMetadata;
  return ke(a, [[{
    type: i
  }, t]]);
}
const pt = 0;
const An = 1;
const Dn = 2;
function at(t) {
  return new Ie(e => {
    e(t);
  });
}
function en(t) {
  return new Ie((e, n) => {
    n(t);
  });
}
class Ie {
  constructor(e) {
    this._state = pt;
    this._handlers = [];
    this._runExecutor(e);
  }
  then(e, n) {
    return new Ie((r, s) => {
      this._handlers.push([false, i => {
        if (!e) {
          r(i);
        } else {
          try {
            r(e(i));
          } catch (a) {
            s(a);
          }
        }
      }, i => {
        if (!n) {
          s(i);
        } else {
          try {
            r(n(i));
          } catch (a) {
            s(a);
          }
        }
      }]);
      this._executeHandlers();
    });
  }
  catch(e) {
    return this.then(n => n, e);
  }
  finally(e) {
    return new Ie((n, r) => {
      let s;
      let i;
      return this.then(a => {
        i = false;
        s = a;
        if (e) {
          e();
        }
      }, a => {
        i = true;
        s = a;
        if (e) {
          e();
        }
      }).then(() => {
        if (i) {
          r(s);
          return;
        }
        n(s);
      });
    });
  }
  _executeHandlers() {
    if (this._state === pt) {
      return;
    }
    const e = this._handlers.slice();
    this._handlers = [];
    e.forEach(n => {
      if (!n[0]) {
        if (this._state === An) {
          n[1](this._value);
        }
        if (this._state === Dn) {
          n[2](this._value);
        }
        n[0] = true;
      }
    });
  }
  _runExecutor(e) {
    const n = (i, a) => {
      if (this._state === pt) {
        if (Oe(a)) {
          a.then(r, s);
          return;
        }
        this._state = i;
        this._value = a;
        this._executeHandlers();
      }
    };
    const r = i => {
      n(An, i);
    };
    const s = i => {
      n(Dn, i);
    };
    try {
      e(r, s);
    } catch (i) {
      s(i);
    }
  }
}
function fa(t, e, n, r = 0) {
  try {
    const s = Tt(e, n, t, r);
    if (Oe(s)) {
      return s;
    } else {
      return at(s);
    }
  } catch (s) {
    return en(s);
  }
}
function Tt(t, e, n, r) {
  const s = n[r];
  if (!t || !s) {
    return t;
  }
  const i = s({
    ...t
  }, e);
  if (E && i === null) {
    y.log(`Event processor "${s.id || "?"}" dropped event`);
  }
  if (Oe(i)) {
    return i.then(a => Tt(a, e, n, r + 1));
  } else {
    return Tt(i, e, n, r + 1);
  }
}
function pa(t, e) {
  const {
    fingerprint: n,
    span: r,
    breadcrumbs: s,
    sdkProcessingMetadata: i
  } = e;
  ha(t, e);
  if (r) {
    ga(t, r);
  }
  ya(t, n);
  ma(t, s);
  _a(t, i);
}
function qe(t, e) {
  const {
    extra: n,
    tags: r,
    user: s,
    contexts: i,
    level: a,
    sdkProcessingMetadata: o,
    breadcrumbs: c,
    fingerprint: u,
    eventProcessors: d,
    attachments: l,
    propagationContext: g,
    transactionName: p,
    span: w
  } = e;
  je(t, "extra", n);
  je(t, "tags", r);
  je(t, "user", s);
  je(t, "contexts", i);
  t.sdkProcessingMetadata = De(t.sdkProcessingMetadata, o, 2);
  if (a) {
    t.level = a;
  }
  if (p) {
    t.transactionName = p;
  }
  if (w) {
    t.span = w;
  }
  if (c.length) {
    t.breadcrumbs = [...t.breadcrumbs, ...c];
  }
  if (u.length) {
    t.fingerprint = [...t.fingerprint, ...u];
  }
  if (d.length) {
    t.eventProcessors = [...t.eventProcessors, ...d];
  }
  if (l.length) {
    t.attachments = [...t.attachments, ...l];
  }
  t.propagationContext = {
    ...t.propagationContext,
    ...g
  };
}
function je(t, e, n) {
  t[e] = De(t[e], n, 1);
}
function ha(t, e) {
  const {
    extra: n,
    tags: r,
    user: s,
    contexts: i,
    level: a,
    transactionName: o
  } = e;
  if (Object.keys(n).length) {
    t.extra = {
      ...n,
      ...t.extra
    };
  }
  if (Object.keys(r).length) {
    t.tags = {
      ...r,
      ...t.tags
    };
  }
  if (Object.keys(s).length) {
    t.user = {
      ...s,
      ...t.user
    };
  }
  if (Object.keys(i).length) {
    t.contexts = {
      ...i,
      ...t.contexts
    };
  }
  if (a) {
    t.level = a;
  }
  if (o && t.type !== "transaction") {
    t.transaction = o;
  }
}
function ma(t, e) {
  const n = [...(t.breadcrumbs || []), ...e];
  t.breadcrumbs = n.length ? n : undefined;
}
function _a(t, e) {
  t.sdkProcessingMetadata = {
    ...t.sdkProcessingMetadata,
    ...e
  };
}
function ga(t, e) {
  t.contexts = {
    trace: Fi(e),
    ...t.contexts
  };
  t.sdkProcessingMetadata = {
    dynamicSamplingContext: Ki(e),
    ...t.sdkProcessingMetadata
  };
  const n = Hr(e);
  const r = Xt(n).description;
  if (r && !t.transaction && t.type === "transaction") {
    t.transaction = r;
  }
}
function ya(t, e) {
  t.fingerprint = t.fingerprint ? Array.isArray(t.fingerprint) ? t.fingerprint : [t.fingerprint] : [];
  if (e) {
    t.fingerprint = t.fingerprint.concat(e);
  }
  if (!t.fingerprint.length) {
    delete t.fingerprint;
  }
}
let W;
let Mn;
let Ln;
let G;
function ba(t) {
  const e = T._sentryDebugIds;
  const n = T._debugIds;
  if (!e && !n) {
    return {};
  }
  const r = e ? Object.keys(e) : [];
  const s = n ? Object.keys(n) : [];
  if (G && r.length === Mn && s.length === Ln) {
    return G;
  }
  Mn = r.length;
  Ln = s.length;
  G = {};
  W ||= {};
  const i = (a, o) => {
    for (const c of a) {
      const u = o[c];
      const d = W == null ? undefined : W[c];
      if (d && G && u) {
        G[d[0]] = u;
        if (W) {
          W[c] = [d[0], u];
        }
      } else if (u) {
        const l = t(c);
        for (let g = l.length - 1; g >= 0; g--) {
          const p = l[g];
          const w = p == null ? undefined : p.filename;
          if (w && G && W) {
            G[w] = u;
            W[c] = [w, u];
            break;
          }
        }
      }
    }
  };
  if (e) {
    i(r, e);
  }
  if (n) {
    i(s, n);
  }
  return G;
}
function va(t, e, n, r, s, i) {
  const {
    normalizeDepth: a = 3,
    normalizeMaxBreadth: o = 1000
  } = t;
  const c = {
    ...e,
    event_id: e.event_id || n.event_id || L(),
    timestamp: e.timestamp || Ae()
  };
  const u = n.integrations || t.integrations.map(N => N.name);
  Ea(c, t);
  xa(c, u);
  if (s) {
    s.emit("applyFrameMetadata", e);
  }
  if (e.type === undefined) {
    Sa(c, t.stackParser);
  }
  const d = wa(r, n.captureContext);
  if (n.mechanism) {
    fe(c, n.mechanism);
  }
  const l = s ? s.getEventProcessors() : [];
  const g = Kt().getScopeData();
  if (i) {
    const N = i.getScopeData();
    qe(g, N);
  }
  if (d) {
    const N = d.getScopeData();
    qe(g, N);
  }
  const p = [...(n.attachments || []), ...g.attachments];
  if (p.length) {
    n.attachments = p;
  }
  pa(c, g);
  const w = [...l, ...g.eventProcessors];
  return fa(w, c, n).then(N => {
    if (N) {
      ka(N);
    }
    if (typeof a == "number" && a > 0) {
      return Ta(N, a, o);
    } else {
      return N;
    }
  });
}
function Ea(t, e) {
  var o;
  var c;
  const {
    environment: n,
    release: r,
    dist: s,
    maxValueLength: i
  } = e;
  t.environment = t.environment || n || Qt;
  if (!t.release && r) {
    t.release = r;
  }
  if (!t.dist && s) {
    t.dist = s;
  }
  const a = t.request;
  if (a != null && a.url && i) {
    a.url = vt(a.url, i);
  }
  if (i) {
    if ((c = (o = t.exception) == null ? undefined : o.values) != null) {
      c.forEach(u => {
        u.value &&= vt(u.value, i);
      });
    }
  }
}
function Sa(t, e) {
  var r;
  var s;
  const n = ba(e);
  if ((s = (r = t.exception) == null ? undefined : r.values) != null) {
    s.forEach(i => {
      var a;
      var o;
      if ((o = (a = i.stacktrace) == null ? undefined : a.frames) != null) {
        o.forEach(c => {
          if (c.filename) {
            c.debug_id = n[c.filename];
          }
        });
      }
    });
  }
}
function ka(t) {
  var r;
  var s;
  const e = {};
  if ((s = (r = t.exception) == null ? undefined : r.values) != null) {
    s.forEach(i => {
      var a;
      var o;
      if ((o = (a = i.stacktrace) == null ? undefined : a.frames) != null) {
        o.forEach(c => {
          if (c.debug_id) {
            if (c.abs_path) {
              e[c.abs_path] = c.debug_id;
            } else if (c.filename) {
              e[c.filename] = c.debug_id;
            }
            delete c.debug_id;
          }
        });
      }
    });
  }
  if (Object.keys(e).length === 0) {
    return;
  }
  t.debug_meta = t.debug_meta || {};
  t.debug_meta.images = t.debug_meta.images || [];
  const n = t.debug_meta.images;
  Object.entries(e).forEach(([i, a]) => {
    n.push({
      type: "sourcemap",
      code_file: i,
      debug_id: a
    });
  });
}
function xa(t, e) {
  if (e.length > 0) {
    t.sdk = t.sdk || {};
    t.sdk.integrations = [...(t.sdk.integrations || []), ...e];
  }
}
function Ta(t, e, n) {
  var s;
  var i;
  if (!t) {
    return null;
  }
  const r = {
    ...t,
    ...(t.breadcrumbs && {
      breadcrumbs: t.breadcrumbs.map(a => ({
        ...a,
        ...(a.data && {
          data: B(a.data, e, n)
        })
      }))
    }),
    ...(t.user && {
      user: B(t.user, e, n)
    }),
    ...(t.contexts && {
      contexts: B(t.contexts, e, n)
    }),
    ...(t.extra && {
      extra: B(t.extra, e, n)
    })
  };
  if ((s = t.contexts) != null && s.trace && r.contexts) {
    r.contexts.trace = t.contexts.trace;
    if (t.contexts.trace.data) {
      r.contexts.trace.data = B(t.contexts.trace.data, e, n);
    }
  }
  if (t.spans) {
    r.spans = t.spans.map(a => ({
      ...a,
      ...(a.data && {
        data: B(a.data, e, n)
      })
    }));
  }
  if ((i = t.contexts) != null && i.flags && r.contexts) {
    r.contexts.flags = B(t.contexts.flags, 3, n);
  }
  return r;
}
function wa(t, e) {
  if (!e) {
    return t;
  }
  const n = t ? t.clone() : new z();
  n.update(e);
  return n;
}
function Ia(t, e) {
  return Z().captureException(t, undefined);
}
function Gr(t, e) {
  return Z().captureEvent(t, e);
}
function Pn(t) {
  const e = de();
  const n = Z();
  const {
    userAgent: r
  } = T.navigator || {};
  const s = si({
    user: n.getUser() || e.getUser(),
    ...(r && {
      userAgent: r
    }),
    ...t
  });
  const i = e.getSession();
  if ((i == null ? undefined : i.status) === "ok") {
    pe(i, {
      status: "exited"
    });
  }
  Yr();
  e.setSession(s);
  return s;
}
function Yr() {
  const t = de();
  const n = Z().getSession() || t.getSession();
  if (n) {
    ii(n);
  }
  Jr();
  t.setSession();
}
function Jr() {
  const t = de();
  const e = C();
  const n = t.getSession();
  if (n && e) {
    e.captureSession(n);
  }
}
function jn(t = false) {
  if (t) {
    Yr();
    return;
  }
  Jr();
}
const Ra = "7";
function $a(t) {
  const e = t.protocol ? `${t.protocol}:` : "";
  const n = t.port ? `:${t.port}` : "";
  return `${e}//${t.host}${n}${t.path ? `/${t.path}` : ""}/api/`;
}
function Na(t) {
  return `${$a(t)}${t.projectId}/envelope/`;
}
function Ca(t, e) {
  const n = {
    sentry_version: Ra
  };
  if (t.publicKey) {
    n.sentry_key = t.publicKey;
  }
  if (e) {
    n.sentry_client = `${e.name}/${e.version}`;
  }
  return new URLSearchParams(n).toString();
}
function Oa(t, e, n) {
  return e || `${Na(t)}?${Ca(t, n)}`;
}
const Fn = [];
function Aa(t) {
  const e = {};
  t.forEach(n => {
    const {
      name: r
    } = n;
    const s = e[r];
    if (!s || !!s.isDefaultInstance || !n.isDefaultInstance) {
      e[r] = n;
    }
  });
  return Object.values(e);
}
function Da(t) {
  const e = t.defaultIntegrations || [];
  const n = t.integrations;
  e.forEach(s => {
    s.isDefaultInstance = true;
  });
  let r;
  if (Array.isArray(n)) {
    r = [...e, ...n];
  } else if (typeof n == "function") {
    const s = n(e);
    r = Array.isArray(s) ? s : [s];
  } else {
    r = e;
  }
  return Aa(r);
}
function Ma(t, e) {
  const n = {};
  e.forEach(r => {
    if (r) {
      Kr(t, r, n);
    }
  });
  return n;
}
function Bn(t, e) {
  for (const n of e) {
    if (n != null && n.afterAllSetup) {
      n.afterAllSetup(t);
    }
  }
}
function Kr(t, e, n) {
  if (n[e.name]) {
    if (E) {
      y.log(`Integration skipped because it was already installed: ${e.name}`);
    }
    return;
  }
  n[e.name] = e;
  if (!Fn.includes(e.name) && typeof e.setupOnce == "function") {
    e.setupOnce();
    Fn.push(e.name);
  }
  if (e.setup && typeof e.setup == "function") {
    e.setup(t);
  }
  if (typeof e.preprocessEvent == "function") {
    const r = e.preprocessEvent.bind(e);
    t.on("preprocessEvent", (s, i) => r(s, i, t));
  }
  if (typeof e.processEvent == "function") {
    const r = e.processEvent.bind(e);
    const s = Object.assign((i, a) => r(i, a, t), {
      id: e.name
    });
    t.addEventProcessor(s);
  }
  if (E) {
    y.log(`Integration installed: ${e.name}`);
  }
}
function La(t) {
  return [{
    type: "log",
    item_count: t.length,
    content_type: "application/vnd.sentry.items.log+json"
  }, {
    items: t
  }];
}
function Pa(t, e, n, r) {
  const s = {};
  if (e != null && e.sdk) {
    s.sdk = {
      name: e.sdk.name,
      version: e.sdk.version
    };
  }
  if (n && r) {
    s.dsn = Me(r);
  }
  return ke(s, [La(t)]);
}
function Xr(t, e) {
  const n = e ?? ja(t) ?? [];
  if (n.length === 0) {
    return;
  }
  const r = t.getOptions();
  const s = Pa(n, r._metadata, r.tunnel, t.getDsn());
  Qr().set(t, []);
  t.emit("flushLogs");
  t.sendEnvelope(s);
}
function ja(t) {
  return Qr().get(t);
}
function Qr() {
  return ve("clientToLogBufferMap", () => new WeakMap());
}
function Fa(t) {
  return [{
    type: "trace_metric",
    item_count: t.length,
    content_type: "application/vnd.sentry.items.trace-metric+json"
  }, {
    items: t
  }];
}
function Ba(t, e, n, r) {
  const s = {};
  if (e != null && e.sdk) {
    s.sdk = {
      name: e.sdk.name,
      version: e.sdk.version
    };
  }
  if (n && r) {
    s.dsn = Me(r);
  }
  return ke(s, [Fa(t)]);
}
function es(t, e) {
  const n = e ?? Ua(t) ?? [];
  if (n.length === 0) {
    return;
  }
  const r = t.getOptions();
  const s = Ba(n, r._metadata, r.tunnel, t.getDsn());
  ts().set(t, []);
  t.emit("flushMetrics");
  t.sendEnvelope(s);
}
function Ua(t) {
  return ts().get(t);
}
function ts() {
  return ve("clientToMetricBufferMap", () => new WeakMap());
}
const tn = Symbol.for("SentryBufferFullError");
function nn(t = 100) {
  const e = new Set();
  function n() {
    return e.size < t;
  }
  function r(a) {
    e.delete(a);
  }
  function s(a) {
    if (!n()) {
      return en(tn);
    }
    const o = a();
    e.add(o);
    o.then(() => r(o), () => r(o));
    return o;
  }
  function i(a) {
    if (!e.size) {
      return at(true);
    }
    const o = Promise.allSettled(Array.from(e)).then(() => true);
    if (!a) {
      return o;
    }
    const c = [o, new Promise(u => setTimeout(() => u(false), a))];
    return Promise.race(c);
  }
  return {
    get $() {
      return Array.from(e);
    },
    add: s,
    drain: i
  };
}
const Za = 60000;
function Wa(t, e = Date.now()) {
  const n = parseInt(`${t}`, 10);
  if (!isNaN(n)) {
    return n * 1000;
  }
  const r = Date.parse(`${t}`);
  if (isNaN(r)) {
    return Za;
  } else {
    return r - e;
  }
}
function Ha(t, e) {
  return t[e] || t.all || 0;
}
function Va(t, e, n = Date.now()) {
  return Ha(t, e) > n;
}
function za(t, {
  statusCode: e,
  headers: n
}, r = Date.now()) {
  const s = {
    ...t
  };
  const i = n == null ? undefined : n["x-sentry-rate-limits"];
  const a = n == null ? undefined : n["retry-after"];
  if (i) {
    for (const o of i.trim().split(",")) {
      const [c, u,,, d] = o.split(":", 5);
      const l = parseInt(c, 10);
      const g = (isNaN(l) ? 60 : l) * 1000;
      if (!u) {
        s.all = r + g;
      } else {
        for (const p of u.split(";")) {
          if (p === "metric_bucket") {
            if (!d || d.split(";").includes("custom")) {
              s[p] = r + g;
            }
          } else {
            s[p] = r + g;
          }
        }
      }
    }
  } else if (a) {
    s.all = r + Wa(a, r);
  } else if (e === 429) {
    s.all = r + 60000;
  }
  return s;
}
const ns = 64;
function rs(t, e, n = nn(t.bufferSize || ns)) {
  let r = {};
  const s = a => n.drain(a);
  function i(a) {
    const o = [];
    Cn(a, (l, g) => {
      const p = On(g);
      if (Va(r, p)) {
        t.recordDroppedEvent("ratelimit_backoff", p);
      } else {
        o.push(l);
      }
    });
    if (o.length === 0) {
      return Promise.resolve({});
    }
    const c = ke(a[0], o);
    const u = l => {
      Cn(c, (g, p) => {
        t.recordDroppedEvent(l, On(p));
      });
    };
    const d = () => e({
      body: sa(c)
    }).then(l => {
      if (l.statusCode !== undefined && (l.statusCode < 200 || l.statusCode >= 300) && E) {
        y.warn(`Sentry responded with status code ${l.statusCode} to sent event.`);
      }
      r = za(r, l);
      return l;
    }, l => {
      u("network_error");
      if (E) {
        y.error("Encountered error running transport request:", l);
      }
      throw l;
    });
    return n.add(d).then(l => l, l => {
      if (l === tn) {
        if (E) {
          y.error("Skipped sending event because buffer is full.");
        }
        u("queue_overflow");
        return Promise.resolve({});
      }
      throw l;
    });
  }
  return {
    send: i,
    flush: s
  };
}
function qa(t, e, n) {
  const r = [{
    type: "client_report"
  }, {
    timestamp: Ae(),
    discarded_events: t
  }];
  return ke(e ? {
    dsn: e
  } : {}, [r]);
}
function ss(t) {
  const e = [];
  if (t.message) {
    e.push(t.message);
  }
  try {
    const n = t.exception.values[t.exception.values.length - 1];
    if (n != null && n.value) {
      e.push(n.value);
      if (n.type) {
        e.push(`${n.type}: ${n.value}`);
      }
    }
  } catch {}
  return e;
}
function Ga(t) {
  var c;
  const {
    trace_id: e,
    parent_span_id: n,
    span_id: r,
    status: s,
    origin: i,
    data: a,
    op: o
  } = ((c = t.contexts) == null ? undefined : c.trace) ?? {};
  return {
    data: a ?? {},
    description: t.transaction,
    op: o,
    parent_span_id: n,
    span_id: r ?? "",
    start_timestamp: t.start_timestamp ?? 0,
    status: s,
    timestamp: t.timestamp,
    trace_id: e ?? "",
    origin: i,
    profile_id: a == null ? undefined : a[Fr],
    exclusive_time: a == null ? undefined : a[Br],
    measurements: t.measurements,
    is_segment: true
  };
}
function Ya(t) {
  return {
    type: "transaction",
    timestamp: t.timestamp,
    start_timestamp: t.start_timestamp,
    transaction: t.description,
    contexts: {
      trace: {
        trace_id: t.trace_id,
        span_id: t.span_id,
        parent_span_id: t.parent_span_id,
        op: t.op,
        status: t.status,
        origin: t.origin,
        data: {
          ...t.data,
          ...(t.profile_id && {
            [Fr]: t.profile_id
          }),
          ...(t.exclusive_time && {
            [Br]: t.exclusive_time
          })
        }
      }
    },
    measurements: t.measurements
  };
}
const Un = "Not capturing exception because it's already been captured.";
const Zn = "Discarded session because of missing or non-string release";
const is = Symbol.for("SentryInternalError");
const as = Symbol.for("SentryDoNotSendEventError");
const Ja = 5000;
function He(t) {
  return {
    message: t,
    [is]: true
  };
}
function ht(t) {
  return {
    message: t,
    [as]: true
  };
}
function Wn(t) {
  return !!t && typeof t == "object" && is in t;
}
function Hn(t) {
  return !!t && typeof t == "object" && as in t;
}
function Vn(t, e, n, r, s) {
  let i = 0;
  let a;
  let o = false;
  t.on(n, () => {
    i = 0;
    clearTimeout(a);
    o = false;
  });
  t.on(e, c => {
    i += r(c);
    if (i >= 800000) {
      s(t);
    } else if (!o) {
      o = true;
      a = setTimeout(() => {
        s(t);
      }, Ja);
    }
  });
  t.on("flush", () => {
    s(t);
  });
}
class Ka {
  constructor(e) {
    var r;
    var s;
    var i;
    this._options = e;
    this._integrations = {};
    this._numProcessing = 0;
    this._outcomes = {};
    this._hooks = {};
    this._eventProcessors = [];
    this._promiseBuffer = nn(((r = e.transportOptions) == null ? undefined : r.bufferSize) ?? ns);
    if (e.dsn) {
      this._dsn = Pi(e.dsn);
    } else if (E) {
      y.warn("No DSN provided, client will not send events.");
    }
    if (this._dsn) {
      const a = Oa(this._dsn, e.tunnel, e._metadata ? e._metadata.sdk : undefined);
      this._transport = e.transport({
        tunnel: this._options.tunnel,
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...e.transportOptions,
        url: a
      });
    }
    this._options.enableLogs = this._options.enableLogs ?? ((s = this._options._experiments) == null ? undefined : s.enableLogs);
    if (this._options.enableLogs) {
      Vn(this, "afterCaptureLog", "flushLogs", to, Xr);
    }
    if (this._options.enableMetrics ?? ((i = this._options._experiments) == null ? undefined : i.enableMetrics) ?? true) {
      Vn(this, "afterCaptureMetric", "flushMetrics", eo, es);
    }
  }
  captureException(e, n, r) {
    const s = L();
    if (yn(e)) {
      if (E) {
        y.log(Un);
      }
      return s;
    }
    const i = {
      event_id: s,
      ...n
    };
    this._process(() => this.eventFromException(e, i).then(a => this._captureEvent(a, i, r)).then(a => a), "error");
    return i.event_id;
  }
  captureMessage(e, n, r, s) {
    const i = {
      event_id: L(),
      ...r
    };
    const a = zt(e) ? e : String(e);
    const o = rt(e);
    const c = o ? this.eventFromMessage(a, n, i) : this.eventFromException(e, i);
    this._process(() => c.then(u => this._captureEvent(u, i, s)), o ? "unknown" : "error");
    return i.event_id;
  }
  captureEvent(e, n, r) {
    const s = L();
    if (n != null && n.originalException && yn(n.originalException)) {
      if (E) {
        y.log(Un);
      }
      return s;
    }
    const i = {
      event_id: s,
      ...n
    };
    const a = e.sdkProcessingMetadata || {};
    const o = a.capturedSpanScope;
    const c = a.capturedSpanIsolationScope;
    const u = zn(e.type);
    this._process(() => this._captureEvent(e, i, o || r, c), u);
    return i.event_id;
  }
  captureSession(e) {
    this.sendSession(e);
    pe(e, {
      init: false
    });
  }
  getDsn() {
    return this._dsn;
  }
  getOptions() {
    return this._options;
  }
  getSdkMetadata() {
    return this._options._metadata;
  }
  getTransport() {
    return this._transport;
  }
  async flush(e) {
    const n = this._transport;
    if (!n) {
      return true;
    }
    this.emit("flush");
    const r = await this._isClientDoneProcessing(e);
    const s = await n.flush(e);
    return r && s;
  }
  async close(e) {
    const n = await this.flush(e);
    this.getOptions().enabled = false;
    this.emit("close");
    return n;
  }
  getEventProcessors() {
    return this._eventProcessors;
  }
  addEventProcessor(e) {
    this._eventProcessors.push(e);
  }
  init() {
    if (this._isEnabled() || this._options.integrations.some(({
      name: e
    }) => e.startsWith("Spotlight"))) {
      this._setupIntegrations();
    }
  }
  getIntegrationByName(e) {
    return this._integrations[e];
  }
  addIntegration(e) {
    const n = this._integrations[e.name];
    Kr(this, e, this._integrations);
    if (!n) {
      Bn(this, [e]);
    }
  }
  sendEvent(e, n = {}) {
    this.emit("beforeSendEvent", e, n);
    let r = la(e, this._dsn, this._options._metadata, this._options.tunnel);
    for (const s of n.attachments || []) {
      r = ra(r, aa(s));
    }
    this.sendEnvelope(r).then(s => this.emit("afterSendEvent", e, s));
  }
  sendSession(e) {
    const {
      release: n,
      environment: r = Qt
    } = this._options;
    if ("aggregates" in e) {
      const i = e.attrs || {};
      if (!i.release && !n) {
        if (E) {
          y.warn(Zn);
        }
        return;
      }
      i.release = i.release || n;
      i.environment = i.environment || r;
      e.attrs = i;
    } else {
      if (!e.release && !n) {
        if (E) {
          y.warn(Zn);
        }
        return;
      }
      e.release = e.release || n;
      e.environment = e.environment || r;
    }
    this.emit("beforeSendSession", e);
    const s = da(e, this._dsn, this._options._metadata, this._options.tunnel);
    this.sendEnvelope(s);
  }
  recordDroppedEvent(e, n, r = 1) {
    if (this._options.sendClientReports) {
      const s = `${e}:${n}`;
      if (E) {
        y.log(`Recording outcome: "${s}"${r > 1 ? ` (${r} times)` : ""}`);
      }
      this._outcomes[s] = (this._outcomes[s] || 0) + r;
    }
  }
  on(e, n) {
    const r = this._hooks[e] = this._hooks[e] || new Set();
    const s = (...i) => n(...i);
    r.add(s);
    return () => {
      r.delete(s);
    };
  }
  emit(e, ...n) {
    const r = this._hooks[e];
    if (r) {
      r.forEach(s => s(...n));
    }
  }
  async sendEnvelope(e) {
    this.emit("beforeEnvelope", e);
    if (this._isEnabled() && this._transport) {
      try {
        return await this._transport.send(e);
      } catch (n) {
        if (E) {
          y.error("Error while sending envelope:", n);
        }
        return {};
      }
    }
    if (E) {
      y.error("Transport disabled");
    }
    return {};
  }
  _setupIntegrations() {
    const {
      integrations: e
    } = this._options;
    this._integrations = Ma(this, e);
    Bn(this, e);
  }
  _updateSessionFromEvent(e, n) {
    var c;
    var u;
    let r = n.level === "fatal";
    let s = false;
    const i = (c = n.exception) == null ? undefined : c.values;
    if (i) {
      s = true;
      r = false;
      for (const d of i) {
        if (((u = d.mechanism) == null ? undefined : u.handled) === false) {
          r = true;
          break;
        }
      }
    }
    const a = e.status === "ok";
    if (a && e.errors === 0 || a && r) {
      pe(e, {
        ...(r && {
          status: "crashed"
        }),
        errors: e.errors || Number(s || r)
      });
      this.captureSession(e);
    }
  }
  async _isClientDoneProcessing(e) {
    let n = 0;
    while (!e || n < e) {
      await new Promise(r => setTimeout(r, 1));
      if (!this._numProcessing) {
        return true;
      }
      n++;
    }
    return false;
  }
  _isEnabled() {
    return this.getOptions().enabled !== false && this._transport !== undefined;
  }
  _prepareEvent(e, n, r, s) {
    const i = this.getOptions();
    const a = Object.keys(this._integrations);
    if (!n.integrations && a != null && a.length) {
      n.integrations = a;
    }
    this.emit("preprocessEvent", e, n);
    if (!e.type) {
      s.setLastEventId(e.event_id || n.event_id);
    }
    return va(i, e, n, r, this, s).then(o => {
      if (o === null) {
        return o;
      }
      this.emit("postprocessEvent", o, n);
      o.contexts = {
        trace: mi(r),
        ...o.contexts
      };
      const c = Ji(this, r);
      o.sdkProcessingMetadata = {
        dynamicSamplingContext: c,
        ...o.sdkProcessingMetadata
      };
      return o;
    });
  }
  _captureEvent(e, n = {}, r = Z(), s = de()) {
    if (E && wt(e)) {
      y.log(`Captured error event \`${ss(e)[0] || "<unknown>"}\``);
    }
    return this._processEvent(e, n, r, s).then(i => i.event_id, i => {
      if (E) {
        if (Hn(i)) {
          y.log(i.message);
        } else if (Wn(i)) {
          y.warn(i.message);
        } else {
          y.warn(i);
        }
      }
    });
  }
  _processEvent(e, n, r, s) {
    const i = this.getOptions();
    const {
      sampleRate: a
    } = i;
    const o = os(e);
    const c = wt(e);
    const d = `before send for type \`${e.type || "error"}\``;
    const l = typeof a === "undefined" ? undefined : ji(a);
    if (c && typeof l == "number" && Math.random() > l) {
      this.recordDroppedEvent("sample_rate", "error");
      return en(ht(`Discarding event because it's not included in the random sample (sampling rate = ${a})`));
    }
    const g = zn(e.type);
    return this._prepareEvent(e, n, r, s).then(p => {
      if (p === null) {
        this.recordDroppedEvent("event_processor", g);
        throw ht("An event processor returned `null`, will not send event.");
      }
      if (n.data && n.data.__sentry__ === true) {
        return p;
      }
      const A = Qa(this, i, p, n);
      return Xa(A, d);
    }).then(p => {
      var N;
      if (p === null) {
        this.recordDroppedEvent("before_send", g);
        if (o) {
          const ct = 1 + (e.spans || []).length;
          this.recordDroppedEvent("before_send", "span", ct);
        }
        throw ht(`${d} returned \`null\`, will not send event.`);
      }
      const w = r.getSession() || s.getSession();
      if (c && w) {
        this._updateSessionFromEvent(w, p);
      }
      if (o) {
        const Le = ((N = p.sdkProcessingMetadata) == null ? undefined : N.spanCountBeforeProcessing) || 0;
        const ct = p.spans ? p.spans.length : 0;
        const un = Le - ct;
        if (un > 0) {
          this.recordDroppedEvent("before_send", "span", un);
        }
      }
      const A = p.transaction_info;
      if (o && A && p.transaction !== e.transaction) {
        const Le = "custom";
        p.transaction_info = {
          ...A,
          source: Le
        };
      }
      this.sendEvent(p, n);
      return p;
    }).then(null, p => {
      throw Hn(p) || Wn(p) ? p : (this.captureException(p, {
        mechanism: {
          handled: false,
          type: "internal"
        },
        data: {
          __sentry__: true
        },
        originalException: p
      }), He(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${p}`));
    });
  }
  _process(e, n) {
    this._numProcessing++;
    this._promiseBuffer.add(e).then(r => {
      this._numProcessing--;
      return r;
    }, r => {
      this._numProcessing--;
      if (r === tn) {
        this.recordDroppedEvent("queue_overflow", n);
      }
      return r;
    });
  }
  _clearOutcomes() {
    const e = this._outcomes;
    this._outcomes = {};
    return Object.entries(e).map(([n, r]) => {
      const [s, i] = n.split(":");
      return {
        reason: s,
        category: i,
        quantity: r
      };
    });
  }
  _flushOutcomes() {
    if (E) {
      y.log("Flushing outcomes...");
    }
    const e = this._clearOutcomes();
    if (e.length === 0) {
      if (E) {
        y.log("No outcomes to send");
      }
      return;
    }
    if (!this._dsn) {
      if (E) {
        y.log("No dsn provided, will not send outcomes");
      }
      return;
    }
    if (E) {
      y.log("Sending outcomes:", e);
    }
    const n = qa(e, this._options.tunnel && Me(this._dsn));
    this.sendEnvelope(n);
  }
}
function zn(t) {
  if (t === "replay_event") {
    return "replay";
  } else {
    return t || "error";
  }
}
function Xa(t, e) {
  const n = `${e} must return \`null\` or a valid event.`;
  if (Oe(t)) {
    return t.then(r => {
      if (!we(r) && r !== null) {
        throw He(n);
      }
      return r;
    }, r => {
      throw He(`${e} rejected with ${r}`);
    });
  }
  if (!we(t) && t !== null) {
    throw He(n);
  }
  return t;
}
function Qa(t, e, n, r) {
  const {
    beforeSend: s,
    beforeSendTransaction: i,
    beforeSendSpan: a,
    ignoreSpans: o
  } = e;
  let c = n;
  if (wt(c) && s) {
    return s(c, r);
  }
  if (os(c)) {
    if (a || o) {
      const u = Ga(c);
      if (o != null && o.length && Nn(u, o)) {
        return null;
      }
      if (a) {
        const d = a(u);
        if (d) {
          c = De(n, Ya(d));
        } else {
          Rn();
        }
      }
      if (c.spans) {
        const d = [];
        const l = c.spans;
        for (const p of l) {
          if (o != null && o.length && Nn(p, o)) {
            qi(l, p);
            continue;
          }
          if (a) {
            const w = a(p);
            if (w) {
              d.push(w);
            } else {
              Rn();
              d.push(p);
            }
          } else {
            d.push(p);
          }
        }
        const g = c.spans.length - d.length;
        if (g) {
          t.recordDroppedEvent("before_send", "span", g);
        }
        c.spans = d;
      }
    }
    if (i) {
      if (c.spans) {
        const u = c.spans.length;
        c.sdkProcessingMetadata = {
          ...n.sdkProcessingMetadata,
          spanCountBeforeProcessing: u
        };
      }
      return i(c, r);
    }
  }
  return c;
}
function wt(t) {
  return t.type === undefined;
}
function os(t) {
  return t.type === "transaction";
}
function eo(t) {
  let e = 0;
  if (t.name) {
    e += t.name.length * 2;
  }
  e += 8;
  return e + cs(t.attributes);
}
function to(t) {
  let e = 0;
  if (t.message) {
    e += t.message.length * 2;
  }
  return e + cs(t.attributes);
}
function cs(t) {
  if (!t) {
    return 0;
  }
  let e = 0;
  Object.values(t).forEach(n => {
    if (Array.isArray(n)) {
      e += n.length * qn(n[0]);
    } else if (rt(n)) {
      e += qn(n);
    } else {
      e += 100;
    }
  });
  return e;
}
function qn(t) {
  if (typeof t == "string") {
    return t.length * 2;
  } else if (typeof t == "number") {
    return 8;
  } else if (typeof t == "boolean") {
    return 4;
  } else {
    return 0;
  }
}
function no(t, e) {
  if (e.debug === true) {
    if (E) {
      y.enable();
    } else {
      Ee(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  Z().update(e.initialScope);
  const r = new t(e);
  ro(r);
  r.init();
  return r;
}
function ro(t) {
  Z().setClient(t);
}
function mt(t) {
  if (!t) {
    return {};
  }
  const e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
  if (!e) {
    return {};
  }
  const n = e[6] || "";
  const r = e[8] || "";
  return {
    host: e[4],
    path: e[5],
    protocol: e[2],
    search: n,
    hash: r,
    relative: e[5] + n + r
  };
}
function so(t) {
  var e;
  if ("aggregates" in t) {
    if (((e = t.attrs) == null ? undefined : e.ip_address) === undefined) {
      t.attrs = {
        ...t.attrs,
        ip_address: "{{auto}}"
      };
    }
  } else if (t.ipAddress === undefined) {
    t.ipAddress = "{{auto}}";
  }
}
function io(t, e, n = [e], r = "npm") {
  const s = t._metadata || {};
  s.sdk ||= {
    name: `sentry.javascript.${e}`,
    packages: n.map(i => ({
      name: `${r}:@sentry/${i}`,
      version: se
    })),
    version: se
  };
  t._metadata = s;
}
const ao = 100;
function ae(t, e) {
  const n = C();
  const r = de();
  if (!n) {
    return;
  }
  const {
    beforeBreadcrumb: s = null,
    maxBreadcrumbs: i = ao
  } = n.getOptions();
  if (i <= 0) {
    return;
  }
  const o = {
    timestamp: Ae(),
    ...t
  };
  const c = s ? Ee(() => s(o, e)) : o;
  if (c !== null) {
    if (n.emit) {
      n.emit("beforeAddBreadcrumb", c, e);
    }
    r.addBreadcrumb(c, i);
  }
}
let Gn;
const oo = "FunctionToString";
const Yn = new WeakMap();
const co = () => ({
  name: oo,
  setupOnce() {
    Gn = Function.prototype.toString;
    try {
      Function.prototype.toString = function (...t) {
        const e = Yt(this);
        const n = Yn.has(C()) && e !== undefined ? e : this;
        return Gn.apply(n, t);
      };
    } catch {}
  },
  setup(t) {
    Yn.set(t, true);
  }
});
const uo = co;
const lo = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, /^Can't find variable: gmo$/, /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/, `can't redefine non-configurable property "solana"`, "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler", /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/, /^Java exception was raised during method invocation$/];
const fo = "EventFilters";
const po = (t = {}) => {
  let e;
  return {
    name: fo,
    setup(n) {
      const r = n.getOptions();
      e = Jn(t, r);
    },
    processEvent(n, r, s) {
      if (!e) {
        const i = s.getOptions();
        e = Jn(t, i);
      }
      if (mo(n, e)) {
        return null;
      } else {
        return n;
      }
    }
  };
};
const ho = (t = {}) => ({
  ...po(t),
  name: "InboundFilters"
});
function Jn(t = {}, e = {}) {
  return {
    allowUrls: [...(t.allowUrls || []), ...(e.allowUrls || [])],
    denyUrls: [...(t.denyUrls || []), ...(e.denyUrls || [])],
    ignoreErrors: [...(t.ignoreErrors || []), ...(e.ignoreErrors || []), ...(t.disableErrorDefaults ? [] : lo)],
    ignoreTransactions: [...(t.ignoreTransactions || []), ...(e.ignoreTransactions || [])]
  };
}
function mo(t, e) {
  if (t.type) {
    if (t.type === "transaction" && go(t, e.ignoreTransactions)) {
      if (E) {
        y.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${re(t)}`);
      }
      return true;
    }
  } else {
    if (_o(t, e.ignoreErrors)) {
      if (E) {
        y.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${re(t)}`);
      }
      return true;
    }
    if (Eo(t)) {
      if (E) {
        y.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${re(t)}`);
      }
      return true;
    }
    if (yo(t, e.denyUrls)) {
      if (E) {
        y.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${re(t)}.
Url: ${Ge(t)}`);
      }
      return true;
    }
    if (!bo(t, e.allowUrls)) {
      if (E) {
        y.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${re(t)}.
Url: ${Ge(t)}`);
      }
      return true;
    }
  }
  return false;
}
function _o(t, e) {
  if (e != null && e.length) {
    return ss(t).some(n => it(n, e));
  } else {
    return false;
  }
}
function go(t, e) {
  if (e == null || !e.length) {
    return false;
  }
  const n = t.transaction;
  if (n) {
    return it(n, e);
  } else {
    return false;
  }
}
function yo(t, e) {
  if (e == null || !e.length) {
    return false;
  }
  const n = Ge(t);
  if (n) {
    return it(n, e);
  } else {
    return false;
  }
}
function bo(t, e) {
  if (e == null || !e.length) {
    return true;
  }
  const n = Ge(t);
  if (n) {
    return it(n, e);
  } else {
    return true;
  }
}
function vo(t = []) {
  for (let e = t.length - 1; e >= 0; e--) {
    const n = t[e];
    if (n && n.filename !== "<anonymous>" && n.filename !== "[native code]") {
      return n.filename || null;
    }
  }
  return null;
}
function Ge(t) {
  var e;
  var n;
  try {
    const r = [...(((e = t.exception) == null ? undefined : e.values) ?? [])].reverse().find(i => {
      var a;
      var o;
      var c;
      return ((a = i.mechanism) == null ? undefined : a.parent_id) === undefined && ((c = (o = i.stacktrace) == null ? undefined : o.frames) == null ? undefined : c.length);
    });
    const s = (n = r == null ? undefined : r.stacktrace) == null ? undefined : n.frames;
    if (s) {
      return vo(s);
    } else {
      return null;
    }
  } catch {
    if (E) {
      y.error(`Cannot extract url for event ${re(t)}`);
    }
    return null;
  }
}
function Eo(t) {
  var e;
  var n;
  if ((n = (e = t.exception) == null ? undefined : e.values) != null && n.length) {
    return !t.message && !t.exception.values.some(r => r.stacktrace || r.type && r.type !== "Error" || r.value);
  } else {
    return false;
  }
}
function So(t, e, n, r, s, i) {
  var o;
  if ((o = s.exception) == null || !o.values || !i || !ee(i.originalException, Error)) {
    return;
  }
  const a = s.exception.values.length > 0 ? s.exception.values[s.exception.values.length - 1] : undefined;
  if (a) {
    s.exception.values = It(t, e, r, i.originalException, n, s.exception.values, a, 0);
  }
}
function It(t, e, n, r, s, i, a, o) {
  if (i.length >= n + 1) {
    return i;
  }
  let c = [...i];
  if (ee(r[s], Error)) {
    Kn(a, o);
    const u = t(e, r[s]);
    const d = c.length;
    Xn(u, s, d, o);
    c = It(t, e, n, r[s], s, [u, ...c], u, d);
  }
  if (Array.isArray(r.errors)) {
    r.errors.forEach((u, d) => {
      if (ee(u, Error)) {
        Kn(a, o);
        const l = t(e, u);
        const g = c.length;
        Xn(l, `errors[${d}]`, g, o);
        c = It(t, e, n, u, s, [l, ...c], l, g);
      }
    });
  }
  return c;
}
function Kn(t, e) {
  t.mechanism = {
    handled: true,
    type: "auto.core.linked_errors",
    ...t.mechanism,
    ...(t.type === "AggregateError" && {
      is_exception_group: true
    }),
    exception_id: e
  };
}
function Xn(t, e, n, r) {
  t.mechanism = {
    handled: true,
    ...t.mechanism,
    type: "chained",
    source: e,
    exception_id: n,
    parent_id: r
  };
}
function ko(t) {
  const e = "console";
  ce(e, t);
  ue(e, xo);
}
function xo() {
  if ("console" in T) {
    As.forEach(function (t) {
      if (t in T.console) {
        M(T.console, t, function (e) {
          ze[t] = e;
          return function (...n) {
            F("console", {
              args: n,
              level: t
            });
            const s = ze[t];
            if (s != null) {
              s.apply(T.console, n);
            }
          };
        });
      }
    });
  }
}
function To(t) {
  if (t === "warn") {
    return "warning";
  } else if (["fatal", "error", "warning", "log", "info", "debug"].includes(t)) {
    return t;
  } else {
    return "log";
  }
}
const wo = "Dedupe";
const Io = () => {
  let t;
  return {
    name: wo,
    processEvent(e) {
      if (e.type) {
        return e;
      }
      try {
        if ($o(e, t)) {
          if (E) {
            y.warn("Event dropped due to being a duplicate of previously captured event.");
          }
          return null;
        }
      } catch {}
      return t = e;
    }
  };
};
const Ro = Io;
function $o(t, e) {
  if (e) {
    return !!No(t, e) || !!Co(t, e);
  } else {
    return false;
  }
}
function No(t, e) {
  const n = t.message;
  const r = e.message;
  return (!!n || !!r) && (!n || !!r) && (!!n || !r) && n === r && !!ds(t, e) && !!us(t, e);
}
function Co(t, e) {
  const n = Qn(e);
  const r = Qn(t);
  return !!n && !!r && n.type === r.type && n.value === r.value && !!ds(t, e) && !!us(t, e);
}
function us(t, e) {
  let n = fn(t);
  let r = fn(e);
  if (!n && !r) {
    return true;
  }
  if (n && !r || !n && r || (n = n, r = r, r.length !== n.length)) {
    return false;
  }
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    const a = n[s];
    if (i.filename !== a.filename || i.lineno !== a.lineno || i.colno !== a.colno || i.function !== a.function) {
      return false;
    }
  }
  return true;
}
function ds(t, e) {
  let n = t.fingerprint;
  let r = e.fingerprint;
  if (!n && !r) {
    return true;
  }
  if (n && !r || !n && r) {
    return false;
  }
  n = n;
  r = r;
  try {
    return n.join("") === r.join("");
  } catch {
    return false;
  }
}
function Qn(t) {
  var e;
  var n;
  if ((n = (e = t.exception) == null ? undefined : e.values) == null) {
    return undefined;
  } else {
    return n[0];
  }
}
function ls(t) {
  if (t !== undefined) {
    if (t >= 400 && t < 500) {
      return "warning";
    } else if (t >= 500) {
      return "error";
    } else {
      return undefined;
    }
  }
}
const Re = T;
function Oo() {
  return "history" in Re && !!Re.history;
}
function Ao() {
  if (!("fetch" in Re)) {
    return false;
  }
  try {
    new Headers();
    new Request("data:,");
    new Response();
    return true;
  } catch {
    return false;
  }
}
function Rt(t) {
  return t && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString());
}
function Do() {
  var n;
  if (typeof EdgeRuntime == "string") {
    return true;
  }
  if (!Ao()) {
    return false;
  }
  if (Rt(Re.fetch)) {
    return true;
  }
  let t = false;
  const e = Re.document;
  if (e && typeof e.createElement == "function") {
    try {
      const r = e.createElement("iframe");
      r.hidden = true;
      e.head.appendChild(r);
      if ((n = r.contentWindow) != null && n.fetch) {
        t = Rt(r.contentWindow.fetch);
      }
      e.head.removeChild(r);
    } catch (r) {
      if (E) {
        y.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", r);
      }
    }
  }
  return t;
}
function Mo(t, e) {
  const n = "fetch";
  ce(n, t);
  ue(n, () => Lo(undefined, e));
}
function Lo(t, e = false) {
  if (!e || !!Do()) {
    M(T, "fetch", function (n) {
      return function (...r) {
        const s = new Error();
        const {
          method: i,
          url: a
        } = Po(r);
        const o = {
          args: r,
          fetchData: {
            method: i,
            url: a
          },
          startTimestamp: V() * 1000,
          virtualError: s,
          headers: jo(r)
        };
        F("fetch", {
          ...o
        });
        return n.apply(T, r).then(async c => {
          F("fetch", {
            ...o,
            endTimestamp: V() * 1000,
            response: c
          });
          return c;
        }, c => {
          F("fetch", {
            ...o,
            endTimestamp: V() * 1000,
            error: c
          });
          if (Vt(c) && c.stack === undefined) {
            c.stack = s.stack;
            ie(c, "framesToPop", 1);
          }
          if (c instanceof TypeError && (c.message === "Failed to fetch" || c.message === "Load failed" || c.message === "NetworkError when attempting to fetch resource.")) {
            try {
              const u = new URL(o.fetchData.url);
              c.message = `${c.message} (${u.host})`;
            } catch {}
          }
          throw c;
        });
      };
    });
  }
}
function $t(t, e) {
  return !!t && typeof t == "object" && !!t[e];
}
function er(t) {
  if (typeof t == "string") {
    return t;
  } else if (t) {
    if ($t(t, "url")) {
      return t.url;
    } else if (t.toString) {
      return t.toString();
    } else {
      return "";
    }
  } else {
    return "";
  }
}
function Po(t) {
  if (t.length === 0) {
    return {
      method: "GET",
      url: ""
    };
  }
  if (t.length === 2) {
    const [n, r] = t;
    return {
      url: er(n),
      method: $t(r, "method") ? String(r.method).toUpperCase() : "GET"
    };
  }
  const e = t[0];
  return {
    url: er(e),
    method: $t(e, "method") ? String(e.method).toUpperCase() : "GET"
  };
}
function jo(t) {
  const [e, n] = t;
  try {
    if (typeof n == "object" && n !== null && "headers" in n && n.headers) {
      return new Headers(n.headers);
    }
    if (Ys(e)) {
      return new Headers(e.headers);
    }
  } catch {}
}
function Fo() {
  return "npm";
}
function Bo(t, e = false) {
  return !e && (!t || !!t.startsWith("/") || !!t.match(/^[A-Z]:/) || !!t.startsWith(".") || !!t.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//)) && t !== undefined && !t.includes("node_modules/");
}
function Uo(t) {
  const e = /^\s*[-]{4,}$/;
  const n = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;
  const r = /at (?:async )?(.+?) \(data:(.*?),/;
  return s => {
    var o;
    const i = s.match(r);
    if (i) {
      return {
        filename: `<data:${i[2]}>`,
        function: i[1]
      };
    }
    const a = s.match(n);
    if (a) {
      let c;
      let u;
      let d;
      let l;
      let g;
      if (a[1]) {
        d = a[1];
        let A = d.lastIndexOf(".");
        if (d[A - 1] === ".") {
          A--;
        }
        if (A > 0) {
          c = d.slice(0, A);
          u = d.slice(A + 1);
          const N = c.indexOf(".Module");
          if (N > 0) {
            d = d.slice(N + 1);
            c = c.slice(0, N);
          }
        }
        l = undefined;
      }
      if (u) {
        l = c;
        g = u;
      }
      if (u === "<anonymous>") {
        g = undefined;
        d = undefined;
      }
      if (d === undefined) {
        g = g || X;
        d = l ? `${l}.${g}` : g;
      }
      let p = (o = a[2]) != null && o.startsWith("file://") ? a[2].slice(7) : a[2];
      const w = a[5] === "native";
      if (p != null && p.match(/\/[A-Z]:/)) {
        p = p.slice(1);
      }
      if (!p && a[5] && !w) {
        p = a[5];
      }
      return {
        filename: p ? decodeURI(p) : undefined,
        module: undefined,
        function: d,
        lineno: tr(a[3]),
        colno: tr(a[4]),
        in_app: Bo(p || "", w)
      };
    }
    if (s.match(e)) {
      return {
        filename: s
      };
    }
  };
}
function Zo(t) {
  return [90, Uo()];
}
function tr(t) {
  return parseInt(t || "", 10) || undefined;
}
var nr;
(function (t) {
  t[t.Classic = 1] = "Classic";
  t[t.Protocol = 2] = "Protocol";
  t[t.Both = 3] = "Both";
})(nr ||= {});
function Wo(t) {
  return {
    createUrl: e => `${t}://${e}/sentry_key`,
    urlMatches: function (e, n) {
      return e.startsWith(this.createUrl(n));
    },
    createKey: e => `${t}.${e}`,
    namespace: t
  };
}
const Ho = "sentry-electron-renderer-id";
function Vo(t) {
  var n;
  const e = Wo(t);
  if ((n = window.__SENTRY_IPC__) != null && n[e.namespace]) {
    return window.__SENTRY_IPC__[e.namespace];
  }
  {
    y.log("IPC was not configured in preload script, falling back to custom protocol and fetch");
    const r = window.__SENTRY_RENDERER_ID__ = L();
    const s = {
      [Ho]: r
    };
    return {
      sendRendererStart: () => {
        fetch(e.createUrl("start"), {
          method: "POST",
          body: "",
          headers: s
        }).catch(() => {
          console.error(`Sentry SDK failed to establish connection with the Electron main process.
  - Ensure you have initialized the SDK in the main process
  - If your renderers use custom sessions, be sure to set 'getSessions' in the main process options
  - If you are bundling your main process code and using Electron < v5, you'll need to manually configure a preload script`);
        });
      },
      sendScope: i => {
        fetch(e.createUrl("scope"), {
          method: "POST",
          body: i,
          headers: s
        }).catch(() => {});
      },
      sendEnvelope: i => {
        fetch(e.createUrl("envelope"), {
          method: "POST",
          body: i,
          headers: s
        }).catch(() => {});
      },
      sendStatus: i => {
        fetch(e.createUrl("status"), {
          method: "POST",
          body: JSON.stringify({
            status: i
          }),
          headers: s
        }).catch(() => {});
      },
      sendStructuredLog: i => {
        fetch(e.createUrl("structured-log"), {
          method: "POST",
          body: JSON.stringify(i),
          headers: s
        }).catch(() => {});
      }
    };
  }
}
let Fe;
function fs(t = C()) {
  if (!t) {
    throw new Error("Could not find client, make sure to call Sentry.init before getIPC");
  }
  Fe ||= new WeakMap();
  const e = Fe.get(t);
  if (e) {
    return e;
  }
  const n = t.getOptions().ipcNamespace;
  const r = Vo(n);
  Fe.set(t, r);
  r.sendRendererStart();
  return r;
}
const R = T;
let Nt = 0;
function ps() {
  return Nt > 0;
}
function zo() {
  Nt++;
  setTimeout(() => {
    Nt--;
  });
}
function me(t, e = {}) {
  function n(s) {
    return typeof s == "function";
  }
  if (!n(t)) {
    return t;
  }
  try {
    const s = t.__sentry_wrapped__;
    if (s) {
      if (typeof s == "function") {
        return s;
      } else {
        return t;
      }
    }
    if (Yt(t)) {
      return t;
    }
  } catch {
    return t;
  }
  const r = function (...s) {
    try {
      const i = s.map(a => me(a, e));
      return t.apply(this, i);
    } catch (i) {
      zo();
      hi(a => {
        a.addEventProcessor(o => {
          if (e.mechanism) {
            Et(o, undefined);
            fe(o, e.mechanism);
          }
          o.extra = {
            ...o.extra,
            arguments: s
          };
          return o;
        });
        Ia(i);
      });
      throw i;
    }
  };
  try {
    for (const s in t) {
      if (Object.prototype.hasOwnProperty.call(t, s)) {
        r[s] = t[s];
      }
    }
  } catch {}
  Dr(r, t);
  ie(t, "__sentry_wrapped__", r);
  try {
    if (Object.getOwnPropertyDescriptor(r, "name").configurable) {
      Object.defineProperty(r, "name", {
        get() {
          return t.name;
        }
      });
    }
  } catch {}
  return r;
}
function qo() {
  const t = Gt();
  const {
    referrer: e
  } = R.document || {};
  const {
    userAgent: n
  } = R.navigator || {};
  const r = {
    ...(e && {
      Referer: e
    }),
    ...(n && {
      "User-Agent": n
    })
  };
  return {
    url: t,
    headers: r
  };
}
function rn(t, e) {
  const n = sn(t, e);
  const r = {
    type: Xo(e),
    value: Qo(e)
  };
  if (n.length) {
    r.stacktrace = {
      frames: n
    };
  }
  if (r.type === undefined && r.value === "") {
    r.value = "Unrecoverable error caught";
  }
  return r;
}
function Go(t, e, n, r) {
  const s = C();
  const i = s == null ? undefined : s.getOptions().normalizeDepth;
  const a = sc(e);
  const o = {
    __serialized__: zr(e, i)
  };
  if (a) {
    return {
      exception: {
        values: [rn(t, a)]
      },
      extra: o
    };
  }
  const c = {
    exception: {
      values: [{
        type: st(e) ? e.constructor.name : r ? "UnhandledRejection" : "Error",
        value: nc(e, {
          isUnhandledRejection: r
        })
      }]
    },
    extra: o
  };
  if (n) {
    const u = sn(t, n);
    if (u.length) {
      c.exception.values[0].stacktrace = {
        frames: u
      };
    }
  }
  return c;
}
function _t(t, e) {
  return {
    exception: {
      values: [rn(t, e)]
    }
  };
}
function sn(t, e) {
  const n = e.stacktrace || e.stack || "";
  const r = Jo(e);
  const s = Ko(e);
  try {
    return t(n, r, s);
  } catch {}
  return [];
}
const Yo = /Minified React error #\d+;/i;
function Jo(t) {
  if (t && Yo.test(t.message)) {
    return 1;
  } else {
    return 0;
  }
}
function Ko(t) {
  if (typeof t.framesToPop == "number") {
    return t.framesToPop;
  } else {
    return 0;
  }
}
function hs(t) {
  if (typeof WebAssembly !== "undefined" && typeof WebAssembly.Exception !== "undefined") {
    return t instanceof WebAssembly.Exception;
  } else {
    return false;
  }
}
function Xo(t) {
  const e = t == null ? undefined : t.name;
  if (!e && hs(t)) {
    if (t.message && Array.isArray(t.message) && t.message.length == 2) {
      return t.message[0];
    } else {
      return "WebAssembly.Exception";
    }
  } else {
    return e;
  }
}
function Qo(t) {
  const e = t == null ? undefined : t.message;
  if (hs(t)) {
    if (Array.isArray(t.message) && t.message.length == 2) {
      return t.message[1];
    } else {
      return "wasm exception";
    }
  } else if (e) {
    if (e.error && typeof e.error.message == "string") {
      return e.error.message;
    } else {
      return e;
    }
  } else {
    return "No error message";
  }
}
function ec(t, e, n, r) {
  const s = (n == null ? undefined : n.syntheticException) || undefined;
  const i = an(t, e, s, r);
  fe(i);
  i.level = "error";
  if (n != null && n.event_id) {
    i.event_id = n.event_id;
  }
  return at(i);
}
function tc(t, e, n = "info", r, s) {
  const i = (r == null ? undefined : r.syntheticException) || undefined;
  const a = Ct(t, e, i, s);
  a.level = n;
  if (r != null && r.event_id) {
    a.event_id = r.event_id;
  }
  return at(a);
}
function an(t, e, n, r, s) {
  let i;
  if (Cr(e) && e.error) {
    return _t(t, e.error);
  }
  if (hn(e) || Vs(e)) {
    const a = e;
    if ("stack" in e) {
      i = _t(t, e);
    } else {
      const o = a.name || (hn(a) ? "DOMError" : "DOMException");
      const c = a.message ? `${o}: ${a.message}` : o;
      i = Ct(t, c, n, r);
      Et(i, c);
    }
    if ("code" in a) {
      i.tags = {
        ...i.tags,
        "DOMException.code": `${a.code}`
      };
    }
    return i;
  }
  if (Vt(e)) {
    return _t(t, e);
  } else if (we(e) || st(e)) {
    i = Go(t, e, n, s);
    fe(i, {
      synthetic: true
    });
    return i;
  } else {
    i = Ct(t, e, n, r);
    Et(i, `${e}`);
    fe(i, {
      synthetic: true
    });
    return i;
  }
}
function Ct(t, e, n, r) {
  const s = {};
  if (r && n) {
    const i = sn(t, n);
    if (i.length) {
      s.exception = {
        values: [{
          value: e,
          stacktrace: {
            frames: i
          }
        }]
      };
    }
    fe(s, {
      synthetic: true
    });
  }
  if (zt(e)) {
    const {
      __sentry_template_string__: i,
      __sentry_template_values__: a
    } = e;
    s.logentry = {
      message: i,
      params: a
    };
    return s;
  }
  s.message = e;
  return s;
}
function nc(t, {
  isUnhandledRejection: e
}) {
  const n = Qs(t);
  const r = e ? "promise rejection" : "exception";
  if (Cr(t)) {
    return `Event \`ErrorEvent\` captured as ${r} with message \`${t.message}\``;
  } else if (st(t)) {
    return `Event \`${rc(t)}\` (type=${t.type}) captured as ${r}`;
  } else {
    return `Object captured as ${r} with keys: ${n}`;
  }
}
function rc(t) {
  try {
    const e = Object.getPrototypeOf(t);
    if (e) {
      return e.constructor.name;
    } else {
      return undefined;
    }
  } catch {}
}
function sc(t) {
  for (const e in t) {
    if (Object.prototype.hasOwnProperty.call(t, e)) {
      const n = t[e];
      if (n instanceof Error) {
        return n;
      }
    }
  }
}
class ic extends Ka {
  constructor(e) {
    var d;
    const n = ac(e);
    const r = R.SENTRY_SDK_SOURCE || Fo();
    io(n, "browser", ["browser"], r);
    if ((d = n._metadata) != null && d.sdk) {
      n._metadata.sdk.settings = {
        infer_ip: n.sendDefaultPii ? "auto" : "never",
        ...n._metadata.sdk.settings
      };
    }
    super(n);
    const {
      sendDefaultPii: s,
      sendClientReports: i,
      enableLogs: a,
      _experiments: o,
      enableMetrics: c
    } = this._options;
    const u = c ?? (o == null ? undefined : o.enableMetrics) ?? true;
    if (R.document && (i || a || u)) {
      R.document.addEventListener("visibilitychange", () => {
        if (R.document.visibilityState === "hidden") {
          if (i) {
            this._flushOutcomes();
          }
          if (a) {
            Xr(this);
          }
          if (u) {
            es(this);
          }
        }
      });
    }
    if (s) {
      this.on("beforeSendSession", so);
    }
  }
  eventFromException(e, n) {
    return ec(this._options.stackParser, e, n, this._options.attachStacktrace);
  }
  eventFromMessage(e, n = "info", r) {
    return tc(this._options.stackParser, e, n, r, this._options.attachStacktrace);
  }
  _prepareEvent(e, n, r, s) {
    e.platform = e.platform || "javascript";
    return super._prepareEvent(e, n, r, s);
  }
}
function ac(t) {
  var e;
  return {
    release: typeof __SENTRY_RELEASE__ == "string" ? __SENTRY_RELEASE__ : (e = R.SENTRY_RELEASE) == null ? undefined : e.id,
    sendClientReports: true,
    parentSpanIsAlwaysRootSpan: true,
    ...t
  };
}
const oc = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const O = T;
const cc = 1000;
let rr;
let Ot;
let At;
function uc(t) {
  ce("dom", t);
  ue("dom", dc);
}
function dc() {
  if (!O.document) {
    return;
  }
  const t = F.bind(null, "dom");
  const e = sr(t, true);
  O.document.addEventListener("click", e, false);
  O.document.addEventListener("keypress", e, false);
  ["EventTarget", "Node"].forEach(n => {
    var i;
    var a;
    const s = (i = O[n]) == null ? undefined : i.prototype;
    if ((a = s == null ? undefined : s.hasOwnProperty) != null && a.call(s, "addEventListener")) {
      M(s, "addEventListener", function (o) {
        return function (c, u, d) {
          if (c === "click" || c == "keypress") {
            try {
              const l = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {};
              const g = l[c] = l[c] || {
                refCount: 0
              };
              if (!g.handler) {
                const p = sr(t);
                g.handler = p;
                o.call(this, c, p, d);
              }
              g.refCount++;
            } catch {}
          }
          return o.call(this, c, u, d);
        };
      });
      M(s, "removeEventListener", function (o) {
        return function (c, u, d) {
          if (c === "click" || c == "keypress") {
            try {
              const l = this.__sentry_instrumentation_handlers__ || {};
              const g = l[c];
              if (g) {
                g.refCount--;
                if (g.refCount <= 0) {
                  o.call(this, c, g.handler, d);
                  g.handler = undefined;
                  delete l[c];
                }
                if (Object.keys(l).length === 0) {
                  delete this.__sentry_instrumentation_handlers__;
                }
              }
            } catch {}
          }
          return o.call(this, c, u, d);
        };
      });
    }
  });
}
function lc(t) {
  if (t.type !== Ot) {
    return false;
  }
  try {
    if (!t.target || t.target._sentryId !== At) {
      return false;
    }
  } catch {}
  return true;
}
function fc(t, e) {
  if (t !== "keypress") {
    return false;
  } else if (e != null && e.tagName) {
    return e.tagName !== "INPUT" && e.tagName !== "TEXTAREA" && !e.isContentEditable;
  } else {
    return true;
  }
}
function sr(t, e = false) {
  return n => {
    if (!n || n._sentryCaptured) {
      return;
    }
    const r = pc(n);
    if (fc(n.type, r)) {
      return;
    }
    ie(n, "_sentryCaptured", true);
    if (r && !r._sentryId) {
      ie(r, "_sentryId", L());
    }
    const s = n.type === "keypress" ? "input" : n.type;
    if (!lc(n)) {
      t({
        event: n,
        name: s,
        global: e
      });
      Ot = n.type;
      At = r ? r._sentryId : undefined;
    }
    clearTimeout(rr);
    rr = O.setTimeout(() => {
      At = undefined;
      Ot = undefined;
    }, cc);
  };
}
function pc(t) {
  try {
    return t.target;
  } catch {
    return null;
  }
}
let Be;
function ms(t) {
  const e = "history";
  ce(e, t);
  ue(e, hc);
}
function hc() {
  O.addEventListener("popstate", () => {
    const e = O.location.href;
    const n = Be;
    Be = e;
    if (n === e) {
      return;
    }
    F("history", {
      from: n,
      to: e
    });
  });
  if (!Oo()) {
    return;
  }
  function t(e) {
    return function (...n) {
      const r = n.length > 2 ? n[2] : undefined;
      if (r) {
        const s = Be;
        const i = mc(String(r));
        Be = i;
        if (s === i) {
          return e.apply(this, n);
        }
        F("history", {
          from: s,
          to: i
        });
      }
      return e.apply(this, n);
    };
  }
  M(O.history, "pushState", t);
  M(O.history, "replaceState", t);
}
function mc(t) {
  try {
    return new URL(t, O.location.origin).toString();
  } catch {
    return t;
  }
}
const Ve = {};
function _c(t) {
  const e = Ve[t];
  if (e) {
    return e;
  }
  let n = O[t];
  if (Rt(n)) {
    return Ve[t] = n.bind(O);
  }
  const r = O.document;
  if (r && typeof r.createElement == "function") {
    try {
      const s = r.createElement("iframe");
      s.hidden = true;
      r.head.appendChild(s);
      const i = s.contentWindow;
      if (i != null && i[t]) {
        n = i[t];
      }
      r.head.removeChild(s);
    } catch (s) {
      if (oc) {
        y.warn(`Could not create sandbox iframe for ${t} check, bailing to window.${t}: `, s);
      }
    }
  }
  return n && (Ve[t] = n.bind(O));
}
function gc(t) {
  Ve[t] = undefined;
}
const xe = "__sentry_xhr_v3__";
function yc(t) {
  ce("xhr", t);
  ue("xhr", bc);
}
function bc() {
  if (!O.XMLHttpRequest) {
    return;
  }
  const t = XMLHttpRequest.prototype;
  t.open = new Proxy(t.open, {
    apply(e, n, r) {
      const s = new Error();
      const i = V() * 1000;
      const a = H(r[0]) ? r[0].toUpperCase() : undefined;
      const o = vc(r[1]);
      if (!a || !o) {
        return e.apply(n, r);
      }
      n[xe] = {
        method: a,
        url: o,
        request_headers: {}
      };
      if (a === "POST" && o.match(/sentry_key/)) {
        n.__sentry_own_request__ = true;
      }
      const c = () => {
        const u = n[xe];
        if (u && n.readyState === 4) {
          try {
            u.status_code = n.status;
          } catch {}
          const d = {
            endTimestamp: V() * 1000,
            startTimestamp: i,
            xhr: n,
            virtualError: s
          };
          F("xhr", d);
        }
      };
      if ("onreadystatechange" in n && typeof n.onreadystatechange == "function") {
        n.onreadystatechange = new Proxy(n.onreadystatechange, {
          apply(u, d, l) {
            c();
            return u.apply(d, l);
          }
        });
      } else {
        n.addEventListener("readystatechange", c);
      }
      n.setRequestHeader = new Proxy(n.setRequestHeader, {
        apply(u, d, l) {
          const [g, p] = l;
          const w = d[xe];
          if (w && H(g) && H(p)) {
            w.request_headers[g.toLowerCase()] = p;
          }
          return u.apply(d, l);
        }
      });
      return e.apply(n, r);
    }
  });
  t.send = new Proxy(t.send, {
    apply(e, n, r) {
      const s = n[xe];
      if (!s) {
        return e.apply(n, r);
      }
      if (r[0] !== undefined) {
        s.body = r[0];
      }
      const i = {
        startTimestamp: V() * 1000,
        xhr: n
      };
      F("xhr", i);
      return e.apply(n, r);
    }
  });
}
function vc(t) {
  if (H(t)) {
    return t;
  }
  try {
    return t.toString();
  } catch {}
}
const Ec = 40;
function Sc(t, e = _c("fetch")) {
  let n = 0;
  let r = 0;
  async function s(i) {
    const a = i.body.length;
    n += a;
    r++;
    const o = {
      body: i.body,
      method: "POST",
      referrerPolicy: "strict-origin",
      headers: t.headers,
      keepalive: n <= 60000 && r < 15,
      ...t.fetchOptions
    };
    try {
      const c = await e(t.url, o);
      return {
        statusCode: c.status,
        headers: {
          "x-sentry-rate-limits": c.headers.get("X-Sentry-Rate-Limits"),
          "retry-after": c.headers.get("Retry-After")
        }
      };
    } catch (c) {
      gc("fetch");
      throw c;
    } finally {
      n -= a;
      r--;
    }
  }
  return rs(t, s, nn(t.bufferSize || Ec));
}
const ot = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const kc = 30;
const xc = 50;
function Dt(t, e, n, r) {
  const s = {
    filename: t,
    function: e === "<anonymous>" ? X : e,
    in_app: true
  };
  if (n !== undefined) {
    s.lineno = n;
  }
  if (r !== undefined) {
    s.colno = r;
  }
  return s;
}
const Tc = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i;
const wc = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
const Ic = /\((\S*)(?::(\d+))(?::(\d+))\)/;
const Rc = /at (.+?) ?\(data:(.+?),/;
const $c = t => {
  const e = t.match(Rc);
  if (e) {
    return {
      filename: `<data:${e[2]}>`,
      function: e[1]
    };
  }
  const n = Tc.exec(t);
  if (n) {
    const [, s, i, a] = n;
    return Dt(s, X, +i, +a);
  }
  const r = wc.exec(t);
  if (r) {
    if (r[2] && r[2].indexOf("eval") === 0) {
      const o = Ic.exec(r[2]);
      if (o) {
        r[2] = o[1];
        r[3] = o[2];
        r[4] = o[3];
      }
    }
    const [i, a] = gs(r[1] || X, r[2]);
    return Dt(a, i, r[3] ? +r[3] : undefined, r[4] ? +r[4] : undefined);
  }
};
const _s = [kc, $c];
const Nc = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
const Cc = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
const Oc = t => {
  const e = Nc.exec(t);
  if (e) {
    if (e[3] && e[3].indexOf(" > eval") > -1) {
      const i = Cc.exec(e[3]);
      if (i) {
        e[1] = e[1] || "eval";
        e[3] = i[1];
        e[4] = i[2];
        e[5] = "";
      }
    }
    let r = e[3];
    let s = e[1] || X;
    [s, r] = gs(s, r);
    return Dt(r, s, e[4] ? +e[4] : undefined, e[5] ? +e[5] : undefined);
  }
};
const Ac = [xc, Oc];
const Dc = [_s, Ac];
const Mc = Ir(...Dc);
const gs = (t, e) => {
  const n = t.indexOf("safari-extension") !== -1;
  const r = t.indexOf("safari-web-extension") !== -1;
  if (n || r) {
    return [t.indexOf("@") !== -1 ? t.split("@")[0] : X, n ? `safari-extension:${e}` : `safari-web-extension:${e}`];
  } else {
    return [t, e];
  }
};
const Ue = 1024;
const Lc = "Breadcrumbs";
const Pc = (t = {}) => {
  const e = {
    console: true,
    dom: true,
    fetch: true,
    history: true,
    sentry: true,
    xhr: true,
    ...t
  };
  return {
    name: Lc,
    setup(n) {
      if (e.console) {
        ko(Uc(n));
      }
      if (e.dom) {
        uc(Bc(n, e.dom));
      }
      if (e.xhr) {
        yc(Zc(n));
      }
      if (e.fetch) {
        Mo(Wc(n));
      }
      if (e.history) {
        ms(Hc(n));
      }
      if (e.sentry) {
        n.on("beforeSendEvent", Fc(n));
      }
    }
  };
};
const jc = Pc;
function Fc(t) {
  return function (n) {
    if (C() === t) {
      ae({
        category: `sentry.${n.type === "transaction" ? "transaction" : "event"}`,
        event_id: n.event_id,
        level: n.level,
        message: re(n)
      }, {
        event: n
      });
    }
  };
}
function Bc(t, e) {
  return function (r) {
    if (C() !== t) {
      return;
    }
    let s;
    let i;
    let a = typeof e == "object" ? e.serializeAttribute : undefined;
    let o = typeof e == "object" && typeof e.maxStringLength == "number" ? e.maxStringLength : undefined;
    if (o && o > Ue) {
      if (ot) {
        y.warn(`\`dom.maxStringLength\` cannot exceed ${Ue}, but a value of ${o} was configured. Sentry will use ${Ue} instead.`);
      }
      o = Ue;
    }
    if (typeof a == "string") {
      a = [a];
    }
    try {
      const u = r.event;
      const d = Vc(u) ? u.target : u;
      s = Ar(d, {
        keyAttrs: a,
        maxStringLength: o
      });
      i = Xs(d);
    } catch {
      s = "<unknown>";
    }
    if (s.length === 0) {
      return;
    }
    const c = {
      category: `ui.${r.name}`,
      message: s
    };
    if (i) {
      c.data = {
        "ui.component_name": i
      };
    }
    ae(c, {
      event: r.event,
      name: r.name,
      global: r.global
    });
  };
}
function Uc(t) {
  return function (n) {
    if (C() !== t) {
      return;
    }
    const r = {
      category: "console",
      data: {
        arguments: n.args,
        logger: "console"
      },
      level: To(n.level),
      message: gn(n.args, " ")
    };
    if (n.level === "assert") {
      if (n.args[0] === false) {
        r.message = `Assertion failed: ${gn(n.args.slice(1), " ") || "console.assert"}`;
        r.data.arguments = n.args.slice(1);
      } else {
        return;
      }
    }
    ae(r, {
      input: n.args,
      level: n.level
    });
  };
}
function Zc(t) {
  return function (n) {
    if (C() !== t) {
      return;
    }
    const {
      startTimestamp: r,
      endTimestamp: s
    } = n;
    const i = n.xhr[xe];
    if (!r || !s || !i) {
      return;
    }
    const {
      method: a,
      url: o,
      status_code: c,
      body: u
    } = i;
    const d = {
      method: a,
      url: o,
      status_code: c
    };
    const l = {
      xhr: n.xhr,
      input: u,
      startTimestamp: r,
      endTimestamp: s
    };
    const g = {
      category: "xhr",
      data: d,
      type: "http",
      level: ls(c)
    };
    t.emit("beforeOutgoingRequestBreadcrumb", g, l);
    ae(g, l);
  };
}
function Wc(t) {
  return function (n) {
    if (C() !== t) {
      return;
    }
    const {
      startTimestamp: r,
      endTimestamp: s
    } = n;
    if (s && (!n.fetchData.url.match(/sentry_key/) || n.fetchData.method !== "POST")) {
      n.fetchData.method;
      n.fetchData.url;
      if (n.error) {
        const i = n.fetchData;
        const a = {
          data: n.error,
          input: n.args,
          startTimestamp: r,
          endTimestamp: s
        };
        const o = {
          category: "fetch",
          data: i,
          level: "error",
          type: "http"
        };
        t.emit("beforeOutgoingRequestBreadcrumb", o, a);
        ae(o, a);
      } else {
        const i = n.response;
        const a = {
          ...n.fetchData,
          status_code: i == null ? undefined : i.status
        };
        n.fetchData.request_body_size;
        n.fetchData.response_body_size;
        if (i != null) {
          i.status;
        }
        const o = {
          input: n.args,
          response: i,
          startTimestamp: r,
          endTimestamp: s
        };
        const c = {
          category: "fetch",
          data: a,
          type: "http",
          level: ls(a.status_code)
        };
        t.emit("beforeOutgoingRequestBreadcrumb", c, o);
        ae(c, o);
      }
    }
  };
}
function Hc(t) {
  return function (n) {
    if (C() !== t) {
      return;
    }
    let r = n.from;
    let s = n.to;
    const i = mt(R.location.href);
    let a = r ? mt(r) : undefined;
    const o = mt(s);
    if (a == null || !a.path) {
      a = i;
    }
    if (i.protocol === o.protocol && i.host === o.host) {
      s = o.relative;
    }
    if (i.protocol === a.protocol && i.host === a.host) {
      r = a.relative;
    }
    ae({
      category: "navigation",
      data: {
        from: r,
        to: s
      }
    });
  };
}
function Vc(t) {
  return !!t && !!t.target;
}
const zc = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
const qc = "BrowserApiErrors";
const Gc = (t = {}) => {
  const e = {
    XMLHttpRequest: true,
    eventTarget: true,
    requestAnimationFrame: true,
    setInterval: true,
    setTimeout: true,
    unregisterOriginalCallbacks: false,
    ...t
  };
  return {
    name: qc,
    setupOnce() {
      if (e.setTimeout) {
        M(R, "setTimeout", ir);
      }
      if (e.setInterval) {
        M(R, "setInterval", ir);
      }
      if (e.requestAnimationFrame) {
        M(R, "requestAnimationFrame", Jc);
      }
      if (e.XMLHttpRequest && "XMLHttpRequest" in R) {
        M(XMLHttpRequest.prototype, "send", Kc);
      }
      const n = e.eventTarget;
      if (n) {
        (Array.isArray(n) ? n : zc).forEach(s => Xc(s, e));
      }
    }
  };
};
const Yc = Gc;
function ir(t) {
  return function (...e) {
    const n = e[0];
    e[0] = me(n, {
      mechanism: {
        handled: false,
        type: `auto.browser.browserapierrors.${Q(t)}`
      }
    });
    return t.apply(this, e);
  };
}
function Jc(t) {
  return function (e) {
    return t.apply(this, [me(e, {
      mechanism: {
        data: {
          handler: Q(t)
        },
        handled: false,
        type: "auto.browser.browserapierrors.requestAnimationFrame"
      }
    })]);
  };
}
function Kc(t) {
  return function (...e) {
    const n = this;
    ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(s => {
      if (s in n && typeof n[s] == "function") {
        M(n, s, function (i) {
          const a = {
            mechanism: {
              data: {
                handler: Q(i)
              },
              handled: false,
              type: `auto.browser.browserapierrors.xhr.${s}`
            }
          };
          const o = Yt(i);
          if (o) {
            a.mechanism.data.handler = Q(o);
          }
          return me(i, a);
        });
      }
    });
    return t.apply(this, e);
  };
}
function Xc(t, e) {
  var s;
  var i;
  const r = (s = R[t]) == null ? undefined : s.prototype;
  if ((i = r == null ? undefined : r.hasOwnProperty) != null && i.call(r, "addEventListener")) {
    M(r, "addEventListener", function (a) {
      return function (o, c, u) {
        try {
          if (Qc(c)) {
            c.handleEvent = me(c.handleEvent, {
              mechanism: {
                data: {
                  handler: Q(c),
                  target: t
                },
                handled: false,
                type: "auto.browser.browserapierrors.handleEvent"
              }
            });
          }
        } catch {}
        if (e.unregisterOriginalCallbacks) {
          eu(this, o, c);
        }
        return a.apply(this, [o, me(c, {
          mechanism: {
            data: {
              handler: Q(c),
              target: t
            },
            handled: false,
            type: "auto.browser.browserapierrors.addEventListener"
          }
        }), u]);
      };
    });
    M(r, "removeEventListener", function (a) {
      return function (o, c, u) {
        try {
          const d = c.__sentry_wrapped__;
          if (d) {
            a.call(this, o, d, u);
          }
        } catch {}
        return a.call(this, o, c, u);
      };
    });
  }
}
function Qc(t) {
  return typeof t.handleEvent == "function";
}
function eu(t, e, n) {
  if (t && typeof t == "object" && "removeEventListener" in t && typeof t.removeEventListener == "function") {
    t.removeEventListener(e, n);
  }
}
const tu = () => ({
  name: "BrowserSession",
  setupOnce() {
    if (typeof R.document === "undefined") {
      if (ot) {
        y.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
      }
      return;
    }
    Pn({
      ignoreDuration: true
    });
    jn();
    ms(({
      from: t,
      to: e
    }) => {
      if (t !== undefined && t !== e) {
        Pn({
          ignoreDuration: true
        });
        jn();
      }
    });
  }
});
const nu = "GlobalHandlers";
const ru = (t = {}) => {
  const e = {
    onerror: true,
    onunhandledrejection: true,
    ...t
  };
  return {
    name: nu,
    setupOnce() {
      Error.stackTraceLimit = 50;
    },
    setup(n) {
      if (e.onerror) {
        iu(n);
        ar("onerror");
      }
      if (e.onunhandledrejection) {
        au(n);
        ar("onunhandledrejection");
      }
    }
  };
};
const su = ru;
function iu(t) {
  Us(e => {
    const {
      stackParser: n,
      attachStacktrace: r
    } = ys();
    if (C() !== t || ps()) {
      return;
    }
    const {
      msg: s,
      url: i,
      line: a,
      column: o,
      error: c
    } = e;
    const u = uu(an(n, c || s, undefined, r, false), i, a, o);
    u.level = "error";
    Gr(u, {
      originalException: c,
      mechanism: {
        handled: false,
        type: "auto.browser.global_handlers.onerror"
      }
    });
  });
}
function au(t) {
  Ws(e => {
    const {
      stackParser: n,
      attachStacktrace: r
    } = ys();
    if (C() !== t || ps()) {
      return;
    }
    const s = ou(e);
    const i = rt(s) ? cu(s) : an(n, s, undefined, r, true);
    i.level = "error";
    Gr(i, {
      originalException: s,
      mechanism: {
        handled: false,
        type: "auto.browser.global_handlers.onunhandledrejection"
      }
    });
  });
}
function ou(t) {
  if (rt(t)) {
    return t;
  }
  try {
    if ("reason" in t) {
      return t.reason;
    }
    if ("detail" in t && "reason" in t.detail) {
      return t.detail.reason;
    }
  } catch {}
  return t;
}
function cu(t) {
  return {
    exception: {
      values: [{
        type: "UnhandledRejection",
        value: `Non-Error promise rejection captured with value: ${String(t)}`
      }]
    }
  };
}
function uu(t, e, n, r) {
  const s = t.exception = t.exception || {};
  const i = s.values = s.values || [];
  const a = i[0] = i[0] || {};
  const o = a.stacktrace = a.stacktrace || {};
  const c = o.frames = o.frames || [];
  const u = r;
  const d = n;
  const l = du(e) ?? Gt();
  if (c.length === 0) {
    c.push({
      colno: u,
      filename: l,
      function: X,
      in_app: true,
      lineno: d
    });
  }
  return t;
}
function ar(t) {
  if (ot) {
    y.log(`Global Handler attached: ${t}`);
  }
}
function ys() {
  const t = C();
  return (t == null ? undefined : t.getOptions()) || {
    stackParser: () => [],
    attachStacktrace: false
  };
}
function du(t) {
  if (!!H(t) && t.length !== 0) {
    if (t.startsWith("data:")) {
      const e = t.match(/^data:([^;]+)/);
      const n = e ? e[1] : "text/javascript";
      const r = t.includes("base64,");
      return `<data:${n}${r ? ",base64" : ""}>`;
    }
    return t;
  }
}
const lu = () => ({
  name: "HttpContext",
  preprocessEvent(t) {
    var r;
    if (!R.navigator && !R.location && !R.document) {
      return;
    }
    const e = qo();
    const n = {
      ...e.headers,
      ...((r = t.request) == null ? undefined : r.headers)
    };
    t.request = {
      ...e,
      ...t.request,
      headers: n
    };
  }
});
const fu = "cause";
const pu = 5;
const hu = "LinkedErrors";
const mu = (t = {}) => {
  const e = t.limit || pu;
  const n = t.key || fu;
  return {
    name: hu,
    preprocessEvent(r, s, i) {
      const a = i.getOptions();
      So(rn, a.stackParser, n, e, r, s);
    }
  };
};
const _u = mu;
function gu() {
  if (yu()) {
    if (ot) {
      Ee(() => {
        console.error("[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/");
      });
    }
    return true;
  } else {
    return false;
  }
}
function yu() {
  var i;
  if (typeof R.window === "undefined") {
    return false;
  }
  const t = R;
  if (t.nw) {
    return false;
  }
  const e = t.chrome || t.browser;
  if ((i = e == null ? undefined : e.runtime) == null || !i.id) {
    return false;
  }
  const n = Gt();
  const r = ["chrome-extension", "moz-extension", "ms-browser-extension", "safari-web-extension"];
  return R !== R.top || !r.some(a => n.startsWith(`${a}://`));
}
function bs(t) {
  return [ho(), uo(), Yc(), jc(), su(), _u(), Ro(), lu(), tu()];
}
function bu(t = {}) {
  const e = !t.skipBrowserExtensionCheck && gu();
  let n = t.defaultIntegrations == null ? bs() : t.defaultIntegrations;
  const r = {
    ...t,
    enabled: e ? false : t.enabled,
    stackParser: Bs(t.stackParser || Mc),
    integrations: Da({
      integrations: t.integrations,
      defaultIntegrations: n
    }),
    transport: t.transport || Sc
  };
  return no(ic, r);
}
function gt() {
  const t = Kt().getScopeData();
  const e = de().getScopeData();
  const n = Z().getScopeData();
  qe(t, e);
  qe(t, n);
  t.eventProcessors = [];
  return t;
}
function vu(t) {
  de().addScopeListener(e => {
    const n = gt();
    t(n, e);
  });
  Z().addScopeListener(e => {
    const n = gt();
    t(n, e);
  });
  Kt().addScopeListener(e => {
    const n = gt();
    t(n, e);
  });
}
const Eu = () => ({
  name: "ScopeToMain",
  setup(t) {
    const e = fs(t);
    vu((n, r) => {
      e.sendScope(JSON.stringify(B(n, 20, 2000)));
      r.clearBreadcrumbs();
      r.clearAttachments();
    });
  }
});
function Su(t) {
  let e;
  return rs(t, async n => {
    e ||= fs();
    e.sendEnvelope(n.body);
    return {
      statusCode: 200
    };
  });
}
const ku = 50;
const [, xu] = _s;
const [, Tu] = Zo();
const wu = (t, e = 0) => {
  const n = [];
  for (const r of t.split(`
`).slice(e)) {
    const s = xu(r);
    const i = Tu(r);
    if (s && (i == null ? undefined : i.in_app) !== false) {
      n.push(s);
    } else if (i) {
      if (i.module === undefined) {
        delete i.module;
      }
      n.push(i);
    }
    if (n.length >= ku) {
      break;
    }
  }
  return Rr(n);
};
function Iu(t) {
  return [...bs().filter(e => e.name !== "BrowserSession"), Eu()];
}
function Ru(t = {}, e = bu) {
  if (window != null && window.__SENTRY__RENDERER_INIT__) {
    y.warn(`The browser SDK has already been initialized.
If init has been called in the preload and contextIsolation is disabled, is not required to call init in the renderer`);
    return;
  }
  window.__SENTRY__RENDERER_INIT__ = true;
  t.sendClientReports = false;
  if (t.defaultIntegrations === undefined) {
    t.defaultIntegrations = Iu();
  }
  if (t.stackParser === undefined) {
    t.stackParser = wu;
  }
  if (t.ipcNamespace === undefined) {
    t.ipcNamespace = "sentry-ipc";
  }
  if (t.dsn === undefined) {
    t.dsn = "https://12345@dummy.dsn/12345";
  }
  if (t.transport === undefined) {
    t.transport = Su;
  }
  delete t.initialScope;
  e(t);
}
const or = "--desktop-enterprise-config=";
function $u(t) {
  const e = t.find(n => n.startsWith(or));
  if (!e) {
    return false;
  }
  try {
    const n = JSON.parse(e.slice(or.length));
    return (n == null ? undefined : n.disableEssentialTelemetry) === true;
  } catch {
    return false;
  }
}
var x;
(function (t) {
  t.assertEqual = s => {};
  function e(s) {}
  t.assertIs = e;
  function n(s) {
    throw new Error();
  }
  t.assertNever = n;
  t.arrayToEnum = s => {
    const i = {};
    for (const a of s) {
      i[a] = a;
    }
    return i;
  };
  t.getValidEnumValues = s => {
    const i = t.objectKeys(s).filter(o => typeof s[s[o]] != "number");
    const a = {};
    for (const o of i) {
      a[o] = s[o];
    }
    return t.objectValues(a);
  };
  t.objectValues = s => t.objectKeys(s).map(function (i) {
    return s[i];
  });
  t.objectKeys = typeof Object.keys == "function" ? s => Object.keys(s) : s => {
    const i = [];
    for (const a in s) {
      if (Object.prototype.hasOwnProperty.call(s, a)) {
        i.push(a);
      }
    }
    return i;
  };
  t.find = (s, i) => {
    for (const a of s) {
      if (i(a)) {
        return a;
      }
    }
  };
  t.isInteger = typeof Number.isInteger == "function" ? s => Number.isInteger(s) : s => typeof s == "number" && Number.isFinite(s) && Math.floor(s) === s;
  function r(s, i = " | ") {
    return s.map(a => typeof a == "string" ? `'${a}'` : a).join(i);
  }
  t.joinValues = r;
  t.jsonStringifyReplacer = (s, i) => typeof i == "bigint" ? i.toString() : i;
})(x ||= {});
var cr;
(function (t) {
  t.mergeShapes = (e, n) => ({
    ...e,
    ...n
  });
})(cr ||= {});
const m = x.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]);
const Y = t => {
  switch (typeof t) {
    case "undefined":
      return m.undefined;
    case "string":
      return m.string;
    case "number":
      if (Number.isNaN(t)) {
        return m.nan;
      } else {
        return m.number;
      }
    case "boolean":
      return m.boolean;
    case "function":
      return m.function;
    case "bigint":
      return m.bigint;
    case "symbol":
      return m.symbol;
    case "object":
      if (Array.isArray(t)) {
        return m.array;
      } else if (t === null) {
        return m.null;
      } else if (t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function") {
        return m.promise;
      } else if (typeof Map !== "undefined" && t instanceof Map) {
        return m.map;
      } else if (typeof Set !== "undefined" && t instanceof Set) {
        return m.set;
      } else if (typeof Date !== "undefined" && t instanceof Date) {
        return m.date;
      } else {
        return m.object;
      }
    default:
      return m.unknown;
  }
};
const f = x.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
class q extends Error {
  get errors() {
    return this.issues;
  }
  constructor(e) {
    super();
    this.issues = [];
    this.addIssue = r => {
      this.issues = [...this.issues, r];
    };
    this.addIssues = (r = []) => {
      this.issues = [...this.issues, ...r];
    };
    const n = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, n);
    } else {
      this.__proto__ = n;
    }
    this.name = "ZodError";
    this.issues = e;
  }
  format(e) {
    const n = e || function (i) {
      return i.message;
    };
    const r = {
      _errors: []
    };
    const s = i => {
      for (const a of i.issues) {
        if (a.code === "invalid_union") {
          a.unionErrors.map(s);
        } else if (a.code === "invalid_return_type") {
          s(a.returnTypeError);
        } else if (a.code === "invalid_arguments") {
          s(a.argumentsError);
        } else if (a.path.length === 0) {
          r._errors.push(n(a));
        } else {
          let o = r;
          let c = 0;
          while (c < a.path.length) {
            const u = a.path[c];
            if (c === a.path.length - 1) {
              o[u] = o[u] || {
                _errors: []
              };
              o[u]._errors.push(n(a));
            } else {
              o[u] = o[u] || {
                _errors: []
              };
            }
            o = o[u];
            c++;
          }
        }
      }
    };
    s(this);
    return r;
  }
  static assert(e) {
    if (!(e instanceof q)) {
      throw new Error(`Not a ZodError: ${e}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, x.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = n => n.message) {
    const n = {};
    const r = [];
    for (const s of this.issues) {
      if (s.path.length > 0) {
        const i = s.path[0];
        n[i] = n[i] || [];
        n[i].push(e(s));
      } else {
        r.push(e(s));
      }
    }
    return {
      formErrors: r,
      fieldErrors: n
    };
  }
  get formErrors() {
    return this.flatten();
  }
}
q.create = t => new q(t);
const Mt = (t, e) => {
  let n;
  switch (t.code) {
    case f.invalid_type:
      if (t.received === m.undefined) {
        n = "Required";
      } else {
        n = `Expected ${t.expected}, received ${t.received}`;
      }
      break;
    case f.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(t.expected, x.jsonStringifyReplacer)}`;
      break;
    case f.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${x.joinValues(t.keys, ", ")}`;
      break;
    case f.invalid_union:
      n = "Invalid input";
      break;
    case f.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${x.joinValues(t.options)}`;
      break;
    case f.invalid_enum_value:
      n = `Invalid enum value. Expected ${x.joinValues(t.options)}, received '${t.received}'`;
      break;
    case f.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case f.invalid_return_type:
      n = "Invalid function return type";
      break;
    case f.invalid_date:
      n = "Invalid date";
      break;
    case f.invalid_string:
      if (typeof t.validation == "object") {
        if ("includes" in t.validation) {
          n = `Invalid input: must include "${t.validation.includes}"`;
          if (typeof t.validation.position == "number") {
            n = `${n} at one or more positions greater than or equal to ${t.validation.position}`;
          }
        } else if ("startsWith" in t.validation) {
          n = `Invalid input: must start with "${t.validation.startsWith}"`;
        } else if ("endsWith" in t.validation) {
          n = `Invalid input: must end with "${t.validation.endsWith}"`;
        } else {
          x.assertNever(t.validation);
        }
      } else if (t.validation !== "regex") {
        n = `Invalid ${t.validation}`;
      } else {
        n = "Invalid";
      }
      break;
    case f.too_small:
      if (t.type === "array") {
        n = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)`;
      } else if (t.type === "string") {
        n = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)`;
      } else if (t.type === "number") {
        n = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}`;
      } else if (t.type === "bigint") {
        n = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}`;
      } else if (t.type === "date") {
        n = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}`;
      } else {
        n = "Invalid input";
      }
      break;
    case f.too_big:
      if (t.type === "array") {
        n = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)`;
      } else if (t.type === "string") {
        n = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)`;
      } else if (t.type === "number") {
        n = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}`;
      } else if (t.type === "bigint") {
        n = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}`;
      } else if (t.type === "date") {
        n = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}`;
      } else {
        n = "Invalid input";
      }
      break;
    case f.custom:
      n = "Invalid input";
      break;
    case f.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case f.not_multiple_of:
      n = `Number must be a multiple of ${t.multipleOf}`;
      break;
    case f.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = e.defaultError;
      x.assertNever(t);
  }
  return {
    message: n
  };
};
let Nu = Mt;
function Cu() {
  return Nu;
}
const Ou = t => {
  const {
    data: e,
    path: n,
    errorMaps: r,
    issueData: s
  } = t;
  const i = [...n, ...(s.path || [])];
  const a = {
    ...s,
    path: i
  };
  if (s.message !== undefined) {
    return {
      ...s,
      path: i,
      message: s.message
    };
  }
  let o = "";
  const c = r.filter(u => !!u).slice().reverse();
  for (const u of c) {
    o = u(a, {
      data: e,
      defaultError: o
    }).message;
  }
  return {
    ...s,
    path: i,
    message: o
  };
};
function h(t, e) {
  const n = Cu();
  const r = Ou({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, n, n === Mt ? undefined : Mt].filter(s => s)
  });
  t.common.issues.push(r);
}
class P {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid") {
      this.value = "dirty";
    }
  }
  abort() {
    if (this.value !== "aborted") {
      this.value = "aborted";
    }
  }
  static mergeArray(e, n) {
    const r = [];
    for (const s of n) {
      if (s.status === "aborted") {
        return b;
      }
      if (s.status === "dirty") {
        e.dirty();
      }
      r.push(s.value);
    }
    return {
      status: e.value,
      value: r
    };
  }
  static async mergeObjectAsync(e, n) {
    const r = [];
    for (const s of n) {
      const i = await s.key;
      const a = await s.value;
      r.push({
        key: i,
        value: a
      });
    }
    return P.mergeObjectSync(e, r);
  }
  static mergeObjectSync(e, n) {
    const r = {};
    for (const s of n) {
      const {
        key: i,
        value: a
      } = s;
      if (i.status === "aborted" || a.status === "aborted") {
        return b;
      }
      if (i.status === "dirty") {
        e.dirty();
      }
      if (a.status === "dirty") {
        e.dirty();
      }
      if (i.value !== "__proto__" && (typeof a.value !== "undefined" || s.alwaysSet)) {
        r[i.value] = a.value;
      }
    }
    return {
      status: e.value,
      value: r
    };
  }
}
const b = Object.freeze({
  status: "aborted"
});
const Te = t => ({
  status: "dirty",
  value: t
});
const j = t => ({
  status: "valid",
  value: t
});
const ur = t => t.status === "aborted";
const dr = t => t.status === "dirty";
const _e = t => t.status === "valid";
const Ye = t => typeof Promise !== "undefined" && t instanceof Promise;
var _;
(function (t) {
  t.errToObj = e => typeof e == "string" ? {
    message: e
  } : e || {};
  t.toString = e => typeof e == "string" ? e : e == null ? undefined : e.message;
})(_ ||= {});
class te {
  constructor(e, n, r, s) {
    this._cachedPath = [];
    this.parent = e;
    this.data = n;
    this._path = r;
    this._key = s;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (Array.isArray(this._key)) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
}
const lr = (t, e) => {
  if (_e(e)) {
    return {
      success: true,
      data: e.value
    };
  }
  if (!t.common.issues.length) {
    throw new Error("Validation failed but no issues detected.");
  }
  return {
    success: false,
    get error() {
      if (this._error) {
        return this._error;
      }
      const n = new q(t.common.issues);
      this._error = n;
      return this._error;
    }
  };
};
function S(t) {
  if (!t) {
    return {};
  }
  const {
    errorMap: e,
    invalid_type_error: n,
    required_error: r,
    description: s
  } = t;
  if (e && (n || r)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (e) {
    return {
      errorMap: e,
      description: s
    };
  } else {
    return {
      errorMap: (a, o) => {
        const {
          message: c
        } = t;
        if (a.code === "invalid_enum_value") {
          return {
            message: c ?? o.defaultError
          };
        } else if (typeof o.data === "undefined") {
          return {
            message: c ?? r ?? o.defaultError
          };
        } else if (a.code !== "invalid_type") {
          return {
            message: o.defaultError
          };
        } else {
          return {
            message: c ?? n ?? o.defaultError
          };
        }
      },
      description: s
    };
  }
}
class k {
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return Y(e.data);
  }
  _getOrReturnCtx(e, n) {
    return n || {
      common: e.parent.common,
      data: e.data,
      parsedType: Y(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new P(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: Y(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const n = this._parse(e);
    if (Ye(n)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return n;
  }
  _parseAsync(e) {
    const n = this._parse(e);
    return Promise.resolve(n);
  }
  parse(e, n) {
    const r = this.safeParse(e, n);
    if (r.success) {
      return r.data;
    }
    throw r.error;
  }
  safeParse(e, n) {
    const r = {
      common: {
        issues: [],
        async: (n == null ? undefined : n.async) ?? false,
        contextualErrorMap: n == null ? undefined : n.errorMap
      },
      path: (n == null ? undefined : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: Y(e)
    };
    const s = this._parseSync({
      data: e,
      path: r.path,
      parent: r
    });
    return lr(r, s);
  }
  "~validate"(e) {
    var r;
    var s;
    const n = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: Y(e)
    };
    if (!this["~standard"].async) {
      try {
        const i = this._parseSync({
          data: e,
          path: [],
          parent: n
        });
        if (_e(i)) {
          return {
            value: i.value
          };
        } else {
          return {
            issues: n.common.issues
          };
        }
      } catch (i) {
        if ((s = (r = i == null ? undefined : i.message) == null ? undefined : r.toLowerCase()) != null && s.includes("encountered")) {
          this["~standard"].async = true;
        }
        n.common = {
          issues: [],
          async: true
        };
      }
    }
    return this._parseAsync({
      data: e,
      path: [],
      parent: n
    }).then(i => _e(i) ? {
      value: i.value
    } : {
      issues: n.common.issues
    });
  }
  async parseAsync(e, n) {
    const r = await this.safeParseAsync(e, n);
    if (r.success) {
      return r.data;
    }
    throw r.error;
  }
  async safeParseAsync(e, n) {
    const r = {
      common: {
        issues: [],
        contextualErrorMap: n == null ? undefined : n.errorMap,
        async: true
      },
      path: (n == null ? undefined : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: Y(e)
    };
    const s = this._parse({
      data: e,
      path: r.path,
      parent: r
    });
    const i = await (Ye(s) ? s : Promise.resolve(s));
    return lr(r, i);
  }
  refine(e, n) {
    const r = s => typeof n == "string" || typeof n === "undefined" ? {
      message: n
    } : typeof n == "function" ? n(s) : n;
    return this._refinement((s, i) => {
      const a = e(s);
      const o = () => i.addIssue({
        code: f.custom,
        ...r(s)
      });
      if (typeof Promise !== "undefined" && a instanceof Promise) {
        return a.then(c => c ? true : (o(), false));
      } else if (a) {
        return true;
      } else {
        o();
        return false;
      }
    });
  }
  refinement(e, n) {
    return this._refinement((r, s) => e(r) ? true : (s.addIssue(typeof n == "function" ? n(r, s) : n), false));
  }
  _refinement(e) {
    return new ye({
      schema: this,
      typeName: v.ZodEffects,
      effect: {
        type: "refinement",
        refinement: e
      }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  constructor(e) {
    this.spa = this.safeParseAsync;
    this._def = e;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: n => this["~validate"](n)
    };
  }
  optional() {
    return K.create(this, this._def);
  }
  nullable() {
    return be.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return U.create(this);
  }
  promise() {
    return Qe.create(this, this._def);
  }
  or(e) {
    return Ke.create([this, e], this._def);
  }
  and(e) {
    return Xe.create(this, e, this._def);
  }
  transform(e) {
    return new ye({
      ...S(this._def),
      schema: this,
      typeName: v.ZodEffects,
      effect: {
        type: "transform",
        transform: e
      }
    });
  }
  default(e) {
    const n = typeof e == "function" ? e : () => e;
    return new Ft({
      ...S(this._def),
      innerType: this,
      defaultValue: n,
      typeName: v.ZodDefault
    });
  }
  brand() {
    return new td({
      typeName: v.ZodBranded,
      type: this,
      ...S(this._def)
    });
  }
  catch(e) {
    const n = typeof e == "function" ? e : () => e;
    return new Bt({
      ...S(this._def),
      innerType: this,
      catchValue: n,
      typeName: v.ZodCatch
    });
  }
  describe(e) {
    const n = this.constructor;
    return new n({
      ...this._def,
      description: e
    });
  }
  pipe(e) {
    return on.create(this, e);
  }
  readonly() {
    return Ut.create(this);
  }
  isOptional() {
    return this.safeParse(undefined).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Au = /^c[^\s-]{8,}$/i;
const Du = /^[0-9a-z]+$/;
const Mu = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
const Lu = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
const Pu = /^[a-z0-9_-]{21}$/i;
const ju = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
const Fu = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
const Bu = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
const Uu = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let yt;
const Zu = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
const Wu = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
const Hu = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
const Vu = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
const zu = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
const qu = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
const vs = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))";
const Gu = new RegExp(`^${vs}$`);
function Es(t) {
  let e = "[0-5]\\d";
  if (t.precision) {
    e = `${e}\\.\\d{${t.precision}}`;
  } else if (t.precision == null) {
    e = `${e}(\\.\\d+)?`;
  }
  const n = t.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${e})${n}`;
}
function Yu(t) {
  return new RegExp(`^${Es(t)}$`);
}
function Ju(t) {
  let e = `${vs}T${Es(t)}`;
  const n = [];
  n.push(t.local ? "Z?" : "Z");
  if (t.offset) {
    n.push("([+-]\\d{2}:?\\d{2})");
  }
  e = `${e}(${n.join("|")})`;
  return new RegExp(`^${e}$`);
}
function Ku(t, e) {
  return (e === "v4" || !e) && !!Zu.test(t) || (e === "v6" || !e) && !!Hu.test(t);
}
function Xu(t, e) {
  if (!ju.test(t)) {
    return false;
  }
  try {
    const [n] = t.split(".");
    if (!n) {
      return false;
    }
    const r = n.replace(/-/g, "+").replace(/_/g, "/").padEnd(n.length + (4 - n.length % 4) % 4, "=");
    const s = JSON.parse(atob(r));
    return typeof s == "object" && s !== null && (!("typ" in s) || (s == null ? undefined : s.typ) === "JWT") && !!s.alg && (!e || s.alg === e);
  } catch {
    return false;
  }
}
function Qu(t, e) {
  return (e === "v4" || !e) && !!Wu.test(t) || (e === "v6" || !e) && !!Vu.test(t);
}
class J extends k {
  _parse(e) {
    if (this._def.coerce) {
      e.data = String(e.data);
    }
    if (this._getType(e) !== m.string) {
      const i = this._getOrReturnCtx(e);
      h(i, {
        code: f.invalid_type,
        expected: m.string,
        received: i.parsedType
      });
      return b;
    }
    const r = new P();
    let s;
    for (const i of this._def.checks) {
      if (i.kind === "min") {
        if (e.data.length < i.value) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            code: f.too_small,
            minimum: i.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "max") {
        if (e.data.length > i.value) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            code: f.too_big,
            maximum: i.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "length") {
        const a = e.data.length > i.value;
        const o = e.data.length < i.value;
        if (a || o) {
          s = this._getOrReturnCtx(e, s);
          if (a) {
            h(s, {
              code: f.too_big,
              maximum: i.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: i.message
            });
          } else if (o) {
            h(s, {
              code: f.too_small,
              minimum: i.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: i.message
            });
          }
          r.dirty();
        }
      } else if (i.kind === "email") {
        if (!Bu.test(e.data)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            validation: "email",
            code: f.invalid_string,
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "emoji") {
        yt ||= new RegExp(Uu, "u");
        if (!yt.test(e.data)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            validation: "emoji",
            code: f.invalid_string,
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "uuid") {
        if (!Lu.test(e.data)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            validation: "uuid",
            code: f.invalid_string,
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "nanoid") {
        if (!Pu.test(e.data)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            validation: "nanoid",
            code: f.invalid_string,
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "cuid") {
        if (!Au.test(e.data)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            validation: "cuid",
            code: f.invalid_string,
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "cuid2") {
        if (!Du.test(e.data)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            validation: "cuid2",
            code: f.invalid_string,
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "ulid") {
        if (!Mu.test(e.data)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            validation: "ulid",
            code: f.invalid_string,
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "url") {
        try {
          new URL(e.data);
        } catch {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            validation: "url",
            code: f.invalid_string,
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "regex") {
        i.regex.lastIndex = 0;
        if (!i.regex.test(e.data)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            validation: "regex",
            code: f.invalid_string,
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "trim") {
        e.data = e.data.trim();
      } else if (i.kind === "includes") {
        if (!e.data.includes(i.value, i.position)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            code: f.invalid_string,
            validation: {
              includes: i.value,
              position: i.position
            },
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "toLowerCase") {
        e.data = e.data.toLowerCase();
      } else if (i.kind === "toUpperCase") {
        e.data = e.data.toUpperCase();
      } else if (i.kind === "startsWith") {
        if (!e.data.startsWith(i.value)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            code: f.invalid_string,
            validation: {
              startsWith: i.value
            },
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "endsWith") {
        if (!e.data.endsWith(i.value)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            code: f.invalid_string,
            validation: {
              endsWith: i.value
            },
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "datetime") {
        if (!Ju(i).test(e.data)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            code: f.invalid_string,
            validation: "datetime",
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "date") {
        if (!Gu.test(e.data)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            code: f.invalid_string,
            validation: "date",
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "time") {
        if (!Yu(i).test(e.data)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            code: f.invalid_string,
            validation: "time",
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "duration") {
        if (!Fu.test(e.data)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            validation: "duration",
            code: f.invalid_string,
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "ip") {
        if (!Ku(e.data, i.version)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            validation: "ip",
            code: f.invalid_string,
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "jwt") {
        if (!Xu(e.data, i.alg)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            validation: "jwt",
            code: f.invalid_string,
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "cidr") {
        if (!Qu(e.data, i.version)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            validation: "cidr",
            code: f.invalid_string,
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "base64") {
        if (!zu.test(e.data)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            validation: "base64",
            code: f.invalid_string,
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "base64url") {
        if (!qu.test(e.data)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            validation: "base64url",
            code: f.invalid_string,
            message: i.message
          });
          r.dirty();
        }
      } else {
        x.assertNever(i);
      }
    }
    return {
      status: r.value,
      value: e.data
    };
  }
  _regex(e, n, r) {
    return this.refinement(s => e.test(s), {
      validation: n,
      code: f.invalid_string,
      ..._.errToObj(r)
    });
  }
  _addCheck(e) {
    return new J({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({
      kind: "email",
      ..._.errToObj(e)
    });
  }
  url(e) {
    return this._addCheck({
      kind: "url",
      ..._.errToObj(e)
    });
  }
  emoji(e) {
    return this._addCheck({
      kind: "emoji",
      ..._.errToObj(e)
    });
  }
  uuid(e) {
    return this._addCheck({
      kind: "uuid",
      ..._.errToObj(e)
    });
  }
  nanoid(e) {
    return this._addCheck({
      kind: "nanoid",
      ..._.errToObj(e)
    });
  }
  cuid(e) {
    return this._addCheck({
      kind: "cuid",
      ..._.errToObj(e)
    });
  }
  cuid2(e) {
    return this._addCheck({
      kind: "cuid2",
      ..._.errToObj(e)
    });
  }
  ulid(e) {
    return this._addCheck({
      kind: "ulid",
      ..._.errToObj(e)
    });
  }
  base64(e) {
    return this._addCheck({
      kind: "base64",
      ..._.errToObj(e)
    });
  }
  base64url(e) {
    return this._addCheck({
      kind: "base64url",
      ..._.errToObj(e)
    });
  }
  jwt(e) {
    return this._addCheck({
      kind: "jwt",
      ..._.errToObj(e)
    });
  }
  ip(e) {
    return this._addCheck({
      kind: "ip",
      ..._.errToObj(e)
    });
  }
  cidr(e) {
    return this._addCheck({
      kind: "cidr",
      ..._.errToObj(e)
    });
  }
  datetime(e) {
    if (typeof e == "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: e
      });
    } else {
      return this._addCheck({
        kind: "datetime",
        precision: typeof (e == null ? undefined : e.precision) === "undefined" ? null : e == null ? undefined : e.precision,
        offset: (e == null ? undefined : e.offset) ?? false,
        local: (e == null ? undefined : e.local) ?? false,
        ..._.errToObj(e == null ? undefined : e.message)
      });
    }
  }
  date(e) {
    return this._addCheck({
      kind: "date",
      message: e
    });
  }
  time(e) {
    if (typeof e == "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: e
      });
    } else {
      return this._addCheck({
        kind: "time",
        precision: typeof (e == null ? undefined : e.precision) === "undefined" ? null : e == null ? undefined : e.precision,
        ..._.errToObj(e == null ? undefined : e.message)
      });
    }
  }
  duration(e) {
    return this._addCheck({
      kind: "duration",
      ..._.errToObj(e)
    });
  }
  regex(e, n) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ..._.errToObj(n)
    });
  }
  includes(e, n) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: n == null ? undefined : n.position,
      ..._.errToObj(n == null ? undefined : n.message)
    });
  }
  startsWith(e, n) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ..._.errToObj(n)
    });
  }
  endsWith(e, n) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ..._.errToObj(n)
    });
  }
  min(e, n) {
    return this._addCheck({
      kind: "min",
      value: e,
      ..._.errToObj(n)
    });
  }
  max(e, n) {
    return this._addCheck({
      kind: "max",
      value: e,
      ..._.errToObj(n)
    });
  }
  length(e, n) {
    return this._addCheck({
      kind: "length",
      value: e,
      ..._.errToObj(n)
    });
  }
  nonempty(e) {
    return this.min(1, _.errToObj(e));
  }
  trim() {
    return new J({
      ...this._def,
      checks: [...this._def.checks, {
        kind: "trim"
      }]
    });
  }
  toLowerCase() {
    return new J({
      ...this._def,
      checks: [...this._def.checks, {
        kind: "toLowerCase"
      }]
    });
  }
  toUpperCase() {
    return new J({
      ...this._def,
      checks: [...this._def.checks, {
        kind: "toUpperCase"
      }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find(e => e.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find(e => e.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find(e => e.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find(e => e.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find(e => e.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find(e => e.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find(e => e.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find(e => e.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find(e => e.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find(e => e.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find(e => e.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find(e => e.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find(e => e.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find(e => e.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find(e => e.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find(e => e.kind === "base64url");
  }
  get minLength() {
    let e = null;
    for (const n of this._def.checks) {
      if (n.kind === "min" && (e === null || n.value > e)) {
        e = n.value;
      }
    }
    return e;
  }
  get maxLength() {
    let e = null;
    for (const n of this._def.checks) {
      if (n.kind === "max" && (e === null || n.value < e)) {
        e = n.value;
      }
    }
    return e;
  }
}
J.create = t => new J({
  checks: [],
  typeName: v.ZodString,
  coerce: (t == null ? undefined : t.coerce) ?? false,
  ...S(t)
});
function ed(t, e) {
  const n = (t.toString().split(".")[1] || "").length;
  const r = (e.toString().split(".")[1] || "").length;
  const s = n > r ? n : r;
  const i = Number.parseInt(t.toFixed(s).replace(".", ""));
  const a = Number.parseInt(e.toFixed(s).replace(".", ""));
  return i % a / 10 ** s;
}
class $e extends k {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce) {
      e.data = Number(e.data);
    }
    if (this._getType(e) !== m.number) {
      const i = this._getOrReturnCtx(e);
      h(i, {
        code: f.invalid_type,
        expected: m.number,
        received: i.parsedType
      });
      return b;
    }
    let r;
    const s = new P();
    for (const i of this._def.checks) {
      if (i.kind === "int") {
        if (!x.isInteger(e.data)) {
          r = this._getOrReturnCtx(e, r);
          h(r, {
            code: f.invalid_type,
            expected: "integer",
            received: "float",
            message: i.message
          });
          s.dirty();
        }
      } else if (i.kind === "min") {
        if (i.inclusive ? e.data < i.value : e.data <= i.value) {
          r = this._getOrReturnCtx(e, r);
          h(r, {
            code: f.too_small,
            minimum: i.value,
            type: "number",
            inclusive: i.inclusive,
            exact: false,
            message: i.message
          });
          s.dirty();
        }
      } else if (i.kind === "max") {
        if (i.inclusive ? e.data > i.value : e.data >= i.value) {
          r = this._getOrReturnCtx(e, r);
          h(r, {
            code: f.too_big,
            maximum: i.value,
            type: "number",
            inclusive: i.inclusive,
            exact: false,
            message: i.message
          });
          s.dirty();
        }
      } else if (i.kind === "multipleOf") {
        if (ed(e.data, i.value) !== 0) {
          r = this._getOrReturnCtx(e, r);
          h(r, {
            code: f.not_multiple_of,
            multipleOf: i.value,
            message: i.message
          });
          s.dirty();
        }
      } else if (i.kind === "finite") {
        if (!Number.isFinite(e.data)) {
          r = this._getOrReturnCtx(e, r);
          h(r, {
            code: f.not_finite,
            message: i.message
          });
          s.dirty();
        }
      } else {
        x.assertNever(i);
      }
    }
    return {
      status: s.value,
      value: e.data
    };
  }
  gte(e, n) {
    return this.setLimit("min", e, true, _.toString(n));
  }
  gt(e, n) {
    return this.setLimit("min", e, false, _.toString(n));
  }
  lte(e, n) {
    return this.setLimit("max", e, true, _.toString(n));
  }
  lt(e, n) {
    return this.setLimit("max", e, false, _.toString(n));
  }
  setLimit(e, n, r, s) {
    return new $e({
      ...this._def,
      checks: [...this._def.checks, {
        kind: e,
        value: n,
        inclusive: r,
        message: _.toString(s)
      }]
    });
  }
  _addCheck(e) {
    return new $e({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: _.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: _.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: _.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: _.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: _.toString(e)
    });
  }
  multipleOf(e, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: _.toString(n)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: _.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: _.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: _.toString(e)
    });
  }
  get minValue() {
    let e = null;
    for (const n of this._def.checks) {
      if (n.kind === "min" && (e === null || n.value > e)) {
        e = n.value;
      }
    }
    return e;
  }
  get maxValue() {
    let e = null;
    for (const n of this._def.checks) {
      if (n.kind === "max" && (e === null || n.value < e)) {
        e = n.value;
      }
    }
    return e;
  }
  get isInt() {
    return !!this._def.checks.find(e => e.kind === "int" || e.kind === "multipleOf" && x.isInteger(e.value));
  }
  get isFinite() {
    let e = null;
    let n = null;
    for (const r of this._def.checks) {
      if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf") {
        return true;
      }
      if (r.kind === "min") {
        if (n === null || r.value > n) {
          n = r.value;
        }
      } else if (r.kind === "max" && (e === null || r.value < e)) {
        e = r.value;
      }
    }
    return Number.isFinite(n) && Number.isFinite(e);
  }
}
$e.create = t => new $e({
  checks: [],
  typeName: v.ZodNumber,
  coerce: (t == null ? undefined : t.coerce) || false,
  ...S(t)
});
class Ne extends k {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce) {
      try {
        e.data = BigInt(e.data);
      } catch {
        return this._getInvalidInput(e);
      }
    }
    if (this._getType(e) !== m.bigint) {
      return this._getInvalidInput(e);
    }
    let r;
    const s = new P();
    for (const i of this._def.checks) {
      if (i.kind === "min") {
        if (i.inclusive ? e.data < i.value : e.data <= i.value) {
          r = this._getOrReturnCtx(e, r);
          h(r, {
            code: f.too_small,
            type: "bigint",
            minimum: i.value,
            inclusive: i.inclusive,
            message: i.message
          });
          s.dirty();
        }
      } else if (i.kind === "max") {
        if (i.inclusive ? e.data > i.value : e.data >= i.value) {
          r = this._getOrReturnCtx(e, r);
          h(r, {
            code: f.too_big,
            type: "bigint",
            maximum: i.value,
            inclusive: i.inclusive,
            message: i.message
          });
          s.dirty();
        }
      } else if (i.kind === "multipleOf") {
        if (e.data % i.value !== BigInt(0)) {
          r = this._getOrReturnCtx(e, r);
          h(r, {
            code: f.not_multiple_of,
            multipleOf: i.value,
            message: i.message
          });
          s.dirty();
        }
      } else {
        x.assertNever(i);
      }
    }
    return {
      status: s.value,
      value: e.data
    };
  }
  _getInvalidInput(e) {
    const n = this._getOrReturnCtx(e);
    h(n, {
      code: f.invalid_type,
      expected: m.bigint,
      received: n.parsedType
    });
    return b;
  }
  gte(e, n) {
    return this.setLimit("min", e, true, _.toString(n));
  }
  gt(e, n) {
    return this.setLimit("min", e, false, _.toString(n));
  }
  lte(e, n) {
    return this.setLimit("max", e, true, _.toString(n));
  }
  lt(e, n) {
    return this.setLimit("max", e, false, _.toString(n));
  }
  setLimit(e, n, r, s) {
    return new Ne({
      ...this._def,
      checks: [...this._def.checks, {
        kind: e,
        value: n,
        inclusive: r,
        message: _.toString(s)
      }]
    });
  }
  _addCheck(e) {
    return new Ne({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: _.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: _.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: _.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: _.toString(e)
    });
  }
  multipleOf(e, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: _.toString(n)
    });
  }
  get minValue() {
    let e = null;
    for (const n of this._def.checks) {
      if (n.kind === "min" && (e === null || n.value > e)) {
        e = n.value;
      }
    }
    return e;
  }
  get maxValue() {
    let e = null;
    for (const n of this._def.checks) {
      if (n.kind === "max" && (e === null || n.value < e)) {
        e = n.value;
      }
    }
    return e;
  }
}
Ne.create = t => new Ne({
  checks: [],
  typeName: v.ZodBigInt,
  coerce: (t == null ? undefined : t.coerce) ?? false,
  ...S(t)
});
class Lt extends k {
  _parse(e) {
    if (this._def.coerce) {
      e.data = !!e.data;
    }
    if (this._getType(e) !== m.boolean) {
      const r = this._getOrReturnCtx(e);
      h(r, {
        code: f.invalid_type,
        expected: m.boolean,
        received: r.parsedType
      });
      return b;
    }
    return j(e.data);
  }
}
Lt.create = t => new Lt({
  typeName: v.ZodBoolean,
  coerce: (t == null ? undefined : t.coerce) || false,
  ...S(t)
});
class Je extends k {
  _parse(e) {
    if (this._def.coerce) {
      e.data = new Date(e.data);
    }
    if (this._getType(e) !== m.date) {
      const i = this._getOrReturnCtx(e);
      h(i, {
        code: f.invalid_type,
        expected: m.date,
        received: i.parsedType
      });
      return b;
    }
    if (Number.isNaN(e.data.getTime())) {
      const i = this._getOrReturnCtx(e);
      h(i, {
        code: f.invalid_date
      });
      return b;
    }
    const r = new P();
    let s;
    for (const i of this._def.checks) {
      if (i.kind === "min") {
        if (e.data.getTime() < i.value) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            code: f.too_small,
            message: i.message,
            inclusive: true,
            exact: false,
            minimum: i.value,
            type: "date"
          });
          r.dirty();
        }
      } else if (i.kind === "max") {
        if (e.data.getTime() > i.value) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            code: f.too_big,
            message: i.message,
            inclusive: true,
            exact: false,
            maximum: i.value,
            type: "date"
          });
          r.dirty();
        }
      } else {
        x.assertNever(i);
      }
    }
    return {
      status: r.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new Je({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, n) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: _.toString(n)
    });
  }
  max(e, n) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: _.toString(n)
    });
  }
  get minDate() {
    let e = null;
    for (const n of this._def.checks) {
      if (n.kind === "min" && (e === null || n.value > e)) {
        e = n.value;
      }
    }
    if (e != null) {
      return new Date(e);
    } else {
      return null;
    }
  }
  get maxDate() {
    let e = null;
    for (const n of this._def.checks) {
      if (n.kind === "max" && (e === null || n.value < e)) {
        e = n.value;
      }
    }
    if (e != null) {
      return new Date(e);
    } else {
      return null;
    }
  }
}
Je.create = t => new Je({
  checks: [],
  coerce: (t == null ? undefined : t.coerce) || false,
  typeName: v.ZodDate,
  ...S(t)
});
class fr extends k {
  _parse(e) {
    if (this._getType(e) !== m.symbol) {
      const r = this._getOrReturnCtx(e);
      h(r, {
        code: f.invalid_type,
        expected: m.symbol,
        received: r.parsedType
      });
      return b;
    }
    return j(e.data);
  }
}
fr.create = t => new fr({
  typeName: v.ZodSymbol,
  ...S(t)
});
class pr extends k {
  _parse(e) {
    if (this._getType(e) !== m.undefined) {
      const r = this._getOrReturnCtx(e);
      h(r, {
        code: f.invalid_type,
        expected: m.undefined,
        received: r.parsedType
      });
      return b;
    }
    return j(e.data);
  }
}
pr.create = t => new pr({
  typeName: v.ZodUndefined,
  ...S(t)
});
class hr extends k {
  _parse(e) {
    if (this._getType(e) !== m.null) {
      const r = this._getOrReturnCtx(e);
      h(r, {
        code: f.invalid_type,
        expected: m.null,
        received: r.parsedType
      });
      return b;
    }
    return j(e.data);
  }
}
hr.create = t => new hr({
  typeName: v.ZodNull,
  ...S(t)
});
class mr extends k {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(e) {
    return j(e.data);
  }
}
mr.create = t => new mr({
  typeName: v.ZodAny,
  ...S(t)
});
class _r extends k {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(e) {
    return j(e.data);
  }
}
_r.create = t => new _r({
  typeName: v.ZodUnknown,
  ...S(t)
});
class ne extends k {
  _parse(e) {
    const n = this._getOrReturnCtx(e);
    h(n, {
      code: f.invalid_type,
      expected: m.never,
      received: n.parsedType
    });
    return b;
  }
}
ne.create = t => new ne({
  typeName: v.ZodNever,
  ...S(t)
});
class gr extends k {
  _parse(e) {
    if (this._getType(e) !== m.undefined) {
      const r = this._getOrReturnCtx(e);
      h(r, {
        code: f.invalid_type,
        expected: m.void,
        received: r.parsedType
      });
      return b;
    }
    return j(e.data);
  }
}
gr.create = t => new gr({
  typeName: v.ZodVoid,
  ...S(t)
});
class U extends k {
  _parse(e) {
    const {
      ctx: n,
      status: r
    } = this._processInputParams(e);
    const s = this._def;
    if (n.parsedType !== m.array) {
      h(n, {
        code: f.invalid_type,
        expected: m.array,
        received: n.parsedType
      });
      return b;
    }
    if (s.exactLength !== null) {
      const a = n.data.length > s.exactLength.value;
      const o = n.data.length < s.exactLength.value;
      if (a || o) {
        h(n, {
          code: a ? f.too_big : f.too_small,
          minimum: o ? s.exactLength.value : undefined,
          maximum: a ? s.exactLength.value : undefined,
          type: "array",
          inclusive: true,
          exact: true,
          message: s.exactLength.message
        });
        r.dirty();
      }
    }
    if (s.minLength !== null && n.data.length < s.minLength.value) {
      h(n, {
        code: f.too_small,
        minimum: s.minLength.value,
        type: "array",
        inclusive: true,
        exact: false,
        message: s.minLength.message
      });
      r.dirty();
    }
    if (s.maxLength !== null && n.data.length > s.maxLength.value) {
      h(n, {
        code: f.too_big,
        maximum: s.maxLength.value,
        type: "array",
        inclusive: true,
        exact: false,
        message: s.maxLength.message
      });
      r.dirty();
    }
    if (n.common.async) {
      return Promise.all([...n.data].map((a, o) => s.type._parseAsync(new te(n, a, n.path, o)))).then(a => P.mergeArray(r, a));
    }
    const i = [...n.data].map((a, o) => s.type._parseSync(new te(n, a, n.path, o)));
    return P.mergeArray(r, i);
  }
  get element() {
    return this._def.type;
  }
  min(e, n) {
    return new U({
      ...this._def,
      minLength: {
        value: e,
        message: _.toString(n)
      }
    });
  }
  max(e, n) {
    return new U({
      ...this._def,
      maxLength: {
        value: e,
        message: _.toString(n)
      }
    });
  }
  length(e, n) {
    return new U({
      ...this._def,
      exactLength: {
        value: e,
        message: _.toString(n)
      }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
U.create = (t, e) => new U({
  type: t,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: v.ZodArray,
  ...S(e)
});
function le(t) {
  if (t instanceof $) {
    const e = {};
    for (const n in t.shape) {
      const r = t.shape[n];
      e[n] = K.create(le(r));
    }
    return new $({
      ...t._def,
      shape: () => e
    });
  } else if (t instanceof U) {
    return new U({
      ...t._def,
      type: le(t.element)
    });
  } else if (t instanceof K) {
    return K.create(le(t.unwrap()));
  } else if (t instanceof be) {
    return be.create(le(t.unwrap()));
  } else if (t instanceof oe) {
    return oe.create(t.items.map(e => le(e)));
  } else {
    return t;
  }
}
class $ extends k {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null) {
      return this._cached;
    }
    const e = this._def.shape();
    const n = x.objectKeys(e);
    this._cached = {
      shape: e,
      keys: n
    };
    return this._cached;
  }
  _parse(e) {
    if (this._getType(e) !== m.object) {
      const u = this._getOrReturnCtx(e);
      h(u, {
        code: f.invalid_type,
        expected: m.object,
        received: u.parsedType
      });
      return b;
    }
    const {
      status: r,
      ctx: s
    } = this._processInputParams(e);
    const {
      shape: i,
      keys: a
    } = this._getCached();
    const o = [];
    if (!(this._def.catchall instanceof ne) || this._def.unknownKeys !== "strip") {
      for (const u in s.data) {
        if (!a.includes(u)) {
          o.push(u);
        }
      }
    }
    const c = [];
    for (const u of a) {
      const d = i[u];
      const l = s.data[u];
      c.push({
        key: {
          status: "valid",
          value: u
        },
        value: d._parse(new te(s, l, s.path, u)),
        alwaysSet: u in s.data
      });
    }
    if (this._def.catchall instanceof ne) {
      const u = this._def.unknownKeys;
      if (u === "passthrough") {
        for (const d of o) {
          c.push({
            key: {
              status: "valid",
              value: d
            },
            value: {
              status: "valid",
              value: s.data[d]
            }
          });
        }
      } else if (u === "strict") {
        if (o.length > 0) {
          h(s, {
            code: f.unrecognized_keys,
            keys: o
          });
          r.dirty();
        }
      } else if (u !== "strip") {
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
      }
    } else {
      const u = this._def.catchall;
      for (const d of o) {
        const l = s.data[d];
        c.push({
          key: {
            status: "valid",
            value: d
          },
          value: u._parse(new te(s, l, s.path, d)),
          alwaysSet: d in s.data
        });
      }
    }
    if (s.common.async) {
      return Promise.resolve().then(async () => {
        const u = [];
        for (const d of c) {
          const l = await d.key;
          const g = await d.value;
          u.push({
            key: l,
            value: g,
            alwaysSet: d.alwaysSet
          });
        }
        return u;
      }).then(u => P.mergeObjectSync(r, u));
    } else {
      return P.mergeObjectSync(r, c);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    _.errToObj;
    return new $({
      ...this._def,
      unknownKeys: "strict",
      ...(e !== undefined ? {
        errorMap: (n, r) => {
          var i;
          var a;
          const s = ((a = (i = this._def).errorMap) == null ? undefined : a.call(i, n, r).message) ?? r.defaultError;
          if (n.code === "unrecognized_keys") {
            return {
              message: _.errToObj(e).message ?? s
            };
          } else {
            return {
              message: s
            };
          }
        }
      } : {})
    });
  }
  strip() {
    return new $({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new $({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  extend(e) {
    return new $({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...e
      })
    });
  }
  merge(e) {
    return new $({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: v.ZodObject
    });
  }
  setKey(e, n) {
    return this.augment({
      [e]: n
    });
  }
  catchall(e) {
    return new $({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const n = {};
    for (const r of x.objectKeys(e)) {
      if (e[r] && this.shape[r]) {
        n[r] = this.shape[r];
      }
    }
    return new $({
      ...this._def,
      shape: () => n
    });
  }
  omit(e) {
    const n = {};
    for (const r of x.objectKeys(this.shape)) {
      if (!e[r]) {
        n[r] = this.shape[r];
      }
    }
    return new $({
      ...this._def,
      shape: () => n
    });
  }
  deepPartial() {
    return le(this);
  }
  partial(e) {
    const n = {};
    for (const r of x.objectKeys(this.shape)) {
      const s = this.shape[r];
      if (e && !e[r]) {
        n[r] = s;
      } else {
        n[r] = s.optional();
      }
    }
    return new $({
      ...this._def,
      shape: () => n
    });
  }
  required(e) {
    const n = {};
    for (const r of x.objectKeys(this.shape)) {
      if (e && !e[r]) {
        n[r] = this.shape[r];
      } else {
        let i = this.shape[r];
        while (i instanceof K) {
          i = i._def.innerType;
        }
        n[r] = i;
      }
    }
    return new $({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return Ss(x.objectKeys(this.shape));
  }
}
$.create = (t, e) => new $({
  shape: () => t,
  unknownKeys: "strip",
  catchall: ne.create(),
  typeName: v.ZodObject,
  ...S(e)
});
$.strictCreate = (t, e) => new $({
  shape: () => t,
  unknownKeys: "strict",
  catchall: ne.create(),
  typeName: v.ZodObject,
  ...S(e)
});
$.lazycreate = (t, e) => new $({
  shape: t,
  unknownKeys: "strip",
  catchall: ne.create(),
  typeName: v.ZodObject,
  ...S(e)
});
class Ke extends k {
  _parse(e) {
    const {
      ctx: n
    } = this._processInputParams(e);
    const r = this._def.options;
    function s(i) {
      for (const o of i) {
        if (o.result.status === "valid") {
          return o.result;
        }
      }
      for (const o of i) {
        if (o.result.status === "dirty") {
          n.common.issues.push(...o.ctx.common.issues);
          return o.result;
        }
      }
      const a = i.map(o => new q(o.ctx.common.issues));
      h(n, {
        code: f.invalid_union,
        unionErrors: a
      });
      return b;
    }
    if (n.common.async) {
      return Promise.all(r.map(async i => {
        const a = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await i._parseAsync({
            data: n.data,
            path: n.path,
            parent: a
          }),
          ctx: a
        };
      })).then(s);
    }
    {
      let i;
      const a = [];
      for (const c of r) {
        const u = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        };
        const d = c._parseSync({
          data: n.data,
          path: n.path,
          parent: u
        });
        if (d.status === "valid") {
          return d;
        }
        if (d.status === "dirty" && !i) {
          i = {
            result: d,
            ctx: u
          };
        }
        if (u.common.issues.length) {
          a.push(u.common.issues);
        }
      }
      if (i) {
        n.common.issues.push(...i.ctx.common.issues);
        return i.result;
      }
      const o = a.map(c => new q(c));
      h(n, {
        code: f.invalid_union,
        unionErrors: o
      });
      return b;
    }
  }
  get options() {
    return this._def.options;
  }
}
Ke.create = (t, e) => new Ke({
  options: t,
  typeName: v.ZodUnion,
  ...S(e)
});
function Pt(t, e) {
  const n = Y(t);
  const r = Y(e);
  if (t === e) {
    return {
      valid: true,
      data: t
    };
  }
  if (n === m.object && r === m.object) {
    const s = x.objectKeys(e);
    const i = x.objectKeys(t).filter(o => s.indexOf(o) !== -1);
    const a = {
      ...t,
      ...e
    };
    for (const o of i) {
      const c = Pt(t[o], e[o]);
      if (!c.valid) {
        return {
          valid: false
        };
      }
      a[o] = c.data;
    }
    return {
      valid: true,
      data: a
    };
  } else if (n === m.array && r === m.array) {
    if (t.length !== e.length) {
      return {
        valid: false
      };
    }
    const s = [];
    for (let i = 0; i < t.length; i++) {
      const a = t[i];
      const o = e[i];
      const c = Pt(a, o);
      if (!c.valid) {
        return {
          valid: false
        };
      }
      s.push(c.data);
    }
    return {
      valid: true,
      data: s
    };
  } else if (n === m.date && r === m.date && +t == +e) {
    return {
      valid: true,
      data: t
    };
  } else {
    return {
      valid: false
    };
  }
}
class Xe extends k {
  _parse(e) {
    const {
      status: n,
      ctx: r
    } = this._processInputParams(e);
    const s = (i, a) => {
      if (ur(i) || ur(a)) {
        return b;
      }
      const o = Pt(i.value, a.value);
      if (o.valid) {
        if (dr(i) || dr(a)) {
          n.dirty();
        }
        return {
          status: n.value,
          value: o.data
        };
      } else {
        h(r, {
          code: f.invalid_intersection_types
        });
        return b;
      }
    };
    if (r.common.async) {
      return Promise.all([this._def.left._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      }), this._def.right._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      })]).then(([i, a]) => s(i, a));
    } else {
      return s(this._def.left._parseSync({
        data: r.data,
        path: r.path,
        parent: r
      }), this._def.right._parseSync({
        data: r.data,
        path: r.path,
        parent: r
      }));
    }
  }
}
Xe.create = (t, e, n) => new Xe({
  left: t,
  right: e,
  typeName: v.ZodIntersection,
  ...S(n)
});
class oe extends k {
  _parse(e) {
    const {
      status: n,
      ctx: r
    } = this._processInputParams(e);
    if (r.parsedType !== m.array) {
      h(r, {
        code: f.invalid_type,
        expected: m.array,
        received: r.parsedType
      });
      return b;
    }
    if (r.data.length < this._def.items.length) {
      h(r, {
        code: f.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return b;
    }
    if (!this._def.rest && r.data.length > this._def.items.length) {
      h(r, {
        code: f.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      n.dirty();
    }
    const i = [...r.data].map((a, o) => {
      const c = this._def.items[o] || this._def.rest;
      if (c) {
        return c._parse(new te(r, a, r.path, o));
      } else {
        return null;
      }
    }).filter(a => !!a);
    if (r.common.async) {
      return Promise.all(i).then(a => P.mergeArray(n, a));
    } else {
      return P.mergeArray(n, i);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new oe({
      ...this._def,
      rest: e
    });
  }
}
oe.create = (t, e) => {
  if (!Array.isArray(t)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new oe({
    items: t,
    typeName: v.ZodTuple,
    rest: null,
    ...S(e)
  });
};
class yr extends k {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const {
      status: n,
      ctx: r
    } = this._processInputParams(e);
    if (r.parsedType !== m.map) {
      h(r, {
        code: f.invalid_type,
        expected: m.map,
        received: r.parsedType
      });
      return b;
    }
    const s = this._def.keyType;
    const i = this._def.valueType;
    const a = [...r.data.entries()].map(([o, c], u) => ({
      key: s._parse(new te(r, o, r.path, [u, "key"])),
      value: i._parse(new te(r, c, r.path, [u, "value"]))
    }));
    if (r.common.async) {
      const o = new Map();
      return Promise.resolve().then(async () => {
        for (const c of a) {
          const u = await c.key;
          const d = await c.value;
          if (u.status === "aborted" || d.status === "aborted") {
            return b;
          }
          if (u.status === "dirty" || d.status === "dirty") {
            n.dirty();
          }
          o.set(u.value, d.value);
        }
        return {
          status: n.value,
          value: o
        };
      });
    } else {
      const o = new Map();
      for (const c of a) {
        const u = c.key;
        const d = c.value;
        if (u.status === "aborted" || d.status === "aborted") {
          return b;
        }
        if (u.status === "dirty" || d.status === "dirty") {
          n.dirty();
        }
        o.set(u.value, d.value);
      }
      return {
        status: n.value,
        value: o
      };
    }
  }
}
yr.create = (t, e, n) => new yr({
  valueType: e,
  keyType: t,
  typeName: v.ZodMap,
  ...S(n)
});
class Ce extends k {
  _parse(e) {
    const {
      status: n,
      ctx: r
    } = this._processInputParams(e);
    if (r.parsedType !== m.set) {
      h(r, {
        code: f.invalid_type,
        expected: m.set,
        received: r.parsedType
      });
      return b;
    }
    const s = this._def;
    if (s.minSize !== null && r.data.size < s.minSize.value) {
      h(r, {
        code: f.too_small,
        minimum: s.minSize.value,
        type: "set",
        inclusive: true,
        exact: false,
        message: s.minSize.message
      });
      n.dirty();
    }
    if (s.maxSize !== null && r.data.size > s.maxSize.value) {
      h(r, {
        code: f.too_big,
        maximum: s.maxSize.value,
        type: "set",
        inclusive: true,
        exact: false,
        message: s.maxSize.message
      });
      n.dirty();
    }
    const i = this._def.valueType;
    function a(c) {
      const u = new Set();
      for (const d of c) {
        if (d.status === "aborted") {
          return b;
        }
        if (d.status === "dirty") {
          n.dirty();
        }
        u.add(d.value);
      }
      return {
        status: n.value,
        value: u
      };
    }
    const o = [...r.data.values()].map((c, u) => i._parse(new te(r, c, r.path, u)));
    if (r.common.async) {
      return Promise.all(o).then(c => a(c));
    } else {
      return a(o);
    }
  }
  min(e, n) {
    return new Ce({
      ...this._def,
      minSize: {
        value: e,
        message: _.toString(n)
      }
    });
  }
  max(e, n) {
    return new Ce({
      ...this._def,
      maxSize: {
        value: e,
        message: _.toString(n)
      }
    });
  }
  size(e, n) {
    return this.min(e, n).max(e, n);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Ce.create = (t, e) => new Ce({
  valueType: t,
  minSize: null,
  maxSize: null,
  typeName: v.ZodSet,
  ...S(e)
});
class br extends k {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const {
      ctx: n
    } = this._processInputParams(e);
    return this._def.getter()._parse({
      data: n.data,
      path: n.path,
      parent: n
    });
  }
}
br.create = (t, e) => new br({
  getter: t,
  typeName: v.ZodLazy,
  ...S(e)
});
class jt extends k {
  _parse(e) {
    if (e.data !== this._def.value) {
      const n = this._getOrReturnCtx(e);
      h(n, {
        received: n.data,
        code: f.invalid_literal,
        expected: this._def.value
      });
      return b;
    }
    return {
      status: "valid",
      value: e.data
    };
  }
  get value() {
    return this._def.value;
  }
}
jt.create = (t, e) => new jt({
  value: t,
  typeName: v.ZodLiteral,
  ...S(e)
});
function Ss(t, e) {
  return new ge({
    values: t,
    typeName: v.ZodEnum,
    ...S(e)
  });
}
class ge extends k {
  _parse(e) {
    if (typeof e.data != "string") {
      const n = this._getOrReturnCtx(e);
      const r = this._def.values;
      h(n, {
        expected: x.joinValues(r),
        received: n.parsedType,
        code: f.invalid_type
      });
      return b;
    }
    this._cache ||= new Set(this._def.values);
    if (!this._cache.has(e.data)) {
      const n = this._getOrReturnCtx(e);
      const r = this._def.values;
      h(n, {
        received: n.data,
        code: f.invalid_enum_value,
        options: r
      });
      return b;
    }
    return j(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const e = {};
    for (const n of this._def.values) {
      e[n] = n;
    }
    return e;
  }
  get Values() {
    const e = {};
    for (const n of this._def.values) {
      e[n] = n;
    }
    return e;
  }
  get Enum() {
    const e = {};
    for (const n of this._def.values) {
      e[n] = n;
    }
    return e;
  }
  extract(e, n = this._def) {
    return ge.create(e, {
      ...this._def,
      ...n
    });
  }
  exclude(e, n = this._def) {
    return ge.create(this.options.filter(r => !e.includes(r)), {
      ...this._def,
      ...n
    });
  }
}
ge.create = Ss;
class vr extends k {
  _parse(e) {
    const n = x.getValidEnumValues(this._def.values);
    const r = this._getOrReturnCtx(e);
    if (r.parsedType !== m.string && r.parsedType !== m.number) {
      const s = x.objectValues(n);
      h(r, {
        expected: x.joinValues(s),
        received: r.parsedType,
        code: f.invalid_type
      });
      return b;
    }
    this._cache ||= new Set(x.getValidEnumValues(this._def.values));
    if (!this._cache.has(e.data)) {
      const s = x.objectValues(n);
      h(r, {
        received: r.data,
        code: f.invalid_enum_value,
        options: s
      });
      return b;
    }
    return j(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
vr.create = (t, e) => new vr({
  values: t,
  typeName: v.ZodNativeEnum,
  ...S(e)
});
class Qe extends k {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const {
      ctx: n
    } = this._processInputParams(e);
    if (n.parsedType !== m.promise && n.common.async === false) {
      h(n, {
        code: f.invalid_type,
        expected: m.promise,
        received: n.parsedType
      });
      return b;
    }
    const r = n.parsedType === m.promise ? n.data : Promise.resolve(n.data);
    return j(r.then(s => this._def.type.parseAsync(s, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
Qe.create = (t, e) => new Qe({
  type: t,
  typeName: v.ZodPromise,
  ...S(e)
});
class ye extends k {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    if (this._def.schema._def.typeName === v.ZodEffects) {
      return this._def.schema.sourceType();
    } else {
      return this._def.schema;
    }
  }
  _parse(e) {
    const {
      status: n,
      ctx: r
    } = this._processInputParams(e);
    const s = this._def.effect || null;
    const i = {
      addIssue: a => {
        h(r, a);
        if (a.fatal) {
          n.abort();
        } else {
          n.dirty();
        }
      },
      get path() {
        return r.path;
      }
    };
    i.addIssue = i.addIssue.bind(i);
    if (s.type === "preprocess") {
      const a = s.transform(r.data, i);
      if (r.common.async) {
        return Promise.resolve(a).then(async o => {
          if (n.value === "aborted") {
            return b;
          }
          const c = await this._def.schema._parseAsync({
            data: o,
            path: r.path,
            parent: r
          });
          if (c.status === "aborted") {
            return b;
          } else if (c.status === "dirty" || n.value === "dirty") {
            return Te(c.value);
          } else {
            return c;
          }
        });
      }
      {
        if (n.value === "aborted") {
          return b;
        }
        const o = this._def.schema._parseSync({
          data: a,
          path: r.path,
          parent: r
        });
        if (o.status === "aborted") {
          return b;
        } else if (o.status === "dirty" || n.value === "dirty") {
          return Te(o.value);
        } else {
          return o;
        }
      }
    }
    if (s.type === "refinement") {
      const a = o => {
        const c = s.refinement(o, i);
        if (r.common.async) {
          return Promise.resolve(c);
        }
        if (c instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return o;
      };
      if (r.common.async === false) {
        const o = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (o.status === "aborted") {
          return b;
        } else {
          if (o.status === "dirty") {
            n.dirty();
          }
          a(o.value);
          return {
            status: n.value,
            value: o.value
          };
        }
      } else {
        return this._def.schema._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        }).then(o => o.status === "aborted" ? b : (o.status === "dirty" && n.dirty(), a(o.value).then(() => ({
          status: n.value,
          value: o.value
        }))));
      }
    }
    if (s.type === "transform") {
      if (r.common.async === false) {
        const a = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!_e(a)) {
          return b;
        }
        const o = s.transform(a.value, i);
        if (o instanceof Promise) {
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return {
          status: n.value,
          value: o
        };
      } else {
        return this._def.schema._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        }).then(a => _e(a) ? Promise.resolve(s.transform(a.value, i)).then(o => ({
          status: n.value,
          value: o
        })) : b);
      }
    }
    x.assertNever(s);
  }
}
ye.create = (t, e, n) => new ye({
  schema: t,
  typeName: v.ZodEffects,
  effect: e,
  ...S(n)
});
ye.createWithPreprocess = (t, e, n) => new ye({
  schema: e,
  effect: {
    type: "preprocess",
    transform: t
  },
  typeName: v.ZodEffects,
  ...S(n)
});
class K extends k {
  _parse(e) {
    if (this._getType(e) === m.undefined) {
      return j(undefined);
    } else {
      return this._def.innerType._parse(e);
    }
  }
  unwrap() {
    return this._def.innerType;
  }
}
K.create = (t, e) => new K({
  innerType: t,
  typeName: v.ZodOptional,
  ...S(e)
});
class be extends k {
  _parse(e) {
    if (this._getType(e) === m.null) {
      return j(null);
    } else {
      return this._def.innerType._parse(e);
    }
  }
  unwrap() {
    return this._def.innerType;
  }
}
be.create = (t, e) => new be({
  innerType: t,
  typeName: v.ZodNullable,
  ...S(e)
});
class Ft extends k {
  _parse(e) {
    const {
      ctx: n
    } = this._processInputParams(e);
    let r = n.data;
    if (n.parsedType === m.undefined) {
      r = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Ft.create = (t, e) => new Ft({
  innerType: t,
  typeName: v.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...S(e)
});
class Bt extends k {
  _parse(e) {
    const {
      ctx: n
    } = this._processInputParams(e);
    const r = {
      ...n,
      common: {
        ...n.common,
        issues: []
      }
    };
    const s = this._def.innerType._parse({
      data: r.data,
      path: r.path,
      parent: {
        ...r
      }
    });
    if (Ye(s)) {
      return s.then(i => ({
        status: "valid",
        value: i.status === "valid" ? i.value : this._def.catchValue({
          get error() {
            return new q(r.common.issues);
          },
          input: r.data
        })
      }));
    } else {
      return {
        status: "valid",
        value: s.status === "valid" ? s.value : this._def.catchValue({
          get error() {
            return new q(r.common.issues);
          },
          input: r.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Bt.create = (t, e) => new Bt({
  innerType: t,
  typeName: v.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...S(e)
});
class Er extends k {
  _parse(e) {
    if (this._getType(e) !== m.nan) {
      const r = this._getOrReturnCtx(e);
      h(r, {
        code: f.invalid_type,
        expected: m.nan,
        received: r.parsedType
      });
      return b;
    }
    return {
      status: "valid",
      value: e.data
    };
  }
}
Er.create = t => new Er({
  typeName: v.ZodNaN,
  ...S(t)
});
class td extends k {
  _parse(e) {
    const {
      ctx: n
    } = this._processInputParams(e);
    const r = n.data;
    return this._def.type._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class on extends k {
  _parse(e) {
    const {
      status: n,
      ctx: r
    } = this._processInputParams(e);
    if (r.common.async) {
      return (async () => {
        const i = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (i.status === "aborted") {
          return b;
        } else if (i.status === "dirty") {
          n.dirty();
          return Te(i.value);
        } else {
          return this._def.out._parseAsync({
            data: i.value,
            path: r.path,
            parent: r
          });
        }
      })();
    }
    {
      const s = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r
      });
      if (s.status === "aborted") {
        return b;
      } else if (s.status === "dirty") {
        n.dirty();
        return {
          status: "dirty",
          value: s.value
        };
      } else {
        return this._def.out._parseSync({
          data: s.value,
          path: r.path,
          parent: r
        });
      }
    }
  }
  static create(e, n) {
    return new on({
      in: e,
      out: n,
      typeName: v.ZodPipeline
    });
  }
}
class Ut extends k {
  _parse(e) {
    const n = this._def.innerType._parse(e);
    const r = s => {
      if (_e(s)) {
        s.value = Object.freeze(s.value);
      }
      return s;
    };
    if (Ye(n)) {
      return n.then(s => r(s));
    } else {
      return r(n);
    }
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ut.create = (t, e) => new Ut({
  innerType: t,
  typeName: v.ZodReadonly,
  ...S(e)
});
var v;
(function (t) {
  t.ZodString = "ZodString";
  t.ZodNumber = "ZodNumber";
  t.ZodNaN = "ZodNaN";
  t.ZodBigInt = "ZodBigInt";
  t.ZodBoolean = "ZodBoolean";
  t.ZodDate = "ZodDate";
  t.ZodSymbol = "ZodSymbol";
  t.ZodUndefined = "ZodUndefined";
  t.ZodNull = "ZodNull";
  t.ZodAny = "ZodAny";
  t.ZodUnknown = "ZodUnknown";
  t.ZodNever = "ZodNever";
  t.ZodVoid = "ZodVoid";
  t.ZodArray = "ZodArray";
  t.ZodObject = "ZodObject";
  t.ZodUnion = "ZodUnion";
  t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion";
  t.ZodIntersection = "ZodIntersection";
  t.ZodTuple = "ZodTuple";
  t.ZodRecord = "ZodRecord";
  t.ZodMap = "ZodMap";
  t.ZodSet = "ZodSet";
  t.ZodFunction = "ZodFunction";
  t.ZodLazy = "ZodLazy";
  t.ZodLiteral = "ZodLiteral";
  t.ZodEnum = "ZodEnum";
  t.ZodEffects = "ZodEffects";
  t.ZodNativeEnum = "ZodNativeEnum";
  t.ZodOptional = "ZodOptional";
  t.ZodNullable = "ZodNullable";
  t.ZodDefault = "ZodDefault";
  t.ZodCatch = "ZodCatch";
  t.ZodPromise = "ZodPromise";
  t.ZodBranded = "ZodBranded";
  t.ZodPipeline = "ZodPipeline";
  t.ZodReadonly = "ZodReadonly";
})(v ||= {});
const bt = J.create;
const nd = Lt.create;
ne.create;
U.create;
const rd = $.create;
const sd = Ke.create;
Xe.create;
oe.create;
const Sr = jt.create;
ge.create;
Qe.create;
K.create;
be.create;
const id = rd({
  isNestBuild: nd(),
  buildType: sd([Sr("dev"), Sr("prod")]),
  commitHash: bt(),
  commitTimestamp: bt(),
  appVersion: bt()
});
function ad() {
  const t = {
    commitHash: "df1d8a339dfabcf359af7144fe142b59ff7d9a0f",
    isNestBuild: false,
    commitTimestamp: "2026-07-10T21:55:12.000Z",
    buildType: "prod",
    appVersion: "1.20186.1"
  };
  const e = id.safeParse(t);
  if (e.success) {
    return e.data;
  } else {
    return {
      buildType: "prod",
      commitHash: "UNKNOWN",
      commitTimestamp: "",
      isNestBuild: false,
      appVersion: "0.0.0"
    };
  }
}
var kr = {};
const od = Object.fromEntries(["arch", "platform", "type", "versions"].map(t => [t, true]));
const cn = Object.fromEntries(Object.entries(process).filter(([t]) => od[t]));
cn.version = ad().appVersion;
cn.env = kr.CI ? {
  CI: kr.CI
} : {};
var cd = {};
const ks = $u(process.argv);
if (!ks && !cd.CI) {
  Ru();
}
I.contextBridge.exposeInMainWorld("process", cn);
I.contextBridge.exposeInMainWorld("desktopEssentialTelemetryDisabled", ks);
//# sourceMappingURL=quickWindow.js.map