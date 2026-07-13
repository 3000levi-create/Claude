"use strict";
(function() {
    try {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
        e.SENTRY_RELEASE = {
            id: "df1d8a339dfabcf359af7144fe142b59ff7d9a0f"
        }
    } catch {}
})();
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            a = new e.Error().stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "ff88900c-7cc9-4e1b-aa02-f3a6b04f1d31", e._sentryDebugIdIdentifier = "sentry-dbid-ff88900c-7cc9-4e1b-aa02-f3a6b04f1d31")
    })()
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
const k = require("electron"),
    t = require("./index.chunk-c42vKsva.js"),
    S = 1e4;
let n, r = null,
    h = 0,
    i, _ = !1,
    g = "pending";

function w() {
    return n
}

function M() {
    return g
}

function F() {
    return g !== "pending"
}

function T() {
    return r
}

function b() {
    return !t.getDeploymentMode().hasOrgPolicyBackend() || !t.isFeatureEnabled("2216901299")
}

function v(e) {
    return b() ? ((n !== void 0 || r !== null || g !== "pending" || i !== void 0) && m(), !0) : e === null ? r === null : g === "ok" && n !== void 0 && r === e
}
async function A(e, a) {
    const s = () => h !== e || a.aborted;
    try {
        const o = b();
        o && (n = void 0);
        const f = await t.getLastActiveOrg();
        if (s()) return "stale_epoch";
        if (!f) return t.logger.debug("[remoteManagedSettings] no active org; skipping fetch"), "no_org";
        if (f !== r && (n = void 0), r = f, o) return "gate_off";
        const c = t.CLAUDE_CODE_OAUTH_CONFIGS[t.getOAuthEnvironment()],
            d = await t.getApiTokenResult(c);
        if (s()) return "stale_epoch";
        if (!d.ok) return t.logger.debug("[remoteManagedSettings] no OAuth token; skipping fetch"), "no_token";
        if (d.subscriptionType === "max" || d.subscriptionType === "pro") return t.logger.debug(`[remoteManagedSettings] subscriptionType=${d.subscriptionType}; skipping fetch`), n = {}, "tier_skip";
        const p = `${c.apiHost}/api/claude_code/settings`,
            u = await k.net.fetch(p, {
                signal: a,
                headers: {
                    Authorization: `Bearer ${d.token}`,
                    "anthropic-beta": "oauth-2025-04-20"
                }
            });
        if (s()) return "stale_epoch";
        if (u.status === 404 || u.status === 204) return n = {}, "ok";
        if (!u.ok) return t.logger.warn(`[remoteManagedSettings] fetch returned ${u.status}`), "http_error";
        const l = await u.json();
        if (s()) return "stale_epoch";
        const y = l && typeof l.settings == "object" && l.settings !== null ? l.settings : {};
        return n = y, t.logger.info(`[remoteManagedSettings] fetched (${Object.keys(y).length} keys)`), "ok"
    } catch (o) {
        return t.logger.warn("[remoteManagedSettings] fetch failed: %o", o), "network_error"
    }
}
const E = new Set(["ok", "gate_off", "tier_skip"]);
async function R() {
    var d;
    const e = h,
        a = Date.now(),
        s = new AbortController,
        o = setTimeout(() => s.abort(), S);
    (d = o.unref) == null || d.call(o);
    const f = new Promise(p => s.signal.addEventListener("abort", () => p("timeout"), {
        once: !0
    }));
    let c;
    try {
        c = await Promise.race([A(e, s.signal), f])
    } finally {
        clearTimeout(o)
    }
    h !== e || c === "stale_epoch" || (g = E.has(c) ? "ok" : "failed", c !== "no_org" && t.logEvent("desktop_ccd_remote_managed_settings_fetch", {
        outcome: c,
        duration_ms: Date.now() - a,
        key_count: n ? Object.keys(n).length : null,
        organization_id: r
    }))
}

function D() {
    m()
}

function m() {
    h++, n = void 0, r = null, g = "pending", i = void 0
}

function O() {
    if (_ || (_ = !0, t.onAccountDetailsChange(() => {
            t.getLastActiveOrg().then(e => {
                e === null || e === r || (m(), O())
            }).catch(e => t.logger.warn("[remoteManagedSettings] org check failed: %o", e))
        })), b()) return v(null), i ?? Promise.resolve();
    if (g === "ok" && n !== void 0) return i ?? Promise.resolve();
    if (!i) {
        const e = R();
        i = e, e.finally(() => {
            i === e && (i = void 0)
        })
    }
    return i
}
exports.getFetchedForOrg = T;
exports.getFetchedRemoteManagedSettings = w;
exports.getFirstLoadOutcome = M;
exports.hasAttemptedRemoteManagedSettingsFetch = F;
exports.invalidateRemoteManagedSettingsForOrgSwitch = D;
exports.isRemoteManagedAuthoritativeFor = v;
exports.loadRemoteManagedSettings = O;
//# sourceMappingURL=index.chunk-BimimalO.js.map