"use strict";

var b = (r, t) => (t = Symbol[r]) ? t : Symbol.for("Symbol." + r);
var k = r => {
  throw TypeError(r);
};
var g = (r, t, e) => {
  if (t != null) {
    if (typeof t != "object" && typeof t != "function") {
      k("Object expected");
    }
    var i;
    var s;
    if (e) {
      i = t[b("asyncDispose")];
    }
    if (i === undefined) {
      i = t[b("dispose")];
      if (e) {
        s = i;
      }
    }
    if (typeof i != "function") {
      k("Object not disposable");
    }
    if (s) {
      i = function () {
        try {
          s.call(this);
        } catch (n) {
          return Promise.reject(n);
        }
      };
    }
    r.push([e, i, t]);
  } else if (e) {
    r.push([e]);
  }
  return t;
};
var R = (r, t, e) => {
  var i = typeof SuppressedError == "function" ? SuppressedError : function (o, u, c, f) {
    f = Error(c);
    f.name = "SuppressedError";
    f.error = o;
    f.suppressed = u;
    return f;
  };
  var s = o => t = e ? new i(o, t, "An error was suppressed during disposal") : (e = true, o);
  var n = o => {
    while (o = r.pop()) {
      try {
        var u = o[1] && o[1].call(o[2]);
        if (o[0]) {
          return Promise.resolve(u).then(n, c => {
            s(c);
            return n();
          });
        }
      } catch (c) {
        s(c);
      }
    }
    if (e) {
      throw t;
    }
  };
  return n();
};
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
    var t = new r.Error().stack;
    if (t) {
      r._sentryDebugIds = r._sentryDebugIds || {};
      r._sentryDebugIds[t] = "71491ac1-8362-466c-86eb-ea6b4606e488";
      r._sentryDebugIdIdentifier = "sentry-dbid-71491ac1-8362-466c-86eb-ea6b4606e488";
    }
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
const v = require("node:fs/promises");
const h = require("node:path");
const l = require("./index.chunk-c42vKsva.js");
require("node:fs");
const a = require("./index.chunk-IUD6Pydn.js");
const m = "project_memory_read";
const p = "project_memory_write";
const O = "MEMORY.md";
const _ = 262144;
const S = _;
const M = 200;
const E = {
  file: l.stringType().max(255).optional().describe("Relative filename of a single memory file to read (e.g. \"topic.md\"). Omit to list the memory directory and return the MEMORY.md index in one call.")
};
const j = l.objectType(E);
const x = {
  file: l.stringType().max(255).describe("Relative filename of the memory file to write (e.g. \"MEMORY.md\" or \"topic.md\"). Must end in .md."),
  content: l.stringType().max(S).describe("Full file content. Overwrites the file if it exists, creates it if not. To edit, call project_memory_read first and send back the whole file with your change applied.")
};
const N = l.objectType(x);
function w(r) {
  if (r.includes("/") || r.includes("\\") || r.includes("\0")) {
    return {
      ok: false,
      kind: "separator"
    };
  }
  if (h.isAbsolute(r) || h.posix.isAbsolute(r)) {
    return {
      ok: false,
      kind: "absolute"
    };
  }
  const t = h.normalize(r);
  if (t !== h.basename(t) || t === "." || t === "..") {
    return {
      ok: false,
      kind: "separator"
    };
  }
  const e = t.replace(/\.[^.]*$/, "").toUpperCase();
  if (/^(CON|PRN|AUX|NUL|COM[0-9]|LPT[0-9])$/.test(e)) {
    return {
      ok: false,
      kind: "reserved"
    };
  } else if (/\.md$/i.test(t)) {
    return {
      ok: true,
      leaf: t
    };
  } else {
    return {
      ok: false,
      kind: "extension"
    };
  }
}
async function T(r) {
  if (!r) {
    return {
      ok: false,
      kind: "no_session",
      error: "This tool requires a session context, which was not supplied on this call."
    };
  }
  const t = l.spacesProvider.peek();
  if (!t) {
    return {
      ok: false,
      kind: "no_account",
      error: "No account is signed in on this device."
    };
  }
  const e = t.getRemoteSessionSpaceEntry(r);
  if (e == null || !e.spaceId) {
    return {
      ok: false,
      kind: "no_project",
      error: "This session is not associated with a project on this device, so there is no memory directory to read."
    };
  }
  if (e.memoryEnabled !== true) {
    return {
      ok: false,
      kind: "memory_disabled",
      error: "Project memory is not available in this session."
    };
  }
  const i = t.getAutoMemoryDir(e.spaceId);
  if (i) {
    return {
      ok: true,
      dir: i,
      spaceId: e.spaceId
    };
  } else {
    return {
      ok: false,
      kind: "project_gone",
      error: "The project this session belongs to no longer exists."
    };
  }
}
function d(r, t, e, i) {
  l.logCoworkEvent("lam_space_memory_tool_call", {
    tool: r,
    ok: t,
    has_session: e !== undefined,
    ...i
  });
}
async function $(r, t) {
  const e = await T(t);
  if (!e.ok) {
    d(m, false, t, {
      error_kind: e.kind
    });
    return a.textResult(e.error, true);
  }
  if (r.file !== undefined) {
    const n = w(r.file);
    if (!n.ok) {
      d(m, false, t, {
        error_kind: n.kind
      });
      return a.textResult(`"${r.file}" is not a valid memory filename — pass a bare *.md name with no path separators.`, true);
    }
    const o = await l.readFileNoFollow(h.join(e.dir, n.leaf));
    if (o) {
      d(m, true, t, {
        bytes: o.content.length
      });
      return a.textResult(JSON.stringify({
        file: n.leaf,
        content: o.content
      }));
    } else {
      d(m, false, t, {
        error_kind: "not_found"
      });
      return a.textResult(`Memory file "${r.file}" does not exist. Call ${m} with no \`file\` argument to list available files.`, true);
    }
  }
  let i = [];
  try {
    i = (await v.readdir(e.dir, {
      withFileTypes: true
    })).filter(o => o.isFile() && /\.md$/i.test(o.name)).map(o => o.name).sort();
    if (i.length > M) {
      i = i.slice(0, M);
    }
  } catch (n) {
    if (n.code !== "ENOENT") {
      l.logger.warn("[space-memory] readdir failed:", n);
    }
  }
  const s = await l.readFileNoFollow(h.join(e.dir, O));
  d(m, true, t, {
    listed: i.length,
    has_index: s !== null
  });
  return a.textResult(JSON.stringify({
    files: i,
    index: (s == null ? undefined : s.content) ?? null
  }));
}
async function F(r, t) {
  const e = await T(t);
  if (!e.ok) {
    d(p, false, t, {
      error_kind: e.kind
    });
    return a.textResult(e.error, true);
  }
  const i = w(r.file);
  if (!i.ok) {
    d(p, false, t, {
      error_kind: i.kind
    });
    return a.textResult(`"${r.file}" is not a valid memory filename — pass a bare *.md name with no path separators.`, true);
  }
  if (Buffer.byteLength(r.content, "utf8") > _) {
    d(p, false, t, {
      error_kind: "too_large"
    });
    return a.textResult(`Content exceeds ${_} bytes. Keep memory notes concise; split large content across topic files.`, true);
  }
  await l.mkdirPrivate(e.dir);
  try {
    var s = [];
    try {
      const f = g(s, await l.SafeRoot.open(e.dir, "vm", {
        allowUnc: true
      }), true);
      const y = await f.stat(i.leaf).catch(() => null);
      if (y && !y.isFile()) {
        d(p, false, t, {
          error_kind: "not_a_file"
        });
        return a.textResult(`Memory file "${r.file}" exists but is not a regular file.`, true);
      }
      await f.writeFileAtomic(i.leaf, r.content);
      d(p, true, t, {
        created: y === null,
        bytes: r.content.length
      });
      return a.textResult(JSON.stringify({
        ok: true,
        file: i.leaf,
        created: y === null
      }));
    } catch (n) {
      var o = n;
      var u = true;
    } finally {
      var c = R(s, o, u);
      if (c) {
        await c;
      }
    }
  } catch (f) {
    l.logger.error("[space-memory] write failed:", f);
    d(p, false, t, {
      error_kind: "io"
    });
    return a.textResult(`Failed to write memory file "${r.file}".`, true);
  }
}
function A() {
  const r = [{
    name: m,
    description: "Read this session's project memory. With no `file`, returns a JSON object {files: string[], index: string | null} listing every *.md memory file and the current MEMORY.md index content. With `file` set to a bare filename (e.g. \"topic.md\"), returns {file, content} for that one file. Memory is a small set of markdown notes the user expects to persist across sessions in this project — read it before deciding whether earlier context applies.",
    schema: E,
    handler: (e, i) => $(j.parse(e), i)
  }, {
    name: p,
    description: "Write a file in this session's project memory (create or overwrite). Pass a bare `file` name ending in .md and the full `content`. To edit, call project_memory_read first and send back the whole file with your change applied. Keep MEMORY.md as a short index of one-line links to topic files; put longer notes in their own topic file. Only write what the user would want remembered across sessions.",
    schema: x,
    handler: (e, i) => F(N.parse(e), i)
  }];
  const t = new Map(r.map(e => [e.name, e.handler]));
  return {
    tools: r.map(e => ({
      name: e.name,
      description: e.description,
      inputSchema: a.zodShapeToJsonSchema(e.schema),
      _meta: {
        "anthropic/alwaysLoad": true
      }
    })),
    handleCall: async (e, i, s) => {
      const n = t.get(e);
      if (!n) {
        return a.textResult(`Unknown tool: ${e}`, true);
      }
      try {
        return await n(i, s);
      } catch (o) {
        if (o instanceof l.ZodError) {
          const u = o.issues.map(c => `${c.path.join(".") || "(root)"}: ${c.message}`).join("; ");
          return a.textResult(`${e} input invalid: ${u}. Check the tool schema.`, true);
        }
        l.logger.error("[space-memory] %s unhandled error:", e, o);
        return a.textResult(`${e} failed.`, true);
      }
    }
  };
}
const C = {
  validateMemoryFilename: w
};
exports._test = C;
exports.buildRemoteSpaceMemoryTools = A;
//# sourceMappingURL=index.chunk-k7OmH37b.js.map