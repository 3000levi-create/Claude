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
      e._sentryDebugIds[t] = "1e7343c9-1cc8-46e6-be12-605b1c86ff79";
      e._sentryDebugIdIdentifier = "sentry-dbid-1e7343c9-1cc8-46e6-be12-605b1c86ff79";
    }
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
const b = require("node:crypto");
const m = require("node:fs/promises");
const d = require("node:path");
const D = require("electron");
const r = require("./index.chunk-c42vKsva.js");
function h(e) {
  const t = Object.create(null, {
    [Symbol.toStringTag]: {
      value: "Module"
    }
  });
  if (e) {
    for (const n in e) {
      if (n !== "default") {
        const o = Object.getOwnPropertyDescriptor(e, n);
        Object.defineProperty(t, n, o.get ? o : {
          enumerable: true,
          get: () => e[n]
        });
      }
    }
  }
  t.default = e;
  return Object.freeze(t);
}
const v = h(m);
async function c(e, t) {
  try {
    await r.retryTransientLock(() => v.rm(e, {
      recursive: true,
      force: true,
      maxRetries: 3
    }));
  } catch (n) {
    r.logger.warn(`[ccd-session-secrets] ${t} rm failed`, {
      dir: e,
      error: n
    });
  }
}
const w = /^[a-zA-Z0-9_-]+$/;
const p = new Map();
function S(e) {
  let t = p.get(e);
  if (!t) {
    t = new r.Mutex();
    p.set(e, t);
  }
  return t;
}
const u = new r.Supersession();
let s = Promise.resolve();
function a() {
  return d.join(D.app.getPath("userData"), "ccd-session-secrets");
}
function f(e) {
  return d.join(a(), e);
}
async function C(e) {
  const t = r.getDeploymentMode();
  if (t.type !== "3p") {
    return {
      env: {}
    };
  } else {
    await l();
    if (w.test(e)) {
      return S(e).runExclusive(async () => {
        const n = u.capture();
        await s;
        const o = f(e);
        try {
          await r.mkdirPrivate(o);
          const i = await t.writeSessionSecrets(o, o);
          if (n()) {
            throw new r.CredentialSupersededDuringWriteError();
          }
          return i;
        } catch (i) {
          throw n() ? (await c(o, "stale-gen"), i instanceof r.CredentialSupersededDuringWriteError ? i : new r.CredentialSupersededDuringWriteError({
            cause: i
          })) : i;
        }
      });
    } else {
      r.logger.warn("[ccd-session-secrets] unsafe sessionId; skipping materialize", {
        sessionId: e
      });
      return {
        env: {}
      };
    }
  }
}
async function E() {
  const e = r.getDeploymentMode();
  if (e.type !== "3p") {
    return {
      secrets: {
        env: {}
      },
      dispose: () => {}
    };
  }
  await l();
  const t = u.capture();
  await s;
  const n = d.join(a(), `fork-${b.randomUUID()}`);
  const o = () => void c(n, "fork dispose");
  try {
    await r.mkdirPrivate(n);
    const i = await e.writeSessionSecrets(n, n);
    if (t()) {
      throw new r.CredentialSupersededDuringWriteError();
    }
    return {
      secrets: i,
      dispose: o
    };
  } catch (i) {
    await c(n, "fork write-fail");
    throw !t() || i instanceof r.CredentialSupersededDuringWriteError ? i : new r.CredentialSupersededDuringWriteError({
      cause: i
    });
  }
}
async function k(e) {
  if (r.getDeploymentMode().type === "3p" && w.test(e)) {
    await S(e).runExclusive(() => c(f(e), "teardown"));
  }
}
let y;
function l() {
  return y ??= g();
}
function g() {
  u.invalidate();
  return s = s.then(() => c(a(), "sweep"));
}
const _ = {
  resetBootSweep: () => {
    y = undefined;
  },
  chainActiveSweep: e => {
    s = s.then(e);
  }
};
exports._test = _;
exports.ccdSessionSecretsDir = f;
exports.ccdSessionSecretsRoot = a;
exports.ensureCcdBootSweep = l;
exports.materializeCcdForkSecrets = E;
exports.materializeCcdSessionSecrets = C;
exports.removeCcdSessionSecretsDir = k;
exports.sweepCcdSessionSecrets = g;
//# sourceMappingURL=index.chunk-CSy-NQHd.js.map