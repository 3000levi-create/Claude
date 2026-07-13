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
    var r = new e.Error().stack;
    if (r) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[r] = "a040e043-558c-4fbd-ac20-55a166ebf49c";
      e._sentryDebugIdIdentifier = "sentry-dbid-a040e043-558c-4fbd-ac20-55a166ebf49c";
    }
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
const y = require("node:fs");
const h = require("node:fs/promises");
const w = require("node:path");
const O = require("electron");
const o = require("./index.chunk-c42vKsva.js");
const B = require("./index.chunk-BQ42zIDL.js");
const z = require("./index.chunk-2eoqELgE.js");
const m = require("./index.chunk-DcrvRgQ0.js");
const M = require("./index.chunk-D4sIQt6U.js");
const X = require("./index.chunk-BLNdD7Yt.js");
function v(e) {
  return e.startsWith("cse_") || e.startsWith("session_");
}
const D = y.constants.O_NOFOLLOW ?? 0;
const N = y.constants.O_NONBLOCK ?? 0;
class l extends Error {
  constructor(r, t) {
    super(`[${t}] ${r}`);
    this.code = t;
    this.name = "LocalFileAccessError";
  }
}
function j(e) {
  if (!e.startsWith("/sessions/")) {
    return null;
  }
  const r = e.slice(10);
  const t = r.indexOf("/");
  const n = t === -1 ? r : r.slice(0, t);
  if (!n || n === ".." || n === ".") {
    return null;
  } else {
    return n;
  }
}
function V(e, r) {
  if (!e.startsWith("local_")) {
    o.logger.warn(`validateVMPathAccess: rejected non-local session ${e}`);
    throw new l(`Invalid session: ${e}`, "INVALID_SESSION");
  }
  const t = j(r);
  if (!t) {
    o.logger.warn(`validateVMPathAccess: invalid VM path format: ${r}`);
    throw new l(`Invalid VM path format: ${r}`, "INVALID_PATH");
  }
  const n = m.localAgentModeSessionManager.getVMProcessName(e);
  if (!n || n !== t) {
    o.logger.warn(`validateVMPathAccess: vmProcessName mismatch for ${r}`);
    throw new l(`Session mismatch for path: ${r}`, "INVALID_SESSION");
  }
  const a = w.posix.normalize(r);
  const s = `/sessions/${t}/`;
  if (!a.startsWith(s)) {
    o.logger.warn(`validateVMPathAccess: path traversal detected: ${r}`);
    throw new l(`Path traversal detected: ${r}`, "PATH_TRAVERSAL");
  }
  const i = o.blockedExtensionOf(a);
  if (o.BLOCKED_READ_EXTENSIONS.includes(i)) {
    o.logger.warn(`validateVMPathAccess: blocked binary file type ${i}: ${r}`);
    throw new l(`Blocked file type: ${i}`, "BLOCKED_EXTENSION");
  }
  return {
    vmProcessName: t,
    normalizedPath: a
  };
}
async function q(e, r) {
  if (!r) {
    return false;
  }
  let t;
  try {
    t = await h.realpath(w.join(r, ".claude"));
  } catch {
    return false;
  }
  const n = w.join(t, "projects");
  const a = w.relative(n, e);
  if (a === "" || a.startsWith("..") || w.isAbsolute(a)) {
    return false;
  }
  const s = a.split(w.sep);
  return s.length >= 3 && s[2] === "tool-results";
}
async function S(e, r, t) {
  const n = v(r) && (e === "readLocalFile" || e === "showFileInFolder");
  if (n) {
    await M.awaitSessionGrantsSettled(r);
  }
  if (!r.startsWith("local_") && !n) {
    o.logger.warn(`${e}: rejected non-local session ${r}`);
    throw new l(`Invalid session: ${r}`, "INVALID_SESSION");
  }
  if (!w.isAbsolute(t)) {
    o.logger.warn(`${e} called with non-absolute path: ${t}`);
    throw new l(`Path must be absolute: ${t}`, "INVALID_PATH");
  }
  if (o.isUnsafeUnc(t)) {
    o.logger.warn(`${e}: rejected UNC path: ${t}`);
    throw new l(`UNC paths are not allowed: ${t}`, "INVALID_PATH");
  }
  const a = n ? null : m.localAgentModeSessionManager.getSession(r);
  if (!a && !n) {
    o.logger.warn(`${e}: unknown local agent mode session ${r}`);
    throw new l(`Unknown session: ${r}`, "INVALID_SESSION");
  }
  if (e === "openLocalFile" || e === "writeLocalFile") {
    const d = o.validateFilenameForOpen(w.basename(t));
    if (d) {
      o.logger.warn(`${e}: ${d}: ${t}`);
      throw new l(d, "INVALID_PATH");
    }
  }
  if (e !== "showFileInFolder" && e !== "uploadLocalFile") {
    const d = o.blockedExtensionOf(t);
    const _ = o.BLOCKED_READ_EXTENSIONS.includes(d);
    const I = o.BLOCKED_EXECUTABLE_EXTENSIONS.includes(d);
    if (_ || (e === "openLocalFile" || e === "writeLocalFile") && I) {
      o.logger.warn(`${e}: blocked ${_ ? "binary" : "executable"} file type ${d}: ${t}`);
      throw new l(`Blocked file type: ${d}`, "BLOCKED_EXTENSION");
    }
  }
  try {
    await o.assertNoUncSymlinkHop(t);
  } catch (d) {
    o.logger.warn(`${e}: unsafe symlink chain: ${t}`, d);
    throw new l(`Unsafe symlink chain: ${t}`, "INVALID_PATH");
  }
  let s;
  let i = false;
  try {
    s = await h.realpath(t);
  } catch {
    if (e === "writeLocalFile") {
      if (await h.lstat(t).catch(() => null)) {
        o.logger.warn(`${e}: refusing to write through non-regular file: ${t}`);
        throw new l(`Refusing to write through non-regular file: ${t}`, "INVALID_PATH");
      }
      i = true;
      const _ = w.dirname(t);
      try {
        const I = await h.realpath(_);
        s = w.join(I, w.basename(t));
      } catch {
        o.logger.warn(`${e}: failed to resolve parent directory for ${t}`);
        throw new l(`Failed to resolve path: ${t}`, "INVALID_PATH");
      }
    } else {
      o.logger.warn(`${e}: failed to resolve file path for ${t}`);
      throw new l(`Failed to resolve path: ${t}`, "INVALID_PATH");
    }
  }
  if (e !== "showFileInFolder" && e !== "uploadLocalFile" && s !== t) {
    const d = o.blockedExtensionOf(s);
    const _ = o.BLOCKED_READ_EXTENSIONS.includes(d);
    const I = o.BLOCKED_EXECUTABLE_EXTENSIONS.includes(d);
    if (_ || (e === "openLocalFile" || e === "writeLocalFile") && I) {
      o.logger.warn(`${e}: blocked file type ${d} (resolved from ${t}): ${s}`);
      throw new l(`Blocked file type: ${d}`, "BLOCKED_EXTENSION");
    }
    if (e === "openLocalFile" || e === "writeLocalFile") {
      const T = o.validateFilenameForOpen(w.basename(s));
      if (T) {
        o.logger.warn(`${e}: ${T} (resolved from ${t}): ${s}`);
        throw new l(T, "INVALID_PATH");
      }
    }
  }
  if (e === "openLocalFile" && (await o.isOpenBlockedByExecBit(s))) {
    o.logger.warn(`${e}: blocked executable-mode file for open: ${s}`);
    throw new l(`Blocked executable-mode file: ${w.basename(s)}`, "BLOCKED_EXTENSION");
  }
  const c = a ? m.localAgentModeSessionManager.getSessionStorageDir(r) : null;
  let g;
  if (a) {
    try {
      g = m.localAgentModeSessionManager.getOutputsDir(r);
    } catch {}
  }
  const u = a ? m.localAgentModeSessionManager.getAutoMemoryDirForSession(r) : undefined;
  const F = n ? M.getSessionGrantedFolders(r) : [...((a == null ? undefined : a.userSelectedFolders) ?? []), ...(g ? [g] : []), ...(c ? [w.join(c, "uploads")] : []), ...(c ? [w.join(c, ".projects")] : []), ...(u ? [u] : []), ...(m.localAgentModeSessionManager.getReadOnlyPluginPaths(r) ?? [])];
  let E = false;
  if (c) {
    const d = await h.realpath(w.join(c, ".claude")).catch(() => null);
    const _ = d !== null ? w.join(d, "CLAUDE.md") : null;
    if (_ !== null && s === _) {
      const I = await h.lstat(_).catch(() => null);
      E = I === null || I.isFile();
    }
  }
  const A = (e === "readLocalFile" || e === "showFileInFolder") && (await q(s, c));
  const $ = i ? w.dirname(t) : t;
  const f = await o.isRealpathWithinAny($, F);
  if (f === false && !E && !A) {
    o.logger.warn(`${e}: path ${t} resolves outside allowed folders`);
    throw new l(`Path is outside allowed folders: ${t}`, "PATH_NOT_ALLOWED");
  }
  const p = i ? w.dirname(s) : s;
  if (f !== false && w.resolve(f) !== w.resolve(p)) {
    o.logger.warn(`${e}: path moved during validation: ${t}`);
    throw new l(`Path moved during validation: ${t}`, "PATH_NOT_ALLOWED");
  }
  return s;
}
const b = new Map();
async function R(e, r, t, n) {
  let a;
  if (t.startsWith("/sessions/")) {
    a = w.posix.normalize(t);
  } else {
    try {
      a = await h.realpath(t);
    } catch {
      throw new l(`Failed to resolve path: ${t}`, "INVALID_PATH");
    }
  }
  if (m.localAgentModeSessionManager.hasUserApprovedFileAccess(r, a) || n === "read" && (await m.localAgentModeSessionManager.hasUserApprovedParentDirectoryAccess(r, a))) {
    return;
  }
  if (n === "read" && v(r)) {
    const u = M.getSessionGrantedFolders(r);
    if (u.length > 0 && (await o.isRealpathWithinAny(a, u)) !== false) {
      return;
    }
  }
  const s = `${r}:${a}`;
  const i = b.get(s);
  if (i) {
    if (!(await i)) {
      throw new l(`User denied access to file: ${t}`, "USER_DENIED");
    }
    return;
  }
  const c = (async () => {
    try {
      const u = n === "read" ? "preview" : "open";
      if ((await O.dialog.showMessageBox(e, {
        type: "question",
        buttons: ["Cancel", "Allow"],
        defaultId: 0,
        cancelId: 0,
        title: "File Access Request",
        message: `Allow Claude to ${u} this file?`,
        detail: `${t}

This will allow Claude to ${u} the file${n === "open" ? " with your default application" : ""}.`
      })).response === 0) {
        o.logger.info(`checkFileAccessConsent: user declined to ${u} ${t}`);
        return false;
      } else {
        m.localAgentModeSessionManager.recordUserFileAccessApproval(r, a);
        return true;
      }
    } finally {
      b.delete(s);
    }
  })();
  b.set(s, c);
  if (!(await c)) {
    throw new l(`User denied access to file: ${t}`, "USER_DENIED");
  }
}
async function G(e, r, t, n) {
  const a = decodeURIComponent(t);
  const i = await S(n ? "showFileInFolder" : "openLocalFile", r, a);
  if (n) {
    O.shell.showItemInFolder(o.devirtualizeMsixPath(i));
  } else {
    await R(e, r, i, "open");
    if (!(await o.isPathSymlinkFree(i))) {
      o.logger.warn(`openLocalFileImpl: path replaced with symlink after validation: ${a}`);
      throw new l(`Path was replaced with a symlink after validation: ${a}`, "PATH_NOT_ALLOWED");
    }
    if (o.getAppPreference("louderPenguinEnabled")) {
      const g = w.extname(i).toLowerCase();
      if (B.isOfficeExtension(g)) {
        await B.sideloadForOpenFile(i);
      }
    }
    if (!(await o.isPathSymlinkFree(i))) {
      o.logger.warn(`openLocalFileImpl: path replaced with symlink after validation: ${a}`);
      throw new l(`Path was replaced with a symlink after validation: ${a}`, "PATH_NOT_ALLOWED");
    }
    if (await o.isOpenBlockedByExecBit(i)) {
      o.logger.warn(`openLocalFileImpl: path became executable after validation: ${a}`);
      throw new l(`Path became executable after validation: ${a}`, "PATH_NOT_ALLOWED");
    }
    const c = await O.shell.openPath(o.devirtualizeMsixPath(i));
    if (c) {
      o.logger.error(`Failed to open file: ${i} with error: ${c}`);
      throw new l(`Failed to open file: ${c}`, "FILE_OPEN_ERROR");
    }
  }
}
const C = 52428800;
async function K(e, r, t) {
  const n = await o.getVMAPI();
  if (!n) {
    o.logger.error("_readLocalVMFile: Swift VM addon not available");
    throw new l("Virtual environment is unavailable", "VM_UNAVAILABLE");
  }
  try {
    const a = await n.readFile(e, r);
    if (Buffer.byteLength(a, "base64") > C) {
      o.logger.warn(`_readLocalVMFile: file too large: ${t}`);
      throw new l(`File too large: ${t}`, "FILE_TOO_LARGE");
    }
    const s = Buffer.from(a, "base64");
    return o.formatFileContent(s, t);
  } catch (a) {
    throw a instanceof l ? a : (o.logger.error(`_readLocalVMFile: failed to read file ${t}: %o`, a), new l(`Failed to read file: ${t}`, "FILE_READ_ERROR"));
  }
}
async function k(e, r) {
  const t = await e.stat({
    bigint: true
  });
  if (!(await o.isPathSymlinkFree(r))) {
    return false;
  }
  const n = await h.lstat(r, {
    bigint: true
  }).catch(() => null);
  return n !== null && n.ino === t.ino && n.dev === t.dev;
}
async function Y(e) {
  return o.formatFileContent(await U(e), e);
}
async function U(e) {
  let r = null;
  try {
    r = await h.open(e, y.constants.O_RDONLY | D | N);
    const t = await r.stat();
    if (!t.isFile()) {
      throw new l(`Not a regular file: ${e}`, "FILE_READ_ERROR");
    }
    if (!(await k(r, e))) {
      o.logger.warn(`_readLocalHostFile: path moved between validation and open: ${e}`);
      throw new l(`Path moved during read: ${e}`, "FILE_READ_ERROR");
    }
    if (t.size > C) {
      o.logger.warn(`_readLocalHostFile: file too large (${t.size} bytes): ${e}`);
      throw new l(`File too large: ${e}`, "FILE_TOO_LARGE");
    }
    return await o.boundedReadFile(r, t.size, C);
  } catch (t) {
    throw t instanceof l ? t : t instanceof o.SizeLimitError ? new l(`File too large: ${e}`, "FILE_TOO_LARGE") : (o.logger.error(`_readLocalHostFile: failed to read file ${e}`, t), new l(`Failed to read file: ${e}`, "FILE_READ_ERROR"));
  } finally {
    await (r == null ? undefined : r.close().catch(() => {}));
  }
}
async function Z(e, r, t) {
  const n = decodeURIComponent(t);
  const a = n.startsWith("/sessions/");
  let s = null;
  let i = null;
  if (a) {
    s = V(r, n);
  } else {
    i = await S("readLocalFile", r, n);
  }
  await R(e, r, i ?? n, "read");
  if (a && s) {
    return K(s.vmProcessName, s.normalizedPath, n);
  }
  if (i !== null) {
    await P(i, n);
    return Y(i);
  }
  throw new l(`Failed to resolve path: ${n}`, "INVALID_PATH");
}
async function P(e, r) {
  if (!(await o.isPathSymlinkFree(e))) {
    o.logger.warn(`readLocalFile: path moved during consent: ${r}`);
    throw new l(`Path moved during consent: ${r}`, "PATH_NOT_ALLOWED");
  }
}
async function J(e, r, t) {
  const n = decodeURIComponent(t);
  if (n.startsWith("/sessions/")) {
    throw new l(`VM paths unsupported for raw reads: ${n}`, "INVALID_PATH");
  }
  const a = await S("readLocalFile", r, n);
  await R(e, r, a, "read");
  await P(a, n);
  return U(a);
}
const W = 512;
const x = 20971520;
const Q = 52428800;
const H = W * 4;
const ee = /\.(png|jpe?g|gif|webp|bmp)$/i;
async function te(e, r, t) {
  const n = decodeURIComponent(r);
  if (v(e) || n.startsWith("/sessions/") || !ee.test(n)) {
    return null;
  }
  let a;
  try {
    a = await S("readLocalFile", e, n);
  } catch {
    return null;
  }
  const s = Math.min(Math.max(1, Math.floor(t)), W);
  try {
    const i = await h.open(a, y.constants.O_RDONLY | D | N);
    let c;
    try {
      const p = await i.stat();
      if (!p.isFile() || !(await k(i, a))) {
        o.logger.warn(`getLocalFileThumbnail: path moved between validation and open: ${n}`);
        return null;
      }
      if (p.size > x) {
        return null;
      }
      c = await o.boundedReadFile(i, p.size, x);
    } catch (p) {
      if (p instanceof o.SizeLimitError) {
        return null;
      }
      throw p;
    } finally {
      await i.close().catch(() => {});
    }
    const g = O.nativeImage.createFromBuffer(c);
    if (g.isEmpty()) {
      return null;
    }
    const {
      width: u,
      height: F
    } = g.getSize();
    if (u <= 0 || F <= 0 || u * F > Q) {
      return null;
    }
    let E = Math.min(s, F);
    let A = Math.max(1, Math.round(u * E / F));
    if (A > H) {
      A = H;
      E = Math.max(1, Math.round(F * A / u));
    }
    const $ = g.resize({
      width: A,
      height: E,
      quality: "good"
    });
    if ($.isEmpty()) {
      return null;
    }
    const {
      width: f,
      height: L
    } = $.getSize();
    return {
      dataUrl: $.toDataURL(),
      width: f,
      height: L
    };
  } catch {
    return null;
  }
}
async function oe(e, r, t, n) {
  const a = decodeURIComponent(t);
  const s = await S("writeLocalFile", r, a);
  try {
    const i = await h.open(s, y.constants.O_WRONLY | y.constants.O_CREAT | D | N);
    try {
      const c = await i.stat();
      const g = await o.isPathSymlinkFree(s);
      const u = g ? await h.stat(s).catch(() => null) : null;
      if (!c.isFile() || !g || u === null || u.ino !== c.ino || u.dev !== c.dev) {
        o.logger.warn(`writeLocalFileImpl: path moved between validation and open: ${a}`);
        throw new l(`Path moved during write: ${a}`, "PATH_NOT_ALLOWED");
      }
      await i.truncate(0);
      await i.writeFile(n, "utf-8");
    } finally {
      await i.close();
    }
    return true;
  } catch (i) {
    throw i instanceof l ? i : (o.logger.error(`writeLocalFileImpl: failed to write file ${a}`, i), new l(`Failed to write file: ${a}`, "FILE_WRITE_ERROR"));
  }
}
async function re(e, r) {
  if (!w.isAbsolute(r)) {
    o.logger.warn(`listFilesInFolder called with non-absolute path: ${r}`);
    return [];
  }
  const t = m.localAgentModeSessionManager.getSession(e);
  if (!t) {
    o.logger.warn(`listFilesInFolder: unknown session ${e}`);
    return [];
  }
  const n = t.userSelectedFolders ?? [];
  if (n.length === 0) {
    o.logger.warn(`listFilesInFolder: session ${e} has no folders`);
    return [];
  }
  try {
    const a = await o.isRealpathWithinAny(r, n);
    if (!a) {
      o.logger.warn(`listFilesInFolder: folder ${r} not within session's selected folders`);
      return [];
    }
    if (!(await h.stat(a)).isDirectory()) {
      o.logger.warn(`listFilesInFolder: rejected non-directory: ${r}`);
      return [];
    }
    const i = await h.readdir(a, {
      withFileTypes: true
    });
    return await Promise.all(i.filter(c => !o.shouldHideFromFolderListing(c.name)).map(async c => {
      const g = w.join(r, c.name);
      let u = c.isDirectory();
      if (!u && c.isSymbolicLink()) {
        const F = await h.stat(w.join(a, c.name)).catch(() => null);
        u = (F == null ? undefined : F.isDirectory()) === true;
      }
      return {
        name: c.name,
        path: g,
        isDirectory: u
      };
    }));
  } catch (a) {
    o.logger.error(`Failed to list files in folder: ${r}`, a);
    return [];
  }
}
async function ae(e, r) {
  var A;
  var $;
  try {
    o.refuseIfHipaaGated("gdrive_export");
  } catch {
    return {
      errorCode: "hipaa_gated"
    };
  }
  const t = decodeURIComponent(r);
  if (v(e)) {
    throw new l(`Invalid session: ${e}`, "INVALID_SESSION");
  }
  if (t.startsWith("/sessions/")) {
    throw new l("Cannot export VM-only files to Google Drive", "INVALID_PATH");
  }
  const n = await S("readLocalFile", e, t);
  const a = await o.getLastActiveOrg();
  if (!a) {
    throw new l("No active organization", "INVALID_SESSION");
  }
  const s = 31457280;
  let i;
  try {
    const f = await h.open(n, y.constants.O_RDONLY | D | N);
    try {
      const L = await f.stat();
      if (!L.isFile() || !(await k(f, n))) {
        o.logger.warn(`exportLocalFileToGoogleDrive: path moved between validation and open: ${t}`);
        throw new l(`Path moved during read: ${t}`, "FILE_READ_ERROR");
      }
      if (L.size > s) {
        return {
          errorCode: "file_too_large"
        };
      }
      i = await o.boundedReadFile(f, L.size, s);
    } finally {
      await f.close().catch(() => {});
    }
  } catch (f) {
    if (f instanceof o.SizeLimitError) {
      return {
        errorCode: "file_too_large"
      };
    }
    throw f instanceof l ? f : (o.logger.error(`exportLocalFileToGoogleDrive: failed to read ${t}`, f), new l(`Failed to read file: ${t}`, "FILE_READ_ERROR"));
  }
  const c = w.basename(t);
  const g = new FormData();
  g.append("file", new Blob([new Uint8Array(i)]), c);
  const u = `${o.claudeAiUrl()}/api/organizations/${a}/cowork/export-to-google-drive`;
  const F = new AbortController();
  const E = setTimeout(() => F.abort(), 180000);
  try {
    const f = await O.net.fetch(u, {
      method: "POST",
      body: g,
      signal: F.signal
    });
    if (!f.ok) {
      const p = await f.json().catch(() => null);
      const d = (A = p == null ? undefined : p.error) == null ? undefined : A.details;
      o.logger.warn("exportLocalFileToGoogleDrive: backend rejected", {
        status: f.status,
        error_code: d == null ? undefined : d.error_code
      });
      return {
        errorCode: (d == null ? undefined : d.error_code) ?? (($ = p == null ? undefined : p.error) == null ? undefined : $.type) ?? "unknown_error",
        mcpServerId: (d == null ? undefined : d.server_id) ?? undefined,
        mcpServerUrl: (d == null ? undefined : d.server_url) ?? undefined
      };
    }
    const L = await f.json();
    o.logger.info("exportLocalFileToGoogleDrive: success", {
      file_name: L.file_name,
      has_drive_url: !!L.drive_url
    });
    return {
      driveUrl: L.drive_url ?? undefined,
      driveFileId: L.drive_file_id ?? undefined
    };
  } catch (f) {
    if (f instanceof Error && f.name === "AbortError") {
      o.logger.warn("exportLocalFileToGoogleDrive: timed out");
      return {
        errorCode: "google_drive_transient_error"
      };
    } else {
      o.logger.error("exportLocalFileToGoogleDrive: request failed", f);
      return {
        errorCode: "google_drive_transient_error"
      };
    }
  } finally {
    clearTimeout(E);
  }
}
async function ne(e, r) {
  const t = decodeURIComponent(r);
  const {
    vmProcessName: n,
    normalizedPath: a
  } = V(e, t);
  if (!X.isScratchpadVMPath(a, n)) {
    throw new l("Path is already under a mounted folder", "INVALID_PATH");
  }
  let s;
  try {
    s = m.localAgentModeSessionManager.getOutputsDir(e);
  } catch {
    throw new l("Could not determine outputs directory", "INVALID_SESSION");
  }
  let i;
  try {
    i = await z.promoteScratchpadFileToOutputs(a, n, s);
  } catch (c) {
    o.logger.error(`promoteScratchpadFile: failed for ${a}: %o`, c);
    const g = c instanceof Error ? c.message : "";
    throw new l(`Failed to copy file to outputs: ${a}`, g.includes("Blocked") ? "BLOCKED_EXTENSION" : "FILE_WRITE_ERROR");
  }
  m.localAgentModeSessionManager.recordDetectedFile(e, i.hostPath);
  m.localAgentModeSessionManager.notifySession(e, `${a} was in the scratchpad, so it's been copied to ${i.vmOutputsPath} for the user to open on their computer. Edit that path going forward — the scratchpad original won't reach the user.`);
  return i;
}
exports.LocalFileAccessError = l;
exports.checkFileAccessConsent = R;
exports.exportLocalFileToGoogleDriveImpl = ae;
exports.getLocalFileThumbnailImpl = te;
exports.listFilesInFolderImpl = re;
exports.openLocalFileImpl = G;
exports.promoteScratchpadFileImpl = ne;
exports.readLocalFileBytesImpl = J;
exports.readLocalFileImpl = Z;
exports.validateLocalFileAccess = S;
exports.validateVMPathAccess = V;
exports.writeLocalFileImpl = oe;
//# sourceMappingURL=index.chunk-DbmKNDSK.js.map