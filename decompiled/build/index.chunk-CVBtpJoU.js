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
      e._sentryDebugIds[n] = "cd3306ed-7ed7-47e7-8d6e-9605b027b130";
      e._sentryDebugIdIdentifier = "sentry-dbid-cd3306ed-7ed7-47e7-8d6e-9605b027b130";
    }
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
const t = require("./index.chunk-c42vKsva.js");
const d = require("./index.chunk-BI1X_f4u.js");
const l = ["openid", "profile", "email", "offline_access"];
function f(e, n, o) {
  const r = e == null ? undefined : e.split(/\s+/).filter(Boolean);
  if (r != null && r.length) {
    if (n === "access_token") {
      if (o && !r.includes("offline_access")) {
        return [...r, "offline_access"];
      } else {
        return r;
      }
    } else if (r.includes("openid")) {
      return r;
    } else {
      return ["openid", ...r];
    }
  } else {
    return l;
  }
}
function p(e, n) {
  var o;
  var r;
  if (e.bearerTokenType !== "access_token") {
    if ((o = n.grantedScopes) != null && o.length) {
      return d.refreshScopesWithOpenid(n.grantedScopes);
    }
    if ((r = n.requestedScopes) != null && r.length) {
      return d.refreshScopesWithOpenid(n.requestedScopes.filter(i => i !== "offline_access"));
    }
  }
}
async function u(e, n) {
  const o = t.externalIdpStoreId(e);
  const r = p(e, n);
  const i = await t.refreshCredential(n, {
    fetchImpl: t.gatewayFetch3p,
    ...(r ? {
      scope: r
    } : {})
  });
  if (i.ok) {
    const s = i.cred.idToken !== n.idToken;
    if (e.bearerTokenType === "access_token" || t.isFreshExternalIdpCred(i.cred)) {
      t.logger.info("[custom-3p:idp] credential refreshed silently", {
        id: o,
        idTokenChanged: s
      });
      return {
        kind: "fresh",
        cred: i.cred
      };
    } else {
      t.logger.warn("[custom-3p:idp] refresh returned no fresh id_token; marking for interactive re-auth", {
        id: o,
        idTokenChanged: s
      });
      return {
        kind: "noIdToken",
        cred: {
          ...i.cred,
          refreshYieldsNoIdToken: true
        }
      };
    }
  }
  t.logger.warn("[custom-3p:idp] silent refresh failed", {
    id: o,
    invalidGrant: i.invalidGrant
  });
  if (i.invalidGrant) {
    return {
      kind: "invalidGrant"
    };
  } else {
    return {
      kind: "transient"
    };
  }
}
async function g(e, n) {
  var a;
  var c;
  const o = t.externalIdpStoreId(e);
  t.logger.info("[custom-3p:idp] starting external IdP PKCE grant", {
    id: o
  });
  const {
    authorizationUrl: r,
    tokenUrl: i
  } = await d.discoverOidcEndpoints(e, "inferenceGatewayOidc");
  if ((a = n.cancelled) != null && a.call(n)) {
    throw new Error("external IdP grant cancelled");
  }
  const s = await t.runLoopbackPkceFlow({
    authorizationUrl: r,
    tokenUrl: i,
    fetchImpl: t.gatewayFetch3p,
    clientId: e.clientId,
    scopes: f(e.scopes, e.bearerTokenType, e.appendOfflineAccess),
    redirectPort: e.redirectPort,
    allowedRefererHosts: (c = e.additionalRedirectReferrerHosts) == null ? undefined : c.split(/\s+/).filter(Boolean),
    displayName: "gateway sign-in",
    googleOfflineAccess: e.bearerTokenType === "access_token" && new URL(r).hostname === "accounts.google.com",
    signal: n.signal
  });
  if (!(e.bearerTokenType === "access_token" ? s.accessToken : s.idToken)) {
    throw new Error(e.bearerTokenType === "access_token" ? "external IdP SSO: token response missing access_token" : "external IdP SSO: token response missing id_token — ensure scopes include 'openid'");
  }
  if (e.bearerTokenType === "access_token" && !s.expiresAt && !s.refreshToken) {
    throw new Error("external IdP SSO (access_token mode): token response has neither expires_in nor refresh_token — enable the refresh-token grant on the IdP app registration, or configure the IdP to return expires_in");
  }
  t.logger.info("[custom-3p:idp] external IdP SSO complete", {
    id: o,
    hasRefreshToken: !!s.refreshToken
  });
  return s;
}
const k = {
  effectiveScopes: f
};
exports._test = k;
exports.refreshExternalIdpCred = u;
exports.runExternalIdpPkceGrant = g;
//# sourceMappingURL=index.chunk-CVBtpJoU.js.map