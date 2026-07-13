"use strict";
(function() {
    try {
        var o = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
        o.SENTRY_RELEASE = {
            id: "df1d8a339dfabcf359af7144fe142b59ff7d9a0f"
        }
    } catch {}
})();
try {
    (function() {
        var o = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            n = new o.Error().stack;
        n && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[n] = "c39ce080-a2ac-4826-88e7-bcb7f1e9eeb6", o._sentryDebugIdIdentifier = "sentry-dbid-c39ce080-a2ac-4826-88e7-bcb7f1e9eeb6")
    })()
} catch {}
const t = require("./index.chunk-c42vKsva.js"),
    h = require("./index.chunk-CflLR8yh.js"),
    E = new Set(["CLAUDE_PROJECT_DIR", "CLAUDE_PLUGIN_DATA"]);

function M(o, n, i, s, r) {
    return o.replace(/\$\{([A-Za-z_][A-Za-z0-9_]*(?::-[^}]*)?)\}/g, (l, u) => {
        const a = u.indexOf(":-"),
            c = a === -1 ? u : u.slice(0, a),
            g = a === -1 ? void 0 : u.slice(a + 2);
        if (E.has(c)) return s.push(c), l;
        if (c === "PATH" && r) return "${PATH}";
        const d = n[c];
        return d !== void 0 ? d : g !== void 0 ? g : (i.push(c), l)
    })
}

function v(o, n, i, s) {
    var P;
    const r = [],
        l = [],
        u = n.replace(/\\/g, "/"),
        a = {
            ...t.getDefaultEnvironment(),
            CLAUDE_PLUGIN_ROOT: u
        },
        c = (e, p = !1) => M(e.replace(/\$\{CLAUDE_PLUGIN_ROOT\}/g, () => u), a, r, l, p),
        g = {
            CLAUDE_PLUGIN_ROOT: n
        };
    for (const [e, p] of Object.entries(o.env ?? {})) g[e] = c(p, e === "PATH");
    const d = {
        ...o,
        command: c(o.command),
        args: (P = o.args) == null ? void 0 : P.map(e => c(e)),
        env: g
    };
    return r.length > 0 && t.logger.warn(`[PluginMcpHostConfig] Plugin "${i}" server "${s}": config references environment variables outside the MCP stdio safelist: ${[...new Set(r)].join(", ")} — left unexpanded (the desktop host does not expose arbitrary host env to plugin servers)`), l.length > 0 && t.logger.warn(`[PluginMcpHostConfig] Plugin "${i}" server "${s}": config references ${[...new Set(l)].join(", ")} — CLI sessions resolve these per-session, but the desktop host bridge has no project or plugin-data directory; left unexpanded`), d
}

function w(o) {
    const n = new Set,
        i = [o.command, ...o.args ?? [], ...Object.values(o.env ?? {})];
    for (const s of i)
        for (const r of s.matchAll(/\$\{user_config\.([^}]*)\}/g)) n.add(r[1]);
    return [...n]
}
const m = 4,
    _ = ["documents"];

function $(o, n, i) {
    const s = t.getFeatureValue("227459766", _);
    let r;
    Array.isArray(s) && s.every(a => typeof a == "string") ? r = s : (t.logger.warn(`[PluginMcpHostConfig] host-bridge exclusion override is not a string array (got ${typeof s}) — using the shipped default list`), r = _);
    const l = i ? `${o}@${i}` : n;
    return r.includes(n) || r.includes(l) || r.includes(o) && !n.endsWith(`@${t.LOCAL_UPLOADS_MARKETPLACE}`) ? (t.logger.info(`[PluginMcpHostConfig] Plugin "${n}" is excluded from host bridging by name — not bridging its MCP servers; the session-side copies serve instead`), !0) : !1
}
async function L(o, n, i, s, r, l, u, a, c = new t.PQueue({
    concurrency: m
})) {
    if ($(o, n, i)) return [];
    const g = s.filter(h.isLocalMcp).filter(e => !h.isPluginLocalMcpBlockedByPolicy(e, u, a)),
        d = await Promise.all(g.map(e => c.add(() => P(e))));
    async function P(e) {
        const p = h.pluginMcpServerKey(o, e.name);
        try {
            if (!e.isMcpb) {
                const f = e.config;
                if (!t.isLocalMcpServerConfig(f)) return t.logger.warn(`[PluginMcpHostConfig] Plugin "${n}" server "${e.name}": config is not a valid stdio spawn config, skipping host proxy`), null;
                const C = w(f);
                return C.length > 0 ? (t.logger.warn(`[PluginMcpHostConfig] Plugin "${n}" server "${e.name}": config references plugin user configuration (${C.join(", ")}) — user_config is not supported on the desktop host bridge; dropping server`), null) : {
                    key: p,
                    config: v(f, r, n, e.name)
                }
            }
            if (!e.mcpbManifest) return t.logger.warn(`[PluginMcpHostConfig] Plugin "${n}" MCPB server "${e.name}": missing parsed manifest, skipping host proxy`), null;
            const b = Object.entries(e.mcpbManifest.user_config ?? {}).filter(([, f]) => f.required === !0 && f.default === void 0).map(([f]) => f);
            if (b.length > 0) return t.logger.warn(`[PluginMcpHostConfig] Plugin "${n}" MCPB server "${e.name}": manifest requires user configuration (${b.join(", ")}) with no defaults — user_config is not supported on the desktop host bridge; dropping server`), null;
            const y = await t.resolveMcpbToHostConfig(e.mcpbManifest, e.hostFilesystemLocation, l);
            return y ? {
                key: p,
                config: v(y, r, n, e.name)
            } : (t.logger.warn(`[PluginMcpHostConfig] Plugin "${n}" MCPB server "${e.name}": manifest did not resolve to a stdio config, skipping host proxy`), null)
        } catch (b) {
            return t.logger.warn(`[PluginMcpHostConfig] Plugin "${n}" server "${e.name}": failed to build host proxy target:`, b), null
        }
    }
    return d.filter(e => e !== null)
}
exports.MCPB_RESOLVE_CONCURRENCY = m;
exports.buildPluginMcpHostTargets = L;
exports.expandPluginRoot = v;
//# sourceMappingURL=index.chunk-Cpy91_zh.js.map