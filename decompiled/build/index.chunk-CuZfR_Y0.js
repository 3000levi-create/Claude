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
            r = new e.Error().stack;
        r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "609c87bb-61a5-44d3-8141-e4910585673d", e._sentryDebugIdIdentifier = "sentry-dbid-609c87bb-61a5-44d3-8141-e4910585673d")
    })()
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
const o = require("./index.chunk-BCx6X-Yy.js"),
    t = require("./index.chunk-c42vKsva.js");
exports.evictRemoteServerController = o.evictRemoteServerController;
exports.getRemoteServerController = o.getRemoteServerController;
exports.getRemoteServerControllerForTarget = o.getRemoteServerControllerForTarget;
exports.controllerCacheKey = t.controllerCacheKey;
//# sourceMappingURL=index.chunk-CuZfR_Y0.js.map