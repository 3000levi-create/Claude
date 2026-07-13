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
      e._sentryDebugIds[t] = "79e65fba-2d50-4859-b608-50c76ca3aa4f";
      e._sentryDebugIdIdentifier = "sentry-dbid-79e65fba-2d50-4859-b608-50c76ca3aa4f";
    }
  })();
} catch {}
function d(e) {
  return {
    Bash: "running",
    Read: "reading",
    Write: "writing to",
    Edit: "editing",
    Glob: "searching",
    Grep: "searching",
    Task: "running task",
    ExitPlanMode: "the plan"
  }[e] || "using";
}
function y(e) {
  if (e.command) {
    return `command: ${e.command}`;
  } else if (e.file_path) {
    return `file: ${e.file_path}`;
  } else if (e.path) {
    return `path: ${e.path}`;
  } else if (e.pattern) {
    return `pattern: ${e.pattern}`;
  } else {
    return "";
  }
}
function g(e) {
  return e !== null && typeof e == "object" && "type" in e && e.type === "text" && "text" in e && typeof e.text == "string";
}
function u(e) {
  return e !== null && typeof e == "object" && "type" in e && e.type === "tool_use" && "id" in e && typeof e.id == "string" && "name" in e && typeof e.name == "string";
}
function p(e) {
  if (e.type !== "user") {
    return;
  }
  const t = e.tool_use_result;
  if (!Array.isArray(t)) {
    return;
  }
  const s = t.filter(n => n === null || typeof n != "object" || !("type" in n) || n.type !== "image");
  if (s.length !== t.length) {
    e.tool_use_result = s;
  }
}
function c(e) {
  var s;
  if (e.type !== "user") {
    return false;
  }
  const t = (s = e.message) == null ? undefined : s.content;
  if (Array.isArray(t)) {
    return t.some(n => n !== null && typeof n == "object" && "type" in n && n.type === "tool_result");
  } else {
    return false;
  }
}
function f(e) {
  var s;
  if (e.type !== "assistant") {
    return;
  }
  const t = (s = e.message) == null ? undefined : s.content;
  if (Array.isArray(t)) {
    for (let n = t.length - 1; n >= 0; n--) {
      if (u(t[n])) {
        return t[n].name;
      }
    }
  }
}
function _(e) {
  let t;
  let s = -1;
  for (let o = e.length - 1; o >= 0; o--) {
    if (e[o].type !== "stream_event") {
      t = e[o];
      s = o;
      break;
    }
  }
  if (!t) {
    return;
  }
  const n = {
    last_message_type: t.type
  };
  const r = t.message;
  if (r != null && r.model) {
    n.last_message_model = r.model;
  }
  if (t.type === "assistant") {
    const o = f(t);
    if (o) {
      n.last_tool_name = o;
    }
  } else if (t.type === "tool_progress") {
    const o = t.tool_name;
    if (typeof o == "string") {
      n.last_tool_name = o;
    }
  } else if (t.type === "tool_use_summary") {
    for (let o = s - 1; o >= 0; o--) {
      const i = e[o];
      const a = f(i);
      if (a) {
        n.last_tool_name = a;
        break;
      }
      if (i.type === "tool_progress" && typeof i.tool_name == "string") {
        n.last_tool_name = i.tool_name;
        break;
      }
      const l = i.type;
      if (l === "result" || l === "user" && !c(i)) {
        break;
      }
    }
  }
  return n;
}
exports.getLastMessageDiagnostics = _;
exports.getMainContent = y;
exports.getToolName = d;
exports.isTextBlock = g;
exports.isToolUseBlock = u;
exports.stripToolUseResultImages = p;
//# sourceMappingURL=index.chunk-D-e9UNLU.js.map