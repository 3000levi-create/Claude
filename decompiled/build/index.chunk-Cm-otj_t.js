"use strict";

(function () {
  try {
    var t = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    t.SENTRY_RELEASE = {
      id: "df1d8a339dfabcf359af7144fe142b59ff7d9a0f"
    };
  } catch {}
})();
try {
  (function () {
    var t = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    var e = new t.Error().stack;
    if (e) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[e] = "18f0dcaa-06d6-49a4-9d80-31ac79f8d635";
      t._sentryDebugIdIdentifier = "sentry-dbid-18f0dcaa-06d6-49a4-9d80-31ac79f8d635";
    }
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
const n = require("./index.chunk-c42vKsva.js");
const ee = require("node:fs/promises");
const te = require("node:fs");
const re = require("node:path");
const j = require("node:child_process");
const q = require("node:crypto");
const ie = require("node:readline");
const ne = require("node:util");
const se = require("node:stream");
const oe = require("node:stream/promises");
function b(t) {
  const e = Object.create(null, {
    [Symbol.toStringTag]: {
      value: "Module"
    }
  });
  if (t) {
    for (const r in t) {
      if (r !== "default") {
        const i = Object.getOwnPropertyDescriptor(t, r);
        Object.defineProperty(e, r, i.get ? i : {
          enumerable: true,
          get: () => t[r]
        });
      }
    }
  }
  e.default = t;
  return Object.freeze(e);
}
const h = b(ee);
const I = b(te);
const f = b(re);
const D = b(j);
const ae = b(q);
const le = b(ie);
function v(t) {
  if (t.inputSchema.type !== "object") {
    throw new Error(`JSON schema for tool "${t.name}" must be an object, but got ${t.inputSchema.type}`);
  }
  return {
    type: "custom",
    name: t.name,
    input_schema: t.inputSchema,
    description: t.description,
    run: t.run,
    parse: e => e,
    ...(t.close ? {
      close: t.close
    } : {})
  };
}
const R = 493;
const ce = 420;
async function de(t) {
  try {
    return await h.realpath(t);
  } catch {
    return t;
  }
}
async function ue(t) {
  const e = [];
  let r = t;
  let i = 0;
  while (true) {
    let s;
    try {
      s = await h.realpath(r);
    } catch {
      let o = false;
      try {
        o = (await h.lstat(r)).isSymbolicLink();
      } catch {}
      if (o) {
        if (++i > 40) {
          throw new n.ToolError(`path ${JSON.stringify(t)} has too many levels of symbolic links`);
        }
        r = f.resolve(f.dirname(r), await h.readlink(r));
        continue;
      }
      const l = f.dirname(r);
      if (l === r) {
        return t;
      }
      e.push(f.basename(r));
      r = l;
      continue;
    }
    if (e.length) {
      return f.join(s, ...e.reverse());
    } else {
      return s;
    }
  }
}
async function fe(t, e, r) {
  const i = (r == null ? undefined : r.allowOutside) ?? false;
  if (f.isAbsolute(e)) {
    if (!i) {
      throw new n.ToolError(`absolute path ${JSON.stringify(e)} not permitted`);
    }
    return f.resolve(e);
  }
  const s = await de(f.resolve(t));
  const o = f.resolve(s, e);
  if (i) {
    return o;
  }
  const l = await ue(o);
  const a = s.endsWith(f.sep) ? s : s + f.sep;
  if (l !== s && !l.startsWith(a)) {
    throw new n.ToolError(`path ${JSON.stringify(e)} escapes workdir`);
  }
  return l;
}
async function N(t, e) {
  const r = f.dirname(t);
  const i = f.join(r, `.tmp-${process.pid}-${q.randomUUID()}`);
  let s;
  try {
    s = await h.open(i, "wx", ce);
    await s.writeFile(e, "utf-8");
    await s.sync();
    await s.close();
    s = undefined;
    await h.rename(i, t);
  } catch (o) {
    if (s) {
      await s.close().catch(() => {});
    }
    await h.unlink(i).catch(() => {});
    throw o;
  }
}
function F(t, e) {
  switch (t == null ? undefined : t.code) {
    case "ENOENT":
      return `${e}: no such file or directory`;
    case "EACCES":
    case "EPERM":
      return `${e}: permission denied`;
    case "ENOTDIR":
      return `${e}: not a directory`;
    case "EISDIR":
      return `${e}: is a directory`;
    case "ELOOP":
      return `${e}: too many levels of symbolic links`;
    case "ENAMETOOLONG":
      return `${e}: file name too long`;
    case "ENOSPC":
      return `${e}: no space left on device`;
    case "EMFILE":
    case "ENFILE":
      return `${e}: too many open files`;
    default:
      return `${e}: ${t instanceof Error ? t.message : String(t)}`;
  }
}
const he = ne.promisify(j.execFile);
async function pe(t) {
  const {
    client: e,
    sessionId: r
  } = t;
  if (!e || !r) {
    return async () => {};
  }
  const i = n.loggerFor(e);
  const s = await e.beta.sessions.retrieve(r);
  const o = f.resolve(t.workdir, "skills");
  const l = [];
  for (const a of s.agent.skills) {
    try {
      const c = await B(e, a.skill_id, a.version);
      const u = await e.beta.skills.versions.retrieve(c, {
        skill_id: a.skill_id
      });
      let d = f.basename(u.name.trim());
      if (d === "" || d === "." || d === "..") {
        d = a.skill_id;
      }
      const m = f.resolve(o, d);
      if (m !== o && !m.startsWith(o + f.sep)) {
        i.warn("skill name escapes the skills dir; skipping", {
          component: "agent-tool-context",
          name: u.name
        });
        continue;
      }
      const E = await e.beta.skills.versions.download(c, {
        skill_id: a.skill_id
      });
      await h.rm(m, {
        recursive: true,
        force: true
      });
      await h.mkdir(m, {
        recursive: true,
        mode: R
      });
      l.push(m);
      await W(E, m);
      i.info("downloaded skill", {
        component: "agent-tool-context",
        skill_id: a.skill_id,
        version: c,
        dest: m
      });
    } catch (c) {
      i.warn("failed to download skill", {
        component: "agent-tool-context",
        skill_id: a.skill_id,
        error: String(c)
      });
    }
  }
  return async () => {
    for (const a of l) {
      await h.rm(a, {
        recursive: true,
        force: true
      }).catch(c => {
        i.warn("failed to clean up skill", {
          component: "agent-tool-context",
          dest: a,
          error: String(c)
        });
      });
    }
  };
}
async function B(t, e, r) {
  if (/^\d+$/.test(r)) {
    return r;
  }
  let i;
  for await (const s of t.beta.skills.versions.list(e)) {
    if (/^\d+$/.test(s.version) && (i === undefined || BigInt(s.version) > BigInt(i))) {
      i = s.version;
    }
  }
  if (i === undefined) {
    throw new n.AnthropicError(`skill ${JSON.stringify(e)} has no concrete version to resolve ${JSON.stringify(r)} against`);
  }
  return i;
}
function we(t) {
  for (const e of t.split(`
`)) {
    const r = e.trim();
    if (r && (f.isAbsolute(r) || r.split(/[\\/]/).includes(".."))) {
      throw new n.AnthropicError(`refusing to extract unsafe archive member: ${r}`);
    }
  }
}
function me(t) {
  for (const e of t.split(`
`)) {
    const r = e.trimStart()[0];
    if (r === "l" || r === "h" || r === "b" || r === "c" || r === "p" || r === "s") {
      throw new n.AnthropicError("refusing to extract archive with symlink/hardlink/device member");
    }
  }
}
async function A(t, e) {
  try {
    const {
      stdout: r
    } = await he(t, e);
    return r;
  } catch (r) {
    throw r != null && typeof r == "object" && r.code === "ENOENT" ? new n.AnthropicError(`skill extraction requires the \`${t}\` command, but it was not found on PATH`) : r;
  }
}
function _e(t) {
  let e;
  let r = false;
  for (const i of t.split(`
`)) {
    const s = i.trim().split("/").filter(l => l !== "" && l !== ".");
    if (s.length === 0) {
      continue;
    }
    const o = s[0];
    if (e === undefined) {
      e = o;
    } else if (o !== e) {
      return "";
    }
    if (s.length > 1) {
      r = true;
    }
  }
  if (e !== undefined && r) {
    return e;
  } else {
    return "";
  }
}
async function W(t, e) {
  const r = f.join(e, `.skill-archive-${process.pid}-${Date.now()}`);
  if (!t.body) {
    throw new n.AnthropicError("skill download response had no body");
  }
  await oe.pipeline(se.Readable.fromWeb(t.body), I.createWriteStream(r));
  const i = f.join(f.dirname(e), `.skill-stage-${process.pid}-${Date.now()}`);
  try {
    const s = await ye(r, 4);
    const o = s.length >= 4 && s[0] === 80 && s[1] === 75 && s[2] === 3 && s[3] === 4;
    const l = o ? "unzip" : "tar";
    const a = await A(l, o ? ["-Z1", r] : ["-tf", r]);
    we(a);
    me(await A(l, o ? ["-Z", r] : ["-tvf", r]));
    const c = _e(a);
    await h.mkdir(i, {
      recursive: true,
      mode: R
    });
    await A(l, o ? ["-oq", r, "-d", i] : ["-xf", r, "-C", i]);
    const u = c ? f.join(i, c) : i;
    for (const d of await h.readdir(u)) {
      await h.rename(f.join(u, d), f.join(e, d));
    }
  } finally {
    await h.rm(r, {
      force: true
    });
    await h.rm(i, {
      recursive: true,
      force: true
    });
  }
}
async function ye(t, e) {
  const r = await h.open(t, "r");
  try {
    const i = Buffer.alloc(e);
    const {
      bytesRead: s
    } = await r.read(i, 0, e, 0);
    return i.subarray(0, s);
  } finally {
    await r.close();
  }
}
var k;
var p;
var w;
var T;
var y;
var _;
var O;
const M = 102400;
const U = 120000;
const be = 262144;
const S = 102400;
const ve = 2000;
const ge = 200;
const Ee = /\x1b\[[0-9;?]*[ -/]*[@-~]/g;
const Te = h.glob;
function x(t) {
  if (t === undefined) {
    return be;
  } else {
    return t;
  }
}
function Se(t) {
  return [H(t), z(t), J(t), K(t), X(t), V(t)];
}
function g(t, e) {
  return fe(t.workdir, e, {
    allowOutside: t.unrestrictedPaths ?? false
  });
}
function Pe() {
  const t = {};
  for (const [e, r] of Object.entries(process.env)) {
    if (!e.startsWith("ANTHROPIC_")) {
      t[e] = r;
    }
  }
  return t;
}
class C {
  constructor(e, r = Pe()) {
    k.add(this);
    p.set(this, undefined);
    w.set(this, "");
    T.set(this, false);
    y.set(this, false);
    _.set(this, null);
    n.__classPrivateFieldSet(this, p, D.spawn("/bin/bash", ["--noprofile", "--norc"], {
      cwd: e,
      env: {
        ...r,
        PS1: "",
        PS2: "",
        TERM: "dumb"
      },
      stdio: ["pipe", "pipe", "pipe"],
      detached: true
    }));
    n.__classPrivateFieldGet(this, p, "f").stdout.setEncoding("utf8");
    n.__classPrivateFieldGet(this, p, "f").stderr.setEncoding("utf8");
    n.__classPrivateFieldGet(this, p, "f").stdout.on("data", i => n.__classPrivateFieldGet(this, k, "m", O).call(this, i));
    n.__classPrivateFieldGet(this, p, "f").stderr.on("data", i => n.__classPrivateFieldGet(this, k, "m", O).call(this, i));
    n.__classPrivateFieldGet(this, p, "f").once("close", () => {
      n.__classPrivateFieldSet(this, y, true);
      const i = n.__classPrivateFieldGet(this, _, "f");
      n.__classPrivateFieldSet(this, _, null);
      if (i != null) {
        i.resolve();
      }
    });
  }
  get closed() {
    return n.__classPrivateFieldGet(this, y, "f");
  }
  async exec(e, r = {}) {
    if (n.__classPrivateFieldGet(this, y, "f")) {
      throw new n.AnthropicError("bash session terminated");
    }
    const i = r.timeoutMs ?? U;
    const s = r.signal;
    if (s != null && s.aborted) {
      throw new n.AnthropicError("bash command aborted");
    }
    n.__classPrivateFieldSet(this, w, "");
    n.__classPrivateFieldSet(this, T, false);
    const o = `__ANT_CMD_${ae.randomUUID()}_DONE__`;
    const l = `${o.slice(0, 8)}''${o.slice(8)}`;
    const a = `{ ${e}
} </dev/null 2>&1; printf '\\n${l}%d\\n' $?
`;
    n.__classPrivateFieldGet(this, p, "f").stdin.write(a);
    if (n.__classPrivateFieldGet(this, w, "f").indexOf(o) < 0) {
      const {
        promise: Z,
        resolve: Y
      } = n.promiseWithResolvers();
      n.__classPrivateFieldSet(this, _, {
        sentinel: o,
        resolve: Y
      });
      let $;
      let P;
      try {
        await Promise.race([Z, new Promise((Q, G) => {
          $ = setTimeout(() => G(new n.AnthropicError(`bash command timed out after ${i}ms`)), i);
        }), new Promise((Q, G) => {
          if (s) {
            P = () => G(new n.AnthropicError("bash command aborted"));
            s.addEventListener("abort", P, {
              once: true
            });
          }
        })]);
      } finally {
        if ($) {
          clearTimeout($);
        }
        if (P && s) {
          s.removeEventListener("abort", P);
        }
        n.__classPrivateFieldSet(this, _, null);
      }
    }
    const c = n.__classPrivateFieldGet(this, w, "f").indexOf(o);
    if (c < 0) {
      throw new n.AnthropicError("bash session terminated");
    }
    const d = n.__classPrivateFieldGet(this, w, "f").slice(c + o.length).match(/^(-?\d+)/);
    const m = d ? parseInt(d[1], 10) : -1;
    let E = n.__classPrivateFieldGet(this, w, "f").slice(0, c).replace(Ee, "").replace(/\n+$/, "");
    if (n.__classPrivateFieldGet(this, T, "f")) {
      E = `[output truncated]
${E}`;
    }
    return {
      output: E,
      exitCode: m
    };
  }
  close() {
    if (n.__classPrivateFieldGet(this, y, "f")) {
      return;
    }
    n.__classPrivateFieldSet(this, y, true);
    const e = n.__classPrivateFieldGet(this, _, "f");
    n.__classPrivateFieldSet(this, _, null);
    if (e != null) {
      e.resolve();
    }
    n.__classPrivateFieldGet(this, p, "f").stdout.destroy();
    n.__classPrivateFieldGet(this, p, "f").stderr.destroy();
    n.__classPrivateFieldGet(this, p, "f").stdin.destroy();
    try {
      process.kill(-n.__classPrivateFieldGet(this, p, "f").pid, "SIGKILL");
    } catch {
      n.__classPrivateFieldGet(this, p, "f").kill("SIGKILL");
    }
    n.__classPrivateFieldGet(this, p, "f").unref();
  }
}
p = new WeakMap();
w = new WeakMap();
T = new WeakMap();
y = new WeakMap();
_ = new WeakMap();
k = new WeakSet();
O = function (e) {
  n.__classPrivateFieldSet(this, w, n.__classPrivateFieldGet(this, w, "f") + e);
  if (n.__classPrivateFieldGet(this, w, "f").length > M) {
    n.__classPrivateFieldSet(this, w, n.__classPrivateFieldGet(this, w, "f").slice(n.__classPrivateFieldGet(this, w, "f").length - M));
    n.__classPrivateFieldSet(this, T, true);
  }
  if (n.__classPrivateFieldGet(this, _, "f") && n.__classPrivateFieldGet(this, w, "f").indexOf(n.__classPrivateFieldGet(this, _, "f").sentinel) >= 0) {
    const r = n.__classPrivateFieldGet(this, _, "f");
    n.__classPrivateFieldSet(this, _, null);
    r.resolve();
  }
};
function H(t) {
  let e;
  let r = Promise.resolve();
  return v({
    name: "bash",
    description: "Run a bash command in a persistent shell. State (cwd, env vars) persists across calls.",
    inputSchema: {
      type: "object",
      properties: {
        command: {
          type: "string",
          description: "The command to run"
        },
        restart: {
          type: "boolean",
          description: "Restart the persistent shell before running"
        },
        timeout_ms: {
          type: "integer",
          description: "Per-call timeout in milliseconds"
        }
      }
    },
    run: async ({
      command: i,
      restart: s,
      timeout_ms: o
    }, l) => {
      const a = r;
      const c = n.promiseWithResolvers();
      r = c.promise;
      try {
        await a;
      } catch {}
      try {
        if (s) {
          if (e != null) {
            e.close();
          }
          e = undefined;
        }
        if (!i) {
          if (s) {
            return "bash session restarted";
          }
          throw new n.ToolError("bash: command is required");
        }
        e ??= new C(t.workdir, t.env);
        try {
          const {
            output: u,
            exitCode: d
          } = await e.exec(i, {
            timeoutMs: o ?? U,
            signal: l == null ? undefined : l.signal
          });
          if (d !== 0) {
            throw new n.ToolError(u || `exit ${d}`);
          }
          return u;
        } catch (u) {
          throw u instanceof n.ToolError ? u : (e.close(), e = undefined, new n.ToolError(`bash: ${u instanceof Error ? u.message : String(u)}`));
        }
      } finally {
        c.resolve();
      }
    },
    close: () => {
      if (e != null) {
        e.close();
      }
      e = undefined;
    }
  });
}
function z(t) {
  return v({
    name: "read",
    description: "Read a UTF-8 text file relative to the workdir.",
    inputSchema: {
      type: "object",
      properties: {
        file_path: {
          type: "string"
        },
        view_range: {
          type: "array",
          items: {
            type: "integer"
          },
          description: "[start_line, end_line] 1-indexed inclusive"
        }
      },
      required: ["file_path"]
    },
    run: async ({
      file_path: e,
      view_range: r
    }) => {
      if (!e) {
        throw new n.ToolError("read: file_path is required");
      }
      const i = await g(t, e);
      let s;
      try {
        const d = await h.stat(i);
        if (!d.isFile()) {
          throw new n.ToolError(`read: ${e} is not a regular file`);
        }
        const m = x(t.maxFileBytes);
        if (m !== null && d.size > m) {
          throw new n.ToolError(`read: ${e} is ${d.size} bytes, exceeds ${m}-byte limit. Use bash (head/tail/sed) to read a slice.`);
        }
        s = await h.readFile(i, "utf8");
      } catch (d) {
        throw d instanceof n.ToolError ? d : new n.ToolError(`read: ${F(d, e)}`);
      }
      if (!r) {
        return s;
      }
      if (r.length !== 2) {
        throw new n.ToolError("read: view_range must be [start_line, end_line]");
      }
      const [o, l] = r;
      const a = s.split(`
`);
      const c = Math.max(0, o - 1);
      const u = l > 0 ? l : a.length;
      return a.slice(c, u).join(`
`);
    }
  });
}
function J(t) {
  return v({
    name: "write",
    description: "Write a UTF-8 text file relative to the workdir, creating parent directories as needed.",
    inputSchema: {
      type: "object",
      properties: {
        file_path: {
          type: "string"
        },
        content: {
          type: "string"
        }
      },
      required: ["file_path", "content"]
    },
    run: async ({
      file_path: e,
      content: r
    }) => {
      if (!e) {
        throw new n.ToolError("write: file_path is required");
      }
      const i = await g(t, e);
      try {
        await h.mkdir(f.dirname(i), {
          recursive: true,
          mode: R
        });
        await N(i, r ?? "");
      } catch (s) {
        throw new n.ToolError(`write: ${F(s, e)}`);
      }
      return `wrote ${Buffer.byteLength(r ?? "")} bytes to ${e}`;
    }
  });
}
function K(t) {
  return v({
    name: "edit",
    description: "Replace old_string with new_string in a file. old_string must be unique unless replace_all.",
    inputSchema: {
      type: "object",
      properties: {
        file_path: {
          type: "string"
        },
        old_string: {
          type: "string"
        },
        new_string: {
          type: "string"
        },
        replace_all: {
          type: "boolean"
        }
      },
      required: ["file_path", "old_string", "new_string"]
    },
    run: async ({
      file_path: e,
      old_string: r,
      new_string: i,
      replace_all: s
    }) => {
      if (!e) {
        throw new n.ToolError("edit: file_path is required");
      }
      if (!r) {
        throw new n.ToolError("edit: old_string is required");
      }
      const o = await g(t, e);
      let l;
      try {
        const u = await h.stat(o);
        if (!u.isFile()) {
          throw new n.ToolError(`edit: ${e} is not a regular file`);
        }
        const d = x(t.maxFileBytes);
        if (d !== null && u.size > d) {
          throw new n.ToolError(`edit: ${e} is ${u.size} bytes, exceeds ${d}-byte limit. Use bash (sed/awk) to edit a large file.`);
        }
        l = await h.readFile(o, "utf8");
      } catch (u) {
        throw u instanceof n.ToolError ? u : new n.ToolError(`edit: ${F(u, e)}`);
      }
      const a = l.split(r).length - 1;
      if (a === 0) {
        throw new n.ToolError(`edit: old_string not found in ${e}`);
      }
      let c;
      if (s) {
        c = l.split(r).join(i);
      } else {
        if (a > 1) {
          throw new n.ToolError(`edit: old_string appears ${a} times in ${e} (must be unique)`);
        }
        c = l.replace(r, () => i);
      }
      try {
        await N(o, c);
      } catch (u) {
        throw new n.ToolError(`edit: write: ${F(u, e)}`);
      }
      return `edited ${e} (${s ? a : 1} replacement(s))`;
    }
  });
}
function X(t) {
  return v({
    name: "glob",
    description: "Match files under the workdir against a glob pattern. Results are mtime-sorted, newest first.",
    inputSchema: {
      type: "object",
      properties: {
        pattern: {
          type: "string"
        },
        path: {
          type: "string",
          description: "Directory to search in. Defaults to the workdir."
        }
      },
      required: ["pattern"]
    },
    run: async ({
      pattern: e,
      path: r
    }) => {
      if (!e) {
        throw new n.ToolError("glob: pattern is required");
      }
      let i = f.resolve(t.workdir);
      let s = e;
      if (f.isAbsolute(e)) {
        if (!t.unrestrictedPaths) {
          throw new n.ToolError("glob: absolute pattern not permitted");
        }
        i = f.parse(e).root;
        s = f.relative(i, e);
      } else if (r) {
        i = await g(t, r);
      }
      if (!t.unrestrictedPaths && s.split(/[\\/]/).includes("..")) {
        throw new n.ToolError("glob: \"..\" is not permitted in the pattern");
      }
      const o = t.unrestrictedPaths ? i : await h.realpath(i).catch(() => i);
      const l = [];
      try {
        for await (const a of Te(s, {
          cwd: i,
          withFileTypes: true,
          exclude: c => c.name === ".git" || c.name === "node_modules"
        })) {
          if (!a.isFile()) {
            continue;
          }
          const c = f.join(a.parentPath, a.name);
          if (!t.unrestrictedPaths) {
            let d;
            try {
              d = await h.realpath(c);
            } catch {
              continue;
            }
            if (!$e(o, d)) {
              continue;
            }
          }
          let u = 0;
          try {
            u = (await h.stat(c)).mtimeMs;
          } catch {}
          l.push({
            path: c,
            mtime: u
          });
        }
      } catch (a) {
        throw new n.ToolError(`glob: ${a instanceof Error ? a.message : String(a)}`);
      }
      if (l.length === 0) {
        return "no matches";
      } else {
        l.sort((a, c) => c.mtime - a.mtime);
        return l.slice(0, ge).map(a => a.path).join(`
`);
      }
    }
  });
}
function V(t) {
  return v({
    name: "grep",
    description: "Search file contents for a regex. Uses ripgrep if available, otherwise a built-in walker.",
    inputSchema: {
      type: "object",
      properties: {
        pattern: {
          type: "string"
        },
        path: {
          type: "string"
        }
      },
      required: ["pattern"]
    },
    run: async ({
      pattern: e,
      path: r
    }, i) => {
      if (!e) {
        throw new n.ToolError("grep: pattern is required");
      }
      let s = f.resolve(t.workdir);
      if (r) {
        s = await g(t, r);
      }
      const o = await Ie();
      if (o) {
        return ke(o, e, s, i == null ? undefined : i.signal);
      } else {
        return Fe(e, s, i == null ? undefined : i.signal);
      }
    }
  });
}
function ke(t, e, r, i) {
  return new Promise((s, o) => {
    const l = D.spawn(t, ["-n", "--no-heading", "-e", e, "--", r], {
      ...(i ? {
        signal: i
      } : {})
    });
    let a = "";
    let c = "";
    let u = false;
    l.stdout.on("data", d => {
      if (!u) {
        a += d;
        if (a.length > S) {
          u = true;
          a = a.slice(0, S);
          l.kill("SIGKILL");
        }
      }
    });
    l.stderr.on("data", d => c += d);
    l.on("close", d => {
      if (i != null && i.aborted) {
        return o(new n.ToolError("grep: aborted"));
      }
      if (u) {
        return s(`${a}
[output truncated at ${S} bytes]`);
      }
      if (d === 0) {
        return s(a);
      }
      if (d === 1) {
        return s("no matches");
      }
      o(new n.ToolError(`grep: rg failed: ${c || `exit ${d}`}`));
    });
    l.on("error", d => {
      if (i != null && i.aborted) {
        return o(new n.ToolError("grep: aborted"));
      }
      o(new n.ToolError(`grep: rg failed: ${d.message}`));
    });
  });
}
async function Fe(t, e, r) {
  let i;
  try {
    i = new RegExp(t);
  } catch (c) {
    throw new n.ToolError(`grep: invalid regex: ${c instanceof Error ? c.message : String(c)}`);
  }
  const s = [];
  let o = S;
  const l = c => {
    o -= c.length + 1;
    if (o < 0) {
      s.push(`[output truncated at ${S} bytes]`);
      return false;
    } else {
      s.push(c);
      return true;
    }
  };
  const a = await h.stat(e).catch(() => null);
  if (a != null && a.isFile()) {
    await L(e, i, l);
  } else {
    await Oe(e, "", c => L(f.join(e, c), i, l), r);
  }
  if (r != null && r.aborted) {
    throw new n.ToolError("grep: aborted");
  }
  if (s.length === 0) {
    return "no matches";
  } else {
    return s.join(`
`);
  }
}
async function L(t, e, r) {
  const i = I.createReadStream(t, {
    encoding: "utf8"
  });
  const s = le.createInterface({
    input: i,
    crlfDelay: Infinity
  });
  let o = 0;
  try {
    for await (const l of s) {
      o++;
      if (!(l.length > ve) && e.test(l) && !r(`${t}:${o}:${l}`)) {
        return false;
      }
    }
  } catch {} finally {
    i.destroy();
  }
  return true;
}
function $e(t, e) {
  const r = f.relative(t, e);
  return r === "" || !r.startsWith(".." + f.sep) && r !== ".." && !f.isAbsolute(r);
}
const Ge = 40;
const Ae = 50000;
async function Oe(t, e, r, i) {
  let s = Ae;
  async function o(l, a) {
    if (a > Ge) {
      return true;
    }
    if (i != null && i.aborted) {
      return false;
    }
    let c;
    try {
      c = await h.readdir(f.join(t, l), {
        withFileTypes: true
      });
    } catch {
      return true;
    }
    for (const u of c) {
      if (u.name === ".git" || u.name === "node_modules") {
        continue;
      }
      if (s-- <= 0 || i != null && i.aborted) {
        return false;
      }
      const d = l ? f.join(l, u.name) : u.name;
      if (u.isDirectory()) {
        if (!(await o(d, a + 1))) {
          return false;
        }
      } else if (u.isFile() && (await r(d)) === false) {
        return false;
      }
    }
    return true;
  }
  await o(e, 0);
}
async function Ie() {
  const t = (process.env.PATH ?? "").split(f.delimiter);
  for (const e of t) {
    const r = f.join(e, "rg");
    try {
      await h.access(r, I.constants.X_OK);
      return r;
    } catch {}
  }
  return null;
}
exports.BashSession = C;
exports.betaAgentToolset20260401 = Se;
exports.betaBashTool = H;
exports.betaEditTool = K;
exports.betaGlobTool = X;
exports.betaGrepTool = V;
exports.betaReadTool = z;
exports.betaWriteTool = J;
exports.extractSkillArchive = W;
exports.resolvePath = g;
exports.resolveSkillVersion = B;
exports.setupSkills = pe;
//# sourceMappingURL=index.chunk-Cm-otj_t.js.map