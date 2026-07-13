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
    var n = new e.Error().stack;
    if (n) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[n] = "982d1325-d1d0-4df9-8f95-82ae18164293";
      e._sentryDebugIdIdentifier = "sentry-dbid-982d1325-d1d0-4df9-8f95-82ae18164293";
    }
  })();
} catch {}
const d = new Map();
function o(e, n) {
  const i = d.get(e) ?? [];
  i.push(n);
  d.set(e, i);
  let f = false;
  return () => {
    if (f) {
      return;
    }
    f = true;
    const t = d.get(e);
    if (!t) {
      return;
    }
    const s = t.indexOf(n);
    if (s !== -1) {
      t.splice(s, 1);
    }
    if (t.length === 0) {
      d.delete(e);
    }
  };
}
function a(e) {
  return d.has(e);
}
function r(e) {
  const n = d.get(e);
  if (!!n && n.length !== 0) {
    return Math.max(...n);
  }
}
exports.deviceBashDeadline = r;
exports.deviceBashStarted = o;
exports.isLiveDeviceBashSession = a;
//# sourceMappingURL=index.chunk-6tGukTxg.js.map