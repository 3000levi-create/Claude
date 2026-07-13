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
      e._sentryDebugIds[n] = "84dca285-5c76-4d29-9e3b-65e9bfff48de";
      e._sentryDebugIdIdentifier = "sentry-dbid-84dca285-5c76-4d29-9e3b-65e9bfff48de";
    }
  })();
} catch {}
function f(e) {
  if (!e) {
    return false;
  }
  const n = e.toUpperCase();
  return n === "MERGED" || n === "CLOSED";
}
function d(e) {
  const n = e == null ? undefined : e.toUpperCase();
  return n === "OPEN" || n === "QUEUED";
}
exports.isOpenPrState = d;
exports.isTerminalPrState = f;
//# sourceMappingURL=index.chunk-CO6ZZEeq.js.map