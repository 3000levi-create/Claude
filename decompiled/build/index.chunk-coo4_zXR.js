"use strict";

(function () {
  try {
    var o = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    o.SENTRY_RELEASE = {
      id: "df1d8a339dfabcf359af7144fe142b59ff7d9a0f"
    };
  } catch {}
})();
try {
  (function () {
    var o = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    var i = new o.Error().stack;
    if (i) {
      o._sentryDebugIds = o._sentryDebugIds || {};
      o._sentryDebugIds[i] = "6a4890c1-8c67-464c-9384-51022e8a6373";
      o._sentryDebugIdIdentifier = "sentry-dbid-6a4890c1-8c67-464c-9384-51022e8a6373";
    }
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
const k = require("node:crypto");
const y = require("node:fs");
const P = require("node:os");
const m = require("node:path");
const d = require("./index.chunk-c42vKsva.js");
const h = ".claude/remote/plugins";
const R = new Set(["hooks", ".mcpb-cache"]);
async function b(o) {
  const i = [];
  async function c(r, t) {
    const l = await y.promises.readdir(r, {
      withFileTypes: true
    });
    for (const u of l) {
      const e = m.join(r, u.name);
      const s = m.posix.join(t, u.name);
      const a = m.posix.normalize(s);
      if (a.startsWith("..") || m.posix.isAbsolute(a) || a !== s) {
        throw new Error(`RemotePluginSync: refusing entry that escapes plugin root: ${s}`);
      }
      if (u.isSymbolicLink()) {
        throw new Error(`RemotePluginSync: refusing symlink in plugin directory: ${s}`);
      }
      if (u.isDirectory()) {
        if (t === "" && R.has(u.name)) {
          d.sshLogger.info(`[RemotePluginSync] Stripping ${u.name}/ from ${o} (not synced to remote)`);
          continue;
        }
        await c(e, s);
        continue;
      }
      if (u.isFile()) {
        i.push({
          rel: s,
          abs: e
        });
      }
    }
  }
  await c(o, "");
  const n = i.find(r => r.rel.toLowerCase() === ".claude-plugin/plugin.json");
  if (n) {
    try {
      const r = await y.promises.readFile(n.abs, "utf8");
      if (JSON.parse(r).hooks !== undefined) {
        throw new Error(`RemotePluginSync: refusing plugin that relocates hooks via manifest: ${o}`);
      }
    } catch (r) {
      throw r instanceof SyntaxError ? new Error(`RemotePluginSync: plugin manifest is not valid JSON: ${o}`) : r;
    }
  }
  i.sort((r, t) => r.rel < t.rel ? -1 : r.rel > t.rel ? 1 : 0);
  return i;
}
async function S(o) {
  const i = k.createHash("sha256");
  for (const c of o) {
    i.update(c.rel);
    i.update("\0");
    await new Promise((n, r) => {
      y.createReadStream(c.abs).on("data", t => i.update(t)).on("end", n).on("error", r);
    });
    i.update(`
`);
  }
  return i.digest("hex").slice(0, 16);
}
function $(o, i, c) {
  const n = c.split("/").filter(Boolean);
  let r = i;
  return n.reduce(async (t, l) => {
    await t;
    r = `${r}/${l}`;
    await new Promise((u, e) => {
      o.mkdir(r, {
        mode: 448
      }, s => {
        const a = s == null ? undefined : s.code;
        if (!s || a === 4) {
          u();
        } else {
          e(s);
        }
      });
    });
  }, Promise.resolve());
}
function E(o, i, c) {
  return new Promise((n, r) => {
    o.fastPut(i, c, {
      mode: 384
    }, t => t ? r(t) : n());
  });
}
const w = new WeakMap();
async function L(o, i, c, n) {
  try {
    const {
      exists: t
    } = await o.statFile(`${n.absRoot}/.synced`);
    if (t) {
      return {
        ok: true,
        absRoot: n.absRoot
      };
    }
  } catch (t) {
    d.sshLogger.warn(`[RemotePluginSync] stat failed for ${n.localRoot}; retrying via upload: ${t instanceof Error ? t.message : String(t)}`);
  }
  let r;
  try {
    r = await y.promises.mkdtemp(m.join(P.tmpdir(), "ccd-plugin-"));
  } catch (t) {
    const l = t instanceof Error ? t.message : String(t);
    d.sshLogger.warn(`[RemotePluginSync] Skipping ${n.localRoot} — mkdtemp failed: ${l}`);
    return {
      ok: false,
      stage: "pack",
      error: l
    };
  }
  try {
    const t = m.join(r, `${m.basename(n.absRoot)}.tar.gz`);
    try {
      await d.zn({
        gzip: true,
        file: t,
        cwd: n.localRoot,
        portable: true
      }, n.entries.map(e => e.rel));
    } catch (e) {
      const s = e instanceof Error ? e.message : String(e);
      d.sshLogger.warn(`[RemotePluginSync] Skipping ${n.localRoot} — pack failed: ${s}`);
      return {
        ok: false,
        stage: "pack",
        error: s
      };
    }
    const l = `${c}/${m.basename(t)}`;
    try {
      await o.withSftp(async e => {
        await $(e, i, h);
        await E(e, t, l);
      });
    } catch (e) {
      const s = e instanceof Error ? e.message : String(e);
      d.sshLogger.warn(`[RemotePluginSync] Skipping ${n.localRoot} — upload failed: ${s}`);
      return {
        ok: false,
        stage: "upload",
        error: s
      };
    }
    const u = Date.now();
    try {
      const e = await o.extractTar(l, n.absRoot);
      if (!e.success) {
        throw new Error(e.error ?? "unknown extract error");
      }
      d.sshLogger.info(`[RemotePluginSync] Synced ${e.fileCount} file(s) from ${n.localRoot} → ${n.absRoot} (${Date.now() - u}ms extract)`);
      return {
        ok: true,
        absRoot: n.absRoot
      };
    } catch (e) {
      const s = e instanceof Error ? e.message : String(e);
      d.sshLogger.warn(`[RemotePluginSync] Skipping ${n.localRoot} — extract failed: ${s}`);
      return {
        ok: false,
        stage: "extract",
        error: s
      };
    }
  } finally {
    await y.promises.rm(r, {
      recursive: true,
      force: true
    }).catch(() => {});
  }
}
async function T(o, i) {
  const c = new Map();
  const n = [];
  if (i.length === 0) {
    return {
      synced: c,
      failures: n
    };
  }
  const r = o.remoteHome;
  if (!r) {
    throw new Error("RemotePluginSync: controller.remoteHome unset (ensureReady not called?)");
  }
  const t = `${r}/${h}`;
  const l = (await Promise.all(i.map(async a => {
    try {
      const f = await b(a);
      const g = await S(f);
      return {
        localRoot: a,
        entries: f,
        absRoot: `${t}/${g}`
      };
    } catch (f) {
      const g = f instanceof Error ? f.message : String(f);
      d.sshLogger.warn(`[RemotePluginSync] Skipping ${a} — collect failed: ${g}`);
      n.push({
        localRoot: a,
        stage: "collect",
        error: g
      });
      return null;
    }
  }))).filter(a => a !== null);
  const u = o.connectionGeneration;
  let e = w.get(o);
  if (!e || e.generation !== u) {
    e = {
      generation: u,
      pending: new Map()
    };
    w.set(o, e);
  }
  const {
    pending: s
  } = e;
  for (const a of l) {
    let f = s.get(a.absRoot);
    if (!f) {
      f = L(o, r, t, a);
      s.set(a.absRoot, f);
      const p = () => {
        if (s.get(a.absRoot) === f) {
          s.delete(a.absRoot);
        }
      };
      f.then(p, p);
    }
    const g = await f;
    if (g.ok) {
      c.set(a.localRoot, g.absRoot);
    } else {
      n.push({
        localRoot: a.localRoot,
        stage: g.stage,
        error: g.error
      });
    }
  }
  return {
    synced: c,
    failures: n
  };
}
const v = {
  collectPluginEntries: b,
  contentHash: S,
  sftpMkdirp: $,
  inFlight: w,
  STRIPPED_TOP_LEVEL_DIRS: R
};
exports._test = v;
exports.syncPluginDirsToRemote = T;
//# sourceMappingURL=index.chunk-coo4_zXR.js.map