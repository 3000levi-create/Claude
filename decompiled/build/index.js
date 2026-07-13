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
    var d = new e.Error().stack;
    if (d) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[d] = "75c9b012-baa4-4dfd-a39b-7d98b595668c";
      e._sentryDebugIdIdentifier = "sentry-dbid-75c9b012-baa4-4dfd-a39b-7d98b595668c";
    }
  })();
} catch {}
require("node:child_process");
require("node:path");
require("node:process");
require("./index.chunk-c42vKsva.js");
require("electron");
require("node:crypto");
require("node:os");
require("node:fs");
//# sourceMappingURL=index.js.map