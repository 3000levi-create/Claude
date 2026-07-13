"use strict";

(function () {
  try {
    var t = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    t.SENTRY_RELEASE = {
      id: "df1d8a339dfabcf359af7144fe142b59ff7d9a0f"
    };
  } catch {}
})();
try {
  (function () {
    var t = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    var e = new t.Error().stack;
    if (e) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[e] = "d1b5185a-9ea2-40d1-ad27-9a198ad661f8";
      t._sentryDebugIdIdentifier = "sentry-dbid-d1b5185a-9ea2-40d1-ad27-9a198ad661f8";
    }
  })();
} catch {}
const p = require("electron");
const f = require("./index.chunk-c42vKsva.js");
const h = 10000;
function c(t, e) {
  return t === e || t.endsWith(`.${e}`) || e.endsWith(`.${t}`);
}
async function w(t, e, u = f.gatewayFetch3p) {
  if (p.app.isPackaged) {
    const o = t.issuer ? [t.issuer] : [t.authorizationUrl, t.tokenUrl];
    for (const s of o) {
      if (s && new URL(s).protocol !== "https:") {
        throw new Error(`${e} endpoints must be https`);
      }
    }
  }
  if (!t.issuer && t.authorizationUrl && t.tokenUrl) {
    return {
      authorizationUrl: t.authorizationUrl,
      tokenUrl: t.tokenUrl
    };
  }
  if (!t.issuer) {
    throw new Error(`${e} missing issuer and endpoint URLs`);
  }
  const i = new URL(t.issuer);
  const d = i.protocol === "http:" && i.hostname === "127.0.0.1";
  if (i.protocol !== "https:" && !d) {
    throw new Error(`${e} issuer must be https`);
  }
  const l = `${t.issuer.replace(/\/+$/, "")}/.well-known/openid-configuration`;
  const a = await u(l, {
    redirect: "error",
    signal: AbortSignal.timeout(h)
  });
  if (!a.ok) {
    throw new Error(`${e} OIDC discovery failed (HTTP ${a.status})`);
  }
  let r;
  try {
    const o = await a.json();
    if (o === null || typeof o != "object" || Array.isArray(o)) {
      throw new Error("not an object");
    }
    r = o;
  } catch {
    throw new Error(`${e} OIDC discovery response is not a JSON object`);
  }
  if (!r.authorization_endpoint || !r.token_endpoint) {
    throw new Error(`${e} OIDC discovery document missing required endpoints`);
  }
  for (const [o, s] of [["authorization_endpoint", r.authorization_endpoint], ["token_endpoint", r.token_endpoint]]) {
    let n;
    try {
      n = new URL(s);
    } catch {
      n = undefined;
    }
    if ((n == null ? undefined : n.protocol) !== "https:" && (!d || (n == null ? undefined : n.protocol) !== "http:" || n.hostname !== "127.0.0.1")) {
      throw new Error(`${e} OIDC discovery returned non-https ${o}`);
    }
    if (n && !c(n.hostname, i.hostname)) {
      f.logger.warn(`[custom-3p:idp] OIDC discovery ${o} host differs from issuer`, {
        issuer: i.hostname,
        endpoint: n.hostname
      });
    }
  }
  return {
    authorizationUrl: r.authorization_endpoint,
    tokenUrl: r.token_endpoint
  };
}
function b(t) {
  return [...new Set([...(t ?? []), "openid"])];
}
exports.discoverOidcEndpoints = w;
exports.refreshScopesWithOpenid = b;
//# sourceMappingURL=index.chunk-BI1X_f4u.js.map