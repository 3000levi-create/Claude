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
      e._sentryDebugIds[n] = "85addb59-77ba-4cf0-bc67-db2817d25478";
      e._sentryDebugIdIdentifier = "sentry-dbid-85addb59-77ba-4cf0-bc67-db2817d25478";
    }
  })();
} catch {}
const l = require("./index.chunk-c42vKsva.js");
const g = require("./index.chunk-CSQCh8Uk.js");
const q = require("./index.chunk-CvbeGVMj.js");
require("node:fs");
require("electron");
require("node:path");
require("node:fs/promises");
require("node:os");
require("node:path/posix");
require("node:path/win32");
require("node:util");
require("node:crypto");
require("node:stream");
require("node:stream/promises");
require("node:timers/promises");
require("node:child_process");
async function h() {
  const {
    extensions: e
  } = l.getManagedConfig();
  return {
    localMcpEnabled: await l.isLocalDevMcpEnabled(),
    extensionsEnabled: await l.isExtensionsEnabled(),
    isDesktopExtensionSignatureRequired: e.signatureRequired,
    isDesktopExtensionDirectoryEnabled: e.directoryEnabled
  };
}
function O(e) {
  return !e.localMcpEnabled || !e.extensionsEnabled || !!e.isDesktopExtensionSignatureRequired || !!e.isDesktopExtensionDirectoryEnabled;
}
function w(e) {
  const n = e.config;
  return e.isMcpb === true || typeof (n == null ? undefined : n.command) == "string";
}
function S(e, n, c) {
  return !n.localMcpEnabled || !!e.isMcpb && (!n.extensionsEnabled || !!n.isDesktopExtensionSignatureRequired || !!n.isDesktopExtensionDirectoryEnabled && !c);
}
function E(e, n) {
  return `plugin:${e}:${n}`;
}
function N(e) {
  return q.createSdkMcpServer({
    name: e,
    tools: []
  });
}
function $(e, n, c, a, i) {
  const t = {};
  const o = c.filter(w).filter(s => S(s, a, i));
  if (o.length > 0) {
    for (const s of o) {
      t[E(e, s.name)] = N(s.name);
    }
    l.logger.info(`Plugin "${n}" has blocked MCP servers (${o.map(s => s.name).join(", ")}). Overriding with no-ops.`);
  }
  return t;
}
let d = {};
let m = 0;
let p = "";
let f = null;
let y = 0;
const x = 120000;
function F(e, n, c, a) {
  if (p === `${e}:${n}`) {
    d = {
      ...d,
      [c]: a
    };
    m = 0;
    y++;
  }
}
function L(e) {
  if (e !== p) {
    d = {};
    m = 0;
    p = e;
    f = null;
  }
  if (f || Date.now() - m < x) {
    return;
  }
  const n = e;
  const c = y;
  const a = g.remotePluginManager.fetchEnabledState().then(({
    state: i
  }) => {
    if (p === n && y === c) {
      if (Object.keys(i).length > 0 || Object.keys(d).length === 0) {
        d = i;
      }
      m = Date.now();
    }
  }).catch(i => {
    l.logger.warn("[rpmPluginSetup] Background remote enabled-state refresh failed; keeping last-known value:", i);
  }).finally(() => {
    if (f === a) {
      f = null;
    }
  });
  f = a;
}
async function v({
  accountId: e,
  orgId: n,
  getPaths: c,
  prefetchedEnabledState: a
}) {
  if (!l.isFeatureEnabled("2340532315")) {
    return {
      paths: [],
      options: undefined,
      stats: {
        enabled_state_source: "sparkplug-off"
      }
    };
  }
  const i = e && n ? await l.getEnabledPluginsMap(e, n) : {};
  let t;
  let o;
  let s;
  if (l.isFeatureEnabled("4274871493")) {
    const u = Date.now();
    const {
      state: _,
      source: R
    } = await g.remotePluginManager.fetchEnabledState(a);
    s = Date.now() - u;
    t = _;
    o = R;
  } else {
    const u = `${e ?? ""}:${n ?? ""}`;
    t = u === p ? d : {};
    L(u);
    o = "cache";
    s = 0;
  }
  const r = {
    enabledPluginsMap: {
      ...i,
      ...t
    }
  };
  const b = {};
  const M = Date.now();
  return {
    paths: await c(r, b),
    options: r,
    stats: {
      enabled_state_source: o,
      enabled_state_ms: s,
      fs_scan_ms: Date.now() - M,
      manifest_plugin_count: b.manifestPluginCount
    }
  };
}
async function k({
  localPlugins: e,
  remotePluginPaths: n,
  logPrefix: c
}) {
  const a = {};
  if (e.length === 0 && n.length === 0) {
    return a;
  }
  let i = false;
  try {
    const t = await h();
    i = O(t);
    if (!i) {
      return a;
    }
    const o = t.isDesktopExtensionDirectoryEnabled && n.length > 0 ? await g.remotePluginManager.getOrgMarketplaceNames() : null;
    const s = await Promise.allSettled([...e.map(async r => ({
      name: r.name,
      id: r.id,
      isFromOrgPluginRegistry: false,
      mcpServers: await l.localPluginsReader.getAllMcpServersFromPlugin(r)
    })), ...n.map(async r => ({
      name: r.name,
      id: r.id,
      isFromOrgPluginRegistry: o !== null && !!r.marketplaceName && o.has(r.marketplaceName),
      mcpServers: await g.remotePluginManager.getAllMcpServersFromPlugin(r.id)
    }))]);
    for (const r of s) {
      if (r.status === "rejected") {
        throw new Error(`${c} Plugin MCP scan failed while an MCP policy is active; refusing to start session with unenforced plugin`, {
          cause: r.reason
        });
      }
      const {
        name: b,
        id: M,
        mcpServers: P,
        isFromOrgPluginRegistry: u
      } = r.value;
      Object.assign(a, $(b, M, P, t, u));
    }
  } catch (t) {
    if (i) {
      throw t;
    }
    l.logger.warn(`${c} Failed to build plugin MCP noop overrides:`, t);
  }
  return a;
}
async function D({
  localPlugins: e,
  remotePluginPaths: n,
  logPrefix: c
}) {
  const a = new Map();
  const i = [];
  for (const t of n) {
    const o = t.marketplaceName ? `${t.name}@${t.marketplaceName}` : t.id;
    if (l.isOfficialMarketplacePlugin(o)) {
      i.push({
        pluginId: o,
        pluginName: t.name,
        scan: () => g.remotePluginManager.getAllMcpServersFromPlugin(t.id)
      });
    }
  }
  for (const t of e) {
    if (l.isOfficialMarketplacePlugin(t.id)) {
      i.push({
        pluginId: t.id,
        pluginName: t.name,
        scan: () => l.localPluginsReader.getAllMcpServersFromPlugin(t)
      });
    }
  }
  if (i.length !== 0) {
    await Promise.all(i.map(async t => {
      try {
        const o = await t.scan();
        for (const s of o) {
          const r = l.normalizeMcpServerNameForCC(E(t.pluginName, s.name));
          a.set(r, {
            pluginId: t.pluginId,
            serverName: s.name
          });
        }
      } catch (o) {
        l.logger.warn(`${c} Failed to scan official plugin "${t.pluginId}" for MCP servers (telemetry only):`, o);
      }
    }));
  }
  return a;
}
const A = Object.freeze(Object.defineProperty({
  __proto__: null,
  buildOfficialPluginMcpServerMap: D,
  buildPluginNoopMcpOverrides: k,
  fetchRemotePluginPaths: v,
  updateRemoteEnabledMapCacheEntry: F
}, Symbol.toStringTag, {
  value: "Module"
}));
exports.buildOfficialPluginMcpServerMap = D;
exports.buildPluginNoopMcpOverrides = k;
exports.fetchRemotePluginPaths = v;
exports.getLocalMcpPolicyFlags = h;
exports.isLocalMcp = w;
exports.isPluginLocalMcpBlockedByPolicy = S;
exports.pluginMcpServerKey = E;
exports.rpmPluginSetup = A;
//# sourceMappingURL=index.chunk-CflLR8yh.js.map