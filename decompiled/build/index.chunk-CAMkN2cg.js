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
    var n = new e.Error().stack;
    if (n) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[n] = "20472d88-bb19-43db-be7b-8ea7c600722f";
      e._sentryDebugIdIdentifier = "sentry-dbid-20472d88-bb19-43db-be7b-8ea7c600722f";
    }
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
const l = require("node:fs");
const c = require("node:fs/promises");
const y = require("electron");
const t = require("./index.chunk-c42vKsva.js");
const u = require("./index.chunk-mJCbQ1X-.js");
const h = 21600000;
let f = null;
let g = false;
async function x(e = false) {
  try {
    const {
      appConfig: n
    } = await Promise.resolve().then(() => require("./index.chunk-c42vKsva.js")).then(o => o.appConfig);
    if (!(n().isDxtAutoUpdatesEnabled ?? true) || g) {
      return;
    }
    const {
      getInstalledExtensions: s
    } = await Promise.resolve().then(() => require("./index.chunk-c42vKsva.js")).then(o => o.index);
    const a = (await s({
      forceReload: e
    })).filter(o => !o.id.startsWith("local.dxt") && !o.id.startsWith("local.mcpb") && !o.id.startsWith("local.unpacked"));
    if (a.length === 0) {
      t.logger.debug("No installed extensions eligible for update, skipping update check");
      return;
    }
    g = true;
    t.logger.info(`Checking for updates for ${a.length} extensions`);
    try {
      for (const {
        id: o,
        manifest: p
      } of a) {
        await w(o, p);
      }
      t.logger.info("Extension update check completed");
    } catch (o) {
      t.logger.error("Error during extension update check: %o", o);
    } finally {
      g = false;
    }
  } catch (n) {
    t.logger.error("Failed to check for extension updates: %o", n);
    g = false;
  }
}
async function w(e, n) {
  try {
    t.logger.debug(`Checking for updates for extension: ${e}`);
    const r = await t.getIsUpdateAvailable(e, n);
    if (!r) {
      t.logger.debug(`No update available for extension: ${e}`);
      return;
    }
    const {
      version: s,
      isInternalDxt: i
    } = r;
    const a = await u.getCachedUpdate(e);
    if (a) {
      if (t.semverExports.gte(a.version, s)) {
        t.logger.debug(`Already have cached version ${a.version} for extension ${e}, skipping download`);
        return;
      }
      t.logger.info(`Found newer update for extension ${e}: cached ${a.version} -> available ${s}`);
    } else {
      t.logger.info(`Found update for extension ${e}: ${n.version} -> ${s}`);
    }
    await u.cacheExtensionUpdate(e, s, i);
    t.logger.info(`Successfully cached update for extension ${e}@${s}${i ? " (internal)" : ""}`);
  } catch (r) {
    t.logger.error(`Failed to check/cache update for extension ${e}: %o`, r);
  }
}
function v() {
  if (!f) {
    t.logger.info(`Starting periodic extension update checks (interval: ${h}ms)`);
    f = setInterval(async () => {
      await x(true);
    }, h);
    y.app.on("before-quit", () => {
      if (f) {
        clearInterval(f);
      }
    });
    x();
  }
}
let b = false;
async function $() {
  if (!b) {
    b = true;
    try {
      const e = await u.getCachedUpdates();
      if (e.length === 0) {
        return;
      }
      t.logger.info(`Applying ${e.length} cached extension updates`);
      for (const r of e) {
        const s = t.getExtensionPath(r.extensionId);
        if (!l.existsSync(s)) {
          t.logger.info(`Skipping cached update for ${r.extensionId}: extension no longer installed`);
          await u.removeCachedUpdate(r.extensionId);
          continue;
        }
        if (r.isInternalDxt) {
          const {
            showOrgScopedDxtUpdateDialog: i
          } = await Promise.resolve().then(() => require("./index.chunk-BIDR9cU0.js"));
          const {
            getExtensionManifest: a
          } = await Promise.resolve().then(() => require("./index.chunk-c42vKsva.js")).then(d => d.index);
          let o = "unknown";
          try {
            o = (await a(r.extensionId)).version;
          } catch (d) {
            t.logger.error("Could not find current version from manifest: %o", d);
          }
          if (!(await i(r.manifest.name, o, r.version))) {
            t.logger.info(`User declined update for internal DXT ${r.extensionId}, skipping`);
            continue;
          }
        }
        await E(r);
      }
      const n = t.getExtensionsUpdateCachePath();
      if (await c.stat(n).catch(() => null)) {
        await c.rm(n, {
          recursive: true,
          force: true
        });
        t.logger.info("Cleaned up extensions update cache directory");
      }
      t.logger.info("Successfully applied all cached extension updates");
    } catch (e) {
      t.logger.error("Failed to apply cached updates: %o", e);
    }
  }
}
async function E(e) {
  const {
    extensionId: n
  } = e;
  const r = t.getExtensionPath(n);
  const s = t.getCachedExtensionPath(n);
  if (!l.existsSync(s)) {
    t.logger.debug(`No cached update found for extension: ${n}`);
    return;
  }
  try {
    t.logger.info(`Applying cached update for extension: ${n}`);
    const i = `${r}.backup-${Date.now()}`;
    if (l.existsSync(r)) {
      await c.rename(r, i);
      t.logger.debug(`Backed up current extension to: ${i}`);
    }
    try {
      await c.rename(s, r);
      t.logger.info(`Successfully applied update for extension: ${n}`);
      if (l.existsSync(i)) {
        await c.rm(i, {
          recursive: true,
          force: true
        });
        t.logger.debug(`Cleaned up backup for extension: ${n}`);
      }
    } catch (a) {
      t.logger.error(`Failed to apply update for ${n}, rolling back: %o`, a);
      if (l.existsSync(i)) {
        try {
          if (l.existsSync(r)) {
            await c.rm(r, {
              recursive: true,
              force: true
            });
          }
          await c.rename(i, r);
          t.logger.info(`Successfully rolled back extension: ${n}`);
        } catch (o) {
          t.logger.error(`Failed to rollback extension ${n}: %o`, o);
        }
      }
      throw a;
    }
    if (e.signatureInfo && e.hash) {
      try {
        await t.addExtensionMetadata({
          id: n,
          version: e.version,
          hash: e.hash,
          installedAt: new Date().toISOString(),
          certificateFingerprint: e.signatureInfo.status === "signed" ? e.signatureInfo.fingerprint : undefined,
          manifest: e.manifest,
          signatureInfo: e.signatureInfo,
          source: "registry"
        });
      } catch (a) {
        t.logger.error(`Applied update for ${n} but failed to record metadata: %o`, a);
      }
    }
  } catch (i) {
    t.logger.error(`Failed to apply cached update for extension ${n}: %o`, i);
  }
}
exports.applyPendingUpdates = $;
exports.startDxtUpdateChecks = v;
//# sourceMappingURL=index.chunk-CAMkN2cg.js.map