"use strict";

(function () {
  try {
    var o = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    o.SENTRY_RELEASE = {
      id: "df1d8a339dfabcf359af7144fe142b59ff7d9a0f"
    };
  } catch {}
})();
try {
  (function () {
    var o = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    var t = new o.Error().stack;
    if (t) {
      o._sentryDebugIds = o._sentryDebugIds || {};
      o._sentryDebugIds[t] = "486614ca-8620-4712-8658-5271a3b5bb1b";
      o._sentryDebugIdIdentifier = "sentry-dbid-486614ca-8620-4712-8658-5271a3b5bb1b";
    }
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
const m = require("node:https");
const O = require("node:tls");
const U = require("electron");
const a = require("./index.chunk-c42vKsva.js");
const S = 4194304;
const D = new Set(["UNABLE_TO_GET_ISSUER_CERT", "UNABLE_TO_GET_ISSUER_CERT_LOCALLY", "UNABLE_TO_VERIFY_LEAF_SIGNATURE", "SELF_SIGNED_CERT_IN_CHAIN", "DEPTH_ZERO_SELF_SIGNED_CERT", "CERT_UNTRUSTED", "CERT_SIGNATURE_FAILURE", "CERT_HAS_EXPIRED", "CERT_NOT_YET_VALID"]);
let l = null;
function N() {
  if (l === null) {
    l = a.getSystemCAOptions() ?? null;
  }
  return l ?? undefined;
}
async function x(o, t, v = m.request, f, E) {
  var T;
  var h;
  if (!o.startsWith("https://")) {
    throw new Error("Node TLS decline-fallback only supports https URLs");
  }
  if ((T = t.signal) != null) {
    T.throwIfAborted();
  }
  const y = N();
  const d = await a.resolveProxyUrlForRequest(o);
  if ((h = t.signal) != null) {
    h.throwIfAborted();
  }
  const b = d === undefined ? undefined : new a.distExports.HttpsProxyAgent(d, {
    ...(y ?? {}),
    rejectUnauthorized: true
  });
  const p = d !== undefined;
  const A = d === undefined ? "direct" : d.startsWith("https://") ? "https" : "http";
  const C = Object.fromEntries(Object.entries(t.headers ?? {}).filter(([u]) => u.toLowerCase() !== "accept-encoding"));
  if (f != null) {
    f();
  }
  return new Promise((u, r) => {
    const i = v(o, {
      method: t.method ?? "GET",
      headers: {
        "user-agent": U.app.userAgentFallback,
        accept: "*/*",
        "accept-encoding": "identity",
        ...C,
        ...(t.body === undefined ? {} : {
          "content-length": String(Buffer.byteLength(t.body))
        })
      },
      signal: t.signal,
      ...(b === undefined ? {} : {
        agent: b
      }),
      ...(y ?? {}),
      rejectUnauthorized: true,
      ...(E === undefined ? {} : {
        checkServerIdentity: a.makePinnedCheckServerIdentity(E)
      })
    }, e => {
      e.on("error", r);
      if (p && !(e.socket instanceof O.TLSSocket)) {
        e.resume();
        r(new Error(`Proxy refused CONNECT (HTTP ${e.statusCode ?? "?"}) — reply is the proxy's, not the gateway's`));
        return;
      }
      const n = e.statusCode;
      if (n === undefined || n < 200 || n > 599) {
        e.resume();
        r(new Error(`Unexpected HTTP status ${n}`));
        return;
      }
      if (a.REDIRECT_STATUSES.has(n)) {
        e.resume();
        r(new TypeError(`Redirect response (HTTP ${n}) with redirect mode "error"`));
        return;
      }
      if (String(e.headers["content-type"] ?? "").toLowerCase().includes("text/event-stream")) {
        r(new Error("decline-fallback cannot buffer a text/event-stream response"));
        e.destroy();
        return;
      }
      const _ = [];
      let g = 0;
      e.on("data", s => {
        g += s.byteLength;
        if (g > S) {
          r(new Error(`Response body exceeded the ${S}-byte fallback cap`));
          e.destroy();
          return;
        }
        _.push(s);
      });
      e.on("end", () => {
        try {
          const s = new Headers();
          for (const [R, c] of Object.entries(e.headers)) {
            if (c !== undefined) {
              if (Array.isArray(c)) {
                for (const L of c) {
                  s.append(R, L);
                }
              } else {
                s.set(R, c);
              }
            }
          }
          const w = Buffer.concat(_);
          const I = n !== 204 && n !== 205 && n !== 304;
          u({
            response: new Response(I && w.byteLength > 0 ? w : null, {
              status: n,
              statusText: e.statusMessage ?? "",
              headers: s
            }),
            viaProxy: p,
            proxyKind: A
          });
        } catch (s) {
          r(s);
        }
      });
    });
    i.on("error", e => {
      if (e.code !== undefined && D.has(e.code)) {
        l = null;
      }
      r(e);
    });
    if (t.signal !== undefined) {
      const e = t.signal;
      const n = () => {
        r(e.reason);
        i.destroy();
      };
      e.addEventListener("abort", n, {
        once: true
      });
      i.on("close", () => {
        e.removeEventListener("abort", n);
      });
      if (e.aborted) {
        n();
      }
    }
    i.end(t.body);
  });
}
exports.nodeFetchDecliningClientCert = x;
//# sourceMappingURL=index.chunk-CaNFbRzN.js.map