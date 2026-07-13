"use strict";

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
    var o = new r.Error().stack;
    if (o) {
      r._sentryDebugIds = r._sentryDebugIds || {};
      r._sentryDebugIds[o] = "e9c0d211-1d63-4342-9a17-4b93197c8895";
      r._sentryDebugIdIdentifier = "sentry-dbid-e9c0d211-1d63-4342-9a17-4b93197c8895";
    }
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
const E = require("node:crypto");
const h = require("node:fs");
const c = require("node:fs/promises");
const u = require("node:path");
const b = require("node:stream");
const L = require("node:stream/promises");
const P = require("node:zlib");
const C = require("electron");
const e = require("./index.chunk-c42vKsva.js");
class B extends b.Transform {
  constructor() {
    super(...arguments);
    this.hash = E.createHash("sha256");
  }
  _transform(o, t, a) {
    this.hash.update(o);
    a(null, o);
  }
  getDigest() {
    return this.hash.digest("hex");
  }
}
const p = "warm";
function $() {
  if (process.arch === "x64") {
    return "x64";
  } else {
    return "arm64";
  }
}
function M() {
  const r = e.getVMBundlePlatform(process.platform);
  if (!r) {
    return [];
  }
  const o = $();
  return e.VM_BUNDLE_SPEC.files[r][o] ?? [];
}
function y(r) {
  return `${r.name}.zst`;
}
function V(r) {
  return u.resolve(e.getVMBundlesDir(), p, r);
}
function D(r, o) {
  return u.resolve(V(r), y(o));
}
function F(r) {
  const o = M();
  if (o.length === 0) {
    return false;
  } else {
    return o.every(t => h.existsSync(D(r, t)));
  }
}
async function N(r, o) {
  const t = o ? `${o}/${r}` : `https://downloads.claude.ai/releases/darwin/universal/${r}/vm_hash`;
  try {
    e.coworkVMLogger.info(`[warm] Fetching VM hash for version ${r}`);
    const a = await C.net.fetch(t);
    if (!a.ok) {
      e.coworkVMLogger.info(`[warm] VM hash not found for version ${r} (status: ${a.status})`);
      return null;
    }
    const n = (await a.text()).trim();
    if (!n || n.length !== 40) {
      e.coworkVMLogger.warn(`[warm] Invalid VM hash format: ${n}`);
      return null;
    } else {
      e.coworkVMLogger.info(`[warm] VM hash for version ${r}: ${n}`);
      return n;
    }
  } catch (a) {
    e.coworkVMLogger.error(`[warm] Failed to fetch VM hash: ${a}`);
    return null;
  }
}
async function S(r, o) {
  const t = V(r);
  const a = $();
  const n = M();
  e.coworkVMLogger.info(`[warm] Starting warm download for VM SHA: ${r} (${n.length} files, arch=${a})`);
  e.logCoworkEvent("lam_vm_warm_download_started", {
    bundle_version: r,
    app_version: o,
    file_count: n.length
  });
  const f = Date.now();
  let g = 0;
  try {
    await e.mkdirPrivate(t);
    for (const s of n) {
      const i = y(s);
      const d = u.resolve(t, i);
      const l = `${d}.partial`;
      await c.unlink(`${d}.tmp`).catch(() => {});
      if (h.existsSync(d)) {
        e.coworkVMLogger.info(`[warm] ${i} already exists, skipping`);
        continue;
      }
      const w = `https://downloads.claude.ai/vms/linux/${a}/${r}/${i}`;
      e.coworkVMLogger.info(`[warm] Downloading ${i}...`);
      let v = 0;
      try {
        v = (await e.downloadFile({
          url: w,
          tempFilePath: l,
          retries: 5,
          telemetryKey: "vm_warm"
        })).bytesDownloaded;
      } catch (_) {
        if ((_ == null ? undefined : _.code) === "ENOSPC") {
          await c.unlink(l).catch(() => {});
        }
        throw _;
      }
      await c.rename(l, d);
      g += v;
      e.coworkVMLogger.info(`[warm] ${i} downloaded`);
    }
    const m = Date.now() - f;
    e.coworkVMLogger.info(`[warm] Warm download completed in ${m}ms (${g} bytes total)`);
    e.logCoworkEvent("lam_vm_warm_download_completed", {
      bundle_version: r,
      duration_ms: m,
      download_size_bytes: g
    });
  } catch (m) {
    const s = Date.now() - f;
    const i = m instanceof Error ? m.message : String(m);
    e.coworkVMLogger.error(`[warm] Warm download failed: ${i}`);
    e.logCoworkEvent("lam_vm_warm_download_failed", {
      bundle_version: r,
      duration_ms: s,
      error_message: i
    });
    throw m;
  }
}
async function k(r = []) {
  const o = u.resolve(e.getVMBundlesDir(), p);
  if (h.existsSync(o)) {
    try {
      const t = h.readdirSync(o);
      for (const a of t) {
        if (r.includes(a) || a.endsWith(".tmp")) {
          continue;
        }
        const n = u.resolve(o, a);
        e.coworkVMLogger.info(`[warm] Cleaning up old warm entry: ${a}`);
        try {
          await c.rm(n, {
            recursive: true,
            force: true
          });
        } catch (f) {
          e.coworkVMLogger.warn(`[warm] Failed to delete old warm entry ${a}: ${f}`);
        }
      }
    } catch (t) {
      e.coworkVMLogger.warn(`[warm] Failed to clean up warm downloads: ${t}`);
    }
  }
}
const W = 5;
async function q(r, o) {
  try {
    const t = (await c.stat(o)).size;
    const a = await e.hasFreeDiskSpace(u.dirname(r), t * W);
    if (a === undefined || a.ok) {
      return a;
    } else {
      return {
        ...a,
        compressed: t
      };
    }
  } catch {
    return;
  }
}
async function x(r, o) {
  const t = D(e.VM_BUNDLE_SPEC.sha, o);
  await c.unlink(`${t}.partial`).catch(() => {});
  await c.unlink(`${t}.tmp`).catch(() => {});
  if (!h.existsSync(t)) {
    e.coworkVMLogger.info(`[warm] No warm file found for ${o.name} at current version`);
    return false;
  }
  const a = await q(r, t);
  if (a && !a.ok) {
    e.coworkVMLogger.warn(`[warm] Insufficient disk space for ${o.name}: need ~${Math.round(a.required / 1000000000)}GB, have ${Math.round(a.available / 1000000000)}GB`);
    e.logCoworkEvent("lam_vm_warm_promote_skipped_nospace", {
      bundle_version: e.VM_BUNDLE_SPEC.sha,
      file_name: o.name,
      compressed_size_bytes: a.compressed,
      available_disk_space_bytes: a.available,
      required_disk_space_bytes: a.required
    });
    const s = new Error(`Insufficient disk space for VM bundle promotion: need ~${Math.round(a.required / 1000000000)}GB, have ${Math.round(a.available / 1000000000)}GB`);
    s.code = "ENOSPC";
    throw s;
  }
  e.coworkVMLogger.info(`[warm] Promoting warm file ${o.name} from ${t}`);
  const n = Date.now();
  const f = u.resolve(r, o.name);
  const g = `${f}.tmp`;
  const m = u.resolve(r, `.${o.name}.origin`);
  try {
    await e.mkdirPrivate(r);
    const s = h.createReadStream(t);
    const i = new B();
    const d = e.createWriteStreamPrivate(g);
    await L.pipeline(s, i, P.createZstdDecompress(), d);
    const l = i.getDigest();
    if (l !== o.checksum) {
      e.coworkVMLogger.error(`[warm] Checksum mismatch for ${o.name}: expected ${o.checksum}, got ${l}`);
      e.logCoworkEvent("lam_vm_warm_promote_failed", {
        bundle_version: e.VM_BUNDLE_SPEC.sha,
        duration_ms: Date.now() - n,
        error_message: `Checksum mismatch for ${o.name}: expected ${o.checksum}, got ${l}`,
        failure_reason: "checksum_mismatch",
        file_name: o.name
      });
      await c.unlink(t);
      return false;
    }
    e.coworkVMLogger.info(`[warm] ${o.name} checksum validated`);
    await c.rename(g, f);
    await e.writeFilePrivate(m, e.VM_BUNDLE_SPEC.sha);
    const w = Date.now() - n;
    e.coworkVMLogger.info(`[warm] ${o.name} promotion completed in ${w}ms`);
    e.logCoworkEvent("lam_vm_warm_promote_completed", {
      bundle_version: e.VM_BUNDLE_SPEC.sha,
      duration_ms: w,
      file_name: o.name
    });
    await c.unlink(t).catch(() => {});
    return true;
  } catch (s) {
    const i = Date.now() - n;
    const d = s instanceof Error ? s.message : String(s);
    const l = (s == null ? undefined : s.code) === "ENOSPC";
    e.coworkVMLogger.error(`[warm] ${o.name} promotion failed: ${d}`);
    let w = "file_error";
    if (l) {
      w = "disk_full";
    } else if (d.includes("zstd") || d.includes("decompress")) {
      w = "decompress_error";
    }
    e.logCoworkEvent("lam_vm_warm_promote_failed", {
      bundle_version: e.VM_BUNDLE_SPEC.sha,
      duration_ms: i,
      error_message: d,
      failure_reason: w,
      file_name: o.name
    });
    if (w === "decompress_error") {
      e.coworkVMLogger.warn(`[warm] Deleting corrupt warm file for ${o.name}`);
      await c.unlink(t).catch(() => {});
    }
    if (l) {
      throw s;
    }
    return false;
  } finally {
    await c.unlink(g).catch(() => {});
  }
}
async function T(r, o, t) {
  if (!o) {
    e.coworkVMLogger.info("[warm] Warm download disabled (autoDownloadInBackground=false)");
    await k([e.VM_BUNDLE_SPEC.sha]);
    return;
  }
  const {
    yukonSilver: a
  } = e.getSupportedFeaturesSync();
  if (!a || a.status !== "supported") {
    await k([]);
    return;
  }
  if (!e.isVMBundlePresent()) {
    await k([e.VM_BUNDLE_SPEC.sha]);
    e.coworkVMLogger.info("[warm] No VM bundle present; swept stale warm dirs, skipping prefetch");
    return;
  }
  if (e.isVMDownloading()) {
    e.coworkVMLogger.info("[warm] Foreground VM download in flight; deferring prefetch");
    return;
  }
  try {
    const n = await N(r, t);
    if (!n) {
      e.coworkVMLogger.info(`[warm] No VM hash available for version ${r}`);
      return;
    }
    if (n === e.VM_BUNDLE_SPEC.sha) {
      e.coworkVMLogger.info("[warm] VM SHA matches current version, skipping");
      return;
    }
    if (F(n)) {
      e.coworkVMLogger.info(`[warm] All warm files already exist for SHA ${n}`);
      return;
    }
    await k([n, e.VM_BUNDLE_SPEC.sha]);
    await S(n, r);
  } catch (n) {
    e.coworkVMLogger.error(`[warm] Warm download failed (non-fatal): ${n}`);
  }
}
const I = {
  getWarmRequiredFiles: M
};
exports._test = I;
exports.maybeWarmDownloadForUpdate = T;
exports.promoteWarmBundle = x;
//# sourceMappingURL=index.chunk-CYj7Lijd.js.map