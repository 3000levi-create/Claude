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
      t._sentryDebugIds[r] = "9c8bc8f3-596f-4d63-ad57-0ec6f05d3494";
      t._sentryDebugIdIdentifier = "sentry-dbid-9c8bc8f3-596f-4d63-ad57-0ec6f05d3494";
    }
  })();
} catch {}
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) {
    return;
  }
  for (const u of document.querySelectorAll("link[rel=\"modulepreload\"]")) {
    a(u);
  }
  new MutationObserver(u => {
    for (const c of u) {
      if (c.type === "childList") {
        for (const d of c.addedNodes) {
          if (d.tagName === "LINK" && d.rel === "modulepreload") {
            a(d);
          }
        }
      }
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function o(u) {
    const c = {};
    if (u.integrity) {
      c.integrity = u.integrity;
    }
    if (u.referrerPolicy) {
      c.referrerPolicy = u.referrerPolicy;
    }
    if (u.crossOrigin === "use-credentials") {
      c.credentials = "include";
    } else if (u.crossOrigin === "anonymous") {
      c.credentials = "omit";
    } else {
      c.credentials = "same-origin";
    }
    return c;
  }
  function a(u) {
    if (u.ep) {
      return;
    }
    u.ep = true;
    const c = o(u);
    fetch(u.href, c);
  }
})();
const iy = "" + new URL("AnthropicSans-Italic-Variable-Dqj5mHDM.ttf", import.meta.url).href;
const oy = "" + new URL("AnthropicSans-Roman-Variable-DCEzLfgm.ttf", import.meta.url).href;
const sy = "" + new URL("AnthropicSerif-Italic-Variable-B9Ik5ODi.ttf", import.meta.url).href;
const ay = "" + new URL("AnthropicSerif-Roman-Variable-D05ngSTe.ttf", import.meta.url).href;
const uy = `
@font-face {
    font-family: 'Anthropic Sans';
    src: url('${oy}') format('truetype');
    font-weight: 300 800;
    font-style: normal;
}

@font-face {
    font-family: 'Anthropic Sans';
    src: url('${iy}') format('truetype');
    font-weight: 300 800;
    font-style: italic;
}

@font-face {
    font-family: 'Anthropic Serif';
    src: url('${ay}') format('truetype');
    font-weight: 300 800;
    font-style: normal;
}

@font-face {
    font-family: 'Anthropic Serif';
    src: url('${sy}') format('truetype');
    font-weight: 300 800;
    font-style: italic;
}
`;
const Fp = document.createElement("style");
Fp.textContent = uy;
document.head.appendChild(Fp);
function ly(t) {
  if (t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")) {
    return t.default;
  } else {
    return t;
  }
}
var tu = {
  exports: {}
};
var mi = {};
var nu = {
  exports: {}
};
var ee = {};
/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var ld;
function cy() {
  if (ld) {
    return ee;
  }
  ld = 1;
  var t = Symbol.for("react.element");
  var r = Symbol.for("react.portal");
  var o = Symbol.for("react.fragment");
  var a = Symbol.for("react.strict_mode");
  var u = Symbol.for("react.profiler");
  var c = Symbol.for("react.provider");
  var d = Symbol.for("react.context");
  var h = Symbol.for("react.forward_ref");
  var m = Symbol.for("react.suspense");
  var g = Symbol.for("react.memo");
  var v = Symbol.for("react.lazy");
  var S = Symbol.iterator;
  function N(w) {
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
  var k = {
    isMounted: function () {
      return false;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  };
  var A = Object.assign;
  var M = {};
  function H(w, P, J) {
    this.props = w;
    this.context = P;
    this.refs = M;
    this.updater = J || k;
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
  function te() {}
  te.prototype = H.prototype;
  function q(w, P, J) {
    this.props = w;
    this.context = P;
    this.refs = M;
    this.updater = J || k;
  }
  var Q = q.prototype = new te();
  Q.constructor = q;
  A(Q, H.prototype);
  Q.isPureReactComponent = true;
  var ie = Array.isArray;
  var D = Object.prototype.hasOwnProperty;
  var ce = {
    current: null
  };
  var Re = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function tt(w, P, J) {
    var ne;
    var ae = {};
    var ue = null;
    var me = null;
    if (P != null) {
      if (P.ref !== undefined) {
        me = P.ref;
      }
      if (P.key !== undefined) {
        ue = "" + P.key;
      }
      for (ne in P) {
        if (D.call(P, ne) && !Re.hasOwnProperty(ne)) {
          ae[ne] = P[ne];
        }
      }
    }
    var de = arguments.length - 2;
    if (de === 1) {
      ae.children = J;
    } else if (de > 1) {
      var Ee = Array(de);
      for (var rt = 0; rt < de; rt++) {
        Ee[rt] = arguments[rt + 2];
      }
      ae.children = Ee;
    }
    if (w && w.defaultProps) {
      de = w.defaultProps;
      for (ne in de) {
        if (ae[ne] === undefined) {
          ae[ne] = de[ne];
        }
      }
    }
    return {
      $$typeof: t,
      type: w,
      key: ue,
      ref: me,
      props: ae,
      _owner: ce.current
    };
  }
  function en(w, P) {
    return {
      $$typeof: t,
      type: w.type,
      key: P,
      ref: w.ref,
      props: w.props,
      _owner: w._owner
    };
  }
  function jt(w) {
    return typeof w == "object" && w !== null && w.$$typeof === t;
  }
  function Nn(w) {
    var P = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + w.replace(/[=:]/g, function (J) {
      return P[J];
    });
  }
  var kt = /\/+/g;
  function nt(w, P) {
    if (typeof w == "object" && w !== null && w.key != null) {
      return Nn("" + w.key);
    } else {
      return P.toString(36);
    }
  }
  function vt(w, P, J, ne, ae) {
    var ue = typeof w;
    if (ue === "undefined" || ue === "boolean") {
      w = null;
    }
    var me = false;
    if (w === null) {
      me = true;
    } else {
      switch (ue) {
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
      ae = ae(me);
      w = ne === "" ? "." + nt(me, 0) : ne;
      if (ie(ae)) {
        J = "";
        if (w != null) {
          J = w.replace(kt, "$&/") + "/";
        }
        vt(ae, P, J, "", function (rt) {
          return rt;
        });
      } else if (ae != null) {
        if (jt(ae)) {
          ae = en(ae, J + (!ae.key || me && me.key === ae.key ? "" : ("" + ae.key).replace(kt, "$&/") + "/") + w);
        }
        P.push(ae);
      }
      return 1;
    }
    me = 0;
    ne = ne === "" ? "." : ne + ":";
    if (ie(w)) {
      for (var de = 0; de < w.length; de++) {
        ue = w[de];
        var Ee = ne + nt(ue, de);
        me += vt(ue, P, J, Ee, ae);
      }
    } else {
      Ee = N(w);
      if (typeof Ee == "function") {
        w = Ee.call(w);
        de = 0;
        while (!(ue = w.next()).done) {
          ue = ue.value;
          Ee = ne + nt(ue, de++);
          me += vt(ue, P, J, Ee, ae);
        }
      } else if (ue === "object") {
        P = String(w);
        throw Error("Objects are not valid as a React child (found: " + (P === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : P) + "). If you meant to render a collection of children, use an array instead.");
      }
    }
    return me;
  }
  function Ct(w, P, J) {
    if (w == null) {
      return w;
    }
    var ne = [];
    var ae = 0;
    vt(w, ne, "", "", function (ue) {
      return P.call(J, ue, ae++);
    });
    return ne;
  }
  function Ye(w) {
    if (w._status === -1) {
      var P = w._result;
      P = P();
      P.then(function (J) {
        if (w._status === 0 || w._status === -1) {
          w._status = 1;
          w._result = J;
        }
      }, function (J) {
        if (w._status === 0 || w._status === -1) {
          w._status = 2;
          w._result = J;
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
  var xe = {
    current: null
  };
  var b = {
    transition: null
  };
  var X = {
    ReactCurrentDispatcher: xe,
    ReactCurrentBatchConfig: b,
    ReactCurrentOwner: ce
  };
  function U() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  ee.Children = {
    map: Ct,
    forEach: function (w, P, J) {
      Ct(w, function () {
        P.apply(this, arguments);
      }, J);
    },
    count: function (w) {
      var P = 0;
      Ct(w, function () {
        P++;
      });
      return P;
    },
    toArray: function (w) {
      return Ct(w, function (P) {
        return P;
      }) || [];
    },
    only: function (w) {
      if (!jt(w)) {
        throw Error("React.Children.only expected to receive a single React element child.");
      }
      return w;
    }
  };
  ee.Component = H;
  ee.Fragment = o;
  ee.Profiler = u;
  ee.PureComponent = q;
  ee.StrictMode = a;
  ee.Suspense = m;
  ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X;
  ee.act = U;
  ee.cloneElement = function (w, P, J) {
    if (w == null) {
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + w + ".");
    }
    var ne = A({}, w.props);
    var ae = w.key;
    var ue = w.ref;
    var me = w._owner;
    if (P != null) {
      if (P.ref !== undefined) {
        ue = P.ref;
        me = ce.current;
      }
      if (P.key !== undefined) {
        ae = "" + P.key;
      }
      if (w.type && w.type.defaultProps) {
        var de = w.type.defaultProps;
      }
      for (Ee in P) {
        if (D.call(P, Ee) && !Re.hasOwnProperty(Ee)) {
          ne[Ee] = P[Ee] === undefined && de !== undefined ? de[Ee] : P[Ee];
        }
      }
    }
    var Ee = arguments.length - 2;
    if (Ee === 1) {
      ne.children = J;
    } else if (Ee > 1) {
      de = Array(Ee);
      for (var rt = 0; rt < Ee; rt++) {
        de[rt] = arguments[rt + 2];
      }
      ne.children = de;
    }
    return {
      $$typeof: t,
      type: w.type,
      key: ae,
      ref: ue,
      props: ne,
      _owner: me
    };
  };
  ee.createContext = function (w) {
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
  ee.createElement = tt;
  ee.createFactory = function (w) {
    var P = tt.bind(null, w);
    P.type = w;
    return P;
  };
  ee.createRef = function () {
    return {
      current: null
    };
  };
  ee.forwardRef = function (w) {
    return {
      $$typeof: h,
      render: w
    };
  };
  ee.isValidElement = jt;
  ee.lazy = function (w) {
    return {
      $$typeof: v,
      _payload: {
        _status: -1,
        _result: w
      },
      _init: Ye
    };
  };
  ee.memo = function (w, P) {
    return {
      $$typeof: g,
      type: w,
      compare: P === undefined ? null : P
    };
  };
  ee.startTransition = function (w) {
    var P = b.transition;
    b.transition = {};
    try {
      w();
    } finally {
      b.transition = P;
    }
  };
  ee.unstable_act = U;
  ee.useCallback = function (w, P) {
    return xe.current.useCallback(w, P);
  };
  ee.useContext = function (w) {
    return xe.current.useContext(w);
  };
  ee.useDebugValue = function () {};
  ee.useDeferredValue = function (w) {
    return xe.current.useDeferredValue(w);
  };
  ee.useEffect = function (w, P) {
    return xe.current.useEffect(w, P);
  };
  ee.useId = function () {
    return xe.current.useId();
  };
  ee.useImperativeHandle = function (w, P, J) {
    return xe.current.useImperativeHandle(w, P, J);
  };
  ee.useInsertionEffect = function (w, P) {
    return xe.current.useInsertionEffect(w, P);
  };
  ee.useLayoutEffect = function (w, P) {
    return xe.current.useLayoutEffect(w, P);
  };
  ee.useMemo = function (w, P) {
    return xe.current.useMemo(w, P);
  };
  ee.useReducer = function (w, P, J) {
    return xe.current.useReducer(w, P, J);
  };
  ee.useRef = function (w) {
    return xe.current.useRef(w);
  };
  ee.useState = function (w) {
    return xe.current.useState(w);
  };
  ee.useSyncExternalStore = function (w, P, J) {
    return xe.current.useSyncExternalStore(w, P, J);
  };
  ee.useTransition = function () {
    return xe.current.useTransition();
  };
  ee.version = "18.3.1";
  return ee;
}
var cd;
function Yu() {
  if (!cd) {
    cd = 1;
    nu.exports = cy();
  }
  return nu.exports;
} /**
  * @license React
  * react-jsx-runtime.production.min.js
  *
  * Copyright (c) Facebook, Inc. and its affiliates.
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */
var fd;
function fy() {
  if (fd) {
    return mi;
  }
  fd = 1;
  var t = Yu();
  var r = Symbol.for("react.element");
  var o = Symbol.for("react.fragment");
  var a = Object.prototype.hasOwnProperty;
  var u = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
  var c = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function d(h, m, g) {
    var v;
    var S = {};
    var N = null;
    var k = null;
    if (g !== undefined) {
      N = "" + g;
    }
    if (m.key !== undefined) {
      N = "" + m.key;
    }
    if (m.ref !== undefined) {
      k = m.ref;
    }
    for (v in m) {
      if (a.call(m, v) && !c.hasOwnProperty(v)) {
        S[v] = m[v];
      }
    }
    if (h && h.defaultProps) {
      m = h.defaultProps;
      for (v in m) {
        if (S[v] === undefined) {
          S[v] = m[v];
        }
      }
    }
    return {
      $$typeof: r,
      type: h,
      key: N,
      ref: k,
      props: S,
      _owner: u.current
    };
  }
  mi.Fragment = o;
  mi.jsx = d;
  mi.jsxs = d;
  return mi;
}
var dd;
function dy() {
  if (!dd) {
    dd = 1;
    tu.exports = fy();
  }
  return tu.exports;
}
var Su = dy();
var ze = Yu();
const q1 = ly(ze);
var Ho = {};
var ru = {
  exports: {}
};
var et = {};
var iu = {
  exports: {}
};
var ou = {};
/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var pd;
function py() {
  if (!pd) {
    pd = 1;
    (function (t) {
      function r(b, X) {
        var U = b.length;
        b.push(X);
        e: while (U > 0) {
          var w = U - 1 >>> 1;
          var P = b[w];
          if (u(P, X) > 0) {
            b[w] = X;
            b[U] = P;
            U = w;
          } else {
            break e;
          }
        }
      }
      function o(b) {
        if (b.length === 0) {
          return null;
        } else {
          return b[0];
        }
      }
      function a(b) {
        if (b.length === 0) {
          return null;
        }
        var X = b[0];
        var U = b.pop();
        if (U !== X) {
          b[0] = U;
          e: for (var w = 0, P = b.length, J = P >>> 1; w < J;) {
            var ne = (w + 1) * 2 - 1;
            var ae = b[ne];
            var ue = ne + 1;
            var me = b[ue];
            if (u(ae, U) < 0) {
              if (ue < P && u(me, ae) < 0) {
                b[w] = me;
                b[ue] = U;
                w = ue;
              } else {
                b[w] = ae;
                b[ne] = U;
                w = ne;
              }
            } else if (ue < P && u(me, U) < 0) {
              b[w] = me;
              b[ue] = U;
              w = ue;
            } else {
              break e;
            }
          }
        }
        return X;
      }
      function u(b, X) {
        var U = b.sortIndex - X.sortIndex;
        if (U !== 0) {
          return U;
        } else {
          return b.id - X.id;
        }
      }
      if (typeof performance == "object" && typeof performance.now == "function") {
        var c = performance;
        t.unstable_now = function () {
          return c.now();
        };
      } else {
        var d = Date;
        var h = d.now();
        t.unstable_now = function () {
          return d.now() - h;
        };
      }
      var m = [];
      var g = [];
      var v = 1;
      var S = null;
      var N = 3;
      var k = false;
      var A = false;
      var M = false;
      var H = typeof setTimeout == "function" ? setTimeout : null;
      var te = typeof clearTimeout == "function" ? clearTimeout : null;
      var q = typeof setImmediate !== "undefined" ? setImmediate : null;
      if (typeof navigator !== "undefined" && navigator.scheduling !== undefined && navigator.scheduling.isInputPending !== undefined) {
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
      }
      function Q(b) {
        for (var X = o(g); X !== null;) {
          if (X.callback === null) {
            a(g);
          } else if (X.startTime <= b) {
            a(g);
            X.sortIndex = X.expirationTime;
            r(m, X);
          } else {
            break;
          }
          X = o(g);
        }
      }
      function ie(b) {
        M = false;
        Q(b);
        if (!A) {
          if (o(m) !== null) {
            A = true;
            Ye(D);
          } else {
            var X = o(g);
            if (X !== null) {
              xe(ie, X.startTime - b);
            }
          }
        }
      }
      function D(b, X) {
        A = false;
        if (M) {
          M = false;
          te(tt);
          tt = -1;
        }
        k = true;
        var U = N;
        try {
          Q(X);
          S = o(m);
          while (S !== null && (!(S.expirationTime > X) || b && !Nn())) {
            var w = S.callback;
            if (typeof w == "function") {
              S.callback = null;
              N = S.priorityLevel;
              var P = w(S.expirationTime <= X);
              X = t.unstable_now();
              if (typeof P == "function") {
                S.callback = P;
              } else if (S === o(m)) {
                a(m);
              }
              Q(X);
            } else {
              a(m);
            }
            S = o(m);
          }
          if (S !== null) {
            var J = true;
          } else {
            var ne = o(g);
            if (ne !== null) {
              xe(ie, ne.startTime - X);
            }
            J = false;
          }
          return J;
        } finally {
          S = null;
          N = U;
          k = false;
        }
      }
      var ce = false;
      var Re = null;
      var tt = -1;
      var en = 5;
      var jt = -1;
      function Nn() {
        return !(t.unstable_now() - jt < en);
      }
      function kt() {
        if (Re !== null) {
          var b = t.unstable_now();
          jt = b;
          var X = true;
          try {
            X = Re(true, b);
          } finally {
            if (X) {
              nt();
            } else {
              ce = false;
              Re = null;
            }
          }
        } else {
          ce = false;
        }
      }
      var nt;
      if (typeof q == "function") {
        nt = function () {
          q(kt);
        };
      } else if (typeof MessageChannel !== "undefined") {
        var vt = new MessageChannel();
        var Ct = vt.port2;
        vt.port1.onmessage = kt;
        nt = function () {
          Ct.postMessage(null);
        };
      } else {
        nt = function () {
          H(kt, 0);
        };
      }
      function Ye(b) {
        Re = b;
        if (!ce) {
          ce = true;
          nt();
        }
      }
      function xe(b, X) {
        tt = H(function () {
          b(t.unstable_now());
        }, X);
      }
      t.unstable_IdlePriority = 5;
      t.unstable_ImmediatePriority = 1;
      t.unstable_LowPriority = 4;
      t.unstable_NormalPriority = 3;
      t.unstable_Profiling = null;
      t.unstable_UserBlockingPriority = 2;
      t.unstable_cancelCallback = function (b) {
        b.callback = null;
      };
      t.unstable_continueExecution = function () {
        if (!A && !k) {
          A = true;
          Ye(D);
        }
      };
      t.unstable_forceFrameRate = function (b) {
        if (b < 0 || b > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
        } else {
          en = b > 0 ? Math.floor(1000 / b) : 5;
        }
      };
      t.unstable_getCurrentPriorityLevel = function () {
        return N;
      };
      t.unstable_getFirstCallbackNode = function () {
        return o(m);
      };
      t.unstable_next = function (b) {
        switch (N) {
          case 1:
          case 2:
          case 3:
            var X = 3;
            break;
          default:
            X = N;
        }
        var U = N;
        N = X;
        try {
          return b();
        } finally {
          N = U;
        }
      };
      t.unstable_pauseExecution = function () {};
      t.unstable_requestPaint = function () {};
      t.unstable_runWithPriority = function (b, X) {
        switch (b) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            b = 3;
        }
        var U = N;
        N = b;
        try {
          return X();
        } finally {
          N = U;
        }
      };
      t.unstable_scheduleCallback = function (b, X, U) {
        var w = t.unstable_now();
        if (typeof U == "object" && U !== null) {
          U = U.delay;
          U = typeof U == "number" && U > 0 ? w + U : w;
        } else {
          U = w;
        }
        switch (b) {
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
        b = {
          id: v++,
          callback: X,
          priorityLevel: b,
          startTime: U,
          expirationTime: P,
          sortIndex: -1
        };
        if (U > w) {
          b.sortIndex = U;
          r(g, b);
          if (o(m) === null && b === o(g)) {
            if (M) {
              te(tt);
              tt = -1;
            } else {
              M = true;
            }
            xe(ie, U - w);
          }
        } else {
          b.sortIndex = P;
          r(m, b);
          if (!A && !k) {
            A = true;
            Ye(D);
          }
        }
        return b;
      };
      t.unstable_shouldYield = Nn;
      t.unstable_wrapCallback = function (b) {
        var X = N;
        return function () {
          var U = N;
          N = X;
          try {
            return b.apply(this, arguments);
          } finally {
            N = U;
          }
        };
      };
    })(ou);
  }
  return ou;
}
var hd;
function hy() {
  if (!hd) {
    hd = 1;
    iu.exports = py();
  }
  return iu.exports;
} /**
  * @license React
  * react-dom.production.min.js
  *
  * Copyright (c) Facebook, Inc. and its affiliates.
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */
var md;
function my() {
  if (md) {
    return et;
  }
  md = 1;
  var t = Yu();
  var r = hy();
  function o(e) {
    var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e;
    for (var i = 1; i < arguments.length; i++) {
      n += "&args[]=" + encodeURIComponent(arguments[i]);
    }
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var a = new Set();
  var u = {};
  function c(e, n) {
    d(e, n);
    d(e + "Capture", n);
  }
  function d(e, n) {
    u[e] = n;
    e = 0;
    for (; e < n.length; e++) {
      a.add(n[e]);
    }
  }
  var h = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
  var m = Object.prototype.hasOwnProperty;
  var g = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
  var v = {};
  var S = {};
  function N(e) {
    if (m.call(S, e)) {
      return true;
    } else if (m.call(v, e)) {
      return false;
    } else if (g.test(e)) {
      return S[e] = true;
    } else {
      v[e] = true;
      return false;
    }
  }
  function k(e, n, i, s) {
    if (i !== null && i.type === 0) {
      return false;
    }
    switch (typeof n) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        if (s) {
          return false;
        } else if (i !== null) {
          return !i.acceptsBooleans;
        } else {
          e = e.toLowerCase().slice(0, 5);
          return e !== "data-" && e !== "aria-";
        }
      default:
        return false;
    }
  }
  function A(e, n, i, s) {
    if (n === null || typeof n === "undefined" || k(e, n, i, s)) {
      return true;
    }
    if (s) {
      return false;
    }
    if (i !== null) {
      switch (i.type) {
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
  function M(e, n, i, s, l, f, p) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4;
    this.attributeName = s;
    this.attributeNamespace = l;
    this.mustUseProperty = i;
    this.propertyName = e;
    this.type = n;
    this.sanitizeURL = f;
    this.removeEmptyString = p;
  }
  var H = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
    H[e] = new M(e, 0, false, e, null, false, false);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) {
    var n = e[0];
    H[n] = new M(n, 1, false, e[1], null, false, false);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    H[e] = new M(e, 2, false, e.toLowerCase(), null, false, false);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    H[e] = new M(e, 2, false, e, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
    H[e] = new M(e, 3, false, e.toLowerCase(), null, false, false);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function (e) {
    H[e] = new M(e, 3, true, e, null, false, false);
  });
  ["capture", "download"].forEach(function (e) {
    H[e] = new M(e, 4, false, e, null, false, false);
  });
  ["cols", "rows", "size", "span"].forEach(function (e) {
    H[e] = new M(e, 6, false, e, null, false, false);
  });
  ["rowSpan", "start"].forEach(function (e) {
    H[e] = new M(e, 5, false, e.toLowerCase(), null, false, false);
  });
  var te = /[\-:]([a-z])/g;
  function q(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
    var n = e.replace(te, q);
    H[n] = new M(n, 1, false, e, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var n = e.replace(te, q);
    H[n] = new M(n, 1, false, e, "http://www.w3.org/1999/xlink", false, false);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var n = e.replace(te, q);
    H[n] = new M(n, 1, false, e, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  ["tabIndex", "crossOrigin"].forEach(function (e) {
    H[e] = new M(e, 1, false, e.toLowerCase(), null, false, false);
  });
  H.xlinkHref = new M("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  ["src", "href", "action", "formAction"].forEach(function (e) {
    H[e] = new M(e, 1, false, e.toLowerCase(), null, true, true);
  });
  function Q(e, n, i, s) {
    var l = H.hasOwnProperty(n) ? H[n] : null;
    if (l !== null ? l.type !== 0 : s || !(n.length > 2) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") {
      if (A(n, i, l, s)) {
        i = null;
      }
      if (s || l === null) {
        if (N(n)) {
          if (i === null) {
            e.removeAttribute(n);
          } else {
            e.setAttribute(n, "" + i);
          }
        }
      } else if (l.mustUseProperty) {
        e[l.propertyName] = i === null ? l.type === 3 ? false : "" : i;
      } else {
        n = l.attributeName;
        s = l.attributeNamespace;
        if (i === null) {
          e.removeAttribute(n);
        } else {
          l = l.type;
          i = l === 3 || l === 4 && i === true ? "" : "" + i;
          if (s) {
            e.setAttributeNS(s, n, i);
          } else {
            e.setAttribute(n, i);
          }
        }
      }
    }
  }
  var ie = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  var D = Symbol.for("react.element");
  var ce = Symbol.for("react.portal");
  var Re = Symbol.for("react.fragment");
  var tt = Symbol.for("react.strict_mode");
  var en = Symbol.for("react.profiler");
  var jt = Symbol.for("react.provider");
  var Nn = Symbol.for("react.context");
  var kt = Symbol.for("react.forward_ref");
  var nt = Symbol.for("react.suspense");
  var vt = Symbol.for("react.suspense_list");
  var Ct = Symbol.for("react.memo");
  var Ye = Symbol.for("react.lazy");
  var xe = Symbol.for("react.offscreen");
  var b = Symbol.iterator;
  function X(e) {
    if (e === null || typeof e != "object") {
      return null;
    } else {
      e = b && e[b] || e["@@iterator"];
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
      } catch (i) {
        var n = i.stack.trim().match(/\n( *(at )?)/);
        w = n && n[1] || "";
      }
    }
    return `
${w}${e}`;
  }
  var J = false;
  function ne(e, n) {
    if (!e || J) {
      return "";
    }
    J = true;
    var i = Error.prepareStackTrace;
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
          } catch (I) {
            var s = I;
          }
          Reflect.construct(e, [], n);
        } else {
          try {
            n.call();
          } catch (I) {
            s = I;
          }
          e.call(n.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (I) {
          s = I;
        }
        e();
      }
    } catch (I) {
      if (I && s && typeof I.stack == "string") {
        for (var l = I.stack.split(`
`), f = s.stack.split(`
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
      J = false;
      Error.prepareStackTrace = i;
    }
    if (e = e ? e.displayName || e.name : "") {
      return P(e);
    } else {
      return "";
    }
  }
  function ae(e) {
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
  function ue(e) {
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
      case Re:
        return "Fragment";
      case ce:
        return "Portal";
      case en:
        return "Profiler";
      case tt:
        return "StrictMode";
      case nt:
        return "Suspense";
      case vt:
        return "SuspenseList";
    }
    if (typeof e == "object") {
      switch (e.$$typeof) {
        case Nn:
          return (e.displayName || "Context") + ".Consumer";
        case jt:
          return (e._context.displayName || "Context") + ".Provider";
        case kt:
          var n = e.render;
          e = e.displayName;
          if (!e) {
            e = n.displayName || n.name || "";
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef";
          }
          return e;
        case Ct:
          n = e.displayName || null;
          if (n !== null) {
            return n;
          } else {
            return ue(e.type) || "Memo";
          }
        case Ye:
          n = e._payload;
          e = e._init;
          try {
            return ue(e(n));
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
        return ue(n);
      case 8:
        if (n === tt) {
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
  function rt(e) {
    var n = Ee(e) ? "checked" : "value";
    var i = Object.getOwnPropertyDescriptor(e.constructor.prototype, n);
    var s = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof i !== "undefined" && typeof i.get == "function" && typeof i.set == "function") {
      var l = i.get;
      var f = i.set;
      Object.defineProperty(e, n, {
        configurable: true,
        get: function () {
          return l.call(this);
        },
        set: function (p) {
          s = "" + p;
          f.call(this, p);
        }
      });
      Object.defineProperty(e, n, {
        enumerable: i.enumerable
      });
      return {
        getValue: function () {
          return s;
        },
        setValue: function (p) {
          s = "" + p;
        },
        stopTracking: function () {
          e._valueTracker = null;
          delete e[n];
        }
      };
    }
  }
  function ki(e) {
    e._valueTracker ||= rt(e);
  }
  function hl(e) {
    if (!e) {
      return false;
    }
    var n = e._valueTracker;
    if (!n) {
      return true;
    }
    var i = n.getValue();
    var s = "";
    if (e) {
      s = Ee(e) ? e.checked ? "true" : "false" : e.value;
    }
    e = s;
    if (e !== i) {
      n.setValue(e);
      return true;
    } else {
      return false;
    }
  }
  function Ci(e) {
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
  function us(e, n) {
    var i = n.checked;
    return U({}, n, {
      defaultChecked: undefined,
      defaultValue: undefined,
      value: undefined,
      checked: i ?? e._wrapperState.initialChecked
    });
  }
  function ml(e, n) {
    var i = n.defaultValue == null ? "" : n.defaultValue;
    var s = n.checked ?? n.defaultChecked;
    i = de(n.value ?? i);
    e._wrapperState = {
      initialChecked: s,
      initialValue: i,
      controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null
    };
  }
  function gl(e, n) {
    n = n.checked;
    if (n != null) {
      Q(e, "checked", n, false);
    }
  }
  function ls(e, n) {
    gl(e, n);
    var i = de(n.value);
    var s = n.type;
    if (i != null) {
      if (s === "number") {
        if (i === 0 && e.value === "" || e.value != i) {
          e.value = "" + i;
        }
      } else if (e.value !== "" + i) {
        e.value = "" + i;
      }
    } else if (s === "submit" || s === "reset") {
      e.removeAttribute("value");
      return;
    }
    if (n.hasOwnProperty("value")) {
      cs(e, n.type, i);
    } else if (n.hasOwnProperty("defaultValue")) {
      cs(e, n.type, de(n.defaultValue));
    }
    if (n.checked == null && n.defaultChecked != null) {
      e.defaultChecked = !!n.defaultChecked;
    }
  }
  function yl(e, n, i) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
      var s = n.type;
      if ((s === "submit" || s === "reset") && (n.value === undefined || n.value === null)) {
        return;
      }
      n = "" + e._wrapperState.initialValue;
      if (!i && n !== e.value) {
        e.value = n;
      }
      e.defaultValue = n;
    }
    i = e.name;
    if (i !== "") {
      e.name = "";
    }
    e.defaultChecked = !!e._wrapperState.initialChecked;
    if (i !== "") {
      e.name = i;
    }
  }
  function cs(e, n, i) {
    if (n !== "number" || Ci(e.ownerDocument) !== e) {
      if (i == null) {
        e.defaultValue = "" + e._wrapperState.initialValue;
      } else if (e.defaultValue !== "" + i) {
        e.defaultValue = "" + i;
      }
    }
  }
  var Rr = Array.isArray;
  function Qn(e, n, i, s) {
    e = e.options;
    if (n) {
      n = {};
      for (var l = 0; l < i.length; l++) {
        n["$" + i[l]] = true;
      }
      for (i = 0; i < e.length; i++) {
        l = n.hasOwnProperty("$" + e[i].value);
        if (e[i].selected !== l) {
          e[i].selected = l;
        }
        if (l && s) {
          e[i].defaultSelected = true;
        }
      }
    } else {
      i = "" + de(i);
      n = null;
      l = 0;
      for (; l < e.length; l++) {
        if (e[l].value === i) {
          e[l].selected = true;
          if (s) {
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
  function fs(e, n) {
    if (n.dangerouslySetInnerHTML != null) {
      throw Error(o(91));
    }
    return U({}, n, {
      value: undefined,
      defaultValue: undefined,
      children: "" + e._wrapperState.initialValue
    });
  }
  function vl(e, n) {
    var i = n.value;
    if (i == null) {
      i = n.children;
      n = n.defaultValue;
      if (i != null) {
        if (n != null) {
          throw Error(o(92));
        }
        if (Rr(i)) {
          if (i.length > 1) {
            throw Error(o(93));
          }
          i = i[0];
        }
        n = i;
      }
      if (n == null) {
        n = "";
      }
      i = n;
    }
    e._wrapperState = {
      initialValue: de(i)
    };
  }
  function _l(e, n) {
    var i = de(n.value);
    var s = de(n.defaultValue);
    if (i != null) {
      i = "" + i;
      if (i !== e.value) {
        e.value = i;
      }
      if (n.defaultValue == null && e.defaultValue !== i) {
        e.defaultValue = i;
      }
    }
    if (s != null) {
      e.defaultValue = "" + s;
    }
  }
  function El(e) {
    var n = e.textContent;
    if (n === e._wrapperState.initialValue && n !== "" && n !== null) {
      e.value = n;
    }
  }
  function Sl(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ds(e, n) {
    if (e == null || e === "http://www.w3.org/1999/xhtml") {
      return Sl(n);
    } else if (e === "http://www.w3.org/2000/svg" && n === "foreignObject") {
      return "http://www.w3.org/1999/xhtml";
    } else {
      return e;
    }
  }
  var Pi;
  var wl = function (e) {
    if (typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction) {
      return function (n, i, s, l) {
        MSApp.execUnsafeLocalFunction(function () {
          return e(n, i, s, l);
        });
      };
    } else {
      return e;
    }
  }(function (e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) {
      e.innerHTML = n;
    } else {
      Pi = Pi || document.createElement("div");
      Pi.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>";
      n = Pi.firstChild;
      while (e.firstChild) {
        e.removeChild(e.firstChild);
      }
      while (n.firstChild) {
        e.appendChild(n.firstChild);
      }
    }
  });
  function Lr(e, n) {
    if (n) {
      var i = e.firstChild;
      if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var Or = {
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
  var um = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Or).forEach(function (e) {
    um.forEach(function (n) {
      n = n + e.charAt(0).toUpperCase() + e.substring(1);
      Or[n] = Or[e];
    });
  });
  function Tl(e, n, i) {
    if (n == null || typeof n == "boolean" || n === "") {
      return "";
    } else if (i || typeof n != "number" || n === 0 || Or.hasOwnProperty(e) && Or[e]) {
      return ("" + n).trim();
    } else {
      return n + "px";
    }
  }
  function xl(e, n) {
    e = e.style;
    for (var i in n) {
      if (n.hasOwnProperty(i)) {
        var s = i.indexOf("--") === 0;
        var l = Tl(i, n[i], s);
        if (i === "float") {
          i = "cssFloat";
        }
        if (s) {
          e.setProperty(i, l);
        } else {
          e[i] = l;
        }
      }
    }
  }
  var lm = U({
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
  function ps(e, n) {
    if (n) {
      if (lm[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) {
        throw Error(o(137, e));
      }
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null) {
          throw Error(o(60));
        }
        if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML)) {
          throw Error(o(61));
        }
      }
      if (n.style != null && typeof n.style != "object") {
        throw Error(o(62));
      }
    }
  }
  function hs(e, n) {
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
  var ms = null;
  function gs(e) {
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
  var ys = null;
  var Kn = null;
  var qn = null;
  function Il(e) {
    if (e = ei(e)) {
      if (typeof ys != "function") {
        throw Error(o(280));
      }
      var n = e.stateNode;
      if (n) {
        n = Zi(n);
        ys(e.stateNode, e.type, n);
      }
    }
  }
  function Nl(e) {
    if (Kn) {
      if (qn) {
        qn.push(e);
      } else {
        qn = [e];
      }
    } else {
      Kn = e;
    }
  }
  function kl() {
    if (Kn) {
      var e = Kn;
      var n = qn;
      qn = Kn = null;
      Il(e);
      if (n) {
        for (e = 0; e < n.length; e++) {
          Il(n[e]);
        }
      }
    }
  }
  function Cl(e, n) {
    return e(n);
  }
  function Pl() {}
  var vs = false;
  function Rl(e, n, i) {
    if (vs) {
      return e(n, i);
    }
    vs = true;
    try {
      return Cl(e, n, i);
    } finally {
      vs = false;
      if (Kn !== null || qn !== null) {
        Pl();
        kl();
      }
    }
  }
  function Ar(e, n) {
    var i = e.stateNode;
    if (i === null) {
      return null;
    }
    var s = Zi(i);
    if (s === null) {
      return null;
    }
    i = s[n];
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
        if (!(s = !s.disabled)) {
          e = e.type;
          s = e !== "button" && e !== "input" && e !== "select" && e !== "textarea";
        }
        e = !s;
        break e;
      default:
        e = false;
    }
    if (e) {
      return null;
    }
    if (i && typeof i != "function") {
      throw Error(o(231, n, typeof i));
    }
    return i;
  }
  var _s = false;
  if (h) {
    try {
      var Dr = {};
      Object.defineProperty(Dr, "passive", {
        get: function () {
          _s = true;
        }
      });
      window.addEventListener("test", Dr, Dr);
      window.removeEventListener("test", Dr, Dr);
    } catch {
      _s = false;
    }
  }
  function cm(e, n, i, s, l, f, p, y, _) {
    var I = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(i, I);
    } catch (R) {
      this.onError(R);
    }
  }
  var Mr = false;
  var Ri = null;
  var Li = false;
  var Es = null;
  var fm = {
    onError: function (e) {
      Mr = true;
      Ri = e;
    }
  };
  function dm(e, n, i, s, l, f, p, y, _) {
    Mr = false;
    Ri = null;
    cm.apply(fm, arguments);
  }
  function pm(e, n, i, s, l, f, p, y, _) {
    dm.apply(this, arguments);
    if (Mr) {
      if (Mr) {
        var I = Ri;
        Mr = false;
        Ri = null;
      } else {
        throw Error(o(198));
      }
      if (!Li) {
        Li = true;
        Es = I;
      }
    }
  }
  function kn(e) {
    var n = e;
    var i = e;
    if (e.alternate) {
      while (n.return) {
        n = n.return;
      }
    } else {
      e = n;
      do {
        n = e;
        if ((n.flags & 4098) !== 0) {
          i = n.return;
        }
        e = n.return;
      } while (e);
    }
    if (n.tag === 3) {
      return i;
    } else {
      return null;
    }
  }
  function Ll(e) {
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
  function Ol(e) {
    if (kn(e) !== e) {
      throw Error(o(188));
    }
  }
  function hm(e) {
    var n = e.alternate;
    if (!n) {
      n = kn(e);
      if (n === null) {
        throw Error(o(188));
      }
      if (n !== e) {
        return null;
      } else {
        return e;
      }
    }
    var i = e;
    var s = n;
    while (true) {
      var l = i.return;
      if (l === null) {
        break;
      }
      var f = l.alternate;
      if (f === null) {
        s = l.return;
        if (s !== null) {
          i = s;
          continue;
        }
        break;
      }
      if (l.child === f.child) {
        for (f = l.child; f;) {
          if (f === i) {
            Ol(l);
            return e;
          }
          if (f === s) {
            Ol(l);
            return n;
          }
          f = f.sibling;
        }
        throw Error(o(188));
      }
      if (i.return !== s.return) {
        i = l;
        s = f;
      } else {
        var p = false;
        for (var y = l.child; y;) {
          if (y === i) {
            p = true;
            i = l;
            s = f;
            break;
          }
          if (y === s) {
            p = true;
            s = l;
            i = f;
            break;
          }
          y = y.sibling;
        }
        if (!p) {
          for (y = f.child; y;) {
            if (y === i) {
              p = true;
              i = f;
              s = l;
              break;
            }
            if (y === s) {
              p = true;
              s = f;
              i = l;
              break;
            }
            y = y.sibling;
          }
          if (!p) {
            throw Error(o(189));
          }
        }
      }
      if (i.alternate !== s) {
        throw Error(o(190));
      }
    }
    if (i.tag !== 3) {
      throw Error(o(188));
    }
    if (i.stateNode.current === i) {
      return e;
    } else {
      return n;
    }
  }
  function Al(e) {
    e = hm(e);
    if (e !== null) {
      return Dl(e);
    } else {
      return null;
    }
  }
  function Dl(e) {
    if (e.tag === 5 || e.tag === 6) {
      return e;
    }
    for (e = e.child; e !== null;) {
      var n = Dl(e);
      if (n !== null) {
        return n;
      }
      e = e.sibling;
    }
    return null;
  }
  var Ml = r.unstable_scheduleCallback;
  var bl = r.unstable_cancelCallback;
  var mm = r.unstable_shouldYield;
  var gm = r.unstable_requestPaint;
  var Ne = r.unstable_now;
  var ym = r.unstable_getCurrentPriorityLevel;
  var Ss = r.unstable_ImmediatePriority;
  var Fl = r.unstable_UserBlockingPriority;
  var Oi = r.unstable_NormalPriority;
  var vm = r.unstable_LowPriority;
  var Hl = r.unstable_IdlePriority;
  var Ai = null;
  var Pt = null;
  function _m(e) {
    if (Pt && typeof Pt.onCommitFiberRoot == "function") {
      try {
        Pt.onCommitFiberRoot(Ai, e, undefined, (e.current.flags & 128) === 128);
      } catch {}
    }
  }
  var _t = Math.clz32 ? Math.clz32 : wm;
  var Em = Math.log;
  var Sm = Math.LN2;
  function wm(e) {
    e >>>= 0;
    if (e === 0) {
      return 32;
    } else {
      return 31 - (Em(e) / Sm | 0) | 0;
    }
  }
  var Di = 64;
  var Mi = 4194304;
  function br(e) {
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
  function bi(e, n) {
    var i = e.pendingLanes;
    if (i === 0) {
      return 0;
    }
    var s = 0;
    var l = e.suspendedLanes;
    var f = e.pingedLanes;
    var p = i & 268435455;
    if (p !== 0) {
      var y = p & ~l;
      if (y !== 0) {
        s = br(y);
      } else {
        f &= p;
        if (f !== 0) {
          s = br(f);
        }
      }
    } else {
      p = i & ~l;
      if (p !== 0) {
        s = br(p);
      } else if (f !== 0) {
        s = br(f);
      }
    }
    if (s === 0) {
      return 0;
    }
    if (n !== 0 && n !== s && (n & l) === 0 && (l = s & -s, f = n & -n, l >= f || l === 16 && (f & 4194240) !== 0)) {
      return n;
    }
    if ((s & 4) !== 0) {
      s |= i & 16;
    }
    n = e.entangledLanes;
    if (n !== 0) {
      e = e.entanglements;
      n &= s;
      while (n > 0) {
        i = 31 - _t(n);
        l = 1 << i;
        s |= e[i];
        n &= ~l;
      }
    }
    return s;
  }
  function Tm(e, n) {
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
  function xm(e, n) {
    var i = e.suspendedLanes;
    var s = e.pingedLanes;
    var l = e.expirationTimes;
    for (var f = e.pendingLanes; f > 0;) {
      var p = 31 - _t(f);
      var y = 1 << p;
      var _ = l[p];
      if (_ === -1) {
        if ((y & i) === 0 || (y & s) !== 0) {
          l[p] = Tm(y, n);
        }
      } else if (_ <= n) {
        e.expiredLanes |= y;
      }
      f &= ~y;
    }
  }
  function ws(e) {
    e = e.pendingLanes & -1073741825;
    if (e !== 0) {
      return e;
    } else if (e & 1073741824) {
      return 1073741824;
    } else {
      return 0;
    }
  }
  function Bl() {
    var e = Di;
    Di <<= 1;
    if ((Di & 4194240) === 0) {
      Di = 64;
    }
    return e;
  }
  function Ts(e) {
    var n = [];
    for (var i = 0; i < 31; i++) {
      n.push(e);
    }
    return n;
  }
  function Fr(e, n, i) {
    e.pendingLanes |= n;
    if (n !== 536870912) {
      e.suspendedLanes = 0;
      e.pingedLanes = 0;
    }
    e = e.eventTimes;
    n = 31 - _t(n);
    e[n] = i;
  }
  function Im(e, n) {
    var i = e.pendingLanes & ~n;
    e.pendingLanes = n;
    e.suspendedLanes = 0;
    e.pingedLanes = 0;
    e.expiredLanes &= n;
    e.mutableReadLanes &= n;
    e.entangledLanes &= n;
    n = e.entanglements;
    var s = e.eventTimes;
    for (e = e.expirationTimes; i > 0;) {
      var l = 31 - _t(i);
      var f = 1 << l;
      n[l] = 0;
      s[l] = -1;
      e[l] = -1;
      i &= ~f;
    }
  }
  function xs(e, n) {
    var i = e.entangledLanes |= n;
    for (e = e.entanglements; i;) {
      var s = 31 - _t(i);
      var l = 1 << s;
      if (l & n | e[s] & n) {
        e[s] |= n;
      }
      i &= ~l;
    }
  }
  var pe = 0;
  function Ul(e) {
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
  var jl;
  var Is;
  var zl;
  var $l;
  var Gl;
  var Ns = false;
  var Fi = [];
  var tn = null;
  var nn = null;
  var rn = null;
  var Hr = new Map();
  var Br = new Map();
  var on = [];
  var Nm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Vl(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        tn = null;
        break;
      case "dragenter":
      case "dragleave":
        nn = null;
        break;
      case "mouseover":
      case "mouseout":
        rn = null;
        break;
      case "pointerover":
      case "pointerout":
        Hr.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Br.delete(n.pointerId);
    }
  }
  function Ur(e, n, i, s, l, f) {
    if (e === null || e.nativeEvent !== f) {
      e = {
        blockedOn: n,
        domEventName: i,
        eventSystemFlags: s,
        nativeEvent: f,
        targetContainers: [l]
      };
      if (n !== null) {
        n = ei(n);
        if (n !== null) {
          Is(n);
        }
      }
      return e;
    } else {
      e.eventSystemFlags |= s;
      n = e.targetContainers;
      if (l !== null && n.indexOf(l) === -1) {
        n.push(l);
      }
      return e;
    }
  }
  function km(e, n, i, s, l) {
    switch (n) {
      case "focusin":
        tn = Ur(tn, e, n, i, s, l);
        return true;
      case "dragenter":
        nn = Ur(nn, e, n, i, s, l);
        return true;
      case "mouseover":
        rn = Ur(rn, e, n, i, s, l);
        return true;
      case "pointerover":
        var f = l.pointerId;
        Hr.set(f, Ur(Hr.get(f) || null, e, n, i, s, l));
        return true;
      case "gotpointercapture":
        f = l.pointerId;
        Br.set(f, Ur(Br.get(f) || null, e, n, i, s, l));
        return true;
    }
    return false;
  }
  function Wl(e) {
    var n = Cn(e.target);
    if (n !== null) {
      var i = kn(n);
      if (i !== null) {
        n = i.tag;
        if (n === 13) {
          n = Ll(i);
          if (n !== null) {
            e.blockedOn = n;
            Gl(e.priority, function () {
              zl(i);
            });
            return;
          }
        } else if (n === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Hi(e) {
    if (e.blockedOn !== null) {
      return false;
    }
    for (var n = e.targetContainers; n.length > 0;) {
      var i = Cs(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var s = new i.constructor(i.type, i);
        ms = s;
        i.target.dispatchEvent(s);
        ms = null;
      } else {
        n = ei(i);
        if (n !== null) {
          Is(n);
        }
        e.blockedOn = i;
        return false;
      }
      n.shift();
    }
    return true;
  }
  function Xl(e, n, i) {
    if (Hi(e)) {
      i.delete(n);
    }
  }
  function Cm() {
    Ns = false;
    if (tn !== null && Hi(tn)) {
      tn = null;
    }
    if (nn !== null && Hi(nn)) {
      nn = null;
    }
    if (rn !== null && Hi(rn)) {
      rn = null;
    }
    Hr.forEach(Xl);
    Br.forEach(Xl);
  }
  function jr(e, n) {
    if (e.blockedOn === n) {
      e.blockedOn = null;
      if (!Ns) {
        Ns = true;
        r.unstable_scheduleCallback(r.unstable_NormalPriority, Cm);
      }
    }
  }
  function zr(e) {
    function n(l) {
      return jr(l, e);
    }
    if (Fi.length > 0) {
      jr(Fi[0], e);
      for (var i = 1; i < Fi.length; i++) {
        var s = Fi[i];
        if (s.blockedOn === e) {
          s.blockedOn = null;
        }
      }
    }
    if (tn !== null) {
      jr(tn, e);
    }
    if (nn !== null) {
      jr(nn, e);
    }
    if (rn !== null) {
      jr(rn, e);
    }
    Hr.forEach(n);
    Br.forEach(n);
    i = 0;
    for (; i < on.length; i++) {
      s = on[i];
      if (s.blockedOn === e) {
        s.blockedOn = null;
      }
    }
    while (on.length > 0 && (i = on[0], i.blockedOn === null)) {
      Wl(i);
      if (i.blockedOn === null) {
        on.shift();
      }
    }
  }
  var Zn = ie.ReactCurrentBatchConfig;
  var Bi = true;
  function Pm(e, n, i, s) {
    var l = pe;
    var f = Zn.transition;
    Zn.transition = null;
    try {
      pe = 1;
      ks(e, n, i, s);
    } finally {
      pe = l;
      Zn.transition = f;
    }
  }
  function Rm(e, n, i, s) {
    var l = pe;
    var f = Zn.transition;
    Zn.transition = null;
    try {
      pe = 4;
      ks(e, n, i, s);
    } finally {
      pe = l;
      Zn.transition = f;
    }
  }
  function ks(e, n, i, s) {
    if (Bi) {
      var l = Cs(e, n, i, s);
      if (l === null) {
        Vs(e, n, s, Ui, i);
        Vl(e, s);
      } else if (km(l, e, n, i, s)) {
        s.stopPropagation();
      } else {
        Vl(e, s);
        if (n & 4 && Nm.indexOf(e) > -1) {
          while (l !== null) {
            var f = ei(l);
            if (f !== null) {
              jl(f);
            }
            f = Cs(e, n, i, s);
            if (f === null) {
              Vs(e, n, s, Ui, i);
            }
            if (f === l) {
              break;
            }
            l = f;
          }
          if (l !== null) {
            s.stopPropagation();
          }
        } else {
          Vs(e, n, s, null, i);
        }
      }
    }
  }
  var Ui = null;
  function Cs(e, n, i, s) {
    Ui = null;
    e = gs(s);
    e = Cn(e);
    if (e !== null) {
      n = kn(e);
      if (n === null) {
        e = null;
      } else {
        i = n.tag;
        if (i === 13) {
          e = Ll(n);
          if (e !== null) {
            return e;
          }
          e = null;
        } else if (i === 3) {
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
    Ui = e;
    return null;
  }
  function Yl(e) {
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
        switch (ym()) {
          case Ss:
            return 1;
          case Fl:
            return 4;
          case Oi:
          case vm:
            return 16;
          case Hl:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var sn = null;
  var Ps = null;
  var ji = null;
  function Ql() {
    if (ji) {
      return ji;
    }
    var e;
    var n = Ps;
    var i = n.length;
    var s;
    var l = "value" in sn ? sn.value : sn.textContent;
    var f = l.length;
    for (e = 0; e < i && n[e] === l[e]; e++);
    var p = i - e;
    for (s = 1; s <= p && n[i - s] === l[f - s]; s++);
    return ji = l.slice(e, s > 1 ? 1 - s : undefined);
  }
  function zi(e) {
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
  function $i() {
    return true;
  }
  function Kl() {
    return false;
  }
  function it(e) {
    function n(i, s, l, f, p) {
      this._reactName = i;
      this._targetInst = l;
      this.type = s;
      this.nativeEvent = f;
      this.target = p;
      this.currentTarget = null;
      for (var y in e) {
        if (e.hasOwnProperty(y)) {
          i = e[y];
          this[y] = i ? i(f) : f[y];
        }
      }
      this.isDefaultPrevented = f.defaultPrevented ?? f.returnValue === false ? $i : Kl;
      this.isPropagationStopped = Kl;
      return this;
    }
    U(n.prototype, {
      preventDefault: function () {
        this.defaultPrevented = true;
        var i = this.nativeEvent;
        if (i) {
          if (i.preventDefault) {
            i.preventDefault();
          } else if (typeof i.returnValue != "unknown") {
            i.returnValue = false;
          }
          this.isDefaultPrevented = $i;
        }
      },
      stopPropagation: function () {
        var i = this.nativeEvent;
        if (i) {
          if (i.stopPropagation) {
            i.stopPropagation();
          } else if (typeof i.cancelBubble != "unknown") {
            i.cancelBubble = true;
          }
          this.isPropagationStopped = $i;
        }
      },
      persist: function () {},
      isPersistent: $i
    });
    return n;
  }
  var Jn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  };
  var Rs = it(Jn);
  var $r = U({}, Jn, {
    view: 0,
    detail: 0
  });
  var Lm = it($r);
  var Ls;
  var Os;
  var Gr;
  var Gi = U({}, $r, {
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
    getModifierState: Ds,
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
        if (e !== Gr) {
          if (Gr && e.type === "mousemove") {
            Ls = e.screenX - Gr.screenX;
            Os = e.screenY - Gr.screenY;
          } else {
            Os = Ls = 0;
          }
          Gr = e;
        }
        return Ls;
      }
    },
    movementY: function (e) {
      if ("movementY" in e) {
        return e.movementY;
      } else {
        return Os;
      }
    }
  });
  var ql = it(Gi);
  var Om = U({}, Gi, {
    dataTransfer: 0
  });
  var Am = it(Om);
  var Dm = U({}, $r, {
    relatedTarget: 0
  });
  var As = it(Dm);
  var Mm = U({}, Jn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  });
  var bm = it(Mm);
  var Fm = U({}, Jn, {
    clipboardData: function (e) {
      if ("clipboardData" in e) {
        return e.clipboardData;
      } else {
        return window.clipboardData;
      }
    }
  });
  var Hm = it(Fm);
  var Bm = U({}, Jn, {
    data: 0
  });
  var Zl = it(Bm);
  var Um = {
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
  var jm = {
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
  var zm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function $m(e) {
    var n = this.nativeEvent;
    if (n.getModifierState) {
      return n.getModifierState(e);
    } else if (e = zm[e]) {
      return !!n[e];
    } else {
      return false;
    }
  }
  function Ds() {
    return $m;
  }
  var Gm = U({}, $r, {
    key: function (e) {
      if (e.key) {
        var n = Um[e.key] || e.key;
        if (n !== "Unidentified") {
          return n;
        }
      }
      if (e.type === "keypress") {
        e = zi(e);
        if (e === 13) {
          return "Enter";
        } else {
          return String.fromCharCode(e);
        }
      } else if (e.type === "keydown" || e.type === "keyup") {
        return jm[e.keyCode] || "Unidentified";
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
    getModifierState: Ds,
    charCode: function (e) {
      if (e.type === "keypress") {
        return zi(e);
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
        return zi(e);
      } else if (e.type === "keydown" || e.type === "keyup") {
        return e.keyCode;
      } else {
        return 0;
      }
    }
  });
  var Vm = it(Gm);
  var Wm = U({}, Gi, {
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
  var Jl = it(Wm);
  var Xm = U({}, $r, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ds
  });
  var Ym = it(Xm);
  var Qm = U({}, Jn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  });
  var Km = it(Qm);
  var qm = U({}, Gi, {
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
  var Zm = it(qm);
  var Jm = [9, 13, 27, 32];
  var Ms = h && "CompositionEvent" in window;
  var Vr = null;
  if (h && "documentMode" in document) {
    Vr = document.documentMode;
  }
  var eg = h && "TextEvent" in window && !Vr;
  var ec = h && (!Ms || Vr && Vr > 8 && Vr <= 11);
  var tc = " ";
  var nc = false;
  function rc(e, n) {
    switch (e) {
      case "keyup":
        return Jm.indexOf(n.keyCode) !== -1;
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
  function ic(e) {
    e = e.detail;
    if (typeof e == "object" && "data" in e) {
      return e.data;
    } else {
      return null;
    }
  }
  var er = false;
  function tg(e, n) {
    switch (e) {
      case "compositionend":
        return ic(n);
      case "keypress":
        if (n.which !== 32) {
          return null;
        } else {
          nc = true;
          return tc;
        }
      case "textInput":
        e = n.data;
        if (e === tc && nc) {
          return null;
        } else {
          return e;
        }
      default:
        return null;
    }
  }
  function ng(e, n) {
    if (er) {
      if (e === "compositionend" || !Ms && rc(e, n)) {
        e = Ql();
        ji = Ps = sn = null;
        er = false;
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
        if (ec && n.locale !== "ko") {
          return null;
        } else {
          return n.data;
        }
      default:
        return null;
    }
  }
  var rg = {
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
  function oc(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    if (n === "input") {
      return !!rg[e.type];
    } else {
      return n === "textarea";
    }
  }
  function sc(e, n, i, s) {
    Nl(s);
    n = Qi(n, "onChange");
    if (n.length > 0) {
      i = new Rs("onChange", "change", null, i, s);
      e.push({
        event: i,
        listeners: n
      });
    }
  }
  var Wr = null;
  var Xr = null;
  function ig(e) {
    xc(e, 0);
  }
  function Vi(e) {
    var n = or(e);
    if (hl(n)) {
      return e;
    }
  }
  function og(e, n) {
    if (e === "change") {
      return n;
    }
  }
  var ac = false;
  if (h) {
    var bs;
    if (h) {
      var Fs = "oninput" in document;
      if (!Fs) {
        var uc = document.createElement("div");
        uc.setAttribute("oninput", "return;");
        Fs = typeof uc.oninput == "function";
      }
      bs = Fs;
    } else {
      bs = false;
    }
    ac = bs && (!document.documentMode || document.documentMode > 9);
  }
  function lc() {
    if (Wr) {
      Wr.detachEvent("onpropertychange", cc);
      Xr = Wr = null;
    }
  }
  function cc(e) {
    if (e.propertyName === "value" && Vi(Xr)) {
      var n = [];
      sc(n, Xr, e, gs(e));
      Rl(ig, n);
    }
  }
  function sg(e, n, i) {
    if (e === "focusin") {
      lc();
      Wr = n;
      Xr = i;
      Wr.attachEvent("onpropertychange", cc);
    } else if (e === "focusout") {
      lc();
    }
  }
  function ag(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") {
      return Vi(Xr);
    }
  }
  function ug(e, n) {
    if (e === "click") {
      return Vi(n);
    }
  }
  function lg(e, n) {
    if (e === "input" || e === "change") {
      return Vi(n);
    }
  }
  function cg(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var Et = typeof Object.is == "function" ? Object.is : cg;
  function Yr(e, n) {
    if (Et(e, n)) {
      return true;
    }
    if (typeof e != "object" || e === null || typeof n != "object" || n === null) {
      return false;
    }
    var i = Object.keys(e);
    var s = Object.keys(n);
    if (i.length !== s.length) {
      return false;
    }
    for (s = 0; s < i.length; s++) {
      var l = i[s];
      if (!m.call(n, l) || !Et(e[l], n[l])) {
        return false;
      }
    }
    return true;
  }
  function fc(e) {
    while (e && e.firstChild) {
      e = e.firstChild;
    }
    return e;
  }
  function dc(e, n) {
    var i = fc(e);
    e = 0;
    var s;
    for (; i;) {
      if (i.nodeType === 3) {
        s = e + i.textContent.length;
        if (e <= n && s >= n) {
          return {
            node: i,
            offset: n - e
          };
        }
        e = s;
      }
      e: {
        while (i) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break e;
          }
          i = i.parentNode;
        }
        i = undefined;
      }
      i = fc(i);
    }
  }
  function pc(e, n) {
    if (e && n) {
      if (e === n) {
        return true;
      } else if (e && e.nodeType === 3) {
        return false;
      } else if (n && n.nodeType === 3) {
        return pc(e, n.parentNode);
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
  function hc() {
    for (var e = window, n = Ci(); n instanceof e.HTMLIFrameElement;) {
      try {
        var i = typeof n.contentWindow.location.href == "string";
      } catch {
        i = false;
      }
      if (i) {
        e = n.contentWindow;
      } else {
        break;
      }
      n = Ci(e.document);
    }
    return n;
  }
  function Hs(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  function fg(e) {
    var n = hc();
    var i = e.focusedElem;
    var s = e.selectionRange;
    if (n !== i && i && i.ownerDocument && pc(i.ownerDocument.documentElement, i)) {
      if (s !== null && Hs(i)) {
        n = s.start;
        e = s.end;
        if (e === undefined) {
          e = n;
        }
        if ("selectionStart" in i) {
          i.selectionStart = n;
          i.selectionEnd = Math.min(e, i.value.length);
        } else {
          e = (n = i.ownerDocument || document) && n.defaultView || window;
          if (e.getSelection) {
            e = e.getSelection();
            var l = i.textContent.length;
            var f = Math.min(s.start, l);
            s = s.end === undefined ? f : Math.min(s.end, l);
            if (!e.extend && f > s) {
              l = s;
              s = f;
              f = l;
            }
            l = dc(i, f);
            var p = dc(i, s);
            if (l && p && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== p.node || e.focusOffset !== p.offset)) {
              n = n.createRange();
              n.setStart(l.node, l.offset);
              e.removeAllRanges();
              if (f > s) {
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
      e = i;
      while (e = e.parentNode) {
        if (e.nodeType === 1) {
          n.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
          });
        }
      }
      if (typeof i.focus == "function") {
        i.focus();
      }
      i = 0;
      for (; i < n.length; i++) {
        e = n[i];
        e.element.scrollLeft = e.left;
        e.element.scrollTop = e.top;
      }
    }
  }
  var dg = h && "documentMode" in document && document.documentMode <= 11;
  var tr = null;
  var Bs = null;
  var Qr = null;
  var Us = false;
  function mc(e, n, i) {
    var s = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    if (!Us && tr != null && tr === Ci(s)) {
      s = tr;
      if ("selectionStart" in s && Hs(s)) {
        s = {
          start: s.selectionStart,
          end: s.selectionEnd
        };
      } else {
        s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection();
        s = {
          anchorNode: s.anchorNode,
          anchorOffset: s.anchorOffset,
          focusNode: s.focusNode,
          focusOffset: s.focusOffset
        };
      }
      if (!Qr || !Yr(Qr, s)) {
        Qr = s;
        s = Qi(Bs, "onSelect");
        if (s.length > 0) {
          n = new Rs("onSelect", "select", null, n, i);
          e.push({
            event: n,
            listeners: s
          });
          n.target = tr;
        }
      }
    }
  }
  function Wi(e, n) {
    var i = {};
    i[e.toLowerCase()] = n.toLowerCase();
    i["Webkit" + e] = "webkit" + n;
    i["Moz" + e] = "moz" + n;
    return i;
  }
  var nr = {
    animationend: Wi("Animation", "AnimationEnd"),
    animationiteration: Wi("Animation", "AnimationIteration"),
    animationstart: Wi("Animation", "AnimationStart"),
    transitionend: Wi("Transition", "TransitionEnd")
  };
  var js = {};
  var gc = {};
  if (h) {
    gc = document.createElement("div").style;
    if (!("AnimationEvent" in window)) {
      delete nr.animationend.animation;
      delete nr.animationiteration.animation;
      delete nr.animationstart.animation;
    }
    if (!("TransitionEvent" in window)) {
      delete nr.transitionend.transition;
    }
  }
  function Xi(e) {
    if (js[e]) {
      return js[e];
    }
    if (!nr[e]) {
      return e;
    }
    var n = nr[e];
    var i;
    for (i in n) {
      if (n.hasOwnProperty(i) && i in gc) {
        return js[e] = n[i];
      }
    }
    return e;
  }
  var yc = Xi("animationend");
  var vc = Xi("animationiteration");
  var _c = Xi("animationstart");
  var Ec = Xi("transitionend");
  var Sc = new Map();
  var wc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function an(e, n) {
    Sc.set(e, n);
    c(n, [e]);
  }
  for (var zs = 0; zs < wc.length; zs++) {
    var $s = wc[zs];
    var pg = $s.toLowerCase();
    var hg = $s[0].toUpperCase() + $s.slice(1);
    an(pg, "on" + hg);
  }
  an(yc, "onAnimationEnd");
  an(vc, "onAnimationIteration");
  an(_c, "onAnimationStart");
  an("dblclick", "onDoubleClick");
  an("focusin", "onFocus");
  an("focusout", "onBlur");
  an(Ec, "onTransitionEnd");
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
  var Kr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
  var mg = new Set("cancel close invalid load scroll toggle".split(" ").concat(Kr));
  function Tc(e, n, i) {
    var s = e.type || "unknown-event";
    e.currentTarget = i;
    pm(s, n, undefined, e);
    e.currentTarget = null;
  }
  function xc(e, n) {
    n = (n & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var s = e[i];
      var l = s.event;
      s = s.listeners;
      e: {
        var f = undefined;
        if (n) {
          for (var p = s.length - 1; p >= 0; p--) {
            var y = s[p];
            var _ = y.instance;
            var I = y.currentTarget;
            y = y.listener;
            if (_ !== f && l.isPropagationStopped()) {
              break e;
            }
            Tc(l, y, I);
            f = _;
          }
        } else {
          for (p = 0; p < s.length; p++) {
            y = s[p];
            _ = y.instance;
            I = y.currentTarget;
            y = y.listener;
            if (_ !== f && l.isPropagationStopped()) {
              break e;
            }
            Tc(l, y, I);
            f = _;
          }
        }
      }
    }
    if (Li) {
      e = Es;
      Li = false;
      Es = null;
      throw e;
    }
  }
  function ye(e, n) {
    var i = n[qs];
    if (i === undefined) {
      i = n[qs] = new Set();
    }
    var s = e + "__bubble";
    if (!i.has(s)) {
      Ic(n, e, 2, false);
      i.add(s);
    }
  }
  function Gs(e, n, i) {
    var s = 0;
    if (n) {
      s |= 4;
    }
    Ic(i, e, s, n);
  }
  var Yi = "_reactListening" + Math.random().toString(36).slice(2);
  function qr(e) {
    if (!e[Yi]) {
      e[Yi] = true;
      a.forEach(function (i) {
        if (i !== "selectionchange") {
          if (!mg.has(i)) {
            Gs(i, false, e);
          }
          Gs(i, true, e);
        }
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      if (n !== null && !n[Yi]) {
        n[Yi] = true;
        Gs("selectionchange", false, n);
      }
    }
  }
  function Ic(e, n, i, s) {
    switch (Yl(n)) {
      case 1:
        var l = Pm;
        break;
      case 4:
        l = Rm;
        break;
      default:
        l = ks;
    }
    i = l.bind(null, n, i, e);
    l = undefined;
    if (!!_s && (n === "touchstart" || n === "touchmove" || n === "wheel")) {
      l = true;
    }
    if (s) {
      if (l !== undefined) {
        e.addEventListener(n, i, {
          capture: true,
          passive: l
        });
      } else {
        e.addEventListener(n, i, true);
      }
    } else if (l !== undefined) {
      e.addEventListener(n, i, {
        passive: l
      });
    } else {
      e.addEventListener(n, i, false);
    }
  }
  function Vs(e, n, i, s, l) {
    var f = s;
    if ((n & 1) === 0 && (n & 2) === 0 && s !== null) {
      e: while (true) {
        if (s === null) {
          return;
        }
        var p = s.tag;
        if (p === 3 || p === 4) {
          var y = s.stateNode.containerInfo;
          if (y === l || y.nodeType === 8 && y.parentNode === l) {
            break;
          }
          if (p === 4) {
            for (p = s.return; p !== null;) {
              var _ = p.tag;
              if ((_ === 3 || _ === 4) && (_ = p.stateNode.containerInfo, _ === l || _.nodeType === 8 && _.parentNode === l)) {
                return;
              }
              p = p.return;
            }
          }
          while (y !== null) {
            p = Cn(y);
            if (p === null) {
              return;
            }
            _ = p.tag;
            if (_ === 5 || _ === 6) {
              s = f = p;
              continue e;
            }
            y = y.parentNode;
          }
        }
        s = s.return;
      }
    }
    Rl(function () {
      var I = f;
      var R = gs(i);
      var L = [];
      e: {
        var C = Sc.get(e);
        if (C !== undefined) {
          var F = Rs;
          var j = e;
          switch (e) {
            case "keypress":
              if (zi(i) === 0) {
                break e;
              }
            case "keydown":
            case "keyup":
              F = Vm;
              break;
            case "focusin":
              j = "focus";
              F = As;
              break;
            case "focusout":
              j = "blur";
              F = As;
              break;
            case "beforeblur":
            case "afterblur":
              F = As;
              break;
            case "click":
              if (i.button === 2) {
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
              F = ql;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              F = Am;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              F = Ym;
              break;
            case yc:
            case vc:
            case _c:
              F = bm;
              break;
            case Ec:
              F = Km;
              break;
            case "scroll":
              F = Lm;
              break;
            case "wheel":
              F = Zm;
              break;
            case "copy":
            case "cut":
            case "paste":
              F = Hm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              F = Jl;
          }
          var z = (n & 4) !== 0;
          var ke = !z && e === "scroll";
          var T = z ? C !== null ? C + "Capture" : null : C;
          z = [];
          for (var E = I, x; E !== null;) {
            x = E;
            var O = x.stateNode;
            if (x.tag === 5 && O !== null) {
              x = O;
              if (T !== null) {
                O = Ar(E, T);
                if (O != null) {
                  z.push(Zr(E, O, x));
                }
              }
            }
            if (ke) {
              break;
            }
            E = E.return;
          }
          if (z.length > 0) {
            C = new F(C, j, null, i, R);
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
          if (C && i !== ms && (j = i.relatedTarget || i.fromElement) && (Cn(j) || j[zt])) {
            break e;
          }
          if ((F || C) && (C = R.window === R ? R : (C = R.ownerDocument) ? C.defaultView || C.parentWindow : window, F ? (j = i.relatedTarget || i.toElement, F = I, j = j ? Cn(j) : null, j !== null && (ke = kn(j), j !== ke || j.tag !== 5 && j.tag !== 6) && (j = null)) : (F = null, j = I), F !== j)) {
            z = ql;
            O = "onMouseLeave";
            T = "onMouseEnter";
            E = "mouse";
            if (e === "pointerout" || e === "pointerover") {
              z = Jl;
              O = "onPointerLeave";
              T = "onPointerEnter";
              E = "pointer";
            }
            ke = F == null ? C : or(F);
            x = j == null ? C : or(j);
            C = new z(O, E + "leave", F, i, R);
            C.target = ke;
            C.relatedTarget = x;
            O = null;
            if (Cn(R) === I) {
              z = new z(T, E + "enter", j, i, R);
              z.target = x;
              z.relatedTarget = ke;
              O = z;
            }
            ke = O;
            if (F && j) {
              t: {
                z = F;
                T = j;
                E = 0;
                x = z;
                for (; x; x = rr(x)) {
                  E++;
                }
                x = 0;
                O = T;
                for (; O; O = rr(O)) {
                  x++;
                }
                while (E - x > 0) {
                  z = rr(z);
                  E--;
                }
                while (x - E > 0) {
                  T = rr(T);
                  x--;
                }
                while (E--) {
                  if (z === T || T !== null && z === T.alternate) {
                    break t;
                  }
                  z = rr(z);
                  T = rr(T);
                }
                z = null;
              }
            } else {
              z = null;
            }
            if (F !== null) {
              Nc(L, C, F, z, false);
            }
            if (j !== null && ke !== null) {
              Nc(L, ke, j, z, true);
            }
          }
        }
        e: {
          C = I ? or(I) : window;
          F = C.nodeName && C.nodeName.toLowerCase();
          if (F === "select" || F === "input" && C.type === "file") {
            var G = og;
          } else if (oc(C)) {
            if (ac) {
              G = lg;
            } else {
              G = ag;
              var V = sg;
            }
          } else if ((F = C.nodeName) && F.toLowerCase() === "input" && (C.type === "checkbox" || C.type === "radio")) {
            G = ug;
          }
          if (G &&= G(e, I)) {
            sc(L, G, i, R);
            break e;
          }
          if (V) {
            V(e, C, I);
          }
          if (e === "focusout" && (V = C._wrapperState) && V.controlled && C.type === "number") {
            cs(C, "number", C.value);
          }
        }
        V = I ? or(I) : window;
        switch (e) {
          case "focusin":
            if (oc(V) || V.contentEditable === "true") {
              tr = V;
              Bs = I;
              Qr = null;
            }
            break;
          case "focusout":
            Qr = Bs = tr = null;
            break;
          case "mousedown":
            Us = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Us = false;
            mc(L, i, R);
            break;
          case "selectionchange":
            if (dg) {
              break;
            }
          case "keydown":
          case "keyup":
            mc(L, i, R);
        }
        var W;
        if (Ms) {
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
        } else if (er) {
          if (rc(e, i)) {
            K = "onCompositionEnd";
          }
        } else if (e === "keydown" && i.keyCode === 229) {
          K = "onCompositionStart";
        }
        if (K) {
          if (ec && i.locale !== "ko") {
            if (er || K !== "onCompositionStart") {
              if (K === "onCompositionEnd" && er) {
                W = Ql();
              }
            } else {
              sn = R;
              Ps = "value" in sn ? sn.value : sn.textContent;
              er = true;
            }
          }
          V = Qi(I, K);
          if (V.length > 0) {
            K = new Zl(K, e, null, i, R);
            L.push({
              event: K,
              listeners: V
            });
            if (W) {
              K.data = W;
            } else {
              W = ic(i);
              if (W !== null) {
                K.data = W;
              }
            }
          }
        }
        if (W = eg ? tg(e, i) : ng(e, i)) {
          I = Qi(I, "onBeforeInput");
          if (I.length > 0) {
            R = new Zl("onBeforeInput", "beforeinput", null, i, R);
            L.push({
              event: R,
              listeners: I
            });
            R.data = W;
          }
        }
      }
      xc(L, n);
    });
  }
  function Zr(e, n, i) {
    return {
      instance: e,
      listener: n,
      currentTarget: i
    };
  }
  function Qi(e, n) {
    var i = n + "Capture";
    var s = [];
    for (; e !== null;) {
      var l = e;
      var f = l.stateNode;
      if (l.tag === 5 && f !== null) {
        l = f;
        f = Ar(e, i);
        if (f != null) {
          s.unshift(Zr(e, f, l));
        }
        f = Ar(e, n);
        if (f != null) {
          s.push(Zr(e, f, l));
        }
      }
      e = e.return;
    }
    return s;
  }
  function rr(e) {
    if (e === null) {
      return null;
    }
    do {
      e = e.return;
    } while (e && e.tag !== 5);
    return e || null;
  }
  function Nc(e, n, i, s, l) {
    var f = n._reactName;
    var p = [];
    for (; i !== null && i !== s;) {
      var y = i;
      var _ = y.alternate;
      var I = y.stateNode;
      if (_ !== null && _ === s) {
        break;
      }
      if (y.tag === 5 && I !== null) {
        y = I;
        if (l) {
          _ = Ar(i, f);
          if (_ != null) {
            p.unshift(Zr(i, _, y));
          }
        } else if (!l) {
          _ = Ar(i, f);
          if (_ != null) {
            p.push(Zr(i, _, y));
          }
        }
      }
      i = i.return;
    }
    if (p.length !== 0) {
      e.push({
        event: n,
        listeners: p
      });
    }
  }
  var gg = /\r\n?/g;
  var yg = /\u0000|\uFFFD/g;
  function kc(e) {
    return (typeof e == "string" ? e : "" + e).replace(gg, `
`).replace(yg, "");
  }
  function Ki(e, n, i) {
    n = kc(n);
    if (kc(e) !== n && i) {
      throw Error(o(425));
    }
  }
  function qi() {}
  var Ws = null;
  var Xs = null;
  function Ys(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Qs = typeof setTimeout == "function" ? setTimeout : undefined;
  var vg = typeof clearTimeout == "function" ? clearTimeout : undefined;
  var Cc = typeof Promise == "function" ? Promise : undefined;
  var _g = typeof queueMicrotask == "function" ? queueMicrotask : typeof Cc !== "undefined" ? function (e) {
    return Cc.resolve(null).then(e).catch(Eg);
  } : Qs;
  function Eg(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Ks(e, n) {
    var i = n;
    var s = 0;
    do {
      var l = i.nextSibling;
      e.removeChild(i);
      if (l && l.nodeType === 8) {
        i = l.data;
        if (i === "/$") {
          if (s === 0) {
            e.removeChild(l);
            zr(n);
            return;
          }
          s--;
        } else if (i === "$" || i === "$?" || i === "$!") {
          s++;
        }
      }
      i = l;
    } while (i);
    zr(n);
  }
  function un(e) {
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
  function Pc(e) {
    e = e.previousSibling;
    var n = 0;
    for (; e;) {
      if (e.nodeType === 8) {
        var i = e.data;
        if (i === "$" || i === "$!" || i === "$?") {
          if (n === 0) {
            return e;
          }
          n--;
        } else if (i === "/$") {
          n++;
        }
      }
      e = e.previousSibling;
    }
    return null;
  }
  var ir = Math.random().toString(36).slice(2);
  var Rt = "__reactFiber$" + ir;
  var Jr = "__reactProps$" + ir;
  var zt = "__reactContainer$" + ir;
  var qs = "__reactEvents$" + ir;
  var Sg = "__reactListeners$" + ir;
  var wg = "__reactHandles$" + ir;
  function Cn(e) {
    var n = e[Rt];
    if (n) {
      return n;
    }
    for (var i = e.parentNode; i;) {
      if (n = i[zt] || i[Rt]) {
        i = n.alternate;
        if (n.child !== null || i !== null && i.child !== null) {
          for (e = Pc(e); e !== null;) {
            if (i = e[Rt]) {
              return i;
            }
            e = Pc(e);
          }
        }
        return n;
      }
      e = i;
      i = e.parentNode;
    }
    return null;
  }
  function ei(e) {
    e = e[Rt] || e[zt];
    if (!e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) {
      return null;
    } else {
      return e;
    }
  }
  function or(e) {
    if (e.tag === 5 || e.tag === 6) {
      return e.stateNode;
    }
    throw Error(o(33));
  }
  function Zi(e) {
    return e[Jr] || null;
  }
  var Zs = [];
  var sr = -1;
  function ln(e) {
    return {
      current: e
    };
  }
  function ve(e) {
    if (!(sr < 0)) {
      e.current = Zs[sr];
      Zs[sr] = null;
      sr--;
    }
  }
  function ge(e, n) {
    sr++;
    Zs[sr] = e.current;
    e.current = n;
  }
  var cn = {};
  var He = ln(cn);
  var Qe = ln(false);
  var Pn = cn;
  function ar(e, n) {
    var i = e.type.contextTypes;
    if (!i) {
      return cn;
    }
    var s = e.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === n) {
      return s.__reactInternalMemoizedMaskedChildContext;
    }
    var l = {};
    var f;
    for (f in i) {
      l[f] = n[f];
    }
    if (s) {
      e = e.stateNode;
      e.__reactInternalMemoizedUnmaskedChildContext = n;
      e.__reactInternalMemoizedMaskedChildContext = l;
    }
    return l;
  }
  function Ke(e) {
    e = e.childContextTypes;
    return e != null;
  }
  function Ji() {
    ve(Qe);
    ve(He);
  }
  function Rc(e, n, i) {
    if (He.current !== cn) {
      throw Error(o(168));
    }
    ge(He, n);
    ge(Qe, i);
  }
  function Lc(e, n, i) {
    var s = e.stateNode;
    n = n.childContextTypes;
    if (typeof s.getChildContext != "function") {
      return i;
    }
    s = s.getChildContext();
    for (var l in s) {
      if (!(l in n)) {
        throw Error(o(108, me(e) || "Unknown", l));
      }
    }
    return U({}, i, s);
  }
  function eo(e) {
    e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || cn;
    Pn = He.current;
    ge(He, e);
    ge(Qe, Qe.current);
    return true;
  }
  function Oc(e, n, i) {
    var s = e.stateNode;
    if (!s) {
      throw Error(o(169));
    }
    if (i) {
      e = Lc(e, n, Pn);
      s.__reactInternalMemoizedMergedChildContext = e;
      ve(Qe);
      ve(He);
      ge(He, e);
    } else {
      ve(Qe);
    }
    ge(Qe, i);
  }
  var $t = null;
  var to = false;
  var Js = false;
  function Ac(e) {
    if ($t === null) {
      $t = [e];
    } else {
      $t.push(e);
    }
  }
  function Tg(e) {
    to = true;
    Ac(e);
  }
  function fn() {
    if (!Js && $t !== null) {
      Js = true;
      var e = 0;
      var n = pe;
      try {
        var i = $t;
        for (pe = 1; e < i.length; e++) {
          var s = i[e];
          do {
            s = s(true);
          } while (s !== null);
        }
        $t = null;
        to = false;
      } catch (l) {
        if ($t !== null) {
          $t = $t.slice(e + 1);
        }
        Ml(Ss, fn);
        throw l;
      } finally {
        pe = n;
        Js = false;
      }
    }
    return null;
  }
  var ur = [];
  var lr = 0;
  var no = null;
  var ro = 0;
  var ct = [];
  var ft = 0;
  var Rn = null;
  var Gt = 1;
  var Vt = "";
  function Ln(e, n) {
    ur[lr++] = ro;
    ur[lr++] = no;
    no = e;
    ro = n;
  }
  function Dc(e, n, i) {
    ct[ft++] = Gt;
    ct[ft++] = Vt;
    ct[ft++] = Rn;
    Rn = e;
    var s = Gt;
    e = Vt;
    var l = 32 - _t(s) - 1;
    s &= ~(1 << l);
    i += 1;
    var f = 32 - _t(n) + l;
    if (f > 30) {
      var p = l - l % 5;
      f = (s & (1 << p) - 1).toString(32);
      s >>= p;
      l -= p;
      Gt = 1 << 32 - _t(n) + l | i << l | s;
      Vt = f + e;
    } else {
      Gt = 1 << f | i << l | s;
      Vt = e;
    }
  }
  function ea(e) {
    if (e.return !== null) {
      Ln(e, 1);
      Dc(e, 1, 0);
    }
  }
  function ta(e) {
    while (e === no) {
      no = ur[--lr];
      ur[lr] = null;
      ro = ur[--lr];
      ur[lr] = null;
    }
    while (e === Rn) {
      Rn = ct[--ft];
      ct[ft] = null;
      Vt = ct[--ft];
      ct[ft] = null;
      Gt = ct[--ft];
      ct[ft] = null;
    }
  }
  var ot = null;
  var st = null;
  var Se = false;
  var St = null;
  function Mc(e, n) {
    var i = mt(5, null, null, 0);
    i.elementType = "DELETED";
    i.stateNode = n;
    i.return = e;
    n = e.deletions;
    if (n === null) {
      e.deletions = [i];
      e.flags |= 16;
    } else {
      n.push(i);
    }
  }
  function bc(e, n) {
    switch (e.tag) {
      case 5:
        var i = e.type;
        n = n.nodeType !== 1 || i.toLowerCase() !== n.nodeName.toLowerCase() ? null : n;
        if (n !== null) {
          e.stateNode = n;
          ot = e;
          st = un(n.firstChild);
          return true;
        } else {
          return false;
        }
      case 6:
        n = e.pendingProps === "" || n.nodeType !== 3 ? null : n;
        if (n !== null) {
          e.stateNode = n;
          ot = e;
          st = null;
          return true;
        } else {
          return false;
        }
      case 13:
        n = n.nodeType !== 8 ? null : n;
        if (n !== null) {
          i = Rn !== null ? {
            id: Gt,
            overflow: Vt
          } : null;
          e.memoizedState = {
            dehydrated: n,
            treeContext: i,
            retryLane: 1073741824
          };
          i = mt(18, null, null, 0);
          i.stateNode = n;
          i.return = e;
          e.child = i;
          ot = e;
          st = null;
          return true;
        } else {
          return false;
        }
      default:
        return false;
    }
  }
  function na(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function ra(e) {
    if (Se) {
      var n = st;
      if (n) {
        var i = n;
        if (!bc(e, n)) {
          if (na(e)) {
            throw Error(o(418));
          }
          n = un(i.nextSibling);
          var s = ot;
          if (n && bc(e, n)) {
            Mc(s, i);
          } else {
            e.flags = e.flags & -4097 | 2;
            Se = false;
            ot = e;
          }
        }
      } else {
        if (na(e)) {
          throw Error(o(418));
        }
        e.flags = e.flags & -4097 | 2;
        Se = false;
        ot = e;
      }
    }
  }
  function Fc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) {
      e = e.return;
    }
    ot = e;
  }
  function io(e) {
    if (e !== ot) {
      return false;
    }
    if (!Se) {
      Fc(e);
      Se = true;
      return false;
    }
    var n;
    if ((n = e.tag !== 3) && !(n = e.tag !== 5)) {
      n = e.type;
      n = n !== "head" && n !== "body" && !Ys(e.type, e.memoizedProps);
    }
    if (n &&= st) {
      if (na(e)) {
        Hc();
        throw Error(o(418));
      }
      while (n) {
        Mc(e, n);
        n = un(n.nextSibling);
      }
    }
    Fc(e);
    if (e.tag === 13) {
      e = e.memoizedState;
      e = e !== null ? e.dehydrated : null;
      if (!e) {
        throw Error(o(317));
      }
      e: {
        e = e.nextSibling;
        n = 0;
        while (e) {
          if (e.nodeType === 8) {
            var i = e.data;
            if (i === "/$") {
              if (n === 0) {
                st = un(e.nextSibling);
                break e;
              }
              n--;
            } else if (i === "$" || i === "$!" || i === "$?") {
              n++;
            }
          }
          e = e.nextSibling;
        }
        st = null;
      }
    } else {
      st = ot ? un(e.stateNode.nextSibling) : null;
    }
    return true;
  }
  function Hc() {
    for (var e = st; e;) {
      e = un(e.nextSibling);
    }
  }
  function cr() {
    st = ot = null;
    Se = false;
  }
  function ia(e) {
    if (St === null) {
      St = [e];
    } else {
      St.push(e);
    }
  }
  var xg = ie.ReactCurrentBatchConfig;
  function ti(e, n, i) {
    e = i.ref;
    if (e !== null && typeof e != "function" && typeof e != "object") {
      if (i._owner) {
        i = i._owner;
        if (i) {
          if (i.tag !== 1) {
            throw Error(o(309));
          }
          var s = i.stateNode;
        }
        if (!s) {
          throw Error(o(147, e));
        }
        var l = s;
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
        throw Error(o(284));
      }
      if (!i._owner) {
        throw Error(o(290, e));
      }
    }
    return e;
  }
  function oo(e, n) {
    e = Object.prototype.toString.call(n);
    throw Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
  }
  function Bc(e) {
    var n = e._init;
    return n(e._payload);
  }
  function Uc(e) {
    function n(T, E) {
      if (e) {
        var x = T.deletions;
        if (x === null) {
          T.deletions = [E];
          T.flags |= 16;
        } else {
          x.push(E);
        }
      }
    }
    function i(T, E) {
      if (!e) {
        return null;
      }
      while (E !== null) {
        n(T, E);
        E = E.sibling;
      }
      return null;
    }
    function s(T, E) {
      for (T = new Map(); E !== null;) {
        if (E.key !== null) {
          T.set(E.key, E);
        } else {
          T.set(E.index, E);
        }
        E = E.sibling;
      }
      return T;
    }
    function l(T, E) {
      T = _n(T, E);
      T.index = 0;
      T.sibling = null;
      return T;
    }
    function f(T, E, x) {
      T.index = x;
      if (e) {
        x = T.alternate;
        if (x !== null) {
          x = x.index;
          if (x < E) {
            T.flags |= 2;
            return E;
          } else {
            return x;
          }
        } else {
          T.flags |= 2;
          return E;
        }
      } else {
        T.flags |= 1048576;
        return E;
      }
    }
    function p(T) {
      if (e && T.alternate === null) {
        T.flags |= 2;
      }
      return T;
    }
    function y(T, E, x, O) {
      if (E === null || E.tag !== 6) {
        E = Qa(x, T.mode, O);
        E.return = T;
        return E;
      } else {
        E = l(E, x);
        E.return = T;
        return E;
      }
    }
    function _(T, E, x, O) {
      var G = x.type;
      if (G === Re) {
        return R(T, E, x.props.children, O, x.key);
      } else if (E !== null && (E.elementType === G || typeof G == "object" && G !== null && G.$$typeof === Ye && Bc(G) === E.type)) {
        O = l(E, x.props);
        O.ref = ti(T, E, x);
        O.return = T;
        return O;
      } else {
        O = Ro(x.type, x.key, x.props, null, T.mode, O);
        O.ref = ti(T, E, x);
        O.return = T;
        return O;
      }
    }
    function I(T, E, x, O) {
      if (E === null || E.tag !== 4 || E.stateNode.containerInfo !== x.containerInfo || E.stateNode.implementation !== x.implementation) {
        E = Ka(x, T.mode, O);
        E.return = T;
        return E;
      } else {
        E = l(E, x.children || []);
        E.return = T;
        return E;
      }
    }
    function R(T, E, x, O, G) {
      if (E === null || E.tag !== 7) {
        E = Bn(x, T.mode, O, G);
        E.return = T;
        return E;
      } else {
        E = l(E, x);
        E.return = T;
        return E;
      }
    }
    function L(T, E, x) {
      if (typeof E == "string" && E !== "" || typeof E == "number") {
        E = Qa("" + E, T.mode, x);
        E.return = T;
        return E;
      }
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case D:
            x = Ro(E.type, E.key, E.props, null, T.mode, x);
            x.ref = ti(T, null, E);
            x.return = T;
            return x;
          case ce:
            E = Ka(E, T.mode, x);
            E.return = T;
            return E;
          case Ye:
            var O = E._init;
            return L(T, O(E._payload), x);
        }
        if (Rr(E) || X(E)) {
          E = Bn(E, T.mode, x, null);
          E.return = T;
          return E;
        }
        oo(T, E);
      }
      return null;
    }
    function C(T, E, x, O) {
      var G = E !== null ? E.key : null;
      if (typeof x == "string" && x !== "" || typeof x == "number") {
        if (G !== null) {
          return null;
        } else {
          return y(T, E, "" + x, O);
        }
      }
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case D:
            if (x.key === G) {
              return _(T, E, x, O);
            } else {
              return null;
            }
          case ce:
            if (x.key === G) {
              return I(T, E, x, O);
            } else {
              return null;
            }
          case Ye:
            G = x._init;
            return C(T, E, G(x._payload), O);
        }
        if (Rr(x) || X(x)) {
          if (G !== null) {
            return null;
          } else {
            return R(T, E, x, O, null);
          }
        }
        oo(T, x);
      }
      return null;
    }
    function F(T, E, x, O, G) {
      if (typeof O == "string" && O !== "" || typeof O == "number") {
        T = T.get(x) || null;
        return y(E, T, "" + O, G);
      }
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case D:
            T = T.get(O.key === null ? x : O.key) || null;
            return _(E, T, O, G);
          case ce:
            T = T.get(O.key === null ? x : O.key) || null;
            return I(E, T, O, G);
          case Ye:
            var V = O._init;
            return F(T, E, x, V(O._payload), G);
        }
        if (Rr(O) || X(O)) {
          T = T.get(x) || null;
          return R(E, T, O, G, null);
        }
        oo(E, O);
      }
      return null;
    }
    function j(T, E, x, O) {
      var G = null;
      var V = null;
      for (var W = E, K = E = 0, Me = null; W !== null && K < x.length; K++) {
        if (W.index > K) {
          Me = W;
          W = null;
        } else {
          Me = W.sibling;
        }
        var le = C(T, W, x[K], O);
        if (le === null) {
          if (W === null) {
            W = Me;
          }
          break;
        }
        if (e && W && le.alternate === null) {
          n(T, W);
        }
        E = f(le, E, K);
        if (V === null) {
          G = le;
        } else {
          V.sibling = le;
        }
        V = le;
        W = Me;
      }
      if (K === x.length) {
        i(T, W);
        if (Se) {
          Ln(T, K);
        }
        return G;
      }
      if (W === null) {
        for (; K < x.length; K++) {
          W = L(T, x[K], O);
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
          Ln(T, K);
        }
        return G;
      }
      for (W = s(T, W); K < x.length; K++) {
        Me = F(W, T, K, x[K], O);
        if (Me !== null) {
          if (e && Me.alternate !== null) {
            W.delete(Me.key === null ? K : Me.key);
          }
          E = f(Me, E, K);
          if (V === null) {
            G = Me;
          } else {
            V.sibling = Me;
          }
          V = Me;
        }
      }
      if (e) {
        W.forEach(function (En) {
          return n(T, En);
        });
      }
      if (Se) {
        Ln(T, K);
      }
      return G;
    }
    function z(T, E, x, O) {
      var G = X(x);
      if (typeof G != "function") {
        throw Error(o(150));
      }
      x = G.call(x);
      if (x == null) {
        throw Error(o(151));
      }
      var V = G = null;
      for (var W = E, K = E = 0, Me = null, le = x.next(); W !== null && !le.done; K++, le = x.next()) {
        if (W.index > K) {
          Me = W;
          W = null;
        } else {
          Me = W.sibling;
        }
        var En = C(T, W, le.value, O);
        if (En === null) {
          if (W === null) {
            W = Me;
          }
          break;
        }
        if (e && W && En.alternate === null) {
          n(T, W);
        }
        E = f(En, E, K);
        if (V === null) {
          G = En;
        } else {
          V.sibling = En;
        }
        V = En;
        W = Me;
      }
      if (le.done) {
        i(T, W);
        if (Se) {
          Ln(T, K);
        }
        return G;
      }
      if (W === null) {
        for (; !le.done; K++, le = x.next()) {
          le = L(T, le.value, O);
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
          Ln(T, K);
        }
        return G;
      }
      for (W = s(T, W); !le.done; K++, le = x.next()) {
        le = F(W, T, K, le.value, O);
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
        W.forEach(function (ry) {
          return n(T, ry);
        });
      }
      if (Se) {
        Ln(T, K);
      }
      return G;
    }
    function ke(T, E, x, O) {
      if (typeof x == "object" && x !== null && x.type === Re && x.key === null) {
        x = x.props.children;
      }
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case D:
            e: {
              var G = x.key;
              for (var V = E; V !== null;) {
                if (V.key === G) {
                  G = x.type;
                  if (G === Re) {
                    if (V.tag === 7) {
                      i(T, V.sibling);
                      E = l(V, x.props.children);
                      E.return = T;
                      T = E;
                      break e;
                    }
                  } else if (V.elementType === G || typeof G == "object" && G !== null && G.$$typeof === Ye && Bc(G) === V.type) {
                    i(T, V.sibling);
                    E = l(V, x.props);
                    E.ref = ti(T, V, x);
                    E.return = T;
                    T = E;
                    break e;
                  }
                  i(T, V);
                  break;
                } else {
                  n(T, V);
                }
                V = V.sibling;
              }
              if (x.type === Re) {
                E = Bn(x.props.children, T.mode, O, x.key);
                E.return = T;
                T = E;
              } else {
                O = Ro(x.type, x.key, x.props, null, T.mode, O);
                O.ref = ti(T, E, x);
                O.return = T;
                T = O;
              }
            }
            return p(T);
          case ce:
            e: {
              for (V = x.key; E !== null;) {
                if (E.key === V) {
                  if (E.tag === 4 && E.stateNode.containerInfo === x.containerInfo && E.stateNode.implementation === x.implementation) {
                    i(T, E.sibling);
                    E = l(E, x.children || []);
                    E.return = T;
                    T = E;
                    break e;
                  } else {
                    i(T, E);
                    break;
                  }
                } else {
                  n(T, E);
                }
                E = E.sibling;
              }
              E = Ka(x, T.mode, O);
              E.return = T;
              T = E;
            }
            return p(T);
          case Ye:
            V = x._init;
            return ke(T, E, V(x._payload), O);
        }
        if (Rr(x)) {
          return j(T, E, x, O);
        }
        if (X(x)) {
          return z(T, E, x, O);
        }
        oo(T, x);
      }
      if (typeof x == "string" && x !== "" || typeof x == "number") {
        x = "" + x;
        if (E !== null && E.tag === 6) {
          i(T, E.sibling);
          E = l(E, x);
          E.return = T;
          T = E;
        } else {
          i(T, E);
          E = Qa(x, T.mode, O);
          E.return = T;
          T = E;
        }
        return p(T);
      } else {
        return i(T, E);
      }
    }
    return ke;
  }
  var fr = Uc(true);
  var jc = Uc(false);
  var so = ln(null);
  var ao = null;
  var dr = null;
  var oa = null;
  function sa() {
    oa = dr = ao = null;
  }
  function aa(e) {
    var n = so.current;
    ve(so);
    e._currentValue = n;
  }
  function ua(e, n, i) {
    while (e !== null) {
      var s = e.alternate;
      if ((e.childLanes & n) !== n) {
        e.childLanes |= n;
        if (s !== null) {
          s.childLanes |= n;
        }
      } else if (s !== null && (s.childLanes & n) !== n) {
        s.childLanes |= n;
      }
      if (e === i) {
        break;
      }
      e = e.return;
    }
  }
  function pr(e, n) {
    ao = e;
    oa = dr = null;
    e = e.dependencies;
    if (e !== null && e.firstContext !== null) {
      if ((e.lanes & n) !== 0) {
        qe = true;
      }
      e.firstContext = null;
    }
  }
  function dt(e) {
    var n = e._currentValue;
    if (oa !== e) {
      e = {
        context: e,
        memoizedValue: n,
        next: null
      };
      if (dr === null) {
        if (ao === null) {
          throw Error(o(308));
        }
        dr = e;
        ao.dependencies = {
          lanes: 0,
          firstContext: e
        };
      } else {
        dr = dr.next = e;
      }
    }
    return n;
  }
  var On = null;
  function la(e) {
    if (On === null) {
      On = [e];
    } else {
      On.push(e);
    }
  }
  function zc(e, n, i, s) {
    var l = n.interleaved;
    if (l === null) {
      i.next = i;
      la(n);
    } else {
      i.next = l.next;
      l.next = i;
    }
    n.interleaved = i;
    return Wt(e, s);
  }
  function Wt(e, n) {
    e.lanes |= n;
    var i = e.alternate;
    if (i !== null) {
      i.lanes |= n;
    }
    i = e;
    e = e.return;
    while (e !== null) {
      e.childLanes |= n;
      i = e.alternate;
      if (i !== null) {
        i.childLanes |= n;
      }
      i = e;
      e = e.return;
    }
    if (i.tag === 3) {
      return i.stateNode;
    } else {
      return null;
    }
  }
  var dn = false;
  function ca(e) {
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
  function $c(e, n) {
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
  function Xt(e, n) {
    return {
      eventTime: e,
      lane: n,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function pn(e, n, i) {
    var s = e.updateQueue;
    if (s === null) {
      return null;
    }
    s = s.shared;
    if ((se & 2) !== 0) {
      var l = s.pending;
      if (l === null) {
        n.next = n;
      } else {
        n.next = l.next;
        l.next = n;
      }
      s.pending = n;
      return Wt(e, i);
    }
    l = s.interleaved;
    if (l === null) {
      n.next = n;
      la(s);
    } else {
      n.next = l.next;
      l.next = n;
    }
    s.interleaved = n;
    return Wt(e, i);
  }
  function uo(e, n, i) {
    n = n.updateQueue;
    if (n !== null && (n = n.shared, (i & 4194240) !== 0)) {
      var s = n.lanes;
      s &= e.pendingLanes;
      i |= s;
      n.lanes = i;
      xs(e, i);
    }
  }
  function Gc(e, n) {
    var i = e.updateQueue;
    var s = e.alternate;
    if (s !== null && (s = s.updateQueue, i === s)) {
      var l = null;
      var f = null;
      i = i.firstBaseUpdate;
      if (i !== null) {
        do {
          var p = {
            eventTime: i.eventTime,
            lane: i.lane,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null
          };
          if (f === null) {
            l = f = p;
          } else {
            f = f.next = p;
          }
          i = i.next;
        } while (i !== null);
        if (f === null) {
          l = f = n;
        } else {
          f = f.next = n;
        }
      } else {
        l = f = n;
      }
      i = {
        baseState: s.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: f,
        shared: s.shared,
        effects: s.effects
      };
      e.updateQueue = i;
      return;
    }
    e = i.lastBaseUpdate;
    if (e === null) {
      i.firstBaseUpdate = n;
    } else {
      e.next = n;
    }
    i.lastBaseUpdate = n;
  }
  function lo(e, n, i, s) {
    var l = e.updateQueue;
    dn = false;
    var f = l.firstBaseUpdate;
    var p = l.lastBaseUpdate;
    var y = l.shared.pending;
    if (y !== null) {
      l.shared.pending = null;
      var _ = y;
      var I = _.next;
      _.next = null;
      if (p === null) {
        f = I;
      } else {
        p.next = I;
      }
      p = _;
      var R = e.alternate;
      if (R !== null) {
        R = R.updateQueue;
        y = R.lastBaseUpdate;
        if (y !== p) {
          if (y === null) {
            R.firstBaseUpdate = I;
          } else {
            y.next = I;
          }
          R.lastBaseUpdate = _;
        }
      }
    }
    if (f !== null) {
      var L = l.baseState;
      p = 0;
      R = I = _ = null;
      y = f;
      do {
        var C = y.lane;
        var F = y.eventTime;
        if ((s & C) === C) {
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
            F = i;
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
                dn = true;
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
            I = R = F;
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
      l.firstBaseUpdate = I;
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
      Mn |= p;
      e.lanes = p;
      e.memoizedState = L;
    }
  }
  function Vc(e, n, i) {
    e = n.effects;
    n.effects = null;
    if (e !== null) {
      for (n = 0; n < e.length; n++) {
        var s = e[n];
        var l = s.callback;
        if (l !== null) {
          s.callback = null;
          s = i;
          if (typeof l != "function") {
            throw Error(o(191, l));
          }
          l.call(s);
        }
      }
    }
  }
  var ni = {};
  var Lt = ln(ni);
  var ri = ln(ni);
  var ii = ln(ni);
  function An(e) {
    if (e === ni) {
      throw Error(o(174));
    }
    return e;
  }
  function fa(e, n) {
    ge(ii, n);
    ge(ri, e);
    ge(Lt, ni);
    e = n.nodeType;
    switch (e) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : ds(null, "");
        break;
      default:
        e = e === 8 ? n.parentNode : n;
        n = e.namespaceURI || null;
        e = e.tagName;
        n = ds(n, e);
    }
    ve(Lt);
    ge(Lt, n);
  }
  function hr() {
    ve(Lt);
    ve(ri);
    ve(ii);
  }
  function Wc(e) {
    An(ii.current);
    var n = An(Lt.current);
    var i = ds(n, e.type);
    if (n !== i) {
      ge(ri, e);
      ge(Lt, i);
    }
  }
  function da(e) {
    if (ri.current === e) {
      ve(Lt);
      ve(ri);
    }
  }
  var we = ln(0);
  function co(e) {
    for (var n = e; n !== null;) {
      if (n.tag === 13) {
        var i = n.memoizedState;
        if (i !== null && (i = i.dehydrated, i === null || i.data === "$?" || i.data === "$!")) {
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
  var pa = [];
  function ha() {
    for (var e = 0; e < pa.length; e++) {
      pa[e]._workInProgressVersionPrimary = null;
    }
    pa.length = 0;
  }
  var fo = ie.ReactCurrentDispatcher;
  var ma = ie.ReactCurrentBatchConfig;
  var Dn = 0;
  var Te = null;
  var Le = null;
  var Ae = null;
  var po = false;
  var oi = false;
  var si = 0;
  var Ig = 0;
  function Be() {
    throw Error(o(321));
  }
  function ga(e, n) {
    if (n === null) {
      return false;
    }
    for (var i = 0; i < n.length && i < e.length; i++) {
      if (!Et(e[i], n[i])) {
        return false;
      }
    }
    return true;
  }
  function ya(e, n, i, s, l, f) {
    Dn = f;
    Te = n;
    n.memoizedState = null;
    n.updateQueue = null;
    n.lanes = 0;
    fo.current = e === null || e.memoizedState === null ? Pg : Rg;
    e = i(s, l);
    if (oi) {
      f = 0;
      do {
        oi = false;
        si = 0;
        if (f >= 25) {
          throw Error(o(301));
        }
        f += 1;
        Ae = Le = null;
        n.updateQueue = null;
        fo.current = Lg;
        e = i(s, l);
      } while (oi);
    }
    fo.current = go;
    n = Le !== null && Le.next !== null;
    Dn = 0;
    Ae = Le = Te = null;
    po = false;
    if (n) {
      throw Error(o(300));
    }
    return e;
  }
  function va() {
    var e = si !== 0;
    si = 0;
    return e;
  }
  function Ot() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    if (Ae === null) {
      Te.memoizedState = Ae = e;
    } else {
      Ae = Ae.next = e;
    }
    return Ae;
  }
  function pt() {
    if (Le === null) {
      var e = Te.alternate;
      e = e !== null ? e.memoizedState : null;
    } else {
      e = Le.next;
    }
    var n = Ae === null ? Te.memoizedState : Ae.next;
    if (n !== null) {
      Ae = n;
      Le = e;
    } else {
      if (e === null) {
        throw Error(o(310));
      }
      Le = e;
      e = {
        memoizedState: Le.memoizedState,
        baseState: Le.baseState,
        baseQueue: Le.baseQueue,
        queue: Le.queue,
        next: null
      };
      if (Ae === null) {
        Te.memoizedState = Ae = e;
      } else {
        Ae = Ae.next = e;
      }
    }
    return Ae;
  }
  function ai(e, n) {
    if (typeof n == "function") {
      return n(e);
    } else {
      return n;
    }
  }
  function _a(e) {
    var n = pt();
    var i = n.queue;
    if (i === null) {
      throw Error(o(311));
    }
    i.lastRenderedReducer = e;
    var s = Le;
    var l = s.baseQueue;
    var f = i.pending;
    if (f !== null) {
      if (l !== null) {
        var p = l.next;
        l.next = f.next;
        f.next = p;
      }
      s.baseQueue = l = f;
      i.pending = null;
    }
    if (l !== null) {
      f = l.next;
      s = s.baseState;
      var y = p = null;
      var _ = null;
      var I = f;
      do {
        var R = I.lane;
        if ((Dn & R) === R) {
          if (_ !== null) {
            _ = _.next = {
              lane: 0,
              action: I.action,
              hasEagerState: I.hasEagerState,
              eagerState: I.eagerState,
              next: null
            };
          }
          s = I.hasEagerState ? I.eagerState : e(s, I.action);
        } else {
          var L = {
            lane: R,
            action: I.action,
            hasEagerState: I.hasEagerState,
            eagerState: I.eagerState,
            next: null
          };
          if (_ === null) {
            y = _ = L;
            p = s;
          } else {
            _ = _.next = L;
          }
          Te.lanes |= R;
          Mn |= R;
        }
        I = I.next;
      } while (I !== null && I !== f);
      if (_ === null) {
        p = s;
      } else {
        _.next = y;
      }
      if (!Et(s, n.memoizedState)) {
        qe = true;
      }
      n.memoizedState = s;
      n.baseState = p;
      n.baseQueue = _;
      i.lastRenderedState = s;
    }
    e = i.interleaved;
    if (e !== null) {
      l = e;
      do {
        f = l.lane;
        Te.lanes |= f;
        Mn |= f;
        l = l.next;
      } while (l !== e);
    } else if (l === null) {
      i.lanes = 0;
    }
    return [n.memoizedState, i.dispatch];
  }
  function Ea(e) {
    var n = pt();
    var i = n.queue;
    if (i === null) {
      throw Error(o(311));
    }
    i.lastRenderedReducer = e;
    var s = i.dispatch;
    var l = i.pending;
    var f = n.memoizedState;
    if (l !== null) {
      i.pending = null;
      var p = l = l.next;
      do {
        f = e(f, p.action);
        p = p.next;
      } while (p !== l);
      if (!Et(f, n.memoizedState)) {
        qe = true;
      }
      n.memoizedState = f;
      if (n.baseQueue === null) {
        n.baseState = f;
      }
      i.lastRenderedState = f;
    }
    return [f, s];
  }
  function Xc() {}
  function Yc(e, n) {
    var i = Te;
    var s = pt();
    var l = n();
    var f = !Et(s.memoizedState, l);
    if (f) {
      s.memoizedState = l;
      qe = true;
    }
    s = s.queue;
    Sa(qc.bind(null, i, s, e), [e]);
    if (s.getSnapshot !== n || f || Ae !== null && Ae.memoizedState.tag & 1) {
      i.flags |= 2048;
      ui(9, Kc.bind(null, i, s, l, n), undefined, null);
      if (De === null) {
        throw Error(o(349));
      }
      if ((Dn & 30) === 0) {
        Qc(i, n, l);
      }
    }
    return l;
  }
  function Qc(e, n, i) {
    e.flags |= 16384;
    e = {
      getSnapshot: n,
      value: i
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
      i = n.stores;
      if (i === null) {
        n.stores = [e];
      } else {
        i.push(e);
      }
    }
  }
  function Kc(e, n, i, s) {
    n.value = i;
    n.getSnapshot = s;
    if (Zc(n)) {
      Jc(e);
    }
  }
  function qc(e, n, i) {
    return i(function () {
      if (Zc(n)) {
        Jc(e);
      }
    });
  }
  function Zc(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var i = n();
      return !Et(e, i);
    } catch {
      return true;
    }
  }
  function Jc(e) {
    var n = Wt(e, 1);
    if (n !== null) {
      It(n, e, 1, -1);
    }
  }
  function ef(e) {
    var n = Ot();
    if (typeof e == "function") {
      e = e();
    }
    n.memoizedState = n.baseState = e;
    e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ai,
      lastRenderedState: e
    };
    n.queue = e;
    e = e.dispatch = Cg.bind(null, Te, e);
    return [n.memoizedState, e];
  }
  function ui(e, n, i, s) {
    e = {
      tag: e,
      create: n,
      destroy: i,
      deps: s,
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
      i = n.lastEffect;
      if (i === null) {
        n.lastEffect = e.next = e;
      } else {
        s = i.next;
        i.next = e;
        e.next = s;
        n.lastEffect = e;
      }
    }
    return e;
  }
  function tf() {
    return pt().memoizedState;
  }
  function ho(e, n, i, s) {
    var l = Ot();
    Te.flags |= e;
    l.memoizedState = ui(n | 1, i, undefined, s === undefined ? null : s);
  }
  function mo(e, n, i, s) {
    var l = pt();
    s = s === undefined ? null : s;
    var f = undefined;
    if (Le !== null) {
      var p = Le.memoizedState;
      f = p.destroy;
      if (s !== null && ga(s, p.deps)) {
        l.memoizedState = ui(n, i, f, s);
        return;
      }
    }
    Te.flags |= e;
    l.memoizedState = ui(n | 1, i, f, s);
  }
  function nf(e, n) {
    return ho(8390656, 8, e, n);
  }
  function Sa(e, n) {
    return mo(2048, 8, e, n);
  }
  function rf(e, n) {
    return mo(4, 2, e, n);
  }
  function of(e, n) {
    return mo(4, 4, e, n);
  }
  function sf(e, n) {
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
  function af(e, n, i) {
    i = i != null ? i.concat([e]) : null;
    return mo(4, 4, sf.bind(null, n, e), i);
  }
  function wa() {}
  function uf(e, n) {
    var i = pt();
    n = n === undefined ? null : n;
    var s = i.memoizedState;
    if (s !== null && n !== null && ga(n, s[1])) {
      return s[0];
    } else {
      i.memoizedState = [e, n];
      return e;
    }
  }
  function lf(e, n) {
    var i = pt();
    n = n === undefined ? null : n;
    var s = i.memoizedState;
    if (s !== null && n !== null && ga(n, s[1])) {
      return s[0];
    } else {
      e = e();
      i.memoizedState = [e, n];
      return e;
    }
  }
  function cf(e, n, i) {
    if ((Dn & 21) === 0) {
      if (e.baseState) {
        e.baseState = false;
        qe = true;
      }
      return e.memoizedState = i;
    } else {
      if (!Et(i, n)) {
        i = Bl();
        Te.lanes |= i;
        Mn |= i;
        e.baseState = true;
      }
      return n;
    }
  }
  function Ng(e, n) {
    var i = pe;
    pe = i !== 0 && i < 4 ? i : 4;
    e(true);
    var s = ma.transition;
    ma.transition = {};
    try {
      e(false);
      n();
    } finally {
      pe = i;
      ma.transition = s;
    }
  }
  function ff() {
    return pt().memoizedState;
  }
  function kg(e, n, i) {
    var s = yn(e);
    i = {
      lane: s,
      action: i,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (df(e)) {
      pf(n, i);
    } else {
      i = zc(e, n, i, s);
      if (i !== null) {
        var l = Ve();
        It(i, e, s, l);
        hf(i, n, s);
      }
    }
  }
  function Cg(e, n, i) {
    var s = yn(e);
    var l = {
      lane: s,
      action: i,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (df(e)) {
      pf(n, l);
    } else {
      var f = e.alternate;
      if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = n.lastRenderedReducer, f !== null)) {
        try {
          var p = n.lastRenderedState;
          var y = f(p, i);
          l.hasEagerState = true;
          l.eagerState = y;
          if (Et(y, p)) {
            var _ = n.interleaved;
            if (_ === null) {
              l.next = l;
              la(n);
            } else {
              l.next = _.next;
              _.next = l;
            }
            n.interleaved = l;
            return;
          }
        } catch {} finally {}
      }
      i = zc(e, n, l, s);
      if (i !== null) {
        l = Ve();
        It(i, e, s, l);
        hf(i, n, s);
      }
    }
  }
  function df(e) {
    var n = e.alternate;
    return e === Te || n !== null && n === Te;
  }
  function pf(e, n) {
    oi = po = true;
    var i = e.pending;
    if (i === null) {
      n.next = n;
    } else {
      n.next = i.next;
      i.next = n;
    }
    e.pending = n;
  }
  function hf(e, n, i) {
    if ((i & 4194240) !== 0) {
      var s = n.lanes;
      s &= e.pendingLanes;
      i |= s;
      n.lanes = i;
      xs(e, i);
    }
  }
  var go = {
    readContext: dt,
    useCallback: Be,
    useContext: Be,
    useEffect: Be,
    useImperativeHandle: Be,
    useInsertionEffect: Be,
    useLayoutEffect: Be,
    useMemo: Be,
    useReducer: Be,
    useRef: Be,
    useState: Be,
    useDebugValue: Be,
    useDeferredValue: Be,
    useTransition: Be,
    useMutableSource: Be,
    useSyncExternalStore: Be,
    useId: Be,
    unstable_isNewReconciler: false
  };
  var Pg = {
    readContext: dt,
    useCallback: function (e, n) {
      Ot().memoizedState = [e, n === undefined ? null : n];
      return e;
    },
    useContext: dt,
    useEffect: nf,
    useImperativeHandle: function (e, n, i) {
      i = i != null ? i.concat([e]) : null;
      return ho(4194308, 4, sf.bind(null, n, e), i);
    },
    useLayoutEffect: function (e, n) {
      return ho(4194308, 4, e, n);
    },
    useInsertionEffect: function (e, n) {
      return ho(4, 2, e, n);
    },
    useMemo: function (e, n) {
      var i = Ot();
      n = n === undefined ? null : n;
      e = e();
      i.memoizedState = [e, n];
      return e;
    },
    useReducer: function (e, n, i) {
      var s = Ot();
      n = i !== undefined ? i(n) : n;
      s.memoizedState = s.baseState = n;
      e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: n
      };
      s.queue = e;
      e = e.dispatch = kg.bind(null, Te, e);
      return [s.memoizedState, e];
    },
    useRef: function (e) {
      var n = Ot();
      e = {
        current: e
      };
      return n.memoizedState = e;
    },
    useState: ef,
    useDebugValue: wa,
    useDeferredValue: function (e) {
      return Ot().memoizedState = e;
    },
    useTransition: function () {
      var e = ef(false);
      var n = e[0];
      e = Ng.bind(null, e[1]);
      Ot().memoizedState = e;
      return [n, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, n, i) {
      var s = Te;
      var l = Ot();
      if (Se) {
        if (i === undefined) {
          throw Error(o(407));
        }
        i = i();
      } else {
        i = n();
        if (De === null) {
          throw Error(o(349));
        }
        if ((Dn & 30) === 0) {
          Qc(s, n, i);
        }
      }
      l.memoizedState = i;
      var f = {
        value: i,
        getSnapshot: n
      };
      l.queue = f;
      nf(qc.bind(null, s, f, e), [e]);
      s.flags |= 2048;
      ui(9, Kc.bind(null, s, f, i, n), undefined, null);
      return i;
    },
    useId: function () {
      var e = Ot();
      var n = De.identifierPrefix;
      if (Se) {
        var i = Vt;
        var s = Gt;
        i = (s & ~(1 << 32 - _t(s) - 1)).toString(32) + i;
        n = ":" + n + "R" + i;
        i = si++;
        if (i > 0) {
          n += "H" + i.toString(32);
        }
        n += ":";
      } else {
        i = Ig++;
        n = ":" + n + "r" + i.toString(32) + ":";
      }
      return e.memoizedState = n;
    },
    unstable_isNewReconciler: false
  };
  var Rg = {
    readContext: dt,
    useCallback: uf,
    useContext: dt,
    useEffect: Sa,
    useImperativeHandle: af,
    useInsertionEffect: rf,
    useLayoutEffect: of,
    useMemo: lf,
    useReducer: _a,
    useRef: tf,
    useState: function () {
      return _a(ai);
    },
    useDebugValue: wa,
    useDeferredValue: function (e) {
      var n = pt();
      return cf(n, Le.memoizedState, e);
    },
    useTransition: function () {
      var e = _a(ai)[0];
      var n = pt().memoizedState;
      return [e, n];
    },
    useMutableSource: Xc,
    useSyncExternalStore: Yc,
    useId: ff,
    unstable_isNewReconciler: false
  };
  var Lg = {
    readContext: dt,
    useCallback: uf,
    useContext: dt,
    useEffect: Sa,
    useImperativeHandle: af,
    useInsertionEffect: rf,
    useLayoutEffect: of,
    useMemo: lf,
    useReducer: Ea,
    useRef: tf,
    useState: function () {
      return Ea(ai);
    },
    useDebugValue: wa,
    useDeferredValue: function (e) {
      var n = pt();
      if (Le === null) {
        return n.memoizedState = e;
      } else {
        return cf(n, Le.memoizedState, e);
      }
    },
    useTransition: function () {
      var e = Ea(ai)[0];
      var n = pt().memoizedState;
      return [e, n];
    },
    useMutableSource: Xc,
    useSyncExternalStore: Yc,
    useId: ff,
    unstable_isNewReconciler: false
  };
  function wt(e, n) {
    if (e && e.defaultProps) {
      n = U({}, n);
      e = e.defaultProps;
      for (var i in e) {
        if (n[i] === undefined) {
          n[i] = e[i];
        }
      }
      return n;
    }
    return n;
  }
  function Ta(e, n, i, s) {
    n = e.memoizedState;
    i = i(s, n);
    i = i == null ? n : U({}, n, i);
    e.memoizedState = i;
    if (e.lanes === 0) {
      e.updateQueue.baseState = i;
    }
  }
  var yo = {
    isMounted: function (e) {
      if (e = e._reactInternals) {
        return kn(e) === e;
      } else {
        return false;
      }
    },
    enqueueSetState: function (e, n, i) {
      e = e._reactInternals;
      var s = Ve();
      var l = yn(e);
      var f = Xt(s, l);
      f.payload = n;
      if (i != null) {
        f.callback = i;
      }
      n = pn(e, f, l);
      if (n !== null) {
        It(n, e, l, s);
        uo(n, e, l);
      }
    },
    enqueueReplaceState: function (e, n, i) {
      e = e._reactInternals;
      var s = Ve();
      var l = yn(e);
      var f = Xt(s, l);
      f.tag = 1;
      f.payload = n;
      if (i != null) {
        f.callback = i;
      }
      n = pn(e, f, l);
      if (n !== null) {
        It(n, e, l, s);
        uo(n, e, l);
      }
    },
    enqueueForceUpdate: function (e, n) {
      e = e._reactInternals;
      var i = Ve();
      var s = yn(e);
      var l = Xt(i, s);
      l.tag = 2;
      if (n != null) {
        l.callback = n;
      }
      n = pn(e, l, s);
      if (n !== null) {
        It(n, e, s, i);
        uo(n, e, s);
      }
    }
  };
  function mf(e, n, i, s, l, f, p) {
    e = e.stateNode;
    if (typeof e.shouldComponentUpdate == "function") {
      return e.shouldComponentUpdate(s, f, p);
    } else if (n.prototype && n.prototype.isPureReactComponent) {
      return !Yr(i, s) || !Yr(l, f);
    } else {
      return true;
    }
  }
  function gf(e, n, i) {
    var s = false;
    var l = cn;
    var f = n.contextType;
    if (typeof f == "object" && f !== null) {
      f = dt(f);
    } else {
      l = Ke(n) ? Pn : He.current;
      s = n.contextTypes;
      f = (s = s != null) ? ar(e, l) : cn;
    }
    n = new n(i, f);
    e.memoizedState = n.state ?? null;
    n.updater = yo;
    e.stateNode = n;
    n._reactInternals = e;
    if (s) {
      e = e.stateNode;
      e.__reactInternalMemoizedUnmaskedChildContext = l;
      e.__reactInternalMemoizedMaskedChildContext = f;
    }
    return n;
  }
  function yf(e, n, i, s) {
    e = n.state;
    if (typeof n.componentWillReceiveProps == "function") {
      n.componentWillReceiveProps(i, s);
    }
    if (typeof n.UNSAFE_componentWillReceiveProps == "function") {
      n.UNSAFE_componentWillReceiveProps(i, s);
    }
    if (n.state !== e) {
      yo.enqueueReplaceState(n, n.state, null);
    }
  }
  function xa(e, n, i, s) {
    var l = e.stateNode;
    l.props = i;
    l.state = e.memoizedState;
    l.refs = {};
    ca(e);
    var f = n.contextType;
    if (typeof f == "object" && f !== null) {
      l.context = dt(f);
    } else {
      f = Ke(n) ? Pn : He.current;
      l.context = ar(e, f);
    }
    l.state = e.memoizedState;
    f = n.getDerivedStateFromProps;
    if (typeof f == "function") {
      Ta(e, n, f, i);
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
        yo.enqueueReplaceState(l, l.state, null);
      }
      lo(e, i, l, s);
      l.state = e.memoizedState;
    }
    if (typeof l.componentDidMount == "function") {
      e.flags |= 4194308;
    }
  }
  function mr(e, n) {
    try {
      var i = "";
      var s = n;
      do {
        i += ae(s);
        s = s.return;
      } while (s);
      var l = i;
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
  function Ia(e, n, i) {
    return {
      value: e,
      source: null,
      stack: i ?? null,
      digest: n ?? null
    };
  }
  function Na(e, n) {
    try {
      console.error(n.value);
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  var Og = typeof WeakMap == "function" ? WeakMap : Map;
  function vf(e, n, i) {
    i = Xt(-1, i);
    i.tag = 3;
    i.payload = {
      element: null
    };
    var s = n.value;
    i.callback = function () {
      if (!xo) {
        xo = true;
        ja = s;
      }
      Na(e, n);
    };
    return i;
  }
  function _f(e, n, i) {
    i = Xt(-1, i);
    i.tag = 3;
    var s = e.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var l = n.value;
      i.payload = function () {
        return s(l);
      };
      i.callback = function () {
        Na(e, n);
      };
    }
    var f = e.stateNode;
    if (f !== null && typeof f.componentDidCatch == "function") {
      i.callback = function () {
        Na(e, n);
        if (typeof s != "function") {
          if (mn === null) {
            mn = new Set([this]);
          } else {
            mn.add(this);
          }
        }
        var p = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: p !== null ? p : ""
        });
      };
    }
    return i;
  }
  function Ef(e, n, i) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new Og();
      var l = new Set();
      s.set(n, l);
    } else {
      l = s.get(n);
      if (l === undefined) {
        l = new Set();
        s.set(n, l);
      }
    }
    if (!l.has(i)) {
      l.add(i);
      e = Wg.bind(null, e, n, i);
      n.then(e, e);
    }
  }
  function Sf(e) {
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
  function wf(e, n, i, s, l) {
    if ((e.mode & 1) === 0) {
      if (e === n) {
        e.flags |= 65536;
      } else {
        e.flags |= 128;
        i.flags |= 131072;
        i.flags &= -52805;
        if (i.tag === 1) {
          if (i.alternate === null) {
            i.tag = 17;
          } else {
            n = Xt(-1, 1);
            n.tag = 2;
            pn(i, n, 1);
          }
        }
        i.lanes |= 1;
      }
      return e;
    } else {
      e.flags |= 65536;
      e.lanes = l;
      return e;
    }
  }
  var Ag = ie.ReactCurrentOwner;
  var qe = false;
  function Ge(e, n, i, s) {
    n.child = e === null ? jc(n, null, i, s) : fr(n, e.child, i, s);
  }
  function Tf(e, n, i, s, l) {
    i = i.render;
    var f = n.ref;
    pr(n, l);
    s = ya(e, n, i, s, f, l);
    i = va();
    if (e !== null && !qe) {
      n.updateQueue = e.updateQueue;
      n.flags &= -2053;
      e.lanes &= ~l;
      return Yt(e, n, l);
    } else {
      if (Se && i) {
        ea(n);
      }
      n.flags |= 1;
      Ge(e, n, s, l);
      return n.child;
    }
  }
  function xf(e, n, i, s, l) {
    if (e === null) {
      var f = i.type;
      if (typeof f == "function" && !Ya(f) && f.defaultProps === undefined && i.compare === null && i.defaultProps === undefined) {
        n.tag = 15;
        n.type = f;
        return If(e, n, f, s, l);
      } else {
        e = Ro(i.type, null, s, n, n.mode, l);
        e.ref = n.ref;
        e.return = n;
        return n.child = e;
      }
    }
    f = e.child;
    if ((e.lanes & l) === 0) {
      var p = f.memoizedProps;
      i = i.compare;
      i = i !== null ? i : Yr;
      if (i(p, s) && e.ref === n.ref) {
        return Yt(e, n, l);
      }
    }
    n.flags |= 1;
    e = _n(f, s);
    e.ref = n.ref;
    e.return = n;
    return n.child = e;
  }
  function If(e, n, i, s, l) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (Yr(f, s) && e.ref === n.ref) {
        qe = false;
        n.pendingProps = s = f;
        if ((e.lanes & l) !== 0) {
          if ((e.flags & 131072) !== 0) {
            qe = true;
          }
        } else {
          n.lanes = e.lanes;
          return Yt(e, n, l);
        }
      }
    }
    return ka(e, n, i, s, l);
  }
  function Nf(e, n, i) {
    var s = n.pendingProps;
    var l = s.children;
    var f = e !== null ? e.memoizedState : null;
    if (s.mode === "hidden") {
      if ((n.mode & 1) === 0) {
        n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null
        };
        ge(yr, at);
        at |= i;
      } else {
        if ((i & 1073741824) === 0) {
          e = f !== null ? f.baseLanes | i : i;
          n.lanes = n.childLanes = 1073741824;
          n.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null
          };
          n.updateQueue = null;
          ge(yr, at);
          at |= e;
          return null;
        }
        n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null
        };
        s = f !== null ? f.baseLanes : i;
        ge(yr, at);
        at |= s;
      }
    } else {
      if (f !== null) {
        s = f.baseLanes | i;
        n.memoizedState = null;
      } else {
        s = i;
      }
      ge(yr, at);
      at |= s;
    }
    Ge(e, n, l, i);
    return n.child;
  }
  function kf(e, n) {
    var i = n.ref;
    if (e === null && i !== null || e !== null && e.ref !== i) {
      n.flags |= 512;
      n.flags |= 2097152;
    }
  }
  function ka(e, n, i, s, l) {
    var f = Ke(i) ? Pn : He.current;
    f = ar(n, f);
    pr(n, l);
    i = ya(e, n, i, s, f, l);
    s = va();
    if (e !== null && !qe) {
      n.updateQueue = e.updateQueue;
      n.flags &= -2053;
      e.lanes &= ~l;
      return Yt(e, n, l);
    } else {
      if (Se && s) {
        ea(n);
      }
      n.flags |= 1;
      Ge(e, n, i, l);
      return n.child;
    }
  }
  function Cf(e, n, i, s, l) {
    if (Ke(i)) {
      var f = true;
      eo(n);
    } else {
      f = false;
    }
    pr(n, l);
    if (n.stateNode === null) {
      _o(e, n);
      gf(n, i, s);
      xa(n, i, s, l);
      s = true;
    } else if (e === null) {
      var p = n.stateNode;
      var y = n.memoizedProps;
      p.props = y;
      var _ = p.context;
      var I = i.contextType;
      if (typeof I == "object" && I !== null) {
        I = dt(I);
      } else {
        I = Ke(i) ? Pn : He.current;
        I = ar(n, I);
      }
      var R = i.getDerivedStateFromProps;
      var L = typeof R == "function" || typeof p.getSnapshotBeforeUpdate == "function";
      if (!L && (typeof p.UNSAFE_componentWillReceiveProps == "function" || typeof p.componentWillReceiveProps == "function")) {
        if (y !== s || _ !== I) {
          yf(n, p, s, I);
        }
      }
      dn = false;
      var C = n.memoizedState;
      p.state = C;
      lo(n, s, p, l);
      _ = n.memoizedState;
      if (y !== s || C !== _ || Qe.current || dn) {
        if (typeof R == "function") {
          Ta(n, i, R, s);
          _ = n.memoizedState;
        }
        if (y = dn || mf(n, i, y, s, C, _, I)) {
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
          n.memoizedProps = s;
          n.memoizedState = _;
        }
        p.props = s;
        p.state = _;
        p.context = I;
        s = y;
      } else {
        if (typeof p.componentDidMount == "function") {
          n.flags |= 4194308;
        }
        s = false;
      }
    } else {
      p = n.stateNode;
      $c(e, n);
      y = n.memoizedProps;
      I = n.type === n.elementType ? y : wt(n.type, y);
      p.props = I;
      L = n.pendingProps;
      C = p.context;
      _ = i.contextType;
      if (typeof _ == "object" && _ !== null) {
        _ = dt(_);
      } else {
        _ = Ke(i) ? Pn : He.current;
        _ = ar(n, _);
      }
      var F = i.getDerivedStateFromProps;
      if (!(R = typeof F == "function" || typeof p.getSnapshotBeforeUpdate == "function") && (typeof p.UNSAFE_componentWillReceiveProps == "function" || typeof p.componentWillReceiveProps == "function")) {
        if (y !== L || C !== _) {
          yf(n, p, s, _);
        }
      }
      dn = false;
      C = n.memoizedState;
      p.state = C;
      lo(n, s, p, l);
      var j = n.memoizedState;
      if (y !== L || C !== j || Qe.current || dn) {
        if (typeof F == "function") {
          Ta(n, i, F, s);
          j = n.memoizedState;
        }
        if (I = dn || mf(n, i, I, s, C, j, _) || false) {
          if (!R && (typeof p.UNSAFE_componentWillUpdate == "function" || typeof p.componentWillUpdate == "function")) {
            if (typeof p.componentWillUpdate == "function") {
              p.componentWillUpdate(s, j, _);
            }
            if (typeof p.UNSAFE_componentWillUpdate == "function") {
              p.UNSAFE_componentWillUpdate(s, j, _);
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
          n.memoizedProps = s;
          n.memoizedState = j;
        }
        p.props = s;
        p.state = j;
        p.context = _;
        s = I;
      } else {
        if (typeof p.componentDidUpdate == "function" && (y !== e.memoizedProps || C !== e.memoizedState)) {
          n.flags |= 4;
        }
        if (typeof p.getSnapshotBeforeUpdate == "function" && (y !== e.memoizedProps || C !== e.memoizedState)) {
          n.flags |= 1024;
        }
        s = false;
      }
    }
    return Ca(e, n, i, s, f, l);
  }
  function Ca(e, n, i, s, l, f) {
    kf(e, n);
    var p = (n.flags & 128) !== 0;
    if (!s && !p) {
      if (l) {
        Oc(n, i, false);
      }
      return Yt(e, n, f);
    }
    s = n.stateNode;
    Ag.current = n;
    var y = p && typeof i.getDerivedStateFromError != "function" ? null : s.render();
    n.flags |= 1;
    if (e !== null && p) {
      n.child = fr(n, e.child, null, f);
      n.child = fr(n, null, y, f);
    } else {
      Ge(e, n, y, f);
    }
    n.memoizedState = s.state;
    if (l) {
      Oc(n, i, true);
    }
    return n.child;
  }
  function Pf(e) {
    var n = e.stateNode;
    if (n.pendingContext) {
      Rc(e, n.pendingContext, n.pendingContext !== n.context);
    } else if (n.context) {
      Rc(e, n.context, false);
    }
    fa(e, n.containerInfo);
  }
  function Rf(e, n, i, s, l) {
    cr();
    ia(l);
    n.flags |= 256;
    Ge(e, n, i, s);
    return n.child;
  }
  var Pa = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
  };
  function Ra(e) {
    return {
      baseLanes: e,
      cachePool: null,
      transitions: null
    };
  }
  function Lf(e, n, i) {
    var s = n.pendingProps;
    var l = we.current;
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
    ge(we, l & 1);
    if (e === null) {
      ra(n);
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
        p = s.children;
        e = s.fallback;
        if (f) {
          s = n.mode;
          f = n.child;
          p = {
            mode: "hidden",
            children: p
          };
          if ((s & 1) === 0 && f !== null) {
            f.childLanes = 0;
            f.pendingProps = p;
          } else {
            f = Lo(p, s, 0, null);
          }
          e = Bn(e, s, i, null);
          f.return = n;
          e.return = n;
          f.sibling = e;
          n.child = f;
          n.child.memoizedState = Ra(i);
          n.memoizedState = Pa;
          return e;
        } else {
          return La(n, p);
        }
      }
    }
    l = e.memoizedState;
    if (l !== null && (y = l.dehydrated, y !== null)) {
      return Dg(e, n, p, s, y, l, i);
    }
    if (f) {
      f = s.fallback;
      p = n.mode;
      l = e.child;
      y = l.sibling;
      var _ = {
        mode: "hidden",
        children: s.children
      };
      if ((p & 1) === 0 && n.child !== l) {
        s = n.child;
        s.childLanes = 0;
        s.pendingProps = _;
        n.deletions = null;
      } else {
        s = _n(l, _);
        s.subtreeFlags = l.subtreeFlags & 14680064;
      }
      if (y !== null) {
        f = _n(y, f);
      } else {
        f = Bn(f, p, i, null);
        f.flags |= 2;
      }
      f.return = n;
      s.return = n;
      s.sibling = f;
      n.child = s;
      s = f;
      f = n.child;
      p = e.child.memoizedState;
      p = p === null ? Ra(i) : {
        baseLanes: p.baseLanes | i,
        cachePool: null,
        transitions: p.transitions
      };
      f.memoizedState = p;
      f.childLanes = e.childLanes & ~i;
      n.memoizedState = Pa;
      return s;
    }
    f = e.child;
    e = f.sibling;
    s = _n(f, {
      mode: "visible",
      children: s.children
    });
    if ((n.mode & 1) === 0) {
      s.lanes = i;
    }
    s.return = n;
    s.sibling = null;
    if (e !== null) {
      i = n.deletions;
      if (i === null) {
        n.deletions = [e];
        n.flags |= 16;
      } else {
        i.push(e);
      }
    }
    n.child = s;
    n.memoizedState = null;
    return s;
  }
  function La(e, n) {
    n = Lo({
      mode: "visible",
      children: n
    }, e.mode, 0, null);
    n.return = e;
    return e.child = n;
  }
  function vo(e, n, i, s) {
    if (s !== null) {
      ia(s);
    }
    fr(n, e.child, null, i);
    e = La(n, n.pendingProps.children);
    e.flags |= 2;
    n.memoizedState = null;
    return e;
  }
  function Dg(e, n, i, s, l, f, p) {
    if (i) {
      if (n.flags & 256) {
        n.flags &= -257;
        s = Ia(Error(o(422)));
        return vo(e, n, p, s);
      } else if (n.memoizedState !== null) {
        n.child = e.child;
        n.flags |= 128;
        return null;
      } else {
        f = s.fallback;
        l = n.mode;
        s = Lo({
          mode: "visible",
          children: s.children
        }, l, 0, null);
        f = Bn(f, l, p, null);
        f.flags |= 2;
        s.return = n;
        f.return = n;
        s.sibling = f;
        n.child = s;
        if ((n.mode & 1) !== 0) {
          fr(n, e.child, null, p);
        }
        n.child.memoizedState = Ra(p);
        n.memoizedState = Pa;
        return f;
      }
    }
    if ((n.mode & 1) === 0) {
      return vo(e, n, p, null);
    }
    if (l.data === "$!") {
      s = l.nextSibling && l.nextSibling.dataset;
      if (s) {
        var y = s.dgst;
      }
      s = y;
      f = Error(o(419));
      s = Ia(f, s, undefined);
      return vo(e, n, p, s);
    }
    y = (p & e.childLanes) !== 0;
    if (qe || y) {
      s = De;
      if (s !== null) {
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
        l = (l & (s.suspendedLanes | p)) !== 0 ? 0 : l;
        if (l !== 0 && l !== f.retryLane) {
          f.retryLane = l;
          Wt(e, l);
          It(s, e, l, -1);
        }
      }
      Xa();
      s = Ia(Error(o(421)));
      return vo(e, n, p, s);
    }
    if (l.data === "$?") {
      n.flags |= 128;
      n.child = e.child;
      n = Xg.bind(null, e);
      l._reactRetry = n;
      return null;
    } else {
      e = f.treeContext;
      st = un(l.nextSibling);
      ot = n;
      Se = true;
      St = null;
      if (e !== null) {
        ct[ft++] = Gt;
        ct[ft++] = Vt;
        ct[ft++] = Rn;
        Gt = e.id;
        Vt = e.overflow;
        Rn = n;
      }
      n = La(n, s.children);
      n.flags |= 4096;
      return n;
    }
  }
  function Of(e, n, i) {
    e.lanes |= n;
    var s = e.alternate;
    if (s !== null) {
      s.lanes |= n;
    }
    ua(e.return, n, i);
  }
  function Oa(e, n, i, s, l) {
    var f = e.memoizedState;
    if (f === null) {
      e.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: s,
        tail: i,
        tailMode: l
      };
    } else {
      f.isBackwards = n;
      f.rendering = null;
      f.renderingStartTime = 0;
      f.last = s;
      f.tail = i;
      f.tailMode = l;
    }
  }
  function Af(e, n, i) {
    var s = n.pendingProps;
    var l = s.revealOrder;
    var f = s.tail;
    Ge(e, n, s.children, i);
    s = we.current;
    if ((s & 2) !== 0) {
      s = s & 1 | 2;
      n.flags |= 128;
    } else {
      if (e !== null && (e.flags & 128) !== 0) {
        e: for (e = n.child; e !== null;) {
          if (e.tag === 13) {
            if (e.memoizedState !== null) {
              Of(e, i, n);
            }
          } else if (e.tag === 19) {
            Of(e, i, n);
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
      s &= 1;
    }
    ge(we, s);
    if ((n.mode & 1) === 0) {
      n.memoizedState = null;
    } else {
      switch (l) {
        case "forwards":
          i = n.child;
          l = null;
          while (i !== null) {
            e = i.alternate;
            if (e !== null && co(e) === null) {
              l = i;
            }
            i = i.sibling;
          }
          i = l;
          if (i === null) {
            l = n.child;
            n.child = null;
          } else {
            l = i.sibling;
            i.sibling = null;
          }
          Oa(n, false, l, i, f);
          break;
        case "backwards":
          i = null;
          l = n.child;
          n.child = null;
          while (l !== null) {
            e = l.alternate;
            if (e !== null && co(e) === null) {
              n.child = l;
              break;
            }
            e = l.sibling;
            l.sibling = i;
            i = l;
            l = e;
          }
          Oa(n, true, i, null, f);
          break;
        case "together":
          Oa(n, false, null, null, undefined);
          break;
        default:
          n.memoizedState = null;
      }
    }
    return n.child;
  }
  function _o(e, n) {
    if ((n.mode & 1) === 0 && e !== null) {
      e.alternate = null;
      n.alternate = null;
      n.flags |= 2;
    }
  }
  function Yt(e, n, i) {
    if (e !== null) {
      n.dependencies = e.dependencies;
    }
    Mn |= n.lanes;
    if ((i & n.childLanes) === 0) {
      return null;
    }
    if (e !== null && n.child !== e.child) {
      throw Error(o(153));
    }
    if (n.child !== null) {
      e = n.child;
      i = _n(e, e.pendingProps);
      n.child = i;
      i.return = n;
      while (e.sibling !== null) {
        e = e.sibling;
        i = i.sibling = _n(e, e.pendingProps);
        i.return = n;
      }
      i.sibling = null;
    }
    return n.child;
  }
  function Mg(e, n, i) {
    switch (n.tag) {
      case 3:
        Pf(n);
        cr();
        break;
      case 5:
        Wc(n);
        break;
      case 1:
        if (Ke(n.type)) {
          eo(n);
        }
        break;
      case 4:
        fa(n, n.stateNode.containerInfo);
        break;
      case 10:
        var s = n.type._context;
        var l = n.memoizedProps.value;
        ge(so, s._currentValue);
        s._currentValue = l;
        break;
      case 13:
        s = n.memoizedState;
        if (s !== null) {
          if (s.dehydrated !== null) {
            ge(we, we.current & 1);
            n.flags |= 128;
            return null;
          } else if ((i & n.child.childLanes) !== 0) {
            return Lf(e, n, i);
          } else {
            ge(we, we.current & 1);
            e = Yt(e, n, i);
            if (e !== null) {
              return e.sibling;
            } else {
              return null;
            }
          }
        }
        ge(we, we.current & 1);
        break;
      case 19:
        s = (i & n.childLanes) !== 0;
        if ((e.flags & 128) !== 0) {
          if (s) {
            return Af(e, n, i);
          }
          n.flags |= 128;
        }
        l = n.memoizedState;
        if (l !== null) {
          l.rendering = null;
          l.tail = null;
          l.lastEffect = null;
        }
        ge(we, we.current);
        if (s) {
          break;
        }
        return null;
      case 22:
      case 23:
        n.lanes = 0;
        return Nf(e, n, i);
    }
    return Yt(e, n, i);
  }
  var Df;
  var Aa;
  var Mf;
  var bf;
  Df = function (e, n) {
    for (var i = n.child; i !== null;) {
      if (i.tag === 5 || i.tag === 6) {
        e.appendChild(i.stateNode);
      } else if (i.tag !== 4 && i.child !== null) {
        i.child.return = i;
        i = i.child;
        continue;
      }
      if (i === n) {
        break;
      }
      while (i.sibling === null) {
        if (i.return === null || i.return === n) {
          return;
        }
        i = i.return;
      }
      i.sibling.return = i.return;
      i = i.sibling;
    }
  };
  Aa = function () {};
  Mf = function (e, n, i, s) {
    var l = e.memoizedProps;
    if (l !== s) {
      e = n.stateNode;
      An(Lt.current);
      var f = null;
      switch (i) {
        case "input":
          l = us(e, l);
          s = us(e, s);
          f = [];
          break;
        case "select":
          l = U({}, l, {
            value: undefined
          });
          s = U({}, s, {
            value: undefined
          });
          f = [];
          break;
        case "textarea":
          l = fs(e, l);
          s = fs(e, s);
          f = [];
          break;
        default:
          if (typeof l.onClick != "function" && typeof s.onClick == "function") {
            e.onclick = qi;
          }
      }
      ps(i, s);
      var p;
      i = null;
      for (I in l) {
        if (!s.hasOwnProperty(I) && l.hasOwnProperty(I) && l[I] != null) {
          if (I === "style") {
            var y = l[I];
            for (p in y) {
              if (y.hasOwnProperty(p)) {
                i ||= {};
                i[p] = "";
              }
            }
          } else if (I !== "dangerouslySetInnerHTML" && I !== "children" && I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && I !== "autoFocus") {
            if (u.hasOwnProperty(I)) {
              f ||= [];
            } else {
              (f = f || []).push(I, null);
            }
          }
        }
      }
      for (I in s) {
        var _ = s[I];
        y = l != null ? l[I] : undefined;
        if (s.hasOwnProperty(I) && _ !== y && (_ != null || y != null)) {
          if (I === "style") {
            if (y) {
              for (p in y) {
                if (!!y.hasOwnProperty(p) && (!_ || !_.hasOwnProperty(p))) {
                  i ||= {};
                  i[p] = "";
                }
              }
              for (p in _) {
                if (_.hasOwnProperty(p) && y[p] !== _[p]) {
                  i ||= {};
                  i[p] = _[p];
                }
              }
            } else {
              if (!i) {
                f ||= [];
                f.push(I, i);
              }
              i = _;
            }
          } else if (I === "dangerouslySetInnerHTML") {
            _ = _ ? _.__html : undefined;
            y = y ? y.__html : undefined;
            if (_ != null && y !== _) {
              (f = f || []).push(I, _);
            }
          } else if (I === "children") {
            if (typeof _ == "string" || typeof _ == "number") {
              (f = f || []).push(I, "" + _);
            }
          } else if (I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning") {
            if (u.hasOwnProperty(I)) {
              if (_ != null && I === "onScroll") {
                ye("scroll", e);
              }
              if (!f && y !== _) {
                f = [];
              }
            } else {
              (f = f || []).push(I, _);
            }
          }
        }
      }
      if (i) {
        (f = f || []).push("style", i);
      }
      var I = f;
      if (n.updateQueue = I) {
        n.flags |= 4;
      }
    }
  };
  bf = function (e, n, i, s) {
    if (i !== s) {
      n.flags |= 4;
    }
  };
  function li(e, n) {
    if (!Se) {
      switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          var i = null;
          for (; n !== null;) {
            if (n.alternate !== null) {
              i = n;
            }
            n = n.sibling;
          }
          if (i === null) {
            e.tail = null;
          } else {
            i.sibling = null;
          }
          break;
        case "collapsed":
          i = e.tail;
          var s = null;
          for (; i !== null;) {
            if (i.alternate !== null) {
              s = i;
            }
            i = i.sibling;
          }
          if (s === null) {
            if (n || e.tail === null) {
              e.tail = null;
            } else {
              e.tail.sibling = null;
            }
          } else {
            s.sibling = null;
          }
      }
    }
  }
  function Ue(e) {
    var n = e.alternate !== null && e.alternate.child === e.child;
    var i = 0;
    var s = 0;
    if (n) {
      for (var l = e.child; l !== null;) {
        i |= l.lanes | l.childLanes;
        s |= l.subtreeFlags & 14680064;
        s |= l.flags & 14680064;
        l.return = e;
        l = l.sibling;
      }
    } else {
      for (l = e.child; l !== null;) {
        i |= l.lanes | l.childLanes;
        s |= l.subtreeFlags;
        s |= l.flags;
        l.return = e;
        l = l.sibling;
      }
    }
    e.subtreeFlags |= s;
    e.childLanes = i;
    return n;
  }
  function bg(e, n, i) {
    var s = n.pendingProps;
    ta(n);
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
        Ue(n);
        return null;
      case 1:
        if (Ke(n.type)) {
          Ji();
        }
        Ue(n);
        return null;
      case 3:
        s = n.stateNode;
        hr();
        ve(Qe);
        ve(He);
        ha();
        if (s.pendingContext) {
          s.context = s.pendingContext;
          s.pendingContext = null;
        }
        if (e === null || e.child === null) {
          if (io(n)) {
            n.flags |= 4;
          } else if (e !== null && (!e.memoizedState.isDehydrated || (n.flags & 256) !== 0)) {
            n.flags |= 1024;
            if (St !== null) {
              Ga(St);
              St = null;
            }
          }
        }
        Aa(e, n);
        Ue(n);
        return null;
      case 5:
        da(n);
        var l = An(ii.current);
        i = n.type;
        if (e !== null && n.stateNode != null) {
          Mf(e, n, i, s, l);
          if (e.ref !== n.ref) {
            n.flags |= 512;
            n.flags |= 2097152;
          }
        } else {
          if (!s) {
            if (n.stateNode === null) {
              throw Error(o(166));
            }
            Ue(n);
            return null;
          }
          e = An(Lt.current);
          if (io(n)) {
            s = n.stateNode;
            i = n.type;
            var f = n.memoizedProps;
            s[Rt] = n;
            s[Jr] = f;
            e = (n.mode & 1) !== 0;
            switch (i) {
              case "dialog":
                ye("cancel", s);
                ye("close", s);
                break;
              case "iframe":
              case "object":
              case "embed":
                ye("load", s);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Kr.length; l++) {
                  ye(Kr[l], s);
                }
                break;
              case "source":
                ye("error", s);
                break;
              case "img":
              case "image":
              case "link":
                ye("error", s);
                ye("load", s);
                break;
              case "details":
                ye("toggle", s);
                break;
              case "input":
                ml(s, f);
                ye("invalid", s);
                break;
              case "select":
                s._wrapperState = {
                  wasMultiple: !!f.multiple
                };
                ye("invalid", s);
                break;
              case "textarea":
                vl(s, f);
                ye("invalid", s);
            }
            ps(i, f);
            l = null;
            for (var p in f) {
              if (f.hasOwnProperty(p)) {
                var y = f[p];
                if (p === "children") {
                  if (typeof y == "string") {
                    if (s.textContent !== y) {
                      if (f.suppressHydrationWarning !== true) {
                        Ki(s.textContent, y, e);
                      }
                      l = ["children", y];
                    }
                  } else if (typeof y == "number" && s.textContent !== "" + y) {
                    if (f.suppressHydrationWarning !== true) {
                      Ki(s.textContent, y, e);
                    }
                    l = ["children", "" + y];
                  }
                } else if (u.hasOwnProperty(p) && y != null && p === "onScroll") {
                  ye("scroll", s);
                }
              }
            }
            switch (i) {
              case "input":
                ki(s);
                yl(s, f, true);
                break;
              case "textarea":
                ki(s);
                El(s);
                break;
              case "select":
              case "option":
                break;
              default:
                if (typeof f.onClick == "function") {
                  s.onclick = qi;
                }
            }
            s = l;
            n.updateQueue = s;
            if (s !== null) {
              n.flags |= 4;
            }
          } else {
            p = l.nodeType === 9 ? l : l.ownerDocument;
            if (e === "http://www.w3.org/1999/xhtml") {
              e = Sl(i);
            }
            if (e === "http://www.w3.org/1999/xhtml") {
              if (i === "script") {
                e = p.createElement("div");
                e.innerHTML = "<script></script>";
                e = e.removeChild(e.firstChild);
              } else if (typeof s.is == "string") {
                e = p.createElement(i, {
                  is: s.is
                });
              } else {
                e = p.createElement(i);
                if (i === "select") {
                  p = e;
                  if (s.multiple) {
                    p.multiple = true;
                  } else if (s.size) {
                    p.size = s.size;
                  }
                }
              }
            } else {
              e = p.createElementNS(e, i);
            }
            e[Rt] = n;
            e[Jr] = s;
            Df(e, n, false, false);
            n.stateNode = e;
            e: {
              p = hs(i, s);
              switch (i) {
                case "dialog":
                  ye("cancel", e);
                  ye("close", e);
                  l = s;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ye("load", e);
                  l = s;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < Kr.length; l++) {
                    ye(Kr[l], e);
                  }
                  l = s;
                  break;
                case "source":
                  ye("error", e);
                  l = s;
                  break;
                case "img":
                case "image":
                case "link":
                  ye("error", e);
                  ye("load", e);
                  l = s;
                  break;
                case "details":
                  ye("toggle", e);
                  l = s;
                  break;
                case "input":
                  ml(e, s);
                  l = us(e, s);
                  ye("invalid", e);
                  break;
                case "option":
                  l = s;
                  break;
                case "select":
                  e._wrapperState = {
                    wasMultiple: !!s.multiple
                  };
                  l = U({}, s, {
                    value: undefined
                  });
                  ye("invalid", e);
                  break;
                case "textarea":
                  vl(e, s);
                  l = fs(e, s);
                  ye("invalid", e);
                  break;
                default:
                  l = s;
              }
              ps(i, l);
              y = l;
              for (f in y) {
                if (y.hasOwnProperty(f)) {
                  var _ = y[f];
                  if (f === "style") {
                    xl(e, _);
                  } else if (f === "dangerouslySetInnerHTML") {
                    _ = _ ? _.__html : undefined;
                    if (_ != null) {
                      wl(e, _);
                    }
                  } else if (f === "children") {
                    if (typeof _ == "string") {
                      if (i !== "textarea" || _ !== "") {
                        Lr(e, _);
                      }
                    } else if (typeof _ == "number") {
                      Lr(e, "" + _);
                    }
                  } else if (f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus") {
                    if (u.hasOwnProperty(f)) {
                      if (_ != null && f === "onScroll") {
                        ye("scroll", e);
                      }
                    } else if (_ != null) {
                      Q(e, f, _, p);
                    }
                  }
                }
              }
              switch (i) {
                case "input":
                  ki(e);
                  yl(e, s, false);
                  break;
                case "textarea":
                  ki(e);
                  El(e);
                  break;
                case "option":
                  if (s.value != null) {
                    e.setAttribute("value", "" + de(s.value));
                  }
                  break;
                case "select":
                  e.multiple = !!s.multiple;
                  f = s.value;
                  if (f != null) {
                    Qn(e, !!s.multiple, f, false);
                  } else if (s.defaultValue != null) {
                    Qn(e, !!s.multiple, s.defaultValue, true);
                  }
                  break;
                default:
                  if (typeof l.onClick == "function") {
                    e.onclick = qi;
                  }
              }
              switch (i) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s = !!s.autoFocus;
                  break e;
                case "img":
                  s = true;
                  break e;
                default:
                  s = false;
              }
            }
            if (s) {
              n.flags |= 4;
            }
          }
          if (n.ref !== null) {
            n.flags |= 512;
            n.flags |= 2097152;
          }
        }
        Ue(n);
        return null;
      case 6:
        if (e && n.stateNode != null) {
          bf(e, n, e.memoizedProps, s);
        } else {
          if (typeof s != "string" && n.stateNode === null) {
            throw Error(o(166));
          }
          i = An(ii.current);
          An(Lt.current);
          if (io(n)) {
            s = n.stateNode;
            i = n.memoizedProps;
            s[Rt] = n;
            if ((f = s.nodeValue !== i) && (e = ot, e !== null)) {
              switch (e.tag) {
                case 3:
                  Ki(s.nodeValue, i, (e.mode & 1) !== 0);
                  break;
                case 5:
                  if (e.memoizedProps.suppressHydrationWarning !== true) {
                    Ki(s.nodeValue, i, (e.mode & 1) !== 0);
                  }
              }
            }
            if (f) {
              n.flags |= 4;
            }
          } else {
            s = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(s);
            s[Rt] = n;
            n.stateNode = s;
          }
        }
        Ue(n);
        return null;
      case 13:
        ve(we);
        s = n.memoizedState;
        if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Se && st !== null && (n.mode & 1) !== 0 && (n.flags & 128) === 0) {
            Hc();
            cr();
            n.flags |= 98560;
            f = false;
          } else {
            f = io(n);
            if (s !== null && s.dehydrated !== null) {
              if (e === null) {
                if (!f) {
                  throw Error(o(318));
                }
                f = n.memoizedState;
                f = f !== null ? f.dehydrated : null;
                if (!f) {
                  throw Error(o(317));
                }
                f[Rt] = n;
              } else {
                cr();
                if ((n.flags & 128) === 0) {
                  n.memoizedState = null;
                }
                n.flags |= 4;
              }
              Ue(n);
              f = false;
            } else {
              if (St !== null) {
                Ga(St);
                St = null;
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
          n.lanes = i;
          return n;
        } else {
          s = s !== null;
          if (s !== (e !== null && e.memoizedState !== null) && s) {
            n.child.flags |= 8192;
            if ((n.mode & 1) !== 0) {
              if (e === null || (we.current & 1) !== 0) {
                if (Oe === 0) {
                  Oe = 3;
                }
              } else {
                Xa();
              }
            }
          }
          if (n.updateQueue !== null) {
            n.flags |= 4;
          }
          Ue(n);
          return null;
        }
      case 4:
        hr();
        Aa(e, n);
        if (e === null) {
          qr(n.stateNode.containerInfo);
        }
        Ue(n);
        return null;
      case 10:
        aa(n.type._context);
        Ue(n);
        return null;
      case 17:
        if (Ke(n.type)) {
          Ji();
        }
        Ue(n);
        return null;
      case 19:
        ve(we);
        f = n.memoizedState;
        if (f === null) {
          Ue(n);
          return null;
        }
        s = (n.flags & 128) !== 0;
        p = f.rendering;
        if (p === null) {
          if (s) {
            li(f, false);
          } else {
            if (Oe !== 0 || e !== null && (e.flags & 128) !== 0) {
              for (e = n.child; e !== null;) {
                p = co(e);
                if (p !== null) {
                  n.flags |= 128;
                  li(f, false);
                  s = p.updateQueue;
                  if (s !== null) {
                    n.updateQueue = s;
                    n.flags |= 4;
                  }
                  n.subtreeFlags = 0;
                  s = i;
                  i = n.child;
                  while (i !== null) {
                    f = i;
                    e = s;
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
                    i = i.sibling;
                  }
                  ge(we, we.current & 1 | 2);
                  return n.child;
                }
                e = e.sibling;
              }
            }
            if (f.tail !== null && Ne() > vr) {
              n.flags |= 128;
              s = true;
              li(f, false);
              n.lanes = 4194304;
            }
          }
        } else {
          if (!s) {
            e = co(p);
            if (e !== null) {
              n.flags |= 128;
              s = true;
              i = e.updateQueue;
              if (i !== null) {
                n.updateQueue = i;
                n.flags |= 4;
              }
              li(f, true);
              if (f.tail === null && f.tailMode === "hidden" && !p.alternate && !Se) {
                Ue(n);
                return null;
              }
            } else if (Ne() * 2 - f.renderingStartTime > vr && i !== 1073741824) {
              n.flags |= 128;
              s = true;
              li(f, false);
              n.lanes = 4194304;
            }
          }
          if (f.isBackwards) {
            p.sibling = n.child;
            n.child = p;
          } else {
            i = f.last;
            if (i !== null) {
              i.sibling = p;
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
          f.renderingStartTime = Ne();
          n.sibling = null;
          i = we.current;
          ge(we, s ? i & 1 | 2 : i & 1);
          return n;
        } else {
          Ue(n);
          return null;
        }
      case 22:
      case 23:
        Wa();
        s = n.memoizedState !== null;
        if (e !== null && e.memoizedState !== null !== s) {
          n.flags |= 8192;
        }
        if (s && (n.mode & 1) !== 0) {
          if ((at & 1073741824) !== 0) {
            Ue(n);
            if (n.subtreeFlags & 6) {
              n.flags |= 8192;
            }
          }
        } else {
          Ue(n);
        }
        return null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, n.tag));
  }
  function Fg(e, n) {
    ta(n);
    switch (n.tag) {
      case 1:
        if (Ke(n.type)) {
          Ji();
        }
        e = n.flags;
        if (e & 65536) {
          n.flags = e & -65537 | 128;
          return n;
        } else {
          return null;
        }
      case 3:
        hr();
        ve(Qe);
        ve(He);
        ha();
        e = n.flags;
        if ((e & 65536) !== 0 && (e & 128) === 0) {
          n.flags = e & -65537 | 128;
          return n;
        } else {
          return null;
        }
      case 5:
        da(n);
        return null;
      case 13:
        ve(we);
        e = n.memoizedState;
        if (e !== null && e.dehydrated !== null) {
          if (n.alternate === null) {
            throw Error(o(340));
          }
          cr();
        }
        e = n.flags;
        if (e & 65536) {
          n.flags = e & -65537 | 128;
          return n;
        } else {
          return null;
        }
      case 19:
        ve(we);
        return null;
      case 4:
        hr();
        return null;
      case 10:
        aa(n.type._context);
        return null;
      case 22:
      case 23:
        Wa();
        return null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Eo = false;
  var je = false;
  var Hg = typeof WeakSet == "function" ? WeakSet : Set;
  var B = null;
  function gr(e, n) {
    var i = e.ref;
    if (i !== null) {
      if (typeof i == "function") {
        try {
          i(null);
        } catch (s) {
          Ie(e, n, s);
        }
      } else {
        i.current = null;
      }
    }
  }
  function Da(e, n, i) {
    try {
      i();
    } catch (s) {
      Ie(e, n, s);
    }
  }
  var Ff = false;
  function Bg(e, n) {
    Ws = Bi;
    e = hc();
    if (Hs(e)) {
      if ("selectionStart" in e) {
        var i = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      } else {
        e: {
          i = (i = e.ownerDocument) && i.defaultView || window;
          var s = i.getSelection && i.getSelection();
          if (s && s.rangeCount !== 0) {
            i = s.anchorNode;
            var l = s.anchorOffset;
            var f = s.focusNode;
            s = s.focusOffset;
            try {
              i.nodeType;
              f.nodeType;
            } catch {
              i = null;
              break e;
            }
            var p = 0;
            var y = -1;
            var _ = -1;
            var I = 0;
            var R = 0;
            var L = e;
            var C = null;
            t: while (true) {
              for (var F; L !== i || l !== 0 && L.nodeType !== 3 || (y = p + l), L !== f || s !== 0 && L.nodeType !== 3 || (_ = p + s), L.nodeType === 3 && (p += L.nodeValue.length), (F = L.firstChild) !== null;) {
                C = L;
                L = F;
              }
              while (true) {
                if (L === e) {
                  break t;
                }
                if (C === i && ++I === l) {
                  y = p;
                }
                if (C === f && ++R === s) {
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
            i = y === -1 || _ === -1 ? null : {
              start: y,
              end: _
            };
          } else {
            i = null;
          }
        }
      }
      i = i || {
        start: 0,
        end: 0
      };
    } else {
      i = null;
    }
    Xs = {
      focusedElem: e,
      selectionRange: i
    };
    Bi = false;
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
                    var ke = j.memoizedState;
                    var T = n.stateNode;
                    var E = T.getSnapshotBeforeUpdate(n.elementType === n.type ? z : wt(n.type, z), ke);
                    T.__reactInternalSnapshotBeforeUpdate = E;
                  }
                  break;
                case 3:
                  var x = n.stateNode.containerInfo;
                  if (x.nodeType === 1) {
                    x.textContent = "";
                  } else if (x.nodeType === 9 && x.documentElement) {
                    x.removeChild(x.documentElement);
                  }
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(o(163));
              }
            }
          } catch (O) {
            Ie(n, n.return, O);
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
    j = Ff;
    Ff = false;
    return j;
  }
  function ci(e, n, i) {
    var s = n.updateQueue;
    s = s !== null ? s.lastEffect : null;
    if (s !== null) {
      var l = s = s.next;
      do {
        if ((l.tag & e) === e) {
          var f = l.destroy;
          l.destroy = undefined;
          if (f !== undefined) {
            Da(n, i, f);
          }
        }
        l = l.next;
      } while (l !== s);
    }
  }
  function So(e, n) {
    n = n.updateQueue;
    n = n !== null ? n.lastEffect : null;
    if (n !== null) {
      var i = n = n.next;
      do {
        if ((i.tag & e) === e) {
          var s = i.create;
          i.destroy = s();
        }
        i = i.next;
      } while (i !== n);
    }
  }
  function Ma(e) {
    var n = e.ref;
    if (n !== null) {
      var i = e.stateNode;
      switch (e.tag) {
        case 5:
          e = i;
          break;
        default:
          e = i;
      }
      if (typeof n == "function") {
        n(e);
      } else {
        n.current = e;
      }
    }
  }
  function Hf(e) {
    var n = e.alternate;
    if (n !== null) {
      e.alternate = null;
      Hf(n);
    }
    e.child = null;
    e.deletions = null;
    e.sibling = null;
    if (e.tag === 5) {
      n = e.stateNode;
      if (n !== null) {
        delete n[Rt];
        delete n[Jr];
        delete n[qs];
        delete n[Sg];
        delete n[wg];
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
  function Bf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Uf(e) {
    e: while (true) {
      while (e.sibling === null) {
        if (e.return === null || Bf(e.return)) {
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
  function ba(e, n, i) {
    var s = e.tag;
    if (s === 5 || s === 6) {
      e = e.stateNode;
      if (n) {
        if (i.nodeType === 8) {
          i.parentNode.insertBefore(e, n);
        } else {
          i.insertBefore(e, n);
        }
      } else {
        if (i.nodeType === 8) {
          n = i.parentNode;
          n.insertBefore(e, i);
        } else {
          n = i;
          n.appendChild(e);
        }
        i = i._reactRootContainer;
        if (i == null && n.onclick === null) {
          n.onclick = qi;
        }
      }
    } else if (s !== 4 && (e = e.child, e !== null)) {
      ba(e, n, i);
      e = e.sibling;
      while (e !== null) {
        ba(e, n, i);
        e = e.sibling;
      }
    }
  }
  function Fa(e, n, i) {
    var s = e.tag;
    if (s === 5 || s === 6) {
      e = e.stateNode;
      if (n) {
        i.insertBefore(e, n);
      } else {
        i.appendChild(e);
      }
    } else if (s !== 4 && (e = e.child, e !== null)) {
      Fa(e, n, i);
      e = e.sibling;
      while (e !== null) {
        Fa(e, n, i);
        e = e.sibling;
      }
    }
  }
  var be = null;
  var Tt = false;
  function hn(e, n, i) {
    for (i = i.child; i !== null;) {
      jf(e, n, i);
      i = i.sibling;
    }
  }
  function jf(e, n, i) {
    if (Pt && typeof Pt.onCommitFiberUnmount == "function") {
      try {
        Pt.onCommitFiberUnmount(Ai, i);
      } catch {}
    }
    switch (i.tag) {
      case 5:
        if (!je) {
          gr(i, n);
        }
      case 6:
        var s = be;
        var l = Tt;
        be = null;
        hn(e, n, i);
        be = s;
        Tt = l;
        if (be !== null) {
          if (Tt) {
            e = be;
            i = i.stateNode;
            if (e.nodeType === 8) {
              e.parentNode.removeChild(i);
            } else {
              e.removeChild(i);
            }
          } else {
            be.removeChild(i.stateNode);
          }
        }
        break;
      case 18:
        if (be !== null) {
          if (Tt) {
            e = be;
            i = i.stateNode;
            if (e.nodeType === 8) {
              Ks(e.parentNode, i);
            } else if (e.nodeType === 1) {
              Ks(e, i);
            }
            zr(e);
          } else {
            Ks(be, i.stateNode);
          }
        }
        break;
      case 4:
        s = be;
        l = Tt;
        be = i.stateNode.containerInfo;
        Tt = true;
        hn(e, n, i);
        be = s;
        Tt = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!je && (s = i.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          l = s = s.next;
          do {
            var f = l;
            var p = f.destroy;
            f = f.tag;
            if (p !== undefined && ((f & 2) !== 0 || (f & 4) !== 0)) {
              Da(i, n, p);
            }
            l = l.next;
          } while (l !== s);
        }
        hn(e, n, i);
        break;
      case 1:
        if (!je && (gr(i, n), s = i.stateNode, typeof s.componentWillUnmount == "function")) {
          try {
            s.props = i.memoizedProps;
            s.state = i.memoizedState;
            s.componentWillUnmount();
          } catch (y) {
            Ie(i, n, y);
          }
        }
        hn(e, n, i);
        break;
      case 21:
        hn(e, n, i);
        break;
      case 22:
        if (i.mode & 1) {
          je = (s = je) || i.memoizedState !== null;
          hn(e, n, i);
          je = s;
        } else {
          hn(e, n, i);
        }
        break;
      default:
        hn(e, n, i);
    }
  }
  function zf(e) {
    var n = e.updateQueue;
    if (n !== null) {
      e.updateQueue = null;
      var i = e.stateNode;
      if (i === null) {
        i = e.stateNode = new Hg();
      }
      n.forEach(function (s) {
        var l = Yg.bind(null, e, s);
        if (!i.has(s)) {
          i.add(s);
          s.then(l, l);
        }
      });
    }
  }
  function xt(e, n) {
    var i = n.deletions;
    if (i !== null) {
      for (var s = 0; s < i.length; s++) {
        var l = i[s];
        try {
          var f = e;
          var p = n;
          var y = p;
          e: while (y !== null) {
            switch (y.tag) {
              case 5:
                be = y.stateNode;
                Tt = false;
                break e;
              case 3:
                be = y.stateNode.containerInfo;
                Tt = true;
                break e;
              case 4:
                be = y.stateNode.containerInfo;
                Tt = true;
                break e;
            }
            y = y.return;
          }
          if (be === null) {
            throw Error(o(160));
          }
          jf(f, p, l);
          be = null;
          Tt = false;
          var _ = l.alternate;
          if (_ !== null) {
            _.return = null;
          }
          l.return = null;
        } catch (I) {
          Ie(l, n, I);
        }
      }
    }
    if (n.subtreeFlags & 12854) {
      for (n = n.child; n !== null;) {
        $f(n, e);
        n = n.sibling;
      }
    }
  }
  function $f(e, n) {
    var i = e.alternate;
    var s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        xt(n, e);
        At(e);
        if (s & 4) {
          try {
            ci(3, e, e.return);
            So(3, e);
          } catch (z) {
            Ie(e, e.return, z);
          }
          try {
            ci(5, e, e.return);
          } catch (z) {
            Ie(e, e.return, z);
          }
        }
        break;
      case 1:
        xt(n, e);
        At(e);
        if (s & 512 && i !== null) {
          gr(i, i.return);
        }
        break;
      case 5:
        xt(n, e);
        At(e);
        if (s & 512 && i !== null) {
          gr(i, i.return);
        }
        if (e.flags & 32) {
          var l = e.stateNode;
          try {
            Lr(l, "");
          } catch (z) {
            Ie(e, e.return, z);
          }
        }
        if (s & 4 && (l = e.stateNode, l != null)) {
          var f = e.memoizedProps;
          var p = i !== null ? i.memoizedProps : f;
          var y = e.type;
          var _ = e.updateQueue;
          e.updateQueue = null;
          if (_ !== null) {
            try {
              if (y === "input" && f.type === "radio" && f.name != null) {
                gl(l, f);
              }
              hs(y, p);
              var I = hs(y, f);
              for (p = 0; p < _.length; p += 2) {
                var R = _[p];
                var L = _[p + 1];
                if (R === "style") {
                  xl(l, L);
                } else if (R === "dangerouslySetInnerHTML") {
                  wl(l, L);
                } else if (R === "children") {
                  Lr(l, L);
                } else {
                  Q(l, R, L, I);
                }
              }
              switch (y) {
                case "input":
                  ls(l, f);
                  break;
                case "textarea":
                  _l(l, f);
                  break;
                case "select":
                  var C = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!f.multiple;
                  var F = f.value;
                  if (F != null) {
                    Qn(l, !!f.multiple, F, false);
                  } else if (C !== !!f.multiple) {
                    if (f.defaultValue != null) {
                      Qn(l, !!f.multiple, f.defaultValue, true);
                    } else {
                      Qn(l, !!f.multiple, f.multiple ? [] : "", false);
                    }
                  }
              }
              l[Jr] = f;
            } catch (z) {
              Ie(e, e.return, z);
            }
          }
        }
        break;
      case 6:
        xt(n, e);
        At(e);
        if (s & 4) {
          if (e.stateNode === null) {
            throw Error(o(162));
          }
          l = e.stateNode;
          f = e.memoizedProps;
          try {
            l.nodeValue = f;
          } catch (z) {
            Ie(e, e.return, z);
          }
        }
        break;
      case 3:
        xt(n, e);
        At(e);
        if (s & 4 && i !== null && i.memoizedState.isDehydrated) {
          try {
            zr(n.containerInfo);
          } catch (z) {
            Ie(e, e.return, z);
          }
        }
        break;
      case 4:
        xt(n, e);
        At(e);
        break;
      case 13:
        xt(n, e);
        At(e);
        l = e.child;
        if (l.flags & 8192) {
          f = l.memoizedState !== null;
          l.stateNode.isHidden = f;
          if (!!f && (l.alternate === null || l.alternate.memoizedState === null)) {
            Ua = Ne();
          }
        }
        if (s & 4) {
          zf(e);
        }
        break;
      case 22:
        R = i !== null && i.memoizedState !== null;
        if (e.mode & 1) {
          je = (I = je) || R;
          xt(n, e);
          je = I;
        } else {
          xt(n, e);
        }
        At(e);
        if (s & 8192) {
          I = e.memoizedState !== null;
          if ((e.stateNode.isHidden = I) && !R && (e.mode & 1) !== 0) {
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
                    ci(4, C, C.return);
                    break;
                  case 1:
                    gr(C, C.return);
                    var j = C.stateNode;
                    if (typeof j.componentWillUnmount == "function") {
                      s = C;
                      i = C.return;
                      try {
                        n = s;
                        j.props = n.memoizedProps;
                        j.state = n.memoizedState;
                        j.componentWillUnmount();
                      } catch (z) {
                        Ie(s, i, z);
                      }
                    }
                    break;
                  case 5:
                    gr(C, C.return);
                    break;
                  case 22:
                    if (C.memoizedState !== null) {
                      Wf(L);
                      continue;
                    }
                }
                if (F !== null) {
                  F.return = C;
                  B = F;
                } else {
                  Wf(L);
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
                  if (I) {
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
                    y.style.display = Tl("display", p);
                  }
                } catch (z) {
                  Ie(e, e.return, z);
                }
              }
            } else if (L.tag === 6) {
              if (R === null) {
                try {
                  L.stateNode.nodeValue = I ? "" : L.memoizedProps;
                } catch (z) {
                  Ie(e, e.return, z);
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
        xt(n, e);
        At(e);
        if (s & 4) {
          zf(e);
        }
        break;
      case 21:
        break;
      default:
        xt(n, e);
        At(e);
    }
  }
  function At(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        e: {
          for (var i = e.return; i !== null;) {
            if (Bf(i)) {
              var s = i;
              break e;
            }
            i = i.return;
          }
          throw Error(o(160));
        }
        switch (s.tag) {
          case 5:
            var l = s.stateNode;
            if (s.flags & 32) {
              Lr(l, "");
              s.flags &= -33;
            }
            var f = Uf(e);
            Fa(e, f, l);
            break;
          case 3:
          case 4:
            var p = s.stateNode.containerInfo;
            var y = Uf(e);
            ba(e, y, p);
            break;
          default:
            throw Error(o(161));
        }
      } catch (_) {
        Ie(e, e.return, _);
      }
      e.flags &= -3;
    }
    if (n & 4096) {
      e.flags &= -4097;
    }
  }
  function Ug(e, n, i) {
    B = e;
    Gf(e);
  }
  function Gf(e, n, i) {
    var s = (e.mode & 1) !== 0;
    for (; B !== null;) {
      var l = B;
      var f = l.child;
      if (l.tag === 22 && s) {
        var p = l.memoizedState !== null || Eo;
        if (!p) {
          var y = l.alternate;
          var _ = y !== null && y.memoizedState !== null || je;
          y = Eo;
          var I = je;
          Eo = p;
          if ((je = _) && !I) {
            for (B = l; B !== null;) {
              p = B;
              _ = p.child;
              if (p.tag === 22 && p.memoizedState !== null) {
                Xf(l);
              } else if (_ !== null) {
                _.return = p;
                B = _;
              } else {
                Xf(l);
              }
            }
          }
          while (f !== null) {
            B = f;
            Gf(f);
            f = f.sibling;
          }
          B = l;
          Eo = y;
          je = I;
        }
        Vf(e);
      } else if ((l.subtreeFlags & 8772) !== 0 && f !== null) {
        f.return = l;
        B = f;
      } else {
        Vf(e);
      }
    }
  }
  function Vf(e) {
    while (B !== null) {
      var n = B;
      if ((n.flags & 8772) !== 0) {
        var i = n.alternate;
        try {
          if ((n.flags & 8772) !== 0) {
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                if (!je) {
                  So(5, n);
                }
                break;
              case 1:
                var s = n.stateNode;
                if (n.flags & 4 && !je) {
                  if (i === null) {
                    s.componentDidMount();
                  } else {
                    var l = n.elementType === n.type ? i.memoizedProps : wt(n.type, i.memoizedProps);
                    s.componentDidUpdate(l, i.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
                  }
                }
                var f = n.updateQueue;
                if (f !== null) {
                  Vc(n, f, s);
                }
                break;
              case 3:
                var p = n.updateQueue;
                if (p !== null) {
                  i = null;
                  if (n.child !== null) {
                    switch (n.child.tag) {
                      case 5:
                        i = n.child.stateNode;
                        break;
                      case 1:
                        i = n.child.stateNode;
                    }
                  }
                  Vc(n, p, i);
                }
                break;
              case 5:
                var y = n.stateNode;
                if (i === null && n.flags & 4) {
                  i = y;
                  var _ = n.memoizedProps;
                  switch (n.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      if (_.autoFocus) {
                        i.focus();
                      }
                      break;
                    case "img":
                      if (_.src) {
                        i.src = _.src;
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
                  var I = n.alternate;
                  if (I !== null) {
                    var R = I.memoizedState;
                    if (R !== null) {
                      var L = R.dehydrated;
                      if (L !== null) {
                        zr(L);
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
                throw Error(o(163));
            }
          }
          if (!je) {
            if (n.flags & 512) {
              Ma(n);
            }
          }
        } catch (C) {
          Ie(n, n.return, C);
        }
      }
      if (n === e) {
        B = null;
        break;
      }
      i = n.sibling;
      if (i !== null) {
        i.return = n.return;
        B = i;
        break;
      }
      B = n.return;
    }
  }
  function Wf(e) {
    while (B !== null) {
      var n = B;
      if (n === e) {
        B = null;
        break;
      }
      var i = n.sibling;
      if (i !== null) {
        i.return = n.return;
        B = i;
        break;
      }
      B = n.return;
    }
  }
  function Xf(e) {
    while (B !== null) {
      var n = B;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var i = n.return;
            try {
              So(4, n);
            } catch (_) {
              Ie(n, i, _);
            }
            break;
          case 1:
            var s = n.stateNode;
            if (typeof s.componentDidMount == "function") {
              var l = n.return;
              try {
                s.componentDidMount();
              } catch (_) {
                Ie(n, l, _);
              }
            }
            var f = n.return;
            try {
              Ma(n);
            } catch (_) {
              Ie(n, f, _);
            }
            break;
          case 5:
            var p = n.return;
            try {
              Ma(n);
            } catch (_) {
              Ie(n, p, _);
            }
        }
      } catch (_) {
        Ie(n, n.return, _);
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
  var jg = Math.ceil;
  var wo = ie.ReactCurrentDispatcher;
  var Ha = ie.ReactCurrentOwner;
  var ht = ie.ReactCurrentBatchConfig;
  var se = 0;
  var De = null;
  var Pe = null;
  var Fe = 0;
  var at = 0;
  var yr = ln(0);
  var Oe = 0;
  var fi = null;
  var Mn = 0;
  var To = 0;
  var Ba = 0;
  var di = null;
  var Ze = null;
  var Ua = 0;
  var vr = Infinity;
  var Qt = null;
  var xo = false;
  var ja = null;
  var mn = null;
  var Io = false;
  var gn = null;
  var No = 0;
  var pi = 0;
  var za = null;
  var ko = -1;
  var Co = 0;
  function Ve() {
    if ((se & 6) !== 0) {
      return Ne();
    } else if (ko !== -1) {
      return ko;
    } else {
      return ko = Ne();
    }
  }
  function yn(e) {
    if ((e.mode & 1) === 0) {
      return 1;
    } else if ((se & 2) !== 0 && Fe !== 0) {
      return Fe & -Fe;
    } else if (xg.transition !== null) {
      if (Co === 0) {
        Co = Bl();
      }
      return Co;
    } else {
      e = pe;
      if (e === 0) {
        e = window.event;
        e = e === undefined ? 16 : Yl(e.type);
      }
      return e;
    }
  }
  function It(e, n, i, s) {
    if (pi > 50) {
      pi = 0;
      za = null;
      throw Error(o(185));
    }
    Fr(e, i, s);
    if ((se & 2) === 0 || e !== De) {
      if (e === De) {
        if ((se & 2) === 0) {
          To |= i;
        }
        if (Oe === 4) {
          vn(e, Fe);
        }
      }
      Je(e, s);
      if (i === 1 && se === 0 && (n.mode & 1) === 0) {
        vr = Ne() + 500;
        if (to) {
          fn();
        }
      }
    }
  }
  function Je(e, n) {
    var i = e.callbackNode;
    xm(e, n);
    var s = bi(e, e === De ? Fe : 0);
    if (s === 0) {
      if (i !== null) {
        bl(i);
      }
      e.callbackNode = null;
      e.callbackPriority = 0;
    } else {
      n = s & -s;
      if (e.callbackPriority !== n) {
        if (i != null) {
          bl(i);
        }
        if (n === 1) {
          if (e.tag === 0) {
            Tg(Qf.bind(null, e));
          } else {
            Ac(Qf.bind(null, e));
          }
          _g(function () {
            if ((se & 6) === 0) {
              fn();
            }
          });
          i = null;
        } else {
          switch (Ul(s)) {
            case 1:
              i = Ss;
              break;
            case 4:
              i = Fl;
              break;
            case 16:
              i = Oi;
              break;
            case 536870912:
              i = Hl;
              break;
            default:
              i = Oi;
          }
          i = rd(i, Yf.bind(null, e));
        }
        e.callbackPriority = n;
        e.callbackNode = i;
      }
    }
  }
  function Yf(e, n) {
    ko = -1;
    Co = 0;
    if ((se & 6) !== 0) {
      throw Error(o(327));
    }
    var i = e.callbackNode;
    if (_r() && e.callbackNode !== i) {
      return null;
    }
    var s = bi(e, e === De ? Fe : 0);
    if (s === 0) {
      return null;
    }
    if ((s & 30) !== 0 || (s & e.expiredLanes) !== 0 || n) {
      n = Po(e, s);
    } else {
      n = s;
      var l = se;
      se |= 2;
      var f = qf();
      if (De !== e || Fe !== n) {
        Qt = null;
        vr = Ne() + 500;
        Fn(e, n);
      }
      do {
        try {
          Gg();
          break;
        } catch (y) {
          Kf(e, y);
        }
      } while (true);
      sa();
      wo.current = f;
      se = l;
      if (Pe !== null) {
        n = 0;
      } else {
        De = null;
        Fe = 0;
        n = Oe;
      }
    }
    if (n !== 0) {
      if (n === 2) {
        l = ws(e);
        if (l !== 0) {
          s = l;
          n = $a(e, l);
        }
      }
      if (n === 1) {
        i = fi;
        Fn(e, 0);
        vn(e, s);
        Je(e, Ne());
        throw i;
      }
      if (n === 6) {
        vn(e, s);
      } else {
        l = e.current.alternate;
        if ((s & 30) === 0 && !zg(l) && (n = Po(e, s), n === 2 && (f = ws(e), f !== 0 && (s = f, n = $a(e, f))), n === 1)) {
          i = fi;
          Fn(e, 0);
          vn(e, s);
          Je(e, Ne());
          throw i;
        }
        e.finishedWork = l;
        e.finishedLanes = s;
        switch (n) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            Hn(e, Ze, Qt);
            break;
          case 3:
            vn(e, s);
            if ((s & 130023424) === s && (n = Ua + 500 - Ne(), n > 10)) {
              if (bi(e, 0) !== 0) {
                break;
              }
              l = e.suspendedLanes;
              if ((l & s) !== s) {
                Ve();
                e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = Qs(Hn.bind(null, e, Ze, Qt), n);
              break;
            }
            Hn(e, Ze, Qt);
            break;
          case 4:
            vn(e, s);
            if ((s & 4194240) === s) {
              break;
            }
            n = e.eventTimes;
            l = -1;
            while (s > 0) {
              var p = 31 - _t(s);
              f = 1 << p;
              p = n[p];
              if (p > l) {
                l = p;
              }
              s &= ~f;
            }
            s = l;
            s = Ne() - s;
            s = (s < 120 ? 120 : s < 480 ? 480 : s < 1080 ? 1080 : s < 1920 ? 1920 : s < 3000 ? 3000 : s < 4320 ? 4320 : jg(s / 1960) * 1960) - s;
            if (s > 10) {
              e.timeoutHandle = Qs(Hn.bind(null, e, Ze, Qt), s);
              break;
            }
            Hn(e, Ze, Qt);
            break;
          case 5:
            Hn(e, Ze, Qt);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    Je(e, Ne());
    if (e.callbackNode === i) {
      return Yf.bind(null, e);
    } else {
      return null;
    }
  }
  function $a(e, n) {
    var i = di;
    if (e.current.memoizedState.isDehydrated) {
      Fn(e, n).flags |= 256;
    }
    e = Po(e, n);
    if (e !== 2) {
      n = Ze;
      Ze = i;
      if (n !== null) {
        Ga(n);
      }
    }
    return e;
  }
  function Ga(e) {
    if (Ze === null) {
      Ze = e;
    } else {
      Ze.push.apply(Ze, e);
    }
  }
  function zg(e) {
    var n = e;
    for (;;) {
      if (n.flags & 16384) {
        var i = n.updateQueue;
        if (i !== null && (i = i.stores, i !== null)) {
          for (var s = 0; s < i.length; s++) {
            var l = i[s];
            var f = l.getSnapshot;
            l = l.value;
            try {
              if (!Et(f(), l)) {
                return false;
              }
            } catch {
              return false;
            }
          }
        }
      }
      i = n.child;
      if (n.subtreeFlags & 16384 && i !== null) {
        i.return = n;
        n = i;
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
  function vn(e, n) {
    n &= ~Ba;
    n &= ~To;
    e.suspendedLanes |= n;
    e.pingedLanes &= ~n;
    e = e.expirationTimes;
    while (n > 0) {
      var i = 31 - _t(n);
      var s = 1 << i;
      e[i] = -1;
      n &= ~s;
    }
  }
  function Qf(e) {
    if ((se & 6) !== 0) {
      throw Error(o(327));
    }
    _r();
    var n = bi(e, 0);
    if ((n & 1) === 0) {
      Je(e, Ne());
      return null;
    }
    var i = Po(e, n);
    if (e.tag !== 0 && i === 2) {
      var s = ws(e);
      if (s !== 0) {
        n = s;
        i = $a(e, s);
      }
    }
    if (i === 1) {
      i = fi;
      Fn(e, 0);
      vn(e, n);
      Je(e, Ne());
      throw i;
    }
    if (i === 6) {
      throw Error(o(345));
    }
    e.finishedWork = e.current.alternate;
    e.finishedLanes = n;
    Hn(e, Ze, Qt);
    Je(e, Ne());
    return null;
  }
  function Va(e, n) {
    var i = se;
    se |= 1;
    try {
      return e(n);
    } finally {
      se = i;
      if (se === 0) {
        vr = Ne() + 500;
        if (to) {
          fn();
        }
      }
    }
  }
  function bn(e) {
    if (gn !== null && gn.tag === 0 && (se & 6) === 0) {
      _r();
    }
    var n = se;
    se |= 1;
    var i = ht.transition;
    var s = pe;
    try {
      ht.transition = null;
      pe = 1;
      if (e) {
        return e();
      }
    } finally {
      pe = s;
      ht.transition = i;
      se = n;
      if ((se & 6) === 0) {
        fn();
      }
    }
  }
  function Wa() {
    at = yr.current;
    ve(yr);
  }
  function Fn(e, n) {
    e.finishedWork = null;
    e.finishedLanes = 0;
    var i = e.timeoutHandle;
    if (i !== -1) {
      e.timeoutHandle = -1;
      vg(i);
    }
    if (Pe !== null) {
      for (i = Pe.return; i !== null;) {
        var s = i;
        ta(s);
        switch (s.tag) {
          case 1:
            s = s.type.childContextTypes;
            if (s != null) {
              Ji();
            }
            break;
          case 3:
            hr();
            ve(Qe);
            ve(He);
            ha();
            break;
          case 5:
            da(s);
            break;
          case 4:
            hr();
            break;
          case 13:
            ve(we);
            break;
          case 19:
            ve(we);
            break;
          case 10:
            aa(s.type._context);
            break;
          case 22:
          case 23:
            Wa();
        }
        i = i.return;
      }
    }
    De = e;
    Pe = e = _n(e.current, null);
    Fe = at = n;
    Oe = 0;
    fi = null;
    Ba = To = Mn = 0;
    Ze = di = null;
    if (On !== null) {
      for (n = 0; n < On.length; n++) {
        i = On[n];
        s = i.interleaved;
        if (s !== null) {
          i.interleaved = null;
          var l = s.next;
          var f = i.pending;
          if (f !== null) {
            var p = f.next;
            f.next = l;
            s.next = p;
          }
          i.pending = s;
        }
      }
      On = null;
    }
    return e;
  }
  function Kf(e, n) {
    do {
      var i = Pe;
      try {
        sa();
        fo.current = go;
        if (po) {
          for (var s = Te.memoizedState; s !== null;) {
            var l = s.queue;
            if (l !== null) {
              l.pending = null;
            }
            s = s.next;
          }
          po = false;
        }
        Dn = 0;
        Ae = Le = Te = null;
        oi = false;
        si = 0;
        Ha.current = null;
        if (i === null || i.return === null) {
          Oe = 1;
          fi = n;
          Pe = null;
          break;
        }
        e: {
          var f = e;
          var p = i.return;
          var y = i;
          var _ = n;
          n = Fe;
          y.flags |= 32768;
          if (_ !== null && typeof _ == "object" && typeof _.then == "function") {
            var I = _;
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
            var F = Sf(p);
            if (F !== null) {
              F.flags &= -257;
              wf(F, p, y, f, n);
              if (F.mode & 1) {
                Ef(f, I, n);
              }
              n = F;
              _ = I;
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
                Ef(f, I, n);
                Xa();
                break e;
              }
              _ = Error(o(426));
            }
          } else if (Se && y.mode & 1) {
            var ke = Sf(p);
            if (ke !== null) {
              if ((ke.flags & 65536) === 0) {
                ke.flags |= 256;
              }
              wf(ke, p, y, f, n);
              ia(mr(_, y));
              break e;
            }
          }
          f = _ = mr(_, y);
          if (Oe !== 4) {
            Oe = 2;
          }
          if (di === null) {
            di = [f];
          } else {
            di.push(f);
          }
          f = p;
          do {
            switch (f.tag) {
              case 3:
                f.flags |= 65536;
                n &= -n;
                f.lanes |= n;
                var T = vf(f, _, n);
                Gc(f, T);
                break e;
              case 1:
                y = _;
                var E = f.type;
                var x = f.stateNode;
                if ((f.flags & 128) === 0 && (typeof E.getDerivedStateFromError == "function" || x !== null && typeof x.componentDidCatch == "function" && (mn === null || !mn.has(x)))) {
                  f.flags |= 65536;
                  n &= -n;
                  f.lanes |= n;
                  var O = _f(f, y, n);
                  Gc(f, O);
                  break e;
                }
            }
            f = f.return;
          } while (f !== null);
        }
        Jf(i);
      } catch (G) {
        n = G;
        if (Pe === i && i !== null) {
          Pe = i = i.return;
        }
        continue;
      }
      break;
    } while (true);
  }
  function qf() {
    var e = wo.current;
    wo.current = go;
    if (e === null) {
      return go;
    } else {
      return e;
    }
  }
  function Xa() {
    if (Oe === 0 || Oe === 3 || Oe === 2) {
      Oe = 4;
    }
    if (De !== null && ((Mn & 268435455) !== 0 || (To & 268435455) !== 0)) {
      vn(De, Fe);
    }
  }
  function Po(e, n) {
    var i = se;
    se |= 2;
    var s = qf();
    if (De !== e || Fe !== n) {
      Qt = null;
      Fn(e, n);
    }
    do {
      try {
        $g();
        break;
      } catch (l) {
        Kf(e, l);
      }
    } while (true);
    sa();
    se = i;
    wo.current = s;
    if (Pe !== null) {
      throw Error(o(261));
    }
    De = null;
    Fe = 0;
    return Oe;
  }
  function $g() {
    while (Pe !== null) {
      Zf(Pe);
    }
  }
  function Gg() {
    while (Pe !== null && !mm()) {
      Zf(Pe);
    }
  }
  function Zf(e) {
    var n = nd(e.alternate, e, at);
    e.memoizedProps = e.pendingProps;
    if (n === null) {
      Jf(e);
    } else {
      Pe = n;
    }
    Ha.current = null;
  }
  function Jf(e) {
    var n = e;
    do {
      var i = n.alternate;
      e = n.return;
      if ((n.flags & 32768) === 0) {
        i = bg(i, n, at);
        if (i !== null) {
          Pe = i;
          return;
        }
      } else {
        i = Fg(i, n);
        if (i !== null) {
          i.flags &= 32767;
          Pe = i;
          return;
        }
        if (e !== null) {
          e.flags |= 32768;
          e.subtreeFlags = 0;
          e.deletions = null;
        } else {
          Oe = 6;
          Pe = null;
          return;
        }
      }
      n = n.sibling;
      if (n !== null) {
        Pe = n;
        return;
      }
      Pe = n = e;
    } while (n !== null);
    if (Oe === 0) {
      Oe = 5;
    }
  }
  function Hn(e, n, i) {
    var s = pe;
    var l = ht.transition;
    try {
      ht.transition = null;
      pe = 1;
      Vg(e, n, i, s);
    } finally {
      ht.transition = l;
      pe = s;
    }
    return null;
  }
  function Vg(e, n, i, s) {
    do {
      _r();
    } while (gn !== null);
    if ((se & 6) !== 0) {
      throw Error(o(327));
    }
    i = e.finishedWork;
    var l = e.finishedLanes;
    if (i === null) {
      return null;
    }
    e.finishedWork = null;
    e.finishedLanes = 0;
    if (i === e.current) {
      throw Error(o(177));
    }
    e.callbackNode = null;
    e.callbackPriority = 0;
    var f = i.lanes | i.childLanes;
    Im(e, f);
    if (e === De) {
      Pe = De = null;
      Fe = 0;
    }
    if (((i.subtreeFlags & 2064) !== 0 || (i.flags & 2064) !== 0) && !Io) {
      Io = true;
      rd(Oi, function () {
        _r();
        return null;
      });
    }
    f = (i.flags & 15990) !== 0;
    if ((i.subtreeFlags & 15990) !== 0 || f) {
      f = ht.transition;
      ht.transition = null;
      var p = pe;
      pe = 1;
      var y = se;
      se |= 4;
      Ha.current = null;
      Bg(e, i);
      $f(i, e);
      fg(Xs);
      Bi = !!Ws;
      Xs = Ws = null;
      e.current = i;
      Ug(i);
      gm();
      se = y;
      pe = p;
      ht.transition = f;
    } else {
      e.current = i;
    }
    if (Io) {
      Io = false;
      gn = e;
      No = l;
    }
    f = e.pendingLanes;
    if (f === 0) {
      mn = null;
    }
    _m(i.stateNode);
    Je(e, Ne());
    if (n !== null) {
      s = e.onRecoverableError;
      i = 0;
      for (; i < n.length; i++) {
        l = n[i];
        s(l.value, {
          componentStack: l.stack,
          digest: l.digest
        });
      }
    }
    if (xo) {
      xo = false;
      e = ja;
      ja = null;
      throw e;
    }
    if ((No & 1) !== 0 && e.tag !== 0) {
      _r();
    }
    f = e.pendingLanes;
    if ((f & 1) !== 0) {
      if (e === za) {
        pi++;
      } else {
        pi = 0;
        za = e;
      }
    } else {
      pi = 0;
    }
    fn();
    return null;
  }
  function _r() {
    if (gn !== null) {
      var e = Ul(No);
      var n = ht.transition;
      var i = pe;
      try {
        ht.transition = null;
        pe = e < 16 ? 16 : e;
        if (gn === null) {
          var s = false;
        } else {
          e = gn;
          gn = null;
          No = 0;
          if ((se & 6) !== 0) {
            throw Error(o(331));
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
                  var I = y[_];
                  for (B = I; B !== null;) {
                    var R = B;
                    switch (R.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ci(8, R, f);
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
                        Hf(R);
                        if (R === I) {
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
                      var ke = z.sibling;
                      z.sibling = null;
                      z = ke;
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
                      ci(9, f, f.return);
                  }
                }
                var T = f.sibling;
                if (T !== null) {
                  T.return = f.return;
                  B = T;
                  break e;
                }
                B = f.return;
              }
            }
          }
          var E = e.current;
          for (B = E; B !== null;) {
            p = B;
            var x = p.child;
            if ((p.subtreeFlags & 2064) !== 0 && x !== null) {
              x.return = p;
              B = x;
            } else {
              e: for (p = E; B !== null;) {
                y = B;
                if ((y.flags & 2048) !== 0) {
                  try {
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        So(9, y);
                    }
                  } catch (G) {
                    Ie(y, y.return, G);
                  }
                }
                if (y === p) {
                  B = null;
                  break e;
                }
                var O = y.sibling;
                if (O !== null) {
                  O.return = y.return;
                  B = O;
                  break e;
                }
                B = y.return;
              }
            }
          }
          se = l;
          fn();
          if (Pt && typeof Pt.onPostCommitFiberRoot == "function") {
            try {
              Pt.onPostCommitFiberRoot(Ai, e);
            } catch {}
          }
          s = true;
        }
        return s;
      } finally {
        pe = i;
        ht.transition = n;
      }
    }
    return false;
  }
  function ed(e, n, i) {
    n = mr(i, n);
    n = vf(e, n, 1);
    e = pn(e, n, 1);
    n = Ve();
    if (e !== null) {
      Fr(e, 1, n);
      Je(e, n);
    }
  }
  function Ie(e, n, i) {
    if (e.tag === 3) {
      ed(e, e, i);
    } else {
      while (n !== null) {
        if (n.tag === 3) {
          ed(n, e, i);
          break;
        } else if (n.tag === 1) {
          var s = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (mn === null || !mn.has(s))) {
            e = mr(i, e);
            e = _f(n, e, 1);
            n = pn(n, e, 1);
            e = Ve();
            if (n !== null) {
              Fr(n, 1, e);
              Je(n, e);
            }
            break;
          }
        }
        n = n.return;
      }
    }
  }
  function Wg(e, n, i) {
    var s = e.pingCache;
    if (s !== null) {
      s.delete(n);
    }
    n = Ve();
    e.pingedLanes |= e.suspendedLanes & i;
    if (De === e && (Fe & i) === i) {
      if (Oe === 4 || Oe === 3 && (Fe & 130023424) === Fe && Ne() - Ua < 500) {
        Fn(e, 0);
      } else {
        Ba |= i;
      }
    }
    Je(e, n);
  }
  function td(e, n) {
    if (n === 0) {
      if ((e.mode & 1) === 0) {
        n = 1;
      } else {
        n = Mi;
        Mi <<= 1;
        if ((Mi & 130023424) === 0) {
          Mi = 4194304;
        }
      }
    }
    var i = Ve();
    e = Wt(e, n);
    if (e !== null) {
      Fr(e, n, i);
      Je(e, i);
    }
  }
  function Xg(e) {
    var n = e.memoizedState;
    var i = 0;
    if (n !== null) {
      i = n.retryLane;
    }
    td(e, i);
  }
  function Yg(e, n) {
    var i = 0;
    switch (e.tag) {
      case 13:
        var s = e.stateNode;
        var l = e.memoizedState;
        if (l !== null) {
          i = l.retryLane;
        }
        break;
      case 19:
        s = e.stateNode;
        break;
      default:
        throw Error(o(314));
    }
    if (s !== null) {
      s.delete(n);
    }
    td(e, i);
  }
  var nd;
  nd = function (e, n, i) {
    if (e !== null) {
      if (e.memoizedProps !== n.pendingProps || Qe.current) {
        qe = true;
      } else {
        if ((e.lanes & i) === 0 && (n.flags & 128) === 0) {
          qe = false;
          return Mg(e, n, i);
        }
        qe = (e.flags & 131072) !== 0;
      }
    } else {
      qe = false;
      if (Se && (n.flags & 1048576) !== 0) {
        Dc(n, ro, n.index);
      }
    }
    n.lanes = 0;
    switch (n.tag) {
      case 2:
        var s = n.type;
        _o(e, n);
        e = n.pendingProps;
        var l = ar(n, He.current);
        pr(n, i);
        l = ya(null, n, s, e, l, i);
        var f = va();
        n.flags |= 1;
        if (typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === undefined) {
          n.tag = 1;
          n.memoizedState = null;
          n.updateQueue = null;
          if (Ke(s)) {
            f = true;
            eo(n);
          } else {
            f = false;
          }
          n.memoizedState = l.state ?? null;
          ca(n);
          l.updater = yo;
          n.stateNode = l;
          l._reactInternals = n;
          xa(n, s, e, i);
          n = Ca(null, n, s, true, f, i);
        } else {
          n.tag = 0;
          if (Se && f) {
            ea(n);
          }
          Ge(null, n, l, i);
          n = n.child;
        }
        return n;
      case 16:
        s = n.elementType;
        e: {
          _o(e, n);
          e = n.pendingProps;
          l = s._init;
          s = l(s._payload);
          n.type = s;
          l = n.tag = Kg(s);
          e = wt(s, e);
          switch (l) {
            case 0:
              n = ka(null, n, s, e, i);
              break e;
            case 1:
              n = Cf(null, n, s, e, i);
              break e;
            case 11:
              n = Tf(null, n, s, e, i);
              break e;
            case 14:
              n = xf(null, n, s, wt(s.type, e), i);
              break e;
          }
          throw Error(o(306, s, ""));
        }
        return n;
      case 0:
        s = n.type;
        l = n.pendingProps;
        l = n.elementType === s ? l : wt(s, l);
        return ka(e, n, s, l, i);
      case 1:
        s = n.type;
        l = n.pendingProps;
        l = n.elementType === s ? l : wt(s, l);
        return Cf(e, n, s, l, i);
      case 3:
        e: {
          Pf(n);
          if (e === null) {
            throw Error(o(387));
          }
          s = n.pendingProps;
          f = n.memoizedState;
          l = f.element;
          $c(e, n);
          lo(n, s, null, i);
          var p = n.memoizedState;
          s = p.element;
          if (f.isDehydrated) {
            f = {
              element: s,
              isDehydrated: false,
              cache: p.cache,
              pendingSuspenseBoundaries: p.pendingSuspenseBoundaries,
              transitions: p.transitions
            };
            n.updateQueue.baseState = f;
            n.memoizedState = f;
            if (n.flags & 256) {
              l = mr(Error(o(423)), n);
              n = Rf(e, n, s, i, l);
              break e;
            } else if (s !== l) {
              l = mr(Error(o(424)), n);
              n = Rf(e, n, s, i, l);
              break e;
            } else {
              st = un(n.stateNode.containerInfo.firstChild);
              ot = n;
              Se = true;
              St = null;
              i = jc(n, null, s, i);
              n.child = i;
              while (i) {
                i.flags = i.flags & -3 | 4096;
                i = i.sibling;
              }
            }
          } else {
            cr();
            if (s === l) {
              n = Yt(e, n, i);
              break e;
            }
            Ge(e, n, s, i);
          }
          n = n.child;
        }
        return n;
      case 5:
        Wc(n);
        if (e === null) {
          ra(n);
        }
        s = n.type;
        l = n.pendingProps;
        f = e !== null ? e.memoizedProps : null;
        p = l.children;
        if (Ys(s, l)) {
          p = null;
        } else if (f !== null && Ys(s, f)) {
          n.flags |= 32;
        }
        kf(e, n);
        Ge(e, n, p, i);
        return n.child;
      case 6:
        if (e === null) {
          ra(n);
        }
        return null;
      case 13:
        return Lf(e, n, i);
      case 4:
        fa(n, n.stateNode.containerInfo);
        s = n.pendingProps;
        if (e === null) {
          n.child = fr(n, null, s, i);
        } else {
          Ge(e, n, s, i);
        }
        return n.child;
      case 11:
        s = n.type;
        l = n.pendingProps;
        l = n.elementType === s ? l : wt(s, l);
        return Tf(e, n, s, l, i);
      case 7:
        Ge(e, n, n.pendingProps, i);
        return n.child;
      case 8:
        Ge(e, n, n.pendingProps.children, i);
        return n.child;
      case 12:
        Ge(e, n, n.pendingProps.children, i);
        return n.child;
      case 10:
        e: {
          s = n.type._context;
          l = n.pendingProps;
          f = n.memoizedProps;
          p = l.value;
          ge(so, s._currentValue);
          s._currentValue = p;
          if (f !== null) {
            if (Et(f.value, p)) {
              if (f.children === l.children && !Qe.current) {
                n = Yt(e, n, i);
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
                    if (_.context === s) {
                      if (f.tag === 1) {
                        _ = Xt(-1, i & -i);
                        _.tag = 2;
                        var I = f.updateQueue;
                        if (I !== null) {
                          I = I.shared;
                          var R = I.pending;
                          if (R === null) {
                            _.next = _;
                          } else {
                            _.next = R.next;
                            R.next = _;
                          }
                          I.pending = _;
                        }
                      }
                      f.lanes |= i;
                      _ = f.alternate;
                      if (_ !== null) {
                        _.lanes |= i;
                      }
                      ua(f.return, i, n);
                      y.lanes |= i;
                      break;
                    }
                    _ = _.next;
                  }
                } else if (f.tag === 10) {
                  p = f.type === n.type ? null : f.child;
                } else if (f.tag === 18) {
                  p = f.return;
                  if (p === null) {
                    throw Error(o(341));
                  }
                  p.lanes |= i;
                  y = p.alternate;
                  if (y !== null) {
                    y.lanes |= i;
                  }
                  ua(p, i, n);
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
          Ge(e, n, l.children, i);
          n = n.child;
        }
        return n;
      case 9:
        l = n.type;
        s = n.pendingProps.children;
        pr(n, i);
        l = dt(l);
        s = s(l);
        n.flags |= 1;
        Ge(e, n, s, i);
        return n.child;
      case 14:
        s = n.type;
        l = wt(s, n.pendingProps);
        l = wt(s.type, l);
        return xf(e, n, s, l, i);
      case 15:
        return If(e, n, n.type, n.pendingProps, i);
      case 17:
        s = n.type;
        l = n.pendingProps;
        l = n.elementType === s ? l : wt(s, l);
        _o(e, n);
        n.tag = 1;
        if (Ke(s)) {
          e = true;
          eo(n);
        } else {
          e = false;
        }
        pr(n, i);
        gf(n, s, l);
        xa(n, s, l, i);
        return Ca(null, n, s, true, e, i);
      case 19:
        return Af(e, n, i);
      case 22:
        return Nf(e, n, i);
    }
    throw Error(o(156, n.tag));
  };
  function rd(e, n) {
    return Ml(e, n);
  }
  function Qg(e, n, i, s) {
    this.tag = e;
    this.key = i;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = n;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = s;
    this.subtreeFlags = this.flags = 0;
    this.deletions = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
  }
  function mt(e, n, i, s) {
    return new Qg(e, n, i, s);
  }
  function Ya(e) {
    e = e.prototype;
    return !!e && !!e.isReactComponent;
  }
  function Kg(e) {
    if (typeof e == "function") {
      if (Ya(e)) {
        return 1;
      } else {
        return 0;
      }
    }
    if (e != null) {
      e = e.$$typeof;
      if (e === kt) {
        return 11;
      }
      if (e === Ct) {
        return 14;
      }
    }
    return 2;
  }
  function _n(e, n) {
    var i = e.alternate;
    if (i === null) {
      i = mt(e.tag, n, e.key, e.mode);
      i.elementType = e.elementType;
      i.type = e.type;
      i.stateNode = e.stateNode;
      i.alternate = e;
      e.alternate = i;
    } else {
      i.pendingProps = n;
      i.type = e.type;
      i.flags = 0;
      i.subtreeFlags = 0;
      i.deletions = null;
    }
    i.flags = e.flags & 14680064;
    i.childLanes = e.childLanes;
    i.lanes = e.lanes;
    i.child = e.child;
    i.memoizedProps = e.memoizedProps;
    i.memoizedState = e.memoizedState;
    i.updateQueue = e.updateQueue;
    n = e.dependencies;
    i.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    };
    i.sibling = e.sibling;
    i.index = e.index;
    i.ref = e.ref;
    return i;
  }
  function Ro(e, n, i, s, l, f) {
    var p = 2;
    s = e;
    if (typeof e == "function") {
      if (Ya(e)) {
        p = 1;
      }
    } else if (typeof e == "string") {
      p = 5;
    } else {
      e: switch (e) {
        case Re:
          return Bn(i.children, l, f, n);
        case tt:
          p = 8;
          l |= 8;
          break;
        case en:
          e = mt(12, i, n, l | 2);
          e.elementType = en;
          e.lanes = f;
          return e;
        case nt:
          e = mt(13, i, n, l);
          e.elementType = nt;
          e.lanes = f;
          return e;
        case vt:
          e = mt(19, i, n, l);
          e.elementType = vt;
          e.lanes = f;
          return e;
        case xe:
          return Lo(i, l, f, n);
        default:
          if (typeof e == "object" && e !== null) {
            switch (e.$$typeof) {
              case jt:
                p = 10;
                break e;
              case Nn:
                p = 9;
                break e;
              case kt:
                p = 11;
                break e;
              case Ct:
                p = 14;
                break e;
              case Ye:
                p = 16;
                s = null;
                break e;
            }
          }
          throw Error(o(130, e == null ? e : typeof e, ""));
      }
    }
    n = mt(p, i, n, l);
    n.elementType = e;
    n.type = s;
    n.lanes = f;
    return n;
  }
  function Bn(e, n, i, s) {
    e = mt(7, e, s, n);
    e.lanes = i;
    return e;
  }
  function Lo(e, n, i, s) {
    e = mt(22, e, s, n);
    e.elementType = xe;
    e.lanes = i;
    e.stateNode = {
      isHidden: false
    };
    return e;
  }
  function Qa(e, n, i) {
    e = mt(6, e, null, n);
    e.lanes = i;
    return e;
  }
  function Ka(e, n, i) {
    n = mt(4, e.children !== null ? e.children : [], e.key, n);
    n.lanes = i;
    n.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    };
    return n;
  }
  function qg(e, n, i, s, l) {
    this.tag = n;
    this.containerInfo = e;
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = -1;
    this.callbackNode = this.pendingContext = this.context = null;
    this.callbackPriority = 0;
    this.eventTimes = Ts(0);
    this.expirationTimes = Ts(-1);
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = Ts(0);
    this.identifierPrefix = s;
    this.onRecoverableError = l;
    this.mutableSourceEagerHydrationData = null;
  }
  function qa(e, n, i, s, l, f, p, y, _) {
    e = new qg(e, n, i, y, _);
    if (n === 1) {
      n = 1;
      if (f === true) {
        n |= 8;
      }
    } else {
      n = 0;
    }
    f = mt(3, null, null, n);
    e.current = f;
    f.stateNode = e;
    f.memoizedState = {
      element: s,
      isDehydrated: i,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    };
    ca(f);
    return e;
  }
  function Zg(e, n, i, s = null) {
    return {
      $$typeof: ce,
      key: s == null ? null : "" + s,
      children: e,
      containerInfo: n,
      implementation: i
    };
  }
  function id(e) {
    if (!e) {
      return cn;
    }
    e = e._reactInternals;
    e: {
      if (kn(e) !== e || e.tag !== 1) {
        throw Error(o(170));
      }
      var n = e;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (Ke(n.type)) {
              n = n.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        n = n.return;
      } while (n !== null);
      throw Error(o(171));
    }
    if (e.tag === 1) {
      var i = e.type;
      if (Ke(i)) {
        return Lc(e, i, n);
      }
    }
    return n;
  }
  function od(e, n, i, s, l, f, p, y, _) {
    e = qa(i, s, true, e, l, f, p, y, _);
    e.context = id(null);
    i = e.current;
    s = Ve();
    l = yn(i);
    f = Xt(s, l);
    f.callback = n ?? null;
    pn(i, f, l);
    e.current.lanes = l;
    Fr(e, l, s);
    Je(e, s);
    return e;
  }
  function Oo(e, n, i, s) {
    var l = n.current;
    var f = Ve();
    var p = yn(l);
    i = id(i);
    if (n.context === null) {
      n.context = i;
    } else {
      n.pendingContext = i;
    }
    n = Xt(f, p);
    n.payload = {
      element: e
    };
    s = s === undefined ? null : s;
    if (s !== null) {
      n.callback = s;
    }
    e = pn(l, n, p);
    if (e !== null) {
      It(e, l, p, f);
      uo(e, l, p);
    }
    return p;
  }
  function Ao(e) {
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
  function sd(e, n) {
    e = e.memoizedState;
    if (e !== null && e.dehydrated !== null) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < n ? i : n;
    }
  }
  function Za(e, n) {
    sd(e, n);
    if (e = e.alternate) {
      sd(e, n);
    }
  }
  function Jg() {
    return null;
  }
  var ad = typeof reportError == "function" ? reportError : function (e) {
    console.error(e);
  };
  function Ja(e) {
    this._internalRoot = e;
  }
  Do.prototype.render = Ja.prototype.render = function (e) {
    var n = this._internalRoot;
    if (n === null) {
      throw Error(o(409));
    }
    Oo(e, n, null, null);
  };
  Do.prototype.unmount = Ja.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      bn(function () {
        Oo(null, e, null, null);
      });
      n[zt] = null;
    }
  };
  function Do(e) {
    this._internalRoot = e;
  }
  Do.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var n = $l();
      e = {
        blockedOn: null,
        target: e,
        priority: n
      };
      for (var i = 0; i < on.length && n !== 0 && n < on[i].priority; i++);
      on.splice(i, 0, e);
      if (i === 0) {
        Wl(e);
      }
    }
  };
  function eu(e) {
    return !!e && (e.nodeType === 1 || e.nodeType === 9 || e.nodeType === 11);
  }
  function Mo(e) {
    return !!e && (e.nodeType === 1 || e.nodeType === 9 || e.nodeType === 11 || e.nodeType === 8 && e.nodeValue === " react-mount-point-unstable ");
  }
  function ud() {}
  function ey(e, n, i, s, l) {
    if (l) {
      if (typeof s == "function") {
        var f = s;
        s = function () {
          var I = Ao(p);
          f.call(I);
        };
      }
      var p = od(n, s, e, 0, null, false, false, "", ud);
      e._reactRootContainer = p;
      e[zt] = p.current;
      qr(e.nodeType === 8 ? e.parentNode : e);
      bn();
      return p;
    }
    while (l = e.lastChild) {
      e.removeChild(l);
    }
    if (typeof s == "function") {
      var y = s;
      s = function () {
        var I = Ao(_);
        y.call(I);
      };
    }
    var _ = qa(e, 0, false, null, null, false, false, "", ud);
    e._reactRootContainer = _;
    e[zt] = _.current;
    qr(e.nodeType === 8 ? e.parentNode : e);
    bn(function () {
      Oo(n, _, i, s);
    });
    return _;
  }
  function bo(e, n, i, s, l) {
    var f = i._reactRootContainer;
    if (f) {
      var p = f;
      if (typeof l == "function") {
        var y = l;
        l = function () {
          var _ = Ao(p);
          y.call(_);
        };
      }
      Oo(n, p, e, l);
    } else {
      p = ey(i, n, e, l, s);
    }
    return Ao(p);
  }
  jl = function (e) {
    switch (e.tag) {
      case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var i = br(n.pendingLanes);
          if (i !== 0) {
            xs(n, i | 1);
            Je(n, Ne());
            if ((se & 6) === 0) {
              vr = Ne() + 500;
              fn();
            }
          }
        }
        break;
      case 13:
        bn(function () {
          var s = Wt(e, 1);
          if (s !== null) {
            var l = Ve();
            It(s, e, 1, l);
          }
        });
        Za(e, 1);
    }
  };
  Is = function (e) {
    if (e.tag === 13) {
      var n = Wt(e, 134217728);
      if (n !== null) {
        var i = Ve();
        It(n, e, 134217728, i);
      }
      Za(e, 134217728);
    }
  };
  zl = function (e) {
    if (e.tag === 13) {
      var n = yn(e);
      var i = Wt(e, n);
      if (i !== null) {
        var s = Ve();
        It(i, e, n, s);
      }
      Za(e, n);
    }
  };
  $l = function () {
    return pe;
  };
  Gl = function (e, n) {
    var i = pe;
    try {
      pe = e;
      return n();
    } finally {
      pe = i;
    }
  };
  ys = function (e, n, i) {
    switch (n) {
      case "input":
        ls(e, i);
        n = i.name;
        if (i.type === "radio" && n != null) {
          for (i = e; i.parentNode;) {
            i = i.parentNode;
          }
          i = i.querySelectorAll("input[name=" + JSON.stringify("" + n) + "][type=\"radio\"]");
          n = 0;
          for (; n < i.length; n++) {
            var s = i[n];
            if (s !== e && s.form === e.form) {
              var l = Zi(s);
              if (!l) {
                throw Error(o(90));
              }
              hl(s);
              ls(s, l);
            }
          }
        }
        break;
      case "textarea":
        _l(e, i);
        break;
      case "select":
        n = i.value;
        if (n != null) {
          Qn(e, !!i.multiple, n, false);
        }
    }
  };
  Cl = Va;
  Pl = bn;
  var ty = {
    usingClientEntryPoint: false,
    Events: [ei, or, Zi, Nl, kl, Va]
  };
  var hi = {
    findFiberByHostInstance: Cn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
  };
  var ny = {
    bundleType: hi.bundleType,
    version: hi.version,
    rendererPackageName: hi.rendererPackageName,
    rendererConfig: hi.rendererConfig,
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
      e = Al(e);
      if (e === null) {
        return null;
      } else {
        return e.stateNode;
      }
    },
    findFiberByHostInstance: hi.findFiberByHostInstance || Jg,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
    var Fo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Fo.isDisabled && Fo.supportsFiber) {
      try {
        Ai = Fo.inject(ny);
        Pt = Fo;
      } catch {}
    }
  }
  et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ty;
  et.createPortal = function (e, n, i = null) {
    if (!eu(n)) {
      throw Error(o(200));
    }
    return Zg(e, n, null, i);
  };
  et.createRoot = function (e, n) {
    if (!eu(e)) {
      throw Error(o(299));
    }
    var i = false;
    var s = "";
    var l = ad;
    if (n != null) {
      if (n.unstable_strictMode === true) {
        i = true;
      }
      if (n.identifierPrefix !== undefined) {
        s = n.identifierPrefix;
      }
      if (n.onRecoverableError !== undefined) {
        l = n.onRecoverableError;
      }
    }
    n = qa(e, 1, false, null, null, i, false, s, l);
    e[zt] = n.current;
    qr(e.nodeType === 8 ? e.parentNode : e);
    return new Ja(n);
  };
  et.findDOMNode = function (e) {
    if (e == null) {
      return null;
    }
    if (e.nodeType === 1) {
      return e;
    }
    var n = e._reactInternals;
    if (n === undefined) {
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    }
    e = Al(n);
    e = e === null ? null : e.stateNode;
    return e;
  };
  et.flushSync = function (e) {
    return bn(e);
  };
  et.hydrate = function (e, n, i) {
    if (!Mo(n)) {
      throw Error(o(200));
    }
    return bo(null, e, n, true, i);
  };
  et.hydrateRoot = function (e, n, i) {
    if (!eu(e)) {
      throw Error(o(405));
    }
    var s = i != null && i.hydratedSources || null;
    var l = false;
    var f = "";
    var p = ad;
    if (i != null) {
      if (i.unstable_strictMode === true) {
        l = true;
      }
      if (i.identifierPrefix !== undefined) {
        f = i.identifierPrefix;
      }
      if (i.onRecoverableError !== undefined) {
        p = i.onRecoverableError;
      }
    }
    n = od(n, null, e, 1, i ?? null, l, false, f, p);
    e[zt] = n.current;
    qr(e);
    if (s) {
      for (e = 0; e < s.length; e++) {
        i = s[e];
        l = i._getVersion;
        l = l(i._source);
        if (n.mutableSourceEagerHydrationData == null) {
          n.mutableSourceEagerHydrationData = [i, l];
        } else {
          n.mutableSourceEagerHydrationData.push(i, l);
        }
      }
    }
    return new Do(n);
  };
  et.render = function (e, n, i) {
    if (!Mo(n)) {
      throw Error(o(200));
    }
    return bo(null, e, n, false, i);
  };
  et.unmountComponentAtNode = function (e) {
    if (!Mo(e)) {
      throw Error(o(40));
    }
    if (e._reactRootContainer) {
      bn(function () {
        bo(null, null, e, false, function () {
          e._reactRootContainer = null;
          e[zt] = null;
        });
      });
      return true;
    } else {
      return false;
    }
  };
  et.unstable_batchedUpdates = Va;
  et.unstable_renderSubtreeIntoContainer = function (e, n, i, s) {
    if (!Mo(i)) {
      throw Error(o(200));
    }
    if (e == null || e._reactInternals === undefined) {
      throw Error(o(38));
    }
    return bo(e, n, i, false, s);
  };
  et.version = "18.3.1-next-f1338f8080-20240426";
  return et;
}
var gd;
function gy() {
  if (gd) {
    return ru.exports;
  }
  gd = 1;
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
  ru.exports = my();
  return ru.exports;
}
var yd;
function yy() {
  if (yd) {
    return Ho;
  }
  yd = 1;
  var t = gy();
  Ho.createRoot = t.createRoot;
  Ho.hydrateRoot = t.hydrateRoot;
  return Ho;
}
var vy = yy();
function wu(t, r) {
  wu = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (o, a) {
    o.__proto__ = a;
  } || function (o, a) {
    for (var u in a) {
      if (Object.prototype.hasOwnProperty.call(a, u)) {
        o[u] = a[u];
      }
    }
  };
  return wu(t, r);
}
function gt(t, r) {
  if (typeof r != "function" && r !== null) {
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  }
  wu(t, r);
  function o() {
    this.constructor = t;
  }
  t.prototype = r === null ? Object.create(r) : (o.prototype = r.prototype, new o());
}
function $() {
  $ = Object.assign || function (r) {
    var o;
    for (var a = 1, u = arguments.length; a < u; a++) {
      o = arguments[a];
      for (var c in o) {
        if (Object.prototype.hasOwnProperty.call(o, c)) {
          r[c] = o[c];
        }
      }
    }
    return r;
  };
  return $.apply(this, arguments);
}
function es(t, r) {
  var o = {};
  for (var a in t) {
    if (Object.prototype.hasOwnProperty.call(t, a) && r.indexOf(a) < 0) {
      o[a] = t[a];
    }
  }
  if (t != null && typeof Object.getOwnPropertySymbols == "function") {
    for (var u = 0, a = Object.getOwnPropertySymbols(t); u < a.length; u++) {
      if (r.indexOf(a[u]) < 0 && Object.prototype.propertyIsEnumerable.call(t, a[u])) {
        o[a[u]] = t[a[u]];
      }
    }
  }
  return o;
}
function Z1(t, r, o, a) {
  function u(c) {
    if (c instanceof o) {
      return c;
    } else {
      return new o(function (d) {
        d(c);
      });
    }
  }
  return new (o ||= Promise)(function (c, d) {
    function h(v) {
      try {
        g(a.next(v));
      } catch (S) {
        d(S);
      }
    }
    function m(v) {
      try {
        g(a.throw(v));
      } catch (S) {
        d(S);
      }
    }
    function g(v) {
      if (v.done) {
        c(v.value);
      } else {
        u(v.value).then(h, m);
      }
    }
    g((a = a.apply(t, r || [])).next());
  });
}
function J1(t, r) {
  var o = {
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
  var a;
  var u;
  var c;
  var d = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  d.next = h(0);
  d.throw = h(1);
  d.return = h(2);
  if (typeof Symbol == "function") {
    d[Symbol.iterator] = function () {
      return this;
    };
  }
  return d;
  function h(g) {
    return function (v) {
      return m([g, v]);
    };
  }
  function m(g) {
    if (a) {
      throw new TypeError("Generator is already executing.");
    }
    while (d && (d = 0, g[0] && (o = 0)), o) {
      try {
        a = 1;
        if (u && (c = g[0] & 2 ? u.return : g[0] ? u.throw || ((c = u.return) && c.call(u), 0) : u.next) && !(c = c.call(u, g[1])).done) {
          return c;
        }
        u = 0;
        if (c) {
          g = [g[0] & 2, c.value];
        }
        switch (g[0]) {
          case 0:
          case 1:
            c = g;
            break;
          case 4:
            o.label++;
            return {
              value: g[1],
              done: false
            };
          case 5:
            o.label++;
            u = g[1];
            g = [0];
            continue;
          case 7:
            g = o.ops.pop();
            o.trys.pop();
            continue;
          default:
            c = o.trys;
            if (!(c = c.length > 0 && c[c.length - 1]) && (g[0] === 6 || g[0] === 2)) {
              o = 0;
              continue;
            }
            if (g[0] === 3 && (!c || g[1] > c[0] && g[1] < c[3])) {
              o.label = g[1];
              break;
            }
            if (g[0] === 6 && o.label < c[1]) {
              o.label = c[1];
              c = g;
              break;
            }
            if (c && o.label < c[2]) {
              o.label = c[2];
              o.ops.push(g);
              break;
            }
            if (c[2]) {
              o.ops.pop();
            }
            o.trys.pop();
            continue;
        }
        g = r.call(t, o);
      } catch (v) {
        g = [6, v];
        u = 0;
      } finally {
        a = c = 0;
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
function vd(t) {
  var r = typeof Symbol == "function" && Symbol.iterator;
  var o = r && t[r];
  var a = 0;
  if (o) {
    return o.call(t);
  }
  if (t && typeof t.length == "number") {
    return {
      next: function () {
        if (t && a >= t.length) {
          t = undefined;
        }
        return {
          value: t && t[a++],
          done: !t
        };
      }
    };
  }
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function ew(t, r) {
  var o = typeof Symbol == "function" && t[Symbol.iterator];
  if (!o) {
    return t;
  }
  var a = o.call(t);
  var u;
  var c = [];
  var d;
  try {
    while ((r === undefined || r-- > 0) && !(u = a.next()).done) {
      c.push(u.value);
    }
  } catch (h) {
    d = {
      error: h
    };
  } finally {
    try {
      if (u && !u.done && (o = a.return)) {
        o.call(a);
      }
    } finally {
      if (d) {
        throw d.error;
      }
    }
  }
  return c;
}
function Ft(t, r, o) {
  if (o || arguments.length === 2) {
    for (var a = 0, u = r.length, c; a < u; a++) {
      if (c || !(a in r)) {
        c ||= Array.prototype.slice.call(r, 0, a);
        c[a] = r[a];
      }
    }
  }
  return t.concat(c || Array.prototype.slice.call(r));
}
function Tu(t) {
  if (this instanceof Tu) {
    this.v = t;
    return this;
  } else {
    return new Tu(t);
  }
}
function tw(t, r, o) {
  if (!Symbol.asyncIterator) {
    throw new TypeError("Symbol.asyncIterator is not defined.");
  }
  var a = o.apply(t, r || []);
  var u;
  var c = [];
  u = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype);
  h("next");
  h("throw");
  h("return", d);
  u[Symbol.asyncIterator] = function () {
    return this;
  };
  return u;
  function d(k) {
    return function (A) {
      return Promise.resolve(A).then(k, S);
    };
  }
  function h(k, A) {
    if (a[k]) {
      u[k] = function (M) {
        return new Promise(function (H, te) {
          if (!(c.push([k, M, H, te]) > 1)) {
            m(k, M);
          }
        });
      };
      if (A) {
        u[k] = A(u[k]);
      }
    }
  }
  function m(k, A) {
    try {
      g(a[k](A));
    } catch (M) {
      N(c[0][3], M);
    }
  }
  function g(k) {
    if (k.value instanceof Tu) {
      Promise.resolve(k.value.v).then(v, S);
    } else {
      N(c[0][2], k);
    }
  }
  function v(k) {
    m("next", k);
  }
  function S(k) {
    m("throw", k);
  }
  function N(k, A) {
    k(A);
    c.shift();
    if (c.length) {
      m(c[0][0], c[0][1]);
    }
  }
}
function nw(t) {
  if (!Symbol.asyncIterator) {
    throw new TypeError("Symbol.asyncIterator is not defined.");
  }
  var r = t[Symbol.asyncIterator];
  var o;
  if (r) {
    return r.call(t);
  } else {
    t = typeof vd == "function" ? vd(t) : t[Symbol.iterator]();
    o = {};
    a("next");
    a("throw");
    a("return");
    o[Symbol.asyncIterator] = function () {
      return this;
    };
    return o;
  }
  function a(c) {
    o[c] = t[c] && function (d) {
      return new Promise(function (h, m) {
        d = t[c](d);
        u(h, m, d.done, d.value);
      });
    };
  }
  function u(c, d, h, m) {
    Promise.resolve(m).then(function (g) {
      c({
        value: g,
        done: h
      });
    }, d);
  }
}
function Dt(t, r) {
  var o = r && r.cache ? r.cache : Iy;
  var a = r && r.serializer ? r.serializer : Ty;
  var u = r && r.strategy ? r.strategy : Sy;
  return u(t, {
    cache: o,
    serializer: a
  });
}
function _y(t) {
  return t == null || typeof t == "number" || typeof t == "boolean";
}
function Ey(t, r, o, a) {
  var u = _y(a) ? a : o(a);
  var c = r.get(u);
  if (typeof c === "undefined") {
    c = t.call(this, a);
    r.set(u, c);
  }
  return c;
}
function Hp(t, r, o) {
  var a = Array.prototype.slice.call(arguments, 3);
  var u = o(a);
  var c = r.get(u);
  if (typeof c === "undefined") {
    c = t.apply(this, a);
    r.set(u, c);
  }
  return c;
}
function Bp(t, r, o, a, u) {
  return o.bind(r, t, a, u);
}
function Sy(t, r) {
  var o = t.length === 1 ? Ey : Hp;
  return Bp(t, this, o, r.cache.create(), r.serializer);
}
function wy(t, r) {
  return Bp(t, this, Hp, r.cache.create(), r.serializer);
}
function Ty() {
  return JSON.stringify(arguments);
}
var xy = function () {
  function t() {
    this.cache = Object.create(null);
  }
  t.prototype.get = function (r) {
    return this.cache[r];
  };
  t.prototype.set = function (r, o) {
    this.cache[r] = o;
  };
  return t;
}();
var Iy = {
  create: function () {
    return new xy();
  }
};
var Mt = {
  variadic: wy
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
var Er;
(function (t) {
  t[t.number = 0] = "number";
  t[t.dateTime = 1] = "dateTime";
})(Er ||= {});
function _d(t) {
  return t.type === _e.literal;
}
function Ny(t) {
  return t.type === _e.argument;
}
function Up(t) {
  return t.type === _e.number;
}
function jp(t) {
  return t.type === _e.date;
}
function zp(t) {
  return t.type === _e.time;
}
function $p(t) {
  return t.type === _e.select;
}
function Gp(t) {
  return t.type === _e.plural;
}
function ky(t) {
  return t.type === _e.pound;
}
function Vp(t) {
  return t.type === _e.tag;
}
function Wp(t) {
  return !!t && typeof t == "object" && t.type === Er.number;
}
function xu(t) {
  return !!t && typeof t == "object" && t.type === Er.dateTime;
}
var Xp = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;
var Cy = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Py(t) {
  var r = {};
  t.replace(Cy, function (o) {
    var a = o.length;
    switch (o[0]) {
      case "G":
        r.era = a === 4 ? "long" : a === 5 ? "narrow" : "short";
        break;
      case "y":
        r.year = a === 2 ? "2-digit" : "numeric";
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
        r.month = ["numeric", "2-digit", "short", "long", "narrow"][a - 1];
        break;
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        r.day = ["numeric", "2-digit"][a - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      case "E":
        r.weekday = a === 4 ? "long" : a === 5 ? "narrow" : "short";
        break;
      case "e":
        if (a < 4) {
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        }
        r.weekday = ["short", "long", "narrow", "short"][a - 4];
        break;
      case "c":
        if (a < 4) {
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        }
        r.weekday = ["short", "long", "narrow", "short"][a - 4];
        break;
      case "a":
        r.hour12 = true;
        break;
      case "b":
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      case "h":
        r.hourCycle = "h12";
        r.hour = ["numeric", "2-digit"][a - 1];
        break;
      case "H":
        r.hourCycle = "h23";
        r.hour = ["numeric", "2-digit"][a - 1];
        break;
      case "K":
        r.hourCycle = "h11";
        r.hour = ["numeric", "2-digit"][a - 1];
        break;
      case "k":
        r.hourCycle = "h24";
        r.hour = ["numeric", "2-digit"][a - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      case "m":
        r.minute = ["numeric", "2-digit"][a - 1];
        break;
      case "s":
        r.second = ["numeric", "2-digit"][a - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      case "z":
        r.timeZoneName = a < 4 ? "short" : "long";
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
var Ry = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Ly(t) {
  if (t.length === 0) {
    throw new Error("Number skeleton cannot be empty");
  }
  var r = t.split(Ry).filter(function (N) {
    return N.length > 0;
  });
  var o = [];
  for (var a = 0, u = r; a < u.length; a++) {
    var c = u[a];
    var d = c.split("/");
    if (d.length === 0) {
      throw new Error("Invalid number skeleton");
    }
    var h = d[0];
    var m = d.slice(1);
    for (var g = 0, v = m; g < v.length; g++) {
      var S = v[g];
      if (S.length === 0) {
        throw new Error("Invalid number skeleton");
      }
    }
    o.push({
      stem: h,
      options: m
    });
  }
  return o;
}
function Oy(t) {
  return t.replace(/^(.*?)-/, "");
}
var Ed = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g;
var Yp = /^(@+)?(\+|#+)?[rs]?$/g;
var Ay = /(\*)(0+)|(#+)(0+)|(0+)/g;
var Qp = /^(0+)$/;
function Sd(t) {
  var r = {};
  if (t[t.length - 1] === "r") {
    r.roundingPriority = "morePrecision";
  } else if (t[t.length - 1] === "s") {
    r.roundingPriority = "lessPrecision";
  }
  t.replace(Yp, function (o, a, u) {
    if (typeof u != "string") {
      r.minimumSignificantDigits = a.length;
      r.maximumSignificantDigits = a.length;
    } else if (u === "+") {
      r.minimumSignificantDigits = a.length;
    } else if (a[0] === "#") {
      r.maximumSignificantDigits = a.length;
    } else {
      r.minimumSignificantDigits = a.length;
      r.maximumSignificantDigits = a.length + (typeof u == "string" ? u.length : 0);
    }
    return "";
  });
  return r;
}
function Kp(t) {
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
function Dy(t) {
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
    var o = t.slice(0, 2);
    if (o === "+!") {
      r.signDisplay = "always";
      t = t.slice(2);
    } else if (o === "+?") {
      r.signDisplay = "exceptZero";
      t = t.slice(2);
    }
    if (!Qp.test(t)) {
      throw new Error("Malformed concise eng/scientific notation");
    }
    r.minimumIntegerDigits = t.length;
  }
  return r;
}
function wd(t) {
  var r = {};
  var o = Kp(t);
  return o || r;
}
function My(t) {
  var r = {};
  for (var o = 0, a = t; o < a.length; o++) {
    var u = a[o];
    switch (u.stem) {
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
        r.currency = u.options[0];
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
        r.unit = Oy(u.options[0]);
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
        }), u.options.reduce(function (m, g) {
          return $($({}, m), wd(g));
        }, {}));
        continue;
      case "engineering":
        r = $($($({}, r), {
          notation: "engineering"
        }), u.options.reduce(function (m, g) {
          return $($({}, m), wd(g));
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
        r.scale = parseFloat(u.options[0]);
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
        if (u.options.length > 1) {
          throw new RangeError("integer-width stems only accept a single optional option");
        }
        u.options[0].replace(Ay, function (m, g, v, S, N, k) {
          if (g) {
            r.minimumIntegerDigits = v.length;
          } else {
            if (S && N) {
              throw new Error("We currently do not support maximum integer digits");
            }
            if (k) {
              throw new Error("We currently do not support exact integer digits");
            }
          }
          return "";
        });
        continue;
    }
    if (Qp.test(u.stem)) {
      r.minimumIntegerDigits = u.stem.length;
      continue;
    }
    if (Ed.test(u.stem)) {
      if (u.options.length > 1) {
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      }
      u.stem.replace(Ed, function (m, g, v, S, N, k) {
        if (v === "*") {
          r.minimumFractionDigits = g.length;
        } else if (S && S[0] === "#") {
          r.maximumFractionDigits = S.length;
        } else if (N && k) {
          r.minimumFractionDigits = N.length;
          r.maximumFractionDigits = N.length + k.length;
        } else {
          r.minimumFractionDigits = g.length;
          r.maximumFractionDigits = g.length;
        }
        return "";
      });
      var c = u.options[0];
      if (c === "w") {
        r = $($({}, r), {
          trailingZeroDisplay: "stripIfInteger"
        });
      } else if (c) {
        r = $($({}, r), Sd(c));
      }
      continue;
    }
    if (Yp.test(u.stem)) {
      r = $($({}, r), Sd(u.stem));
      continue;
    }
    var d = Kp(u.stem);
    if (d) {
      r = $($({}, r), d);
    }
    var h = Dy(u.stem);
    if (h) {
      r = $($({}, r), h);
    }
  }
  return r;
}
var Bo = {
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
function by(t, r) {
  var o = "";
  for (var a = 0; a < t.length; a++) {
    var u = t.charAt(a);
    if (u === "j") {
      var c = 0;
      for (; a + 1 < t.length && t.charAt(a + 1) === u;) {
        c++;
        a++;
      }
      var d = 1 + (c & 1);
      var h = c < 2 ? 1 : 3 + (c >> 1);
      var m = "a";
      var g = Fy(r);
      for ((g == "H" || g == "k") && (h = 0); h-- > 0;) {
        o += m;
      }
      while (d-- > 0) {
        o = g + o;
      }
    } else if (u === "J") {
      o += "H";
    } else {
      o += u;
    }
  }
  return o;
}
function Fy(t) {
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
  var o = t.language;
  var a;
  if (o !== "root") {
    a = t.maximize().region;
  }
  var u = Bo[a || ""] || Bo[o || ""] || Bo[`${o}-001`] || Bo["001"];
  return u[0];
}
var Hy = new RegExp(`^${Xp.source}*`);
var By = new RegExp(`${Xp.source}*\$`);
function oe(t, r) {
  return {
    start: t,
    end: r
  };
}
var Uy = !!String.prototype.startsWith && "_a".startsWith("a", 1);
var jy = !!String.fromCodePoint;
var zy = !!Object.fromEntries;
var $y = !!String.prototype.codePointAt;
var Gy = !!String.prototype.trimStart;
var Vy = !!String.prototype.trimEnd;
var Wy = !!Number.isSafeInteger;
var Xy = Wy ? Number.isSafeInteger : function (t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
};
var Iu = true;
try {
  var Yy = Zp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Iu = Yy.exec("a")?.[0] === "a";
} catch {
  Iu = false;
}
var Td = Uy ? function (r, o, a) {
  return r.startsWith(o, a);
} : function (r, o, a) {
  return r.slice(a, a + o.length) === o;
};
var Nu = jy ? String.fromCodePoint : function () {
  var r = [];
  for (var o = 0; o < arguments.length; o++) {
    r[o] = arguments[o];
  }
  var a = "";
  for (var u = r.length, c = 0, d; u > c;) {
    d = r[c++];
    if (d > 1114111) {
      throw RangeError(d + " is not a valid code point");
    }
    a += d < 65536 ? String.fromCharCode(d) : String.fromCharCode(((d -= 65536) >> 10) + 55296, d % 1024 + 56320);
  }
  return a;
};
var xd = zy ? Object.fromEntries : function (r) {
  var o = {};
  for (var a = 0, u = r; a < u.length; a++) {
    var c = u[a];
    var d = c[0];
    var h = c[1];
    o[d] = h;
  }
  return o;
};
var qp = $y ? function (r, o) {
  return r.codePointAt(o);
} : function (r, o) {
  var a = r.length;
  if (!(o < 0) && !(o >= a)) {
    var u = r.charCodeAt(o);
    var c;
    if (u < 55296 || u > 56319 || o + 1 === a || (c = r.charCodeAt(o + 1)) < 56320 || c > 57343) {
      return u;
    } else {
      return (u - 55296 << 10) + (c - 56320) + 65536;
    }
  }
};
var Qy = Gy ? function (r) {
  return r.trimStart();
} : function (r) {
  return r.replace(Hy, "");
};
var Ky = Vy ? function (r) {
  return r.trimEnd();
} : function (r) {
  return r.replace(By, "");
};
function Zp(t, r) {
  return new RegExp(t, r);
}
var ku;
if (Iu) {
  var Id = Zp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  ku = function (r, o) {
    Id.lastIndex = o;
    var u = Id.exec(r);
    return u[1] ?? "";
  };
} else {
  ku = function (r, o) {
    var a = [];
    for (;;) {
      var u = qp(r, o);
      if (u === undefined || Jp(u) || e0(u)) {
        break;
      }
      a.push(u);
      o += u >= 65536 ? 2 : 1;
    }
    return Nu.apply(undefined, a);
  };
}
var qy = function () {
  function t(r, o = {}) {
    this.message = r;
    this.position = {
      offset: 0,
      line: 1,
      column: 1
    };
    this.ignoreTag = !!o.ignoreTag;
    this.locale = o.locale;
    this.requiresOtherClause = !!o.requiresOtherClause;
    this.shouldParseSkeletons = !!o.shouldParseSkeletons;
  }
  t.prototype.parse = function () {
    if (this.offset() !== 0) {
      throw Error("parser can only be used once");
    }
    return this.parseMessage(0, "", false);
  };
  t.prototype.parseMessage = function (r, o, a) {
    var u = [];
    for (; !this.isEOF();) {
      var c = this.char();
      if (c === 123) {
        var d = this.parseArgument(r, a);
        if (d.err) {
          return d;
        }
        u.push(d.val);
      } else {
        if (c === 125 && r > 0) {
          break;
        }
        if (c === 35 && (o === "plural" || o === "selectordinal")) {
          var h = this.clonePosition();
          this.bump();
          u.push({
            type: _e.pound,
            location: oe(h, this.clonePosition())
          });
        } else if (c === 60 && !this.ignoreTag && this.peek() === 47) {
          if (a) {
            break;
          }
          return this.error(re.UNMATCHED_CLOSING_TAG, oe(this.clonePosition(), this.clonePosition()));
        } else if (c === 60 && !this.ignoreTag && Cu(this.peek() || 0)) {
          var d = this.parseTag(r, o);
          if (d.err) {
            return d;
          }
          u.push(d.val);
        } else {
          var d = this.parseLiteral(r, o);
          if (d.err) {
            return d;
          }
          u.push(d.val);
        }
      }
    }
    return {
      val: u,
      err: null
    };
  };
  t.prototype.parseTag = function (r, o) {
    var a = this.clonePosition();
    this.bump();
    var u = this.parseTagName();
    this.bumpSpace();
    if (this.bumpIf("/>")) {
      return {
        val: {
          type: _e.literal,
          value: `<${u}/>`,
          location: oe(a, this.clonePosition())
        },
        err: null
      };
    }
    if (this.bumpIf(">")) {
      var c = this.parseMessage(r + 1, o, true);
      if (c.err) {
        return c;
      }
      var d = c.val;
      var h = this.clonePosition();
      if (this.bumpIf("</")) {
        if (this.isEOF() || !Cu(this.char())) {
          return this.error(re.INVALID_TAG, oe(h, this.clonePosition()));
        }
        var m = this.clonePosition();
        var g = this.parseTagName();
        if (u !== g) {
          return this.error(re.UNMATCHED_CLOSING_TAG, oe(m, this.clonePosition()));
        } else {
          this.bumpSpace();
          if (this.bumpIf(">")) {
            return {
              val: {
                type: _e.tag,
                value: u,
                children: d,
                location: oe(a, this.clonePosition())
              },
              err: null
            };
          } else {
            return this.error(re.INVALID_TAG, oe(h, this.clonePosition()));
          }
        }
      } else {
        return this.error(re.UNCLOSED_TAG, oe(a, this.clonePosition()));
      }
    } else {
      return this.error(re.INVALID_TAG, oe(a, this.clonePosition()));
    }
  };
  t.prototype.parseTagName = function () {
    var r = this.offset();
    for (this.bump(); !this.isEOF() && Jy(this.char());) {
      this.bump();
    }
    return this.message.slice(r, this.offset());
  };
  t.prototype.parseLiteral = function (r, o) {
    var a = this.clonePosition();
    var u = "";
    while (true) {
      var c = this.tryParseQuote(o);
      if (c) {
        u += c;
        continue;
      }
      var d = this.tryParseUnquoted(r, o);
      if (d) {
        u += d;
        continue;
      }
      var h = this.tryParseLeftAngleBracket();
      if (h) {
        u += h;
        continue;
      }
      break;
    }
    var m = oe(a, this.clonePosition());
    return {
      val: {
        type: _e.literal,
        value: u,
        location: m
      },
      err: null
    };
  };
  t.prototype.tryParseLeftAngleBracket = function () {
    if (!this.isEOF() && this.char() === 60 && (this.ignoreTag || !Zy(this.peek() || 0))) {
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
    var o = [this.char()];
    for (this.bump(); !this.isEOF();) {
      var a = this.char();
      if (a === 39) {
        if (this.peek() === 39) {
          o.push(39);
          this.bump();
        } else {
          this.bump();
          break;
        }
      } else {
        o.push(a);
      }
      this.bump();
    }
    return Nu.apply(undefined, o);
  };
  t.prototype.tryParseUnquoted = function (r, o) {
    if (this.isEOF()) {
      return null;
    }
    var a = this.char();
    if (a === 60 || a === 123 || a === 35 && (o === "plural" || o === "selectordinal") || a === 125 && r > 0) {
      return null;
    } else {
      this.bump();
      return Nu(a);
    }
  };
  t.prototype.parseArgument = function (r, o) {
    var a = this.clonePosition();
    this.bump();
    this.bumpSpace();
    if (this.isEOF()) {
      return this.error(re.EXPECT_ARGUMENT_CLOSING_BRACE, oe(a, this.clonePosition()));
    }
    if (this.char() === 125) {
      this.bump();
      return this.error(re.EMPTY_ARGUMENT, oe(a, this.clonePosition()));
    }
    var u = this.parseIdentifierIfPossible().value;
    if (!u) {
      return this.error(re.MALFORMED_ARGUMENT, oe(a, this.clonePosition()));
    }
    this.bumpSpace();
    if (this.isEOF()) {
      return this.error(re.EXPECT_ARGUMENT_CLOSING_BRACE, oe(a, this.clonePosition()));
    }
    switch (this.char()) {
      case 125:
        this.bump();
        return {
          val: {
            type: _e.argument,
            value: u,
            location: oe(a, this.clonePosition())
          },
          err: null
        };
      case 44:
        this.bump();
        this.bumpSpace();
        if (this.isEOF()) {
          return this.error(re.EXPECT_ARGUMENT_CLOSING_BRACE, oe(a, this.clonePosition()));
        } else {
          return this.parseArgumentOptions(r, o, u, a);
        }
      default:
        return this.error(re.MALFORMED_ARGUMENT, oe(a, this.clonePosition()));
    }
  };
  t.prototype.parseIdentifierIfPossible = function () {
    var r = this.clonePosition();
    var o = this.offset();
    var a = ku(this.message, o);
    var u = o + a.length;
    this.bumpTo(u);
    var c = this.clonePosition();
    var d = oe(r, c);
    return {
      value: a,
      location: d
    };
  };
  t.prototype.parseArgumentOptions = function (r, o, a, u) {
    var d = this.clonePosition();
    var h = this.parseIdentifierIfPossible().value;
    var m = this.clonePosition();
    switch (h) {
      case "":
        return this.error(re.EXPECT_ARGUMENT_TYPE, oe(d, m));
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
            var N = Ky(S.val);
            if (N.length === 0) {
              return this.error(re.EXPECT_ARGUMENT_STYLE, oe(this.clonePosition(), this.clonePosition()));
            }
            var k = oe(v, this.clonePosition());
            g = {
              style: N,
              styleLocation: k
            };
          }
          var A = this.tryParseArgumentClose(u);
          if (A.err) {
            return A;
          }
          var M = oe(u, this.clonePosition());
          if (g && Td(g == null ? undefined : g.style, "::", 0)) {
            var H = Qy(g.style.slice(2));
            if (h === "number") {
              var S = this.parseNumberSkeletonFromString(H, g.styleLocation);
              if (S.err) {
                return S;
              } else {
                return {
                  val: {
                    type: _e.number,
                    value: a,
                    location: M,
                    style: S.val
                  },
                  err: null
                };
              }
            } else {
              if (H.length === 0) {
                return this.error(re.EXPECT_DATE_TIME_SKELETON, M);
              }
              var te = H;
              if (this.locale) {
                te = by(H, this.locale);
              }
              var N = {
                type: Er.dateTime,
                pattern: te,
                location: g.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Py(te) : {}
              };
              var q = h === "date" ? _e.date : _e.time;
              return {
                val: {
                  type: q,
                  value: a,
                  location: M,
                  style: N
                },
                err: null
              };
            }
          }
          return {
            val: {
              type: h === "number" ? _e.number : h === "date" ? _e.date : _e.time,
              value: a,
              location: M,
              style: (g == null ? undefined : g.style) ?? null
            },
            err: null
          };
        }
      case "plural":
      case "selectordinal":
      case "select":
        {
          var Q = this.clonePosition();
          this.bumpSpace();
          if (!this.bumpIf(",")) {
            return this.error(re.EXPECT_SELECT_ARGUMENT_OPTIONS, oe(Q, $({}, Q)));
          }
          this.bumpSpace();
          var ie = this.parseIdentifierIfPossible();
          var D = 0;
          if (h !== "select" && ie.value === "offset") {
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
            D = S.val;
          }
          var ce = this.tryParsePluralOrSelectOptions(r, h, o, ie);
          if (ce.err) {
            return ce;
          }
          var A = this.tryParseArgumentClose(u);
          if (A.err) {
            return A;
          }
          var Re = oe(u, this.clonePosition());
          if (h === "select") {
            return {
              val: {
                type: _e.select,
                value: a,
                options: xd(ce.val),
                location: Re
              },
              err: null
            };
          } else {
            return {
              val: {
                type: _e.plural,
                value: a,
                options: xd(ce.val),
                offset: D,
                pluralType: h === "plural" ? "cardinal" : "ordinal",
                location: Re
              },
              err: null
            };
          }
        }
      default:
        return this.error(re.INVALID_ARGUMENT_TYPE, oe(d, m));
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
    var o = this.clonePosition();
    for (; !this.isEOF();) {
      var a = this.char();
      switch (a) {
        case 39:
          {
            this.bump();
            var u = this.clonePosition();
            if (!this.bumpUntil("'")) {
              return this.error(re.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, oe(u, this.clonePosition()));
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
                val: this.message.slice(o.offset, this.offset()),
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
      val: this.message.slice(o.offset, this.offset()),
      err: null
    };
  };
  t.prototype.parseNumberSkeletonFromString = function (r, o) {
    var a = [];
    try {
      a = Ly(r);
    } catch {
      return this.error(re.INVALID_NUMBER_SKELETON, o);
    }
    return {
      val: {
        type: Er.number,
        tokens: a,
        location: o,
        parsedOptions: this.shouldParseSkeletons ? My(a) : {}
      },
      err: null
    };
  };
  t.prototype.tryParsePluralOrSelectOptions = function (r, o, a, u) {
    var c;
    var d = false;
    var h = [];
    var m = new Set();
    var g = u.value;
    var v = u.location;
    while (true) {
      if (g.length === 0) {
        var S = this.clonePosition();
        if (o !== "select" && this.bumpIf("=")) {
          var N = this.tryParseDecimalInteger(re.EXPECT_PLURAL_ARGUMENT_SELECTOR, re.INVALID_PLURAL_ARGUMENT_SELECTOR);
          if (N.err) {
            return N;
          }
          v = oe(S, this.clonePosition());
          g = this.message.slice(S.offset, this.offset());
        } else {
          break;
        }
      }
      if (m.has(g)) {
        return this.error(o === "select" ? re.DUPLICATE_SELECT_ARGUMENT_SELECTOR : re.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, v);
      }
      if (g === "other") {
        d = true;
      }
      this.bumpSpace();
      var k = this.clonePosition();
      if (!this.bumpIf("{")) {
        return this.error(o === "select" ? re.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : re.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, oe(this.clonePosition(), this.clonePosition()));
      }
      var A = this.parseMessage(r + 1, o, a);
      if (A.err) {
        return A;
      }
      var M = this.tryParseArgumentClose(k);
      if (M.err) {
        return M;
      }
      h.push([g, {
        value: A.val,
        location: oe(k, this.clonePosition())
      }]);
      m.add(g);
      this.bumpSpace();
      c = this.parseIdentifierIfPossible();
      g = c.value;
      v = c.location;
    }
    if (h.length === 0) {
      return this.error(o === "select" ? re.EXPECT_SELECT_ARGUMENT_SELECTOR : re.EXPECT_PLURAL_ARGUMENT_SELECTOR, oe(this.clonePosition(), this.clonePosition()));
    } else if (this.requiresOtherClause && !d) {
      return this.error(re.MISSING_OTHER_CLAUSE, oe(this.clonePosition(), this.clonePosition()));
    } else {
      return {
        val: h,
        err: null
      };
    }
  };
  t.prototype.tryParseDecimalInteger = function (r, o) {
    var a = 1;
    var u = this.clonePosition();
    if (!this.bumpIf("+")) {
      if (this.bumpIf("-")) {
        a = -1;
      }
    }
    var c = false;
    var d = 0;
    for (; !this.isEOF();) {
      var h = this.char();
      if (h >= 48 && h <= 57) {
        c = true;
        d = d * 10 + (h - 48);
        this.bump();
      } else {
        break;
      }
    }
    var m = oe(u, this.clonePosition());
    if (c) {
      d *= a;
      if (Xy(d)) {
        return {
          val: d,
          err: null
        };
      } else {
        return this.error(o, m);
      }
    } else {
      return this.error(r, m);
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
    var o = qp(this.message, r);
    if (o === undefined) {
      throw Error(`Offset ${r} is at invalid UTF-16 code unit boundary`);
    }
    return o;
  };
  t.prototype.error = function (r, o) {
    return {
      val: null,
      err: {
        kind: r,
        message: this.message,
        location: o
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
    if (Td(this.message, r, this.offset())) {
      for (var o = 0; o < r.length; o++) {
        this.bump();
      }
      return true;
    }
    return false;
  };
  t.prototype.bumpUntil = function (r) {
    var o = this.offset();
    var a = this.message.indexOf(r, o);
    if (a >= 0) {
      this.bumpTo(a);
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
      var o = this.offset();
      if (o === r) {
        break;
      }
      if (o > r) {
        throw Error(`targetOffset ${r} is at invalid UTF-16 code unit boundary`);
      }
      this.bump();
      if (this.isEOF()) {
        break;
      }
    }
  };
  t.prototype.bumpSpace = function () {
    while (!this.isEOF() && Jp(this.char())) {
      this.bump();
    }
  };
  t.prototype.peek = function () {
    if (this.isEOF()) {
      return null;
    }
    var r = this.char();
    var o = this.offset();
    var a = this.message.charCodeAt(o + (r >= 65536 ? 2 : 1));
    return a ?? null;
  };
  return t;
}();
function Cu(t) {
  return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function Zy(t) {
  return Cu(t) || t === 47;
}
function Jy(t) {
  return t === 45 || t === 46 || t >= 48 && t <= 57 || t === 95 || t >= 97 && t <= 122 || t >= 65 && t <= 90 || t == 183 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039;
}
function Jp(t) {
  return t >= 9 && t <= 13 || t === 32 || t === 133 || t >= 8206 && t <= 8207 || t === 8232 || t === 8233;
}
function e0(t) {
  return t >= 33 && t <= 35 || t === 36 || t >= 37 && t <= 39 || t === 40 || t === 41 || t === 42 || t === 43 || t === 44 || t === 45 || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || t === 91 || t === 92 || t === 93 || t === 94 || t === 96 || t === 123 || t === 124 || t === 125 || t === 126 || t === 161 || t >= 162 && t <= 165 || t === 166 || t === 167 || t === 169 || t === 171 || t === 172 || t === 174 || t === 176 || t === 177 || t === 182 || t === 187 || t === 191 || t === 215 || t === 247 || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || t === 8216 || t === 8217 || t === 8218 || t >= 8219 && t <= 8220 || t === 8221 || t === 8222 || t === 8223 || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || t === 8249 || t === 8250 || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || t === 8260 || t === 8261 || t === 8262 || t >= 8263 && t <= 8273 || t === 8274 || t === 8275 || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || t === 8608 || t >= 8609 && t <= 8610 || t === 8611 || t >= 8612 && t <= 8613 || t === 8614 || t >= 8615 && t <= 8621 || t === 8622 || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || t === 8658 || t === 8659 || t === 8660 || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || t === 8968 || t === 8969 || t === 8970 || t === 8971 || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9000 || t === 9001 || t === 9002 || t >= 9003 && t <= 9083 || t === 9084 || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || t === 9655 || t >= 9656 && t <= 9664 || t === 9665 || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || t === 9839 || t >= 9840 && t <= 10087 || t === 10088 || t === 10089 || t === 10090 || t === 10091 || t === 10092 || t === 10093 || t === 10094 || t === 10095 || t === 10096 || t === 10097 || t === 10098 || t === 10099 || t === 10100 || t === 10101 || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || t === 10181 || t === 10182 || t >= 10183 && t <= 10213 || t === 10214 || t === 10215 || t === 10216 || t === 10217 || t === 10218 || t === 10219 || t === 10220 || t === 10221 || t === 10222 || t === 10223 || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || t === 10627 || t === 10628 || t === 10629 || t === 10630 || t === 10631 || t === 10632 || t === 10633 || t === 10634 || t === 10635 || t === 10636 || t === 10637 || t === 10638 || t === 10639 || t === 10640 || t === 10641 || t === 10642 || t === 10643 || t === 10644 || t === 10645 || t === 10646 || t === 10647 || t === 10648 || t >= 10649 && t <= 10711 || t === 10712 || t === 10713 || t === 10714 || t === 10715 || t >= 10716 && t <= 10747 || t === 10748 || t === 10749 || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || t === 11158 || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || t === 11778 || t === 11779 || t === 11780 || t === 11781 || t >= 11782 && t <= 11784 || t === 11785 || t === 11786 || t === 11787 || t === 11788 || t === 11789 || t >= 11790 && t <= 11798 || t === 11799 || t >= 11800 && t <= 11801 || t === 11802 || t === 11803 || t === 11804 || t === 11805 || t >= 11806 && t <= 11807 || t === 11808 || t === 11809 || t === 11810 || t === 11811 || t === 11812 || t === 11813 || t === 11814 || t === 11815 || t === 11816 || t === 11817 || t >= 11818 && t <= 11822 || t === 11823 || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || t === 11840 || t === 11841 || t === 11842 || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || t === 11858 || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || t === 12296 || t === 12297 || t === 12298 || t === 12299 || t === 12300 || t === 12301 || t === 12302 || t === 12303 || t === 12304 || t === 12305 || t >= 12306 && t <= 12307 || t === 12308 || t === 12309 || t === 12310 || t === 12311 || t === 12312 || t === 12313 || t === 12314 || t === 12315 || t === 12316 || t === 12317 || t >= 12318 && t <= 12319 || t === 12320 || t === 12336 || t === 64830 || t === 64831 || t >= 65093 && t <= 65094;
}
function Pu(t) {
  t.forEach(function (r) {
    delete r.location;
    if ($p(r) || Gp(r)) {
      for (var o in r.options) {
        delete r.options[o].location;
        Pu(r.options[o].value);
      }
    } else if (Up(r) && Wp(r.style) || (jp(r) || zp(r)) && xu(r.style)) {
      delete r.style.location;
    } else if (Vp(r)) {
      Pu(r.children);
    }
  });
}
function t0(t, r = {}) {
  r = $({
    shouldParseSkeletons: true,
    requiresOtherClause: true
  }, r);
  var o = new qy(t, r).parse();
  if (o.err) {
    var a = SyntaxError(re[o.err.kind]);
    a.location = o.err.location;
    a.originalMessage = o.err.message;
    throw a;
  }
  if (r == null || !r.captureLocation) {
    Pu(o.val);
  }
  return o.val;
}
var Bt;
(function (t) {
  t.MISSING_VALUE = "MISSING_VALUE";
  t.INVALID_VALUE = "INVALID_VALUE";
  t.MISSING_INTL_API = "MISSING_INTL_API";
})(Bt ||= {});
var In = function (t) {
  gt(r, t);
  function r(o, a, u) {
    var c = t.call(this, o) || this;
    c.code = a;
    c.originalMessage = u;
    return c;
  }
  r.prototype.toString = function () {
    return `[formatjs Error: ${this.code}] ${this.message}`;
  };
  return r;
}(Error);
var Nd = function (t) {
  gt(r, t);
  function r(o, a, u, c) {
    return t.call(this, `Invalid values for "${o}": "${a}". Options are "${Object.keys(u).join("\", \"")}"`, Bt.INVALID_VALUE, c) || this;
  }
  return r;
}(In);
var n0 = function (t) {
  gt(r, t);
  function r(o, a, u) {
    return t.call(this, `Value for "${o}" must be of type ${a}`, Bt.INVALID_VALUE, u) || this;
  }
  return r;
}(In);
var r0 = function (t) {
  gt(r, t);
  function r(o, a) {
    return t.call(this, `The intl string context variable "${o}" was not provided to the string "${a}"`, Bt.MISSING_VALUE, a) || this;
  }
  return r;
}(In);
var We;
(function (t) {
  t[t.literal = 0] = "literal";
  t[t.object = 1] = "object";
})(We ||= {});
function i0(t) {
  if (t.length < 2) {
    return t;
  } else {
    return t.reduce(function (r, o) {
      var a = r[r.length - 1];
      if (!a || a.type !== We.literal || o.type !== We.literal) {
        r.push(o);
      } else {
        a.value += o.value;
      }
      return r;
    }, []);
  }
}
function eh(t) {
  return typeof t == "function";
}
function Wo(t, r, o, a, u, c, d) {
  if (t.length === 1 && _d(t[0])) {
    return [{
      type: We.literal,
      value: t[0].value
    }];
  }
  var h = [];
  for (var m = 0, g = t; m < g.length; m++) {
    var v = g[m];
    if (_d(v)) {
      h.push({
        type: We.literal,
        value: v.value
      });
      continue;
    }
    if (ky(v)) {
      if (typeof c == "number") {
        h.push({
          type: We.literal,
          value: o.getNumberFormat(r).format(c)
        });
      }
      continue;
    }
    var S = v.value;
    if (!u || !(S in u)) {
      throw new r0(S, d);
    }
    var N = u[S];
    if (Ny(v)) {
      if (!N || typeof N == "string" || typeof N == "number") {
        N = typeof N == "string" || typeof N == "number" ? String(N) : "";
      }
      h.push({
        type: typeof N == "string" ? We.literal : We.object,
        value: N
      });
      continue;
    }
    if (jp(v)) {
      var k = typeof v.style == "string" ? a.date[v.style] : xu(v.style) ? v.style.parsedOptions : undefined;
      h.push({
        type: We.literal,
        value: o.getDateTimeFormat(r, k).format(N)
      });
      continue;
    }
    if (zp(v)) {
      var k = typeof v.style == "string" ? a.time[v.style] : xu(v.style) ? v.style.parsedOptions : a.time.medium;
      h.push({
        type: We.literal,
        value: o.getDateTimeFormat(r, k).format(N)
      });
      continue;
    }
    if (Up(v)) {
      var k = typeof v.style == "string" ? a.number[v.style] : Wp(v.style) ? v.style.parsedOptions : undefined;
      if (k && k.scale) {
        N = N * (k.scale || 1);
      }
      h.push({
        type: We.literal,
        value: o.getNumberFormat(r, k).format(N)
      });
      continue;
    }
    if (Vp(v)) {
      var A = v.children;
      var M = v.value;
      var H = u[M];
      if (!eh(H)) {
        throw new n0(M, "function", d);
      }
      var te = Wo(A, r, o, a, u, c);
      var q = H(te.map(function (D) {
        return D.value;
      }));
      if (!Array.isArray(q)) {
        q = [q];
      }
      h.push.apply(h, q.map(function (D) {
        return {
          type: typeof D == "string" ? We.literal : We.object,
          value: D
        };
      }));
    }
    if ($p(v)) {
      var Q = v.options[N] || v.options.other;
      if (!Q) {
        throw new Nd(v.value, N, Object.keys(v.options), d);
      }
      h.push.apply(h, Wo(Q.value, r, o, a, u));
      continue;
    }
    if (Gp(v)) {
      var Q = v.options[`=${N}`];
      if (!Q) {
        if (!Intl.PluralRules) {
          throw new In(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Bt.MISSING_INTL_API, d);
        }
        var ie = o.getPluralRules(r, {
          type: v.pluralType
        }).select(N - (v.offset || 0));
        Q = v.options[ie] || v.options.other;
      }
      if (!Q) {
        throw new Nd(v.value, N, Object.keys(v.options), d);
      }
      h.push.apply(h, Wo(Q.value, r, o, a, u, N - (v.offset || 0)));
      continue;
    }
  }
  return i0(h);
}
function o0(t, r) {
  if (r) {
    return $($($({}, t || {}), r || {}), Object.keys(t).reduce(function (o, a) {
      o[a] = $($({}, t[a]), r[a] || {});
      return o;
    }, {}));
  } else {
    return t;
  }
}
function s0(t, r) {
  if (r) {
    return Object.keys(t).reduce(function (o, a) {
      o[a] = o0(t[a], r[a]);
      return o;
    }, $({}, t));
  } else {
    return t;
  }
}
function au(t) {
  return {
    create: function () {
      return {
        get: function (r) {
          return t[r];
        },
        set: function (r, o) {
          t[r] = o;
        }
      };
    }
  };
}
function a0(t = {
  number: {},
  dateTime: {},
  pluralRules: {}
}) {
  return {
    getNumberFormat: Dt(function () {
      var r;
      var o = [];
      for (var a = 0; a < arguments.length; a++) {
        o[a] = arguments[a];
      }
      return new ((r = Intl.NumberFormat).bind.apply(r, Ft([undefined], o, false)))();
    }, {
      cache: au(t.number),
      strategy: Mt.variadic
    }),
    getDateTimeFormat: Dt(function () {
      var r;
      var o = [];
      for (var a = 0; a < arguments.length; a++) {
        o[a] = arguments[a];
      }
      return new ((r = Intl.DateTimeFormat).bind.apply(r, Ft([undefined], o, false)))();
    }, {
      cache: au(t.dateTime),
      strategy: Mt.variadic
    }),
    getPluralRules: Dt(function () {
      var r;
      var o = [];
      for (var a = 0; a < arguments.length; a++) {
        o[a] = arguments[a];
      }
      return new ((r = Intl.PluralRules).bind.apply(r, Ft([undefined], o, false)))();
    }, {
      cache: au(t.pluralRules),
      strategy: Mt.variadic
    })
  };
}
var th = function () {
  function t(r, o = t.defaultLocale, a, u) {
    var c = this;
    this.formatterCache = {
      number: {},
      dateTime: {},
      pluralRules: {}
    };
    this.format = function (m) {
      var g = c.formatToParts(m);
      if (g.length === 1) {
        return g[0].value;
      }
      var v = g.reduce(function (S, N) {
        if (!S.length || N.type !== We.literal || typeof S[S.length - 1] != "string") {
          S.push(N.value);
        } else {
          S[S.length - 1] += N.value;
        }
        return S;
      }, []);
      if (v.length <= 1) {
        return v[0] || "";
      } else {
        return v;
      }
    };
    this.formatToParts = function (m) {
      return Wo(c.ast, c.locales, c.formatters, c.formats, m, undefined, c.message);
    };
    this.resolvedOptions = function () {
      var m;
      return {
        locale: ((m = c.resolvedLocale) === null || m === undefined ? undefined : m.toString()) || Intl.NumberFormat.supportedLocalesOf(c.locales)[0]
      };
    };
    this.getAst = function () {
      return c.ast;
    };
    this.locales = o;
    this.resolvedLocale = t.resolveLocale(o);
    if (typeof r == "string") {
      this.message = r;
      if (!t.__parse) {
        throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
      }
      var d = u || {};
      d.formatters;
      var h = es(d, ["formatters"]);
      this.ast = t.__parse(r, $($({}, h), {
        locale: this.resolvedLocale
      }));
    } else {
      this.ast = r;
    }
    if (!Array.isArray(this.ast)) {
      throw new TypeError("A message must be provided as a String or AST.");
    }
    this.formats = s0(t.formats, a);
    this.formatters = u && u.formatters || a0(this.formatterCache);
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
      var o = Intl.NumberFormat.supportedLocalesOf(r);
      if (o.length > 0) {
        return new Intl.Locale(o[0]);
      } else {
        return new Intl.Locale(typeof r == "string" ? r : r[0]);
      }
    }
  };
  t.__parse = t0;
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
var $n;
(function (t) {
  t.FORMAT_ERROR = "FORMAT_ERROR";
  t.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER";
  t.INVALID_CONFIG = "INVALID_CONFIG";
  t.MISSING_DATA = "MISSING_DATA";
  t.MISSING_TRANSLATION = "MISSING_TRANSLATION";
})($n ||= {});
var Ei = function (t) {
  gt(r, t);
  function r(o, a, u) {
    var c = this;
    var d = u ? u instanceof Error ? u : new Error(String(u)) : undefined;
    c = t.call(this, `[@formatjs/intl Error ${o}] ${a}
${d ? `
${d.message}
${d.stack}` : ""}`) || this;
    c.code = o;
    if (typeof Error.captureStackTrace == "function") {
      Error.captureStackTrace(c, r);
    }
    return c;
  }
  return r;
}(Error);
var u0 = function (t) {
  gt(r, t);
  function r(o, a) {
    return t.call(this, $n.UNSUPPORTED_FORMATTER, o, a) || this;
  }
  return r;
}(Ei);
var l0 = function (t) {
  gt(r, t);
  function r(o, a) {
    return t.call(this, $n.INVALID_CONFIG, o, a) || this;
  }
  return r;
}(Ei);
var kd = function (t) {
  gt(r, t);
  function r(o, a) {
    return t.call(this, $n.MISSING_DATA, o, a) || this;
  }
  return r;
}(Ei);
var yt = function (t) {
  gt(r, t);
  function r(o, a, u) {
    var c = t.call(this, $n.FORMAT_ERROR, `${o}
Locale: ${a}
`, u) || this;
    c.locale = a;
    return c;
  }
  return r;
}(Ei);
var uu = function (t) {
  gt(r, t);
  function r(o, a, u, c) {
    var d = t.call(this, `${o}
MessageID: ${u == null ? undefined : u.id}
Default Message: ${u == null ? undefined : u.defaultMessage}
Description: ${u == null ? undefined : u.description}
`, a, c) || this;
    d.descriptor = u;
    d.locale = a;
    return d;
  }
  return r;
}(yt);
var c0 = function (t) {
  gt(r, t);
  function r(o, a) {
    var u = t.call(this, $n.MISSING_TRANSLATION, `Missing message: "${o.id}" for locale "${a}", using ${o.defaultMessage ? `default message (${typeof o.defaultMessage == "string" ? o.defaultMessage : o.defaultMessage.map(function (c) {
      return c.value ?? JSON.stringify(c);
    }).join()})` : "id"} as fallback.`) || this;
    u.descriptor = o;
    return u;
  }
  return r;
}(Ei);
function Ir(t, r, o = {}) {
  return r.reduce(function (a, u) {
    if (u in t) {
      a[u] = t[u];
    } else if (u in o) {
      a[u] = o[u];
    }
    return a;
  }, {});
}
function f0(t) {}
function d0(t) {}
var nh = {
  formats: {},
  messages: {},
  timeZone: undefined,
  defaultLocale: "en",
  defaultFormats: {},
  fallbackOnEmptyString: true,
  onError: f0,
  onWarn: d0
};
function rh() {
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
function Un(t) {
  return {
    create: function () {
      return {
        get: function (r) {
          return t[r];
        },
        set: function (r, o) {
          t[r] = o;
        }
      };
    }
  };
}
function p0(t = rh()) {
  var r = Intl.RelativeTimeFormat;
  var o = Intl.ListFormat;
  var a = Intl.DisplayNames;
  var u = Dt(function () {
    var h;
    var m = [];
    for (var g = 0; g < arguments.length; g++) {
      m[g] = arguments[g];
    }
    return new ((h = Intl.DateTimeFormat).bind.apply(h, Ft([undefined], m, false)))();
  }, {
    cache: Un(t.dateTime),
    strategy: Mt.variadic
  });
  var c = Dt(function () {
    var h;
    var m = [];
    for (var g = 0; g < arguments.length; g++) {
      m[g] = arguments[g];
    }
    return new ((h = Intl.NumberFormat).bind.apply(h, Ft([undefined], m, false)))();
  }, {
    cache: Un(t.number),
    strategy: Mt.variadic
  });
  var d = Dt(function () {
    var h;
    var m = [];
    for (var g = 0; g < arguments.length; g++) {
      m[g] = arguments[g];
    }
    return new ((h = Intl.PluralRules).bind.apply(h, Ft([undefined], m, false)))();
  }, {
    cache: Un(t.pluralRules),
    strategy: Mt.variadic
  });
  return {
    getDateTimeFormat: u,
    getNumberFormat: c,
    getMessageFormat: Dt(function (h, m, g, v) {
      return new th(h, m, g, $({
        formatters: {
          getNumberFormat: c,
          getDateTimeFormat: u,
          getPluralRules: d
        }
      }, v || {}));
    }, {
      cache: Un(t.message),
      strategy: Mt.variadic
    }),
    getRelativeTimeFormat: Dt(function () {
      var h = [];
      for (var m = 0; m < arguments.length; m++) {
        h[m] = arguments[m];
      }
      return new (r.bind.apply(r, Ft([undefined], h, false)))();
    }, {
      cache: Un(t.relativeTime),
      strategy: Mt.variadic
    }),
    getPluralRules: d,
    getListFormat: Dt(function () {
      var h = [];
      for (var m = 0; m < arguments.length; m++) {
        h[m] = arguments[m];
      }
      return new (o.bind.apply(o, Ft([undefined], h, false)))();
    }, {
      cache: Un(t.list),
      strategy: Mt.variadic
    }),
    getDisplayNames: Dt(function () {
      var h = [];
      for (var m = 0; m < arguments.length; m++) {
        h[m] = arguments[m];
      }
      return new (a.bind.apply(a, Ft([undefined], h, false)))();
    }, {
      cache: Un(t.displayNames),
      strategy: Mt.variadic
    })
  };
}
function Qu(t, r, o, a) {
  var u = t && t[r];
  var c;
  if (u) {
    c = u[o];
  }
  if (c) {
    return c;
  }
  a(new u0(`No ${r} format named: ${o}`));
}
function Uo(t, r) {
  return Object.keys(t).reduce(function (o, a) {
    o[a] = $({
      timeZone: r
    }, t[a]);
    return o;
  }, {});
}
function Cd(t, r) {
  var o = Object.keys($($({}, t), r));
  return o.reduce(function (a, u) {
    a[u] = $($({}, t[u] || {}), r[u] || {});
    return a;
  }, {});
}
function Pd(t, r) {
  if (!r) {
    return t;
  }
  var o = th.formats;
  return $($($({}, o), t), {
    date: Cd(Uo(o.date, r), Uo(t.date || {}, r)),
    time: Cd(Uo(o.time, r), Uo(t.time || {}, r))
  });
}
function Ru(t, r, o, a, u) {
  var c = t.locale;
  var d = t.formats;
  var h = t.messages;
  var m = t.defaultLocale;
  var g = t.defaultFormats;
  var v = t.fallbackOnEmptyString;
  var S = t.onError;
  var N = t.timeZone;
  var k = t.defaultRichTextElements;
  if (o === undefined) {
    o = {
      id: ""
    };
  }
  var A = o.id;
  var M = o.defaultMessage;
  if (!A) {
    var H = new Error("[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
    throw H;
  }
  var te = String(A);
  var q = h && Object.prototype.hasOwnProperty.call(h, te) && h[te];
  if (Array.isArray(q) && q.length === 1 && q[0].type === _e.literal) {
    return q[0].value;
  }
  if (!a && q && typeof q == "string" && !k) {
    return q.replace(/'\{(.*?)\}'/gi, "{$1}");
  }
  a = $($({}, k), a || {});
  d = Pd(d, N);
  g = Pd(g, N);
  if (!q) {
    if (v === false && q === "") {
      return q;
    }
    if (!M || c && c.toLowerCase() !== m.toLowerCase()) {
      S(new c0(o, c));
    }
    if (M) {
      try {
        var Q = r.getMessageFormat(M, m, g, u);
        return Q.format(a);
      } catch (ie) {
        S(new uu(`Error formatting default message for: "${te}", rendering default message verbatim`, c, o, ie));
        if (typeof M == "string") {
          return M;
        } else {
          return te;
        }
      }
    }
    return te;
  }
  try {
    var Q = r.getMessageFormat(q, c, d, $({
      formatters: r
    }, u || {}));
    return Q.format(a);
  } catch (ie) {
    S(new uu(`Error formatting message: "${te}", using ${M ? "default message" : "id"} as fallback.`, c, o, ie));
  }
  if (M) {
    try {
      var Q = r.getMessageFormat(M, m, g, u);
      return Q.format(a);
    } catch (ie) {
      S(new uu(`Error formatting the default message for: "${te}", rendering message verbatim`, c, o, ie));
    }
  }
  if (typeof q == "string") {
    return q;
  } else if (typeof M == "string") {
    return M;
  } else {
    return te;
  }
}
var h0 = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];
function Si(t, r, o, a) {
  var u = t.locale;
  var c = t.formats;
  var d = t.onError;
  var h = t.timeZone;
  if (a === undefined) {
    a = {};
  }
  var m = a.format;
  var g = $($({}, h && {
    timeZone: h
  }), m && Qu(c, r, m, d));
  var v = Ir(a, h0, g);
  if (r === "time" && !v.hour && !v.minute && !v.second && !v.timeStyle && !v.dateStyle) {
    v = $($({}, v), {
      hour: "numeric",
      minute: "numeric"
    });
  }
  return o(u, v);
}
function m0(t, r) {
  var o = [];
  for (var a = 2; a < arguments.length; a++) {
    o[a - 2] = arguments[a];
  }
  var u = o[0];
  var c = o[1];
  var d = c === undefined ? {} : c;
  var h = typeof u == "string" ? new Date(u || 0) : u;
  try {
    return Si(t, "date", r, d).format(h);
  } catch (m) {
    t.onError(new yt("Error formatting date.", t.locale, m));
  }
  return String(h);
}
function g0(t, r) {
  var o = [];
  for (var a = 2; a < arguments.length; a++) {
    o[a - 2] = arguments[a];
  }
  var u = o[0];
  var c = o[1];
  var d = c === undefined ? {} : c;
  var h = typeof u == "string" ? new Date(u || 0) : u;
  try {
    return Si(t, "time", r, d).format(h);
  } catch (m) {
    t.onError(new yt("Error formatting time.", t.locale, m));
  }
  return String(h);
}
function y0(t, r) {
  var o = [];
  for (var a = 2; a < arguments.length; a++) {
    o[a - 2] = arguments[a];
  }
  var u = o[0];
  var c = o[1];
  var d = o[2];
  var h = d === undefined ? {} : d;
  var m = typeof u == "string" ? new Date(u || 0) : u;
  var g = typeof c == "string" ? new Date(c || 0) : c;
  try {
    return Si(t, "dateTimeRange", r, h).formatRange(m, g);
  } catch (v) {
    t.onError(new yt("Error formatting date time range.", t.locale, v));
  }
  return String(m);
}
function v0(t, r) {
  var o = [];
  for (var a = 2; a < arguments.length; a++) {
    o[a - 2] = arguments[a];
  }
  var u = o[0];
  var c = o[1];
  var d = c === undefined ? {} : c;
  var h = typeof u == "string" ? new Date(u || 0) : u;
  try {
    return Si(t, "date", r, d).formatToParts(h);
  } catch (m) {
    t.onError(new yt("Error formatting date.", t.locale, m));
  }
  return [];
}
function _0(t, r) {
  var o = [];
  for (var a = 2; a < arguments.length; a++) {
    o[a - 2] = arguments[a];
  }
  var u = o[0];
  var c = o[1];
  var d = c === undefined ? {} : c;
  var h = typeof u == "string" ? new Date(u || 0) : u;
  try {
    return Si(t, "time", r, d).formatToParts(h);
  } catch (m) {
    t.onError(new yt("Error formatting time.", t.locale, m));
  }
  return [];
}
var E0 = ["style", "type", "fallback", "languageDisplay"];
function S0(t, r, o, a) {
  var u = t.locale;
  var c = t.onError;
  var d = Intl.DisplayNames;
  if (!d) {
    c(new In(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`, Bt.MISSING_INTL_API));
  }
  var h = Ir(a, E0);
  try {
    return r(u, h).of(o);
  } catch (m) {
    c(new yt("Error formatting display name.", u, m));
  }
}
var w0 = ["type", "style"];
var Rd = Date.now();
function T0(t) {
  return `${Rd}_${t}_${Rd}`;
}
function x0(t, r, o, a = {}) {
  var u = ih(t, r, o, a).reduce(function (c, d) {
    var h = d.value;
    if (typeof h != "string") {
      c.push(h);
    } else if (typeof c[c.length - 1] == "string") {
      c[c.length - 1] += h;
    } else {
      c.push(h);
    }
    return c;
  }, []);
  if (u.length === 1) {
    return u[0];
  } else if (u.length === 0) {
    return "";
  } else {
    return u;
  }
}
function ih(t, r, o, a) {
  var u = t.locale;
  var c = t.onError;
  if (a === undefined) {
    a = {};
  }
  var d = Intl.ListFormat;
  if (!d) {
    c(new In(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`, Bt.MISSING_INTL_API));
  }
  var h = Ir(a, w0);
  try {
    var m = {};
    var g = o.map(function (v, S) {
      if (typeof v == "object") {
        var N = T0(S);
        m[N] = v;
        return N;
      }
      return String(v);
    });
    return r(u, h).formatToParts(g).map(function (v) {
      if (v.type === "literal") {
        return v;
      } else {
        return $($({}, v), {
          value: m[v.value] || v.value
        });
      }
    });
  } catch (v) {
    c(new yt("Error formatting list.", u, v));
  }
  return o;
}
var I0 = ["type"];
function N0(t, r, o, a) {
  var u = t.locale;
  var c = t.onError;
  if (a === undefined) {
    a = {};
  }
  if (!Intl.PluralRules) {
    c(new In(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Bt.MISSING_INTL_API));
  }
  var d = Ir(a, I0);
  try {
    return r(u, d).select(o);
  } catch (h) {
    c(new yt("Error formatting plural.", u, h));
  }
  return "other";
}
var k0 = ["numeric", "style"];
function C0(t, r, o) {
  var a = t.locale;
  var u = t.formats;
  var c = t.onError;
  if (o === undefined) {
    o = {};
  }
  var d = o.format;
  var h = !!d && Qu(u, "relative", d, c) || {};
  var m = Ir(o, k0, h);
  return r(a, m);
}
function P0(t, r, o, a, u = {}) {
  a ||= "second";
  var c = Intl.RelativeTimeFormat;
  if (!c) {
    t.onError(new In(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`, Bt.MISSING_INTL_API));
  }
  try {
    return C0(t, r, u).format(o, a);
  } catch (d) {
    t.onError(new yt("Error formatting relative time.", t.locale, d));
  }
  return String(o);
}
var R0 = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];
function oh(t, r, o) {
  var a = t.locale;
  var u = t.formats;
  var c = t.onError;
  if (o === undefined) {
    o = {};
  }
  var d = o.format;
  var h = d && Qu(u, "number", d, c) || {};
  var m = Ir(o, R0, h);
  return r(a, m);
}
function L0(t, r, o, a = {}) {
  try {
    return oh(t, r, a).format(o);
  } catch (u) {
    t.onError(new yt("Error formatting number.", t.locale, u));
  }
  return String(o);
}
function O0(t, r, o, a = {}) {
  try {
    return oh(t, r, a).formatToParts(o);
  } catch (u) {
    t.onError(new yt("Error formatting number.", t.locale, u));
  }
  return [];
}
function A0(t) {
  var r = t ? t[Object.keys(t)[0]] : undefined;
  return typeof r == "string";
}
function D0(t) {
  if (t.onWarn && t.defaultRichTextElements && A0(t.messages || {})) {
    t.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`);
  }
}
function M0(t, r) {
  var o = p0(r);
  var a = $($({}, nh), t);
  var u = a.locale;
  var c = a.defaultLocale;
  var d = a.onError;
  if (u) {
    if (!Intl.NumberFormat.supportedLocalesOf(u).length && d) {
      d(new kd(`Missing locale data for locale: "${u}" in Intl.NumberFormat. Using default locale: "${c}" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details`));
    } else if (!Intl.DateTimeFormat.supportedLocalesOf(u).length && d) {
      d(new kd(`Missing locale data for locale: "${u}" in Intl.DateTimeFormat. Using default locale: "${c}" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details`));
    }
  } else {
    if (d) {
      d(new l0(`"locale" was not configured, using "${c}" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details`));
    }
    a.locale = a.defaultLocale || "en";
  }
  D0(a);
  return $($({}, a), {
    formatters: o,
    formatNumber: L0.bind(null, a, o.getNumberFormat),
    formatNumberToParts: O0.bind(null, a, o.getNumberFormat),
    formatRelativeTime: P0.bind(null, a, o.getRelativeTimeFormat),
    formatDate: m0.bind(null, a, o.getDateTimeFormat),
    formatDateToParts: v0.bind(null, a, o.getDateTimeFormat),
    formatTime: g0.bind(null, a, o.getDateTimeFormat),
    formatDateTimeRange: y0.bind(null, a, o.getDateTimeFormat),
    formatTimeToParts: _0.bind(null, a, o.getDateTimeFormat),
    formatPlural: N0.bind(null, a, o.getPluralRules),
    formatMessage: Ru.bind(null, a, o),
    $t: Ru.bind(null, a, o),
    formatList: x0.bind(null, a, o.getListFormat),
    formatListToParts: ih.bind(null, a, o.getListFormat),
    formatDisplayName: S0.bind(null, a, o.getDisplayNames)
  });
}
function b0(t, r, o = Error) {
  if (!t) {
    throw new o(r);
  }
}
function sh(t) {
  b0(t, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
var ah = $($({}, nh), {
  textComponent: ze.Fragment
});
var F0 = {
  key: 42
};
function H0(t) {
  if (ze.isValidElement(t)) {
    return ze.createElement(ze.Fragment, F0, t);
  } else {
    return t;
  }
}
function B0(t) {
  return ze.Children.map(t, H0) ?? [];
}
function U0(t) {
  return function (r) {
    return t(ze.Children.toArray(r));
  };
}
function j0(t, r) {
  if (t === r) {
    return true;
  }
  if (!t || !r) {
    return false;
  }
  var o = Object.keys(t);
  var a = Object.keys(r);
  var u = o.length;
  if (a.length !== u) {
    return false;
  }
  for (var c = 0; c < u; c++) {
    var d = o[c];
    if (t[d] !== r[d] || !Object.prototype.hasOwnProperty.call(r, d)) {
      return false;
    }
  }
  return true;
}
var lu = {
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
var Ld;
function z0() {
  if (Ld) {
    return fe;
  }
  Ld = 1;
  var t = typeof Symbol == "function" && Symbol.for;
  var r = t ? Symbol.for("react.element") : 60103;
  var o = t ? Symbol.for("react.portal") : 60106;
  var a = t ? Symbol.for("react.fragment") : 60107;
  var u = t ? Symbol.for("react.strict_mode") : 60108;
  var c = t ? Symbol.for("react.profiler") : 60114;
  var d = t ? Symbol.for("react.provider") : 60109;
  var h = t ? Symbol.for("react.context") : 60110;
  var m = t ? Symbol.for("react.async_mode") : 60111;
  var g = t ? Symbol.for("react.concurrent_mode") : 60111;
  var v = t ? Symbol.for("react.forward_ref") : 60112;
  var S = t ? Symbol.for("react.suspense") : 60113;
  var N = t ? Symbol.for("react.suspense_list") : 60120;
  var k = t ? Symbol.for("react.memo") : 60115;
  var A = t ? Symbol.for("react.lazy") : 60116;
  var M = t ? Symbol.for("react.block") : 60121;
  var H = t ? Symbol.for("react.fundamental") : 60117;
  var te = t ? Symbol.for("react.responder") : 60118;
  var q = t ? Symbol.for("react.scope") : 60119;
  function Q(D) {
    if (typeof D == "object" && D !== null) {
      var ce = D.$$typeof;
      switch (ce) {
        case r:
          D = D.type;
          switch (D) {
            case m:
            case g:
            case a:
            case c:
            case u:
            case S:
              return D;
            default:
              D = D && D.$$typeof;
              switch (D) {
                case h:
                case v:
                case A:
                case k:
                case d:
                  return D;
                default:
                  return ce;
              }
          }
        case o:
          return ce;
      }
    }
  }
  function ie(D) {
    return Q(D) === g;
  }
  fe.AsyncMode = m;
  fe.ConcurrentMode = g;
  fe.ContextConsumer = h;
  fe.ContextProvider = d;
  fe.Element = r;
  fe.ForwardRef = v;
  fe.Fragment = a;
  fe.Lazy = A;
  fe.Memo = k;
  fe.Portal = o;
  fe.Profiler = c;
  fe.StrictMode = u;
  fe.Suspense = S;
  fe.isAsyncMode = function (D) {
    return ie(D) || Q(D) === m;
  };
  fe.isConcurrentMode = ie;
  fe.isContextConsumer = function (D) {
    return Q(D) === h;
  };
  fe.isContextProvider = function (D) {
    return Q(D) === d;
  };
  fe.isElement = function (D) {
    return typeof D == "object" && D !== null && D.$$typeof === r;
  };
  fe.isForwardRef = function (D) {
    return Q(D) === v;
  };
  fe.isFragment = function (D) {
    return Q(D) === a;
  };
  fe.isLazy = function (D) {
    return Q(D) === A;
  };
  fe.isMemo = function (D) {
    return Q(D) === k;
  };
  fe.isPortal = function (D) {
    return Q(D) === o;
  };
  fe.isProfiler = function (D) {
    return Q(D) === c;
  };
  fe.isStrictMode = function (D) {
    return Q(D) === u;
  };
  fe.isSuspense = function (D) {
    return Q(D) === S;
  };
  fe.isValidElementType = function (D) {
    return typeof D == "string" || typeof D == "function" || D === a || D === g || D === c || D === u || D === S || D === N || typeof D == "object" && D !== null && (D.$$typeof === A || D.$$typeof === k || D.$$typeof === d || D.$$typeof === h || D.$$typeof === v || D.$$typeof === H || D.$$typeof === te || D.$$typeof === q || D.$$typeof === M);
  };
  fe.typeOf = Q;
  return fe;
}
var Od;
function $0() {
  if (!Od) {
    Od = 1;
    lu.exports = z0();
  }
  return lu.exports;
}
var cu;
var Ad;
function G0() {
  if (Ad) {
    return cu;
  }
  Ad = 1;
  var t = $0();
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
  var o = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
  };
  var a = {
    $$typeof: true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  };
  var u = {
    $$typeof: true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  };
  var c = {
    [t.ForwardRef]: a,
    [t.Memo]: u
  };
  function d(A) {
    if (t.isMemo(A)) {
      return u;
    } else {
      return c[A.$$typeof] || r;
    }
  }
  var h = Object.defineProperty;
  var m = Object.getOwnPropertyNames;
  var g = Object.getOwnPropertySymbols;
  var v = Object.getOwnPropertyDescriptor;
  var S = Object.getPrototypeOf;
  var N = Object.prototype;
  function k(A, M, H) {
    if (typeof M != "string") {
      if (N) {
        var te = S(M);
        if (te && te !== N) {
          k(A, te, H);
        }
      }
      var q = m(M);
      if (g) {
        q = q.concat(g(M));
      }
      var Q = d(A);
      var ie = d(M);
      for (var D = 0; D < q.length; ++D) {
        var ce = q[D];
        if (!o[ce] && (!H || !H[ce]) && (!ie || !ie[ce]) && (!Q || !Q[ce])) {
          var Re = v(M, ce);
          try {
            h(A, ce, Re);
          } catch {}
        }
      }
    }
    return A;
  }
  cu = k;
  return cu;
}
G0();
var Ku = typeof window !== "undefined" && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ ||= ze.createContext(null) : ze.createContext(null);
Ku.Consumer;
var V0 = Ku.Provider;
var W0 = V0;
var X0 = Ku;
function uh() {
  var t = ze.useContext(X0);
  sh(t);
  return t;
}
var Lu;
(function (t) {
  t.formatDate = "FormattedDate";
  t.formatTime = "FormattedTime";
  t.formatNumber = "FormattedNumber";
  t.formatList = "FormattedList";
  t.formatDisplayName = "FormattedDisplayName";
})(Lu ||= {});
var Ou;
(function (t) {
  t.formatDate = "FormattedDateParts";
  t.formatTime = "FormattedTimeParts";
  t.formatNumber = "FormattedNumberParts";
  t.formatList = "FormattedListParts";
})(Ou ||= {});
function lh(t) {
  function r(o) {
    var a = uh();
    var u = o.value;
    var c = o.children;
    var d = es(o, ["value", "children"]);
    var h = typeof u == "string" ? new Date(u || 0) : u;
    var m = t === "formatDate" ? a.formatDateToParts(h, d) : a.formatTimeToParts(h, d);
    return c(m);
  }
  r.displayName = Ou[t];
  return r;
}
function wi(t) {
  function r(o) {
    var a = uh();
    var u = o.value;
    var c = o.children;
    var d = es(o, ["value", "children"]);
    var h = a[t](u, d);
    if (typeof c == "function") {
      return c(h);
    }
    var m = a.textComponent || ze.Fragment;
    return ze.createElement(m, null, h);
  }
  r.displayName = Lu[t];
  return r;
}
function ch(t) {
  return t && Object.keys(t).reduce(function (r, o) {
    var a = t[o];
    r[o] = eh(a) ? U0(a) : a;
    return r;
  }, {});
}
function Dd(t, r, o, a) {
  var u = [];
  for (var c = 4; c < arguments.length; c++) {
    u[c - 4] = arguments[c];
  }
  var d = ch(a);
  var h = Ru.apply(undefined, Ft([t, r, o, d], u, false));
  if (Array.isArray(h)) {
    return B0(h);
  } else {
    return h;
  }
}
function Md(t, r) {
  var o = t.defaultRichTextElements;
  var a = es(t, ["defaultRichTextElements"]);
  var u = ch(o);
  var c = M0($($($({}, ah), a), {
    defaultRichTextElements: u
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
    defaultRichTextElements: u
  };
  return $($({}, c), {
    formatMessage: Dd.bind(null, d, c.formatters),
    $t: Dd.bind(null, d, c.formatters)
  });
}
function fu(t) {
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
var Y0 = function (t) {
  gt(r, t);
  function r() {
    var o = t !== null && t.apply(this, arguments) || this;
    o.cache = rh();
    o.state = {
      cache: o.cache,
      intl: Md(fu(o.props), o.cache),
      prevConfig: fu(o.props)
    };
    return o;
  }
  r.getDerivedStateFromProps = function (o, a) {
    var u = a.prevConfig;
    var c = a.cache;
    var d = fu(o);
    if (j0(u, d)) {
      return null;
    } else {
      return {
        intl: Md(d, c),
        prevConfig: d
      };
    }
  };
  r.prototype.render = function () {
    sh(this.state.intl);
    return ze.createElement(W0, {
      value: this.state.intl
    }, this.props.children);
  };
  r.displayName = "IntlProvider";
  r.defaultProps = ah;
  return r;
}(ze.PureComponent);
wi("formatDate");
wi("formatTime");
wi("formatNumber");
wi("formatList");
wi("formatDisplayName");
lh("formatDate");
lh("formatTime");
var Dp;
const Ht = (Dp = globalThis["claude.hybrid"]) == null ? undefined : Dp.DesktopIntl;
var Mp;
const Q0 = ((Mp = Ht == null ? undefined : Ht.getInitialLocale) == null ? undefined : Mp.call(Ht)) ?? Promise.reject(new Error("DesktopIntl bridge is not exposed in this window"));
const K0 = Q0.then(({
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
function _Component2(t) {
  const [r, o] = ze.useState(null);
  ze.useEffect(() => {
    var a;
    K0.then(u => o(c => c ?? u));
    if ((a = Ht == null ? undefined : Ht.onLocaleChanged) == null) {
      return undefined;
    } else {
      return a.call(Ht, (u, c) => {
        o({
          locale: u,
          messages: c
        });
      });
    }
  }, []);
  if (r === null) {
    return null;
  } else {
    return <Y0 locale={r.locale} messages={r.messages} {...t} />;
  }
}
async function fh(t, r, o) {
  const a = await r;
  const _Component = "default" in a ? a.default : a;
  const c = vy.createRoot(t);
  const d = o ?? {};
  c.render(<_Component2><_Component {...d} /></_Component2>);
  return () => {
    c.unmount();
  };
}
window.attachReactToElement = fh;
const Z = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const he = globalThis;
const zn = "10.27.0";
function ts() {
  ns(he);
  return he;
}
function ns(t) {
  const r = t.__SENTRY__ = t.__SENTRY__ || {};
  r.version = r.version || zn;
  return r[zn] = r[zn] || {};
}
function Nr(t, r, o = he) {
  const a = o.__SENTRY__ = o.__SENTRY__ || {};
  const u = a[zn] = a[zn] || {};
  return u[t] ||= r();
}
const Z0 = ["debug", "info", "warn", "error", "log", "assert", "trace"];
const J0 = "Sentry Logger ";
const qo = {};
function kr(t) {
  if (!("console" in he)) {
    return t();
  }
  const r = he.console;
  const o = {};
  const a = Object.keys(qo);
  a.forEach(u => {
    const c = qo[u];
    o[u] = r[u];
    r[u] = c;
  });
  try {
    return t();
  } finally {
    a.forEach(u => {
      r[u] = o[u];
    });
  }
}
function ev() {
  Zu().enabled = true;
}
function tv() {
  Zu().enabled = false;
}
function dh() {
  return Zu().enabled;
}
function nv(...t) {
  qu("log", ...t);
}
function rv(...t) {
  qu("warn", ...t);
}
function iv(...t) {
  qu("error", ...t);
}
function qu(t, ...r) {
  if (Z && dh()) {
    kr(() => {
      he.console[t](`${J0}[${t}]:`, ...r);
    });
  }
}
function Zu() {
  if (Z) {
    return Nr("loggerSettings", () => ({
      enabled: false
    }));
  } else {
    return {
      enabled: false
    };
  }
}
const Y = {
  enable: ev,
  disable: tv,
  isEnabled: dh,
  log: nv,
  warn: rv,
  error: iv
};
const ph = 50;
const wn = "?";
const bd = /\(error: (.*)\)/;
const Fd = /captureMessage|captureException/;
function hh(...t) {
  const r = t.sort((o, a) => o[0] - a[0]).map(o => o[1]);
  return (o, a = 0, u = 0) => {
    const c = [];
    const d = o.split(`
`);
    for (let h = a; h < d.length; h++) {
      let m = d[h];
      if (m.length > 1024) {
        m = m.slice(0, 1024);
      }
      const g = bd.test(m) ? m.replace(bd, "$1") : m;
      if (!g.match(/\S*Error: /)) {
        for (const v of r) {
          const S = v(g);
          if (S) {
            c.push(S);
            break;
          }
        }
        if (c.length >= ph + u) {
          break;
        }
      }
    }
    return mh(c.slice(u));
  };
}
function ov(t) {
  if (Array.isArray(t)) {
    return hh(...t);
  } else {
    return t;
  }
}
function mh(t) {
  if (!t.length) {
    return [];
  }
  const r = Array.from(t);
  if (/sentryWrapped/.test(jo(r).function || "")) {
    r.pop();
  }
  r.reverse();
  if (Fd.test(jo(r).function || "")) {
    r.pop();
    if (Fd.test(jo(r).function || "")) {
      r.pop();
    }
  }
  return r.slice(0, ph).map(o => ({
    ...o,
    filename: o.filename || jo(r).filename,
    function: o.function || wn
  }));
}
function jo(t) {
  return t[t.length - 1] || {};
}
const du = "<anonymous>";
function Tn(t) {
  try {
    if (!t || typeof t != "function") {
      return du;
    } else {
      return t.name || du;
    }
  } catch {
    return du;
  }
}
function Hd(t) {
  const r = t.exception;
  if (r) {
    const o = [];
    try {
      r.values.forEach(a => {
        if (a.stacktrace.frames) {
          o.push(...a.stacktrace.frames);
        }
      });
      return o;
    } catch {
      return;
    }
  }
}
function gh(t) {
  if ("__v_isVNode" in t && t.__v_isVNode) {
    return "[VueVNode]";
  } else {
    return "[VueViewModel]";
  }
}
const Xo = {};
const Bd = {};
function Wn(t, r) {
  Xo[t] = Xo[t] || [];
  Xo[t].push(r);
}
function Xn(t, r) {
  if (!Bd[t]) {
    Bd[t] = true;
    try {
      r();
    } catch (o) {
      if (Z) {
        Y.error(`Error while instrumenting ${t}`, o);
      }
    }
  }
}
function Nt(t, r) {
  const o = t && Xo[t];
  if (o) {
    for (const a of o) {
      try {
        a(r);
      } catch (u) {
        if (Z) {
          Y.error(`Error while triggering instrumentation handler.
Type: ${t}
Name: ${Tn(a)}
Error:`, u);
        }
      }
    }
  }
}
let pu = null;
function sv(t) {
  const r = "error";
  Wn(r, t);
  Xn(r, av);
}
function av() {
  pu = he.onerror;
  he.onerror = function (t, r, o, a, u) {
    Nt("error", {
      column: a,
      error: u,
      line: o,
      msg: t,
      url: r
    });
    if (pu) {
      return pu.apply(this, arguments);
    } else {
      return false;
    }
  };
  he.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let hu = null;
function uv(t) {
  const r = "unhandledrejection";
  Wn(r, t);
  Xn(r, lv);
}
function lv() {
  hu = he.onunhandledrejection;
  he.onunhandledrejection = function (t) {
    Nt("unhandledrejection", t);
    if (hu) {
      return hu.apply(this, arguments);
    } else {
      return true;
    }
  };
  he.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
const yh = Object.prototype.toString;
function Ju(t) {
  switch (yh.call(t)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
    case "[object WebAssembly.Exception]":
      return true;
    default:
      return xn(t, Error);
  }
}
function Cr(t, r) {
  return yh.call(t) === `[object ${r}]`;
}
function vh(t) {
  return Cr(t, "ErrorEvent");
}
function Ud(t) {
  return Cr(t, "DOMError");
}
function cv(t) {
  return Cr(t, "DOMException");
}
function qt(t) {
  return Cr(t, "String");
}
function el(t) {
  return typeof t == "object" && t !== null && "__sentry_template_string__" in t && "__sentry_template_values__" in t;
}
function rs(t) {
  return t === null || el(t) || typeof t != "object" && typeof t != "function";
}
function yi(t) {
  return Cr(t, "Object");
}
function is(t) {
  return typeof Event !== "undefined" && xn(t, Event);
}
function fv(t) {
  return typeof Element !== "undefined" && xn(t, Element);
}
function dv(t) {
  return Cr(t, "RegExp");
}
function Ti(t) {
  return t != null && !!t.then && typeof t.then == "function";
}
function pv(t) {
  return yi(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t;
}
function xn(t, r) {
  try {
    return t instanceof r;
  } catch {
    return false;
  }
}
function _h(t) {
  return typeof t == "object" && t !== null && (!!t.__isVue || !!t._isVue || !!t.__v_isVNode);
}
function hv(t) {
  return typeof Request !== "undefined" && xn(t, Request);
}
const tl = he;
const mv = 80;
function Eh(t, r = {}) {
  if (!t) {
    return "<unknown>";
  }
  try {
    let o = t;
    const a = 5;
    const u = [];
    let c = 0;
    let d = 0;
    const h = " > ";
    const m = h.length;
    let g;
    const v = Array.isArray(r) ? r : r.keyAttrs;
    const S = !Array.isArray(r) && r.maxStringLength || mv;
    while (o && c++ < a && (g = gv(o, v), g !== "html" && (!(c > 1) || !(d + u.length * m + g.length >= S)))) {
      u.push(g);
      d += g.length;
      o = o.parentNode;
    }
    return u.reverse().join(h);
  } catch {
    return "<unknown>";
  }
}
function gv(t, r) {
  const o = t;
  const a = [];
  if (o == null || !o.tagName) {
    return "";
  }
  if (tl.HTMLElement && o instanceof HTMLElement && o.dataset) {
    if (o.dataset.sentryComponent) {
      return o.dataset.sentryComponent;
    }
    if (o.dataset.sentryElement) {
      return o.dataset.sentryElement;
    }
  }
  a.push(o.tagName.toLowerCase());
  const u = r != null && r.length ? r.filter(d => o.getAttribute(d)).map(d => [d, o.getAttribute(d)]) : null;
  if (u != null && u.length) {
    u.forEach(d => {
      a.push(`[${d[0]}="${d[1]}"]`);
    });
  } else {
    if (o.id) {
      a.push(`#${o.id}`);
    }
    const d = o.className;
    if (d && qt(d)) {
      const h = d.split(/\s+/);
      for (const m of h) {
        a.push(`.${m}`);
      }
    }
  }
  const c = ["aria-label", "type", "name", "title", "alt"];
  for (const d of c) {
    const h = o.getAttribute(d);
    if (h) {
      a.push(`[${d}="${h}"]`);
    }
  }
  return a.join("");
}
function nl() {
  try {
    return tl.document.location.href;
  } catch {
    return "";
  }
}
function yv(t) {
  if (!tl.HTMLElement) {
    return null;
  }
  let r = t;
  const o = 5;
  for (let a = 0; a < o; a++) {
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
function ut(t, r, o) {
  if (!(r in t)) {
    return;
  }
  const a = t[r];
  if (typeof a != "function") {
    return;
  }
  const u = o(a);
  if (typeof u == "function") {
    Sh(u, a);
  }
  try {
    t[r] = u;
  } catch {
    if (Z) {
      Y.log(`Failed to replace method "${r}" in object`, t);
    }
  }
}
function Gn(t, r, o) {
  try {
    Object.defineProperty(t, r, {
      value: o,
      writable: true,
      configurable: true
    });
  } catch {
    if (Z) {
      Y.log(`Failed to add non-enumerable property "${r}" to object`, t);
    }
  }
}
function Sh(t, r) {
  try {
    const o = r.prototype || {};
    t.prototype = r.prototype = o;
    Gn(t, "__sentry_original__", r);
  } catch {}
}
function rl(t) {
  return t.__sentry_original__;
}
function wh(t) {
  if (Ju(t)) {
    return {
      message: t.message,
      name: t.name,
      stack: t.stack,
      ...zd(t)
    };
  }
  if (is(t)) {
    const r = {
      type: t.type,
      target: jd(t.target),
      currentTarget: jd(t.currentTarget),
      ...zd(t)
    };
    if (typeof CustomEvent !== "undefined" && xn(t, CustomEvent)) {
      r.detail = t.detail;
    }
    return r;
  } else {
    return t;
  }
}
function jd(t) {
  try {
    if (fv(t)) {
      return Eh(t);
    } else {
      return Object.prototype.toString.call(t);
    }
  } catch {
    return "<unknown>";
  }
}
function zd(t) {
  if (typeof t == "object" && t !== null) {
    const r = {};
    for (const o in t) {
      if (Object.prototype.hasOwnProperty.call(t, o)) {
        r[o] = t[o];
      }
    }
    return r;
  } else {
    return {};
  }
}
function vv(t) {
  const r = Object.keys(wh(t));
  r.sort();
  if (r[0]) {
    return r.join(", ");
  } else {
    return "[object has no keys]";
  }
}
function Au(t, r = 0) {
  if (typeof t != "string" || r === 0 || t.length <= r) {
    return t;
  } else {
    return `${t.slice(0, r)}...`;
  }
}
function $d(t, r) {
  if (!Array.isArray(t)) {
    return "";
  }
  const o = [];
  for (let a = 0; a < t.length; a++) {
    const u = t[a];
    try {
      if (_h(u)) {
        o.push(gh(u));
      } else {
        o.push(String(u));
      }
    } catch {
      o.push("[value cannot be serialized]");
    }
  }
  return o.join(r);
}
function Yo(t, r, o = false) {
  if (qt(t)) {
    if (dv(r)) {
      return r.test(t);
    } else if (qt(r)) {
      if (o) {
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
function os(t, r = [], o = false) {
  return r.some(a => Yo(t, a, o));
}
function _v() {
  const t = he;
  return t.crypto || t.msCrypto;
}
let mu;
function Ev() {
  return Math.random() * 16;
}
function lt(t = _v()) {
  try {
    if (t != null && t.randomUUID) {
      return t.randomUUID().replace(/-/g, "");
    }
  } catch {}
  mu ||= "10000000100040008000100000000000";
  return mu.replace(/[018]/g, r => (r ^ (Ev() & 15) >> r / 4).toString(16));
}
function Th(t) {
  var r;
  var o;
  if ((o = (r = t.exception) == null ? undefined : r.values) == null) {
    return undefined;
  } else {
    return o[0];
  }
}
function jn(t) {
  const {
    message: r,
    event_id: o
  } = t;
  if (r) {
    return r;
  }
  const a = Th(t);
  if (a) {
    if (a.type && a.value) {
      return `${a.type}: ${a.value}`;
    } else {
      return a.type || a.value || o || "<unknown>";
    }
  } else {
    return o || "<unknown>";
  }
}
function Du(t, r, o) {
  const a = t.exception = t.exception || {};
  const u = a.values = a.values || [];
  const c = u[0] = u[0] || {};
  c.value ||= r || "";
  c.type ||= "Error";
}
function Sr(t, r) {
  const o = Th(t);
  if (!o) {
    return;
  }
  const a = {
    type: "generic",
    handled: true
  };
  const u = o.mechanism;
  o.mechanism = {
    ...a,
    ...u,
    ...r
  };
  if (r && "data" in r) {
    const c = {
      ...(u == null ? undefined : u.data),
      ...r.data
    };
    o.mechanism.data = c;
  }
}
function Gd(t) {
  if (Sv(t)) {
    return true;
  }
  try {
    Gn(t, "__sentry_captured__", true);
  } catch {}
  return false;
}
function Sv(t) {
  try {
    return t.__sentry_captured__;
  } catch {}
}
const xh = 1000;
function xi() {
  return Date.now() / xh;
}
function wv() {
  const {
    performance: t
  } = he;
  if (t == null || !t.now || !t.timeOrigin) {
    return xi;
  }
  const r = t.timeOrigin;
  return () => (r + t.now()) / xh;
}
let Vd;
function Zt() {
  return (Vd ??= wv())();
}
function Tv(t) {
  const r = Zt();
  const o = {
    sid: lt(),
    init: true,
    timestamp: r,
    started: r,
    duration: 0,
    status: "ok",
    errors: 0,
    ignoreDuration: false,
    toJSON: () => Iv(o)
  };
  if (t) {
    wr(o, t);
  }
  return o;
}
function wr(t, r = {}) {
  if (r.user) {
    if (!t.ipAddress && r.user.ip_address) {
      t.ipAddress = r.user.ip_address;
    }
    if (!t.did && !r.did) {
      t.did = r.user.id || r.user.email || r.user.username;
    }
  }
  t.timestamp = r.timestamp || Zt();
  if (r.abnormal_mechanism) {
    t.abnormal_mechanism = r.abnormal_mechanism;
  }
  if (r.ignoreDuration) {
    t.ignoreDuration = r.ignoreDuration;
  }
  if (r.sid) {
    t.sid = r.sid.length === 32 ? r.sid : lt();
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
    const o = t.timestamp - t.started;
    t.duration = o >= 0 ? o : 0;
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
function xv(t, r) {
  let o = {};
  if (t.status === "ok") {
    o = {
      status: "exited"
    };
  }
  wr(t, o);
}
function Iv(t) {
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
function Ii(t, r, o = 2) {
  if (!r || typeof r != "object" || o <= 0) {
    return r;
  }
  if (t && Object.keys(r).length === 0) {
    return t;
  }
  const a = {
    ...t
  };
  for (const u in r) {
    if (Object.prototype.hasOwnProperty.call(r, u)) {
      a[u] = Ii(a[u], r[u], o - 1);
    }
  }
  return a;
}
function Wd() {
  return lt();
}
function Ih() {
  return lt().substring(16);
}
const Mu = "_sentrySpan";
function Xd(t, r) {
  if (r) {
    Gn(t, Mu, r);
  } else {
    delete t[Mu];
  }
}
function Yd(t) {
  return t[Mu];
}
const Nv = 100;
class Jt {
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
      traceId: Wd(),
      sampleRand: Math.random()
    };
  }
  clone() {
    const r = new Jt();
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
    Xd(r, Yd(this));
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
      wr(this._session, {
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
  setTag(r, o) {
    return this.setTags({
      [r]: o
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
  setAttribute(r, o) {
    return this.setAttributes({
      [r]: o
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
  setExtra(r, o) {
    this._extra = {
      ...this._extra,
      [r]: o
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
  setContext(r, o) {
    if (o === null) {
      delete this._contexts[r];
    } else {
      this._contexts[r] = o;
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
    const o = typeof r == "function" ? r(this) : r;
    const a = o instanceof Jt ? o.getScopeData() : yi(o) ? r : undefined;
    const {
      tags: u,
      attributes: c,
      extra: d,
      user: h,
      contexts: m,
      level: g,
      fingerprint: v = [],
      propagationContext: S
    } = a || {};
    this._tags = {
      ...this._tags,
      ...u
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
      ...m
    };
    if (h && Object.keys(h).length) {
      this._user = h;
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
    Xd(this, undefined);
    this._attachments = [];
    this.setPropagationContext({
      traceId: Wd(),
      sampleRand: Math.random()
    });
    this._notifyScopeListeners();
    return this;
  }
  addBreadcrumb(r, o) {
    var c;
    const a = typeof o == "number" ? o : Nv;
    if (a <= 0) {
      return this;
    }
    const u = {
      timestamp: xi(),
      ...r,
      message: r.message ? Au(r.message, 2048) : r.message
    };
    this._breadcrumbs.push(u);
    if (this._breadcrumbs.length > a) {
      this._breadcrumbs = this._breadcrumbs.slice(-a);
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
      span: Yd(this)
    };
  }
  setSDKProcessingMetadata(r) {
    this._sdkProcessingMetadata = Ii(this._sdkProcessingMetadata, r, 2);
    return this;
  }
  setPropagationContext(r) {
    this._propagationContext = r;
    return this;
  }
  getPropagationContext() {
    return this._propagationContext;
  }
  captureException(r, o) {
    const a = (o == null ? undefined : o.event_id) || lt();
    if (!this._client) {
      if (Z) {
        Y.warn("No client configured on scope - will not capture exception!");
      }
      return a;
    }
    const u = new Error("Sentry syntheticException");
    this._client.captureException(r, {
      originalException: r,
      syntheticException: u,
      ...o,
      event_id: a
    }, this);
    return a;
  }
  captureMessage(r, o, a) {
    const u = (a == null ? undefined : a.event_id) || lt();
    if (!this._client) {
      if (Z) {
        Y.warn("No client configured on scope - will not capture message!");
      }
      return u;
    }
    const c = (a == null ? undefined : a.syntheticException) ?? new Error(r);
    this._client.captureMessage(r, o, {
      originalException: r,
      syntheticException: c,
      ...a,
      event_id: u
    }, this);
    return u;
  }
  captureEvent(r, o) {
    const a = (o == null ? undefined : o.event_id) || lt();
    if (this._client) {
      this._client.captureEvent(r, {
        ...o,
        event_id: a
      }, this);
      return a;
    } else {
      if (Z) {
        Y.warn("No client configured on scope - will not capture event!");
      }
      return a;
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
function kv() {
  return Nr("defaultCurrentScope", () => new Jt());
}
function Cv() {
  return Nr("defaultIsolationScope", () => new Jt());
}
class Pv {
  constructor(r, o) {
    let a;
    if (r) {
      a = r;
    } else {
      a = new Jt();
    }
    let u;
    if (o) {
      u = o;
    } else {
      u = new Jt();
    }
    this._stack = [{
      scope: a
    }];
    this._isolationScope = u;
  }
  withScope(r) {
    const o = this._pushScope();
    let a;
    try {
      a = r(o);
    } catch (u) {
      this._popScope();
      throw u;
    }
    if (Ti(a)) {
      return a.then(u => {
        this._popScope();
        return u;
      }, u => {
        this._popScope();
        throw u;
      });
    } else {
      this._popScope();
      return a;
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
function Tr() {
  const t = ts();
  const r = ns(t);
  return r.stack = r.stack || new Pv(kv(), Cv());
}
function Rv(t) {
  return Tr().withScope(t);
}
function Lv(t, r) {
  const o = Tr();
  return o.withScope(() => {
    o.getStackTop().scope = t;
    return r(t);
  });
}
function Qd(t) {
  return Tr().withScope(() => t(Tr().getIsolationScope()));
}
function Ov() {
  return {
    withIsolationScope: Qd,
    withScope: Rv,
    withSetScope: Lv,
    withSetIsolationScope: (t, r) => Qd(r),
    getCurrentScope: () => Tr().getScope(),
    getIsolationScope: () => Tr().getIsolationScope()
  };
}
function il(t) {
  const r = ns(t);
  if (r.acs) {
    return r.acs;
  } else {
    return Ov();
  }
}
function Ut() {
  const t = ts();
  return il(t).getCurrentScope();
}
function Yn() {
  const t = ts();
  return il(t).getIsolationScope();
}
function ol() {
  return Nr("globalScope", () => new Jt());
}
function Av(...t) {
  const r = ts();
  const o = il(r);
  if (t.length === 2) {
    const [a, u] = t;
    if (a) {
      return o.withSetScope(a, u);
    } else {
      return o.withScope(u);
    }
  }
  return o.withScope(t[0]);
}
function $e() {
  return Ut().getClient();
}
function Dv(t) {
  const r = t.getPropagationContext();
  const {
    traceId: o,
    parentSpanId: a,
    propagationSpanId: u
  } = r;
  const c = {
    trace_id: o,
    span_id: u || Ih()
  };
  if (a) {
    c.parent_span_id = a;
  }
  return c;
}
const Mv = "sentry.source";
const bv = "sentry.sample_rate";
const Fv = "sentry.previous_trace_sample_rate";
const Hv = "sentry.op";
const Bv = "sentry.origin";
const Nh = "sentry.profile_id";
const kh = "sentry.exclusive_time";
const Uv = 0;
const jv = 1;
const zv = "_sentryScope";
const $v = "_sentryIsolationScope";
function Gv(t) {
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
function Ch(t) {
  const r = t;
  return {
    scope: r[zv],
    isolationScope: Gv(r[$v])
  };
}
const Vv = "sentry-";
const Wv = /^sentry-/;
function Xv(t) {
  const r = Yv(t);
  if (!r) {
    return;
  }
  const o = Object.entries(r).reduce((a, [u, c]) => {
    if (u.match(Wv)) {
      const d = u.slice(Vv.length);
      a[d] = c;
    }
    return a;
  }, {});
  if (Object.keys(o).length > 0) {
    return o;
  }
}
function Yv(t) {
  if (!!t && (!!qt(t) || !!Array.isArray(t))) {
    if (Array.isArray(t)) {
      return t.reduce((r, o) => {
        const a = Kd(o);
        Object.entries(a).forEach(([u, c]) => {
          r[u] = c;
        });
        return r;
      }, {});
    } else {
      return Kd(t);
    }
  }
}
function Kd(t) {
  return t.split(",").map(r => {
    const o = r.indexOf("=");
    if (o === -1) {
      return [];
    }
    const a = r.slice(0, o);
    const u = r.slice(o + 1);
    return [a, u].map(c => {
      try {
        return decodeURIComponent(c.trim());
      } catch {
        return;
      }
    });
  }).reduce((r, [o, a]) => {
    if (o && a) {
      r[o] = a;
    }
    return r;
  }, {});
}
const Qv = /^o(\d+)\./;
const Kv = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function qv(t) {
  return t === "http" || t === "https";
}
function Ni(t, r = false) {
  const {
    host: o,
    path: a,
    pass: u,
    port: c,
    projectId: d,
    protocol: h,
    publicKey: m
  } = t;
  return `${h}://${m}${r && u ? `:${u}` : ""}@${o}${c ? `:${c}` : ""}/${a && `${a}/`}${d}`;
}
function Zv(t) {
  const r = Kv.exec(t);
  if (!r) {
    kr(() => {
      console.error(`Invalid Sentry Dsn: ${t}`);
    });
    return;
  }
  const [o, a, u = "", c = "", d = "", h = ""] = r.slice(1);
  let m = "";
  let g = h;
  const v = g.split("/");
  if (v.length > 1) {
    m = v.slice(0, -1).join("/");
    g = v.pop();
  }
  if (g) {
    const S = g.match(/^\d+/);
    if (S) {
      g = S[0];
    }
  }
  return Ph({
    host: c,
    pass: u,
    path: m,
    projectId: g,
    port: d,
    protocol: o,
    publicKey: a
  });
}
function Ph(t) {
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
function Jv(t) {
  if (!Z) {
    return true;
  }
  const {
    port: r,
    projectId: o,
    protocol: a
  } = t;
  if (["protocol", "publicKey", "host", "projectId"].find(d => t[d] ? false : (Y.error(`Invalid Sentry Dsn: ${d} missing`), true))) {
    return false;
  } else if (o.match(/^\d+$/)) {
    if (qv(a)) {
      if (r && isNaN(parseInt(r, 10))) {
        Y.error(`Invalid Sentry Dsn: Invalid port ${r}`);
        return false;
      } else {
        return true;
      }
    } else {
      Y.error(`Invalid Sentry Dsn: Invalid protocol ${a}`);
      return false;
    }
  } else {
    Y.error(`Invalid Sentry Dsn: Invalid projectId ${o}`);
    return false;
  }
}
function e_(t) {
  const r = t.match(Qv);
  if (r == null) {
    return undefined;
  } else {
    return r[1];
  }
}
function t_(t) {
  const r = t.getOptions();
  const {
    host: o
  } = t.getDsn() || {};
  let a;
  if (r.orgId) {
    a = String(r.orgId);
  } else if (o) {
    a = e_(o);
  }
  return a;
}
function n_(t) {
  const r = typeof t == "string" ? Zv(t) : Ph(t);
  if (!!r && !!Jv(r)) {
    return r;
  }
}
function r_(t) {
  if (typeof t == "boolean") {
    return Number(t);
  }
  const r = typeof t == "string" ? parseFloat(t) : t;
  if (typeof r == "number" && !isNaN(r) && !(r < 0) && !(r > 1)) {
    return r;
  }
}
const Rh = 1;
let qd = false;
function i_(t) {
  const {
    spanId: r,
    traceId: o,
    isRemote: a
  } = t.spanContext();
  const u = a ? r : sl(t).parent_span_id;
  const c = Ch(t).scope;
  const d = a ? (c == null ? undefined : c.getPropagationContext().propagationSpanId) || Ih() : r;
  return {
    parent_span_id: u,
    span_id: d,
    trace_id: o
  };
}
function o_(t) {
  if (t && t.length > 0) {
    return t.map(({
      context: {
        spanId: r,
        traceId: o,
        traceFlags: a,
        ...u
      },
      attributes: c
    }) => ({
      span_id: r,
      trace_id: o,
      sampled: a === Rh,
      attributes: c,
      ...u
    }));
  }
}
function Zd(t) {
  if (typeof t == "number") {
    return Jd(t);
  } else if (Array.isArray(t)) {
    return t[0] + t[1] / 1000000000;
  } else if (t instanceof Date) {
    return Jd(t.getTime());
  } else {
    return Zt();
  }
}
function Jd(t) {
  if (t > 9999999999) {
    return t / 1000;
  } else {
    return t;
  }
}
function sl(t) {
  var a;
  if (a_(t)) {
    return t.getSpanJSON();
  }
  const {
    spanId: r,
    traceId: o
  } = t.spanContext();
  if (s_(t)) {
    const {
      attributes: u,
      startTime: c,
      name: d,
      endTime: h,
      status: m,
      links: g
    } = t;
    const v = "parentSpanId" in t ? t.parentSpanId : "parentSpanContext" in t ? (a = t.parentSpanContext) == null ? undefined : a.spanId : undefined;
    return {
      span_id: r,
      trace_id: o,
      data: u,
      description: d,
      parent_span_id: v,
      start_timestamp: Zd(c),
      timestamp: Zd(h) || undefined,
      status: l_(m),
      op: u[Hv],
      origin: u[Bv],
      links: o_(g)
    };
  }
  return {
    span_id: r,
    trace_id: o,
    start_timestamp: 0,
    data: {}
  };
}
function s_(t) {
  const r = t;
  return !!r.attributes && !!r.startTime && !!r.name && !!r.endTime && !!r.status;
}
function a_(t) {
  return typeof t.getSpanJSON == "function";
}
function u_(t) {
  const {
    traceFlags: r
  } = t.spanContext();
  return r === Rh;
}
function l_(t) {
  if (!!t && t.code !== Uv) {
    if (t.code === jv) {
      return "ok";
    } else {
      return t.message || "internal_error";
    }
  }
}
const c_ = "_sentryRootSpan";
function Lh(t) {
  return t[c_] || t;
}
function ep() {
  if (!qd) {
    kr(() => {
      console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.");
    });
    qd = true;
  }
}
function f_(t) {
  var o;
  if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) {
    return false;
  }
  const r = (o = $e()) == null ? undefined : o.getOptions();
  return !!r && (r.tracesSampleRate != null || !!r.tracesSampler);
}
function tp(t) {
  Y.log(`Ignoring span ${t.op} - ${t.description} because it matches \`ignoreSpans\`.`);
}
function np(t, r) {
  if (r == null || !r.length || !t.description) {
    return false;
  }
  for (const o of r) {
    if (p_(o)) {
      if (Yo(t.description, o)) {
        if (Z) {
          tp(t);
        }
        return true;
      }
      continue;
    }
    if (!o.name && !o.op) {
      continue;
    }
    const a = o.name ? Yo(t.description, o.name) : true;
    const u = o.op ? t.op && Yo(t.op, o.op) : true;
    if (a && u) {
      if (Z) {
        tp(t);
      }
      return true;
    }
  }
  return false;
}
function d_(t, r) {
  const o = r.parent_span_id;
  const a = r.span_id;
  if (o) {
    for (const u of t) {
      if (u.parent_span_id === a) {
        u.parent_span_id = o;
      }
    }
  }
}
function p_(t) {
  return typeof t == "string" || t instanceof RegExp;
}
const al = "production";
const h_ = "_frozenDsc";
function Oh(t, r) {
  const o = r.getOptions();
  const {
    publicKey: a
  } = r.getDsn() || {};
  const u = {
    environment: o.environment || al,
    release: o.release,
    public_key: a,
    trace_id: t,
    org_id: t_(r)
  };
  r.emit("createDsc", u);
  return u;
}
function m_(t, r) {
  const o = r.getPropagationContext();
  return o.dsc || Oh(o.traceId, t);
}
function g_(t) {
  var A;
  const r = $e();
  if (!r) {
    return {};
  }
  const o = Lh(t);
  const a = sl(o);
  const u = a.data;
  const c = o.spanContext().traceState;
  const d = (c == null ? undefined : c.get("sentry.sample_rate")) ?? u[bv] ?? u[Fv];
  function h(M) {
    if (typeof d == "number" || typeof d == "string") {
      M.sample_rate = `${d}`;
    }
    return M;
  }
  const m = o[h_];
  if (m) {
    return h(m);
  }
  const g = c == null ? undefined : c.get("sentry.dsc");
  const v = g && Xv(g);
  if (v) {
    return h(v);
  }
  const S = Oh(t.spanContext().traceId, r);
  const N = u[Mv];
  const k = a.description;
  if (N !== "url" && k) {
    S.transaction = k;
  }
  if (f_()) {
    S.sampled = String(u_(o));
    S.sample_rand = (c == null ? undefined : c.get("sentry.sample_rand")) ?? ((A = Ch(o).scope) == null ? undefined : A.getPropagationContext().sampleRand.toString());
  }
  h(S);
  r.emit("createDsc", S, o);
  return S;
}
function bt(t, r = 100, o = Infinity) {
  try {
    return bu("", t, r, o);
  } catch (a) {
    return {
      ERROR: `**non-serializable** (${a})`
    };
  }
}
function Ah(t, r = 3, o = 102400) {
  const a = bt(t, r);
  if (E_(a) > o) {
    return Ah(t, r - 1, o);
  } else {
    return a;
  }
}
function bu(t, r, o = Infinity, a = Infinity, u = S_()) {
  const [c, d] = u;
  if (r == null || ["boolean", "string"].includes(typeof r) || typeof r == "number" && Number.isFinite(r)) {
    return r;
  }
  const h = y_(t, r);
  if (!h.startsWith("[object ")) {
    return h;
  }
  if (r.__sentry_skip_normalization__) {
    return r;
  }
  const m = typeof r.__sentry_override_normalization_depth__ == "number" ? r.__sentry_override_normalization_depth__ : o;
  if (m === 0) {
    return h.replace("object ", "");
  }
  if (c(r)) {
    return "[Circular ~]";
  }
  const g = r;
  if (g && typeof g.toJSON == "function") {
    try {
      const k = g.toJSON();
      return bu("", k, m - 1, a, u);
    } catch {}
  }
  const v = Array.isArray(r) ? [] : {};
  let S = 0;
  const N = wh(r);
  for (const k in N) {
    if (!Object.prototype.hasOwnProperty.call(N, k)) {
      continue;
    }
    if (S >= a) {
      v[k] = "[MaxProperties ~]";
      break;
    }
    const A = N[k];
    v[k] = bu(k, A, m - 1, a, u);
    S++;
  }
  d(r);
  return v;
}
function y_(t, r) {
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
    if (_h(r)) {
      return gh(r);
    }
    if (pv(r)) {
      return "[SyntheticEvent]";
    }
    if (typeof r == "number" && !Number.isFinite(r)) {
      return `[${r}]`;
    }
    if (typeof r == "function") {
      return `[Function: ${Tn(r)}]`;
    }
    if (typeof r == "symbol") {
      return `[${String(r)}]`;
    }
    if (typeof r == "bigint") {
      return `[BigInt: ${String(r)}]`;
    }
    const o = v_(r);
    if (/^HTML(\w*)Element$/.test(o)) {
      return `[HTMLElement: ${o}]`;
    } else {
      return `[object ${o}]`;
    }
  } catch (o) {
    return `**non-serializable** (${o})`;
  }
}
function v_(t) {
  const r = Object.getPrototypeOf(t);
  if (r != null && r.constructor) {
    return r.constructor.name;
  } else {
    return "null prototype";
  }
}
function __(t) {
  return ~-encodeURI(t).split(/%..|./).length;
}
function E_(t) {
  return __(JSON.stringify(t));
}
function S_() {
  const t = new WeakSet();
  function r(a) {
    if (t.has(a)) {
      return true;
    } else {
      t.add(a);
      return false;
    }
  }
  function o(a) {
    t.delete(a);
  }
  return [r, o];
}
function Pr(t, r = []) {
  return [t, r];
}
function w_(t, r) {
  const [o, a] = t;
  return [o, [...a, r]];
}
function rp(t, r) {
  const o = t[1];
  for (const a of o) {
    const u = a[0].type;
    if (r(a, u)) {
      return true;
    }
  }
  return false;
}
function Fu(t) {
  const r = ns(he);
  if (r.encodePolyfill) {
    return r.encodePolyfill(t);
  } else {
    return new TextEncoder().encode(t);
  }
}
function T_(t) {
  const [r, o] = t;
  let a = JSON.stringify(r);
  function u(c) {
    if (typeof a == "string") {
      a = typeof c == "string" ? a + c : [Fu(a), c];
    } else {
      a.push(typeof c == "string" ? Fu(c) : c);
    }
  }
  for (const c of o) {
    const [d, h] = c;
    u(`
${JSON.stringify(d)}
`);
    if (typeof h == "string" || h instanceof Uint8Array) {
      u(h);
    } else {
      let m;
      try {
        m = JSON.stringify(h);
      } catch {
        m = JSON.stringify(bt(h));
      }
      u(m);
    }
  }
  if (typeof a == "string") {
    return a;
  } else {
    return x_(a);
  }
}
function x_(t) {
  const r = t.reduce((u, c) => u + c.length, 0);
  const o = new Uint8Array(r);
  let a = 0;
  for (const u of t) {
    o.set(u, a);
    a += u.length;
  }
  return o;
}
function I_(t) {
  const r = typeof t.data == "string" ? Fu(t.data) : t.data;
  return [{
    type: "attachment",
    length: r.length,
    filename: t.filename,
    content_type: t.contentType,
    attachment_type: t.attachmentType
  }, r];
}
const N_ = {
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
function ip(t) {
  return N_[t];
}
function Dh(t) {
  if (t == null || !t.sdk) {
    return;
  }
  const {
    name: r,
    version: o
  } = t.sdk;
  return {
    name: r,
    version: o
  };
}
function k_(t, r, o, a) {
  var c;
  const u = (c = t.sdkProcessingMetadata) == null ? undefined : c.dynamicSamplingContext;
  return {
    event_id: t.event_id,
    sent_at: new Date().toISOString(),
    ...(r && {
      sdk: r
    }),
    ...(!!o && a && {
      dsn: Ni(a)
    }),
    ...(u && {
      trace: u
    })
  };
}
function C_(t, r) {
  var a;
  var u;
  var c;
  var d;
  if (!r) {
    return t;
  }
  const o = t.sdk || {};
  t.sdk = {
    ...o,
    name: o.name || r.name,
    version: o.version || r.version,
    integrations: [...(((a = t.sdk) == null ? undefined : a.integrations) || []), ...(r.integrations || [])],
    packages: [...(((u = t.sdk) == null ? undefined : u.packages) || []), ...(r.packages || [])],
    settings: (c = t.sdk) != null && c.settings || r.settings ? {
      ...((d = t.sdk) == null ? undefined : d.settings),
      ...r.settings
    } : undefined
  };
  return t;
}
function P_(t, r, o, a) {
  const u = Dh(o);
  const c = {
    sent_at: new Date().toISOString(),
    ...(u && {
      sdk: u
    }),
    ...(!!a && r && {
      dsn: Ni(r)
    })
  };
  const d = "aggregates" in t ? [{
    type: "sessions"
  }, t] : [{
    type: "session"
  }, t.toJSON()];
  return Pr(c, [d]);
}
function R_(t, r, o, a) {
  const u = Dh(o);
  const c = t.type && t.type !== "replay_event" ? t.type : "event";
  C_(t, o == null ? undefined : o.sdk);
  const d = k_(t, u, a, r);
  delete t.sdkProcessingMetadata;
  return Pr(d, [[{
    type: c
  }, t]]);
}
const gu = 0;
const op = 1;
const sp = 2;
function ss(t) {
  return new vi(r => {
    r(t);
  });
}
function ul(t) {
  return new vi((r, o) => {
    o(t);
  });
}
class vi {
  constructor(r) {
    this._state = gu;
    this._handlers = [];
    this._runExecutor(r);
  }
  then(r, o) {
    return new vi((a, u) => {
      this._handlers.push([false, c => {
        if (!r) {
          a(c);
        } else {
          try {
            a(r(c));
          } catch (d) {
            u(d);
          }
        }
      }, c => {
        if (!o) {
          u(c);
        } else {
          try {
            a(o(c));
          } catch (d) {
            u(d);
          }
        }
      }]);
      this._executeHandlers();
    });
  }
  catch(r) {
    return this.then(o => o, r);
  }
  finally(r) {
    return new vi((o, a) => {
      let u;
      let c;
      return this.then(d => {
        c = false;
        u = d;
        if (r) {
          r();
        }
      }, d => {
        c = true;
        u = d;
        if (r) {
          r();
        }
      }).then(() => {
        if (c) {
          a(u);
          return;
        }
        o(u);
      });
    });
  }
  _executeHandlers() {
    if (this._state === gu) {
      return;
    }
    const r = this._handlers.slice();
    this._handlers = [];
    r.forEach(o => {
      if (!o[0]) {
        if (this._state === op) {
          o[1](this._value);
        }
        if (this._state === sp) {
          o[2](this._value);
        }
        o[0] = true;
      }
    });
  }
  _runExecutor(r) {
    const o = (c, d) => {
      if (this._state === gu) {
        if (Ti(d)) {
          d.then(a, u);
          return;
        }
        this._state = c;
        this._value = d;
        this._executeHandlers();
      }
    };
    const a = c => {
      o(op, c);
    };
    const u = c => {
      o(sp, c);
    };
    try {
      r(a, u);
    } catch (c) {
      u(c);
    }
  }
}
function L_(t, r, o, a = 0) {
  try {
    const u = Hu(r, o, t, a);
    if (Ti(u)) {
      return u;
    } else {
      return ss(u);
    }
  } catch (u) {
    return ul(u);
  }
}
function Hu(t, r, o, a) {
  const u = o[a];
  if (!t || !u) {
    return t;
  }
  const c = u({
    ...t
  }, r);
  if (Z && c === null) {
    Y.log(`Event processor "${u.id || "?"}" dropped event`);
  }
  if (Ti(c)) {
    return c.then(d => Hu(d, r, o, a + 1));
  } else {
    return Hu(c, r, o, a + 1);
  }
}
function O_(t, r) {
  const {
    fingerprint: o,
    span: a,
    breadcrumbs: u,
    sdkProcessingMetadata: c
  } = r;
  A_(t, r);
  if (a) {
    b_(t, a);
  }
  F_(t, o);
  D_(t, u);
  M_(t, c);
}
function Zo(t, r) {
  const {
    extra: o,
    tags: a,
    user: u,
    contexts: c,
    level: d,
    sdkProcessingMetadata: h,
    breadcrumbs: m,
    fingerprint: g,
    eventProcessors: v,
    attachments: S,
    propagationContext: N,
    transactionName: k,
    span: A
  } = r;
  zo(t, "extra", o);
  zo(t, "tags", a);
  zo(t, "user", u);
  zo(t, "contexts", c);
  t.sdkProcessingMetadata = Ii(t.sdkProcessingMetadata, h, 2);
  if (d) {
    t.level = d;
  }
  if (k) {
    t.transactionName = k;
  }
  if (A) {
    t.span = A;
  }
  if (m.length) {
    t.breadcrumbs = [...t.breadcrumbs, ...m];
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
    ...N
  };
}
function zo(t, r, o) {
  t[r] = Ii(t[r], o, 1);
}
function A_(t, r) {
  const {
    extra: o,
    tags: a,
    user: u,
    contexts: c,
    level: d,
    transactionName: h
  } = r;
  if (Object.keys(o).length) {
    t.extra = {
      ...o,
      ...t.extra
    };
  }
  if (Object.keys(a).length) {
    t.tags = {
      ...a,
      ...t.tags
    };
  }
  if (Object.keys(u).length) {
    t.user = {
      ...u,
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
  if (h && t.type !== "transaction") {
    t.transaction = h;
  }
}
function D_(t, r) {
  const o = [...(t.breadcrumbs || []), ...r];
  t.breadcrumbs = o.length ? o : undefined;
}
function M_(t, r) {
  t.sdkProcessingMetadata = {
    ...t.sdkProcessingMetadata,
    ...r
  };
}
function b_(t, r) {
  t.contexts = {
    trace: i_(r),
    ...t.contexts
  };
  t.sdkProcessingMetadata = {
    dynamicSamplingContext: g_(r),
    ...t.sdkProcessingMetadata
  };
  const o = Lh(r);
  const a = sl(o).description;
  if (a && !t.transaction && t.type === "transaction") {
    t.transaction = a;
  }
}
function F_(t, r) {
  t.fingerprint = t.fingerprint ? Array.isArray(t.fingerprint) ? t.fingerprint : [t.fingerprint] : [];
  if (r) {
    t.fingerprint = t.fingerprint.concat(r);
  }
  if (!t.fingerprint.length) {
    delete t.fingerprint;
  }
}
let Kt;
let ap;
let up;
let Sn;
function H_(t) {
  const r = he._sentryDebugIds;
  const o = he._debugIds;
  if (!r && !o) {
    return {};
  }
  const a = r ? Object.keys(r) : [];
  const u = o ? Object.keys(o) : [];
  if (Sn && a.length === ap && u.length === up) {
    return Sn;
  }
  ap = a.length;
  up = u.length;
  Sn = {};
  Kt ||= {};
  const c = (d, h) => {
    for (const m of d) {
      const g = h[m];
      const v = Kt == null ? undefined : Kt[m];
      if (v && Sn && g) {
        Sn[v[0]] = g;
        if (Kt) {
          Kt[m] = [v[0], g];
        }
      } else if (g) {
        const S = t(m);
        for (let N = S.length - 1; N >= 0; N--) {
          const k = S[N];
          const A = k == null ? undefined : k.filename;
          if (A && Sn && Kt) {
            Sn[A] = g;
            Kt[m] = [A, g];
            break;
          }
        }
      }
    }
  };
  if (r) {
    c(a, r);
  }
  if (o) {
    c(u, o);
  }
  return Sn;
}
function B_(t, r, o, a, u, c) {
  const {
    normalizeDepth: d = 3,
    normalizeMaxBreadth: h = 1000
  } = t;
  const m = {
    ...r,
    event_id: r.event_id || o.event_id || lt(),
    timestamp: r.timestamp || xi()
  };
  const g = o.integrations || t.integrations.map(H => H.name);
  U_(m, t);
  $_(m, g);
  if (u) {
    u.emit("applyFrameMetadata", r);
  }
  if (r.type === undefined) {
    j_(m, t.stackParser);
  }
  const v = V_(a, o.captureContext);
  if (o.mechanism) {
    Sr(m, o.mechanism);
  }
  const S = u ? u.getEventProcessors() : [];
  const N = ol().getScopeData();
  if (c) {
    const H = c.getScopeData();
    Zo(N, H);
  }
  if (v) {
    const H = v.getScopeData();
    Zo(N, H);
  }
  const k = [...(o.attachments || []), ...N.attachments];
  if (k.length) {
    o.attachments = k;
  }
  O_(m, N);
  const A = [...S, ...N.eventProcessors];
  return L_(A, m, o).then(H => {
    if (H) {
      z_(H);
    }
    if (typeof d == "number" && d > 0) {
      return G_(H, d, h);
    } else {
      return H;
    }
  });
}
function U_(t, r) {
  var h;
  var m;
  const {
    environment: o,
    release: a,
    dist: u,
    maxValueLength: c
  } = r;
  t.environment = t.environment || o || al;
  if (!t.release && a) {
    t.release = a;
  }
  if (!t.dist && u) {
    t.dist = u;
  }
  const d = t.request;
  if (d != null && d.url && c) {
    d.url = Au(d.url, c);
  }
  if (c) {
    if ((m = (h = t.exception) == null ? undefined : h.values) != null) {
      m.forEach(g => {
        g.value &&= Au(g.value, c);
      });
    }
  }
}
function j_(t, r) {
  var a;
  var u;
  const o = H_(r);
  if ((u = (a = t.exception) == null ? undefined : a.values) != null) {
    u.forEach(c => {
      var d;
      var h;
      if ((h = (d = c.stacktrace) == null ? undefined : d.frames) != null) {
        h.forEach(m => {
          if (m.filename) {
            m.debug_id = o[m.filename];
          }
        });
      }
    });
  }
}
function z_(t) {
  var a;
  var u;
  const r = {};
  if ((u = (a = t.exception) == null ? undefined : a.values) != null) {
    u.forEach(c => {
      var d;
      var h;
      if ((h = (d = c.stacktrace) == null ? undefined : d.frames) != null) {
        h.forEach(m => {
          if (m.debug_id) {
            if (m.abs_path) {
              r[m.abs_path] = m.debug_id;
            } else if (m.filename) {
              r[m.filename] = m.debug_id;
            }
            delete m.debug_id;
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
  const o = t.debug_meta.images;
  Object.entries(r).forEach(([c, d]) => {
    o.push({
      type: "sourcemap",
      code_file: c,
      debug_id: d
    });
  });
}
function $_(t, r) {
  if (r.length > 0) {
    t.sdk = t.sdk || {};
    t.sdk.integrations = [...(t.sdk.integrations || []), ...r];
  }
}
function G_(t, r, o) {
  var u;
  var c;
  if (!t) {
    return null;
  }
  const a = {
    ...t,
    ...(t.breadcrumbs && {
      breadcrumbs: t.breadcrumbs.map(d => ({
        ...d,
        ...(d.data && {
          data: bt(d.data, r, o)
        })
      }))
    }),
    ...(t.user && {
      user: bt(t.user, r, o)
    }),
    ...(t.contexts && {
      contexts: bt(t.contexts, r, o)
    }),
    ...(t.extra && {
      extra: bt(t.extra, r, o)
    })
  };
  if ((u = t.contexts) != null && u.trace && a.contexts) {
    a.contexts.trace = t.contexts.trace;
    if (t.contexts.trace.data) {
      a.contexts.trace.data = bt(t.contexts.trace.data, r, o);
    }
  }
  if (t.spans) {
    a.spans = t.spans.map(d => ({
      ...d,
      ...(d.data && {
        data: bt(d.data, r, o)
      })
    }));
  }
  if ((c = t.contexts) != null && c.flags && a.contexts) {
    a.contexts.flags = bt(t.contexts.flags, 3, o);
  }
  return a;
}
function V_(t, r) {
  if (!r) {
    return t;
  }
  const o = t ? t.clone() : new Jt();
  o.update(r);
  return o;
}
function W_(t, r) {
  return Ut().captureException(t, undefined);
}
function Mh(t, r) {
  return Ut().captureEvent(t, r);
}
function lp(t) {
  const r = Yn();
  const o = Ut();
  const {
    userAgent: a
  } = he.navigator || {};
  const u = Tv({
    user: o.getUser() || r.getUser(),
    ...(a && {
      userAgent: a
    }),
    ...t
  });
  const c = r.getSession();
  if ((c == null ? undefined : c.status) === "ok") {
    wr(c, {
      status: "exited"
    });
  }
  bh();
  r.setSession(u);
  return u;
}
function bh() {
  const t = Yn();
  const o = Ut().getSession() || t.getSession();
  if (o) {
    xv(o);
  }
  Fh();
  t.setSession();
}
function Fh() {
  const t = Yn();
  const r = $e();
  const o = t.getSession();
  if (o && r) {
    r.captureSession(o);
  }
}
function cp(t = false) {
  if (t) {
    bh();
    return;
  }
  Fh();
}
const X_ = "7";
function Y_(t) {
  const r = t.protocol ? `${t.protocol}:` : "";
  const o = t.port ? `:${t.port}` : "";
  return `${r}//${t.host}${o}${t.path ? `/${t.path}` : ""}/api/`;
}
function Q_(t) {
  return `${Y_(t)}${t.projectId}/envelope/`;
}
function K_(t, r) {
  const o = {
    sentry_version: X_
  };
  if (t.publicKey) {
    o.sentry_key = t.publicKey;
  }
  if (r) {
    o.sentry_client = `${r.name}/${r.version}`;
  }
  return new URLSearchParams(o).toString();
}
function q_(t, r, o) {
  return r || `${Q_(t)}?${K_(t, o)}`;
}
const fp = [];
function Z_(t) {
  const r = {};
  t.forEach(o => {
    const {
      name: a
    } = o;
    const u = r[a];
    if (!u || !!u.isDefaultInstance || !o.isDefaultInstance) {
      r[a] = o;
    }
  });
  return Object.values(r);
}
function J_(t) {
  const r = t.defaultIntegrations || [];
  const o = t.integrations;
  r.forEach(u => {
    u.isDefaultInstance = true;
  });
  let a;
  if (Array.isArray(o)) {
    a = [...r, ...o];
  } else if (typeof o == "function") {
    const u = o(r);
    a = Array.isArray(u) ? u : [u];
  } else {
    a = r;
  }
  return Z_(a);
}
function eE(t, r) {
  const o = {};
  r.forEach(a => {
    if (a) {
      Hh(t, a, o);
    }
  });
  return o;
}
function dp(t, r) {
  for (const o of r) {
    if (o != null && o.afterAllSetup) {
      o.afterAllSetup(t);
    }
  }
}
function Hh(t, r, o) {
  if (o[r.name]) {
    if (Z) {
      Y.log(`Integration skipped because it was already installed: ${r.name}`);
    }
    return;
  }
  o[r.name] = r;
  if (!fp.includes(r.name) && typeof r.setupOnce == "function") {
    r.setupOnce();
    fp.push(r.name);
  }
  if (r.setup && typeof r.setup == "function") {
    r.setup(t);
  }
  if (typeof r.preprocessEvent == "function") {
    const a = r.preprocessEvent.bind(r);
    t.on("preprocessEvent", (u, c) => a(u, c, t));
  }
  if (typeof r.processEvent == "function") {
    const a = r.processEvent.bind(r);
    const u = Object.assign((c, d) => a(c, d, t), {
      id: r.name
    });
    t.addEventProcessor(u);
  }
  if (Z) {
    Y.log(`Integration installed: ${r.name}`);
  }
}
function tE(t) {
  return [{
    type: "log",
    item_count: t.length,
    content_type: "application/vnd.sentry.items.log+json"
  }, {
    items: t
  }];
}
function nE(t, r, o, a) {
  const u = {};
  if (r != null && r.sdk) {
    u.sdk = {
      name: r.sdk.name,
      version: r.sdk.version
    };
  }
  if (o && a) {
    u.dsn = Ni(a);
  }
  return Pr(u, [tE(t)]);
}
function Bh(t, r) {
  const o = r ?? rE(t) ?? [];
  if (o.length === 0) {
    return;
  }
  const a = t.getOptions();
  const u = nE(o, a._metadata, a.tunnel, t.getDsn());
  Uh().set(t, []);
  t.emit("flushLogs");
  t.sendEnvelope(u);
}
function rE(t) {
  return Uh().get(t);
}
function Uh() {
  return Nr("clientToLogBufferMap", () => new WeakMap());
}
function iE(t) {
  return [{
    type: "trace_metric",
    item_count: t.length,
    content_type: "application/vnd.sentry.items.trace-metric+json"
  }, {
    items: t
  }];
}
function oE(t, r, o, a) {
  const u = {};
  if (r != null && r.sdk) {
    u.sdk = {
      name: r.sdk.name,
      version: r.sdk.version
    };
  }
  if (o && a) {
    u.dsn = Ni(a);
  }
  return Pr(u, [iE(t)]);
}
function jh(t, r) {
  const o = r ?? sE(t) ?? [];
  if (o.length === 0) {
    return;
  }
  const a = t.getOptions();
  const u = oE(o, a._metadata, a.tunnel, t.getDsn());
  zh().set(t, []);
  t.emit("flushMetrics");
  t.sendEnvelope(u);
}
function sE(t) {
  return zh().get(t);
}
function zh() {
  return Nr("clientToMetricBufferMap", () => new WeakMap());
}
const ll = Symbol.for("SentryBufferFullError");
function cl(t = 100) {
  const r = new Set();
  function o() {
    return r.size < t;
  }
  function a(d) {
    r.delete(d);
  }
  function u(d) {
    if (!o()) {
      return ul(ll);
    }
    const h = d();
    r.add(h);
    h.then(() => a(h), () => a(h));
    return h;
  }
  function c(d) {
    if (!r.size) {
      return ss(true);
    }
    const h = Promise.allSettled(Array.from(r)).then(() => true);
    if (!d) {
      return h;
    }
    const m = [h, new Promise(g => setTimeout(() => g(false), d))];
    return Promise.race(m);
  }
  return {
    get $() {
      return Array.from(r);
    },
    add: u,
    drain: c
  };
}
const aE = 60000;
function uE(t, r = Date.now()) {
  const o = parseInt(`${t}`, 10);
  if (!isNaN(o)) {
    return o * 1000;
  }
  const a = Date.parse(`${t}`);
  if (isNaN(a)) {
    return aE;
  } else {
    return a - r;
  }
}
function lE(t, r) {
  return t[r] || t.all || 0;
}
function cE(t, r, o = Date.now()) {
  return lE(t, r) > o;
}
function fE(t, {
  statusCode: r,
  headers: o
}, a = Date.now()) {
  const u = {
    ...t
  };
  const c = o == null ? undefined : o["x-sentry-rate-limits"];
  const d = o == null ? undefined : o["retry-after"];
  if (c) {
    for (const h of c.trim().split(",")) {
      const [m, g,,, v] = h.split(":", 5);
      const S = parseInt(m, 10);
      const N = (isNaN(S) ? 60 : S) * 1000;
      if (!g) {
        u.all = a + N;
      } else {
        for (const k of g.split(";")) {
          if (k === "metric_bucket") {
            if (!v || v.split(";").includes("custom")) {
              u[k] = a + N;
            }
          } else {
            u[k] = a + N;
          }
        }
      }
    }
  } else if (d) {
    u.all = a + uE(d, a);
  } else if (r === 429) {
    u.all = a + 60000;
  }
  return u;
}
const $h = 64;
function Gh(t, r, o = cl(t.bufferSize || $h)) {
  let a = {};
  const u = d => o.drain(d);
  function c(d) {
    const h = [];
    rp(d, (S, N) => {
      const k = ip(N);
      if (cE(a, k)) {
        t.recordDroppedEvent("ratelimit_backoff", k);
      } else {
        h.push(S);
      }
    });
    if (h.length === 0) {
      return Promise.resolve({});
    }
    const m = Pr(d[0], h);
    const g = S => {
      rp(m, (N, k) => {
        t.recordDroppedEvent(S, ip(k));
      });
    };
    const v = () => r({
      body: T_(m)
    }).then(S => {
      if (S.statusCode !== undefined && (S.statusCode < 200 || S.statusCode >= 300) && Z) {
        Y.warn(`Sentry responded with status code ${S.statusCode} to sent event.`);
      }
      a = fE(a, S);
      return S;
    }, S => {
      g("network_error");
      if (Z) {
        Y.error("Encountered error running transport request:", S);
      }
      throw S;
    });
    return o.add(v).then(S => S, S => {
      if (S === ll) {
        if (Z) {
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
    flush: u
  };
}
function dE(t, r, o) {
  const a = [{
    type: "client_report"
  }, {
    timestamp: xi(),
    discarded_events: t
  }];
  return Pr(r ? {
    dsn: r
  } : {}, [a]);
}
function Vh(t) {
  const r = [];
  if (t.message) {
    r.push(t.message);
  }
  try {
    const o = t.exception.values[t.exception.values.length - 1];
    if (o != null && o.value) {
      r.push(o.value);
      if (o.type) {
        r.push(`${o.type}: ${o.value}`);
      }
    }
  } catch {}
  return r;
}
function pE(t) {
  var m;
  const {
    trace_id: r,
    parent_span_id: o,
    span_id: a,
    status: u,
    origin: c,
    data: d,
    op: h
  } = ((m = t.contexts) == null ? undefined : m.trace) ?? {};
  return {
    data: d ?? {},
    description: t.transaction,
    op: h,
    parent_span_id: o,
    span_id: a ?? "",
    start_timestamp: t.start_timestamp ?? 0,
    status: u,
    timestamp: t.timestamp,
    trace_id: r ?? "",
    origin: c,
    profile_id: d == null ? undefined : d[Nh],
    exclusive_time: d == null ? undefined : d[kh],
    measurements: t.measurements,
    is_segment: true
  };
}
function hE(t) {
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
            [Nh]: t.profile_id
          }),
          ...(t.exclusive_time && {
            [kh]: t.exclusive_time
          })
        }
      }
    },
    measurements: t.measurements
  };
}
const pp = "Not capturing exception because it's already been captured.";
const hp = "Discarded session because of missing or non-string release";
const Wh = Symbol.for("SentryInternalError");
const Xh = Symbol.for("SentryDoNotSendEventError");
const mE = 5000;
function Qo(t) {
  return {
    message: t,
    [Wh]: true
  };
}
function yu(t) {
  return {
    message: t,
    [Xh]: true
  };
}
function mp(t) {
  return !!t && typeof t == "object" && Wh in t;
}
function gp(t) {
  return !!t && typeof t == "object" && Xh in t;
}
function yp(t, r, o, a, u) {
  let c = 0;
  let d;
  let h = false;
  t.on(o, () => {
    c = 0;
    clearTimeout(d);
    h = false;
  });
  t.on(r, m => {
    c += a(m);
    if (c >= 800000) {
      u(t);
    } else if (!h) {
      h = true;
      d = setTimeout(() => {
        u(t);
      }, mE);
    }
  });
  t.on("flush", () => {
    u(t);
  });
}
class gE {
  constructor(r) {
    var a;
    var u;
    var c;
    this._options = r;
    this._integrations = {};
    this._numProcessing = 0;
    this._outcomes = {};
    this._hooks = {};
    this._eventProcessors = [];
    this._promiseBuffer = cl(((a = r.transportOptions) == null ? undefined : a.bufferSize) ?? $h);
    if (r.dsn) {
      this._dsn = n_(r.dsn);
    } else if (Z) {
      Y.warn("No DSN provided, client will not send events.");
    }
    if (this._dsn) {
      const d = q_(this._dsn, r.tunnel, r._metadata ? r._metadata.sdk : undefined);
      this._transport = r.transport({
        tunnel: this._options.tunnel,
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...r.transportOptions,
        url: d
      });
    }
    this._options.enableLogs = this._options.enableLogs ?? ((u = this._options._experiments) == null ? undefined : u.enableLogs);
    if (this._options.enableLogs) {
      yp(this, "afterCaptureLog", "flushLogs", EE, Bh);
    }
    if (this._options.enableMetrics ?? ((c = this._options._experiments) == null ? undefined : c.enableMetrics) ?? true) {
      yp(this, "afterCaptureMetric", "flushMetrics", _E, jh);
    }
  }
  captureException(r, o, a) {
    const u = lt();
    if (Gd(r)) {
      if (Z) {
        Y.log(pp);
      }
      return u;
    }
    const c = {
      event_id: u,
      ...o
    };
    this._process(() => this.eventFromException(r, c).then(d => this._captureEvent(d, c, a)).then(d => d), "error");
    return c.event_id;
  }
  captureMessage(r, o, a, u) {
    const c = {
      event_id: lt(),
      ...a
    };
    const d = el(r) ? r : String(r);
    const h = rs(r);
    const m = h ? this.eventFromMessage(d, o, c) : this.eventFromException(r, c);
    this._process(() => m.then(g => this._captureEvent(g, c, u)), h ? "unknown" : "error");
    return c.event_id;
  }
  captureEvent(r, o, a) {
    const u = lt();
    if (o != null && o.originalException && Gd(o.originalException)) {
      if (Z) {
        Y.log(pp);
      }
      return u;
    }
    const c = {
      event_id: u,
      ...o
    };
    const d = r.sdkProcessingMetadata || {};
    const h = d.capturedSpanScope;
    const m = d.capturedSpanIsolationScope;
    const g = vp(r.type);
    this._process(() => this._captureEvent(r, c, h || a, m), g);
    return c.event_id;
  }
  captureSession(r) {
    this.sendSession(r);
    wr(r, {
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
    const o = this._transport;
    if (!o) {
      return true;
    }
    this.emit("flush");
    const a = await this._isClientDoneProcessing(r);
    const u = await o.flush(r);
    return a && u;
  }
  async close(r) {
    const o = await this.flush(r);
    this.getOptions().enabled = false;
    this.emit("close");
    return o;
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
    const o = this._integrations[r.name];
    Hh(this, r, this._integrations);
    if (!o) {
      dp(this, [r]);
    }
  }
  sendEvent(r, o = {}) {
    this.emit("beforeSendEvent", r, o);
    let a = R_(r, this._dsn, this._options._metadata, this._options.tunnel);
    for (const u of o.attachments || []) {
      a = w_(a, I_(u));
    }
    this.sendEnvelope(a).then(u => this.emit("afterSendEvent", r, u));
  }
  sendSession(r) {
    const {
      release: o,
      environment: a = al
    } = this._options;
    if ("aggregates" in r) {
      const c = r.attrs || {};
      if (!c.release && !o) {
        if (Z) {
          Y.warn(hp);
        }
        return;
      }
      c.release = c.release || o;
      c.environment = c.environment || a;
      r.attrs = c;
    } else {
      if (!r.release && !o) {
        if (Z) {
          Y.warn(hp);
        }
        return;
      }
      r.release = r.release || o;
      r.environment = r.environment || a;
    }
    this.emit("beforeSendSession", r);
    const u = P_(r, this._dsn, this._options._metadata, this._options.tunnel);
    this.sendEnvelope(u);
  }
  recordDroppedEvent(r, o, a = 1) {
    if (this._options.sendClientReports) {
      const u = `${r}:${o}`;
      if (Z) {
        Y.log(`Recording outcome: "${u}"${a > 1 ? ` (${a} times)` : ""}`);
      }
      this._outcomes[u] = (this._outcomes[u] || 0) + a;
    }
  }
  on(r, o) {
    const a = this._hooks[r] = this._hooks[r] || new Set();
    const u = (...c) => o(...c);
    a.add(u);
    return () => {
      a.delete(u);
    };
  }
  emit(r, ...o) {
    const a = this._hooks[r];
    if (a) {
      a.forEach(u => u(...o));
    }
  }
  async sendEnvelope(r) {
    this.emit("beforeEnvelope", r);
    if (this._isEnabled() && this._transport) {
      try {
        return await this._transport.send(r);
      } catch (o) {
        if (Z) {
          Y.error("Error while sending envelope:", o);
        }
        return {};
      }
    }
    if (Z) {
      Y.error("Transport disabled");
    }
    return {};
  }
  _setupIntegrations() {
    const {
      integrations: r
    } = this._options;
    this._integrations = eE(this, r);
    dp(this, r);
  }
  _updateSessionFromEvent(r, o) {
    var m;
    var g;
    let a = o.level === "fatal";
    let u = false;
    const c = (m = o.exception) == null ? undefined : m.values;
    if (c) {
      u = true;
      a = false;
      for (const v of c) {
        if (((g = v.mechanism) == null ? undefined : g.handled) === false) {
          a = true;
          break;
        }
      }
    }
    const d = r.status === "ok";
    if (d && r.errors === 0 || d && a) {
      wr(r, {
        ...(a && {
          status: "crashed"
        }),
        errors: r.errors || Number(u || a)
      });
      this.captureSession(r);
    }
  }
  async _isClientDoneProcessing(r) {
    let o = 0;
    while (!r || o < r) {
      await new Promise(a => setTimeout(a, 1));
      if (!this._numProcessing) {
        return true;
      }
      o++;
    }
    return false;
  }
  _isEnabled() {
    return this.getOptions().enabled !== false && this._transport !== undefined;
  }
  _prepareEvent(r, o, a, u) {
    const c = this.getOptions();
    const d = Object.keys(this._integrations);
    if (!o.integrations && d != null && d.length) {
      o.integrations = d;
    }
    this.emit("preprocessEvent", r, o);
    if (!r.type) {
      u.setLastEventId(r.event_id || o.event_id);
    }
    return B_(c, r, o, a, this, u).then(h => {
      if (h === null) {
        return h;
      }
      this.emit("postprocessEvent", h, o);
      h.contexts = {
        trace: Dv(a),
        ...h.contexts
      };
      const m = m_(this, a);
      h.sdkProcessingMetadata = {
        dynamicSamplingContext: m,
        ...h.sdkProcessingMetadata
      };
      return h;
    });
  }
  _captureEvent(r, o = {}, a = Ut(), u = Yn()) {
    if (Z && Bu(r)) {
      Y.log(`Captured error event \`${Vh(r)[0] || "<unknown>"}\``);
    }
    return this._processEvent(r, o, a, u).then(c => c.event_id, c => {
      if (Z) {
        if (gp(c)) {
          Y.log(c.message);
        } else if (mp(c)) {
          Y.warn(c.message);
        } else {
          Y.warn(c);
        }
      }
    });
  }
  _processEvent(r, o, a, u) {
    const c = this.getOptions();
    const {
      sampleRate: d
    } = c;
    const h = Yh(r);
    const m = Bu(r);
    const v = `before send for type \`${r.type || "error"}\``;
    const S = typeof d === "undefined" ? undefined : r_(d);
    if (m && typeof S == "number" && Math.random() > S) {
      this.recordDroppedEvent("sample_rate", "error");
      return ul(yu(`Discarding event because it's not included in the random sample (sampling rate = ${d})`));
    }
    const N = vp(r.type);
    return this._prepareEvent(r, o, a, u).then(k => {
      if (k === null) {
        this.recordDroppedEvent("event_processor", N);
        throw yu("An event processor returned `null`, will not send event.");
      }
      if (o.data && o.data.__sentry__ === true) {
        return k;
      }
      const M = vE(this, c, k, o);
      return yE(M, v);
    }).then(k => {
      var H;
      if (k === null) {
        this.recordDroppedEvent("before_send", N);
        if (h) {
          const q = 1 + (r.spans || []).length;
          this.recordDroppedEvent("before_send", "span", q);
        }
        throw yu(`${v} returned \`null\`, will not send event.`);
      }
      const A = a.getSession() || u.getSession();
      if (m && A) {
        this._updateSessionFromEvent(A, k);
      }
      if (h) {
        const te = ((H = k.sdkProcessingMetadata) == null ? undefined : H.spanCountBeforeProcessing) || 0;
        const q = k.spans ? k.spans.length : 0;
        const Q = te - q;
        if (Q > 0) {
          this.recordDroppedEvent("before_send", "span", Q);
        }
      }
      const M = k.transaction_info;
      if (h && M && k.transaction !== r.transaction) {
        const te = "custom";
        k.transaction_info = {
          ...M,
          source: te
        };
      }
      this.sendEvent(k, o);
      return k;
    }).then(null, k => {
      throw gp(k) || mp(k) ? k : (this.captureException(k, {
        mechanism: {
          handled: false,
          type: "internal"
        },
        data: {
          __sentry__: true
        },
        originalException: k
      }), Qo(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${k}`));
    });
  }
  _process(r, o) {
    this._numProcessing++;
    this._promiseBuffer.add(r).then(a => {
      this._numProcessing--;
      return a;
    }, a => {
      this._numProcessing--;
      if (a === ll) {
        this.recordDroppedEvent("queue_overflow", o);
      }
      return a;
    });
  }
  _clearOutcomes() {
    const r = this._outcomes;
    this._outcomes = {};
    return Object.entries(r).map(([o, a]) => {
      const [u, c] = o.split(":");
      return {
        reason: u,
        category: c,
        quantity: a
      };
    });
  }
  _flushOutcomes() {
    if (Z) {
      Y.log("Flushing outcomes...");
    }
    const r = this._clearOutcomes();
    if (r.length === 0) {
      if (Z) {
        Y.log("No outcomes to send");
      }
      return;
    }
    if (!this._dsn) {
      if (Z) {
        Y.log("No dsn provided, will not send outcomes");
      }
      return;
    }
    if (Z) {
      Y.log("Sending outcomes:", r);
    }
    const o = dE(r, this._options.tunnel && Ni(this._dsn));
    this.sendEnvelope(o);
  }
}
function vp(t) {
  if (t === "replay_event") {
    return "replay";
  } else {
    return t || "error";
  }
}
function yE(t, r) {
  const o = `${r} must return \`null\` or a valid event.`;
  if (Ti(t)) {
    return t.then(a => {
      if (!yi(a) && a !== null) {
        throw Qo(o);
      }
      return a;
    }, a => {
      throw Qo(`${r} rejected with ${a}`);
    });
  }
  if (!yi(t) && t !== null) {
    throw Qo(o);
  }
  return t;
}
function vE(t, r, o, a) {
  const {
    beforeSend: u,
    beforeSendTransaction: c,
    beforeSendSpan: d,
    ignoreSpans: h
  } = r;
  let m = o;
  if (Bu(m) && u) {
    return u(m, a);
  }
  if (Yh(m)) {
    if (d || h) {
      const g = pE(m);
      if (h != null && h.length && np(g, h)) {
        return null;
      }
      if (d) {
        const v = d(g);
        if (v) {
          m = Ii(o, hE(v));
        } else {
          ep();
        }
      }
      if (m.spans) {
        const v = [];
        const S = m.spans;
        for (const k of S) {
          if (h != null && h.length && np(k, h)) {
            d_(S, k);
            continue;
          }
          if (d) {
            const A = d(k);
            if (A) {
              v.push(A);
            } else {
              ep();
              v.push(k);
            }
          } else {
            v.push(k);
          }
        }
        const N = m.spans.length - v.length;
        if (N) {
          t.recordDroppedEvent("before_send", "span", N);
        }
        m.spans = v;
      }
    }
    if (c) {
      if (m.spans) {
        const g = m.spans.length;
        m.sdkProcessingMetadata = {
          ...o.sdkProcessingMetadata,
          spanCountBeforeProcessing: g
        };
      }
      return c(m, a);
    }
  }
  return m;
}
function Bu(t) {
  return t.type === undefined;
}
function Yh(t) {
  return t.type === "transaction";
}
function _E(t) {
  let r = 0;
  if (t.name) {
    r += t.name.length * 2;
  }
  r += 8;
  return r + Qh(t.attributes);
}
function EE(t) {
  let r = 0;
  if (t.message) {
    r += t.message.length * 2;
  }
  return r + Qh(t.attributes);
}
function Qh(t) {
  if (!t) {
    return 0;
  }
  let r = 0;
  Object.values(t).forEach(o => {
    if (Array.isArray(o)) {
      r += o.length * _p(o[0]);
    } else if (rs(o)) {
      r += _p(o);
    } else {
      r += 100;
    }
  });
  return r;
}
function _p(t) {
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
function SE(t, r) {
  if (r.debug === true) {
    if (Z) {
      Y.enable();
    } else {
      kr(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  Ut().update(r.initialScope);
  const a = new t(r);
  wE(a);
  a.init();
  return a;
}
function wE(t) {
  Ut().setClient(t);
}
function vu(t) {
  if (!t) {
    return {};
  }
  const r = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
  if (!r) {
    return {};
  }
  const o = r[6] || "";
  const a = r[8] || "";
  return {
    host: r[4],
    path: r[5],
    protocol: r[2],
    search: o,
    hash: a,
    relative: r[5] + o + a
  };
}
function TE(t) {
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
function xE(t, r, o = [r], a = "npm") {
  const u = t._metadata || {};
  u.sdk ||= {
    name: `sentry.javascript.${r}`,
    packages: o.map(c => ({
      name: `${a}:@sentry/${c}`,
      version: zn
    })),
    version: zn
  };
  t._metadata = u;
}
const IE = 100;
function Vn(t, r) {
  const o = $e();
  const a = Yn();
  if (!o) {
    return;
  }
  const {
    beforeBreadcrumb: u = null,
    maxBreadcrumbs: c = IE
  } = o.getOptions();
  if (c <= 0) {
    return;
  }
  const h = {
    timestamp: xi(),
    ...t
  };
  const m = u ? kr(() => u(h, r)) : h;
  if (m !== null) {
    if (o.emit) {
      o.emit("beforeAddBreadcrumb", m, r);
    }
    a.addBreadcrumb(m, c);
  }
}
let Ep;
const NE = "FunctionToString";
const Sp = new WeakMap();
const kE = () => ({
  name: NE,
  setupOnce() {
    Ep = Function.prototype.toString;
    try {
      Function.prototype.toString = function (...t) {
        const r = rl(this);
        const o = Sp.has($e()) && r !== undefined ? r : this;
        return Ep.apply(o, t);
      };
    } catch {}
  },
  setup(t) {
    Sp.set(t, true);
  }
});
const CE = kE;
const PE = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, /^Can't find variable: gmo$/, /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/, `can't redefine non-configurable property "solana"`, "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler", /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/, /^Java exception was raised during method invocation$/];
const RE = "EventFilters";
const LE = (t = {}) => {
  let r;
  return {
    name: RE,
    setup(o) {
      const a = o.getOptions();
      r = wp(t, a);
    },
    processEvent(o, a, u) {
      if (!r) {
        const c = u.getOptions();
        r = wp(t, c);
      }
      if (AE(o, r)) {
        return null;
      } else {
        return o;
      }
    }
  };
};
const OE = (t = {}) => ({
  ...LE(t),
  name: "InboundFilters"
});
function wp(t = {}, r = {}) {
  return {
    allowUrls: [...(t.allowUrls || []), ...(r.allowUrls || [])],
    denyUrls: [...(t.denyUrls || []), ...(r.denyUrls || [])],
    ignoreErrors: [...(t.ignoreErrors || []), ...(r.ignoreErrors || []), ...(t.disableErrorDefaults ? [] : PE)],
    ignoreTransactions: [...(t.ignoreTransactions || []), ...(r.ignoreTransactions || [])]
  };
}
function AE(t, r) {
  if (t.type) {
    if (t.type === "transaction" && ME(t, r.ignoreTransactions)) {
      if (Z) {
        Y.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${jn(t)}`);
      }
      return true;
    }
  } else {
    if (DE(t, r.ignoreErrors)) {
      if (Z) {
        Y.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${jn(t)}`);
      }
      return true;
    }
    if (BE(t)) {
      if (Z) {
        Y.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${jn(t)}`);
      }
      return true;
    }
    if (bE(t, r.denyUrls)) {
      if (Z) {
        Y.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${jn(t)}.
Url: ${Jo(t)}`);
      }
      return true;
    }
    if (!FE(t, r.allowUrls)) {
      if (Z) {
        Y.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${jn(t)}.
Url: ${Jo(t)}`);
      }
      return true;
    }
  }
  return false;
}
function DE(t, r) {
  if (r != null && r.length) {
    return Vh(t).some(o => os(o, r));
  } else {
    return false;
  }
}
function ME(t, r) {
  if (r == null || !r.length) {
    return false;
  }
  const o = t.transaction;
  if (o) {
    return os(o, r);
  } else {
    return false;
  }
}
function bE(t, r) {
  if (r == null || !r.length) {
    return false;
  }
  const o = Jo(t);
  if (o) {
    return os(o, r);
  } else {
    return false;
  }
}
function FE(t, r) {
  if (r == null || !r.length) {
    return true;
  }
  const o = Jo(t);
  if (o) {
    return os(o, r);
  } else {
    return true;
  }
}
function HE(t = []) {
  for (let r = t.length - 1; r >= 0; r--) {
    const o = t[r];
    if (o && o.filename !== "<anonymous>" && o.filename !== "[native code]") {
      return o.filename || null;
    }
  }
  return null;
}
function Jo(t) {
  var r;
  var o;
  try {
    const a = [...(((r = t.exception) == null ? undefined : r.values) ?? [])].reverse().find(c => {
      var d;
      var h;
      var m;
      return ((d = c.mechanism) == null ? undefined : d.parent_id) === undefined && ((m = (h = c.stacktrace) == null ? undefined : h.frames) == null ? undefined : m.length);
    });
    const u = (o = a == null ? undefined : a.stacktrace) == null ? undefined : o.frames;
    if (u) {
      return HE(u);
    } else {
      return null;
    }
  } catch {
    if (Z) {
      Y.error(`Cannot extract url for event ${jn(t)}`);
    }
    return null;
  }
}
function BE(t) {
  var r;
  var o;
  if ((o = (r = t.exception) == null ? undefined : r.values) != null && o.length) {
    return !t.message && !t.exception.values.some(a => a.stacktrace || a.type && a.type !== "Error" || a.value);
  } else {
    return false;
  }
}
function UE(t, r, o, a, u, c) {
  var h;
  if ((h = u.exception) == null || !h.values || !c || !xn(c.originalException, Error)) {
    return;
  }
  const d = u.exception.values.length > 0 ? u.exception.values[u.exception.values.length - 1] : undefined;
  if (d) {
    u.exception.values = Uu(t, r, a, c.originalException, o, u.exception.values, d, 0);
  }
}
function Uu(t, r, o, a, u, c, d, h) {
  if (c.length >= o + 1) {
    return c;
  }
  let m = [...c];
  if (xn(a[u], Error)) {
    Tp(d, h);
    const g = t(r, a[u]);
    const v = m.length;
    xp(g, u, v, h);
    m = Uu(t, r, o, a[u], u, [g, ...m], g, v);
  }
  if (Array.isArray(a.errors)) {
    a.errors.forEach((g, v) => {
      if (xn(g, Error)) {
        Tp(d, h);
        const S = t(r, g);
        const N = m.length;
        xp(S, `errors[${v}]`, N, h);
        m = Uu(t, r, o, g, u, [S, ...m], S, N);
      }
    });
  }
  return m;
}
function Tp(t, r) {
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
function xp(t, r, o, a) {
  t.mechanism = {
    handled: true,
    ...t.mechanism,
    type: "chained",
    source: r,
    exception_id: o,
    parent_id: a
  };
}
function jE(t) {
  const r = "console";
  Wn(r, t);
  Xn(r, zE);
}
function zE() {
  if ("console" in he) {
    Z0.forEach(function (t) {
      if (t in he.console) {
        ut(he.console, t, function (r) {
          qo[t] = r;
          return function (...o) {
            Nt("console", {
              args: o,
              level: t
            });
            const u = qo[t];
            if (u != null) {
              u.apply(he.console, o);
            }
          };
        });
      }
    });
  }
}
function $E(t) {
  if (t === "warn") {
    return "warning";
  } else if (["fatal", "error", "warning", "log", "info", "debug"].includes(t)) {
    return t;
  } else {
    return "log";
  }
}
const GE = "Dedupe";
const VE = () => {
  let t;
  return {
    name: GE,
    processEvent(r) {
      if (r.type) {
        return r;
      }
      try {
        if (XE(r, t)) {
          if (Z) {
            Y.warn("Event dropped due to being a duplicate of previously captured event.");
          }
          return null;
        }
      } catch {}
      return t = r;
    }
  };
};
const WE = VE;
function XE(t, r) {
  if (r) {
    return !!YE(t, r) || !!QE(t, r);
  } else {
    return false;
  }
}
function YE(t, r) {
  const o = t.message;
  const a = r.message;
  return (!!o || !!a) && (!o || !!a) && (!!o || !a) && o === a && !!qh(t, r) && !!Kh(t, r);
}
function QE(t, r) {
  const o = Ip(r);
  const a = Ip(t);
  return !!o && !!a && o.type === a.type && o.value === a.value && !!qh(t, r) && !!Kh(t, r);
}
function Kh(t, r) {
  let o = Hd(t);
  let a = Hd(r);
  if (!o && !a) {
    return true;
  }
  if (o && !a || !o && a || (o = o, a = a, a.length !== o.length)) {
    return false;
  }
  for (let u = 0; u < a.length; u++) {
    const c = a[u];
    const d = o[u];
    if (c.filename !== d.filename || c.lineno !== d.lineno || c.colno !== d.colno || c.function !== d.function) {
      return false;
    }
  }
  return true;
}
function qh(t, r) {
  let o = t.fingerprint;
  let a = r.fingerprint;
  if (!o && !a) {
    return true;
  }
  if (o && !a || !o && a) {
    return false;
  }
  o = o;
  a = a;
  try {
    return o.join("") === a.join("");
  } catch {
    return false;
  }
}
function Ip(t) {
  var r;
  var o;
  if ((o = (r = t.exception) == null ? undefined : r.values) == null) {
    return undefined;
  } else {
    return o[0];
  }
}
function Zh(t) {
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
const _i = he;
function KE() {
  return "history" in _i && !!_i.history;
}
function qE() {
  if (!("fetch" in _i)) {
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
function ju(t) {
  return t && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString());
}
function ZE() {
  var o;
  if (typeof EdgeRuntime == "string") {
    return true;
  }
  if (!qE()) {
    return false;
  }
  if (ju(_i.fetch)) {
    return true;
  }
  let t = false;
  const r = _i.document;
  if (r && typeof r.createElement == "function") {
    try {
      const a = r.createElement("iframe");
      a.hidden = true;
      r.head.appendChild(a);
      if ((o = a.contentWindow) != null && o.fetch) {
        t = ju(a.contentWindow.fetch);
      }
      r.head.removeChild(a);
    } catch (a) {
      if (Z) {
        Y.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", a);
      }
    }
  }
  return t;
}
function JE(t, r) {
  const o = "fetch";
  Wn(o, t);
  Xn(o, () => eS(undefined, r));
}
function eS(t, r = false) {
  if (!r || !!ZE()) {
    ut(he, "fetch", function (o) {
      return function (...a) {
        const u = new Error();
        const {
          method: c,
          url: d
        } = tS(a);
        const h = {
          args: a,
          fetchData: {
            method: c,
            url: d
          },
          startTimestamp: Zt() * 1000,
          virtualError: u,
          headers: nS(a)
        };
        Nt("fetch", {
          ...h
        });
        return o.apply(he, a).then(async m => {
          Nt("fetch", {
            ...h,
            endTimestamp: Zt() * 1000,
            response: m
          });
          return m;
        }, m => {
          Nt("fetch", {
            ...h,
            endTimestamp: Zt() * 1000,
            error: m
          });
          if (Ju(m) && m.stack === undefined) {
            m.stack = u.stack;
            Gn(m, "framesToPop", 1);
          }
          if (m instanceof TypeError && (m.message === "Failed to fetch" || m.message === "Load failed" || m.message === "NetworkError when attempting to fetch resource.")) {
            try {
              const g = new URL(h.fetchData.url);
              m.message = `${m.message} (${g.host})`;
            } catch {}
          }
          throw m;
        });
      };
    });
  }
}
function zu(t, r) {
  return !!t && typeof t == "object" && !!t[r];
}
function Np(t) {
  if (typeof t == "string") {
    return t;
  } else if (t) {
    if (zu(t, "url")) {
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
function tS(t) {
  if (t.length === 0) {
    return {
      method: "GET",
      url: ""
    };
  }
  if (t.length === 2) {
    const [o, a] = t;
    return {
      url: Np(o),
      method: zu(a, "method") ? String(a.method).toUpperCase() : "GET"
    };
  }
  const r = t[0];
  return {
    url: Np(r),
    method: zu(r, "method") ? String(r.method).toUpperCase() : "GET"
  };
}
function nS(t) {
  const [r, o] = t;
  try {
    if (typeof o == "object" && o !== null && "headers" in o && o.headers) {
      return new Headers(o.headers);
    }
    if (hv(r)) {
      return new Headers(r.headers);
    }
  } catch {}
}
function rS() {
  return "npm";
}
function iS(t, r = false) {
  return !r && (!t || !!t.startsWith("/") || !!t.match(/^[A-Z]:/) || !!t.startsWith(".") || !!t.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//)) && t !== undefined && !t.includes("node_modules/");
}
function oS(t) {
  const r = /^\s*[-]{4,}$/;
  const o = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;
  const a = /at (?:async )?(.+?) \(data:(.*?),/;
  return u => {
    var h;
    const c = u.match(a);
    if (c) {
      return {
        filename: `<data:${c[2]}>`,
        function: c[1]
      };
    }
    const d = u.match(o);
    if (d) {
      let m;
      let g;
      let v;
      let S;
      let N;
      if (d[1]) {
        v = d[1];
        let M = v.lastIndexOf(".");
        if (v[M - 1] === ".") {
          M--;
        }
        if (M > 0) {
          m = v.slice(0, M);
          g = v.slice(M + 1);
          const H = m.indexOf(".Module");
          if (H > 0) {
            v = v.slice(H + 1);
            m = m.slice(0, H);
          }
        }
        S = undefined;
      }
      if (g) {
        S = m;
        N = g;
      }
      if (g === "<anonymous>") {
        N = undefined;
        v = undefined;
      }
      if (v === undefined) {
        N = N || wn;
        v = S ? `${S}.${N}` : N;
      }
      let k = (h = d[2]) != null && h.startsWith("file://") ? d[2].slice(7) : d[2];
      const A = d[5] === "native";
      if (k != null && k.match(/\/[A-Z]:/)) {
        k = k.slice(1);
      }
      if (!k && d[5] && !A) {
        k = d[5];
      }
      return {
        filename: k ? decodeURI(k) : undefined,
        module: undefined,
        function: v,
        lineno: kp(d[3]),
        colno: kp(d[4]),
        in_app: iS(k || "", A)
      };
    }
    if (u.match(r)) {
      return {
        filename: u
      };
    }
  };
}
function sS(t) {
  return [90, oS()];
}
function kp(t) {
  return parseInt(t || "", 10) || undefined;
}
var Cp;
(function (t) {
  t[t.Classic = 1] = "Classic";
  t[t.Protocol = 2] = "Protocol";
  t[t.Both = 3] = "Both";
})(Cp ||= {});
function aS(t) {
  return {
    createUrl: r => `${t}://${r}/sentry_key`,
    urlMatches: function (r, o) {
      return r.startsWith(this.createUrl(o));
    },
    createKey: r => `${t}.${r}`,
    namespace: t
  };
}
const uS = "sentry-electron-renderer-id";
function lS(t) {
  var o;
  const r = aS(t);
  if ((o = window.__SENTRY_IPC__) != null && o[r.namespace]) {
    return window.__SENTRY_IPC__[r.namespace];
  }
  {
    Y.log("IPC was not configured in preload script, falling back to custom protocol and fetch");
    const a = window.__SENTRY_RENDERER_ID__ = lt();
    const u = {
      [uS]: a
    };
    return {
      sendRendererStart: () => {
        fetch(r.createUrl("start"), {
          method: "POST",
          body: "",
          headers: u
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
          headers: u
        }).catch(() => {});
      },
      sendEnvelope: c => {
        fetch(r.createUrl("envelope"), {
          method: "POST",
          body: c,
          headers: u
        }).catch(() => {});
      },
      sendStatus: c => {
        fetch(r.createUrl("status"), {
          method: "POST",
          body: JSON.stringify({
            status: c
          }),
          headers: u
        }).catch(() => {});
      },
      sendStructuredLog: c => {
        fetch(r.createUrl("structured-log"), {
          method: "POST",
          body: JSON.stringify(c),
          headers: u
        }).catch(() => {});
      }
    };
  }
}
let $o;
function Jh(t = $e()) {
  if (!t) {
    throw new Error("Could not find client, make sure to call Sentry.init before getIPC");
  }
  $o ||= new WeakMap();
  const r = $o.get(t);
  if (r) {
    return r;
  }
  const o = t.getOptions().ipcNamespace;
  const a = lS(o);
  $o.set(t, a);
  a.sendRendererStart();
  return a;
}
const Ce = he;
let $u = 0;
function em() {
  return $u > 0;
}
function cS() {
  $u++;
  setTimeout(() => {
    $u--;
  });
}
function xr(t, r = {}) {
  function o(u) {
    return typeof u == "function";
  }
  if (!o(t)) {
    return t;
  }
  try {
    const u = t.__sentry_wrapped__;
    if (u) {
      if (typeof u == "function") {
        return u;
      } else {
        return t;
      }
    }
    if (rl(t)) {
      return t;
    }
  } catch {
    return t;
  }
  const a = function (...u) {
    try {
      const c = u.map(d => xr(d, r));
      return t.apply(this, c);
    } catch (c) {
      cS();
      Av(d => {
        d.addEventProcessor(h => {
          if (r.mechanism) {
            Du(h, undefined);
            Sr(h, r.mechanism);
          }
          h.extra = {
            ...h.extra,
            arguments: u
          };
          return h;
        });
        W_(c);
      });
      throw c;
    }
  };
  try {
    for (const u in t) {
      if (Object.prototype.hasOwnProperty.call(t, u)) {
        a[u] = t[u];
      }
    }
  } catch {}
  Sh(a, t);
  Gn(t, "__sentry_wrapped__", a);
  try {
    if (Object.getOwnPropertyDescriptor(a, "name").configurable) {
      Object.defineProperty(a, "name", {
        get() {
          return t.name;
        }
      });
    }
  } catch {}
  return a;
}
function fS() {
  const t = nl();
  const {
    referrer: r
  } = Ce.document || {};
  const {
    userAgent: o
  } = Ce.navigator || {};
  const a = {
    ...(r && {
      Referer: r
    }),
    ...(o && {
      "User-Agent": o
    })
  };
  return {
    url: t,
    headers: a
  };
}
function fl(t, r) {
  const o = dl(t, r);
  const a = {
    type: gS(r),
    value: yS(r)
  };
  if (o.length) {
    a.stacktrace = {
      frames: o
    };
  }
  if (a.type === undefined && a.value === "") {
    a.value = "Unrecoverable error caught";
  }
  return a;
}
function dS(t, r, o, a) {
  const u = $e();
  const c = u == null ? undefined : u.getOptions().normalizeDepth;
  const d = wS(r);
  const h = {
    __serialized__: Ah(r, c)
  };
  if (d) {
    return {
      exception: {
        values: [fl(t, d)]
      },
      extra: h
    };
  }
  const m = {
    exception: {
      values: [{
        type: is(r) ? r.constructor.name : a ? "UnhandledRejection" : "Error",
        value: ES(r, {
          isUnhandledRejection: a
        })
      }]
    },
    extra: h
  };
  if (o) {
    const g = dl(t, o);
    if (g.length) {
      m.exception.values[0].stacktrace = {
        frames: g
      };
    }
  }
  return m;
}
function _u(t, r) {
  return {
    exception: {
      values: [fl(t, r)]
    }
  };
}
function dl(t, r) {
  const o = r.stacktrace || r.stack || "";
  const a = hS(r);
  const u = mS(r);
  try {
    return t(o, a, u);
  } catch {}
  return [];
}
const pS = /Minified React error #\d+;/i;
function hS(t) {
  if (t && pS.test(t.message)) {
    return 1;
  } else {
    return 0;
  }
}
function mS(t) {
  if (typeof t.framesToPop == "number") {
    return t.framesToPop;
  } else {
    return 0;
  }
}
function tm(t) {
  if (typeof WebAssembly !== "undefined" && typeof WebAssembly.Exception !== "undefined") {
    return t instanceof WebAssembly.Exception;
  } else {
    return false;
  }
}
function gS(t) {
  const r = t == null ? undefined : t.name;
  if (!r && tm(t)) {
    if (t.message && Array.isArray(t.message) && t.message.length == 2) {
      return t.message[0];
    } else {
      return "WebAssembly.Exception";
    }
  } else {
    return r;
  }
}
function yS(t) {
  const r = t == null ? undefined : t.message;
  if (tm(t)) {
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
function vS(t, r, o, a) {
  const u = (o == null ? undefined : o.syntheticException) || undefined;
  const c = pl(t, r, u, a);
  Sr(c);
  c.level = "error";
  if (o != null && o.event_id) {
    c.event_id = o.event_id;
  }
  return ss(c);
}
function _S(t, r, o = "info", a, u) {
  const c = (a == null ? undefined : a.syntheticException) || undefined;
  const d = Gu(t, r, c, u);
  d.level = o;
  if (a != null && a.event_id) {
    d.event_id = a.event_id;
  }
  return ss(d);
}
function pl(t, r, o, a, u) {
  let c;
  if (vh(r) && r.error) {
    return _u(t, r.error);
  }
  if (Ud(r) || cv(r)) {
    const d = r;
    if ("stack" in r) {
      c = _u(t, r);
    } else {
      const h = d.name || (Ud(d) ? "DOMError" : "DOMException");
      const m = d.message ? `${h}: ${d.message}` : h;
      c = Gu(t, m, o, a);
      Du(c, m);
    }
    if ("code" in d) {
      c.tags = {
        ...c.tags,
        "DOMException.code": `${d.code}`
      };
    }
    return c;
  }
  if (Ju(r)) {
    return _u(t, r);
  } else if (yi(r) || is(r)) {
    c = dS(t, r, o, u);
    Sr(c, {
      synthetic: true
    });
    return c;
  } else {
    c = Gu(t, r, o, a);
    Du(c, `${r}`);
    Sr(c, {
      synthetic: true
    });
    return c;
  }
}
function Gu(t, r, o, a) {
  const u = {};
  if (a && o) {
    const c = dl(t, o);
    if (c.length) {
      u.exception = {
        values: [{
          value: r,
          stacktrace: {
            frames: c
          }
        }]
      };
    }
    Sr(u, {
      synthetic: true
    });
  }
  if (el(r)) {
    const {
      __sentry_template_string__: c,
      __sentry_template_values__: d
    } = r;
    u.logentry = {
      message: c,
      params: d
    };
    return u;
  }
  u.message = r;
  return u;
}
function ES(t, {
  isUnhandledRejection: r
}) {
  const o = vv(t);
  const a = r ? "promise rejection" : "exception";
  if (vh(t)) {
    return `Event \`ErrorEvent\` captured as ${a} with message \`${t.message}\``;
  } else if (is(t)) {
    return `Event \`${SS(t)}\` (type=${t.type}) captured as ${a}`;
  } else {
    return `Object captured as ${a} with keys: ${o}`;
  }
}
function SS(t) {
  try {
    const r = Object.getPrototypeOf(t);
    if (r) {
      return r.constructor.name;
    } else {
      return undefined;
    }
  } catch {}
}
function wS(t) {
  for (const r in t) {
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      const o = t[r];
      if (o instanceof Error) {
        return o;
      }
    }
  }
}
class TS extends gE {
  constructor(r) {
    var v;
    const o = xS(r);
    const a = Ce.SENTRY_SDK_SOURCE || rS();
    xE(o, "browser", ["browser"], a);
    if ((v = o._metadata) != null && v.sdk) {
      o._metadata.sdk.settings = {
        infer_ip: o.sendDefaultPii ? "auto" : "never",
        ...o._metadata.sdk.settings
      };
    }
    super(o);
    const {
      sendDefaultPii: u,
      sendClientReports: c,
      enableLogs: d,
      _experiments: h,
      enableMetrics: m
    } = this._options;
    const g = m ?? (h == null ? undefined : h.enableMetrics) ?? true;
    if (Ce.document && (c || d || g)) {
      Ce.document.addEventListener("visibilitychange", () => {
        if (Ce.document.visibilityState === "hidden") {
          if (c) {
            this._flushOutcomes();
          }
          if (d) {
            Bh(this);
          }
          if (g) {
            jh(this);
          }
        }
      });
    }
    if (u) {
      this.on("beforeSendSession", TE);
    }
  }
  eventFromException(r, o) {
    return vS(this._options.stackParser, r, o, this._options.attachStacktrace);
  }
  eventFromMessage(r, o = "info", a) {
    return _S(this._options.stackParser, r, o, a, this._options.attachStacktrace);
  }
  _prepareEvent(r, o, a, u) {
    r.platform = r.platform || "javascript";
    return super._prepareEvent(r, o, a, u);
  }
}
function xS(t) {
  var r;
  return {
    release: typeof __SENTRY_RELEASE__ == "string" ? __SENTRY_RELEASE__ : (r = Ce.SENTRY_RELEASE) == null ? undefined : r.id,
    sendClientReports: true,
    parentSpanIsAlwaysRootSpan: true,
    ...t
  };
}
const IS = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const Xe = he;
const NS = 1000;
let Pp;
let Vu;
let Wu;
function kS(t) {
  Wn("dom", t);
  Xn("dom", CS);
}
function CS() {
  if (!Xe.document) {
    return;
  }
  const t = Nt.bind(null, "dom");
  const r = Rp(t, true);
  Xe.document.addEventListener("click", r, false);
  Xe.document.addEventListener("keypress", r, false);
  ["EventTarget", "Node"].forEach(o => {
    var c;
    var d;
    const u = (c = Xe[o]) == null ? undefined : c.prototype;
    if ((d = u == null ? undefined : u.hasOwnProperty) != null && d.call(u, "addEventListener")) {
      ut(u, "addEventListener", function (h) {
        return function (m, g, v) {
          if (m === "click" || m == "keypress") {
            try {
              const S = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {};
              const N = S[m] = S[m] || {
                refCount: 0
              };
              if (!N.handler) {
                const k = Rp(t);
                N.handler = k;
                h.call(this, m, k, v);
              }
              N.refCount++;
            } catch {}
          }
          return h.call(this, m, g, v);
        };
      });
      ut(u, "removeEventListener", function (h) {
        return function (m, g, v) {
          if (m === "click" || m == "keypress") {
            try {
              const S = this.__sentry_instrumentation_handlers__ || {};
              const N = S[m];
              if (N) {
                N.refCount--;
                if (N.refCount <= 0) {
                  h.call(this, m, N.handler, v);
                  N.handler = undefined;
                  delete S[m];
                }
                if (Object.keys(S).length === 0) {
                  delete this.__sentry_instrumentation_handlers__;
                }
              }
            } catch {}
          }
          return h.call(this, m, g, v);
        };
      });
    }
  });
}
function PS(t) {
  if (t.type !== Vu) {
    return false;
  }
  try {
    if (!t.target || t.target._sentryId !== Wu) {
      return false;
    }
  } catch {}
  return true;
}
function RS(t, r) {
  if (t !== "keypress") {
    return false;
  } else if (r != null && r.tagName) {
    return r.tagName !== "INPUT" && r.tagName !== "TEXTAREA" && !r.isContentEditable;
  } else {
    return true;
  }
}
function Rp(t, r = false) {
  return o => {
    if (!o || o._sentryCaptured) {
      return;
    }
    const a = LS(o);
    if (RS(o.type, a)) {
      return;
    }
    Gn(o, "_sentryCaptured", true);
    if (a && !a._sentryId) {
      Gn(a, "_sentryId", lt());
    }
    const u = o.type === "keypress" ? "input" : o.type;
    if (!PS(o)) {
      t({
        event: o,
        name: u,
        global: r
      });
      Vu = o.type;
      Wu = a ? a._sentryId : undefined;
    }
    clearTimeout(Pp);
    Pp = Xe.setTimeout(() => {
      Wu = undefined;
      Vu = undefined;
    }, NS);
  };
}
function LS(t) {
  try {
    return t.target;
  } catch {
    return null;
  }
}
let Go;
function nm(t) {
  const r = "history";
  Wn(r, t);
  Xn(r, OS);
}
function OS() {
  Xe.addEventListener("popstate", () => {
    const r = Xe.location.href;
    const o = Go;
    Go = r;
    if (o === r) {
      return;
    }
    Nt("history", {
      from: o,
      to: r
    });
  });
  if (!KE()) {
    return;
  }
  function t(r) {
    return function (...o) {
      const a = o.length > 2 ? o[2] : undefined;
      if (a) {
        const u = Go;
        const c = AS(String(a));
        Go = c;
        if (u === c) {
          return r.apply(this, o);
        }
        Nt("history", {
          from: u,
          to: c
        });
      }
      return r.apply(this, o);
    };
  }
  ut(Xe.history, "pushState", t);
  ut(Xe.history, "replaceState", t);
}
function AS(t) {
  try {
    return new URL(t, Xe.location.origin).toString();
  } catch {
    return t;
  }
}
const Ko = {};
function DS(t) {
  const r = Ko[t];
  if (r) {
    return r;
  }
  let o = Xe[t];
  if (ju(o)) {
    return Ko[t] = o.bind(Xe);
  }
  const a = Xe.document;
  if (a && typeof a.createElement == "function") {
    try {
      const u = a.createElement("iframe");
      u.hidden = true;
      a.head.appendChild(u);
      const c = u.contentWindow;
      if (c != null && c[t]) {
        o = c[t];
      }
      a.head.removeChild(u);
    } catch (u) {
      if (IS) {
        Y.warn(`Could not create sandbox iframe for ${t} check, bailing to window.${t}: `, u);
      }
    }
  }
  return o && (Ko[t] = o.bind(Xe));
}
function MS(t) {
  Ko[t] = undefined;
}
const gi = "__sentry_xhr_v3__";
function bS(t) {
  Wn("xhr", t);
  Xn("xhr", FS);
}
function FS() {
  if (!Xe.XMLHttpRequest) {
    return;
  }
  const t = XMLHttpRequest.prototype;
  t.open = new Proxy(t.open, {
    apply(r, o, a) {
      const u = new Error();
      const c = Zt() * 1000;
      const d = qt(a[0]) ? a[0].toUpperCase() : undefined;
      const h = HS(a[1]);
      if (!d || !h) {
        return r.apply(o, a);
      }
      o[gi] = {
        method: d,
        url: h,
        request_headers: {}
      };
      if (d === "POST" && h.match(/sentry_key/)) {
        o.__sentry_own_request__ = true;
      }
      const m = () => {
        const g = o[gi];
        if (g && o.readyState === 4) {
          try {
            g.status_code = o.status;
          } catch {}
          const v = {
            endTimestamp: Zt() * 1000,
            startTimestamp: c,
            xhr: o,
            virtualError: u
          };
          Nt("xhr", v);
        }
      };
      if ("onreadystatechange" in o && typeof o.onreadystatechange == "function") {
        o.onreadystatechange = new Proxy(o.onreadystatechange, {
          apply(g, v, S) {
            m();
            return g.apply(v, S);
          }
        });
      } else {
        o.addEventListener("readystatechange", m);
      }
      o.setRequestHeader = new Proxy(o.setRequestHeader, {
        apply(g, v, S) {
          const [N, k] = S;
          const A = v[gi];
          if (A && qt(N) && qt(k)) {
            A.request_headers[N.toLowerCase()] = k;
          }
          return g.apply(v, S);
        }
      });
      return r.apply(o, a);
    }
  });
  t.send = new Proxy(t.send, {
    apply(r, o, a) {
      const u = o[gi];
      if (!u) {
        return r.apply(o, a);
      }
      if (a[0] !== undefined) {
        u.body = a[0];
      }
      const c = {
        startTimestamp: Zt() * 1000,
        xhr: o
      };
      Nt("xhr", c);
      return r.apply(o, a);
    }
  });
}
function HS(t) {
  if (qt(t)) {
    return t;
  }
  try {
    return t.toString();
  } catch {}
}
const BS = 40;
function US(t, r = DS("fetch")) {
  let o = 0;
  let a = 0;
  async function u(c) {
    const d = c.body.length;
    o += d;
    a++;
    const h = {
      body: c.body,
      method: "POST",
      referrerPolicy: "strict-origin",
      headers: t.headers,
      keepalive: o <= 60000 && a < 15,
      ...t.fetchOptions
    };
    try {
      const m = await r(t.url, h);
      return {
        statusCode: m.status,
        headers: {
          "x-sentry-rate-limits": m.headers.get("X-Sentry-Rate-Limits"),
          "retry-after": m.headers.get("Retry-After")
        }
      };
    } catch (m) {
      MS("fetch");
      throw m;
    } finally {
      o -= d;
      a--;
    }
  }
  return Gh(t, u, cl(t.bufferSize || BS));
}
const as = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const jS = 30;
const zS = 50;
function Xu(t, r, o, a) {
  const u = {
    filename: t,
    function: r === "<anonymous>" ? wn : r,
    in_app: true
  };
  if (o !== undefined) {
    u.lineno = o;
  }
  if (a !== undefined) {
    u.colno = a;
  }
  return u;
}
const $S = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i;
const GS = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
const VS = /\((\S*)(?::(\d+))(?::(\d+))\)/;
const WS = /at (.+?) ?\(data:(.+?),/;
const XS = t => {
  const r = t.match(WS);
  if (r) {
    return {
      filename: `<data:${r[2]}>`,
      function: r[1]
    };
  }
  const o = $S.exec(t);
  if (o) {
    const [, u, c, d] = o;
    return Xu(u, wn, +c, +d);
  }
  const a = GS.exec(t);
  if (a) {
    if (a[2] && a[2].indexOf("eval") === 0) {
      const h = VS.exec(a[2]);
      if (h) {
        a[2] = h[1];
        a[3] = h[2];
        a[4] = h[3];
      }
    }
    const [c, d] = im(a[1] || wn, a[2]);
    return Xu(d, c, a[3] ? +a[3] : undefined, a[4] ? +a[4] : undefined);
  }
};
const rm = [jS, XS];
const YS = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
const QS = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
const KS = t => {
  const r = YS.exec(t);
  if (r) {
    if (r[3] && r[3].indexOf(" > eval") > -1) {
      const c = QS.exec(r[3]);
      if (c) {
        r[1] = r[1] || "eval";
        r[3] = c[1];
        r[4] = c[2];
        r[5] = "";
      }
    }
    let a = r[3];
    let u = r[1] || wn;
    [u, a] = im(u, a);
    return Xu(a, u, r[4] ? +r[4] : undefined, r[5] ? +r[5] : undefined);
  }
};
const qS = [zS, KS];
const ZS = [rm, qS];
const JS = hh(...ZS);
const im = (t, r) => {
  const o = t.indexOf("safari-extension") !== -1;
  const a = t.indexOf("safari-web-extension") !== -1;
  if (o || a) {
    return [t.indexOf("@") !== -1 ? t.split("@")[0] : wn, o ? `safari-extension:${r}` : `safari-web-extension:${r}`];
  } else {
    return [t, r];
  }
};
const Vo = 1024;
const e1 = "Breadcrumbs";
const t1 = (t = {}) => {
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
    name: e1,
    setup(o) {
      if (r.console) {
        jE(o1(o));
      }
      if (r.dom) {
        kS(i1(o, r.dom));
      }
      if (r.xhr) {
        bS(s1(o));
      }
      if (r.fetch) {
        JE(a1(o));
      }
      if (r.history) {
        nm(u1(o));
      }
      if (r.sentry) {
        o.on("beforeSendEvent", r1(o));
      }
    }
  };
};
const n1 = t1;
function r1(t) {
  return function (o) {
    if ($e() === t) {
      Vn({
        category: `sentry.${o.type === "transaction" ? "transaction" : "event"}`,
        event_id: o.event_id,
        level: o.level,
        message: jn(o)
      }, {
        event: o
      });
    }
  };
}
function i1(t, r) {
  return function (a) {
    if ($e() !== t) {
      return;
    }
    let u;
    let c;
    let d = typeof r == "object" ? r.serializeAttribute : undefined;
    let h = typeof r == "object" && typeof r.maxStringLength == "number" ? r.maxStringLength : undefined;
    if (h && h > Vo) {
      if (as) {
        Y.warn(`\`dom.maxStringLength\` cannot exceed ${Vo}, but a value of ${h} was configured. Sentry will use ${Vo} instead.`);
      }
      h = Vo;
    }
    if (typeof d == "string") {
      d = [d];
    }
    try {
      const g = a.event;
      const v = l1(g) ? g.target : g;
      u = Eh(v, {
        keyAttrs: d,
        maxStringLength: h
      });
      c = yv(v);
    } catch {
      u = "<unknown>";
    }
    if (u.length === 0) {
      return;
    }
    const m = {
      category: `ui.${a.name}`,
      message: u
    };
    if (c) {
      m.data = {
        "ui.component_name": c
      };
    }
    Vn(m, {
      event: a.event,
      name: a.name,
      global: a.global
    });
  };
}
function o1(t) {
  return function (o) {
    if ($e() !== t) {
      return;
    }
    const a = {
      category: "console",
      data: {
        arguments: o.args,
        logger: "console"
      },
      level: $E(o.level),
      message: $d(o.args, " ")
    };
    if (o.level === "assert") {
      if (o.args[0] === false) {
        a.message = `Assertion failed: ${$d(o.args.slice(1), " ") || "console.assert"}`;
        a.data.arguments = o.args.slice(1);
      } else {
        return;
      }
    }
    Vn(a, {
      input: o.args,
      level: o.level
    });
  };
}
function s1(t) {
  return function (o) {
    if ($e() !== t) {
      return;
    }
    const {
      startTimestamp: a,
      endTimestamp: u
    } = o;
    const c = o.xhr[gi];
    if (!a || !u || !c) {
      return;
    }
    const {
      method: d,
      url: h,
      status_code: m,
      body: g
    } = c;
    const v = {
      method: d,
      url: h,
      status_code: m
    };
    const S = {
      xhr: o.xhr,
      input: g,
      startTimestamp: a,
      endTimestamp: u
    };
    const N = {
      category: "xhr",
      data: v,
      type: "http",
      level: Zh(m)
    };
    t.emit("beforeOutgoingRequestBreadcrumb", N, S);
    Vn(N, S);
  };
}
function a1(t) {
  return function (o) {
    if ($e() !== t) {
      return;
    }
    const {
      startTimestamp: a,
      endTimestamp: u
    } = o;
    if (u && (!o.fetchData.url.match(/sentry_key/) || o.fetchData.method !== "POST")) {
      o.fetchData.method;
      o.fetchData.url;
      if (o.error) {
        const c = o.fetchData;
        const d = {
          data: o.error,
          input: o.args,
          startTimestamp: a,
          endTimestamp: u
        };
        const h = {
          category: "fetch",
          data: c,
          level: "error",
          type: "http"
        };
        t.emit("beforeOutgoingRequestBreadcrumb", h, d);
        Vn(h, d);
      } else {
        const c = o.response;
        const d = {
          ...o.fetchData,
          status_code: c == null ? undefined : c.status
        };
        o.fetchData.request_body_size;
        o.fetchData.response_body_size;
        if (c != null) {
          c.status;
        }
        const h = {
          input: o.args,
          response: c,
          startTimestamp: a,
          endTimestamp: u
        };
        const m = {
          category: "fetch",
          data: d,
          type: "http",
          level: Zh(d.status_code)
        };
        t.emit("beforeOutgoingRequestBreadcrumb", m, h);
        Vn(m, h);
      }
    }
  };
}
function u1(t) {
  return function (o) {
    if ($e() !== t) {
      return;
    }
    let a = o.from;
    let u = o.to;
    const c = vu(Ce.location.href);
    let d = a ? vu(a) : undefined;
    const h = vu(u);
    if (d == null || !d.path) {
      d = c;
    }
    if (c.protocol === h.protocol && c.host === h.host) {
      u = h.relative;
    }
    if (c.protocol === d.protocol && c.host === d.host) {
      a = d.relative;
    }
    Vn({
      category: "navigation",
      data: {
        from: a,
        to: u
      }
    });
  };
}
function l1(t) {
  return !!t && !!t.target;
}
const c1 = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
const f1 = "BrowserApiErrors";
const d1 = (t = {}) => {
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
    name: f1,
    setupOnce() {
      if (r.setTimeout) {
        ut(Ce, "setTimeout", Lp);
      }
      if (r.setInterval) {
        ut(Ce, "setInterval", Lp);
      }
      if (r.requestAnimationFrame) {
        ut(Ce, "requestAnimationFrame", h1);
      }
      if (r.XMLHttpRequest && "XMLHttpRequest" in Ce) {
        ut(XMLHttpRequest.prototype, "send", m1);
      }
      const o = r.eventTarget;
      if (o) {
        (Array.isArray(o) ? o : c1).forEach(u => g1(u, r));
      }
    }
  };
};
const p1 = d1;
function Lp(t) {
  return function (...r) {
    const o = r[0];
    r[0] = xr(o, {
      mechanism: {
        handled: false,
        type: `auto.browser.browserapierrors.${Tn(t)}`
      }
    });
    return t.apply(this, r);
  };
}
function h1(t) {
  return function (r) {
    return t.apply(this, [xr(r, {
      mechanism: {
        data: {
          handler: Tn(t)
        },
        handled: false,
        type: "auto.browser.browserapierrors.requestAnimationFrame"
      }
    })]);
  };
}
function m1(t) {
  return function (...r) {
    const o = this;
    ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(u => {
      if (u in o && typeof o[u] == "function") {
        ut(o, u, function (c) {
          const d = {
            mechanism: {
              data: {
                handler: Tn(c)
              },
              handled: false,
              type: `auto.browser.browserapierrors.xhr.${u}`
            }
          };
          const h = rl(c);
          if (h) {
            d.mechanism.data.handler = Tn(h);
          }
          return xr(c, d);
        });
      }
    });
    return t.apply(this, r);
  };
}
function g1(t, r) {
  var u;
  var c;
  const a = (u = Ce[t]) == null ? undefined : u.prototype;
  if ((c = a == null ? undefined : a.hasOwnProperty) != null && c.call(a, "addEventListener")) {
    ut(a, "addEventListener", function (d) {
      return function (h, m, g) {
        try {
          if (y1(m)) {
            m.handleEvent = xr(m.handleEvent, {
              mechanism: {
                data: {
                  handler: Tn(m),
                  target: t
                },
                handled: false,
                type: "auto.browser.browserapierrors.handleEvent"
              }
            });
          }
        } catch {}
        if (r.unregisterOriginalCallbacks) {
          v1(this, h, m);
        }
        return d.apply(this, [h, xr(m, {
          mechanism: {
            data: {
              handler: Tn(m),
              target: t
            },
            handled: false,
            type: "auto.browser.browserapierrors.addEventListener"
          }
        }), g]);
      };
    });
    ut(a, "removeEventListener", function (d) {
      return function (h, m, g) {
        try {
          const v = m.__sentry_wrapped__;
          if (v) {
            d.call(this, h, v, g);
          }
        } catch {}
        return d.call(this, h, m, g);
      };
    });
  }
}
function y1(t) {
  return typeof t.handleEvent == "function";
}
function v1(t, r, o) {
  if (t && typeof t == "object" && "removeEventListener" in t && typeof t.removeEventListener == "function") {
    t.removeEventListener(r, o);
  }
}
const _1 = () => ({
  name: "BrowserSession",
  setupOnce() {
    if (typeof Ce.document === "undefined") {
      if (as) {
        Y.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
      }
      return;
    }
    lp({
      ignoreDuration: true
    });
    cp();
    nm(({
      from: t,
      to: r
    }) => {
      if (t !== undefined && t !== r) {
        lp({
          ignoreDuration: true
        });
        cp();
      }
    });
  }
});
const E1 = "GlobalHandlers";
const S1 = (t = {}) => {
  const r = {
    onerror: true,
    onunhandledrejection: true,
    ...t
  };
  return {
    name: E1,
    setupOnce() {
      Error.stackTraceLimit = 50;
    },
    setup(o) {
      if (r.onerror) {
        T1(o);
        Op("onerror");
      }
      if (r.onunhandledrejection) {
        x1(o);
        Op("onunhandledrejection");
      }
    }
  };
};
const w1 = S1;
function T1(t) {
  sv(r => {
    const {
      stackParser: o,
      attachStacktrace: a
    } = om();
    if ($e() !== t || em()) {
      return;
    }
    const {
      msg: u,
      url: c,
      line: d,
      column: h,
      error: m
    } = r;
    const g = k1(pl(o, m || u, undefined, a, false), c, d, h);
    g.level = "error";
    Mh(g, {
      originalException: m,
      mechanism: {
        handled: false,
        type: "auto.browser.global_handlers.onerror"
      }
    });
  });
}
function x1(t) {
  uv(r => {
    const {
      stackParser: o,
      attachStacktrace: a
    } = om();
    if ($e() !== t || em()) {
      return;
    }
    const u = I1(r);
    const c = rs(u) ? N1(u) : pl(o, u, undefined, a, true);
    c.level = "error";
    Mh(c, {
      originalException: u,
      mechanism: {
        handled: false,
        type: "auto.browser.global_handlers.onunhandledrejection"
      }
    });
  });
}
function I1(t) {
  if (rs(t)) {
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
function N1(t) {
  return {
    exception: {
      values: [{
        type: "UnhandledRejection",
        value: `Non-Error promise rejection captured with value: ${String(t)}`
      }]
    }
  };
}
function k1(t, r, o, a) {
  const u = t.exception = t.exception || {};
  const c = u.values = u.values || [];
  const d = c[0] = c[0] || {};
  const h = d.stacktrace = d.stacktrace || {};
  const m = h.frames = h.frames || [];
  const g = a;
  const v = o;
  const S = C1(r) ?? nl();
  if (m.length === 0) {
    m.push({
      colno: g,
      filename: S,
      function: wn,
      in_app: true,
      lineno: v
    });
  }
  return t;
}
function Op(t) {
  if (as) {
    Y.log(`Global Handler attached: ${t}`);
  }
}
function om() {
  const t = $e();
  return (t == null ? undefined : t.getOptions()) || {
    stackParser: () => [],
    attachStacktrace: false
  };
}
function C1(t) {
  if (!!qt(t) && t.length !== 0) {
    if (t.startsWith("data:")) {
      const r = t.match(/^data:([^;]+)/);
      const o = r ? r[1] : "text/javascript";
      const a = t.includes("base64,");
      return `<data:${o}${a ? ",base64" : ""}>`;
    }
    return t;
  }
}
const P1 = () => ({
  name: "HttpContext",
  preprocessEvent(t) {
    var a;
    if (!Ce.navigator && !Ce.location && !Ce.document) {
      return;
    }
    const r = fS();
    const o = {
      ...r.headers,
      ...((a = t.request) == null ? undefined : a.headers)
    };
    t.request = {
      ...r,
      ...t.request,
      headers: o
    };
  }
});
const R1 = "cause";
const L1 = 5;
const O1 = "LinkedErrors";
const A1 = (t = {}) => {
  const r = t.limit || L1;
  const o = t.key || R1;
  return {
    name: O1,
    preprocessEvent(a, u, c) {
      const d = c.getOptions();
      UE(fl, d.stackParser, o, r, a, u);
    }
  };
};
const D1 = A1;
function M1() {
  if (b1()) {
    if (as) {
      kr(() => {
        console.error("[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/");
      });
    }
    return true;
  } else {
    return false;
  }
}
function b1() {
  var c;
  if (typeof Ce.window === "undefined") {
    return false;
  }
  const t = Ce;
  if (t.nw) {
    return false;
  }
  const r = t.chrome || t.browser;
  if ((c = r == null ? undefined : r.runtime) == null || !c.id) {
    return false;
  }
  const o = nl();
  const a = ["chrome-extension", "moz-extension", "ms-browser-extension", "safari-web-extension"];
  return Ce !== Ce.top || !a.some(d => o.startsWith(`${d}://`));
}
function sm(t) {
  return [OE(), CE(), p1(), n1(), w1(), D1(), WE(), P1(), _1()];
}
function F1(t = {}) {
  const r = !t.skipBrowserExtensionCheck && M1();
  let o = t.defaultIntegrations == null ? sm() : t.defaultIntegrations;
  const a = {
    ...t,
    enabled: r ? false : t.enabled,
    stackParser: ov(t.stackParser || JS),
    integrations: J_({
      integrations: t.integrations,
      defaultIntegrations: o
    }),
    transport: t.transport || US
  };
  return SE(TS, a);
}
function Eu() {
  const t = ol().getScopeData();
  const r = Yn().getScopeData();
  const o = Ut().getScopeData();
  Zo(t, r);
  Zo(t, o);
  t.eventProcessors = [];
  return t;
}
function H1(t) {
  Yn().addScopeListener(r => {
    const o = Eu();
    t(o, r);
  });
  Ut().addScopeListener(r => {
    const o = Eu();
    t(o, r);
  });
  ol().addScopeListener(r => {
    const o = Eu();
    t(o, r);
  });
}
const B1 = () => ({
  name: "ScopeToMain",
  setup(t) {
    const r = Jh(t);
    H1((o, a) => {
      r.sendScope(JSON.stringify(bt(o, 20, 2000)));
      a.clearBreadcrumbs();
      a.clearAttachments();
    });
  }
});
function U1(t) {
  let r;
  return Gh(t, async o => {
    r ||= Jh();
    r.sendEnvelope(o.body);
    return {
      statusCode: 200
    };
  });
}
const j1 = 50;
const [, z1] = rm;
const [, $1] = sS();
const G1 = (t, r = 0) => {
  const o = [];
  for (const a of t.split(`
`).slice(r)) {
    const u = z1(a);
    const c = $1(a);
    if (u && (c == null ? undefined : c.in_app) !== false) {
      o.push(u);
    } else if (c) {
      if (c.module === undefined) {
        delete c.module;
      }
      o.push(c);
    }
    if (o.length >= j1) {
      break;
    }
  }
  return mh(o);
};
function V1(t) {
  return [...sm().filter(r => r.name !== "BrowserSession"), B1()];
}
function W1(t = {}, r = F1) {
  if (window != null && window.__SENTRY__RENDERER_INIT__) {
    Y.warn(`The browser SDK has already been initialized.
If init has been called in the preload and contextIsolation is disabled, is not required to call init in the renderer`);
    return;
  }
  window.__SENTRY__RENDERER_INIT__ = true;
  t.sendClientReports = false;
  if (t.defaultIntegrations === undefined) {
    t.defaultIntegrations = V1();
  }
  if (t.stackParser === undefined) {
    t.stackParser = G1;
  }
  if (t.ipcNamespace === undefined) {
    t.ipcNamespace = "sentry-ipc";
  }
  if (t.dsn === undefined) {
    t.dsn = "https://12345@dummy.dsn/12345";
  }
  if (t.transport === undefined) {
    t.transport = U1;
  }
  delete t.initialScope;
  r(t);
}
var bp;
if (window.desktopEssentialTelemetryDisabled !== true && ((bp = window.process) == null || !bp.env.CI)) {
  W1();
}
const am = window.matchMedia("(prefers-color-scheme: dark)");
const X1 = am.matches ? "darkTheme" : "";
document.body.className = X1;
am.addEventListener("change", t => {
  document.body.className = t.matches ? "darkTheme" : "";
});
const Y1 = "modulepreload";
const Q1 = function (t, r) {
  return new URL(t, r).href;
};
const Ap = {};
const K1 = function (r, o, a) {
  let u = Promise.resolve();
  if (o && o.length > 0) {
    let d = function (v) {
      return Promise.all(v.map(S => Promise.resolve(S).then(N => ({
        status: "fulfilled",
        value: N
      }), N => ({
        status: "rejected",
        reason: N
      }))));
    };
    const h = document.getElementsByTagName("link");
    const m = document.querySelector("meta[property=csp-nonce]");
    const g = (m == null ? undefined : m.nonce) || (m == null ? undefined : m.getAttribute("nonce"));
    u = d(o.map(v => {
      v = Q1(v, a);
      if (v in Ap) {
        return;
      }
      Ap[v] = true;
      const S = v.endsWith(".css");
      const N = S ? "[rel=\"stylesheet\"]" : "";
      if (a) {
        for (let M = h.length - 1; M >= 0; M--) {
          const H = h[M];
          if (H.href === v && (!S || H.rel === "stylesheet")) {
            return;
          }
        }
      } else if (document.querySelector(`link[href="${v}"]${N}`)) {
        return;
      }
      const A = document.createElement("link");
      A.rel = S ? "stylesheet" : Y1;
      if (!S) {
        A.as = "script";
      }
      A.crossOrigin = "";
      A.href = v;
      if (g) {
        A.setAttribute("nonce", g);
      }
      document.head.appendChild(A);
      if (S) {
        return new Promise((M, H) => {
          A.addEventListener("load", M);
          A.addEventListener("error", () => H(new Error(`Unable to preload CSS for ${v}`)));
        });
      }
    }));
  }
  function c(d) {
    const h = new Event("vite:preloadError", {
      cancelable: true
    });
    h.payload = d;
    window.dispatchEvent(h);
    if (!h.defaultPrevented) {
      throw d;
    }
  }
  return u.then(d => {
    for (const h of d || []) {
      if (h.status === "rejected") {
        c(h.reason);
      }
    }
    return r().catch(c);
  });
};
fh(document.querySelector("body"), K1(() => import("./FindInPage-ea4OxFKk.js"), [], import.meta.url));
export { q1 as R, vd as _, Ft as a, ew as b, gt as c, tw as d, J1 as e, Tu as f, Z1 as g, nw as h, Su as j, ze as r, uh as u };