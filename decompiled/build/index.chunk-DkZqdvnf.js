"use strict";

(function () {
  try {
    var s = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    s.SENTRY_RELEASE = {
      id: "df1d8a339dfabcf359af7144fe142b59ff7d9a0f"
    };
  } catch {}
})();
try {
  (function () {
    var s = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    var n = new s.Error().stack;
    if (n) {
      s._sentryDebugIds = s._sentryDebugIds || {};
      s._sentryDebugIds[n] = "6010e206-3f16-4d38-b017-65c77120c8ef";
      s._sentryDebugIdIdentifier = "sentry-dbid-6010e206-3f16-4d38-b017-65c77120c8ef";
    }
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
const e = require("./index.chunk-c42vKsva.js");
const A = require("./index.chunk-6tGukTxg.js");
const l = require("./index.chunk-IUD6Pydn.js");
const $ = require("./index.chunk-D4sIQt6U.js");
const L = require("./index.chunk-BLNdD7Yt.js");
const d = "[remote-bash]";
const f = "device_bash";
const m = "remote-devices";
const _ = `internal__${m}__${f}`;
const k = 45000;
const V = 45000;
const B = 5000;
const O = 32;
const g = 262144;
const M = "Command timed out after";
const U = {
  command: e.stringType().describe("Shell command to execute (passed to bash -c)."),
  timeout_ms: e.numberType().int().positive().max(V).optional().describe(`Timeout in milliseconds. Default ${k}.`)
};
const F = e.objectType(U);
function w(s) {
  return `rcw-${(s ?? "").toLowerCase().replace(/^(cse|session)_/, "").replace(/[^a-z0-9]/g, "") || "shared"}`.slice(0, O);
}
function D(s) {
  const n = e.getConfiguredNetworkDrives();
  return new Set(s.filter(t => {
    var o;
    var i;
    if (e.isUnsafeUnc(t.display)) {
      return true;
    }
    if (t.unc !== undefined && t.letter !== undefined) {
      return e.isBashUnreachable({
        kind: "network-drive",
        display: t.display,
        unc: t.unc,
        letter: t.letter
      });
    }
    const r = ((i = (o = /^([A-Za-z]):/.exec(t.display)) == null ? undefined : o[1]) == null ? undefined : i.toUpperCase()) ?? "";
    return n.has(r);
  }).map(t => t.display));
}
const P = {
  lexicalBashUnreachable: D
};
function N(s, n = new Set()) {
  const t = L.deriveMountNames([...s]);
  const r = {};
  for (const [o, i] of t) {
    if (n.has(o)) {
      e.logger.info(`${d} skipping bash-unreachable folder ${o}`);
      continue;
    }
    let a;
    try {
      a = e.guestCompatibleRootPath(o);
    } catch (u) {
      e.logger.warn(`${d} skipping unmountable folder ${o}: ${u instanceof Error ? u.message : u}`);
      continue;
    }
    r[i] = {
      path: a,
      mode: "rw",
      optional: true
    };
  }
  return r;
}
async function j(s, n) {
  const t = Symbol("booting");
  let r;
  try {
    if ((await Promise.race([s, new Promise(i => {
      r = setTimeout(() => i(t), n);
    })])) === t) {
      return "booting";
    } else {
      return "ready";
    }
  } catch {
    return "failed";
  } finally {
    if (r) {
      clearTimeout(r);
    }
  }
}
async function H(s, n) {
  const t = [{
    label: "resume",
    isResume: true
  }, {
    label: "create",
    isResume: false
  }, {
    label: "re-resume",
    isResume: true
  }];
  const r = [];
  for (const {
    label: o,
    isResume: i
  } of t) {
    try {
      return await e.runOneShotInVM({
        ...s,
        isResume: i
      }, n);
    } catch (a) {
      const u = a instanceof Error ? a.message : String(a);
      if (u.startsWith(M)) {
        throw a;
      }
      r.push(`${o}: ${u}`);
      e.logger.info(`${d} ${o} failed (${u}), continuing probe`);
    }
  }
  throw new Error(`device_bash failed on ${t.map(o => o.label).join(", ")}. ${r.join("; ")}`);
}
function W() {
  const s = async (n, t) => {
    var S;
    const r = Date.now();
    const o = F.parse(n);
    if (!t || w(t) === "rcw-shared") {
      return l.textResult("device_bash requires a server-asserted session id, which the remote-devices bridge did not supply. Retrying will not help — ask the user to report this.", true);
    }
    await $.awaitSessionGrantsSettled(t);
    const i = $.getTrustedFolderEntries(t);
    const a = i.map(c => c.display);
    if (a.length === 0) {
      e.logCoworkEvent("lam_mcp_tool_call_completed", {
        server_name: "remote-devices",
        server_type: "internal",
        server_uuid: e.INTERNAL_SERVER_UUIDS[m],
        tool_name: _,
        is_error: true,
        duration_ms: Date.now() - r
      });
      return l.textResult("No folders are connected to this device for the current session. Ask the user to connect a folder, then retry.", true);
    }
    const u = e.startVM();
    u.catch(() => {});
    const b = ((S = e.getSupportedFeaturesSync().yukonSilver) == null ? undefined : S.status) !== "supported";
    const y = e.getLastVMStartupError();
    const E = b || y ? "failed" : await j(u, B);
    const p = w(t);
    if (E === "booting") {
      e.logCoworkEvent("lam_mcp_tool_call_completed", {
        server_name: "remote-devices",
        server_type: "internal",
        server_uuid: e.INTERNAL_SERVER_UUIDS[m],
        tool_name: _,
        is_error: true,
        duration_ms: Date.now() - r,
        vm_status: "booting"
      });
      return l.textResult("Workspace still starting. The isolated Linux environment on this device is booting in the background (usually 10–30 seconds). Try again shortly.", true);
    }
    if (E === "failed") {
      e.logger.warn(`${d} VM unavailable: ${b ? "unsupported hardware" : y ?? e.getLastVMStartupError()}`);
      e.logCoworkEvent("lam_mcp_tool_call_completed", {
        server_name: "remote-devices",
        server_type: "internal",
        server_uuid: e.INTERNAL_SERVER_UUIDS[m],
        tool_name: _,
        is_error: true,
        duration_ms: Date.now() - r,
        vm_status: "failed"
      });
      return l.textResult("Workspace unavailable. The isolated Linux environment on this device failed to start. Use device_stage_files / device_commit_files instead.", true);
    }
    const I = D(i);
    const v = N(a, I);
    if (Object.keys(v).length === 0) {
      e.logCoworkEvent("lam_mcp_tool_call_completed", {
        server_name: "remote-devices",
        server_type: "internal",
        server_uuid: e.INTERNAL_SERVER_UUIDS[m],
        tool_name: _,
        is_error: true,
        duration_ms: Date.now() - r
      });
      return l.textResult("None of the connected folders can be mounted into the workspace (e.g. network drives). Use device_stage_files / device_commit_files instead.", true);
    }
    const x = `/sessions/${p}`;
    e.logger.info(`${d} user=${p} mounts=${Object.keys(v).join(",")} cmdLen=${o.command.length}`);
    const R = o.timeout_ms ?? k;
    const C = A.deviceBashStarted(p, Date.now() + R);
    try {
      const c = await H({
        processName: p,
        command: "bash",
        args: ["-c", o.command],
        cwd: x,
        additionalMounts: v,
        allowedDomains: []
      }, R);
      e.logCoworkEvent("lam_mcp_tool_call_completed", {
        server_name: "remote-devices",
        server_type: "internal",
        server_uuid: e.INTERNAL_SERVER_UUIDS[m],
        tool_name: _,
        is_error: c.exitCode !== 0,
        duration_ms: Date.now() - r,
        vm_status: "ready"
      });
      const h = c.output.length > 0 ? c.output : "(no output)";
      const T = h.length > g ? `${h.slice(0, g)}
[output truncated at ${g} chars]` : h;
      if (c.exitCode === 0) {
        return l.textResult(T);
      } else {
        return l.textResult(`Exit code ${c.exitCode}
${T}`, true);
      }
    } catch (c) {
      e.logger.warn(`${d} failed:`, c);
      e.logCoworkEvent("lam_mcp_tool_call_completed", {
        server_name: "remote-devices",
        server_type: "internal",
        server_uuid: e.INTERNAL_SERVER_UUIDS[m],
        tool_name: _,
        is_error: true,
        duration_ms: Date.now() - r,
        vm_status: "ready"
      });
      const h = c instanceof Error ? c.message : String(c);
      if (h.startsWith(M)) {
        return l.textResult(`${h}. The command ran but did not finish within the timeout; it may have partially completed. Do not retry non-idempotent commands.`, true);
      } else {
        return l.textResult("device_bash failed in the device workspace.", true);
      }
    } finally {
      C();
    }
  };
  return {
    tools: [{
      name: f,
      description: "Run a shell command on the user's local machine, inside the desktop Cowork workspace (an isolated Linux VM). This is NOT the cloud container — the `Bash` tool runs there; device_bash runs on the user's device.\n\nThe session's connected folders are mounted read-write under `/sessions/<session>/mnt/<folder-name>` — call device_list_dir first to see what folders are connected and what each contains. If no folders are connected, this tool will fail — ask the user to connect one first. Nothing else on the user's machine is reachable. cwd is the session home `/sessions/<session>`; `ls mnt/` lists the mounted folders. Each call is a fresh `bash -c` (no cwd/env carryover between calls); use absolute paths.\n\nThis tool has NO network access. For installs (pip, npm, apt), git operations, or any fetch, use the remote session's `Bash` tool in the cloud container, then device_commit_files to bring results to the user's disk.\n\nUse device_bash when operating on the user's local files in place would be cheaper than round-tripping them through the container — many files, an output file >20MB, or >100MB of outputs total (the device_commit_files caps). For ordinary editing of a handful of small files, prefer device_stage_files → edit in the container → device_commit_files instead.\n\nThe workspace boots on first use; if you see 'Workspace still starting', wait a few seconds and retry.",
      inputSchema: l.zodShapeToJsonSchema(U),
      _meta: {
        "anthropic/alwaysLoad": true
      }
    }],
    handleCall: async (n, t, r) => {
      if (n !== f) {
        return l.textResult(`Unknown tool: ${n}`, true);
      }
      try {
        return await s(t, r);
      } catch (o) {
        if (o instanceof e.ZodError) {
          const i = o.issues.map(a => `${a.path.join(".") || "(root)"}: ${a.message}`).join("; ");
          e.logger.warn(`${d} input validation: ${i}`);
          return l.textResult(`${f} input invalid: ${i}. Check the tool schema.`, true);
        }
        e.logger.error(`${d} unhandled error:`, o);
        return l.textResult(`${f} failed.`, true);
      }
    }
  };
}
exports.DEVICE_BASH = f;
exports._test = P;
exports.buildRemoteBashTool = W;
exports.computeRemoteBashMounts = N;
exports.processNameForRemoteSession = w;
//# sourceMappingURL=index.chunk-DkZqdvnf.js.map