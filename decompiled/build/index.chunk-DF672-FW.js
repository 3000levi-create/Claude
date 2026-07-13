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
      e._sentryDebugIds[t] = "13a7e9c7-cc1d-4995-ba78-b6bdd2e964a0";
      e._sentryDebugIdIdentifier = "sentry-dbid-13a7e9c7-cc1d-4995-ba78-b6bdd2e964a0";
    }
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
const a = require("./index.chunk-c42vKsva.js");
let o;
async function d(e, t) {
  const i = e.epoch;
  if (i !== t.credentialEpoch() || i === o) {
    return;
  }
  const s = o;
  o = i;
  let n = false;
  try {
    n = await r(e);
  } finally {
    if (!n && o === i) {
      o = s;
    }
  }
}
async function r(e) {
  const {
    showToastInWebapp: t
  } = await Promise.resolve().then(() => require("./index.chunk-c42vKsva.js")).then(n => n.webAppApis);
  const i = a.getIntl();
  if (e.httpStatus === 403 && e.hint === undefined) {
    return t(i.formatMessage({
      defaultMessage: "Access denied by your organization. Contact your administrator.",
      id: "4utN6mPwyo",
      description: "Custom 3P toast: gateway returned 403 (authorization, not expiry)."
    }), a.ToastType.Error, {
      credentialAuthKind: e.credentialKind,
      messageForLogging: "custom3p_auth_denied_toast"
    });
  }
  const s = {
    credentialAuthKind: e.credentialKind,
    messageForLogging: "custom3p_auth_expiry_toast",
    ...(e.kind !== undefined && {
      authAction: {
        label: i.formatMessage({
          defaultMessage: "Sign in again",
          id: "FTUa2KLNJw",
          description: "Custom 3P auth-expiry toast button."
        }),
        kind: a.ToastAuthActionKind.TriggerInteractiveAuth
      }
    })
  };
  return t(e.hint ?? i.formatMessage({
    defaultMessage: "Your session has expired.",
    id: "gOliyKKTYC",
    description: "Custom 3P auth-expiry toast body."
  }), a.ToastType.Error, s);
}
const u = {
  resetDedup: () => {
    o = undefined;
  }
};
exports._test = u;
exports.showAuthExpiryToast = d;
//# sourceMappingURL=index.chunk-DF672-FW.js.map