import { r as i, u as D, _ as M, s as O, R as te, j as l } from "./main-BGSfbjLp.js";
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
      e._sentryDebugIds[t] = "b3ca2d5b-6a13-445b-9604-bdae630d3f69";
      e._sentryDebugIdIdentifier = "sentry-dbid-b3ca2d5b-6a13-445b-9604-bdae630d3f69";
    }
  })();
} catch {}
function re(e, t) {
  var r = e.values;
  var a = M(e, ["values"]);
  var s = t.values;
  var d = M(t, ["values"]);
  return O(s, r) && O(a, d);
}
function V(e) {
  var t = D();
  var r = t.formatMessage;
  var a = t.textComponent;
  var s = a === undefined ? i.Fragment : a;
  var d = e.id;
  var m = e.description;
  var h = e.defaultMessage;
  var c = e.values;
  var x = e.children;
  var f = e.tagName;
  var u = f === undefined ? s : f;
  var g = e.ignoreTag;
  var b = {
    id: d,
    description: m,
    defaultMessage: h
  };
  var p = r(b, c, {
    ignoreTag: g
  });
  if (typeof x == "function") {
    return x(Array.isArray(p) ? p : [p]);
  } else if (u) {
    return i.createElement(u, null, p);
  } else {
    return i.createElement(i.Fragment, null, p);
  }
}
V.displayName = "FormattedMessage";
var A = i.memo(V, re);
A.displayName = "MemoizedFormattedMessage";
const ae = 36;
var z = {
  exports: {}
};
var v = {};
/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var E;
function ne() {
  if (E) {
    return v;
  }
  E = 1;
  var e = te;
  var t = Symbol.for("react.element");
  var r = Symbol.for("react.fragment");
  var a = Object.prototype.hasOwnProperty;
  var s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
  var d = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function m(h, c, x) {
    var f;
    var u = {};
    var g = null;
    var b = null;
    if (x !== undefined) {
      g = "" + x;
    }
    if (c.key !== undefined) {
      g = "" + c.key;
    }
    if (c.ref !== undefined) {
      b = c.ref;
    }
    for (f in c) {
      if (a.call(c, f) && !d.hasOwnProperty(f)) {
        u[f] = c[f];
      }
    }
    if (h && h.defaultProps) {
      c = h.defaultProps;
      for (f in c) {
        if (u[f] === undefined) {
          u[f] = c[f];
        }
      }
    }
    return {
      $$typeof: t,
      type: h,
      key: g,
      ref: b,
      props: u,
      _owner: s.current
    };
  }
  v.Fragment = r;
  v.jsx = m;
  v.jsxs = m;
  return v;
}
z.exports = ne();
var n = z.exports;
const se = new Map([["bold", <n.Fragment><path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z" /></n.Fragment>], ["duotone", <n.Fragment><path d="M216,64V192H40V64Z" opacity="0.2" /><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" /></n.Fragment>], ["fill", <n.Fragment><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM192,184H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z" /></n.Fragment>], ["light", <n.Fragment><path d="M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128ZM40,70H216a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12ZM216,186H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z" /></n.Fragment>], ["regular", <n.Fragment><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" /></n.Fragment>], ["thin", <n.Fragment><path d="M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128ZM40,68H216a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8ZM216,188H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Z" /></n.Fragment>]]);
const oe = new Map([["bold", <n.Fragment><path d="M240.26,186.1,152.81,34.23h0a28.74,28.74,0,0,0-49.62,0L15.74,186.1a27.45,27.45,0,0,0,0,27.71A28.31,28.31,0,0,0,40.55,228h174.9a28.31,28.31,0,0,0,24.79-14.19A27.45,27.45,0,0,0,240.26,186.1Zm-20.8,15.7a4.46,4.46,0,0,1-4,2.2H40.55a4.46,4.46,0,0,1-4-2.2,3.56,3.56,0,0,1,0-3.73L124,46.2a4.77,4.77,0,0,1,8,0l87.44,151.87A3.56,3.56,0,0,1,219.46,201.8ZM116,136V104a12,12,0,0,1,24,0v32a12,12,0,0,1-24,0Zm28,40a16,16,0,1,1-16-16A16,16,0,0,1,144,176Z" /></n.Fragment>], ["duotone", <n.Fragment><path d="M215.46,216H40.54C27.92,216,20,202.79,26.13,192.09L113.59,40.22c6.3-11,22.52-11,28.82,0l87.46,151.87C236,202.79,228.08,216,215.46,216Z" opacity="0.2" /><path d="M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z" /></n.Fragment>], ["fill", <n.Fragment><path d="M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM120,104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,128,192Z" /></n.Fragment>], ["light", <n.Fragment><path d="M235.07,189.09,147.61,37.22h0a22.75,22.75,0,0,0-39.22,0L20.93,189.09a21.53,21.53,0,0,0,0,21.72A22.35,22.35,0,0,0,40.55,222h174.9a22.35,22.35,0,0,0,19.6-11.19A21.53,21.53,0,0,0,235.07,189.09ZM224.66,204.8a10.46,10.46,0,0,1-9.21,5.2H40.55a10.46,10.46,0,0,1-9.21-5.2,9.51,9.51,0,0,1,0-9.72L118.79,43.21a10.75,10.75,0,0,1,18.42,0l87.46,151.87A9.51,9.51,0,0,1,224.66,204.8ZM122,144V104a6,6,0,0,1,12,0v40a6,6,0,0,1-12,0Zm16,36a10,10,0,1,1-10-10A10,10,0,0,1,138,180Z" /></n.Fragment>], ["regular", <n.Fragment><path d="M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z" /></n.Fragment>], ["thin", <n.Fragment><path d="M233.34,190.09,145.88,38.22h0a20.75,20.75,0,0,0-35.76,0L22.66,190.09a19.52,19.52,0,0,0,0,19.71A20.36,20.36,0,0,0,40.54,220H215.46a20.36,20.36,0,0,0,17.86-10.2A19.52,19.52,0,0,0,233.34,190.09ZM226.4,205.8a12.47,12.47,0,0,1-10.94,6.2H40.54a12.47,12.47,0,0,1-10.94-6.2,11.45,11.45,0,0,1,0-11.72L117.05,42.21a12.76,12.76,0,0,1,21.9,0L226.4,194.08A11.45,11.45,0,0,1,226.4,205.8ZM124,144V104a4,4,0,0,1,8,0v40a4,4,0,0,1-8,0Zm12,36a8,8,0,1,1-8-8A8,8,0,0,1,136,180Z" /></n.Fragment>]]);
const le = i.createContext({
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: false
});
var ie = Object.defineProperty;
var ce = Object.defineProperties;
var de = Object.getOwnPropertyDescriptors;
var w = Object.getOwnPropertySymbols;
var q = Object.prototype.hasOwnProperty;
var Y = Object.prototype.propertyIsEnumerable;
var _ = (e, t, r) => t in e ? ie(e, t, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: r
}) : e[t] = r;
var C = (e, t) => {
  for (var r in t ||= {}) {
    if (q.call(t, r)) {
      _(e, r, t[r]);
    }
  }
  if (w) {
    for (var r of w(t)) {
      if (Y.call(t, r)) {
        _(e, r, t[r]);
      }
    }
  }
  return e;
};
var fe = (e, t) => ce(e, de(t));
var L = (e, t) => {
  var r = {};
  for (var a in e) {
    if (q.call(e, a) && t.indexOf(a) < 0) {
      r[a] = e[a];
    }
  }
  if (e != null && w) {
    for (var a of w(e)) {
      if (t.indexOf(a) < 0 && Y.call(e, a)) {
        r[a] = e[a];
      }
    }
  }
  return r;
};
const U = i.forwardRef((e, t) => {
  const r = e;
  const {
    alt: a,
    color: s,
    size: d,
    weight: m,
    mirrored: h,
    children: c,
    weights: x
  } = r;
  const f = L(r, ["alt", "color", "size", "weight", "mirrored", "children", "weights"]);
  const u = i.useContext(le);
  const {
    color: g = "currentColor",
    size: b,
    weight: p = "regular",
    mirrored: y = false
  } = u;
  const H = L(u, ["color", "size", "weight", "mirrored"]);
  return n.jsxs("svg", fe(C(C({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    width: d ?? b,
    height: d ?? b,
    fill: s ?? g,
    viewBox: "0 0 256 256",
    transform: h || y ? "scale(-1, 1)" : undefined
  }, H), f), {
    children: [!!a && <title>{a}</title>, c, x.get(m ?? p)]
  }));
});
U.displayName = "IconBase";
const K = U;
var ue = Object.defineProperty;
var he = Object.defineProperties;
var ge = Object.getOwnPropertyDescriptors;
var F = Object.getOwnPropertySymbols;
var pe = Object.prototype.hasOwnProperty;
var me = Object.prototype.propertyIsEnumerable;
var N = (e, t, r) => t in e ? ue(e, t, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: r
}) : e[t] = r;
var xe = (e, t) => {
  for (var r in t ||= {}) {
    if (pe.call(t, r)) {
      N(e, r, t[r]);
    }
  }
  if (F) {
    for (var r of F(t)) {
      if (me.call(t, r)) {
        N(e, r, t[r]);
      }
    }
  }
  return e;
};
var be = (e, t) => he(e, ge(t));
const G = i.forwardRef((e, t) => n.jsx(K, be(xe({
  ref: t
}, e), {
  weights: se
})));
G.displayName = "List";
var ve = Object.defineProperty;
var ye = Object.defineProperties;
var je = Object.getOwnPropertyDescriptors;
var k = Object.getOwnPropertySymbols;
var we = Object.prototype.hasOwnProperty;
var He = Object.prototype.propertyIsEnumerable;
var P = (e, t, r) => t in e ? ve(e, t, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: r
}) : e[t] = r;
var Ae = (e, t) => {
  for (var r in t ||= {}) {
    if (we.call(t, r)) {
      P(e, r, t[r]);
    }
  }
  if (k) {
    for (var r of k(t)) {
      if (He.call(t, r)) {
        P(e, r, t[r]);
      }
    }
  }
  return e;
};
var Ze = (e, t) => ye(e, je(t));
const Q = i.forwardRef((e, t) => n.jsx(K, Ze(Ae({
  ref: t
}, e), {
  weights: oe
})));
Q.displayName = "Warning";
var R;
if ((R = globalThis["claude.internal.ui"]) != null) {
  R.AboutWindow;
}
var S;
if ((S = globalThis["claude.internal.ui"]) != null) {
  S.QuickWindow;
}
var I;
const o = (I = globalThis["claude.internal.ui"]) == null ? undefined : I.MainWindowTitleBar;
function X(e) {
  var t;
  var r;
  var a = "";
  if (typeof e == "string" || typeof e == "number") {
    a += e;
  } else if (typeof e == "object") {
    if (Array.isArray(e)) {
      var s = e.length;
      for (t = 0; t < s; t++) {
        if (e[t] && (r = X(e[t]))) {
          if (a) {
            a += " ";
          }
          a += r;
        }
      }
    } else {
      for (r in e) {
        if (e[r]) {
          if (a) {
            a += " ";
          }
          a += r;
        }
      }
    }
  }
  return a;
}
function J() {
  var e;
  var t;
  for (var r = 0, a = "", s = arguments.length; r < s; r++) {
    if ((e = arguments[r]) && (t = X(e))) {
      if (a) {
        a += " ";
      }
      a += t;
    }
  }
  return a;
}
const Me = (e = "primary") => J("inline-flex items-center justify-center relative shrink-0 select-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none disabled:drop-shadow-none", {
  primary: "bg-text-000 text-bg-000 relative overflow-hidden font-medium font-sans transition-transform will-change-transform ease-[cubic-bezier(0.165,0.85,0.45,1)] duration-150 hover:scale-y-[1.015] hover:scale-x-[1.005] backface-hidden after:absolute after:inset-0 after:bg-[radial-gradient(at_bottom,hsla(var(--bg-000)/20%),hsla(var(--bg-000)/0%))] after:opacity-0 after:transition after:duration-200 after:translate-y-2 hover:after:opacity-100 hover:after:translate-y-0",
  secondary: "text-text-000 border-0.5 border-border-300 relative overflow-hidden font-sans font-medium transition duration-100 hover:border-border-300/0 bg-bg-300/0 hover:bg-bg-400 backface-hidden",
  flat: "bg-brand-000 text-oncolor-100 font-sans font-medium transition-colors hover:bg-brand-200",
  ghost: "text-text-300 border-transparent transition font-sans duration-300 ease-[cubic-bezier(0.165,0.85,0.45,1)] hover:bg-bg-400 aria-pressed:bg-bg-400 aria-checked:bg-bg-400 aria-expanded:bg-bg-300 hover:text-text-100 aria-pressed:text-text-100 aria-checked:text-text-100 aria-expanded:text-text-100",
  danger: "bg-danger-200 text-oncolor-100 font-sans font-medium transition hover:scale-y-[1.015] hover:scale-x-[1.005] hover:opacity-95",
  unstyled: ""
}[e]);
const Oe = (e = "default", t, r) => {
  let s = {
    default: "h-9 px-4 py-2 rounded-lg min-w-[5rem] active:scale-[0.985] whitespace-nowrap text-sm",
    sm: "h-8 rounded-md px-3 text-xs min-w-[4rem] active:scale-[0.985] whitespace-nowrap",
    lg: "h-11 rounded-[0.6rem] px-5 min-w-[6rem] active:scale-[0.985] whitespace-nowrap",
    icon: "h-9 w-9 rounded-md active:scale-95 shrink-0",
    icon_xs: "h-6 w-6 rounded-md active:scale-95",
    icon_sm: "h-8 w-8 rounded-md active:scale-95",
    icon_lg: "h-11 w-11 rounded-[0.6rem] active:scale-95",
    inline: "px-0.5 rounded-[0.25rem]",
    unset: ""
  }[e];
  if (t) {
    if (e === "default") {
      s = s.replace("px-4", "pl-2 pr-3 gap-1");
    } else if (e === "lg") {
      s = s.replace("px-5", "pl-2.5 pr-3.5 gap-1");
    } else if (e === "sm") {
      s = s.replace("px-3", "pl-2 pr-2.5 gap-1");
    }
  }
  if (r) {
    if (e === "default") {
      s = s.replace("px-4", "pl-3 pr-2 gap-1");
    } else if (e === "lg") {
      s = s.replace("px-5", "pl-3.5 pr-2.5 gap-1");
    } else if (e === "sm") {
      s = s.replace("px-3", "pl-2.5 pr-2 gap-1");
    }
  }
  return s;
};
const Z = i.forwardRef(({
  className: e,
  variant: t = "primary",
  size: r = "default",
  rounded: a,
  href: s,
  onLinkClick: d,
  target: m,
  prepend: h,
  append: c,
  disabled: x,
  children: f,
  type: u = "button",
  ...g
}, b) => {
  const p = J(Me(t), Oe(r, !!h, !!c), a && "!rounded-full", e);
  const y = <l.Fragment>{h}{f}{c}</l.Fragment>;
  if (s) {
    const {
      style: H,
      "aria-label": W,
      rel: ee
    } = g;
    return <a href={s} target={m || "_self"} rel={ee} className={p} aria-label={W} onClick={d} style={H}>{y}</a>;
  }
  return <button className={p} ref={b} disabled={x} type={u} {...g}>{y}</button>;
});
Z.displayName = "Button";
const $ = "HEALTH-CHECK";
const Ee = 30000;
const j = {};
const _e = () => {
  j.waiting = undefined;
};
function Ce(e) {
  const t = Math.min(Math.pow(2, e - 1) * 1000, Ee);
  const r = Math.random() * 0.1 * t;
  return t + r;
}
async function Le(e) {
  return new Promise(t => setTimeout(t, e));
}
async function T(e = 1) {
  var a;
  const t = navigator.onLine;
  if (t) {
    console.log($, "Requesting health check", `(attempt ${e})`);
    if (await ((a = o == null ? undefined : o.isClaudeCurrentlyHealthy) == null ? undefined : a.call(o))) {
      return true;
    }
    e++;
  }
  const r = Ce(e);
  console.log($, `${t ? "Fetch failed" : "offline"}, waiting ${(r / 1000).toPrecision(3)}s`);
  await Le(r);
  return T(e);
}
async function Fe() {
  j.waiting ||= T().finally(_e);
  return j.waiting;
}
const B = ae;
const Ne = 36;
const _Component = ({
  details: e,
  onRefresh: t
}) => {
  const r = D();
  i.useEffect(() => {
    Fe().then(t);
  }, [t]);
  const a = () => r.formatMessage({
    id: "6yv8ytK4El",
    defaultMessage: "Check your network connection",
    description: "Error message suggesting the user to check their internet connection"
  });
  return <div className="nc-drag absolute z-50 flex flex-col items-center justify-center" style={{
    top: `${B}px`,
    left: 0,
    right: 0,
    bottom: 0,
    fontFamily: "Anthropic Sans"
  }}><div className="nc-no-drag select-none flex flex-col items-center justify-center max-w-md p-6 space-y-2"><div className="flex items-center justify-center w-16 h-16 rounded-full bg-danger-200/10 text-danger-100"><Q size={32} /></div><h1 className="text-l font-bold text-center"><A id="Nmvo1ufAY5" defaultMessage="Couldn't connect to Claude" description="Error title shown when the app fails to connect to Claude's servers" /></h1><p className="text-xs text-center text-text-400 dark:text-text-100 select-text !mb-2">{e.errorDescription || a()}</p><Z onClick={t} variant="secondary"><A id="ilE9e0uxNN" defaultMessage="Refresh" description="Button label to retry the connection" /></Z></div></div>;
};
function Pe({
  isMainWindow: e,
  windowTitle: t,
  titleBarHeight: r = e ? B : Ne
}) {
  if (e) {
    return null;
  }
  const a = <div className="flex flex-row items-center justify-center select-none nc-drag" style={{
    height: `${r}px`
  }}><h1 className="text-xs text-center self-center opacity-40 font-bold select-none" id="titleBar">{t}</h1></div>;
  return <l.Fragment>{a}<div className="absolute top-0 left-0 right-0 flex flex-row items-center select-none nc-drag" style={{
      height: `${r + 1}px`,
      borderBottom: "1px solid rgba(0,0,0,0.1)"
    }}><div /></div></l.Fragment>;
}
const $e = () => {
  var e;
  if ((e = o == null ? undefined : o.requestReloadMainView) != null) {
    e.call(o);
  }
};
const Re = () => {
  var e;
  if ((e = o == null ? undefined : o.requestMainMenuPopup) != null) {
    e.call(o);
  }
};
function Ie() {
  const [e, t] = i.useState("Claude");
  const [r, a] = i.useState(null);
  i.useEffect(() => {
    var s;
    if ((s = o == null ? undefined : o.onUpdateTitleBar) == null) {
      return undefined;
    } else {
      return s.call(o, d => {
        t(d);
      });
    }
  }, []);
  i.useEffect(() => {
    var s;
    if ((s = o == null ? undefined : o.onShowLoadError) == null) {
      return undefined;
    } else {
      return s.call(o, d => {
        a(d);
      });
    }
  }, []);
  i.useEffect(() => {
    var s;
    if ((s = o == null ? undefined : o.onHideLoadError) == null) {
      return undefined;
    } else {
      return s.call(o, () => {
        a(null);
      });
    }
  }, []);
  i.useEffect(() => {
    var s;
    if ((s = o == null ? undefined : o.titleBarReady) != null) {
      s.call(o);
    }
  }, []);
  return <l.Fragment><Pe windowTitle={e} isMainWindow={true} />{r && <l.Fragment><div className="nc-no-drag absolute top-2 left-2 z-[60]"><Z variant="ghost" size="icon_sm" onClick={Re} aria-label="Menu"><G size={20} /></Z></div><_Component details={r} onRefresh={$e} /></l.Fragment>}</l.Fragment>;
}
export { Ie as default };