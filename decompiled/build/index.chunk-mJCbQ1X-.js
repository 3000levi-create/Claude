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
    var a = new e.Error().stack;
    if (a) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[a] = "738b9d36-daa1-435a-9297-95ffe20abd80";
      e._sentryDebugIdIdentifier = "sentry-dbid-738b9d36-daa1-435a-9297-95ffe20abd80";
    }
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
const h = require("node:path");
const t = require("./index.chunk-c42vKsva.js");
const E = require("electron");
async function b(e, a) {
  const r = E.app.getPath("temp");
  const s = e.toLowerCase().includes(".dxt") ? ".dxt" : ".mcpb";
  const o = `dxt-download-${Date.now()}-${Math.random().toString(36).substring(7)}${s}`;
  const n = h.join(r, o);
  try {
    await t.downloadFile({
      url: e,
      tempFilePath: n,
      onDownloadProgress: a
    });
    return n;
  } catch (i) {
    try {
      await t.fsExtra.remove(n);
    } catch {}
    throw i;
  }
}
async function x(e) {
  const {
    verifyMcpbFile: a
  } = await Promise.resolve().then(() => require("./index.chunk-BCZ5xnJ4.js"));
  const r = await a(e);
  const {
    files: s
  } = await t.unzipFile(e);
  const o = s["manifest.json"];
  if (!o) {
    throw new Error("No manifest.json found in DXT/MCPB file");
  }
  return {
    manifest: t.parseAndValidateManifestFromBytes(o),
    files: s,
    signatureInfo: r
  };
}
async function P(e, a, r) {
  const {
    getUrlWithDirectoryBase: s
  } = await Promise.resolve().then(() => require("./index.chunk-c42vKsva.js")).then(i => i.directory);
  const o = await s(`/extensions/${e}/download${a ? `/${a}` : ""}`);
  let n = null;
  try {
    n = await b(o, r);
    const i = await x(n);
    const c = await t.hashFileSha256(n);
    return {
      ...i,
      hash: c
    };
  } finally {
    if (n) {
      try {
        await t.fsExtra.remove(n);
      } catch (i) {
        t.logger.warn("Failed to clean up temp DXT/MCPB file: %o", i);
      }
    }
  }
}
function u(e) {
  return h.join(t.getCachedExtensionPath(e), "_update_metadata.json");
}
async function $(e, a, r, s) {
  const o = t.getCachedExtensionPath(e);
  const n = u(e);
  try {
    t.logger.info(`Caching extension update: ${e}@${a}`);
    const {
      manifest: i,
      files: c,
      signatureInfo: l,
      hash: g
    } = await P(e, a, s);
    t.assertNoCollidingEntries(c);
    if (t.getManagedConfig().extensions.signatureRequired && l.status !== "signed") {
      throw new Error(`Refusing to cache unsigned update for ${e}@${a}: valid signature required by enterprise policy`);
    }
    const {
      checkCanInstall: y
    } = await Promise.resolve().then(() => require("./index.chunk-c42vKsva.js")).then(f => f.blocklistApi);
    const [d] = await y([{
      extensionId: e,
      hash: g,
      manifest: i,
      signatureInfo: l,
      source: "registry"
    }]);
    if ((d == null ? undefined : d.canInstall) !== true) {
      throw new Error(`Refusing to cache update for ${e}@${a}: blocked (${(d == null ? undefined : d.reason) ?? "unknown reason"})`);
    }
    await t.mkdirPrivate(o);
    for (const [f, w] of Object.entries(c)) {
      const p = h.join(o, f);
      if (f.endsWith("/") && w.length === 0) {
        await t.mkdirPrivate(p);
      } else {
        await t.fsExtra.outputFile(p, w, {
          mode: t.PRIVATE_FILE_MODE
        });
      }
    }
    const m = {
      extensionId: e,
      version: a,
      downloadedAt: Date.now(),
      manifest: i,
      isInternalDxt: r,
      signatureInfo: l,
      hash: g
    };
    await t.writeJsonAtomic(n, m);
    t.logger.info(`Successfully cached extension update: ${e}@${a}`);
  } catch (i) {
    try {
      await t.fsExtra.remove(o);
    } catch (c) {
      t.logger.warn(`Failed to clean up partial cache for ${e}:`, c);
    }
    t.logger.error(`Failed to cache extension update ${e}@${a}:`, i);
    throw i;
  }
}
async function D() {
  const e = t.getExtensionsUpdateCachePath();
  if (!(await t.fsExtra.pathExists(e))) {
    return [];
  }
  const a = [];
  try {
    const r = await t.fsExtra.readdir(e, {
      withFileTypes: true
    });
    for (const s of r) {
      if (!s.isDirectory()) {
        continue;
      }
      const o = u(s.name);
      try {
        if (await t.fsExtra.pathExists(o)) {
          const n = await t.fsExtra.readJson(o);
          a.push(n);
        }
      } catch (n) {
        t.logger.warn(`Failed to read metadata for cached update ${s.name}:`, n);
      }
    }
  } catch (r) {
    t.logger.error("Failed to read cached updates directory: %o", r);
  }
  return a;
}
async function F(e) {
  const a = u(e);
  try {
    if (await t.fsExtra.pathExists(a)) {
      return await t.fsExtra.readJson(a);
    }
  } catch (r) {
    t.logger.warn(`Failed to read cached update metadata for ${e}:`, r);
  }
  return null;
}
async function C(e) {
  const a = t.getCachedExtensionPath(e);
  try {
    if (await t.fsExtra.pathExists(a)) {
      await t.fsExtra.remove(a);
      t.logger.info(`Removed cached update for extension: ${e}`);
    }
  } catch (r) {
    t.logger.error(`Failed to remove cached update for ${e}: %o`, r);
    throw r;
  }
}
exports.cacheExtensionUpdate = $;
exports.getCachedUpdate = F;
exports.getCachedUpdates = D;
exports.removeCachedUpdate = C;
//# sourceMappingURL=index.chunk-mJCbQ1X-.js.map