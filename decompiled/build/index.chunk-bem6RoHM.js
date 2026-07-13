"use strict";

(function () {
  try {
    var i = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    i.SENTRY_RELEASE = {
      id: "df1d8a339dfabcf359af7144fe142b59ff7d9a0f"
    };
  } catch {}
})();
try {
  (function () {
    var i = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    var e = new i.Error().stack;
    if (e) {
      i._sentryDebugIds = i._sentryDebugIds || {};
      i._sentryDebugIds[e] = "bed2ca34-d307-405a-9b53-ca7d5e9dab12";
      i._sentryDebugIdIdentifier = "sentry-dbid-bed2ca34-d307-405a-9b53-ca7d5e9dab12";
    }
  })();
} catch {}
const j = require("node:path");
const G = require("node:url");
const E = require("./index.chunk-CvbeGVMj.js");
const s = require("./index.chunk-c42vKsva.js");
const $ = require("./index.chunk-BLNdD7Yt.js");
function D(i) {
  return i.replace(/[^a-zA-Z0-9_-]+/g, "_");
}
const K = ["claude_in_chrome", "claude_browser", "claude_preview", "computer_use", "framebuffer", "plugins", "skills", "mcp_registry", "scheduled_tasks", "cowork", "session_info", "dispatch"];
function m(i) {
  if (typeof i != "string") {
    return m(i.uuid) || m(i.name);
  }
  const e = D(i).toLowerCase().replace(/-/g, "_");
  return K.some(n => e.startsWith(n));
}
function q(i, e) {
  let n = 0;
  return {
    kept: Object.fromEntries(Object.entries(i).filter(([o]) => m(o) ? (n++, s.logger.warn(`Dropping ${e} MCP server "${o}" — name collides with a trusted internal server prefix (reservedServerNames.ts)`), false) : true)),
    dropped: n
  };
}
function A(i, e) {
  return i.filter(n => m(n) ? (s.logger.warn(`[${e}] Dropping MCP server "${n.name}" (${n.uuid}) — name or uuid collides with a trusted internal server prefix`), false) : true);
}
function P(i) {
  if (i.type === "object" || "properties" in i) {
    return true;
  }
  const e = i.allOf ?? i.anyOf ?? i.oneOf;
  if (e) {
    return e.every(n => P(n));
  } else {
    return false;
  }
}
function b(i) {
  const e = i.type;
  const n = i.description;
  let t;
  if (e === "string") {
    const o = i.enum;
    if (o && o.length > 0) {
      t = s.enumType(o);
    } else {
      t = s.preprocessType(r => typeof r == "number" && Number.isSafeInteger(r) ? String(r) : r, s.stringType());
    }
  } else if (e === "number" || e === "integer") {
    let o = s.numberType();
    if (typeof i.minimum == "number") {
      o = o.min(i.minimum);
    }
    if (typeof i.maximum == "number") {
      o = o.max(i.maximum);
    }
    t = o;
  } else if (e === "boolean") {
    t = s.preprocessType(o => o === "true" ? true : o === "false" ? false : o, s.booleanType());
  } else if (e === "array") {
    const o = i.items;
    t = s.arrayType(o ? b(o) : s.unknownType());
  } else if (e === "object") {
    const o = i.properties;
    if (o) {
      const r = i.required ?? [];
      const c = {};
      for (const [a, g] of Object.entries(o)) {
        const u = b(g);
        c[a] = r.includes(a) ? u : u.optional();
      }
      t = s.objectType(c).passthrough();
    } else {
      t = s.objectType({}).passthrough();
    }
  } else if ("properties" in i) {
    const o = i.properties;
    if (o) {
      const r = i.required ?? [];
      const c = {};
      for (const [a, g] of Object.entries(o)) {
        const u = b(g);
        c[a] = r.includes(a) ? u : u.optional();
      }
      t = s.objectType(c).passthrough();
    } else {
      t = s.objectType({}).passthrough();
    }
  } else if (P(i)) {
    t = s.objectType({}).passthrough();
  } else {
    t = s.unknownType();
  }
  if (n) {
    t = t.describe(n);
  }
  if ("default" in i && i.default !== undefined) {
    t = t.default(i.default);
  }
  return t;
}
function L(i) {
  const e = i.properties || {};
  const n = i.required ?? [];
  const t = {};
  for (const [o, r] of Object.entries(e)) {
    const c = b(r);
    t[o] = n.includes(o) ? c : c.optional();
  }
  return t;
}
function F(i, e) {
  if (i === e) {
    return true;
  }
  if (i.length !== e.length) {
    return false;
  }
  for (let n = 0; n < i.length; n++) {
    if (!Object.is(i[n], e[n])) {
      return false;
    }
  }
  return true;
}
function O(i) {
  var n;
  var t;
  const e = (t = (n = i._meta) == null ? undefined : n.ui) == null ? undefined : t.visibility;
  if (Array.isArray(e)) {
    return e.includes("model");
  } else {
    return true;
  }
}
const U = 8;
let y = null;
let h = null;
const S = "pluginRuntime:";
class C {
  constructor(e = s.getMcpServersConfig, n = true, t = "user_config") {
    this.advertiseRoots = n;
    this.serverSource = t;
    this.connections = new Map();
    this.connectionsGeneration = 0;
    this.pending = new Map();
    this.rootsGetters = new Map();
    this.runtimeRootsByKey = new Map();
    this.pluginMcpConfigs = new Map();
    this.runtimePluginMcpConfigs = new Map();
    this.orgRegistryPluginKeys = new Set();
    this.pluginReplaceMutex = new s.Mutex();
    this.runtimeRegisterMutex = new s.Mutex();
    this.configSource = e;
  }
  static getSharedInstance() {
    if (!y) {
      y = new C();
      s.registerQuitHandler({
        name: "local-mcp-server-cleanup",
        fn: async () => {
          await (y == null ? undefined : y.closeAll());
          await (h == null ? undefined : h.closeAll());
        }
      });
    }
    return y;
  }
  static getPluginMcpInstance() {
    if (!h) {
      h = new C(async () => ({}), false, "plugin");
      s.registerQuitHandler({
        name: "plugin-mcp-server-cleanup",
        fn: async () => {
          await (h == null ? undefined : h.closeAll());
        }
      });
    }
    return h;
  }
  async getCurrentRoots() {
    const e = [];
    for (const n of this.rootsGetters.values()) {
      e.push(...(await n()));
    }
    return k(e);
  }
  getRuntimeKeyRoots(e) {
    return k(this.runtimeRootsByKey.get(e) ?? []);
  }
  registerRootsProvider(e, n) {
    this.rootsGetters.set(e, n);
    this.notifyRootsChanged();
  }
  unregisterRootsProvider(e) {
    if (this.rootsGetters.delete(e)) {
      this.notifyRootsChanged();
    }
  }
  notifyRootsChanged() {
    for (const [e, n] of this.connections) {
      if (n.isConnected) {
        this.notifyConnectionRootsChanged(e, n);
      }
    }
  }
  notifyConnectionRootsChanged(e, n) {
    n.client.sendRootsListChanged().catch(t => {
      s.logger.warn(`[LocalMcpServerManager] Failed to notify ${e} of roots change:`, t);
      n.isConnected = false;
      this.connectionsGeneration++;
    });
  }
  getConnectionsGeneration() {
    return this.connectionsGeneration;
  }
  async createProxyServers(e, n, t, o) {
    const r = {};
    const c = Object.keys(e);
    const a = await Promise.allSettled(c.map(g => this.getOrCreateConnection(g, t)));
    for (const [g, u] of a.entries()) {
      const _ = c[g];
      if (u.status === "rejected") {
        s.logger.error(`[LocalMcpServerManager] Failed to create proxy for ${_}:`, u.reason);
        continue;
      }
      const l = u.value;
      if (l) {
        try {
          const d = this.createSdkServer(_, l, n, t, o);
          if (d) {
            r[_] = d;
          }
        } catch (d) {
          s.logger.error(`[LocalMcpServerManager] Failed to create proxy for ${_}:`, d);
        }
      }
    }
    return r;
  }
  replacePluginMcpConfigs(e, n = new Set()) {
    return this.pluginReplaceMutex.runExclusive(() => this.doReplacePluginMcpConfigs(e, n));
  }
  async doReplacePluginMcpConfigs(e, n) {
    var c;
    this.orgRegistryPluginKeys = n;
    const t = [];
    for (const [a, g] of this.pluginMcpConfigs) {
      const u = e[a];
      if (!u || JSON.stringify(g) !== JSON.stringify(u)) {
        t.push(a);
      }
    }
    const o = Object.keys(e).some(a => !this.pluginMcpConfigs.has(a));
    const r = t.length > 0 || o;
    for (const a of t) {
      if (!(a in e)) {
        this.pluginMcpConfigs.delete(a);
      }
    }
    for (const [a, g] of Object.entries(e)) {
      this.pluginMcpConfigs.set(a, g);
    }
    for (const a of t) {
      s.logger.info(`[LocalMcpServerManager] Plugin MCP config ${a in e ? "changed" : "removed"} for ${a}, closing connection`);
      await ((c = this.pending.get(a)) == null ? undefined : c.catch(() => {}));
      await this.closeConnection(a);
    }
    return {
      changed: r
    };
  }
  registerRuntimePluginServer(e, n, t) {
    if (!e.startsWith(S)) {
      throw new Error(`runtime plugin server key must be ${S}-prefixed, got ${e}`);
    }
    if ((t == null ? undefined : t.roots) !== undefined && this.advertiseRoots) {
      throw new Error("per-key runtime plugin roots are only supported on the plugin-MCP instance (advertiseRoots=false)");
    }
    return this.runtimeRegisterMutex.runExclusive(async () => {
      var r;
      const o = this.runtimePluginMcpConfigs.get(e);
      if (!o || JSON.stringify(o) !== JSON.stringify(n)) {
        this.runtimePluginMcpConfigs.set(e, n);
        if (o) {
          await ((r = this.pending.get(e)) == null ? undefined : r.catch(() => {}));
          await this.closeConnection(e);
        }
      }
      if ((t == null ? undefined : t.roots) !== undefined) {
        await this.applyRuntimeRootsLocked(e, t.roots);
      }
    });
  }
  registerRuntimePluginRoots(e, n) {
    if (!e.startsWith(S)) {
      throw new Error(`runtime plugin roots key must be ${S}-prefixed, got ${e}`);
    }
    if (this.advertiseRoots) {
      throw new Error("per-key runtime plugin roots are only supported on the plugin-MCP instance (advertiseRoots=false)");
    }
    return this.runtimeRegisterMutex.runExclusive(() => this.applyRuntimeRootsLocked(e, n));
  }
  async applyRuntimeRootsLocked(e, n) {
    var a;
    const t = this.runtimeRootsByKey.get(e);
    const o = [...n];
    const r = t === undefined || !F(t, o);
    if (r) {
      this.runtimeRootsByKey.set(e, o);
    }
    await ((a = this.pending.get(e)) == null ? undefined : a.catch(() => {}));
    const c = this.connections.get(e);
    if (c !== undefined) {
      if (!c.rootsAdvertised) {
        await this.closeConnection(e);
        return;
      }
      if (r && c.isConnected) {
        this.notifyConnectionRootsChanged(e, c);
      }
    }
  }
  closeRuntimePluginServersForSession(e) {
    return this.runtimeRegisterMutex.runExclusive(async () => {
      var o;
      const n = `:${e}`;
      const t = new Set([...this.runtimePluginMcpConfigs.keys(), ...this.runtimeRootsByKey.keys()]);
      for (const r of t) {
        if (r.endsWith(n)) {
          this.runtimePluginMcpConfigs.delete(r);
          this.runtimeRootsByKey.delete(r);
          await ((o = this.pending.get(r)) == null ? undefined : o.catch(() => {}));
          await this.closeConnection(r).catch(() => {});
        }
      }
    });
  }
  getRegisteredPluginMcpServerNames() {
    return [...this.pluginMcpConfigs.keys()];
  }
  getOrgRegistryPluginKeys() {
    return this.orgRegistryPluginKeys;
  }
  async getOrCreateConnection(e, n) {
    const t = this.connections.get(e);
    if (t != null && t.isConnected) {
      s.logger.debug(`[LocalMcpServerManager] Reusing connection to ${e}`);
      return t;
    }
    const o = this.pending.get(e);
    if (o) {
      return o;
    }
    const r = (async () => {
      if (t) {
        await this.closeConnection(e);
      }
      return this.createConnection(e, n);
    })().finally(() => {
      this.pending.delete(e);
    });
    this.pending.set(e, r);
    return r;
  }
  async createConnection(e, n) {
    const t = Date.now();
    let o = null;
    let r = null;
    try {
      s.logger.info(`[LocalMcpServerManager] Connecting to ${e}`);
      const c = this.pluginMcpConfigs.get(e) ?? this.runtimePluginMcpConfigs.get(e);
      const a = c ?? (await this.configSource())[e];
      if (!a) {
        s.logger.warn(`[LocalMcpServerManager] No config for ${e}`);
        return null;
      }
      o = await s.createMcpServerTransport(e, a, {
        log: (p, M) => s.logger.info(`[LocalMcpServerManager] ${p}`, M),
        forceExec: c !== undefined
      });
      const g = this.advertiseRoots || this.runtimeRootsByKey.has(e);
      const u = {
        ...(g && {
          roots: {
            listChanged: true
          }
        }),
        extensions: {
          "io.modelcontextprotocol/ui": {
            mimeTypes: ["text/html;profile=mcp-app"]
          }
        }
      };
      r = new s.Client({
        name: `local-agent-mode-${e}`,
        version: "1.0.0"
      }, {
        capabilities: u
      });
      if (g) {
        r.setRequestHandler(s.ListRootsRequestSchema, async () => ({
          roots: this.advertiseRoots ? await this.getCurrentRoots() : this.getRuntimeKeyRoots(e)
        }));
      }
      await r.connect(o);
      const _ = r.getInstructions();
      const d = (await r.listTools()).tools ?? [];
      if (d.length === 0) {
        s.logger.warn(`[LocalMcpServerManager] ${e} has no tools`);
        s.logCoworkEvent("lam_mcp_server_connection_failed", {
          server_name: e,
          server_type: "local",
          server_source: this.serverSource,
          error_type: "no_tools",
          error_message: "Server reported zero tools",
          duration_ms: Date.now() - t,
          session_id: n == null ? undefined : n.sessionId
        });
        await r.close();
        await o.close();
        return null;
      }
      const f = {
        client: r,
        transport: o,
        tools: d,
        instructions: _,
        isConnected: true,
        rootsAdvertised: g
      };
      o.onclose = () => {
        s.logger.warn(`[LocalMcpServerManager] ${e} disconnected`);
        f.isConnected = false;
        this.connectionsGeneration++;
        s.logCoworkEvent("lam_mcp_server_disconnected", {
          server_name: e,
          server_type: "local",
          server_source: this.serverSource,
          reason: "close",
          session_id: n == null ? undefined : n.sessionId
        });
      };
      o.onerror = p => {
        s.logger.error(`[LocalMcpServerManager] ${e} error:`, p);
        f.isConnected = false;
        this.connectionsGeneration++;
        s.logCoworkEvent("lam_mcp_server_disconnected", {
          server_name: e,
          server_type: "local",
          server_source: this.serverSource,
          reason: "error",
          error_message: p instanceof Error ? p.message : String(p),
          session_id: n == null ? undefined : n.sessionId
        });
      };
      this.connections.set(e, f);
      this.connectionsGeneration++;
      s.logger.info(`[LocalMcpServerManager] Connected to ${e} (${d.length} tools)`);
      s.logCoworkEvent("lam_mcp_server_connected", {
        server_name: e,
        server_type: "local",
        server_source: this.serverSource,
        tool_count: d.length,
        duration_ms: Date.now() - t,
        session_id: n == null ? undefined : n.sessionId
      });
      return f;
    } catch (c) {
      s.logger.error(`[LocalMcpServerManager] Failed to connect to ${e}:`, c);
      await (r == null ? undefined : r.close().catch(() => {}));
      await (o == null ? undefined : o.close().catch(() => {}));
      s.logCoworkEvent("lam_mcp_server_connection_failed", {
        server_name: e,
        server_type: "local",
        server_source: this.serverSource,
        error_type: "connection_error",
        error_message: c instanceof Error ? c.message : String(c),
        duration_ms: Date.now() - t,
        session_id: n == null ? undefined : n.sessionId
      });
      return null;
    }
  }
  createSdkServer(e, n, t, o, r) {
    const a = s.isFeatureEnabled("2246535838") ? `local:${e}` : e;
    const u = (t ? n.tools.filter(l => {
      const d = `${a}:${l.name}`;
      const f = t[d] === false;
      if (f) {
        s.logger.info(`[LocalMcpServerManager] Filtering out disabled tool "${l.name}" on server "${e}"`);
      }
      return !f;
    }) : n.tools).filter(O);
    if (!u.length) {
      return null;
    }
    const _ = u.map(l => E.tool(l.name, l.description ?? l.name, L(l.inputSchema ?? {}), async d => {
      const f = Date.now();
      let p = false;
      const M = {
        server_source: this.serverSource,
        session_id: o == null ? undefined : o.sessionId,
        session_type: o == null ? undefined : o.sessionType,
        user_message_uuid: o == null ? undefined : o.getMessageUuid()
      };
      let w = this.connections.get(e);
      if (w == null || !w.isConnected) {
        p = true;
        const v = await this.getOrCreateConnection(e, o);
        if (!v) {
          s.logCoworkEvent("lam_mcp_tool_call_completed", {
            server_name: e,
            server_type: "local",
            tool_name: `mcp__${e}__${l.name}`,
            is_error: true,
            duration_ms: Date.now() - f,
            needed_reconnect: true,
            ...M
          });
          return {
            content: [{
              type: "text",
              text: `Server ${e} unavailable`
            }],
            isError: true
          };
        }
        w = v;
      }
      const T = o ? setTimeout(() => {
        s.logCoworkEvent("lam_mcp_tool_call_stalled", {
          session_id: o.sessionId,
          session_type: o.sessionType,
          user_message_uuid: o.getMessageUuid(),
          server_name: e,
          server_type: "local",
          tool_name: `mcp__${e}__${l.name}`,
          seconds_waiting: 300
        });
      }, 300000) : undefined;
      try {
        const v = r ? $.deepTranslateVMPaths(d, `/sessions/${r.vmProcessName}/mnt/`, r) : d;
        const I = await w.client.callTool({
          name: l.name,
          arguments: v
        });
        clearTimeout(T);
        const R = I;
        if (r && R.content) {
          R.content = $.translateFileUrisInValue(R.content, r, "host-to-vm");
        }
        s.logCoworkEvent("lam_mcp_tool_call_completed", {
          server_name: e,
          server_type: "local",
          tool_name: `mcp__${e}__${l.name}`,
          is_error: R.isError ?? false,
          duration_ms: Date.now() - f,
          needed_reconnect: p,
          ...M
        });
        return R;
      } catch (v) {
        clearTimeout(T);
        w.isConnected = false;
        this.connectionsGeneration++;
        s.logCoworkEvent("lam_mcp_tool_call_completed", {
          server_name: e,
          server_type: "local",
          tool_name: `mcp__${e}__${l.name}`,
          is_error: true,
          duration_ms: Date.now() - f,
          needed_reconnect: p,
          ...M
        });
        return {
          content: [{
            type: "text",
            text: `Error: ${v instanceof Error ? v.message : String(v)}`
          }],
          isError: true
        };
      }
    }, l.annotations != null && this.serverSource !== "plugin" ? {
      annotations: l.annotations
    } : undefined));
    return E.createSdkMcpServer({
      name: e,
      version: "1.0.0",
      instructions: n.instructions,
      tools: _
    });
  }
  async closeConnection(e) {
    const n = this.connections.get(e);
    if (n) {
      s.logger.info(`[LocalMcpServerManager] Closing ${e}`);
      try {
        await n.client.close();
      } catch {}
      try {
        await n.transport.close();
      } catch {}
      this.connections.delete(e);
      this.connectionsGeneration++;
    }
  }
  getConnectedServersInfo() {
    const e = [];
    for (const [n, t] of this.connections) {
      if (t.isConnected) {
        e.push({
          name: n,
          tools: t.tools
        });
      }
    }
    return e;
  }
  async ensureAllConfiguredConnected() {
    const e = await this.configSource();
    const n = [...Object.keys(e), ...this.pluginMcpConfigs.keys()].filter(o => m(o) ? (s.logger.warn(`[LocalMcpServerManager] Skipping server "${o}" — name collides with a trusted internal server prefix`), false) : true);
    await new s.PQueue({
      concurrency: U
    }).addAll(n.map(o => async () => {
      try {
        await this.getOrCreateConnection(o);
      } catch (r) {
        s.logger.error(`[LocalMcpServerManager] ensureAllConfiguredConnected failed for ${o}:`, r);
      }
    }));
  }
  hasServer(e) {
    return this.connections.has(e);
  }
  async callTool(e, n, t, o) {
    let r = this.connections.get(e);
    if (r == null || !r.isConnected) {
      const c = await this.getOrCreateConnection(e);
      if (!c) {
        return {
          content: [{
            type: "text",
            text: `Server ${e} unavailable`
          }],
          isError: true
        };
      }
      r = c;
    }
    try {
      return await r.client.callTool({
        name: n,
        arguments: t
      }, undefined, (o == null ? undefined : o.timeoutMs) != null ? {
        timeout: o.timeoutMs
      } : undefined);
    } catch (c) {
      r.isConnected = false;
      this.connectionsGeneration++;
      if (e.startsWith(S)) {
        await this.closeConnection(e).catch(() => {});
      }
      return {
        content: [{
          type: "text",
          text: `Error: ${c instanceof Error ? c.message : String(c)}`
        }],
        isError: true
      };
    }
  }
  async readResource(e, n) {
    let t = this.connections.get(e);
    if (t == null || !t.isConnected) {
      const o = await this.getOrCreateConnection(e);
      if (!o) {
        s.logger.error(`[LocalMcpServerManager] Cannot read resource: server ${e} unavailable`);
        return {
          contents: []
        };
      }
      t = o;
    }
    try {
      return {
        contents: (await t.client.readResource({
          uri: n
        })).contents ?? []
      };
    } catch (o) {
      s.logger.error(`[LocalMcpServerManager] Error reading resource from ${e}: ${o instanceof Error ? o.message : String(o)}`);
      t.isConnected = false;
      this.connectionsGeneration++;
      return {
        contents: []
      };
    }
  }
  async listResources(e) {
    let n = this.connections.get(e);
    if (n == null || !n.isConnected) {
      const t = await this.getOrCreateConnection(e);
      if (!t) {
        s.logger.error(`[LocalMcpServerManager] Cannot list resources: server ${e} unavailable`);
        return [];
      }
      n = t;
    }
    try {
      return ((await n.client.listResources()).resources ?? []).map(o => ({
        uri: o.uri,
        name: o.name,
        description: o.description,
        mimeType: o.mimeType
      }));
    } catch (t) {
      s.logger.error(`[LocalMcpServerManager] Error listing resources from ${e}: ${t instanceof Error ? t.message : String(t)}`);
      n.isConnected = false;
      this.connectionsGeneration++;
      return [];
    }
  }
  async closeAll() {
    s.logger.info(`[LocalMcpServerManager] Closing all (${this.connections.size} servers)`);
    this.rootsGetters.clear();
    this.runtimeRootsByKey.clear();
    this.runtimePluginMcpConfigs.clear();
    for (const e of this.connections.keys()) {
      await this.closeConnection(e);
    }
  }
}
function k(i) {
  const e = new Set();
  const n = [];
  for (const t of i) {
    if (!e.has(t)) {
      e.add(t);
      n.push({
        uri: G.pathToFileURL(t).href,
        name: j.basename(t)
      });
    }
  }
  return n;
}
exports.LocalMcpServerManager = C;
exports.RUNTIME_PLUGIN_KEY_PREFIX = S;
exports.collidesWithInternalServerName = m;
exports.dropReservedNameServers = q;
exports.filterServersCollidingWithInternalServerNames = A;
exports.isToolVisibleToModel = O;
exports.jsonSchemaToZodShape = L;
//# sourceMappingURL=index.chunk-bem6RoHM.js.map