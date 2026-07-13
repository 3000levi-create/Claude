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
      e._sentryDebugIds[n] = "5f545dc5-4895-420b-abb5-520e2650842b";
      e._sentryDebugIdIdentifier = "sentry-dbid-5f545dc5-4895-420b-abb5-520e2650842b";
    }
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
const t = require("./index.chunk-c42vKsva.js");
const G = require("electron");
const N = ["https://cognitiveservices.azure.com/.default", "offline_access"];
const P = N.join(" ");
const j = "urn:ietf:params:oauth:grant-type:device_code";
const z = 10000;
const H = 10000;
const Y = 10000;
const S = 300000;
const V = 1;
const v = 30;
const R = 300;
const A = 86400;
const O = 65536;
const w = (e, n) => G.net.fetch(e, n);
function l(e, n, r, a) {
  const o = typeof e == "number" ? e : typeof e == "string" ? Number(e) : NaN;
  if (Number.isFinite(o)) {
    return Math.min(Math.max(Math.trunc(o), n), r);
  } else {
    return a;
  }
}
function y(e) {
  const n = Date.now();
  const r = l(e, R, A, 3600);
  return n + r * 1000;
}
function F(e) {
  if (e === undefined) {
    return 0;
  }
  const n = Date.now();
  const r = Math.round((e - n) / 1000);
  return n + l(r, R, A, 3600) * 1000;
}
function M(e) {
  const n = typeof e == "number" ? e : Number(e);
  if (Number.isFinite(n) && n > 0) {
    return Date.now() + n * 1000;
  } else {
    return undefined;
  }
}
async function p(e) {
  var o;
  const n = (o = e.body) == null ? undefined : o.getReader();
  if (!n) {
    return JSON.parse(await e.text());
  }
  const r = [];
  let a = 0;
  while (true) {
    const {
      done: i,
      value: c
    } = await n.read();
    if (i) {
      break;
    }
    a += c.length;
    if (a > O) {
      n.cancel();
      throw new Error(`Foundry Entra: response body exceeds ${O} bytes`);
    }
    r.push(c);
  }
  return JSON.parse(new TextDecoder().decode(Buffer.concat(r)));
}
function x(e, n) {
  const r = AbortSignal.timeout(e);
  if (n) {
    return AbortSignal.any([r, n]);
  } else {
    return r;
  }
}
function U(e) {
  return `https://${t.MICROSOFT_LOGIN_HOST}/${encodeURIComponent(e)}/oauth2/v2.0/devicecode`;
}
function D(e) {
  return `https://${t.MICROSOFT_LOGIN_HOST}/${encodeURIComponent(e)}/oauth2/v2.0/authorize`;
}
function _(e) {
  return `https://${t.MICROSOFT_LOGIN_HOST}/${encodeURIComponent(e)}/oauth2/v2.0/token`;
}
const q = t.objectType({
  device_code: t.stringType().min(1).max(1024),
  user_code: t.stringType().min(1).max(64),
  verification_uri: t.stringType().url().refine(e => {
    const n = new URL(e);
    return n.protocol === "https:" && /(^|\.)microsoft\.com$/.test(n.hostname);
  }, {
    message: "verification_uri must be https://*.microsoft.com"
  }),
  interval: t.unknownType().optional(),
  expires_in: t.unknownType().optional()
}).strip();
const L = t.objectType({
  access_token: t.stringType().min(1).max(32768),
  expires_in: t.unknownType().optional(),
  refresh_token: t.stringType().min(1).max(32768).optional(),
  refresh_token_expires_in: t.unknownType().optional()
}).strip();
const $ = t.objectType({
  error: t.stringType().max(256).optional(),
  error_description: t.stringType().max(2048).optional()
}).strip();
const B = new Set(["authorization_pending", "slow_down"]);
async function J(e, n, r = w) {
  var E;
  var m;
  var k;
  var g;
  var I;
  t.logger.info("[custom-3p:entra] starting Entra device-code grant", {
    tenantId: e.tenantId
  });
  const a = await r(U(e.tenantId), {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      client_id: e.clientId,
      scope: P
    }).toString(),
    redirect: "error",
    signal: x(z, n.signal)
  });
  if (!a.ok) {
    throw new Error(`Foundry Entra device init failed: HTTP ${a.status}`);
  }
  const o = q.safeParse(await p(a));
  if (!o.success) {
    throw new Error(`Foundry Entra device init: ${o.error.issues.map(d => `${d.path.join(".")}: ${d.message}`).join("; ")}`);
  }
  const i = o.data;
  if ((E = n.cancelled) != null && E.call(n)) {
    throw new Error("Foundry Entra device grant cancelled");
  }
  if ((m = n.onUserCode) != null) {
    m.call(n, {
      userCode: i.user_code,
      verifyUrl: i.verification_uri
    });
  }
  let c = l(i.interval, V, v, 5) * 1000;
  const f = Date.now() + Math.min(l(i.expires_in, 30, S / 1000, 600) * 1000, S);
  const C = _(e.tenantId);
  while (true) {
    if ((k = n.cancelled) != null && k.call(n)) {
      throw new Error("Foundry Entra device grant cancelled");
    }
    const d = f - Date.now();
    if (d <= 0) {
      break;
    }
    await t.sleep(Math.min(c, d));
    if ((g = n.cancelled) != null && g.call(n)) {
      throw new Error("Foundry Entra device grant cancelled");
    }
    let h;
    let T;
    try {
      h = await r(C, {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
          grant_type: j,
          client_id: e.clientId,
          device_code: i.device_code
        }).toString(),
        redirect: "error",
        signal: x(H, n.signal)
      });
      T = await p(h);
    } catch (s) {
      t.logger.debug("[custom-3p:entra] token poll transient error", {
        error: s instanceof Error ? s.message : String(s)
      });
      continue;
    }
    if (h.ok) {
      const s = L.safeParse(T);
      if (!s.success) {
        throw new Error(`Foundry Entra token response invalid: ${(I = s.error.issues[0]) == null ? undefined : I.message}`);
      }
      return {
        accessToken: s.data.access_token,
        expiresAt: y(s.data.expires_in),
        refreshToken: s.data.refresh_token,
        refreshTokenExpiresAt: M(s.data.refresh_token_expires_in),
        tenantId: e.tenantId,
        clientId: e.clientId
      };
    }
    const b = $.safeParse(T);
    const u = b.success ? b.data.error : undefined;
    if (u && !B.has(u)) {
      throw new Error(`Foundry Entra device grant rejected: ${u}`);
    }
    if (u === "slow_down") {
      c = Math.min(c + 5000, v * 1000);
    }
    if (!u) {
      t.logger.debug("[custom-3p:entra] token poll non-OAuth response", {
        status: h.status
      });
    }
  }
  throw new Error("Foundry Entra device grant timed out waiting for approval");
}
async function K(e, n) {
  t.logger.info("[custom-3p:entra] starting Entra browser PKCE grant", {
    tenantId: e.tenantId
  });
  const r = await t.runLoopbackPkceFlow({
    authorizationUrl: D(e.tenantId),
    tokenUrl: _(e.tenantId),
    clientId: e.clientId,
    scopes: N,
    displayName: "Microsoft Entra",
    signal: n.signal,
    fetchImpl: w
  });
  return {
    accessToken: r.accessToken,
    expiresAt: F(r.expiresAt),
    refreshToken: r.refreshToken,
    refreshTokenExpiresAt: r.refreshTokenExpiresAt,
    tenantId: e.tenantId,
    clientId: e.clientId
  };
}
async function X(e, n = w) {
  var i;
  if (!e.refreshToken) {
    return {
      kind: "noPath"
    };
  }
  const r = await n(_(e.tenantId), {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      client_id: e.clientId,
      refresh_token: e.refreshToken,
      scope: P
    }).toString(),
    redirect: "error",
    signal: AbortSignal.timeout(Y)
  });
  const a = await p(r);
  if (!r.ok) {
    const c = $.safeParse(a);
    const f = c.success ? c.data.error : undefined;
    if (f === "invalid_grant") {
      return {
        kind: "clear"
      };
    }
    throw new Error(`Foundry Entra refresh failed: ${f ?? `HTTP ${r.status}`}`);
  }
  const o = L.safeParse(a);
  if (!o.success) {
    throw new Error(`Foundry Entra refresh response invalid: ${(i = o.error.issues[0]) == null ? undefined : i.message}`);
  }
  return {
    kind: "fresh",
    token: {
      accessToken: o.data.access_token,
      expiresAt: y(o.data.expires_in),
      refreshToken: o.data.refresh_token ?? e.refreshToken,
      refreshTokenExpiresAt: M(o.data.refresh_token_expires_in) ?? (o.data.refresh_token ? undefined : e.refreshTokenExpiresAt),
      tenantId: e.tenantId,
      clientId: e.clientId
    }
  };
}
const Q = {
  clampInt: l,
  clampExpiresAt: y,
  clampExpiresAtMs: F,
  readJsonBounded: p
};
exports._test = Q;
exports.entraAuthorizeUrl = D;
exports.entraDeviceCodeUrl = U;
exports.entraTokenUrl = _;
exports.refreshFoundryEntraToken = X;
exports.runFoundryEntraDeviceGrant = J;
exports.runFoundryEntraPkceGrant = K;
//# sourceMappingURL=index.chunk-Cz4FOGhl.js.map