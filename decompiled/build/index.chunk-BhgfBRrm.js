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
      e._sentryDebugIds[t] = "42c2cb8b-ac3a-4698-a17d-40e7901c2a49";
      e._sentryDebugIdIdentifier = "sentry-dbid-42c2cb8b-ac3a-4698-a17d-40e7901c2a49";
    }
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
const H = require("node:os");
const n = require("./index.chunk-c42vKsva.js");
const Y = require("./index.chunk-CvbeGVMj.js");
const S = 30000;
const w = 300000;
const g = 30000;
const B = 5000;
function E(e) {
  return n.oneLine(n.redactSecretLike(n.redactCredentialPatterns(n.scrubPaths(e))));
}
function C(e) {
  if (Number.isFinite(e)) {
    return Math.max(0, Math.min(100, Math.round(e)));
  } else {
    return 0;
  }
}
function h(e) {
  const t = s => s.map(c => ({
    name: c.name,
    pct: C(c.pct)
  }));
  return {
    requestCount: Number.isFinite(e.request_count) ? Math.max(0, Math.round(e.request_count)) : 0,
    behaviors: e.behaviors.map(s => ({
      key: s.key,
      pct: C(s.pct)
    })),
    agents: t(e.agents),
    skills: t(e.skills),
    plugins: t(e.plugins),
    mcpServers: t(e.mcp_servers)
  };
}
function G() {
  return {
    [Symbol.asyncIterator]: () => ({
      next: () => new Promise(() => {})
    })
  };
}
class U extends Error {
  constructor() {
    super("no CLI binary on disk");
  }
}
class T extends Error {
  constructor(t) {
    super(`get_usage response shape drift: ${t instanceof Error ? t.message : String(t)}`);
  }
}
class D extends Error {
  constructor() {
    super("usage probe attempt rate floor");
  }
}
class v extends Error {
  constructor() {
    super("usage probe superseded before spawn");
  }
}
function A(e) {
  if (e instanceof U || e instanceof T) {
    return true;
  }
  const t = e instanceof Error ? e.message : String(e);
  return /unsupported control request|unknown control|unrecognized.*subtype/i.test(t);
}
let O = 0;
let u = null;
async function M() {
  if (Date.now() - O < B) {
    throw new D();
  }
  O = Date.now();
  const e = o;
  let t;
  let s = null;
  let c;
  let P = false;
  const L = new Promise((a, p) => {
    c = setTimeout(() => {
      P = true;
      p(new Error(`usage probe timed out after ${S}ms`));
    }, S);
    c.unref();
  });
  const m = (async () => {
    const a = await n.getHostCliBinary();
    if (!a) {
      throw new U();
    }
    const p = n.applyDeploymentModeOverrides(n.CLAUDE_CODE_OAUTH_CONFIGS[n.getOAuthEnvironment()]);
    const b = await n.getApiTokenResult(p);
    if (!b.ok) {
      const {
        reason: i
      } = b;
      n.logger.warn("[UsageProbe] oauth failed", {
        type: i.type,
        detail: E(i.detail ?? "")
      });
      throw new Error(`oauth failed (${i.type})`);
    }
    const k = n.loadUserEnvVars().CLAUDE_CONFIG_DIR || n.getClaudeConfigDir();
    const R = n.buildHostCliEnv(p.apiHost, k, {
      CLAUDE_CODE_OAUTH_TOKEN: b.token,
      CLAUDE_CODE_SUBSCRIPTION_TYPE: b.subscriptionType ?? "",
      CLAUDE_CODE_RATE_LIMIT_TIER: b.rateLimitTier ?? "",
      CLAUDE_CODE_TAGS: "usage_probe"
    });
    const N = n.mergeNetworkEnv(await n.resolveSystemProxyEnv(p.apiHost), R);
    const {
      cmd: x,
      args: F
    } = n.getUntrustedLaunchOptions({
      cmd: a,
      args: []
    });
    if (P || o !== e) {
      throw new v();
    }
    t = Y.query({
      prompt: G(),
      options: {
        pathToClaudeCodeExecutable: x,
        executableArgs: F,
        cwd: H.tmpdir(),
        allowedTools: [],
        settingSources: [],
        mcpServers: {},
        strictMcpConfig: true,
        persistSession: false,
        canUseTool: async () => ({
          behavior: "deny",
          message: "usage probe has no tools"
        }),
        env: N,
        stderr: i => {
          n.logger.debug(`[UsageProbe] stderr: ${E(i)}`);
        }
      }
    });
    const q = t;
    s = () => {
      try {
        q.close();
      } catch {}
    };
    u = s;
    const _ = await t.usage_EXPERIMENTAL_MAY_CHANGE_DO_NOT_RELY_ON_THIS_API_YET();
    try {
      if (_.behaviors) {
        return {
          day: h(_.behaviors.day),
          week: h(_.behaviors.week)
        };
      } else {
        return null;
      }
    } catch (i) {
      throw new T(i);
    }
  })();
  m.catch(() => {});
  try {
    return await Promise.race([L, m]);
  } finally {
    clearTimeout(c);
    if (u === s) {
      u = null;
    }
    try {
      if (t != null) {
        t.close();
      }
    } catch (a) {
      n.logger.warn("[UsageProbe] close failed", {
        message: E(a instanceof Error ? a.message : String(a))
      });
    }
  }
}
let r = null;
let y = 0;
let l = 0;
let d = g;
let f = null;
let o = 0;
function I() {
  o++;
  r = null;
  l = 0;
  d = g;
  f = null;
  y = 0;
  if (u != null) {
    u();
  }
  u = null;
}
async function $() {
  if (r && Date.now() - r.at < w) {
    return r.payload;
  }
  if (l && Date.now() - l < d) {
    return (r == null ? undefined : r.payload) ?? null;
  }
  if (f) {
    return f;
  }
  const e = o;
  f = (async () => {
    try {
      const t = await M();
      if (o !== e) {
        return null;
      } else if (t === null && (r == null ? undefined : r.payload) != null && (y = y || Date.now(), Date.now() - y < w)) {
        l = Date.now();
        d = g;
        return r.payload;
      } else {
        y = 0;
        r = {
          at: Date.now(),
          payload: t
        };
        l = 0;
        d = g;
        return t;
      }
    } catch (t) {
      if (t instanceof D) {
        n.logger.debug("[UsageProbe] attempt inside rate floor");
        if (o === e) {
          return (r == null ? undefined : r.payload) ?? null;
        } else {
          return null;
        }
      } else if (t instanceof v) {
        n.logger.debug("[UsageProbe] probe superseded before spawn");
        if (o === e) {
          l = Date.now();
          d = g;
        }
        if (o === e) {
          return (r == null ? undefined : r.payload) ?? null;
        } else {
          return null;
        }
      } else {
        n.logger.error("[UsageProbe] get_usage failed", {
          message: E(t instanceof Error ? t.message : String(t))
        });
        if (o === e) {
          l = Date.now();
          d = A(t) ? w : g;
        }
        if (o === e) {
          return (r == null ? undefined : r.payload) ?? null;
        } else {
          return null;
        }
      }
    } finally {
      if (o === e) {
        f = null;
      }
    }
  })();
  return f;
}
const W = {
  toPeriodWindow: h,
  fetchPeriodUsage: M,
  isDeterministicProbeFailure: A,
  resetUsageProbeState: I,
  ProbeShapeDriftError: T,
  ProbeRateFloorError: D
};
exports._test = W;
exports.probePeriodUsage = $;
exports.resetUsageProbeState = I;
//# sourceMappingURL=index.chunk-BhgfBRrm.js.map