"use strict";

var W = Object.create;
var C = Object.defineProperty;
var z = Object.getOwnPropertyDescriptor;
var N = Object.getOwnPropertyNames;
var q = Object.getPrototypeOf;
var K = Object.prototype.hasOwnProperty;
var U = (h, e, t, s) => {
  if (e && typeof e == "object" || typeof e == "function") {
    for (let r of N(e)) {
      if (!K.call(h, r) && r !== t) {
        C(h, r, {
          get: () => e[r],
          enumerable: !(s = z(e, r)) || s.enumerable
        });
      }
    }
  }
  return h;
};
var v = (h, e, t) => {
  t = h != null ? W(q(h)) : {};
  return U(e || !h || !h.__esModule ? C(t, "default", {
    value: h,
    enumerable: true
  }) : t, h);
};
(function () {
  try {
    var h = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    h.SENTRY_RELEASE = {
      id: "df1d8a339dfabcf359af7144fe142b59ff7d9a0f"
    };
  } catch {}
})();
try {
  (function () {
    var h = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    var e = new h.Error().stack;
    if (e) {
      h._sentryDebugIds = h._sentryDebugIds || {};
      h._sentryDebugIds[e] = "c6d6599e-cdcf-4405-989d-4cbbcecf5e91";
      h._sentryDebugIdIdentifier = "sentry-dbid-c6d6599e-cdcf-4405-989d-4cbbcecf5e91";
    }
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
const j = require("node:crypto");
const F = require("node:fs");
const X = require("node:os");
const l = require("./index.chunk-c42vKsva.js");
const Q = require("./index.chunk-BDRRlMkw.js");
function H() {
  return {
    shell: "powershell.exe",
    args: []
  };
}
const Z = /^[A-Za-z0-9.@_:-]+$/;
function G(h, e) {
  const {
    sshHost: t,
    sshPort: s,
    sshIdentityFile: r
  } = h;
  if (typeof t != "string" || !Z.test(t) || t.startsWith("-")) {
    l.logger.warn(`Refusing SSH shell PTY for invalid sshHost: ${t}`);
    return null;
  }
  if (s !== undefined && !Number.isInteger(s)) {
    l.logger.warn(`Refusing SSH shell PTY for non-integer sshPort: ${s}`);
    return null;
  }
  if (/[\x00-\x1f\x7f]/.test(e)) {
    l.logger.warn("Refusing SSH shell PTY for remote cwd with control bytes");
    return null;
  }
  if (/^[A-Za-z]:[\\/]/.test(e) || e.startsWith("\\")) {
    l.logger.warn("Refusing SSH shell PTY for Windows remote cwd (unsupported)");
    return null;
  }
  if (e.includes("\\")) {
    l.logger.warn("Refusing SSH shell PTY for remote cwd with backslash");
    return null;
  }
  if (/[‘-‛]/.test(e)) {
    l.logger.warn("Refusing SSH shell PTY for remote cwd with smart-quote");
    return null;
  }
  const i = typeof r == "string" && r.length > 0 && !r.startsWith("-") && !/[\x00-\x1f\x7f]/.test(r) ? r : undefined;
  if (r && !i) {
    l.logger.warn("Dropping invalid sshIdentityFile for SSH shell PTY");
  }
  const o = Q.shellQuote(e);
  const f = `printf '${J}'`;
  return {
    shell: "ssh",
    args: ["-t", ...(s !== undefined ? ["-p", String(s)] : []), ...(i ? ["-i", i] : []), "--", t, `cd ${o} && ${f} && exec $SHELL -l`],
    cwd: X.homedir()
  };
}
const L = "]697;ShellReady";
const J = L.replace(/\x1b/g, "\\033").replace(/\x07/g, "\\007");
const V = 30000;
const _ = "::";
function A(h) {
  const e = h.indexOf(_);
  if (e === -1) {
    return h;
  } else {
    return h.slice(0, e);
  }
}
function I(h, e) {
  if (!e || e === "0") {
    return h;
  } else {
    return `${h}${_}${e}`;
  }
}
const k = 262144;
const O = 16;
class x {
  constructor() {
    this.chunks = [];
    this.len = 0;
  }
  push(e) {
    this.chunks.push(e);
    this.len += e.length;
    while (this.chunks.length > 1 && this.len - this.chunks[0].length >= k) {
      this.len -= this.chunks.shift().length;
    }
  }
  snapshot() {
    if (this.chunks.length > 1) {
      this.chunks = [this.chunks.join("")];
    }
    let e = this.chunks[0] ?? "";
    if (e.length > k) {
      e = e.slice(e.length - k);
      this.chunks[0] = e;
    }
    this.len = e.length;
    return e;
  }
}
const ee = 16;
const te = 16;
const se = 400;
const re = 30000;
const M = 102400;
const E = "";
const Y = "";
const ie = new RegExp(`${E}(?:\\[[0-?]*[ -/]*[@-~]|\\][^${Y}${E}]*(?:${Y}|${E}\\\\)|[@-Z\\\\-_])`, "g");
class le {
  constructor(e) {
    this.ptyProcesses = new Map();
    this.shellPtyProcesses = new Map();
    this.shellPtyBuffers = new Map();
    this.pendingEmits = {
      pty_data: new Map(),
      shell_pty_data: new Map()
    };
    this.flushTimer = null;
    this.inFlightKills = new Set();
    this.shellPtyBytesReceived = new Map();
    this.shellOutputWaiters = new Map();
    this.runCommandInFlight = new Set();
    this.shellPtyReady = new Map();
    this.sshShellReady = new Map();
    this.bashPtyProcesses = new Map();
    this.bashPtyBuffers = new Map();
    this.bashPtyBytesReceived = new Map();
    this.bashPtyReady = new Map();
    this.bashPtyDataNotify = new Map();
    this.config = e;
    l.registerQuitHandler({
      name: "local-session-pty-cleanup",
      fn: async () => {
        const t = [...this.ptyProcesses.values(), ...this.shellPtyProcesses.values(), ...this.bashPtyProcesses.values()];
        if (t.length !== 0 || this.inFlightKills.size !== 0) {
          l.logger.info(`[CCD] Killing ${t.length} PTY process tree(s) on quit${this.inFlightKills.size > 0 ? ` (+ ${this.inFlightKills.size} in-flight)` : ""}`);
          await Promise.allSettled([...t.map(s => this.killPtyTree(s)), ...this.inFlightKills]);
          this.ptyProcesses.clear();
          this.shellPtyProcesses.clear();
          this.shellPtyBuffers.clear();
          this.shellPtyBytesReceived.clear();
          this.bashPtyProcesses.clear();
          this.bashPtyBuffers.clear();
          this.bashPtyBytesReceived.clear();
          if (this.flushTimer) {
            clearTimeout(this.flushTimer);
            this.flushTimer = null;
          }
          this.pendingEmits.pty_data.clear();
          this.pendingEmits.shell_pty_data.clear();
        }
      }
    });
  }
  async startPty(e, t = 80, s = 24) {
    var S;
    var b;
    const r = this.config.getSession(e);
    if (!r) {
      l.logger.error(`Cannot start PTY: session ${e} not found`);
      return null;
    }
    if (!r.cliSessionId) {
      l.logger.error(`Cannot start PTY: session ${e} has no CLI session ID`);
      return null;
    }
    const i = this.ptyProcesses.get(e);
    if (i) {
      l.logger.info(`PTY already exists for session ${e}, reusing`);
      return i;
    }
    const o = await this.config.resolveCliSpawn(e).catch(P => {
      l.logger.error(`Cannot start session ${e}: ${P.message}`);
      return null;
    });
    if (!o) {
      return null;
    }
    const {
      executable: f,
      env: a
    } = o;
    const g = ["--resume", r.cliSessionId];
    if (r.model) {
      g.push("--model", r.model);
    }
    l.logger.info(`Starting PTY for session ${e} with args: ${g.join(" ")}`);
    let p;
    try {
      p = (await import("node-pty")).spawn;
    } catch (P) {
      l.logger.error("Failed to load pty %o", {
        error: P
      });
      if ((S = o.dispose) != null) {
        S.call(o);
      }
      return null;
    }
    let n;
    try {
      n = p(f, g, {
        name: "xterm-256color",
        cols: t,
        rows: s,
        cwd: r.worktreePath || r.cwd,
        env: {
          ...a,
          TERM: "xterm-256color",
          COLORTERM: "truecolor"
        }
      });
    } catch (P) {
      l.logger.error(`Failed to spawn PTY for session ${e}: ${String(P)}`);
      if ((b = o.dispose) != null) {
        b.call(o);
      }
      const w = {
        type: "pty_close",
        sessionId: e,
        code: 1
      };
      this.config.emit(w);
      return null;
    }
    n.onExit(({
      exitCode: P
    }) => {
      var T;
      if ((T = o.dispose) != null) {
        T.call(o);
      }
      if (this.ptyProcesses.get(e) !== n) {
        l.logger.info(`PTY for session ${e} exited (stale — already replaced)`);
        return;
      }
      l.logger.info(`PTY for session ${e} exited with code ${P}`);
      this.flushAllPtyEmits();
      this.ptyProcesses.delete(e);
      const w = {
        type: "pty_close",
        sessionId: e,
        code: P
      };
      this.config.emit(w);
    });
    const d = this.config.getSession(e);
    if (!d || d.isArchived) {
      l.logger.info(`PTY spawn for session ${e} raced with archive, discarding`);
      this.trackKill(n);
      return null;
    }
    const u = this.ptyProcesses.get(e);
    if (u) {
      l.logger.info(`PTY spawn for session ${e} lost race to concurrent startPty, discarding`);
      this.trackKill(n);
      return u;
    } else {
      this.ptyProcesses.set(e, n);
      n.onData(P => {
        if (this.ptyProcesses.get(e) === n) {
          this.queuePtyEmit("pty_data", e, P);
        }
      });
      return n;
    }
  }
  queuePtyEmit(e, t, s) {
    const r = this.pendingEmits[e];
    const i = r.get(t);
    if (i) {
      i.push(s);
    } else {
      r.set(t, [s]);
    }
    this.flushTimer ??= setTimeout(() => this.flushAllPtyEmits(), O);
  }
  flushAllPtyEmits() {
    if (this.flushTimer) {
      clearTimeout(this.flushTimer);
      this.flushTimer = null;
    }
    for (const e of ["pty_data", "shell_pty_data"]) {
      const t = this.pendingEmits[e];
      if (t.size === 0) {
        continue;
      }
      const s = [...t];
      t.clear();
      for (const [r, i] of s) {
        try {
          this.config.emit({
            type: e,
            sessionId: r,
            data: i.join("")
          });
        } catch (o) {
          l.logger.warn("[ShellPtyManager] pty emit failed", o);
        }
      }
    }
  }
  stopPty(e) {
    const t = this.ptyProcesses.get(e);
    if (t) {
      l.logger.info(`Stopping PTY for session ${e}`);
      this.flushAllPtyEmits();
      this.trackKill(t);
      this.ptyProcesses.delete(e);
      const s = {
        type: "pty_close",
        sessionId: e
      };
      this.config.emit(s);
    }
  }
  resizePty(e, t, s) {
    const r = this.ptyProcesses.get(e);
    if (r) {
      try {
        r.resize(t, s);
      } catch {}
    }
  }
  writePty(e, t) {
    const s = this.ptyProcesses.get(e);
    if (s) {
      try {
        s.write(t);
      } catch {}
    }
  }
  awaitSshShellReady(e) {
    const t = this.sshShellReady.get(e);
    if (t) {
      return Promise.race([t.promise, new Promise(s => {
        var i;
        const r = setTimeout(() => s("timeout"), V);
        if ((i = r.unref) != null) {
          i.call(r);
        }
      })]).then(s => {
        var r;
        if (s === "timeout") {
          if ((r = this.sshShellReady.get(e)) != null) {
            r.settle("ready");
          }
          this.sshShellReady.delete(e);
        }
        return s;
      });
    }
  }
  async startShellPty(e, t, s) {
    var w;
    var T;
    var $;
    var B;
    const r = A(e);
    const i = this.config.getSession(r);
    if (!i) {
      return {
        ok: false,
        error: "Session not found"
      };
    }
    const o = this.shellPtyProcesses.get(e);
    if (o) {
      this.shellPtyProcesses.delete(e);
      this.shellPtyProcesses.set(e, o);
      if ((await this.awaitSshShellReady(e)) === "exited") {
        return {
          ok: false,
          error: "SSH shell exited before becoming ready. Check your SSH credentials and try again."
        };
      }
      this.pendingEmits.shell_pty_data.delete(e);
      const c = (w = this.shellPtyBuffers.get(e)) == null ? undefined : w.snapshot();
      const y = o.cols;
      const m = o.rows;
      try {
        o.resize(t, s);
      } catch {}
      return {
        ok: true,
        buffered: c,
        cols: y,
        rows: m
      };
    }
    const f = i.worktreePath || i.cwd;
    let a;
    if (i.wslConfig) {
      return {
        ok: false,
        error: "The integrated terminal is not available for WSL sessions yet."
      };
    }
    let g = "";
    if (i.sshConfig) {
      try {
        await this.config.assertSshHostAllowed(i.sshConfig);
      } catch (y) {
        return {
          ok: false,
          error: y instanceof Error ? y.message : "SSH host not allowed by policy. Contact your administrator."
        };
      }
      let c;
      try {
        c = (await (($ = (T = this.config).expandRemoteTilde) == null ? undefined : $.call(T, i.sshConfig, f))) ?? f;
      } catch (y) {
        return {
          ok: false,
          error: y instanceof Error ? y.message : "SSH connection failed. Check your SSH configuration and try again."
        };
      }
      a = G(i.sshConfig, c);
      if (!a) {
        return {
          ok: false,
          error: "Invalid SSH configuration. Check your SSH settings."
        };
      }
      try {
        const y = await this.config.resolveSSHBinary(a.shell, a.args);
        a = {
          ...a,
          shell: y.cmd,
          args: y.args
        };
      } catch (y) {
        l.logger.warn("Failed to resolve ssh binary for SSH shell PTY", y);
        return {
          ok: false,
          error: "Could not locate the ssh binary. Install OpenSSH or ensure it's on PATH."
        };
      }
      try {
        g = await this.config.resolveSshEnvPath();
      } catch {
        g = "";
      }
    }
    if (!a) {
      try {
        await F.promises.access(f);
      } catch {
        l.logger.warn(`Cannot start shell PTY for session ${e}: cwd "${f}" does not exist`);
        return {
          ok: false,
          error: `Working directory "${f}" does not exist`
        };
      }
    }
    let p;
    try {
      p = (await import("node-pty")).spawn;
    } catch (c) {
      l.logger.error("Failed to load node-pty %o", {
        error: c
      });
      return {
        ok: false,
        error: "Failed to load terminal backend"
      };
    }
    const n = this.config.getSession(r);
    if (!n || n.isArchived) {
      return {
        ok: false,
        error: "Session was archived"
      };
    }
    const d = this.shellPtyProcesses.get(e);
    if (d) {
      this.shellPtyProcesses.delete(e);
      this.shellPtyProcesses.set(e, d);
      if ((await this.awaitSshShellReady(e)) === "exited") {
        return {
          ok: false,
          error: "SSH shell exited before becoming ready. Check your SSH credentials and try again."
        };
      }
      this.pendingEmits.shell_pty_data.delete(e);
      const c = (B = this.shellPtyBuffers.get(e)) == null ? undefined : B.snapshot();
      const y = d.cols;
      const m = d.rows;
      try {
        d.resize(t, s);
      } catch {}
      return {
        ok: true,
        buffered: c,
        cols: y,
        rows: m
      };
    }
    const u = a ?? {
      ...H(),
      cwd: f
    };
    let S;
    try {
      S = p(u.shell, u.args, {
        name: "xterm-256color",
        cols: t,
        rows: s,
        cwd: u.cwd,
        env: {
          ...process.env,
          ...(g ? {
            PATH: g
          } : {}),
          TERM: "xterm-256color",
          COLORTERM: "truecolor"
        }
      });
    } catch (c) {
      l.logger.error(`Failed to spawn shell ${u.shell} for session ${e}`, {
        error: c
      });
      return {
        ok: false,
        error: "Failed to spawn shell"
      };
    }
    this.shellPtyProcesses.set(e, S);
    this.shellPtyBuffers.set(e, new x());
    this.shellPtyBytesReceived.set(e, 0);
    if (this.shellPtyProcesses.size > ee) {
      for (const c of this.shellPtyProcesses.keys()) {
        if (A(c) !== r) {
          l.logEvent("desktop_ccd_terminal_pty_evicted", {
            pool: "shell",
            size: this.shellPtyProcesses.size
          });
          this.stopShellPtyKey(c);
          break;
        }
      }
    }
    let b;
    this.shellPtyReady.set(e, new Promise(c => b = c));
    let P = false;
    S.onData(c => {
      var m;
      if (this.shellPtyProcesses.get(e) !== S) {
        return;
      }
      if (!P) {
        P = true;
        b();
      }
      const y = (this.shellPtyBytesReceived.get(e) ?? 0) + c.length;
      this.shellPtyBytesReceived.set(e, y);
      if ((m = this.shellPtyBuffers.get(e)) != null) {
        m.push(c);
      }
      this.queuePtyEmit("shell_pty_data", e, c);
      for (const [D, R] of this.shellOutputWaiters) {
        if (R.sessionId === e && y > R.thresholdLength) {
          clearTimeout(R.timer);
          this.shellOutputWaiters.delete(D);
          R.resolve({
            grew: true
          });
        }
      }
    });
    S.onExit(({
      exitCode: c
    }) => {
      var m;
      if (this.shellPtyProcesses.get(e) !== S) {
        l.logger.info(`Shell PTY for session ${e} exited (stale — already replaced)`);
        return;
      }
      l.logger.info(`Shell PTY for session ${e} exited with code ${c}`);
      this.flushAllPtyEmits();
      this.shellPtyProcesses.delete(e);
      this.shellPtyBuffers.delete(e);
      this.shellPtyBytesReceived.delete(e);
      this.shellPtyReady.delete(e);
      if ((m = this.sshShellReady.get(e)) != null) {
        m.settle("exited");
      }
      this.sshShellReady.delete(e);
      this.timeoutWaitersForSession(e);
      const y = {
        type: "shell_pty_close",
        sessionId: e,
        code: c
      };
      this.config.emit(y);
    });
    l.logEvent("desktop_ccd_terminal_spawned", {
      sessionId: e,
      shell: u.shell.split(/[/\\]/).pop() || u.shell
    });
    if (a && (await this.awaitSshShellReady(e)) === "exited") {
      return {
        ok: false,
        error: "SSH shell exited before becoming ready. Check your SSH credentials and try again."
      };
    } else {
      return {
        ok: true
      };
    }
  }
  async killPtyTree(e) {
    if (e.pid <= 0) {
      return;
    }
    const {
      spawnAsyncDirect: t
    } = await Promise.resolve().then(() => require("./index.chunk-c42vKsva.js")).then(s => s.spawnPromise);
    {
      try {
        await t("taskkill", ["/pid", String(e.pid), "/T", "/F"], {
          ignoreExitCode: true
        });
      } catch {}
      return;
    }
  }
  trackKill(e) {
    const t = this.killPtyTree(e).catch(s => {
      l.logger.warn("killPtyTree failed", s);
    }).finally(() => this.inFlightKills.delete(t));
    this.inFlightKills.add(t);
  }
  stopShellPty(e, t) {
    this.stopShellPtyKey(e);
    if (t != null && t.noSweep || e.includes(_)) {
      return;
    }
    const s = e + _;
    for (const r of Array.from(this.shellPtyProcesses.keys())) {
      if (r.startsWith(s)) {
        this.stopShellPtyKey(r);
      }
    }
  }
  stopShellPtyKey(e) {
    var s;
    const t = this.shellPtyProcesses.get(e);
    if (t) {
      l.logger.info(`Stopping shell PTY for session ${e}`);
      this.flushAllPtyEmits();
      this.trackKill(t);
      this.shellPtyProcesses.delete(e);
      this.shellPtyBuffers.delete(e);
      this.shellPtyBytesReceived.delete(e);
      this.shellPtyReady.delete(e);
      if ((s = this.sshShellReady.get(e)) != null) {
        s.settle("exited");
      }
      this.sshShellReady.delete(e);
      this.timeoutWaitersForSession(e);
      const r = {
        type: "shell_pty_close",
        sessionId: e
      };
      this.config.emit(r);
    }
  }
  timeoutWaitersForSession(e) {
    for (const [t, s] of this.shellOutputWaiters) {
      if (s.sessionId === e) {
        clearTimeout(s.timer);
        this.shellOutputWaiters.delete(t);
        s.resolve({
          timedOut: true
        });
      }
    }
  }
  resizeShellPty(e, t, s) {
    const r = this.shellPtyProcesses.get(e);
    if (r) {
      this.shellPtyProcesses.delete(e);
      this.shellPtyProcesses.set(e, r);
      try {
        r.resize(t, s);
      } catch {}
    }
  }
  writeShellPty(e, t) {
    const s = this.shellPtyProcesses.get(e);
    if (s) {
      this.shellPtyProcesses.delete(e);
      this.shellPtyProcesses.set(e, s);
      try {
        s.write(t);
      } catch {}
    }
  }
  getShellPtyBuffer(e) {
    var t;
    return ((t = this.shellPtyBuffers.get(e)) == null ? undefined : t.snapshot()) ?? null;
  }
  async getBusyShellPtyKeys(e) {
    const t = e + _;
    return {
      live: Array.from(this.shellPtyProcesses.entries()).filter(([i]) => i === e || i.startsWith(t)).map(([i]) => i),
      busy: [],
      probed: false
    };
  }
  async startBashPty(e) {
    const t = this.config.getSession(e);
    if (!t) {
      return {
        ok: false,
        error: "Session not found"
      };
    }
    if (this.bashPtyProcesses.has(e)) {
      return {
        ok: true
      };
    }
    const s = t.worktreePath || t.cwd;
    try {
      await F.promises.access(s);
    } catch {
      return {
        ok: false,
        error: `Working directory "${s}" does not exist`
      };
    }
    let r;
    try {
      r = (await import("node-pty")).spawn;
    } catch (n) {
      l.logger.error("Failed to load node-pty %o", {
        error: n
      });
      return {
        ok: false,
        error: "Failed to load terminal backend"
      };
    }
    const i = this.config.getSession(e);
    if (!i || i.isArchived) {
      return {
        ok: false,
        error: "Session was archived"
      };
    }
    if (this.bashPtyProcesses.has(e)) {
      return {
        ok: true
      };
    }
    const {
      shell: o,
      args: f
    } = H();
    let a;
    try {
      a = r(o, f, {
        name: "xterm-256color",
        cols: 80,
        rows: 24,
        cwd: s,
        env: {
          ...process.env,
          TERM: "xterm-256color",
          COLORTERM: "truecolor"
        }
      });
    } catch (n) {
      l.logger.error(`Failed to spawn bash-mode shell ${o} for session ${e}`, {
        error: n
      });
      return {
        ok: false,
        error: "Failed to spawn shell"
      };
    }
    this.bashPtyProcesses.set(e, a);
    this.bashPtyBuffers.set(e, new x());
    this.bashPtyBytesReceived.set(e, 0);
    if (this.bashPtyProcesses.size > te) {
      for (const n of this.bashPtyProcesses.keys()) {
        if (n !== e && !this.runCommandInFlight.has(n)) {
          l.logEvent("desktop_ccd_terminal_pty_evicted", {
            pool: "bash",
            size: this.bashPtyProcesses.size
          });
          this.stopBashPty(n);
          break;
        }
      }
    }
    let g;
    this.bashPtyReady.set(e, new Promise(n => g = n));
    let p = false;
    a.onData(n => {
      var d;
      var u;
      if (this.bashPtyProcesses.get(e) === a) {
        if (!p) {
          p = true;
          g();
        }
        this.bashPtyBytesReceived.set(e, (this.bashPtyBytesReceived.get(e) ?? 0) + n.length);
        if ((d = this.bashPtyBuffers.get(e)) != null) {
          d.push(n);
        }
        if ((u = this.bashPtyDataNotify.get(e)) != null) {
          u();
        }
      }
    });
    a.onExit(({
      exitCode: n
    }) => {
      if (this.bashPtyProcesses.get(e) === a) {
        l.logger.info(`Bash-mode PTY for session ${e} exited with code ${n}`);
        this.bashPtyProcesses.delete(e);
        this.bashPtyBuffers.delete(e);
        this.bashPtyBytesReceived.delete(e);
        this.bashPtyReady.delete(e);
        this.bashPtyDataNotify.delete(e);
        this.runCommandInFlight.delete(e);
      }
    });
    return {
      ok: true
    };
  }
  stopBashPty(e) {
    const t = this.bashPtyProcesses.get(e);
    if (t) {
      l.logger.info(`Stopping bash-mode PTY for session ${e}`);
      this.trackKill(t);
      this.bashPtyProcesses.delete(e);
      this.bashPtyBuffers.delete(e);
      this.bashPtyBytesReceived.delete(e);
      this.bashPtyReady.delete(e);
      this.bashPtyDataNotify.delete(e);
      this.runCommandInFlight.delete(e);
    }
  }
  async runCommand(e, t) {
    var i;
    if (this.runCommandInFlight.has(e)) {
      return {
        error: "A command is already running in this session"
      };
    }
    if (!this.bashPtyProcesses.has(e)) {
      const o = await this.startBashPty(e);
      if (!o.ok) {
        return {
          error: o.error ?? "Failed to start shell"
        };
      }
    }
    const s = this.bashPtyProcesses.get(e);
    if (!s) {
      return {
        error: "Shell unavailable"
      };
    }
    const r = this.bashPtyReady.get(e);
    if (r && (await Promise.race([r.then(() => false), new Promise(f => setTimeout(() => f(true), 5000))]))) {
      return {
        error: "Shell did not become ready within 5s"
      };
    }
    if (this.runCommandInFlight.has(e)) {
      return {
        error: "A command is already running in this session"
      };
    }
    this.runCommandInFlight.add(e);
    this.bashPtyProcesses.delete(e);
    this.bashPtyProcesses.set(e, s);
    try {
      const o = this.bashPtyBytesReceived.get(e) ?? 0;
      s.write(`${t}\r`);
      const f = Date.now() + re;
      while (Date.now() < f && (await new Promise(u => {
        const S = setTimeout(() => {
          this.bashPtyDataNotify.delete(e);
          u(false);
        }, se);
        this.bashPtyDataNotify.set(e, () => {
          clearTimeout(S);
          this.bashPtyDataNotify.delete(e);
          u(true);
        });
      }))) {
        if (!this.bashPtyProcesses.has(e)) {
          return {
            error: "Shell exited"
          };
        }
      }
      if (!this.bashPtyProcesses.has(e)) {
        return {
          error: "Shell exited"
        };
      }
      const a = this.bashPtyBytesReceived.get(e) ?? 0;
      const g = Math.min(a - o, k);
      const p = ((i = this.bashPtyBuffers.get(e)) == null ? undefined : i.snapshot()) ?? "";
      const n = p.slice(Math.max(0, p.length - g));
      return {
        output: this.cleanPtyOutput(n, t),
        exitCode: 0
      };
    } catch (o) {
      return {
        error: o instanceof Error ? o.message : String(o)
      };
    } finally {
      this.runCommandInFlight.delete(e);
    }
  }
  cleanPtyOutput(e, t) {
    let s = e.replace(ie, "").replace(/\r\n/g, `
`);
    const r = s.split(`
`).map(f => {
      const a = f.lastIndexOf("\r");
      if (a >= 0) {
        return f.slice(a + 1);
      } else {
        return f;
      }
    });
    const i = t.trim();
    while (r.length > 0 && (r[0].trim() === "" || r[0].trimEnd().endsWith(i))) {
      r.shift();
    }
    const o = /^[→❯$%#➜]\s|^PS\s.+>\s*$|[✔✓✗✘]\s*$/;
    while (r.length > 0 && (r[r.length - 1].trim() === "" || o.test(r[r.length - 1].trim()))) {
      r.pop();
    }
    s = r.join(`
`);
    if (s.length > M) {
      return `[output truncated]
${s.slice(-M)}`;
    } else {
      return s;
    }
  }
  async waitForTerminalOutput(e, t) {
    if (!this.shellPtyBuffers.has(e)) {
      return {
        noShell: true
      };
    }
    const s = j.randomUUID();
    return new Promise(r => {
      const i = setTimeout(() => {
        this.shellOutputWaiters.delete(s);
        r({
          timedOut: true
        });
      }, t);
      this.shellOutputWaiters.set(s, {
        sessionId: e,
        thresholdLength: this.shellPtyBytesReceived.get(e) ?? 0,
        resolve: r,
        timer: i
      });
    });
  }
}
const oe = {
  ScrollbackBuffer: x,
  PTY_EMIT_COALESCE_MS: O,
  SSH_SHELL_READY_SENTINEL: L
};
exports.ShellPtyManager = le;
exports._test = oe;
exports.shellPtyKeyFor = I;
//# sourceMappingURL=index.chunk-Dtoqdu4o.js.map