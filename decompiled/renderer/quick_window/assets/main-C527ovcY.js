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
    var r = new t.Error().stack;
    if (r) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[r] = "193cf4eb-e7bc-45a4-92df-3a60c3c28957";
      t._sentryDebugIdIdentifier = "sentry-dbid-193cf4eb-e7bc-45a4-92df-3a60c3c28957";
    }
  })();
} catch {}
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) {
    return;
  }
  for (const a of document.querySelectorAll("link[rel=\"modulepreload\"]")) {
    s(a);
  }
  new MutationObserver(a => {
    for (const c of a) {
      if (c.type === "childList") {
        for (const d of c.addedNodes) {
          if (d.tagName === "LINK" && d.rel === "modulepreload") {
            s(d);
          }
        }
      }
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function i(a) {
    const c = {};
    if (a.integrity) {
      c.integrity = a.integrity;
    }
    if (a.referrerPolicy) {
      c.referrerPolicy = a.referrerPolicy;
    }
    if (a.crossOrigin === "use-credentials") {
      c.credentials = "include";
    } else if (a.crossOrigin === "anonymous") {
      c.credentials = "omit";
    } else {
      c.credentials = "same-origin";
    }
    return c;
  }
  function s(a) {
    if (a.ep) {
      return;
    }
    a.ep = true;
    const c = i(a);
    fetch(a.href, c);
  }
})();
const Dy = "" + new URL("AnthropicSans-Italic-Variable-Dqj5mHDM.ttf", import.meta.url).href;
const Fy = "" + new URL("AnthropicSans-Roman-Variable-DCEzLfgm.ttf", import.meta.url).href;
const Hy = "" + new URL("AnthropicSerif-Italic-Variable-B9Ik5ODi.ttf", import.meta.url).href;
const By = "" + new URL("AnthropicSerif-Roman-Variable-D05ngSTe.ttf", import.meta.url).href;
const Uy = `
@font-face {
    font-family: 'Anthropic Sans';
    src: url('${Fy}') format('truetype');
    font-weight: 300 800;
    font-style: normal;
}

@font-face {
    font-family: 'Anthropic Sans';
    src: url('${Dy}') format('truetype');
    font-weight: 300 800;
    font-style: italic;
}

@font-face {
    font-family: 'Anthropic Serif';
    src: url('${By}') format('truetype');
    font-weight: 300 800;
    font-style: normal;
}

@font-face {
    font-family: 'Anthropic Serif';
    src: url('${Hy}') format('truetype');
    font-weight: 300 800;
    font-style: italic;
}
`;
const ah = document.createElement("style");
ah.textContent = Uy;
document.head.appendChild(ah);
var fa = {
  exports: {}
};
var Ei = {};
var da = {
  exports: {}
};
var te = {};
/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var kd;
function jy() {
  if (kd) {
    return te;
  }
  kd = 1;
  var t = Symbol.for("react.element");
  var r = Symbol.for("react.portal");
  var i = Symbol.for("react.fragment");
  var s = Symbol.for("react.strict_mode");
  var a = Symbol.for("react.profiler");
  var c = Symbol.for("react.provider");
  var d = Symbol.for("react.context");
  var m = Symbol.for("react.forward_ref");
  var h = Symbol.for("react.suspense");
  var g = Symbol.for("react.memo");
  var v = Symbol.for("react.lazy");
  var S = Symbol.iterator;
  function k(w) {
    if (w === null || typeof w != "object") {
      return null;
    } else {
      w = S && w[S] || w["@@iterator"];
      if (typeof w == "function") {
        return w;
      } else {
        return null;
      }
    }
  }
  var I = {
    isMounted: function () {
      return false;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  };
  var M = Object.assign;
  var O = {};
  function H(w, P, ee) {
    this.props = w;
    this.context = P;
    this.refs = O;
    this.updater = ee || I;
  }
  H.prototype.isReactComponent = {};
  H.prototype.setState = function (w, P) {
    if (typeof w != "object" && typeof w != "function" && w != null) {
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    }
    this.updater.enqueueSetState(this, w, P, "setState");
  };
  H.prototype.forceUpdate = function (w) {
    this.updater.enqueueForceUpdate(this, w, "forceUpdate");
  };
  function Z() {}
  Z.prototype = H.prototype;
  function Q(w, P, ee) {
    this.props = w;
    this.context = P;
    this.refs = O;
    this.updater = ee || I;
  }
  var q = Q.prototype = new Z();
  q.constructor = Q;
  M(q, H.prototype);
  q.isPureReactComponent = true;
  var ie = Array.isArray;
  var b = Object.prototype.hasOwnProperty;
  var ce = {
    current: null
  };
  var Oe = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function st(w, P, ee) {
    var ne;
    var ue = {};
    var ae = null;
    var me = null;
    if (P != null) {
      if (P.ref !== undefined) {
        me = P.ref;
      }
      if (P.key !== undefined) {
        ae = "" + P.key;
      }
      for (ne in P) {
        if (b.call(P, ne) && !Oe.hasOwnProperty(ne)) {
          ue[ne] = P[ne];
        }
      }
    }
    var de = arguments.length - 2;
    if (de === 1) {
      ue.children = ee;
    } else if (de > 1) {
      var Ee = Array(de);
      for (var at = 0; at < de; at++) {
        Ee[at] = arguments[at + 2];
      }
      ue.children = Ee;
    }
    if (w && w.defaultProps) {
      de = w.defaultProps;
      for (ne in de) {
        if (ue[ne] === undefined) {
          ue[ne] = de[ne];
        }
      }
    }
    return {
      $$typeof: t,
      type: w,
      key: ae,
      ref: me,
      props: ue,
      _owner: ce.current
    };
  }
  function nn(w, P) {
    return {
      $$typeof: t,
      type: w.type,
      key: P,
      ref: w.ref,
      props: w.props,
      _owner: w._owner
    };
  }
  function $t(w) {
    return typeof w == "object" && w !== null && w.$$typeof === t;
  }
  function Pn(w) {
    var P = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + w.replace(/[=:]/g, function (ee) {
      return P[ee];
    });
  }
  var Lt = /\/+/g;
  function ut(w, P) {
    if (typeof w == "object" && w !== null && w.key != null) {
      return Pn("" + w.key);
    } else {
      return P.toString(36);
    }
  }
  function wt(w, P, ee, ne, ue) {
    var ae = typeof w;
    if (ae === "undefined" || ae === "boolean") {
      w = null;
    }
    var me = false;
    if (w === null) {
      me = true;
    } else {
      switch (ae) {
        case "string":
        case "number":
          me = true;
          break;
        case "object":
          switch (w.$$typeof) {
            case t:
            case r:
              me = true;
          }
      }
    }
    if (me) {
      me = w;
      ue = ue(me);
      w = ne === "" ? "." + ut(me, 0) : ne;
      if (ie(ue)) {
        ee = "";
        if (w != null) {
          ee = w.replace(Lt, "$&/") + "/";
        }
        wt(ue, P, ee, "", function (at) {
          return at;
        });
      } else if (ue != null) {
        if ($t(ue)) {
          ue = nn(ue, ee + (!ue.key || me && me.key === ue.key ? "" : ("" + ue.key).replace(Lt, "$&/") + "/") + w);
        }
        P.push(ue);
      }
      return 1;
    }
    me = 0;
    ne = ne === "" ? "." : ne + ":";
    if (ie(w)) {
      for (var de = 0; de < w.length; de++) {
        ae = w[de];
        var Ee = ne + ut(ae, de);
        me += wt(ae, P, ee, Ee, ue);
      }
    } else {
      Ee = k(w);
      if (typeof Ee == "function") {
        w = Ee.call(w);
        de = 0;
        while (!(ae = w.next()).done) {
          ae = ae.value;
          Ee = ne + ut(ae, de++);
          me += wt(ae, P, ee, Ee, ue);
        }
      } else if (ae === "object") {
        P = String(w);
        throw Error("Objects are not valid as a React child (found: " + (P === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : P) + "). If you meant to render a collection of children, use an array instead.");
      }
    }
    return me;
  }
  function Ot(w, P, ee) {
    if (w == null) {
      return w;
    }
    var ne = [];
    var ue = 0;
    wt(w, ne, "", "", function (ae) {
      return P.call(ee, ae, ue++);
    });
    return ne;
  }
  function Je(w) {
    if (w._status === -1) {
      var P = w._result;
      P = P();
      P.then(function (ee) {
        if (w._status === 0 || w._status === -1) {
          w._status = 1;
          w._result = ee;
        }
      }, function (ee) {
        if (w._status === 0 || w._status === -1) {
          w._status = 2;
          w._result = ee;
        }
      });
      if (w._status === -1) {
        w._status = 0;
        w._result = P;
      }
    }
    if (w._status === 1) {
      return w._result.default;
    }
    throw w._result;
  }
  var Ie = {
    current: null
  };
  var D = {
    transition: null
  };
  var X = {
    ReactCurrentDispatcher: Ie,
    ReactCurrentBatchConfig: D,
    ReactCurrentOwner: ce
  };
  function U() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  te.Children = {
    map: Ot,
    forEach: function (w, P, ee) {
      Ot(w, function () {
        P.apply(this, arguments);
      }, ee);
    },
    count: function (w) {
      var P = 0;
      Ot(w, function () {
        P++;
      });
      return P;
    },
    toArray: function (w) {
      return Ot(w, function (P) {
        return P;
      }) || [];
    },
    only: function (w) {
      if (!$t(w)) {
        throw Error("React.Children.only expected to receive a single React element child.");
      }
      return w;
    }
  };
  te.Component = H;
  te.Fragment = i;
  te.Profiler = a;
  te.PureComponent = Q;
  te.StrictMode = s;
  te.Suspense = h;
  te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X;
  te.act = U;
  te.cloneElement = function (w, P, ee) {
    if (w == null) {
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + w + ".");
    }
    var ne = M({}, w.props);
    var ue = w.key;
    var ae = w.ref;
    var me = w._owner;
    if (P != null) {
      if (P.ref !== undefined) {
        ae = P.ref;
        me = ce.current;
      }
      if (P.key !== undefined) {
        ue = "" + P.key;
      }
      if (w.type && w.type.defaultProps) {
        var de = w.type.defaultProps;
      }
      for (Ee in P) {
        if (b.call(P, Ee) && !Oe.hasOwnProperty(Ee)) {
          ne[Ee] = P[Ee] === undefined && de !== undefined ? de[Ee] : P[Ee];
        }
      }
    }
    var Ee = arguments.length - 2;
    if (Ee === 1) {
      ne.children = ee;
    } else if (Ee > 1) {
      de = Array(Ee);
      for (var at = 0; at < Ee; at++) {
        de[at] = arguments[at + 2];
      }
      ne.children = de;
    }
    return {
      $$typeof: t,
      type: w.type,
      key: ue,
      ref: ae,
      props: ne,
      _owner: me
    };
  };
  te.createContext = function (w) {
    w = {
      $$typeof: d,
      _currentValue: w,
      _currentValue2: w,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    };
    w.Provider = {
      $$typeof: c,
      _context: w
    };
    return w.Consumer = w;
  };
  te.createElement = st;
  te.createFactory = function (w) {
    var P = st.bind(null, w);
    P.type = w;
    return P;
  };
  te.createRef = function () {
    return {
      current: null
    };
  };
  te.forwardRef = function (w) {
    return {
      $$typeof: m,
      render: w
    };
  };
  te.isValidElement = $t;
  te.lazy = function (w) {
    return {
      $$typeof: v,
      _payload: {
        _status: -1,
        _result: w
      },
      _init: Je
    };
  };
  te.memo = function (w, P) {
    return {
      $$typeof: g,
      type: w,
      compare: P === undefined ? null : P
    };
  };
  te.startTransition = function (w) {
    var P = D.transition;
    D.transition = {};
    try {
      w();
    } finally {
      D.transition = P;
    }
  };
  te.unstable_act = U;
  te.useCallback = function (w, P) {
    return Ie.current.useCallback(w, P);
  };
  te.useContext = function (w) {
    return Ie.current.useContext(w);
  };
  te.useDebugValue = function () {};
  te.useDeferredValue = function (w) {
    return Ie.current.useDeferredValue(w);
  };
  te.useEffect = function (w, P) {
    return Ie.current.useEffect(w, P);
  };
  te.useId = function () {
    return Ie.current.useId();
  };
  te.useImperativeHandle = function (w, P, ee) {
    return Ie.current.useImperativeHandle(w, P, ee);
  };
  te.useInsertionEffect = function (w, P) {
    return Ie.current.useInsertionEffect(w, P);
  };
  te.useLayoutEffect = function (w, P) {
    return Ie.current.useLayoutEffect(w, P);
  };
  te.useMemo = function (w, P) {
    return Ie.current.useMemo(w, P);
  };
  te.useReducer = function (w, P, ee) {
    return Ie.current.useReducer(w, P, ee);
  };
  te.useRef = function (w) {
    return Ie.current.useRef(w);
  };
  te.useState = function (w) {
    return Ie.current.useState(w);
  };
  te.useSyncExternalStore = function (w, P, ee) {
    return Ie.current.useSyncExternalStore(w, P, ee);
  };
  te.useTransition = function () {
    return Ie.current.useTransition();
  };
  te.version = "18.3.1";
  return te;
}
var Cd;
function ul() {
  if (!Cd) {
    Cd = 1;
    da.exports = jy();
  }
  return da.exports;
} /**
  * @license React
  * react-jsx-runtime.production.min.js
  *
  * Copyright (c) Facebook, Inc. and its affiliates.
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */
var Pd;
function zy() {
  if (Pd) {
    return Ei;
  }
  Pd = 1;
  var t = ul();
  var r = Symbol.for("react.element");
  var i = Symbol.for("react.fragment");
  var s = Object.prototype.hasOwnProperty;
  var a = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
  var c = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function d(m, h, g) {
    var v;
    var S = {};
    var k = null;
    var I = null;
    if (g !== undefined) {
      k = "" + g;
    }
    if (h.key !== undefined) {
      k = "" + h.key;
    }
    if (h.ref !== undefined) {
      I = h.ref;
    }
    for (v in h) {
      if (s.call(h, v) && !c.hasOwnProperty(v)) {
        S[v] = h[v];
      }
    }
    if (m && m.defaultProps) {
      h = m.defaultProps;
      for (v in h) {
        if (S[v] === undefined) {
          S[v] = h[v];
        }
      }
    }
    return {
      $$typeof: r,
      type: m,
      key: k,
      ref: I,
      props: S,
      _owner: a.current
    };
  }
  Ei.Fragment = i;
  Ei.jsx = d;
  Ei.jsxs = d;
  return Ei;
}
var Rd;
function $y() {
  if (!Rd) {
    Rd = 1;
    fa.exports = zy();
  }
  return fa.exports;
}
var Oa = $y();
var Ze = ul();
var Vo = {};
var pa = {
  exports: {}
};
var ot = {};
var ha = {
  exports: {}
};
var ma = {};
/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Ld;
function Gy() {
  if (!Ld) {
    Ld = 1;
    (function (t) {
      function r(D, X) {
        var U = D.length;
        D.push(X);
        e: while (U > 0) {
          var w = U - 1 >>> 1;
          var P = D[w];
          if (a(P, X) > 0) {
            D[w] = X;
            D[U] = P;
            U = w;
          } else {
            break e;
          }
        }
      }
      function i(D) {
        if (D.length === 0) {
          return null;
        } else {
          return D[0];
        }
      }
      function s(D) {
        if (D.length === 0) {
          return null;
        }
        var X = D[0];
        var U = D.pop();
        if (U !== X) {
          D[0] = U;
          e: for (var w = 0, P = D.length, ee = P >>> 1; w < ee;) {
            var ne = (w + 1) * 2 - 1;
            var ue = D[ne];
            var ae = ne + 1;
            var me = D[ae];
            if (a(ue, U) < 0) {
              if (ae < P && a(me, ue) < 0) {
                D[w] = me;
                D[ae] = U;
                w = ae;
              } else {
                D[w] = ue;
                D[ne] = U;
                w = ne;
              }
            } else if (ae < P && a(me, U) < 0) {
              D[w] = me;
              D[ae] = U;
              w = ae;
            } else {
              break e;
            }
          }
        }
        return X;
      }
      function a(D, X) {
        var U = D.sortIndex - X.sortIndex;
        if (U !== 0) {
          return U;
        } else {
          return D.id - X.id;
        }
      }
      if (typeof performance == "object" && typeof performance.now == "function") {
        var c = performance;
        t.unstable_now = function () {
          return c.now();
        };
      } else {
        var d = Date;
        var m = d.now();
        t.unstable_now = function () {
          return d.now() - m;
        };
      }
      var h = [];
      var g = [];
      var v = 1;
      var S = null;
      var k = 3;
      var I = false;
      var M = false;
      var O = false;
      var H = typeof setTimeout == "function" ? setTimeout : null;
      var Z = typeof clearTimeout == "function" ? clearTimeout : null;
      var Q = typeof setImmediate !== "undefined" ? setImmediate : null;
      if (typeof navigator !== "undefined" && navigator.scheduling !== undefined && navigator.scheduling.isInputPending !== undefined) {
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
      }
      function q(D) {
        for (var X = i(g); X !== null;) {
          if (X.callback === null) {
            s(g);
          } else if (X.startTime <= D) {
            s(g);
            X.sortIndex = X.expirationTime;
            r(h, X);
          } else {
            break;
          }
          X = i(g);
        }
      }
      function ie(D) {
        O = false;
        q(D);
        if (!M) {
          if (i(h) !== null) {
            M = true;
            Je(b);
          } else {
            var X = i(g);
            if (X !== null) {
              Ie(ie, X.startTime - D);
            }
          }
        }
      }
      function b(D, X) {
        M = false;
        if (O) {
          O = false;
          Z(st);
          st = -1;
        }
        I = true;
        var U = k;
        try {
          q(X);
          S = i(h);
          while (S !== null && (!(S.expirationTime > X) || D && !Pn())) {
            var w = S.callback;
            if (typeof w == "function") {
              S.callback = null;
              k = S.priorityLevel;
              var P = w(S.expirationTime <= X);
              X = t.unstable_now();
              if (typeof P == "function") {
                S.callback = P;
              } else if (S === i(h)) {
                s(h);
              }
              q(X);
            } else {
              s(h);
            }
            S = i(h);
          }
          if (S !== null) {
            var ee = true;
          } else {
            var ne = i(g);
            if (ne !== null) {
              Ie(ie, ne.startTime - X);
            }
            ee = false;
          }
          return ee;
        } finally {
          S = null;
          k = U;
          I = false;
        }
      }
      var ce = false;
      var Oe = null;
      var st = -1;
      var nn = 5;
      var $t = -1;
      function Pn() {
        return !(t.unstable_now() - $t < nn);
      }
      function Lt() {
        if (Oe !== null) {
          var D = t.unstable_now();
          $t = D;
          var X = true;
          try {
            X = Oe(true, D);
          } finally {
            if (X) {
              ut();
            } else {
              ce = false;
              Oe = null;
            }
          }
        } else {
          ce = false;
        }
      }
      var ut;
      if (typeof Q == "function") {
        ut = function () {
          Q(Lt);
        };
      } else if (typeof MessageChannel !== "undefined") {
        var wt = new MessageChannel();
        var Ot = wt.port2;
        wt.port1.onmessage = Lt;
        ut = function () {
          Ot.postMessage(null);
        };
      } else {
        ut = function () {
          H(Lt, 0);
        };
      }
      function Je(D) {
        Oe = D;
        if (!ce) {
          ce = true;
          ut();
        }
      }
      function Ie(D, X) {
        st = H(function () {
          D(t.unstable_now());
        }, X);
      }
      t.unstable_IdlePriority = 5;
      t.unstable_ImmediatePriority = 1;
      t.unstable_LowPriority = 4;
      t.unstable_NormalPriority = 3;
      t.unstable_Profiling = null;
      t.unstable_UserBlockingPriority = 2;
      t.unstable_cancelCallback = function (D) {
        D.callback = null;
      };
      t.unstable_continueExecution = function () {
        if (!M && !I) {
          M = true;
          Je(b);
        }
      };
      t.unstable_forceFrameRate = function (D) {
        if (D < 0 || D > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
        } else {
          nn = D > 0 ? Math.floor(1000 / D) : 5;
        }
      };
      t.unstable_getCurrentPriorityLevel = function () {
        return k;
      };
      t.unstable_getFirstCallbackNode = function () {
        return i(h);
      };
      t.unstable_next = function (D) {
        switch (k) {
          case 1:
          case 2:
          case 3:
            var X = 3;
            break;
          default:
            X = k;
        }
        var U = k;
        k = X;
        try {
          return D();
        } finally {
          k = U;
        }
      };
      t.unstable_pauseExecution = function () {};
      t.unstable_requestPaint = function () {};
      t.unstable_runWithPriority = function (D, X) {
        switch (D) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            D = 3;
        }
        var U = k;
        k = D;
        try {
          return X();
        } finally {
          k = U;
        }
      };
      t.unstable_scheduleCallback = function (D, X, U) {
        var w = t.unstable_now();
        if (typeof U == "object" && U !== null) {
          U = U.delay;
          U = typeof U == "number" && U > 0 ? w + U : w;
        } else {
          U = w;
        }
        switch (D) {
          case 1:
            var P = -1;
            break;
          case 2:
            P = 250;
            break;
          case 5:
            P = 1073741823;
            break;
          case 4:
            P = 10000;
            break;
          default:
            P = 5000;
        }
        P = U + P;
        D = {
          id: v++,
          callback: X,
          priorityLevel: D,
          startTime: U,
          expirationTime: P,
          sortIndex: -1
        };
        if (U > w) {
          D.sortIndex = U;
          r(g, D);
          if (i(h) === null && D === i(g)) {
            if (O) {
              Z(st);
              st = -1;
            } else {
              O = true;
            }
            Ie(ie, U - w);
          }
        } else {
          D.sortIndex = P;
          r(h, D);
          if (!M && !I) {
            M = true;
            Je(b);
          }
        }
        return D;
      };
      t.unstable_shouldYield = Pn;
      t.unstable_wrapCallback = function (D) {
        var X = k;
        return function () {
          var U = k;
          k = X;
          try {
            return D.apply(this, arguments);
          } finally {
            k = U;
          }
        };
      };
    })(ma);
  }
  return ma;
}
var Od;
function Vy() {
  if (!Od) {
    Od = 1;
    ha.exports = Gy();
  }
  return ha.exports;
} /**
  * @license React
  * react-dom.production.min.js
  *
  * Copyright (c) Facebook, Inc. and its affiliates.
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */
var Ad;
function Wy() {
  if (Ad) {
    return ot;
  }
  Ad = 1;
  var t = ul();
  var r = Vy();
  function i(e) {
    var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e;
    for (var o = 1; o < arguments.length; o++) {
      n += "&args[]=" + encodeURIComponent(arguments[o]);
    }
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var s = new Set();
  var a = {};
  function c(e, n) {
    d(e, n);
    d(e + "Capture", n);
  }
  function d(e, n) {
    a[e] = n;
    e = 0;
    for (; e < n.length; e++) {
      s.add(n[e]);
    }
  }
  var m = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
  var h = Object.prototype.hasOwnProperty;
  var g = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
  var v = {};
  var S = {};
  function k(e) {
    if (h.call(S, e)) {
      return true;
    } else if (h.call(v, e)) {
      return false;
    } else if (g.test(e)) {
      return S[e] = true;
    } else {
      v[e] = true;
      return false;
    }
  }
  function I(e, n, o, u) {
    if (o !== null && o.type === 0) {
      return false;
    }
    switch (typeof n) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        if (u) {
          return false;
        } else if (o !== null) {
          return !o.acceptsBooleans;
        } else {
          e = e.toLowerCase().slice(0, 5);
          return e !== "data-" && e !== "aria-";
        }
      default:
        return false;
    }
  }
  function M(e, n, o, u) {
    if (n === null || typeof n === "undefined" || I(e, n, o, u)) {
      return true;
    }
    if (u) {
      return false;
    }
    if (o !== null) {
      switch (o.type) {
        case 3:
          return !n;
        case 4:
          return n === false;
        case 5:
          return isNaN(n);
        case 6:
          return isNaN(n) || n < 1;
      }
    }
    return false;
  }
  function O(e, n, o, u, l, f, p) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4;
    this.attributeName = u;
    this.attributeNamespace = l;
    this.mustUseProperty = o;
    this.propertyName = e;
    this.type = n;
    this.sanitizeURL = f;
    this.removeEmptyString = p;
  }
  var H = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
    H[e] = new O(e, 0, false, e, null, false, false);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) {
    var n = e[0];
    H[n] = new O(n, 1, false, e[1], null, false, false);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    H[e] = new O(e, 2, false, e.toLowerCase(), null, false, false);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    H[e] = new O(e, 2, false, e, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
    H[e] = new O(e, 3, false, e.toLowerCase(), null, false, false);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function (e) {
    H[e] = new O(e, 3, true, e, null, false, false);
  });
  ["capture", "download"].forEach(function (e) {
    H[e] = new O(e, 4, false, e, null, false, false);
  });
  ["cols", "rows", "size", "span"].forEach(function (e) {
    H[e] = new O(e, 6, false, e, null, false, false);
  });
  ["rowSpan", "start"].forEach(function (e) {
    H[e] = new O(e, 5, false, e.toLowerCase(), null, false, false);
  });
  var Z = /[\-:]([a-z])/g;
  function Q(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
    var n = e.replace(Z, Q);
    H[n] = new O(n, 1, false, e, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var n = e.replace(Z, Q);
    H[n] = new O(n, 1, false, e, "http://www.w3.org/1999/xlink", false, false);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var n = e.replace(Z, Q);
    H[n] = new O(n, 1, false, e, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  ["tabIndex", "crossOrigin"].forEach(function (e) {
    H[e] = new O(e, 1, false, e.toLowerCase(), null, false, false);
  });
  H.xlinkHref = new O("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  ["src", "href", "action", "formAction"].forEach(function (e) {
    H[e] = new O(e, 1, false, e.toLowerCase(), null, true, true);
  });
  function q(e, n, o, u) {
    var l = H.hasOwnProperty(n) ? H[n] : null;
    if (l !== null ? l.type !== 0 : u || !(n.length > 2) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") {
      if (M(n, o, l, u)) {
        o = null;
      }
      if (u || l === null) {
        if (k(n)) {
          if (o === null) {
            e.removeAttribute(n);
          } else {
            e.setAttribute(n, "" + o);
          }
        }
      } else if (l.mustUseProperty) {
        e[l.propertyName] = o === null ? l.type === 3 ? false : "" : o;
      } else {
        n = l.attributeName;
        u = l.attributeNamespace;
        if (o === null) {
          e.removeAttribute(n);
        } else {
          l = l.type;
          o = l === 3 || l === 4 && o === true ? "" : "" + o;
          if (u) {
            e.setAttributeNS(u, n, o);
          } else {
            e.setAttribute(n, o);
          }
        }
      }
    }
  }
  var ie = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  var b = Symbol.for("react.element");
  var ce = Symbol.for("react.portal");
  var Oe = Symbol.for("react.fragment");
  var st = Symbol.for("react.strict_mode");
  var nn = Symbol.for("react.profiler");
  var $t = Symbol.for("react.provider");
  var Pn = Symbol.for("react.context");
  var Lt = Symbol.for("react.forward_ref");
  var ut = Symbol.for("react.suspense");
  var wt = Symbol.for("react.suspense_list");
  var Ot = Symbol.for("react.memo");
  var Je = Symbol.for("react.lazy");
  var Ie = Symbol.for("react.offscreen");
  var D = Symbol.iterator;
  function X(e) {
    if (e === null || typeof e != "object") {
      return null;
    } else {
      e = D && e[D] || e["@@iterator"];
      if (typeof e == "function") {
        return e;
      } else {
        return null;
      }
    }
  }
  var U = Object.assign;
  var w;
  function P(e) {
    if (w === undefined) {
      try {
        throw Error();
      } catch (o) {
        var n = o.stack.trim().match(/\n( *(at )?)/);
        w = n && n[1] || "";
      }
    }
    return `
${w}${e}`;
  }
  var ee = false;
  function ne(e, n) {
    if (!e || ee) {
      return "";
    }
    ee = true;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = undefined;
    try {
      if (n) {
        n = function () {
          throw Error();
        };
        Object.defineProperty(n.prototype, "props", {
          set: function () {
            throw Error();
          }
        });
        if (typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(n, []);
          } catch (N) {
            var u = N;
          }
          Reflect.construct(e, [], n);
        } else {
          try {
            n.call();
          } catch (N) {
            u = N;
          }
          e.call(n.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (N) {
          u = N;
        }
        e();
      }
    } catch (N) {
      if (N && u && typeof N.stack == "string") {
        for (var l = N.stack.split(`
`), f = u.stack.split(`
`), p = l.length - 1, y = f.length - 1; p >= 1 && y >= 0 && l[p] !== f[y];) {
          y--;
        }
        for (; p >= 1 && y >= 0; p--, y--) {
          if (l[p] !== f[y]) {
            if (p !== 1 || y !== 1) {
              do {
                p--;
                y--;
                if (y < 0 || l[p] !== f[y]) {
                  var _ = `
${l[p].replace(" at new ", " at ")}`;
                  if (e.displayName && _.includes("<anonymous>")) {
                    _ = _.replace("<anonymous>", e.displayName);
                  }
                  return _;
                }
              } while (p >= 1 && y >= 0);
            }
            break;
          }
        }
      }
    } finally {
      ee = false;
      Error.prepareStackTrace = o;
    }
    if (e = e ? e.displayName || e.name : "") {
      return P(e);
    } else {
      return "";
    }
  }
  function ue(e) {
    switch (e.tag) {
      case 5:
        return P(e.type);
      case 16:
        return P("Lazy");
      case 13:
        return P("Suspense");
      case 19:
        return P("SuspenseList");
      case 0:
      case 2:
      case 15:
        e = ne(e.type, false);
        return e;
      case 11:
        e = ne(e.type.render, false);
        return e;
      case 1:
        e = ne(e.type, true);
        return e;
      default:
        return "";
    }
  }
  function ae(e) {
    if (e == null) {
      return null;
    }
    if (typeof e == "function") {
      return e.displayName || e.name || null;
    }
    if (typeof e == "string") {
      return e;
    }
    switch (e) {
      case Oe:
        return "Fragment";
      case ce:
        return "Portal";
      case nn:
        return "Profiler";
      case st:
        return "StrictMode";
      case ut:
        return "Suspense";
      case wt:
        return "SuspenseList";
    }
    if (typeof e == "object") {
      switch (e.$$typeof) {
        case Pn:
          return (e.displayName || "Context") + ".Consumer";
        case $t:
          return (e._context.displayName || "Context") + ".Provider";
        case Lt:
          var n = e.render;
          e = e.displayName;
          if (!e) {
            e = n.displayName || n.name || "";
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef";
          }
          return e;
        case Ot:
          n = e.displayName || null;
          if (n !== null) {
            return n;
          } else {
            return ae(e.type) || "Memo";
          }
        case Je:
          n = e._payload;
          e = e._init;
          try {
            return ae(e(n));
          } catch {}
      }
    }
    return null;
  }
  function me(e) {
    var n = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (n.displayName || "Context") + ".Consumer";
      case 10:
        return (n._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        e = n.render;
        e = e.displayName || e.name || "";
        return n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return n;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ae(n);
      case 8:
        if (n === st) {
          return "StrictMode";
        } else {
          return "Mode";
        }
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof n == "function") {
          return n.displayName || n.name || null;
        }
        if (typeof n == "string") {
          return n;
        }
    }
    return null;
  }
  function de(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Ee(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function at(e) {
    var n = Ee(e) ? "checked" : "value";
    var o = Object.getOwnPropertyDescriptor(e.constructor.prototype, n);
    var u = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof o !== "undefined" && typeof o.get == "function" && typeof o.set == "function") {
      var l = o.get;
      var f = o.set;
      Object.defineProperty(e, n, {
        configurable: true,
        get: function () {
          return l.call(this);
        },
        set: function (p) {
          u = "" + p;
          f.call(this, p);
        }
      });
      Object.defineProperty(e, n, {
        enumerable: o.enumerable
      });
      return {
        getValue: function () {
          return u;
        },
        setValue: function (p) {
          u = "" + p;
        },
        stopTracking: function () {
          e._valueTracker = null;
          delete e[n];
        }
      };
    }
  }
  function bi(e) {
    e._valueTracker ||= at(e);
  }
  function Ol(e) {
    if (!e) {
      return false;
    }
    var n = e._valueTracker;
    if (!n) {
      return true;
    }
    var o = n.getValue();
    var u = "";
    if (e) {
      u = Ee(e) ? e.checked ? "true" : "false" : e.value;
    }
    e = u;
    if (e !== o) {
      n.setValue(e);
      return true;
    } else {
      return false;
    }
  }
  function Mi(e) {
    e = e || (typeof document !== "undefined" ? document : undefined);
    if (typeof e === "undefined") {
      return null;
    }
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function vs(e, n) {
    var o = n.checked;
    return U({}, n, {
      defaultChecked: undefined,
      defaultValue: undefined,
      value: undefined,
      checked: o ?? e._wrapperState.initialChecked
    });
  }
  function Al(e, n) {
    var o = n.defaultValue == null ? "" : n.defaultValue;
    var u = n.checked ?? n.defaultChecked;
    o = de(n.value ?? o);
    e._wrapperState = {
      initialChecked: u,
      initialValue: o,
      controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null
    };
  }
  function bl(e, n) {
    n = n.checked;
    if (n != null) {
      q(e, "checked", n, false);
    }
  }
  function _s(e, n) {
    bl(e, n);
    var o = de(n.value);
    var u = n.type;
    if (o != null) {
      if (u === "number") {
        if (o === 0 && e.value === "" || e.value != o) {
          e.value = "" + o;
        }
      } else if (e.value !== "" + o) {
        e.value = "" + o;
      }
    } else if (u === "submit" || u === "reset") {
      e.removeAttribute("value");
      return;
    }
    if (n.hasOwnProperty("value")) {
      Es(e, n.type, o);
    } else if (n.hasOwnProperty("defaultValue")) {
      Es(e, n.type, de(n.defaultValue));
    }
    if (n.checked == null && n.defaultChecked != null) {
      e.defaultChecked = !!n.defaultChecked;
    }
  }
  function Ml(e, n, o) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
      var u = n.type;
      if ((u === "submit" || u === "reset") && (n.value === undefined || n.value === null)) {
        return;
      }
      n = "" + e._wrapperState.initialValue;
      if (!o && n !== e.value) {
        e.value = n;
      }
      e.defaultValue = n;
    }
    o = e.name;
    if (o !== "") {
      e.name = "";
    }
    e.defaultChecked = !!e._wrapperState.initialChecked;
    if (o !== "") {
      e.name = o;
    }
  }
  function Es(e, n, o) {
    if (n !== "number" || Mi(e.ownerDocument) !== e) {
      if (o == null) {
        e.defaultValue = "" + e._wrapperState.initialValue;
      } else if (e.defaultValue !== "" + o) {
        e.defaultValue = "" + o;
      }
    }
  }
  var Mr = Array.isArray;
  function Zn(e, n, o, u) {
    e = e.options;
    if (n) {
      n = {};
      for (var l = 0; l < o.length; l++) {
        n["$" + o[l]] = true;
      }
      for (o = 0; o < e.length; o++) {
        l = n.hasOwnProperty("$" + e[o].value);
        if (e[o].selected !== l) {
          e[o].selected = l;
        }
        if (l && u) {
          e[o].defaultSelected = true;
        }
      }
    } else {
      o = "" + de(o);
      n = null;
      l = 0;
      for (; l < e.length; l++) {
        if (e[l].value === o) {
          e[l].selected = true;
          if (u) {
            e[l].defaultSelected = true;
          }
          return;
        }
        if (n === null && !e[l].disabled) {
          n = e[l];
        }
      }
      if (n !== null) {
        n.selected = true;
      }
    }
  }
  function Ss(e, n) {
    if (n.dangerouslySetInnerHTML != null) {
      throw Error(i(91));
    }
    return U({}, n, {
      value: undefined,
      defaultValue: undefined,
      children: "" + e._wrapperState.initialValue
    });
  }
  function Dl(e, n) {
    var o = n.value;
    if (o == null) {
      o = n.children;
      n = n.defaultValue;
      if (o != null) {
        if (n != null) {
          throw Error(i(92));
        }
        if (Mr(o)) {
          if (o.length > 1) {
            throw Error(i(93));
          }
          o = o[0];
        }
        n = o;
      }
      if (n == null) {
        n = "";
      }
      o = n;
    }
    e._wrapperState = {
      initialValue: de(o)
    };
  }
  function Fl(e, n) {
    var o = de(n.value);
    var u = de(n.defaultValue);
    if (o != null) {
      o = "" + o;
      if (o !== e.value) {
        e.value = o;
      }
      if (n.defaultValue == null && e.defaultValue !== o) {
        e.defaultValue = o;
      }
    }
    if (u != null) {
      e.defaultValue = "" + u;
    }
  }
  function Hl(e) {
    var n = e.textContent;
    if (n === e._wrapperState.initialValue && n !== "" && n !== null) {
      e.value = n;
    }
  }
  function Bl(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ws(e, n) {
    if (e == null || e === "http://www.w3.org/1999/xhtml") {
      return Bl(n);
    } else if (e === "http://www.w3.org/2000/svg" && n === "foreignObject") {
      return "http://www.w3.org/1999/xhtml";
    } else {
      return e;
    }
  }
  var Di;
  var Ul = function (e) {
    if (typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction) {
      return function (n, o, u, l) {
        MSApp.execUnsafeLocalFunction(function () {
          return e(n, o, u, l);
        });
      };
    } else {
      return e;
    }
  }(function (e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) {
      e.innerHTML = n;
    } else {
      Di = Di || document.createElement("div");
      Di.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>";
      n = Di.firstChild;
      while (e.firstChild) {
        e.removeChild(e.firstChild);
      }
      while (n.firstChild) {
        e.appendChild(n.firstChild);
      }
    }
  });
  function Dr(e, n) {
    if (n) {
      var o = e.firstChild;
      if (o && o === e.lastChild && o.nodeType === 3) {
        o.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var Fr = {
    animationIterationCount: true,
    aspectRatio: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    columns: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridArea: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowSpan: true,
    gridRowStart: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnSpan: true,
    gridColumnStart: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
  };
  var Um = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Fr).forEach(function (e) {
    Um.forEach(function (n) {
      n = n + e.charAt(0).toUpperCase() + e.substring(1);
      Fr[n] = Fr[e];
    });
  });
  function jl(e, n, o) {
    if (n == null || typeof n == "boolean" || n === "") {
      return "";
    } else if (o || typeof n != "number" || n === 0 || Fr.hasOwnProperty(e) && Fr[e]) {
      return ("" + n).trim();
    } else {
      return n + "px";
    }
  }
  function zl(e, n) {
    e = e.style;
    for (var o in n) {
      if (n.hasOwnProperty(o)) {
        var u = o.indexOf("--") === 0;
        var l = jl(o, n[o], u);
        if (o === "float") {
          o = "cssFloat";
        }
        if (u) {
          e.setProperty(o, l);
        } else {
          e[o] = l;
        }
      }
    }
  }
  var jm = U({
    menuitem: true
  }, {
    area: true,
    base: true,
    br: true,
    col: true,
    embed: true,
    hr: true,
    img: true,
    input: true,
    keygen: true,
    link: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true
  });
  function xs(e, n) {
    if (n) {
      if (jm[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) {
        throw Error(i(137, e));
      }
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null) {
          throw Error(i(60));
        }
        if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML)) {
          throw Error(i(61));
        }
      }
      if (n.style != null && typeof n.style != "object") {
        throw Error(i(62));
      }
    }
  }
  function Ts(e, n) {
    if (e.indexOf("-") === -1) {
      return typeof n.is == "string";
    }
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var Is = null;
  function Ns(e) {
    e = e.target || e.srcElement || window;
    if (e.correspondingUseElement) {
      e = e.correspondingUseElement;
    }
    if (e.nodeType === 3) {
      return e.parentNode;
    } else {
      return e;
    }
  }
  var ks = null;
  var Jn = null;
  var er = null;
  function $l(e) {
    if (e = oi(e)) {
      if (typeof ks != "function") {
        throw Error(i(280));
      }
      var n = e.stateNode;
      if (n) {
        n = oo(n);
        ks(e.stateNode, e.type, n);
      }
    }
  }
  function Gl(e) {
    if (Jn) {
      if (er) {
        er.push(e);
      } else {
        er = [e];
      }
    } else {
      Jn = e;
    }
  }
  function Vl() {
    if (Jn) {
      var e = Jn;
      var n = er;
      er = Jn = null;
      $l(e);
      if (n) {
        for (e = 0; e < n.length; e++) {
          $l(n[e]);
        }
      }
    }
  }
  function Wl(e, n) {
    return e(n);
  }
  function Xl() {}
  var Cs = false;
  function Yl(e, n, o) {
    if (Cs) {
      return e(n, o);
    }
    Cs = true;
    try {
      return Wl(e, n, o);
    } finally {
      Cs = false;
      if (Jn !== null || er !== null) {
        Xl();
        Vl();
      }
    }
  }
  function Hr(e, n) {
    var o = e.stateNode;
    if (o === null) {
      return null;
    }
    var u = oo(o);
    if (u === null) {
      return null;
    }
    o = u[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        if (!(u = !u.disabled)) {
          e = e.type;
          u = e !== "button" && e !== "input" && e !== "select" && e !== "textarea";
        }
        e = !u;
        break e;
      default:
        e = false;
    }
    if (e) {
      return null;
    }
    if (o && typeof o != "function") {
      throw Error(i(231, n, typeof o));
    }
    return o;
  }
  var Ps = false;
  if (m) {
    try {
      var Br = {};
      Object.defineProperty(Br, "passive", {
        get: function () {
          Ps = true;
        }
      });
      window.addEventListener("test", Br, Br);
      window.removeEventListener("test", Br, Br);
    } catch {
      Ps = false;
    }
  }
  function zm(e, n, o, u, l, f, p, y, _) {
    var N = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(o, N);
    } catch (R) {
      this.onError(R);
    }
  }
  var Ur = false;
  var Fi = null;
  var Hi = false;
  var Rs = null;
  var $m = {
    onError: function (e) {
      Ur = true;
      Fi = e;
    }
  };
  function Gm(e, n, o, u, l, f, p, y, _) {
    Ur = false;
    Fi = null;
    zm.apply($m, arguments);
  }
  function Vm(e, n, o, u, l, f, p, y, _) {
    Gm.apply(this, arguments);
    if (Ur) {
      if (Ur) {
        var N = Fi;
        Ur = false;
        Fi = null;
      } else {
        throw Error(i(198));
      }
      if (!Hi) {
        Hi = true;
        Rs = N;
      }
    }
  }
  function Rn(e) {
    var n = e;
    var o = e;
    if (e.alternate) {
      while (n.return) {
        n = n.return;
      }
    } else {
      e = n;
      do {
        n = e;
        if ((n.flags & 4098) !== 0) {
          o = n.return;
        }
        e = n.return;
      } while (e);
    }
    if (n.tag === 3) {
      return o;
    } else {
      return null;
    }
  }
  function ql(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n === null) {
        e = e.alternate;
        if (e !== null) {
          n = e.memoizedState;
        }
      }
      if (n !== null) {
        return n.dehydrated;
      }
    }
    return null;
  }
  function Kl(e) {
    if (Rn(e) !== e) {
      throw Error(i(188));
    }
  }
  function Wm(e) {
    var n = e.alternate;
    if (!n) {
      n = Rn(e);
      if (n === null) {
        throw Error(i(188));
      }
      if (n !== e) {
        return null;
      } else {
        return e;
      }
    }
    var o = e;
    var u = n;
    while (true) {
      var l = o.return;
      if (l === null) {
        break;
      }
      var f = l.alternate;
      if (f === null) {
        u = l.return;
        if (u !== null) {
          o = u;
          continue;
        }
        break;
      }
      if (l.child === f.child) {
        for (f = l.child; f;) {
          if (f === o) {
            Kl(l);
            return e;
          }
          if (f === u) {
            Kl(l);
            return n;
          }
          f = f.sibling;
        }
        throw Error(i(188));
      }
      if (o.return !== u.return) {
        o = l;
        u = f;
      } else {
        var p = false;
        for (var y = l.child; y;) {
          if (y === o) {
            p = true;
            o = l;
            u = f;
            break;
          }
          if (y === u) {
            p = true;
            u = l;
            o = f;
            break;
          }
          y = y.sibling;
        }
        if (!p) {
          for (y = f.child; y;) {
            if (y === o) {
              p = true;
              o = f;
              u = l;
              break;
            }
            if (y === u) {
              p = true;
              u = f;
              o = l;
              break;
            }
            y = y.sibling;
          }
          if (!p) {
            throw Error(i(189));
          }
        }
      }
      if (o.alternate !== u) {
        throw Error(i(190));
      }
    }
    if (o.tag !== 3) {
      throw Error(i(188));
    }
    if (o.stateNode.current === o) {
      return e;
    } else {
      return n;
    }
  }
  function Ql(e) {
    e = Wm(e);
    if (e !== null) {
      return Zl(e);
    } else {
      return null;
    }
  }
  function Zl(e) {
    if (e.tag === 5 || e.tag === 6) {
      return e;
    }
    for (e = e.child; e !== null;) {
      var n = Zl(e);
      if (n !== null) {
        return n;
      }
      e = e.sibling;
    }
    return null;
  }
  var Jl = r.unstable_scheduleCallback;
  var ec = r.unstable_cancelCallback;
  var Xm = r.unstable_shouldYield;
  var Ym = r.unstable_requestPaint;
  var ke = r.unstable_now;
  var qm = r.unstable_getCurrentPriorityLevel;
  var Ls = r.unstable_ImmediatePriority;
  var tc = r.unstable_UserBlockingPriority;
  var Bi = r.unstable_NormalPriority;
  var Km = r.unstable_LowPriority;
  var nc = r.unstable_IdlePriority;
  var Ui = null;
  var At = null;
  function Qm(e) {
    if (At && typeof At.onCommitFiberRoot == "function") {
      try {
        At.onCommitFiberRoot(Ui, e, undefined, (e.current.flags & 128) === 128);
      } catch {}
    }
  }
  var xt = Math.clz32 ? Math.clz32 : eg;
  var Zm = Math.log;
  var Jm = Math.LN2;
  function eg(e) {
    e >>>= 0;
    if (e === 0) {
      return 32;
    } else {
      return 31 - (Zm(e) / Jm | 0) | 0;
    }
  }
  var ji = 64;
  var zi = 4194304;
  function jr(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function $i(e, n) {
    var o = e.pendingLanes;
    if (o === 0) {
      return 0;
    }
    var u = 0;
    var l = e.suspendedLanes;
    var f = e.pingedLanes;
    var p = o & 268435455;
    if (p !== 0) {
      var y = p & ~l;
      if (y !== 0) {
        u = jr(y);
      } else {
        f &= p;
        if (f !== 0) {
          u = jr(f);
        }
      }
    } else {
      p = o & ~l;
      if (p !== 0) {
        u = jr(p);
      } else if (f !== 0) {
        u = jr(f);
      }
    }
    if (u === 0) {
      return 0;
    }
    if (n !== 0 && n !== u && (n & l) === 0 && (l = u & -u, f = n & -n, l >= f || l === 16 && (f & 4194240) !== 0)) {
      return n;
    }
    if ((u & 4) !== 0) {
      u |= o & 16;
    }
    n = e.entangledLanes;
    if (n !== 0) {
      e = e.entanglements;
      n &= u;
      while (n > 0) {
        o = 31 - xt(n);
        l = 1 << o;
        u |= e[o];
        n &= ~l;
      }
    }
    return u;
  }
  function tg(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return n + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5000;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ng(e, n) {
    var o = e.suspendedLanes;
    var u = e.pingedLanes;
    var l = e.expirationTimes;
    for (var f = e.pendingLanes; f > 0;) {
      var p = 31 - xt(f);
      var y = 1 << p;
      var _ = l[p];
      if (_ === -1) {
        if ((y & o) === 0 || (y & u) !== 0) {
          l[p] = tg(y, n);
        }
      } else if (_ <= n) {
        e.expiredLanes |= y;
      }
      f &= ~y;
    }
  }
  function Os(e) {
    e = e.pendingLanes & -1073741825;
    if (e !== 0) {
      return e;
    } else if (e & 1073741824) {
      return 1073741824;
    } else {
      return 0;
    }
  }
  function rc() {
    var e = ji;
    ji <<= 1;
    if ((ji & 4194240) === 0) {
      ji = 64;
    }
    return e;
  }
  function As(e) {
    var n = [];
    for (var o = 0; o < 31; o++) {
      n.push(e);
    }
    return n;
  }
  function zr(e, n, o) {
    e.pendingLanes |= n;
    if (n !== 536870912) {
      e.suspendedLanes = 0;
      e.pingedLanes = 0;
    }
    e = e.eventTimes;
    n = 31 - xt(n);
    e[n] = o;
  }
  function rg(e, n) {
    var o = e.pendingLanes & ~n;
    e.pendingLanes = n;
    e.suspendedLanes = 0;
    e.pingedLanes = 0;
    e.expiredLanes &= n;
    e.mutableReadLanes &= n;
    e.entangledLanes &= n;
    n = e.entanglements;
    var u = e.eventTimes;
    for (e = e.expirationTimes; o > 0;) {
      var l = 31 - xt(o);
      var f = 1 << l;
      n[l] = 0;
      u[l] = -1;
      e[l] = -1;
      o &= ~f;
    }
  }
  function bs(e, n) {
    var o = e.entangledLanes |= n;
    for (e = e.entanglements; o;) {
      var u = 31 - xt(o);
      var l = 1 << u;
      if (l & n | e[u] & n) {
        e[u] |= n;
      }
      o &= ~l;
    }
  }
  var pe = 0;
  function ic(e) {
    e &= -e;
    if (e > 1) {
      if (e > 4) {
        if ((e & 268435455) !== 0) {
          return 16;
        } else {
          return 536870912;
        }
      } else {
        return 4;
      }
    } else {
      return 1;
    }
  }
  var oc;
  var Ms;
  var sc;
  var uc;
  var ac;
  var Ds = false;
  var Gi = [];
  var rn = null;
  var on = null;
  var sn = null;
  var $r = new Map();
  var Gr = new Map();
  var un = [];
  var ig = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function lc(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        rn = null;
        break;
      case "dragenter":
      case "dragleave":
        on = null;
        break;
      case "mouseover":
      case "mouseout":
        sn = null;
        break;
      case "pointerover":
      case "pointerout":
        $r.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Gr.delete(n.pointerId);
    }
  }
  function Vr(e, n, o, u, l, f) {
    if (e === null || e.nativeEvent !== f) {
      e = {
        blockedOn: n,
        domEventName: o,
        eventSystemFlags: u,
        nativeEvent: f,
        targetContainers: [l]
      };
      if (n !== null) {
        n = oi(n);
        if (n !== null) {
          Ms(n);
        }
      }
      return e;
    } else {
      e.eventSystemFlags |= u;
      n = e.targetContainers;
      if (l !== null && n.indexOf(l) === -1) {
        n.push(l);
      }
      return e;
    }
  }
  function og(e, n, o, u, l) {
    switch (n) {
      case "focusin":
        rn = Vr(rn, e, n, o, u, l);
        return true;
      case "dragenter":
        on = Vr(on, e, n, o, u, l);
        return true;
      case "mouseover":
        sn = Vr(sn, e, n, o, u, l);
        return true;
      case "pointerover":
        var f = l.pointerId;
        $r.set(f, Vr($r.get(f) || null, e, n, o, u, l));
        return true;
      case "gotpointercapture":
        f = l.pointerId;
        Gr.set(f, Vr(Gr.get(f) || null, e, n, o, u, l));
        return true;
    }
    return false;
  }
  function cc(e) {
    var n = Ln(e.target);
    if (n !== null) {
      var o = Rn(n);
      if (o !== null) {
        n = o.tag;
        if (n === 13) {
          n = ql(o);
          if (n !== null) {
            e.blockedOn = n;
            ac(e.priority, function () {
              sc(o);
            });
            return;
          }
        } else if (n === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Vi(e) {
    if (e.blockedOn !== null) {
      return false;
    }
    for (var n = e.targetContainers; n.length > 0;) {
      var o = Hs(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
      if (o === null) {
        o = e.nativeEvent;
        var u = new o.constructor(o.type, o);
        Is = u;
        o.target.dispatchEvent(u);
        Is = null;
      } else {
        n = oi(o);
        if (n !== null) {
          Ms(n);
        }
        e.blockedOn = o;
        return false;
      }
      n.shift();
    }
    return true;
  }
  function fc(e, n, o) {
    if (Vi(e)) {
      o.delete(n);
    }
  }
  function sg() {
    Ds = false;
    if (rn !== null && Vi(rn)) {
      rn = null;
    }
    if (on !== null && Vi(on)) {
      on = null;
    }
    if (sn !== null && Vi(sn)) {
      sn = null;
    }
    $r.forEach(fc);
    Gr.forEach(fc);
  }
  function Wr(e, n) {
    if (e.blockedOn === n) {
      e.blockedOn = null;
      if (!Ds) {
        Ds = true;
        r.unstable_scheduleCallback(r.unstable_NormalPriority, sg);
      }
    }
  }
  function Xr(e) {
    function n(l) {
      return Wr(l, e);
    }
    if (Gi.length > 0) {
      Wr(Gi[0], e);
      for (var o = 1; o < Gi.length; o++) {
        var u = Gi[o];
        if (u.blockedOn === e) {
          u.blockedOn = null;
        }
      }
    }
    if (rn !== null) {
      Wr(rn, e);
    }
    if (on !== null) {
      Wr(on, e);
    }
    if (sn !== null) {
      Wr(sn, e);
    }
    $r.forEach(n);
    Gr.forEach(n);
    o = 0;
    for (; o < un.length; o++) {
      u = un[o];
      if (u.blockedOn === e) {
        u.blockedOn = null;
      }
    }
    while (un.length > 0 && (o = un[0], o.blockedOn === null)) {
      cc(o);
      if (o.blockedOn === null) {
        un.shift();
      }
    }
  }
  var tr = ie.ReactCurrentBatchConfig;
  var Wi = true;
  function ug(e, n, o, u) {
    var l = pe;
    var f = tr.transition;
    tr.transition = null;
    try {
      pe = 1;
      Fs(e, n, o, u);
    } finally {
      pe = l;
      tr.transition = f;
    }
  }
  function ag(e, n, o, u) {
    var l = pe;
    var f = tr.transition;
    tr.transition = null;
    try {
      pe = 4;
      Fs(e, n, o, u);
    } finally {
      pe = l;
      tr.transition = f;
    }
  }
  function Fs(e, n, o, u) {
    if (Wi) {
      var l = Hs(e, n, o, u);
      if (l === null) {
        tu(e, n, u, Xi, o);
        lc(e, u);
      } else if (og(l, e, n, o, u)) {
        u.stopPropagation();
      } else {
        lc(e, u);
        if (n & 4 && ig.indexOf(e) > -1) {
          while (l !== null) {
            var f = oi(l);
            if (f !== null) {
              oc(f);
            }
            f = Hs(e, n, o, u);
            if (f === null) {
              tu(e, n, u, Xi, o);
            }
            if (f === l) {
              break;
            }
            l = f;
          }
          if (l !== null) {
            u.stopPropagation();
          }
        } else {
          tu(e, n, u, null, o);
        }
      }
    }
  }
  var Xi = null;
  function Hs(e, n, o, u) {
    Xi = null;
    e = Ns(u);
    e = Ln(e);
    if (e !== null) {
      n = Rn(e);
      if (n === null) {
        e = null;
      } else {
        o = n.tag;
        if (o === 13) {
          e = ql(n);
          if (e !== null) {
            return e;
          }
          e = null;
        } else if (o === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated) {
            if (n.tag === 3) {
              return n.stateNode.containerInfo;
            } else {
              return null;
            }
          }
          e = null;
        } else if (n !== e) {
          e = null;
        }
      }
    }
    Xi = e;
    return null;
  }
  function dc(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (qm()) {
          case Ls:
            return 1;
          case tc:
            return 4;
          case Bi:
          case Km:
            return 16;
          case nc:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var an = null;
  var Bs = null;
  var Yi = null;
  function pc() {
    if (Yi) {
      return Yi;
    }
    var e;
    var n = Bs;
    var o = n.length;
    var u;
    var l = "value" in an ? an.value : an.textContent;
    var f = l.length;
    for (e = 0; e < o && n[e] === l[e]; e++);
    var p = o - e;
    for (u = 1; u <= p && n[o - u] === l[f - u]; u++);
    return Yi = l.slice(e, u > 1 ? 1 - u : undefined);
  }
  function qi(e) {
    var n = e.keyCode;
    if ("charCode" in e) {
      e = e.charCode;
      if (e === 0 && n === 13) {
        e = 13;
      }
    } else {
      e = n;
    }
    if (e === 10) {
      e = 13;
    }
    if (e >= 32 || e === 13) {
      return e;
    } else {
      return 0;
    }
  }
  function Ki() {
    return true;
  }
  function hc() {
    return false;
  }
  function lt(e) {
    function n(o, u, l, f, p) {
      this._reactName = o;
      this._targetInst = l;
      this.type = u;
      this.nativeEvent = f;
      this.target = p;
      this.currentTarget = null;
      for (var y in e) {
        if (e.hasOwnProperty(y)) {
          o = e[y];
          this[y] = o ? o(f) : f[y];
        }
      }
      this.isDefaultPrevented = f.defaultPrevented ?? f.returnValue === false ? Ki : hc;
      this.isPropagationStopped = hc;
      return this;
    }
    U(n.prototype, {
      preventDefault: function () {
        this.defaultPrevented = true;
        var o = this.nativeEvent;
        if (o) {
          if (o.preventDefault) {
            o.preventDefault();
          } else if (typeof o.returnValue != "unknown") {
            o.returnValue = false;
          }
          this.isDefaultPrevented = Ki;
        }
      },
      stopPropagation: function () {
        var o = this.nativeEvent;
        if (o) {
          if (o.stopPropagation) {
            o.stopPropagation();
          } else if (typeof o.cancelBubble != "unknown") {
            o.cancelBubble = true;
          }
          this.isPropagationStopped = Ki;
        }
      },
      persist: function () {},
      isPersistent: Ki
    });
    return n;
  }
  var nr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  };
  var Us = lt(nr);
  var Yr = U({}, nr, {
    view: 0,
    detail: 0
  });
  var lg = lt(Yr);
  var js;
  var zs;
  var qr;
  var Qi = U({}, Yr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Gs,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      if (e.relatedTarget === undefined) {
        if (e.fromElement === e.srcElement) {
          return e.toElement;
        } else {
          return e.fromElement;
        }
      } else {
        return e.relatedTarget;
      }
    },
    movementX: function (e) {
      if ("movementX" in e) {
        return e.movementX;
      } else {
        if (e !== qr) {
          if (qr && e.type === "mousemove") {
            js = e.screenX - qr.screenX;
            zs = e.screenY - qr.screenY;
          } else {
            zs = js = 0;
          }
          qr = e;
        }
        return js;
      }
    },
    movementY: function (e) {
      if ("movementY" in e) {
        return e.movementY;
      } else {
        return zs;
      }
    }
  });
  var mc = lt(Qi);
  var cg = U({}, Qi, {
    dataTransfer: 0
  });
  var fg = lt(cg);
  var dg = U({}, Yr, {
    relatedTarget: 0
  });
  var $s = lt(dg);
  var pg = U({}, nr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  });
  var hg = lt(pg);
  var mg = U({}, nr, {
    clipboardData: function (e) {
      if ("clipboardData" in e) {
        return e.clipboardData;
      } else {
        return window.clipboardData;
      }
    }
  });
  var gg = lt(mg);
  var yg = U({}, nr, {
    data: 0
  });
  var gc = lt(yg);
  var vg = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  };
  var _g = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  };
  var Eg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Sg(e) {
    var n = this.nativeEvent;
    if (n.getModifierState) {
      return n.getModifierState(e);
    } else if (e = Eg[e]) {
      return !!n[e];
    } else {
      return false;
    }
  }
  function Gs() {
    return Sg;
  }
  var wg = U({}, Yr, {
    key: function (e) {
      if (e.key) {
        var n = vg[e.key] || e.key;
        if (n !== "Unidentified") {
          return n;
        }
      }
      if (e.type === "keypress") {
        e = qi(e);
        if (e === 13) {
          return "Enter";
        } else {
          return String.fromCharCode(e);
        }
      } else if (e.type === "keydown" || e.type === "keyup") {
        return _g[e.keyCode] || "Unidentified";
      } else {
        return "";
      }
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Gs,
    charCode: function (e) {
      if (e.type === "keypress") {
        return qi(e);
      } else {
        return 0;
      }
    },
    keyCode: function (e) {
      if (e.type === "keydown" || e.type === "keyup") {
        return e.keyCode;
      } else {
        return 0;
      }
    },
    which: function (e) {
      if (e.type === "keypress") {
        return qi(e);
      } else if (e.type === "keydown" || e.type === "keyup") {
        return e.keyCode;
      } else {
        return 0;
      }
    }
  });
  var xg = lt(wg);
  var Tg = U({}, Qi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  });
  var yc = lt(Tg);
  var Ig = U({}, Yr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Gs
  });
  var Ng = lt(Ig);
  var kg = U({}, nr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  });
  var Cg = lt(kg);
  var Pg = U({}, Qi, {
    deltaX: function (e) {
      if ("deltaX" in e) {
        return e.deltaX;
      } else if ("wheelDeltaX" in e) {
        return -e.wheelDeltaX;
      } else {
        return 0;
      }
    },
    deltaY: function (e) {
      if ("deltaY" in e) {
        return e.deltaY;
      } else if ("wheelDeltaY" in e) {
        return -e.wheelDeltaY;
      } else if ("wheelDelta" in e) {
        return -e.wheelDelta;
      } else {
        return 0;
      }
    },
    deltaZ: 0,
    deltaMode: 0
  });
  var Rg = lt(Pg);
  var Lg = [9, 13, 27, 32];
  var Vs = m && "CompositionEvent" in window;
  var Kr = null;
  if (m && "documentMode" in document) {
    Kr = document.documentMode;
  }
  var Og = m && "TextEvent" in window && !Kr;
  var vc = m && (!Vs || Kr && Kr > 8 && Kr <= 11);
  var _c = " ";
  var Ec = false;
  function Sc(e, n) {
    switch (e) {
      case "keyup":
        return Lg.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function wc(e) {
    e = e.detail;
    if (typeof e == "object" && "data" in e) {
      return e.data;
    } else {
      return null;
    }
  }
  var rr = false;
  function Ag(e, n) {
    switch (e) {
      case "compositionend":
        return wc(n);
      case "keypress":
        if (n.which !== 32) {
          return null;
        } else {
          Ec = true;
          return _c;
        }
      case "textInput":
        e = n.data;
        if (e === _c && Ec) {
          return null;
        } else {
          return e;
        }
      default:
        return null;
    }
  }
  function bg(e, n) {
    if (rr) {
      if (e === "compositionend" || !Vs && Sc(e, n)) {
        e = pc();
        Yi = Bs = an = null;
        rr = false;
        return e;
      } else {
        return null;
      }
    }
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!n.ctrlKey && !n.altKey && !n.metaKey || n.ctrlKey && n.altKey) {
          if (n.char && n.char.length > 1) {
            return n.char;
          }
          if (n.which) {
            return String.fromCharCode(n.which);
          }
        }
        return null;
      case "compositionend":
        if (vc && n.locale !== "ko") {
          return null;
        } else {
          return n.data;
        }
      default:
        return null;
    }
  }
  var Mg = {
    color: true,
    date: true,
    datetime: true,
    "datetime-local": true,
    email: true,
    month: true,
    number: true,
    password: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true
  };
  function xc(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    if (n === "input") {
      return !!Mg[e.type];
    } else {
      return n === "textarea";
    }
  }
  function Tc(e, n, o, u) {
    Gl(u);
    n = no(n, "onChange");
    if (n.length > 0) {
      o = new Us("onChange", "change", null, o, u);
      e.push({
        event: o,
        listeners: n
      });
    }
  }
  var Qr = null;
  var Zr = null;
  function Dg(e) {
    zc(e, 0);
  }
  function Zi(e) {
    var n = ar(e);
    if (Ol(n)) {
      return e;
    }
  }
  function Fg(e, n) {
    if (e === "change") {
      return n;
    }
  }
  var Ic = false;
  if (m) {
    var Ws;
    if (m) {
      var Xs = "oninput" in document;
      if (!Xs) {
        var Nc = document.createElement("div");
        Nc.setAttribute("oninput", "return;");
        Xs = typeof Nc.oninput == "function";
      }
      Ws = Xs;
    } else {
      Ws = false;
    }
    Ic = Ws && (!document.documentMode || document.documentMode > 9);
  }
  function kc() {
    if (Qr) {
      Qr.detachEvent("onpropertychange", Cc);
      Zr = Qr = null;
    }
  }
  function Cc(e) {
    if (e.propertyName === "value" && Zi(Zr)) {
      var n = [];
      Tc(n, Zr, e, Ns(e));
      Yl(Dg, n);
    }
  }
  function Hg(e, n, o) {
    if (e === "focusin") {
      kc();
      Qr = n;
      Zr = o;
      Qr.attachEvent("onpropertychange", Cc);
    } else if (e === "focusout") {
      kc();
    }
  }
  function Bg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") {
      return Zi(Zr);
    }
  }
  function Ug(e, n) {
    if (e === "click") {
      return Zi(n);
    }
  }
  function jg(e, n) {
    if (e === "input" || e === "change") {
      return Zi(n);
    }
  }
  function zg(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var Tt = typeof Object.is == "function" ? Object.is : zg;
  function Jr(e, n) {
    if (Tt(e, n)) {
      return true;
    }
    if (typeof e != "object" || e === null || typeof n != "object" || n === null) {
      return false;
    }
    var o = Object.keys(e);
    var u = Object.keys(n);
    if (o.length !== u.length) {
      return false;
    }
    for (u = 0; u < o.length; u++) {
      var l = o[u];
      if (!h.call(n, l) || !Tt(e[l], n[l])) {
        return false;
      }
    }
    return true;
  }
  function Pc(e) {
    while (e && e.firstChild) {
      e = e.firstChild;
    }
    return e;
  }
  function Rc(e, n) {
    var o = Pc(e);
    e = 0;
    var u;
    for (; o;) {
      if (o.nodeType === 3) {
        u = e + o.textContent.length;
        if (e <= n && u >= n) {
          return {
            node: o,
            offset: n - e
          };
        }
        e = u;
      }
      e: {
        while (o) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = undefined;
      }
      o = Pc(o);
    }
  }
  function Lc(e, n) {
    if (e && n) {
      if (e === n) {
        return true;
      } else if (e && e.nodeType === 3) {
        return false;
      } else if (n && n.nodeType === 3) {
        return Lc(e, n.parentNode);
      } else if ("contains" in e) {
        return e.contains(n);
      } else if (e.compareDocumentPosition) {
        return !!(e.compareDocumentPosition(n) & 16);
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  function Oc() {
    for (var e = window, n = Mi(); n instanceof e.HTMLIFrameElement;) {
      try {
        var o = typeof n.contentWindow.location.href == "string";
      } catch {
        o = false;
      }
      if (o) {
        e = n.contentWindow;
      } else {
        break;
      }
      n = Mi(e.document);
    }
    return n;
  }
  function Ys(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  function $g(e) {
    var n = Oc();
    var o = e.focusedElem;
    var u = e.selectionRange;
    if (n !== o && o && o.ownerDocument && Lc(o.ownerDocument.documentElement, o)) {
      if (u !== null && Ys(o)) {
        n = u.start;
        e = u.end;
        if (e === undefined) {
          e = n;
        }
        if ("selectionStart" in o) {
          o.selectionStart = n;
          o.selectionEnd = Math.min(e, o.value.length);
        } else {
          e = (n = o.ownerDocument || document) && n.defaultView || window;
          if (e.getSelection) {
            e = e.getSelection();
            var l = o.textContent.length;
            var f = Math.min(u.start, l);
            u = u.end === undefined ? f : Math.min(u.end, l);
            if (!e.extend && f > u) {
              l = u;
              u = f;
              f = l;
            }
            l = Rc(o, f);
            var p = Rc(o, u);
            if (l && p && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== p.node || e.focusOffset !== p.offset)) {
              n = n.createRange();
              n.setStart(l.node, l.offset);
              e.removeAllRanges();
              if (f > u) {
                e.addRange(n);
                e.extend(p.node, p.offset);
              } else {
                n.setEnd(p.node, p.offset);
                e.addRange(n);
              }
            }
          }
        }
      }
      n = [];
      e = o;
      while (e = e.parentNode) {
        if (e.nodeType === 1) {
          n.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
          });
        }
      }
      if (typeof o.focus == "function") {
        o.focus();
      }
      o = 0;
      for (; o < n.length; o++) {
        e = n[o];
        e.element.scrollLeft = e.left;
        e.element.scrollTop = e.top;
      }
    }
  }
  var Gg = m && "documentMode" in document && document.documentMode <= 11;
  var ir = null;
  var qs = null;
  var ei = null;
  var Ks = false;
  function Ac(e, n, o) {
    var u = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    if (!Ks && ir != null && ir === Mi(u)) {
      u = ir;
      if ("selectionStart" in u && Ys(u)) {
        u = {
          start: u.selectionStart,
          end: u.selectionEnd
        };
      } else {
        u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection();
        u = {
          anchorNode: u.anchorNode,
          anchorOffset: u.anchorOffset,
          focusNode: u.focusNode,
          focusOffset: u.focusOffset
        };
      }
      if (!ei || !Jr(ei, u)) {
        ei = u;
        u = no(qs, "onSelect");
        if (u.length > 0) {
          n = new Us("onSelect", "select", null, n, o);
          e.push({
            event: n,
            listeners: u
          });
          n.target = ir;
        }
      }
    }
  }
  function Ji(e, n) {
    var o = {};
    o[e.toLowerCase()] = n.toLowerCase();
    o["Webkit" + e] = "webkit" + n;
    o["Moz" + e] = "moz" + n;
    return o;
  }
  var or = {
    animationend: Ji("Animation", "AnimationEnd"),
    animationiteration: Ji("Animation", "AnimationIteration"),
    animationstart: Ji("Animation", "AnimationStart"),
    transitionend: Ji("Transition", "TransitionEnd")
  };
  var Qs = {};
  var bc = {};
  if (m) {
    bc = document.createElement("div").style;
    if (!("AnimationEvent" in window)) {
      delete or.animationend.animation;
      delete or.animationiteration.animation;
      delete or.animationstart.animation;
    }
    if (!("TransitionEvent" in window)) {
      delete or.transitionend.transition;
    }
  }
  function eo(e) {
    if (Qs[e]) {
      return Qs[e];
    }
    if (!or[e]) {
      return e;
    }
    var n = or[e];
    var o;
    for (o in n) {
      if (n.hasOwnProperty(o) && o in bc) {
        return Qs[e] = n[o];
      }
    }
    return e;
  }
  var Mc = eo("animationend");
  var Dc = eo("animationiteration");
  var Fc = eo("animationstart");
  var Hc = eo("transitionend");
  var Bc = new Map();
  var Uc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ln(e, n) {
    Bc.set(e, n);
    c(n, [e]);
  }
  for (var Zs = 0; Zs < Uc.length; Zs++) {
    var Js = Uc[Zs];
    var Vg = Js.toLowerCase();
    var Wg = Js[0].toUpperCase() + Js.slice(1);
    ln(Vg, "on" + Wg);
  }
  ln(Mc, "onAnimationEnd");
  ln(Dc, "onAnimationIteration");
  ln(Fc, "onAnimationStart");
  ln("dblclick", "onDoubleClick");
  ln("focusin", "onFocus");
  ln("focusout", "onBlur");
  ln(Hc, "onTransitionEnd");
  d("onMouseEnter", ["mouseout", "mouseover"]);
  d("onMouseLeave", ["mouseout", "mouseover"]);
  d("onPointerEnter", ["pointerout", "pointerover"]);
  d("onPointerLeave", ["pointerout", "pointerover"]);
  c("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  c("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  c("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  c("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  c("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ti = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
  var Xg = new Set("cancel close invalid load scroll toggle".split(" ").concat(ti));
  function jc(e, n, o) {
    var u = e.type || "unknown-event";
    e.currentTarget = o;
    Vm(u, n, undefined, e);
    e.currentTarget = null;
  }
  function zc(e, n) {
    n = (n & 4) !== 0;
    for (var o = 0; o < e.length; o++) {
      var u = e[o];
      var l = u.event;
      u = u.listeners;
      e: {
        var f = undefined;
        if (n) {
          for (var p = u.length - 1; p >= 0; p--) {
            var y = u[p];
            var _ = y.instance;
            var N = y.currentTarget;
            y = y.listener;
            if (_ !== f && l.isPropagationStopped()) {
              break e;
            }
            jc(l, y, N);
            f = _;
          }
        } else {
          for (p = 0; p < u.length; p++) {
            y = u[p];
            _ = y.instance;
            N = y.currentTarget;
            y = y.listener;
            if (_ !== f && l.isPropagationStopped()) {
              break e;
            }
            jc(l, y, N);
            f = _;
          }
        }
      }
    }
    if (Hi) {
      e = Rs;
      Hi = false;
      Rs = null;
      throw e;
    }
  }
  function ye(e, n) {
    var o = n[uu];
    if (o === undefined) {
      o = n[uu] = new Set();
    }
    var u = e + "__bubble";
    if (!o.has(u)) {
      $c(n, e, 2, false);
      o.add(u);
    }
  }
  function eu(e, n, o) {
    var u = 0;
    if (n) {
      u |= 4;
    }
    $c(o, e, u, n);
  }
  var to = "_reactListening" + Math.random().toString(36).slice(2);
  function ni(e) {
    if (!e[to]) {
      e[to] = true;
      s.forEach(function (o) {
        if (o !== "selectionchange") {
          if (!Xg.has(o)) {
            eu(o, false, e);
          }
          eu(o, true, e);
        }
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      if (n !== null && !n[to]) {
        n[to] = true;
        eu("selectionchange", false, n);
      }
    }
  }
  function $c(e, n, o, u) {
    switch (dc(n)) {
      case 1:
        var l = ug;
        break;
      case 4:
        l = ag;
        break;
      default:
        l = Fs;
    }
    o = l.bind(null, n, o, e);
    l = undefined;
    if (!!Ps && (n === "touchstart" || n === "touchmove" || n === "wheel")) {
      l = true;
    }
    if (u) {
      if (l !== undefined) {
        e.addEventListener(n, o, {
          capture: true,
          passive: l
        });
      } else {
        e.addEventListener(n, o, true);
      }
    } else if (l !== undefined) {
      e.addEventListener(n, o, {
        passive: l
      });
    } else {
      e.addEventListener(n, o, false);
    }
  }
  function tu(e, n, o, u, l) {
    var f = u;
    if ((n & 1) === 0 && (n & 2) === 0 && u !== null) {
      e: while (true) {
        if (u === null) {
          return;
        }
        var p = u.tag;
        if (p === 3 || p === 4) {
          var y = u.stateNode.containerInfo;
          if (y === l || y.nodeType === 8 && y.parentNode === l) {
            break;
          }
          if (p === 4) {
            for (p = u.return; p !== null;) {
              var _ = p.tag;
              if ((_ === 3 || _ === 4) && (_ = p.stateNode.containerInfo, _ === l || _.nodeType === 8 && _.parentNode === l)) {
                return;
              }
              p = p.return;
            }
          }
          while (y !== null) {
            p = Ln(y);
            if (p === null) {
              return;
            }
            _ = p.tag;
            if (_ === 5 || _ === 6) {
              u = f = p;
              continue e;
            }
            y = y.parentNode;
          }
        }
        u = u.return;
      }
    }
    Yl(function () {
      var N = f;
      var R = Ns(o);
      var L = [];
      e: {
        var C = Bc.get(e);
        if (C !== undefined) {
          var F = Us;
          var j = e;
          switch (e) {
            case "keypress":
              if (qi(o) === 0) {
                break e;
              }
            case "keydown":
            case "keyup":
              F = xg;
              break;
            case "focusin":
              j = "focus";
              F = $s;
              break;
            case "focusout":
              j = "blur";
              F = $s;
              break;
            case "beforeblur":
            case "afterblur":
              F = $s;
              break;
            case "click":
              if (o.button === 2) {
                break e;
              }
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              F = mc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              F = fg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              F = Ng;
              break;
            case Mc:
            case Dc:
            case Fc:
              F = hg;
              break;
            case Hc:
              F = Cg;
              break;
            case "scroll":
              F = lg;
              break;
            case "wheel":
              F = Rg;
              break;
            case "copy":
            case "cut":
            case "paste":
              F = gg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              F = yc;
          }
          var z = (n & 4) !== 0;
          var Ce = !z && e === "scroll";
          var x = z ? C !== null ? C + "Capture" : null : C;
          z = [];
          for (var E = N, T; E !== null;) {
            T = E;
            var A = T.stateNode;
            if (T.tag === 5 && A !== null) {
              T = A;
              if (x !== null) {
                A = Hr(E, x);
                if (A != null) {
                  z.push(ri(E, A, T));
                }
              }
            }
            if (Ce) {
              break;
            }
            E = E.return;
          }
          if (z.length > 0) {
            C = new F(C, j, null, o, R);
            L.push({
              event: C,
              listeners: z
            });
          }
        }
      }
      if ((n & 7) === 0) {
        e: {
          C = e === "mouseover" || e === "pointerover";
          F = e === "mouseout" || e === "pointerout";
          if (C && o !== Is && (j = o.relatedTarget || o.fromElement) && (Ln(j) || j[Gt])) {
            break e;
          }
          if ((F || C) && (C = R.window === R ? R : (C = R.ownerDocument) ? C.defaultView || C.parentWindow : window, F ? (j = o.relatedTarget || o.toElement, F = N, j = j ? Ln(j) : null, j !== null && (Ce = Rn(j), j !== Ce || j.tag !== 5 && j.tag !== 6) && (j = null)) : (F = null, j = N), F !== j)) {
            z = mc;
            A = "onMouseLeave";
            x = "onMouseEnter";
            E = "mouse";
            if (e === "pointerout" || e === "pointerover") {
              z = yc;
              A = "onPointerLeave";
              x = "onPointerEnter";
              E = "pointer";
            }
            Ce = F == null ? C : ar(F);
            T = j == null ? C : ar(j);
            C = new z(A, E + "leave", F, o, R);
            C.target = Ce;
            C.relatedTarget = T;
            A = null;
            if (Ln(R) === N) {
              z = new z(x, E + "enter", j, o, R);
              z.target = T;
              z.relatedTarget = Ce;
              A = z;
            }
            Ce = A;
            if (F && j) {
              t: {
                z = F;
                x = j;
                E = 0;
                T = z;
                for (; T; T = sr(T)) {
                  E++;
                }
                T = 0;
                A = x;
                for (; A; A = sr(A)) {
                  T++;
                }
                while (E - T > 0) {
                  z = sr(z);
                  E--;
                }
                while (T - E > 0) {
                  x = sr(x);
                  T--;
                }
                while (E--) {
                  if (z === x || x !== null && z === x.alternate) {
                    break t;
                  }
                  z = sr(z);
                  x = sr(x);
                }
                z = null;
              }
            } else {
              z = null;
            }
            if (F !== null) {
              Gc(L, C, F, z, false);
            }
            if (j !== null && Ce !== null) {
              Gc(L, Ce, j, z, true);
            }
          }
        }
        e: {
          C = N ? ar(N) : window;
          F = C.nodeName && C.nodeName.toLowerCase();
          if (F === "select" || F === "input" && C.type === "file") {
            var G = Fg;
          } else if (xc(C)) {
            if (Ic) {
              G = jg;
            } else {
              G = Bg;
              var V = Hg;
            }
          } else if ((F = C.nodeName) && F.toLowerCase() === "input" && (C.type === "checkbox" || C.type === "radio")) {
            G = Ug;
          }
          if (G &&= G(e, N)) {
            Tc(L, G, o, R);
            break e;
          }
          if (V) {
            V(e, C, N);
          }
          if (e === "focusout" && (V = C._wrapperState) && V.controlled && C.type === "number") {
            Es(C, "number", C.value);
          }
        }
        V = N ? ar(N) : window;
        switch (e) {
          case "focusin":
            if (xc(V) || V.contentEditable === "true") {
              ir = V;
              qs = N;
              ei = null;
            }
            break;
          case "focusout":
            ei = qs = ir = null;
            break;
          case "mousedown":
            Ks = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ks = false;
            Ac(L, o, R);
            break;
          case "selectionchange":
            if (Gg) {
              break;
            }
          case "keydown":
          case "keyup":
            Ac(L, o, R);
        }
        var W;
        if (Vs) {
          e: {
            switch (e) {
              case "compositionstart":
                var K = "onCompositionStart";
                break e;
              case "compositionend":
                K = "onCompositionEnd";
                break e;
              case "compositionupdate":
                K = "onCompositionUpdate";
                break e;
            }
            K = undefined;
          }
        } else if (rr) {
          if (Sc(e, o)) {
            K = "onCompositionEnd";
          }
        } else if (e === "keydown" && o.keyCode === 229) {
          K = "onCompositionStart";
        }
        if (K) {
          if (vc && o.locale !== "ko") {
            if (rr || K !== "onCompositionStart") {
              if (K === "onCompositionEnd" && rr) {
                W = pc();
              }
            } else {
              an = R;
              Bs = "value" in an ? an.value : an.textContent;
              rr = true;
            }
          }
          V = no(N, K);
          if (V.length > 0) {
            K = new gc(K, e, null, o, R);
            L.push({
              event: K,
              listeners: V
            });
            if (W) {
              K.data = W;
            } else {
              W = wc(o);
              if (W !== null) {
                K.data = W;
              }
            }
          }
        }
        if (W = Og ? Ag(e, o) : bg(e, o)) {
          N = no(N, "onBeforeInput");
          if (N.length > 0) {
            R = new gc("onBeforeInput", "beforeinput", null, o, R);
            L.push({
              event: R,
              listeners: N
            });
            R.data = W;
          }
        }
      }
      zc(L, n);
    });
  }
  function ri(e, n, o) {
    return {
      instance: e,
      listener: n,
      currentTarget: o
    };
  }
  function no(e, n) {
    var o = n + "Capture";
    var u = [];
    for (; e !== null;) {
      var l = e;
      var f = l.stateNode;
      if (l.tag === 5 && f !== null) {
        l = f;
        f = Hr(e, o);
        if (f != null) {
          u.unshift(ri(e, f, l));
        }
        f = Hr(e, n);
        if (f != null) {
          u.push(ri(e, f, l));
        }
      }
      e = e.return;
    }
    return u;
  }
  function sr(e) {
    if (e === null) {
      return null;
    }
    do {
      e = e.return;
    } while (e && e.tag !== 5);
    return e || null;
  }
  function Gc(e, n, o, u, l) {
    var f = n._reactName;
    var p = [];
    for (; o !== null && o !== u;) {
      var y = o;
      var _ = y.alternate;
      var N = y.stateNode;
      if (_ !== null && _ === u) {
        break;
      }
      if (y.tag === 5 && N !== null) {
        y = N;
        if (l) {
          _ = Hr(o, f);
          if (_ != null) {
            p.unshift(ri(o, _, y));
          }
        } else if (!l) {
          _ = Hr(o, f);
          if (_ != null) {
            p.push(ri(o, _, y));
          }
        }
      }
      o = o.return;
    }
    if (p.length !== 0) {
      e.push({
        event: n,
        listeners: p
      });
    }
  }
  var Yg = /\r\n?/g;
  var qg = /\u0000|\uFFFD/g;
  function Vc(e) {
    return (typeof e == "string" ? e : "" + e).replace(Yg, `
`).replace(qg, "");
  }
  function ro(e, n, o) {
    n = Vc(n);
    if (Vc(e) !== n && o) {
      throw Error(i(425));
    }
  }
  function io() {}
  var nu = null;
  var ru = null;
  function iu(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var ou = typeof setTimeout == "function" ? setTimeout : undefined;
  var Kg = typeof clearTimeout == "function" ? clearTimeout : undefined;
  var Wc = typeof Promise == "function" ? Promise : undefined;
  var Qg = typeof queueMicrotask == "function" ? queueMicrotask : typeof Wc !== "undefined" ? function (e) {
    return Wc.resolve(null).then(e).catch(Zg);
  } : ou;
  function Zg(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function su(e, n) {
    var o = n;
    var u = 0;
    do {
      var l = o.nextSibling;
      e.removeChild(o);
      if (l && l.nodeType === 8) {
        o = l.data;
        if (o === "/$") {
          if (u === 0) {
            e.removeChild(l);
            Xr(n);
            return;
          }
          u--;
        } else if (o === "$" || o === "$?" || o === "$!") {
          u++;
        }
      }
      o = l;
    } while (o);
    Xr(n);
  }
  function cn(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) {
        break;
      }
      if (n === 8) {
        n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          break;
        }
        if (n === "/$") {
          return null;
        }
      }
    }
    return e;
  }
  function Xc(e) {
    e = e.previousSibling;
    var n = 0;
    for (; e;) {
      if (e.nodeType === 8) {
        var o = e.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (n === 0) {
            return e;
          }
          n--;
        } else if (o === "/$") {
          n++;
        }
      }
      e = e.previousSibling;
    }
    return null;
  }
  var ur = Math.random().toString(36).slice(2);
  var bt = "__reactFiber$" + ur;
  var ii = "__reactProps$" + ur;
  var Gt = "__reactContainer$" + ur;
  var uu = "__reactEvents$" + ur;
  var Jg = "__reactListeners$" + ur;
  var ey = "__reactHandles$" + ur;
  function Ln(e) {
    var n = e[bt];
    if (n) {
      return n;
    }
    for (var o = e.parentNode; o;) {
      if (n = o[Gt] || o[bt]) {
        o = n.alternate;
        if (n.child !== null || o !== null && o.child !== null) {
          for (e = Xc(e); e !== null;) {
            if (o = e[bt]) {
              return o;
            }
            e = Xc(e);
          }
        }
        return n;
      }
      e = o;
      o = e.parentNode;
    }
    return null;
  }
  function oi(e) {
    e = e[bt] || e[Gt];
    if (!e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) {
      return null;
    } else {
      return e;
    }
  }
  function ar(e) {
    if (e.tag === 5 || e.tag === 6) {
      return e.stateNode;
    }
    throw Error(i(33));
  }
  function oo(e) {
    return e[ii] || null;
  }
  var au = [];
  var lr = -1;
  function fn(e) {
    return {
      current: e
    };
  }
  function ve(e) {
    if (!(lr < 0)) {
      e.current = au[lr];
      au[lr] = null;
      lr--;
    }
  }
  function ge(e, n) {
    lr++;
    au[lr] = e.current;
    e.current = n;
  }
  var dn = {};
  var je = fn(dn);
  var et = fn(false);
  var On = dn;
  function cr(e, n) {
    var o = e.type.contextTypes;
    if (!o) {
      return dn;
    }
    var u = e.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === n) {
      return u.__reactInternalMemoizedMaskedChildContext;
    }
    var l = {};
    var f;
    for (f in o) {
      l[f] = n[f];
    }
    if (u) {
      e = e.stateNode;
      e.__reactInternalMemoizedUnmaskedChildContext = n;
      e.__reactInternalMemoizedMaskedChildContext = l;
    }
    return l;
  }
  function tt(e) {
    e = e.childContextTypes;
    return e != null;
  }
  function so() {
    ve(et);
    ve(je);
  }
  function Yc(e, n, o) {
    if (je.current !== dn) {
      throw Error(i(168));
    }
    ge(je, n);
    ge(et, o);
  }
  function qc(e, n, o) {
    var u = e.stateNode;
    n = n.childContextTypes;
    if (typeof u.getChildContext != "function") {
      return o;
    }
    u = u.getChildContext();
    for (var l in u) {
      if (!(l in n)) {
        throw Error(i(108, me(e) || "Unknown", l));
      }
    }
    return U({}, o, u);
  }
  function uo(e) {
    e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || dn;
    On = je.current;
    ge(je, e);
    ge(et, et.current);
    return true;
  }
  function Kc(e, n, o) {
    var u = e.stateNode;
    if (!u) {
      throw Error(i(169));
    }
    if (o) {
      e = qc(e, n, On);
      u.__reactInternalMemoizedMergedChildContext = e;
      ve(et);
      ve(je);
      ge(je, e);
    } else {
      ve(et);
    }
    ge(et, o);
  }
  var Vt = null;
  var ao = false;
  var lu = false;
  function Qc(e) {
    if (Vt === null) {
      Vt = [e];
    } else {
      Vt.push(e);
    }
  }
  function ty(e) {
    ao = true;
    Qc(e);
  }
  function pn() {
    if (!lu && Vt !== null) {
      lu = true;
      var e = 0;
      var n = pe;
      try {
        var o = Vt;
        for (pe = 1; e < o.length; e++) {
          var u = o[e];
          do {
            u = u(true);
          } while (u !== null);
        }
        Vt = null;
        ao = false;
      } catch (l) {
        if (Vt !== null) {
          Vt = Vt.slice(e + 1);
        }
        Jl(Ls, pn);
        throw l;
      } finally {
        pe = n;
        lu = false;
      }
    }
    return null;
  }
  var fr = [];
  var dr = 0;
  var lo = null;
  var co = 0;
  var mt = [];
  var gt = 0;
  var An = null;
  var Wt = 1;
  var Xt = "";
  function bn(e, n) {
    fr[dr++] = co;
    fr[dr++] = lo;
    lo = e;
    co = n;
  }
  function Zc(e, n, o) {
    mt[gt++] = Wt;
    mt[gt++] = Xt;
    mt[gt++] = An;
    An = e;
    var u = Wt;
    e = Xt;
    var l = 32 - xt(u) - 1;
    u &= ~(1 << l);
    o += 1;
    var f = 32 - xt(n) + l;
    if (f > 30) {
      var p = l - l % 5;
      f = (u & (1 << p) - 1).toString(32);
      u >>= p;
      l -= p;
      Wt = 1 << 32 - xt(n) + l | o << l | u;
      Xt = f + e;
    } else {
      Wt = 1 << f | o << l | u;
      Xt = e;
    }
  }
  function cu(e) {
    if (e.return !== null) {
      bn(e, 1);
      Zc(e, 1, 0);
    }
  }
  function fu(e) {
    while (e === lo) {
      lo = fr[--dr];
      fr[dr] = null;
      co = fr[--dr];
      fr[dr] = null;
    }
    while (e === An) {
      An = mt[--gt];
      mt[gt] = null;
      Xt = mt[--gt];
      mt[gt] = null;
      Wt = mt[--gt];
      mt[gt] = null;
    }
  }
  var ct = null;
  var ft = null;
  var Se = false;
  var It = null;
  function Jc(e, n) {
    var o = Et(5, null, null, 0);
    o.elementType = "DELETED";
    o.stateNode = n;
    o.return = e;
    n = e.deletions;
    if (n === null) {
      e.deletions = [o];
      e.flags |= 16;
    } else {
      n.push(o);
    }
  }
  function ef(e, n) {
    switch (e.tag) {
      case 5:
        var o = e.type;
        n = n.nodeType !== 1 || o.toLowerCase() !== n.nodeName.toLowerCase() ? null : n;
        if (n !== null) {
          e.stateNode = n;
          ct = e;
          ft = cn(n.firstChild);
          return true;
        } else {
          return false;
        }
      case 6:
        n = e.pendingProps === "" || n.nodeType !== 3 ? null : n;
        if (n !== null) {
          e.stateNode = n;
          ct = e;
          ft = null;
          return true;
        } else {
          return false;
        }
      case 13:
        n = n.nodeType !== 8 ? null : n;
        if (n !== null) {
          o = An !== null ? {
            id: Wt,
            overflow: Xt
          } : null;
          e.memoizedState = {
            dehydrated: n,
            treeContext: o,
            retryLane: 1073741824
          };
          o = Et(18, null, null, 0);
          o.stateNode = n;
          o.return = e;
          e.child = o;
          ct = e;
          ft = null;
          return true;
        } else {
          return false;
        }
      default:
        return false;
    }
  }
  function du(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function pu(e) {
    if (Se) {
      var n = ft;
      if (n) {
        var o = n;
        if (!ef(e, n)) {
          if (du(e)) {
            throw Error(i(418));
          }
          n = cn(o.nextSibling);
          var u = ct;
          if (n && ef(e, n)) {
            Jc(u, o);
          } else {
            e.flags = e.flags & -4097 | 2;
            Se = false;
            ct = e;
          }
        }
      } else {
        if (du(e)) {
          throw Error(i(418));
        }
        e.flags = e.flags & -4097 | 2;
        Se = false;
        ct = e;
      }
    }
  }
  function tf(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) {
      e = e.return;
    }
    ct = e;
  }
  function fo(e) {
    if (e !== ct) {
      return false;
    }
    if (!Se) {
      tf(e);
      Se = true;
      return false;
    }
    var n;
    if ((n = e.tag !== 3) && !(n = e.tag !== 5)) {
      n = e.type;
      n = n !== "head" && n !== "body" && !iu(e.type, e.memoizedProps);
    }
    if (n &&= ft) {
      if (du(e)) {
        nf();
        throw Error(i(418));
      }
      while (n) {
        Jc(e, n);
        n = cn(n.nextSibling);
      }
    }
    tf(e);
    if (e.tag === 13) {
      e = e.memoizedState;
      e = e !== null ? e.dehydrated : null;
      if (!e) {
        throw Error(i(317));
      }
      e: {
        e = e.nextSibling;
        n = 0;
        while (e) {
          if (e.nodeType === 8) {
            var o = e.data;
            if (o === "/$") {
              if (n === 0) {
                ft = cn(e.nextSibling);
                break e;
              }
              n--;
            } else if (o === "$" || o === "$!" || o === "$?") {
              n++;
            }
          }
          e = e.nextSibling;
        }
        ft = null;
      }
    } else {
      ft = ct ? cn(e.stateNode.nextSibling) : null;
    }
    return true;
  }
  function nf() {
    for (var e = ft; e;) {
      e = cn(e.nextSibling);
    }
  }
  function pr() {
    ft = ct = null;
    Se = false;
  }
  function hu(e) {
    if (It === null) {
      It = [e];
    } else {
      It.push(e);
    }
  }
  var ny = ie.ReactCurrentBatchConfig;
  function si(e, n, o) {
    e = o.ref;
    if (e !== null && typeof e != "function" && typeof e != "object") {
      if (o._owner) {
        o = o._owner;
        if (o) {
          if (o.tag !== 1) {
            throw Error(i(309));
          }
          var u = o.stateNode;
        }
        if (!u) {
          throw Error(i(147, e));
        }
        var l = u;
        var f = "" + e;
        if (n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === f) {
          return n.ref;
        } else {
          n = function (p) {
            var y = l.refs;
            if (p === null) {
              delete y[f];
            } else {
              y[f] = p;
            }
          };
          n._stringRef = f;
          return n;
        }
      }
      if (typeof e != "string") {
        throw Error(i(284));
      }
      if (!o._owner) {
        throw Error(i(290, e));
      }
    }
    return e;
  }
  function po(e, n) {
    e = Object.prototype.toString.call(n);
    throw Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
  }
  function rf(e) {
    var n = e._init;
    return n(e._payload);
  }
  function of(e) {
    function n(x, E) {
      if (e) {
        var T = x.deletions;
        if (T === null) {
          x.deletions = [E];
          x.flags |= 16;
        } else {
          T.push(E);
        }
      }
    }
    function o(x, E) {
      if (!e) {
        return null;
      }
      while (E !== null) {
        n(x, E);
        E = E.sibling;
      }
      return null;
    }
    function u(x, E) {
      for (x = new Map(); E !== null;) {
        if (E.key !== null) {
          x.set(E.key, E);
        } else {
          x.set(E.index, E);
        }
        E = E.sibling;
      }
      return x;
    }
    function l(x, E) {
      x = Sn(x, E);
      x.index = 0;
      x.sibling = null;
      return x;
    }
    function f(x, E, T) {
      x.index = T;
      if (e) {
        T = x.alternate;
        if (T !== null) {
          T = T.index;
          if (T < E) {
            x.flags |= 2;
            return E;
          } else {
            return T;
          }
        } else {
          x.flags |= 2;
          return E;
        }
      } else {
        x.flags |= 1048576;
        return E;
      }
    }
    function p(x) {
      if (e && x.alternate === null) {
        x.flags |= 2;
      }
      return x;
    }
    function y(x, E, T, A) {
      if (E === null || E.tag !== 6) {
        E = oa(T, x.mode, A);
        E.return = x;
        return E;
      } else {
        E = l(E, T);
        E.return = x;
        return E;
      }
    }
    function _(x, E, T, A) {
      var G = T.type;
      if (G === Oe) {
        return R(x, E, T.props.children, A, T.key);
      } else if (E !== null && (E.elementType === G || typeof G == "object" && G !== null && G.$$typeof === Je && rf(G) === E.type)) {
        A = l(E, T.props);
        A.ref = si(x, E, T);
        A.return = x;
        return A;
      } else {
        A = Fo(T.type, T.key, T.props, null, x.mode, A);
        A.ref = si(x, E, T);
        A.return = x;
        return A;
      }
    }
    function N(x, E, T, A) {
      if (E === null || E.tag !== 4 || E.stateNode.containerInfo !== T.containerInfo || E.stateNode.implementation !== T.implementation) {
        E = sa(T, x.mode, A);
        E.return = x;
        return E;
      } else {
        E = l(E, T.children || []);
        E.return = x;
        return E;
      }
    }
    function R(x, E, T, A, G) {
      if (E === null || E.tag !== 7) {
        E = zn(T, x.mode, A, G);
        E.return = x;
        return E;
      } else {
        E = l(E, T);
        E.return = x;
        return E;
      }
    }
    function L(x, E, T) {
      if (typeof E == "string" && E !== "" || typeof E == "number") {
        E = oa("" + E, x.mode, T);
        E.return = x;
        return E;
      }
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case b:
            T = Fo(E.type, E.key, E.props, null, x.mode, T);
            T.ref = si(x, null, E);
            T.return = x;
            return T;
          case ce:
            E = sa(E, x.mode, T);
            E.return = x;
            return E;
          case Je:
            var A = E._init;
            return L(x, A(E._payload), T);
        }
        if (Mr(E) || X(E)) {
          E = zn(E, x.mode, T, null);
          E.return = x;
          return E;
        }
        po(x, E);
      }
      return null;
    }
    function C(x, E, T, A) {
      var G = E !== null ? E.key : null;
      if (typeof T == "string" && T !== "" || typeof T == "number") {
        if (G !== null) {
          return null;
        } else {
          return y(x, E, "" + T, A);
        }
      }
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case b:
            if (T.key === G) {
              return _(x, E, T, A);
            } else {
              return null;
            }
          case ce:
            if (T.key === G) {
              return N(x, E, T, A);
            } else {
              return null;
            }
          case Je:
            G = T._init;
            return C(x, E, G(T._payload), A);
        }
        if (Mr(T) || X(T)) {
          if (G !== null) {
            return null;
          } else {
            return R(x, E, T, A, null);
          }
        }
        po(x, T);
      }
      return null;
    }
    function F(x, E, T, A, G) {
      if (typeof A == "string" && A !== "" || typeof A == "number") {
        x = x.get(T) || null;
        return y(E, x, "" + A, G);
      }
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case b:
            x = x.get(A.key === null ? T : A.key) || null;
            return _(E, x, A, G);
          case ce:
            x = x.get(A.key === null ? T : A.key) || null;
            return N(E, x, A, G);
          case Je:
            var V = A._init;
            return F(x, E, T, V(A._payload), G);
        }
        if (Mr(A) || X(A)) {
          x = x.get(T) || null;
          return R(E, x, A, G, null);
        }
        po(E, A);
      }
      return null;
    }
    function j(x, E, T, A) {
      var G = null;
      var V = null;
      for (var W = E, K = E = 0, Fe = null; W !== null && K < T.length; K++) {
        if (W.index > K) {
          Fe = W;
          W = null;
        } else {
          Fe = W.sibling;
        }
        var le = C(x, W, T[K], A);
        if (le === null) {
          if (W === null) {
            W = Fe;
          }
          break;
        }
        if (e && W && le.alternate === null) {
          n(x, W);
        }
        E = f(le, E, K);
        if (V === null) {
          G = le;
        } else {
          V.sibling = le;
        }
        V = le;
        W = Fe;
      }
      if (K === T.length) {
        o(x, W);
        if (Se) {
          bn(x, K);
        }
        return G;
      }
      if (W === null) {
        for (; K < T.length; K++) {
          W = L(x, T[K], A);
          if (W !== null) {
            E = f(W, E, K);
            if (V === null) {
              G = W;
            } else {
              V.sibling = W;
            }
            V = W;
          }
        }
        if (Se) {
          bn(x, K);
        }
        return G;
      }
      for (W = u(x, W); K < T.length; K++) {
        Fe = F(W, x, K, T[K], A);
        if (Fe !== null) {
          if (e && Fe.alternate !== null) {
            W.delete(Fe.key === null ? K : Fe.key);
          }
          E = f(Fe, E, K);
          if (V === null) {
            G = Fe;
          } else {
            V.sibling = Fe;
          }
          V = Fe;
        }
      }
      if (e) {
        W.forEach(function (wn) {
          return n(x, wn);
        });
      }
      if (Se) {
        bn(x, K);
      }
      return G;
    }
    function z(x, E, T, A) {
      var G = X(T);
      if (typeof G != "function") {
        throw Error(i(150));
      }
      T = G.call(T);
      if (T == null) {
        throw Error(i(151));
      }
      var V = G = null;
      for (var W = E, K = E = 0, Fe = null, le = T.next(); W !== null && !le.done; K++, le = T.next()) {
        if (W.index > K) {
          Fe = W;
          W = null;
        } else {
          Fe = W.sibling;
        }
        var wn = C(x, W, le.value, A);
        if (wn === null) {
          if (W === null) {
            W = Fe;
          }
          break;
        }
        if (e && W && wn.alternate === null) {
          n(x, W);
        }
        E = f(wn, E, K);
        if (V === null) {
          G = wn;
        } else {
          V.sibling = wn;
        }
        V = wn;
        W = Fe;
      }
      if (le.done) {
        o(x, W);
        if (Se) {
          bn(x, K);
        }
        return G;
      }
      if (W === null) {
        for (; !le.done; K++, le = T.next()) {
          le = L(x, le.value, A);
          if (le !== null) {
            E = f(le, E, K);
            if (V === null) {
              G = le;
            } else {
              V.sibling = le;
            }
            V = le;
          }
        }
        if (Se) {
          bn(x, K);
        }
        return G;
      }
      for (W = u(x, W); !le.done; K++, le = T.next()) {
        le = F(W, x, K, le.value, A);
        if (le !== null) {
          if (e && le.alternate !== null) {
            W.delete(le.key === null ? K : le.key);
          }
          E = f(le, E, K);
          if (V === null) {
            G = le;
          } else {
            V.sibling = le;
          }
          V = le;
        }
      }
      if (e) {
        W.forEach(function (My) {
          return n(x, My);
        });
      }
      if (Se) {
        bn(x, K);
      }
      return G;
    }
    function Ce(x, E, T, A) {
      if (typeof T == "object" && T !== null && T.type === Oe && T.key === null) {
        T = T.props.children;
      }
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case b:
            e: {
              var G = T.key;
              for (var V = E; V !== null;) {
                if (V.key === G) {
                  G = T.type;
                  if (G === Oe) {
                    if (V.tag === 7) {
                      o(x, V.sibling);
                      E = l(V, T.props.children);
                      E.return = x;
                      x = E;
                      break e;
                    }
                  } else if (V.elementType === G || typeof G == "object" && G !== null && G.$$typeof === Je && rf(G) === V.type) {
                    o(x, V.sibling);
                    E = l(V, T.props);
                    E.ref = si(x, V, T);
                    E.return = x;
                    x = E;
                    break e;
                  }
                  o(x, V);
                  break;
                } else {
                  n(x, V);
                }
                V = V.sibling;
              }
              if (T.type === Oe) {
                E = zn(T.props.children, x.mode, A, T.key);
                E.return = x;
                x = E;
              } else {
                A = Fo(T.type, T.key, T.props, null, x.mode, A);
                A.ref = si(x, E, T);
                A.return = x;
                x = A;
              }
            }
            return p(x);
          case ce:
            e: {
              for (V = T.key; E !== null;) {
                if (E.key === V) {
                  if (E.tag === 4 && E.stateNode.containerInfo === T.containerInfo && E.stateNode.implementation === T.implementation) {
                    o(x, E.sibling);
                    E = l(E, T.children || []);
                    E.return = x;
                    x = E;
                    break e;
                  } else {
                    o(x, E);
                    break;
                  }
                } else {
                  n(x, E);
                }
                E = E.sibling;
              }
              E = sa(T, x.mode, A);
              E.return = x;
              x = E;
            }
            return p(x);
          case Je:
            V = T._init;
            return Ce(x, E, V(T._payload), A);
        }
        if (Mr(T)) {
          return j(x, E, T, A);
        }
        if (X(T)) {
          return z(x, E, T, A);
        }
        po(x, T);
      }
      if (typeof T == "string" && T !== "" || typeof T == "number") {
        T = "" + T;
        if (E !== null && E.tag === 6) {
          o(x, E.sibling);
          E = l(E, T);
          E.return = x;
          x = E;
        } else {
          o(x, E);
          E = oa(T, x.mode, A);
          E.return = x;
          x = E;
        }
        return p(x);
      } else {
        return o(x, E);
      }
    }
    return Ce;
  }
  var hr = of(true);
  var sf = of(false);
  var ho = fn(null);
  var mo = null;
  var mr = null;
  var mu = null;
  function gu() {
    mu = mr = mo = null;
  }
  function yu(e) {
    var n = ho.current;
    ve(ho);
    e._currentValue = n;
  }
  function vu(e, n, o) {
    while (e !== null) {
      var u = e.alternate;
      if ((e.childLanes & n) !== n) {
        e.childLanes |= n;
        if (u !== null) {
          u.childLanes |= n;
        }
      } else if (u !== null && (u.childLanes & n) !== n) {
        u.childLanes |= n;
      }
      if (e === o) {
        break;
      }
      e = e.return;
    }
  }
  function gr(e, n) {
    mo = e;
    mu = mr = null;
    e = e.dependencies;
    if (e !== null && e.firstContext !== null) {
      if ((e.lanes & n) !== 0) {
        nt = true;
      }
      e.firstContext = null;
    }
  }
  function yt(e) {
    var n = e._currentValue;
    if (mu !== e) {
      e = {
        context: e,
        memoizedValue: n,
        next: null
      };
      if (mr === null) {
        if (mo === null) {
          throw Error(i(308));
        }
        mr = e;
        mo.dependencies = {
          lanes: 0,
          firstContext: e
        };
      } else {
        mr = mr.next = e;
      }
    }
    return n;
  }
  var Mn = null;
  function _u(e) {
    if (Mn === null) {
      Mn = [e];
    } else {
      Mn.push(e);
    }
  }
  function uf(e, n, o, u) {
    var l = n.interleaved;
    if (l === null) {
      o.next = o;
      _u(n);
    } else {
      o.next = l.next;
      l.next = o;
    }
    n.interleaved = o;
    return Yt(e, u);
  }
  function Yt(e, n) {
    e.lanes |= n;
    var o = e.alternate;
    if (o !== null) {
      o.lanes |= n;
    }
    o = e;
    e = e.return;
    while (e !== null) {
      e.childLanes |= n;
      o = e.alternate;
      if (o !== null) {
        o.childLanes |= n;
      }
      o = e;
      e = e.return;
    }
    if (o.tag === 3) {
      return o.stateNode;
    } else {
      return null;
    }
  }
  var hn = false;
  function Eu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        interleaved: null,
        lanes: 0
      },
      effects: null
    };
  }
  function af(e, n) {
    e = e.updateQueue;
    if (n.updateQueue === e) {
      n.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
      };
    }
  }
  function qt(e, n) {
    return {
      eventTime: e,
      lane: n,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function mn(e, n, o) {
    var u = e.updateQueue;
    if (u === null) {
      return null;
    }
    u = u.shared;
    if ((se & 2) !== 0) {
      var l = u.pending;
      if (l === null) {
        n.next = n;
      } else {
        n.next = l.next;
        l.next = n;
      }
      u.pending = n;
      return Yt(e, o);
    }
    l = u.interleaved;
    if (l === null) {
      n.next = n;
      _u(u);
    } else {
      n.next = l.next;
      l.next = n;
    }
    u.interleaved = n;
    return Yt(e, o);
  }
  function go(e, n, o) {
    n = n.updateQueue;
    if (n !== null && (n = n.shared, (o & 4194240) !== 0)) {
      var u = n.lanes;
      u &= e.pendingLanes;
      o |= u;
      n.lanes = o;
      bs(e, o);
    }
  }
  function lf(e, n) {
    var o = e.updateQueue;
    var u = e.alternate;
    if (u !== null && (u = u.updateQueue, o === u)) {
      var l = null;
      var f = null;
      o = o.firstBaseUpdate;
      if (o !== null) {
        do {
          var p = {
            eventTime: o.eventTime,
            lane: o.lane,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null
          };
          if (f === null) {
            l = f = p;
          } else {
            f = f.next = p;
          }
          o = o.next;
        } while (o !== null);
        if (f === null) {
          l = f = n;
        } else {
          f = f.next = n;
        }
      } else {
        l = f = n;
      }
      o = {
        baseState: u.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: f,
        shared: u.shared,
        effects: u.effects
      };
      e.updateQueue = o;
      return;
    }
    e = o.lastBaseUpdate;
    if (e === null) {
      o.firstBaseUpdate = n;
    } else {
      e.next = n;
    }
    o.lastBaseUpdate = n;
  }
  function yo(e, n, o, u) {
    var l = e.updateQueue;
    hn = false;
    var f = l.firstBaseUpdate;
    var p = l.lastBaseUpdate;
    var y = l.shared.pending;
    if (y !== null) {
      l.shared.pending = null;
      var _ = y;
      var N = _.next;
      _.next = null;
      if (p === null) {
        f = N;
      } else {
        p.next = N;
      }
      p = _;
      var R = e.alternate;
      if (R !== null) {
        R = R.updateQueue;
        y = R.lastBaseUpdate;
        if (y !== p) {
          if (y === null) {
            R.firstBaseUpdate = N;
          } else {
            y.next = N;
          }
          R.lastBaseUpdate = _;
        }
      }
    }
    if (f !== null) {
      var L = l.baseState;
      p = 0;
      R = N = _ = null;
      y = f;
      do {
        var C = y.lane;
        var F = y.eventTime;
        if ((u & C) === C) {
          if (R !== null) {
            R = R.next = {
              eventTime: F,
              lane: 0,
              tag: y.tag,
              payload: y.payload,
              callback: y.callback,
              next: null
            };
          }
          e: {
            var j = e;
            var z = y;
            C = n;
            F = o;
            switch (z.tag) {
              case 1:
                j = z.payload;
                if (typeof j == "function") {
                  L = j.call(F, L, C);
                  break e;
                }
                L = j;
                break e;
              case 3:
                j.flags = j.flags & -65537 | 128;
              case 0:
                j = z.payload;
                C = typeof j == "function" ? j.call(F, L, C) : j;
                if (C == null) {
                  break e;
                }
                L = U({}, L, C);
                break e;
              case 2:
                hn = true;
            }
          }
          if (y.callback !== null && y.lane !== 0) {
            e.flags |= 64;
            C = l.effects;
            if (C === null) {
              l.effects = [y];
            } else {
              C.push(y);
            }
          }
        } else {
          F = {
            eventTime: F,
            lane: C,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null
          };
          if (R === null) {
            N = R = F;
            _ = L;
          } else {
            R = R.next = F;
          }
          p |= C;
        }
        y = y.next;
        if (y === null) {
          y = l.shared.pending;
          if (y === null) {
            break;
          }
          C = y;
          y = C.next;
          C.next = null;
          l.lastBaseUpdate = C;
          l.shared.pending = null;
        }
      } while (true);
      if (R === null) {
        _ = L;
      }
      l.baseState = _;
      l.firstBaseUpdate = N;
      l.lastBaseUpdate = R;
      n = l.shared.interleaved;
      if (n !== null) {
        l = n;
        do {
          p |= l.lane;
          l = l.next;
        } while (l !== n);
      } else if (f === null) {
        l.shared.lanes = 0;
      }
      Hn |= p;
      e.lanes = p;
      e.memoizedState = L;
    }
  }
  function cf(e, n, o) {
    e = n.effects;
    n.effects = null;
    if (e !== null) {
      for (n = 0; n < e.length; n++) {
        var u = e[n];
        var l = u.callback;
        if (l !== null) {
          u.callback = null;
          u = o;
          if (typeof l != "function") {
            throw Error(i(191, l));
          }
          l.call(u);
        }
      }
    }
  }
  var ui = {};
  var Mt = fn(ui);
  var ai = fn(ui);
  var li = fn(ui);
  function Dn(e) {
    if (e === ui) {
      throw Error(i(174));
    }
    return e;
  }
  function Su(e, n) {
    ge(li, n);
    ge(ai, e);
    ge(Mt, ui);
    e = n.nodeType;
    switch (e) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : ws(null, "");
        break;
      default:
        e = e === 8 ? n.parentNode : n;
        n = e.namespaceURI || null;
        e = e.tagName;
        n = ws(n, e);
    }
    ve(Mt);
    ge(Mt, n);
  }
  function yr() {
    ve(Mt);
    ve(ai);
    ve(li);
  }
  function ff(e) {
    Dn(li.current);
    var n = Dn(Mt.current);
    var o = ws(n, e.type);
    if (n !== o) {
      ge(ai, e);
      ge(Mt, o);
    }
  }
  function wu(e) {
    if (ai.current === e) {
      ve(Mt);
      ve(ai);
    }
  }
  var xe = fn(0);
  function vo(e) {
    for (var n = e; n !== null;) {
      if (n.tag === 13) {
        var o = n.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!")) {
          return n;
        }
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== undefined) {
        if ((n.flags & 128) !== 0) {
          return n;
        }
      } else if (n.child !== null) {
        n.child.return = n;
        n = n.child;
        continue;
      }
      if (n === e) {
        break;
      }
      while (n.sibling === null) {
        if (n.return === null || n.return === e) {
          return null;
        }
        n = n.return;
      }
      n.sibling.return = n.return;
      n = n.sibling;
    }
    return null;
  }
  var xu = [];
  function Tu() {
    for (var e = 0; e < xu.length; e++) {
      xu[e]._workInProgressVersionPrimary = null;
    }
    xu.length = 0;
  }
  var _o = ie.ReactCurrentDispatcher;
  var Iu = ie.ReactCurrentBatchConfig;
  var Fn = 0;
  var Te = null;
  var Ae = null;
  var Me = null;
  var Eo = false;
  var ci = false;
  var fi = 0;
  var ry = 0;
  function ze() {
    throw Error(i(321));
  }
  function Nu(e, n) {
    if (n === null) {
      return false;
    }
    for (var o = 0; o < n.length && o < e.length; o++) {
      if (!Tt(e[o], n[o])) {
        return false;
      }
    }
    return true;
  }
  function ku(e, n, o, u, l, f) {
    Fn = f;
    Te = n;
    n.memoizedState = null;
    n.updateQueue = null;
    n.lanes = 0;
    _o.current = e === null || e.memoizedState === null ? uy : ay;
    e = o(u, l);
    if (ci) {
      f = 0;
      do {
        ci = false;
        fi = 0;
        if (f >= 25) {
          throw Error(i(301));
        }
        f += 1;
        Me = Ae = null;
        n.updateQueue = null;
        _o.current = ly;
        e = o(u, l);
      } while (ci);
    }
    _o.current = xo;
    n = Ae !== null && Ae.next !== null;
    Fn = 0;
    Me = Ae = Te = null;
    Eo = false;
    if (n) {
      throw Error(i(300));
    }
    return e;
  }
  function Cu() {
    var e = fi !== 0;
    fi = 0;
    return e;
  }
  function Dt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    if (Me === null) {
      Te.memoizedState = Me = e;
    } else {
      Me = Me.next = e;
    }
    return Me;
  }
  function vt() {
    if (Ae === null) {
      var e = Te.alternate;
      e = e !== null ? e.memoizedState : null;
    } else {
      e = Ae.next;
    }
    var n = Me === null ? Te.memoizedState : Me.next;
    if (n !== null) {
      Me = n;
      Ae = e;
    } else {
      if (e === null) {
        throw Error(i(310));
      }
      Ae = e;
      e = {
        memoizedState: Ae.memoizedState,
        baseState: Ae.baseState,
        baseQueue: Ae.baseQueue,
        queue: Ae.queue,
        next: null
      };
      if (Me === null) {
        Te.memoizedState = Me = e;
      } else {
        Me = Me.next = e;
      }
    }
    return Me;
  }
  function di(e, n) {
    if (typeof n == "function") {
      return n(e);
    } else {
      return n;
    }
  }
  function Pu(e) {
    var n = vt();
    var o = n.queue;
    if (o === null) {
      throw Error(i(311));
    }
    o.lastRenderedReducer = e;
    var u = Ae;
    var l = u.baseQueue;
    var f = o.pending;
    if (f !== null) {
      if (l !== null) {
        var p = l.next;
        l.next = f.next;
        f.next = p;
      }
      u.baseQueue = l = f;
      o.pending = null;
    }
    if (l !== null) {
      f = l.next;
      u = u.baseState;
      var y = p = null;
      var _ = null;
      var N = f;
      do {
        var R = N.lane;
        if ((Fn & R) === R) {
          if (_ !== null) {
            _ = _.next = {
              lane: 0,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null
            };
          }
          u = N.hasEagerState ? N.eagerState : e(u, N.action);
        } else {
          var L = {
            lane: R,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null
          };
          if (_ === null) {
            y = _ = L;
            p = u;
          } else {
            _ = _.next = L;
          }
          Te.lanes |= R;
          Hn |= R;
        }
        N = N.next;
      } while (N !== null && N !== f);
      if (_ === null) {
        p = u;
      } else {
        _.next = y;
      }
      if (!Tt(u, n.memoizedState)) {
        nt = true;
      }
      n.memoizedState = u;
      n.baseState = p;
      n.baseQueue = _;
      o.lastRenderedState = u;
    }
    e = o.interleaved;
    if (e !== null) {
      l = e;
      do {
        f = l.lane;
        Te.lanes |= f;
        Hn |= f;
        l = l.next;
      } while (l !== e);
    } else if (l === null) {
      o.lanes = 0;
    }
    return [n.memoizedState, o.dispatch];
  }
  function Ru(e) {
    var n = vt();
    var o = n.queue;
    if (o === null) {
      throw Error(i(311));
    }
    o.lastRenderedReducer = e;
    var u = o.dispatch;
    var l = o.pending;
    var f = n.memoizedState;
    if (l !== null) {
      o.pending = null;
      var p = l = l.next;
      do {
        f = e(f, p.action);
        p = p.next;
      } while (p !== l);
      if (!Tt(f, n.memoizedState)) {
        nt = true;
      }
      n.memoizedState = f;
      if (n.baseQueue === null) {
        n.baseState = f;
      }
      o.lastRenderedState = f;
    }
    return [f, u];
  }
  function df() {}
  function pf(e, n) {
    var o = Te;
    var u = vt();
    var l = n();
    var f = !Tt(u.memoizedState, l);
    if (f) {
      u.memoizedState = l;
      nt = true;
    }
    u = u.queue;
    Lu(gf.bind(null, o, u, e), [e]);
    if (u.getSnapshot !== n || f || Me !== null && Me.memoizedState.tag & 1) {
      o.flags |= 2048;
      pi(9, mf.bind(null, o, u, l, n), undefined, null);
      if (De === null) {
        throw Error(i(349));
      }
      if ((Fn & 30) === 0) {
        hf(o, n, l);
      }
    }
    return l;
  }
  function hf(e, n, o) {
    e.flags |= 16384;
    e = {
      getSnapshot: n,
      value: o
    };
    n = Te.updateQueue;
    if (n === null) {
      n = {
        lastEffect: null,
        stores: null
      };
      Te.updateQueue = n;
      n.stores = [e];
    } else {
      o = n.stores;
      if (o === null) {
        n.stores = [e];
      } else {
        o.push(e);
      }
    }
  }
  function mf(e, n, o, u) {
    n.value = o;
    n.getSnapshot = u;
    if (yf(n)) {
      vf(e);
    }
  }
  function gf(e, n, o) {
    return o(function () {
      if (yf(n)) {
        vf(e);
      }
    });
  }
  function yf(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var o = n();
      return !Tt(e, o);
    } catch {
      return true;
    }
  }
  function vf(e) {
    var n = Yt(e, 1);
    if (n !== null) {
      Pt(n, e, 1, -1);
    }
  }
  function _f(e) {
    var n = Dt();
    if (typeof e == "function") {
      e = e();
    }
    n.memoizedState = n.baseState = e;
    e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: di,
      lastRenderedState: e
    };
    n.queue = e;
    e = e.dispatch = sy.bind(null, Te, e);
    return [n.memoizedState, e];
  }
  function pi(e, n, o, u) {
    e = {
      tag: e,
      create: n,
      destroy: o,
      deps: u,
      next: null
    };
    n = Te.updateQueue;
    if (n === null) {
      n = {
        lastEffect: null,
        stores: null
      };
      Te.updateQueue = n;
      n.lastEffect = e.next = e;
    } else {
      o = n.lastEffect;
      if (o === null) {
        n.lastEffect = e.next = e;
      } else {
        u = o.next;
        o.next = e;
        e.next = u;
        n.lastEffect = e;
      }
    }
    return e;
  }
  function Ef() {
    return vt().memoizedState;
  }
  function So(e, n, o, u) {
    var l = Dt();
    Te.flags |= e;
    l.memoizedState = pi(n | 1, o, undefined, u === undefined ? null : u);
  }
  function wo(e, n, o, u) {
    var l = vt();
    u = u === undefined ? null : u;
    var f = undefined;
    if (Ae !== null) {
      var p = Ae.memoizedState;
      f = p.destroy;
      if (u !== null && Nu(u, p.deps)) {
        l.memoizedState = pi(n, o, f, u);
        return;
      }
    }
    Te.flags |= e;
    l.memoizedState = pi(n | 1, o, f, u);
  }
  function Sf(e, n) {
    return So(8390656, 8, e, n);
  }
  function Lu(e, n) {
    return wo(2048, 8, e, n);
  }
  function wf(e, n) {
    return wo(4, 2, e, n);
  }
  function xf(e, n) {
    return wo(4, 4, e, n);
  }
  function Tf(e, n) {
    if (typeof n == "function") {
      e = e();
      n(e);
      return function () {
        n(null);
      };
    }
    if (n != null) {
      e = e();
      n.current = e;
      return function () {
        n.current = null;
      };
    }
  }
  function If(e, n, o) {
    o = o != null ? o.concat([e]) : null;
    return wo(4, 4, Tf.bind(null, n, e), o);
  }
  function Ou() {}
  function Nf(e, n) {
    var o = vt();
    n = n === undefined ? null : n;
    var u = o.memoizedState;
    if (u !== null && n !== null && Nu(n, u[1])) {
      return u[0];
    } else {
      o.memoizedState = [e, n];
      return e;
    }
  }
  function kf(e, n) {
    var o = vt();
    n = n === undefined ? null : n;
    var u = o.memoizedState;
    if (u !== null && n !== null && Nu(n, u[1])) {
      return u[0];
    } else {
      e = e();
      o.memoizedState = [e, n];
      return e;
    }
  }
  function Cf(e, n, o) {
    if ((Fn & 21) === 0) {
      if (e.baseState) {
        e.baseState = false;
        nt = true;
      }
      return e.memoizedState = o;
    } else {
      if (!Tt(o, n)) {
        o = rc();
        Te.lanes |= o;
        Hn |= o;
        e.baseState = true;
      }
      return n;
    }
  }
  function iy(e, n) {
    var o = pe;
    pe = o !== 0 && o < 4 ? o : 4;
    e(true);
    var u = Iu.transition;
    Iu.transition = {};
    try {
      e(false);
      n();
    } finally {
      pe = o;
      Iu.transition = u;
    }
  }
  function Pf() {
    return vt().memoizedState;
  }
  function oy(e, n, o) {
    var u = _n(e);
    o = {
      lane: u,
      action: o,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (Rf(e)) {
      Lf(n, o);
    } else {
      o = uf(e, n, o, u);
      if (o !== null) {
        var l = Xe();
        Pt(o, e, u, l);
        Of(o, n, u);
      }
    }
  }
  function sy(e, n, o) {
    var u = _n(e);
    var l = {
      lane: u,
      action: o,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (Rf(e)) {
      Lf(n, l);
    } else {
      var f = e.alternate;
      if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = n.lastRenderedReducer, f !== null)) {
        try {
          var p = n.lastRenderedState;
          var y = f(p, o);
          l.hasEagerState = true;
          l.eagerState = y;
          if (Tt(y, p)) {
            var _ = n.interleaved;
            if (_ === null) {
              l.next = l;
              _u(n);
            } else {
              l.next = _.next;
              _.next = l;
            }
            n.interleaved = l;
            return;
          }
        } catch {} finally {}
      }
      o = uf(e, n, l, u);
      if (o !== null) {
        l = Xe();
        Pt(o, e, u, l);
        Of(o, n, u);
      }
    }
  }
  function Rf(e) {
    var n = e.alternate;
    return e === Te || n !== null && n === Te;
  }
  function Lf(e, n) {
    ci = Eo = true;
    var o = e.pending;
    if (o === null) {
      n.next = n;
    } else {
      n.next = o.next;
      o.next = n;
    }
    e.pending = n;
  }
  function Of(e, n, o) {
    if ((o & 4194240) !== 0) {
      var u = n.lanes;
      u &= e.pendingLanes;
      o |= u;
      n.lanes = o;
      bs(e, o);
    }
  }
  var xo = {
    readContext: yt,
    useCallback: ze,
    useContext: ze,
    useEffect: ze,
    useImperativeHandle: ze,
    useInsertionEffect: ze,
    useLayoutEffect: ze,
    useMemo: ze,
    useReducer: ze,
    useRef: ze,
    useState: ze,
    useDebugValue: ze,
    useDeferredValue: ze,
    useTransition: ze,
    useMutableSource: ze,
    useSyncExternalStore: ze,
    useId: ze,
    unstable_isNewReconciler: false
  };
  var uy = {
    readContext: yt,
    useCallback: function (e, n) {
      Dt().memoizedState = [e, n === undefined ? null : n];
      return e;
    },
    useContext: yt,
    useEffect: Sf,
    useImperativeHandle: function (e, n, o) {
      o = o != null ? o.concat([e]) : null;
      return So(4194308, 4, Tf.bind(null, n, e), o);
    },
    useLayoutEffect: function (e, n) {
      return So(4194308, 4, e, n);
    },
    useInsertionEffect: function (e, n) {
      return So(4, 2, e, n);
    },
    useMemo: function (e, n) {
      var o = Dt();
      n = n === undefined ? null : n;
      e = e();
      o.memoizedState = [e, n];
      return e;
    },
    useReducer: function (e, n, o) {
      var u = Dt();
      n = o !== undefined ? o(n) : n;
      u.memoizedState = u.baseState = n;
      e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: n
      };
      u.queue = e;
      e = e.dispatch = oy.bind(null, Te, e);
      return [u.memoizedState, e];
    },
    useRef: function (e) {
      var n = Dt();
      e = {
        current: e
      };
      return n.memoizedState = e;
    },
    useState: _f,
    useDebugValue: Ou,
    useDeferredValue: function (e) {
      return Dt().memoizedState = e;
    },
    useTransition: function () {
      var e = _f(false);
      var n = e[0];
      e = iy.bind(null, e[1]);
      Dt().memoizedState = e;
      return [n, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, n, o) {
      var u = Te;
      var l = Dt();
      if (Se) {
        if (o === undefined) {
          throw Error(i(407));
        }
        o = o();
      } else {
        o = n();
        if (De === null) {
          throw Error(i(349));
        }
        if ((Fn & 30) === 0) {
          hf(u, n, o);
        }
      }
      l.memoizedState = o;
      var f = {
        value: o,
        getSnapshot: n
      };
      l.queue = f;
      Sf(gf.bind(null, u, f, e), [e]);
      u.flags |= 2048;
      pi(9, mf.bind(null, u, f, o, n), undefined, null);
      return o;
    },
    useId: function () {
      var e = Dt();
      var n = De.identifierPrefix;
      if (Se) {
        var o = Xt;
        var u = Wt;
        o = (u & ~(1 << 32 - xt(u) - 1)).toString(32) + o;
        n = ":" + n + "R" + o;
        o = fi++;
        if (o > 0) {
          n += "H" + o.toString(32);
        }
        n += ":";
      } else {
        o = ry++;
        n = ":" + n + "r" + o.toString(32) + ":";
      }
      return e.memoizedState = n;
    },
    unstable_isNewReconciler: false
  };
  var ay = {
    readContext: yt,
    useCallback: Nf,
    useContext: yt,
    useEffect: Lu,
    useImperativeHandle: If,
    useInsertionEffect: wf,
    useLayoutEffect: xf,
    useMemo: kf,
    useReducer: Pu,
    useRef: Ef,
    useState: function () {
      return Pu(di);
    },
    useDebugValue: Ou,
    useDeferredValue: function (e) {
      var n = vt();
      return Cf(n, Ae.memoizedState, e);
    },
    useTransition: function () {
      var e = Pu(di)[0];
      var n = vt().memoizedState;
      return [e, n];
    },
    useMutableSource: df,
    useSyncExternalStore: pf,
    useId: Pf,
    unstable_isNewReconciler: false
  };
  var ly = {
    readContext: yt,
    useCallback: Nf,
    useContext: yt,
    useEffect: Lu,
    useImperativeHandle: If,
    useInsertionEffect: wf,
    useLayoutEffect: xf,
    useMemo: kf,
    useReducer: Ru,
    useRef: Ef,
    useState: function () {
      return Ru(di);
    },
    useDebugValue: Ou,
    useDeferredValue: function (e) {
      var n = vt();
      if (Ae === null) {
        return n.memoizedState = e;
      } else {
        return Cf(n, Ae.memoizedState, e);
      }
    },
    useTransition: function () {
      var e = Ru(di)[0];
      var n = vt().memoizedState;
      return [e, n];
    },
    useMutableSource: df,
    useSyncExternalStore: pf,
    useId: Pf,
    unstable_isNewReconciler: false
  };
  function Nt(e, n) {
    if (e && e.defaultProps) {
      n = U({}, n);
      e = e.defaultProps;
      for (var o in e) {
        if (n[o] === undefined) {
          n[o] = e[o];
        }
      }
      return n;
    }
    return n;
  }
  function Au(e, n, o, u) {
    n = e.memoizedState;
    o = o(u, n);
    o = o == null ? n : U({}, n, o);
    e.memoizedState = o;
    if (e.lanes === 0) {
      e.updateQueue.baseState = o;
    }
  }
  var To = {
    isMounted: function (e) {
      if (e = e._reactInternals) {
        return Rn(e) === e;
      } else {
        return false;
      }
    },
    enqueueSetState: function (e, n, o) {
      e = e._reactInternals;
      var u = Xe();
      var l = _n(e);
      var f = qt(u, l);
      f.payload = n;
      if (o != null) {
        f.callback = o;
      }
      n = mn(e, f, l);
      if (n !== null) {
        Pt(n, e, l, u);
        go(n, e, l);
      }
    },
    enqueueReplaceState: function (e, n, o) {
      e = e._reactInternals;
      var u = Xe();
      var l = _n(e);
      var f = qt(u, l);
      f.tag = 1;
      f.payload = n;
      if (o != null) {
        f.callback = o;
      }
      n = mn(e, f, l);
      if (n !== null) {
        Pt(n, e, l, u);
        go(n, e, l);
      }
    },
    enqueueForceUpdate: function (e, n) {
      e = e._reactInternals;
      var o = Xe();
      var u = _n(e);
      var l = qt(o, u);
      l.tag = 2;
      if (n != null) {
        l.callback = n;
      }
      n = mn(e, l, u);
      if (n !== null) {
        Pt(n, e, u, o);
        go(n, e, u);
      }
    }
  };
  function Af(e, n, o, u, l, f, p) {
    e = e.stateNode;
    if (typeof e.shouldComponentUpdate == "function") {
      return e.shouldComponentUpdate(u, f, p);
    } else if (n.prototype && n.prototype.isPureReactComponent) {
      return !Jr(o, u) || !Jr(l, f);
    } else {
      return true;
    }
  }
  function bf(e, n, o) {
    var u = false;
    var l = dn;
    var f = n.contextType;
    if (typeof f == "object" && f !== null) {
      f = yt(f);
    } else {
      l = tt(n) ? On : je.current;
      u = n.contextTypes;
      f = (u = u != null) ? cr(e, l) : dn;
    }
    n = new n(o, f);
    e.memoizedState = n.state ?? null;
    n.updater = To;
    e.stateNode = n;
    n._reactInternals = e;
    if (u) {
      e = e.stateNode;
      e.__reactInternalMemoizedUnmaskedChildContext = l;
      e.__reactInternalMemoizedMaskedChildContext = f;
    }
    return n;
  }
  function Mf(e, n, o, u) {
    e = n.state;
    if (typeof n.componentWillReceiveProps == "function") {
      n.componentWillReceiveProps(o, u);
    }
    if (typeof n.UNSAFE_componentWillReceiveProps == "function") {
      n.UNSAFE_componentWillReceiveProps(o, u);
    }
    if (n.state !== e) {
      To.enqueueReplaceState(n, n.state, null);
    }
  }
  function bu(e, n, o, u) {
    var l = e.stateNode;
    l.props = o;
    l.state = e.memoizedState;
    l.refs = {};
    Eu(e);
    var f = n.contextType;
    if (typeof f == "object" && f !== null) {
      l.context = yt(f);
    } else {
      f = tt(n) ? On : je.current;
      l.context = cr(e, f);
    }
    l.state = e.memoizedState;
    f = n.getDerivedStateFromProps;
    if (typeof f == "function") {
      Au(e, n, f, o);
      l.state = e.memoizedState;
    }
    if (typeof n.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function")) {
      n = l.state;
      if (typeof l.componentWillMount == "function") {
        l.componentWillMount();
      }
      if (typeof l.UNSAFE_componentWillMount == "function") {
        l.UNSAFE_componentWillMount();
      }
      if (n !== l.state) {
        To.enqueueReplaceState(l, l.state, null);
      }
      yo(e, o, l, u);
      l.state = e.memoizedState;
    }
    if (typeof l.componentDidMount == "function") {
      e.flags |= 4194308;
    }
  }
  function vr(e, n) {
    try {
      var o = "";
      var u = n;
      do {
        o += ue(u);
        u = u.return;
      } while (u);
      var l = o;
    } catch (f) {
      l = `
Error generating stack: ${f.message}
${f.stack}`;
    }
    return {
      value: e,
      source: n,
      stack: l,
      digest: null
    };
  }
  function Mu(e, n, o) {
    return {
      value: e,
      source: null,
      stack: o ?? null,
      digest: n ?? null
    };
  }
  function Du(e, n) {
    try {
      console.error(n.value);
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  var cy = typeof WeakMap == "function" ? WeakMap : Map;
  function Df(e, n, o) {
    o = qt(-1, o);
    o.tag = 3;
    o.payload = {
      element: null
    };
    var u = n.value;
    o.callback = function () {
      if (!Lo) {
        Lo = true;
        Qu = u;
      }
      Du(e, n);
    };
    return o;
  }
  function Ff(e, n, o) {
    o = qt(-1, o);
    o.tag = 3;
    var u = e.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var l = n.value;
      o.payload = function () {
        return u(l);
      };
      o.callback = function () {
        Du(e, n);
      };
    }
    var f = e.stateNode;
    if (f !== null && typeof f.componentDidCatch == "function") {
      o.callback = function () {
        Du(e, n);
        if (typeof u != "function") {
          if (yn === null) {
            yn = new Set([this]);
          } else {
            yn.add(this);
          }
        }
        var p = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: p !== null ? p : ""
        });
      };
    }
    return o;
  }
  function Hf(e, n, o) {
    var u = e.pingCache;
    if (u === null) {
      u = e.pingCache = new cy();
      var l = new Set();
      u.set(n, l);
    } else {
      l = u.get(n);
      if (l === undefined) {
        l = new Set();
        u.set(n, l);
      }
    }
    if (!l.has(o)) {
      l.add(o);
      e = Ty.bind(null, e, n, o);
      n.then(e, e);
    }
  }
  function Bf(e) {
    do {
      var n;
      if (n = e.tag === 13) {
        n = e.memoizedState;
        n = n !== null ? n.dehydrated !== null : true;
      }
      if (n) {
        return e;
      }
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Uf(e, n, o, u, l) {
    if ((e.mode & 1) === 0) {
      if (e === n) {
        e.flags |= 65536;
      } else {
        e.flags |= 128;
        o.flags |= 131072;
        o.flags &= -52805;
        if (o.tag === 1) {
          if (o.alternate === null) {
            o.tag = 17;
          } else {
            n = qt(-1, 1);
            n.tag = 2;
            mn(o, n, 1);
          }
        }
        o.lanes |= 1;
      }
      return e;
    } else {
      e.flags |= 65536;
      e.lanes = l;
      return e;
    }
  }
  var fy = ie.ReactCurrentOwner;
  var nt = false;
  function We(e, n, o, u) {
    n.child = e === null ? sf(n, null, o, u) : hr(n, e.child, o, u);
  }
  function jf(e, n, o, u, l) {
    o = o.render;
    var f = n.ref;
    gr(n, l);
    u = ku(e, n, o, u, f, l);
    o = Cu();
    if (e !== null && !nt) {
      n.updateQueue = e.updateQueue;
      n.flags &= -2053;
      e.lanes &= ~l;
      return Kt(e, n, l);
    } else {
      if (Se && o) {
        cu(n);
      }
      n.flags |= 1;
      We(e, n, u, l);
      return n.child;
    }
  }
  function zf(e, n, o, u, l) {
    if (e === null) {
      var f = o.type;
      if (typeof f == "function" && !ia(f) && f.defaultProps === undefined && o.compare === null && o.defaultProps === undefined) {
        n.tag = 15;
        n.type = f;
        return $f(e, n, f, u, l);
      } else {
        e = Fo(o.type, null, u, n, n.mode, l);
        e.ref = n.ref;
        e.return = n;
        return n.child = e;
      }
    }
    f = e.child;
    if ((e.lanes & l) === 0) {
      var p = f.memoizedProps;
      o = o.compare;
      o = o !== null ? o : Jr;
      if (o(p, u) && e.ref === n.ref) {
        return Kt(e, n, l);
      }
    }
    n.flags |= 1;
    e = Sn(f, u);
    e.ref = n.ref;
    e.return = n;
    return n.child = e;
  }
  function $f(e, n, o, u, l) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (Jr(f, u) && e.ref === n.ref) {
        nt = false;
        n.pendingProps = u = f;
        if ((e.lanes & l) !== 0) {
          if ((e.flags & 131072) !== 0) {
            nt = true;
          }
        } else {
          n.lanes = e.lanes;
          return Kt(e, n, l);
        }
      }
    }
    return Fu(e, n, o, u, l);
  }
  function Gf(e, n, o) {
    var u = n.pendingProps;
    var l = u.children;
    var f = e !== null ? e.memoizedState : null;
    if (u.mode === "hidden") {
      if ((n.mode & 1) === 0) {
        n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null
        };
        ge(Er, dt);
        dt |= o;
      } else {
        if ((o & 1073741824) === 0) {
          e = f !== null ? f.baseLanes | o : o;
          n.lanes = n.childLanes = 1073741824;
          n.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null
          };
          n.updateQueue = null;
          ge(Er, dt);
          dt |= e;
          return null;
        }
        n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null
        };
        u = f !== null ? f.baseLanes : o;
        ge(Er, dt);
        dt |= u;
      }
    } else {
      if (f !== null) {
        u = f.baseLanes | o;
        n.memoizedState = null;
      } else {
        u = o;
      }
      ge(Er, dt);
      dt |= u;
    }
    We(e, n, l, o);
    return n.child;
  }
  function Vf(e, n) {
    var o = n.ref;
    if (e === null && o !== null || e !== null && e.ref !== o) {
      n.flags |= 512;
      n.flags |= 2097152;
    }
  }
  function Fu(e, n, o, u, l) {
    var f = tt(o) ? On : je.current;
    f = cr(n, f);
    gr(n, l);
    o = ku(e, n, o, u, f, l);
    u = Cu();
    if (e !== null && !nt) {
      n.updateQueue = e.updateQueue;
      n.flags &= -2053;
      e.lanes &= ~l;
      return Kt(e, n, l);
    } else {
      if (Se && u) {
        cu(n);
      }
      n.flags |= 1;
      We(e, n, o, l);
      return n.child;
    }
  }
  function Wf(e, n, o, u, l) {
    if (tt(o)) {
      var f = true;
      uo(n);
    } else {
      f = false;
    }
    gr(n, l);
    if (n.stateNode === null) {
      No(e, n);
      bf(n, o, u);
      bu(n, o, u, l);
      u = true;
    } else if (e === null) {
      var p = n.stateNode;
      var y = n.memoizedProps;
      p.props = y;
      var _ = p.context;
      var N = o.contextType;
      if (typeof N == "object" && N !== null) {
        N = yt(N);
      } else {
        N = tt(o) ? On : je.current;
        N = cr(n, N);
      }
      var R = o.getDerivedStateFromProps;
      var L = typeof R == "function" || typeof p.getSnapshotBeforeUpdate == "function";
      if (!L && (typeof p.UNSAFE_componentWillReceiveProps == "function" || typeof p.componentWillReceiveProps == "function")) {
        if (y !== u || _ !== N) {
          Mf(n, p, u, N);
        }
      }
      hn = false;
      var C = n.memoizedState;
      p.state = C;
      yo(n, u, p, l);
      _ = n.memoizedState;
      if (y !== u || C !== _ || et.current || hn) {
        if (typeof R == "function") {
          Au(n, o, R, u);
          _ = n.memoizedState;
        }
        if (y = hn || Af(n, o, y, u, C, _, N)) {
          if (!L && (typeof p.UNSAFE_componentWillMount == "function" || typeof p.componentWillMount == "function")) {
            if (typeof p.componentWillMount == "function") {
              p.componentWillMount();
            }
            if (typeof p.UNSAFE_componentWillMount == "function") {
              p.UNSAFE_componentWillMount();
            }
          }
          if (typeof p.componentDidMount == "function") {
            n.flags |= 4194308;
          }
        } else {
          if (typeof p.componentDidMount == "function") {
            n.flags |= 4194308;
          }
          n.memoizedProps = u;
          n.memoizedState = _;
        }
        p.props = u;
        p.state = _;
        p.context = N;
        u = y;
      } else {
        if (typeof p.componentDidMount == "function") {
          n.flags |= 4194308;
        }
        u = false;
      }
    } else {
      p = n.stateNode;
      af(e, n);
      y = n.memoizedProps;
      N = n.type === n.elementType ? y : Nt(n.type, y);
      p.props = N;
      L = n.pendingProps;
      C = p.context;
      _ = o.contextType;
      if (typeof _ == "object" && _ !== null) {
        _ = yt(_);
      } else {
        _ = tt(o) ? On : je.current;
        _ = cr(n, _);
      }
      var F = o.getDerivedStateFromProps;
      if (!(R = typeof F == "function" || typeof p.getSnapshotBeforeUpdate == "function") && (typeof p.UNSAFE_componentWillReceiveProps == "function" || typeof p.componentWillReceiveProps == "function")) {
        if (y !== L || C !== _) {
          Mf(n, p, u, _);
        }
      }
      hn = false;
      C = n.memoizedState;
      p.state = C;
      yo(n, u, p, l);
      var j = n.memoizedState;
      if (y !== L || C !== j || et.current || hn) {
        if (typeof F == "function") {
          Au(n, o, F, u);
          j = n.memoizedState;
        }
        if (N = hn || Af(n, o, N, u, C, j, _) || false) {
          if (!R && (typeof p.UNSAFE_componentWillUpdate == "function" || typeof p.componentWillUpdate == "function")) {
            if (typeof p.componentWillUpdate == "function") {
              p.componentWillUpdate(u, j, _);
            }
            if (typeof p.UNSAFE_componentWillUpdate == "function") {
              p.UNSAFE_componentWillUpdate(u, j, _);
            }
          }
          if (typeof p.componentDidUpdate == "function") {
            n.flags |= 4;
          }
          if (typeof p.getSnapshotBeforeUpdate == "function") {
            n.flags |= 1024;
          }
        } else {
          if (typeof p.componentDidUpdate == "function" && (y !== e.memoizedProps || C !== e.memoizedState)) {
            n.flags |= 4;
          }
          if (typeof p.getSnapshotBeforeUpdate == "function" && (y !== e.memoizedProps || C !== e.memoizedState)) {
            n.flags |= 1024;
          }
          n.memoizedProps = u;
          n.memoizedState = j;
        }
        p.props = u;
        p.state = j;
        p.context = _;
        u = N;
      } else {
        if (typeof p.componentDidUpdate == "function" && (y !== e.memoizedProps || C !== e.memoizedState)) {
          n.flags |= 4;
        }
        if (typeof p.getSnapshotBeforeUpdate == "function" && (y !== e.memoizedProps || C !== e.memoizedState)) {
          n.flags |= 1024;
        }
        u = false;
      }
    }
    return Hu(e, n, o, u, f, l);
  }
  function Hu(e, n, o, u, l, f) {
    Vf(e, n);
    var p = (n.flags & 128) !== 0;
    if (!u && !p) {
      if (l) {
        Kc(n, o, false);
      }
      return Kt(e, n, f);
    }
    u = n.stateNode;
    fy.current = n;
    var y = p && typeof o.getDerivedStateFromError != "function" ? null : u.render();
    n.flags |= 1;
    if (e !== null && p) {
      n.child = hr(n, e.child, null, f);
      n.child = hr(n, null, y, f);
    } else {
      We(e, n, y, f);
    }
    n.memoizedState = u.state;
    if (l) {
      Kc(n, o, true);
    }
    return n.child;
  }
  function Xf(e) {
    var n = e.stateNode;
    if (n.pendingContext) {
      Yc(e, n.pendingContext, n.pendingContext !== n.context);
    } else if (n.context) {
      Yc(e, n.context, false);
    }
    Su(e, n.containerInfo);
  }
  function Yf(e, n, o, u, l) {
    pr();
    hu(l);
    n.flags |= 256;
    We(e, n, o, u);
    return n.child;
  }
  var Bu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
  };
  function Uu(e) {
    return {
      baseLanes: e,
      cachePool: null,
      transitions: null
    };
  }
  function qf(e, n, o) {
    var u = n.pendingProps;
    var l = xe.current;
    var f = false;
    var p = (n.flags & 128) !== 0;
    var y;
    if (!(y = p)) {
      y = e !== null && e.memoizedState === null ? false : (l & 2) !== 0;
    }
    if (y) {
      f = true;
      n.flags &= -129;
    } else if (e === null || e.memoizedState !== null) {
      l |= 1;
    }
    ge(xe, l & 1);
    if (e === null) {
      pu(n);
      e = n.memoizedState;
      if (e !== null && (e = e.dehydrated, e !== null)) {
        if ((n.mode & 1) === 0) {
          n.lanes = 1;
        } else if (e.data === "$!") {
          n.lanes = 8;
        } else {
          n.lanes = 1073741824;
        }
        return null;
      } else {
        p = u.children;
        e = u.fallback;
        if (f) {
          u = n.mode;
          f = n.child;
          p = {
            mode: "hidden",
            children: p
          };
          if ((u & 1) === 0 && f !== null) {
            f.childLanes = 0;
            f.pendingProps = p;
          } else {
            f = Ho(p, u, 0, null);
          }
          e = zn(e, u, o, null);
          f.return = n;
          e.return = n;
          f.sibling = e;
          n.child = f;
          n.child.memoizedState = Uu(o);
          n.memoizedState = Bu;
          return e;
        } else {
          return ju(n, p);
        }
      }
    }
    l = e.memoizedState;
    if (l !== null && (y = l.dehydrated, y !== null)) {
      return dy(e, n, p, u, y, l, o);
    }
    if (f) {
      f = u.fallback;
      p = n.mode;
      l = e.child;
      y = l.sibling;
      var _ = {
        mode: "hidden",
        children: u.children
      };
      if ((p & 1) === 0 && n.child !== l) {
        u = n.child;
        u.childLanes = 0;
        u.pendingProps = _;
        n.deletions = null;
      } else {
        u = Sn(l, _);
        u.subtreeFlags = l.subtreeFlags & 14680064;
      }
      if (y !== null) {
        f = Sn(y, f);
      } else {
        f = zn(f, p, o, null);
        f.flags |= 2;
      }
      f.return = n;
      u.return = n;
      u.sibling = f;
      n.child = u;
      u = f;
      f = n.child;
      p = e.child.memoizedState;
      p = p === null ? Uu(o) : {
        baseLanes: p.baseLanes | o,
        cachePool: null,
        transitions: p.transitions
      };
      f.memoizedState = p;
      f.childLanes = e.childLanes & ~o;
      n.memoizedState = Bu;
      return u;
    }
    f = e.child;
    e = f.sibling;
    u = Sn(f, {
      mode: "visible",
      children: u.children
    });
    if ((n.mode & 1) === 0) {
      u.lanes = o;
    }
    u.return = n;
    u.sibling = null;
    if (e !== null) {
      o = n.deletions;
      if (o === null) {
        n.deletions = [e];
        n.flags |= 16;
      } else {
        o.push(e);
      }
    }
    n.child = u;
    n.memoizedState = null;
    return u;
  }
  function ju(e, n) {
    n = Ho({
      mode: "visible",
      children: n
    }, e.mode, 0, null);
    n.return = e;
    return e.child = n;
  }
  function Io(e, n, o, u) {
    if (u !== null) {
      hu(u);
    }
    hr(n, e.child, null, o);
    e = ju(n, n.pendingProps.children);
    e.flags |= 2;
    n.memoizedState = null;
    return e;
  }
  function dy(e, n, o, u, l, f, p) {
    if (o) {
      if (n.flags & 256) {
        n.flags &= -257;
        u = Mu(Error(i(422)));
        return Io(e, n, p, u);
      } else if (n.memoizedState !== null) {
        n.child = e.child;
        n.flags |= 128;
        return null;
      } else {
        f = u.fallback;
        l = n.mode;
        u = Ho({
          mode: "visible",
          children: u.children
        }, l, 0, null);
        f = zn(f, l, p, null);
        f.flags |= 2;
        u.return = n;
        f.return = n;
        u.sibling = f;
        n.child = u;
        if ((n.mode & 1) !== 0) {
          hr(n, e.child, null, p);
        }
        n.child.memoizedState = Uu(p);
        n.memoizedState = Bu;
        return f;
      }
    }
    if ((n.mode & 1) === 0) {
      return Io(e, n, p, null);
    }
    if (l.data === "$!") {
      u = l.nextSibling && l.nextSibling.dataset;
      if (u) {
        var y = u.dgst;
      }
      u = y;
      f = Error(i(419));
      u = Mu(f, u, undefined);
      return Io(e, n, p, u);
    }
    y = (p & e.childLanes) !== 0;
    if (nt || y) {
      u = De;
      if (u !== null) {
        switch (p & -p) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        l = (l & (u.suspendedLanes | p)) !== 0 ? 0 : l;
        if (l !== 0 && l !== f.retryLane) {
          f.retryLane = l;
          Yt(e, l);
          Pt(u, e, l, -1);
        }
      }
      ra();
      u = Mu(Error(i(421)));
      return Io(e, n, p, u);
    }
    if (l.data === "$?") {
      n.flags |= 128;
      n.child = e.child;
      n = Iy.bind(null, e);
      l._reactRetry = n;
      return null;
    } else {
      e = f.treeContext;
      ft = cn(l.nextSibling);
      ct = n;
      Se = true;
      It = null;
      if (e !== null) {
        mt[gt++] = Wt;
        mt[gt++] = Xt;
        mt[gt++] = An;
        Wt = e.id;
        Xt = e.overflow;
        An = n;
      }
      n = ju(n, u.children);
      n.flags |= 4096;
      return n;
    }
  }
  function Kf(e, n, o) {
    e.lanes |= n;
    var u = e.alternate;
    if (u !== null) {
      u.lanes |= n;
    }
    vu(e.return, n, o);
  }
  function zu(e, n, o, u, l) {
    var f = e.memoizedState;
    if (f === null) {
      e.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: u,
        tail: o,
        tailMode: l
      };
    } else {
      f.isBackwards = n;
      f.rendering = null;
      f.renderingStartTime = 0;
      f.last = u;
      f.tail = o;
      f.tailMode = l;
    }
  }
  function Qf(e, n, o) {
    var u = n.pendingProps;
    var l = u.revealOrder;
    var f = u.tail;
    We(e, n, u.children, o);
    u = xe.current;
    if ((u & 2) !== 0) {
      u = u & 1 | 2;
      n.flags |= 128;
    } else {
      if (e !== null && (e.flags & 128) !== 0) {
        e: for (e = n.child; e !== null;) {
          if (e.tag === 13) {
            if (e.memoizedState !== null) {
              Kf(e, o, n);
            }
          } else if (e.tag === 19) {
            Kf(e, o, n);
          } else if (e.child !== null) {
            e.child.return = e;
            e = e.child;
            continue;
          }
          if (e === n) {
            break e;
          }
          while (e.sibling === null) {
            if (e.return === null || e.return === n) {
              break e;
            }
            e = e.return;
          }
          e.sibling.return = e.return;
          e = e.sibling;
        }
      }
      u &= 1;
    }
    ge(xe, u);
    if ((n.mode & 1) === 0) {
      n.memoizedState = null;
    } else {
      switch (l) {
        case "forwards":
          o = n.child;
          l = null;
          while (o !== null) {
            e = o.alternate;
            if (e !== null && vo(e) === null) {
              l = o;
            }
            o = o.sibling;
          }
          o = l;
          if (o === null) {
            l = n.child;
            n.child = null;
          } else {
            l = o.sibling;
            o.sibling = null;
          }
          zu(n, false, l, o, f);
          break;
        case "backwards":
          o = null;
          l = n.child;
          n.child = null;
          while (l !== null) {
            e = l.alternate;
            if (e !== null && vo(e) === null) {
              n.child = l;
              break;
            }
            e = l.sibling;
            l.sibling = o;
            o = l;
            l = e;
          }
          zu(n, true, o, null, f);
          break;
        case "together":
          zu(n, false, null, null, undefined);
          break;
        default:
          n.memoizedState = null;
      }
    }
    return n.child;
  }
  function No(e, n) {
    if ((n.mode & 1) === 0 && e !== null) {
      e.alternate = null;
      n.alternate = null;
      n.flags |= 2;
    }
  }
  function Kt(e, n, o) {
    if (e !== null) {
      n.dependencies = e.dependencies;
    }
    Hn |= n.lanes;
    if ((o & n.childLanes) === 0) {
      return null;
    }
    if (e !== null && n.child !== e.child) {
      throw Error(i(153));
    }
    if (n.child !== null) {
      e = n.child;
      o = Sn(e, e.pendingProps);
      n.child = o;
      o.return = n;
      while (e.sibling !== null) {
        e = e.sibling;
        o = o.sibling = Sn(e, e.pendingProps);
        o.return = n;
      }
      o.sibling = null;
    }
    return n.child;
  }
  function py(e, n, o) {
    switch (n.tag) {
      case 3:
        Xf(n);
        pr();
        break;
      case 5:
        ff(n);
        break;
      case 1:
        if (tt(n.type)) {
          uo(n);
        }
        break;
      case 4:
        Su(n, n.stateNode.containerInfo);
        break;
      case 10:
        var u = n.type._context;
        var l = n.memoizedProps.value;
        ge(ho, u._currentValue);
        u._currentValue = l;
        break;
      case 13:
        u = n.memoizedState;
        if (u !== null) {
          if (u.dehydrated !== null) {
            ge(xe, xe.current & 1);
            n.flags |= 128;
            return null;
          } else if ((o & n.child.childLanes) !== 0) {
            return qf(e, n, o);
          } else {
            ge(xe, xe.current & 1);
            e = Kt(e, n, o);
            if (e !== null) {
              return e.sibling;
            } else {
              return null;
            }
          }
        }
        ge(xe, xe.current & 1);
        break;
      case 19:
        u = (o & n.childLanes) !== 0;
        if ((e.flags & 128) !== 0) {
          if (u) {
            return Qf(e, n, o);
          }
          n.flags |= 128;
        }
        l = n.memoizedState;
        if (l !== null) {
          l.rendering = null;
          l.tail = null;
          l.lastEffect = null;
        }
        ge(xe, xe.current);
        if (u) {
          break;
        }
        return null;
      case 22:
      case 23:
        n.lanes = 0;
        return Gf(e, n, o);
    }
    return Kt(e, n, o);
  }
  var Zf;
  var $u;
  var Jf;
  var ed;
  Zf = function (e, n) {
    for (var o = n.child; o !== null;) {
      if (o.tag === 5 || o.tag === 6) {
        e.appendChild(o.stateNode);
      } else if (o.tag !== 4 && o.child !== null) {
        o.child.return = o;
        o = o.child;
        continue;
      }
      if (o === n) {
        break;
      }
      while (o.sibling === null) {
        if (o.return === null || o.return === n) {
          return;
        }
        o = o.return;
      }
      o.sibling.return = o.return;
      o = o.sibling;
    }
  };
  $u = function () {};
  Jf = function (e, n, o, u) {
    var l = e.memoizedProps;
    if (l !== u) {
      e = n.stateNode;
      Dn(Mt.current);
      var f = null;
      switch (o) {
        case "input":
          l = vs(e, l);
          u = vs(e, u);
          f = [];
          break;
        case "select":
          l = U({}, l, {
            value: undefined
          });
          u = U({}, u, {
            value: undefined
          });
          f = [];
          break;
        case "textarea":
          l = Ss(e, l);
          u = Ss(e, u);
          f = [];
          break;
        default:
          if (typeof l.onClick != "function" && typeof u.onClick == "function") {
            e.onclick = io;
          }
      }
      xs(o, u);
      var p;
      o = null;
      for (N in l) {
        if (!u.hasOwnProperty(N) && l.hasOwnProperty(N) && l[N] != null) {
          if (N === "style") {
            var y = l[N];
            for (p in y) {
              if (y.hasOwnProperty(p)) {
                o ||= {};
                o[p] = "";
              }
            }
          } else if (N !== "dangerouslySetInnerHTML" && N !== "children" && N !== "suppressContentEditableWarning" && N !== "suppressHydrationWarning" && N !== "autoFocus") {
            if (a.hasOwnProperty(N)) {
              f ||= [];
            } else {
              (f = f || []).push(N, null);
            }
          }
        }
      }
      for (N in u) {
        var _ = u[N];
        y = l != null ? l[N] : undefined;
        if (u.hasOwnProperty(N) && _ !== y && (_ != null || y != null)) {
          if (N === "style") {
            if (y) {
              for (p in y) {
                if (!!y.hasOwnProperty(p) && (!_ || !_.hasOwnProperty(p))) {
                  o ||= {};
                  o[p] = "";
                }
              }
              for (p in _) {
                if (_.hasOwnProperty(p) && y[p] !== _[p]) {
                  o ||= {};
                  o[p] = _[p];
                }
              }
            } else {
              if (!o) {
                f ||= [];
                f.push(N, o);
              }
              o = _;
            }
          } else if (N === "dangerouslySetInnerHTML") {
            _ = _ ? _.__html : undefined;
            y = y ? y.__html : undefined;
            if (_ != null && y !== _) {
              (f = f || []).push(N, _);
            }
          } else if (N === "children") {
            if (typeof _ == "string" || typeof _ == "number") {
              (f = f || []).push(N, "" + _);
            }
          } else if (N !== "suppressContentEditableWarning" && N !== "suppressHydrationWarning") {
            if (a.hasOwnProperty(N)) {
              if (_ != null && N === "onScroll") {
                ye("scroll", e);
              }
              if (!f && y !== _) {
                f = [];
              }
            } else {
              (f = f || []).push(N, _);
            }
          }
        }
      }
      if (o) {
        (f = f || []).push("style", o);
      }
      var N = f;
      if (n.updateQueue = N) {
        n.flags |= 4;
      }
    }
  };
  ed = function (e, n, o, u) {
    if (o !== u) {
      n.flags |= 4;
    }
  };
  function hi(e, n) {
    if (!Se) {
      switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          var o = null;
          for (; n !== null;) {
            if (n.alternate !== null) {
              o = n;
            }
            n = n.sibling;
          }
          if (o === null) {
            e.tail = null;
          } else {
            o.sibling = null;
          }
          break;
        case "collapsed":
          o = e.tail;
          var u = null;
          for (; o !== null;) {
            if (o.alternate !== null) {
              u = o;
            }
            o = o.sibling;
          }
          if (u === null) {
            if (n || e.tail === null) {
              e.tail = null;
            } else {
              e.tail.sibling = null;
            }
          } else {
            u.sibling = null;
          }
      }
    }
  }
  function $e(e) {
    var n = e.alternate !== null && e.alternate.child === e.child;
    var o = 0;
    var u = 0;
    if (n) {
      for (var l = e.child; l !== null;) {
        o |= l.lanes | l.childLanes;
        u |= l.subtreeFlags & 14680064;
        u |= l.flags & 14680064;
        l.return = e;
        l = l.sibling;
      }
    } else {
      for (l = e.child; l !== null;) {
        o |= l.lanes | l.childLanes;
        u |= l.subtreeFlags;
        u |= l.flags;
        l.return = e;
        l = l.sibling;
      }
    }
    e.subtreeFlags |= u;
    e.childLanes = o;
    return n;
  }
  function hy(e, n, o) {
    var u = n.pendingProps;
    fu(n);
    switch (n.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        $e(n);
        return null;
      case 1:
        if (tt(n.type)) {
          so();
        }
        $e(n);
        return null;
      case 3:
        u = n.stateNode;
        yr();
        ve(et);
        ve(je);
        Tu();
        if (u.pendingContext) {
          u.context = u.pendingContext;
          u.pendingContext = null;
        }
        if (e === null || e.child === null) {
          if (fo(n)) {
            n.flags |= 4;
          } else if (e !== null && (!e.memoizedState.isDehydrated || (n.flags & 256) !== 0)) {
            n.flags |= 1024;
            if (It !== null) {
              ea(It);
              It = null;
            }
          }
        }
        $u(e, n);
        $e(n);
        return null;
      case 5:
        wu(n);
        var l = Dn(li.current);
        o = n.type;
        if (e !== null && n.stateNode != null) {
          Jf(e, n, o, u, l);
          if (e.ref !== n.ref) {
            n.flags |= 512;
            n.flags |= 2097152;
          }
        } else {
          if (!u) {
            if (n.stateNode === null) {
              throw Error(i(166));
            }
            $e(n);
            return null;
          }
          e = Dn(Mt.current);
          if (fo(n)) {
            u = n.stateNode;
            o = n.type;
            var f = n.memoizedProps;
            u[bt] = n;
            u[ii] = f;
            e = (n.mode & 1) !== 0;
            switch (o) {
              case "dialog":
                ye("cancel", u);
                ye("close", u);
                break;
              case "iframe":
              case "object":
              case "embed":
                ye("load", u);
                break;
              case "video":
              case "audio":
                for (l = 0; l < ti.length; l++) {
                  ye(ti[l], u);
                }
                break;
              case "source":
                ye("error", u);
                break;
              case "img":
              case "image":
              case "link":
                ye("error", u);
                ye("load", u);
                break;
              case "details":
                ye("toggle", u);
                break;
              case "input":
                Al(u, f);
                ye("invalid", u);
                break;
              case "select":
                u._wrapperState = {
                  wasMultiple: !!f.multiple
                };
                ye("invalid", u);
                break;
              case "textarea":
                Dl(u, f);
                ye("invalid", u);
            }
            xs(o, f);
            l = null;
            for (var p in f) {
              if (f.hasOwnProperty(p)) {
                var y = f[p];
                if (p === "children") {
                  if (typeof y == "string") {
                    if (u.textContent !== y) {
                      if (f.suppressHydrationWarning !== true) {
                        ro(u.textContent, y, e);
                      }
                      l = ["children", y];
                    }
                  } else if (typeof y == "number" && u.textContent !== "" + y) {
                    if (f.suppressHydrationWarning !== true) {
                      ro(u.textContent, y, e);
                    }
                    l = ["children", "" + y];
                  }
                } else if (a.hasOwnProperty(p) && y != null && p === "onScroll") {
                  ye("scroll", u);
                }
              }
            }
            switch (o) {
              case "input":
                bi(u);
                Ml(u, f, true);
                break;
              case "textarea":
                bi(u);
                Hl(u);
                break;
              case "select":
              case "option":
                break;
              default:
                if (typeof f.onClick == "function") {
                  u.onclick = io;
                }
            }
            u = l;
            n.updateQueue = u;
            if (u !== null) {
              n.flags |= 4;
            }
          } else {
            p = l.nodeType === 9 ? l : l.ownerDocument;
            if (e === "http://www.w3.org/1999/xhtml") {
              e = Bl(o);
            }
            if (e === "http://www.w3.org/1999/xhtml") {
              if (o === "script") {
                e = p.createElement("div");
                e.innerHTML = "<script></script>";
                e = e.removeChild(e.firstChild);
              } else if (typeof u.is == "string") {
                e = p.createElement(o, {
                  is: u.is
                });
              } else {
                e = p.createElement(o);
                if (o === "select") {
                  p = e;
                  if (u.multiple) {
                    p.multiple = true;
                  } else if (u.size) {
                    p.size = u.size;
                  }
                }
              }
            } else {
              e = p.createElementNS(e, o);
            }
            e[bt] = n;
            e[ii] = u;
            Zf(e, n, false, false);
            n.stateNode = e;
            e: {
              p = Ts(o, u);
              switch (o) {
                case "dialog":
                  ye("cancel", e);
                  ye("close", e);
                  l = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ye("load", e);
                  l = u;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < ti.length; l++) {
                    ye(ti[l], e);
                  }
                  l = u;
                  break;
                case "source":
                  ye("error", e);
                  l = u;
                  break;
                case "img":
                case "image":
                case "link":
                  ye("error", e);
                  ye("load", e);
                  l = u;
                  break;
                case "details":
                  ye("toggle", e);
                  l = u;
                  break;
                case "input":
                  Al(e, u);
                  l = vs(e, u);
                  ye("invalid", e);
                  break;
                case "option":
                  l = u;
                  break;
                case "select":
                  e._wrapperState = {
                    wasMultiple: !!u.multiple
                  };
                  l = U({}, u, {
                    value: undefined
                  });
                  ye("invalid", e);
                  break;
                case "textarea":
                  Dl(e, u);
                  l = Ss(e, u);
                  ye("invalid", e);
                  break;
                default:
                  l = u;
              }
              xs(o, l);
              y = l;
              for (f in y) {
                if (y.hasOwnProperty(f)) {
                  var _ = y[f];
                  if (f === "style") {
                    zl(e, _);
                  } else if (f === "dangerouslySetInnerHTML") {
                    _ = _ ? _.__html : undefined;
                    if (_ != null) {
                      Ul(e, _);
                    }
                  } else if (f === "children") {
                    if (typeof _ == "string") {
                      if (o !== "textarea" || _ !== "") {
                        Dr(e, _);
                      }
                    } else if (typeof _ == "number") {
                      Dr(e, "" + _);
                    }
                  } else if (f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus") {
                    if (a.hasOwnProperty(f)) {
                      if (_ != null && f === "onScroll") {
                        ye("scroll", e);
                      }
                    } else if (_ != null) {
                      q(e, f, _, p);
                    }
                  }
                }
              }
              switch (o) {
                case "input":
                  bi(e);
                  Ml(e, u, false);
                  break;
                case "textarea":
                  bi(e);
                  Hl(e);
                  break;
                case "option":
                  if (u.value != null) {
                    e.setAttribute("value", "" + de(u.value));
                  }
                  break;
                case "select":
                  e.multiple = !!u.multiple;
                  f = u.value;
                  if (f != null) {
                    Zn(e, !!u.multiple, f, false);
                  } else if (u.defaultValue != null) {
                    Zn(e, !!u.multiple, u.defaultValue, true);
                  }
                  break;
                default:
                  if (typeof l.onClick == "function") {
                    e.onclick = io;
                  }
              }
              switch (o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u = !!u.autoFocus;
                  break e;
                case "img":
                  u = true;
                  break e;
                default:
                  u = false;
              }
            }
            if (u) {
              n.flags |= 4;
            }
          }
          if (n.ref !== null) {
            n.flags |= 512;
            n.flags |= 2097152;
          }
        }
        $e(n);
        return null;
      case 6:
        if (e && n.stateNode != null) {
          ed(e, n, e.memoizedProps, u);
        } else {
          if (typeof u != "string" && n.stateNode === null) {
            throw Error(i(166));
          }
          o = Dn(li.current);
          Dn(Mt.current);
          if (fo(n)) {
            u = n.stateNode;
            o = n.memoizedProps;
            u[bt] = n;
            if ((f = u.nodeValue !== o) && (e = ct, e !== null)) {
              switch (e.tag) {
                case 3:
                  ro(u.nodeValue, o, (e.mode & 1) !== 0);
                  break;
                case 5:
                  if (e.memoizedProps.suppressHydrationWarning !== true) {
                    ro(u.nodeValue, o, (e.mode & 1) !== 0);
                  }
              }
            }
            if (f) {
              n.flags |= 4;
            }
          } else {
            u = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(u);
            u[bt] = n;
            n.stateNode = u;
          }
        }
        $e(n);
        return null;
      case 13:
        ve(xe);
        u = n.memoizedState;
        if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Se && ft !== null && (n.mode & 1) !== 0 && (n.flags & 128) === 0) {
            nf();
            pr();
            n.flags |= 98560;
            f = false;
          } else {
            f = fo(n);
            if (u !== null && u.dehydrated !== null) {
              if (e === null) {
                if (!f) {
                  throw Error(i(318));
                }
                f = n.memoizedState;
                f = f !== null ? f.dehydrated : null;
                if (!f) {
                  throw Error(i(317));
                }
                f[bt] = n;
              } else {
                pr();
                if ((n.flags & 128) === 0) {
                  n.memoizedState = null;
                }
                n.flags |= 4;
              }
              $e(n);
              f = false;
            } else {
              if (It !== null) {
                ea(It);
                It = null;
              }
              f = true;
            }
          }
          if (!f) {
            if (n.flags & 65536) {
              return n;
            } else {
              return null;
            }
          }
        }
        if ((n.flags & 128) !== 0) {
          n.lanes = o;
          return n;
        } else {
          u = u !== null;
          if (u !== (e !== null && e.memoizedState !== null) && u) {
            n.child.flags |= 8192;
            if ((n.mode & 1) !== 0) {
              if (e === null || (xe.current & 1) !== 0) {
                if (be === 0) {
                  be = 3;
                }
              } else {
                ra();
              }
            }
          }
          if (n.updateQueue !== null) {
            n.flags |= 4;
          }
          $e(n);
          return null;
        }
      case 4:
        yr();
        $u(e, n);
        if (e === null) {
          ni(n.stateNode.containerInfo);
        }
        $e(n);
        return null;
      case 10:
        yu(n.type._context);
        $e(n);
        return null;
      case 17:
        if (tt(n.type)) {
          so();
        }
        $e(n);
        return null;
      case 19:
        ve(xe);
        f = n.memoizedState;
        if (f === null) {
          $e(n);
          return null;
        }
        u = (n.flags & 128) !== 0;
        p = f.rendering;
        if (p === null) {
          if (u) {
            hi(f, false);
          } else {
            if (be !== 0 || e !== null && (e.flags & 128) !== 0) {
              for (e = n.child; e !== null;) {
                p = vo(e);
                if (p !== null) {
                  n.flags |= 128;
                  hi(f, false);
                  u = p.updateQueue;
                  if (u !== null) {
                    n.updateQueue = u;
                    n.flags |= 4;
                  }
                  n.subtreeFlags = 0;
                  u = o;
                  o = n.child;
                  while (o !== null) {
                    f = o;
                    e = u;
                    f.flags &= 14680066;
                    p = f.alternate;
                    if (p === null) {
                      f.childLanes = 0;
                      f.lanes = e;
                      f.child = null;
                      f.subtreeFlags = 0;
                      f.memoizedProps = null;
                      f.memoizedState = null;
                      f.updateQueue = null;
                      f.dependencies = null;
                      f.stateNode = null;
                    } else {
                      f.childLanes = p.childLanes;
                      f.lanes = p.lanes;
                      f.child = p.child;
                      f.subtreeFlags = 0;
                      f.deletions = null;
                      f.memoizedProps = p.memoizedProps;
                      f.memoizedState = p.memoizedState;
                      f.updateQueue = p.updateQueue;
                      f.type = p.type;
                      e = p.dependencies;
                      f.dependencies = e === null ? null : {
                        lanes: e.lanes,
                        firstContext: e.firstContext
                      };
                    }
                    o = o.sibling;
                  }
                  ge(xe, xe.current & 1 | 2);
                  return n.child;
                }
                e = e.sibling;
              }
            }
            if (f.tail !== null && ke() > Sr) {
              n.flags |= 128;
              u = true;
              hi(f, false);
              n.lanes = 4194304;
            }
          }
        } else {
          if (!u) {
            e = vo(p);
            if (e !== null) {
              n.flags |= 128;
              u = true;
              o = e.updateQueue;
              if (o !== null) {
                n.updateQueue = o;
                n.flags |= 4;
              }
              hi(f, true);
              if (f.tail === null && f.tailMode === "hidden" && !p.alternate && !Se) {
                $e(n);
                return null;
              }
            } else if (ke() * 2 - f.renderingStartTime > Sr && o !== 1073741824) {
              n.flags |= 128;
              u = true;
              hi(f, false);
              n.lanes = 4194304;
            }
          }
          if (f.isBackwards) {
            p.sibling = n.child;
            n.child = p;
          } else {
            o = f.last;
            if (o !== null) {
              o.sibling = p;
            } else {
              n.child = p;
            }
            f.last = p;
          }
        }
        if (f.tail !== null) {
          n = f.tail;
          f.rendering = n;
          f.tail = n.sibling;
          f.renderingStartTime = ke();
          n.sibling = null;
          o = xe.current;
          ge(xe, u ? o & 1 | 2 : o & 1);
          return n;
        } else {
          $e(n);
          return null;
        }
      case 22:
      case 23:
        na();
        u = n.memoizedState !== null;
        if (e !== null && e.memoizedState !== null !== u) {
          n.flags |= 8192;
        }
        if (u && (n.mode & 1) !== 0) {
          if ((dt & 1073741824) !== 0) {
            $e(n);
            if (n.subtreeFlags & 6) {
              n.flags |= 8192;
            }
          }
        } else {
          $e(n);
        }
        return null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(i(156, n.tag));
  }
  function my(e, n) {
    fu(n);
    switch (n.tag) {
      case 1:
        if (tt(n.type)) {
          so();
        }
        e = n.flags;
        if (e & 65536) {
          n.flags = e & -65537 | 128;
          return n;
        } else {
          return null;
        }
      case 3:
        yr();
        ve(et);
        ve(je);
        Tu();
        e = n.flags;
        if ((e & 65536) !== 0 && (e & 128) === 0) {
          n.flags = e & -65537 | 128;
          return n;
        } else {
          return null;
        }
      case 5:
        wu(n);
        return null;
      case 13:
        ve(xe);
        e = n.memoizedState;
        if (e !== null && e.dehydrated !== null) {
          if (n.alternate === null) {
            throw Error(i(340));
          }
          pr();
        }
        e = n.flags;
        if (e & 65536) {
          n.flags = e & -65537 | 128;
          return n;
        } else {
          return null;
        }
      case 19:
        ve(xe);
        return null;
      case 4:
        yr();
        return null;
      case 10:
        yu(n.type._context);
        return null;
      case 22:
      case 23:
        na();
        return null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ko = false;
  var Ge = false;
  var gy = typeof WeakSet == "function" ? WeakSet : Set;
  var B = null;
  function _r(e, n) {
    var o = e.ref;
    if (o !== null) {
      if (typeof o == "function") {
        try {
          o(null);
        } catch (u) {
          Ne(e, n, u);
        }
      } else {
        o.current = null;
      }
    }
  }
  function Gu(e, n, o) {
    try {
      o();
    } catch (u) {
      Ne(e, n, u);
    }
  }
  var td = false;
  function yy(e, n) {
    nu = Wi;
    e = Oc();
    if (Ys(e)) {
      if ("selectionStart" in e) {
        var o = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      } else {
        e: {
          o = (o = e.ownerDocument) && o.defaultView || window;
          var u = o.getSelection && o.getSelection();
          if (u && u.rangeCount !== 0) {
            o = u.anchorNode;
            var l = u.anchorOffset;
            var f = u.focusNode;
            u = u.focusOffset;
            try {
              o.nodeType;
              f.nodeType;
            } catch {
              o = null;
              break e;
            }
            var p = 0;
            var y = -1;
            var _ = -1;
            var N = 0;
            var R = 0;
            var L = e;
            var C = null;
            t: while (true) {
              for (var F; L !== o || l !== 0 && L.nodeType !== 3 || (y = p + l), L !== f || u !== 0 && L.nodeType !== 3 || (_ = p + u), L.nodeType === 3 && (p += L.nodeValue.length), (F = L.firstChild) !== null;) {
                C = L;
                L = F;
              }
              while (true) {
                if (L === e) {
                  break t;
                }
                if (C === o && ++N === l) {
                  y = p;
                }
                if (C === f && ++R === u) {
                  _ = p;
                }
                if ((F = L.nextSibling) !== null) {
                  break;
                }
                L = C;
                C = L.parentNode;
              }
              L = F;
            }
            o = y === -1 || _ === -1 ? null : {
              start: y,
              end: _
            };
          } else {
            o = null;
          }
        }
      }
      o = o || {
        start: 0,
        end: 0
      };
    } else {
      o = null;
    }
    ru = {
      focusedElem: e,
      selectionRange: o
    };
    Wi = false;
    B = n;
    while (B !== null) {
      n = B;
      e = n.child;
      if ((n.subtreeFlags & 1028) !== 0 && e !== null) {
        e.return = n;
        B = e;
      } else {
        while (B !== null) {
          n = B;
          try {
            var j = n.alternate;
            if ((n.flags & 1024) !== 0) {
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (j !== null) {
                    var z = j.memoizedProps;
                    var Ce = j.memoizedState;
                    var x = n.stateNode;
                    var E = x.getSnapshotBeforeUpdate(n.elementType === n.type ? z : Nt(n.type, z), Ce);
                    x.__reactInternalSnapshotBeforeUpdate = E;
                  }
                  break;
                case 3:
                  var T = n.stateNode.containerInfo;
                  if (T.nodeType === 1) {
                    T.textContent = "";
                  } else if (T.nodeType === 9 && T.documentElement) {
                    T.removeChild(T.documentElement);
                  }
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(i(163));
              }
            }
          } catch (A) {
            Ne(n, n.return, A);
          }
          e = n.sibling;
          if (e !== null) {
            e.return = n.return;
            B = e;
            break;
          }
          B = n.return;
        }
      }
    }
    j = td;
    td = false;
    return j;
  }
  function mi(e, n, o) {
    var u = n.updateQueue;
    u = u !== null ? u.lastEffect : null;
    if (u !== null) {
      var l = u = u.next;
      do {
        if ((l.tag & e) === e) {
          var f = l.destroy;
          l.destroy = undefined;
          if (f !== undefined) {
            Gu(n, o, f);
          }
        }
        l = l.next;
      } while (l !== u);
    }
  }
  function Co(e, n) {
    n = n.updateQueue;
    n = n !== null ? n.lastEffect : null;
    if (n !== null) {
      var o = n = n.next;
      do {
        if ((o.tag & e) === e) {
          var u = o.create;
          o.destroy = u();
        }
        o = o.next;
      } while (o !== n);
    }
  }
  function Vu(e) {
    var n = e.ref;
    if (n !== null) {
      var o = e.stateNode;
      switch (e.tag) {
        case 5:
          e = o;
          break;
        default:
          e = o;
      }
      if (typeof n == "function") {
        n(e);
      } else {
        n.current = e;
      }
    }
  }
  function nd(e) {
    var n = e.alternate;
    if (n !== null) {
      e.alternate = null;
      nd(n);
    }
    e.child = null;
    e.deletions = null;
    e.sibling = null;
    if (e.tag === 5) {
      n = e.stateNode;
      if (n !== null) {
        delete n[bt];
        delete n[ii];
        delete n[uu];
        delete n[Jg];
        delete n[ey];
      }
    }
    e.stateNode = null;
    e.return = null;
    e.dependencies = null;
    e.memoizedProps = null;
    e.memoizedState = null;
    e.pendingProps = null;
    e.stateNode = null;
    e.updateQueue = null;
  }
  function rd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function id(e) {
    e: while (true) {
      while (e.sibling === null) {
        if (e.return === null || rd(e.return)) {
          return null;
        }
        e = e.return;
      }
      e.sibling.return = e.return;
      e = e.sibling;
      while (e.tag !== 5 && e.tag !== 6 && e.tag !== 18) {
        if (e.flags & 2 || e.child === null || e.tag === 4) {
          continue e;
        }
        e.child.return = e;
        e = e.child;
      }
      if (!(e.flags & 2)) {
        return e.stateNode;
      }
    }
  }
  function Wu(e, n, o) {
    var u = e.tag;
    if (u === 5 || u === 6) {
      e = e.stateNode;
      if (n) {
        if (o.nodeType === 8) {
          o.parentNode.insertBefore(e, n);
        } else {
          o.insertBefore(e, n);
        }
      } else {
        if (o.nodeType === 8) {
          n = o.parentNode;
          n.insertBefore(e, o);
        } else {
          n = o;
          n.appendChild(e);
        }
        o = o._reactRootContainer;
        if (o == null && n.onclick === null) {
          n.onclick = io;
        }
      }
    } else if (u !== 4 && (e = e.child, e !== null)) {
      Wu(e, n, o);
      e = e.sibling;
      while (e !== null) {
        Wu(e, n, o);
        e = e.sibling;
      }
    }
  }
  function Xu(e, n, o) {
    var u = e.tag;
    if (u === 5 || u === 6) {
      e = e.stateNode;
      if (n) {
        o.insertBefore(e, n);
      } else {
        o.appendChild(e);
      }
    } else if (u !== 4 && (e = e.child, e !== null)) {
      Xu(e, n, o);
      e = e.sibling;
      while (e !== null) {
        Xu(e, n, o);
        e = e.sibling;
      }
    }
  }
  var Be = null;
  var kt = false;
  function gn(e, n, o) {
    for (o = o.child; o !== null;) {
      od(e, n, o);
      o = o.sibling;
    }
  }
  function od(e, n, o) {
    if (At && typeof At.onCommitFiberUnmount == "function") {
      try {
        At.onCommitFiberUnmount(Ui, o);
      } catch {}
    }
    switch (o.tag) {
      case 5:
        if (!Ge) {
          _r(o, n);
        }
      case 6:
        var u = Be;
        var l = kt;
        Be = null;
        gn(e, n, o);
        Be = u;
        kt = l;
        if (Be !== null) {
          if (kt) {
            e = Be;
            o = o.stateNode;
            if (e.nodeType === 8) {
              e.parentNode.removeChild(o);
            } else {
              e.removeChild(o);
            }
          } else {
            Be.removeChild(o.stateNode);
          }
        }
        break;
      case 18:
        if (Be !== null) {
          if (kt) {
            e = Be;
            o = o.stateNode;
            if (e.nodeType === 8) {
              su(e.parentNode, o);
            } else if (e.nodeType === 1) {
              su(e, o);
            }
            Xr(e);
          } else {
            su(Be, o.stateNode);
          }
        }
        break;
      case 4:
        u = Be;
        l = kt;
        Be = o.stateNode.containerInfo;
        kt = true;
        gn(e, n, o);
        Be = u;
        kt = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ge && (u = o.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          l = u = u.next;
          do {
            var f = l;
            var p = f.destroy;
            f = f.tag;
            if (p !== undefined && ((f & 2) !== 0 || (f & 4) !== 0)) {
              Gu(o, n, p);
            }
            l = l.next;
          } while (l !== u);
        }
        gn(e, n, o);
        break;
      case 1:
        if (!Ge && (_r(o, n), u = o.stateNode, typeof u.componentWillUnmount == "function")) {
          try {
            u.props = o.memoizedProps;
            u.state = o.memoizedState;
            u.componentWillUnmount();
          } catch (y) {
            Ne(o, n, y);
          }
        }
        gn(e, n, o);
        break;
      case 21:
        gn(e, n, o);
        break;
      case 22:
        if (o.mode & 1) {
          Ge = (u = Ge) || o.memoizedState !== null;
          gn(e, n, o);
          Ge = u;
        } else {
          gn(e, n, o);
        }
        break;
      default:
        gn(e, n, o);
    }
  }
  function sd(e) {
    var n = e.updateQueue;
    if (n !== null) {
      e.updateQueue = null;
      var o = e.stateNode;
      if (o === null) {
        o = e.stateNode = new gy();
      }
      n.forEach(function (u) {
        var l = Ny.bind(null, e, u);
        if (!o.has(u)) {
          o.add(u);
          u.then(l, l);
        }
      });
    }
  }
  function Ct(e, n) {
    var o = n.deletions;
    if (o !== null) {
      for (var u = 0; u < o.length; u++) {
        var l = o[u];
        try {
          var f = e;
          var p = n;
          var y = p;
          e: while (y !== null) {
            switch (y.tag) {
              case 5:
                Be = y.stateNode;
                kt = false;
                break e;
              case 3:
                Be = y.stateNode.containerInfo;
                kt = true;
                break e;
              case 4:
                Be = y.stateNode.containerInfo;
                kt = true;
                break e;
            }
            y = y.return;
          }
          if (Be === null) {
            throw Error(i(160));
          }
          od(f, p, l);
          Be = null;
          kt = false;
          var _ = l.alternate;
          if (_ !== null) {
            _.return = null;
          }
          l.return = null;
        } catch (N) {
          Ne(l, n, N);
        }
      }
    }
    if (n.subtreeFlags & 12854) {
      for (n = n.child; n !== null;) {
        ud(n, e);
        n = n.sibling;
      }
    }
  }
  function ud(e, n) {
    var o = e.alternate;
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ct(n, e);
        Ft(e);
        if (u & 4) {
          try {
            mi(3, e, e.return);
            Co(3, e);
          } catch (z) {
            Ne(e, e.return, z);
          }
          try {
            mi(5, e, e.return);
          } catch (z) {
            Ne(e, e.return, z);
          }
        }
        break;
      case 1:
        Ct(n, e);
        Ft(e);
        if (u & 512 && o !== null) {
          _r(o, o.return);
        }
        break;
      case 5:
        Ct(n, e);
        Ft(e);
        if (u & 512 && o !== null) {
          _r(o, o.return);
        }
        if (e.flags & 32) {
          var l = e.stateNode;
          try {
            Dr(l, "");
          } catch (z) {
            Ne(e, e.return, z);
          }
        }
        if (u & 4 && (l = e.stateNode, l != null)) {
          var f = e.memoizedProps;
          var p = o !== null ? o.memoizedProps : f;
          var y = e.type;
          var _ = e.updateQueue;
          e.updateQueue = null;
          if (_ !== null) {
            try {
              if (y === "input" && f.type === "radio" && f.name != null) {
                bl(l, f);
              }
              Ts(y, p);
              var N = Ts(y, f);
              for (p = 0; p < _.length; p += 2) {
                var R = _[p];
                var L = _[p + 1];
                if (R === "style") {
                  zl(l, L);
                } else if (R === "dangerouslySetInnerHTML") {
                  Ul(l, L);
                } else if (R === "children") {
                  Dr(l, L);
                } else {
                  q(l, R, L, N);
                }
              }
              switch (y) {
                case "input":
                  _s(l, f);
                  break;
                case "textarea":
                  Fl(l, f);
                  break;
                case "select":
                  var C = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!f.multiple;
                  var F = f.value;
                  if (F != null) {
                    Zn(l, !!f.multiple, F, false);
                  } else if (C !== !!f.multiple) {
                    if (f.defaultValue != null) {
                      Zn(l, !!f.multiple, f.defaultValue, true);
                    } else {
                      Zn(l, !!f.multiple, f.multiple ? [] : "", false);
                    }
                  }
              }
              l[ii] = f;
            } catch (z) {
              Ne(e, e.return, z);
            }
          }
        }
        break;
      case 6:
        Ct(n, e);
        Ft(e);
        if (u & 4) {
          if (e.stateNode === null) {
            throw Error(i(162));
          }
          l = e.stateNode;
          f = e.memoizedProps;
          try {
            l.nodeValue = f;
          } catch (z) {
            Ne(e, e.return, z);
          }
        }
        break;
      case 3:
        Ct(n, e);
        Ft(e);
        if (u & 4 && o !== null && o.memoizedState.isDehydrated) {
          try {
            Xr(n.containerInfo);
          } catch (z) {
            Ne(e, e.return, z);
          }
        }
        break;
      case 4:
        Ct(n, e);
        Ft(e);
        break;
      case 13:
        Ct(n, e);
        Ft(e);
        l = e.child;
        if (l.flags & 8192) {
          f = l.memoizedState !== null;
          l.stateNode.isHidden = f;
          if (!!f && (l.alternate === null || l.alternate.memoizedState === null)) {
            Ku = ke();
          }
        }
        if (u & 4) {
          sd(e);
        }
        break;
      case 22:
        R = o !== null && o.memoizedState !== null;
        if (e.mode & 1) {
          Ge = (N = Ge) || R;
          Ct(n, e);
          Ge = N;
        } else {
          Ct(n, e);
        }
        Ft(e);
        if (u & 8192) {
          N = e.memoizedState !== null;
          if ((e.stateNode.isHidden = N) && !R && (e.mode & 1) !== 0) {
            B = e;
            R = e.child;
            while (R !== null) {
              for (L = B = R; B !== null;) {
                C = B;
                F = C.child;
                switch (C.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    mi(4, C, C.return);
                    break;
                  case 1:
                    _r(C, C.return);
                    var j = C.stateNode;
                    if (typeof j.componentWillUnmount == "function") {
                      u = C;
                      o = C.return;
                      try {
                        n = u;
                        j.props = n.memoizedProps;
                        j.state = n.memoizedState;
                        j.componentWillUnmount();
                      } catch (z) {
                        Ne(u, o, z);
                      }
                    }
                    break;
                  case 5:
                    _r(C, C.return);
                    break;
                  case 22:
                    if (C.memoizedState !== null) {
                      cd(L);
                      continue;
                    }
                }
                if (F !== null) {
                  F.return = C;
                  B = F;
                } else {
                  cd(L);
                }
              }
              R = R.sibling;
            }
          }
          R = null;
          L = e;
          e: while (true) {
            if (L.tag === 5) {
              if (R === null) {
                R = L;
                try {
                  l = L.stateNode;
                  if (N) {
                    f = l.style;
                    if (typeof f.setProperty == "function") {
                      f.setProperty("display", "none", "important");
                    } else {
                      f.display = "none";
                    }
                  } else {
                    y = L.stateNode;
                    _ = L.memoizedProps.style;
                    p = _ != null && _.hasOwnProperty("display") ? _.display : null;
                    y.style.display = jl("display", p);
                  }
                } catch (z) {
                  Ne(e, e.return, z);
                }
              }
            } else if (L.tag === 6) {
              if (R === null) {
                try {
                  L.stateNode.nodeValue = N ? "" : L.memoizedProps;
                } catch (z) {
                  Ne(e, e.return, z);
                }
              }
            } else if ((L.tag !== 22 && L.tag !== 23 || L.memoizedState === null || L === e) && L.child !== null) {
              L.child.return = L;
              L = L.child;
              continue;
            }
            if (L === e) {
              break e;
            }
            while (L.sibling === null) {
              if (L.return === null || L.return === e) {
                break e;
              }
              if (R === L) {
                R = null;
              }
              L = L.return;
            }
            if (R === L) {
              R = null;
            }
            L.sibling.return = L.return;
            L = L.sibling;
          }
        }
        break;
      case 19:
        Ct(n, e);
        Ft(e);
        if (u & 4) {
          sd(e);
        }
        break;
      case 21:
        break;
      default:
        Ct(n, e);
        Ft(e);
    }
  }
  function Ft(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        e: {
          for (var o = e.return; o !== null;) {
            if (rd(o)) {
              var u = o;
              break e;
            }
            o = o.return;
          }
          throw Error(i(160));
        }
        switch (u.tag) {
          case 5:
            var l = u.stateNode;
            if (u.flags & 32) {
              Dr(l, "");
              u.flags &= -33;
            }
            var f = id(e);
            Xu(e, f, l);
            break;
          case 3:
          case 4:
            var p = u.stateNode.containerInfo;
            var y = id(e);
            Wu(e, y, p);
            break;
          default:
            throw Error(i(161));
        }
      } catch (_) {
        Ne(e, e.return, _);
      }
      e.flags &= -3;
    }
    if (n & 4096) {
      e.flags &= -4097;
    }
  }
  function vy(e, n, o) {
    B = e;
    ad(e);
  }
  function ad(e, n, o) {
    var u = (e.mode & 1) !== 0;
    for (; B !== null;) {
      var l = B;
      var f = l.child;
      if (l.tag === 22 && u) {
        var p = l.memoizedState !== null || ko;
        if (!p) {
          var y = l.alternate;
          var _ = y !== null && y.memoizedState !== null || Ge;
          y = ko;
          var N = Ge;
          ko = p;
          if ((Ge = _) && !N) {
            for (B = l; B !== null;) {
              p = B;
              _ = p.child;
              if (p.tag === 22 && p.memoizedState !== null) {
                fd(l);
              } else if (_ !== null) {
                _.return = p;
                B = _;
              } else {
                fd(l);
              }
            }
          }
          while (f !== null) {
            B = f;
            ad(f);
            f = f.sibling;
          }
          B = l;
          ko = y;
          Ge = N;
        }
        ld(e);
      } else if ((l.subtreeFlags & 8772) !== 0 && f !== null) {
        f.return = l;
        B = f;
      } else {
        ld(e);
      }
    }
  }
  function ld(e) {
    while (B !== null) {
      var n = B;
      if ((n.flags & 8772) !== 0) {
        var o = n.alternate;
        try {
          if ((n.flags & 8772) !== 0) {
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                if (!Ge) {
                  Co(5, n);
                }
                break;
              case 1:
                var u = n.stateNode;
                if (n.flags & 4 && !Ge) {
                  if (o === null) {
                    u.componentDidMount();
                  } else {
                    var l = n.elementType === n.type ? o.memoizedProps : Nt(n.type, o.memoizedProps);
                    u.componentDidUpdate(l, o.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
                  }
                }
                var f = n.updateQueue;
                if (f !== null) {
                  cf(n, f, u);
                }
                break;
              case 3:
                var p = n.updateQueue;
                if (p !== null) {
                  o = null;
                  if (n.child !== null) {
                    switch (n.child.tag) {
                      case 5:
                        o = n.child.stateNode;
                        break;
                      case 1:
                        o = n.child.stateNode;
                    }
                  }
                  cf(n, p, o);
                }
                break;
              case 5:
                var y = n.stateNode;
                if (o === null && n.flags & 4) {
                  o = y;
                  var _ = n.memoizedProps;
                  switch (n.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      if (_.autoFocus) {
                        o.focus();
                      }
                      break;
                    case "img":
                      if (_.src) {
                        o.src = _.src;
                      }
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (n.memoizedState === null) {
                  var N = n.alternate;
                  if (N !== null) {
                    var R = N.memoizedState;
                    if (R !== null) {
                      var L = R.dehydrated;
                      if (L !== null) {
                        Xr(L);
                      }
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(i(163));
            }
          }
          if (!Ge) {
            if (n.flags & 512) {
              Vu(n);
            }
          }
        } catch (C) {
          Ne(n, n.return, C);
        }
      }
      if (n === e) {
        B = null;
        break;
      }
      o = n.sibling;
      if (o !== null) {
        o.return = n.return;
        B = o;
        break;
      }
      B = n.return;
    }
  }
  function cd(e) {
    while (B !== null) {
      var n = B;
      if (n === e) {
        B = null;
        break;
      }
      var o = n.sibling;
      if (o !== null) {
        o.return = n.return;
        B = o;
        break;
      }
      B = n.return;
    }
  }
  function fd(e) {
    while (B !== null) {
      var n = B;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var o = n.return;
            try {
              Co(4, n);
            } catch (_) {
              Ne(n, o, _);
            }
            break;
          case 1:
            var u = n.stateNode;
            if (typeof u.componentDidMount == "function") {
              var l = n.return;
              try {
                u.componentDidMount();
              } catch (_) {
                Ne(n, l, _);
              }
            }
            var f = n.return;
            try {
              Vu(n);
            } catch (_) {
              Ne(n, f, _);
            }
            break;
          case 5:
            var p = n.return;
            try {
              Vu(n);
            } catch (_) {
              Ne(n, p, _);
            }
        }
      } catch (_) {
        Ne(n, n.return, _);
      }
      if (n === e) {
        B = null;
        break;
      }
      var y = n.sibling;
      if (y !== null) {
        y.return = n.return;
        B = y;
        break;
      }
      B = n.return;
    }
  }
  var _y = Math.ceil;
  var Po = ie.ReactCurrentDispatcher;
  var Yu = ie.ReactCurrentOwner;
  var _t = ie.ReactCurrentBatchConfig;
  var se = 0;
  var De = null;
  var Re = null;
  var Ue = 0;
  var dt = 0;
  var Er = fn(0);
  var be = 0;
  var gi = null;
  var Hn = 0;
  var Ro = 0;
  var qu = 0;
  var yi = null;
  var rt = null;
  var Ku = 0;
  var Sr = Infinity;
  var Qt = null;
  var Lo = false;
  var Qu = null;
  var yn = null;
  var Oo = false;
  var vn = null;
  var Ao = 0;
  var vi = 0;
  var Zu = null;
  var bo = -1;
  var Mo = 0;
  function Xe() {
    if ((se & 6) !== 0) {
      return ke();
    } else if (bo !== -1) {
      return bo;
    } else {
      return bo = ke();
    }
  }
  function _n(e) {
    if ((e.mode & 1) === 0) {
      return 1;
    } else if ((se & 2) !== 0 && Ue !== 0) {
      return Ue & -Ue;
    } else if (ny.transition !== null) {
      if (Mo === 0) {
        Mo = rc();
      }
      return Mo;
    } else {
      e = pe;
      if (e === 0) {
        e = window.event;
        e = e === undefined ? 16 : dc(e.type);
      }
      return e;
    }
  }
  function Pt(e, n, o, u) {
    if (vi > 50) {
      vi = 0;
      Zu = null;
      throw Error(i(185));
    }
    zr(e, o, u);
    if ((se & 2) === 0 || e !== De) {
      if (e === De) {
        if ((se & 2) === 0) {
          Ro |= o;
        }
        if (be === 4) {
          En(e, Ue);
        }
      }
      it(e, u);
      if (o === 1 && se === 0 && (n.mode & 1) === 0) {
        Sr = ke() + 500;
        if (ao) {
          pn();
        }
      }
    }
  }
  function it(e, n) {
    var o = e.callbackNode;
    ng(e, n);
    var u = $i(e, e === De ? Ue : 0);
    if (u === 0) {
      if (o !== null) {
        ec(o);
      }
      e.callbackNode = null;
      e.callbackPriority = 0;
    } else {
      n = u & -u;
      if (e.callbackPriority !== n) {
        if (o != null) {
          ec(o);
        }
        if (n === 1) {
          if (e.tag === 0) {
            ty(pd.bind(null, e));
          } else {
            Qc(pd.bind(null, e));
          }
          Qg(function () {
            if ((se & 6) === 0) {
              pn();
            }
          });
          o = null;
        } else {
          switch (ic(u)) {
            case 1:
              o = Ls;
              break;
            case 4:
              o = tc;
              break;
            case 16:
              o = Bi;
              break;
            case 536870912:
              o = nc;
              break;
            default:
              o = Bi;
          }
          o = Sd(o, dd.bind(null, e));
        }
        e.callbackPriority = n;
        e.callbackNode = o;
      }
    }
  }
  function dd(e, n) {
    bo = -1;
    Mo = 0;
    if ((se & 6) !== 0) {
      throw Error(i(327));
    }
    var o = e.callbackNode;
    if (wr() && e.callbackNode !== o) {
      return null;
    }
    var u = $i(e, e === De ? Ue : 0);
    if (u === 0) {
      return null;
    }
    if ((u & 30) !== 0 || (u & e.expiredLanes) !== 0 || n) {
      n = Do(e, u);
    } else {
      n = u;
      var l = se;
      se |= 2;
      var f = md();
      if (De !== e || Ue !== n) {
        Qt = null;
        Sr = ke() + 500;
        Un(e, n);
      }
      do {
        try {
          wy();
          break;
        } catch (y) {
          hd(e, y);
        }
      } while (true);
      gu();
      Po.current = f;
      se = l;
      if (Re !== null) {
        n = 0;
      } else {
        De = null;
        Ue = 0;
        n = be;
      }
    }
    if (n !== 0) {
      if (n === 2) {
        l = Os(e);
        if (l !== 0) {
          u = l;
          n = Ju(e, l);
        }
      }
      if (n === 1) {
        o = gi;
        Un(e, 0);
        En(e, u);
        it(e, ke());
        throw o;
      }
      if (n === 6) {
        En(e, u);
      } else {
        l = e.current.alternate;
        if ((u & 30) === 0 && !Ey(l) && (n = Do(e, u), n === 2 && (f = Os(e), f !== 0 && (u = f, n = Ju(e, f))), n === 1)) {
          o = gi;
          Un(e, 0);
          En(e, u);
          it(e, ke());
          throw o;
        }
        e.finishedWork = l;
        e.finishedLanes = u;
        switch (n) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            jn(e, rt, Qt);
            break;
          case 3:
            En(e, u);
            if ((u & 130023424) === u && (n = Ku + 500 - ke(), n > 10)) {
              if ($i(e, 0) !== 0) {
                break;
              }
              l = e.suspendedLanes;
              if ((l & u) !== u) {
                Xe();
                e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = ou(jn.bind(null, e, rt, Qt), n);
              break;
            }
            jn(e, rt, Qt);
            break;
          case 4:
            En(e, u);
            if ((u & 4194240) === u) {
              break;
            }
            n = e.eventTimes;
            l = -1;
            while (u > 0) {
              var p = 31 - xt(u);
              f = 1 << p;
              p = n[p];
              if (p > l) {
                l = p;
              }
              u &= ~f;
            }
            u = l;
            u = ke() - u;
            u = (u < 120 ? 120 : u < 480 ? 480 : u < 1080 ? 1080 : u < 1920 ? 1920 : u < 3000 ? 3000 : u < 4320 ? 4320 : _y(u / 1960) * 1960) - u;
            if (u > 10) {
              e.timeoutHandle = ou(jn.bind(null, e, rt, Qt), u);
              break;
            }
            jn(e, rt, Qt);
            break;
          case 5:
            jn(e, rt, Qt);
            break;
          default:
            throw Error(i(329));
        }
      }
    }
    it(e, ke());
    if (e.callbackNode === o) {
      return dd.bind(null, e);
    } else {
      return null;
    }
  }
  function Ju(e, n) {
    var o = yi;
    if (e.current.memoizedState.isDehydrated) {
      Un(e, n).flags |= 256;
    }
    e = Do(e, n);
    if (e !== 2) {
      n = rt;
      rt = o;
      if (n !== null) {
        ea(n);
      }
    }
    return e;
  }
  function ea(e) {
    if (rt === null) {
      rt = e;
    } else {
      rt.push.apply(rt, e);
    }
  }
  function Ey(e) {
    var n = e;
    for (;;) {
      if (n.flags & 16384) {
        var o = n.updateQueue;
        if (o !== null && (o = o.stores, o !== null)) {
          for (var u = 0; u < o.length; u++) {
            var l = o[u];
            var f = l.getSnapshot;
            l = l.value;
            try {
              if (!Tt(f(), l)) {
                return false;
              }
            } catch {
              return false;
            }
          }
        }
      }
      o = n.child;
      if (n.subtreeFlags & 16384 && o !== null) {
        o.return = n;
        n = o;
      } else {
        if (n === e) {
          break;
        }
        while (n.sibling === null) {
          if (n.return === null || n.return === e) {
            return true;
          }
          n = n.return;
        }
        n.sibling.return = n.return;
        n = n.sibling;
      }
    }
    return true;
  }
  function En(e, n) {
    n &= ~qu;
    n &= ~Ro;
    e.suspendedLanes |= n;
    e.pingedLanes &= ~n;
    e = e.expirationTimes;
    while (n > 0) {
      var o = 31 - xt(n);
      var u = 1 << o;
      e[o] = -1;
      n &= ~u;
    }
  }
  function pd(e) {
    if ((se & 6) !== 0) {
      throw Error(i(327));
    }
    wr();
    var n = $i(e, 0);
    if ((n & 1) === 0) {
      it(e, ke());
      return null;
    }
    var o = Do(e, n);
    if (e.tag !== 0 && o === 2) {
      var u = Os(e);
      if (u !== 0) {
        n = u;
        o = Ju(e, u);
      }
    }
    if (o === 1) {
      o = gi;
      Un(e, 0);
      En(e, n);
      it(e, ke());
      throw o;
    }
    if (o === 6) {
      throw Error(i(345));
    }
    e.finishedWork = e.current.alternate;
    e.finishedLanes = n;
    jn(e, rt, Qt);
    it(e, ke());
    return null;
  }
  function ta(e, n) {
    var o = se;
    se |= 1;
    try {
      return e(n);
    } finally {
      se = o;
      if (se === 0) {
        Sr = ke() + 500;
        if (ao) {
          pn();
        }
      }
    }
  }
  function Bn(e) {
    if (vn !== null && vn.tag === 0 && (se & 6) === 0) {
      wr();
    }
    var n = se;
    se |= 1;
    var o = _t.transition;
    var u = pe;
    try {
      _t.transition = null;
      pe = 1;
      if (e) {
        return e();
      }
    } finally {
      pe = u;
      _t.transition = o;
      se = n;
      if ((se & 6) === 0) {
        pn();
      }
    }
  }
  function na() {
    dt = Er.current;
    ve(Er);
  }
  function Un(e, n) {
    e.finishedWork = null;
    e.finishedLanes = 0;
    var o = e.timeoutHandle;
    if (o !== -1) {
      e.timeoutHandle = -1;
      Kg(o);
    }
    if (Re !== null) {
      for (o = Re.return; o !== null;) {
        var u = o;
        fu(u);
        switch (u.tag) {
          case 1:
            u = u.type.childContextTypes;
            if (u != null) {
              so();
            }
            break;
          case 3:
            yr();
            ve(et);
            ve(je);
            Tu();
            break;
          case 5:
            wu(u);
            break;
          case 4:
            yr();
            break;
          case 13:
            ve(xe);
            break;
          case 19:
            ve(xe);
            break;
          case 10:
            yu(u.type._context);
            break;
          case 22:
          case 23:
            na();
        }
        o = o.return;
      }
    }
    De = e;
    Re = e = Sn(e.current, null);
    Ue = dt = n;
    be = 0;
    gi = null;
    qu = Ro = Hn = 0;
    rt = yi = null;
    if (Mn !== null) {
      for (n = 0; n < Mn.length; n++) {
        o = Mn[n];
        u = o.interleaved;
        if (u !== null) {
          o.interleaved = null;
          var l = u.next;
          var f = o.pending;
          if (f !== null) {
            var p = f.next;
            f.next = l;
            u.next = p;
          }
          o.pending = u;
        }
      }
      Mn = null;
    }
    return e;
  }
  function hd(e, n) {
    do {
      var o = Re;
      try {
        gu();
        _o.current = xo;
        if (Eo) {
          for (var u = Te.memoizedState; u !== null;) {
            var l = u.queue;
            if (l !== null) {
              l.pending = null;
            }
            u = u.next;
          }
          Eo = false;
        }
        Fn = 0;
        Me = Ae = Te = null;
        ci = false;
        fi = 0;
        Yu.current = null;
        if (o === null || o.return === null) {
          be = 1;
          gi = n;
          Re = null;
          break;
        }
        e: {
          var f = e;
          var p = o.return;
          var y = o;
          var _ = n;
          n = Ue;
          y.flags |= 32768;
          if (_ !== null && typeof _ == "object" && typeof _.then == "function") {
            var N = _;
            var R = y;
            var L = R.tag;
            if ((R.mode & 1) === 0 && (L === 0 || L === 11 || L === 15)) {
              var C = R.alternate;
              if (C) {
                R.updateQueue = C.updateQueue;
                R.memoizedState = C.memoizedState;
                R.lanes = C.lanes;
              } else {
                R.updateQueue = null;
                R.memoizedState = null;
              }
            }
            var F = Bf(p);
            if (F !== null) {
              F.flags &= -257;
              Uf(F, p, y, f, n);
              if (F.mode & 1) {
                Hf(f, N, n);
              }
              n = F;
              _ = N;
              var j = n.updateQueue;
              if (j === null) {
                var z = new Set();
                z.add(_);
                n.updateQueue = z;
              } else {
                j.add(_);
              }
              break e;
            } else {
              if ((n & 1) === 0) {
                Hf(f, N, n);
                ra();
                break e;
              }
              _ = Error(i(426));
            }
          } else if (Se && y.mode & 1) {
            var Ce = Bf(p);
            if (Ce !== null) {
              if ((Ce.flags & 65536) === 0) {
                Ce.flags |= 256;
              }
              Uf(Ce, p, y, f, n);
              hu(vr(_, y));
              break e;
            }
          }
          f = _ = vr(_, y);
          if (be !== 4) {
            be = 2;
          }
          if (yi === null) {
            yi = [f];
          } else {
            yi.push(f);
          }
          f = p;
          do {
            switch (f.tag) {
              case 3:
                f.flags |= 65536;
                n &= -n;
                f.lanes |= n;
                var x = Df(f, _, n);
                lf(f, x);
                break e;
              case 1:
                y = _;
                var E = f.type;
                var T = f.stateNode;
                if ((f.flags & 128) === 0 && (typeof E.getDerivedStateFromError == "function" || T !== null && typeof T.componentDidCatch == "function" && (yn === null || !yn.has(T)))) {
                  f.flags |= 65536;
                  n &= -n;
                  f.lanes |= n;
                  var A = Ff(f, y, n);
                  lf(f, A);
                  break e;
                }
            }
            f = f.return;
          } while (f !== null);
        }
        yd(o);
      } catch (G) {
        n = G;
        if (Re === o && o !== null) {
          Re = o = o.return;
        }
        continue;
      }
      break;
    } while (true);
  }
  function md() {
    var e = Po.current;
    Po.current = xo;
    if (e === null) {
      return xo;
    } else {
      return e;
    }
  }
  function ra() {
    if (be === 0 || be === 3 || be === 2) {
      be = 4;
    }
    if (De !== null && ((Hn & 268435455) !== 0 || (Ro & 268435455) !== 0)) {
      En(De, Ue);
    }
  }
  function Do(e, n) {
    var o = se;
    se |= 2;
    var u = md();
    if (De !== e || Ue !== n) {
      Qt = null;
      Un(e, n);
    }
    do {
      try {
        Sy();
        break;
      } catch (l) {
        hd(e, l);
      }
    } while (true);
    gu();
    se = o;
    Po.current = u;
    if (Re !== null) {
      throw Error(i(261));
    }
    De = null;
    Ue = 0;
    return be;
  }
  function Sy() {
    while (Re !== null) {
      gd(Re);
    }
  }
  function wy() {
    while (Re !== null && !Xm()) {
      gd(Re);
    }
  }
  function gd(e) {
    var n = Ed(e.alternate, e, dt);
    e.memoizedProps = e.pendingProps;
    if (n === null) {
      yd(e);
    } else {
      Re = n;
    }
    Yu.current = null;
  }
  function yd(e) {
    var n = e;
    do {
      var o = n.alternate;
      e = n.return;
      if ((n.flags & 32768) === 0) {
        o = hy(o, n, dt);
        if (o !== null) {
          Re = o;
          return;
        }
      } else {
        o = my(o, n);
        if (o !== null) {
          o.flags &= 32767;
          Re = o;
          return;
        }
        if (e !== null) {
          e.flags |= 32768;
          e.subtreeFlags = 0;
          e.deletions = null;
        } else {
          be = 6;
          Re = null;
          return;
        }
      }
      n = n.sibling;
      if (n !== null) {
        Re = n;
        return;
      }
      Re = n = e;
    } while (n !== null);
    if (be === 0) {
      be = 5;
    }
  }
  function jn(e, n, o) {
    var u = pe;
    var l = _t.transition;
    try {
      _t.transition = null;
      pe = 1;
      xy(e, n, o, u);
    } finally {
      _t.transition = l;
      pe = u;
    }
    return null;
  }
  function xy(e, n, o, u) {
    do {
      wr();
    } while (vn !== null);
    if ((se & 6) !== 0) {
      throw Error(i(327));
    }
    o = e.finishedWork;
    var l = e.finishedLanes;
    if (o === null) {
      return null;
    }
    e.finishedWork = null;
    e.finishedLanes = 0;
    if (o === e.current) {
      throw Error(i(177));
    }
    e.callbackNode = null;
    e.callbackPriority = 0;
    var f = o.lanes | o.childLanes;
    rg(e, f);
    if (e === De) {
      Re = De = null;
      Ue = 0;
    }
    if (((o.subtreeFlags & 2064) !== 0 || (o.flags & 2064) !== 0) && !Oo) {
      Oo = true;
      Sd(Bi, function () {
        wr();
        return null;
      });
    }
    f = (o.flags & 15990) !== 0;
    if ((o.subtreeFlags & 15990) !== 0 || f) {
      f = _t.transition;
      _t.transition = null;
      var p = pe;
      pe = 1;
      var y = se;
      se |= 4;
      Yu.current = null;
      yy(e, o);
      ud(o, e);
      $g(ru);
      Wi = !!nu;
      ru = nu = null;
      e.current = o;
      vy(o);
      Ym();
      se = y;
      pe = p;
      _t.transition = f;
    } else {
      e.current = o;
    }
    if (Oo) {
      Oo = false;
      vn = e;
      Ao = l;
    }
    f = e.pendingLanes;
    if (f === 0) {
      yn = null;
    }
    Qm(o.stateNode);
    it(e, ke());
    if (n !== null) {
      u = e.onRecoverableError;
      o = 0;
      for (; o < n.length; o++) {
        l = n[o];
        u(l.value, {
          componentStack: l.stack,
          digest: l.digest
        });
      }
    }
    if (Lo) {
      Lo = false;
      e = Qu;
      Qu = null;
      throw e;
    }
    if ((Ao & 1) !== 0 && e.tag !== 0) {
      wr();
    }
    f = e.pendingLanes;
    if ((f & 1) !== 0) {
      if (e === Zu) {
        vi++;
      } else {
        vi = 0;
        Zu = e;
      }
    } else {
      vi = 0;
    }
    pn();
    return null;
  }
  function wr() {
    if (vn !== null) {
      var e = ic(Ao);
      var n = _t.transition;
      var o = pe;
      try {
        _t.transition = null;
        pe = e < 16 ? 16 : e;
        if (vn === null) {
          var u = false;
        } else {
          e = vn;
          vn = null;
          Ao = 0;
          if ((se & 6) !== 0) {
            throw Error(i(331));
          }
          var l = se;
          se |= 4;
          B = e.current;
          while (B !== null) {
            var f = B;
            var p = f.child;
            if ((B.flags & 16) !== 0) {
              var y = f.deletions;
              if (y !== null) {
                for (var _ = 0; _ < y.length; _++) {
                  var N = y[_];
                  for (B = N; B !== null;) {
                    var R = B;
                    switch (R.tag) {
                      case 0:
                      case 11:
                      case 15:
                        mi(8, R, f);
                    }
                    var L = R.child;
                    if (L !== null) {
                      L.return = R;
                      B = L;
                    } else {
                      while (B !== null) {
                        R = B;
                        var C = R.sibling;
                        var F = R.return;
                        nd(R);
                        if (R === N) {
                          B = null;
                          break;
                        }
                        if (C !== null) {
                          C.return = F;
                          B = C;
                          break;
                        }
                        B = F;
                      }
                    }
                  }
                }
                var j = f.alternate;
                if (j !== null) {
                  var z = j.child;
                  if (z !== null) {
                    j.child = null;
                    do {
                      var Ce = z.sibling;
                      z.sibling = null;
                      z = Ce;
                    } while (z !== null);
                  }
                }
                B = f;
              }
            }
            if ((f.subtreeFlags & 2064) !== 0 && p !== null) {
              p.return = f;
              B = p;
            } else {
              e: while (B !== null) {
                f = B;
                if ((f.flags & 2048) !== 0) {
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      mi(9, f, f.return);
                  }
                }
                var x = f.sibling;
                if (x !== null) {
                  x.return = f.return;
                  B = x;
                  break e;
                }
                B = f.return;
              }
            }
          }
          var E = e.current;
          for (B = E; B !== null;) {
            p = B;
            var T = p.child;
            if ((p.subtreeFlags & 2064) !== 0 && T !== null) {
              T.return = p;
              B = T;
            } else {
              e: for (p = E; B !== null;) {
                y = B;
                if ((y.flags & 2048) !== 0) {
                  try {
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Co(9, y);
                    }
                  } catch (G) {
                    Ne(y, y.return, G);
                  }
                }
                if (y === p) {
                  B = null;
                  break e;
                }
                var A = y.sibling;
                if (A !== null) {
                  A.return = y.return;
                  B = A;
                  break e;
                }
                B = y.return;
              }
            }
          }
          se = l;
          pn();
          if (At && typeof At.onPostCommitFiberRoot == "function") {
            try {
              At.onPostCommitFiberRoot(Ui, e);
            } catch {}
          }
          u = true;
        }
        return u;
      } finally {
        pe = o;
        _t.transition = n;
      }
    }
    return false;
  }
  function vd(e, n, o) {
    n = vr(o, n);
    n = Df(e, n, 1);
    e = mn(e, n, 1);
    n = Xe();
    if (e !== null) {
      zr(e, 1, n);
      it(e, n);
    }
  }
  function Ne(e, n, o) {
    if (e.tag === 3) {
      vd(e, e, o);
    } else {
      while (n !== null) {
        if (n.tag === 3) {
          vd(n, e, o);
          break;
        } else if (n.tag === 1) {
          var u = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (yn === null || !yn.has(u))) {
            e = vr(o, e);
            e = Ff(n, e, 1);
            n = mn(n, e, 1);
            e = Xe();
            if (n !== null) {
              zr(n, 1, e);
              it(n, e);
            }
            break;
          }
        }
        n = n.return;
      }
    }
  }
  function Ty(e, n, o) {
    var u = e.pingCache;
    if (u !== null) {
      u.delete(n);
    }
    n = Xe();
    e.pingedLanes |= e.suspendedLanes & o;
    if (De === e && (Ue & o) === o) {
      if (be === 4 || be === 3 && (Ue & 130023424) === Ue && ke() - Ku < 500) {
        Un(e, 0);
      } else {
        qu |= o;
      }
    }
    it(e, n);
  }
  function _d(e, n) {
    if (n === 0) {
      if ((e.mode & 1) === 0) {
        n = 1;
      } else {
        n = zi;
        zi <<= 1;
        if ((zi & 130023424) === 0) {
          zi = 4194304;
        }
      }
    }
    var o = Xe();
    e = Yt(e, n);
    if (e !== null) {
      zr(e, n, o);
      it(e, o);
    }
  }
  function Iy(e) {
    var n = e.memoizedState;
    var o = 0;
    if (n !== null) {
      o = n.retryLane;
    }
    _d(e, o);
  }
  function Ny(e, n) {
    var o = 0;
    switch (e.tag) {
      case 13:
        var u = e.stateNode;
        var l = e.memoizedState;
        if (l !== null) {
          o = l.retryLane;
        }
        break;
      case 19:
        u = e.stateNode;
        break;
      default:
        throw Error(i(314));
    }
    if (u !== null) {
      u.delete(n);
    }
    _d(e, o);
  }
  var Ed;
  Ed = function (e, n, o) {
    if (e !== null) {
      if (e.memoizedProps !== n.pendingProps || et.current) {
        nt = true;
      } else {
        if ((e.lanes & o) === 0 && (n.flags & 128) === 0) {
          nt = false;
          return py(e, n, o);
        }
        nt = (e.flags & 131072) !== 0;
      }
    } else {
      nt = false;
      if (Se && (n.flags & 1048576) !== 0) {
        Zc(n, co, n.index);
      }
    }
    n.lanes = 0;
    switch (n.tag) {
      case 2:
        var u = n.type;
        No(e, n);
        e = n.pendingProps;
        var l = cr(n, je.current);
        gr(n, o);
        l = ku(null, n, u, e, l, o);
        var f = Cu();
        n.flags |= 1;
        if (typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === undefined) {
          n.tag = 1;
          n.memoizedState = null;
          n.updateQueue = null;
          if (tt(u)) {
            f = true;
            uo(n);
          } else {
            f = false;
          }
          n.memoizedState = l.state ?? null;
          Eu(n);
          l.updater = To;
          n.stateNode = l;
          l._reactInternals = n;
          bu(n, u, e, o);
          n = Hu(null, n, u, true, f, o);
        } else {
          n.tag = 0;
          if (Se && f) {
            cu(n);
          }
          We(null, n, l, o);
          n = n.child;
        }
        return n;
      case 16:
        u = n.elementType;
        e: {
          No(e, n);
          e = n.pendingProps;
          l = u._init;
          u = l(u._payload);
          n.type = u;
          l = n.tag = Cy(u);
          e = Nt(u, e);
          switch (l) {
            case 0:
              n = Fu(null, n, u, e, o);
              break e;
            case 1:
              n = Wf(null, n, u, e, o);
              break e;
            case 11:
              n = jf(null, n, u, e, o);
              break e;
            case 14:
              n = zf(null, n, u, Nt(u.type, e), o);
              break e;
          }
          throw Error(i(306, u, ""));
        }
        return n;
      case 0:
        u = n.type;
        l = n.pendingProps;
        l = n.elementType === u ? l : Nt(u, l);
        return Fu(e, n, u, l, o);
      case 1:
        u = n.type;
        l = n.pendingProps;
        l = n.elementType === u ? l : Nt(u, l);
        return Wf(e, n, u, l, o);
      case 3:
        e: {
          Xf(n);
          if (e === null) {
            throw Error(i(387));
          }
          u = n.pendingProps;
          f = n.memoizedState;
          l = f.element;
          af(e, n);
          yo(n, u, null, o);
          var p = n.memoizedState;
          u = p.element;
          if (f.isDehydrated) {
            f = {
              element: u,
              isDehydrated: false,
              cache: p.cache,
              pendingSuspenseBoundaries: p.pendingSuspenseBoundaries,
              transitions: p.transitions
            };
            n.updateQueue.baseState = f;
            n.memoizedState = f;
            if (n.flags & 256) {
              l = vr(Error(i(423)), n);
              n = Yf(e, n, u, o, l);
              break e;
            } else if (u !== l) {
              l = vr(Error(i(424)), n);
              n = Yf(e, n, u, o, l);
              break e;
            } else {
              ft = cn(n.stateNode.containerInfo.firstChild);
              ct = n;
              Se = true;
              It = null;
              o = sf(n, null, u, o);
              n.child = o;
              while (o) {
                o.flags = o.flags & -3 | 4096;
                o = o.sibling;
              }
            }
          } else {
            pr();
            if (u === l) {
              n = Kt(e, n, o);
              break e;
            }
            We(e, n, u, o);
          }
          n = n.child;
        }
        return n;
      case 5:
        ff(n);
        if (e === null) {
          pu(n);
        }
        u = n.type;
        l = n.pendingProps;
        f = e !== null ? e.memoizedProps : null;
        p = l.children;
        if (iu(u, l)) {
          p = null;
        } else if (f !== null && iu(u, f)) {
          n.flags |= 32;
        }
        Vf(e, n);
        We(e, n, p, o);
        return n.child;
      case 6:
        if (e === null) {
          pu(n);
        }
        return null;
      case 13:
        return qf(e, n, o);
      case 4:
        Su(n, n.stateNode.containerInfo);
        u = n.pendingProps;
        if (e === null) {
          n.child = hr(n, null, u, o);
        } else {
          We(e, n, u, o);
        }
        return n.child;
      case 11:
        u = n.type;
        l = n.pendingProps;
        l = n.elementType === u ? l : Nt(u, l);
        return jf(e, n, u, l, o);
      case 7:
        We(e, n, n.pendingProps, o);
        return n.child;
      case 8:
        We(e, n, n.pendingProps.children, o);
        return n.child;
      case 12:
        We(e, n, n.pendingProps.children, o);
        return n.child;
      case 10:
        e: {
          u = n.type._context;
          l = n.pendingProps;
          f = n.memoizedProps;
          p = l.value;
          ge(ho, u._currentValue);
          u._currentValue = p;
          if (f !== null) {
            if (Tt(f.value, p)) {
              if (f.children === l.children && !et.current) {
                n = Kt(e, n, o);
                break e;
              }
            } else {
              f = n.child;
              if (f !== null) {
                f.return = n;
              }
              while (f !== null) {
                var y = f.dependencies;
                if (y !== null) {
                  p = f.child;
                  for (var _ = y.firstContext; _ !== null;) {
                    if (_.context === u) {
                      if (f.tag === 1) {
                        _ = qt(-1, o & -o);
                        _.tag = 2;
                        var N = f.updateQueue;
                        if (N !== null) {
                          N = N.shared;
                          var R = N.pending;
                          if (R === null) {
                            _.next = _;
                          } else {
                            _.next = R.next;
                            R.next = _;
                          }
                          N.pending = _;
                        }
                      }
                      f.lanes |= o;
                      _ = f.alternate;
                      if (_ !== null) {
                        _.lanes |= o;
                      }
                      vu(f.return, o, n);
                      y.lanes |= o;
                      break;
                    }
                    _ = _.next;
                  }
                } else if (f.tag === 10) {
                  p = f.type === n.type ? null : f.child;
                } else if (f.tag === 18) {
                  p = f.return;
                  if (p === null) {
                    throw Error(i(341));
                  }
                  p.lanes |= o;
                  y = p.alternate;
                  if (y !== null) {
                    y.lanes |= o;
                  }
                  vu(p, o, n);
                  p = f.sibling;
                } else {
                  p = f.child;
                }
                if (p !== null) {
                  p.return = f;
                } else {
                  for (p = f; p !== null;) {
                    if (p === n) {
                      p = null;
                      break;
                    }
                    f = p.sibling;
                    if (f !== null) {
                      f.return = p.return;
                      p = f;
                      break;
                    }
                    p = p.return;
                  }
                }
                f = p;
              }
            }
          }
          We(e, n, l.children, o);
          n = n.child;
        }
        return n;
      case 9:
        l = n.type;
        u = n.pendingProps.children;
        gr(n, o);
        l = yt(l);
        u = u(l);
        n.flags |= 1;
        We(e, n, u, o);
        return n.child;
      case 14:
        u = n.type;
        l = Nt(u, n.pendingProps);
        l = Nt(u.type, l);
        return zf(e, n, u, l, o);
      case 15:
        return $f(e, n, n.type, n.pendingProps, o);
      case 17:
        u = n.type;
        l = n.pendingProps;
        l = n.elementType === u ? l : Nt(u, l);
        No(e, n);
        n.tag = 1;
        if (tt(u)) {
          e = true;
          uo(n);
        } else {
          e = false;
        }
        gr(n, o);
        bf(n, u, l);
        bu(n, u, l, o);
        return Hu(null, n, u, true, e, o);
      case 19:
        return Qf(e, n, o);
      case 22:
        return Gf(e, n, o);
    }
    throw Error(i(156, n.tag));
  };
  function Sd(e, n) {
    return Jl(e, n);
  }
  function ky(e, n, o, u) {
    this.tag = e;
    this.key = o;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = n;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = u;
    this.subtreeFlags = this.flags = 0;
    this.deletions = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
  }
  function Et(e, n, o, u) {
    return new ky(e, n, o, u);
  }
  function ia(e) {
    e = e.prototype;
    return !!e && !!e.isReactComponent;
  }
  function Cy(e) {
    if (typeof e == "function") {
      if (ia(e)) {
        return 1;
      } else {
        return 0;
      }
    }
    if (e != null) {
      e = e.$$typeof;
      if (e === Lt) {
        return 11;
      }
      if (e === Ot) {
        return 14;
      }
    }
    return 2;
  }
  function Sn(e, n) {
    var o = e.alternate;
    if (o === null) {
      o = Et(e.tag, n, e.key, e.mode);
      o.elementType = e.elementType;
      o.type = e.type;
      o.stateNode = e.stateNode;
      o.alternate = e;
      e.alternate = o;
    } else {
      o.pendingProps = n;
      o.type = e.type;
      o.flags = 0;
      o.subtreeFlags = 0;
      o.deletions = null;
    }
    o.flags = e.flags & 14680064;
    o.childLanes = e.childLanes;
    o.lanes = e.lanes;
    o.child = e.child;
    o.memoizedProps = e.memoizedProps;
    o.memoizedState = e.memoizedState;
    o.updateQueue = e.updateQueue;
    n = e.dependencies;
    o.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    };
    o.sibling = e.sibling;
    o.index = e.index;
    o.ref = e.ref;
    return o;
  }
  function Fo(e, n, o, u, l, f) {
    var p = 2;
    u = e;
    if (typeof e == "function") {
      if (ia(e)) {
        p = 1;
      }
    } else if (typeof e == "string") {
      p = 5;
    } else {
      e: switch (e) {
        case Oe:
          return zn(o.children, l, f, n);
        case st:
          p = 8;
          l |= 8;
          break;
        case nn:
          e = Et(12, o, n, l | 2);
          e.elementType = nn;
          e.lanes = f;
          return e;
        case ut:
          e = Et(13, o, n, l);
          e.elementType = ut;
          e.lanes = f;
          return e;
        case wt:
          e = Et(19, o, n, l);
          e.elementType = wt;
          e.lanes = f;
          return e;
        case Ie:
          return Ho(o, l, f, n);
        default:
          if (typeof e == "object" && e !== null) {
            switch (e.$$typeof) {
              case $t:
                p = 10;
                break e;
              case Pn:
                p = 9;
                break e;
              case Lt:
                p = 11;
                break e;
              case Ot:
                p = 14;
                break e;
              case Je:
                p = 16;
                u = null;
                break e;
            }
          }
          throw Error(i(130, e == null ? e : typeof e, ""));
      }
    }
    n = Et(p, o, n, l);
    n.elementType = e;
    n.type = u;
    n.lanes = f;
    return n;
  }
  function zn(e, n, o, u) {
    e = Et(7, e, u, n);
    e.lanes = o;
    return e;
  }
  function Ho(e, n, o, u) {
    e = Et(22, e, u, n);
    e.elementType = Ie;
    e.lanes = o;
    e.stateNode = {
      isHidden: false
    };
    return e;
  }
  function oa(e, n, o) {
    e = Et(6, e, null, n);
    e.lanes = o;
    return e;
  }
  function sa(e, n, o) {
    n = Et(4, e.children !== null ? e.children : [], e.key, n);
    n.lanes = o;
    n.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    };
    return n;
  }
  function Py(e, n, o, u, l) {
    this.tag = n;
    this.containerInfo = e;
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = -1;
    this.callbackNode = this.pendingContext = this.context = null;
    this.callbackPriority = 0;
    this.eventTimes = As(0);
    this.expirationTimes = As(-1);
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = As(0);
    this.identifierPrefix = u;
    this.onRecoverableError = l;
    this.mutableSourceEagerHydrationData = null;
  }
  function ua(e, n, o, u, l, f, p, y, _) {
    e = new Py(e, n, o, y, _);
    if (n === 1) {
      n = 1;
      if (f === true) {
        n |= 8;
      }
    } else {
      n = 0;
    }
    f = Et(3, null, null, n);
    e.current = f;
    f.stateNode = e;
    f.memoizedState = {
      element: u,
      isDehydrated: o,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    };
    Eu(f);
    return e;
  }
  function Ry(e, n, o, u = null) {
    return {
      $$typeof: ce,
      key: u == null ? null : "" + u,
      children: e,
      containerInfo: n,
      implementation: o
    };
  }
  function wd(e) {
    if (!e) {
      return dn;
    }
    e = e._reactInternals;
    e: {
      if (Rn(e) !== e || e.tag !== 1) {
        throw Error(i(170));
      }
      var n = e;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (tt(n.type)) {
              n = n.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        n = n.return;
      } while (n !== null);
      throw Error(i(171));
    }
    if (e.tag === 1) {
      var o = e.type;
      if (tt(o)) {
        return qc(e, o, n);
      }
    }
    return n;
  }
  function xd(e, n, o, u, l, f, p, y, _) {
    e = ua(o, u, true, e, l, f, p, y, _);
    e.context = wd(null);
    o = e.current;
    u = Xe();
    l = _n(o);
    f = qt(u, l);
    f.callback = n ?? null;
    mn(o, f, l);
    e.current.lanes = l;
    zr(e, l, u);
    it(e, u);
    return e;
  }
  function Bo(e, n, o, u) {
    var l = n.current;
    var f = Xe();
    var p = _n(l);
    o = wd(o);
    if (n.context === null) {
      n.context = o;
    } else {
      n.pendingContext = o;
    }
    n = qt(f, p);
    n.payload = {
      element: e
    };
    u = u === undefined ? null : u;
    if (u !== null) {
      n.callback = u;
    }
    e = mn(l, n, p);
    if (e !== null) {
      Pt(e, l, p, f);
      go(e, l, p);
    }
    return p;
  }
  function Uo(e) {
    e = e.current;
    if (!e.child) {
      return null;
    }
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Td(e, n) {
    e = e.memoizedState;
    if (e !== null && e.dehydrated !== null) {
      var o = e.retryLane;
      e.retryLane = o !== 0 && o < n ? o : n;
    }
  }
  function aa(e, n) {
    Td(e, n);
    if (e = e.alternate) {
      Td(e, n);
    }
  }
  function Ly() {
    return null;
  }
  var Id = typeof reportError == "function" ? reportError : function (e) {
    console.error(e);
  };
  function la(e) {
    this._internalRoot = e;
  }
  jo.prototype.render = la.prototype.render = function (e) {
    var n = this._internalRoot;
    if (n === null) {
      throw Error(i(409));
    }
    Bo(e, n, null, null);
  };
  jo.prototype.unmount = la.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      Bn(function () {
        Bo(null, e, null, null);
      });
      n[Gt] = null;
    }
  };
  function jo(e) {
    this._internalRoot = e;
  }
  jo.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var n = uc();
      e = {
        blockedOn: null,
        target: e,
        priority: n
      };
      for (var o = 0; o < un.length && n !== 0 && n < un[o].priority; o++);
      un.splice(o, 0, e);
      if (o === 0) {
        cc(e);
      }
    }
  };
  function ca(e) {
    return !!e && (e.nodeType === 1 || e.nodeType === 9 || e.nodeType === 11);
  }
  function zo(e) {
    return !!e && (e.nodeType === 1 || e.nodeType === 9 || e.nodeType === 11 || e.nodeType === 8 && e.nodeValue === " react-mount-point-unstable ");
  }
  function Nd() {}
  function Oy(e, n, o, u, l) {
    if (l) {
      if (typeof u == "function") {
        var f = u;
        u = function () {
          var N = Uo(p);
          f.call(N);
        };
      }
      var p = xd(n, u, e, 0, null, false, false, "", Nd);
      e._reactRootContainer = p;
      e[Gt] = p.current;
      ni(e.nodeType === 8 ? e.parentNode : e);
      Bn();
      return p;
    }
    while (l = e.lastChild) {
      e.removeChild(l);
    }
    if (typeof u == "function") {
      var y = u;
      u = function () {
        var N = Uo(_);
        y.call(N);
      };
    }
    var _ = ua(e, 0, false, null, null, false, false, "", Nd);
    e._reactRootContainer = _;
    e[Gt] = _.current;
    ni(e.nodeType === 8 ? e.parentNode : e);
    Bn(function () {
      Bo(n, _, o, u);
    });
    return _;
  }
  function $o(e, n, o, u, l) {
    var f = o._reactRootContainer;
    if (f) {
      var p = f;
      if (typeof l == "function") {
        var y = l;
        l = function () {
          var _ = Uo(p);
          y.call(_);
        };
      }
      Bo(n, p, e, l);
    } else {
      p = Oy(o, n, e, l, u);
    }
    return Uo(p);
  }
  oc = function (e) {
    switch (e.tag) {
      case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var o = jr(n.pendingLanes);
          if (o !== 0) {
            bs(n, o | 1);
            it(n, ke());
            if ((se & 6) === 0) {
              Sr = ke() + 500;
              pn();
            }
          }
        }
        break;
      case 13:
        Bn(function () {
          var u = Yt(e, 1);
          if (u !== null) {
            var l = Xe();
            Pt(u, e, 1, l);
          }
        });
        aa(e, 1);
    }
  };
  Ms = function (e) {
    if (e.tag === 13) {
      var n = Yt(e, 134217728);
      if (n !== null) {
        var o = Xe();
        Pt(n, e, 134217728, o);
      }
      aa(e, 134217728);
    }
  };
  sc = function (e) {
    if (e.tag === 13) {
      var n = _n(e);
      var o = Yt(e, n);
      if (o !== null) {
        var u = Xe();
        Pt(o, e, n, u);
      }
      aa(e, n);
    }
  };
  uc = function () {
    return pe;
  };
  ac = function (e, n) {
    var o = pe;
    try {
      pe = e;
      return n();
    } finally {
      pe = o;
    }
  };
  ks = function (e, n, o) {
    switch (n) {
      case "input":
        _s(e, o);
        n = o.name;
        if (o.type === "radio" && n != null) {
          for (o = e; o.parentNode;) {
            o = o.parentNode;
          }
          o = o.querySelectorAll("input[name=" + JSON.stringify("" + n) + "][type=\"radio\"]");
          n = 0;
          for (; n < o.length; n++) {
            var u = o[n];
            if (u !== e && u.form === e.form) {
              var l = oo(u);
              if (!l) {
                throw Error(i(90));
              }
              Ol(u);
              _s(u, l);
            }
          }
        }
        break;
      case "textarea":
        Fl(e, o);
        break;
      case "select":
        n = o.value;
        if (n != null) {
          Zn(e, !!o.multiple, n, false);
        }
    }
  };
  Wl = ta;
  Xl = Bn;
  var Ay = {
    usingClientEntryPoint: false,
    Events: [oi, ar, oo, Gl, Vl, ta]
  };
  var _i = {
    findFiberByHostInstance: Ln,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
  };
  var by = {
    bundleType: _i.bundleType,
    version: _i.version,
    rendererPackageName: _i.rendererPackageName,
    rendererConfig: _i.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ie.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      e = Ql(e);
      if (e === null) {
        return null;
      } else {
        return e.stateNode;
      }
    },
    findFiberByHostInstance: _i.findFiberByHostInstance || Ly,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
    var Go = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Go.isDisabled && Go.supportsFiber) {
      try {
        Ui = Go.inject(by);
        At = Go;
      } catch {}
    }
  }
  ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ay;
  ot.createPortal = function (e, n, o = null) {
    if (!ca(n)) {
      throw Error(i(200));
    }
    return Ry(e, n, null, o);
  };
  ot.createRoot = function (e, n) {
    if (!ca(e)) {
      throw Error(i(299));
    }
    var o = false;
    var u = "";
    var l = Id;
    if (n != null) {
      if (n.unstable_strictMode === true) {
        o = true;
      }
      if (n.identifierPrefix !== undefined) {
        u = n.identifierPrefix;
      }
      if (n.onRecoverableError !== undefined) {
        l = n.onRecoverableError;
      }
    }
    n = ua(e, 1, false, null, null, o, false, u, l);
    e[Gt] = n.current;
    ni(e.nodeType === 8 ? e.parentNode : e);
    return new la(n);
  };
  ot.findDOMNode = function (e) {
    if (e == null) {
      return null;
    }
    if (e.nodeType === 1) {
      return e;
    }
    var n = e._reactInternals;
    if (n === undefined) {
      throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
    }
    e = Ql(n);
    e = e === null ? null : e.stateNode;
    return e;
  };
  ot.flushSync = function (e) {
    return Bn(e);
  };
  ot.hydrate = function (e, n, o) {
    if (!zo(n)) {
      throw Error(i(200));
    }
    return $o(null, e, n, true, o);
  };
  ot.hydrateRoot = function (e, n, o) {
    if (!ca(e)) {
      throw Error(i(405));
    }
    var u = o != null && o.hydratedSources || null;
    var l = false;
    var f = "";
    var p = Id;
    if (o != null) {
      if (o.unstable_strictMode === true) {
        l = true;
      }
      if (o.identifierPrefix !== undefined) {
        f = o.identifierPrefix;
      }
      if (o.onRecoverableError !== undefined) {
        p = o.onRecoverableError;
      }
    }
    n = xd(n, null, e, 1, o ?? null, l, false, f, p);
    e[Gt] = n.current;
    ni(e);
    if (u) {
      for (e = 0; e < u.length; e++) {
        o = u[e];
        l = o._getVersion;
        l = l(o._source);
        if (n.mutableSourceEagerHydrationData == null) {
          n.mutableSourceEagerHydrationData = [o, l];
        } else {
          n.mutableSourceEagerHydrationData.push(o, l);
        }
      }
    }
    return new jo(n);
  };
  ot.render = function (e, n, o) {
    if (!zo(n)) {
      throw Error(i(200));
    }
    return $o(null, e, n, false, o);
  };
  ot.unmountComponentAtNode = function (e) {
    if (!zo(e)) {
      throw Error(i(40));
    }
    if (e._reactRootContainer) {
      Bn(function () {
        $o(null, null, e, false, function () {
          e._reactRootContainer = null;
          e[Gt] = null;
        });
      });
      return true;
    } else {
      return false;
    }
  };
  ot.unstable_batchedUpdates = ta;
  ot.unstable_renderSubtreeIntoContainer = function (e, n, o, u) {
    if (!zo(o)) {
      throw Error(i(200));
    }
    if (e == null || e._reactInternals === undefined) {
      throw Error(i(38));
    }
    return $o(e, n, o, false, u);
  };
  ot.version = "18.3.1-next-f1338f8080-20240426";
  return ot;
}
var bd;
function Xy() {
  if (bd) {
    return pa.exports;
  }
  bd = 1;
  function t() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function") {
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
    }
  }
  t();
  pa.exports = Wy();
  return pa.exports;
}
var Md;
function Yy() {
  if (Md) {
    return Vo;
  }
  Md = 1;
  var t = Xy();
  Vo.createRoot = t.createRoot;
  Vo.hydrateRoot = t.hydrateRoot;
  return Vo;
}
var qy = Yy();
function Aa(t, r) {
  Aa = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (i, s) {
    i.__proto__ = s;
  } || function (i, s) {
    for (var a in s) {
      if (Object.prototype.hasOwnProperty.call(s, a)) {
        i[a] = s[a];
      }
    }
  };
  return Aa(t, r);
}
function He(t, r) {
  if (typeof r != "function" && r !== null) {
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  }
  Aa(t, r);
  function i() {
    this.constructor = t;
  }
  t.prototype = r === null ? Object.create(r) : (i.prototype = r.prototype, new i());
}
function $() {
  $ = Object.assign || function (r) {
    var i;
    for (var s = 1, a = arguments.length; s < a; s++) {
      i = arguments[s];
      for (var c in i) {
        if (Object.prototype.hasOwnProperty.call(i, c)) {
          r[c] = i[c];
        }
      }
    }
    return r;
  };
  return $.apply(this, arguments);
}
function as(t, r) {
  var i = {};
  for (var s in t) {
    if (Object.prototype.hasOwnProperty.call(t, s) && r.indexOf(s) < 0) {
      i[s] = t[s];
    }
  }
  if (t != null && typeof Object.getOwnPropertySymbols == "function") {
    for (var a = 0, s = Object.getOwnPropertySymbols(t); a < s.length; a++) {
      if (r.indexOf(s[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, s[a])) {
        i[s[a]] = t[s[a]];
      }
    }
  }
  return i;
}
function Ky(t, r, i, s) {
  function a(c) {
    if (c instanceof i) {
      return c;
    } else {
      return new i(function (d) {
        d(c);
      });
    }
  }
  return new (i ||= Promise)(function (c, d) {
    function m(v) {
      try {
        g(s.next(v));
      } catch (S) {
        d(S);
      }
    }
    function h(v) {
      try {
        g(s.throw(v));
      } catch (S) {
        d(S);
      }
    }
    function g(v) {
      if (v.done) {
        c(v.value);
      } else {
        a(v.value).then(m, h);
      }
    }
    g((s = s.apply(t, r || [])).next());
  });
}
function lh(t, r) {
  var i = {
    label: 0,
    sent: function () {
      if (c[0] & 1) {
        throw c[1];
      }
      return c[1];
    },
    trys: [],
    ops: []
  };
  var s;
  var a;
  var c;
  var d = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  d.next = m(0);
  d.throw = m(1);
  d.return = m(2);
  if (typeof Symbol == "function") {
    d[Symbol.iterator] = function () {
      return this;
    };
  }
  return d;
  function m(g) {
    return function (v) {
      return h([g, v]);
    };
  }
  function h(g) {
    if (s) {
      throw new TypeError("Generator is already executing.");
    }
    while (d && (d = 0, g[0] && (i = 0)), i) {
      try {
        s = 1;
        if (a && (c = g[0] & 2 ? a.return : g[0] ? a.throw || ((c = a.return) && c.call(a), 0) : a.next) && !(c = c.call(a, g[1])).done) {
          return c;
        }
        a = 0;
        if (c) {
          g = [g[0] & 2, c.value];
        }
        switch (g[0]) {
          case 0:
          case 1:
            c = g;
            break;
          case 4:
            i.label++;
            return {
              value: g[1],
              done: false
            };
          case 5:
            i.label++;
            a = g[1];
            g = [0];
            continue;
          case 7:
            g = i.ops.pop();
            i.trys.pop();
            continue;
          default:
            c = i.trys;
            if (!(c = c.length > 0 && c[c.length - 1]) && (g[0] === 6 || g[0] === 2)) {
              i = 0;
              continue;
            }
            if (g[0] === 3 && (!c || g[1] > c[0] && g[1] < c[3])) {
              i.label = g[1];
              break;
            }
            if (g[0] === 6 && i.label < c[1]) {
              i.label = c[1];
              c = g;
              break;
            }
            if (c && i.label < c[2]) {
              i.label = c[2];
              i.ops.push(g);
              break;
            }
            if (c[2]) {
              i.ops.pop();
            }
            i.trys.pop();
            continue;
        }
        g = r.call(t, i);
      } catch (v) {
        g = [6, v];
        a = 0;
      } finally {
        s = c = 0;
      }
    }
    if (g[0] & 5) {
      throw g[1];
    }
    return {
      value: g[0] ? g[1] : undefined,
      done: true
    };
  }
}
function wi(t) {
  var r = typeof Symbol == "function" && Symbol.iterator;
  var i = r && t[r];
  var s = 0;
  if (i) {
    return i.call(t);
  }
  if (t && typeof t.length == "number") {
    return {
      next: function () {
        if (t && s >= t.length) {
          t = undefined;
        }
        return {
          value: t && t[s++],
          done: !t
        };
      }
    };
  }
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Tr(t, r) {
  var i = typeof Symbol == "function" && t[Symbol.iterator];
  if (!i) {
    return t;
  }
  var s = i.call(t);
  var a;
  var c = [];
  var d;
  try {
    while ((r === undefined || r-- > 0) && !(a = s.next()).done) {
      c.push(a.value);
    }
  } catch (m) {
    d = {
      error: m
    };
  } finally {
    try {
      if (a && !a.done && (i = s.return)) {
        i.call(s);
      }
    } finally {
      if (d) {
        throw d.error;
      }
    }
  }
  return c;
}
function qe(t, r, i) {
  if (i || arguments.length === 2) {
    for (var s = 0, a = r.length, c; s < a; s++) {
      if (c || !(s in r)) {
        c ||= Array.prototype.slice.call(r, 0, s);
        c[s] = r[s];
      }
    }
  }
  return t.concat(c || Array.prototype.slice.call(r));
}
function xr(t) {
  if (this instanceof xr) {
    this.v = t;
    return this;
  } else {
    return new xr(t);
  }
}
function Qy(t, r, i) {
  if (!Symbol.asyncIterator) {
    throw new TypeError("Symbol.asyncIterator is not defined.");
  }
  var s = i.apply(t, r || []);
  var a;
  var c = [];
  a = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype);
  m("next");
  m("throw");
  m("return", d);
  a[Symbol.asyncIterator] = function () {
    return this;
  };
  return a;
  function d(I) {
    return function (M) {
      return Promise.resolve(M).then(I, S);
    };
  }
  function m(I, M) {
    if (s[I]) {
      a[I] = function (O) {
        return new Promise(function (H, Z) {
          if (!(c.push([I, O, H, Z]) > 1)) {
            h(I, O);
          }
        });
      };
      if (M) {
        a[I] = M(a[I]);
      }
    }
  }
  function h(I, M) {
    try {
      g(s[I](M));
    } catch (O) {
      k(c[0][3], O);
    }
  }
  function g(I) {
    if (I.value instanceof xr) {
      Promise.resolve(I.value.v).then(v, S);
    } else {
      k(c[0][2], I);
    }
  }
  function v(I) {
    h("next", I);
  }
  function S(I) {
    h("throw", I);
  }
  function k(I, M) {
    I(M);
    c.shift();
    if (c.length) {
      h(c[0][0], c[0][1]);
    }
  }
}
function Zy(t) {
  if (!Symbol.asyncIterator) {
    throw new TypeError("Symbol.asyncIterator is not defined.");
  }
  var r = t[Symbol.asyncIterator];
  var i;
  if (r) {
    return r.call(t);
  } else {
    t = typeof wi == "function" ? wi(t) : t[Symbol.iterator]();
    i = {};
    s("next");
    s("throw");
    s("return");
    i[Symbol.asyncIterator] = function () {
      return this;
    };
    return i;
  }
  function s(c) {
    i[c] = t[c] && function (d) {
      return new Promise(function (m, h) {
        d = t[c](d);
        a(m, h, d.done, d.value);
      });
    };
  }
  function a(c, d, m, h) {
    Promise.resolve(h).then(function (g) {
      c({
        value: g,
        done: m
      });
    }, d);
  }
}
function Ht(t, r) {
  var i = r && r.cache ? r.cache : ov;
  var s = r && r.serializer ? r.serializer : rv;
  var a = r && r.strategy ? r.strategy : tv;
  return a(t, {
    cache: i,
    serializer: s
  });
}
function Jy(t) {
  return t == null || typeof t == "number" || typeof t == "boolean";
}
function ev(t, r, i, s) {
  var a = Jy(s) ? s : i(s);
  var c = r.get(a);
  if (typeof c === "undefined") {
    c = t.call(this, s);
    r.set(a, c);
  }
  return c;
}
function ch(t, r, i) {
  var s = Array.prototype.slice.call(arguments, 3);
  var a = i(s);
  var c = r.get(a);
  if (typeof c === "undefined") {
    c = t.apply(this, s);
    r.set(a, c);
  }
  return c;
}
function fh(t, r, i, s, a) {
  return i.bind(r, t, s, a);
}
function tv(t, r) {
  var i = t.length === 1 ? ev : ch;
  return fh(t, this, i, r.cache.create(), r.serializer);
}
function nv(t, r) {
  return fh(t, this, ch, r.cache.create(), r.serializer);
}
function rv() {
  return JSON.stringify(arguments);
}
var iv = function () {
  function t() {
    this.cache = Object.create(null);
  }
  t.prototype.get = function (r) {
    return this.cache[r];
  };
  t.prototype.set = function (r, i) {
    this.cache[r] = i;
  };
  return t;
}();
var ov = {
  create: function () {
    return new iv();
  }
};
var Bt = {
  variadic: nv
};
var re;
(function (t) {
  t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE";
  t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT";
  t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT";
  t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE";
  t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE";
  t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE";
  t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON";
  t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON";
  t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON";
  t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON";
  t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE";
  t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS";
  t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE";
  t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE";
  t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR";
  t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR";
  t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT";
  t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT";
  t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR";
  t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR";
  t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR";
  t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE";
  t[t.INVALID_TAG = 23] = "INVALID_TAG";
  t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME";
  t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG";
  t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(re ||= {});
var _e;
(function (t) {
  t[t.literal = 0] = "literal";
  t[t.argument = 1] = "argument";
  t[t.number = 2] = "number";
  t[t.date = 3] = "date";
  t[t.time = 4] = "time";
  t[t.select = 5] = "select";
  t[t.plural = 6] = "plural";
  t[t.pound = 7] = "pound";
  t[t.tag = 8] = "tag";
})(_e ||= {});
var Ir;
(function (t) {
  t[t.number = 0] = "number";
  t[t.dateTime = 1] = "dateTime";
})(Ir ||= {});
function Dd(t) {
  return t.type === _e.literal;
}
function sv(t) {
  return t.type === _e.argument;
}
function dh(t) {
  return t.type === _e.number;
}
function ph(t) {
  return t.type === _e.date;
}
function hh(t) {
  return t.type === _e.time;
}
function mh(t) {
  return t.type === _e.select;
}
function gh(t) {
  return t.type === _e.plural;
}
function uv(t) {
  return t.type === _e.pound;
}
function yh(t) {
  return t.type === _e.tag;
}
function vh(t) {
  return !!t && typeof t == "object" && t.type === Ir.number;
}
function ba(t) {
  return !!t && typeof t == "object" && t.type === Ir.dateTime;
}
var _h = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;
var av = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function lv(t) {
  var r = {};
  t.replace(av, function (i) {
    var s = i.length;
    switch (i[0]) {
      case "G":
        r.era = s === 4 ? "long" : s === 5 ? "narrow" : "short";
        break;
      case "y":
        r.year = s === 2 ? "2-digit" : "numeric";
        break;
      case "Y":
      case "u":
      case "U":
      case "r":
        throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
      case "q":
      case "Q":
        throw new RangeError("`q/Q` (quarter) patterns are not supported");
      case "M":
      case "L":
        r.month = ["numeric", "2-digit", "short", "long", "narrow"][s - 1];
        break;
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        r.day = ["numeric", "2-digit"][s - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      case "E":
        r.weekday = s === 4 ? "long" : s === 5 ? "narrow" : "short";
        break;
      case "e":
        if (s < 4) {
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        }
        r.weekday = ["short", "long", "narrow", "short"][s - 4];
        break;
      case "c":
        if (s < 4) {
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        }
        r.weekday = ["short", "long", "narrow", "short"][s - 4];
        break;
      case "a":
        r.hour12 = true;
        break;
      case "b":
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      case "h":
        r.hourCycle = "h12";
        r.hour = ["numeric", "2-digit"][s - 1];
        break;
      case "H":
        r.hourCycle = "h23";
        r.hour = ["numeric", "2-digit"][s - 1];
        break;
      case "K":
        r.hourCycle = "h11";
        r.hour = ["numeric", "2-digit"][s - 1];
        break;
      case "k":
        r.hourCycle = "h24";
        r.hour = ["numeric", "2-digit"][s - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      case "m":
        r.minute = ["numeric", "2-digit"][s - 1];
        break;
      case "s":
        r.second = ["numeric", "2-digit"][s - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      case "z":
        r.timeZoneName = s < 4 ? "short" : "long";
        break;
      case "Z":
      case "O":
      case "v":
      case "V":
      case "X":
      case "x":
        throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
    }
    return "";
  });
  return r;
}
var cv = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function fv(t) {
  if (t.length === 0) {
    throw new Error("Number skeleton cannot be empty");
  }
  var r = t.split(cv).filter(function (k) {
    return k.length > 0;
  });
  var i = [];
  for (var s = 0, a = r; s < a.length; s++) {
    var c = a[s];
    var d = c.split("/");
    if (d.length === 0) {
      throw new Error("Invalid number skeleton");
    }
    var m = d[0];
    var h = d.slice(1);
    for (var g = 0, v = h; g < v.length; g++) {
      var S = v[g];
      if (S.length === 0) {
        throw new Error("Invalid number skeleton");
      }
    }
    i.push({
      stem: m,
      options: h
    });
  }
  return i;
}
function dv(t) {
  return t.replace(/^(.*?)-/, "");
}
var Fd = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g;
var Eh = /^(@+)?(\+|#+)?[rs]?$/g;
var pv = /(\*)(0+)|(#+)(0+)|(0+)/g;
var Sh = /^(0+)$/;
function Hd(t) {
  var r = {};
  if (t[t.length - 1] === "r") {
    r.roundingPriority = "morePrecision";
  } else if (t[t.length - 1] === "s") {
    r.roundingPriority = "lessPrecision";
  }
  t.replace(Eh, function (i, s, a) {
    if (typeof a != "string") {
      r.minimumSignificantDigits = s.length;
      r.maximumSignificantDigits = s.length;
    } else if (a === "+") {
      r.minimumSignificantDigits = s.length;
    } else if (s[0] === "#") {
      r.maximumSignificantDigits = s.length;
    } else {
      r.minimumSignificantDigits = s.length;
      r.maximumSignificantDigits = s.length + (typeof a == "string" ? a.length : 0);
    }
    return "";
  });
  return r;
}
function wh(t) {
  switch (t) {
    case "sign-auto":
      return {
        signDisplay: "auto"
      };
    case "sign-accounting":
    case "()":
      return {
        currencySign: "accounting"
      };
    case "sign-always":
    case "+!":
      return {
        signDisplay: "always"
      };
    case "sign-accounting-always":
    case "()!":
      return {
        signDisplay: "always",
        currencySign: "accounting"
      };
    case "sign-except-zero":
    case "+?":
      return {
        signDisplay: "exceptZero"
      };
    case "sign-accounting-except-zero":
    case "()?":
      return {
        signDisplay: "exceptZero",
        currencySign: "accounting"
      };
    case "sign-never":
    case "+_":
      return {
        signDisplay: "never"
      };
  }
}
function hv(t) {
  var r;
  if (t[0] === "E" && t[1] === "E") {
    r = {
      notation: "engineering"
    };
    t = t.slice(2);
  } else if (t[0] === "E") {
    r = {
      notation: "scientific"
    };
    t = t.slice(1);
  }
  if (r) {
    var i = t.slice(0, 2);
    if (i === "+!") {
      r.signDisplay = "always";
      t = t.slice(2);
    } else if (i === "+?") {
      r.signDisplay = "exceptZero";
      t = t.slice(2);
    }
    if (!Sh.test(t)) {
      throw new Error("Malformed concise eng/scientific notation");
    }
    r.minimumIntegerDigits = t.length;
  }
  return r;
}
function Bd(t) {
  var r = {};
  var i = wh(t);
  return i || r;
}
function mv(t) {
  var r = {};
  for (var i = 0, s = t; i < s.length; i++) {
    var a = s[i];
    switch (a.stem) {
      case "percent":
      case "%":
        r.style = "percent";
        continue;
      case "%x100":
        r.style = "percent";
        r.scale = 100;
        continue;
      case "currency":
        r.style = "currency";
        r.currency = a.options[0];
        continue;
      case "group-off":
      case ",_":
        r.useGrouping = false;
        continue;
      case "precision-integer":
      case ".":
        r.maximumFractionDigits = 0;
        continue;
      case "measure-unit":
      case "unit":
        r.style = "unit";
        r.unit = dv(a.options[0]);
        continue;
      case "compact-short":
      case "K":
        r.notation = "compact";
        r.compactDisplay = "short";
        continue;
      case "compact-long":
      case "KK":
        r.notation = "compact";
        r.compactDisplay = "long";
        continue;
      case "scientific":
        r = $($($({}, r), {
          notation: "scientific"
        }), a.options.reduce(function (h, g) {
          return $($({}, h), Bd(g));
        }, {}));
        continue;
      case "engineering":
        r = $($($({}, r), {
          notation: "engineering"
        }), a.options.reduce(function (h, g) {
          return $($({}, h), Bd(g));
        }, {}));
        continue;
      case "notation-simple":
        r.notation = "standard";
        continue;
      case "unit-width-narrow":
        r.currencyDisplay = "narrowSymbol";
        r.unitDisplay = "narrow";
        continue;
      case "unit-width-short":
        r.currencyDisplay = "code";
        r.unitDisplay = "short";
        continue;
      case "unit-width-full-name":
        r.currencyDisplay = "name";
        r.unitDisplay = "long";
        continue;
      case "unit-width-iso-code":
        r.currencyDisplay = "symbol";
        continue;
      case "scale":
        r.scale = parseFloat(a.options[0]);
        continue;
      case "rounding-mode-floor":
        r.roundingMode = "floor";
        continue;
      case "rounding-mode-ceiling":
        r.roundingMode = "ceil";
        continue;
      case "rounding-mode-down":
        r.roundingMode = "trunc";
        continue;
      case "rounding-mode-up":
        r.roundingMode = "expand";
        continue;
      case "rounding-mode-half-even":
        r.roundingMode = "halfEven";
        continue;
      case "rounding-mode-half-down":
        r.roundingMode = "halfTrunc";
        continue;
      case "rounding-mode-half-up":
        r.roundingMode = "halfExpand";
        continue;
      case "integer-width":
        if (a.options.length > 1) {
          throw new RangeError("integer-width stems only accept a single optional option");
        }
        a.options[0].replace(pv, function (h, g, v, S, k, I) {
          if (g) {
            r.minimumIntegerDigits = v.length;
          } else {
            if (S && k) {
              throw new Error("We currently do not support maximum integer digits");
            }
            if (I) {
              throw new Error("We currently do not support exact integer digits");
            }
          }
          return "";
        });
        continue;
    }
    if (Sh.test(a.stem)) {
      r.minimumIntegerDigits = a.stem.length;
      continue;
    }
    if (Fd.test(a.stem)) {
      if (a.options.length > 1) {
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      }
      a.stem.replace(Fd, function (h, g, v, S, k, I) {
        if (v === "*") {
          r.minimumFractionDigits = g.length;
        } else if (S && S[0] === "#") {
          r.maximumFractionDigits = S.length;
        } else if (k && I) {
          r.minimumFractionDigits = k.length;
          r.maximumFractionDigits = k.length + I.length;
        } else {
          r.minimumFractionDigits = g.length;
          r.maximumFractionDigits = g.length;
        }
        return "";
      });
      var c = a.options[0];
      if (c === "w") {
        r = $($({}, r), {
          trailingZeroDisplay: "stripIfInteger"
        });
      } else if (c) {
        r = $($({}, r), Hd(c));
      }
      continue;
    }
    if (Eh.test(a.stem)) {
      r = $($({}, r), Hd(a.stem));
      continue;
    }
    var d = wh(a.stem);
    if (d) {
      r = $($({}, r), d);
    }
    var m = hv(a.stem);
    if (m) {
      r = $($({}, r), m);
    }
  }
  return r;
}
var Wo = {
  "001": ["H", "h"],
  419: ["h", "H", "hB", "hb"],
  AC: ["H", "h", "hb", "hB"],
  AD: ["H", "hB"],
  AE: ["h", "hB", "hb", "H"],
  AF: ["H", "hb", "hB", "h"],
  AG: ["h", "hb", "H", "hB"],
  AI: ["H", "h", "hb", "hB"],
  AL: ["h", "H", "hB"],
  AM: ["H", "hB"],
  AO: ["H", "hB"],
  AR: ["h", "H", "hB", "hb"],
  AS: ["h", "H"],
  AT: ["H", "hB"],
  AU: ["h", "hb", "H", "hB"],
  AW: ["H", "hB"],
  AX: ["H"],
  AZ: ["H", "hB", "h"],
  BA: ["H", "hB", "h"],
  BB: ["h", "hb", "H", "hB"],
  BD: ["h", "hB", "H"],
  BE: ["H", "hB"],
  BF: ["H", "hB"],
  BG: ["H", "hB", "h"],
  BH: ["h", "hB", "hb", "H"],
  BI: ["H", "h"],
  BJ: ["H", "hB"],
  BL: ["H", "hB"],
  BM: ["h", "hb", "H", "hB"],
  BN: ["hb", "hB", "h", "H"],
  BO: ["h", "H", "hB", "hb"],
  BQ: ["H"],
  BR: ["H", "hB"],
  BS: ["h", "hb", "H", "hB"],
  BT: ["h", "H"],
  BW: ["H", "h", "hb", "hB"],
  BY: ["H", "h"],
  BZ: ["H", "h", "hb", "hB"],
  CA: ["h", "hb", "H", "hB"],
  CC: ["H", "h", "hb", "hB"],
  CD: ["hB", "H"],
  CF: ["H", "h", "hB"],
  CG: ["H", "hB"],
  CH: ["H", "hB", "h"],
  CI: ["H", "hB"],
  CK: ["H", "h", "hb", "hB"],
  CL: ["h", "H", "hB", "hb"],
  CM: ["H", "h", "hB"],
  CN: ["H", "hB", "hb", "h"],
  CO: ["h", "H", "hB", "hb"],
  CP: ["H"],
  CR: ["h", "H", "hB", "hb"],
  CU: ["h", "H", "hB", "hb"],
  CV: ["H", "hB"],
  CW: ["H", "hB"],
  CX: ["H", "h", "hb", "hB"],
  CY: ["h", "H", "hb", "hB"],
  CZ: ["H"],
  DE: ["H", "hB"],
  DG: ["H", "h", "hb", "hB"],
  DJ: ["h", "H"],
  DK: ["H"],
  DM: ["h", "hb", "H", "hB"],
  DO: ["h", "H", "hB", "hb"],
  DZ: ["h", "hB", "hb", "H"],
  EA: ["H", "h", "hB", "hb"],
  EC: ["h", "H", "hB", "hb"],
  EE: ["H", "hB"],
  EG: ["h", "hB", "hb", "H"],
  EH: ["h", "hB", "hb", "H"],
  ER: ["h", "H"],
  ES: ["H", "hB", "h", "hb"],
  ET: ["hB", "hb", "h", "H"],
  FI: ["H"],
  FJ: ["h", "hb", "H", "hB"],
  FK: ["H", "h", "hb", "hB"],
  FM: ["h", "hb", "H", "hB"],
  FO: ["H", "h"],
  FR: ["H", "hB"],
  GA: ["H", "hB"],
  GB: ["H", "h", "hb", "hB"],
  GD: ["h", "hb", "H", "hB"],
  GE: ["H", "hB", "h"],
  GF: ["H", "hB"],
  GG: ["H", "h", "hb", "hB"],
  GH: ["h", "H"],
  GI: ["H", "h", "hb", "hB"],
  GL: ["H", "h"],
  GM: ["h", "hb", "H", "hB"],
  GN: ["H", "hB"],
  GP: ["H", "hB"],
  GQ: ["H", "hB", "h", "hb"],
  GR: ["h", "H", "hb", "hB"],
  GT: ["h", "H", "hB", "hb"],
  GU: ["h", "hb", "H", "hB"],
  GW: ["H", "hB"],
  GY: ["h", "hb", "H", "hB"],
  HK: ["h", "hB", "hb", "H"],
  HN: ["h", "H", "hB", "hb"],
  HR: ["H", "hB"],
  HU: ["H", "h"],
  IC: ["H", "h", "hB", "hb"],
  ID: ["H"],
  IE: ["H", "h", "hb", "hB"],
  IL: ["H", "hB"],
  IM: ["H", "h", "hb", "hB"],
  IN: ["h", "H"],
  IO: ["H", "h", "hb", "hB"],
  IQ: ["h", "hB", "hb", "H"],
  IR: ["hB", "H"],
  IS: ["H"],
  IT: ["H", "hB"],
  JE: ["H", "h", "hb", "hB"],
  JM: ["h", "hb", "H", "hB"],
  JO: ["h", "hB", "hb", "H"],
  JP: ["H", "K", "h"],
  KE: ["hB", "hb", "H", "h"],
  KG: ["H", "h", "hB", "hb"],
  KH: ["hB", "h", "H", "hb"],
  KI: ["h", "hb", "H", "hB"],
  KM: ["H", "h", "hB", "hb"],
  KN: ["h", "hb", "H", "hB"],
  KP: ["h", "H", "hB", "hb"],
  KR: ["h", "H", "hB", "hb"],
  KW: ["h", "hB", "hb", "H"],
  KY: ["h", "hb", "H", "hB"],
  KZ: ["H", "hB"],
  LA: ["H", "hb", "hB", "h"],
  LB: ["h", "hB", "hb", "H"],
  LC: ["h", "hb", "H", "hB"],
  LI: ["H", "hB", "h"],
  LK: ["H", "h", "hB", "hb"],
  LR: ["h", "hb", "H", "hB"],
  LS: ["h", "H"],
  LT: ["H", "h", "hb", "hB"],
  LU: ["H", "h", "hB"],
  LV: ["H", "hB", "hb", "h"],
  LY: ["h", "hB", "hb", "H"],
  MA: ["H", "h", "hB", "hb"],
  MC: ["H", "hB"],
  MD: ["H", "hB"],
  ME: ["H", "hB", "h"],
  MF: ["H", "hB"],
  MG: ["H", "h"],
  MH: ["h", "hb", "H", "hB"],
  MK: ["H", "h", "hb", "hB"],
  ML: ["H"],
  MM: ["hB", "hb", "H", "h"],
  MN: ["H", "h", "hb", "hB"],
  MO: ["h", "hB", "hb", "H"],
  MP: ["h", "hb", "H", "hB"],
  MQ: ["H", "hB"],
  MR: ["h", "hB", "hb", "H"],
  MS: ["H", "h", "hb", "hB"],
  MT: ["H", "h"],
  MU: ["H", "h"],
  MV: ["H", "h"],
  MW: ["h", "hb", "H", "hB"],
  MX: ["h", "H", "hB", "hb"],
  MY: ["hb", "hB", "h", "H"],
  MZ: ["H", "hB"],
  NA: ["h", "H", "hB", "hb"],
  NC: ["H", "hB"],
  NE: ["H"],
  NF: ["H", "h", "hb", "hB"],
  NG: ["H", "h", "hb", "hB"],
  NI: ["h", "H", "hB", "hb"],
  NL: ["H", "hB"],
  NO: ["H", "h"],
  NP: ["H", "h", "hB"],
  NR: ["H", "h", "hb", "hB"],
  NU: ["H", "h", "hb", "hB"],
  NZ: ["h", "hb", "H", "hB"],
  OM: ["h", "hB", "hb", "H"],
  PA: ["h", "H", "hB", "hb"],
  PE: ["h", "H", "hB", "hb"],
  PF: ["H", "h", "hB"],
  PG: ["h", "H"],
  PH: ["h", "hB", "hb", "H"],
  PK: ["h", "hB", "H"],
  PL: ["H", "h"],
  PM: ["H", "hB"],
  PN: ["H", "h", "hb", "hB"],
  PR: ["h", "H", "hB", "hb"],
  PS: ["h", "hB", "hb", "H"],
  PT: ["H", "hB"],
  PW: ["h", "H"],
  PY: ["h", "H", "hB", "hb"],
  QA: ["h", "hB", "hb", "H"],
  RE: ["H", "hB"],
  RO: ["H", "hB"],
  RS: ["H", "hB", "h"],
  RU: ["H"],
  RW: ["H", "h"],
  SA: ["h", "hB", "hb", "H"],
  SB: ["h", "hb", "H", "hB"],
  SC: ["H", "h", "hB"],
  SD: ["h", "hB", "hb", "H"],
  SE: ["H"],
  SG: ["h", "hb", "H", "hB"],
  SH: ["H", "h", "hb", "hB"],
  SI: ["H", "hB"],
  SJ: ["H"],
  SK: ["H"],
  SL: ["h", "hb", "H", "hB"],
  SM: ["H", "h", "hB"],
  SN: ["H", "h", "hB"],
  SO: ["h", "H"],
  SR: ["H", "hB"],
  SS: ["h", "hb", "H", "hB"],
  ST: ["H", "hB"],
  SV: ["h", "H", "hB", "hb"],
  SX: ["H", "h", "hb", "hB"],
  SY: ["h", "hB", "hb", "H"],
  SZ: ["h", "hb", "H", "hB"],
  TA: ["H", "h", "hb", "hB"],
  TC: ["h", "hb", "H", "hB"],
  TD: ["h", "H", "hB"],
  TF: ["H", "h", "hB"],
  TG: ["H", "hB"],
  TH: ["H", "h"],
  TJ: ["H", "h"],
  TL: ["H", "hB", "hb", "h"],
  TM: ["H", "h"],
  TN: ["h", "hB", "hb", "H"],
  TO: ["h", "H"],
  TR: ["H", "hB"],
  TT: ["h", "hb", "H", "hB"],
  TW: ["hB", "hb", "h", "H"],
  TZ: ["hB", "hb", "H", "h"],
  UA: ["H", "hB", "h"],
  UG: ["hB", "hb", "H", "h"],
  UM: ["h", "hb", "H", "hB"],
  US: ["h", "hb", "H", "hB"],
  UY: ["h", "H", "hB", "hb"],
  UZ: ["H", "hB", "h"],
  VA: ["H", "h", "hB"],
  VC: ["h", "hb", "H", "hB"],
  VE: ["h", "H", "hB", "hb"],
  VG: ["h", "hb", "H", "hB"],
  VI: ["h", "hb", "H", "hB"],
  VN: ["H", "h"],
  VU: ["h", "H"],
  WF: ["H", "hB"],
  WS: ["h", "H"],
  XK: ["H", "hB", "h"],
  YE: ["h", "hB", "hb", "H"],
  YT: ["H", "hB"],
  ZA: ["H", "h", "hb", "hB"],
  ZM: ["h", "hb", "H", "hB"],
  ZW: ["H", "h"],
  "af-ZA": ["H", "h", "hB", "hb"],
  "ar-001": ["h", "hB", "hb", "H"],
  "ca-ES": ["H", "h", "hB"],
  "en-001": ["h", "hb", "H", "hB"],
  "en-HK": ["h", "hb", "H", "hB"],
  "en-IL": ["H", "h", "hb", "hB"],
  "en-MY": ["h", "hb", "H", "hB"],
  "es-BR": ["H", "h", "hB", "hb"],
  "es-ES": ["H", "h", "hB", "hb"],
  "es-GQ": ["H", "h", "hB", "hb"],
  "fr-CA": ["H", "h", "hB"],
  "gl-ES": ["H", "h", "hB"],
  "gu-IN": ["hB", "hb", "h", "H"],
  "hi-IN": ["hB", "h", "H"],
  "it-CH": ["H", "h", "hB"],
  "it-IT": ["H", "h", "hB"],
  "kn-IN": ["hB", "h", "H"],
  "ml-IN": ["hB", "h", "H"],
  "mr-IN": ["hB", "hb", "h", "H"],
  "pa-IN": ["hB", "hb", "h", "H"],
  "ta-IN": ["hB", "h", "hb", "H"],
  "te-IN": ["hB", "h", "H"],
  "zu-ZA": ["H", "hB", "hb", "h"]
};
function gv(t, r) {
  var i = "";
  for (var s = 0; s < t.length; s++) {
    var a = t.charAt(s);
    if (a === "j") {
      var c = 0;
      for (; s + 1 < t.length && t.charAt(s + 1) === a;) {
        c++;
        s++;
      }
      var d = 1 + (c & 1);
      var m = c < 2 ? 1 : 3 + (c >> 1);
      var h = "a";
      var g = yv(r);
      for ((g == "H" || g == "k") && (m = 0); m-- > 0;) {
        i += h;
      }
      while (d-- > 0) {
        i = g + i;
      }
    } else if (a === "J") {
      i += "H";
    } else {
      i += a;
    }
  }
  return i;
}
function yv(t) {
  var r = t.hourCycle;
  if (r === undefined && t.hourCycles && t.hourCycles.length) {
    r = t.hourCycles[0];
  }
  if (r) {
    switch (r) {
      case "h24":
        return "k";
      case "h23":
        return "H";
      case "h12":
        return "h";
      case "h11":
        return "K";
      default:
        throw new Error("Invalid hourCycle");
    }
  }
  var i = t.language;
  var s;
  if (i !== "root") {
    s = t.maximize().region;
  }
  var a = Wo[s || ""] || Wo[i || ""] || Wo[`${i}-001`] || Wo["001"];
  return a[0];
}
var vv = new RegExp(`^${_h.source}*`);
var _v = new RegExp(`${_h.source}*\$`);
function oe(t, r) {
  return {
    start: t,
    end: r
  };
}
var Ev = !!String.prototype.startsWith && "_a".startsWith("a", 1);
var Sv = !!String.fromCodePoint;
var wv = !!Object.fromEntries;
var xv = !!String.prototype.codePointAt;
var Tv = !!String.prototype.trimStart;
var Iv = !!String.prototype.trimEnd;
var Nv = !!Number.isSafeInteger;
var kv = Nv ? Number.isSafeInteger : function (t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
};
var Ma = true;
try {
  var Cv = Th("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Ma = Cv.exec("a")?.[0] === "a";
} catch {
  Ma = false;
}
var Ud = Ev ? function (r, i, s) {
  return r.startsWith(i, s);
} : function (r, i, s) {
  return r.slice(s, s + i.length) === i;
};
var Da = Sv ? String.fromCodePoint : function () {
  var r = [];
  for (var i = 0; i < arguments.length; i++) {
    r[i] = arguments[i];
  }
  var s = "";
  for (var a = r.length, c = 0, d; a > c;) {
    d = r[c++];
    if (d > 1114111) {
      throw RangeError(d + " is not a valid code point");
    }
    s += d < 65536 ? String.fromCharCode(d) : String.fromCharCode(((d -= 65536) >> 10) + 55296, d % 1024 + 56320);
  }
  return s;
};
var jd = wv ? Object.fromEntries : function (r) {
  var i = {};
  for (var s = 0, a = r; s < a.length; s++) {
    var c = a[s];
    var d = c[0];
    var m = c[1];
    i[d] = m;
  }
  return i;
};
var xh = xv ? function (r, i) {
  return r.codePointAt(i);
} : function (r, i) {
  var s = r.length;
  if (!(i < 0) && !(i >= s)) {
    var a = r.charCodeAt(i);
    var c;
    if (a < 55296 || a > 56319 || i + 1 === s || (c = r.charCodeAt(i + 1)) < 56320 || c > 57343) {
      return a;
    } else {
      return (a - 55296 << 10) + (c - 56320) + 65536;
    }
  }
};
var Pv = Tv ? function (r) {
  return r.trimStart();
} : function (r) {
  return r.replace(vv, "");
};
var Rv = Iv ? function (r) {
  return r.trimEnd();
} : function (r) {
  return r.replace(_v, "");
};
function Th(t, r) {
  return new RegExp(t, r);
}
var Fa;
if (Ma) {
  var zd = Th("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Fa = function (r, i) {
    zd.lastIndex = i;
    var a = zd.exec(r);
    return a[1] ?? "";
  };
} else {
  Fa = function (r, i) {
    var s = [];
    for (;;) {
      var a = xh(r, i);
      if (a === undefined || Ih(a) || bv(a)) {
        break;
      }
      s.push(a);
      i += a >= 65536 ? 2 : 1;
    }
    return Da.apply(undefined, s);
  };
}
var Lv = function () {
  function t(r, i = {}) {
    this.message = r;
    this.position = {
      offset: 0,
      line: 1,
      column: 1
    };
    this.ignoreTag = !!i.ignoreTag;
    this.locale = i.locale;
    this.requiresOtherClause = !!i.requiresOtherClause;
    this.shouldParseSkeletons = !!i.shouldParseSkeletons;
  }
  t.prototype.parse = function () {
    if (this.offset() !== 0) {
      throw Error("parser can only be used once");
    }
    return this.parseMessage(0, "", false);
  };
  t.prototype.parseMessage = function (r, i, s) {
    var a = [];
    for (; !this.isEOF();) {
      var c = this.char();
      if (c === 123) {
        var d = this.parseArgument(r, s);
        if (d.err) {
          return d;
        }
        a.push(d.val);
      } else {
        if (c === 125 && r > 0) {
          break;
        }
        if (c === 35 && (i === "plural" || i === "selectordinal")) {
          var m = this.clonePosition();
          this.bump();
          a.push({
            type: _e.pound,
            location: oe(m, this.clonePosition())
          });
        } else if (c === 60 && !this.ignoreTag && this.peek() === 47) {
          if (s) {
            break;
          }
          return this.error(re.UNMATCHED_CLOSING_TAG, oe(this.clonePosition(), this.clonePosition()));
        } else if (c === 60 && !this.ignoreTag && Ha(this.peek() || 0)) {
          var d = this.parseTag(r, i);
          if (d.err) {
            return d;
          }
          a.push(d.val);
        } else {
          var d = this.parseLiteral(r, i);
          if (d.err) {
            return d;
          }
          a.push(d.val);
        }
      }
    }
    return {
      val: a,
      err: null
    };
  };
  t.prototype.parseTag = function (r, i) {
    var s = this.clonePosition();
    this.bump();
    var a = this.parseTagName();
    this.bumpSpace();
    if (this.bumpIf("/>")) {
      return {
        val: {
          type: _e.literal,
          value: `<${a}/>`,
          location: oe(s, this.clonePosition())
        },
        err: null
      };
    }
    if (this.bumpIf(">")) {
      var c = this.parseMessage(r + 1, i, true);
      if (c.err) {
        return c;
      }
      var d = c.val;
      var m = this.clonePosition();
      if (this.bumpIf("</")) {
        if (this.isEOF() || !Ha(this.char())) {
          return this.error(re.INVALID_TAG, oe(m, this.clonePosition()));
        }
        var h = this.clonePosition();
        var g = this.parseTagName();
        if (a !== g) {
          return this.error(re.UNMATCHED_CLOSING_TAG, oe(h, this.clonePosition()));
        } else {
          this.bumpSpace();
          if (this.bumpIf(">")) {
            return {
              val: {
                type: _e.tag,
                value: a,
                children: d,
                location: oe(s, this.clonePosition())
              },
              err: null
            };
          } else {
            return this.error(re.INVALID_TAG, oe(m, this.clonePosition()));
          }
        }
      } else {
        return this.error(re.UNCLOSED_TAG, oe(s, this.clonePosition()));
      }
    } else {
      return this.error(re.INVALID_TAG, oe(s, this.clonePosition()));
    }
  };
  t.prototype.parseTagName = function () {
    var r = this.offset();
    for (this.bump(); !this.isEOF() && Av(this.char());) {
      this.bump();
    }
    return this.message.slice(r, this.offset());
  };
  t.prototype.parseLiteral = function (r, i) {
    var s = this.clonePosition();
    var a = "";
    while (true) {
      var c = this.tryParseQuote(i);
      if (c) {
        a += c;
        continue;
      }
      var d = this.tryParseUnquoted(r, i);
      if (d) {
        a += d;
        continue;
      }
      var m = this.tryParseLeftAngleBracket();
      if (m) {
        a += m;
        continue;
      }
      break;
    }
    var h = oe(s, this.clonePosition());
    return {
      val: {
        type: _e.literal,
        value: a,
        location: h
      },
      err: null
    };
  };
  t.prototype.tryParseLeftAngleBracket = function () {
    if (!this.isEOF() && this.char() === 60 && (this.ignoreTag || !Ov(this.peek() || 0))) {
      this.bump();
      return "<";
    } else {
      return null;
    }
  };
  t.prototype.tryParseQuote = function (r) {
    if (this.isEOF() || this.char() !== 39) {
      return null;
    }
    switch (this.peek()) {
      case 39:
        this.bump();
        this.bump();
        return "'";
      case 123:
      case 60:
      case 62:
      case 125:
        break;
      case 35:
        if (r === "plural" || r === "selectordinal") {
          break;
        }
        return null;
      default:
        return null;
    }
    this.bump();
    var i = [this.char()];
    for (this.bump(); !this.isEOF();) {
      var s = this.char();
      if (s === 39) {
        if (this.peek() === 39) {
          i.push(39);
          this.bump();
        } else {
          this.bump();
          break;
        }
      } else {
        i.push(s);
      }
      this.bump();
    }
    return Da.apply(undefined, i);
  };
  t.prototype.tryParseUnquoted = function (r, i) {
    if (this.isEOF()) {
      return null;
    }
    var s = this.char();
    if (s === 60 || s === 123 || s === 35 && (i === "plural" || i === "selectordinal") || s === 125 && r > 0) {
      return null;
    } else {
      this.bump();
      return Da(s);
    }
  };
  t.prototype.parseArgument = function (r, i) {
    var s = this.clonePosition();
    this.bump();
    this.bumpSpace();
    if (this.isEOF()) {
      return this.error(re.EXPECT_ARGUMENT_CLOSING_BRACE, oe(s, this.clonePosition()));
    }
    if (this.char() === 125) {
      this.bump();
      return this.error(re.EMPTY_ARGUMENT, oe(s, this.clonePosition()));
    }
    var a = this.parseIdentifierIfPossible().value;
    if (!a) {
      return this.error(re.MALFORMED_ARGUMENT, oe(s, this.clonePosition()));
    }
    this.bumpSpace();
    if (this.isEOF()) {
      return this.error(re.EXPECT_ARGUMENT_CLOSING_BRACE, oe(s, this.clonePosition()));
    }
    switch (this.char()) {
      case 125:
        this.bump();
        return {
          val: {
            type: _e.argument,
            value: a,
            location: oe(s, this.clonePosition())
          },
          err: null
        };
      case 44:
        this.bump();
        this.bumpSpace();
        if (this.isEOF()) {
          return this.error(re.EXPECT_ARGUMENT_CLOSING_BRACE, oe(s, this.clonePosition()));
        } else {
          return this.parseArgumentOptions(r, i, a, s);
        }
      default:
        return this.error(re.MALFORMED_ARGUMENT, oe(s, this.clonePosition()));
    }
  };
  t.prototype.parseIdentifierIfPossible = function () {
    var r = this.clonePosition();
    var i = this.offset();
    var s = Fa(this.message, i);
    var a = i + s.length;
    this.bumpTo(a);
    var c = this.clonePosition();
    var d = oe(r, c);
    return {
      value: s,
      location: d
    };
  };
  t.prototype.parseArgumentOptions = function (r, i, s, a) {
    var d = this.clonePosition();
    var m = this.parseIdentifierIfPossible().value;
    var h = this.clonePosition();
    switch (m) {
      case "":
        return this.error(re.EXPECT_ARGUMENT_TYPE, oe(d, h));
      case "number":
      case "date":
      case "time":
        {
          this.bumpSpace();
          var g = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var v = this.clonePosition();
            var S = this.parseSimpleArgStyleIfPossible();
            if (S.err) {
              return S;
            }
            var k = Rv(S.val);
            if (k.length === 0) {
              return this.error(re.EXPECT_ARGUMENT_STYLE, oe(this.clonePosition(), this.clonePosition()));
            }
            var I = oe(v, this.clonePosition());
            g = {
              style: k,
              styleLocation: I
            };
          }
          var M = this.tryParseArgumentClose(a);
          if (M.err) {
            return M;
          }
          var O = oe(a, this.clonePosition());
          if (g && Ud(g == null ? undefined : g.style, "::", 0)) {
            var H = Pv(g.style.slice(2));
            if (m === "number") {
              var S = this.parseNumberSkeletonFromString(H, g.styleLocation);
              if (S.err) {
                return S;
              } else {
                return {
                  val: {
                    type: _e.number,
                    value: s,
                    location: O,
                    style: S.val
                  },
                  err: null
                };
              }
            } else {
              if (H.length === 0) {
                return this.error(re.EXPECT_DATE_TIME_SKELETON, O);
              }
              var Z = H;
              if (this.locale) {
                Z = gv(H, this.locale);
              }
              var k = {
                type: Ir.dateTime,
                pattern: Z,
                location: g.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? lv(Z) : {}
              };
              var Q = m === "date" ? _e.date : _e.time;
              return {
                val: {
                  type: Q,
                  value: s,
                  location: O,
                  style: k
                },
                err: null
              };
            }
          }
          return {
            val: {
              type: m === "number" ? _e.number : m === "date" ? _e.date : _e.time,
              value: s,
              location: O,
              style: (g == null ? undefined : g.style) ?? null
            },
            err: null
          };
        }
      case "plural":
      case "selectordinal":
      case "select":
        {
          var q = this.clonePosition();
          this.bumpSpace();
          if (!this.bumpIf(",")) {
            return this.error(re.EXPECT_SELECT_ARGUMENT_OPTIONS, oe(q, $({}, q)));
          }
          this.bumpSpace();
          var ie = this.parseIdentifierIfPossible();
          var b = 0;
          if (m !== "select" && ie.value === "offset") {
            if (!this.bumpIf(":")) {
              return this.error(re.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, oe(this.clonePosition(), this.clonePosition()));
            }
            this.bumpSpace();
            var S = this.tryParseDecimalInteger(re.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, re.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (S.err) {
              return S;
            }
            this.bumpSpace();
            ie = this.parseIdentifierIfPossible();
            b = S.val;
          }
          var ce = this.tryParsePluralOrSelectOptions(r, m, i, ie);
          if (ce.err) {
            return ce;
          }
          var M = this.tryParseArgumentClose(a);
          if (M.err) {
            return M;
          }
          var Oe = oe(a, this.clonePosition());
          if (m === "select") {
            return {
              val: {
                type: _e.select,
                value: s,
                options: jd(ce.val),
                location: Oe
              },
              err: null
            };
          } else {
            return {
              val: {
                type: _e.plural,
                value: s,
                options: jd(ce.val),
                offset: b,
                pluralType: m === "plural" ? "cardinal" : "ordinal",
                location: Oe
              },
              err: null
            };
          }
        }
      default:
        return this.error(re.INVALID_ARGUMENT_TYPE, oe(d, h));
    }
  };
  t.prototype.tryParseArgumentClose = function (r) {
    if (this.isEOF() || this.char() !== 125) {
      return this.error(re.EXPECT_ARGUMENT_CLOSING_BRACE, oe(r, this.clonePosition()));
    } else {
      this.bump();
      return {
        val: true,
        err: null
      };
    }
  };
  t.prototype.parseSimpleArgStyleIfPossible = function () {
    var r = 0;
    var i = this.clonePosition();
    for (; !this.isEOF();) {
      var s = this.char();
      switch (s) {
        case 39:
          {
            this.bump();
            var a = this.clonePosition();
            if (!this.bumpUntil("'")) {
              return this.error(re.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, oe(a, this.clonePosition()));
            }
            this.bump();
            break;
          }
        case 123:
          {
            r += 1;
            this.bump();
            break;
          }
        case 125:
          {
            if (r > 0) {
              r -= 1;
            } else {
              return {
                val: this.message.slice(i.offset, this.offset()),
                err: null
              };
            }
            break;
          }
        default:
          this.bump();
          break;
      }
    }
    return {
      val: this.message.slice(i.offset, this.offset()),
      err: null
    };
  };
  t.prototype.parseNumberSkeletonFromString = function (r, i) {
    var s = [];
    try {
      s = fv(r);
    } catch {
      return this.error(re.INVALID_NUMBER_SKELETON, i);
    }
    return {
      val: {
        type: Ir.number,
        tokens: s,
        location: i,
        parsedOptions: this.shouldParseSkeletons ? mv(s) : {}
      },
      err: null
    };
  };
  t.prototype.tryParsePluralOrSelectOptions = function (r, i, s, a) {
    var c;
    var d = false;
    var m = [];
    var h = new Set();
    var g = a.value;
    var v = a.location;
    while (true) {
      if (g.length === 0) {
        var S = this.clonePosition();
        if (i !== "select" && this.bumpIf("=")) {
          var k = this.tryParseDecimalInteger(re.EXPECT_PLURAL_ARGUMENT_SELECTOR, re.INVALID_PLURAL_ARGUMENT_SELECTOR);
          if (k.err) {
            return k;
          }
          v = oe(S, this.clonePosition());
          g = this.message.slice(S.offset, this.offset());
        } else {
          break;
        }
      }
      if (h.has(g)) {
        return this.error(i === "select" ? re.DUPLICATE_SELECT_ARGUMENT_SELECTOR : re.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, v);
      }
      if (g === "other") {
        d = true;
      }
      this.bumpSpace();
      var I = this.clonePosition();
      if (!this.bumpIf("{")) {
        return this.error(i === "select" ? re.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : re.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, oe(this.clonePosition(), this.clonePosition()));
      }
      var M = this.parseMessage(r + 1, i, s);
      if (M.err) {
        return M;
      }
      var O = this.tryParseArgumentClose(I);
      if (O.err) {
        return O;
      }
      m.push([g, {
        value: M.val,
        location: oe(I, this.clonePosition())
      }]);
      h.add(g);
      this.bumpSpace();
      c = this.parseIdentifierIfPossible();
      g = c.value;
      v = c.location;
    }
    if (m.length === 0) {
      return this.error(i === "select" ? re.EXPECT_SELECT_ARGUMENT_SELECTOR : re.EXPECT_PLURAL_ARGUMENT_SELECTOR, oe(this.clonePosition(), this.clonePosition()));
    } else if (this.requiresOtherClause && !d) {
      return this.error(re.MISSING_OTHER_CLAUSE, oe(this.clonePosition(), this.clonePosition()));
    } else {
      return {
        val: m,
        err: null
      };
    }
  };
  t.prototype.tryParseDecimalInteger = function (r, i) {
    var s = 1;
    var a = this.clonePosition();
    if (!this.bumpIf("+")) {
      if (this.bumpIf("-")) {
        s = -1;
      }
    }
    var c = false;
    var d = 0;
    for (; !this.isEOF();) {
      var m = this.char();
      if (m >= 48 && m <= 57) {
        c = true;
        d = d * 10 + (m - 48);
        this.bump();
      } else {
        break;
      }
    }
    var h = oe(a, this.clonePosition());
    if (c) {
      d *= s;
      if (kv(d)) {
        return {
          val: d,
          err: null
        };
      } else {
        return this.error(i, h);
      }
    } else {
      return this.error(r, h);
    }
  };
  t.prototype.offset = function () {
    return this.position.offset;
  };
  t.prototype.isEOF = function () {
    return this.offset() === this.message.length;
  };
  t.prototype.clonePosition = function () {
    return {
      offset: this.position.offset,
      line: this.position.line,
      column: this.position.column
    };
  };
  t.prototype.char = function () {
    var r = this.position.offset;
    if (r >= this.message.length) {
      throw Error("out of bound");
    }
    var i = xh(this.message, r);
    if (i === undefined) {
      throw Error(`Offset ${r} is at invalid UTF-16 code unit boundary`);
    }
    return i;
  };
  t.prototype.error = function (r, i) {
    return {
      val: null,
      err: {
        kind: r,
        message: this.message,
        location: i
      }
    };
  };
  t.prototype.bump = function () {
    if (!this.isEOF()) {
      var r = this.char();
      if (r === 10) {
        this.position.line += 1;
        this.position.column = 1;
        this.position.offset += 1;
      } else {
        this.position.column += 1;
        this.position.offset += r < 65536 ? 1 : 2;
      }
    }
  };
  t.prototype.bumpIf = function (r) {
    if (Ud(this.message, r, this.offset())) {
      for (var i = 0; i < r.length; i++) {
        this.bump();
      }
      return true;
    }
    return false;
  };
  t.prototype.bumpUntil = function (r) {
    var i = this.offset();
    var s = this.message.indexOf(r, i);
    if (s >= 0) {
      this.bumpTo(s);
      return true;
    } else {
      this.bumpTo(this.message.length);
      return false;
    }
  };
  t.prototype.bumpTo = function (r) {
    if (this.offset() > r) {
      throw Error(`targetOffset ${r} must be greater than or equal to the current offset ${this.offset()}`);
    }
    for (r = Math.min(r, this.message.length);;) {
      var i = this.offset();
      if (i === r) {
        break;
      }
      if (i > r) {
        throw Error(`targetOffset ${r} is at invalid UTF-16 code unit boundary`);
      }
      this.bump();
      if (this.isEOF()) {
        break;
      }
    }
  };
  t.prototype.bumpSpace = function () {
    while (!this.isEOF() && Ih(this.char())) {
      this.bump();
    }
  };
  t.prototype.peek = function () {
    if (this.isEOF()) {
      return null;
    }
    var r = this.char();
    var i = this.offset();
    var s = this.message.charCodeAt(i + (r >= 65536 ? 2 : 1));
    return s ?? null;
  };
  return t;
}();
function Ha(t) {
  return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function Ov(t) {
  return Ha(t) || t === 47;
}
function Av(t) {
  return t === 45 || t === 46 || t >= 48 && t <= 57 || t === 95 || t >= 97 && t <= 122 || t >= 65 && t <= 90 || t == 183 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039;
}
function Ih(t) {
  return t >= 9 && t <= 13 || t === 32 || t === 133 || t >= 8206 && t <= 8207 || t === 8232 || t === 8233;
}
function bv(t) {
  return t >= 33 && t <= 35 || t === 36 || t >= 37 && t <= 39 || t === 40 || t === 41 || t === 42 || t === 43 || t === 44 || t === 45 || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || t === 91 || t === 92 || t === 93 || t === 94 || t === 96 || t === 123 || t === 124 || t === 125 || t === 126 || t === 161 || t >= 162 && t <= 165 || t === 166 || t === 167 || t === 169 || t === 171 || t === 172 || t === 174 || t === 176 || t === 177 || t === 182 || t === 187 || t === 191 || t === 215 || t === 247 || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || t === 8216 || t === 8217 || t === 8218 || t >= 8219 && t <= 8220 || t === 8221 || t === 8222 || t === 8223 || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || t === 8249 || t === 8250 || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || t === 8260 || t === 8261 || t === 8262 || t >= 8263 && t <= 8273 || t === 8274 || t === 8275 || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || t === 8608 || t >= 8609 && t <= 8610 || t === 8611 || t >= 8612 && t <= 8613 || t === 8614 || t >= 8615 && t <= 8621 || t === 8622 || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || t === 8658 || t === 8659 || t === 8660 || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || t === 8968 || t === 8969 || t === 8970 || t === 8971 || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9000 || t === 9001 || t === 9002 || t >= 9003 && t <= 9083 || t === 9084 || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || t === 9655 || t >= 9656 && t <= 9664 || t === 9665 || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || t === 9839 || t >= 9840 && t <= 10087 || t === 10088 || t === 10089 || t === 10090 || t === 10091 || t === 10092 || t === 10093 || t === 10094 || t === 10095 || t === 10096 || t === 10097 || t === 10098 || t === 10099 || t === 10100 || t === 10101 || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || t === 10181 || t === 10182 || t >= 10183 && t <= 10213 || t === 10214 || t === 10215 || t === 10216 || t === 10217 || t === 10218 || t === 10219 || t === 10220 || t === 10221 || t === 10222 || t === 10223 || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || t === 10627 || t === 10628 || t === 10629 || t === 10630 || t === 10631 || t === 10632 || t === 10633 || t === 10634 || t === 10635 || t === 10636 || t === 10637 || t === 10638 || t === 10639 || t === 10640 || t === 10641 || t === 10642 || t === 10643 || t === 10644 || t === 10645 || t === 10646 || t === 10647 || t === 10648 || t >= 10649 && t <= 10711 || t === 10712 || t === 10713 || t === 10714 || t === 10715 || t >= 10716 && t <= 10747 || t === 10748 || t === 10749 || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || t === 11158 || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || t === 11778 || t === 11779 || t === 11780 || t === 11781 || t >= 11782 && t <= 11784 || t === 11785 || t === 11786 || t === 11787 || t === 11788 || t === 11789 || t >= 11790 && t <= 11798 || t === 11799 || t >= 11800 && t <= 11801 || t === 11802 || t === 11803 || t === 11804 || t === 11805 || t >= 11806 && t <= 11807 || t === 11808 || t === 11809 || t === 11810 || t === 11811 || t === 11812 || t === 11813 || t === 11814 || t === 11815 || t === 11816 || t === 11817 || t >= 11818 && t <= 11822 || t === 11823 || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || t === 11840 || t === 11841 || t === 11842 || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || t === 11858 || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || t === 12296 || t === 12297 || t === 12298 || t === 12299 || t === 12300 || t === 12301 || t === 12302 || t === 12303 || t === 12304 || t === 12305 || t >= 12306 && t <= 12307 || t === 12308 || t === 12309 || t === 12310 || t === 12311 || t === 12312 || t === 12313 || t === 12314 || t === 12315 || t === 12316 || t === 12317 || t >= 12318 && t <= 12319 || t === 12320 || t === 12336 || t === 64830 || t === 64831 || t >= 65093 && t <= 65094;
}
function Ba(t) {
  t.forEach(function (r) {
    delete r.location;
    if (mh(r) || gh(r)) {
      for (var i in r.options) {
        delete r.options[i].location;
        Ba(r.options[i].value);
      }
    } else if (dh(r) && vh(r.style) || (ph(r) || hh(r)) && ba(r.style)) {
      delete r.style.location;
    } else if (yh(r)) {
      Ba(r.children);
    }
  });
}
function Mv(t, r = {}) {
  r = $({
    shouldParseSkeletons: true,
    requiresOtherClause: true
  }, r);
  var i = new Lv(t, r).parse();
  if (i.err) {
    var s = SyntaxError(re[i.err.kind]);
    s.location = i.err.location;
    s.originalMessage = i.err.message;
    throw s;
  }
  if (r == null || !r.captureLocation) {
    Ba(i.val);
  }
  return i.val;
}
var jt;
(function (t) {
  t.MISSING_VALUE = "MISSING_VALUE";
  t.INVALID_VALUE = "INVALID_VALUE";
  t.MISSING_INTL_API = "MISSING_INTL_API";
})(jt ||= {});
var kn = function (t) {
  He(r, t);
  function r(i, s, a) {
    var c = t.call(this, i) || this;
    c.code = s;
    c.originalMessage = a;
    return c;
  }
  r.prototype.toString = function () {
    return `[formatjs Error: ${this.code}] ${this.message}`;
  };
  return r;
}(Error);
var $d = function (t) {
  He(r, t);
  function r(i, s, a, c) {
    return t.call(this, `Invalid values for "${i}": "${s}". Options are "${Object.keys(a).join("\", \"")}"`, jt.INVALID_VALUE, c) || this;
  }
  return r;
}(kn);
var Dv = function (t) {
  He(r, t);
  function r(i, s, a) {
    return t.call(this, `Value for "${i}" must be of type ${s}`, jt.INVALID_VALUE, a) || this;
  }
  return r;
}(kn);
var Fv = function (t) {
  He(r, t);
  function r(i, s) {
    return t.call(this, `The intl string context variable "${i}" was not provided to the string "${s}"`, jt.MISSING_VALUE, s) || this;
  }
  return r;
}(kn);
var Ye;
(function (t) {
  t[t.literal = 0] = "literal";
  t[t.object = 1] = "object";
})(Ye ||= {});
function Hv(t) {
  if (t.length < 2) {
    return t;
  } else {
    return t.reduce(function (r, i) {
      var s = r[r.length - 1];
      if (!s || s.type !== Ye.literal || i.type !== Ye.literal) {
        r.push(i);
      } else {
        s.value += i.value;
      }
      return r;
    }, []);
  }
}
function Nh(t) {
  return typeof t == "function";
}
function es(t, r, i, s, a, c, d) {
  if (t.length === 1 && Dd(t[0])) {
    return [{
      type: Ye.literal,
      value: t[0].value
    }];
  }
  var m = [];
  for (var h = 0, g = t; h < g.length; h++) {
    var v = g[h];
    if (Dd(v)) {
      m.push({
        type: Ye.literal,
        value: v.value
      });
      continue;
    }
    if (uv(v)) {
      if (typeof c == "number") {
        m.push({
          type: Ye.literal,
          value: i.getNumberFormat(r).format(c)
        });
      }
      continue;
    }
    var S = v.value;
    if (!a || !(S in a)) {
      throw new Fv(S, d);
    }
    var k = a[S];
    if (sv(v)) {
      if (!k || typeof k == "string" || typeof k == "number") {
        k = typeof k == "string" || typeof k == "number" ? String(k) : "";
      }
      m.push({
        type: typeof k == "string" ? Ye.literal : Ye.object,
        value: k
      });
      continue;
    }
    if (ph(v)) {
      var I = typeof v.style == "string" ? s.date[v.style] : ba(v.style) ? v.style.parsedOptions : undefined;
      m.push({
        type: Ye.literal,
        value: i.getDateTimeFormat(r, I).format(k)
      });
      continue;
    }
    if (hh(v)) {
      var I = typeof v.style == "string" ? s.time[v.style] : ba(v.style) ? v.style.parsedOptions : s.time.medium;
      m.push({
        type: Ye.literal,
        value: i.getDateTimeFormat(r, I).format(k)
      });
      continue;
    }
    if (dh(v)) {
      var I = typeof v.style == "string" ? s.number[v.style] : vh(v.style) ? v.style.parsedOptions : undefined;
      if (I && I.scale) {
        k = k * (I.scale || 1);
      }
      m.push({
        type: Ye.literal,
        value: i.getNumberFormat(r, I).format(k)
      });
      continue;
    }
    if (yh(v)) {
      var M = v.children;
      var O = v.value;
      var H = a[O];
      if (!Nh(H)) {
        throw new Dv(O, "function", d);
      }
      var Z = es(M, r, i, s, a, c);
      var Q = H(Z.map(function (b) {
        return b.value;
      }));
      if (!Array.isArray(Q)) {
        Q = [Q];
      }
      m.push.apply(m, Q.map(function (b) {
        return {
          type: typeof b == "string" ? Ye.literal : Ye.object,
          value: b
        };
      }));
    }
    if (mh(v)) {
      var q = v.options[k] || v.options.other;
      if (!q) {
        throw new $d(v.value, k, Object.keys(v.options), d);
      }
      m.push.apply(m, es(q.value, r, i, s, a));
      continue;
    }
    if (gh(v)) {
      var q = v.options[`=${k}`];
      if (!q) {
        if (!Intl.PluralRules) {
          throw new kn(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, jt.MISSING_INTL_API, d);
        }
        var ie = i.getPluralRules(r, {
          type: v.pluralType
        }).select(k - (v.offset || 0));
        q = v.options[ie] || v.options.other;
      }
      if (!q) {
        throw new $d(v.value, k, Object.keys(v.options), d);
      }
      m.push.apply(m, es(q.value, r, i, s, a, k - (v.offset || 0)));
      continue;
    }
  }
  return Hv(m);
}
function Bv(t, r) {
  if (r) {
    return $($($({}, t || {}), r || {}), Object.keys(t).reduce(function (i, s) {
      i[s] = $($({}, t[s]), r[s] || {});
      return i;
    }, {}));
  } else {
    return t;
  }
}
function Uv(t, r) {
  if (r) {
    return Object.keys(t).reduce(function (i, s) {
      i[s] = Bv(t[s], r[s]);
      return i;
    }, $({}, t));
  } else {
    return t;
  }
}
function ya(t) {
  return {
    create: function () {
      return {
        get: function (r) {
          return t[r];
        },
        set: function (r, i) {
          t[r] = i;
        }
      };
    }
  };
}
function jv(t = {
  number: {},
  dateTime: {},
  pluralRules: {}
}) {
  return {
    getNumberFormat: Ht(function () {
      var r;
      var i = [];
      for (var s = 0; s < arguments.length; s++) {
        i[s] = arguments[s];
      }
      return new ((r = Intl.NumberFormat).bind.apply(r, qe([undefined], i, false)))();
    }, {
      cache: ya(t.number),
      strategy: Bt.variadic
    }),
    getDateTimeFormat: Ht(function () {
      var r;
      var i = [];
      for (var s = 0; s < arguments.length; s++) {
        i[s] = arguments[s];
      }
      return new ((r = Intl.DateTimeFormat).bind.apply(r, qe([undefined], i, false)))();
    }, {
      cache: ya(t.dateTime),
      strategy: Bt.variadic
    }),
    getPluralRules: Ht(function () {
      var r;
      var i = [];
      for (var s = 0; s < arguments.length; s++) {
        i[s] = arguments[s];
      }
      return new ((r = Intl.PluralRules).bind.apply(r, qe([undefined], i, false)))();
    }, {
      cache: ya(t.pluralRules),
      strategy: Bt.variadic
    })
  };
}
var kh = function () {
  function t(r, i = t.defaultLocale, s, a) {
    var c = this;
    this.formatterCache = {
      number: {},
      dateTime: {},
      pluralRules: {}
    };
    this.format = function (h) {
      var g = c.formatToParts(h);
      if (g.length === 1) {
        return g[0].value;
      }
      var v = g.reduce(function (S, k) {
        if (!S.length || k.type !== Ye.literal || typeof S[S.length - 1] != "string") {
          S.push(k.value);
        } else {
          S[S.length - 1] += k.value;
        }
        return S;
      }, []);
      if (v.length <= 1) {
        return v[0] || "";
      } else {
        return v;
      }
    };
    this.formatToParts = function (h) {
      return es(c.ast, c.locales, c.formatters, c.formats, h, undefined, c.message);
    };
    this.resolvedOptions = function () {
      var h;
      return {
        locale: ((h = c.resolvedLocale) === null || h === undefined ? undefined : h.toString()) || Intl.NumberFormat.supportedLocalesOf(c.locales)[0]
      };
    };
    this.getAst = function () {
      return c.ast;
    };
    this.locales = i;
    this.resolvedLocale = t.resolveLocale(i);
    if (typeof r == "string") {
      this.message = r;
      if (!t.__parse) {
        throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
      }
      var d = a || {};
      d.formatters;
      var m = as(d, ["formatters"]);
      this.ast = t.__parse(r, $($({}, m), {
        locale: this.resolvedLocale
      }));
    } else {
      this.ast = r;
    }
    if (!Array.isArray(this.ast)) {
      throw new TypeError("A message must be provided as a String or AST.");
    }
    this.formats = Uv(t.formats, s);
    this.formatters = a && a.formatters || jv(this.formatterCache);
  }
  Object.defineProperty(t, "defaultLocale", {
    get: function () {
      t.memoizedDefaultLocale ||= new Intl.NumberFormat().resolvedOptions().locale;
      return t.memoizedDefaultLocale;
    },
    enumerable: false,
    configurable: true
  });
  t.memoizedDefaultLocale = null;
  t.resolveLocale = function (r) {
    if (typeof Intl.Locale !== "undefined") {
      var i = Intl.NumberFormat.supportedLocalesOf(r);
      if (i.length > 0) {
        return new Intl.Locale(i[0]);
      } else {
        return new Intl.Locale(typeof r == "string" ? r : r[0]);
      }
    }
  };
  t.__parse = Mv;
  t.formats = {
    number: {
      integer: {
        maximumFractionDigits: 0
      },
      currency: {
        style: "currency"
      },
      percent: {
        style: "percent"
      }
    },
    date: {
      short: {
        month: "numeric",
        day: "numeric",
        year: "2-digit"
      },
      medium: {
        month: "short",
        day: "numeric",
        year: "numeric"
      },
      long: {
        month: "long",
        day: "numeric",
        year: "numeric"
      },
      full: {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
      }
    },
    time: {
      short: {
        hour: "numeric",
        minute: "numeric"
      },
      medium: {
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
      },
      long: {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short"
      },
      full: {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short"
      }
    }
  };
  return t;
}();
var Wn;
(function (t) {
  t.FORMAT_ERROR = "FORMAT_ERROR";
  t.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER";
  t.INVALID_CONFIG = "INVALID_CONFIG";
  t.MISSING_DATA = "MISSING_DATA";
  t.MISSING_TRANSLATION = "MISSING_TRANSLATION";
})(Wn ||= {});
var ki = function (t) {
  He(r, t);
  function r(i, s, a) {
    var c = this;
    var d = a ? a instanceof Error ? a : new Error(String(a)) : undefined;
    c = t.call(this, `[@formatjs/intl Error ${i}] ${s}
${d ? `
${d.message}
${d.stack}` : ""}`) || this;
    c.code = i;
    if (typeof Error.captureStackTrace == "function") {
      Error.captureStackTrace(c, r);
    }
    return c;
  }
  return r;
}(Error);
var zv = function (t) {
  He(r, t);
  function r(i, s) {
    return t.call(this, Wn.UNSUPPORTED_FORMATTER, i, s) || this;
  }
  return r;
}(ki);
var $v = function (t) {
  He(r, t);
  function r(i, s) {
    return t.call(this, Wn.INVALID_CONFIG, i, s) || this;
  }
  return r;
}(ki);
var Gd = function (t) {
  He(r, t);
  function r(i, s) {
    return t.call(this, Wn.MISSING_DATA, i, s) || this;
  }
  return r;
}(ki);
var St = function (t) {
  He(r, t);
  function r(i, s, a) {
    var c = t.call(this, Wn.FORMAT_ERROR, `${i}
Locale: ${s}
`, a) || this;
    c.locale = s;
    return c;
  }
  return r;
}(ki);
var va = function (t) {
  He(r, t);
  function r(i, s, a, c) {
    var d = t.call(this, `${i}
MessageID: ${a == null ? undefined : a.id}
Default Message: ${a == null ? undefined : a.defaultMessage}
Description: ${a == null ? undefined : a.description}
`, s, c) || this;
    d.descriptor = a;
    d.locale = s;
    return d;
  }
  return r;
}(St);
var Gv = function (t) {
  He(r, t);
  function r(i, s) {
    var a = t.call(this, Wn.MISSING_TRANSLATION, `Missing message: "${i.id}" for locale "${s}", using ${i.defaultMessage ? `default message (${typeof i.defaultMessage == "string" ? i.defaultMessage : i.defaultMessage.map(function (c) {
      return c.value ?? JSON.stringify(c);
    }).join()})` : "id"} as fallback.`) || this;
    a.descriptor = i;
    return a;
  }
  return r;
}(ki);
function Rr(t, r, i = {}) {
  return r.reduce(function (s, a) {
    if (a in t) {
      s[a] = t[a];
    } else if (a in i) {
      s[a] = i[a];
    }
    return s;
  }, {});
}
function Vv(t) {}
function Wv(t) {}
var Ch = {
  formats: {},
  messages: {},
  timeZone: undefined,
  defaultLocale: "en",
  defaultFormats: {},
  fallbackOnEmptyString: true,
  onError: Vv,
  onWarn: Wv
};
function al() {
  return {
    dateTime: {},
    number: {},
    message: {},
    relativeTime: {},
    pluralRules: {},
    list: {},
    displayNames: {}
  };
}
function $n(t) {
  return {
    create: function () {
      return {
        get: function (r) {
          return t[r];
        },
        set: function (r, i) {
          t[r] = i;
        }
      };
    }
  };
}
function Xv(t = al()) {
  var r = Intl.RelativeTimeFormat;
  var i = Intl.ListFormat;
  var s = Intl.DisplayNames;
  var a = Ht(function () {
    var m;
    var h = [];
    for (var g = 0; g < arguments.length; g++) {
      h[g] = arguments[g];
    }
    return new ((m = Intl.DateTimeFormat).bind.apply(m, qe([undefined], h, false)))();
  }, {
    cache: $n(t.dateTime),
    strategy: Bt.variadic
  });
  var c = Ht(function () {
    var m;
    var h = [];
    for (var g = 0; g < arguments.length; g++) {
      h[g] = arguments[g];
    }
    return new ((m = Intl.NumberFormat).bind.apply(m, qe([undefined], h, false)))();
  }, {
    cache: $n(t.number),
    strategy: Bt.variadic
  });
  var d = Ht(function () {
    var m;
    var h = [];
    for (var g = 0; g < arguments.length; g++) {
      h[g] = arguments[g];
    }
    return new ((m = Intl.PluralRules).bind.apply(m, qe([undefined], h, false)))();
  }, {
    cache: $n(t.pluralRules),
    strategy: Bt.variadic
  });
  return {
    getDateTimeFormat: a,
    getNumberFormat: c,
    getMessageFormat: Ht(function (m, h, g, v) {
      return new kh(m, h, g, $({
        formatters: {
          getNumberFormat: c,
          getDateTimeFormat: a,
          getPluralRules: d
        }
      }, v || {}));
    }, {
      cache: $n(t.message),
      strategy: Bt.variadic
    }),
    getRelativeTimeFormat: Ht(function () {
      var m = [];
      for (var h = 0; h < arguments.length; h++) {
        m[h] = arguments[h];
      }
      return new (r.bind.apply(r, qe([undefined], m, false)))();
    }, {
      cache: $n(t.relativeTime),
      strategy: Bt.variadic
    }),
    getPluralRules: d,
    getListFormat: Ht(function () {
      var m = [];
      for (var h = 0; h < arguments.length; h++) {
        m[h] = arguments[h];
      }
      return new (i.bind.apply(i, qe([undefined], m, false)))();
    }, {
      cache: $n(t.list),
      strategy: Bt.variadic
    }),
    getDisplayNames: Ht(function () {
      var m = [];
      for (var h = 0; h < arguments.length; h++) {
        m[h] = arguments[h];
      }
      return new (s.bind.apply(s, qe([undefined], m, false)))();
    }, {
      cache: $n(t.displayNames),
      strategy: Bt.variadic
    })
  };
}
function ll(t, r, i, s) {
  var a = t && t[r];
  var c;
  if (a) {
    c = a[i];
  }
  if (c) {
    return c;
  }
  s(new zv(`No ${r} format named: ${i}`));
}
function Xo(t, r) {
  return Object.keys(t).reduce(function (i, s) {
    i[s] = $({
      timeZone: r
    }, t[s]);
    return i;
  }, {});
}
function Vd(t, r) {
  var i = Object.keys($($({}, t), r));
  return i.reduce(function (s, a) {
    s[a] = $($({}, t[a] || {}), r[a] || {});
    return s;
  }, {});
}
function Wd(t, r) {
  if (!r) {
    return t;
  }
  var i = kh.formats;
  return $($($({}, i), t), {
    date: Vd(Xo(i.date, r), Xo(t.date || {}, r)),
    time: Vd(Xo(i.time, r), Xo(t.time || {}, r))
  });
}
function Ua(t, r, i, s, a) {
  var c = t.locale;
  var d = t.formats;
  var m = t.messages;
  var h = t.defaultLocale;
  var g = t.defaultFormats;
  var v = t.fallbackOnEmptyString;
  var S = t.onError;
  var k = t.timeZone;
  var I = t.defaultRichTextElements;
  if (i === undefined) {
    i = {
      id: ""
    };
  }
  var M = i.id;
  var O = i.defaultMessage;
  if (!M) {
    var H = new Error("[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
    throw H;
  }
  var Z = String(M);
  var Q = m && Object.prototype.hasOwnProperty.call(m, Z) && m[Z];
  if (Array.isArray(Q) && Q.length === 1 && Q[0].type === _e.literal) {
    return Q[0].value;
  }
  if (!s && Q && typeof Q == "string" && !I) {
    return Q.replace(/'\{(.*?)\}'/gi, "{$1}");
  }
  s = $($({}, I), s || {});
  d = Wd(d, k);
  g = Wd(g, k);
  if (!Q) {
    if (v === false && Q === "") {
      return Q;
    }
    if (!O || c && c.toLowerCase() !== h.toLowerCase()) {
      S(new Gv(i, c));
    }
    if (O) {
      try {
        var q = r.getMessageFormat(O, h, g, a);
        return q.format(s);
      } catch (ie) {
        S(new va(`Error formatting default message for: "${Z}", rendering default message verbatim`, c, i, ie));
        if (typeof O == "string") {
          return O;
        } else {
          return Z;
        }
      }
    }
    return Z;
  }
  try {
    var q = r.getMessageFormat(Q, c, d, $({
      formatters: r
    }, a || {}));
    return q.format(s);
  } catch (ie) {
    S(new va(`Error formatting message: "${Z}", using ${O ? "default message" : "id"} as fallback.`, c, i, ie));
  }
  if (O) {
    try {
      var q = r.getMessageFormat(O, h, g, a);
      return q.format(s);
    } catch (ie) {
      S(new va(`Error formatting the default message for: "${Z}", rendering message verbatim`, c, i, ie));
    }
  }
  if (typeof Q == "string") {
    return Q;
  } else if (typeof O == "string") {
    return O;
  } else {
    return Z;
  }
}
var Yv = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];
function Ci(t, r, i, s) {
  var a = t.locale;
  var c = t.formats;
  var d = t.onError;
  var m = t.timeZone;
  if (s === undefined) {
    s = {};
  }
  var h = s.format;
  var g = $($({}, m && {
    timeZone: m
  }), h && ll(c, r, h, d));
  var v = Rr(s, Yv, g);
  if (r === "time" && !v.hour && !v.minute && !v.second && !v.timeStyle && !v.dateStyle) {
    v = $($({}, v), {
      hour: "numeric",
      minute: "numeric"
    });
  }
  return i(a, v);
}
function qv(t, r) {
  var i = [];
  for (var s = 2; s < arguments.length; s++) {
    i[s - 2] = arguments[s];
  }
  var a = i[0];
  var c = i[1];
  var d = c === undefined ? {} : c;
  var m = typeof a == "string" ? new Date(a || 0) : a;
  try {
    return Ci(t, "date", r, d).format(m);
  } catch (h) {
    t.onError(new St("Error formatting date.", t.locale, h));
  }
  return String(m);
}
function Kv(t, r) {
  var i = [];
  for (var s = 2; s < arguments.length; s++) {
    i[s - 2] = arguments[s];
  }
  var a = i[0];
  var c = i[1];
  var d = c === undefined ? {} : c;
  var m = typeof a == "string" ? new Date(a || 0) : a;
  try {
    return Ci(t, "time", r, d).format(m);
  } catch (h) {
    t.onError(new St("Error formatting time.", t.locale, h));
  }
  return String(m);
}
function Qv(t, r) {
  var i = [];
  for (var s = 2; s < arguments.length; s++) {
    i[s - 2] = arguments[s];
  }
  var a = i[0];
  var c = i[1];
  var d = i[2];
  var m = d === undefined ? {} : d;
  var h = typeof a == "string" ? new Date(a || 0) : a;
  var g = typeof c == "string" ? new Date(c || 0) : c;
  try {
    return Ci(t, "dateTimeRange", r, m).formatRange(h, g);
  } catch (v) {
    t.onError(new St("Error formatting date time range.", t.locale, v));
  }
  return String(h);
}
function Zv(t, r) {
  var i = [];
  for (var s = 2; s < arguments.length; s++) {
    i[s - 2] = arguments[s];
  }
  var a = i[0];
  var c = i[1];
  var d = c === undefined ? {} : c;
  var m = typeof a == "string" ? new Date(a || 0) : a;
  try {
    return Ci(t, "date", r, d).formatToParts(m);
  } catch (h) {
    t.onError(new St("Error formatting date.", t.locale, h));
  }
  return [];
}
function Jv(t, r) {
  var i = [];
  for (var s = 2; s < arguments.length; s++) {
    i[s - 2] = arguments[s];
  }
  var a = i[0];
  var c = i[1];
  var d = c === undefined ? {} : c;
  var m = typeof a == "string" ? new Date(a || 0) : a;
  try {
    return Ci(t, "time", r, d).formatToParts(m);
  } catch (h) {
    t.onError(new St("Error formatting time.", t.locale, h));
  }
  return [];
}
var e0 = ["style", "type", "fallback", "languageDisplay"];
function t0(t, r, i, s) {
  var a = t.locale;
  var c = t.onError;
  var d = Intl.DisplayNames;
  if (!d) {
    c(new kn(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`, jt.MISSING_INTL_API));
  }
  var m = Rr(s, e0);
  try {
    return r(a, m).of(i);
  } catch (h) {
    c(new St("Error formatting display name.", a, h));
  }
}
var n0 = ["type", "style"];
var Xd = Date.now();
function r0(t) {
  return `${Xd}_${t}_${Xd}`;
}
function i0(t, r, i, s = {}) {
  var a = Ph(t, r, i, s).reduce(function (c, d) {
    var m = d.value;
    if (typeof m != "string") {
      c.push(m);
    } else if (typeof c[c.length - 1] == "string") {
      c[c.length - 1] += m;
    } else {
      c.push(m);
    }
    return c;
  }, []);
  if (a.length === 1) {
    return a[0];
  } else if (a.length === 0) {
    return "";
  } else {
    return a;
  }
}
function Ph(t, r, i, s) {
  var a = t.locale;
  var c = t.onError;
  if (s === undefined) {
    s = {};
  }
  var d = Intl.ListFormat;
  if (!d) {
    c(new kn(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`, jt.MISSING_INTL_API));
  }
  var m = Rr(s, n0);
  try {
    var h = {};
    var g = i.map(function (v, S) {
      if (typeof v == "object") {
        var k = r0(S);
        h[k] = v;
        return k;
      }
      return String(v);
    });
    return r(a, m).formatToParts(g).map(function (v) {
      if (v.type === "literal") {
        return v;
      } else {
        return $($({}, v), {
          value: h[v.value] || v.value
        });
      }
    });
  } catch (v) {
    c(new St("Error formatting list.", a, v));
  }
  return i;
}
var o0 = ["type"];
function s0(t, r, i, s) {
  var a = t.locale;
  var c = t.onError;
  if (s === undefined) {
    s = {};
  }
  if (!Intl.PluralRules) {
    c(new kn(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, jt.MISSING_INTL_API));
  }
  var d = Rr(s, o0);
  try {
    return r(a, d).select(i);
  } catch (m) {
    c(new St("Error formatting plural.", a, m));
  }
  return "other";
}
var u0 = ["numeric", "style"];
function a0(t, r, i) {
  var s = t.locale;
  var a = t.formats;
  var c = t.onError;
  if (i === undefined) {
    i = {};
  }
  var d = i.format;
  var m = !!d && ll(a, "relative", d, c) || {};
  var h = Rr(i, u0, m);
  return r(s, h);
}
function l0(t, r, i, s, a = {}) {
  s ||= "second";
  var c = Intl.RelativeTimeFormat;
  if (!c) {
    t.onError(new kn(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`, jt.MISSING_INTL_API));
  }
  try {
    return a0(t, r, a).format(i, s);
  } catch (d) {
    t.onError(new St("Error formatting relative time.", t.locale, d));
  }
  return String(i);
}
var c0 = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];
function Rh(t, r, i) {
  var s = t.locale;
  var a = t.formats;
  var c = t.onError;
  if (i === undefined) {
    i = {};
  }
  var d = i.format;
  var m = d && ll(a, "number", d, c) || {};
  var h = Rr(i, c0, m);
  return r(s, h);
}
function f0(t, r, i, s = {}) {
  try {
    return Rh(t, r, s).format(i);
  } catch (a) {
    t.onError(new St("Error formatting number.", t.locale, a));
  }
  return String(i);
}
function d0(t, r, i, s = {}) {
  try {
    return Rh(t, r, s).formatToParts(i);
  } catch (a) {
    t.onError(new St("Error formatting number.", t.locale, a));
  }
  return [];
}
function p0(t) {
  var r = t ? t[Object.keys(t)[0]] : undefined;
  return typeof r == "string";
}
function h0(t) {
  if (t.onWarn && t.defaultRichTextElements && p0(t.messages || {})) {
    t.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`);
  }
}
function Lh(t, r) {
  var i = Xv(r);
  var s = $($({}, Ch), t);
  var a = s.locale;
  var c = s.defaultLocale;
  var d = s.onError;
  if (a) {
    if (!Intl.NumberFormat.supportedLocalesOf(a).length && d) {
      d(new Gd(`Missing locale data for locale: "${a}" in Intl.NumberFormat. Using default locale: "${c}" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details`));
    } else if (!Intl.DateTimeFormat.supportedLocalesOf(a).length && d) {
      d(new Gd(`Missing locale data for locale: "${a}" in Intl.DateTimeFormat. Using default locale: "${c}" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details`));
    }
  } else {
    if (d) {
      d(new $v(`"locale" was not configured, using "${c}" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details`));
    }
    s.locale = s.defaultLocale || "en";
  }
  h0(s);
  return $($({}, s), {
    formatters: i,
    formatNumber: f0.bind(null, s, i.getNumberFormat),
    formatNumberToParts: d0.bind(null, s, i.getNumberFormat),
    formatRelativeTime: l0.bind(null, s, i.getRelativeTimeFormat),
    formatDate: qv.bind(null, s, i.getDateTimeFormat),
    formatDateToParts: Zv.bind(null, s, i.getDateTimeFormat),
    formatTime: Kv.bind(null, s, i.getDateTimeFormat),
    formatDateTimeRange: Qv.bind(null, s, i.getDateTimeFormat),
    formatTimeToParts: Jv.bind(null, s, i.getDateTimeFormat),
    formatPlural: s0.bind(null, s, i.getPluralRules),
    formatMessage: Ua.bind(null, s, i),
    $t: Ua.bind(null, s, i),
    formatList: i0.bind(null, s, i.getListFormat),
    formatListToParts: Ph.bind(null, s, i.getListFormat),
    formatDisplayName: t0.bind(null, s, i.getDisplayNames)
  });
}
function m0(t, r, i = Error) {
  if (!t) {
    throw new i(r);
  }
}
function Oh(t) {
  m0(t, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
var Ah = $($({}, Ch), {
  textComponent: Ze.Fragment
});
var g0 = {
  key: 42
};
function y0(t) {
  if (Ze.isValidElement(t)) {
    return Ze.createElement(Ze.Fragment, g0, t);
  } else {
    return t;
  }
}
function v0(t) {
  return Ze.Children.map(t, y0) ?? [];
}
function _0(t) {
  return function (r) {
    return t(Ze.Children.toArray(r));
  };
}
function E0(t, r) {
  if (t === r) {
    return true;
  }
  if (!t || !r) {
    return false;
  }
  var i = Object.keys(t);
  var s = Object.keys(r);
  var a = i.length;
  if (s.length !== a) {
    return false;
  }
  for (var c = 0; c < a; c++) {
    var d = i[c];
    if (t[d] !== r[d] || !Object.prototype.hasOwnProperty.call(r, d)) {
      return false;
    }
  }
  return true;
}
var _a = {
  exports: {}
};
var fe = {};
/** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Yd;
function S0() {
  if (Yd) {
    return fe;
  }
  Yd = 1;
  var t = typeof Symbol == "function" && Symbol.for;
  var r = t ? Symbol.for("react.element") : 60103;
  var i = t ? Symbol.for("react.portal") : 60106;
  var s = t ? Symbol.for("react.fragment") : 60107;
  var a = t ? Symbol.for("react.strict_mode") : 60108;
  var c = t ? Symbol.for("react.profiler") : 60114;
  var d = t ? Symbol.for("react.provider") : 60109;
  var m = t ? Symbol.for("react.context") : 60110;
  var h = t ? Symbol.for("react.async_mode") : 60111;
  var g = t ? Symbol.for("react.concurrent_mode") : 60111;
  var v = t ? Symbol.for("react.forward_ref") : 60112;
  var S = t ? Symbol.for("react.suspense") : 60113;
  var k = t ? Symbol.for("react.suspense_list") : 60120;
  var I = t ? Symbol.for("react.memo") : 60115;
  var M = t ? Symbol.for("react.lazy") : 60116;
  var O = t ? Symbol.for("react.block") : 60121;
  var H = t ? Symbol.for("react.fundamental") : 60117;
  var Z = t ? Symbol.for("react.responder") : 60118;
  var Q = t ? Symbol.for("react.scope") : 60119;
  function q(b) {
    if (typeof b == "object" && b !== null) {
      var ce = b.$$typeof;
      switch (ce) {
        case r:
          b = b.type;
          switch (b) {
            case h:
            case g:
            case s:
            case c:
            case a:
            case S:
              return b;
            default:
              b = b && b.$$typeof;
              switch (b) {
                case m:
                case v:
                case M:
                case I:
                case d:
                  return b;
                default:
                  return ce;
              }
          }
        case i:
          return ce;
      }
    }
  }
  function ie(b) {
    return q(b) === g;
  }
  fe.AsyncMode = h;
  fe.ConcurrentMode = g;
  fe.ContextConsumer = m;
  fe.ContextProvider = d;
  fe.Element = r;
  fe.ForwardRef = v;
  fe.Fragment = s;
  fe.Lazy = M;
  fe.Memo = I;
  fe.Portal = i;
  fe.Profiler = c;
  fe.StrictMode = a;
  fe.Suspense = S;
  fe.isAsyncMode = function (b) {
    return ie(b) || q(b) === h;
  };
  fe.isConcurrentMode = ie;
  fe.isContextConsumer = function (b) {
    return q(b) === m;
  };
  fe.isContextProvider = function (b) {
    return q(b) === d;
  };
  fe.isElement = function (b) {
    return typeof b == "object" && b !== null && b.$$typeof === r;
  };
  fe.isForwardRef = function (b) {
    return q(b) === v;
  };
  fe.isFragment = function (b) {
    return q(b) === s;
  };
  fe.isLazy = function (b) {
    return q(b) === M;
  };
  fe.isMemo = function (b) {
    return q(b) === I;
  };
  fe.isPortal = function (b) {
    return q(b) === i;
  };
  fe.isProfiler = function (b) {
    return q(b) === c;
  };
  fe.isStrictMode = function (b) {
    return q(b) === a;
  };
  fe.isSuspense = function (b) {
    return q(b) === S;
  };
  fe.isValidElementType = function (b) {
    return typeof b == "string" || typeof b == "function" || b === s || b === g || b === c || b === a || b === S || b === k || typeof b == "object" && b !== null && (b.$$typeof === M || b.$$typeof === I || b.$$typeof === d || b.$$typeof === m || b.$$typeof === v || b.$$typeof === H || b.$$typeof === Z || b.$$typeof === Q || b.$$typeof === O);
  };
  fe.typeOf = q;
  return fe;
}
var qd;
function w0() {
  if (!qd) {
    qd = 1;
    _a.exports = S0();
  }
  return _a.exports;
}
var Ea;
var Kd;
function x0() {
  if (Kd) {
    return Ea;
  }
  Kd = 1;
  var t = w0();
  var r = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
  };
  var i = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
  };
  var s = {
    $$typeof: true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  };
  var a = {
    $$typeof: true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  };
  var c = {
    [t.ForwardRef]: s,
    [t.Memo]: a
  };
  function d(M) {
    if (t.isMemo(M)) {
      return a;
    } else {
      return c[M.$$typeof] || r;
    }
  }
  var m = Object.defineProperty;
  var h = Object.getOwnPropertyNames;
  var g = Object.getOwnPropertySymbols;
  var v = Object.getOwnPropertyDescriptor;
  var S = Object.getPrototypeOf;
  var k = Object.prototype;
  function I(M, O, H) {
    if (typeof O != "string") {
      if (k) {
        var Z = S(O);
        if (Z && Z !== k) {
          I(M, Z, H);
        }
      }
      var Q = h(O);
      if (g) {
        Q = Q.concat(g(O));
      }
      var q = d(M);
      var ie = d(O);
      for (var b = 0; b < Q.length; ++b) {
        var ce = Q[b];
        if (!i[ce] && (!H || !H[ce]) && (!ie || !ie[ce]) && (!q || !q[ce])) {
          var Oe = v(O, ce);
          try {
            m(M, ce, Oe);
          } catch {}
        }
      }
    }
    return M;
  }
  Ea = I;
  return Ea;
}
x0();
var cl = typeof window !== "undefined" && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ ||= Ze.createContext(null) : Ze.createContext(null);
cl.Consumer;
var T0 = cl.Provider;
var I0 = T0;
var N0 = cl;
function bh() {
  var t = Ze.useContext(N0);
  Oh(t);
  return t;
}
var ja;
(function (t) {
  t.formatDate = "FormattedDate";
  t.formatTime = "FormattedTime";
  t.formatNumber = "FormattedNumber";
  t.formatList = "FormattedList";
  t.formatDisplayName = "FormattedDisplayName";
})(ja ||= {});
var za;
(function (t) {
  t.formatDate = "FormattedDateParts";
  t.formatTime = "FormattedTimeParts";
  t.formatNumber = "FormattedNumberParts";
  t.formatList = "FormattedListParts";
})(za ||= {});
function Mh(t) {
  function r(i) {
    var s = bh();
    var a = i.value;
    var c = i.children;
    var d = as(i, ["value", "children"]);
    var m = typeof a == "string" ? new Date(a || 0) : a;
    var h = t === "formatDate" ? s.formatDateToParts(m, d) : s.formatTimeToParts(m, d);
    return c(h);
  }
  r.displayName = za[t];
  return r;
}
function Pi(t) {
  function r(i) {
    var s = bh();
    var a = i.value;
    var c = i.children;
    var d = as(i, ["value", "children"]);
    var m = s[t](a, d);
    if (typeof c == "function") {
      return c(m);
    }
    var h = s.textComponent || Ze.Fragment;
    return Ze.createElement(h, null, m);
  }
  r.displayName = ja[t];
  return r;
}
function Dh(t) {
  return t && Object.keys(t).reduce(function (r, i) {
    var s = t[i];
    r[i] = Nh(s) ? _0(s) : s;
    return r;
  }, {});
}
function Qd(t, r, i, s) {
  var a = [];
  for (var c = 4; c < arguments.length; c++) {
    a[c - 4] = arguments[c];
  }
  var d = Dh(s);
  var m = Ua.apply(undefined, qe([t, r, i, d], a, false));
  if (Array.isArray(m)) {
    return v0(m);
  } else {
    return m;
  }
}
function Zd(t, r) {
  var i = t.defaultRichTextElements;
  var s = as(t, ["defaultRichTextElements"]);
  var a = Dh(i);
  var c = Lh($($($({}, Ah), s), {
    defaultRichTextElements: a
  }), r);
  var d = {
    locale: c.locale,
    timeZone: c.timeZone,
    fallbackOnEmptyString: c.fallbackOnEmptyString,
    formats: c.formats,
    defaultLocale: c.defaultLocale,
    defaultFormats: c.defaultFormats,
    messages: c.messages,
    onError: c.onError,
    defaultRichTextElements: a
  };
  return $($({}, c), {
    formatMessage: Qd.bind(null, d, c.formatters),
    $t: Qd.bind(null, d, c.formatters)
  });
}
function Sa(t) {
  return {
    locale: t.locale,
    timeZone: t.timeZone,
    fallbackOnEmptyString: t.fallbackOnEmptyString,
    formats: t.formats,
    textComponent: t.textComponent,
    messages: t.messages,
    defaultLocale: t.defaultLocale,
    defaultFormats: t.defaultFormats,
    onError: t.onError,
    onWarn: t.onWarn,
    wrapRichTextChunksInFragment: t.wrapRichTextChunksInFragment,
    defaultRichTextElements: t.defaultRichTextElements
  };
}
var _Component = function (t) {
  He(r, t);
  function r() {
    var i = t !== null && t.apply(this, arguments) || this;
    i.cache = al();
    i.state = {
      cache: i.cache,
      intl: Zd(Sa(i.props), i.cache),
      prevConfig: Sa(i.props)
    };
    return i;
  }
  r.getDerivedStateFromProps = function (i, s) {
    var a = s.prevConfig;
    var c = s.cache;
    var d = Sa(i);
    if (E0(a, d)) {
      return null;
    } else {
      return {
        intl: Zd(d, c),
        prevConfig: d
      };
    }
  };
  r.prototype.render = function () {
    Oh(this.state.intl);
    return Ze.createElement(I0, {
      value: this.state.intl
    }, this.props.children);
  };
  r.displayName = "IntlProvider";
  r.defaultProps = Ah;
  return r;
}(Ze.PureComponent);
Pi("formatDate");
Pi("formatTime");
Pi("formatNumber");
Pi("formatList");
Pi("formatDisplayName");
Mh("formatDate");
Mh("formatTime");
var nh;
const Ke = (nh = globalThis["claude.hybrid"]) == null ? undefined : nh.DesktopIntl;
var rh;
const C0 = ((rh = Ke == null ? undefined : Ke.getInitialLocale) == null ? undefined : rh.call(Ke)) ?? Promise.reject(new Error("DesktopIntl bridge is not exposed in this window"));
const Fh = C0.then(({
  locale: t,
  messages: r
}) => ({
  locale: t,
  messages: r
})).catch(t => {
  console.error("getInitialLocale failed", t);
  return {
    locale: "en-US",
    messages: {}
  };
});
function P0(t) {
  const [r, i] = Ze.useState(null);
  Ze.useEffect(() => {
    var s;
    Fh.then(a => i(c => c ?? a));
    if ((s = Ke == null ? undefined : Ke.onLocaleChanged) == null) {
      return undefined;
    } else {
      return s.call(Ke, (a, c) => {
        i({
          locale: a,
          messages: c
        });
      });
    }
  }, []);
  if (r === null) {
    return null;
  } else {
    return <_Component locale={r.locale} messages={r.messages} {...t} />;
  }
}
async function R0(t, r, i) {
  const s = await r;
  const _Component2 = "default" in s ? s.default : s;
  const c = qy.createRoot(t);
  const d = i ?? {};
  c.render(<P0><_Component2 {...d} /></P0>);
  return () => {
    c.unmount();
  };
}
window.attachReactToElement = R0;
const J = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const he = globalThis;
const Vn = "10.27.0";
function ls() {
  cs(he);
  return he;
}
function cs(t) {
  const r = t.__SENTRY__ = t.__SENTRY__ || {};
  r.version = r.version || Vn;
  return r[Vn] = r[Vn] || {};
}
function Lr(t, r, i = he) {
  const s = i.__SENTRY__ = i.__SENTRY__ || {};
  const a = s[Vn] = s[Vn] || {};
  return a[t] ||= r();
}
const L0 = ["debug", "info", "warn", "error", "log", "assert", "trace"];
const O0 = "Sentry Logger ";
const os = {};
function Or(t) {
  if (!("console" in he)) {
    return t();
  }
  const r = he.console;
  const i = {};
  const s = Object.keys(os);
  s.forEach(a => {
    const c = os[a];
    i[a] = r[a];
    r[a] = c;
  });
  try {
    return t();
  } finally {
    s.forEach(a => {
      r[a] = i[a];
    });
  }
}
function A0() {
  dl().enabled = true;
}
function b0() {
  dl().enabled = false;
}
function Hh() {
  return dl().enabled;
}
function M0(...t) {
  fl("log", ...t);
}
function D0(...t) {
  fl("warn", ...t);
}
function F0(...t) {
  fl("error", ...t);
}
function fl(t, ...r) {
  if (J && Hh()) {
    Or(() => {
      he.console[t](`${O0}[${t}]:`, ...r);
    });
  }
}
function dl() {
  if (J) {
    return Lr("loggerSettings", () => ({
      enabled: false
    }));
  } else {
    return {
      enabled: false
    };
  }
}
const Y = {
  enable: A0,
  disable: b0,
  isEnabled: Hh,
  log: M0,
  warn: D0,
  error: F0
};
const Bh = 50;
const Tn = "?";
const Jd = /\(error: (.*)\)/;
const ep = /captureMessage|captureException/;
function Uh(...t) {
  const r = t.sort((i, s) => i[0] - s[0]).map(i => i[1]);
  return (i, s = 0, a = 0) => {
    const c = [];
    const d = i.split(`
`);
    for (let m = s; m < d.length; m++) {
      let h = d[m];
      if (h.length > 1024) {
        h = h.slice(0, 1024);
      }
      const g = Jd.test(h) ? h.replace(Jd, "$1") : h;
      if (!g.match(/\S*Error: /)) {
        for (const v of r) {
          const S = v(g);
          if (S) {
            c.push(S);
            break;
          }
        }
        if (c.length >= Bh + a) {
          break;
        }
      }
    }
    return jh(c.slice(a));
  };
}
function H0(t) {
  if (Array.isArray(t)) {
    return Uh(...t);
  } else {
    return t;
  }
}
function jh(t) {
  if (!t.length) {
    return [];
  }
  const r = Array.from(t);
  if (/sentryWrapped/.test(Yo(r).function || "")) {
    r.pop();
  }
  r.reverse();
  if (ep.test(Yo(r).function || "")) {
    r.pop();
    if (ep.test(Yo(r).function || "")) {
      r.pop();
    }
  }
  return r.slice(0, Bh).map(i => ({
    ...i,
    filename: i.filename || Yo(r).filename,
    function: i.function || Tn
  }));
}
function Yo(t) {
  return t[t.length - 1] || {};
}
const wa = "<anonymous>";
function In(t) {
  try {
    if (!t || typeof t != "function") {
      return wa;
    } else {
      return t.name || wa;
    }
  } catch {
    return wa;
  }
}
function tp(t) {
  const r = t.exception;
  if (r) {
    const i = [];
    try {
      r.values.forEach(s => {
        if (s.stacktrace.frames) {
          i.push(...s.stacktrace.frames);
        }
      });
      return i;
    } catch {
      return;
    }
  }
}
function zh(t) {
  if ("__v_isVNode" in t && t.__v_isVNode) {
    return "[VueVNode]";
  } else {
    return "[VueViewModel]";
  }
}
const ts = {};
const np = {};
function qn(t, r) {
  ts[t] = ts[t] || [];
  ts[t].push(r);
}
function Kn(t, r) {
  if (!np[t]) {
    np[t] = true;
    try {
      r();
    } catch (i) {
      if (J) {
        Y.error(`Error while instrumenting ${t}`, i);
      }
    }
  }
}
function Rt(t, r) {
  const i = t && ts[t];
  if (i) {
    for (const s of i) {
      try {
        s(r);
      } catch (a) {
        if (J) {
          Y.error(`Error while triggering instrumentation handler.
Type: ${t}
Name: ${In(s)}
Error:`, a);
        }
      }
    }
  }
}
let xa = null;
function B0(t) {
  const r = "error";
  qn(r, t);
  Kn(r, U0);
}
function U0() {
  xa = he.onerror;
  he.onerror = function (t, r, i, s, a) {
    Rt("error", {
      column: s,
      error: a,
      line: i,
      msg: t,
      url: r
    });
    if (xa) {
      return xa.apply(this, arguments);
    } else {
      return false;
    }
  };
  he.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let Ta = null;
function j0(t) {
  const r = "unhandledrejection";
  qn(r, t);
  Kn(r, z0);
}
function z0() {
  Ta = he.onunhandledrejection;
  he.onunhandledrejection = function (t) {
    Rt("unhandledrejection", t);
    if (Ta) {
      return Ta.apply(this, arguments);
    } else {
      return true;
    }
  };
  he.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
const $h = Object.prototype.toString;
function pl(t) {
  switch ($h.call(t)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
    case "[object WebAssembly.Exception]":
      return true;
    default:
      return Nn(t, Error);
  }
}
function Ar(t, r) {
  return $h.call(t) === `[object ${r}]`;
}
function Gh(t) {
  return Ar(t, "ErrorEvent");
}
function rp(t) {
  return Ar(t, "DOMError");
}
function $0(t) {
  return Ar(t, "DOMException");
}
function Jt(t) {
  return Ar(t, "String");
}
function hl(t) {
  return typeof t == "object" && t !== null && "__sentry_template_string__" in t && "__sentry_template_values__" in t;
}
function fs(t) {
  return t === null || hl(t) || typeof t != "object" && typeof t != "function";
}
function xi(t) {
  return Ar(t, "Object");
}
function ds(t) {
  return typeof Event !== "undefined" && Nn(t, Event);
}
function G0(t) {
  return typeof Element !== "undefined" && Nn(t, Element);
}
function V0(t) {
  return Ar(t, "RegExp");
}
function Ri(t) {
  return t != null && !!t.then && typeof t.then == "function";
}
function W0(t) {
  return xi(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t;
}
function Nn(t, r) {
  try {
    return t instanceof r;
  } catch {
    return false;
  }
}
function Vh(t) {
  return typeof t == "object" && t !== null && (!!t.__isVue || !!t._isVue || !!t.__v_isVNode);
}
function X0(t) {
  return typeof Request !== "undefined" && Nn(t, Request);
}
const ml = he;
const Y0 = 80;
function Wh(t, r = {}) {
  if (!t) {
    return "<unknown>";
  }
  try {
    let i = t;
    const s = 5;
    const a = [];
    let c = 0;
    let d = 0;
    const m = " > ";
    const h = m.length;
    let g;
    const v = Array.isArray(r) ? r : r.keyAttrs;
    const S = !Array.isArray(r) && r.maxStringLength || Y0;
    while (i && c++ < s && (g = q0(i, v), g !== "html" && (!(c > 1) || !(d + a.length * h + g.length >= S)))) {
      a.push(g);
      d += g.length;
      i = i.parentNode;
    }
    return a.reverse().join(m);
  } catch {
    return "<unknown>";
  }
}
function q0(t, r) {
  const i = t;
  const s = [];
  if (i == null || !i.tagName) {
    return "";
  }
  if (ml.HTMLElement && i instanceof HTMLElement && i.dataset) {
    if (i.dataset.sentryComponent) {
      return i.dataset.sentryComponent;
    }
    if (i.dataset.sentryElement) {
      return i.dataset.sentryElement;
    }
  }
  s.push(i.tagName.toLowerCase());
  const a = r != null && r.length ? r.filter(d => i.getAttribute(d)).map(d => [d, i.getAttribute(d)]) : null;
  if (a != null && a.length) {
    a.forEach(d => {
      s.push(`[${d[0]}="${d[1]}"]`);
    });
  } else {
    if (i.id) {
      s.push(`#${i.id}`);
    }
    const d = i.className;
    if (d && Jt(d)) {
      const m = d.split(/\s+/);
      for (const h of m) {
        s.push(`.${h}`);
      }
    }
  }
  const c = ["aria-label", "type", "name", "title", "alt"];
  for (const d of c) {
    const m = i.getAttribute(d);
    if (m) {
      s.push(`[${d}="${m}"]`);
    }
  }
  return s.join("");
}
function gl() {
  try {
    return ml.document.location.href;
  } catch {
    return "";
  }
}
function K0(t) {
  if (!ml.HTMLElement) {
    return null;
  }
  let r = t;
  const i = 5;
  for (let s = 0; s < i; s++) {
    if (!r) {
      return null;
    }
    if (r instanceof HTMLElement) {
      if (r.dataset.sentryComponent) {
        return r.dataset.sentryComponent;
      }
      if (r.dataset.sentryElement) {
        return r.dataset.sentryElement;
      }
    }
    r = r.parentNode;
  }
  return null;
}
function pt(t, r, i) {
  if (!(r in t)) {
    return;
  }
  const s = t[r];
  if (typeof s != "function") {
    return;
  }
  const a = i(s);
  if (typeof a == "function") {
    Xh(a, s);
  }
  try {
    t[r] = a;
  } catch {
    if (J) {
      Y.log(`Failed to replace method "${r}" in object`, t);
    }
  }
}
function Xn(t, r, i) {
  try {
    Object.defineProperty(t, r, {
      value: i,
      writable: true,
      configurable: true
    });
  } catch {
    if (J) {
      Y.log(`Failed to add non-enumerable property "${r}" to object`, t);
    }
  }
}
function Xh(t, r) {
  try {
    const i = r.prototype || {};
    t.prototype = r.prototype = i;
    Xn(t, "__sentry_original__", r);
  } catch {}
}
function yl(t) {
  return t.__sentry_original__;
}
function Yh(t) {
  if (pl(t)) {
    return {
      message: t.message,
      name: t.name,
      stack: t.stack,
      ...op(t)
    };
  }
  if (ds(t)) {
    const r = {
      type: t.type,
      target: ip(t.target),
      currentTarget: ip(t.currentTarget),
      ...op(t)
    };
    if (typeof CustomEvent !== "undefined" && Nn(t, CustomEvent)) {
      r.detail = t.detail;
    }
    return r;
  } else {
    return t;
  }
}
function ip(t) {
  try {
    if (G0(t)) {
      return Wh(t);
    } else {
      return Object.prototype.toString.call(t);
    }
  } catch {
    return "<unknown>";
  }
}
function op(t) {
  if (typeof t == "object" && t !== null) {
    const r = {};
    for (const i in t) {
      if (Object.prototype.hasOwnProperty.call(t, i)) {
        r[i] = t[i];
      }
    }
    return r;
  } else {
    return {};
  }
}
function Q0(t) {
  const r = Object.keys(Yh(t));
  r.sort();
  if (r[0]) {
    return r.join(", ");
  } else {
    return "[object has no keys]";
  }
}
function $a(t, r = 0) {
  if (typeof t != "string" || r === 0 || t.length <= r) {
    return t;
  } else {
    return `${t.slice(0, r)}...`;
  }
}
function sp(t, r) {
  if (!Array.isArray(t)) {
    return "";
  }
  const i = [];
  for (let s = 0; s < t.length; s++) {
    const a = t[s];
    try {
      if (Vh(a)) {
        i.push(zh(a));
      } else {
        i.push(String(a));
      }
    } catch {
      i.push("[value cannot be serialized]");
    }
  }
  return i.join(r);
}
function ns(t, r, i = false) {
  if (Jt(t)) {
    if (V0(r)) {
      return r.test(t);
    } else if (Jt(r)) {
      if (i) {
        return t === r;
      } else {
        return t.includes(r);
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function ps(t, r = [], i = false) {
  return r.some(s => ns(t, s, i));
}
function Z0() {
  const t = he;
  return t.crypto || t.msCrypto;
}
let Ia;
function J0() {
  return Math.random() * 16;
}
function ht(t = Z0()) {
  try {
    if (t != null && t.randomUUID) {
      return t.randomUUID().replace(/-/g, "");
    }
  } catch {}
  Ia ||= "10000000100040008000100000000000";
  return Ia.replace(/[018]/g, r => (r ^ (J0() & 15) >> r / 4).toString(16));
}
function qh(t) {
  var r;
  var i;
  if ((i = (r = t.exception) == null ? undefined : r.values) == null) {
    return undefined;
  } else {
    return i[0];
  }
}
function Gn(t) {
  const {
    message: r,
    event_id: i
  } = t;
  if (r) {
    return r;
  }
  const s = qh(t);
  if (s) {
    if (s.type && s.value) {
      return `${s.type}: ${s.value}`;
    } else {
      return s.type || s.value || i || "<unknown>";
    }
  } else {
    return i || "<unknown>";
  }
}
function Ga(t, r, i) {
  const s = t.exception = t.exception || {};
  const a = s.values = s.values || [];
  const c = a[0] = a[0] || {};
  c.value ||= r || "";
  c.type ||= "Error";
}
function Nr(t, r) {
  const i = qh(t);
  if (!i) {
    return;
  }
  const s = {
    type: "generic",
    handled: true
  };
  const a = i.mechanism;
  i.mechanism = {
    ...s,
    ...a,
    ...r
  };
  if (r && "data" in r) {
    const c = {
      ...(a == null ? undefined : a.data),
      ...r.data
    };
    i.mechanism.data = c;
  }
}
function up(t) {
  if (e_(t)) {
    return true;
  }
  try {
    Xn(t, "__sentry_captured__", true);
  } catch {}
  return false;
}
function e_(t) {
  try {
    return t.__sentry_captured__;
  } catch {}
}
const Kh = 1000;
function Li() {
  return Date.now() / Kh;
}
function t_() {
  const {
    performance: t
  } = he;
  if (t == null || !t.now || !t.timeOrigin) {
    return Li;
  }
  const r = t.timeOrigin;
  return () => (r + t.now()) / Kh;
}
let ap;
function en() {
  return (ap ??= t_())();
}
function n_(t) {
  const r = en();
  const i = {
    sid: ht(),
    init: true,
    timestamp: r,
    started: r,
    duration: 0,
    status: "ok",
    errors: 0,
    ignoreDuration: false,
    toJSON: () => i_(i)
  };
  if (t) {
    kr(i, t);
  }
  return i;
}
function kr(t, r = {}) {
  if (r.user) {
    if (!t.ipAddress && r.user.ip_address) {
      t.ipAddress = r.user.ip_address;
    }
    if (!t.did && !r.did) {
      t.did = r.user.id || r.user.email || r.user.username;
    }
  }
  t.timestamp = r.timestamp || en();
  if (r.abnormal_mechanism) {
    t.abnormal_mechanism = r.abnormal_mechanism;
  }
  if (r.ignoreDuration) {
    t.ignoreDuration = r.ignoreDuration;
  }
  if (r.sid) {
    t.sid = r.sid.length === 32 ? r.sid : ht();
  }
  if (r.init !== undefined) {
    t.init = r.init;
  }
  if (!t.did && r.did) {
    t.did = `${r.did}`;
  }
  if (typeof r.started == "number") {
    t.started = r.started;
  }
  if (t.ignoreDuration) {
    t.duration = undefined;
  } else if (typeof r.duration == "number") {
    t.duration = r.duration;
  } else {
    const i = t.timestamp - t.started;
    t.duration = i >= 0 ? i : 0;
  }
  if (r.release) {
    t.release = r.release;
  }
  if (r.environment) {
    t.environment = r.environment;
  }
  if (!t.ipAddress && r.ipAddress) {
    t.ipAddress = r.ipAddress;
  }
  if (!t.userAgent && r.userAgent) {
    t.userAgent = r.userAgent;
  }
  if (typeof r.errors == "number") {
    t.errors = r.errors;
  }
  if (r.status) {
    t.status = r.status;
  }
}
function r_(t, r) {
  let i = {};
  if (t.status === "ok") {
    i = {
      status: "exited"
    };
  }
  kr(t, i);
}
function i_(t) {
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
function Oi(t, r, i = 2) {
  if (!r || typeof r != "object" || i <= 0) {
    return r;
  }
  if (t && Object.keys(r).length === 0) {
    return t;
  }
  const s = {
    ...t
  };
  for (const a in r) {
    if (Object.prototype.hasOwnProperty.call(r, a)) {
      s[a] = Oi(s[a], r[a], i - 1);
    }
  }
  return s;
}
function lp() {
  return ht();
}
function Qh() {
  return ht().substring(16);
}
const Va = "_sentrySpan";
function cp(t, r) {
  if (r) {
    Xn(t, Va, r);
  } else {
    delete t[Va];
  }
}
function fp(t) {
  return t[Va];
}
const o_ = 100;
class tn {
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
      traceId: lp(),
      sampleRand: Math.random()
    };
  }
  clone() {
    const r = new tn();
    r._breadcrumbs = [...this._breadcrumbs];
    r._tags = {
      ...this._tags
    };
    r._attributes = {
      ...this._attributes
    };
    r._extra = {
      ...this._extra
    };
    r._contexts = {
      ...this._contexts
    };
    if (this._contexts.flags) {
      r._contexts.flags = {
        values: [...this._contexts.flags.values]
      };
    }
    r._user = this._user;
    r._level = this._level;
    r._session = this._session;
    r._transactionName = this._transactionName;
    r._fingerprint = this._fingerprint;
    r._eventProcessors = [...this._eventProcessors];
    r._attachments = [...this._attachments];
    r._sdkProcessingMetadata = {
      ...this._sdkProcessingMetadata
    };
    r._propagationContext = {
      ...this._propagationContext
    };
    r._client = this._client;
    r._lastEventId = this._lastEventId;
    cp(r, fp(this));
    return r;
  }
  setClient(r) {
    this._client = r;
  }
  setLastEventId(r) {
    this._lastEventId = r;
  }
  getClient() {
    return this._client;
  }
  lastEventId() {
    return this._lastEventId;
  }
  addScopeListener(r) {
    this._scopeListeners.push(r);
  }
  addEventProcessor(r) {
    this._eventProcessors.push(r);
    return this;
  }
  setUser(r) {
    this._user = r || {
      email: undefined,
      id: undefined,
      ip_address: undefined,
      username: undefined
    };
    if (this._session) {
      kr(this._session, {
        user: r
      });
    }
    this._notifyScopeListeners();
    return this;
  }
  getUser() {
    return this._user;
  }
  setTags(r) {
    this._tags = {
      ...this._tags,
      ...r
    };
    this._notifyScopeListeners();
    return this;
  }
  setTag(r, i) {
    return this.setTags({
      [r]: i
    });
  }
  setAttributes(r) {
    this._attributes = {
      ...this._attributes,
      ...r
    };
    this._notifyScopeListeners();
    return this;
  }
  setAttribute(r, i) {
    return this.setAttributes({
      [r]: i
    });
  }
  removeAttribute(r) {
    if (r in this._attributes) {
      delete this._attributes[r];
      this._notifyScopeListeners();
    }
    return this;
  }
  setExtras(r) {
    this._extra = {
      ...this._extra,
      ...r
    };
    this._notifyScopeListeners();
    return this;
  }
  setExtra(r, i) {
    this._extra = {
      ...this._extra,
      [r]: i
    };
    this._notifyScopeListeners();
    return this;
  }
  setFingerprint(r) {
    this._fingerprint = r;
    this._notifyScopeListeners();
    return this;
  }
  setLevel(r) {
    this._level = r;
    this._notifyScopeListeners();
    return this;
  }
  setTransactionName(r) {
    this._transactionName = r;
    this._notifyScopeListeners();
    return this;
  }
  setContext(r, i) {
    if (i === null) {
      delete this._contexts[r];
    } else {
      this._contexts[r] = i;
    }
    this._notifyScopeListeners();
    return this;
  }
  setSession(r) {
    if (r) {
      this._session = r;
    } else {
      delete this._session;
    }
    this._notifyScopeListeners();
    return this;
  }
  getSession() {
    return this._session;
  }
  update(r) {
    if (!r) {
      return this;
    }
    const i = typeof r == "function" ? r(this) : r;
    const s = i instanceof tn ? i.getScopeData() : xi(i) ? r : undefined;
    const {
      tags: a,
      attributes: c,
      extra: d,
      user: m,
      contexts: h,
      level: g,
      fingerprint: v = [],
      propagationContext: S
    } = s || {};
    this._tags = {
      ...this._tags,
      ...a
    };
    this._attributes = {
      ...this._attributes,
      ...c
    };
    this._extra = {
      ...this._extra,
      ...d
    };
    this._contexts = {
      ...this._contexts,
      ...h
    };
    if (m && Object.keys(m).length) {
      this._user = m;
    }
    if (g) {
      this._level = g;
    }
    if (v.length) {
      this._fingerprint = v;
    }
    if (S) {
      this._propagationContext = S;
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
    cp(this, undefined);
    this._attachments = [];
    this.setPropagationContext({
      traceId: lp(),
      sampleRand: Math.random()
    });
    this._notifyScopeListeners();
    return this;
  }
  addBreadcrumb(r, i) {
    var c;
    const s = typeof i == "number" ? i : o_;
    if (s <= 0) {
      return this;
    }
    const a = {
      timestamp: Li(),
      ...r,
      message: r.message ? $a(r.message, 2048) : r.message
    };
    this._breadcrumbs.push(a);
    if (this._breadcrumbs.length > s) {
      this._breadcrumbs = this._breadcrumbs.slice(-s);
      if ((c = this._client) != null) {
        c.recordDroppedEvent("buffer_overflow", "log_item");
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
  addAttachment(r) {
    this._attachments.push(r);
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
      span: fp(this)
    };
  }
  setSDKProcessingMetadata(r) {
    this._sdkProcessingMetadata = Oi(this._sdkProcessingMetadata, r, 2);
    return this;
  }
  setPropagationContext(r) {
    this._propagationContext = r;
    return this;
  }
  getPropagationContext() {
    return this._propagationContext;
  }
  captureException(r, i) {
    const s = (i == null ? undefined : i.event_id) || ht();
    if (!this._client) {
      if (J) {
        Y.warn("No client configured on scope - will not capture exception!");
      }
      return s;
    }
    const a = new Error("Sentry syntheticException");
    this._client.captureException(r, {
      originalException: r,
      syntheticException: a,
      ...i,
      event_id: s
    }, this);
    return s;
  }
  captureMessage(r, i, s) {
    const a = (s == null ? undefined : s.event_id) || ht();
    if (!this._client) {
      if (J) {
        Y.warn("No client configured on scope - will not capture message!");
      }
      return a;
    }
    const c = (s == null ? undefined : s.syntheticException) ?? new Error(r);
    this._client.captureMessage(r, i, {
      originalException: r,
      syntheticException: c,
      ...s,
      event_id: a
    }, this);
    return a;
  }
  captureEvent(r, i) {
    const s = (i == null ? undefined : i.event_id) || ht();
    if (this._client) {
      this._client.captureEvent(r, {
        ...i,
        event_id: s
      }, this);
      return s;
    } else {
      if (J) {
        Y.warn("No client configured on scope - will not capture event!");
      }
      return s;
    }
  }
  _notifyScopeListeners() {
    if (!this._notifyingListeners) {
      this._notifyingListeners = true;
      this._scopeListeners.forEach(r => {
        r(this);
      });
      this._notifyingListeners = false;
    }
  }
}
function s_() {
  return Lr("defaultCurrentScope", () => new tn());
}
function u_() {
  return Lr("defaultIsolationScope", () => new tn());
}
class a_ {
  constructor(r, i) {
    let s;
    if (r) {
      s = r;
    } else {
      s = new tn();
    }
    let a;
    if (i) {
      a = i;
    } else {
      a = new tn();
    }
    this._stack = [{
      scope: s
    }];
    this._isolationScope = a;
  }
  withScope(r) {
    const i = this._pushScope();
    let s;
    try {
      s = r(i);
    } catch (a) {
      this._popScope();
      throw a;
    }
    if (Ri(s)) {
      return s.then(a => {
        this._popScope();
        return a;
      }, a => {
        this._popScope();
        throw a;
      });
    } else {
      this._popScope();
      return s;
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
    const r = this.getScope().clone();
    this._stack.push({
      client: this.getClient(),
      scope: r
    });
    return r;
  }
  _popScope() {
    if (this._stack.length <= 1) {
      return false;
    } else {
      return !!this._stack.pop();
    }
  }
}
function Cr() {
  const t = ls();
  const r = cs(t);
  return r.stack = r.stack || new a_(s_(), u_());
}
function l_(t) {
  return Cr().withScope(t);
}
function c_(t, r) {
  const i = Cr();
  return i.withScope(() => {
    i.getStackTop().scope = t;
    return r(t);
  });
}
function dp(t) {
  return Cr().withScope(() => t(Cr().getIsolationScope()));
}
function f_() {
  return {
    withIsolationScope: dp,
    withScope: l_,
    withSetScope: c_,
    withSetIsolationScope: (t, r) => dp(r),
    getCurrentScope: () => Cr().getScope(),
    getIsolationScope: () => Cr().getIsolationScope()
  };
}
function vl(t) {
  const r = cs(t);
  if (r.acs) {
    return r.acs;
  } else {
    return f_();
  }
}
function zt() {
  const t = ls();
  return vl(t).getCurrentScope();
}
function Qn() {
  const t = ls();
  return vl(t).getIsolationScope();
}
function _l() {
  return Lr("globalScope", () => new tn());
}
function d_(...t) {
  const r = ls();
  const i = vl(r);
  if (t.length === 2) {
    const [s, a] = t;
    if (s) {
      return i.withSetScope(s, a);
    } else {
      return i.withScope(a);
    }
  }
  return i.withScope(t[0]);
}
function Ve() {
  return zt().getClient();
}
function p_(t) {
  const r = t.getPropagationContext();
  const {
    traceId: i,
    parentSpanId: s,
    propagationSpanId: a
  } = r;
  const c = {
    trace_id: i,
    span_id: a || Qh()
  };
  if (s) {
    c.parent_span_id = s;
  }
  return c;
}
const h_ = "sentry.source";
const m_ = "sentry.sample_rate";
const g_ = "sentry.previous_trace_sample_rate";
const y_ = "sentry.op";
const v_ = "sentry.origin";
const Zh = "sentry.profile_id";
const Jh = "sentry.exclusive_time";
const __ = 0;
const E_ = 1;
const S_ = "_sentryScope";
const w_ = "_sentryIsolationScope";
function x_(t) {
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
function em(t) {
  const r = t;
  return {
    scope: r[S_],
    isolationScope: x_(r[w_])
  };
}
const T_ = "sentry-";
const I_ = /^sentry-/;
function N_(t) {
  const r = k_(t);
  if (!r) {
    return;
  }
  const i = Object.entries(r).reduce((s, [a, c]) => {
    if (a.match(I_)) {
      const d = a.slice(T_.length);
      s[d] = c;
    }
    return s;
  }, {});
  if (Object.keys(i).length > 0) {
    return i;
  }
}
function k_(t) {
  if (!!t && (!!Jt(t) || !!Array.isArray(t))) {
    if (Array.isArray(t)) {
      return t.reduce((r, i) => {
        const s = pp(i);
        Object.entries(s).forEach(([a, c]) => {
          r[a] = c;
        });
        return r;
      }, {});
    } else {
      return pp(t);
    }
  }
}
function pp(t) {
  return t.split(",").map(r => {
    const i = r.indexOf("=");
    if (i === -1) {
      return [];
    }
    const s = r.slice(0, i);
    const a = r.slice(i + 1);
    return [s, a].map(c => {
      try {
        return decodeURIComponent(c.trim());
      } catch {
        return;
      }
    });
  }).reduce((r, [i, s]) => {
    if (i && s) {
      r[i] = s;
    }
    return r;
  }, {});
}
const C_ = /^o(\d+)\./;
const P_ = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function R_(t) {
  return t === "http" || t === "https";
}
function Ai(t, r = false) {
  const {
    host: i,
    path: s,
    pass: a,
    port: c,
    projectId: d,
    protocol: m,
    publicKey: h
  } = t;
  return `${m}://${h}${r && a ? `:${a}` : ""}@${i}${c ? `:${c}` : ""}/${s && `${s}/`}${d}`;
}
function L_(t) {
  const r = P_.exec(t);
  if (!r) {
    Or(() => {
      console.error(`Invalid Sentry Dsn: ${t}`);
    });
    return;
  }
  const [i, s, a = "", c = "", d = "", m = ""] = r.slice(1);
  let h = "";
  let g = m;
  const v = g.split("/");
  if (v.length > 1) {
    h = v.slice(0, -1).join("/");
    g = v.pop();
  }
  if (g) {
    const S = g.match(/^\d+/);
    if (S) {
      g = S[0];
    }
  }
  return tm({
    host: c,
    pass: a,
    path: h,
    projectId: g,
    port: d,
    protocol: i,
    publicKey: s
  });
}
function tm(t) {
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
function O_(t) {
  if (!J) {
    return true;
  }
  const {
    port: r,
    projectId: i,
    protocol: s
  } = t;
  if (["protocol", "publicKey", "host", "projectId"].find(d => t[d] ? false : (Y.error(`Invalid Sentry Dsn: ${d} missing`), true))) {
    return false;
  } else if (i.match(/^\d+$/)) {
    if (R_(s)) {
      if (r && isNaN(parseInt(r, 10))) {
        Y.error(`Invalid Sentry Dsn: Invalid port ${r}`);
        return false;
      } else {
        return true;
      }
    } else {
      Y.error(`Invalid Sentry Dsn: Invalid protocol ${s}`);
      return false;
    }
  } else {
    Y.error(`Invalid Sentry Dsn: Invalid projectId ${i}`);
    return false;
  }
}
function A_(t) {
  const r = t.match(C_);
  if (r == null) {
    return undefined;
  } else {
    return r[1];
  }
}
function b_(t) {
  const r = t.getOptions();
  const {
    host: i
  } = t.getDsn() || {};
  let s;
  if (r.orgId) {
    s = String(r.orgId);
  } else if (i) {
    s = A_(i);
  }
  return s;
}
function M_(t) {
  const r = typeof t == "string" ? L_(t) : tm(t);
  if (!!r && !!O_(r)) {
    return r;
  }
}
function D_(t) {
  if (typeof t == "boolean") {
    return Number(t);
  }
  const r = typeof t == "string" ? parseFloat(t) : t;
  if (typeof r == "number" && !isNaN(r) && !(r < 0) && !(r > 1)) {
    return r;
  }
}
const nm = 1;
let hp = false;
function F_(t) {
  const {
    spanId: r,
    traceId: i,
    isRemote: s
  } = t.spanContext();
  const a = s ? r : El(t).parent_span_id;
  const c = em(t).scope;
  const d = s ? (c == null ? undefined : c.getPropagationContext().propagationSpanId) || Qh() : r;
  return {
    parent_span_id: a,
    span_id: d,
    trace_id: i
  };
}
function H_(t) {
  if (t && t.length > 0) {
    return t.map(({
      context: {
        spanId: r,
        traceId: i,
        traceFlags: s,
        ...a
      },
      attributes: c
    }) => ({
      span_id: r,
      trace_id: i,
      sampled: s === nm,
      attributes: c,
      ...a
    }));
  }
}
function mp(t) {
  if (typeof t == "number") {
    return gp(t);
  } else if (Array.isArray(t)) {
    return t[0] + t[1] / 1000000000;
  } else if (t instanceof Date) {
    return gp(t.getTime());
  } else {
    return en();
  }
}
function gp(t) {
  if (t > 9999999999) {
    return t / 1000;
  } else {
    return t;
  }
}
function El(t) {
  var s;
  if (U_(t)) {
    return t.getSpanJSON();
  }
  const {
    spanId: r,
    traceId: i
  } = t.spanContext();
  if (B_(t)) {
    const {
      attributes: a,
      startTime: c,
      name: d,
      endTime: m,
      status: h,
      links: g
    } = t;
    const v = "parentSpanId" in t ? t.parentSpanId : "parentSpanContext" in t ? (s = t.parentSpanContext) == null ? undefined : s.spanId : undefined;
    return {
      span_id: r,
      trace_id: i,
      data: a,
      description: d,
      parent_span_id: v,
      start_timestamp: mp(c),
      timestamp: mp(m) || undefined,
      status: z_(h),
      op: a[y_],
      origin: a[v_],
      links: H_(g)
    };
  }
  return {
    span_id: r,
    trace_id: i,
    start_timestamp: 0,
    data: {}
  };
}
function B_(t) {
  const r = t;
  return !!r.attributes && !!r.startTime && !!r.name && !!r.endTime && !!r.status;
}
function U_(t) {
  return typeof t.getSpanJSON == "function";
}
function j_(t) {
  const {
    traceFlags: r
  } = t.spanContext();
  return r === nm;
}
function z_(t) {
  if (!!t && t.code !== __) {
    if (t.code === E_) {
      return "ok";
    } else {
      return t.message || "internal_error";
    }
  }
}
const $_ = "_sentryRootSpan";
function rm(t) {
  return t[$_] || t;
}
function yp() {
  if (!hp) {
    Or(() => {
      console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.");
    });
    hp = true;
  }
}
function G_(t) {
  var i;
  if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) {
    return false;
  }
  const r = (i = Ve()) == null ? undefined : i.getOptions();
  return !!r && (r.tracesSampleRate != null || !!r.tracesSampler);
}
function vp(t) {
  Y.log(`Ignoring span ${t.op} - ${t.description} because it matches \`ignoreSpans\`.`);
}
function _p(t, r) {
  if (r == null || !r.length || !t.description) {
    return false;
  }
  for (const i of r) {
    if (W_(i)) {
      if (ns(t.description, i)) {
        if (J) {
          vp(t);
        }
        return true;
      }
      continue;
    }
    if (!i.name && !i.op) {
      continue;
    }
    const s = i.name ? ns(t.description, i.name) : true;
    const a = i.op ? t.op && ns(t.op, i.op) : true;
    if (s && a) {
      if (J) {
        vp(t);
      }
      return true;
    }
  }
  return false;
}
function V_(t, r) {
  const i = r.parent_span_id;
  const s = r.span_id;
  if (i) {
    for (const a of t) {
      if (a.parent_span_id === s) {
        a.parent_span_id = i;
      }
    }
  }
}
function W_(t) {
  return typeof t == "string" || t instanceof RegExp;
}
const Sl = "production";
const X_ = "_frozenDsc";
function im(t, r) {
  const i = r.getOptions();
  const {
    publicKey: s
  } = r.getDsn() || {};
  const a = {
    environment: i.environment || Sl,
    release: i.release,
    public_key: s,
    trace_id: t,
    org_id: b_(r)
  };
  r.emit("createDsc", a);
  return a;
}
function Y_(t, r) {
  const i = r.getPropagationContext();
  return i.dsc || im(i.traceId, t);
}
function q_(t) {
  var M;
  const r = Ve();
  if (!r) {
    return {};
  }
  const i = rm(t);
  const s = El(i);
  const a = s.data;
  const c = i.spanContext().traceState;
  const d = (c == null ? undefined : c.get("sentry.sample_rate")) ?? a[m_] ?? a[g_];
  function m(O) {
    if (typeof d == "number" || typeof d == "string") {
      O.sample_rate = `${d}`;
    }
    return O;
  }
  const h = i[X_];
  if (h) {
    return m(h);
  }
  const g = c == null ? undefined : c.get("sentry.dsc");
  const v = g && N_(g);
  if (v) {
    return m(v);
  }
  const S = im(t.spanContext().traceId, r);
  const k = a[h_];
  const I = s.description;
  if (k !== "url" && I) {
    S.transaction = I;
  }
  if (G_()) {
    S.sampled = String(j_(i));
    S.sample_rand = (c == null ? undefined : c.get("sentry.sample_rand")) ?? ((M = em(i).scope) == null ? undefined : M.getPropagationContext().sampleRand.toString());
  }
  m(S);
  r.emit("createDsc", S, i);
  return S;
}
function Ut(t, r = 100, i = Infinity) {
  try {
    return Wa("", t, r, i);
  } catch (s) {
    return {
      ERROR: `**non-serializable** (${s})`
    };
  }
}
function om(t, r = 3, i = 102400) {
  const s = Ut(t, r);
  if (J_(s) > i) {
    return om(t, r - 1, i);
  } else {
    return s;
  }
}
function Wa(t, r, i = Infinity, s = Infinity, a = eE()) {
  const [c, d] = a;
  if (r == null || ["boolean", "string"].includes(typeof r) || typeof r == "number" && Number.isFinite(r)) {
    return r;
  }
  const m = K_(t, r);
  if (!m.startsWith("[object ")) {
    return m;
  }
  if (r.__sentry_skip_normalization__) {
    return r;
  }
  const h = typeof r.__sentry_override_normalization_depth__ == "number" ? r.__sentry_override_normalization_depth__ : i;
  if (h === 0) {
    return m.replace("object ", "");
  }
  if (c(r)) {
    return "[Circular ~]";
  }
  const g = r;
  if (g && typeof g.toJSON == "function") {
    try {
      const I = g.toJSON();
      return Wa("", I, h - 1, s, a);
    } catch {}
  }
  const v = Array.isArray(r) ? [] : {};
  let S = 0;
  const k = Yh(r);
  for (const I in k) {
    if (!Object.prototype.hasOwnProperty.call(k, I)) {
      continue;
    }
    if (S >= s) {
      v[I] = "[MaxProperties ~]";
      break;
    }
    const M = k[I];
    v[I] = Wa(I, M, h - 1, s, a);
    S++;
  }
  d(r);
  return v;
}
function K_(t, r) {
  try {
    if (t === "domain" && r && typeof r == "object" && r._events) {
      return "[Domain]";
    }
    if (t === "domainEmitter") {
      return "[DomainEmitter]";
    }
    if (typeof global !== "undefined" && r === global) {
      return "[Global]";
    }
    if (typeof window !== "undefined" && r === window) {
      return "[Window]";
    }
    if (typeof document !== "undefined" && r === document) {
      return "[Document]";
    }
    if (Vh(r)) {
      return zh(r);
    }
    if (W0(r)) {
      return "[SyntheticEvent]";
    }
    if (typeof r == "number" && !Number.isFinite(r)) {
      return `[${r}]`;
    }
    if (typeof r == "function") {
      return `[Function: ${In(r)}]`;
    }
    if (typeof r == "symbol") {
      return `[${String(r)}]`;
    }
    if (typeof r == "bigint") {
      return `[BigInt: ${String(r)}]`;
    }
    const i = Q_(r);
    if (/^HTML(\w*)Element$/.test(i)) {
      return `[HTMLElement: ${i}]`;
    } else {
      return `[object ${i}]`;
    }
  } catch (i) {
    return `**non-serializable** (${i})`;
  }
}
function Q_(t) {
  const r = Object.getPrototypeOf(t);
  if (r != null && r.constructor) {
    return r.constructor.name;
  } else {
    return "null prototype";
  }
}
function Z_(t) {
  return ~-encodeURI(t).split(/%..|./).length;
}
function J_(t) {
  return Z_(JSON.stringify(t));
}
function eE() {
  const t = new WeakSet();
  function r(s) {
    if (t.has(s)) {
      return true;
    } else {
      t.add(s);
      return false;
    }
  }
  function i(s) {
    t.delete(s);
  }
  return [r, i];
}
function br(t, r = []) {
  return [t, r];
}
function tE(t, r) {
  const [i, s] = t;
  return [i, [...s, r]];
}
function Ep(t, r) {
  const i = t[1];
  for (const s of i) {
    const a = s[0].type;
    if (r(s, a)) {
      return true;
    }
  }
  return false;
}
function Xa(t) {
  const r = cs(he);
  if (r.encodePolyfill) {
    return r.encodePolyfill(t);
  } else {
    return new TextEncoder().encode(t);
  }
}
function nE(t) {
  const [r, i] = t;
  let s = JSON.stringify(r);
  function a(c) {
    if (typeof s == "string") {
      s = typeof c == "string" ? s + c : [Xa(s), c];
    } else {
      s.push(typeof c == "string" ? Xa(c) : c);
    }
  }
  for (const c of i) {
    const [d, m] = c;
    a(`
${JSON.stringify(d)}
`);
    if (typeof m == "string" || m instanceof Uint8Array) {
      a(m);
    } else {
      let h;
      try {
        h = JSON.stringify(m);
      } catch {
        h = JSON.stringify(Ut(m));
      }
      a(h);
    }
  }
  if (typeof s == "string") {
    return s;
  } else {
    return rE(s);
  }
}
function rE(t) {
  const r = t.reduce((a, c) => a + c.length, 0);
  const i = new Uint8Array(r);
  let s = 0;
  for (const a of t) {
    i.set(a, s);
    s += a.length;
  }
  return i;
}
function iE(t) {
  const r = typeof t.data == "string" ? Xa(t.data) : t.data;
  return [{
    type: "attachment",
    length: r.length,
    filename: t.filename,
    content_type: t.contentType,
    attachment_type: t.attachmentType
  }, r];
}
const oE = {
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
function Sp(t) {
  return oE[t];
}
function sm(t) {
  if (t == null || !t.sdk) {
    return;
  }
  const {
    name: r,
    version: i
  } = t.sdk;
  return {
    name: r,
    version: i
  };
}
function sE(t, r, i, s) {
  var c;
  const a = (c = t.sdkProcessingMetadata) == null ? undefined : c.dynamicSamplingContext;
  return {
    event_id: t.event_id,
    sent_at: new Date().toISOString(),
    ...(r && {
      sdk: r
    }),
    ...(!!i && s && {
      dsn: Ai(s)
    }),
    ...(a && {
      trace: a
    })
  };
}
function uE(t, r) {
  var s;
  var a;
  var c;
  var d;
  if (!r) {
    return t;
  }
  const i = t.sdk || {};
  t.sdk = {
    ...i,
    name: i.name || r.name,
    version: i.version || r.version,
    integrations: [...(((s = t.sdk) == null ? undefined : s.integrations) || []), ...(r.integrations || [])],
    packages: [...(((a = t.sdk) == null ? undefined : a.packages) || []), ...(r.packages || [])],
    settings: (c = t.sdk) != null && c.settings || r.settings ? {
      ...((d = t.sdk) == null ? undefined : d.settings),
      ...r.settings
    } : undefined
  };
  return t;
}
function aE(t, r, i, s) {
  const a = sm(i);
  const c = {
    sent_at: new Date().toISOString(),
    ...(a && {
      sdk: a
    }),
    ...(!!s && r && {
      dsn: Ai(r)
    })
  };
  const d = "aggregates" in t ? [{
    type: "sessions"
  }, t] : [{
    type: "session"
  }, t.toJSON()];
  return br(c, [d]);
}
function lE(t, r, i, s) {
  const a = sm(i);
  const c = t.type && t.type !== "replay_event" ? t.type : "event";
  uE(t, i == null ? undefined : i.sdk);
  const d = sE(t, a, s, r);
  delete t.sdkProcessingMetadata;
  return br(d, [[{
    type: c
  }, t]]);
}
const Na = 0;
const wp = 1;
const xp = 2;
function hs(t) {
  return new Ti(r => {
    r(t);
  });
}
function wl(t) {
  return new Ti((r, i) => {
    i(t);
  });
}
class Ti {
  constructor(r) {
    this._state = Na;
    this._handlers = [];
    this._runExecutor(r);
  }
  then(r, i) {
    return new Ti((s, a) => {
      this._handlers.push([false, c => {
        if (!r) {
          s(c);
        } else {
          try {
            s(r(c));
          } catch (d) {
            a(d);
          }
        }
      }, c => {
        if (!i) {
          a(c);
        } else {
          try {
            s(i(c));
          } catch (d) {
            a(d);
          }
        }
      }]);
      this._executeHandlers();
    });
  }
  catch(r) {
    return this.then(i => i, r);
  }
  finally(r) {
    return new Ti((i, s) => {
      let a;
      let c;
      return this.then(d => {
        c = false;
        a = d;
        if (r) {
          r();
        }
      }, d => {
        c = true;
        a = d;
        if (r) {
          r();
        }
      }).then(() => {
        if (c) {
          s(a);
          return;
        }
        i(a);
      });
    });
  }
  _executeHandlers() {
    if (this._state === Na) {
      return;
    }
    const r = this._handlers.slice();
    this._handlers = [];
    r.forEach(i => {
      if (!i[0]) {
        if (this._state === wp) {
          i[1](this._value);
        }
        if (this._state === xp) {
          i[2](this._value);
        }
        i[0] = true;
      }
    });
  }
  _runExecutor(r) {
    const i = (c, d) => {
      if (this._state === Na) {
        if (Ri(d)) {
          d.then(s, a);
          return;
        }
        this._state = c;
        this._value = d;
        this._executeHandlers();
      }
    };
    const s = c => {
      i(wp, c);
    };
    const a = c => {
      i(xp, c);
    };
    try {
      r(s, a);
    } catch (c) {
      a(c);
    }
  }
}
function cE(t, r, i, s = 0) {
  try {
    const a = Ya(r, i, t, s);
    if (Ri(a)) {
      return a;
    } else {
      return hs(a);
    }
  } catch (a) {
    return wl(a);
  }
}
function Ya(t, r, i, s) {
  const a = i[s];
  if (!t || !a) {
    return t;
  }
  const c = a({
    ...t
  }, r);
  if (J && c === null) {
    Y.log(`Event processor "${a.id || "?"}" dropped event`);
  }
  if (Ri(c)) {
    return c.then(d => Ya(d, r, i, s + 1));
  } else {
    return Ya(c, r, i, s + 1);
  }
}
function fE(t, r) {
  const {
    fingerprint: i,
    span: s,
    breadcrumbs: a,
    sdkProcessingMetadata: c
  } = r;
  dE(t, r);
  if (s) {
    mE(t, s);
  }
  gE(t, i);
  pE(t, a);
  hE(t, c);
}
function ss(t, r) {
  const {
    extra: i,
    tags: s,
    user: a,
    contexts: c,
    level: d,
    sdkProcessingMetadata: m,
    breadcrumbs: h,
    fingerprint: g,
    eventProcessors: v,
    attachments: S,
    propagationContext: k,
    transactionName: I,
    span: M
  } = r;
  qo(t, "extra", i);
  qo(t, "tags", s);
  qo(t, "user", a);
  qo(t, "contexts", c);
  t.sdkProcessingMetadata = Oi(t.sdkProcessingMetadata, m, 2);
  if (d) {
    t.level = d;
  }
  if (I) {
    t.transactionName = I;
  }
  if (M) {
    t.span = M;
  }
  if (h.length) {
    t.breadcrumbs = [...t.breadcrumbs, ...h];
  }
  if (g.length) {
    t.fingerprint = [...t.fingerprint, ...g];
  }
  if (v.length) {
    t.eventProcessors = [...t.eventProcessors, ...v];
  }
  if (S.length) {
    t.attachments = [...t.attachments, ...S];
  }
  t.propagationContext = {
    ...t.propagationContext,
    ...k
  };
}
function qo(t, r, i) {
  t[r] = Oi(t[r], i, 1);
}
function dE(t, r) {
  const {
    extra: i,
    tags: s,
    user: a,
    contexts: c,
    level: d,
    transactionName: m
  } = r;
  if (Object.keys(i).length) {
    t.extra = {
      ...i,
      ...t.extra
    };
  }
  if (Object.keys(s).length) {
    t.tags = {
      ...s,
      ...t.tags
    };
  }
  if (Object.keys(a).length) {
    t.user = {
      ...a,
      ...t.user
    };
  }
  if (Object.keys(c).length) {
    t.contexts = {
      ...c,
      ...t.contexts
    };
  }
  if (d) {
    t.level = d;
  }
  if (m && t.type !== "transaction") {
    t.transaction = m;
  }
}
function pE(t, r) {
  const i = [...(t.breadcrumbs || []), ...r];
  t.breadcrumbs = i.length ? i : undefined;
}
function hE(t, r) {
  t.sdkProcessingMetadata = {
    ...t.sdkProcessingMetadata,
    ...r
  };
}
function mE(t, r) {
  t.contexts = {
    trace: F_(r),
    ...t.contexts
  };
  t.sdkProcessingMetadata = {
    dynamicSamplingContext: q_(r),
    ...t.sdkProcessingMetadata
  };
  const i = rm(r);
  const s = El(i).description;
  if (s && !t.transaction && t.type === "transaction") {
    t.transaction = s;
  }
}
function gE(t, r) {
  t.fingerprint = t.fingerprint ? Array.isArray(t.fingerprint) ? t.fingerprint : [t.fingerprint] : [];
  if (r) {
    t.fingerprint = t.fingerprint.concat(r);
  }
  if (!t.fingerprint.length) {
    delete t.fingerprint;
  }
}
let Zt;
let Tp;
let Ip;
let xn;
function yE(t) {
  const r = he._sentryDebugIds;
  const i = he._debugIds;
  if (!r && !i) {
    return {};
  }
  const s = r ? Object.keys(r) : [];
  const a = i ? Object.keys(i) : [];
  if (xn && s.length === Tp && a.length === Ip) {
    return xn;
  }
  Tp = s.length;
  Ip = a.length;
  xn = {};
  Zt ||= {};
  const c = (d, m) => {
    for (const h of d) {
      const g = m[h];
      const v = Zt == null ? undefined : Zt[h];
      if (v && xn && g) {
        xn[v[0]] = g;
        if (Zt) {
          Zt[h] = [v[0], g];
        }
      } else if (g) {
        const S = t(h);
        for (let k = S.length - 1; k >= 0; k--) {
          const I = S[k];
          const M = I == null ? undefined : I.filename;
          if (M && xn && Zt) {
            xn[M] = g;
            Zt[h] = [M, g];
            break;
          }
        }
      }
    }
  };
  if (r) {
    c(s, r);
  }
  if (i) {
    c(a, i);
  }
  return xn;
}
function vE(t, r, i, s, a, c) {
  const {
    normalizeDepth: d = 3,
    normalizeMaxBreadth: m = 1000
  } = t;
  const h = {
    ...r,
    event_id: r.event_id || i.event_id || ht(),
    timestamp: r.timestamp || Li()
  };
  const g = i.integrations || t.integrations.map(H => H.name);
  _E(h, t);
  wE(h, g);
  if (a) {
    a.emit("applyFrameMetadata", r);
  }
  if (r.type === undefined) {
    EE(h, t.stackParser);
  }
  const v = TE(s, i.captureContext);
  if (i.mechanism) {
    Nr(h, i.mechanism);
  }
  const S = a ? a.getEventProcessors() : [];
  const k = _l().getScopeData();
  if (c) {
    const H = c.getScopeData();
    ss(k, H);
  }
  if (v) {
    const H = v.getScopeData();
    ss(k, H);
  }
  const I = [...(i.attachments || []), ...k.attachments];
  if (I.length) {
    i.attachments = I;
  }
  fE(h, k);
  const M = [...S, ...k.eventProcessors];
  return cE(M, h, i).then(H => {
    if (H) {
      SE(H);
    }
    if (typeof d == "number" && d > 0) {
      return xE(H, d, m);
    } else {
      return H;
    }
  });
}
function _E(t, r) {
  var m;
  var h;
  const {
    environment: i,
    release: s,
    dist: a,
    maxValueLength: c
  } = r;
  t.environment = t.environment || i || Sl;
  if (!t.release && s) {
    t.release = s;
  }
  if (!t.dist && a) {
    t.dist = a;
  }
  const d = t.request;
  if (d != null && d.url && c) {
    d.url = $a(d.url, c);
  }
  if (c) {
    if ((h = (m = t.exception) == null ? undefined : m.values) != null) {
      h.forEach(g => {
        g.value &&= $a(g.value, c);
      });
    }
  }
}
function EE(t, r) {
  var s;
  var a;
  const i = yE(r);
  if ((a = (s = t.exception) == null ? undefined : s.values) != null) {
    a.forEach(c => {
      var d;
      var m;
      if ((m = (d = c.stacktrace) == null ? undefined : d.frames) != null) {
        m.forEach(h => {
          if (h.filename) {
            h.debug_id = i[h.filename];
          }
        });
      }
    });
  }
}
function SE(t) {
  var s;
  var a;
  const r = {};
  if ((a = (s = t.exception) == null ? undefined : s.values) != null) {
    a.forEach(c => {
      var d;
      var m;
      if ((m = (d = c.stacktrace) == null ? undefined : d.frames) != null) {
        m.forEach(h => {
          if (h.debug_id) {
            if (h.abs_path) {
              r[h.abs_path] = h.debug_id;
            } else if (h.filename) {
              r[h.filename] = h.debug_id;
            }
            delete h.debug_id;
          }
        });
      }
    });
  }
  if (Object.keys(r).length === 0) {
    return;
  }
  t.debug_meta = t.debug_meta || {};
  t.debug_meta.images = t.debug_meta.images || [];
  const i = t.debug_meta.images;
  Object.entries(r).forEach(([c, d]) => {
    i.push({
      type: "sourcemap",
      code_file: c,
      debug_id: d
    });
  });
}
function wE(t, r) {
  if (r.length > 0) {
    t.sdk = t.sdk || {};
    t.sdk.integrations = [...(t.sdk.integrations || []), ...r];
  }
}
function xE(t, r, i) {
  var a;
  var c;
  if (!t) {
    return null;
  }
  const s = {
    ...t,
    ...(t.breadcrumbs && {
      breadcrumbs: t.breadcrumbs.map(d => ({
        ...d,
        ...(d.data && {
          data: Ut(d.data, r, i)
        })
      }))
    }),
    ...(t.user && {
      user: Ut(t.user, r, i)
    }),
    ...(t.contexts && {
      contexts: Ut(t.contexts, r, i)
    }),
    ...(t.extra && {
      extra: Ut(t.extra, r, i)
    })
  };
  if ((a = t.contexts) != null && a.trace && s.contexts) {
    s.contexts.trace = t.contexts.trace;
    if (t.contexts.trace.data) {
      s.contexts.trace.data = Ut(t.contexts.trace.data, r, i);
    }
  }
  if (t.spans) {
    s.spans = t.spans.map(d => ({
      ...d,
      ...(d.data && {
        data: Ut(d.data, r, i)
      })
    }));
  }
  if ((c = t.contexts) != null && c.flags && s.contexts) {
    s.contexts.flags = Ut(t.contexts.flags, 3, i);
  }
  return s;
}
function TE(t, r) {
  if (!r) {
    return t;
  }
  const i = t ? t.clone() : new tn();
  i.update(r);
  return i;
}
function IE(t, r) {
  return zt().captureException(t, undefined);
}
function um(t, r) {
  return zt().captureEvent(t, r);
}
function Np(t) {
  const r = Qn();
  const i = zt();
  const {
    userAgent: s
  } = he.navigator || {};
  const a = n_({
    user: i.getUser() || r.getUser(),
    ...(s && {
      userAgent: s
    }),
    ...t
  });
  const c = r.getSession();
  if ((c == null ? undefined : c.status) === "ok") {
    kr(c, {
      status: "exited"
    });
  }
  am();
  r.setSession(a);
  return a;
}
function am() {
  const t = Qn();
  const i = zt().getSession() || t.getSession();
  if (i) {
    r_(i);
  }
  lm();
  t.setSession();
}
function lm() {
  const t = Qn();
  const r = Ve();
  const i = t.getSession();
  if (i && r) {
    r.captureSession(i);
  }
}
function kp(t = false) {
  if (t) {
    am();
    return;
  }
  lm();
}
const NE = "7";
function kE(t) {
  const r = t.protocol ? `${t.protocol}:` : "";
  const i = t.port ? `:${t.port}` : "";
  return `${r}//${t.host}${i}${t.path ? `/${t.path}` : ""}/api/`;
}
function CE(t) {
  return `${kE(t)}${t.projectId}/envelope/`;
}
function PE(t, r) {
  const i = {
    sentry_version: NE
  };
  if (t.publicKey) {
    i.sentry_key = t.publicKey;
  }
  if (r) {
    i.sentry_client = `${r.name}/${r.version}`;
  }
  return new URLSearchParams(i).toString();
}
function RE(t, r, i) {
  return r || `${CE(t)}?${PE(t, i)}`;
}
const Cp = [];
function LE(t) {
  const r = {};
  t.forEach(i => {
    const {
      name: s
    } = i;
    const a = r[s];
    if (!a || !!a.isDefaultInstance || !i.isDefaultInstance) {
      r[s] = i;
    }
  });
  return Object.values(r);
}
function OE(t) {
  const r = t.defaultIntegrations || [];
  const i = t.integrations;
  r.forEach(a => {
    a.isDefaultInstance = true;
  });
  let s;
  if (Array.isArray(i)) {
    s = [...r, ...i];
  } else if (typeof i == "function") {
    const a = i(r);
    s = Array.isArray(a) ? a : [a];
  } else {
    s = r;
  }
  return LE(s);
}
function AE(t, r) {
  const i = {};
  r.forEach(s => {
    if (s) {
      cm(t, s, i);
    }
  });
  return i;
}
function Pp(t, r) {
  for (const i of r) {
    if (i != null && i.afterAllSetup) {
      i.afterAllSetup(t);
    }
  }
}
function cm(t, r, i) {
  if (i[r.name]) {
    if (J) {
      Y.log(`Integration skipped because it was already installed: ${r.name}`);
    }
    return;
  }
  i[r.name] = r;
  if (!Cp.includes(r.name) && typeof r.setupOnce == "function") {
    r.setupOnce();
    Cp.push(r.name);
  }
  if (r.setup && typeof r.setup == "function") {
    r.setup(t);
  }
  if (typeof r.preprocessEvent == "function") {
    const s = r.preprocessEvent.bind(r);
    t.on("preprocessEvent", (a, c) => s(a, c, t));
  }
  if (typeof r.processEvent == "function") {
    const s = r.processEvent.bind(r);
    const a = Object.assign((c, d) => s(c, d, t), {
      id: r.name
    });
    t.addEventProcessor(a);
  }
  if (J) {
    Y.log(`Integration installed: ${r.name}`);
  }
}
function bE(t) {
  return [{
    type: "log",
    item_count: t.length,
    content_type: "application/vnd.sentry.items.log+json"
  }, {
    items: t
  }];
}
function ME(t, r, i, s) {
  const a = {};
  if (r != null && r.sdk) {
    a.sdk = {
      name: r.sdk.name,
      version: r.sdk.version
    };
  }
  if (i && s) {
    a.dsn = Ai(s);
  }
  return br(a, [bE(t)]);
}
function fm(t, r) {
  const i = r ?? DE(t) ?? [];
  if (i.length === 0) {
    return;
  }
  const s = t.getOptions();
  const a = ME(i, s._metadata, s.tunnel, t.getDsn());
  dm().set(t, []);
  t.emit("flushLogs");
  t.sendEnvelope(a);
}
function DE(t) {
  return dm().get(t);
}
function dm() {
  return Lr("clientToLogBufferMap", () => new WeakMap());
}
function FE(t) {
  return [{
    type: "trace_metric",
    item_count: t.length,
    content_type: "application/vnd.sentry.items.trace-metric+json"
  }, {
    items: t
  }];
}
function HE(t, r, i, s) {
  const a = {};
  if (r != null && r.sdk) {
    a.sdk = {
      name: r.sdk.name,
      version: r.sdk.version
    };
  }
  if (i && s) {
    a.dsn = Ai(s);
  }
  return br(a, [FE(t)]);
}
function pm(t, r) {
  const i = r ?? BE(t) ?? [];
  if (i.length === 0) {
    return;
  }
  const s = t.getOptions();
  const a = HE(i, s._metadata, s.tunnel, t.getDsn());
  hm().set(t, []);
  t.emit("flushMetrics");
  t.sendEnvelope(a);
}
function BE(t) {
  return hm().get(t);
}
function hm() {
  return Lr("clientToMetricBufferMap", () => new WeakMap());
}
const xl = Symbol.for("SentryBufferFullError");
function Tl(t = 100) {
  const r = new Set();
  function i() {
    return r.size < t;
  }
  function s(d) {
    r.delete(d);
  }
  function a(d) {
    if (!i()) {
      return wl(xl);
    }
    const m = d();
    r.add(m);
    m.then(() => s(m), () => s(m));
    return m;
  }
  function c(d) {
    if (!r.size) {
      return hs(true);
    }
    const m = Promise.allSettled(Array.from(r)).then(() => true);
    if (!d) {
      return m;
    }
    const h = [m, new Promise(g => setTimeout(() => g(false), d))];
    return Promise.race(h);
  }
  return {
    get $() {
      return Array.from(r);
    },
    add: a,
    drain: c
  };
}
const UE = 60000;
function jE(t, r = Date.now()) {
  const i = parseInt(`${t}`, 10);
  if (!isNaN(i)) {
    return i * 1000;
  }
  const s = Date.parse(`${t}`);
  if (isNaN(s)) {
    return UE;
  } else {
    return s - r;
  }
}
function zE(t, r) {
  return t[r] || t.all || 0;
}
function $E(t, r, i = Date.now()) {
  return zE(t, r) > i;
}
function GE(t, {
  statusCode: r,
  headers: i
}, s = Date.now()) {
  const a = {
    ...t
  };
  const c = i == null ? undefined : i["x-sentry-rate-limits"];
  const d = i == null ? undefined : i["retry-after"];
  if (c) {
    for (const m of c.trim().split(",")) {
      const [h, g,,, v] = m.split(":", 5);
      const S = parseInt(h, 10);
      const k = (isNaN(S) ? 60 : S) * 1000;
      if (!g) {
        a.all = s + k;
      } else {
        for (const I of g.split(";")) {
          if (I === "metric_bucket") {
            if (!v || v.split(";").includes("custom")) {
              a[I] = s + k;
            }
          } else {
            a[I] = s + k;
          }
        }
      }
    }
  } else if (d) {
    a.all = s + jE(d, s);
  } else if (r === 429) {
    a.all = s + 60000;
  }
  return a;
}
const mm = 64;
function gm(t, r, i = Tl(t.bufferSize || mm)) {
  let s = {};
  const a = d => i.drain(d);
  function c(d) {
    const m = [];
    Ep(d, (S, k) => {
      const I = Sp(k);
      if ($E(s, I)) {
        t.recordDroppedEvent("ratelimit_backoff", I);
      } else {
        m.push(S);
      }
    });
    if (m.length === 0) {
      return Promise.resolve({});
    }
    const h = br(d[0], m);
    const g = S => {
      Ep(h, (k, I) => {
        t.recordDroppedEvent(S, Sp(I));
      });
    };
    const v = () => r({
      body: nE(h)
    }).then(S => {
      if (S.statusCode !== undefined && (S.statusCode < 200 || S.statusCode >= 300) && J) {
        Y.warn(`Sentry responded with status code ${S.statusCode} to sent event.`);
      }
      s = GE(s, S);
      return S;
    }, S => {
      g("network_error");
      if (J) {
        Y.error("Encountered error running transport request:", S);
      }
      throw S;
    });
    return i.add(v).then(S => S, S => {
      if (S === xl) {
        if (J) {
          Y.error("Skipped sending event because buffer is full.");
        }
        g("queue_overflow");
        return Promise.resolve({});
      }
      throw S;
    });
  }
  return {
    send: c,
    flush: a
  };
}
function VE(t, r, i) {
  const s = [{
    type: "client_report"
  }, {
    timestamp: Li(),
    discarded_events: t
  }];
  return br(r ? {
    dsn: r
  } : {}, [s]);
}
function ym(t) {
  const r = [];
  if (t.message) {
    r.push(t.message);
  }
  try {
    const i = t.exception.values[t.exception.values.length - 1];
    if (i != null && i.value) {
      r.push(i.value);
      if (i.type) {
        r.push(`${i.type}: ${i.value}`);
      }
    }
  } catch {}
  return r;
}
function WE(t) {
  var h;
  const {
    trace_id: r,
    parent_span_id: i,
    span_id: s,
    status: a,
    origin: c,
    data: d,
    op: m
  } = ((h = t.contexts) == null ? undefined : h.trace) ?? {};
  return {
    data: d ?? {},
    description: t.transaction,
    op: m,
    parent_span_id: i,
    span_id: s ?? "",
    start_timestamp: t.start_timestamp ?? 0,
    status: a,
    timestamp: t.timestamp,
    trace_id: r ?? "",
    origin: c,
    profile_id: d == null ? undefined : d[Zh],
    exclusive_time: d == null ? undefined : d[Jh],
    measurements: t.measurements,
    is_segment: true
  };
}
function XE(t) {
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
            [Zh]: t.profile_id
          }),
          ...(t.exclusive_time && {
            [Jh]: t.exclusive_time
          })
        }
      }
    },
    measurements: t.measurements
  };
}
const Rp = "Not capturing exception because it's already been captured.";
const Lp = "Discarded session because of missing or non-string release";
const vm = Symbol.for("SentryInternalError");
const _m = Symbol.for("SentryDoNotSendEventError");
const YE = 5000;
function rs(t) {
  return {
    message: t,
    [vm]: true
  };
}
function ka(t) {
  return {
    message: t,
    [_m]: true
  };
}
function Op(t) {
  return !!t && typeof t == "object" && vm in t;
}
function Ap(t) {
  return !!t && typeof t == "object" && _m in t;
}
function bp(t, r, i, s, a) {
  let c = 0;
  let d;
  let m = false;
  t.on(i, () => {
    c = 0;
    clearTimeout(d);
    m = false;
  });
  t.on(r, h => {
    c += s(h);
    if (c >= 800000) {
      a(t);
    } else if (!m) {
      m = true;
      d = setTimeout(() => {
        a(t);
      }, YE);
    }
  });
  t.on("flush", () => {
    a(t);
  });
}
class qE {
  constructor(r) {
    var s;
    var a;
    var c;
    this._options = r;
    this._integrations = {};
    this._numProcessing = 0;
    this._outcomes = {};
    this._hooks = {};
    this._eventProcessors = [];
    this._promiseBuffer = Tl(((s = r.transportOptions) == null ? undefined : s.bufferSize) ?? mm);
    if (r.dsn) {
      this._dsn = M_(r.dsn);
    } else if (J) {
      Y.warn("No DSN provided, client will not send events.");
    }
    if (this._dsn) {
      const d = RE(this._dsn, r.tunnel, r._metadata ? r._metadata.sdk : undefined);
      this._transport = r.transport({
        tunnel: this._options.tunnel,
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...r.transportOptions,
        url: d
      });
    }
    this._options.enableLogs = this._options.enableLogs ?? ((a = this._options._experiments) == null ? undefined : a.enableLogs);
    if (this._options.enableLogs) {
      bp(this, "afterCaptureLog", "flushLogs", JE, fm);
    }
    if (this._options.enableMetrics ?? ((c = this._options._experiments) == null ? undefined : c.enableMetrics) ?? true) {
      bp(this, "afterCaptureMetric", "flushMetrics", ZE, pm);
    }
  }
  captureException(r, i, s) {
    const a = ht();
    if (up(r)) {
      if (J) {
        Y.log(Rp);
      }
      return a;
    }
    const c = {
      event_id: a,
      ...i
    };
    this._process(() => this.eventFromException(r, c).then(d => this._captureEvent(d, c, s)).then(d => d), "error");
    return c.event_id;
  }
  captureMessage(r, i, s, a) {
    const c = {
      event_id: ht(),
      ...s
    };
    const d = hl(r) ? r : String(r);
    const m = fs(r);
    const h = m ? this.eventFromMessage(d, i, c) : this.eventFromException(r, c);
    this._process(() => h.then(g => this._captureEvent(g, c, a)), m ? "unknown" : "error");
    return c.event_id;
  }
  captureEvent(r, i, s) {
    const a = ht();
    if (i != null && i.originalException && up(i.originalException)) {
      if (J) {
        Y.log(Rp);
      }
      return a;
    }
    const c = {
      event_id: a,
      ...i
    };
    const d = r.sdkProcessingMetadata || {};
    const m = d.capturedSpanScope;
    const h = d.capturedSpanIsolationScope;
    const g = Mp(r.type);
    this._process(() => this._captureEvent(r, c, m || s, h), g);
    return c.event_id;
  }
  captureSession(r) {
    this.sendSession(r);
    kr(r, {
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
  async flush(r) {
    const i = this._transport;
    if (!i) {
      return true;
    }
    this.emit("flush");
    const s = await this._isClientDoneProcessing(r);
    const a = await i.flush(r);
    return s && a;
  }
  async close(r) {
    const i = await this.flush(r);
    this.getOptions().enabled = false;
    this.emit("close");
    return i;
  }
  getEventProcessors() {
    return this._eventProcessors;
  }
  addEventProcessor(r) {
    this._eventProcessors.push(r);
  }
  init() {
    if (this._isEnabled() || this._options.integrations.some(({
      name: r
    }) => r.startsWith("Spotlight"))) {
      this._setupIntegrations();
    }
  }
  getIntegrationByName(r) {
    return this._integrations[r];
  }
  addIntegration(r) {
    const i = this._integrations[r.name];
    cm(this, r, this._integrations);
    if (!i) {
      Pp(this, [r]);
    }
  }
  sendEvent(r, i = {}) {
    this.emit("beforeSendEvent", r, i);
    let s = lE(r, this._dsn, this._options._metadata, this._options.tunnel);
    for (const a of i.attachments || []) {
      s = tE(s, iE(a));
    }
    this.sendEnvelope(s).then(a => this.emit("afterSendEvent", r, a));
  }
  sendSession(r) {
    const {
      release: i,
      environment: s = Sl
    } = this._options;
    if ("aggregates" in r) {
      const c = r.attrs || {};
      if (!c.release && !i) {
        if (J) {
          Y.warn(Lp);
        }
        return;
      }
      c.release = c.release || i;
      c.environment = c.environment || s;
      r.attrs = c;
    } else {
      if (!r.release && !i) {
        if (J) {
          Y.warn(Lp);
        }
        return;
      }
      r.release = r.release || i;
      r.environment = r.environment || s;
    }
    this.emit("beforeSendSession", r);
    const a = aE(r, this._dsn, this._options._metadata, this._options.tunnel);
    this.sendEnvelope(a);
  }
  recordDroppedEvent(r, i, s = 1) {
    if (this._options.sendClientReports) {
      const a = `${r}:${i}`;
      if (J) {
        Y.log(`Recording outcome: "${a}"${s > 1 ? ` (${s} times)` : ""}`);
      }
      this._outcomes[a] = (this._outcomes[a] || 0) + s;
    }
  }
  on(r, i) {
    const s = this._hooks[r] = this._hooks[r] || new Set();
    const a = (...c) => i(...c);
    s.add(a);
    return () => {
      s.delete(a);
    };
  }
  emit(r, ...i) {
    const s = this._hooks[r];
    if (s) {
      s.forEach(a => a(...i));
    }
  }
  async sendEnvelope(r) {
    this.emit("beforeEnvelope", r);
    if (this._isEnabled() && this._transport) {
      try {
        return await this._transport.send(r);
      } catch (i) {
        if (J) {
          Y.error("Error while sending envelope:", i);
        }
        return {};
      }
    }
    if (J) {
      Y.error("Transport disabled");
    }
    return {};
  }
  _setupIntegrations() {
    const {
      integrations: r
    } = this._options;
    this._integrations = AE(this, r);
    Pp(this, r);
  }
  _updateSessionFromEvent(r, i) {
    var h;
    var g;
    let s = i.level === "fatal";
    let a = false;
    const c = (h = i.exception) == null ? undefined : h.values;
    if (c) {
      a = true;
      s = false;
      for (const v of c) {
        if (((g = v.mechanism) == null ? undefined : g.handled) === false) {
          s = true;
          break;
        }
      }
    }
    const d = r.status === "ok";
    if (d && r.errors === 0 || d && s) {
      kr(r, {
        ...(s && {
          status: "crashed"
        }),
        errors: r.errors || Number(a || s)
      });
      this.captureSession(r);
    }
  }
  async _isClientDoneProcessing(r) {
    let i = 0;
    while (!r || i < r) {
      await new Promise(s => setTimeout(s, 1));
      if (!this._numProcessing) {
        return true;
      }
      i++;
    }
    return false;
  }
  _isEnabled() {
    return this.getOptions().enabled !== false && this._transport !== undefined;
  }
  _prepareEvent(r, i, s, a) {
    const c = this.getOptions();
    const d = Object.keys(this._integrations);
    if (!i.integrations && d != null && d.length) {
      i.integrations = d;
    }
    this.emit("preprocessEvent", r, i);
    if (!r.type) {
      a.setLastEventId(r.event_id || i.event_id);
    }
    return vE(c, r, i, s, this, a).then(m => {
      if (m === null) {
        return m;
      }
      this.emit("postprocessEvent", m, i);
      m.contexts = {
        trace: p_(s),
        ...m.contexts
      };
      const h = Y_(this, s);
      m.sdkProcessingMetadata = {
        dynamicSamplingContext: h,
        ...m.sdkProcessingMetadata
      };
      return m;
    });
  }
  _captureEvent(r, i = {}, s = zt(), a = Qn()) {
    if (J && qa(r)) {
      Y.log(`Captured error event \`${ym(r)[0] || "<unknown>"}\``);
    }
    return this._processEvent(r, i, s, a).then(c => c.event_id, c => {
      if (J) {
        if (Ap(c)) {
          Y.log(c.message);
        } else if (Op(c)) {
          Y.warn(c.message);
        } else {
          Y.warn(c);
        }
      }
    });
  }
  _processEvent(r, i, s, a) {
    const c = this.getOptions();
    const {
      sampleRate: d
    } = c;
    const m = Em(r);
    const h = qa(r);
    const v = `before send for type \`${r.type || "error"}\``;
    const S = typeof d === "undefined" ? undefined : D_(d);
    if (h && typeof S == "number" && Math.random() > S) {
      this.recordDroppedEvent("sample_rate", "error");
      return wl(ka(`Discarding event because it's not included in the random sample (sampling rate = ${d})`));
    }
    const k = Mp(r.type);
    return this._prepareEvent(r, i, s, a).then(I => {
      if (I === null) {
        this.recordDroppedEvent("event_processor", k);
        throw ka("An event processor returned `null`, will not send event.");
      }
      if (i.data && i.data.__sentry__ === true) {
        return I;
      }
      const O = QE(this, c, I, i);
      return KE(O, v);
    }).then(I => {
      var H;
      if (I === null) {
        this.recordDroppedEvent("before_send", k);
        if (m) {
          const Q = 1 + (r.spans || []).length;
          this.recordDroppedEvent("before_send", "span", Q);
        }
        throw ka(`${v} returned \`null\`, will not send event.`);
      }
      const M = s.getSession() || a.getSession();
      if (h && M) {
        this._updateSessionFromEvent(M, I);
      }
      if (m) {
        const Z = ((H = I.sdkProcessingMetadata) == null ? undefined : H.spanCountBeforeProcessing) || 0;
        const Q = I.spans ? I.spans.length : 0;
        const q = Z - Q;
        if (q > 0) {
          this.recordDroppedEvent("before_send", "span", q);
        }
      }
      const O = I.transaction_info;
      if (m && O && I.transaction !== r.transaction) {
        const Z = "custom";
        I.transaction_info = {
          ...O,
          source: Z
        };
      }
      this.sendEvent(I, i);
      return I;
    }).then(null, I => {
      throw Ap(I) || Op(I) ? I : (this.captureException(I, {
        mechanism: {
          handled: false,
          type: "internal"
        },
        data: {
          __sentry__: true
        },
        originalException: I
      }), rs(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${I}`));
    });
  }
  _process(r, i) {
    this._numProcessing++;
    this._promiseBuffer.add(r).then(s => {
      this._numProcessing--;
      return s;
    }, s => {
      this._numProcessing--;
      if (s === xl) {
        this.recordDroppedEvent("queue_overflow", i);
      }
      return s;
    });
  }
  _clearOutcomes() {
    const r = this._outcomes;
    this._outcomes = {};
    return Object.entries(r).map(([i, s]) => {
      const [a, c] = i.split(":");
      return {
        reason: a,
        category: c,
        quantity: s
      };
    });
  }
  _flushOutcomes() {
    if (J) {
      Y.log("Flushing outcomes...");
    }
    const r = this._clearOutcomes();
    if (r.length === 0) {
      if (J) {
        Y.log("No outcomes to send");
      }
      return;
    }
    if (!this._dsn) {
      if (J) {
        Y.log("No dsn provided, will not send outcomes");
      }
      return;
    }
    if (J) {
      Y.log("Sending outcomes:", r);
    }
    const i = VE(r, this._options.tunnel && Ai(this._dsn));
    this.sendEnvelope(i);
  }
}
function Mp(t) {
  if (t === "replay_event") {
    return "replay";
  } else {
    return t || "error";
  }
}
function KE(t, r) {
  const i = `${r} must return \`null\` or a valid event.`;
  if (Ri(t)) {
    return t.then(s => {
      if (!xi(s) && s !== null) {
        throw rs(i);
      }
      return s;
    }, s => {
      throw rs(`${r} rejected with ${s}`);
    });
  }
  if (!xi(t) && t !== null) {
    throw rs(i);
  }
  return t;
}
function QE(t, r, i, s) {
  const {
    beforeSend: a,
    beforeSendTransaction: c,
    beforeSendSpan: d,
    ignoreSpans: m
  } = r;
  let h = i;
  if (qa(h) && a) {
    return a(h, s);
  }
  if (Em(h)) {
    if (d || m) {
      const g = WE(h);
      if (m != null && m.length && _p(g, m)) {
        return null;
      }
      if (d) {
        const v = d(g);
        if (v) {
          h = Oi(i, XE(v));
        } else {
          yp();
        }
      }
      if (h.spans) {
        const v = [];
        const S = h.spans;
        for (const I of S) {
          if (m != null && m.length && _p(I, m)) {
            V_(S, I);
            continue;
          }
          if (d) {
            const M = d(I);
            if (M) {
              v.push(M);
            } else {
              yp();
              v.push(I);
            }
          } else {
            v.push(I);
          }
        }
        const k = h.spans.length - v.length;
        if (k) {
          t.recordDroppedEvent("before_send", "span", k);
        }
        h.spans = v;
      }
    }
    if (c) {
      if (h.spans) {
        const g = h.spans.length;
        h.sdkProcessingMetadata = {
          ...i.sdkProcessingMetadata,
          spanCountBeforeProcessing: g
        };
      }
      return c(h, s);
    }
  }
  return h;
}
function qa(t) {
  return t.type === undefined;
}
function Em(t) {
  return t.type === "transaction";
}
function ZE(t) {
  let r = 0;
  if (t.name) {
    r += t.name.length * 2;
  }
  r += 8;
  return r + Sm(t.attributes);
}
function JE(t) {
  let r = 0;
  if (t.message) {
    r += t.message.length * 2;
  }
  return r + Sm(t.attributes);
}
function Sm(t) {
  if (!t) {
    return 0;
  }
  let r = 0;
  Object.values(t).forEach(i => {
    if (Array.isArray(i)) {
      r += i.length * Dp(i[0]);
    } else if (fs(i)) {
      r += Dp(i);
    } else {
      r += 100;
    }
  });
  return r;
}
function Dp(t) {
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
function eS(t, r) {
  if (r.debug === true) {
    if (J) {
      Y.enable();
    } else {
      Or(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  zt().update(r.initialScope);
  const s = new t(r);
  tS(s);
  s.init();
  return s;
}
function tS(t) {
  zt().setClient(t);
}
function Ca(t) {
  if (!t) {
    return {};
  }
  const r = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
  if (!r) {
    return {};
  }
  const i = r[6] || "";
  const s = r[8] || "";
  return {
    host: r[4],
    path: r[5],
    protocol: r[2],
    search: i,
    hash: s,
    relative: r[5] + i + s
  };
}
function nS(t) {
  var r;
  if ("aggregates" in t) {
    if (((r = t.attrs) == null ? undefined : r.ip_address) === undefined) {
      t.attrs = {
        ...t.attrs,
        ip_address: "{{auto}}"
      };
    }
  } else if (t.ipAddress === undefined) {
    t.ipAddress = "{{auto}}";
  }
}
function rS(t, r, i = [r], s = "npm") {
  const a = t._metadata || {};
  a.sdk ||= {
    name: `sentry.javascript.${r}`,
    packages: i.map(c => ({
      name: `${s}:@sentry/${c}`,
      version: Vn
    })),
    version: Vn
  };
  t._metadata = a;
}
const iS = 100;
function Yn(t, r) {
  const i = Ve();
  const s = Qn();
  if (!i) {
    return;
  }
  const {
    beforeBreadcrumb: a = null,
    maxBreadcrumbs: c = iS
  } = i.getOptions();
  if (c <= 0) {
    return;
  }
  const m = {
    timestamp: Li(),
    ...t
  };
  const h = a ? Or(() => a(m, r)) : m;
  if (h !== null) {
    if (i.emit) {
      i.emit("beforeAddBreadcrumb", h, r);
    }
    s.addBreadcrumb(h, c);
  }
}
let Fp;
const oS = "FunctionToString";
const Hp = new WeakMap();
const sS = () => ({
  name: oS,
  setupOnce() {
    Fp = Function.prototype.toString;
    try {
      Function.prototype.toString = function (...t) {
        const r = yl(this);
        const i = Hp.has(Ve()) && r !== undefined ? r : this;
        return Fp.apply(i, t);
      };
    } catch {}
  },
  setup(t) {
    Hp.set(t, true);
  }
});
const uS = sS;
const aS = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, /^Can't find variable: gmo$/, /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/, `can't redefine non-configurable property "solana"`, "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler", /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/, /^Java exception was raised during method invocation$/];
const lS = "EventFilters";
const cS = (t = {}) => {
  let r;
  return {
    name: lS,
    setup(i) {
      const s = i.getOptions();
      r = Bp(t, s);
    },
    processEvent(i, s, a) {
      if (!r) {
        const c = a.getOptions();
        r = Bp(t, c);
      }
      if (dS(i, r)) {
        return null;
      } else {
        return i;
      }
    }
  };
};
const fS = (t = {}) => ({
  ...cS(t),
  name: "InboundFilters"
});
function Bp(t = {}, r = {}) {
  return {
    allowUrls: [...(t.allowUrls || []), ...(r.allowUrls || [])],
    denyUrls: [...(t.denyUrls || []), ...(r.denyUrls || [])],
    ignoreErrors: [...(t.ignoreErrors || []), ...(r.ignoreErrors || []), ...(t.disableErrorDefaults ? [] : aS)],
    ignoreTransactions: [...(t.ignoreTransactions || []), ...(r.ignoreTransactions || [])]
  };
}
function dS(t, r) {
  if (t.type) {
    if (t.type === "transaction" && hS(t, r.ignoreTransactions)) {
      if (J) {
        Y.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${Gn(t)}`);
      }
      return true;
    }
  } else {
    if (pS(t, r.ignoreErrors)) {
      if (J) {
        Y.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Gn(t)}`);
      }
      return true;
    }
    if (vS(t)) {
      if (J) {
        Y.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${Gn(t)}`);
      }
      return true;
    }
    if (mS(t, r.denyUrls)) {
      if (J) {
        Y.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Gn(t)}.
Url: ${us(t)}`);
      }
      return true;
    }
    if (!gS(t, r.allowUrls)) {
      if (J) {
        Y.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Gn(t)}.
Url: ${us(t)}`);
      }
      return true;
    }
  }
  return false;
}
function pS(t, r) {
  if (r != null && r.length) {
    return ym(t).some(i => ps(i, r));
  } else {
    return false;
  }
}
function hS(t, r) {
  if (r == null || !r.length) {
    return false;
  }
  const i = t.transaction;
  if (i) {
    return ps(i, r);
  } else {
    return false;
  }
}
function mS(t, r) {
  if (r == null || !r.length) {
    return false;
  }
  const i = us(t);
  if (i) {
    return ps(i, r);
  } else {
    return false;
  }
}
function gS(t, r) {
  if (r == null || !r.length) {
    return true;
  }
  const i = us(t);
  if (i) {
    return ps(i, r);
  } else {
    return true;
  }
}
function yS(t = []) {
  for (let r = t.length - 1; r >= 0; r--) {
    const i = t[r];
    if (i && i.filename !== "<anonymous>" && i.filename !== "[native code]") {
      return i.filename || null;
    }
  }
  return null;
}
function us(t) {
  var r;
  var i;
  try {
    const s = [...(((r = t.exception) == null ? undefined : r.values) ?? [])].reverse().find(c => {
      var d;
      var m;
      var h;
      return ((d = c.mechanism) == null ? undefined : d.parent_id) === undefined && ((h = (m = c.stacktrace) == null ? undefined : m.frames) == null ? undefined : h.length);
    });
    const a = (i = s == null ? undefined : s.stacktrace) == null ? undefined : i.frames;
    if (a) {
      return yS(a);
    } else {
      return null;
    }
  } catch {
    if (J) {
      Y.error(`Cannot extract url for event ${Gn(t)}`);
    }
    return null;
  }
}
function vS(t) {
  var r;
  var i;
  if ((i = (r = t.exception) == null ? undefined : r.values) != null && i.length) {
    return !t.message && !t.exception.values.some(s => s.stacktrace || s.type && s.type !== "Error" || s.value);
  } else {
    return false;
  }
}
function _S(t, r, i, s, a, c) {
  var m;
  if ((m = a.exception) == null || !m.values || !c || !Nn(c.originalException, Error)) {
    return;
  }
  const d = a.exception.values.length > 0 ? a.exception.values[a.exception.values.length - 1] : undefined;
  if (d) {
    a.exception.values = Ka(t, r, s, c.originalException, i, a.exception.values, d, 0);
  }
}
function Ka(t, r, i, s, a, c, d, m) {
  if (c.length >= i + 1) {
    return c;
  }
  let h = [...c];
  if (Nn(s[a], Error)) {
    Up(d, m);
    const g = t(r, s[a]);
    const v = h.length;
    jp(g, a, v, m);
    h = Ka(t, r, i, s[a], a, [g, ...h], g, v);
  }
  if (Array.isArray(s.errors)) {
    s.errors.forEach((g, v) => {
      if (Nn(g, Error)) {
        Up(d, m);
        const S = t(r, g);
        const k = h.length;
        jp(S, `errors[${v}]`, k, m);
        h = Ka(t, r, i, g, a, [S, ...h], S, k);
      }
    });
  }
  return h;
}
function Up(t, r) {
  t.mechanism = {
    handled: true,
    type: "auto.core.linked_errors",
    ...t.mechanism,
    ...(t.type === "AggregateError" && {
      is_exception_group: true
    }),
    exception_id: r
  };
}
function jp(t, r, i, s) {
  t.mechanism = {
    handled: true,
    ...t.mechanism,
    type: "chained",
    source: r,
    exception_id: i,
    parent_id: s
  };
}
function ES(t) {
  const r = "console";
  qn(r, t);
  Kn(r, SS);
}
function SS() {
  if ("console" in he) {
    L0.forEach(function (t) {
      if (t in he.console) {
        pt(he.console, t, function (r) {
          os[t] = r;
          return function (...i) {
            Rt("console", {
              args: i,
              level: t
            });
            const a = os[t];
            if (a != null) {
              a.apply(he.console, i);
            }
          };
        });
      }
    });
  }
}
function wS(t) {
  if (t === "warn") {
    return "warning";
  } else if (["fatal", "error", "warning", "log", "info", "debug"].includes(t)) {
    return t;
  } else {
    return "log";
  }
}
const xS = "Dedupe";
const TS = () => {
  let t;
  return {
    name: xS,
    processEvent(r) {
      if (r.type) {
        return r;
      }
      try {
        if (NS(r, t)) {
          if (J) {
            Y.warn("Event dropped due to being a duplicate of previously captured event.");
          }
          return null;
        }
      } catch {}
      return t = r;
    }
  };
};
const IS = TS;
function NS(t, r) {
  if (r) {
    return !!kS(t, r) || !!CS(t, r);
  } else {
    return false;
  }
}
function kS(t, r) {
  const i = t.message;
  const s = r.message;
  return (!!i || !!s) && (!i || !!s) && (!!i || !s) && i === s && !!xm(t, r) && !!wm(t, r);
}
function CS(t, r) {
  const i = zp(r);
  const s = zp(t);
  return !!i && !!s && i.type === s.type && i.value === s.value && !!xm(t, r) && !!wm(t, r);
}
function wm(t, r) {
  let i = tp(t);
  let s = tp(r);
  if (!i && !s) {
    return true;
  }
  if (i && !s || !i && s || (i = i, s = s, s.length !== i.length)) {
    return false;
  }
  for (let a = 0; a < s.length; a++) {
    const c = s[a];
    const d = i[a];
    if (c.filename !== d.filename || c.lineno !== d.lineno || c.colno !== d.colno || c.function !== d.function) {
      return false;
    }
  }
  return true;
}
function xm(t, r) {
  let i = t.fingerprint;
  let s = r.fingerprint;
  if (!i && !s) {
    return true;
  }
  if (i && !s || !i && s) {
    return false;
  }
  i = i;
  s = s;
  try {
    return i.join("") === s.join("");
  } catch {
    return false;
  }
}
function zp(t) {
  var r;
  var i;
  if ((i = (r = t.exception) == null ? undefined : r.values) == null) {
    return undefined;
  } else {
    return i[0];
  }
}
function Tm(t) {
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
const Ii = he;
function PS() {
  return "history" in Ii && !!Ii.history;
}
function RS() {
  if (!("fetch" in Ii)) {
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
function Qa(t) {
  return t && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString());
}
function LS() {
  var i;
  if (typeof EdgeRuntime == "string") {
    return true;
  }
  if (!RS()) {
    return false;
  }
  if (Qa(Ii.fetch)) {
    return true;
  }
  let t = false;
  const r = Ii.document;
  if (r && typeof r.createElement == "function") {
    try {
      const s = r.createElement("iframe");
      s.hidden = true;
      r.head.appendChild(s);
      if ((i = s.contentWindow) != null && i.fetch) {
        t = Qa(s.contentWindow.fetch);
      }
      r.head.removeChild(s);
    } catch (s) {
      if (J) {
        Y.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", s);
      }
    }
  }
  return t;
}
function OS(t, r) {
  const i = "fetch";
  qn(i, t);
  Kn(i, () => AS(undefined, r));
}
function AS(t, r = false) {
  if (!r || !!LS()) {
    pt(he, "fetch", function (i) {
      return function (...s) {
        const a = new Error();
        const {
          method: c,
          url: d
        } = bS(s);
        const m = {
          args: s,
          fetchData: {
            method: c,
            url: d
          },
          startTimestamp: en() * 1000,
          virtualError: a,
          headers: MS(s)
        };
        Rt("fetch", {
          ...m
        });
        return i.apply(he, s).then(async h => {
          Rt("fetch", {
            ...m,
            endTimestamp: en() * 1000,
            response: h
          });
          return h;
        }, h => {
          Rt("fetch", {
            ...m,
            endTimestamp: en() * 1000,
            error: h
          });
          if (pl(h) && h.stack === undefined) {
            h.stack = a.stack;
            Xn(h, "framesToPop", 1);
          }
          if (h instanceof TypeError && (h.message === "Failed to fetch" || h.message === "Load failed" || h.message === "NetworkError when attempting to fetch resource.")) {
            try {
              const g = new URL(m.fetchData.url);
              h.message = `${h.message} (${g.host})`;
            } catch {}
          }
          throw h;
        });
      };
    });
  }
}
function Za(t, r) {
  return !!t && typeof t == "object" && !!t[r];
}
function $p(t) {
  if (typeof t == "string") {
    return t;
  } else if (t) {
    if (Za(t, "url")) {
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
function bS(t) {
  if (t.length === 0) {
    return {
      method: "GET",
      url: ""
    };
  }
  if (t.length === 2) {
    const [i, s] = t;
    return {
      url: $p(i),
      method: Za(s, "method") ? String(s.method).toUpperCase() : "GET"
    };
  }
  const r = t[0];
  return {
    url: $p(r),
    method: Za(r, "method") ? String(r.method).toUpperCase() : "GET"
  };
}
function MS(t) {
  const [r, i] = t;
  try {
    if (typeof i == "object" && i !== null && "headers" in i && i.headers) {
      return new Headers(i.headers);
    }
    if (X0(r)) {
      return new Headers(r.headers);
    }
  } catch {}
}
function DS() {
  return "npm";
}
function FS(t, r = false) {
  return !r && (!t || !!t.startsWith("/") || !!t.match(/^[A-Z]:/) || !!t.startsWith(".") || !!t.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//)) && t !== undefined && !t.includes("node_modules/");
}
function HS(t) {
  const r = /^\s*[-]{4,}$/;
  const i = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;
  const s = /at (?:async )?(.+?) \(data:(.*?),/;
  return a => {
    var m;
    const c = a.match(s);
    if (c) {
      return {
        filename: `<data:${c[2]}>`,
        function: c[1]
      };
    }
    const d = a.match(i);
    if (d) {
      let h;
      let g;
      let v;
      let S;
      let k;
      if (d[1]) {
        v = d[1];
        let O = v.lastIndexOf(".");
        if (v[O - 1] === ".") {
          O--;
        }
        if (O > 0) {
          h = v.slice(0, O);
          g = v.slice(O + 1);
          const H = h.indexOf(".Module");
          if (H > 0) {
            v = v.slice(H + 1);
            h = h.slice(0, H);
          }
        }
        S = undefined;
      }
      if (g) {
        S = h;
        k = g;
      }
      if (g === "<anonymous>") {
        k = undefined;
        v = undefined;
      }
      if (v === undefined) {
        k = k || Tn;
        v = S ? `${S}.${k}` : k;
      }
      let I = (m = d[2]) != null && m.startsWith("file://") ? d[2].slice(7) : d[2];
      const M = d[5] === "native";
      if (I != null && I.match(/\/[A-Z]:/)) {
        I = I.slice(1);
      }
      if (!I && d[5] && !M) {
        I = d[5];
      }
      return {
        filename: I ? decodeURI(I) : undefined,
        module: undefined,
        function: v,
        lineno: Gp(d[3]),
        colno: Gp(d[4]),
        in_app: FS(I || "", M)
      };
    }
    if (a.match(r)) {
      return {
        filename: a
      };
    }
  };
}
function BS(t) {
  return [90, HS()];
}
function Gp(t) {
  return parseInt(t || "", 10) || undefined;
}
var Vp;
(function (t) {
  t[t.Classic = 1] = "Classic";
  t[t.Protocol = 2] = "Protocol";
  t[t.Both = 3] = "Both";
})(Vp ||= {});
function US(t) {
  return {
    createUrl: r => `${t}://${r}/sentry_key`,
    urlMatches: function (r, i) {
      return r.startsWith(this.createUrl(i));
    },
    createKey: r => `${t}.${r}`,
    namespace: t
  };
}
const jS = "sentry-electron-renderer-id";
function zS(t) {
  var i;
  const r = US(t);
  if ((i = window.__SENTRY_IPC__) != null && i[r.namespace]) {
    return window.__SENTRY_IPC__[r.namespace];
  }
  {
    Y.log("IPC was not configured in preload script, falling back to custom protocol and fetch");
    const s = window.__SENTRY_RENDERER_ID__ = ht();
    const a = {
      [jS]: s
    };
    return {
      sendRendererStart: () => {
        fetch(r.createUrl("start"), {
          method: "POST",
          body: "",
          headers: a
        }).catch(() => {
          console.error(`Sentry SDK failed to establish connection with the Electron main process.
  - Ensure you have initialized the SDK in the main process
  - If your renderers use custom sessions, be sure to set 'getSessions' in the main process options
  - If you are bundling your main process code and using Electron < v5, you'll need to manually configure a preload script`);
        });
      },
      sendScope: c => {
        fetch(r.createUrl("scope"), {
          method: "POST",
          body: c,
          headers: a
        }).catch(() => {});
      },
      sendEnvelope: c => {
        fetch(r.createUrl("envelope"), {
          method: "POST",
          body: c,
          headers: a
        }).catch(() => {});
      },
      sendStatus: c => {
        fetch(r.createUrl("status"), {
          method: "POST",
          body: JSON.stringify({
            status: c
          }),
          headers: a
        }).catch(() => {});
      },
      sendStructuredLog: c => {
        fetch(r.createUrl("structured-log"), {
          method: "POST",
          body: JSON.stringify(c),
          headers: a
        }).catch(() => {});
      }
    };
  }
}
let Ko;
function Im(t = Ve()) {
  if (!t) {
    throw new Error("Could not find client, make sure to call Sentry.init before getIPC");
  }
  Ko ||= new WeakMap();
  const r = Ko.get(t);
  if (r) {
    return r;
  }
  const i = t.getOptions().ipcNamespace;
  const s = zS(i);
  Ko.set(t, s);
  s.sendRendererStart();
  return s;
}
const Pe = he;
let Ja = 0;
function Nm() {
  return Ja > 0;
}
function $S() {
  Ja++;
  setTimeout(() => {
    Ja--;
  });
}
function Pr(t, r = {}) {
  function i(a) {
    return typeof a == "function";
  }
  if (!i(t)) {
    return t;
  }
  try {
    const a = t.__sentry_wrapped__;
    if (a) {
      if (typeof a == "function") {
        return a;
      } else {
        return t;
      }
    }
    if (yl(t)) {
      return t;
    }
  } catch {
    return t;
  }
  const s = function (...a) {
    try {
      const c = a.map(d => Pr(d, r));
      return t.apply(this, c);
    } catch (c) {
      $S();
      d_(d => {
        d.addEventProcessor(m => {
          if (r.mechanism) {
            Ga(m, undefined);
            Nr(m, r.mechanism);
          }
          m.extra = {
            ...m.extra,
            arguments: a
          };
          return m;
        });
        IE(c);
      });
      throw c;
    }
  };
  try {
    for (const a in t) {
      if (Object.prototype.hasOwnProperty.call(t, a)) {
        s[a] = t[a];
      }
    }
  } catch {}
  Xh(s, t);
  Xn(t, "__sentry_wrapped__", s);
  try {
    if (Object.getOwnPropertyDescriptor(s, "name").configurable) {
      Object.defineProperty(s, "name", {
        get() {
          return t.name;
        }
      });
    }
  } catch {}
  return s;
}
function GS() {
  const t = gl();
  const {
    referrer: r
  } = Pe.document || {};
  const {
    userAgent: i
  } = Pe.navigator || {};
  const s = {
    ...(r && {
      Referer: r
    }),
    ...(i && {
      "User-Agent": i
    })
  };
  return {
    url: t,
    headers: s
  };
}
function Il(t, r) {
  const i = Nl(t, r);
  const s = {
    type: qS(r),
    value: KS(r)
  };
  if (i.length) {
    s.stacktrace = {
      frames: i
    };
  }
  if (s.type === undefined && s.value === "") {
    s.value = "Unrecoverable error caught";
  }
  return s;
}
function VS(t, r, i, s) {
  const a = Ve();
  const c = a == null ? undefined : a.getOptions().normalizeDepth;
  const d = t1(r);
  const m = {
    __serialized__: om(r, c)
  };
  if (d) {
    return {
      exception: {
        values: [Il(t, d)]
      },
      extra: m
    };
  }
  const h = {
    exception: {
      values: [{
        type: ds(r) ? r.constructor.name : s ? "UnhandledRejection" : "Error",
        value: JS(r, {
          isUnhandledRejection: s
        })
      }]
    },
    extra: m
  };
  if (i) {
    const g = Nl(t, i);
    if (g.length) {
      h.exception.values[0].stacktrace = {
        frames: g
      };
    }
  }
  return h;
}
function Pa(t, r) {
  return {
    exception: {
      values: [Il(t, r)]
    }
  };
}
function Nl(t, r) {
  const i = r.stacktrace || r.stack || "";
  const s = XS(r);
  const a = YS(r);
  try {
    return t(i, s, a);
  } catch {}
  return [];
}
const WS = /Minified React error #\d+;/i;
function XS(t) {
  if (t && WS.test(t.message)) {
    return 1;
  } else {
    return 0;
  }
}
function YS(t) {
  if (typeof t.framesToPop == "number") {
    return t.framesToPop;
  } else {
    return 0;
  }
}
function km(t) {
  if (typeof WebAssembly !== "undefined" && typeof WebAssembly.Exception !== "undefined") {
    return t instanceof WebAssembly.Exception;
  } else {
    return false;
  }
}
function qS(t) {
  const r = t == null ? undefined : t.name;
  if (!r && km(t)) {
    if (t.message && Array.isArray(t.message) && t.message.length == 2) {
      return t.message[0];
    } else {
      return "WebAssembly.Exception";
    }
  } else {
    return r;
  }
}
function KS(t) {
  const r = t == null ? undefined : t.message;
  if (km(t)) {
    if (Array.isArray(t.message) && t.message.length == 2) {
      return t.message[1];
    } else {
      return "wasm exception";
    }
  } else if (r) {
    if (r.error && typeof r.error.message == "string") {
      return r.error.message;
    } else {
      return r;
    }
  } else {
    return "No error message";
  }
}
function QS(t, r, i, s) {
  const a = (i == null ? undefined : i.syntheticException) || undefined;
  const c = kl(t, r, a, s);
  Nr(c);
  c.level = "error";
  if (i != null && i.event_id) {
    c.event_id = i.event_id;
  }
  return hs(c);
}
function ZS(t, r, i = "info", s, a) {
  const c = (s == null ? undefined : s.syntheticException) || undefined;
  const d = el(t, r, c, a);
  d.level = i;
  if (s != null && s.event_id) {
    d.event_id = s.event_id;
  }
  return hs(d);
}
function kl(t, r, i, s, a) {
  let c;
  if (Gh(r) && r.error) {
    return Pa(t, r.error);
  }
  if (rp(r) || $0(r)) {
    const d = r;
    if ("stack" in r) {
      c = Pa(t, r);
    } else {
      const m = d.name || (rp(d) ? "DOMError" : "DOMException");
      const h = d.message ? `${m}: ${d.message}` : m;
      c = el(t, h, i, s);
      Ga(c, h);
    }
    if ("code" in d) {
      c.tags = {
        ...c.tags,
        "DOMException.code": `${d.code}`
      };
    }
    return c;
  }
  if (pl(r)) {
    return Pa(t, r);
  } else if (xi(r) || ds(r)) {
    c = VS(t, r, i, a);
    Nr(c, {
      synthetic: true
    });
    return c;
  } else {
    c = el(t, r, i, s);
    Ga(c, `${r}`);
    Nr(c, {
      synthetic: true
    });
    return c;
  }
}
function el(t, r, i, s) {
  const a = {};
  if (s && i) {
    const c = Nl(t, i);
    if (c.length) {
      a.exception = {
        values: [{
          value: r,
          stacktrace: {
            frames: c
          }
        }]
      };
    }
    Nr(a, {
      synthetic: true
    });
  }
  if (hl(r)) {
    const {
      __sentry_template_string__: c,
      __sentry_template_values__: d
    } = r;
    a.logentry = {
      message: c,
      params: d
    };
    return a;
  }
  a.message = r;
  return a;
}
function JS(t, {
  isUnhandledRejection: r
}) {
  const i = Q0(t);
  const s = r ? "promise rejection" : "exception";
  if (Gh(t)) {
    return `Event \`ErrorEvent\` captured as ${s} with message \`${t.message}\``;
  } else if (ds(t)) {
    return `Event \`${e1(t)}\` (type=${t.type}) captured as ${s}`;
  } else {
    return `Object captured as ${s} with keys: ${i}`;
  }
}
function e1(t) {
  try {
    const r = Object.getPrototypeOf(t);
    if (r) {
      return r.constructor.name;
    } else {
      return undefined;
    }
  } catch {}
}
function t1(t) {
  for (const r in t) {
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      const i = t[r];
      if (i instanceof Error) {
        return i;
      }
    }
  }
}
class n1 extends qE {
  constructor(r) {
    var v;
    const i = r1(r);
    const s = Pe.SENTRY_SDK_SOURCE || DS();
    rS(i, "browser", ["browser"], s);
    if ((v = i._metadata) != null && v.sdk) {
      i._metadata.sdk.settings = {
        infer_ip: i.sendDefaultPii ? "auto" : "never",
        ...i._metadata.sdk.settings
      };
    }
    super(i);
    const {
      sendDefaultPii: a,
      sendClientReports: c,
      enableLogs: d,
      _experiments: m,
      enableMetrics: h
    } = this._options;
    const g = h ?? (m == null ? undefined : m.enableMetrics) ?? true;
    if (Pe.document && (c || d || g)) {
      Pe.document.addEventListener("visibilitychange", () => {
        if (Pe.document.visibilityState === "hidden") {
          if (c) {
            this._flushOutcomes();
          }
          if (d) {
            fm(this);
          }
          if (g) {
            pm(this);
          }
        }
      });
    }
    if (a) {
      this.on("beforeSendSession", nS);
    }
  }
  eventFromException(r, i) {
    return QS(this._options.stackParser, r, i, this._options.attachStacktrace);
  }
  eventFromMessage(r, i = "info", s) {
    return ZS(this._options.stackParser, r, i, s, this._options.attachStacktrace);
  }
  _prepareEvent(r, i, s, a) {
    r.platform = r.platform || "javascript";
    return super._prepareEvent(r, i, s, a);
  }
}
function r1(t) {
  var r;
  return {
    release: typeof __SENTRY_RELEASE__ == "string" ? __SENTRY_RELEASE__ : (r = Pe.SENTRY_RELEASE) == null ? undefined : r.id,
    sendClientReports: true,
    parentSpanIsAlwaysRootSpan: true,
    ...t
  };
}
const i1 = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const Qe = he;
const o1 = 1000;
let Wp;
let tl;
let nl;
function s1(t) {
  qn("dom", t);
  Kn("dom", u1);
}
function u1() {
  if (!Qe.document) {
    return;
  }
  const t = Rt.bind(null, "dom");
  const r = Xp(t, true);
  Qe.document.addEventListener("click", r, false);
  Qe.document.addEventListener("keypress", r, false);
  ["EventTarget", "Node"].forEach(i => {
    var c;
    var d;
    const a = (c = Qe[i]) == null ? undefined : c.prototype;
    if ((d = a == null ? undefined : a.hasOwnProperty) != null && d.call(a, "addEventListener")) {
      pt(a, "addEventListener", function (m) {
        return function (h, g, v) {
          if (h === "click" || h == "keypress") {
            try {
              const S = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {};
              const k = S[h] = S[h] || {
                refCount: 0
              };
              if (!k.handler) {
                const I = Xp(t);
                k.handler = I;
                m.call(this, h, I, v);
              }
              k.refCount++;
            } catch {}
          }
          return m.call(this, h, g, v);
        };
      });
      pt(a, "removeEventListener", function (m) {
        return function (h, g, v) {
          if (h === "click" || h == "keypress") {
            try {
              const S = this.__sentry_instrumentation_handlers__ || {};
              const k = S[h];
              if (k) {
                k.refCount--;
                if (k.refCount <= 0) {
                  m.call(this, h, k.handler, v);
                  k.handler = undefined;
                  delete S[h];
                }
                if (Object.keys(S).length === 0) {
                  delete this.__sentry_instrumentation_handlers__;
                }
              }
            } catch {}
          }
          return m.call(this, h, g, v);
        };
      });
    }
  });
}
function a1(t) {
  if (t.type !== tl) {
    return false;
  }
  try {
    if (!t.target || t.target._sentryId !== nl) {
      return false;
    }
  } catch {}
  return true;
}
function l1(t, r) {
  if (t !== "keypress") {
    return false;
  } else if (r != null && r.tagName) {
    return r.tagName !== "INPUT" && r.tagName !== "TEXTAREA" && !r.isContentEditable;
  } else {
    return true;
  }
}
function Xp(t, r = false) {
  return i => {
    if (!i || i._sentryCaptured) {
      return;
    }
    const s = c1(i);
    if (l1(i.type, s)) {
      return;
    }
    Xn(i, "_sentryCaptured", true);
    if (s && !s._sentryId) {
      Xn(s, "_sentryId", ht());
    }
    const a = i.type === "keypress" ? "input" : i.type;
    if (!a1(i)) {
      t({
        event: i,
        name: a,
        global: r
      });
      tl = i.type;
      nl = s ? s._sentryId : undefined;
    }
    clearTimeout(Wp);
    Wp = Qe.setTimeout(() => {
      nl = undefined;
      tl = undefined;
    }, o1);
  };
}
function c1(t) {
  try {
    return t.target;
  } catch {
    return null;
  }
}
let Qo;
function Cm(t) {
  const r = "history";
  qn(r, t);
  Kn(r, f1);
}
function f1() {
  Qe.addEventListener("popstate", () => {
    const r = Qe.location.href;
    const i = Qo;
    Qo = r;
    if (i === r) {
      return;
    }
    Rt("history", {
      from: i,
      to: r
    });
  });
  if (!PS()) {
    return;
  }
  function t(r) {
    return function (...i) {
      const s = i.length > 2 ? i[2] : undefined;
      if (s) {
        const a = Qo;
        const c = d1(String(s));
        Qo = c;
        if (a === c) {
          return r.apply(this, i);
        }
        Rt("history", {
          from: a,
          to: c
        });
      }
      return r.apply(this, i);
    };
  }
  pt(Qe.history, "pushState", t);
  pt(Qe.history, "replaceState", t);
}
function d1(t) {
  try {
    return new URL(t, Qe.location.origin).toString();
  } catch {
    return t;
  }
}
const is = {};
function p1(t) {
  const r = is[t];
  if (r) {
    return r;
  }
  let i = Qe[t];
  if (Qa(i)) {
    return is[t] = i.bind(Qe);
  }
  const s = Qe.document;
  if (s && typeof s.createElement == "function") {
    try {
      const a = s.createElement("iframe");
      a.hidden = true;
      s.head.appendChild(a);
      const c = a.contentWindow;
      if (c != null && c[t]) {
        i = c[t];
      }
      s.head.removeChild(a);
    } catch (a) {
      if (i1) {
        Y.warn(`Could not create sandbox iframe for ${t} check, bailing to window.${t}: `, a);
      }
    }
  }
  return i && (is[t] = i.bind(Qe));
}
function h1(t) {
  is[t] = undefined;
}
const Si = "__sentry_xhr_v3__";
function m1(t) {
  qn("xhr", t);
  Kn("xhr", g1);
}
function g1() {
  if (!Qe.XMLHttpRequest) {
    return;
  }
  const t = XMLHttpRequest.prototype;
  t.open = new Proxy(t.open, {
    apply(r, i, s) {
      const a = new Error();
      const c = en() * 1000;
      const d = Jt(s[0]) ? s[0].toUpperCase() : undefined;
      const m = y1(s[1]);
      if (!d || !m) {
        return r.apply(i, s);
      }
      i[Si] = {
        method: d,
        url: m,
        request_headers: {}
      };
      if (d === "POST" && m.match(/sentry_key/)) {
        i.__sentry_own_request__ = true;
      }
      const h = () => {
        const g = i[Si];
        if (g && i.readyState === 4) {
          try {
            g.status_code = i.status;
          } catch {}
          const v = {
            endTimestamp: en() * 1000,
            startTimestamp: c,
            xhr: i,
            virtualError: a
          };
          Rt("xhr", v);
        }
      };
      if ("onreadystatechange" in i && typeof i.onreadystatechange == "function") {
        i.onreadystatechange = new Proxy(i.onreadystatechange, {
          apply(g, v, S) {
            h();
            return g.apply(v, S);
          }
        });
      } else {
        i.addEventListener("readystatechange", h);
      }
      i.setRequestHeader = new Proxy(i.setRequestHeader, {
        apply(g, v, S) {
          const [k, I] = S;
          const M = v[Si];
          if (M && Jt(k) && Jt(I)) {
            M.request_headers[k.toLowerCase()] = I;
          }
          return g.apply(v, S);
        }
      });
      return r.apply(i, s);
    }
  });
  t.send = new Proxy(t.send, {
    apply(r, i, s) {
      const a = i[Si];
      if (!a) {
        return r.apply(i, s);
      }
      if (s[0] !== undefined) {
        a.body = s[0];
      }
      const c = {
        startTimestamp: en() * 1000,
        xhr: i
      };
      Rt("xhr", c);
      return r.apply(i, s);
    }
  });
}
function y1(t) {
  if (Jt(t)) {
    return t;
  }
  try {
    return t.toString();
  } catch {}
}
const v1 = 40;
function _1(t, r = p1("fetch")) {
  let i = 0;
  let s = 0;
  async function a(c) {
    const d = c.body.length;
    i += d;
    s++;
    const m = {
      body: c.body,
      method: "POST",
      referrerPolicy: "strict-origin",
      headers: t.headers,
      keepalive: i <= 60000 && s < 15,
      ...t.fetchOptions
    };
    try {
      const h = await r(t.url, m);
      return {
        statusCode: h.status,
        headers: {
          "x-sentry-rate-limits": h.headers.get("X-Sentry-Rate-Limits"),
          "retry-after": h.headers.get("Retry-After")
        }
      };
    } catch (h) {
      h1("fetch");
      throw h;
    } finally {
      i -= d;
      s--;
    }
  }
  return gm(t, a, Tl(t.bufferSize || v1));
}
const ms = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const E1 = 30;
const S1 = 50;
function rl(t, r, i, s) {
  const a = {
    filename: t,
    function: r === "<anonymous>" ? Tn : r,
    in_app: true
  };
  if (i !== undefined) {
    a.lineno = i;
  }
  if (s !== undefined) {
    a.colno = s;
  }
  return a;
}
const w1 = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i;
const x1 = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
const T1 = /\((\S*)(?::(\d+))(?::(\d+))\)/;
const I1 = /at (.+?) ?\(data:(.+?),/;
const N1 = t => {
  const r = t.match(I1);
  if (r) {
    return {
      filename: `<data:${r[2]}>`,
      function: r[1]
    };
  }
  const i = w1.exec(t);
  if (i) {
    const [, a, c, d] = i;
    return rl(a, Tn, +c, +d);
  }
  const s = x1.exec(t);
  if (s) {
    if (s[2] && s[2].indexOf("eval") === 0) {
      const m = T1.exec(s[2]);
      if (m) {
        s[2] = m[1];
        s[3] = m[2];
        s[4] = m[3];
      }
    }
    const [c, d] = Rm(s[1] || Tn, s[2]);
    return rl(d, c, s[3] ? +s[3] : undefined, s[4] ? +s[4] : undefined);
  }
};
const Pm = [E1, N1];
const k1 = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
const C1 = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
const P1 = t => {
  const r = k1.exec(t);
  if (r) {
    if (r[3] && r[3].indexOf(" > eval") > -1) {
      const c = C1.exec(r[3]);
      if (c) {
        r[1] = r[1] || "eval";
        r[3] = c[1];
        r[4] = c[2];
        r[5] = "";
      }
    }
    let s = r[3];
    let a = r[1] || Tn;
    [a, s] = Rm(a, s);
    return rl(s, a, r[4] ? +r[4] : undefined, r[5] ? +r[5] : undefined);
  }
};
const R1 = [S1, P1];
const L1 = [Pm, R1];
const O1 = Uh(...L1);
const Rm = (t, r) => {
  const i = t.indexOf("safari-extension") !== -1;
  const s = t.indexOf("safari-web-extension") !== -1;
  if (i || s) {
    return [t.indexOf("@") !== -1 ? t.split("@")[0] : Tn, i ? `safari-extension:${r}` : `safari-web-extension:${r}`];
  } else {
    return [t, r];
  }
};
const Zo = 1024;
const A1 = "Breadcrumbs";
const b1 = (t = {}) => {
  const r = {
    console: true,
    dom: true,
    fetch: true,
    history: true,
    sentry: true,
    xhr: true,
    ...t
  };
  return {
    name: A1,
    setup(i) {
      if (r.console) {
        ES(H1(i));
      }
      if (r.dom) {
        s1(F1(i, r.dom));
      }
      if (r.xhr) {
        m1(B1(i));
      }
      if (r.fetch) {
        OS(U1(i));
      }
      if (r.history) {
        Cm(j1(i));
      }
      if (r.sentry) {
        i.on("beforeSendEvent", D1(i));
      }
    }
  };
};
const M1 = b1;
function D1(t) {
  return function (i) {
    if (Ve() === t) {
      Yn({
        category: `sentry.${i.type === "transaction" ? "transaction" : "event"}`,
        event_id: i.event_id,
        level: i.level,
        message: Gn(i)
      }, {
        event: i
      });
    }
  };
}
function F1(t, r) {
  return function (s) {
    if (Ve() !== t) {
      return;
    }
    let a;
    let c;
    let d = typeof r == "object" ? r.serializeAttribute : undefined;
    let m = typeof r == "object" && typeof r.maxStringLength == "number" ? r.maxStringLength : undefined;
    if (m && m > Zo) {
      if (ms) {
        Y.warn(`\`dom.maxStringLength\` cannot exceed ${Zo}, but a value of ${m} was configured. Sentry will use ${Zo} instead.`);
      }
      m = Zo;
    }
    if (typeof d == "string") {
      d = [d];
    }
    try {
      const g = s.event;
      const v = z1(g) ? g.target : g;
      a = Wh(v, {
        keyAttrs: d,
        maxStringLength: m
      });
      c = K0(v);
    } catch {
      a = "<unknown>";
    }
    if (a.length === 0) {
      return;
    }
    const h = {
      category: `ui.${s.name}`,
      message: a
    };
    if (c) {
      h.data = {
        "ui.component_name": c
      };
    }
    Yn(h, {
      event: s.event,
      name: s.name,
      global: s.global
    });
  };
}
function H1(t) {
  return function (i) {
    if (Ve() !== t) {
      return;
    }
    const s = {
      category: "console",
      data: {
        arguments: i.args,
        logger: "console"
      },
      level: wS(i.level),
      message: sp(i.args, " ")
    };
    if (i.level === "assert") {
      if (i.args[0] === false) {
        s.message = `Assertion failed: ${sp(i.args.slice(1), " ") || "console.assert"}`;
        s.data.arguments = i.args.slice(1);
      } else {
        return;
      }
    }
    Yn(s, {
      input: i.args,
      level: i.level
    });
  };
}
function B1(t) {
  return function (i) {
    if (Ve() !== t) {
      return;
    }
    const {
      startTimestamp: s,
      endTimestamp: a
    } = i;
    const c = i.xhr[Si];
    if (!s || !a || !c) {
      return;
    }
    const {
      method: d,
      url: m,
      status_code: h,
      body: g
    } = c;
    const v = {
      method: d,
      url: m,
      status_code: h
    };
    const S = {
      xhr: i.xhr,
      input: g,
      startTimestamp: s,
      endTimestamp: a
    };
    const k = {
      category: "xhr",
      data: v,
      type: "http",
      level: Tm(h)
    };
    t.emit("beforeOutgoingRequestBreadcrumb", k, S);
    Yn(k, S);
  };
}
function U1(t) {
  return function (i) {
    if (Ve() !== t) {
      return;
    }
    const {
      startTimestamp: s,
      endTimestamp: a
    } = i;
    if (a && (!i.fetchData.url.match(/sentry_key/) || i.fetchData.method !== "POST")) {
      i.fetchData.method;
      i.fetchData.url;
      if (i.error) {
        const c = i.fetchData;
        const d = {
          data: i.error,
          input: i.args,
          startTimestamp: s,
          endTimestamp: a
        };
        const m = {
          category: "fetch",
          data: c,
          level: "error",
          type: "http"
        };
        t.emit("beforeOutgoingRequestBreadcrumb", m, d);
        Yn(m, d);
      } else {
        const c = i.response;
        const d = {
          ...i.fetchData,
          status_code: c == null ? undefined : c.status
        };
        i.fetchData.request_body_size;
        i.fetchData.response_body_size;
        if (c != null) {
          c.status;
        }
        const m = {
          input: i.args,
          response: c,
          startTimestamp: s,
          endTimestamp: a
        };
        const h = {
          category: "fetch",
          data: d,
          type: "http",
          level: Tm(d.status_code)
        };
        t.emit("beforeOutgoingRequestBreadcrumb", h, m);
        Yn(h, m);
      }
    }
  };
}
function j1(t) {
  return function (i) {
    if (Ve() !== t) {
      return;
    }
    let s = i.from;
    let a = i.to;
    const c = Ca(Pe.location.href);
    let d = s ? Ca(s) : undefined;
    const m = Ca(a);
    if (d == null || !d.path) {
      d = c;
    }
    if (c.protocol === m.protocol && c.host === m.host) {
      a = m.relative;
    }
    if (c.protocol === d.protocol && c.host === d.host) {
      s = d.relative;
    }
    Yn({
      category: "navigation",
      data: {
        from: s,
        to: a
      }
    });
  };
}
function z1(t) {
  return !!t && !!t.target;
}
const $1 = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
const G1 = "BrowserApiErrors";
const V1 = (t = {}) => {
  const r = {
    XMLHttpRequest: true,
    eventTarget: true,
    requestAnimationFrame: true,
    setInterval: true,
    setTimeout: true,
    unregisterOriginalCallbacks: false,
    ...t
  };
  return {
    name: G1,
    setupOnce() {
      if (r.setTimeout) {
        pt(Pe, "setTimeout", Yp);
      }
      if (r.setInterval) {
        pt(Pe, "setInterval", Yp);
      }
      if (r.requestAnimationFrame) {
        pt(Pe, "requestAnimationFrame", X1);
      }
      if (r.XMLHttpRequest && "XMLHttpRequest" in Pe) {
        pt(XMLHttpRequest.prototype, "send", Y1);
      }
      const i = r.eventTarget;
      if (i) {
        (Array.isArray(i) ? i : $1).forEach(a => q1(a, r));
      }
    }
  };
};
const W1 = V1;
function Yp(t) {
  return function (...r) {
    const i = r[0];
    r[0] = Pr(i, {
      mechanism: {
        handled: false,
        type: `auto.browser.browserapierrors.${In(t)}`
      }
    });
    return t.apply(this, r);
  };
}
function X1(t) {
  return function (r) {
    return t.apply(this, [Pr(r, {
      mechanism: {
        data: {
          handler: In(t)
        },
        handled: false,
        type: "auto.browser.browserapierrors.requestAnimationFrame"
      }
    })]);
  };
}
function Y1(t) {
  return function (...r) {
    const i = this;
    ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(a => {
      if (a in i && typeof i[a] == "function") {
        pt(i, a, function (c) {
          const d = {
            mechanism: {
              data: {
                handler: In(c)
              },
              handled: false,
              type: `auto.browser.browserapierrors.xhr.${a}`
            }
          };
          const m = yl(c);
          if (m) {
            d.mechanism.data.handler = In(m);
          }
          return Pr(c, d);
        });
      }
    });
    return t.apply(this, r);
  };
}
function q1(t, r) {
  var a;
  var c;
  const s = (a = Pe[t]) == null ? undefined : a.prototype;
  if ((c = s == null ? undefined : s.hasOwnProperty) != null && c.call(s, "addEventListener")) {
    pt(s, "addEventListener", function (d) {
      return function (m, h, g) {
        try {
          if (K1(h)) {
            h.handleEvent = Pr(h.handleEvent, {
              mechanism: {
                data: {
                  handler: In(h),
                  target: t
                },
                handled: false,
                type: "auto.browser.browserapierrors.handleEvent"
              }
            });
          }
        } catch {}
        if (r.unregisterOriginalCallbacks) {
          Q1(this, m, h);
        }
        return d.apply(this, [m, Pr(h, {
          mechanism: {
            data: {
              handler: In(h),
              target: t
            },
            handled: false,
            type: "auto.browser.browserapierrors.addEventListener"
          }
        }), g]);
      };
    });
    pt(s, "removeEventListener", function (d) {
      return function (m, h, g) {
        try {
          const v = h.__sentry_wrapped__;
          if (v) {
            d.call(this, m, v, g);
          }
        } catch {}
        return d.call(this, m, h, g);
      };
    });
  }
}
function K1(t) {
  return typeof t.handleEvent == "function";
}
function Q1(t, r, i) {
  if (t && typeof t == "object" && "removeEventListener" in t && typeof t.removeEventListener == "function") {
    t.removeEventListener(r, i);
  }
}
const Z1 = () => ({
  name: "BrowserSession",
  setupOnce() {
    if (typeof Pe.document === "undefined") {
      if (ms) {
        Y.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
      }
      return;
    }
    Np({
      ignoreDuration: true
    });
    kp();
    Cm(({
      from: t,
      to: r
    }) => {
      if (t !== undefined && t !== r) {
        Np({
          ignoreDuration: true
        });
        kp();
      }
    });
  }
});
const J1 = "GlobalHandlers";
const ew = (t = {}) => {
  const r = {
    onerror: true,
    onunhandledrejection: true,
    ...t
  };
  return {
    name: J1,
    setupOnce() {
      Error.stackTraceLimit = 50;
    },
    setup(i) {
      if (r.onerror) {
        nw(i);
        qp("onerror");
      }
      if (r.onunhandledrejection) {
        rw(i);
        qp("onunhandledrejection");
      }
    }
  };
};
const tw = ew;
function nw(t) {
  B0(r => {
    const {
      stackParser: i,
      attachStacktrace: s
    } = Lm();
    if (Ve() !== t || Nm()) {
      return;
    }
    const {
      msg: a,
      url: c,
      line: d,
      column: m,
      error: h
    } = r;
    const g = sw(kl(i, h || a, undefined, s, false), c, d, m);
    g.level = "error";
    um(g, {
      originalException: h,
      mechanism: {
        handled: false,
        type: "auto.browser.global_handlers.onerror"
      }
    });
  });
}
function rw(t) {
  j0(r => {
    const {
      stackParser: i,
      attachStacktrace: s
    } = Lm();
    if (Ve() !== t || Nm()) {
      return;
    }
    const a = iw(r);
    const c = fs(a) ? ow(a) : kl(i, a, undefined, s, true);
    c.level = "error";
    um(c, {
      originalException: a,
      mechanism: {
        handled: false,
        type: "auto.browser.global_handlers.onunhandledrejection"
      }
    });
  });
}
function iw(t) {
  if (fs(t)) {
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
function ow(t) {
  return {
    exception: {
      values: [{
        type: "UnhandledRejection",
        value: `Non-Error promise rejection captured with value: ${String(t)}`
      }]
    }
  };
}
function sw(t, r, i, s) {
  const a = t.exception = t.exception || {};
  const c = a.values = a.values || [];
  const d = c[0] = c[0] || {};
  const m = d.stacktrace = d.stacktrace || {};
  const h = m.frames = m.frames || [];
  const g = s;
  const v = i;
  const S = uw(r) ?? gl();
  if (h.length === 0) {
    h.push({
      colno: g,
      filename: S,
      function: Tn,
      in_app: true,
      lineno: v
    });
  }
  return t;
}
function qp(t) {
  if (ms) {
    Y.log(`Global Handler attached: ${t}`);
  }
}
function Lm() {
  const t = Ve();
  return (t == null ? undefined : t.getOptions()) || {
    stackParser: () => [],
    attachStacktrace: false
  };
}
function uw(t) {
  if (!!Jt(t) && t.length !== 0) {
    if (t.startsWith("data:")) {
      const r = t.match(/^data:([^;]+)/);
      const i = r ? r[1] : "text/javascript";
      const s = t.includes("base64,");
      return `<data:${i}${s ? ",base64" : ""}>`;
    }
    return t;
  }
}
const aw = () => ({
  name: "HttpContext",
  preprocessEvent(t) {
    var s;
    if (!Pe.navigator && !Pe.location && !Pe.document) {
      return;
    }
    const r = GS();
    const i = {
      ...r.headers,
      ...((s = t.request) == null ? undefined : s.headers)
    };
    t.request = {
      ...r,
      ...t.request,
      headers: i
    };
  }
});
const lw = "cause";
const cw = 5;
const fw = "LinkedErrors";
const dw = (t = {}) => {
  const r = t.limit || cw;
  const i = t.key || lw;
  return {
    name: fw,
    preprocessEvent(s, a, c) {
      const d = c.getOptions();
      _S(Il, d.stackParser, i, r, s, a);
    }
  };
};
const pw = dw;
function hw() {
  if (mw()) {
    if (ms) {
      Or(() => {
        console.error("[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/");
      });
    }
    return true;
  } else {
    return false;
  }
}
function mw() {
  var c;
  if (typeof Pe.window === "undefined") {
    return false;
  }
  const t = Pe;
  if (t.nw) {
    return false;
  }
  const r = t.chrome || t.browser;
  if ((c = r == null ? undefined : r.runtime) == null || !c.id) {
    return false;
  }
  const i = gl();
  const s = ["chrome-extension", "moz-extension", "ms-browser-extension", "safari-web-extension"];
  return Pe !== Pe.top || !s.some(d => i.startsWith(`${d}://`));
}
function Om(t) {
  return [fS(), uS(), W1(), M1(), tw(), pw(), IS(), aw(), Z1()];
}
function gw(t = {}) {
  const r = !t.skipBrowserExtensionCheck && hw();
  let i = t.defaultIntegrations == null ? Om() : t.defaultIntegrations;
  const s = {
    ...t,
    enabled: r ? false : t.enabled,
    stackParser: H0(t.stackParser || O1),
    integrations: OE({
      integrations: t.integrations,
      defaultIntegrations: i
    }),
    transport: t.transport || _1
  };
  return eS(n1, s);
}
function Ra() {
  const t = _l().getScopeData();
  const r = Qn().getScopeData();
  const i = zt().getScopeData();
  ss(t, r);
  ss(t, i);
  t.eventProcessors = [];
  return t;
}
function yw(t) {
  Qn().addScopeListener(r => {
    const i = Ra();
    t(i, r);
  });
  zt().addScopeListener(r => {
    const i = Ra();
    t(i, r);
  });
  _l().addScopeListener(r => {
    const i = Ra();
    t(i, r);
  });
}
const vw = () => ({
  name: "ScopeToMain",
  setup(t) {
    const r = Im(t);
    yw((i, s) => {
      r.sendScope(JSON.stringify(Ut(i, 20, 2000)));
      s.clearBreadcrumbs();
      s.clearAttachments();
    });
  }
});
function _w(t) {
  let r;
  return gm(t, async i => {
    r ||= Im();
    r.sendEnvelope(i.body);
    return {
      statusCode: 200
    };
  });
}
const Ew = 50;
const [, Sw] = Pm;
const [, ww] = BS();
const xw = (t, r = 0) => {
  const i = [];
  for (const s of t.split(`
`).slice(r)) {
    const a = Sw(s);
    const c = ww(s);
    if (a && (c == null ? undefined : c.in_app) !== false) {
      i.push(a);
    } else if (c) {
      if (c.module === undefined) {
        delete c.module;
      }
      i.push(c);
    }
    if (i.length >= Ew) {
      break;
    }
  }
  return jh(i);
};
function Tw(t) {
  return [...Om().filter(r => r.name !== "BrowserSession"), vw()];
}
function Iw(t = {}, r = gw) {
  if (window != null && window.__SENTRY__RENDERER_INIT__) {
    Y.warn(`The browser SDK has already been initialized.
If init has been called in the preload and contextIsolation is disabled, is not required to call init in the renderer`);
    return;
  }
  window.__SENTRY__RENDERER_INIT__ = true;
  t.sendClientReports = false;
  if (t.defaultIntegrations === undefined) {
    t.defaultIntegrations = Tw();
  }
  if (t.stackParser === undefined) {
    t.stackParser = xw;
  }
  if (t.ipcNamespace === undefined) {
    t.ipcNamespace = "sentry-ipc";
  }
  if (t.dsn === undefined) {
    t.dsn = "https://12345@dummy.dsn/12345";
  }
  if (t.transport === undefined) {
    t.transport = _w;
  }
  delete t.initialScope;
  r(t);
}
var ih;
if (window.desktopEssentialTelemetryDisabled !== true && ((ih = window.process) == null || !ih.env.CI)) {
  Iw();
}
const Am = window.matchMedia("(prefers-color-scheme: dark)");
const Nw = Am.matches ? "darkTheme" : "";
document.body.className = Nw;
Am.addEventListener("change", t => {
  document.body.className = t.matches ? "darkTheme" : "";
});
function we(t) {
  return typeof t == "function";
}
function kw(t) {
  function r(s) {
    Error.call(s);
    s.stack = new Error().stack;
  }
  var i = t(r);
  i.prototype = Object.create(Error.prototype);
  i.prototype.constructor = i;
  return i;
}
var La = kw(function (t) {
  return function (i) {
    t(this);
    this.message = i ? `${i.length} errors occurred during unsubscription:
${i.map(function (s, a) {
      return a + 1 + ") " + s.toString();
    }).join(`
  `)}` : "";
    this.name = "UnsubscriptionError";
    this.errors = i;
  };
});
function il(t, r) {
  if (t) {
    var i = t.indexOf(r);
    if (i >= 0) {
      t.splice(i, 1);
    }
  }
}
var gs = function () {
  function t(r) {
    this.initialTeardown = r;
    this.closed = false;
    this._parentage = null;
    this._finalizers = null;
  }
  t.prototype.unsubscribe = function () {
    var r;
    var i;
    var s;
    var a;
    var c;
    if (!this.closed) {
      this.closed = true;
      var d = this._parentage;
      if (d) {
        this._parentage = null;
        if (Array.isArray(d)) {
          try {
            for (var m = wi(d), h = m.next(); !h.done; h = m.next()) {
              var g = h.value;
              g.remove(this);
            }
          } catch (O) {
            r = {
              error: O
            };
          } finally {
            try {
              if (h && !h.done && (i = m.return)) {
                i.call(m);
              }
            } finally {
              if (r) {
                throw r.error;
              }
            }
          }
        } else {
          d.remove(this);
        }
      }
      var v = this.initialTeardown;
      if (we(v)) {
        try {
          v();
        } catch (O) {
          c = O instanceof La ? O.errors : [O];
        }
      }
      var S = this._finalizers;
      if (S) {
        this._finalizers = null;
        try {
          for (var k = wi(S), I = k.next(); !I.done; I = k.next()) {
            var M = I.value;
            try {
              Kp(M);
            } catch (O) {
              c = c ?? [];
              if (O instanceof La) {
                c = qe(qe([], Tr(c)), Tr(O.errors));
              } else {
                c.push(O);
              }
            }
          }
        } catch (O) {
          s = {
            error: O
          };
        } finally {
          try {
            if (I && !I.done && (a = k.return)) {
              a.call(k);
            }
          } finally {
            if (s) {
              throw s.error;
            }
          }
        }
      }
      if (c) {
        throw new La(c);
      }
    }
  };
  t.prototype.add = function (r) {
    if (r && r !== this) {
      if (this.closed) {
        Kp(r);
      } else {
        if (r instanceof t) {
          if (r.closed || r._hasParent(this)) {
            return;
          }
          r._addParent(this);
        }
        (this._finalizers = this._finalizers ?? []).push(r);
      }
    }
  };
  t.prototype._hasParent = function (r) {
    var i = this._parentage;
    return i === r || Array.isArray(i) && i.includes(r);
  };
  t.prototype._addParent = function (r) {
    var i = this._parentage;
    this._parentage = Array.isArray(i) ? (i.push(r), i) : i ? [i, r] : r;
  };
  t.prototype._removeParent = function (r) {
    var i = this._parentage;
    if (i === r) {
      this._parentage = null;
    } else if (Array.isArray(i)) {
      il(i, r);
    }
  };
  t.prototype.remove = function (r) {
    var i = this._finalizers;
    if (i) {
      il(i, r);
    }
    if (r instanceof t) {
      r._removeParent(this);
    }
  };
  t.EMPTY = function () {
    var r = new t();
    r.closed = true;
    return r;
  }();
  return t;
}();
gs.EMPTY;
function bm(t) {
  return t instanceof gs || t && "closed" in t && we(t.remove) && we(t.add) && we(t.unsubscribe);
}
function Kp(t) {
  if (we(t)) {
    t();
  } else {
    t.unsubscribe();
  }
}
var Cw = {
  Promise: undefined
};
var Pw = {
  setTimeout: function (t, r) {
    var i = [];
    for (var s = 2; s < arguments.length; s++) {
      i[s - 2] = arguments[s];
    }
    return setTimeout.apply(undefined, qe([t, r], Tr(i)));
  },
  clearTimeout: function (t) {
    return clearTimeout(t);
  },
  delegate: undefined
};
function Mm(t) {
  Pw.setTimeout(function () {
    throw t;
  });
}
function Qp() {}
function Rw(t) {
  t();
}
var Cl = function (t) {
  He(r, t);
  function r(i) {
    var s = t.call(this) || this;
    s.isStopped = false;
    if (i) {
      s.destination = i;
      if (bm(i)) {
        i.add(s);
      }
    } else {
      s.destination = Aw;
    }
    return s;
  }
  r.create = function (i, s, a) {
    return new ol(i, s, a);
  };
  r.prototype.next = function (i) {
    if (!this.isStopped) {
      this._next(i);
    }
  };
  r.prototype.error = function (i) {
    if (!this.isStopped) {
      this.isStopped = true;
      this._error(i);
    }
  };
  r.prototype.complete = function () {
    if (!this.isStopped) {
      this.isStopped = true;
      this._complete();
    }
  };
  r.prototype.unsubscribe = function () {
    if (!this.closed) {
      this.isStopped = true;
      t.prototype.unsubscribe.call(this);
      this.destination = null;
    }
  };
  r.prototype._next = function (i) {
    this.destination.next(i);
  };
  r.prototype._error = function (i) {
    try {
      this.destination.error(i);
    } finally {
      this.unsubscribe();
    }
  };
  r.prototype._complete = function () {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  };
  return r;
}(gs);
var Lw = function () {
  function t(r) {
    this.partialObserver = r;
  }
  t.prototype.next = function (r) {
    var i = this.partialObserver;
    if (i.next) {
      try {
        i.next(r);
      } catch (s) {
        Jo(s);
      }
    }
  };
  t.prototype.error = function (r) {
    var i = this.partialObserver;
    if (i.error) {
      try {
        i.error(r);
      } catch (s) {
        Jo(s);
      }
    } else {
      Jo(r);
    }
  };
  t.prototype.complete = function () {
    var r = this.partialObserver;
    if (r.complete) {
      try {
        r.complete();
      } catch (i) {
        Jo(i);
      }
    }
  };
  return t;
}();
var ol = function (t) {
  He(r, t);
  function r(i, s, a) {
    var c = t.call(this) || this;
    var d;
    if (we(i) || !i) {
      d = {
        next: i ?? undefined,
        error: s ?? undefined,
        complete: a ?? undefined
      };
    } else {
      d = i;
    }
    c.destination = new Lw(d);
    return c;
  }
  return r;
}(Cl);
function Jo(t) {
  Mm(t);
}
function Ow(t) {
  throw t;
}
var Aw = {
  closed: true,
  next: Qp,
  error: Ow,
  complete: Qp
};
var Pl = function () {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function bw(t) {
  return t;
}
function Mw() {
  var t = [];
  for (var r = 0; r < arguments.length; r++) {
    t[r] = arguments[r];
  }
  return Dm(t);
}
function Dm(t) {
  if (t.length === 0) {
    return bw;
  } else if (t.length === 1) {
    return t[0];
  } else {
    return function (i) {
      return t.reduce(function (s, a) {
        return a(s);
      }, i);
    };
  }
}
var Cn = function () {
  function t(r) {
    if (r) {
      this._subscribe = r;
    }
  }
  t.prototype.lift = function (r) {
    var i = new t();
    i.source = this;
    i.operator = r;
    return i;
  };
  t.prototype.subscribe = function (r, i, s) {
    var a = this;
    var c = Fw(r) ? r : new ol(r, i, s);
    Rw(function () {
      var d = a;
      var m = d.operator;
      var h = d.source;
      c.add(m ? m.call(c, h) : h ? a._subscribe(c) : a._trySubscribe(c));
    });
    return c;
  };
  t.prototype._trySubscribe = function (r) {
    try {
      return this._subscribe(r);
    } catch (i) {
      r.error(i);
    }
  };
  t.prototype.forEach = function (r, i) {
    var s = this;
    i = Zp(i);
    return new i(function (a, c) {
      var d = new ol({
        next: function (m) {
          try {
            r(m);
          } catch (h) {
            c(h);
            d.unsubscribe();
          }
        },
        error: c,
        complete: a
      });
      s.subscribe(d);
    });
  };
  t.prototype._subscribe = function (r) {
    var i;
    if ((i = this.source) === null || i === undefined) {
      return undefined;
    } else {
      return i.subscribe(r);
    }
  };
  t.prototype[Pl] = function () {
    return this;
  };
  t.prototype.pipe = function () {
    var r = [];
    for (var i = 0; i < arguments.length; i++) {
      r[i] = arguments[i];
    }
    return Dm(r)(this);
  };
  t.prototype.toPromise = function (r) {
    var i = this;
    r = Zp(r);
    return new r(function (s, a) {
      var c;
      i.subscribe(function (d) {
        return c = d;
      }, function (d) {
        return a(d);
      }, function () {
        return s(c);
      });
    });
  };
  t.create = function (r) {
    return new t(r);
  };
  return t;
}();
function Zp(t) {
  return t ?? Cw.Promise ?? Promise;
}
function Dw(t) {
  return t && we(t.next) && we(t.error) && we(t.complete);
}
function Fw(t) {
  return t && t instanceof Cl || Dw(t) && bm(t);
}
function Hw(t) {
  return we(t == null ? undefined : t.lift);
}
function Rl(t) {
  return function (r) {
    if (Hw(r)) {
      return r.lift(function (i) {
        try {
          return t(i, this);
        } catch (s) {
          this.error(s);
        }
      });
    }
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function Ni(t, r, i, s, a) {
  return new Bw(t, r, i, s, a);
}
var Bw = function (t) {
  He(r, t);
  function r(i, s, a, c, d, m) {
    var h = t.call(this, i) || this;
    h.onFinalize = d;
    h.shouldUnsubscribe = m;
    h._next = s ? function (g) {
      try {
        s(g);
      } catch (v) {
        i.error(v);
      }
    } : t.prototype._next;
    h._error = c ? function (g) {
      try {
        c(g);
      } catch (v) {
        i.error(v);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._error;
    h._complete = a ? function () {
      try {
        a();
      } catch (g) {
        i.error(g);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._complete;
    return h;
  }
  r.prototype.unsubscribe = function () {
    var i;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var s = this.closed;
      t.prototype.unsubscribe.call(this);
      if (!s) {
        if ((i = this.onFinalize) !== null && i !== undefined) {
          i.call(this);
        }
      }
    }
  };
  return r;
}(Cl);
var Uw = {
  now: function () {
    return Date.now();
  }
};
var jw = function (t) {
  He(r, t);
  function r(i, s) {
    return t.call(this) || this;
  }
  r.prototype.schedule = function (i, s) {
    return this;
  };
  return r;
}(gs);
var Jp = {
  setInterval: function (t, r) {
    var i = [];
    for (var s = 2; s < arguments.length; s++) {
      i[s - 2] = arguments[s];
    }
    return setInterval.apply(undefined, qe([t, r], Tr(i)));
  },
  clearInterval: function (t) {
    return clearInterval(t);
  },
  delegate: undefined
};
var zw = function (t) {
  He(r, t);
  function r(i, s) {
    var a = t.call(this, i, s) || this;
    a.scheduler = i;
    a.work = s;
    a.pending = false;
    return a;
  }
  r.prototype.schedule = function (i, s) {
    if (s === undefined) {
      s = 0;
    }
    if (this.closed) {
      return this;
    }
    this.state = i;
    var c = this.id;
    var d = this.scheduler;
    if (c != null) {
      this.id = this.recycleAsyncId(d, c, s);
    }
    this.pending = true;
    this.delay = s;
    this.id = this.id ?? this.requestAsyncId(d, this.id, s);
    return this;
  };
  r.prototype.requestAsyncId = function (i, s, a = 0) {
    return Jp.setInterval(i.flush.bind(i, this), a);
  };
  r.prototype.recycleAsyncId = function (i, s, a = 0) {
    if (a != null && this.delay === a && this.pending === false) {
      return s;
    }
    if (s != null) {
      Jp.clearInterval(s);
    }
  };
  r.prototype.execute = function (i, s) {
    if (this.closed) {
      return new Error("executing a cancelled action");
    }
    this.pending = false;
    var a = this._execute(i, s);
    if (a) {
      return a;
    }
    if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  };
  r.prototype._execute = function (i, s) {
    var a = false;
    var c;
    try {
      this.work(i);
    } catch (d) {
      a = true;
      c = d || new Error("Scheduled action threw falsy error");
    }
    if (a) {
      this.unsubscribe();
      return c;
    }
  };
  r.prototype.unsubscribe = function () {
    if (!this.closed) {
      var i = this;
      var s = i.id;
      var a = i.scheduler;
      var c = a.actions;
      this.work = this.state = this.scheduler = null;
      this.pending = false;
      il(c, this);
      if (s != null) {
        this.id = this.recycleAsyncId(a, s, null);
      }
      this.delay = null;
      t.prototype.unsubscribe.call(this);
    }
  };
  return r;
}(jw);
var eh = function () {
  function t(r, i = t.now) {
    this.schedulerActionCtor = r;
    this.now = i;
  }
  t.prototype.schedule = function (r, i = 0, s) {
    return new this.schedulerActionCtor(this, r).schedule(s, i);
  };
  t.now = Uw.now;
  return t;
}();
var $w = function (t) {
  He(r, t);
  function r(i, s = eh.now) {
    var a = t.call(this, i, s) || this;
    a.actions = [];
    a._active = false;
    return a;
  }
  r.prototype.flush = function (i) {
    var s = this.actions;
    if (this._active) {
      s.push(i);
      return;
    }
    var a;
    this._active = true;
    do {
      if (a = i.execute(i.state, i.delay)) {
        break;
      }
    } while (i = s.shift());
    this._active = false;
    if (a) {
      while (i = s.shift()) {
        i.unsubscribe();
      }
      throw a;
    }
  };
  return r;
}(eh);
var Gw = new $w(zw);
var Vw = Gw;
function Fm(t) {
  return t && typeof t.length == "number" && typeof t != "function";
}
function Ww(t) {
  return we(t == null ? undefined : t.then);
}
function Xw(t) {
  return we(t[Pl]);
}
function Yw(t) {
  return Symbol.asyncIterator && we(t == null ? undefined : t[Symbol.asyncIterator]);
}
function qw(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function Kw() {
  if (typeof Symbol != "function" || !Symbol.iterator) {
    return "@@iterator";
  } else {
    return Symbol.iterator;
  }
}
var Qw = Kw();
function Zw(t) {
  return we(t == null ? undefined : t[Qw]);
}
function Jw(t) {
  return Qy(this, arguments, function () {
    var i;
    var s;
    var a;
    var c;
    return lh(this, function (d) {
      switch (d.label) {
        case 0:
          i = t.getReader();
          d.label = 1;
        case 1:
          d.trys.push([1,, 9, 10]);
          d.label = 2;
        case 2:
          return [4, xr(i.read())];
        case 3:
          s = d.sent();
          a = s.value;
          c = s.done;
          if (c) {
            return [4, xr(undefined)];
          } else {
            return [3, 5];
          }
        case 4:
          return [2, d.sent()];
        case 5:
          return [4, xr(a)];
        case 6:
          return [4, d.sent()];
        case 7:
          d.sent();
          return [3, 2];
        case 8:
          return [3, 10];
        case 9:
          i.releaseLock();
          return [7];
        case 10:
          return [2];
      }
    });
  });
}
function ex(t) {
  return we(t == null ? undefined : t.getReader);
}
function ys(t) {
  if (t instanceof Cn) {
    return t;
  }
  if (t != null) {
    if (Xw(t)) {
      return tx(t);
    }
    if (Fm(t)) {
      return nx(t);
    }
    if (Ww(t)) {
      return rx(t);
    }
    if (Yw(t)) {
      return Hm(t);
    }
    if (Zw(t)) {
      return ix(t);
    }
    if (ex(t)) {
      return ox(t);
    }
  }
  throw qw(t);
}
function tx(t) {
  return new Cn(function (r) {
    var i = t[Pl]();
    if (we(i.subscribe)) {
      return i.subscribe(r);
    }
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function nx(t) {
  return new Cn(function (r) {
    for (var i = 0; i < t.length && !r.closed; i++) {
      r.next(t[i]);
    }
    r.complete();
  });
}
function rx(t) {
  return new Cn(function (r) {
    t.then(function (i) {
      if (!r.closed) {
        r.next(i);
        r.complete();
      }
    }, function (i) {
      return r.error(i);
    }).then(null, Mm);
  });
}
function ix(t) {
  return new Cn(function (r) {
    var i;
    var s;
    try {
      for (var a = wi(t), c = a.next(); !c.done; c = a.next()) {
        var d = c.value;
        r.next(d);
        if (r.closed) {
          return;
        }
      }
    } catch (m) {
      i = {
        error: m
      };
    } finally {
      try {
        if (c && !c.done && (s = a.return)) {
          s.call(a);
        }
      } finally {
        if (i) {
          throw i.error;
        }
      }
    }
    r.complete();
  });
}
function Hm(t) {
  return new Cn(function (r) {
    sx(t, r).catch(function (i) {
      return r.error(i);
    });
  });
}
function ox(t) {
  return Hm(Jw(t));
}
function sx(t, r) {
  var i;
  var s;
  var a;
  var c;
  return Ky(this, undefined, undefined, function () {
    var d;
    var m;
    return lh(this, function (h) {
      switch (h.label) {
        case 0:
          h.trys.push([0, 5, 6, 11]);
          i = Zy(t);
          h.label = 1;
        case 1:
          return [4, i.next()];
        case 2:
          s = h.sent();
          if (s.done) {
            return [3, 4];
          }
          d = s.value;
          r.next(d);
          if (r.closed) {
            return [2];
          }
          h.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          m = h.sent();
          a = {
            error: m
          };
          return [3, 11];
        case 6:
          h.trys.push([6,, 9, 10]);
          if (s && !s.done && (c = i.return)) {
            return [4, c.call(i)];
          } else {
            return [3, 8];
          }
        case 7:
          h.sent();
          h.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (a) {
            throw a.error;
          }
          return [7];
        case 10:
          return [7];
        case 11:
          r.complete();
          return [2];
      }
    });
  });
}
function ux(t) {
  return t instanceof Date && !isNaN(t);
}
function Ll(t, r) {
  return Rl(function (i, s) {
    var a = 0;
    i.subscribe(Ni(s, function (c) {
      s.next(t.call(r, c, a++));
    }));
  });
}
var ax = Array.isArray;
function lx(t, r) {
  if (ax(r)) {
    return t.apply(undefined, qe([], Tr(r)));
  } else {
    return t(r);
  }
}
function cx(t) {
  return Ll(function (r) {
    return lx(t, r);
  });
}
function fx(t, r, i, s, a, c, d, m) {
  var h = [];
  var g = 0;
  var v = 0;
  var S = false;
  function k() {
    if (S && !h.length && !g) {
      r.complete();
    }
  }
  function I(O) {
    if (g < s) {
      return M(O);
    } else {
      return h.push(O);
    }
  }
  function M(O) {
    g++;
    var H = false;
    ys(i(O, v++)).subscribe(Ni(r, function (Z) {
      r.next(Z);
    }, function () {
      H = true;
    }, undefined, function () {
      if (H) {
        try {
          g--;
          var Z = function () {
            var Q = h.shift();
            if (!d) {
              M(Q);
            }
          };
          for (; h.length && g < s;) {
            Z();
          }
          k();
        } catch (Q) {
          r.error(Q);
        }
      }
    }));
  }
  t.subscribe(Ni(r, I, function () {
    S = true;
    k();
  }));
  return function () {};
}
function Bm(t, r, i = Infinity) {
  if (we(r)) {
    return Bm(function (s, a) {
      return Ll(function (c, d) {
        return r(s, c, a, d);
      })(ys(t(s, a)));
    }, i);
  } else {
    if (typeof r == "number") {
      i = r;
    }
    return Rl(function (s, a) {
      return fx(s, a, t, i);
    });
  }
}
var dx = ["addListener", "removeListener"];
var px = ["addEventListener", "removeEventListener"];
var hx = ["on", "off"];
function sl(t, r, i, s) {
  if (we(i)) {
    s = i;
    i = undefined;
  }
  if (s) {
    return sl(t, r, i).pipe(cx(s));
  }
  var a = Tr(yx(t) ? px.map(function (m) {
    return function (h) {
      return t[m](r, h, i);
    };
  }) : mx(t) ? dx.map(th(t, r)) : gx(t) ? hx.map(th(t, r)) : [], 2);
  var c = a[0];
  var d = a[1];
  if (!c && Fm(t)) {
    return Bm(function (m) {
      return sl(m, r, i);
    })(ys(t));
  }
  if (!c) {
    throw new TypeError("Invalid event target");
  }
  return new Cn(function (m) {
    function h() {
      var g = [];
      for (var v = 0; v < arguments.length; v++) {
        g[v] = arguments[v];
      }
      return m.next(g.length > 1 ? g : g[0]);
    }
    c(h);
    return function () {
      return d(h);
    };
  });
}
function th(t, r) {
  return function (i) {
    return function (s) {
      return t[i](r, s);
    };
  };
}
function mx(t) {
  return we(t.addListener) && we(t.removeListener);
}
function gx(t) {
  return we(t.on) && we(t.off);
}
function yx(t) {
  return we(t.addEventListener) && we(t.removeEventListener);
}
function vx(t, r, i = Vw) {
  return new Cn(function (s) {
    var a = ux(t) ? +t - i.now() : t;
    if (a < 0) {
      a = 0;
    }
    var c = 0;
    return i.schedule(function () {
      if (!s.closed) {
        s.next(c++);
        s.complete();
      }
    }, a);
  });
}
function _x(t, r) {
  return Rl(function (i, s) {
    var a = null;
    var c = 0;
    var d = false;
    function m() {
      return d && !a && s.complete();
    }
    i.subscribe(Ni(s, function (h) {
      if (a != null) {
        a.unsubscribe();
      }
      var g = 0;
      var v = c++;
      ys(t(h, v)).subscribe(a = Ni(s, function (S) {
        return s.next(r ? r(h, S, v, g++) : S);
      }, function () {
        a = null;
        m();
      }));
    }, function () {
      d = true;
      m();
    }));
  });
}
var oh;
if ((oh = globalThis["claude.internal.ui"]) != null) {
  oh.AboutWindow;
}
var sh;
const Le = (sh = globalThis["claude.internal.ui"]) == null ? undefined : sh.QuickWindow;
var uh;
if ((uh = globalThis["claude.internal.ui"]) != null) {
  uh.MainWindowTitleBar;
}
function Ex(t, r) {
  return Mw(_x(i => vx(t).pipe(Ll(() => i))));
}
const Sx = al();
function wx(t) {
  const r = document.getElementById("prompt-input");
  r.placeholder = t.formatMessage({
    defaultMessage: "What can I help you with today?",
    description: "Placeholder text for the prompt input",
    id: "S3MXlbjkax"
  });
}
window.addEventListener("load", () => {
  var a;
  const t = document.getElementById("prompt-input");
  const r = document.querySelector(".container");
  let i;
  const s = (c, d) => {
    i = Lh({
      locale: c,
      messages: d
    }, Sx);
    wx(i);
  };
  Fh.then(({
    locale: c,
    messages: d
  }) => {
    if (!i) {
      s(c, d);
    }
  });
  if ((a = Ke == null ? undefined : Ke.onLocaleChanged) != null) {
    a.call(Ke, s);
  }
  t.addEventListener("input", () => {
    t.style.height = "24px";
    const c = Math.min(t.scrollHeight, window.innerHeight - 100);
    t.style.height = c + "px";
    const d = t.scrollHeight > c;
    t.style.overflowY = d ? "auto" : "hidden";
    t.style.paddingTop = d ? "22px" : "8px";
    t.style.paddingBottom = d ? "22px" : "8px";
  });
  sl(t, "input").pipe(Ex(750)).subscribe(() => {
    var c;
    console.log("Requesting Skooch!", r.scrollHeight);
    if ((c = Le == null ? undefined : Le.requestSkooch) != null) {
      c.call(Le, r.scrollWidth, r.scrollHeight);
    }
  });
  document.body.addEventListener("click", c => {
    var d;
    if (!r || !(c.target instanceof Node) || !r.contains(c.target)) {
      t.focus();
      if ((d = Le == null ? undefined : Le.requestDismiss) != null) {
        d.call(Le, null);
      }
    }
  });
  document.addEventListener("keydown", c => {
    var d;
    if (c.key === "Enter" && !c.shiftKey && !c.altKey) {
      c.preventDefault();
      if ((d = Le == null ? undefined : Le.requestDismiss) != null) {
        d.call(Le, t.value);
      }
      t.value = "";
      (() => {
        t.style.height = "24px";
        const m = Math.min(t.scrollHeight, window.innerHeight - 100);
        t.style.height = m + "px";
        const h = t.scrollHeight > m;
        t.style.overflowY = h ? "auto" : "hidden";
        t.style.paddingTop = h ? "22px" : "8px";
        t.style.paddingBottom = h ? "22px" : "8px";
      })();
    }
  });
  document.addEventListener("keyup", c => {
    var d;
    if (c.key === "Escape") {
      if ((d = Le == null ? undefined : Le.requestDismiss) != null) {
        d.call(Le, null);
      }
    }
  });
  t.addEventListener("wheel", c => {
    if (t.scrollHeight > t.clientHeight) {
      c.preventDefault();
      t.scrollTop += c.deltaY;
    }
  }, {
    passive: false
  });
  ["dragenter", "dragover", "dragleave", "drop"].forEach(c => {
    t.addEventListener(c, d => {
      d.preventDefault();
      d.stopPropagation();
      if (d instanceof DragEvent && d.dataTransfer) {
        d.dataTransfer.effectAllowed = "none";
        d.dataTransfer.dropEffect = "none";
      }
    }, {
      passive: false
    });
  });
  setTimeout(() => t.focus(), 0);
});