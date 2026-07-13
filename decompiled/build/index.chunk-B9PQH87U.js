"use strict";

(function () {
  try {
    var n = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    n.SENTRY_RELEASE = {
      id: "df1d8a339dfabcf359af7144fe142b59ff7d9a0f"
    };
  } catch {}
})();
try {
  (function () {
    var n = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    var t = new n.Error().stack;
    if (t) {
      n._sentryDebugIds = n._sentryDebugIds || {};
      n._sentryDebugIds[t] = "869384f4-e249-461c-ac32-396467370fea";
      n._sentryDebugIdIdentifier = "sentry-dbid-869384f4-e249-461c-ac32-396467370fea";
    }
  })();
} catch {}
const a = require("./index.chunk-c42vKsva.js");
const E = require("./index.chunk-BCx6X-Yy.js");
const v = require("node:fs/promises");
const R = require("electron");
const I = require("node:path");
const L = new Set([1073807364, 3221225786, 4294967295, 137, 143, -1]);
const U = 3221226505;
const P = 3221225781;
const D = new Set(["sdk_binary_missing", "sdk_binary_corrupt", "sdk_binary_arch_mismatch", "spawn_failed", "app_control_blocked", "dll_not_found"]);
const W = new Set(["result", "rate_limit_event"]);
const M = /\bdial tcp\b.{0,120}?(i\/o timeout|connection refused|no route to host|network is unreachable)|\bproxyconnect tcp:|Proxy CONNECT aborted/i;
const x = /no such file|not a directory|cannot find the (?:file|path) specified/i;
const $ = new Map([[1073807364, "DBG_TERMINATE_PROCESS"], [3221225477, "STATUS_ACCESS_VIOLATION"], [3221225540, "STATUS_QUOTA_EXCEEDED"], [3221225595, "STATUS_INVALID_IMAGE_FORMAT"], [3221225725, "STATUS_STACK_OVERFLOW"], [3221225781, "STATUS_DLL_NOT_FOUND"], [3221225785, "STATUS_ENTRYPOINT_NOT_FOUND"], [3221225786, "STATUS_CONTROL_C_EXIT"], [3221226505, "STATUS_STACK_BUFFER_OVERRUN"], [3221226519, "STATUS_INVALID_CRUNTIME_PARAMETER"], [3221227010, "STATUS_FAIL_FAST_EXCEPTION"], [3765269347, "MSC_CPP_EXCEPTION"]]);
function O(n, t) {
  var d;
  var g;
  if (n instanceof a.OAuthError) {
    if (n.reason.type === a.SESSION_STALE_RELOGIN_ERROR_CODE) {
      return {
        category: "session_stale_relogin",
        rawOutput: undefined
      };
    } else if (n.reason.type === "network_error") {
      return {
        category: a.hasNetworkServiceDiedThisLaunch() ? "network_service_dead" : "network_error",
        rawOutput: undefined
      };
    } else {
      return {
        category: n.reason.type === "server_error" ? "unknown" : "auth_error",
        rawOutput: undefined
      };
    }
  }
  if (a.isCustom3pUserStateError(n)) {
    return {
      category: "auth_error",
      rawOutput: undefined
    };
  }
  const s = n instanceof Error ? n.errors : undefined;
  const c = Array.isArray(s) ? s.map(o => o instanceof Error ? o.message : String(o)).filter(Boolean).join("; ") : "";
  const e = n instanceof Error ? n.message || c : String(n);
  const l = "Claude Code returned an error result: ";
  if (e.startsWith(l)) {
    const o = e.slice(l.length);
    if (o.includes("hit your limit") || o.includes("out of extra usage") || o.includes("out of usage credits")) {
      return {
        category: "rate_limit",
        rawOutput: o
      };
    } else if (o.includes("No conversation found with session ID")) {
      return {
        category: "cli_resume_not_found",
        rawOutput: o
      };
    } else if (o.includes("No message found with message.uuid")) {
      return {
        category: "cli_rewind_target_not_found",
        rawOutput: o
      };
    } else if (o.startsWith("Path ") && o.includes("does not exist")) {
      return {
        category: "cwd_not_found",
        rawOutput: o
      };
    } else if ((o.includes("EPERM") || o.includes("EINTR")) && (o.includes("lstat") || o.includes("stat "))) {
      return {
        category: "bun_cwd_eperm",
        rawOutput: o
      };
    } else if (M.test(o)) {
      return {
        category: "proxy_unreachable",
        rawOutput: o
      };
    } else if (o.includes("ConnectionRefused")) {
      return {
        category: "network_error",
        rawOutput: o
      };
    } else if (o.includes("Stream idle timeout")) {
      return {
        category: "network_error",
        rawOutput: o
      };
    } else if (o.includes("401") || o.includes("403") || o.toLowerCase().includes("authenticat") || o.toLowerCase().includes("forbidden")) {
      return {
        category: "auth_error",
        rawOutput: o
      };
    } else {
      return {
        category: "unknown",
        rawOutput: o
      };
    }
  }
  const i = e.match(/Output:\s*(.*)$/s);
  const r = (d = i == null ? undefined : i[1]) == null ? undefined : d.trim();
  if (e.startsWith("WorktreeCreate hook failed")) {
    return {
      category: "worktree_hook_failed",
      rawOutput: r
    };
  }
  const u = E.isDeployError(n) ? {
    code: n.code ?? ((g = E.deployInfoFromMessage(e)) == null ? undefined : g.code)
  } : E.deployInfoFromMessage(e);
  if (u) {
    const {
      code: o
    } = u;
    if (o === "ENOSPC" || o === "EDQUOT" || o === "EROFS") {
      return {
        category: "filesystem_error",
        rawOutput: r
      };
    } else if (o === "ECONNREFUSED") {
      return {
        category: "connection_refused",
        rawOutput: r
      };
    } else if (o && E.DEPLOY_NETWORK_CODES.has(o)) {
      return {
        category: "network_error",
        rawOutput: r
      };
    } else {
      return {
        category: "unknown",
        rawOutput: r
      };
    }
  }
  if (e.includes("native binary not found at")) {
    return {
      category: e.includes("/disclaimer") || e.includes("\\disclaimer") || e.includes("Helpers/disclaimer") ? "disclaimer_binary_missing" : "sdk_binary_missing",
      rawOutput: r
    };
  }
  if (e.includes("No such file or directory") && e.includes("claude")) {
    return {
      category: "sdk_binary_missing",
      rawOutput: r
    };
  }
  if (e.includes("No path to Claude code executable")) {
    return {
      category: "sdk_binary_missing",
      rawOutput: r
    };
  }
  if (e.includes("Exec format error") || e.includes("cannot execute binary file") || e.toLowerCase().includes("bad cpu type in executable")) {
    return {
      category: "sdk_binary_arch_mismatch",
      rawOutput: r
    };
  }
  if (e.includes("EFTYPE") || e.includes("ENOEXEC")) {
    return {
      category: "sdk_binary_corrupt",
      rawOutput: r
    };
  }
  if (e.includes("disclaimer binary not found")) {
    return {
      category: "disclaimer_binary_missing",
      rawOutput: r
    };
  }
  if (e.includes("Working directory no longer exists") || e.includes("Working directory \"") && e.includes(`" doesn't exist.`)) {
    return {
      category: "cwd_not_found",
      rawOutput: r
    };
  }
  if (e.includes("Working directory path is too long")) {
    return {
      category: "cwd_too_long",
      rawOutput: r
    };
  }
  if (e.includes("is outside the workspace folders allowed") || e.includes("is not within the allowed workspace roots") || e.includes("Folder access has been disabled by the administrator") || e.includes("UNC paths are not allowed") || e.includes("UNC path not allowed") || e.includes("Symlink to UNC target")) {
    return {
      category: "policy_denied",
      rawOutput: r
    };
  }
  if (e.includes("WSL sessions are not available")) {
    return {
      category: "wsl_policy_denied",
      rawOutput: r
    };
  }
  if (e.startsWith("Credential helper ") || e.startsWith("AWS SSO session expired") || e.startsWith("AWS CLI not found on PATH") || e.startsWith("Could not run the AWS CLI at")) {
    return {
      category: "auth_error",
      rawOutput: r
    };
  }
  if (e.includes("Git is required but was not found") || e.includes("Git Bash is required but was not found") || e.includes("Git LFS is required")) {
    return {
      category: "git_not_found",
      rawOutput: r
    };
  }
  if (e.includes("Failed to create worktree on remote host")) {
    return {
      category: "remote_worktree_failed",
      rawOutput: r
    };
  }
  if (e.startsWith("Can't switch to ") && e.includes("uncommitted changes") || e.startsWith("Failed to switch to ") || e.startsWith("Invalid branch name ")) {
    return {
      category: "git_checkout_failed",
      rawOutput: r
    };
  }
  if (e.startsWith("Background full checkout failed")) {
    return {
      category: "git_checkout_failed",
      rawOutput: r
    };
  }
  if (e.includes("trust approval")) {
    return {
      category: "trust_required",
      rawOutput: r
    };
  }
  if (e.includes("OTEL console exporter configured in") || r === "{") {
    return {
      category: "otel_console_exporter",
      rawOutput: r
    };
  }
  if (e.includes("Segmentation fault")) {
    return {
      category: "segfault",
      rawOutput: r
    };
  }
  if (e.includes("[BashTool]") || e.includes("Pre-flight check") || e.includes("--dangerously-skip-permissions cannot be used") || e.includes("\"type\":\"control_request\"") || e.includes("[WARN]")) {
    return {
      category: "cli_stdout_pollution",
      rawOutput: r
    };
  }
  if (e.includes("bad message") || e.includes("input/output error") || e.includes("Error 74")) {
    return {
      category: "filesystem_error",
      rawOutput: r
    };
  }
  if (e.includes("ECONNREFUSED") || e.toLowerCase().includes("connection refused")) {
    return {
      category: "connection_refused",
      rawOutput: r
    };
  }
  if (e.includes("ERR_CONNECTION") || e.includes("ERR_NETWORK") || e.includes("ERR_INTERNET") || e.includes("ETIMEDOUT") || e.includes("ECONNRESET") || e.includes("EHOSTDOWN") || e.includes("EHOSTUNREACH") || e.includes("ENETUNREACH") || e.includes("ENOTFOUND") || e.includes("getaddrinfo") || e.includes("waiting for handshake") || e.includes("Connection lost before handshake") || e.includes("Host denied") || e.includes("SSH connection setup timed out") || e.includes("network may be unreliable") || e.includes("Unexpected token '<'") || e.includes("Stream idle timeout")) {
    return {
      category: "network_error",
      rawOutput: r
    };
  }
  if (e.includes("CLI output was not valid JSON")) {
    return {
      category: "json_parse_error",
      rawOutput: r
    };
  }
  if (e.includes("EBUSY")) {
    return {
      category: "binary_locked",
      rawOutput: r
    };
  }
  if (process.platform === "win32" && /\bspawn\b[^;]*\bUNKNOWN\b/.test(e)) {
    return {
      category: "app_control_blocked",
      rawOutput: r
    };
  }
  if (e.includes("ENOENT") || e.includes("spawn UNKNOWN") || e.includes("spawn EPERM") || /\bspawn\b[^;]*\bEACCES\b/.test(e) || e.includes("spawn ENXIO") || e.includes("spawn ENOTDIR") || e.includes("spawn EAGAIN") || e.toLowerCase().includes("spawn") && e.toLowerCase().includes("failed")) {
    return {
      category: "spawn_failed",
      rawOutput: r
    };
  }
  const _ = e.match(/process exited with code (-?\d+)/);
  if (_) {
    const o = Number(_[1]);
    const f = $.get(o);
    if (o === 137 && process.platform === "darwin" && t !== undefined && !t.trim()) {
      return {
        category: "endpoint_security_blocked",
        rawOutput: r,
        exitCode: o
      };
    }
    if (L.has(o)) {
      return {
        category: "process_interrupted",
        rawOutput: r,
        exitCode: o,
        ntstatusName: f
      };
    }
    if (o === U) {
      return {
        category: "cli_fastfail",
        rawOutput: r,
        exitCode: o,
        ntstatusName: f
      };
    }
    if (o === P) {
      return {
        category: "dll_not_found",
        rawOutput: r,
        exitCode: o,
        ntstatusName: f
      };
    }
    if (t) {
      if (t.includes("panic: Stack overflow")) {
        return {
          category: "bun_stack_overflow",
          rawOutput: r,
          exitCode: o,
          ntstatusName: f
        };
      }
      if (t.includes("Bun has crashed")) {
        return {
          category: "bun_crash",
          rawOutput: r,
          exitCode: o
        };
      }
      if (t.includes("An unknown error occurred (Unexpected)") || t.includes("possibly due to low max file descriptors (Unexpected)") || t.includes("An internal error occurred (EPERM)") || t.includes("An internal error occurred (EINTR)") || t.includes("EINTR") && (t.includes("lstat") || t.includes("stat ")) || t.includes("EPERM") && (t.includes("lstat") || t.includes("stat "))) {
        return {
          category: "bun_cwd_eperm",
          rawOutput: r,
          exitCode: o
        };
      }
      if (t.includes("Symbol not found:")) {
        return {
          category: "os_too_old",
          rawOutput: r,
          exitCode: o
        };
      }
      if (t.includes("requires git-bash") || t.includes("CLAUDE_CODE_GIT_BASH_PATH")) {
        return {
          category: "git_not_found",
          rawOutput: r,
          exitCode: o
        };
      }
      if (t.includes("Expected in: /usr/lib/libicucore")) {
        return {
          category: "os_too_old",
          rawOutput: r,
          exitCode: o
        };
      }
      if (t.includes("Unable to verify organization")) {
        return {
          category: "auth_error",
          rawOutput: r,
          exitCode: o
        };
      }
      if (t.includes("cannot be launched inside another Claude Code session")) {
        return {
          category: "claudecode_nested",
          rawOutput: r,
          exitCode: o
        };
      }
      if (t.includes("--dangerously-skip-permissions can only be used in Docker/sandbox containers") || t.includes("--dangerously-skip-permissions requires the sandbox to have no internal network access")) {
        return {
          category: "bypass_permissions_gate_blocked",
          rawOutput: r,
          exitCode: o
        };
      }
      if (t.includes("cannot be used with root/sudo privileges")) {
        return {
          category: "bypass_permissions_root_blocked",
          rawOutput: r,
          exitCode: o
        };
      }
      if (t.includes("EACCES") && t.includes("claude-settings")) {
        return {
          category: "settings_write_denied",
          rawOutput: r,
          exitCode: o
        };
      }
      if (/Unknown arguments?:\s+--\w/.test(t) || /unknown option ['"]--\w/.test(t)) {
        return {
          category: "cli_flag_unsupported",
          rawOutput: r,
          exitCode: o
        };
      }
      const h = t.split(`
`).find(m => m.includes("[spawn] chdir "));
      if (h && x.test(h)) {
        return {
          category: "remote_cwd_missing",
          rawOutput: r,
          exitCode: o
        };
      }
      if (t.includes("fork/exec") && t.includes("no such file")) {
        return {
          category: "remote_spawn_failed",
          rawOutput: r,
          exitCode: o
        };
      }
      if (t.includes("Malformed Mach-o")) {
        return {
          category: "sdk_binary_corrupt",
          rawOutput: r,
          exitCode: o
        };
      }
      if (t.includes("Bad CPU type in executable")) {
        return {
          category: "sdk_binary_arch_mismatch",
          rawOutput: r,
          exitCode: o
        };
      }
    }
    return {
      category: "process_crashed",
      rawOutput: r,
      exitCode: o,
      ntstatusName: f
    };
  }
  if (e.includes("terminated by signal")) {
    if (e.includes("SIGKILL") && process.platform === "darwin" && t !== undefined && !t.trim()) {
      return {
        category: "endpoint_security_blocked",
        rawOutput: r
      };
    } else if (/SIGKILL|SIGTERM|SIGHUP|SIGQUIT/.test(e)) {
      return {
        category: "process_interrupted",
        rawOutput: r
      };
    } else {
      return {
        category: "process_crashed",
        rawOutput: r
      };
    }
  } else if (e.includes("Cannot write to process that exited") || e.includes("ProcessTransport output stream not available") || e.includes("Cannot write to terminated process") || e.includes("Failed to write to process stdin")) {
    return {
      category: "process_crashed",
      rawOutput: r
    };
  } else if (e.includes("401") || e.toLowerCase().includes("unauthorized") || e.toLowerCase().includes("authentication") || e.toLowerCase().includes("revoked") || e.includes("No API token")) {
    return {
      category: "auth_error",
      rawOutput: r
    };
  } else if (e.includes("account information is unavailable")) {
    return {
      category: "auth_error",
      rawOutput: r
    };
  } else {
    return {
      category: "unknown",
      rawOutput: r
    };
  }
}
const F = new Set(["rate_limit", "cli_resume_not_found", "cli_rewind_target_not_found"]);
function q(n) {
  const {
    category: t
  } = O("Claude Code returned an error result: " + n);
  if (F.has(t)) {
    return t;
  } else {
    return undefined;
  }
}
function H(n, t) {
  if (n === "cli_fastfail" && t !== undefined && W.has(t)) {
    return "cli_shutdown_crash_benign";
  } else {
    return n;
  }
}
const G = 30000;
function z(n, t, s = Date.now()) {
  if (n === "process_crashed" && t !== undefined && s - t <= G) {
    return "renderer_cascade";
  } else {
    return n;
  }
}
const S = new WeakSet();
function B(n) {
  if (!(n instanceof Error) || a.isCustom3pUserStateError(n) && !a.isReauthableCredentialError(n) || S.has(n)) {
    return;
  }
  if (n.message.endsWith(": session_stale_relogin") || n.message.endsWith(": untrusted_device")) {
    S.add(n);
    return;
  }
  const {
    category: t
  } = O(n);
  const s = n.message.replace(/\s*\[ccdErrorCategory:[a-z_]+\]$/, "");
  n.message = `${s} [ccdErrorCategory:${t}]`;
  S.add(n);
}
function X(n) {
  if (typeof n != "object" || n === null) {
    return null;
  }
  const t = n;
  if (typeof t.requestId != "number") {
    return null;
  }
  switch (t.type) {
    case "result":
      if (typeof t.task == "string") {
        return {
          type: "result",
          requestId: t.requestId,
          task: t.task,
          result: t.result
        };
      } else {
        return null;
      }
    case "error":
      if (typeof t.message == "string") {
        return {
          type: "error",
          requestId: t.requestId,
          message: t.message,
          stack: typeof t.stack == "string" ? t.stack : undefined
        };
      } else {
        return null;
      }
    default:
      return null;
  }
}
const C = {
  codeStats: 120000
};
class y extends Error {
  constructor(t, s, c) {
    super(s);
    this.category = t;
    this.name = "HeavyWorkError";
    if (c != null && c.stack) {
      this.stack = c.stack;
    }
  }
}
function Y(n) {
  if (n instanceof y) {
    return n.category;
  } else {
    return "unknown";
  }
}
class K {
  constructor() {
    this.child = null;
    this.port = null;
    this.spawnPromise = null;
    this.nextRequestId = 1;
    this.pending = new Map();
    this.tail = Promise.resolve();
  }
  async request(t, s) {
    const c = async () => {
      await this.ensureWorker();
      const l = this.port;
      if (!l) {
        throw new y("worker_unavailable", "heavy-work worker unavailable");
      }
      const i = this.nextRequestId++;
      let r;
      return new Promise((u, _) => {
        this.pending.set(i, {
          resolve: d => u(d),
          reject: _
        });
        r = setTimeout(() => {
          if (!this.pending.has(i)) {
            return;
          }
          this.pending.delete(i);
          _(new y("worker_timeout", `${t} timed out after ${C[t]}ms`));
          a.logger.warn(`[heavy-work] ${t} timed out after ${C[t]}ms; killing worker`);
          const d = this.child;
          this.child = null;
          this.port = null;
          if (d != null) {
            d.kill();
          }
        }, C[t]);
        l.postMessage({
          requestId: i,
          task: t,
          params: s
        });
      }).finally(() => {
        if (r !== undefined) {
          clearTimeout(r);
        }
        this.pending.delete(i);
      });
    };
    const e = this.tail.then(c, c);
    this.tail = e.catch(() => {});
    return e;
  }
  async ensureWorker() {
    if (!this.child || !this.port) {
      if (this.spawnPromise) {
        return this.spawnPromise;
      } else {
        this.spawnPromise = this.spawn().finally(() => {
          this.spawnPromise = null;
        });
        return this.spawnPromise;
      }
    }
  }
  async spawn() {
    const t = a.getViteWorkerPath("heavy-work-worker", "heavyWorkWorker.js");
    try {
      await v.access(t);
    } catch {
      a.logger.warn(`[heavy-work] worker bundle not found at ${t}; requests will reject as worker_unavailable`);
      return;
    }
    const s = R.utilityProcess.fork(t, [], {
      serviceName: "Claude Desktop Heavy Work",
      stdio: "pipe"
    });
    a.relayWorkerLines(s.stdout, i => a.logger.info(`[heavy-work-worker] ${i}`));
    a.relayWorkerLines(s.stderr, i => a.logger.info(`[heavy-work-worker] ${i}`));
    const {
      port1: c,
      port2: e
    } = new R.MessageChannelMain();
    c.on("message", i => {
      const r = X(i.data);
      if (r === null) {
        a.logger.warn("[heavy-work] ignoring malformed worker message");
        return;
      }
      const u = this.pending.get(r.requestId);
      if (u) {
        this.pending.delete(r.requestId);
        switch (r.type) {
          case "result":
            u.resolve(r.result);
            break;
          case "error":
            {
              u.reject(new y("handler_error", r.message, {
                stack: r.stack
              }));
              break;
            }
        }
      }
    });
    c.start();
    s.on("exit", i => {
      a.logger.info(`[heavy-work] worker exited (${i}); will refork on next request`);
      c.close();
      if (this.child !== null && this.child !== s) {
        return;
      }
      const r = new y("worker_exit", `heavy-work worker exited (${i})`);
      for (const u of this.pending.values()) {
        u.reject(r);
      }
      this.pending.clear();
      this.child = null;
      this.port = null;
    });
    if (!(await new Promise(i => {
      s.once("spawn", () => {
        s.postMessage(null, [e]);
        i(true);
      });
      s.once("exit", () => i(false));
    }))) {
      a.logger.warn("[heavy-work] worker failed to spawn");
      c.close();
      return;
    }
    this.child = s;
    this.port = c;
  }
}
const j = new K();
let w = null;
let k = null;
const V = 60000;
function Q(n) {
  a.logger.info(`[CCD] /stats (worker) scanned ${n.scannedFiles}/${n.totalFiles} transcript files since ${n.fromDate}${n.skippedOversizedFiles > 0 ? `; ${n.skippedOversizedFiles} skipped as oversized` : ""}${n.skippedOversizedLines > 0 ? `; ${n.skippedOversizedLines} oversized line(s) skipped` : ""}${n.fileErrors > 0 ? `; ${n.fileErrors} file error(s)` : ""}`);
}
async function J() {
  if (k && Date.now() - k.at < V) {
    return k.payload;
  }
  if (w) {
    return w;
  }
  const n = a.getClaudeConfigDir();
  w = j.request("codeStats", {
    claudeConfigDir: n
  }).catch(t => {
    a.logger.warn(`[CCD] /stats heavy-work worker failed: ${t.message}`, t);
    a.logEvent("desktop_heavy_work_failed", {
      heavy_work_task: "codeStats",
      error_category: Y(t)
    });
    throw t;
  }).then(({
    payload: t,
    diag: s
  }) => {
    Q(s);
    k = {
      at: Date.now(),
      payload: t
    };
    return t;
  }).finally(() => {
    w = null;
  });
  return w;
}
const Z = ".claude/uploads";
const b = 31457280;
const T = 20;
function ee(n) {
  const s = I.basename(n).replace(/[^a-zA-Z0-9._-]/g, "_");
  if (s && s !== "." && s !== "..") {
    return s;
  } else {
    return "file";
  }
}
const N = 60000;
function te(n, t) {
  return a.withTimeout(new Promise(s => {
    n.readdir(t, (c, e) => s(c ? null : e));
  }), N, "sftpReaddir: timed out");
}
function re(n, t, s) {
  const c = s.split("/").filter(Boolean);
  let e = t;
  return c.reduce(async (l, i) => {
    await l;
    e = `${e}/${i}`;
    const r = e;
    await a.withTimeout(new Promise((u, _) => {
      n.mkdir(r, {
        mode: 448
      }, d => {
        if (!d) {
          u();
          return;
        }
        n.readdir(r, g => g ? _(d) : u());
      });
    }), N, "sftpMkdirp: timed out");
  }, Promise.resolve());
}
function ne(n, t, s) {
  return a.withTimeout(new Promise((c, e) => {
    n.writeFile(t, s, {
      mode: 384
    }, l => l ? e(l) : c());
  }), N, "sftpWriteFile: timed out");
}
async function oe(n, t, s) {
  if (s.length === 0) {
    return [];
  }
  const c = n.remoteHome;
  if (!c) {
    throw new Error("remoteAttachments: controller.remoteHome unset (ensureReady not called?)");
  }
  const e = `${Z}/${t}`;
  const l = `${c}/${e}`;
  const i = s.slice(0, T);
  if (s.length > i.length) {
    a.sshLogger.warn(`remoteAttachments: dropping ${s.length - i.length} attachment(s) over the ${T} cap`);
  }
  return n.withSftp(async r => {
    await re(r, c, e);
    const u = await te(r, l);
    if (u === null) {
      throw new Error("remoteAttachments: cannot list uploads dir after creating it");
    }
    const _ = [];
    const d = new Set(u.map(o => o.filename.toLowerCase()));
    let g = -1;
    for (const o of i) {
      g += 1;
      const f = o.bytes;
      if (o.readFailed) {
        a.sshLogger.warn(`remoteAttachments: dropping unreadable attachment #${g}`);
        continue;
      }
      if (f.length > b) {
        a.sshLogger.warn(`remoteAttachments: dropping oversized attachment #${g} (${f.length} > ${b} bytes)`);
        continue;
      }
      let h = ee(o.name);
      const m = h.toLowerCase();
      if (d.has(m)) {
        let p = 2;
        while (d.has(`${p}-${m}`)) {
          p++;
        }
        h = `${p}-${h}`;
      }
      const A = `${l}/${h}`;
      try {
        await ne(r, A, f);
        d.add(h.toLowerCase());
        _.push(A);
      } catch (p) {
        a.sshLogger.warn(`remoteAttachments: failed to write attachment #${g} (${f.length} bytes)`, p);
      }
    }
    return _;
  });
}
function se(n) {
  if (n.length === 0) {
    return "";
  }
  const t = s => s.replace(/\\/g, "/").replace(/["\x00-\x1f]/g, "");
  return `${n.map(s => `@"${t(s)}"`).join(" ")}
`;
}
exports.MAX_ATTACHMENT_BYTES = b;
exports.MAX_ATTACHMENT_COUNT = T;
exports.SPAWN_FAIL_CATEGORIES = D;
exports.aggregateCodeStats = J;
exports.appendCcdErrorCategory = B;
exports.buildRemoteMentionPrefix = se;
exports.categorizeCcdSessionError = O;
exports.categorizeResultTextSafe = q;
exports.reclassifyBenignShutdownCrash = H;
exports.reclassifyRendererCascade = z;
exports.writeAttachmentsToRemote = oe;
//# sourceMappingURL=index.chunk-B9PQH87U.js.map