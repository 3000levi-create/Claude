import { R as Oe, r as p, _ as L, a as P, b as M, c as S, d as Ae, e as ce, f as C, g as Ee, h as _e, u as ue, j as x } from "./main-C0sZU5pz.js";
(function () {
  try {
    var r = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    r.SENTRY_RELEASE = {
      id: "df1d8a339dfabcf359af7144fe142b59ff7d9a0f"
    };
  } catch {}
})();
try {
  (function () {
    var r = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    var t = new r.Error().stack;
    if (t) {
      r._sentryDebugIds = r._sentryDebugIds || {};
      r._sentryDebugIds[t] = "d0a1368a-d7d7-4fae-8fb0-27623d9f25b8";
      r._sentryDebugIdIdentifier = "sentry-dbid-d0a1368a-d7d7-4fae-8fb0-27623d9f25b8";
    }
  })();
} catch {}
var le = {
  exports: {}
};
var O = {};
/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var H;
function Ie() {
  if (H) {
    return O;
  }
  H = 1;
  var r = Oe;
  var t = Symbol.for("react.element");
  var e = Symbol.for("react.fragment");
  var n = Object.prototype.hasOwnProperty;
  var i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
  var o = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function s(u, c, f) {
    var d;
    var m = {};
    var y = null;
    var w = null;
    if (f !== undefined) {
      y = "" + f;
    }
    if (c.key !== undefined) {
      y = "" + c.key;
    }
    if (c.ref !== undefined) {
      w = c.ref;
    }
    for (d in c) {
      if (n.call(c, d) && !o.hasOwnProperty(d)) {
        m[d] = c[d];
      }
    }
    if (u && u.defaultProps) {
      c = u.defaultProps;
      for (d in c) {
        if (m[d] === undefined) {
          m[d] = c[d];
        }
      }
    }
    return {
      $$typeof: t,
      type: u,
      key: y,
      ref: w,
      props: m,
      _owner: i.current
    };
  }
  O.Fragment = e;
  O.jsx = s;
  O.jsxs = s;
  return O;
}
le.exports = Ie();
var a = le.exports;
const Le = new Map([["bold", <a.Fragment><path d="M208.49,152.49l-72,72a12,12,0,0,1-17,0l-72-72a12,12,0,0,1,17-17L116,187V40a12,12,0,0,1,24,0V187l51.51-51.52a12,12,0,0,1,17,17Z" /></a.Fragment>], ["duotone", <a.Fragment><path d="M200,144l-72,72L56,144Z" opacity="0.2" /><path d="M207.39,140.94A8,8,0,0,0,200,136H136V40a8,8,0,0,0-16,0v96H56a8,8,0,0,0-5.66,13.66l72,72a8,8,0,0,0,11.32,0l72-72A8,8,0,0,0,207.39,140.94ZM128,204.69,75.31,152H180.69Z" /></a.Fragment>], ["fill", <a.Fragment><path d="M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72A8,8,0,0,1,56,136h64V40a8,8,0,0,1,16,0v96h64a8,8,0,0,1,5.66,13.66Z" /></a.Fragment>], ["light", <a.Fragment><path d="M204.24,148.24l-72,72a6,6,0,0,1-8.48,0l-72-72a6,6,0,0,1,8.48-8.48L122,201.51V40a6,6,0,0,1,12,0V201.51l61.76-61.75a6,6,0,0,1,8.48,8.48Z" /></a.Fragment>], ["regular", <a.Fragment><path d="M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z" /></a.Fragment>], ["thin", <a.Fragment><path d="M202.83,146.83l-72,72a4,4,0,0,1-5.66,0l-72-72a4,4,0,0,1,5.66-5.66L124,206.34V40a4,4,0,0,1,8,0V206.34l65.17-65.17a4,4,0,0,1,5.66,5.66Z" /></a.Fragment>]]);
const Pe = new Map([["bold", <a.Fragment><path d="M208.49,120.49a12,12,0,0,1-17,0L140,69V216a12,12,0,0,1-24,0V69L64.49,120.49a12,12,0,0,1-17-17l72-72a12,12,0,0,1,17,0l72,72A12,12,0,0,1,208.49,120.49Z" /></a.Fragment>], ["duotone", <a.Fragment><path d="M200,112H56l72-72Z" opacity="0.2" /><path d="M205.66,106.34l-72-72a8,8,0,0,0-11.32,0l-72,72A8,8,0,0,0,56,120h64v96a8,8,0,0,0,16,0V120h64a8,8,0,0,0,5.66-13.66ZM75.31,104,128,51.31,180.69,104Z" /></a.Fragment>], ["fill", <a.Fragment><path d="M207.39,115.06A8,8,0,0,1,200,120H136v96a8,8,0,0,1-16,0V120H56a8,8,0,0,1-5.66-13.66l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,207.39,115.06Z" /></a.Fragment>], ["light", <a.Fragment><path d="M204.24,116.24a6,6,0,0,1-8.48,0L134,54.49V216a6,6,0,0,1-12,0V54.49L60.24,116.24a6,6,0,0,1-8.48-8.48l72-72a6,6,0,0,1,8.48,0l72,72A6,6,0,0,1,204.24,116.24Z" /></a.Fragment>], ["regular", <a.Fragment><path d="M205.66,117.66a8,8,0,0,1-11.32,0L136,59.31V216a8,8,0,0,1-16,0V59.31L61.66,117.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,205.66,117.66Z" /></a.Fragment>], ["thin", <a.Fragment><path d="M202.83,114.83a4,4,0,0,1-5.66,0L132,49.66V216a4,4,0,0,1-8,0V49.66L58.83,114.83a4,4,0,0,1-5.66-5.66l72-72a4,4,0,0,1,5.66,0l72,72A4,4,0,0,1,202.83,114.83Z" /></a.Fragment>]]);
const Me = new Map([["bold", <a.Fragment><path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z" /></a.Fragment>], ["duotone", <a.Fragment><path d="M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z" opacity="0.2" /><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" /></a.Fragment>], ["fill", <a.Fragment><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z" /></a.Fragment>], ["light", <a.Fragment><path d="M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z" /></a.Fragment>], ["regular", <a.Fragment><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" /></a.Fragment>], ["thin", <a.Fragment><path d="M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z" /></a.Fragment>]]);
const Te = p.createContext({
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: false
});
var ke = Object.defineProperty;
var $e = Object.defineProperties;
var Ce = Object.getOwnPropertyDescriptors;
var T = Object.getOwnPropertySymbols;
var fe = Object.prototype.hasOwnProperty;
var de = Object.prototype.propertyIsEnumerable;
var Y = (r, t, e) => t in r ? ke(r, t, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: e
}) : r[t] = e;
var z = (r, t) => {
  for (var e in t ||= {}) {
    if (fe.call(t, e)) {
      Y(r, e, t[e]);
    }
  }
  if (T) {
    for (var e of T(t)) {
      if (de.call(t, e)) {
        Y(r, e, t[e]);
      }
    }
  }
  return r;
};
var Re = (r, t) => $e(r, Ce(t));
var B = (r, t) => {
  var e = {};
  for (var n in r) {
    if (fe.call(r, n) && t.indexOf(n) < 0) {
      e[n] = r[n];
    }
  }
  if (r != null && T) {
    for (var n of T(r)) {
      if (t.indexOf(n) < 0 && de.call(r, n)) {
        e[n] = r[n];
      }
    }
  }
  return e;
};
const he = p.forwardRef((r, t) => {
  const e = r;
  const {
    alt: n,
    color: i,
    size: o,
    weight: s,
    mirrored: u,
    children: c,
    weights: f
  } = e;
  const d = B(e, ["alt", "color", "size", "weight", "mirrored", "children", "weights"]);
  const m = p.useContext(Te);
  const {
    color: y = "currentColor",
    size: w,
    weight: h = "regular",
    mirrored: l = false
  } = m;
  const v = B(m, ["color", "size", "weight", "mirrored"]);
  return a.jsxs("svg", Re(z(z({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    width: o ?? w,
    height: o ?? w,
    fill: i ?? y,
    viewBox: "0 0 256 256",
    transform: u || l ? "scale(-1, 1)" : undefined
  }, v), d), {
    children: [!!n && <title>{n}</title>, c, f.get(s ?? h)]
  }));
});
he.displayName = "IconBase";
const Z = he;
var Ve = Object.defineProperty;
var Fe = Object.defineProperties;
var Ze = Object.getOwnPropertyDescriptors;
var G = Object.getOwnPropertySymbols;
var Ue = Object.prototype.hasOwnProperty;
var De = Object.prototype.propertyIsEnumerable;
var q = (r, t, e) => t in r ? Ve(r, t, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: e
}) : r[t] = e;
var Ne = (r, t) => {
  for (var e in t ||= {}) {
    if (Ue.call(t, e)) {
      q(r, e, t[e]);
    }
  }
  if (G) {
    for (var e of G(t)) {
      if (De.call(t, e)) {
        q(r, e, t[e]);
      }
    }
  }
  return r;
};
var He = (r, t) => Fe(r, Ze(t));
const _Component2 = p.forwardRef((r, t) => a.jsx(Z, He(Ne({
  ref: t
}, r), {
  weights: Le
})));
_Component2.displayName = "ArrowDown";
var Ye = Object.defineProperty;
var ze = Object.defineProperties;
var Be = Object.getOwnPropertyDescriptors;
var K = Object.getOwnPropertySymbols;
var Ge = Object.prototype.hasOwnProperty;
var qe = Object.prototype.propertyIsEnumerable;
var Q = (r, t, e) => t in r ? Ye(r, t, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: e
}) : r[t] = e;
var Ke = (r, t) => {
  for (var e in t ||= {}) {
    if (Ge.call(t, e)) {
      Q(r, e, t[e]);
    }
  }
  if (K) {
    for (var e of K(t)) {
      if (qe.call(t, e)) {
        Q(r, e, t[e]);
      }
    }
  }
  return r;
};
var Qe = (r, t) => ze(r, Be(t));
const _Component = p.forwardRef((r, t) => a.jsx(Z, Qe(Ke({
  ref: t
}, r), {
  weights: Pe
})));
_Component.displayName = "ArrowUp";
var We = Object.defineProperty;
var Xe = Object.defineProperties;
var Je = Object.getOwnPropertyDescriptors;
var W = Object.getOwnPropertySymbols;
var er = Object.prototype.hasOwnProperty;
var rr = Object.prototype.propertyIsEnumerable;
var X = (r, t, e) => t in r ? We(r, t, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: e
}) : r[t] = e;
var tr = (r, t) => {
  for (var e in t ||= {}) {
    if (er.call(t, e)) {
      X(r, e, t[e]);
    }
  }
  if (W) {
    for (var e of W(t)) {
      if (rr.call(t, e)) {
        X(r, e, t[e]);
      }
    }
  }
  return r;
};
var nr = (r, t) => Xe(r, Je(t));
const _Component3 = p.forwardRef((r, t) => a.jsx(Z, nr(tr({
  ref: t
}, r), {
  weights: Me
})));
_Component3.displayName = "X";
function ye(r) {
  var t;
  var e;
  var n = "";
  if (typeof r == "string" || typeof r == "number") {
    n += r;
  } else if (typeof r == "object") {
    if (Array.isArray(r)) {
      var i = r.length;
      for (t = 0; t < i; t++) {
        if (r[t] && (e = ye(r[t]))) {
          if (n) {
            n += " ";
          }
          n += e;
        }
      }
    } else {
      for (e in r) {
        if (r[e]) {
          if (n) {
            n += " ";
          }
          n += e;
        }
      }
    }
  }
  return n;
}
function ir() {
  var r;
  var t;
  for (var e = 0, n = "", i = arguments.length; e < i; e++) {
    if ((r = arguments[e]) && (t = ye(r))) {
      if (n) {
        n += " ";
      }
      n += t;
    }
  }
  return n;
}
function g(r) {
  return typeof r == "function";
}
function me(r) {
  function t(n) {
    Error.call(n);
    n.stack = new Error().stack;
  }
  var e = r(t);
  e.prototype = Object.create(Error.prototype);
  e.prototype.constructor = e;
  return e;
}
var R = me(function (r) {
  return function (e) {
    r(this);
    this.message = e ? `${e.length} errors occurred during unsubscription:
${e.map(function (n, i) {
      return i + 1 + ") " + n.toString();
    }).join(`
  `)}` : "";
    this.name = "UnsubscriptionError";
    this.errors = e;
  };
});
function k(r, t) {
  if (r) {
    var e = r.indexOf(t);
    if (e >= 0) {
      r.splice(e, 1);
    }
  }
}
var A = function () {
  function r(t) {
    this.initialTeardown = t;
    this.closed = false;
    this._parentage = null;
    this._finalizers = null;
  }
  r.prototype.unsubscribe = function () {
    var t;
    var e;
    var n;
    var i;
    var o;
    if (!this.closed) {
      this.closed = true;
      var s = this._parentage;
      if (s) {
        this._parentage = null;
        if (Array.isArray(s)) {
          try {
            for (var u = L(s), c = u.next(); !c.done; c = u.next()) {
              var f = c.value;
              f.remove(this);
            }
          } catch (l) {
            t = {
              error: l
            };
          } finally {
            try {
              if (c && !c.done && (e = u.return)) {
                e.call(u);
              }
            } finally {
              if (t) {
                throw t.error;
              }
            }
          }
        } else {
          s.remove(this);
        }
      }
      var d = this.initialTeardown;
      if (g(d)) {
        try {
          d();
        } catch (l) {
          o = l instanceof R ? l.errors : [l];
        }
      }
      var m = this._finalizers;
      if (m) {
        this._finalizers = null;
        try {
          for (var y = L(m), w = y.next(); !w.done; w = y.next()) {
            var h = w.value;
            try {
              J(h);
            } catch (l) {
              o = o ?? [];
              if (l instanceof R) {
                o = P(P([], M(o)), M(l.errors));
              } else {
                o.push(l);
              }
            }
          }
        } catch (l) {
          n = {
            error: l
          };
        } finally {
          try {
            if (w && !w.done && (i = y.return)) {
              i.call(y);
            }
          } finally {
            if (n) {
              throw n.error;
            }
          }
        }
      }
      if (o) {
        throw new R(o);
      }
    }
  };
  r.prototype.add = function (t) {
    if (t && t !== this) {
      if (this.closed) {
        J(t);
      } else {
        if (t instanceof r) {
          if (t.closed || t._hasParent(this)) {
            return;
          }
          t._addParent(this);
        }
        (this._finalizers = this._finalizers ?? []).push(t);
      }
    }
  };
  r.prototype._hasParent = function (t) {
    var e = this._parentage;
    return e === t || Array.isArray(e) && e.includes(t);
  };
  r.prototype._addParent = function (t) {
    var e = this._parentage;
    this._parentage = Array.isArray(e) ? (e.push(t), e) : e ? [e, t] : t;
  };
  r.prototype._removeParent = function (t) {
    var e = this._parentage;
    if (e === t) {
      this._parentage = null;
    } else if (Array.isArray(e)) {
      k(e, t);
    }
  };
  r.prototype.remove = function (t) {
    var e = this._finalizers;
    if (e) {
      k(e, t);
    }
    if (t instanceof r) {
      t._removeParent(this);
    }
  };
  r.EMPTY = function () {
    var t = new r();
    t.closed = true;
    return t;
  }();
  return r;
}();
var ge = A.EMPTY;
function we(r) {
  return r instanceof A || r && "closed" in r && g(r.remove) && g(r.add) && g(r.unsubscribe);
}
function J(r) {
  if (g(r)) {
    r();
  } else {
    r.unsubscribe();
  }
}
var or = {
  Promise: undefined
};
var sr = {
  setTimeout: function (r, t) {
    var e = [];
    for (var n = 2; n < arguments.length; n++) {
      e[n - 2] = arguments[n];
    }
    return setTimeout.apply(undefined, P([r, t], M(e)));
  },
  clearTimeout: function (r) {
    return clearTimeout(r);
  },
  delegate: undefined
};
function xe(r) {
  sr.setTimeout(function () {
    throw r;
  });
}
function ee() {}
function I(r) {
  r();
}
var U = function (r) {
  S(t, r);
  function t(e) {
    var n = r.call(this) || this;
    n.isStopped = false;
    if (e) {
      n.destination = e;
      if (we(e)) {
        e.add(n);
      }
    } else {
      n.destination = ur;
    }
    return n;
  }
  t.create = function (e, n, i) {
    return new F(e, n, i);
  };
  t.prototype.next = function (e) {
    if (!this.isStopped) {
      this._next(e);
    }
  };
  t.prototype.error = function (e) {
    if (!this.isStopped) {
      this.isStopped = true;
      this._error(e);
    }
  };
  t.prototype.complete = function () {
    if (!this.isStopped) {
      this.isStopped = true;
      this._complete();
    }
  };
  t.prototype.unsubscribe = function () {
    if (!this.closed) {
      this.isStopped = true;
      r.prototype.unsubscribe.call(this);
      this.destination = null;
    }
  };
  t.prototype._next = function (e) {
    this.destination.next(e);
  };
  t.prototype._error = function (e) {
    try {
      this.destination.error(e);
    } finally {
      this.unsubscribe();
    }
  };
  t.prototype._complete = function () {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  };
  return t;
}(A);
var ar = function () {
  function r(t) {
    this.partialObserver = t;
  }
  r.prototype.next = function (t) {
    var e = this.partialObserver;
    if (e.next) {
      try {
        e.next(t);
      } catch (n) {
        _(n);
      }
    }
  };
  r.prototype.error = function (t) {
    var e = this.partialObserver;
    if (e.error) {
      try {
        e.error(t);
      } catch (n) {
        _(n);
      }
    } else {
      _(t);
    }
  };
  r.prototype.complete = function () {
    var t = this.partialObserver;
    if (t.complete) {
      try {
        t.complete();
      } catch (e) {
        _(e);
      }
    }
  };
  return r;
}();
var F = function (r) {
  S(t, r);
  function t(e, n, i) {
    var o = r.call(this) || this;
    var s;
    if (g(e) || !e) {
      s = {
        next: e ?? undefined,
        error: n ?? undefined,
        complete: i ?? undefined
      };
    } else {
      s = e;
    }
    o.destination = new ar(s);
    return o;
  }
  return t;
}(U);
function _(r) {
  xe(r);
}
function cr(r) {
  throw r;
}
var ur = {
  closed: true,
  next: ee,
  error: cr,
  complete: ee
};
var D = function () {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function lr(r) {
  return r;
}
function fr(r) {
  if (r.length === 0) {
    return lr;
  } else if (r.length === 1) {
    return r[0];
  } else {
    return function (e) {
      return r.reduce(function (n, i) {
        return i(n);
      }, e);
    };
  }
}
var j = function () {
  function r(t) {
    if (t) {
      this._subscribe = t;
    }
  }
  r.prototype.lift = function (t) {
    var e = new r();
    e.source = this;
    e.operator = t;
    return e;
  };
  r.prototype.subscribe = function (t, e, n) {
    var i = this;
    var o = hr(t) ? t : new F(t, e, n);
    I(function () {
      var s = i;
      var u = s.operator;
      var c = s.source;
      o.add(u ? u.call(o, c) : c ? i._subscribe(o) : i._trySubscribe(o));
    });
    return o;
  };
  r.prototype._trySubscribe = function (t) {
    try {
      return this._subscribe(t);
    } catch (e) {
      t.error(e);
    }
  };
  r.prototype.forEach = function (t, e) {
    var n = this;
    e = re(e);
    return new e(function (i, o) {
      var s = new F({
        next: function (u) {
          try {
            t(u);
          } catch (c) {
            o(c);
            s.unsubscribe();
          }
        },
        error: o,
        complete: i
      });
      n.subscribe(s);
    });
  };
  r.prototype._subscribe = function (t) {
    var e;
    if ((e = this.source) === null || e === undefined) {
      return undefined;
    } else {
      return e.subscribe(t);
    }
  };
  r.prototype[D] = function () {
    return this;
  };
  r.prototype.pipe = function () {
    var t = [];
    for (var e = 0; e < arguments.length; e++) {
      t[e] = arguments[e];
    }
    return fr(t)(this);
  };
  r.prototype.toPromise = function (t) {
    var e = this;
    t = re(t);
    return new t(function (n, i) {
      var o;
      e.subscribe(function (s) {
        return o = s;
      }, function (s) {
        return i(s);
      }, function () {
        return n(o);
      });
    });
  };
  r.create = function (t) {
    return new r(t);
  };
  return r;
}();
function re(r) {
  return r ?? or.Promise ?? Promise;
}
function dr(r) {
  return r && g(r.next) && g(r.error) && g(r.complete);
}
function hr(r) {
  return r && r instanceof U || dr(r) && we(r);
}
function pr(r) {
  return g(r == null ? undefined : r.lift);
}
function N(r) {
  return function (t) {
    if (pr(t)) {
      return t.lift(function (e) {
        try {
          return r(e, this);
        } catch (n) {
          this.error(n);
        }
      });
    }
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function $(r, t, e, n, i) {
  return new vr(r, t, e, n, i);
}
var vr = function (r) {
  S(t, r);
  function t(e, n, i, o, s, u) {
    var c = r.call(this, e) || this;
    c.onFinalize = s;
    c.shouldUnsubscribe = u;
    c._next = n ? function (f) {
      try {
        n(f);
      } catch (d) {
        e.error(d);
      }
    } : r.prototype._next;
    c._error = o ? function (f) {
      try {
        o(f);
      } catch (d) {
        e.error(d);
      } finally {
        this.unsubscribe();
      }
    } : r.prototype._error;
    c._complete = i ? function () {
      try {
        i();
      } catch (f) {
        e.error(f);
      } finally {
        this.unsubscribe();
      }
    } : r.prototype._complete;
    return c;
  }
  t.prototype.unsubscribe = function () {
    var e;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var n = this.closed;
      r.prototype.unsubscribe.call(this);
      if (!n) {
        if ((e = this.onFinalize) !== null && e !== undefined) {
          e.call(this);
        }
      }
    }
  };
  return t;
}(U);
var br = me(function (r) {
  return function () {
    r(this);
    this.name = "ObjectUnsubscribedError";
    this.message = "object unsubscribed";
  };
});
var je = function (r) {
  S(t, r);
  function t() {
    var e = r.call(this) || this;
    e.closed = false;
    e.currentObservers = null;
    e.observers = [];
    e.isStopped = false;
    e.hasError = false;
    e.thrownError = null;
    return e;
  }
  t.prototype.lift = function (e) {
    var n = new te(this, this);
    n.operator = e;
    return n;
  };
  t.prototype._throwIfClosed = function () {
    if (this.closed) {
      throw new br();
    }
  };
  t.prototype.next = function (e) {
    var n = this;
    I(function () {
      var i;
      var o;
      n._throwIfClosed();
      if (!n.isStopped) {
        n.currentObservers ||= Array.from(n.observers);
        try {
          for (var s = L(n.currentObservers), u = s.next(); !u.done; u = s.next()) {
            var c = u.value;
            c.next(e);
          }
        } catch (f) {
          i = {
            error: f
          };
        } finally {
          try {
            if (u && !u.done && (o = s.return)) {
              o.call(s);
            }
          } finally {
            if (i) {
              throw i.error;
            }
          }
        }
      }
    });
  };
  t.prototype.error = function (e) {
    var n = this;
    I(function () {
      n._throwIfClosed();
      if (!n.isStopped) {
        n.hasError = n.isStopped = true;
        n.thrownError = e;
        for (var i = n.observers; i.length;) {
          i.shift().error(e);
        }
      }
    });
  };
  t.prototype.complete = function () {
    var e = this;
    I(function () {
      e._throwIfClosed();
      if (!e.isStopped) {
        e.isStopped = true;
        for (var n = e.observers; n.length;) {
          n.shift().complete();
        }
      }
    });
  };
  t.prototype.unsubscribe = function () {
    this.isStopped = this.closed = true;
    this.observers = this.currentObservers = null;
  };
  Object.defineProperty(t.prototype, "observed", {
    get: function () {
      return this.observers?.length > 0;
    },
    enumerable: false,
    configurable: true
  });
  t.prototype._trySubscribe = function (e) {
    this._throwIfClosed();
    return r.prototype._trySubscribe.call(this, e);
  };
  t.prototype._subscribe = function (e) {
    this._throwIfClosed();
    this._checkFinalizedStatuses(e);
    return this._innerSubscribe(e);
  };
  t.prototype._innerSubscribe = function (e) {
    var n = this;
    var i = this;
    var o = i.hasError;
    var s = i.isStopped;
    var u = i.observers;
    if (o || s) {
      return ge;
    } else {
      this.currentObservers = null;
      u.push(e);
      return new A(function () {
        n.currentObservers = null;
        k(u, e);
      });
    }
  };
  t.prototype._checkFinalizedStatuses = function (e) {
    var n = this;
    var i = n.hasError;
    var o = n.thrownError;
    var s = n.isStopped;
    if (i) {
      e.error(o);
    } else if (s) {
      e.complete();
    }
  };
  t.prototype.asObservable = function () {
    var e = new j();
    e.source = this;
    return e;
  };
  t.create = function (e, n) {
    return new te(e, n);
  };
  return t;
}(j);
var te = function (r) {
  S(t, r);
  function t(e, n) {
    var i = r.call(this) || this;
    i.destination = e;
    i.source = n;
    return i;
  }
  t.prototype.next = function (e) {
    var n;
    var i;
    if ((i = (n = this.destination) === null || n === undefined ? undefined : n.next) !== null && i !== undefined) {
      i.call(n, e);
    }
  };
  t.prototype.error = function (e) {
    var n;
    var i;
    if ((i = (n = this.destination) === null || n === undefined ? undefined : n.error) !== null && i !== undefined) {
      i.call(n, e);
    }
  };
  t.prototype.complete = function () {
    var e;
    var n;
    if ((n = (e = this.destination) === null || e === undefined ? undefined : e.complete) !== null && n !== undefined) {
      n.call(e);
    }
  };
  t.prototype._subscribe = function (e) {
    var n;
    return ((n = this.source) === null || n === undefined ? undefined : n.subscribe(e)) ?? ge;
  };
  return t;
}(je);
var yr = {
  now: function () {
    return Date.now();
  }
};
var mr = function (r) {
  S(t, r);
  function t(e, n) {
    return r.call(this) || this;
  }
  t.prototype.schedule = function (e, n) {
    return this;
  };
  return t;
}(A);
var ne = {
  setInterval: function (r, t) {
    var e = [];
    for (var n = 2; n < arguments.length; n++) {
      e[n - 2] = arguments[n];
    }
    return setInterval.apply(undefined, P([r, t], M(e)));
  },
  clearInterval: function (r) {
    return clearInterval(r);
  },
  delegate: undefined
};
var gr = function (r) {
  S(t, r);
  function t(e, n) {
    var i = r.call(this, e, n) || this;
    i.scheduler = e;
    i.work = n;
    i.pending = false;
    return i;
  }
  t.prototype.schedule = function (e, n) {
    if (n === undefined) {
      n = 0;
    }
    if (this.closed) {
      return this;
    }
    this.state = e;
    var o = this.id;
    var s = this.scheduler;
    if (o != null) {
      this.id = this.recycleAsyncId(s, o, n);
    }
    this.pending = true;
    this.delay = n;
    this.id = this.id ?? this.requestAsyncId(s, this.id, n);
    return this;
  };
  t.prototype.requestAsyncId = function (e, n, i = 0) {
    return ne.setInterval(e.flush.bind(e, this), i);
  };
  t.prototype.recycleAsyncId = function (e, n, i = 0) {
    if (i != null && this.delay === i && this.pending === false) {
      return n;
    }
    if (n != null) {
      ne.clearInterval(n);
    }
  };
  t.prototype.execute = function (e, n) {
    if (this.closed) {
      return new Error("executing a cancelled action");
    }
    this.pending = false;
    var i = this._execute(e, n);
    if (i) {
      return i;
    }
    if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  };
  t.prototype._execute = function (e, n) {
    var i = false;
    var o;
    try {
      this.work(e);
    } catch (s) {
      i = true;
      o = s || new Error("Scheduled action threw falsy error");
    }
    if (i) {
      this.unsubscribe();
      return o;
    }
  };
  t.prototype.unsubscribe = function () {
    if (!this.closed) {
      var e = this;
      var n = e.id;
      var i = e.scheduler;
      var o = i.actions;
      this.work = this.state = this.scheduler = null;
      this.pending = false;
      k(o, this);
      if (n != null) {
        this.id = this.recycleAsyncId(i, n, null);
      }
      this.delay = null;
      r.prototype.unsubscribe.call(this);
    }
  };
  return t;
}(mr);
var ie = function () {
  function r(t, e = r.now) {
    this.schedulerActionCtor = t;
    this.now = e;
  }
  r.prototype.schedule = function (t, e = 0, n) {
    return new this.schedulerActionCtor(this, t).schedule(n, e);
  };
  r.now = yr.now;
  return r;
}();
var wr = function (r) {
  S(t, r);
  function t(e, n = ie.now) {
    var i = r.call(this, e, n) || this;
    i.actions = [];
    i._active = false;
    return i;
  }
  t.prototype.flush = function (e) {
    var n = this.actions;
    if (this._active) {
      n.push(e);
      return;
    }
    var i;
    this._active = true;
    do {
      if (i = e.execute(e.state, e.delay)) {
        break;
      }
    } while (e = n.shift());
    this._active = false;
    if (i) {
      while (e = n.shift()) {
        e.unsubscribe();
      }
      throw i;
    }
  };
  return t;
}(ie);
var xr = new wr(gr);
function jr(r) {
  return r && typeof r.length == "number" && typeof r != "function";
}
function Sr(r) {
  return g(r == null ? undefined : r.then);
}
function Or(r) {
  return g(r[D]);
}
function Ar(r) {
  return Symbol.asyncIterator && g(r == null ? undefined : r[Symbol.asyncIterator]);
}
function Er(r) {
  return new TypeError("You provided " + (r !== null && typeof r == "object" ? "an invalid object" : "'" + r + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function _r() {
  if (typeof Symbol != "function" || !Symbol.iterator) {
    return "@@iterator";
  } else {
    return Symbol.iterator;
  }
}
var Ir = _r();
function Lr(r) {
  return g(r == null ? undefined : r[Ir]);
}
function Pr(r) {
  return Ae(this, arguments, function () {
    var e;
    var n;
    var i;
    var o;
    return ce(this, function (s) {
      switch (s.label) {
        case 0:
          e = r.getReader();
          s.label = 1;
        case 1:
          s.trys.push([1,, 9, 10]);
          s.label = 2;
        case 2:
          return [4, C(e.read())];
        case 3:
          n = s.sent();
          i = n.value;
          o = n.done;
          if (o) {
            return [4, C(undefined)];
          } else {
            return [3, 5];
          }
        case 4:
          return [2, s.sent()];
        case 5:
          return [4, C(i)];
        case 6:
          return [4, s.sent()];
        case 7:
          s.sent();
          return [3, 2];
        case 8:
          return [3, 10];
        case 9:
          e.releaseLock();
          return [7];
        case 10:
          return [2];
      }
    });
  });
}
function Mr(r) {
  return g(r == null ? undefined : r.getReader);
}
function Tr(r) {
  if (r instanceof j) {
    return r;
  }
  if (r != null) {
    if (Or(r)) {
      return kr(r);
    }
    if (jr(r)) {
      return $r(r);
    }
    if (Sr(r)) {
      return Cr(r);
    }
    if (Ar(r)) {
      return Se(r);
    }
    if (Lr(r)) {
      return Rr(r);
    }
    if (Mr(r)) {
      return Vr(r);
    }
  }
  throw Er(r);
}
function kr(r) {
  return new j(function (t) {
    var e = r[D]();
    if (g(e.subscribe)) {
      return e.subscribe(t);
    }
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function $r(r) {
  return new j(function (t) {
    for (var e = 0; e < r.length && !t.closed; e++) {
      t.next(r[e]);
    }
    t.complete();
  });
}
function Cr(r) {
  return new j(function (t) {
    r.then(function (e) {
      if (!t.closed) {
        t.next(e);
        t.complete();
      }
    }, function (e) {
      return t.error(e);
    }).then(null, xe);
  });
}
function Rr(r) {
  return new j(function (t) {
    var e;
    var n;
    try {
      for (var i = L(r), o = i.next(); !o.done; o = i.next()) {
        var s = o.value;
        t.next(s);
        if (t.closed) {
          return;
        }
      }
    } catch (u) {
      e = {
        error: u
      };
    } finally {
      try {
        if (o && !o.done && (n = i.return)) {
          n.call(i);
        }
      } finally {
        if (e) {
          throw e.error;
        }
      }
    }
    t.complete();
  });
}
function Se(r) {
  return new j(function (t) {
    Fr(r, t).catch(function (e) {
      return t.error(e);
    });
  });
}
function Vr(r) {
  return Se(Pr(r));
}
function Fr(r, t) {
  var e;
  var n;
  var i;
  var o;
  return Ee(this, undefined, undefined, function () {
    var s;
    var u;
    return ce(this, function (c) {
      switch (c.label) {
        case 0:
          c.trys.push([0, 5, 6, 11]);
          e = _e(r);
          c.label = 1;
        case 1:
          return [4, e.next()];
        case 2:
          n = c.sent();
          if (n.done) {
            return [3, 4];
          }
          s = n.value;
          t.next(s);
          if (t.closed) {
            return [2];
          }
          c.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          u = c.sent();
          i = {
            error: u
          };
          return [3, 11];
        case 6:
          c.trys.push([6,, 9, 10]);
          if (n && !n.done && (o = e.return)) {
            return [4, o.call(e)];
          } else {
            return [3, 8];
          }
        case 7:
          c.sent();
          c.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (i) {
            throw i.error;
          }
          return [7];
        case 10:
          return [7];
        case 11:
          t.complete();
          return [2];
      }
    });
  });
}
function oe(r, t) {
  return N(function (e, n) {
    var i = 0;
    e.subscribe($(n, function (o) {
      return r.call(t, o, i++) && n.next(o);
    }));
  });
}
function Zr(r, t = xr) {
  return N(function (e, n) {
    var i = null;
    var o = null;
    var s = null;
    function u() {
      if (i) {
        i.unsubscribe();
        i = null;
        var f = o;
        o = null;
        n.next(f);
      }
    }
    function c() {
      var f = s + r;
      var d = t.now();
      if (d < f) {
        i = this.schedule(undefined, f - d);
        n.add(i);
        return;
      }
      u();
    }
    e.subscribe($(n, function (f) {
      o = f;
      s = t.now();
      if (!i) {
        i = t.schedule(c, r);
        n.add(i);
      }
    }, function () {
      u();
      n.complete();
    }, undefined, function () {
      o = i = null;
    }));
  });
}
function se(r, t) {
  return N(function (e, n) {
    var i = null;
    var o = 0;
    var s = false;
    function u() {
      return s && !i && n.complete();
    }
    e.subscribe($(n, function (c) {
      if (i != null) {
        i.unsubscribe();
      }
      var f = 0;
      var d = o++;
      Tr(r(c, d)).subscribe(i = $(n, function (m) {
        return n.next(t ? t(c, m, d, f++) : m);
      }, function () {
        i = null;
        u();
      }));
    }, function () {
      s = true;
      u();
    }));
  });
}
var ae;
const b = (ae = globalThis["claude.internal.findInPage"]) == null ? undefined : ae.FindInPage;
function V({
  bordered: r,
  children: t,
  ...e
}) {
  return <button type="button" className={ir("w-[30px] h-[30px] rounded-lg text-text-300 border flex items-center justify-center disabled:opacity-50 disabled:pointer-events-none", r ? "border-border-300 hover:border-border-200" : "border-transparent hover:bg-bg-200")} {...e}>{t}</button>;
}
function Nr() {
  const r = ue();
  const t = p.useRef(null);
  const e = p.useRef(0);
  const [n] = p.useState(new je());
  const [i, o] = p.useState("");
  const [s, u] = p.useState(0);
  const [c, f] = p.useState(null);
  p.useEffect(() => {
    let h;
    const l = () => {
      if (document.visibilityState !== "visible") {
        return;
      }
      const v = t.current;
      if (v && document.activeElement !== v) {
        if (h) {
          clearTimeout(h);
        }
        h = setTimeout(() => {
          h = undefined;
          const E = t.current;
          if (!!E && document.activeElement !== E) {
            E.focus();
            E.select();
          }
        }, 100);
      }
    };
    document.addEventListener("visibilitychange", l);
    window.addEventListener("focus", l);
    return () => {
      if (h) {
        clearTimeout(h);
      }
      document.removeEventListener("visibilitychange", l);
      window.removeEventListener("focus", l);
    };
  }, []);
  p.useEffect(() => {
    const h = n.pipe(oe(v => v !== null && v.length > 2), Zr(250), se(v => b.findInPage(v, {
      findNext: true
    }).catch(() => null))).subscribe(v => {
      u((v == null ? undefined : v.activeIndex) || 0);
      f((v == null ? undefined : v.total) || 0);
    });
    const l = n.pipe(oe(v => v === null || v.length < 2), se(() => b.stopFindInPage().catch(() => {}))).subscribe(() => {
      u(0);
      f(0);
    });
    return () => {
      h.unsubscribe();
      l.unsubscribe();
    };
  }, [n]);
  const d = p.useCallback(h => {
    e.current = performance.now();
    o(h.target.value);
    f(null);
    n.next(h.target.value);
  }, [o, n]);
  const m = p.useCallback(() => {
    setTimeout(() => {
      o("");
      n.next("");
    }, 100);
    b.endFindSession().catch(() => {});
  }, [o, n]);
  const y = p.useCallback(async h => {
    try {
      const l = await b.findInPage(i, {
        findNext: false,
        forward: h
      });
      u((l == null ? undefined : l.activeIndex) || 0);
      f((l == null ? undefined : l.total) || 0);
    } catch {}
  }, [i]);
  p.useEffect(() => {
    var h;
    if ((h = b == null ? undefined : b.onStepToMatch) == null) {
      return undefined;
    } else {
      return h.call(b, l => {
        if (i.length > 2) {
          y(l);
        }
      });
    }
  }, [y, i]);
  p.useEffect(() => {
    var h;
    if ((h = b == null ? undefined : b.onFocusInput) == null) {
      return undefined;
    } else {
      return h.call(b, () => {
        window.focus();
        const l = t.current;
        if (l != null) {
          l.focus();
        }
        if (performance.now() - e.current > 400) {
          if (l != null) {
            l.select();
          }
        }
      });
    }
  }, []);
  p.useEffect(() => {
    var h;
    if ((h = b == null ? undefined : b.onBlurInput) == null) {
      return undefined;
    } else {
      return h.call(b, () => {
        var l;
        if ((l = t.current) != null) {
          l.blur();
        }
      });
    }
  }, []);
  const w = p.useMemo(() => i.length > 2 && c !== null ? `${s}/${c}` : "", [i, c, s]);
  return <div className="font-sans fixed inset-0 m-2 rounded-lg p-3 flex items-center gap-2 bg-bg-000 shadow-element"><div className="flex-1"><Ur value={i} onChange={d} onSearchNext={() => y(true)} onSearchPrevious={() => y(false)} onDismissSearchRequest={m} inputRef={t} /></div><span id="findInPageCount" role="status" className="text-xs text-nowrap text-text-500 tabular-nums select-none">{w}</span><V onClick={() => y(false)} disabled={w === "" || s <= 1} aria-label={r.formatMessage({
      id: "dxTrXnjtp0",
      defaultMessage: "Previous match",
      description: "Accessible label for the find-in-page button that jumps to the previous search match"
    })}><_Component aria-hidden="true" /></V><V onClick={() => y(true)} disabled={w === "" || !c || s >= c} aria-label={r.formatMessage({
      id: "lu0ZPQSzrk",
      defaultMessage: "Next match",
      description: "Accessible label for the find-in-page button that jumps to the next search match"
    })}><_Component2 aria-hidden="true" /></V><V bordered={true} onClick={m} aria-label={r.formatMessage({
      id: "t0wMcoAvaD",
      defaultMessage: "Close find bar",
      description: "Accessible label for the button that closes the find-in-page bar"
    })}><_Component3 aria-hidden="true" /></V></div>;
}
function Ur({
  value: r,
  onChange: t,
  onSearchNext: e,
  onSearchPrevious: n,
  onDismissSearchRequest: i,
  inputRef: o
}) {
  const s = ue();
  const u = p.useCallback(c => {
    if (c.key === "Enter") {
      if (c.shiftKey) {
        n();
      } else {
        e();
      }
      return;
    }
    if (c.key === "Escape") {
      i();
      return;
    }
  }, [e, n, i]);
  return <input ref={o} type="text" className="p-0 pl-1 w-full border-none outline-none focus:ring-0 text-text-200 bg-transparent placeholder:text-text-400 placeholder:opacity-70" placeholder={s.formatMessage({
    id: "sNnRQsIEYz",
    defaultMessage: "Find in page",
    description: "Placeholder text shown in the search input field that allows users to search for text within the current page"
  })} value={r} onKeyUp={u} onChange={t} />;
}
export { Nr as default };