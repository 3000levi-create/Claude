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
      e._sentryDebugIds[n] = "798460da-ad01-46aa-accb-cafeb6e83156";
      e._sentryDebugIdIdentifier = "sentry-dbid-798460da-ad01-46aa-accb-cafeb6e83156";
    }
  })();
} catch {}
function r(e) {
  switch (e) {
    case "MERGEABLE":
    case "CONFLICTING":
      return e;
    default:
      return;
  }
}
function s(e) {
  switch (e) {
    case true:
      return "MERGEABLE";
    case false:
      return "CONFLICTING";
    default:
      return;
  }
}
function o(e) {
  const n = e == null ? undefined : e.toUpperCase();
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
      return;
  }
}
function i(e, n) {
  const t = (e ?? "").toUpperCase();
  const a = (n ?? "").toUpperCase();
  return t === "CONFLICTING" || a === "DIRTY";
}
function f(e, n) {
  const t = (e ?? "").toUpperCase();
  const a = (n ?? "").toUpperCase();
  if (t === "MERGEABLE" || t === "CONFLICTING") {
    return false;
  } else {
    return t === "" || t === "UNKNOWN" || a === "" || a === "UNKNOWN";
  }
}
exports.isConflicting = i;
exports.isMergeStateUnknown = f;
exports.normalizeMergeStateStatus = o;
exports.normalizeMergeable = r;
exports.normalizeRestMergeable = s;
//# sourceMappingURL=index.chunk-DzRNRXNe.js.map