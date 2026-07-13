"use strict";
(function() {
    try {
        var u = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
        u.SENTRY_RELEASE = {
            id: "df1d8a339dfabcf359af7144fe142b59ff7d9a0f"
        }
    } catch {}
})();
try {
    (function() {
        var u = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            t = new u.Error().stack;
        t && (u._sentryDebugIds = u._sentryDebugIds || {}, u._sentryDebugIds[t] = "2cc4b131-a58f-4a64-b86e-7a765e83f250", u._sentryDebugIdIdentifier = "sentry-dbid-2cc4b131-a58f-4a64-b86e-7a765e83f250")
    })()
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
const I = require("node:fs/promises"),
    C = require("node:path"),
    e = require("./index.chunk-c42vKsva.js"),
    Se = require("node:crypto"),
    ae = require("node:fs"),
    Ae = require("node:stream"),
    Ee = require("node:stream/promises"),
    Le = require("electron"),
    D = require("./index.chunk-GtrR4ctP.js"),
    S = "[pluginBinaryAssets]",
    Ce = "marketplace-plugin-assets",
    be = 300 * 1e3,
    ke = 3,
    ve = 1e4,
    Be = /^[0-9a-f]{64}$/,
    ce = 32;
let ue = 0;
class K extends Error {
    constructor(t, n, a) {
        super(t), this.name = "PluginAssetFetchError", this.code = n, this.status = a
    }
}
class Ke extends Ae.Transform {
    constructor() {
        super(...arguments), this.hash = Se.createHash("sha256")
    }
    _transform(t, n, a) {
        this.hash.update(t), a(null, t)
    }
    digestHex() {
        return this.hash.digest("hex")
    }
}
const xe = ae.constants.O_RDONLY | (ae.constants.O_NOFOLLOW ?? 0) | (ae.constants.O_NONBLOCK ?? 0);
async function ge(u, t, n) {
    if (n != null && n.guestWritable) return !1;
    let a;
    try {
        const r = await I.lstat(u).catch(() => null);
        if (!(r != null && r.isFile()) || (a = await I.open(u, xe), !(await a.stat()).isFile())) return !1;
        const s = Se.createHash("sha256");
        for await (const i of a.createReadStream({
            autoClose: !1
        })) s.update(i);
        return s.digest("hex") !== t ? !1 : ((n == null ? void 0 : n.ensureMode) !== void 0 && await a.chmod(n.ensureMode).catch(() => {}), !0)
    } catch {
        return !1
    } finally {
        await (a == null ? void 0 : a.close().catch(() => {}))
    }
}

function Ue(u, t) {
    return `${e.claudeAiUrl()}/api/organizations/${u}/marketplace/plugin-assets/${t}`
}
async function We(u, t, n) {
    var b;
    const a = Ue(u, t),
        r = new AbortController;
    let l;
    const s = () => {
        l !== void 0 && clearTimeout(l), l = setTimeout(() => r.abort(), be)
    };
    let i;
    try {
        i = await e.fetchWithTimeout(a, {
            timeout: be,
            signal: r.signal
        })
    } catch (w) {
        throw new K(`${S} transport error fetching asset: ${w instanceof Error?w.message:String(w)}`, "asset_transient")
    }
    if (!i.ok) throw await ((b = i.body) == null ? void 0 : b.cancel().catch(() => {})), i.status === 404 ? new K(`${S} asset not found (HTTP 404)`, "asset_not_found", 404) : i.status === 410 ? new K(`${S} asset denylisted (HTTP 410)`, "asset_denylisted", 410) : i.status >= 500 ? new K(`${S} transient storage error (HTTP ${i.status})`, "asset_transient", i.status) : new K(`${S} unexpected response (HTTP ${i.status})`, "asset_http_error", i.status);
    if (!i.body) throw new K(`${S} empty response body`, "asset_transient", i.status);
    const c = new Ke,
        f = e.createWriteStreamPrivate(n, {
            flags: "wx"
        }),
        g = Ae.Readable.fromWeb(i.body);
    g.on("data", s), s();
    try {
        await Ee.pipeline(g, c, f, {
            signal: r.signal
        })
    } catch (w) {
        throw await I.rm(n, {
            force: !0
        }).catch(() => {}), w instanceof Error && w.name === "AbortError" ? new K(`${S} asset download timed out or stalled`, "asset_transient") : new K(`${S} asset download failed: ${w instanceof Error?w.message:String(w)}`, "asset_transient")
    } finally {
        l !== void 0 && clearTimeout(l)
    }
    const h = c.digestHex();
    if (h !== t) throw await I.rm(n, {
        force: !0
    }).catch(() => {}), new K(`${S} downloaded asset hashed to ${h}, expected ${t} — refusing`, "asset_digest_mismatch")
}
async function Ge(u, t, n) {
    const a = C.join(n, t);
    if (await ge(a, t)) return {
        cachePath: a,
        cacheHit: !0
    };
    const r = await I.lstat(a).catch(() => null);
    r && !r.isFile() && await I.rm(a, {
        recursive: !0,
        force: !0
    }).catch(() => {});
    let l;
    for (let s = 1; s <= ke; s++) {
        const i = C.join(n, `.partial-${t}-${process.pid}-${ue++}`);
        try {
            await We(u, t, i);
            try {
                await I.rename(i, a)
            } catch (c) {
                if (await ge(a, t)) return await I.rm(i, {
                    force: !0
                }).catch(() => {}), {
                    cachePath: a,
                    cacheHit: !1
                };
                throw c
            }
            return {
                cachePath: a,
                cacheHit: !1
            }
        } catch (c) {
            if (l = c, await I.rm(i, {
                    force: !0
                }).catch(() => {}), !(c instanceof K && c.code === "asset_transient") || s === ke) throw c;
            const g = Math.pow(2, s - 1) * 1e3;
            e.logger.warn(`${S} attempt ${s} failed for asset ${t}, retrying in ${g}ms`), await e.sleep(g)
        }
    }
    throw l instanceof Error ? l : new Error(`${S} failed to download asset ${t}`)
}
async function je(u, t, n, a) {
    const r = C.join(n, a),
        l = C.join(t, `.place-${a}-${process.pid}-${ue++}`);
    try {
        await I.copyFile(u, l, ae.constants.COPYFILE_EXCL), await I.chmod(l, 493);
        try {
            await I.rename(l, r)
        } catch (s) {
            throw s.code !== "EXDEV" ? s : new K(`${S} cache dir and bin/ are on different volumes — cannot place ${a} safely on Windows`, "asset_place_exdev")
        }
    } finally {
        await I.rm(l, {
            force: !0
        }).catch(() => {})
    }
}
async function de(u, t) {
    const n = await I.lstat(t).catch(() => null);
    if (!(n != null && n.isDirectory())) return null;
    const a = await I.lstat(u).catch(() => null);
    return a != null && a.isDirectory() && await e.isRealpathWithin(u, t) || null
}
async function Ie(u, t, n, a) {
    const r = performance.now();
    let l = 0,
        s = 0,
        i = 0,
        c = 0,
        f = 0,
        g, h, b = !0;
    try {
        const w = await e.readPluginManifestAsync(u);
        if (!w) {
            b = !1;
            return
        }
        const y = e.normalizeManifestBinaries(w);
        if (!y) {
            b = !1;
            return
        }
        const o = new Set(e.getRawManifestCliNames(w));
        let m = Object.entries(y).filter(([A, Z]) => !e.BINARY_BASENAME_VALID.test(A) || !Be.test(Z.sha256) ? (e.logger.warn(`${S} skipping malformed binaries entry "${A}"`), !1) : o.has(A) ? (e.logger.warn(`${S} skipping binaries entry "${A}" — also declared as a CLI stub`), !1) : !0);
        if (m.length === 0) {
            b = !1;
            return
        }
        m.length > ce && (e.logger.warn(`${S} ${u} declares ${m.length} binaries; capping at ${ce}`), m = m.slice(0, ce)), l = m.length;
        const {
            isFeatureEnabled: P,
            waitForGrowthBookReady: R
        } = await Promise.resolve().then(() => require("./index.chunk-c42vKsva.js")).then(A => A.growthbook);
        let T;
        if (!await Promise.race([R().then(() => !0), new Promise(A => {
                T = setTimeout(() => A(!1), ve)
            })]).finally(() => {
                T !== void 0 && clearTimeout(T)
            })) {
            g = "gate_unavailable", e.logger.warn(`${S} GrowthBook not ready within ${ve}ms — skipping binary asset fetch for ${u}`);
            return
        }
        if (!P("1569828280")) {
            g = "gate_off", e.logger.info(`${S} gate off — skipping binary asset fetch for ${u}`);
            return
        }
        const B = (a == null ? void 0 : a.orgId) ?? await e.getLastActiveOrg();
        if (!B) {
            g = "no_active_org", e.logger.warn(`${S} no active organization — cannot fetch binary assets for ${u}`);
            return
        }
        const j = await I.lstat(u).catch(() => null);
        if (!(j != null && j.isDirectory())) {
            h = "plugin_root_not_dir", e.logger.warn(`${S} plugin root is not a real directory for ${u} — refusing binary placement`);
            return
        }
        const N = C.join(u, "bin");
        let x = null;
        try {
            x = await I.lstat(N)
        } catch (A) {
            if ((A == null ? void 0 : A.code) !== "ENOENT") {
                h = "bin_uninspectable", e.logger.warn(`${S} bin/ not inspectable for ${u} — refusing binary placement`, A);
                return
            }
        }
        if (x && !x.isDirectory()) {
            h = "bin_not_dir", e.logger.warn(`${S} bin/ is a ${x.isSymbolicLink()?"symlink":"non-directory"} for ${u} — refusing binary placement (not followed, not deleted)`);
            return
        }
        x || await I.mkdir(N, {
            mode: 493
        }).catch(A => {
            if ((A == null ? void 0 : A.code) !== "EEXIST") throw A
        });
        const H = await I.lstat(N).catch(() => null);
        if (!(H != null && H.isDirectory())) {
            h = "bin_dir_race", e.logger.warn(`${S} bin/ changed shape mid-provision for ${u}`);
            return
        }
        if (!await de(N, u)) {
            h = "bin_outside_plugin", e.logger.warn(`${S} bin/ does not resolve inside the plugin dir for ${u} — refusing binary placement`);
            return
        }
        const Y = (a == null ? void 0 : a.cacheDir) ?? C.join(Le.app.getPath("userData"), Ce);
        await e.mkdirPrivate(Y);
        for (const [A, Z] of m) try {
            const U = await de(N, u);
            if (!U) {
                h = h ?? "bin_dir_race", e.logger.warn(`${S} bin/ changed shape for ${u} — skipping ${A}`);
                continue
            }
            const X = C.join(U, A);
            if (await ge(X, Z.sha256, {
                    ensureMode: 493,
                    guestWritable: !0
                })) {
                i++;
                continue
            }
            const {
                cachePath: ee,
                cacheHit: se
            } = await Ge(B, Z.sha256, Y), te = await de(N, u);
            if (!te) {
                h = h ?? "bin_dir_race", e.logger.warn(`${S} bin/ changed shape during download for ${u} — skipping ${A}`);
                continue
            }
            se ? c++ : f++, await je(ee, Y, te, A), s++
        } catch (U) {
            h = h ?? (U instanceof K ? U.code : U instanceof Error ? U.name : "unknown"), e.logger.warn(`${S} failed to provision bin/${A} for ${u}:`, U)
        }
    } catch (w) {
        h = h ?? (w instanceof Error ? w.name : "unknown"), e.logger.warn(`${S} failed for ${u}:`, w)
    } finally {
        b && e.logCoworkEvent("lam_plugin_binary_asset_provision", {
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
        })
    }
}
const q = e.REMOTE_PLUGINS_MANIFEST_FILE,
    p = "[RemotePluginManager]",
    qe = 6e5,
    _e = e.toGuestCompatibleMountName(e.REMOTE_PLUGINS_MOUNT_NAME_RAW),
    $e = 3,
    He = 25,
    ne = 1e4,
    Ye = 3;

function me(u) {
    return u.installedBy !== "auto" && u.installationPreference !== "required" && u.installationPreference !== "auto_install"
}
const ie = new e.PQueue({
    concurrency: 16
});
async function Xe(u, t, n) {
    const a = e.getCoworkSettingsFile(u, t),
        l = (await e.readSettingsFile(a) ?? {}).enabledPlugins ?? {};
    if (Object.keys(l).length === 0) return 0;
    let s = null;
    try {
        const y = C.join(n, q),
            o = await e.readFileNoFifo(y, e.REMOTE_PLUGINS_LEDGER_MAX_BYTES);
        s = JSON.parse(o)
    } catch {
        return 0
    }
    const i = [];
    for (const y of s.plugins) {
        const m = e.legacyEnabledPluginKeys(y).filter(P => typeof l[P] == "boolean");
        m.length > 0 && i.push({
            plugin: y,
            enabled: l[m[0]],
            matchedKeys: m
        })
    }
    if (i.length === 0) return 0;
    e.logger.info(`${p} Migration: pushing ${i.length} remote plugin enabled state(s) to API`);
    const c = new Map;
    for (const {
            matchedKeys: y
        }
        of i)
        for (const o of y) c.set(o, (c.get(o) ?? 0) + 1);
    const f = new Map,
        g = y => {
            for (const o of y) f.set(o, (f.get(o) ?? 0) + 1)
        };
    let h = 0;
    for (const {
            plugin: y,
            enabled: o,
            matchedKeys: m
        }
        of i) {
        const P = await D.setRemotePluginEnabledResolved(t, y, o, {
            caller: "migration_push"
        });
        P.outcome === "ok" || P.outcome === "retried" ? (h++, g(m), e.logger.info(`${p} Migration: pushed ${y.id} (enabled=${o}${P.outcome==="retried"?`, via ${P.effectiveId}`:""})`)) : P.outcome === "unresolvable" && o ? (g(m), e.logger.info(`${p} Migration: ${y.id} unresolvable, dropping redundant enabled=true key`)) : P.outcome === "unresolvable" ? e.logger.info(`${p} Migration: ${y.id} unresolvable; retaining enabled=false key`) : P.outcome === "error" && (P.status === 409 || P.status === 422) ? (g(m), e.logger.info(`${p} Migration: ${y.id} rejected (HTTP ${P.status}), dropping stale entry`)) : P.outcome === "error" && e.logger.warn(`${p} Migration: failed to push ${P.effectiveId}:`, P.error)
    }
    const b = new Set;
    for (const {
            matchedKeys: y
        }
        of i)
        if (!y.every(m => f.get(m) === c.get(m)))
            for (const m of y) b.add(m);
    const w = new Set;
    for (const y of c.keys()) b.has(y) || w.add(y);
    if (w.size > 0) try {
        let y = !1;
        await e.withCoworkMutex(async () => {
            const o = await e.readSettingsFileResult(a);
            if (o.status === "unreadable") {
                e.logger.warn(`${p} Migration: settings file unreadable inside mutex; skipping delete (will retry next sync)`);
                return
            }
            const m = o.status === "ok" ? o.settings : {},
                P = {
                    ...m.enabledPlugins ?? {}
                };
            for (const R of w) delete P[R];
            await e.writeJsonAtomic(a, {
                ...m,
                enabledPlugins: P
            }), y = !0
        }), y && e.logger.info(`${p} Migration: removed ${w.size} fully-migrated entries from settings file`)
    } catch (y) {
        e.logger.warn(`${p} Migration: failed to remove migrated entries from settings file (will retry next sync):`, y)
    } else h === 0 && e.logger.warn(`${p} Migration: no entries resolved, will retry next sync`);
    return h
}

function we(u, t) {
    const n = {},
        a = new Set;
    for (const l of u) {
        const s = t.find(i => i.pluginName !== l.name ? !1 : l.marketplaceId && i.marketplaceId ? i.marketplaceId === l.marketplaceId : !!l.marketplaceName && i.marketplaceName === l.marketplaceName);
        s && (n[l.id] = s.enabled, a.add(s))
    }
    const r = new Set;
    for (const l of u) {
        if (l.id in n) continue;
        t.some(i => !a.has(i) && i.pluginName === l.name && !(l.marketplaceId && i.marketplaceId && l.marketplaceId !== i.marketplaceId)) && r.add(l.id)
    }
    return {
        byPluginId: n,
        blockedPluginIds: r
    }
}
async function Me(u, t) {
    const n = e.getCoworkSettingsFile(u, t),
        a = await e.readSettingsFileResult(n);
    return a.status === "unreadable" ? null : a.status === "ok" ? a.settings.enabledPlugins ?? {} : {}
}
async function Re(u, t, n, a) {
    if (e.getAccountId() !== t || await e.getLastActiveOrg() !== n) return !1;
    let r = null;
    try {
        r = JSON.parse(await e.readFileNoFifo(C.join(a, q), e.REMOTE_PLUGINS_LEDGER_MAX_BYTES))
    } catch {
        return !1
    }
    if (!(r != null && r.plugins.some(s => s.id === u.id))) return !1;
    const l = await Me(t, n);
    return l === null ? !1 : e.lookupPluginEnabled(u, l)
}
async function Ne(u, t, n) {
    if (!e.isFeatureEnabled("4274871493") || !e.isFeatureEnabled("3633961296")) return 0;
    let a = null;
    try {
        const h = await e.readFileNoFifo(C.join(n, q), e.REMOTE_PLUGINS_LEDGER_MAX_BYTES);
        a = JSON.parse(h)
    } catch {
        return 0
    }
    if (!a || a.plugins.length === 0) return 0;
    let r;
    try {
        r = await D.fetchPluginEnabledState(t)
    } catch (h) {
        return e.logger.warn(`${p} Backfill: enabled-state fetch failed, skipping this sync`, h), 0
    }
    const {
        byPluginId: l,
        blockedPluginIds: s
    } = we(a.plugins, r), i = await Me(u, t);
    if (i === null) return e.logger.warn(`${p} Backfill: local settings unreadable, skipping this sync`), 0;
    const c = a.plugins.filter(h => me(h) && !(h.id in l) && !s.has(h.id) && e.lookupPluginEnabled(h, i));
    if (c.length === 0 || e.getAccountId() !== u || await e.getLastActiveOrg() !== t) return 0;
    e.logger.info(`${p} Backfill: writing ${c.length} implicit plugin enable(s) to API`);
    const f = new e.PQueue({
        concurrency: Ye
    });
    let g = 0;
    return await f.addAll(c.map(h => async () => {
        if (!await Re(h, u, t, n)) return;
        const b = await D.setRemotePluginEnabledResolved(t, h, !0, {
            caller: "implicit_enable_backfill"
        });
        b.outcome === "ok" || b.outcome === "retried" ? g++ : b.outcome === "unresolvable" ? e.logger.info(`${p} Backfill: ${h.id} unresolvable, skipping`) : b.outcome === "error" && e.logger.warn(`${p} Backfill: failed to write ${b.effectiveId}:`, b.error)
    })), e.logger.info(`${p} Backfill: wrote ${g}/${c.length} plugin enable(s)`), g
}

function re(u) {
    return `${u.installedBy??""}|${u.updatedAt??""}|${u.installationPreference??""}|${u.displayName??""}`
}
class De {
    constructor() {
        this.syncPromise = null, this.syncTiming = null, this.runningSync = null, this.manifestLock = new e.Mutex, this.pendingInstallDirs = new Map, this.backfillPromise = null, this._syncInterval = null, this.cachedOrgId = null, this.cachedAccountId = null, this.enabledStateMigrationGen = 0, this.stubRedownloadAttempted = new Set, this.accountEpoch = 0
    }
    acquirePendingDirs(t) {
        for (const n of t) this.pendingInstallDirs.set(n, (this.pendingInstallDirs.get(n) ?? 0) + 1)
    }
    releasePendingDirs(t) {
        for (const n of t) {
            const a = this.pendingInstallDirs.get(n);
            a !== void 0 && (a <= 1 ? this.pendingInstallDirs.delete(n) : this.pendingInstallDirs.set(n, a - 1))
        }
    }
    getEnabledStateMigrationGen() {
        return this.enabledStateMigrationGen
    }
    getResolvedDir() {
        const t = this.cachedOrgId,
            n = this.cachedAccountId;
        return !t || !n ? null : {
            orgId: t,
            accountId: n,
            dir: e.getRemoteCoworkPluginsDir(n, t)
        }
    }
    async getPluginsPath() {
        const t = this.getResolvedDir();
        if (!t) return e.logger.warn(`${p} getPluginsPath called before syncPlugins completed`), null;
        const {
            dir: n
        } = t, a = await this.readManifest(n);
        if (!a || a.plugins.length === 0) return null;
        let r = !1;
        for (const l of a.plugins) {
            const s = this.getPluginDir(n, l.id);
            try {
                await I.access(s), r = !0;
                break
            } catch {}
        }
        return r ? n : null
    }
    async getPluginSkillsForSystemPrompt(t, n, a) {
        const r = this.getResolvedDir();
        if (!r) return [];
        const {
            dir: l
        } = r, s = await this.readManifest(l);
        return !s || s.plugins.length === 0 ? [] : (await ie.addAll(s.plugins.map(c => async () => {
            if (fe(c, n)) return [];
            const f = this.getPluginDir(l, c.id);
            try {
                await I.access(f)
            } catch {
                return []
            }
            const g = a ? f : `/sessions/${t}/mnt/${_e}/${c.id}`;
            return e.scanPluginForSkills(f, c.name, g, p)
        }))).flat()
    }
    async collectPluginPaths(t, n, a) {
        const r = this.getResolvedDir();
        if (!r) return a && (a.manifestPluginCount = 0), [];
        const {
            dir: l
        } = r, s = await this.readManifest(l);
        return a && (a.manifestPluginCount = (s == null ? void 0 : s.plugins.length) ?? 0), !s || s.plugins.length === 0 ? [] : (await ie.addAll(s.plugins.map(c => async () => {
            if (fe(c, n)) return null;
            const f = this.getPluginDir(l, c.id);
            try {
                return await I.access(f), {
                    name: c.name,
                    id: c.id,
                    installPath: f,
                    sdkPath: t(c.id, f),
                    source: "remote",
                    marketplaceName: c.marketplaceName
                }
            } catch {
                return null
            }
        }))).filter(c => c !== null)
    }
    async getPluginPaths(t, n, a) {
        return this.collectPluginPaths(r => `/sessions/${t}/mnt/${_e}/${r}`, n, a)
    }
    async getHostPluginPaths(t) {
        return this.collectPluginPaths((n, a) => a, t)
    }
    async getOrgMarketplaceNames() {
        return this.cachedOrgId ? e.fetchOrgMarketplaceNames(this.cachedOrgId) : null
    }
    async getAllMcpServersFromPlugin(t) {
        const n = this.getResolvedDir();
        if (!n) return [];
        const {
            dir: a
        } = n, r = this.getPluginDir(a, t);
        try {
            await I.access(r)
        } catch {
            return []
        }
        return e.scanPluginForMcpServers(r, t, p)
    }
    async getInstalledPluginIdsAndKeys() {
        var a;
        let t = ((a = this.getResolvedDir()) == null ? void 0 : a.dir) ?? null;
        if (!t) {
            const r = await e.getLastActiveOrg() ?? null,
                l = e.getAccountId();
            r && l && (t = e.getRemoteCoworkPluginsDir(l, r))
        }
        if (!t) return {
            ids: new Set,
            keys: new Set
        };
        const n = await this.readManifest(t);
        return n ? {
            ids: new Set(n.plugins.map(r => r.id)),
            keys: new Set(n.plugins.map(r => e.pluginKey(r)))
        } : {
            ids: new Set,
            keys: new Set
        }
    }
    async fetchEnabledState(t) {
        const n = this.getResolvedDir();
        if (!n) return {
            state: {},
            source: "empty-manifest"
        };
        const a = await this.readManifest(n.dir);
        if (!a || a.plugins.length === 0) return {
            state: {},
            source: "empty-manifest"
        };
        try {
            if (e.isFeatureEnabled("4274871493")) {
                const c = (t == null ? void 0 : t.orgId) === n.orgId && t.migrationGen === this.enabledStateMigrationGen ? await t.overrides : void 0;
                if (c === null) return {
                    state: {},
                    source: "prefetch-error"
                };
                const f = c ?? await D.fetchPluginEnabledState(n.orgId);
                return {
                    state: we(a.plugins, f).byPluginId,
                    source: c !== void 0 ? "prefetch" : "fresh"
                }
            }
            const r = new Set(a.plugins.map(c => c.id)),
                l = {};
            let s = 0;
            const i = 100;
            for (;;) {
                const {
                    plugins: c,
                    hasMore: f
                } = await D.fetchBrowsableRemotePlugins({
                    limit: i,
                    offset: s,
                    compact: !0
                });
                for (const g of c) r.has(g.id) && g.enabled !== null && g.enabled !== void 0 && (l[g.id] = g.enabled);
                if (!f || c.length === 0) break;
                s += i
            }
            if (e.isFeatureEnabled("720735283"))
                for (const c of await D.fetchAccountScopedRemotePlugins({
                        compact: !0
                    })) r.has(c.id) && c.enabled !== null && c.enabled !== void 0 && (l[c.id] = c.enabled);
            return {
                state: l,
                source: "fresh"
            }
        } catch (r) {
            return e.logger.warn(`${p} Failed to fetch enabled state; defaulting to all-enabled`, r), {
                state: {},
                source: "fresh-error"
            }
        }
    }
    async installSinglePlugin(t, n) {
        await this.waitForSync();
        let a = this.getResolvedDir();
        if (!a) {
            const g = await e.getLastActiveOrg() ?? null,
                h = e.getAccountId();
            if (g === null || h === null) throw new Error("Cannot install plugin: no org or account available");
            const b = await e.getLastActiveOrg(),
                w = e.getAccountId();
            if (b != null && b !== g || w !== null && w !== h) throw new Error("Cannot install plugin: account switched during install");
            if (this.cachedOrgId = g, this.cachedAccountId = h, a = this.getResolvedDir(), !a) throw new Error("Cannot install plugin: no org or account available")
        }
        const r = a.accountId,
            l = a.orgId,
            {
                dir: s
            } = a;
        await e.mkdirPrivate(s);
        const i = await this.readManifest(s),
            c = (i == null ? void 0 : i.plugins.some(g => g.id === t.id)) ?? !1,
            f = this.getPluginDir(s, t.id);
        this.acquirePendingDirs([t.id]);
        try {
            if (await D.fetchAndExtractPluginWithRetry(t.id, f), await e.ensurePluginManifest(f, {
                    name: t.name,
                    displayName: t.displayName
                }), n != null && n.checkCliConflicts && !c) {
                const b = await e.readPluginManifestAsync(f),
                    w = b ? e.getRawManifestCliNames(b) : [],
                    y = await e.findCliConflict(w, await e.listRemotePluginCandidates(s), {
                        pluginName: t.name,
                        marketplaceName: t.marketplaceName
                    });
                if (y) throw (this.pendingInstallDirs.get(t.id) ?? 0) <= 1 && await I.rm(f, {
                    recursive: !0,
                    force: !0,
                    ...e.RM_RETRY_OPTS
                }).catch(() => {}), new e.PluginCliConflictError(y.cliName, y.owningPluginName)
            }
            await e.ensurePluginCliStubs(f, "remote", t.id), await Ie(f, "remote", t.id, {
                orgId: l
            }), e.logger.info(`${p} Installed plugin: ${t.name}`);
            const g = e.getAccountId(),
                h = await e.getLastActiveOrg();
            if (g !== null && g !== r || h != null && h !== l) throw new Error("Cannot install plugin: account switched during install");
            await this.withManifestLock(async () => {
                const b = await this.readManifest(s);
                let w;
                if (b) w = b.plugins;
                else {
                    if (await this.manifestFileExists(s)) throw new Error(`${p} manifest unreadable; aborting install of ${t.id} to avoid dropping other plugins`);
                    w = []
                }
                try {
                    await I.access(f)
                } catch {
                    throw new Error(`${p} plugin dir for ${t.id} removed during install (concurrent uninstall?); aborting manifest write`)
                }
                const y = e.pluginKey(t),
                    o = w.filter(P => P.id !== t.id && e.pluginKey(P) !== y),
                    m = {
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
                })
            })
        } finally {
            this.releasePendingDirs([t.id])
        }
    }
    async getInstalledPluginsWithPaths() {
        const t = this.getResolvedDir();
        if (!t) return [];
        const {
            dir: n
        } = t, a = await this.readManifest(n);
        return !a || a.plugins.length === 0 ? [] : (await ie.addAll(a.plugins.map(l => async () => {
            const s = this.getPluginDir(n, l.id);
            try {
                return await I.access(s), {
                    ...l,
                    installPath: s
                }
            } catch {
                return null
            }
        }))).filter(l => l !== null)
    }
    async uninstallById(t) {
        await this.waitForSync();
        let n = this.getResolvedDir();
        if (!n) {
            const o = await e.getLastActiveOrg() ?? null,
                m = e.getAccountId();
            if (o === null || m === null) return !1;
            const P = await e.getLastActiveOrg(),
                R = e.getAccountId();
            if (P != null && P !== o || R !== null && R !== m || (this.cachedOrgId = o, this.cachedAccountId = m, n = this.getResolvedDir(), !n)) return !1
        }
        const a = n.accountId,
            {
                orgId: r,
                dir: l
            } = n;
        let s = null,
            i = null,
            c, f, g = !1,
            h = !1;
        {
            const o = await this.readManifest(l);
            if (!o) return !1;
            const m = o.plugins.find(T => T.id === t),
                P = m ? void 0 : o.plugins.find(T => e.pluginKey(T) === t);
            if (m) s = m.marketplaceName ? e.pluginKey(m) : null;
            else if (P) s = t;
            else try {
                const L = (await D.fetchBrowsableRemotePlugins({
                    limit: 100,
                    offset: 0,
                    compact: !0,
                    orgId: r,
                    timeoutMs: ne
                })).plugins.find(B => B.id === t);
                L && (s = e.pluginKey(L), i = L.id, c = L.installationPreference, f = L.marketplaceId)
            } catch {}
            const R = m ?? P;
            if (R && me(R)) {
                const T = e.isFeatureEnabled("720735283"),
                    [L, B, j] = await Promise.all([i === null && R.marketplaceName ? D.fetchRemotePluginByName(R.name, R.marketplaceName, {
                        orgId: r,
                        forceInstall: !0,
                        timeoutMs: ne
                    }).catch(() => null) : Promise.resolve(null), e.listAccountMarketplaces({
                        orgId: r,
                        timeoutMs: ne
                    }).catch(() => null), i === null && !R.marketplaceName ? D.fetchBrowsableRemotePlugins({
                        limit: 100,
                        offset: 0,
                        compact: !0,
                        orgId: r,
                        timeoutMs: ne
                    }).catch(() => null) : Promise.resolve(null)]);
                if (L && !("notFound" in L)) i = L.id, c = L.installationPreference, f = L.marketplaceId;
                else if (j) {
                    const N = j.plugins.filter(x => x.name === R.name);
                    N.length === 1 && !j.hasMore && (i = N[0].id, c = N[0].installationPreference, f = N[0].marketplaceId)
                }
                B ? g = f != null ? B.some(N => N.id === f) : R.marketplaceName != null && B.some(N => N.name === R.marketplaceName) : T && (h = !0)
            }
        }
        const b = e.getAccountId(),
            w = await e.getLastActiveOrg();
        if (b !== null && b !== a || w != null && w !== r) return !1;
        const y = await this.withManifestLock(async () => {
            const o = await this.readManifest(l);
            if (!o) return null;
            const m = o.plugins.find(P => P.id === t) ?? (i ? o.plugins.find(P => P.id === i) : void 0) ?? (s ? o.plugins.find(P => e.pluginKey(P) === s) : void 0);
            return m ? (await this.removePlugins(l, [m]), await this.writeManifest(l, {
                ...o,
                plugins: o.plugins.filter(P => P.id !== m.id)
            }), m) : null
        });
        if (!y) return !1;
        if (c === "available" && !g && !h) {
            if (this.backfillPromise && await Promise.race([this.backfillPromise.catch(() => {}), new Promise(m => setTimeout(m, 5e3))]), e.getAccountId() !== a || await e.getLastActiveOrg() !== r) return e.logger.info(`${p} Skipping disable on uninstall of ${y.id}: live identity changed or unknown`), !0;
            const o = i ?? y.id;
            try {
                await D.setRemotePluginEnabled(r, o, !1, {
                    timeoutMs: ne
                }), e.logEvent("remote_plugin_enabled_put_outcome", {
                    caller: "uninstall",
                    outcome: "ok",
                    enabled: !1
                })
            } catch (m) {
                e.logEvent("remote_plugin_enabled_put_outcome", {
                    caller: "uninstall",
                    outcome: "error",
                    enabled: !1,
                    status: m.status
                }), e.logger.warn(`${p} Failed to disable ${o} on uninstall:`, m)
            }
        }
        return !0
    }
    async syncPlugins(t) {
        return this.syncPluginsTracked(t).result
    }
    syncPluginsTracked(t) {
        if (this.syncPromise) {
            e.logger.info(`${p} Sync already in progress, waiting...`);
            const f = this.syncTiming;
            return {
                result: this.syncPromise,
                joinedInflightSync: !0,
                syncStartedAt: (f == null ? void 0 : f.startedAt) ?? Date.now(),
                syncTotalMs: (f == null ? void 0 : f.totalMs) ?? Promise.resolve(void 0)
            }
        }
        const n = Date.now();
        let a = n;
        const r = this.runningSync;
        r && this.refreshIdentityCache();
        const l = r ? r.then(() => (e.logger.info(`${p} Orphaned sync finished — starting queued fresh sync`), a = Date.now(), this._syncPlugins((t == null ? void 0 : t.skipUserPluginCleanup) ?? !1))) : this._syncPlugins((t == null ? void 0 : t.skipUserPluginCleanup) ?? !1),
            s = l.then(() => Date.now() - a, () => {});
        this.syncPromise = l, this.syncTiming = {
            startedAt: n,
            totalMs: s
        };
        const i = l.then(() => {}, () => {});
        this.runningSync = i, i.then(() => {
            this.runningSync === i && (this.runningSync = null)
        });
        const c = () => {
            this.syncPromise === l && (this.syncPromise = null, this.syncTiming = null)
        };
        return l.then(c, c), {
            result: l,
            joinedInflightSync: !1,
            syncStartedAt: n,
            syncTotalMs: s
        }
    }
    async refreshIdentityCache() {
        try {
            const t = await e.waitForAccountDetails(5e3);
            if (!t || t.isLoggedOut) return;
            const n = await e.getLastActiveOrg(),
                a = e.getAccountId();
            if (!n || !a || (await e.sleep(0), await e.getLastActiveOrg() !== n) || e.getAccountId() !== a) return;
            this.cachedOrgId = n, this.cachedAccountId = a
        } catch {}
    }
    resetForAccountSwitch() {
        this.syncPromise = null, this.syncTiming = null, this.cachedOrgId = null, this.cachedAccountId = null, this.stubRedownloadAttempted.clear(), this.accountEpoch++, this.runningSync && this.refreshIdentityCache()
    }
    async waitForSync() {
        this.syncPromise && await this.syncPromise.catch(() => {})
    }
    startPeriodicSync() {
        if (this._syncInterval) return;
        const t = e.getParsedFeatureValueForKey("1978029737", "pluginsSyncIntervalMs", qe, e.numberType().int().positive());
        e.logger.info(`${p} Starting periodic sync (interval: ${t}ms)`);
        const n = a => {
            e.isFeatureEnabled("2340532315") && this.syncPlugins(a).catch(r => {
                e.logger.warn(`${p} Periodic sync failed:`, r)
            })
        };
        this._syncInterval = setInterval(() => n({
            skipUserPluginCleanup: !0
        }), t), n()
    }
    stopPeriodicSync() {
        this._syncInterval && (clearInterval(this._syncInterval), this._syncInterval = null)
    }
    async withManifestLock(t) {
        return this.manifestLock.runExclusive(t)
    }
    async _syncPlugins(t) {
        var w;
        const n = this.accountEpoch;
        e.logger.info(`${p} Starting remote plugins sync${t?" (quick — skipping user-plugin cleanup)":""}`);
        let a = !1;
        const r = await e.getLastActiveOrg();
        await e.getLastActiveOrg() === r && (this.cachedOrgId = r ?? null);
        const l = await e.waitForAccountDetails(5e3);
        if (!l || l.isLoggedOut) return e.logger.info(`${p} Skipping sync: session not confirmed after 5s wait`), {
            downloaded: 0,
            removed: 0,
            newlyInstalled: []
        };
        const s = e.getAccountId();
        if (e.getAccountId() === s && (this.cachedAccountId = s), !r || !s) return e.logger.warn(`${p} Cannot sync: no org or account`), {
            downloaded: 0,
            removed: 0,
            newlyInstalled: []
        };
        const i = e.getRemoteCoworkPluginsDir(s, r),
            c = e.getLegacyRemoteCoworkPluginsDir(s, r);
        let f = null,
            g = !1;
        try {
            await I.access(c);
            try {
                await e.renameDirWithRetry(c, i), e.logger.info(`${p} Migrated legacy remote plugins dir`)
            } catch (y) {
                e.logger.warn(`${p} Legacy dir rename failed; falling back to manifest merge:`, y), f = await this.readManifest(c)
            }
        } catch {}
        await e.mkdirPrivate(i);
        try {
            const y = await Xe(s, r, i);
            a = y > 0, y > 0 && this.enabledStateMigrationGen++
        } catch (y) {
            e.logger.warn(`${p} Migration failed (will retry):`, y)
        }
        let h = !1;
        const b = [];
        try {
            const y = await D.fetchAutoInstalledPlugins(r);
            let o = await this.readManifest(i);
            const m = new Set(((o == null ? void 0 : o.plugins) ?? []).map(d => d.id)),
                P = new Map(((o == null ? void 0 : o.plugins) ?? []).map(d => [d.id, re(d)])),
                R = new Set(((o == null ? void 0 : o.plugins) ?? []).map(d => e.pluginKey(d)));
            if (f) {
                const d = new Set((o == null ? void 0 : o.plugins.map(M => M.id)) ?? []),
                    v = new Set((o == null ? void 0 : o.plugins.map(M => e.pluginKey(M))) ?? []),
                    $ = f.plugins.filter(M => !d.has(M.id) && !v.has(e.pluginKey(M))),
                    F = [];
                for (const M of $) {
                    const G = this.getPluginDir(c, M.id),
                        V = this.getPluginDir(i, M.id);
                    this.acquirePendingDirs([M.id]);
                    try {
                        await I.cp(G, V, {
                            recursive: !0
                        }), F.push(M), b.push(M.id)
                    } catch (z) {
                        this.releasePendingDirs([M.id]), e.logger.warn(`${p} Failed to copy legacy plugin ${M.id}; skipping:`, z)
                    }
                }
                o = {
                    lastUpdated: (o == null ? void 0 : o.lastUpdated) ?? f.lastUpdated,
                    plugins: [...(o == null ? void 0 : o.plugins) ?? [], ...F]
                }, g = F.length === $.length, e.logger.info(`${p} Merged ${F.length}/${$.length} plugin(s) from legacy manifest`)
            }
            const {
                toDownload: T,
                toRemove: L,
                stubTriggeredIds: B,
                nonLoadableProbeIds: j
            } = await this.calculateDelta(i, y, (o == null ? void 0 : o.plugins) ?? [], r, n), N = (o == null ? void 0 : o.plugins) ?? [], x = new Map(N.map(d => [e.pluginKey(d), d])), H = [], Y = new Map;
            for (const d of T) {
                const v = e.pluginKey(d),
                    $ = x.get(v);
                $ && $.id !== d.id && (e.logger.info(`${p} Plugin "${d.name}" ID changed: ${$.id} → ${d.id}`), H.push($), $.installedBy && Y.set(d.id, $.installedBy))
            }
            const A = new Map(N.map(d => [d.id, d]));
            for (const d of B) {
                const v = (w = A.get(d)) == null ? void 0 : w.installedBy;
                v && Y.set(d, v)
            }
            const Z = new Set(H.map(d => d.id)),
                U = L.filter(d => d.installedBy !== "user" && !Z.has(d.id));
            e.logger.info(`${p} Delta: ${T.length} to download, ${U.length} to remove`);
            let X = 0;
            const ee = [];
            if (T.length > 0) {
                const d = await this.downloadPlugins(i, T);
                b.push(...d.states.map(v => v.id)), X = d.count;
                for (const v of d.states) {
                    const $ = Y.get(v.id);
                    $ && (v.installedBy = $)
                }
                ee.push(...d.states)
            }
            const se = ee.filter(d => !(x.has(e.pluginKey(d)) || d.marketplaceName && x.has(`${d.name}@`))).map(d => ({
                    id: e.pluginKey(d),
                    installationPreference: d.installationPreference
                })),
                te = new Set(ee.map(d => d.id));
            if (n === this.accountEpoch)
                for (const d of B) te.has(d) && this.stubRedownloadAttempted.add(d);
            const Oe = H.filter(d => {
                    var $;
                    const v = ($ = T.find(F => e.pluginKey(F) === e.pluginKey(d))) == null ? void 0 : $.id;
                    return v != null && te.has(v)
                }),
                le = [...U, ...Oe],
                oe = ((o == null ? void 0 : o.plugins) ?? []).filter(d => !le.some(v => v.id === d.id) && !te.has(d.id)),
                Te = new Map(y.map(d => [d.id, d])),
                Fe = new Set([...B, ...j]);
            await Promise.all(oe.filter(d => !Fe.has(d.id)).map(async d => {
                const v = this.getPluginDir(i, d.id);
                await e.ensurePluginManifest(v, {
                    name: d.name
                }), await e.ensurePluginCliStubs(v, "remote", d.id)
            }));
            for (const d of oe) {
                const v = Te.get(d.id);
                v && (!d.marketplaceName && v.marketplaceName && (d.marketplaceName = v.marketplaceName), !d.marketplaceId && v.marketplaceId && (d.marketplaceId = v.marketplaceId), d.installationPreference = v.installationPreference)
            }
            let W = [...oe, ...ee];
            const J = W.filter(d => d.installedBy === "user");
            if (t && J.length > 0) e.logger.info(`${p} Skipping user-plugin cleanup (quick sync) — ${J.length} user-installed plugin(s) carried forward as-is`);
            else if (J.length > 0 && await e.getLastActiveOrg() !== r) e.logger.info(`${p} Org changed mid-sync, skipping NOT_AVAILABLE cleanup to avoid cross-org deletion`);
            else if (J.length > 0) try {
                const d = [];
                let v = 0;
                const $ = 100;
                for (;;) {
                    const {
                        plugins: k,
                        hasMore: E
                    } = await D.fetchBrowsableRemotePlugins({
                        limit: $,
                        offset: v,
                        compact: !0
                    });
                    if (d.push(...k), !E || k.length === 0) break;
                    v += $
                }
                e.isFeatureEnabled("720735283") && d.push(...await D.fetchAccountScopedRemotePlugins({
                    compact: !0
                }));
                const F = new Map(d.map(k => [k.id, k])),
                    M = new Map(d.map(k => [e.pluginKey(k), k]));
                for (const k of J) {
                    let E = F.get(k.id);
                    if (!E && !k.marketplaceName) {
                        const _ = d.filter(Q => Q.name === k.name);
                        _.length === 1 && (E = _[0])
                    }
                    E && (!k.marketplaceName && E.marketplaceName && (k.marketplaceName = E.marketplaceName), !k.marketplaceId && E.marketplaceId && (k.marketplaceId = E.marketplaceId), k.installationPreference = E.installationPreference)
                }
                const G = [];
                for (const k of J) {
                    const E = F.get(k.id) ?? M.get(e.pluginKey(k));
                    E && (E.id !== k.id || E.updatedAt !== k.updatedAt) && G.push({
                        old: k,
                        fresh: E
                    })
                }
                if (G.length > 0) {
                    const {
                        states: k
                    } = await this.downloadPlugins(i, G.map(O => O.fresh));
                    b.push(...k.map(O => O.id));
                    const E = new Set(k.map(O => O.id)),
                        _ = G.filter(O => E.has(O.fresh.id));
                    for (const O of k) O.installedBy = "user";
                    const Q = new Set(_.map(O => O.old.id));
                    W = W.filter(O => !Q.has(O.id) && !E.has(O.id)), W.push(...k), X += k.length, e.logger.info(`${p} Refreshed ${k.length} stale user-installed plugin(s)`)
                }
                let V;
                if (e.isFeatureEnabled("720735283")) {
                    const k = await e.listAccountMarketplaces();
                    V = new Set(k.map(E => E.name))
                } else V = new Set;
                const z = J.filter(k => !F.has(k.id) && !M.has(e.pluginKey(k)) && !(k.marketplaceName && V.has(k.marketplaceName)));
                z.length > 0 && (e.logger.info(`${p} Removed ${z.length} user-installed plugins set to NOT_AVAILABLE`), W = W.filter(k => !z.some(E => E.id === k.id)))
            } catch (d) {
                e.logger.warn(`${p} Failed to refresh/prune user-installed plugins:`, d)
            }
            if (!t) try {
                const d = await this.downloadAccountEnabledPlugins(s, r, i, W);
                b.push(...d.map(v => v.id)), d.length > 0 && (W.push(...d), X += d.length, e.logger.info(`${p} Downloaded ${d.length} account-enabled plugin(s)`))
            } catch (d) {
                e.logger.warn(`${p} Failed to sync account-enabled plugins:`, d)
            }
            let pe = 0;
            if (await this.withManifestLock(async () => {
                    const d = await this.readManifest(i);
                    let v;
                    if (!d) v = W;
                    else {
                        const $ = d.plugins,
                            F = new Map($.map(_ => [_.id, _])),
                            M = new Map($.map(_ => [e.pluginKey(_), _])),
                            G = W.filter(_ => {
                                const Q = F.get(_.id);
                                if (Q) {
                                    const Pe = P.get(_.id);
                                    return Pe === void 0 || re(Q) === Pe
                                }
                                const O = M.get(e.pluginKey(_));
                                if (O) return m.has(O.id);
                                const ye = M.get(`${_.name}@`);
                                return ye ? m.has(ye.id) : !m.has(_.id) && !R.has(e.pluginKey(_)) && !R.has(`${_.name}@`)
                            }),
                            V = new Set(G.map(_ => e.pluginKey(_))),
                            z = new Set(G.map(_ => _.id)),
                            k = new Set(W.map(_ => _.id)),
                            E = $.filter(_ => V.has(e.pluginKey(_)) || z.has(_.id) ? !1 : m.has(_.id) && !k.has(_.id) ? P.get(_.id) !== re(_) : !0);
                        v = [...G, ...E]
                    }
                    await this.writeManifest(i, {
                        lastUpdated: Date.now(),
                        plugins: v
                    }), pe = await this.cleanupOrphanDirs(i, v)
                }), e.logger.info(`${p} Sync complete: ${X} downloaded, ${le.length} removed, ${pe} orphans cleaned`), h = !0, !t && !a && e.isFeatureEnabled("3633961296")) {
                const d = Ne(s, r, i),
                    v = this.backfillPromise,
                    $ = v ? Promise.allSettled([v, d]).then(() => {}) : d.then(() => {}, () => {});
                this.backfillPromise = $, $.then(() => {
                    this.backfillPromise === $ && (this.backfillPromise = null)
                }), d.then(F => {
                    F > 0 && this.enabledStateMigrationGen++
                }).catch(F => e.logger.warn(`${p} Backfill failed:`, F))
            }
            return g && I.rm(c, {
                recursive: !0,
                force: !0,
                ...e.RM_RETRY_OPTS
            }).catch(d => {
                e.logger.debug(`${p} Legacy dir cleanup skipped:`, d)
            }), {
                downloaded: X,
                removed: le.length,
                newlyInstalled: se
            }
        } catch (y) {
            throw e.logger.error(`${p} Sync failed:`, y), y
        } finally {
            if (this.releasePendingDirs(b), !h) try {
                await this.withManifestLock(async () => {
                    const y = await this.readManifest(i);
                    y && await this.cleanupOrphanDirs(i, y.plugins)
                })
            } catch {}
        }
    }
    async isRedownloadableStub(t, n, a, r) {
        let l;
        try {
            let i, c;
            const f = await e.isRealpathWithin(e.getManifestPath(t), t);
            if (!f) return !1;
            try {
                const g = await e.readPluginFileNoFollowCapped(f, 262144);
                if (g.content === void 0) return !1;
                c = g.content
            } catch {
                return !1
            }
            try {
                i = JSON.parse(c)
            } catch {
                i = null
            }
            l = await e.installYieldsNoComponents(t, i)
        } catch {
            return !1
        }
        if (!l) return !1;
        const s = r !== this.accountEpoch || this.stubRedownloadAttempted.has(n.id);
        return s || e.logger.info(`${p} Re-downloading ${n.id}: install is effectively empty (stub or unparseable manifest, nothing at the default component paths)`), r === this.accountEpoch && e.logCoworkEvent("marketplace_plugin_stub_manifest_detected", {
            plugin_uid: e.analyticsNameHash(`${a}:${n.id}`),
            plugin_updated_at: n.updatedAt ?? "",
            action: s ? "suppressed_session_guard" : "re_download"
        }), !s
    }
    async calculateDelta(t, n, a, r, l) {
        const s = new Map(a.map(w => [w.id, w])),
            i = new Map(n.map(w => [w.id, w])),
            c = [],
            f = [],
            g = [],
            h = [],
            b = e.getFeatureValue("552157343", !0);
        await ie.addAll([...i.values()].map(w => async () => {
            const y = s.get(w.id),
                o = this.getPluginDir(t, w.id);
            if (!y || y.updatedAt !== w.updatedAt) {
                c.push(w);
                return
            }
            let m = !1;
            if (!b) {
                try {
                    await I.access(o), m = !0
                } catch {
                    m = !1
                }
                m || c.push(w);
                return
            }
            try {
                const P = await e.probePluginManifestState(o);
                P === "loadable" ? await this.isRedownloadableStub(o, w, r, l) ? g.push(w.id) : m = !0 : P === "missing" ? (h.push(w.id), l === this.accountEpoch && !this.stubRedownloadAttempted.has(w.id) ? (e.logger.info(`${p} ${w.id}: plugin.json missing or unreachable — re-downloading`), g.push(w.id)) : m = !0) : (h.push(w.id), m = !0)
            } catch {
                m = !1
            }
            m || c.push(w)
        }));
        for (const w of a) i.has(w.id) || f.push(w);
        return {
            toDownload: c,
            toRemove: f,
            stubTriggeredIds: g,
            nonLoadableProbeIds: h
        }
    }
    async downloadPlugins(t, n, a) {
        let r = 0,
            l = 0;
        const s = [];
        for (let i = 0; i < n.length; i += $e) {
            const c = n.slice(i, i + $e);
            this.acquirePendingDirs(c.map(g => g.id));
            const f = await Promise.allSettled(c.map(async g => {
                const h = performance.now();
                try {
                    const b = await this.downloadOnePlugin(t, g);
                    return this.logTriggeredInstall(a == null ? void 0 : a.telemetryTrigger, g, h), b
                } catch (b) {
                    throw this.logTriggeredInstall(a == null ? void 0 : a.telemetryTrigger, g, h, b), b
                }
            }));
            for (let g = 0; g < f.length; g++) {
                const h = f[g];
                if (h.status === "fulfilled") r++, s.push(h.value);
                else {
                    l++;
                    const b = c[g];
                    this.releasePendingDirs([b.id]), e.logger.error(`${p} Failed to download ${b.name}:`, h.reason)
                }
            }
        }
        return {
            count: r,
            states: s,
            failed: l
        }
    }
    async downloadOnePlugin(t, n) {
        const a = this.getPluginDir(t, n.id),
            r = () => D.fetchRemotePluginById(n.id).catch(() => null),
            l = async () => {
                const c = await r();
                return c || (await e.sleep(1e3), r())
            }, [, s] = await Promise.all([D.fetchAndExtractPluginWithRetry(n.id, a), l()]), i = s && !("notFound" in s) ? s : null;
        return await e.ensurePluginManifest(a, {
            name: n.name
        }, {
            fetchDetail: async () => i ? {
                displayName: i.displayName ?? void 0,
                description: i.description ?? void 0,
                author: i.author
            } : null
        }), await e.ensurePluginCliStubs(a, "remote", n.id), await Ie(a, "remote", n.id, {
            orgId: this.cachedOrgId ?? void 0
        }), e.logger.debug(`${p} Downloaded plugin: ${n.name}`), {
            id: n.id,
            name: n.name,
            updatedAt: n.updatedAt,
            displayName: (i == null ? void 0 : i.displayName) ?? void 0,
            marketplaceId: n.marketplaceId,
            marketplaceName: n.marketplaceName,
            installedBy: "auto",
            installationPreference: n.installationPreference
        }
    }
    logTriggeredInstall(t, n, a, r) {
        t && e.logEvent("marketplace_plugin_op_result", {
            operation: "install_plugin",
            implementation: "cowork_remote_api",
            status: r === void 0 ? "success" : "error",
            duration_ms: Math.round(performance.now() - a),
            trigger: t,
            plugin_uuid: n.id,
            marketplace_uuid: n.marketplaceId,
            ...r === void 0 ? {} : {
                error_code: e.deriveErrorCode(r)
            }
        })
    }
    async downloadAccountEnabledPlugins(t, n, a, r) {
        const l = performance.now(),
            s = {
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
            return e.logEvent("marketplace_plugin_account_sync_result", {
                status: c ? "bailed" : "success",
                ...s,
                duration_ms: Math.round(performance.now() - l)
            }), i
        } catch (i) {
            throw e.logEvent("marketplace_plugin_account_sync_result", {
                status: "error",
                ...s,
                duration_ms: Math.round(performance.now() - l),
                error_code: e.deriveErrorCode(i)
            }), i
        }
    }
    async downloadAccountEnabledPluginsInner(t, n, a, r, l) {
        const s = new Set,
            i = (await D.fetchAccountEnabledPlugins(n)).filter(o => s.has(o.id) ? !1 : (s.add(o.id), !0));
        l.account_enabled_count = i.length;
        const c = new Set(r.map(o => o.id)),
            f = new Set(r.map(o => e.pluginKey(o))),
            g = i.filter(o => o.installationPreference === "available" && !c.has(o.id) && !f.has(e.pluginKey(o)) && !(o.marketplaceName && f.has(`${o.name}@`)));
        if (l.candidates_checked = g.length, g.length === 0) return {
            states: [],
            bailed: !1
        };
        let h = g;
        if (e.isFeatureEnabled("4274871493")) try {
            const o = (await D.fetchPluginEnabledState(n)).filter(m => !m.enabled);
            o.length > 0 && (h = g.filter(m => !o.some(P => P.pluginName === m.name && (P.marketplaceId != null && m.marketplaceId != null ? P.marketplaceId === m.marketplaceId : P.marketplaceName != null && P.marketplaceName === m.marketplaceName))))
        } catch {}
        l.skipped_disabled = g.length - h.length;
        const b = h.length;
        if (h = h.slice(0, He), l.skipped_by_cap = b - h.length, h.length === 0) return {
            states: [],
            bailed: !1
        };
        if (e.getAccountId() !== t || await e.getLastActiveOrg() !== n) return e.logger.info(`${p} Identity changed mid-sync, skipping account-enabled plugin materialization to avoid cross-account write`), {
            states: [],
            bailed: !0
        };
        const {
            states: w,
            failed: y
        } = await this.downloadPlugins(a, h, {
            telemetryTrigger: "account_sync"
        });
        l.installed = w.length, l.failed = y;
        for (const o of w) o.installedBy = "user";
        if (w.length > 0) try {
            await this.clearLegacyEnabledPreferences(t, n, w)
        } catch (o) {
            throw this.releasePendingDirs(w.map(m => m.id)), o
        }
        return {
            states: w,
            bailed: !1
        }
    }
    async clearLegacyEnabledPreferences(t, n, a) {
        const r = new Set;
        for (const s of a) s.marketplaceName && r.add(e.pluginKey(s)), r.add(s.id);
        const l = e.getCoworkSettingsFile(t, n);
        try {
            await e.withCoworkMutex(async () => {
                const s = await e.readSettingsFileResult(l);
                if (s.status !== "ok") return;
                const c = {
                    ...s.settings.enabledPlugins ?? {}
                };
                let f = !1;
                for (const g of r) Object.hasOwn(c, g) && (delete c[g], f = !0);
                f && await e.writeJsonAtomic(l, {
                    ...s.settings,
                    enabledPlugins: c
                })
            })
        } catch (s) {
            e.logger.warn(`${p} Failed to clear legacy enabled preferences on materialize:`, s)
        }
    }
    async removePlugins(t, n) {
        for (const a of n) {
            const r = this.getPluginDir(t, a.id);
            try {
                await I.rm(r, {
                    recursive: !0,
                    force: !0,
                    ...e.RM_RETRY_OPTS
                }), e.logger.debug(`${p} Removed plugin: ${a.name}`)
            } catch {}
        }
    }
    async cleanupOrphanDirs(t, n) {
        const a = new Set([...n.map(r => r.id), ...this.pendingInstallDirs.keys()]);
        return e.cleanupOrphanDirectories(t, a, {
            logPrefix: p,
            skipFiles: [q, `${q}.tmp`]
        })
    }
    getPluginDir(t, n) {
        try {
            return e.safeJoin(t, n, {
                allowEqual: !1
            })
        } catch {
            throw new Error(`Invalid plugin ID: "${n}"`)
        }
    }
    async manifestFileExists(t) {
        try {
            return await I.access(C.join(t, q)), !0
        } catch {
            return !1
        }
    }
    async readManifest(t) {
        const n = C.join(t, q);
        try {
            const a = await e.readFileNoFifo(n, e.REMOTE_PLUGINS_LEDGER_MAX_BYTES);
            return JSON.parse(a)
        } catch (a) {
            return a instanceof Error && "code" in a && a.code === "ENOENT" || e.logger.warn(`${p} Failed to read manifest:`, a), null
        }
    }
    async writeManifest(t, n) {
        const a = C.join(t, q);
        await e.writeJsonAtomic(a, n)
    }
    async clearPluginsDir(t) {
        await I.rm(t, {
            recursive: !0,
            force: !0,
            ...e.RM_RETRY_OPTS
        }), e.logger.info(`${p} Cleared plugins directory: %s`, t)
    }
    async clearCache() {
        const t = await e.getLastActiveOrg();
        if (!t) return;
        const n = e.getAccountId();
        if (!n) return;
        const a = e.getRemoteCoworkPluginsDir(n, t);
        await this.clearPluginsDir(a)
    }
}

function fe(u, t) {
    if (u.installationPreference === "required") return !1;
    const {
        enabledPluginsMap: n
    } = t ?? {};
    return n ? !e.lookupPluginEnabled(u, n) : !1
}
const Je = {
        isPluginDisabled: fe,
        mapEnabledOverridesByPluginId: we,
        backfillImplicitlyEnabledPluginsToBackend: Ne,
        isStillBackfillable: Re,
        isUserAvailablePlugin: me,
        pluginStateFingerprint: re
    },
    he = new De;

function Ve() {
    e.onFeatureChange("2340532315", u => {
        if (!(u != null && u.on)) {
            he.stopPeriodicSync();
            return
        }
        e.waitForAccountId().then(t => {
            t && he.startPeriodicSync()
        }).catch(t => {
            e.logger.debug(`${p} prewarm sync failed: %o`, t)
        })
    })
}
exports.RemotePluginManager = De;
exports._test = Je;
exports.primePluginsSyncAtAppReady = Ve;
exports.remotePluginManager = he;
//# sourceMappingURL=index.chunk-CSQCh8Uk.js.map