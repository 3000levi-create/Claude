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
            n = new e.Error().stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "798460da-ad01-46aa-accb-cafeb6e83156", e._sentryDebugIdIdentifier = "sentry-dbid-798460da-ad01-46aa-accb-cafeb6e83156")
    })()
} catch {}

function r(e) {
    switch (e) {
        case "MERGEABLE":
        case "CONFLICTING":
            return e;
        default:
            return
    }
}

function s(e) {
    switch (e) {
        case !0:
            return "MERGEABLE";
        case !1:
            return "CONFLICTING";
        default:
            return
    }
}

function o(e) {
    const n = e == null ? void 0 : e.toUpperCase();
    switch (n) {
        case "BEHIND":
        case "BLOCKED":
        case "CLEAN":
        case "DIRTY":
        case "DRAFT":
        case "HAS_HOOKS":
        case "UNSTABLE":
            return n;
        default:
            return
    }
}

function i(e, n) {
    const t = (e ?? "").toUpperCase(),
        a = (n ?? "").toUpperCase();
    return t === "CONFLICTING" || a === "DIRTY"
}

function f(e, n) {
    const t = (e ?? "").toUpperCase(),
        a = (n ?? "").toUpperCase();
    return t === "MERGEABLE" || t === "CONFLICTING" ? !1 : t === "" || t === "UNKNOWN" || a === "" || a === "UNKNOWN"
}
exports.isConflicting = i;
exports.isMergeStateUnknown = f;
exports.normalizeMergeStateStatus = o;
exports.normalizeMergeable = r;
exports.normalizeRestMergeable = s;
//# sourceMappingURL=index.chunk-DzRNRXNe.js.map