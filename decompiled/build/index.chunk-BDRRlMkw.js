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
    var f = new e.Error().stack;
    if (f) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[f] = "e64bd7eb-4f91-4f3f-975b-f4752579f395";
      e._sentryDebugIdIdentifier = "sentry-dbid-e64bd7eb-4f91-4f3f-975b-f4752579f395";
    }
  })();
} catch {}
function n(e) {
  return `'${e.replace(/'/g, "'\\''")}'`;
}
exports.shellQuote = n;
//# sourceMappingURL=index.chunk-BDRRlMkw.js.map