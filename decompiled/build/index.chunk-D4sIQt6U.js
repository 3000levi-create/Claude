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
      e._sentryDebugIds[t] = "cfc03ab2-5d6c-480c-9a4e-8aabfdf3518a";
      e._sentryDebugIdIdentifier = "sentry-dbid-cfc03ab2-5d6c-480c-9a4e-8aabfdf3518a";
    }
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
const pt = require("node:buffer");
const ne = require("node:fs");
const M = require("node:fs/promises");
const I = require("node:os");
const f = require("node:path");
const o = require("./index.chunk-c42vKsva.js");
const B = require("electron");
const gt = require("node:util");
const u = require("./index.chunk-IUD6Pydn.js");
const mt = require("./index.chunk-htvfPYXx.js");
const wt = require("./index.chunk-BLNdD7Yt.js");
const Q = gt.promisify(ne.realpath);
const vt = [".gitconfig", ".gitmodules", ".bashrc", ".bash_profile", ".zshrc", ".zprofile", ".profile", ".ripgreprc", ".mcp.json", ".claude.json", ".npmrc", ".yarnrc", ".yarnrc.yml", ".envrc", ".direnvrc", ".pre-commit-config.yaml", ".devcontainer.json", ".env", ".netrc", "_netrc", "profile.ps1", "Microsoft.PowerShell_profile.ps1", "Microsoft.PowerShellISE_profile.ps1", "Microsoft.VSCode_profile.ps1", "powershell.config.json"];
const yt = [".env."];
const _t = [".env.example", ".env.sample", ".env.template", ".env.dist"];
const Et = [".git", ".vscode", ".idea", ".claude", ".husky", ".cargo", ".devcontainer", ".yarn", ".mvn", ".ssh", ".aws", ".gnupg", ".kube", ".docker"];
function te(e) {
  if (!e) {
    return [];
  }
  try {
    const t = ne.realpathSync(e);
    if (t.toLowerCase() !== e.toLowerCase()) {
      return [e, t];
    } else {
      return [e];
    }
  } catch {
    return [e];
  }
}
const Ae = "/system/volumes/data";
function Ie(e) {
  if (e.startsWith(Ae + "/")) {
    return e.slice(Ae.length);
  } else {
    return e;
  }
}
const St = te(I.homedir());
const kt = te(process.env.APPDATA);
const Tt = [...St.flatMap(e => [f.join(e, "Library", "LaunchAgents"), f.join(e, ".config", "gcloud"), f.join(e, ".config", "git"), f.join(e, ".config", "direnv"), f.join(e, ".config", "powershell"), f.join(e, ".gnupg"), ...(process.platform === "win32" ? [f.join(e, "Documents", "WindowsPowerShell"), f.join(e, "Documents", "PowerShell"), f.join(e, "OneDrive", "Documents", "WindowsPowerShell"), f.join(e, "OneDrive", "Documents", "PowerShell")] : [])]), ...kt.flatMap(e => [f.join(e, "gcloud"), f.join(e, "gnupg"), f.join(e, "Microsoft", "Windows", "Start Menu", "Programs", "Startup")]), ...te(process.env.SystemRoot).flatMap(e => [f.join(e, "System32", "drivers", "etc")]), ...te(process.env.ProgramData).flatMap(e => [f.join(e, "Microsoft", "Windows", "Start Menu", "Programs", "StartUp")])];
const bt = ["/etc", "/private/etc", "/Library/LaunchAgents", "/Library/LaunchDaemons", "/System/Library/LaunchAgents", "/System/Library/LaunchDaemons", ...Tt].map(e => Ie(Le(e.replaceAll("\\", "/"))));
function Oe(e) {
  if (e && typeof e == "object" && "code" in e && typeof e.code == "string") {
    return e.code;
  }
}
function X(e) {
  return e.toLowerCase();
}
function z(e) {
  const t = e.normalize("NFKC").toLowerCase();
  const r = t === "." || t === ".." || /[/\\]/.test(t) ? e.toLowerCase() : t;
  return r.replace(/[. ]+$/, "") || r;
}
function Le(e) {
  return e.split("/").map(z).join("/");
}
function Rt(e) {
  return /(?:^|[\\/])\.\.(?:[\\/]|$)/.test(e);
}
function At(e) {
  return /^[\\/]{2}wsl(\$|\.localhost)[\\/]/i.test(e);
}
function Me(e) {
  if (e.startsWith("\\\\")) {
    return e.replaceAll("\\", "/");
  }
  const t = e.match(/^([A-Za-z]):[/\\]/);
  if (t) {
    return "/" + t[1].toLowerCase() + e.slice(2).replaceAll("\\", "/");
  } else {
    return e.replaceAll("\\", "/");
  }
}
function Mt(e, t) {
  if (process.platform === "win32") {
    return f.posix.relative(Me(e), Me(t));
  } else {
    return f.posix.relative(e, t);
  }
}
function Pt(e) {
  if (process.platform !== "win32") {
    return false;
  } else {
    return !!/\\\\[^\s\\/]+(?:@(?:\d+|ssl))?(?:[\\/]|$|\s)/i.test(e) || !!new RegExp("(?<!:)\\/\\/[^\\s\\\\/]+(?:@(?:\\d+|ssl))?(?:[\\\\/]|$|\\s)", "i").test(e) || !!/\/\\{2,}[^\s\\/]/.test(e) || !!/\\{2,}\/[^\s\\/]/.test(e) || !!/@SSL@\d+/i.test(e) || !!/@\d+@SSL/i.test(e) || !!/DavWWWRoot/i.test(e) || !!/^\\\\(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})[\\/]/.test(e) || !!/^\/\/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})[\\/]/.test(e) || !!/^\\\\(\[[\da-fA-F:]+\])[\\/]/.test(e) || !!/^\/\/(\[[\da-fA-F:]+\])[\\/]/.test(e);
  }
}
function xt(e) {
  return process.platform === "win32" && e.indexOf(":", 2) !== -1 || !!/~\d/.test(e) || !!e.startsWith("\\\\?\\") || !!e.startsWith("\\\\.\\") || !!e.startsWith("//?/") || !!e.startsWith("//./") || !!/[. ]+(?=[\\/]|$)/.test(e) || !!/\.(CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])$/i.test(e) || !!/(^|\/|\\)\.{3,}(\/|\\|$)/.test(e) || !!Pt(e) && !At(e);
}
function Pe(e) {
  if (typeof e != "string") {
    throw new TypeError(`Path must be a string, received ${typeof e}`);
  }
  if (e.includes("\0")) {
    throw new Error("Path contains null bytes");
  }
  const t = e.trim();
  if (t === "~") {
    return I.homedir().normalize("NFC");
  } else if (t.startsWith("~/")) {
    return f.join(I.homedir(), t.slice(2)).normalize("NFC");
  } else {
    return f.normalize(t).normalize("NFC");
  }
}
const ve = /^[\\/]{2}/;
async function Ct(e) {
  if (ve.test(e)) {
    return {
      resolvedPath: e,
      isSymlink: false,
      isCanonical: false
    };
  }
  try {
    const t = await M.lstat(e);
    if (t.isFIFO() || t.isSocket() || t.isCharacterDevice() || t.isBlockDevice()) {
      return {
        resolvedPath: e,
        isSymlink: false,
        isCanonical: false
      };
    }
    const r = await Q(e);
    return {
      resolvedPath: r,
      isSymlink: r !== e,
      isCanonical: true
    };
  } catch {
    return {
      resolvedPath: e,
      isSymlink: false,
      isCanonical: false
    };
  }
}
async function fe(e, t = 0) {
  if (t >= 64) {
    return f.sep;
  }
  let r = e;
  const i = [];
  while (r !== f.dirname(r)) {
    let n;
    let a;
    try {
      n = await M.readlink(r);
    } catch (s) {
      a = Oe(s);
    }
    if (n !== undefined) {
      const s = f.isAbsolute(n) ? n : f.resolve(f.dirname(r), n);
      if (!ue(s)) {
        try {
          const c = await Q(r);
          if (i.length === 0) {
            return c;
          } else {
            return f.join(c, ...i);
          }
        } catch {
          const c = i.length === 0 ? s : f.join(s, ...i);
          return (await fe(c, t + 1)) ?? c;
        }
      }
      if (i.length === 0) {
        return s;
      } else {
        return f.join(s, ...i);
      }
    }
    if (a === "ENOENT") {
      i.unshift(f.basename(r));
      r = f.dirname(r);
      continue;
    }
    for (let s = f.dirname(r); s !== f.dirname(s); s = f.dirname(s)) {
      try {
        const c = await M.readlink(s);
        const d = f.isAbsolute(c) ? c : f.resolve(f.dirname(s), c);
        if (ue(d)) {
          const g = f.relative(s, r);
          if (i.length === 0 && g === "") {
            return d;
          } else {
            return f.join(d, g, ...i);
          }
        }
      } catch {}
    }
    try {
      const s = await M.lstat(r);
      if (s.isFIFO() || s.isSocket() || s.isCharacterDevice() || s.isBlockDevice()) {
        try {
          const d = f.dirname(r);
          const g = await Q(d);
          if (g !== d) {
            if (i.length === 0) {
              return f.join(g, f.basename(r));
            } else {
              return f.join(g, f.basename(r), ...i);
            }
          }
        } catch {}
        return;
      }
      const c = await Q(r);
      if (c !== r) {
        if (i.length === 0) {
          return c;
        } else {
          return f.join(c, ...i);
        }
      }
    } catch {}
    return;
  }
}
const ue = e => process.platform === "win32" && ve.test(e);
async function Ft(e) {
  let t = e;
  if (t === "~") {
    t = I.homedir().normalize("NFC");
  } else if (t.startsWith("~/")) {
    t = f.join(I.homedir().normalize("NFC"), t.slice(2));
  }
  const r = new Set();
  r.add(t);
  if (ve.test(t)) {
    return Array.from(r);
  }
  let i = false;
  let n = false;
  try {
    let a = t;
    const s = new Set();
    const c = 64;
    for (let d = 0; d < c && !s.has(a); d++) {
      s.add(a);
      let g;
      let m;
      try {
        g = await M.readlink(a);
      } catch (S) {
        m = Oe(S);
      }
      if (g === undefined) {
        if (m === "ENOENT") {
          const S = await fe(a);
          if (S !== undefined) {
            r.add(S);
          }
        }
        n = true;
        break;
      }
      const y = f.isAbsolute(g) ? g : f.resolve(f.dirname(a), g);
      r.add(y);
      if (ue(y)) {
        i = true;
        break;
      }
      a = y;
    }
    try {
      const d = await fe(a);
      if (d !== undefined) {
        r.add(d);
      }
    } catch {
      n = false;
      i = false;
    }
  } catch {}
  if (!i && !n) {
    throw new Error("getPathsForPermissionCheck: symlink chain not proven local (depth/cycle/throw)");
  }
  if (!i && n) {
    const {
      resolvedPath: a,
      isSymlink: s
    } = await Ct(t);
    if (s && a !== t) {
      r.add(a);
    }
  }
  return Array.from(r);
}
function N(e) {
  return e.replace(/^\/private\/var\//, "/var/").replace(/^\/private\/tmp(\/|$)/, "/tmp$1");
}
function $t(e, t) {
  const r = X(N(e));
  const i = X(N(t));
  const n = Mt(i, r);
  if (n === "") {
    return true;
  } else if (Rt(n)) {
    return false;
  } else {
    return !f.posix.isAbsolute(n);
  }
}
function It(e, t) {
  if (t.length === 0) {
    return false;
  }
  let r;
  try {
    r = t.map(i => Pe(i));
  } catch {
    return false;
  }
  for (const i of e) {
    let n;
    try {
      n = Pe(i);
    } catch {
      return false;
    }
    if (!r.some(s => $t(n, s))) {
      return false;
    }
  }
  return true;
}
function Ot(e) {
  const t = Ie(Le(e.replaceAll("\\", "/")));
  for (const n of bt) {
    if (t === n || t.startsWith(n + "/")) {
      return n;
    }
  }
  const r = e.split(/[\\/]/);
  const i = r.at(-1);
  for (const n of r) {
    const a = z(n);
    for (const s of Et) {
      if (a === z(s)) {
        return s;
      }
    }
  }
  if (i) {
    const n = z(i);
    for (const s of vt) {
      if (z(s) === n) {
        return s;
      }
    }
    const a = X(i);
    for (const s of yt) {
      if (n.startsWith(X(s)) && !_t.some(c => X(c) === a)) {
        return i;
      }
    }
  }
  return null;
}
const Lt = 45000;
const ee = new Map();
const L = new Set();
const re = new Map();
function F(e) {
  return f.resolve(e).replace(/[\\/]+$/, "").toLowerCase();
}
function U(e, t) {
  const r = f.relative(F(t), F(e));
  return r === "" || !f.isAbsolute(r) && r !== ".." && !r.startsWith(`..${f.sep}`);
}
function ye(e, t) {
  let r = null;
  for (const i of t) {
    if (U(e, i) && (r === null || i.length > r.length)) {
      r = i;
    }
  }
  return r;
}
async function xe(e, t) {
  var c;
  if (!o.isFeatureEnabled("1323782925") || o.classifyTccProtectedRoot() === null) {
    return false;
  }
  const r = ye(e, t);
  if (r === null) {
    return false;
  }
  const i = F(r);
  for (const d of L) {
    if (U(e, d)) {
      return false;
    }
  }
  if ((c = re.get(i)) != null && c.some(d => U(e, d))) {
    return false;
  }
  let n = ee.get(i);
  if (!n) {
    n = Ut(r, e, i).finally(() => {
      ee.delete(i);
    });
    ee.set(i, n);
  }
  let a;
  const s = new Promise(d => {
    a = setTimeout(() => d(null), Lt);
  });
  try {
    const d = await Promise.race([n, s]);
    return d !== null && U(e, d);
  } finally {
    clearTimeout(a);
  }
}
function Dt(e, t) {
  const r = ye(e, t);
  return r !== null && ee.has(F(r));
}
function Nt(e, t) {
  var n;
  const r = ye(e, t);
  if (r === null) {
    return;
  }
  const i = ((n = re.get(F(r))) == null ? undefined : n.filter(a => U(e, a))) ?? [];
  if (i.length === 0) {
    L.add(F(e));
    return;
  }
  for (const a of i) {
    L.add(F(a));
  }
}
async function Ut(e, t, r) {
  const i = o.classifyTccProtectedRoot() ?? "unknown";
  o.logger.info(`[folder-tcc] Re-pick prompt for denied ${i} folder`);
  o.logger.debug(`[folder-tcc] Re-pick prompt for: ${e}`);
  try {
    const n = o.mainWindow && !o.mainWindow.isDestroyed() ? o.mainWindow : undefined;
    if (n != null) {
      n.show();
    }
    if (n != null) {
      n.focus();
    }
    const a = {
      title: "Allow access to your folder",
      message: `Claude lost permission to access "${e}". Select the folder again to restore access.`,
      buttonLabel: "Grant Access",
      defaultPath: e,
      properties: ["openDirectory"]
    };
    const s = n ? await B.dialog.showOpenDialog(n, a) : await B.dialog.showOpenDialog(a);
    if (s.canceled || s.filePaths.length === 0) {
      o.logger.info("[folder-tcc] Re-pick prompt dismissed");
      L.add(r);
      return null;
    }
    const c = s.filePaths[0];
    const d = U(e, c);
    if (!d && !U(c, e)) {
      o.logger.info("[folder-tcc] Re-pick selected a folder outside the denied one");
      L.add(r);
      return null;
    }
    const g = d ? e : c;
    try {
      await M.readdir(g);
    } catch (y) {
      o.logger.warn(`[folder-tcc] Re-pick did not restore access (${Ce(y)})`);
      o.logger.debug(`[folder-tcc] Re-pick failure detail: ${y instanceof Error ? y.message : String(y)}`);
      L.add(F(g));
      return null;
    }
    o.logger.info("[folder-tcc] Re-pick restored access");
    const m = re.get(r) ?? [];
    m.push(c);
    re.set(r, m);
    return c;
  } catch (n) {
    o.logger.warn(`[folder-tcc] Re-pick prompt failed (${Ce(n)})`);
    o.logger.debug(`[folder-tcc] Re-pick failure detail: ${n instanceof Error ? n.message : String(n)}`);
    L.add(r);
    return null;
  }
}
function Ce(e) {
  if (e instanceof Error && "code" in e && typeof e.code == "string") {
    return e.code;
  } else {
    return "unknown";
  }
}
const de = "01";
const Bt = 22;
const De = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
const jt = BigInt(De.length);
const Wt = (1n << 128n) - 1n;
function zt(e) {
  let t = 0n;
  for (const r of e) {
    const i = De.indexOf(r);
    if (i < 0) {
      return;
    }
    t = t * jt + BigInt(i);
  }
  return t;
}
function Gt(e) {
  const t = e.toString(16).padStart(32, "0");
  return [t.slice(0, 8), t.slice(8, 12), t.slice(12, 16), t.slice(16, 20), t.slice(20, 32)].join("-");
}
function Ht(e, t) {
  if (!t || !t.startsWith(`${e}_`)) {
    return;
  }
  const r = t.slice(t.lastIndexOf("_") + 1);
  if (r.length !== de.length + Bt || !r.startsWith(de)) {
    return;
  }
  const i = zt(r.slice(de.length));
  if (i !== undefined && !(i > Wt)) {
    return Gt(i);
  }
}
const Ne = "device_list_dir";
const Ue = "device_stage_files";
const Be = "device_commit_files";
const _e = 5;
const ie = 2000;
const $ = 50;
const Kt = 524222464;
const Ee = 400;
const Se = 500;
function qt() {
  return mt.getTransferCaps({
    fileKey: "deviceStageMaxFileMb",
    totalKey: "deviceStageMaxTotalMb",
    defaultFileMb: Ee,
    defaultTotalMb: Se,
    ceilingBytes: Kt
  });
}
const ke = 50000;
const Xt = 1500;
const Yt = 3;
const he = 20971520;
const Jt = 104857600;
const oe = "/mnt/user-data/uploads";
const Fe = 10485760;
const je = "cowork-artifacts";
const We = "2016258596";
const Vt = [/(?:^|\/)(?:gnu)?makefile$/, /(?:^|\/)\.?justfile$/, /(?:^|\/)\.github\//];
const ze = "The remote-devices bridge did not supply a session id for this call. session_id is injected server-side by CCR's mcpproxy; its absence means the injection gate is off or the call bypassed mcpproxy. Retrying will not help — ask the user to report this.";
const Ge = {
  path: o.stringType().describe("Absolute path of a directory on this device. ~ is expanded on the device. Must be one of the session's folder roots or a subdirectory under one."),
  recursive: o.booleanType().optional().describe(`Walk subdirectories (depth ≤ ${_e}). Default false. The ${ie}-entry output cap applies regardless.`)
};
const He = {
  paths: o.arrayType(o.stringType()).min(1).max($).optional().describe(`Absolute paths on this device, each under one of the session's folder roots. ~ is expanded on the device. Max ${$} per call (combined with artifact_ids); ≤${Ee}MB per file, ≤${Se}MB total per call by default (configurable; error text states the active limit). At least one of paths or artifact_ids is required.`),
  artifact_ids: o.arrayType(o.stringType()).min(1).max($).optional().describe(`Ids of Cowork artifacts on this device (from list_artifacts) whose current HTML to stage into the container at ${oe}/${je}/<id>/index.html. Use this to read an artifact's existing content before update_artifact. Result entries for artifacts carry artifactId instead of devicePath. On desktops that don't support artifact staging the response omits artifact entries entirely — treat a missing entry as unsupported, not as an empty artifact.`)
};
const Zt = {
  fileUuid: o.stringType().describe("file_uuid returned by a prior SendUserFile call for this output."),
  devicePath: o.stringType().describe("Absolute path on this device to write to. ~ is expanded on the device."),
  expectedMtimeMs: o.numberType().optional().describe("If set, refuse to write when the device file's mtime has changed since this value (use mtimeMs from device_stage_files)")
};
const Ke = {
  files: o.arrayType(o.objectType(Zt)).min(1).max($),
  force: o.booleanType().optional().describe("Bypass the expectedMtimeMs guard. Default false.")
};
const qe = o.stringType().uuid().describe("file_uuid returned by a prior SendUserFile call for the complete self-contained HTML document. Write the HTML to a file first, call SendUserFile with that path, then pass the file_uuid it returns here.");
const Xe = {
  id: o.stringType().min(1).describe("Kebab-case slug identifying the new artifact (e.g. 'sprint-velocity'). Lowercase letters, digits, hyphens, and underscores only."),
  file_uuid: qe,
  description: o.stringType().optional().describe("Concise summary of what this artifact shows and where its data comes from.")
};
const Ye = {
  id: o.stringType().min(1).describe("Kebab-case slug of the existing artifact to update."),
  file_uuid: qe,
  update_summary: o.stringType().describe("Short description of what this update changes — shown to the user in the approval prompt."),
  description: o.stringType().optional().describe("Replace the artifact's summary. Omit to keep the existing description.")
};
const Qt = {};
const er = o.objectType(Ge);
const tr = o.objectType(He);
const rr = o.objectType(Ke);
const ir = o.objectType(Xe);
const nr = o.objectType(Ye);
function K(e) {
  return e.parentSessionId ?? "";
}
function se() {
  return o.getAppPreference("remoteSessionFolderGrants") ?? {};
}
function pe(e) {
  if (typeof e == "string") {
    return e;
  } else {
    return e.display;
  }
}
function Je(e) {
  if (typeof e == "string") {
    return {
      display: e
    };
  } else {
    return e;
  }
}
const Te = new o.Mutex();
const D = new Map();
function q(e) {
  return e.replace(/^cse_/, "session_");
}
function or(e, t) {
  const r = q(e);
  let i = D.get(r);
  if (!i) {
    i = new Set();
    D.set(r, i);
  }
  i.add(t);
  t.finally(() => {
    const n = D.get(r);
    if (n) {
      n.delete(t);
      if (n.size === 0) {
        D.delete(r);
      }
    }
  });
}
async function J(e, t = 30000) {
  if (!e) {
    return;
  }
  const r = D.get(q(e));
  if (!r || r.size === 0) {
    return;
  }
  const i = Promise.all([...r].map(a => a.catch(() => {})));
  let n;
  await Promise.race([i, new Promise(a => {
    n = setTimeout(a, t);
  })]);
  if (n) {
    clearTimeout(n);
  }
}
async function sr(e = 30000) {
  const t = [...D.values()].flatMap(n => [...n]);
  if (t.length === 0) {
    return;
  }
  const r = Promise.all(t.map(n => n.catch(() => {})));
  let i;
  await Promise.race([r, new Promise(n => {
    i = setTimeout(n, e);
  })]);
  if (i) {
    clearTimeout(i);
  }
}
const O = new Map();
function ar(e) {
  return O.has(q(e));
}
function Ve(e, t, r) {
  o.logCoworkEvent("lam_remote_folder_grant_changed", {
    action: e,
    folder_count_after: r,
    parent_session_id: t,
    row_pk_resolved: o.getRowPkResolvedSnapshot()
  });
}
function cr(e, t) {
  return Te.runExclusive(async () => {
    const r = q(e);
    if (O.has(r)) {
      o.logger.info(`grantRemoteSessionFolders: dropping write for ${r} — session was cleared while its grant dialog was open`);
      return;
    }
    const i = se();
    const n = i[r] ?? [];
    const a = new Set(n.map(pe));
    const s = a.size;
    const c = [...n];
    for (const m of t) {
      const y = Je(m);
      const S = f.normalize(y.display);
      if (!a.has(S)) {
        a.add(S);
        if (y.unc !== undefined || y.letter !== undefined) {
          c.push({
            ...y,
            display: S
          });
        } else {
          c.push(S);
        }
      }
    }
    if (a.size === s) {
      return;
    }
    const d = Y(r).length;
    await o.setAppPreference("remoteSessionFolderGrants", {
      ...i,
      [r]: c
    });
    const g = Y(r).length;
    if (g !== d) {
      Ve("attached", r, g);
    }
  });
}
function Ze(e, t, r = 2000) {
  return Promise.race([o.realPathsEqual(e, t), new Promise(i => {
    setTimeout(() => i(false), r);
  })]);
}
async function lr(e) {
  await sr(5000);
  return Te.runExclusive(async () => {
    const t = se();
    const r = f.normalize(e);
    const i = async c => pe(c) === r || (await Ze(pe(c), e));
    let n = false;
    const a = [];
    const s = {};
    for (const [c, d] of Object.entries(t)) {
      const g = await Promise.all(d.map(i));
      const m = d.filter((y, S) => !g[S]);
      if (m.length !== d.length) {
        n = true;
        a.push(c);
      }
      if (m.length > 0) {
        s[c] = m;
      }
    }
    if (n) {
      await o.setAppPreference("remoteSessionFolderGrants", s);
      const c = new Set(a.map(d => q(d)));
      for (const d of c) {
        Ve("detached", d, Y(d).length);
      }
    }
  });
}
async function dr(e) {
  const t = q(e);
  const r = D.get(t);
  if (r && r.size > 0) {
    O.set(t, (O.get(t) ?? 0) + 1);
    Promise.allSettled([...r]).finally(() => {
      const i = (O.get(t) ?? 1) - 1;
      if (i <= 0) {
        O.delete(t);
      } else {
        O.set(t, i);
      }
    });
  }
  await J(e);
  return Te.runExclusive(async () => {
    const i = se();
    const n = t.replace(/^session_/, "cse_");
    if (t in i || n in i) {
      const {
        [t]: a,
        [n]: s,
        ...c
      } = i;
      await o.setAppPreference("remoteSessionFolderGrants", c);
    }
  });
}
function ae(e) {
  return Qe(e).map(t => t.display);
}
function Qe(e) {
  if (e !== undefined) {
    return Y(e);
  } else {
    return [];
  }
}
function fr(e) {
  return Y(e).map(t => t.display);
}
function Y(e) {
  const t = I.homedir();
  const r = se();
  const i = e.replace(/^cse_/, "session_");
  const n = i.replace(/^session_/, "cse_");
  const a = new Set();
  const s = [];
  for (const c of [...(r[i] ?? []), ...(r[n] ?? [])]) {
    const d = Je(c);
    if (!a.has(d.display) && d.display !== "/" && d.display !== t) {
      a.add(d.display);
      s.push(d);
    }
  }
  return s;
}
function et(e) {
  const t = e.replaceAll("\\", "/").split("/").map(z).join("/");
  return Vt.some(r => r.test(t));
}
async function be(e, t, r, i) {
  if (xt(e)) {
    return {
      resolved: e,
      errKind: "suspicious_path_pattern",
      errText: `${t} contains a path pattern that is not permitted.`
    };
  }
  const n = await Ft(e);
  const a = n[n.length - 1] ?? e;
  if (!It(n, r)) {
    return {
      resolved: a,
      errKind: "containment_failed",
      errText: `${t} is not inside a folder connected to Cowork on this device. Ask the user to connect that folder.`
    };
  }
  if (i) {
    for (const s of r) {
      const c = s.replace(/[/\\]+$/, "").toLowerCase();
      for (const d of n) {
        if (d.replace(/[/\\]+$/, "").toLowerCase() === c) {
          return {
            resolved: a,
            errKind: "write_target_is_root",
            errText: `${t} is the connected folder itself, not a file inside it.`
          };
        }
      }
    }
    for (const s of n) {
      const c = Ot(s);
      if (c !== null) {
        return {
          resolved: a,
          errKind: "dangerous_write_target",
          errText: `Writing to ${c} is not permitted via remote tools.`
        };
      }
      if (et(s)) {
        return {
          resolved: a,
          errKind: "dangerous_write_target",
          errText: `${t} is a protected file and cannot be written via remote tools.`
        };
      }
    }
  }
  return {
    resolved: a
  };
}
function tt(e, t) {
  const r = N(e);
  let i = "";
  let n = "";
  for (const a of t) {
    const s = N(a);
    const c = f.relative(s, r);
    if (!c.startsWith("..") && !f.isAbsolute(c) && c !== "" && (i === "" || s.length < N(i).length)) {
      i = a;
      n = c;
    }
  }
  if (i !== "") {
    return {
      root: i,
      rel: n.split(f.sep).join("/")
    };
  }
}
function ge(e, t, r) {
  const i = f.relative(e.path, t);
  return !i.startsWith("..") && !f.isAbsolute(i) && i.split(f.sep).join("/") === r;
}
class W extends Error {
  constructor(t, r) {
    super(t);
    this.name = "CommitWriteRefusedError";
    this.deviceMtimeMs = r == null ? undefined : r.deviceMtimeMs;
    this.deviceBytes = r == null ? undefined : r.deviceBytes;
  }
}
class rt extends Error {
  constructor(t) {
    super(t.message);
    this.name = "TccRepickPendingError";
    this.code = t.code ?? "EPERM";
  }
}
function G(e, t) {
  const r = t instanceof rt ? " macOS revoked folder access; a re-grant prompt was shown on this device — retry this tool call after re-picking the folder." : "";
  if (process.platform === "darwin") {
    return `macOS denied access to ${e}. Grant access in System Settings → Privacy & Security → Files and Folders, or pick the folder via Cowork's Connect Folder dialog (which infers consent).${r}`;
  } else if (process.platform === "win32") {
    return `Windows denied access to ${e}. If Controlled Folder Access is on, add this app under Windows Security → Ransomware protection → Allow an app through Controlled folder access.${r}`;
  } else {
    return `Permission denied: ${e}${r}`;
  }
}
function b(e, ...t) {
  return !!e && typeof e == "object" && "code" in e && t.includes(e.code ?? "");
}
async function H(e, t, r, i) {
  try {
    return await r();
  } catch (n) {
    const a = n instanceof o.UnsafeRootError && n.cause !== undefined ? n.cause : n;
    if (!b(a, "EPERM")) {
      throw n;
    }
    if ((i == null ? undefined : i.mode) === "notify") {
      xe(e, t).catch(() => {});
      throw Dt(e, t) ? new rt(a) : a;
    }
    if (!(await xe(e, t))) {
      throw n;
    }
    try {
      return await r();
    } catch (c) {
      if (b(c, "EPERM", "EACCES")) {
        Nt(e, t);
      }
      throw c;
    }
  }
}
const it = "files-api-2025-04-14";
const nt = "oauth-2025-04-20";
const ot = "ccr-byoc-2025-07-29";
async function st() {
  const e = o.applyDeploymentModeOverrides(o.COWORK_OAUTH_CONFIGS[o.getOAuthEnvironment()]);
  return {
    apiHost: e.apiHost,
    bearer: await o.getApiToken(e)
  };
}
function at(e) {
  return e.replace(/[\x00-\x1f<>:"|?*\\/]/g, "_") || "_";
}
async function ur(e, t, r, i, n) {
  const a = new FormData();
  a.append("file", new Blob([new Uint8Array(r.buffer, r.byteOffset, r.byteLength)]), i);
  const s = await B.net.fetch(`${e}/v1/files`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${t}`,
      "anthropic-version": "2023-06-01",
      "anthropic-beta": `${it},${nt}`
    },
    body: a,
    credentials: "omit",
    signal: n
  });
  if (!s.ok) {
    throw new Error(`HTTP ${s.status}`);
  }
  return await s.json();
}
async function hr(e, t, r) {
  await B.net.fetch(`${e}/v1/files/${encodeURIComponent(r)}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${t}`,
      "anthropic-version": "2023-06-01",
      "anthropic-beta": `${it},${nt}`
    },
    credentials: "omit",
    signal: AbortSignal.timeout(5000)
  });
}
async function pr(e, t) {
  const r = `${o.claudeAiUrl()}/v1/code/sessions/${encodeURIComponent(e)}`;
  const i = await B.net.fetch(r, {
    method: "GET",
    headers: {
      "anthropic-version": "2023-06-01",
      "anthropic-beta": ot
    },
    signal: t
  });
  return {
    ok: i.ok,
    status: i.status
  };
}
const gr = 2000;
const mr = 60000;
let me = 0;
const we = new Set();
function wr(e) {
  const t = e;
  const r = typeof (t == null ? undefined : t.message) == "string" && t.message.startsWith("DeviceRegistry:") ? t.message : (t == null ? undefined : t.name) ?? "unknown";
  if (!we.has(r)) {
    we.add(r);
    o.logger.warn(`[remote-file-tools] td-v2 attestation mint unavailable: ${r}`);
  }
}
const vr = {
  reset() {
    me = 0;
    we.clear();
  }
};
async function yr(e) {
  const t = Ht("cse", e.replace(/^session_/, "cse_"));
  if (!!t && !(Date.now() < me)) {
    try {
      const r = await o.getLastActiveOrg();
      if (!r) {
        return;
      }
      const i = o.signSessionAttestationHeader(r, t);
      i.catch(() => {});
      let n;
      try {
        return await Promise.race([i, new Promise((a, s) => {
          n = setTimeout(() => s(new Error("DeviceRegistry: attestation sign timed out")), gr);
        })]);
      } finally {
        clearTimeout(n);
      }
    } catch (r) {
      me = Date.now() + mr;
      wr(r);
      return;
    }
  }
}
async function _r(e, t, r, i) {
  const n = `${o.claudeAiUrl()}/v1/code/sessions/${encodeURIComponent(e)}/files`;
  const a = await yr(e);
  const s = await B.net.fetch(n, {
    method: "POST",
    redirect: "error",
    headers: {
      "Content-Type": "application/json",
      "anthropic-version": "2023-06-01",
      "anthropic-beta": ot,
      ...(a ? {
        "X-Device-Attestation": a
      } : {})
    },
    body: JSON.stringify({
      file_id: t,
      mount_path: r
    }),
    signal: i
  });
  if (!s.ok) {
    throw new Error(`HTTP ${s.status} adding session file`);
  }
  return await s.json();
}
async function ct(e, t, r) {
  const i = `${o.claudeAiUrl()}/api/organizations/${encodeURIComponent(e)}/files/${encodeURIComponent(t)}/contents`;
  const n = await B.net.fetch(i, {
    signal: r,
    headers: {
      "Accept-Encoding": "identity"
    }
  });
  if (!n.ok) {
    throw new Error(`HTTP ${n.status} fetching org-scoped file`);
  }
  if (Number(n.headers.get("content-length") ?? 0) > he) {
    throw new Error(`HTTP 413: file exceeds ${he} bytes`);
  }
  return pt.Buffer.from(await n.arrayBuffer());
}
function Er(e, t, r) {
  const i = N(e);
  let n = "";
  let a = "";
  for (const c of t) {
    const d = N(c);
    const g = f.relative(d, i);
    if (!g.startsWith("..") && !f.isAbsolute(g) && g !== "" && c.length > n.length) {
      n = c;
      a = d;
    }
  }
  if (n === "") {
    throw new Error("deriveStagedContainerPath: no owning root matched");
  }
  const s = f.relative(a, i).split(f.sep).join("/");
  return `${oe}/${r.get(n)}/${s}`;
}
async function lt(e, t, r, i, n) {
  const a = await dt(i, Yt, async d => {
    let g;
    try {
      g = await d.content();
    } catch (m) {
      return {
        mountPath: d.mountPath,
        ok: false,
        dispatched: false,
        error: n.aborted ? "wall-clock timeout" : m instanceof Error && m.message ? m.message : "upload failed"
      };
    }
    try {
      const m = await ur(t, r, g, at(d.displayName ?? f.posix.basename(d.mountPath)), n);
      try {
        const y = await _r(e, m.id, d.mountPath, n);
        return {
          mountPath: d.mountPath,
          ok: true,
          dispatched: y.stage_dispatched === true,
          bytes: Number(y.file.size_bytes)
        };
      } finally {
        hr(t, r, m.id).catch(() => {});
      }
    } catch (m) {
      const y = m instanceof Error ? m.message : "";
      return {
        mountPath: d.mountPath,
        ok: false,
        dispatched: false,
        error: n.aborted ? "wall-clock timeout" : y.startsWith("HTTP ") ? y : "upload failed"
      };
    }
  });
  const s = a.filter(d => d.ok).length;
  const c = a.filter(d => d.ok && d.dispatched).length;
  if (s > 0 && c < s) {
    await o.sleep(Xt);
  }
  return a;
}
async function dt(e, t, r) {
  const i = new Array(e.length);
  let n = 0;
  const a = Array.from({
    length: Math.min(t, e.length)
  }, async () => {
    while (n < e.length) {
      const s = n++;
      i[s] = await r(e[s], s);
    }
  });
  await Promise.all(a);
  return i;
}
function Sr(e) {
  if (e.isFile()) {
    return "file";
  } else if (e.isDirectory()) {
    return "dir";
  } else if (e.isSymbolicLink()) {
    return "symlink";
  } else {
    return "other";
  }
}
function kr(e) {
  if (e === "~") {
    return I.homedir();
  }
  if (e.startsWith("~/") || e.startsWith("~\\")) {
    const t = I.homedir();
    const r = f.normalize(f.join(t, e.slice(2)));
    const i = f.relative(t, r);
    if (i === ".." || i.startsWith(".." + f.sep) || f.isAbsolute(i)) {
      return e;
    } else {
      return r;
    }
  }
  return e;
}
function Re(e, t) {
  const r = kr(e);
  const i = u.validateDispatchPath(r, t);
  if (i.ok || r === e) {
    return i;
  } else {
    return {
      ok: false,
      error: i.error.replace(r, () => e)
    };
  }
}
async function Tr(e, t, r) {
  const i = (l, v, h) => {
    o.logCoworkEvent("lam_remote_list_dir", {
      parent_session_id: K(e),
      success: l,
      entry_count: v,
      error_message: h
    });
  };
  const n = Re(t.path, "path");
  if (!n.ok) {
    i(false, 0, "path_validation_failed");
    return u.textResult(n.error, true);
  }
  await J(r);
  const a = ae(r);
  if (a.length === 0) {
    i(false, 0, "no_trusted_folders");
    return u.textResult("No folders are connected to Cowork on this device. Ask the user to connect one.", true);
  }
  const s = await be(n.resolved, t.path, a, false);
  if (s.errKind) {
    i(false, 0, s.errKind);
    return u.textResult(s.errText ?? `${t.path} is not permitted.`, true);
  }
  const c = s.resolved;
  let d;
  try {
    d = await H(c, a, () => M.stat(c));
  } catch (l) {
    if (b(l, "ENOENT")) {
      i(false, 0, "not_found");
      return u.textResult(`${t.path} does not exist.`, true);
    } else if (b(l, "EPERM", "EACCES")) {
      i(false, 0, "os_permission_denied");
      return u.textResult(G(t.path), true);
    } else {
      i(false, 0, "stat_failed");
      return u.textResult(`Could not stat ${t.path}.`, true);
    }
  }
  if (!d.isDirectory()) {
    i(false, 0, "not_a_directory");
    return u.textResult(`${t.path} is not a directory.`, true);
  }
  const g = t.recursive ?? false;
  const m = [];
  let y = false;
  const S = ie * 4;
  const P = [{
    abs: c,
    rel: "",
    depth: 0
  }];
  try {
    while (P.length > 0 && !y) {
      const {
        abs: l,
        rel: v,
        depth: h
      } = P.shift();
      let E;
      try {
        E = h === 0 ? await H(l, a, () => M.readdir(l, {
          withFileTypes: true
        })) : await M.readdir(l, {
          withFileTypes: true
        });
      } catch (_) {
        if (h === 0) {
          throw _;
        }
        continue;
      }
      if (E.length > S) {
        i(false, 0, "too_wide");
        return u.textResult(`A directory at or under ${t.path} has ${E.length} entries, which exceeds the safety limit of ${S}.`, true);
      }
      E.sort((_, R) => _.name.localeCompare(R.name));
      for (const _ of E) {
        if (m.length >= ie) {
          y = true;
          break;
        }
        const R = v === "" ? _.name : `${v}/${_.name}`;
        const x = {
          name: R,
          type: Sr(_)
        };
        if (h > 0) {
          x.depth = h;
        }
        if (_.isFile()) {
          try {
            const V = await M.stat(f.join(l, _.name));
            x.size = V.size;
            x.mtimeMs = Math.floor(V.mtimeMs);
          } catch {}
        }
        if (g && _.isDirectory()) {
          if (h < _e) {
            P.push({
              abs: f.join(l, _.name),
              rel: R,
              depth: h + 1
            });
          } else {
            x.depthCapped = true;
          }
        }
        m.push(x);
      }
    }
  } catch (l) {
    if (b(l, "EPERM", "EACCES")) {
      i(false, 0, "os_permission_denied");
      return u.textResult(G(t.path), true);
    } else if (b(l, "ENOTDIR")) {
      i(false, 0, "not_a_directory");
      return u.textResult(`${t.path} is not a directory.`, true);
    } else {
      i(false, 0, "readdir_failed");
      return u.textResult(`Failed to list ${t.path}.`, true);
    }
  }
  i(true, m.length);
  o.logger.info("[remote-file] listed %d entr%s%s", m.length, m.length === 1 ? "y" : "ies", y ? " (truncated)" : "");
  const p = {
    entries: m
  };
  if (y) {
    p.truncated = true;
  }
  return u.textResult(JSON.stringify(p));
}
async function br(e, t, r) {
  const i = qt();
  const n = t.paths ?? [];
  const a = t.artifact_ids ?? [];
  const s = (l, v, h, E, _, R = 0) => {
    o.logCoworkEvent("lam_remote_stage", {
      parent_session_id: K(e),
      success: l === "ok",
      file_count: v,
      total_bytes: h,
      ok_count: E,
      fail_count: _,
      dispatched_count: R,
      artifact_count: a.length,
      error_message: l === "ok" ? undefined : l
    });
  };
  if (!r) {
    s("session_id_unavailable", 0, 0, 0, 0);
    return u.textResult(ze, true);
  }
  if (n.length === 0 && a.length === 0) {
    s("no_inputs", 0, 0, 0, 0);
    return u.textResult("Provide paths, artifact_ids, or both — at least one is required.", true);
  }
  if (n.length + a.length > $) {
    s("too_many_inputs", 0, 0, 0, 0);
    return u.textResult(`paths and artifact_ids together exceed the ${$} per-call limit; call again with fewer entries.`, true);
  }
  await J(r);
  const c = ae(r);
  if (n.length > 0 && c.length === 0) {
    s("no_trusted_folders", 0, 0, 0, 0);
    return u.textResult("No folders are connected to Cowork on this device. Ask the user to connect one.", true);
  }
  const d = wt.deriveMountNames([...c]);
  const g = [...new Set(n)];
  const m = [];
  const y = new Set();
  for (const l of g) {
    const v = Re(l, "paths");
    if (!v.ok) {
      s("path_validation_failed", 0, 0, 0, 0);
      return u.textResult(v.error, true);
    }
    const h = await be(v.resolved, l, c, false);
    if (h.errKind) {
      s(h.errKind, 0, 0, 0, 0);
      return u.textResult(h.errText ?? `${l} is not permitted.`, true);
    }
    if (y.has(h.resolved)) {
      continue;
    }
    y.add(h.resolved);
    const E = tt(h.resolved, c);
    if (E === undefined) {
      s("containment_failed", 0, 0, 0, 0);
      return u.textResult(`${l} is not inside a folder connected to Cowork on this device.`, true);
    }
    m.push({
      raw: l,
      resolved: h.resolved,
      containerPath: Er(h.resolved, c, d),
      owningRoot: E.root,
      rel: E.rel
    });
  }
  let S;
  if (a.length > 0) {
    if (!o.isFeatureEnabled(We)) {
      s("artifact_read_gate_off", 0, 0, 0, 0);
      return u.textResult("Artifact staging is not enabled on this device.", true);
    }
    if (!o.coworkArtifactManager.isInitialized()) {
      s("artifact_manager_not_initialized", 0, 0, 0, 0);
      return u.textResult("The Cowork artifact store is not available on this device.", true);
    }
    await o.coworkArtifactManager.ready();
    S = o.coworkArtifactManager.getInitEpoch();
    const l = new Set();
    for (const v of a) {
      let h;
      try {
        h = o.sanitizeTaskId(v);
      } catch {
        s("artifact_bad_id", 0, 0, 0, 0);
        return u.textResult("Artifact id must contain at least one letter or number.", true);
      }
      if (l.has(h)) {
        continue;
      }
      l.add(h);
      if (!o.coworkArtifactManager.has(h)) {
        s("artifact_not_found", 0, 0, 0, 0);
        return u.textResult(`Artifact "${h}" not found on this device. Use list_artifacts to see existing artifact ids.`, true);
      }
      if (o.coworkArtifactManager.isSharee(h)) {
        s("artifact_sharee", 0, 0, 0, 0);
        return u.textResult(`Artifact "${h}" was shared with the user and cannot be staged from this device.`, true);
      }
      let E;
      try {
        E = await o.coworkArtifactManager.resolveArtifactReadSource(h);
      } catch (_) {
        if (b(_, "ENOENT")) {
          s("artifact_missing_on_disk", 0, 0, 0, 0);
          return u.textResult(`Artifact "${h}" has no content on this device.`, true);
        } else {
          s("artifact_resolve_failed", 0, 0, 0, 0);
          return u.textResult(`Artifact "${h}" is not available on this device.`, true);
        }
      }
      m.push({
        raw: `Artifact "${h}"`,
        resolved: f.join(E.root, E.rel),
        containerPath: `${oe}/${je}/${h}/${f.posix.basename(E.rel)}`,
        owningRoot: E.root,
        rel: E.rel,
        artifactSlug: h
      });
    }
  }
  const P = new Map();
  const p = async l => {
    const v = P.get(l);
    if (v !== undefined) {
      return v;
    }
    const h = await o.SafeRoot.open(l, "vm");
    P.set(l, h);
    return h;
  };
  try {
    let l = 0;
    for (const w of m) {
      let A;
      try {
        const T = async () => {
          const k = await p(w.owningRoot);
          if (!ge(k, w.resolved, w.rel)) {
            throw new o.PathEscapeError(w.rel);
          }
          return k.stat(w.rel);
        };
        A = w.artifactSlug !== undefined ? await T() : await H(w.resolved, c, T, {
          mode: "notify"
        });
      } catch (T) {
        if (T instanceof o.SymlinkEncounteredError || T instanceof o.PathEscapeError) {
          s("not_a_file", 0, 0, 0, 0);
          return u.textResult(`${w.raw} is not a regular file.`, true);
        }
        const k = T instanceof o.UnsafeRootError && T.cause !== undefined ? T.cause : T;
        if (b(k, "ENOENT")) {
          s("not_found", 0, 0, 0, 0);
          return u.textResult(`${w.raw} does not exist.`, true);
        } else if (b(k, "EPERM", "EACCES")) {
          s("os_permission_denied", 0, 0, 0, 0);
          return u.textResult(w.artifactSlug !== undefined ? `Artifact "${w.artifactSlug}" is not readable on this device.` : G(w.raw, k), true);
        } else {
          s("stat_failed", 0, 0, 0, 0);
          return u.textResult(w.artifactSlug !== undefined ? `Artifact "${w.artifactSlug}" could not be read on this device.` : `Could not stat ${w.raw}.`, true);
        }
      }
      if (!A.isFile()) {
        s("not_a_file", 0, 0, 0, 0);
        return u.textResult(`${w.raw} is not a regular file.`, true);
      }
      if (A.size > i.fileBytes) {
        s("file_too_large", 0, 0, 0, 0);
        return u.textResult(`${w.raw} exceeds the ${i.fileMb}MB per-file limit.`, true);
      }
      if (process.platform === "darwin" && A.size > 0 && A.blocks === 0) {
        s("dataless_file", 0, 0, 0, 0);
        return u.textResult(`${w.raw} is a cloud placeholder (not downloaded). Open it in Finder to download it first.`, true);
      }
      l += A.size;
    }
    if (l > i.totalBytes) {
      s("too_large", m.length, l, 0, 0);
      return u.textResult(`Total size ${l} bytes exceeds the ${i.totalMb}MB per-call limit; call again with fewer files.`, true);
    }
    const {
      apiHost: v,
      bearer: h
    } = await st();
    if (!h) {
      s("no_oauth_token", m.length, l, 0, 0);
      return u.textResult("Not signed in for file uploads. Sign in to Cowork and try again.", true);
    }
    const E = new AbortController();
    const _ = setTimeout(() => E.abort(), ke);
    try {
      const w = await pr(r, E.signal);
      if (w.status >= 400 && w.status < 500) {
        clearTimeout(_);
        s("session_preflight_4xx", m.length, l, 0, 0);
        return u.textResult(`session_id not found or not accessible (HTTP ${w.status}). The id is server-supplied; this likely means the session has been deleted or the device's session-key cookie is stale.`, true);
      }
    } catch {}
    let R = 0;
    const x = new Array(m.length);
    const V = m.map((w, A) => ({
      mountPath: w.containerPath,
      content: async () => {
        if (w.artifactSlug !== undefined && (o.coworkArtifactManager.getInitEpoch() !== S || !o.coworkArtifactManager.has(w.artifactSlug) || o.coworkArtifactManager.isSharee(w.artifactSlug))) {
          throw new Error("artifact changed on this device");
        }
        let T;
        try {
          const k = await p(w.owningRoot);
          if (!ge(k, w.resolved, w.rel)) {
            throw new o.PathEscapeError(w.rel);
          }
          const C = await k.openFile(w.rel, ne.constants.O_RDONLY);
          try {
            const Z = await C.stat();
            if (w.artifactSlug !== undefined && Z.nlink !== 1) {
              throw new Error("artifact changed on this device");
            }
            x[A] = Math.floor(Z.mtimeMs);
            if (Z.size > i.fileBytes) {
              throw new Error(`file exceeds ${i.fileMb}MB per-file limit`);
            }
            R += Z.size;
            if (R > i.totalBytes) {
              throw new Error(`total exceeds ${i.totalMb}MB per-call limit; call again with fewer files`);
            }
            T = await C.readFile({
              maxBytes: i.fileBytes,
              signal: E.signal
            });
          } finally {
            await C.close().catch(() => {});
          }
        } catch (k) {
          if (k instanceof o.SymlinkEncounteredError || k instanceof o.PathEscapeError || k instanceof o.NotRegularFileError) {
            throw new Error("path changed between validation and read");
          }
          if (k instanceof o.SizeLimitError) {
            throw new Error(`file exceeds ${i.fileMb}MB per-file limit`);
          }
          const C = k instanceof Error ? k.message : "";
          throw new Error(C.startsWith("file exceeds ") || C.startsWith("total exceeds ") || C === "artifact changed on this device" ? C : "upload failed");
        }
        if (T.length > i.fileBytes) {
          throw new Error(`file exceeds ${i.fileMb}MB per-file limit`);
        }
        return T;
      }
    }));
    const ut = await lt(r, v, h, V, E.signal);
    clearTimeout(_);
    const j = m.map((w, A) => {
      const T = ut[A];
      const k = w.artifactSlug !== undefined ? {
        artifactId: w.artifactSlug
      } : {
        devicePath: w.raw
      };
      if (T.ok) {
        return {
          ...k,
          stagedPath: w.containerPath,
          mtimeMs: x[A],
          bytes: T.bytes,
          ok: true,
          dispatched: T.dispatched
        };
      } else {
        return {
          ...k,
          ok: false,
          error: T.error
        };
      }
    });
    const ce = j.filter(w => w.ok).length;
    const ht = j.filter(w => w.ok && w.dispatched).length;
    const le = j.length - ce;
    s(le === 0 ? "ok" : "partial", j.length, l, ce, le, ht);
    o.logger.info("[remote-file] staged %d/%d files (%d bytes)", ce, j.length, l);
    return u.textResult(JSON.stringify({
      staged: j
    }), le > 0);
  } finally {
    for (const l of P.values()) {
      await l[Symbol.asyncDispose]().catch(() => {});
    }
  }
}
async function Rr(e, t, r) {
  const i = (p, l, v) => {
    o.logCoworkEvent("lam_remote_commit", {
      parent_session_id: K(e),
      success: l === 0,
      written_count: p,
      rejected_count: l,
      error_message: v
    });
  };
  if (!r) {
    i(0, t.files.length, "session_id_unavailable");
    return u.textResult(ze, true);
  }
  await J(r);
  const n = ae(r);
  if (n.length === 0) {
    i(0, t.files.length, "no_trusted_folders");
    return u.textResult("No folders are connected to Cowork on this device. Ask the user to connect one.", true);
  }
  const a = await o.getLastActiveOrg();
  const s = [];
  const c = [];
  const d = [];
  for (const p of t.files) {
    const l = Re(p.devicePath, "devicePath");
    if (!l.ok) {
      c.push({
        devicePath: p.devicePath,
        reason: l.error
      });
      continue;
    }
    const v = await be(l.resolved, p.devicePath, n, true);
    if (v.errKind) {
      c.push({
        devicePath: p.devicePath,
        reason: v.errText ?? "not permitted"
      });
      continue;
    }
    if (p.expectedMtimeMs !== undefined && !t.force) {
      try {
        const h = await H(v.resolved, n, () => M.stat(v.resolved), {
          mode: "notify"
        });
        if (process.platform === "darwin" && h.size > 0 && h.blocks === 0) {
          c.push({
            devicePath: p.devicePath,
            reason: "device file is a cloud placeholder (not downloaded); open it in Finder first or set force=true"
          });
          continue;
        }
        if (Math.floor(h.mtimeMs) !== p.expectedMtimeMs) {
          c.push({
            devicePath: p.devicePath,
            reason: "device file changed since stage; re-stage with device_stage_files to pick up the user's edit and reapply your change. force=true overwrites the user's newer file — use only if that's intended.",
            deviceMtimeMs: Math.floor(h.mtimeMs),
            deviceBytes: h.size
          });
          continue;
        }
      } catch (h) {
        if (b(h, "EPERM", "EACCES")) {
          c.push({
            devicePath: p.devicePath,
            reason: G(p.devicePath, h)
          });
          continue;
        }
        if (!b(h, "ENOENT")) {
          c.push({
            devicePath: p.devicePath,
            reason: "could not stat device file"
          });
          continue;
        }
        c.push({
          devicePath: p.devicePath,
          reason: "device file changed since stage (it was deleted); force=true will recreate it — check with the user if the deletion was intentional."
        });
        continue;
      }
    }
    if (!a) {
      c.push({
        devicePath: p.devicePath,
        reason: "could not resolve the active org on this device"
      });
      continue;
    }
    d.push({
      devicePath: p.devicePath,
      resolved: v.resolved,
      fileUuid: p.fileUuid,
      expectedMtimeMs: p.expectedMtimeMs
    });
  }
  if (d.length === 0) {
    i(0, c.length, "all_rejected");
    return u.textResult(JSON.stringify({
      written: s,
      rejected: c
    }), true);
  }
  const g = new Map();
  const m = async p => {
    const l = g.get(p);
    if (l !== undefined) {
      return l;
    }
    const v = await o.SafeRoot.open(p, "vm");
    g.set(p, v);
    return v;
  };
  const y = new AbortController();
  const S = setTimeout(() => y.abort(), ke);
  let P = 0;
  try {
    for (const p of d) {
      try {
        const l = await ct(a, p.fileUuid, y.signal);
        P += l.length;
        if (P > Jt) {
          const _ = "total exceeds 100MB per-call commit limit; call again with fewer files";
          c.push({
            devicePath: p.devicePath,
            reason: _
          });
          for (const R of d.slice(d.indexOf(p) + 1)) {
            c.push({
              devicePath: R.devicePath,
              reason: _
            });
          }
          break;
        }
        if (l.length > he) {
          c.push({
            devicePath: p.devicePath,
            reason: "file exceeds 20MB per-file commit limit"
          });
          continue;
        }
        const v = tt(p.resolved, n);
        if (v === undefined) {
          throw new W("path changed between validation and write");
        }
        const h = await H(p.resolved, n, () => m(v.root), {
          mode: "notify"
        });
        if (!ge(h, p.resolved, v.rel)) {
          throw new W("path changed between validation and write");
        }
        const E = p.expectedMtimeMs !== undefined && !t.force;
        await H(p.resolved, n, async () => {
          if (E) {
            try {
              await o.retryTransientLock(() => h.withFile(v.rel, ne.constants.O_RDONLY, async _ => {
                const R = await _.stat();
                if (Math.floor(R.mtimeMs) !== p.expectedMtimeMs) {
                  throw new W("device file changed during commit; re-stage with device_stage_files and reapply your change. force=true would overwrite the user's newer file.", {
                    deviceMtimeMs: Math.floor(R.mtimeMs),
                    deviceBytes: R.size
                  });
                }
              }));
            } catch (_) {
              throw b(_, "ENOENT") ? new W("device file changed during commit (it was deleted); force=true will recreate it — check with the user if the deletion was intentional.") : _;
            }
          } else {
            const _ = v.rel.split("/").slice(0, -1).join("/");
            if (_.length > 0) {
              await h.mkdir(_, {
                recursive: true
              });
            }
          }
          await h.writeFileAtomic(v.rel, l);
        }, {
          mode: "notify"
        });
        s.push(p.devicePath);
      } catch (l) {
        const v = l instanceof o.UnsafeRootError ? l.cause : undefined;
        const h = y.signal.aborted ? "wall-clock timeout" : l instanceof W ? l.message : l instanceof o.SymlinkEncounteredError || l instanceof o.PathEscapeError ? "path changed between validation and write" : l instanceof o.NotRegularFileError ? "target exists and is not a regular file" : v !== undefined && b(v, "EPERM", "EACCES") ? G(p.devicePath, v) : v !== undefined ? "the connected folder is no longer accessible on this device; ask the user to reconnect it" : b(l, "EPERM", "EACCES") ? G(p.devicePath, l) : b(l, "ENOSPC") ? "device disk full" : b(l, "EROFS") ? "device filesystem is read-only" : b(l, "EBUSY") ? `${p.devicePath} is open in another application` : l instanceof Error && l.message.startsWith("HTTP ") ? l.message : "fetch or write failed";
        const E = l && typeof l == "object" && "code" in l ? String(l.code) : "none";
        o.logger.warn("[remote-file] commit: file failed (errno=%s)", E);
        c.push({
          devicePath: p.devicePath,
          reason: h,
          ...(l instanceof W && l.deviceMtimeMs !== undefined && {
            deviceMtimeMs: l.deviceMtimeMs,
            deviceBytes: l.deviceBytes
          })
        });
      }
    }
  } finally {
    clearTimeout(S);
    for (const p of g.values()) {
      await p[Symbol.asyncDispose]().catch(() => {});
    }
  }
  i(s.length, c.length);
  o.logger.info("[remote-file] committed %d files, %d rejected", s.length, c.length);
  return u.textResult(JSON.stringify({
    written: s,
    rejected: c
  }), c.length > 0);
}
function $e(e) {
  return u.textResult(`An artifact with id "${e}" already exists on this device (it may not appear in list_artifacts). Choose a different id.`, true);
}
async function ft(e, t, r) {
  const i = await o.getLastActiveOrg();
  if (!i) {
    t("org_unavailable");
    return {
      ok: false,
      result: u.textResult("Could not resolve the active organization on this device.", true)
    };
  }
  const n = new AbortController();
  const a = setTimeout(() => n.abort(), ke);
  try {
    const s = await ct(i, e, n.signal);
    if (s.length > Fe) {
      t("html_too_large");
      return {
        ok: false,
        result: u.textResult(`file_uuid content is too large (${Math.round(s.length / 1024)} KiB, limit ${Fe / 1024} KiB).`, true)
      };
    } else {
      return {
        ok: true,
        html: s.toString("utf8"),
        orgUuid: i
      };
    }
  } catch (s) {
    t("html_fetch_failed");
    o.logger.error("[remote-file] %s html fetch failed:", r, s);
    const c = s instanceof Error ? s.message : String(s);
    return {
      ok: false,
      result: u.textResult(c.startsWith("HTTP ") ? `Failed to fetch file_uuid: ${c}. Call SendUserFile and pass the file_uuid it returns.` : "Failed to fetch file_uuid.", true)
    };
  } finally {
    clearTimeout(a);
  }
}
async function Ar(e, t) {
  const r = s => {
    o.logCoworkEvent("lam_remote_create_artifact", {
      parent_session_id: K(e),
      success: s === "ok",
      error_message: s === "ok" ? undefined : s
    });
  };
  if (!o.isFeatureEnabled("1947305033")) {
    r("gate_off");
    return u.textResult("create_artifact is not enabled on this device.", true);
  }
  if (!o.coworkArtifactManager.isInitialized()) {
    r("manager_not_initialized");
    return u.textResult("The Cowork artifact store is not available on this device.", true);
  }
  await o.coworkArtifactManager.ready();
  let i;
  try {
    i = o.sanitizeTaskId(t.id);
  } catch {
    r("bad_id");
    return u.textResult("Artifact id must contain at least one letter or number.", true);
  }
  if (await o.coworkArtifactManager.isSlugTaken(i)) {
    r("slug_taken");
    return $e(i);
  }
  const n = o.coworkArtifactManager.getInitEpoch();
  const a = await ft(t.file_uuid, r, "create_artifact");
  if (!a.ok) {
    return a.result;
  }
  if (await o.coworkArtifactManager.isSlugTaken(i)) {
    r("slug_state_changed");
    return $e(i);
  }
  if (o.coworkArtifactManager.getInitEpoch() !== n) {
    r("account_switched");
    return u.textResult(`Artifact "${i}" could not be created — the active account changed on this device.`, true);
  }
  try {
    await o.coworkArtifactManager.create(i, a.html, {
      mcpTools: [],
      mcpServerNames: [],
      description: t.description
    });
  } catch (s) {
    r("create_failed");
    o.logger.error("[remote-file] create_artifact store write failed:", s);
    return u.textResult("Failed to create artifact.", true);
  }
  r("ok");
  return u.textResult(`Artifact "${i}" created on the connected desktop.`);
}
async function Mr(e, t) {
  var d;
  const r = g => {
    o.logCoworkEvent("lam_remote_update_artifact", {
      parent_session_id: K(e),
      success: g === "ok",
      error_message: g === "ok" ? undefined : g
    });
  };
  if (!o.isFeatureEnabled("1947305033")) {
    r("gate_off");
    return u.textResult("update_artifact is not enabled on this device.", true);
  }
  if (!o.coworkArtifactManager.isInitialized()) {
    r("manager_not_initialized");
    return u.textResult("The Cowork artifact store is not available on this device.", true);
  }
  await o.coworkArtifactManager.ready();
  let i;
  try {
    i = o.sanitizeTaskId(t.id);
  } catch {
    r("bad_id");
    return u.textResult("Artifact id must contain at least one letter or number.", true);
  }
  if (!o.coworkArtifactManager.has(i)) {
    r("not_found");
    return u.textResult(`Artifact "${i}" not found on this device. Use list_artifacts to see existing artifact ids, or create_artifact to create a new one.`, true);
  }
  if (o.coworkArtifactManager.isSharee(i)) {
    r("read_only_sharee");
    return u.textResult(`Artifact "${i}" was shared with the user and is read-only on this device.`, true);
  }
  const n = o.coworkArtifactManager.getInitEpoch();
  const a = await ft(t.file_uuid, r, "update_artifact");
  if (!a.ok) {
    return a.result;
  }
  if (o.coworkArtifactManager.getInitEpoch() !== n || !o.coworkArtifactManager.has(i) || o.coworkArtifactManager.isSharee(i)) {
    r("slug_state_changed");
    return u.textResult(`Artifact "${i}" is no longer writable on this device.`, true);
  }
  const s = (((d = o.coworkArtifactManager.getMcpTools(i)) == null ? undefined : d.length) ?? 0) > 0;
  try {
    await o.coworkArtifactManager.update(i, a.html, {
      mcpTools: [],
      mcpServerNames: [],
      description: t.description
    });
  } catch (g) {
    r("update_failed");
    o.logger.error("[remote-file] update_artifact store write failed:", g);
    return u.textResult("Failed to update artifact.", true);
  }
  r("ok");
  const c = s ? " Its connector grants were cleared — the remote bridge replaces HTML without re-approving connector access, so the user must re-grant any connectors the artifact needs." : "";
  return u.textResult(`Artifact "${i}" updated on the connected desktop.${c}`);
}
async function Pr(e) {
  const t = n => {
    o.logCoworkEvent("lam_remote_list_artifacts", {
      parent_session_id: K(e),
      success: n === "ok",
      error_message: n === "ok" ? undefined : n
    });
  };
  if (!o.isFeatureEnabled("1947305033")) {
    t("gate_off");
    return u.textResult("list_artifacts is not enabled on this device.", true);
  }
  if (!o.coworkArtifactManager.isInitialized()) {
    t("manager_not_initialized");
    return u.textResult("The Cowork artifact store is not available on this device.", true);
  }
  await o.coworkArtifactManager.ready();
  let r;
  try {
    r = await o.coworkArtifactManager.getAllWithDiskStatus();
  } catch (n) {
    t("list_failed");
    o.logger.error("[remote-file] list_artifacts read failed:", n);
    return u.textResult("Failed to list artifacts.", true);
  }
  const i = r.filter(n => {
    var a;
    return (a = n.errors) == null || !a.includes(o.CoworkArtifactError.ArtifactFolderMissing);
  }).map(n => ({
    id: n.id,
    name: n.name,
    description: n.description,
    createdAt: new Date(n.createdAt).toISOString(),
    updatedAt: n.updatedAt ? new Date(n.updatedAt).toISOString() : undefined
  }));
  t("ok");
  if (i.length === 0) {
    return u.textResult("No artifacts found on this device. Use create_artifact to create one.");
  } else {
    return u.textResult(JSON.stringify(i, null, 2));
  }
}
function xr(e) {
  const r = [{
    name: Ne,
    description: `List the contents of a directory on the connected device. Call this with one of the session's folder roots from \`get_device_info.connectedFolders\` (or a subdirectory under one) to see what files exist before staging. With recursive=true, walks subdirectories up to depth ${_e}. Returns JSON: {"entries":[{name,type,size?,mtimeMs?,depth?,depthCapped?}],truncated?}. \`name\` is relative to \`path\`; \`type\` is "file" | "dir" | "symlink" | "other"; \`size\` (bytes) and \`mtimeMs\` are set for regular files; \`depth\` for nested entries; \`depthCapped:true\` marks a dir whose children were not walked because the depth limit was reached. Output is capped at ${ie} entries (truncated:true when hit) — narrow to a subdirectory if you hit the cap.`,
    schema: Ge,
    handler: (n, a) => Tr(e, er.parse(n), a)
  }, {
    name: Ue,
    description: `Copy files from this device into the session's container at ${oe}/<folder-name>/<relative-path>. Files are visible to bash/Read on the next turn (this tool waits out the mount's dir-cache before returning). ≤${$} files, ≤${Ee}MB per file, ≤${Se}MB total per call by default (configurable; error text states the active limit). Can also stage a Cowork artifact's current HTML by id via artifact_ids (see that parameter's description). Returns {"staged":[{devicePath|artifactId,stagedPath,mtimeMs,bytes,ok,error?}]}. mtimeMs is the device-side modification time at upload, suitable as expectedMtimeMs in device_commit_files. The staged copy is a point-in-time snapshot. Before deriving an output from a file you staged more than a few minutes ago, re-check its mtimeMs via device_list_dir and re-stage if it changed — otherwise you risk working from a version the user has since edited.`,
    schema: He,
    handler: (n, a) => br(e, tr.parse(n), a)
  }, {
    name: Be,
    description: `Copy output files from this container back to the user's device. Call this for every file deliverable the user asked for — a file that isn't committed never reaches their disk. Pass fileUuid (from a prior SendUserFile call). Each devicePath must be absolute (~ is expanded on the device) and resolve inside a connected folder. Refuses if the device file changed since stage (mtime guard) — re-stage to pick up the user's edit rather than forcing; force=true overwrites unconditionally. ≤${$} files, ≤20MB per file, ≤100MB total per call. Returns {"written":[devicePath],"rejected":[{devicePath,reason,deviceMtimeMs?,deviceBytes?}]}. On mtime-drift rejections the entry includes the device file's current mtimeMs and size so you can gauge what changed.`,
    schema: Ke,
    handler: (n, a) => Rr(e, rr.parse(n), a)
  }];
  if (o.isFeatureEnabled("1947305033")) {
    const n = o.isFeatureEnabled(We) ? " To read an artifact's current HTML, pass its id to device_stage_files' artifact_ids — the content is staged into this container for Read." : "";
    r.push({
      name: o.LIST_ARTIFACTS,
      description: "List all Cowork artifacts on a connected Claude desktop app. Returns each artifact's id, name, description, createdAt, and updatedAt. Use this to find the id of an existing artifact before calling update_artifact. With more than one desktop connected, pass the `device` parameter (the exact name from list_devices) so list, create_artifact, and update_artifact target the same desktop. Only works when the user is connected via the Claude desktop app — artifacts render in the desktop Cowork sidebar and do not appear on web or mobile." + n,
      schema: Qt,
      handler: () => Pr(e)
    });
    r.push({
      name: o.CREATE_ARTIFACT,
      description: "Create a new persisted Cowork artifact on a connected Claude desktop app. This is the default way to create artifacts in remote Cowork — use it whenever the user asks for an artifact or wants to look at something again: status pages, recurring reports, or interactive explorers. Write the complete self-contained HTML document to a file, call SendUserFile with that path, then pass the file_uuid it returns here. Pass the same `device` parameter you used for list_artifacts (from list_devices) so the artifact lands on the intended desktop. Keep the HTML self-contained: inline all CSS and JS, use data: URLs for images. Only works when the user is connected via the Claude desktop app — the artifact renders in the desktop Cowork sidebar and does not appear on web or mobile. Remote-created artifacts start with no connector grants; the user can grant them in the desktop UI if needed.",
      schema: Xe,
      handler: a => Ar(e, ir.parse(a))
    });
    r.push({
      name: o.UPDATE_ARTIFACT,
      description: "Update an existing Cowork artifact on a connected Claude desktop app. Call list_artifacts first to find the artifact id, write the updated self-contained HTML document to a file, call SendUserFile with that path, then pass the file_uuid it returns here. Pass the same `device` parameter you used for list_artifacts (from list_devices) so the update lands on the same desktop. Same constraints as local artifacts: inline all CSS and JS, use data: URLs for images. Only works when the user is connected via the Claude desktop app — the artifact renders in the desktop Cowork sidebar and does not appear on web or mobile. A remote update clears the artifact's connector grants; the user re-grants them in the desktop UI if needed." + (n ? " To modify existing content rather than replace it, first stage the current HTML via device_stage_files' artifact_ids and Read it before writing the updated document." : ""),
      schema: Ye,
      handler: a => Mr(e, nr.parse(a))
    });
  }
  const i = new Map(r.map(n => [n.name, n.handler]));
  return {
    tools: r.map(n => ({
      name: n.name,
      description: n.description,
      inputSchema: u.zodShapeToJsonSchema(n.schema),
      _meta: {
        "anthropic/alwaysLoad": true
      }
    })),
    handleCall: async (n, a, s) => {
      const c = i.get(n);
      if (!c) {
        return u.textResult(`Unknown tool: ${n}`, true);
      }
      try {
        return await c(a, s);
      } catch (d) {
        if (d instanceof o.ZodError) {
          const g = d.issues.map(m => `${m.path.join(".") || "(root)"}: ${m.message}`).join("; ");
          o.logger.warn("[remote-file] %s input validation: %s", n, g);
          return u.textResult(`${n} input invalid: ${g}. Check the tool schema.`, true);
        }
        o.logger.error("[remote-file] %s unhandled error:", n, d);
        return u.textResult(`${n} failed.`, true);
      }
    }
  };
}
exports.DEVICE_COMMIT_FILES = Be;
exports.DEVICE_LIST_DIR = Ne;
exports.DEVICE_STAGE_FILES = Ue;
exports._testAttestation = vr;
exports.awaitSessionGrantsSettled = J;
exports.buildRemoteFileTools = xr;
exports.clearRemoteSessionFolderGrants = dr;
exports.getCoworkApiAuth = st;
exports.getSessionGrantedFolders = fr;
exports.getTrustedFolderEntries = Qe;
exports.getTrustedFolders = ae;
exports.grantRemoteSessionFolders = cr;
exports.isRemoteOnlyDangerousWrite = et;
exports.isSessionGrantPoisoned = ar;
exports.mapWithConcurrency = dt;
exports.realPathsEqualBounded = Ze;
exports.registerPendingSessionGrant = or;
exports.revokeRemoteSessionFolderEverywhere = lr;
exports.sanitizeFilesApiFilename = at;
exports.stageBlobsToSession = lt;
//# sourceMappingURL=index.chunk-D4sIQt6U.js.map