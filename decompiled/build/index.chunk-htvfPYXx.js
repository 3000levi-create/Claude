"use strict";
(function() {
    try {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
        e.SENTRY_RELEASE = {
            id: "df1d8a339dfabcf359af7144fe142b59ff7d9a0f"
        }
    } catch {}
})();
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ea61728c-ed57-457f-89a0-d2cf2f8d55c6", e._sentryDebugIdIdentifier = "sentry-dbid-ea61728c-ed57-457f-89a0-d2cf2f8d55c6")
    })()
} catch {}
const l = require("./index.chunk-c42vKsva.js");

function i(e) {
    const t = "1978029737",
        a = (d, s) => l.getParsedFeatureValueForKey(t, d, s, l.numberType().int().positive()),
        f = d => Math.min(Math.floor(d) * 1024 * 1024, e.ceilingBytes),
        n = f(a(e.fileKey, e.defaultFileMb)),
        o = Math.max(f(a(e.totalKey, e.defaultTotalMb)), n);
    return {
        fileBytes: n,
        totalBytes: o,
        fileMb: Math.round(n / (1024 * 1024)),
        totalMb: Math.round(o / (1024 * 1024))
    }
}
exports.getTransferCaps = i;
//# sourceMappingURL=index.chunk-htvfPYXx.js.map