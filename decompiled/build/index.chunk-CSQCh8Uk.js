"use strict";

(function () {
  try {
    var u = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    u.SENTRY_RELEASE = {
      id: "df1d8a339dfabcf359af7144fe142b59ff7d9a0f"
    };
  } catch {}
})();
try {
  (function () {
    var u = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    var t = new u.Error().stack;
    if (t) {
      u._sentryDebugIds = u._sentryDebugIds || {};
      u._sentryDebugIds[t] = "2cc4b131-a58f-4a64-b86e-7a765e83f250";
      u._sentryDebugIdIdentifier = "sentry-dbid-2cc4b131-a58f-4a64-b86e-7a765e83f250";
    }
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
const I = require("node:fs/promises");
const C = require("node:path");
const e = require("./index.chunk-c42vKsva.js");
const Se = require("node:crypto");
const ae = require("node:fs");
const Ae = require("node:stream");
const Ee = require("node:stream/promises");
const Le = require("electron");
const D = require("./index.chunk-GtrR4ctP.js");
const S = "[pluginBinaryAssets]";
const Ce = "marketplace-plugin-assets";
const be = 300000;
const ke = 3;
const ve = 10000;
const Be = /^[0-9a-f]{64}$/;
const ce = 32;
let ue = 0;
class K extends Error {
  constructor(t, n, a) {
    super(t);
    this.name = "PluginAssetFetchError";
    this.code = n;
    this.status = a;
  }
}
class Ke extends Ae.Transform {
  constructor() {
    super(...arguments);
    this.hash = Se.createHash("sha256");
  }
  _transform(t, n, a) {
    this.hash.update(t);
    a(null, t);
  }
  digestHex() {
    return this.hash.digest("hex");
  }
}
const xe = ae.constants.O_RDONLY | (ae.constants.O_NOFOLLOW ?? 0) | (ae.constants.O_NONBLOCK ?? 0);
async function ge(u, t, n) {
  if (n != null && n.guestWritable) {
    return false;
  }
  let a;
  try {
    const r = await I.lstat(u).catch(() => null);
    if (r == null || !r.isFile() || (a = await I.open(u, xe), !(await a.stat()).isFile())) {
      return false;
    }
    const s = Se.createHash("sha256");
    for await (const i of a.createReadStream({
      autoClose: false
    })) {
      s.update(i);
    }
    if (s.digest("hex") !== t) {
      return false;
    } else {
      if ((n == null ? undefined : n.ensureMode) !== undefined) {
        await a.chmod(n.ensureMode).catch(() => {});
      }
      return true;
    }
  } catch {
    return false;
  } finally {
    await (a == null ? undefined : a.close().catch(() => {}));
  }
}
function Ue(u, t) {
  return `${e.claudeAiUrl()}/api/organizations/${u}/marketplace/plugin-assets/${t}`;
}
async function We(u, t, n) {
  var b;
  const a = Ue(u, t);
  const r = new AbortController();
  let l;
  const s = () => {
    if (l !== undefined) {
      clearTimeout(l);
    }
    l = setTimeout(() => r.abort(), be);
  };
  let i;
  try {
    i = await e.fetchWithTimeout(a, {
      timeout: be,
      signal: r.signal
    });
  } catch (w) {
    throw new K(`${S} transport error fetching asset: ${w instanceof Error ? w.message : String(w)}`, "asset_transient");
  }
  if (!i.ok) {
    await ((b = i.body) == null ? undefined : b.cancel().catch(() => {}));
    throw i.status === 404 ? new K(`${S} asset not found (HTTP 404)`, "asset_not_found", 404) : i.status === 410 ? new K(`${S} asset denylisted (HTTP 410)`, "asset_denylisted", 410) : i.status >= 500 ? new K(`${S} transient storage error (HTTP ${i.status})`, "asset_transient", i.status) : new K(`${S} unexpected response (HTTP ${i.status})`, "asset_http_error", i.status);
  }
  if (!i.body) {
    throw new K(`${S} empty response body`, "asset_transient", i.status);
  }
  const c = new Ke();
  const f = e.createWriteStreamPrivate(n, {
    flags: "wx"
  });
  const g = Ae.Readable.fromWeb(i.body);
  g.on("data", s);
  s();
  try {
    await Ee.pipeline(g, c, f, {
      signal: r.signal
    });
  } catch (w) {
    await I.rm(n, {
      force: true
    }).catch(() => {});
    throw w instanceof Error && w.name === "AbortError" ? new K(`${S} asset download timed out or stalled`, "asset_transient") : new K(`${S} asset download failed: ${w instanceof Error ? w.message : String(w)}`, "asset_transient");
  } finally {
    if (l !== undefined) {
      clearTimeout(l);
    }
  }
  const h = c.digestHex();
  if (h !== t) {
    await I.rm(n, {
      force: true
    }).catch(() => {});
    throw new K(`${S} downloaded asset hashed to ${h}, expected ${t} — refusing`, "asset_digest_mismatch");
  }
}
async function Ge(u, t, n) {
  const a = C.join(n, t);
  if (await ge(a, t)) {
    return {
      cachePath: a,
      cacheHit: true
    };
  }
  const r = await I.lstat(a).catch(() => null);
  if (r && !r.isFile()) {
    await I.rm(a, {
      recursive: true,
      force: true
    }).catch(() => {});
  }
  let l;
  for (let s = 1; s <= ke; s++) {
    const i = C.join(n, `.partial-${t}-${process.pid}-${ue++}`);
    try {
      await We(u, t, i);
      try {
        await I.rename(i, a);
      } catch (c) {
        if (await ge(a, t)) {
          await I.rm(i, {
            force: true
          }).catch(() => {});
          return {
            cachePath: a,
            cacheHit: false
          };
        }
        throw c;
      }
      return {
        cachePath: a,
        cacheHit: false
      };
    } catch (c) {
      l = c;
      await I.rm(i, {
        force: true
      }).catch(() => {});
      if (!(c instanceof K) || c.code !== "asset_transient" || s === ke) {
        throw c;
      }
      const g = Math.pow(2, s - 1) * 1000;
      e.logger.warn(`${S} attempt ${s} failed for asset ${t}, retrying in ${g}ms`);
      await e.sleep(g);
    }
  }
  throw l instanceof Error ? l : new Error(`${S} failed to download asset ${t}`);
}
async function je(u, t, n, a) {
  const r = C.join(n, a);
  const l = C.join(t, `.place-${a}-${process.pid}-${ue++}`);
  try {
    await I.copyFile(u, l, ae.constants.COPYFILE_EXCL);
    await I.chmod(l, 493);
    try {
      await I.rename(l, r);
    } catch (s) {
      throw s.code !== "EXDEV" ? s : new K(`${S} cache dir and bin/ are on different volumes — cannot place ${a} safely on Windows`, "asset_place_exdev");
    }
  } finally {
    await I.rm(l, {
      force: true
    }).catch(() => {});
  }
}
async function de(u, t) {
  const n = await I.lstat(t).catch(() => null);
  if (n == null || !n.isDirectory()) {
    return null;
  }
  const a = await I.lstat(u).catch(() => null);
  return a != null && a.isDirectory() && (await e.isRealpathWithin(u, t)) || null;
}
async function Ie(u, t, n, a) {
  const r = performance.now();
  let l = 0;
  let s = 0;
  let i = 0;
  let c = 0;
  let f = 0;
  let g;
  let h;
  let b = true;
  try {
    const w = await e.readPluginManifestAsync(u);
    if (!w) {
      b = false;
      return;
    }
    const y = e.normalizeManifestBinaries(w);
    if (!y) {
      b = false;
      return;
    }
    const o = new Set(e.getRawManifestCliNames(w));
    let m = Object.entries(y).filter(([A, Z]) => !e.BINARY_BASENAME_VALID.test(A) || !Be.test(Z.sha256) ? (e.logger.warn(`${S} skipping malformed binaries entry "${A}"`), false) : o.has(A) ? (e.logger.warn(`${S} skipping binaries entry "${A}" — also declared as a CLI stub`), false) : true);
    if (m.length === 0) {
      b = false;
      return;
    }
    if (m.length > ce) {
      e.logger.warn(`${S} ${u} declares ${m.length} binaries; capping at ${ce}`);
      m = m.slice(0, ce);
    }
    l = m.length;
    const {
      isFeatureEnabled: P,
      waitForGrowthBookReady: R
    } = await Promise.resolve().then(() => require("./index.chunk-c42vKsva.js")).then(A => A.growthbook);
    let T;
    if (!(await Promise.race([R().then(() => true), new Promise(A => {
      T = setTimeout(() => A(false), ve);
    })]).finally(() => {
      if (T !== undefined) {
        clearTimeout(T);
      }
    }))) {
      g = "gate_unavailable";
      e.logger.warn(`${S} GrowthBook not ready within ${ve}ms — skipping binary asset fetch for ${u}`);
      return;
    }
    if (!P("1569828280")) {
      g = "gate_off";
      e.logger.info(`${S} gate off — skipping binary asset fetch for ${u}`);
      return;
    }
    const B = (a == null ? undefined : a.orgId) ?? (await e.getLastActiveOrg());
    if (!B) {
      g = "no_active_org";
      e.logger.warn(`${S} no active organization — cannot fetch binary assets for ${u}`);
      return;
    }
    const j = await I.lstat(u).catch(() => null);
    if (j == null || !j.isDirectory()) {
      h = "plugin_root_not_dir";
      e.logger.warn(`${S} plugin root is not a real directory for ${u} — refusing binary placement`);
      return;
    }
    const N = C.join(u, "bin");
    let x = null;
    try {
      x = await I.lstat(N);
    } catch (A) {
      if ((A == null ? undefined : A.code) !== "ENOENT") {
        h = "bin_uninspectable";
        e.logger.warn(`${S} bin/ not inspectable for ${u} — refusing binary placement`, A);
        return;
      }
    }
    if (x && !x.isDirectory()) {
      h = "bin_not_dir";
      e.logger.warn(`${S} bin/ is a ${x.isSymbolicLink() ? "symlink" : "non-directory"} for ${u} — refusing binary placement (not followed, not deleted)`);
      return;
    }
    if (!x) {
      await I.mkdir(N, {
        mode: 493
      }).catch(A => {
        if ((A == null ? undefined : A.code) !== "EEXIST") {
          throw A;
        }
      });
    }
    const H = await I.lstat(N).catch(() => null);
    if (H == null || !H.isDirectory()) {
      h = "bin_dir_race";
      e.logger.warn(`${S} bin/ changed shape mid-provision for ${u}`);
      return;
    }
    if (!(await de(N, u))) {
      h = "bin_outside_plugin";
      e.logger.warn(`${S} bin/ does not resolve inside the plugin dir for ${u} — refusing binary placement`);
      return;
    }
    const Y = (a == null ? undefined : a.cacheDir) ?? C.join(Le.app.getPath("userData"), Ce);
    await e.mkdirPrivate(Y);
    for (const [A, Z] of m) {
      try {
        const U = await de(N, u);
        if (!U) {
          h = h ?? "bin_dir_race";
          e.logger.warn(`${S} bin/ changed shape for ${u} — skipping ${A}`);
          continue;
        }
        const X = C.join(U, A);
        if (await ge(X, Z.sha256, {
          ensureMode: 493,
          guestWritable: true
        })) {
          i++;
          continue;
        }
        const {
          cachePath: ee,
          cacheHit: se
        } = await Ge(B, Z.sha256, Y);
        const te = await de(N, u);
        if (!te) {
          h = h ?? "bin_dir_race";
          e.logger.warn(`${S} bin/ changed shape during download for ${u} — skipping ${A}`);
          continue;
        }
        if (se) {
          c++;
        } else {
          f++;
        }
        await je(ee, Y, te, A);
        s++;
      } catch (U) {
        h = h ?? (U instanceof K ? U.code : U instanceof Error ? U.name : "unknown");
        e.logger.warn(`${S} failed to provision bin/${A} for ${u}:`, U);
      }
    }
  } catch (w) {
    h = h ?? (w instanceof Error ? w.name : "unknown");
    e.logger.warn(`${S} failed for ${u}:`, w);
  } finally {
    if (b) {
      e.logCoworkEvent("lam_plugin_binary_asset_provision", {
        plugin_id: e.redactPluginId(n),
        source: t,
        expected_count: l,
        placed_count: s,
        already_present_count: i,
        cache_hit_count: c,
        download_count: f,
        status: h ? "error" : g ? "skipped" : "ok",
        duration_ms: Math.round(performance.now() - r),
        error_code: h ?? g
      });
    }
  }
}
const q = e.REMOTE_PLUGINS_MANIFEST_FILE;
const p = "[RemotePluginManager]";
const qe = 600000;
const _e = e.toGuestCompatibleMountName(e.REMOTE_PLUGINS_MOUNT_NAME_RAW);
const $e = 3;
const He = 25;
const ne = 10000;
const Ye = 3;
function me(u) {
  return u.installedBy !== "auto" && u.installationPreference !== "required" && u.installationPreference !== "auto_install";
}
const ie = new e.PQueue({
  concurrency: 16
});
async function Xe(u, t, n) {
  const a = e.getCoworkSettingsFile(u, t);
  const l = ((await e.readSettingsFile(a)) ?? {}).enabledPlugins ?? {};
  if (Object.keys(l).length === 0) {
    return 0;
  }
  let s = null;
  try {
    const y = C.join(n, q);
    const o = await e.readFileNoFifo(y, e.REMOTE_PLUGINS_LEDGER_MAX_BYTES);
    s = JSON.parse(o);
  } catch {
    return 0;
  }
  const i = [];
  for (const y of s.plugins) {
    const m = e.legacyEnabledPluginKeys(y).filter(P => typeof l[P] == "boolean");
    if (m.length > 0) {
      i.push({
        plugin: y,
        enabled: l[m[0]],
        matchedKeys: m
      });
    }
  }
  if (i.length === 0) {
    return 0;
  }
  e.logger.info(`${p} Migration: pushing ${i.length} remote plugin enabled state(s) to API`);
  const c = new Map();
  for (const {
    matchedKeys: y
  } of i) {
    for (const o of y) {
      c.set(o, (c.get(o) ?? 0) + 1);
    }
  }
  const f = new Map();
  const g = y => {
    for (const o of y) {
      f.set(o, (f.get(o) ?? 0) + 1);
    }
  };
  let h = 0;
  for (const {
    plugin: y,
    enabled: o,
    matchedKeys: m
  } of i) {
    const P = await D.setRemotePluginEnabledResolved(t, y, o, {
      caller: "migration_push"
    });
    if (P.outcome === "ok" || P.outcome === "retried") {
      h++;
      g(m);
      e.logger.info(`${p} Migration: pushed ${y.id} (enabled=${o}${P.outcome === "retried" ? `, via ${P.effectiveId}` : ""})`);
    } else if (P.outcome === "unresolvable" && o) {
      g(m);
      e.logger.info(`${p} Migration: ${y.id} unresolvable, dropping redundant enabled=true key`);
    } else if (P.outcome === "unresolvable") {
      e.logger.info(`${p} Migration: ${y.id} unresolvable; retaining enabled=false key`);
    } else if (P.outcome === "error" && (P.status === 409 || P.status === 422)) {
      g(m);
      e.logger.info(`${p} Migration: ${y.id} rejected (HTTP ${P.status}), dropping stale entry`);
    } else if (P.outcome === "error") {
      e.logger.warn(`${p} Migration: failed to push ${P.effectiveId}:`, P.error);
    }
  }
  const b = new Set();
  for (const {
    matchedKeys: y
  } of i) {
    if (!y.every(m => f.get(m) === c.get(m))) {
      for (const m of y) {
        b.add(m);
      }
    }
  }
  const w = new Set();
  for (const y of c.keys()) {
    if (!b.has(y)) {
      w.add(y);
    }
  }
  if (w.size > 0) {
    try {
      let y = false;
      await e.withCoworkMutex(async () => {
        const o = await e.readSettingsFileResult(a);
        if (o.status === "unreadable") {
          e.logger.warn(`${p} Migration: settings file unreadable inside mutex; skipping delete (will retry next sync)`);
          return;
        }
        const m = o.status === "ok" ? o.settings : {};
        const P = {
          ...(m.enabledPlugins ?? {})
        };
        for (const R of w) {
          delete P[R];
        }
        await e.writeJsonAtomic(a, {
          ...m,
          enabledPlugins: P
        });
        y = true;
      });
      if (y) {
        e.logger.info(`${p} Migration: removed ${w.size} fully-migrated entries from settings file`);
      }
    } catch (y) {
      e.logger.warn(`${p} Migration: failed to remove migrated entries from settings file (will retry next sync):`, y);
    }
  } else if (h === 0) {
    e.logger.warn(`${p} Migration: no entries resolved, will retry next sync`);
  }
  return h;
}
function we(u, t) {
  const n = {};
  const a = new Set();
  for (const l of u) {
    const s = t.find(i => i.pluginName !== l.name ? false : l.marketplaceId && i.marketplaceId ? i.marketplaceId === l.marketplaceId : !!l.marketplaceName && i.marketplaceName === l.marketplaceName);
    if (s) {
      n[l.id] = s.enabled;
      a.add(s);
    }
  }
  const r = new Set();
  for (const l of u) {
    if (l.id in n) {
      continue;
    }
    if (t.some(i => !a.has(i) && i.pluginName === l.name && (!l.marketplaceId || !i.marketplaceId || l.marketplaceId === i.marketplaceId))) {
      r.add(l.id);
    }
  }
  return {
    byPluginId: n,
    blockedPluginIds: r
  };
}
async function Me(u, t) {
  const n = e.getCoworkSettingsFile(u, t);
  const a = await e.readSettingsFileResult(n);
  if (a.status === "unreadable") {
    return null;
  } else if (a.status === "ok") {
    return a.settings.enabledPlugins ?? {};
  } else {
    return {};
  }
}
async function Re(u, t, n, a) {
  if (e.getAccountId() !== t || (await e.getLastActiveOrg()) !== n) {
    return false;
  }
  let r = null;
  try {
    r = JSON.parse(await e.readFileNoFifo(C.join(a, q), e.REMOTE_PLUGINS_LEDGER_MAX_BYTES));
  } catch {
    return false;
  }
  if (r == null || !r.plugins.some(s => s.id === u.id)) {
    return false;
  }
  const l = await Me(t, n);
  if (l === null) {
    return false;
  } else {
    return e.lookupPluginEnabled(u, l);
  }
}
async function Ne(u, t, n) {
  if (!e.isFeatureEnabled("4274871493") || !e.isFeatureEnabled("3633961296")) {
    return 0;
  }
  let a = null;
  try {
    const h = await e.readFileNoFifo(C.join(n, q), e.REMOTE_PLUGINS_LEDGER_MAX_BYTES);
    a = JSON.parse(h);
  } catch {
    return 0;
  }
  if (!a || a.plugins.length === 0) {
    return 0;
  }
  let r;
  try {
    r = await D.fetchPluginEnabledState(t);
  } catch (h) {
    e.logger.warn(`${p} Backfill: enabled-state fetch failed, skipping this sync`, h);
    return 0;
  }
  const {
    byPluginId: l,
    blockedPluginIds: s
  } = we(a.plugins, r);
  const i = await Me(u, t);
  if (i === null) {
    e.logger.warn(`${p} Backfill: local settings unreadable, skipping this sync`);
    return 0;
  }
  const c = a.plugins.filter(h => me(h) && !(h.id in l) && !s.has(h.id) && e.lookupPluginEnabled(h, i));
  if (c.length === 0 || e.getAccountId() !== u || (await e.getLastActiveOrg()) !== t) {
    return 0;
  }
  e.logger.info(`${p} Backfill: writing ${c.length} implicit plugin enable(s) to API`);
  const f = new e.PQueue({
    concurrency: Ye
  });
  let g = 0;
  await f.addAll(c.map(h => async () => {
    if (!(await Re(h, u, t, n))) {
      return;
    }
    const b = await D.setRemotePluginEnabledResolved(t, h, true, {
      caller: "implicit_enable_backfill"
    });
    if (b.outcome === "ok" || b.outcome === "retried") {
      g++;
    } else if (b.outcome === "unresolvable") {
      e.logger.info(`${p} Backfill: ${h.id} unresolvable, skipping`);
    } else if (b.outcome === "error") {
      e.logger.warn(`${p} Backfill: failed to write ${b.effectiveId}:`, b.error);
    }
  }));
  e.logger.info(`${p} Backfill: wrote ${g}/${c.length} plugin enable(s)`);
  return g;
}
function re(u) {
  return `${u.installedBy ?? ""}|${u.updatedAt ?? ""}|${u.installationPreference ?? ""}|${u.displayName ?? ""}`;
}
class De {
  constructor() {
    this.syncPromise = null;
    this.syncTiming = null;
    this.runningSync = null;
    this.manifestLock = new e.Mutex();
    this.pendingInstallDirs = new Map();
    this.backfillPromise = null;
    this._syncInterval = null;
    this.cachedOrgId = null;
    this.cachedAccountId = null;
    this.enabledStateMigrationGen = 0;
    this.stubRedownloadAttempted = new Set();
    this.accountEpoch = 0;
  }
  acquirePendingDirs(t) {
    for (const n of t) {
      this.pendingInstallDirs.set(n, (this.pendingInstallDirs.get(n) ?? 0) + 1);
    }
  }
  releasePendingDirs(t) {
    for (const n of t) {
      const a = this.pendingInstallDirs.get(n);
      if (a !== undefined) {
        if (a <= 1) {
          this.pendingInstallDirs.delete(n);
        } else {
          this.pendingInstallDirs.set(n, a - 1);
        }
      }
    }
  }
  getEnabledStateMigrationGen() {
    return this.enabledStateMigrationGen;
  }
  getResolvedDir() {
    const t = this.cachedOrgId;
    const n = this.cachedAccountId;
    if (!t || !n) {
      return null;
    } else {
      return {
        orgId: t,
        accountId: n,
        dir: e.getRemoteCoworkPluginsDir(n, t)
      };
    }
  }
  async getPluginsPath() {
    const t = this.getResolvedDir();
    if (!t) {
      e.logger.warn(`${p} getPluginsPath called before syncPlugins completed`);
      return null;
    }
    const {
      dir: n
    } = t;
    const a = await this.readManifest(n);
    if (!a || a.plugins.length === 0) {
      return null;
    }
    let r = false;
    for (const l of a.plugins) {
      const s = this.getPluginDir(n, l.id);
      try {
        await I.access(s);
        r = true;
        break;
      } catch {}
    }
    if (r) {
      return n;
    } else {
      return null;
    }
  }
  async getPluginSkillsForSystemPrompt(t, n, a) {
    const r = this.getResolvedDir();
    if (!r) {
      return [];
    }
    const {
      dir: l
    } = r;
    const s = await this.readManifest(l);
    if (!s || s.plugins.length === 0) {
      return [];
    } else {
      return (await ie.addAll(s.plugins.map(c => async () => {
        if (fe(c, n)) {
          return [];
        }
        const f = this.getPluginDir(l, c.id);
        try {
          await I.access(f);
        } catch {
          return [];
        }
        const g = a ? f : `/sessions/${t}/mnt/${_e}/${c.id}`;
        return e.scanPluginForSkills(f, c.name, g, p);
      }))).flat();
    }
  }
  async collectPluginPaths(t, n, a) {
    const r = this.getResolvedDir();
    if (!r) {
      if (a) {
        a.manifestPluginCount = 0;
      }
      return [];
    }
    const {
      dir: l
    } = r;
    const s = await this.readManifest(l);
    if (a) {
      a.manifestPluginCount = (s == null ? undefined : s.plugins.length) ?? 0;
    }
    if (!s || s.plugins.length === 0) {
      return [];
    } else {
      return (await ie.addAll(s.plugins.map(c => async () => {
        if (fe(c, n)) {
          return null;
        }
        const f = this.getPluginDir(l, c.id);
        try {
          await I.access(f);
          return {
            name: c.name,
            id: c.id,
            installPath: f,
            sdkPath: t(c.id, f),
            source: "remote",
            marketplaceName: c.marketplaceName
          };
        } catch {
          return null;
        }
      }))).filter(c => c !== null);
    }
  }
  async getPluginPaths(t, n, a) {
    return this.collectPluginPaths(r => `/sessions/${t}/mnt/${_e}/${r}`, n, a);
  }
  async getHostPluginPaths(t) {
    return this.collectPluginPaths((n, a) => a, t);
  }
  async getOrgMarketplaceNames() {
    if (this.cachedOrgId) {
      return e.fetchOrgMarketplaceNames(this.cachedOrgId);
    } else {
      return null;
    }
  }
  async getAllMcpServersFromPlugin(t) {
    const n = this.getResolvedDir();
    if (!n) {
      return [];
    }
    const {
      dir: a
    } = n;
    const r = this.getPluginDir(a, t);
    try {
      await I.access(r);
    } catch {
      return [];
    }
    return e.scanPluginForMcpServers(r, t, p);
  }
  async getInstalledPluginIdsAndKeys() {
    var a;
    let t = ((a = this.getResolvedDir()) == null ? undefined : a.dir) ?? null;
    if (!t) {
      const r = (await e.getLastActiveOrg()) ?? null;
      const l = e.getAccountId();
      if (r && l) {
        t = e.getRemoteCoworkPluginsDir(l, r);
      }
    }
    if (!t) {
      return {
        ids: new Set(),
        keys: new Set()
      };
    }
    const n = await this.readManifest(t);
    if (n) {
      return {
        ids: new Set(n.plugins.map(r => r.id)),
        keys: new Set(n.plugins.map(r => e.pluginKey(r)))
      };
    } else {
      return {
        ids: new Set(),
        keys: new Set()
      };
    }
  }
  async fetchEnabledState(t) {
    const n = this.getResolvedDir();
    if (!n) {
      return {
        state: {},
        source: "empty-manifest"
      };
    }
    const a = await this.readManifest(n.dir);
    if (!a || a.plugins.length === 0) {
      return {
        state: {},
        source: "empty-manifest"
      };
    }
    try {
      if (e.isFeatureEnabled("4274871493")) {
        const c = (t == null ? undefined : t.orgId) === n.orgId && t.migrationGen === this.enabledStateMigrationGen ? await t.overrides : undefined;
        if (c === null) {
          return {
            state: {},
            source: "prefetch-error"
          };
        }
        const f = c ?? (await D.fetchPluginEnabledState(n.orgId));
        return {
          state: we(a.plugins, f).byPluginId,
          source: c !== undefined ? "prefetch" : "fresh"
        };
      }
      const r = new Set(a.plugins.map(c => c.id));
      const l = {};
      let s = 0;
      const i = 100;
      while (true) {
        const {
          plugins: c,
          hasMore: f
        } = await D.fetchBrowsableRemotePlugins({
          limit: i,
          offset: s,
          compact: true
        });
        for (const g of c) {
          if (r.has(g.id) && g.enabled !== null && g.enabled !== undefined) {
            l[g.id] = g.enabled;
          }
        }
        if (!f || c.length === 0) {
          break;
        }
        s += i;
      }
      if (e.isFeatureEnabled("720735283")) {
        for (const c of await D.fetchAccountScopedRemotePlugins({
          compact: true
        })) {
          if (r.has(c.id) && c.enabled !== null && c.enabled !== undefined) {
            l[c.id] = c.enabled;
          }
        }
      }
      return {
        state: l,
        source: "fresh"
      };
    } catch (r) {
      e.logger.warn(`${p} Failed to fetch enabled state; defaulting to all-enabled`, r);
      return {
        state: {},
        source: "fresh-error"
      };
    }
  }
  async installSinglePlugin(t, n) {
    await this.waitForSync();
    let a = this.getResolvedDir();
    if (!a) {
      const g = (await e.getLastActiveOrg()) ?? null;
      const h = e.getAccountId();
      if (g === null || h === null) {
        throw new Error("Cannot install plugin: no org or account available");
      }
      const b = await e.getLastActiveOrg();
      const w = e.getAccountId();
      if (b != null && b !== g || w !== null && w !== h) {
        throw new Error("Cannot install plugin: account switched during install");
      }
      this.cachedOrgId = g;
      this.cachedAccountId = h;
      a = this.getResolvedDir();
      if (!a) {
        throw new Error("Cannot install plugin: no org or account available");
      }
    }
    const r = a.accountId;
    const l = a.orgId;
    const {
      dir: s
    } = a;
    await e.mkdirPrivate(s);
    const i = await this.readManifest(s);
    const c = (i == null ? undefined : i.plugins.some(g => g.id === t.id)) ?? false;
    const f = this.getPluginDir(s, t.id);
    this.acquirePendingDirs([t.id]);
    try {
      await D.fetchAndExtractPluginWithRetry(t.id, f);
      await e.ensurePluginManifest(f, {
        name: t.name,
        displayName: t.displayName
      });
      if (n != null && n.checkCliConflicts && !c) {
        const b = await e.readPluginManifestAsync(f);
        const w = b ? e.getRawManifestCliNames(b) : [];
        const y = await e.findCliConflict(w, await e.listRemotePluginCandidates(s), {
          pluginName: t.name,
          marketplaceName: t.marketplaceName
        });
        if (y) {
          if ((this.pendingInstallDirs.get(t.id) ?? 0) <= 1) {
            await I.rm(f, {
              recursive: true,
              force: true,
              ...e.RM_RETRY_OPTS
            }).catch(() => {});
          }
          throw new e.PluginCliConflictError(y.cliName, y.owningPluginName);
        }
      }
      await e.ensurePluginCliStubs(f, "remote", t.id);
      await Ie(f, "remote", t.id, {
        orgId: l
      });
      e.logger.info(`${p} Installed plugin: ${t.name}`);
      const g = e.getAccountId();
      const h = await e.getLastActiveOrg();
      if (g !== null && g !== r || h != null && h !== l) {
        throw new Error("Cannot install plugin: account switched during install");
      }
      await this.withManifestLock(async () => {
        const b = await this.readManifest(s);
        let w;
        if (b) {
          w = b.plugins;
        } else {
          if (await this.manifestFileExists(s)) {
            throw new Error(`${p} manifest unreadable; aborting install of ${t.id} to avoid dropping other plugins`);
          }
          w = [];
        }
        try {
          await I.access(f);
        } catch {
          throw new Error(`${p} plugin dir for ${t.id} removed during install (concurrent uninstall?); aborting manifest write`);
        }
        const y = e.pluginKey(t);
        const o = w.filter(P => P.id !== t.id && e.pluginKey(P) !== y);
        const m = {
          id: t.id,
          name: t.name,
          updatedAt: t.updatedAt ?? new Date().toISOString(),
          displayName: t.displayName,
          marketplaceId: t.marketplaceId,
          marketplaceName: t.marketplaceName,
          installedBy: "user",
          installationPreference: t.installationPreference
        };
        await this.writeManifest(s, {
          lastUpdated: Date.now(),
          plugins: [...o, m]
        });
      });
    } finally {
      this.releasePendingDirs([t.id]);
    }
  }
  async getInstalledPluginsWithPaths() {
    const t = this.getResolvedDir();
    if (!t) {
      return [];
    }
    const {
      dir: n
    } = t;
    const a = await this.readManifest(n);
    if (!a || a.plugins.length === 0) {
      return [];
    } else {
      return (await ie.addAll(a.plugins.map(l => async () => {
        const s = this.getPluginDir(n, l.id);
        try {
          await I.access(s);
          return {
            ...l,
            installPath: s
          };
        } catch {
          return null;
        }
      }))).filter(l => l !== null);
    }
  }
  async uninstallById(t) {
    await this.waitForSync();
    let n = this.getResolvedDir();
    if (!n) {
      const o = (await e.getLastActiveOrg()) ?? null;
      const m = e.getAccountId();
      if (o === null || m === null) {
        return false;
      }
      const P = await e.getLastActiveOrg();
      const R = e.getAccountId();
      if (P != null && P !== o || R !== null && R !== m || (this.cachedOrgId = o, this.cachedAccountId = m, n = this.getResolvedDir(), !n)) {
        return false;
      }
    }
    const a = n.accountId;
    const {
      orgId: r,
      dir: l
    } = n;
    let s = null;
    let i = null;
    let c;
    let f;
    let g = false;
    let h = false;
    {
      const o = await this.readManifest(l);
      if (!o) {
        return false;
      }
      const m = o.plugins.find(T => T.id === t);
      const P = m ? undefined : o.plugins.find(T => e.pluginKey(T) === t);
      if (m) {
        s = m.marketplaceName ? e.pluginKey(m) : null;
      } else if (P) {
        s = t;
      } else {
        try {
          const L = (await D.fetchBrowsableRemotePlugins({
            limit: 100,
            offset: 0,
            compact: true,
            orgId: r,
            timeoutMs: ne
          })).plugins.find(B => B.id === t);
          if (L) {
            s = e.pluginKey(L);
            i = L.id;
            c = L.installationPreference;
            f = L.marketplaceId;
          }
        } catch {}
      }
      const R = m ?? P;
      if (R && me(R)) {
        const T = e.isFeatureEnabled("720735283");
        const [L, B, j] = await Promise.all([i === null && R.marketplaceName ? D.fetchRemotePluginByName(R.name, R.marketplaceName, {
          orgId: r,
          forceInstall: true,
          timeoutMs: ne
        }).catch(() => null) : Promise.resolve(null), e.listAccountMarketplaces({
          orgId: r,
          timeoutMs: ne
        }).catch(() => null), i === null && !R.marketplaceName ? D.fetchBrowsableRemotePlugins({
          limit: 100,
          offset: 0,
          compact: true,
          orgId: r,
          timeoutMs: ne
        }).catch(() => null) : Promise.resolve(null)]);
        if (L && !("notFound" in L)) {
          i = L.id;
          c = L.installationPreference;
          f = L.marketplaceId;
        } else if (j) {
          const N = j.plugins.filter(x => x.name === R.name);
          if (N.length === 1 && !j.hasMore) {
            i = N[0].id;
            c = N[0].installationPreference;
            f = N[0].marketplaceId;
          }
        }
        if (B) {
          g = f != null ? B.some(N => N.id === f) : R.marketplaceName != null && B.some(N => N.name === R.marketplaceName);
        } else if (T) {
          h = true;
        }
      }
    }
    const b = e.getAccountId();
    const w = await e.getLastActiveOrg();
    if (b !== null && b !== a || w != null && w !== r) {
      return false;
    }
    const y = await this.withManifestLock(async () => {
      const o = await this.readManifest(l);
      if (!o) {
        return null;
      }
      const m = o.plugins.find(P => P.id === t) ?? (i ? o.plugins.find(P => P.id === i) : undefined) ?? (s ? o.plugins.find(P => e.pluginKey(P) === s) : undefined);
      if (m) {
        await this.removePlugins(l, [m]);
        await this.writeManifest(l, {
          ...o,
          plugins: o.plugins.filter(P => P.id !== m.id)
        });
        return m;
      } else {
        return null;
      }
    });
    if (!y) {
      return false;
    }
    if (c === "available" && !g && !h) {
      if (this.backfillPromise) {
        await Promise.race([this.backfillPromise.catch(() => {}), new Promise(m => setTimeout(m, 5000))]);
      }
      if (e.getAccountId() !== a || (await e.getLastActiveOrg()) !== r) {
        e.logger.info(`${p} Skipping disable on uninstall of ${y.id}: live identity changed or unknown`);
        return true;
      }
      const o = i ?? y.id;
      try {
        await D.setRemotePluginEnabled(r, o, false, {
          timeoutMs: ne
        });
        e.logEvent("remote_plugin_enabled_put_outcome", {
          caller: "uninstall",
          outcome: "ok",
          enabled: false
        });
      } catch (m) {
        e.logEvent("remote_plugin_enabled_put_outcome", {
          caller: "uninstall",
          outcome: "error",
          enabled: false,
          status: m.status
        });
        e.logger.warn(`${p} Failed to disable ${o} on uninstall:`, m);
      }
    }
    return true;
  }
  async syncPlugins(t) {
    return this.syncPluginsTracked(t).result;
  }
  syncPluginsTracked(t) {
    if (this.syncPromise) {
      e.logger.info(`${p} Sync already in progress, waiting...`);
      const f = this.syncTiming;
      return {
        result: this.syncPromise,
        joinedInflightSync: true,
        syncStartedAt: (f == null ? undefined : f.startedAt) ?? Date.now(),
        syncTotalMs: (f == null ? undefined : f.totalMs) ?? Promise.resolve(undefined)
      };
    }
    const n = Date.now();
    let a = n;
    const r = this.runningSync;
    if (r) {
      this.refreshIdentityCache();
    }
    const l = r ? r.then(() => {
      e.logger.info(`${p} Orphaned sync finished — starting queued fresh sync`);
      a = Date.now();
      return this._syncPlugins((t == null ? undefined : t.skipUserPluginCleanup) ?? false);
    }) : this._syncPlugins((t == null ? undefined : t.skipUserPluginCleanup) ?? false);
    const s = l.then(() => Date.now() - a, () => {});
    this.syncPromise = l;
    this.syncTiming = {
      startedAt: n,
      totalMs: s
    };
    const i = l.then(() => {}, () => {});
    this.runningSync = i;
    i.then(() => {
      if (this.runningSync === i) {
        this.runningSync = null;
      }
    });
    const c = () => {
      if (this.syncPromise === l) {
        this.syncPromise = null;
        this.syncTiming = null;
      }
    };
    l.then(c, c);
    return {
      result: l,
      joinedInflightSync: false,
      syncStartedAt: n,
      syncTotalMs: s
    };
  }
  async refreshIdentityCache() {
    try {
      const t = await e.waitForAccountDetails(5000);
      if (!t || t.isLoggedOut) {
        return;
      }
      const n = await e.getLastActiveOrg();
      const a = e.getAccountId();
      if (!n || !a || (await e.sleep(0), (await e.getLastActiveOrg()) !== n) || e.getAccountId() !== a) {
        return;
      }
      this.cachedOrgId = n;
      this.cachedAccountId = a;
    } catch {}
  }
  resetForAccountSwitch() {
    this.syncPromise = null;
    this.syncTiming = null;
    this.cachedOrgId = null;
    this.cachedAccountId = null;
    this.stubRedownloadAttempted.clear();
    this.accountEpoch++;
    if (this.runningSync) {
      this.refreshIdentityCache();
    }
  }
  async waitForSync() {
    if (this.syncPromise) {
      await this.syncPromise.catch(() => {});
    }
  }
  startPeriodicSync() {
    if (this._syncInterval) {
      return;
    }
    const t = e.getParsedFeatureValueForKey("1978029737", "pluginsSyncIntervalMs", qe, e.numberType().int().positive());
    e.logger.info(`${p} Starting periodic sync (interval: ${t}ms)`);
    const n = a => {
      if (e.isFeatureEnabled("2340532315")) {
        this.syncPlugins(a).catch(r => {
          e.logger.warn(`${p} Periodic sync failed:`, r);
        });
      }
    };
    this._syncInterval = setInterval(() => n({
      skipUserPluginCleanup: true
    }), t);
    n();
  }
  stopPeriodicSync() {
    if (this._syncInterval) {
      clearInterval(this._syncInterval);
      this._syncInterval = null;
    }
  }
  async withManifestLock(t) {
    return this.manifestLock.runExclusive(t);
  }
  async _syncPlugins(t) {
    var w;
    const n = this.accountEpoch;
    e.logger.info(`${p} Starting remote plugins sync${t ? " (quick — skipping user-plugin cleanup)" : ""}`);
    let a = false;
    const r = await e.getLastActiveOrg();
    if ((await e.getLastActiveOrg()) === r) {
      this.cachedOrgId = r ?? null;
    }
    const l = await e.waitForAccountDetails(5000);
    if (!l || l.isLoggedOut) {
      e.logger.info(`${p} Skipping sync: session not confirmed after 5s wait`);
      return {
        downloaded: 0,
        removed: 0,
        newlyInstalled: []
      };
    }
    const s = e.getAccountId();
    if (e.getAccountId() === s) {
      this.cachedAccountId = s;
    }
    if (!r || !s) {
      e.logger.warn(`${p} Cannot sync: no org or account`);
      return {
        downloaded: 0,
        removed: 0,
        newlyInstalled: []
      };
    }
    const i = e.getRemoteCoworkPluginsDir(s, r);
    const c = e.getLegacyRemoteCoworkPluginsDir(s, r);
    let f = null;
    let g = false;
    try {
      await I.access(c);
      try {
        await e.renameDirWithRetry(c, i);
        e.logger.info(`${p} Migrated legacy remote plugins dir`);
      } catch (y) {
        e.logger.warn(`${p} Legacy dir rename failed; falling back to manifest merge:`, y);
        f = await this.readManifest(c);
      }
    } catch {}
    await e.mkdirPrivate(i);
    try {
      const y = await Xe(s, r, i);
      a = y > 0;
      if (y > 0) {
        this.enabledStateMigrationGen++;
      }
    } catch (y) {
      e.logger.warn(`${p} Migration failed (will retry):`, y);
    }
    let h = false;
    const b = [];
    try {
      const y = await D.fetchAutoInstalledPlugins(r);
      let o = await this.readManifest(i);
      const m = new Set(((o == null ? undefined : o.plugins) ?? []).map(d => d.id));
      const P = new Map(((o == null ? undefined : o.plugins) ?? []).map(d => [d.id, re(d)]));
      const R = new Set(((o == null ? undefined : o.plugins) ?? []).map(d => e.pluginKey(d)));
      if (f) {
        const d = new Set((o == null ? undefined : o.plugins.map(M => M.id)) ?? []);
        const v = new Set((o == null ? undefined : o.plugins.map(M => e.pluginKey(M))) ?? []);
        const $ = f.plugins.filter(M => !d.has(M.id) && !v.has(e.pluginKey(M)));
        const F = [];
        for (const M of $) {
          const G = this.getPluginDir(c, M.id);
          const V = this.getPluginDir(i, M.id);
          this.acquirePendingDirs([M.id]);
          try {
            await I.cp(G, V, {
              recursive: true
            });
            F.push(M);
            b.push(M.id);
          } catch (z) {
            this.releasePendingDirs([M.id]);
            e.logger.warn(`${p} Failed to copy legacy plugin ${M.id}; skipping:`, z);
          }
        }
        o = {
          lastUpdated: (o == null ? undefined : o.lastUpdated) ?? f.lastUpdated,
          plugins: [...((o == null ? undefined : o.plugins) ?? []), ...F]
        };
        g = F.length === $.length;
        e.logger.info(`${p} Merged ${F.length}/${$.length} plugin(s) from legacy manifest`);
      }
      const {
        toDownload: T,
        toRemove: L,
        stubTriggeredIds: B,
        nonLoadableProbeIds: j
      } = await this.calculateDelta(i, y, (o == null ? undefined : o.plugins) ?? [], r, n);
      const N = (o == null ? undefined : o.plugins) ?? [];
      const x = new Map(N.map(d => [e.pluginKey(d), d]));
      const H = [];
      const Y = new Map();
      for (const d of T) {
        const v = e.pluginKey(d);
        const $ = x.get(v);
        if ($ && $.id !== d.id) {
          e.logger.info(`${p} Plugin "${d.name}" ID changed: ${$.id} → ${d.id}`);
          H.push($);
          if ($.installedBy) {
            Y.set(d.id, $.installedBy);
          }
        }
      }
      const A = new Map(N.map(d => [d.id, d]));
      for (const d of B) {
        const v = (w = A.get(d)) == null ? undefined : w.installedBy;
        if (v) {
          Y.set(d, v);
        }
      }
      const Z = new Set(H.map(d => d.id));
      const U = L.filter(d => d.installedBy !== "user" && !Z.has(d.id));
      e.logger.info(`${p} Delta: ${T.length} to download, ${U.length} to remove`);
      let X = 0;
      const ee = [];
      if (T.length > 0) {
        const d = await this.downloadPlugins(i, T);
        b.push(...d.states.map(v => v.id));
        X = d.count;
        for (const v of d.states) {
          const $ = Y.get(v.id);
          if ($) {
            v.installedBy = $;
          }
        }
        ee.push(...d.states);
      }
      const se = ee.filter(d => !x.has(e.pluginKey(d)) && (!d.marketplaceName || !x.has(`${d.name}@`))).map(d => ({
        id: e.pluginKey(d),
        installationPreference: d.installationPreference
      }));
      const te = new Set(ee.map(d => d.id));
      if (n === this.accountEpoch) {
        for (const d of B) {
          if (te.has(d)) {
            this.stubRedownloadAttempted.add(d);
          }
        }
      }
      const Oe = H.filter(d => {
        var $;
        const v = ($ = T.find(F => e.pluginKey(F) === e.pluginKey(d))) == null ? undefined : $.id;
        return v != null && te.has(v);
      });
      const le = [...U, ...Oe];
      const oe = ((o == null ? undefined : o.plugins) ?? []).filter(d => !le.some(v => v.id === d.id) && !te.has(d.id));
      const Te = new Map(y.map(d => [d.id, d]));
      const Fe = new Set([...B, ...j]);
      await Promise.all(oe.filter(d => !Fe.has(d.id)).map(async d => {
        const v = this.getPluginDir(i, d.id);
        await e.ensurePluginManifest(v, {
          name: d.name
        });
        await e.ensurePluginCliStubs(v, "remote", d.id);
      }));
      for (const d of oe) {
        const v = Te.get(d.id);
        if (v) {
          if (!d.marketplaceName && v.marketplaceName) {
            d.marketplaceName = v.marketplaceName;
          }
          if (!d.marketplaceId && v.marketplaceId) {
            d.marketplaceId = v.marketplaceId;
          }
          d.installationPreference = v.installationPreference;
        }
      }
      let W = [...oe, ...ee];
      const J = W.filter(d => d.installedBy === "user");
      if (t && J.length > 0) {
        e.logger.info(`${p} Skipping user-plugin cleanup (quick sync) — ${J.length} user-installed plugin(s) carried forward as-is`);
      } else if (J.length > 0 && (await e.getLastActiveOrg()) !== r) {
        e.logger.info(`${p} Org changed mid-sync, skipping NOT_AVAILABLE cleanup to avoid cross-org deletion`);
      } else if (J.length > 0) {
        try {
          const d = [];
          let v = 0;
          const $ = 100;
          while (true) {
            const {
              plugins: k,
              hasMore: E
            } = await D.fetchBrowsableRemotePlugins({
              limit: $,
              offset: v,
              compact: true
            });
            d.push(...k);
            if (!E || k.length === 0) {
              break;
            }
            v += $;
          }
          if (e.isFeatureEnabled("720735283")) {
            d.push(...(await D.fetchAccountScopedRemotePlugins({
              compact: true
            })));
          }
          const F = new Map(d.map(k => [k.id, k]));
          const M = new Map(d.map(k => [e.pluginKey(k), k]));
          for (const k of J) {
            let E = F.get(k.id);
            if (!E && !k.marketplaceName) {
              const _ = d.filter(Q => Q.name === k.name);
              if (_.length === 1) {
                E = _[0];
              }
            }
            if (E) {
              if (!k.marketplaceName && E.marketplaceName) {
                k.marketplaceName = E.marketplaceName;
              }
              if (!k.marketplaceId && E.marketplaceId) {
                k.marketplaceId = E.marketplaceId;
              }
              k.installationPreference = E.installationPreference;
            }
          }
          const G = [];
          for (const k of J) {
            const E = F.get(k.id) ?? M.get(e.pluginKey(k));
            if (E && (E.id !== k.id || E.updatedAt !== k.updatedAt)) {
              G.push({
                old: k,
                fresh: E
              });
            }
          }
          if (G.length > 0) {
            const {
              states: k
            } = await this.downloadPlugins(i, G.map(O => O.fresh));
            b.push(...k.map(O => O.id));
            const E = new Set(k.map(O => O.id));
            const _ = G.filter(O => E.has(O.fresh.id));
            for (const O of k) {
              O.installedBy = "user";
            }
            const Q = new Set(_.map(O => O.old.id));
            W = W.filter(O => !Q.has(O.id) && !E.has(O.id));
            W.push(...k);
            X += k.length;
            e.logger.info(`${p} Refreshed ${k.length} stale user-installed plugin(s)`);
          }
          let V;
          if (e.isFeatureEnabled("720735283")) {
            const k = await e.listAccountMarketplaces();
            V = new Set(k.map(E => E.name));
          } else {
            V = new Set();
          }
          const z = J.filter(k => !F.has(k.id) && !M.has(e.pluginKey(k)) && (!k.marketplaceName || !V.has(k.marketplaceName)));
          if (z.length > 0) {
            e.logger.info(`${p} Removed ${z.length} user-installed plugins set to NOT_AVAILABLE`);
            W = W.filter(k => !z.some(E => E.id === k.id));
          }
        } catch (d) {
          e.logger.warn(`${p} Failed to refresh/prune user-installed plugins:`, d);
        }
      }
      if (!t) {
        try {
          const d = await this.downloadAccountEnabledPlugins(s, r, i, W);
          b.push(...d.map(v => v.id));
          if (d.length > 0) {
            W.push(...d);
            X += d.length;
            e.logger.info(`${p} Downloaded ${d.length} account-enabled plugin(s)`);
          }
        } catch (d) {
          e.logger.warn(`${p} Failed to sync account-enabled plugins:`, d);
        }
      }
      let pe = 0;
      await this.withManifestLock(async () => {
        const d = await this.readManifest(i);
        let v;
        if (!d) {
          v = W;
        } else {
          const $ = d.plugins;
          const F = new Map($.map(_ => [_.id, _]));
          const M = new Map($.map(_ => [e.pluginKey(_), _]));
          const G = W.filter(_ => {
            const Q = F.get(_.id);
            if (Q) {
              const Pe = P.get(_.id);
              return Pe === undefined || re(Q) === Pe;
            }
            const O = M.get(e.pluginKey(_));
            if (O) {
              return m.has(O.id);
            }
            const ye = M.get(`${_.name}@`);
            if (ye) {
              return m.has(ye.id);
            } else {
              return !m.has(_.id) && !R.has(e.pluginKey(_)) && !R.has(`${_.name}@`);
            }
          });
          const V = new Set(G.map(_ => e.pluginKey(_)));
          const z = new Set(G.map(_ => _.id));
          const k = new Set(W.map(_ => _.id));
          const E = $.filter(_ => V.has(e.pluginKey(_)) || z.has(_.id) ? false : m.has(_.id) && !k.has(_.id) ? P.get(_.id) !== re(_) : true);
          v = [...G, ...E];
        }
        await this.writeManifest(i, {
          lastUpdated: Date.now(),
          plugins: v
        });
        pe = await this.cleanupOrphanDirs(i, v);
      });
      e.logger.info(`${p} Sync complete: ${X} downloaded, ${le.length} removed, ${pe} orphans cleaned`);
      h = true;
      if (!t && !a && e.isFeatureEnabled("3633961296")) {
        const d = Ne(s, r, i);
        const v = this.backfillPromise;
        const $ = v ? Promise.allSettled([v, d]).then(() => {}) : d.then(() => {}, () => {});
        this.backfillPromise = $;
        $.then(() => {
          if (this.backfillPromise === $) {
            this.backfillPromise = null;
          }
        });
        d.then(F => {
          if (F > 0) {
            this.enabledStateMigrationGen++;
          }
        }).catch(F => e.logger.warn(`${p} Backfill failed:`, F));
      }
      if (g) {
        I.rm(c, {
          recursive: true,
          force: true,
          ...e.RM_RETRY_OPTS
        }).catch(d => {
          e.logger.debug(`${p} Legacy dir cleanup skipped:`, d);
        });
      }
      return {
        downloaded: X,
        removed: le.length,
        newlyInstalled: se
      };
    } catch (y) {
      e.logger.error(`${p} Sync failed:`, y);
      throw y;
    } finally {
      this.releasePendingDirs(b);
      if (!h) {
        try {
          await this.withManifestLock(async () => {
            const y = await this.readManifest(i);
            if (y) {
              await this.cleanupOrphanDirs(i, y.plugins);
            }
          });
        } catch {}
      }
    }
  }
  async isRedownloadableStub(t, n, a, r) {
    let l;
    try {
      let i;
      let c;
      const f = await e.isRealpathWithin(e.getManifestPath(t), t);
      if (!f) {
        return false;
      }
      try {
        const g = await e.readPluginFileNoFollowCapped(f, 262144);
        if (g.content === undefined) {
          return false;
        }
        c = g.content;
      } catch {
        return false;
      }
      try {
        i = JSON.parse(c);
      } catch {
        i = null;
      }
      l = await e.installYieldsNoComponents(t, i);
    } catch {
      return false;
    }
    if (!l) {
      return false;
    }
    const s = r !== this.accountEpoch || this.stubRedownloadAttempted.has(n.id);
    if (!s) {
      e.logger.info(`${p} Re-downloading ${n.id}: install is effectively empty (stub or unparseable manifest, nothing at the default component paths)`);
    }
    if (r === this.accountEpoch) {
      e.logCoworkEvent("marketplace_plugin_stub_manifest_detected", {
        plugin_uid: e.analyticsNameHash(`${a}:${n.id}`),
        plugin_updated_at: n.updatedAt ?? "",
        action: s ? "suppressed_session_guard" : "re_download"
      });
    }
    return !s;
  }
  async calculateDelta(t, n, a, r, l) {
    const s = new Map(a.map(w => [w.id, w]));
    const i = new Map(n.map(w => [w.id, w]));
    const c = [];
    const f = [];
    const g = [];
    const h = [];
    const b = e.getFeatureValue("552157343", true);
    await ie.addAll([...i.values()].map(w => async () => {
      const y = s.get(w.id);
      const o = this.getPluginDir(t, w.id);
      if (!y || y.updatedAt !== w.updatedAt) {
        c.push(w);
        return;
      }
      let m = false;
      if (!b) {
        try {
          await I.access(o);
          m = true;
        } catch {
          m = false;
        }
        if (!m) {
          c.push(w);
        }
        return;
      }
      try {
        const P = await e.probePluginManifestState(o);
        if (P === "loadable") {
          if (await this.isRedownloadableStub(o, w, r, l)) {
            g.push(w.id);
          } else {
            m = true;
          }
        } else if (P === "missing") {
          h.push(w.id);
          if (l === this.accountEpoch && !this.stubRedownloadAttempted.has(w.id)) {
            e.logger.info(`${p} ${w.id}: plugin.json missing or unreachable — re-downloading`);
            g.push(w.id);
          } else {
            m = true;
          }
        } else {
          h.push(w.id);
          m = true;
        }
      } catch {
        m = false;
      }
      if (!m) {
        c.push(w);
      }
    }));
    for (const w of a) {
      if (!i.has(w.id)) {
        f.push(w);
      }
    }
    return {
      toDownload: c,
      toRemove: f,
      stubTriggeredIds: g,
      nonLoadableProbeIds: h
    };
  }
  async downloadPlugins(t, n, a) {
    let r = 0;
    let l = 0;
    const s = [];
    for (let i = 0; i < n.length; i += $e) {
      const c = n.slice(i, i + $e);
      this.acquirePendingDirs(c.map(g => g.id));
      const f = await Promise.allSettled(c.map(async g => {
        const h = performance.now();
        try {
          const b = await this.downloadOnePlugin(t, g);
          this.logTriggeredInstall(a == null ? undefined : a.telemetryTrigger, g, h);
          return b;
        } catch (b) {
          this.logTriggeredInstall(a == null ? undefined : a.telemetryTrigger, g, h, b);
          throw b;
        }
      }));
      for (let g = 0; g < f.length; g++) {
        const h = f[g];
        if (h.status === "fulfilled") {
          r++;
          s.push(h.value);
        } else {
          l++;
          const b = c[g];
          this.releasePendingDirs([b.id]);
          e.logger.error(`${p} Failed to download ${b.name}:`, h.reason);
        }
      }
    }
    return {
      count: r,
      states: s,
      failed: l
    };
  }
  async downloadOnePlugin(t, n) {
    const a = this.getPluginDir(t, n.id);
    const r = () => D.fetchRemotePluginById(n.id).catch(() => null);
    const l = async () => {
      const c = await r();
      return c || (await e.sleep(1000), r());
    };
    const [, s] = await Promise.all([D.fetchAndExtractPluginWithRetry(n.id, a), l()]);
    const i = s && !("notFound" in s) ? s : null;
    await e.ensurePluginManifest(a, {
      name: n.name
    }, {
      fetchDetail: async () => i ? {
        displayName: i.displayName ?? undefined,
        description: i.description ?? undefined,
        author: i.author
      } : null
    });
    await e.ensurePluginCliStubs(a, "remote", n.id);
    await Ie(a, "remote", n.id, {
      orgId: this.cachedOrgId ?? undefined
    });
    e.logger.debug(`${p} Downloaded plugin: ${n.name}`);
    return {
      id: n.id,
      name: n.name,
      updatedAt: n.updatedAt,
      displayName: (i == null ? undefined : i.displayName) ?? undefined,
      marketplaceId: n.marketplaceId,
      marketplaceName: n.marketplaceName,
      installedBy: "auto",
      installationPreference: n.installationPreference
    };
  }
  logTriggeredInstall(t, n, a, r) {
    if (t) {
      e.logEvent("marketplace_plugin_op_result", {
        operation: "install_plugin",
        implementation: "cowork_remote_api",
        status: r === undefined ? "success" : "error",
        duration_ms: Math.round(performance.now() - a),
        trigger: t,
        plugin_uuid: n.id,
        marketplace_uuid: n.marketplaceId,
        ...(r === undefined ? {} : {
          error_code: e.deriveErrorCode(r)
        })
      });
    }
  }
  async downloadAccountEnabledPlugins(t, n, a, r) {
    const l = performance.now();
    const s = {
      account_enabled_count: 0,
      candidates_checked: 0,
      skipped_disabled: 0,
      skipped_by_cap: 0,
      installed: 0,
      failed: 0
    };
    try {
      const {
        states: i,
        bailed: c
      } = await this.downloadAccountEnabledPluginsInner(t, n, a, r, s);
      e.logEvent("marketplace_plugin_account_sync_result", {
        status: c ? "bailed" : "success",
        ...s,
        duration_ms: Math.round(performance.now() - l)
      });
      return i;
    } catch (i) {
      e.logEvent("marketplace_plugin_account_sync_result", {
        status: "error",
        ...s,
        duration_ms: Math.round(performance.now() - l),
        error_code: e.deriveErrorCode(i)
      });
      throw i;
    }
  }
  async downloadAccountEnabledPluginsInner(t, n, a, r, l) {
    const s = new Set();
    const i = (await D.fetchAccountEnabledPlugins(n)).filter(o => s.has(o.id) ? false : (s.add(o.id), true));
    l.account_enabled_count = i.length;
    const c = new Set(r.map(o => o.id));
    const f = new Set(r.map(o => e.pluginKey(o)));
    const g = i.filter(o => o.installationPreference === "available" && !c.has(o.id) && !f.has(e.pluginKey(o)) && (!o.marketplaceName || !f.has(`${o.name}@`)));
    l.candidates_checked = g.length;
    if (g.length === 0) {
      return {
        states: [],
        bailed: false
      };
    }
    let h = g;
    if (e.isFeatureEnabled("4274871493")) {
      try {
        const o = (await D.fetchPluginEnabledState(n)).filter(m => !m.enabled);
        if (o.length > 0) {
          h = g.filter(m => !o.some(P => P.pluginName === m.name && (P.marketplaceId != null && m.marketplaceId != null ? P.marketplaceId === m.marketplaceId : P.marketplaceName != null && P.marketplaceName === m.marketplaceName)));
        }
      } catch {}
    }
    l.skipped_disabled = g.length - h.length;
    const b = h.length;
    h = h.slice(0, He);
    l.skipped_by_cap = b - h.length;
    if (h.length === 0) {
      return {
        states: [],
        bailed: false
      };
    }
    if (e.getAccountId() !== t || (await e.getLastActiveOrg()) !== n) {
      e.logger.info(`${p} Identity changed mid-sync, skipping account-enabled plugin materialization to avoid cross-account write`);
      return {
        states: [],
        bailed: true
      };
    }
    const {
      states: w,
      failed: y
    } = await this.downloadPlugins(a, h, {
      telemetryTrigger: "account_sync"
    });
    l.installed = w.length;
    l.failed = y;
    for (const o of w) {
      o.installedBy = "user";
    }
    if (w.length > 0) {
      try {
        await this.clearLegacyEnabledPreferences(t, n, w);
      } catch (o) {
        this.releasePendingDirs(w.map(m => m.id));
        throw o;
      }
    }
    return {
      states: w,
      bailed: false
    };
  }
  async clearLegacyEnabledPreferences(t, n, a) {
    const r = new Set();
    for (const s of a) {
      if (s.marketplaceName) {
        r.add(e.pluginKey(s));
      }
      r.add(s.id);
    }
    const l = e.getCoworkSettingsFile(t, n);
    try {
      await e.withCoworkMutex(async () => {
        const s = await e.readSettingsFileResult(l);
        if (s.status !== "ok") {
          return;
        }
        const c = {
          ...(s.settings.enabledPlugins ?? {})
        };
        let f = false;
        for (const g of r) {
          if (Object.hasOwn(c, g)) {
            delete c[g];
            f = true;
          }
        }
        if (f) {
          await e.writeJsonAtomic(l, {
            ...s.settings,
            enabledPlugins: c
          });
        }
      });
    } catch (s) {
      e.logger.warn(`${p} Failed to clear legacy enabled preferences on materialize:`, s);
    }
  }
  async removePlugins(t, n) {
    for (const a of n) {
      const r = this.getPluginDir(t, a.id);
      try {
        await I.rm(r, {
          recursive: true,
          force: true,
          ...e.RM_RETRY_OPTS
        });
        e.logger.debug(`${p} Removed plugin: ${a.name}`);
      } catch {}
    }
  }
  async cleanupOrphanDirs(t, n) {
    const a = new Set([...n.map(r => r.id), ...this.pendingInstallDirs.keys()]);
    return e.cleanupOrphanDirectories(t, a, {
      logPrefix: p,
      skipFiles: [q, `${q}.tmp`]
    });
  }
  getPluginDir(t, n) {
    try {
      return e.safeJoin(t, n, {
        allowEqual: false
      });
    } catch {
      throw new Error(`Invalid plugin ID: "${n}"`);
    }
  }
  async manifestFileExists(t) {
    try {
      await I.access(C.join(t, q));
      return true;
    } catch {
      return false;
    }
  }
  async readManifest(t) {
    const n = C.join(t, q);
    try {
      const a = await e.readFileNoFifo(n, e.REMOTE_PLUGINS_LEDGER_MAX_BYTES);
      return JSON.parse(a);
    } catch (a) {
      if (!(a instanceof Error) || !("code" in a) || a.code !== "ENOENT") {
        e.logger.warn(`${p} Failed to read manifest:`, a);
      }
      return null;
    }
  }
  async writeManifest(t, n) {
    const a = C.join(t, q);
    await e.writeJsonAtomic(a, n);
  }
  async clearPluginsDir(t) {
    await I.rm(t, {
      recursive: true,
      force: true,
      ...e.RM_RETRY_OPTS
    });
    e.logger.info(`${p} Cleared plugins directory: %s`, t);
  }
  async clearCache() {
    const t = await e.getLastActiveOrg();
    if (!t) {
      return;
    }
    const n = e.getAccountId();
    if (!n) {
      return;
    }
    const a = e.getRemoteCoworkPluginsDir(n, t);
    await this.clearPluginsDir(a);
  }
}
function fe(u, t) {
  if (u.installationPreference === "required") {
    return false;
  }
  const {
    enabledPluginsMap: n
  } = t ?? {};
  if (n) {
    return !e.lookupPluginEnabled(u, n);
  } else {
    return false;
  }
}
const Je = {
  isPluginDisabled: fe,
  mapEnabledOverridesByPluginId: we,
  backfillImplicitlyEnabledPluginsToBackend: Ne,
  isStillBackfillable: Re,
  isUserAvailablePlugin: me,
  pluginStateFingerprint: re
};
const he = new De();
function Ve() {
  e.onFeatureChange("2340532315", u => {
    if (u == null || !u.on) {
      he.stopPeriodicSync();
      return;
    }
    e.waitForAccountId().then(t => {
      if (t) {
        he.startPeriodicSync();
      }
    }).catch(t => {
      e.logger.debug(`${p} prewarm sync failed: %o`, t);
    });
  });
}
exports.RemotePluginManager = De;
exports._test = Je;
exports.primePluginsSyncAtAppReady = Ve;
exports.remotePluginManager = he;
//# sourceMappingURL=index.chunk-CSQCh8Uk.js.map