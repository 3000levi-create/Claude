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
    var t = new e.Error().stack;
    if (t) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[t] = "ea61728c-ed57-457f-89a0-d2cf2f8d55c6";
      e._sentryDebugIdIdentifier = "sentry-dbid-ea61728c-ed57-457f-89a0-d2cf2f8d55c6";
    }
  })();
} catch {}
const l = require("./index.chunk-c42vKsva.js");
function i(e) {
  const t = "1978029737";
  const a = (d, s) => l.getParsedFeatureValueForKey(t, d, s, l.numberType().int().positive());
  const f = d => Math.min(Math.floor(d) * 1024 * 1024, e.ceilingBytes);
  const n = f(a(e.fileKey, e.defaultFileMb));
  const o = Math.max(f(a(e.totalKey, e.defaultTotalMb)), n);
  return {
    fileBytes: n,
    totalBytes: o,
    fileMb: Math.round(n / 1048576),
    totalMb: Math.round(o / 1048576)
  };
}
exports.getTransferCaps = i;
//# sourceMappingURL=index.chunk-htvfPYXx.js.map