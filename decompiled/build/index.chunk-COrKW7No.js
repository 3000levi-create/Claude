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
      e._sentryDebugIds[f] = "4bf9a207-f0ea-4c9a-9065-bfcaff2afa53";
      e._sentryDebugIdIdentifier = "sentry-dbid-4bf9a207-f0ea-4c9a-9065-bfcaff2afa53";
    }
  })();
} catch {}
//# sourceMappingURL=index.chunk-COrKW7No.js.map