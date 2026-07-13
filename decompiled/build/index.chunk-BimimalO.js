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
    var a = new e.Error().stack;
    if (a) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[a] = "ff88900c-7cc9-4e1b-aa02-f3a6b04f1d31";
      e._sentryDebugIdIdentifier = "sentry-dbid-ff88900c-7cc9-4e1b-aa02-f3a6b04f1d31";
    }
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
const k = require("electron");
const t = require("./index.chunk-c42vKsva.js");
const S = 10000;
let n;
let r = null;
let h = 0;
let i;
let _ = false;
let g = "pending";
function w() {
  return n;
}
function M() {
  return g;
}
function F() {
  return g !== "pending";
}
function T() {
  return r;
}
function b() {
  return !t.getDeploymentMode().hasOrgPolicyBackend() || !t.isFeatureEnabled("2216901299");
}
function v(e) {
  if (b()) {
    if (n !== undefined || r !== null || g !== "pending" || i !== undefined) {
      m();
    }
    return true;
  } else if (e === null) {
    return r === null;
  } else {
    return g === "ok" && n !== undefined && r === e;
  }
}
async function A(e, a) {
  const s = () => h !== e || a.aborted;
  try {
    const o = b();
    if (o) {
      n = undefined;
    }
    const f = await t.getLastActiveOrg();
    if (s()) {
      return "stale_epoch";
    }
    if (!f) {
      t.logger.debug("[remoteManagedSettings] no active org; skipping fetch");
      return "no_org";
    }
    if (f !== r) {
      n = undefined;
    }
    r = f;
    if (o) {
      return "gate_off";
    }
    const c = t.CLAUDE_CODE_OAUTH_CONFIGS[t.getOAuthEnvironment()];
    const d = await t.getApiTokenResult(c);
    if (s()) {
      return "stale_epoch";
    }
    if (!d.ok) {
      t.logger.debug("[remoteManagedSettings] no OAuth token; skipping fetch");
      return "no_token";
    }
    if (d.subscriptionType === "max" || d.subscriptionType === "pro") {
      t.logger.debug(`[remoteManagedSettings] subscriptionType=${d.subscriptionType}; skipping fetch`);
      n = {};
      return "tier_skip";
    }
    const p = `${c.apiHost}/api/claude_code/settings`;
    const u = await k.net.fetch(p, {
      signal: a,
      headers: {
        Authorization: `Bearer ${d.token}`,
        "anthropic-beta": "oauth-2025-04-20"
      }
    });
    if (s()) {
      return "stale_epoch";
    }
    if (u.status === 404 || u.status === 204) {
      n = {};
      return "ok";
    }
    if (!u.ok) {
      t.logger.warn(`[remoteManagedSettings] fetch returned ${u.status}`);
      return "http_error";
    }
    const l = await u.json();
    if (s()) {
      return "stale_epoch";
    }
    const y = l && typeof l.settings == "object" && l.settings !== null ? l.settings : {};
    n = y;
    t.logger.info(`[remoteManagedSettings] fetched (${Object.keys(y).length} keys)`);
    return "ok";
  } catch (o) {
    t.logger.warn("[remoteManagedSettings] fetch failed: %o", o);
    return "network_error";
  }
}
const E = new Set(["ok", "gate_off", "tier_skip"]);
async function R() {
  var d;
  const e = h;
  const a = Date.now();
  const s = new AbortController();
  const o = setTimeout(() => s.abort(), S);
  if ((d = o.unref) != null) {
    d.call(o);
  }
  const f = new Promise(p => s.signal.addEventListener("abort", () => p("timeout"), {
    once: true
  }));
  let c;
  try {
    c = await Promise.race([A(e, s.signal), f]);
  } finally {
    clearTimeout(o);
  }
  if (h === e && c !== "stale_epoch") {
    g = E.has(c) ? "ok" : "failed";
    if (c !== "no_org") {
      t.logEvent("desktop_ccd_remote_managed_settings_fetch", {
        outcome: c,
        duration_ms: Date.now() - a,
        key_count: n ? Object.keys(n).length : null,
        organization_id: r
      });
    }
  }
}
function D() {
  m();
}
function m() {
  h++;
  n = undefined;
  r = null;
  g = "pending";
  i = undefined;
}
function O() {
  if (!_) {
    _ = true;
    t.onAccountDetailsChange(() => {
      t.getLastActiveOrg().then(e => {
        if (e !== null && e !== r) {
          m();
          O();
        }
      }).catch(e => t.logger.warn("[remoteManagedSettings] org check failed: %o", e));
    });
  }
  if (b()) {
    v(null);
    return i ?? Promise.resolve();
  }
  if (g === "ok" && n !== undefined) {
    return i ?? Promise.resolve();
  }
  if (!i) {
    const e = R();
    i = e;
    e.finally(() => {
      if (i === e) {
        i = undefined;
      }
    });
  }
  return i;
}
exports.getFetchedForOrg = T;
exports.getFetchedRemoteManagedSettings = w;
exports.getFirstLoadOutcome = M;
exports.hasAttemptedRemoteManagedSettingsFetch = F;
exports.invalidateRemoteManagedSettingsForOrgSwitch = D;
exports.isRemoteManagedAuthoritativeFor = v;
exports.loadRemoteManagedSettings = O;
//# sourceMappingURL=index.chunk-BimimalO.js.map