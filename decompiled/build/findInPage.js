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
      t._sentryDebugIds[e] = "5e21ac33-d77b-492a-9a08-67cc69d66003";
      t._sentryDebugIdIdentifier = "sentry-dbid-5e21ac33-d77b-492a-9a08-67cc69d66003";
    }
  })();
} catch {}
const C = require("electron");
const D = require("electron/renderer");
function ks() {
  var t;
  if ("frameToken" in D.webFrame && D.webFrame.top && "frameToken" in D.webFrame.top) {
    return D.webFrame.top.frameToken === D.webFrame.frameToken;
  } else {
    return ((t = D.webFrame.top) == null ? undefined : t.routingId) === D.webFrame.routingId;
  }
}
const xs = {
  findInPage(t, e) {
    return C.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.internal.findInPage_$_FindInPage_$_findInPage", t, e);
  },
  stopFindInPage() {
    return C.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.internal.findInPage_$_FindInPage_$_stopFindInPage");
  },
  endFindSession() {
    return C.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.internal.findInPage_$_FindInPage_$_endFindSession");
  },
  onStepToMatch(t) {
    const e = (n, r) => t(r);
    C.ipcRenderer.on("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.internal.findInPage_$_FindInPage_$_stepToMatch", e);
    return () => {
      C.ipcRenderer.removeListener("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.internal.findInPage_$_FindInPage_$_stepToMatch", e);
    };
  },
  onFocusInput(t) {
    const e = n => t();
    C.ipcRenderer.on("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.internal.findInPage_$_FindInPage_$_focusInput", e);
    return () => {
      C.ipcRenderer.removeListener("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.internal.findInPage_$_FindInPage_$_focusInput", e);
    };
  },
  onBlurInput(t) {
    const e = n => t();
    C.ipcRenderer.on("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.internal.findInPage_$_FindInPage_$_blurInput", e);
    return () => {
      C.ipcRenderer.removeListener("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.internal.findInPage_$_FindInPage_$_blurInput", e);
    };
  }
};
const Is = t => {
  if (ks()) {
    t["claude.internal.findInPage"] = t["claude.internal.findInPage"] || {};
    t["claude.internal.findInPage"].FindInPage = xs;
  }
};
const Sr = {};
Is(Sr);
for (const [t, e] of Object.entries(Sr)) {
  C.contextBridge.exposeInMainWorld(t, e);
}
function Ts() {
  var e;
  let t;
  try {
    t = new URL(window.location.href);
  } catch {
    return false;
  }
  return !!("frameToken" in D.webFrame && D.webFrame.top && "frameToken" in D.webFrame.top ? D.webFrame.top.frameToken === D.webFrame.frameToken : ((e = D.webFrame.top) == null ? undefined : e.routingId) === D.webFrame.routingId) && ((t.origin === "null" || t.origin === null ? `${t.protocol}//${t.host}` : t.origin) === "https://claude.ai" || (t.origin === "null" || t.origin === null ? `${t.protocol}//${t.host}` : t.origin) === "https://preview.claude.ai" || (t.origin === "null" || t.origin === null ? `${t.protocol}//${t.host}` : t.origin) === "https://claude.com" || (t.origin === "null" || t.origin === null ? `${t.protocol}//${t.host}` : t.origin) === "https://preview.claude.com" || t.hostname === "localhost" || !!(t.origin === "null" || t.origin === null ? `${t.protocol}//${t.host}` : t.origin).endsWith(".ant.dev") || t.hostname === "localhost" || t.protocol === "file:" || (t.origin === "null" || t.origin === null ? `${t.protocol}//${t.host}` : t.origin) === "app://localhost");
}
const ws = {
  getInitialLocale() {
    return C.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.hybrid_$_DesktopIntl_$_getInitialLocale");
  },
  requestLocaleChange(t) {
    return C.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.hybrid_$_DesktopIntl_$_requestLocaleChange", t);
  },
  onLocaleChanged(t) {
    const e = (n, r, s) => t(r, s);
    C.ipcRenderer.on("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.hybrid_$_DesktopIntl_$_localeChanged", e);
    return () => {
      C.ipcRenderer.removeListener("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.hybrid_$_DesktopIntl_$_localeChanged", e);
    };
  }
};
const Rs = t => {
  if (Ts()) {
    t["claude.hybrid"] = t["claude.hybrid"] || {};
    t["claude.hybrid"].DesktopIntl = ws;
  }
};
const kr = {};
Rs(kr);
for (const [t, e] of Object.entries(kr)) {
  C.contextBridge.exposeInMainWorld(t, e);
}
const E = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const I = globalThis;
const se = "10.27.0";
function et() {
  tt(I);
  return I;
}
function tt(t) {
  const e = t.__SENTRY__ = t.__SENTRY__ || {};
  e.version = e.version || se;
  return e[se] = e[se] || {};
}
function ve(t, e, n = I) {
  const r = n.__SENTRY__ = n.__SENTRY__ || {};
  const s = r[se] = r[se] || {};
  return s[t] ||= e();
}
const Ns = ["debug", "info", "warn", "error", "log", "assert", "trace"];
const Cs = "Sentry Logger ";
const We = {};
function Ee(t) {
  if (!("console" in I)) {
    return t();
  }
  const e = I.console;
  const n = {};
  const r = Object.keys(We);
  r.forEach(s => {
    const i = We[s];
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
function Os() {
  Zt().enabled = true;
}
function $s() {
  Zt().enabled = false;
}
function xr() {
  return Zt().enabled;
}
function As(...t) {
  Bt("log", ...t);
}
function Ds(...t) {
  Bt("warn", ...t);
}
function Ps(...t) {
  Bt("error", ...t);
}
function Bt(t, ...e) {
  if (E && xr()) {
    Ee(() => {
      I.console[t](`${Cs}[${t}]:`, ...e);
    });
  }
}
function Zt() {
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
  enable: Os,
  disable: $s,
  isEnabled: xr,
  log: As,
  warn: Ds,
  error: Ps
};
const Ir = 50;
const X = "?";
const cn = /\(error: (.*)\)/;
const un = /captureMessage|captureException/;
function Tr(...t) {
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
      const u = cn.test(c) ? c.replace(cn, "$1") : c;
      if (!u.match(/\S*Error: /)) {
        for (const d of e) {
          const l = d(u);
          if (l) {
            i.push(l);
            break;
          }
        }
        if (i.length >= Ir + s) {
          break;
        }
      }
    }
    return wr(i.slice(s));
  };
}
function Ms(t) {
  if (Array.isArray(t)) {
    return Tr(...t);
  } else {
    return t;
  }
}
function wr(t) {
  if (!t.length) {
    return [];
  }
  const e = Array.from(t);
  if (/sentryWrapped/.test(Le(e).function || "")) {
    e.pop();
  }
  e.reverse();
  if (un.test(Le(e).function || "")) {
    e.pop();
    if (un.test(Le(e).function || "")) {
      e.pop();
    }
  }
  return e.slice(0, Ir).map(n => ({
    ...n,
    filename: n.filename || Le(e).filename,
    function: n.function || X
  }));
}
function Le(t) {
  return t[t.length - 1] || {};
}
const ct = "<anonymous>";
function Q(t) {
  try {
    if (!t || typeof t != "function") {
      return ct;
    } else {
      return t.name || ct;
    }
  } catch {
    return ct;
  }
}
function dn(t) {
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
function Rr(t) {
  if ("__v_isVNode" in t && t.__v_isVNode) {
    return "[VueVNode]";
  } else {
    return "[VueViewModel]";
  }
}
const Ze = {};
const ln = {};
function ce(t, e) {
  Ze[t] = Ze[t] || [];
  Ze[t].push(e);
}
function ue(t, e) {
  if (!ln[t]) {
    ln[t] = true;
    try {
      e();
    } catch (n) {
      if (E) {
        y.error(`Error while instrumenting ${t}`, n);
      }
    }
  }
}
function j(t, e) {
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
let ut = null;
function Ls(t) {
  const e = "error";
  ce(e, t);
  ue(e, Fs);
}
function Fs() {
  ut = I.onerror;
  I.onerror = function (t, e, n, r, s) {
    j("error", {
      column: r,
      error: s,
      line: n,
      msg: t,
      url: e
    });
    if (ut) {
      return ut.apply(this, arguments);
    } else {
      return false;
    }
  };
  I.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let dt = null;
function js(t) {
  const e = "unhandledrejection";
  ce(e, t);
  ue(e, Us);
}
function Us() {
  dt = I.onunhandledrejection;
  I.onunhandledrejection = function (t) {
    j("unhandledrejection", t);
    if (dt) {
      return dt.apply(this, arguments);
    } else {
      return true;
    }
  };
  I.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
const Nr = Object.prototype.toString;
function zt(t) {
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
function fn(t) {
  return Se(t, "DOMError");
}
function Bs(t) {
  return Se(t, "DOMException");
}
function H(t) {
  return Se(t, "String");
}
function Ht(t) {
  return typeof t == "object" && t !== null && "__sentry_template_string__" in t && "__sentry_template_values__" in t;
}
function nt(t) {
  return t === null || Ht(t) || typeof t != "object" && typeof t != "function";
}
function Te(t) {
  return Se(t, "Object");
}
function rt(t) {
  return typeof Event !== "undefined" && ee(t, Event);
}
function Zs(t) {
  return typeof Element !== "undefined" && ee(t, Element);
}
function zs(t) {
  return Se(t, "RegExp");
}
function $e(t) {
  return t != null && !!t.then && typeof t.then == "function";
}
function Hs(t) {
  return Te(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t;
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
function Vs(t) {
  return typeof Request !== "undefined" && ee(t, Request);
}
const Vt = I;
const Ws = 80;
function $r(t, e = {}) {
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
    const l = !Array.isArray(e) && e.maxStringLength || Ws;
    while (n && i++ < r && (u = qs(n, d), u !== "html" && (!(i > 1) || !(a + s.length * c + u.length >= l)))) {
      s.push(u);
      a += u.length;
      n = n.parentNode;
    }
    return s.reverse().join(o);
  } catch {
    return "<unknown>";
  }
}
function qs(t, e) {
  const n = t;
  const r = [];
  if (n == null || !n.tagName) {
    return "";
  }
  if (Vt.HTMLElement && n instanceof HTMLElement && n.dataset) {
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
function Wt() {
  try {
    return Vt.document.location.href;
  } catch {
    return "";
  }
}
function Gs(t) {
  if (!Vt.HTMLElement) {
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
function P(t, e, n) {
  if (!(e in t)) {
    return;
  }
  const r = t[e];
  if (typeof r != "function") {
    return;
  }
  const s = n(r);
  if (typeof s == "function") {
    Ar(s, r);
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
function Ar(t, e) {
  try {
    const n = e.prototype || {};
    t.prototype = e.prototype = n;
    ie(t, "__sentry_original__", e);
  } catch {}
}
function qt(t) {
  return t.__sentry_original__;
}
function Dr(t) {
  if (zt(t)) {
    return {
      message: t.message,
      name: t.name,
      stack: t.stack,
      ...hn(t)
    };
  }
  if (rt(t)) {
    const e = {
      type: t.type,
      target: pn(t.target),
      currentTarget: pn(t.currentTarget),
      ...hn(t)
    };
    if (typeof CustomEvent !== "undefined" && ee(t, CustomEvent)) {
      e.detail = t.detail;
    }
    return e;
  } else {
    return t;
  }
}
function pn(t) {
  try {
    if (Zs(t)) {
      return $r(t);
    } else {
      return Object.prototype.toString.call(t);
    }
  } catch {
    return "<unknown>";
  }
}
function hn(t) {
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
function Ys(t) {
  const e = Object.keys(Dr(t));
  e.sort();
  if (e[0]) {
    return e.join(", ");
  } else {
    return "[object has no keys]";
  }
}
function bt(t, e = 0) {
  if (typeof t != "string" || e === 0 || t.length <= e) {
    return t;
  } else {
    return `${t.slice(0, e)}...`;
  }
}
function mn(t, e) {
  if (!Array.isArray(t)) {
    return "";
  }
  const n = [];
  for (let r = 0; r < t.length; r++) {
    const s = t[r];
    try {
      if (Or(s)) {
        n.push(Rr(s));
      } else {
        n.push(String(s));
      }
    } catch {
      n.push("[value cannot be serialized]");
    }
  }
  return n.join(e);
}
function ze(t, e, n = false) {
  if (H(t)) {
    if (zs(e)) {
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
function st(t, e = [], n = false) {
  return e.some(r => ze(t, r, n));
}
function Js() {
  const t = I;
  return t.crypto || t.msCrypto;
}
let lt;
function Ks() {
  return Math.random() * 16;
}
function M(t = Js()) {
  try {
    if (t != null && t.randomUUID) {
      return t.randomUUID().replace(/-/g, "");
    }
  } catch {}
  lt ||= "10000000100040008000100000000000";
  return lt.replace(/[018]/g, e => (e ^ (Ks() & 15) >> e / 4).toString(16));
}
function Pr(t) {
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
  const r = Pr(t);
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
function vt(t, e, n) {
  const r = t.exception = t.exception || {};
  const s = r.values = r.values || [];
  const i = s[0] = s[0] || {};
  i.value ||= e || "";
  i.type ||= "Error";
}
function fe(t, e) {
  const n = Pr(t);
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
function _n(t) {
  if (Xs(t)) {
    return true;
  }
  try {
    ie(t, "__sentry_captured__", true);
  } catch {}
  return false;
}
function Xs(t) {
  try {
    return t.__sentry_captured__;
  } catch {}
}
const Mr = 1000;
function Ae() {
  return Date.now() / Mr;
}
function Qs() {
  const {
    performance: t
  } = I;
  if (t == null || !t.now || !t.timeOrigin) {
    return Ae;
  }
  const e = t.timeOrigin;
  return () => (e + t.now()) / Mr;
}
let gn;
function V() {
  return (gn ??= Qs())();
}
function ei(t) {
  const e = V();
  const n = {
    sid: M(),
    init: true,
    timestamp: e,
    started: e,
    duration: 0,
    status: "ok",
    errors: 0,
    ignoreDuration: false,
    toJSON: () => ni(n)
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
    t.sid = e.sid.length === 32 ? e.sid : M();
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
function ti(t, e) {
  let n = {};
  if (t.status === "ok") {
    n = {
      status: "exited"
    };
  }
  pe(t, n);
}
function ni(t) {
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
function yn() {
  return M();
}
function Lr() {
  return M().substring(16);
}
const Et = "_sentrySpan";
function bn(t, e) {
  if (e) {
    ie(t, Et, e);
  } else {
    delete t[Et];
  }
}
function vn(t) {
  return t[Et];
}
const ri = 100;
class W {
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
      traceId: yn(),
      sampleRand: Math.random()
    };
  }
  clone() {
    const e = new W();
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
    bn(e, vn(this));
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
    const r = n instanceof W ? n.getScopeData() : Te(n) ? e : undefined;
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
    bn(this, undefined);
    this._attachments = [];
    this.setPropagationContext({
      traceId: yn(),
      sampleRand: Math.random()
    });
    this._notifyScopeListeners();
    return this;
  }
  addBreadcrumb(e, n) {
    var i;
    const r = typeof n == "number" ? n : ri;
    if (r <= 0) {
      return this;
    }
    const s = {
      timestamp: Ae(),
      ...e,
      message: e.message ? bt(e.message, 2048) : e.message
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
      span: vn(this)
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
    const r = (n == null ? undefined : n.event_id) || M();
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
    const s = (r == null ? undefined : r.event_id) || M();
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
    const r = (n == null ? undefined : n.event_id) || M();
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
function si() {
  return ve("defaultCurrentScope", () => new W());
}
function ii() {
  return ve("defaultIsolationScope", () => new W());
}
class ai {
  constructor(e, n) {
    let r;
    if (e) {
      r = e;
    } else {
      r = new W();
    }
    let s;
    if (n) {
      s = n;
    } else {
      s = new W();
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
    if ($e(r)) {
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
  const t = et();
  const e = tt(t);
  return e.stack = e.stack || new ai(si(), ii());
}
function oi(t) {
  return he().withScope(t);
}
function ci(t, e) {
  const n = he();
  return n.withScope(() => {
    n.getStackTop().scope = t;
    return e(t);
  });
}
function En(t) {
  return he().withScope(() => t(he().getIsolationScope()));
}
function ui() {
  return {
    withIsolationScope: En,
    withScope: oi,
    withSetScope: ci,
    withSetIsolationScope: (t, e) => En(e),
    getCurrentScope: () => he().getScope(),
    getIsolationScope: () => he().getIsolationScope()
  };
}
function Gt(t) {
  const e = tt(t);
  if (e.acs) {
    return e.acs;
  } else {
    return ui();
  }
}
function Z() {
  const t = et();
  return Gt(t).getCurrentScope();
}
function de() {
  const t = et();
  return Gt(t).getIsolationScope();
}
function Yt() {
  return ve("globalScope", () => new W());
}
function di(...t) {
  const e = et();
  const n = Gt(e);
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
function O() {
  return Z().getClient();
}
function li(t) {
  const e = t.getPropagationContext();
  const {
    traceId: n,
    parentSpanId: r,
    propagationSpanId: s
  } = e;
  const i = {
    trace_id: n,
    span_id: s || Lr()
  };
  if (r) {
    i.parent_span_id = r;
  }
  return i;
}
const fi = "sentry.source";
const pi = "sentry.sample_rate";
const hi = "sentry.previous_trace_sample_rate";
const mi = "sentry.op";
const _i = "sentry.origin";
const Fr = "sentry.profile_id";
const jr = "sentry.exclusive_time";
const gi = 0;
const yi = 1;
const bi = "_sentryScope";
const vi = "_sentryIsolationScope";
function Ei(t) {
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
    scope: e[bi],
    isolationScope: Ei(e[vi])
  };
}
const Si = "sentry-";
const ki = /^sentry-/;
function xi(t) {
  const e = Ii(t);
  if (!e) {
    return;
  }
  const n = Object.entries(e).reduce((r, [s, i]) => {
    if (s.match(ki)) {
      const a = s.slice(Si.length);
      r[a] = i;
    }
    return r;
  }, {});
  if (Object.keys(n).length > 0) {
    return n;
  }
}
function Ii(t) {
  if (!!t && (!!H(t) || !!Array.isArray(t))) {
    if (Array.isArray(t)) {
      return t.reduce((e, n) => {
        const r = Sn(n);
        Object.entries(r).forEach(([s, i]) => {
          e[s] = i;
        });
        return e;
      }, {});
    } else {
      return Sn(t);
    }
  }
}
function Sn(t) {
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
const Ti = /^o(\d+)\./;
const wi = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function Ri(t) {
  return t === "http" || t === "https";
}
function Pe(t, e = false) {
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
function Ni(t) {
  const e = wi.exec(t);
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
  return Br({
    host: i,
    pass: s,
    path: c,
    projectId: u,
    port: a,
    protocol: n,
    publicKey: r
  });
}
function Br(t) {
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
function Ci(t) {
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
    if (Ri(r)) {
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
function Oi(t) {
  const e = t.match(Ti);
  if (e == null) {
    return undefined;
  } else {
    return e[1];
  }
}
function $i(t) {
  const e = t.getOptions();
  const {
    host: n
  } = t.getDsn() || {};
  let r;
  if (e.orgId) {
    r = String(e.orgId);
  } else if (n) {
    r = Oi(n);
  }
  return r;
}
function Ai(t) {
  const e = typeof t == "string" ? Ni(t) : Br(t);
  if (!!e && !!Ci(e)) {
    return e;
  }
}
function Di(t) {
  if (typeof t == "boolean") {
    return Number(t);
  }
  const e = typeof t == "string" ? parseFloat(t) : t;
  if (typeof e == "number" && !isNaN(e) && !(e < 0) && !(e > 1)) {
    return e;
  }
}
const Zr = 1;
let kn = false;
function Pi(t) {
  const {
    spanId: e,
    traceId: n,
    isRemote: r
  } = t.spanContext();
  const s = r ? e : Jt(t).parent_span_id;
  const i = Ur(t).scope;
  const a = r ? (i == null ? undefined : i.getPropagationContext().propagationSpanId) || Lr() : e;
  return {
    parent_span_id: s,
    span_id: a,
    trace_id: n
  };
}
function Mi(t) {
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
      sampled: r === Zr,
      attributes: i,
      ...s
    }));
  }
}
function xn(t) {
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
function Jt(t) {
  var r;
  if (Fi(t)) {
    return t.getSpanJSON();
  }
  const {
    spanId: e,
    traceId: n
  } = t.spanContext();
  if (Li(t)) {
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
      start_timestamp: xn(i),
      timestamp: xn(o) || undefined,
      status: Ui(c),
      op: s[mi],
      origin: s[_i],
      links: Mi(u)
    };
  }
  return {
    span_id: e,
    trace_id: n,
    start_timestamp: 0,
    data: {}
  };
}
function Li(t) {
  const e = t;
  return !!e.attributes && !!e.startTime && !!e.name && !!e.endTime && !!e.status;
}
function Fi(t) {
  return typeof t.getSpanJSON == "function";
}
function ji(t) {
  const {
    traceFlags: e
  } = t.spanContext();
  return e === Zr;
}
function Ui(t) {
  if (!!t && t.code !== gi) {
    if (t.code === yi) {
      return "ok";
    } else {
      return t.message || "internal_error";
    }
  }
}
const Bi = "_sentryRootSpan";
function zr(t) {
  return t[Bi] || t;
}
function Tn() {
  if (!kn) {
    Ee(() => {
      console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.");
    });
    kn = true;
  }
}
function Zi(t) {
  var n;
  if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) {
    return false;
  }
  const e = (n = O()) == null ? undefined : n.getOptions();
  return !!e && (e.tracesSampleRate != null || !!e.tracesSampler);
}
function wn(t) {
  y.log(`Ignoring span ${t.op} - ${t.description} because it matches \`ignoreSpans\`.`);
}
function Rn(t, e) {
  if (e == null || !e.length || !t.description) {
    return false;
  }
  for (const n of e) {
    if (Hi(n)) {
      if (ze(t.description, n)) {
        if (E) {
          wn(t);
        }
        return true;
      }
      continue;
    }
    if (!n.name && !n.op) {
      continue;
    }
    const r = n.name ? ze(t.description, n.name) : true;
    const s = n.op ? t.op && ze(t.op, n.op) : true;
    if (r && s) {
      if (E) {
        wn(t);
      }
      return true;
    }
  }
  return false;
}
function zi(t, e) {
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
function Hi(t) {
  return typeof t == "string" || t instanceof RegExp;
}
const Kt = "production";
const Vi = "_frozenDsc";
function Hr(t, e) {
  const n = e.getOptions();
  const {
    publicKey: r
  } = e.getDsn() || {};
  const s = {
    environment: n.environment || Kt,
    release: n.release,
    public_key: r,
    trace_id: t,
    org_id: $i(e)
  };
  e.emit("createDsc", s);
  return s;
}
function Wi(t, e) {
  const n = e.getPropagationContext();
  return n.dsc || Hr(n.traceId, t);
}
function qi(t) {
  var T;
  const e = O();
  if (!e) {
    return {};
  }
  const n = zr(t);
  const r = Jt(n);
  const s = r.data;
  const i = n.spanContext().traceState;
  const a = (i == null ? undefined : i.get("sentry.sample_rate")) ?? s[pi] ?? s[hi];
  function o(A) {
    if (typeof a == "number" || typeof a == "string") {
      A.sample_rate = `${a}`;
    }
    return A;
  }
  const c = n[Vi];
  if (c) {
    return o(c);
  }
  const u = i == null ? undefined : i.get("sentry.dsc");
  const d = u && xi(u);
  if (d) {
    return o(d);
  }
  const l = Hr(t.spanContext().traceId, e);
  const g = s[fi];
  const p = r.description;
  if (g !== "url" && p) {
    l.transaction = p;
  }
  if (Zi()) {
    l.sampled = String(ji(n));
    l.sample_rand = (i == null ? undefined : i.get("sentry.sample_rand")) ?? ((T = Ur(n).scope) == null ? undefined : T.getPropagationContext().sampleRand.toString());
  }
  o(l);
  e.emit("createDsc", l, n);
  return l;
}
function U(t, e = 100, n = Infinity) {
  try {
    return St("", t, e, n);
  } catch (r) {
    return {
      ERROR: `**non-serializable** (${r})`
    };
  }
}
function Vr(t, e = 3, n = 102400) {
  const r = U(t, e);
  if (Ki(r) > n) {
    return Vr(t, e - 1, n);
  } else {
    return r;
  }
}
function St(t, e, n = Infinity, r = Infinity, s = Xi()) {
  const [i, a] = s;
  if (e == null || ["boolean", "string"].includes(typeof e) || typeof e == "number" && Number.isFinite(e)) {
    return e;
  }
  const o = Gi(t, e);
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
      return St("", p, c - 1, r, s);
    } catch {}
  }
  const d = Array.isArray(e) ? [] : {};
  let l = 0;
  const g = Dr(e);
  for (const p in g) {
    if (!Object.prototype.hasOwnProperty.call(g, p)) {
      continue;
    }
    if (l >= r) {
      d[p] = "[MaxProperties ~]";
      break;
    }
    const T = g[p];
    d[p] = St(p, T, c - 1, r, s);
    l++;
  }
  a(e);
  return d;
}
function Gi(t, e) {
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
      return Rr(e);
    }
    if (Hs(e)) {
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
    const n = Yi(e);
    if (/^HTML(\w*)Element$/.test(n)) {
      return `[HTMLElement: ${n}]`;
    } else {
      return `[object ${n}]`;
    }
  } catch (n) {
    return `**non-serializable** (${n})`;
  }
}
function Yi(t) {
  const e = Object.getPrototypeOf(t);
  if (e != null && e.constructor) {
    return e.constructor.name;
  } else {
    return "null prototype";
  }
}
function Ji(t) {
  return ~-encodeURI(t).split(/%..|./).length;
}
function Ki(t) {
  return Ji(JSON.stringify(t));
}
function Xi() {
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
function Qi(t, e) {
  const [n, r] = t;
  return [n, [...r, e]];
}
function Nn(t, e) {
  const n = t[1];
  for (const r of n) {
    const s = r[0].type;
    if (e(r, s)) {
      return true;
    }
  }
  return false;
}
function kt(t) {
  const e = tt(I);
  if (e.encodePolyfill) {
    return e.encodePolyfill(t);
  } else {
    return new TextEncoder().encode(t);
  }
}
function ea(t) {
  const [e, n] = t;
  let r = JSON.stringify(e);
  function s(i) {
    if (typeof r == "string") {
      r = typeof i == "string" ? r + i : [kt(r), i];
    } else {
      r.push(typeof i == "string" ? kt(i) : i);
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
        c = JSON.stringify(U(o));
      }
      s(c);
    }
  }
  if (typeof r == "string") {
    return r;
  } else {
    return ta(r);
  }
}
function ta(t) {
  const e = t.reduce((s, i) => s + i.length, 0);
  const n = new Uint8Array(e);
  let r = 0;
  for (const s of t) {
    n.set(s, r);
    r += s.length;
  }
  return n;
}
function na(t) {
  const e = typeof t.data == "string" ? kt(t.data) : t.data;
  return [{
    type: "attachment",
    length: e.length,
    filename: t.filename,
    content_type: t.contentType,
    attachment_type: t.attachmentType
  }, e];
}
const ra = {
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
function Cn(t) {
  return ra[t];
}
function Wr(t) {
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
function sa(t, e, n, r) {
  var i;
  const s = (i = t.sdkProcessingMetadata) == null ? undefined : i.dynamicSamplingContext;
  return {
    event_id: t.event_id,
    sent_at: new Date().toISOString(),
    ...(e && {
      sdk: e
    }),
    ...(!!n && r && {
      dsn: Pe(r)
    }),
    ...(s && {
      trace: s
    })
  };
}
function ia(t, e) {
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
function aa(t, e, n, r) {
  const s = Wr(n);
  const i = {
    sent_at: new Date().toISOString(),
    ...(s && {
      sdk: s
    }),
    ...(!!r && e && {
      dsn: Pe(e)
    })
  };
  const a = "aggregates" in t ? [{
    type: "sessions"
  }, t] : [{
    type: "session"
  }, t.toJSON()];
  return ke(i, [a]);
}
function oa(t, e, n, r) {
  const s = Wr(n);
  const i = t.type && t.type !== "replay_event" ? t.type : "event";
  ia(t, n == null ? undefined : n.sdk);
  const a = sa(t, s, r, e);
  delete t.sdkProcessingMetadata;
  return ke(a, [[{
    type: i
  }, t]]);
}
const ft = 0;
const On = 1;
const $n = 2;
function it(t) {
  return new we(e => {
    e(t);
  });
}
function Xt(t) {
  return new we((e, n) => {
    n(t);
  });
}
class we {
  constructor(e) {
    this._state = ft;
    this._handlers = [];
    this._runExecutor(e);
  }
  then(e, n) {
    return new we((r, s) => {
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
    return new we((n, r) => {
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
    if (this._state === ft) {
      return;
    }
    const e = this._handlers.slice();
    this._handlers = [];
    e.forEach(n => {
      if (!n[0]) {
        if (this._state === On) {
          n[1](this._value);
        }
        if (this._state === $n) {
          n[2](this._value);
        }
        n[0] = true;
      }
    });
  }
  _runExecutor(e) {
    const n = (i, a) => {
      if (this._state === ft) {
        if ($e(a)) {
          a.then(r, s);
          return;
        }
        this._state = i;
        this._value = a;
        this._executeHandlers();
      }
    };
    const r = i => {
      n(On, i);
    };
    const s = i => {
      n($n, i);
    };
    try {
      e(r, s);
    } catch (i) {
      s(i);
    }
  }
}
function ca(t, e, n, r = 0) {
  try {
    const s = xt(e, n, t, r);
    if ($e(s)) {
      return s;
    } else {
      return it(s);
    }
  } catch (s) {
    return Xt(s);
  }
}
function xt(t, e, n, r) {
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
  if ($e(i)) {
    return i.then(a => xt(a, e, n, r + 1));
  } else {
    return xt(i, e, n, r + 1);
  }
}
function ua(t, e) {
  const {
    fingerprint: n,
    span: r,
    breadcrumbs: s,
    sdkProcessingMetadata: i
  } = e;
  da(t, e);
  if (r) {
    pa(t, r);
  }
  ha(t, n);
  la(t, s);
  fa(t, i);
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
    span: T
  } = e;
  Fe(t, "extra", n);
  Fe(t, "tags", r);
  Fe(t, "user", s);
  Fe(t, "contexts", i);
  t.sdkProcessingMetadata = De(t.sdkProcessingMetadata, o, 2);
  if (a) {
    t.level = a;
  }
  if (p) {
    t.transactionName = p;
  }
  if (T) {
    t.span = T;
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
function Fe(t, e, n) {
  t[e] = De(t[e], n, 1);
}
function da(t, e) {
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
function la(t, e) {
  const n = [...(t.breadcrumbs || []), ...e];
  t.breadcrumbs = n.length ? n : undefined;
}
function fa(t, e) {
  t.sdkProcessingMetadata = {
    ...t.sdkProcessingMetadata,
    ...e
  };
}
function pa(t, e) {
  t.contexts = {
    trace: Pi(e),
    ...t.contexts
  };
  t.sdkProcessingMetadata = {
    dynamicSamplingContext: qi(e),
    ...t.sdkProcessingMetadata
  };
  const n = zr(e);
  const r = Jt(n).description;
  if (r && !t.transaction && t.type === "transaction") {
    t.transaction = r;
  }
}
function ha(t, e) {
  t.fingerprint = t.fingerprint ? Array.isArray(t.fingerprint) ? t.fingerprint : [t.fingerprint] : [];
  if (e) {
    t.fingerprint = t.fingerprint.concat(e);
  }
  if (!t.fingerprint.length) {
    delete t.fingerprint;
  }
}
let z;
let An;
let Dn;
let G;
function ma(t) {
  const e = I._sentryDebugIds;
  const n = I._debugIds;
  if (!e && !n) {
    return {};
  }
  const r = e ? Object.keys(e) : [];
  const s = n ? Object.keys(n) : [];
  if (G && r.length === An && s.length === Dn) {
    return G;
  }
  An = r.length;
  Dn = s.length;
  G = {};
  z ||= {};
  const i = (a, o) => {
    for (const c of a) {
      const u = o[c];
      const d = z == null ? undefined : z[c];
      if (d && G && u) {
        G[d[0]] = u;
        if (z) {
          z[c] = [d[0], u];
        }
      } else if (u) {
        const l = t(c);
        for (let g = l.length - 1; g >= 0; g--) {
          const p = l[g];
          const T = p == null ? undefined : p.filename;
          if (T && G && z) {
            G[T] = u;
            z[c] = [T, u];
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
function _a(t, e, n, r, s, i) {
  const {
    normalizeDepth: a = 3,
    normalizeMaxBreadth: o = 1000
  } = t;
  const c = {
    ...e,
    event_id: e.event_id || n.event_id || M(),
    timestamp: e.timestamp || Ae()
  };
  const u = n.integrations || t.integrations.map(N => N.name);
  ga(c, t);
  va(c, u);
  if (s) {
    s.emit("applyFrameMetadata", e);
  }
  if (e.type === undefined) {
    ya(c, t.stackParser);
  }
  const d = Sa(r, n.captureContext);
  if (n.mechanism) {
    fe(c, n.mechanism);
  }
  const l = s ? s.getEventProcessors() : [];
  const g = Yt().getScopeData();
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
  ua(c, g);
  const T = [...l, ...g.eventProcessors];
  return ca(T, c, n).then(N => {
    if (N) {
      ba(N);
    }
    if (typeof a == "number" && a > 0) {
      return Ea(N, a, o);
    } else {
      return N;
    }
  });
}
function ga(t, e) {
  var o;
  var c;
  const {
    environment: n,
    release: r,
    dist: s,
    maxValueLength: i
  } = e;
  t.environment = t.environment || n || Kt;
  if (!t.release && r) {
    t.release = r;
  }
  if (!t.dist && s) {
    t.dist = s;
  }
  const a = t.request;
  if (a != null && a.url && i) {
    a.url = bt(a.url, i);
  }
  if (i) {
    if ((c = (o = t.exception) == null ? undefined : o.values) != null) {
      c.forEach(u => {
        u.value &&= bt(u.value, i);
      });
    }
  }
}
function ya(t, e) {
  var r;
  var s;
  const n = ma(e);
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
function ba(t) {
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
function va(t, e) {
  if (e.length > 0) {
    t.sdk = t.sdk || {};
    t.sdk.integrations = [...(t.sdk.integrations || []), ...e];
  }
}
function Ea(t, e, n) {
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
          data: U(a.data, e, n)
        })
      }))
    }),
    ...(t.user && {
      user: U(t.user, e, n)
    }),
    ...(t.contexts && {
      contexts: U(t.contexts, e, n)
    }),
    ...(t.extra && {
      extra: U(t.extra, e, n)
    })
  };
  if ((s = t.contexts) != null && s.trace && r.contexts) {
    r.contexts.trace = t.contexts.trace;
    if (t.contexts.trace.data) {
      r.contexts.trace.data = U(t.contexts.trace.data, e, n);
    }
  }
  if (t.spans) {
    r.spans = t.spans.map(a => ({
      ...a,
      ...(a.data && {
        data: U(a.data, e, n)
      })
    }));
  }
  if ((i = t.contexts) != null && i.flags && r.contexts) {
    r.contexts.flags = U(t.contexts.flags, 3, n);
  }
  return r;
}
function Sa(t, e) {
  if (!e) {
    return t;
  }
  const n = t ? t.clone() : new W();
  n.update(e);
  return n;
}
function ka(t, e) {
  return Z().captureException(t, undefined);
}
function qr(t, e) {
  return Z().captureEvent(t, e);
}
function Pn(t) {
  const e = de();
  const n = Z();
  const {
    userAgent: r
  } = I.navigator || {};
  const s = ei({
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
  Gr();
  e.setSession(s);
  return s;
}
function Gr() {
  const t = de();
  const n = Z().getSession() || t.getSession();
  if (n) {
    ti(n);
  }
  Yr();
  t.setSession();
}
function Yr() {
  const t = de();
  const e = O();
  const n = t.getSession();
  if (n && e) {
    e.captureSession(n);
  }
}
function Mn(t = false) {
  if (t) {
    Gr();
    return;
  }
  Yr();
}
const xa = "7";
function Ia(t) {
  const e = t.protocol ? `${t.protocol}:` : "";
  const n = t.port ? `:${t.port}` : "";
  return `${e}//${t.host}${n}${t.path ? `/${t.path}` : ""}/api/`;
}
function Ta(t) {
  return `${Ia(t)}${t.projectId}/envelope/`;
}
function wa(t, e) {
  const n = {
    sentry_version: xa
  };
  if (t.publicKey) {
    n.sentry_key = t.publicKey;
  }
  if (e) {
    n.sentry_client = `${e.name}/${e.version}`;
  }
  return new URLSearchParams(n).toString();
}
function Ra(t, e, n) {
  return e || `${Ta(t)}?${wa(t, n)}`;
}
const Ln = [];
function Na(t) {
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
function Ca(t) {
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
  return Na(r);
}
function Oa(t, e) {
  const n = {};
  e.forEach(r => {
    if (r) {
      Jr(t, r, n);
    }
  });
  return n;
}
function Fn(t, e) {
  for (const n of e) {
    if (n != null && n.afterAllSetup) {
      n.afterAllSetup(t);
    }
  }
}
function Jr(t, e, n) {
  if (n[e.name]) {
    if (E) {
      y.log(`Integration skipped because it was already installed: ${e.name}`);
    }
    return;
  }
  n[e.name] = e;
  if (!Ln.includes(e.name) && typeof e.setupOnce == "function") {
    e.setupOnce();
    Ln.push(e.name);
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
function $a(t) {
  return [{
    type: "log",
    item_count: t.length,
    content_type: "application/vnd.sentry.items.log+json"
  }, {
    items: t
  }];
}
function Aa(t, e, n, r) {
  const s = {};
  if (e != null && e.sdk) {
    s.sdk = {
      name: e.sdk.name,
      version: e.sdk.version
    };
  }
  if (n && r) {
    s.dsn = Pe(r);
  }
  return ke(s, [$a(t)]);
}
function Kr(t, e) {
  const n = e ?? Da(t) ?? [];
  if (n.length === 0) {
    return;
  }
  const r = t.getOptions();
  const s = Aa(n, r._metadata, r.tunnel, t.getDsn());
  Xr().set(t, []);
  t.emit("flushLogs");
  t.sendEnvelope(s);
}
function Da(t) {
  return Xr().get(t);
}
function Xr() {
  return ve("clientToLogBufferMap", () => new WeakMap());
}
function Pa(t) {
  return [{
    type: "trace_metric",
    item_count: t.length,
    content_type: "application/vnd.sentry.items.trace-metric+json"
  }, {
    items: t
  }];
}
function Ma(t, e, n, r) {
  const s = {};
  if (e != null && e.sdk) {
    s.sdk = {
      name: e.sdk.name,
      version: e.sdk.version
    };
  }
  if (n && r) {
    s.dsn = Pe(r);
  }
  return ke(s, [Pa(t)]);
}
function Qr(t, e) {
  const n = e ?? La(t) ?? [];
  if (n.length === 0) {
    return;
  }
  const r = t.getOptions();
  const s = Ma(n, r._metadata, r.tunnel, t.getDsn());
  es().set(t, []);
  t.emit("flushMetrics");
  t.sendEnvelope(s);
}
function La(t) {
  return es().get(t);
}
function es() {
  return ve("clientToMetricBufferMap", () => new WeakMap());
}
const Qt = Symbol.for("SentryBufferFullError");
function en(t = 100) {
  const e = new Set();
  function n() {
    return e.size < t;
  }
  function r(a) {
    e.delete(a);
  }
  function s(a) {
    if (!n()) {
      return Xt(Qt);
    }
    const o = a();
    e.add(o);
    o.then(() => r(o), () => r(o));
    return o;
  }
  function i(a) {
    if (!e.size) {
      return it(true);
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
const Fa = 60000;
function ja(t, e = Date.now()) {
  const n = parseInt(`${t}`, 10);
  if (!isNaN(n)) {
    return n * 1000;
  }
  const r = Date.parse(`${t}`);
  if (isNaN(r)) {
    return Fa;
  } else {
    return r - e;
  }
}
function Ua(t, e) {
  return t[e] || t.all || 0;
}
function Ba(t, e, n = Date.now()) {
  return Ua(t, e) > n;
}
function Za(t, {
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
    s.all = r + ja(a, r);
  } else if (e === 429) {
    s.all = r + 60000;
  }
  return s;
}
const ts = 64;
function ns(t, e, n = en(t.bufferSize || ts)) {
  let r = {};
  const s = a => n.drain(a);
  function i(a) {
    const o = [];
    Nn(a, (l, g) => {
      const p = Cn(g);
      if (Ba(r, p)) {
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
      Nn(c, (g, p) => {
        t.recordDroppedEvent(l, Cn(p));
      });
    };
    const d = () => e({
      body: ea(c)
    }).then(l => {
      if (l.statusCode !== undefined && (l.statusCode < 200 || l.statusCode >= 300) && E) {
        y.warn(`Sentry responded with status code ${l.statusCode} to sent event.`);
      }
      r = Za(r, l);
      return l;
    }, l => {
      u("network_error");
      if (E) {
        y.error("Encountered error running transport request:", l);
      }
      throw l;
    });
    return n.add(d).then(l => l, l => {
      if (l === Qt) {
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
function za(t, e, n) {
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
function rs(t) {
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
function Ha(t) {
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
    exclusive_time: a == null ? undefined : a[jr],
    measurements: t.measurements,
    is_segment: true
  };
}
function Va(t) {
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
            [jr]: t.exclusive_time
          })
        }
      }
    },
    measurements: t.measurements
  };
}
const jn = "Not capturing exception because it's already been captured.";
const Un = "Discarded session because of missing or non-string release";
const ss = Symbol.for("SentryInternalError");
const is = Symbol.for("SentryDoNotSendEventError");
const Wa = 5000;
function He(t) {
  return {
    message: t,
    [ss]: true
  };
}
function pt(t) {
  return {
    message: t,
    [is]: true
  };
}
function Bn(t) {
  return !!t && typeof t == "object" && ss in t;
}
function Zn(t) {
  return !!t && typeof t == "object" && is in t;
}
function zn(t, e, n, r, s) {
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
      }, Wa);
    }
  });
  t.on("flush", () => {
    s(t);
  });
}
class qa {
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
    this._promiseBuffer = en(((r = e.transportOptions) == null ? undefined : r.bufferSize) ?? ts);
    if (e.dsn) {
      this._dsn = Ai(e.dsn);
    } else if (E) {
      y.warn("No DSN provided, client will not send events.");
    }
    if (this._dsn) {
      const a = Ra(this._dsn, e.tunnel, e._metadata ? e._metadata.sdk : undefined);
      this._transport = e.transport({
        tunnel: this._options.tunnel,
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...e.transportOptions,
        url: a
      });
    }
    this._options.enableLogs = this._options.enableLogs ?? ((s = this._options._experiments) == null ? undefined : s.enableLogs);
    if (this._options.enableLogs) {
      zn(this, "afterCaptureLog", "flushLogs", Ka, Kr);
    }
    if (this._options.enableMetrics ?? ((i = this._options._experiments) == null ? undefined : i.enableMetrics) ?? true) {
      zn(this, "afterCaptureMetric", "flushMetrics", Ja, Qr);
    }
  }
  captureException(e, n, r) {
    const s = M();
    if (_n(e)) {
      if (E) {
        y.log(jn);
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
      event_id: M(),
      ...r
    };
    const a = Ht(e) ? e : String(e);
    const o = nt(e);
    const c = o ? this.eventFromMessage(a, n, i) : this.eventFromException(e, i);
    this._process(() => c.then(u => this._captureEvent(u, i, s)), o ? "unknown" : "error");
    return i.event_id;
  }
  captureEvent(e, n, r) {
    const s = M();
    if (n != null && n.originalException && _n(n.originalException)) {
      if (E) {
        y.log(jn);
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
    const u = Hn(e.type);
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
    Jr(this, e, this._integrations);
    if (!n) {
      Fn(this, [e]);
    }
  }
  sendEvent(e, n = {}) {
    this.emit("beforeSendEvent", e, n);
    let r = oa(e, this._dsn, this._options._metadata, this._options.tunnel);
    for (const s of n.attachments || []) {
      r = Qi(r, na(s));
    }
    this.sendEnvelope(r).then(s => this.emit("afterSendEvent", e, s));
  }
  sendSession(e) {
    const {
      release: n,
      environment: r = Kt
    } = this._options;
    if ("aggregates" in e) {
      const i = e.attrs || {};
      if (!i.release && !n) {
        if (E) {
          y.warn(Un);
        }
        return;
      }
      i.release = i.release || n;
      i.environment = i.environment || r;
      e.attrs = i;
    } else {
      if (!e.release && !n) {
        if (E) {
          y.warn(Un);
        }
        return;
      }
      e.release = e.release || n;
      e.environment = e.environment || r;
    }
    this.emit("beforeSendSession", e);
    const s = aa(e, this._dsn, this._options._metadata, this._options.tunnel);
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
    this._integrations = Oa(this, e);
    Fn(this, e);
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
    return _a(i, e, n, r, this, s).then(o => {
      if (o === null) {
        return o;
      }
      this.emit("postprocessEvent", o, n);
      o.contexts = {
        trace: li(r),
        ...o.contexts
      };
      const c = Wi(this, r);
      o.sdkProcessingMetadata = {
        dynamicSamplingContext: c,
        ...o.sdkProcessingMetadata
      };
      return o;
    });
  }
  _captureEvent(e, n = {}, r = Z(), s = de()) {
    if (E && It(e)) {
      y.log(`Captured error event \`${rs(e)[0] || "<unknown>"}\``);
    }
    return this._processEvent(e, n, r, s).then(i => i.event_id, i => {
      if (E) {
        if (Zn(i)) {
          y.log(i.message);
        } else if (Bn(i)) {
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
    const o = as(e);
    const c = It(e);
    const d = `before send for type \`${e.type || "error"}\``;
    const l = typeof a === "undefined" ? undefined : Di(a);
    if (c && typeof l == "number" && Math.random() > l) {
      this.recordDroppedEvent("sample_rate", "error");
      return Xt(pt(`Discarding event because it's not included in the random sample (sampling rate = ${a})`));
    }
    const g = Hn(e.type);
    return this._prepareEvent(e, n, r, s).then(p => {
      if (p === null) {
        this.recordDroppedEvent("event_processor", g);
        throw pt("An event processor returned `null`, will not send event.");
      }
      if (n.data && n.data.__sentry__ === true) {
        return p;
      }
      const A = Ya(this, i, p, n);
      return Ga(A, d);
    }).then(p => {
      var N;
      if (p === null) {
        this.recordDroppedEvent("before_send", g);
        if (o) {
          const ot = 1 + (e.spans || []).length;
          this.recordDroppedEvent("before_send", "span", ot);
        }
        throw pt(`${d} returned \`null\`, will not send event.`);
      }
      const T = r.getSession() || s.getSession();
      if (c && T) {
        this._updateSessionFromEvent(T, p);
      }
      if (o) {
        const Me = ((N = p.sdkProcessingMetadata) == null ? undefined : N.spanCountBeforeProcessing) || 0;
        const ot = p.spans ? p.spans.length : 0;
        const on = Me - ot;
        if (on > 0) {
          this.recordDroppedEvent("before_send", "span", on);
        }
      }
      const A = p.transaction_info;
      if (o && A && p.transaction !== e.transaction) {
        const Me = "custom";
        p.transaction_info = {
          ...A,
          source: Me
        };
      }
      this.sendEvent(p, n);
      return p;
    }).then(null, p => {
      throw Zn(p) || Bn(p) ? p : (this.captureException(p, {
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
      if (r === Qt) {
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
    const n = za(e, this._options.tunnel && Pe(this._dsn));
    this.sendEnvelope(n);
  }
}
function Hn(t) {
  if (t === "replay_event") {
    return "replay";
  } else {
    return t || "error";
  }
}
function Ga(t, e) {
  const n = `${e} must return \`null\` or a valid event.`;
  if ($e(t)) {
    return t.then(r => {
      if (!Te(r) && r !== null) {
        throw He(n);
      }
      return r;
    }, r => {
      throw He(`${e} rejected with ${r}`);
    });
  }
  if (!Te(t) && t !== null) {
    throw He(n);
  }
  return t;
}
function Ya(t, e, n, r) {
  const {
    beforeSend: s,
    beforeSendTransaction: i,
    beforeSendSpan: a,
    ignoreSpans: o
  } = e;
  let c = n;
  if (It(c) && s) {
    return s(c, r);
  }
  if (as(c)) {
    if (a || o) {
      const u = Ha(c);
      if (o != null && o.length && Rn(u, o)) {
        return null;
      }
      if (a) {
        const d = a(u);
        if (d) {
          c = De(n, Va(d));
        } else {
          Tn();
        }
      }
      if (c.spans) {
        const d = [];
        const l = c.spans;
        for (const p of l) {
          if (o != null && o.length && Rn(p, o)) {
            zi(l, p);
            continue;
          }
          if (a) {
            const T = a(p);
            if (T) {
              d.push(T);
            } else {
              Tn();
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
function It(t) {
  return t.type === undefined;
}
function as(t) {
  return t.type === "transaction";
}
function Ja(t) {
  let e = 0;
  if (t.name) {
    e += t.name.length * 2;
  }
  e += 8;
  return e + os(t.attributes);
}
function Ka(t) {
  let e = 0;
  if (t.message) {
    e += t.message.length * 2;
  }
  return e + os(t.attributes);
}
function os(t) {
  if (!t) {
    return 0;
  }
  let e = 0;
  Object.values(t).forEach(n => {
    if (Array.isArray(n)) {
      e += n.length * Vn(n[0]);
    } else if (nt(n)) {
      e += Vn(n);
    } else {
      e += 100;
    }
  });
  return e;
}
function Vn(t) {
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
function Xa(t, e) {
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
  Qa(r);
  r.init();
  return r;
}
function Qa(t) {
  Z().setClient(t);
}
function ht(t) {
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
function eo(t) {
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
function to(t, e, n = [e], r = "npm") {
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
const no = 100;
function ae(t, e) {
  const n = O();
  const r = de();
  if (!n) {
    return;
  }
  const {
    beforeBreadcrumb: s = null,
    maxBreadcrumbs: i = no
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
let Wn;
const ro = "FunctionToString";
const qn = new WeakMap();
const so = () => ({
  name: ro,
  setupOnce() {
    Wn = Function.prototype.toString;
    try {
      Function.prototype.toString = function (...t) {
        const e = qt(this);
        const n = qn.has(O()) && e !== undefined ? e : this;
        return Wn.apply(n, t);
      };
    } catch {}
  },
  setup(t) {
    qn.set(t, true);
  }
});
const io = so;
const ao = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, /^Can't find variable: gmo$/, /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/, `can't redefine non-configurable property "solana"`, "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler", /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/, /^Java exception was raised during method invocation$/];
const oo = "EventFilters";
const co = (t = {}) => {
  let e;
  return {
    name: oo,
    setup(n) {
      const r = n.getOptions();
      e = Gn(t, r);
    },
    processEvent(n, r, s) {
      if (!e) {
        const i = s.getOptions();
        e = Gn(t, i);
      }
      if (lo(n, e)) {
        return null;
      } else {
        return n;
      }
    }
  };
};
const uo = (t = {}) => ({
  ...co(t),
  name: "InboundFilters"
});
function Gn(t = {}, e = {}) {
  return {
    allowUrls: [...(t.allowUrls || []), ...(e.allowUrls || [])],
    denyUrls: [...(t.denyUrls || []), ...(e.denyUrls || [])],
    ignoreErrors: [...(t.ignoreErrors || []), ...(e.ignoreErrors || []), ...(t.disableErrorDefaults ? [] : ao)],
    ignoreTransactions: [...(t.ignoreTransactions || []), ...(e.ignoreTransactions || [])]
  };
}
function lo(t, e) {
  if (t.type) {
    if (t.type === "transaction" && po(t, e.ignoreTransactions)) {
      if (E) {
        y.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${re(t)}`);
      }
      return true;
    }
  } else {
    if (fo(t, e.ignoreErrors)) {
      if (E) {
        y.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${re(t)}`);
      }
      return true;
    }
    if (go(t)) {
      if (E) {
        y.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${re(t)}`);
      }
      return true;
    }
    if (ho(t, e.denyUrls)) {
      if (E) {
        y.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${re(t)}.
Url: ${Ge(t)}`);
      }
      return true;
    }
    if (!mo(t, e.allowUrls)) {
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
function fo(t, e) {
  if (e != null && e.length) {
    return rs(t).some(n => st(n, e));
  } else {
    return false;
  }
}
function po(t, e) {
  if (e == null || !e.length) {
    return false;
  }
  const n = t.transaction;
  if (n) {
    return st(n, e);
  } else {
    return false;
  }
}
function ho(t, e) {
  if (e == null || !e.length) {
    return false;
  }
  const n = Ge(t);
  if (n) {
    return st(n, e);
  } else {
    return false;
  }
}
function mo(t, e) {
  if (e == null || !e.length) {
    return true;
  }
  const n = Ge(t);
  if (n) {
    return st(n, e);
  } else {
    return true;
  }
}
function _o(t = []) {
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
      return _o(s);
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
function go(t) {
  var e;
  var n;
  if ((n = (e = t.exception) == null ? undefined : e.values) != null && n.length) {
    return !t.message && !t.exception.values.some(r => r.stacktrace || r.type && r.type !== "Error" || r.value);
  } else {
    return false;
  }
}
function yo(t, e, n, r, s, i) {
  var o;
  if ((o = s.exception) == null || !o.values || !i || !ee(i.originalException, Error)) {
    return;
  }
  const a = s.exception.values.length > 0 ? s.exception.values[s.exception.values.length - 1] : undefined;
  if (a) {
    s.exception.values = Tt(t, e, r, i.originalException, n, s.exception.values, a, 0);
  }
}
function Tt(t, e, n, r, s, i, a, o) {
  if (i.length >= n + 1) {
    return i;
  }
  let c = [...i];
  if (ee(r[s], Error)) {
    Yn(a, o);
    const u = t(e, r[s]);
    const d = c.length;
    Jn(u, s, d, o);
    c = Tt(t, e, n, r[s], s, [u, ...c], u, d);
  }
  if (Array.isArray(r.errors)) {
    r.errors.forEach((u, d) => {
      if (ee(u, Error)) {
        Yn(a, o);
        const l = t(e, u);
        const g = c.length;
        Jn(l, `errors[${d}]`, g, o);
        c = Tt(t, e, n, u, s, [l, ...c], l, g);
      }
    });
  }
  return c;
}
function Yn(t, e) {
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
function Jn(t, e, n, r) {
  t.mechanism = {
    handled: true,
    ...t.mechanism,
    type: "chained",
    source: e,
    exception_id: n,
    parent_id: r
  };
}
function bo(t) {
  const e = "console";
  ce(e, t);
  ue(e, vo);
}
function vo() {
  if ("console" in I) {
    Ns.forEach(function (t) {
      if (t in I.console) {
        P(I.console, t, function (e) {
          We[t] = e;
          return function (...n) {
            j("console", {
              args: n,
              level: t
            });
            const s = We[t];
            if (s != null) {
              s.apply(I.console, n);
            }
          };
        });
      }
    });
  }
}
function Eo(t) {
  if (t === "warn") {
    return "warning";
  } else if (["fatal", "error", "warning", "log", "info", "debug"].includes(t)) {
    return t;
  } else {
    return "log";
  }
}
const So = "Dedupe";
const ko = () => {
  let t;
  return {
    name: So,
    processEvent(e) {
      if (e.type) {
        return e;
      }
      try {
        if (Io(e, t)) {
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
const xo = ko;
function Io(t, e) {
  if (e) {
    return !!To(t, e) || !!wo(t, e);
  } else {
    return false;
  }
}
function To(t, e) {
  const n = t.message;
  const r = e.message;
  return (!!n || !!r) && (!n || !!r) && (!!n || !r) && n === r && !!us(t, e) && !!cs(t, e);
}
function wo(t, e) {
  const n = Kn(e);
  const r = Kn(t);
  return !!n && !!r && n.type === r.type && n.value === r.value && !!us(t, e) && !!cs(t, e);
}
function cs(t, e) {
  let n = dn(t);
  let r = dn(e);
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
function us(t, e) {
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
function Kn(t) {
  var e;
  var n;
  if ((n = (e = t.exception) == null ? undefined : e.values) == null) {
    return undefined;
  } else {
    return n[0];
  }
}
function ds(t) {
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
const Re = I;
function Ro() {
  return "history" in Re && !!Re.history;
}
function No() {
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
function wt(t) {
  return t && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString());
}
function Co() {
  var n;
  if (typeof EdgeRuntime == "string") {
    return true;
  }
  if (!No()) {
    return false;
  }
  if (wt(Re.fetch)) {
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
        t = wt(r.contentWindow.fetch);
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
function Oo(t, e) {
  const n = "fetch";
  ce(n, t);
  ue(n, () => $o(undefined, e));
}
function $o(t, e = false) {
  if (!e || !!Co()) {
    P(I, "fetch", function (n) {
      return function (...r) {
        const s = new Error();
        const {
          method: i,
          url: a
        } = Ao(r);
        const o = {
          args: r,
          fetchData: {
            method: i,
            url: a
          },
          startTimestamp: V() * 1000,
          virtualError: s,
          headers: Do(r)
        };
        j("fetch", {
          ...o
        });
        return n.apply(I, r).then(async c => {
          j("fetch", {
            ...o,
            endTimestamp: V() * 1000,
            response: c
          });
          return c;
        }, c => {
          j("fetch", {
            ...o,
            endTimestamp: V() * 1000,
            error: c
          });
          if (zt(c) && c.stack === undefined) {
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
function Rt(t, e) {
  return !!t && typeof t == "object" && !!t[e];
}
function Xn(t) {
  if (typeof t == "string") {
    return t;
  } else if (t) {
    if (Rt(t, "url")) {
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
function Ao(t) {
  if (t.length === 0) {
    return {
      method: "GET",
      url: ""
    };
  }
  if (t.length === 2) {
    const [n, r] = t;
    return {
      url: Xn(n),
      method: Rt(r, "method") ? String(r.method).toUpperCase() : "GET"
    };
  }
  const e = t[0];
  return {
    url: Xn(e),
    method: Rt(e, "method") ? String(e.method).toUpperCase() : "GET"
  };
}
function Do(t) {
  const [e, n] = t;
  try {
    if (typeof n == "object" && n !== null && "headers" in n && n.headers) {
      return new Headers(n.headers);
    }
    if (Vs(e)) {
      return new Headers(e.headers);
    }
  } catch {}
}
function Po() {
  return "npm";
}
function Mo(t, e = false) {
  return !e && (!t || !!t.startsWith("/") || !!t.match(/^[A-Z]:/) || !!t.startsWith(".") || !!t.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//)) && t !== undefined && !t.includes("node_modules/");
}
function Lo(t) {
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
      const T = a[5] === "native";
      if (p != null && p.match(/\/[A-Z]:/)) {
        p = p.slice(1);
      }
      if (!p && a[5] && !T) {
        p = a[5];
      }
      return {
        filename: p ? decodeURI(p) : undefined,
        module: undefined,
        function: d,
        lineno: Qn(a[3]),
        colno: Qn(a[4]),
        in_app: Mo(p || "", T)
      };
    }
    if (s.match(e)) {
      return {
        filename: s
      };
    }
  };
}
function Fo(t) {
  return [90, Lo()];
}
function Qn(t) {
  return parseInt(t || "", 10) || undefined;
}
var er;
(function (t) {
  t[t.Classic = 1] = "Classic";
  t[t.Protocol = 2] = "Protocol";
  t[t.Both = 3] = "Both";
})(er ||= {});
function jo(t) {
  return {
    createUrl: e => `${t}://${e}/sentry_key`,
    urlMatches: function (e, n) {
      return e.startsWith(this.createUrl(n));
    },
    createKey: e => `${t}.${e}`,
    namespace: t
  };
}
const Uo = "sentry-electron-renderer-id";
function Bo(t) {
  var n;
  const e = jo(t);
  if ((n = window.__SENTRY_IPC__) != null && n[e.namespace]) {
    return window.__SENTRY_IPC__[e.namespace];
  }
  {
    y.log("IPC was not configured in preload script, falling back to custom protocol and fetch");
    const r = window.__SENTRY_RENDERER_ID__ = M();
    const s = {
      [Uo]: r
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
let je;
function ls(t = O()) {
  if (!t) {
    throw new Error("Could not find client, make sure to call Sentry.init before getIPC");
  }
  je ||= new WeakMap();
  const e = je.get(t);
  if (e) {
    return e;
  }
  const n = t.getOptions().ipcNamespace;
  const r = Bo(n);
  je.set(t, r);
  r.sendRendererStart();
  return r;
}
const w = I;
let Nt = 0;
function fs() {
  return Nt > 0;
}
function Zo() {
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
    if (qt(t)) {
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
      Zo();
      di(a => {
        a.addEventProcessor(o => {
          if (e.mechanism) {
            vt(o, undefined);
            fe(o, e.mechanism);
          }
          o.extra = {
            ...o.extra,
            arguments: s
          };
          return o;
        });
        ka(i);
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
  Ar(r, t);
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
function zo() {
  const t = Wt();
  const {
    referrer: e
  } = w.document || {};
  const {
    userAgent: n
  } = w.navigator || {};
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
function tn(t, e) {
  const n = nn(t, e);
  const r = {
    type: Go(e),
    value: Yo(e)
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
function Ho(t, e, n, r) {
  const s = O();
  const i = s == null ? undefined : s.getOptions().normalizeDepth;
  const a = ec(e);
  const o = {
    __serialized__: Vr(e, i)
  };
  if (a) {
    return {
      exception: {
        values: [tn(t, a)]
      },
      extra: o
    };
  }
  const c = {
    exception: {
      values: [{
        type: rt(e) ? e.constructor.name : r ? "UnhandledRejection" : "Error",
        value: Xo(e, {
          isUnhandledRejection: r
        })
      }]
    },
    extra: o
  };
  if (n) {
    const u = nn(t, n);
    if (u.length) {
      c.exception.values[0].stacktrace = {
        frames: u
      };
    }
  }
  return c;
}
function mt(t, e) {
  return {
    exception: {
      values: [tn(t, e)]
    }
  };
}
function nn(t, e) {
  const n = e.stacktrace || e.stack || "";
  const r = Wo(e);
  const s = qo(e);
  try {
    return t(n, r, s);
  } catch {}
  return [];
}
const Vo = /Minified React error #\d+;/i;
function Wo(t) {
  if (t && Vo.test(t.message)) {
    return 1;
  } else {
    return 0;
  }
}
function qo(t) {
  if (typeof t.framesToPop == "number") {
    return t.framesToPop;
  } else {
    return 0;
  }
}
function ps(t) {
  if (typeof WebAssembly !== "undefined" && typeof WebAssembly.Exception !== "undefined") {
    return t instanceof WebAssembly.Exception;
  } else {
    return false;
  }
}
function Go(t) {
  const e = t == null ? undefined : t.name;
  if (!e && ps(t)) {
    if (t.message && Array.isArray(t.message) && t.message.length == 2) {
      return t.message[0];
    } else {
      return "WebAssembly.Exception";
    }
  } else {
    return e;
  }
}
function Yo(t) {
  const e = t == null ? undefined : t.message;
  if (ps(t)) {
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
function Jo(t, e, n, r) {
  const s = (n == null ? undefined : n.syntheticException) || undefined;
  const i = rn(t, e, s, r);
  fe(i);
  i.level = "error";
  if (n != null && n.event_id) {
    i.event_id = n.event_id;
  }
  return it(i);
}
function Ko(t, e, n = "info", r, s) {
  const i = (r == null ? undefined : r.syntheticException) || undefined;
  const a = Ct(t, e, i, s);
  a.level = n;
  if (r != null && r.event_id) {
    a.event_id = r.event_id;
  }
  return it(a);
}
function rn(t, e, n, r, s) {
  let i;
  if (Cr(e) && e.error) {
    return mt(t, e.error);
  }
  if (fn(e) || Bs(e)) {
    const a = e;
    if ("stack" in e) {
      i = mt(t, e);
    } else {
      const o = a.name || (fn(a) ? "DOMError" : "DOMException");
      const c = a.message ? `${o}: ${a.message}` : o;
      i = Ct(t, c, n, r);
      vt(i, c);
    }
    if ("code" in a) {
      i.tags = {
        ...i.tags,
        "DOMException.code": `${a.code}`
      };
    }
    return i;
  }
  if (zt(e)) {
    return mt(t, e);
  } else if (Te(e) || rt(e)) {
    i = Ho(t, e, n, s);
    fe(i, {
      synthetic: true
    });
    return i;
  } else {
    i = Ct(t, e, n, r);
    vt(i, `${e}`);
    fe(i, {
      synthetic: true
    });
    return i;
  }
}
function Ct(t, e, n, r) {
  const s = {};
  if (r && n) {
    const i = nn(t, n);
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
  if (Ht(e)) {
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
function Xo(t, {
  isUnhandledRejection: e
}) {
  const n = Ys(t);
  const r = e ? "promise rejection" : "exception";
  if (Cr(t)) {
    return `Event \`ErrorEvent\` captured as ${r} with message \`${t.message}\``;
  } else if (rt(t)) {
    return `Event \`${Qo(t)}\` (type=${t.type}) captured as ${r}`;
  } else {
    return `Object captured as ${r} with keys: ${n}`;
  }
}
function Qo(t) {
  try {
    const e = Object.getPrototypeOf(t);
    if (e) {
      return e.constructor.name;
    } else {
      return undefined;
    }
  } catch {}
}
function ec(t) {
  for (const e in t) {
    if (Object.prototype.hasOwnProperty.call(t, e)) {
      const n = t[e];
      if (n instanceof Error) {
        return n;
      }
    }
  }
}
class tc extends qa {
  constructor(e) {
    var d;
    const n = nc(e);
    const r = w.SENTRY_SDK_SOURCE || Po();
    to(n, "browser", ["browser"], r);
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
    if (w.document && (i || a || u)) {
      w.document.addEventListener("visibilitychange", () => {
        if (w.document.visibilityState === "hidden") {
          if (i) {
            this._flushOutcomes();
          }
          if (a) {
            Kr(this);
          }
          if (u) {
            Qr(this);
          }
        }
      });
    }
    if (s) {
      this.on("beforeSendSession", eo);
    }
  }
  eventFromException(e, n) {
    return Jo(this._options.stackParser, e, n, this._options.attachStacktrace);
  }
  eventFromMessage(e, n = "info", r) {
    return Ko(this._options.stackParser, e, n, r, this._options.attachStacktrace);
  }
  _prepareEvent(e, n, r, s) {
    e.platform = e.platform || "javascript";
    return super._prepareEvent(e, n, r, s);
  }
}
function nc(t) {
  var e;
  return {
    release: typeof __SENTRY_RELEASE__ == "string" ? __SENTRY_RELEASE__ : (e = w.SENTRY_RELEASE) == null ? undefined : e.id,
    sendClientReports: true,
    parentSpanIsAlwaysRootSpan: true,
    ...t
  };
}
const rc = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const $ = I;
const sc = 1000;
let tr;
let Ot;
let $t;
function ic(t) {
  ce("dom", t);
  ue("dom", ac);
}
function ac() {
  if (!$.document) {
    return;
  }
  const t = j.bind(null, "dom");
  const e = nr(t, true);
  $.document.addEventListener("click", e, false);
  $.document.addEventListener("keypress", e, false);
  ["EventTarget", "Node"].forEach(n => {
    var i;
    var a;
    const s = (i = $[n]) == null ? undefined : i.prototype;
    if ((a = s == null ? undefined : s.hasOwnProperty) != null && a.call(s, "addEventListener")) {
      P(s, "addEventListener", function (o) {
        return function (c, u, d) {
          if (c === "click" || c == "keypress") {
            try {
              const l = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {};
              const g = l[c] = l[c] || {
                refCount: 0
              };
              if (!g.handler) {
                const p = nr(t);
                g.handler = p;
                o.call(this, c, p, d);
              }
              g.refCount++;
            } catch {}
          }
          return o.call(this, c, u, d);
        };
      });
      P(s, "removeEventListener", function (o) {
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
function oc(t) {
  if (t.type !== Ot) {
    return false;
  }
  try {
    if (!t.target || t.target._sentryId !== $t) {
      return false;
    }
  } catch {}
  return true;
}
function cc(t, e) {
  if (t !== "keypress") {
    return false;
  } else if (e != null && e.tagName) {
    return e.tagName !== "INPUT" && e.tagName !== "TEXTAREA" && !e.isContentEditable;
  } else {
    return true;
  }
}
function nr(t, e = false) {
  return n => {
    if (!n || n._sentryCaptured) {
      return;
    }
    const r = uc(n);
    if (cc(n.type, r)) {
      return;
    }
    ie(n, "_sentryCaptured", true);
    if (r && !r._sentryId) {
      ie(r, "_sentryId", M());
    }
    const s = n.type === "keypress" ? "input" : n.type;
    if (!oc(n)) {
      t({
        event: n,
        name: s,
        global: e
      });
      Ot = n.type;
      $t = r ? r._sentryId : undefined;
    }
    clearTimeout(tr);
    tr = $.setTimeout(() => {
      $t = undefined;
      Ot = undefined;
    }, sc);
  };
}
function uc(t) {
  try {
    return t.target;
  } catch {
    return null;
  }
}
let Ue;
function hs(t) {
  const e = "history";
  ce(e, t);
  ue(e, dc);
}
function dc() {
  $.addEventListener("popstate", () => {
    const e = $.location.href;
    const n = Ue;
    Ue = e;
    if (n === e) {
      return;
    }
    j("history", {
      from: n,
      to: e
    });
  });
  if (!Ro()) {
    return;
  }
  function t(e) {
    return function (...n) {
      const r = n.length > 2 ? n[2] : undefined;
      if (r) {
        const s = Ue;
        const i = lc(String(r));
        Ue = i;
        if (s === i) {
          return e.apply(this, n);
        }
        j("history", {
          from: s,
          to: i
        });
      }
      return e.apply(this, n);
    };
  }
  P($.history, "pushState", t);
  P($.history, "replaceState", t);
}
function lc(t) {
  try {
    return new URL(t, $.location.origin).toString();
  } catch {
    return t;
  }
}
const Ve = {};
function fc(t) {
  const e = Ve[t];
  if (e) {
    return e;
  }
  let n = $[t];
  if (wt(n)) {
    return Ve[t] = n.bind($);
  }
  const r = $.document;
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
      if (rc) {
        y.warn(`Could not create sandbox iframe for ${t} check, bailing to window.${t}: `, s);
      }
    }
  }
  return n && (Ve[t] = n.bind($));
}
function pc(t) {
  Ve[t] = undefined;
}
const xe = "__sentry_xhr_v3__";
function hc(t) {
  ce("xhr", t);
  ue("xhr", mc);
}
function mc() {
  if (!$.XMLHttpRequest) {
    return;
  }
  const t = XMLHttpRequest.prototype;
  t.open = new Proxy(t.open, {
    apply(e, n, r) {
      const s = new Error();
      const i = V() * 1000;
      const a = H(r[0]) ? r[0].toUpperCase() : undefined;
      const o = _c(r[1]);
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
          j("xhr", d);
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
          const T = d[xe];
          if (T && H(g) && H(p)) {
            T.request_headers[g.toLowerCase()] = p;
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
      j("xhr", i);
      return e.apply(n, r);
    }
  });
}
function _c(t) {
  if (H(t)) {
    return t;
  }
  try {
    return t.toString();
  } catch {}
}
const gc = 40;
function yc(t, e = fc("fetch")) {
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
      pc("fetch");
      throw c;
    } finally {
      n -= a;
      r--;
    }
  }
  return ns(t, s, en(t.bufferSize || gc));
}
const at = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const bc = 30;
const vc = 50;
function At(t, e, n, r) {
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
const Ec = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i;
const Sc = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
const kc = /\((\S*)(?::(\d+))(?::(\d+))\)/;
const xc = /at (.+?) ?\(data:(.+?),/;
const Ic = t => {
  const e = t.match(xc);
  if (e) {
    return {
      filename: `<data:${e[2]}>`,
      function: e[1]
    };
  }
  const n = Ec.exec(t);
  if (n) {
    const [, s, i, a] = n;
    return At(s, X, +i, +a);
  }
  const r = Sc.exec(t);
  if (r) {
    if (r[2] && r[2].indexOf("eval") === 0) {
      const o = kc.exec(r[2]);
      if (o) {
        r[2] = o[1];
        r[3] = o[2];
        r[4] = o[3];
      }
    }
    const [i, a] = _s(r[1] || X, r[2]);
    return At(a, i, r[3] ? +r[3] : undefined, r[4] ? +r[4] : undefined);
  }
};
const ms = [bc, Ic];
const Tc = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
const wc = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
const Rc = t => {
  const e = Tc.exec(t);
  if (e) {
    if (e[3] && e[3].indexOf(" > eval") > -1) {
      const i = wc.exec(e[3]);
      if (i) {
        e[1] = e[1] || "eval";
        e[3] = i[1];
        e[4] = i[2];
        e[5] = "";
      }
    }
    let r = e[3];
    let s = e[1] || X;
    [s, r] = _s(s, r);
    return At(r, s, e[4] ? +e[4] : undefined, e[5] ? +e[5] : undefined);
  }
};
const Nc = [vc, Rc];
const Cc = [ms, Nc];
const Oc = Tr(...Cc);
const _s = (t, e) => {
  const n = t.indexOf("safari-extension") !== -1;
  const r = t.indexOf("safari-web-extension") !== -1;
  if (n || r) {
    return [t.indexOf("@") !== -1 ? t.split("@")[0] : X, n ? `safari-extension:${e}` : `safari-web-extension:${e}`];
  } else {
    return [t, e];
  }
};
const Be = 1024;
const $c = "Breadcrumbs";
const Ac = (t = {}) => {
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
    name: $c,
    setup(n) {
      if (e.console) {
        bo(Lc(n));
      }
      if (e.dom) {
        ic(Mc(n, e.dom));
      }
      if (e.xhr) {
        hc(Fc(n));
      }
      if (e.fetch) {
        Oo(jc(n));
      }
      if (e.history) {
        hs(Uc(n));
      }
      if (e.sentry) {
        n.on("beforeSendEvent", Pc(n));
      }
    }
  };
};
const Dc = Ac;
function Pc(t) {
  return function (n) {
    if (O() === t) {
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
function Mc(t, e) {
  return function (r) {
    if (O() !== t) {
      return;
    }
    let s;
    let i;
    let a = typeof e == "object" ? e.serializeAttribute : undefined;
    let o = typeof e == "object" && typeof e.maxStringLength == "number" ? e.maxStringLength : undefined;
    if (o && o > Be) {
      if (at) {
        y.warn(`\`dom.maxStringLength\` cannot exceed ${Be}, but a value of ${o} was configured. Sentry will use ${Be} instead.`);
      }
      o = Be;
    }
    if (typeof a == "string") {
      a = [a];
    }
    try {
      const u = r.event;
      const d = Bc(u) ? u.target : u;
      s = $r(d, {
        keyAttrs: a,
        maxStringLength: o
      });
      i = Gs(d);
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
function Lc(t) {
  return function (n) {
    if (O() !== t) {
      return;
    }
    const r = {
      category: "console",
      data: {
        arguments: n.args,
        logger: "console"
      },
      level: Eo(n.level),
      message: mn(n.args, " ")
    };
    if (n.level === "assert") {
      if (n.args[0] === false) {
        r.message = `Assertion failed: ${mn(n.args.slice(1), " ") || "console.assert"}`;
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
function Fc(t) {
  return function (n) {
    if (O() !== t) {
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
      level: ds(c)
    };
    t.emit("beforeOutgoingRequestBreadcrumb", g, l);
    ae(g, l);
  };
}
function jc(t) {
  return function (n) {
    if (O() !== t) {
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
          level: ds(a.status_code)
        };
        t.emit("beforeOutgoingRequestBreadcrumb", c, o);
        ae(c, o);
      }
    }
  };
}
function Uc(t) {
  return function (n) {
    if (O() !== t) {
      return;
    }
    let r = n.from;
    let s = n.to;
    const i = ht(w.location.href);
    let a = r ? ht(r) : undefined;
    const o = ht(s);
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
function Bc(t) {
  return !!t && !!t.target;
}
const Zc = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
const zc = "BrowserApiErrors";
const Hc = (t = {}) => {
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
    name: zc,
    setupOnce() {
      if (e.setTimeout) {
        P(w, "setTimeout", rr);
      }
      if (e.setInterval) {
        P(w, "setInterval", rr);
      }
      if (e.requestAnimationFrame) {
        P(w, "requestAnimationFrame", Wc);
      }
      if (e.XMLHttpRequest && "XMLHttpRequest" in w) {
        P(XMLHttpRequest.prototype, "send", qc);
      }
      const n = e.eventTarget;
      if (n) {
        (Array.isArray(n) ? n : Zc).forEach(s => Gc(s, e));
      }
    }
  };
};
const Vc = Hc;
function rr(t) {
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
function Wc(t) {
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
function qc(t) {
  return function (...e) {
    const n = this;
    ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(s => {
      if (s in n && typeof n[s] == "function") {
        P(n, s, function (i) {
          const a = {
            mechanism: {
              data: {
                handler: Q(i)
              },
              handled: false,
              type: `auto.browser.browserapierrors.xhr.${s}`
            }
          };
          const o = qt(i);
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
function Gc(t, e) {
  var s;
  var i;
  const r = (s = w[t]) == null ? undefined : s.prototype;
  if ((i = r == null ? undefined : r.hasOwnProperty) != null && i.call(r, "addEventListener")) {
    P(r, "addEventListener", function (a) {
      return function (o, c, u) {
        try {
          if (Yc(c)) {
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
          Jc(this, o, c);
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
    P(r, "removeEventListener", function (a) {
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
function Yc(t) {
  return typeof t.handleEvent == "function";
}
function Jc(t, e, n) {
  if (t && typeof t == "object" && "removeEventListener" in t && typeof t.removeEventListener == "function") {
    t.removeEventListener(e, n);
  }
}
const Kc = () => ({
  name: "BrowserSession",
  setupOnce() {
    if (typeof w.document === "undefined") {
      if (at) {
        y.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
      }
      return;
    }
    Pn({
      ignoreDuration: true
    });
    Mn();
    hs(({
      from: t,
      to: e
    }) => {
      if (t !== undefined && t !== e) {
        Pn({
          ignoreDuration: true
        });
        Mn();
      }
    });
  }
});
const Xc = "GlobalHandlers";
const Qc = (t = {}) => {
  const e = {
    onerror: true,
    onunhandledrejection: true,
    ...t
  };
  return {
    name: Xc,
    setupOnce() {
      Error.stackTraceLimit = 50;
    },
    setup(n) {
      if (e.onerror) {
        tu(n);
        sr("onerror");
      }
      if (e.onunhandledrejection) {
        nu(n);
        sr("onunhandledrejection");
      }
    }
  };
};
const eu = Qc;
function tu(t) {
  Ls(e => {
    const {
      stackParser: n,
      attachStacktrace: r
    } = gs();
    if (O() !== t || fs()) {
      return;
    }
    const {
      msg: s,
      url: i,
      line: a,
      column: o,
      error: c
    } = e;
    const u = iu(rn(n, c || s, undefined, r, false), i, a, o);
    u.level = "error";
    qr(u, {
      originalException: c,
      mechanism: {
        handled: false,
        type: "auto.browser.global_handlers.onerror"
      }
    });
  });
}
function nu(t) {
  js(e => {
    const {
      stackParser: n,
      attachStacktrace: r
    } = gs();
    if (O() !== t || fs()) {
      return;
    }
    const s = ru(e);
    const i = nt(s) ? su(s) : rn(n, s, undefined, r, true);
    i.level = "error";
    qr(i, {
      originalException: s,
      mechanism: {
        handled: false,
        type: "auto.browser.global_handlers.onunhandledrejection"
      }
    });
  });
}
function ru(t) {
  if (nt(t)) {
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
function su(t) {
  return {
    exception: {
      values: [{
        type: "UnhandledRejection",
        value: `Non-Error promise rejection captured with value: ${String(t)}`
      }]
    }
  };
}
function iu(t, e, n, r) {
  const s = t.exception = t.exception || {};
  const i = s.values = s.values || [];
  const a = i[0] = i[0] || {};
  const o = a.stacktrace = a.stacktrace || {};
  const c = o.frames = o.frames || [];
  const u = r;
  const d = n;
  const l = au(e) ?? Wt();
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
function sr(t) {
  if (at) {
    y.log(`Global Handler attached: ${t}`);
  }
}
function gs() {
  const t = O();
  return (t == null ? undefined : t.getOptions()) || {
    stackParser: () => [],
    attachStacktrace: false
  };
}
function au(t) {
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
const ou = () => ({
  name: "HttpContext",
  preprocessEvent(t) {
    var r;
    if (!w.navigator && !w.location && !w.document) {
      return;
    }
    const e = zo();
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
const cu = "cause";
const uu = 5;
const du = "LinkedErrors";
const lu = (t = {}) => {
  const e = t.limit || uu;
  const n = t.key || cu;
  return {
    name: du,
    preprocessEvent(r, s, i) {
      const a = i.getOptions();
      yo(tn, a.stackParser, n, e, r, s);
    }
  };
};
const fu = lu;
function pu() {
  if (hu()) {
    if (at) {
      Ee(() => {
        console.error("[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/");
      });
    }
    return true;
  } else {
    return false;
  }
}
function hu() {
  var i;
  if (typeof w.window === "undefined") {
    return false;
  }
  const t = w;
  if (t.nw) {
    return false;
  }
  const e = t.chrome || t.browser;
  if ((i = e == null ? undefined : e.runtime) == null || !i.id) {
    return false;
  }
  const n = Wt();
  const r = ["chrome-extension", "moz-extension", "ms-browser-extension", "safari-web-extension"];
  return w !== w.top || !r.some(a => n.startsWith(`${a}://`));
}
function ys(t) {
  return [uo(), io(), Vc(), Dc(), eu(), fu(), xo(), ou(), Kc()];
}
function mu(t = {}) {
  const e = !t.skipBrowserExtensionCheck && pu();
  let n = t.defaultIntegrations == null ? ys() : t.defaultIntegrations;
  const r = {
    ...t,
    enabled: e ? false : t.enabled,
    stackParser: Ms(t.stackParser || Oc),
    integrations: Ca({
      integrations: t.integrations,
      defaultIntegrations: n
    }),
    transport: t.transport || yc
  };
  return Xa(tc, r);
}
function _t() {
  const t = Yt().getScopeData();
  const e = de().getScopeData();
  const n = Z().getScopeData();
  qe(t, e);
  qe(t, n);
  t.eventProcessors = [];
  return t;
}
function _u(t) {
  de().addScopeListener(e => {
    const n = _t();
    t(n, e);
  });
  Z().addScopeListener(e => {
    const n = _t();
    t(n, e);
  });
  Yt().addScopeListener(e => {
    const n = _t();
    t(n, e);
  });
}
const gu = () => ({
  name: "ScopeToMain",
  setup(t) {
    const e = ls(t);
    _u((n, r) => {
      e.sendScope(JSON.stringify(U(n, 20, 2000)));
      r.clearBreadcrumbs();
      r.clearAttachments();
    });
  }
});
function yu(t) {
  let e;
  return ns(t, async n => {
    e ||= ls();
    e.sendEnvelope(n.body);
    return {
      statusCode: 200
    };
  });
}
const bu = 50;
const [, vu] = ms;
const [, Eu] = Fo();
const Su = (t, e = 0) => {
  const n = [];
  for (const r of t.split(`
`).slice(e)) {
    const s = vu(r);
    const i = Eu(r);
    if (s && (i == null ? undefined : i.in_app) !== false) {
      n.push(s);
    } else if (i) {
      if (i.module === undefined) {
        delete i.module;
      }
      n.push(i);
    }
    if (n.length >= bu) {
      break;
    }
  }
  return wr(n);
};
function ku(t) {
  return [...ys().filter(e => e.name !== "BrowserSession"), gu()];
}
function xu(t = {}, e = mu) {
  if (window != null && window.__SENTRY__RENDERER_INIT__) {
    y.warn(`The browser SDK has already been initialized.
If init has been called in the preload and contextIsolation is disabled, is not required to call init in the renderer`);
    return;
  }
  window.__SENTRY__RENDERER_INIT__ = true;
  t.sendClientReports = false;
  if (t.defaultIntegrations === undefined) {
    t.defaultIntegrations = ku();
  }
  if (t.stackParser === undefined) {
    t.stackParser = Su;
  }
  if (t.ipcNamespace === undefined) {
    t.ipcNamespace = "sentry-ipc";
  }
  if (t.dsn === undefined) {
    t.dsn = "https://12345@dummy.dsn/12345";
  }
  if (t.transport === undefined) {
    t.transport = yu;
  }
  delete t.initialScope;
  e(t);
}
const ir = "--desktop-enterprise-config=";
function Iu(t) {
  const e = t.find(n => n.startsWith(ir));
  if (!e) {
    return false;
  }
  try {
    const n = JSON.parse(e.slice(ir.length));
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
var ar;
(function (t) {
  t.mergeShapes = (e, n) => ({
    ...e,
    ...n
  });
})(ar ||= {});
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
const Dt = (t, e) => {
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
let Tu = Dt;
function wu() {
  return Tu;
}
const Ru = t => {
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
  const n = wu();
  const r = Ru({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, n, n === Dt ? undefined : Dt].filter(s => s)
  });
  t.common.issues.push(r);
}
class L {
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
    return L.mergeObjectSync(e, r);
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
const Ie = t => ({
  status: "dirty",
  value: t
});
const F = t => ({
  status: "valid",
  value: t
});
const or = t => t.status === "aborted";
const cr = t => t.status === "dirty";
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
const ur = (t, e) => {
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
      status: new L(),
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
    return ur(r, s);
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
    return ur(r, i);
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
    return B.create(this);
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
    return new Ku({
      typeName: v.ZodBranded,
      type: this,
      ...S(this._def)
    });
  }
  catch(e) {
    const n = typeof e == "function" ? e : () => e;
    return new jt({
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
    return sn.create(this, e);
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
const Nu = /^c[^\s-]{8,}$/i;
const Cu = /^[0-9a-z]+$/;
const Ou = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
const $u = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
const Au = /^[a-z0-9_-]{21}$/i;
const Du = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
const Pu = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
const Mu = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
const Lu = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let gt;
const Fu = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
const ju = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
const Uu = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
const Bu = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
const Zu = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
const zu = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
const bs = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))";
const Hu = new RegExp(`^${bs}$`);
function vs(t) {
  let e = "[0-5]\\d";
  if (t.precision) {
    e = `${e}\\.\\d{${t.precision}}`;
  } else if (t.precision == null) {
    e = `${e}(\\.\\d+)?`;
  }
  const n = t.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${e})${n}`;
}
function Vu(t) {
  return new RegExp(`^${vs(t)}$`);
}
function Wu(t) {
  let e = `${bs}T${vs(t)}`;
  const n = [];
  n.push(t.local ? "Z?" : "Z");
  if (t.offset) {
    n.push("([+-]\\d{2}:?\\d{2})");
  }
  e = `${e}(${n.join("|")})`;
  return new RegExp(`^${e}$`);
}
function qu(t, e) {
  return (e === "v4" || !e) && !!Fu.test(t) || (e === "v6" || !e) && !!Uu.test(t);
}
function Gu(t, e) {
  if (!Du.test(t)) {
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
function Yu(t, e) {
  return (e === "v4" || !e) && !!ju.test(t) || (e === "v6" || !e) && !!Bu.test(t);
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
    const r = new L();
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
        if (!Mu.test(e.data)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            validation: "email",
            code: f.invalid_string,
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "emoji") {
        gt ||= new RegExp(Lu, "u");
        if (!gt.test(e.data)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            validation: "emoji",
            code: f.invalid_string,
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "uuid") {
        if (!$u.test(e.data)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            validation: "uuid",
            code: f.invalid_string,
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "nanoid") {
        if (!Au.test(e.data)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            validation: "nanoid",
            code: f.invalid_string,
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "cuid") {
        if (!Nu.test(e.data)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            validation: "cuid",
            code: f.invalid_string,
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "cuid2") {
        if (!Cu.test(e.data)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            validation: "cuid2",
            code: f.invalid_string,
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "ulid") {
        if (!Ou.test(e.data)) {
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
        if (!Wu(i).test(e.data)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            code: f.invalid_string,
            validation: "datetime",
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "date") {
        if (!Hu.test(e.data)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            code: f.invalid_string,
            validation: "date",
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "time") {
        if (!Vu(i).test(e.data)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            code: f.invalid_string,
            validation: "time",
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "duration") {
        if (!Pu.test(e.data)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            validation: "duration",
            code: f.invalid_string,
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "ip") {
        if (!qu(e.data, i.version)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            validation: "ip",
            code: f.invalid_string,
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "jwt") {
        if (!Gu(e.data, i.alg)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            validation: "jwt",
            code: f.invalid_string,
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "cidr") {
        if (!Yu(e.data, i.version)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            validation: "cidr",
            code: f.invalid_string,
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "base64") {
        if (!Zu.test(e.data)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            validation: "base64",
            code: f.invalid_string,
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "base64url") {
        if (!zu.test(e.data)) {
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
function Ju(t, e) {
  const n = (t.toString().split(".")[1] || "").length;
  const r = (e.toString().split(".")[1] || "").length;
  const s = n > r ? n : r;
  const i = Number.parseInt(t.toFixed(s).replace(".", ""));
  const a = Number.parseInt(e.toFixed(s).replace(".", ""));
  return i % a / 10 ** s;
}
class Ne extends k {
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
    const s = new L();
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
        if (Ju(e.data, i.value) !== 0) {
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
Ne.create = t => new Ne({
  checks: [],
  typeName: v.ZodNumber,
  coerce: (t == null ? undefined : t.coerce) || false,
  ...S(t)
});
class Ce extends k {
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
    const s = new L();
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
    return new Ce({
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
    return new Ce({
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
Ce.create = t => new Ce({
  checks: [],
  typeName: v.ZodBigInt,
  coerce: (t == null ? undefined : t.coerce) ?? false,
  ...S(t)
});
class Pt extends k {
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
    return F(e.data);
  }
}
Pt.create = t => new Pt({
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
    const r = new L();
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
class dr extends k {
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
    return F(e.data);
  }
}
dr.create = t => new dr({
  typeName: v.ZodSymbol,
  ...S(t)
});
class lr extends k {
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
    return F(e.data);
  }
}
lr.create = t => new lr({
  typeName: v.ZodUndefined,
  ...S(t)
});
class fr extends k {
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
    return F(e.data);
  }
}
fr.create = t => new fr({
  typeName: v.ZodNull,
  ...S(t)
});
class pr extends k {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(e) {
    return F(e.data);
  }
}
pr.create = t => new pr({
  typeName: v.ZodAny,
  ...S(t)
});
class hr extends k {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(e) {
    return F(e.data);
  }
}
hr.create = t => new hr({
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
class mr extends k {
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
    return F(e.data);
  }
}
mr.create = t => new mr({
  typeName: v.ZodVoid,
  ...S(t)
});
class B extends k {
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
      return Promise.all([...n.data].map((a, o) => s.type._parseAsync(new te(n, a, n.path, o)))).then(a => L.mergeArray(r, a));
    }
    const i = [...n.data].map((a, o) => s.type._parseSync(new te(n, a, n.path, o)));
    return L.mergeArray(r, i);
  }
  get element() {
    return this._def.type;
  }
  min(e, n) {
    return new B({
      ...this._def,
      minLength: {
        value: e,
        message: _.toString(n)
      }
    });
  }
  max(e, n) {
    return new B({
      ...this._def,
      maxLength: {
        value: e,
        message: _.toString(n)
      }
    });
  }
  length(e, n) {
    return new B({
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
B.create = (t, e) => new B({
  type: t,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: v.ZodArray,
  ...S(e)
});
function le(t) {
  if (t instanceof R) {
    const e = {};
    for (const n in t.shape) {
      const r = t.shape[n];
      e[n] = K.create(le(r));
    }
    return new R({
      ...t._def,
      shape: () => e
    });
  } else if (t instanceof B) {
    return new B({
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
class R extends k {
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
      }).then(u => L.mergeObjectSync(r, u));
    } else {
      return L.mergeObjectSync(r, c);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    _.errToObj;
    return new R({
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
    return new R({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new R({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  extend(e) {
    return new R({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...e
      })
    });
  }
  merge(e) {
    return new R({
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
    return new R({
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
    return new R({
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
    return new R({
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
    return new R({
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
    return new R({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return Es(x.objectKeys(this.shape));
  }
}
R.create = (t, e) => new R({
  shape: () => t,
  unknownKeys: "strip",
  catchall: ne.create(),
  typeName: v.ZodObject,
  ...S(e)
});
R.strictCreate = (t, e) => new R({
  shape: () => t,
  unknownKeys: "strict",
  catchall: ne.create(),
  typeName: v.ZodObject,
  ...S(e)
});
R.lazycreate = (t, e) => new R({
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
function Mt(t, e) {
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
      const c = Mt(t[o], e[o]);
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
      const c = Mt(a, o);
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
      if (or(i) || or(a)) {
        return b;
      }
      const o = Mt(i.value, a.value);
      if (o.valid) {
        if (cr(i) || cr(a)) {
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
      return Promise.all(i).then(a => L.mergeArray(n, a));
    } else {
      return L.mergeArray(n, i);
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
class _r extends k {
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
_r.create = (t, e, n) => new _r({
  valueType: e,
  keyType: t,
  typeName: v.ZodMap,
  ...S(n)
});
class Oe extends k {
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
    return new Oe({
      ...this._def,
      minSize: {
        value: e,
        message: _.toString(n)
      }
    });
  }
  max(e, n) {
    return new Oe({
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
Oe.create = (t, e) => new Oe({
  valueType: t,
  minSize: null,
  maxSize: null,
  typeName: v.ZodSet,
  ...S(e)
});
class gr extends k {
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
gr.create = (t, e) => new gr({
  getter: t,
  typeName: v.ZodLazy,
  ...S(e)
});
class Lt extends k {
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
Lt.create = (t, e) => new Lt({
  value: t,
  typeName: v.ZodLiteral,
  ...S(e)
});
function Es(t, e) {
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
    return F(e.data);
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
ge.create = Es;
class yr extends k {
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
    return F(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
yr.create = (t, e) => new yr({
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
    return F(r.then(s => this._def.type.parseAsync(s, {
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
            return Ie(c.value);
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
          return Ie(o.value);
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
      return F(undefined);
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
      return F(null);
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
class jt extends k {
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
jt.create = (t, e) => new jt({
  innerType: t,
  typeName: v.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...S(e)
});
class br extends k {
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
br.create = t => new br({
  typeName: v.ZodNaN,
  ...S(t)
});
class Ku extends k {
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
class sn extends k {
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
          return Ie(i.value);
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
    return new sn({
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
const yt = J.create;
const Xu = Pt.create;
ne.create;
B.create;
const Qu = R.create;
const ed = Ke.create;
Xe.create;
oe.create;
const vr = Lt.create;
ge.create;
Qe.create;
K.create;
be.create;
const td = Qu({
  isNestBuild: Xu(),
  buildType: ed([vr("dev"), vr("prod")]),
  commitHash: yt(),
  commitTimestamp: yt(),
  appVersion: yt()
});
function nd() {
  const t = {
    commitHash: "df1d8a339dfabcf359af7144fe142b59ff7d9a0f",
    isNestBuild: false,
    commitTimestamp: "2026-07-10T21:55:12.000Z",
    buildType: "prod",
    appVersion: "1.20186.1"
  };
  const e = td.safeParse(t);
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
var Er = {};
const rd = Object.fromEntries(["arch", "platform", "type", "versions"].map(t => [t, true]));
const an = Object.fromEntries(Object.entries(process).filter(([t]) => rd[t]));
an.version = nd().appVersion;
an.env = Er.CI ? {
  CI: Er.CI
} : {};
var sd = {};
const Ss = Iu(process.argv);
if (!Ss && !sd.CI) {
  xu();
}
C.contextBridge.exposeInMainWorld("process", an);
C.contextBridge.exposeInMainWorld("desktopEssentialTelemetryDisabled", Ss);
//# sourceMappingURL=findInPage.js.map