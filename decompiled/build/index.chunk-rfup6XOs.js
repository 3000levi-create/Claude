"use strict";

(function () {
  try {
    var r = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    r.SENTRY_RELEASE = {
      id: "df1d8a339dfabcf359af7144fe142b59ff7d9a0f"
    };
  } catch {}
})();
try {
  (function () {
    var r = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    var s = new r.Error().stack;
    if (s) {
      r._sentryDebugIds = r._sentryDebugIds || {};
      r._sentryDebugIds[s] = "5d61f9a6-b814-4018-a87b-5b375e285aba";
      r._sentryDebugIdIdentifier = "sentry-dbid-5d61f9a6-b814-4018-a87b-5b375e285aba";
    }
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
const $ = require("node:path");
const v = require("./index.chunk-CvbeGVMj.js");
const i = require("./index.chunk-c42vKsva.js");
const y = require("./index.chunk-bem6RoHM.js");
const T = 20;
class m {
  constructor(s, e, o) {
    this.controller = s;
    this.spawnParams = e;
    this.serverName = o;
    this.readBuffer = new i.ReadBuffer();
    this.stderrTail = [];
    this.closing = false;
  }
  async start() {
    if (this.process) {
      throw new Error("RemoteStdioTransport already started");
    }
    this.process = this.controller.spawnAuxProcess(this.spawnParams);
    this.process.stdout.on("data", s => {
      var e;
      for (this.readBuffer.append(s);;) {
        try {
          const o = this.readBuffer.readMessage();
          if (!o) {
            break;
          }
          if ((e = this.onmessage) != null) {
            e.call(this, o);
          }
        } catch (o) {
          i.sshLogger.warn(`[RemoteStdioTransport:${this.serverName}] dropped malformed stdout message: ${o instanceof Error ? o.message : String(o)}`);
        }
      }
    });
    this.process.stderr.on("data", s => {
      for (const e of s.toString().split(`
`)) {
        if (e) {
          this.stderrTail.push(e);
        }
      }
      if (this.stderrTail.length > T) {
        this.stderrTail.splice(0, this.stderrTail.length - T);
      }
    });
    this.process.on("error", s => {
      var e;
      i.sshLogger.error(`[RemoteStdioTransport:${this.serverName}] process error:`, s);
      if ((e = this.onerror) != null) {
        e.call(this, s);
      }
    });
    this.process.on("exit", s => {
      var e;
      if (!this.closing && s !== 0) {
        i.sshLogger.warn(`[RemoteStdioTransport:${this.serverName}] exited ${s}; stderr tail:
${this.stderrTail.join(`
`)}`);
      }
      this.process = undefined;
      this.readBuffer.clear();
      if ((e = this.onclose) != null) {
        e.call(this);
      }
    });
  }
  async send(s) {
    if (!this.process) {
      throw new Error("RemoteStdioTransport not started");
    }
    this.process.stdin.write(i.serializeMessage(s));
  }
  async close() {
    var s;
    this.closing = true;
    if ((s = this.process) != null) {
      s.kill("SIGTERM");
    }
  }
  getStderrTail() {
    return this.stderrTail.join(`
`);
  }
}
const M = 15000;
const k = [/^MCP_/, /^DEBUG$/, /^LOG_LEVEL$/, /^NODE_ENV$/, /^NO_COLOR$/, /^FORCE_COLOR$/, /^PYTHONUNBUFFERED$/, /^PYTHONDONTWRITEBYTECODE$/];
function O(r, s) {
  if (!s) {
    return;
  }
  const e = {};
  const o = [];
  for (const [c, d] of Object.entries(s)) {
    if (k.some(n => n.test(c))) {
      e[c] = d;
    } else {
      o.push(c);
    }
  }
  if (o.length > 0) {
    i.sshLogger.warn(`[SshMcpServerManager] ${r}: dropped env keys not forwarded to remote: ${o.join(", ")}`);
  }
  if (Object.keys(e).length > 0) {
    return e;
  } else {
    return undefined;
  }
}
function R(r) {
  if (r) {
    if (/^[A-Za-z]:[\\/]/.test(r)) {
      return true;
    } else if ($.isAbsolute(r)) {
      return r.startsWith("/Users/") || r.startsWith("/Applications/") || r.startsWith("/opt/homebrew/") || r.startsWith("/usr/local/Cellar/");
    } else {
      return false;
    }
  } else {
    return false;
  }
}
let _ = null;
class b {
  constructor() {
    this.connections = new Map();
    this.pendingConnections = new Map();
    this.subscribedControllers = new WeakSet();
  }
  static getSharedInstance() {
    if (!_) {
      _ = new b();
      i.registerQuitHandler({
        name: "ssh-mcp-server-cleanup",
        fn: async () => {
          await (_ == null ? undefined : _.closeAll());
        }
      });
    }
    return _;
  }
  async createProxyServers(s, e, o, c) {
    this.subscribeHostDisconnect(s);
    const d = {};
    for (const [n, l] of Object.entries(e)) {
      if (R(l.command)) {
        i.sshLogger.warn(`[SshMcpServerManager] Skipping "${n}" over SSH: command "${l.command}" is a laptop-local absolute path the remote can't resolve.`);
        continue;
      }
      try {
        const a = await this.getOrCreateConnection(s, n, l, c);
        if (!a) {
          continue;
        }
        d[n] = this.createSdkServer(s, n, l, a, o, c);
      } catch (a) {
        i.sshLogger.error(`[SshMcpServerManager] Failed to create proxy for ${n}:`, a);
      }
    }
    return d;
  }
  connKey(s, e) {
    return `${s.hostKey}:${e}`;
  }
  subscribeHostDisconnect(s) {
    if (!this.subscribedControllers.has(s)) {
      this.subscribedControllers.add(s);
      s.on("disconnected", () => {
        for (const [e, o] of this.connections) {
          if (e.startsWith(`${s.hostKey}:`)) {
            o.isConnected = false;
          }
        }
      });
    }
  }
  async getOrCreateConnection(s, e, o, c) {
    const d = this.connKey(s, e);
    const n = this.connections.get(d);
    if (n != null && n.isConnected) {
      return n;
    }
    const l = this.pendingConnections.get(d);
    if (l) {
      return l;
    }
    const a = (async () => {
      if (n) {
        await this.closeConnection(d);
      }
      return this.createConnection(s, e, o, c);
    })();
    this.pendingConnections.set(d, a);
    try {
      return await a;
    } finally {
      this.pendingConnections.delete(d);
    }
  }
  async createConnection(s, e, o, c) {
    const d = this.connKey(s, e);
    const n = Date.now();
    const l = {
      server_name: e,
      server_type: "ssh-stdio",
      session_id: c == null ? undefined : c.sessionId
    };
    const a = new m(s, {
      command: o.command,
      args: o.args ?? [],
      env: O(e, o.env)
    }, e);
    const f = new i.Client({
      name: `ssh-${e}`,
      version: "1.0.0"
    }, {
      capabilities: {}
    });
    try {
      await Promise.race([f.connect(a), new Promise((w, u) => setTimeout(() => u(new Error("connect timeout")), M))]);
      const p = f.getInstructions();
      const {
        tools: t = []
      } = await f.listTools();
      if (t.length === 0) {
        i.sshLogger.warn(`[SshMcpServerManager] ${e} reported zero tools`);
        i.logCoworkEvent("lam_mcp_server_connection_failed", {
          ...l,
          error_type: "no_tools",
          error_message: "Server reported zero tools",
          duration_ms: Date.now() - n
        });
        await f.close().catch(() => {});
        await a.close().catch(() => {});
        return null;
      }
      const g = {
        client: f,
        transport: a,
        tools: t,
        instructions: p,
        isConnected: true
      };
      a.onclose = () => {
        g.isConnected = false;
      };
      a.onerror = () => {
        g.isConnected = false;
      };
      this.connections.set(d, g);
      i.sshLogger.info(`[SshMcpServerManager] Connected to ${e} on ${s.hostKey} (${t.length} tools)`);
      i.logCoworkEvent("lam_mcp_server_connected", {
        ...l,
        tool_count: t.length,
        duration_ms: Date.now() - n
      });
      return g;
    } catch (p) {
      const t = p instanceof Error ? p.message : String(p);
      i.sshLogger.error(`[SshMcpServerManager] Failed to connect ${e}: ${t}; stderr:
${a.getStderrTail()}`);
      i.logCoworkEvent("lam_mcp_server_connection_failed", {
        ...l,
        error_type: "connection_error",
        error_message: t,
        duration_ms: Date.now() - n
      });
      await f.close().catch(() => {});
      await a.close().catch(() => {});
      return null;
    }
  }
  createSdkServer(s, e, o, c, d, n) {
    const l = this.connKey(s, e);
    const a = `local:${e}`;
    const p = (d ? c.tools.filter(t => d[`${a}:${t.name}`] !== false) : c.tools).map(t => v.tool(t.name, t.description ?? t.name, y.jsonSchemaToZodShape(t.inputSchema ?? {}), async g => {
      const w = Date.now();
      let u = this.connections.get(l);
      let S = false;
      if (u == null || !u.isConnected) {
        S = true;
        const h = await this.getOrCreateConnection(s, e, o, n);
        if (!h) {
          return {
            content: [{
              type: "text",
              text: `Server ${e} unavailable`
            }],
            isError: true
          };
        }
        u = h;
      }
      try {
        const h = await u.client.callTool({
          name: t.name,
          arguments: g
        });
        i.logCoworkEvent("lam_mcp_tool_call_completed", {
          server_name: e,
          server_type: "ssh-stdio",
          tool_name: `mcp__${e}__${t.name}`,
          is_error: h.isError ?? false,
          duration_ms: Date.now() - w,
          needed_reconnect: S,
          session_id: n == null ? undefined : n.sessionId,
          session_type: n == null ? undefined : n.sessionType,
          user_message_uuid: n == null ? undefined : n.getMessageUuid()
        });
        return h;
      } catch (h) {
        u.isConnected = false;
        const E = h instanceof Error ? h.message : String(h);
        i.logCoworkEvent("lam_mcp_tool_call_completed", {
          server_name: e,
          server_type: "ssh-stdio",
          tool_name: `mcp__${e}__${t.name}`,
          is_error: true,
          duration_ms: Date.now() - w,
          needed_reconnect: S,
          session_id: n == null ? undefined : n.sessionId,
          session_type: n == null ? undefined : n.sessionType,
          user_message_uuid: n == null ? undefined : n.getMessageUuid()
        });
        return {
          content: [{
            type: "text",
            text: `Error: ${E}`
          }],
          isError: true
        };
      }
    }, t.annotations != null ? {
      annotations: t.annotations
    } : undefined));
    return v.createSdkMcpServer({
      name: e,
      version: "1.0.0",
      instructions: c.instructions,
      tools: p
    });
  }
  async closeConnection(s) {
    const e = this.connections.get(s);
    if (e) {
      this.connections.delete(s);
      await e.client.close().catch(() => {});
      await e.transport.close().catch(() => {});
    }
  }
  async closeAll() {
    await Promise.all(Array.from(this.connections.keys(), s => this.closeConnection(s)));
  }
}
exports.SshMcpServerManager = b;
//# sourceMappingURL=index.chunk-rfup6XOs.js.map