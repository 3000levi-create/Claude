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
      e._sentryDebugIds[n] = "e97c664f-1e6b-429c-9e73-ce920a86ede9";
      e._sentryDebugIdIdentifier = "sentry-dbid-e97c664f-1e6b-429c-9e73-ce920a86ede9";
    }
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
const o = require("./index.chunk-c42vKsva.js");
const g = require("./index.chunk-BI1X_f4u.js");
const w = 10000;
const u = ["openid", "profile", "email", "offline_access"];
const h = "https://www.googleapis.com/auth/cloud-platform";
function p(e, n) {
  const i = e == null ? undefined : e.split(/\s+/).filter(Boolean);
  if (i != null && i.length) {
    return [...new Set(n ? ["openid", ...i] : ["openid", ...i, "offline_access"])];
  } else if (n) {
    return u.filter(d => d !== "offline_access");
  } else {
    return u;
  }
}
async function a(e, n, i) {
  const d = new URLSearchParams({
    grant_type: "urn:ietf:params:oauth:grant-type:token-exchange",
    audience: e.audience,
    requested_token_type: "urn:ietf:params:oauth:token-type:access_token",
    subject_token_type: "urn:ietf:params:oauth:token-type:id_token",
    subject_token: n,
    scope: h
  });
  if (e.userProject) {
    d.set("options", JSON.stringify({
      userProject: e.userProject
    }));
  }
  const t = await i(`https://${o.GOOGLE_STS_HOST}/v1/token`, {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded"
    },
    body: d.toString(),
    redirect: "error",
    signal: AbortSignal.timeout(w)
  });
  const r = await t.json().catch(() => {});
  if (!t.ok || r == null || !r.access_token) {
    const c = (r == null ? undefined : r.error_description) ?? (r == null ? undefined : r.error) ?? `HTTP ${t.status}`;
    throw new Error(`GCP STS token exchange failed: ${c}`);
  }
  return {
    accessToken: r.access_token,
    expiresAt: Date.now() + (r.expires_in ?? 3600) * 1000
  };
}
async function y(e, n, i = o.gatewayFetch3p) {
  var s;
  var f;
  var l;
  const d = o.vertexWorkforceStoreId(e);
  o.logger.info("[custom-3p:wif] starting Workforce Identity grant", {
    id: d
  });
  const {
    authorizationUrl: t,
    tokenUrl: r
  } = await g.discoverOidcEndpoints(e.oidc, "inferenceVertexWorkforceOidc", i);
  if ((s = n.cancelled) != null && s.call(n)) {
    throw new DOMException("Workforce Identity grant cancelled", "AbortError");
  }
  const c = await o.runLoopbackPkceFlow({
    authorizationUrl: t,
    tokenUrl: r,
    fetchImpl: i,
    clientId: e.oidc.clientId,
    scopes: p(e.oidc.scopes, e.oidc.omitOfflineAccess),
    redirectPort: e.oidc.redirectPort,
    allowedRefererHosts: (f = e.oidc.additionalRedirectReferrerHosts) == null ? undefined : f.split(/\s+/).filter(Boolean),
    displayName: "Workforce Identity sign-in",
    signal: n.signal
  });
  if (!c.idToken) {
    throw new Error("Workforce Identity sign-in: IdP token response missing id_token — ensure scopes include 'openid'");
  }
  if ((l = n.cancelled) != null && l.call(n)) {
    throw new DOMException("Workforce Identity grant cancelled", "AbortError");
  }
  const k = await a(e, c.idToken, i);
  o.logger.info("[custom-3p:wif] Workforce Identity grant complete", {
    id: d,
    hasRefreshToken: !!c.refreshToken
  });
  return {
    idp: c,
    gcp: k
  };
}
async function _(e, n, i = o.gatewayFetch3p) {
  const d = o.vertexWorkforceStoreId(e);
  let t = n.idp;
  if (!o.isFreshExternalIdpCred(t)) {
    if (!t.refreshToken) {
      return {
        kind: "transient"
      };
    }
    const r = await o.refreshCredential(t, {
      scope: [...new Set([...(t.grantedScopes ?? []), "openid", ...(e.oidc.omitOfflineAccess ? [] : ["offline_access"])])],
      fetchImpl: i
    });
    if (!r.ok) {
      o.logger.warn("[custom-3p:wif] IdP silent refresh failed", {
        id: d,
        invalidGrant: r.invalidGrant
      });
      if (r.invalidGrant) {
        return {
          kind: "invalidGrant"
        };
      } else {
        return {
          kind: "transient"
        };
      }
    }
    const c = r.cred.idToken !== t.idToken;
    if (!o.isFreshExternalIdpCred(r.cred)) {
      o.logger.warn("[custom-3p:wif] IdP refresh returned no fresh id_token; marking for interactive re-auth", {
        id: d,
        idTokenChanged: c
      });
      return {
        kind: "noIdToken",
        cred: {
          idp: {
            ...r.cred,
            refreshYieldsNoIdToken: true
          },
          gcp: n.gcp
        }
      };
    }
    t = r.cred;
  }
  try {
    const r = await a(e, t.idToken, i);
    o.logger.info("[custom-3p:wif] credential refreshed silently", {
      id: d
    });
    return {
      kind: "fresh",
      cred: {
        idp: t,
        gcp: r
      }
    };
  } catch (r) {
    o.logger.warn("[custom-3p:wif] STS exchange failed during refresh", {
      id: d,
      error: r instanceof Error ? r.message : String(r)
    });
    return {
      kind: "transient",
      cred: {
        idp: t,
        gcp: n.gcp
      }
    };
  }
}
const T = {
  effectiveIdpScopes: p,
  stsExchange: a
};
exports._test = T;
exports.refreshVertexWorkforce = _;
exports.runVertexWorkforceGrant = y;
//# sourceMappingURL=index.chunk-B0Ja_Or4.js.map