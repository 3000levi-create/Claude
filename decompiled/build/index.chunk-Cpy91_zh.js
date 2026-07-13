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
    var n = new o.Error().stack;
    if (n) {
      o._sentryDebugIds = o._sentryDebugIds || {};
      o._sentryDebugIds[n] = "c39ce080-a2ac-4826-88e7-bcb7f1e9eeb6";
      o._sentryDebugIdIdentifier = "sentry-dbid-c39ce080-a2ac-4826-88e7-bcb7f1e9eeb6";
    }
  })();
} catch {}
const t = require("./index.chunk-c42vKsva.js");
const h = require("./index.chunk-CflLR8yh.js");
const E = new Set(["CLAUDE_PROJECT_DIR", "CLAUDE_PLUGIN_DATA"]);
function M(o, n, i, s, r) {
  return o.replace(/\$\{([A-Za-z_][A-Za-z0-9_]*(?::-[^}]*)?)\}/g, (l, u) => {
    const a = u.indexOf(":-");
    const c = a === -1 ? u : u.slice(0, a);
    const g = a === -1 ? undefined : u.slice(a + 2);
    if (E.has(c)) {
      s.push(c);
      return l;
    }
    if (c === "PATH" && r) {
      return "${PATH}";
    }
    const d = n[c];
    if (d !== undefined) {
      return d;
    } else if (g !== undefined) {
      return g;
    } else {
      i.push(c);
      return l;
    }
  });
}
function v(o, n, i, s) {
  var P;
  const r = [];
  const l = [];
  const u = n.replace(/\\/g, "/");
  const a = {
    ...t.getDefaultEnvironment(),
    CLAUDE_PLUGIN_ROOT: u
  };
  const c = (e, p = false) => M(e.replace(/\$\{CLAUDE_PLUGIN_ROOT\}/g, () => u), a, r, l, p);
  const g = {
    CLAUDE_PLUGIN_ROOT: n
  };
  for (const [e, p] of Object.entries(o.env ?? {})) {
    g[e] = c(p, e === "PATH");
  }
  const d = {
    ...o,
    command: c(o.command),
    args: (P = o.args) == null ? undefined : P.map(e => c(e)),
    env: g
  };
  if (r.length > 0) {
    t.logger.warn(`[PluginMcpHostConfig] Plugin "${i}" server "${s}": config references environment variables outside the MCP stdio safelist: ${[...new Set(r)].join(", ")} — left unexpanded (the desktop host does not expose arbitrary host env to plugin servers)`);
  }
  if (l.length > 0) {
    t.logger.warn(`[PluginMcpHostConfig] Plugin "${i}" server "${s}": config references ${[...new Set(l)].join(", ")} — CLI sessions resolve these per-session, but the desktop host bridge has no project or plugin-data directory; left unexpanded`);
  }
  return d;
}
function w(o) {
  const n = new Set();
  const i = [o.command, ...(o.args ?? []), ...Object.values(o.env ?? {})];
  for (const s of i) {
    for (const r of s.matchAll(/\$\{user_config\.([^}]*)\}/g)) {
      n.add(r[1]);
    }
  }
  return [...n];
}
const m = 4;
const _ = ["documents"];
function $(o, n, i) {
  const s = t.getFeatureValue("227459766", _);
  let r;
  if (Array.isArray(s) && s.every(a => typeof a == "string")) {
    r = s;
  } else {
    t.logger.warn(`[PluginMcpHostConfig] host-bridge exclusion override is not a string array (got ${typeof s}) — using the shipped default list`);
    r = _;
  }
  const l = i ? `${o}@${i}` : n;
  if (r.includes(n) || r.includes(l) || r.includes(o) && !n.endsWith(`@${t.LOCAL_UPLOADS_MARKETPLACE}`)) {
    t.logger.info(`[PluginMcpHostConfig] Plugin "${n}" is excluded from host bridging by name — not bridging its MCP servers; the session-side copies serve instead`);
    return true;
  } else {
    return false;
  }
}
async function L(o, n, i, s, r, l, u, a, c = new t.PQueue({
  concurrency: m
})) {
  if ($(o, n, i)) {
    return [];
  }
  const g = s.filter(h.isLocalMcp).filter(e => !h.isPluginLocalMcpBlockedByPolicy(e, u, a));
  const d = await Promise.all(g.map(e => c.add(() => P(e))));
  async function P(e) {
    const p = h.pluginMcpServerKey(o, e.name);
    try {
      if (!e.isMcpb) {
        const f = e.config;
        if (!t.isLocalMcpServerConfig(f)) {
          t.logger.warn(`[PluginMcpHostConfig] Plugin "${n}" server "${e.name}": config is not a valid stdio spawn config, skipping host proxy`);
          return null;
        }
        const C = w(f);
        if (C.length > 0) {
          t.logger.warn(`[PluginMcpHostConfig] Plugin "${n}" server "${e.name}": config references plugin user configuration (${C.join(", ")}) — user_config is not supported on the desktop host bridge; dropping server`);
          return null;
        } else {
          return {
            key: p,
            config: v(f, r, n, e.name)
          };
        }
      }
      if (!e.mcpbManifest) {
        t.logger.warn(`[PluginMcpHostConfig] Plugin "${n}" MCPB server "${e.name}": missing parsed manifest, skipping host proxy`);
        return null;
      }
      const b = Object.entries(e.mcpbManifest.user_config ?? {}).filter(([, f]) => f.required === true && f.default === undefined).map(([f]) => f);
      if (b.length > 0) {
        t.logger.warn(`[PluginMcpHostConfig] Plugin "${n}" MCPB server "${e.name}": manifest requires user configuration (${b.join(", ")}) with no defaults — user_config is not supported on the desktop host bridge; dropping server`);
        return null;
      }
      const y = await t.resolveMcpbToHostConfig(e.mcpbManifest, e.hostFilesystemLocation, l);
      if (y) {
        return {
          key: p,
          config: v(y, r, n, e.name)
        };
      } else {
        t.logger.warn(`[PluginMcpHostConfig] Plugin "${n}" MCPB server "${e.name}": manifest did not resolve to a stdio config, skipping host proxy`);
        return null;
      }
    } catch (b) {
      t.logger.warn(`[PluginMcpHostConfig] Plugin "${n}" server "${e.name}": failed to build host proxy target:`, b);
      return null;
    }
  }
  return d.filter(e => e !== null);
}
exports.MCPB_RESOLVE_CONCURRENCY = m;
exports.buildPluginMcpHostTargets = L;
exports.expandPluginRoot = v;
//# sourceMappingURL=index.chunk-Cpy91_zh.js.map