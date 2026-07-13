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
      e._sentryDebugIds[t] = "bf67b966-b9f5-4560-a052-615c4537720f";
      e._sentryDebugIdIdentifier = "sentry-dbid-bf67b966-b9f5-4560-a052-615c4537720f";
    }
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
const l = require("electron");
const r = require("./index.chunk-c42vKsva.js");
const p = `https://${r.PLATFORM_CLAUDE_HOST}/oauth/authorize`;
const u = 10000;
class c extends Error {
  constructor(t, n) {
    super(t);
    this.status = n;
    this.name = "AnthropicKeyMintError";
  }
}
function f(e) {
  if (e.apiHost.includes("api.anthropic.com")) {
    return p;
  } else {
    return `${new URL(e.redirectUri).origin}/oauth/authorize`;
  }
}
function h(e) {
  if (e) {
    return AbortSignal.any([e, AbortSignal.timeout(u)]);
  } else {
    return AbortSignal.timeout(u);
  }
}
async function y(e, t, n) {
  const o = await l.net.fetch(`${e}/api/oauth/claude_cli/create_api_key`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${t}`
    },
    redirect: "error",
    signal: h(n)
  });
  if (!o.ok) {
    r.logger.warn("[custom-3p:console] key-mint rejected", {
      status: o.status
    });
    throw o.status === 400 ? Object.assign(new Error("API key sign-in works for Console (API) organizations only. Choose a different organization."), {
      code: "ORG_NOT_API"
    }) : new c(`API key mint failed (HTTP ${o.status})`, o.status);
  }
  const i = await o.json().catch(s => {
    throw s instanceof SyntaxError ? new c("API key mint response was not JSON") : s;
  });
  if (i === null || typeof i != "object") {
    throw new c("API key mint response was not JSON");
  }
  const a = i;
  if (!a.raw_key) {
    throw new c("API key mint response missing raw_key");
  }
  return a.raw_key;
}
async function w(e, t, n) {
  var o;
  try {
    const i = await l.net.fetch(`${e}/api/oauth/profile`, {
      headers: {
        Authorization: `Bearer ${t}`
      },
      redirect: "error",
      signal: h(n)
    });
    if (!i.ok) {
      return;
    }
    const s = (o = (await i.json()).organization) == null ? undefined : o.uuid;
    if (typeof s == "string" && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(s)) {
      return s;
    } else {
      return undefined;
    }
  } catch {
    return;
  }
}
let d;
function g() {
  d ??= Promise.resolve().then(() => require("./index.chunk-c42vKsva.js")).then(e => e.oauth).then(e => {
    const n = e.COWORK_3P_OAUTH_CONFIGS.production;
    r.setResolvedClientId(n.clientId);
    return n;
  });
  return d;
}
async function b() {
  var e;
  await g();
  return ((e = r.readStoredMintedKey()) == null ? undefined : e.apiKey) ?? null;
}
async function A(e) {
  var a;
  const t = await g();
  r.logger.info("[custom-3p:console] starting browser sign-in", {
    clientId: t.clientId
  });
  const n = await r.runLoopbackPkceFlow({
    authorizationUrl: f(t),
    tokenUrl: `${t.apiHost}/v1/oauth/token`,
    clientId: t.clientId,
    scopes: t.scope.split(" "),
    displayName: "Anthropic",
    anthropicTokenEndpoint: {
      extraHeaders: {
        "anthropic-version": "2023-06-01"
      }
    },
    signal: e.signal
  });
  if ((a = e.cancelled) != null && a.call(e)) {
    throw new DOMException("aborted", "AbortError");
  }
  const [o, i] = await Promise.all([y(t.apiHost, n.accessToken, e.signal), w(t.apiHost, n.accessToken, e.signal)]);
  return {
    apiKey: o,
    clientId: t.clientId,
    organizationUuid: i
  };
}
const _ = {
  authorizeUrlFor: f,
  mintApiKey: y,
  reset: () => {
    r._testStoreReset();
    r.clearMintedKeyStore();
    d = undefined;
  }
};
exports._test = _;
exports.doAnthropicConsoleGrant = A;
exports.getMintedAnthropicApiKey = b;
//# sourceMappingURL=index.chunk-Cn6zRy1u.js.map