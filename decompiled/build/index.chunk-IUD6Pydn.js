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
      e._sentryDebugIds[t] = "5f375172-af05-43e2-98db-d92f4ab50a61";
      e._sentryDebugIdIdentifier = "sentry-dbid-5f375172-af05-43e2-98db-d92f4ab50a61";
    }
  })();
} catch {}
const j = require("node:os");
const C = require("node:path");
const T = require("./index.chunk-CvbeGVMj.js");
const s = require("./index.chunk-c42vKsva.js");
require("node:fs/promises");
const W = require("./index.chunk-2eoqELgE.js");
const b = new s.Mutex();
function F() {
  return s.isFeatureEnabled("1434290056") && s.getAppPreference("dispatchCodeTasksPermissionMode") === "bypassPermissions" && s.isBypassPermissionsAllowed();
}
function $() {
  const e = s.isFeatureEnabled("1434290056") ? s.getAppPreference("dispatchCodeTasksPermissionMode") ?? "acceptEdits" : "acceptEdits";
  if (e === "bypassPermissions" && !s.isBypassPermissionsAllowed()) {
    return "acceptEdits";
  } else {
    return e;
  }
}
const A = "Optional file paths to forward to the child session. Only paths under your uploads directory are accepted; other paths are dropped. Pass the same path you received when the file was attached. The files are re-staged into the child's uploads.";
const U = {
  prompt: s.stringType().describe("The initial user message for the task session"),
  title: s.stringType().describe("Short descriptive title (3-6 words) for the task"),
  space_id: s.stringType().optional().describe("Optional space (project) ID from list_projects. The task is created inside this space and inherits its folders and memory."),
  attachments: s.arrayType(s.stringType()).optional().describe(A),
  directory: s.stringType().optional().describe("Optional absolute host path to a folder the task should work in (e.g. /Users/name/notes). The folder is mounted into the task session with read/write access. The user will be prompted to trust the folder if it isn't already a trusted Cowork folder.")
};
function q(e, t) {
  if (e) {
    return `Start a new isolated Cowork task session. Use this for non-code work — research, writing, planning, anything that doesn't need a git repo or host filesystem. If the task involves a git repository (editing code, running tests, making a PR), use start_code_task instead — it has real git, worktree isolation, and the user can follow along in the Code tab. Returns a session_id for ${t} or send_message. Pick a short title (3-6 words).`;
  } else {
    return `Start a new isolated task session. Use this for each distinct logical task the user asks for — the task runs independently in its own session. Returns a session_id for ${t} or send_message. Pick a short title (3-6 words).`;
  }
}
const L = `Start a NEW Claude Code session on the host machine, outside the Cowork VM. The session runs against the real filesystem with git worktree isolation and appears in the desktop Code tab. ALWAYS prefer this over start_task for code-related work — editing a repo, running tests, fixing a bug, anything touching a codebase.

BEFORE calling this:
(1) Check your existing tasks. If the user is following up on work a code session already did (fix, tweak, add one more thing), route with send_message to that session_id — it already has the repo, the branch, the worktree, and the context. A fresh session starts from zero. Only start a new session for genuinely new work or a different repo.
(2) Call list_code_workspaces to find the right path.
(3) If the workspace is ambiguous (multiple repos could match the user's request), ask the user to confirm which one before calling this tool.
(4) When you call this tool, ALWAYS tell the user which repo/workspace you are starting the task in (e.g. 'Starting a code task in /Users/name/repo').`;
function H(e) {
  const t = e.length > 0 ? s.enumType(e).optional() : s.stringType().optional();
  return {
    cwd: s.stringType().describe("Absolute host path to the working directory (e.g. /Users/name/repo). Call list_code_workspaces first to find a matching path. The user will be prompted to approve each workspace before the session starts."),
    prompt: s.stringType().describe("The user's message, VERBATIM. Quote their exact words first, then add context below if genuinely needed. Do NOT paraphrase or interpret — the code session has the repo and can figure out what the user meant; your rewrite can't."),
    title: s.stringType().describe("Short descriptive title (3-6 words) for the task"),
    model: t.describe("Model ID for the code session. Omit to use the user's default — only set this if the user asks for a specific model.")
  };
}
const K = `List host workspace paths the user has opened in Claude Code. Use these as cwd values for start_code_task. Call this before start_code_task to match the user's intent ("my apps repo") to a concrete path. If the user's request is ambiguous and multiple workspaces could match, ASK THE USER to confirm which workspace before proceeding — do not guess. start_code_task will still prompt the user per-workspace — this list is for path discovery, not pre-approval.`;
function z(e) {
  return `Send a user message to a local session. ${`Works for tasks you started AND for other sessions the user has open (find those with ${e}). `}Use this when the user's message is a continuation of an existing session — not a new request. For a new request, use start_task or start_code_task instead.`;
}
function B(e) {
  const t = `start_task, start_code_task, or ${e}`;
  return {
    session_id: s.stringType().describe(`session_id from ${t}`),
    message: s.stringType().describe("The follow-up user message"),
    attachments: s.arrayType(s.stringType()).optional().describe(A + " Not supported for code sessions.")
  };
}
const J = "Set your display name — what the user sees in the page header and sidebar instead of the default 'Dispatch' label. Use this when the user asks to rename or personalize you. Keep it short (1-3 words) so it fits the sidebar.";
const V = {
  name: s.stringType().min(1, "Name can't be empty").max(24, "Name is too long — keep it to 24 characters or fewer").refine(e => e === e.trim(), {
    message: "Name has leading or trailing whitespace"
  }).describe("Display name (1-3 words, e.g. 'Iris' or 'Night Owl')")
};
const G = "List the user's spaces (shown as Projects in the UI). Each space groups related folders and context. Pass a space's id as space_id to start_task to create the task inside that space — the task inherits the space's folders and memory.";
function E(e) {
  if (e.length === 0) {
    return "No other tasks running.";
  } else {
    return `Existing tasks:
${e.map(t => {
      const r = t.kind === "code" ? "code, " : "";
      return `  - ${t.sessionId} "${t.title}" (${r}${t.isRunning ? "running" : "idle"})`;
    }).join(`
`)}`;
  }
}
function _(e, t = false) {
  return {
    content: [{
      type: "text",
      text: e
    }],
    ...(t && {
      isError: t
    })
  };
}
function P(e, t) {
  return {
    content: [{
      type: "text",
      text: e
    }],
    structuredContent: t
  };
}
function k(e, t) {
  return {
    content: [{
      type: "text",
      text: e
    }],
    isError: true,
    structuredContent: {
      kind: t,
      error: e
    }
  };
}
function f(e) {
  return e.parentSessionId ?? "";
}
function y(e, t) {
  if (/^[/\\]{2}/.test(e)) {
    return {
      ok: false,
      error: `UNC paths are not allowed: ${e}`
    };
  } else if (C.isAbsolute(e)) {
    return {
      ok: true,
      resolved: C.resolve(e)
    };
  } else {
    return {
      ok: false,
      error: `${t} must be an absolute path: ${e}`
    };
  }
}
const S = e => e.replace(/[\\/]+$/, "");
function v(e) {
  const t = j.homedir();
  const r = (s.getAppPreference("localAgentModeTrustedFolders") ?? []).filter(n => n !== "/" && n !== t);
  const i = S(e);
  return r.some(n => {
    const o = S(n);
    return i === o || i.startsWith(o + C.sep);
  });
}
async function D(e, t, r, i) {
  var n;
  try {
    if (t === "code") {
      if (!e.startCodeSession) {
        return {
          error: "code runner is not available on this host"
        };
      }
      const o = i.code;
      if (o == null || !o.cwd) {
        return {
          error: "code spec missing cwd"
        };
      }
      const u = y(o.cwd, "cwd");
      if (!u.ok) {
        return {
          error: u.error
        };
      }
      const a = await e.startCodeSession(u.resolved, i.prompt, r, i.model, {
        useWorktree: o.useWorktree,
        sourceBranch: o.sourceBranch
      });
      s.logCoworkEvent("lam_dispatch_start_code_task", {
        parent_session_id: f(e),
        child_session_id: a,
        success: true
      });
      return {
        sessionId: a
      };
    }
    if (t === "cowork") {
      const o = i.cowork ?? {};
      let u;
      if ((n = o.folders) != null && n[0]) {
        const d = y(o.folders[0], "folder");
        if (!d.ok) {
          return {
            error: d.error
          };
        }
        u = d.resolved;
      }
      const {
        sessionId: a
      } = await e.startChildSession(i.prompt, r, o.spaceId, undefined, u);
      s.logCoworkEvent("lam_dispatch_start_task", {
        parent_session_id: f(e),
        child_session_id: a,
        success: true,
        space_id: o.spaceId
      });
      return {
        sessionId: a
      };
    }
    return {
      error: `unknown runner "${t}"`
    };
  } catch (o) {
    const u = o instanceof Error ? o.message : String(o);
    s.logger.error(`[DispatchTools] start_session (runner=${t}) failed: ${u}`);
    return {
      error: u
    };
  }
}
async function Y(e, t, r) {
  const {
    prompt: i,
    title: n,
    space_id: o,
    attachments: u
  } = t;
  let a;
  if (o && e.listProjects) {
    const h = (await e.listProjects()).find(m => m.id === o);
    if (!h) {
      s.logCoworkEvent("lam_dispatch_start_task", {
        parent_session_id: f(e),
        success: false,
        error_message: `space "${o}" not found`,
        space_id: o
      });
      return k(`Space "${o}" not found. Use list_projects to see available spaces.`, "dispatch_child");
    }
    a = h.name;
  }
  let d;
  if (t.directory) {
    const p = y(t.directory, "directory");
    if (!p.ok) {
      return k(p.error, "dispatch_child");
    }
    const h = await W.pickAndValidateMountFolder({
      providedPath: p.resolved,
      dialogTitle: "",
      dialogMessage: "",
      sessionStorageDir: null
    });
    if (!h.ok) {
      s.logCoworkEvent("lam_dispatch_start_task", {
        parent_session_id: f(e),
        success: false,
        error_message: "directory validation failed",
        space_id: o
      });
      return k(e.forwardTrustPrompt ? h.error ?? `Directory "${t.directory}" is not valid.` : `Directory "${t.directory}" is not valid.`, "dispatch_child");
    }
    d = s.mountPathOf(h.resolved);
    const m = v(d);
    s.logger.info(`[DispatchTools] start_task directory="${d}" (raw="${t.directory}") trusted=${m}`);
    if (!m) {
      const l = g => {
        s.logCoworkEvent("lam_dispatch_start_task", {
          parent_session_id: f(e),
          success: false,
          error_message: `directory trust ${g}`,
          space_id: o
        });
        const w = e.forwardTrustPrompt ? s.getAppPreference("localAgentModeTrustedFolders") ?? [] : [];
        const O = e.forwardTrustPrompt ? d : t.directory;
        return k(`Directory ${O} is not a trusted Cowork folder (${g}). ${w.length > 0 ? `Trusted folders: ${w.join(", ")}. ` : ""}Ask the user to add it under Settings > Cowork > Trusted Cowork folders, or use a path under one of the trusted folders.`, "dispatch_child");
      };
      if (!e.forwardTrustPrompt) {
        return l("not in trust list");
      }
      const c = await e.forwardTrustPrompt(s.MCP_DISPATCH_START_TASK, {
        directory: d,
        prompt: i,
        title: n
      }, {
        signal: r
      });
      if (c === null || c === "deny") {
        return l(c === null ? "no response" : "denied");
      }
      if (c === "always_allow") {
        const g = d;
        await b.runExclusive(async () => {
          const w = s.getAppPreference("localAgentModeTrustedFolders") ?? [];
          if (!v(g)) {
            await s.setAppPreference("localAgentModeTrustedFolders", [...w, g]);
          }
        });
      }
    }
  }
  try {
    const {
      sessionId: p,
      remoteSessionId: h
    } = await e.startChildSession(i, n, o, u, d);
    s.logger.info(`[DispatchTools] Spawned child ${p} ("${n}") for parent ${e.parentSessionId}`);
    const m = e.listChildren ? await e.listChildren() : undefined;
    const l = m ? E(m) : "";
    s.logCoworkEvent("lam_dispatch_start_task", {
      parent_session_id: f(e),
      child_session_id: p,
      success: true,
      space_id: o
    });
    const c = d ? e.forwardTrustPrompt ? d : t.directory : undefined;
    return P(`Task started.
session_id: ${p}
title: ${n}
${a ? `space: ${a}
` : ""}${c ? `directory: ${c}
` : ""}${l ? `
${l}` : ""}`, {
      session_id: p,
      remote_session_id: h,
      title: n,
      kind: "dispatch_child",
      ...(a && {
        space: a
      }),
      ...(c && {
        directory: c
      }),
      ...(m && {
        active_children: m
      })
    });
  } catch (p) {
    const h = p instanceof Error ? p.message : String(p);
    s.logger.error(`[DispatchTools] start_task failed for parent ${e.parentSessionId}: ${h}`);
    s.logCoworkEvent("lam_dispatch_start_task", {
      parent_session_id: f(e),
      success: false,
      error_message: h,
      space_id: o
    });
    return k(`Failed to start task: ${h}`, "dispatch_child");
  }
}
async function Q(e, t, r) {
  if (!e.startCodeSession) {
    return k("start_code_task is not available on this device.", "code");
  }
  const {
    prompt: i,
    title: n,
    model: o
  } = t;
  const u = y(t.cwd, "cwd");
  if (!u.ok) {
    return k(u.error, "code");
  }
  const a = u.resolved;
  const d = F();
  const p = S(a);
  const h = s.getAppPreference("dispatchTrustedCodeWorkspaces") ?? [];
  if (d || !h.some(l => S(l) === p)) {
    if (!e.forwardTrustPrompt) {
      return k(`Workspace ${a} is not a trusted Dispatch code workspace. Ask the user to add it under Settings > Cowork > Trusted code folders.`, "code");
    }
    const l = await e.forwardTrustPrompt(s.MCP_DISPATCH_START_CODE_TASK, {
      cwd: a,
      prompt: i,
      title: n
    }, {
      suppressAlwaysAllow: d,
      signal: r
    });
    if (l === null || l === "deny") {
      const c = l === null ? "no response" : "denied";
      s.logCoworkEvent("lam_dispatch_start_code_task", {
        parent_session_id: f(e),
        success: false,
        error_message: `trust ${c}`
      });
      return k(`Workspace trust not granted for ${a}: ${c}`, "code");
    }
    if (l === "always_allow") {
      const c = s.getAppPreference("dispatchTrustedCodeWorkspaces") ?? [];
      if (!c.some(g => S(g) === p)) {
        await s.setAppPreference("dispatchTrustedCodeWorkspaces", [...c, a]);
      }
    }
  }
  try {
    const l = await e.startCodeSession(a, i, n, o);
    s.logger.info(`[DispatchTools] Spawned host code session ${l} at ${a} for parent ${e.parentSessionId}`);
    const c = e.listChildren ? await e.listChildren() : undefined;
    const g = c ? E(c) : "";
    s.logCoworkEvent("lam_dispatch_start_code_task", {
      parent_session_id: f(e),
      child_session_id: l,
      success: true
    });
    const w = e.getSessionEvents ? "get_session_events" : "read_transcript";
    return P(`Code session started on host.
session_id: ${l}
cwd: ${a}
title: ${n}

The session appears in the desktop Code tab. Use ${w} to check progress or send_message to route a follow-up.${g ? `

${g}` : ""}`, {
      session_id: l,
      remote_session_id: undefined,
      title: n,
      kind: "code",
      cwd: a,
      ...(c && {
        active_children: c
      })
    });
  } catch (l) {
    const c = l instanceof Error ? l.message : String(l);
    const g = l instanceof Error && l.name === "WorkspaceTrustError";
    s.logger.error(`[DispatchTools] start_code_task failed for ${a}: ${c}`);
    s.logCoworkEvent("lam_dispatch_start_code_task", {
      parent_session_id: f(e),
      success: false,
      error_message: c
    });
    return k(g ? `Workspace trust could not be established for "${a}". Try a path from list_code_workspaces.` : `Failed to start code session: ${c}`, "code");
  }
}
async function X(e) {
  if (!e.listCodeWorkspaces) {
    return _("list_code_workspaces is not available.", true);
  }
  const t = await e.listCodeWorkspaces();
  if (t.length === 0) {
    return _("No known workspaces. start_code_task with any absolute path will prompt the user.");
  } else {
    return _(`Known workspaces (${t.length}):
${t.map(r => `  - ${r}`).join(`
`)}`);
  }
}
async function Z(e, t) {
  const {
    session_id: r,
    message: i,
    attachments: n
  } = t;
  let o = null;
  if (e.getTargetSession && (o = await e.getTargetSession(r), !o)) {
    s.logCoworkEvent("lam_dispatch_send_message", {
      parent_session_id: f(e),
      target_session_id: r,
      success: false,
      error_message: "session not found"
    });
    return _(e.getSessionEvents && !e.listDispatchSessions ? `Session "${r}" not found. Valid session_ids are the ones returned by your start_task or start_code_task calls.` : `Session "${r}" not found. Use list_sessions to see available sessions.`, true);
  }
  const u = e.listChildren ? (await e.listChildren()).some(d => d.sessionId === r) : undefined;
  const a = (o == null ? undefined : o.title) ?? "Untitled task";
  try {
    await e.sendMessage(r, i, n);
    s.logger.info(`[DispatchTools] Routed follow-up to ${r} ("${a}")`);
    s.logCoworkEvent("lam_dispatch_send_message", {
      parent_session_id: f(e),
      target_session_id: r,
      target_is_child: u,
      target_kind: o == null ? undefined : o.kind,
      success: true
    });
    const d = e.getSessionEvents ? "get_session_events" : "read_transcript";
    return _(`Message sent to "${a}". Use ${d} to see the response.`);
  } catch (d) {
    const p = d instanceof Error ? d.message : String(d);
    s.logger.error(`[DispatchTools] send_message failed for ${r}: ${p}`);
    s.logCoworkEvent("lam_dispatch_send_message", {
      parent_session_id: f(e),
      target_session_id: r,
      target_is_child: u,
      target_kind: o == null ? undefined : o.kind,
      success: false,
      error_message: p
    });
    return _(`Failed to send message: ${p}`, true);
  }
}
async function x(e, t) {
  if (!e.setAgentName) {
    return _("set_agent_name is not available.", true);
  }
  try {
    await e.setAgentName(t.name);
    s.logger.info(`[DispatchTools] Agent name set to "${t.name}"`);
    return _(`Name saved. The header and sidebar now show "${t.name}".`);
  } catch (r) {
    const i = r instanceof Error ? r.message : String(r);
    return _(`Failed to save name: ${i}`, true);
  }
}
async function ee(e) {
  if (!e.listProjects) {
    return _("list_projects is not available.", true);
  }
  const t = await e.listProjects();
  s.logCoworkEvent("lam_dispatch_list_projects", {
    parent_session_id: f(e),
    project_count: t.length
  });
  if (t.length === 0) {
    return _("No spaces configured.");
  }
  const r = t.map(i => {
    const n = i.description ? ` — ${i.description}` : "";
    const o = i.folderCount === 1 ? "1 folder" : `${i.folderCount} folders`;
    return `  - ${i.id} "${i.name}" (${o})${n}`;
  });
  return _(`Spaces (${t.length}):
${r.join(`
`)}`);
}
function I(e) {
  const t = !!e.startCodeSession;
  const r = "read_transcript";
  const i = "list_sessions";
  const n = [T.tool(s.DISPATCH_START_TASK, q(t, r), U, o => Y(e, o)), T.tool(s.DISPATCH_SEND_MESSAGE, z(i), B(i), o => Z(e, o))];
  if (e.setAgentName) {
    n.push(T.tool(s.DISPATCH_SET_AGENT_NAME, J, V, o => x(e, o)));
  }
  if (e.listCodeWorkspaces) {
    n.push(T.tool(s.DISPATCH_LIST_CODE_WORKSPACES, K, {}, () => X(e)));
  }
  if (e.listProjects) {
    n.push(T.tool(s.DISPATCH_LIST_PROJECTS, G, {}, () => ee(e)));
  }
  if (e.startCodeSession) {
    const o = e.codeModelIds ?? [];
    s.logger.info(`[DispatchTools] Building start_code_task schema with ${o.length} models: ${o.join(", ") || "(none)"}`);
    n.push(T.tool(s.DISPATCH_START_CODE_TASK, L, H(o), u => Q(e, u)));
  }
  return n;
}
function M(e) {
  const t = s.zodToJsonSchema(s.objectType(e), {
    target: "jsonSchema7"
  });
  return {
    type: "object",
    properties: t.properties ?? {},
    ...(t.required && t.required.length > 0 ? {
      required: t.required
    } : {})
  };
}
function N(e) {
  return {
    type: "addRules",
    rules: [{
      toolName: s.MCP_DISPATCH_START_CODE_TASK,
      ruleContent: e
    }],
    behavior: "allow",
    destination: "session"
  };
}
function R(e) {
  return {
    type: "addRules",
    rules: [{
      toolName: s.MCP_DISPATCH_START_TASK,
      ruleContent: e
    }],
    behavior: "allow",
    destination: "session"
  };
}
const se = Object.freeze(Object.defineProperty({
  __proto__: null,
  buildCoworkDirTrustSuggestion: R,
  buildLocalDispatchTools: I,
  buildWorkspaceTrustSuggestion: N,
  handleDispatchStartSession: D,
  resolveDispatchCodePermissionMode: $,
  textResult: _,
  validateDispatchPath: y,
  zodShapeToJsonSchema: M
}, Symbol.toStringTag, {
  value: "Module"
}));
exports.buildCoworkDirTrustSuggestion = R;
exports.buildLocalDispatchTools = I;
exports.buildWorkspaceTrustSuggestion = N;
exports.dispatchTools = se;
exports.handleDispatchStartSession = D;
exports.resolveDispatchCodePermissionMode = $;
exports.textResult = _;
exports.trustedFoldersMutex = b;
exports.validateDispatchPath = y;
exports.zodShapeToJsonSchema = M;
//# sourceMappingURL=index.chunk-IUD6Pydn.js.map