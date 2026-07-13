"use strict";

(function () {
  try {
    var n = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    n.SENTRY_RELEASE = {
      id: "df1d8a339dfabcf359af7144fe142b59ff7d9a0f"
    };
  } catch {}
})();
try {
  (function () {
    var n = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    var f = new n.Error().stack;
    if (f) {
      n._sentryDebugIds = n._sentryDebugIds || {};
      n._sentryDebugIds[f] = "6633eb84-6a57-41de-8bdf-e03d9b597a48";
      n._sentryDebugIdIdentifier = "sentry-dbid-6633eb84-6a57-41de-8bdf-e03d9b597a48";
    }
  })();
} catch {}
const Ee = require("./index.chunk-c42vKsva.js");
const Vi = require("electron");
const kr = require("fs");
const Sr = require("path");
const Sn = require("https");
const Ji = require("stream");
const En = require("events");
const $i = require("buffer");
const Qi = require("util");
function Cn(n, f) {
  for (var c = 0; c < f.length; c++) {
    const i = f[c];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const y in i) {
        if (y !== "default" && !(y in n)) {
          const u = Object.getOwnPropertyDescriptor(i, y);
          if (u) {
            Object.defineProperty(n, y, u.get ? u : {
              enumerable: true,
              get: () => i[y]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, {
    value: "Module"
  }));
}
var Ae = {};
var bt = {};
var yt = {};
var Ar;
function Rn() {
  if (!Ar) {
    Ar = 1;
    (function (n) {
      Object.defineProperty(n, "__esModule", {
        value: true
      });
      n.changePermissions = n.downloadFile = n.getPath = undefined;
      const f = Vi;
      const c = kr;
      const i = Sr;
      const y = Sn;
      const u = () => {
        const E = f.app.getPath("userData");
        return i.resolve(`${E}/extensions`);
      };
      n.getPath = u;
      const a = f.net ? f.net.request : y.get;
      const g = (E, w) => new Promise((d, t) => {
        const l = a(E);
        l.on("response", _ => {
          if (_.statusCode && _.statusCode >= 300 && _.statusCode < 400 && _.headers.location) {
            return (0, n.downloadFile)(_.headers.location, w).then(d).catch(t);
          }
          _.pipe(c.createWriteStream(w)).on("close", d);
          _.on("error", t);
        });
        l.on("error", t);
        l.end();
      });
      n.downloadFile = g;
      const h = (E, w) => {
        c.readdirSync(E).forEach(t => {
          const l = i.join(E, t);
          c.chmodSync(l, parseInt(`${w}`, 8));
          if (c.statSync(l).isDirectory()) {
            (0, n.changePermissions)(l, w);
          }
        });
      };
      n.changePermissions = h;
    })(yt);
  }
  return yt;
}
var xt = {};
var kt = {};
var Ue = {};
var dt = {
  exports: {}
};
var ct = {
  exports: {}
};
var Or;
function gt() {
  if (Or) {
    return ct.exports;
  }
  Or = 1;
  if (typeof process === "undefined" || !process.version || process.version.indexOf("v0.") === 0 || process.version.indexOf("v1.") === 0 && process.version.indexOf("v1.8.") !== 0) {
    ct.exports = {
      nextTick: n
    };
  } else {
    ct.exports = process;
  }
  function n(f, c, i, y) {
    if (typeof f != "function") {
      throw new TypeError("\"callback\" argument must be a function");
    }
    var u = arguments.length;
    var a;
    var g;
    switch (u) {
      case 0:
      case 1:
        return process.nextTick(f);
      case 2:
        return process.nextTick(function () {
          f.call(null, c);
        });
      case 3:
        return process.nextTick(function () {
          f.call(null, c, i);
        });
      case 4:
        return process.nextTick(function () {
          f.call(null, c, i, y);
        });
      default:
        a = new Array(u - 1);
        g = 0;
        while (g < a.length) {
          a[g++] = arguments[g];
        }
        return process.nextTick(function () {
          f.apply(null, a);
        });
    }
  }
  return ct.exports;
}
var St;
var Dr;
function Tn() {
  if (Dr) {
    return St;
  }
  Dr = 1;
  var n = {}.toString;
  St = Array.isArray || function (f) {
    return n.call(f) == "[object Array]";
  };
  return St;
}
var Et;
var Ir;
function en() {
  if (!Ir) {
    Ir = 1;
    Et = Ji;
  }
  return Et;
}
var vt = {
  exports: {}
};
var Br;
function mt() {
  if (!Br) {
    Br = 1;
    (function (n, f) {
      var c = $i;
      var i = c.Buffer;
      function y(a, g) {
        for (var h in a) {
          g[h] = a[h];
        }
      }
      if (i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow) {
        n.exports = c;
      } else {
        y(c, f);
        f.Buffer = u;
      }
      function u(a, g, h) {
        return i(a, g, h);
      }
      y(i, u);
      u.from = function (a, g, h) {
        if (typeof a == "number") {
          throw new TypeError("Argument must not be a number");
        }
        return i(a, g, h);
      };
      u.alloc = function (a, g, h) {
        if (typeof a != "number") {
          throw new TypeError("Argument must be a number");
        }
        var E = i(a);
        if (g !== undefined) {
          if (typeof h == "string") {
            E.fill(g, h);
          } else {
            E.fill(g);
          }
        } else {
          E.fill(0);
        }
        return E;
      };
      u.allocUnsafe = function (a) {
        if (typeof a != "number") {
          throw new TypeError("Argument must be a number");
        }
        return i(a);
      };
      u.allocUnsafeSlow = function (a) {
        if (typeof a != "number") {
          throw new TypeError("Argument must be a number");
        }
        return c.SlowBuffer(a);
      };
    })(vt, vt.exports);
  }
  return vt.exports;
}
var ze = {};
var Fr;
function st() {
  if (Fr) {
    return ze;
  }
  Fr = 1;
  function n(x) {
    if (Array.isArray) {
      return Array.isArray(x);
    } else {
      return _(x) === "[object Array]";
    }
  }
  ze.isArray = n;
  function f(x) {
    return typeof x == "boolean";
  }
  ze.isBoolean = f;
  function c(x) {
    return x === null;
  }
  ze.isNull = c;
  function i(x) {
    return x == null;
  }
  ze.isNullOrUndefined = i;
  function y(x) {
    return typeof x == "number";
  }
  ze.isNumber = y;
  function u(x) {
    return typeof x == "string";
  }
  ze.isString = u;
  function a(x) {
    return typeof x == "symbol";
  }
  ze.isSymbol = a;
  function g(x) {
    return x === undefined;
  }
  ze.isUndefined = g;
  function h(x) {
    return _(x) === "[object RegExp]";
  }
  ze.isRegExp = h;
  function E(x) {
    return typeof x == "object" && x !== null;
  }
  ze.isObject = E;
  function w(x) {
    return _(x) === "[object Date]";
  }
  ze.isDate = w;
  function d(x) {
    return _(x) === "[object Error]" || x instanceof Error;
  }
  ze.isError = d;
  function t(x) {
    return typeof x == "function";
  }
  ze.isFunction = t;
  function l(x) {
    return x === null || typeof x == "boolean" || typeof x == "number" || typeof x == "string" || typeof x == "symbol" || typeof x === "undefined";
  }
  ze.isPrimitive = l;
  ze.isBuffer = $i.Buffer.isBuffer;
  function _(x) {
    return Object.prototype.toString.call(x);
  }
  return ze;
}
var Ct = {
  exports: {}
};
var Nr;
function An() {
  if (!Nr) {
    Nr = 1;
    (function (n) {
      function f(u, a) {
        if (!(u instanceof a)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      var c = mt().Buffer;
      var i = Qi;
      function y(u, a, g) {
        u.copy(a, g);
      }
      n.exports = function () {
        function u() {
          f(this, u);
          this.head = null;
          this.tail = null;
          this.length = 0;
        }
        u.prototype.push = function (g) {
          var h = {
            data: g,
            next: null
          };
          if (this.length > 0) {
            this.tail.next = h;
          } else {
            this.head = h;
          }
          this.tail = h;
          ++this.length;
        };
        u.prototype.unshift = function (g) {
          var h = {
            data: g,
            next: this.head
          };
          if (this.length === 0) {
            this.tail = h;
          }
          this.head = h;
          ++this.length;
        };
        u.prototype.shift = function () {
          if (this.length !== 0) {
            var g = this.head.data;
            if (this.length === 1) {
              this.head = this.tail = null;
            } else {
              this.head = this.head.next;
            }
            --this.length;
            return g;
          }
        };
        u.prototype.clear = function () {
          this.head = this.tail = null;
          this.length = 0;
        };
        u.prototype.join = function (g) {
          if (this.length === 0) {
            return "";
          }
          for (var h = this.head, E = "" + h.data; h = h.next;) {
            E += g + h.data;
          }
          return E;
        };
        u.prototype.concat = function (g) {
          if (this.length === 0) {
            return c.alloc(0);
          }
          var h = c.allocUnsafe(g >>> 0);
          for (var E = this.head, w = 0; E;) {
            y(E.data, h, w);
            w += E.data.length;
            E = E.next;
          }
          return h;
        };
        return u;
      }();
      if (i && i.inspect && i.inspect.custom) {
        n.exports.prototype[i.inspect.custom] = function () {
          var u = i.inspect({
            length: this.length
          });
          return this.constructor.name + " " + u;
        };
      }
    })(Ct);
  }
  return Ct.exports;
}
var Rt;
var zr;
function tn() {
  if (zr) {
    return Rt;
  }
  zr = 1;
  var n = gt();
  function f(y, u) {
    var a = this;
    var g = this._readableState && this._readableState.destroyed;
    var h = this._writableState && this._writableState.destroyed;
    if (g || h) {
      if (u) {
        u(y);
      } else if (y) {
        if (this._writableState) {
          if (!this._writableState.errorEmitted) {
            this._writableState.errorEmitted = true;
            n.nextTick(i, this, y);
          }
        } else {
          n.nextTick(i, this, y);
        }
      }
      return this;
    } else {
      if (this._readableState) {
        this._readableState.destroyed = true;
      }
      if (this._writableState) {
        this._writableState.destroyed = true;
      }
      this._destroy(y || null, function (E) {
        if (!u && E) {
          if (a._writableState) {
            if (!a._writableState.errorEmitted) {
              a._writableState.errorEmitted = true;
              n.nextTick(i, a, E);
            }
          } else {
            n.nextTick(i, a, E);
          }
        } else if (u) {
          u(E);
        }
      });
      return this;
    }
  }
  function c() {
    if (this._readableState) {
      this._readableState.destroyed = false;
      this._readableState.reading = false;
      this._readableState.ended = false;
      this._readableState.endEmitted = false;
    }
    if (this._writableState) {
      this._writableState.destroyed = false;
      this._writableState.ended = false;
      this._writableState.ending = false;
      this._writableState.finalCalled = false;
      this._writableState.prefinished = false;
      this._writableState.finished = false;
      this._writableState.errorEmitted = false;
    }
  }
  function i(y, u) {
    y.emit("error", u);
  }
  Rt = {
    destroy: f,
    undestroy: c
  };
  return Rt;
}
var Tt;
var Lr;
function rn() {
  if (Lr) {
    return Tt;
  }
  Lr = 1;
  var n = gt();
  Tt = x;
  function f(R) {
    var A = this;
    this.next = null;
    this.entry = null;
    this.finish = function () {
      Se(A, R);
    };
  }
  var c = !process.browser && ["v0.10", "v0.9."].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : n.nextTick;
  var i;
  x.WritableState = l;
  var y = Object.create(st());
  y.inherits = Ee.requireInherits();
  var u = {
    deprecate: Ee.requireNode()
  };
  var a = en();
  var g = mt().Buffer;
  var h = (typeof Ee.commonjsGlobal !== "undefined" ? Ee.commonjsGlobal : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function () {};
  function E(R) {
    return g.from(R);
  }
  function w(R) {
    return g.isBuffer(R) || R instanceof h;
  }
  var d = tn();
  y.inherits(x, a);
  function t() {}
  function l(R, A) {
    i = i || at();
    R = R || {};
    var L = A instanceof i;
    this.objectMode = !!R.objectMode;
    if (L) {
      this.objectMode = this.objectMode || !!R.writableObjectMode;
    }
    var te = R.highWaterMark;
    var ae = R.writableHighWaterMark;
    var se = this.objectMode ? 16 : 16384;
    if (te || te === 0) {
      this.highWaterMark = te;
    } else if (L && (ae || ae === 0)) {
      this.highWaterMark = ae;
    } else {
      this.highWaterMark = se;
    }
    this.highWaterMark = Math.floor(this.highWaterMark);
    this.finalCalled = false;
    this.needDrain = false;
    this.ending = false;
    this.ended = false;
    this.finished = false;
    this.destroyed = false;
    var ne = R.decodeStrings === false;
    this.decodeStrings = !ne;
    this.defaultEncoding = R.defaultEncoding || "utf8";
    this.length = 0;
    this.writing = false;
    this.corked = 0;
    this.sync = true;
    this.bufferProcessing = false;
    this.onwrite = function (me) {
      P(A, me);
    };
    this.writecb = null;
    this.writelen = 0;
    this.bufferedRequest = null;
    this.lastBufferedRequest = null;
    this.pendingcb = 0;
    this.prefinished = false;
    this.errorEmitted = false;
    this.bufferedRequestCount = 0;
    this.corkedRequestsFree = new f(this);
  }
  l.prototype.getBuffer = function () {
    for (var A = this.bufferedRequest, L = []; A;) {
      L.push(A);
      A = A.next;
    }
    return L;
  };
  (function () {
    try {
      Object.defineProperty(l.prototype, "buffer", {
        get: u.deprecate(function () {
          return this.getBuffer();
        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
      });
    } catch {}
  })();
  var _;
  if (typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function") {
    _ = Function.prototype[Symbol.hasInstance];
    Object.defineProperty(x, Symbol.hasInstance, {
      value: function (R) {
        if (_.call(this, R)) {
          return true;
        } else if (this !== x) {
          return false;
        } else {
          return R && R._writableState instanceof l;
        }
      }
    });
  } else {
    _ = function (R) {
      return R instanceof this;
    };
  }
  function x(R) {
    i = i || at();
    if (!_.call(x, this) && !(this instanceof i)) {
      return new x(R);
    }
    this._writableState = new l(R, this);
    this.writable = true;
    if (R) {
      if (typeof R.write == "function") {
        this._write = R.write;
      }
      if (typeof R.writev == "function") {
        this._writev = R.writev;
      }
      if (typeof R.destroy == "function") {
        this._destroy = R.destroy;
      }
      if (typeof R.final == "function") {
        this._final = R.final;
      }
    }
    a.call(this);
  }
  x.prototype.pipe = function () {
    this.emit("error", new Error("Cannot pipe, not readable"));
  };
  function C(R, A) {
    var L = new Error("write after end");
    R.emit("error", L);
    n.nextTick(A, L);
  }
  function s(R, A, L, te) {
    var ae = true;
    var se = false;
    if (L === null) {
      se = new TypeError("May not write null values to stream");
    } else if (typeof L != "string" && L !== undefined && !A.objectMode) {
      se = new TypeError("Invalid non-string/buffer chunk");
    }
    if (se) {
      R.emit("error", se);
      n.nextTick(te, se);
      ae = false;
    }
    return ae;
  }
  x.prototype.write = function (R, A, L) {
    var te = this._writableState;
    var ae = false;
    var se = !te.objectMode && w(R);
    if (se && !g.isBuffer(R)) {
      R = E(R);
    }
    if (typeof A == "function") {
      L = A;
      A = null;
    }
    if (se) {
      A = "buffer";
    } else {
      A ||= te.defaultEncoding;
    }
    if (typeof L != "function") {
      L = t;
    }
    if (te.ended) {
      C(this, L);
    } else if (se || s(this, te, R, L)) {
      te.pendingcb++;
      ae = S(this, te, se, R, A, L);
    }
    return ae;
  };
  x.prototype.cork = function () {
    var R = this._writableState;
    R.corked++;
  };
  x.prototype.uncork = function () {
    var R = this._writableState;
    if (R.corked) {
      R.corked--;
      if (!R.writing && !R.corked && !R.bufferProcessing && R.bufferedRequest) {
        oe(this, R);
      }
    }
  };
  x.prototype.setDefaultEncoding = function (A) {
    if (typeof A == "string") {
      A = A.toLowerCase();
    }
    if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((A + "").toLowerCase()) > -1)) {
      throw new TypeError("Unknown encoding: " + A);
    }
    this._writableState.defaultEncoding = A;
    return this;
  };
  function p(R, A, L) {
    if (!R.objectMode && R.decodeStrings !== false && typeof A == "string") {
      A = g.from(A, L);
    }
    return A;
  }
  Object.defineProperty(x.prototype, "writableHighWaterMark", {
    enumerable: false,
    get: function () {
      return this._writableState.highWaterMark;
    }
  });
  function S(R, A, L, te, ae, se) {
    if (!L) {
      var ne = p(A, te, ae);
      if (te !== ne) {
        L = true;
        ae = "buffer";
        te = ne;
      }
    }
    var me = A.objectMode ? 1 : te.length;
    A.length += me;
    var ye = A.length < A.highWaterMark;
    if (!ye) {
      A.needDrain = true;
    }
    if (A.writing || A.corked) {
      var ve = A.lastBufferedRequest;
      A.lastBufferedRequest = {
        chunk: te,
        encoding: ae,
        isBuf: L,
        callback: se,
        next: null
      };
      if (ve) {
        ve.next = A.lastBufferedRequest;
      } else {
        A.bufferedRequest = A.lastBufferedRequest;
      }
      A.bufferedRequestCount += 1;
    } else {
      O(R, A, false, me, te, ae, se);
    }
    return ye;
  }
  function O(R, A, L, te, ae, se, ne) {
    A.writelen = te;
    A.writecb = ne;
    A.writing = true;
    A.sync = true;
    if (L) {
      R._writev(ae, A.onwrite);
    } else {
      R._write(ae, se, A.onwrite);
    }
    A.sync = false;
  }
  function F(R, A, L, te, ae) {
    --A.pendingcb;
    if (L) {
      n.nextTick(ae, te);
      n.nextTick(ee, R, A);
      R._writableState.errorEmitted = true;
      R.emit("error", te);
    } else {
      ae(te);
      R._writableState.errorEmitted = true;
      R.emit("error", te);
      ee(R, A);
    }
  }
  function H(R) {
    R.writing = false;
    R.writecb = null;
    R.length -= R.writelen;
    R.writelen = 0;
  }
  function P(R, A) {
    var L = R._writableState;
    var te = L.sync;
    var ae = L.writecb;
    H(L);
    if (A) {
      F(R, L, te, A, ae);
    } else {
      var se = le(L);
      if (!se && !L.corked && !L.bufferProcessing && L.bufferedRequest) {
        oe(R, L);
      }
      if (te) {
        c(V, R, L, se, ae);
      } else {
        V(R, L, se, ae);
      }
    }
  }
  function V(R, A, L, te) {
    if (!L) {
      ue(R, A);
    }
    A.pendingcb--;
    te();
    ee(R, A);
  }
  function ue(R, A) {
    if (A.length === 0 && A.needDrain) {
      A.needDrain = false;
      R.emit("drain");
    }
  }
  function oe(R, A) {
    A.bufferProcessing = true;
    var L = A.bufferedRequest;
    if (R._writev && L && L.next) {
      var te = A.bufferedRequestCount;
      var ae = new Array(te);
      var se = A.corkedRequestsFree;
      se.entry = L;
      var ne = 0;
      var me = true;
      for (; L;) {
        ae[ne] = L;
        if (!L.isBuf) {
          me = false;
        }
        L = L.next;
        ne += 1;
      }
      ae.allBuffers = me;
      O(R, A, true, A.length, ae, "", se.finish);
      A.pendingcb++;
      A.lastBufferedRequest = null;
      if (se.next) {
        A.corkedRequestsFree = se.next;
        se.next = null;
      } else {
        A.corkedRequestsFree = new f(A);
      }
      A.bufferedRequestCount = 0;
    } else {
      while (L) {
        var ye = L.chunk;
        var ve = L.encoding;
        var m = L.callback;
        var b = A.objectMode ? 1 : ye.length;
        O(R, A, false, b, ye, ve, m);
        L = L.next;
        A.bufferedRequestCount--;
        if (A.writing) {
          break;
        }
      }
      if (L === null) {
        A.lastBufferedRequest = null;
      }
    }
    A.bufferedRequest = L;
    A.bufferProcessing = false;
  }
  x.prototype._write = function (R, A, L) {
    L(new Error("_write() is not implemented"));
  };
  x.prototype._writev = null;
  x.prototype.end = function (R, A, L) {
    var te = this._writableState;
    if (typeof R == "function") {
      L = R;
      R = null;
      A = null;
    } else if (typeof A == "function") {
      L = A;
      A = null;
    }
    if (R != null) {
      this.write(R, A);
    }
    if (te.corked) {
      te.corked = 1;
      this.uncork();
    }
    if (!te.ending) {
      be(this, te, L);
    }
  };
  function le(R) {
    return R.ending && R.length === 0 && R.bufferedRequest === null && !R.finished && !R.writing;
  }
  function he(R, A) {
    R._final(function (L) {
      A.pendingcb--;
      if (L) {
        R.emit("error", L);
      }
      A.prefinished = true;
      R.emit("prefinish");
      ee(R, A);
    });
  }
  function K(R, A) {
    if (!A.prefinished && !A.finalCalled) {
      if (typeof R._final == "function") {
        A.pendingcb++;
        A.finalCalled = true;
        n.nextTick(he, R, A);
      } else {
        A.prefinished = true;
        R.emit("prefinish");
      }
    }
  }
  function ee(R, A) {
    var L = le(A);
    if (L) {
      K(R, A);
      if (A.pendingcb === 0) {
        A.finished = true;
        R.emit("finish");
      }
    }
    return L;
  }
  function be(R, A, L) {
    A.ending = true;
    ee(R, A);
    if (L) {
      if (A.finished) {
        n.nextTick(L);
      } else {
        R.once("finish", L);
      }
    }
    A.ended = true;
    R.writable = false;
  }
  function Se(R, A, L) {
    var te = R.entry;
    for (R.entry = null; te;) {
      var ae = te.callback;
      A.pendingcb--;
      ae(L);
      te = te.next;
    }
    A.corkedRequestsFree.next = R;
  }
  Object.defineProperty(x.prototype, "destroyed", {
    get: function () {
      if (this._writableState === undefined) {
        return false;
      } else {
        return this._writableState.destroyed;
      }
    },
    set: function (R) {
      if (this._writableState) {
        this._writableState.destroyed = R;
      }
    }
  });
  x.prototype.destroy = d.destroy;
  x.prototype._undestroy = d.undestroy;
  x.prototype._destroy = function (R, A) {
    this.end();
    A(R);
  };
  return Tt;
}
var At;
var Pr;
function at() {
  if (Pr) {
    return At;
  }
  Pr = 1;
  var n = gt();
  var f = Object.keys || function (d) {
    var t = [];
    for (var l in d) {
      t.push(l);
    }
    return t;
  };
  At = h;
  var c = Object.create(st());
  c.inherits = Ee.requireInherits();
  var i = nn();
  var y = rn();
  c.inherits(h, i);
  for (var u = f(y.prototype), a = 0; a < u.length; a++) {
    var g = u[a];
    h.prototype[g] ||= y.prototype[g];
  }
  function h(d) {
    if (!(this instanceof h)) {
      return new h(d);
    }
    i.call(this, d);
    y.call(this, d);
    if (d && d.readable === false) {
      this.readable = false;
    }
    if (d && d.writable === false) {
      this.writable = false;
    }
    this.allowHalfOpen = true;
    if (d && d.allowHalfOpen === false) {
      this.allowHalfOpen = false;
    }
    this.once("end", E);
  }
  Object.defineProperty(h.prototype, "writableHighWaterMark", {
    enumerable: false,
    get: function () {
      return this._writableState.highWaterMark;
    }
  });
  function E() {
    if (!this.allowHalfOpen && !this._writableState.ended) {
      n.nextTick(w, this);
    }
  }
  function w(d) {
    d.end();
  }
  Object.defineProperty(h.prototype, "destroyed", {
    get: function () {
      if (this._readableState === undefined || this._writableState === undefined) {
        return false;
      } else {
        return this._readableState.destroyed && this._writableState.destroyed;
      }
    },
    set: function (d) {
      if (this._readableState !== undefined && this._writableState !== undefined) {
        this._readableState.destroyed = d;
        this._writableState.destroyed = d;
      }
    }
  });
  h.prototype._destroy = function (d, t) {
    this.push(null);
    this.end();
    n.nextTick(t, d);
  };
  return At;
}
var Ot = {};
var jr;
function qr() {
  if (jr) {
    return Ot;
  }
  jr = 1;
  var n = mt().Buffer;
  var f = n.isEncoding || function (s) {
    s = "" + s;
    switch (s && s.toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
      case "raw":
        return true;
      default:
        return false;
    }
  };
  function c(s) {
    if (!s) {
      return "utf8";
    }
    var p;
    for (;;) {
      switch (s) {
        case "utf8":
        case "utf-8":
          return "utf8";
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return "utf16le";
        case "latin1":
        case "binary":
          return "latin1";
        case "base64":
        case "ascii":
        case "hex":
          return s;
        default:
          if (p) {
            return;
          }
          s = ("" + s).toLowerCase();
          p = true;
      }
    }
  }
  function i(s) {
    var p = c(s);
    if (typeof p != "string" && (n.isEncoding === f || !f(s))) {
      throw new Error("Unknown encoding: " + s);
    }
    return p || s;
  }
  Ot.StringDecoder = y;
  function y(s) {
    this.encoding = i(s);
    var p;
    switch (this.encoding) {
      case "utf16le":
        this.text = d;
        this.end = t;
        p = 4;
        break;
      case "utf8":
        this.fillLast = h;
        p = 4;
        break;
      case "base64":
        this.text = l;
        this.end = _;
        p = 3;
        break;
      default:
        this.write = x;
        this.end = C;
        return;
    }
    this.lastNeed = 0;
    this.lastTotal = 0;
    this.lastChar = n.allocUnsafe(p);
  }
  y.prototype.write = function (s) {
    if (s.length === 0) {
      return "";
    }
    var p;
    var S;
    if (this.lastNeed) {
      p = this.fillLast(s);
      if (p === undefined) {
        return "";
      }
      S = this.lastNeed;
      this.lastNeed = 0;
    } else {
      S = 0;
    }
    if (S < s.length) {
      if (p) {
        return p + this.text(s, S);
      } else {
        return this.text(s, S);
      }
    } else {
      return p || "";
    }
  };
  y.prototype.end = w;
  y.prototype.text = E;
  y.prototype.fillLast = function (s) {
    if (this.lastNeed <= s.length) {
      s.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
      return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    s.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, s.length);
    this.lastNeed -= s.length;
  };
  function u(s) {
    if (s <= 127) {
      return 0;
    } else if (s >> 5 === 6) {
      return 2;
    } else if (s >> 4 === 14) {
      return 3;
    } else if (s >> 3 === 30) {
      return 4;
    } else if (s >> 6 === 2) {
      return -1;
    } else {
      return -2;
    }
  }
  function a(s, p, S) {
    var O = p.length - 1;
    if (O < S) {
      return 0;
    }
    var F = u(p[O]);
    if (F >= 0) {
      if (F > 0) {
        s.lastNeed = F - 1;
      }
      return F;
    } else if (--O < S || F === -2) {
      return 0;
    } else {
      F = u(p[O]);
      if (F >= 0) {
        if (F > 0) {
          s.lastNeed = F - 2;
        }
        return F;
      } else if (--O < S || F === -2) {
        return 0;
      } else {
        F = u(p[O]);
        if (F >= 0) {
          if (F > 0) {
            if (F === 2) {
              F = 0;
            } else {
              s.lastNeed = F - 3;
            }
          }
          return F;
        } else {
          return 0;
        }
      }
    }
  }
  function g(s, p, S) {
    if ((p[0] & 192) !== 128) {
      s.lastNeed = 0;
      return "�";
    }
    if (s.lastNeed > 1 && p.length > 1) {
      if ((p[1] & 192) !== 128) {
        s.lastNeed = 1;
        return "�";
      }
      if (s.lastNeed > 2 && p.length > 2 && (p[2] & 192) !== 128) {
        s.lastNeed = 2;
        return "�";
      }
    }
  }
  function h(s) {
    var p = this.lastTotal - this.lastNeed;
    var S = g(this, s);
    if (S !== undefined) {
      return S;
    }
    if (this.lastNeed <= s.length) {
      s.copy(this.lastChar, p, 0, this.lastNeed);
      return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    s.copy(this.lastChar, p, 0, s.length);
    this.lastNeed -= s.length;
  }
  function E(s, p) {
    var S = a(this, s, p);
    if (!this.lastNeed) {
      return s.toString("utf8", p);
    }
    this.lastTotal = S;
    var O = s.length - (S - this.lastNeed);
    s.copy(this.lastChar, 0, O);
    return s.toString("utf8", p, O);
  }
  function w(s) {
    var p = s && s.length ? this.write(s) : "";
    if (this.lastNeed) {
      return p + "�";
    } else {
      return p;
    }
  }
  function d(s, p) {
    if ((s.length - p) % 2 === 0) {
      var S = s.toString("utf16le", p);
      if (S) {
        var O = S.charCodeAt(S.length - 1);
        if (O >= 55296 && O <= 56319) {
          this.lastNeed = 2;
          this.lastTotal = 4;
          this.lastChar[0] = s[s.length - 2];
          this.lastChar[1] = s[s.length - 1];
          return S.slice(0, -1);
        }
      }
      return S;
    }
    this.lastNeed = 1;
    this.lastTotal = 2;
    this.lastChar[0] = s[s.length - 1];
    return s.toString("utf16le", p, s.length - 1);
  }
  function t(s) {
    var p = s && s.length ? this.write(s) : "";
    if (this.lastNeed) {
      var S = this.lastTotal - this.lastNeed;
      return p + this.lastChar.toString("utf16le", 0, S);
    }
    return p;
  }
  function l(s, p) {
    var S = (s.length - p) % 3;
    if (S === 0) {
      return s.toString("base64", p);
    } else {
      this.lastNeed = 3 - S;
      this.lastTotal = 3;
      if (S === 1) {
        this.lastChar[0] = s[s.length - 1];
      } else {
        this.lastChar[0] = s[s.length - 2];
        this.lastChar[1] = s[s.length - 1];
      }
      return s.toString("base64", p, s.length - S);
    }
  }
  function _(s) {
    var p = s && s.length ? this.write(s) : "";
    if (this.lastNeed) {
      return p + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
    } else {
      return p;
    }
  }
  function x(s) {
    return s.toString(this.encoding);
  }
  function C(s) {
    if (s && s.length) {
      return this.write(s);
    } else {
      return "";
    }
  }
  return Ot;
}
var Dt;
var Ur;
function nn() {
  if (Ur) {
    return Dt;
  }
  Ur = 1;
  var n = gt();
  Dt = p;
  var f = Tn();
  var c;
  p.ReadableState = s;
  En.EventEmitter;
  function i(m, b) {
    return m.listeners(b).length;
  }
  var y = en();
  var u = mt().Buffer;
  var a = (typeof Ee.commonjsGlobal !== "undefined" ? Ee.commonjsGlobal : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function () {};
  function g(m) {
    return u.from(m);
  }
  function h(m) {
    return u.isBuffer(m) || m instanceof a;
  }
  var E = Object.create(st());
  E.inherits = Ee.requireInherits();
  var w = Qi;
  var d = undefined;
  if (w && w.debuglog) {
    d = w.debuglog("stream");
  } else {
    d = function () {};
  }
  var t = An();
  var l = tn();
  var _;
  E.inherits(p, y);
  var x = ["error", "close", "destroy", "pause", "resume"];
  function C(m, b, q) {
    if (typeof m.prependListener == "function") {
      return m.prependListener(b, q);
    }
    if (!m._events || !m._events[b]) {
      m.on(b, q);
    } else if (f(m._events[b])) {
      m._events[b].unshift(q);
    } else {
      m._events[b] = [q, m._events[b]];
    }
  }
  function s(m, b) {
    c = c || at();
    m = m || {};
    var q = b instanceof c;
    this.objectMode = !!m.objectMode;
    if (q) {
      this.objectMode = this.objectMode || !!m.readableObjectMode;
    }
    var G = m.highWaterMark;
    var ce = m.readableHighWaterMark;
    var Y = this.objectMode ? 16 : 16384;
    if (G || G === 0) {
      this.highWaterMark = G;
    } else if (q && (ce || ce === 0)) {
      this.highWaterMark = ce;
    } else {
      this.highWaterMark = Y;
    }
    this.highWaterMark = Math.floor(this.highWaterMark);
    this.buffer = new t();
    this.length = 0;
    this.pipes = null;
    this.pipesCount = 0;
    this.flowing = null;
    this.ended = false;
    this.endEmitted = false;
    this.reading = false;
    this.sync = true;
    this.needReadable = false;
    this.emittedReadable = false;
    this.readableListening = false;
    this.resumeScheduled = false;
    this.destroyed = false;
    this.defaultEncoding = m.defaultEncoding || "utf8";
    this.awaitDrain = 0;
    this.readingMore = false;
    this.decoder = null;
    this.encoding = null;
    if (m.encoding) {
      _ ||= qr().StringDecoder;
      this.decoder = new _(m.encoding);
      this.encoding = m.encoding;
    }
  }
  function p(m) {
    c = c || at();
    if (!(this instanceof p)) {
      return new p(m);
    }
    this._readableState = new s(m, this);
    this.readable = true;
    if (m) {
      if (typeof m.read == "function") {
        this._read = m.read;
      }
      if (typeof m.destroy == "function") {
        this._destroy = m.destroy;
      }
    }
    y.call(this);
  }
  Object.defineProperty(p.prototype, "destroyed", {
    get: function () {
      if (this._readableState === undefined) {
        return false;
      } else {
        return this._readableState.destroyed;
      }
    },
    set: function (m) {
      if (this._readableState) {
        this._readableState.destroyed = m;
      }
    }
  });
  p.prototype.destroy = l.destroy;
  p.prototype._undestroy = l.undestroy;
  p.prototype._destroy = function (m, b) {
    this.push(null);
    b(m);
  };
  p.prototype.push = function (m, b) {
    var q = this._readableState;
    var G;
    if (q.objectMode) {
      G = true;
    } else if (typeof m == "string") {
      b = b || q.defaultEncoding;
      if (b !== q.encoding) {
        m = u.from(m, b);
        b = "";
      }
      G = true;
    }
    return S(this, m, b, false, G);
  };
  p.prototype.unshift = function (m) {
    return S(this, m, null, true, false);
  };
  function S(m, b, q, G, ce) {
    var Y = m._readableState;
    if (b === null) {
      Y.reading = false;
      oe(m, Y);
    } else {
      var fe;
      if (!ce) {
        fe = F(Y, b);
      }
      if (fe) {
        m.emit("error", fe);
      } else if (Y.objectMode || b && b.length > 0) {
        if (typeof b != "string" && !Y.objectMode && Object.getPrototypeOf(b) !== u.prototype) {
          b = g(b);
        }
        if (G) {
          if (Y.endEmitted) {
            m.emit("error", new Error("stream.unshift() after end event"));
          } else {
            O(m, Y, b, true);
          }
        } else if (Y.ended) {
          m.emit("error", new Error("stream.push() after EOF"));
        } else {
          Y.reading = false;
          if (Y.decoder && !q) {
            b = Y.decoder.write(b);
            if (Y.objectMode || b.length !== 0) {
              O(m, Y, b, false);
            } else {
              K(m, Y);
            }
          } else {
            O(m, Y, b, false);
          }
        }
      } else if (!G) {
        Y.reading = false;
      }
    }
    return H(Y);
  }
  function O(m, b, q, G) {
    if (b.flowing && b.length === 0 && !b.sync) {
      m.emit("data", q);
      m.read(0);
    } else {
      b.length += b.objectMode ? 1 : q.length;
      if (G) {
        b.buffer.unshift(q);
      } else {
        b.buffer.push(q);
      }
      if (b.needReadable) {
        le(m);
      }
    }
    K(m, b);
  }
  function F(m, b) {
    var q;
    if (!h(b) && typeof b != "string" && b !== undefined && !m.objectMode) {
      q = new TypeError("Invalid non-string/buffer chunk");
    }
    return q;
  }
  function H(m) {
    return !m.ended && (m.needReadable || m.length < m.highWaterMark || m.length === 0);
  }
  p.prototype.isPaused = function () {
    return this._readableState.flowing === false;
  };
  p.prototype.setEncoding = function (m) {
    _ ||= qr().StringDecoder;
    this._readableState.decoder = new _(m);
    this._readableState.encoding = m;
    return this;
  };
  var P = 8388608;
  function V(m) {
    if (m >= P) {
      m = P;
    } else {
      m--;
      m |= m >>> 1;
      m |= m >>> 2;
      m |= m >>> 4;
      m |= m >>> 8;
      m |= m >>> 16;
      m++;
    }
    return m;
  }
  function ue(m, b) {
    if (m <= 0 || b.length === 0 && b.ended) {
      return 0;
    } else if (b.objectMode) {
      return 1;
    } else if (m !== m) {
      if (b.flowing && b.length) {
        return b.buffer.head.data.length;
      } else {
        return b.length;
      }
    } else {
      if (m > b.highWaterMark) {
        b.highWaterMark = V(m);
      }
      if (m <= b.length) {
        return m;
      } else if (b.ended) {
        return b.length;
      } else {
        b.needReadable = true;
        return 0;
      }
    }
  }
  p.prototype.read = function (m) {
    d("read", m);
    m = parseInt(m, 10);
    var b = this._readableState;
    var q = m;
    if (m !== 0) {
      b.emittedReadable = false;
    }
    if (m === 0 && b.needReadable && (b.length >= b.highWaterMark || b.ended)) {
      d("read: emitReadable", b.length, b.ended);
      if (b.length === 0 && b.ended) {
        me(this);
      } else {
        le(this);
      }
      return null;
    }
    m = ue(m, b);
    if (m === 0 && b.ended) {
      if (b.length === 0) {
        me(this);
      }
      return null;
    }
    var G = b.needReadable;
    d("need readable", G);
    if (b.length === 0 || b.length - m < b.highWaterMark) {
      G = true;
      d("length less than watermark", G);
    }
    if (b.ended || b.reading) {
      G = false;
      d("reading or ended", G);
    } else if (G) {
      d("do read");
      b.reading = true;
      b.sync = true;
      if (b.length === 0) {
        b.needReadable = true;
      }
      this._read(b.highWaterMark);
      b.sync = false;
      if (!b.reading) {
        m = ue(q, b);
      }
    }
    var ce;
    if (m > 0) {
      ce = te(m, b);
    } else {
      ce = null;
    }
    if (ce === null) {
      b.needReadable = true;
      m = 0;
    } else {
      b.length -= m;
    }
    if (b.length === 0) {
      if (!b.ended) {
        b.needReadable = true;
      }
      if (q !== m && b.ended) {
        me(this);
      }
    }
    if (ce !== null) {
      this.emit("data", ce);
    }
    return ce;
  };
  function oe(m, b) {
    if (!b.ended) {
      if (b.decoder) {
        var q = b.decoder.end();
        if (q && q.length) {
          b.buffer.push(q);
          b.length += b.objectMode ? 1 : q.length;
        }
      }
      b.ended = true;
      le(m);
    }
  }
  function le(m) {
    var b = m._readableState;
    b.needReadable = false;
    if (!b.emittedReadable) {
      d("emitReadable", b.flowing);
      b.emittedReadable = true;
      if (b.sync) {
        n.nextTick(he, m);
      } else {
        he(m);
      }
    }
  }
  function he(m) {
    d("emit readable");
    m.emit("readable");
    L(m);
  }
  function K(m, b) {
    if (!b.readingMore) {
      b.readingMore = true;
      n.nextTick(ee, m, b);
    }
  }
  function ee(m, b) {
    for (var q = b.length; !b.reading && !b.flowing && !b.ended && b.length < b.highWaterMark && (d("maybeReadMore read 0"), m.read(0), q !== b.length);) {
      q = b.length;
    }
    b.readingMore = false;
  }
  p.prototype._read = function (m) {
    this.emit("error", new Error("_read() is not implemented"));
  };
  p.prototype.pipe = function (m, b) {
    var q = this;
    var G = this._readableState;
    switch (G.pipesCount) {
      case 0:
        G.pipes = m;
        break;
      case 1:
        G.pipes = [G.pipes, m];
        break;
      default:
        G.pipes.push(m);
        break;
    }
    G.pipesCount += 1;
    d("pipe count=%d opts=%j", G.pipesCount, b);
    var ce = (!b || b.end !== false) && m !== process.stdout && m !== process.stderr;
    var Y = ce ? je : j;
    if (G.endEmitted) {
      n.nextTick(Y);
    } else {
      q.once("end", Y);
    }
    m.on("unpipe", fe);
    function fe(W, J) {
      d("onunpipe");
      if (W === q && J && J.hasUnpiped === false) {
        J.hasUnpiped = true;
        xe();
      }
    }
    function je() {
      d("onend");
      m.end();
    }
    var Ie = be(q);
    m.on("drain", Ie);
    var Be = false;
    function xe() {
      d("cleanup");
      m.removeListener("close", Pe);
      m.removeListener("finish", B);
      m.removeListener("drain", Ie);
      m.removeListener("error", Me);
      m.removeListener("unpipe", fe);
      q.removeListener("end", je);
      q.removeListener("end", j);
      q.removeListener("data", Oe);
      Be = true;
      if (G.awaitDrain && (!m._writableState || m._writableState.needDrain)) {
        Ie();
      }
    }
    var re = false;
    q.on("data", Oe);
    function Oe(W) {
      d("ondata");
      re = false;
      var J = m.write(W);
      if (J === false && !re) {
        if ((G.pipesCount === 1 && G.pipes === m || G.pipesCount > 1 && ve(G.pipes, m) !== -1) && !Be) {
          d("false write response, pause", G.awaitDrain);
          G.awaitDrain++;
          re = true;
        }
        q.pause();
      }
    }
    function Me(W) {
      d("onerror", W);
      j();
      m.removeListener("error", Me);
      if (i(m, "error") === 0) {
        m.emit("error", W);
      }
    }
    C(m, "error", Me);
    function Pe() {
      m.removeListener("finish", B);
      j();
    }
    m.once("close", Pe);
    function B() {
      d("onfinish");
      m.removeListener("close", Pe);
      j();
    }
    m.once("finish", B);
    function j() {
      d("unpipe");
      q.unpipe(m);
    }
    m.emit("pipe", q);
    if (!G.flowing) {
      d("pipe resume");
      q.resume();
    }
    return m;
  };
  function be(m) {
    return function () {
      var b = m._readableState;
      d("pipeOnDrain", b.awaitDrain);
      if (b.awaitDrain) {
        b.awaitDrain--;
      }
      if (b.awaitDrain === 0 && i(m, "data")) {
        b.flowing = true;
        L(m);
      }
    };
  }
  p.prototype.unpipe = function (m) {
    var b = this._readableState;
    var q = {
      hasUnpiped: false
    };
    if (b.pipesCount === 0) {
      return this;
    }
    if (b.pipesCount === 1) {
      if (m && m !== b.pipes) {
        return this;
      } else {
        m ||= b.pipes;
        b.pipes = null;
        b.pipesCount = 0;
        b.flowing = false;
        if (m) {
          m.emit("unpipe", this, q);
        }
        return this;
      }
    }
    if (!m) {
      var G = b.pipes;
      var ce = b.pipesCount;
      b.pipes = null;
      b.pipesCount = 0;
      b.flowing = false;
      for (var Y = 0; Y < ce; Y++) {
        G[Y].emit("unpipe", this, {
          hasUnpiped: false
        });
      }
      return this;
    }
    var fe = ve(b.pipes, m);
    if (fe === -1) {
      return this;
    } else {
      b.pipes.splice(fe, 1);
      b.pipesCount -= 1;
      if (b.pipesCount === 1) {
        b.pipes = b.pipes[0];
      }
      m.emit("unpipe", this, q);
      return this;
    }
  };
  p.prototype.on = function (m, b) {
    var q = y.prototype.on.call(this, m, b);
    if (m === "data") {
      if (this._readableState.flowing !== false) {
        this.resume();
      }
    } else if (m === "readable") {
      var G = this._readableState;
      if (!G.endEmitted && !G.readableListening) {
        G.readableListening = G.needReadable = true;
        G.emittedReadable = false;
        if (G.reading) {
          if (G.length) {
            le(this);
          }
        } else {
          n.nextTick(Se, this);
        }
      }
    }
    return q;
  };
  p.prototype.addListener = p.prototype.on;
  function Se(m) {
    d("readable nexttick read 0");
    m.read(0);
  }
  p.prototype.resume = function () {
    var m = this._readableState;
    if (!m.flowing) {
      d("resume");
      m.flowing = true;
      R(this, m);
    }
    return this;
  };
  function R(m, b) {
    if (!b.resumeScheduled) {
      b.resumeScheduled = true;
      n.nextTick(A, m, b);
    }
  }
  function A(m, b) {
    if (!b.reading) {
      d("resume read 0");
      m.read(0);
    }
    b.resumeScheduled = false;
    b.awaitDrain = 0;
    m.emit("resume");
    L(m);
    if (b.flowing && !b.reading) {
      m.read(0);
    }
  }
  p.prototype.pause = function () {
    d("call pause flowing=%j", this._readableState.flowing);
    if (this._readableState.flowing !== false) {
      d("pause");
      this._readableState.flowing = false;
      this.emit("pause");
    }
    return this;
  };
  function L(m) {
    var b = m._readableState;
    for (d("flow", b.flowing); b.flowing && m.read() !== null;);
  }
  p.prototype.wrap = function (m) {
    var b = this;
    var q = this._readableState;
    var G = false;
    m.on("end", function () {
      d("wrapped end");
      if (q.decoder && !q.ended) {
        var fe = q.decoder.end();
        if (fe && fe.length) {
          b.push(fe);
        }
      }
      b.push(null);
    });
    m.on("data", function (fe) {
      d("wrapped data");
      if (q.decoder) {
        fe = q.decoder.write(fe);
      }
      if ((!q.objectMode || fe != null) && (!!q.objectMode || !!fe && !!fe.length)) {
        var je = b.push(fe);
        if (!je) {
          G = true;
          m.pause();
        }
      }
    });
    for (var ce in m) {
      if (this[ce] === undefined && typeof m[ce] == "function") {
        this[ce] = function (fe) {
          return function () {
            return m[fe].apply(m, arguments);
          };
        }(ce);
      }
    }
    for (var Y = 0; Y < x.length; Y++) {
      m.on(x[Y], this.emit.bind(this, x[Y]));
    }
    this._read = function (fe) {
      d("wrapped _read", fe);
      if (G) {
        G = false;
        m.resume();
      }
    };
    return this;
  };
  Object.defineProperty(p.prototype, "readableHighWaterMark", {
    enumerable: false,
    get: function () {
      return this._readableState.highWaterMark;
    }
  });
  p._fromList = te;
  function te(m, b) {
    if (b.length === 0) {
      return null;
    }
    var q;
    if (b.objectMode) {
      q = b.buffer.shift();
    } else if (!m || m >= b.length) {
      if (b.decoder) {
        q = b.buffer.join("");
      } else if (b.buffer.length === 1) {
        q = b.buffer.head.data;
      } else {
        q = b.buffer.concat(b.length);
      }
      b.buffer.clear();
    } else {
      q = ae(m, b.buffer, b.decoder);
    }
    return q;
  }
  function ae(m, b, q) {
    var G;
    if (m < b.head.data.length) {
      G = b.head.data.slice(0, m);
      b.head.data = b.head.data.slice(m);
    } else if (m === b.head.data.length) {
      G = b.shift();
    } else {
      G = q ? se(m, b) : ne(m, b);
    }
    return G;
  }
  function se(m, b) {
    var q = b.head;
    var G = 1;
    var ce = q.data;
    for (m -= ce.length; q = q.next;) {
      var Y = q.data;
      var fe = m > Y.length ? Y.length : m;
      if (fe === Y.length) {
        ce += Y;
      } else {
        ce += Y.slice(0, m);
      }
      m -= fe;
      if (m === 0) {
        if (fe === Y.length) {
          ++G;
          if (q.next) {
            b.head = q.next;
          } else {
            b.head = b.tail = null;
          }
        } else {
          b.head = q;
          q.data = Y.slice(fe);
        }
        break;
      }
      ++G;
    }
    b.length -= G;
    return ce;
  }
  function ne(m, b) {
    var q = u.allocUnsafe(m);
    var G = b.head;
    var ce = 1;
    G.data.copy(q);
    m -= G.data.length;
    while (G = G.next) {
      var Y = G.data;
      var fe = m > Y.length ? Y.length : m;
      Y.copy(q, q.length - m, 0, fe);
      m -= fe;
      if (m === 0) {
        if (fe === Y.length) {
          ++ce;
          if (G.next) {
            b.head = G.next;
          } else {
            b.head = b.tail = null;
          }
        } else {
          b.head = G;
          G.data = Y.slice(fe);
        }
        break;
      }
      ++ce;
    }
    b.length -= ce;
    return q;
  }
  function me(m) {
    var b = m._readableState;
    if (b.length > 0) {
      throw new Error("\"endReadable()\" called on non-empty stream");
    }
    if (!b.endEmitted) {
      b.ended = true;
      n.nextTick(ye, b, m);
    }
  }
  function ye(m, b) {
    if (!m.endEmitted && m.length === 0) {
      m.endEmitted = true;
      b.readable = false;
      b.emit("end");
    }
  }
  function ve(m, b) {
    for (var q = 0, G = m.length; q < G; q++) {
      if (m[q] === b) {
        return q;
      }
    }
    return -1;
  }
  return Dt;
}
var It;
var Mr;
function an() {
  if (Mr) {
    return It;
  }
  Mr = 1;
  It = i;
  var n = at();
  var f = Object.create(st());
  f.inherits = Ee.requireInherits();
  f.inherits(i, n);
  function c(a, g) {
    var h = this._transformState;
    h.transforming = false;
    var E = h.writecb;
    if (!E) {
      return this.emit("error", new Error("write callback called multiple times"));
    }
    h.writechunk = null;
    h.writecb = null;
    if (g != null) {
      this.push(g);
    }
    E(a);
    var w = this._readableState;
    w.reading = false;
    if (w.needReadable || w.length < w.highWaterMark) {
      this._read(w.highWaterMark);
    }
  }
  function i(a) {
    if (!(this instanceof i)) {
      return new i(a);
    }
    n.call(this, a);
    this._transformState = {
      afterTransform: c.bind(this),
      needTransform: false,
      transforming: false,
      writecb: null,
      writechunk: null,
      writeencoding: null
    };
    this._readableState.needReadable = true;
    this._readableState.sync = false;
    if (a) {
      if (typeof a.transform == "function") {
        this._transform = a.transform;
      }
      if (typeof a.flush == "function") {
        this._flush = a.flush;
      }
    }
    this.on("prefinish", y);
  }
  function y() {
    var a = this;
    if (typeof this._flush == "function") {
      this._flush(function (g, h) {
        u(a, g, h);
      });
    } else {
      u(this, null, null);
    }
  }
  i.prototype.push = function (a, g) {
    this._transformState.needTransform = false;
    return n.prototype.push.call(this, a, g);
  };
  i.prototype._transform = function (a, g, h) {
    throw new Error("_transform() is not implemented");
  };
  i.prototype._write = function (a, g, h) {
    var E = this._transformState;
    E.writecb = h;
    E.writechunk = a;
    E.writeencoding = g;
    if (!E.transforming) {
      var w = this._readableState;
      if (E.needTransform || w.needReadable || w.length < w.highWaterMark) {
        this._read(w.highWaterMark);
      }
    }
  };
  i.prototype._read = function (a) {
    var g = this._transformState;
    if (g.writechunk !== null && g.writecb && !g.transforming) {
      g.transforming = true;
      this._transform(g.writechunk, g.writeencoding, g.afterTransform);
    } else {
      g.needTransform = true;
    }
  };
  i.prototype._destroy = function (a, g) {
    var h = this;
    n.prototype._destroy.call(this, a, function (E) {
      g(E);
      h.emit("close");
    });
  };
  function u(a, g, h) {
    if (g) {
      return a.emit("error", g);
    }
    if (h != null) {
      a.push(h);
    }
    if (a._writableState.length) {
      throw new Error("Calling transform done when ws.length != 0");
    }
    if (a._transformState.transforming) {
      throw new Error("Calling transform done when still transforming");
    }
    return a.push(null);
  }
  return It;
}
var Bt;
var Zr;
function On() {
  if (Zr) {
    return Bt;
  }
  Zr = 1;
  Bt = c;
  var n = an();
  var f = Object.create(st());
  f.inherits = Ee.requireInherits();
  f.inherits(c, n);
  function c(i) {
    if (!(this instanceof c)) {
      return new c(i);
    }
    n.call(this, i);
  }
  c.prototype._transform = function (i, y, u) {
    u(null, i);
  };
  return Bt;
}
var Wr;
function on() {
  if (!Wr) {
    Wr = 1;
    (function (n, f) {
      var c = Ji;
      if (process.env.READABLE_STREAM === "disable" && c) {
        n.exports = c;
        f = n.exports = c.Readable;
        f.Readable = c.Readable;
        f.Writable = c.Writable;
        f.Duplex = c.Duplex;
        f.Transform = c.Transform;
        f.PassThrough = c.PassThrough;
        f.Stream = c;
      } else {
        f = n.exports = nn();
        f.Stream = c || f;
        f.Readable = f;
        f.Writable = rn();
        f.Duplex = at();
        f.Transform = an();
        f.PassThrough = On();
      }
    })(dt, dt.exports);
  }
  return dt.exports;
}
var Hr;
function Qe() {
  if (Hr) {
    return Ue;
  }
  Hr = 1;
  Ue.base64 = true;
  Ue.array = true;
  Ue.string = true;
  Ue.arraybuffer = typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined";
  Ue.nodebuffer = typeof Buffer !== "undefined";
  Ue.uint8array = typeof Uint8Array !== "undefined";
  if (typeof ArrayBuffer === "undefined") {
    Ue.blob = false;
  } else {
    var n = new ArrayBuffer(0);
    try {
      Ue.blob = new Blob([n], {
        type: "application/zip"
      }).size === 0;
    } catch {
      try {
        var f = self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder;
        var c = new f();
        c.append(n);
        Ue.blob = c.getBlob("application/zip").size === 0;
      } catch {
        Ue.blob = false;
      }
    }
  }
  try {
    Ue.nodestream = !!on().Readable;
  } catch {
    Ue.nodestream = false;
  }
  return Ue;
}
var pt = {};
var Gr;
function sn() {
  if (Gr) {
    return pt;
  }
  Gr = 1;
  var n = Te();
  var f = Qe();
  var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  pt.encode = function (i) {
    var y = [];
    for (var u, a, g, h, E, w, d, t = 0, l = i.length, _ = l, x = n.getTypeOf(i) !== "string"; t < i.length;) {
      _ = l - t;
      if (x) {
        u = i[t++];
        a = t < l ? i[t++] : 0;
        g = t < l ? i[t++] : 0;
      } else {
        u = i.charCodeAt(t++);
        a = t < l ? i.charCodeAt(t++) : 0;
        g = t < l ? i.charCodeAt(t++) : 0;
      }
      h = u >> 2;
      E = (u & 3) << 4 | a >> 4;
      w = _ > 1 ? (a & 15) << 2 | g >> 6 : 64;
      d = _ > 2 ? g & 63 : 64;
      y.push(c.charAt(h) + c.charAt(E) + c.charAt(w) + c.charAt(d));
    }
    return y.join("");
  };
  pt.decode = function (i) {
    var y;
    var u;
    var a;
    var g;
    var h;
    var E;
    var w;
    var d = 0;
    var t = 0;
    var l = "data:";
    if (i.substr(0, l.length) === l) {
      throw new Error("Invalid base64 input, it looks like a data url.");
    }
    i = i.replace(/[^A-Za-z0-9+/=]/g, "");
    var _ = i.length * 3 / 4;
    if (i.charAt(i.length - 1) === c.charAt(64)) {
      _--;
    }
    if (i.charAt(i.length - 2) === c.charAt(64)) {
      _--;
    }
    if (_ % 1 !== 0) {
      throw new Error("Invalid base64 input, bad content length.");
    }
    var x;
    for (f.uint8array ? x = new Uint8Array(_ | 0) : x = new Array(_ | 0); d < i.length;) {
      g = c.indexOf(i.charAt(d++));
      h = c.indexOf(i.charAt(d++));
      E = c.indexOf(i.charAt(d++));
      w = c.indexOf(i.charAt(d++));
      y = g << 2 | h >> 4;
      u = (h & 15) << 4 | E >> 2;
      a = (E & 3) << 6 | w;
      x[t++] = y;
      if (E !== 64) {
        x[t++] = u;
      }
      if (w !== 64) {
        x[t++] = a;
      }
    }
    return x;
  };
  return pt;
}
var Ft;
var Yr;
function wt() {
  if (!Yr) {
    Yr = 1;
    Ft = {
      isNode: typeof Buffer !== "undefined",
      newBufferFrom: function (n, f) {
        if (Buffer.from && Buffer.from !== Uint8Array.from) {
          return Buffer.from(n, f);
        }
        if (typeof n == "number") {
          throw new Error("The \"data\" argument must not be a number");
        }
        return new Buffer(n, f);
      },
      allocBuffer: function (n) {
        if (Buffer.alloc) {
          return Buffer.alloc(n);
        }
        var f = new Buffer(n);
        f.fill(0);
        return f;
      },
      isBuffer: function (n) {
        return Buffer.isBuffer(n);
      },
      isStream: function (n) {
        return n && typeof n.on == "function" && typeof n.pause == "function" && typeof n.resume == "function";
      }
    };
  }
  return Ft;
}
var Nt;
var Kr;
function Dn() {
  if (Kr) {
    return Nt;
  }
  Kr = 1;
  var n = Ee.commonjsGlobal.MutationObserver || Ee.commonjsGlobal.WebKitMutationObserver;
  var f;
  if (process.browser) {
    if (n) {
      var c = 0;
      var i = new n(h);
      var y = Ee.commonjsGlobal.document.createTextNode("");
      i.observe(y, {
        characterData: true
      });
      f = function () {
        y.data = c = ++c % 2;
      };
    } else if (!Ee.commonjsGlobal.setImmediate && typeof Ee.commonjsGlobal.MessageChannel !== "undefined") {
      var u = new Ee.commonjsGlobal.MessageChannel();
      u.port1.onmessage = h;
      f = function () {
        u.port2.postMessage(0);
      };
    } else if ("document" in Ee.commonjsGlobal && "onreadystatechange" in Ee.commonjsGlobal.document.createElement("script")) {
      f = function () {
        var w = Ee.commonjsGlobal.document.createElement("script");
        w.onreadystatechange = function () {
          h();
          w.onreadystatechange = null;
          w.parentNode.removeChild(w);
          w = null;
        };
        Ee.commonjsGlobal.document.documentElement.appendChild(w);
      };
    } else {
      f = function () {
        setTimeout(h, 0);
      };
    }
  } else {
    f = function () {
      process.nextTick(h);
    };
  }
  var a;
  var g = [];
  function h() {
    a = true;
    var w;
    var d;
    for (var t = g.length; t;) {
      d = g;
      g = [];
      w = -1;
      while (++w < t) {
        d[w]();
      }
      t = g.length;
    }
    a = false;
  }
  Nt = E;
  function E(w) {
    if (g.push(w) === 1 && !a) {
      f();
    }
  }
  return Nt;
}
var zt;
var Xr;
function In() {
  if (Xr) {
    return zt;
  }
  Xr = 1;
  var n = Dn();
  function f() {}
  var c = {};
  var i = ["REJECTED"];
  var y = ["FULFILLED"];
  var u = ["PENDING"];
  if (!process.browser) {
    var a = ["UNHANDLED"];
  }
  zt = g;
  function g(s) {
    if (typeof s != "function") {
      throw new TypeError("resolver must be a function");
    }
    this.state = u;
    this.queue = [];
    this.outcome = undefined;
    if (!process.browser) {
      this.handled = a;
    }
    if (s !== f) {
      d(this, s);
    }
  }
  g.prototype.finally = function (s) {
    if (typeof s != "function") {
      return this;
    }
    var p = this.constructor;
    return this.then(S, O);
    function S(F) {
      function H() {
        return F;
      }
      return p.resolve(s()).then(H);
    }
    function O(F) {
      function H() {
        throw F;
      }
      return p.resolve(s()).then(H);
    }
  };
  g.prototype.catch = function (s) {
    return this.then(null, s);
  };
  g.prototype.then = function (s, p) {
    if (typeof s != "function" && this.state === y || typeof p != "function" && this.state === i) {
      return this;
    }
    var S = new this.constructor(f);
    if (!process.browser) {
      if (this.handled === a) {
        this.handled = null;
      }
    }
    if (this.state !== u) {
      var O = this.state === y ? s : p;
      E(S, O, this.outcome);
    } else {
      this.queue.push(new h(S, s, p));
    }
    return S;
  };
  function h(s, p, S) {
    this.promise = s;
    if (typeof p == "function") {
      this.onFulfilled = p;
      this.callFulfilled = this.otherCallFulfilled;
    }
    if (typeof S == "function") {
      this.onRejected = S;
      this.callRejected = this.otherCallRejected;
    }
  }
  h.prototype.callFulfilled = function (s) {
    c.resolve(this.promise, s);
  };
  h.prototype.otherCallFulfilled = function (s) {
    E(this.promise, this.onFulfilled, s);
  };
  h.prototype.callRejected = function (s) {
    c.reject(this.promise, s);
  };
  h.prototype.otherCallRejected = function (s) {
    E(this.promise, this.onRejected, s);
  };
  function E(s, p, S) {
    n(function () {
      var O;
      try {
        O = p(S);
      } catch (F) {
        return c.reject(s, F);
      }
      if (O === s) {
        c.reject(s, new TypeError("Cannot resolve promise with itself"));
      } else {
        c.resolve(s, O);
      }
    });
  }
  c.resolve = function (s, p) {
    var S = t(w, p);
    if (S.status === "error") {
      return c.reject(s, S.value);
    }
    var O = S.value;
    if (O) {
      d(s, O);
    } else {
      s.state = y;
      s.outcome = p;
      for (var F = -1, H = s.queue.length; ++F < H;) {
        s.queue[F].callFulfilled(p);
      }
    }
    return s;
  };
  c.reject = function (s, p) {
    s.state = i;
    s.outcome = p;
    if (!process.browser) {
      if (s.handled === a) {
        n(function () {
          if (s.handled === a) {
            process.emit("unhandledRejection", p, s);
          }
        });
      }
    }
    for (var S = -1, O = s.queue.length; ++S < O;) {
      s.queue[S].callRejected(p);
    }
    return s;
  };
  function w(s) {
    var p = s && s.then;
    if (s && (typeof s == "object" || typeof s == "function") && typeof p == "function") {
      return function () {
        p.apply(s, arguments);
      };
    }
  }
  function d(s, p) {
    var S = false;
    function O(V) {
      if (!S) {
        S = true;
        c.reject(s, V);
      }
    }
    function F(V) {
      if (!S) {
        S = true;
        c.resolve(s, V);
      }
    }
    function H() {
      p(F, O);
    }
    var P = t(H);
    if (P.status === "error") {
      O(P.value);
    }
  }
  function t(s, p) {
    var S = {};
    try {
      S.value = s(p);
      S.status = "success";
    } catch (O) {
      S.status = "error";
      S.value = O;
    }
    return S;
  }
  g.resolve = l;
  function l(s) {
    if (s instanceof this) {
      return s;
    } else {
      return c.resolve(new this(f), s);
    }
  }
  g.reject = _;
  function _(s) {
    var p = new this(f);
    return c.reject(p, s);
  }
  g.all = x;
  function x(s) {
    var p = this;
    if (Object.prototype.toString.call(s) !== "[object Array]") {
      return this.reject(new TypeError("must be an array"));
    }
    var S = s.length;
    var O = false;
    if (!S) {
      return this.resolve([]);
    }
    var F = new Array(S);
    var H = 0;
    for (var P = -1, V = new this(f); ++P < S;) {
      ue(s[P], P);
    }
    return V;
    function ue(oe, le) {
      p.resolve(oe).then(he, function (K) {
        if (!O) {
          O = true;
          c.reject(V, K);
        }
      });
      function he(K) {
        F[le] = K;
        if (++H === S && !O) {
          O = true;
          c.resolve(V, F);
        }
      }
    }
  }
  g.race = C;
  function C(s) {
    var p = this;
    if (Object.prototype.toString.call(s) !== "[object Array]") {
      return this.reject(new TypeError("must be an array"));
    }
    var S = s.length;
    var O = false;
    if (!S) {
      return this.resolve([]);
    }
    for (var F = -1, H = new this(f); ++F < S;) {
      P(s[F]);
    }
    return H;
    function P(V) {
      p.resolve(V).then(function (ue) {
        if (!O) {
          O = true;
          c.resolve(H, ue);
        }
      }, function (ue) {
        if (!O) {
          O = true;
          c.reject(H, ue);
        }
      });
    }
  }
  return zt;
}
var Lt;
var Vr;
function ft() {
  if (Vr) {
    return Lt;
  }
  Vr = 1;
  var n = null;
  if (typeof Promise !== "undefined") {
    n = Promise;
  } else {
    n = In();
  }
  Lt = {
    Promise: n
  };
  return Lt;
}
var Pt = {};
var Jr;
function Bn() {
  if (!Jr) {
    Jr = 1;
    (function (n, f) {
      if (n.setImmediate) {
        return;
      }
      var c = 1;
      var i = {};
      var y = false;
      var u = n.document;
      var a;
      function g(p) {
        if (typeof p != "function") {
          p = new Function("" + p);
        }
        for (var S = new Array(arguments.length - 1), O = 0; O < S.length; O++) {
          S[O] = arguments[O + 1];
        }
        var F = {
          callback: p,
          args: S
        };
        i[c] = F;
        a(c);
        return c++;
      }
      function h(p) {
        delete i[p];
      }
      function E(p) {
        var S = p.callback;
        var O = p.args;
        switch (O.length) {
          case 0:
            S();
            break;
          case 1:
            S(O[0]);
            break;
          case 2:
            S(O[0], O[1]);
            break;
          case 3:
            S(O[0], O[1], O[2]);
            break;
          default:
            S.apply(f, O);
            break;
        }
      }
      function w(p) {
        if (y) {
          setTimeout(w, 0, p);
        } else {
          var S = i[p];
          if (S) {
            y = true;
            try {
              E(S);
            } finally {
              h(p);
              y = false;
            }
          }
        }
      }
      function d() {
        a = function (p) {
          process.nextTick(function () {
            w(p);
          });
        };
      }
      function t() {
        if (n.postMessage && !n.importScripts) {
          var p = true;
          var S = n.onmessage;
          n.onmessage = function () {
            p = false;
          };
          n.postMessage("", "*");
          n.onmessage = S;
          return p;
        }
      }
      function l() {
        var p = "setImmediate$" + Math.random() + "$";
        function S(O) {
          if (O.source === n && typeof O.data == "string" && O.data.indexOf(p) === 0) {
            w(+O.data.slice(p.length));
          }
        }
        if (n.addEventListener) {
          n.addEventListener("message", S, false);
        } else {
          n.attachEvent("onmessage", S);
        }
        a = function (O) {
          n.postMessage(p + O, "*");
        };
      }
      function _() {
        var p = new MessageChannel();
        p.port1.onmessage = function (S) {
          var O = S.data;
          w(O);
        };
        a = function (S) {
          p.port2.postMessage(S);
        };
      }
      function x() {
        var p = u.documentElement;
        a = function (S) {
          var O = u.createElement("script");
          O.onreadystatechange = function () {
            w(S);
            O.onreadystatechange = null;
            p.removeChild(O);
            O = null;
          };
          p.appendChild(O);
        };
      }
      function C() {
        a = function (p) {
          setTimeout(w, 0, p);
        };
      }
      var s = Object.getPrototypeOf && Object.getPrototypeOf(n);
      s = s && s.setTimeout ? s : n;
      if ({}.toString.call(n.process) === "[object process]") {
        d();
      } else if (t()) {
        l();
      } else if (n.MessageChannel) {
        _();
      } else if (u && "onreadystatechange" in u.createElement("script")) {
        x();
      } else {
        C();
      }
      s.setImmediate = g;
      s.clearImmediate = h;
    })(typeof self === "undefined" ? typeof Ee.commonjsGlobal === "undefined" ? Pt : Ee.commonjsGlobal : self);
  }
  return Pt;
}
var $r;
function Te() {
  if (!$r) {
    $r = 1;
    (function (n) {
      var f = Qe();
      var c = sn();
      var i = wt();
      var y = ft();
      Bn();
      function u(t) {
        var l = null;
        if (f.uint8array) {
          l = new Uint8Array(t.length);
        } else {
          l = new Array(t.length);
        }
        return g(t, l);
      }
      n.newBlob = function (t, l) {
        n.checkSupport("blob");
        try {
          return new Blob([t], {
            type: l
          });
        } catch {
          try {
            var _ = self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder;
            var x = new _();
            x.append(t);
            return x.getBlob(l);
          } catch {
            throw new Error("Bug : can't construct the Blob.");
          }
        }
      };
      function a(t) {
        return t;
      }
      function g(t, l) {
        for (var _ = 0; _ < t.length; ++_) {
          l[_] = t.charCodeAt(_) & 255;
        }
        return l;
      }
      var h = {
        stringifyByChunk: function (t, l, _) {
          var x = [];
          var C = 0;
          var s = t.length;
          if (s <= _) {
            return String.fromCharCode.apply(null, t);
          }
          while (C < s) {
            if (l === "array" || l === "nodebuffer") {
              x.push(String.fromCharCode.apply(null, t.slice(C, Math.min(C + _, s))));
            } else {
              x.push(String.fromCharCode.apply(null, t.subarray(C, Math.min(C + _, s))));
            }
            C += _;
          }
          return x.join("");
        },
        stringifyByChar: function (t) {
          var l = "";
          for (var _ = 0; _ < t.length; _++) {
            l += String.fromCharCode(t[_]);
          }
          return l;
        },
        applyCanBeUsed: {
          uint8array: function () {
            try {
              return f.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
            } catch {
              return false;
            }
          }(),
          nodebuffer: function () {
            try {
              return f.nodebuffer && String.fromCharCode.apply(null, i.allocBuffer(1)).length === 1;
            } catch {
              return false;
            }
          }()
        }
      };
      function E(t) {
        var l = 65536;
        var _ = n.getTypeOf(t);
        var x = true;
        if (_ === "uint8array") {
          x = h.applyCanBeUsed.uint8array;
        } else if (_ === "nodebuffer") {
          x = h.applyCanBeUsed.nodebuffer;
        }
        if (x) {
          while (l > 1) {
            try {
              return h.stringifyByChunk(t, _, l);
            } catch {
              l = Math.floor(l / 2);
            }
          }
        }
        return h.stringifyByChar(t);
      }
      n.applyFromCharCode = E;
      function w(t, l) {
        for (var _ = 0; _ < t.length; _++) {
          l[_] = t[_];
        }
        return l;
      }
      var d = {};
      d.string = {
        string: a,
        array: function (t) {
          return g(t, new Array(t.length));
        },
        arraybuffer: function (t) {
          return d.string.uint8array(t).buffer;
        },
        uint8array: function (t) {
          return g(t, new Uint8Array(t.length));
        },
        nodebuffer: function (t) {
          return g(t, i.allocBuffer(t.length));
        }
      };
      d.array = {
        string: E,
        array: a,
        arraybuffer: function (t) {
          return new Uint8Array(t).buffer;
        },
        uint8array: function (t) {
          return new Uint8Array(t);
        },
        nodebuffer: function (t) {
          return i.newBufferFrom(t);
        }
      };
      d.arraybuffer = {
        string: function (t) {
          return E(new Uint8Array(t));
        },
        array: function (t) {
          return w(new Uint8Array(t), new Array(t.byteLength));
        },
        arraybuffer: a,
        uint8array: function (t) {
          return new Uint8Array(t);
        },
        nodebuffer: function (t) {
          return i.newBufferFrom(new Uint8Array(t));
        }
      };
      d.uint8array = {
        string: E,
        array: function (t) {
          return w(t, new Array(t.length));
        },
        arraybuffer: function (t) {
          return t.buffer;
        },
        uint8array: a,
        nodebuffer: function (t) {
          return i.newBufferFrom(t);
        }
      };
      d.nodebuffer = {
        string: E,
        array: function (t) {
          return w(t, new Array(t.length));
        },
        arraybuffer: function (t) {
          return d.nodebuffer.uint8array(t).buffer;
        },
        uint8array: function (t) {
          return w(t, new Uint8Array(t.length));
        },
        nodebuffer: a
      };
      n.transformTo = function (t, l) {
        l ||= "";
        if (!t) {
          return l;
        }
        n.checkSupport(t);
        var _ = n.getTypeOf(l);
        var x = d[_][t](l);
        return x;
      };
      n.resolve = function (t) {
        for (var l = t.split("/"), _ = [], x = 0; x < l.length; x++) {
          var C = l[x];
          if (C !== "." && (C !== "" || x === 0 || x === l.length - 1)) {
            if (C === "..") {
              _.pop();
            } else {
              _.push(C);
            }
          }
        }
        return _.join("/");
      };
      n.getTypeOf = function (t) {
        if (typeof t == "string") {
          return "string";
        }
        if (Object.prototype.toString.call(t) === "[object Array]") {
          return "array";
        }
        if (f.nodebuffer && i.isBuffer(t)) {
          return "nodebuffer";
        }
        if (f.uint8array && t instanceof Uint8Array) {
          return "uint8array";
        }
        if (f.arraybuffer && t instanceof ArrayBuffer) {
          return "arraybuffer";
        }
      };
      n.checkSupport = function (t) {
        var l = f[t.toLowerCase()];
        if (!l) {
          throw new Error(t + " is not supported by this platform");
        }
      };
      n.MAX_VALUE_16BITS = 65535;
      n.MAX_VALUE_32BITS = -1;
      n.pretty = function (t) {
        var l = "";
        var _;
        var x;
        for (x = 0; x < (t || "").length; x++) {
          _ = t.charCodeAt(x);
          l += "\\x" + (_ < 16 ? "0" : "") + _.toString(16).toUpperCase();
        }
        return l;
      };
      n.delay = function (t, l, _) {
        setImmediate(function () {
          t.apply(_ || null, l || []);
        });
      };
      n.inherits = function (t, l) {
        function _() {}
        _.prototype = l.prototype;
        t.prototype = new _();
      };
      n.extend = function () {
        var t = {};
        var l;
        var _;
        for (l = 0; l < arguments.length; l++) {
          for (_ in arguments[l]) {
            if (Object.prototype.hasOwnProperty.call(arguments[l], _) && typeof t[_] === "undefined") {
              t[_] = arguments[l][_];
            }
          }
        }
        return t;
      };
      n.prepareContent = function (t, l, _, x, C) {
        var s = y.Promise.resolve(l).then(function (p) {
          var S = f.blob && (p instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(p)) !== -1);
          if (S && typeof FileReader !== "undefined") {
            return new y.Promise(function (O, F) {
              var H = new FileReader();
              H.onload = function (P) {
                O(P.target.result);
              };
              H.onerror = function (P) {
                F(P.target.error);
              };
              H.readAsArrayBuffer(p);
            });
          } else {
            return p;
          }
        });
        return s.then(function (p) {
          var S = n.getTypeOf(p);
          if (S) {
            if (S === "arraybuffer") {
              p = n.transformTo("uint8array", p);
            } else if (S === "string") {
              if (C) {
                p = c.decode(p);
              } else if (_ && x !== true) {
                p = u(p);
              }
            }
            return p;
          } else {
            return y.Promise.reject(new Error("Can't read the data of '" + t + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
          }
        });
      };
    })(kt);
  }
  return kt;
}
var jt;
var Qr;
function Ge() {
  if (Qr) {
    return jt;
  }
  Qr = 1;
  function n(f) {
    this.name = f || "default";
    this.streamInfo = {};
    this.generatedError = null;
    this.extraStreamInfo = {};
    this.isPaused = true;
    this.isFinished = false;
    this.isLocked = false;
    this._listeners = {
      data: [],
      end: [],
      error: []
    };
    this.previous = null;
  }
  n.prototype = {
    push: function (f) {
      this.emit("data", f);
    },
    end: function () {
      if (this.isFinished) {
        return false;
      }
      this.flush();
      try {
        this.emit("end");
        this.cleanUp();
        this.isFinished = true;
      } catch (f) {
        this.emit("error", f);
      }
      return true;
    },
    error: function (f) {
      if (this.isFinished) {
        return false;
      } else {
        if (this.isPaused) {
          this.generatedError = f;
        } else {
          this.isFinished = true;
          this.emit("error", f);
          if (this.previous) {
            this.previous.error(f);
          }
          this.cleanUp();
        }
        return true;
      }
    },
    on: function (f, c) {
      this._listeners[f].push(c);
      return this;
    },
    cleanUp: function () {
      this.streamInfo = this.generatedError = this.extraStreamInfo = null;
      this._listeners = [];
    },
    emit: function (f, c) {
      if (this._listeners[f]) {
        for (var i = 0; i < this._listeners[f].length; i++) {
          this._listeners[f][i].call(this, c);
        }
      }
    },
    pipe: function (f) {
      return f.registerPrevious(this);
    },
    registerPrevious: function (f) {
      if (this.isLocked) {
        throw new Error("The stream '" + this + "' has already been used.");
      }
      this.streamInfo = f.streamInfo;
      this.mergeStreamInfo();
      this.previous = f;
      var c = this;
      f.on("data", function (i) {
        c.processChunk(i);
      });
      f.on("end", function () {
        c.end();
      });
      f.on("error", function (i) {
        c.error(i);
      });
      return this;
    },
    pause: function () {
      if (this.isPaused || this.isFinished) {
        return false;
      } else {
        this.isPaused = true;
        if (this.previous) {
          this.previous.pause();
        }
        return true;
      }
    },
    resume: function () {
      if (!this.isPaused || this.isFinished) {
        return false;
      }
      this.isPaused = false;
      var f = false;
      if (this.generatedError) {
        this.error(this.generatedError);
        f = true;
      }
      if (this.previous) {
        this.previous.resume();
      }
      return !f;
    },
    flush: function () {},
    processChunk: function (f) {
      this.push(f);
    },
    withStreamInfo: function (f, c) {
      this.extraStreamInfo[f] = c;
      this.mergeStreamInfo();
      return this;
    },
    mergeStreamInfo: function () {
      for (var f in this.extraStreamInfo) {
        if (Object.prototype.hasOwnProperty.call(this.extraStreamInfo, f)) {
          this.streamInfo[f] = this.extraStreamInfo[f];
        }
      }
    },
    lock: function () {
      if (this.isLocked) {
        throw new Error("The stream '" + this + "' has already been used.");
      }
      this.isLocked = true;
      if (this.previous) {
        this.previous.lock();
      }
    },
    toString: function () {
      var f = "Worker " + this.name;
      if (this.previous) {
        return this.previous + " -> " + f;
      } else {
        return f;
      }
    }
  };
  jt = n;
  return jt;
}
var ei;
function lt() {
  if (!ei) {
    ei = 1;
    (function (n) {
      var f = Te();
      var c = Qe();
      var i = wt();
      var y = Ge();
      var u = new Array(256);
      for (var a = 0; a < 256; a++) {
        u[a] = a >= 252 ? 6 : a >= 248 ? 5 : a >= 240 ? 4 : a >= 224 ? 3 : a >= 192 ? 2 : 1;
      }
      u[254] = u[254] = 1;
      function g(t) {
        var l;
        var _;
        var x;
        var C;
        var s;
        var p = t.length;
        var S = 0;
        for (C = 0; C < p; C++) {
          _ = t.charCodeAt(C);
          if ((_ & 64512) === 55296 && C + 1 < p) {
            x = t.charCodeAt(C + 1);
            if ((x & 64512) === 56320) {
              _ = 65536 + (_ - 55296 << 10) + (x - 56320);
              C++;
            }
          }
          S += _ < 128 ? 1 : _ < 2048 ? 2 : _ < 65536 ? 3 : 4;
        }
        if (c.uint8array) {
          l = new Uint8Array(S);
        } else {
          l = new Array(S);
        }
        s = 0;
        C = 0;
        for (; s < S; C++) {
          _ = t.charCodeAt(C);
          if ((_ & 64512) === 55296 && C + 1 < p) {
            x = t.charCodeAt(C + 1);
            if ((x & 64512) === 56320) {
              _ = 65536 + (_ - 55296 << 10) + (x - 56320);
              C++;
            }
          }
          if (_ < 128) {
            l[s++] = _;
          } else if (_ < 2048) {
            l[s++] = _ >>> 6 | 192;
            l[s++] = _ & 63 | 128;
          } else if (_ < 65536) {
            l[s++] = _ >>> 12 | 224;
            l[s++] = _ >>> 6 & 63 | 128;
            l[s++] = _ & 63 | 128;
          } else {
            l[s++] = _ >>> 18 | 240;
            l[s++] = _ >>> 12 & 63 | 128;
            l[s++] = _ >>> 6 & 63 | 128;
            l[s++] = _ & 63 | 128;
          }
        }
        return l;
      }
      function h(t, l) {
        var _;
        l = l || t.length;
        if (l > t.length) {
          l = t.length;
        }
        _ = l - 1;
        while (_ >= 0 && (t[_] & 192) === 128) {
          _--;
        }
        if (_ < 0 || _ === 0) {
          return l;
        } else if (_ + u[t[_]] > l) {
          return _;
        } else {
          return l;
        }
      }
      function E(t) {
        var l;
        var _;
        var x;
        var C;
        var s = t.length;
        var p = new Array(s * 2);
        _ = 0;
        l = 0;
        while (l < s) {
          x = t[l++];
          if (x < 128) {
            p[_++] = x;
            continue;
          }
          C = u[x];
          if (C > 4) {
            p[_++] = 65533;
            l += C - 1;
            continue;
          }
          for (x &= C === 2 ? 31 : C === 3 ? 15 : 7; C > 1 && l < s;) {
            x = x << 6 | t[l++] & 63;
            C--;
          }
          if (C > 1) {
            p[_++] = 65533;
            continue;
          }
          if (x < 65536) {
            p[_++] = x;
          } else {
            x -= 65536;
            p[_++] = x >> 10 & 1023 | 55296;
            p[_++] = x & 1023 | 56320;
          }
        }
        if (p.length !== _) {
          if (p.subarray) {
            p = p.subarray(0, _);
          } else {
            p.length = _;
          }
        }
        return f.applyFromCharCode(p);
      }
      n.utf8encode = function (l) {
        if (c.nodebuffer) {
          return i.newBufferFrom(l, "utf-8");
        } else {
          return g(l);
        }
      };
      n.utf8decode = function (l) {
        if (c.nodebuffer) {
          return f.transformTo("nodebuffer", l).toString("utf-8");
        } else {
          l = f.transformTo(c.uint8array ? "uint8array" : "array", l);
          return E(l);
        }
      };
      function w() {
        y.call(this, "utf-8 decode");
        this.leftOver = null;
      }
      f.inherits(w, y);
      w.prototype.processChunk = function (t) {
        var l = f.transformTo(c.uint8array ? "uint8array" : "array", t.data);
        if (this.leftOver && this.leftOver.length) {
          if (c.uint8array) {
            var _ = l;
            l = new Uint8Array(_.length + this.leftOver.length);
            l.set(this.leftOver, 0);
            l.set(_, this.leftOver.length);
          } else {
            l = this.leftOver.concat(l);
          }
          this.leftOver = null;
        }
        var x = h(l);
        var C = l;
        if (x !== l.length) {
          if (c.uint8array) {
            C = l.subarray(0, x);
            this.leftOver = l.subarray(x, l.length);
          } else {
            C = l.slice(0, x);
            this.leftOver = l.slice(x, l.length);
          }
        }
        this.push({
          data: n.utf8decode(C),
          meta: t.meta
        });
      };
      w.prototype.flush = function () {
        if (this.leftOver && this.leftOver.length) {
          this.push({
            data: n.utf8decode(this.leftOver),
            meta: {}
          });
          this.leftOver = null;
        }
      };
      n.Utf8DecodeWorker = w;
      function d() {
        y.call(this, "utf-8 encode");
      }
      f.inherits(d, y);
      d.prototype.processChunk = function (t) {
        this.push({
          data: n.utf8encode(t.data),
          meta: t.meta
        });
      };
      n.Utf8EncodeWorker = d;
    })(xt);
  }
  return xt;
}
var qt;
var ti;
function Fn() {
  if (ti) {
    return qt;
  }
  ti = 1;
  var n = Ge();
  var f = Te();
  function c(i) {
    n.call(this, "ConvertWorker to " + i);
    this.destType = i;
  }
  f.inherits(c, n);
  c.prototype.processChunk = function (i) {
    this.push({
      data: f.transformTo(this.destType, i.data),
      meta: i.meta
    });
  };
  qt = c;
  return qt;
}
var Ut;
var ri;
function Nn() {
  if (ri) {
    return Ut;
  }
  ri = 1;
  var n = on().Readable;
  var f = Te();
  f.inherits(c, n);
  function c(i, y, u) {
    n.call(this, y);
    this._helper = i;
    var a = this;
    i.on("data", function (g, h) {
      if (!a.push(g)) {
        a._helper.pause();
      }
      if (u) {
        u(h);
      }
    }).on("error", function (g) {
      a.emit("error", g);
    }).on("end", function () {
      a.push(null);
    });
  }
  c.prototype._read = function () {
    this._helper.resume();
  };
  Ut = c;
  return Ut;
}
var Mt;
var ii;
function fn() {
  if (ii) {
    return Mt;
  }
  ii = 1;
  var n = Te();
  var f = Fn();
  var c = Ge();
  var i = sn();
  var y = Qe();
  var u = ft();
  var a = null;
  if (y.nodestream) {
    try {
      a = Nn();
    } catch {}
  }
  function g(d, t, l) {
    switch (d) {
      case "blob":
        return n.newBlob(n.transformTo("arraybuffer", t), l);
      case "base64":
        return i.encode(t);
      default:
        return n.transformTo(d, t);
    }
  }
  function h(d, t) {
    var l;
    var _ = 0;
    var x = null;
    var C = 0;
    for (l = 0; l < t.length; l++) {
      C += t[l].length;
    }
    switch (d) {
      case "string":
        return t.join("");
      case "array":
        return Array.prototype.concat.apply([], t);
      case "uint8array":
        x = new Uint8Array(C);
        l = 0;
        for (; l < t.length; l++) {
          x.set(t[l], _);
          _ += t[l].length;
        }
        return x;
      case "nodebuffer":
        return Buffer.concat(t);
      default:
        throw new Error("concat : unsupported type '" + d + "'");
    }
  }
  function E(d, t) {
    return new u.Promise(function (l, _) {
      var x = [];
      var C = d._internalType;
      var s = d._outputType;
      var p = d._mimeType;
      d.on("data", function (S, O) {
        x.push(S);
        if (t) {
          t(O);
        }
      }).on("error", function (S) {
        x = [];
        _(S);
      }).on("end", function () {
        try {
          var S = g(s, h(C, x), p);
          l(S);
        } catch (O) {
          _(O);
        }
        x = [];
      }).resume();
    });
  }
  function w(d, t, l) {
    var _ = t;
    switch (t) {
      case "blob":
      case "arraybuffer":
        _ = "uint8array";
        break;
      case "base64":
        _ = "string";
        break;
    }
    try {
      this._internalType = _;
      this._outputType = t;
      this._mimeType = l;
      n.checkSupport(_);
      this._worker = d.pipe(new f(_));
      d.lock();
    } catch (x) {
      this._worker = new c("error");
      this._worker.error(x);
    }
  }
  w.prototype = {
    accumulate: function (d) {
      return E(this, d);
    },
    on: function (d, t) {
      var l = this;
      if (d === "data") {
        this._worker.on(d, function (_) {
          t.call(l, _.data, _.meta);
        });
      } else {
        this._worker.on(d, function () {
          n.delay(t, arguments, l);
        });
      }
      return this;
    },
    resume: function () {
      n.delay(this._worker.resume, [], this._worker);
      return this;
    },
    pause: function () {
      this._worker.pause();
      return this;
    },
    toNodejsStream: function (d) {
      n.checkSupport("nodestream");
      if (this._outputType !== "nodebuffer") {
        throw new Error(this._outputType + " is not supported by this method");
      }
      return new a(this, {
        objectMode: this._outputType !== "nodebuffer"
      }, d);
    }
  };
  Mt = w;
  return Mt;
}
var We = {};
var ni;
function ln() {
  if (!ni) {
    ni = 1;
    We.base64 = false;
    We.binary = false;
    We.dir = false;
    We.createFolders = true;
    We.date = null;
    We.compression = null;
    We.compressionOptions = null;
    We.comment = null;
    We.unixPermissions = null;
    We.dosPermissions = null;
  }
  return We;
}
var Zt;
var ai;
function un() {
  if (ai) {
    return Zt;
  }
  ai = 1;
  var n = Te();
  var f = Ge();
  var c = 16384;
  function i(y) {
    f.call(this, "DataWorker");
    var u = this;
    this.dataIsReady = false;
    this.index = 0;
    this.max = 0;
    this.data = null;
    this.type = "";
    this._tickScheduled = false;
    y.then(function (a) {
      u.dataIsReady = true;
      u.data = a;
      u.max = a && a.length || 0;
      u.type = n.getTypeOf(a);
      if (!u.isPaused) {
        u._tickAndRepeat();
      }
    }, function (a) {
      u.error(a);
    });
  }
  n.inherits(i, f);
  i.prototype.cleanUp = function () {
    f.prototype.cleanUp.call(this);
    this.data = null;
  };
  i.prototype.resume = function () {
    if (f.prototype.resume.call(this)) {
      if (!this._tickScheduled && this.dataIsReady) {
        this._tickScheduled = true;
        n.delay(this._tickAndRepeat, [], this);
      }
      return true;
    } else {
      return false;
    }
  };
  i.prototype._tickAndRepeat = function () {
    this._tickScheduled = false;
    if (!this.isPaused && !this.isFinished) {
      this._tick();
      if (!this.isFinished) {
        n.delay(this._tickAndRepeat, [], this);
        this._tickScheduled = true;
      }
    }
  };
  i.prototype._tick = function () {
    if (this.isPaused || this.isFinished) {
      return false;
    }
    var y = c;
    var u = null;
    var a = Math.min(this.max, this.index + y);
    if (this.index >= this.max) {
      return this.end();
    }
    switch (this.type) {
      case "string":
        u = this.data.substring(this.index, a);
        break;
      case "uint8array":
        u = this.data.subarray(this.index, a);
        break;
      case "array":
      case "nodebuffer":
        u = this.data.slice(this.index, a);
        break;
    }
    this.index = a;
    return this.push({
      data: u,
      meta: {
        percent: this.max ? this.index / this.max * 100 : 0
      }
    });
  };
  Zt = i;
  return Zt;
}
var Wt;
var oi;
function Er() {
  if (oi) {
    return Wt;
  }
  oi = 1;
  var n = Te();
  function f() {
    var u;
    var a = [];
    for (var g = 0; g < 256; g++) {
      u = g;
      for (var h = 0; h < 8; h++) {
        u = u & 1 ? u >>> 1 ^ -306674912 : u >>> 1;
      }
      a[g] = u;
    }
    return a;
  }
  var c = f();
  function i(u, a, g, h) {
    var E = c;
    var w = h + g;
    u = u ^ -1;
    for (var d = h; d < w; d++) {
      u = u >>> 8 ^ E[(u ^ a[d]) & 255];
    }
    return u ^ -1;
  }
  function y(u, a, g, h) {
    var E = c;
    var w = h + g;
    u = u ^ -1;
    for (var d = h; d < w; d++) {
      u = u >>> 8 ^ E[(u ^ a.charCodeAt(d)) & 255];
    }
    return u ^ -1;
  }
  Wt = function (a, g) {
    if (typeof a === "undefined" || !a.length) {
      return 0;
    }
    var h = n.getTypeOf(a) !== "string";
    if (h) {
      return i(g | 0, a, a.length, 0);
    } else {
      return y(g | 0, a, a.length, 0);
    }
  };
  return Wt;
}
var Ht;
var si;
function hn() {
  if (si) {
    return Ht;
  }
  si = 1;
  var n = Ge();
  var f = Er();
  var c = Te();
  function i() {
    n.call(this, "Crc32Probe");
    this.withStreamInfo("crc32", 0);
  }
  c.inherits(i, n);
  i.prototype.processChunk = function (y) {
    this.streamInfo.crc32 = f(y.data, this.streamInfo.crc32 || 0);
    this.push(y);
  };
  Ht = i;
  return Ht;
}
var Gt;
var fi;
function zn() {
  if (fi) {
    return Gt;
  }
  fi = 1;
  var n = Te();
  var f = Ge();
  function c(i) {
    f.call(this, "DataLengthProbe for " + i);
    this.propName = i;
    this.withStreamInfo(i, 0);
  }
  n.inherits(c, f);
  c.prototype.processChunk = function (i) {
    if (i) {
      var y = this.streamInfo[this.propName] || 0;
      this.streamInfo[this.propName] = y + i.data.length;
    }
    f.prototype.processChunk.call(this, i);
  };
  Gt = c;
  return Gt;
}
var Yt;
var li;
function Cr() {
  if (li) {
    return Yt;
  }
  li = 1;
  var n = ft();
  var f = un();
  var c = hn();
  var i = zn();
  function y(u, a, g, h, E) {
    this.compressedSize = u;
    this.uncompressedSize = a;
    this.crc32 = g;
    this.compression = h;
    this.compressedContent = E;
  }
  y.prototype = {
    getContentWorker: function () {
      var u = new f(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new i("data_length"));
      var a = this;
      u.on("end", function () {
        if (this.streamInfo.data_length !== a.uncompressedSize) {
          throw new Error("Bug : uncompressed data size mismatch");
        }
      });
      return u;
    },
    getCompressedWorker: function () {
      return new f(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
    }
  };
  y.createWorkerFrom = function (u, a, g) {
    return u.pipe(new c()).pipe(new i("uncompressedSize")).pipe(a.compressWorker(g)).pipe(new i("compressedSize")).withStreamInfo("compression", a);
  };
  Yt = y;
  return Yt;
}
var Kt;
var ui;
function Ln() {
  if (ui) {
    return Kt;
  }
  ui = 1;
  var n = fn();
  var f = un();
  var c = lt();
  var i = Cr();
  var y = Ge();
  function u(E, w, d) {
    this.name = E;
    this.dir = d.dir;
    this.date = d.date;
    this.comment = d.comment;
    this.unixPermissions = d.unixPermissions;
    this.dosPermissions = d.dosPermissions;
    this._data = w;
    this._dataBinary = d.binary;
    this.options = {
      compression: d.compression,
      compressionOptions: d.compressionOptions
    };
  }
  u.prototype = {
    internalStream: function (E) {
      var w = null;
      var d = "string";
      try {
        if (!E) {
          throw new Error("No output type specified.");
        }
        d = E.toLowerCase();
        var t = d === "string" || d === "text";
        if (d === "binarystring" || d === "text") {
          d = "string";
        }
        w = this._decompressWorker();
        var l = !this._dataBinary;
        if (l && !t) {
          w = w.pipe(new c.Utf8EncodeWorker());
        }
        if (!l && t) {
          w = w.pipe(new c.Utf8DecodeWorker());
        }
      } catch (_) {
        w = new y("error");
        w.error(_);
      }
      return new n(w, d, "");
    },
    async: function (E, w) {
      return this.internalStream(E).accumulate(w);
    },
    nodeStream: function (E, w) {
      return this.internalStream(E || "nodebuffer").toNodejsStream(w);
    },
    _compressWorker: function (E, w) {
      if (this._data instanceof i && this._data.compression.magic === E.magic) {
        return this._data.getCompressedWorker();
      }
      var d = this._decompressWorker();
      if (!this._dataBinary) {
        d = d.pipe(new c.Utf8EncodeWorker());
      }
      return i.createWorkerFrom(d, E, w);
    },
    _decompressWorker: function () {
      if (this._data instanceof i) {
        return this._data.getContentWorker();
      } else if (this._data instanceof y) {
        return this._data;
      } else {
        return new f(this._data);
      }
    }
  };
  for (var a = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], g = function () {
      throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
    }, h = 0; h < a.length; h++) {
    u.prototype[a[h]] = g;
  }
  Kt = u;
  return Kt;
}
var Xt = {};
var _t = {};
var ot = {};
var Vt = {};
var hi;
function et() {
  if (!hi) {
    hi = 1;
    (function (n) {
      var f = typeof Uint8Array !== "undefined" && typeof Uint16Array !== "undefined" && typeof Int32Array !== "undefined";
      function c(u, a) {
        return Object.prototype.hasOwnProperty.call(u, a);
      }
      n.assign = function (u) {
        for (var a = Array.prototype.slice.call(arguments, 1); a.length;) {
          var g = a.shift();
          if (g) {
            if (typeof g != "object") {
              throw new TypeError(g + "must be non-object");
            }
            for (var h in g) {
              if (c(g, h)) {
                u[h] = g[h];
              }
            }
          }
        }
        return u;
      };
      n.shrinkBuf = function (u, a) {
        if (u.length === a) {
          return u;
        } else if (u.subarray) {
          return u.subarray(0, a);
        } else {
          u.length = a;
          return u;
        }
      };
      var i = {
        arraySet: function (u, a, g, h, E) {
          if (a.subarray && u.subarray) {
            u.set(a.subarray(g, g + h), E);
            return;
          }
          for (var w = 0; w < h; w++) {
            u[E + w] = a[g + w];
          }
        },
        flattenChunks: function (u) {
          var a;
          var g;
          var h;
          var E;
          var w;
          var d;
          h = 0;
          a = 0;
          g = u.length;
          for (; a < g; a++) {
            h += u[a].length;
          }
          d = new Uint8Array(h);
          E = 0;
          a = 0;
          g = u.length;
          for (; a < g; a++) {
            w = u[a];
            d.set(w, E);
            E += w.length;
          }
          return d;
        }
      };
      var y = {
        arraySet: function (u, a, g, h, E) {
          for (var w = 0; w < h; w++) {
            u[E + w] = a[g + w];
          }
        },
        flattenChunks: function (u) {
          return [].concat.apply([], u);
        }
      };
      n.setTyped = function (u) {
        if (u) {
          n.Buf8 = Uint8Array;
          n.Buf16 = Uint16Array;
          n.Buf32 = Int32Array;
          n.assign(n, i);
        } else {
          n.Buf8 = Array;
          n.Buf16 = Array;
          n.Buf32 = Array;
          n.assign(n, y);
        }
      };
      n.setTyped(f);
    })(Vt);
  }
  return Vt;
}
var it = {};
var Ye = {};
var tt = {};
var di;
function Pn() {
  if (di) {
    return tt;
  }
  di = 1;
  var n = et();
  var f = 4;
  var c = 0;
  var i = 1;
  var y = 2;
  function u(v) {
    for (var U = v.length; --U >= 0;) {
      v[U] = 0;
    }
  }
  var a = 0;
  var g = 1;
  var h = 2;
  var E = 3;
  var w = 258;
  var d = 29;
  var t = 256;
  var l = t + 1 + d;
  var _ = 30;
  var x = 19;
  var C = l * 2 + 1;
  var s = 15;
  var p = 16;
  var S = 7;
  var O = 256;
  var F = 16;
  var H = 17;
  var P = 18;
  var V = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];
  var ue = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
  var oe = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7];
  var le = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
  var he = 512;
  var K = new Array((l + 2) * 2);
  u(K);
  var ee = new Array(_ * 2);
  u(ee);
  var be = new Array(he);
  u(be);
  var Se = new Array(w - E + 1);
  u(Se);
  var R = new Array(d);
  u(R);
  var A = new Array(_);
  u(A);
  function L(v, U, Z, Q, T) {
    this.static_tree = v;
    this.extra_bits = U;
    this.extra_base = Z;
    this.elems = Q;
    this.max_length = T;
    this.has_stree = v && v.length;
  }
  var te;
  var ae;
  var se;
  function ne(v, U) {
    this.dyn_tree = v;
    this.max_code = 0;
    this.stat_desc = U;
  }
  function me(v) {
    if (v < 256) {
      return be[v];
    } else {
      return be[256 + (v >>> 7)];
    }
  }
  function ye(v, U) {
    v.pending_buf[v.pending++] = U & 255;
    v.pending_buf[v.pending++] = U >>> 8 & 255;
  }
  function ve(v, U, Z) {
    if (v.bi_valid > p - Z) {
      v.bi_buf |= U << v.bi_valid & 65535;
      ye(v, v.bi_buf);
      v.bi_buf = U >> p - v.bi_valid;
      v.bi_valid += Z - p;
    } else {
      v.bi_buf |= U << v.bi_valid & 65535;
      v.bi_valid += Z;
    }
  }
  function m(v, U, Z) {
    ve(v, Z[U * 2], Z[U * 2 + 1]);
  }
  function b(v, U) {
    var Z = 0;
    do {
      Z |= v & 1;
      v >>>= 1;
      Z <<= 1;
    } while (--U > 0);
    return Z >>> 1;
  }
  function q(v) {
    if (v.bi_valid === 16) {
      ye(v, v.bi_buf);
      v.bi_buf = 0;
      v.bi_valid = 0;
    } else if (v.bi_valid >= 8) {
      v.pending_buf[v.pending++] = v.bi_buf & 255;
      v.bi_buf >>= 8;
      v.bi_valid -= 8;
    }
  }
  function G(v, U) {
    var Z = U.dyn_tree;
    var Q = U.max_code;
    var T = U.stat_desc.static_tree;
    var z = U.stat_desc.has_stree;
    var r = U.stat_desc.extra_bits;
    var M = U.stat_desc.extra_base;
    var de = U.stat_desc.max_length;
    var e;
    var I;
    var N;
    var o;
    var k;
    var D;
    var ie = 0;
    for (o = 0; o <= s; o++) {
      v.bl_count[o] = 0;
    }
    Z[v.heap[v.heap_max] * 2 + 1] = 0;
    e = v.heap_max + 1;
    for (; e < C; e++) {
      I = v.heap[e];
      o = Z[Z[I * 2 + 1] * 2 + 1] + 1;
      if (o > de) {
        o = de;
        ie++;
      }
      Z[I * 2 + 1] = o;
      if (!(I > Q)) {
        v.bl_count[o]++;
        k = 0;
        if (I >= M) {
          k = r[I - M];
        }
        D = Z[I * 2];
        v.opt_len += D * (o + k);
        if (z) {
          v.static_len += D * (T[I * 2 + 1] + k);
        }
      }
    }
    if (ie !== 0) {
      do {
        for (o = de - 1; v.bl_count[o] === 0;) {
          o--;
        }
        v.bl_count[o]--;
        v.bl_count[o + 1] += 2;
        v.bl_count[de]--;
        ie -= 2;
      } while (ie > 0);
      for (o = de; o !== 0; o--) {
        for (I = v.bl_count[o]; I !== 0;) {
          N = v.heap[--e];
          if (!(N > Q)) {
            if (Z[N * 2 + 1] !== o) {
              v.opt_len += (o - Z[N * 2 + 1]) * Z[N * 2];
              Z[N * 2 + 1] = o;
            }
            I--;
          }
        }
      }
    }
  }
  function ce(v, U, Z) {
    var Q = new Array(s + 1);
    var T = 0;
    var z;
    var r;
    for (z = 1; z <= s; z++) {
      Q[z] = T = T + Z[z - 1] << 1;
    }
    for (r = 0; r <= U; r++) {
      var M = v[r * 2 + 1];
      if (M !== 0) {
        v[r * 2] = b(Q[M]++, M);
      }
    }
  }
  function Y() {
    var v;
    var U;
    var Z;
    var Q;
    var T;
    var z = new Array(s + 1);
    Z = 0;
    Q = 0;
    for (; Q < d - 1; Q++) {
      R[Q] = Z;
      v = 0;
      for (; v < 1 << V[Q]; v++) {
        Se[Z++] = Q;
      }
    }
    Se[Z - 1] = Q;
    T = 0;
    Q = 0;
    for (; Q < 16; Q++) {
      A[Q] = T;
      v = 0;
      for (; v < 1 << ue[Q]; v++) {
        be[T++] = Q;
      }
    }
    for (T >>= 7; Q < _; Q++) {
      A[Q] = T << 7;
      v = 0;
      for (; v < 1 << ue[Q] - 7; v++) {
        be[256 + T++] = Q;
      }
    }
    for (U = 0; U <= s; U++) {
      z[U] = 0;
    }
    for (v = 0; v <= 143;) {
      K[v * 2 + 1] = 8;
      v++;
      z[8]++;
    }
    while (v <= 255) {
      K[v * 2 + 1] = 9;
      v++;
      z[9]++;
    }
    while (v <= 279) {
      K[v * 2 + 1] = 7;
      v++;
      z[7]++;
    }
    while (v <= 287) {
      K[v * 2 + 1] = 8;
      v++;
      z[8]++;
    }
    ce(K, l + 1, z);
    v = 0;
    for (; v < _; v++) {
      ee[v * 2 + 1] = 5;
      ee[v * 2] = b(v, 5);
    }
    te = new L(K, V, t + 1, l, s);
    ae = new L(ee, ue, 0, _, s);
    se = new L(new Array(0), oe, 0, x, S);
  }
  function fe(v) {
    var U;
    for (U = 0; U < l; U++) {
      v.dyn_ltree[U * 2] = 0;
    }
    for (U = 0; U < _; U++) {
      v.dyn_dtree[U * 2] = 0;
    }
    for (U = 0; U < x; U++) {
      v.bl_tree[U * 2] = 0;
    }
    v.dyn_ltree[O * 2] = 1;
    v.opt_len = v.static_len = 0;
    v.last_lit = v.matches = 0;
  }
  function je(v) {
    if (v.bi_valid > 8) {
      ye(v, v.bi_buf);
    } else if (v.bi_valid > 0) {
      v.pending_buf[v.pending++] = v.bi_buf;
    }
    v.bi_buf = 0;
    v.bi_valid = 0;
  }
  function Ie(v, U, Z, Q) {
    je(v);
    ye(v, Z);
    ye(v, ~Z);
    n.arraySet(v.pending_buf, v.window, U, Z, v.pending);
    v.pending += Z;
  }
  function Be(v, U, Z, Q) {
    var T = U * 2;
    var z = Z * 2;
    return v[T] < v[z] || v[T] === v[z] && Q[U] <= Q[Z];
  }
  function xe(v, U, Z) {
    for (var Q = v.heap[Z], T = Z << 1; T <= v.heap_len && (T < v.heap_len && Be(U, v.heap[T + 1], v.heap[T], v.depth) && T++, !Be(U, Q, v.heap[T], v.depth));) {
      v.heap[Z] = v.heap[T];
      Z = T;
      T <<= 1;
    }
    v.heap[Z] = Q;
  }
  function re(v, U, Z) {
    var Q;
    var T;
    var z = 0;
    var r;
    var M;
    if (v.last_lit !== 0) {
      do {
        Q = v.pending_buf[v.d_buf + z * 2] << 8 | v.pending_buf[v.d_buf + z * 2 + 1];
        T = v.pending_buf[v.l_buf + z];
        z++;
        if (Q === 0) {
          m(v, T, U);
        } else {
          r = Se[T];
          m(v, r + t + 1, U);
          M = V[r];
          if (M !== 0) {
            T -= R[r];
            ve(v, T, M);
          }
          Q--;
          r = me(Q);
          m(v, r, Z);
          M = ue[r];
          if (M !== 0) {
            Q -= A[r];
            ve(v, Q, M);
          }
        }
      } while (z < v.last_lit);
    }
    m(v, O, U);
  }
  function Oe(v, U) {
    var Z = U.dyn_tree;
    var Q = U.stat_desc.static_tree;
    var T = U.stat_desc.has_stree;
    var z = U.stat_desc.elems;
    var r;
    var M;
    var de = -1;
    var e;
    v.heap_len = 0;
    v.heap_max = C;
    r = 0;
    for (; r < z; r++) {
      if (Z[r * 2] !== 0) {
        v.heap[++v.heap_len] = de = r;
        v.depth[r] = 0;
      } else {
        Z[r * 2 + 1] = 0;
      }
    }
    while (v.heap_len < 2) {
      e = v.heap[++v.heap_len] = de < 2 ? ++de : 0;
      Z[e * 2] = 1;
      v.depth[e] = 0;
      v.opt_len--;
      if (T) {
        v.static_len -= Q[e * 2 + 1];
      }
    }
    U.max_code = de;
    r = v.heap_len >> 1;
    for (; r >= 1; r--) {
      xe(v, Z, r);
    }
    e = z;
    do {
      r = v.heap[1];
      v.heap[1] = v.heap[v.heap_len--];
      xe(v, Z, 1);
      M = v.heap[1];
      v.heap[--v.heap_max] = r;
      v.heap[--v.heap_max] = M;
      Z[e * 2] = Z[r * 2] + Z[M * 2];
      v.depth[e] = (v.depth[r] >= v.depth[M] ? v.depth[r] : v.depth[M]) + 1;
      Z[r * 2 + 1] = Z[M * 2 + 1] = e;
      v.heap[1] = e++;
      xe(v, Z, 1);
    } while (v.heap_len >= 2);
    v.heap[--v.heap_max] = v.heap[1];
    G(v, U);
    ce(Z, de, v.bl_count);
  }
  function Me(v, U, Z) {
    var Q;
    var T = -1;
    var z;
    var r = U[1];
    var M = 0;
    var de = 7;
    var e = 4;
    if (r === 0) {
      de = 138;
      e = 3;
    }
    U[(Z + 1) * 2 + 1] = 65535;
    Q = 0;
    for (; Q <= Z; Q++) {
      z = r;
      r = U[(Q + 1) * 2 + 1];
      if (!(++M < de) || z !== r) {
        if (M < e) {
          v.bl_tree[z * 2] += M;
        } else if (z !== 0) {
          if (z !== T) {
            v.bl_tree[z * 2]++;
          }
          v.bl_tree[F * 2]++;
        } else if (M <= 10) {
          v.bl_tree[H * 2]++;
        } else {
          v.bl_tree[P * 2]++;
        }
        M = 0;
        T = z;
        if (r === 0) {
          de = 138;
          e = 3;
        } else if (z === r) {
          de = 6;
          e = 3;
        } else {
          de = 7;
          e = 4;
        }
      }
    }
  }
  function Pe(v, U, Z) {
    var Q;
    var T = -1;
    var z;
    var r = U[1];
    var M = 0;
    var de = 7;
    var e = 4;
    if (r === 0) {
      de = 138;
      e = 3;
    }
    Q = 0;
    for (; Q <= Z; Q++) {
      z = r;
      r = U[(Q + 1) * 2 + 1];
      if (!(++M < de) || z !== r) {
        if (M < e) {
          do {
            m(v, z, v.bl_tree);
          } while (--M !== 0);
        } else if (z !== 0) {
          if (z !== T) {
            m(v, z, v.bl_tree);
            M--;
          }
          m(v, F, v.bl_tree);
          ve(v, M - 3, 2);
        } else if (M <= 10) {
          m(v, H, v.bl_tree);
          ve(v, M - 3, 3);
        } else {
          m(v, P, v.bl_tree);
          ve(v, M - 11, 7);
        }
        M = 0;
        T = z;
        if (r === 0) {
          de = 138;
          e = 3;
        } else if (z === r) {
          de = 6;
          e = 3;
        } else {
          de = 7;
          e = 4;
        }
      }
    }
  }
  function B(v) {
    var U;
    Me(v, v.dyn_ltree, v.l_desc.max_code);
    Me(v, v.dyn_dtree, v.d_desc.max_code);
    Oe(v, v.bl_desc);
    U = x - 1;
    for (; U >= 3 && v.bl_tree[le[U] * 2 + 1] === 0; U--);
    v.opt_len += (U + 1) * 3 + 5 + 5 + 4;
    return U;
  }
  function j(v, U, Z, Q) {
    var T;
    ve(v, U - 257, 5);
    ve(v, Z - 1, 5);
    ve(v, Q - 4, 4);
    T = 0;
    for (; T < Q; T++) {
      ve(v, v.bl_tree[le[T] * 2 + 1], 3);
    }
    Pe(v, v.dyn_ltree, U - 1);
    Pe(v, v.dyn_dtree, Z - 1);
  }
  function W(v) {
    var U = 4093624447;
    var Z;
    for (Z = 0; Z <= 31; Z++, U >>>= 1) {
      if (U & 1 && v.dyn_ltree[Z * 2] !== 0) {
        return c;
      }
    }
    if (v.dyn_ltree[18] !== 0 || v.dyn_ltree[20] !== 0 || v.dyn_ltree[26] !== 0) {
      return i;
    }
    for (Z = 32; Z < t; Z++) {
      if (v.dyn_ltree[Z * 2] !== 0) {
        return i;
      }
    }
    return c;
  }
  var J = false;
  function we(v) {
    if (!J) {
      Y();
      J = true;
    }
    v.l_desc = new ne(v.dyn_ltree, te);
    v.d_desc = new ne(v.dyn_dtree, ae);
    v.bl_desc = new ne(v.bl_tree, se);
    v.bi_buf = 0;
    v.bi_valid = 0;
    fe(v);
  }
  function pe(v, U, Z, Q) {
    ve(v, (a << 1) + (Q ? 1 : 0), 3);
    Ie(v, U, Z);
  }
  function ke(v) {
    ve(v, g << 1, 3);
    m(v, O, K);
    q(v);
  }
  function Ce(v, U, Z, Q) {
    var T;
    var z;
    var r = 0;
    if (v.level > 0) {
      if (v.strm.data_type === y) {
        v.strm.data_type = W(v);
      }
      Oe(v, v.l_desc);
      Oe(v, v.d_desc);
      r = B(v);
      T = v.opt_len + 3 + 7 >>> 3;
      z = v.static_len + 3 + 7 >>> 3;
      if (z <= T) {
        T = z;
      }
    } else {
      T = z = Z + 5;
    }
    if (Z + 4 <= T && U !== -1) {
      pe(v, U, Z, Q);
    } else if (v.strategy === f || z === T) {
      ve(v, (g << 1) + (Q ? 1 : 0), 3);
      re(v, K, ee);
    } else {
      ve(v, (h << 1) + (Q ? 1 : 0), 3);
      j(v, v.l_desc.max_code + 1, v.d_desc.max_code + 1, r + 1);
      re(v, v.dyn_ltree, v.dyn_dtree);
    }
    fe(v);
    if (Q) {
      je(v);
    }
  }
  function Je(v, U, Z) {
    v.pending_buf[v.d_buf + v.last_lit * 2] = U >>> 8 & 255;
    v.pending_buf[v.d_buf + v.last_lit * 2 + 1] = U & 255;
    v.pending_buf[v.l_buf + v.last_lit] = Z & 255;
    v.last_lit++;
    if (U === 0) {
      v.dyn_ltree[Z * 2]++;
    } else {
      v.matches++;
      U--;
      v.dyn_ltree[(Se[Z] + t + 1) * 2]++;
      v.dyn_dtree[me(U) * 2]++;
    }
    return v.last_lit === v.lit_bufsize - 1;
  }
  tt._tr_init = we;
  tt._tr_stored_block = pe;
  tt._tr_flush_block = Ce;
  tt._tr_tally = Je;
  tt._tr_align = ke;
  return tt;
}
var Jt;
var ci;
function dn() {
  if (ci) {
    return Jt;
  }
  ci = 1;
  function n(f, c, i, y) {
    var u = f & 65535 | 0;
    var a = f >>> 16 & 65535 | 0;
    var g = 0;
    for (; i !== 0;) {
      g = i > 2000 ? 2000 : i;
      i -= g;
      do {
        u = u + c[y++] | 0;
        a = a + u | 0;
      } while (--g);
      u %= 65521;
      a %= 65521;
    }
    return u | a << 16 | 0;
  }
  Jt = n;
  return Jt;
}
var $t;
var vi;
function cn() {
  if (vi) {
    return $t;
  }
  vi = 1;
  function n() {
    var i;
    var y = [];
    for (var u = 0; u < 256; u++) {
      i = u;
      for (var a = 0; a < 8; a++) {
        i = i & 1 ? i >>> 1 ^ -306674912 : i >>> 1;
      }
      y[u] = i;
    }
    return y;
  }
  var f = n();
  function c(i, y, u, a) {
    var g = f;
    var h = a + u;
    i ^= -1;
    for (var E = a; E < h; E++) {
      i = i >>> 8 ^ g[(i ^ y[E]) & 255];
    }
    return i ^ -1;
  }
  $t = c;
  return $t;
}
var Qt;
var pi;
function Rr() {
  if (!pi) {
    pi = 1;
    Qt = {
      2: "need dictionary",
      1: "stream end",
      0: "",
      "-1": "file error",
      "-2": "stream error",
      "-3": "data error",
      "-4": "insufficient memory",
      "-5": "buffer error",
      "-6": "incompatible version"
    };
  }
  return Qt;
}
var _i;
function jn() {
  if (_i) {
    return Ye;
  }
  _i = 1;
  var n = et();
  var f = Pn();
  var c = dn();
  var i = cn();
  var y = Rr();
  var u = 0;
  var a = 1;
  var g = 3;
  var h = 4;
  var E = 5;
  var w = 0;
  var d = 1;
  var t = -2;
  var l = -3;
  var _ = -5;
  var x = -1;
  var C = 1;
  var s = 2;
  var p = 3;
  var S = 4;
  var O = 0;
  var F = 2;
  var H = 8;
  var P = 9;
  var V = 15;
  var ue = 8;
  var oe = 29;
  var le = 256;
  var he = le + 1 + oe;
  var K = 30;
  var ee = 19;
  var be = he * 2 + 1;
  var Se = 15;
  var R = 3;
  var A = 258;
  var L = A + R + 1;
  var te = 32;
  var ae = 42;
  var se = 69;
  var ne = 73;
  var me = 91;
  var ye = 103;
  var ve = 113;
  var m = 666;
  var b = 1;
  var q = 2;
  var G = 3;
  var ce = 4;
  var Y = 3;
  function fe(e, I) {
    e.msg = y[I];
    return I;
  }
  function je(e) {
    return (e << 1) - (e > 4 ? 9 : 0);
  }
  function Ie(e) {
    for (var I = e.length; --I >= 0;) {
      e[I] = 0;
    }
  }
  function Be(e) {
    var I = e.state;
    var N = I.pending;
    if (N > e.avail_out) {
      N = e.avail_out;
    }
    if (N !== 0) {
      n.arraySet(e.output, I.pending_buf, I.pending_out, N, e.next_out);
      e.next_out += N;
      I.pending_out += N;
      e.total_out += N;
      e.avail_out -= N;
      I.pending -= N;
      if (I.pending === 0) {
        I.pending_out = 0;
      }
    }
  }
  function xe(e, I) {
    f._tr_flush_block(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, I);
    e.block_start = e.strstart;
    Be(e.strm);
  }
  function re(e, I) {
    e.pending_buf[e.pending++] = I;
  }
  function Oe(e, I) {
    e.pending_buf[e.pending++] = I >>> 8 & 255;
    e.pending_buf[e.pending++] = I & 255;
  }
  function Me(e, I, N, o) {
    var k = e.avail_in;
    if (k > o) {
      k = o;
    }
    if (k === 0) {
      return 0;
    } else {
      e.avail_in -= k;
      n.arraySet(I, e.input, e.next_in, k, N);
      if (e.state.wrap === 1) {
        e.adler = c(e.adler, I, k, N);
      } else if (e.state.wrap === 2) {
        e.adler = i(e.adler, I, k, N);
      }
      e.next_in += k;
      e.total_in += k;
      return k;
    }
  }
  function Pe(e, I) {
    var N = e.max_chain_length;
    var o = e.strstart;
    var k;
    var D;
    var ie = e.prev_length;
    var X = e.nice_match;
    var $ = e.strstart > e.w_size - L ? e.strstart - (e.w_size - L) : 0;
    var _e = e.window;
    var Xe = e.w_mask;
    var Re = e.prev;
    var ge = e.strstart + A;
    var Fe = _e[o + ie - 1];
    var Le = _e[o + ie];
    if (e.prev_length >= e.good_match) {
      N >>= 2;
    }
    if (X > e.lookahead) {
      X = e.lookahead;
    }
    do {
      k = I;
      if (_e[k + ie] === Le && _e[k + ie - 1] === Fe && _e[k] === _e[o] && _e[++k] === _e[o + 1]) {
        o += 2;
        k++;
        do ; while (_e[++o] === _e[++k] && _e[++o] === _e[++k] && _e[++o] === _e[++k] && _e[++o] === _e[++k] && _e[++o] === _e[++k] && _e[++o] === _e[++k] && _e[++o] === _e[++k] && _e[++o] === _e[++k] && o < ge);
        D = A - (ge - o);
        o = ge - A;
        if (D > ie) {
          e.match_start = I;
          ie = D;
          if (D >= X) {
            break;
          }
          Fe = _e[o + ie - 1];
          Le = _e[o + ie];
        }
      }
    } while ((I = Re[I & Xe]) > $ && --N !== 0);
    if (ie <= e.lookahead) {
      return ie;
    } else {
      return e.lookahead;
    }
  }
  function B(e) {
    var I = e.w_size;
    var N;
    var o;
    var k;
    var D;
    var ie;
    do {
      D = e.window_size - e.lookahead - e.strstart;
      if (e.strstart >= I + (I - L)) {
        n.arraySet(e.window, e.window, I, I, 0);
        e.match_start -= I;
        e.strstart -= I;
        e.block_start -= I;
        o = e.hash_size;
        N = o;
        do {
          k = e.head[--N];
          e.head[N] = k >= I ? k - I : 0;
        } while (--o);
        o = I;
        N = o;
        do {
          k = e.prev[--N];
          e.prev[N] = k >= I ? k - I : 0;
        } while (--o);
        D += I;
      }
      if (e.strm.avail_in === 0) {
        break;
      }
      o = Me(e.strm, e.window, e.strstart + e.lookahead, D);
      e.lookahead += o;
      if (e.lookahead + e.insert >= R) {
        ie = e.strstart - e.insert;
        e.ins_h = e.window[ie];
        e.ins_h = (e.ins_h << e.hash_shift ^ e.window[ie + 1]) & e.hash_mask;
        while (e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[ie + R - 1]) & e.hash_mask, e.prev[ie & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = ie, ie++, e.insert--, !(e.lookahead + e.insert < R)));
      }
    } while (e.lookahead < L && e.strm.avail_in !== 0);
  }
  function j(e, I) {
    var N = 65535;
    for (N > e.pending_buf_size - 5 && (N = e.pending_buf_size - 5);;) {
      if (e.lookahead <= 1) {
        B(e);
        if (e.lookahead === 0 && I === u) {
          return b;
        }
        if (e.lookahead === 0) {
          break;
        }
      }
      e.strstart += e.lookahead;
      e.lookahead = 0;
      var o = e.block_start + N;
      if ((e.strstart === 0 || e.strstart >= o) && (e.lookahead = e.strstart - o, e.strstart = o, xe(e, false), e.strm.avail_out === 0) || e.strstart - e.block_start >= e.w_size - L && (xe(e, false), e.strm.avail_out === 0)) {
        return b;
      }
    }
    e.insert = 0;
    if (I === h) {
      xe(e, true);
      if (e.strm.avail_out === 0) {
        return G;
      } else {
        return ce;
      }
    } else {
      if (e.strstart > e.block_start) {
        xe(e, false);
        e.strm.avail_out === 0;
      }
      return b;
    }
  }
  function W(e, I) {
    var N;
    var o;
    while (true) {
      if (e.lookahead < L) {
        B(e);
        if (e.lookahead < L && I === u) {
          return b;
        }
        if (e.lookahead === 0) {
          break;
        }
      }
      N = 0;
      if (e.lookahead >= R) {
        e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + R - 1]) & e.hash_mask;
        N = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
        e.head[e.ins_h] = e.strstart;
      }
      if (N !== 0 && e.strstart - N <= e.w_size - L) {
        e.match_length = Pe(e, N);
      }
      if (e.match_length >= R) {
        o = f._tr_tally(e, e.strstart - e.match_start, e.match_length - R);
        e.lookahead -= e.match_length;
        if (e.match_length <= e.max_lazy_match && e.lookahead >= R) {
          e.match_length--;
          do {
            e.strstart++;
            e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + R - 1]) & e.hash_mask;
            N = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
            e.head[e.ins_h] = e.strstart;
          } while (--e.match_length !== 0);
          e.strstart++;
        } else {
          e.strstart += e.match_length;
          e.match_length = 0;
          e.ins_h = e.window[e.strstart];
          e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
        }
      } else {
        o = f._tr_tally(e, 0, e.window[e.strstart]);
        e.lookahead--;
        e.strstart++;
      }
      if (o && (xe(e, false), e.strm.avail_out === 0)) {
        return b;
      }
    }
    e.insert = e.strstart < R - 1 ? e.strstart : R - 1;
    if (I === h) {
      xe(e, true);
      if (e.strm.avail_out === 0) {
        return G;
      } else {
        return ce;
      }
    } else if (e.last_lit && (xe(e, false), e.strm.avail_out === 0)) {
      return b;
    } else {
      return q;
    }
  }
  function J(e, I) {
    var N;
    var o;
    var k;
    while (true) {
      if (e.lookahead < L) {
        B(e);
        if (e.lookahead < L && I === u) {
          return b;
        }
        if (e.lookahead === 0) {
          break;
        }
      }
      N = 0;
      if (e.lookahead >= R) {
        e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + R - 1]) & e.hash_mask;
        N = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
        e.head[e.ins_h] = e.strstart;
      }
      e.prev_length = e.match_length;
      e.prev_match = e.match_start;
      e.match_length = R - 1;
      if (N !== 0 && e.prev_length < e.max_lazy_match && e.strstart - N <= e.w_size - L) {
        e.match_length = Pe(e, N);
        if (e.match_length <= 5 && (e.strategy === C || e.match_length === R && e.strstart - e.match_start > 4096)) {
          e.match_length = R - 1;
        }
      }
      if (e.prev_length >= R && e.match_length <= e.prev_length) {
        k = e.strstart + e.lookahead - R;
        o = f._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - R);
        e.lookahead -= e.prev_length - 1;
        e.prev_length -= 2;
        do {
          if (++e.strstart <= k) {
            e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + R - 1]) & e.hash_mask;
            N = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
            e.head[e.ins_h] = e.strstart;
          }
        } while (--e.prev_length !== 0);
        e.match_available = 0;
        e.match_length = R - 1;
        e.strstart++;
        if (o && (xe(e, false), e.strm.avail_out === 0)) {
          return b;
        }
      } else if (e.match_available) {
        o = f._tr_tally(e, 0, e.window[e.strstart - 1]);
        if (o) {
          xe(e, false);
        }
        e.strstart++;
        e.lookahead--;
        if (e.strm.avail_out === 0) {
          return b;
        }
      } else {
        e.match_available = 1;
        e.strstart++;
        e.lookahead--;
      }
    }
    if (e.match_available) {
      o = f._tr_tally(e, 0, e.window[e.strstart - 1]);
      e.match_available = 0;
    }
    e.insert = e.strstart < R - 1 ? e.strstart : R - 1;
    if (I === h) {
      xe(e, true);
      if (e.strm.avail_out === 0) {
        return G;
      } else {
        return ce;
      }
    } else if (e.last_lit && (xe(e, false), e.strm.avail_out === 0)) {
      return b;
    } else {
      return q;
    }
  }
  function we(e, I) {
    var N;
    var o;
    var k;
    var D;
    var ie = e.window;
    while (true) {
      if (e.lookahead <= A) {
        B(e);
        if (e.lookahead <= A && I === u) {
          return b;
        }
        if (e.lookahead === 0) {
          break;
        }
      }
      e.match_length = 0;
      if (e.lookahead >= R && e.strstart > 0 && (k = e.strstart - 1, o = ie[k], o === ie[++k] && o === ie[++k] && o === ie[++k])) {
        D = e.strstart + A;
        do ; while (o === ie[++k] && o === ie[++k] && o === ie[++k] && o === ie[++k] && o === ie[++k] && o === ie[++k] && o === ie[++k] && o === ie[++k] && k < D);
        e.match_length = A - (D - k);
        if (e.match_length > e.lookahead) {
          e.match_length = e.lookahead;
        }
      }
      if (e.match_length >= R) {
        N = f._tr_tally(e, 1, e.match_length - R);
        e.lookahead -= e.match_length;
        e.strstart += e.match_length;
        e.match_length = 0;
      } else {
        N = f._tr_tally(e, 0, e.window[e.strstart]);
        e.lookahead--;
        e.strstart++;
      }
      if (N && (xe(e, false), e.strm.avail_out === 0)) {
        return b;
      }
    }
    e.insert = 0;
    if (I === h) {
      xe(e, true);
      if (e.strm.avail_out === 0) {
        return G;
      } else {
        return ce;
      }
    } else if (e.last_lit && (xe(e, false), e.strm.avail_out === 0)) {
      return b;
    } else {
      return q;
    }
  }
  function pe(e, I) {
    var N;
    for (;;) {
      if (e.lookahead === 0 && (B(e), e.lookahead === 0)) {
        if (I === u) {
          return b;
        }
        break;
      }
      e.match_length = 0;
      N = f._tr_tally(e, 0, e.window[e.strstart]);
      e.lookahead--;
      e.strstart++;
      if (N && (xe(e, false), e.strm.avail_out === 0)) {
        return b;
      }
    }
    e.insert = 0;
    if (I === h) {
      xe(e, true);
      if (e.strm.avail_out === 0) {
        return G;
      } else {
        return ce;
      }
    } else if (e.last_lit && (xe(e, false), e.strm.avail_out === 0)) {
      return b;
    } else {
      return q;
    }
  }
  function ke(e, I, N, o, k) {
    this.good_length = e;
    this.max_lazy = I;
    this.nice_length = N;
    this.max_chain = o;
    this.func = k;
  }
  var Ce;
  Ce = [new ke(0, 0, 0, 0, j), new ke(4, 4, 8, 4, W), new ke(4, 5, 16, 8, W), new ke(4, 6, 32, 32, W), new ke(4, 4, 16, 16, J), new ke(8, 16, 32, 32, J), new ke(8, 16, 128, 128, J), new ke(8, 32, 128, 256, J), new ke(32, 128, 258, 1024, J), new ke(32, 258, 258, 4096, J)];
  function Je(e) {
    e.window_size = e.w_size * 2;
    Ie(e.head);
    e.max_lazy_match = Ce[e.level].max_lazy;
    e.good_match = Ce[e.level].good_length;
    e.nice_match = Ce[e.level].nice_length;
    e.max_chain_length = Ce[e.level].max_chain;
    e.strstart = 0;
    e.block_start = 0;
    e.lookahead = 0;
    e.insert = 0;
    e.match_length = e.prev_length = R - 1;
    e.match_available = 0;
    e.ins_h = 0;
  }
  function v() {
    this.strm = null;
    this.status = 0;
    this.pending_buf = null;
    this.pending_buf_size = 0;
    this.pending_out = 0;
    this.pending = 0;
    this.wrap = 0;
    this.gzhead = null;
    this.gzindex = 0;
    this.method = H;
    this.last_flush = -1;
    this.w_size = 0;
    this.w_bits = 0;
    this.w_mask = 0;
    this.window = null;
    this.window_size = 0;
    this.prev = null;
    this.head = null;
    this.ins_h = 0;
    this.hash_size = 0;
    this.hash_bits = 0;
    this.hash_mask = 0;
    this.hash_shift = 0;
    this.block_start = 0;
    this.match_length = 0;
    this.prev_match = 0;
    this.match_available = 0;
    this.strstart = 0;
    this.match_start = 0;
    this.lookahead = 0;
    this.prev_length = 0;
    this.max_chain_length = 0;
    this.max_lazy_match = 0;
    this.level = 0;
    this.strategy = 0;
    this.good_match = 0;
    this.nice_match = 0;
    this.dyn_ltree = new n.Buf16(be * 2);
    this.dyn_dtree = new n.Buf16((K * 2 + 1) * 2);
    this.bl_tree = new n.Buf16((ee * 2 + 1) * 2);
    Ie(this.dyn_ltree);
    Ie(this.dyn_dtree);
    Ie(this.bl_tree);
    this.l_desc = null;
    this.d_desc = null;
    this.bl_desc = null;
    this.bl_count = new n.Buf16(Se + 1);
    this.heap = new n.Buf16(he * 2 + 1);
    Ie(this.heap);
    this.heap_len = 0;
    this.heap_max = 0;
    this.depth = new n.Buf16(he * 2 + 1);
    Ie(this.depth);
    this.l_buf = 0;
    this.lit_bufsize = 0;
    this.last_lit = 0;
    this.d_buf = 0;
    this.opt_len = 0;
    this.static_len = 0;
    this.matches = 0;
    this.insert = 0;
    this.bi_buf = 0;
    this.bi_valid = 0;
  }
  function U(e) {
    var I;
    if (!e || !e.state) {
      return fe(e, t);
    } else {
      e.total_in = e.total_out = 0;
      e.data_type = F;
      I = e.state;
      I.pending = 0;
      I.pending_out = 0;
      if (I.wrap < 0) {
        I.wrap = -I.wrap;
      }
      I.status = I.wrap ? ae : ve;
      e.adler = I.wrap === 2 ? 0 : 1;
      I.last_flush = u;
      f._tr_init(I);
      return w;
    }
  }
  function Z(e) {
    var I = U(e);
    if (I === w) {
      Je(e.state);
    }
    return I;
  }
  function Q(e, I) {
    if (!e || !e.state || e.state.wrap !== 2) {
      return t;
    } else {
      e.state.gzhead = I;
      return w;
    }
  }
  function T(e, I, N, o, k, D) {
    if (!e) {
      return t;
    }
    var ie = 1;
    if (I === x) {
      I = 6;
    }
    if (o < 0) {
      ie = 0;
      o = -o;
    } else if (o > 15) {
      ie = 2;
      o -= 16;
    }
    if (k < 1 || k > P || N !== H || o < 8 || o > 15 || I < 0 || I > 9 || D < 0 || D > S) {
      return fe(e, t);
    }
    if (o === 8) {
      o = 9;
    }
    var X = new v();
    e.state = X;
    X.strm = e;
    X.wrap = ie;
    X.gzhead = null;
    X.w_bits = o;
    X.w_size = 1 << X.w_bits;
    X.w_mask = X.w_size - 1;
    X.hash_bits = k + 7;
    X.hash_size = 1 << X.hash_bits;
    X.hash_mask = X.hash_size - 1;
    X.hash_shift = ~~((X.hash_bits + R - 1) / R);
    X.window = new n.Buf8(X.w_size * 2);
    X.head = new n.Buf16(X.hash_size);
    X.prev = new n.Buf16(X.w_size);
    X.lit_bufsize = 1 << k + 6;
    X.pending_buf_size = X.lit_bufsize * 4;
    X.pending_buf = new n.Buf8(X.pending_buf_size);
    X.d_buf = X.lit_bufsize * 1;
    X.l_buf = X.lit_bufsize * 3;
    X.level = I;
    X.strategy = D;
    X.method = N;
    return Z(e);
  }
  function z(e, I) {
    return T(e, I, H, V, ue, O);
  }
  function r(e, I) {
    var N;
    var o;
    var k;
    var D;
    if (!e || !e.state || I > E || I < 0) {
      if (e) {
        return fe(e, t);
      } else {
        return t;
      }
    }
    o = e.state;
    if (!e.output || !e.input && e.avail_in !== 0 || o.status === m && I !== h) {
      return fe(e, e.avail_out === 0 ? _ : t);
    }
    o.strm = e;
    N = o.last_flush;
    o.last_flush = I;
    if (o.status === ae) {
      if (o.wrap === 2) {
        e.adler = 0;
        re(o, 31);
        re(o, 139);
        re(o, 8);
        if (o.gzhead) {
          re(o, (o.gzhead.text ? 1 : 0) + (o.gzhead.hcrc ? 2 : 0) + (o.gzhead.extra ? 4 : 0) + (o.gzhead.name ? 8 : 0) + (o.gzhead.comment ? 16 : 0));
          re(o, o.gzhead.time & 255);
          re(o, o.gzhead.time >> 8 & 255);
          re(o, o.gzhead.time >> 16 & 255);
          re(o, o.gzhead.time >> 24 & 255);
          re(o, o.level === 9 ? 2 : o.strategy >= s || o.level < 2 ? 4 : 0);
          re(o, o.gzhead.os & 255);
          if (o.gzhead.extra && o.gzhead.extra.length) {
            re(o, o.gzhead.extra.length & 255);
            re(o, o.gzhead.extra.length >> 8 & 255);
          }
          if (o.gzhead.hcrc) {
            e.adler = i(e.adler, o.pending_buf, o.pending, 0);
          }
          o.gzindex = 0;
          o.status = se;
        } else {
          re(o, 0);
          re(o, 0);
          re(o, 0);
          re(o, 0);
          re(o, 0);
          re(o, o.level === 9 ? 2 : o.strategy >= s || o.level < 2 ? 4 : 0);
          re(o, Y);
          o.status = ve;
        }
      } else {
        var ie = H + (o.w_bits - 8 << 4) << 8;
        var X = -1;
        if (o.strategy >= s || o.level < 2) {
          X = 0;
        } else if (o.level < 6) {
          X = 1;
        } else if (o.level === 6) {
          X = 2;
        } else {
          X = 3;
        }
        ie |= X << 6;
        if (o.strstart !== 0) {
          ie |= te;
        }
        ie += 31 - ie % 31;
        o.status = ve;
        Oe(o, ie);
        if (o.strstart !== 0) {
          Oe(o, e.adler >>> 16);
          Oe(o, e.adler & 65535);
        }
        e.adler = 1;
      }
    }
    if (o.status === se) {
      if (o.gzhead.extra) {
        for (k = o.pending; o.gzindex < (o.gzhead.extra.length & 65535) && (o.pending !== o.pending_buf_size || !(o.gzhead.hcrc && o.pending > k && (e.adler = i(e.adler, o.pending_buf, o.pending - k, k)), Be(e), k = o.pending, o.pending === o.pending_buf_size));) {
          re(o, o.gzhead.extra[o.gzindex] & 255);
          o.gzindex++;
        }
        if (o.gzhead.hcrc && o.pending > k) {
          e.adler = i(e.adler, o.pending_buf, o.pending - k, k);
        }
        if (o.gzindex === o.gzhead.extra.length) {
          o.gzindex = 0;
          o.status = ne;
        }
      } else {
        o.status = ne;
      }
    }
    if (o.status === ne) {
      if (o.gzhead.name) {
        k = o.pending;
        do {
          if (o.pending === o.pending_buf_size && (o.gzhead.hcrc && o.pending > k && (e.adler = i(e.adler, o.pending_buf, o.pending - k, k)), Be(e), k = o.pending, o.pending === o.pending_buf_size)) {
            D = 1;
            break;
          }
          if (o.gzindex < o.gzhead.name.length) {
            D = o.gzhead.name.charCodeAt(o.gzindex++) & 255;
          } else {
            D = 0;
          }
          re(o, D);
        } while (D !== 0);
        if (o.gzhead.hcrc && o.pending > k) {
          e.adler = i(e.adler, o.pending_buf, o.pending - k, k);
        }
        if (D === 0) {
          o.gzindex = 0;
          o.status = me;
        }
      } else {
        o.status = me;
      }
    }
    if (o.status === me) {
      if (o.gzhead.comment) {
        k = o.pending;
        do {
          if (o.pending === o.pending_buf_size && (o.gzhead.hcrc && o.pending > k && (e.adler = i(e.adler, o.pending_buf, o.pending - k, k)), Be(e), k = o.pending, o.pending === o.pending_buf_size)) {
            D = 1;
            break;
          }
          if (o.gzindex < o.gzhead.comment.length) {
            D = o.gzhead.comment.charCodeAt(o.gzindex++) & 255;
          } else {
            D = 0;
          }
          re(o, D);
        } while (D !== 0);
        if (o.gzhead.hcrc && o.pending > k) {
          e.adler = i(e.adler, o.pending_buf, o.pending - k, k);
        }
        if (D === 0) {
          o.status = ye;
        }
      } else {
        o.status = ye;
      }
    }
    if (o.status === ye) {
      if (o.gzhead.hcrc) {
        if (o.pending + 2 > o.pending_buf_size) {
          Be(e);
        }
        if (o.pending + 2 <= o.pending_buf_size) {
          re(o, e.adler & 255);
          re(o, e.adler >> 8 & 255);
          e.adler = 0;
          o.status = ve;
        }
      } else {
        o.status = ve;
      }
    }
    if (o.pending !== 0) {
      Be(e);
      if (e.avail_out === 0) {
        o.last_flush = -1;
        return w;
      }
    } else if (e.avail_in === 0 && je(I) <= je(N) && I !== h) {
      return fe(e, _);
    }
    if (o.status === m && e.avail_in !== 0) {
      return fe(e, _);
    }
    if (e.avail_in !== 0 || o.lookahead !== 0 || I !== u && o.status !== m) {
      var $ = o.strategy === s ? pe(o, I) : o.strategy === p ? we(o, I) : Ce[o.level].func(o, I);
      if ($ === G || $ === ce) {
        o.status = m;
      }
      if ($ === b || $ === G) {
        if (e.avail_out === 0) {
          o.last_flush = -1;
        }
        return w;
      }
      if ($ === q && (I === a ? f._tr_align(o) : I !== E && (f._tr_stored_block(o, 0, 0, false), I === g && (Ie(o.head), o.lookahead === 0 && (o.strstart = 0, o.block_start = 0, o.insert = 0))), Be(e), e.avail_out === 0)) {
        o.last_flush = -1;
        return w;
      }
    }
    if (I !== h) {
      return w;
    } else if (o.wrap <= 0) {
      return d;
    } else {
      if (o.wrap === 2) {
        re(o, e.adler & 255);
        re(o, e.adler >> 8 & 255);
        re(o, e.adler >> 16 & 255);
        re(o, e.adler >> 24 & 255);
        re(o, e.total_in & 255);
        re(o, e.total_in >> 8 & 255);
        re(o, e.total_in >> 16 & 255);
        re(o, e.total_in >> 24 & 255);
      } else {
        Oe(o, e.adler >>> 16);
        Oe(o, e.adler & 65535);
      }
      Be(e);
      if (o.wrap > 0) {
        o.wrap = -o.wrap;
      }
      if (o.pending !== 0) {
        return w;
      } else {
        return d;
      }
    }
  }
  function M(e) {
    var I;
    if (!e || !e.state) {
      return t;
    } else {
      I = e.state.status;
      if (I !== ae && I !== se && I !== ne && I !== me && I !== ye && I !== ve && I !== m) {
        return fe(e, t);
      } else {
        e.state = null;
        if (I === ve) {
          return fe(e, l);
        } else {
          return w;
        }
      }
    }
  }
  function de(e, I) {
    var N = I.length;
    var o;
    var k;
    var D;
    var ie;
    var X;
    var $;
    var _e;
    var Xe;
    if (!e || !e.state || (o = e.state, ie = o.wrap, ie === 2 || ie === 1 && o.status !== ae || o.lookahead)) {
      return t;
    }
    if (ie === 1) {
      e.adler = c(e.adler, I, N, 0);
    }
    o.wrap = 0;
    if (N >= o.w_size) {
      if (ie === 0) {
        Ie(o.head);
        o.strstart = 0;
        o.block_start = 0;
        o.insert = 0;
      }
      Xe = new n.Buf8(o.w_size);
      n.arraySet(Xe, I, N - o.w_size, o.w_size, 0);
      I = Xe;
      N = o.w_size;
    }
    X = e.avail_in;
    $ = e.next_in;
    _e = e.input;
    e.avail_in = N;
    e.next_in = 0;
    e.input = I;
    B(o);
    while (o.lookahead >= R) {
      k = o.strstart;
      D = o.lookahead - (R - 1);
      do {
        o.ins_h = (o.ins_h << o.hash_shift ^ o.window[k + R - 1]) & o.hash_mask;
        o.prev[k & o.w_mask] = o.head[o.ins_h];
        o.head[o.ins_h] = k;
        k++;
      } while (--D);
      o.strstart = k;
      o.lookahead = R - 1;
      B(o);
    }
    o.strstart += o.lookahead;
    o.block_start = o.strstart;
    o.insert = o.lookahead;
    o.lookahead = 0;
    o.match_length = o.prev_length = R - 1;
    o.match_available = 0;
    e.next_in = $;
    e.input = _e;
    e.avail_in = X;
    o.wrap = ie;
    return w;
  }
  Ye.deflateInit = z;
  Ye.deflateInit2 = T;
  Ye.deflateReset = Z;
  Ye.deflateResetKeep = U;
  Ye.deflateSetHeader = Q;
  Ye.deflate = r;
  Ye.deflateEnd = M;
  Ye.deflateSetDictionary = de;
  Ye.deflateInfo = "pako deflate (from Nodeca project)";
  return Ye;
}
var rt = {};
var gi;
function vn() {
  if (gi) {
    return rt;
  }
  gi = 1;
  var n = et();
  var f = true;
  var c = true;
  try {
    String.fromCharCode.apply(null, [0]);
  } catch {
    f = false;
  }
  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch {
    c = false;
  }
  var i = new n.Buf8(256);
  for (var y = 0; y < 256; y++) {
    i[y] = y >= 252 ? 6 : y >= 248 ? 5 : y >= 240 ? 4 : y >= 224 ? 3 : y >= 192 ? 2 : 1;
  }
  i[254] = i[254] = 1;
  rt.string2buf = function (a) {
    var g;
    var h;
    var E;
    var w;
    var d;
    var t = a.length;
    var l = 0;
    for (w = 0; w < t; w++) {
      h = a.charCodeAt(w);
      if ((h & 64512) === 55296 && w + 1 < t) {
        E = a.charCodeAt(w + 1);
        if ((E & 64512) === 56320) {
          h = 65536 + (h - 55296 << 10) + (E - 56320);
          w++;
        }
      }
      l += h < 128 ? 1 : h < 2048 ? 2 : h < 65536 ? 3 : 4;
    }
    g = new n.Buf8(l);
    d = 0;
    w = 0;
    for (; d < l; w++) {
      h = a.charCodeAt(w);
      if ((h & 64512) === 55296 && w + 1 < t) {
        E = a.charCodeAt(w + 1);
        if ((E & 64512) === 56320) {
          h = 65536 + (h - 55296 << 10) + (E - 56320);
          w++;
        }
      }
      if (h < 128) {
        g[d++] = h;
      } else if (h < 2048) {
        g[d++] = h >>> 6 | 192;
        g[d++] = h & 63 | 128;
      } else if (h < 65536) {
        g[d++] = h >>> 12 | 224;
        g[d++] = h >>> 6 & 63 | 128;
        g[d++] = h & 63 | 128;
      } else {
        g[d++] = h >>> 18 | 240;
        g[d++] = h >>> 12 & 63 | 128;
        g[d++] = h >>> 6 & 63 | 128;
        g[d++] = h & 63 | 128;
      }
    }
    return g;
  };
  function u(a, g) {
    if (g < 65534 && (a.subarray && c || !a.subarray && f)) {
      return String.fromCharCode.apply(null, n.shrinkBuf(a, g));
    }
    var h = "";
    for (var E = 0; E < g; E++) {
      h += String.fromCharCode(a[E]);
    }
    return h;
  }
  rt.buf2binstring = function (a) {
    return u(a, a.length);
  };
  rt.binstring2buf = function (a) {
    var g = new n.Buf8(a.length);
    for (var h = 0, E = g.length; h < E; h++) {
      g[h] = a.charCodeAt(h);
    }
    return g;
  };
  rt.buf2string = function (a, g) {
    var h;
    var E;
    var w;
    var d;
    var t = g || a.length;
    var l = new Array(t * 2);
    E = 0;
    h = 0;
    while (h < t) {
      w = a[h++];
      if (w < 128) {
        l[E++] = w;
        continue;
      }
      d = i[w];
      if (d > 4) {
        l[E++] = 65533;
        h += d - 1;
        continue;
      }
      for (w &= d === 2 ? 31 : d === 3 ? 15 : 7; d > 1 && h < t;) {
        w = w << 6 | a[h++] & 63;
        d--;
      }
      if (d > 1) {
        l[E++] = 65533;
        continue;
      }
      if (w < 65536) {
        l[E++] = w;
      } else {
        w -= 65536;
        l[E++] = w >> 10 & 1023 | 55296;
        l[E++] = w & 1023 | 56320;
      }
    }
    return u(l, E);
  };
  rt.utf8border = function (a, g) {
    var h;
    g = g || a.length;
    if (g > a.length) {
      g = a.length;
    }
    h = g - 1;
    while (h >= 0 && (a[h] & 192) === 128) {
      h--;
    }
    if (h < 0 || h === 0) {
      return g;
    } else if (h + i[a[h]] > g) {
      return h;
    } else {
      return g;
    }
  };
  return rt;
}
var er;
var mi;
function pn() {
  if (mi) {
    return er;
  }
  mi = 1;
  function n() {
    this.input = null;
    this.next_in = 0;
    this.avail_in = 0;
    this.total_in = 0;
    this.output = null;
    this.next_out = 0;
    this.avail_out = 0;
    this.total_out = 0;
    this.msg = "";
    this.state = null;
    this.data_type = 2;
    this.adler = 0;
  }
  er = n;
  return er;
}
var wi;
function qn() {
  if (wi) {
    return it;
  }
  wi = 1;
  var n = jn();
  var f = et();
  var c = vn();
  var i = Rr();
  var y = pn();
  var u = Object.prototype.toString;
  var a = 0;
  var g = 4;
  var h = 0;
  var E = 1;
  var w = 2;
  var d = -1;
  var t = 0;
  var l = 8;
  function _(p) {
    if (!(this instanceof _)) {
      return new _(p);
    }
    this.options = f.assign({
      level: d,
      method: l,
      chunkSize: 16384,
      windowBits: 15,
      memLevel: 8,
      strategy: t,
      to: ""
    }, p || {});
    var S = this.options;
    if (S.raw && S.windowBits > 0) {
      S.windowBits = -S.windowBits;
    } else if (S.gzip && S.windowBits > 0 && S.windowBits < 16) {
      S.windowBits += 16;
    }
    this.err = 0;
    this.msg = "";
    this.ended = false;
    this.chunks = [];
    this.strm = new y();
    this.strm.avail_out = 0;
    var O = n.deflateInit2(this.strm, S.level, S.method, S.windowBits, S.memLevel, S.strategy);
    if (O !== h) {
      throw new Error(i[O]);
    }
    if (S.header) {
      n.deflateSetHeader(this.strm, S.header);
    }
    if (S.dictionary) {
      var F;
      if (typeof S.dictionary == "string") {
        F = c.string2buf(S.dictionary);
      } else if (u.call(S.dictionary) === "[object ArrayBuffer]") {
        F = new Uint8Array(S.dictionary);
      } else {
        F = S.dictionary;
      }
      O = n.deflateSetDictionary(this.strm, F);
      if (O !== h) {
        throw new Error(i[O]);
      }
      this._dict_set = true;
    }
  }
  _.prototype.push = function (p, S) {
    var O = this.strm;
    var F = this.options.chunkSize;
    var H;
    var P;
    if (this.ended) {
      return false;
    }
    P = S === ~~S ? S : S === true ? g : a;
    if (typeof p == "string") {
      O.input = c.string2buf(p);
    } else if (u.call(p) === "[object ArrayBuffer]") {
      O.input = new Uint8Array(p);
    } else {
      O.input = p;
    }
    O.next_in = 0;
    O.avail_in = O.input.length;
    do {
      if (O.avail_out === 0) {
        O.output = new f.Buf8(F);
        O.next_out = 0;
        O.avail_out = F;
      }
      H = n.deflate(O, P);
      if (H !== E && H !== h) {
        this.onEnd(H);
        this.ended = true;
        return false;
      }
      if (O.avail_out === 0 || O.avail_in === 0 && (P === g || P === w)) {
        if (this.options.to === "string") {
          this.onData(c.buf2binstring(f.shrinkBuf(O.output, O.next_out)));
        } else {
          this.onData(f.shrinkBuf(O.output, O.next_out));
        }
      }
    } while ((O.avail_in > 0 || O.avail_out === 0) && H !== E);
    if (P === g) {
      H = n.deflateEnd(this.strm);
      this.onEnd(H);
      this.ended = true;
      return H === h;
    } else {
      if (P === w) {
        this.onEnd(h);
        O.avail_out = 0;
      }
      return true;
    }
  };
  _.prototype.onData = function (p) {
    this.chunks.push(p);
  };
  _.prototype.onEnd = function (p) {
    if (p === h) {
      if (this.options.to === "string") {
        this.result = this.chunks.join("");
      } else {
        this.result = f.flattenChunks(this.chunks);
      }
    }
    this.chunks = [];
    this.err = p;
    this.msg = this.strm.msg;
  };
  function x(p, S) {
    var O = new _(S);
    O.push(p, true);
    if (O.err) {
      throw O.msg || i[O.err];
    }
    return O.result;
  }
  function C(p, S) {
    S = S || {};
    S.raw = true;
    return x(p, S);
  }
  function s(p, S) {
    S = S || {};
    S.gzip = true;
    return x(p, S);
  }
  it.Deflate = _;
  it.deflate = x;
  it.deflateRaw = C;
  it.gzip = s;
  return it;
}
var nt = {};
var He = {};
var tr;
var bi;
function Un() {
  if (bi) {
    return tr;
  }
  bi = 1;
  var n = 30;
  var f = 12;
  tr = function (i, y) {
    var u;
    var a;
    var g;
    var h;
    var E;
    var w;
    var d;
    var t;
    var l;
    var _;
    var x;
    var C;
    var s;
    var p;
    var S;
    var O;
    var F;
    var H;
    var P;
    var V;
    var ue;
    var oe;
    var le;
    var he;
    var K;
    u = i.state;
    a = i.next_in;
    he = i.input;
    g = a + (i.avail_in - 5);
    h = i.next_out;
    K = i.output;
    E = h - (y - i.avail_out);
    w = h + (i.avail_out - 257);
    d = u.dmax;
    t = u.wsize;
    l = u.whave;
    _ = u.wnext;
    x = u.window;
    C = u.hold;
    s = u.bits;
    p = u.lencode;
    S = u.distcode;
    O = (1 << u.lenbits) - 1;
    F = (1 << u.distbits) - 1;
    e: do {
      if (s < 15) {
        C += he[a++] << s;
        s += 8;
        C += he[a++] << s;
        s += 8;
      }
      H = p[C & O];
      t: while (true) {
        P = H >>> 24;
        C >>>= P;
        s -= P;
        P = H >>> 16 & 255;
        if (P === 0) {
          K[h++] = H & 65535;
        } else if (P & 16) {
          V = H & 65535;
          P &= 15;
          if (P) {
            if (s < P) {
              C += he[a++] << s;
              s += 8;
            }
            V += C & (1 << P) - 1;
            C >>>= P;
            s -= P;
          }
          if (s < 15) {
            C += he[a++] << s;
            s += 8;
            C += he[a++] << s;
            s += 8;
          }
          H = S[C & F];
          r: while (true) {
            P = H >>> 24;
            C >>>= P;
            s -= P;
            P = H >>> 16 & 255;
            if (P & 16) {
              ue = H & 65535;
              P &= 15;
              if (s < P) {
                C += he[a++] << s;
                s += 8;
                if (s < P) {
                  C += he[a++] << s;
                  s += 8;
                }
              }
              ue += C & (1 << P) - 1;
              if (ue > d) {
                i.msg = "invalid distance too far back";
                u.mode = n;
                break e;
              }
              C >>>= P;
              s -= P;
              P = h - E;
              if (ue > P) {
                P = ue - P;
                if (P > l && u.sane) {
                  i.msg = "invalid distance too far back";
                  u.mode = n;
                  break e;
                }
                oe = 0;
                le = x;
                if (_ === 0) {
                  oe += t - P;
                  if (P < V) {
                    V -= P;
                    do {
                      K[h++] = x[oe++];
                    } while (--P);
                    oe = h - ue;
                    le = K;
                  }
                } else if (_ < P) {
                  oe += t + _ - P;
                  P -= _;
                  if (P < V) {
                    V -= P;
                    do {
                      K[h++] = x[oe++];
                    } while (--P);
                    oe = 0;
                    if (_ < V) {
                      P = _;
                      V -= P;
                      do {
                        K[h++] = x[oe++];
                      } while (--P);
                      oe = h - ue;
                      le = K;
                    }
                  }
                } else {
                  oe += _ - P;
                  if (P < V) {
                    V -= P;
                    do {
                      K[h++] = x[oe++];
                    } while (--P);
                    oe = h - ue;
                    le = K;
                  }
                }
                while (V > 2) {
                  K[h++] = le[oe++];
                  K[h++] = le[oe++];
                  K[h++] = le[oe++];
                  V -= 3;
                }
                if (V) {
                  K[h++] = le[oe++];
                  if (V > 1) {
                    K[h++] = le[oe++];
                  }
                }
              } else {
                oe = h - ue;
                do {
                  K[h++] = K[oe++];
                  K[h++] = K[oe++];
                  K[h++] = K[oe++];
                  V -= 3;
                } while (V > 2);
                if (V) {
                  K[h++] = K[oe++];
                  if (V > 1) {
                    K[h++] = K[oe++];
                  }
                }
              }
            } else if ((P & 64) === 0) {
              H = S[(H & 65535) + (C & (1 << P) - 1)];
              continue r;
            } else {
              i.msg = "invalid distance code";
              u.mode = n;
              break e;
            }
            break;
          }
        } else if ((P & 64) === 0) {
          H = p[(H & 65535) + (C & (1 << P) - 1)];
          continue t;
        } else if (P & 32) {
          u.mode = f;
          break e;
        } else {
          i.msg = "invalid literal/length code";
          u.mode = n;
          break e;
        }
        break;
      }
    } while (a < g && h < w);
    V = s >> 3;
    a -= V;
    s -= V << 3;
    C &= (1 << s) - 1;
    i.next_in = a;
    i.next_out = h;
    i.avail_in = a < g ? 5 + (g - a) : 5 - (a - g);
    i.avail_out = h < w ? 257 + (w - h) : 257 - (h - w);
    u.hold = C;
    u.bits = s;
  };
  return tr;
}
var rr;
var yi;
function Mn() {
  if (yi) {
    return rr;
  }
  yi = 1;
  var n = et();
  var f = 15;
  var c = 852;
  var i = 592;
  var y = 0;
  var u = 1;
  var a = 2;
  var g = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0];
  var h = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78];
  var E = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0];
  var w = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
  rr = function (t, l, _, x, C, s, p, S) {
    var O = S.bits;
    var F = 0;
    var H = 0;
    var P = 0;
    var V = 0;
    var ue = 0;
    var oe = 0;
    var le = 0;
    var he = 0;
    var K = 0;
    var ee = 0;
    var be;
    var Se;
    var R;
    var A;
    var L;
    var te = null;
    var ae = 0;
    var se;
    var ne = new n.Buf16(f + 1);
    var me = new n.Buf16(f + 1);
    var ye = null;
    var ve = 0;
    var m;
    var b;
    var q;
    for (F = 0; F <= f; F++) {
      ne[F] = 0;
    }
    for (H = 0; H < x; H++) {
      ne[l[_ + H]]++;
    }
    ue = O;
    V = f;
    for (; V >= 1 && ne[V] === 0; V--);
    if (ue > V) {
      ue = V;
    }
    if (V === 0) {
      C[s++] = 20971520;
      C[s++] = 20971520;
      S.bits = 1;
      return 0;
    }
    for (P = 1; P < V && ne[P] === 0; P++);
    if (ue < P) {
      ue = P;
    }
    he = 1;
    F = 1;
    for (; F <= f; F++) {
      he <<= 1;
      he -= ne[F];
      if (he < 0) {
        return -1;
      }
    }
    if (he > 0 && (t === y || V !== 1)) {
      return -1;
    }
    me[1] = 0;
    F = 1;
    for (; F < f; F++) {
      me[F + 1] = me[F] + ne[F];
    }
    for (H = 0; H < x; H++) {
      if (l[_ + H] !== 0) {
        p[me[l[_ + H]]++] = H;
      }
    }
    if (t === y) {
      te = ye = p;
      se = 19;
    } else if (t === u) {
      te = g;
      ae -= 257;
      ye = h;
      ve -= 257;
      se = 256;
    } else {
      te = E;
      ye = w;
      se = -1;
    }
    ee = 0;
    H = 0;
    F = P;
    L = s;
    oe = ue;
    le = 0;
    R = -1;
    K = 1 << ue;
    A = K - 1;
    if (t === u && K > c || t === a && K > i) {
      return 1;
    }
    while (true) {
      m = F - le;
      if (p[H] < se) {
        b = 0;
        q = p[H];
      } else if (p[H] > se) {
        b = ye[ve + p[H]];
        q = te[ae + p[H]];
      } else {
        b = 96;
        q = 0;
      }
      be = 1 << F - le;
      Se = 1 << oe;
      P = Se;
      do {
        Se -= be;
        C[L + (ee >> le) + Se] = m << 24 | b << 16 | q | 0;
      } while (Se !== 0);
      for (be = 1 << F - 1; ee & be;) {
        be >>= 1;
      }
      if (be !== 0) {
        ee &= be - 1;
        ee += be;
      } else {
        ee = 0;
      }
      H++;
      if (--ne[F] === 0) {
        if (F === V) {
          break;
        }
        F = l[_ + p[H]];
      }
      if (F > ue && (ee & A) !== R) {
        if (le === 0) {
          le = ue;
        }
        L += P;
        oe = F - le;
        he = 1 << oe;
        while (oe + le < V && (he -= ne[oe + le], !(he <= 0))) {
          oe++;
          he <<= 1;
        }
        K += 1 << oe;
        if (t === u && K > c || t === a && K > i) {
          return 1;
        }
        R = ee & A;
        C[R] = ue << 24 | oe << 16 | L - s | 0;
      }
    }
    if (ee !== 0) {
      C[L + ee] = F - le << 24 | 4194304 | 0;
    }
    S.bits = ue;
    return 0;
  };
  return rr;
}
var xi;
function Zn() {
  if (xi) {
    return He;
  }
  xi = 1;
  var n = et();
  var f = dn();
  var c = cn();
  var i = Un();
  var y = Mn();
  var u = 0;
  var a = 1;
  var g = 2;
  var h = 4;
  var E = 5;
  var w = 6;
  var d = 0;
  var t = 1;
  var l = 2;
  var _ = -2;
  var x = -3;
  var C = -4;
  var s = -5;
  var p = 8;
  var S = 1;
  var O = 2;
  var F = 3;
  var H = 4;
  var P = 5;
  var V = 6;
  var ue = 7;
  var oe = 8;
  var le = 9;
  var he = 10;
  var K = 11;
  var ee = 12;
  var be = 13;
  var Se = 14;
  var R = 15;
  var A = 16;
  var L = 17;
  var te = 18;
  var ae = 19;
  var se = 20;
  var ne = 21;
  var me = 22;
  var ye = 23;
  var ve = 24;
  var m = 25;
  var b = 26;
  var q = 27;
  var G = 28;
  var ce = 29;
  var Y = 30;
  var fe = 31;
  var je = 32;
  var Ie = 852;
  var Be = 592;
  var xe = 15;
  var re = xe;
  function Oe(T) {
    return (T >>> 24 & 255) + (T >>> 8 & 65280) + ((T & 65280) << 8) + ((T & 255) << 24);
  }
  function Me() {
    this.mode = 0;
    this.last = false;
    this.wrap = 0;
    this.havedict = false;
    this.flags = 0;
    this.dmax = 0;
    this.check = 0;
    this.total = 0;
    this.head = null;
    this.wbits = 0;
    this.wsize = 0;
    this.whave = 0;
    this.wnext = 0;
    this.window = null;
    this.hold = 0;
    this.bits = 0;
    this.length = 0;
    this.offset = 0;
    this.extra = 0;
    this.lencode = null;
    this.distcode = null;
    this.lenbits = 0;
    this.distbits = 0;
    this.ncode = 0;
    this.nlen = 0;
    this.ndist = 0;
    this.have = 0;
    this.next = null;
    this.lens = new n.Buf16(320);
    this.work = new n.Buf16(288);
    this.lendyn = null;
    this.distdyn = null;
    this.sane = 0;
    this.back = 0;
    this.was = 0;
  }
  function Pe(T) {
    var z;
    if (!T || !T.state) {
      return _;
    } else {
      z = T.state;
      T.total_in = T.total_out = z.total = 0;
      T.msg = "";
      if (z.wrap) {
        T.adler = z.wrap & 1;
      }
      z.mode = S;
      z.last = 0;
      z.havedict = 0;
      z.dmax = 32768;
      z.head = null;
      z.hold = 0;
      z.bits = 0;
      z.lencode = z.lendyn = new n.Buf32(Ie);
      z.distcode = z.distdyn = new n.Buf32(Be);
      z.sane = 1;
      z.back = -1;
      return d;
    }
  }
  function B(T) {
    var z;
    if (!T || !T.state) {
      return _;
    } else {
      z = T.state;
      z.wsize = 0;
      z.whave = 0;
      z.wnext = 0;
      return Pe(T);
    }
  }
  function j(T, z) {
    var r;
    var M;
    if (!T || !T.state || (M = T.state, z < 0 ? (r = 0, z = -z) : (r = (z >> 4) + 1, z < 48 && (z &= 15)), z && (z < 8 || z > 15))) {
      return _;
    } else {
      if (M.window !== null && M.wbits !== z) {
        M.window = null;
      }
      M.wrap = r;
      M.wbits = z;
      return B(T);
    }
  }
  function W(T, z) {
    var r;
    var M;
    if (T) {
      M = new Me();
      T.state = M;
      M.window = null;
      r = j(T, z);
      if (r !== d) {
        T.state = null;
      }
      return r;
    } else {
      return _;
    }
  }
  function J(T) {
    return W(T, re);
  }
  var we = true;
  var pe;
  var ke;
  function Ce(T) {
    if (we) {
      var z;
      pe = new n.Buf32(512);
      ke = new n.Buf32(32);
      z = 0;
      while (z < 144) {
        T.lens[z++] = 8;
      }
      while (z < 256) {
        T.lens[z++] = 9;
      }
      while (z < 280) {
        T.lens[z++] = 7;
      }
      while (z < 288) {
        T.lens[z++] = 8;
      }
      y(a, T.lens, 0, 288, pe, 0, T.work, {
        bits: 9
      });
      z = 0;
      while (z < 32) {
        T.lens[z++] = 5;
      }
      y(g, T.lens, 0, 32, ke, 0, T.work, {
        bits: 5
      });
      we = false;
    }
    T.lencode = pe;
    T.lenbits = 9;
    T.distcode = ke;
    T.distbits = 5;
  }
  function Je(T, z, r, M) {
    var de;
    var e = T.state;
    if (e.window === null) {
      e.wsize = 1 << e.wbits;
      e.wnext = 0;
      e.whave = 0;
      e.window = new n.Buf8(e.wsize);
    }
    if (M >= e.wsize) {
      n.arraySet(e.window, z, r - e.wsize, e.wsize, 0);
      e.wnext = 0;
      e.whave = e.wsize;
    } else {
      de = e.wsize - e.wnext;
      if (de > M) {
        de = M;
      }
      n.arraySet(e.window, z, r - M, de, e.wnext);
      M -= de;
      if (M) {
        n.arraySet(e.window, z, r - M, M, 0);
        e.wnext = M;
        e.whave = e.wsize;
      } else {
        e.wnext += de;
        if (e.wnext === e.wsize) {
          e.wnext = 0;
        }
        if (e.whave < e.wsize) {
          e.whave += de;
        }
      }
    }
    return 0;
  }
  function v(T, z) {
    var r;
    var M;
    var de;
    var e;
    var I;
    var N;
    var o;
    var k;
    var D;
    var ie;
    var X;
    var $;
    var _e;
    var Xe;
    var Re = 0;
    var ge;
    var Fe;
    var Le;
    var qe;
    var ut;
    var ht;
    var De;
    var Ze;
    var Ne = new n.Buf8(4);
    var Ve;
    var Ke;
    var Tr = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
    if (!T || !T.state || !T.output || !T.input && T.avail_in !== 0) {
      return _;
    }
    r = T.state;
    if (r.mode === ee) {
      r.mode = be;
    }
    I = T.next_out;
    de = T.output;
    o = T.avail_out;
    e = T.next_in;
    M = T.input;
    N = T.avail_in;
    k = r.hold;
    D = r.bits;
    ie = N;
    X = o;
    Ze = d;
    e: while (true) {
      switch (r.mode) {
        case S:
          if (r.wrap === 0) {
            r.mode = be;
            break;
          }
          while (D < 16) {
            if (N === 0) {
              break e;
            }
            N--;
            k += M[e++] << D;
            D += 8;
          }
          if (r.wrap & 2 && k === 35615) {
            r.check = 0;
            Ne[0] = k & 255;
            Ne[1] = k >>> 8 & 255;
            r.check = c(r.check, Ne, 2, 0);
            k = 0;
            D = 0;
            r.mode = O;
            break;
          }
          r.flags = 0;
          if (r.head) {
            r.head.done = false;
          }
          if (!(r.wrap & 1) || (((k & 255) << 8) + (k >> 8)) % 31) {
            T.msg = "incorrect header check";
            r.mode = Y;
            break;
          }
          if ((k & 15) !== p) {
            T.msg = "unknown compression method";
            r.mode = Y;
            break;
          }
          k >>>= 4;
          D -= 4;
          De = (k & 15) + 8;
          if (r.wbits === 0) {
            r.wbits = De;
          } else if (De > r.wbits) {
            T.msg = "invalid window size";
            r.mode = Y;
            break;
          }
          r.dmax = 1 << De;
          T.adler = r.check = 1;
          r.mode = k & 512 ? he : ee;
          k = 0;
          D = 0;
          break;
        case O:
          while (D < 16) {
            if (N === 0) {
              break e;
            }
            N--;
            k += M[e++] << D;
            D += 8;
          }
          r.flags = k;
          if ((r.flags & 255) !== p) {
            T.msg = "unknown compression method";
            r.mode = Y;
            break;
          }
          if (r.flags & 57344) {
            T.msg = "unknown header flags set";
            r.mode = Y;
            break;
          }
          if (r.head) {
            r.head.text = k >> 8 & 1;
          }
          if (r.flags & 512) {
            Ne[0] = k & 255;
            Ne[1] = k >>> 8 & 255;
            r.check = c(r.check, Ne, 2, 0);
          }
          k = 0;
          D = 0;
          r.mode = F;
        case F:
          while (D < 32) {
            if (N === 0) {
              break e;
            }
            N--;
            k += M[e++] << D;
            D += 8;
          }
          if (r.head) {
            r.head.time = k;
          }
          if (r.flags & 512) {
            Ne[0] = k & 255;
            Ne[1] = k >>> 8 & 255;
            Ne[2] = k >>> 16 & 255;
            Ne[3] = k >>> 24 & 255;
            r.check = c(r.check, Ne, 4, 0);
          }
          k = 0;
          D = 0;
          r.mode = H;
        case H:
          while (D < 16) {
            if (N === 0) {
              break e;
            }
            N--;
            k += M[e++] << D;
            D += 8;
          }
          if (r.head) {
            r.head.xflags = k & 255;
            r.head.os = k >> 8;
          }
          if (r.flags & 512) {
            Ne[0] = k & 255;
            Ne[1] = k >>> 8 & 255;
            r.check = c(r.check, Ne, 2, 0);
          }
          k = 0;
          D = 0;
          r.mode = P;
        case P:
          if (r.flags & 1024) {
            while (D < 16) {
              if (N === 0) {
                break e;
              }
              N--;
              k += M[e++] << D;
              D += 8;
            }
            r.length = k;
            if (r.head) {
              r.head.extra_len = k;
            }
            if (r.flags & 512) {
              Ne[0] = k & 255;
              Ne[1] = k >>> 8 & 255;
              r.check = c(r.check, Ne, 2, 0);
            }
            k = 0;
            D = 0;
          } else if (r.head) {
            r.head.extra = null;
          }
          r.mode = V;
        case V:
          if (r.flags & 1024 && ($ = r.length, $ > N && ($ = N), $ && (r.head && (De = r.head.extra_len - r.length, r.head.extra ||= new Array(r.head.extra_len), n.arraySet(r.head.extra, M, e, $, De)), r.flags & 512 && (r.check = c(r.check, M, $, e)), N -= $, e += $, r.length -= $), r.length)) {
            break e;
          }
          r.length = 0;
          r.mode = ue;
        case ue:
          if (r.flags & 2048) {
            if (N === 0) {
              break e;
            }
            $ = 0;
            do {
              De = M[e + $++];
              if (r.head && De && r.length < 65536) {
                r.head.name += String.fromCharCode(De);
              }
            } while (De && $ < N);
            if (r.flags & 512) {
              r.check = c(r.check, M, $, e);
            }
            N -= $;
            e += $;
            if (De) {
              break e;
            }
          } else if (r.head) {
            r.head.name = null;
          }
          r.length = 0;
          r.mode = oe;
        case oe:
          if (r.flags & 4096) {
            if (N === 0) {
              break e;
            }
            $ = 0;
            do {
              De = M[e + $++];
              if (r.head && De && r.length < 65536) {
                r.head.comment += String.fromCharCode(De);
              }
            } while (De && $ < N);
            if (r.flags & 512) {
              r.check = c(r.check, M, $, e);
            }
            N -= $;
            e += $;
            if (De) {
              break e;
            }
          } else if (r.head) {
            r.head.comment = null;
          }
          r.mode = le;
        case le:
          if (r.flags & 512) {
            while (D < 16) {
              if (N === 0) {
                break e;
              }
              N--;
              k += M[e++] << D;
              D += 8;
            }
            if (k !== (r.check & 65535)) {
              T.msg = "header crc mismatch";
              r.mode = Y;
              break;
            }
            k = 0;
            D = 0;
          }
          if (r.head) {
            r.head.hcrc = r.flags >> 9 & 1;
            r.head.done = true;
          }
          T.adler = r.check = 0;
          r.mode = ee;
          break;
        case he:
          while (D < 32) {
            if (N === 0) {
              break e;
            }
            N--;
            k += M[e++] << D;
            D += 8;
          }
          T.adler = r.check = Oe(k);
          k = 0;
          D = 0;
          r.mode = K;
        case K:
          if (r.havedict === 0) {
            T.next_out = I;
            T.avail_out = o;
            T.next_in = e;
            T.avail_in = N;
            r.hold = k;
            r.bits = D;
            return l;
          }
          T.adler = r.check = 1;
          r.mode = ee;
        case ee:
          if (z === E || z === w) {
            break e;
          }
        case be:
          if (r.last) {
            k >>>= D & 7;
            D -= D & 7;
            r.mode = q;
            break;
          }
          while (D < 3) {
            if (N === 0) {
              break e;
            }
            N--;
            k += M[e++] << D;
            D += 8;
          }
          r.last = k & 1;
          k >>>= 1;
          D -= 1;
          switch (k & 3) {
            case 0:
              r.mode = Se;
              break;
            case 1:
              Ce(r);
              r.mode = se;
              if (z === w) {
                k >>>= 2;
                D -= 2;
                break e;
              }
              break;
            case 2:
              r.mode = L;
              break;
            case 3:
              T.msg = "invalid block type";
              r.mode = Y;
          }
          k >>>= 2;
          D -= 2;
          break;
        case Se:
          k >>>= D & 7;
          D -= D & 7;
          while (D < 32) {
            if (N === 0) {
              break e;
            }
            N--;
            k += M[e++] << D;
            D += 8;
          }
          if ((k & 65535) !== (k >>> 16 ^ 65535)) {
            T.msg = "invalid stored block lengths";
            r.mode = Y;
            break;
          }
          r.length = k & 65535;
          k = 0;
          D = 0;
          r.mode = R;
          if (z === w) {
            break e;
          }
        case R:
          r.mode = A;
        case A:
          $ = r.length;
          if ($) {
            if ($ > N) {
              $ = N;
            }
            if ($ > o) {
              $ = o;
            }
            if ($ === 0) {
              break e;
            }
            n.arraySet(de, M, e, $, I);
            N -= $;
            e += $;
            o -= $;
            I += $;
            r.length -= $;
            break;
          }
          r.mode = ee;
          break;
        case L:
          while (D < 14) {
            if (N === 0) {
              break e;
            }
            N--;
            k += M[e++] << D;
            D += 8;
          }
          r.nlen = (k & 31) + 257;
          k >>>= 5;
          D -= 5;
          r.ndist = (k & 31) + 1;
          k >>>= 5;
          D -= 5;
          r.ncode = (k & 15) + 4;
          k >>>= 4;
          D -= 4;
          if (r.nlen > 286 || r.ndist > 30) {
            T.msg = "too many length or distance symbols";
            r.mode = Y;
            break;
          }
          r.have = 0;
          r.mode = te;
        case te:
          while (r.have < r.ncode) {
            while (D < 3) {
              if (N === 0) {
                break e;
              }
              N--;
              k += M[e++] << D;
              D += 8;
            }
            r.lens[Tr[r.have++]] = k & 7;
            k >>>= 3;
            D -= 3;
          }
          while (r.have < 19) {
            r.lens[Tr[r.have++]] = 0;
          }
          r.lencode = r.lendyn;
          r.lenbits = 7;
          Ve = {
            bits: r.lenbits
          };
          Ze = y(u, r.lens, 0, 19, r.lencode, 0, r.work, Ve);
          r.lenbits = Ve.bits;
          if (Ze) {
            T.msg = "invalid code lengths set";
            r.mode = Y;
            break;
          }
          r.have = 0;
          r.mode = ae;
        case ae:
          while (r.have < r.nlen + r.ndist) {
            while (Re = r.lencode[k & (1 << r.lenbits) - 1], ge = Re >>> 24, Fe = Re >>> 16 & 255, Le = Re & 65535, !(ge <= D)) {
              if (N === 0) {
                break e;
              }
              N--;
              k += M[e++] << D;
              D += 8;
            }
            if (Le < 16) {
              k >>>= ge;
              D -= ge;
              r.lens[r.have++] = Le;
            } else {
              if (Le === 16) {
                for (Ke = ge + 2; D < Ke;) {
                  if (N === 0) {
                    break e;
                  }
                  N--;
                  k += M[e++] << D;
                  D += 8;
                }
                k >>>= ge;
                D -= ge;
                if (r.have === 0) {
                  T.msg = "invalid bit length repeat";
                  r.mode = Y;
                  break;
                }
                De = r.lens[r.have - 1];
                $ = 3 + (k & 3);
                k >>>= 2;
                D -= 2;
              } else if (Le === 17) {
                for (Ke = ge + 3; D < Ke;) {
                  if (N === 0) {
                    break e;
                  }
                  N--;
                  k += M[e++] << D;
                  D += 8;
                }
                k >>>= ge;
                D -= ge;
                De = 0;
                $ = 3 + (k & 7);
                k >>>= 3;
                D -= 3;
              } else {
                for (Ke = ge + 7; D < Ke;) {
                  if (N === 0) {
                    break e;
                  }
                  N--;
                  k += M[e++] << D;
                  D += 8;
                }
                k >>>= ge;
                D -= ge;
                De = 0;
                $ = 11 + (k & 127);
                k >>>= 7;
                D -= 7;
              }
              if (r.have + $ > r.nlen + r.ndist) {
                T.msg = "invalid bit length repeat";
                r.mode = Y;
                break;
              }
              while ($--) {
                r.lens[r.have++] = De;
              }
            }
          }
          if (r.mode === Y) {
            break;
          }
          if (r.lens[256] === 0) {
            T.msg = "invalid code -- missing end-of-block";
            r.mode = Y;
            break;
          }
          r.lenbits = 9;
          Ve = {
            bits: r.lenbits
          };
          Ze = y(a, r.lens, 0, r.nlen, r.lencode, 0, r.work, Ve);
          r.lenbits = Ve.bits;
          if (Ze) {
            T.msg = "invalid literal/lengths set";
            r.mode = Y;
            break;
          }
          r.distbits = 6;
          r.distcode = r.distdyn;
          Ve = {
            bits: r.distbits
          };
          Ze = y(g, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, Ve);
          r.distbits = Ve.bits;
          if (Ze) {
            T.msg = "invalid distances set";
            r.mode = Y;
            break;
          }
          r.mode = se;
          if (z === w) {
            break e;
          }
        case se:
          r.mode = ne;
        case ne:
          if (N >= 6 && o >= 258) {
            T.next_out = I;
            T.avail_out = o;
            T.next_in = e;
            T.avail_in = N;
            r.hold = k;
            r.bits = D;
            i(T, X);
            I = T.next_out;
            de = T.output;
            o = T.avail_out;
            e = T.next_in;
            M = T.input;
            N = T.avail_in;
            k = r.hold;
            D = r.bits;
            if (r.mode === ee) {
              r.back = -1;
            }
            break;
          }
          for (r.back = 0; Re = r.lencode[k & (1 << r.lenbits) - 1], ge = Re >>> 24, Fe = Re >>> 16 & 255, Le = Re & 65535, !(ge <= D);) {
            if (N === 0) {
              break e;
            }
            N--;
            k += M[e++] << D;
            D += 8;
          }
          if (Fe && (Fe & 240) === 0) {
            qe = ge;
            ut = Fe;
            ht = Le;
            while (Re = r.lencode[ht + ((k & (1 << qe + ut) - 1) >> qe)], ge = Re >>> 24, Fe = Re >>> 16 & 255, Le = Re & 65535, !(qe + ge <= D)) {
              if (N === 0) {
                break e;
              }
              N--;
              k += M[e++] << D;
              D += 8;
            }
            k >>>= qe;
            D -= qe;
            r.back += qe;
          }
          k >>>= ge;
          D -= ge;
          r.back += ge;
          r.length = Le;
          if (Fe === 0) {
            r.mode = b;
            break;
          }
          if (Fe & 32) {
            r.back = -1;
            r.mode = ee;
            break;
          }
          if (Fe & 64) {
            T.msg = "invalid literal/length code";
            r.mode = Y;
            break;
          }
          r.extra = Fe & 15;
          r.mode = me;
        case me:
          if (r.extra) {
            for (Ke = r.extra; D < Ke;) {
              if (N === 0) {
                break e;
              }
              N--;
              k += M[e++] << D;
              D += 8;
            }
            r.length += k & (1 << r.extra) - 1;
            k >>>= r.extra;
            D -= r.extra;
            r.back += r.extra;
          }
          r.was = r.length;
          r.mode = ye;
        case ye:
          while (Re = r.distcode[k & (1 << r.distbits) - 1], ge = Re >>> 24, Fe = Re >>> 16 & 255, Le = Re & 65535, !(ge <= D)) {
            if (N === 0) {
              break e;
            }
            N--;
            k += M[e++] << D;
            D += 8;
          }
          if ((Fe & 240) === 0) {
            qe = ge;
            ut = Fe;
            ht = Le;
            while (Re = r.distcode[ht + ((k & (1 << qe + ut) - 1) >> qe)], ge = Re >>> 24, Fe = Re >>> 16 & 255, Le = Re & 65535, !(qe + ge <= D)) {
              if (N === 0) {
                break e;
              }
              N--;
              k += M[e++] << D;
              D += 8;
            }
            k >>>= qe;
            D -= qe;
            r.back += qe;
          }
          k >>>= ge;
          D -= ge;
          r.back += ge;
          if (Fe & 64) {
            T.msg = "invalid distance code";
            r.mode = Y;
            break;
          }
          r.offset = Le;
          r.extra = Fe & 15;
          r.mode = ve;
        case ve:
          if (r.extra) {
            for (Ke = r.extra; D < Ke;) {
              if (N === 0) {
                break e;
              }
              N--;
              k += M[e++] << D;
              D += 8;
            }
            r.offset += k & (1 << r.extra) - 1;
            k >>>= r.extra;
            D -= r.extra;
            r.back += r.extra;
          }
          if (r.offset > r.dmax) {
            T.msg = "invalid distance too far back";
            r.mode = Y;
            break;
          }
          r.mode = m;
        case m:
          if (o === 0) {
            break e;
          }
          $ = X - o;
          if (r.offset > $) {
            $ = r.offset - $;
            if ($ > r.whave && r.sane) {
              T.msg = "invalid distance too far back";
              r.mode = Y;
              break;
            }
            if ($ > r.wnext) {
              $ -= r.wnext;
              _e = r.wsize - $;
            } else {
              _e = r.wnext - $;
            }
            if ($ > r.length) {
              $ = r.length;
            }
            Xe = r.window;
          } else {
            Xe = de;
            _e = I - r.offset;
            $ = r.length;
          }
          if ($ > o) {
            $ = o;
          }
          o -= $;
          r.length -= $;
          do {
            de[I++] = Xe[_e++];
          } while (--$);
          if (r.length === 0) {
            r.mode = ne;
          }
          break;
        case b:
          if (o === 0) {
            break e;
          }
          de[I++] = r.length;
          o--;
          r.mode = ne;
          break;
        case q:
          if (r.wrap) {
            while (D < 32) {
              if (N === 0) {
                break e;
              }
              N--;
              k |= M[e++] << D;
              D += 8;
            }
            X -= o;
            T.total_out += X;
            r.total += X;
            if (X) {
              T.adler = r.check = r.flags ? c(r.check, de, X, I - X) : f(r.check, de, X, I - X);
            }
            X = o;
            if ((r.flags ? k : Oe(k)) !== r.check) {
              T.msg = "incorrect data check";
              r.mode = Y;
              break;
            }
            k = 0;
            D = 0;
          }
          r.mode = G;
        case G:
          if (r.wrap && r.flags) {
            while (D < 32) {
              if (N === 0) {
                break e;
              }
              N--;
              k += M[e++] << D;
              D += 8;
            }
            if (k !== (r.total & -1)) {
              T.msg = "incorrect length check";
              r.mode = Y;
              break;
            }
            k = 0;
            D = 0;
          }
          r.mode = ce;
        case ce:
          Ze = t;
          break e;
        case Y:
          Ze = x;
          break e;
        case fe:
          return C;
        case je:
        default:
          return _;
      }
    }
    T.next_out = I;
    T.avail_out = o;
    T.next_in = e;
    T.avail_in = N;
    r.hold = k;
    r.bits = D;
    if (r.wsize || X !== T.avail_out && r.mode < Y && (r.mode < q || z !== h)) {
      Je(T, T.output, T.next_out, X - T.avail_out);
    }
    ie -= T.avail_in;
    X -= T.avail_out;
    T.total_in += ie;
    T.total_out += X;
    r.total += X;
    if (r.wrap && X) {
      T.adler = r.check = r.flags ? c(r.check, de, X, T.next_out - X) : f(r.check, de, X, T.next_out - X);
    }
    T.data_type = r.bits + (r.last ? 64 : 0) + (r.mode === ee ? 128 : 0) + (r.mode === se || r.mode === R ? 256 : 0);
    if ((ie === 0 && X === 0 || z === h) && Ze === d) {
      Ze = s;
    }
    return Ze;
  }
  function U(T) {
    if (!T || !T.state) {
      return _;
    }
    var z = T.state;
    z.window &&= null;
    T.state = null;
    return d;
  }
  function Z(T, z) {
    var r;
    if (!T || !T.state || (r = T.state, (r.wrap & 2) === 0)) {
      return _;
    } else {
      r.head = z;
      z.done = false;
      return d;
    }
  }
  function Q(T, z) {
    var r = z.length;
    var M;
    var de;
    var e;
    if (!T || !T.state || (M = T.state, M.wrap !== 0 && M.mode !== K)) {
      return _;
    } else if (M.mode === K && (de = 1, de = f(de, z, r, 0), de !== M.check)) {
      return x;
    } else {
      e = Je(T, z, r, r);
      if (e) {
        M.mode = fe;
        return C;
      } else {
        M.havedict = 1;
        return d;
      }
    }
  }
  He.inflateReset = B;
  He.inflateReset2 = j;
  He.inflateResetKeep = Pe;
  He.inflateInit = J;
  He.inflateInit2 = W;
  He.inflate = v;
  He.inflateEnd = U;
  He.inflateGetHeader = Z;
  He.inflateSetDictionary = Q;
  He.inflateInfo = "pako inflate (from Nodeca project)";
  return He;
}
var ir;
var ki;
function _n() {
  if (!ki) {
    ki = 1;
    ir = {
      Z_NO_FLUSH: 0,
      Z_PARTIAL_FLUSH: 1,
      Z_SYNC_FLUSH: 2,
      Z_FULL_FLUSH: 3,
      Z_FINISH: 4,
      Z_BLOCK: 5,
      Z_TREES: 6,
      Z_OK: 0,
      Z_STREAM_END: 1,
      Z_NEED_DICT: 2,
      Z_ERRNO: -1,
      Z_STREAM_ERROR: -2,
      Z_DATA_ERROR: -3,
      Z_BUF_ERROR: -5,
      Z_NO_COMPRESSION: 0,
      Z_BEST_SPEED: 1,
      Z_BEST_COMPRESSION: 9,
      Z_DEFAULT_COMPRESSION: -1,
      Z_FILTERED: 1,
      Z_HUFFMAN_ONLY: 2,
      Z_RLE: 3,
      Z_FIXED: 4,
      Z_DEFAULT_STRATEGY: 0,
      Z_BINARY: 0,
      Z_TEXT: 1,
      Z_UNKNOWN: 2,
      Z_DEFLATED: 8
    };
  }
  return ir;
}
var nr;
var Si;
function Wn() {
  if (Si) {
    return nr;
  }
  Si = 1;
  function n() {
    this.text = 0;
    this.time = 0;
    this.xflags = 0;
    this.os = 0;
    this.extra = null;
    this.extra_len = 0;
    this.name = "";
    this.comment = "";
    this.hcrc = 0;
    this.done = false;
  }
  nr = n;
  return nr;
}
var Ei;
function Hn() {
  if (Ei) {
    return nt;
  }
  Ei = 1;
  var n = Zn();
  var f = et();
  var c = vn();
  var i = _n();
  var y = Rr();
  var u = pn();
  var a = Wn();
  var g = Object.prototype.toString;
  function h(d) {
    if (!(this instanceof h)) {
      return new h(d);
    }
    this.options = f.assign({
      chunkSize: 16384,
      windowBits: 0,
      to: ""
    }, d || {});
    var t = this.options;
    if (t.raw && t.windowBits >= 0 && t.windowBits < 16) {
      t.windowBits = -t.windowBits;
      if (t.windowBits === 0) {
        t.windowBits = -15;
      }
    }
    if (t.windowBits >= 0 && t.windowBits < 16 && (!d || !d.windowBits)) {
      t.windowBits += 32;
    }
    if (t.windowBits > 15 && t.windowBits < 48 && (t.windowBits & 15) === 0) {
      t.windowBits |= 15;
    }
    this.err = 0;
    this.msg = "";
    this.ended = false;
    this.chunks = [];
    this.strm = new u();
    this.strm.avail_out = 0;
    var l = n.inflateInit2(this.strm, t.windowBits);
    if (l !== i.Z_OK) {
      throw new Error(y[l]);
    }
    this.header = new a();
    n.inflateGetHeader(this.strm, this.header);
    if (t.dictionary && (typeof t.dictionary == "string" ? t.dictionary = c.string2buf(t.dictionary) : g.call(t.dictionary) === "[object ArrayBuffer]" && (t.dictionary = new Uint8Array(t.dictionary)), t.raw && (l = n.inflateSetDictionary(this.strm, t.dictionary), l !== i.Z_OK))) {
      throw new Error(y[l]);
    }
  }
  h.prototype.push = function (d, t) {
    var l = this.strm;
    var _ = this.options.chunkSize;
    var x = this.options.dictionary;
    var C;
    var s;
    var p;
    var S;
    var O;
    var F = false;
    if (this.ended) {
      return false;
    }
    s = t === ~~t ? t : t === true ? i.Z_FINISH : i.Z_NO_FLUSH;
    if (typeof d == "string") {
      l.input = c.binstring2buf(d);
    } else if (g.call(d) === "[object ArrayBuffer]") {
      l.input = new Uint8Array(d);
    } else {
      l.input = d;
    }
    l.next_in = 0;
    l.avail_in = l.input.length;
    do {
      if (l.avail_out === 0) {
        l.output = new f.Buf8(_);
        l.next_out = 0;
        l.avail_out = _;
      }
      C = n.inflate(l, i.Z_NO_FLUSH);
      if (C === i.Z_NEED_DICT && x) {
        C = n.inflateSetDictionary(this.strm, x);
      }
      if (C === i.Z_BUF_ERROR && F === true) {
        C = i.Z_OK;
        F = false;
      }
      if (C !== i.Z_STREAM_END && C !== i.Z_OK) {
        this.onEnd(C);
        this.ended = true;
        return false;
      }
      if (l.next_out && (l.avail_out === 0 || C === i.Z_STREAM_END || l.avail_in === 0 && (s === i.Z_FINISH || s === i.Z_SYNC_FLUSH))) {
        if (this.options.to === "string") {
          p = c.utf8border(l.output, l.next_out);
          S = l.next_out - p;
          O = c.buf2string(l.output, p);
          l.next_out = S;
          l.avail_out = _ - S;
          if (S) {
            f.arraySet(l.output, l.output, p, S, 0);
          }
          this.onData(O);
        } else {
          this.onData(f.shrinkBuf(l.output, l.next_out));
        }
      }
      if (l.avail_in === 0 && l.avail_out === 0) {
        F = true;
      }
    } while ((l.avail_in > 0 || l.avail_out === 0) && C !== i.Z_STREAM_END);
    if (C === i.Z_STREAM_END) {
      s = i.Z_FINISH;
    }
    if (s === i.Z_FINISH) {
      C = n.inflateEnd(this.strm);
      this.onEnd(C);
      this.ended = true;
      return C === i.Z_OK;
    } else {
      if (s === i.Z_SYNC_FLUSH) {
        this.onEnd(i.Z_OK);
        l.avail_out = 0;
      }
      return true;
    }
  };
  h.prototype.onData = function (d) {
    this.chunks.push(d);
  };
  h.prototype.onEnd = function (d) {
    if (d === i.Z_OK) {
      if (this.options.to === "string") {
        this.result = this.chunks.join("");
      } else {
        this.result = f.flattenChunks(this.chunks);
      }
    }
    this.chunks = [];
    this.err = d;
    this.msg = this.strm.msg;
  };
  function E(d, t) {
    var l = new h(t);
    l.push(d, true);
    if (l.err) {
      throw l.msg || y[l.err];
    }
    return l.result;
  }
  function w(d, t) {
    t = t || {};
    t.raw = true;
    return E(d, t);
  }
  nt.Inflate = h;
  nt.inflate = E;
  nt.inflateRaw = w;
  nt.ungzip = E;
  return nt;
}
var ar;
var Ci;
function Gn() {
  if (Ci) {
    return ar;
  }
  Ci = 1;
  var n = et().assign;
  var f = qn();
  var c = Hn();
  var i = _n();
  var y = {};
  n(y, f, c, i);
  ar = y;
  return ar;
}
var Ri;
function Yn() {
  if (Ri) {
    return ot;
  }
  Ri = 1;
  var n = typeof Uint8Array !== "undefined" && typeof Uint16Array !== "undefined" && typeof Uint32Array !== "undefined";
  var f = Gn();
  var c = Te();
  var i = Ge();
  var y = n ? "uint8array" : "array";
  ot.magic = "\b\0";
  function u(a, g) {
    i.call(this, "FlateWorker/" + a);
    this._pako = null;
    this._pakoAction = a;
    this._pakoOptions = g;
    this.meta = {};
  }
  c.inherits(u, i);
  u.prototype.processChunk = function (a) {
    this.meta = a.meta;
    if (this._pako === null) {
      this._createPako();
    }
    this._pako.push(c.transformTo(y, a.data), false);
  };
  u.prototype.flush = function () {
    i.prototype.flush.call(this);
    if (this._pako === null) {
      this._createPako();
    }
    this._pako.push([], true);
  };
  u.prototype.cleanUp = function () {
    i.prototype.cleanUp.call(this);
    this._pako = null;
  };
  u.prototype._createPako = function () {
    this._pako = new f[this._pakoAction]({
      raw: true,
      level: this._pakoOptions.level || -1
    });
    var a = this;
    this._pako.onData = function (g) {
      a.push({
        data: g,
        meta: a.meta
      });
    };
  };
  ot.compressWorker = function (a) {
    return new u("Deflate", a);
  };
  ot.uncompressWorker = function () {
    return new u("Inflate", {});
  };
  return ot;
}
var Ti;
function gn() {
  if (Ti) {
    return _t;
  }
  Ti = 1;
  var n = Ge();
  _t.STORE = {
    magic: "\0\0",
    compressWorker: function () {
      return new n("STORE compression");
    },
    uncompressWorker: function () {
      return new n("STORE decompression");
    }
  };
  _t.DEFLATE = Yn();
  return _t;
}
var $e = {};
var Ai;
function mn() {
  if (!Ai) {
    Ai = 1;
    $e.LOCAL_FILE_HEADER = "PK";
    $e.CENTRAL_FILE_HEADER = "PK";
    $e.CENTRAL_DIRECTORY_END = "PK";
    $e.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK";
    $e.ZIP64_CENTRAL_DIRECTORY_END = "PK";
    $e.DATA_DESCRIPTOR = "PK\b";
  }
  return $e;
}
var or;
var Oi;
function Kn() {
  if (Oi) {
    return or;
  }
  Oi = 1;
  var n = Te();
  var f = Ge();
  var c = lt();
  var i = Er();
  var y = mn();
  function u(t, l) {
    var _ = "";
    var x;
    for (x = 0; x < l; x++) {
      _ += String.fromCharCode(t & 255);
      t = t >>> 8;
    }
    return _;
  }
  function a(t, l) {
    var _ = t;
    if (!t) {
      _ = l ? 16893 : 33204;
    }
    return (_ & 65535) << 16;
  }
  function g(t) {
    return (t || 0) & 63;
  }
  function h(t, l, _, x, C, s) {
    var p = t.file;
    var S = t.compression;
    var O = s !== c.utf8encode;
    var F = n.transformTo("string", s(p.name));
    var H = n.transformTo("string", c.utf8encode(p.name));
    var P = p.comment;
    var V = n.transformTo("string", s(P));
    var ue = n.transformTo("string", c.utf8encode(P));
    var oe = H.length !== p.name.length;
    var le = ue.length !== P.length;
    var he;
    var K;
    var ee = "";
    var be = "";
    var Se = "";
    var R = p.dir;
    var A = p.date;
    var L = {
      crc32: 0,
      compressedSize: 0,
      uncompressedSize: 0
    };
    if (!l || _) {
      L.crc32 = t.crc32;
      L.compressedSize = t.compressedSize;
      L.uncompressedSize = t.uncompressedSize;
    }
    var te = 0;
    if (l) {
      te |= 8;
    }
    if (!O && (oe || le)) {
      te |= 2048;
    }
    var ae = 0;
    var se = 0;
    if (R) {
      ae |= 16;
    }
    if (C === "UNIX") {
      se = 798;
      ae |= a(p.unixPermissions, R);
    } else {
      se = 20;
      ae |= g(p.dosPermissions);
    }
    he = A.getUTCHours();
    he = he << 6;
    he = he | A.getUTCMinutes();
    he = he << 5;
    he = he | A.getUTCSeconds() / 2;
    K = A.getUTCFullYear() - 1980;
    K = K << 4;
    K = K | A.getUTCMonth() + 1;
    K = K << 5;
    K = K | A.getUTCDate();
    if (oe) {
      be = u(1, 1) + u(i(F), 4) + H;
      ee += "up" + u(be.length, 2) + be;
    }
    if (le) {
      Se = u(1, 1) + u(i(V), 4) + ue;
      ee += "uc" + u(Se.length, 2) + Se;
    }
    var ne = "";
    ne += `
\0`;
    ne += u(te, 2);
    ne += S.magic;
    ne += u(he, 2);
    ne += u(K, 2);
    ne += u(L.crc32, 4);
    ne += u(L.compressedSize, 4);
    ne += u(L.uncompressedSize, 4);
    ne += u(F.length, 2);
    ne += u(ee.length, 2);
    var me = y.LOCAL_FILE_HEADER + ne + F + ee;
    var ye = y.CENTRAL_FILE_HEADER + u(se, 2) + ne + u(V.length, 2) + "\0\0\0\0" + u(ae, 4) + u(x, 4) + F + ee + V;
    return {
      fileRecord: me,
      dirRecord: ye
    };
  }
  function E(t, l, _, x, C) {
    var s = "";
    var p = n.transformTo("string", C(x));
    s = y.CENTRAL_DIRECTORY_END + "\0\0\0\0" + u(t, 2) + u(t, 2) + u(l, 4) + u(_, 4) + u(p.length, 2) + p;
    return s;
  }
  function w(t) {
    var l = "";
    l = y.DATA_DESCRIPTOR + u(t.crc32, 4) + u(t.compressedSize, 4) + u(t.uncompressedSize, 4);
    return l;
  }
  function d(t, l, _, x) {
    f.call(this, "ZipFileWorker");
    this.bytesWritten = 0;
    this.zipComment = l;
    this.zipPlatform = _;
    this.encodeFileName = x;
    this.streamFiles = t;
    this.accumulate = false;
    this.contentBuffer = [];
    this.dirRecords = [];
    this.currentSourceOffset = 0;
    this.entriesCount = 0;
    this.currentFile = null;
    this._sources = [];
  }
  n.inherits(d, f);
  d.prototype.push = function (t) {
    var l = t.meta.percent || 0;
    var _ = this.entriesCount;
    var x = this._sources.length;
    if (this.accumulate) {
      this.contentBuffer.push(t);
    } else {
      this.bytesWritten += t.data.length;
      f.prototype.push.call(this, {
        data: t.data,
        meta: {
          currentFile: this.currentFile,
          percent: _ ? (l + (_ - x - 1) * 100) / _ : 100
        }
      });
    }
  };
  d.prototype.openedSource = function (t) {
    this.currentSourceOffset = this.bytesWritten;
    this.currentFile = t.file.name;
    var l = this.streamFiles && !t.file.dir;
    if (l) {
      var _ = h(t, l, false, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
      this.push({
        data: _.fileRecord,
        meta: {
          percent: 0
        }
      });
    } else {
      this.accumulate = true;
    }
  };
  d.prototype.closedSource = function (t) {
    this.accumulate = false;
    var l = this.streamFiles && !t.file.dir;
    var _ = h(t, l, true, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
    this.dirRecords.push(_.dirRecord);
    if (l) {
      this.push({
        data: w(t),
        meta: {
          percent: 100
        }
      });
    } else {
      for (this.push({
        data: _.fileRecord,
        meta: {
          percent: 0
        }
      }); this.contentBuffer.length;) {
        this.push(this.contentBuffer.shift());
      }
    }
    this.currentFile = null;
  };
  d.prototype.flush = function () {
    var t = this.bytesWritten;
    for (var l = 0; l < this.dirRecords.length; l++) {
      this.push({
        data: this.dirRecords[l],
        meta: {
          percent: 100
        }
      });
    }
    var _ = this.bytesWritten - t;
    var x = E(this.dirRecords.length, _, t, this.zipComment, this.encodeFileName);
    this.push({
      data: x,
      meta: {
        percent: 100
      }
    });
  };
  d.prototype.prepareNextSource = function () {
    this.previous = this._sources.shift();
    this.openedSource(this.previous.streamInfo);
    if (this.isPaused) {
      this.previous.pause();
    } else {
      this.previous.resume();
    }
  };
  d.prototype.registerPrevious = function (t) {
    this._sources.push(t);
    var l = this;
    t.on("data", function (_) {
      l.processChunk(_);
    });
    t.on("end", function () {
      l.closedSource(l.previous.streamInfo);
      if (l._sources.length) {
        l.prepareNextSource();
      } else {
        l.end();
      }
    });
    t.on("error", function (_) {
      l.error(_);
    });
    return this;
  };
  d.prototype.resume = function () {
    if (!f.prototype.resume.call(this)) {
      return false;
    }
    if (!this.previous && this._sources.length) {
      this.prepareNextSource();
      return true;
    }
    if (!this.previous && !this._sources.length && !this.generatedError) {
      this.end();
      return true;
    }
  };
  d.prototype.error = function (t) {
    var l = this._sources;
    if (!f.prototype.error.call(this, t)) {
      return false;
    }
    for (var _ = 0; _ < l.length; _++) {
      try {
        l[_].error(t);
      } catch {}
    }
    return true;
  };
  d.prototype.lock = function () {
    f.prototype.lock.call(this);
    for (var t = this._sources, l = 0; l < t.length; l++) {
      t[l].lock();
    }
  };
  or = d;
  return or;
}
var Di;
function Xn() {
  if (Di) {
    return Xt;
  }
  Di = 1;
  var n = gn();
  var f = Kn();
  function c(i, y) {
    var u = i || y;
    var a = n[u];
    if (!a) {
      throw new Error(u + " is not a valid compression method !");
    }
    return a;
  }
  Xt.generateWorker = function (i, y, u) {
    var a = new f(y.streamFiles, u, y.platform, y.encodeFileName);
    var g = 0;
    try {
      i.forEach(function (h, E) {
        g++;
        var w = c(E.options.compression, y.compression);
        var d = E.options.compressionOptions || y.compressionOptions || {};
        var t = E.dir;
        var l = E.date;
        E._compressWorker(w, d).withStreamInfo("file", {
          name: h,
          dir: t,
          date: l,
          comment: E.comment || "",
          unixPermissions: E.unixPermissions,
          dosPermissions: E.dosPermissions
        }).pipe(a);
      });
      a.entriesCount = g;
    } catch (h) {
      a.error(h);
    }
    return a;
  };
  return Xt;
}
var sr;
var Ii;
function Vn() {
  if (Ii) {
    return sr;
  }
  Ii = 1;
  var n = Te();
  var f = Ge();
  function c(i, y) {
    f.call(this, "Nodejs stream input adapter for " + i);
    this._upstreamEnded = false;
    this._bindStream(y);
  }
  n.inherits(c, f);
  c.prototype._bindStream = function (i) {
    var y = this;
    this._stream = i;
    i.pause();
    i.on("data", function (u) {
      y.push({
        data: u,
        meta: {
          percent: 0
        }
      });
    }).on("error", function (u) {
      if (y.isPaused) {
        this.generatedError = u;
      } else {
        y.error(u);
      }
    }).on("end", function () {
      if (y.isPaused) {
        y._upstreamEnded = true;
      } else {
        y.end();
      }
    });
  };
  c.prototype.pause = function () {
    if (f.prototype.pause.call(this)) {
      this._stream.pause();
      return true;
    } else {
      return false;
    }
  };
  c.prototype.resume = function () {
    if (f.prototype.resume.call(this)) {
      if (this._upstreamEnded) {
        this.end();
      } else {
        this._stream.resume();
      }
      return true;
    } else {
      return false;
    }
  };
  sr = c;
  return sr;
}
var fr;
var Bi;
function Jn() {
  if (Bi) {
    return fr;
  }
  Bi = 1;
  var n = lt();
  var f = Te();
  var c = Ge();
  var i = fn();
  var y = ln();
  var u = Cr();
  var a = Ln();
  var g = Xn();
  var h = wt();
  var E = Vn();
  function w(C, s, p) {
    var S = f.getTypeOf(s);
    var O;
    var F = f.extend(p || {}, y);
    F.date = F.date || new Date();
    if (F.compression !== null) {
      F.compression = F.compression.toUpperCase();
    }
    if (typeof F.unixPermissions == "string") {
      F.unixPermissions = parseInt(F.unixPermissions, 8);
    }
    if (F.unixPermissions && F.unixPermissions & 16384) {
      F.dir = true;
    }
    if (F.dosPermissions && F.dosPermissions & 16) {
      F.dir = true;
    }
    if (F.dir) {
      C = t(C);
    }
    if (F.createFolders && (O = d(C))) {
      l.call(this, O, true);
    }
    var H = S === "string" && F.binary === false && F.base64 === false;
    if (!p || typeof p.binary === "undefined") {
      F.binary = !H;
    }
    var P = s instanceof u && s.uncompressedSize === 0;
    if (P || F.dir || !s || s.length === 0) {
      F.base64 = false;
      F.binary = true;
      s = "";
      F.compression = "STORE";
      S = "string";
    }
    var V = null;
    if (s instanceof u || s instanceof c) {
      V = s;
    } else if (h.isNode && h.isStream(s)) {
      V = new E(C, s);
    } else {
      V = f.prepareContent(C, s, F.binary, F.optimizedBinaryString, F.base64);
    }
    var ue = new a(C, V, F);
    this.files[C] = ue;
  }
  function d(C) {
    if (C.slice(-1) === "/") {
      C = C.substring(0, C.length - 1);
    }
    var s = C.lastIndexOf("/");
    if (s > 0) {
      return C.substring(0, s);
    } else {
      return "";
    }
  }
  function t(C) {
    if (C.slice(-1) !== "/") {
      C += "/";
    }
    return C;
  }
  function l(C, s) {
    s = typeof s !== "undefined" ? s : y.createFolders;
    C = t(C);
    if (!this.files[C]) {
      w.call(this, C, null, {
        dir: true,
        createFolders: s
      });
    }
    return this.files[C];
  }
  function _(C) {
    return Object.prototype.toString.call(C) === "[object RegExp]";
  }
  var x = {
    load: function () {
      throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
    },
    forEach: function (C) {
      var s;
      var p;
      var S;
      for (s in this.files) {
        S = this.files[s];
        p = s.slice(this.root.length, s.length);
        if (p && s.slice(0, this.root.length) === this.root) {
          C(p, S);
        }
      }
    },
    filter: function (C) {
      var s = [];
      this.forEach(function (p, S) {
        if (C(p, S)) {
          s.push(S);
        }
      });
      return s;
    },
    file: function (C, s, p) {
      if (arguments.length === 1) {
        if (_(C)) {
          var S = C;
          return this.filter(function (F, H) {
            return !H.dir && S.test(F);
          });
        } else {
          var O = this.files[this.root + C];
          if (O && !O.dir) {
            return O;
          } else {
            return null;
          }
        }
      } else {
        C = this.root + C;
        w.call(this, C, s, p);
      }
      return this;
    },
    folder: function (C) {
      if (!C) {
        return this;
      }
      if (_(C)) {
        return this.filter(function (O, F) {
          return F.dir && C.test(O);
        });
      }
      var s = this.root + C;
      var p = l.call(this, s);
      var S = this.clone();
      S.root = p.name;
      return S;
    },
    remove: function (C) {
      C = this.root + C;
      var s = this.files[C];
      if (!s) {
        if (C.slice(-1) !== "/") {
          C += "/";
        }
        s = this.files[C];
      }
      if (s && !s.dir) {
        delete this.files[C];
      } else {
        for (var p = this.filter(function (O, F) {
            return F.name.slice(0, C.length) === C;
          }), S = 0; S < p.length; S++) {
          delete this.files[p[S].name];
        }
      }
      return this;
    },
    generate: function () {
      throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
    },
    generateInternalStream: function (C) {
      var s;
      var p = {};
      try {
        p = f.extend(C || {}, {
          streamFiles: false,
          compression: "STORE",
          compressionOptions: null,
          type: "",
          platform: "DOS",
          comment: null,
          mimeType: "application/zip",
          encodeFileName: n.utf8encode
        });
        p.type = p.type.toLowerCase();
        p.compression = p.compression.toUpperCase();
        if (p.type === "binarystring") {
          p.type = "string";
        }
        if (!p.type) {
          throw new Error("No output type specified.");
        }
        f.checkSupport(p.type);
        if (p.platform === "darwin" || p.platform === "freebsd" || p.platform === "linux" || p.platform === "sunos") {
          p.platform = "UNIX";
        }
        if (p.platform === "win32") {
          p.platform = "DOS";
        }
        var S = p.comment || this.comment || "";
        s = g.generateWorker(this, p, S);
      } catch (O) {
        s = new c("error");
        s.error(O);
      }
      return new i(s, p.type || "string", p.mimeType);
    },
    generateAsync: function (C, s) {
      return this.generateInternalStream(C).accumulate(s);
    },
    generateNodeStream: function (C, s) {
      C = C || {};
      C.type ||= "nodebuffer";
      return this.generateInternalStream(C).toNodejsStream(s);
    }
  };
  fr = x;
  return fr;
}
var lr;
var Fi;
function wn() {
  if (Fi) {
    return lr;
  }
  Fi = 1;
  var n = Te();
  function f(c) {
    this.data = c;
    this.length = c.length;
    this.index = 0;
    this.zero = 0;
  }
  f.prototype = {
    checkOffset: function (c) {
      this.checkIndex(this.index + c);
    },
    checkIndex: function (c) {
      if (this.length < this.zero + c || c < 0) {
        throw new Error("End of data reached (data length = " + this.length + ", asked index = " + c + "). Corrupted zip ?");
      }
    },
    setIndex: function (c) {
      this.checkIndex(c);
      this.index = c;
    },
    skip: function (c) {
      this.setIndex(this.index + c);
    },
    byteAt: function () {},
    readInt: function (c) {
      var i = 0;
      var y;
      this.checkOffset(c);
      y = this.index + c - 1;
      for (; y >= this.index; y--) {
        i = (i << 8) + this.byteAt(y);
      }
      this.index += c;
      return i;
    },
    readString: function (c) {
      return n.transformTo("string", this.readData(c));
    },
    readData: function () {},
    lastIndexOfSignature: function () {},
    readAndCheckSignature: function () {},
    readDate: function () {
      var c = this.readInt(4);
      return new Date(Date.UTC((c >> 25 & 127) + 1980, (c >> 21 & 15) - 1, c >> 16 & 31, c >> 11 & 31, c >> 5 & 63, (c & 31) << 1));
    }
  };
  lr = f;
  return lr;
}
var ur;
var Ni;
function bn() {
  if (Ni) {
    return ur;
  }
  Ni = 1;
  var n = wn();
  var f = Te();
  function c(i) {
    n.call(this, i);
    for (var y = 0; y < this.data.length; y++) {
      i[y] = i[y] & 255;
    }
  }
  f.inherits(c, n);
  c.prototype.byteAt = function (i) {
    return this.data[this.zero + i];
  };
  c.prototype.lastIndexOfSignature = function (i) {
    var y = i.charCodeAt(0);
    var u = i.charCodeAt(1);
    var a = i.charCodeAt(2);
    var g = i.charCodeAt(3);
    for (var h = this.length - 4; h >= 0; --h) {
      if (this.data[h] === y && this.data[h + 1] === u && this.data[h + 2] === a && this.data[h + 3] === g) {
        return h - this.zero;
      }
    }
    return -1;
  };
  c.prototype.readAndCheckSignature = function (i) {
    var y = i.charCodeAt(0);
    var u = i.charCodeAt(1);
    var a = i.charCodeAt(2);
    var g = i.charCodeAt(3);
    var h = this.readData(4);
    return y === h[0] && u === h[1] && a === h[2] && g === h[3];
  };
  c.prototype.readData = function (i) {
    this.checkOffset(i);
    if (i === 0) {
      return [];
    }
    var y = this.data.slice(this.zero + this.index, this.zero + this.index + i);
    this.index += i;
    return y;
  };
  ur = c;
  return ur;
}
var hr;
var zi;
function $n() {
  if (zi) {
    return hr;
  }
  zi = 1;
  var n = wn();
  var f = Te();
  function c(i) {
    n.call(this, i);
  }
  f.inherits(c, n);
  c.prototype.byteAt = function (i) {
    return this.data.charCodeAt(this.zero + i);
  };
  c.prototype.lastIndexOfSignature = function (i) {
    return this.data.lastIndexOf(i) - this.zero;
  };
  c.prototype.readAndCheckSignature = function (i) {
    var y = this.readData(4);
    return i === y;
  };
  c.prototype.readData = function (i) {
    this.checkOffset(i);
    var y = this.data.slice(this.zero + this.index, this.zero + this.index + i);
    this.index += i;
    return y;
  };
  hr = c;
  return hr;
}
var dr;
var Li;
function yn() {
  if (Li) {
    return dr;
  }
  Li = 1;
  var n = bn();
  var f = Te();
  function c(i) {
    n.call(this, i);
  }
  f.inherits(c, n);
  c.prototype.readData = function (i) {
    this.checkOffset(i);
    if (i === 0) {
      return new Uint8Array(0);
    }
    var y = this.data.subarray(this.zero + this.index, this.zero + this.index + i);
    this.index += i;
    return y;
  };
  dr = c;
  return dr;
}
var cr;
var Pi;
function Qn() {
  if (Pi) {
    return cr;
  }
  Pi = 1;
  var n = yn();
  var f = Te();
  function c(i) {
    n.call(this, i);
  }
  f.inherits(c, n);
  c.prototype.readData = function (i) {
    this.checkOffset(i);
    var y = this.data.slice(this.zero + this.index, this.zero + this.index + i);
    this.index += i;
    return y;
  };
  cr = c;
  return cr;
}
var vr;
var ji;
function xn() {
  if (ji) {
    return vr;
  }
  ji = 1;
  var n = Te();
  var f = Qe();
  var c = bn();
  var i = $n();
  var y = Qn();
  var u = yn();
  vr = function (a) {
    var g = n.getTypeOf(a);
    n.checkSupport(g);
    if (g === "string" && !f.uint8array) {
      return new i(a);
    } else if (g === "nodebuffer") {
      return new y(a);
    } else if (f.uint8array) {
      return new u(n.transformTo("uint8array", a));
    } else {
      return new c(n.transformTo("array", a));
    }
  };
  return vr;
}
var pr;
var qi;
function ea() {
  if (qi) {
    return pr;
  }
  qi = 1;
  var n = xn();
  var f = Te();
  var c = Cr();
  var i = Er();
  var y = lt();
  var u = gn();
  var a = Qe();
  var g = 0;
  var h = 3;
  function E(d) {
    for (var t in u) {
      if (Object.prototype.hasOwnProperty.call(u, t) && u[t].magic === d) {
        return u[t];
      }
    }
    return null;
  }
  function w(d, t) {
    this.options = d;
    this.loadOptions = t;
  }
  w.prototype = {
    isEncrypted: function () {
      return (this.bitFlag & 1) === 1;
    },
    useUTF8: function () {
      return (this.bitFlag & 2048) === 2048;
    },
    readLocalPart: function (d) {
      var t;
      var l;
      d.skip(22);
      this.fileNameLength = d.readInt(2);
      l = d.readInt(2);
      this.fileName = d.readData(this.fileNameLength);
      d.skip(l);
      if (this.compressedSize === -1 || this.uncompressedSize === -1) {
        throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
      }
      t = E(this.compressionMethod);
      if (t === null) {
        throw new Error("Corrupted zip : compression " + f.pretty(this.compressionMethod) + " unknown (inner file : " + f.transformTo("string", this.fileName) + ")");
      }
      this.decompressed = new c(this.compressedSize, this.uncompressedSize, this.crc32, t, d.readData(this.compressedSize));
    },
    readCentralPart: function (d) {
      this.versionMadeBy = d.readInt(2);
      d.skip(2);
      this.bitFlag = d.readInt(2);
      this.compressionMethod = d.readString(2);
      this.date = d.readDate();
      this.crc32 = d.readInt(4);
      this.compressedSize = d.readInt(4);
      this.uncompressedSize = d.readInt(4);
      var t = d.readInt(2);
      this.extraFieldsLength = d.readInt(2);
      this.fileCommentLength = d.readInt(2);
      this.diskNumberStart = d.readInt(2);
      this.internalFileAttributes = d.readInt(2);
      this.externalFileAttributes = d.readInt(4);
      this.localHeaderOffset = d.readInt(4);
      if (this.isEncrypted()) {
        throw new Error("Encrypted zip are not supported");
      }
      d.skip(t);
      this.readExtraFields(d);
      this.parseZIP64ExtraField(d);
      this.fileComment = d.readData(this.fileCommentLength);
    },
    processAttributes: function () {
      this.unixPermissions = null;
      this.dosPermissions = null;
      var d = this.versionMadeBy >> 8;
      this.dir = !!(this.externalFileAttributes & 16);
      if (d === g) {
        this.dosPermissions = this.externalFileAttributes & 63;
      }
      if (d === h) {
        this.unixPermissions = this.externalFileAttributes >> 16 & 65535;
      }
      if (!this.dir && this.fileNameStr.slice(-1) === "/") {
        this.dir = true;
      }
    },
    parseZIP64ExtraField: function () {
      if (this.extraFields[1]) {
        var d = n(this.extraFields[1].value);
        if (this.uncompressedSize === f.MAX_VALUE_32BITS) {
          this.uncompressedSize = d.readInt(8);
        }
        if (this.compressedSize === f.MAX_VALUE_32BITS) {
          this.compressedSize = d.readInt(8);
        }
        if (this.localHeaderOffset === f.MAX_VALUE_32BITS) {
          this.localHeaderOffset = d.readInt(8);
        }
        if (this.diskNumberStart === f.MAX_VALUE_32BITS) {
          this.diskNumberStart = d.readInt(4);
        }
      }
    },
    readExtraFields: function (d) {
      var t = d.index + this.extraFieldsLength;
      var l;
      var _;
      var x;
      for (this.extraFields ||= {}; d.index + 4 < t;) {
        l = d.readInt(2);
        _ = d.readInt(2);
        x = d.readData(_);
        this.extraFields[l] = {
          id: l,
          length: _,
          value: x
        };
      }
      d.setIndex(t);
    },
    handleUTF8: function () {
      var d = a.uint8array ? "uint8array" : "array";
      if (this.useUTF8()) {
        this.fileNameStr = y.utf8decode(this.fileName);
        this.fileCommentStr = y.utf8decode(this.fileComment);
      } else {
        var t = this.findExtraFieldUnicodePath();
        if (t !== null) {
          this.fileNameStr = t;
        } else {
          var l = f.transformTo(d, this.fileName);
          this.fileNameStr = this.loadOptions.decodeFileName(l);
        }
        var _ = this.findExtraFieldUnicodeComment();
        if (_ !== null) {
          this.fileCommentStr = _;
        } else {
          var x = f.transformTo(d, this.fileComment);
          this.fileCommentStr = this.loadOptions.decodeFileName(x);
        }
      }
    },
    findExtraFieldUnicodePath: function () {
      var d = this.extraFields[28789];
      if (d) {
        var t = n(d.value);
        if (t.readInt(1) !== 1 || i(this.fileName) !== t.readInt(4)) {
          return null;
        } else {
          return y.utf8decode(t.readData(d.length - 5));
        }
      }
      return null;
    },
    findExtraFieldUnicodeComment: function () {
      var d = this.extraFields[25461];
      if (d) {
        var t = n(d.value);
        if (t.readInt(1) !== 1 || i(this.fileComment) !== t.readInt(4)) {
          return null;
        } else {
          return y.utf8decode(t.readData(d.length - 5));
        }
      }
      return null;
    }
  };
  pr = w;
  return pr;
}
var _r;
var Ui;
function ta() {
  if (Ui) {
    return _r;
  }
  Ui = 1;
  var n = xn();
  var f = Te();
  var c = mn();
  var i = ea();
  var y = Qe();
  function u(a) {
    this.files = [];
    this.loadOptions = a;
  }
  u.prototype = {
    checkSignature: function (a) {
      if (!this.reader.readAndCheckSignature(a)) {
        this.reader.index -= 4;
        var g = this.reader.readString(4);
        throw new Error("Corrupted zip or bug: unexpected signature (" + f.pretty(g) + ", expected " + f.pretty(a) + ")");
      }
    },
    isSignature: function (a, g) {
      var h = this.reader.index;
      this.reader.setIndex(a);
      var E = this.reader.readString(4);
      var w = E === g;
      this.reader.setIndex(h);
      return w;
    },
    readBlockEndOfCentral: function () {
      this.diskNumber = this.reader.readInt(2);
      this.diskWithCentralDirStart = this.reader.readInt(2);
      this.centralDirRecordsOnThisDisk = this.reader.readInt(2);
      this.centralDirRecords = this.reader.readInt(2);
      this.centralDirSize = this.reader.readInt(4);
      this.centralDirOffset = this.reader.readInt(4);
      this.zipCommentLength = this.reader.readInt(2);
      var a = this.reader.readData(this.zipCommentLength);
      var g = y.uint8array ? "uint8array" : "array";
      var h = f.transformTo(g, a);
      this.zipComment = this.loadOptions.decodeFileName(h);
    },
    readBlockZip64EndOfCentral: function () {
      this.zip64EndOfCentralSize = this.reader.readInt(8);
      this.reader.skip(4);
      this.diskNumber = this.reader.readInt(4);
      this.diskWithCentralDirStart = this.reader.readInt(4);
      this.centralDirRecordsOnThisDisk = this.reader.readInt(8);
      this.centralDirRecords = this.reader.readInt(8);
      this.centralDirSize = this.reader.readInt(8);
      this.centralDirOffset = this.reader.readInt(8);
      this.zip64ExtensibleData = {};
      for (var a = this.zip64EndOfCentralSize - 44, g = 0, h, E, w; g < a;) {
        h = this.reader.readInt(2);
        E = this.reader.readInt(4);
        w = this.reader.readData(E);
        this.zip64ExtensibleData[h] = {
          id: h,
          length: E,
          value: w
        };
      }
    },
    readBlockZip64EndOfCentralLocator: function () {
      this.diskWithZip64CentralDirStart = this.reader.readInt(4);
      this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8);
      this.disksCount = this.reader.readInt(4);
      if (this.disksCount > 1) {
        throw new Error("Multi-volumes zip are not supported");
      }
    },
    readLocalFiles: function () {
      var a;
      var g;
      for (a = 0; a < this.files.length; a++) {
        g = this.files[a];
        this.reader.setIndex(g.localHeaderOffset);
        this.checkSignature(c.LOCAL_FILE_HEADER);
        g.readLocalPart(this.reader);
        g.handleUTF8();
        g.processAttributes();
      }
    },
    readCentralDir: function () {
      var a;
      for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(c.CENTRAL_FILE_HEADER);) {
        a = new i({
          zip64: this.zip64
        }, this.loadOptions);
        a.readCentralPart(this.reader);
        this.files.push(a);
      }
      if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0) {
        throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
      }
    },
    readEndOfCentral: function () {
      var a = this.reader.lastIndexOfSignature(c.CENTRAL_DIRECTORY_END);
      if (a < 0) {
        var g = !this.isSignature(0, c.LOCAL_FILE_HEADER);
        throw g ? new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html") : new Error("Corrupted zip: can't find end of central directory");
      }
      this.reader.setIndex(a);
      var h = a;
      this.checkSignature(c.CENTRAL_DIRECTORY_END);
      this.readBlockEndOfCentral();
      if (this.diskNumber === f.MAX_VALUE_16BITS || this.diskWithCentralDirStart === f.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === f.MAX_VALUE_16BITS || this.centralDirRecords === f.MAX_VALUE_16BITS || this.centralDirSize === f.MAX_VALUE_32BITS || this.centralDirOffset === f.MAX_VALUE_32BITS) {
        this.zip64 = true;
        a = this.reader.lastIndexOfSignature(c.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
        if (a < 0) {
          throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
        }
        this.reader.setIndex(a);
        this.checkSignature(c.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
        this.readBlockZip64EndOfCentralLocator();
        if (!this.isSignature(this.relativeOffsetEndOfZip64CentralDir, c.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(c.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) {
          throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
        }
        this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir);
        this.checkSignature(c.ZIP64_CENTRAL_DIRECTORY_END);
        this.readBlockZip64EndOfCentral();
      }
      var E = this.centralDirOffset + this.centralDirSize;
      if (this.zip64) {
        E += 20;
        E += 12 + this.zip64EndOfCentralSize;
      }
      var w = h - E;
      if (w > 0) {
        if (!this.isSignature(h, c.CENTRAL_FILE_HEADER)) {
          this.reader.zero = w;
        }
      } else if (w < 0) {
        throw new Error("Corrupted zip: missing " + Math.abs(w) + " bytes.");
      }
    },
    prepareReader: function (a) {
      this.reader = n(a);
    },
    load: function (a) {
      this.prepareReader(a);
      this.readEndOfCentral();
      this.readCentralDir();
      this.readLocalFiles();
    }
  };
  _r = u;
  return _r;
}
var gr;
var Mi;
function ra() {
  if (Mi) {
    return gr;
  }
  Mi = 1;
  var n = Te();
  var f = ft();
  var c = lt();
  var i = ta();
  var y = hn();
  var u = wt();
  function a(g) {
    return new f.Promise(function (h, E) {
      var w = g.decompressed.getContentWorker().pipe(new y());
      w.on("error", function (d) {
        E(d);
      }).on("end", function () {
        if (w.streamInfo.crc32 !== g.decompressed.crc32) {
          E(new Error("Corrupted zip : CRC32 mismatch"));
        } else {
          h();
        }
      }).resume();
    });
  }
  gr = function (g, h) {
    var E = this;
    h = n.extend(h || {}, {
      base64: false,
      checkCRC32: false,
      optimizedBinaryString: false,
      createFolders: false,
      decodeFileName: c.utf8decode
    });
    if (u.isNode && u.isStream(g)) {
      return f.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file."));
    } else {
      return n.prepareContent("the loaded zip file", g, true, h.optimizedBinaryString, h.base64).then(function (w) {
        var d = new i(h);
        d.load(w);
        return d;
      }).then(function (d) {
        var t = [f.Promise.resolve(d)];
        var l = d.files;
        if (h.checkCRC32) {
          for (var _ = 0; _ < l.length; _++) {
            t.push(a(l[_]));
          }
        }
        return f.Promise.all(t);
      }).then(function (d) {
        var t = d.shift();
        for (var l = t.files, _ = 0; _ < l.length; _++) {
          var x = l[_];
          var C = x.fileNameStr;
          var s = n.resolve(x.fileNameStr);
          E.file(s, x.decompressed, {
            binary: true,
            optimizedBinaryString: true,
            date: x.date,
            dir: x.dir,
            comment: x.fileCommentStr.length ? x.fileCommentStr : null,
            unixPermissions: x.unixPermissions,
            dosPermissions: x.dosPermissions,
            createFolders: h.createFolders
          });
          if (!x.dir) {
            E.file(s).unsafeOriginalName = C;
          }
        }
        if (t.zipComment.length) {
          E.comment = t.zipComment;
        }
        return E;
      });
    }
  };
  return gr;
}
var mr;
var Zi;
function ia() {
  if (Zi) {
    return mr;
  }
  Zi = 1;
  function n() {
    if (!(this instanceof n)) {
      return new n();
    }
    if (arguments.length) {
      throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
    }
    this.files = Object.create(null);
    this.comment = null;
    this.root = "";
    this.clone = function () {
      var f = new n();
      for (var c in this) {
        if (typeof this[c] != "function") {
          f[c] = this[c];
        }
      }
      return f;
    };
  }
  n.prototype = Jn();
  n.prototype.loadAsync = ra();
  n.support = Qe();
  n.defaults = ln();
  n.version = "3.10.1";
  n.loadAsync = function (f, c) {
    return new n().loadAsync(f, c);
  };
  n.external = ft();
  mr = n;
  return mr;
}
var wr = {
  exports: {}
};
var Wi;
function na() {
  if (!Wi) {
    Wi = 1;
    (function () {
      var n;
      var f = null;
      var c = typeof window == "object" ? window : Ee.commonjsGlobal;
      var i = false;
      var y = c.process;
      var u = Array;
      var a = Error;
      var g = 0;
      var h = 1;
      var E = 2;
      var w = "Symbol";
      var d = "iterator";
      var t = "species";
      var l = w + "(" + t + ")";
      var _ = "return";
      var x = "_uh";
      var C = "_pt";
      var s = "_st";
      var p = "Invalid this";
      var S = "Invalid argument";
      var O = `
From previous `;
      var F = "Chaining cycle detected for promise";
      var H = "Uncaught (in promise)";
      var P = "rejectionHandled";
      var V = "unhandledRejection";
      var ue;
      var oe;
      var le = {
        e: f
      };
      function he() {}
      var K = /^.+\/node_modules\/yaku\/.+\n?/mg;
      var ee = wr.exports = function (j) {
        var W = this;
        var J;
        if (!R(W) || W._s !== n) {
          throw ve(p);
        }
        W._s = E;
        if (i) {
          W[C] = m();
        }
        if (j !== he) {
          if (!A(j)) {
            throw ve(S);
          }
          J = ne(j)(fe(W, h), fe(W, g));
          if (J === le) {
            re(W, g, J.e);
          }
        }
      };
      ee.default = ee;
      Se(ee, {
        then: function (j, W) {
          if (this._s === undefined) {
            throw ve();
          }
          return je(this, Y(ee.speciesConstructor(this, ee)), j, W);
        },
        catch: function (B) {
          return this.then(n, B);
        },
        _pCount: 0,
        _pre: f,
        _Yaku: 1
      });
      ee.resolve = function (j) {
        if (ce(j)) {
          return j;
        } else {
          return Oe(Y(this), j);
        }
      };
      ee.reject = function (j) {
        return re(Y(this), g, j);
      };
      ee.race = function (j) {
        var W = this;
        var J = Y(W);
        function we(Ce) {
          re(J, h, Ce);
        }
        function pe(Ce) {
          re(J, g, Ce);
        }
        var ke = ne(ye)(j, function (Ce) {
          W.resolve(Ce).then(we, pe);
        });
        if (ke === le) {
          return W.reject(ke.e);
        } else {
          return J;
        }
      };
      ee.all = function (j) {
        var W = this;
        var J = Y(W);
        var we = [];
        var pe;
        function ke(Ce) {
          re(J, g, Ce);
        }
        pe = ne(ye)(j, function (Ce, Je) {
          W.resolve(Ce).then(function (v) {
            we[Je] = v;
            if (! --pe) {
              re(J, h, we);
            }
          }, ke);
        });
        if (pe === le) {
          return W.reject(pe.e);
        } else {
          if (!pe) {
            re(J, h, []);
          }
          return J;
        }
      };
      ee.Symbol = c[w] || {};
      ne(function () {
        Object.defineProperty(ee, be(), {
          get: function () {
            return this;
          }
        });
      })();
      ee.speciesConstructor = function (B, j) {
        var W = B.constructor;
        return W && W[be()] || j;
      };
      ee.unhandledRejection = function (B, j) {
        try {
          c.console.error(H, i ? j.longStack : Be(B, j));
        } catch {}
      };
      ee.rejectionHandled = he;
      ee.enableLongStackTrace = function () {
        i = true;
      };
      ee.nextTick = y ? y.nextTick : function (B) {
        setTimeout(B);
      };
      ee._Yaku = 1;
      function be() {
        return ee[w][t] || l;
      }
      function Se(B, j) {
        for (var W in j) {
          B.prototype[W] = j[W];
        }
        return B;
      }
      function R(B) {
        return B && typeof B == "object";
      }
      function A(B) {
        return typeof B == "function";
      }
      function L(B, j) {
        return B instanceof j;
      }
      function te(B) {
        return L(B, a);
      }
      function ae(B, j, W) {
        if (!j(B)) {
          throw ve(W);
        }
      }
      function se() {
        try {
          return ue.apply(oe, arguments);
        } catch (B) {
          le.e = B;
          return le;
        }
      }
      function ne(B, j) {
        ue = B;
        oe = j;
        return se;
      }
      function me(B, j) {
        var W = u(B);
        var J = 0;
        function we() {
          for (var pe = 0; pe < J;) {
            j(W[pe], W[pe + 1]);
            W[pe++] = n;
            W[pe++] = n;
          }
          J = 0;
          if (W.length > B) {
            W.length = B;
          }
        }
        return function (pe, ke) {
          W[J++] = pe;
          W[J++] = ke;
          if (J === 2) {
            ee.nextTick(we);
          }
        };
      }
      function ye(B, j) {
        var W;
        var J = 0;
        var we;
        var pe;
        var ke;
        if (!B) {
          throw ve(S);
        }
        var Ce = B[ee[w][d]];
        if (A(Ce)) {
          we = Ce.call(B);
        } else if (A(B.next)) {
          we = B;
        } else if (L(B, u)) {
          for (W = B.length; J < W;) {
            j(B[J], J++);
          }
          return J;
        } else {
          throw ve(S);
        }
        while (!(pe = we.next()).done) {
          ke = ne(j)(pe.value, J++);
          if (ke === le) {
            if (A(we[_])) {
              we[_]();
            }
            throw ke.e;
          }
        }
        return J;
      }
      function ve(B) {
        return new TypeError(B);
      }
      function m(B) {
        return (B ? "" : O) + new a().stack;
      }
      var b = me(999, function (B, j) {
        var W;
        var J;
        J = B._s ? j._onFulfilled : j._onRejected;
        if (J === n) {
          re(j, B._s, B._v);
          return;
        }
        W = ne(xe)(J, B._v);
        if (W === le) {
          re(j, g, W.e);
          return;
        }
        Oe(j, W);
      });
      var q = me(9, function (B) {
        if (!Ie(B)) {
          B[x] = 1;
          G(V, B);
        }
      });
      function G(B, j) {
        var W = "on" + B.toLowerCase();
        var J = c[W];
        if (y && y.listeners(B).length) {
          if (B === V) {
            y.emit(B, j._v, j);
          } else {
            y.emit(B, j);
          }
        } else if (J) {
          J({
            reason: j._v,
            promise: j
          });
        } else {
          ee[B](j._v, j);
        }
      }
      function ce(B) {
        return B && B._Yaku;
      }
      function Y(B) {
        if (ce(B)) {
          return new B(he);
        }
        var j;
        var W;
        var J;
        j = new B(function (we, pe) {
          if (j) {
            throw ve();
          }
          W = we;
          J = pe;
        });
        ae(W, A);
        ae(J, A);
        return j;
      }
      function fe(B, j) {
        return function (W) {
          if (i) {
            B[s] = m(true);
          }
          if (j === h) {
            Oe(B, W);
          } else {
            re(B, j, W);
          }
        };
      }
      function je(B, j, W, J) {
        if (A(W)) {
          j._onFulfilled = W;
        }
        if (A(J)) {
          if (B[x]) {
            G(P, B);
          }
          j._onRejected = J;
        }
        if (i) {
          j._pre = B;
        }
        B[B._pCount++] = j;
        if (B._s !== E) {
          b(B, j);
        }
        return j;
      }
      function Ie(B) {
        if (B._umark) {
          return true;
        }
        B._umark = true;
        for (var j = 0, W = B._pCount, J; j < W;) {
          J = B[j++];
          if (J._onRejected || Ie(J)) {
            return true;
          }
        }
      }
      function Be(B, j) {
        var W = [];
        function J(we) {
          return W.push(we.replace(/^\s+|\s+$/g, ""));
        }
        if (i) {
          if (j[s]) {
            J(j[s]);
          }
          (function we(pe) {
            if (pe && C in pe) {
              we(pe._next);
              J(pe[C] + "");
              we(pe._pre);
            }
          })(j);
        }
        return (B && B.stack ? B.stack : B) + `
${W.join(`
`)}`.replace(K, "");
      }
      function xe(B, j) {
        return B(j);
      }
      function re(B, j, W) {
        var J = 0;
        var we = B._pCount;
        if (B._s === E) {
          B._s = j;
          B._v = W;
          if (j === g) {
            if (i && te(W)) {
              W.longStack = Be(W, B);
            }
            q(B);
          }
          while (J < we) {
            b(B, B[J++]);
          }
        }
        return B;
      }
      function Oe(B, j) {
        if (j === B && j) {
          re(B, g, ve(F));
          return B;
        }
        if (j !== f && (A(j) || R(j))) {
          var W = ne(Me)(j);
          if (W === le) {
            re(B, g, W.e);
            return B;
          }
          if (A(W)) {
            if (i && ce(j)) {
              B._next = j;
            }
            if (ce(j)) {
              Pe(B, j, W);
            } else {
              ee.nextTick(function () {
                Pe(B, j, W);
              });
            }
          } else {
            re(B, h, j);
          }
        } else {
          re(B, h, j);
        }
        return B;
      }
      function Me(B) {
        return B.then;
      }
      function Pe(B, j, W) {
        var J = ne(W, j)(function (we) {
          if (j) {
            j = f;
            Oe(B, we);
          }
        }, function (we) {
          if (j) {
            j = f;
            re(B, g, we);
          }
        });
        if (J === le && j) {
          re(B, g, J.e);
          j = f;
        }
      }
    })();
  }
  return wr.exports;
}
var br;
var Hi;
function aa() {
  if (Hi) {
    return br;
  }
  Hi = 1;
  var n = na();
  br = {
    extendPrototype: function (f, c) {
      for (var i in c) {
        f.prototype[i] = c[i];
      }
      return f;
    },
    isFunction: function (f) {
      return typeof f == "function";
    },
    isNumber: function (f) {
      return typeof f == "number";
    },
    Promise: n,
    slice: [].slice
  };
  return br;
}
var yr;
var Gi;
function oa() {
  if (Gi) {
    return yr;
  }
  Gi = 1;
  var n = aa();
  var f = n.isFunction;
  yr = function (c, i) {
    return function (y, u, a, g, h) {
      var E = arguments.length;
      var w;
      var d;
      var t;
      var l;
      d = new n.Promise(function (C, s) {
        t = C;
        l = s;
      });
      function _(C, s) {
        if (C == null) {
          t(s);
        } else {
          l(C);
        }
      }
      switch (E) {
        case 0:
          c.call(i, _);
          break;
        case 1:
          if (f(y)) {
            c.call(i, y);
          } else {
            c.call(i, y, _);
          }
          break;
        case 2:
          if (f(u)) {
            c.call(i, y, u);
          } else {
            c.call(i, y, u, _);
          }
          break;
        case 3:
          if (f(a)) {
            c.call(i, y, u, a);
          } else {
            c.call(i, y, u, a, _);
          }
          break;
        case 4:
          if (f(g)) {
            c.call(i, y, u, a, g);
          } else {
            c.call(i, y, u, a, g, _);
          }
          break;
        case 5:
          if (f(h)) {
            c.call(i, y, u, a, g, h);
          } else {
            c.call(i, y, u, a, g, h, _);
          }
          break;
        default:
          w = new Array(E);
          for (var x = 0; x < E; x++) {
            w[x] = arguments[x];
          }
          if (f(w[E - 1])) {
            return c.apply(i, w);
          }
          w[x] = _;
          c.apply(i, w);
      }
      return d;
    };
  };
  return yr;
}
var xr;
var Yi;
function sa() {
  if (Yi) {
    return xr;
  }
  Yi = 1;
  var n = kr;
  var f = Sr;
  var c = ia();
  var i = Ee.requireMkdirp();
  var y = oa();
  var u = y(n.writeFile);
  var a = y(n.readFile);
  var g = y(i);
  function h(w) {
    function d(S, O, F, H) {
      var P = 0;
      P += S;
      P += O << 8;
      P += F << 16;
      P += H << 24;
      return P;
    }
    if (w[0] === 80 && w[1] === 75 && w[2] === 3 && w[3] === 4) {
      return w;
    }
    if (w[0] !== 67 || w[1] !== 114 || w[2] !== 50 || w[3] !== 52) {
      throw new Error("Invalid header: Does not start with Cr24");
    }
    var t = w[4] === 3;
    var l = w[4] === 2;
    if (!l && !t || w[5] || w[6] || w[7]) {
      throw new Error("Unexpected crx format version number.");
    }
    if (l) {
      var _ = d(w[8], w[9], w[10], w[11]);
      var x = d(w[12], w[13], w[14], w[15]);
      var C = 16 + _ + x;
      return w.slice(C, w.length);
    }
    var s = d(w[8], w[9], w[10], w[11]);
    var p = 12 + s;
    return w.slice(p, w.length);
  }
  function E(w, d) {
    var t = f.resolve(w);
    var l = f.extname(w);
    var _ = f.basename(w, l);
    var x = f.dirname(w);
    d = d || f.resolve(x, _);
    return a(t).then(function (C) {
      return c.loadAsync(h(C));
    }).then(function (C) {
      var s = Object.keys(C.files);
      return Promise.all(s.map(function (p) {
        var S = !C.files[p].dir;
        var O = f.join(d, p);
        var F = S && f.dirname(O) || O;
        var H = C.files[p].async("nodebuffer");
        return g(F).then(function () {
          if (S) {
            return H;
          } else {
            return false;
          }
        }).then(function (P) {
          if (P) {
            return u(O, P);
          } else {
            return true;
          }
        });
      }));
    });
  }
  xr = E;
  return xr;
}
var Ki;
function fa() {
  if (!Ki) {
    Ki = 1;
    (function (n) {
      Object.defineProperty(n, "__esModule", {
        value: true
      });
      n.downloadChromeExtension = undefined;
      const f = kr;
      const c = Sr;
      const i = Rn();
      const y = sa();
      const u = async (a, {
        forceDownload: g = false,
        attempts: h = 5
      } = {}) => {
        const E = (0, i.getPath)();
        if (!f.existsSync(E)) {
          await f.promises.mkdir(E, {
            recursive: true
          });
        }
        const w = c.resolve(`${E}/${a}`);
        if (!f.existsSync(w) || g) {
          if (f.existsSync(w)) {
            await f.promises.rmdir(w, {
              recursive: true
            });
          }
          const d = `https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${a}%26uc&prodversion=${process.versions.chrome}`;
          const t = c.resolve(`${w}.crx`);
          try {
            await (0, i.downloadFile)(d, t);
            try {
              await y(t, w);
              (0, i.changePermissions)(w, 755);
              return w;
            } catch (l) {
              if (!f.existsSync(c.resolve(w, "manifest.json"))) {
                throw l;
              }
            }
          } catch (l) {
            console.error(`Failed to fetch extension, trying ${h - 1} more times`);
            if (h <= 1) {
              throw l;
            }
            await new Promise(_ => setTimeout(_, 200));
            return await (0, n.downloadChromeExtension)(a, {
              forceDownload: g,
              attempts: h - 1
            });
          }
        }
        return w;
      };
      n.downloadChromeExtension = u;
    })(bt);
  }
  return bt;
}
var Xi;
function la() {
  if (Xi) {
    return Ae;
  }
  Xi = 1;
  Object.defineProperty(Ae, "__esModule", {
    value: true
  });
  Ae.MOBX_DEVTOOLS = Ae.REDUX_DEVTOOLS = Ae.VUEJS_DEVTOOLS_BETA = Ae.VUEJS_DEVTOOLS = Ae.JQUERY_DEBUGGER = Ae.BACKBONE_DEBUGGER = Ae.REACT_DEVELOPER_TOOLS = Ae.EMBER_INSPECTOR = undefined;
  Ae.installExtension = c;
  const n = Vi;
  const f = fa();
  async function c(i, y = {}) {
    const {
      forceDownload: u,
      loadExtensionOptions: a,
      session: g
    } = y;
    const h = g || n.session.defaultSession;
    if (process.type !== "browser") {
      return Promise.reject(new Error("electron-devtools-installer can only be used from the main process"));
    }
    if (Array.isArray(i)) {
      return i.reduce((t, l) => t.then(async _ => {
        const x = await c(l, y);
        return [..._, x];
      }), Promise.resolve([]));
    }
    let E;
    if (typeof i == "object" && i.id) {
      E = i.id;
    } else if (typeof i == "string") {
      E = i;
    } else {
      throw new Error(`Invalid extensionReference passed in: "${i}"`);
    }
    const w = h.getAllExtensions().find(t => t.id === E);
    if (!u && w) {
      return w;
    }
    const d = await (0, f.downloadChromeExtension)(E, {
      forceDownload: u || false
    });
    if (w != null && w.id) {
      const t = new Promise(l => {
        const _ = (x, C) => {
          if (C.id === w.id) {
            h.removeListener("extension-unloaded", _);
            l();
          }
        };
        h.on("extension-unloaded", _);
      });
      h.removeExtension(w.id);
      await t;
    }
    return h.loadExtension(d, a);
  }
  Ae.default = c;
  Ae.EMBER_INSPECTOR = {
    id: "bmdblncegkenkacieihfhpjfppoconhi"
  };
  Ae.REACT_DEVELOPER_TOOLS = {
    id: "fmkadmapgofadopljbjfkapdkoienihi"
  };
  Ae.BACKBONE_DEBUGGER = {
    id: "bhljhndlimiafopmmhjlgfpnnchjjbhd"
  };
  Ae.JQUERY_DEBUGGER = {
    id: "dbhhnnnpaeobfddmlalhnehgclcmjimi"
  };
  Ae.VUEJS_DEVTOOLS = {
    id: "nhdogjmejiglipccpnnnanhbledajbpd"
  };
  Ae.VUEJS_DEVTOOLS_BETA = {
    id: "ljjemllljcmogpfapbkkighbhhppjdbg"
  };
  Ae.REDUX_DEVTOOLS = {
    id: "lmhkpmbekcpmknklioeibfkpmmfibljd"
  };
  Ae.MOBX_DEVTOOLS = {
    id: "pfgnfdagidkfgccljigdamigbcnndkod"
  };
  return Ae;
}
var kn = la();
const ua = Ee.getDefaultExportFromCjs(kn);
const ha = Cn({
  __proto__: null,
  default: ua
}, [kn]);
exports.index = ha;
//# sourceMappingURL=index.chunk-Df16HAY4.js.map