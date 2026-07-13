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
      e._sentryDebugIds[t] = "46f01edb-273b-4896-a3a8-48edd8e8c692";
      e._sentryDebugIdIdentifier = "sentry-dbid-46f01edb-273b-4896-a3a8-48edd8e8c692";
    }
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
const F = require("node:path");
const r = require("./index.chunk-c42vKsva.js");
const C = require("./index.chunk-CflLR8yh.js");
const M = require("./index.chunk-bem6RoHM.js");
const y = require("./index.chunk-CSQCh8Uk.js");
const R = require("./index.chunk-Cpy91_zh.js");
const l = "[PluginBridgeMcp]";
const A = {
  collectPluginBridgeMcpConfigs: L
};
const q = 2000;
const P = new Set();
function j(e) {
  P.add(e);
  return () => P.delete(e);
}
function K() {
  for (const e of P) {
    try {
      e();
    } catch (t) {
      r.logger.warn(`${l} change listener failed:`, t);
    }
  }
}
function U() {
  return r.isFeatureEnabled("3555657854");
}
const g = () => ({
  configs: {},
  orgRegistryKeys: new Set()
});
async function L() {
  if (!U() || !r.getShrimpProbeModeRequested()) {
    return g();
  }
  try {
    const e = r.getAccountId() ?? undefined;
    const t = (await r.getLastActiveOrg()) ?? undefined;
    if (!e || !t) {
      r.logger.info(`${l} no account/org yet — skipping plugin scan`);
      return g();
    }
    const a = await C.getLocalMcpPolicyFlags();
    if (!a.localMcpEnabled) {
      r.logger.info(`${l} local MCP disabled by policy — no plugin servers bridged`);
      return g();
    }
    let i;
    try {
      ({
        paths: i
      } = await C.fetchRemotePluginPaths({
        accountId: e,
        orgId: t,
        getPaths: n => y.remotePluginManager.getHostPluginPaths(n)
      }));
    } catch (n) {
      r.logger.warn(`${l} remote plugin enumeration failed — keeping previously-applied pool`, n);
      return null;
    }
    const o = new Set(i.map(n => n.name));
    const c = `@${r.LOCAL_UPLOADS_MARKETPLACE}`;
    let u;
    try {
      u = await r.localPluginsReader.getEnabledLocalPlugins({
        accountId: e,
        orgId: t
      });
    } catch (n) {
      r.logger.warn(`${l} local plugin enumeration failed — keeping previously-applied pool`, n);
      return null;
    }
    const w = u.filter(n => n.id.endsWith(c) || !o.has(n.name));
    if (i.length === 0 && w.length === 0) {
      return g();
    }
    let d = null;
    if (a.isDesktopExtensionDirectoryEnabled && i.length > 0 && (d = await y.remotePluginManager.getOrgMarketplaceNames(), d === null)) {
      r.logger.warn(`${l} org-marketplace classification unavailable — keeping previously-applied pool`);
      return null;
    }
    const p = await Promise.allSettled([...w.map(async n => ({
      name: n.name,
      id: n.id,
      marketplaceName: undefined,
      isFromOrgPluginRegistry: false,
      mcpServers: await r.localPluginsReader.getAllMcpServersFromPlugin(n),
      pluginDir: n.installPath
    })), ...i.map(async n => ({
      name: n.name,
      id: n.id,
      marketplaceName: n.marketplaceName,
      isFromOrgPluginRegistry: d !== null && !!n.marketplaceName && d.has(n.marketplaceName),
      mcpServers: await y.remotePluginManager.getAllMcpServersFromPlugin(n.id),
      pluginDir: n.installPath
    }))]);
    if (p.length > 0 && p.every(n => n.status === "rejected")) {
      r.logger.warn(`${l} every plugin MCP scan failed — keeping previously-applied pool`);
      return null;
    }
    const O = new r.PQueue({
      concurrency: R.MCPB_RESOLVE_CONCURRENCY
    });
    const _ = await Promise.all(p.map(async n => {
      if (n.status === "rejected") {
        r.logger.warn(`${l} plugin MCP scan failed, skipping plugin:`, n.reason);
        return [];
      }
      const {
        name: s,
        id: $,
        marketplaceName: D,
        mcpServers: S,
        isFromOrgPluginRegistry: b,
        pluginDir: m
      } = n.value;
      if (S.length === 0 || !m) {
        return [];
      } else {
        return (await R.buildPluginMcpHostTargets(s, $, D, S, m, F.join(m, ".mcpb-cache"), a, b, O)).map(I => ({
          ...I,
          isFromOrgPluginRegistry: b
        }));
      }
    }));
    const f = {};
    const v = new Set();
    for (const n of _) {
      for (const s of n) {
        if (f[s.key]) {
          r.logger.warn(`${l} duplicate plugin MCP server key ${s.key} (same plugin name from two sources) — keeping the first`);
          continue;
        }
        f[s.key] = s.config;
        if (s.isFromOrgPluginRegistry) {
          v.add(s.key);
        }
      }
    }
    return {
      configs: f,
      orgRegistryKeys: v
    };
  } catch (e) {
    r.logger.warn(`${l} failed to collect plugin MCP configs:`, e);
    return null;
  }
}
let x = 0;
let k = 0;
async function N() {
  const e = ++x;
  const t = await L();
  const a = M.LocalMcpServerManager.getPluginMcpInstance();
  if (t === null) {
    return {
      keys: a.getRegisteredPluginMcpServerNames(),
      changed: false
    };
  }
  if (e < k) {
    return {
      keys: a.getRegisteredPluginMcpServerNames(),
      changed: false
    };
  }
  k = e;
  const {
    configs: i,
    orgRegistryKeys: o
  } = t;
  const {
    changed: c
  } = await a.replacePluginMcpConfigs(i, o);
  return {
    keys: Object.keys(i),
    changed: c
  };
}
const E = 15000;
async function G() {
  const e = N();
  let t;
  const a = await Promise.race([e.then(o => ({
    result: o
  })), new Promise(o => {
    t = setTimeout(() => o({
      timedOut: true
    }), E);
  })]).finally(() => clearTimeout(t));
  if ("result" in a) {
    return a.result.keys;
  }
  const i = M.LocalMcpServerManager.getPluginMcpInstance().getRegisteredPluginMcpServerNames();
  r.logger.warn(`${l} plugin MCP apply exceeded ${E}ms — announcing ${i.length} already-registered server(s); will reload bridge if the late result differs`);
  e.then(async ({
    changed: o
  }) => {
    if (!o) {
      return;
    }
    const {
      reloadRemoteToolsDevice: c
    } = await Promise.resolve().then(() => require("./index.chunk-c42vKsva.js")).then(u => u.remoteToolsDeviceClient);
    c();
  }).catch(o => {
    r.logger.warn(`${l} late plugin MCP apply failed:`, o);
  });
  return i;
}
function H() {
  const e = M.LocalMcpServerManager.getPluginMcpInstance();
  const t = new Set(e.getRegisteredPluginMcpServerNames());
  return e.getConnectedServersInfo().filter(a => t.has(a.name)).map(a => ({
    name: a.name,
    tools: a.tools.map(i => ({
      name: i.name,
      description: i.description,
      inputSchema: i.inputSchema,
      annotations: i.annotations,
      meta: i._meta
    }))
  }));
}
function Y() {
  K();
}
let B;
function h() {
  clearTimeout(B);
  B = setTimeout(() => {
    Q();
  }, q);
}
async function Q() {
  try {
    const {
      changed: e
    } = await N();
    if (e) {
      const {
        reloadRemoteToolsDevice: t
      } = await Promise.resolve().then(() => require("./index.chunk-c42vKsva.js")).then(a => a.remoteToolsDeviceClient);
      t();
    }
  } catch (e) {
    r.logger.warn(`${l} reload check failed:`, e);
  }
}
let T = false;
function W() {
  if (!T) {
    T = true;
    r.onFeatureChange("3555657854", h);
    r.onFeatureChange("227459766", h);
  }
}
exports._test = A;
exports.applyPluginBridgeMcpConfigsBounded = G;
exports.getPluginBridgeMcpServersForRenderer = H;
exports.notifyPluginBridgeMcpServersChanged = Y;
exports.onPluginBridgeMcpServersChanged = j;
exports.schedulePluginBridgeMcpReload = h;
exports.watchPluginBridgeMcpGate = W;
//# sourceMappingURL=index.chunk-DSw1PzNs.js.map