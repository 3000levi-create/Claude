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
      t._sentryDebugIds[r] = "41a6ccf9-5c25-4e2b-87a7-19c0fafdb7aa";
      t._sentryDebugIdIdentifier = "sentry-dbid-41a6ccf9-5c25-4e2b-87a7-19c0fafdb7aa";
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
    for (const f of u) {
      if (f.type === "childList") {
        for (const d of f.addedNodes) {
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
    const f = {};
    if (u.integrity) {
      f.integrity = u.integrity;
    }
    if (u.referrerPolicy) {
      f.referrerPolicy = u.referrerPolicy;
    }
    if (u.crossOrigin === "use-credentials") {
      f.credentials = "include";
    } else if (u.crossOrigin === "anonymous") {
      f.credentials = "omit";
    } else {
      f.credentials = "same-origin";
    }
    return f;
  }
  function a(u) {
    if (u.ep) {
      return;
    }
    u.ep = true;
    const f = o(u);
    fetch(u.href, f);
  }
})();
const ny = "" + new URL("AnthropicSans-Italic-Variable-Dqj5mHDM.ttf", import.meta.url).href;
const ry = "" + new URL("AnthropicSans-Roman-Variable-DCEzLfgm.ttf", import.meta.url).href;
const iy = "" + new URL("AnthropicSerif-Italic-Variable-B9Ik5ODi.ttf", import.meta.url).href;
const oy = "" + new URL("AnthropicSerif-Roman-Variable-D05ngSTe.ttf", import.meta.url).href;
const sy = `
@font-face {
    font-family: 'Anthropic Sans';
    src: url('${ry}') format('truetype');
    font-weight: 300 800;
    font-style: normal;
}

@font-face {
    font-family: 'Anthropic Sans';
    src: url('${ny}') format('truetype');
    font-weight: 300 800;
    font-style: italic;
}

@font-face {
    font-family: 'Anthropic Serif';
    src: url('${oy}') format('truetype');
    font-weight: 300 800;
    font-style: normal;
}

@font-face {
    font-family: 'Anthropic Serif';
    src: url('${iy}') format('truetype');
    font-weight: 300 800;
    font-style: italic;
}
`;
const Mp = document.createElement("style");
Mp.textContent = sy;
document.head.appendChild(Mp);
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
var ud;
function ay() {
  if (ud) {
    return ee;
  }
  ud = 1;
  var t = Symbol.for("react.element");
  var r = Symbol.for("react.portal");
  var o = Symbol.for("react.fragment");
  var a = Symbol.for("react.strict_mode");
  var u = Symbol.for("react.profiler");
  var f = Symbol.for("react.provider");
  var d = Symbol.for("react.context");
  var h = Symbol.for("react.forward_ref");
  var m = Symbol.for("react.suspense");
  var y = Symbol.for("react.memo");
  var v = Symbol.for("react.lazy");
  var T = Symbol.iterator;
  function N(S) {
    if (S === null || typeof S != "object") {
      return null;
    } else {
      S = T && S[T] || S["@@iterator"];
      if (typeof S == "function") {
        return S;
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
  var D = Object.assign;
  var M = {};
  function H(S, P, J) {
    this.props = S;
    this.context = P;
    this.refs = M;
    this.updater = J || k;
  }
  H.prototype.isReactComponent = {};
  H.prototype.setState = function (S, P) {
    if (typeof S != "object" && typeof S != "function" && S != null) {
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    }
    this.updater.enqueueSetState(this, S, P, "setState");
  };
  H.prototype.forceUpdate = function (S) {
    this.updater.enqueueForceUpdate(this, S, "forceUpdate");
  };
  function ne() {}
  ne.prototype = H.prototype;
  function q(S, P, J) {
    this.props = S;
    this.context = P;
    this.refs = M;
    this.updater = J || k;
  }
  var Q = q.prototype = new ne();
  Q.constructor = q;
  D(Q, H.prototype);
  Q.isPureReactComponent = true;
  var ie = Array.isArray;
  var A = Object.prototype.hasOwnProperty;
  var ce = {
    current: null
  };
  var Re = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function tt(S, P, J) {
    var te;
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
      for (te in P) {
        if (A.call(P, te) && !Re.hasOwnProperty(te)) {
          ae[te] = P[te];
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
    if (S && S.defaultProps) {
      de = S.defaultProps;
      for (te in de) {
        if (ae[te] === undefined) {
          ae[te] = de[te];
        }
      }
    }
    return {
      $$typeof: t,
      type: S,
      key: ue,
      ref: me,
      props: ae,
      _owner: ce.current
    };
  }
  function en(S, P) {
    return {
      $$typeof: t,
      type: S.type,
      key: P,
      ref: S.ref,
      props: S.props,
      _owner: S._owner
    };
  }
  function jt(S) {
    return typeof S == "object" && S !== null && S.$$typeof === t;
  }
  function Nn(S) {
    var P = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + S.replace(/[=:]/g, function (J) {
      return P[J];
    });
  }
  var kt = /\/+/g;
  function nt(S, P) {
    if (typeof S == "object" && S !== null && S.key != null) {
      return Nn("" + S.key);
    } else {
      return P.toString(36);
    }
  }
  function vt(S, P, J, te, ae) {
    var ue = typeof S;
    if (ue === "undefined" || ue === "boolean") {
      S = null;
    }
    var me = false;
    if (S === null) {
      me = true;
    } else {
      switch (ue) {
        case "string":
        case "number":
          me = true;
          break;
        case "object":
          switch (S.$$typeof) {
            case t:
            case r:
              me = true;
          }
      }
    }
    if (me) {
      me = S;
      ae = ae(me);
      S = te === "" ? "." + nt(me, 0) : te;
      if (ie(ae)) {
        J = "";
        if (S != null) {
          J = S.replace(kt, "$&/") + "/";
        }
        vt(ae, P, J, "", function (rt) {
          return rt;
        });
      } else if (ae != null) {
        if (jt(ae)) {
          ae = en(ae, J + (!ae.key || me && me.key === ae.key ? "" : ("" + ae.key).replace(kt, "$&/") + "/") + S);
        }
        P.push(ae);
      }
      return 1;
    }
    me = 0;
    te = te === "" ? "." : te + ":";
    if (ie(S)) {
      for (var de = 0; de < S.length; de++) {
        ue = S[de];
        var Ee = te + nt(ue, de);
        me += vt(ue, P, J, Ee, ae);
      }
    } else {
      Ee = N(S);
      if (typeof Ee == "function") {
        S = Ee.call(S);
        de = 0;
        while (!(ue = S.next()).done) {
          ue = ue.value;
          Ee = te + nt(ue, de++);
          me += vt(ue, P, J, Ee, ae);
        }
      } else if (ue === "object") {
        P = String(S);
        throw Error("Objects are not valid as a React child (found: " + (P === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : P) + "). If you meant to render a collection of children, use an array instead.");
      }
    }
    return me;
  }
  function Ct(S, P, J) {
    if (S == null) {
      return S;
    }
    var te = [];
    var ae = 0;
    vt(S, te, "", "", function (ue) {
      return P.call(J, ue, ae++);
    });
    return te;
  }
  function Ye(S) {
    if (S._status === -1) {
      var P = S._result;
      P = P();
      P.then(function (J) {
        if (S._status === 0 || S._status === -1) {
          S._status = 1;
          S._result = J;
        }
      }, function (J) {
        if (S._status === 0 || S._status === -1) {
          S._status = 2;
          S._result = J;
        }
      });
      if (S._status === -1) {
        S._status = 0;
        S._result = P;
      }
    }
    if (S._status === 1) {
      return S._result.default;
    }
    throw S._result;
  }
  var xe = {
    current: null
  };
  var F = {
    transition: null
  };
  var X = {
    ReactCurrentDispatcher: xe,
    ReactCurrentBatchConfig: F,
    ReactCurrentOwner: ce
  };
  function U() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  ee.Children = {
    map: Ct,
    forEach: function (S, P, J) {
      Ct(S, function () {
        P.apply(this, arguments);
      }, J);
    },
    count: function (S) {
      var P = 0;
      Ct(S, function () {
        P++;
      });
      return P;
    },
    toArray: function (S) {
      return Ct(S, function (P) {
        return P;
      }) || [];
    },
    only: function (S) {
      if (!jt(S)) {
        throw Error("React.Children.only expected to receive a single React element child.");
      }
      return S;
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
  ee.cloneElement = function (S, P, J) {
    if (S == null) {
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + S + ".");
    }
    var te = D({}, S.props);
    var ae = S.key;
    var ue = S.ref;
    var me = S._owner;
    if (P != null) {
      if (P.ref !== undefined) {
        ue = P.ref;
        me = ce.current;
      }
      if (P.key !== undefined) {
        ae = "" + P.key;
      }
      if (S.type && S.type.defaultProps) {
        var de = S.type.defaultProps;
      }
      for (Ee in P) {
        if (A.call(P, Ee) && !Re.hasOwnProperty(Ee)) {
          te[Ee] = P[Ee] === undefined && de !== undefined ? de[Ee] : P[Ee];
        }
      }
    }
    var Ee = arguments.length - 2;
    if (Ee === 1) {
      te.children = J;
    } else if (Ee > 1) {
      de = Array(Ee);
      for (var rt = 0; rt < Ee; rt++) {
        de[rt] = arguments[rt + 2];
      }
      te.children = de;
    }
    return {
      $$typeof: t,
      type: S.type,
      key: ae,
      ref: ue,
      props: te,
      _owner: me
    };
  };
  ee.createContext = function (S) {
    S = {
      $$typeof: d,
      _currentValue: S,
      _currentValue2: S,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    };
    S.Provider = {
      $$typeof: f,
      _context: S
    };
    return S.Consumer = S;
  };
  ee.createElement = tt;
  ee.createFactory = function (S) {
    var P = tt.bind(null, S);
    P.type = S;
    return P;
  };
  ee.createRef = function () {
    return {
      current: null
    };
  };
  ee.forwardRef = function (S) {
    return {
      $$typeof: h,
      render: S
    };
  };
  ee.isValidElement = jt;
  ee.lazy = function (S) {
    return {
      $$typeof: v,
      _payload: {
        _status: -1,
        _result: S
      },
      _init: Ye
    };
  };
  ee.memo = function (S, P) {
    return {
      $$typeof: y,
      type: S,
      compare: P === undefined ? null : P
    };
  };
  ee.startTransition = function (S) {
    var P = F.transition;
    F.transition = {};
    try {
      S();
    } finally {
      F.transition = P;
    }
  };
  ee.unstable_act = U;
  ee.useCallback = function (S, P) {
    return xe.current.useCallback(S, P);
  };
  ee.useContext = function (S) {
    return xe.current.useContext(S);
  };
  ee.useDebugValue = function () {};
  ee.useDeferredValue = function (S) {
    return xe.current.useDeferredValue(S);
  };
  ee.useEffect = function (S, P) {
    return xe.current.useEffect(S, P);
  };
  ee.useId = function () {
    return xe.current.useId();
  };
  ee.useImperativeHandle = function (S, P, J) {
    return xe.current.useImperativeHandle(S, P, J);
  };
  ee.useInsertionEffect = function (S, P) {
    return xe.current.useInsertionEffect(S, P);
  };
  ee.useLayoutEffect = function (S, P) {
    return xe.current.useLayoutEffect(S, P);
  };
  ee.useMemo = function (S, P) {
    return xe.current.useMemo(S, P);
  };
  ee.useReducer = function (S, P, J) {
    return xe.current.useReducer(S, P, J);
  };
  ee.useRef = function (S) {
    return xe.current.useRef(S);
  };
  ee.useState = function (S) {
    return xe.current.useState(S);
  };
  ee.useSyncExternalStore = function (S, P, J) {
    return xe.current.useSyncExternalStore(S, P, J);
  };
  ee.useTransition = function () {
    return xe.current.useTransition();
  };
  ee.version = "18.3.1";
  return ee;
}
var ld;
function Xu() {
  if (!ld) {
    ld = 1;
    nu.exports = ay();
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
var cd;
function uy() {
  if (cd) {
    return mi;
  }
  cd = 1;
  var t = Xu();
  var r = Symbol.for("react.element");
  var o = Symbol.for("react.fragment");
  var a = Object.prototype.hasOwnProperty;
  var u = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
  var f = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function d(h, m, y) {
    var v;
    var T = {};
    var N = null;
    var k = null;
    if (y !== undefined) {
      N = "" + y;
    }
    if (m.key !== undefined) {
      N = "" + m.key;
    }
    if (m.ref !== undefined) {
      k = m.ref;
    }
    for (v in m) {
      if (a.call(m, v) && !f.hasOwnProperty(v)) {
        T[v] = m[v];
      }
    }
    if (h && h.defaultProps) {
      m = h.defaultProps;
      for (v in m) {
        if (T[v] === undefined) {
          T[v] = m[v];
        }
      }
    }
    return {
      $$typeof: r,
      type: h,
      key: N,
      ref: k,
      props: T,
      _owner: u.current
    };
  }
  mi.Fragment = o;
  mi.jsx = d;
  mi.jsxs = d;
  return mi;
}
var fd;
function ly() {
  if (!fd) {
    fd = 1;
    tu.exports = uy();
  }
  return tu.exports;
}
var Su = ly();
var Xe = Xu();
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
var dd;
function cy() {
  if (!dd) {
    dd = 1;
    (function (t) {
      function r(F, X) {
        var U = F.length;
        F.push(X);
        e: while (U > 0) {
          var S = U - 1 >>> 1;
          var P = F[S];
          if (u(P, X) > 0) {
            F[S] = X;
            F[U] = P;
            U = S;
          } else {
            break e;
          }
        }
      }
      function o(F) {
        if (F.length === 0) {
          return null;
        } else {
          return F[0];
        }
      }
      function a(F) {
        if (F.length === 0) {
          return null;
        }
        var X = F[0];
        var U = F.pop();
        if (U !== X) {
          F[0] = U;
          e: for (var S = 0, P = F.length, J = P >>> 1; S < J;) {
            var te = (S + 1) * 2 - 1;
            var ae = F[te];
            var ue = te + 1;
            var me = F[ue];
            if (u(ae, U) < 0) {
              if (ue < P && u(me, ae) < 0) {
                F[S] = me;
                F[ue] = U;
                S = ue;
              } else {
                F[S] = ae;
                F[te] = U;
                S = te;
              }
            } else if (ue < P && u(me, U) < 0) {
              F[S] = me;
              F[ue] = U;
              S = ue;
            } else {
              break e;
            }
          }
        }
        return X;
      }
      function u(F, X) {
        var U = F.sortIndex - X.sortIndex;
        if (U !== 0) {
          return U;
        } else {
          return F.id - X.id;
        }
      }
      if (typeof performance == "object" && typeof performance.now == "function") {
        var f = performance;
        t.unstable_now = function () {
          return f.now();
        };
      } else {
        var d = Date;
        var h = d.now();
        t.unstable_now = function () {
          return d.now() - h;
        };
      }
      var m = [];
      var y = [];
      var v = 1;
      var T = null;
      var N = 3;
      var k = false;
      var D = false;
      var M = false;
      var H = typeof setTimeout == "function" ? setTimeout : null;
      var ne = typeof clearTimeout == "function" ? clearTimeout : null;
      var q = typeof setImmediate !== "undefined" ? setImmediate : null;
      if (typeof navigator !== "undefined" && navigator.scheduling !== undefined && navigator.scheduling.isInputPending !== undefined) {
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
      }
      function Q(F) {
        for (var X = o(y); X !== null;) {
          if (X.callback === null) {
            a(y);
          } else if (X.startTime <= F) {
            a(y);
            X.sortIndex = X.expirationTime;
            r(m, X);
          } else {
            break;
          }
          X = o(y);
        }
      }
      function ie(F) {
        M = false;
        Q(F);
        if (!D) {
          if (o(m) !== null) {
            D = true;
            Ye(A);
          } else {
            var X = o(y);
            if (X !== null) {
              xe(ie, X.startTime - F);
            }
          }
        }
      }
      function A(F, X) {
        D = false;
        if (M) {
          M = false;
          ne(tt);
          tt = -1;
        }
        k = true;
        var U = N;
        try {
          Q(X);
          T = o(m);
          while (T !== null && (!(T.expirationTime > X) || F && !Nn())) {
            var S = T.callback;
            if (typeof S == "function") {
              T.callback = null;
              N = T.priorityLevel;
              var P = S(T.expirationTime <= X);
              X = t.unstable_now();
              if (typeof P == "function") {
                T.callback = P;
              } else if (T === o(m)) {
                a(m);
              }
              Q(X);
            } else {
              a(m);
            }
            T = o(m);
          }
          if (T !== null) {
            var J = true;
          } else {
            var te = o(y);
            if (te !== null) {
              xe(ie, te.startTime - X);
            }
            J = false;
          }
          return J;
        } finally {
          T = null;
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
          var F = t.unstable_now();
          jt = F;
          var X = true;
          try {
            X = Re(true, F);
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
      function Ye(F) {
        Re = F;
        if (!ce) {
          ce = true;
          nt();
        }
      }
      function xe(F, X) {
        tt = H(function () {
          F(t.unstable_now());
        }, X);
      }
      t.unstable_IdlePriority = 5;
      t.unstable_ImmediatePriority = 1;
      t.unstable_LowPriority = 4;
      t.unstable_NormalPriority = 3;
      t.unstable_Profiling = null;
      t.unstable_UserBlockingPriority = 2;
      t.unstable_cancelCallback = function (F) {
        F.callback = null;
      };
      t.unstable_continueExecution = function () {
        if (!D && !k) {
          D = true;
          Ye(A);
        }
      };
      t.unstable_forceFrameRate = function (F) {
        if (F < 0 || F > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
        } else {
          en = F > 0 ? Math.floor(1000 / F) : 5;
        }
      };
      t.unstable_getCurrentPriorityLevel = function () {
        return N;
      };
      t.unstable_getFirstCallbackNode = function () {
        return o(m);
      };
      t.unstable_next = function (F) {
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
          return F();
        } finally {
          N = U;
        }
      };
      t.unstable_pauseExecution = function () {};
      t.unstable_requestPaint = function () {};
      t.unstable_runWithPriority = function (F, X) {
        switch (F) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            F = 3;
        }
        var U = N;
        N = F;
        try {
          return X();
        } finally {
          N = U;
        }
      };
      t.unstable_scheduleCallback = function (F, X, U) {
        var S = t.unstable_now();
        if (typeof U == "object" && U !== null) {
          U = U.delay;
          U = typeof U == "number" && U > 0 ? S + U : S;
        } else {
          U = S;
        }
        switch (F) {
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
        F = {
          id: v++,
          callback: X,
          priorityLevel: F,
          startTime: U,
          expirationTime: P,
          sortIndex: -1
        };
        if (U > S) {
          F.sortIndex = U;
          r(y, F);
          if (o(m) === null && F === o(y)) {
            if (M) {
              ne(tt);
              tt = -1;
            } else {
              M = true;
            }
            xe(ie, U - S);
          }
        } else {
          F.sortIndex = P;
          r(m, F);
          if (!D && !k) {
            D = true;
            Ye(A);
          }
        }
        return F;
      };
      t.unstable_shouldYield = Nn;
      t.unstable_wrapCallback = function (F) {
        var X = N;
        return function () {
          var U = N;
          N = X;
          try {
            return F.apply(this, arguments);
          } finally {
            N = U;
          }
        };
      };
    })(ou);
  }
  return ou;
}
var pd;
function fy() {
  if (!pd) {
    pd = 1;
    iu.exports = cy();
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
var hd;
function dy() {
  if (hd) {
    return et;
  }
  hd = 1;
  var t = Xu();
  var r = fy();
  function o(e) {
    var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e;
    for (var i = 1; i < arguments.length; i++) {
      n += "&args[]=" + encodeURIComponent(arguments[i]);
    }
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var a = new Set();
  var u = {};
  function f(e, n) {
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
  var y = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
  var v = {};
  var T = {};
  function N(e) {
    if (m.call(T, e)) {
      return true;
    } else if (m.call(v, e)) {
      return false;
    } else if (y.test(e)) {
      return T[e] = true;
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
  function D(e, n, i, s) {
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
  function M(e, n, i, s, l, c, p) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4;
    this.attributeName = s;
    this.attributeNamespace = l;
    this.mustUseProperty = i;
    this.propertyName = e;
    this.type = n;
    this.sanitizeURL = c;
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
  var ne = /[\-:]([a-z])/g;
  function q(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
    var n = e.replace(ne, q);
    H[n] = new M(n, 1, false, e, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var n = e.replace(ne, q);
    H[n] = new M(n, 1, false, e, "http://www.w3.org/1999/xlink", false, false);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var n = e.replace(ne, q);
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
      if (D(n, i, l, s)) {
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
  var A = Symbol.for("react.element");
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
  var F = Symbol.iterator;
  function X(e) {
    if (e === null || typeof e != "object") {
      return null;
    } else {
      e = F && e[F] || e["@@iterator"];
      if (typeof e == "function") {
        return e;
      } else {
        return null;
      }
    }
  }
  var U = Object.assign;
  var S;
  function P(e) {
    if (S === undefined) {
      try {
        throw Error();
      } catch (i) {
        var n = i.stack.trim().match(/\n( *(at )?)/);
        S = n && n[1] || "";
      }
    }
    return `
${S}${e}`;
  }
  var J = false;
  function te(e, n) {
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
`), c = s.stack.split(`
`), p = l.length - 1, g = c.length - 1; p >= 1 && g >= 0 && l[p] !== c[g];) {
          g--;
        }
        for (; p >= 1 && g >= 0; p--, g--) {
          if (l[p] !== c[g]) {
            if (p !== 1 || g !== 1) {
              do {
                p--;
                g--;
                if (g < 0 || l[p] !== c[g]) {
                  var _ = `
${l[p].replace(" at new ", " at ")}`;
                  if (e.displayName && _.includes("<anonymous>")) {
                    _ = _.replace("<anonymous>", e.displayName);
                  }
                  return _;
                }
              } while (p >= 1 && g >= 0);
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
        e = te(e.type, false);
        return e;
      case 11:
        e = te(e.type.render, false);
        return e;
      case 1:
        e = te(e.type, true);
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
      var c = i.set;
      Object.defineProperty(e, n, {
        configurable: true,
        get: function () {
          return l.call(this);
        },
        set: function (p) {
          s = "" + p;
          c.call(this, p);
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
  function pl(e) {
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
  function hl(e, n) {
    var i = n.defaultValue == null ? "" : n.defaultValue;
    var s = n.checked ?? n.defaultChecked;
    i = de(n.value ?? i);
    e._wrapperState = {
      initialChecked: s,
      initialValue: i,
      controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null
    };
  }
  function ml(e, n) {
    n = n.checked;
    if (n != null) {
      Q(e, "checked", n, false);
    }
  }
  function ls(e, n) {
    ml(e, n);
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
  function gl(e, n, i) {
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
  function yl(e, n) {
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
  function vl(e, n) {
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
  function _l(e) {
    var n = e.textContent;
    if (n === e._wrapperState.initialValue && n !== "" && n !== null) {
      e.value = n;
    }
  }
  function El(e) {
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
      return El(n);
    } else if (e === "http://www.w3.org/2000/svg" && n === "foreignObject") {
      return "http://www.w3.org/1999/xhtml";
    } else {
      return e;
    }
  }
  var Pi;
  var Sl = function (e) {
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
  var sm = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Or).forEach(function (e) {
    sm.forEach(function (n) {
      n = n + e.charAt(0).toUpperCase() + e.substring(1);
      Or[n] = Or[e];
    });
  });
  function wl(e, n, i) {
    if (n == null || typeof n == "boolean" || n === "") {
      return "";
    } else if (i || typeof n != "number" || n === 0 || Or.hasOwnProperty(e) && Or[e]) {
      return ("" + n).trim();
    } else {
      return n + "px";
    }
  }
  function Tl(e, n) {
    e = e.style;
    for (var i in n) {
      if (n.hasOwnProperty(i)) {
        var s = i.indexOf("--") === 0;
        var l = wl(i, n[i], s);
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
  var am = U({
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
      if (am[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) {
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
  function xl(e) {
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
  function Il(e) {
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
  function Nl() {
    if (Kn) {
      var e = Kn;
      var n = qn;
      qn = Kn = null;
      xl(e);
      if (n) {
        for (e = 0; e < n.length; e++) {
          xl(n[e]);
        }
      }
    }
  }
  function kl(e, n) {
    return e(n);
  }
  function Cl() {}
  var vs = false;
  function Pl(e, n, i) {
    if (vs) {
      return e(n, i);
    }
    vs = true;
    try {
      return kl(e, n, i);
    } finally {
      vs = false;
      if (Kn !== null || qn !== null) {
        Cl();
        Nl();
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
  function um(e, n, i, s, l, c, p, g, _) {
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
  var lm = {
    onError: function (e) {
      Mr = true;
      Ri = e;
    }
  };
  function cm(e, n, i, s, l, c, p, g, _) {
    Mr = false;
    Ri = null;
    um.apply(lm, arguments);
  }
  function fm(e, n, i, s, l, c, p, g, _) {
    cm.apply(this, arguments);
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
  function Rl(e) {
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
  function Ll(e) {
    if (kn(e) !== e) {
      throw Error(o(188));
    }
  }
  function dm(e) {
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
      var c = l.alternate;
      if (c === null) {
        s = l.return;
        if (s !== null) {
          i = s;
          continue;
        }
        break;
      }
      if (l.child === c.child) {
        for (c = l.child; c;) {
          if (c === i) {
            Ll(l);
            return e;
          }
          if (c === s) {
            Ll(l);
            return n;
          }
          c = c.sibling;
        }
        throw Error(o(188));
      }
      if (i.return !== s.return) {
        i = l;
        s = c;
      } else {
        var p = false;
        for (var g = l.child; g;) {
          if (g === i) {
            p = true;
            i = l;
            s = c;
            break;
          }
          if (g === s) {
            p = true;
            s = l;
            i = c;
            break;
          }
          g = g.sibling;
        }
        if (!p) {
          for (g = c.child; g;) {
            if (g === i) {
              p = true;
              i = c;
              s = l;
              break;
            }
            if (g === s) {
              p = true;
              s = c;
              i = l;
              break;
            }
            g = g.sibling;
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
  function Ol(e) {
    e = dm(e);
    if (e !== null) {
      return Al(e);
    } else {
      return null;
    }
  }
  function Al(e) {
    if (e.tag === 5 || e.tag === 6) {
      return e;
    }
    for (e = e.child; e !== null;) {
      var n = Al(e);
      if (n !== null) {
        return n;
      }
      e = e.sibling;
    }
    return null;
  }
  var Dl = r.unstable_scheduleCallback;
  var Ml = r.unstable_cancelCallback;
  var pm = r.unstable_shouldYield;
  var hm = r.unstable_requestPaint;
  var Ne = r.unstable_now;
  var mm = r.unstable_getCurrentPriorityLevel;
  var Ss = r.unstable_ImmediatePriority;
  var Fl = r.unstable_UserBlockingPriority;
  var Oi = r.unstable_NormalPriority;
  var gm = r.unstable_LowPriority;
  var bl = r.unstable_IdlePriority;
  var Ai = null;
  var Pt = null;
  function ym(e) {
    if (Pt && typeof Pt.onCommitFiberRoot == "function") {
      try {
        Pt.onCommitFiberRoot(Ai, e, undefined, (e.current.flags & 128) === 128);
      } catch {}
    }
  }
  var _t = Math.clz32 ? Math.clz32 : Em;
  var vm = Math.log;
  var _m = Math.LN2;
  function Em(e) {
    e >>>= 0;
    if (e === 0) {
      return 32;
    } else {
      return 31 - (vm(e) / _m | 0) | 0;
    }
  }
  var Di = 64;
  var Mi = 4194304;
  function Fr(e) {
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
  function Fi(e, n) {
    var i = e.pendingLanes;
    if (i === 0) {
      return 0;
    }
    var s = 0;
    var l = e.suspendedLanes;
    var c = e.pingedLanes;
    var p = i & 268435455;
    if (p !== 0) {
      var g = p & ~l;
      if (g !== 0) {
        s = Fr(g);
      } else {
        c &= p;
        if (c !== 0) {
          s = Fr(c);
        }
      }
    } else {
      p = i & ~l;
      if (p !== 0) {
        s = Fr(p);
      } else if (c !== 0) {
        s = Fr(c);
      }
    }
    if (s === 0) {
      return 0;
    }
    if (n !== 0 && n !== s && (n & l) === 0 && (l = s & -s, c = n & -n, l >= c || l === 16 && (c & 4194240) !== 0)) {
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
  function Sm(e, n) {
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
  function wm(e, n) {
    var i = e.suspendedLanes;
    var s = e.pingedLanes;
    var l = e.expirationTimes;
    for (var c = e.pendingLanes; c > 0;) {
      var p = 31 - _t(c);
      var g = 1 << p;
      var _ = l[p];
      if (_ === -1) {
        if ((g & i) === 0 || (g & s) !== 0) {
          l[p] = Sm(g, n);
        }
      } else if (_ <= n) {
        e.expiredLanes |= g;
      }
      c &= ~g;
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
  function Hl() {
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
  function br(e, n, i) {
    e.pendingLanes |= n;
    if (n !== 536870912) {
      e.suspendedLanes = 0;
      e.pingedLanes = 0;
    }
    e = e.eventTimes;
    n = 31 - _t(n);
    e[n] = i;
  }
  function Tm(e, n) {
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
      var c = 1 << l;
      n[l] = 0;
      s[l] = -1;
      e[l] = -1;
      i &= ~c;
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
  function Bl(e) {
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
  var Ul;
  var Is;
  var jl;
  var zl;
  var $l;
  var Ns = false;
  var bi = [];
  var tn = null;
  var nn = null;
  var rn = null;
  var Hr = new Map();
  var Br = new Map();
  var on = [];
  var xm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Gl(e, n) {
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
  function Ur(e, n, i, s, l, c) {
    if (e === null || e.nativeEvent !== c) {
      e = {
        blockedOn: n,
        domEventName: i,
        eventSystemFlags: s,
        nativeEvent: c,
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
  function Im(e, n, i, s, l) {
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
        var c = l.pointerId;
        Hr.set(c, Ur(Hr.get(c) || null, e, n, i, s, l));
        return true;
      case "gotpointercapture":
        c = l.pointerId;
        Br.set(c, Ur(Br.get(c) || null, e, n, i, s, l));
        return true;
    }
    return false;
  }
  function Vl(e) {
    var n = Cn(e.target);
    if (n !== null) {
      var i = kn(n);
      if (i !== null) {
        n = i.tag;
        if (n === 13) {
          n = Rl(i);
          if (n !== null) {
            e.blockedOn = n;
            $l(e.priority, function () {
              jl(i);
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
  function Wl(e, n, i) {
    if (Hi(e)) {
      i.delete(n);
    }
  }
  function Nm() {
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
    Hr.forEach(Wl);
    Br.forEach(Wl);
  }
  function jr(e, n) {
    if (e.blockedOn === n) {
      e.blockedOn = null;
      if (!Ns) {
        Ns = true;
        r.unstable_scheduleCallback(r.unstable_NormalPriority, Nm);
      }
    }
  }
  function zr(e) {
    function n(l) {
      return jr(l, e);
    }
    if (bi.length > 0) {
      jr(bi[0], e);
      for (var i = 1; i < bi.length; i++) {
        var s = bi[i];
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
      Vl(i);
      if (i.blockedOn === null) {
        on.shift();
      }
    }
  }
  var Zn = ie.ReactCurrentBatchConfig;
  var Bi = true;
  function km(e, n, i, s) {
    var l = pe;
    var c = Zn.transition;
    Zn.transition = null;
    try {
      pe = 1;
      ks(e, n, i, s);
    } finally {
      pe = l;
      Zn.transition = c;
    }
  }
  function Cm(e, n, i, s) {
    var l = pe;
    var c = Zn.transition;
    Zn.transition = null;
    try {
      pe = 4;
      ks(e, n, i, s);
    } finally {
      pe = l;
      Zn.transition = c;
    }
  }
  function ks(e, n, i, s) {
    if (Bi) {
      var l = Cs(e, n, i, s);
      if (l === null) {
        Vs(e, n, s, Ui, i);
        Gl(e, s);
      } else if (Im(l, e, n, i, s)) {
        s.stopPropagation();
      } else {
        Gl(e, s);
        if (n & 4 && xm.indexOf(e) > -1) {
          while (l !== null) {
            var c = ei(l);
            if (c !== null) {
              Ul(c);
            }
            c = Cs(e, n, i, s);
            if (c === null) {
              Vs(e, n, s, Ui, i);
            }
            if (c === l) {
              break;
            }
            l = c;
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
          e = Rl(n);
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
  function Xl(e) {
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
        switch (mm()) {
          case Ss:
            return 1;
          case Fl:
            return 4;
          case Oi:
          case gm:
            return 16;
          case bl:
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
  function Yl() {
    if (ji) {
      return ji;
    }
    var e;
    var n = Ps;
    var i = n.length;
    var s;
    var l = "value" in sn ? sn.value : sn.textContent;
    var c = l.length;
    for (e = 0; e < i && n[e] === l[e]; e++);
    var p = i - e;
    for (s = 1; s <= p && n[i - s] === l[c - s]; s++);
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
  function Ql() {
    return false;
  }
  function it(e) {
    function n(i, s, l, c, p) {
      this._reactName = i;
      this._targetInst = l;
      this.type = s;
      this.nativeEvent = c;
      this.target = p;
      this.currentTarget = null;
      for (var g in e) {
        if (e.hasOwnProperty(g)) {
          i = e[g];
          this[g] = i ? i(c) : c[g];
        }
      }
      this.isDefaultPrevented = c.defaultPrevented ?? c.returnValue === false ? $i : Ql;
      this.isPropagationStopped = Ql;
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
  var Pm = it($r);
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
  var Kl = it(Gi);
  var Rm = U({}, Gi, {
    dataTransfer: 0
  });
  var Lm = it(Rm);
  var Om = U({}, $r, {
    relatedTarget: 0
  });
  var As = it(Om);
  var Am = U({}, Jn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  });
  var Dm = it(Am);
  var Mm = U({}, Jn, {
    clipboardData: function (e) {
      if ("clipboardData" in e) {
        return e.clipboardData;
      } else {
        return window.clipboardData;
      }
    }
  });
  var Fm = it(Mm);
  var bm = U({}, Jn, {
    data: 0
  });
  var ql = it(bm);
  var Hm = {
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
  var Bm = {
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
  var Um = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function jm(e) {
    var n = this.nativeEvent;
    if (n.getModifierState) {
      return n.getModifierState(e);
    } else if (e = Um[e]) {
      return !!n[e];
    } else {
      return false;
    }
  }
  function Ds() {
    return jm;
  }
  var zm = U({}, $r, {
    key: function (e) {
      if (e.key) {
        var n = Hm[e.key] || e.key;
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
        return Bm[e.keyCode] || "Unidentified";
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
  var $m = it(zm);
  var Gm = U({}, Gi, {
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
  var Zl = it(Gm);
  var Vm = U({}, $r, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ds
  });
  var Wm = it(Vm);
  var Xm = U({}, Jn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  });
  var Ym = it(Xm);
  var Qm = U({}, Gi, {
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
  var Km = it(Qm);
  var qm = [9, 13, 27, 32];
  var Ms = h && "CompositionEvent" in window;
  var Vr = null;
  if (h && "documentMode" in document) {
    Vr = document.documentMode;
  }
  var Zm = h && "TextEvent" in window && !Vr;
  var Jl = h && (!Ms || Vr && Vr > 8 && Vr <= 11);
  var ec = " ";
  var tc = false;
  function nc(e, n) {
    switch (e) {
      case "keyup":
        return qm.indexOf(n.keyCode) !== -1;
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
  function rc(e) {
    e = e.detail;
    if (typeof e == "object" && "data" in e) {
      return e.data;
    } else {
      return null;
    }
  }
  var er = false;
  function Jm(e, n) {
    switch (e) {
      case "compositionend":
        return rc(n);
      case "keypress":
        if (n.which !== 32) {
          return null;
        } else {
          tc = true;
          return ec;
        }
      case "textInput":
        e = n.data;
        if (e === ec && tc) {
          return null;
        } else {
          return e;
        }
      default:
        return null;
    }
  }
  function eg(e, n) {
    if (er) {
      if (e === "compositionend" || !Ms && nc(e, n)) {
        e = Yl();
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
        if (Jl && n.locale !== "ko") {
          return null;
        } else {
          return n.data;
        }
      default:
        return null;
    }
  }
  var tg = {
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
  function ic(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    if (n === "input") {
      return !!tg[e.type];
    } else {
      return n === "textarea";
    }
  }
  function oc(e, n, i, s) {
    Il(s);
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
  function ng(e) {
    Tc(e, 0);
  }
  function Vi(e) {
    var n = or(e);
    if (pl(n)) {
      return e;
    }
  }
  function rg(e, n) {
    if (e === "change") {
      return n;
    }
  }
  var sc = false;
  if (h) {
    var Fs;
    if (h) {
      var bs = "oninput" in document;
      if (!bs) {
        var ac = document.createElement("div");
        ac.setAttribute("oninput", "return;");
        bs = typeof ac.oninput == "function";
      }
      Fs = bs;
    } else {
      Fs = false;
    }
    sc = Fs && (!document.documentMode || document.documentMode > 9);
  }
  function uc() {
    if (Wr) {
      Wr.detachEvent("onpropertychange", lc);
      Xr = Wr = null;
    }
  }
  function lc(e) {
    if (e.propertyName === "value" && Vi(Xr)) {
      var n = [];
      oc(n, Xr, e, gs(e));
      Pl(ng, n);
    }
  }
  function ig(e, n, i) {
    if (e === "focusin") {
      uc();
      Wr = n;
      Xr = i;
      Wr.attachEvent("onpropertychange", lc);
    } else if (e === "focusout") {
      uc();
    }
  }
  function og(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") {
      return Vi(Xr);
    }
  }
  function sg(e, n) {
    if (e === "click") {
      return Vi(n);
    }
  }
  function ag(e, n) {
    if (e === "input" || e === "change") {
      return Vi(n);
    }
  }
  function ug(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var Et = typeof Object.is == "function" ? Object.is : ug;
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
  function cc(e) {
    while (e && e.firstChild) {
      e = e.firstChild;
    }
    return e;
  }
  function fc(e, n) {
    var i = cc(e);
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
      i = cc(i);
    }
  }
  function dc(e, n) {
    if (e && n) {
      if (e === n) {
        return true;
      } else if (e && e.nodeType === 3) {
        return false;
      } else if (n && n.nodeType === 3) {
        return dc(e, n.parentNode);
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
  function pc() {
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
  function lg(e) {
    var n = pc();
    var i = e.focusedElem;
    var s = e.selectionRange;
    if (n !== i && i && i.ownerDocument && dc(i.ownerDocument.documentElement, i)) {
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
            var c = Math.min(s.start, l);
            s = s.end === undefined ? c : Math.min(s.end, l);
            if (!e.extend && c > s) {
              l = s;
              s = c;
              c = l;
            }
            l = fc(i, c);
            var p = fc(i, s);
            if (l && p && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== p.node || e.focusOffset !== p.offset)) {
              n = n.createRange();
              n.setStart(l.node, l.offset);
              e.removeAllRanges();
              if (c > s) {
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
  var cg = h && "documentMode" in document && document.documentMode <= 11;
  var tr = null;
  var Bs = null;
  var Qr = null;
  var Us = false;
  function hc(e, n, i) {
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
  var mc = {};
  if (h) {
    mc = document.createElement("div").style;
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
      if (n.hasOwnProperty(i) && i in mc) {
        return js[e] = n[i];
      }
    }
    return e;
  }
  var gc = Xi("animationend");
  var yc = Xi("animationiteration");
  var vc = Xi("animationstart");
  var _c = Xi("transitionend");
  var Ec = new Map();
  var Sc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function an(e, n) {
    Ec.set(e, n);
    f(n, [e]);
  }
  for (var zs = 0; zs < Sc.length; zs++) {
    var $s = Sc[zs];
    var fg = $s.toLowerCase();
    var dg = $s[0].toUpperCase() + $s.slice(1);
    an(fg, "on" + dg);
  }
  an(gc, "onAnimationEnd");
  an(yc, "onAnimationIteration");
  an(vc, "onAnimationStart");
  an("dblclick", "onDoubleClick");
  an("focusin", "onFocus");
  an("focusout", "onBlur");
  an(_c, "onTransitionEnd");
  d("onMouseEnter", ["mouseout", "mouseover"]);
  d("onMouseLeave", ["mouseout", "mouseover"]);
  d("onPointerEnter", ["pointerout", "pointerover"]);
  d("onPointerLeave", ["pointerout", "pointerover"]);
  f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Kr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
  var pg = new Set("cancel close invalid load scroll toggle".split(" ").concat(Kr));
  function wc(e, n, i) {
    var s = e.type || "unknown-event";
    e.currentTarget = i;
    fm(s, n, undefined, e);
    e.currentTarget = null;
  }
  function Tc(e, n) {
    n = (n & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var s = e[i];
      var l = s.event;
      s = s.listeners;
      e: {
        var c = undefined;
        if (n) {
          for (var p = s.length - 1; p >= 0; p--) {
            var g = s[p];
            var _ = g.instance;
            var I = g.currentTarget;
            g = g.listener;
            if (_ !== c && l.isPropagationStopped()) {
              break e;
            }
            wc(l, g, I);
            c = _;
          }
        } else {
          for (p = 0; p < s.length; p++) {
            g = s[p];
            _ = g.instance;
            I = g.currentTarget;
            g = g.listener;
            if (_ !== c && l.isPropagationStopped()) {
              break e;
            }
            wc(l, g, I);
            c = _;
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
      xc(n, e, 2, false);
      i.add(s);
    }
  }
  function Gs(e, n, i) {
    var s = 0;
    if (n) {
      s |= 4;
    }
    xc(i, e, s, n);
  }
  var Yi = "_reactListening" + Math.random().toString(36).slice(2);
  function qr(e) {
    if (!e[Yi]) {
      e[Yi] = true;
      a.forEach(function (i) {
        if (i !== "selectionchange") {
          if (!pg.has(i)) {
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
  function xc(e, n, i, s) {
    switch (Xl(n)) {
      case 1:
        var l = km;
        break;
      case 4:
        l = Cm;
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
    var c = s;
    if ((n & 1) === 0 && (n & 2) === 0 && s !== null) {
      e: while (true) {
        if (s === null) {
          return;
        }
        var p = s.tag;
        if (p === 3 || p === 4) {
          var g = s.stateNode.containerInfo;
          if (g === l || g.nodeType === 8 && g.parentNode === l) {
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
          while (g !== null) {
            p = Cn(g);
            if (p === null) {
              return;
            }
            _ = p.tag;
            if (_ === 5 || _ === 6) {
              s = c = p;
              continue e;
            }
            g = g.parentNode;
          }
        }
        s = s.return;
      }
    }
    Pl(function () {
      var I = c;
      var R = gs(i);
      var L = [];
      e: {
        var C = Ec.get(e);
        if (C !== undefined) {
          var b = Rs;
          var j = e;
          switch (e) {
            case "keypress":
              if (zi(i) === 0) {
                break e;
              }
            case "keydown":
            case "keyup":
              b = $m;
              break;
            case "focusin":
              j = "focus";
              b = As;
              break;
            case "focusout":
              j = "blur";
              b = As;
              break;
            case "beforeblur":
            case "afterblur":
              b = As;
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
              b = Kl;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              b = Lm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              b = Wm;
              break;
            case gc:
            case yc:
            case vc:
              b = Dm;
              break;
            case _c:
              b = Ym;
              break;
            case "scroll":
              b = Pm;
              break;
            case "wheel":
              b = Km;
              break;
            case "copy":
            case "cut":
            case "paste":
              b = Fm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              b = Zl;
          }
          var z = (n & 4) !== 0;
          var ke = !z && e === "scroll";
          var w = z ? C !== null ? C + "Capture" : null : C;
          z = [];
          for (var E = I, x; E !== null;) {
            x = E;
            var O = x.stateNode;
            if (x.tag === 5 && O !== null) {
              x = O;
              if (w !== null) {
                O = Ar(E, w);
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
            C = new b(C, j, null, i, R);
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
          b = e === "mouseout" || e === "pointerout";
          if (C && i !== ms && (j = i.relatedTarget || i.fromElement) && (Cn(j) || j[zt])) {
            break e;
          }
          if ((b || C) && (C = R.window === R ? R : (C = R.ownerDocument) ? C.defaultView || C.parentWindow : window, b ? (j = i.relatedTarget || i.toElement, b = I, j = j ? Cn(j) : null, j !== null && (ke = kn(j), j !== ke || j.tag !== 5 && j.tag !== 6) && (j = null)) : (b = null, j = I), b !== j)) {
            z = Kl;
            O = "onMouseLeave";
            w = "onMouseEnter";
            E = "mouse";
            if (e === "pointerout" || e === "pointerover") {
              z = Zl;
              O = "onPointerLeave";
              w = "onPointerEnter";
              E = "pointer";
            }
            ke = b == null ? C : or(b);
            x = j == null ? C : or(j);
            C = new z(O, E + "leave", b, i, R);
            C.target = ke;
            C.relatedTarget = x;
            O = null;
            if (Cn(R) === I) {
              z = new z(w, E + "enter", j, i, R);
              z.target = x;
              z.relatedTarget = ke;
              O = z;
            }
            ke = O;
            if (b && j) {
              t: {
                z = b;
                w = j;
                E = 0;
                x = z;
                for (; x; x = rr(x)) {
                  E++;
                }
                x = 0;
                O = w;
                for (; O; O = rr(O)) {
                  x++;
                }
                while (E - x > 0) {
                  z = rr(z);
                  E--;
                }
                while (x - E > 0) {
                  w = rr(w);
                  x--;
                }
                while (E--) {
                  if (z === w || w !== null && z === w.alternate) {
                    break t;
                  }
                  z = rr(z);
                  w = rr(w);
                }
                z = null;
              }
            } else {
              z = null;
            }
            if (b !== null) {
              Ic(L, C, b, z, false);
            }
            if (j !== null && ke !== null) {
              Ic(L, ke, j, z, true);
            }
          }
        }
        e: {
          C = I ? or(I) : window;
          b = C.nodeName && C.nodeName.toLowerCase();
          if (b === "select" || b === "input" && C.type === "file") {
            var G = rg;
          } else if (ic(C)) {
            if (sc) {
              G = ag;
            } else {
              G = og;
              var V = ig;
            }
          } else if ((b = C.nodeName) && b.toLowerCase() === "input" && (C.type === "checkbox" || C.type === "radio")) {
            G = sg;
          }
          if (G &&= G(e, I)) {
            oc(L, G, i, R);
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
            if (ic(V) || V.contentEditable === "true") {
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
            hc(L, i, R);
            break;
          case "selectionchange":
            if (cg) {
              break;
            }
          case "keydown":
          case "keyup":
            hc(L, i, R);
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
          if (nc(e, i)) {
            K = "onCompositionEnd";
          }
        } else if (e === "keydown" && i.keyCode === 229) {
          K = "onCompositionStart";
        }
        if (K) {
          if (Jl && i.locale !== "ko") {
            if (er || K !== "onCompositionStart") {
              if (K === "onCompositionEnd" && er) {
                W = Yl();
              }
            } else {
              sn = R;
              Ps = "value" in sn ? sn.value : sn.textContent;
              er = true;
            }
          }
          V = Qi(I, K);
          if (V.length > 0) {
            K = new ql(K, e, null, i, R);
            L.push({
              event: K,
              listeners: V
            });
            if (W) {
              K.data = W;
            } else {
              W = rc(i);
              if (W !== null) {
                K.data = W;
              }
            }
          }
        }
        if (W = Zm ? Jm(e, i) : eg(e, i)) {
          I = Qi(I, "onBeforeInput");
          if (I.length > 0) {
            R = new ql("onBeforeInput", "beforeinput", null, i, R);
            L.push({
              event: R,
              listeners: I
            });
            R.data = W;
          }
        }
      }
      Tc(L, n);
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
      var c = l.stateNode;
      if (l.tag === 5 && c !== null) {
        l = c;
        c = Ar(e, i);
        if (c != null) {
          s.unshift(Zr(e, c, l));
        }
        c = Ar(e, n);
        if (c != null) {
          s.push(Zr(e, c, l));
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
  function Ic(e, n, i, s, l) {
    var c = n._reactName;
    var p = [];
    for (; i !== null && i !== s;) {
      var g = i;
      var _ = g.alternate;
      var I = g.stateNode;
      if (_ !== null && _ === s) {
        break;
      }
      if (g.tag === 5 && I !== null) {
        g = I;
        if (l) {
          _ = Ar(i, c);
          if (_ != null) {
            p.unshift(Zr(i, _, g));
          }
        } else if (!l) {
          _ = Ar(i, c);
          if (_ != null) {
            p.push(Zr(i, _, g));
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
  var hg = /\r\n?/g;
  var mg = /\u0000|\uFFFD/g;
  function Nc(e) {
    return (typeof e == "string" ? e : "" + e).replace(hg, `
`).replace(mg, "");
  }
  function Ki(e, n, i) {
    n = Nc(n);
    if (Nc(e) !== n && i) {
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
  var gg = typeof clearTimeout == "function" ? clearTimeout : undefined;
  var kc = typeof Promise == "function" ? Promise : undefined;
  var yg = typeof queueMicrotask == "function" ? queueMicrotask : typeof kc !== "undefined" ? function (e) {
    return kc.resolve(null).then(e).catch(vg);
  } : Qs;
  function vg(e) {
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
  function Cc(e) {
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
  var _g = "__reactListeners$" + ir;
  var Eg = "__reactHandles$" + ir;
  function Cn(e) {
    var n = e[Rt];
    if (n) {
      return n;
    }
    for (var i = e.parentNode; i;) {
      if (n = i[zt] || i[Rt]) {
        i = n.alternate;
        if (n.child !== null || i !== null && i.child !== null) {
          for (e = Cc(e); e !== null;) {
            if (i = e[Rt]) {
              return i;
            }
            e = Cc(e);
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
    var c;
    for (c in i) {
      l[c] = n[c];
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
  function Pc(e, n, i) {
    if (He.current !== cn) {
      throw Error(o(168));
    }
    ge(He, n);
    ge(Qe, i);
  }
  function Rc(e, n, i) {
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
  function Lc(e, n, i) {
    var s = e.stateNode;
    if (!s) {
      throw Error(o(169));
    }
    if (i) {
      e = Rc(e, n, Pn);
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
  function Oc(e) {
    if ($t === null) {
      $t = [e];
    } else {
      $t.push(e);
    }
  }
  function Sg(e) {
    to = true;
    Oc(e);
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
        Dl(Ss, fn);
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
  function Ac(e, n, i) {
    ct[ft++] = Gt;
    ct[ft++] = Vt;
    ct[ft++] = Rn;
    Rn = e;
    var s = Gt;
    e = Vt;
    var l = 32 - _t(s) - 1;
    s &= ~(1 << l);
    i += 1;
    var c = 32 - _t(n) + l;
    if (c > 30) {
      var p = l - l % 5;
      c = (s & (1 << p) - 1).toString(32);
      s >>= p;
      l -= p;
      Gt = 1 << 32 - _t(n) + l | i << l | s;
      Vt = c + e;
    } else {
      Gt = 1 << c | i << l | s;
      Vt = e;
    }
  }
  function ea(e) {
    if (e.return !== null) {
      Ln(e, 1);
      Ac(e, 1, 0);
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
  function Dc(e, n) {
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
  function Mc(e, n) {
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
        if (!Mc(e, n)) {
          if (na(e)) {
            throw Error(o(418));
          }
          n = un(i.nextSibling);
          var s = ot;
          if (n && Mc(e, n)) {
            Dc(s, i);
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
        bc();
        throw Error(o(418));
      }
      while (n) {
        Dc(e, n);
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
  function bc() {
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
  var wg = ie.ReactCurrentBatchConfig;
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
        var c = "" + e;
        if (n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === c) {
          return n.ref;
        } else {
          n = function (p) {
            var g = l.refs;
            if (p === null) {
              delete g[c];
            } else {
              g[c] = p;
            }
          };
          n._stringRef = c;
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
  function Hc(e) {
    var n = e._init;
    return n(e._payload);
  }
  function Bc(e) {
    function n(w, E) {
      if (e) {
        var x = w.deletions;
        if (x === null) {
          w.deletions = [E];
          w.flags |= 16;
        } else {
          x.push(E);
        }
      }
    }
    function i(w, E) {
      if (!e) {
        return null;
      }
      while (E !== null) {
        n(w, E);
        E = E.sibling;
      }
      return null;
    }
    function s(w, E) {
      for (w = new Map(); E !== null;) {
        if (E.key !== null) {
          w.set(E.key, E);
        } else {
          w.set(E.index, E);
        }
        E = E.sibling;
      }
      return w;
    }
    function l(w, E) {
      w = _n(w, E);
      w.index = 0;
      w.sibling = null;
      return w;
    }
    function c(w, E, x) {
      w.index = x;
      if (e) {
        x = w.alternate;
        if (x !== null) {
          x = x.index;
          if (x < E) {
            w.flags |= 2;
            return E;
          } else {
            return x;
          }
        } else {
          w.flags |= 2;
          return E;
        }
      } else {
        w.flags |= 1048576;
        return E;
      }
    }
    function p(w) {
      if (e && w.alternate === null) {
        w.flags |= 2;
      }
      return w;
    }
    function g(w, E, x, O) {
      if (E === null || E.tag !== 6) {
        E = Qa(x, w.mode, O);
        E.return = w;
        return E;
      } else {
        E = l(E, x);
        E.return = w;
        return E;
      }
    }
    function _(w, E, x, O) {
      var G = x.type;
      if (G === Re) {
        return R(w, E, x.props.children, O, x.key);
      } else if (E !== null && (E.elementType === G || typeof G == "object" && G !== null && G.$$typeof === Ye && Hc(G) === E.type)) {
        O = l(E, x.props);
        O.ref = ti(w, E, x);
        O.return = w;
        return O;
      } else {
        O = Ro(x.type, x.key, x.props, null, w.mode, O);
        O.ref = ti(w, E, x);
        O.return = w;
        return O;
      }
    }
    function I(w, E, x, O) {
      if (E === null || E.tag !== 4 || E.stateNode.containerInfo !== x.containerInfo || E.stateNode.implementation !== x.implementation) {
        E = Ka(x, w.mode, O);
        E.return = w;
        return E;
      } else {
        E = l(E, x.children || []);
        E.return = w;
        return E;
      }
    }
    function R(w, E, x, O, G) {
      if (E === null || E.tag !== 7) {
        E = Bn(x, w.mode, O, G);
        E.return = w;
        return E;
      } else {
        E = l(E, x);
        E.return = w;
        return E;
      }
    }
    function L(w, E, x) {
      if (typeof E == "string" && E !== "" || typeof E == "number") {
        E = Qa("" + E, w.mode, x);
        E.return = w;
        return E;
      }
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case A:
            x = Ro(E.type, E.key, E.props, null, w.mode, x);
            x.ref = ti(w, null, E);
            x.return = w;
            return x;
          case ce:
            E = Ka(E, w.mode, x);
            E.return = w;
            return E;
          case Ye:
            var O = E._init;
            return L(w, O(E._payload), x);
        }
        if (Rr(E) || X(E)) {
          E = Bn(E, w.mode, x, null);
          E.return = w;
          return E;
        }
        oo(w, E);
      }
      return null;
    }
    function C(w, E, x, O) {
      var G = E !== null ? E.key : null;
      if (typeof x == "string" && x !== "" || typeof x == "number") {
        if (G !== null) {
          return null;
        } else {
          return g(w, E, "" + x, O);
        }
      }
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case A:
            if (x.key === G) {
              return _(w, E, x, O);
            } else {
              return null;
            }
          case ce:
            if (x.key === G) {
              return I(w, E, x, O);
            } else {
              return null;
            }
          case Ye:
            G = x._init;
            return C(w, E, G(x._payload), O);
        }
        if (Rr(x) || X(x)) {
          if (G !== null) {
            return null;
          } else {
            return R(w, E, x, O, null);
          }
        }
        oo(w, x);
      }
      return null;
    }
    function b(w, E, x, O, G) {
      if (typeof O == "string" && O !== "" || typeof O == "number") {
        w = w.get(x) || null;
        return g(E, w, "" + O, G);
      }
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case A:
            w = w.get(O.key === null ? x : O.key) || null;
            return _(E, w, O, G);
          case ce:
            w = w.get(O.key === null ? x : O.key) || null;
            return I(E, w, O, G);
          case Ye:
            var V = O._init;
            return b(w, E, x, V(O._payload), G);
        }
        if (Rr(O) || X(O)) {
          w = w.get(x) || null;
          return R(E, w, O, G, null);
        }
        oo(E, O);
      }
      return null;
    }
    function j(w, E, x, O) {
      var G = null;
      var V = null;
      for (var W = E, K = E = 0, Me = null; W !== null && K < x.length; K++) {
        if (W.index > K) {
          Me = W;
          W = null;
        } else {
          Me = W.sibling;
        }
        var le = C(w, W, x[K], O);
        if (le === null) {
          if (W === null) {
            W = Me;
          }
          break;
        }
        if (e && W && le.alternate === null) {
          n(w, W);
        }
        E = c(le, E, K);
        if (V === null) {
          G = le;
        } else {
          V.sibling = le;
        }
        V = le;
        W = Me;
      }
      if (K === x.length) {
        i(w, W);
        if (Se) {
          Ln(w, K);
        }
        return G;
      }
      if (W === null) {
        for (; K < x.length; K++) {
          W = L(w, x[K], O);
          if (W !== null) {
            E = c(W, E, K);
            if (V === null) {
              G = W;
            } else {
              V.sibling = W;
            }
            V = W;
          }
        }
        if (Se) {
          Ln(w, K);
        }
        return G;
      }
      for (W = s(w, W); K < x.length; K++) {
        Me = b(W, w, K, x[K], O);
        if (Me !== null) {
          if (e && Me.alternate !== null) {
            W.delete(Me.key === null ? K : Me.key);
          }
          E = c(Me, E, K);
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
          return n(w, En);
        });
      }
      if (Se) {
        Ln(w, K);
      }
      return G;
    }
    function z(w, E, x, O) {
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
        var En = C(w, W, le.value, O);
        if (En === null) {
          if (W === null) {
            W = Me;
          }
          break;
        }
        if (e && W && En.alternate === null) {
          n(w, W);
        }
        E = c(En, E, K);
        if (V === null) {
          G = En;
        } else {
          V.sibling = En;
        }
        V = En;
        W = Me;
      }
      if (le.done) {
        i(w, W);
        if (Se) {
          Ln(w, K);
        }
        return G;
      }
      if (W === null) {
        for (; !le.done; K++, le = x.next()) {
          le = L(w, le.value, O);
          if (le !== null) {
            E = c(le, E, K);
            if (V === null) {
              G = le;
            } else {
              V.sibling = le;
            }
            V = le;
          }
        }
        if (Se) {
          Ln(w, K);
        }
        return G;
      }
      for (W = s(w, W); !le.done; K++, le = x.next()) {
        le = b(W, w, K, le.value, O);
        if (le !== null) {
          if (e && le.alternate !== null) {
            W.delete(le.key === null ? K : le.key);
          }
          E = c(le, E, K);
          if (V === null) {
            G = le;
          } else {
            V.sibling = le;
          }
          V = le;
        }
      }
      if (e) {
        W.forEach(function (ty) {
          return n(w, ty);
        });
      }
      if (Se) {
        Ln(w, K);
      }
      return G;
    }
    function ke(w, E, x, O) {
      if (typeof x == "object" && x !== null && x.type === Re && x.key === null) {
        x = x.props.children;
      }
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case A:
            e: {
              var G = x.key;
              for (var V = E; V !== null;) {
                if (V.key === G) {
                  G = x.type;
                  if (G === Re) {
                    if (V.tag === 7) {
                      i(w, V.sibling);
                      E = l(V, x.props.children);
                      E.return = w;
                      w = E;
                      break e;
                    }
                  } else if (V.elementType === G || typeof G == "object" && G !== null && G.$$typeof === Ye && Hc(G) === V.type) {
                    i(w, V.sibling);
                    E = l(V, x.props);
                    E.ref = ti(w, V, x);
                    E.return = w;
                    w = E;
                    break e;
                  }
                  i(w, V);
                  break;
                } else {
                  n(w, V);
                }
                V = V.sibling;
              }
              if (x.type === Re) {
                E = Bn(x.props.children, w.mode, O, x.key);
                E.return = w;
                w = E;
              } else {
                O = Ro(x.type, x.key, x.props, null, w.mode, O);
                O.ref = ti(w, E, x);
                O.return = w;
                w = O;
              }
            }
            return p(w);
          case ce:
            e: {
              for (V = x.key; E !== null;) {
                if (E.key === V) {
                  if (E.tag === 4 && E.stateNode.containerInfo === x.containerInfo && E.stateNode.implementation === x.implementation) {
                    i(w, E.sibling);
                    E = l(E, x.children || []);
                    E.return = w;
                    w = E;
                    break e;
                  } else {
                    i(w, E);
                    break;
                  }
                } else {
                  n(w, E);
                }
                E = E.sibling;
              }
              E = Ka(x, w.mode, O);
              E.return = w;
              w = E;
            }
            return p(w);
          case Ye:
            V = x._init;
            return ke(w, E, V(x._payload), O);
        }
        if (Rr(x)) {
          return j(w, E, x, O);
        }
        if (X(x)) {
          return z(w, E, x, O);
        }
        oo(w, x);
      }
      if (typeof x == "string" && x !== "" || typeof x == "number") {
        x = "" + x;
        if (E !== null && E.tag === 6) {
          i(w, E.sibling);
          E = l(E, x);
          E.return = w;
          w = E;
        } else {
          i(w, E);
          E = Qa(x, w.mode, O);
          E.return = w;
          w = E;
        }
        return p(w);
      } else {
        return i(w, E);
      }
    }
    return ke;
  }
  var fr = Bc(true);
  var Uc = Bc(false);
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
  function jc(e, n, i, s) {
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
  function zc(e, n) {
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
  function $c(e, n) {
    var i = e.updateQueue;
    var s = e.alternate;
    if (s !== null && (s = s.updateQueue, i === s)) {
      var l = null;
      var c = null;
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
          if (c === null) {
            l = c = p;
          } else {
            c = c.next = p;
          }
          i = i.next;
        } while (i !== null);
        if (c === null) {
          l = c = n;
        } else {
          c = c.next = n;
        }
      } else {
        l = c = n;
      }
      i = {
        baseState: s.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: c,
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
    var c = l.firstBaseUpdate;
    var p = l.lastBaseUpdate;
    var g = l.shared.pending;
    if (g !== null) {
      l.shared.pending = null;
      var _ = g;
      var I = _.next;
      _.next = null;
      if (p === null) {
        c = I;
      } else {
        p.next = I;
      }
      p = _;
      var R = e.alternate;
      if (R !== null) {
        R = R.updateQueue;
        g = R.lastBaseUpdate;
        if (g !== p) {
          if (g === null) {
            R.firstBaseUpdate = I;
          } else {
            g.next = I;
          }
          R.lastBaseUpdate = _;
        }
      }
    }
    if (c !== null) {
      var L = l.baseState;
      p = 0;
      R = I = _ = null;
      g = c;
      do {
        var C = g.lane;
        var b = g.eventTime;
        if ((s & C) === C) {
          if (R !== null) {
            R = R.next = {
              eventTime: b,
              lane: 0,
              tag: g.tag,
              payload: g.payload,
              callback: g.callback,
              next: null
            };
          }
          e: {
            var j = e;
            var z = g;
            C = n;
            b = i;
            switch (z.tag) {
              case 1:
                j = z.payload;
                if (typeof j == "function") {
                  L = j.call(b, L, C);
                  break e;
                }
                L = j;
                break e;
              case 3:
                j.flags = j.flags & -65537 | 128;
              case 0:
                j = z.payload;
                C = typeof j == "function" ? j.call(b, L, C) : j;
                if (C == null) {
                  break e;
                }
                L = U({}, L, C);
                break e;
              case 2:
                dn = true;
            }
          }
          if (g.callback !== null && g.lane !== 0) {
            e.flags |= 64;
            C = l.effects;
            if (C === null) {
              l.effects = [g];
            } else {
              C.push(g);
            }
          }
        } else {
          b = {
            eventTime: b,
            lane: C,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null
          };
          if (R === null) {
            I = R = b;
            _ = L;
          } else {
            R = R.next = b;
          }
          p |= C;
        }
        g = g.next;
        if (g === null) {
          g = l.shared.pending;
          if (g === null) {
            break;
          }
          C = g;
          g = C.next;
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
      } else if (c === null) {
        l.shared.lanes = 0;
      }
      Mn |= p;
      e.lanes = p;
      e.memoizedState = L;
    }
  }
  function Gc(e, n, i) {
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
  function Vc(e) {
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
  var Tg = 0;
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
  function ya(e, n, i, s, l, c) {
    Dn = c;
    Te = n;
    n.memoizedState = null;
    n.updateQueue = null;
    n.lanes = 0;
    fo.current = e === null || e.memoizedState === null ? kg : Cg;
    e = i(s, l);
    if (oi) {
      c = 0;
      do {
        oi = false;
        si = 0;
        if (c >= 25) {
          throw Error(o(301));
        }
        c += 1;
        Ae = Le = null;
        n.updateQueue = null;
        fo.current = Pg;
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
    var c = i.pending;
    if (c !== null) {
      if (l !== null) {
        var p = l.next;
        l.next = c.next;
        c.next = p;
      }
      s.baseQueue = l = c;
      i.pending = null;
    }
    if (l !== null) {
      c = l.next;
      s = s.baseState;
      var g = p = null;
      var _ = null;
      var I = c;
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
            g = _ = L;
            p = s;
          } else {
            _ = _.next = L;
          }
          Te.lanes |= R;
          Mn |= R;
        }
        I = I.next;
      } while (I !== null && I !== c);
      if (_ === null) {
        p = s;
      } else {
        _.next = g;
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
        c = l.lane;
        Te.lanes |= c;
        Mn |= c;
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
    var c = n.memoizedState;
    if (l !== null) {
      i.pending = null;
      var p = l = l.next;
      do {
        c = e(c, p.action);
        p = p.next;
      } while (p !== l);
      if (!Et(c, n.memoizedState)) {
        qe = true;
      }
      n.memoizedState = c;
      if (n.baseQueue === null) {
        n.baseState = c;
      }
      i.lastRenderedState = c;
    }
    return [c, s];
  }
  function Wc() {}
  function Xc(e, n) {
    var i = Te;
    var s = pt();
    var l = n();
    var c = !Et(s.memoizedState, l);
    if (c) {
      s.memoizedState = l;
      qe = true;
    }
    s = s.queue;
    Sa(Kc.bind(null, i, s, e), [e]);
    if (s.getSnapshot !== n || c || Ae !== null && Ae.memoizedState.tag & 1) {
      i.flags |= 2048;
      ui(9, Qc.bind(null, i, s, l, n), undefined, null);
      if (De === null) {
        throw Error(o(349));
      }
      if ((Dn & 30) === 0) {
        Yc(i, n, l);
      }
    }
    return l;
  }
  function Yc(e, n, i) {
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
  function Qc(e, n, i, s) {
    n.value = i;
    n.getSnapshot = s;
    if (qc(n)) {
      Zc(e);
    }
  }
  function Kc(e, n, i) {
    return i(function () {
      if (qc(n)) {
        Zc(e);
      }
    });
  }
  function qc(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var i = n();
      return !Et(e, i);
    } catch {
      return true;
    }
  }
  function Zc(e) {
    var n = Wt(e, 1);
    if (n !== null) {
      It(n, e, 1, -1);
    }
  }
  function Jc(e) {
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
    e = e.dispatch = Ng.bind(null, Te, e);
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
  function ef() {
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
    var c = undefined;
    if (Le !== null) {
      var p = Le.memoizedState;
      c = p.destroy;
      if (s !== null && ga(s, p.deps)) {
        l.memoizedState = ui(n, i, c, s);
        return;
      }
    }
    Te.flags |= e;
    l.memoizedState = ui(n | 1, i, c, s);
  }
  function tf(e, n) {
    return ho(8390656, 8, e, n);
  }
  function Sa(e, n) {
    return mo(2048, 8, e, n);
  }
  function nf(e, n) {
    return mo(4, 2, e, n);
  }
  function rf(e, n) {
    return mo(4, 4, e, n);
  }
  function of(e, n) {
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
  function sf(e, n, i) {
    i = i != null ? i.concat([e]) : null;
    return mo(4, 4, of.bind(null, n, e), i);
  }
  function wa() {}
  function af(e, n) {
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
  function uf(e, n) {
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
  function lf(e, n, i) {
    if ((Dn & 21) === 0) {
      if (e.baseState) {
        e.baseState = false;
        qe = true;
      }
      return e.memoizedState = i;
    } else {
      if (!Et(i, n)) {
        i = Hl();
        Te.lanes |= i;
        Mn |= i;
        e.baseState = true;
      }
      return n;
    }
  }
  function xg(e, n) {
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
  function cf() {
    return pt().memoizedState;
  }
  function Ig(e, n, i) {
    var s = yn(e);
    i = {
      lane: s,
      action: i,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (ff(e)) {
      df(n, i);
    } else {
      i = jc(e, n, i, s);
      if (i !== null) {
        var l = Ge();
        It(i, e, s, l);
        pf(i, n, s);
      }
    }
  }
  function Ng(e, n, i) {
    var s = yn(e);
    var l = {
      lane: s,
      action: i,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (ff(e)) {
      df(n, l);
    } else {
      var c = e.alternate;
      if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = n.lastRenderedReducer, c !== null)) {
        try {
          var p = n.lastRenderedState;
          var g = c(p, i);
          l.hasEagerState = true;
          l.eagerState = g;
          if (Et(g, p)) {
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
      i = jc(e, n, l, s);
      if (i !== null) {
        l = Ge();
        It(i, e, s, l);
        pf(i, n, s);
      }
    }
  }
  function ff(e) {
    var n = e.alternate;
    return e === Te || n !== null && n === Te;
  }
  function df(e, n) {
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
  function pf(e, n, i) {
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
  var kg = {
    readContext: dt,
    useCallback: function (e, n) {
      Ot().memoizedState = [e, n === undefined ? null : n];
      return e;
    },
    useContext: dt,
    useEffect: tf,
    useImperativeHandle: function (e, n, i) {
      i = i != null ? i.concat([e]) : null;
      return ho(4194308, 4, of.bind(null, n, e), i);
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
      e = e.dispatch = Ig.bind(null, Te, e);
      return [s.memoizedState, e];
    },
    useRef: function (e) {
      var n = Ot();
      e = {
        current: e
      };
      return n.memoizedState = e;
    },
    useState: Jc,
    useDebugValue: wa,
    useDeferredValue: function (e) {
      return Ot().memoizedState = e;
    },
    useTransition: function () {
      var e = Jc(false);
      var n = e[0];
      e = xg.bind(null, e[1]);
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
          Yc(s, n, i);
        }
      }
      l.memoizedState = i;
      var c = {
        value: i,
        getSnapshot: n
      };
      l.queue = c;
      tf(Kc.bind(null, s, c, e), [e]);
      s.flags |= 2048;
      ui(9, Qc.bind(null, s, c, i, n), undefined, null);
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
        i = Tg++;
        n = ":" + n + "r" + i.toString(32) + ":";
      }
      return e.memoizedState = n;
    },
    unstable_isNewReconciler: false
  };
  var Cg = {
    readContext: dt,
    useCallback: af,
    useContext: dt,
    useEffect: Sa,
    useImperativeHandle: sf,
    useInsertionEffect: nf,
    useLayoutEffect: rf,
    useMemo: uf,
    useReducer: _a,
    useRef: ef,
    useState: function () {
      return _a(ai);
    },
    useDebugValue: wa,
    useDeferredValue: function (e) {
      var n = pt();
      return lf(n, Le.memoizedState, e);
    },
    useTransition: function () {
      var e = _a(ai)[0];
      var n = pt().memoizedState;
      return [e, n];
    },
    useMutableSource: Wc,
    useSyncExternalStore: Xc,
    useId: cf,
    unstable_isNewReconciler: false
  };
  var Pg = {
    readContext: dt,
    useCallback: af,
    useContext: dt,
    useEffect: Sa,
    useImperativeHandle: sf,
    useInsertionEffect: nf,
    useLayoutEffect: rf,
    useMemo: uf,
    useReducer: Ea,
    useRef: ef,
    useState: function () {
      return Ea(ai);
    },
    useDebugValue: wa,
    useDeferredValue: function (e) {
      var n = pt();
      if (Le === null) {
        return n.memoizedState = e;
      } else {
        return lf(n, Le.memoizedState, e);
      }
    },
    useTransition: function () {
      var e = Ea(ai)[0];
      var n = pt().memoizedState;
      return [e, n];
    },
    useMutableSource: Wc,
    useSyncExternalStore: Xc,
    useId: cf,
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
      var s = Ge();
      var l = yn(e);
      var c = Xt(s, l);
      c.payload = n;
      if (i != null) {
        c.callback = i;
      }
      n = pn(e, c, l);
      if (n !== null) {
        It(n, e, l, s);
        uo(n, e, l);
      }
    },
    enqueueReplaceState: function (e, n, i) {
      e = e._reactInternals;
      var s = Ge();
      var l = yn(e);
      var c = Xt(s, l);
      c.tag = 1;
      c.payload = n;
      if (i != null) {
        c.callback = i;
      }
      n = pn(e, c, l);
      if (n !== null) {
        It(n, e, l, s);
        uo(n, e, l);
      }
    },
    enqueueForceUpdate: function (e, n) {
      e = e._reactInternals;
      var i = Ge();
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
  function hf(e, n, i, s, l, c, p) {
    e = e.stateNode;
    if (typeof e.shouldComponentUpdate == "function") {
      return e.shouldComponentUpdate(s, c, p);
    } else if (n.prototype && n.prototype.isPureReactComponent) {
      return !Yr(i, s) || !Yr(l, c);
    } else {
      return true;
    }
  }
  function mf(e, n, i) {
    var s = false;
    var l = cn;
    var c = n.contextType;
    if (typeof c == "object" && c !== null) {
      c = dt(c);
    } else {
      l = Ke(n) ? Pn : He.current;
      s = n.contextTypes;
      c = (s = s != null) ? ar(e, l) : cn;
    }
    n = new n(i, c);
    e.memoizedState = n.state ?? null;
    n.updater = yo;
    e.stateNode = n;
    n._reactInternals = e;
    if (s) {
      e = e.stateNode;
      e.__reactInternalMemoizedUnmaskedChildContext = l;
      e.__reactInternalMemoizedMaskedChildContext = c;
    }
    return n;
  }
  function gf(e, n, i, s) {
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
    var c = n.contextType;
    if (typeof c == "object" && c !== null) {
      l.context = dt(c);
    } else {
      c = Ke(n) ? Pn : He.current;
      l.context = ar(e, c);
    }
    l.state = e.memoizedState;
    c = n.getDerivedStateFromProps;
    if (typeof c == "function") {
      Ta(e, n, c, i);
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
    } catch (c) {
      l = `
Error generating stack: ${c.message}
${c.stack}`;
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
  var Rg = typeof WeakMap == "function" ? WeakMap : Map;
  function yf(e, n, i) {
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
  function vf(e, n, i) {
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
    var c = e.stateNode;
    if (c !== null && typeof c.componentDidCatch == "function") {
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
  function _f(e, n, i) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new Rg();
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
      e = Gg.bind(null, e, n, i);
      n.then(e, e);
    }
  }
  function Ef(e) {
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
  function Sf(e, n, i, s, l) {
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
  var Lg = ie.ReactCurrentOwner;
  var qe = false;
  function $e(e, n, i, s) {
    n.child = e === null ? Uc(n, null, i, s) : fr(n, e.child, i, s);
  }
  function wf(e, n, i, s, l) {
    i = i.render;
    var c = n.ref;
    pr(n, l);
    s = ya(e, n, i, s, c, l);
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
      $e(e, n, s, l);
      return n.child;
    }
  }
  function Tf(e, n, i, s, l) {
    if (e === null) {
      var c = i.type;
      if (typeof c == "function" && !Ya(c) && c.defaultProps === undefined && i.compare === null && i.defaultProps === undefined) {
        n.tag = 15;
        n.type = c;
        return xf(e, n, c, s, l);
      } else {
        e = Ro(i.type, null, s, n, n.mode, l);
        e.ref = n.ref;
        e.return = n;
        return n.child = e;
      }
    }
    c = e.child;
    if ((e.lanes & l) === 0) {
      var p = c.memoizedProps;
      i = i.compare;
      i = i !== null ? i : Yr;
      if (i(p, s) && e.ref === n.ref) {
        return Yt(e, n, l);
      }
    }
    n.flags |= 1;
    e = _n(c, s);
    e.ref = n.ref;
    e.return = n;
    return n.child = e;
  }
  function xf(e, n, i, s, l) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (Yr(c, s) && e.ref === n.ref) {
        qe = false;
        n.pendingProps = s = c;
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
  function If(e, n, i) {
    var s = n.pendingProps;
    var l = s.children;
    var c = e !== null ? e.memoizedState : null;
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
          e = c !== null ? c.baseLanes | i : i;
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
        s = c !== null ? c.baseLanes : i;
        ge(yr, at);
        at |= s;
      }
    } else {
      if (c !== null) {
        s = c.baseLanes | i;
        n.memoizedState = null;
      } else {
        s = i;
      }
      ge(yr, at);
      at |= s;
    }
    $e(e, n, l, i);
    return n.child;
  }
  function Nf(e, n) {
    var i = n.ref;
    if (e === null && i !== null || e !== null && e.ref !== i) {
      n.flags |= 512;
      n.flags |= 2097152;
    }
  }
  function ka(e, n, i, s, l) {
    var c = Ke(i) ? Pn : He.current;
    c = ar(n, c);
    pr(n, l);
    i = ya(e, n, i, s, c, l);
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
      $e(e, n, i, l);
      return n.child;
    }
  }
  function kf(e, n, i, s, l) {
    if (Ke(i)) {
      var c = true;
      eo(n);
    } else {
      c = false;
    }
    pr(n, l);
    if (n.stateNode === null) {
      _o(e, n);
      mf(n, i, s);
      xa(n, i, s, l);
      s = true;
    } else if (e === null) {
      var p = n.stateNode;
      var g = n.memoizedProps;
      p.props = g;
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
        if (g !== s || _ !== I) {
          gf(n, p, s, I);
        }
      }
      dn = false;
      var C = n.memoizedState;
      p.state = C;
      lo(n, s, p, l);
      _ = n.memoizedState;
      if (g !== s || C !== _ || Qe.current || dn) {
        if (typeof R == "function") {
          Ta(n, i, R, s);
          _ = n.memoizedState;
        }
        if (g = dn || hf(n, i, g, s, C, _, I)) {
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
        s = g;
      } else {
        if (typeof p.componentDidMount == "function") {
          n.flags |= 4194308;
        }
        s = false;
      }
    } else {
      p = n.stateNode;
      zc(e, n);
      g = n.memoizedProps;
      I = n.type === n.elementType ? g : wt(n.type, g);
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
      var b = i.getDerivedStateFromProps;
      if (!(R = typeof b == "function" || typeof p.getSnapshotBeforeUpdate == "function") && (typeof p.UNSAFE_componentWillReceiveProps == "function" || typeof p.componentWillReceiveProps == "function")) {
        if (g !== L || C !== _) {
          gf(n, p, s, _);
        }
      }
      dn = false;
      C = n.memoizedState;
      p.state = C;
      lo(n, s, p, l);
      var j = n.memoizedState;
      if (g !== L || C !== j || Qe.current || dn) {
        if (typeof b == "function") {
          Ta(n, i, b, s);
          j = n.memoizedState;
        }
        if (I = dn || hf(n, i, I, s, C, j, _) || false) {
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
          if (typeof p.componentDidUpdate == "function" && (g !== e.memoizedProps || C !== e.memoizedState)) {
            n.flags |= 4;
          }
          if (typeof p.getSnapshotBeforeUpdate == "function" && (g !== e.memoizedProps || C !== e.memoizedState)) {
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
        if (typeof p.componentDidUpdate == "function" && (g !== e.memoizedProps || C !== e.memoizedState)) {
          n.flags |= 4;
        }
        if (typeof p.getSnapshotBeforeUpdate == "function" && (g !== e.memoizedProps || C !== e.memoizedState)) {
          n.flags |= 1024;
        }
        s = false;
      }
    }
    return Ca(e, n, i, s, c, l);
  }
  function Ca(e, n, i, s, l, c) {
    Nf(e, n);
    var p = (n.flags & 128) !== 0;
    if (!s && !p) {
      if (l) {
        Lc(n, i, false);
      }
      return Yt(e, n, c);
    }
    s = n.stateNode;
    Lg.current = n;
    var g = p && typeof i.getDerivedStateFromError != "function" ? null : s.render();
    n.flags |= 1;
    if (e !== null && p) {
      n.child = fr(n, e.child, null, c);
      n.child = fr(n, null, g, c);
    } else {
      $e(e, n, g, c);
    }
    n.memoizedState = s.state;
    if (l) {
      Lc(n, i, true);
    }
    return n.child;
  }
  function Cf(e) {
    var n = e.stateNode;
    if (n.pendingContext) {
      Pc(e, n.pendingContext, n.pendingContext !== n.context);
    } else if (n.context) {
      Pc(e, n.context, false);
    }
    fa(e, n.containerInfo);
  }
  function Pf(e, n, i, s, l) {
    cr();
    ia(l);
    n.flags |= 256;
    $e(e, n, i, s);
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
  function Rf(e, n, i) {
    var s = n.pendingProps;
    var l = we.current;
    var c = false;
    var p = (n.flags & 128) !== 0;
    var g;
    if (!(g = p)) {
      g = e !== null && e.memoizedState === null ? false : (l & 2) !== 0;
    }
    if (g) {
      c = true;
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
        if (c) {
          s = n.mode;
          c = n.child;
          p = {
            mode: "hidden",
            children: p
          };
          if ((s & 1) === 0 && c !== null) {
            c.childLanes = 0;
            c.pendingProps = p;
          } else {
            c = Lo(p, s, 0, null);
          }
          e = Bn(e, s, i, null);
          c.return = n;
          e.return = n;
          c.sibling = e;
          n.child = c;
          n.child.memoizedState = Ra(i);
          n.memoizedState = Pa;
          return e;
        } else {
          return La(n, p);
        }
      }
    }
    l = e.memoizedState;
    if (l !== null && (g = l.dehydrated, g !== null)) {
      return Og(e, n, p, s, g, l, i);
    }
    if (c) {
      c = s.fallback;
      p = n.mode;
      l = e.child;
      g = l.sibling;
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
      if (g !== null) {
        c = _n(g, c);
      } else {
        c = Bn(c, p, i, null);
        c.flags |= 2;
      }
      c.return = n;
      s.return = n;
      s.sibling = c;
      n.child = s;
      s = c;
      c = n.child;
      p = e.child.memoizedState;
      p = p === null ? Ra(i) : {
        baseLanes: p.baseLanes | i,
        cachePool: null,
        transitions: p.transitions
      };
      c.memoizedState = p;
      c.childLanes = e.childLanes & ~i;
      n.memoizedState = Pa;
      return s;
    }
    c = e.child;
    e = c.sibling;
    s = _n(c, {
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
  function Og(e, n, i, s, l, c, p) {
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
        c = s.fallback;
        l = n.mode;
        s = Lo({
          mode: "visible",
          children: s.children
        }, l, 0, null);
        c = Bn(c, l, p, null);
        c.flags |= 2;
        s.return = n;
        c.return = n;
        s.sibling = c;
        n.child = s;
        if ((n.mode & 1) !== 0) {
          fr(n, e.child, null, p);
        }
        n.child.memoizedState = Ra(p);
        n.memoizedState = Pa;
        return c;
      }
    }
    if ((n.mode & 1) === 0) {
      return vo(e, n, p, null);
    }
    if (l.data === "$!") {
      s = l.nextSibling && l.nextSibling.dataset;
      if (s) {
        var g = s.dgst;
      }
      s = g;
      c = Error(o(419));
      s = Ia(c, s, undefined);
      return vo(e, n, p, s);
    }
    g = (p & e.childLanes) !== 0;
    if (qe || g) {
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
        if (l !== 0 && l !== c.retryLane) {
          c.retryLane = l;
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
      n = Vg.bind(null, e);
      l._reactRetry = n;
      return null;
    } else {
      e = c.treeContext;
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
  function Lf(e, n, i) {
    e.lanes |= n;
    var s = e.alternate;
    if (s !== null) {
      s.lanes |= n;
    }
    ua(e.return, n, i);
  }
  function Oa(e, n, i, s, l) {
    var c = e.memoizedState;
    if (c === null) {
      e.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: s,
        tail: i,
        tailMode: l
      };
    } else {
      c.isBackwards = n;
      c.rendering = null;
      c.renderingStartTime = 0;
      c.last = s;
      c.tail = i;
      c.tailMode = l;
    }
  }
  function Of(e, n, i) {
    var s = n.pendingProps;
    var l = s.revealOrder;
    var c = s.tail;
    $e(e, n, s.children, i);
    s = we.current;
    if ((s & 2) !== 0) {
      s = s & 1 | 2;
      n.flags |= 128;
    } else {
      if (e !== null && (e.flags & 128) !== 0) {
        e: for (e = n.child; e !== null;) {
          if (e.tag === 13) {
            if (e.memoizedState !== null) {
              Lf(e, i, n);
            }
          } else if (e.tag === 19) {
            Lf(e, i, n);
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
          Oa(n, false, l, i, c);
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
          Oa(n, true, i, null, c);
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
  function Ag(e, n, i) {
    switch (n.tag) {
      case 3:
        Cf(n);
        cr();
        break;
      case 5:
        Vc(n);
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
            return Rf(e, n, i);
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
            return Of(e, n, i);
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
        return If(e, n, i);
    }
    return Yt(e, n, i);
  }
  var Af;
  var Aa;
  var Df;
  var Mf;
  Af = function (e, n) {
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
  Df = function (e, n, i, s) {
    var l = e.memoizedProps;
    if (l !== s) {
      e = n.stateNode;
      An(Lt.current);
      var c = null;
      switch (i) {
        case "input":
          l = us(e, l);
          s = us(e, s);
          c = [];
          break;
        case "select":
          l = U({}, l, {
            value: undefined
          });
          s = U({}, s, {
            value: undefined
          });
          c = [];
          break;
        case "textarea":
          l = fs(e, l);
          s = fs(e, s);
          c = [];
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
            var g = l[I];
            for (p in g) {
              if (g.hasOwnProperty(p)) {
                i ||= {};
                i[p] = "";
              }
            }
          } else if (I !== "dangerouslySetInnerHTML" && I !== "children" && I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && I !== "autoFocus") {
            if (u.hasOwnProperty(I)) {
              c ||= [];
            } else {
              (c = c || []).push(I, null);
            }
          }
        }
      }
      for (I in s) {
        var _ = s[I];
        g = l != null ? l[I] : undefined;
        if (s.hasOwnProperty(I) && _ !== g && (_ != null || g != null)) {
          if (I === "style") {
            if (g) {
              for (p in g) {
                if (!!g.hasOwnProperty(p) && (!_ || !_.hasOwnProperty(p))) {
                  i ||= {};
                  i[p] = "";
                }
              }
              for (p in _) {
                if (_.hasOwnProperty(p) && g[p] !== _[p]) {
                  i ||= {};
                  i[p] = _[p];
                }
              }
            } else {
              if (!i) {
                c ||= [];
                c.push(I, i);
              }
              i = _;
            }
          } else if (I === "dangerouslySetInnerHTML") {
            _ = _ ? _.__html : undefined;
            g = g ? g.__html : undefined;
            if (_ != null && g !== _) {
              (c = c || []).push(I, _);
            }
          } else if (I === "children") {
            if (typeof _ == "string" || typeof _ == "number") {
              (c = c || []).push(I, "" + _);
            }
          } else if (I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning") {
            if (u.hasOwnProperty(I)) {
              if (_ != null && I === "onScroll") {
                ye("scroll", e);
              }
              if (!c && g !== _) {
                c = [];
              }
            } else {
              (c = c || []).push(I, _);
            }
          }
        }
      }
      if (i) {
        (c = c || []).push("style", i);
      }
      var I = c;
      if (n.updateQueue = I) {
        n.flags |= 4;
      }
    }
  };
  Mf = function (e, n, i, s) {
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
  function Dg(e, n, i) {
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
          Df(e, n, i, s, l);
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
            var c = n.memoizedProps;
            s[Rt] = n;
            s[Jr] = c;
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
                hl(s, c);
                ye("invalid", s);
                break;
              case "select":
                s._wrapperState = {
                  wasMultiple: !!c.multiple
                };
                ye("invalid", s);
                break;
              case "textarea":
                yl(s, c);
                ye("invalid", s);
            }
            ps(i, c);
            l = null;
            for (var p in c) {
              if (c.hasOwnProperty(p)) {
                var g = c[p];
                if (p === "children") {
                  if (typeof g == "string") {
                    if (s.textContent !== g) {
                      if (c.suppressHydrationWarning !== true) {
                        Ki(s.textContent, g, e);
                      }
                      l = ["children", g];
                    }
                  } else if (typeof g == "number" && s.textContent !== "" + g) {
                    if (c.suppressHydrationWarning !== true) {
                      Ki(s.textContent, g, e);
                    }
                    l = ["children", "" + g];
                  }
                } else if (u.hasOwnProperty(p) && g != null && p === "onScroll") {
                  ye("scroll", s);
                }
              }
            }
            switch (i) {
              case "input":
                ki(s);
                gl(s, c, true);
                break;
              case "textarea":
                ki(s);
                _l(s);
                break;
              case "select":
              case "option":
                break;
              default:
                if (typeof c.onClick == "function") {
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
              e = El(i);
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
            Af(e, n, false, false);
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
                  hl(e, s);
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
                  yl(e, s);
                  l = fs(e, s);
                  ye("invalid", e);
                  break;
                default:
                  l = s;
              }
              ps(i, l);
              g = l;
              for (c in g) {
                if (g.hasOwnProperty(c)) {
                  var _ = g[c];
                  if (c === "style") {
                    Tl(e, _);
                  } else if (c === "dangerouslySetInnerHTML") {
                    _ = _ ? _.__html : undefined;
                    if (_ != null) {
                      Sl(e, _);
                    }
                  } else if (c === "children") {
                    if (typeof _ == "string") {
                      if (i !== "textarea" || _ !== "") {
                        Lr(e, _);
                      }
                    } else if (typeof _ == "number") {
                      Lr(e, "" + _);
                    }
                  } else if (c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus") {
                    if (u.hasOwnProperty(c)) {
                      if (_ != null && c === "onScroll") {
                        ye("scroll", e);
                      }
                    } else if (_ != null) {
                      Q(e, c, _, p);
                    }
                  }
                }
              }
              switch (i) {
                case "input":
                  ki(e);
                  gl(e, s, false);
                  break;
                case "textarea":
                  ki(e);
                  _l(e);
                  break;
                case "option":
                  if (s.value != null) {
                    e.setAttribute("value", "" + de(s.value));
                  }
                  break;
                case "select":
                  e.multiple = !!s.multiple;
                  c = s.value;
                  if (c != null) {
                    Qn(e, !!s.multiple, c, false);
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
          Mf(e, n, e.memoizedProps, s);
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
            if ((c = s.nodeValue !== i) && (e = ot, e !== null)) {
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
            if (c) {
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
            bc();
            cr();
            n.flags |= 98560;
            c = false;
          } else {
            c = io(n);
            if (s !== null && s.dehydrated !== null) {
              if (e === null) {
                if (!c) {
                  throw Error(o(318));
                }
                c = n.memoizedState;
                c = c !== null ? c.dehydrated : null;
                if (!c) {
                  throw Error(o(317));
                }
                c[Rt] = n;
              } else {
                cr();
                if ((n.flags & 128) === 0) {
                  n.memoizedState = null;
                }
                n.flags |= 4;
              }
              Ue(n);
              c = false;
            } else {
              if (St !== null) {
                Ga(St);
                St = null;
              }
              c = true;
            }
          }
          if (!c) {
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
        c = n.memoizedState;
        if (c === null) {
          Ue(n);
          return null;
        }
        s = (n.flags & 128) !== 0;
        p = c.rendering;
        if (p === null) {
          if (s) {
            li(c, false);
          } else {
            if (Oe !== 0 || e !== null && (e.flags & 128) !== 0) {
              for (e = n.child; e !== null;) {
                p = co(e);
                if (p !== null) {
                  n.flags |= 128;
                  li(c, false);
                  s = p.updateQueue;
                  if (s !== null) {
                    n.updateQueue = s;
                    n.flags |= 4;
                  }
                  n.subtreeFlags = 0;
                  s = i;
                  i = n.child;
                  while (i !== null) {
                    c = i;
                    e = s;
                    c.flags &= 14680066;
                    p = c.alternate;
                    if (p === null) {
                      c.childLanes = 0;
                      c.lanes = e;
                      c.child = null;
                      c.subtreeFlags = 0;
                      c.memoizedProps = null;
                      c.memoizedState = null;
                      c.updateQueue = null;
                      c.dependencies = null;
                      c.stateNode = null;
                    } else {
                      c.childLanes = p.childLanes;
                      c.lanes = p.lanes;
                      c.child = p.child;
                      c.subtreeFlags = 0;
                      c.deletions = null;
                      c.memoizedProps = p.memoizedProps;
                      c.memoizedState = p.memoizedState;
                      c.updateQueue = p.updateQueue;
                      c.type = p.type;
                      e = p.dependencies;
                      c.dependencies = e === null ? null : {
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
            if (c.tail !== null && Ne() > vr) {
              n.flags |= 128;
              s = true;
              li(c, false);
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
              li(c, true);
              if (c.tail === null && c.tailMode === "hidden" && !p.alternate && !Se) {
                Ue(n);
                return null;
              }
            } else if (Ne() * 2 - c.renderingStartTime > vr && i !== 1073741824) {
              n.flags |= 128;
              s = true;
              li(c, false);
              n.lanes = 4194304;
            }
          }
          if (c.isBackwards) {
            p.sibling = n.child;
            n.child = p;
          } else {
            i = c.last;
            if (i !== null) {
              i.sibling = p;
            } else {
              n.child = p;
            }
            c.last = p;
          }
        }
        if (c.tail !== null) {
          n = c.tail;
          c.rendering = n;
          c.tail = n.sibling;
          c.renderingStartTime = Ne();
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
  function Mg(e, n) {
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
  var Fg = typeof WeakSet == "function" ? WeakSet : Set;
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
  function bg(e, n) {
    Ws = Bi;
    e = pc();
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
            var c = s.focusNode;
            s = s.focusOffset;
            try {
              i.nodeType;
              c.nodeType;
            } catch {
              i = null;
              break e;
            }
            var p = 0;
            var g = -1;
            var _ = -1;
            var I = 0;
            var R = 0;
            var L = e;
            var C = null;
            t: while (true) {
              for (var b; L !== i || l !== 0 && L.nodeType !== 3 || (g = p + l), L !== c || s !== 0 && L.nodeType !== 3 || (_ = p + s), L.nodeType === 3 && (p += L.nodeValue.length), (b = L.firstChild) !== null;) {
                C = L;
                L = b;
              }
              while (true) {
                if (L === e) {
                  break t;
                }
                if (C === i && ++I === l) {
                  g = p;
                }
                if (C === c && ++R === s) {
                  _ = p;
                }
                if ((b = L.nextSibling) !== null) {
                  break;
                }
                L = C;
                C = L.parentNode;
              }
              L = b;
            }
            i = g === -1 || _ === -1 ? null : {
              start: g,
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
                    var w = n.stateNode;
                    var E = w.getSnapshotBeforeUpdate(n.elementType === n.type ? z : wt(n.type, z), ke);
                    w.__reactInternalSnapshotBeforeUpdate = E;
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
          var c = l.destroy;
          l.destroy = undefined;
          if (c !== undefined) {
            Da(n, i, c);
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
  function bf(e) {
    var n = e.alternate;
    if (n !== null) {
      e.alternate = null;
      bf(n);
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
        delete n[_g];
        delete n[Eg];
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
  function Hf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Bf(e) {
    e: while (true) {
      while (e.sibling === null) {
        if (e.return === null || Hf(e.return)) {
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
  function Fa(e, n, i) {
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
      Fa(e, n, i);
      e = e.sibling;
      while (e !== null) {
        Fa(e, n, i);
        e = e.sibling;
      }
    }
  }
  function ba(e, n, i) {
    var s = e.tag;
    if (s === 5 || s === 6) {
      e = e.stateNode;
      if (n) {
        i.insertBefore(e, n);
      } else {
        i.appendChild(e);
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
  var Fe = null;
  var Tt = false;
  function hn(e, n, i) {
    for (i = i.child; i !== null;) {
      Uf(e, n, i);
      i = i.sibling;
    }
  }
  function Uf(e, n, i) {
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
        var s = Fe;
        var l = Tt;
        Fe = null;
        hn(e, n, i);
        Fe = s;
        Tt = l;
        if (Fe !== null) {
          if (Tt) {
            e = Fe;
            i = i.stateNode;
            if (e.nodeType === 8) {
              e.parentNode.removeChild(i);
            } else {
              e.removeChild(i);
            }
          } else {
            Fe.removeChild(i.stateNode);
          }
        }
        break;
      case 18:
        if (Fe !== null) {
          if (Tt) {
            e = Fe;
            i = i.stateNode;
            if (e.nodeType === 8) {
              Ks(e.parentNode, i);
            } else if (e.nodeType === 1) {
              Ks(e, i);
            }
            zr(e);
          } else {
            Ks(Fe, i.stateNode);
          }
        }
        break;
      case 4:
        s = Fe;
        l = Tt;
        Fe = i.stateNode.containerInfo;
        Tt = true;
        hn(e, n, i);
        Fe = s;
        Tt = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!je && (s = i.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          l = s = s.next;
          do {
            var c = l;
            var p = c.destroy;
            c = c.tag;
            if (p !== undefined && ((c & 2) !== 0 || (c & 4) !== 0)) {
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
          } catch (g) {
            Ie(i, n, g);
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
  function jf(e) {
    var n = e.updateQueue;
    if (n !== null) {
      e.updateQueue = null;
      var i = e.stateNode;
      if (i === null) {
        i = e.stateNode = new Fg();
      }
      n.forEach(function (s) {
        var l = Wg.bind(null, e, s);
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
          var c = e;
          var p = n;
          var g = p;
          e: while (g !== null) {
            switch (g.tag) {
              case 5:
                Fe = g.stateNode;
                Tt = false;
                break e;
              case 3:
                Fe = g.stateNode.containerInfo;
                Tt = true;
                break e;
              case 4:
                Fe = g.stateNode.containerInfo;
                Tt = true;
                break e;
            }
            g = g.return;
          }
          if (Fe === null) {
            throw Error(o(160));
          }
          Uf(c, p, l);
          Fe = null;
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
        zf(n, e);
        n = n.sibling;
      }
    }
  }
  function zf(e, n) {
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
          var c = e.memoizedProps;
          var p = i !== null ? i.memoizedProps : c;
          var g = e.type;
          var _ = e.updateQueue;
          e.updateQueue = null;
          if (_ !== null) {
            try {
              if (g === "input" && c.type === "radio" && c.name != null) {
                ml(l, c);
              }
              hs(g, p);
              var I = hs(g, c);
              for (p = 0; p < _.length; p += 2) {
                var R = _[p];
                var L = _[p + 1];
                if (R === "style") {
                  Tl(l, L);
                } else if (R === "dangerouslySetInnerHTML") {
                  Sl(l, L);
                } else if (R === "children") {
                  Lr(l, L);
                } else {
                  Q(l, R, L, I);
                }
              }
              switch (g) {
                case "input":
                  ls(l, c);
                  break;
                case "textarea":
                  vl(l, c);
                  break;
                case "select":
                  var C = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!c.multiple;
                  var b = c.value;
                  if (b != null) {
                    Qn(l, !!c.multiple, b, false);
                  } else if (C !== !!c.multiple) {
                    if (c.defaultValue != null) {
                      Qn(l, !!c.multiple, c.defaultValue, true);
                    } else {
                      Qn(l, !!c.multiple, c.multiple ? [] : "", false);
                    }
                  }
              }
              l[Jr] = c;
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
          c = e.memoizedProps;
          try {
            l.nodeValue = c;
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
          c = l.memoizedState !== null;
          l.stateNode.isHidden = c;
          if (!!c && (l.alternate === null || l.alternate.memoizedState === null)) {
            Ua = Ne();
          }
        }
        if (s & 4) {
          jf(e);
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
                b = C.child;
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
                      Vf(L);
                      continue;
                    }
                }
                if (b !== null) {
                  b.return = C;
                  B = b;
                } else {
                  Vf(L);
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
                    c = l.style;
                    if (typeof c.setProperty == "function") {
                      c.setProperty("display", "none", "important");
                    } else {
                      c.display = "none";
                    }
                  } else {
                    g = L.stateNode;
                    _ = L.memoizedProps.style;
                    p = _ != null && _.hasOwnProperty("display") ? _.display : null;
                    g.style.display = wl("display", p);
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
          jf(e);
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
            if (Hf(i)) {
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
            var c = Bf(e);
            ba(e, c, l);
            break;
          case 3:
          case 4:
            var p = s.stateNode.containerInfo;
            var g = Bf(e);
            Fa(e, g, p);
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
  function Hg(e, n, i) {
    B = e;
    $f(e);
  }
  function $f(e, n, i) {
    var s = (e.mode & 1) !== 0;
    for (; B !== null;) {
      var l = B;
      var c = l.child;
      if (l.tag === 22 && s) {
        var p = l.memoizedState !== null || Eo;
        if (!p) {
          var g = l.alternate;
          var _ = g !== null && g.memoizedState !== null || je;
          g = Eo;
          var I = je;
          Eo = p;
          if ((je = _) && !I) {
            for (B = l; B !== null;) {
              p = B;
              _ = p.child;
              if (p.tag === 22 && p.memoizedState !== null) {
                Wf(l);
              } else if (_ !== null) {
                _.return = p;
                B = _;
              } else {
                Wf(l);
              }
            }
          }
          while (c !== null) {
            B = c;
            $f(c);
            c = c.sibling;
          }
          B = l;
          Eo = g;
          je = I;
        }
        Gf(e);
      } else if ((l.subtreeFlags & 8772) !== 0 && c !== null) {
        c.return = l;
        B = c;
      } else {
        Gf(e);
      }
    }
  }
  function Gf(e) {
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
                var c = n.updateQueue;
                if (c !== null) {
                  Gc(n, c, s);
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
                  Gc(n, p, i);
                }
                break;
              case 5:
                var g = n.stateNode;
                if (i === null && n.flags & 4) {
                  i = g;
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
  function Vf(e) {
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
  function Wf(e) {
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
            var c = n.return;
            try {
              Ma(n);
            } catch (_) {
              Ie(n, c, _);
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
      var g = n.sibling;
      if (g !== null) {
        g.return = n.return;
        B = g;
        break;
      }
      B = n.return;
    }
  }
  var Bg = Math.ceil;
  var wo = ie.ReactCurrentDispatcher;
  var Ha = ie.ReactCurrentOwner;
  var ht = ie.ReactCurrentBatchConfig;
  var se = 0;
  var De = null;
  var Pe = null;
  var be = 0;
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
  function Ge() {
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
    } else if ((se & 2) !== 0 && be !== 0) {
      return be & -be;
    } else if (wg.transition !== null) {
      if (Co === 0) {
        Co = Hl();
      }
      return Co;
    } else {
      e = pe;
      if (e === 0) {
        e = window.event;
        e = e === undefined ? 16 : Xl(e.type);
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
    br(e, i, s);
    if ((se & 2) === 0 || e !== De) {
      if (e === De) {
        if ((se & 2) === 0) {
          To |= i;
        }
        if (Oe === 4) {
          vn(e, be);
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
    wm(e, n);
    var s = Fi(e, e === De ? be : 0);
    if (s === 0) {
      if (i !== null) {
        Ml(i);
      }
      e.callbackNode = null;
      e.callbackPriority = 0;
    } else {
      n = s & -s;
      if (e.callbackPriority !== n) {
        if (i != null) {
          Ml(i);
        }
        if (n === 1) {
          if (e.tag === 0) {
            Sg(Yf.bind(null, e));
          } else {
            Oc(Yf.bind(null, e));
          }
          yg(function () {
            if ((se & 6) === 0) {
              fn();
            }
          });
          i = null;
        } else {
          switch (Bl(s)) {
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
              i = bl;
              break;
            default:
              i = Oi;
          }
          i = nd(i, Xf.bind(null, e));
        }
        e.callbackPriority = n;
        e.callbackNode = i;
      }
    }
  }
  function Xf(e, n) {
    ko = -1;
    Co = 0;
    if ((se & 6) !== 0) {
      throw Error(o(327));
    }
    var i = e.callbackNode;
    if (_r() && e.callbackNode !== i) {
      return null;
    }
    var s = Fi(e, e === De ? be : 0);
    if (s === 0) {
      return null;
    }
    if ((s & 30) !== 0 || (s & e.expiredLanes) !== 0 || n) {
      n = Po(e, s);
    } else {
      n = s;
      var l = se;
      se |= 2;
      var c = Kf();
      if (De !== e || be !== n) {
        Qt = null;
        vr = Ne() + 500;
        bn(e, n);
      }
      do {
        try {
          zg();
          break;
        } catch (g) {
          Qf(e, g);
        }
      } while (true);
      sa();
      wo.current = c;
      se = l;
      if (Pe !== null) {
        n = 0;
      } else {
        De = null;
        be = 0;
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
        bn(e, 0);
        vn(e, s);
        Je(e, Ne());
        throw i;
      }
      if (n === 6) {
        vn(e, s);
      } else {
        l = e.current.alternate;
        if ((s & 30) === 0 && !Ug(l) && (n = Po(e, s), n === 2 && (c = ws(e), c !== 0 && (s = c, n = $a(e, c))), n === 1)) {
          i = fi;
          bn(e, 0);
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
              if (Fi(e, 0) !== 0) {
                break;
              }
              l = e.suspendedLanes;
              if ((l & s) !== s) {
                Ge();
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
              c = 1 << p;
              p = n[p];
              if (p > l) {
                l = p;
              }
              s &= ~c;
            }
            s = l;
            s = Ne() - s;
            s = (s < 120 ? 120 : s < 480 ? 480 : s < 1080 ? 1080 : s < 1920 ? 1920 : s < 3000 ? 3000 : s < 4320 ? 4320 : Bg(s / 1960) * 1960) - s;
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
      return Xf.bind(null, e);
    } else {
      return null;
    }
  }
  function $a(e, n) {
    var i = di;
    if (e.current.memoizedState.isDehydrated) {
      bn(e, n).flags |= 256;
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
  function Ug(e) {
    var n = e;
    for (;;) {
      if (n.flags & 16384) {
        var i = n.updateQueue;
        if (i !== null && (i = i.stores, i !== null)) {
          for (var s = 0; s < i.length; s++) {
            var l = i[s];
            var c = l.getSnapshot;
            l = l.value;
            try {
              if (!Et(c(), l)) {
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
  function Yf(e) {
    if ((se & 6) !== 0) {
      throw Error(o(327));
    }
    _r();
    var n = Fi(e, 0);
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
      bn(e, 0);
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
  function Fn(e) {
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
  function bn(e, n) {
    e.finishedWork = null;
    e.finishedLanes = 0;
    var i = e.timeoutHandle;
    if (i !== -1) {
      e.timeoutHandle = -1;
      gg(i);
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
    be = at = n;
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
          var c = i.pending;
          if (c !== null) {
            var p = c.next;
            c.next = l;
            s.next = p;
          }
          i.pending = s;
        }
      }
      On = null;
    }
    return e;
  }
  function Qf(e, n) {
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
          var c = e;
          var p = i.return;
          var g = i;
          var _ = n;
          n = be;
          g.flags |= 32768;
          if (_ !== null && typeof _ == "object" && typeof _.then == "function") {
            var I = _;
            var R = g;
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
            var b = Ef(p);
            if (b !== null) {
              b.flags &= -257;
              Sf(b, p, g, c, n);
              if (b.mode & 1) {
                _f(c, I, n);
              }
              n = b;
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
                _f(c, I, n);
                Xa();
                break e;
              }
              _ = Error(o(426));
            }
          } else if (Se && g.mode & 1) {
            var ke = Ef(p);
            if (ke !== null) {
              if ((ke.flags & 65536) === 0) {
                ke.flags |= 256;
              }
              Sf(ke, p, g, c, n);
              ia(mr(_, g));
              break e;
            }
          }
          c = _ = mr(_, g);
          if (Oe !== 4) {
            Oe = 2;
          }
          if (di === null) {
            di = [c];
          } else {
            di.push(c);
          }
          c = p;
          do {
            switch (c.tag) {
              case 3:
                c.flags |= 65536;
                n &= -n;
                c.lanes |= n;
                var w = yf(c, _, n);
                $c(c, w);
                break e;
              case 1:
                g = _;
                var E = c.type;
                var x = c.stateNode;
                if ((c.flags & 128) === 0 && (typeof E.getDerivedStateFromError == "function" || x !== null && typeof x.componentDidCatch == "function" && (mn === null || !mn.has(x)))) {
                  c.flags |= 65536;
                  n &= -n;
                  c.lanes |= n;
                  var O = vf(c, g, n);
                  $c(c, O);
                  break e;
                }
            }
            c = c.return;
          } while (c !== null);
        }
        Zf(i);
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
  function Kf() {
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
      vn(De, be);
    }
  }
  function Po(e, n) {
    var i = se;
    se |= 2;
    var s = Kf();
    if (De !== e || be !== n) {
      Qt = null;
      bn(e, n);
    }
    do {
      try {
        jg();
        break;
      } catch (l) {
        Qf(e, l);
      }
    } while (true);
    sa();
    se = i;
    wo.current = s;
    if (Pe !== null) {
      throw Error(o(261));
    }
    De = null;
    be = 0;
    return Oe;
  }
  function jg() {
    while (Pe !== null) {
      qf(Pe);
    }
  }
  function zg() {
    while (Pe !== null && !pm()) {
      qf(Pe);
    }
  }
  function qf(e) {
    var n = td(e.alternate, e, at);
    e.memoizedProps = e.pendingProps;
    if (n === null) {
      Zf(e);
    } else {
      Pe = n;
    }
    Ha.current = null;
  }
  function Zf(e) {
    var n = e;
    do {
      var i = n.alternate;
      e = n.return;
      if ((n.flags & 32768) === 0) {
        i = Dg(i, n, at);
        if (i !== null) {
          Pe = i;
          return;
        }
      } else {
        i = Mg(i, n);
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
      $g(e, n, i, s);
    } finally {
      ht.transition = l;
      pe = s;
    }
    return null;
  }
  function $g(e, n, i, s) {
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
    var c = i.lanes | i.childLanes;
    Tm(e, c);
    if (e === De) {
      Pe = De = null;
      be = 0;
    }
    if (((i.subtreeFlags & 2064) !== 0 || (i.flags & 2064) !== 0) && !Io) {
      Io = true;
      nd(Oi, function () {
        _r();
        return null;
      });
    }
    c = (i.flags & 15990) !== 0;
    if ((i.subtreeFlags & 15990) !== 0 || c) {
      c = ht.transition;
      ht.transition = null;
      var p = pe;
      pe = 1;
      var g = se;
      se |= 4;
      Ha.current = null;
      bg(e, i);
      zf(i, e);
      lg(Xs);
      Bi = !!Ws;
      Xs = Ws = null;
      e.current = i;
      Hg(i);
      hm();
      se = g;
      pe = p;
      ht.transition = c;
    } else {
      e.current = i;
    }
    if (Io) {
      Io = false;
      gn = e;
      No = l;
    }
    c = e.pendingLanes;
    if (c === 0) {
      mn = null;
    }
    ym(i.stateNode);
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
    c = e.pendingLanes;
    if ((c & 1) !== 0) {
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
      var e = Bl(No);
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
            var c = B;
            var p = c.child;
            if ((B.flags & 16) !== 0) {
              var g = c.deletions;
              if (g !== null) {
                for (var _ = 0; _ < g.length; _++) {
                  var I = g[_];
                  for (B = I; B !== null;) {
                    var R = B;
                    switch (R.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ci(8, R, c);
                    }
                    var L = R.child;
                    if (L !== null) {
                      L.return = R;
                      B = L;
                    } else {
                      while (B !== null) {
                        R = B;
                        var C = R.sibling;
                        var b = R.return;
                        bf(R);
                        if (R === I) {
                          B = null;
                          break;
                        }
                        if (C !== null) {
                          C.return = b;
                          B = C;
                          break;
                        }
                        B = b;
                      }
                    }
                  }
                }
                var j = c.alternate;
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
                B = c;
              }
            }
            if ((c.subtreeFlags & 2064) !== 0 && p !== null) {
              p.return = c;
              B = p;
            } else {
              e: while (B !== null) {
                c = B;
                if ((c.flags & 2048) !== 0) {
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ci(9, c, c.return);
                  }
                }
                var w = c.sibling;
                if (w !== null) {
                  w.return = c.return;
                  B = w;
                  break e;
                }
                B = c.return;
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
                g = B;
                if ((g.flags & 2048) !== 0) {
                  try {
                    switch (g.tag) {
                      case 0:
                      case 11:
                      case 15:
                        So(9, g);
                    }
                  } catch (G) {
                    Ie(g, g.return, G);
                  }
                }
                if (g === p) {
                  B = null;
                  break e;
                }
                var O = g.sibling;
                if (O !== null) {
                  O.return = g.return;
                  B = O;
                  break e;
                }
                B = g.return;
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
  function Jf(e, n, i) {
    n = mr(i, n);
    n = yf(e, n, 1);
    e = pn(e, n, 1);
    n = Ge();
    if (e !== null) {
      br(e, 1, n);
      Je(e, n);
    }
  }
  function Ie(e, n, i) {
    if (e.tag === 3) {
      Jf(e, e, i);
    } else {
      while (n !== null) {
        if (n.tag === 3) {
          Jf(n, e, i);
          break;
        } else if (n.tag === 1) {
          var s = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (mn === null || !mn.has(s))) {
            e = mr(i, e);
            e = vf(n, e, 1);
            n = pn(n, e, 1);
            e = Ge();
            if (n !== null) {
              br(n, 1, e);
              Je(n, e);
            }
            break;
          }
        }
        n = n.return;
      }
    }
  }
  function Gg(e, n, i) {
    var s = e.pingCache;
    if (s !== null) {
      s.delete(n);
    }
    n = Ge();
    e.pingedLanes |= e.suspendedLanes & i;
    if (De === e && (be & i) === i) {
      if (Oe === 4 || Oe === 3 && (be & 130023424) === be && Ne() - Ua < 500) {
        bn(e, 0);
      } else {
        Ba |= i;
      }
    }
    Je(e, n);
  }
  function ed(e, n) {
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
    var i = Ge();
    e = Wt(e, n);
    if (e !== null) {
      br(e, n, i);
      Je(e, i);
    }
  }
  function Vg(e) {
    var n = e.memoizedState;
    var i = 0;
    if (n !== null) {
      i = n.retryLane;
    }
    ed(e, i);
  }
  function Wg(e, n) {
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
    ed(e, i);
  }
  var td;
  td = function (e, n, i) {
    if (e !== null) {
      if (e.memoizedProps !== n.pendingProps || Qe.current) {
        qe = true;
      } else {
        if ((e.lanes & i) === 0 && (n.flags & 128) === 0) {
          qe = false;
          return Ag(e, n, i);
        }
        qe = (e.flags & 131072) !== 0;
      }
    } else {
      qe = false;
      if (Se && (n.flags & 1048576) !== 0) {
        Ac(n, ro, n.index);
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
        var c = va();
        n.flags |= 1;
        if (typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === undefined) {
          n.tag = 1;
          n.memoizedState = null;
          n.updateQueue = null;
          if (Ke(s)) {
            c = true;
            eo(n);
          } else {
            c = false;
          }
          n.memoizedState = l.state ?? null;
          ca(n);
          l.updater = yo;
          n.stateNode = l;
          l._reactInternals = n;
          xa(n, s, e, i);
          n = Ca(null, n, s, true, c, i);
        } else {
          n.tag = 0;
          if (Se && c) {
            ea(n);
          }
          $e(null, n, l, i);
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
          l = n.tag = Yg(s);
          e = wt(s, e);
          switch (l) {
            case 0:
              n = ka(null, n, s, e, i);
              break e;
            case 1:
              n = kf(null, n, s, e, i);
              break e;
            case 11:
              n = wf(null, n, s, e, i);
              break e;
            case 14:
              n = Tf(null, n, s, wt(s.type, e), i);
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
        return kf(e, n, s, l, i);
      case 3:
        e: {
          Cf(n);
          if (e === null) {
            throw Error(o(387));
          }
          s = n.pendingProps;
          c = n.memoizedState;
          l = c.element;
          zc(e, n);
          lo(n, s, null, i);
          var p = n.memoizedState;
          s = p.element;
          if (c.isDehydrated) {
            c = {
              element: s,
              isDehydrated: false,
              cache: p.cache,
              pendingSuspenseBoundaries: p.pendingSuspenseBoundaries,
              transitions: p.transitions
            };
            n.updateQueue.baseState = c;
            n.memoizedState = c;
            if (n.flags & 256) {
              l = mr(Error(o(423)), n);
              n = Pf(e, n, s, i, l);
              break e;
            } else if (s !== l) {
              l = mr(Error(o(424)), n);
              n = Pf(e, n, s, i, l);
              break e;
            } else {
              st = un(n.stateNode.containerInfo.firstChild);
              ot = n;
              Se = true;
              St = null;
              i = Uc(n, null, s, i);
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
            $e(e, n, s, i);
          }
          n = n.child;
        }
        return n;
      case 5:
        Vc(n);
        if (e === null) {
          ra(n);
        }
        s = n.type;
        l = n.pendingProps;
        c = e !== null ? e.memoizedProps : null;
        p = l.children;
        if (Ys(s, l)) {
          p = null;
        } else if (c !== null && Ys(s, c)) {
          n.flags |= 32;
        }
        Nf(e, n);
        $e(e, n, p, i);
        return n.child;
      case 6:
        if (e === null) {
          ra(n);
        }
        return null;
      case 13:
        return Rf(e, n, i);
      case 4:
        fa(n, n.stateNode.containerInfo);
        s = n.pendingProps;
        if (e === null) {
          n.child = fr(n, null, s, i);
        } else {
          $e(e, n, s, i);
        }
        return n.child;
      case 11:
        s = n.type;
        l = n.pendingProps;
        l = n.elementType === s ? l : wt(s, l);
        return wf(e, n, s, l, i);
      case 7:
        $e(e, n, n.pendingProps, i);
        return n.child;
      case 8:
        $e(e, n, n.pendingProps.children, i);
        return n.child;
      case 12:
        $e(e, n, n.pendingProps.children, i);
        return n.child;
      case 10:
        e: {
          s = n.type._context;
          l = n.pendingProps;
          c = n.memoizedProps;
          p = l.value;
          ge(so, s._currentValue);
          s._currentValue = p;
          if (c !== null) {
            if (Et(c.value, p)) {
              if (c.children === l.children && !Qe.current) {
                n = Yt(e, n, i);
                break e;
              }
            } else {
              c = n.child;
              if (c !== null) {
                c.return = n;
              }
              while (c !== null) {
                var g = c.dependencies;
                if (g !== null) {
                  p = c.child;
                  for (var _ = g.firstContext; _ !== null;) {
                    if (_.context === s) {
                      if (c.tag === 1) {
                        _ = Xt(-1, i & -i);
                        _.tag = 2;
                        var I = c.updateQueue;
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
                      c.lanes |= i;
                      _ = c.alternate;
                      if (_ !== null) {
                        _.lanes |= i;
                      }
                      ua(c.return, i, n);
                      g.lanes |= i;
                      break;
                    }
                    _ = _.next;
                  }
                } else if (c.tag === 10) {
                  p = c.type === n.type ? null : c.child;
                } else if (c.tag === 18) {
                  p = c.return;
                  if (p === null) {
                    throw Error(o(341));
                  }
                  p.lanes |= i;
                  g = p.alternate;
                  if (g !== null) {
                    g.lanes |= i;
                  }
                  ua(p, i, n);
                  p = c.sibling;
                } else {
                  p = c.child;
                }
                if (p !== null) {
                  p.return = c;
                } else {
                  for (p = c; p !== null;) {
                    if (p === n) {
                      p = null;
                      break;
                    }
                    c = p.sibling;
                    if (c !== null) {
                      c.return = p.return;
                      p = c;
                      break;
                    }
                    p = p.return;
                  }
                }
                c = p;
              }
            }
          }
          $e(e, n, l.children, i);
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
        $e(e, n, s, i);
        return n.child;
      case 14:
        s = n.type;
        l = wt(s, n.pendingProps);
        l = wt(s.type, l);
        return Tf(e, n, s, l, i);
      case 15:
        return xf(e, n, n.type, n.pendingProps, i);
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
        mf(n, s, l);
        xa(n, s, l, i);
        return Ca(null, n, s, true, e, i);
      case 19:
        return Of(e, n, i);
      case 22:
        return If(e, n, i);
    }
    throw Error(o(156, n.tag));
  };
  function nd(e, n) {
    return Dl(e, n);
  }
  function Xg(e, n, i, s) {
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
    return new Xg(e, n, i, s);
  }
  function Ya(e) {
    e = e.prototype;
    return !!e && !!e.isReactComponent;
  }
  function Yg(e) {
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
  function Ro(e, n, i, s, l, c) {
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
          return Bn(i.children, l, c, n);
        case tt:
          p = 8;
          l |= 8;
          break;
        case en:
          e = mt(12, i, n, l | 2);
          e.elementType = en;
          e.lanes = c;
          return e;
        case nt:
          e = mt(13, i, n, l);
          e.elementType = nt;
          e.lanes = c;
          return e;
        case vt:
          e = mt(19, i, n, l);
          e.elementType = vt;
          e.lanes = c;
          return e;
        case xe:
          return Lo(i, l, c, n);
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
    n.lanes = c;
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
  function Qg(e, n, i, s, l) {
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
  function qa(e, n, i, s, l, c, p, g, _) {
    e = new Qg(e, n, i, g, _);
    if (n === 1) {
      n = 1;
      if (c === true) {
        n |= 8;
      }
    } else {
      n = 0;
    }
    c = mt(3, null, null, n);
    e.current = c;
    c.stateNode = e;
    c.memoizedState = {
      element: s,
      isDehydrated: i,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    };
    ca(c);
    return e;
  }
  function Kg(e, n, i, s = null) {
    return {
      $$typeof: ce,
      key: s == null ? null : "" + s,
      children: e,
      containerInfo: n,
      implementation: i
    };
  }
  function rd(e) {
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
        return Rc(e, i, n);
      }
    }
    return n;
  }
  function id(e, n, i, s, l, c, p, g, _) {
    e = qa(i, s, true, e, l, c, p, g, _);
    e.context = rd(null);
    i = e.current;
    s = Ge();
    l = yn(i);
    c = Xt(s, l);
    c.callback = n ?? null;
    pn(i, c, l);
    e.current.lanes = l;
    br(e, l, s);
    Je(e, s);
    return e;
  }
  function Oo(e, n, i, s) {
    var l = n.current;
    var c = Ge();
    var p = yn(l);
    i = rd(i);
    if (n.context === null) {
      n.context = i;
    } else {
      n.pendingContext = i;
    }
    n = Xt(c, p);
    n.payload = {
      element: e
    };
    s = s === undefined ? null : s;
    if (s !== null) {
      n.callback = s;
    }
    e = pn(l, n, p);
    if (e !== null) {
      It(e, l, p, c);
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
  function od(e, n) {
    e = e.memoizedState;
    if (e !== null && e.dehydrated !== null) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < n ? i : n;
    }
  }
  function Za(e, n) {
    od(e, n);
    if (e = e.alternate) {
      od(e, n);
    }
  }
  function qg() {
    return null;
  }
  var sd = typeof reportError == "function" ? reportError : function (e) {
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
      Fn(function () {
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
      var n = zl();
      e = {
        blockedOn: null,
        target: e,
        priority: n
      };
      for (var i = 0; i < on.length && n !== 0 && n < on[i].priority; i++);
      on.splice(i, 0, e);
      if (i === 0) {
        Vl(e);
      }
    }
  };
  function eu(e) {
    return !!e && (e.nodeType === 1 || e.nodeType === 9 || e.nodeType === 11);
  }
  function Mo(e) {
    return !!e && (e.nodeType === 1 || e.nodeType === 9 || e.nodeType === 11 || e.nodeType === 8 && e.nodeValue === " react-mount-point-unstable ");
  }
  function ad() {}
  function Zg(e, n, i, s, l) {
    if (l) {
      if (typeof s == "function") {
        var c = s;
        s = function () {
          var I = Ao(p);
          c.call(I);
        };
      }
      var p = id(n, s, e, 0, null, false, false, "", ad);
      e._reactRootContainer = p;
      e[zt] = p.current;
      qr(e.nodeType === 8 ? e.parentNode : e);
      Fn();
      return p;
    }
    while (l = e.lastChild) {
      e.removeChild(l);
    }
    if (typeof s == "function") {
      var g = s;
      s = function () {
        var I = Ao(_);
        g.call(I);
      };
    }
    var _ = qa(e, 0, false, null, null, false, false, "", ad);
    e._reactRootContainer = _;
    e[zt] = _.current;
    qr(e.nodeType === 8 ? e.parentNode : e);
    Fn(function () {
      Oo(n, _, i, s);
    });
    return _;
  }
  function Fo(e, n, i, s, l) {
    var c = i._reactRootContainer;
    if (c) {
      var p = c;
      if (typeof l == "function") {
        var g = l;
        l = function () {
          var _ = Ao(p);
          g.call(_);
        };
      }
      Oo(n, p, e, l);
    } else {
      p = Zg(i, n, e, l, s);
    }
    return Ao(p);
  }
  Ul = function (e) {
    switch (e.tag) {
      case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var i = Fr(n.pendingLanes);
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
        Fn(function () {
          var s = Wt(e, 1);
          if (s !== null) {
            var l = Ge();
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
        var i = Ge();
        It(n, e, 134217728, i);
      }
      Za(e, 134217728);
    }
  };
  jl = function (e) {
    if (e.tag === 13) {
      var n = yn(e);
      var i = Wt(e, n);
      if (i !== null) {
        var s = Ge();
        It(i, e, n, s);
      }
      Za(e, n);
    }
  };
  zl = function () {
    return pe;
  };
  $l = function (e, n) {
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
              pl(s);
              ls(s, l);
            }
          }
        }
        break;
      case "textarea":
        vl(e, i);
        break;
      case "select":
        n = i.value;
        if (n != null) {
          Qn(e, !!i.multiple, n, false);
        }
    }
  };
  kl = Va;
  Cl = Fn;
  var Jg = {
    usingClientEntryPoint: false,
    Events: [ei, or, Zi, Il, Nl, Va]
  };
  var hi = {
    findFiberByHostInstance: Cn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
  };
  var ey = {
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
      e = Ol(e);
      if (e === null) {
        return null;
      } else {
        return e.stateNode;
      }
    },
    findFiberByHostInstance: hi.findFiberByHostInstance || qg,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
    var bo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!bo.isDisabled && bo.supportsFiber) {
      try {
        Ai = bo.inject(ey);
        Pt = bo;
      } catch {}
    }
  }
  et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jg;
  et.createPortal = function (e, n, i = null) {
    if (!eu(n)) {
      throw Error(o(200));
    }
    return Kg(e, n, null, i);
  };
  et.createRoot = function (e, n) {
    if (!eu(e)) {
      throw Error(o(299));
    }
    var i = false;
    var s = "";
    var l = sd;
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
    e = Ol(n);
    e = e === null ? null : e.stateNode;
    return e;
  };
  et.flushSync = function (e) {
    return Fn(e);
  };
  et.hydrate = function (e, n, i) {
    if (!Mo(n)) {
      throw Error(o(200));
    }
    return Fo(null, e, n, true, i);
  };
  et.hydrateRoot = function (e, n, i) {
    if (!eu(e)) {
      throw Error(o(405));
    }
    var s = i != null && i.hydratedSources || null;
    var l = false;
    var c = "";
    var p = sd;
    if (i != null) {
      if (i.unstable_strictMode === true) {
        l = true;
      }
      if (i.identifierPrefix !== undefined) {
        c = i.identifierPrefix;
      }
      if (i.onRecoverableError !== undefined) {
        p = i.onRecoverableError;
      }
    }
    n = id(n, null, e, 1, i ?? null, l, false, c, p);
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
    return Fo(null, e, n, false, i);
  };
  et.unmountComponentAtNode = function (e) {
    if (!Mo(e)) {
      throw Error(o(40));
    }
    if (e._reactRootContainer) {
      Fn(function () {
        Fo(null, null, e, false, function () {
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
    return Fo(e, n, i, false, s);
  };
  et.version = "18.3.1-next-f1338f8080-20240426";
  return et;
}
var md;
function py() {
  if (md) {
    return ru.exports;
  }
  md = 1;
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
  ru.exports = dy();
  return ru.exports;
}
var gd;
function hy() {
  if (gd) {
    return Ho;
  }
  gd = 1;
  var t = py();
  Ho.createRoot = t.createRoot;
  Ho.hydrateRoot = t.hydrateRoot;
  return Ho;
}
var my = hy();
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
      for (var f in o) {
        if (Object.prototype.hasOwnProperty.call(o, f)) {
          r[f] = o[f];
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
function bt(t, r, o) {
  if (o || arguments.length === 2) {
    for (var a = 0, u = r.length, f; a < u; a++) {
      if (f || !(a in r)) {
        f ||= Array.prototype.slice.call(r, 0, a);
        f[a] = r[a];
      }
    }
  }
  return t.concat(f || Array.prototype.slice.call(r));
}
function Dt(t, r) {
  var o = r && r.cache ? r.cache : wy;
  var a = r && r.serializer ? r.serializer : Ey;
  var u = r && r.strategy ? r.strategy : vy;
  return u(t, {
    cache: o,
    serializer: a
  });
}
function gy(t) {
  return t == null || typeof t == "number" || typeof t == "boolean";
}
function yy(t, r, o, a) {
  var u = gy(a) ? a : o(a);
  var f = r.get(u);
  if (typeof f === "undefined") {
    f = t.call(this, a);
    r.set(u, f);
  }
  return f;
}
function Fp(t, r, o) {
  var a = Array.prototype.slice.call(arguments, 3);
  var u = o(a);
  var f = r.get(u);
  if (typeof f === "undefined") {
    f = t.apply(this, a);
    r.set(u, f);
  }
  return f;
}
function bp(t, r, o, a, u) {
  return o.bind(r, t, a, u);
}
function vy(t, r) {
  var o = t.length === 1 ? yy : Fp;
  return bp(t, this, o, r.cache.create(), r.serializer);
}
function _y(t, r) {
  return bp(t, this, Fp, r.cache.create(), r.serializer);
}
function Ey() {
  return JSON.stringify(arguments);
}
var Sy = function () {
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
var wy = {
  create: function () {
    return new Sy();
  }
};
var Mt = {
  variadic: _y
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
function yd(t) {
  return t.type === _e.literal;
}
function Ty(t) {
  return t.type === _e.argument;
}
function Hp(t) {
  return t.type === _e.number;
}
function Bp(t) {
  return t.type === _e.date;
}
function Up(t) {
  return t.type === _e.time;
}
function jp(t) {
  return t.type === _e.select;
}
function zp(t) {
  return t.type === _e.plural;
}
function xy(t) {
  return t.type === _e.pound;
}
function $p(t) {
  return t.type === _e.tag;
}
function Gp(t) {
  return !!t && typeof t == "object" && t.type === Er.number;
}
function Tu(t) {
  return !!t && typeof t == "object" && t.type === Er.dateTime;
}
var Vp = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;
var Iy = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Ny(t) {
  var r = {};
  t.replace(Iy, function (o) {
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
var ky = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Cy(t) {
  if (t.length === 0) {
    throw new Error("Number skeleton cannot be empty");
  }
  var r = t.split(ky).filter(function (N) {
    return N.length > 0;
  });
  var o = [];
  for (var a = 0, u = r; a < u.length; a++) {
    var f = u[a];
    var d = f.split("/");
    if (d.length === 0) {
      throw new Error("Invalid number skeleton");
    }
    var h = d[0];
    var m = d.slice(1);
    for (var y = 0, v = m; y < v.length; y++) {
      var T = v[y];
      if (T.length === 0) {
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
function Py(t) {
  return t.replace(/^(.*?)-/, "");
}
var vd = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g;
var Wp = /^(@+)?(\+|#+)?[rs]?$/g;
var Ry = /(\*)(0+)|(#+)(0+)|(0+)/g;
var Xp = /^(0+)$/;
function _d(t) {
  var r = {};
  if (t[t.length - 1] === "r") {
    r.roundingPriority = "morePrecision";
  } else if (t[t.length - 1] === "s") {
    r.roundingPriority = "lessPrecision";
  }
  t.replace(Wp, function (o, a, u) {
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
function Yp(t) {
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
function Ly(t) {
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
    if (!Xp.test(t)) {
      throw new Error("Malformed concise eng/scientific notation");
    }
    r.minimumIntegerDigits = t.length;
  }
  return r;
}
function Ed(t) {
  var r = {};
  var o = Yp(t);
  return o || r;
}
function Oy(t) {
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
        r.unit = Py(u.options[0]);
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
        }), u.options.reduce(function (m, y) {
          return $($({}, m), Ed(y));
        }, {}));
        continue;
      case "engineering":
        r = $($($({}, r), {
          notation: "engineering"
        }), u.options.reduce(function (m, y) {
          return $($({}, m), Ed(y));
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
        u.options[0].replace(Ry, function (m, y, v, T, N, k) {
          if (y) {
            r.minimumIntegerDigits = v.length;
          } else {
            if (T && N) {
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
    if (Xp.test(u.stem)) {
      r.minimumIntegerDigits = u.stem.length;
      continue;
    }
    if (vd.test(u.stem)) {
      if (u.options.length > 1) {
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      }
      u.stem.replace(vd, function (m, y, v, T, N, k) {
        if (v === "*") {
          r.minimumFractionDigits = y.length;
        } else if (T && T[0] === "#") {
          r.maximumFractionDigits = T.length;
        } else if (N && k) {
          r.minimumFractionDigits = N.length;
          r.maximumFractionDigits = N.length + k.length;
        } else {
          r.minimumFractionDigits = y.length;
          r.maximumFractionDigits = y.length;
        }
        return "";
      });
      var f = u.options[0];
      if (f === "w") {
        r = $($({}, r), {
          trailingZeroDisplay: "stripIfInteger"
        });
      } else if (f) {
        r = $($({}, r), _d(f));
      }
      continue;
    }
    if (Wp.test(u.stem)) {
      r = $($({}, r), _d(u.stem));
      continue;
    }
    var d = Yp(u.stem);
    if (d) {
      r = $($({}, r), d);
    }
    var h = Ly(u.stem);
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
function Ay(t, r) {
  var o = "";
  for (var a = 0; a < t.length; a++) {
    var u = t.charAt(a);
    if (u === "j") {
      var f = 0;
      for (; a + 1 < t.length && t.charAt(a + 1) === u;) {
        f++;
        a++;
      }
      var d = 1 + (f & 1);
      var h = f < 2 ? 1 : 3 + (f >> 1);
      var m = "a";
      var y = Dy(r);
      for ((y == "H" || y == "k") && (h = 0); h-- > 0;) {
        o += m;
      }
      while (d-- > 0) {
        o = y + o;
      }
    } else if (u === "J") {
      o += "H";
    } else {
      o += u;
    }
  }
  return o;
}
function Dy(t) {
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
var My = new RegExp(`^${Vp.source}*`);
var Fy = new RegExp(`${Vp.source}*\$`);
function oe(t, r) {
  return {
    start: t,
    end: r
  };
}
var by = !!String.prototype.startsWith && "_a".startsWith("a", 1);
var Hy = !!String.fromCodePoint;
var By = !!Object.fromEntries;
var Uy = !!String.prototype.codePointAt;
var jy = !!String.prototype.trimStart;
var zy = !!String.prototype.trimEnd;
var $y = !!Number.isSafeInteger;
var Gy = $y ? Number.isSafeInteger : function (t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
};
var xu = true;
try {
  var Vy = Kp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  xu = Vy.exec("a")?.[0] === "a";
} catch {
  xu = false;
}
var Sd = by ? function (r, o, a) {
  return r.startsWith(o, a);
} : function (r, o, a) {
  return r.slice(a, a + o.length) === o;
};
var Iu = Hy ? String.fromCodePoint : function () {
  var r = [];
  for (var o = 0; o < arguments.length; o++) {
    r[o] = arguments[o];
  }
  var a = "";
  for (var u = r.length, f = 0, d; u > f;) {
    d = r[f++];
    if (d > 1114111) {
      throw RangeError(d + " is not a valid code point");
    }
    a += d < 65536 ? String.fromCharCode(d) : String.fromCharCode(((d -= 65536) >> 10) + 55296, d % 1024 + 56320);
  }
  return a;
};
var wd = By ? Object.fromEntries : function (r) {
  var o = {};
  for (var a = 0, u = r; a < u.length; a++) {
    var f = u[a];
    var d = f[0];
    var h = f[1];
    o[d] = h;
  }
  return o;
};
var Qp = Uy ? function (r, o) {
  return r.codePointAt(o);
} : function (r, o) {
  var a = r.length;
  if (!(o < 0) && !(o >= a)) {
    var u = r.charCodeAt(o);
    var f;
    if (u < 55296 || u > 56319 || o + 1 === a || (f = r.charCodeAt(o + 1)) < 56320 || f > 57343) {
      return u;
    } else {
      return (u - 55296 << 10) + (f - 56320) + 65536;
    }
  }
};
var Wy = jy ? function (r) {
  return r.trimStart();
} : function (r) {
  return r.replace(My, "");
};
var Xy = zy ? function (r) {
  return r.trimEnd();
} : function (r) {
  return r.replace(Fy, "");
};
function Kp(t, r) {
  return new RegExp(t, r);
}
var Nu;
if (xu) {
  var Td = Kp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Nu = function (r, o) {
    Td.lastIndex = o;
    var u = Td.exec(r);
    return u[1] ?? "";
  };
} else {
  Nu = function (r, o) {
    var a = [];
    for (;;) {
      var u = Qp(r, o);
      if (u === undefined || qp(u) || qy(u)) {
        break;
      }
      a.push(u);
      o += u >= 65536 ? 2 : 1;
    }
    return Iu.apply(undefined, a);
  };
}
var Yy = function () {
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
      var f = this.char();
      if (f === 123) {
        var d = this.parseArgument(r, a);
        if (d.err) {
          return d;
        }
        u.push(d.val);
      } else {
        if (f === 125 && r > 0) {
          break;
        }
        if (f === 35 && (o === "plural" || o === "selectordinal")) {
          var h = this.clonePosition();
          this.bump();
          u.push({
            type: _e.pound,
            location: oe(h, this.clonePosition())
          });
        } else if (f === 60 && !this.ignoreTag && this.peek() === 47) {
          if (a) {
            break;
          }
          return this.error(re.UNMATCHED_CLOSING_TAG, oe(this.clonePosition(), this.clonePosition()));
        } else if (f === 60 && !this.ignoreTag && ku(this.peek() || 0)) {
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
      var f = this.parseMessage(r + 1, o, true);
      if (f.err) {
        return f;
      }
      var d = f.val;
      var h = this.clonePosition();
      if (this.bumpIf("</")) {
        if (this.isEOF() || !ku(this.char())) {
          return this.error(re.INVALID_TAG, oe(h, this.clonePosition()));
        }
        var m = this.clonePosition();
        var y = this.parseTagName();
        if (u !== y) {
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
    for (this.bump(); !this.isEOF() && Ky(this.char());) {
      this.bump();
    }
    return this.message.slice(r, this.offset());
  };
  t.prototype.parseLiteral = function (r, o) {
    var a = this.clonePosition();
    var u = "";
    while (true) {
      var f = this.tryParseQuote(o);
      if (f) {
        u += f;
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
    if (!this.isEOF() && this.char() === 60 && (this.ignoreTag || !Qy(this.peek() || 0))) {
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
    return Iu.apply(undefined, o);
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
      return Iu(a);
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
    var a = Nu(this.message, o);
    var u = o + a.length;
    this.bumpTo(u);
    var f = this.clonePosition();
    var d = oe(r, f);
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
          var y = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var v = this.clonePosition();
            var T = this.parseSimpleArgStyleIfPossible();
            if (T.err) {
              return T;
            }
            var N = Xy(T.val);
            if (N.length === 0) {
              return this.error(re.EXPECT_ARGUMENT_STYLE, oe(this.clonePosition(), this.clonePosition()));
            }
            var k = oe(v, this.clonePosition());
            y = {
              style: N,
              styleLocation: k
            };
          }
          var D = this.tryParseArgumentClose(u);
          if (D.err) {
            return D;
          }
          var M = oe(u, this.clonePosition());
          if (y && Sd(y == null ? undefined : y.style, "::", 0)) {
            var H = Wy(y.style.slice(2));
            if (h === "number") {
              var T = this.parseNumberSkeletonFromString(H, y.styleLocation);
              if (T.err) {
                return T;
              } else {
                return {
                  val: {
                    type: _e.number,
                    value: a,
                    location: M,
                    style: T.val
                  },
                  err: null
                };
              }
            } else {
              if (H.length === 0) {
                return this.error(re.EXPECT_DATE_TIME_SKELETON, M);
              }
              var ne = H;
              if (this.locale) {
                ne = Ay(H, this.locale);
              }
              var N = {
                type: Er.dateTime,
                pattern: ne,
                location: y.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Ny(ne) : {}
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
              style: (y == null ? undefined : y.style) ?? null
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
          var A = 0;
          if (h !== "select" && ie.value === "offset") {
            if (!this.bumpIf(":")) {
              return this.error(re.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, oe(this.clonePosition(), this.clonePosition()));
            }
            this.bumpSpace();
            var T = this.tryParseDecimalInteger(re.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, re.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (T.err) {
              return T;
            }
            this.bumpSpace();
            ie = this.parseIdentifierIfPossible();
            A = T.val;
          }
          var ce = this.tryParsePluralOrSelectOptions(r, h, o, ie);
          if (ce.err) {
            return ce;
          }
          var D = this.tryParseArgumentClose(u);
          if (D.err) {
            return D;
          }
          var Re = oe(u, this.clonePosition());
          if (h === "select") {
            return {
              val: {
                type: _e.select,
                value: a,
                options: wd(ce.val),
                location: Re
              },
              err: null
            };
          } else {
            return {
              val: {
                type: _e.plural,
                value: a,
                options: wd(ce.val),
                offset: A,
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
      a = Cy(r);
    } catch {
      return this.error(re.INVALID_NUMBER_SKELETON, o);
    }
    return {
      val: {
        type: Er.number,
        tokens: a,
        location: o,
        parsedOptions: this.shouldParseSkeletons ? Oy(a) : {}
      },
      err: null
    };
  };
  t.prototype.tryParsePluralOrSelectOptions = function (r, o, a, u) {
    var f;
    var d = false;
    var h = [];
    var m = new Set();
    var y = u.value;
    var v = u.location;
    while (true) {
      if (y.length === 0) {
        var T = this.clonePosition();
        if (o !== "select" && this.bumpIf("=")) {
          var N = this.tryParseDecimalInteger(re.EXPECT_PLURAL_ARGUMENT_SELECTOR, re.INVALID_PLURAL_ARGUMENT_SELECTOR);
          if (N.err) {
            return N;
          }
          v = oe(T, this.clonePosition());
          y = this.message.slice(T.offset, this.offset());
        } else {
          break;
        }
      }
      if (m.has(y)) {
        return this.error(o === "select" ? re.DUPLICATE_SELECT_ARGUMENT_SELECTOR : re.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, v);
      }
      if (y === "other") {
        d = true;
      }
      this.bumpSpace();
      var k = this.clonePosition();
      if (!this.bumpIf("{")) {
        return this.error(o === "select" ? re.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : re.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, oe(this.clonePosition(), this.clonePosition()));
      }
      var D = this.parseMessage(r + 1, o, a);
      if (D.err) {
        return D;
      }
      var M = this.tryParseArgumentClose(k);
      if (M.err) {
        return M;
      }
      h.push([y, {
        value: D.val,
        location: oe(k, this.clonePosition())
      }]);
      m.add(y);
      this.bumpSpace();
      f = this.parseIdentifierIfPossible();
      y = f.value;
      v = f.location;
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
    var f = false;
    var d = 0;
    for (; !this.isEOF();) {
      var h = this.char();
      if (h >= 48 && h <= 57) {
        f = true;
        d = d * 10 + (h - 48);
        this.bump();
      } else {
        break;
      }
    }
    var m = oe(u, this.clonePosition());
    if (f) {
      d *= a;
      if (Gy(d)) {
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
    var o = Qp(this.message, r);
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
    if (Sd(this.message, r, this.offset())) {
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
    while (!this.isEOF() && qp(this.char())) {
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
function ku(t) {
  return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function Qy(t) {
  return ku(t) || t === 47;
}
function Ky(t) {
  return t === 45 || t === 46 || t >= 48 && t <= 57 || t === 95 || t >= 97 && t <= 122 || t >= 65 && t <= 90 || t == 183 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039;
}
function qp(t) {
  return t >= 9 && t <= 13 || t === 32 || t === 133 || t >= 8206 && t <= 8207 || t === 8232 || t === 8233;
}
function qy(t) {
  return t >= 33 && t <= 35 || t === 36 || t >= 37 && t <= 39 || t === 40 || t === 41 || t === 42 || t === 43 || t === 44 || t === 45 || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || t === 91 || t === 92 || t === 93 || t === 94 || t === 96 || t === 123 || t === 124 || t === 125 || t === 126 || t === 161 || t >= 162 && t <= 165 || t === 166 || t === 167 || t === 169 || t === 171 || t === 172 || t === 174 || t === 176 || t === 177 || t === 182 || t === 187 || t === 191 || t === 215 || t === 247 || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || t === 8216 || t === 8217 || t === 8218 || t >= 8219 && t <= 8220 || t === 8221 || t === 8222 || t === 8223 || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || t === 8249 || t === 8250 || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || t === 8260 || t === 8261 || t === 8262 || t >= 8263 && t <= 8273 || t === 8274 || t === 8275 || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || t === 8608 || t >= 8609 && t <= 8610 || t === 8611 || t >= 8612 && t <= 8613 || t === 8614 || t >= 8615 && t <= 8621 || t === 8622 || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || t === 8658 || t === 8659 || t === 8660 || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || t === 8968 || t === 8969 || t === 8970 || t === 8971 || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9000 || t === 9001 || t === 9002 || t >= 9003 && t <= 9083 || t === 9084 || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || t === 9655 || t >= 9656 && t <= 9664 || t === 9665 || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || t === 9839 || t >= 9840 && t <= 10087 || t === 10088 || t === 10089 || t === 10090 || t === 10091 || t === 10092 || t === 10093 || t === 10094 || t === 10095 || t === 10096 || t === 10097 || t === 10098 || t === 10099 || t === 10100 || t === 10101 || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || t === 10181 || t === 10182 || t >= 10183 && t <= 10213 || t === 10214 || t === 10215 || t === 10216 || t === 10217 || t === 10218 || t === 10219 || t === 10220 || t === 10221 || t === 10222 || t === 10223 || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || t === 10627 || t === 10628 || t === 10629 || t === 10630 || t === 10631 || t === 10632 || t === 10633 || t === 10634 || t === 10635 || t === 10636 || t === 10637 || t === 10638 || t === 10639 || t === 10640 || t === 10641 || t === 10642 || t === 10643 || t === 10644 || t === 10645 || t === 10646 || t === 10647 || t === 10648 || t >= 10649 && t <= 10711 || t === 10712 || t === 10713 || t === 10714 || t === 10715 || t >= 10716 && t <= 10747 || t === 10748 || t === 10749 || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || t === 11158 || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || t === 11778 || t === 11779 || t === 11780 || t === 11781 || t >= 11782 && t <= 11784 || t === 11785 || t === 11786 || t === 11787 || t === 11788 || t === 11789 || t >= 11790 && t <= 11798 || t === 11799 || t >= 11800 && t <= 11801 || t === 11802 || t === 11803 || t === 11804 || t === 11805 || t >= 11806 && t <= 11807 || t === 11808 || t === 11809 || t === 11810 || t === 11811 || t === 11812 || t === 11813 || t === 11814 || t === 11815 || t === 11816 || t === 11817 || t >= 11818 && t <= 11822 || t === 11823 || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || t === 11840 || t === 11841 || t === 11842 || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || t === 11858 || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || t === 12296 || t === 12297 || t === 12298 || t === 12299 || t === 12300 || t === 12301 || t === 12302 || t === 12303 || t === 12304 || t === 12305 || t >= 12306 && t <= 12307 || t === 12308 || t === 12309 || t === 12310 || t === 12311 || t === 12312 || t === 12313 || t === 12314 || t === 12315 || t === 12316 || t === 12317 || t >= 12318 && t <= 12319 || t === 12320 || t === 12336 || t === 64830 || t === 64831 || t >= 65093 && t <= 65094;
}
function Cu(t) {
  t.forEach(function (r) {
    delete r.location;
    if (jp(r) || zp(r)) {
      for (var o in r.options) {
        delete r.options[o].location;
        Cu(r.options[o].value);
      }
    } else if (Hp(r) && Gp(r.style) || (Bp(r) || Up(r)) && Tu(r.style)) {
      delete r.style.location;
    } else if ($p(r)) {
      Cu(r.children);
    }
  });
}
function Zy(t, r = {}) {
  r = $({
    shouldParseSkeletons: true,
    requiresOtherClause: true
  }, r);
  var o = new Yy(t, r).parse();
  if (o.err) {
    var a = SyntaxError(re[o.err.kind]);
    a.location = o.err.location;
    a.originalMessage = o.err.message;
    throw a;
  }
  if (r == null || !r.captureLocation) {
    Cu(o.val);
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
    var f = t.call(this, o) || this;
    f.code = a;
    f.originalMessage = u;
    return f;
  }
  r.prototype.toString = function () {
    return `[formatjs Error: ${this.code}] ${this.message}`;
  };
  return r;
}(Error);
var xd = function (t) {
  gt(r, t);
  function r(o, a, u, f) {
    return t.call(this, `Invalid values for "${o}": "${a}". Options are "${Object.keys(u).join("\", \"")}"`, Bt.INVALID_VALUE, f) || this;
  }
  return r;
}(In);
var Jy = function (t) {
  gt(r, t);
  function r(o, a, u) {
    return t.call(this, `Value for "${o}" must be of type ${a}`, Bt.INVALID_VALUE, u) || this;
  }
  return r;
}(In);
var e0 = function (t) {
  gt(r, t);
  function r(o, a) {
    return t.call(this, `The intl string context variable "${o}" was not provided to the string "${a}"`, Bt.MISSING_VALUE, a) || this;
  }
  return r;
}(In);
var Ve;
(function (t) {
  t[t.literal = 0] = "literal";
  t[t.object = 1] = "object";
})(Ve ||= {});
function t0(t) {
  if (t.length < 2) {
    return t;
  } else {
    return t.reduce(function (r, o) {
      var a = r[r.length - 1];
      if (!a || a.type !== Ve.literal || o.type !== Ve.literal) {
        r.push(o);
      } else {
        a.value += o.value;
      }
      return r;
    }, []);
  }
}
function Zp(t) {
  return typeof t == "function";
}
function Wo(t, r, o, a, u, f, d) {
  if (t.length === 1 && yd(t[0])) {
    return [{
      type: Ve.literal,
      value: t[0].value
    }];
  }
  var h = [];
  for (var m = 0, y = t; m < y.length; m++) {
    var v = y[m];
    if (yd(v)) {
      h.push({
        type: Ve.literal,
        value: v.value
      });
      continue;
    }
    if (xy(v)) {
      if (typeof f == "number") {
        h.push({
          type: Ve.literal,
          value: o.getNumberFormat(r).format(f)
        });
      }
      continue;
    }
    var T = v.value;
    if (!u || !(T in u)) {
      throw new e0(T, d);
    }
    var N = u[T];
    if (Ty(v)) {
      if (!N || typeof N == "string" || typeof N == "number") {
        N = typeof N == "string" || typeof N == "number" ? String(N) : "";
      }
      h.push({
        type: typeof N == "string" ? Ve.literal : Ve.object,
        value: N
      });
      continue;
    }
    if (Bp(v)) {
      var k = typeof v.style == "string" ? a.date[v.style] : Tu(v.style) ? v.style.parsedOptions : undefined;
      h.push({
        type: Ve.literal,
        value: o.getDateTimeFormat(r, k).format(N)
      });
      continue;
    }
    if (Up(v)) {
      var k = typeof v.style == "string" ? a.time[v.style] : Tu(v.style) ? v.style.parsedOptions : a.time.medium;
      h.push({
        type: Ve.literal,
        value: o.getDateTimeFormat(r, k).format(N)
      });
      continue;
    }
    if (Hp(v)) {
      var k = typeof v.style == "string" ? a.number[v.style] : Gp(v.style) ? v.style.parsedOptions : undefined;
      if (k && k.scale) {
        N = N * (k.scale || 1);
      }
      h.push({
        type: Ve.literal,
        value: o.getNumberFormat(r, k).format(N)
      });
      continue;
    }
    if ($p(v)) {
      var D = v.children;
      var M = v.value;
      var H = u[M];
      if (!Zp(H)) {
        throw new Jy(M, "function", d);
      }
      var ne = Wo(D, r, o, a, u, f);
      var q = H(ne.map(function (A) {
        return A.value;
      }));
      if (!Array.isArray(q)) {
        q = [q];
      }
      h.push.apply(h, q.map(function (A) {
        return {
          type: typeof A == "string" ? Ve.literal : Ve.object,
          value: A
        };
      }));
    }
    if (jp(v)) {
      var Q = v.options[N] || v.options.other;
      if (!Q) {
        throw new xd(v.value, N, Object.keys(v.options), d);
      }
      h.push.apply(h, Wo(Q.value, r, o, a, u));
      continue;
    }
    if (zp(v)) {
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
        throw new xd(v.value, N, Object.keys(v.options), d);
      }
      h.push.apply(h, Wo(Q.value, r, o, a, u, N - (v.offset || 0)));
      continue;
    }
  }
  return t0(h);
}
function n0(t, r) {
  if (r) {
    return $($($({}, t || {}), r || {}), Object.keys(t).reduce(function (o, a) {
      o[a] = $($({}, t[a]), r[a] || {});
      return o;
    }, {}));
  } else {
    return t;
  }
}
function r0(t, r) {
  if (r) {
    return Object.keys(t).reduce(function (o, a) {
      o[a] = n0(t[a], r[a]);
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
function i0(t = {
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
      return new ((r = Intl.NumberFormat).bind.apply(r, bt([undefined], o, false)))();
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
      return new ((r = Intl.DateTimeFormat).bind.apply(r, bt([undefined], o, false)))();
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
      return new ((r = Intl.PluralRules).bind.apply(r, bt([undefined], o, false)))();
    }, {
      cache: au(t.pluralRules),
      strategy: Mt.variadic
    })
  };
}
var Jp = function () {
  function t(r, o = t.defaultLocale, a, u) {
    var f = this;
    this.formatterCache = {
      number: {},
      dateTime: {},
      pluralRules: {}
    };
    this.format = function (m) {
      var y = f.formatToParts(m);
      if (y.length === 1) {
        return y[0].value;
      }
      var v = y.reduce(function (T, N) {
        if (!T.length || N.type !== Ve.literal || typeof T[T.length - 1] != "string") {
          T.push(N.value);
        } else {
          T[T.length - 1] += N.value;
        }
        return T;
      }, []);
      if (v.length <= 1) {
        return v[0] || "";
      } else {
        return v;
      }
    };
    this.formatToParts = function (m) {
      return Wo(f.ast, f.locales, f.formatters, f.formats, m, undefined, f.message);
    };
    this.resolvedOptions = function () {
      var m;
      return {
        locale: ((m = f.resolvedLocale) === null || m === undefined ? undefined : m.toString()) || Intl.NumberFormat.supportedLocalesOf(f.locales)[0]
      };
    };
    this.getAst = function () {
      return f.ast;
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
    this.formats = r0(t.formats, a);
    this.formatters = u && u.formatters || i0(this.formatterCache);
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
  t.__parse = Zy;
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
    var f = this;
    var d = u ? u instanceof Error ? u : new Error(String(u)) : undefined;
    f = t.call(this, `[@formatjs/intl Error ${o}] ${a}
${d ? `
${d.message}
${d.stack}` : ""}`) || this;
    f.code = o;
    if (typeof Error.captureStackTrace == "function") {
      Error.captureStackTrace(f, r);
    }
    return f;
  }
  return r;
}(Error);
var o0 = function (t) {
  gt(r, t);
  function r(o, a) {
    return t.call(this, $n.UNSUPPORTED_FORMATTER, o, a) || this;
  }
  return r;
}(Ei);
var s0 = function (t) {
  gt(r, t);
  function r(o, a) {
    return t.call(this, $n.INVALID_CONFIG, o, a) || this;
  }
  return r;
}(Ei);
var Id = function (t) {
  gt(r, t);
  function r(o, a) {
    return t.call(this, $n.MISSING_DATA, o, a) || this;
  }
  return r;
}(Ei);
var yt = function (t) {
  gt(r, t);
  function r(o, a, u) {
    var f = t.call(this, $n.FORMAT_ERROR, `${o}
Locale: ${a}
`, u) || this;
    f.locale = a;
    return f;
  }
  return r;
}(Ei);
var uu = function (t) {
  gt(r, t);
  function r(o, a, u, f) {
    var d = t.call(this, `${o}
MessageID: ${u == null ? undefined : u.id}
Default Message: ${u == null ? undefined : u.defaultMessage}
Description: ${u == null ? undefined : u.description}
`, a, f) || this;
    d.descriptor = u;
    d.locale = a;
    return d;
  }
  return r;
}(yt);
var a0 = function (t) {
  gt(r, t);
  function r(o, a) {
    var u = t.call(this, $n.MISSING_TRANSLATION, `Missing message: "${o.id}" for locale "${a}", using ${o.defaultMessage ? `default message (${typeof o.defaultMessage == "string" ? o.defaultMessage : o.defaultMessage.map(function (f) {
      return f.value ?? JSON.stringify(f);
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
function u0(t) {}
function l0(t) {}
var eh = {
  formats: {},
  messages: {},
  timeZone: undefined,
  defaultLocale: "en",
  defaultFormats: {},
  fallbackOnEmptyString: true,
  onError: u0,
  onWarn: l0
};
function th() {
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
function c0(t = th()) {
  var r = Intl.RelativeTimeFormat;
  var o = Intl.ListFormat;
  var a = Intl.DisplayNames;
  var u = Dt(function () {
    var h;
    var m = [];
    for (var y = 0; y < arguments.length; y++) {
      m[y] = arguments[y];
    }
    return new ((h = Intl.DateTimeFormat).bind.apply(h, bt([undefined], m, false)))();
  }, {
    cache: Un(t.dateTime),
    strategy: Mt.variadic
  });
  var f = Dt(function () {
    var h;
    var m = [];
    for (var y = 0; y < arguments.length; y++) {
      m[y] = arguments[y];
    }
    return new ((h = Intl.NumberFormat).bind.apply(h, bt([undefined], m, false)))();
  }, {
    cache: Un(t.number),
    strategy: Mt.variadic
  });
  var d = Dt(function () {
    var h;
    var m = [];
    for (var y = 0; y < arguments.length; y++) {
      m[y] = arguments[y];
    }
    return new ((h = Intl.PluralRules).bind.apply(h, bt([undefined], m, false)))();
  }, {
    cache: Un(t.pluralRules),
    strategy: Mt.variadic
  });
  return {
    getDateTimeFormat: u,
    getNumberFormat: f,
    getMessageFormat: Dt(function (h, m, y, v) {
      return new Jp(h, m, y, $({
        formatters: {
          getNumberFormat: f,
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
      return new (r.bind.apply(r, bt([undefined], h, false)))();
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
      return new (o.bind.apply(o, bt([undefined], h, false)))();
    }, {
      cache: Un(t.list),
      strategy: Mt.variadic
    }),
    getDisplayNames: Dt(function () {
      var h = [];
      for (var m = 0; m < arguments.length; m++) {
        h[m] = arguments[m];
      }
      return new (a.bind.apply(a, bt([undefined], h, false)))();
    }, {
      cache: Un(t.displayNames),
      strategy: Mt.variadic
    })
  };
}
function Yu(t, r, o, a) {
  var u = t && t[r];
  var f;
  if (u) {
    f = u[o];
  }
  if (f) {
    return f;
  }
  a(new o0(`No ${r} format named: ${o}`));
}
function Uo(t, r) {
  return Object.keys(t).reduce(function (o, a) {
    o[a] = $({
      timeZone: r
    }, t[a]);
    return o;
  }, {});
}
function Nd(t, r) {
  var o = Object.keys($($({}, t), r));
  return o.reduce(function (a, u) {
    a[u] = $($({}, t[u] || {}), r[u] || {});
    return a;
  }, {});
}
function kd(t, r) {
  if (!r) {
    return t;
  }
  var o = Jp.formats;
  return $($($({}, o), t), {
    date: Nd(Uo(o.date, r), Uo(t.date || {}, r)),
    time: Nd(Uo(o.time, r), Uo(t.time || {}, r))
  });
}
function Pu(t, r, o, a, u) {
  var f = t.locale;
  var d = t.formats;
  var h = t.messages;
  var m = t.defaultLocale;
  var y = t.defaultFormats;
  var v = t.fallbackOnEmptyString;
  var T = t.onError;
  var N = t.timeZone;
  var k = t.defaultRichTextElements;
  if (o === undefined) {
    o = {
      id: ""
    };
  }
  var D = o.id;
  var M = o.defaultMessage;
  if (!D) {
    var H = new Error("[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
    throw H;
  }
  var ne = String(D);
  var q = h && Object.prototype.hasOwnProperty.call(h, ne) && h[ne];
  if (Array.isArray(q) && q.length === 1 && q[0].type === _e.literal) {
    return q[0].value;
  }
  if (!a && q && typeof q == "string" && !k) {
    return q.replace(/'\{(.*?)\}'/gi, "{$1}");
  }
  a = $($({}, k), a || {});
  d = kd(d, N);
  y = kd(y, N);
  if (!q) {
    if (v === false && q === "") {
      return q;
    }
    if (!M || f && f.toLowerCase() !== m.toLowerCase()) {
      T(new a0(o, f));
    }
    if (M) {
      try {
        var Q = r.getMessageFormat(M, m, y, u);
        return Q.format(a);
      } catch (ie) {
        T(new uu(`Error formatting default message for: "${ne}", rendering default message verbatim`, f, o, ie));
        if (typeof M == "string") {
          return M;
        } else {
          return ne;
        }
      }
    }
    return ne;
  }
  try {
    var Q = r.getMessageFormat(q, f, d, $({
      formatters: r
    }, u || {}));
    return Q.format(a);
  } catch (ie) {
    T(new uu(`Error formatting message: "${ne}", using ${M ? "default message" : "id"} as fallback.`, f, o, ie));
  }
  if (M) {
    try {
      var Q = r.getMessageFormat(M, m, y, u);
      return Q.format(a);
    } catch (ie) {
      T(new uu(`Error formatting the default message for: "${ne}", rendering message verbatim`, f, o, ie));
    }
  }
  if (typeof q == "string") {
    return q;
  } else if (typeof M == "string") {
    return M;
  } else {
    return ne;
  }
}
var f0 = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];
function Si(t, r, o, a) {
  var u = t.locale;
  var f = t.formats;
  var d = t.onError;
  var h = t.timeZone;
  if (a === undefined) {
    a = {};
  }
  var m = a.format;
  var y = $($({}, h && {
    timeZone: h
  }), m && Yu(f, r, m, d));
  var v = Ir(a, f0, y);
  if (r === "time" && !v.hour && !v.minute && !v.second && !v.timeStyle && !v.dateStyle) {
    v = $($({}, v), {
      hour: "numeric",
      minute: "numeric"
    });
  }
  return o(u, v);
}
function d0(t, r) {
  var o = [];
  for (var a = 2; a < arguments.length; a++) {
    o[a - 2] = arguments[a];
  }
  var u = o[0];
  var f = o[1];
  var d = f === undefined ? {} : f;
  var h = typeof u == "string" ? new Date(u || 0) : u;
  try {
    return Si(t, "date", r, d).format(h);
  } catch (m) {
    t.onError(new yt("Error formatting date.", t.locale, m));
  }
  return String(h);
}
function p0(t, r) {
  var o = [];
  for (var a = 2; a < arguments.length; a++) {
    o[a - 2] = arguments[a];
  }
  var u = o[0];
  var f = o[1];
  var d = f === undefined ? {} : f;
  var h = typeof u == "string" ? new Date(u || 0) : u;
  try {
    return Si(t, "time", r, d).format(h);
  } catch (m) {
    t.onError(new yt("Error formatting time.", t.locale, m));
  }
  return String(h);
}
function h0(t, r) {
  var o = [];
  for (var a = 2; a < arguments.length; a++) {
    o[a - 2] = arguments[a];
  }
  var u = o[0];
  var f = o[1];
  var d = o[2];
  var h = d === undefined ? {} : d;
  var m = typeof u == "string" ? new Date(u || 0) : u;
  var y = typeof f == "string" ? new Date(f || 0) : f;
  try {
    return Si(t, "dateTimeRange", r, h).formatRange(m, y);
  } catch (v) {
    t.onError(new yt("Error formatting date time range.", t.locale, v));
  }
  return String(m);
}
function m0(t, r) {
  var o = [];
  for (var a = 2; a < arguments.length; a++) {
    o[a - 2] = arguments[a];
  }
  var u = o[0];
  var f = o[1];
  var d = f === undefined ? {} : f;
  var h = typeof u == "string" ? new Date(u || 0) : u;
  try {
    return Si(t, "date", r, d).formatToParts(h);
  } catch (m) {
    t.onError(new yt("Error formatting date.", t.locale, m));
  }
  return [];
}
function g0(t, r) {
  var o = [];
  for (var a = 2; a < arguments.length; a++) {
    o[a - 2] = arguments[a];
  }
  var u = o[0];
  var f = o[1];
  var d = f === undefined ? {} : f;
  var h = typeof u == "string" ? new Date(u || 0) : u;
  try {
    return Si(t, "time", r, d).formatToParts(h);
  } catch (m) {
    t.onError(new yt("Error formatting time.", t.locale, m));
  }
  return [];
}
var y0 = ["style", "type", "fallback", "languageDisplay"];
function v0(t, r, o, a) {
  var u = t.locale;
  var f = t.onError;
  var d = Intl.DisplayNames;
  if (!d) {
    f(new In(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`, Bt.MISSING_INTL_API));
  }
  var h = Ir(a, y0);
  try {
    return r(u, h).of(o);
  } catch (m) {
    f(new yt("Error formatting display name.", u, m));
  }
}
var _0 = ["type", "style"];
var Cd = Date.now();
function E0(t) {
  return `${Cd}_${t}_${Cd}`;
}
function S0(t, r, o, a = {}) {
  var u = nh(t, r, o, a).reduce(function (f, d) {
    var h = d.value;
    if (typeof h != "string") {
      f.push(h);
    } else if (typeof f[f.length - 1] == "string") {
      f[f.length - 1] += h;
    } else {
      f.push(h);
    }
    return f;
  }, []);
  if (u.length === 1) {
    return u[0];
  } else if (u.length === 0) {
    return "";
  } else {
    return u;
  }
}
function nh(t, r, o, a) {
  var u = t.locale;
  var f = t.onError;
  if (a === undefined) {
    a = {};
  }
  var d = Intl.ListFormat;
  if (!d) {
    f(new In(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`, Bt.MISSING_INTL_API));
  }
  var h = Ir(a, _0);
  try {
    var m = {};
    var y = o.map(function (v, T) {
      if (typeof v == "object") {
        var N = E0(T);
        m[N] = v;
        return N;
      }
      return String(v);
    });
    return r(u, h).formatToParts(y).map(function (v) {
      if (v.type === "literal") {
        return v;
      } else {
        return $($({}, v), {
          value: m[v.value] || v.value
        });
      }
    });
  } catch (v) {
    f(new yt("Error formatting list.", u, v));
  }
  return o;
}
var w0 = ["type"];
function T0(t, r, o, a) {
  var u = t.locale;
  var f = t.onError;
  if (a === undefined) {
    a = {};
  }
  if (!Intl.PluralRules) {
    f(new In(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Bt.MISSING_INTL_API));
  }
  var d = Ir(a, w0);
  try {
    return r(u, d).select(o);
  } catch (h) {
    f(new yt("Error formatting plural.", u, h));
  }
  return "other";
}
var x0 = ["numeric", "style"];
function I0(t, r, o) {
  var a = t.locale;
  var u = t.formats;
  var f = t.onError;
  if (o === undefined) {
    o = {};
  }
  var d = o.format;
  var h = !!d && Yu(u, "relative", d, f) || {};
  var m = Ir(o, x0, h);
  return r(a, m);
}
function N0(t, r, o, a, u = {}) {
  a ||= "second";
  var f = Intl.RelativeTimeFormat;
  if (!f) {
    t.onError(new In(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`, Bt.MISSING_INTL_API));
  }
  try {
    return I0(t, r, u).format(o, a);
  } catch (d) {
    t.onError(new yt("Error formatting relative time.", t.locale, d));
  }
  return String(o);
}
var k0 = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];
function rh(t, r, o) {
  var a = t.locale;
  var u = t.formats;
  var f = t.onError;
  if (o === undefined) {
    o = {};
  }
  var d = o.format;
  var h = d && Yu(u, "number", d, f) || {};
  var m = Ir(o, k0, h);
  return r(a, m);
}
function C0(t, r, o, a = {}) {
  try {
    return rh(t, r, a).format(o);
  } catch (u) {
    t.onError(new yt("Error formatting number.", t.locale, u));
  }
  return String(o);
}
function P0(t, r, o, a = {}) {
  try {
    return rh(t, r, a).formatToParts(o);
  } catch (u) {
    t.onError(new yt("Error formatting number.", t.locale, u));
  }
  return [];
}
function R0(t) {
  var r = t ? t[Object.keys(t)[0]] : undefined;
  return typeof r == "string";
}
function L0(t) {
  if (t.onWarn && t.defaultRichTextElements && R0(t.messages || {})) {
    t.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`);
  }
}
function O0(t, r) {
  var o = c0(r);
  var a = $($({}, eh), t);
  var u = a.locale;
  var f = a.defaultLocale;
  var d = a.onError;
  if (u) {
    if (!Intl.NumberFormat.supportedLocalesOf(u).length && d) {
      d(new Id(`Missing locale data for locale: "${u}" in Intl.NumberFormat. Using default locale: "${f}" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details`));
    } else if (!Intl.DateTimeFormat.supportedLocalesOf(u).length && d) {
      d(new Id(`Missing locale data for locale: "${u}" in Intl.DateTimeFormat. Using default locale: "${f}" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details`));
    }
  } else {
    if (d) {
      d(new s0(`"locale" was not configured, using "${f}" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details`));
    }
    a.locale = a.defaultLocale || "en";
  }
  L0(a);
  return $($({}, a), {
    formatters: o,
    formatNumber: C0.bind(null, a, o.getNumberFormat),
    formatNumberToParts: P0.bind(null, a, o.getNumberFormat),
    formatRelativeTime: N0.bind(null, a, o.getRelativeTimeFormat),
    formatDate: d0.bind(null, a, o.getDateTimeFormat),
    formatDateToParts: m0.bind(null, a, o.getDateTimeFormat),
    formatTime: p0.bind(null, a, o.getDateTimeFormat),
    formatDateTimeRange: h0.bind(null, a, o.getDateTimeFormat),
    formatTimeToParts: g0.bind(null, a, o.getDateTimeFormat),
    formatPlural: T0.bind(null, a, o.getPluralRules),
    formatMessage: Pu.bind(null, a, o),
    $t: Pu.bind(null, a, o),
    formatList: S0.bind(null, a, o.getListFormat),
    formatListToParts: nh.bind(null, a, o.getListFormat),
    formatDisplayName: v0.bind(null, a, o.getDisplayNames)
  });
}
function A0(t, r, o = Error) {
  if (!t) {
    throw new o(r);
  }
}
function ih(t) {
  A0(t, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
var oh = $($({}, eh), {
  textComponent: Xe.Fragment
});
var D0 = {
  key: 42
};
function M0(t) {
  if (Xe.isValidElement(t)) {
    return Xe.createElement(Xe.Fragment, D0, t);
  } else {
    return t;
  }
}
function F0(t) {
  return Xe.Children.map(t, M0) ?? [];
}
function b0(t) {
  return function (r) {
    return t(Xe.Children.toArray(r));
  };
}
function H0(t, r) {
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
  for (var f = 0; f < u; f++) {
    var d = o[f];
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
var Pd;
function B0() {
  if (Pd) {
    return fe;
  }
  Pd = 1;
  var t = typeof Symbol == "function" && Symbol.for;
  var r = t ? Symbol.for("react.element") : 60103;
  var o = t ? Symbol.for("react.portal") : 60106;
  var a = t ? Symbol.for("react.fragment") : 60107;
  var u = t ? Symbol.for("react.strict_mode") : 60108;
  var f = t ? Symbol.for("react.profiler") : 60114;
  var d = t ? Symbol.for("react.provider") : 60109;
  var h = t ? Symbol.for("react.context") : 60110;
  var m = t ? Symbol.for("react.async_mode") : 60111;
  var y = t ? Symbol.for("react.concurrent_mode") : 60111;
  var v = t ? Symbol.for("react.forward_ref") : 60112;
  var T = t ? Symbol.for("react.suspense") : 60113;
  var N = t ? Symbol.for("react.suspense_list") : 60120;
  var k = t ? Symbol.for("react.memo") : 60115;
  var D = t ? Symbol.for("react.lazy") : 60116;
  var M = t ? Symbol.for("react.block") : 60121;
  var H = t ? Symbol.for("react.fundamental") : 60117;
  var ne = t ? Symbol.for("react.responder") : 60118;
  var q = t ? Symbol.for("react.scope") : 60119;
  function Q(A) {
    if (typeof A == "object" && A !== null) {
      var ce = A.$$typeof;
      switch (ce) {
        case r:
          A = A.type;
          switch (A) {
            case m:
            case y:
            case a:
            case f:
            case u:
            case T:
              return A;
            default:
              A = A && A.$$typeof;
              switch (A) {
                case h:
                case v:
                case D:
                case k:
                case d:
                  return A;
                default:
                  return ce;
              }
          }
        case o:
          return ce;
      }
    }
  }
  function ie(A) {
    return Q(A) === y;
  }
  fe.AsyncMode = m;
  fe.ConcurrentMode = y;
  fe.ContextConsumer = h;
  fe.ContextProvider = d;
  fe.Element = r;
  fe.ForwardRef = v;
  fe.Fragment = a;
  fe.Lazy = D;
  fe.Memo = k;
  fe.Portal = o;
  fe.Profiler = f;
  fe.StrictMode = u;
  fe.Suspense = T;
  fe.isAsyncMode = function (A) {
    return ie(A) || Q(A) === m;
  };
  fe.isConcurrentMode = ie;
  fe.isContextConsumer = function (A) {
    return Q(A) === h;
  };
  fe.isContextProvider = function (A) {
    return Q(A) === d;
  };
  fe.isElement = function (A) {
    return typeof A == "object" && A !== null && A.$$typeof === r;
  };
  fe.isForwardRef = function (A) {
    return Q(A) === v;
  };
  fe.isFragment = function (A) {
    return Q(A) === a;
  };
  fe.isLazy = function (A) {
    return Q(A) === D;
  };
  fe.isMemo = function (A) {
    return Q(A) === k;
  };
  fe.isPortal = function (A) {
    return Q(A) === o;
  };
  fe.isProfiler = function (A) {
    return Q(A) === f;
  };
  fe.isStrictMode = function (A) {
    return Q(A) === u;
  };
  fe.isSuspense = function (A) {
    return Q(A) === T;
  };
  fe.isValidElementType = function (A) {
    return typeof A == "string" || typeof A == "function" || A === a || A === y || A === f || A === u || A === T || A === N || typeof A == "object" && A !== null && (A.$$typeof === D || A.$$typeof === k || A.$$typeof === d || A.$$typeof === h || A.$$typeof === v || A.$$typeof === H || A.$$typeof === ne || A.$$typeof === q || A.$$typeof === M);
  };
  fe.typeOf = Q;
  return fe;
}
var Rd;
function U0() {
  if (!Rd) {
    Rd = 1;
    lu.exports = B0();
  }
  return lu.exports;
}
var cu;
var Ld;
function j0() {
  if (Ld) {
    return cu;
  }
  Ld = 1;
  var t = U0();
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
  var f = {
    [t.ForwardRef]: a,
    [t.Memo]: u
  };
  function d(D) {
    if (t.isMemo(D)) {
      return u;
    } else {
      return f[D.$$typeof] || r;
    }
  }
  var h = Object.defineProperty;
  var m = Object.getOwnPropertyNames;
  var y = Object.getOwnPropertySymbols;
  var v = Object.getOwnPropertyDescriptor;
  var T = Object.getPrototypeOf;
  var N = Object.prototype;
  function k(D, M, H) {
    if (typeof M != "string") {
      if (N) {
        var ne = T(M);
        if (ne && ne !== N) {
          k(D, ne, H);
        }
      }
      var q = m(M);
      if (y) {
        q = q.concat(y(M));
      }
      var Q = d(D);
      var ie = d(M);
      for (var A = 0; A < q.length; ++A) {
        var ce = q[A];
        if (!o[ce] && (!H || !H[ce]) && (!ie || !ie[ce]) && (!Q || !Q[ce])) {
          var Re = v(M, ce);
          try {
            h(D, ce, Re);
          } catch {}
        }
      }
    }
    return D;
  }
  cu = k;
  return cu;
}
j0();
var Qu = typeof window !== "undefined" && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ ||= Xe.createContext(null) : Xe.createContext(null);
Qu.Consumer;
var z0 = Qu.Provider;
var $0 = z0;
var G0 = Qu;
function sh() {
  var t = Xe.useContext(G0);
  ih(t);
  return t;
}
var Ru;
(function (t) {
  t.formatDate = "FormattedDate";
  t.formatTime = "FormattedTime";
  t.formatNumber = "FormattedNumber";
  t.formatList = "FormattedList";
  t.formatDisplayName = "FormattedDisplayName";
})(Ru ||= {});
var Lu;
(function (t) {
  t.formatDate = "FormattedDateParts";
  t.formatTime = "FormattedTimeParts";
  t.formatNumber = "FormattedNumberParts";
  t.formatList = "FormattedListParts";
})(Lu ||= {});
function ah(t) {
  function r(o) {
    var a = sh();
    var u = o.value;
    var f = o.children;
    var d = es(o, ["value", "children"]);
    var h = typeof u == "string" ? new Date(u || 0) : u;
    var m = t === "formatDate" ? a.formatDateToParts(h, d) : a.formatTimeToParts(h, d);
    return f(m);
  }
  r.displayName = Lu[t];
  return r;
}
function wi(t) {
  function r(o) {
    var a = sh();
    var u = o.value;
    var f = o.children;
    var d = es(o, ["value", "children"]);
    var h = a[t](u, d);
    if (typeof f == "function") {
      return f(h);
    }
    var m = a.textComponent || Xe.Fragment;
    return Xe.createElement(m, null, h);
  }
  r.displayName = Ru[t];
  return r;
}
function uh(t) {
  return t && Object.keys(t).reduce(function (r, o) {
    var a = t[o];
    r[o] = Zp(a) ? b0(a) : a;
    return r;
  }, {});
}
function Od(t, r, o, a) {
  var u = [];
  for (var f = 4; f < arguments.length; f++) {
    u[f - 4] = arguments[f];
  }
  var d = uh(a);
  var h = Pu.apply(undefined, bt([t, r, o, d], u, false));
  if (Array.isArray(h)) {
    return F0(h);
  } else {
    return h;
  }
}
function Ad(t, r) {
  var o = t.defaultRichTextElements;
  var a = es(t, ["defaultRichTextElements"]);
  var u = uh(o);
  var f = O0($($($({}, oh), a), {
    defaultRichTextElements: u
  }), r);
  var d = {
    locale: f.locale,
    timeZone: f.timeZone,
    fallbackOnEmptyString: f.fallbackOnEmptyString,
    formats: f.formats,
    defaultLocale: f.defaultLocale,
    defaultFormats: f.defaultFormats,
    messages: f.messages,
    onError: f.onError,
    defaultRichTextElements: u
  };
  return $($({}, f), {
    formatMessage: Od.bind(null, d, f.formatters),
    $t: Od.bind(null, d, f.formatters)
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
var V0 = function (t) {
  gt(r, t);
  function r() {
    var o = t !== null && t.apply(this, arguments) || this;
    o.cache = th();
    o.state = {
      cache: o.cache,
      intl: Ad(fu(o.props), o.cache),
      prevConfig: fu(o.props)
    };
    return o;
  }
  r.getDerivedStateFromProps = function (o, a) {
    var u = a.prevConfig;
    var f = a.cache;
    var d = fu(o);
    if (H0(u, d)) {
      return null;
    } else {
      return {
        intl: Ad(d, f),
        prevConfig: d
      };
    }
  };
  r.prototype.render = function () {
    ih(this.state.intl);
    return Xe.createElement($0, {
      value: this.state.intl
    }, this.props.children);
  };
  r.displayName = "IntlProvider";
  r.defaultProps = oh;
  return r;
}(Xe.PureComponent);
wi("formatDate");
wi("formatTime");
wi("formatNumber");
wi("formatList");
wi("formatDisplayName");
ah("formatDate");
ah("formatTime");
var Op;
const Ht = (Op = globalThis["claude.hybrid"]) == null ? undefined : Op.DesktopIntl;
var Ap;
const W0 = ((Ap = Ht == null ? undefined : Ht.getInitialLocale) == null ? undefined : Ap.call(Ht)) ?? Promise.reject(new Error("DesktopIntl bridge is not exposed in this window"));
const X0 = W0.then(({
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
function Y0(t) {
  const [r, o] = Xe.useState(null);
  Xe.useEffect(() => {
    var a;
    X0.then(u => o(f => f ?? u));
    if ((a = Ht == null ? undefined : Ht.onLocaleChanged) == null) {
      return undefined;
    } else {
      return a.call(Ht, (u, f) => {
        o({
          locale: u,
          messages: f
        });
      });
    }
  }, []);
  if (r === null) {
    return null;
  } else {
    return <V0 locale={r.locale} messages={r.messages} {...t} />;
  }
}
async function lh(t, r, o) {
  const a = await r;
  const _Component = "default" in a ? a.default : a;
  const f = my.createRoot(t);
  const d = o ?? {};
  f.render(<Y0><_Component {...d} /></Y0>);
  return () => {
    f.unmount();
  };
}
window.attachReactToElement = lh;
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
const Q0 = ["debug", "info", "warn", "error", "log", "assert", "trace"];
const K0 = "Sentry Logger ";
const qo = {};
function kr(t) {
  if (!("console" in he)) {
    return t();
  }
  const r = he.console;
  const o = {};
  const a = Object.keys(qo);
  a.forEach(u => {
    const f = qo[u];
    o[u] = r[u];
    r[u] = f;
  });
  try {
    return t();
  } finally {
    a.forEach(u => {
      r[u] = o[u];
    });
  }
}
function q0() {
  qu().enabled = true;
}
function Z0() {
  qu().enabled = false;
}
function ch() {
  return qu().enabled;
}
function J0(...t) {
  Ku("log", ...t);
}
function ev(...t) {
  Ku("warn", ...t);
}
function tv(...t) {
  Ku("error", ...t);
}
function Ku(t, ...r) {
  if (Z && ch()) {
    kr(() => {
      he.console[t](`${K0}[${t}]:`, ...r);
    });
  }
}
function qu() {
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
  enable: q0,
  disable: Z0,
  isEnabled: ch,
  log: J0,
  warn: ev,
  error: tv
};
const fh = 50;
const wn = "?";
const Dd = /\(error: (.*)\)/;
const Md = /captureMessage|captureException/;
function dh(...t) {
  const r = t.sort((o, a) => o[0] - a[0]).map(o => o[1]);
  return (o, a = 0, u = 0) => {
    const f = [];
    const d = o.split(`
`);
    for (let h = a; h < d.length; h++) {
      let m = d[h];
      if (m.length > 1024) {
        m = m.slice(0, 1024);
      }
      const y = Dd.test(m) ? m.replace(Dd, "$1") : m;
      if (!y.match(/\S*Error: /)) {
        for (const v of r) {
          const T = v(y);
          if (T) {
            f.push(T);
            break;
          }
        }
        if (f.length >= fh + u) {
          break;
        }
      }
    }
    return ph(f.slice(u));
  };
}
function nv(t) {
  if (Array.isArray(t)) {
    return dh(...t);
  } else {
    return t;
  }
}
function ph(t) {
  if (!t.length) {
    return [];
  }
  const r = Array.from(t);
  if (/sentryWrapped/.test(jo(r).function || "")) {
    r.pop();
  }
  r.reverse();
  if (Md.test(jo(r).function || "")) {
    r.pop();
    if (Md.test(jo(r).function || "")) {
      r.pop();
    }
  }
  return r.slice(0, fh).map(o => ({
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
function Fd(t) {
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
function hh(t) {
  if ("__v_isVNode" in t && t.__v_isVNode) {
    return "[VueVNode]";
  } else {
    return "[VueViewModel]";
  }
}
const Xo = {};
const bd = {};
function Wn(t, r) {
  Xo[t] = Xo[t] || [];
  Xo[t].push(r);
}
function Xn(t, r) {
  if (!bd[t]) {
    bd[t] = true;
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
function rv(t) {
  const r = "error";
  Wn(r, t);
  Xn(r, iv);
}
function iv() {
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
function ov(t) {
  const r = "unhandledrejection";
  Wn(r, t);
  Xn(r, sv);
}
function sv() {
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
const mh = Object.prototype.toString;
function Zu(t) {
  switch (mh.call(t)) {
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
  return mh.call(t) === `[object ${r}]`;
}
function gh(t) {
  return Cr(t, "ErrorEvent");
}
function Hd(t) {
  return Cr(t, "DOMError");
}
function av(t) {
  return Cr(t, "DOMException");
}
function qt(t) {
  return Cr(t, "String");
}
function Ju(t) {
  return typeof t == "object" && t !== null && "__sentry_template_string__" in t && "__sentry_template_values__" in t;
}
function rs(t) {
  return t === null || Ju(t) || typeof t != "object" && typeof t != "function";
}
function yi(t) {
  return Cr(t, "Object");
}
function is(t) {
  return typeof Event !== "undefined" && xn(t, Event);
}
function uv(t) {
  return typeof Element !== "undefined" && xn(t, Element);
}
function lv(t) {
  return Cr(t, "RegExp");
}
function Ti(t) {
  return t != null && !!t.then && typeof t.then == "function";
}
function cv(t) {
  return yi(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t;
}
function xn(t, r) {
  try {
    return t instanceof r;
  } catch {
    return false;
  }
}
function yh(t) {
  return typeof t == "object" && t !== null && (!!t.__isVue || !!t._isVue || !!t.__v_isVNode);
}
function fv(t) {
  return typeof Request !== "undefined" && xn(t, Request);
}
const el = he;
const dv = 80;
function vh(t, r = {}) {
  if (!t) {
    return "<unknown>";
  }
  try {
    let o = t;
    const a = 5;
    const u = [];
    let f = 0;
    let d = 0;
    const h = " > ";
    const m = h.length;
    let y;
    const v = Array.isArray(r) ? r : r.keyAttrs;
    const T = !Array.isArray(r) && r.maxStringLength || dv;
    while (o && f++ < a && (y = pv(o, v), y !== "html" && (!(f > 1) || !(d + u.length * m + y.length >= T)))) {
      u.push(y);
      d += y.length;
      o = o.parentNode;
    }
    return u.reverse().join(h);
  } catch {
    return "<unknown>";
  }
}
function pv(t, r) {
  const o = t;
  const a = [];
  if (o == null || !o.tagName) {
    return "";
  }
  if (el.HTMLElement && o instanceof HTMLElement && o.dataset) {
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
  const f = ["aria-label", "type", "name", "title", "alt"];
  for (const d of f) {
    const h = o.getAttribute(d);
    if (h) {
      a.push(`[${d}="${h}"]`);
    }
  }
  return a.join("");
}
function tl() {
  try {
    return el.document.location.href;
  } catch {
    return "";
  }
}
function hv(t) {
  if (!el.HTMLElement) {
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
    _h(u, a);
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
function _h(t, r) {
  try {
    const o = r.prototype || {};
    t.prototype = r.prototype = o;
    Gn(t, "__sentry_original__", r);
  } catch {}
}
function nl(t) {
  return t.__sentry_original__;
}
function Eh(t) {
  if (Zu(t)) {
    return {
      message: t.message,
      name: t.name,
      stack: t.stack,
      ...Ud(t)
    };
  }
  if (is(t)) {
    const r = {
      type: t.type,
      target: Bd(t.target),
      currentTarget: Bd(t.currentTarget),
      ...Ud(t)
    };
    if (typeof CustomEvent !== "undefined" && xn(t, CustomEvent)) {
      r.detail = t.detail;
    }
    return r;
  } else {
    return t;
  }
}
function Bd(t) {
  try {
    if (uv(t)) {
      return vh(t);
    } else {
      return Object.prototype.toString.call(t);
    }
  } catch {
    return "<unknown>";
  }
}
function Ud(t) {
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
function mv(t) {
  const r = Object.keys(Eh(t));
  r.sort();
  if (r[0]) {
    return r.join(", ");
  } else {
    return "[object has no keys]";
  }
}
function Ou(t, r = 0) {
  if (typeof t != "string" || r === 0 || t.length <= r) {
    return t;
  } else {
    return `${t.slice(0, r)}...`;
  }
}
function jd(t, r) {
  if (!Array.isArray(t)) {
    return "";
  }
  const o = [];
  for (let a = 0; a < t.length; a++) {
    const u = t[a];
    try {
      if (yh(u)) {
        o.push(hh(u));
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
    if (lv(r)) {
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
function gv() {
  const t = he;
  return t.crypto || t.msCrypto;
}
let mu;
function yv() {
  return Math.random() * 16;
}
function lt(t = gv()) {
  try {
    if (t != null && t.randomUUID) {
      return t.randomUUID().replace(/-/g, "");
    }
  } catch {}
  mu ||= "10000000100040008000100000000000";
  return mu.replace(/[018]/g, r => (r ^ (yv() & 15) >> r / 4).toString(16));
}
function Sh(t) {
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
  const a = Sh(t);
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
function Au(t, r, o) {
  const a = t.exception = t.exception || {};
  const u = a.values = a.values || [];
  const f = u[0] = u[0] || {};
  f.value ||= r || "";
  f.type ||= "Error";
}
function Sr(t, r) {
  const o = Sh(t);
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
    const f = {
      ...(u == null ? undefined : u.data),
      ...r.data
    };
    o.mechanism.data = f;
  }
}
function zd(t) {
  if (vv(t)) {
    return true;
  }
  try {
    Gn(t, "__sentry_captured__", true);
  } catch {}
  return false;
}
function vv(t) {
  try {
    return t.__sentry_captured__;
  } catch {}
}
const wh = 1000;
function xi() {
  return Date.now() / wh;
}
function _v() {
  const {
    performance: t
  } = he;
  if (t == null || !t.now || !t.timeOrigin) {
    return xi;
  }
  const r = t.timeOrigin;
  return () => (r + t.now()) / wh;
}
let $d;
function Zt() {
  return ($d ??= _v())();
}
function Ev(t) {
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
    toJSON: () => wv(o)
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
function Sv(t, r) {
  let o = {};
  if (t.status === "ok") {
    o = {
      status: "exited"
    };
  }
  wr(t, o);
}
function wv(t) {
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
function Gd() {
  return lt();
}
function Th() {
  return lt().substring(16);
}
const Du = "_sentrySpan";
function Vd(t, r) {
  if (r) {
    Gn(t, Du, r);
  } else {
    delete t[Du];
  }
}
function Wd(t) {
  return t[Du];
}
const Tv = 100;
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
      traceId: Gd(),
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
    Vd(r, Wd(this));
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
      attributes: f,
      extra: d,
      user: h,
      contexts: m,
      level: y,
      fingerprint: v = [],
      propagationContext: T
    } = a || {};
    this._tags = {
      ...this._tags,
      ...u
    };
    this._attributes = {
      ...this._attributes,
      ...f
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
    if (y) {
      this._level = y;
    }
    if (v.length) {
      this._fingerprint = v;
    }
    if (T) {
      this._propagationContext = T;
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
    Vd(this, undefined);
    this._attachments = [];
    this.setPropagationContext({
      traceId: Gd(),
      sampleRand: Math.random()
    });
    this._notifyScopeListeners();
    return this;
  }
  addBreadcrumb(r, o) {
    var f;
    const a = typeof o == "number" ? o : Tv;
    if (a <= 0) {
      return this;
    }
    const u = {
      timestamp: xi(),
      ...r,
      message: r.message ? Ou(r.message, 2048) : r.message
    };
    this._breadcrumbs.push(u);
    if (this._breadcrumbs.length > a) {
      this._breadcrumbs = this._breadcrumbs.slice(-a);
      if ((f = this._client) != null) {
        f.recordDroppedEvent("buffer_overflow", "log_item");
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
      span: Wd(this)
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
    const f = (a == null ? undefined : a.syntheticException) ?? new Error(r);
    this._client.captureMessage(r, o, {
      originalException: r,
      syntheticException: f,
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
function xv() {
  return Nr("defaultCurrentScope", () => new Jt());
}
function Iv() {
  return Nr("defaultIsolationScope", () => new Jt());
}
class Nv {
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
  return r.stack = r.stack || new Nv(xv(), Iv());
}
function kv(t) {
  return Tr().withScope(t);
}
function Cv(t, r) {
  const o = Tr();
  return o.withScope(() => {
    o.getStackTop().scope = t;
    return r(t);
  });
}
function Xd(t) {
  return Tr().withScope(() => t(Tr().getIsolationScope()));
}
function Pv() {
  return {
    withIsolationScope: Xd,
    withScope: kv,
    withSetScope: Cv,
    withSetIsolationScope: (t, r) => Xd(r),
    getCurrentScope: () => Tr().getScope(),
    getIsolationScope: () => Tr().getIsolationScope()
  };
}
function rl(t) {
  const r = ns(t);
  if (r.acs) {
    return r.acs;
  } else {
    return Pv();
  }
}
function Ut() {
  const t = ts();
  return rl(t).getCurrentScope();
}
function Yn() {
  const t = ts();
  return rl(t).getIsolationScope();
}
function il() {
  return Nr("globalScope", () => new Jt());
}
function Rv(...t) {
  const r = ts();
  const o = rl(r);
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
function ze() {
  return Ut().getClient();
}
function Lv(t) {
  const r = t.getPropagationContext();
  const {
    traceId: o,
    parentSpanId: a,
    propagationSpanId: u
  } = r;
  const f = {
    trace_id: o,
    span_id: u || Th()
  };
  if (a) {
    f.parent_span_id = a;
  }
  return f;
}
const Ov = "sentry.source";
const Av = "sentry.sample_rate";
const Dv = "sentry.previous_trace_sample_rate";
const Mv = "sentry.op";
const Fv = "sentry.origin";
const xh = "sentry.profile_id";
const Ih = "sentry.exclusive_time";
const bv = 0;
const Hv = 1;
const Bv = "_sentryScope";
const Uv = "_sentryIsolationScope";
function jv(t) {
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
function Nh(t) {
  const r = t;
  return {
    scope: r[Bv],
    isolationScope: jv(r[Uv])
  };
}
const zv = "sentry-";
const $v = /^sentry-/;
function Gv(t) {
  const r = Vv(t);
  if (!r) {
    return;
  }
  const o = Object.entries(r).reduce((a, [u, f]) => {
    if (u.match($v)) {
      const d = u.slice(zv.length);
      a[d] = f;
    }
    return a;
  }, {});
  if (Object.keys(o).length > 0) {
    return o;
  }
}
function Vv(t) {
  if (!!t && (!!qt(t) || !!Array.isArray(t))) {
    if (Array.isArray(t)) {
      return t.reduce((r, o) => {
        const a = Yd(o);
        Object.entries(a).forEach(([u, f]) => {
          r[u] = f;
        });
        return r;
      }, {});
    } else {
      return Yd(t);
    }
  }
}
function Yd(t) {
  return t.split(",").map(r => {
    const o = r.indexOf("=");
    if (o === -1) {
      return [];
    }
    const a = r.slice(0, o);
    const u = r.slice(o + 1);
    return [a, u].map(f => {
      try {
        return decodeURIComponent(f.trim());
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
const Wv = /^o(\d+)\./;
const Xv = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function Yv(t) {
  return t === "http" || t === "https";
}
function Ni(t, r = false) {
  const {
    host: o,
    path: a,
    pass: u,
    port: f,
    projectId: d,
    protocol: h,
    publicKey: m
  } = t;
  return `${h}://${m}${r && u ? `:${u}` : ""}@${o}${f ? `:${f}` : ""}/${a && `${a}/`}${d}`;
}
function Qv(t) {
  const r = Xv.exec(t);
  if (!r) {
    kr(() => {
      console.error(`Invalid Sentry Dsn: ${t}`);
    });
    return;
  }
  const [o, a, u = "", f = "", d = "", h = ""] = r.slice(1);
  let m = "";
  let y = h;
  const v = y.split("/");
  if (v.length > 1) {
    m = v.slice(0, -1).join("/");
    y = v.pop();
  }
  if (y) {
    const T = y.match(/^\d+/);
    if (T) {
      y = T[0];
    }
  }
  return kh({
    host: f,
    pass: u,
    path: m,
    projectId: y,
    port: d,
    protocol: o,
    publicKey: a
  });
}
function kh(t) {
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
function Kv(t) {
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
    if (Yv(a)) {
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
function qv(t) {
  const r = t.match(Wv);
  if (r == null) {
    return undefined;
  } else {
    return r[1];
  }
}
function Zv(t) {
  const r = t.getOptions();
  const {
    host: o
  } = t.getDsn() || {};
  let a;
  if (r.orgId) {
    a = String(r.orgId);
  } else if (o) {
    a = qv(o);
  }
  return a;
}
function Jv(t) {
  const r = typeof t == "string" ? Qv(t) : kh(t);
  if (!!r && !!Kv(r)) {
    return r;
  }
}
function e_(t) {
  if (typeof t == "boolean") {
    return Number(t);
  }
  const r = typeof t == "string" ? parseFloat(t) : t;
  if (typeof r == "number" && !isNaN(r) && !(r < 0) && !(r > 1)) {
    return r;
  }
}
const Ch = 1;
let Qd = false;
function t_(t) {
  const {
    spanId: r,
    traceId: o,
    isRemote: a
  } = t.spanContext();
  const u = a ? r : ol(t).parent_span_id;
  const f = Nh(t).scope;
  const d = a ? (f == null ? undefined : f.getPropagationContext().propagationSpanId) || Th() : r;
  return {
    parent_span_id: u,
    span_id: d,
    trace_id: o
  };
}
function n_(t) {
  if (t && t.length > 0) {
    return t.map(({
      context: {
        spanId: r,
        traceId: o,
        traceFlags: a,
        ...u
      },
      attributes: f
    }) => ({
      span_id: r,
      trace_id: o,
      sampled: a === Ch,
      attributes: f,
      ...u
    }));
  }
}
function Kd(t) {
  if (typeof t == "number") {
    return qd(t);
  } else if (Array.isArray(t)) {
    return t[0] + t[1] / 1000000000;
  } else if (t instanceof Date) {
    return qd(t.getTime());
  } else {
    return Zt();
  }
}
function qd(t) {
  if (t > 9999999999) {
    return t / 1000;
  } else {
    return t;
  }
}
function ol(t) {
  var a;
  if (i_(t)) {
    return t.getSpanJSON();
  }
  const {
    spanId: r,
    traceId: o
  } = t.spanContext();
  if (r_(t)) {
    const {
      attributes: u,
      startTime: f,
      name: d,
      endTime: h,
      status: m,
      links: y
    } = t;
    const v = "parentSpanId" in t ? t.parentSpanId : "parentSpanContext" in t ? (a = t.parentSpanContext) == null ? undefined : a.spanId : undefined;
    return {
      span_id: r,
      trace_id: o,
      data: u,
      description: d,
      parent_span_id: v,
      start_timestamp: Kd(f),
      timestamp: Kd(h) || undefined,
      status: s_(m),
      op: u[Mv],
      origin: u[Fv],
      links: n_(y)
    };
  }
  return {
    span_id: r,
    trace_id: o,
    start_timestamp: 0,
    data: {}
  };
}
function r_(t) {
  const r = t;
  return !!r.attributes && !!r.startTime && !!r.name && !!r.endTime && !!r.status;
}
function i_(t) {
  return typeof t.getSpanJSON == "function";
}
function o_(t) {
  const {
    traceFlags: r
  } = t.spanContext();
  return r === Ch;
}
function s_(t) {
  if (!!t && t.code !== bv) {
    if (t.code === Hv) {
      return "ok";
    } else {
      return t.message || "internal_error";
    }
  }
}
const a_ = "_sentryRootSpan";
function Ph(t) {
  return t[a_] || t;
}
function Zd() {
  if (!Qd) {
    kr(() => {
      console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.");
    });
    Qd = true;
  }
}
function u_(t) {
  var o;
  if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) {
    return false;
  }
  const r = (o = ze()) == null ? undefined : o.getOptions();
  return !!r && (r.tracesSampleRate != null || !!r.tracesSampler);
}
function Jd(t) {
  Y.log(`Ignoring span ${t.op} - ${t.description} because it matches \`ignoreSpans\`.`);
}
function ep(t, r) {
  if (r == null || !r.length || !t.description) {
    return false;
  }
  for (const o of r) {
    if (c_(o)) {
      if (Yo(t.description, o)) {
        if (Z) {
          Jd(t);
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
        Jd(t);
      }
      return true;
    }
  }
  return false;
}
function l_(t, r) {
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
function c_(t) {
  return typeof t == "string" || t instanceof RegExp;
}
const sl = "production";
const f_ = "_frozenDsc";
function Rh(t, r) {
  const o = r.getOptions();
  const {
    publicKey: a
  } = r.getDsn() || {};
  const u = {
    environment: o.environment || sl,
    release: o.release,
    public_key: a,
    trace_id: t,
    org_id: Zv(r)
  };
  r.emit("createDsc", u);
  return u;
}
function d_(t, r) {
  const o = r.getPropagationContext();
  return o.dsc || Rh(o.traceId, t);
}
function p_(t) {
  var D;
  const r = ze();
  if (!r) {
    return {};
  }
  const o = Ph(t);
  const a = ol(o);
  const u = a.data;
  const f = o.spanContext().traceState;
  const d = (f == null ? undefined : f.get("sentry.sample_rate")) ?? u[Av] ?? u[Dv];
  function h(M) {
    if (typeof d == "number" || typeof d == "string") {
      M.sample_rate = `${d}`;
    }
    return M;
  }
  const m = o[f_];
  if (m) {
    return h(m);
  }
  const y = f == null ? undefined : f.get("sentry.dsc");
  const v = y && Gv(y);
  if (v) {
    return h(v);
  }
  const T = Rh(t.spanContext().traceId, r);
  const N = u[Ov];
  const k = a.description;
  if (N !== "url" && k) {
    T.transaction = k;
  }
  if (u_()) {
    T.sampled = String(o_(o));
    T.sample_rand = (f == null ? undefined : f.get("sentry.sample_rand")) ?? ((D = Nh(o).scope) == null ? undefined : D.getPropagationContext().sampleRand.toString());
  }
  h(T);
  r.emit("createDsc", T, o);
  return T;
}
function Ft(t, r = 100, o = Infinity) {
  try {
    return Mu("", t, r, o);
  } catch (a) {
    return {
      ERROR: `**non-serializable** (${a})`
    };
  }
}
function Lh(t, r = 3, o = 102400) {
  const a = Ft(t, r);
  if (y_(a) > o) {
    return Lh(t, r - 1, o);
  } else {
    return a;
  }
}
function Mu(t, r, o = Infinity, a = Infinity, u = v_()) {
  const [f, d] = u;
  if (r == null || ["boolean", "string"].includes(typeof r) || typeof r == "number" && Number.isFinite(r)) {
    return r;
  }
  const h = h_(t, r);
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
  if (f(r)) {
    return "[Circular ~]";
  }
  const y = r;
  if (y && typeof y.toJSON == "function") {
    try {
      const k = y.toJSON();
      return Mu("", k, m - 1, a, u);
    } catch {}
  }
  const v = Array.isArray(r) ? [] : {};
  let T = 0;
  const N = Eh(r);
  for (const k in N) {
    if (!Object.prototype.hasOwnProperty.call(N, k)) {
      continue;
    }
    if (T >= a) {
      v[k] = "[MaxProperties ~]";
      break;
    }
    const D = N[k];
    v[k] = Mu(k, D, m - 1, a, u);
    T++;
  }
  d(r);
  return v;
}
function h_(t, r) {
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
    if (yh(r)) {
      return hh(r);
    }
    if (cv(r)) {
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
    const o = m_(r);
    if (/^HTML(\w*)Element$/.test(o)) {
      return `[HTMLElement: ${o}]`;
    } else {
      return `[object ${o}]`;
    }
  } catch (o) {
    return `**non-serializable** (${o})`;
  }
}
function m_(t) {
  const r = Object.getPrototypeOf(t);
  if (r != null && r.constructor) {
    return r.constructor.name;
  } else {
    return "null prototype";
  }
}
function g_(t) {
  return ~-encodeURI(t).split(/%..|./).length;
}
function y_(t) {
  return g_(JSON.stringify(t));
}
function v_() {
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
function __(t, r) {
  const [o, a] = t;
  return [o, [...a, r]];
}
function tp(t, r) {
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
function E_(t) {
  const [r, o] = t;
  let a = JSON.stringify(r);
  function u(f) {
    if (typeof a == "string") {
      a = typeof f == "string" ? a + f : [Fu(a), f];
    } else {
      a.push(typeof f == "string" ? Fu(f) : f);
    }
  }
  for (const f of o) {
    const [d, h] = f;
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
        m = JSON.stringify(Ft(h));
      }
      u(m);
    }
  }
  if (typeof a == "string") {
    return a;
  } else {
    return S_(a);
  }
}
function S_(t) {
  const r = t.reduce((u, f) => u + f.length, 0);
  const o = new Uint8Array(r);
  let a = 0;
  for (const u of t) {
    o.set(u, a);
    a += u.length;
  }
  return o;
}
function w_(t) {
  const r = typeof t.data == "string" ? Fu(t.data) : t.data;
  return [{
    type: "attachment",
    length: r.length,
    filename: t.filename,
    content_type: t.contentType,
    attachment_type: t.attachmentType
  }, r];
}
const T_ = {
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
function np(t) {
  return T_[t];
}
function Oh(t) {
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
function x_(t, r, o, a) {
  var f;
  const u = (f = t.sdkProcessingMetadata) == null ? undefined : f.dynamicSamplingContext;
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
function I_(t, r) {
  var a;
  var u;
  var f;
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
    settings: (f = t.sdk) != null && f.settings || r.settings ? {
      ...((d = t.sdk) == null ? undefined : d.settings),
      ...r.settings
    } : undefined
  };
  return t;
}
function N_(t, r, o, a) {
  const u = Oh(o);
  const f = {
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
  return Pr(f, [d]);
}
function k_(t, r, o, a) {
  const u = Oh(o);
  const f = t.type && t.type !== "replay_event" ? t.type : "event";
  I_(t, o == null ? undefined : o.sdk);
  const d = x_(t, u, a, r);
  delete t.sdkProcessingMetadata;
  return Pr(d, [[{
    type: f
  }, t]]);
}
const gu = 0;
const rp = 1;
const ip = 2;
function ss(t) {
  return new vi(r => {
    r(t);
  });
}
function al(t) {
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
      this._handlers.push([false, f => {
        if (!r) {
          a(f);
        } else {
          try {
            a(r(f));
          } catch (d) {
            u(d);
          }
        }
      }, f => {
        if (!o) {
          u(f);
        } else {
          try {
            a(o(f));
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
      let f;
      return this.then(d => {
        f = false;
        u = d;
        if (r) {
          r();
        }
      }, d => {
        f = true;
        u = d;
        if (r) {
          r();
        }
      }).then(() => {
        if (f) {
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
        if (this._state === rp) {
          o[1](this._value);
        }
        if (this._state === ip) {
          o[2](this._value);
        }
        o[0] = true;
      }
    });
  }
  _runExecutor(r) {
    const o = (f, d) => {
      if (this._state === gu) {
        if (Ti(d)) {
          d.then(a, u);
          return;
        }
        this._state = f;
        this._value = d;
        this._executeHandlers();
      }
    };
    const a = f => {
      o(rp, f);
    };
    const u = f => {
      o(ip, f);
    };
    try {
      r(a, u);
    } catch (f) {
      u(f);
    }
  }
}
function C_(t, r, o, a = 0) {
  try {
    const u = bu(r, o, t, a);
    if (Ti(u)) {
      return u;
    } else {
      return ss(u);
    }
  } catch (u) {
    return al(u);
  }
}
function bu(t, r, o, a) {
  const u = o[a];
  if (!t || !u) {
    return t;
  }
  const f = u({
    ...t
  }, r);
  if (Z && f === null) {
    Y.log(`Event processor "${u.id || "?"}" dropped event`);
  }
  if (Ti(f)) {
    return f.then(d => bu(d, r, o, a + 1));
  } else {
    return bu(f, r, o, a + 1);
  }
}
function P_(t, r) {
  const {
    fingerprint: o,
    span: a,
    breadcrumbs: u,
    sdkProcessingMetadata: f
  } = r;
  R_(t, r);
  if (a) {
    A_(t, a);
  }
  D_(t, o);
  L_(t, u);
  O_(t, f);
}
function Zo(t, r) {
  const {
    extra: o,
    tags: a,
    user: u,
    contexts: f,
    level: d,
    sdkProcessingMetadata: h,
    breadcrumbs: m,
    fingerprint: y,
    eventProcessors: v,
    attachments: T,
    propagationContext: N,
    transactionName: k,
    span: D
  } = r;
  zo(t, "extra", o);
  zo(t, "tags", a);
  zo(t, "user", u);
  zo(t, "contexts", f);
  t.sdkProcessingMetadata = Ii(t.sdkProcessingMetadata, h, 2);
  if (d) {
    t.level = d;
  }
  if (k) {
    t.transactionName = k;
  }
  if (D) {
    t.span = D;
  }
  if (m.length) {
    t.breadcrumbs = [...t.breadcrumbs, ...m];
  }
  if (y.length) {
    t.fingerprint = [...t.fingerprint, ...y];
  }
  if (v.length) {
    t.eventProcessors = [...t.eventProcessors, ...v];
  }
  if (T.length) {
    t.attachments = [...t.attachments, ...T];
  }
  t.propagationContext = {
    ...t.propagationContext,
    ...N
  };
}
function zo(t, r, o) {
  t[r] = Ii(t[r], o, 1);
}
function R_(t, r) {
  const {
    extra: o,
    tags: a,
    user: u,
    contexts: f,
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
  if (Object.keys(f).length) {
    t.contexts = {
      ...f,
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
function L_(t, r) {
  const o = [...(t.breadcrumbs || []), ...r];
  t.breadcrumbs = o.length ? o : undefined;
}
function O_(t, r) {
  t.sdkProcessingMetadata = {
    ...t.sdkProcessingMetadata,
    ...r
  };
}
function A_(t, r) {
  t.contexts = {
    trace: t_(r),
    ...t.contexts
  };
  t.sdkProcessingMetadata = {
    dynamicSamplingContext: p_(r),
    ...t.sdkProcessingMetadata
  };
  const o = Ph(r);
  const a = ol(o).description;
  if (a && !t.transaction && t.type === "transaction") {
    t.transaction = a;
  }
}
function D_(t, r) {
  t.fingerprint = t.fingerprint ? Array.isArray(t.fingerprint) ? t.fingerprint : [t.fingerprint] : [];
  if (r) {
    t.fingerprint = t.fingerprint.concat(r);
  }
  if (!t.fingerprint.length) {
    delete t.fingerprint;
  }
}
let Kt;
let op;
let sp;
let Sn;
function M_(t) {
  const r = he._sentryDebugIds;
  const o = he._debugIds;
  if (!r && !o) {
    return {};
  }
  const a = r ? Object.keys(r) : [];
  const u = o ? Object.keys(o) : [];
  if (Sn && a.length === op && u.length === sp) {
    return Sn;
  }
  op = a.length;
  sp = u.length;
  Sn = {};
  Kt ||= {};
  const f = (d, h) => {
    for (const m of d) {
      const y = h[m];
      const v = Kt == null ? undefined : Kt[m];
      if (v && Sn && y) {
        Sn[v[0]] = y;
        if (Kt) {
          Kt[m] = [v[0], y];
        }
      } else if (y) {
        const T = t(m);
        for (let N = T.length - 1; N >= 0; N--) {
          const k = T[N];
          const D = k == null ? undefined : k.filename;
          if (D && Sn && Kt) {
            Sn[D] = y;
            Kt[m] = [D, y];
            break;
          }
        }
      }
    }
  };
  if (r) {
    f(a, r);
  }
  if (o) {
    f(u, o);
  }
  return Sn;
}
function F_(t, r, o, a, u, f) {
  const {
    normalizeDepth: d = 3,
    normalizeMaxBreadth: h = 1000
  } = t;
  const m = {
    ...r,
    event_id: r.event_id || o.event_id || lt(),
    timestamp: r.timestamp || xi()
  };
  const y = o.integrations || t.integrations.map(H => H.name);
  b_(m, t);
  U_(m, y);
  if (u) {
    u.emit("applyFrameMetadata", r);
  }
  if (r.type === undefined) {
    H_(m, t.stackParser);
  }
  const v = z_(a, o.captureContext);
  if (o.mechanism) {
    Sr(m, o.mechanism);
  }
  const T = u ? u.getEventProcessors() : [];
  const N = il().getScopeData();
  if (f) {
    const H = f.getScopeData();
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
  P_(m, N);
  const D = [...T, ...N.eventProcessors];
  return C_(D, m, o).then(H => {
    if (H) {
      B_(H);
    }
    if (typeof d == "number" && d > 0) {
      return j_(H, d, h);
    } else {
      return H;
    }
  });
}
function b_(t, r) {
  var h;
  var m;
  const {
    environment: o,
    release: a,
    dist: u,
    maxValueLength: f
  } = r;
  t.environment = t.environment || o || sl;
  if (!t.release && a) {
    t.release = a;
  }
  if (!t.dist && u) {
    t.dist = u;
  }
  const d = t.request;
  if (d != null && d.url && f) {
    d.url = Ou(d.url, f);
  }
  if (f) {
    if ((m = (h = t.exception) == null ? undefined : h.values) != null) {
      m.forEach(y => {
        y.value &&= Ou(y.value, f);
      });
    }
  }
}
function H_(t, r) {
  var a;
  var u;
  const o = M_(r);
  if ((u = (a = t.exception) == null ? undefined : a.values) != null) {
    u.forEach(f => {
      var d;
      var h;
      if ((h = (d = f.stacktrace) == null ? undefined : d.frames) != null) {
        h.forEach(m => {
          if (m.filename) {
            m.debug_id = o[m.filename];
          }
        });
      }
    });
  }
}
function B_(t) {
  var a;
  var u;
  const r = {};
  if ((u = (a = t.exception) == null ? undefined : a.values) != null) {
    u.forEach(f => {
      var d;
      var h;
      if ((h = (d = f.stacktrace) == null ? undefined : d.frames) != null) {
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
  Object.entries(r).forEach(([f, d]) => {
    o.push({
      type: "sourcemap",
      code_file: f,
      debug_id: d
    });
  });
}
function U_(t, r) {
  if (r.length > 0) {
    t.sdk = t.sdk || {};
    t.sdk.integrations = [...(t.sdk.integrations || []), ...r];
  }
}
function j_(t, r, o) {
  var u;
  var f;
  if (!t) {
    return null;
  }
  const a = {
    ...t,
    ...(t.breadcrumbs && {
      breadcrumbs: t.breadcrumbs.map(d => ({
        ...d,
        ...(d.data && {
          data: Ft(d.data, r, o)
        })
      }))
    }),
    ...(t.user && {
      user: Ft(t.user, r, o)
    }),
    ...(t.contexts && {
      contexts: Ft(t.contexts, r, o)
    }),
    ...(t.extra && {
      extra: Ft(t.extra, r, o)
    })
  };
  if ((u = t.contexts) != null && u.trace && a.contexts) {
    a.contexts.trace = t.contexts.trace;
    if (t.contexts.trace.data) {
      a.contexts.trace.data = Ft(t.contexts.trace.data, r, o);
    }
  }
  if (t.spans) {
    a.spans = t.spans.map(d => ({
      ...d,
      ...(d.data && {
        data: Ft(d.data, r, o)
      })
    }));
  }
  if ((f = t.contexts) != null && f.flags && a.contexts) {
    a.contexts.flags = Ft(t.contexts.flags, 3, o);
  }
  return a;
}
function z_(t, r) {
  if (!r) {
    return t;
  }
  const o = t ? t.clone() : new Jt();
  o.update(r);
  return o;
}
function $_(t, r) {
  return Ut().captureException(t, undefined);
}
function Ah(t, r) {
  return Ut().captureEvent(t, r);
}
function ap(t) {
  const r = Yn();
  const o = Ut();
  const {
    userAgent: a
  } = he.navigator || {};
  const u = Ev({
    user: o.getUser() || r.getUser(),
    ...(a && {
      userAgent: a
    }),
    ...t
  });
  const f = r.getSession();
  if ((f == null ? undefined : f.status) === "ok") {
    wr(f, {
      status: "exited"
    });
  }
  Dh();
  r.setSession(u);
  return u;
}
function Dh() {
  const t = Yn();
  const o = Ut().getSession() || t.getSession();
  if (o) {
    Sv(o);
  }
  Mh();
  t.setSession();
}
function Mh() {
  const t = Yn();
  const r = ze();
  const o = t.getSession();
  if (o && r) {
    r.captureSession(o);
  }
}
function up(t = false) {
  if (t) {
    Dh();
    return;
  }
  Mh();
}
const G_ = "7";
function V_(t) {
  const r = t.protocol ? `${t.protocol}:` : "";
  const o = t.port ? `:${t.port}` : "";
  return `${r}//${t.host}${o}${t.path ? `/${t.path}` : ""}/api/`;
}
function W_(t) {
  return `${V_(t)}${t.projectId}/envelope/`;
}
function X_(t, r) {
  const o = {
    sentry_version: G_
  };
  if (t.publicKey) {
    o.sentry_key = t.publicKey;
  }
  if (r) {
    o.sentry_client = `${r.name}/${r.version}`;
  }
  return new URLSearchParams(o).toString();
}
function Y_(t, r, o) {
  return r || `${W_(t)}?${X_(t, o)}`;
}
const lp = [];
function Q_(t) {
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
function K_(t) {
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
  return Q_(a);
}
function q_(t, r) {
  const o = {};
  r.forEach(a => {
    if (a) {
      Fh(t, a, o);
    }
  });
  return o;
}
function cp(t, r) {
  for (const o of r) {
    if (o != null && o.afterAllSetup) {
      o.afterAllSetup(t);
    }
  }
}
function Fh(t, r, o) {
  if (o[r.name]) {
    if (Z) {
      Y.log(`Integration skipped because it was already installed: ${r.name}`);
    }
    return;
  }
  o[r.name] = r;
  if (!lp.includes(r.name) && typeof r.setupOnce == "function") {
    r.setupOnce();
    lp.push(r.name);
  }
  if (r.setup && typeof r.setup == "function") {
    r.setup(t);
  }
  if (typeof r.preprocessEvent == "function") {
    const a = r.preprocessEvent.bind(r);
    t.on("preprocessEvent", (u, f) => a(u, f, t));
  }
  if (typeof r.processEvent == "function") {
    const a = r.processEvent.bind(r);
    const u = Object.assign((f, d) => a(f, d, t), {
      id: r.name
    });
    t.addEventProcessor(u);
  }
  if (Z) {
    Y.log(`Integration installed: ${r.name}`);
  }
}
function Z_(t) {
  return [{
    type: "log",
    item_count: t.length,
    content_type: "application/vnd.sentry.items.log+json"
  }, {
    items: t
  }];
}
function J_(t, r, o, a) {
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
  return Pr(u, [Z_(t)]);
}
function bh(t, r) {
  const o = r ?? eE(t) ?? [];
  if (o.length === 0) {
    return;
  }
  const a = t.getOptions();
  const u = J_(o, a._metadata, a.tunnel, t.getDsn());
  Hh().set(t, []);
  t.emit("flushLogs");
  t.sendEnvelope(u);
}
function eE(t) {
  return Hh().get(t);
}
function Hh() {
  return Nr("clientToLogBufferMap", () => new WeakMap());
}
function tE(t) {
  return [{
    type: "trace_metric",
    item_count: t.length,
    content_type: "application/vnd.sentry.items.trace-metric+json"
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
  t.emit("flushMetrics");
  t.sendEnvelope(u);
}
function rE(t) {
  return Uh().get(t);
}
function Uh() {
  return Nr("clientToMetricBufferMap", () => new WeakMap());
}
const ul = Symbol.for("SentryBufferFullError");
function ll(t = 100) {
  const r = new Set();
  function o() {
    return r.size < t;
  }
  function a(d) {
    r.delete(d);
  }
  function u(d) {
    if (!o()) {
      return al(ul);
    }
    const h = d();
    r.add(h);
    h.then(() => a(h), () => a(h));
    return h;
  }
  function f(d) {
    if (!r.size) {
      return ss(true);
    }
    const h = Promise.allSettled(Array.from(r)).then(() => true);
    if (!d) {
      return h;
    }
    const m = [h, new Promise(y => setTimeout(() => y(false), d))];
    return Promise.race(m);
  }
  return {
    get $() {
      return Array.from(r);
    },
    add: u,
    drain: f
  };
}
const iE = 60000;
function oE(t, r = Date.now()) {
  const o = parseInt(`${t}`, 10);
  if (!isNaN(o)) {
    return o * 1000;
  }
  const a = Date.parse(`${t}`);
  if (isNaN(a)) {
    return iE;
  } else {
    return a - r;
  }
}
function sE(t, r) {
  return t[r] || t.all || 0;
}
function aE(t, r, o = Date.now()) {
  return sE(t, r) > o;
}
function uE(t, {
  statusCode: r,
  headers: o
}, a = Date.now()) {
  const u = {
    ...t
  };
  const f = o == null ? undefined : o["x-sentry-rate-limits"];
  const d = o == null ? undefined : o["retry-after"];
  if (f) {
    for (const h of f.trim().split(",")) {
      const [m, y,,, v] = h.split(":", 5);
      const T = parseInt(m, 10);
      const N = (isNaN(T) ? 60 : T) * 1000;
      if (!y) {
        u.all = a + N;
      } else {
        for (const k of y.split(";")) {
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
    u.all = a + oE(d, a);
  } else if (r === 429) {
    u.all = a + 60000;
  }
  return u;
}
const jh = 64;
function zh(t, r, o = ll(t.bufferSize || jh)) {
  let a = {};
  const u = d => o.drain(d);
  function f(d) {
    const h = [];
    tp(d, (T, N) => {
      const k = np(N);
      if (aE(a, k)) {
        t.recordDroppedEvent("ratelimit_backoff", k);
      } else {
        h.push(T);
      }
    });
    if (h.length === 0) {
      return Promise.resolve({});
    }
    const m = Pr(d[0], h);
    const y = T => {
      tp(m, (N, k) => {
        t.recordDroppedEvent(T, np(k));
      });
    };
    const v = () => r({
      body: E_(m)
    }).then(T => {
      if (T.statusCode !== undefined && (T.statusCode < 200 || T.statusCode >= 300) && Z) {
        Y.warn(`Sentry responded with status code ${T.statusCode} to sent event.`);
      }
      a = uE(a, T);
      return T;
    }, T => {
      y("network_error");
      if (Z) {
        Y.error("Encountered error running transport request:", T);
      }
      throw T;
    });
    return o.add(v).then(T => T, T => {
      if (T === ul) {
        if (Z) {
          Y.error("Skipped sending event because buffer is full.");
        }
        y("queue_overflow");
        return Promise.resolve({});
      }
      throw T;
    });
  }
  return {
    send: f,
    flush: u
  };
}
function lE(t, r, o) {
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
function $h(t) {
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
function cE(t) {
  var m;
  const {
    trace_id: r,
    parent_span_id: o,
    span_id: a,
    status: u,
    origin: f,
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
    origin: f,
    profile_id: d == null ? undefined : d[xh],
    exclusive_time: d == null ? undefined : d[Ih],
    measurements: t.measurements,
    is_segment: true
  };
}
function fE(t) {
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
            [xh]: t.profile_id
          }),
          ...(t.exclusive_time && {
            [Ih]: t.exclusive_time
          })
        }
      }
    },
    measurements: t.measurements
  };
}
const fp = "Not capturing exception because it's already been captured.";
const dp = "Discarded session because of missing or non-string release";
const Gh = Symbol.for("SentryInternalError");
const Vh = Symbol.for("SentryDoNotSendEventError");
const dE = 5000;
function Qo(t) {
  return {
    message: t,
    [Gh]: true
  };
}
function yu(t) {
  return {
    message: t,
    [Vh]: true
  };
}
function pp(t) {
  return !!t && typeof t == "object" && Gh in t;
}
function hp(t) {
  return !!t && typeof t == "object" && Vh in t;
}
function mp(t, r, o, a, u) {
  let f = 0;
  let d;
  let h = false;
  t.on(o, () => {
    f = 0;
    clearTimeout(d);
    h = false;
  });
  t.on(r, m => {
    f += a(m);
    if (f >= 800000) {
      u(t);
    } else if (!h) {
      h = true;
      d = setTimeout(() => {
        u(t);
      }, dE);
    }
  });
  t.on("flush", () => {
    u(t);
  });
}
class pE {
  constructor(r) {
    var a;
    var u;
    var f;
    this._options = r;
    this._integrations = {};
    this._numProcessing = 0;
    this._outcomes = {};
    this._hooks = {};
    this._eventProcessors = [];
    this._promiseBuffer = ll(((a = r.transportOptions) == null ? undefined : a.bufferSize) ?? jh);
    if (r.dsn) {
      this._dsn = Jv(r.dsn);
    } else if (Z) {
      Y.warn("No DSN provided, client will not send events.");
    }
    if (this._dsn) {
      const d = Y_(this._dsn, r.tunnel, r._metadata ? r._metadata.sdk : undefined);
      this._transport = r.transport({
        tunnel: this._options.tunnel,
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...r.transportOptions,
        url: d
      });
    }
    this._options.enableLogs = this._options.enableLogs ?? ((u = this._options._experiments) == null ? undefined : u.enableLogs);
    if (this._options.enableLogs) {
      mp(this, "afterCaptureLog", "flushLogs", yE, bh);
    }
    if (this._options.enableMetrics ?? ((f = this._options._experiments) == null ? undefined : f.enableMetrics) ?? true) {
      mp(this, "afterCaptureMetric", "flushMetrics", gE, Bh);
    }
  }
  captureException(r, o, a) {
    const u = lt();
    if (zd(r)) {
      if (Z) {
        Y.log(fp);
      }
      return u;
    }
    const f = {
      event_id: u,
      ...o
    };
    this._process(() => this.eventFromException(r, f).then(d => this._captureEvent(d, f, a)).then(d => d), "error");
    return f.event_id;
  }
  captureMessage(r, o, a, u) {
    const f = {
      event_id: lt(),
      ...a
    };
    const d = Ju(r) ? r : String(r);
    const h = rs(r);
    const m = h ? this.eventFromMessage(d, o, f) : this.eventFromException(r, f);
    this._process(() => m.then(y => this._captureEvent(y, f, u)), h ? "unknown" : "error");
    return f.event_id;
  }
  captureEvent(r, o, a) {
    const u = lt();
    if (o != null && o.originalException && zd(o.originalException)) {
      if (Z) {
        Y.log(fp);
      }
      return u;
    }
    const f = {
      event_id: u,
      ...o
    };
    const d = r.sdkProcessingMetadata || {};
    const h = d.capturedSpanScope;
    const m = d.capturedSpanIsolationScope;
    const y = gp(r.type);
    this._process(() => this._captureEvent(r, f, h || a, m), y);
    return f.event_id;
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
    Fh(this, r, this._integrations);
    if (!o) {
      cp(this, [r]);
    }
  }
  sendEvent(r, o = {}) {
    this.emit("beforeSendEvent", r, o);
    let a = k_(r, this._dsn, this._options._metadata, this._options.tunnel);
    for (const u of o.attachments || []) {
      a = __(a, w_(u));
    }
    this.sendEnvelope(a).then(u => this.emit("afterSendEvent", r, u));
  }
  sendSession(r) {
    const {
      release: o,
      environment: a = sl
    } = this._options;
    if ("aggregates" in r) {
      const f = r.attrs || {};
      if (!f.release && !o) {
        if (Z) {
          Y.warn(dp);
        }
        return;
      }
      f.release = f.release || o;
      f.environment = f.environment || a;
      r.attrs = f;
    } else {
      if (!r.release && !o) {
        if (Z) {
          Y.warn(dp);
        }
        return;
      }
      r.release = r.release || o;
      r.environment = r.environment || a;
    }
    this.emit("beforeSendSession", r);
    const u = N_(r, this._dsn, this._options._metadata, this._options.tunnel);
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
    const u = (...f) => o(...f);
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
    this._integrations = q_(this, r);
    cp(this, r);
  }
  _updateSessionFromEvent(r, o) {
    var m;
    var y;
    let a = o.level === "fatal";
    let u = false;
    const f = (m = o.exception) == null ? undefined : m.values;
    if (f) {
      u = true;
      a = false;
      for (const v of f) {
        if (((y = v.mechanism) == null ? undefined : y.handled) === false) {
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
    const f = this.getOptions();
    const d = Object.keys(this._integrations);
    if (!o.integrations && d != null && d.length) {
      o.integrations = d;
    }
    this.emit("preprocessEvent", r, o);
    if (!r.type) {
      u.setLastEventId(r.event_id || o.event_id);
    }
    return F_(f, r, o, a, this, u).then(h => {
      if (h === null) {
        return h;
      }
      this.emit("postprocessEvent", h, o);
      h.contexts = {
        trace: Lv(a),
        ...h.contexts
      };
      const m = d_(this, a);
      h.sdkProcessingMetadata = {
        dynamicSamplingContext: m,
        ...h.sdkProcessingMetadata
      };
      return h;
    });
  }
  _captureEvent(r, o = {}, a = Ut(), u = Yn()) {
    if (Z && Hu(r)) {
      Y.log(`Captured error event \`${$h(r)[0] || "<unknown>"}\``);
    }
    return this._processEvent(r, o, a, u).then(f => f.event_id, f => {
      if (Z) {
        if (hp(f)) {
          Y.log(f.message);
        } else if (pp(f)) {
          Y.warn(f.message);
        } else {
          Y.warn(f);
        }
      }
    });
  }
  _processEvent(r, o, a, u) {
    const f = this.getOptions();
    const {
      sampleRate: d
    } = f;
    const h = Wh(r);
    const m = Hu(r);
    const v = `before send for type \`${r.type || "error"}\``;
    const T = typeof d === "undefined" ? undefined : e_(d);
    if (m && typeof T == "number" && Math.random() > T) {
      this.recordDroppedEvent("sample_rate", "error");
      return al(yu(`Discarding event because it's not included in the random sample (sampling rate = ${d})`));
    }
    const N = gp(r.type);
    return this._prepareEvent(r, o, a, u).then(k => {
      if (k === null) {
        this.recordDroppedEvent("event_processor", N);
        throw yu("An event processor returned `null`, will not send event.");
      }
      if (o.data && o.data.__sentry__ === true) {
        return k;
      }
      const M = mE(this, f, k, o);
      return hE(M, v);
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
      const D = a.getSession() || u.getSession();
      if (m && D) {
        this._updateSessionFromEvent(D, k);
      }
      if (h) {
        const ne = ((H = k.sdkProcessingMetadata) == null ? undefined : H.spanCountBeforeProcessing) || 0;
        const q = k.spans ? k.spans.length : 0;
        const Q = ne - q;
        if (Q > 0) {
          this.recordDroppedEvent("before_send", "span", Q);
        }
      }
      const M = k.transaction_info;
      if (h && M && k.transaction !== r.transaction) {
        const ne = "custom";
        k.transaction_info = {
          ...M,
          source: ne
        };
      }
      this.sendEvent(k, o);
      return k;
    }).then(null, k => {
      throw hp(k) || pp(k) ? k : (this.captureException(k, {
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
      if (a === ul) {
        this.recordDroppedEvent("queue_overflow", o);
      }
      return a;
    });
  }
  _clearOutcomes() {
    const r = this._outcomes;
    this._outcomes = {};
    return Object.entries(r).map(([o, a]) => {
      const [u, f] = o.split(":");
      return {
        reason: u,
        category: f,
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
    const o = lE(r, this._options.tunnel && Ni(this._dsn));
    this.sendEnvelope(o);
  }
}
function gp(t) {
  if (t === "replay_event") {
    return "replay";
  } else {
    return t || "error";
  }
}
function hE(t, r) {
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
function mE(t, r, o, a) {
  const {
    beforeSend: u,
    beforeSendTransaction: f,
    beforeSendSpan: d,
    ignoreSpans: h
  } = r;
  let m = o;
  if (Hu(m) && u) {
    return u(m, a);
  }
  if (Wh(m)) {
    if (d || h) {
      const y = cE(m);
      if (h != null && h.length && ep(y, h)) {
        return null;
      }
      if (d) {
        const v = d(y);
        if (v) {
          m = Ii(o, fE(v));
        } else {
          Zd();
        }
      }
      if (m.spans) {
        const v = [];
        const T = m.spans;
        for (const k of T) {
          if (h != null && h.length && ep(k, h)) {
            l_(T, k);
            continue;
          }
          if (d) {
            const D = d(k);
            if (D) {
              v.push(D);
            } else {
              Zd();
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
    if (f) {
      if (m.spans) {
        const y = m.spans.length;
        m.sdkProcessingMetadata = {
          ...o.sdkProcessingMetadata,
          spanCountBeforeProcessing: y
        };
      }
      return f(m, a);
    }
  }
  return m;
}
function Hu(t) {
  return t.type === undefined;
}
function Wh(t) {
  return t.type === "transaction";
}
function gE(t) {
  let r = 0;
  if (t.name) {
    r += t.name.length * 2;
  }
  r += 8;
  return r + Xh(t.attributes);
}
function yE(t) {
  let r = 0;
  if (t.message) {
    r += t.message.length * 2;
  }
  return r + Xh(t.attributes);
}
function Xh(t) {
  if (!t) {
    return 0;
  }
  let r = 0;
  Object.values(t).forEach(o => {
    if (Array.isArray(o)) {
      r += o.length * yp(o[0]);
    } else if (rs(o)) {
      r += yp(o);
    } else {
      r += 100;
    }
  });
  return r;
}
function yp(t) {
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
function vE(t, r) {
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
  _E(a);
  a.init();
  return a;
}
function _E(t) {
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
function EE(t) {
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
function SE(t, r, o = [r], a = "npm") {
  const u = t._metadata || {};
  u.sdk ||= {
    name: `sentry.javascript.${r}`,
    packages: o.map(f => ({
      name: `${a}:@sentry/${f}`,
      version: zn
    })),
    version: zn
  };
  t._metadata = u;
}
const wE = 100;
function Vn(t, r) {
  const o = ze();
  const a = Yn();
  if (!o) {
    return;
  }
  const {
    beforeBreadcrumb: u = null,
    maxBreadcrumbs: f = wE
  } = o.getOptions();
  if (f <= 0) {
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
    a.addBreadcrumb(m, f);
  }
}
let vp;
const TE = "FunctionToString";
const _p = new WeakMap();
const xE = () => ({
  name: TE,
  setupOnce() {
    vp = Function.prototype.toString;
    try {
      Function.prototype.toString = function (...t) {
        const r = nl(this);
        const o = _p.has(ze()) && r !== undefined ? r : this;
        return vp.apply(o, t);
      };
    } catch {}
  },
  setup(t) {
    _p.set(t, true);
  }
});
const IE = xE;
const NE = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, /^Can't find variable: gmo$/, /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/, `can't redefine non-configurable property "solana"`, "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler", /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/, /^Java exception was raised during method invocation$/];
const kE = "EventFilters";
const CE = (t = {}) => {
  let r;
  return {
    name: kE,
    setup(o) {
      const a = o.getOptions();
      r = Ep(t, a);
    },
    processEvent(o, a, u) {
      if (!r) {
        const f = u.getOptions();
        r = Ep(t, f);
      }
      if (RE(o, r)) {
        return null;
      } else {
        return o;
      }
    }
  };
};
const PE = (t = {}) => ({
  ...CE(t),
  name: "InboundFilters"
});
function Ep(t = {}, r = {}) {
  return {
    allowUrls: [...(t.allowUrls || []), ...(r.allowUrls || [])],
    denyUrls: [...(t.denyUrls || []), ...(r.denyUrls || [])],
    ignoreErrors: [...(t.ignoreErrors || []), ...(r.ignoreErrors || []), ...(t.disableErrorDefaults ? [] : NE)],
    ignoreTransactions: [...(t.ignoreTransactions || []), ...(r.ignoreTransactions || [])]
  };
}
function RE(t, r) {
  if (t.type) {
    if (t.type === "transaction" && OE(t, r.ignoreTransactions)) {
      if (Z) {
        Y.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${jn(t)}`);
      }
      return true;
    }
  } else {
    if (LE(t, r.ignoreErrors)) {
      if (Z) {
        Y.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${jn(t)}`);
      }
      return true;
    }
    if (FE(t)) {
      if (Z) {
        Y.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${jn(t)}`);
      }
      return true;
    }
    if (AE(t, r.denyUrls)) {
      if (Z) {
        Y.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${jn(t)}.
Url: ${Jo(t)}`);
      }
      return true;
    }
    if (!DE(t, r.allowUrls)) {
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
function LE(t, r) {
  if (r != null && r.length) {
    return $h(t).some(o => os(o, r));
  } else {
    return false;
  }
}
function OE(t, r) {
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
function AE(t, r) {
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
function DE(t, r) {
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
function ME(t = []) {
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
    const a = [...(((r = t.exception) == null ? undefined : r.values) ?? [])].reverse().find(f => {
      var d;
      var h;
      var m;
      return ((d = f.mechanism) == null ? undefined : d.parent_id) === undefined && ((m = (h = f.stacktrace) == null ? undefined : h.frames) == null ? undefined : m.length);
    });
    const u = (o = a == null ? undefined : a.stacktrace) == null ? undefined : o.frames;
    if (u) {
      return ME(u);
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
function FE(t) {
  var r;
  var o;
  if ((o = (r = t.exception) == null ? undefined : r.values) != null && o.length) {
    return !t.message && !t.exception.values.some(a => a.stacktrace || a.type && a.type !== "Error" || a.value);
  } else {
    return false;
  }
}
function bE(t, r, o, a, u, f) {
  var h;
  if ((h = u.exception) == null || !h.values || !f || !xn(f.originalException, Error)) {
    return;
  }
  const d = u.exception.values.length > 0 ? u.exception.values[u.exception.values.length - 1] : undefined;
  if (d) {
    u.exception.values = Bu(t, r, a, f.originalException, o, u.exception.values, d, 0);
  }
}
function Bu(t, r, o, a, u, f, d, h) {
  if (f.length >= o + 1) {
    return f;
  }
  let m = [...f];
  if (xn(a[u], Error)) {
    Sp(d, h);
    const y = t(r, a[u]);
    const v = m.length;
    wp(y, u, v, h);
    m = Bu(t, r, o, a[u], u, [y, ...m], y, v);
  }
  if (Array.isArray(a.errors)) {
    a.errors.forEach((y, v) => {
      if (xn(y, Error)) {
        Sp(d, h);
        const T = t(r, y);
        const N = m.length;
        wp(T, `errors[${v}]`, N, h);
        m = Bu(t, r, o, y, u, [T, ...m], T, N);
      }
    });
  }
  return m;
}
function Sp(t, r) {
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
function wp(t, r, o, a) {
  t.mechanism = {
    handled: true,
    ...t.mechanism,
    type: "chained",
    source: r,
    exception_id: o,
    parent_id: a
  };
}
function HE(t) {
  const r = "console";
  Wn(r, t);
  Xn(r, BE);
}
function BE() {
  if ("console" in he) {
    Q0.forEach(function (t) {
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
function UE(t) {
  if (t === "warn") {
    return "warning";
  } else if (["fatal", "error", "warning", "log", "info", "debug"].includes(t)) {
    return t;
  } else {
    return "log";
  }
}
const jE = "Dedupe";
const zE = () => {
  let t;
  return {
    name: jE,
    processEvent(r) {
      if (r.type) {
        return r;
      }
      try {
        if (GE(r, t)) {
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
const $E = zE;
function GE(t, r) {
  if (r) {
    return !!VE(t, r) || !!WE(t, r);
  } else {
    return false;
  }
}
function VE(t, r) {
  const o = t.message;
  const a = r.message;
  return (!!o || !!a) && (!o || !!a) && (!!o || !a) && o === a && !!Qh(t, r) && !!Yh(t, r);
}
function WE(t, r) {
  const o = Tp(r);
  const a = Tp(t);
  return !!o && !!a && o.type === a.type && o.value === a.value && !!Qh(t, r) && !!Yh(t, r);
}
function Yh(t, r) {
  let o = Fd(t);
  let a = Fd(r);
  if (!o && !a) {
    return true;
  }
  if (o && !a || !o && a || (o = o, a = a, a.length !== o.length)) {
    return false;
  }
  for (let u = 0; u < a.length; u++) {
    const f = a[u];
    const d = o[u];
    if (f.filename !== d.filename || f.lineno !== d.lineno || f.colno !== d.colno || f.function !== d.function) {
      return false;
    }
  }
  return true;
}
function Qh(t, r) {
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
function Tp(t) {
  var r;
  var o;
  if ((o = (r = t.exception) == null ? undefined : r.values) == null) {
    return undefined;
  } else {
    return o[0];
  }
}
function Kh(t) {
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
function XE() {
  return "history" in _i && !!_i.history;
}
function YE() {
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
function Uu(t) {
  return t && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString());
}
function QE() {
  var o;
  if (typeof EdgeRuntime == "string") {
    return true;
  }
  if (!YE()) {
    return false;
  }
  if (Uu(_i.fetch)) {
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
        t = Uu(a.contentWindow.fetch);
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
function KE(t, r) {
  const o = "fetch";
  Wn(o, t);
  Xn(o, () => qE(undefined, r));
}
function qE(t, r = false) {
  if (!r || !!QE()) {
    ut(he, "fetch", function (o) {
      return function (...a) {
        const u = new Error();
        const {
          method: f,
          url: d
        } = ZE(a);
        const h = {
          args: a,
          fetchData: {
            method: f,
            url: d
          },
          startTimestamp: Zt() * 1000,
          virtualError: u,
          headers: JE(a)
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
          if (Zu(m) && m.stack === undefined) {
            m.stack = u.stack;
            Gn(m, "framesToPop", 1);
          }
          if (m instanceof TypeError && (m.message === "Failed to fetch" || m.message === "Load failed" || m.message === "NetworkError when attempting to fetch resource.")) {
            try {
              const y = new URL(h.fetchData.url);
              m.message = `${m.message} (${y.host})`;
            } catch {}
          }
          throw m;
        });
      };
    });
  }
}
function ju(t, r) {
  return !!t && typeof t == "object" && !!t[r];
}
function xp(t) {
  if (typeof t == "string") {
    return t;
  } else if (t) {
    if (ju(t, "url")) {
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
function ZE(t) {
  if (t.length === 0) {
    return {
      method: "GET",
      url: ""
    };
  }
  if (t.length === 2) {
    const [o, a] = t;
    return {
      url: xp(o),
      method: ju(a, "method") ? String(a.method).toUpperCase() : "GET"
    };
  }
  const r = t[0];
  return {
    url: xp(r),
    method: ju(r, "method") ? String(r.method).toUpperCase() : "GET"
  };
}
function JE(t) {
  const [r, o] = t;
  try {
    if (typeof o == "object" && o !== null && "headers" in o && o.headers) {
      return new Headers(o.headers);
    }
    if (fv(r)) {
      return new Headers(r.headers);
    }
  } catch {}
}
function eS() {
  return "npm";
}
function tS(t, r = false) {
  return !r && (!t || !!t.startsWith("/") || !!t.match(/^[A-Z]:/) || !!t.startsWith(".") || !!t.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//)) && t !== undefined && !t.includes("node_modules/");
}
function nS(t) {
  const r = /^\s*[-]{4,}$/;
  const o = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;
  const a = /at (?:async )?(.+?) \(data:(.*?),/;
  return u => {
    var h;
    const f = u.match(a);
    if (f) {
      return {
        filename: `<data:${f[2]}>`,
        function: f[1]
      };
    }
    const d = u.match(o);
    if (d) {
      let m;
      let y;
      let v;
      let T;
      let N;
      if (d[1]) {
        v = d[1];
        let M = v.lastIndexOf(".");
        if (v[M - 1] === ".") {
          M--;
        }
        if (M > 0) {
          m = v.slice(0, M);
          y = v.slice(M + 1);
          const H = m.indexOf(".Module");
          if (H > 0) {
            v = v.slice(H + 1);
            m = m.slice(0, H);
          }
        }
        T = undefined;
      }
      if (y) {
        T = m;
        N = y;
      }
      if (y === "<anonymous>") {
        N = undefined;
        v = undefined;
      }
      if (v === undefined) {
        N = N || wn;
        v = T ? `${T}.${N}` : N;
      }
      let k = (h = d[2]) != null && h.startsWith("file://") ? d[2].slice(7) : d[2];
      const D = d[5] === "native";
      if (k != null && k.match(/\/[A-Z]:/)) {
        k = k.slice(1);
      }
      if (!k && d[5] && !D) {
        k = d[5];
      }
      return {
        filename: k ? decodeURI(k) : undefined,
        module: undefined,
        function: v,
        lineno: Ip(d[3]),
        colno: Ip(d[4]),
        in_app: tS(k || "", D)
      };
    }
    if (u.match(r)) {
      return {
        filename: u
      };
    }
  };
}
function rS(t) {
  return [90, nS()];
}
function Ip(t) {
  return parseInt(t || "", 10) || undefined;
}
var Np;
(function (t) {
  t[t.Classic = 1] = "Classic";
  t[t.Protocol = 2] = "Protocol";
  t[t.Both = 3] = "Both";
})(Np ||= {});
function iS(t) {
  return {
    createUrl: r => `${t}://${r}/sentry_key`,
    urlMatches: function (r, o) {
      return r.startsWith(this.createUrl(o));
    },
    createKey: r => `${t}.${r}`,
    namespace: t
  };
}
const oS = "sentry-electron-renderer-id";
function sS(t) {
  var o;
  const r = iS(t);
  if ((o = window.__SENTRY_IPC__) != null && o[r.namespace]) {
    return window.__SENTRY_IPC__[r.namespace];
  }
  {
    Y.log("IPC was not configured in preload script, falling back to custom protocol and fetch");
    const a = window.__SENTRY_RENDERER_ID__ = lt();
    const u = {
      [oS]: a
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
      sendScope: f => {
        fetch(r.createUrl("scope"), {
          method: "POST",
          body: f,
          headers: u
        }).catch(() => {});
      },
      sendEnvelope: f => {
        fetch(r.createUrl("envelope"), {
          method: "POST",
          body: f,
          headers: u
        }).catch(() => {});
      },
      sendStatus: f => {
        fetch(r.createUrl("status"), {
          method: "POST",
          body: JSON.stringify({
            status: f
          }),
          headers: u
        }).catch(() => {});
      },
      sendStructuredLog: f => {
        fetch(r.createUrl("structured-log"), {
          method: "POST",
          body: JSON.stringify(f),
          headers: u
        }).catch(() => {});
      }
    };
  }
}
let $o;
function qh(t = ze()) {
  if (!t) {
    throw new Error("Could not find client, make sure to call Sentry.init before getIPC");
  }
  $o ||= new WeakMap();
  const r = $o.get(t);
  if (r) {
    return r;
  }
  const o = t.getOptions().ipcNamespace;
  const a = sS(o);
  $o.set(t, a);
  a.sendRendererStart();
  return a;
}
const Ce = he;
let zu = 0;
function Zh() {
  return zu > 0;
}
function aS() {
  zu++;
  setTimeout(() => {
    zu--;
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
    if (nl(t)) {
      return t;
    }
  } catch {
    return t;
  }
  const a = function (...u) {
    try {
      const f = u.map(d => xr(d, r));
      return t.apply(this, f);
    } catch (f) {
      aS();
      Rv(d => {
        d.addEventProcessor(h => {
          if (r.mechanism) {
            Au(h, undefined);
            Sr(h, r.mechanism);
          }
          h.extra = {
            ...h.extra,
            arguments: u
          };
          return h;
        });
        $_(f);
      });
      throw f;
    }
  };
  try {
    for (const u in t) {
      if (Object.prototype.hasOwnProperty.call(t, u)) {
        a[u] = t[u];
      }
    }
  } catch {}
  _h(a, t);
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
function uS() {
  const t = tl();
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
function cl(t, r) {
  const o = fl(t, r);
  const a = {
    type: pS(r),
    value: hS(r)
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
function lS(t, r, o, a) {
  const u = ze();
  const f = u == null ? undefined : u.getOptions().normalizeDepth;
  const d = _S(r);
  const h = {
    __serialized__: Lh(r, f)
  };
  if (d) {
    return {
      exception: {
        values: [cl(t, d)]
      },
      extra: h
    };
  }
  const m = {
    exception: {
      values: [{
        type: is(r) ? r.constructor.name : a ? "UnhandledRejection" : "Error",
        value: yS(r, {
          isUnhandledRejection: a
        })
      }]
    },
    extra: h
  };
  if (o) {
    const y = fl(t, o);
    if (y.length) {
      m.exception.values[0].stacktrace = {
        frames: y
      };
    }
  }
  return m;
}
function _u(t, r) {
  return {
    exception: {
      values: [cl(t, r)]
    }
  };
}
function fl(t, r) {
  const o = r.stacktrace || r.stack || "";
  const a = fS(r);
  const u = dS(r);
  try {
    return t(o, a, u);
  } catch {}
  return [];
}
const cS = /Minified React error #\d+;/i;
function fS(t) {
  if (t && cS.test(t.message)) {
    return 1;
  } else {
    return 0;
  }
}
function dS(t) {
  if (typeof t.framesToPop == "number") {
    return t.framesToPop;
  } else {
    return 0;
  }
}
function Jh(t) {
  if (typeof WebAssembly !== "undefined" && typeof WebAssembly.Exception !== "undefined") {
    return t instanceof WebAssembly.Exception;
  } else {
    return false;
  }
}
function pS(t) {
  const r = t == null ? undefined : t.name;
  if (!r && Jh(t)) {
    if (t.message && Array.isArray(t.message) && t.message.length == 2) {
      return t.message[0];
    } else {
      return "WebAssembly.Exception";
    }
  } else {
    return r;
  }
}
function hS(t) {
  const r = t == null ? undefined : t.message;
  if (Jh(t)) {
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
function mS(t, r, o, a) {
  const u = (o == null ? undefined : o.syntheticException) || undefined;
  const f = dl(t, r, u, a);
  Sr(f);
  f.level = "error";
  if (o != null && o.event_id) {
    f.event_id = o.event_id;
  }
  return ss(f);
}
function gS(t, r, o = "info", a, u) {
  const f = (a == null ? undefined : a.syntheticException) || undefined;
  const d = $u(t, r, f, u);
  d.level = o;
  if (a != null && a.event_id) {
    d.event_id = a.event_id;
  }
  return ss(d);
}
function dl(t, r, o, a, u) {
  let f;
  if (gh(r) && r.error) {
    return _u(t, r.error);
  }
  if (Hd(r) || av(r)) {
    const d = r;
    if ("stack" in r) {
      f = _u(t, r);
    } else {
      const h = d.name || (Hd(d) ? "DOMError" : "DOMException");
      const m = d.message ? `${h}: ${d.message}` : h;
      f = $u(t, m, o, a);
      Au(f, m);
    }
    if ("code" in d) {
      f.tags = {
        ...f.tags,
        "DOMException.code": `${d.code}`
      };
    }
    return f;
  }
  if (Zu(r)) {
    return _u(t, r);
  } else if (yi(r) || is(r)) {
    f = lS(t, r, o, u);
    Sr(f, {
      synthetic: true
    });
    return f;
  } else {
    f = $u(t, r, o, a);
    Au(f, `${r}`);
    Sr(f, {
      synthetic: true
    });
    return f;
  }
}
function $u(t, r, o, a) {
  const u = {};
  if (a && o) {
    const f = fl(t, o);
    if (f.length) {
      u.exception = {
        values: [{
          value: r,
          stacktrace: {
            frames: f
          }
        }]
      };
    }
    Sr(u, {
      synthetic: true
    });
  }
  if (Ju(r)) {
    const {
      __sentry_template_string__: f,
      __sentry_template_values__: d
    } = r;
    u.logentry = {
      message: f,
      params: d
    };
    return u;
  }
  u.message = r;
  return u;
}
function yS(t, {
  isUnhandledRejection: r
}) {
  const o = mv(t);
  const a = r ? "promise rejection" : "exception";
  if (gh(t)) {
    return `Event \`ErrorEvent\` captured as ${a} with message \`${t.message}\``;
  } else if (is(t)) {
    return `Event \`${vS(t)}\` (type=${t.type}) captured as ${a}`;
  } else {
    return `Object captured as ${a} with keys: ${o}`;
  }
}
function vS(t) {
  try {
    const r = Object.getPrototypeOf(t);
    if (r) {
      return r.constructor.name;
    } else {
      return undefined;
    }
  } catch {}
}
function _S(t) {
  for (const r in t) {
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      const o = t[r];
      if (o instanceof Error) {
        return o;
      }
    }
  }
}
class ES extends pE {
  constructor(r) {
    var v;
    const o = SS(r);
    const a = Ce.SENTRY_SDK_SOURCE || eS();
    SE(o, "browser", ["browser"], a);
    if ((v = o._metadata) != null && v.sdk) {
      o._metadata.sdk.settings = {
        infer_ip: o.sendDefaultPii ? "auto" : "never",
        ...o._metadata.sdk.settings
      };
    }
    super(o);
    const {
      sendDefaultPii: u,
      sendClientReports: f,
      enableLogs: d,
      _experiments: h,
      enableMetrics: m
    } = this._options;
    const y = m ?? (h == null ? undefined : h.enableMetrics) ?? true;
    if (Ce.document && (f || d || y)) {
      Ce.document.addEventListener("visibilitychange", () => {
        if (Ce.document.visibilityState === "hidden") {
          if (f) {
            this._flushOutcomes();
          }
          if (d) {
            bh(this);
          }
          if (y) {
            Bh(this);
          }
        }
      });
    }
    if (u) {
      this.on("beforeSendSession", EE);
    }
  }
  eventFromException(r, o) {
    return mS(this._options.stackParser, r, o, this._options.attachStacktrace);
  }
  eventFromMessage(r, o = "info", a) {
    return gS(this._options.stackParser, r, o, a, this._options.attachStacktrace);
  }
  _prepareEvent(r, o, a, u) {
    r.platform = r.platform || "javascript";
    return super._prepareEvent(r, o, a, u);
  }
}
function SS(t) {
  var r;
  return {
    release: typeof __SENTRY_RELEASE__ == "string" ? __SENTRY_RELEASE__ : (r = Ce.SENTRY_RELEASE) == null ? undefined : r.id,
    sendClientReports: true,
    parentSpanIsAlwaysRootSpan: true,
    ...t
  };
}
const wS = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const We = he;
const TS = 1000;
let kp;
let Gu;
let Vu;
function xS(t) {
  Wn("dom", t);
  Xn("dom", IS);
}
function IS() {
  if (!We.document) {
    return;
  }
  const t = Nt.bind(null, "dom");
  const r = Cp(t, true);
  We.document.addEventListener("click", r, false);
  We.document.addEventListener("keypress", r, false);
  ["EventTarget", "Node"].forEach(o => {
    var f;
    var d;
    const u = (f = We[o]) == null ? undefined : f.prototype;
    if ((d = u == null ? undefined : u.hasOwnProperty) != null && d.call(u, "addEventListener")) {
      ut(u, "addEventListener", function (h) {
        return function (m, y, v) {
          if (m === "click" || m == "keypress") {
            try {
              const T = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {};
              const N = T[m] = T[m] || {
                refCount: 0
              };
              if (!N.handler) {
                const k = Cp(t);
                N.handler = k;
                h.call(this, m, k, v);
              }
              N.refCount++;
            } catch {}
          }
          return h.call(this, m, y, v);
        };
      });
      ut(u, "removeEventListener", function (h) {
        return function (m, y, v) {
          if (m === "click" || m == "keypress") {
            try {
              const T = this.__sentry_instrumentation_handlers__ || {};
              const N = T[m];
              if (N) {
                N.refCount--;
                if (N.refCount <= 0) {
                  h.call(this, m, N.handler, v);
                  N.handler = undefined;
                  delete T[m];
                }
                if (Object.keys(T).length === 0) {
                  delete this.__sentry_instrumentation_handlers__;
                }
              }
            } catch {}
          }
          return h.call(this, m, y, v);
        };
      });
    }
  });
}
function NS(t) {
  if (t.type !== Gu) {
    return false;
  }
  try {
    if (!t.target || t.target._sentryId !== Vu) {
      return false;
    }
  } catch {}
  return true;
}
function kS(t, r) {
  if (t !== "keypress") {
    return false;
  } else if (r != null && r.tagName) {
    return r.tagName !== "INPUT" && r.tagName !== "TEXTAREA" && !r.isContentEditable;
  } else {
    return true;
  }
}
function Cp(t, r = false) {
  return o => {
    if (!o || o._sentryCaptured) {
      return;
    }
    const a = CS(o);
    if (kS(o.type, a)) {
      return;
    }
    Gn(o, "_sentryCaptured", true);
    if (a && !a._sentryId) {
      Gn(a, "_sentryId", lt());
    }
    const u = o.type === "keypress" ? "input" : o.type;
    if (!NS(o)) {
      t({
        event: o,
        name: u,
        global: r
      });
      Gu = o.type;
      Vu = a ? a._sentryId : undefined;
    }
    clearTimeout(kp);
    kp = We.setTimeout(() => {
      Vu = undefined;
      Gu = undefined;
    }, TS);
  };
}
function CS(t) {
  try {
    return t.target;
  } catch {
    return null;
  }
}
let Go;
function em(t) {
  const r = "history";
  Wn(r, t);
  Xn(r, PS);
}
function PS() {
  We.addEventListener("popstate", () => {
    const r = We.location.href;
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
  if (!XE()) {
    return;
  }
  function t(r) {
    return function (...o) {
      const a = o.length > 2 ? o[2] : undefined;
      if (a) {
        const u = Go;
        const f = RS(String(a));
        Go = f;
        if (u === f) {
          return r.apply(this, o);
        }
        Nt("history", {
          from: u,
          to: f
        });
      }
      return r.apply(this, o);
    };
  }
  ut(We.history, "pushState", t);
  ut(We.history, "replaceState", t);
}
function RS(t) {
  try {
    return new URL(t, We.location.origin).toString();
  } catch {
    return t;
  }
}
const Ko = {};
function LS(t) {
  const r = Ko[t];
  if (r) {
    return r;
  }
  let o = We[t];
  if (Uu(o)) {
    return Ko[t] = o.bind(We);
  }
  const a = We.document;
  if (a && typeof a.createElement == "function") {
    try {
      const u = a.createElement("iframe");
      u.hidden = true;
      a.head.appendChild(u);
      const f = u.contentWindow;
      if (f != null && f[t]) {
        o = f[t];
      }
      a.head.removeChild(u);
    } catch (u) {
      if (wS) {
        Y.warn(`Could not create sandbox iframe for ${t} check, bailing to window.${t}: `, u);
      }
    }
  }
  return o && (Ko[t] = o.bind(We));
}
function OS(t) {
  Ko[t] = undefined;
}
const gi = "__sentry_xhr_v3__";
function AS(t) {
  Wn("xhr", t);
  Xn("xhr", DS);
}
function DS() {
  if (!We.XMLHttpRequest) {
    return;
  }
  const t = XMLHttpRequest.prototype;
  t.open = new Proxy(t.open, {
    apply(r, o, a) {
      const u = new Error();
      const f = Zt() * 1000;
      const d = qt(a[0]) ? a[0].toUpperCase() : undefined;
      const h = MS(a[1]);
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
        const y = o[gi];
        if (y && o.readyState === 4) {
          try {
            y.status_code = o.status;
          } catch {}
          const v = {
            endTimestamp: Zt() * 1000,
            startTimestamp: f,
            xhr: o,
            virtualError: u
          };
          Nt("xhr", v);
        }
      };
      if ("onreadystatechange" in o && typeof o.onreadystatechange == "function") {
        o.onreadystatechange = new Proxy(o.onreadystatechange, {
          apply(y, v, T) {
            m();
            return y.apply(v, T);
          }
        });
      } else {
        o.addEventListener("readystatechange", m);
      }
      o.setRequestHeader = new Proxy(o.setRequestHeader, {
        apply(y, v, T) {
          const [N, k] = T;
          const D = v[gi];
          if (D && qt(N) && qt(k)) {
            D.request_headers[N.toLowerCase()] = k;
          }
          return y.apply(v, T);
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
      const f = {
        startTimestamp: Zt() * 1000,
        xhr: o
      };
      Nt("xhr", f);
      return r.apply(o, a);
    }
  });
}
function MS(t) {
  if (qt(t)) {
    return t;
  }
  try {
    return t.toString();
  } catch {}
}
const FS = 40;
function bS(t, r = LS("fetch")) {
  let o = 0;
  let a = 0;
  async function u(f) {
    const d = f.body.length;
    o += d;
    a++;
    const h = {
      body: f.body,
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
      OS("fetch");
      throw m;
    } finally {
      o -= d;
      a--;
    }
  }
  return zh(t, u, ll(t.bufferSize || FS));
}
const as = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const HS = 30;
const BS = 50;
function Wu(t, r, o, a) {
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
const US = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i;
const jS = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
const zS = /\((\S*)(?::(\d+))(?::(\d+))\)/;
const $S = /at (.+?) ?\(data:(.+?),/;
const GS = t => {
  const r = t.match($S);
  if (r) {
    return {
      filename: `<data:${r[2]}>`,
      function: r[1]
    };
  }
  const o = US.exec(t);
  if (o) {
    const [, u, f, d] = o;
    return Wu(u, wn, +f, +d);
  }
  const a = jS.exec(t);
  if (a) {
    if (a[2] && a[2].indexOf("eval") === 0) {
      const h = zS.exec(a[2]);
      if (h) {
        a[2] = h[1];
        a[3] = h[2];
        a[4] = h[3];
      }
    }
    const [f, d] = nm(a[1] || wn, a[2]);
    return Wu(d, f, a[3] ? +a[3] : undefined, a[4] ? +a[4] : undefined);
  }
};
const tm = [HS, GS];
const VS = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
const WS = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
const XS = t => {
  const r = VS.exec(t);
  if (r) {
    if (r[3] && r[3].indexOf(" > eval") > -1) {
      const f = WS.exec(r[3]);
      if (f) {
        r[1] = r[1] || "eval";
        r[3] = f[1];
        r[4] = f[2];
        r[5] = "";
      }
    }
    let a = r[3];
    let u = r[1] || wn;
    [u, a] = nm(u, a);
    return Wu(a, u, r[4] ? +r[4] : undefined, r[5] ? +r[5] : undefined);
  }
};
const YS = [BS, XS];
const QS = [tm, YS];
const KS = dh(...QS);
const nm = (t, r) => {
  const o = t.indexOf("safari-extension") !== -1;
  const a = t.indexOf("safari-web-extension") !== -1;
  if (o || a) {
    return [t.indexOf("@") !== -1 ? t.split("@")[0] : wn, o ? `safari-extension:${r}` : `safari-web-extension:${r}`];
  } else {
    return [t, r];
  }
};
const Vo = 1024;
const qS = "Breadcrumbs";
const ZS = (t = {}) => {
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
    name: qS,
    setup(o) {
      if (r.console) {
        HE(n1(o));
      }
      if (r.dom) {
        xS(t1(o, r.dom));
      }
      if (r.xhr) {
        AS(r1(o));
      }
      if (r.fetch) {
        KE(i1(o));
      }
      if (r.history) {
        em(o1(o));
      }
      if (r.sentry) {
        o.on("beforeSendEvent", e1(o));
      }
    }
  };
};
const JS = ZS;
function e1(t) {
  return function (o) {
    if (ze() === t) {
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
function t1(t, r) {
  return function (a) {
    if (ze() !== t) {
      return;
    }
    let u;
    let f;
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
      const y = a.event;
      const v = s1(y) ? y.target : y;
      u = vh(v, {
        keyAttrs: d,
        maxStringLength: h
      });
      f = hv(v);
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
    if (f) {
      m.data = {
        "ui.component_name": f
      };
    }
    Vn(m, {
      event: a.event,
      name: a.name,
      global: a.global
    });
  };
}
function n1(t) {
  return function (o) {
    if (ze() !== t) {
      return;
    }
    const a = {
      category: "console",
      data: {
        arguments: o.args,
        logger: "console"
      },
      level: UE(o.level),
      message: jd(o.args, " ")
    };
    if (o.level === "assert") {
      if (o.args[0] === false) {
        a.message = `Assertion failed: ${jd(o.args.slice(1), " ") || "console.assert"}`;
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
function r1(t) {
  return function (o) {
    if (ze() !== t) {
      return;
    }
    const {
      startTimestamp: a,
      endTimestamp: u
    } = o;
    const f = o.xhr[gi];
    if (!a || !u || !f) {
      return;
    }
    const {
      method: d,
      url: h,
      status_code: m,
      body: y
    } = f;
    const v = {
      method: d,
      url: h,
      status_code: m
    };
    const T = {
      xhr: o.xhr,
      input: y,
      startTimestamp: a,
      endTimestamp: u
    };
    const N = {
      category: "xhr",
      data: v,
      type: "http",
      level: Kh(m)
    };
    t.emit("beforeOutgoingRequestBreadcrumb", N, T);
    Vn(N, T);
  };
}
function i1(t) {
  return function (o) {
    if (ze() !== t) {
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
        const f = o.fetchData;
        const d = {
          data: o.error,
          input: o.args,
          startTimestamp: a,
          endTimestamp: u
        };
        const h = {
          category: "fetch",
          data: f,
          level: "error",
          type: "http"
        };
        t.emit("beforeOutgoingRequestBreadcrumb", h, d);
        Vn(h, d);
      } else {
        const f = o.response;
        const d = {
          ...o.fetchData,
          status_code: f == null ? undefined : f.status
        };
        o.fetchData.request_body_size;
        o.fetchData.response_body_size;
        if (f != null) {
          f.status;
        }
        const h = {
          input: o.args,
          response: f,
          startTimestamp: a,
          endTimestamp: u
        };
        const m = {
          category: "fetch",
          data: d,
          type: "http",
          level: Kh(d.status_code)
        };
        t.emit("beforeOutgoingRequestBreadcrumb", m, h);
        Vn(m, h);
      }
    }
  };
}
function o1(t) {
  return function (o) {
    if (ze() !== t) {
      return;
    }
    let a = o.from;
    let u = o.to;
    const f = vu(Ce.location.href);
    let d = a ? vu(a) : undefined;
    const h = vu(u);
    if (d == null || !d.path) {
      d = f;
    }
    if (f.protocol === h.protocol && f.host === h.host) {
      u = h.relative;
    }
    if (f.protocol === d.protocol && f.host === d.host) {
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
function s1(t) {
  return !!t && !!t.target;
}
const a1 = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
const u1 = "BrowserApiErrors";
const l1 = (t = {}) => {
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
    name: u1,
    setupOnce() {
      if (r.setTimeout) {
        ut(Ce, "setTimeout", Pp);
      }
      if (r.setInterval) {
        ut(Ce, "setInterval", Pp);
      }
      if (r.requestAnimationFrame) {
        ut(Ce, "requestAnimationFrame", f1);
      }
      if (r.XMLHttpRequest && "XMLHttpRequest" in Ce) {
        ut(XMLHttpRequest.prototype, "send", d1);
      }
      const o = r.eventTarget;
      if (o) {
        (Array.isArray(o) ? o : a1).forEach(u => p1(u, r));
      }
    }
  };
};
const c1 = l1;
function Pp(t) {
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
function f1(t) {
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
function d1(t) {
  return function (...r) {
    const o = this;
    ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(u => {
      if (u in o && typeof o[u] == "function") {
        ut(o, u, function (f) {
          const d = {
            mechanism: {
              data: {
                handler: Tn(f)
              },
              handled: false,
              type: `auto.browser.browserapierrors.xhr.${u}`
            }
          };
          const h = nl(f);
          if (h) {
            d.mechanism.data.handler = Tn(h);
          }
          return xr(f, d);
        });
      }
    });
    return t.apply(this, r);
  };
}
function p1(t, r) {
  var u;
  var f;
  const a = (u = Ce[t]) == null ? undefined : u.prototype;
  if ((f = a == null ? undefined : a.hasOwnProperty) != null && f.call(a, "addEventListener")) {
    ut(a, "addEventListener", function (d) {
      return function (h, m, y) {
        try {
          if (h1(m)) {
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
          m1(this, h, m);
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
        }), y]);
      };
    });
    ut(a, "removeEventListener", function (d) {
      return function (h, m, y) {
        try {
          const v = m.__sentry_wrapped__;
          if (v) {
            d.call(this, h, v, y);
          }
        } catch {}
        return d.call(this, h, m, y);
      };
    });
  }
}
function h1(t) {
  return typeof t.handleEvent == "function";
}
function m1(t, r, o) {
  if (t && typeof t == "object" && "removeEventListener" in t && typeof t.removeEventListener == "function") {
    t.removeEventListener(r, o);
  }
}
const g1 = () => ({
  name: "BrowserSession",
  setupOnce() {
    if (typeof Ce.document === "undefined") {
      if (as) {
        Y.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
      }
      return;
    }
    ap({
      ignoreDuration: true
    });
    up();
    em(({
      from: t,
      to: r
    }) => {
      if (t !== undefined && t !== r) {
        ap({
          ignoreDuration: true
        });
        up();
      }
    });
  }
});
const y1 = "GlobalHandlers";
const v1 = (t = {}) => {
  const r = {
    onerror: true,
    onunhandledrejection: true,
    ...t
  };
  return {
    name: y1,
    setupOnce() {
      Error.stackTraceLimit = 50;
    },
    setup(o) {
      if (r.onerror) {
        E1(o);
        Rp("onerror");
      }
      if (r.onunhandledrejection) {
        S1(o);
        Rp("onunhandledrejection");
      }
    }
  };
};
const _1 = v1;
function E1(t) {
  rv(r => {
    const {
      stackParser: o,
      attachStacktrace: a
    } = rm();
    if (ze() !== t || Zh()) {
      return;
    }
    const {
      msg: u,
      url: f,
      line: d,
      column: h,
      error: m
    } = r;
    const y = x1(dl(o, m || u, undefined, a, false), f, d, h);
    y.level = "error";
    Ah(y, {
      originalException: m,
      mechanism: {
        handled: false,
        type: "auto.browser.global_handlers.onerror"
      }
    });
  });
}
function S1(t) {
  ov(r => {
    const {
      stackParser: o,
      attachStacktrace: a
    } = rm();
    if (ze() !== t || Zh()) {
      return;
    }
    const u = w1(r);
    const f = rs(u) ? T1(u) : dl(o, u, undefined, a, true);
    f.level = "error";
    Ah(f, {
      originalException: u,
      mechanism: {
        handled: false,
        type: "auto.browser.global_handlers.onunhandledrejection"
      }
    });
  });
}
function w1(t) {
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
function T1(t) {
  return {
    exception: {
      values: [{
        type: "UnhandledRejection",
        value: `Non-Error promise rejection captured with value: ${String(t)}`
      }]
    }
  };
}
function x1(t, r, o, a) {
  const u = t.exception = t.exception || {};
  const f = u.values = u.values || [];
  const d = f[0] = f[0] || {};
  const h = d.stacktrace = d.stacktrace || {};
  const m = h.frames = h.frames || [];
  const y = a;
  const v = o;
  const T = I1(r) ?? tl();
  if (m.length === 0) {
    m.push({
      colno: y,
      filename: T,
      function: wn,
      in_app: true,
      lineno: v
    });
  }
  return t;
}
function Rp(t) {
  if (as) {
    Y.log(`Global Handler attached: ${t}`);
  }
}
function rm() {
  const t = ze();
  return (t == null ? undefined : t.getOptions()) || {
    stackParser: () => [],
    attachStacktrace: false
  };
}
function I1(t) {
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
const N1 = () => ({
  name: "HttpContext",
  preprocessEvent(t) {
    var a;
    if (!Ce.navigator && !Ce.location && !Ce.document) {
      return;
    }
    const r = uS();
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
const k1 = "cause";
const C1 = 5;
const P1 = "LinkedErrors";
const R1 = (t = {}) => {
  const r = t.limit || C1;
  const o = t.key || k1;
  return {
    name: P1,
    preprocessEvent(a, u, f) {
      const d = f.getOptions();
      bE(cl, d.stackParser, o, r, a, u);
    }
  };
};
const L1 = R1;
function O1() {
  if (A1()) {
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
function A1() {
  var f;
  if (typeof Ce.window === "undefined") {
    return false;
  }
  const t = Ce;
  if (t.nw) {
    return false;
  }
  const r = t.chrome || t.browser;
  if ((f = r == null ? undefined : r.runtime) == null || !f.id) {
    return false;
  }
  const o = tl();
  const a = ["chrome-extension", "moz-extension", "ms-browser-extension", "safari-web-extension"];
  return Ce !== Ce.top || !a.some(d => o.startsWith(`${d}://`));
}
function im(t) {
  return [PE(), IE(), c1(), JS(), _1(), L1(), $E(), N1(), g1()];
}
function D1(t = {}) {
  const r = !t.skipBrowserExtensionCheck && O1();
  let o = t.defaultIntegrations == null ? im() : t.defaultIntegrations;
  const a = {
    ...t,
    enabled: r ? false : t.enabled,
    stackParser: nv(t.stackParser || KS),
    integrations: K_({
      integrations: t.integrations,
      defaultIntegrations: o
    }),
    transport: t.transport || bS
  };
  return vE(ES, a);
}
function Eu() {
  const t = il().getScopeData();
  const r = Yn().getScopeData();
  const o = Ut().getScopeData();
  Zo(t, r);
  Zo(t, o);
  t.eventProcessors = [];
  return t;
}
function M1(t) {
  Yn().addScopeListener(r => {
    const o = Eu();
    t(o, r);
  });
  Ut().addScopeListener(r => {
    const o = Eu();
    t(o, r);
  });
  il().addScopeListener(r => {
    const o = Eu();
    t(o, r);
  });
}
const F1 = () => ({
  name: "ScopeToMain",
  setup(t) {
    const r = qh(t);
    M1((o, a) => {
      r.sendScope(JSON.stringify(Ft(o, 20, 2000)));
      a.clearBreadcrumbs();
      a.clearAttachments();
    });
  }
});
function b1(t) {
  let r;
  return zh(t, async o => {
    r ||= qh();
    r.sendEnvelope(o.body);
    return {
      statusCode: 200
    };
  });
}
const H1 = 50;
const [, B1] = tm;
const [, U1] = rS();
const j1 = (t, r = 0) => {
  const o = [];
  for (const a of t.split(`
`).slice(r)) {
    const u = B1(a);
    const f = U1(a);
    if (u && (f == null ? undefined : f.in_app) !== false) {
      o.push(u);
    } else if (f) {
      if (f.module === undefined) {
        delete f.module;
      }
      o.push(f);
    }
    if (o.length >= H1) {
      break;
    }
  }
  return ph(o);
};
function z1(t) {
  return [...im().filter(r => r.name !== "BrowserSession"), F1()];
}
function $1(t = {}, r = D1) {
  if (window != null && window.__SENTRY__RENDERER_INIT__) {
    Y.warn(`The browser SDK has already been initialized.
If init has been called in the preload and contextIsolation is disabled, is not required to call init in the renderer`);
    return;
  }
  window.__SENTRY__RENDERER_INIT__ = true;
  t.sendClientReports = false;
  if (t.defaultIntegrations === undefined) {
    t.defaultIntegrations = z1();
  }
  if (t.stackParser === undefined) {
    t.stackParser = j1;
  }
  if (t.ipcNamespace === undefined) {
    t.ipcNamespace = "sentry-ipc";
  }
  if (t.dsn === undefined) {
    t.dsn = "https://12345@dummy.dsn/12345";
  }
  if (t.transport === undefined) {
    t.transport = b1;
  }
  delete t.initialScope;
  r(t);
}
var Dp;
if (window.desktopEssentialTelemetryDisabled !== true && ((Dp = window.process) == null || !Dp.env.CI)) {
  $1();
}
const om = window.matchMedia("(prefers-color-scheme: dark)");
const G1 = om.matches ? "darkTheme" : "";
document.body.className = G1;
om.addEventListener("change", t => {
  document.body.className = t.matches ? "darkTheme" : "";
});
const V1 = "modulepreload";
const W1 = function (t, r) {
  return new URL(t, r).href;
};
const Lp = {};
const X1 = function (r, o, a) {
  let u = Promise.resolve();
  if (o && o.length > 0) {
    let d = function (v) {
      return Promise.all(v.map(T => Promise.resolve(T).then(N => ({
        status: "fulfilled",
        value: N
      }), N => ({
        status: "rejected",
        reason: N
      }))));
    };
    const h = document.getElementsByTagName("link");
    const m = document.querySelector("meta[property=csp-nonce]");
    const y = (m == null ? undefined : m.nonce) || (m == null ? undefined : m.getAttribute("nonce"));
    u = d(o.map(v => {
      v = W1(v, a);
      if (v in Lp) {
        return;
      }
      Lp[v] = true;
      const T = v.endsWith(".css");
      const N = T ? "[rel=\"stylesheet\"]" : "";
      if (a) {
        for (let M = h.length - 1; M >= 0; M--) {
          const H = h[M];
          if (H.href === v && (!T || H.rel === "stylesheet")) {
            return;
          }
        }
      } else if (document.querySelector(`link[href="${v}"]${N}`)) {
        return;
      }
      const D = document.createElement("link");
      D.rel = T ? "stylesheet" : V1;
      if (!T) {
        D.as = "script";
      }
      D.crossOrigin = "";
      D.href = v;
      if (y) {
        D.setAttribute("nonce", y);
      }
      document.head.appendChild(D);
      if (T) {
        return new Promise((M, H) => {
          D.addEventListener("load", M);
          D.addEventListener("error", () => H(new Error(`Unable to preload CSS for ${v}`)));
        });
      }
    }));
  }
  function f(d) {
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
        f(h.reason);
      }
    }
    return r().catch(f);
  });
};
lh(document.querySelector("body"), X1(() => import("./BuddyWindow-B-EkqlhW.js"), [], import.meta.url));
export { es as _, Su as j, Xe as r, H0 as s, sh as u };