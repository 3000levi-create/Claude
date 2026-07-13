"use strict";

(function () {
  try {
    var p = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    p.SENTRY_RELEASE = {
      id: "df1d8a339dfabcf359af7144fe142b59ff7d9a0f"
    };
  } catch {}
})();
try {
  (function () {
    var p = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    var e = new p.Error().stack;
    if (e) {
      p._sentryDebugIds = p._sentryDebugIds || {};
      p._sentryDebugIds[e] = "c8c71d52-eb78-48c7-a789-4306abec4542";
      p._sentryDebugIdIdentifier = "sentry-dbid-c8c71d52-eb78-48c7-a789-4306abec4542";
    }
  })();
} catch {}
const yn = require("node:crypto");
const Sn = require("node:events");
const Si = require("node:os");
const Yt = require("electron");
const ne = require("./index.chunk-c42vKsva.js");
const Ht = require("node:fs");
const Ut = require("node:path");
const Ft = require("node:fs/promises");
const wi = require("node:stream/promises");
const Zi = require("node:zlib");
const St = require("./index.chunk-BDRRlMkw.js");
const xi = require("node:child_process");
const an = require("node:stream");
const Er = require("net");
const br = require("stream");
const An = require("path");
const En = require("fs");
const es = require("child_process");
const en = require("crypto");
const mr = require("assert");
const Ii = require("buffer");
const ts = require("http");
const ns = require("https");
const rs = require("tls");
const is = require("dns");
const yr = require("events");
const Sr = require("util");
const ss = require("zlib");
const os = require("node:net");
const as = require("node:readline");
function cs(p) {
  const e = Object.create(null, {
    [Symbol.toStringTag]: {
      value: "Module"
    }
  });
  if (p) {
    for (const r in p) {
      if (r !== "default") {
        const y = Object.getOwnPropertyDescriptor(p, r);
        Object.defineProperty(e, r, y.get ? y : {
          enumerable: true,
          get: () => p[r]
        });
      }
    }
  }
  e.default = p;
  return Object.freeze(e);
}
const Vt = cs(Ft);
function fs(p) {
  throw new Error("Could not dynamically require \"" + p + "\". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.");
}
const wn = " is not available for ";
const Ci = {
  probe: "Couldn't inspect the remote machine",
  prepare: "Couldn't prepare the deploy locally",
  exec_channel: "Couldn't run a command on the remote",
  sftp_channel: "Couldn't open an SFTP session",
  bridge_channel: "Couldn't connect to the remote server",
  upload: "Couldn't upload to the remote",
  install: "Couldn't install the Claude CLI on the remote",
  write_secret: "Couldn't write the session token on the remote",
  daemon_start: "Couldn't start the remote server",
  platform: "Unsupported remote platform"
};
const hs = {
  ENOSPC: "the disk is full — free space and retry",
  EDQUOT: "disk quota exceeded — free space and retry",
  ENOTDIR: "a file is in the way of a Claude directory",
  ENOENT: "a required file or directory is missing",
  EACCES: "permission denied",
  EPERM: "permission denied",
  ETXTBSY: "the binary is busy — retry shortly",
  EROFS: "the filesystem is read-only",
  STALLED: "transfer stalled — network may be unreliable",
  DOWNLOAD_FAILED: "the download failed — check your internet connection and retry",
  CHECKSUM_MISMATCH: "the downloaded file failed checksum verification",
  NO_INSTALL_RESULT: "the installer produced no result",
  BAD_INSTALL_RESULT: "the installer produced an unreadable result",
  NO_HOME: "couldn't determine the remote home directory"
};
const Rr = [[/ENOSPC|no space left/i, "ENOSPC"], [/EDQUOT|dis[ck] quota exceeded/i, "EDQUOT"], [/ENOTDIR|not a directory/i, "ENOTDIR"], [/ETXTBSY|text file busy/i, "ETXTBSY"], [/EROFS|read-only file system/i, "EROFS"], [/EACCES|permission denied/i, "EACCES"], [/EPERM|operation not permitted/i, "EPERM"], [/ECONNRESET|connection reset/i, "ECONNRESET"], [/ECONNREFUSED|connection refused/i, "ECONNREFUSED"], [/ETIMEDOUT|\btimed? ?out\b/i, "ETIMEDOUT"], [/EPIPE|broken pipe/i, "EPIPE"], [/EHOSTUNREACH|no route to host/i, "EHOSTUNREACH"], [/EHOSTDOWN|host is down/i, "EHOSTDOWN"], [/ENETUNREACH|network is unreachable/i, "ENETUNREACH"], [/ENETDOWN|network is down/i, "ENETDOWN"], [/ENOTFOUND|getaddrinfo/i, "ENOTFOUND"], [/ENOENT|no such file/i, "ENOENT"]];
const Bi = new Set(["ECONNREFUSED", "ECONNRESET", "ETIMEDOUT", "EPIPE", "EHOSTUNREACH", "EHOSTDOWN", "ENETUNREACH", "ENETDOWN", "ENOTFOUND", "STALLED", "DOWNLOAD_FAILED"]);
const ls = /ENOSPC|EDQUOT|no space left|dis[ck] quota exceeded/i;
function qt(p) {
  const e = un(p);
  if (e === "ENOSPC" || e === "EDQUOT") {
    return true;
  }
  const r = p instanceof Error ? p.message : String(p ?? "");
  return ls.test(r);
}
function Gt(p) {
  const e = un(p);
  if (e === "ENOSPC" || e === "EDQUOT") {
    return e;
  }
  const r = p instanceof Error ? p.message : String(p ?? "");
  if (/EDQUOT|dis[ck] quota exceeded/i.test(r)) {
    return "EDQUOT";
  } else {
    return "ENOSPC";
  }
}
function un(p) {
  const e = p instanceof Error ? p.code : undefined;
  if (e) {
    for (const [k, m] of Rr) {
      if (k.test(e)) {
        return m;
      }
    }
  }
  const y = (p instanceof Error ? p.message : String(p ?? "")).slice(-10000).split(/\r?\n/).reverse().find(k => k.trim());
  if (y) {
    for (const [k, m] of Rr) {
      if (k.test(y)) {
        return m;
      }
    }
  }
}
class Zt extends Error {
  constructor(e) {
    const r = `${Ci[e.phase]}${e.artifact ? ` (${e.artifact})` : ""}`;
    const y = e.hint ?? (e.code ? hs[e.code] : undefined);
    const k = e.code ? ` [${e.code}]` : "";
    super(y ? `${r}: ${y}${k}` : `${r}${k}`);
    this.name = "DeployError";
    this.phase = e.phase;
    this.artifact = e.artifact;
    this.code = e.code;
    this.terminal = e.terminal ?? false;
  }
}
function wr(p) {
  return p instanceof Zt || p instanceof Error && p.name === "DeployError";
}
function _n(p) {
  var e;
  for (const [r, y] of Object.entries(Ci)) {
    if (p.startsWith(y)) {
      return {
        phase: r,
        code: (e = p.match(/\[([A-Z0-9_]+)\]$/)) == null ? undefined : e[1],
        terminal: r === "platform" || p.includes(wn)
      };
    }
  }
}
const xn = {
  probing: "Detecting remote OS and shell...",
  serverSetup: "Deploying Claude Code server to ~/.claude/remote/...",
  cliDownload: "Downloading Claude Code CLI...",
  cliUploadPrefix: "Uploading Claude Code CLI to remote"
};
function us(p) {
  if (p && /checksum verification failed/i.test(p.message)) {
    return {
      reason: "checksum_mismatch",
      error: p.message
    };
  } else if (p && qt(p)) {
    return {
      reason: "disk_full",
      code: Gt(p),
      error: p.message
    };
  } else {
    return {
      reason: "download_failed",
      error: "Download failed. Check your internet connection and try again."
    };
  }
}
class ds {
  constructor() {
    this.preparingPromises = new Map();
    this.storageDir = Ut.join(Yt.app.getPath("userData"), "claude-ssh-remote");
    const e = ne.getClaudeSSHBuildInfo();
    this.requiredVersion = e.version;
    this.manifest = e.manifest;
    this.baseUrl = e.baseUrl;
    ne.sshLogger.info(`[ClaudeSSHManager] Initialized with version ${this.requiredVersion}`);
  }
  getBinaryPath(e) {
    return Ut.join(this.storageDir, this.requiredVersion, `claude-ssh-${e}`);
  }
  getVersionDir() {
    return Ut.join(this.storageDir, this.requiredVersion);
  }
  getDevDistDir() {
    return Ut.join(Yt.app.getAppPath(), "..", "..", "packages", "desktop", "claude-ssh", "dist");
  }
  async binaryExists(e) {
    const r = this.getBinaryPath(e);
    const y = Ut.join(this.getVersionDir(), `.verified-${e}`);
    try {
      await Ft.access(r, Ht.constants.X_OK);
      await Ft.access(y);
      return true;
    } catch {
      return false;
    }
  }
  async downloadBinary(e) {
    const r = this.manifest.platforms[e];
    if (!r) {
      throw new Error(`Platform ${e} not available in claude-ssh manifest`);
    }
    const y = this.getBinaryPath(e);
    const k = this.getVersionDir();
    await ne.mkdirPrivate(k);
    const m = `${this.baseUrl}/${this.requiredVersion}/${e}/claude-ssh.zst`;
    ne.sshLogger.info(`[ClaudeSSHManager] Downloading ${e} from ${m}`);
    const M = {};
    new URL(m);
    const v = Ut.join(k, `download.${e}.${r.checksum.slice(0, 12)}.zst.partial`);
    for (const I of await Ft.readdir(k).catch(() => [])) {
      if (I.startsWith(`download.${e}.`) && I.endsWith(".partial") && I !== Ut.basename(v)) {
        await Ft.unlink(Ut.join(k, I)).catch(() => {});
      }
    }
    await ne.downloadFile({
      url: m,
      tempFilePath: v,
      expectedSha256: r.checksum,
      telemetryKey: "claude_ssh",
      headers: M,
      retries: 0
    });
    try {
      await wi.pipeline(Ht.createReadStream(v), Zi.createZstdDecompress(), ne.createWriteStreamPrivate(y));
    } catch (I) {
      await Ft.unlink(y).catch(() => {});
      throw I;
    }
    await Ft.unlink(v).catch(() => {});
    const R = await Ft.stat(y);
    ne.sshLogger.info(`[ClaudeSSHManager] Decompressed ${e} to ${R.size} bytes (compressed ${r.size}, checksum verified)`);
    await Ft.chmod(y, 493);
    await ne.writeFilePrivate(Ut.join(k, `.verified-${e}`), "");
    ne.sshLogger.info(`[ClaudeSSHManager] Installed ${e} at ${y}`);
  }
  async cleanupOldVersions() {
    try {
      const e = await Ft.readdir(this.storageDir, {
        withFileTypes: true
      });
      for (const r of e.filter(y => y.isDirectory())) {
        if (r.name !== this.requiredVersion) {
          const y = Ut.join(this.storageDir, r.name);
          ne.sshLogger.info(`[ClaudeSSHManager] Removing old version: ${r.name}`);
          await ne.fsExtra.remove(y);
        }
      }
    } catch (e) {
      ne.sshLogger.error("[ClaudeSSHManager] Failed to cleanup old versions: %o", e);
    }
  }
  async prepare(e) {
    if (await this.binaryExists(e)) {
      return {
        ready: true,
        path: this.getBinaryPath(e)
      };
    }
    const r = this.preparingPromises.get(e);
    if (r) {
      return r;
    }
    const y = this.doPrepare(e);
    this.preparingPromises.set(e, y);
    try {
      return await y;
    } finally {
      this.preparingPromises.delete(e);
    }
  }
  async doPrepare(e) {
    if (!this.manifest.platforms[e]) {
      ne.sshLogger.error(`[ClaudeSSHManager] Platform ${e} not in manifest`);
      return {
        ready: false,
        reason: "platform_unavailable",
        error: `claude-ssh is not available for platform ${e}.`
      };
    }
    let y;
    for (let k = 1; k <= 3; k++) {
      try {
        await this.downloadBinary(e);
        this.cleanupOldVersions();
        return {
          ready: true,
          path: this.getBinaryPath(e)
        };
      } catch (m) {
        y = m instanceof Error ? m : new Error(String(m));
        ne.sshLogger.error(`[ClaudeSSHManager] Download attempt ${k}/3 for ${e} failed: %o`, y);
        if (k < 3) {
          await ne.sleep(k * 1000);
        }
      }
    }
    ne.sshLogger.error(`[ClaudeSSHManager] All download attempts failed for ${e}`);
    return {
      ready: false,
      ...us(y)
    };
  }
  async getLocalVersion(e) {
    if (this.requiredVersion === "unknown") {
      return null;
    } else {
      return this.requiredVersion;
    }
  }
}
const Ri = new ds();
function lr(p, e, r) {
  return new Promise(y => {
    p.stat(e, (k, m) => {
      if (k) {
        ne.sshLogger.info(`[sftpReadCapped] read skipped (${k.message})`);
        y(null);
        return;
      }
      if (!m.isFile() || !Number.isFinite(m.size) || m.size > r) {
        ne.sshLogger.warn(`[sftpReadCapped] read refused (${m.size} bytes, cap ${r})`);
        y(null);
        return;
      }
      p.readFile(e, (M, v) => {
        if (M) {
          ne.sshLogger.info(`[sftpReadCapped] read failed (${M.message})`);
          y(null);
          return;
        }
        if (v.length > r) {
          ne.sshLogger.warn(`[sftpReadCapped] read pulled ${v.length} bytes (cap ${r}); dropping it`);
          y(null);
          return;
        }
        y(v);
      });
    });
  });
}
var Rn = {
  exports: {}
};
var kn;
var kr;
function xr() {
  if (!kr) {
    kr = 1;
    kn = {
      newInvalidAsn1Error: function (p) {
        var e = new Error();
        e.name = "InvalidAsn1Error";
        e.message = p || "";
        return e;
      }
    };
  }
  return kn;
}
var Tn;
var Tr;
function Ir() {
  if (!Tr) {
    Tr = 1;
    Tn = {
      EOC: 0,
      Boolean: 1,
      Integer: 2,
      BitString: 3,
      OctetString: 4,
      Null: 5,
      OID: 6,
      ObjectDescriptor: 7,
      External: 8,
      Real: 9,
      Enumeration: 10,
      PDV: 11,
      Utf8String: 12,
      RelativeOID: 13,
      Sequence: 16,
      Set: 17,
      NumericString: 18,
      PrintableString: 19,
      T61String: 20,
      VideotexString: 21,
      IA5String: 22,
      UTCTime: 23,
      GeneralizedTime: 24,
      GraphicString: 25,
      VisibleString: 26,
      GeneralString: 28,
      UniversalString: 29,
      CharacterString: 30,
      BMPString: 31,
      Constructor: 32,
      Context: 128
    };
  }
  return Tn;
}
var vn;
var vr;
function ki() {
  if (vr) {
    return vn;
  }
  vr = 1;
  var p = Ii;
  var e = p.Buffer;
  var r = {};
  var y;
  for (y in p) {
    if (p.hasOwnProperty(y)) {
      if (y !== "SlowBuffer" && y !== "Buffer") {
        r[y] = p[y];
      }
    }
  }
  var k = r.Buffer = {};
  for (y in e) {
    if (e.hasOwnProperty(y)) {
      if (y !== "allocUnsafe" && y !== "allocUnsafeSlow") {
        k[y] = e[y];
      }
    }
  }
  r.Buffer.prototype = e.prototype;
  if (!k.from || k.from === Uint8Array.from) {
    k.from = function (m, M, v) {
      if (typeof m == "number") {
        throw new TypeError("The \"value\" argument must not be of type number. Received type " + typeof m);
      }
      if (m && typeof m.length === "undefined") {
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof m);
      }
      return e(m, M, v);
    };
  }
  k.alloc ||= function (m, M, v) {
    if (typeof m != "number") {
      throw new TypeError("The \"size\" argument must be of type number. Received type " + typeof m);
    }
    if (m < 0 || m >= 2147483648) {
      throw new RangeError("The value \"" + m + "\" is invalid for option \"size\"");
    }
    var R = e(m);
    if (!M || M.length === 0) {
      R.fill(0);
    } else if (typeof v == "string") {
      R.fill(M, v);
    } else {
      R.fill(M);
    }
    return R;
  };
  if (!r.kStringMaxLength) {
    try {
      r.kStringMaxLength = process.binding("buffer").kStringMaxLength;
    } catch {}
  }
  if (!r.constants) {
    r.constants = {
      MAX_LENGTH: r.kMaxLength
    };
    if (r.kStringMaxLength) {
      r.constants.MAX_STRING_LENGTH = r.kStringMaxLength;
    }
  }
  vn = r;
  return vn;
}
var Nn;
var Nr;
function gs() {
  if (Nr) {
    return Nn;
  }
  Nr = 1;
  var p = mr;
  var e = ki().Buffer;
  var r = Ir();
  var y = xr();
  var k = y.newInvalidAsn1Error;
  function m(M) {
    if (!M || !e.isBuffer(M)) {
      throw new TypeError("data must be a node Buffer");
    }
    this._buf = M;
    this._size = M.length;
    this._len = 0;
    this._offset = 0;
  }
  Object.defineProperty(m.prototype, "length", {
    enumerable: true,
    get: function () {
      return this._len;
    }
  });
  Object.defineProperty(m.prototype, "offset", {
    enumerable: true,
    get: function () {
      return this._offset;
    }
  });
  Object.defineProperty(m.prototype, "remain", {
    get: function () {
      return this._size - this._offset;
    }
  });
  Object.defineProperty(m.prototype, "buffer", {
    get: function () {
      return this._buf.slice(this._offset);
    }
  });
  m.prototype.readByte = function (M) {
    if (this._size - this._offset < 1) {
      return null;
    }
    var v = this._buf[this._offset] & 255;
    if (!M) {
      this._offset += 1;
    }
    return v;
  };
  m.prototype.peek = function () {
    return this.readByte(true);
  };
  m.prototype.readLength = function (M = this._offset) {
    if (M >= this._size) {
      return null;
    }
    var v = this._buf[M++] & 255;
    if (v === null) {
      return null;
    }
    if ((v & 128) === 128) {
      v &= 127;
      if (v === 0) {
        throw k("Indefinite length not supported");
      }
      if (v > 4) {
        throw k("encoding too long");
      }
      if (this._size - M < v) {
        return null;
      }
      this._len = 0;
      for (var R = 0; R < v; R++) {
        this._len = (this._len << 8) + (this._buf[M++] & 255);
      }
    } else {
      this._len = v;
    }
    return M;
  };
  m.prototype.readSequence = function (M) {
    var v = this.peek();
    if (v === null) {
      return null;
    }
    if (M !== undefined && M !== v) {
      throw k("Expected 0x" + M.toString(16) + ": got 0x" + v.toString(16));
    }
    var R = this.readLength(this._offset + 1);
    if (R === null) {
      return null;
    } else {
      this._offset = R;
      return v;
    }
  };
  m.prototype.readInt = function () {
    return this._readTag(r.Integer);
  };
  m.prototype.readBoolean = function () {
    return this._readTag(r.Boolean) !== 0;
  };
  m.prototype.readEnumeration = function () {
    return this._readTag(r.Enumeration);
  };
  m.prototype.readString = function (M, v) {
    M ||= r.OctetString;
    var R = this.peek();
    if (R === null) {
      return null;
    }
    if (R !== M) {
      throw k("Expected 0x" + M.toString(16) + ": got 0x" + R.toString(16));
    }
    var I = this.readLength(this._offset + 1);
    if (I === null || this.length > this._size - I) {
      return null;
    }
    this._offset = I;
    if (this.length === 0) {
      if (v) {
        return e.alloc(0);
      } else {
        return "";
      }
    }
    var Q = this._buf.slice(this._offset, this._offset + this.length);
    this._offset += this.length;
    if (v) {
      return Q;
    } else {
      return Q.toString("utf8");
    }
  };
  m.prototype.readOID = function (M) {
    M ||= r.OID;
    var v = this.readString(M, true);
    if (v === null) {
      return null;
    }
    var R = [];
    var I = 0;
    for (var Q = 0; Q < v.length; Q++) {
      var n = v[Q] & 255;
      I <<= 7;
      I += n & 127;
      if ((n & 128) === 0) {
        R.push(I);
        I = 0;
      }
    }
    I = R.shift();
    R.unshift(I % 40);
    R.unshift(I / 40 >> 0);
    return R.join(".");
  };
  m.prototype._readTag = function (M) {
    p.ok(M !== undefined);
    var v = this.peek();
    if (v === null) {
      return null;
    }
    if (v !== M) {
      throw k("Expected 0x" + M.toString(16) + ": got 0x" + v.toString(16));
    }
    var R = this.readLength(this._offset + 1);
    if (R === null) {
      return null;
    }
    if (this.length > 4) {
      throw k("Integer too long: " + this.length);
    }
    if (this.length > this._size - R) {
      return null;
    }
    this._offset = R;
    var I = this._buf[this._offset];
    var Q = 0;
    for (var n = 0; n < this.length; n++) {
      Q <<= 8;
      Q |= this._buf[this._offset++] & 255;
    }
    if ((I & 128) === 128 && n !== 4) {
      Q -= 1 << n * 8;
    }
    return Q >> 0;
  };
  Nn = m;
  return Nn;
}
var Ln;
var Lr;
function As() {
  if (Lr) {
    return Ln;
  }
  Lr = 1;
  var p = mr;
  var e = ki().Buffer;
  var r = Ir();
  var y = xr();
  var k = y.newInvalidAsn1Error;
  var m = {
    size: 1024,
    growthFactor: 8
  };
  function M(R, I) {
    p.ok(R);
    p.equal(typeof R, "object");
    p.ok(I);
    p.equal(typeof I, "object");
    var Q = Object.getOwnPropertyNames(R);
    Q.forEach(function (n) {
      if (!I[n]) {
        var B = Object.getOwnPropertyDescriptor(R, n);
        Object.defineProperty(I, n, B);
      }
    });
    return I;
  }
  function v(R) {
    R = M(m, R || {});
    this._buf = e.alloc(R.size || 1024);
    this._size = this._buf.length;
    this._offset = 0;
    this._options = R;
    this._seq = [];
  }
  Object.defineProperty(v.prototype, "buffer", {
    get: function () {
      if (this._seq.length) {
        throw k(this._seq.length + " unended sequence(s)");
      }
      return this._buf.slice(0, this._offset);
    }
  });
  v.prototype.writeByte = function (R) {
    if (typeof R != "number") {
      throw new TypeError("argument must be a Number");
    }
    this._ensure(1);
    this._buf[this._offset++] = R;
  };
  v.prototype.writeInt = function (R, I) {
    if (typeof R != "number") {
      throw new TypeError("argument must be a Number");
    }
    if (typeof I != "number") {
      I = r.Integer;
    }
    for (var Q = 4; ((R & -8388608) === 0 || (R & -8388608) === -8388608) && Q > 1;) {
      Q--;
      R <<= 8;
    }
    if (Q > 4) {
      throw k("BER ints cannot be > 0xffffffff");
    }
    this._ensure(2 + Q);
    this._buf[this._offset++] = I;
    this._buf[this._offset++] = Q;
    while (Q-- > 0) {
      this._buf[this._offset++] = (R & -16777216) >>> 24;
      R <<= 8;
    }
  };
  v.prototype.writeNull = function () {
    this.writeByte(r.Null);
    this.writeByte(0);
  };
  v.prototype.writeEnumeration = function (R, I) {
    if (typeof R != "number") {
      throw new TypeError("argument must be a Number");
    }
    if (typeof I != "number") {
      I = r.Enumeration;
    }
    return this.writeInt(R, I);
  };
  v.prototype.writeBoolean = function (R, I) {
    if (typeof R != "boolean") {
      throw new TypeError("argument must be a Boolean");
    }
    if (typeof I != "number") {
      I = r.Boolean;
    }
    this._ensure(3);
    this._buf[this._offset++] = I;
    this._buf[this._offset++] = 1;
    this._buf[this._offset++] = R ? 255 : 0;
  };
  v.prototype.writeString = function (R, I) {
    if (typeof R != "string") {
      throw new TypeError("argument must be a string (was: " + typeof R + ")");
    }
    if (typeof I != "number") {
      I = r.OctetString;
    }
    var Q = e.byteLength(R);
    this.writeByte(I);
    this.writeLength(Q);
    if (Q) {
      this._ensure(Q);
      this._buf.write(R, this._offset);
      this._offset += Q;
    }
  };
  v.prototype.writeBuffer = function (R, I) {
    if (typeof I != "number") {
      throw new TypeError("tag must be a number");
    }
    if (!e.isBuffer(R)) {
      throw new TypeError("argument must be a buffer");
    }
    this.writeByte(I);
    this.writeLength(R.length);
    this._ensure(R.length);
    R.copy(this._buf, this._offset, 0, R.length);
    this._offset += R.length;
  };
  v.prototype.writeStringArray = function (R) {
    if (!R instanceof Array) {
      throw new TypeError("argument must be an Array[String]");
    }
    var I = this;
    R.forEach(function (Q) {
      I.writeString(Q);
    });
  };
  v.prototype.writeOID = function (R, I) {
    if (typeof R != "string") {
      throw new TypeError("argument must be a string");
    }
    if (typeof I != "number") {
      I = r.OID;
    }
    if (!/^([0-9]+\.){3,}[0-9]+$/.test(R)) {
      throw new Error("argument is not a valid OID string");
    }
    function Q(w, X) {
      if (X < 128) {
        w.push(X);
      } else if (X < 16384) {
        w.push(X >>> 7 | 128);
        w.push(X & 127);
      } else if (X < 2097152) {
        w.push(X >>> 14 | 128);
        w.push((X >>> 7 | 128) & 255);
        w.push(X & 127);
      } else if (X < 268435456) {
        w.push(X >>> 21 | 128);
        w.push((X >>> 14 | 128) & 255);
        w.push((X >>> 7 | 128) & 255);
        w.push(X & 127);
      } else {
        w.push((X >>> 28 | 128) & 255);
        w.push((X >>> 21 | 128) & 255);
        w.push((X >>> 14 | 128) & 255);
        w.push((X >>> 7 | 128) & 255);
        w.push(X & 127);
      }
    }
    var n = R.split(".");
    var B = [];
    B.push(parseInt(n[0], 10) * 40 + parseInt(n[1], 10));
    n.slice(2).forEach(function (w) {
      Q(B, parseInt(w, 10));
    });
    var C = this;
    this._ensure(2 + B.length);
    this.writeByte(I);
    this.writeLength(B.length);
    B.forEach(function (w) {
      C.writeByte(w);
    });
  };
  v.prototype.writeLength = function (R) {
    if (typeof R != "number") {
      throw new TypeError("argument must be a Number");
    }
    this._ensure(4);
    if (R <= 127) {
      this._buf[this._offset++] = R;
    } else if (R <= 255) {
      this._buf[this._offset++] = 129;
      this._buf[this._offset++] = R;
    } else if (R <= 65535) {
      this._buf[this._offset++] = 130;
      this._buf[this._offset++] = R >> 8;
      this._buf[this._offset++] = R;
    } else if (R <= 16777215) {
      this._buf[this._offset++] = 131;
      this._buf[this._offset++] = R >> 16;
      this._buf[this._offset++] = R >> 8;
      this._buf[this._offset++] = R;
    } else {
      throw k("Length too long (> 4 bytes)");
    }
  };
  v.prototype.startSequence = function (R) {
    if (typeof R != "number") {
      R = r.Sequence | r.Constructor;
    }
    this.writeByte(R);
    this._seq.push(this._offset);
    this._ensure(3);
    this._offset += 3;
  };
  v.prototype.endSequence = function () {
    var R = this._seq.pop();
    var I = R + 3;
    var Q = this._offset - I;
    if (Q <= 127) {
      this._shift(I, Q, -2);
      this._buf[R] = Q;
    } else if (Q <= 255) {
      this._shift(I, Q, -1);
      this._buf[R] = 129;
      this._buf[R + 1] = Q;
    } else if (Q <= 65535) {
      this._buf[R] = 130;
      this._buf[R + 1] = Q >> 8;
      this._buf[R + 2] = Q;
    } else if (Q <= 16777215) {
      this._shift(I, Q, 1);
      this._buf[R] = 131;
      this._buf[R + 1] = Q >> 16;
      this._buf[R + 2] = Q >> 8;
      this._buf[R + 3] = Q;
    } else {
      throw k("Sequence too long");
    }
  };
  v.prototype._shift = function (R, I, Q) {
    p.ok(R !== undefined);
    p.ok(I !== undefined);
    p.ok(Q);
    this._buf.copy(this._buf, R + Q, R, R + I);
    this._offset += Q;
  };
  v.prototype._ensure = function (R) {
    p.ok(R);
    if (this._size - this._offset < R) {
      var I = this._size * this._options.growthFactor;
      if (I - this._offset < R) {
        I += R;
      }
      var Q = e.alloc(I);
      this._buf.copy(Q, 0, 0, this._offset);
      this._buf = Q;
      this._size = I;
    }
  };
  Ln = v;
  return Ln;
}
var Pr;
function _s() {
  if (!Pr) {
    Pr = 1;
    (function (p) {
      var e = xr();
      var r = Ir();
      var y = gs();
      var k = As();
      p.exports = {
        Reader: y,
        Writer: k
      };
      for (var m in r) {
        if (r.hasOwnProperty(m)) {
          p.exports[m] = r[m];
        }
      }
      for (var M in e) {
        if (e.hasOwnProperty(M)) {
          p.exports[M] = e[M];
        }
      }
    })(Rn);
  }
  return Rn.exports;
}
var Pn;
var Or;
function In() {
  if (Or) {
    return Pn;
  }
  Or = 1;
  var p = _s();
  Pn = {
    Ber: p,
    BerReader: p.Reader,
    BerWriter: p.Writer
  };
  return Pn;
}
var On = {
  exports: {}
};
var Ur;
function ps() {
  if (!Ur) {
    Ur = 1;
    (function (p) {
      (function (e) {
        function r(_) {
          var N;
          var T = new Float64Array(16);
          if (_) {
            for (N = 0; N < _.length; N++) {
              T[N] = _[N];
            }
          }
          return T;
        }
        function y() {
          throw new Error("no PRNG");
        }
        var k = new Uint8Array(16);
        var m = new Uint8Array(32);
        m[0] = 9;
        var M = r();
        var v = r([1]);
        var R = r([56129, 1]);
        var I = r([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]);
        var Q = r([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]);
        var n = r([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]);
        var B = r([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]);
        var C = r([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);
        function w(_, N, T, i) {
          _[N] = T >> 24 & 255;
          _[N + 1] = T >> 16 & 255;
          _[N + 2] = T >> 8 & 255;
          _[N + 3] = T & 255;
          _[N + 4] = i >> 24 & 255;
          _[N + 5] = i >> 16 & 255;
          _[N + 6] = i >> 8 & 255;
          _[N + 7] = i & 255;
        }
        function X(_, N, T, i, H) {
          var te;
          var ae = 0;
          for (te = 0; te < H; te++) {
            ae |= _[N + te] ^ T[i + te];
          }
          return (ae - 1 >>> 8 & 1) - 1;
        }
        function K(_, N, T, i) {
          return X(_, N, T, i, 16);
        }
        function $(_, N, T, i) {
          return X(_, N, T, i, 32);
        }
        function re(_, N, T, i) {
          var H = i[0] & 255 | (i[1] & 255) << 8 | (i[2] & 255) << 16 | (i[3] & 255) << 24;
          var te = T[0] & 255 | (T[1] & 255) << 8 | (T[2] & 255) << 16 | (T[3] & 255) << 24;
          var ae = T[4] & 255 | (T[5] & 255) << 8 | (T[6] & 255) << 16 | (T[7] & 255) << 24;
          var me = T[8] & 255 | (T[9] & 255) << 8 | (T[10] & 255) << 16 | (T[11] & 255) << 24;
          var ee = T[12] & 255 | (T[13] & 255) << 8 | (T[14] & 255) << 16 | (T[15] & 255) << 24;
          var ce = i[4] & 255 | (i[5] & 255) << 8 | (i[6] & 255) << 16 | (i[7] & 255) << 24;
          var fe = N[0] & 255 | (N[1] & 255) << 8 | (N[2] & 255) << 16 | (N[3] & 255) << 24;
          var Ee = N[4] & 255 | (N[5] & 255) << 8 | (N[6] & 255) << 16 | (N[7] & 255) << 24;
          var xe = N[8] & 255 | (N[9] & 255) << 8 | (N[10] & 255) << 16 | (N[11] & 255) << 24;
          var De = N[12] & 255 | (N[13] & 255) << 8 | (N[14] & 255) << 16 | (N[15] & 255) << 24;
          var Ge = i[8] & 255 | (i[9] & 255) << 8 | (i[10] & 255) << 16 | (i[11] & 255) << 24;
          var ot = T[16] & 255 | (T[17] & 255) << 8 | (T[18] & 255) << 16 | (T[19] & 255) << 24;
          var tt = T[20] & 255 | (T[21] & 255) << 8 | (T[22] & 255) << 16 | (T[23] & 255) << 24;
          var at = T[24] & 255 | (T[25] & 255) << 8 | (T[26] & 255) << 16 | (T[27] & 255) << 24;
          var ft = T[28] & 255 | (T[29] & 255) << 8 | (T[30] & 255) << 16 | (T[31] & 255) << 24;
          var ct = i[12] & 255 | (i[13] & 255) << 8 | (i[14] & 255) << 16 | (i[15] & 255) << 24;
          var je = H;
          var et = te;
          var Ye = ae;
          var Ve = me;
          var ze = ee;
          var We = ce;
          var ge = fe;
          var Ae = Ee;
          var Ce = xe;
          var ye = De;
          var Se = Ge;
          var ke = ot;
          var it = tt;
          var ht = at;
          var ut = ft;
          var lt = ct;
          var z;
          for (var gt = 0; gt < 20; gt += 2) {
            z = je + it | 0;
            ze ^= z << 7 | z >>> 25;
            z = ze + je | 0;
            Ce ^= z << 9 | z >>> 23;
            z = Ce + ze | 0;
            it ^= z << 13 | z >>> 19;
            z = it + Ce | 0;
            je ^= z << 18 | z >>> 14;
            z = We + et | 0;
            ye ^= z << 7 | z >>> 25;
            z = ye + We | 0;
            ht ^= z << 9 | z >>> 23;
            z = ht + ye | 0;
            et ^= z << 13 | z >>> 19;
            z = et + ht | 0;
            We ^= z << 18 | z >>> 14;
            z = Se + ge | 0;
            ut ^= z << 7 | z >>> 25;
            z = ut + Se | 0;
            Ye ^= z << 9 | z >>> 23;
            z = Ye + ut | 0;
            ge ^= z << 13 | z >>> 19;
            z = ge + Ye | 0;
            Se ^= z << 18 | z >>> 14;
            z = lt + ke | 0;
            Ve ^= z << 7 | z >>> 25;
            z = Ve + lt | 0;
            Ae ^= z << 9 | z >>> 23;
            z = Ae + Ve | 0;
            ke ^= z << 13 | z >>> 19;
            z = ke + Ae | 0;
            lt ^= z << 18 | z >>> 14;
            z = je + Ve | 0;
            et ^= z << 7 | z >>> 25;
            z = et + je | 0;
            Ye ^= z << 9 | z >>> 23;
            z = Ye + et | 0;
            Ve ^= z << 13 | z >>> 19;
            z = Ve + Ye | 0;
            je ^= z << 18 | z >>> 14;
            z = We + ze | 0;
            ge ^= z << 7 | z >>> 25;
            z = ge + We | 0;
            Ae ^= z << 9 | z >>> 23;
            z = Ae + ge | 0;
            ze ^= z << 13 | z >>> 19;
            z = ze + Ae | 0;
            We ^= z << 18 | z >>> 14;
            z = Se + ye | 0;
            ke ^= z << 7 | z >>> 25;
            z = ke + Se | 0;
            Ce ^= z << 9 | z >>> 23;
            z = Ce + ke | 0;
            ye ^= z << 13 | z >>> 19;
            z = ye + Ce | 0;
            Se ^= z << 18 | z >>> 14;
            z = lt + ut | 0;
            it ^= z << 7 | z >>> 25;
            z = it + lt | 0;
            ht ^= z << 9 | z >>> 23;
            z = ht + it | 0;
            ut ^= z << 13 | z >>> 19;
            z = ut + ht | 0;
            lt ^= z << 18 | z >>> 14;
          }
          je = je + H | 0;
          et = et + te | 0;
          Ye = Ye + ae | 0;
          Ve = Ve + me | 0;
          ze = ze + ee | 0;
          We = We + ce | 0;
          ge = ge + fe | 0;
          Ae = Ae + Ee | 0;
          Ce = Ce + xe | 0;
          ye = ye + De | 0;
          Se = Se + Ge | 0;
          ke = ke + ot | 0;
          it = it + tt | 0;
          ht = ht + at | 0;
          ut = ut + ft | 0;
          lt = lt + ct | 0;
          _[0] = je >>> 0 & 255;
          _[1] = je >>> 8 & 255;
          _[2] = je >>> 16 & 255;
          _[3] = je >>> 24 & 255;
          _[4] = et >>> 0 & 255;
          _[5] = et >>> 8 & 255;
          _[6] = et >>> 16 & 255;
          _[7] = et >>> 24 & 255;
          _[8] = Ye >>> 0 & 255;
          _[9] = Ye >>> 8 & 255;
          _[10] = Ye >>> 16 & 255;
          _[11] = Ye >>> 24 & 255;
          _[12] = Ve >>> 0 & 255;
          _[13] = Ve >>> 8 & 255;
          _[14] = Ve >>> 16 & 255;
          _[15] = Ve >>> 24 & 255;
          _[16] = ze >>> 0 & 255;
          _[17] = ze >>> 8 & 255;
          _[18] = ze >>> 16 & 255;
          _[19] = ze >>> 24 & 255;
          _[20] = We >>> 0 & 255;
          _[21] = We >>> 8 & 255;
          _[22] = We >>> 16 & 255;
          _[23] = We >>> 24 & 255;
          _[24] = ge >>> 0 & 255;
          _[25] = ge >>> 8 & 255;
          _[26] = ge >>> 16 & 255;
          _[27] = ge >>> 24 & 255;
          _[28] = Ae >>> 0 & 255;
          _[29] = Ae >>> 8 & 255;
          _[30] = Ae >>> 16 & 255;
          _[31] = Ae >>> 24 & 255;
          _[32] = Ce >>> 0 & 255;
          _[33] = Ce >>> 8 & 255;
          _[34] = Ce >>> 16 & 255;
          _[35] = Ce >>> 24 & 255;
          _[36] = ye >>> 0 & 255;
          _[37] = ye >>> 8 & 255;
          _[38] = ye >>> 16 & 255;
          _[39] = ye >>> 24 & 255;
          _[40] = Se >>> 0 & 255;
          _[41] = Se >>> 8 & 255;
          _[42] = Se >>> 16 & 255;
          _[43] = Se >>> 24 & 255;
          _[44] = ke >>> 0 & 255;
          _[45] = ke >>> 8 & 255;
          _[46] = ke >>> 16 & 255;
          _[47] = ke >>> 24 & 255;
          _[48] = it >>> 0 & 255;
          _[49] = it >>> 8 & 255;
          _[50] = it >>> 16 & 255;
          _[51] = it >>> 24 & 255;
          _[52] = ht >>> 0 & 255;
          _[53] = ht >>> 8 & 255;
          _[54] = ht >>> 16 & 255;
          _[55] = ht >>> 24 & 255;
          _[56] = ut >>> 0 & 255;
          _[57] = ut >>> 8 & 255;
          _[58] = ut >>> 16 & 255;
          _[59] = ut >>> 24 & 255;
          _[60] = lt >>> 0 & 255;
          _[61] = lt >>> 8 & 255;
          _[62] = lt >>> 16 & 255;
          _[63] = lt >>> 24 & 255;
        }
        function Y(_, N, T, i) {
          var H = i[0] & 255 | (i[1] & 255) << 8 | (i[2] & 255) << 16 | (i[3] & 255) << 24;
          var te = T[0] & 255 | (T[1] & 255) << 8 | (T[2] & 255) << 16 | (T[3] & 255) << 24;
          var ae = T[4] & 255 | (T[5] & 255) << 8 | (T[6] & 255) << 16 | (T[7] & 255) << 24;
          var me = T[8] & 255 | (T[9] & 255) << 8 | (T[10] & 255) << 16 | (T[11] & 255) << 24;
          var ee = T[12] & 255 | (T[13] & 255) << 8 | (T[14] & 255) << 16 | (T[15] & 255) << 24;
          var ce = i[4] & 255 | (i[5] & 255) << 8 | (i[6] & 255) << 16 | (i[7] & 255) << 24;
          var fe = N[0] & 255 | (N[1] & 255) << 8 | (N[2] & 255) << 16 | (N[3] & 255) << 24;
          var Ee = N[4] & 255 | (N[5] & 255) << 8 | (N[6] & 255) << 16 | (N[7] & 255) << 24;
          var xe = N[8] & 255 | (N[9] & 255) << 8 | (N[10] & 255) << 16 | (N[11] & 255) << 24;
          var De = N[12] & 255 | (N[13] & 255) << 8 | (N[14] & 255) << 16 | (N[15] & 255) << 24;
          var Ge = i[8] & 255 | (i[9] & 255) << 8 | (i[10] & 255) << 16 | (i[11] & 255) << 24;
          var ot = T[16] & 255 | (T[17] & 255) << 8 | (T[18] & 255) << 16 | (T[19] & 255) << 24;
          var tt = T[20] & 255 | (T[21] & 255) << 8 | (T[22] & 255) << 16 | (T[23] & 255) << 24;
          var at = T[24] & 255 | (T[25] & 255) << 8 | (T[26] & 255) << 16 | (T[27] & 255) << 24;
          var ft = T[28] & 255 | (T[29] & 255) << 8 | (T[30] & 255) << 16 | (T[31] & 255) << 24;
          var ct = i[12] & 255 | (i[13] & 255) << 8 | (i[14] & 255) << 16 | (i[15] & 255) << 24;
          var je = H;
          var et = te;
          var Ye = ae;
          var Ve = me;
          var ze = ee;
          var We = ce;
          var ge = fe;
          var Ae = Ee;
          var Ce = xe;
          var ye = De;
          var Se = Ge;
          var ke = ot;
          var it = tt;
          var ht = at;
          var ut = ft;
          var lt = ct;
          var z;
          for (var gt = 0; gt < 20; gt += 2) {
            z = je + it | 0;
            ze ^= z << 7 | z >>> 25;
            z = ze + je | 0;
            Ce ^= z << 9 | z >>> 23;
            z = Ce + ze | 0;
            it ^= z << 13 | z >>> 19;
            z = it + Ce | 0;
            je ^= z << 18 | z >>> 14;
            z = We + et | 0;
            ye ^= z << 7 | z >>> 25;
            z = ye + We | 0;
            ht ^= z << 9 | z >>> 23;
            z = ht + ye | 0;
            et ^= z << 13 | z >>> 19;
            z = et + ht | 0;
            We ^= z << 18 | z >>> 14;
            z = Se + ge | 0;
            ut ^= z << 7 | z >>> 25;
            z = ut + Se | 0;
            Ye ^= z << 9 | z >>> 23;
            z = Ye + ut | 0;
            ge ^= z << 13 | z >>> 19;
            z = ge + Ye | 0;
            Se ^= z << 18 | z >>> 14;
            z = lt + ke | 0;
            Ve ^= z << 7 | z >>> 25;
            z = Ve + lt | 0;
            Ae ^= z << 9 | z >>> 23;
            z = Ae + Ve | 0;
            ke ^= z << 13 | z >>> 19;
            z = ke + Ae | 0;
            lt ^= z << 18 | z >>> 14;
            z = je + Ve | 0;
            et ^= z << 7 | z >>> 25;
            z = et + je | 0;
            Ye ^= z << 9 | z >>> 23;
            z = Ye + et | 0;
            Ve ^= z << 13 | z >>> 19;
            z = Ve + Ye | 0;
            je ^= z << 18 | z >>> 14;
            z = We + ze | 0;
            ge ^= z << 7 | z >>> 25;
            z = ge + We | 0;
            Ae ^= z << 9 | z >>> 23;
            z = Ae + ge | 0;
            ze ^= z << 13 | z >>> 19;
            z = ze + Ae | 0;
            We ^= z << 18 | z >>> 14;
            z = Se + ye | 0;
            ke ^= z << 7 | z >>> 25;
            z = ke + Se | 0;
            Ce ^= z << 9 | z >>> 23;
            z = Ce + ke | 0;
            ye ^= z << 13 | z >>> 19;
            z = ye + Ce | 0;
            Se ^= z << 18 | z >>> 14;
            z = lt + ut | 0;
            it ^= z << 7 | z >>> 25;
            z = it + lt | 0;
            ht ^= z << 9 | z >>> 23;
            z = ht + it | 0;
            ut ^= z << 13 | z >>> 19;
            z = ut + ht | 0;
            lt ^= z << 18 | z >>> 14;
          }
          _[0] = je >>> 0 & 255;
          _[1] = je >>> 8 & 255;
          _[2] = je >>> 16 & 255;
          _[3] = je >>> 24 & 255;
          _[4] = We >>> 0 & 255;
          _[5] = We >>> 8 & 255;
          _[6] = We >>> 16 & 255;
          _[7] = We >>> 24 & 255;
          _[8] = Se >>> 0 & 255;
          _[9] = Se >>> 8 & 255;
          _[10] = Se >>> 16 & 255;
          _[11] = Se >>> 24 & 255;
          _[12] = lt >>> 0 & 255;
          _[13] = lt >>> 8 & 255;
          _[14] = lt >>> 16 & 255;
          _[15] = lt >>> 24 & 255;
          _[16] = ge >>> 0 & 255;
          _[17] = ge >>> 8 & 255;
          _[18] = ge >>> 16 & 255;
          _[19] = ge >>> 24 & 255;
          _[20] = Ae >>> 0 & 255;
          _[21] = Ae >>> 8 & 255;
          _[22] = Ae >>> 16 & 255;
          _[23] = Ae >>> 24 & 255;
          _[24] = Ce >>> 0 & 255;
          _[25] = Ce >>> 8 & 255;
          _[26] = Ce >>> 16 & 255;
          _[27] = Ce >>> 24 & 255;
          _[28] = ye >>> 0 & 255;
          _[29] = ye >>> 8 & 255;
          _[30] = ye >>> 16 & 255;
          _[31] = ye >>> 24 & 255;
        }
        function J(_, N, T, i) {
          re(_, N, T, i);
        }
        function V(_, N, T, i) {
          Y(_, N, T, i);
        }
        var F = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);
        function oe(_, N, T, i, H, te, ae) {
          var me = new Uint8Array(16);
          var ee = new Uint8Array(64);
          var ce;
          var fe;
          for (fe = 0; fe < 16; fe++) {
            me[fe] = 0;
          }
          for (fe = 0; fe < 8; fe++) {
            me[fe] = te[fe];
          }
          while (H >= 64) {
            J(ee, me, ae, F);
            fe = 0;
            for (; fe < 64; fe++) {
              _[N + fe] = T[i + fe] ^ ee[fe];
            }
            ce = 1;
            fe = 8;
            for (; fe < 16; fe++) {
              ce = ce + (me[fe] & 255) | 0;
              me[fe] = ce & 255;
              ce >>>= 8;
            }
            H -= 64;
            N += 64;
            i += 64;
          }
          if (H > 0) {
            J(ee, me, ae, F);
            fe = 0;
            for (; fe < H; fe++) {
              _[N + fe] = T[i + fe] ^ ee[fe];
            }
          }
          return 0;
        }
        function Z(_, N, T, i, H) {
          var te = new Uint8Array(16);
          var ae = new Uint8Array(64);
          var me;
          var ee;
          for (ee = 0; ee < 16; ee++) {
            te[ee] = 0;
          }
          for (ee = 0; ee < 8; ee++) {
            te[ee] = i[ee];
          }
          while (T >= 64) {
            J(ae, te, H, F);
            ee = 0;
            for (; ee < 64; ee++) {
              _[N + ee] = ae[ee];
            }
            me = 1;
            ee = 8;
            for (; ee < 16; ee++) {
              me = me + (te[ee] & 255) | 0;
              te[ee] = me & 255;
              me >>>= 8;
            }
            T -= 64;
            N += 64;
          }
          if (T > 0) {
            J(ae, te, H, F);
            ee = 0;
            for (; ee < T; ee++) {
              _[N + ee] = ae[ee];
            }
          }
          return 0;
        }
        function he(_, N, T, i, H) {
          var te = new Uint8Array(32);
          V(te, i, H, F);
          var ae = new Uint8Array(8);
          for (var me = 0; me < 8; me++) {
            ae[me] = i[me + 16];
          }
          return Z(_, N, T, ae, te);
        }
        function U(_, N, T, i, H, te, ae) {
          var me = new Uint8Array(32);
          V(me, te, ae, F);
          var ee = new Uint8Array(8);
          for (var ce = 0; ce < 8; ce++) {
            ee[ce] = te[ce + 16];
          }
          return oe(_, N, T, i, H, ee, me);
        }
        function Ie(_) {
          this.buffer = new Uint8Array(16);
          this.r = new Uint16Array(10);
          this.h = new Uint16Array(10);
          this.pad = new Uint16Array(8);
          this.leftover = 0;
          this.fin = 0;
          var N;
          var T;
          var i;
          var H;
          var te;
          var ae;
          var me;
          var ee;
          N = _[0] & 255 | (_[1] & 255) << 8;
          this.r[0] = N & 8191;
          T = _[2] & 255 | (_[3] & 255) << 8;
          this.r[1] = (N >>> 13 | T << 3) & 8191;
          i = _[4] & 255 | (_[5] & 255) << 8;
          this.r[2] = (T >>> 10 | i << 6) & 7939;
          H = _[6] & 255 | (_[7] & 255) << 8;
          this.r[3] = (i >>> 7 | H << 9) & 8191;
          te = _[8] & 255 | (_[9] & 255) << 8;
          this.r[4] = (H >>> 4 | te << 12) & 255;
          this.r[5] = te >>> 1 & 8190;
          ae = _[10] & 255 | (_[11] & 255) << 8;
          this.r[6] = (te >>> 14 | ae << 2) & 8191;
          me = _[12] & 255 | (_[13] & 255) << 8;
          this.r[7] = (ae >>> 11 | me << 5) & 8065;
          ee = _[14] & 255 | (_[15] & 255) << 8;
          this.r[8] = (me >>> 8 | ee << 8) & 8191;
          this.r[9] = ee >>> 5 & 127;
          this.pad[0] = _[16] & 255 | (_[17] & 255) << 8;
          this.pad[1] = _[18] & 255 | (_[19] & 255) << 8;
          this.pad[2] = _[20] & 255 | (_[21] & 255) << 8;
          this.pad[3] = _[22] & 255 | (_[23] & 255) << 8;
          this.pad[4] = _[24] & 255 | (_[25] & 255) << 8;
          this.pad[5] = _[26] & 255 | (_[27] & 255) << 8;
          this.pad[6] = _[28] & 255 | (_[29] & 255) << 8;
          this.pad[7] = _[30] & 255 | (_[31] & 255) << 8;
        }
        Ie.prototype.blocks = function (_, N, T) {
          var i = this.fin ? 0 : 2048;
          var H;
          var te;
          var ae;
          var me;
          var ee;
          var ce;
          var fe;
          var Ee;
          var xe;
          var De;
          var Ge;
          var ot;
          var tt;
          var at;
          var ft;
          var ct;
          var je;
          var et;
          var Ye;
          var Ve = this.h[0];
          var ze = this.h[1];
          var We = this.h[2];
          var ge = this.h[3];
          var Ae = this.h[4];
          var Ce = this.h[5];
          var ye = this.h[6];
          var Se = this.h[7];
          var ke = this.h[8];
          var it = this.h[9];
          var ht = this.r[0];
          var ut = this.r[1];
          var lt = this.r[2];
          var z = this.r[3];
          var gt = this.r[4];
          var Et = this.r[5];
          var bt = this.r[6];
          var dt = this.r[7];
          var _t = this.r[8];
          var pt = this.r[9];
          while (T >= 16) {
            H = _[N + 0] & 255 | (_[N + 1] & 255) << 8;
            Ve += H & 8191;
            te = _[N + 2] & 255 | (_[N + 3] & 255) << 8;
            ze += (H >>> 13 | te << 3) & 8191;
            ae = _[N + 4] & 255 | (_[N + 5] & 255) << 8;
            We += (te >>> 10 | ae << 6) & 8191;
            me = _[N + 6] & 255 | (_[N + 7] & 255) << 8;
            ge += (ae >>> 7 | me << 9) & 8191;
            ee = _[N + 8] & 255 | (_[N + 9] & 255) << 8;
            Ae += (me >>> 4 | ee << 12) & 8191;
            Ce += ee >>> 1 & 8191;
            ce = _[N + 10] & 255 | (_[N + 11] & 255) << 8;
            ye += (ee >>> 14 | ce << 2) & 8191;
            fe = _[N + 12] & 255 | (_[N + 13] & 255) << 8;
            Se += (ce >>> 11 | fe << 5) & 8191;
            Ee = _[N + 14] & 255 | (_[N + 15] & 255) << 8;
            ke += (fe >>> 8 | Ee << 8) & 8191;
            it += Ee >>> 5 | i;
            xe = 0;
            De = xe;
            De += Ve * ht;
            De += ze * (pt * 5);
            De += We * (_t * 5);
            De += ge * (dt * 5);
            De += Ae * (bt * 5);
            xe = De >>> 13;
            De &= 8191;
            De += Ce * (Et * 5);
            De += ye * (gt * 5);
            De += Se * (z * 5);
            De += ke * (lt * 5);
            De += it * (ut * 5);
            xe += De >>> 13;
            De &= 8191;
            Ge = xe;
            Ge += Ve * ut;
            Ge += ze * ht;
            Ge += We * (pt * 5);
            Ge += ge * (_t * 5);
            Ge += Ae * (dt * 5);
            xe = Ge >>> 13;
            Ge &= 8191;
            Ge += Ce * (bt * 5);
            Ge += ye * (Et * 5);
            Ge += Se * (gt * 5);
            Ge += ke * (z * 5);
            Ge += it * (lt * 5);
            xe += Ge >>> 13;
            Ge &= 8191;
            ot = xe;
            ot += Ve * lt;
            ot += ze * ut;
            ot += We * ht;
            ot += ge * (pt * 5);
            ot += Ae * (_t * 5);
            xe = ot >>> 13;
            ot &= 8191;
            ot += Ce * (dt * 5);
            ot += ye * (bt * 5);
            ot += Se * (Et * 5);
            ot += ke * (gt * 5);
            ot += it * (z * 5);
            xe += ot >>> 13;
            ot &= 8191;
            tt = xe;
            tt += Ve * z;
            tt += ze * lt;
            tt += We * ut;
            tt += ge * ht;
            tt += Ae * (pt * 5);
            xe = tt >>> 13;
            tt &= 8191;
            tt += Ce * (_t * 5);
            tt += ye * (dt * 5);
            tt += Se * (bt * 5);
            tt += ke * (Et * 5);
            tt += it * (gt * 5);
            xe += tt >>> 13;
            tt &= 8191;
            at = xe;
            at += Ve * gt;
            at += ze * z;
            at += We * lt;
            at += ge * ut;
            at += Ae * ht;
            xe = at >>> 13;
            at &= 8191;
            at += Ce * (pt * 5);
            at += ye * (_t * 5);
            at += Se * (dt * 5);
            at += ke * (bt * 5);
            at += it * (Et * 5);
            xe += at >>> 13;
            at &= 8191;
            ft = xe;
            ft += Ve * Et;
            ft += ze * gt;
            ft += We * z;
            ft += ge * lt;
            ft += Ae * ut;
            xe = ft >>> 13;
            ft &= 8191;
            ft += Ce * ht;
            ft += ye * (pt * 5);
            ft += Se * (_t * 5);
            ft += ke * (dt * 5);
            ft += it * (bt * 5);
            xe += ft >>> 13;
            ft &= 8191;
            ct = xe;
            ct += Ve * bt;
            ct += ze * Et;
            ct += We * gt;
            ct += ge * z;
            ct += Ae * lt;
            xe = ct >>> 13;
            ct &= 8191;
            ct += Ce * ut;
            ct += ye * ht;
            ct += Se * (pt * 5);
            ct += ke * (_t * 5);
            ct += it * (dt * 5);
            xe += ct >>> 13;
            ct &= 8191;
            je = xe;
            je += Ve * dt;
            je += ze * bt;
            je += We * Et;
            je += ge * gt;
            je += Ae * z;
            xe = je >>> 13;
            je &= 8191;
            je += Ce * lt;
            je += ye * ut;
            je += Se * ht;
            je += ke * (pt * 5);
            je += it * (_t * 5);
            xe += je >>> 13;
            je &= 8191;
            et = xe;
            et += Ve * _t;
            et += ze * dt;
            et += We * bt;
            et += ge * Et;
            et += Ae * gt;
            xe = et >>> 13;
            et &= 8191;
            et += Ce * z;
            et += ye * lt;
            et += Se * ut;
            et += ke * ht;
            et += it * (pt * 5);
            xe += et >>> 13;
            et &= 8191;
            Ye = xe;
            Ye += Ve * pt;
            Ye += ze * _t;
            Ye += We * dt;
            Ye += ge * bt;
            Ye += Ae * Et;
            xe = Ye >>> 13;
            Ye &= 8191;
            Ye += Ce * gt;
            Ye += ye * z;
            Ye += Se * lt;
            Ye += ke * ut;
            Ye += it * ht;
            xe += Ye >>> 13;
            Ye &= 8191;
            xe = (xe << 2) + xe | 0;
            xe = xe + De | 0;
            De = xe & 8191;
            xe = xe >>> 13;
            Ge += xe;
            Ve = De;
            ze = Ge;
            We = ot;
            ge = tt;
            Ae = at;
            Ce = ft;
            ye = ct;
            Se = je;
            ke = et;
            it = Ye;
            N += 16;
            T -= 16;
          }
          this.h[0] = Ve;
          this.h[1] = ze;
          this.h[2] = We;
          this.h[3] = ge;
          this.h[4] = Ae;
          this.h[5] = Ce;
          this.h[6] = ye;
          this.h[7] = Se;
          this.h[8] = ke;
          this.h[9] = it;
        };
        Ie.prototype.finish = function (_, N) {
          var T = new Uint16Array(10);
          var i;
          var H;
          var te;
          var ae;
          if (this.leftover) {
            ae = this.leftover;
            this.buffer[ae++] = 1;
            for (; ae < 16; ae++) {
              this.buffer[ae] = 0;
            }
            this.fin = 1;
            this.blocks(this.buffer, 0, 16);
          }
          i = this.h[1] >>> 13;
          this.h[1] &= 8191;
          ae = 2;
          for (; ae < 10; ae++) {
            this.h[ae] += i;
            i = this.h[ae] >>> 13;
            this.h[ae] &= 8191;
          }
          this.h[0] += i * 5;
          i = this.h[0] >>> 13;
          this.h[0] &= 8191;
          this.h[1] += i;
          i = this.h[1] >>> 13;
          this.h[1] &= 8191;
          this.h[2] += i;
          T[0] = this.h[0] + 5;
          i = T[0] >>> 13;
          T[0] &= 8191;
          ae = 1;
          for (; ae < 10; ae++) {
            T[ae] = this.h[ae] + i;
            i = T[ae] >>> 13;
            T[ae] &= 8191;
          }
          T[9] -= 8192;
          H = (i ^ 1) - 1;
          ae = 0;
          for (; ae < 10; ae++) {
            T[ae] &= H;
          }
          H = ~H;
          ae = 0;
          for (; ae < 10; ae++) {
            this.h[ae] = this.h[ae] & H | T[ae];
          }
          this.h[0] = (this.h[0] | this.h[1] << 13) & 65535;
          this.h[1] = (this.h[1] >>> 3 | this.h[2] << 10) & 65535;
          this.h[2] = (this.h[2] >>> 6 | this.h[3] << 7) & 65535;
          this.h[3] = (this.h[3] >>> 9 | this.h[4] << 4) & 65535;
          this.h[4] = (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14) & 65535;
          this.h[5] = (this.h[6] >>> 2 | this.h[7] << 11) & 65535;
          this.h[6] = (this.h[7] >>> 5 | this.h[8] << 8) & 65535;
          this.h[7] = (this.h[8] >>> 8 | this.h[9] << 5) & 65535;
          te = this.h[0] + this.pad[0];
          this.h[0] = te & 65535;
          ae = 1;
          for (; ae < 8; ae++) {
            te = (this.h[ae] + this.pad[ae] | 0) + (te >>> 16) | 0;
            this.h[ae] = te & 65535;
          }
          _[N + 0] = this.h[0] >>> 0 & 255;
          _[N + 1] = this.h[0] >>> 8 & 255;
          _[N + 2] = this.h[1] >>> 0 & 255;
          _[N + 3] = this.h[1] >>> 8 & 255;
          _[N + 4] = this.h[2] >>> 0 & 255;
          _[N + 5] = this.h[2] >>> 8 & 255;
          _[N + 6] = this.h[3] >>> 0 & 255;
          _[N + 7] = this.h[3] >>> 8 & 255;
          _[N + 8] = this.h[4] >>> 0 & 255;
          _[N + 9] = this.h[4] >>> 8 & 255;
          _[N + 10] = this.h[5] >>> 0 & 255;
          _[N + 11] = this.h[5] >>> 8 & 255;
          _[N + 12] = this.h[6] >>> 0 & 255;
          _[N + 13] = this.h[6] >>> 8 & 255;
          _[N + 14] = this.h[7] >>> 0 & 255;
          _[N + 15] = this.h[7] >>> 8 & 255;
        };
        Ie.prototype.update = function (_, N, T) {
          var i;
          var H;
          if (this.leftover) {
            H = 16 - this.leftover;
            if (H > T) {
              H = T;
            }
            i = 0;
            for (; i < H; i++) {
              this.buffer[this.leftover + i] = _[N + i];
            }
            T -= H;
            N += H;
            this.leftover += H;
            if (this.leftover < 16) {
              return;
            }
            this.blocks(this.buffer, 0, 16);
            this.leftover = 0;
          }
          if (T >= 16) {
            H = T - T % 16;
            this.blocks(_, N, H);
            N += H;
            T -= H;
          }
          if (T) {
            for (i = 0; i < T; i++) {
              this.buffer[this.leftover + i] = _[N + i];
            }
            this.leftover += T;
          }
        };
        function be(_, N, T, i, H, te) {
          var ae = new Ie(te);
          ae.update(T, i, H);
          ae.finish(_, N);
          return 0;
        }
        function we(_, N, T, i, H, te) {
          var ae = new Uint8Array(16);
          be(ae, 0, T, i, H, te);
          return K(_, N, ae, 0);
        }
        function Me(_, N, T, i, H) {
          var te;
          if (T < 32) {
            return -1;
          }
          U(_, 0, N, 0, T, i, H);
          be(_, 16, _, 32, T - 32, _);
          te = 0;
          for (; te < 16; te++) {
            _[te] = 0;
          }
          return 0;
        }
        function Ne(_, N, T, i, H) {
          var te;
          var ae = new Uint8Array(32);
          if (T < 32 || (he(ae, 0, 32, i, H), we(N, 16, N, 32, T - 32, ae) !== 0)) {
            return -1;
          }
          U(_, 0, N, 0, T, i, H);
          te = 0;
          for (; te < 32; te++) {
            _[te] = 0;
          }
          return 0;
        }
        function Ue(_, N) {
          var T;
          for (T = 0; T < 16; T++) {
            _[T] = N[T] | 0;
          }
        }
        function Le(_) {
          var N;
          var T;
          var i = 1;
          for (N = 0; N < 16; N++) {
            T = _[N] + i + 65535;
            i = Math.floor(T / 65536);
            _[N] = T - i * 65536;
          }
          _[0] += i - 1 + (i - 1) * 37;
        }
        function Qe(_, N, T) {
          var i;
          var H = ~(T - 1);
          for (var te = 0; te < 16; te++) {
            i = H & (_[te] ^ N[te]);
            _[te] ^= i;
            N[te] ^= i;
          }
        }
        function Xe(_, N) {
          var T;
          var i;
          var H;
          var te = r();
          var ae = r();
          for (T = 0; T < 16; T++) {
            ae[T] = N[T];
          }
          Le(ae);
          Le(ae);
          Le(ae);
          i = 0;
          for (; i < 2; i++) {
            te[0] = ae[0] - 65517;
            T = 1;
            for (; T < 15; T++) {
              te[T] = ae[T] - 65535 - (te[T - 1] >> 16 & 1);
              te[T - 1] &= 65535;
            }
            te[15] = ae[15] - 32767 - (te[14] >> 16 & 1);
            H = te[15] >> 16 & 1;
            te[14] &= 65535;
            Qe(ae, te, 1 - H);
          }
          for (T = 0; T < 16; T++) {
            _[T * 2] = ae[T] & 255;
            _[T * 2 + 1] = ae[T] >> 8;
          }
        }
        function Ke(_, N) {
          var T = new Uint8Array(32);
          var i = new Uint8Array(32);
          Xe(T, _);
          Xe(i, N);
          return $(T, 0, i, 0);
        }
        function Re(_) {
          var N = new Uint8Array(32);
          Xe(N, _);
          return N[0] & 1;
        }
        function Pe(_, N) {
          var T;
          for (T = 0; T < 16; T++) {
            _[T] = N[T * 2] + (N[T * 2 + 1] << 8);
          }
          _[15] &= 32767;
        }
        function qe(_, N, T) {
          for (var i = 0; i < 16; i++) {
            _[i] = N[i] + T[i];
          }
        }
        function Je(_, N, T) {
          for (var i = 0; i < 16; i++) {
            _[i] = N[i] - T[i];
          }
        }
        function Oe(_, N, T) {
          var i;
          var H;
          var te = 0;
          var ae = 0;
          var me = 0;
          var ee = 0;
          var ce = 0;
          var fe = 0;
          var Ee = 0;
          var xe = 0;
          var De = 0;
          var Ge = 0;
          var ot = 0;
          var tt = 0;
          var at = 0;
          var ft = 0;
          var ct = 0;
          var je = 0;
          var et = 0;
          var Ye = 0;
          var Ve = 0;
          var ze = 0;
          var We = 0;
          var ge = 0;
          var Ae = 0;
          var Ce = 0;
          var ye = 0;
          var Se = 0;
          var ke = 0;
          var it = 0;
          var ht = 0;
          var ut = 0;
          var lt = 0;
          var z = T[0];
          var gt = T[1];
          var Et = T[2];
          var bt = T[3];
          var dt = T[4];
          var _t = T[5];
          var pt = T[6];
          var Bt = T[7];
          var mt = T[8];
          var xt = T[9];
          var It = T[10];
          var Ct = T[11];
          var Tt = T[12];
          var Lt = T[13];
          var Pt = T[14];
          var Ot = T[15];
          i = N[0];
          te += i * z;
          ae += i * gt;
          me += i * Et;
          ee += i * bt;
          ce += i * dt;
          fe += i * _t;
          Ee += i * pt;
          xe += i * Bt;
          De += i * mt;
          Ge += i * xt;
          ot += i * It;
          tt += i * Ct;
          at += i * Tt;
          ft += i * Lt;
          ct += i * Pt;
          je += i * Ot;
          i = N[1];
          ae += i * z;
          me += i * gt;
          ee += i * Et;
          ce += i * bt;
          fe += i * dt;
          Ee += i * _t;
          xe += i * pt;
          De += i * Bt;
          Ge += i * mt;
          ot += i * xt;
          tt += i * It;
          at += i * Ct;
          ft += i * Tt;
          ct += i * Lt;
          je += i * Pt;
          et += i * Ot;
          i = N[2];
          me += i * z;
          ee += i * gt;
          ce += i * Et;
          fe += i * bt;
          Ee += i * dt;
          xe += i * _t;
          De += i * pt;
          Ge += i * Bt;
          ot += i * mt;
          tt += i * xt;
          at += i * It;
          ft += i * Ct;
          ct += i * Tt;
          je += i * Lt;
          et += i * Pt;
          Ye += i * Ot;
          i = N[3];
          ee += i * z;
          ce += i * gt;
          fe += i * Et;
          Ee += i * bt;
          xe += i * dt;
          De += i * _t;
          Ge += i * pt;
          ot += i * Bt;
          tt += i * mt;
          at += i * xt;
          ft += i * It;
          ct += i * Ct;
          je += i * Tt;
          et += i * Lt;
          Ye += i * Pt;
          Ve += i * Ot;
          i = N[4];
          ce += i * z;
          fe += i * gt;
          Ee += i * Et;
          xe += i * bt;
          De += i * dt;
          Ge += i * _t;
          ot += i * pt;
          tt += i * Bt;
          at += i * mt;
          ft += i * xt;
          ct += i * It;
          je += i * Ct;
          et += i * Tt;
          Ye += i * Lt;
          Ve += i * Pt;
          ze += i * Ot;
          i = N[5];
          fe += i * z;
          Ee += i * gt;
          xe += i * Et;
          De += i * bt;
          Ge += i * dt;
          ot += i * _t;
          tt += i * pt;
          at += i * Bt;
          ft += i * mt;
          ct += i * xt;
          je += i * It;
          et += i * Ct;
          Ye += i * Tt;
          Ve += i * Lt;
          ze += i * Pt;
          We += i * Ot;
          i = N[6];
          Ee += i * z;
          xe += i * gt;
          De += i * Et;
          Ge += i * bt;
          ot += i * dt;
          tt += i * _t;
          at += i * pt;
          ft += i * Bt;
          ct += i * mt;
          je += i * xt;
          et += i * It;
          Ye += i * Ct;
          Ve += i * Tt;
          ze += i * Lt;
          We += i * Pt;
          ge += i * Ot;
          i = N[7];
          xe += i * z;
          De += i * gt;
          Ge += i * Et;
          ot += i * bt;
          tt += i * dt;
          at += i * _t;
          ft += i * pt;
          ct += i * Bt;
          je += i * mt;
          et += i * xt;
          Ye += i * It;
          Ve += i * Ct;
          ze += i * Tt;
          We += i * Lt;
          ge += i * Pt;
          Ae += i * Ot;
          i = N[8];
          De += i * z;
          Ge += i * gt;
          ot += i * Et;
          tt += i * bt;
          at += i * dt;
          ft += i * _t;
          ct += i * pt;
          je += i * Bt;
          et += i * mt;
          Ye += i * xt;
          Ve += i * It;
          ze += i * Ct;
          We += i * Tt;
          ge += i * Lt;
          Ae += i * Pt;
          Ce += i * Ot;
          i = N[9];
          Ge += i * z;
          ot += i * gt;
          tt += i * Et;
          at += i * bt;
          ft += i * dt;
          ct += i * _t;
          je += i * pt;
          et += i * Bt;
          Ye += i * mt;
          Ve += i * xt;
          ze += i * It;
          We += i * Ct;
          ge += i * Tt;
          Ae += i * Lt;
          Ce += i * Pt;
          ye += i * Ot;
          i = N[10];
          ot += i * z;
          tt += i * gt;
          at += i * Et;
          ft += i * bt;
          ct += i * dt;
          je += i * _t;
          et += i * pt;
          Ye += i * Bt;
          Ve += i * mt;
          ze += i * xt;
          We += i * It;
          ge += i * Ct;
          Ae += i * Tt;
          Ce += i * Lt;
          ye += i * Pt;
          Se += i * Ot;
          i = N[11];
          tt += i * z;
          at += i * gt;
          ft += i * Et;
          ct += i * bt;
          je += i * dt;
          et += i * _t;
          Ye += i * pt;
          Ve += i * Bt;
          ze += i * mt;
          We += i * xt;
          ge += i * It;
          Ae += i * Ct;
          Ce += i * Tt;
          ye += i * Lt;
          Se += i * Pt;
          ke += i * Ot;
          i = N[12];
          at += i * z;
          ft += i * gt;
          ct += i * Et;
          je += i * bt;
          et += i * dt;
          Ye += i * _t;
          Ve += i * pt;
          ze += i * Bt;
          We += i * mt;
          ge += i * xt;
          Ae += i * It;
          Ce += i * Ct;
          ye += i * Tt;
          Se += i * Lt;
          ke += i * Pt;
          it += i * Ot;
          i = N[13];
          ft += i * z;
          ct += i * gt;
          je += i * Et;
          et += i * bt;
          Ye += i * dt;
          Ve += i * _t;
          ze += i * pt;
          We += i * Bt;
          ge += i * mt;
          Ae += i * xt;
          Ce += i * It;
          ye += i * Ct;
          Se += i * Tt;
          ke += i * Lt;
          it += i * Pt;
          ht += i * Ot;
          i = N[14];
          ct += i * z;
          je += i * gt;
          et += i * Et;
          Ye += i * bt;
          Ve += i * dt;
          ze += i * _t;
          We += i * pt;
          ge += i * Bt;
          Ae += i * mt;
          Ce += i * xt;
          ye += i * It;
          Se += i * Ct;
          ke += i * Tt;
          it += i * Lt;
          ht += i * Pt;
          ut += i * Ot;
          i = N[15];
          je += i * z;
          et += i * gt;
          Ye += i * Et;
          Ve += i * bt;
          ze += i * dt;
          We += i * _t;
          ge += i * pt;
          Ae += i * Bt;
          Ce += i * mt;
          ye += i * xt;
          Se += i * It;
          ke += i * Ct;
          it += i * Tt;
          ht += i * Lt;
          ut += i * Pt;
          lt += i * Ot;
          te += et * 38;
          ae += Ye * 38;
          me += Ve * 38;
          ee += ze * 38;
          ce += We * 38;
          fe += ge * 38;
          Ee += Ae * 38;
          xe += Ce * 38;
          De += ye * 38;
          Ge += Se * 38;
          ot += ke * 38;
          tt += it * 38;
          at += ht * 38;
          ft += ut * 38;
          ct += lt * 38;
          H = 1;
          i = te + H + 65535;
          H = Math.floor(i / 65536);
          te = i - H * 65536;
          i = ae + H + 65535;
          H = Math.floor(i / 65536);
          ae = i - H * 65536;
          i = me + H + 65535;
          H = Math.floor(i / 65536);
          me = i - H * 65536;
          i = ee + H + 65535;
          H = Math.floor(i / 65536);
          ee = i - H * 65536;
          i = ce + H + 65535;
          H = Math.floor(i / 65536);
          ce = i - H * 65536;
          i = fe + H + 65535;
          H = Math.floor(i / 65536);
          fe = i - H * 65536;
          i = Ee + H + 65535;
          H = Math.floor(i / 65536);
          Ee = i - H * 65536;
          i = xe + H + 65535;
          H = Math.floor(i / 65536);
          xe = i - H * 65536;
          i = De + H + 65535;
          H = Math.floor(i / 65536);
          De = i - H * 65536;
          i = Ge + H + 65535;
          H = Math.floor(i / 65536);
          Ge = i - H * 65536;
          i = ot + H + 65535;
          H = Math.floor(i / 65536);
          ot = i - H * 65536;
          i = tt + H + 65535;
          H = Math.floor(i / 65536);
          tt = i - H * 65536;
          i = at + H + 65535;
          H = Math.floor(i / 65536);
          at = i - H * 65536;
          i = ft + H + 65535;
          H = Math.floor(i / 65536);
          ft = i - H * 65536;
          i = ct + H + 65535;
          H = Math.floor(i / 65536);
          ct = i - H * 65536;
          i = je + H + 65535;
          H = Math.floor(i / 65536);
          je = i - H * 65536;
          te += H - 1 + (H - 1) * 37;
          H = 1;
          i = te + H + 65535;
          H = Math.floor(i / 65536);
          te = i - H * 65536;
          i = ae + H + 65535;
          H = Math.floor(i / 65536);
          ae = i - H * 65536;
          i = me + H + 65535;
          H = Math.floor(i / 65536);
          me = i - H * 65536;
          i = ee + H + 65535;
          H = Math.floor(i / 65536);
          ee = i - H * 65536;
          i = ce + H + 65535;
          H = Math.floor(i / 65536);
          ce = i - H * 65536;
          i = fe + H + 65535;
          H = Math.floor(i / 65536);
          fe = i - H * 65536;
          i = Ee + H + 65535;
          H = Math.floor(i / 65536);
          Ee = i - H * 65536;
          i = xe + H + 65535;
          H = Math.floor(i / 65536);
          xe = i - H * 65536;
          i = De + H + 65535;
          H = Math.floor(i / 65536);
          De = i - H * 65536;
          i = Ge + H + 65535;
          H = Math.floor(i / 65536);
          Ge = i - H * 65536;
          i = ot + H + 65535;
          H = Math.floor(i / 65536);
          ot = i - H * 65536;
          i = tt + H + 65535;
          H = Math.floor(i / 65536);
          tt = i - H * 65536;
          i = at + H + 65535;
          H = Math.floor(i / 65536);
          at = i - H * 65536;
          i = ft + H + 65535;
          H = Math.floor(i / 65536);
          ft = i - H * 65536;
          i = ct + H + 65535;
          H = Math.floor(i / 65536);
          ct = i - H * 65536;
          i = je + H + 65535;
          H = Math.floor(i / 65536);
          je = i - H * 65536;
          te += H - 1 + (H - 1) * 37;
          _[0] = te;
          _[1] = ae;
          _[2] = me;
          _[3] = ee;
          _[4] = ce;
          _[5] = fe;
          _[6] = Ee;
          _[7] = xe;
          _[8] = De;
          _[9] = Ge;
          _[10] = ot;
          _[11] = tt;
          _[12] = at;
          _[13] = ft;
          _[14] = ct;
          _[15] = je;
        }
        function Be(_, N) {
          Oe(_, N, N);
        }
        function $e(_, N) {
          var T = r();
          var i;
          for (i = 0; i < 16; i++) {
            T[i] = N[i];
          }
          for (i = 253; i >= 0; i--) {
            Be(T, T);
            if (i !== 2 && i !== 4) {
              Oe(T, T, N);
            }
          }
          for (i = 0; i < 16; i++) {
            _[i] = T[i];
          }
        }
        function de(_, N) {
          var T = r();
          var i;
          for (i = 0; i < 16; i++) {
            T[i] = N[i];
          }
          for (i = 250; i >= 0; i--) {
            Be(T, T);
            if (i !== 1) {
              Oe(T, T, N);
            }
          }
          for (i = 0; i < 16; i++) {
            _[i] = T[i];
          }
        }
        function P(_, N, T) {
          var i = new Uint8Array(32);
          var H = new Float64Array(80);
          var te;
          var ae;
          var me = r();
          var ee = r();
          var ce = r();
          var fe = r();
          var Ee = r();
          var xe = r();
          for (ae = 0; ae < 31; ae++) {
            i[ae] = N[ae];
          }
          i[31] = N[31] & 127 | 64;
          i[0] &= 248;
          Pe(H, T);
          ae = 0;
          for (; ae < 16; ae++) {
            ee[ae] = H[ae];
            fe[ae] = me[ae] = ce[ae] = 0;
          }
          me[0] = fe[0] = 1;
          ae = 254;
          for (; ae >= 0; --ae) {
            te = i[ae >>> 3] >>> (ae & 7) & 1;
            Qe(me, ee, te);
            Qe(ce, fe, te);
            qe(Ee, me, ce);
            Je(me, me, ce);
            qe(ce, ee, fe);
            Je(ee, ee, fe);
            Be(fe, Ee);
            Be(xe, me);
            Oe(me, ce, me);
            Oe(ce, ee, Ee);
            qe(Ee, me, ce);
            Je(me, me, ce);
            Be(ee, me);
            Je(ce, fe, xe);
            Oe(me, ce, R);
            qe(me, me, fe);
            Oe(ce, ce, me);
            Oe(me, fe, xe);
            Oe(fe, ee, H);
            Be(ee, Ee);
            Qe(me, ee, te);
            Qe(ce, fe, te);
          }
          for (ae = 0; ae < 16; ae++) {
            H[ae + 16] = me[ae];
            H[ae + 32] = ce[ae];
            H[ae + 48] = ee[ae];
            H[ae + 64] = fe[ae];
          }
          var De = H.subarray(32);
          var Ge = H.subarray(16);
          $e(De, De);
          Oe(Ge, Ge, De);
          Xe(_, Ge);
          return 0;
        }
        function W(_, N) {
          return P(_, N, m);
        }
        function g(_, N) {
          y(N, 32);
          return W(_, N);
        }
        function f(_, N, T) {
          var i = new Uint8Array(32);
          P(i, T, N);
          return V(_, k, i, F);
        }
        var o = Me;
        var b = Ne;
        function O(_, N, T, i, H, te) {
          var ae = new Uint8Array(32);
          f(ae, H, te);
          return o(_, N, T, i, ae);
        }
        function q(_, N, T, i, H, te) {
          var ae = new Uint8Array(32);
          f(ae, H, te);
          return b(_, N, T, i, ae);
        }
        var E = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];
        function A(_, N, T, i) {
          var H = new Int32Array(16);
          var te = new Int32Array(16);
          var ae;
          var me;
          var ee;
          var ce;
          var fe;
          var Ee;
          var xe;
          var De;
          var Ge;
          var ot;
          var tt;
          var at;
          var ft;
          var ct;
          var je;
          var et;
          var Ye;
          var Ve;
          var ze;
          var We;
          var ge;
          var Ae;
          var Ce;
          var ye;
          var Se;
          var ke;
          var it = _[0];
          var ht = _[1];
          var ut = _[2];
          var lt = _[3];
          var z = _[4];
          var gt = _[5];
          var Et = _[6];
          var bt = _[7];
          var dt = N[0];
          var _t = N[1];
          var pt = N[2];
          var Bt = N[3];
          var mt = N[4];
          var xt = N[5];
          var It = N[6];
          var Ct = N[7];
          var Tt = 0;
          while (i >= 128) {
            for (ze = 0; ze < 16; ze++) {
              We = ze * 8 + Tt;
              H[ze] = T[We + 0] << 24 | T[We + 1] << 16 | T[We + 2] << 8 | T[We + 3];
              te[ze] = T[We + 4] << 24 | T[We + 5] << 16 | T[We + 6] << 8 | T[We + 7];
            }
            for (ze = 0; ze < 80; ze++) {
              ae = it;
              me = ht;
              ee = ut;
              ce = lt;
              fe = z;
              Ee = gt;
              xe = Et;
              De = bt;
              Ge = dt;
              ot = _t;
              tt = pt;
              at = Bt;
              ft = mt;
              ct = xt;
              je = It;
              et = Ct;
              ge = bt;
              Ae = Ct;
              Ce = Ae & 65535;
              ye = Ae >>> 16;
              Se = ge & 65535;
              ke = ge >>> 16;
              ge = (z >>> 14 | mt << 18) ^ (z >>> 18 | mt << 14) ^ (mt >>> 9 | z << 23);
              Ae = (mt >>> 14 | z << 18) ^ (mt >>> 18 | z << 14) ^ (z >>> 9 | mt << 23);
              Ce += Ae & 65535;
              ye += Ae >>> 16;
              Se += ge & 65535;
              ke += ge >>> 16;
              ge = z & gt ^ ~z & Et;
              Ae = mt & xt ^ ~mt & It;
              Ce += Ae & 65535;
              ye += Ae >>> 16;
              Se += ge & 65535;
              ke += ge >>> 16;
              ge = E[ze * 2];
              Ae = E[ze * 2 + 1];
              Ce += Ae & 65535;
              ye += Ae >>> 16;
              Se += ge & 65535;
              ke += ge >>> 16;
              ge = H[ze % 16];
              Ae = te[ze % 16];
              Ce += Ae & 65535;
              ye += Ae >>> 16;
              Se += ge & 65535;
              ke += ge >>> 16;
              ye += Ce >>> 16;
              Se += ye >>> 16;
              ke += Se >>> 16;
              Ye = Se & 65535 | ke << 16;
              Ve = Ce & 65535 | ye << 16;
              ge = Ye;
              Ae = Ve;
              Ce = Ae & 65535;
              ye = Ae >>> 16;
              Se = ge & 65535;
              ke = ge >>> 16;
              ge = (it >>> 28 | dt << 4) ^ (dt >>> 2 | it << 30) ^ (dt >>> 7 | it << 25);
              Ae = (dt >>> 28 | it << 4) ^ (it >>> 2 | dt << 30) ^ (it >>> 7 | dt << 25);
              Ce += Ae & 65535;
              ye += Ae >>> 16;
              Se += ge & 65535;
              ke += ge >>> 16;
              ge = it & ht ^ it & ut ^ ht & ut;
              Ae = dt & _t ^ dt & pt ^ _t & pt;
              Ce += Ae & 65535;
              ye += Ae >>> 16;
              Se += ge & 65535;
              ke += ge >>> 16;
              ye += Ce >>> 16;
              Se += ye >>> 16;
              ke += Se >>> 16;
              De = Se & 65535 | ke << 16;
              et = Ce & 65535 | ye << 16;
              ge = ce;
              Ae = at;
              Ce = Ae & 65535;
              ye = Ae >>> 16;
              Se = ge & 65535;
              ke = ge >>> 16;
              ge = Ye;
              Ae = Ve;
              Ce += Ae & 65535;
              ye += Ae >>> 16;
              Se += ge & 65535;
              ke += ge >>> 16;
              ye += Ce >>> 16;
              Se += ye >>> 16;
              ke += Se >>> 16;
              ce = Se & 65535 | ke << 16;
              at = Ce & 65535 | ye << 16;
              ht = ae;
              ut = me;
              lt = ee;
              z = ce;
              gt = fe;
              Et = Ee;
              bt = xe;
              it = De;
              _t = Ge;
              pt = ot;
              Bt = tt;
              mt = at;
              xt = ft;
              It = ct;
              Ct = je;
              dt = et;
              if (ze % 16 === 15) {
                for (We = 0; We < 16; We++) {
                  ge = H[We];
                  Ae = te[We];
                  Ce = Ae & 65535;
                  ye = Ae >>> 16;
                  Se = ge & 65535;
                  ke = ge >>> 16;
                  ge = H[(We + 9) % 16];
                  Ae = te[(We + 9) % 16];
                  Ce += Ae & 65535;
                  ye += Ae >>> 16;
                  Se += ge & 65535;
                  ke += ge >>> 16;
                  Ye = H[(We + 1) % 16];
                  Ve = te[(We + 1) % 16];
                  ge = (Ye >>> 1 | Ve << 31) ^ (Ye >>> 8 | Ve << 24) ^ Ye >>> 7;
                  Ae = (Ve >>> 1 | Ye << 31) ^ (Ve >>> 8 | Ye << 24) ^ (Ve >>> 7 | Ye << 25);
                  Ce += Ae & 65535;
                  ye += Ae >>> 16;
                  Se += ge & 65535;
                  ke += ge >>> 16;
                  Ye = H[(We + 14) % 16];
                  Ve = te[(We + 14) % 16];
                  ge = (Ye >>> 19 | Ve << 13) ^ (Ve >>> 29 | Ye << 3) ^ Ye >>> 6;
                  Ae = (Ve >>> 19 | Ye << 13) ^ (Ye >>> 29 | Ve << 3) ^ (Ve >>> 6 | Ye << 26);
                  Ce += Ae & 65535;
                  ye += Ae >>> 16;
                  Se += ge & 65535;
                  ke += ge >>> 16;
                  ye += Ce >>> 16;
                  Se += ye >>> 16;
                  ke += Se >>> 16;
                  H[We] = Se & 65535 | ke << 16;
                  te[We] = Ce & 65535 | ye << 16;
                }
              }
            }
            ge = it;
            Ae = dt;
            Ce = Ae & 65535;
            ye = Ae >>> 16;
            Se = ge & 65535;
            ke = ge >>> 16;
            ge = _[0];
            Ae = N[0];
            Ce += Ae & 65535;
            ye += Ae >>> 16;
            Se += ge & 65535;
            ke += ge >>> 16;
            ye += Ce >>> 16;
            Se += ye >>> 16;
            ke += Se >>> 16;
            _[0] = it = Se & 65535 | ke << 16;
            N[0] = dt = Ce & 65535 | ye << 16;
            ge = ht;
            Ae = _t;
            Ce = Ae & 65535;
            ye = Ae >>> 16;
            Se = ge & 65535;
            ke = ge >>> 16;
            ge = _[1];
            Ae = N[1];
            Ce += Ae & 65535;
            ye += Ae >>> 16;
            Se += ge & 65535;
            ke += ge >>> 16;
            ye += Ce >>> 16;
            Se += ye >>> 16;
            ke += Se >>> 16;
            _[1] = ht = Se & 65535 | ke << 16;
            N[1] = _t = Ce & 65535 | ye << 16;
            ge = ut;
            Ae = pt;
            Ce = Ae & 65535;
            ye = Ae >>> 16;
            Se = ge & 65535;
            ke = ge >>> 16;
            ge = _[2];
            Ae = N[2];
            Ce += Ae & 65535;
            ye += Ae >>> 16;
            Se += ge & 65535;
            ke += ge >>> 16;
            ye += Ce >>> 16;
            Se += ye >>> 16;
            ke += Se >>> 16;
            _[2] = ut = Se & 65535 | ke << 16;
            N[2] = pt = Ce & 65535 | ye << 16;
            ge = lt;
            Ae = Bt;
            Ce = Ae & 65535;
            ye = Ae >>> 16;
            Se = ge & 65535;
            ke = ge >>> 16;
            ge = _[3];
            Ae = N[3];
            Ce += Ae & 65535;
            ye += Ae >>> 16;
            Se += ge & 65535;
            ke += ge >>> 16;
            ye += Ce >>> 16;
            Se += ye >>> 16;
            ke += Se >>> 16;
            _[3] = lt = Se & 65535 | ke << 16;
            N[3] = Bt = Ce & 65535 | ye << 16;
            ge = z;
            Ae = mt;
            Ce = Ae & 65535;
            ye = Ae >>> 16;
            Se = ge & 65535;
            ke = ge >>> 16;
            ge = _[4];
            Ae = N[4];
            Ce += Ae & 65535;
            ye += Ae >>> 16;
            Se += ge & 65535;
            ke += ge >>> 16;
            ye += Ce >>> 16;
            Se += ye >>> 16;
            ke += Se >>> 16;
            _[4] = z = Se & 65535 | ke << 16;
            N[4] = mt = Ce & 65535 | ye << 16;
            ge = gt;
            Ae = xt;
            Ce = Ae & 65535;
            ye = Ae >>> 16;
            Se = ge & 65535;
            ke = ge >>> 16;
            ge = _[5];
            Ae = N[5];
            Ce += Ae & 65535;
            ye += Ae >>> 16;
            Se += ge & 65535;
            ke += ge >>> 16;
            ye += Ce >>> 16;
            Se += ye >>> 16;
            ke += Se >>> 16;
            _[5] = gt = Se & 65535 | ke << 16;
            N[5] = xt = Ce & 65535 | ye << 16;
            ge = Et;
            Ae = It;
            Ce = Ae & 65535;
            ye = Ae >>> 16;
            Se = ge & 65535;
            ke = ge >>> 16;
            ge = _[6];
            Ae = N[6];
            Ce += Ae & 65535;
            ye += Ae >>> 16;
            Se += ge & 65535;
            ke += ge >>> 16;
            ye += Ce >>> 16;
            Se += ye >>> 16;
            ke += Se >>> 16;
            _[6] = Et = Se & 65535 | ke << 16;
            N[6] = It = Ce & 65535 | ye << 16;
            ge = bt;
            Ae = Ct;
            Ce = Ae & 65535;
            ye = Ae >>> 16;
            Se = ge & 65535;
            ke = ge >>> 16;
            ge = _[7];
            Ae = N[7];
            Ce += Ae & 65535;
            ye += Ae >>> 16;
            Se += ge & 65535;
            ke += ge >>> 16;
            ye += Ce >>> 16;
            Se += ye >>> 16;
            ke += Se >>> 16;
            _[7] = bt = Se & 65535 | ke << 16;
            N[7] = Ct = Ce & 65535 | ye << 16;
            Tt += 128;
            i -= 128;
          }
          return i;
        }
        function h(_, N, T) {
          var i = new Int32Array(8);
          var H = new Int32Array(8);
          var te = new Uint8Array(256);
          var ae;
          var me = T;
          i[0] = 1779033703;
          i[1] = 3144134277;
          i[2] = 1013904242;
          i[3] = 2773480762;
          i[4] = 1359893119;
          i[5] = 2600822924;
          i[6] = 528734635;
          i[7] = 1541459225;
          H[0] = 4089235720;
          H[1] = 2227873595;
          H[2] = 4271175723;
          H[3] = 1595750129;
          H[4] = 2917565137;
          H[5] = 725511199;
          H[6] = 4215389547;
          H[7] = 327033209;
          A(i, H, N, T);
          T %= 128;
          ae = 0;
          for (; ae < T; ae++) {
            te[ae] = N[me - T + ae];
          }
          te[T] = 128;
          T = 256 - (T < 112 ? 1 : 0) * 128;
          te[T - 9] = 0;
          w(te, T - 8, me / 536870912 | 0, me << 3);
          A(i, H, te, T);
          ae = 0;
          for (; ae < 8; ae++) {
            w(_, ae * 8, i[ae], H[ae]);
          }
          return 0;
        }
        function S(_, N) {
          var T = r();
          var i = r();
          var H = r();
          var te = r();
          var ae = r();
          var me = r();
          var ee = r();
          var ce = r();
          var fe = r();
          Je(T, _[1], _[0]);
          Je(fe, N[1], N[0]);
          Oe(T, T, fe);
          qe(i, _[0], _[1]);
          qe(fe, N[0], N[1]);
          Oe(i, i, fe);
          Oe(H, _[3], N[3]);
          Oe(H, H, Q);
          Oe(te, _[2], N[2]);
          qe(te, te, te);
          Je(ae, i, T);
          Je(me, te, H);
          qe(ee, te, H);
          qe(ce, i, T);
          Oe(_[0], ae, me);
          Oe(_[1], ce, ee);
          Oe(_[2], ee, me);
          Oe(_[3], ae, ce);
        }
        function L(_, N, T) {
          var i;
          for (i = 0; i < 4; i++) {
            Qe(_[i], N[i], T);
          }
        }
        function j(_, N) {
          var T = r();
          var i = r();
          var H = r();
          $e(H, N[2]);
          Oe(T, N[0], H);
          Oe(i, N[1], H);
          Xe(_, i);
          _[31] ^= Re(T) << 7;
        }
        function se(_, N, T) {
          var i;
          var H;
          Ue(_[0], M);
          Ue(_[1], v);
          Ue(_[2], v);
          Ue(_[3], M);
          H = 255;
          for (; H >= 0; --H) {
            i = T[H / 8 | 0] >> (H & 7) & 1;
            L(_, N, i);
            S(N, _);
            S(_, _);
            L(_, N, i);
          }
        }
        function le(_, N) {
          var T = [r(), r(), r(), r()];
          Ue(T[0], n);
          Ue(T[1], B);
          Ue(T[2], v);
          Oe(T[3], n, B);
          se(_, T, N);
        }
        function _e(_, N, T) {
          var i = new Uint8Array(64);
          var H = [r(), r(), r(), r()];
          var te;
          if (!T) {
            y(N, 32);
          }
          h(i, N, 32);
          i[0] &= 248;
          i[31] &= 127;
          i[31] |= 64;
          le(H, i);
          j(_, H);
          te = 0;
          for (; te < 32; te++) {
            N[te + 32] = _[te];
          }
          return 0;
        }
        var d = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);
        function c(_, N) {
          var T;
          var i;
          var H;
          var te;
          for (i = 63; i >= 32; --i) {
            T = 0;
            H = i - 32;
            te = i - 12;
            for (; H < te; ++H) {
              N[H] += T - N[i] * 16 * d[H - (i - 32)];
              T = N[H] + 128 >> 8;
              N[H] -= T * 256;
            }
            N[H] += T;
            N[i] = 0;
          }
          T = 0;
          H = 0;
          for (; H < 32; H++) {
            N[H] += T - (N[31] >> 4) * d[H];
            T = N[H] >> 8;
            N[H] &= 255;
          }
          for (H = 0; H < 32; H++) {
            N[H] -= T * d[H];
          }
          for (i = 0; i < 32; i++) {
            N[i + 1] += N[i] >> 8;
            _[i] = N[i] & 255;
          }
        }
        function t(_) {
          var N = new Float64Array(64);
          var T;
          for (T = 0; T < 64; T++) {
            N[T] = _[T];
          }
          for (T = 0; T < 64; T++) {
            _[T] = 0;
          }
          c(_, N);
        }
        function s(_, N, T, i) {
          var H = new Uint8Array(64);
          var te = new Uint8Array(64);
          var ae = new Uint8Array(64);
          var me;
          var ee;
          var ce = new Float64Array(64);
          var fe = [r(), r(), r(), r()];
          h(H, i, 32);
          H[0] &= 248;
          H[31] &= 127;
          H[31] |= 64;
          var Ee = T + 64;
          for (me = 0; me < T; me++) {
            _[64 + me] = N[me];
          }
          for (me = 0; me < 32; me++) {
            _[32 + me] = H[32 + me];
          }
          h(ae, _.subarray(32), T + 32);
          t(ae);
          le(fe, ae);
          j(_, fe);
          me = 32;
          for (; me < 64; me++) {
            _[me] = i[me];
          }
          h(te, _, T + 64);
          t(te);
          me = 0;
          for (; me < 64; me++) {
            ce[me] = 0;
          }
          for (me = 0; me < 32; me++) {
            ce[me] = ae[me];
          }
          for (me = 0; me < 32; me++) {
            for (ee = 0; ee < 32; ee++) {
              ce[me + ee] += te[me] * H[ee];
            }
          }
          c(_.subarray(32), ce);
          return Ee;
        }
        function a(_, N) {
          var T = r();
          var i = r();
          var H = r();
          var te = r();
          var ae = r();
          var me = r();
          var ee = r();
          Ue(_[2], v);
          Pe(_[1], N);
          Be(H, _[1]);
          Oe(te, H, I);
          Je(H, H, _[2]);
          qe(te, _[2], te);
          Be(ae, te);
          Be(me, ae);
          Oe(ee, me, ae);
          Oe(T, ee, H);
          Oe(T, T, te);
          de(T, T);
          Oe(T, T, H);
          Oe(T, T, te);
          Oe(T, T, te);
          Oe(_[0], T, te);
          Be(i, _[0]);
          Oe(i, i, te);
          if (Ke(i, H)) {
            Oe(_[0], _[0], C);
          }
          Be(i, _[0]);
          Oe(i, i, te);
          if (Ke(i, H)) {
            return -1;
          } else {
            if (Re(_[0]) === N[31] >> 7) {
              Je(_[0], M, _[0]);
            }
            Oe(_[3], _[0], _[1]);
            return 0;
          }
        }
        function l(_, N, T, i) {
          var H;
          var te;
          var ae = new Uint8Array(32);
          var me = new Uint8Array(64);
          var ee = [r(), r(), r(), r()];
          var ce = [r(), r(), r(), r()];
          te = -1;
          if (T < 64 || a(ce, i)) {
            return -1;
          }
          for (H = 0; H < T; H++) {
            _[H] = N[H];
          }
          for (H = 0; H < 32; H++) {
            _[H + 32] = i[H];
          }
          h(me, _, T);
          t(me);
          se(ee, ce, me);
          le(ce, N.subarray(32));
          S(ee, ce);
          j(ae, ee);
          T -= 64;
          if ($(N, 0, ae, 0)) {
            for (H = 0; H < T; H++) {
              _[H] = 0;
            }
            return -1;
          }
          for (H = 0; H < T; H++) {
            _[H] = N[H + 64];
          }
          te = T;
          return te;
        }
        var u = 32;
        var x = 24;
        var D = 32;
        var G = 16;
        var ie = 32;
        var ue = 32;
        var pe = 32;
        var Te = 32;
        var He = 32;
        var ve = x;
        var Ze = D;
        var nt = G;
        var st = 64;
        var rt = 32;
        var yt = 64;
        var wt = 32;
        var kt = 64;
        e.lowlevel = {
          crypto_core_hsalsa20: V,
          crypto_stream_xor: U,
          crypto_stream: he,
          crypto_stream_salsa20_xor: oe,
          crypto_stream_salsa20: Z,
          crypto_onetimeauth: be,
          crypto_onetimeauth_verify: we,
          crypto_verify_16: K,
          crypto_verify_32: $,
          crypto_secretbox: Me,
          crypto_secretbox_open: Ne,
          crypto_scalarmult: P,
          crypto_scalarmult_base: W,
          crypto_box_beforenm: f,
          crypto_box_afternm: o,
          crypto_box: O,
          crypto_box_open: q,
          crypto_box_keypair: g,
          crypto_hash: h,
          crypto_sign: s,
          crypto_sign_keypair: _e,
          crypto_sign_open: l,
          crypto_secretbox_KEYBYTES: u,
          crypto_secretbox_NONCEBYTES: x,
          crypto_secretbox_ZEROBYTES: D,
          crypto_secretbox_BOXZEROBYTES: G,
          crypto_scalarmult_BYTES: ie,
          crypto_scalarmult_SCALARBYTES: ue,
          crypto_box_PUBLICKEYBYTES: pe,
          crypto_box_SECRETKEYBYTES: Te,
          crypto_box_BEFORENMBYTES: He,
          crypto_box_NONCEBYTES: ve,
          crypto_box_ZEROBYTES: Ze,
          crypto_box_BOXZEROBYTES: nt,
          crypto_sign_BYTES: st,
          crypto_sign_PUBLICKEYBYTES: rt,
          crypto_sign_SECRETKEYBYTES: yt,
          crypto_sign_SEEDBYTES: wt,
          crypto_hash_BYTES: kt
        };
        function Qt(_, N) {
          if (_.length !== u) {
            throw new Error("bad key size");
          }
          if (N.length !== x) {
            throw new Error("bad nonce size");
          }
        }
        function rn(_, N) {
          if (_.length !== pe) {
            throw new Error("bad public key size");
          }
          if (N.length !== Te) {
            throw new Error("bad secret key size");
          }
        }
        function Fe() {
          var _;
          var N;
          for (N = 0; N < arguments.length; N++) {
            if ((_ = Object.prototype.toString.call(arguments[N])) !== "[object Uint8Array]") {
              throw new TypeError("unexpected type " + _ + ", use Uint8Array");
            }
          }
        }
        function Wt(_) {
          for (var N = 0; N < _.length; N++) {
            _[N] = 0;
          }
        }
        if (!e.util) {
          e.util = {};
          e.util.decodeUTF8 = e.util.encodeUTF8 = e.util.encodeBase64 = e.util.decodeBase64 = function () {
            throw new Error("nacl.util moved into separate package: https://github.com/dchest/tweetnacl-util-js");
          };
        }
        e.randomBytes = function (_) {
          var N = new Uint8Array(_);
          y(N, _);
          return N;
        };
        e.secretbox = function (_, N, T) {
          Fe(_, N, T);
          Qt(T, N);
          var i = new Uint8Array(D + _.length);
          var H = new Uint8Array(i.length);
          for (var te = 0; te < _.length; te++) {
            i[te + D] = _[te];
          }
          Me(H, i, i.length, N, T);
          return H.subarray(G);
        };
        e.secretbox.open = function (_, N, T) {
          Fe(_, N, T);
          Qt(T, N);
          var i = new Uint8Array(G + _.length);
          var H = new Uint8Array(i.length);
          for (var te = 0; te < _.length; te++) {
            i[te + G] = _[te];
          }
          if (i.length < 32 || Ne(H, i, i.length, N, T) !== 0) {
            return false;
          } else {
            return H.subarray(D);
          }
        };
        e.secretbox.keyLength = u;
        e.secretbox.nonceLength = x;
        e.secretbox.overheadLength = G;
        e.scalarMult = function (_, N) {
          Fe(_, N);
          if (_.length !== ue) {
            throw new Error("bad n size");
          }
          if (N.length !== ie) {
            throw new Error("bad p size");
          }
          var T = new Uint8Array(ie);
          P(T, _, N);
          return T;
        };
        e.scalarMult.base = function (_) {
          Fe(_);
          if (_.length !== ue) {
            throw new Error("bad n size");
          }
          var N = new Uint8Array(ie);
          W(N, _);
          return N;
        };
        e.scalarMult.scalarLength = ue;
        e.scalarMult.groupElementLength = ie;
        e.box = function (_, N, T, i) {
          var H = e.box.before(T, i);
          return e.secretbox(_, N, H);
        };
        e.box.before = function (_, N) {
          Fe(_, N);
          rn(_, N);
          var T = new Uint8Array(He);
          f(T, _, N);
          return T;
        };
        e.box.after = e.secretbox;
        e.box.open = function (_, N, T, i) {
          var H = e.box.before(T, i);
          return e.secretbox.open(_, N, H);
        };
        e.box.open.after = e.secretbox.open;
        e.box.keyPair = function () {
          var _ = new Uint8Array(pe);
          var N = new Uint8Array(Te);
          g(_, N);
          return {
            publicKey: _,
            secretKey: N
          };
        };
        e.box.keyPair.fromSecretKey = function (_) {
          Fe(_);
          if (_.length !== Te) {
            throw new Error("bad secret key size");
          }
          var N = new Uint8Array(pe);
          W(N, _);
          return {
            publicKey: N,
            secretKey: new Uint8Array(_)
          };
        };
        e.box.publicKeyLength = pe;
        e.box.secretKeyLength = Te;
        e.box.sharedKeyLength = He;
        e.box.nonceLength = ve;
        e.box.overheadLength = e.secretbox.overheadLength;
        e.sign = function (_, N) {
          Fe(_, N);
          if (N.length !== yt) {
            throw new Error("bad secret key size");
          }
          var T = new Uint8Array(st + _.length);
          s(T, _, _.length, N);
          return T;
        };
        e.sign.open = function (_, N) {
          if (arguments.length !== 2) {
            throw new Error("nacl.sign.open accepts 2 arguments; did you mean to use nacl.sign.detached.verify?");
          }
          Fe(_, N);
          if (N.length !== rt) {
            throw new Error("bad public key size");
          }
          var T = new Uint8Array(_.length);
          var i = l(T, _, _.length, N);
          if (i < 0) {
            return null;
          }
          for (var H = new Uint8Array(i), te = 0; te < H.length; te++) {
            H[te] = T[te];
          }
          return H;
        };
        e.sign.detached = function (_, N) {
          var T = e.sign(_, N);
          for (var i = new Uint8Array(st), H = 0; H < i.length; H++) {
            i[H] = T[H];
          }
          return i;
        };
        e.sign.detached.verify = function (_, N, T) {
          Fe(_, N, T);
          if (N.length !== st) {
            throw new Error("bad signature size");
          }
          if (T.length !== rt) {
            throw new Error("bad public key size");
          }
          var i = new Uint8Array(st + _.length);
          var H = new Uint8Array(st + _.length);
          var te;
          for (te = 0; te < st; te++) {
            i[te] = N[te];
          }
          for (te = 0; te < _.length; te++) {
            i[te + st] = _[te];
          }
          return l(H, i, i.length, T) >= 0;
        };
        e.sign.keyPair = function () {
          var _ = new Uint8Array(rt);
          var N = new Uint8Array(yt);
          _e(_, N);
          return {
            publicKey: _,
            secretKey: N
          };
        };
        e.sign.keyPair.fromSecretKey = function (_) {
          Fe(_);
          if (_.length !== yt) {
            throw new Error("bad secret key size");
          }
          for (var N = new Uint8Array(rt), T = 0; T < N.length; T++) {
            N[T] = _[32 + T];
          }
          return {
            publicKey: N,
            secretKey: new Uint8Array(_)
          };
        };
        e.sign.keyPair.fromSeed = function (_) {
          Fe(_);
          if (_.length !== wt) {
            throw new Error("bad seed size");
          }
          var N = new Uint8Array(rt);
          var T = new Uint8Array(yt);
          for (var i = 0; i < 32; i++) {
            T[i] = _[i];
          }
          _e(N, T, true);
          return {
            publicKey: N,
            secretKey: T
          };
        };
        e.sign.publicKeyLength = rt;
        e.sign.secretKeyLength = yt;
        e.sign.seedLength = wt;
        e.sign.signatureLength = st;
        e.hash = function (_) {
          Fe(_);
          var N = new Uint8Array(kt);
          h(N, _, _.length);
          return N;
        };
        e.hash.hashLength = kt;
        e.verify = function (_, N) {
          Fe(_, N);
          if (_.length === 0 || N.length === 0 || _.length !== N.length) {
            return false;
          } else {
            return X(_, 0, N, 0, _.length) === 0;
          }
        };
        e.setPRNG = function (_) {
          y = _;
        };
        (function () {
          var _ = typeof self !== "undefined" ? self.crypto || self.msCrypto : null;
          if (_ && _.getRandomValues) {
            var N = 65536;
            e.setPRNG(function (T, i) {
              var H;
              var te = new Uint8Array(i);
              for (H = 0; H < i; H += N) {
                _.getRandomValues(te.subarray(H, H + Math.min(i - H, N)));
              }
              for (H = 0; H < i; H++) {
                T[H] = te[H];
              }
              Wt(te);
            });
          } else if (typeof fs !== "undefined") {
            _ = en;
            if (_ && _.randomBytes) {
              e.setPRNG(function (T, i) {
                var H;
                var te = _.randomBytes(i);
                for (H = 0; H < i; H++) {
                  T[H] = te[H];
                }
                Wt(te);
              });
            }
          }
        })();
      })(p.exports ? p.exports : self.nacl = self.nacl || {});
    })(On);
  }
  return On.exports;
}
var Un;
var Dr;
function Ti() {
  if (Dr) {
    return Un;
  }
  Dr = 1;
  var p = ps().lowlevel.crypto_hash;
  var e = 0;
  function r() {
    this.S = [new Uint32Array([3509652390, 2564797868, 805139163, 3491422135, 3101798381, 1780907670, 3128725573, 4046225305, 614570311, 3012652279, 134345442, 2240740374, 1667834072, 1901547113, 2757295779, 4103290238, 227898511, 1921955416, 1904987480, 2182433518, 2069144605, 3260701109, 2620446009, 720527379, 3318853667, 677414384, 3393288472, 3101374703, 2390351024, 1614419982, 1822297739, 2954791486, 3608508353, 3174124327, 2024746970, 1432378464, 3864339955, 2857741204, 1464375394, 1676153920, 1439316330, 715854006, 3033291828, 289532110, 2706671279, 2087905683, 3018724369, 1668267050, 732546397, 1947742710, 3462151702, 2609353502, 2950085171, 1814351708, 2050118529, 680887927, 999245976, 1800124847, 3300911131, 1713906067, 1641548236, 4213287313, 1216130144, 1575780402, 4018429277, 3917837745, 3693486850, 3949271944, 596196993, 3549867205, 258830323, 2213823033, 772490370, 2760122372, 1774776394, 2652871518, 566650946, 4142492826, 1728879713, 2882767088, 1783734482, 3629395816, 2517608232, 2874225571, 1861159788, 326777828, 3124490320, 2130389656, 2716951837, 967770486, 1724537150, 2185432712, 2364442137, 1164943284, 2105845187, 998989502, 3765401048, 2244026483, 1075463327, 1455516326, 1322494562, 910128902, 469688178, 1117454909, 936433444, 3490320968, 3675253459, 1240580251, 122909385, 2157517691, 634681816, 4142456567, 3825094682, 3061402683, 2540495037, 79693498, 3249098678, 1084186820, 1583128258, 426386531, 1761308591, 1047286709, 322548459, 995290223, 1845252383, 2603652396, 3431023940, 2942221577, 3202600964, 3727903485, 1712269319, 422464435, 3234572375, 1170764815, 3523960633, 3117677531, 1434042557, 442511882, 3600875718, 1076654713, 1738483198, 4213154764, 2393238008, 3677496056, 1014306527, 4251020053, 793779912, 2902807211, 842905082, 4246964064, 1395751752, 1040244610, 2656851899, 3396308128, 445077038, 3742853595, 3577915638, 679411651, 2892444358, 2354009459, 1767581616, 3150600392, 3791627101, 3102740896, 284835224, 4246832056, 1258075500, 768725851, 2589189241, 3069724005, 3532540348, 1274779536, 3789419226, 2764799539, 1660621633, 3471099624, 4011903706, 913787905, 3497959166, 737222580, 2514213453, 2928710040, 3937242737, 1804850592, 3499020752, 2949064160, 2386320175, 2390070455, 2415321851, 4061277028, 2290661394, 2416832540, 1336762016, 1754252060, 3520065937, 3014181293, 791618072, 3188594551, 3933548030, 2332172193, 3852520463, 3043980520, 413987798, 3465142937, 3030929376, 4245938359, 2093235073, 3534596313, 375366246, 2157278981, 2479649556, 555357303, 3870105701, 2008414854, 3344188149, 4221384143, 3956125452, 2067696032, 3594591187, 2921233993, 2428461, 544322398, 577241275, 1471733935, 610547355, 4027169054, 1432588573, 1507829418, 2025931657, 3646575487, 545086370, 48609733, 2200306550, 1653985193, 298326376, 1316178497, 3007786442, 2064951626, 458293330, 2589141269, 3591329599, 3164325604, 727753846, 2179363840, 146436021, 1461446943, 4069977195, 705550613, 3059967265, 3887724982, 4281599278, 3313849956, 1404054877, 2845806497, 146425753, 1854211946]), new Uint32Array([1266315497, 3048417604, 3681880366, 3289982499, 2909710000, 1235738493, 2632868024, 2414719590, 3970600049, 1771706367, 1449415276, 3266420449, 422970021, 1963543593, 2690192192, 3826793022, 1062508698, 1531092325, 1804592342, 2583117782, 2714934279, 4024971509, 1294809318, 4028980673, 1289560198, 2221992742, 1669523910, 35572830, 157838143, 1052438473, 1016535060, 1802137761, 1753167236, 1386275462, 3080475397, 2857371447, 1040679964, 2145300060, 2390574316, 1461121720, 2956646967, 4031777805, 4028374788, 33600511, 2920084762, 1018524850, 629373528, 3691585981, 3515945977, 2091462646, 2486323059, 586499841, 988145025, 935516892, 3367335476, 2599673255, 2839830854, 265290510, 3972581182, 2759138881, 3795373465, 1005194799, 847297441, 406762289, 1314163512, 1332590856, 1866599683, 4127851711, 750260880, 613907577, 1450815602, 3165620655, 3734664991, 3650291728, 3012275730, 3704569646, 1427272223, 778793252, 1343938022, 2676280711, 2052605720, 1946737175, 3164576444, 3914038668, 3967478842, 3682934266, 1661551462, 3294938066, 4011595847, 840292616, 3712170807, 616741398, 312560963, 711312465, 1351876610, 322626781, 1910503582, 271666773, 2175563734, 1594956187, 70604529, 3617834859, 1007753275, 1495573769, 4069517037, 2549218298, 2663038764, 504708206, 2263041392, 3941167025, 2249088522, 1514023603, 1998579484, 1312622330, 694541497, 2582060303, 2151582166, 1382467621, 776784248, 2618340202, 3323268794, 2497899128, 2784771155, 503983604, 4076293799, 907881277, 423175695, 432175456, 1378068232, 4145222326, 3954048622, 3938656102, 3820766613, 2793130115, 2977904593, 26017576, 3274890735, 3194772133, 1700274565, 1756076034, 4006520079, 3677328699, 720338349, 1533947780, 354530856, 688349552, 3973924725, 1637815568, 332179504, 3949051286, 53804574, 2852348879, 3044236432, 1282449977, 3583942155, 3416972820, 4006381244, 1617046695, 2628476075, 3002303598, 1686838959, 431878346, 2686675385, 1700445008, 1080580658, 1009431731, 832498133, 3223435511, 2605976345, 2271191193, 2516031870, 1648197032, 4164389018, 2548247927, 300782431, 375919233, 238389289, 3353747414, 2531188641, 2019080857, 1475708069, 455242339, 2609103871, 448939670, 3451063019, 1395535956, 2413381860, 1841049896, 1491858159, 885456874, 4264095073, 4001119347, 1565136089, 3898914787, 1108368660, 540939232, 1173283510, 2745871338, 3681308437, 4207628240, 3343053890, 4016749493, 1699691293, 1103962373, 3625875870, 2256883143, 3830138730, 1031889488, 3479347698, 1535977030, 4236805024, 3251091107, 2132092099, 1774941330, 1199868427, 1452454533, 157007616, 2904115357, 342012276, 595725824, 1480756522, 206960106, 497939518, 591360097, 863170706, 2375253569, 3596610801, 1814182875, 2094937945, 3421402208, 1082520231, 3463918190, 2785509508, 435703966, 3908032597, 1641649973, 2842273706, 3305899714, 1510255612, 2148256476, 2655287854, 3276092548, 4258621189, 236887753, 3681803219, 274041037, 1734335097, 3815195456, 3317970021, 1899903192, 1026095262, 4050517792, 356393447, 2410691914, 3873677099, 3682840055]), new Uint32Array([3913112168, 2491498743, 4132185628, 2489919796, 1091903735, 1979897079, 3170134830, 3567386728, 3557303409, 857797738, 1136121015, 1342202287, 507115054, 2535736646, 337727348, 3213592640, 1301675037, 2528481711, 1895095763, 1721773893, 3216771564, 62756741, 2142006736, 835421444, 2531993523, 1442658625, 3659876326, 2882144922, 676362277, 1392781812, 170690266, 3921047035, 1759253602, 3611846912, 1745797284, 664899054, 1329594018, 3901205900, 3045908486, 2062866102, 2865634940, 3543621612, 3464012697, 1080764994, 553557557, 3656615353, 3996768171, 991055499, 499776247, 1265440854, 648242737, 3940784050, 980351604, 3713745714, 1749149687, 3396870395, 4211799374, 3640570775, 1161844396, 3125318951, 1431517754, 545492359, 4268468663, 3499529547, 1437099964, 2702547544, 3433638243, 2581715763, 2787789398, 1060185593, 1593081372, 2418618748, 4260947970, 69676912, 2159744348, 86519011, 2512459080, 3838209314, 1220612927, 3339683548, 133810670, 1090789135, 1078426020, 1569222167, 845107691, 3583754449, 4072456591, 1091646820, 628848692, 1613405280, 3757631651, 526609435, 236106946, 48312990, 2942717905, 3402727701, 1797494240, 859738849, 992217954, 4005476642, 2243076622, 3870952857, 3732016268, 765654824, 3490871365, 2511836413, 1685915746, 3888969200, 1414112111, 2273134842, 3281911079, 4080962846, 172450625, 2569994100, 980381355, 4109958455, 2819808352, 2716589560, 2568741196, 3681446669, 3329971472, 1835478071, 660984891, 3704678404, 4045999559, 3422617507, 3040415634, 1762651403, 1719377915, 3470491036, 2693910283, 3642056355, 3138596744, 1364962596, 2073328063, 1983633131, 926494387, 3423689081, 2150032023, 4096667949, 1749200295, 3328846651, 309677260, 2016342300, 1779581495, 3079819751, 111262694, 1274766160, 443224088, 298511866, 1025883608, 3806446537, 1145181785, 168956806, 3641502830, 3584813610, 1689216846, 3666258015, 3200248200, 1692713982, 2646376535, 4042768518, 1618508792, 1610833997, 3523052358, 4130873264, 2001055236, 3610705100, 2202168115, 4028541809, 2961195399, 1006657119, 2006996926, 3186142756, 1430667929, 3210227297, 1314452623, 4074634658, 4101304120, 2273951170, 1399257539, 3367210612, 3027628629, 1190975929, 2062231137, 2333990788, 2221543033, 2438960610, 1181637006, 548689776, 2362791313, 3372408396, 3104550113, 3145860560, 296247880, 1970579870, 3078560182, 3769228297, 1714227617, 3291629107, 3898220290, 166772364, 1251581989, 493813264, 448347421, 195405023, 2709975567, 677966185, 3703036547, 1463355134, 2715995803, 1338867538, 1343315457, 2802222074, 2684532164, 233230375, 2599980071, 2000651841, 3277868038, 1638401717, 4028070440, 3237316320, 6314154, 819756386, 300326615, 590932579, 1405279636, 3267499572, 3150704214, 2428286686, 3959192993, 3461946742, 1862657033, 1266418056, 963775037, 2089974820, 2263052895, 1917689273, 448879540, 3550394620, 3981727096, 150775221, 3627908307, 1303187396, 508620638, 2975983352, 2726630617, 1817252668, 1876281319, 1457606340, 908771278, 3720792119, 3617206836, 2455994898, 1729034894, 1080033504]), new Uint32Array([976866871, 3556439503, 2881648439, 1522871579, 1555064734, 1336096578, 3548522304, 2579274686, 3574697629, 3205460757, 3593280638, 3338716283, 3079412587, 564236357, 2993598910, 1781952180, 1464380207, 3163844217, 3332601554, 1699332808, 1393555694, 1183702653, 3581086237, 1288719814, 691649499, 2847557200, 2895455976, 3193889540, 2717570544, 1781354906, 1676643554, 2592534050, 3230253752, 1126444790, 2770207658, 2633158820, 2210423226, 2615765581, 2414155088, 3127139286, 673620729, 2805611233, 1269405062, 4015350505, 3341807571, 4149409754, 1057255273, 2012875353, 2162469141, 2276492801, 2601117357, 993977747, 3918593370, 2654263191, 753973209, 36408145, 2530585658, 25011837, 3520020182, 2088578344, 530523599, 2918365339, 1524020338, 1518925132, 3760827505, 3759777254, 1202760957, 3985898139, 3906192525, 674977740, 4174734889, 2031300136, 2019492241, 3983892565, 4153806404, 3822280332, 352677332, 2297720250, 60907813, 90501309, 3286998549, 1016092578, 2535922412, 2839152426, 457141659, 509813237, 4120667899, 652014361, 1966332200, 2975202805, 55981186, 2327461051, 676427537, 3255491064, 2882294119, 3433927263, 1307055953, 942726286, 933058658, 2468411793, 3933900994, 4215176142, 1361170020, 2001714738, 2830558078, 3274259782, 1222529897, 1679025792, 2729314320, 3714953764, 1770335741, 151462246, 3013232138, 1682292957, 1483529935, 471910574, 1539241949, 458788160, 3436315007, 1807016891, 3718408830, 978976581, 1043663428, 3165965781, 1927990952, 4200891579, 2372276910, 3208408903, 3533431907, 1412390302, 2931980059, 4132332400, 1947078029, 3881505623, 4168226417, 2941484381, 1077988104, 1320477388, 886195818, 18198404, 3786409000, 2509781533, 112762804, 3463356488, 1866414978, 891333506, 18488651, 661792760, 1628790961, 3885187036, 3141171499, 876946877, 2693282273, 1372485963, 791857591, 2686433993, 3759982718, 3167212022, 3472953795, 2716379847, 445679433, 3561995674, 3504004811, 3574258232, 54117162, 3331405415, 2381918588, 3769707343, 4154350007, 1140177722, 4074052095, 668550556, 3214352940, 367459370, 261225585, 2610173221, 4209349473, 3468074219, 3265815641, 314222801, 3066103646, 3808782860, 282218597, 3406013506, 3773591054, 379116347, 1285071038, 846784868, 2669647154, 3771962079, 3550491691, 2305946142, 453669953, 1268987020, 3317592352, 3279303384, 3744833421, 2610507566, 3859509063, 266596637, 3847019092, 517658769, 3462560207, 3443424879, 370717030, 4247526661, 2224018117, 4143653529, 4112773975, 2788324899, 2477274417, 1456262402, 2901442914, 1517677493, 1846949527, 2295493580, 3734397586, 2176403920, 1280348187, 1908823572, 3871786941, 846861322, 1172426758, 3287448474, 3383383037, 1655181056, 3139813346, 901632758, 1897031941, 2986607138, 3066810236, 3447102507, 1393639104, 373351379, 950779232, 625454576, 3124240540, 4148612726, 2007998917, 544563296, 2244738638, 2330496472, 2058025392, 1291430526, 424198748, 50039436, 29584100, 3605783033, 2429876329, 2791104160, 1057563949, 3255363231, 3075367218, 3463963227, 1469046755, 985887462])];
    this.P = new Uint32Array([608135816, 2242054355, 320440878, 57701188, 2752067618, 698298832, 137296536, 3964562569, 1160258022, 953160567, 3193202383, 887688300, 3232508343, 3380367581, 1065670069, 3041331479, 2450970073, 2306472731]);
  }
  function y(I, Q, n) {
    return (I[0][Q[n + 3]] + I[1][Q[n + 2]] ^ I[2][Q[n + 1]]) + I[3][Q[n]];
  }
  r.prototype.encipher = function (I, Q) {
    if (Q === undefined) {
      Q = new Uint8Array(I.buffer);
      if (I.byteOffset !== 0) {
        Q = Q.subarray(I.byteOffset);
      }
    }
    I[0] ^= this.P[0];
    for (var n = 1; n < 16; n += 2) {
      I[1] ^= y(this.S, Q, 0) ^ this.P[n];
      I[0] ^= y(this.S, Q, 4) ^ this.P[n + 1];
    }
    var B = I[0];
    I[0] = I[1] ^ this.P[17];
    I[1] = B;
  };
  r.prototype.decipher = function (I) {
    var Q = new Uint8Array(I.buffer);
    if (I.byteOffset !== 0) {
      Q = Q.subarray(I.byteOffset);
    }
    I[0] ^= this.P[17];
    for (var n = 16; n > 0; n -= 2) {
      I[1] ^= y(this.S, Q, 0) ^ this.P[n];
      I[0] ^= y(this.S, Q, 4) ^ this.P[n - 1];
    }
    var B = I[0];
    I[0] = I[1] ^ this.P[0];
    I[1] = B;
  };
  function k(I, Q) {
    var n;
    var B = 0;
    for (n = 0; n < 4; n++, e++) {
      if (e >= Q) {
        e = 0;
      }
      B = B << 8 | I[e];
    }
    return B;
  }
  r.prototype.expand0state = function (I, Q) {
    var n = new Uint32Array(2);
    var B;
    var C;
    var w = new Uint8Array(n.buffer);
    B = 0;
    e = 0;
    for (; B < 18; B++) {
      this.P[B] ^= k(I, Q);
    }
    e = 0;
    B = 0;
    for (; B < 18; B += 2) {
      this.encipher(n, w);
      this.P[B] = n[0];
      this.P[B + 1] = n[1];
    }
    for (B = 0; B < 4; B++) {
      for (C = 0; C < 256; C += 2) {
        this.encipher(n, w);
        this.S[B][C] = n[0];
        this.S[B][C + 1] = n[1];
      }
    }
  };
  r.prototype.expandstate = function (I, Q, n, B) {
    var C = new Uint32Array(2);
    var w;
    var X;
    w = 0;
    e = 0;
    for (; w < 18; w++) {
      this.P[w] ^= k(n, B);
    }
    w = 0;
    e = 0;
    for (; w < 18; w += 2) {
      C[0] ^= k(I, Q);
      C[1] ^= k(I, Q);
      this.encipher(C);
      this.P[w] = C[0];
      this.P[w + 1] = C[1];
    }
    for (w = 0; w < 4; w++) {
      for (X = 0; X < 256; X += 2) {
        C[0] ^= k(I, Q);
        C[1] ^= k(I, Q);
        this.encipher(C);
        this.S[w][X] = C[0];
        this.S[w][X + 1] = C[1];
      }
    }
    e = 0;
  };
  r.prototype.enc = function (I, Q) {
    for (var n = 0; n < Q; n++) {
      this.encipher(I.subarray(n * 2));
    }
  };
  r.prototype.dec = function (I, Q) {
    for (var n = 0; n < Q; n++) {
      this.decipher(I.subarray(n * 2));
    }
  };
  var m = 8;
  var M = 32;
  function v(I, Q, n) {
    var B = new r();
    var C = new Uint32Array(m);
    var w;
    var X = new Uint8Array([79, 120, 121, 99, 104, 114, 111, 109, 97, 116, 105, 99, 66, 108, 111, 119, 102, 105, 115, 104, 83, 119, 97, 116, 68, 121, 110, 97, 109, 105, 116, 101]);
    B.expandstate(Q, 64, I, 64);
    w = 0;
    for (; w < 64; w++) {
      B.expand0state(Q, 64);
      B.expand0state(I, 64);
    }
    for (w = 0; w < m; w++) {
      C[w] = k(X, X.byteLength);
    }
    for (w = 0; w < 64; w++) {
      B.enc(C, C.byteLength / 8);
    }
    for (w = 0; w < m; w++) {
      n[w * 4 + 3] = C[w] >>> 24;
      n[w * 4 + 2] = C[w] >>> 16;
      n[w * 4 + 1] = C[w] >>> 8;
      n[w * 4 + 0] = C[w];
    }
  }
  function R(I, Q, n, B, C, w, X) {
    var K = new Uint8Array(64);
    var $ = new Uint8Array(64);
    var re = new Uint8Array(M);
    var Y = new Uint8Array(M);
    var J = new Uint8Array(B + 4);
    var V;
    var F;
    var oe;
    var Z;
    var he;
    var U;
    var Ie = w;
    if (X < 1 || Q === 0 || B === 0 || w === 0 || w > re.byteLength * re.byteLength || B > 1048576) {
      return -1;
    }
    Z = Math.floor((w + re.byteLength - 1) / re.byteLength);
    oe = Math.floor((w + Z - 1) / Z);
    V = 0;
    for (; V < B; V++) {
      J[V] = n[V];
    }
    p(K, I, Q);
    U = 1;
    for (; w > 0; U++) {
      J[B + 0] = U >>> 24;
      J[B + 1] = U >>> 16;
      J[B + 2] = U >>> 8;
      J[B + 3] = U;
      p($, J, B + 4);
      v(K, $, Y);
      V = re.byteLength;
      while (V--) {
        re[V] = Y[V];
      }
      for (V = 1; V < X; V++) {
        p($, Y, Y.byteLength);
        v(K, $, Y);
        F = 0;
        for (; F < re.byteLength; F++) {
          re[F] ^= Y[F];
        }
      }
      oe = Math.min(oe, w);
      V = 0;
      for (; V < oe && (he = V * Z + (U - 1), !(he >= Ie)); V++) {
        C[he] = re[V];
      }
      w -= V;
    }
    return 0;
  }
  Un = {
    BLOCKS: m,
    HASHSIZE: M,
    hash: v,
    pbkdf: R
  };
  return Un;
}
var Dn = {
  exports: {}
};
var Hr;
function jt() {
  if (!Hr) {
    Hr = 1;
    (function (p) {
      const e = en;
      let r;
      try {
        r = require("cpu-features")();
      } catch {}
      const {
        bindingAvailable: y,
        CIPHER_INFO: k,
        MAC_INFO: m
      } = tn();
      const M = (() => {
        if (typeof e.sign == "function" && typeof e.verify == "function") {
          const V = `-----BEGIN PRIVATE KEY-----\r
MC4CAQAwBQYDK2VwBCIEIHKj+sVa9WcD/q2DJUJaf43Kptc8xYuUQA4bOFj9vC8T\r
-----END PRIVATE KEY-----`;
          const F = Buffer.from("a");
          let oe;
          let Z;
          try {
            oe = e.sign(null, F, V);
            Z = e.verify(null, F, V, oe);
          } catch {}
          return Buffer.isBuffer(oe) && oe.length === 64 && Z === true;
        }
        return false;
      })();
      const v = typeof e.diffieHellman == "function" && typeof e.generateKeyPairSync == "function" && typeof e.createPublicKey == "function";
      const R = ["ecdh-sha2-nistp256", "ecdh-sha2-nistp384", "ecdh-sha2-nistp521", "diffie-hellman-group-exchange-sha256", "diffie-hellman-group14-sha256", "diffie-hellman-group15-sha512", "diffie-hellman-group16-sha512", "diffie-hellman-group17-sha512", "diffie-hellman-group18-sha512"];
      if (v) {
        R.unshift("curve25519-sha256");
        R.unshift("curve25519-sha256@libssh.org");
      }
      const I = R.concat(["diffie-hellman-group-exchange-sha1", "diffie-hellman-group14-sha1", "diffie-hellman-group1-sha1"]);
      const Q = ["ecdsa-sha2-nistp256", "ecdsa-sha2-nistp384", "ecdsa-sha2-nistp521", "rsa-sha2-512", "rsa-sha2-256", "ssh-rsa"];
      if (M) {
        Q.unshift("ssh-ed25519");
      }
      const n = Q.concat(["ssh-dss"]);
      const B = (() => {
        const V = e.getCiphers();
        return F => V.includes(k[F].sslName);
      })();
      let C = ["aes128-gcm@openssh.com", "aes256-gcm@openssh.com", "aes128-ctr", "aes192-ctr", "aes256-ctr"];
      if (r && r.flags && !r.flags.aes) {
        if (y) {
          C.unshift("chacha20-poly1305@openssh.com");
        } else {
          C.push("chacha20-poly1305@openssh.com");
        }
      } else if (y && r && r.arch === "x86") {
        C.splice(4, 0, "chacha20-poly1305@openssh.com");
      } else {
        C.push("chacha20-poly1305@openssh.com");
      }
      C = C.filter(B);
      const w = C.concat(["aes256-cbc", "aes192-cbc", "aes128-cbc", "blowfish-cbc", "3des-cbc", "aes128-gcm", "aes256-gcm", "arcfour256", "arcfour128", "cast128-cbc", "arcfour"].filter(B));
      const X = (() => {
        const V = e.getHashes();
        return F => V.includes(m[F].sslName);
      })();
      const K = ["hmac-sha2-256-etm@openssh.com", "hmac-sha2-512-etm@openssh.com", "hmac-sha1-etm@openssh.com", "hmac-sha2-256", "hmac-sha2-512", "hmac-sha1"].filter(X);
      const $ = K.concat(["hmac-md5", "hmac-sha2-256-96", "hmac-sha2-512-96", "hmac-ripemd160", "hmac-sha1-96", "hmac-md5-96"].filter(X));
      const re = ["none", "zlib@openssh.com", "zlib"];
      const Y = re.concat([]);
      const J = {
        BAD_DHGEX: 1,
        OLD_EXIT: 2,
        DYN_RPORT_BUG: 4,
        BUG_DHGEX_LARGE: 8,
        IMPLY_RSA_SHA2_SIGALGS: 16
      };
      p.exports = {
        MESSAGE: {
          DISCONNECT: 1,
          IGNORE: 2,
          UNIMPLEMENTED: 3,
          DEBUG: 4,
          SERVICE_REQUEST: 5,
          SERVICE_ACCEPT: 6,
          EXT_INFO: 7,
          KEXINIT: 20,
          NEWKEYS: 21,
          KEXDH_INIT: 30,
          KEXDH_REPLY: 31,
          KEXDH_GEX_GROUP: 31,
          KEXDH_GEX_INIT: 32,
          KEXDH_GEX_REPLY: 33,
          KEXDH_GEX_REQUEST: 34,
          KEXECDH_INIT: 30,
          KEXECDH_REPLY: 31,
          USERAUTH_REQUEST: 50,
          USERAUTH_FAILURE: 51,
          USERAUTH_SUCCESS: 52,
          USERAUTH_BANNER: 53,
          USERAUTH_PASSWD_CHANGEREQ: 60,
          USERAUTH_PK_OK: 60,
          USERAUTH_INFO_REQUEST: 60,
          USERAUTH_INFO_RESPONSE: 61,
          GLOBAL_REQUEST: 80,
          REQUEST_SUCCESS: 81,
          REQUEST_FAILURE: 82,
          CHANNEL_OPEN: 90,
          CHANNEL_OPEN_CONFIRMATION: 91,
          CHANNEL_OPEN_FAILURE: 92,
          CHANNEL_WINDOW_ADJUST: 93,
          CHANNEL_DATA: 94,
          CHANNEL_EXTENDED_DATA: 95,
          CHANNEL_EOF: 96,
          CHANNEL_CLOSE: 97,
          CHANNEL_REQUEST: 98,
          CHANNEL_SUCCESS: 99,
          CHANNEL_FAILURE: 100
        },
        DISCONNECT_REASON: {
          HOST_NOT_ALLOWED_TO_CONNECT: 1,
          PROTOCOL_ERROR: 2,
          KEY_EXCHANGE_FAILED: 3,
          RESERVED: 4,
          MAC_ERROR: 5,
          COMPRESSION_ERROR: 6,
          SERVICE_NOT_AVAILABLE: 7,
          PROTOCOL_VERSION_NOT_SUPPORTED: 8,
          HOST_KEY_NOT_VERIFIABLE: 9,
          CONNECTION_LOST: 10,
          BY_APPLICATION: 11,
          TOO_MANY_CONNECTIONS: 12,
          AUTH_CANCELED_BY_USER: 13,
          NO_MORE_AUTH_METHODS_AVAILABLE: 14,
          ILLEGAL_USER_NAME: 15
        },
        DISCONNECT_REASON_STR: undefined,
        CHANNEL_OPEN_FAILURE: {
          ADMINISTRATIVELY_PROHIBITED: 1,
          CONNECT_FAILED: 2,
          UNKNOWN_CHANNEL_TYPE: 3,
          RESOURCE_SHORTAGE: 4
        },
        TERMINAL_MODE: {
          TTY_OP_END: 0,
          VINTR: 1,
          VQUIT: 2,
          VERASE: 3,
          VKILL: 4,
          VEOF: 5,
          VEOL: 6,
          VEOL2: 7,
          VSTART: 8,
          VSTOP: 9,
          VSUSP: 10,
          VDSUSP: 11,
          VREPRINT: 12,
          VWERASE: 13,
          VLNEXT: 14,
          VFLUSH: 15,
          VSWTCH: 16,
          VSTATUS: 17,
          VDISCARD: 18,
          IGNPAR: 30,
          PARMRK: 31,
          INPCK: 32,
          ISTRIP: 33,
          INLCR: 34,
          IGNCR: 35,
          ICRNL: 36,
          IUCLC: 37,
          IXON: 38,
          IXANY: 39,
          IXOFF: 40,
          IMAXBEL: 41,
          ISIG: 50,
          ICANON: 51,
          XCASE: 52,
          ECHO: 53,
          ECHOE: 54,
          ECHOK: 55,
          ECHONL: 56,
          NOFLSH: 57,
          TOSTOP: 58,
          IEXTEN: 59,
          ECHOCTL: 60,
          ECHOKE: 61,
          PENDIN: 62,
          OPOST: 70,
          OLCUC: 71,
          ONLCR: 72,
          OCRNL: 73,
          ONOCR: 74,
          ONLRET: 75,
          CS7: 90,
          CS8: 91,
          PARENB: 92,
          PARODD: 93,
          TTY_OP_ISPEED: 128,
          TTY_OP_OSPEED: 129
        },
        CHANNEL_EXTENDED_DATATYPE: {
          STDERR: 1
        },
        SIGNALS: ["ABRT", "ALRM", "FPE", "HUP", "ILL", "INT", "QUIT", "SEGV", "TERM", "USR1", "USR2", "KILL", "PIPE"].reduce((V, F) => ({
          ...V,
          [F]: 1
        }), {}),
        COMPAT: J,
        COMPAT_CHECKS: [["Cisco-1.25", J.BAD_DHGEX], [/^Cisco-1[.]/, J.BUG_DHGEX_LARGE], [/^[0-9.]+$/, J.OLD_EXIT], [/^OpenSSH_5[.][0-9]+/, J.DYN_RPORT_BUG], [/^OpenSSH_7[.]4/, J.IMPLY_RSA_SHA2_SIGALGS]],
        DEFAULT_KEX: R,
        SUPPORTED_KEX: I,
        DEFAULT_SERVER_HOST_KEY: Q,
        SUPPORTED_SERVER_HOST_KEY: n,
        DEFAULT_CIPHER: C,
        SUPPORTED_CIPHER: w,
        DEFAULT_MAC: K,
        SUPPORTED_MAC: $,
        DEFAULT_COMPRESSION: re,
        SUPPORTED_COMPRESSION: Y,
        curve25519Supported: v,
        eddsaSupported: M
      };
      p.exports.DISCONNECT_REASON_BY_VALUE = Array.from(Object.entries(p.exports.DISCONNECT_REASON)).reduce((V, [F, oe]) => ({
        ...V,
        [oe]: F
      }), {});
    })(Dn);
  }
  return Dn.exports;
}
var Hn;
var Qr;
function Kt() {
  if (Qr) {
    return Hn;
  }
  Qr = 1;
  const p = In().Ber;
  let e;
  const r = Buffer[Symbol.species];
  const y = Object.getPrototypeOf(Uint8Array.prototype).fill;
  function k(n, B) {
    return n[B++] * 16777216 + n[B++] * 65536 + n[B++] * 256 + n[B];
  }
  function m(n, B, C, w, X) {
    X ||= 0;
    if (w > n.length) {
      w = n.length;
    }
    let K = w - C;
    const $ = B.length - X;
    if (K > $) {
      K = $;
    }
    B.set(new Uint8Array(n.buffer, n.byteOffset + C, K), X);
    return K;
  }
  function M(n, B, C = n.length) {
    return new r(n.buffer, n.byteOffset + B, C - B);
  }
  function v() {
    let n = 0;
    let B;
    const C = {
      init: (w, X) => {
        B = w;
        n = typeof X == "number" ? X : 0;
      },
      pos: () => n,
      length: () => B ? B.length : 0,
      avail: () => B && n < B.length ? B.length - n : 0,
      clear: () => {
        B = undefined;
      },
      readUInt32BE: () => {
        if (!!B && !(n + 3 >= B.length)) {
          return B[n++] * 16777216 + B[n++] * 65536 + B[n++] * 256 + B[n++];
        }
      },
      readUInt64BE: w => {
        if (!!B && !(n + 7 >= B.length)) {
          switch (w) {
            case "always":
              return BigInt(`0x${B.hexSlice(n, n += 8)}`);
            case "maybe":
              if (B[n] > 31) {
                return BigInt(`0x${B.hexSlice(n, n += 8)}`);
              }
            default:
              return B[n++] * 72057594037927940 + B[n++] * 281474976710656 + B[n++] * 1099511627776 + B[n++] * 4294967296 + B[n++] * 16777216 + B[n++] * 65536 + B[n++] * 256 + B[n++];
          }
        }
      },
      skip: w => {
        if (B && w > 0) {
          n += w;
        }
      },
      skipString: () => {
        const w = C.readUInt32BE();
        if (w !== undefined) {
          n += w;
          if (n <= B.length) {
            return w;
          } else {
            return undefined;
          }
        }
      },
      readByte: () => {
        if (B && n < B.length) {
          return B[n++];
        }
      },
      readBool: () => {
        if (B && n < B.length) {
          return !!B[n++];
        }
      },
      readList: () => {
        const w = C.readString(true);
        if (w !== undefined) {
          if (w) {
            return w.split(",");
          } else {
            return [];
          }
        }
      },
      readString: (w, X) => {
        if (typeof w == "number") {
          X = w;
          w = undefined;
        }
        const K = C.readUInt32BE();
        if (K !== undefined && !(B.length - n < K) && (typeof X != "number" || !(K > X))) {
          if (w) {
            if (Buffer.isBuffer(w)) {
              return m(B, w, n, n += K);
            } else {
              return B.utf8Slice(n, n += K);
            }
          } else {
            return M(B, n, n += K);
          }
        }
      },
      readRaw: w => {
        if (B) {
          if (typeof w != "number") {
            return M(B, n, n += B.length - n);
          }
          if (B.length - n >= w) {
            return M(B, n, n += w);
          }
        }
      }
    };
    return C;
  }
  function R(n, B, C) {
    const w = new Error(n);
    if (typeof B == "boolean") {
      C = B;
      w.level = "protocol";
    } else {
      w.level = B || "protocol";
    }
    w.fatal = !!C;
    return w;
  }
  function I(n, B, C) {
    n[C++] = B >>> 24;
    n[C++] = B >>> 16;
    n[C++] = B >>> 8;
    n[C++] = B;
    return C;
  }
  const Q = v();
  Hn = {
    bufferCopy: m,
    bufferSlice: M,
    FastBuffer: r,
    bufferFill: (n, B, C, w) => y.call(n, B, C, w),
    makeError: R,
    doFatalError: (n, B, C, w) => {
      let X;
      if (e === undefined) {
        ({
          DISCONNECT_REASON: e
        } = jt());
      }
      if (B instanceof Error) {
        X = B;
        if (typeof C != "number") {
          w = e.PROTOCOL_ERROR;
        } else {
          w = C;
        }
      } else {
        X = R(B, C, true);
      }
      if (typeof w != "number") {
        w = e.PROTOCOL_ERROR;
      }
      n.disconnect(w);
      n._destruct();
      n._onError(X);
      return Infinity;
    },
    readUInt32BE: k,
    writeUInt32BE: I,
    writeUInt32LE: (n, B, C) => {
      n[C++] = B;
      n[C++] = B >>> 8;
      n[C++] = B >>> 16;
      n[C++] = B >>> 24;
      return C;
    },
    makeBufferParser: v,
    bufferParser: v(),
    readString: (n, B, C, w) => {
      if (typeof C == "number") {
        w = C;
        C = undefined;
      }
      if (B === undefined) {
        B = 0;
      }
      const X = n.length - B;
      if (B < 0 || B >= n.length || X < 4) {
        return;
      }
      const K = k(n, B);
      if (X < 4 + K || typeof w == "number" && K > w) {
        return;
      }
      B += 4;
      const $ = B + K;
      n._pos = $;
      if (C) {
        if (Buffer.isBuffer(C)) {
          return m(n, C, B, $);
        } else {
          return n.utf8Slice(B, $);
        }
      } else {
        return M(n, B, $);
      }
    },
    sigSSHToASN1: (n, B) => {
      switch (B) {
        case "ssh-dss":
          {
            if (n.length > 40) {
              return n;
            }
            const C = new p.Writer();
            C.startSequence();
            let w = n.slice(0, 20);
            let X = n.slice(20);
            if (w[0] & 128) {
              const K = Buffer.allocUnsafe(21);
              K[0] = 0;
              w.copy(K, 1);
              w = K;
            } else if (w[0] === 0 && !(w[1] & 128)) {
              w = w.slice(1);
            }
            if (X[0] & 128) {
              const K = Buffer.allocUnsafe(21);
              K[0] = 0;
              X.copy(K, 1);
              X = K;
            } else if (X[0] === 0 && !(X[1] & 128)) {
              X = X.slice(1);
            }
            C.writeBuffer(w, p.Integer);
            C.writeBuffer(X, p.Integer);
            C.endSequence();
            return C.buffer;
          }
        case "ecdsa-sha2-nistp256":
        case "ecdsa-sha2-nistp384":
        case "ecdsa-sha2-nistp521":
          {
            Q.init(n, 0);
            const C = Q.readString();
            const w = Q.readString();
            Q.clear();
            if (C === undefined || w === undefined) {
              return;
            }
            const X = new p.Writer();
            X.startSequence();
            X.writeBuffer(C, p.Integer);
            X.writeBuffer(w, p.Integer);
            X.endSequence();
            return X.buffer;
          }
        default:
          return n;
      }
    },
    convertSignature: (n, B) => {
      switch (B) {
        case "ssh-dss":
          {
            if (n.length <= 40) {
              return n;
            }
            const C = new p.Reader(n);
            C.readSequence();
            let w = C.readString(p.Integer, true);
            let X = C.readString(p.Integer, true);
            let K = 0;
            let $ = 0;
            if (w.length < 20) {
              const Y = Buffer.allocUnsafe(20);
              Y.set(w, 1);
              w = Y;
              w[0] = 0;
            }
            if (X.length < 20) {
              const Y = Buffer.allocUnsafe(20);
              Y.set(X, 1);
              X = Y;
              X[0] = 0;
            }
            if (w.length > 20 && w[0] === 0) {
              K = 1;
            }
            if (X.length > 20 && X[0] === 0) {
              $ = 1;
            }
            const re = Buffer.allocUnsafe(w.length - K + (X.length - $));
            m(w, re, K, w.length, 0);
            m(X, re, $, X.length, w.length - K);
            return re;
          }
        case "ecdsa-sha2-nistp256":
        case "ecdsa-sha2-nistp384":
        case "ecdsa-sha2-nistp521":
          {
            if (n[0] === 0) {
              return n;
            }
            const C = new p.Reader(n);
            C.readSequence();
            const w = C.readString(p.Integer, true);
            const X = C.readString(p.Integer, true);
            if (w === null || X === null) {
              return;
            }
            const K = Buffer.allocUnsafe(4 + w.length + 4 + X.length);
            I(K, w.length, 0);
            K.set(w, 4);
            I(K, X.length, 4 + w.length);
            K.set(X, 8 + w.length);
            return K;
          }
      }
      return n;
    },
    sendPacket: (n, B, C) => !C && n._kexinit !== undefined ? (n._queue === undefined && (n._queue = []), n._queue.push(B), n._debug && n._debug("Outbound: ... packet queued"), false) : (n._cipher.encrypt(B), true)
  };
  return Hn;
}
var Qn = {
  exports: {}
};
var Fr;
function Es() {
  if (!Fr) {
    Fr = 1;
    (function (p, e) {
      var r = function () {
        var y = typeof document !== "undefined" && document.currentScript ? document.currentScript.src : undefined;
        if (typeof __filename !== "undefined") {
          y = y || __filename;
        }
        return function (k) {
          k = k || {};
          var m;
          m ||= typeof k !== "undefined" ? k : {};
          var M;
          var v;
          m.ready = new Promise(function (E, A) {
            M = E;
            v = A;
          });
          var R = {};
          var I;
          for (I in m) {
            if (m.hasOwnProperty(I)) {
              R[I] = m[I];
            }
          }
          var Q = typeof window == "object";
          var n = typeof importScripts == "function";
          var B = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string";
          var C = "";
          var w;
          var X;
          var K;
          var $;
          var re;
          if (B) {
            C = n ? An.dirname(C) + "/" : __dirname + "/";
            w = function (E, A) {
              var h = W(E);
              if (h) {
                if (A) {
                  return h;
                } else {
                  return h.toString();
                }
              } else {
                $ ||= En;
                re ||= An;
                E = re.normalize(E);
                return $.readFileSync(E, A ? null : "utf8");
              }
            };
            K = function (E) {
              E = w(E, true);
              if (!E.buffer) {
                E = new Uint8Array(E);
              }
              oe(E.buffer);
              return E;
            };
            X = function (E, A, h) {
              var S = W(E);
              if (S) {
                A(S);
              }
              $ ||= En;
              re ||= An;
              E = re.normalize(E);
              $.readFile(E, function (L, j) {
                if (L) {
                  h(L);
                } else {
                  A(j.buffer);
                }
              });
            };
            if (process.argv.length > 1) {
              process.argv[1].replace(/\\/g, "/");
            }
            process.argv.slice(2);
            m.inspect = function () {
              return "[Emscripten Module object]";
            };
          } else if (Q || n) {
            if (n) {
              C = self.location.href;
            } else if (typeof document !== "undefined" && document.currentScript) {
              C = document.currentScript.src;
            }
            if (y) {
              C = y;
            }
            if (C.indexOf("blob:") !== 0) {
              C = C.substr(0, C.lastIndexOf("/") + 1);
            } else {
              C = "";
            }
            w = function (E) {
              try {
                var A = new XMLHttpRequest();
                A.open("GET", E, false);
                A.send(null);
                return A.responseText;
              } catch (L) {
                if (E = W(E)) {
                  A = [];
                  for (var h = 0; h < E.length; h++) {
                    var S = E[h];
                    if (S > 255) {
                      S &= 255;
                    }
                    A.push(String.fromCharCode(S));
                  }
                  return A.join("");
                }
                throw L;
              }
            };
            if (n) {
              K = function (E) {
                try {
                  var A = new XMLHttpRequest();
                  A.open("GET", E, false);
                  A.responseType = "arraybuffer";
                  A.send(null);
                  return new Uint8Array(A.response);
                } catch (h) {
                  if (E = W(E)) {
                    return E;
                  }
                  throw h;
                }
              };
            }
            X = function (E, A, h) {
              var S = new XMLHttpRequest();
              S.open("GET", E, true);
              S.responseType = "arraybuffer";
              S.onload = function () {
                if (S.status == 200 || S.status == 0 && S.response) {
                  A(S.response);
                } else {
                  var L = W(E);
                  if (L) {
                    A(L.buffer);
                  } else {
                    h();
                  }
                }
              };
              S.onerror = h;
              S.send(null);
            };
          }
          if (!m.print) {
            console.log.bind(console);
          }
          var Y = m.printErr || console.warn.bind(console);
          for (I in R) {
            if (R.hasOwnProperty(I)) {
              m[I] = R[I];
            }
          }
          R = null;
          var J;
          if (m.wasmBinary) {
            J = m.wasmBinary;
          }
          m.noExitRuntime;
          if (typeof WebAssembly != "object") {
            Pe("no native wasm support detected");
          }
          var V;
          var F = false;
          function oe(E, A) {
            if (!E) {
              Pe("Assertion failed: " + A);
            }
          }
          function Z(E) {
            var A = m["_" + E];
            oe(A, "Cannot call unknown function " + E + ", make sure it is exported");
            return A;
          }
          function he(E, A, h, S) {
            var L = {
              string: function (d) {
                var c = 0;
                if (d != null && d !== 0) {
                  var t = (d.length << 2) + 1;
                  c = b(t);
                  var s = c;
                  var a = we;
                  if (t > 0) {
                    t = s + t - 1;
                    for (var l = 0; l < d.length; ++l) {
                      var u = d.charCodeAt(l);
                      if (u >= 55296 && u <= 57343) {
                        var x = d.charCodeAt(++l);
                        u = 65536 + ((u & 1023) << 10) | x & 1023;
                      }
                      if (u <= 127) {
                        if (s >= t) {
                          break;
                        }
                        a[s++] = u;
                      } else {
                        if (u <= 2047) {
                          if (s + 1 >= t) {
                            break;
                          }
                          a[s++] = u >> 6 | 192;
                        } else {
                          if (u <= 65535) {
                            if (s + 2 >= t) {
                              break;
                            }
                            a[s++] = u >> 12 | 224;
                          } else {
                            if (s + 3 >= t) {
                              break;
                            }
                            a[s++] = u >> 18 | 240;
                            a[s++] = u >> 12 & 63 | 128;
                          }
                          a[s++] = u >> 6 & 63 | 128;
                        }
                        a[s++] = u & 63 | 128;
                      }
                    }
                    a[s] = 0;
                  }
                }
                return c;
              },
              array: function (d) {
                var c = b(d.length);
                be.set(d, c);
                return c;
              }
            };
            var j = Z(E);
            var se = [];
            E = 0;
            if (S) {
              for (var le = 0; le < S.length; le++) {
                var _e = L[h[le]];
                if (_e) {
                  if (E === 0) {
                    E = f();
                  }
                  se[le] = _e(S[le]);
                } else {
                  se[le] = S[le];
                }
              }
            }
            h = j.apply(null, se);
            h = function (d) {
              if (A === "string") {
                if (d) {
                  for (var c = we, t = d + NaN, s = d; c[s] && !(s >= t);) {
                    ++s;
                  }
                  if (s - d > 16 && c.subarray && U) {
                    d = U.decode(c.subarray(d, s));
                  } else {
                    for (t = ""; d < s;) {
                      var a = c[d++];
                      if (a & 128) {
                        var l = c[d++] & 63;
                        if ((a & 224) == 192) {
                          t += String.fromCharCode((a & 31) << 6 | l);
                        } else {
                          var u = c[d++] & 63;
                          a = (a & 240) == 224 ? (a & 15) << 12 | l << 6 | u : (a & 7) << 18 | l << 12 | u << 6 | c[d++] & 63;
                          if (a < 65536) {
                            t += String.fromCharCode(a);
                          } else {
                            a -= 65536;
                            t += String.fromCharCode(a >> 10 | 55296, a & 1023 | 56320);
                          }
                        }
                      } else {
                        t += String.fromCharCode(a);
                      }
                    }
                    d = t;
                  }
                } else {
                  d = "";
                }
              } else {
                d = A === "boolean" ? !!d : d;
              }
              return d;
            }(h);
            if (E !== 0) {
              o(E);
            }
            return h;
          }
          var U = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : undefined;
          var Ie;
          var be;
          var we;
          function Me() {
            var E = V.buffer;
            Ie = E;
            m.HEAP8 = be = new Int8Array(E);
            m.HEAP16 = new Int16Array(E);
            m.HEAP32 = new Int32Array(E);
            m.HEAPU8 = we = new Uint8Array(E);
            m.HEAPU16 = new Uint16Array(E);
            m.HEAPU32 = new Uint32Array(E);
            m.HEAPF32 = new Float32Array(E);
            m.HEAPF64 = new Float64Array(E);
          }
          var Ne;
          var Ue = [];
          var Le = [];
          var Qe = [];
          function Xe() {
            var E = m.preRun.shift();
            Ue.unshift(E);
          }
          var Ke = 0;
          var Re = null;
          m.preloadedImages = {};
          m.preloadedAudios = {};
          function Pe(E) {
            if (m.onAbort) {
              m.onAbort(E);
            }
            Y(E);
            F = true;
            E = new WebAssembly.RuntimeError("abort(" + E + "). Build with -s ASSERTIONS=1 for more info.");
            v(E);
            throw E;
          }
          var qe = "data:application/octet-stream;base64,";
          var Je;
          Je = "data:application/octet-stream;base64,AGFzbQEAAAABIAZgAX8Bf2ADf39/AGABfwBgAABgAAF/YAZ/f39/f38AAgcBAWEBYQAAAwsKAAEDAQAAAgQFAgQFAXABAQEFBwEBgAKAgAIGCQF/AUGAjMACCwclCQFiAgABYwADAWQACQFlAAgBZgAHAWcABgFoAAUBaQAKAWoBAAqGTQpPAQJ/QYAIKAIAIgEgAEEDakF8cSICaiEAAkAgAkEAIAAgAU0bDQAgAD8AQRB0SwRAIAAQAEUNAQtBgAggADYCACABDwtBhAhBMDYCAEF/C4wFAg5+Cn8gACgCJCEUIAAoAiAhFSAAKAIcIREgACgCGCESIAAoAhQhEyACQRBPBEAgAC0ATEVBGHQhFyAAKAIEIhZBBWytIQ8gACgCCCIYQQVsrSENIAAoAgwiGUEFbK0hCyAAKAIQIhpBBWytIQkgADUCACEIIBqtIRAgGa0hDiAYrSEMIBatIQoDQCASIAEtAAMiEiABLQAEQQh0ciABLQAFQRB0ciABLQAGIhZBGHRyQQJ2Qf///x9xaq0iAyAOfiABLwAAIAEtAAJBEHRyIBNqIBJBGHRBgICAGHFqrSIEIBB+fCARIAEtAAdBCHQgFnIgAS0ACEEQdHIgAS0ACSIRQRh0ckEEdkH///8fcWqtIgUgDH58IAEtAApBCHQgEXIgAS0AC0EQdHIgAS0ADEEYdHJBBnYgFWqtIgYgCn58IBQgF2ogAS8ADSABLQAPQRB0cmqtIgcgCH58IAMgDH4gBCAOfnwgBSAKfnwgBiAIfnwgByAJfnwgAyAKfiAEIAx+fCAFIAh+fCAGIAl+fCAHIAt+fCADIAh+IAQgCn58IAUgCX58IAYgC358IAcgDX58IAMgCX4gBCAIfnwgBSALfnwgBiANfnwgByAPfnwiA0IaiEL/////D4N8IgRCGohC/////w+DfCIFQhqIQv////8Pg3wiBkIaiEL/////D4N8IgdCGoinQQVsIAOnQf///x9xaiITQRp2IASnQf///x9xaiESIAWnQf///x9xIREgBqdB////H3EhFSAHp0H///8fcSEUIBNB////H3EhEyABQRBqIQEgAkEQayICQQ9LDQALCyAAIBQ2AiQgACAVNgIgIAAgETYCHCAAIBI2AhggACATNgIUCwMAAQu2BAEGfwJAIAAoAjgiBARAIABBPGohBQJAIAJBECAEayIDIAIgA0kbIgZFDQAgBkEDcSEHAkAgBkEBa0EDSQRAQQAhAwwBCyAGQXxxIQhBACEDA0AgBSADIARqaiABIANqLQAAOgAAIAUgA0EBciIEIAAoAjhqaiABIARqLQAAOgAAIAUgA0ECciIEIAAoAjhqaiABIARqLQAAOgAAIAUgA0EDciIEIAAoAjhqaiABIARqLQAAOgAAIANBBGohAyAAKAI4IQQgCEEEayIIDQALCyAHRQ0AA0AgBSADIARqaiABIANqLQAAOgAAIANBAWohAyAAKAI4IQQgB0EBayIHDQALCyAAIAQgBmoiAzYCOCADQRBJDQEgACAFQRAQAiAAQQA2AjggAiAGayECIAEgBmohAQsgAkEQTwRAIAAgASACQXBxIgMQAiACQQ9xIQIgASADaiEBCyACRQ0AIAJBA3EhBCAAQTxqIQVBACEDIAJBAWtBA08EQCACQXxxIQcDQCAFIAAoAjggA2pqIAEgA2otAAA6AAAgBSADQQFyIgYgACgCOGpqIAEgBmotAAA6AAAgBSADQQJyIgYgACgCOGpqIAEgBmotAAA6AAAgBSADQQNyIgYgACgCOGpqIAEgBmotAAA6AAAgA0EEaiEDIAdBBGsiBw0ACwsgBARAA0AgBSAAKAI4IANqaiABIANqLQAAOgAAIANBAWohAyAEQQFrIgQNAAsLIAAgACgCOCACajYCOAsLoS0BDH8jAEEQayIMJAACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgAEH0AU0EQEGICCgCACIFQRAgAEELakF4cSAAQQtJGyIIQQN2IgJ2IgFBA3EEQCABQX9zQQFxIAJqIgNBA3QiAUG4CGooAgAiBEEIaiEAAkAgBCgCCCICIAFBsAhqIgFGBEBBiAggBUF+IAN3cTYCAAwBCyACIAE2AgwgASACNgIICyAEIANBA3QiAUEDcjYCBCABIARqIgEgASgCBEEBcjYCBAwNCyAIQZAIKAIAIgpNDQEgAQRAAkBBAiACdCIAQQAgAGtyIAEgAnRxIgBBACAAa3FBAWsiACAAQQx2QRBxIgJ2IgFBBXZBCHEiACACciABIAB2IgFBAnZBBHEiAHIgASAAdiIBQQF2QQJxIgByIAEgAHYiAUEBdkEBcSIAciABIAB2aiIDQQN0IgBBuAhqKAIAIgQoAggiASAAQbAIaiIARgRAQYgIIAVBfiADd3EiBTYCAAwBCyABIAA2AgwgACABNgIICyAEQQhqIQAgBCAIQQNyNgIEIAQgCGoiAiADQQN0IgEgCGsiA0EBcjYCBCABIARqIAM2AgAgCgRAIApBA3YiAUEDdEGwCGohB0GcCCgCACEEAn8gBUEBIAF0IgFxRQRAQYgIIAEgBXI2AgAgBwwBCyAHKAIICyEBIAcgBDYCCCABIAQ2AgwgBCAHNgIMIAQgATYCCAtBnAggAjYCAEGQCCADNgIADA0LQYwIKAIAIgZFDQEgBkEAIAZrcUEBayIAIABBDHZBEHEiAnYiAUEFdkEIcSIAIAJyIAEgAHYiAUECdkEEcSIAciABIAB2IgFBAXZBAnEiAHIgASAAdiIBQQF2QQFxIgByIAEgAHZqQQJ0QbgKaigCACIBKAIEQXhxIAhrIQMgASECA0ACQCACKAIQIgBFBEAgAigCFCIARQ0BCyAAKAIEQXhxIAhrIgIgAyACIANJIgIbIQMgACABIAIbIQEgACECDAELCyABIAhqIgkgAU0NAiABKAIYIQsgASABKAIMIgRHBEAgASgCCCIAQZgIKAIASRogACAENgIMIAQgADYCCAwMCyABQRRqIgIoAgAiAEUEQCABKAIQIgBFDQQgAUEQaiECCwNAIAIhByAAIgRBFGoiAigCACIADQAgBEEQaiECIAQoAhAiAA0ACyAHQQA2AgAMCwtBfyEIIABBv39LDQAgAEELaiIAQXhxIQhBjAgoAgAiCUUNAEEAIAhrIQMCQAJAAkACf0EAIAhBgAJJDQAaQR8gCEH///8HSw0AGiAAQQh2IgAgAEGA/j9qQRB2QQhxIgJ0IgAgAEGA4B9qQRB2QQRxIgF0IgAgAEGAgA9qQRB2QQJxIgB0QQ92IAEgAnIgAHJrIgBBAXQgCCAAQRVqdkEBcXJBHGoLIgVBAnRBuApqKAIAIgJFBEBBACEADAELQQAhACAIQQBBGSAFQQF2ayAFQR9GG3QhAQNAAkAgAigCBEF4cSAIayIHIANPDQAgAiEEIAciAw0AQQAhAyACIQAMAwsgACACKAIUIgcgByACIAFBHXZBBHFqKAIQIgJGGyAAIAcbIQAgAUEBdCEBIAINAAsLIAAgBHJFBEBBACEEQQIgBXQiAEEAIABrciAJcSIARQ0DIABBACAAa3FBAWsiACAAQQx2QRBxIgJ2IgFBBXZBCHEiACACciABIAB2IgFBAnZBBHEiAHIgASAAdiIBQQF2QQJxIgByIAEgAHYiAUEBdkEBcSIAciABIAB2akECdEG4CmooAgAhAAsgAEUNAQsDQCAAKAIEQXhxIAhrIgEgA0khAiABIAMgAhshAyAAIAQgAhshBCAAKAIQIgEEfyABBSAAKAIUCyIADQALCyAERQ0AIANBkAgoAgAgCGtPDQAgBCAIaiIGIARNDQEgBCgCGCEFIAQgBCgCDCIBRwRAIAQoAggiAEGYCCgCAEkaIAAgATYCDCABIAA2AggMCgsgBEEUaiICKAIAIgBFBEAgBCgCECIARQ0EIARBEGohAgsDQCACIQcgACIBQRRqIgIoAgAiAA0AIAFBEGohAiABKAIQIgANAAsgB0EANgIADAkLIAhBkAgoAgAiAk0EQEGcCCgCACEDAkAgAiAIayIBQRBPBEBBkAggATYCAEGcCCADIAhqIgA2AgAgACABQQFyNgIEIAIgA2ogATYCACADIAhBA3I2AgQMAQtBnAhBADYCAEGQCEEANgIAIAMgAkEDcjYCBCACIANqIgAgACgCBEEBcjYCBAsgA0EIaiEADAsLIAhBlAgoAgAiBkkEQEGUCCAGIAhrIgE2AgBBoAhBoAgoAgAiAiAIaiIANgIAIAAgAUEBcjYCBCACIAhBA3I2AgQgAkEIaiEADAsLQQAhACAIQS9qIgkCf0HgCygCAARAQegLKAIADAELQewLQn83AgBB5AtCgKCAgICABDcCAEHgCyAMQQxqQXBxQdiq1aoFczYCAEH0C0EANgIAQcQLQQA2AgBBgCALIgFqIgVBACABayIHcSICIAhNDQpBwAsoAgAiBARAQbgLKAIAIgMgAmoiASADTQ0LIAEgBEsNCwtBxAstAABBBHENBQJAAkBBoAgoAgAiAwRAQcgLIQADQCADIAAoAgAiAU8EQCABIAAoAgRqIANLDQMLIAAoAggiAA0ACwtBABABIgFBf0YNBiACIQVB5AsoAgAiA0EBayIAIAFxBEAgAiABayAAIAFqQQAgA2txaiEFCyAFIAhNDQYgBUH+////B0sNBkHACygCACIEBEBBuAsoAgAiAyAFaiIAIANNDQcgACAESw0HCyAFEAEiACABRw0BDAgLIAUgBmsgB3EiBUH+////B0sNBSAFEAEiASAAKAIAIAAoAgRqRg0EIAEhAAsCQCAAQX9GDQAgCEEwaiAFTQ0AQegLKAIAIgEgCSAFa2pBACABa3EiAUH+////B0sEQCAAIQEMCAsgARABQX9HBEAgASAFaiEFIAAhAQwIC0EAIAVrEAEaDAULIAAiAUF/Rw0GDAQLAAtBACEEDAcLQQAhAQwFCyABQX9HDQILQcQLQcQLKAIAQQRyNgIACyACQf7///8HSw0BIAIQASEBQQAQASEAIAFBf0YNASAAQX9GDQEgACABTQ0BIAAgAWsiBSAIQShqTQ0BC0G4C0G4CygCACAFaiIANgIAQbwLKAIAIABJBEBBvAsgADYCAAsCQAJAAkBBoAgoAgAiBwRAQcgLIQADQCABIAAoAgAiAyAAKAIEIgJqRg0CIAAoAggiAA0ACwwCC0GYCCgCACIAQQAgACABTRtFBEBBmAggATYCAAtBACEAQcwLIAU2AgBByAsgATYCAEGoCEF/NgIAQawIQeALKAIANgIAQdQLQQA2AgADQCAAQQN0IgNBuAhqIANBsAhqIgI2AgAgA0G8CGogAjYCACAAQQFqIgBBIEcNAAtBlAggBUEoayIDQXggAWtBB3FBACABQQhqQQdxGyIAayICNgIAQaAIIAAgAWoiADYCACAAIAJBAXI2AgQgASADakEoNgIEQaQIQfALKAIANgIADAILIAAtAAxBCHENACADIAdLDQAgASAHTQ0AIAAgAiAFajYCBEGgCCAHQXggB2tBB3FBACAHQQhqQQdxGyIAaiICNgIAQZQIQZQIKAIAIAVqIgEgAGsiADYCACACIABBAXI2AgQgASAHakEoNgIEQaQIQfALKAIANgIADAELQZgIKAIAIAFLBEBBmAggATYCAAsgASAFaiECQcgLIQACQAJAAkACQAJAAkADQCACIAAoAgBHBEAgACgCCCIADQEMAgsLIAAtAAxBCHFFDQELQcgLIQADQCAHIAAoAgAiAk8EQCACIAAoAgRqIgQgB0sNAwsgACgCCCEADAALAAsgACABNgIAIAAgACgCBCAFajYCBCABQXggAWtBB3FBACABQQhqQQdxG2oiCSAIQQNyNgIEIAJBeCACa0EHcUEAIAJBCGpBB3EbaiIFIAggCWoiBmshAiAFIAdGBEBBoAggBjYCAEGUCEGUCCgCACACaiIANgIAIAYgAEEBcjYCBAwDCyAFQZwIKAIARgRAQZwIIAY2AgBBkAhBkAgoAgAgAmoiADYCACAGIABBAXI2AgQgACAGaiAANgIADAMLIAUoAgQiAEEDcUEBRgRAIABBeHEhBwJAIABB/wFNBEAgBSgCCCIDIABBA3YiAEEDdEGwCGpGGiADIAUoAgwiAUYEQEGICEGICCgCAEF+IAB3cTYCAAwCCyADIAE2AgwgASADNgIIDAELIAUoAhghCAJAIAUgBSgCDCIBRwRAIAUoAggiACABNgIMIAEgADYCCAwBCwJAIAVBFGoiACgCACIDDQAgBUEQaiIAKAIAIgMNAEEAIQEMAQsDQCAAIQQgAyIBQRRqIgAoAgAiAw0AIAFBEGohACABKAIQIgMNAAsgBEEANgIACyAIRQ0AAkAgBSAFKAIcIgNBAnRBuApqIgAoAgBGBEAgACABNgIAIAENAUGMCEGMCCgCAEF+IAN3cTYCAAwCCyAIQRBBFCAIKAIQIAVGG2ogATYCACABRQ0BCyABIAg2AhggBSgCECIABEAgASAANgIQIAAgATYCGAsgBSgCFCIARQ0AIAEgADYCFCAAIAE2AhgLIAUgB2ohBSACIAdqIQILIAUgBSgCBEF+cTYCBCAGIAJBAXI2AgQgAiAGaiACNgIAIAJB/wFNBEAgAkEDdiIAQQN0QbAIaiECAn9BiAgoAgAiAUEBIAB0IgBxRQRAQYgIIAAgAXI2AgAgAgwBCyACKAIICyEAIAIgBjYCCCAAIAY2AgwgBiACNgIMIAYgADYCCAwDC0EfIQAgAkH///8HTQRAIAJBCHYiACAAQYD+P2pBEHZBCHEiA3QiACAAQYDgH2pBEHZBBHEiAXQiACAAQYCAD2pBEHZBAnEiAHRBD3YgASADciAAcmsiAEEBdCACIABBFWp2QQFxckEcaiEACyAGIAA2AhwgBkIANwIQIABBAnRBuApqIQQCQEGMCCgCACIDQQEgAHQiAXFFBEBBjAggASADcjYCACAEIAY2AgAgBiAENgIYDAELIAJBAEEZIABBAXZrIABBH0YbdCEAIAQoAgAhAQNAIAEiAygCBEF4cSACRg0DIABBHXYhASAAQQF0IQAgAyABQQRxaiIEKAIQIgENAAsgBCAGNgIQIAYgAzYCGAsgBiAGNgIMIAYgBjYCCAwCC0GUCCAFQShrIgNBeCABa0EHcUEAIAFBCGpBB3EbIgBrIgI2AgBBoAggACABaiIANgIAIAAgAkEBcjYCBCABIANqQSg2AgRBpAhB8AsoAgA2AgAgByAEQScgBGtBB3FBACAEQSdrQQdxG2pBL2siACAAIAdBEGpJGyICQRs2AgQgAkHQCykCADcCECACQcgLKQIANwIIQdALIAJBCGo2AgBBzAsgBTYCAEHICyABNgIAQdQLQQA2AgAgAkEYaiEAA0AgAEEHNgIEIABBCGohASAAQQRqIQAgASAESQ0ACyACIAdGDQMgAiACKAIEQX5xNgIEIAcgAiAHayIEQQFyNgIEIAIgBDYCACAEQf8BTQRAIARBA3YiAEEDdEGwCGohAgJ/QYgIKAIAIgFBASAAdCIAcUUEQEGICCAAIAFyNgIAIAIMAQsgAigCCAshACACIAc2AgggACAHNgIMIAcgAjYCDCAHIAA2AggMBAtBHyEAIAdCADcCECAEQf///wdNBEAgBEEIdiIAIABBgP4/akEQdkEIcSICdCIAIABBgOAfakEQdkEEcSIBdCIAIABBgIAPakEQdkECcSIAdEEPdiABIAJyIAByayIAQQF0IAQgAEEVanZBAXFyQRxqIQALIAcgADYCHCAAQQJ0QbgKaiEDAkBBjAgoAgAiAkEBIAB0IgFxRQRAQYwIIAEgAnI2AgAgAyAHNgIAIAcgAzYCGAwBCyAEQQBBGSAAQQF2ayAAQR9GG3QhACADKAIAIQEDQCABIgIoAgRBeHEgBEYNBCAAQR12IQEgAEEBdCEAIAIgAUEEcWoiAygCECIBDQALIAMgBzYCECAHIAI2AhgLIAcgBzYCDCAHIAc2AggMAwsgAygCCCIAIAY2AgwgAyAGNgIIIAZBADYCGCAGIAM2AgwgBiAANgIICyAJQQhqIQAMBQsgAigCCCIAIAc2AgwgAiAHNgIIIAdBADYCGCAHIAI2AgwgByAANgIIC0GUCCgCACIAIAhNDQBBlAggACAIayIBNgIAQaAIQaAIKAIAIgIgCGoiADYCACAAIAFBAXI2AgQgAiAIQQNyNgIEIAJBCGohAAwDC0GECEEwNgIAQQAhAAwCCwJAIAVFDQACQCAEKAIcIgJBAnRBuApqIgAoAgAgBEYEQCAAIAE2AgAgAQ0BQYwIIAlBfiACd3EiCTYCAAwCCyAFQRBBFCAFKAIQIARGG2ogATYCACABRQ0BCyABIAU2AhggBCgCECIABEAgASAANgIQIAAgATYCGAsgBCgCFCIARQ0AIAEgADYCFCAAIAE2AhgLAkAgA0EPTQRAIAQgAyAIaiIAQQNyNgIEIAAgBGoiACAAKAIEQQFyNgIEDAELIAQgCEEDcjYCBCAGIANBAXI2AgQgAyAGaiADNgIAIANB/wFNBEAgA0EDdiIAQQN0QbAIaiECAn9BiAgoAgAiAUEBIAB0IgBxRQRAQYgIIAAgAXI2AgAgAgwBCyACKAIICyEAIAIgBjYCCCAAIAY2AgwgBiACNgIMIAYgADYCCAwBC0EfIQAgA0H///8HTQRAIANBCHYiACAAQYD+P2pBEHZBCHEiAnQiACAAQYDgH2pBEHZBBHEiAXQiACAAQYCAD2pBEHZBAnEiAHRBD3YgASACciAAcmsiAEEBdCADIABBFWp2QQFxckEcaiEACyAGIAA2AhwgBkIANwIQIABBAnRBuApqIQICQAJAIAlBASAAdCIBcUUEQEGMCCABIAlyNgIAIAIgBjYCACAGIAI2AhgMAQsgA0EAQRkgAEEBdmsgAEEfRht0IQAgAigCACEIA0AgCCIBKAIEQXhxIANGDQIgAEEddiECIABBAXQhACABIAJBBHFqIgIoAhAiCA0ACyACIAY2AhAgBiABNgIYCyAGIAY2AgwgBiAGNgIIDAELIAEoAggiACAGNgIMIAEgBjYCCCAGQQA2AhggBiABNgIMIAYgADYCCAsgBEEIaiEADAELAkAgC0UNAAJAIAEoAhwiAkECdEG4CmoiACgCACABRgRAIAAgBDYCACAEDQFBjAggBkF+IAJ3cTYCAAwCCyALQRBBFCALKAIQIAFGG2ogBDYCACAERQ0BCyAEIAs2AhggASgCECIABEAgBCAANgIQIAAgBDYCGAsgASgCFCIARQ0AIAQgADYCFCAAIAQ2AhgLAkAgA0EPTQRAIAEgAyAIaiIAQQNyNgIEIAAgAWoiACAAKAIEQQFyNgIEDAELIAEgCEEDcjYCBCAJIANBAXI2AgQgAyAJaiADNgIAIAoEQCAKQQN2IgBBA3RBsAhqIQRBnAgoAgAhAgJ/QQEgAHQiACAFcUUEQEGICCAAIAVyNgIAIAQMAQsgBCgCCAshACAEIAI2AgggACACNgIMIAIgBDYCDCACIAA2AggLQZwIIAk2AgBBkAggAzYCAAsgAUEIaiEACyAMQRBqJAAgAAsQACMAIABrQXBxIgAkACAACwYAIAAkAAsEACMAC4AJAgh/BH4jAEGQAWsiBiQAIAYgBS0AA0EYdEGAgIAYcSAFLwAAIAUtAAJBEHRycjYCACAGIAUoAANBAnZBg/7/H3E2AgQgBiAFKAAGQQR2Qf+B/x9xNgIIIAYgBSgACUEGdkH//8AfcTYCDCAFLwANIQggBS0ADyEJIAZCADcCFCAGQgA3AhwgBkEANgIkIAYgCCAJQRB0QYCAPHFyNgIQIAYgBSgAEDYCKCAGIAUoABQ2AiwgBiAFKAAYNgIwIAUoABwhBSAGQQA6AEwgBkEANgI4IAYgBTYCNCAGIAEgAhAEIAQEQCAGIAMgBBAECyAGKAI4IgEEQCAGQTxqIgIgAWpBAToAACABQQFqQQ9NBEAgASAGakE9aiEEAkBBDyABayIDRQ0AIAMgBGoiAUEBa0EAOgAAIARBADoAACADQQNJDQAgAUECa0EAOgAAIARBADoAASABQQNrQQA6AAAgBEEAOgACIANBB0kNACABQQRrQQA6AAAgBEEAOgADIANBCUkNACAEQQAgBGtBA3EiAWoiBEEANgIAIAQgAyABa0F8cSIBaiIDQQRrQQA2AgAgAUEJSQ0AIARBADYCCCAEQQA2AgQgA0EIa0EANgIAIANBDGtBADYCACABQRlJDQAgBEEANgIYIARBADYCFCAEQQA2AhAgBEEANgIMIANBEGtBADYCACADQRRrQQA2AgAgA0EYa0EANgIAIANBHGtBADYCACABIARBBHFBGHIiAWsiA0EgSQ0AIAEgBGohAQNAIAFCADcDGCABQgA3AxAgAUIANwMIIAFCADcDACABQSBqIQEgA0EgayIDQR9LDQALCwsgBkEBOgBMIAYgAkEQEAILIAY1AjQhECAGNQIwIREgBjUCLCEOIAAgBjUCKCAGKAIkIAYoAiAgBigCHCAGKAIYIgNBGnZqIgJBGnZqIgFBGnZqIgtBgICAYHIgAUH///8fcSINIAJB////H3EiCCAGKAIUIAtBGnZBBWxqIgFB////H3EiCUEFaiIFQRp2IANB////H3EgAUEadmoiA2oiAUEadmoiAkEadmoiBEEadmoiDEEfdSIHIANxIAEgDEEfdkEBayIDQf///x9xIgpxciIBQRp0IAUgCnEgByAJcXJyrXwiDzwAACAAIA9CGIg8AAMgACAPQhCIPAACIAAgD0IIiDwAASAAIA4gByAIcSACIApxciICQRR0IAFBBnZyrXwgD0IgiHwiDjwABCAAIA5CGIg8AAcgACAOQhCIPAAGIAAgDkIIiDwABSAAIBEgByANcSAEIApxciIBQQ50IAJBDHZyrXwgDkIgiHwiDjwACCAAIA5CGIg8AAsgACAOQhCIPAAKIAAgDkIIiDwACSAAIBAgAyAMcSAHIAtxckEIdCABQRJ2cq18IA5CIIh8Ig48AAwgACAOQhiIPAAPIAAgDkIQiDwADiAAIA5CCIg8AA0gBkIANwIwIAZCADcCKCAGQgA3AiAgBkIANwIYIAZCADcCECAGQgA3AgggBkIANwIAIAZBkAFqJAALpwwBB38CQCAARQ0AIABBCGsiAyAAQQRrKAIAIgFBeHEiAGohBQJAIAFBAXENACABQQNxRQ0BIAMgAygCACIBayIDQZgIKAIASQ0BIAAgAWohACADQZwIKAIARwRAIAFB/wFNBEAgAygCCCICIAFBA3YiBEEDdEGwCGpGGiACIAMoAgwiAUYEQEGICEGICCgCAEF+IAR3cTYCAAwDCyACIAE2AgwgASACNgIIDAILIAMoAhghBgJAIAMgAygCDCIBRwRAIAMoAggiAiABNgIMIAEgAjYCCAwBCwJAIANBFGoiAigCACIEDQAgA0EQaiICKAIAIgQNAEEAIQEMAQsDQCACIQcgBCIBQRRqIgIoAgAiBA0AIAFBEGohAiABKAIQIgQNAAsgB0EANgIACyAGRQ0BAkAgAyADKAIcIgJBAnRBuApqIgQoAgBGBEAgBCABNgIAIAENAUGMCEGMCCgCAEF+IAJ3cTYCAAwDCyAGQRBBFCAGKAIQIANGG2ogATYCACABRQ0CCyABIAY2AhggAygCECICBEAgASACNgIQIAIgATYCGAsgAygCFCICRQ0BIAEgAjYCFCACIAE2AhgMAQsgBSgCBCIBQQNxQQNHDQBBkAggADYCACAFIAFBfnE2AgQgAyAAQQFyNgIEIAAgA2ogADYCAA8LIAMgBU8NACAFKAIEIgFBAXFFDQACQCABQQJxRQRAIAVBoAgoAgBGBEBBoAggAzYCAEGUCEGUCCgCACAAaiIANgIAIAMgAEEBcjYCBCADQZwIKAIARw0DQZAIQQA2AgBBnAhBADYCAA8LIAVBnAgoAgBGBEBBnAggAzYCAEGQCEGQCCgCACAAaiIANgIAIAMgAEEBcjYCBCAAIANqIAA2AgAPCyABQXhxIABqIQACQCABQf8BTQRAIAUoAggiAiABQQN2IgRBA3RBsAhqRhogAiAFKAIMIgFGBEBBiAhBiAgoAgBBfiAEd3E2AgAMAgsgAiABNgIMIAEgAjYCCAwBCyAFKAIYIQYCQCAFIAUoAgwiAUcEQCAFKAIIIgJBmAgoAgBJGiACIAE2AgwgASACNgIIDAELAkAgBUEUaiICKAIAIgQNACAFQRBqIgIoAgAiBA0AQQAhAQwBCwNAIAIhByAEIgFBFGoiAigCACIEDQAgAUEQaiECIAEoAhAiBA0ACyAHQQA2AgALIAZFDQACQCAFIAUoAhwiAkECdEG4CmoiBCgCAEYEQCAEIAE2AgAgAQ0BQYwIQYwIKAIAQX4gAndxNgIADAILIAZBEEEUIAYoAhAgBUYbaiABNgIAIAFFDQELIAEgBjYCGCAFKAIQIgIEQCABIAI2AhAgAiABNgIYCyAFKAIUIgJFDQAgASACNgIUIAIgATYCGAsgAyAAQQFyNgIEIAAgA2ogADYCACADQZwIKAIARw0BQZAIIAA2AgAPCyAFIAFBfnE2AgQgAyAAQQFyNgIEIAAgA2ogADYCAAsgAEH/AU0EQCAAQQN2IgFBA3RBsAhqIQACf0GICCgCACICQQEgAXQiAXFFBEBBiAggASACcjYCACAADAELIAAoAggLIQIgACADNgIIIAIgAzYCDCADIAA2AgwgAyACNgIIDwtBHyECIANCADcCECAAQf///wdNBEAgAEEIdiIBIAFBgP4/akEQdkEIcSIBdCICIAJBgOAfakEQdkEEcSICdCIEIARBgIAPakEQdkECcSIEdEEPdiABIAJyIARyayIBQQF0IAAgAUEVanZBAXFyQRxqIQILIAMgAjYCHCACQQJ0QbgKaiEBAkACQAJAQYwIKAIAIgRBASACdCIHcUUEQEGMCCAEIAdyNgIAIAEgAzYCACADIAE2AhgMAQsgAEEAQRkgAkEBdmsgAkEfRht0IQIgASgCACEBA0AgASIEKAIEQXhxIABGDQIgAkEddiEBIAJBAXQhAiAEIAFBBHFqIgdBEGooAgAiAQ0ACyAHIAM2AhAgAyAENgIYCyADIAM2AgwgAyADNgIIDAELIAQoAggiACADNgIMIAQgAzYCCCADQQA2AhggAyAENgIMIAMgADYCCAtBqAhBqAgoAgBBAWsiAEF/IAAbNgIACwsLCQEAQYEICwIGUA==";
          if (!Je.startsWith(qe)) {
            var Oe = Je;
            Je = m.locateFile ? m.locateFile(Oe, C) : C + Oe;
          }
          function Be() {
            var E = Je;
            try {
              if (E == Je && J) {
                return new Uint8Array(J);
              }
              var A = W(E);
              if (A) {
                return A;
              }
              if (K) {
                return K(E);
              }
              throw "both async and sync fetching of the wasm failed";
            } catch (h) {
              Pe(h);
            }
          }
          function $e() {
            if (!J && (Q || n)) {
              if (typeof fetch == "function" && !Je.startsWith("file://")) {
                return fetch(Je, {
                  credentials: "same-origin"
                }).then(function (E) {
                  if (!E.ok) {
                    throw "failed to load wasm binary file at '" + Je + "'";
                  }
                  return E.arrayBuffer();
                }).catch(function () {
                  return Be();
                });
              }
              if (X) {
                return new Promise(function (E, A) {
                  X(Je, function (h) {
                    E(new Uint8Array(h));
                  }, A);
                });
              }
            }
            return Promise.resolve().then(function () {
              return Be();
            });
          }
          function de(E) {
            while (E.length > 0) {
              var A = E.shift();
              if (typeof A == "function") {
                A(m);
              } else {
                var h = A.m;
                if (typeof h == "number") {
                  if (A.l === undefined) {
                    Ne.get(h)();
                  } else {
                    Ne.get(h)(A.l);
                  }
                } else {
                  h(A.l === undefined ? null : A.l);
                }
              }
            }
          }
          var P = typeof atob == "function" ? atob : function (E) {
            var A = "";
            var h = 0;
            E = E.replace(/[^A-Za-z0-9\+\/=]/g, "");
            do {
              var S = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(E.charAt(h++));
              var L = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(E.charAt(h++));
              var j = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(E.charAt(h++));
              var se = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(E.charAt(h++));
              S = S << 2 | L >> 4;
              L = (L & 15) << 4 | j >> 2;
              var le = (j & 3) << 6 | se;
              A += String.fromCharCode(S);
              if (j !== 64) {
                A += String.fromCharCode(L);
              }
              if (se !== 64) {
                A += String.fromCharCode(le);
              }
            } while (h < E.length);
            return A;
          };
          function W(E) {
            if (E.startsWith(qe)) {
              E = E.slice(qe.length);
              if (typeof B == "boolean" && B) {
                var A = Buffer.from(E, "base64");
                A = new Uint8Array(A.buffer, A.byteOffset, A.byteLength);
              } else {
                try {
                  var h = P(E);
                  var S = new Uint8Array(h.length);
                  for (E = 0; E < h.length; ++E) {
                    S[E] = h.charCodeAt(E);
                  }
                  A = S;
                } catch {
                  throw Error("Converting base64 string to bytes failed.");
                }
              }
              return A;
            }
          }
          var g = {
            a: function (E) {
              var A = we.length;
              E >>>= 0;
              if (E > 2147483648) {
                return false;
              }
              for (var h = 1; h <= 4; h *= 2) {
                var S = A * (1 + 0.2 / h);
                S = Math.min(S, E + 100663296);
                S = Math.max(E, S);
                if (S % 65536 > 0) {
                  S += 65536 - S % 65536;
                }
                e: {
                  try {
                    V.grow(Math.min(2147483648, S) - Ie.byteLength + 65535 >>> 16);
                    Me();
                    var L = 1;
                    break e;
                  } catch {}
                  L = undefined;
                }
                if (L) {
                  return true;
                }
              }
              return false;
            }
          };
          (function () {
            function E(L) {
              m.asm = L.exports;
              V = m.asm.b;
              Me();
              Ne = m.asm.j;
              Le.unshift(m.asm.c);
              Ke--;
              if (m.monitorRunDependencies) {
                m.monitorRunDependencies(Ke);
              }
              if (Ke == 0 && Re) {
                L = Re;
                Re = null;
                L();
              }
            }
            function A(L) {
              E(L.instance);
            }
            function h(L) {
              return $e().then(function (j) {
                return WebAssembly.instantiate(j, S);
              }).then(L, function (j) {
                Y("failed to asynchronously prepare wasm: " + j);
                Pe(j);
              });
            }
            var S = {
              a: g
            };
            Ke++;
            if (m.monitorRunDependencies) {
              m.monitorRunDependencies(Ke);
            }
            if (m.instantiateWasm) {
              try {
                return m.instantiateWasm(S, E);
              } catch (L) {
                Y("Module.instantiateWasm callback failed with error: " + L);
                return false;
              }
            }
            (function () {
              if (J || typeof WebAssembly.instantiateStreaming != "function" || Je.startsWith(qe) || Je.startsWith("file://") || typeof fetch != "function") {
                return h(A);
              } else {
                return fetch(Je, {
                  credentials: "same-origin"
                }).then(function (L) {
                  return WebAssembly.instantiateStreaming(L, S).then(A, function (j) {
                    Y("wasm streaming compile failed: " + j);
                    Y("falling back to ArrayBuffer instantiation");
                    return h(A);
                  });
                });
              }
            })().catch(v);
            return {};
          })();
          m.___wasm_call_ctors = function () {
            return (m.___wasm_call_ctors = m.asm.c).apply(null, arguments);
          };
          m._poly1305_auth = function () {
            return (m._poly1305_auth = m.asm.d).apply(null, arguments);
          };
          var f = m.stackSave = function () {
            return (f = m.stackSave = m.asm.e).apply(null, arguments);
          };
          var o = m.stackRestore = function () {
            return (o = m.stackRestore = m.asm.f).apply(null, arguments);
          };
          var b = m.stackAlloc = function () {
            return (b = m.stackAlloc = m.asm.g).apply(null, arguments);
          };
          m._malloc = function () {
            return (m._malloc = m.asm.h).apply(null, arguments);
          };
          m._free = function () {
            return (m._free = m.asm.i).apply(null, arguments);
          };
          m.cwrap = function (E, A, h, S) {
            h = h || [];
            var L = h.every(function (j) {
              return j === "number";
            });
            if (A !== "string" && L && !S) {
              return Z(E);
            } else {
              return function () {
                return he(E, A, h, arguments);
              };
            }
          };
          var O;
          Re = function E() {
            if (!O) {
              q();
            }
            if (!O) {
              Re = E;
            }
          };
          function q() {
            function E() {
              if (!O && (O = true, m.calledRun = true, !F)) {
                de(Le);
                M(m);
                if (m.onRuntimeInitialized) {
                  m.onRuntimeInitialized();
                }
                if (m.postRun) {
                  for (typeof m.postRun == "function" && (m.postRun = [m.postRun]); m.postRun.length;) {
                    var A = m.postRun.shift();
                    Qe.unshift(A);
                  }
                }
                de(Qe);
              }
            }
            if (!(Ke > 0)) {
              if (m.preRun) {
                for (typeof m.preRun == "function" && (m.preRun = [m.preRun]); m.preRun.length;) {
                  Xe();
                }
              }
              de(Ue);
              if (!(Ke > 0)) {
                if (m.setStatus) {
                  m.setStatus("Running...");
                  setTimeout(function () {
                    setTimeout(function () {
                      m.setStatus("");
                    }, 1);
                    E();
                  }, 1);
                } else {
                  E();
                }
              }
            }
          }
          m.run = q;
          if (m.preInit) {
            for (typeof m.preInit == "function" && (m.preInit = [m.preInit]); m.preInit.length > 0;) {
              m.preInit.pop()();
            }
          }
          q();
          return k.ready;
        };
      }();
      p.exports = r;
    })(Qn);
  }
  return Qn.exports;
}
var Fn;
var $r;
function tn() {
  if ($r) {
    return Fn;
  }
  $r = 1;
  const {
    createCipheriv: p,
    createDecipheriv: e,
    createHmac: r,
    randomFillSync: y,
    timingSafeEqual: k
  } = en;
  const {
    readUInt32BE: m,
    writeUInt32BE: M
  } = Kt();
  const v = Buffer[Symbol.species];
  const R = 4294967295;
  const I = Buffer.alloc(0);
  const Q = Buffer.alloc(4);
  const n = new Map();
  const B = 35000;
  let C;
  let w;
  let X;
  let K;
  let $;
  let re;
  let Y;
  try {
    C = require("./crypto/build/Release/sshcrypto.node");
    ({
      AESGCMCipher: w,
      ChaChaPolyCipher: X,
      GenericCipher: K,
      AESGCMDecipher: $,
      ChaChaPolyDecipher: re,
      GenericDecipher: Y
    } = C);
  } catch {}
  const J = 1;
  const V = (() => {
    function g(f, o, b, O, q, E, A) {
      return {
        sslName: f,
        blockLen: o,
        keyLen: b,
        ivLen: O !== 0 || A & J ? O : o,
        authLen: q,
        discardLen: E,
        stream: !!(A & J)
      };
    }
    return {
      "chacha20-poly1305@openssh.com": g("chacha20", 8, 64, 0, 16, 0, J),
      "aes128-gcm": g("aes-128-gcm", 16, 16, 12, 16, 0, J),
      "aes256-gcm": g("aes-256-gcm", 16, 32, 12, 16, 0, J),
      "aes128-gcm@openssh.com": g("aes-128-gcm", 16, 16, 12, 16, 0, J),
      "aes256-gcm@openssh.com": g("aes-256-gcm", 16, 32, 12, 16, 0, J),
      "aes128-cbc": g("aes-128-cbc", 16, 16, 0, 0, 0, 0),
      "aes192-cbc": g("aes-192-cbc", 16, 24, 0, 0, 0, 0),
      "aes256-cbc": g("aes-256-cbc", 16, 32, 0, 0, 0, 0),
      "rijndael-cbc@lysator.liu.se": g("aes-256-cbc", 16, 32, 0, 0, 0, 0),
      "3des-cbc": g("des-ede3-cbc", 8, 24, 0, 0, 0, 0),
      "blowfish-cbc": g("bf-cbc", 8, 16, 0, 0, 0, 0),
      "idea-cbc": g("idea-cbc", 8, 16, 0, 0, 0, 0),
      "cast128-cbc": g("cast-cbc", 8, 16, 0, 0, 0, 0),
      "aes128-ctr": g("aes-128-ctr", 16, 16, 16, 0, 0, J),
      "aes192-ctr": g("aes-192-ctr", 16, 24, 16, 0, 0, J),
      "aes256-ctr": g("aes-256-ctr", 16, 32, 16, 0, 0, J),
      "3des-ctr": g("des-ede3", 8, 24, 8, 0, 0, J),
      "blowfish-ctr": g("bf-ecb", 8, 16, 8, 0, 0, J),
      "cast128-ctr": g("cast5-ecb", 8, 16, 8, 0, 0, J),
      arcfour: g("rc4", 8, 16, 0, 0, 1536, J),
      arcfour128: g("rc4", 8, 16, 0, 0, 1536, J),
      arcfour256: g("rc4", 8, 32, 0, 0, 1536, J),
      arcfour512: g("rc4", 8, 64, 0, 0, 1536, J)
    };
  })();
  const F = (() => {
    function g(f, o, b, O) {
      return {
        sslName: f,
        len: o,
        actualLen: b,
        isETM: O
      };
    }
    return {
      "hmac-md5": g("md5", 16, 16, false),
      "hmac-md5-96": g("md5", 16, 12, false),
      "hmac-ripemd160": g("ripemd160", 20, 20, false),
      "hmac-sha1": g("sha1", 20, 20, false),
      "hmac-sha1-etm@openssh.com": g("sha1", 20, 20, true),
      "hmac-sha1-96": g("sha1", 20, 12, false),
      "hmac-sha2-256": g("sha256", 32, 32, false),
      "hmac-sha2-256-etm@openssh.com": g("sha256", 32, 32, true),
      "hmac-sha2-256-96": g("sha256", 32, 12, false),
      "hmac-sha2-512": g("sha512", 64, 64, false),
      "hmac-sha2-512-etm@openssh.com": g("sha512", 64, 64, true),
      "hmac-sha2-512-96": g("sha512", 64, 12, false)
    };
  })();
  class oe {
    constructor(f, o) {
      this.outSeqno = f;
      this._onWrite = o;
      this._dead = false;
    }
    free() {
      this._dead = true;
    }
    allocPacket(f) {
      let o = 5 + f;
      let b = 8 - (o & 7);
      if (b < 4) {
        b += 8;
      }
      o += b;
      const O = Buffer.allocUnsafe(o);
      M(O, o - 4, 0);
      O[4] = b;
      y(O, 5 + f, b);
      return O;
    }
    encrypt(f) {
      if (!this._dead) {
        this._onWrite(f);
        this.outSeqno = this.outSeqno + 1 >>> 0;
      }
    }
  }
  const Z = Buffer.alloc(32);
  const he = Buffer.alloc(16);
  let U;
  let Ie;
  let be;
  class we {
    constructor(f) {
      const o = f.outbound;
      this.outSeqno = o.seqno;
      this._onWrite = o.onWrite;
      this._encKeyMain = o.cipherKey.slice(0, 32);
      this._encKeyPktLen = o.cipherKey.slice(32);
      this._dead = false;
    }
    free() {
      this._dead = true;
    }
    allocPacket(f) {
      let o = 5 + f;
      let b = 8 - (o - 4 & 7);
      if (b < 4) {
        b += 8;
      }
      o += b;
      const O = Buffer.allocUnsafe(o);
      M(O, o - 4, 0);
      O[4] = b;
      y(O, 5 + f, b);
      return O;
    }
    encrypt(f) {
      if (this._dead) {
        return;
      }
      he[0] = 0;
      M(he, this.outSeqno, 12);
      const o = p("chacha20", this._encKeyMain, he).update(Z);
      const b = p("chacha20", this._encKeyPktLen, he).update(f.slice(0, 4));
      this._onWrite(b);
      he[0] = 1;
      const O = p("chacha20", this._encKeyMain, he).update(f.slice(4));
      this._onWrite(O);
      be(Ie, b, b.length, O, O.length, o);
      const q = Buffer.allocUnsafe(16);
      q.set(new Uint8Array(U.HEAPU8.buffer, Ie, 16), 0);
      this._onWrite(q);
      this.outSeqno = this.outSeqno + 1 >>> 0;
    }
  }
  class Me {
    constructor(f) {
      const o = f.outbound;
      this.outSeqno = o.seqno;
      this._onWrite = o.onWrite;
      this._instance = new X(o.cipherKey);
      this._dead = false;
    }
    free() {
      this._dead = true;
      this._instance.free();
    }
    allocPacket(f) {
      let o = 5 + f;
      let b = 8 - (o - 4 & 7);
      if (b < 4) {
        b += 8;
      }
      o += b;
      const O = Buffer.allocUnsafe(o + 16);
      M(O, o - 4, 0);
      O[4] = b;
      y(O, 5 + f, b);
      return O;
    }
    encrypt(f) {
      if (!this._dead) {
        this._instance.encrypt(f, this.outSeqno);
        this._onWrite(f);
        this.outSeqno = this.outSeqno + 1 >>> 0;
      }
    }
  }
  class Ne {
    constructor(f) {
      const o = f.outbound;
      this.outSeqno = o.seqno;
      this._onWrite = o.onWrite;
      this._encSSLName = o.cipherInfo.sslName;
      this._encKey = o.cipherKey;
      this._encIV = o.cipherIV;
      this._dead = false;
    }
    free() {
      this._dead = true;
    }
    allocPacket(f) {
      let o = 5 + f;
      let b = 16 - (o - 4 & 15);
      if (b < 4) {
        b += 16;
      }
      o += b;
      const O = Buffer.allocUnsafe(o);
      M(O, o - 4, 0);
      O[4] = b;
      y(O, 5 + f, b);
      return O;
    }
    encrypt(f) {
      if (this._dead) {
        return;
      }
      const o = p(this._encSSLName, this._encKey, this._encIV);
      o.setAutoPadding(false);
      const b = f.slice(0, 4);
      o.setAAD(b);
      this._onWrite(b);
      const O = o.update(f.slice(4));
      this._onWrite(O);
      const q = o.final();
      if (q.length) {
        this._onWrite(q);
      }
      const E = o.getAuthTag();
      this._onWrite(E);
      Be(this._encIV);
      this.outSeqno = this.outSeqno + 1 >>> 0;
    }
  }
  class Ue {
    constructor(f) {
      const o = f.outbound;
      this.outSeqno = o.seqno;
      this._onWrite = o.onWrite;
      this._instance = new w(o.cipherInfo.sslName, o.cipherKey, o.cipherIV);
      this._dead = false;
    }
    free() {
      this._dead = true;
      this._instance.free();
    }
    allocPacket(f) {
      let o = 5 + f;
      let b = 16 - (o - 4 & 15);
      if (b < 4) {
        b += 16;
      }
      o += b;
      const O = Buffer.allocUnsafe(o + 16);
      M(O, o - 4, 0);
      O[4] = b;
      y(O, 5 + f, b);
      return O;
    }
    encrypt(f) {
      if (!this._dead) {
        this._instance.encrypt(f);
        this._onWrite(f);
        this.outSeqno = this.outSeqno + 1 >>> 0;
      }
    }
  }
  class Le {
    constructor(f) {
      const o = f.outbound;
      this.outSeqno = o.seqno;
      this._onWrite = o.onWrite;
      this._encBlockLen = o.cipherInfo.blockLen;
      this._cipherInstance = p(o.cipherInfo.sslName, o.cipherKey, o.cipherIV);
      this._macSSLName = o.macInfo.sslName;
      this._macKey = o.macKey;
      this._macActualLen = o.macInfo.actualLen;
      this._macETM = o.macInfo.isETM;
      this._aadLen = this._macETM ? 4 : 0;
      this._dead = false;
      const b = o.cipherInfo.discardLen;
      if (b) {
        let O = n.get(b);
        if (O === undefined) {
          O = Buffer.alloc(b);
          n.set(b, O);
        }
        this._cipherInstance.update(O);
      }
    }
    free() {
      this._dead = true;
    }
    allocPacket(f) {
      const o = this._encBlockLen;
      let b = 5 + f;
      let O = o - (b - this._aadLen & o - 1);
      if (O < 4) {
        O += o;
      }
      b += O;
      const q = Buffer.allocUnsafe(b);
      M(q, b - 4, 0);
      q[4] = O;
      y(q, 5 + f, O);
      return q;
    }
    encrypt(f) {
      if (this._dead) {
        return;
      }
      let o;
      if (this._macETM) {
        const O = new Uint8Array(f.buffer, f.byteOffset, 4);
        const q = this._cipherInstance.update(new Uint8Array(f.buffer, f.byteOffset + 4, f.length - 4));
        this._onWrite(O);
        this._onWrite(q);
        o = r(this._macSSLName, this._macKey);
        M(Q, this.outSeqno, 0);
        o.update(Q);
        o.update(O);
        o.update(q);
      } else {
        const O = this._cipherInstance.update(f);
        this._onWrite(O);
        o = r(this._macSSLName, this._macKey);
        M(Q, this.outSeqno, 0);
        o.update(Q);
        o.update(f);
      }
      let b = o.digest();
      if (b.length > this._macActualLen) {
        b = b.slice(0, this._macActualLen);
      }
      this._onWrite(b);
      this.outSeqno = this.outSeqno + 1 >>> 0;
    }
  }
  class Qe {
    constructor(f) {
      const o = f.outbound;
      this.outSeqno = o.seqno;
      this._onWrite = o.onWrite;
      this._encBlockLen = o.cipherInfo.blockLen;
      this._macLen = o.macInfo.len;
      this._macActualLen = o.macInfo.actualLen;
      this._aadLen = o.macInfo.isETM ? 4 : 0;
      this._instance = new K(o.cipherInfo.sslName, o.cipherKey, o.cipherIV, o.macInfo.sslName, o.macKey, o.macInfo.isETM);
      this._dead = false;
    }
    free() {
      this._dead = true;
      this._instance.free();
    }
    allocPacket(f) {
      const o = this._encBlockLen;
      let b = 5 + f;
      let O = o - (b - this._aadLen & o - 1);
      if (O < 4) {
        O += o;
      }
      b += O;
      const q = Buffer.allocUnsafe(b + this._macLen);
      M(q, b - 4, 0);
      q[4] = O;
      y(q, 5 + f, O);
      return q;
    }
    encrypt(f) {
      if (!this._dead) {
        this._instance.encrypt(f, this.outSeqno);
        if (this._macActualLen < this._macLen) {
          f = new v(f.buffer, f.byteOffset, f.length - (this._macLen - this._macActualLen));
        }
        this._onWrite(f);
        this.outSeqno = this.outSeqno + 1 >>> 0;
      }
    }
  }
  class Xe {
    constructor(f, o) {
      this.inSeqno = f;
      this._onPayload = o;
      this._len = 0;
      this._lenBytes = 0;
      this._packet = null;
      this._packetPos = 0;
    }
    free() {}
    decrypt(f, o, b) {
      while (o < b) {
        if (this._lenBytes < 4) {
          let q = Math.min(4 - this._lenBytes, b - o);
          for (this._lenBytes += q; q--;) {
            this._len = (this._len << 8) + f[o++];
          }
          if (this._lenBytes < 4) {
            return;
          }
          if (this._len > B || this._len < 8 || (4 + this._len & 7) !== 0) {
            throw new Error("Bad packet length");
          }
          if (o >= b) {
            return;
          }
        }
        if (this._packetPos < this._len) {
          const q = Math.min(this._len - this._packetPos, b - o);
          let E;
          if (o !== 0 || q !== b) {
            E = new Uint8Array(f.buffer, f.byteOffset + o, q);
          } else {
            E = f;
          }
          if (q === this._len) {
            this._packet = E;
          } else {
            this._packet ||= Buffer.allocUnsafe(this._len);
            this._packet.set(E, this._packetPos);
          }
          o += q;
          this._packetPos += q;
          if (this._packetPos < this._len) {
            return;
          }
        }
        const O = this._packet ? new v(this._packet.buffer, this._packet.byteOffset + 1, this._packet.length - this._packet[0] - 1) : I;
        this.inSeqno = this.inSeqno + 1 >>> 0;
        this._len = 0;
        this._lenBytes = 0;
        this._packet = null;
        this._packetPos = 0;
        {
          const q = this._onPayload(O);
          if (q !== undefined) {
            if (q === false) {
              return o;
            } else {
              return q;
            }
          }
        }
      }
    }
  }
  class Ke {
    constructor(f) {
      const o = f.inbound;
      this.inSeqno = o.seqno;
      this._onPayload = o.onPayload;
      this._decKeyMain = o.decipherKey.slice(0, 32);
      this._decKeyPktLen = o.decipherKey.slice(32);
      this._len = 0;
      this._lenBuf = Buffer.alloc(4);
      this._lenPos = 0;
      this._packet = null;
      this._pktLen = 0;
      this._mac = Buffer.allocUnsafe(16);
      this._calcMac = Buffer.allocUnsafe(16);
      this._macPos = 0;
    }
    free() {}
    decrypt(f, o, b) {
      while (o < b) {
        if (this._lenPos < 4) {
          let A = Math.min(4 - this._lenPos, b - o);
          while (A--) {
            this._lenBuf[this._lenPos++] = f[o++];
          }
          if (this._lenPos < 4) {
            return;
          }
          he[0] = 0;
          M(he, this.inSeqno, 12);
          const h = e("chacha20", this._decKeyPktLen, he).update(this._lenBuf);
          this._len = m(h, 0);
          if (this._len > B || this._len < 8 || (this._len & 7) !== 0) {
            throw new Error("Bad packet length");
          }
        }
        if (this._pktLen < this._len) {
          if (o >= b) {
            return;
          }
          const A = Math.min(this._len - this._pktLen, b - o);
          let h;
          if (o !== 0 || A !== b) {
            h = new Uint8Array(f.buffer, f.byteOffset + o, A);
          } else {
            h = f;
          }
          if (A === this._len) {
            this._packet = h;
          } else {
            this._packet ||= Buffer.allocUnsafe(this._len);
            this._packet.set(h, this._pktLen);
          }
          o += A;
          this._pktLen += A;
          if (this._pktLen < this._len || o >= b) {
            return;
          }
        }
        {
          const A = Math.min(16 - this._macPos, b - o);
          if (o !== 0 || A !== b) {
            this._mac.set(new Uint8Array(f.buffer, f.byteOffset + o, A), this._macPos);
          } else {
            this._mac.set(f, this._macPos);
          }
          o += A;
          this._macPos += A;
          if (this._macPos < 16) {
            return;
          }
        }
        he[0] = 0;
        M(he, this.inSeqno, 12);
        const O = p("chacha20", this._decKeyMain, he).update(Z);
        be(Ie, this._lenBuf, 4, this._packet, this._packet.length, O);
        this._calcMac.set(new Uint8Array(U.HEAPU8.buffer, Ie, 16), 0);
        if (!k(this._calcMac, this._mac)) {
          throw new Error("Invalid MAC");
        }
        he[0] = 1;
        const q = e("chacha20", this._decKeyMain, he).update(this._packet);
        const E = new v(q.buffer, q.byteOffset + 1, q.length - q[0] - 1);
        this.inSeqno = this.inSeqno + 1 >>> 0;
        this._len = 0;
        this._lenPos = 0;
        this._packet = null;
        this._pktLen = 0;
        this._macPos = 0;
        {
          const A = this._onPayload(E);
          if (A !== undefined) {
            if (A === false) {
              return o;
            } else {
              return A;
            }
          }
        }
      }
    }
  }
  class Re {
    constructor(f) {
      const o = f.inbound;
      this.inSeqno = o.seqno;
      this._onPayload = o.onPayload;
      this._instance = new re(o.decipherKey);
      this._len = 0;
      this._lenBuf = Buffer.alloc(4);
      this._lenPos = 0;
      this._packet = null;
      this._pktLen = 0;
      this._mac = Buffer.allocUnsafe(16);
      this._macPos = 0;
    }
    free() {
      this._instance.free();
    }
    decrypt(f, o, b) {
      while (o < b) {
        if (this._lenPos < 4) {
          let q = Math.min(4 - this._lenPos, b - o);
          while (q--) {
            this._lenBuf[this._lenPos++] = f[o++];
          }
          if (this._lenPos < 4) {
            return;
          }
          this._len = this._instance.decryptLen(this._lenBuf, this.inSeqno);
          if (this._len > B || this._len < 8 || (this._len & 7) !== 0) {
            throw new Error("Bad packet length");
          }
          if (o >= b) {
            return;
          }
        }
        if (this._pktLen < this._len) {
          const q = Math.min(this._len - this._pktLen, b - o);
          let E;
          if (o !== 0 || q !== b) {
            E = new Uint8Array(f.buffer, f.byteOffset + o, q);
          } else {
            E = f;
          }
          if (q === this._len) {
            this._packet = E;
          } else {
            this._packet ||= Buffer.allocUnsafe(this._len);
            this._packet.set(E, this._pktLen);
          }
          o += q;
          this._pktLen += q;
          if (this._pktLen < this._len || o >= b) {
            return;
          }
        }
        {
          const q = Math.min(16 - this._macPos, b - o);
          if (o !== 0 || q !== b) {
            this._mac.set(new Uint8Array(f.buffer, f.byteOffset + o, q), this._macPos);
          } else {
            this._mac.set(f, this._macPos);
          }
          o += q;
          this._macPos += q;
          if (this._macPos < 16) {
            return;
          }
        }
        this._instance.decrypt(this._packet, this._mac, this.inSeqno);
        const O = new v(this._packet.buffer, this._packet.byteOffset + 1, this._packet.length - this._packet[0] - 1);
        this.inSeqno = this.inSeqno + 1 >>> 0;
        this._len = 0;
        this._lenPos = 0;
        this._packet = null;
        this._pktLen = 0;
        this._macPos = 0;
        {
          const q = this._onPayload(O);
          if (q !== undefined) {
            if (q === false) {
              return o;
            } else {
              return q;
            }
          }
        }
      }
    }
  }
  class Pe {
    constructor(f) {
      const o = f.inbound;
      this.inSeqno = o.seqno;
      this._onPayload = o.onPayload;
      this._decipherInstance = null;
      this._decipherSSLName = o.decipherInfo.sslName;
      this._decipherKey = o.decipherKey;
      this._decipherIV = o.decipherIV;
      this._len = 0;
      this._lenBytes = 0;
      this._packet = null;
      this._packetPos = 0;
      this._pktLen = 0;
      this._tag = Buffer.allocUnsafe(16);
      this._tagPos = 0;
    }
    free() {}
    decrypt(f, o, b) {
      while (o < b) {
        if (this._lenBytes < 4) {
          let q = Math.min(4 - this._lenBytes, b - o);
          for (this._lenBytes += q; q--;) {
            this._len = (this._len << 8) + f[o++];
          }
          if (this._lenBytes < 4) {
            return;
          }
          if (this._len + 20 > B || this._len < 16 || (this._len & 15) !== 0) {
            throw new Error("Bad packet length");
          }
          this._decipherInstance = e(this._decipherSSLName, this._decipherKey, this._decipherIV);
          this._decipherInstance.setAutoPadding(false);
          this._decipherInstance.setAAD($e(this._len));
        }
        if (this._pktLen < this._len) {
          if (o >= b) {
            return;
          }
          const q = Math.min(this._len - this._pktLen, b - o);
          let E;
          if (o !== 0 || q !== b) {
            E = this._decipherInstance.update(new Uint8Array(f.buffer, f.byteOffset + o, q));
          } else {
            E = this._decipherInstance.update(f);
          }
          if (E.length) {
            if (q === this._len) {
              this._packet = E;
            } else {
              this._packet ||= Buffer.allocUnsafe(this._len);
              this._packet.set(E, this._packetPos);
            }
            this._packetPos += E.length;
          }
          o += q;
          this._pktLen += q;
          if (this._pktLen < this._len || o >= b) {
            return;
          }
        }
        {
          const q = Math.min(16 - this._tagPos, b - o);
          if (o !== 0 || q !== b) {
            this._tag.set(new Uint8Array(f.buffer, f.byteOffset + o, q), this._tagPos);
          } else {
            this._tag.set(f, this._tagPos);
          }
          o += q;
          this._tagPos += q;
          if (this._tagPos < 16) {
            return;
          }
        }
        {
          this._decipherInstance.setAuthTag(this._tag);
          const q = this._decipherInstance.final();
          if (q.length) {
            if (this._packet) {
              this._packet.set(q, this._packetPos);
            } else {
              this._packet = q;
            }
          }
        }
        const O = this._packet ? new v(this._packet.buffer, this._packet.byteOffset + 1, this._packet.length - this._packet[0] - 1) : I;
        this.inSeqno = this.inSeqno + 1 >>> 0;
        Be(this._decipherIV);
        this._len = 0;
        this._lenBytes = 0;
        this._packet = null;
        this._packetPos = 0;
        this._pktLen = 0;
        this._tagPos = 0;
        {
          const q = this._onPayload(O);
          if (q !== undefined) {
            if (q === false) {
              return o;
            } else {
              return q;
            }
          }
        }
      }
    }
  }
  class qe {
    constructor(f) {
      const o = f.inbound;
      this.inSeqno = o.seqno;
      this._onPayload = o.onPayload;
      this._instance = new $(o.decipherInfo.sslName, o.decipherKey, o.decipherIV);
      this._len = 0;
      this._lenBytes = 0;
      this._packet = null;
      this._pktLen = 0;
      this._tag = Buffer.allocUnsafe(16);
      this._tagPos = 0;
    }
    free() {}
    decrypt(f, o, b) {
      while (o < b) {
        if (this._lenBytes < 4) {
          let q = Math.min(4 - this._lenBytes, b - o);
          for (this._lenBytes += q; q--;) {
            this._len = (this._len << 8) + f[o++];
          }
          if (this._lenBytes < 4) {
            return;
          }
          if (this._len + 20 > B || this._len < 16 || (this._len & 15) !== 0) {
            throw new Error(`Bad packet length: ${this._len}`);
          }
        }
        if (this._pktLen < this._len) {
          if (o >= b) {
            return;
          }
          const q = Math.min(this._len - this._pktLen, b - o);
          let E;
          if (o !== 0 || q !== b) {
            E = new Uint8Array(f.buffer, f.byteOffset + o, q);
          } else {
            E = f;
          }
          if (q === this._len) {
            this._packet = E;
          } else {
            this._packet ||= Buffer.allocUnsafe(this._len);
            this._packet.set(E, this._pktLen);
          }
          o += q;
          this._pktLen += q;
          if (this._pktLen < this._len || o >= b) {
            return;
          }
        }
        {
          const q = Math.min(16 - this._tagPos, b - o);
          if (o !== 0 || q !== b) {
            this._tag.set(new Uint8Array(f.buffer, f.byteOffset + o, q), this._tagPos);
          } else {
            this._tag.set(f, this._tagPos);
          }
          o += q;
          this._tagPos += q;
          if (this._tagPos < 16) {
            return;
          }
        }
        this._instance.decrypt(this._packet, this._len, this._tag);
        const O = new v(this._packet.buffer, this._packet.byteOffset + 1, this._packet.length - this._packet[0] - 1);
        this.inSeqno = this.inSeqno + 1 >>> 0;
        this._len = 0;
        this._lenBytes = 0;
        this._packet = null;
        this._pktLen = 0;
        this._tagPos = 0;
        {
          const q = this._onPayload(O);
          if (q !== undefined) {
            if (q === false) {
              return o;
            } else {
              return q;
            }
          }
        }
      }
    }
  }
  class Je {
    constructor(f) {
      const o = f.inbound;
      this.inSeqno = o.seqno;
      this._onPayload = o.onPayload;
      this._decipherInstance = e(o.decipherInfo.sslName, o.decipherKey, o.decipherIV);
      this._decipherInstance.setAutoPadding(false);
      this._block = Buffer.allocUnsafe(o.macInfo.isETM ? 4 : o.decipherInfo.blockLen);
      this._blockSize = o.decipherInfo.blockLen;
      this._blockPos = 0;
      this._len = 0;
      this._packet = null;
      this._packetPos = 0;
      this._pktLen = 0;
      this._mac = Buffer.allocUnsafe(o.macInfo.actualLen);
      this._macPos = 0;
      this._macSSLName = o.macInfo.sslName;
      this._macKey = o.macKey;
      this._macActualLen = o.macInfo.actualLen;
      this._macETM = o.macInfo.isETM;
      this._macInstance = null;
      const b = o.decipherInfo.discardLen;
      if (b) {
        let O = n.get(b);
        if (O === undefined) {
          O = Buffer.alloc(b);
          n.set(b, O);
        }
        this._decipherInstance.update(O);
      }
    }
    free() {}
    decrypt(f, o, b) {
      while (o < b) {
        if (this._blockPos < this._block.length) {
          const E = Math.min(this._block.length - this._blockPos, b - o);
          if (o !== 0 || E !== b || E < f.length) {
            this._block.set(new Uint8Array(f.buffer, f.byteOffset + o, E), this._blockPos);
          } else {
            this._block.set(f, this._blockPos);
          }
          o += E;
          this._blockPos += E;
          if (this._blockPos < this._block.length) {
            return;
          }
          let A;
          let h;
          if (this._macETM) {
            this._len = h = m(this._block, 0);
          } else {
            A = this._decipherInstance.update(this._block);
            this._len = m(A, 0);
            h = 4 + this._len - this._blockSize;
          }
          if (this._len > B || this._len < 5 || (h & this._blockSize - 1) !== 0) {
            throw new Error("Bad packet length");
          }
          this._macInstance = r(this._macSSLName, this._macKey);
          M(Q, this.inSeqno, 0);
          this._macInstance.update(Q);
          if (this._macETM) {
            this._macInstance.update(this._block);
          } else {
            this._macInstance.update(new Uint8Array(A.buffer, A.byteOffset, 4));
            this._pktLen = A.length - 4;
            this._packetPos = this._pktLen;
            this._packet = Buffer.allocUnsafe(this._len);
            this._packet.set(new Uint8Array(A.buffer, A.byteOffset + 4, this._packetPos), 0);
          }
          if (o >= b) {
            return;
          }
        }
        if (this._pktLen < this._len) {
          const E = Math.min(this._len - this._pktLen, b - o);
          let A;
          if (o !== 0 || E !== b) {
            A = new Uint8Array(f.buffer, f.byteOffset + o, E);
          } else {
            A = f;
          }
          if (this._macETM) {
            this._macInstance.update(A);
          }
          const h = this._decipherInstance.update(A);
          if (h.length) {
            if (E === this._len) {
              this._packet = h;
            } else {
              this._packet ||= Buffer.allocUnsafe(this._len);
              this._packet.set(h, this._packetPos);
            }
            this._packetPos += h.length;
          }
          o += E;
          this._pktLen += E;
          if (this._pktLen < this._len || o >= b) {
            return;
          }
        }
        {
          const E = Math.min(this._macActualLen - this._macPos, b - o);
          if (o !== 0 || E !== b) {
            this._mac.set(new Uint8Array(f.buffer, f.byteOffset + o, E), this._macPos);
          } else {
            this._mac.set(f, this._macPos);
          }
          o += E;
          this._macPos += E;
          if (this._macPos < this._macActualLen) {
            return;
          }
        }
        if (!this._macETM) {
          this._macInstance.update(this._packet);
        }
        let O = this._macInstance.digest();
        if (this._macActualLen < O.length) {
          O = new Uint8Array(O.buffer, O.byteOffset, this._macActualLen);
        }
        if (!de(O, this._mac)) {
          throw new Error("Invalid MAC");
        }
        const q = new v(this._packet.buffer, this._packet.byteOffset + 1, this._packet.length - this._packet[0] - 1);
        this.inSeqno = this.inSeqno + 1 >>> 0;
        this._blockPos = 0;
        this._len = 0;
        this._packet = null;
        this._packetPos = 0;
        this._pktLen = 0;
        this._macPos = 0;
        this._macInstance = null;
        {
          const E = this._onPayload(q);
          if (E !== undefined) {
            if (E === false) {
              return o;
            } else {
              return E;
            }
          }
        }
      }
    }
  }
  class Oe {
    constructor(f) {
      const o = f.inbound;
      this.inSeqno = o.seqno;
      this._onPayload = o.onPayload;
      this._instance = new Y(o.decipherInfo.sslName, o.decipherKey, o.decipherIV, o.macInfo.sslName, o.macKey, o.macInfo.isETM, o.macInfo.actualLen);
      this._block = Buffer.allocUnsafe(o.macInfo.isETM || o.decipherInfo.stream ? 4 : o.decipherInfo.blockLen);
      this._blockPos = 0;
      this._len = 0;
      this._packet = null;
      this._pktLen = 0;
      this._mac = Buffer.allocUnsafe(o.macInfo.actualLen);
      this._macPos = 0;
      this._macActualLen = o.macInfo.actualLen;
      this._macETM = o.macInfo.isETM;
    }
    free() {
      this._instance.free();
    }
    decrypt(f, o, b) {
      while (o < b) {
        if (this._blockPos < this._block.length) {
          const q = Math.min(this._block.length - this._blockPos, b - o);
          if (o !== 0 || q !== b || q < f.length) {
            this._block.set(new Uint8Array(f.buffer, f.byteOffset + o, q), this._blockPos);
          } else {
            this._block.set(f, this._blockPos);
          }
          o += q;
          this._blockPos += q;
          if (this._blockPos < this._block.length) {
            return;
          }
          let E;
          if (this._macETM) {
            this._len = E = m(this._block, 0);
          } else {
            this._instance.decryptBlock(this._block);
            this._len = m(this._block, 0);
            E = 4 + this._len - this._block.length;
          }
          if (this._len > B || this._len < 5 || (E & this._block.length - 1) !== 0) {
            throw new Error("Bad packet length");
          }
          if (!this._macETM) {
            this._pktLen = this._block.length - 4;
            if (this._pktLen) {
              this._packet = Buffer.allocUnsafe(this._len);
              this._packet.set(new Uint8Array(this._block.buffer, this._block.byteOffset + 4, this._pktLen), 0);
            }
          }
          if (o >= b) {
            return;
          }
        }
        if (this._pktLen < this._len) {
          const q = Math.min(this._len - this._pktLen, b - o);
          let E;
          if (o !== 0 || q !== b) {
            E = new Uint8Array(f.buffer, f.byteOffset + o, q);
          } else {
            E = f;
          }
          if (q === this._len) {
            this._packet = E;
          } else {
            this._packet ||= Buffer.allocUnsafe(this._len);
            this._packet.set(E, this._pktLen);
          }
          o += q;
          this._pktLen += q;
          if (this._pktLen < this._len || o >= b) {
            return;
          }
        }
        {
          const q = Math.min(this._macActualLen - this._macPos, b - o);
          if (o !== 0 || q !== b) {
            this._mac.set(new Uint8Array(f.buffer, f.byteOffset + o, q), this._macPos);
          } else {
            this._mac.set(f, this._macPos);
          }
          o += q;
          this._macPos += q;
          if (this._macPos < this._macActualLen) {
            return;
          }
        }
        this._instance.decrypt(this._packet, this.inSeqno, this._block, this._mac);
        const O = new v(this._packet.buffer, this._packet.byteOffset + 1, this._packet.length - this._packet[0] - 1);
        this.inSeqno = this.inSeqno + 1 >>> 0;
        this._blockPos = 0;
        this._len = 0;
        this._packet = null;
        this._pktLen = 0;
        this._macPos = 0;
        this._macInstance = null;
        {
          const q = this._onPayload(O);
          if (q !== undefined) {
            if (q === false) {
              return o;
            } else {
              return q;
            }
          }
        }
      }
    }
  }
  function Be(g) {
    if (++g[11] >>> 8 && ++g[10] >>> 8 && ++g[9] >>> 8 && ++g[8] >>> 8 && ++g[7] >>> 8 && ++g[6] >>> 8 && ++g[5] >>> 8) {
      ++g[4] >>> 8;
    }
  }
  const $e = (() => {
    const g = Buffer.alloc(4);
    return f => {
      g[0] = f >>> 24;
      g[1] = f >>> 16;
      g[2] = f >>> 8;
      g[3] = f;
      return g;
    };
  })();
  function de(g, f) {
    if (g.length !== f.length) {
      k(g, g);
      return false;
    } else {
      return k(g, f);
    }
  }
  function P(g) {
    if (typeof g != "object" || g === null) {
      throw new Error("Invalid config");
    }
    if (typeof g.outbound != "object" || g.outbound === null) {
      throw new Error("Invalid outbound");
    }
    const f = g.outbound;
    if (typeof f.onWrite != "function") {
      throw new Error("Invalid outbound.onWrite");
    }
    if (typeof f.cipherInfo != "object" || f.cipherInfo === null) {
      throw new Error("Invalid outbound.cipherInfo");
    }
    if (!Buffer.isBuffer(f.cipherKey) || f.cipherKey.length !== f.cipherInfo.keyLen) {
      throw new Error("Invalid outbound.cipherKey");
    }
    if (f.cipherInfo.ivLen && (!Buffer.isBuffer(f.cipherIV) || f.cipherIV.length !== f.cipherInfo.ivLen)) {
      throw new Error("Invalid outbound.cipherIV");
    }
    if (typeof f.seqno != "number" || f.seqno < 0 || f.seqno > R) {
      throw new Error("Invalid outbound.seqno");
    }
    const o = !!f.forceNative;
    switch (f.cipherInfo.sslName) {
      case "aes-128-gcm":
      case "aes-256-gcm":
        if (w && !o) {
          return new Ue(g);
        } else {
          return new Ne(g);
        }
      case "chacha20":
        if (X && !o) {
          return new Me(g);
        } else {
          return new we(g);
        }
      default:
        {
          if (typeof f.macInfo != "object" || f.macInfo === null) {
            throw new Error("Invalid outbound.macInfo");
          }
          if (!Buffer.isBuffer(f.macKey) || f.macKey.length !== f.macInfo.len) {
            throw new Error("Invalid outbound.macKey");
          }
          if (K && !o) {
            return new Qe(g);
          } else {
            return new Le(g);
          }
        }
    }
  }
  function W(g) {
    if (typeof g != "object" || g === null) {
      throw new Error("Invalid config");
    }
    if (typeof g.inbound != "object" || g.inbound === null) {
      throw new Error("Invalid inbound");
    }
    const f = g.inbound;
    if (typeof f.onPayload != "function") {
      throw new Error("Invalid inbound.onPayload");
    }
    if (typeof f.decipherInfo != "object" || f.decipherInfo === null) {
      throw new Error("Invalid inbound.decipherInfo");
    }
    if (!Buffer.isBuffer(f.decipherKey) || f.decipherKey.length !== f.decipherInfo.keyLen) {
      throw new Error("Invalid inbound.decipherKey");
    }
    if (f.decipherInfo.ivLen && (!Buffer.isBuffer(f.decipherIV) || f.decipherIV.length !== f.decipherInfo.ivLen)) {
      throw new Error("Invalid inbound.decipherIV");
    }
    if (typeof f.seqno != "number" || f.seqno < 0 || f.seqno > R) {
      throw new Error("Invalid inbound.seqno");
    }
    const o = !!f.forceNative;
    switch (f.decipherInfo.sslName) {
      case "aes-128-gcm":
      case "aes-256-gcm":
        if ($ && !o) {
          return new qe(g);
        } else {
          return new Pe(g);
        }
      case "chacha20":
        if (re && !o) {
          return new Re(g);
        } else {
          return new Ke(g);
        }
      default:
        {
          if (typeof f.macInfo != "object" || f.macInfo === null) {
            throw new Error("Invalid inbound.macInfo");
          }
          if (!Buffer.isBuffer(f.macKey) || f.macKey.length !== f.macInfo.len) {
            throw new Error("Invalid inbound.macKey");
          }
          if (Y && !o) {
            return new Oe(g);
          } else {
            return new Je(g);
          }
        }
    }
  }
  Fn = {
    CIPHER_INFO: V,
    MAC_INFO: F,
    bindingAvailable: !!C,
    init: new Promise(async (g, f) => {
      try {
        U = await Es()();
        Ie = U._malloc(16);
        be = U.cwrap("poly1305_auth", null, ["number", "array", "number", "array", "number", "array"]);
      } catch (o) {
        return f(o);
      }
      g();
    }),
    NullCipher: oe,
    createCipher: P,
    NullDecipher: Xe,
    createDecipher: W
  };
  return Fn;
}
var $n;
var Mr;
function nn() {
  if (Mr) {
    return $n;
  }
  Mr = 1;
  const {
    createDecipheriv: p,
    createECDH: e,
    createHash: r,
    createHmac: y,
    createSign: k,
    createVerify: m,
    getCiphers: M,
    sign: v,
    verify: R
  } = en;
  const I = M();
  const {
    Ber: Q
  } = In();
  const n = Ti().pbkdf;
  const {
    CIPHER_INFO: B
  } = tn();
  const {
    eddsaSupported: C,
    SUPPORTED_CIPHER: w
  } = jt();
  const {
    bufferSlice: X,
    makeBufferParser: K,
    readString: $,
    readUInt32BE: re,
    writeUInt32BE: Y
  } = Kt();
  const J = Symbol("Hash Algorithm");
  const V = Symbol("Private key PEM");
  const F = Symbol("Public key PEM");
  const oe = Symbol("Public key SSH");
  const Z = Symbol("Decrypted Key");
  const he = Object.create(null);
  {
    const E = Object.keys(B);
    for (let A = 0; A < E.length; ++A) {
      const h = B[E[A]].sslName;
      if (!!h && !he[h]) {
        he[h] = B[E[A]];
      }
    }
  }
  const U = K();
  function Ie(E, A) {
    A = A.base64Slice(0, A.length);
    let h = A.replace(/.{64}/g, `$&
`);
    if (A.length & 63) {
      h += `
`;
    }
    return `-----BEGIN ${E} KEY-----
${h}-----END ${E} KEY-----`;
  }
  function be(E, A) {
    const h = Buffer.allocUnsafe(E.length + A.length);
    h.set(E, 0);
    h.set(A, E.length);
    return h;
  }
  function we(E, A) {
    const h = E.length;
    let S = E._pos || 0;
    for (let L = 0; L < A; ++L) {
      const j = h - S;
      if (S >= h || j < 4) {
        return false;
      }
      const se = re(E, S);
      if (j < 4 + se) {
        return false;
      }
      S += 4 + se;
    }
    E._pos = S;
    return true;
  }
  function Me(E, A) {
    const h = new Q.Writer();
    h.startSequence();
    h.startSequence();
    h.writeOID("1.2.840.113549.1.1.1");
    h.writeNull();
    h.endSequence();
    h.startSequence(Q.BitString);
    h.writeByte(0);
    h.startSequence();
    h.writeBuffer(E, Q.Integer);
    h.writeBuffer(A, Q.Integer);
    h.endSequence();
    h.endSequence();
    h.endSequence();
    return Ie("PUBLIC", h.buffer);
  }
  function Ne(E, A) {
    const h = Buffer.allocUnsafe(15 + A.length + 4 + E.length);
    Y(h, 7, 0);
    h.utf8Write("ssh-rsa", 4, 7);
    let S = 11;
    Y(h, A.length, S);
    h.set(A, S += 4);
    Y(h, E.length, S += A.length);
    h.set(E, S + 4);
    return h;
  }
  const Ue = (() => {
    function E(S, L, j, se, le, _e, d, c) {
      const t = new Q.Writer();
      t.startSequence();
      t.writeInt(0, Q.Integer);
      t.writeBuffer(S, Q.Integer);
      t.writeBuffer(L, Q.Integer);
      t.writeBuffer(j, Q.Integer);
      t.writeBuffer(se, Q.Integer);
      t.writeBuffer(le, Q.Integer);
      t.writeBuffer(_e, Q.Integer);
      t.writeBuffer(d, Q.Integer);
      t.writeBuffer(c, Q.Integer);
      t.endSequence();
      return t.buffer;
    }
    function A(S) {
      return BigInt(`0x${S.hexSlice(0, S.length)}`);
    }
    function h(S) {
      let L = S.toString(16);
      if ((L.length & 1) !== 0) {
        L = `0${L}`;
      } else {
        const j = L.charCodeAt(0);
        if (j === 56 || j === 57 || j >= 97 && j <= 102) {
          L = `00${L}`;
        }
      }
      return Buffer.from(L, "hex");
    }
    return function (L, j, se, le, _e, d) {
      const c = A(se);
      const t = h(c % (A(_e) - 1n));
      const s = h(c % (A(d) - 1n));
      return Ie("RSA PRIVATE", E(L, j, se, _e, d, t, s, le));
    };
  })();
  function Le(E, A, h, S) {
    const L = new Q.Writer();
    L.startSequence();
    L.startSequence();
    L.writeOID("1.2.840.10040.4.1");
    L.startSequence();
    L.writeBuffer(E, Q.Integer);
    L.writeBuffer(A, Q.Integer);
    L.writeBuffer(h, Q.Integer);
    L.endSequence();
    L.endSequence();
    L.startSequence(Q.BitString);
    L.writeByte(0);
    L.writeBuffer(S, Q.Integer);
    L.endSequence();
    L.endSequence();
    return Ie("PUBLIC", L.buffer);
  }
  function Qe(E, A, h, S) {
    const L = Buffer.allocUnsafe(15 + E.length + 4 + A.length + 4 + h.length + 4 + S.length);
    Y(L, 7, 0);
    L.utf8Write("ssh-dss", 4, 7);
    let j = 11;
    Y(L, E.length, j);
    L.set(E, j += 4);
    Y(L, A.length, j += E.length);
    L.set(A, j += 4);
    Y(L, h.length, j += A.length);
    L.set(h, j += 4);
    Y(L, S.length, j += h.length);
    L.set(S, j + 4);
    return L;
  }
  function Xe(E, A, h, S, L) {
    const j = new Q.Writer();
    j.startSequence();
    j.writeInt(0, Q.Integer);
    j.writeBuffer(E, Q.Integer);
    j.writeBuffer(A, Q.Integer);
    j.writeBuffer(h, Q.Integer);
    j.writeBuffer(S, Q.Integer);
    j.writeBuffer(L, Q.Integer);
    j.endSequence();
    return Ie("DSA PRIVATE", j.buffer);
  }
  function Ke(E) {
    const A = new Q.Writer();
    A.startSequence();
    A.startSequence();
    A.writeOID("1.3.101.112");
    A.endSequence();
    A.startSequence(Q.BitString);
    A.writeByte(0);
    A._ensure(E.length);
    A._buf.set(E, A._offset);
    A._offset += E.length;
    A.endSequence();
    A.endSequence();
    return Ie("PUBLIC", A.buffer);
  }
  function Re(E) {
    const A = Buffer.allocUnsafe(19 + E.length);
    Y(A, 11, 0);
    A.utf8Write("ssh-ed25519", 4, 11);
    Y(A, E.length, 15);
    A.set(E, 19);
    return A;
  }
  function Pe(E) {
    const A = new Q.Writer();
    A.startSequence();
    A.writeInt(0, Q.Integer);
    A.startSequence();
    A.writeOID("1.3.101.112");
    A.endSequence();
    A.startSequence(Q.OctetString);
    A.writeBuffer(E, Q.OctetString);
    A.endSequence();
    A.endSequence();
    return Ie("PRIVATE", A.buffer);
  }
  function qe(E, A) {
    const h = new Q.Writer();
    h.startSequence();
    h.startSequence();
    h.writeOID("1.2.840.10045.2.1");
    h.writeOID(E);
    h.endSequence();
    h.startSequence(Q.BitString);
    h.writeByte(0);
    h._ensure(A.length);
    h._buf.set(A, h._offset);
    h._offset += A.length;
    h.endSequence();
    h.endSequence();
    return Ie("PUBLIC", h.buffer);
  }
  function Je(E, A) {
    let h;
    switch (E) {
      case "1.2.840.10045.3.1.7":
        h = "nistp256";
        break;
      case "1.3.132.0.34":
        h = "nistp384";
        break;
      case "1.3.132.0.35":
        h = "nistp521";
        break;
      default:
        return;
    }
    const S = Buffer.allocUnsafe(39 + A.length);
    Y(S, 19, 0);
    S.utf8Write(`ecdsa-sha2-${h}`, 4, 19);
    Y(S, 8, 23);
    S.utf8Write(h, 27, 8);
    Y(S, A.length, 35);
    S.set(A, 39);
    return S;
  }
  function Oe(E, A, h) {
    const S = new Q.Writer();
    S.startSequence();
    S.writeInt(1, Q.Integer);
    S.writeBuffer(h, Q.OctetString);
    S.startSequence(160);
    S.writeOID(E);
    S.endSequence();
    S.startSequence(161);
    S.startSequence(Q.BitString);
    S.writeByte(0);
    S._ensure(A.length);
    S._buf.set(A, S._offset);
    S._offset += A.length;
    S.endSequence();
    S.endSequence();
    S.endSequence();
    return Ie("EC PRIVATE", S.buffer);
  }
  function Be(E, A) {
    const h = e(E);
    h.setPrivateKey(A);
    return h.getPublicKey();
  }
  const $e = {
    sign: typeof v == "function" ? function (A, h) {
      const S = this[V];
      if (S === null) {
        return new Error("No private key available");
      }
      if (!h || typeof h != "string") {
        h = this[J];
      }
      try {
        return v(h, A, S);
      } catch (L) {
        return L;
      }
    } : function (A, h) {
      const S = this[V];
      if (S === null) {
        return new Error("No private key available");
      }
      if (!h || typeof h != "string") {
        h = this[J];
      }
      const L = k(h);
      L.update(A);
      try {
        return L.sign(S);
      } catch (j) {
        return j;
      }
    },
    verify: typeof R == "function" ? function (A, h, S) {
      const L = this[F];
      if (L === null) {
        return new Error("No public key available");
      }
      if (!S || typeof S != "string") {
        S = this[J];
      }
      try {
        return R(S, A, L, h);
      } catch (j) {
        return j;
      }
    } : function (A, h, S) {
      const L = this[F];
      if (L === null) {
        return new Error("No public key available");
      }
      if (!S || typeof S != "string") {
        S = this[J];
      }
      const j = m(S);
      j.update(A);
      try {
        return j.verify(L, h);
      } catch (se) {
        return se;
      }
    },
    isPrivateKey: function () {
      return this[V] !== null;
    },
    getPrivatePEM: function () {
      return this[V];
    },
    getPublicPEM: function () {
      return this[F];
    },
    getPublicSSH: function () {
      return this[oe];
    },
    equals: function (A) {
      const h = q(A);
      if (h instanceof Error) {
        return false;
      } else {
        return this.type === h.type && this[V] === h[V] && this[F] === h[F] && this[oe].equals(h[oe]);
      }
    }
  };
  function de(E, A, h, S, L, j, se) {
    this.type = E;
    this.comment = A;
    this[V] = h;
    this[F] = S;
    this[oe] = L;
    this[J] = j;
    this[Z] = se;
  }
  de.prototype = $e;
  {
    let A = function (h, S, L) {
      const j = [];
      if (h.length < 8) {
        return new Error("Malformed OpenSSH private key");
      }
      const se = re(h, 0);
      const le = re(h, 4);
      if (se !== le) {
        if (L) {
          return new Error("OpenSSH key integrity check failed -- bad passphrase?");
        } else {
          return new Error("OpenSSH key integrity check failed");
        }
      }
      h._pos = 8;
      let _e;
      let d;
      for (_e = 0; _e < S; ++_e) {
        let t;
        let s;
        let a;
        let l;
        const u = $(h, h._pos, true);
        if (u === undefined) {
          return new Error("Malformed OpenSSH private key");
        }
        switch (u) {
          case "ssh-rsa":
            {
              const D = $(h, h._pos);
              if (D === undefined) {
                return new Error("Malformed OpenSSH private key");
              }
              const G = $(h, h._pos);
              if (G === undefined) {
                return new Error("Malformed OpenSSH private key");
              }
              const ie = $(h, h._pos);
              if (ie === undefined) {
                return new Error("Malformed OpenSSH private key");
              }
              const ue = $(h, h._pos);
              if (ue === undefined) {
                return new Error("Malformed OpenSSH private key");
              }
              const pe = $(h, h._pos);
              if (pe === undefined) {
                return new Error("Malformed OpenSSH private key");
              }
              const Te = $(h, h._pos);
              if (Te === undefined) {
                return new Error("Malformed OpenSSH private key");
              }
              a = Me(D, G);
              l = Ne(D, G);
              s = Ue(D, G, ie, ue, pe, Te);
              t = "sha1";
              break;
            }
          case "ssh-dss":
            {
              const D = $(h, h._pos);
              if (D === undefined) {
                return new Error("Malformed OpenSSH private key");
              }
              const G = $(h, h._pos);
              if (G === undefined) {
                return new Error("Malformed OpenSSH private key");
              }
              const ie = $(h, h._pos);
              if (ie === undefined) {
                return new Error("Malformed OpenSSH private key");
              }
              const ue = $(h, h._pos);
              if (ue === undefined) {
                return new Error("Malformed OpenSSH private key");
              }
              const pe = $(h, h._pos);
              if (pe === undefined) {
                return new Error("Malformed OpenSSH private key");
              }
              a = Le(D, G, ie, ue);
              l = Qe(D, G, ie, ue);
              s = Xe(D, G, ie, ue, pe);
              t = "sha1";
              break;
            }
          case "ssh-ed25519":
            {
              if (!C) {
                return new Error(`Unsupported OpenSSH private key type: ${u}`);
              }
              const D = $(h, h._pos);
              if (D === undefined || D.length !== 32) {
                return new Error("Malformed OpenSSH private key");
              }
              const G = $(h, h._pos);
              if (G === undefined || G.length !== 64) {
                return new Error("Malformed OpenSSH private key");
              }
              a = Ke(D);
              l = Re(D);
              s = Pe(X(G, 0, 32));
              t = null;
              break;
            }
          case "ecdsa-sha2-nistp256":
            t = "sha256";
            d = "1.2.840.10045.3.1.7";
          case "ecdsa-sha2-nistp384":
            if (t === undefined) {
              t = "sha384";
              d = "1.3.132.0.34";
            }
          case "ecdsa-sha2-nistp521":
            {
              if (t === undefined) {
                t = "sha512";
                d = "1.3.132.0.35";
              }
              if (!we(h, 1)) {
                return new Error("Malformed OpenSSH private key");
              }
              const D = $(h, h._pos);
              if (D === undefined) {
                return new Error("Malformed OpenSSH private key");
              }
              const G = $(h, h._pos);
              if (G === undefined) {
                return new Error("Malformed OpenSSH private key");
              }
              a = qe(d, D);
              l = Je(d, D);
              s = Oe(d, D, G);
              break;
            }
          default:
            return new Error(`Unsupported OpenSSH private key type: ${u}`);
        }
        const x = $(h, h._pos, true);
        if (x === undefined) {
          return new Error("Malformed OpenSSH private key");
        }
        j.push(new de(u, x, s, a, l, t, L));
      }
      let c = 0;
      for (_e = h._pos; _e < h.length; ++_e) {
        if (h[_e] !== ++c % 255) {
          return new Error("Malformed OpenSSH private key");
        }
      }
      return j;
    };
    const E = /^-----BEGIN OPENSSH PRIVATE KEY-----(?:\r\n|\n)([\s\S]+)(?:\r\n|\n)-----END OPENSSH PRIVATE KEY-----$/;
    de.parse = (h, S) => {
      const L = E.exec(h);
      if (L === null) {
        return null;
      }
      let j;
      const se = Buffer.from(L[1], "base64");
      if (se.length < 31) {
        return new Error("Malformed OpenSSH private key");
      }
      const le = se.utf8Slice(0, 15);
      if (le !== "openssh-key-v1\0") {
        return new Error(`Unsupported OpenSSH key magic: ${le}`);
      }
      const _e = $(se, 15, true);
      if (_e === undefined) {
        return new Error("Malformed OpenSSH private key");
      }
      if (_e !== "none" && w.indexOf(_e) === -1) {
        return new Error(`Unsupported cipher for OpenSSH key: ${_e}`);
      }
      const d = $(se, se._pos, true);
      if (d === undefined) {
        return new Error("Malformed OpenSSH private key");
      }
      if (d !== "none") {
        if (_e === "none") {
          return new Error("Malformed OpenSSH private key");
        }
        if (d !== "bcrypt") {
          return new Error(`Unsupported kdf name for OpenSSH key: ${d}`);
        }
        if (!S) {
          return new Error("Encrypted private OpenSSH key detected, but no passphrase given");
        }
      } else if (_e !== "none") {
        return new Error("Malformed OpenSSH private key");
      }
      let c;
      let t;
      let s;
      if (_e !== "none") {
        c = B[_e];
      }
      const a = $(se, se._pos);
      if (a === undefined) {
        return new Error("Malformed OpenSSH private key");
      }
      if (a.length) {
        switch (d) {
          case "none":
            return new Error("Malformed OpenSSH private key");
          case "bcrypt":
            {
              const u = $(a, 0);
              if (u === undefined || a._pos + 4 > a.length) {
                return new Error("Malformed OpenSSH private key");
              }
              const x = re(a, a._pos);
              const D = Buffer.allocUnsafe(c.keyLen + c.ivLen);
              if (n(S, S.length, u, u.length, D, D.length, x) !== 0) {
                return new Error("Failed to generate information to decrypt key");
              }
              t = X(D, 0, c.keyLen);
              s = X(D, c.keyLen, D.length);
              break;
            }
        }
      } else if (d !== "none") {
        return new Error("Malformed OpenSSH private key");
      }
      if (se._pos + 3 >= se.length) {
        return new Error("Malformed OpenSSH private key");
      }
      const l = re(se, se._pos);
      se._pos += 4;
      if (l > 0) {
        for (let x = 0; x < l; ++x) {
          const D = $(se, se._pos);
          if (D === undefined) {
            return new Error("Malformed OpenSSH private key");
          }
          if ($(D, 0, true) === undefined) {
            return new Error("Malformed OpenSSH private key");
          }
        }
        let u = $(se, se._pos);
        if (u === undefined) {
          return new Error("Malformed OpenSSH private key");
        }
        if (t !== undefined) {
          if (u.length < c.blockLen || u.length % c.blockLen !== 0) {
            return new Error("Malformed OpenSSH private key");
          }
          try {
            const x = {
              authTagLength: c.authLen
            };
            const D = p(c.sslName, t, s, x);
            D.setAutoPadding(false);
            if (c.authLen > 0) {
              if (se.length - se._pos < c.authLen) {
                return new Error("Malformed OpenSSH private key");
              }
              D.setAuthTag(X(se, se._pos, se._pos += c.authLen));
            }
            u = be(D.update(u), D.final());
          } catch (x) {
            return x;
          }
        }
        if (se._pos !== se.length) {
          return new Error("Malformed OpenSSH private key");
        }
        j = A(u, l, t !== undefined);
      } else {
        j = [];
      }
      if (j instanceof Error) {
        return j;
      } else {
        return j[0];
      }
    };
  }
  function P(E, A, h, S, L, j, se) {
    this.type = E;
    this.comment = A;
    this[V] = h;
    this[F] = S;
    this[oe] = L;
    this[J] = j;
    this[Z] = se;
  }
  P.prototype = $e;
  {
    const E = /^-----BEGIN (RSA|DSA|EC) PRIVATE KEY-----(?:\r\n|\n)((?:[^:]+:\s*[\S].*(?:\r\n|\n))*)([\s\S]+)(?:\r\n|\n)-----END (RSA|DSA|EC) PRIVATE KEY-----$/;
    P.parse = (A, h) => {
      const S = E.exec(A);
      if (S === null) {
        return null;
      }
      let L = Buffer.from(S[3], "base64");
      let j = S[2];
      let se = false;
      if (j !== undefined) {
        j = j.split(/\r\n|\n/g);
        for (let l = 0; l < j.length; ++l) {
          const u = j[l];
          let x = u.indexOf(":");
          if (u.slice(0, x) === "DEK-Info") {
            const D = u.slice(x + 2);
            x = D.indexOf(",");
            if (x === -1) {
              continue;
            }
            const G = D.slice(0, x).toLowerCase();
            if (I.indexOf(G) === -1) {
              return new Error(`Cipher (${G}) not supported for encrypted OpenSSH private key`);
            }
            const ie = he[G];
            if (!ie) {
              return new Error(`Cipher (${G}) not supported for encrypted OpenSSH private key`);
            }
            const ue = Buffer.from(D.slice(x + 1), "hex");
            if (ue.length !== ie.ivLen) {
              return new Error("Malformed encrypted OpenSSH private key");
            }
            if (!h) {
              return new Error("Encrypted OpenSSH private key detected, but no passphrase given");
            }
            const pe = X(ue, 0, 8);
            let Te = r("md5").update(h).update(pe).digest();
            while (Te.length < ie.keyLen) {
              Te = be(Te, r("md5").update(Te).update(h).update(pe).digest());
            }
            if (Te.length > ie.keyLen) {
              Te = X(Te, 0, ie.keyLen);
            }
            try {
              const He = p(G, Te, ue);
              He.setAutoPadding(false);
              L = be(He.update(L), He.final());
              se = true;
            } catch (He) {
              return He;
            }
          }
        }
      }
      let le;
      let _e;
      let d;
      let c;
      let t;
      let s;
      let a = "Malformed OpenSSH private key";
      if (se) {
        a += ". Bad passphrase?";
      }
      switch (S[1]) {
        case "RSA":
          le = "ssh-rsa";
          _e = Ie("RSA PRIVATE", L);
          try {
            s = new Q.Reader(L);
            s.readSequence();
            s.readInt();
            const l = s.readString(Q.Integer, true);
            if (l === null) {
              return new Error(a);
            }
            const u = s.readString(Q.Integer, true);
            if (u === null) {
              return new Error(a);
            }
            d = Me(l, u);
            c = Ne(l, u);
          } catch {
            return new Error(a);
          }
          t = "sha1";
          break;
        case "DSA":
          le = "ssh-dss";
          _e = Ie("DSA PRIVATE", L);
          try {
            s = new Q.Reader(L);
            s.readSequence();
            s.readInt();
            const l = s.readString(Q.Integer, true);
            if (l === null) {
              return new Error(a);
            }
            const u = s.readString(Q.Integer, true);
            if (u === null) {
              return new Error(a);
            }
            const x = s.readString(Q.Integer, true);
            if (x === null) {
              return new Error(a);
            }
            const D = s.readString(Q.Integer, true);
            if (D === null) {
              return new Error(a);
            }
            d = Le(l, u, x, D);
            c = Qe(l, u, x, D);
          } catch {
            return new Error(a);
          }
          t = "sha1";
          break;
        case "EC":
          {
            let l;
            let u;
            let x;
            try {
              s = new Q.Reader(L);
              s.readSequence();
              s.readInt();
              u = s.readString(Q.OctetString, true);
              s.readByte();
              const G = s.readLength();
              if (G !== null) {
                s._offset = G;
                x = s.readOID();
                if (x === null) {
                  return new Error(a);
                }
                switch (x) {
                  case "1.2.840.10045.3.1.7":
                    l = "prime256v1";
                    le = "ecdsa-sha2-nistp256";
                    t = "sha256";
                    break;
                  case "1.3.132.0.34":
                    l = "secp384r1";
                    le = "ecdsa-sha2-nistp384";
                    t = "sha384";
                    break;
                  case "1.3.132.0.35":
                    l = "secp521r1";
                    le = "ecdsa-sha2-nistp521";
                    t = "sha512";
                    break;
                  default:
                    return new Error(`Unsupported private key EC OID: ${x}`);
                }
              } else {
                return new Error(a);
              }
            } catch {
              return new Error(a);
            }
            _e = Ie("EC PRIVATE", L);
            const D = Be(l, u);
            d = qe(x, D);
            c = Je(x, D);
            break;
          }
      }
      return new P(le, "", _e, d, c, t, se);
    };
  }
  function W(E, A, h, S, L, j, se) {
    this.type = E;
    this.comment = A;
    this[V] = h;
    this[F] = S;
    this[oe] = L;
    this[J] = j;
    this[Z] = se;
  }
  W.prototype = $e;
  {
    const E = Buffer.alloc(0);
    const A = Buffer.from([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const h = Buffer.from([0, 0, 0, 0]);
    const S = Buffer.from([0, 0, 0, 1]);
    const L = /^PuTTY-User-Key-File-2: (ssh-(?:rsa|dss))\r?\nEncryption: (aes256-cbc|none)\r?\nComment: ([^\r\n]*)\r?\nPublic-Lines: \d+\r?\n([\s\S]+?)\r?\nPrivate-Lines: \d+\r?\n([\s\S]+?)\r?\nPrivate-MAC: ([^\r\n]+)/;
    W.parse = (j, se) => {
      const le = L.exec(j);
      if (le === null) {
        return null;
      }
      const _e = le[2];
      const d = _e !== "none";
      if (d && !se) {
        return new Error("Encrypted PPK private key detected, but no passphrase given");
      }
      let c = Buffer.from(le[5], "base64");
      if (d) {
        const nt = B[_e];
        let st = be(r("sha1").update(h).update(se).digest(), r("sha1").update(S).update(se).digest());
        if (st.length > nt.keyLen) {
          st = X(st, 0, nt.keyLen);
        }
        try {
          const rt = p(nt.sslName, st, A);
          rt.setAutoPadding(false);
          c = be(rt.update(c), rt.final());
        } catch (rt) {
          return rt;
        }
      }
      const t = le[1];
      const s = le[3];
      const a = Buffer.from(le[4], "base64");
      const l = le[6];
      const u = t.length;
      const x = _e.length;
      const D = Buffer.byteLength(s);
      const G = a.length;
      const ie = c.length;
      const ue = Buffer.allocUnsafe(4 + u + 4 + x + 4 + D + 4 + G + 4 + ie);
      let pe = 0;
      Y(ue, u, pe);
      ue.utf8Write(t, pe += 4, u);
      Y(ue, x, pe += u);
      ue.utf8Write(_e, pe += 4, x);
      Y(ue, D, pe += x);
      ue.utf8Write(s, pe += 4, D);
      Y(ue, G, pe += D);
      ue.set(a, pe += 4);
      Y(ue, ie, pe += G);
      ue.set(c, pe + 4);
      se ||= E;
      if (y("sha1", r("sha1").update("putty-private-key-file-mac-key").update(se).digest()).update(ue).digest("hex") !== l) {
        if (d) {
          return new Error("PPK private key integrity check failed -- bad passphrase?");
        } else {
          return new Error("PPK private key integrity check failed");
        }
      }
      let He;
      let ve;
      let Ze;
      a._pos = 0;
      we(a, 1);
      switch (t) {
        case "ssh-rsa":
          {
            const nt = $(a, a._pos);
            if (nt === undefined) {
              return new Error("Malformed PPK public key");
            }
            const st = $(a, a._pos);
            if (st === undefined) {
              return new Error("Malformed PPK public key");
            }
            const rt = $(c, 0);
            if (rt === undefined) {
              return new Error("Malformed PPK private key");
            }
            const yt = $(c, c._pos);
            if (yt === undefined) {
              return new Error("Malformed PPK private key");
            }
            const wt = $(c, c._pos);
            if (wt === undefined) {
              return new Error("Malformed PPK private key");
            }
            const kt = $(c, c._pos);
            if (kt === undefined) {
              return new Error("Malformed PPK private key");
            }
            He = Me(st, nt);
            ve = Ne(st, nt);
            Ze = Ue(st, nt, rt, kt, yt, wt);
            break;
          }
        case "ssh-dss":
          {
            const nt = $(a, a._pos);
            if (nt === undefined) {
              return new Error("Malformed PPK public key");
            }
            const st = $(a, a._pos);
            if (st === undefined) {
              return new Error("Malformed PPK public key");
            }
            const rt = $(a, a._pos);
            if (rt === undefined) {
              return new Error("Malformed PPK public key");
            }
            const yt = $(a, a._pos);
            if (yt === undefined) {
              return new Error("Malformed PPK public key");
            }
            const wt = $(c, 0);
            if (wt === undefined) {
              return new Error("Malformed PPK private key");
            }
            He = Le(nt, st, rt, yt);
            ve = Qe(nt, st, rt, yt);
            Ze = Xe(nt, st, rt, yt, wt);
            break;
          }
      }
      return new W(t, s, Ze, He, ve, "sha1", d);
    };
  }
  function g(E, A, h, S, L) {
    this.type = E;
    this.comment = A;
    this[V] = null;
    this[F] = h;
    this[oe] = S;
    this[J] = L;
    this[Z] = false;
  }
  g.prototype = $e;
  {
    let E;
    if (C) {
      E = /^(((?:ssh-(?:rsa|dss|ed25519))|ecdsa-sha2-nistp(?:256|384|521))(?:-cert-v0[01]@openssh.com)?) ([A-Z0-9a-z/+=]+)(?:$|\s+([\S].*)?)$/;
    } else {
      E = /^(((?:ssh-(?:rsa|dss))|ecdsa-sha2-nistp(?:256|384|521))(?:-cert-v0[01]@openssh.com)?) ([A-Z0-9a-z/+=]+)(?:$|\s+([\S].*)?)$/;
    }
    g.parse = A => {
      const h = E.exec(A);
      if (h === null) {
        return null;
      }
      const S = h[1];
      const L = h[2];
      const j = Buffer.from(h[3], "base64");
      const se = h[4] || "";
      const le = $(j, j._pos, true);
      if (le === undefined || le.indexOf(L) !== 0) {
        return new Error("Malformed OpenSSH public key");
      } else {
        return o(j, L, se, S);
      }
    };
  }
  function f(E, A, h, S, L) {
    this.type = E;
    this.comment = A;
    this[V] = null;
    this[F] = h;
    this[oe] = S;
    this[J] = L;
    this[Z] = false;
  }
  f.prototype = $e;
  {
    const E = /^---- BEGIN SSH2 PUBLIC KEY ----(?:\r?\n)((?:.{0,72}\r?\n)+)---- END SSH2 PUBLIC KEY ----$/;
    const A = /^[A-Z0-9a-z/+=\r\n]+$/;
    const h = /^([\x21-\x39\x3B-\x7E]{1,64}): ((?:[^\\]*\\\r?\n)*[^\r\n]+)\r?\n/gm;
    const S = /\\\r?\n/g;
    f.parse = L => {
      let j = E.exec(L);
      if (j === null) {
        return null;
      }
      const se = j[1];
      let le = 0;
      let _e = "";
      while (j = h.exec(se)) {
        const a = j[1];
        const l = j[2].replace(S, "");
        if (l.length > 1024) {
          h.lastIndex = 0;
          return new Error("Malformed RFC4716 public key");
        }
        le = h.lastIndex;
        if (a.toLowerCase() === "comment") {
          _e = l;
          if (_e.length > 1 && _e.charCodeAt(0) === 34 && _e.charCodeAt(_e.length - 1) === 34) {
            _e = _e.slice(1, -1);
          }
        }
      }
      let d = se.slice(le);
      if (!A.test(d)) {
        return new Error("Malformed RFC4716 public key");
      }
      d = Buffer.from(d, "base64");
      const c = $(d, 0, true);
      if (c === undefined) {
        return new Error("Malformed RFC4716 public key");
      }
      let t = null;
      let s = null;
      switch (c) {
        case "ssh-rsa":
          {
            const a = $(d, d._pos);
            if (a === undefined) {
              return new Error("Malformed RFC4716 public key");
            }
            const l = $(d, d._pos);
            if (l === undefined) {
              return new Error("Malformed RFC4716 public key");
            }
            t = Me(l, a);
            s = Ne(l, a);
            break;
          }
        case "ssh-dss":
          {
            const a = $(d, d._pos);
            if (a === undefined) {
              return new Error("Malformed RFC4716 public key");
            }
            const l = $(d, d._pos);
            if (l === undefined) {
              return new Error("Malformed RFC4716 public key");
            }
            const u = $(d, d._pos);
            if (u === undefined) {
              return new Error("Malformed RFC4716 public key");
            }
            const x = $(d, d._pos);
            if (x === undefined) {
              return new Error("Malformed RFC4716 public key");
            }
            t = Le(a, l, u, x);
            s = Qe(a, l, u, x);
            break;
          }
        default:
          return new Error("Malformed RFC4716 public key");
      }
      return new f(c, _e, t, s, "sha1");
    };
  }
  function o(E, A, h, S) {
    if (!b(A)) {
      return new Error(`Unsupported OpenSSH public key type: ${A}`);
    }
    let L;
    let j;
    let se = null;
    let le = null;
    switch (A) {
      case "ssh-rsa":
        {
          const _e = $(E, E._pos || 0);
          if (_e === undefined) {
            return new Error("Malformed OpenSSH public key");
          }
          const d = $(E, E._pos);
          if (d === undefined) {
            return new Error("Malformed OpenSSH public key");
          }
          se = Me(d, _e);
          le = Ne(d, _e);
          L = "sha1";
          break;
        }
      case "ssh-dss":
        {
          const _e = $(E, E._pos || 0);
          if (_e === undefined) {
            return new Error("Malformed OpenSSH public key");
          }
          const d = $(E, E._pos);
          if (d === undefined) {
            return new Error("Malformed OpenSSH public key");
          }
          const c = $(E, E._pos);
          if (c === undefined) {
            return new Error("Malformed OpenSSH public key");
          }
          const t = $(E, E._pos);
          if (t === undefined) {
            return new Error("Malformed OpenSSH public key");
          }
          se = Le(_e, d, c, t);
          le = Qe(_e, d, c, t);
          L = "sha1";
          break;
        }
      case "ssh-ed25519":
        {
          const _e = $(E, E._pos || 0);
          if (_e === undefined || _e.length !== 32) {
            return new Error("Malformed OpenSSH public key");
          }
          se = Ke(_e);
          le = Re(_e);
          L = null;
          break;
        }
      case "ecdsa-sha2-nistp256":
        L = "sha256";
        j = "1.2.840.10045.3.1.7";
      case "ecdsa-sha2-nistp384":
        if (L === undefined) {
          L = "sha384";
          j = "1.3.132.0.34";
        }
      case "ecdsa-sha2-nistp521":
        {
          if (L === undefined) {
            L = "sha512";
            j = "1.3.132.0.35";
          }
          if (!we(E, 1)) {
            return new Error("Malformed OpenSSH public key");
          }
          const _e = $(E, E._pos || 0);
          if (_e === undefined) {
            return new Error("Malformed OpenSSH public key");
          }
          se = qe(j, _e);
          le = Je(j, _e);
          break;
        }
      default:
        return new Error(`Unsupported OpenSSH public key type: ${A}`);
    }
    return new g(S, h, se, le, L);
  }
  function b(E) {
    switch (E) {
      case "ssh-rsa":
      case "ssh-dss":
      case "ecdsa-sha2-nistp256":
      case "ecdsa-sha2-nistp384":
      case "ecdsa-sha2-nistp521":
        return true;
      case "ssh-ed25519":
        if (C) {
          return true;
        }
      default:
        return false;
    }
  }
  function O(E) {
    if (E) {
      return typeof E[Z] == "boolean";
    } else {
      return false;
    }
  }
  function q(E, A) {
    if (O(E)) {
      return E;
    }
    let h;
    if (Buffer.isBuffer(E)) {
      h = E;
      E = E.utf8Slice(0, E.length).trim();
    } else if (typeof E == "string") {
      E = E.trim();
    } else {
      return new Error("Key data must be a Buffer or string");
    }
    if (A != null) {
      if (typeof A == "string") {
        A = Buffer.from(A);
      } else if (!Buffer.isBuffer(A)) {
        return new Error("Passphrase must be a string or Buffer when supplied");
      }
    }
    let S;
    if ((S = de.parse(E, A)) !== null || (S = P.parse(E, A)) !== null || (S = W.parse(E, A)) !== null || (S = g.parse(E)) !== null || (S = f.parse(E)) !== null) {
      return S;
    }
    if (h) {
      U.init(h, 0);
      const L = U.readString(true);
      if (L !== undefined) {
        E = U.readRaw();
        if (E !== undefined) {
          S = o(E, L, "", L);
          if (S instanceof Error) {
            S = null;
          }
        }
      }
      U.clear();
    }
    return S || new Error("Unsupported key format");
  }
  $n = {
    isParsedKey: O,
    isSupportedKeyType: b,
    parseDERKey: (E, A) => o(E, A, "", A),
    parseKey: q
  };
  return $n;
}
var Mn;
var Kr;
function vi() {
  if (Kr) {
    return Mn;
  }
  Kr = 1;
  const {
    Socket: p
  } = Er;
  const {
    Duplex: e
  } = br;
  const {
    resolve: r
  } = An;
  const {
    readFile: y
  } = En;
  const {
    execFile: k,
    spawn: m
  } = es;
  const {
    isParsedKey: M,
    parseKey: v
  } = nn();
  const {
    makeBufferParser: R,
    readUInt32BE: I,
    writeUInt32BE: Q,
    writeUInt32LE: n
  } = Kt();
  function B(Me) {
    let Ne = false;
    return (...Ue) => {
      if (!Ne) {
        Ne = true;
        Me(...Ue);
      }
    };
  }
  function C(Me, Ne) {
    const Ue = Buffer.allocUnsafe(Me.length + Ne.length);
    Me.copy(Ue, 0);
    Ne.copy(Ue, Me.length);
    return Ue;
  }
  function w() {}
  const X = Buffer.alloc(0);
  const K = R();
  class $ {
    getIdentities(Ne) {
      Ne(new Error("Missing getIdentities() implementation"));
    }
    sign(Ne, Ue, Le, Qe) {
      if (typeof Le == "function") {
        Qe = Le;
      }
      Qe(new Error("Missing sign() implementation"));
    }
  }
  class re extends $ {
    constructor(Ne) {
      super();
      this.socketPath = Ne;
    }
    getStream(Ne) {
      Ne = B(Ne);
      const Ue = new p();
      Ue.on("connect", () => {
        Ne(null, Ue);
      });
      Ue.on("close", Le).on("end", Le).on("error", Le);
      Ue.connect(this.socketPath);
      function Le() {
        try {
          Ue.destroy();
        } catch {}
        Ne(new Error("Failed to connect to agent"));
      }
    }
    getIdentities(Ne) {
      Ne = B(Ne);
      this.getStream((Ue, Le) => {
        function Qe(Ke) {
          if (Le) {
            try {
              Le.destroy();
            } catch {}
          }
          Ke ||= new Error("Failed to retrieve identities from agent");
          Ne(Ke);
        }
        if (Ue) {
          return Qe(Ue);
        }
        const Xe = new oe(true);
        Xe.on("error", Qe);
        Xe.pipe(Le).pipe(Xe);
        Le.on("close", Qe).on("end", Qe).on("error", Qe);
        Xe.getIdentities((Ke, Re) => {
          if (Ke) {
            return Qe(Ke);
          }
          try {
            Le.destroy();
          } catch {}
          Ne(null, Re);
        });
      });
    }
    sign(Ne, Ue, Le, Qe) {
      if (typeof Le == "function") {
        Qe = Le;
        Le = undefined;
      } else if (typeof Le != "object" || Le === null) {
        Le = undefined;
      }
      Qe = B(Qe);
      this.getStream((Xe, Ke) => {
        function Re(qe) {
          if (Ke) {
            try {
              Ke.destroy();
            } catch {}
          }
          qe ||= new Error("Failed to sign data with agent");
          Qe(qe);
        }
        if (Xe) {
          return Re(Xe);
        }
        const Pe = new oe(true);
        Pe.on("error", Re);
        Pe.pipe(Ke).pipe(Pe);
        Ke.on("close", Re).on("end", Re).on("error", Re);
        Pe.sign(Ne, Ue, Le, (qe, Je) => {
          if (qe) {
            return Re(qe);
          }
          try {
            Ke.destroy();
          } catch {}
          Qe(null, Je);
        });
      });
    }
  }
  const Y = (() => {
    const Ke = r(__dirname, "..", "util/pagent.exe");
    const Re = {
      10: new Error("Invalid pagent.exe arguments"),
      11: new Error("Pageant is not running"),
      12: new Error("pagent.exe could not create an mmap"),
      13: new Error("pagent.exe could not set mode for stdin"),
      14: new Error("pagent.exe could not set mode for stdout"),
      15: new Error("pagent.exe did not get expected input payload")
    };
    function Pe(Je) {
      Je.buffer = null;
      if (Je.proc) {
        Je.proc.kill();
        Je.proc = undefined;
      }
    }
    class qe extends e {
      constructor() {
        super();
        this.proc = undefined;
        this.buffer = null;
      }
      _read(Oe) {}
      _write(Oe, Be, $e) {
        if (this.buffer === null) {
          this.buffer = Oe;
        } else {
          const g = Buffer.allocUnsafe(this.buffer.length + Oe.length);
          this.buffer.copy(g, 0);
          Oe.copy(g, this.buffer.length);
          this.buffer = g;
        }
        if (this.buffer.length < 4) {
          return $e();
        }
        const de = I(this.buffer, 0);
        if (this.buffer.length - 4 < de) {
          return $e();
        }
        Oe = this.buffer.slice(0, 4 + de);
        if (this.buffer.length > 4 + de) {
          return $e(new Error("Unexpected multiple agent requests"));
        }
        this.buffer = null;
        let P;
        const W = this.proc = m(Ke, [Oe.length]);
        W.stdout.on("data", g => {
          this.push(g);
        });
        W.on("error", g => {
          P = g;
          $e(P);
        });
        W.on("close", g => {
          this.proc = undefined;
          if (!P) {
            if (P = Re[g]) {
              return $e(P);
            }
            $e();
          }
        });
        W.stdin.end(Oe);
      }
      _final(Oe) {
        Pe(this);
        Oe();
      }
      _destroy(Oe, Be) {
        Pe(this);
        Be();
      }
    }
    return class extends re {
      getStream(Oe) {
        Oe(null, new qe());
      }
    };
  })();
  const J = (() => {
    const Me = /^!<socket >(\d+) s ([A-Z0-9]{8}-[A-Z0-9]{8}-[A-Z0-9]{8}-[A-Z0-9]{8})/;
    return class extends re {
      getStream(Ue) {
        Ue = B(Ue);
        let Le = this.socketPath;
        let Qe = false;
        y(Le, function Xe(Ke, Re) {
          if (Ke) {
            if (Qe) {
              return Ue(new Error("Invalid cygwin unix socket path"));
            }
            k("cygpath", ["-w", Le], (q, E, A) => {
              if (q || E.length === 0) {
                return Ue(new Error("Invalid cygwin unix socket path"));
              }
              Qe = true;
              Le = E.toString().replace(/[\r\n]/g, "");
              y(Le, Xe);
            });
            return;
          }
          const Pe = Me.exec(Re.toString("ascii"));
          if (!Pe) {
            return Ue(new Error("Malformed cygwin unix socket file"));
          }
          let qe;
          let Je = 0;
          let Oe = false;
          const Be = [];
          let $e;
          let de = Buffer.alloc(12);
          const P = parseInt(Pe[1], 10);
          const W = Pe[2].replace(/-/g, "");
          const g = Buffer.allocUnsafe(16);
          for (let q = 0, E = 0; E < 32; ++q, E += 2) {
            g[q] = parseInt(W.substring(E, E + 2), 16);
          }
          for (let q = 0; q < 16; q += 4) {
            n(g, I(g, q), q);
          }
          O();
          function f() {
            Je = 0;
            qe = "secret";
            $e.write(g);
          }
          function o(q) {
            Je += q.length;
            if (qe === "secret") {
              if (Je === 16) {
                Je = 0;
                qe = "creds";
                $e.write(de);
              }
              return;
            }
            if (qe === "creds" && (Oe || Be.push(q), Je === 12)) {
              $e.removeListener("connect", f);
              $e.removeListener("data", o);
              $e.removeListener("error", b);
              $e.removeListener("end", b);
              $e.removeListener("close", b);
              if (Oe) {
                return Ue(null, $e);
              }
              Oe = true;
              de = Buffer.concat(Be);
              n(de, process.pid, 0);
              $e.on("error", () => {});
              $e.destroy();
              O();
            }
          }
          function b() {
            Ue(new Error("Problem negotiating cygwin unix socket security"));
          }
          function O() {
            $e = new p();
            $e.on("connect", f);
            $e.on("data", o);
            $e.on("error", b);
            $e.on("end", b);
            $e.on("close", b);
            $e.connect(P);
          }
        });
      }
    };
  })();
  const V = /^[/\\][/\\]\.[/\\]pipe[/\\].+/;
  function F(Me) {
    if (process.platform === "win32" && !V.test(Me)) {
      if (Me === "pageant") {
        return new Y();
      } else {
        return new J(Me);
      }
    } else {
      return new re(Me);
    }
  }
  const oe = (() => {
    function qe(A) {
      let h;
      while (A[f].length) {
        const S = A[f][0][Oe];
        if (S === undefined) {
          break;
        }
        A[f].shift();
        h = A.push(S);
      }
      return h;
    }
    const Je = Symbol("Inbound Request Type");
    const Oe = Symbol("Inbound Request Response");
    const Be = Symbol("Inbound Request Context");
    class $e {
      constructor(h, S) {
        this[Je] = h;
        this[Oe] = undefined;
        this[Be] = S;
      }
      hasResponded() {
        return this[Oe] !== undefined;
      }
      getType() {
        return this[Je];
      }
      getContext() {
        return this[Be];
      }
    }
    function de(A, h, S) {
      h[Oe] = S;
      return qe(A);
    }
    function P(A) {
      A[b] = null;
      if (A[o] === 0) {
        const h = A[f];
        if (h && h.length) {
          A[f] = [];
          for (const S of h) {
            S.cb(new Error("No reply from server"));
          }
        }
      }
      try {
        A.end();
      } catch {}
      setImmediate(() => {
        if (!A[E]) {
          A.emit("end");
        }
        if (!A[q]) {
          A.emit("close");
        }
      });
    }
    function W() {
      this[q] = true;
    }
    function g() {
      this[E] = true;
    }
    const f = Symbol("Requests");
    const o = Symbol("Agent Protocol Role");
    const b = Symbol("Agent Protocol Buffer");
    const O = Symbol("Agent Protocol Current Message Length");
    const q = Symbol("Agent Protocol Closed");
    const E = Symbol("Agent Protocol Ended");
    return class extends e {
      constructor(h) {
        super({
          autoDestroy: true,
          emitClose: false
        });
        this[o] = h ? 0 : 1;
        this[f] = [];
        this[b] = null;
        this[O] = -1;
        this.once("end", g);
        this.once("close", W);
      }
      _read(h) {}
      _write(h, S, L) {
        if (this[b] === null) {
          this[b] = h;
        } else {
          this[b] = C(this[b], h);
        }
        let j = this[b];
        let se = j.length;
        let le = 0;
        while (le < se && !(se < 5) && !(this[O] === -1 && (this[O] = I(j, le)), se < 4 + this[O])) {
          const _e = j[le += 4];
          ++le;
          if (this[o] === 0) {
            if (this[f].length === 0) {
              return L(new Error("Received unexpected message from server"));
            }
            const d = this[f].shift();
            switch (_e) {
              case 5:
                d.cb(new Error("Agent responded with failure"));
                break;
              case 12:
                {
                  if (d.type !== 11) {
                    return L(new Error("Agent responded with wrong message type"));
                  }
                  K.init(j, le);
                  const c = K.readUInt32BE();
                  if (c === undefined) {
                    K.clear();
                    return L(new Error("Malformed agent response"));
                  }
                  const t = [];
                  for (let s = 0; s < c; ++s) {
                    let a = K.readString();
                    if (a === undefined) {
                      K.clear();
                      return L(new Error("Malformed agent response"));
                    }
                    const l = K.readString(true);
                    if (l === undefined) {
                      K.clear();
                      return L(new Error("Malformed agent response"));
                    }
                    a = v(a);
                    if (!(a instanceof Error)) {
                      a.comment = a.comment || l;
                      t.push(a);
                    }
                  }
                  le = K.pos();
                  K.clear();
                  d.cb(null, t);
                  break;
                }
              case 14:
                {
                  if (d.type !== 13) {
                    return L(new Error("Agent responded with wrong message type"));
                  }
                  K.init(j, le);
                  let c = K.readString();
                  le = K.pos();
                  K.clear();
                  if (c === undefined) {
                    return L(new Error("Malformed agent response"));
                  }
                  K.init(c, 0);
                  K.readString(true);
                  c = K.readString();
                  K.clear();
                  if (c === undefined) {
                    return L(new Error("Malformed OpenSSH signature format"));
                  }
                  d.cb(null, c);
                  break;
                }
              default:
                return L(new Error("Agent responded with unsupported message type"));
            }
          } else {
            switch (_e) {
              case 11:
                {
                  const d = new $e(_e);
                  this[f].push(d);
                  this.emit("identities", d);
                  break;
                }
              case 13:
                {
                  K.init(j, le);
                  let d = K.readString();
                  const c = K.readString();
                  const t = K.readUInt32BE();
                  le = K.pos();
                  K.clear();
                  if (t === undefined) {
                    const u = new $e(_e);
                    this[f].push(u);
                    return this.failureReply(u);
                  }
                  d = v(d);
                  if (d instanceof Error) {
                    const u = new $e(_e);
                    this[f].push(u);
                    return this.failureReply(u);
                  }
                  const s = {
                    hash: undefined
                  };
                  let a;
                  if (d.type === "ssh-rsa") {
                    if (t & 2) {
                      a = "rsa-sha2-256";
                      s.hash = "sha256";
                    } else if (t & 4) {
                      a = "rsa-sha2-512";
                      s.hash = "sha512";
                    }
                  }
                  if (a === undefined) {
                    a = d.type;
                  }
                  const l = new $e(_e, a);
                  this[f].push(l);
                  this.emit("sign", l, d, c, s);
                  break;
                }
              default:
                {
                  const d = new $e(_e);
                  this[f].push(d);
                  this.failureReply(d);
                }
            }
          }
          this[O] = -1;
          if (le === se) {
            this[b] = null;
            break;
          } else {
            this[b] = j = j.slice(le);
            se = j.length;
            le = 0;
          }
        }
        L();
      }
      _destroy(h, S) {
        P(this);
        S();
      }
      _final(h) {
        P(this);
        h();
      }
      sign(h, S, L, j) {
        if (this[o] !== 0) {
          throw new Error("Client-only method called with server role");
        }
        if (typeof L == "function") {
          j = L;
          L = undefined;
        } else if (typeof L != "object" || L === null) {
          L = undefined;
        }
        let se = 0;
        h = v(h);
        if (h instanceof Error) {
          throw new Error("Invalid public key argument");
        }
        if (h.type === "ssh-rsa" && L) {
          switch (L.hash) {
            case "sha256":
              se = 2;
              break;
            case "sha512":
              se = 4;
              break;
          }
        }
        h = h.getPublicSSH();
        const le = 13;
        const _e = h.length;
        const d = S.length;
        let c = 0;
        const t = Buffer.allocUnsafe(9 + _e + 4 + d + 4);
        Q(t, t.length - 4, c);
        t[c += 4] = le;
        Q(t, _e, ++c);
        h.copy(t, c += 4);
        Q(t, d, c += _e);
        S.copy(t, c += 4);
        Q(t, se, c += d);
        if (typeof j != "function") {
          j = w;
        }
        this[f].push({
          type: le,
          cb: j
        });
        return this.push(t);
      }
      getIdentities(h) {
        if (this[o] !== 0) {
          throw new Error("Client-only method called with server role");
        }
        const S = 11;
        let L = 0;
        const j = Buffer.allocUnsafe(5);
        Q(j, j.length - 4, L);
        j[L += 4] = S;
        if (typeof h != "function") {
          h = w;
        }
        this[f].push({
          type: S,
          cb: h
        });
        return this.push(j);
      }
      failureReply(h) {
        if (this[o] !== 1) {
          throw new Error("Server-only method called with client role");
        }
        if (!(h instanceof $e)) {
          throw new Error("Wrong request argument");
        }
        if (h.hasResponded()) {
          return true;
        }
        let S = 0;
        const L = Buffer.allocUnsafe(5);
        Q(L, L.length - 4, S);
        L[S += 4] = 5;
        return de(this, h, L);
      }
      getIdentitiesReply(h, S) {
        if (this[o] !== 1) {
          throw new Error("Server-only method called with client role");
        }
        if (!(h instanceof $e)) {
          throw new Error("Wrong request argument");
        }
        if (h.hasResponded()) {
          return true;
        }
        if (h.getType() !== 11) {
          throw new Error("Invalid response to request");
        }
        if (!Array.isArray(S)) {
          throw new Error("Keys argument must be an array");
        }
        let L = 4;
        const j = [];
        for (let _e = 0; _e < S.length; ++_e) {
          const d = S[_e];
          if (typeof d != "object" || d === null) {
            throw new Error(`Invalid key entry: ${d}`);
          }
          let c;
          let t;
          if (M(d)) {
            c = d;
          } else if (M(d.pubKey)) {
            c = d.pubKey;
          } else if (typeof d.pubKey != "object" || d.pubKey === null || ({
            pubKey: c,
            comment: t
          } = d.pubKey, c = v(c), c instanceof Error)) {
            continue;
          }
          t = c.comment || t;
          c = c.getPublicSSH();
          L += 4 + c.length;
          if (t && typeof t == "string") {
            t = Buffer.from(t);
          } else if (!Buffer.isBuffer(t)) {
            t = X;
          }
          L += 4 + t.length;
          j.push({
            pubKey: c,
            comment: t
          });
        }
        let se = 0;
        const le = Buffer.allocUnsafe(5 + L);
        Q(le, le.length - 4, se);
        le[se += 4] = 12;
        Q(le, j.length, ++se);
        se += 4;
        for (let _e = 0; _e < j.length; ++_e) {
          const {
            pubKey: d,
            comment: c
          } = j[_e];
          Q(le, d.length, se);
          d.copy(le, se += 4);
          Q(le, c.length, se += d.length);
          se += 4;
          if (c.length) {
            c.copy(le, se);
            se += c.length;
          }
        }
        return de(this, h, le);
      }
      signReply(h, S) {
        if (this[o] !== 1) {
          throw new Error("Server-only method called with client role");
        }
        if (!(h instanceof $e)) {
          throw new Error("Wrong request argument");
        }
        if (h.hasResponded()) {
          return true;
        }
        if (h.getType() !== 13) {
          throw new Error("Invalid response to request");
        }
        if (!Buffer.isBuffer(S)) {
          throw new Error("Signature argument must be a Buffer");
        }
        if (S.length === 0) {
          throw new Error("Signature argument must be non-empty");
        }
        let L = 0;
        const j = h.getContext();
        const se = Buffer.byteLength(j);
        const le = Buffer.allocUnsafe(13 + se + 4 + S.length);
        Q(le, le.length - 4, L);
        le[L += 4] = 14;
        Q(le, 4 + se + 4 + S.length, ++L);
        Q(le, se, L += 4);
        le.utf8Write(j, L += 4, se);
        Q(le, S.length, L += se);
        S.copy(le, L += 4);
        return de(this, h, le);
      }
    };
  })();
  const Z = Symbol("Agent");
  const he = Symbol("Agent Keys");
  const U = Symbol("Agent Keys Index");
  const Ie = Symbol("Agent Init Callbacks");
  class be {
    constructor(Ne) {
      if (typeof Ne == "string") {
        Ne = F(Ne);
      } else if (!we(Ne)) {
        throw new Error("Invalid agent argument");
      }
      this[Z] = Ne;
      this[he] = null;
      this[U] = -1;
      this[Ie] = null;
    }
    init(Ne) {
      if (typeof Ne != "function") {
        Ne = w;
      }
      if (this[he] === null) {
        if (this[Ie] === null) {
          this[Ie] = [Ne];
          const Ue = (...Le) => {
            process.nextTick(() => {
              const Qe = this[Ie];
              this[Ie] = null;
              for (const Xe of Qe) {
                Xe(...Le);
              }
            });
          };
          this[Z].getIdentities(B((Le, Qe) => {
            if (Le) {
              return Ue(Le);
            }
            if (!Array.isArray(Qe)) {
              return Ue(new Error("Agent implementation failed to provide keys"));
            }
            const Xe = [];
            for (let Ke of Qe) {
              Ke = v(Ke);
              if (!(Ke instanceof Error)) {
                Xe.push(Ke);
              }
            }
            this[he] = Xe;
            this[U] = -1;
            Ue();
          }));
        } else {
          this[Ie].push(Ne);
        }
      } else {
        process.nextTick(Ne);
      }
    }
    nextKey() {
      if (this[he] === null || ++this[U] >= this[he].length) {
        return false;
      } else {
        return this[he][this[U]];
      }
    }
    currentKey() {
      if (this[he] === null || this[U] >= this[he].length) {
        return null;
      } else {
        return this[he][this[U]];
      }
    }
    pos() {
      if (this[he] === null || this[U] >= this[he].length) {
        return -1;
      } else {
        return this[U];
      }
    }
    reset() {
      this[U] = -1;
    }
    sign(...Ne) {
      this[Z].sign(...Ne);
    }
  }
  function we(Me) {
    return Me instanceof $;
  }
  Mn = {
    AgentContext: be,
    AgentProtocol: oe,
    BaseAgent: $,
    createAgent: F,
    CygwinAgent: J,
    isAgent: we,
    OpenSSHAgent: re,
    PageantAgent: Y
  };
  return Mn;
}
var Kn = {};
var Wn;
var Wr;
function Ni() {
  if (Wr) {
    return Wn;
  }
  Wr = 1;
  const {
    kMaxLength: p
  } = Ii;
  const {
    createInflate: e,
    constants: {
      DEFLATE: r,
      INFLATE: y,
      Z_DEFAULT_CHUNK: k,
      Z_DEFAULT_COMPRESSION: m,
      Z_DEFAULT_MEMLEVEL: M,
      Z_DEFAULT_STRATEGY: v,
      Z_DEFAULT_WINDOWBITS: R,
      Z_PARTIAL_FLUSH: I
    }
  } = ss;
  const Q = e()._handle.constructor;
  function n() {
    throw new Error("Should not get here");
  }
  function B(Y, J, V) {
    const F = this._owner;
    const oe = new Error(Y);
    oe.errno = J;
    oe.code = V;
    F._err = oe;
  }
  function C(Y) {
    if (Y._handle) {
      Y._handle.close();
      Y._handle = null;
    }
  }
  class w {
    constructor(J) {
      const V = R;
      const F = m;
      const oe = M;
      const Z = v;
      const he = undefined;
      this._err = undefined;
      this._writeState = new Uint32Array(2);
      this._chunkSize = k;
      this._maxOutputLength = p;
      this._outBuffer = Buffer.allocUnsafe(this._chunkSize);
      this._outOffset = 0;
      this._handle = new Q(J);
      this._handle._owner = this;
      this._handle.onerror = B;
      this._handle.init(V, F, oe, Z, this._writeState, n, he);
    }
    writeSync(J, V) {
      const F = this._handle;
      if (!F) {
        throw new Error("Invalid Zlib instance");
      }
      let oe = J.length;
      let Z = this._chunkSize - this._outOffset;
      let he = 0;
      let U;
      let Ie;
      let be;
      let we = 0;
      const Me = this._writeState;
      let Ne = this._outBuffer;
      let Ue = this._outOffset;
      const Le = this._chunkSize;
      while (true) {
        F.writeSync(I, J, he, oe, Ne, Ue, Z);
        if (this._err) {
          throw this._err;
        }
        U = Me[0];
        Ie = Me[1];
        const Xe = oe - Ie;
        const Ke = Z - U;
        if (Ke > 0) {
          const Re = Ue === 0 && Ke === Ne.length ? Ne : Ne.slice(Ue, Ue + Ke);
          Ue += Ke;
          if (be) {
            if (be.push === undefined) {
              be = [be, Re];
            } else {
              be.push(Re);
            }
          } else {
            be = Re;
          }
          we += Re.byteLength;
          if (we > this._maxOutputLength) {
            C(this);
            throw new Error(`Output length exceeded maximum of ${this._maxOutputLength}`);
          }
        } else if (Ke !== 0) {
          throw new Error("have should not go down");
        }
        if (U === 0 || Ue >= Le) {
          Z = Le;
          Ue = 0;
          Ne = Buffer.allocUnsafe(Le);
        }
        if (U === 0) {
          he += Xe;
          oe = Ie;
        } else {
          break;
        }
      }
      this._outBuffer = Ne;
      this._outOffset = Ue;
      if (we === 0) {
        be = Buffer.alloc(0);
      }
      if (V) {
        be.totalLen = we;
        return be;
      }
      if (be.push === undefined) {
        return be;
      }
      const Qe = Buffer.allocUnsafe(we);
      for (let Xe = 0, Ke = 0; Xe < be.length; ++Xe) {
        const Re = be[Xe];
        Qe.set(Re, Ke);
        Ke += Re.length;
      }
      return Qe;
    }
  }
  class X {
    constructor(J) {
      this.allocStart = 0;
      this.allocStartKEX = 0;
      this._protocol = J;
      this._zlib = new w(r);
    }
    cleanup() {
      if (this._zlib) {
        C(this._zlib);
      }
    }
    alloc(J, V) {
      return Buffer.allocUnsafe(J);
    }
    finalize(J, V) {
      if (this._protocol._kexinit === undefined || V) {
        const F = this._zlib.writeSync(J, true);
        const oe = this._protocol._cipher.allocPacket(F.totalLen);
        if (F.push === undefined) {
          oe.set(F, 5);
        } else {
          for (let Z = 0, he = 5; Z < F.length; ++Z) {
            const U = F[Z];
            oe.set(U, he);
            he += U.length;
          }
        }
        return oe;
      }
      return J;
    }
  }
  class K {
    constructor(J) {
      this.allocStart = 5;
      this.allocStartKEX = 5;
      this._protocol = J;
    }
    cleanup() {}
    alloc(J, V) {
      if (this._protocol._kexinit === undefined || V) {
        return this._protocol._cipher.allocPacket(J);
      } else {
        return Buffer.allocUnsafe(J);
      }
    }
    finalize(J, V) {
      return J;
    }
  }
  class $ {
    constructor() {
      this._zlib = new w(y);
    }
    cleanup() {
      if (this._zlib) {
        C(this._zlib);
      }
    }
    read(J) {
      return this._zlib.writeSync(J, false);
    }
  }
  class re {
    cleanup() {}
    read(J) {
      return J;
    }
  }
  Wn = {
    PacketReader: re,
    PacketWriter: K,
    ZlibPacketReader: $,
    ZlibPacketWriter: X
  };
  return Wn;
}
var qn;
var qr;
function bs() {
  if (qr) {
    return qn;
  }
  qr = 1;
  const {
    bufferSlice: p,
    bufferParser: e,
    doFatalError: r,
    sigSSHToASN1: y,
    writeUInt32BE: k
  } = Kt();
  const {
    CHANNEL_OPEN_FAILURE: m,
    COMPAT: M,
    MESSAGE: v,
    TERMINAL_MODE: R
  } = jt();
  const {
    parseKey: I
  } = nn();
  const Q = Array.from(Object.entries(R)).reduce((n, [B, C]) => ({
    ...n,
    [B]: C
  }), {});
  qn = {
    [v.DISCONNECT]: (n, B) => {
      e.init(B, 1);
      const C = e.readUInt32BE();
      const w = e.readString(true);
      const X = e.readString();
      e.clear();
      if (X === undefined) {
        return r(n, "Inbound: Malformed DISCONNECT packet");
      }
      if (n._debug) {
        n._debug(`Inbound: Received DISCONNECT (${C}, "${w}")`);
      }
      const K = n._handlers.DISCONNECT;
      if (K) {
        K(n, C, w);
      }
    },
    [v.IGNORE]: (n, B) => {
      if (n._debug) {
        n._debug("Inbound: Received IGNORE");
      }
    },
    [v.UNIMPLEMENTED]: (n, B) => {
      e.init(B, 1);
      const C = e.readUInt32BE();
      e.clear();
      if (C === undefined) {
        return r(n, "Inbound: Malformed UNIMPLEMENTED packet");
      }
      if (n._debug) {
        n._debug(`Inbound: Received UNIMPLEMENTED (seqno ${C})`);
      }
    },
    [v.DEBUG]: (n, B) => {
      e.init(B, 1);
      const C = e.readBool();
      const w = e.readString(true);
      const X = e.readString();
      e.clear();
      if (X === undefined) {
        return r(n, "Inbound: Malformed DEBUG packet");
      }
      if (n._debug) {
        n._debug("Inbound: Received DEBUG");
      }
      const K = n._handlers.DEBUG;
      if (K) {
        K(n, C, w);
      }
    },
    [v.SERVICE_REQUEST]: (n, B) => {
      e.init(B, 1);
      const C = e.readString(true);
      e.clear();
      if (C === undefined) {
        return r(n, "Inbound: Malformed SERVICE_REQUEST packet");
      }
      if (n._debug) {
        n._debug(`Inbound: Received SERVICE_REQUEST (${C})`);
      }
      const w = n._handlers.SERVICE_REQUEST;
      if (w) {
        w(n, C);
      }
    },
    [v.SERVICE_ACCEPT]: (n, B) => {
      e.init(B, 1);
      const C = e.readString(true);
      e.clear();
      if (C === undefined) {
        return r(n, "Inbound: Malformed SERVICE_ACCEPT packet");
      }
      if (n._debug) {
        n._debug(`Inbound: Received SERVICE_ACCEPT (${C})`);
      }
      const w = n._handlers.SERVICE_ACCEPT;
      if (w) {
        w(n, C);
      }
    },
    [v.EXT_INFO]: (n, B) => {
      e.init(B, 1);
      const C = e.readUInt32BE();
      let w;
      if (C !== undefined) {
        w = [];
        for (let K = 0; K < C; ++K) {
          const $ = e.readString(true);
          const re = e.readString();
          if (re !== undefined) {
            switch ($) {
              case "server-sig-algs":
                {
                  const Y = re.latin1Slice(0, re.length).split(",");
                  w.push({
                    name: $,
                    algs: Y
                  });
                  continue;
                }
              default:
                continue;
            }
          }
          w = undefined;
          break;
        }
      }
      e.clear();
      if (w === undefined) {
        return r(n, "Inbound: Malformed EXT_INFO packet");
      }
      if (n._debug) {
        n._debug("Inbound: Received EXT_INFO");
      }
      const X = n._handlers.EXT_INFO;
      if (X) {
        X(n, w);
      }
    },
    [v.USERAUTH_REQUEST]: (n, B) => {
      e.init(B, 1);
      const C = e.readString(true);
      const w = e.readString(true);
      const X = e.readString(true);
      let K;
      let $;
      switch (X) {
        case "none":
          K = null;
          break;
        case "password":
          {
            const Y = e.readBool();
            if (Y !== undefined && (K = e.readString(true), K !== undefined && Y)) {
              const J = e.readString(true);
              if (J !== undefined) {
                K = {
                  oldPassword: K,
                  newPassword: J
                };
              } else {
                K = undefined;
              }
            }
            break;
          }
        case "publickey":
          {
            const Y = e.readBool();
            if (Y !== undefined) {
              const J = e.readString(true);
              let V = J;
              const F = e.readString();
              let oe;
              switch (J) {
                case "rsa-sha2-256":
                  V = "ssh-rsa";
                  oe = "sha256";
                  break;
                case "rsa-sha2-512":
                  V = "ssh-rsa";
                  oe = "sha512";
                  break;
              }
              if (Y) {
                const Z = e.pos();
                let he = e.readString();
                if (he !== undefined && (he.length > 4 + J.length + 4 && he.utf8Slice(4, 4 + J.length) === J && (he = p(he, 4 + J.length + 4)), he = y(he, V), he)) {
                  const U = n._kex.sessionID;
                  const Ie = Buffer.allocUnsafe(4 + U.length + Z);
                  k(Ie, U.length, 0);
                  Ie.set(U, 4);
                  Ie.set(new Uint8Array(B.buffer, B.byteOffset, Z), 4 + U.length);
                  K = {
                    keyAlgo: V,
                    key: F,
                    signature: he,
                    blob: Ie,
                    hashAlgo: oe
                  };
                }
              } else {
                K = {
                  keyAlgo: V,
                  key: F,
                  hashAlgo: oe
                };
                $ = "publickey -- check";
              }
            }
            break;
          }
        case "hostbased":
          {
            const Y = e.readString(true);
            let J = Y;
            const V = e.readString();
            const F = e.readString(true);
            const oe = e.readString(true);
            let Z;
            switch (Y) {
              case "rsa-sha2-256":
                J = "ssh-rsa";
                Z = "sha256";
                break;
              case "rsa-sha2-512":
                J = "ssh-rsa";
                Z = "sha512";
                break;
            }
            const he = e.pos();
            let U = e.readString();
            if (U !== undefined && (U.length > 4 + Y.length + 4 && U.utf8Slice(4, 4 + Y.length) === Y && (U = p(U, 4 + Y.length + 4)), U = y(U, J), U !== undefined)) {
              const Ie = n._kex.sessionID;
              const be = Buffer.allocUnsafe(4 + Ie.length + he);
              k(be, Ie.length, 0);
              be.set(Ie, 4);
              be.set(new Uint8Array(B.buffer, B.byteOffset, he), 4 + Ie.length);
              K = {
                keyAlgo: J,
                key: V,
                signature: U,
                blob: be,
                localHostname: F,
                localUsername: oe,
                hashAlgo: Z
              };
            }
            break;
          }
        case "keyboard-interactive":
          e.skipString();
          K = e.readList();
          break;
        default:
          if (X !== undefined) {
            K = e.readRaw();
          }
      }
      e.clear();
      if (K === undefined) {
        return r(n, "Inbound: Malformed USERAUTH_REQUEST packet");
      }
      if ($ === undefined) {
        $ = X;
      }
      n._authsQueue.push(X);
      if (n._debug) {
        n._debug(`Inbound: Received USERAUTH_REQUEST (${$})`);
      }
      const re = n._handlers.USERAUTH_REQUEST;
      if (re) {
        re(n, C, w, X, K);
      }
    },
    [v.USERAUTH_FAILURE]: (n, B) => {
      e.init(B, 1);
      const C = e.readList();
      const w = e.readBool();
      e.clear();
      if (w === undefined) {
        return r(n, "Inbound: Malformed USERAUTH_FAILURE packet");
      }
      if (n._debug) {
        n._debug(`Inbound: Received USERAUTH_FAILURE (${C})`);
      }
      n._authsQueue.shift();
      const X = n._handlers.USERAUTH_FAILURE;
      if (X) {
        X(n, C, w);
      }
    },
    [v.USERAUTH_SUCCESS]: (n, B) => {
      if (n._debug) {
        n._debug("Inbound: Received USERAUTH_SUCCESS");
      }
      n._authsQueue.shift();
      const C = n._handlers.USERAUTH_SUCCESS;
      if (C) {
        C(n);
      }
    },
    [v.USERAUTH_BANNER]: (n, B) => {
      e.init(B, 1);
      const C = e.readString(true);
      const w = e.readString();
      e.clear();
      if (w === undefined) {
        return r(n, "Inbound: Malformed USERAUTH_BANNER packet");
      }
      if (n._debug) {
        n._debug("Inbound: Received USERAUTH_BANNER");
      }
      const X = n._handlers.USERAUTH_BANNER;
      if (X) {
        X(n, C);
      }
    },
    60: (n, B) => {
      if (!n._authsQueue.length) {
        if (n._debug) {
          n._debug("Inbound: Received payload type 60 without auth");
        }
        return;
      }
      switch (n._authsQueue[0]) {
        case "password":
          {
            e.init(B, 1);
            const C = e.readString(true);
            const w = e.readString();
            e.clear();
            if (w === undefined) {
              return r(n, "Inbound: Malformed USERAUTH_PASSWD_CHANGEREQ packet");
            }
            if (n._debug) {
              n._debug("Inbound: Received USERAUTH_PASSWD_CHANGEREQ");
            }
            const X = n._handlers.USERAUTH_PASSWD_CHANGEREQ;
            if (X) {
              X(n, C);
            }
            break;
          }
        case "publickey":
          {
            e.init(B, 1);
            const C = e.readString(true);
            const w = e.readString();
            e.clear();
            if (w === undefined) {
              return r(n, "Inbound: Malformed USERAUTH_PK_OK packet");
            }
            if (n._debug) {
              n._debug("Inbound: Received USERAUTH_PK_OK");
            }
            n._authsQueue.shift();
            const X = n._handlers.USERAUTH_PK_OK;
            if (X) {
              X(n, C, w);
            }
            break;
          }
        case "keyboard-interactive":
          {
            e.init(B, 1);
            const C = e.readString(true);
            const w = e.readString(true);
            e.readString();
            const X = e.readUInt32BE();
            let K;
            if (X !== undefined) {
              K = new Array(X);
              let re;
              for (re = 0; re < X; ++re) {
                const Y = e.readString(true);
                const J = e.readBool();
                if (J === undefined) {
                  break;
                }
                K[re] = {
                  prompt: Y,
                  echo: J
                };
              }
              if (re !== X) {
                K = undefined;
              }
            }
            e.clear();
            if (K === undefined) {
              return r(n, "Inbound: Malformed USERAUTH_INFO_REQUEST packet");
            }
            if (n._debug) {
              n._debug("Inbound: Received USERAUTH_INFO_REQUEST");
            }
            const $ = n._handlers.USERAUTH_INFO_REQUEST;
            if ($) {
              $(n, C, w, K);
            }
            break;
          }
        default:
          if (n._debug) {
            n._debug("Inbound: Received unexpected payload type 60");
          }
      }
    },
    61: (n, B) => {
      if (!n._authsQueue.length) {
        if (n._debug) {
          n._debug("Inbound: Received payload type 61 without auth");
        }
        return;
      }
      if (n._authsQueue[0] !== "keyboard-interactive") {
        return r(n, "Inbound: Received unexpected payload type 61");
      }
      e.init(B, 1);
      const C = e.readUInt32BE();
      let w;
      if (C !== undefined) {
        w = new Array(C);
        let K;
        for (K = 0; K < C; ++K) {
          const $ = e.readString(true);
          if ($ === undefined) {
            break;
          }
          w[K] = $;
        }
        if (K !== C) {
          w = undefined;
        }
      }
      e.clear();
      if (w === undefined) {
        return r(n, "Inbound: Malformed USERAUTH_INFO_RESPONSE packet");
      }
      if (n._debug) {
        n._debug("Inbound: Received USERAUTH_INFO_RESPONSE");
      }
      const X = n._handlers.USERAUTH_INFO_RESPONSE;
      if (X) {
        X(n, w);
      }
    },
    [v.GLOBAL_REQUEST]: (n, B) => {
      e.init(B, 1);
      const C = e.readString(true);
      const w = e.readBool();
      let X;
      if (w !== undefined) {
        switch (C) {
          case "tcpip-forward":
          case "cancel-tcpip-forward":
            {
              const $ = e.readString(true);
              const re = e.readUInt32BE();
              if (re !== undefined) {
                X = {
                  bindAddr: $,
                  bindPort: re
                };
              }
              break;
            }
          case "streamlocal-forward@openssh.com":
          case "cancel-streamlocal-forward@openssh.com":
            {
              const $ = e.readString(true);
              if ($ !== undefined) {
                X = {
                  socketPath: $
                };
              }
              break;
            }
          case "no-more-sessions@openssh.com":
            X = null;
            break;
          case "hostkeys-00@openssh.com":
            {
              for (X = []; e.avail() > 0;) {
                const $ = e.readString();
                if ($ === undefined) {
                  X = undefined;
                  break;
                }
                const re = I($);
                if (!(re instanceof Error)) {
                  X.push(re);
                }
              }
              break;
            }
          default:
            X = e.readRaw();
        }
      }
      e.clear();
      if (X === undefined) {
        return r(n, "Inbound: Malformed GLOBAL_REQUEST packet");
      }
      if (n._debug) {
        n._debug(`Inbound: GLOBAL_REQUEST (${C})`);
      }
      const K = n._handlers.GLOBAL_REQUEST;
      if (K) {
        K(n, C, w, X);
      } else {
        n.requestFailure();
      }
    },
    [v.REQUEST_SUCCESS]: (n, B) => {
      const C = B.length > 1 ? p(B, 1) : null;
      if (n._debug) {
        n._debug("Inbound: REQUEST_SUCCESS");
      }
      const w = n._handlers.REQUEST_SUCCESS;
      if (w) {
        w(n, C);
      }
    },
    [v.REQUEST_FAILURE]: (n, B) => {
      if (n._debug) {
        n._debug("Inbound: Received REQUEST_FAILURE");
      }
      const C = n._handlers.REQUEST_FAILURE;
      if (C) {
        C(n);
      }
    },
    [v.CHANNEL_OPEN]: (n, B) => {
      e.init(B, 1);
      const C = e.readString(true);
      const w = e.readUInt32BE();
      const X = e.readUInt32BE();
      const K = e.readUInt32BE();
      let $;
      switch (C) {
        case "forwarded-tcpip":
        case "direct-tcpip":
          {
            const Y = e.readString(true);
            const J = e.readUInt32BE();
            const V = e.readString(true);
            const F = e.readUInt32BE();
            if (F !== undefined) {
              $ = {
                type: C,
                sender: w,
                window: X,
                packetSize: K,
                data: {
                  destIP: Y,
                  destPort: J,
                  srcIP: V,
                  srcPort: F
                }
              };
            }
            break;
          }
        case "forwarded-streamlocal@openssh.com":
        case "direct-streamlocal@openssh.com":
          {
            const Y = e.readString(true);
            if (Y !== undefined) {
              $ = {
                type: C,
                sender: w,
                window: X,
                packetSize: K,
                data: {
                  socketPath: Y
                }
              };
            }
            break;
          }
        case "x11":
          {
            const Y = e.readString(true);
            const J = e.readUInt32BE();
            if (J !== undefined) {
              $ = {
                type: C,
                sender: w,
                window: X,
                packetSize: K,
                data: {
                  srcIP: Y,
                  srcPort: J
                }
              };
            }
            break;
          }
        default:
          $ = {
            type: C,
            sender: w,
            window: X,
            packetSize: K,
            data: {}
          };
      }
      e.clear();
      if ($ === undefined) {
        return r(n, "Inbound: Malformed CHANNEL_OPEN packet");
      }
      if (n._debug) {
        n._debug(`Inbound: CHANNEL_OPEN (s:${w}, ${C})`);
      }
      const re = n._handlers.CHANNEL_OPEN;
      if (re) {
        re(n, $);
      } else {
        n.channelOpenFail($.sender, m.ADMINISTRATIVELY_PROHIBITED, "", "");
      }
    },
    [v.CHANNEL_OPEN_CONFIRMATION]: (n, B) => {
      e.init(B, 1);
      const C = e.readUInt32BE();
      const w = e.readUInt32BE();
      const X = e.readUInt32BE();
      const K = e.readUInt32BE();
      const $ = e.avail() ? e.readRaw() : undefined;
      e.clear();
      if (K === undefined) {
        return r(n, "Inbound: Malformed CHANNEL_OPEN_CONFIRMATION packet");
      }
      if (n._debug) {
        n._debug(`Inbound: CHANNEL_OPEN_CONFIRMATION (r:${C}, s:${w})`);
      }
      const re = n._handlers.CHANNEL_OPEN_CONFIRMATION;
      if (re) {
        re(n, {
          recipient: C,
          sender: w,
          window: X,
          packetSize: K,
          data: $
        });
      }
    },
    [v.CHANNEL_OPEN_FAILURE]: (n, B) => {
      e.init(B, 1);
      const C = e.readUInt32BE();
      const w = e.readUInt32BE();
      const X = e.readString(true);
      const K = e.readString();
      e.clear();
      if (K === undefined) {
        return r(n, "Inbound: Malformed CHANNEL_OPEN_FAILURE packet");
      }
      if (n._debug) {
        n._debug(`Inbound: CHANNEL_OPEN_FAILURE (r:${C})`);
      }
      const $ = n._handlers.CHANNEL_OPEN_FAILURE;
      if ($) {
        $(n, C, w, X);
      }
    },
    [v.CHANNEL_WINDOW_ADJUST]: (n, B) => {
      e.init(B, 1);
      const C = e.readUInt32BE();
      const w = e.readUInt32BE();
      e.clear();
      if (w === undefined) {
        return r(n, "Inbound: Malformed CHANNEL_WINDOW_ADJUST packet");
      }
      if (n._debug) {
        n._debug(`Inbound: CHANNEL_WINDOW_ADJUST (r:${C}, ${w})`);
      }
      const X = n._handlers.CHANNEL_WINDOW_ADJUST;
      if (X) {
        X(n, C, w);
      }
    },
    [v.CHANNEL_DATA]: (n, B) => {
      e.init(B, 1);
      const C = e.readUInt32BE();
      const w = e.readString();
      e.clear();
      if (w === undefined) {
        return r(n, "Inbound: Malformed CHANNEL_DATA packet");
      }
      if (n._debug) {
        n._debug(`Inbound: CHANNEL_DATA (r:${C}, ${w.length})`);
      }
      const X = n._handlers.CHANNEL_DATA;
      if (X) {
        X(n, C, w);
      }
    },
    [v.CHANNEL_EXTENDED_DATA]: (n, B) => {
      e.init(B, 1);
      const C = e.readUInt32BE();
      const w = e.readUInt32BE();
      const X = e.readString();
      e.clear();
      if (X === undefined) {
        return r(n, "Inbound: Malformed CHANNEL_EXTENDED_DATA packet");
      }
      if (n._debug) {
        n._debug(`Inbound: CHANNEL_EXTENDED_DATA (r:${C}, ${X.length})`);
      }
      const K = n._handlers.CHANNEL_EXTENDED_DATA;
      if (K) {
        K(n, C, X, w);
      }
    },
    [v.CHANNEL_EOF]: (n, B) => {
      e.init(B, 1);
      const C = e.readUInt32BE();
      e.clear();
      if (C === undefined) {
        return r(n, "Inbound: Malformed CHANNEL_EOF packet");
      }
      if (n._debug) {
        n._debug(`Inbound: CHANNEL_EOF (r:${C})`);
      }
      const w = n._handlers.CHANNEL_EOF;
      if (w) {
        w(n, C);
      }
    },
    [v.CHANNEL_CLOSE]: (n, B) => {
      e.init(B, 1);
      const C = e.readUInt32BE();
      e.clear();
      if (C === undefined) {
        return r(n, "Inbound: Malformed CHANNEL_CLOSE packet");
      }
      if (n._debug) {
        n._debug(`Inbound: CHANNEL_CLOSE (r:${C})`);
      }
      const w = n._handlers.CHANNEL_CLOSE;
      if (w) {
        w(n, C);
      }
    },
    [v.CHANNEL_REQUEST]: (n, B) => {
      e.init(B, 1);
      const C = e.readUInt32BE();
      const w = e.readString(true);
      const X = e.readBool();
      let K;
      if (X !== undefined) {
        switch (w) {
          case "exit-status":
            K = e.readUInt32BE();
            if (n._debug) {
              n._debug(`Inbound: CHANNEL_REQUEST (r:${C}, ${w}: ${K})`);
            }
            break;
          case "exit-signal":
            {
              let re;
              let Y;
              if (n._compatFlags & M.OLD_EXIT) {
                const V = e.readUInt32BE();
                switch (V) {
                  case 1:
                    re = "HUP";
                    break;
                  case 2:
                    re = "INT";
                    break;
                  case 3:
                    re = "QUIT";
                    break;
                  case 6:
                    re = "ABRT";
                    break;
                  case 9:
                    re = "KILL";
                    break;
                  case 14:
                    re = "ALRM";
                    break;
                  case 15:
                    re = "TERM";
                    break;
                  default:
                    if (V !== undefined) {
                      re = `UNKNOWN (${V})`;
                    }
                }
                Y = false;
              } else {
                re = e.readString(true);
                Y = e.readBool();
                if (Y === undefined) {
                  re = undefined;
                }
              }
              const J = e.readString(true);
              if (e.skipString() !== undefined) {
                K = {
                  signal: re,
                  coreDumped: Y,
                  errorMessage: J
                };
              }
              if (n._debug) {
                n._debug(`Inbound: CHANNEL_REQUEST (r:${C}, ${w}: ${re})`);
              }
              break;
            }
          case "pty-req":
            {
              const re = e.readString(true);
              const Y = e.readUInt32BE();
              const J = e.readUInt32BE();
              const V = e.readUInt32BE();
              const F = e.readUInt32BE();
              const oe = e.readString();
              if (oe !== undefined) {
                e.init(oe, 1);
                let Z = {};
                while (e.avail()) {
                  const he = e.readByte();
                  if (he === R.TTY_OP_END) {
                    break;
                  }
                  const U = Q[he];
                  const Ie = e.readUInt32BE();
                  if (he === undefined || U === undefined || Ie === undefined) {
                    Z = undefined;
                    break;
                  }
                  Z[U] = Ie;
                }
                if (Z !== undefined) {
                  K = {
                    term: re,
                    cols: Y,
                    rows: J,
                    width: V,
                    height: F,
                    modes: Z
                  };
                }
              }
              if (n._debug) {
                n._debug(`Inbound: CHANNEL_REQUEST (r:${C}, ${w})`);
              }
              break;
            }
          case "window-change":
            {
              const re = e.readUInt32BE();
              const Y = e.readUInt32BE();
              const J = e.readUInt32BE();
              const V = e.readUInt32BE();
              if (V !== undefined) {
                K = {
                  cols: re,
                  rows: Y,
                  width: J,
                  height: V
                };
              }
              if (n._debug) {
                n._debug(`Inbound: CHANNEL_REQUEST (r:${C}, ${w})`);
              }
              break;
            }
          case "x11-req":
            {
              const re = e.readBool();
              const Y = e.readString(true);
              const J = e.readString();
              const V = e.readUInt32BE();
              if (V !== undefined) {
                K = {
                  single: re,
                  protocol: Y,
                  cookie: J,
                  screen: V
                };
              }
              if (n._debug) {
                n._debug(`Inbound: CHANNEL_REQUEST (r:${C}, ${w})`);
              }
              break;
            }
          case "env":
            {
              const re = e.readString(true);
              const Y = e.readString(true);
              if (Y !== undefined) {
                K = {
                  name: re,
                  value: Y
                };
              }
              if (n._debug) {
                n._debug(`Inbound: CHANNEL_REQUEST (r:${C}, ${w}: ${re}=${Y})`);
              }
              break;
            }
          case "shell":
            K = null;
            if (n._debug) {
              n._debug(`Inbound: CHANNEL_REQUEST (r:${C}, ${w})`);
            }
            break;
          case "exec":
            K = e.readString(true);
            if (n._debug) {
              n._debug(`Inbound: CHANNEL_REQUEST (r:${C}, ${w}: ${K})`);
            }
            break;
          case "subsystem":
            K = e.readString(true);
            if (n._debug) {
              n._debug(`Inbound: CHANNEL_REQUEST (r:${C}, ${w}: ${K})`);
            }
            break;
          case "signal":
            K = e.readString(true);
            if (n._debug) {
              n._debug(`Inbound: CHANNEL_REQUEST (r:${C}, ${w}: ${K})`);
            }
            break;
          case "xon-xoff":
            K = e.readBool();
            if (n._debug) {
              n._debug(`Inbound: CHANNEL_REQUEST (r:${C}, ${w}: ${K})`);
            }
            break;
          case "auth-agent-req@openssh.com":
            K = null;
            if (n._debug) {
              n._debug(`Inbound: CHANNEL_REQUEST (r:${C}, ${w})`);
            }
            break;
          default:
            K = e.avail() ? e.readRaw() : null;
            if (n._debug) {
              n._debug(`Inbound: CHANNEL_REQUEST (r:${C}, ${w})`);
            }
        }
      }
      e.clear();
      if (K === undefined) {
        return r(n, "Inbound: Malformed CHANNEL_REQUEST packet");
      }
      const $ = n._handlers.CHANNEL_REQUEST;
      if ($) {
        $(n, C, w, X, K);
      }
    },
    [v.CHANNEL_SUCCESS]: (n, B) => {
      e.init(B, 1);
      const C = e.readUInt32BE();
      e.clear();
      if (C === undefined) {
        return r(n, "Inbound: Malformed CHANNEL_SUCCESS packet");
      }
      if (n._debug) {
        n._debug(`Inbound: CHANNEL_SUCCESS (r:${C})`);
      }
      const w = n._handlers.CHANNEL_SUCCESS;
      if (w) {
        w(n, C);
      }
    },
    [v.CHANNEL_FAILURE]: (n, B) => {
      e.init(B, 1);
      const C = e.readUInt32BE();
      e.clear();
      if (C === undefined) {
        return r(n, "Inbound: Malformed CHANNEL_FAILURE packet");
      }
      if (n._debug) {
        n._debug(`Inbound: CHANNEL_FAILURE (r:${C})`);
      }
      const w = n._handlers.CHANNEL_FAILURE;
      if (w) {
        w(n, C);
      }
    }
  };
  return qn;
}
var Gn;
var Gr;
function ur() {
  if (Gr) {
    return Gn;
  }
  Gr = 1;
  const p = new Array(256);
  [Cr().HANDLERS, bs()].forEach(e => {
    for (let [r, y] of Object.entries(e)) {
      r = +r;
      if (isFinite(r) && r >= 0 && r < p.length) {
        p[r] = y;
      }
    }
  });
  Gn = p;
  return Gn;
}
var Yn;
var Yr;
function Cr() {
  if (Yr) {
    return Yn;
  }
  Yr = 1;
  const {
    createDiffieHellman: p,
    createDiffieHellmanGroup: e,
    createECDH: r,
    createHash: y,
    createPublicKey: k,
    diffieHellman: m,
    generateKeyPairSync: M,
    randomFillSync: v
  } = en;
  const {
    Ber: R
  } = In();
  const {
    COMPAT: I,
    curve25519Supported: Q,
    DEFAULT_KEX: n,
    DEFAULT_SERVER_HOST_KEY: B,
    DEFAULT_CIPHER: C,
    DEFAULT_MAC: w,
    DEFAULT_COMPRESSION: X,
    DISCONNECT_REASON: K,
    MESSAGE: $
  } = jt();
  const {
    CIPHER_INFO: re,
    createCipher: Y,
    createDecipher: J,
    MAC_INFO: V
  } = tn();
  const {
    parseDERKey: F
  } = nn();
  const {
    bufferFill: oe,
    bufferParser: Z,
    convertSignature: he,
    doFatalError: U,
    FastBuffer: Ie,
    sigSSHToASN1: be,
    writeUInt32BE: we
  } = Kt();
  const {
    PacketReader: Me,
    PacketWriter: Ne,
    ZlibPacketReader: Ue,
    ZlibPacketWriter: Le
  } = Ni();
  let Qe;
  const Xe = 2048;
  const Ke = 8192;
  const Re = Buffer.alloc(0);
  function Pe(g) {
    let f;
    if (g._compatFlags & I.BAD_DHGEX) {
      const o = g._offer.lists.kex;
      let b = o.array;
      let O = false;
      for (let q = 0; q < b.length; ++q) {
        if (b[q].includes("group-exchange")) {
          if (!O) {
            O = true;
            b = b.slice();
          }
          b.splice(q--, 1);
        }
      }
      if (O) {
        let q = 17 + g._offer.totalSize + 1 + 4;
        const E = Buffer.from(b.join(","));
        q -= o.buffer.length - E.length;
        const A = g._offer.lists.all;
        const h = new Uint8Array(A.buffer, A.byteOffset + 4 + o.buffer.length, A.length - (4 + o.buffer.length));
        f = Buffer.allocUnsafe(q);
        we(f, E.length, 17);
        f.set(E, 21);
        f.set(h, 21 + E.length);
      }
    }
    if (f === undefined) {
      f = Buffer.allocUnsafe(17 + g._offer.totalSize + 1 + 4);
      g._offer.copyAllTo(f, 17);
    }
    if (g._debug) {
      g._debug("Outbound: Sending KEXINIT");
    }
    f[0] = $.KEXINIT;
    v(f, 1, 16);
    oe(f, 0, f.length - 5);
    g._kexinit = f;
    g._packetRW.write.allocStart = 0;
    {
      const o = g._packetRW.write.allocStartKEX;
      const b = g._packetRW.write.alloc(f.length, true);
      b.set(f, o);
      g._cipher.encrypt(g._packetRW.write.finalize(b, true));
    }
  }
  function qe(g, f) {
    const o = {
      kex: undefined,
      serverHostKey: undefined,
      cs: {
        cipher: undefined,
        mac: undefined,
        compress: undefined,
        lang: undefined
      },
      sc: {
        cipher: undefined,
        mac: undefined,
        compress: undefined,
        lang: undefined
      }
    };
    Z.init(f, 17);
    if ((o.kex = Z.readList()) === undefined || (o.serverHostKey = Z.readList()) === undefined || (o.cs.cipher = Z.readList()) === undefined || (o.sc.cipher = Z.readList()) === undefined || (o.cs.mac = Z.readList()) === undefined || (o.sc.mac = Z.readList()) === undefined || (o.cs.compress = Z.readList()) === undefined || (o.sc.compress = Z.readList()) === undefined || (o.cs.lang = Z.readList()) === undefined || (o.sc.lang = Z.readList()) === undefined) {
      Z.clear();
      return U(g, "Received malformed KEXINIT", "handshake", K.KEY_EXCHANGE_FAILED);
    }
    const b = Z.pos();
    const O = b < f.length && f[b] === 1;
    Z.clear();
    const q = g._offer;
    const E = o;
    let A = q.lists.kex.array;
    if (g._compatFlags & I.BAD_DHGEX) {
      let l = false;
      for (let u = 0; u < A.length; ++u) {
        if (A[u].indexOf("group-exchange") !== -1) {
          if (!l) {
            l = true;
            A = A.slice();
          }
          A.splice(u--, 1);
        }
      }
    }
    let h;
    let S;
    let L;
    const j = g._debug;
    if (j) {
      j("Inbound: Handshake in progress");
    }
    if (j) {
      j(`Handshake: (local) KEX method: ${A}`);
    }
    if (j) {
      j(`Handshake: (remote) KEX method: ${E.kex}`);
    }
    let se;
    if (g._server) {
      S = A;
      h = E.kex;
      se = h.indexOf("ext-info-c") !== -1;
    } else {
      S = E.kex;
      h = A;
      se = S.indexOf("ext-info-s") !== -1;
    }
    if (g._strictMode === undefined && (g._server ? g._strictMode = h.indexOf("kex-strict-c-v00@openssh.com") !== -1 : g._strictMode = S.indexOf("kex-strict-s-v00@openssh.com") !== -1, g._strictMode && (j && j("Handshake: strict KEX mode enabled"), g._decipher.inSeqno !== 1))) {
      if (j) {
        j("Handshake: KEXINIT not first packet in strict KEX mode");
      }
      return U(g, "Handshake failed: KEXINIT not first packet in strict KEX mode", "handshake", K.KEY_EXCHANGE_FAILED);
    }
    for (L = 0; L < h.length && S.indexOf(h[L]) === -1; ++L);
    if (L === h.length) {
      if (j) {
        j("Handshake: no matching key exchange algorithm");
      }
      return U(g, "Handshake failed: no matching key exchange algorithm", "handshake", K.KEY_EXCHANGE_FAILED);
    }
    o.kex = h[L];
    if (j) {
      j(`Handshake: KEX algorithm: ${h[L]}`);
    }
    if (O && (!E.kex.length || h[L] !== E.kex[0])) {
      g._skipNextInboundPacket = true;
    }
    const le = q.lists.serverHostKey.array;
    if (j) {
      j(`Handshake: (local) Host key format: ${le}`);
    }
    if (j) {
      j(`Handshake: (remote) Host key format: ${E.serverHostKey}`);
    }
    if (g._server) {
      S = le;
      h = E.serverHostKey;
    } else {
      S = E.serverHostKey;
      h = le;
    }
    L = 0;
    for (; L < h.length && S.indexOf(h[L]) === -1; ++L);
    if (L === h.length) {
      if (j) {
        j("Handshake: No matching host key format");
      }
      return U(g, "Handshake failed: no matching host key format", "handshake", K.KEY_EXCHANGE_FAILED);
    }
    o.serverHostKey = h[L];
    if (j) {
      j(`Handshake: Host key format: ${h[L]}`);
    }
    const _e = q.lists.cs.cipher.array;
    if (j) {
      j(`Handshake: (local) C->S cipher: ${_e}`);
    }
    if (j) {
      j(`Handshake: (remote) C->S cipher: ${E.cs.cipher}`);
    }
    if (g._server) {
      S = _e;
      h = E.cs.cipher;
    } else {
      S = E.cs.cipher;
      h = _e;
    }
    L = 0;
    for (; L < h.length && S.indexOf(h[L]) === -1; ++L);
    if (L === h.length) {
      if (j) {
        j("Handshake: No matching C->S cipher");
      }
      return U(g, "Handshake failed: no matching C->S cipher", "handshake", K.KEY_EXCHANGE_FAILED);
    }
    o.cs.cipher = h[L];
    if (j) {
      j(`Handshake: C->S Cipher: ${h[L]}`);
    }
    const d = q.lists.sc.cipher.array;
    if (j) {
      j(`Handshake: (local) S->C cipher: ${d}`);
    }
    if (j) {
      j(`Handshake: (remote) S->C cipher: ${E.sc.cipher}`);
    }
    if (g._server) {
      S = d;
      h = E.sc.cipher;
    } else {
      S = E.sc.cipher;
      h = d;
    }
    L = 0;
    for (; L < h.length && S.indexOf(h[L]) === -1; ++L);
    if (L === h.length) {
      if (j) {
        j("Handshake: No matching S->C cipher");
      }
      return U(g, "Handshake failed: no matching S->C cipher", "handshake", K.KEY_EXCHANGE_FAILED);
    }
    o.sc.cipher = h[L];
    if (j) {
      j(`Handshake: S->C cipher: ${h[L]}`);
    }
    const c = q.lists.cs.mac.array;
    if (j) {
      j(`Handshake: (local) C->S MAC: ${c}`);
    }
    if (j) {
      j(`Handshake: (remote) C->S MAC: ${E.cs.mac}`);
    }
    if (re[o.cs.cipher].authLen > 0) {
      o.cs.mac = "";
      if (j) {
        j("Handshake: C->S MAC: <implicit>");
      }
    } else {
      if (g._server) {
        S = c;
        h = E.cs.mac;
      } else {
        S = E.cs.mac;
        h = c;
      }
      L = 0;
      for (; L < h.length && S.indexOf(h[L]) === -1; ++L);
      if (L === h.length) {
        if (j) {
          j("Handshake: No matching C->S MAC");
        }
        return U(g, "Handshake failed: no matching C->S MAC", "handshake", K.KEY_EXCHANGE_FAILED);
      }
      o.cs.mac = h[L];
      if (j) {
        j(`Handshake: C->S MAC: ${h[L]}`);
      }
    }
    const t = q.lists.sc.mac.array;
    if (j) {
      j(`Handshake: (local) S->C MAC: ${t}`);
    }
    if (j) {
      j(`Handshake: (remote) S->C MAC: ${E.sc.mac}`);
    }
    if (re[o.sc.cipher].authLen > 0) {
      o.sc.mac = "";
      if (j) {
        j("Handshake: S->C MAC: <implicit>");
      }
    } else {
      if (g._server) {
        S = t;
        h = E.sc.mac;
      } else {
        S = E.sc.mac;
        h = t;
      }
      L = 0;
      for (; L < h.length && S.indexOf(h[L]) === -1; ++L);
      if (L === h.length) {
        if (j) {
          j("Handshake: No matching S->C MAC");
        }
        return U(g, "Handshake failed: no matching S->C MAC", "handshake", K.KEY_EXCHANGE_FAILED);
      }
      o.sc.mac = h[L];
      if (j) {
        j(`Handshake: S->C MAC: ${h[L]}`);
      }
    }
    const s = q.lists.cs.compress.array;
    if (j) {
      j(`Handshake: (local) C->S compression: ${s}`);
    }
    if (j) {
      j(`Handshake: (remote) C->S compression: ${E.cs.compress}`);
    }
    if (g._server) {
      S = s;
      h = E.cs.compress;
    } else {
      S = E.cs.compress;
      h = s;
    }
    L = 0;
    for (; L < h.length && S.indexOf(h[L]) === -1; ++L);
    if (L === h.length) {
      if (j) {
        j("Handshake: No matching C->S compression");
      }
      return U(g, "Handshake failed: no matching C->S compression", "handshake", K.KEY_EXCHANGE_FAILED);
    }
    o.cs.compress = h[L];
    if (j) {
      j(`Handshake: C->S compression: ${h[L]}`);
    }
    const a = q.lists.sc.compress.array;
    if (j) {
      j(`Handshake: (local) S->C compression: ${a}`);
    }
    if (j) {
      j(`Handshake: (remote) S->C compression: ${E.sc.compress}`);
    }
    if (g._server) {
      S = a;
      h = E.sc.compress;
    } else {
      S = E.sc.compress;
      h = a;
    }
    L = 0;
    for (; L < h.length && S.indexOf(h[L]) === -1; ++L);
    if (L === h.length) {
      if (j) {
        j("Handshake: No matching S->C compression");
      }
      return U(g, "Handshake failed: no matching S->C compression", "handshake", K.KEY_EXCHANGE_FAILED);
    }
    o.sc.compress = h[L];
    if (j) {
      j(`Handshake: S->C compression: ${h[L]}`);
    }
    o.cs.lang = "";
    o.sc.lang = "";
    if (g._kex) {
      if (!g._kexinit) {
        Pe(g);
      }
      g._decipher._onPayload = de.bind(g, {
        firstPacket: false
      });
    }
    g._kex = Je(o, g, f);
    g._kex.remoteExtInfoEnabled = se;
    g._kex.start();
  }
  const Je = (() => {
    function g(E) {
      let A = 0;
      let h = E.length;
      while (E[A] === 0) {
        ++A;
        --h;
      }
      let S;
      if (E[A] & 128) {
        S = Buffer.allocUnsafe(1 + h);
        S[0] = 0;
        E.copy(S, 1, A);
        E = S;
      } else if (h !== E.length) {
        S = Buffer.allocUnsafe(h);
        E.copy(S, 0, A);
        E = S;
      }
      return E;
    }
    class f {
      constructor(A, h, S) {
        this._protocol = h;
        this.sessionID = h._kex ? h._kex.sessionID : undefined;
        this.negotiated = A;
        this.remoteExtInfoEnabled = false;
        this._step = 1;
        this._public = null;
        this._dh = null;
        this._sentNEWKEYS = false;
        this._receivedNEWKEYS = false;
        this._finished = false;
        this._hostVerified = false;
        this._kexinit = h._kexinit;
        this._remoteKexinit = S;
        this._identRaw = h._identRaw;
        this._remoteIdentRaw = h._remoteIdentRaw;
        this._hostKey = undefined;
        this._dhData = undefined;
        this._sig = undefined;
      }
      finish(A) {
        if (this._finished) {
          return false;
        }
        this._finished = true;
        const h = this._protocol._server;
        const S = this.negotiated;
        const L = this.convertPublicKey(this._dhData);
        let j = this.computeSecret(this._dhData);
        if (j instanceof Error) {
          j.message = `Error while computing DH secret (${this.type}): ${j.message}`;
          j.level = "handshake";
          return U(this._protocol, j, K.KEY_EXCHANGE_FAILED);
        }
        const se = y(this.hashName);
        Be(se, h ? this._remoteIdentRaw : this._identRaw);
        Be(se, h ? this._identRaw : this._remoteIdentRaw);
        Be(se, h ? this._remoteKexinit : this._kexinit);
        Be(se, h ? this._kexinit : this._remoteKexinit);
        const le = h ? this._hostKey.getPublicSSH() : this._hostKey;
        Be(se, le);
        if (this.type === "groupex") {
          const a = this.getDHParams();
          const l = Buffer.allocUnsafe(4);
          we(l, this._minBits, 0);
          se.update(l);
          we(l, this._prefBits, 0);
          se.update(l);
          we(l, this._maxBits, 0);
          se.update(l);
          Be(se, a.prime);
          Be(se, a.generator);
        }
        Be(se, h ? L : this.getPublicKey());
        const _e = h ? this.getPublicKey() : L;
        Be(se, _e);
        Be(se, j);
        const d = se.digest();
        if (h) {
          let a;
          switch (this.negotiated.serverHostKey) {
            case "rsa-sha2-256":
              a = "sha256";
              break;
            case "rsa-sha2-512":
              a = "sha512";
              break;
          }
          if (this._protocol._debug) {
            this._protocol._debug("Generating signature ...");
          }
          let l = this._hostKey.sign(d, a);
          if (l instanceof Error) {
            return U(this._protocol, `Handshake failed: signature generation failed for ${this._hostKey.type} host key: ${l.message}`, "handshake", K.KEY_EXCHANGE_FAILED);
          }
          l = he(l, this._hostKey.type);
          if (l === false) {
            return U(this._protocol, `Handshake failed: signature conversion failed for ${this._hostKey.type} host key`, "handshake", K.KEY_EXCHANGE_FAILED);
          }
          const u = this.negotiated.serverHostKey;
          const x = Buffer.byteLength(u);
          const D = 4 + x + 4 + l.length;
          let G = this._protocol._packetRW.write.allocStartKEX;
          const ie = this._protocol._packetRW.write.alloc(5 + le.length + 4 + _e.length + 4 + D, true);
          ie[G] = $.KEXDH_REPLY;
          we(ie, le.length, ++G);
          ie.set(le, G += 4);
          we(ie, _e.length, G += le.length);
          ie.set(_e, G += 4);
          we(ie, D, G += _e.length);
          we(ie, x, G += 4);
          ie.utf8Write(u, G += 4, x);
          we(ie, l.length, G += x);
          ie.set(l, G += 4);
          if (this._protocol._debug) {
            let ue;
            switch (this.type) {
              case "group":
                ue = "KEXDH_REPLY";
                break;
              case "groupex":
                ue = "KEXDH_GEX_REPLY";
                break;
              default:
                ue = "KEXECDH_REPLY";
            }
            this._protocol._debug(`Outbound: Sending ${ue}`);
          }
          this._protocol._cipher.encrypt(this._protocol._packetRW.write.finalize(ie, true));
        } else {
          Z.init(this._sig, 0);
          const a = Z.readString(true);
          if (!a) {
            return U(this._protocol, "Malformed packet while reading signature", "handshake", K.KEY_EXCHANGE_FAILED);
          }
          if (a !== S.serverHostKey) {
            return U(this._protocol, `Wrong signature type: ${a}, expected: ${S.serverHostKey}`, "handshake", K.KEY_EXCHANGE_FAILED);
          }
          let l = Z.readString();
          Z.clear();
          if (l === undefined) {
            return U(this._protocol, "Malformed packet while reading signature", "handshake", K.KEY_EXCHANGE_FAILED);
          }
          if (!(l = be(l, a))) {
            return U(this._protocol, "Malformed signature", "handshake", K.KEY_EXCHANGE_FAILED);
          }
          let u;
          {
            Z.init(this._hostKey, 0);
            const G = Z.readString(true);
            const ie = this._hostKey.slice(Z.pos());
            Z.clear();
            u = F(ie, G);
            if (u instanceof Error) {
              u.level = "handshake";
              return U(this._protocol, u, K.KEY_EXCHANGE_FAILED);
            }
          }
          let x;
          switch (this.negotiated.serverHostKey) {
            case "rsa-sha2-256":
              x = "sha256";
              break;
            case "rsa-sha2-512":
              x = "sha512";
              break;
          }
          if (this._protocol._debug) {
            this._protocol._debug("Verifying signature ...");
          }
          const D = u.verify(d, l, x);
          if (D !== true) {
            if (D instanceof Error) {
              if (this._protocol._debug) {
                this._protocol._debug(`Signature verification failed: ${D.stack}`);
              }
            } else if (this._protocol._debug) {
              this._protocol._debug("Signature verification failed");
            }
            return U(this._protocol, "Handshake failed: signature verification failed", "handshake", K.KEY_EXCHANGE_FAILED);
          }
          if (this._protocol._debug) {
            this._protocol._debug("Verified signature");
          }
        }
        if (h || !A) {
          W(this);
        }
        let c;
        let t;
        const s = a => {
          if (c) {
            W(this);
            c.outbound.seqno = this._protocol._cipher.outSeqno;
            this._protocol._cipher.free();
            this._protocol._cipher = Y(c);
            this._protocol._packetRW.write = t;
            c = undefined;
            t = undefined;
            this._protocol._onHandshakeComplete(S);
            return false;
          }
          this.sessionID ||= d;
          {
            const nt = Buffer.allocUnsafe(4 + j.length);
            we(nt, j.length, 0);
            nt.set(j, 4);
            j = nt;
          }
          const l = re[S.cs.cipher];
          const u = re[S.sc.cipher];
          const x = $e(l.ivLen, this.hashName, j, d, this.sessionID, "A");
          const D = $e(u.ivLen, this.hashName, j, d, this.sessionID, "B");
          const G = $e(l.keyLen, this.hashName, j, d, this.sessionID, "C");
          const ie = $e(u.keyLen, this.hashName, j, d, this.sessionID, "D");
          let ue;
          let pe;
          if (!l.authLen) {
            ue = V[S.cs.mac];
            pe = $e(ue.len, this.hashName, j, d, this.sessionID, "E");
          }
          let Te;
          let He;
          if (!u.authLen) {
            Te = V[S.sc.mac];
            He = $e(Te.len, this.hashName, j, d, this.sessionID, "F");
          }
          const ve = {
            inbound: {
              onPayload: this._protocol._onPayload,
              seqno: this._protocol._decipher.inSeqno,
              decipherInfo: h ? l : u,
              decipherIV: h ? x : D,
              decipherKey: h ? G : ie,
              macInfo: h ? ue : Te,
              macKey: h ? pe : He
            },
            outbound: {
              onWrite: this._protocol._onWrite,
              seqno: this._protocol._cipher.outSeqno,
              cipherInfo: h ? u : l,
              cipherIV: h ? D : x,
              cipherKey: h ? ie : G,
              macInfo: h ? Te : ue,
              macKey: h ? He : pe
            }
          };
          this._protocol._decipher.free();
          c = ve;
          this._protocol._decipher = J(ve);
          const Ze = {
            read: undefined,
            write: undefined
          };
          switch (S.cs.compress) {
            case "zlib":
              if (h) {
                Ze.read = new Ue();
              } else {
                Ze.write = new Le(this._protocol);
              }
              break;
            case "zlib@openssh.com":
              if (this._protocol._authenticated) {
                if (h) {
                  Ze.read = new Ue();
                } else {
                  Ze.write = new Le(this._protocol);
                }
                break;
              }
            default:
              if (h) {
                Ze.read = new Me();
              } else {
                Ze.write = new Ne(this._protocol);
              }
          }
          switch (S.sc.compress) {
            case "zlib":
              if (h) {
                Ze.write = new Le(this._protocol);
              } else {
                Ze.read = new Ue();
              }
              break;
            case "zlib@openssh.com":
              if (this._protocol._authenticated) {
                if (h) {
                  Ze.write = new Le(this._protocol);
                } else {
                  Ze.read = new Ue();
                }
                break;
              }
            default:
              if (h) {
                Ze.write = new Ne(this._protocol);
              } else {
                Ze.read = new Me();
              }
          }
          this._protocol._packetRW.read.cleanup();
          this._protocol._packetRW.write.cleanup();
          this._protocol._packetRW.read = Ze.read;
          t = Ze.write;
          this._public = null;
          this._dh = null;
          this._kexinit = this._protocol._kexinit = undefined;
          this._remoteKexinit = undefined;
          this._identRaw = undefined;
          this._remoteIdentRaw = undefined;
          this._hostKey = undefined;
          this._dhData = undefined;
          this._sig = undefined;
          if (a) {
            return false;
          } else {
            return s();
          }
        };
        if (h || A) {
          this.finish = s;
        }
        if (!h) {
          return s(A);
        }
      }
      start() {
        if (!this._protocol._server) {
          if (this._protocol._debug) {
            let L;
            switch (this.type) {
              case "group":
                L = "KEXDH_INIT";
                break;
              default:
                L = "KEXECDH_INIT";
            }
            this._protocol._debug(`Outbound: Sending ${L}`);
          }
          const A = this.getPublicKey();
          let h = this._protocol._packetRW.write.allocStartKEX;
          const S = this._protocol._packetRW.write.alloc(5 + A.length, true);
          S[h] = $.KEXDH_INIT;
          we(S, A.length, ++h);
          S.set(A, h += 4);
          this._protocol._cipher.encrypt(this._protocol._packetRW.write.finalize(S, true));
        }
      }
      getPublicKey() {
        this.generateKeys();
        const A = this._public;
        if (A) {
          return this.convertPublicKey(A);
        }
      }
      convertPublicKey(A) {
        let h;
        let S = 0;
        let L = A.length;
        while (A[S] === 0) {
          ++S;
          --L;
        }
        if (A[S] & 128) {
          h = Buffer.allocUnsafe(1 + L);
          h[0] = 0;
          A.copy(h, 1, S);
          return h;
        } else {
          if (L !== A.length) {
            h = Buffer.allocUnsafe(L);
            A.copy(h, 0, S);
            A = h;
          }
          return A;
        }
      }
      computeSecret(A) {
        this.generateKeys();
        try {
          return g(this._dh.computeSecret(A));
        } catch (h) {
          return h;
        }
      }
      parse(A) {
        const h = A[0];
        switch (this._step) {
          case 1:
            if (this._protocol._server) {
              if (h !== $.KEXDH_INIT) {
                return U(this._protocol, `Received packet ${h} instead of ${$.KEXDH_INIT}`, "handshake", K.KEY_EXCHANGE_FAILED);
              }
              if (this._protocol._debug) {
                this._protocol._debug("Received DH Init");
              }
              Z.init(A, 1);
              const S = Z.readString();
              Z.clear();
              if (S === undefined) {
                return U(this._protocol, "Received malformed KEX*_INIT", "handshake", K.KEY_EXCHANGE_FAILED);
              }
              this._dhData = S;
              let L = this._protocol._hostKeys[this.negotiated.serverHostKey];
              if (Array.isArray(L)) {
                L = L[0];
              }
              this._hostKey = L;
              this.finish();
            } else {
              if (h !== $.KEXDH_REPLY) {
                return U(this._protocol, `Received packet ${h} instead of ${$.KEXDH_REPLY}`, "handshake", K.KEY_EXCHANGE_FAILED);
              }
              if (this._protocol._debug) {
                this._protocol._debug("Received DH Reply");
              }
              Z.init(A, 1);
              let S;
              let L;
              let j;
              if ((S = Z.readString()) === undefined || (L = Z.readString()) === undefined || (j = Z.readString()) === undefined) {
                Z.clear();
                return U(this._protocol, "Received malformed KEX*_REPLY", "handshake", K.KEY_EXCHANGE_FAILED);
              }
              Z.clear();
              Z.init(S, 0);
              const se = Z.readString(true);
              Z.clear();
              if (se === undefined) {
                return U(this._protocol, "Received malformed host public key", "handshake", K.KEY_EXCHANGE_FAILED);
              }
              if (se !== this.negotiated.serverHostKey) {
                switch (this.negotiated.serverHostKey) {
                  case "rsa-sha2-256":
                  case "rsa-sha2-512":
                    if (se === "ssh-rsa") {
                      break;
                    }
                  default:
                    return U(this._protocol, "Host key does not match negotiated type", "handshake", K.KEY_EXCHANGE_FAILED);
                }
              }
              this._hostKey = S;
              this._dhData = L;
              this._sig = j;
              let le = false;
              let _e;
              if (this._protocol._hostVerifier === undefined) {
                _e = true;
                if (this._protocol._debug) {
                  this._protocol._debug("Host accepted by default (no verification)");
                }
              } else {
                _e = this._protocol._hostVerifier(S, d => {
                  if (!le) {
                    le = true;
                    if (d === false) {
                      if (this._protocol._debug) {
                        this._protocol._debug("Host denied (verification failed)");
                      }
                      return U(this._protocol, "Host denied (verification failed)", "handshake", K.KEY_EXCHANGE_FAILED);
                    }
                    if (this._protocol._debug) {
                      this._protocol._debug("Host accepted (verified)");
                    }
                    this._hostVerified = true;
                    if (this._receivedNEWKEYS) {
                      this.finish();
                    } else {
                      W(this);
                    }
                  }
                });
              }
              if (_e === undefined) {
                ++this._step;
                return;
              }
              le = true;
              if (_e === false) {
                if (this._protocol._debug) {
                  this._protocol._debug("Host denied (verification failed)");
                }
                return U(this._protocol, "Host denied (verification failed)", "handshake", K.KEY_EXCHANGE_FAILED);
              }
              if (this._protocol._debug) {
                this._protocol._debug("Host accepted (verified)");
              }
              this._hostVerified = true;
              W(this);
            }
            ++this._step;
            break;
          case 2:
            if (h !== $.NEWKEYS) {
              return U(this._protocol, `Received packet ${h} instead of ${$.NEWKEYS}`, "handshake", K.KEY_EXCHANGE_FAILED);
            } else {
              if (this._protocol._debug) {
                this._protocol._debug("Inbound: NEWKEYS");
              }
              this._receivedNEWKEYS = true;
              if (this._protocol._strictMode) {
                this._protocol._decipher.inSeqno = 0;
              }
              ++this._step;
              return this.finish(!this._protocol._server && !this._hostVerified);
            }
          default:
            return U(this._protocol, `Received unexpected packet ${h} after NEWKEYS`, "handshake", K.KEY_EXCHANGE_FAILED);
        }
      }
    }
    class o extends f {
      constructor(A, ...h) {
        super(...h);
        this.type = "25519";
        this.hashName = A;
        this._keys = null;
      }
      generateKeys() {
        this._keys ||= M("x25519");
      }
      getPublicKey() {
        this.generateKeys();
        return this._keys.publicKey.export({
          type: "spki",
          format: "der"
        }).slice(-32);
      }
      convertPublicKey(A) {
        let h;
        let S = 0;
        let L = A.length;
        while (A[S] === 0) {
          ++S;
          --L;
        }
        if (A.length !== 32) {
          if (L !== A.length) {
            h = Buffer.allocUnsafe(L);
            A.copy(h, 0, S);
            A = h;
          }
        }
        return A;
      }
      computeSecret(A) {
        this.generateKeys();
        try {
          const h = new R.Writer();
          h.startSequence();
          h.startSequence();
          h.writeOID("1.3.101.110");
          h.endSequence();
          h.startSequence(R.BitString);
          h.writeByte(0);
          h._ensure(A.length);
          A.copy(h._buf, h._offset, 0, A.length);
          h._offset += A.length;
          h.endSequence();
          h.endSequence();
          return g(m({
            privateKey: this._keys.privateKey,
            publicKey: k({
              key: h.buffer,
              type: "spki",
              format: "der"
            })
          }));
        } catch (h) {
          return h;
        }
      }
    }
    class b extends f {
      constructor(A, h, ...S) {
        super(...S);
        this.type = "ecdh";
        this.curveName = A;
        this.hashName = h;
      }
      generateKeys() {
        if (!this._dh) {
          this._dh = r(this.curveName);
          this._public = this._dh.generateKeys();
        }
      }
    }
    class O extends f {
      constructor(A, ...h) {
        super(...h);
        this.type = "groupex";
        this.hashName = A;
        this._prime = null;
        this._generator = null;
        this._minBits = Xe;
        this._prefBits = P(this.negotiated);
        if (this._protocol._compatFlags & I.BUG_DHGEX_LARGE) {
          this._prefBits = Math.min(this._prefBits, 4096);
        }
        this._maxBits = Ke;
      }
      start() {
        if (this._protocol._server) {
          return;
        }
        if (this._protocol._debug) {
          this._protocol._debug("Outbound: Sending KEXDH_GEX_REQUEST");
        }
        let A = this._protocol._packetRW.write.allocStartKEX;
        const h = this._protocol._packetRW.write.alloc(13, true);
        h[A] = $.KEXDH_GEX_REQUEST;
        we(h, this._minBits, ++A);
        we(h, this._prefBits, A += 4);
        we(h, this._maxBits, A += 4);
        this._protocol._cipher.encrypt(this._protocol._packetRW.write.finalize(h, true));
      }
      generateKeys() {
        if (!this._dh && this._prime && this._generator) {
          this._dh = p(this._prime, this._generator);
          this._public = this._dh.generateKeys();
        }
      }
      setDHParams(A, h) {
        if (!Buffer.isBuffer(A)) {
          throw new Error("Invalid prime value");
        }
        if (!Buffer.isBuffer(h)) {
          throw new Error("Invalid generator value");
        }
        this._prime = A;
        this._generator = h;
      }
      getDHParams() {
        if (this._dh) {
          return {
            prime: g(this._dh.getPrime()),
            generator: g(this._dh.getGenerator())
          };
        }
      }
      parse(A) {
        const h = A[0];
        switch (this._step) {
          case 1:
            {
              if (this._protocol._server) {
                if (h !== $.KEXDH_GEX_REQUEST) {
                  return U(this._protocol, `Received packet ${h} instead of ${$.KEXDH_GEX_REQUEST}`, "handshake", K.KEY_EXCHANGE_FAILED);
                } else {
                  return U(this._protocol, "Group exchange not implemented for server", "handshake", K.KEY_EXCHANGE_FAILED);
                }
              }
              if (h !== $.KEXDH_GEX_GROUP) {
                return U(this._protocol, `Received packet ${h} instead of ${$.KEXDH_GEX_GROUP}`, "handshake", K.KEY_EXCHANGE_FAILED);
              }
              if (this._protocol._debug) {
                this._protocol._debug("Received DH GEX Group");
              }
              Z.init(A, 1);
              let S;
              let L;
              if ((S = Z.readString()) === undefined || (L = Z.readString()) === undefined) {
                Z.clear();
                return U(this._protocol, "Received malformed KEXDH_GEX_GROUP", "handshake", K.KEY_EXCHANGE_FAILED);
              }
              Z.clear();
              this.setDHParams(S, L);
              this.generateKeys();
              const j = this.getPublicKey();
              if (this._protocol._debug) {
                this._protocol._debug("Outbound: Sending KEXDH_GEX_INIT");
              }
              let se = this._protocol._packetRW.write.allocStartKEX;
              const le = this._protocol._packetRW.write.alloc(5 + j.length, true);
              le[se] = $.KEXDH_GEX_INIT;
              we(le, j.length, ++se);
              le.set(j, se += 4);
              this._protocol._cipher.encrypt(this._protocol._packetRW.write.finalize(le, true));
              ++this._step;
              break;
            }
          case 2:
            if (this._protocol._server) {
              if (h !== $.KEXDH_GEX_INIT) {
                return U(this._protocol, `Received packet ${h} instead of ${$.KEXDH_GEX_INIT}`, "handshake", K.KEY_EXCHANGE_FAILED);
              } else {
                if (this._protocol._debug) {
                  this._protocol._debug("Received DH GEX Init");
                }
                return U(this._protocol, "Group exchange not implemented for server", "handshake", K.KEY_EXCHANGE_FAILED);
              }
            }
            if (h !== $.KEXDH_GEX_REPLY) {
              return U(this._protocol, `Received packet ${h} instead of ${$.KEXDH_GEX_REPLY}`, "handshake", K.KEY_EXCHANGE_FAILED);
            }
            if (this._protocol._debug) {
              this._protocol._debug("Received DH GEX Reply");
            }
            this._step = 1;
            A[0] = $.KEXDH_REPLY;
            this.parse = f.prototype.parse;
            this.parse(A);
        }
      }
    }
    class q extends f {
      constructor(A, h, ...S) {
        super(...S);
        this.type = "group";
        this.groupName = A;
        this.hashName = h;
      }
      start() {
        if (!this._protocol._server) {
          if (this._protocol._debug) {
            this._protocol._debug("Outbound: Sending KEXDH_INIT");
          }
          const A = this.getPublicKey();
          let h = this._protocol._packetRW.write.allocStartKEX;
          const S = this._protocol._packetRW.write.alloc(5 + A.length, true);
          S[h] = $.KEXDH_INIT;
          we(S, A.length, ++h);
          S.set(A, h += 4);
          this._protocol._cipher.encrypt(this._protocol._packetRW.write.finalize(S, true));
        }
      }
      generateKeys() {
        if (!this._dh) {
          this._dh = e(this.groupName);
          this._public = this._dh.generateKeys();
        }
      }
      getDHParams() {
        if (this._dh) {
          return {
            prime: g(this._dh.getPrime()),
            generator: g(this._dh.getGenerator())
          };
        }
      }
    }
    return (E, ...A) => {
      if (typeof E != "object" || E === null) {
        throw new Error("Invalid negotiated argument");
      }
      const h = E.kex;
      if (typeof h == "string") {
        A = [E, ...A];
        switch (h) {
          case "curve25519-sha256":
          case "curve25519-sha256@libssh.org":
            if (!Q) {
              break;
            }
            return new o("sha256", ...A);
          case "ecdh-sha2-nistp256":
            return new b("prime256v1", "sha256", ...A);
          case "ecdh-sha2-nistp384":
            return new b("secp384r1", "sha384", ...A);
          case "ecdh-sha2-nistp521":
            return new b("secp521r1", "sha512", ...A);
          case "diffie-hellman-group1-sha1":
            return new q("modp2", "sha1", ...A);
          case "diffie-hellman-group14-sha1":
            return new q("modp14", "sha1", ...A);
          case "diffie-hellman-group14-sha256":
            return new q("modp14", "sha256", ...A);
          case "diffie-hellman-group15-sha512":
            return new q("modp15", "sha512", ...A);
          case "diffie-hellman-group16-sha512":
            return new q("modp16", "sha512", ...A);
          case "diffie-hellman-group17-sha512":
            return new q("modp17", "sha512", ...A);
          case "diffie-hellman-group18-sha512":
            return new q("modp18", "sha512", ...A);
          case "diffie-hellman-group-exchange-sha1":
            return new O("sha1", ...A);
          case "diffie-hellman-group-exchange-sha256":
            return new O("sha256", ...A);
        }
        throw new Error(`Unsupported key exchange algorithm: ${h}`);
      }
      throw new Error(`Invalid key exchange type: ${h}`);
    };
  })();
  const Oe = (() => {
    const g = ["kex", "serverHostKey", ["cs", "cipher"], ["sc", "cipher"], ["cs", "mac"], ["sc", "mac"], ["cs", "compress"], ["sc", "compress"], ["cs", "lang"], ["sc", "lang"]];
    return class {
      constructor(o) {
        if (typeof o != "object" || o === null) {
          throw new TypeError("Argument must be an object");
        }
        const b = {
          kex: undefined,
          serverHostKey: undefined,
          cs: {
            cipher: undefined,
            mac: undefined,
            compress: undefined,
            lang: undefined
          },
          sc: {
            cipher: undefined,
            mac: undefined,
            compress: undefined,
            lang: undefined
          },
          all: undefined
        };
        let O = 0;
        for (const A of g) {
          let h;
          let S;
          let L;
          let j;
          if (typeof A == "string") {
            h = b;
            S = o[A];
            L = j = A;
          } else {
            const le = A[0];
            h = b[le];
            j = A[1];
            S = o[le][j];
            L = `${le}.${j}`;
          }
          const se = {
            array: undefined,
            buffer: undefined
          };
          if (Buffer.isBuffer(S)) {
            se.array = ("" + S).split(",");
            se.buffer = S;
            O += 4 + S.length;
          } else {
            if (typeof S == "string") {
              S = S.split(",");
            }
            if (Array.isArray(S)) {
              se.array = S;
              se.buffer = Buffer.from(S.join(","));
            } else {
              throw new TypeError(`Invalid \`${L}\` type: ${typeof S}`);
            }
            O += 4 + se.buffer.length;
          }
          h[j] = se;
        }
        const q = Buffer.allocUnsafe(O);
        b.all = q;
        let E = 0;
        for (const A of g) {
          let h;
          if (typeof A == "string") {
            h = b[A].buffer;
          } else {
            h = b[A[0]][A[1]].buffer;
          }
          E = we(q, h.length, E);
          q.set(h, E);
          E += h.length;
        }
        this.totalSize = O;
        this.lists = b;
      }
      copyAllTo(o, b) {
        const O = this.lists.all;
        if (typeof b != "number") {
          throw new TypeError(`Invalid offset value: ${typeof b}`);
        }
        if (o.length - b < O.length) {
          throw new Error("Insufficient space to copy list");
        }
        o.set(O, b);
        return O.length;
      }
    };
  })();
  const Be = (() => {
    const g = Buffer.allocUnsafe(4);
    return (f, o) => {
      we(g, o.length, 0);
      f.update(g);
      f.update(o);
    };
  })();
  function $e(g, f, o, b, O, q) {
    let E;
    if (g) {
      let A = y(f).update(o).update(b).update(q).update(O).digest();
      while (A.length < g) {
        const h = y(f).update(o).update(b).update(A).digest();
        const S = Buffer.allocUnsafe(A.length + h.length);
        S.set(A, 0);
        S.set(h, A.length);
        A = S;
      }
      if (A.length === g) {
        E = A;
      } else {
        E = new Ie(A.buffer, A.byteOffset, g);
      }
    } else {
      E = Re;
    }
    return E;
  }
  function de(g, f) {
    if (f.length === 0) {
      if (this._debug) {
        this._debug("Inbound: Skipping empty packet payload");
      }
      return;
    }
    if (this._skipNextInboundPacket) {
      this._skipNextInboundPacket = false;
      return;
    }
    f = this._packetRW.read.read(f);
    const o = f[0];
    if (!this._strictMode) {
      switch (o) {
        case $.IGNORE:
        case $.UNIMPLEMENTED:
        case $.DEBUG:
          Qe ||= ur();
          return Qe[o](this, f);
      }
    }
    switch (o) {
      case $.DISCONNECT:
        Qe ||= ur();
        return Qe[o](this, f);
      case $.KEXINIT:
        if (g.firstPacket) {
          g.firstPacket = false;
          return qe(this, f);
        } else {
          return U(this, "Received extra KEXINIT during handshake", "handshake", K.KEY_EXCHANGE_FAILED);
        }
      default:
        if (o < 20 || o > 49) {
          return U(this, `Received unexpected packet type ${o}`, "handshake", K.KEY_EXCHANGE_FAILED);
        }
    }
    return this._kex.parse(f);
  }
  function P(g) {
    const f = re[g.cs.cipher];
    const o = re[g.sc.cipher];
    const b = Math.max(0, f.sslName === "des-ede3-cbc" ? 14 : f.keyLen, f.blockLen, f.ivLen, o.sslName === "des-ede3-cbc" ? 14 : o.keyLen, o.blockLen, o.ivLen) * 8;
    if (b <= 112) {
      return 2048;
    } else if (b <= 128) {
      return 3072;
    } else if (b <= 192) {
      return 7680;
    } else {
      return 8192;
    }
  }
  function W(g) {
    if (!g._sentNEWKEYS) {
      if (g._protocol._debug) {
        g._protocol._debug("Outbound: Sending NEWKEYS");
      }
      const f = g._protocol._packetRW.write.allocStartKEX;
      const o = g._protocol._packetRW.write.alloc(1, true);
      o[f] = $.NEWKEYS;
      g._protocol._cipher.encrypt(g._protocol._packetRW.write.finalize(o, true));
      g._sentNEWKEYS = true;
      if (g._protocol._strictMode) {
        g._protocol._cipher.outSeqno = 0;
      }
    }
  }
  Yn = {
    KexInit: Oe,
    kexinit: Pe,
    onKEXPayload: de,
    DEFAULT_KEXINIT_CLIENT: new Oe({
      kex: n.concat(["ext-info-c", "kex-strict-c-v00@openssh.com"]),
      serverHostKey: B,
      cs: {
        cipher: C,
        mac: w,
        compress: X,
        lang: []
      },
      sc: {
        cipher: C,
        mac: w,
        compress: X,
        lang: []
      }
    }),
    DEFAULT_KEXINIT_SERVER: new Oe({
      kex: n.concat(["kex-strict-s-v00@openssh.com"]),
      serverHostKey: B,
      cs: {
        cipher: C,
        mac: w,
        compress: X,
        lang: []
      },
      sc: {
        cipher: C,
        mac: w,
        compress: X,
        lang: []
      }
    }),
    HANDLERS: {
      [$.KEXINIT]: qe
    }
  };
  return Yn;
}
const ms = "1.17.0";
const ys = {
  version: ms
};
var Xn;
var Xr;
function Li() {
  if (Xr) {
    return Xn;
  }
  Xr = 1;
  const {
    inspect: p
  } = Sr;
  const {
    bindingAvailable: e,
    NullCipher: r,
    NullDecipher: y
  } = tn();
  const {
    COMPAT_CHECKS: k,
    DISCONNECT_REASON: m,
    eddsaSupported: M,
    MESSAGE: v,
    SIGNALS: R,
    TERMINAL_MODE: I
  } = jt();
  const {
    DEFAULT_KEXINIT_CLIENT: Q,
    DEFAULT_KEXINIT_SERVER: n,
    KexInit: B,
    kexinit: C,
    onKEXPayload: w
  } = Cr();
  const {
    parseKey: X
  } = nn();
  const K = ur();
  const {
    bufferCopy: $,
    bufferFill: re,
    bufferSlice: Y,
    convertSignature: J,
    sendPacket: V,
    writeUInt32BE: F
  } = Kt();
  const {
    PacketReader: oe,
    PacketWriter: Z,
    ZlibPacketReader: he,
    ZlibPacketWriter: U
  } = Ni();
  const Ie = ys.version;
  const be = new Map(Object.values(m).map(de => [de, 1]));
  const we = Buffer.from(`SSH-2.0-ssh2js${Ie}`);
  const Me = Buffer.from(`${we}\r
`);
  const Ne = 8192;
  const Ue = 1024;
  const Le = Buffer.from([v.GLOBAL_REQUEST, 0, 0, 0, 21, 107, 101, 101, 112, 97, 108, 105, 118, 101, 64, 111, 112, 101, 110, 115, 115, 104, 46, 99, 111, 109, 1]);
  const Qe = Buffer.from([I.TTY_OP_END]);
  function Xe() {}
  class Ke {
    constructor(P) {
      const W = P.onWrite;
      if (typeof W != "function") {
        throw new Error("Missing onWrite function");
      }
      this._onWrite = L => {
        W(L);
      };
      const g = P.onError;
      if (typeof g != "function") {
        throw new Error("Missing onError function");
      }
      this._onError = L => {
        g(L);
      };
      const f = P.debug;
      this._debug = typeof f == "function" ? L => {
        f(L);
      } : undefined;
      const o = P.onHeader;
      this._onHeader = typeof o == "function" ? (...L) => {
        o(...L);
      } : Xe;
      const b = P.onPacket;
      this._onPacket = typeof b == "function" ? () => {
        b();
      } : Xe;
      let O = P.onHandshakeComplete;
      if (typeof O != "function") {
        O = Xe;
      }
      let q;
      this._onHandshakeComplete = (...L) => {
        if (this._debug) {
          this._debug("Handshake completed");
        }
        if (q === undefined) {
          q = true;
        } else {
          q = false;
        }
        const j = this._queue;
        if (j) {
          this._queue = undefined;
          if (this._debug) {
            this._debug(`Draining outbound queue (${j.length}) ...`);
          }
          for (let se = 0; se < j.length; ++se) {
            const le = j[se];
            let _e = this._packetRW.write.finalize(le);
            if (_e === le) {
              const d = this._cipher.allocPacket(le.length);
              d.set(le, 5);
              _e = d;
            }
            V(this, _e);
          }
          if (this._debug) {
            this._debug("... finished draining outbound queue");
          }
        }
        if (q && this._server && this._kex.remoteExtInfoEnabled) {
          $e(this);
        }
        O(...L);
      };
      this._queue = undefined;
      const E = P.messageHandlers;
      if (typeof E == "object" && E !== null) {
        this._handlers = E;
      } else {
        this._handlers = {};
      }
      this._onPayload = Je.bind(this);
      this._server = !!P.server;
      this._banner = undefined;
      let A;
      if (this._server) {
        if (typeof P.hostKeys != "object" || P.hostKeys === null) {
          throw new Error("Missing server host key(s)");
        }
        this._hostKeys = P.hostKeys;
        if (typeof P.greeting == "string" && P.greeting.length) {
          A = P.greeting.slice(-2) === `\r
` ? P.greeting : `${P.greeting}\r
`;
        }
        if (typeof P.banner == "string" && P.banner.length) {
          this._banner = P.banner.slice(-2) === `\r
` ? P.banner : `${P.banner}\r
`;
        }
      } else {
        this._hostKeys = undefined;
      }
      let h = P.offer;
      if (typeof h != "object" || h === null) {
        h = this._server ? n : Q;
      } else if (h.constructor !== B) {
        if (this._server) {
          h.kex = h.kex.concat(["kex-strict-s-v00@openssh.com"]);
        } else {
          h.kex = h.kex.concat(["ext-info-c", "kex-strict-c-v00@openssh.com"]);
        }
        h = new B(h);
      }
      this._kex = undefined;
      this._strictMode = undefined;
      this._kexinit = undefined;
      this._offer = h;
      this._cipher = new r(0, this._onWrite);
      this._decipher = undefined;
      this._skipNextInboundPacket = false;
      this._packetRW = {
        read: new oe(),
        write: new Z(this)
      };
      this._hostVerifier = !this._server && typeof P.hostVerifier == "function" ? P.hostVerifier : undefined;
      this._parse = Pe;
      this._buffer = undefined;
      this._authsQueue = [];
      this._authenticated = false;
      this._remoteIdentRaw = undefined;
      let S;
      if (typeof P.ident == "string") {
        this._identRaw = Buffer.from(`SSH-2.0-${P.ident}`);
        S = Buffer.allocUnsafe(this._identRaw.length + 2);
        S.set(this._identRaw, 0);
        S[S.length - 2] = 13;
        S[S.length - 1] = 10;
      } else if (Buffer.isBuffer(P.ident)) {
        const L = Buffer.allocUnsafe(8 + P.ident.length);
        L.latin1Write("SSH-2.0-", 0, 8);
        L.set(P.ident, 8);
        this._identRaw = L;
        S = Buffer.allocUnsafe(L.length + 2);
        S.set(L, 0);
        S[S.length - 2] = 13;
        S[S.length - 1] = 10;
      } else {
        this._identRaw = we;
        S = Me;
      }
      this._compatFlags = 0;
      if (this._debug) {
        if (e) {
          this._debug("Custom crypto binding available");
        } else {
          this._debug("Custom crypto binding not available");
        }
      }
      if (this._debug) {
        this._debug(`Local ident: ${p(this._identRaw.toString())}`);
      }
      this.start = () => {
        this.start = undefined;
        if (A) {
          this._onWrite(A);
        }
        this._onWrite(S);
      };
    }
    _destruct(P) {
      this._packetRW.read.cleanup();
      this._packetRW.write.cleanup();
      if (this._cipher) {
        this._cipher.free();
      }
      if (this._decipher) {
        this._decipher.free();
      }
      if (typeof P != "string" || P.length === 0) {
        P = "fatal error";
      }
      this.parse = () => {
        throw new Error(`Instance unusable after ${P}`);
      };
      this._onWrite = () => {
        throw new Error(`Instance unusable after ${P}`);
      };
      this._destruct = undefined;
    }
    cleanup() {
      if (this._destruct) {
        this._destruct();
      }
    }
    parse(P, W, g) {
      while (W < g) {
        W = this._parse(P, W, g);
      }
    }
    disconnect(P) {
      let g = this._packetRW.write.allocStartKEX;
      const f = this._packetRW.write.alloc(13, true);
      const o = g + 13;
      if (!be.has(P)) {
        P = m.PROTOCOL_ERROR;
      }
      f[g] = v.DISCONNECT;
      F(f, P, ++g);
      f.fill(0, g += 4, o);
      if (this._debug) {
        this._debug(`Outbound: Sending DISCONNECT (${P})`);
      }
      V(this, this._packetRW.write.finalize(f, true), true);
    }
    ping() {
      const P = this._packetRW.write.allocStart;
      const W = this._packetRW.write.alloc(Le.length);
      W.set(Le, P);
      if (this._debug) {
        this._debug("Outbound: Sending ping (GLOBAL_REQUEST: keepalive@openssh.com)");
      }
      V(this, this._packetRW.write.finalize(W));
    }
    rekey() {
      if (this._kexinit === undefined) {
        if (this._debug) {
          this._debug("Outbound: Initiated explicit rekey");
        }
        this._queue = [];
        C(this);
      } else if (this._debug) {
        this._debug("Outbound: Ignoring rekey during handshake");
      }
    }
    requestSuccess(P) {
      let W = this._packetRW.write.allocStart;
      let g;
      if (Buffer.isBuffer(P)) {
        g = this._packetRW.write.alloc(1 + P.length);
        g[W] = v.REQUEST_SUCCESS;
        g.set(P, ++W);
      } else {
        g = this._packetRW.write.alloc(1);
        g[W] = v.REQUEST_SUCCESS;
      }
      if (this._debug) {
        this._debug("Outbound: Sending REQUEST_SUCCESS");
      }
      V(this, this._packetRW.write.finalize(g));
    }
    requestFailure() {
      const P = this._packetRW.write.allocStart;
      const W = this._packetRW.write.alloc(1);
      W[P] = v.REQUEST_FAILURE;
      if (this._debug) {
        this._debug("Outbound: Sending REQUEST_FAILURE");
      }
      V(this, this._packetRW.write.finalize(W));
    }
    channelSuccess(P) {
      let W = this._packetRW.write.allocStart;
      const g = this._packetRW.write.alloc(5);
      g[W] = v.CHANNEL_SUCCESS;
      F(g, P, ++W);
      if (this._debug) {
        this._debug(`Outbound: Sending CHANNEL_SUCCESS (r:${P})`);
      }
      V(this, this._packetRW.write.finalize(g));
    }
    channelFailure(P) {
      let W = this._packetRW.write.allocStart;
      const g = this._packetRW.write.alloc(5);
      g[W] = v.CHANNEL_FAILURE;
      F(g, P, ++W);
      if (this._debug) {
        this._debug(`Outbound: Sending CHANNEL_FAILURE (r:${P})`);
      }
      V(this, this._packetRW.write.finalize(g));
    }
    channelEOF(P) {
      let W = this._packetRW.write.allocStart;
      const g = this._packetRW.write.alloc(5);
      g[W] = v.CHANNEL_EOF;
      F(g, P, ++W);
      if (this._debug) {
        this._debug(`Outbound: Sending CHANNEL_EOF (r:${P})`);
      }
      V(this, this._packetRW.write.finalize(g));
    }
    channelClose(P) {
      let W = this._packetRW.write.allocStart;
      const g = this._packetRW.write.alloc(5);
      g[W] = v.CHANNEL_CLOSE;
      F(g, P, ++W);
      if (this._debug) {
        this._debug(`Outbound: Sending CHANNEL_CLOSE (r:${P})`);
      }
      V(this, this._packetRW.write.finalize(g));
    }
    channelWindowAdjust(P, W) {
      let g = this._packetRW.write.allocStart;
      const f = this._packetRW.write.alloc(9);
      f[g] = v.CHANNEL_WINDOW_ADJUST;
      F(f, P, ++g);
      F(f, W, g += 4);
      if (this._debug) {
        this._debug(`Outbound: Sending CHANNEL_WINDOW_ADJUST (r:${P}, ${W})`);
      }
      V(this, this._packetRW.write.finalize(f));
    }
    channelData(P, W) {
      const g = Buffer.isBuffer(W);
      const f = g ? W.length : Buffer.byteLength(W);
      let o = this._packetRW.write.allocStart;
      const b = this._packetRW.write.alloc(9 + f);
      b[o] = v.CHANNEL_DATA;
      F(b, P, ++o);
      F(b, f, o += 4);
      if (g) {
        b.set(W, o += 4);
      } else {
        b.utf8Write(W, o += 4, f);
      }
      if (this._debug) {
        this._debug(`Outbound: Sending CHANNEL_DATA (r:${P}, ${f})`);
      }
      V(this, this._packetRW.write.finalize(b));
    }
    channelExtData(P, W, g) {
      const f = Buffer.isBuffer(W);
      const o = f ? W.length : Buffer.byteLength(W);
      let b = this._packetRW.write.allocStart;
      const O = this._packetRW.write.alloc(13 + o);
      O[b] = v.CHANNEL_EXTENDED_DATA;
      F(O, P, ++b);
      F(O, g, b += 4);
      F(O, o, b += 4);
      if (f) {
        O.set(W, b += 4);
      } else {
        O.utf8Write(W, b += 4, o);
      }
      if (this._debug) {
        this._debug(`Outbound: Sending CHANNEL_EXTENDED_DATA (r:${P})`);
      }
      V(this, this._packetRW.write.finalize(O));
    }
    channelOpenConfirm(P, W, g, f) {
      let o = this._packetRW.write.allocStart;
      const b = this._packetRW.write.alloc(17);
      b[o] = v.CHANNEL_OPEN_CONFIRMATION;
      F(b, P, ++o);
      F(b, W, o += 4);
      F(b, g, o += 4);
      F(b, f, o += 4);
      if (this._debug) {
        this._debug(`Outbound: Sending CHANNEL_OPEN_CONFIRMATION (r:${P}, l:${W})`);
      }
      V(this, this._packetRW.write.finalize(b));
    }
    channelOpenFail(P, W, g) {
      if (typeof g != "string") {
        g = "";
      }
      const f = Buffer.byteLength(g);
      let o = this._packetRW.write.allocStart;
      const b = this._packetRW.write.alloc(13 + f + 4);
      b[o] = v.CHANNEL_OPEN_FAILURE;
      F(b, P, ++o);
      F(b, W, o += 4);
      F(b, f, o += 4);
      o += 4;
      if (f) {
        b.utf8Write(g, o, f);
        o += f;
      }
      F(b, 0, o);
      if (this._debug) {
        this._debug(`Outbound: Sending CHANNEL_OPEN_FAILURE (r:${P})`);
      }
      V(this, this._packetRW.write.finalize(b));
    }
    service(P) {
      if (this._server) {
        throw new Error("Client-only method called in server mode");
      }
      const W = Buffer.byteLength(P);
      let g = this._packetRW.write.allocStart;
      const f = this._packetRW.write.alloc(5 + W);
      f[g] = v.SERVICE_REQUEST;
      F(f, W, ++g);
      f.utf8Write(P, g += 4, W);
      if (this._debug) {
        this._debug(`Outbound: Sending SERVICE_REQUEST (${P})`);
      }
      V(this, this._packetRW.write.finalize(f));
    }
    authPassword(P, W, g) {
      if (this._server) {
        throw new Error("Client-only method called in server mode");
      }
      const f = Buffer.byteLength(P);
      const o = Buffer.byteLength(W);
      const b = g ? Buffer.byteLength(g) : 0;
      let O = this._packetRW.write.allocStart;
      const q = this._packetRW.write.alloc(5 + f + 4 + 14 + 4 + 8 + 1 + 4 + o + (g ? 4 + b : 0));
      q[O] = v.USERAUTH_REQUEST;
      F(q, f, ++O);
      q.utf8Write(P, O += 4, f);
      F(q, 14, O += f);
      q.utf8Write("ssh-connection", O += 4, 14);
      F(q, 8, O += 14);
      q.utf8Write("password", O += 4, 8);
      q[O += 8] = g ? 1 : 0;
      F(q, o, ++O);
      if (Buffer.isBuffer(W)) {
        $(W, q, 0, o, O += 4);
      } else {
        q.utf8Write(W, O += 4, o);
      }
      if (g) {
        F(q, b, O += o);
        if (Buffer.isBuffer(g)) {
          $(g, q, 0, b, O += 4);
        } else {
          q.utf8Write(g, O += 4, b);
        }
        if (this._debug) {
          this._debug("Outbound: Sending USERAUTH_REQUEST (changed password)");
        }
      } else if (this._debug) {
        this._debug("Outbound: Sending USERAUTH_REQUEST (password)");
      }
      this._authsQueue.push("password");
      V(this, this._packetRW.write.finalize(q));
    }
    authPK(P, W, g, f) {
      if (this._server) {
        throw new Error("Client-only method called in server mode");
      }
      W = X(W);
      if (W instanceof Error) {
        throw new Error("Invalid key");
      }
      const o = W.type;
      W = W.getPublicSSH();
      if (typeof g == "function") {
        f = g;
        g = undefined;
      }
      g ||= o;
      const b = Buffer.byteLength(P);
      const O = Buffer.byteLength(g);
      const q = W.length;
      const E = this._kex.sessionID;
      const A = E.length;
      const h = (f ? 4 + A : 0) + 1 + 4 + b + 4 + 14 + 4 + 9 + 1 + 4 + O + 4 + q;
      let S;
      let L;
      if (f) {
        S = Buffer.allocUnsafe(h);
        L = 0;
        F(S, A, L);
        S.set(E, L += 4);
        L += A;
      } else {
        S = this._packetRW.write.alloc(h);
        L = this._packetRW.write.allocStart;
      }
      S[L] = v.USERAUTH_REQUEST;
      F(S, b, ++L);
      S.utf8Write(P, L += 4, b);
      F(S, 14, L += b);
      S.utf8Write("ssh-connection", L += 4, 14);
      F(S, 9, L += 14);
      S.utf8Write("publickey", L += 4, 9);
      S[L += 9] = f ? 1 : 0;
      F(S, O, ++L);
      S.utf8Write(g, L += 4, O);
      F(S, q, L += O);
      S.set(W, L += 4);
      if (!f) {
        this._authsQueue.push("publickey");
        if (this._debug) {
          this._debug("Outbound: Sending USERAUTH_REQUEST (publickey -- check)");
        }
        V(this, this._packetRW.write.finalize(S));
        return;
      }
      f(S, j => {
        j = J(j, o);
        if (j === false) {
          throw new Error("Error while converting handshake signature");
        }
        const se = j.length;
        L = this._packetRW.write.allocStart;
        S = this._packetRW.write.alloc(5 + b + 4 + 14 + 4 + 9 + 1 + 4 + O + 4 + q + 4 + 4 + O + 4 + se);
        S[L] = v.USERAUTH_REQUEST;
        F(S, b, ++L);
        S.utf8Write(P, L += 4, b);
        F(S, 14, L += b);
        S.utf8Write("ssh-connection", L += 4, 14);
        F(S, 9, L += 14);
        S.utf8Write("publickey", L += 4, 9);
        S[L += 9] = 1;
        F(S, O, ++L);
        S.utf8Write(g, L += 4, O);
        F(S, q, L += O);
        S.set(W, L += 4);
        F(S, 4 + O + 4 + se, L += q);
        F(S, O, L += 4);
        S.utf8Write(g, L += 4, O);
        F(S, se, L += O);
        S.set(j, L += 4);
        this._authsQueue.push("publickey");
        if (this._debug) {
          this._debug("Outbound: Sending USERAUTH_REQUEST (publickey)");
        }
        V(this, this._packetRW.write.finalize(S));
      });
    }
    authHostbased(P, W, g, f, o, b) {
      if (this._server) {
        throw new Error("Client-only method called in server mode");
      }
      W = X(W);
      if (W instanceof Error) {
        throw new Error("Invalid key");
      }
      const O = W.type;
      W = W.getPublicSSH();
      if (typeof o == "function") {
        b = o;
        o = undefined;
      }
      o ||= O;
      const q = Buffer.byteLength(P);
      const E = Buffer.byteLength(o);
      const A = W.length;
      const h = this._kex.sessionID;
      const S = h.length;
      const L = Buffer.byteLength(g);
      const j = Buffer.byteLength(f);
      const se = Buffer.allocUnsafe(4 + S + 1 + 4 + q + 4 + 14 + 4 + 9 + 4 + E + 4 + A + 4 + L + 4 + j);
      let le = 0;
      F(se, S, le);
      se.set(h, le += 4);
      se[le += S] = v.USERAUTH_REQUEST;
      F(se, q, ++le);
      se.utf8Write(P, le += 4, q);
      F(se, 14, le += q);
      se.utf8Write("ssh-connection", le += 4, 14);
      F(se, 9, le += 14);
      se.utf8Write("hostbased", le += 4, 9);
      F(se, E, le += 9);
      se.utf8Write(o, le += 4, E);
      F(se, A, le += E);
      se.set(W, le += 4);
      F(se, L, le += A);
      se.utf8Write(g, le += 4, L);
      F(se, j, le += L);
      se.utf8Write(f, le += 4, j);
      b(se, _e => {
        _e = J(_e, O);
        if (!_e) {
          throw new Error("Error while converting handshake signature");
        }
        const d = _e.length;
        const c = se.length - S - 4;
        le = this._packetRW.write.allocStart;
        const t = this._packetRW.write.alloc(c + 4 + 4 + E + 4 + d);
        $(se, t, 4 + S, se.length, le);
        F(t, 4 + E + 4 + d, le += c);
        F(t, E, le += 4);
        t.utf8Write(o, le += 4, E);
        F(t, d, le += E);
        t.set(_e, le += 4);
        this._authsQueue.push("hostbased");
        if (this._debug) {
          this._debug("Outbound: Sending USERAUTH_REQUEST (hostbased)");
        }
        V(this, this._packetRW.write.finalize(t));
      });
    }
    authKeyboard(P) {
      if (this._server) {
        throw new Error("Client-only method called in server mode");
      }
      const W = Buffer.byteLength(P);
      let g = this._packetRW.write.allocStart;
      const f = this._packetRW.write.alloc(5 + W + 4 + 14 + 4 + 20 + 4 + 4);
      f[g] = v.USERAUTH_REQUEST;
      F(f, W, ++g);
      f.utf8Write(P, g += 4, W);
      F(f, 14, g += W);
      f.utf8Write("ssh-connection", g += 4, 14);
      F(f, 20, g += 14);
      f.utf8Write("keyboard-interactive", g += 4, 20);
      F(f, 0, g += 20);
      F(f, 0, g += 4);
      this._authsQueue.push("keyboard-interactive");
      if (this._debug) {
        this._debug("Outbound: Sending USERAUTH_REQUEST (keyboard-interactive)");
      }
      V(this, this._packetRW.write.finalize(f));
    }
    authNone(P) {
      if (this._server) {
        throw new Error("Client-only method called in server mode");
      }
      const W = Buffer.byteLength(P);
      let g = this._packetRW.write.allocStart;
      const f = this._packetRW.write.alloc(5 + W + 4 + 14 + 4 + 4);
      f[g] = v.USERAUTH_REQUEST;
      F(f, W, ++g);
      f.utf8Write(P, g += 4, W);
      F(f, 14, g += W);
      f.utf8Write("ssh-connection", g += 4, 14);
      F(f, 4, g += 14);
      f.utf8Write("none", g += 4, 4);
      this._authsQueue.push("none");
      if (this._debug) {
        this._debug("Outbound: Sending USERAUTH_REQUEST (none)");
      }
      V(this, this._packetRW.write.finalize(f));
    }
    authInfoRes(P) {
      if (this._server) {
        throw new Error("Client-only method called in server mode");
      }
      let W = 0;
      let g;
      if (P) {
        g = new Array(P.length);
        for (let b = 0; b < P.length; ++b) {
          const O = Buffer.byteLength(P[b]);
          g[b] = O;
          W += 4 + O;
        }
      }
      let f = this._packetRW.write.allocStart;
      const o = this._packetRW.write.alloc(5 + W);
      o[f] = v.USERAUTH_INFO_RESPONSE;
      if (P) {
        F(o, P.length, ++f);
        f += 4;
        for (let b = 0; b < P.length; ++b) {
          const O = g[b];
          F(o, O, f);
          f += 4;
          if (O) {
            o.utf8Write(P[b], f, O);
            f += O;
          }
        }
      } else {
        F(o, 0, ++f);
      }
      if (this._debug) {
        this._debug("Outbound: Sending USERAUTH_INFO_RESPONSE");
      }
      V(this, this._packetRW.write.finalize(o));
    }
    tcpipForward(P, W, g) {
      if (this._server) {
        throw new Error("Client-only method called in server mode");
      }
      const f = Buffer.byteLength(P);
      let o = this._packetRW.write.allocStart;
      const b = this._packetRW.write.alloc(23 + f + 4);
      b[o] = v.GLOBAL_REQUEST;
      F(b, 13, ++o);
      b.utf8Write("tcpip-forward", o += 4, 13);
      b[o += 13] = g === undefined || g === true ? 1 : 0;
      F(b, f, ++o);
      b.utf8Write(P, o += 4, f);
      F(b, W, o += f);
      if (this._debug) {
        this._debug("Outbound: Sending GLOBAL_REQUEST (tcpip-forward)");
      }
      V(this, this._packetRW.write.finalize(b));
    }
    cancelTcpipForward(P, W, g) {
      if (this._server) {
        throw new Error("Client-only method called in server mode");
      }
      const f = Buffer.byteLength(P);
      let o = this._packetRW.write.allocStart;
      const b = this._packetRW.write.alloc(30 + f + 4);
      b[o] = v.GLOBAL_REQUEST;
      F(b, 20, ++o);
      b.utf8Write("cancel-tcpip-forward", o += 4, 20);
      b[o += 20] = g === undefined || g === true ? 1 : 0;
      F(b, f, ++o);
      b.utf8Write(P, o += 4, f);
      F(b, W, o += f);
      if (this._debug) {
        this._debug("Outbound: Sending GLOBAL_REQUEST (cancel-tcpip-forward)");
      }
      V(this, this._packetRW.write.finalize(b));
    }
    openssh_streamLocalForward(P, W) {
      if (this._server) {
        throw new Error("Client-only method called in server mode");
      }
      const g = Buffer.byteLength(P);
      let f = this._packetRW.write.allocStart;
      const o = this._packetRW.write.alloc(41 + g);
      o[f] = v.GLOBAL_REQUEST;
      F(o, 31, ++f);
      o.utf8Write("streamlocal-forward@openssh.com", f += 4, 31);
      o[f += 31] = W === undefined || W === true ? 1 : 0;
      F(o, g, ++f);
      o.utf8Write(P, f += 4, g);
      if (this._debug) {
        this._debug("Outbound: Sending GLOBAL_REQUEST (streamlocal-forward@openssh.com)");
      }
      V(this, this._packetRW.write.finalize(o));
    }
    openssh_cancelStreamLocalForward(P, W) {
      if (this._server) {
        throw new Error("Client-only method called in server mode");
      }
      const g = Buffer.byteLength(P);
      let f = this._packetRW.write.allocStart;
      const o = this._packetRW.write.alloc(48 + g);
      o[f] = v.GLOBAL_REQUEST;
      F(o, 38, ++f);
      o.utf8Write("cancel-streamlocal-forward@openssh.com", f += 4, 38);
      o[f += 38] = W === undefined || W === true ? 1 : 0;
      F(o, g, ++f);
      o.utf8Write(P, f += 4, g);
      if (this._debug) {
        this._debug("Outbound: Sending GLOBAL_REQUEST (cancel-streamlocal-forward@openssh.com)");
      }
      V(this, this._packetRW.write.finalize(o));
    }
    directTcpip(P, W, g, f) {
      if (this._server) {
        throw new Error("Client-only method called in server mode");
      }
      const o = Buffer.byteLength(f.srcIP);
      const b = Buffer.byteLength(f.dstIP);
      let O = this._packetRW.write.allocStart;
      const q = this._packetRW.write.alloc(33 + o + 4 + 4 + b + 4);
      q[O] = v.CHANNEL_OPEN;
      F(q, 12, ++O);
      q.utf8Write("direct-tcpip", O += 4, 12);
      F(q, P, O += 12);
      F(q, W, O += 4);
      F(q, g, O += 4);
      F(q, b, O += 4);
      q.utf8Write(f.dstIP, O += 4, b);
      F(q, f.dstPort, O += b);
      F(q, o, O += 4);
      q.utf8Write(f.srcIP, O += 4, o);
      F(q, f.srcPort, O += o);
      if (this._debug) {
        this._debug(`Outbound: Sending CHANNEL_OPEN (r:${P}, direct-tcpip)`);
      }
      V(this, this._packetRW.write.finalize(q));
    }
    openssh_directStreamLocal(P, W, g, f) {
      if (this._server) {
        throw new Error("Client-only method called in server mode");
      }
      const o = Buffer.byteLength(f.socketPath);
      let b = this._packetRW.write.allocStart;
      const O = this._packetRW.write.alloc(51 + o + 4 + 4);
      O[b] = v.CHANNEL_OPEN;
      F(O, 30, ++b);
      O.utf8Write("direct-streamlocal@openssh.com", b += 4, 30);
      F(O, P, b += 30);
      F(O, W, b += 4);
      F(O, g, b += 4);
      F(O, o, b += 4);
      O.utf8Write(f.socketPath, b += 4, o);
      re(O, 0, b += o, b + 8);
      if (this._debug) {
        this._debug(`Outbound: Sending CHANNEL_OPEN (r:${P}, direct-streamlocal@openssh.com)`);
      }
      V(this, this._packetRW.write.finalize(O));
    }
    openssh_noMoreSessions(P) {
      if (this._server) {
        throw new Error("Client-only method called in server mode");
      }
      let W = this._packetRW.write.allocStart;
      const g = this._packetRW.write.alloc(34);
      g[W] = v.GLOBAL_REQUEST;
      F(g, 28, ++W);
      g.utf8Write("no-more-sessions@openssh.com", W += 4, 28);
      g[W += 28] = P === undefined || P === true ? 1 : 0;
      if (this._debug) {
        this._debug("Outbound: Sending GLOBAL_REQUEST (no-more-sessions@openssh.com)");
      }
      V(this, this._packetRW.write.finalize(g));
    }
    session(P, W, g) {
      if (this._server) {
        throw new Error("Client-only method called in server mode");
      }
      let f = this._packetRW.write.allocStart;
      const o = this._packetRW.write.alloc(24);
      o[f] = v.CHANNEL_OPEN;
      F(o, 7, ++f);
      o.utf8Write("session", f += 4, 7);
      F(o, P, f += 7);
      F(o, W, f += 4);
      F(o, g, f += 4);
      if (this._debug) {
        this._debug(`Outbound: Sending CHANNEL_OPEN (r:${P}, session)`);
      }
      V(this, this._packetRW.write.finalize(o));
    }
    windowChange(P, W, g, f, o) {
      if (this._server) {
        throw new Error("Client-only method called in server mode");
      }
      let b = this._packetRW.write.allocStart;
      const O = this._packetRW.write.alloc(39);
      O[b] = v.CHANNEL_REQUEST;
      F(O, P, ++b);
      F(O, 13, b += 4);
      O.utf8Write("window-change", b += 4, 13);
      O[b += 13] = 0;
      F(O, g, ++b);
      F(O, W, b += 4);
      F(O, o, b += 4);
      F(O, f, b += 4);
      if (this._debug) {
        this._debug(`Outbound: Sending CHANNEL_REQUEST (r:${P}, window-change)`);
      }
      V(this, this._packetRW.write.finalize(O));
    }
    pty(P, W, g, f, o, b, O, q) {
      if (this._server) {
        throw new Error("Client-only method called in server mode");
      }
      if (!b || !b.length) {
        b = "vt100";
      }
      if (O && !Buffer.isBuffer(O) && !Array.isArray(O) && typeof O == "object" && O !== null) {
        O = Be(O);
      }
      if (!O || !O.length) {
        O = Qe;
      }
      const E = b.length;
      const A = O.length;
      let h = this._packetRW.write.allocStart;
      const S = this._packetRW.write.alloc(21 + E + 4 + 4 + 4 + 4 + 4 + A);
      S[h] = v.CHANNEL_REQUEST;
      F(S, P, ++h);
      F(S, 7, h += 4);
      S.utf8Write("pty-req", h += 4, 7);
      S[h += 7] = q === undefined || q === true ? 1 : 0;
      F(S, E, ++h);
      S.utf8Write(b, h += 4, E);
      F(S, g, h += E);
      F(S, W, h += 4);
      F(S, o, h += 4);
      F(S, f, h += 4);
      F(S, A, h += 4);
      h += 4;
      if (Array.isArray(O)) {
        for (let L = 0; L < A; ++L) {
          S[h++] = O[L];
        }
      } else if (Buffer.isBuffer(O)) {
        S.set(O, h);
      }
      if (this._debug) {
        this._debug(`Outbound: Sending CHANNEL_REQUEST (r:${P}, pty-req)`);
      }
      V(this, this._packetRW.write.finalize(S));
    }
    shell(P, W) {
      if (this._server) {
        throw new Error("Client-only method called in server mode");
      }
      let g = this._packetRW.write.allocStart;
      const f = this._packetRW.write.alloc(15);
      f[g] = v.CHANNEL_REQUEST;
      F(f, P, ++g);
      F(f, 5, g += 4);
      f.utf8Write("shell", g += 4, 5);
      f[g += 5] = W === undefined || W === true ? 1 : 0;
      if (this._debug) {
        this._debug(`Outbound: Sending CHANNEL_REQUEST (r:${P}, shell)`);
      }
      V(this, this._packetRW.write.finalize(f));
    }
    exec(P, W, g) {
      if (this._server) {
        throw new Error("Client-only method called in server mode");
      }
      const f = Buffer.isBuffer(W);
      const o = f ? W.length : Buffer.byteLength(W);
      let b = this._packetRW.write.allocStart;
      const O = this._packetRW.write.alloc(18 + o);
      O[b] = v.CHANNEL_REQUEST;
      F(O, P, ++b);
      F(O, 4, b += 4);
      O.utf8Write("exec", b += 4, 4);
      O[b += 4] = g === undefined || g === true ? 1 : 0;
      F(O, o, ++b);
      if (f) {
        O.set(W, b += 4);
      } else {
        O.utf8Write(W, b += 4, o);
      }
      if (this._debug) {
        this._debug(`Outbound: Sending CHANNEL_REQUEST (r:${P}, exec: ${W})`);
      }
      V(this, this._packetRW.write.finalize(O));
    }
    signal(P, W) {
      if (this._server) {
        throw new Error("Client-only method called in server mode");
      }
      const g = W;
      W = W.toUpperCase();
      if (W.slice(0, 3) === "SIG") {
        W = W.slice(3);
      }
      if (R[W] !== 1) {
        throw new Error(`Invalid signal: ${g}`);
      }
      const f = W.length;
      let o = this._packetRW.write.allocStart;
      const b = this._packetRW.write.alloc(20 + f);
      b[o] = v.CHANNEL_REQUEST;
      F(b, P, ++o);
      F(b, 6, o += 4);
      b.utf8Write("signal", o += 4, 6);
      b[o += 6] = 0;
      F(b, f, ++o);
      b.utf8Write(W, o += 4, f);
      if (this._debug) {
        this._debug(`Outbound: Sending CHANNEL_REQUEST (r:${P}, signal: ${W})`);
      }
      V(this, this._packetRW.write.finalize(b));
    }
    env(P, W, g, f) {
      if (this._server) {
        throw new Error("Client-only method called in server mode");
      }
      const o = Buffer.byteLength(W);
      const b = Buffer.isBuffer(g);
      const O = b ? g.length : Buffer.byteLength(g);
      let q = this._packetRW.write.allocStart;
      const E = this._packetRW.write.alloc(17 + o + 4 + O);
      E[q] = v.CHANNEL_REQUEST;
      F(E, P, ++q);
      F(E, 3, q += 4);
      E.utf8Write("env", q += 4, 3);
      E[q += 3] = f === undefined || f === true ? 1 : 0;
      F(E, o, ++q);
      E.utf8Write(W, q += 4, o);
      F(E, O, q += o);
      if (b) {
        E.set(g, q += 4);
      } else {
        E.utf8Write(g, q += 4, O);
      }
      if (this._debug) {
        this._debug(`Outbound: Sending CHANNEL_REQUEST (r:${P}, env: ${W}=${g})`);
      }
      V(this, this._packetRW.write.finalize(E));
    }
    x11Forward(P, W, g) {
      if (this._server) {
        throw new Error("Client-only method called in server mode");
      }
      const f = W.protocol;
      const o = W.cookie;
      const b = Buffer.isBuffer(f);
      const O = b ? f.length : Buffer.byteLength(f);
      const q = Buffer.isBuffer(o);
      const E = q ? o.length : Buffer.byteLength(o);
      let A = this._packetRW.write.allocStart;
      const h = this._packetRW.write.alloc(22 + O + 4 + E + 4);
      h[A] = v.CHANNEL_REQUEST;
      F(h, P, ++A);
      F(h, 7, A += 4);
      h.utf8Write("x11-req", A += 4, 7);
      h[A += 7] = g === undefined || g === true ? 1 : 0;
      h[++A] = W.single ? 1 : 0;
      F(h, O, ++A);
      if (b) {
        h.set(f, A += 4);
      } else {
        h.utf8Write(f, A += 4, O);
      }
      F(h, E, A += O);
      if (q) {
        h.set(o, A += 4);
      } else {
        h.latin1Write(o, A += 4, E);
      }
      F(h, W.screen || 0, A += E);
      if (this._debug) {
        this._debug(`Outbound: Sending CHANNEL_REQUEST (r:${P}, x11-req)`);
      }
      V(this, this._packetRW.write.finalize(h));
    }
    subsystem(P, W, g) {
      if (this._server) {
        throw new Error("Client-only method called in server mode");
      }
      const f = Buffer.byteLength(W);
      let o = this._packetRW.write.allocStart;
      const b = this._packetRW.write.alloc(23 + f);
      b[o] = v.CHANNEL_REQUEST;
      F(b, P, ++o);
      F(b, 9, o += 4);
      b.utf8Write("subsystem", o += 4, 9);
      b[o += 9] = g === undefined || g === true ? 1 : 0;
      F(b, f, ++o);
      b.utf8Write(W, o += 4, f);
      if (this._debug) {
        this._debug(`Outbound: Sending CHANNEL_REQUEST (r:${P}, subsystem: ${W})`);
      }
      V(this, this._packetRW.write.finalize(b));
    }
    openssh_agentForward(P, W) {
      if (this._server) {
        throw new Error("Client-only method called in server mode");
      }
      let g = this._packetRW.write.allocStart;
      const f = this._packetRW.write.alloc(36);
      f[g] = v.CHANNEL_REQUEST;
      F(f, P, ++g);
      F(f, 26, g += 4);
      f.utf8Write("auth-agent-req@openssh.com", g += 4, 26);
      f[g += 26] = W === undefined || W === true ? 1 : 0;
      if (this._debug) {
        this._debug(`Outbound: Sending CHANNEL_REQUEST (r:${P}, auth-agent-req@openssh.com)`);
      }
      V(this, this._packetRW.write.finalize(f));
    }
    openssh_hostKeysProve(P) {
      if (this._server) {
        throw new Error("Client-only method called in server mode");
      }
      let W = 0;
      const g = [];
      for (const b of P) {
        const O = b.getPublicSSH();
        W += 4 + O.length;
        g.push(O);
      }
      let f = this._packetRW.write.allocStart;
      const o = this._packetRW.write.alloc(35 + W);
      o[f] = v.GLOBAL_REQUEST;
      F(o, 29, ++f);
      o.utf8Write("hostkeys-prove-00@openssh.com", f += 4, 29);
      o[f += 29] = 1;
      ++f;
      for (const b of g) {
        F(o, b.length, f);
        $(b, o, 0, b.length, f += 4);
        f += b.length;
      }
      if (this._debug) {
        this._debug("Outbound: Sending GLOBAL_REQUEST (hostkeys-prove-00@openssh.com)");
      }
      V(this, this._packetRW.write.finalize(o));
    }
    serviceAccept(P) {
      if (!this._server) {
        throw new Error("Server-only method called in client mode");
      }
      const W = Buffer.byteLength(P);
      let g = this._packetRW.write.allocStart;
      const f = this._packetRW.write.alloc(5 + W);
      f[g] = v.SERVICE_ACCEPT;
      F(f, W, ++g);
      f.utf8Write(P, g += 4, W);
      if (this._debug) {
        this._debug(`Outbound: Sending SERVICE_ACCEPT (${P})`);
      }
      V(this, this._packetRW.write.finalize(f));
      if (this._server && this._banner && P === "ssh-userauth") {
        const o = this._banner;
        this._banner = undefined;
        const b = Buffer.byteLength(o);
        g = this._packetRW.write.allocStart;
        const O = this._packetRW.write.alloc(5 + b + 4);
        O[g] = v.USERAUTH_BANNER;
        F(O, b, ++g);
        O.utf8Write(o, g += 4, b);
        F(O, 0, g += b);
        if (this._debug) {
          this._debug("Outbound: Sending USERAUTH_BANNER");
        }
        V(this, this._packetRW.write.finalize(O));
      }
    }
    forwardedTcpip(P, W, g, f) {
      if (!this._server) {
        throw new Error("Server-only method called in client mode");
      }
      const o = Buffer.byteLength(f.boundAddr);
      const b = Buffer.byteLength(f.remoteAddr);
      let O = this._packetRW.write.allocStart;
      const q = this._packetRW.write.alloc(36 + o + 4 + 4 + b + 4);
      q[O] = v.CHANNEL_OPEN;
      F(q, 15, ++O);
      q.utf8Write("forwarded-tcpip", O += 4, 15);
      F(q, P, O += 15);
      F(q, W, O += 4);
      F(q, g, O += 4);
      F(q, o, O += 4);
      q.utf8Write(f.boundAddr, O += 4, o);
      F(q, f.boundPort, O += o);
      F(q, b, O += 4);
      q.utf8Write(f.remoteAddr, O += 4, b);
      F(q, f.remotePort, O += b);
      if (this._debug) {
        this._debug(`Outbound: Sending CHANNEL_OPEN (r:${P}, forwarded-tcpip)`);
      }
      V(this, this._packetRW.write.finalize(q));
    }
    x11(P, W, g, f) {
      if (!this._server) {
        throw new Error("Server-only method called in client mode");
      }
      const o = Buffer.byteLength(f.originAddr);
      let b = this._packetRW.write.allocStart;
      const O = this._packetRW.write.alloc(24 + o + 4);
      O[b] = v.CHANNEL_OPEN;
      F(O, 3, ++b);
      O.utf8Write("x11", b += 4, 3);
      F(O, P, b += 3);
      F(O, W, b += 4);
      F(O, g, b += 4);
      F(O, o, b += 4);
      O.utf8Write(f.originAddr, b += 4, o);
      F(O, f.originPort, b += o);
      if (this._debug) {
        this._debug(`Outbound: Sending CHANNEL_OPEN (r:${P}, x11)`);
      }
      V(this, this._packetRW.write.finalize(O));
    }
    openssh_authAgent(P, W, g) {
      if (!this._server) {
        throw new Error("Server-only method called in client mode");
      }
      let f = this._packetRW.write.allocStart;
      const o = this._packetRW.write.alloc(39);
      o[f] = v.CHANNEL_OPEN;
      F(o, 22, ++f);
      o.utf8Write("auth-agent@openssh.com", f += 4, 22);
      F(o, P, f += 22);
      F(o, W, f += 4);
      F(o, g, f += 4);
      if (this._debug) {
        this._debug(`Outbound: Sending CHANNEL_OPEN (r:${P}, auth-agent@openssh.com)`);
      }
      V(this, this._packetRW.write.finalize(o));
    }
    openssh_forwardedStreamLocal(P, W, g, f) {
      if (!this._server) {
        throw new Error("Server-only method called in client mode");
      }
      const o = Buffer.byteLength(f.socketPath);
      let b = this._packetRW.write.allocStart;
      const O = this._packetRW.write.alloc(54 + o + 4);
      O[b] = v.CHANNEL_OPEN;
      F(O, 33, ++b);
      O.utf8Write("forwarded-streamlocal@openssh.com", b += 4, 33);
      F(O, P, b += 33);
      F(O, W, b += 4);
      F(O, g, b += 4);
      F(O, o, b += 4);
      O.utf8Write(f.socketPath, b += 4, o);
      F(O, 0, b += o);
      if (this._debug) {
        this._debug(`Outbound: Sending CHANNEL_OPEN (r:${P}, forwarded-streamlocal@openssh.com)`);
      }
      V(this, this._packetRW.write.finalize(O));
    }
    exitStatus(P, W) {
      if (!this._server) {
        throw new Error("Server-only method called in client mode");
      }
      let g = this._packetRW.write.allocStart;
      const f = this._packetRW.write.alloc(25);
      f[g] = v.CHANNEL_REQUEST;
      F(f, P, ++g);
      F(f, 11, g += 4);
      f.utf8Write("exit-status", g += 4, 11);
      f[g += 11] = 0;
      F(f, W, ++g);
      if (this._debug) {
        this._debug(`Outbound: Sending CHANNEL_REQUEST (r:${P}, exit-status: ${W})`);
      }
      V(this, this._packetRW.write.finalize(f));
    }
    exitSignal(P, W, g, f) {
      if (!this._server) {
        throw new Error("Server-only method called in client mode");
      }
      const o = W;
      if (typeof o != "string" || !o) {
        throw new Error(`Invalid signal: ${o}`);
      }
      let b = W.toUpperCase();
      if (b.slice(0, 3) === "SIG") {
        b = b.slice(3);
      }
      if (R[b] !== 1) {
        throw new Error(`Invalid signal: ${o}`);
      }
      const O = Buffer.byteLength(b);
      const q = f ? Buffer.byteLength(f) : 0;
      let E = this._packetRW.write.allocStart;
      const A = this._packetRW.write.alloc(25 + O + 1 + 4 + q + 4);
      A[E] = v.CHANNEL_REQUEST;
      F(A, P, ++E);
      F(A, 11, E += 4);
      A.utf8Write("exit-signal", E += 4, 11);
      A[E += 11] = 0;
      F(A, O, ++E);
      A.utf8Write(b, E += 4, O);
      A[E += O] = g ? 1 : 0;
      F(A, q, ++E);
      E += 4;
      if (q) {
        A.utf8Write(f, E, q);
        E += q;
      }
      F(A, 0, E);
      if (this._debug) {
        this._debug(`Outbound: Sending CHANNEL_REQUEST (r:${P}, exit-signal: ${W})`);
      }
      V(this, this._packetRW.write.finalize(A));
    }
    authFailure(P, W) {
      if (!this._server) {
        throw new Error("Server-only method called in client mode");
      }
      if (this._authsQueue.length === 0) {
        throw new Error("No auth in progress");
      }
      let g;
      if (typeof P == "boolean") {
        W = P;
        P = undefined;
      }
      if (P) {
        g = [];
        for (let O = 0; O < P.length; ++O) {
          if (P[O].toLowerCase() !== "none") {
            g.push(P[O]);
          }
        }
        g = g.join(",");
      } else {
        g = "";
      }
      const f = g.length;
      let o = this._packetRW.write.allocStart;
      const b = this._packetRW.write.alloc(5 + f + 1);
      b[o] = v.USERAUTH_FAILURE;
      F(b, f, ++o);
      b.utf8Write(g, o += 4, f);
      b[o += f] = W === true ? 1 : 0;
      this._authsQueue.shift();
      if (this._debug) {
        this._debug("Outbound: Sending USERAUTH_FAILURE");
      }
      V(this, this._packetRW.write.finalize(b));
    }
    authSuccess() {
      if (!this._server) {
        throw new Error("Server-only method called in client mode");
      }
      if (this._authsQueue.length === 0) {
        throw new Error("No auth in progress");
      }
      const P = this._packetRW.write.allocStart;
      const W = this._packetRW.write.alloc(1);
      W[P] = v.USERAUTH_SUCCESS;
      this._authsQueue.shift();
      this._authenticated = true;
      if (this._debug) {
        this._debug("Outbound: Sending USERAUTH_SUCCESS");
      }
      V(this, this._packetRW.write.finalize(W));
      if (this._kex.negotiated.cs.compress === "zlib@openssh.com") {
        this._packetRW.read = new he();
      }
      if (this._kex.negotiated.sc.compress === "zlib@openssh.com") {
        this._packetRW.write = new U(this);
      }
    }
    authPKOK(P, W) {
      if (!this._server) {
        throw new Error("Server-only method called in client mode");
      }
      if (this._authsQueue.length === 0 || this._authsQueue[0] !== "publickey") {
        throw new Error("\"publickey\" auth not in progress");
      }
      const g = Buffer.byteLength(P);
      const f = W.length;
      let o = this._packetRW.write.allocStart;
      const b = this._packetRW.write.alloc(5 + g + 4 + f);
      b[o] = v.USERAUTH_PK_OK;
      F(b, g, ++o);
      b.utf8Write(P, o += 4, g);
      F(b, f, o += g);
      b.set(W, o += 4);
      this._authsQueue.shift();
      if (this._debug) {
        this._debug("Outbound: Sending USERAUTH_PK_OK");
      }
      V(this, this._packetRW.write.finalize(b));
    }
    authPasswdChg(P) {
      if (!this._server) {
        throw new Error("Server-only method called in client mode");
      }
      const W = Buffer.byteLength(P);
      let g = this._packetRW.write.allocStart;
      const f = this._packetRW.write.alloc(5 + W + 4);
      f[g] = v.USERAUTH_PASSWD_CHANGEREQ;
      F(f, W, ++g);
      f.utf8Write(P, g += 4, W);
      F(f, 0, g += W);
      if (this._debug) {
        this._debug("Outbound: Sending USERAUTH_PASSWD_CHANGEREQ");
      }
      V(this, this._packetRW.write.finalize(f));
    }
    authInfoReq(P, W, g) {
      if (!this._server) {
        throw new Error("Server-only method called in client mode");
      }
      let f = 0;
      const o = P ? Buffer.byteLength(P) : 0;
      const b = W ? Buffer.byteLength(W) : 0;
      for (let E = 0; E < g.length; ++E) {
        f += 4 + Buffer.byteLength(g[E].prompt) + 1;
      }
      let O = this._packetRW.write.allocStart;
      const q = this._packetRW.write.alloc(5 + o + 4 + b + 4 + 4 + f);
      q[O] = v.USERAUTH_INFO_REQUEST;
      F(q, o, ++O);
      O += 4;
      if (P) {
        q.utf8Write(P, O, o);
        O += o;
      }
      F(q, b, O);
      O += 4;
      if (W) {
        q.utf8Write(W, O, b);
        O += b;
      }
      F(q, 0, O);
      F(q, g.length, O += 4);
      O += 4;
      for (let E = 0; E < g.length; ++E) {
        const A = g[E];
        const h = Buffer.byteLength(A.prompt);
        F(q, h, O);
        O += 4;
        if (h) {
          q.utf8Write(A.prompt, O, h);
          O += h;
        }
        q[O++] = A.echo ? 1 : 0;
      }
      if (this._debug) {
        this._debug("Outbound: Sending USERAUTH_INFO_REQUEST");
      }
      V(this, this._packetRW.write.finalize(q));
    }
  }
  const Re = /^SSH-(2\.0|1\.99)-([^ ]+)(?: (.*))?$/;
  function Pe(de, P, W) {
    let g;
    let f;
    if (this._buffer) {
      g = Buffer.allocUnsafe(this._buffer.length + (W - P));
      g.set(this._buffer, 0);
      if (P === 0) {
        g.set(de, this._buffer.length);
      } else {
        g.set(new Uint8Array(de.buffer, de.byteOffset + P, W - P), this._buffer.length);
      }
      f = this._buffer.length;
      P = 0;
    } else {
      g = de;
      f = 0;
    }
    const o = P;
    let b = P;
    let O = P;
    let q = false;
    let E = 0;
    let A = 0;
    for (; P < g.length; ++P) {
      const h = g[P];
      if (h === 13) {
        q = true;
        continue;
      }
      if (h === 10) {
        if (O > b && O - b > 4 && g[b] === 83 && g[b + 1] === 83 && g[b + 2] === 72 && g[b + 3] === 45) {
          const S = g.latin1Slice(o, O + 1);
          const L = b === o ? S : S.slice(b - o);
          const j = Re.exec(L);
          if (!j) {
            throw new Error("Invalid identification string");
          }
          const se = {
            greeting: b === o ? "" : S.slice(0, b - o),
            identRaw: L,
            versions: {
              protocol: j[1],
              software: j[2]
            },
            comments: j[3]
          };
          this._remoteIdentRaw = Buffer.from(L);
          if (this._debug) {
            this._debug(`Remote ident: ${p(L)}`);
          }
          this._compatFlags = Oe(se);
          this._buffer = undefined;
          this._decipher = new y(0, w.bind(this, {
            firstPacket: true
          }));
          this._parse = qe;
          this._onHeader(se);
          if (this._destruct) {
            C(this);
            return P + 1 - f;
          } else {
            return W;
          }
        }
        if (this._server) {
          throw new Error("Greetings from clients not permitted");
        }
        if (++A > Ue) {
          throw new Error("Max greeting lines exceeded");
        }
        q = false;
        b = P + 1;
        E = 0;
      } else {
        if (q) {
          throw new Error("Invalid header: expected newline");
        }
        if (++E >= Ne) {
          throw new Error("Header line too long");
        }
      }
      O = P;
    }
    this._buffer ||= Y(g, o);
    return P - f;
  }
  function qe(de, P, W) {
    return this._decipher.decrypt(de, P, W);
  }
  function Je(de) {
    this._onPacket();
    if (de.length === 0) {
      if (this._debug) {
        this._debug("Inbound: Skipping empty packet payload");
      }
      return;
    }
    de = this._packetRW.read.read(de);
    const P = de[0];
    if (P === v.USERAUTH_SUCCESS && !this._server && !this._authenticated) {
      this._authenticated = true;
      if (this._kex.negotiated.cs.compress === "zlib@openssh.com") {
        this._packetRW.write = new U(this);
      }
      if (this._kex.negotiated.sc.compress === "zlib@openssh.com") {
        this._packetRW.read = new he();
      }
    }
    const W = K[P];
    if (W === undefined) {
      if (this._debug) {
        this._debug(`Inbound: Unsupported message type: ${P}`);
      }
      return;
    }
    return W(this, de);
  }
  function Oe(de) {
    const P = de.versions.software;
    let W = 0;
    for (const g of k) {
      if (typeof g[0] == "string") {
        if (P === g[0]) {
          W |= g[1];
        }
      } else if (g[0].test(P)) {
        W |= g[1];
      }
    }
    return W;
  }
  function Be(de) {
    const P = Object.keys(de);
    const W = Buffer.allocUnsafe(P.length * 5 + 1);
    let g = 0;
    for (let f = 0; f < P.length; ++f) {
      const o = P[f];
      if (o === "TTY_OP_END") {
        continue;
      }
      const b = I[o];
      if (b === undefined) {
        continue;
      }
      const O = de[o];
      if (typeof O == "number" && isFinite(O)) {
        W[g++] = b;
        W[g++] = O >>> 24;
        W[g++] = O >>> 16;
        W[g++] = O >>> 8;
        W[g++] = O;
      }
    }
    W[g++] = I.TTY_OP_END;
    if (g < W.length) {
      return Y(W, 0, g);
    } else {
      return W;
    }
  }
  function $e(de) {
    let P = "ecdsa-sha2-nistp256,ecdsa-sha2-nistp384,ecdsa-sha2-nistp521rsa-sha2-512,rsa-sha2-256,ssh-rsa,ssh-dss";
    if (M) {
      P = `ssh-ed25519,${P}`;
    }
    const W = Buffer.byteLength(P);
    let g = de._packetRW.write.allocStart;
    const f = de._packetRW.write.alloc(28 + W);
    f[g] = v.EXT_INFO;
    F(f, 1, ++g);
    F(f, 15, g += 4);
    f.utf8Write("server-sig-algs", g += 4, 15);
    F(f, W, g += 15);
    f.utf8Write(P, g += 4, W);
    if (de._debug) {
      de._debug("Outbound: Sending EXT_INFO");
    }
    V(de, de._packetRW.write.finalize(f));
  }
  Xn = Ke;
  return Xn;
}
var sn = {};
var jr;
function Ss() {
  if (jr) {
    return sn;
  }
  jr = 1;
  const p = mr;
  const {
    inspect: e
  } = Sr;
  function r(v) {
    let R = "";
    let I = v.length;
    const Q = v[0] === "-" ? 1 : 0;
    for (; I >= Q + 4; I -= 3) {
      R = `_${v.slice(I - 3, I)}${R}`;
    }
    return `${v.slice(0, I)}${R}`;
  }
  function y(v, R) {
    p(typeof R == "string", "`thing` has to be of type string");
    if (Array.isArray(v)) {
      const I = v.length;
      p(I > 0, "At least one expected value needs to be specified");
      v = v.map(Q => String(Q));
      if (I > 2) {
        return `one of ${R} ${v.slice(0, I - 1).join(", ")}, or ${v[I - 1]}`;
      } else if (I === 2) {
        return `one of ${R} ${v[0]} or ${v[1]}`;
      } else {
        return `of ${R} ${v[0]}`;
      }
    }
    return `of ${R} ${String(v)}`;
  }
  sn.ERR_INTERNAL_ASSERTION = class Pi extends Error {
    constructor(R) {
      super();
      Error.captureStackTrace(this, Pi);
      const I = `This is caused by either a bug in ssh2 or incorrect usage of ssh2 internals.
Please open an issue with this stack trace at https://github.com/mscdex/ssh2/issues
`;
      this.message = R === undefined ? I : `${R}
${I}`;
    }
  };
  const k = 4294967296;
  const m = (() => {
    try {
      return new Function("return 2n ** 32n")();
    } catch {}
  })();
  sn.ERR_OUT_OF_RANGE = class Oi extends RangeError {
    constructor(R, I, Q, n) {
      super();
      Error.captureStackTrace(this, Oi);
      p(I, "Missing \"range\" argument");
      let B = n ? R : `The value of "${R}" is out of range.`;
      let C;
      if (Number.isInteger(Q) && Math.abs(Q) > k) {
        C = r(String(Q));
      } else if (typeof Q == "bigint") {
        C = String(Q);
        if (Q > m || Q < -m) {
          C = r(C);
        }
        C += "n";
      } else {
        C = e(Q);
      }
      B += ` It must be ${I}. Received ${C}`;
      this.message = B;
    }
  };
  class M extends TypeError {
    constructor(R, I, Q) {
      super();
      Error.captureStackTrace(this, M);
      p(typeof R == "string", "'name' must be a string");
      let n;
      if (typeof I == "string" && I.startsWith("not ")) {
        n = "must not be";
        I = I.replace(/^not /, "");
      } else {
        n = "must be";
      }
      let B;
      if (R.endsWith(" argument")) {
        B = `The ${R} ${n} ${y(I, "type")}`;
      } else {
        const C = R.includes(".") ? "property" : "argument";
        B = `The "${R}" ${C} ${n} ${y(I, "type")}`;
      }
      B += `. Received type ${typeof Q}`;
      this.message = B;
    }
  }
  sn.ERR_INVALID_ARG_TYPE = M;
  sn.validateNumber = function (R, I) {
    if (typeof R != "number") {
      throw new M(I, "number", R);
    }
  };
  return sn;
}
var jn;
var Vr;
function Cn() {
  if (Vr) {
    return jn;
  }
  Vr = 1;
  const p = yr;
  const e = En;
  const {
    constants: r
  } = e;
  const {
    Readable: y,
    Writable: k
  } = br;
  const {
    inherits: m,
    types: {
      isDate: M
    }
  } = Sr;
  const v = Buffer[Symbol.species];
  const {
    bufferCopy: R,
    bufferSlice: I,
    makeBufferParser: Q,
    writeUInt32BE: n
  } = Kt();
  const B = {
    SIZE: 1,
    UIDGID: 2,
    PERMISSIONS: 4,
    ACMODTIME: 8,
    EXTENDED: 2147483648
  };
  const C = Buffer.alloc(28);
  const w = {
    OK: 0,
    EOF: 1,
    NO_SUCH_FILE: 2,
    PERMISSION_DENIED: 3,
    FAILURE: 4,
    BAD_MESSAGE: 5,
    NO_CONNECTION: 6,
    CONNECTION_LOST: 7,
    OP_UNSUPPORTED: 8
  };
  const X = new Map(Object.values(w).map(d => [d, 1]));
  const K = {
    [w.OK]: "No error",
    [w.EOF]: "End of file",
    [w.NO_SUCH_FILE]: "No such file or directory",
    [w.PERMISSION_DENIED]: "Permission denied",
    [w.FAILURE]: "Failure",
    [w.BAD_MESSAGE]: "Bad message",
    [w.NO_CONNECTION]: "No connection",
    [w.CONNECTION_LOST]: "Connection lost",
    [w.OP_UNSUPPORTED]: "Operation unsupported"
  };
  const $ = {
    INIT: 1,
    OPEN: 3,
    CLOSE: 4,
    READ: 5,
    WRITE: 6,
    LSTAT: 7,
    FSTAT: 8,
    SETSTAT: 9,
    FSETSTAT: 10,
    OPENDIR: 11,
    READDIR: 12,
    REMOVE: 13,
    MKDIR: 14,
    RMDIR: 15,
    REALPATH: 16,
    STAT: 17,
    RENAME: 18,
    READLINK: 19,
    SYMLINK: 20,
    EXTENDED: 200
  };
  const re = {
    VERSION: 2,
    STATUS: 101,
    HANDLE: 102,
    DATA: 103,
    NAME: 104,
    ATTRS: 105,
    EXTENDED: 201
  };
  const Y = {
    READ: 1,
    WRITE: 2,
    APPEND: 4,
    CREAT: 8,
    TRUNC: 16,
    EXCL: 32
  };
  const J = 2048;
  const V = 4294967295;
  const F = Buffer.from([0, 0, 0, 5, $.INIT, 0, 0, 0, 3]);
  const oe = Buffer.from([0, 0, 0, 5, re.VERSION, 0, 0, 0, 3]);
  const Z = /^SSH-2.0-(?:OpenSSH|dropbear)/;
  const he = 262144;
  const U = Q();
  const Ie = {
    readable: false,
    writable: false,
    push: d => {},
    once: () => {},
    on: () => {},
    emit: () => {},
    end: () => {}
  };
  function be() {}
  class we extends p {
    constructor(c, t, s) {
      super();
      if (typeof s != "object" || !s) {
        s = {};
      }
      const a = c._protocol._remoteIdentRaw;
      this.server = !!s.server;
      this._debug = typeof s.debug == "function" ? s.debug : undefined;
      this._isOpenSSH = a && Z.test(a);
      this._version = -1;
      this._extensions = {};
      this._biOpt = s.biOpt;
      this._pktLenBytes = 0;
      this._pktLen = 0;
      this._pktPos = 0;
      this._pktType = 0;
      this._pktData = undefined;
      this._writeReqid = -1;
      this._requests = {};
      this._maxInPktLen = he;
      this._maxOutPktLen = 34000;
      this._maxReadLen = (this._isOpenSSH ? he : 34000) - J;
      this._maxWriteLen = (this._isOpenSSH ? he : 34000) - J;
      this.maxOpenHandles = undefined;
      this._client = c;
      this._protocol = c._protocol;
      this._callbacks = [];
      this._hasX11 = false;
      this._exit = {
        code: undefined,
        signal: undefined,
        dump: undefined,
        desc: undefined
      };
      this._waitWindow = false;
      this._chunkcb = undefined;
      this._buffer = [];
      this.type = t.type;
      this.subtype = undefined;
      this.incoming = t.incoming;
      this.outgoing = t.outgoing;
      this.stderr = Ie;
      this.readable = true;
    }
    push(c) {
      if (c === null) {
        W(this);
        if (!this.readable) {
          return;
        }
        this.readable = false;
        this.emit("end");
        return;
      }
      let t = 0;
      while (t < c.length) {
        if (this._pktLenBytes < 4) {
          let u = Math.min(4 - this._pktLenBytes, c.length - t);
          for (this._pktLenBytes += u; u--;) {
            this._pktLen = (this._pktLen << 8) + c[t++];
          }
          if (this._pktLenBytes < 4) {
            return;
          }
          if (this._pktLen === 0) {
            return P(this, "Invalid packet length");
          }
          if (this._pktLen > this._maxInPktLen) {
            const x = this._maxInPktLen;
            return P(this, `Packet length ${this._pktLen} exceeds max length of ${x}`);
          }
          if (t >= c.length) {
            return;
          }
        }
        if (this._pktPos < this._pktLen) {
          const u = Math.min(this._pktLen - this._pktPos, c.length - t);
          if (t !== 0 || u !== c.length) {
            if (u === this._pktLen) {
              this._pkt = new v(c.buffer, c.byteOffset + t, u);
            } else {
              this._pkt ||= Buffer.allocUnsafe(this._pktLen);
              this._pkt.set(new Uint8Array(c.buffer, c.byteOffset + t, u), this._pktPos);
            }
          } else if (u === this._pktLen) {
            this._pkt = c;
          } else {
            this._pkt ||= Buffer.allocUnsafe(this._pktLen);
            this._pkt.set(c, this._pktPos);
          }
          t += u;
          this._pktPos += u;
          if (this._pktPos < this._pktLen) {
            return;
          }
        }
        const s = this._pkt[0];
        const a = this._pkt;
        this._pktLen = 0;
        this._pktLenBytes = 0;
        this._pkt = undefined;
        this._pktPos = 0;
        const l = this.server ? o[s] : f[s];
        if (!l) {
          return P(this, `Unknown packet type ${s}`);
        }
        if (this._version === -1) {
          if (this.server) {
            if (s !== $.INIT) {
              return P(this, `Expected INIT packet, got ${s}`);
            }
          } else if (s !== re.VERSION) {
            return P(this, `Expected VERSION packet, got ${s}`);
          }
        }
        if (l(this, a) === false) {
          return;
        }
      }
    }
    end() {
      this.destroy();
    }
    destroy() {
      if (this.outgoing.state === "open" || this.outgoing.state === "eof") {
        this.outgoing.state = "closing";
        this._protocol.channelClose(this.outgoing.id);
      }
    }
    _init() {
      this._init = be;
      if (!this.server) {
        Be(this, F);
      }
    }
    createReadStream(c, t) {
      if (this.server) {
        throw new Error("Client-only method called in server mode");
      }
      return new se(this, c, t);
    }
    createWriteStream(c, t) {
      if (this.server) {
        throw new Error("Client-only method called in server mode");
      }
      return new _e(this, c, t);
    }
    open(c, t, s, a) {
      if (this.server) {
        throw new Error("Client-only method called in server mode");
      }
      if (typeof s == "function") {
        a = s;
        s = undefined;
      }
      const l = typeof t == "number" ? t : qe(t);
      if (l === null) {
        throw new Error(`Unknown flags string: ${t}`);
      }
      let u = 0;
      let x = 0;
      if (typeof s == "string" || typeof s == "number") {
        s = {
          mode: s
        };
      }
      if (typeof s == "object" && s !== null) {
        s = Xe(s);
        u = s.flags;
        x = s.nb;
      }
      const D = Buffer.byteLength(c);
      let G = 9;
      const ie = Buffer.allocUnsafe(13 + D + 4 + 4 + x);
      n(ie, ie.length - 4, 0);
      ie[4] = $.OPEN;
      const ue = this._writeReqid = this._writeReqid + 1 & V;
      n(ie, ue, 5);
      n(ie, D, G);
      ie.utf8Write(c, G += 4, D);
      n(ie, l, G += D);
      n(ie, u, G += 4);
      if (x) {
        G += 4;
        if (x === C.length) {
          ie.set(C, G);
        } else {
          R(C, ie, 0, x, G);
        }
        G += x;
      }
      this._requests[ue] = {
        cb: a
      };
      const pe = Be(this, ie);
      if (this._debug) {
        this._debug(`SFTP: Outbound: ${pe ? "Buffered" : "Sending"} OPEN`);
      }
    }
    close(c, t) {
      if (this.server) {
        throw new Error("Client-only method called in server mode");
      }
      if (!Buffer.isBuffer(c)) {
        throw new Error("handle is not a Buffer");
      }
      const s = c.length;
      let a = 9;
      const l = Buffer.allocUnsafe(13 + s);
      n(l, l.length - 4, 0);
      l[4] = $.CLOSE;
      const u = this._writeReqid = this._writeReqid + 1 & V;
      n(l, u, 5);
      n(l, s, a);
      l.set(c, a += 4);
      this._requests[u] = {
        cb: t
      };
      const x = Be(this, l);
      if (this._debug) {
        this._debug(`SFTP: Outbound: ${x ? "Buffered" : "Sending"} CLOSE`);
      }
    }
    read(c, t, s, a, l, u) {
      if (this.server) {
        throw new Error("Client-only method called in server mode");
      }
      if (!Buffer.isBuffer(c)) {
        throw new Error("handle is not a Buffer");
      }
      if (!Buffer.isBuffer(t)) {
        throw new Error("buffer is not a Buffer");
      }
      if (s >= t.length) {
        throw new Error("offset is out of bounds");
      }
      if (s + a > t.length) {
        throw new Error("length extends beyond buffer");
      }
      if (l === null) {
        throw new Error("null position currently unsupported");
      }
      Ne(this, c, t, s, a, l, u);
    }
    readData(c, t, s, a, l, u) {
      this.read(c, t, s, a, l, u);
    }
    write(c, t, s, a, l, u) {
      if (this.server) {
        throw new Error("Client-only method called in server mode");
      }
      if (!Buffer.isBuffer(c)) {
        throw new Error("handle is not a Buffer");
      }
      if (!Buffer.isBuffer(t)) {
        throw new Error("buffer is not a Buffer");
      }
      if (s > t.length) {
        throw new Error("offset is out of bounds");
      }
      if (s + a > t.length) {
        throw new Error("length extends beyond buffer");
      }
      if (l === null) {
        throw new Error("null position currently unsupported");
      }
      if (!a) {
        if (u) {
          process.nextTick(u, undefined, 0);
        }
        return;
      }
      const x = this._maxWriteLen;
      const D = Math.max(a - x, 0);
      const G = l;
      if (D) {
        a = x;
      }
      const ie = c.length;
      let ue = 9;
      const pe = Buffer.allocUnsafe(13 + ie + 8 + 4 + a);
      n(pe, pe.length - 4, 0);
      pe[4] = $.WRITE;
      const Te = this._writeReqid = this._writeReqid + 1 & V;
      n(pe, Te, 5);
      n(pe, ie, ue);
      pe.set(c, ue += 4);
      ue += ie;
      for (let ve = 7; ve >= 0; --ve) {
        pe[ue + ve] = l & 255;
        l /= 256;
      }
      n(pe, a, ue += 8);
      R(t, pe, s, s + a, ue += 4);
      this._requests[Te] = {
        cb: ve => {
          if (ve) {
            if (typeof u == "function") {
              u(ve);
            }
          } else if (D) {
            this.write(c, t, s + a, D, G + a, u);
          } else if (typeof u == "function") {
            u(undefined, s + a);
          }
        }
      };
      const He = Be(this, pe);
      if (this._debug) {
        const ve = He ? "Sent" : "Buffered";
        this._debug(`SFTP: Outbound: ${ve} WRITE (id:${Te})`);
      }
    }
    writeData(c, t, s, a, l, u) {
      this.write(c, t, s, a, l, u);
    }
    fastGet(c, t, s, a) {
      if (this.server) {
        throw new Error("Client-only method called in server mode");
      }
      Ue(this, e, c, t, s, a);
    }
    fastPut(c, t, s, a) {
      if (this.server) {
        throw new Error("Client-only method called in server mode");
      }
      Ue(e, this, c, t, s, a);
    }
    readFile(c, t, s) {
      if (this.server) {
        throw new Error("Client-only method called in server mode");
      }
      let a;
      if (typeof s == "function") {
        a = s;
      } else if (typeof t == "function") {
        a = t;
        t = undefined;
      }
      if (typeof t == "string") {
        t = {
          encoding: t,
          flag: "r"
        };
      } else if (!t) {
        t = {
          encoding: null,
          flag: "r"
        };
      } else if (typeof t != "object") {
        throw new TypeError("Bad arguments");
      }
      const l = t.encoding;
      if (l && !Buffer.isEncoding(l)) {
        throw new Error(`Unknown encoding: ${l}`);
      }
      let u;
      let x;
      let D;
      let G = 0;
      let ie;
      let ue = 0;
      const pe = t.flag || "r";
      const Te = () => {
        if (u === 0) {
          x = Buffer.allocUnsafe(8192);
          this.read(ie, x, 0, 8192, ue, He);
        } else {
          this.read(ie, x, G, u - G, ue, He);
        }
      };
      const He = (Ze, nt) => {
        let st;
        if (Ze) {
          st = Ze.code === w.EOF;
          if (!st) {
            return this.close(ie, () => a && a(Ze));
          }
        } else {
          st = false;
        }
        if (st || u === 0 && nt === 0) {
          return ve();
        }
        ue += nt;
        G += nt;
        if (u !== 0) {
          if (G === u) {
            ve();
          } else {
            Te();
          }
        } else {
          D.push(I(x, 0, nt));
          Te();
        }
      };
      He._wantEOFError = true;
      const ve = () => {
        this.close(ie, Ze => {
          if (u === 0) {
            x = Buffer.concat(D, G);
          } else if (G < u) {
            x = I(x, 0, G);
          }
          if (l) {
            x = x.toString(l);
          }
          return a && a(Ze, x);
        });
      };
      this.open(c, pe, 438, (Ze, nt) => {
        if (Ze) {
          return a && a(Ze);
        }
        ie = nt;
        const st = (rt, yt) => {
          if (rt) {
            this.stat(c, (wt, kt) => {
              if (wt) {
                return this.close(ie, () => {
                  if (a) {
                    a(rt);
                  }
                });
              }
              st(null, kt);
            });
            return;
          }
          u = yt.size || 0;
          if (u === 0) {
            D = [];
            return Te();
          }
          x = Buffer.allocUnsafe(u);
          Te();
        };
        this.fstat(ie, st);
      });
    }
    writeFile(c, t, s, a) {
      if (this.server) {
        throw new Error("Client-only method called in server mode");
      }
      let l;
      if (typeof a == "function") {
        l = a;
      } else if (typeof s == "function") {
        l = s;
        s = undefined;
      }
      if (typeof s == "string") {
        s = {
          encoding: s,
          mode: 438,
          flag: "w"
        };
      } else if (!s) {
        s = {
          encoding: "utf8",
          mode: 438,
          flag: "w"
        };
      } else if (typeof s != "object") {
        throw new TypeError("Bad arguments");
      }
      if (s.encoding && !Buffer.isEncoding(s.encoding)) {
        throw new Error(`Unknown encoding: ${s.encoding}`);
      }
      const u = s.flag || "w";
      this.open(c, u, s.mode, (x, D) => {
        if (x) {
          if (l) {
            l(x);
          }
        } else {
          const G = Buffer.isBuffer(t) ? t : Buffer.from("" + t, s.encoding || "utf8");
          const ie = /a/.test(u) ? null : 0;
          if (ie === null) {
            const ue = (pe, Te) => {
              if (pe) {
                this.stat(c, (He, ve) => {
                  if (He) {
                    return this.close(D, () => {
                      if (l) {
                        l(pe);
                      }
                    });
                  }
                  ue(null, ve);
                });
                return;
              }
              Le(this, D, G, 0, G.length, Te.size, l);
            };
            this.fstat(D, ue);
            return;
          }
          Le(this, D, G, 0, G.length, ie, l);
        }
      });
    }
    appendFile(c, t, s, a) {
      if (this.server) {
        throw new Error("Client-only method called in server mode");
      }
      let l;
      if (typeof a == "function") {
        l = a;
      } else if (typeof s == "function") {
        l = s;
        s = undefined;
      }
      if (typeof s == "string") {
        s = {
          encoding: s,
          mode: 438,
          flag: "a"
        };
      } else if (!s) {
        s = {
          encoding: "utf8",
          mode: 438,
          flag: "a"
        };
      } else if (typeof s != "object") {
        throw new TypeError("Bad arguments");
      }
      if (!s.flag) {
        s = Object.assign({
          flag: "a"
        }, s);
      }
      this.writeFile(c, t, s, l);
    }
    exists(c, t) {
      if (this.server) {
        throw new Error("Client-only method called in server mode");
      }
      this.stat(c, s => {
        if (t) {
          t(!s);
        }
      });
    }
    unlink(c, t) {
      if (this.server) {
        throw new Error("Client-only method called in server mode");
      }
      const s = Buffer.byteLength(c);
      let a = 9;
      const l = Buffer.allocUnsafe(13 + s);
      n(l, l.length - 4, 0);
      l[4] = $.REMOVE;
      const u = this._writeReqid = this._writeReqid + 1 & V;
      n(l, u, 5);
      n(l, s, a);
      l.utf8Write(c, a += 4, s);
      this._requests[u] = {
        cb: t
      };
      const x = Be(this, l);
      if (this._debug) {
        this._debug(`SFTP: Outbound: ${x ? "Buffered" : "Sending"} REMOVE`);
      }
    }
    rename(c, t, s) {
      if (this.server) {
        throw new Error("Client-only method called in server mode");
      }
      const a = Buffer.byteLength(c);
      const l = Buffer.byteLength(t);
      let u = 9;
      const x = Buffer.allocUnsafe(13 + a + 4 + l);
      n(x, x.length - 4, 0);
      x[4] = $.RENAME;
      const D = this._writeReqid = this._writeReqid + 1 & V;
      n(x, D, 5);
      n(x, a, u);
      x.utf8Write(c, u += 4, a);
      n(x, l, u += a);
      x.utf8Write(t, u += 4, l);
      this._requests[D] = {
        cb: s
      };
      const G = Be(this, x);
      if (this._debug) {
        this._debug(`SFTP: Outbound: ${G ? "Buffered" : "Sending"} RENAME`);
      }
    }
    mkdir(c, t, s) {
      if (this.server) {
        throw new Error("Client-only method called in server mode");
      }
      let a = 0;
      let l = 0;
      if (typeof t == "function") {
        s = t;
        t = undefined;
      }
      if (typeof t == "object" && t !== null) {
        t = Xe(t);
        a = t.flags;
        l = t.nb;
      }
      const u = Buffer.byteLength(c);
      let x = 9;
      const D = Buffer.allocUnsafe(13 + u + 4 + l);
      n(D, D.length - 4, 0);
      D[4] = $.MKDIR;
      const G = this._writeReqid = this._writeReqid + 1 & V;
      n(D, G, 5);
      n(D, u, x);
      D.utf8Write(c, x += 4, u);
      n(D, a, x += u);
      if (l) {
        x += 4;
        if (l === C.length) {
          D.set(C, x);
        } else {
          R(C, D, 0, l, x);
        }
        x += l;
      }
      this._requests[G] = {
        cb: s
      };
      const ie = Be(this, D);
      if (this._debug) {
        this._debug(`SFTP: Outbound: ${ie ? "Buffered" : "Sending"} MKDIR`);
      }
    }
    rmdir(c, t) {
      if (this.server) {
        throw new Error("Client-only method called in server mode");
      }
      const s = Buffer.byteLength(c);
      let a = 9;
      const l = Buffer.allocUnsafe(13 + s);
      n(l, l.length - 4, 0);
      l[4] = $.RMDIR;
      const u = this._writeReqid = this._writeReqid + 1 & V;
      n(l, u, 5);
      n(l, s, a);
      l.utf8Write(c, a += 4, s);
      this._requests[u] = {
        cb: t
      };
      const x = Be(this, l);
      if (this._debug) {
        this._debug(`SFTP: Outbound: ${x ? "Buffered" : "Sending"} RMDIR`);
      }
    }
    readdir(c, t, s) {
      if (this.server) {
        throw new Error("Client-only method called in server mode");
      }
      if (typeof t == "function") {
        s = t;
        t = {};
      }
      if (typeof t != "object" || t === null) {
        t = {};
      }
      const a = !t || !t.full;
      if (!Buffer.isBuffer(c) && typeof c != "string") {
        throw new Error("missing directory handle or path");
      }
      if (typeof c == "string") {
        const ie = [];
        let ue = 0;
        const pe = (Te, He) => {
          if (Te) {
            return s(Te);
          }
          this.readdir(He, t, (ve, Ze) => {
            const nt = ve && ve.code === w.EOF;
            if (ve && !nt) {
              return this.close(He, () => s(ve));
            }
            if (nt) {
              return this.close(He, st => {
                if (st) {
                  return s(st);
                }
                s(undefined, ie);
              });
            }
            for (let st = 0; st < Ze.length; ++st, ++ue) {
              ie[ue] = Ze[st];
            }
            pe(undefined, He);
          });
        };
        return this.opendir(c, pe);
      }
      const l = c.length;
      let u = 9;
      const x = Buffer.allocUnsafe(13 + l);
      n(x, x.length - 4, 0);
      x[4] = $.READDIR;
      const D = this._writeReqid = this._writeReqid + 1 & V;
      n(x, D, 5);
      n(x, l, u);
      x.set(c, u += 4);
      this._requests[D] = {
        cb: a ? (ie, ue) => {
          if (typeof s == "function") {
            if (ie) {
              return s(ie);
            }
            for (let pe = ue.length - 1; pe >= 0; --pe) {
              if (ue[pe].filename === "." || ue[pe].filename === "..") {
                ue.splice(pe, 1);
              }
            }
            s(undefined, ue);
          }
        } : s
      };
      const G = Be(this, x);
      if (this._debug) {
        this._debug(`SFTP: Outbound: ${G ? "Buffered" : "Sending"} READDIR`);
      }
    }
    fstat(c, t) {
      if (this.server) {
        throw new Error("Client-only method called in server mode");
      }
      if (!Buffer.isBuffer(c)) {
        throw new Error("handle is not a Buffer");
      }
      const s = c.length;
      let a = 9;
      const l = Buffer.allocUnsafe(13 + s);
      n(l, l.length - 4, 0);
      l[4] = $.FSTAT;
      const u = this._writeReqid = this._writeReqid + 1 & V;
      n(l, u, 5);
      n(l, s, a);
      l.set(c, a += 4);
      this._requests[u] = {
        cb: t
      };
      const x = Be(this, l);
      if (this._debug) {
        this._debug(`SFTP: Outbound: ${x ? "Buffered" : "Sending"} FSTAT`);
      }
    }
    stat(c, t) {
      if (this.server) {
        throw new Error("Client-only method called in server mode");
      }
      const s = Buffer.byteLength(c);
      let a = 9;
      const l = Buffer.allocUnsafe(13 + s);
      n(l, l.length - 4, 0);
      l[4] = $.STAT;
      const u = this._writeReqid = this._writeReqid + 1 & V;
      n(l, u, 5);
      n(l, s, a);
      l.utf8Write(c, a += 4, s);
      this._requests[u] = {
        cb: t
      };
      const x = Be(this, l);
      if (this._debug) {
        this._debug(`SFTP: Outbound: ${x ? "Buffered" : "Sending"} STAT`);
      }
    }
    lstat(c, t) {
      if (this.server) {
        throw new Error("Client-only method called in server mode");
      }
      const s = Buffer.byteLength(c);
      let a = 9;
      const l = Buffer.allocUnsafe(13 + s);
      n(l, l.length - 4, 0);
      l[4] = $.LSTAT;
      const u = this._writeReqid = this._writeReqid + 1 & V;
      n(l, u, 5);
      n(l, s, a);
      l.utf8Write(c, a += 4, s);
      this._requests[u] = {
        cb: t
      };
      const x = Be(this, l);
      if (this._debug) {
        this._debug(`SFTP: Outbound: ${x ? "Buffered" : "Sending"} LSTAT`);
      }
    }
    opendir(c, t) {
      if (this.server) {
        throw new Error("Client-only method called in server mode");
      }
      const s = Buffer.byteLength(c);
      let a = 9;
      const l = Buffer.allocUnsafe(13 + s);
      n(l, l.length - 4, 0);
      l[4] = $.OPENDIR;
      const u = this._writeReqid = this._writeReqid + 1 & V;
      n(l, u, 5);
      n(l, s, a);
      l.utf8Write(c, a += 4, s);
      this._requests[u] = {
        cb: t
      };
      const x = Be(this, l);
      if (this._debug) {
        this._debug(`SFTP: Outbound: ${x ? "Buffered" : "Sending"} OPENDIR`);
      }
    }
    setstat(c, t, s) {
      if (this.server) {
        throw new Error("Client-only method called in server mode");
      }
      let a = 0;
      let l = 0;
      if (typeof t == "object" && t !== null) {
        t = Xe(t);
        a = t.flags;
        l = t.nb;
      } else if (typeof t == "function") {
        s = t;
      }
      const u = Buffer.byteLength(c);
      let x = 9;
      const D = Buffer.allocUnsafe(13 + u + 4 + l);
      n(D, D.length - 4, 0);
      D[4] = $.SETSTAT;
      const G = this._writeReqid = this._writeReqid + 1 & V;
      n(D, G, 5);
      n(D, u, x);
      D.utf8Write(c, x += 4, u);
      n(D, a, x += u);
      if (l) {
        x += 4;
        if (l === C.length) {
          D.set(C, x);
        } else {
          R(C, D, 0, l, x);
        }
        x += l;
      }
      this._requests[G] = {
        cb: s
      };
      const ie = Be(this, D);
      if (this._debug) {
        this._debug(`SFTP: Outbound: ${ie ? "Buffered" : "Sending"} SETSTAT`);
      }
    }
    fsetstat(c, t, s) {
      if (this.server) {
        throw new Error("Client-only method called in server mode");
      }
      if (!Buffer.isBuffer(c)) {
        throw new Error("handle is not a Buffer");
      }
      let a = 0;
      let l = 0;
      if (typeof t == "object" && t !== null) {
        t = Xe(t);
        a = t.flags;
        l = t.nb;
      } else if (typeof t == "function") {
        s = t;
      }
      const u = c.length;
      let x = 9;
      const D = Buffer.allocUnsafe(13 + u + 4 + l);
      n(D, D.length - 4, 0);
      D[4] = $.FSETSTAT;
      const G = this._writeReqid = this._writeReqid + 1 & V;
      n(D, G, 5);
      n(D, u, x);
      D.set(c, x += 4);
      n(D, a, x += u);
      if (l) {
        x += 4;
        if (l === C.length) {
          D.set(C, x);
        } else {
          R(C, D, 0, l, x);
        }
        x += l;
      }
      this._requests[G] = {
        cb: s
      };
      const ie = Be(this, D);
      if (this._debug) {
        this._debug(`SFTP: Outbound: ${ie ? "Buffered" : "Sending"} FSETSTAT`);
      }
    }
    futimes(c, t, s, a) {
      return this.fsetstat(c, {
        atime: Ke(t),
        mtime: Ke(s)
      }, a);
    }
    utimes(c, t, s, a) {
      return this.setstat(c, {
        atime: Ke(t),
        mtime: Ke(s)
      }, a);
    }
    fchown(c, t, s, a) {
      return this.fsetstat(c, {
        uid: t,
        gid: s
      }, a);
    }
    chown(c, t, s, a) {
      return this.setstat(c, {
        uid: t,
        gid: s
      }, a);
    }
    fchmod(c, t, s) {
      return this.fsetstat(c, {
        mode: t
      }, s);
    }
    chmod(c, t, s) {
      return this.setstat(c, {
        mode: t
      }, s);
    }
    readlink(c, t) {
      if (this.server) {
        throw new Error("Client-only method called in server mode");
      }
      const s = Buffer.byteLength(c);
      let a = 9;
      const l = Buffer.allocUnsafe(13 + s);
      n(l, l.length - 4, 0);
      l[4] = $.READLINK;
      const u = this._writeReqid = this._writeReqid + 1 & V;
      n(l, u, 5);
      n(l, s, a);
      l.utf8Write(c, a += 4, s);
      this._requests[u] = {
        cb: (D, G) => {
          if (typeof t == "function") {
            if (D) {
              return t(D);
            }
            if (!G || !G.length) {
              return t(new Error("Response missing link info"));
            }
            t(undefined, G[0].filename);
          }
        }
      };
      const x = Be(this, l);
      if (this._debug) {
        this._debug(`SFTP: Outbound: ${x ? "Buffered" : "Sending"} READLINK`);
      }
    }
    symlink(c, t, s) {
      if (this.server) {
        throw new Error("Client-only method called in server mode");
      }
      const a = Buffer.byteLength(t);
      const l = Buffer.byteLength(c);
      let u = 9;
      const x = Buffer.allocUnsafe(13 + a + 4 + l);
      n(x, x.length - 4, 0);
      x[4] = $.SYMLINK;
      const D = this._writeReqid = this._writeReqid + 1 & V;
      n(x, D, 5);
      if (this._isOpenSSH) {
        n(x, l, u);
        x.utf8Write(c, u += 4, l);
        n(x, a, u += l);
        x.utf8Write(t, u += 4, a);
      } else {
        n(x, a, u);
        x.utf8Write(t, u += 4, a);
        n(x, l, u += a);
        x.utf8Write(c, u += 4, l);
      }
      this._requests[D] = {
        cb: s
      };
      const G = Be(this, x);
      if (this._debug) {
        this._debug(`SFTP: Outbound: ${G ? "Buffered" : "Sending"} SYMLINK`);
      }
    }
    realpath(c, t) {
      if (this.server) {
        throw new Error("Client-only method called in server mode");
      }
      const s = Buffer.byteLength(c);
      let a = 9;
      const l = Buffer.allocUnsafe(13 + s);
      n(l, l.length - 4, 0);
      l[4] = $.REALPATH;
      const u = this._writeReqid = this._writeReqid + 1 & V;
      n(l, u, 5);
      n(l, s, a);
      l.utf8Write(c, a += 4, s);
      this._requests[u] = {
        cb: (D, G) => {
          if (typeof t == "function") {
            if (D) {
              return t(D);
            }
            if (!G || !G.length) {
              return t(new Error("Response missing path info"));
            }
            t(undefined, G[0].filename);
          }
        }
      };
      const x = Be(this, l);
      if (this._debug) {
        this._debug(`SFTP: Outbound: ${x ? "Buffered" : "Sending"} REALPATH`);
      }
    }
    ext_openssh_rename(c, t, s) {
      if (this.server) {
        throw new Error("Client-only method called in server mode");
      }
      const a = this._extensions["posix-rename@openssh.com"];
      if (!a || a !== "1") {
        throw new Error("Server does not support this extended request");
      }
      const l = Buffer.byteLength(c);
      const u = Buffer.byteLength(t);
      let x = 9;
      const D = Buffer.allocUnsafe(41 + l + 4 + u);
      n(D, D.length - 4, 0);
      D[4] = $.EXTENDED;
      const G = this._writeReqid = this._writeReqid + 1 & V;
      n(D, G, 5);
      n(D, 24, x);
      D.utf8Write("posix-rename@openssh.com", x += 4, 24);
      n(D, l, x += 24);
      D.utf8Write(c, x += 4, l);
      n(D, u, x += l);
      D.utf8Write(t, x += 4, u);
      this._requests[G] = {
        cb: s
      };
      const ie = Be(this, D);
      if (this._debug) {
        const ue = ie ? "Buffered" : "Sending";
        this._debug(`SFTP: Outbound: ${ue} posix-rename@openssh.com`);
      }
    }
    ext_openssh_statvfs(c, t) {
      if (this.server) {
        throw new Error("Client-only method called in server mode");
      }
      const s = this._extensions["statvfs@openssh.com"];
      if (!s || s !== "2") {
        throw new Error("Server does not support this extended request");
      }
      const a = Buffer.byteLength(c);
      let l = 9;
      const u = Buffer.allocUnsafe(36 + a);
      n(u, u.length - 4, 0);
      u[4] = $.EXTENDED;
      const x = this._writeReqid = this._writeReqid + 1 & V;
      n(u, x, 5);
      n(u, 19, l);
      u.utf8Write("statvfs@openssh.com", l += 4, 19);
      n(u, a, l += 19);
      u.utf8Write(c, l += 4, a);
      this._requests[x] = {
        extended: "statvfs@openssh.com",
        cb: t
      };
      const D = Be(this, u);
      if (this._debug) {
        const G = D ? "Buffered" : "Sending";
        this._debug(`SFTP: Outbound: ${G} statvfs@openssh.com`);
      }
    }
    ext_openssh_fstatvfs(c, t) {
      if (this.server) {
        throw new Error("Client-only method called in server mode");
      }
      const s = this._extensions["fstatvfs@openssh.com"];
      if (!s || s !== "2") {
        throw new Error("Server does not support this extended request");
      }
      if (!Buffer.isBuffer(c)) {
        throw new Error("handle is not a Buffer");
      }
      const a = c.length;
      let l = 9;
      const u = Buffer.allocUnsafe(37 + a);
      n(u, u.length - 4, 0);
      u[4] = $.EXTENDED;
      const x = this._writeReqid = this._writeReqid + 1 & V;
      n(u, x, 5);
      n(u, 20, l);
      u.utf8Write("fstatvfs@openssh.com", l += 4, 20);
      n(u, a, l += 20);
      u.set(c, l += 4);
      this._requests[x] = {
        extended: "fstatvfs@openssh.com",
        cb: t
      };
      const D = Be(this, u);
      if (this._debug) {
        const G = D ? "Buffered" : "Sending";
        this._debug(`SFTP: Outbound: ${G} fstatvfs@openssh.com`);
      }
    }
    ext_openssh_hardlink(c, t, s) {
      if (this.server) {
        throw new Error("Client-only method called in server mode");
      }
      if (this._extensions["hardlink@openssh.com"] !== "1") {
        throw new Error("Server does not support this extended request");
      }
      const l = Buffer.byteLength(c);
      const u = Buffer.byteLength(t);
      let x = 9;
      const D = Buffer.allocUnsafe(37 + l + 4 + u);
      n(D, D.length - 4, 0);
      D[4] = $.EXTENDED;
      const G = this._writeReqid = this._writeReqid + 1 & V;
      n(D, G, 5);
      n(D, 20, x);
      D.utf8Write("hardlink@openssh.com", x += 4, 20);
      n(D, l, x += 20);
      D.utf8Write(c, x += 4, l);
      n(D, u, x += l);
      D.utf8Write(t, x += 4, u);
      this._requests[G] = {
        cb: s
      };
      const ie = Be(this, D);
      if (this._debug) {
        const ue = ie ? "Buffered" : "Sending";
        this._debug(`SFTP: Outbound: ${ue} hardlink@openssh.com`);
      }
    }
    ext_openssh_fsync(c, t) {
      if (this.server) {
        throw new Error("Client-only method called in server mode");
      }
      if (this._extensions["fsync@openssh.com"] !== "1") {
        throw new Error("Server does not support this extended request");
      }
      if (!Buffer.isBuffer(c)) {
        throw new Error("handle is not a Buffer");
      }
      const a = c.length;
      let l = 9;
      const u = Buffer.allocUnsafe(34 + a);
      n(u, u.length - 4, 0);
      u[4] = $.EXTENDED;
      const x = this._writeReqid = this._writeReqid + 1 & V;
      n(u, x, 5);
      n(u, 17, l);
      u.utf8Write("fsync@openssh.com", l += 4, 17);
      n(u, a, l += 17);
      u.set(c, l += 4);
      this._requests[x] = {
        cb: t
      };
      const D = Be(this, u);
      if (this._debug) {
        this._debug(`SFTP: Outbound: ${D ? "Buffered" : "Sending"} fsync@openssh.com`);
      }
    }
    ext_openssh_lsetstat(c, t, s) {
      if (this.server) {
        throw new Error("Client-only method called in server mode");
      }
      if (this._extensions["lsetstat@openssh.com"] !== "1") {
        throw new Error("Server does not support this extended request");
      }
      let l = 0;
      let u = 0;
      if (typeof t == "object" && t !== null) {
        t = Xe(t);
        l = t.flags;
        u = t.nb;
      } else if (typeof t == "function") {
        s = t;
      }
      const x = Buffer.byteLength(c);
      let D = 9;
      const G = Buffer.allocUnsafe(37 + x + 4 + u);
      n(G, G.length - 4, 0);
      G[4] = $.EXTENDED;
      const ie = this._writeReqid = this._writeReqid + 1 & V;
      n(G, ie, 5);
      n(G, 20, D);
      G.utf8Write("lsetstat@openssh.com", D += 4, 20);
      n(G, x, D += 20);
      G.utf8Write(c, D += 4, x);
      n(G, l, D += x);
      if (u) {
        D += 4;
        if (u === C.length) {
          G.set(C, D);
        } else {
          R(C, G, 0, u, D);
        }
        D += u;
      }
      this._requests[ie] = {
        cb: s
      };
      const ue = Be(this, G);
      if (this._debug) {
        const pe = ue ? "Buffered" : "Sending";
        this._debug(`SFTP: Outbound: ${pe} lsetstat@openssh.com`);
      }
    }
    ext_openssh_expandPath(c, t) {
      if (this.server) {
        throw new Error("Client-only method called in server mode");
      }
      if (this._extensions["expand-path@openssh.com"] !== "1") {
        throw new Error("Server does not support this extended request");
      }
      const a = Buffer.byteLength(c);
      let l = 9;
      const u = Buffer.allocUnsafe(40 + a);
      n(u, u.length - 4, 0);
      u[4] = $.EXTENDED;
      const x = this._writeReqid = this._writeReqid + 1 & V;
      n(u, x, 5);
      n(u, 23, l);
      u.utf8Write("expand-path@openssh.com", l += 4, 23);
      n(u, a, l += 20);
      u.utf8Write(c, l += 4, a);
      this._requests[x] = {
        cb: (G, ie) => {
          if (typeof t == "function") {
            if (G) {
              return t(G);
            }
            if (!ie || !ie.length) {
              return t(new Error("Response missing expanded path"));
            }
            t(undefined, ie[0].filename);
          }
        }
      };
      const D = Be(this, u);
      if (this._debug) {
        const G = D ? "Buffered" : "Sending";
        this._debug(`SFTP: Outbound: ${G} expand-path@openssh.com`);
      }
    }
    ext_copy_data(c, t, s, a, l, u) {
      if (this.server) {
        throw new Error("Client-only method called in server mode");
      }
      if (this._extensions["copy-data"] !== "1") {
        throw new Error("Server does not support this extended request");
      }
      if (!Buffer.isBuffer(c)) {
        throw new Error("Source handle is not a Buffer");
      }
      if (!Buffer.isBuffer(a)) {
        throw new Error("Destination handle is not a Buffer");
      }
      let D = 0;
      const G = Buffer.allocUnsafe(26 + c.length + 8 + 8 + 4 + a.length + 8);
      n(G, G.length - 4, D);
      D += 4;
      G[D] = $.EXTENDED;
      ++D;
      const ie = this._writeReqid = this._writeReqid + 1 & V;
      n(G, ie, D);
      D += 4;
      n(G, 9, D);
      D += 4;
      G.utf8Write("copy-data", D, 9);
      D += 9;
      n(G, c.length, D);
      D += 4;
      G.set(c, D);
      D += c.length;
      for (let pe = 7; pe >= 0; --pe) {
        G[D + pe] = t & 255;
        t /= 256;
      }
      D += 8;
      for (let pe = 7; pe >= 0; --pe) {
        G[D + pe] = s & 255;
        s /= 256;
      }
      D += 8;
      n(G, a.length, D);
      D += 4;
      G.set(a, D);
      D += a.length;
      for (let pe = 7; pe >= 0; --pe) {
        G[D + pe] = l & 255;
        l /= 256;
      }
      this._requests[ie] = {
        cb: u
      };
      const ue = Be(this, G);
      if (this._debug) {
        const pe = ue ? "Buffered" : "Sending";
        this._debug(`SFTP: Outbound: ${pe} copy-data`);
      }
    }
    ext_home_dir(c, t) {
      if (this.server) {
        throw new Error("Client-only method called in server mode");
      }
      if (this._extensions["home-directory"] !== "1") {
        throw new Error("Server does not support this extended request");
      }
      if (typeof c != "string") {
        throw new TypeError("username is not a string");
      }
      let a = 0;
      const l = Buffer.byteLength(c);
      const u = Buffer.allocUnsafe(31 + l);
      n(u, u.length - 4, a);
      a += 4;
      u[a] = $.EXTENDED;
      ++a;
      const x = this._writeReqid = this._writeReqid + 1 & V;
      n(u, x, a);
      a += 4;
      n(u, 14, a);
      a += 4;
      u.utf8Write("home-directory", a, 14);
      a += 14;
      n(u, l, a);
      a += 4;
      u.utf8Write(c, a, l);
      a += l;
      this._requests[x] = {
        cb: (G, ie) => {
          if (typeof t == "function") {
            if (G) {
              return t(G);
            }
            if (!ie || !ie.length) {
              return t(new Error("Response missing home directory"));
            }
            t(undefined, ie[0].filename);
          }
        }
      };
      const D = Be(this, u);
      if (this._debug) {
        const G = D ? "Buffered" : "Sending";
        this._debug(`SFTP: Outbound: ${G} home-directory`);
      }
    }
    ext_users_groups(c, t, s) {
      if (this.server) {
        throw new Error("Client-only method called in server mode");
      }
      if (this._extensions["users-groups-by-id@openssh.com"] !== "1") {
        throw new Error("Server does not support this extended request");
      }
      if (!Array.isArray(c)) {
        throw new TypeError("uids is not an array");
      }
      for (const G of c) {
        if (!Number.isInteger(G) || G < 0 || G > 4294967295) {
          throw new Error("uid values must all be 32-bit unsigned integers");
        }
      }
      if (!Array.isArray(t)) {
        throw new TypeError("gids is not an array");
      }
      for (const G of t) {
        if (!Number.isInteger(G) || G < 0 || G > 4294967295) {
          throw new Error("gid values must all be 32-bit unsigned integers");
        }
      }
      let l = 0;
      const u = Buffer.allocUnsafe(47 + c.length * 4 + 4 + t.length * 4);
      n(u, u.length - 4, l);
      l += 4;
      u[l] = $.EXTENDED;
      ++l;
      const x = this._writeReqid = this._writeReqid + 1 & V;
      n(u, x, l);
      l += 4;
      n(u, 30, l);
      l += 4;
      u.utf8Write("users-groups-by-id@openssh.com", l, 30);
      l += 30;
      n(u, c.length * 4, l);
      l += 4;
      for (const G of c) {
        n(u, G, l);
        l += 4;
      }
      n(u, t.length * 4, l);
      l += 4;
      for (const G of t) {
        n(u, G, l);
        l += 4;
      }
      this._requests[x] = {
        extended: "users-groups-by-id@openssh.com",
        cb: s
      };
      const D = Be(this, u);
      if (this._debug) {
        const G = D ? "Buffered" : "Sending";
        this._debug(`SFTP: Outbound: ${G} users-groups-by-id@openssh.com`);
      }
    }
    handle(c, t) {
      if (!this.server) {
        throw new Error("Server-only method called in client mode");
      }
      if (!Buffer.isBuffer(t)) {
        throw new Error("handle is not a Buffer");
      }
      const s = t.length;
      if (s > 256) {
        throw new Error("handle too large (> 256 bytes)");
      }
      let a = 9;
      const l = Buffer.allocUnsafe(13 + s);
      n(l, l.length - 4, 0);
      l[4] = re.HANDLE;
      n(l, c, 5);
      n(l, s, a);
      if (s) {
        l.set(t, a += 4);
      }
      const u = Be(this, l);
      if (this._debug) {
        this._debug(`SFTP: Outbound: ${u ? "Buffered" : "Sending"} HANDLE`);
      }
    }
    status(c, t, s) {
      if (!this.server) {
        throw new Error("Server-only method called in client mode");
      }
      if (!X.has(t)) {
        throw new Error(`Bad status code: ${t}`);
      }
      s ||= "";
      const a = Buffer.byteLength(s);
      let l = 9;
      const u = Buffer.allocUnsafe(17 + a + 4);
      n(u, u.length - 4, 0);
      u[4] = re.STATUS;
      n(u, c, 5);
      n(u, t, l);
      n(u, a, l += 4);
      l += 4;
      if (a) {
        u.utf8Write(s, l, a);
        l += a;
      }
      n(u, 0, l);
      const x = Be(this, u);
      if (this._debug) {
        this._debug(`SFTP: Outbound: ${x ? "Buffered" : "Sending"} STATUS`);
      }
    }
    data(c, t, s) {
      if (!this.server) {
        throw new Error("Server-only method called in client mode");
      }
      const a = Buffer.isBuffer(t);
      if (!a && typeof t != "string") {
        throw new Error("data is not a Buffer or string");
      }
      let l;
      if (!a && !s) {
        s = undefined;
        l = true;
      }
      const u = a ? t.length : Buffer.byteLength(t, s);
      let x = 9;
      const D = Buffer.allocUnsafe(13 + u);
      n(D, D.length - 4, 0);
      D[4] = re.DATA;
      n(D, c, 5);
      n(D, u, x);
      if (u) {
        if (a) {
          D.set(t, x += 4);
        } else if (l) {
          D.utf8Write(t, x += 4, u);
        } else {
          D.write(t, x += 4, u, s);
        }
      }
      const G = Be(this, D);
      if (this._debug) {
        this._debug(`SFTP: Outbound: ${G ? "Buffered" : "Sending"} DATA`);
      }
    }
    name(c, t) {
      if (!this.server) {
        throw new Error("Server-only method called in client mode");
      }
      if (!Array.isArray(t)) {
        if (typeof t != "object" || t === null) {
          throw new Error("names is not an object or array");
        }
        t = [t];
      }
      const s = t.length;
      let a = 0;
      let l;
      const u = [];
      for (let ie = 0; ie < s; ++ie) {
        const ue = t[ie];
        const pe = !ue || !ue.filename || typeof ue.filename != "string" ? "" : ue.filename;
        a += 4 + Buffer.byteLength(pe);
        const Te = !ue || !ue.longname || typeof ue.longname != "string" ? "" : ue.longname;
        a += 4 + Buffer.byteLength(Te);
        if (typeof ue.attrs == "object" && ue.attrs !== null) {
          l = Xe(ue.attrs);
          a += 4 + l.nb;
          if (l.nb) {
            let He;
            if (l.nb === C.length) {
              He = new Uint8Array(C);
            } else {
              He = new Uint8Array(l.nb);
              R(C, He, 0, l.nb, 0);
            }
            l.bytes = He;
          }
          u.push(l);
        } else {
          a += 4;
          u.push(null);
        }
      }
      let x = 9;
      const D = Buffer.allocUnsafe(13 + a);
      n(D, D.length - 4, 0);
      D[4] = re.NAME;
      n(D, c, 5);
      n(D, s, x);
      x += 4;
      for (let ie = 0; ie < s; ++ie) {
        const ue = t[ie];
        {
          const Te = !ue || !ue.filename || typeof ue.filename != "string" ? "" : ue.filename;
          const He = Buffer.byteLength(Te);
          n(D, He, x);
          x += 4;
          if (He) {
            D.utf8Write(Te, x, He);
            x += He;
          }
        }
        {
          const Te = !ue || !ue.longname || typeof ue.longname != "string" ? "" : ue.longname;
          const He = Buffer.byteLength(Te);
          n(D, He, x);
          x += 4;
          if (He) {
            D.utf8Write(Te, x, He);
            x += He;
          }
        }
        const pe = u[ie];
        if (pe) {
          n(D, pe.flags, x);
          x += 4;
          if (pe.flags && pe.bytes) {
            D.set(pe.bytes, x);
            x += pe.nb;
          }
        } else {
          n(D, 0, x);
          x += 4;
        }
      }
      const G = Be(this, D);
      if (this._debug) {
        this._debug(`SFTP: Outbound: ${G ? "Buffered" : "Sending"} NAME`);
      }
    }
    attrs(c, t) {
      if (!this.server) {
        throw new Error("Server-only method called in client mode");
      }
      if (typeof t != "object" || t === null) {
        throw new Error("attrs is not an object");
      }
      t = Xe(t);
      const s = t.flags;
      const a = t.nb;
      let l = 9;
      const u = Buffer.allocUnsafe(13 + a);
      n(u, u.length - 4, 0);
      u[4] = re.ATTRS;
      n(u, c, 5);
      n(u, s, l);
      if (a) {
        l += 4;
        if (a === C.length) {
          u.set(C, l);
        } else {
          R(C, u, 0, a, l);
        }
        l += a;
      }
      const x = Be(this, u);
      if (this._debug) {
        this._debug(`SFTP: Outbound: ${x ? "Buffered" : "Sending"} ATTRS`);
      }
    }
  }
  function Me(d) {
    try {
      return Buffer.allocUnsafe(d);
    } catch (c) {
      return c;
    }
  }
  function Ne(d, c, t, s, a, l, u, x) {
    const D = d._maxReadLen;
    const G = Math.max(a - D, 0);
    if (G) {
      a = D;
    }
    const ie = c.length;
    let ue = 9;
    let pe = l;
    const Te = Buffer.allocUnsafe(13 + ie + 8 + 4);
    n(Te, Te.length - 4, 0);
    Te[4] = $.READ;
    const He = d._writeReqid = d._writeReqid + 1 & V;
    n(Te, He, 5);
    n(Te, ie, ue);
    Te.set(c, ue += 4);
    ue += ie;
    for (let nt = 7; nt >= 0; --nt) {
      Te[ue + nt] = pe & 255;
      pe /= 256;
    }
    n(Te, a, ue += 8);
    if (typeof u != "function") {
      u = be;
    }
    const ve = x || {
      nb: 0,
      position: l,
      off: s,
      origOff: s,
      len: undefined,
      overflow: undefined,
      cb: (nt, st, rt) => {
        const yt = ve.len;
        const wt = ve.overflow;
        if (nt) {
          if (u._wantEOFError || nt.code !== w.EOF) {
            return u(nt);
          }
        } else {
          if (rt > yt) {
            return u(new Error("Received more data than requested"));
          }
          if (rt === yt && wt) {
            ve.nb += rt;
            ve.position += rt;
            ve.off += rt;
            Ne(d, c, t, ve.off, wt, ve.position, u, ve);
            return;
          }
        }
        rt = rt || 0;
        if (ve.origOff === 0 && t.length === ve.nb) {
          st = t;
        } else {
          st = I(t, ve.origOff, ve.origOff + ve.nb + rt);
        }
        u(undefined, ve.nb + rt, st, ve.position);
      },
      buffer: undefined
    };
    ve.len = a;
    ve.overflow = G;
    ve.buffer = I(t, s, s + a);
    d._requests[He] = ve;
    const Ze = Be(d, Te);
    if (d._debug) {
      d._debug(`SFTP: Outbound: ${Ze ? "Buffered" : "Sending"} READ`);
    }
  }
  function Ue(d, c, t, s, a, l) {
    let u = 64;
    let x = 32768;
    let D;
    let G;
    let ie;
    if (typeof a == "function") {
      l = a;
    } else if (typeof a == "object" && a !== null) {
      if (typeof a.concurrency == "number" && a.concurrency > 0 && !isNaN(a.concurrency)) {
        u = a.concurrency;
      }
      if (typeof a.chunkSize == "number" && a.chunkSize > 0 && !isNaN(a.chunkSize)) {
        x = a.chunkSize;
      }
      if (typeof a.fileSize == "number" && a.fileSize > 0 && !isNaN(a.fileSize)) {
        ie = a.fileSize;
      }
      if (typeof a.step == "function") {
        D = a.step;
      }
      if (typeof a.mode == "string" || typeof a.mode == "number") {
        G = Re(a.mode);
      }
    }
    let ue;
    let pe = 0;
    let Te = 0;
    let He = false;
    let ve;
    let Ze;
    let nt;
    let st = x * u;
    function rt(yt) {
      if (He) {
        return;
      }
      He = true;
      let wt = 0;
      let kt;
      if (ve || Ze) {
        kt = () => {
          if (--wt === 0) {
            l(yt);
          }
        };
        if (ve && (d === e || d.outgoing.state === "open")) {
          ++wt;
        }
        if (Ze && (c === e || c.outgoing.state === "open")) {
          ++wt;
        }
        if (ve && (d === e || d.outgoing.state === "open")) {
          d.close(ve, kt);
        }
        if (Ze && (c === e || c.outgoing.state === "open")) {
          c.close(Ze, kt);
        }
      } else {
        l(yt);
      }
    }
    d.open(t, "r", (yt, wt) => {
      if (yt) {
        return rt(yt);
      }
      ve = wt;
      if (ie === undefined) {
        d.fstat(ve, kt);
      } else {
        kt(null, {
          size: ie
        });
      }
      function kt(Qt, rn) {
        if (Qt) {
          if (d !== e) {
            d.stat(t, (Fe, Wt) => {
              if (Fe) {
                return rt(Qt);
              }
              kt(null, Wt);
            });
            return;
          }
          return rt(Qt);
        }
        ue = rn.size;
        c.open(s, "w", (Fe, Wt) => {
          if (Fe) {
            return rt(Fe);
          }
          Ze = Wt;
          if (ue <= 0) {
            return rt();
          }
          while (st > ue) {
            if (u === 1) {
              st = ue;
              break;
            }
            st -= x;
            --u;
          }
          nt = Me(st);
          if (nt instanceof Error) {
            return rt(nt);
          }
          if (G !== undefined) {
            c.fchmod(Ze, G, function H(te) {
              if (te) {
                c.chmod(s, G, ae => H());
                return;
              }
              i();
            });
          } else {
            i();
          }
          function _(H, te, ae, me, ee, ce) {
            if (H) {
              return rt(H);
            }
            ee = ee || 0;
            c.write(Ze, nt, ee, te, me, fe);
            function fe(Ee) {
              if (Ee) {
                return rt(Ee);
              }
              Te += te;
              if (D) {
                D(Te, te, ue);
              }
              if (te < ce) {
                return T(ee, me + te, ce - te);
              }
              if (Te === ue) {
                c.close(Ze, De => {
                  Ze = undefined;
                  if (De) {
                    return rt(De);
                  }
                  d.close(ve, Ge => {
                    ve = undefined;
                    if (Ge) {
                      return rt(Ge);
                    }
                    l();
                  });
                });
                return;
              }
              if (pe >= ue) {
                return;
              }
              const xe = pe + x > ue ? ue - pe : x;
              T(ee, pe, xe);
              pe += xe;
            }
          }
          function N(H, te, ae) {
            return (me, ee, ce) => {
              _(me, ee, ce, te, H, ae);
            };
          }
          function T(H, te, ae) {
            d.read(ve, nt, H, ae, te, N(H, te, ae));
          }
          function i() {
            let H = 0;
            let te = 0;
            while (pe < ue && H < u) {
              const ae = pe + x > ue ? ue - pe : x;
              T(te, pe, ae);
              te += ae;
              pe += ae;
              ++H;
            }
          }
        });
      }
    });
  }
  function Le(d, c, t, s, a, l, u) {
    const x = typeof u == "function" ? u : undefined;
    d.write(c, t, s, a, l, (D, G) => {
      if (D) {
        return d.close(c, () => {
          if (x) {
            x(D);
          }
        });
      }
      if (G === a) {
        d.close(c, x);
      } else {
        s += G;
        a -= G;
        l += G;
        Le(d, c, t, s, a, l, x);
      }
    });
  }
  class Qe {
    constructor(c) {
      this.mode = c && c.mode;
      this.uid = c && c.uid;
      this.gid = c && c.gid;
      this.size = c && c.size;
      this.atime = c && c.atime;
      this.mtime = c && c.mtime;
      this.extended = c && c.extended;
    }
    isDirectory() {
      return (this.mode & r.S_IFMT) === r.S_IFDIR;
    }
    isFile() {
      return (this.mode & r.S_IFMT) === r.S_IFREG;
    }
    isBlockDevice() {
      return (this.mode & r.S_IFMT) === r.S_IFBLK;
    }
    isCharacterDevice() {
      return (this.mode & r.S_IFMT) === r.S_IFCHR;
    }
    isSymbolicLink() {
      return (this.mode & r.S_IFMT) === r.S_IFLNK;
    }
    isFIFO() {
      return (this.mode & r.S_IFMT) === r.S_IFIFO;
    }
    isSocket() {
      return (this.mode & r.S_IFMT) === r.S_IFSOCK;
    }
  }
  function Xe(d) {
    let c = 0;
    let t = 0;
    if (typeof d == "object" && d !== null) {
      if (typeof d.size == "number") {
        c |= B.SIZE;
        const s = d.size;
        C[t++] = s / 72057594037927940;
        C[t++] = s / 281474976710656;
        C[t++] = s / 1099511627776;
        C[t++] = s / 4294967296;
        C[t++] = s / 16777216;
        C[t++] = s / 65536;
        C[t++] = s / 256;
        C[t++] = s;
      }
      if (typeof d.uid == "number" && typeof d.gid == "number") {
        c |= B.UIDGID;
        const s = d.uid;
        const a = d.gid;
        C[t++] = s >>> 24;
        C[t++] = s >>> 16;
        C[t++] = s >>> 8;
        C[t++] = s;
        C[t++] = a >>> 24;
        C[t++] = a >>> 16;
        C[t++] = a >>> 8;
        C[t++] = a;
      }
      if (typeof d.mode == "number" || typeof d.mode == "string") {
        const s = Re(d.mode);
        c |= B.PERMISSIONS;
        C[t++] = s >>> 24;
        C[t++] = s >>> 16;
        C[t++] = s >>> 8;
        C[t++] = s;
      }
      if ((typeof d.atime == "number" || M(d.atime)) && (typeof d.mtime == "number" || M(d.mtime))) {
        const s = Ke(d.atime);
        const a = Ke(d.mtime);
        c |= B.ACMODTIME;
        C[t++] = s >>> 24;
        C[t++] = s >>> 16;
        C[t++] = s >>> 8;
        C[t++] = s;
        C[t++] = a >>> 24;
        C[t++] = a >>> 16;
        C[t++] = a >>> 8;
        C[t++] = a;
      }
    }
    return {
      flags: c,
      nb: t
    };
  }
  function Ke(d) {
    if (typeof d == "number" && d === d) {
      return d;
    }
    if (M(d)) {
      return parseInt(d.getTime() / 1000, 10);
    }
    throw new Error(`Cannot parse time: ${d}`);
  }
  function Re(d) {
    if (typeof d == "number" && d === d) {
      return d;
    }
    if (typeof d == "string") {
      return Re(parseInt(d, 8));
    }
    throw new Error(`Cannot parse mode: ${d}`);
  }
  const Pe = {
    r: Y.READ,
    "r+": Y.READ | Y.WRITE,
    w: Y.TRUNC | Y.CREAT | Y.WRITE,
    wx: Y.TRUNC | Y.CREAT | Y.WRITE | Y.EXCL,
    xw: Y.TRUNC | Y.CREAT | Y.WRITE | Y.EXCL,
    "w+": Y.TRUNC | Y.CREAT | Y.READ | Y.WRITE,
    "wx+": Y.TRUNC | Y.CREAT | Y.READ | Y.WRITE | Y.EXCL,
    "xw+": Y.TRUNC | Y.CREAT | Y.READ | Y.WRITE | Y.EXCL,
    a: Y.APPEND | Y.CREAT | Y.WRITE,
    ax: Y.APPEND | Y.CREAT | Y.WRITE | Y.EXCL,
    xa: Y.APPEND | Y.CREAT | Y.WRITE | Y.EXCL,
    "a+": Y.APPEND | Y.CREAT | Y.READ | Y.WRITE,
    "ax+": Y.APPEND | Y.CREAT | Y.READ | Y.WRITE | Y.EXCL,
    "xa+": Y.APPEND | Y.CREAT | Y.READ | Y.WRITE | Y.EXCL
  };
  function qe(d) {
    const c = Pe[d];
    if (c !== undefined) {
      return c;
    } else {
      return null;
    }
  }
  const Je = (() => {
    const d = Object.keys(Pe);
    return c => {
      for (let t = 0; t < d.length; ++t) {
        const s = d[t];
        if (Pe[s] === c) {
          return s;
        }
      }
      return null;
    };
  })();
  function Oe(d) {
    const c = U.readUInt32BE();
    if (c === undefined) {
      return;
    }
    const t = new Qe();
    if (c & B.SIZE) {
      const s = U.readUInt64BE(d);
      if (s === undefined) {
        return;
      }
      t.size = s;
    }
    if (c & B.UIDGID) {
      const s = U.readUInt32BE();
      const a = U.readUInt32BE();
      if (a === undefined) {
        return;
      }
      t.uid = s;
      t.gid = a;
    }
    if (c & B.PERMISSIONS) {
      const s = U.readUInt32BE();
      if (s === undefined) {
        return;
      }
      t.mode = s;
    }
    if (c & B.ACMODTIME) {
      const s = U.readUInt32BE();
      const a = U.readUInt32BE();
      if (a === undefined) {
        return;
      }
      t.atime = s;
      t.mtime = a;
    }
    if (c & B.EXTENDED) {
      const s = U.readUInt32BE();
      if (s === undefined) {
        return;
      }
      const a = {};
      for (let l = 0; l < s; ++l) {
        const u = U.readString(true);
        const x = U.readString();
        if (x === undefined) {
          return;
        }
        a[u] = x;
      }
      t.extended = a;
    }
    return t;
  }
  function Be(d, c) {
    const t = $e(d, c);
    if (t !== undefined) {
      d._buffer.push(t);
      return false;
    } else {
      return true;
    }
  }
  function $e(d, c) {
    const t = d.outgoing;
    if (t.state !== "open") {
      return;
    }
    if (t.window === 0) {
      d._waitWindow = true;
      d._chunkcb = de;
      return c;
    }
    let s;
    const a = c.length;
    let l = 0;
    while (a - l > 0 && t.window > 0) {
      const u = Math.min(a - l, t.window, t.packetSize);
      t.window -= u;
      if (t.window === 0) {
        d._waitWindow = true;
        d._chunkcb = de;
      }
      if (l === 0 && u === a) {
        d._protocol.channelData(d.outgoing.id, c);
      } else {
        d._protocol.channelData(d.outgoing.id, I(c, l, l + u));
      }
      l += u;
    }
    if (a - l > 0) {
      if (l > 0) {
        s = I(c, l, a);
      } else {
        s = c;
      }
    }
    return s;
  }
  function de() {
    this._chunkcb = undefined;
    const d = this._buffer;
    let c = 0;
    while (c < d.length) {
      const t = d[c];
      const s = $e(this, t);
      if (s !== undefined) {
        if (s !== t) {
          d[c] = s;
        }
        if (c > 0) {
          this._buffer = d.slice(c);
        }
        return;
      }
      ++c;
    }
    if (c > 0) {
      this._buffer = [];
    }
  }
  function P(d, c, t) {
    const s = new Error(c);
    s.level = "sftp-protocol";
    if (d._debug) {
      d._debug(`SFTP: Inbound: ${c}`);
    }
    d.emit("error", s);
    d.destroy();
    W(d);
    return false;
  }
  function W(d) {
    const c = Object.keys(d._requests);
    if (c.length === 0) {
      return;
    }
    const t = d._requests;
    d._requests = {};
    const s = new Error("No response from server");
    for (let a = 0; a < c.length; ++a) {
      const l = t[c[a]];
      if (typeof l.cb == "function") {
        l.cb(s);
      }
    }
  }
  function g(d, c) {
    let t = 9;
    const s = Buffer.allocUnsafe(31);
    n(s, s.length - 4, 0);
    s[4] = $.EXTENDED;
    const a = d._writeReqid = d._writeReqid + 1 & V;
    n(s, a, 5);
    n(s, 18, t);
    s.utf8Write("limits@openssh.com", t += 4, 18);
    d._requests[a] = {
      extended: "limits@openssh.com",
      cb: c
    };
    const l = Be(d, s);
    if (d._debug) {
      const u = l ? "Buffered" : "Sending";
      d._debug(`SFTP: Outbound: ${u} limits@openssh.com`);
    }
  }
  const f = {
    [re.VERSION]: (d, c) => {
      if (d._version !== -1) {
        return P(d, "Duplicate VERSION packet");
      }
      const t = {};
      U.init(c, 1);
      let s = U.readUInt32BE();
      while (U.avail()) {
        const a = U.readString(true);
        const l = U.readString(true);
        if (l === undefined) {
          s = undefined;
          break;
        }
        t[a] = l;
      }
      U.clear();
      if (s === undefined) {
        return P(d, "Malformed VERSION packet");
      }
      if (d._debug) {
        const a = Object.keys(t);
        if (a.length) {
          d._debug(`SFTP: Inbound: Received VERSION (v${s}, exts:${a})`);
        } else {
          d._debug(`SFTP: Inbound: Received VERSION (v${s})`);
        }
      }
      d._version = s;
      d._extensions = t;
      if (t["limits@openssh.com"] === "1") {
        return g(d, (a, l) => {
          if (!a) {
            if (l.maxPktLen > 0) {
              d._maxOutPktLen = l.maxPktLen;
            }
            if (l.maxReadLen > 0) {
              d._maxReadLen = l.maxReadLen;
            }
            if (l.maxWriteLen > 0) {
              d._maxWriteLen = l.maxWriteLen;
            }
            d.maxOpenHandles = l.maxOpenHandles > 0 ? l.maxOpenHandles : Infinity;
          }
          d.emit("ready");
        });
      }
      d.emit("ready");
    },
    [re.STATUS]: (d, c) => {
      U.init(c, 1);
      const t = U.readUInt32BE();
      const s = U.readUInt32BE();
      const a = U.readString(true);
      U.clear();
      if (d._debug) {
        const u = JSON.stringify(a);
        d._debug(`SFTP: Inbound: Received STATUS (id:${t}, ${s}, ${u})`);
      }
      const l = d._requests[t];
      delete d._requests[t];
      if (l && typeof l.cb == "function") {
        if (s === w.OK) {
          l.cb();
          return;
        }
        const u = new Error(a || K[s] || "Unknown status");
        u.code = s;
        l.cb(u);
      }
    },
    [re.HANDLE]: (d, c) => {
      U.init(c, 1);
      const t = U.readUInt32BE();
      const s = U.readString();
      U.clear();
      if (s === undefined) {
        if (t !== undefined) {
          delete d._requests[t];
        }
        return P(d, "Malformed HANDLE packet");
      }
      if (d._debug) {
        d._debug(`SFTP: Inbound: Received HANDLE (id:${t})`);
      }
      const a = d._requests[t];
      delete d._requests[t];
      if (a && typeof a.cb == "function") {
        a.cb(undefined, s);
      }
    },
    [re.DATA]: (d, c) => {
      U.init(c, 1);
      const t = U.readUInt32BE();
      let s;
      if (t !== undefined) {
        s = d._requests[t];
        delete d._requests[t];
      }
      if (s && typeof s.cb == "function") {
        if (s.buffer) {
          const a = U.readString(s.buffer);
          U.clear();
          if (a !== undefined) {
            if (d._debug) {
              d._debug(`SFTP: Inbound: Received DATA (id:${t}, ${a})`);
            }
            s.cb(undefined, s.buffer, a);
            return;
          }
        } else {
          const a = U.readString();
          U.clear();
          if (a !== undefined) {
            if (d._debug) {
              d._debug(`SFTP: Inbound: Received DATA (id:${t}, ${a.length})`);
            }
            s.cb(undefined, a);
            return;
          }
        }
      } else {
        const a = U.skipString();
        U.clear();
        if (a !== undefined) {
          if (d._debug) {
            d._debug(`SFTP: Inbound: Received DATA (id:${t}, ${a})`);
          }
          return;
        }
      }
      return P(d, "Malformed DATA packet");
    },
    [re.NAME]: (d, c) => {
      U.init(c, 1);
      const t = U.readUInt32BE();
      let s;
      if (t !== undefined) {
        s = d._requests[t];
        delete d._requests[t];
      }
      const a = U.readUInt32BE();
      if (a !== undefined) {
        let l = [];
        for (let u = 0; u < a; ++u) {
          const x = U.readString(true);
          const D = U.readString(true);
          const G = Oe(d._biOpt);
          if (G === undefined) {
            l = undefined;
            break;
          }
          l.push({
            filename: x,
            longname: D,
            attrs: G
          });
        }
        if (l !== undefined) {
          if (d._debug) {
            d._debug(`SFTP: Inbound: Received NAME (id:${t}, ${l.length})`);
          }
          U.clear();
          if (s && typeof s.cb == "function") {
            s.cb(undefined, l);
          }
          return;
        }
      }
      U.clear();
      return P(d, "Malformed NAME packet");
    },
    [re.ATTRS]: (d, c) => {
      U.init(c, 1);
      const t = U.readUInt32BE();
      let s;
      if (t !== undefined) {
        s = d._requests[t];
        delete d._requests[t];
      }
      const a = Oe(d._biOpt);
      U.clear();
      if (a !== undefined) {
        if (d._debug) {
          d._debug(`SFTP: Inbound: Received ATTRS (id:${t})`);
        }
        if (s && typeof s.cb == "function") {
          s.cb(undefined, a);
        }
        return;
      }
      return P(d, "Malformed ATTRS packet");
    },
    [re.EXTENDED]: (d, c) => {
      U.init(c, 1);
      const t = U.readUInt32BE();
      if (t !== undefined) {
        const s = d._requests[t];
        if (s) {
          delete d._requests[t];
          switch (s.extended) {
            case "statvfs@openssh.com":
            case "fstatvfs@openssh.com":
              {
                const a = d._biOpt;
                const l = {
                  f_bsize: U.readUInt64BE(a),
                  f_frsize: U.readUInt64BE(a),
                  f_blocks: U.readUInt64BE(a),
                  f_bfree: U.readUInt64BE(a),
                  f_bavail: U.readUInt64BE(a),
                  f_files: U.readUInt64BE(a),
                  f_ffree: U.readUInt64BE(a),
                  f_favail: U.readUInt64BE(a),
                  f_sid: U.readUInt64BE(a),
                  f_flag: U.readUInt64BE(a),
                  f_namemax: U.readUInt64BE(a)
                };
                if (l.f_namemax === undefined) {
                  break;
                }
                if (d._debug) {
                  d._debug(`SFTP: Inbound: Received EXTENDED_REPLY (id:${t}, ${s.extended})`);
                }
                U.clear();
                if (typeof s.cb == "function") {
                  s.cb(undefined, l);
                }
                return;
              }
            case "limits@openssh.com":
              {
                const a = {
                  maxPktLen: U.readUInt64BE(),
                  maxReadLen: U.readUInt64BE(),
                  maxWriteLen: U.readUInt64BE(),
                  maxOpenHandles: U.readUInt64BE()
                };
                if (a.maxOpenHandles === undefined) {
                  break;
                }
                if (d._debug) {
                  d._debug(`SFTP: Inbound: Received EXTENDED_REPLY (id:${t}, ${s.extended})`);
                }
                U.clear();
                if (typeof s.cb == "function") {
                  s.cb(undefined, a);
                }
                return;
              }
            case "users-groups-by-id@openssh.com":
              {
                const a = U.readUInt32BE();
                if (a === undefined) {
                  break;
                }
                const l = new Array(a);
                for (let D = 0; D < l.length; ++D) {
                  l[D] = U.readString(true);
                }
                const u = U.readUInt32BE();
                if (u === undefined) {
                  break;
                }
                const x = new Array(u);
                for (let D = 0; D < x.length; ++D) {
                  x[D] = U.readString(true);
                }
                if (x.length > 0 && x[x.length - 1] === undefined) {
                  break;
                }
                if (d._debug) {
                  d._debug(`SFTP: Inbound: Received EXTENDED_REPLY (id:${t}, ${s.extended})`);
                }
                U.clear();
                if (typeof s.cb == "function") {
                  s.cb(undefined, l, x);
                }
                return;
              }
            default:
              if (d._debug) {
                d._debug(`SFTP: Inbound: Received EXTENDED_REPLY (id:${t}, ???)`);
              }
              U.clear();
              if (typeof s.cb == "function") {
                s.cb();
              }
              return;
          }
        } else {
          if (d._debug) {
            d._debug(`SFTP: Inbound: Received EXTENDED_REPLY (id:${t}, ???)`);
          }
          U.clear();
          return;
        }
      }
      U.clear();
      return P(d, "Malformed EXTENDED_REPLY packet");
    }
  };
  const o = {
    [$.INIT]: (d, c) => {
      if (d._version !== -1) {
        return P(d, "Duplicate INIT packet");
      }
      const t = {};
      U.init(c, 1);
      let s = U.readUInt32BE();
      while (U.avail()) {
        const a = U.readString(true);
        const l = U.readString(true);
        if (l === undefined) {
          s = undefined;
          break;
        }
        t[a] = l;
      }
      U.clear();
      if (s === undefined) {
        return P(d, "Malformed INIT packet");
      }
      if (d._debug) {
        const a = Object.keys(t);
        if (a.length) {
          d._debug(`SFTP: Inbound: Received INIT (v${s}, exts:${a})`);
        } else {
          d._debug(`SFTP: Inbound: Received INIT (v${s})`);
        }
      }
      Be(d, oe);
      d._version = s;
      d._extensions = t;
      d.emit("ready");
    },
    [$.OPEN]: (d, c) => {
      U.init(c, 1);
      const t = U.readUInt32BE();
      const s = U.readString(true);
      const a = U.readUInt32BE();
      const l = Oe(d._biOpt);
      U.clear();
      if (l === undefined) {
        return P(d, "Malformed OPEN packet");
      }
      if (d._debug) {
        d._debug(`SFTP: Inbound: Received OPEN (id:${t})`);
      }
      if (!d.emit("OPEN", t, s, a, l)) {
        d.status(t, w.OP_UNSUPPORTED);
      }
    },
    [$.CLOSE]: (d, c) => {
      U.init(c, 1);
      const t = U.readUInt32BE();
      const s = U.readString();
      U.clear();
      if (s === undefined || s.length > 256) {
        return P(d, "Malformed CLOSE packet");
      }
      if (d._debug) {
        d._debug(`SFTP: Inbound: Received CLOSE (id:${t})`);
      }
      if (!d.emit("CLOSE", t, s)) {
        d.status(t, w.OP_UNSUPPORTED);
      }
    },
    [$.READ]: (d, c) => {
      U.init(c, 1);
      const t = U.readUInt32BE();
      const s = U.readString();
      const a = U.readUInt64BE(d._biOpt);
      const l = U.readUInt32BE();
      U.clear();
      if (l === undefined || s.length > 256) {
        return P(d, "Malformed READ packet");
      }
      if (d._debug) {
        d._debug(`SFTP: Inbound: Received READ (id:${t})`);
      }
      if (!d.emit("READ", t, s, a, l)) {
        d.status(t, w.OP_UNSUPPORTED);
      }
    },
    [$.WRITE]: (d, c) => {
      U.init(c, 1);
      const t = U.readUInt32BE();
      const s = U.readString();
      const a = U.readUInt64BE(d._biOpt);
      const l = U.readString();
      U.clear();
      if (l === undefined || s.length > 256) {
        return P(d, "Malformed WRITE packet");
      }
      if (d._debug) {
        d._debug(`SFTP: Inbound: Received WRITE (id:${t})`);
      }
      if (!d.emit("WRITE", t, s, a, l)) {
        d.status(t, w.OP_UNSUPPORTED);
      }
    },
    [$.LSTAT]: (d, c) => {
      U.init(c, 1);
      const t = U.readUInt32BE();
      const s = U.readString(true);
      U.clear();
      if (s === undefined) {
        return P(d, "Malformed LSTAT packet");
      }
      if (d._debug) {
        d._debug(`SFTP: Inbound: Received LSTAT (id:${t})`);
      }
      if (!d.emit("LSTAT", t, s)) {
        d.status(t, w.OP_UNSUPPORTED);
      }
    },
    [$.FSTAT]: (d, c) => {
      U.init(c, 1);
      const t = U.readUInt32BE();
      const s = U.readString();
      U.clear();
      if (s === undefined || s.length > 256) {
        return P(d, "Malformed FSTAT packet");
      }
      if (d._debug) {
        d._debug(`SFTP: Inbound: Received FSTAT (id:${t})`);
      }
      if (!d.emit("FSTAT", t, s)) {
        d.status(t, w.OP_UNSUPPORTED);
      }
    },
    [$.SETSTAT]: (d, c) => {
      U.init(c, 1);
      const t = U.readUInt32BE();
      const s = U.readString(true);
      const a = Oe(d._biOpt);
      U.clear();
      if (a === undefined) {
        return P(d, "Malformed SETSTAT packet");
      }
      if (d._debug) {
        d._debug(`SFTP: Inbound: Received SETSTAT (id:${t})`);
      }
      if (!d.emit("SETSTAT", t, s, a)) {
        d.status(t, w.OP_UNSUPPORTED);
      }
    },
    [$.FSETSTAT]: (d, c) => {
      U.init(c, 1);
      const t = U.readUInt32BE();
      const s = U.readString();
      const a = Oe(d._biOpt);
      U.clear();
      if (a === undefined || s.length > 256) {
        return P(d, "Malformed FSETSTAT packet");
      }
      if (d._debug) {
        d._debug(`SFTP: Inbound: Received FSETSTAT (id:${t})`);
      }
      if (!d.emit("FSETSTAT", t, s, a)) {
        d.status(t, w.OP_UNSUPPORTED);
      }
    },
    [$.OPENDIR]: (d, c) => {
      U.init(c, 1);
      const t = U.readUInt32BE();
      const s = U.readString(true);
      U.clear();
      if (s === undefined) {
        return P(d, "Malformed OPENDIR packet");
      }
      if (d._debug) {
        d._debug(`SFTP: Inbound: Received OPENDIR (id:${t})`);
      }
      if (!d.emit("OPENDIR", t, s)) {
        d.status(t, w.OP_UNSUPPORTED);
      }
    },
    [$.READDIR]: (d, c) => {
      U.init(c, 1);
      const t = U.readUInt32BE();
      const s = U.readString();
      U.clear();
      if (s === undefined || s.length > 256) {
        return P(d, "Malformed READDIR packet");
      }
      if (d._debug) {
        d._debug(`SFTP: Inbound: Received READDIR (id:${t})`);
      }
      if (!d.emit("READDIR", t, s)) {
        d.status(t, w.OP_UNSUPPORTED);
      }
    },
    [$.REMOVE]: (d, c) => {
      U.init(c, 1);
      const t = U.readUInt32BE();
      const s = U.readString(true);
      U.clear();
      if (s === undefined) {
        return P(d, "Malformed REMOVE packet");
      }
      if (d._debug) {
        d._debug(`SFTP: Inbound: Received REMOVE (id:${t})`);
      }
      if (!d.emit("REMOVE", t, s)) {
        d.status(t, w.OP_UNSUPPORTED);
      }
    },
    [$.MKDIR]: (d, c) => {
      U.init(c, 1);
      const t = U.readUInt32BE();
      const s = U.readString(true);
      const a = Oe(d._biOpt);
      U.clear();
      if (a === undefined) {
        return P(d, "Malformed MKDIR packet");
      }
      if (d._debug) {
        d._debug(`SFTP: Inbound: Received MKDIR (id:${t})`);
      }
      if (!d.emit("MKDIR", t, s, a)) {
        d.status(t, w.OP_UNSUPPORTED);
      }
    },
    [$.RMDIR]: (d, c) => {
      U.init(c, 1);
      const t = U.readUInt32BE();
      const s = U.readString(true);
      U.clear();
      if (s === undefined) {
        return P(d, "Malformed RMDIR packet");
      }
      if (d._debug) {
        d._debug(`SFTP: Inbound: Received RMDIR (id:${t})`);
      }
      if (!d.emit("RMDIR", t, s)) {
        d.status(t, w.OP_UNSUPPORTED);
      }
    },
    [$.REALPATH]: (d, c) => {
      U.init(c, 1);
      const t = U.readUInt32BE();
      const s = U.readString(true);
      U.clear();
      if (s === undefined) {
        return P(d, "Malformed REALPATH packet");
      }
      if (d._debug) {
        d._debug(`SFTP: Inbound: Received REALPATH (id:${t})`);
      }
      if (!d.emit("REALPATH", t, s)) {
        d.status(t, w.OP_UNSUPPORTED);
      }
    },
    [$.STAT]: (d, c) => {
      U.init(c, 1);
      const t = U.readUInt32BE();
      const s = U.readString(true);
      U.clear();
      if (s === undefined) {
        return P(d, "Malformed STAT packet");
      }
      if (d._debug) {
        d._debug(`SFTP: Inbound: Received STAT (id:${t})`);
      }
      if (!d.emit("STAT", t, s)) {
        d.status(t, w.OP_UNSUPPORTED);
      }
    },
    [$.RENAME]: (d, c) => {
      U.init(c, 1);
      const t = U.readUInt32BE();
      const s = U.readString(true);
      const a = U.readString(true);
      U.clear();
      if (a === undefined) {
        return P(d, "Malformed RENAME packet");
      }
      if (d._debug) {
        d._debug(`SFTP: Inbound: Received RENAME (id:${t})`);
      }
      if (!d.emit("RENAME", t, s, a)) {
        d.status(t, w.OP_UNSUPPORTED);
      }
    },
    [$.READLINK]: (d, c) => {
      U.init(c, 1);
      const t = U.readUInt32BE();
      const s = U.readString(true);
      U.clear();
      if (s === undefined) {
        return P(d, "Malformed READLINK packet");
      }
      if (d._debug) {
        d._debug(`SFTP: Inbound: Received READLINK (id:${t})`);
      }
      if (!d.emit("READLINK", t, s)) {
        d.status(t, w.OP_UNSUPPORTED);
      }
    },
    [$.SYMLINK]: (d, c) => {
      U.init(c, 1);
      const t = U.readUInt32BE();
      const s = U.readString(true);
      const a = U.readString(true);
      U.clear();
      if (a === undefined) {
        return P(d, "Malformed SYMLINK packet");
      }
      if (d._debug) {
        d._debug(`SFTP: Inbound: Received SYMLINK (id:${t})`);
      }
      let l;
      if (d._isOpenSSH) {
        l = d.emit("SYMLINK", t, a, s);
      } else {
        l = d.emit("SYMLINK", t, s, a);
      }
      if (!l) {
        d.status(t, w.OP_UNSUPPORTED);
      }
    },
    [$.EXTENDED]: (d, c) => {
      U.init(c, 1);
      const t = U.readUInt32BE();
      const s = U.readString(true);
      if (s === undefined) {
        U.clear();
        return P(d, "Malformed EXTENDED packet");
      }
      let a;
      if (U.avail()) {
        a = U.readRaw();
      }
      U.clear();
      if (d._debug) {
        d._debug(`SFTP: Inbound: Received EXTENDED (id:${t})`);
      }
      if (!d.emit("EXTENDED", t, s, a)) {
        d.status(t, w.OP_UNSUPPORTED);
      }
    }
  };
  const {
    ERR_INVALID_ARG_TYPE: b,
    ERR_OUT_OF_RANGE: O,
    validateNumber: q
  } = Ss();
  const E = 128;
  let A;
  const h = [];
  function S(d) {
    if (h.length > 0) {
      A = h.pop();
    } else {
      A = Buffer.allocUnsafe(d);
    }
    A.used = 0;
  }
  function L(d, c) {
    if (!Number.isSafeInteger(d)) {
      q(d, c);
      throw Number.isInteger(d) ? new O(c, ">= 0 and <= 2 ** 53 - 1", d) : new O(c, "an integer", d);
    }
    if (d < 0) {
      throw new O(c, ">= 0 and <= 2 ** 53 - 1", d);
    }
  }
  function j(d) {
    return d + 7 & -8;
  }
  function se(d, c, t = {}) {
    if (t.highWaterMark === undefined) {
      t.highWaterMark = 65536;
    }
    t.emitClose = false;
    t.autoDestroy = false;
    y.call(this, t);
    this.path = c;
    this.flags = t.flags === undefined ? "r" : t.flags;
    this.mode = t.mode === undefined ? 438 : t.mode;
    this.start = t.start;
    this.end = t.end;
    this.autoClose = t.autoClose === undefined ? true : t.autoClose;
    this.pos = 0;
    this.bytesRead = 0;
    this.isClosed = false;
    this.handle = t.handle === undefined ? null : t.handle;
    this.sftp = d;
    this._opening = false;
    if (this.start !== undefined) {
      L(this.start, "start");
      this.pos = this.start;
    }
    if (this.end === undefined) {
      this.end = Infinity;
    } else if (this.end !== Infinity && (L(this.end, "end"), this.start !== undefined && this.start > this.end)) {
      throw new O("start", `<= "end" (here: ${this.end})`, this.start);
    }
    this.on("end", function () {
      if (this.autoClose) {
        this.destroy();
      }
    });
    if (!Buffer.isBuffer(this.handle)) {
      this.open();
    }
  }
  m(se, y);
  se.prototype.open = function () {
    if (!this._opening) {
      this._opening = true;
      this.sftp.open(this.path, this.flags, this.mode, (d, c) => {
        this._opening = false;
        if (d) {
          this.emit("error", d);
          if (this.autoClose) {
            this.destroy();
          }
          return;
        }
        this.handle = c;
        this.emit("open", c);
        this.emit("ready");
        this.read();
      });
    }
  };
  se.prototype._read = function (d) {
    if (!Buffer.isBuffer(this.handle)) {
      return this.once("open", () => this._read(d));
    }
    if (this.destroyed) {
      return;
    }
    if (!A || A.length - A.used < E) {
      S(this.readableHighWaterMark || this._readableState.highWaterMark);
    }
    const c = A;
    let t = Math.min(A.length - A.used, d);
    const s = A.used;
    if (this.end !== undefined) {
      t = Math.min(this.end - this.pos + 1, t);
    }
    if (t <= 0) {
      return this.push(null);
    }
    this.sftp.read(this.handle, A, A.used, t, this.pos, (a, l) => {
      if (a) {
        this.emit("error", a);
        if (this.autoClose) {
          this.destroy();
        }
        return;
      }
      let u = null;
      if (s + t === c.used && c === A) {
        c.used = j(c.used + l - t);
      } else {
        const x = s + t & -8;
        const D = j(s + l);
        if (x - D >= E) {
          h.push(c.slice(D, x));
        }
      }
      if (l > 0) {
        this.bytesRead += l;
        u = c.slice(s, s + l);
      }
      this.pos += l;
      this.push(u);
    });
    A.used = j(A.used + t);
  };
  se.prototype._destroy = function (d, c) {
    if (this._opening && !Buffer.isBuffer(this.handle)) {
      this.once("open", le.bind(null, this, c, d));
      return;
    }
    le(this, c, d);
    this.handle = null;
    this._opening = false;
  };
  function le(d, c, t) {
    if (!d.handle) {
      return s();
    }
    d.sftp.close(d.handle, s);
    function s(a) {
      a = a || t;
      c(a);
      d.isClosed = true;
      if (!a) {
        d.emit("close");
      }
    }
  }
  se.prototype.close = function (d) {
    this.destroy(null, d);
  };
  Object.defineProperty(se.prototype, "pending", {
    get() {
      return this.handle === null;
    },
    configurable: true
  });
  function _e(d, c, t = {}) {
    t.emitClose = false;
    t.autoDestroy = false;
    k.call(this, t);
    this.path = c;
    this.flags = t.flags === undefined ? "w" : t.flags;
    this.mode = t.mode === undefined ? 438 : t.mode;
    this.start = t.start;
    this.autoClose = t.autoClose === undefined ? true : t.autoClose;
    this.pos = 0;
    this.bytesWritten = 0;
    this.isClosed = false;
    this.handle = t.handle === undefined ? null : t.handle;
    this.sftp = d;
    this._opening = false;
    if (this.start !== undefined) {
      L(this.start, "start");
      this.pos = this.start;
    }
    if (t.encoding) {
      this.setDefaultEncoding(t.encoding);
    }
    this.on("finish", function () {
      if (!this._writableState.finalCalled) {
        if (this.autoClose) {
          this.destroy();
        }
      }
    });
    if (!Buffer.isBuffer(this.handle)) {
      this.open();
    }
  }
  m(_e, k);
  _e.prototype._final = function (d) {
    if (this.autoClose) {
      this.destroy();
    }
    d();
  };
  _e.prototype.open = function () {
    if (!this._opening) {
      this._opening = true;
      this.sftp.open(this.path, this.flags, this.mode, (d, c) => {
        this._opening = false;
        if (d) {
          this.emit("error", d);
          if (this.autoClose) {
            this.destroy();
          }
          return;
        }
        this.handle = c;
        const t = s => {
          if (s) {
            this.sftp.chmod(this.path, this.mode, a => t());
            return;
          }
          if (this.flags[0] === "a") {
            const a = (l, u) => {
              if (l) {
                this.sftp.stat(this.path, (x, D) => {
                  if (x) {
                    this.destroy();
                    this.emit("error", l);
                    return;
                  }
                  a(null, D);
                });
                return;
              }
              this.pos = u.size;
              this.emit("open", c);
              this.emit("ready");
            };
            this.sftp.fstat(c, a);
            return;
          }
          this.emit("open", c);
          this.emit("ready");
        };
        this.sftp.fchmod(c, this.mode, t);
      });
    }
  };
  _e.prototype._write = function (d, c, t) {
    if (!Buffer.isBuffer(d)) {
      const s = new b("data", "Buffer", d);
      return this.emit("error", s);
    }
    if (!Buffer.isBuffer(this.handle)) {
      return this.once("open", function () {
        this._write(d, c, t);
      });
    }
    this.sftp.write(this.handle, d, 0, d.length, this.pos, (s, a) => {
      if (s) {
        if (this.autoClose) {
          this.destroy();
        }
        return t(s);
      }
      this.bytesWritten += a;
      t();
    });
    this.pos += d.length;
  };
  _e.prototype._writev = function (d, c) {
    if (!Buffer.isBuffer(this.handle)) {
      return this.once("open", function () {
        this._writev(d, c);
      });
    }
    const t = this.sftp;
    const s = this.handle;
    let a = d.length;
    const l = (u, x) => {
      if (u) {
        this.destroy();
        return c(u);
      }
      this.bytesWritten += x;
      if (--a === 0) {
        c();
      }
    };
    for (let u = 0; u < d.length; ++u) {
      const x = d[u].chunk;
      t.write(s, x, 0, x.length, this.pos, l);
      this.pos += x.length;
    }
  };
  if (typeof k.prototype.destroy != "function") {
    _e.prototype.destroy = se.prototype.destroy;
  }
  _e.prototype._destroy = se.prototype._destroy;
  _e.prototype.close = function (d) {
    if (d) {
      if (this.isClosed) {
        process.nextTick(d);
        return;
      }
      this.on("close", d);
    }
    if (!this.autoClose) {
      this.on("finish", this.destroy.bind(this));
    }
    this.end();
  };
  _e.prototype.destroySoon = _e.prototype.end;
  Object.defineProperty(_e.prototype, "pending", {
    get() {
      return this.handle === null;
    },
    configurable: true
  });
  jn = {
    flagsToString: Je,
    OPEN_MODE: Y,
    SFTP: we,
    Stats: Qe,
    STATUS_CODE: w,
    stringToFlags: qe
  };
  return jn;
}
var Vn;
var zr;
function Ui() {
  if (zr) {
    return Vn;
  }
  zr = 1;
  const {
    Duplex: p,
    Readable: e,
    Writable: r
  } = br;
  const {
    CHANNEL_EXTENDED_DATATYPE: {
      STDERR: y
    }
  } = jt();
  const {
    bufferSlice: k
  } = Kt();
  const m = 32768;
  const M = 2097152;
  const v = M / 2;
  class R extends e {
    constructor(X, K) {
      super(K);
      this._channel = X;
    }
    _read(X) {
      if (this._channel._waitChanDrain) {
        this._channel._waitChanDrain = false;
        if (this._channel.incoming.window <= v) {
          C(this._channel);
        }
      }
    }
  }
  class I extends r {
    constructor(X) {
      super({
        highWaterMark: M
      });
      this._channel = X;
    }
    _write(X, K, $) {
      const re = this._channel;
      const Y = re._client._protocol;
      const J = re.outgoing;
      const V = J.packetSize;
      const F = J.id;
      let oe = J.window;
      const Z = X.length;
      let he = 0;
      if (J.state === "open") {
        while (Z - he > 0 && oe > 0) {
          let U = Z - he;
          if (U > oe) {
            U = oe;
          }
          if (U > V) {
            U = V;
          }
          if (he === 0 && U === Z) {
            Y.channelExtData(F, X, y);
          } else {
            Y.channelExtData(F, k(X, he, he + U), y);
          }
          he += U;
          oe -= U;
        }
        J.window = oe;
        if (Z - he > 0) {
          if (oe === 0) {
            re._waitWindow = true;
          }
          if (he > 0) {
            re._chunkErr = k(X, he, Z);
          } else {
            re._chunkErr = X;
          }
          re._chunkcbErr = $;
          return;
        }
        $();
      }
    }
  }
  class Q extends p {
    constructor(X, K, $) {
      const re = {
        highWaterMark: M,
        allowHalfOpen: !$ || $ && $.allowHalfOpen !== false,
        emitClose: false
      };
      super(re);
      this.allowHalfOpen = re.allowHalfOpen;
      const Y = !!$ && !!$.server;
      this.server = Y;
      this.type = K.type;
      this.subtype = undefined;
      this.incoming = K.incoming;
      this.outgoing = K.outgoing;
      this._callbacks = [];
      this._client = X;
      this._hasX11 = false;
      this._exit = {
        code: undefined,
        signal: undefined,
        dump: undefined,
        desc: undefined
      };
      this.stdin = this.stdout = this;
      if (Y) {
        this.stderr = new I(this);
      } else {
        this.stderr = new R(this, re);
      }
      this._waitWindow = false;
      this._waitChanDrain = false;
      this._chunk = undefined;
      this._chunkcb = undefined;
      this._chunkErr = undefined;
      this._chunkcbErr = undefined;
      this.on("finish", n).on("prefinish", n);
      this.on("end", B).on("close", B);
    }
    _read(X) {
      if (this._waitChanDrain) {
        this._waitChanDrain = false;
        if (this.incoming.window <= v) {
          C(this);
        }
      }
    }
    _write(X, K, $) {
      const re = this._client._protocol;
      const Y = this.outgoing;
      const J = Y.packetSize;
      const V = Y.id;
      let F = Y.window;
      const oe = X.length;
      let Z = 0;
      if (Y.state === "open") {
        while (oe - Z > 0 && F > 0) {
          let he = oe - Z;
          if (he > F) {
            he = F;
          }
          if (he > J) {
            he = J;
          }
          if (Z === 0 && he === oe) {
            re.channelData(V, X);
          } else {
            re.channelData(V, k(X, Z, Z + he));
          }
          Z += he;
          F -= he;
        }
        Y.window = F;
        if (oe - Z > 0) {
          if (F === 0) {
            this._waitWindow = true;
          }
          if (Z > 0) {
            this._chunk = k(X, Z, oe);
          } else {
            this._chunk = X;
          }
          this._chunkcb = $;
          return;
        }
        $();
      }
    }
    eof() {
      if (this.outgoing.state === "open") {
        this.outgoing.state = "eof";
        this._client._protocol.channelEOF(this.outgoing.id);
      }
    }
    close() {
      if (this.outgoing.state === "open" || this.outgoing.state === "eof") {
        this.outgoing.state = "closing";
        this._client._protocol.channelClose(this.outgoing.id);
      }
    }
    destroy() {
      this.end();
      this.close();
      return this;
    }
    setWindow(X, K, $, re) {
      if (this.server) {
        throw new Error("Client-only method called in server mode");
      }
      if (this.type === "session" && (this.subtype === "shell" || this.subtype === "exec") && this.writable && this.outgoing.state === "open") {
        this._client._protocol.windowChange(this.outgoing.id, X, K, $, re);
      }
    }
    signal(X) {
      if (this.server) {
        throw new Error("Client-only method called in server mode");
      }
      if (this.type === "session" && this.writable && this.outgoing.state === "open") {
        this._client._protocol.signal(this.outgoing.id, X);
      }
    }
    exit(X, K, $) {
      if (!this.server) {
        throw new Error("Server-only method called in client mode");
      }
      if (this.type === "session" && this.writable && this.outgoing.state === "open") {
        if (typeof X == "number") {
          this._client._protocol.exitStatus(this.outgoing.id, X);
        } else {
          this._client._protocol.exitSignal(this.outgoing.id, X, K, $);
        }
      }
    }
  }
  function n() {
    this.eof();
    if (this.server || !this.allowHalfOpen) {
      this.close();
    }
    this.writable = false;
  }
  function B() {
    this.readable = false;
  }
  function C(w) {
    if (w.outgoing.state === "closed") {
      return;
    }
    const X = M - w.incoming.window;
    if (!(X <= 0)) {
      w.incoming.window += X;
      w._client._protocol.channelWindowAdjust(w.outgoing.id, X);
    }
  }
  Vn = {
    Channel: Q,
    MAX_WINDOW: M,
    PACKET_SIZE: m,
    windowAdjust: C,
    WINDOW_THRESHOLD: v
  };
  return Vn;
}
var zn;
var Jr;
function Di() {
  if (Jr) {
    return zn;
  }
  Jr = 1;
  const {
    SFTP: p
  } = Cn();
  const e = 4294967295;
  function r(v, R, I, Q) {
    v._chanMgr.remove(R);
    if (typeof Q != "function") {
      return;
    }
    let n;
    if (I instanceof Error) {
      n = I;
    } else if (typeof I == "object" && I !== null) {
      n = new Error(`(SSH) Channel open failure: ${I.description}`);
      n.reason = I.reason;
    } else {
      n = new Error("(SSH) Channel open failure: server closed channel unexpectedly");
      n.reason = "";
    }
    Q(n);
  }
  function y(v, R, I, Q, n) {
    if (typeof I == "function") {
      r(v, R, Q, I);
      return;
    }
    if (typeof I != "object" || I === null || I.incoming && I.incoming.state === "closed" || (v._chanMgr.remove(R), I.server && I.constructor.name === "Session")) {
      return;
    }
    I.incoming.state = "closed";
    if (I.readable) {
      I.push(null);
    }
    if (I.server) {
      if (I.stderr.writable) {
        I.stderr.end();
      }
    } else if (I.stderr.readable) {
      I.stderr.push(null);
    }
    if (I.constructor !== p && (I.outgoing.state === "open" || I.outgoing.state === "eof") && !n) {
      I.close();
    }
    if (I.outgoing.state === "closing") {
      I.outgoing.state = "closed";
    }
    const B = I._readableState;
    const C = I._writableState;
    if (C && !C.ending && !C.finished && !n) {
      I.end();
    }
    const w = I._callbacks;
    I._callbacks = [];
    for (let X = 0; X < w.length; ++X) {
      w[X](true);
    }
    if (I.server) {
      if (!I.readable || I.destroyed || B && B.endEmitted) {
        I.emit("close");
      } else {
        I.once("end", () => I.emit("close"));
      }
    } else {
      let X;
      switch (I.type) {
        case "direct-streamlocal@openssh.com":
        case "direct-tcpip":
          X = () => I.emit("close");
          break;
        default:
          {
            const $ = I._exit;
            X = () => {
              if ($.code === null) {
                I.emit("close", $.code, $.signal, $.dump, $.desc);
              } else {
                I.emit("close", $.code);
              }
            };
          }
      }
      if (!I.readable || I.destroyed || B && B.endEmitted) {
        X();
      } else {
        I.once("end", X);
      }
      const K = I.stderr._readableState;
      if (!I.stderr.readable || I.stderr.destroyed || K && K.endEmitted) {
        I.stderr.emit("close");
      } else {
        I.stderr.once("end", () => I.stderr.emit("close"));
      }
    }
  }
  class k {
    constructor(R) {
      this._client = R;
      this._channels = {};
      this._cur = -1;
      this._count = 0;
    }
    add(R) {
      let I;
      if (this._cur < e) {
        I = ++this._cur;
      } else if (this._count === 0) {
        this._cur = 0;
        I = 0;
      } else {
        const Q = this._channels;
        for (let n = 0; n < e; ++n) {
          if (Q[n] === undefined) {
            I = n;
            break;
          }
        }
      }
      if (I === undefined) {
        return -1;
      } else {
        this._channels[I] = R || true;
        ++this._count;
        return I;
      }
    }
    update(R, I) {
      if (typeof R != "number" || R < 0 || R >= e || !isFinite(R)) {
        throw new Error(`Invalid channel id: ${R}`);
      }
      if (I && this._channels[R]) {
        this._channels[R] = I;
      }
    }
    get(R) {
      if (typeof R != "number" || R < 0 || R >= e || !isFinite(R)) {
        throw new Error(`Invalid channel id: ${R}`);
      }
      return this._channels[R];
    }
    remove(R) {
      if (typeof R != "number" || R < 0 || R >= e || !isFinite(R)) {
        throw new Error(`Invalid channel id: ${R}`);
      }
      if (this._channels[R]) {
        delete this._channels[R];
        if (this._count) {
          --this._count;
        }
      }
    }
    cleanup(R) {
      const I = this._channels;
      this._channels = {};
      this._cur = -1;
      this._count = 0;
      const Q = Object.keys(I);
      const n = this._client;
      for (let B = 0; B < Q.length; ++B) {
        const C = +Q[B];
        const w = I[C];
        y(n, C, w._channel || w, R, true);
      }
    }
  }
  const m = (() => {
    const v = Object.prototype.toString;
    return R => v.call(R) === "[object RegExp]";
  })();
  function M(v, R, I) {
    if (Array.isArray(v) && v.length > 0) {
      for (let Q = 0; Q < v.length; ++Q) {
        if (I.indexOf(v[Q]) === -1) {
          throw new Error(`Unsupported algorithm: ${v[Q]}`);
        }
      }
      return v;
    }
    if (typeof v == "object" && v !== null) {
      const Q = Object.keys(v);
      let n = R;
      for (let B = 0; B < Q.length; ++B) {
        const C = Q[B];
        let w = v[C];
        switch (C) {
          case "append":
            if (!Array.isArray(w)) {
              w = [w];
            }
            if (Array.isArray(w)) {
              for (let X = 0; X < w.length; ++X) {
                const K = w[X];
                if (typeof K == "string") {
                  if (!K || n.indexOf(K) !== -1) {
                    continue;
                  }
                  if (I.indexOf(K) === -1) {
                    throw new Error(`Unsupported algorithm: ${K}`);
                  }
                  if (n === R) {
                    n = n.slice();
                  }
                  n.push(K);
                } else if (m(K)) {
                  for (let $ = 0; $ < I.length; ++$) {
                    const re = I[$];
                    if (K.test(re)) {
                      if (n.indexOf(re) !== -1) {
                        continue;
                      }
                      if (n === R) {
                        n = n.slice();
                      }
                      n.push(re);
                    }
                  }
                }
              }
            }
            break;
          case "prepend":
            if (!Array.isArray(w)) {
              w = [w];
            }
            if (Array.isArray(w)) {
              for (let X = w.length; X >= 0; --X) {
                const K = w[X];
                if (typeof K == "string") {
                  if (!K || n.indexOf(K) !== -1) {
                    continue;
                  }
                  if (I.indexOf(K) === -1) {
                    throw new Error(`Unsupported algorithm: ${K}`);
                  }
                  if (n === R) {
                    n = n.slice();
                  }
                  n.unshift(K);
                } else if (m(K)) {
                  for (let $ = I.length; $ >= 0; --$) {
                    const re = I[$];
                    if (K.test(re)) {
                      if (n.indexOf(re) !== -1) {
                        continue;
                      }
                      if (n === R) {
                        n = n.slice();
                      }
                      n.unshift(re);
                    }
                  }
                }
              }
            }
            break;
          case "remove":
            if (!Array.isArray(w)) {
              w = [w];
            }
            if (Array.isArray(w)) {
              for (let X = 0; X < w.length; ++X) {
                const K = w[X];
                if (typeof K == "string") {
                  if (!K) {
                    continue;
                  }
                  const $ = n.indexOf(K);
                  if ($ === -1) {
                    continue;
                  }
                  if (n === R) {
                    n = n.slice();
                  }
                  n.splice($, 1);
                } else if (m(K)) {
                  for (let $ = 0; $ < n.length; ++$) {
                    if (K.test(n[$])) {
                      if (n === R) {
                        n = n.slice();
                      }
                      n.splice($, 1);
                      --$;
                    }
                  }
                }
              }
            }
            break;
        }
      }
      return n;
    }
    return R;
  }
  zn = {
    ChannelManager: k,
    generateAlgorithmList: M,
    onChannelOpenFailure: r,
    onCHANNEL_CLOSE: y,
    isWritable: v => v && v.writable && v._readableState && v._readableState.ended === false
  };
  return zn;
}
var Jn;
var Zr;
function Hi() {
  if (Zr) {
    return Jn;
  }
  Zr = 1;
  const {
    createHash: p,
    getHashes: e,
    randomFillSync: r
  } = en;
  const {
    Socket: y
  } = Er;
  const {
    lookup: k
  } = is;
  const m = yr;
  const M = e();
  const {
    COMPAT: v,
    CHANNEL_EXTENDED_DATATYPE: {
      STDERR: R
    },
    CHANNEL_OPEN_FAILURE: I,
    DEFAULT_CIPHER: Q,
    DEFAULT_COMPRESSION: n,
    DEFAULT_KEX: B,
    DEFAULT_MAC: C,
    DEFAULT_SERVER_HOST_KEY: w,
    DISCONNECT_REASON: X,
    DISCONNECT_REASON_BY_VALUE: K,
    SUPPORTED_CIPHER: $,
    SUPPORTED_COMPRESSION: re,
    SUPPORTED_KEX: Y,
    SUPPORTED_MAC: J,
    SUPPORTED_SERVER_HOST_KEY: V
  } = jt();
  const {
    init: F
  } = tn();
  const oe = Li();
  const {
    parseKey: Z
  } = nn();
  const {
    SFTP: he
  } = Cn();
  const {
    bufferCopy: U,
    makeBufferParser: Ie,
    makeError: be,
    readUInt32BE: we,
    sigSSHToASN1: Me,
    writeUInt32BE: Ne
  } = Kt();
  const {
    AgentContext: Ue,
    createAgent: Le,
    isAgent: Qe
  } = vi();
  const {
    Channel: Xe,
    MAX_WINDOW: Ke,
    PACKET_SIZE: Re,
    windowAdjust: Pe,
    WINDOW_THRESHOLD: qe
  } = Ui();
  const {
    ChannelManager: Je,
    generateAlgorithmList: Oe,
    isWritable: Be,
    onChannelOpenFailure: $e,
    onCHANNEL_CLOSE: de
  } = Di();
  const P = Ie();
  const W = Ie();
  const g = /^OpenSSH_(?:(?![0-4])\d)|(?:\d{2,})/;
  const f = c => {};
  class o extends m {
    constructor() {
      super();
      this.config = {
        host: undefined,
        port: undefined,
        localAddress: undefined,
        localPort: undefined,
        forceIPv4: undefined,
        forceIPv6: undefined,
        keepaliveCountMax: undefined,
        keepaliveInterval: undefined,
        readyTimeout: undefined,
        ident: undefined,
        username: undefined,
        password: undefined,
        privateKey: undefined,
        tryKeyboard: undefined,
        agent: undefined,
        allowAgentFwd: undefined,
        authHandler: undefined,
        hostHashAlgo: undefined,
        hostHashCb: undefined,
        strictVendor: undefined,
        debug: undefined
      };
      this._agent = undefined;
      this._readyTimeout = undefined;
      this._chanMgr = undefined;
      this._callbacks = undefined;
      this._forwarding = undefined;
      this._forwardingUnix = undefined;
      this._acceptX11 = undefined;
      this._agentFwdEnabled = undefined;
      this._remoteVer = undefined;
      this._protocol = undefined;
      this._sock = undefined;
      this._resetKA = undefined;
    }
    connect(t) {
      if (this._sock && Be(this._sock)) {
        this.once("close", () => {
          this.connect(t);
        });
        this.end();
        return this;
      }
      this.config.host = t.hostname || t.host || "localhost";
      this.config.port = t.port || 22;
      this.config.localAddress = typeof t.localAddress == "string" ? t.localAddress : undefined;
      this.config.localPort = typeof t.localPort == "string" || typeof t.localPort == "number" ? t.localPort : undefined;
      this.config.forceIPv4 = t.forceIPv4 || false;
      this.config.forceIPv6 = t.forceIPv6 || false;
      this.config.keepaliveCountMax = typeof t.keepaliveCountMax == "number" && t.keepaliveCountMax >= 0 ? t.keepaliveCountMax : 3;
      this.config.keepaliveInterval = typeof t.keepaliveInterval == "number" && t.keepaliveInterval > 0 ? t.keepaliveInterval : 0;
      this.config.readyTimeout = typeof t.readyTimeout == "number" && t.readyTimeout >= 0 ? t.readyTimeout : 20000;
      this.config.ident = typeof t.ident == "string" || Buffer.isBuffer(t.ident) ? t.ident : undefined;
      const s = {
        kex: undefined,
        serverHostKey: undefined,
        cs: {
          cipher: undefined,
          mac: undefined,
          compress: undefined,
          lang: []
        },
        sc: undefined
      };
      let a = true;
      if (typeof t.algorithms == "object" && t.algorithms !== null) {
        s.kex = Oe(t.algorithms.kex, B, Y);
        if (s.kex !== B) {
          a = false;
        }
        s.serverHostKey = Oe(t.algorithms.serverHostKey, w, V);
        if (s.serverHostKey !== w) {
          a = false;
        }
        s.cs.cipher = Oe(t.algorithms.cipher, Q, $);
        if (s.cs.cipher !== Q) {
          a = false;
        }
        s.cs.mac = Oe(t.algorithms.hmac, C, J);
        if (s.cs.mac !== C) {
          a = false;
        }
        s.cs.compress = Oe(t.algorithms.compress, n, re);
        if (s.cs.compress !== n) {
          a = false;
        }
        if (!a) {
          s.sc = s.cs;
        }
      }
      if (typeof t.username == "string") {
        this.config.username = t.username;
      } else if (typeof t.user == "string") {
        this.config.username = t.user;
      } else {
        throw new Error("Invalid username");
      }
      this.config.password = typeof t.password == "string" ? t.password : undefined;
      this.config.privateKey = typeof t.privateKey == "string" || Buffer.isBuffer(t.privateKey) ? t.privateKey : undefined;
      this.config.localHostname = typeof t.localHostname == "string" ? t.localHostname : undefined;
      this.config.localUsername = typeof t.localUsername == "string" ? t.localUsername : undefined;
      this.config.tryKeyboard = t.tryKeyboard === true;
      if (typeof t.agent == "string" && t.agent.length) {
        this.config.agent = Le(t.agent);
      } else if (Qe(t.agent)) {
        this.config.agent = t.agent;
      } else {
        this.config.agent = undefined;
      }
      this.config.allowAgentFwd = t.agentForward === true && this.config.agent !== undefined;
      let l = this.config.authHandler = typeof t.authHandler == "function" || Array.isArray(t.authHandler) ? t.authHandler : undefined;
      this.config.strictVendor = typeof t.strictVendor == "boolean" ? t.strictVendor : true;
      const u = this.config.debug = typeof t.debug == "function" ? t.debug : undefined;
      if (t.agentForward === true && !this.config.allowAgentFwd) {
        throw new Error("You must set a valid agent path to allow agent forwarding");
      }
      let x = this._callbacks = [];
      this._chanMgr = new Je(this);
      this._forwarding = {};
      this._forwardingUnix = {};
      this._acceptX11 = 0;
      this._agentFwdEnabled = false;
      this._agent = this.config.agent ? this.config.agent : undefined;
      this._remoteVer = undefined;
      let D;
      if (this.config.privateKey) {
        D = Z(this.config.privateKey, t.passphrase);
        if (D instanceof Error) {
          throw new Error(`Cannot parse privateKey: ${D.message}`);
        }
        if (Array.isArray(D)) {
          D = D[0];
        }
        if (D.getPrivatePEM() === null) {
          throw new Error("privateKey value does not contain a (valid) private key");
        }
      }
      let G;
      if (typeof t.hostVerifier == "function") {
        const ee = t.hostVerifier;
        let ce;
        if (M.indexOf(t.hostHash) !== -1) {
          ce = t.hostHash;
        }
        G = (fe, Ee) => {
          if (ce) {
            fe = p(ce).update(fe).digest("hex");
          }
          const xe = ee(fe, Ee);
          if (xe !== undefined) {
            Ee(xe);
          }
        };
      }
      const ie = this._sock = t.sock || new y();
      let ue = false;
      let pe = false;
      if (this._protocol) {
        this._protocol.cleanup();
      }
      const Te = u ? (ee, ce, fe) => {
        u(`Debug output from server: ${JSON.stringify(fe)}`);
      } : undefined;
      let He;
      const ve = this._protocol = new oe({
        ident: this.config.ident,
        offer: a ? undefined : s,
        onWrite: ee => {
          if (Be(ie)) {
            ie.write(ee);
          }
        },
        onError: ee => {
          if (ee.level === "handshake") {
            clearTimeout(this._readyTimeout);
          }
          if (!ve._destruct) {
            ie.removeAllListeners("data");
          }
          this.emit("error", ee);
          try {
            ie.end();
          } catch {}
        },
        onHeader: ee => {
          pe = true;
          this._remoteVer = ee.versions.software;
          if (ee.greeting) {
            this.emit("greeting", ee.greeting);
          }
        },
        onHandshakeComplete: ee => {
          this.emit("handshake", ee);
          if (!ue) {
            ue = true;
            ve.service("ssh-userauth");
          }
        },
        debug: u,
        hostVerifier: G,
        messageHandlers: {
          DEBUG: Te,
          DISCONNECT: (ee, ce, fe) => {
            if (ce !== X.BY_APPLICATION) {
              if (!fe) {
                fe = K[ce];
                if (fe === undefined) {
                  fe = `Unexpected disconnection reason: ${ce}`;
                }
              }
              const Ee = new Error(fe);
              Ee.code = ce;
              this.emit("error", Ee);
            }
            ie.end();
          },
          SERVICE_ACCEPT: (ee, ce) => {
            if (ce === "ssh-userauth") {
              te();
            }
          },
          EXT_INFO: (ee, ce) => {
            if (He === undefined) {
              for (const fe of ce) {
                if (fe.name === "server-sig-algs") {
                  He = fe.algs;
                  return;
                }
              }
              He = null;
            }
          },
          USERAUTH_BANNER: (ee, ce) => {
            this.emit("banner", ce);
          },
          USERAUTH_SUCCESS: ee => {
            wt();
            clearTimeout(this._readyTimeout);
            this.emit("ready");
          },
          USERAUTH_FAILURE: (ee, ce, fe) => {
            if (Fe.keyAlgos) {
              const Ee = Fe.keyAlgos[0][0];
              if (u) {
                u(`Client: ${Fe.type} (${Ee}) auth failed`);
              }
              Fe.keyAlgos.shift();
              if (Fe.keyAlgos.length) {
                const [xe, De] = Fe.keyAlgos[0];
                switch (Fe.type) {
                  case "agent":
                    ve.authPK(Fe.username, Fe.agentCtx.currentKey(), xe);
                    return;
                  case "publickey":
                    ve.authPK(Fe.username, Fe.key, xe);
                    return;
                  case "hostbased":
                    ve.authHostbased(Fe.username, Fe.key, Fe.localHostname, Fe.localUsername, xe, (Ge, ot) => {
                      const tt = Fe.key.sign(Ge, De);
                      if (tt instanceof Error) {
                        tt.message = `Error while signing with key: ${tt.message}`;
                        tt.level = "client-authentication";
                        this.emit("error", tt);
                        return te();
                      }
                      ot(tt);
                    });
                    return;
                }
              } else {
                Fe.keyAlgos = undefined;
              }
            }
            if (Fe.type === "agent") {
              const Ee = Fe.agentCtx.pos();
              if (u) {
                u(`Client: Agent key #${Ee + 1} failed`);
              }
              return ae();
            }
            if (u) {
              u(`Client: ${Fe.type} auth failed`);
            }
            Wt = fe;
            _ = ce;
            te();
          },
          USERAUTH_PASSWD_CHANGEREQ: (ee, ce) => {
            if (Fe.type === "password") {
              this.emit("change password", ce, fe => {
                ve.authPassword(this.config.username, this.config.password, fe);
              });
            }
          },
          USERAUTH_PK_OK: ee => {
            let ce;
            let fe;
            if (Fe.keyAlgos) {
              [ce, fe] = Fe.keyAlgos[0];
            }
            if (Fe.type === "agent") {
              const Ee = Fe.agentCtx.currentKey();
              ve.authPK(Fe.username, Ee, ce, (xe, De) => {
                const Ge = {
                  hash: fe
                };
                Fe.agentCtx.sign(Ee, xe, Ge, (ot, tt) => {
                  if (ot) {
                    ot.level = "agent";
                    this.emit("error", ot);
                  } else {
                    return De(tt);
                  }
                  ae();
                });
              });
            } else if (Fe.type === "publickey") {
              ve.authPK(Fe.username, Fe.key, ce, (Ee, xe) => {
                const De = Fe.key.sign(Ee, fe);
                if (De instanceof Error) {
                  De.message = `Error signing data with key: ${De.message}`;
                  De.level = "client-authentication";
                  this.emit("error", De);
                  return te();
                }
                xe(De);
              });
            }
          },
          USERAUTH_INFO_REQUEST: (ee, ce, fe, Ee) => {
            if (Fe.type === "keyboard-interactive") {
              if ((Array.isArray(Ee) ? Ee.length : 0) === 0) {
                if (u) {
                  u("Client: Sending automatic USERAUTH_INFO_RESPONSE");
                }
                ve.authInfoRes();
                return;
              }
              Fe.prompt(ce, fe, "", Ee, De => {
                ve.authInfoRes(De);
              });
            }
          },
          REQUEST_SUCCESS: (ee, ce) => {
            if (x.length) {
              x.shift()(false, ce);
            }
          },
          REQUEST_FAILURE: ee => {
            if (x.length) {
              x.shift()(true);
            }
          },
          GLOBAL_REQUEST: (ee, ce, fe, Ee) => {
            switch (ce) {
              case "hostkeys-00@openssh.com":
                _e(this, Ee, (xe, De) => {
                  if (!xe) {
                    this.emit("hostkeys", De);
                  }
                });
                if (fe) {
                  ve.requestSuccess();
                }
                break;
              default:
                if (fe) {
                  ve.requestFailure();
                }
            }
          },
          CHANNEL_OPEN: (ee, ce) => {
            j(this, ce);
          },
          CHANNEL_OPEN_CONFIRMATION: (ee, ce) => {
            const fe = this._chanMgr.get(ce.recipient);
            if (typeof fe != "function") {
              return;
            }
            const Ee = fe.type === "sftp";
            const De = {
              type: Ee ? "session" : fe.type,
              incoming: {
                id: ce.recipient,
                window: Ke,
                packetSize: Re,
                state: "open"
              },
              outgoing: {
                id: ce.sender,
                window: ce.window,
                packetSize: ce.packetSize,
                state: "open"
              }
            };
            const Ge = Ee ? new he(this, De, {
              debug: u
            }) : new Xe(this, De);
            this._chanMgr.update(ce.recipient, Ge);
            fe(undefined, Ge);
          },
          CHANNEL_OPEN_FAILURE: (ee, ce, fe, Ee) => {
            const xe = this._chanMgr.get(ce);
            if (typeof xe != "function") {
              return;
            }
            $e(this, ce, {
              reason: fe,
              description: Ee
            }, xe);
          },
          CHANNEL_DATA: (ee, ce, fe) => {
            const Ee = this._chanMgr.get(ce);
            if (typeof Ee == "object" && Ee !== null && Ee.incoming.window !== 0) {
              Ee.incoming.window -= fe.length;
              if (Ee.push(fe) === false) {
                Ee._waitChanDrain = true;
                return;
              }
              if (Ee.incoming.window <= qe) {
                Pe(Ee);
              }
            }
          },
          CHANNEL_EXTENDED_DATA: (ee, ce, fe, Ee) => {
            if (Ee !== R) {
              return;
            }
            const xe = this._chanMgr.get(ce);
            if (typeof xe == "object" && xe !== null && xe.incoming.window !== 0) {
              xe.incoming.window -= fe.length;
              if (!xe.stderr.push(fe)) {
                xe._waitChanDrain = true;
                return;
              }
              if (xe.incoming.window <= qe) {
                Pe(xe);
              }
            }
          },
          CHANNEL_WINDOW_ADJUST: (ee, ce, fe) => {
            const Ee = this._chanMgr.get(ce);
            if (typeof Ee == "object" && Ee !== null) {
              Ee.outgoing.window += fe;
              if (Ee._waitWindow) {
                Ee._waitWindow = false;
                if (Ee._chunk) {
                  Ee._write(Ee._chunk, null, Ee._chunkcb);
                } else if (Ee._chunkcb) {
                  Ee._chunkcb();
                } else if (Ee._chunkErr) {
                  Ee.stderr._write(Ee._chunkErr, null, Ee._chunkcbErr);
                } else if (Ee._chunkcbErr) {
                  Ee._chunkcbErr();
                }
              }
            }
          },
          CHANNEL_SUCCESS: (ee, ce) => {
            const fe = this._chanMgr.get(ce);
            if (typeof fe == "object" && fe !== null) {
              this._resetKA();
              if (fe._callbacks.length) {
                fe._callbacks.shift()(false);
              }
            }
          },
          CHANNEL_FAILURE: (ee, ce) => {
            const fe = this._chanMgr.get(ce);
            if (typeof fe == "object" && fe !== null) {
              this._resetKA();
              if (fe._callbacks.length) {
                fe._callbacks.shift()(true);
              }
            }
          },
          CHANNEL_REQUEST: (ee, ce, fe, Ee, xe) => {
            const De = this._chanMgr.get(ce);
            if (typeof De != "object" || De === null) {
              return;
            }
            const Ge = De._exit;
            if (Ge.code === undefined) {
              switch (fe) {
                case "exit-status":
                  De.emit("exit", Ge.code = xe);
                  return;
                case "exit-signal":
                  De.emit("exit", Ge.code = null, Ge.signal = `SIG${xe.signal}`, Ge.dump = xe.coreDumped, Ge.desc = xe.errorMessage);
                  return;
              }
              if (Ee) {
                ee.channelFailure(De.outgoing.id);
              }
            }
          },
          CHANNEL_EOF: (ee, ce) => {
            const fe = this._chanMgr.get(ce);
            if (typeof fe == "object" && fe !== null) {
              if (fe.incoming.state === "open") {
                fe.incoming.state = "eof";
                if (fe.readable) {
                  fe.push(null);
                }
                if (fe.stderr.readable) {
                  fe.stderr.push(null);
                }
              }
            }
          },
          CHANNEL_CLOSE: (ee, ce) => {
            de(this, ce, this._chanMgr.get(ce));
          }
        }
      });
      ie.pause();
      const Ze = this.config.keepaliveInterval;
      const nt = this.config.keepaliveCountMax;
      let st = 0;
      let rt;
      const yt = () => {
        if (++st > nt) {
          clearInterval(rt);
          if (ie.readable) {
            const ee = new Error("Keepalive timeout");
            ee.level = "client-timeout";
            this.emit("error", ee);
            ie.destroy();
          }
          return;
        }
        if (Be(ie)) {
          x.push(wt);
          ve.ping();
        } else {
          clearInterval(rt);
        }
      };
      function wt() {
        if (Ze > 0) {
          st = 0;
          clearInterval(rt);
          if (Be(ie)) {
            rt = setInterval(yt, Ze);
          }
        }
      }
      this._resetKA = wt;
      const kt = (() => {
        let ee = false;
        return () => {
          if (!ee && (ee = true, rn && !pe)) {
            const ce = be("Connection lost before handshake", "protocol", true);
            this.emit("error", ce);
          }
        };
      })();
      const Qt = (() => {
        let ee = false;
        return () => {
          if (!ee) {
            ee = true;
            rn = true;
            if (u) {
              u("Socket connected");
            }
            this.emit("connect");
            F.then(() => {
              ve.start();
              ie.on("data", ce => {
                try {
                  ve.parse(ce, 0, ce.length);
                } catch (fe) {
                  this.emit("error", fe);
                  try {
                    if (Be(ie)) {
                      ie.end();
                    }
                  } catch {}
                }
              });
              if (ie.stderr && typeof ie.stderr.resume == "function") {
                ie.stderr.resume();
              }
              ie.resume();
            }).catch(ce => {
              this.emit("error", ce);
              try {
                if (Be(ie)) {
                  ie.end();
                }
              } catch {}
            });
          }
        };
      })();
      let rn = false;
      ie.on("connect", Qt).on("timeout", () => {
        this.emit("timeout");
      }).on("error", ee => {
        if (u) {
          u(`Socket error: ${ee.message}`);
        }
        clearTimeout(this._readyTimeout);
        ee.level = "client-socket";
        this.emit("error", ee);
      }).on("end", () => {
        if (u) {
          u("Socket ended");
        }
        kt();
        ve.cleanup();
        clearTimeout(this._readyTimeout);
        clearInterval(rt);
        this.emit("end");
      }).on("close", () => {
        if (u) {
          u("Socket closed");
        }
        kt();
        ve.cleanup();
        clearTimeout(this._readyTimeout);
        clearInterval(rt);
        this.emit("close");
        const ee = x;
        x = this._callbacks = [];
        const ce = new Error("No response from server");
        for (let fe = 0; fe < ee.length; ++fe) {
          ee[fe](ce);
        }
        this._chanMgr.cleanup(ce);
      });
      let Fe;
      let Wt = null;
      let _ = null;
      const N = ["none"];
      if (this.config.password !== undefined) {
        N.push("password");
      }
      if (D !== undefined) {
        N.push("publickey");
      }
      if (this._agent !== undefined) {
        N.push("agent");
      }
      if (this.config.tryKeyboard) {
        N.push("keyboard-interactive");
      }
      if (D !== undefined && this.config.localHostname !== undefined && this.config.localUsername !== undefined) {
        N.push("hostbased");
      }
      if (Array.isArray(l)) {
        l = le(l);
      } else if (typeof l != "function") {
        l = le(N);
      }
      let T = false;
      const i = ee => {
        if (!T) {
          T = true;
          if (ee === false) {
            const ce = new Error("All configured authentication methods failed");
            ce.level = "client-authentication";
            this.emit("error", ce);
            this.end();
            return;
          }
          if (typeof ee == "string") {
            const ce = ee;
            if (N.indexOf(ce) === -1) {
              return H(`Authentication method not allowed: ${ce}`);
            }
            const fe = this.config.username;
            switch (ce) {
              case "password":
                ee = {
                  type: ce,
                  username: fe,
                  password: this.config.password
                };
                break;
              case "publickey":
                ee = {
                  type: ce,
                  username: fe,
                  key: D
                };
                break;
              case "hostbased":
                ee = {
                  type: ce,
                  username: fe,
                  key: D,
                  localHostname: this.config.localHostname,
                  localUsername: this.config.localUsername
                };
                break;
              case "agent":
                ee = {
                  type: ce,
                  username: fe,
                  agentCtx: new Ue(this._agent)
                };
                break;
              case "keyboard-interactive":
                ee = {
                  type: ce,
                  username: fe,
                  prompt: (...Ee) => this.emit("keyboard-interactive", ...Ee)
                };
                break;
              case "none":
                ee = {
                  type: ce,
                  username: fe
                };
                break;
              default:
                return H(`Skipping unsupported authentication method: ${ee}`);
            }
          } else {
            if (typeof ee != "object" || ee === null) {
              return H(`Skipping invalid authentication attempt: ${ee}`);
            }
            {
              const ce = ee.username;
              if (typeof ce != "string") {
                return H(`Skipping invalid authentication attempt: ${ee}`);
              }
              const fe = ee.type;
              switch (fe) {
                case "password":
                  {
                    const {
                      password: Ee
                    } = ee;
                    if (typeof Ee != "string" && !Buffer.isBuffer(Ee)) {
                      return H("Skipping invalid password auth attempt");
                    }
                    ee = {
                      type: fe,
                      username: ce,
                      password: Ee
                    };
                    break;
                  }
                case "publickey":
                  {
                    const Ee = Z(ee.key, ee.passphrase);
                    if (Ee instanceof Error) {
                      return H("Skipping invalid key auth attempt");
                    }
                    if (!Ee.isPrivateKey()) {
                      return H("Skipping non-private key");
                    }
                    ee = {
                      type: fe,
                      username: ce,
                      key: Ee
                    };
                    break;
                  }
                case "hostbased":
                  {
                    const {
                      localHostname: Ee,
                      localUsername: xe
                    } = ee;
                    const De = Z(ee.key, ee.passphrase);
                    if (De instanceof Error || typeof Ee != "string" || typeof xe != "string") {
                      return H("Skipping invalid hostbased auth attempt");
                    }
                    if (!De.isPrivateKey()) {
                      return H("Skipping non-private key");
                    }
                    ee = {
                      type: fe,
                      username: ce,
                      key: De,
                      localHostname: Ee,
                      localUsername: xe
                    };
                    break;
                  }
                case "agent":
                  {
                    let Ee = ee.agent;
                    if (typeof Ee == "string" && Ee.length) {
                      Ee = Le(Ee);
                    } else if (!Qe(Ee)) {
                      return H(`Skipping invalid agent: ${ee.agent}`);
                    }
                    ee = {
                      type: fe,
                      username: ce,
                      agentCtx: new Ue(Ee)
                    };
                    break;
                  }
                case "keyboard-interactive":
                  {
                    const {
                      prompt: Ee
                    } = ee;
                    if (typeof Ee != "function") {
                      return H("Skipping invalid keyboard-interactive auth attempt");
                    }
                    ee = {
                      type: fe,
                      username: ce,
                      prompt: Ee
                    };
                    break;
                  }
                case "none":
                  ee = {
                    type: fe,
                    username: ce
                  };
                  break;
                default:
                  return H(`Skipping unsupported authentication method: ${ee}`);
              }
            }
          }
          Fe = ee;
          try {
            const ce = Fe.username;
            switch (Fe.type) {
              case "password":
                ve.authPassword(ce, Fe.password);
                break;
              case "publickey":
                {
                  let fe;
                  Fe.keyAlgos = d(this, Fe.key, He);
                  if (Fe.keyAlgos) {
                    if (Fe.keyAlgos.length) {
                      fe = Fe.keyAlgos[0][0];
                    } else {
                      return H("Skipping key authentication (no mutual hash algorithm)");
                    }
                  }
                  ve.authPK(ce, Fe.key, fe);
                  break;
                }
              case "hostbased":
                {
                  let fe;
                  let Ee;
                  Fe.keyAlgos = d(this, Fe.key, He);
                  if (Fe.keyAlgos) {
                    if (Fe.keyAlgos.length) {
                      [fe, Ee] = Fe.keyAlgos[0];
                    } else {
                      return H("Skipping hostbased authentication (no mutual hash algorithm)");
                    }
                  }
                  ve.authHostbased(ce, Fe.key, Fe.localHostname, Fe.localUsername, fe, (xe, De) => {
                    const Ge = Fe.key.sign(xe, Ee);
                    if (Ge instanceof Error) {
                      Ge.message = `Error while signing with key: ${Ge.message}`;
                      Ge.level = "client-authentication";
                      this.emit("error", Ge);
                      return te();
                    }
                    De(Ge);
                  });
                  break;
                }
              case "agent":
                Fe.agentCtx.init(fe => {
                  if (fe) {
                    fe.level = "agent";
                    this.emit("error", fe);
                    return te();
                  }
                  ae();
                });
                break;
              case "keyboard-interactive":
                ve.authKeyboard(ce);
                break;
              case "none":
                ve.authNone(ce);
                break;
            }
          } finally {
            T = false;
          }
        }
      };
      function H(ee) {
        if (u) {
          u(ee);
        }
        process.nextTick(te);
      }
      function te() {
        T = false;
        const ee = l(_, Wt, i);
        if (!T && ee !== undefined) {
          i(ee);
        }
      }
      const ae = () => {
        if (Fe.type === "agent") {
          const ee = Fe.agentCtx.nextKey();
          if (ee === false) {
            if (u) {
              u("Agent: No more keys left to try");
            }
            if (u) {
              u("Client: agent auth failed");
            }
            te();
          } else {
            const ce = Fe.agentCtx.pos();
            let fe;
            Fe.keyAlgos = d(this, ee, He);
            if (Fe.keyAlgos) {
              if (Fe.keyAlgos.length) {
                fe = Fe.keyAlgos[0][0];
              } else {
                if (u) {
                  u(`Agent: Skipping key #${ce + 1} (no mutual hash algorithm)`);
                }
                ae();
                return;
              }
            }
            if (u) {
              u(`Agent: Trying key #${ce + 1}`);
            }
            ve.authPK(Fe.username, ee, fe);
          }
        }
      };
      const me = () => {
        if (this.config.readyTimeout > 0) {
          this._readyTimeout = setTimeout(() => {
            const ee = new Error("Timed out while waiting for handshake");
            ee.level = "client-timeout";
            this.emit("error", ee);
            ie.destroy();
          }, this.config.readyTimeout);
        }
      };
      if (t.sock) {
        me();
        if (typeof ie.connecting != "boolean" || !ie.connecting) {
          Qt();
        }
      } else {
        let ee = this.config.host;
        const ce = this.config.forceIPv4;
        const fe = this.config.forceIPv6;
        if (u) {
          u(`Client: Trying ${ee} on port ${this.config.port} ...`);
        }
        const Ee = () => {
          me();
          ie.connect({
            host: ee,
            port: this.config.port,
            localAddress: this.config.localAddress,
            localPort: this.config.localPort
          });
          ie.setMaxListeners(0);
          ie.setTimeout(typeof t.timeout == "number" ? t.timeout : 0);
        };
        if (!ce && !fe || ce && fe) {
          Ee();
        } else {
          k(ee, ce ? 4 : 6, (xe, De, Ge) => {
            if (xe) {
              const ot = ce ? "IPv4" : "IPv6";
              const tt = new Error(`Error while looking up ${ot} address for '${ee}': ${xe}`);
              clearTimeout(this._readyTimeout);
              tt.level = "client-dns";
              this.emit("error", tt);
              this.emit("close");
              return;
            }
            ee = De;
            Ee();
          });
        }
      }
      return this;
    }
    end() {
      if (this._sock && Be(this._sock)) {
        this._protocol.disconnect(X.BY_APPLICATION);
        this._sock.end();
      }
      return this;
    }
    destroy() {
      if (this._sock && Be(this._sock)) {
        this._sock.destroy();
      }
      return this;
    }
    exec(t, s, a) {
      if (!this._sock || !Be(this._sock)) {
        throw new Error("Not connected");
      }
      if (typeof s == "function") {
        a = s;
        s = {};
      }
      const l = {
        allowHalfOpen: s.allowHalfOpen !== false
      };
      b(this, "session", l, (u, x) => {
        if (u) {
          a(u);
          return;
        }
        const D = [];
        function G(ie) {
          if (ie) {
            x.close();
            a(ie);
            return;
          }
          if (D.length) {
            D.shift()();
          }
        }
        if (this.config.allowAgentFwd === true || s && s.agentForward === true && this._agent !== undefined) {
          D.push(() => E(x, G));
        }
        if (typeof s == "object" && s !== null) {
          if (typeof s.env == "object" && s.env !== null) {
            S(x, s.env);
          }
          if (typeof s.pty == "object" && s.pty !== null || s.pty === true) {
            D.push(() => q(x, s.pty, G));
          }
          if (typeof s.x11 == "object" && s.x11 !== null || s.x11 === "number" || s.x11 === true) {
            D.push(() => O(x, s.x11, G));
          }
        }
        D.push(() => h(x, t, s, a));
        D.shift()();
      });
      return this;
    }
    shell(t, s, a) {
      if (!this._sock || !Be(this._sock)) {
        throw new Error("Not connected");
      }
      if (typeof t == "function") {
        a = t;
        t = s = undefined;
      } else if (typeof s == "function") {
        a = s;
        s = undefined;
      }
      if (t && (t.x11 !== undefined || t.env !== undefined)) {
        s = t;
        t = undefined;
      }
      b(this, "session", (l, u) => {
        if (l) {
          a(l);
          return;
        }
        const x = [];
        function D(G) {
          if (G) {
            u.close();
            a(G);
            return;
          }
          if (x.length) {
            x.shift()();
          }
        }
        if (this.config.allowAgentFwd === true || s && s.agentForward === true && this._agent !== undefined) {
          x.push(() => E(u, D));
        }
        if (t !== false) {
          x.push(() => q(u, t, D));
        }
        if (typeof s == "object" && s !== null) {
          if (typeof s.env == "object" && s.env !== null) {
            S(u, s.env);
          }
          if (typeof s.x11 == "object" && s.x11 !== null || s.x11 === "number" || s.x11 === true) {
            x.push(() => O(u, s.x11, D));
          }
        }
        x.push(() => A(u, a));
        x.shift()();
      });
      return this;
    }
    subsys(t, s) {
      if (!this._sock || !Be(this._sock)) {
        throw new Error("Not connected");
      }
      b(this, "session", (a, l) => {
        if (a) {
          s(a);
          return;
        }
        L(l, t, (u, x) => {
          if (u) {
            s(u);
            return;
          }
          s(undefined, x);
        });
      });
      return this;
    }
    forwardIn(t, s, a) {
      if (!this._sock || !Be(this._sock)) {
        throw new Error("Not connected");
      }
      const l = typeof a == "function";
      if (l) {
        this._callbacks.push((u, x) => {
          if (u) {
            a(u !== true ? u : new Error(`Unable to bind to ${t}:${s}`));
            return;
          }
          let D = s;
          if (s === 0 && x && x.length >= 4) {
            D = we(x, 0);
            if (!(this._protocol._compatFlags & v.DYN_RPORT_BUG)) {
              s = D;
            }
          }
          this._forwarding[`${t}:${s}`] = D;
          a(undefined, D);
        });
      }
      this._protocol.tcpipForward(t, s, l);
      return this;
    }
    unforwardIn(t, s, a) {
      if (!this._sock || !Be(this._sock)) {
        throw new Error("Not connected");
      }
      const l = typeof a == "function";
      if (l) {
        this._callbacks.push(u => {
          if (u) {
            a(u !== true ? u : new Error(`Unable to unbind from ${t}:${s}`));
            return;
          }
          delete this._forwarding[`${t}:${s}`];
          a();
        });
      }
      this._protocol.cancelTcpipForward(t, s, l);
      return this;
    }
    forwardOut(t, s, a, l, u) {
      if (!this._sock || !Be(this._sock)) {
        throw new Error("Not connected");
      }
      const x = {
        srcIP: t,
        srcPort: s,
        dstIP: a,
        dstPort: l
      };
      if (typeof u != "function") {
        u = f;
      }
      b(this, "direct-tcpip", x, u);
      return this;
    }
    openssh_noMoreSessions(t) {
      if (!this._sock || !Be(this._sock)) {
        throw new Error("Not connected");
      }
      const s = typeof t == "function";
      if (!this.config.strictVendor || this.config.strictVendor && g.test(this._remoteVer)) {
        if (s) {
          this._callbacks.push(a => {
            if (a) {
              t(a !== true ? a : new Error("Unable to disable future sessions"));
              return;
            }
            t();
          });
        }
        this._protocol.openssh_noMoreSessions(s);
        return this;
      } else if (s) {
        process.nextTick(t, new Error("strictVendor enabled and server is not OpenSSH or compatible version"));
        return this;
      } else {
        return this;
      }
    }
    openssh_forwardInStreamLocal(t, s) {
      if (!this._sock || !Be(this._sock)) {
        throw new Error("Not connected");
      }
      const a = typeof s == "function";
      if (!this.config.strictVendor || this.config.strictVendor && g.test(this._remoteVer)) {
        if (a) {
          this._callbacks.push(l => {
            if (l) {
              s(l !== true ? l : new Error(`Unable to bind to ${t}`));
              return;
            }
            this._forwardingUnix[t] = true;
            s();
          });
        }
        this._protocol.openssh_streamLocalForward(t, a);
        return this;
      } else if (a) {
        process.nextTick(s, new Error("strictVendor enabled and server is not OpenSSH or compatible version"));
        return this;
      } else {
        return this;
      }
    }
    openssh_unforwardInStreamLocal(t, s) {
      if (!this._sock || !Be(this._sock)) {
        throw new Error("Not connected");
      }
      const a = typeof s == "function";
      if (!this.config.strictVendor || this.config.strictVendor && g.test(this._remoteVer)) {
        if (a) {
          this._callbacks.push(l => {
            if (l) {
              s(l !== true ? l : new Error(`Unable to unbind from ${t}`));
              return;
            }
            delete this._forwardingUnix[t];
            s();
          });
        }
        this._protocol.openssh_cancelStreamLocalForward(t, a);
        return this;
      } else if (a) {
        process.nextTick(s, new Error("strictVendor enabled and server is not OpenSSH or compatible version"));
        return this;
      } else {
        return this;
      }
    }
    openssh_forwardOutStreamLocal(t, s) {
      if (!this._sock || !Be(this._sock)) {
        throw new Error("Not connected");
      }
      if (typeof s != "function") {
        s = f;
      }
      if (!this.config.strictVendor || this.config.strictVendor && g.test(this._remoteVer)) {
        b(this, "direct-streamlocal@openssh.com", {
          socketPath: t
        }, s);
        return this;
      } else {
        process.nextTick(s, new Error("strictVendor enabled and server is not OpenSSH or compatible version"));
        return this;
      }
    }
    sftp(t, s) {
      if (!this._sock || !Be(this._sock)) {
        throw new Error("Not connected");
      }
      if (typeof t == "function") {
        s = t;
        t = undefined;
      }
      b(this, "sftp", (a, l) => {
        if (a) {
          s(a);
          return;
        }
        const u = (x, D) => {
          if (x) {
            s(x);
            return;
          }
          function G() {
            l.removeListener("ready", ie);
            l.removeListener("error", ue);
            l.removeListener("exit", pe);
            l.removeListener("close", pe);
          }
          function ie() {
            G();
            s(undefined, l);
          }
          function ue(Te) {
            G();
            s(Te);
          }
          function pe(Te, He) {
            G();
            let ve;
            if (typeof Te == "number") {
              ve = `Received exit code ${Te} while establishing SFTP session`;
            } else if (He !== undefined) {
              ve = `Received signal ${He} while establishing SFTP session`;
            } else {
              ve = "Received unexpected SFTP session termination";
            }
            const Ze = new Error(ve);
            Ze.code = Te;
            Ze.signal = He;
            s(Ze);
          }
          l.on("ready", ie).on("error", ue).on("exit", pe).on("close", pe);
          l._init();
        };
        if (typeof t == "object" && t !== null) {
          S(l, t, x => {
            if (x) {
              s(x);
              return;
            }
            L(l, "sftp", u);
          });
        } else {
          L(l, "sftp", u);
        }
      });
      return this;
    }
    setNoDelay(t) {
      if (this._sock && typeof this._sock.setNoDelay == "function") {
        this._sock.setNoDelay(t);
      }
      return this;
    }
  }
  function b(c, t, s, a) {
    const l = Ke;
    const u = Re;
    if (typeof s == "function") {
      a = s;
      s = {};
    }
    const x = (G, ie) => {
      a(G, ie);
    };
    x.type = t;
    const D = c._chanMgr.add(x);
    if (D === -1) {
      a(new Error("No free channels available"));
      return;
    }
    switch (t) {
      case "session":
      case "sftp":
        c._protocol.session(D, l, u);
        break;
      case "direct-tcpip":
        c._protocol.directTcpip(D, l, u, s);
        break;
      case "direct-streamlocal@openssh.com":
        c._protocol.openssh_directStreamLocal(D, l, u, s);
        break;
      default:
        throw new Error(`Unsupported channel type: ${t}`);
    }
  }
  function O(c, t, s) {
    const a = {
      single: false,
      protocol: "MIT-MAGIC-COOKIE-1",
      cookie: undefined,
      screen: 0
    };
    if (typeof t == "function") {
      s = t;
    } else if (typeof t == "object" && t !== null) {
      if (typeof t.single == "boolean") {
        a.single = t.single;
      }
      if (typeof t.screen == "number") {
        a.screen = t.screen;
      }
      if (typeof t.protocol == "string") {
        a.protocol = t.protocol;
      }
      if (typeof t.cookie == "string") {
        a.cookie = t.cookie;
      } else if (Buffer.isBuffer(t.cookie)) {
        a.cookie = t.cookie.hexSlice(0, t.cookie.length);
      }
    }
    if (a.cookie === undefined) {
      a.cookie = se();
    }
    const l = typeof s == "function";
    if (c.outgoing.state !== "open") {
      if (l) {
        s(new Error("Channel is not open"));
      }
      return;
    }
    if (l) {
      c._callbacks.push(u => {
        if (u) {
          s(u !== true ? u : new Error("Unable to request X11"));
          return;
        }
        c._hasX11 = true;
        ++c._client._acceptX11;
        c.once("close", () => {
          if (c._client._acceptX11) {
            --c._client._acceptX11;
          }
        });
        s();
      });
    }
    c._client._protocol.x11Forward(c.outgoing.id, a, l);
  }
  function q(c, t, s) {
    let a = 24;
    let l = 80;
    let u = 640;
    let x = 480;
    let D = "vt100";
    let G = null;
    if (typeof t == "function") {
      s = t;
    } else if (typeof t == "object" && t !== null) {
      if (typeof t.rows == "number") {
        a = t.rows;
      }
      if (typeof t.cols == "number") {
        l = t.cols;
      }
      if (typeof t.width == "number") {
        u = t.width;
      }
      if (typeof t.height == "number") {
        x = t.height;
      }
      if (typeof t.term == "string") {
        D = t.term;
      }
      if (typeof t.modes == "object") {
        G = t.modes;
      }
    }
    const ie = typeof s == "function";
    if (c.outgoing.state !== "open") {
      if (ie) {
        s(new Error("Channel is not open"));
      }
      return;
    }
    if (ie) {
      c._callbacks.push(ue => {
        if (ue) {
          s(ue !== true ? ue : new Error("Unable to request a pseudo-terminal"));
          return;
        }
        s();
      });
    }
    c._client._protocol.pty(c.outgoing.id, a, l, x, u, D, G, ie);
  }
  function E(c, t) {
    const s = typeof t == "function";
    if (c.outgoing.state !== "open") {
      if (s) {
        t(new Error("Channel is not open"));
      }
      return;
    }
    if (c._client._agentFwdEnabled) {
      if (s) {
        t(false);
      }
      return;
    }
    c._client._agentFwdEnabled = true;
    c._callbacks.push(a => {
      if (a) {
        c._client._agentFwdEnabled = false;
        if (s) {
          t(a !== true ? a : new Error("Unable to request agent forwarding"));
        }
        return;
      }
      if (s) {
        t();
      }
    });
    c._client._protocol.openssh_agentForward(c.outgoing.id, true);
  }
  function A(c, t) {
    if (c.outgoing.state !== "open") {
      t(new Error("Channel is not open"));
      return;
    }
    c._callbacks.push(s => {
      if (s) {
        t(s !== true ? s : new Error("Unable to open shell"));
        return;
      }
      c.subtype = "shell";
      t(undefined, c);
    });
    c._client._protocol.shell(c.outgoing.id, true);
  }
  function h(c, t, s, a) {
    if (c.outgoing.state !== "open") {
      a(new Error("Channel is not open"));
      return;
    }
    c._callbacks.push(l => {
      if (l) {
        a(l !== true ? l : new Error("Unable to exec"));
        return;
      }
      c.subtype = "exec";
      c.allowHalfOpen = s.allowHalfOpen !== false;
      a(undefined, c);
    });
    c._client._protocol.exec(c.outgoing.id, t, true);
  }
  function S(c, t, s) {
    const a = typeof s == "function";
    if (c.outgoing.state !== "open") {
      if (a) {
        s(new Error("Channel is not open"));
      }
      return;
    }
    if (a) {
      c._callbacks.push(u => {
        if (u) {
          s(u !== true ? u : new Error("Unable to set environment"));
          return;
        }
        s();
      });
    }
    const l = Object.keys(t || {});
    for (let u = 0; u < l.length; ++u) {
      const x = l[u];
      const D = t[x];
      c._client._protocol.env(c.outgoing.id, x, D, a);
    }
  }
  function L(c, t, s) {
    if (c.outgoing.state !== "open") {
      s(new Error("Channel is not open"));
      return;
    }
    c._callbacks.push(a => {
      if (a) {
        s(a !== true ? a : new Error(`Unable to start subsystem: ${t}`));
        return;
      }
      c.subtype = "subsystem";
      s(undefined, c);
    });
    c._client._protocol.subsystem(c.outgoing.id, t, true);
  }
  function j(c, t) {
    let s = -1;
    let a;
    const l = () => {
      const G = {
        type: t.type,
        incoming: {
          id: s,
          window: Ke,
          packetSize: Re,
          state: "open"
        },
        outgoing: {
          id: t.sender,
          window: t.window,
          packetSize: t.packetSize,
          state: "open"
        }
      };
      const ie = new Xe(c, G);
      c._chanMgr.update(s, ie);
      c._protocol.channelOpenConfirm(t.sender, s, Ke, Re);
      return ie;
    };
    const u = () => {
      if (a === undefined) {
        if (s === -1) {
          a = I.RESOURCE_SHORTAGE;
        } else {
          a = I.CONNECT_FAILED;
        }
      }
      if (s !== -1) {
        c._chanMgr.remove(s);
      }
      c._protocol.channelOpenFail(t.sender, a, "");
    };
    const x = () => {
      s = c._chanMgr.add();
      if (s === -1) {
        a = I.RESOURCE_SHORTAGE;
        if (c.config.debug) {
          c.config.debug("Client: Automatic rejection of incoming channel open: no channels available");
        }
      }
      return s !== -1;
    };
    const D = t.data;
    switch (t.type) {
      case "forwarded-tcpip":
        {
          const G = c._forwarding[`${D.destIP}:${D.destPort}`];
          if (G !== undefined && x()) {
            if (D.destPort === 0) {
              D.destPort = G;
            }
            c.emit("tcp connection", D, l, u);
            return;
          }
          break;
        }
      case "forwarded-streamlocal@openssh.com":
        if (c._forwardingUnix[D.socketPath] !== undefined && x()) {
          c.emit("unix connection", D, l, u);
          return;
        }
        break;
      case "auth-agent@openssh.com":
        if (c._agentFwdEnabled && typeof c._agent.getStream == "function" && x()) {
          c._agent.getStream((G, ie) => {
            if (G) {
              return u();
            }
            const ue = l();
            ue.pipe(ie).pipe(ue);
          });
          return;
        }
        break;
      case "x11":
        if (c._acceptX11 !== 0 && x()) {
          c.emit("x11", D, l, u);
          return;
        }
        break;
      default:
        a = I.UNKNOWN_CHANNEL_TYPE;
        if (c.config.debug) {
          c.config.debug(`Client: Automatic rejection of unsupported incoming channel open type: ${t.type}`);
        }
    }
    if (a === undefined) {
      a = I.ADMINISTRATIVELY_PROHIBITED;
      if (c.config.debug) {
        c.config.debug("Client: Automatic rejection of unexpected incoming channel open for: " + t.type);
      }
    }
    u();
  }
  const se = (() => {
    const c = Buffer.allocUnsafe(16);
    return () => {
      r(c, 0, 16);
      return c.hexSlice(0, 16);
    };
  })();
  function le(c) {
    if (!Array.isArray(c)) {
      throw new Error("authList must be an array");
    }
    let t = 0;
    return (s, a, l) => t === c.length ? false : c[t++];
  }
  function _e(c, t, s) {
    if (!c._sock || !Be(c._sock)) {
      return;
    }
    if (typeof s != "function") {
      s = f;
    }
    if (!Array.isArray(t)) {
      throw new TypeError("Invalid keys argument type");
    }
    const a = [];
    for (const l of t) {
      const u = Z(l);
      if (u instanceof Error) {
        throw u;
      }
      a.push(u);
    }
    if (!c.config.strictVendor || c.config.strictVendor && g.test(c._remoteVer)) {
      c._callbacks.push((l, u) => {
        if (l) {
          s(l !== true ? l : new Error("Server failed to prove supplied keys"));
          return;
        }
        const x = [];
        let D = 0;
        for (P.init(u, 0); P.avail() && D !== a.length;) {
          const G = a[D++];
          const ie = G.getPublicSSH();
          const ue = P.readString();
          W.init(ue, 0);
          const pe = W.readString(true);
          let Te = W.readString();
          let He;
          if (pe !== G.type) {
            if (G.type === "ssh-rsa") {
              switch (pe) {
                case "rsa-sha2-256":
                  He = "sha256";
                  break;
                case "rsa-sha2-512":
                  He = "sha512";
                  break;
                default:
                  continue;
              }
            } else {
              continue;
            }
          }
          const ve = c._protocol._kex.sessionID;
          const Ze = Buffer.allocUnsafe(37 + ve.length + 4 + ie.length);
          let nt = 0;
          Ne(Ze, 29, nt);
          Ze.utf8Write("hostkeys-prove-00@openssh.com", nt += 4, 29);
          Ne(Ze, ve.length, nt += 29);
          U(ve, Ze, 0, ve.length, nt += 4);
          Ne(Ze, ie.length, nt += ve.length);
          U(ie, Ze, 0, ie.length, nt += 4);
          if ((Te = Me(Te, pe)) && G.verify(Ze, Te, He) === true) {
            x.push(G);
          }
        }
        W.clear();
        P.clear();
        s(null, x);
      });
      c._protocol.openssh_hostKeysProve(a);
      return;
    }
    process.nextTick(s, new Error("strictVendor enabled and server is not OpenSSH or compatible version"));
  }
  function d(c, t, s) {
    switch (t.type) {
      case "ssh-rsa":
        if (c._protocol._compatFlags & v.IMPLY_RSA_SHA2_SIGALGS) {
          if (Array.isArray(s)) {
            s = ["rsa-sha2-256", "rsa-sha2-512", ...s];
          } else {
            s = ["rsa-sha2-256", "rsa-sha2-512"];
          }
        }
        if (Array.isArray(s)) {
          if (s.indexOf("rsa-sha2-256") !== -1) {
            return [["rsa-sha2-256", "sha256"]];
          }
          if (s.indexOf("rsa-sha2-512") !== -1) {
            return [["rsa-sha2-512", "sha512"]];
          }
          if (s.indexOf("ssh-rsa") === -1) {
            return [];
          }
        }
        return [["ssh-rsa", "sha1"]];
    }
  }
  Jn = o;
  return Jn;
}
var ei;
function ws() {
  if (!ei) {
    ei = 1;
    (function (p) {
      const {
        Agent: e
      } = ts;
      const {
        Agent: r
      } = ns;
      const {
        connect: y
      } = rs;
      let k;
      for (const v of [e, r]) {
        class R extends v {
          constructor(Q, n) {
            super(n);
            this._connectCfg = Q;
            this._defaultSrcIP = n && n.srcIP || "localhost";
          }
          createConnection(Q, n) {
            const B = Q && Q.localAddress || this._defaultSrcIP;
            const C = Q && Q.localPort || 0;
            const w = Q.host;
            const X = Q.port;
            if (k === undefined) {
              k = Hi();
            }
            const K = new k();
            let $ = false;
            K.on("ready", () => {
              K.forwardOut(B, C, w, X, (re, Y) => {
                $ = true;
                if (re) {
                  K.end();
                  return n(re);
                }
                Y.once("close", () => K.end());
                n(null, M(Y, v, Q));
              });
            }).on("error", n).on("close", () => {
              if (!$) {
                n(new Error("Unexpected connection close"));
              }
            }).connect(this._connectCfg);
          }
        }
        p[v === e ? "SSHTTPAgent" : "SSHTTPSAgent"] = R;
      }
      function m() {}
      function M(v, R, I) {
        if (R === e) {
          v.setKeepAlive = m;
          v.setNoDelay = m;
          v.setTimeout = m;
          v.ref = m;
          v.unref = m;
          v.destroySoon = v.destroy;
          return v;
        }
        I.socket = v;
        const Q = y(I);
        const n = (() => {
          let B = false;
          return () => {
            if (!B) {
              B = true;
              if (v.isPaused()) {
                v.resume();
              }
            }
          };
        })();
        Q.on("end", n).on("close", n);
        return Q;
      }
    })(Kn);
  }
  return Kn;
}
var dn = {
  exports: {}
};
var ti;
function xs() {
  if (ti) {
    return dn.exports;
  }
  ti = 1;
  const {
    Server: p
  } = Er;
  const e = yr;
  const {
    listenerCount: r
  } = e;
  const {
    CHANNEL_OPEN_FAILURE: y,
    DEFAULT_CIPHER: k,
    DEFAULT_COMPRESSION: m,
    DEFAULT_KEX: M,
    DEFAULT_MAC: v,
    DEFAULT_SERVER_HOST_KEY: R,
    DISCONNECT_REASON: I,
    DISCONNECT_REASON_BY_VALUE: Q,
    SUPPORTED_CIPHER: n,
    SUPPORTED_COMPRESSION: B,
    SUPPORTED_KEX: C,
    SUPPORTED_MAC: w,
    SUPPORTED_SERVER_HOST_KEY: X
  } = jt();
  const {
    init: K
  } = tn();
  const {
    KexInit: $
  } = Cr();
  const {
    parseKey: re
  } = nn();
  const Y = Li();
  const {
    SFTP: J
  } = Cn();
  const {
    writeUInt32BE: V
  } = Kt();
  const {
    Channel: F,
    MAX_WINDOW: oe,
    PACKET_SIZE: Z,
    windowAdjust: he,
    WINDOW_THRESHOLD: U
  } = Ui();
  const {
    ChannelManager: Ie,
    generateAlgorithmList: be,
    isWritable: we,
    onChannelOpenFailure: Me,
    onCHANNEL_CLOSE: Ne
  } = Di();
  const Ue = 10;
  class Le extends e {
    constructor(de, P, W, g, f) {
      super();
      this.username = this.user = P;
      this.service = W;
      this.method = g;
      this._initialResponse = false;
      this._finalResponse = false;
      this._multistep = false;
      this._cbfinal = (o, b, O) => {
        if (!this._finalResponse) {
          this._finalResponse = true;
          f(this, o, b, O);
        }
      };
      this._protocol = de;
    }
    accept() {
      if (this._cleanup) {
        this._cleanup();
      }
      this._initialResponse = true;
      this._cbfinal(true);
    }
    reject(de, P) {
      if (this._cleanup) {
        this._cleanup();
      }
      this._initialResponse = true;
      this._cbfinal(false, de, P);
    }
  }
  class Qe extends Le {
    constructor(de, P, W, g, f, o) {
      super(de, P, W, g, o);
      this._multistep = true;
      this._cb = undefined;
      this._onInfoResponse = b => {
        const O = this._cb;
        if (O) {
          this._cb = undefined;
          O(b);
        }
      };
      this.submethods = f;
      this.on("abort", () => {
        if (this._cb) {
          this._cb(new Error("Authentication request aborted"));
        }
      });
    }
    prompt(de, P, W, g) {
      if (!Array.isArray(de)) {
        de = [de];
      }
      if (typeof P == "function") {
        g = P;
        P = W = undefined;
      } else if (typeof W == "function") {
        g = W;
        W = undefined;
      } else if (typeof g != "function") {
        g = undefined;
      }
      for (let f = 0; f < de.length; ++f) {
        if (typeof de[f] == "string") {
          de[f] = {
            prompt: de[f],
            echo: true
          };
        }
      }
      this._cb = g;
      this._initialResponse = true;
      this._protocol.authInfoReq(P, W, de);
    }
  }
  class Xe extends Le {
    constructor(de, P, W, g, f, o) {
      super(de, P, W, g, o);
      this.key = {
        algo: f.keyAlgo,
        data: f.key
      };
      this.hashAlgo = f.hashAlgo;
      this.signature = f.signature;
      this.blob = f.blob;
    }
    accept() {
      if (this.signature) {
        Le.prototype.accept.call(this);
      } else {
        this._initialResponse = true;
        this._protocol.authPKOK(this.key.algo, this.key.data);
      }
    }
  }
  class Ke extends Le {
    constructor(de, P, W, g, f, o) {
      super(de, P, W, g, o);
      this.key = {
        algo: f.keyAlgo,
        data: f.key
      };
      this.hashAlgo = f.hashAlgo;
      this.signature = f.signature;
      this.blob = f.blob;
      this.localHostname = f.localHostname;
      this.localUsername = f.localUsername;
    }
  }
  class Re extends Le {
    constructor(de, P, W, g, f, o) {
      super(de, P, W, g, o);
      this.password = f;
      this._changeCb = undefined;
    }
    requestChange(de, P) {
      if (this._changeCb) {
        throw new Error("Change request already in progress");
      }
      if (typeof de != "string") {
        throw new Error("prompt argument must be a string");
      }
      if (typeof P != "function") {
        throw new Error("Callback argument must be a function");
      }
      this._changeCb = P;
      this._protocol.authPasswdChg(de);
    }
  }
  class Pe extends e {
    constructor(de, P, W) {
      super();
      this.type = "session";
      this.subtype = undefined;
      this.server = true;
      this._ending = false;
      this._channel = undefined;
      this._chanInfo = {
        type: "session",
        incoming: {
          id: W,
          window: oe,
          packetSize: Z,
          state: "open"
        },
        outgoing: {
          id: P.sender,
          window: P.window,
          packetSize: P.packetSize,
          state: "open"
        }
      };
    }
  }
  class qe extends e {
    constructor(de, P) {
      super();
      if (typeof de != "object" || de === null) {
        throw new Error("Missing configuration object");
      }
      const W = Object.create(null);
      const g = [];
      const f = de.hostKeys;
      if (!Array.isArray(f)) {
        throw new Error("hostKeys must be an array");
      }
      const o = typeof de.algorithms == "object" && de.algorithms !== null ? de.algorithms : {};
      const b = be(o.serverHostKey, R, X);
      for (let h = 0; h < f.length; ++h) {
        let S;
        if (Buffer.isBuffer(f[h]) || typeof f[h] == "string") {
          S = re(f[h]);
        } else {
          S = re(f[h].key, f[h].passphrase);
        }
        if (S instanceof Error) {
          throw new Error(`Cannot parse privateKey: ${S.message}`);
        }
        if (Array.isArray(S)) {
          S = S[0];
        }
        if (S.getPrivatePEM() === null) {
          throw new Error("privateKey value contains an invalid private key");
        }
        if (!g.includes(S.type)) {
          if (S.type === "ssh-rsa") {
            let L = b.indexOf("ssh-rsa");
            const j = b.indexOf("rsa-sha2-256");
            const se = b.indexOf("rsa-sha2-512");
            if (L === -1) {
              L = Infinity;
            }
            [L, j, se].sort(Be).forEach(le => {
              if (le === -1) {
                return;
              }
              let _e;
              switch (le) {
                case L:
                  _e = "ssh-rsa";
                  break;
                case j:
                  _e = "rsa-sha2-256";
                  break;
                case se:
                  _e = "rsa-sha2-512";
                  break;
                default:
                  return;
              }
              W[_e] = S;
              g.push(_e);
            });
          } else {
            W[S.type] = S;
            g.push(S.type);
          }
        }
      }
      const O = {
        kex: be(o.kex, M, C).concat(["kex-strict-s-v00@openssh.com"]),
        serverHostKey: g,
        cs: {
          cipher: be(o.cipher, k, n),
          mac: be(o.hmac, v, w),
          compress: be(o.compress, m, B),
          lang: []
        },
        sc: undefined
      };
      O.sc = O.cs;
      if (typeof P == "function") {
        this.on("connection", P);
      }
      const q = typeof de.debug == "function" ? de.debug : undefined;
      const E = de.ident ? Buffer.from(de.ident) : undefined;
      const A = new $(O);
      this._srv = new p(h => {
        if (this._connections >= this.maxConnections) {
          h.destroy();
          return;
        }
        ++this._connections;
        h.once("close", () => {
          --this._connections;
        });
        let S;
        if (q) {
          const L = `[${process.hrtime().join(".")}] `;
          S = j => {
            q(`${L}${j}`);
          };
        }
        new Je(h, W, E, A, S, this, de);
      }).on("error", h => {
        this.emit("error", h);
      }).on("listening", () => {
        this.emit("listening");
      }).on("close", () => {
        this.emit("close");
      });
      this._connections = 0;
      this.maxConnections = Infinity;
    }
    injectSocket(de) {
      this._srv.emit("connection", de);
    }
    listen(...de) {
      this._srv.listen(...de);
      return this;
    }
    address() {
      return this._srv.address();
    }
    getConnections(de) {
      this._srv.getConnections(de);
      return this;
    }
    close(de) {
      this._srv.close(de);
      return this;
    }
    ref() {
      this._srv.ref();
      return this;
    }
    unref() {
      this._srv.unref();
      return this;
    }
  }
  qe.KEEPALIVE_CLIENT_INTERVAL = 15000;
  qe.KEEPALIVE_CLIENT_COUNT_MAX = 3;
  class Je extends e {
    constructor(de, P, W, g, f, o, b) {
      super();
      let O = 0;
      let q = false;
      let E = [];
      let A;
      let h;
      let S;
      const L = [];
      this._sock = de;
      this._chanMgr = new Ie(this);
      this._debug = f;
      this.noMoreSessions = false;
      this.authenticated = false;
      function j(a) {}
      this.on("error", j);
      const se = f ? (a, l, u) => {
        f(`Debug output from client: ${JSON.stringify(u)}`);
      } : undefined;
      const le = typeof b.keepaliveInterval == "number" && isFinite(b.keepaliveInterval) && b.keepaliveInterval > 0 ? b.keepaliveInterval : typeof qe.KEEPALIVE_CLIENT_INTERVAL == "number" && isFinite(qe.KEEPALIVE_CLIENT_INTERVAL) && qe.KEEPALIVE_CLIENT_INTERVAL > 0 ? qe.KEEPALIVE_CLIENT_INTERVAL : -1;
      const _e = typeof b.keepaliveCountMax == "number" && isFinite(b.keepaliveCountMax) && b.keepaliveCountMax >= 0 ? b.keepaliveCountMax : typeof qe.KEEPALIVE_CLIENT_COUNT_MAX == "number" && isFinite(qe.KEEPALIVE_CLIENT_COUNT_MAX) && qe.KEEPALIVE_CLIENT_COUNT_MAX >= 0 ? qe.KEEPALIVE_CLIENT_COUNT_MAX : -1;
      let d = 0;
      if (le !== -1 && _e !== -1) {
        this.once("ready", () => {
          const a = () => {
            clearInterval(h);
          };
          this.on("close", a).on("end", a);
          h = setInterval(() => {
            if (++d > _e) {
              clearInterval(h);
              const l = new Error("Keepalive timeout");
              l.level = "client-timeout";
              this.emit("error", l);
              this.end();
            } else {
              c.ping();
            }
          }, le);
        });
        S = () => {
          if (h) {
            h.refresh();
          }
          d = 0;
        };
      }
      const c = this._protocol = new Y({
        server: true,
        hostKeys: P,
        ident: W,
        offer: g,
        onPacket: S,
        greeting: b.greeting,
        banner: b.banner,
        onWrite: a => {
          if (we(de)) {
            de.write(a);
          }
        },
        onError: a => {
          if (!c._destruct) {
            de.removeAllListeners("data");
          }
          this.emit("error", a);
          try {
            de.end();
          } catch {}
        },
        onHeader: a => {
          this.removeListener("error", j);
          const l = {
            ip: de.remoteAddress,
            family: de.remoteFamily,
            port: de.remotePort,
            header: a
          };
          if (!o.emit("connection", this, l)) {
            c.disconnect(I.BY_APPLICATION);
            de.end();
            return;
          }
          if (a.greeting) {
            this.emit("greeting", a.greeting);
          }
        },
        onHandshakeComplete: a => {
          if (++O > 1) {
            this.emit("rekey");
          }
          this.emit("handshake", a);
        },
        debug: f,
        messageHandlers: {
          DEBUG: se,
          DISCONNECT: (a, l, u) => {
            if (l !== I.BY_APPLICATION) {
              if (!u) {
                u = Q[l];
                if (u === undefined) {
                  u = `Unexpected disconnection reason: ${l}`;
                }
              }
              const x = new Error(u);
              x.code = l;
              this.emit("error", x);
            }
            de.end();
          },
          CHANNEL_OPEN: (a, l) => {
            if (l.type === "session" && this.noMoreSessions || !this.authenticated) {
              const Te = y.ADMINISTRATIVELY_PROHIBITED;
              return c.channelOpenFail(l.sender, Te);
            }
            let u = -1;
            let x;
            let D = false;
            let G;
            const ie = () => {
              if (!D) {
                D = true;
                if (x === undefined) {
                  if (u === -1) {
                    x = y.RESOURCE_SHORTAGE;
                  } else {
                    x = y.CONNECT_FAILED;
                  }
                }
                if (u !== -1) {
                  this._chanMgr.remove(u);
                }
                c.channelOpenFail(l.sender, x, "");
              }
            };
            const ue = () => {
              u = this._chanMgr.add();
              if (u === -1) {
                x = y.RESOURCE_SHORTAGE;
                if (f) {
                  f("Automatic rejection of incoming channel open: no channels available");
                }
              }
              return u !== -1;
            };
            const pe = l.data;
            switch (l.type) {
              case "session":
                if (r(this, "session") && ue()) {
                  G = () => {
                    if (D) {
                      return;
                    }
                    D = true;
                    const Te = new Pe(this, l, u);
                    this._chanMgr.update(u, Te);
                    c.channelOpenConfirm(l.sender, u, oe, Z);
                    return Te;
                  };
                  this.emit("session", G, ie);
                  return;
                }
                break;
              case "direct-tcpip":
                if (r(this, "tcpip") && ue()) {
                  G = () => {
                    if (D) {
                      return;
                    }
                    D = true;
                    const Te = {
                      type: undefined,
                      incoming: {
                        id: u,
                        window: oe,
                        packetSize: Z,
                        state: "open"
                      },
                      outgoing: {
                        id: l.sender,
                        window: l.window,
                        packetSize: l.packetSize,
                        state: "open"
                      }
                    };
                    const He = new F(this, Te, {
                      server: true
                    });
                    this._chanMgr.update(u, He);
                    c.channelOpenConfirm(l.sender, u, oe, Z);
                    return He;
                  };
                  this.emit("tcpip", G, ie, pe);
                  return;
                }
                break;
              case "direct-streamlocal@openssh.com":
                if (r(this, "openssh.streamlocal") && ue()) {
                  G = () => {
                    if (D) {
                      return;
                    }
                    D = true;
                    const Te = {
                      type: undefined,
                      incoming: {
                        id: u,
                        window: oe,
                        packetSize: Z,
                        state: "open"
                      },
                      outgoing: {
                        id: l.sender,
                        window: l.window,
                        packetSize: l.packetSize,
                        state: "open"
                      }
                    };
                    const He = new F(this, Te, {
                      server: true
                    });
                    this._chanMgr.update(u, He);
                    c.channelOpenConfirm(l.sender, u, oe, Z);
                    return He;
                  };
                  this.emit("openssh.streamlocal", G, ie, pe);
                  return;
                }
                break;
              default:
                x = y.UNKNOWN_CHANNEL_TYPE;
                if (f) {
                  f(`Automatic rejection of unsupported incoming channel open type: ${l.type}`);
                }
            }
            if (x === undefined) {
              x = y.ADMINISTRATIVELY_PROHIBITED;
              if (f) {
                f(`Automatic rejection of unexpected incoming channel open for: ${l.type}`);
              }
            }
            ie();
          },
          CHANNEL_OPEN_CONFIRMATION: (a, l) => {
            const u = this._chanMgr.get(l.recipient);
            if (typeof u != "function") {
              return;
            }
            const x = {
              type: u.type,
              incoming: {
                id: l.recipient,
                window: oe,
                packetSize: Z,
                state: "open"
              },
              outgoing: {
                id: l.sender,
                window: l.window,
                packetSize: l.packetSize,
                state: "open"
              }
            };
            const D = new F(this, x, {
              server: true
            });
            this._chanMgr.update(l.recipient, D);
            u(undefined, D);
          },
          CHANNEL_OPEN_FAILURE: (a, l, u, x) => {
            const D = this._chanMgr.get(l);
            if (typeof D != "function") {
              return;
            }
            Me(this, l, {
              reason: u,
              description: x
            }, D);
          },
          CHANNEL_DATA: (a, l, u) => {
            let x = this._chanMgr.get(l);
            if (typeof x == "object" && x !== null && (x.constructor !== Pe || !(x = x._channel, !x)) && x.incoming.window !== 0) {
              x.incoming.window -= u.length;
              if (x.push(u) === false) {
                x._waitChanDrain = true;
                return;
              }
              if (x.incoming.window <= U) {
                he(x);
              }
            }
          },
          CHANNEL_EXTENDED_DATA: (a, l, u, x) => {},
          CHANNEL_WINDOW_ADJUST: (a, l, u) => {
            let x = this._chanMgr.get(l);
            if (typeof x == "object" && x !== null && (x.constructor !== Pe || !(x = x._channel, !x))) {
              x.outgoing.window += u;
              if (x._waitWindow) {
                x._waitWindow = false;
                if (x._chunk) {
                  x._write(x._chunk, null, x._chunkcb);
                } else if (x._chunkcb) {
                  x._chunkcb();
                } else if (x._chunkErr) {
                  x.stderr._write(x._chunkErr, null, x._chunkcbErr);
                } else if (x._chunkcbErr) {
                  x._chunkcbErr();
                }
              }
            }
          },
          CHANNEL_SUCCESS: (a, l) => {
            let u = this._chanMgr.get(l);
            if (typeof u == "object" && u !== null && (u.constructor !== Pe || !(u = u._channel, !u))) {
              if (u._callbacks.length) {
                u._callbacks.shift()(false);
              }
            }
          },
          CHANNEL_FAILURE: (a, l) => {
            let u = this._chanMgr.get(l);
            if (typeof u == "object" && u !== null && (u.constructor !== Pe || !(u = u._channel, !u))) {
              if (u._callbacks.length) {
                u._callbacks.shift()(true);
              }
            }
          },
          CHANNEL_REQUEST: (a, l, u, x, D) => {
            const G = this._chanMgr.get(l);
            if (typeof G != "object" || G === null) {
              return;
            }
            let ie = false;
            let ue;
            let pe;
            if (G.constructor !== Pe) {
              if (x) {
                c.channelFailure(G.outgoing.id);
              }
              return;
            }
            if (x) {
              if (u !== "shell" && u !== "exec" && u !== "subsystem") {
                ue = () => {
                  if (!ie && !G._ending && !G._channel) {
                    ie = true;
                    c.channelSuccess(G._chanInfo.outgoing.id);
                  }
                };
              }
              pe = () => {
                if (!ie && !G._ending && !G._channel) {
                  ie = true;
                  c.channelFailure(G._chanInfo.outgoing.id);
                }
              };
            }
            if (G._ending) {
              if (pe) {
                pe();
              }
              return;
            }
            switch (u) {
              case "env":
                if (r(G, "env")) {
                  G.emit("env", ue, pe, {
                    key: D.name,
                    val: D.value
                  });
                  return;
                }
                break;
              case "pty-req":
                if (r(G, "pty")) {
                  G.emit("pty", ue, pe, D);
                  return;
                }
                break;
              case "window-change":
                if (r(G, "window-change")) {
                  G.emit("window-change", ue, pe, D);
                } else if (pe) {
                  pe();
                }
                break;
              case "x11-req":
                if (r(G, "x11")) {
                  G.emit("x11", ue, pe, D);
                  return;
                }
                break;
              case "signal":
                if (r(G, "signal")) {
                  G.emit("signal", ue, pe, {
                    name: D
                  });
                  return;
                }
                break;
              case "auth-agent-req@openssh.com":
                if (r(G, "auth-agent")) {
                  G.emit("auth-agent", ue, pe);
                  return;
                }
                break;
              case "shell":
                if (r(G, "shell")) {
                  ue = () => {
                    if (ie || G._ending || G._channel) {
                      return;
                    }
                    ie = true;
                    if (x) {
                      c.channelSuccess(G._chanInfo.outgoing.id);
                    }
                    const Te = new F(this, G._chanInfo, {
                      server: true
                    });
                    Te.subtype = G.subtype = u;
                    G._channel = Te;
                    return Te;
                  };
                  G.emit("shell", ue, pe);
                  return;
                }
                break;
              case "exec":
                if (r(G, "exec")) {
                  ue = () => {
                    if (ie || G._ending || G._channel) {
                      return;
                    }
                    ie = true;
                    if (x) {
                      c.channelSuccess(G._chanInfo.outgoing.id);
                    }
                    const Te = new F(this, G._chanInfo, {
                      server: true
                    });
                    Te.subtype = G.subtype = u;
                    G._channel = Te;
                    return Te;
                  };
                  G.emit("exec", ue, pe, {
                    command: D
                  });
                  return;
                }
                break;
              case "subsystem":
                {
                  let Te = D === "sftp";
                  ue = () => {
                    if (ie || G._ending || G._channel) {
                      return;
                    }
                    ie = true;
                    if (x) {
                      c.channelSuccess(G._chanInfo.outgoing.id);
                    }
                    let He;
                    if (Te) {
                      He = new J(this, G._chanInfo, {
                        server: true,
                        debug: f
                      });
                    } else {
                      He = new F(this, G._chanInfo, {
                        server: true
                      });
                      He.subtype = G.subtype = `${u}:${D}`;
                    }
                    G._channel = He;
                    return He;
                  };
                  if (D === "sftp") {
                    if (r(G, "sftp")) {
                      G.emit("sftp", ue, pe);
                      return;
                    }
                    Te = false;
                  }
                  if (r(G, "subsystem")) {
                    G.emit("subsystem", ue, pe, {
                      name: D
                    });
                    return;
                  }
                  break;
                }
            }
            if (f) {
              f(`Automatic rejection of incoming channel request: ${u}`);
            }
            if (pe) {
              pe();
            }
          },
          CHANNEL_EOF: (a, l) => {
            let u = this._chanMgr.get(l);
            if (typeof u == "object" && u !== null && (u.constructor !== Pe || !(u._ending || (u._ending = true, u.emit("eof"), u.emit("end")), u = u._channel, !u))) {
              if (u.incoming.state === "open") {
                u.incoming.state = "eof";
                if (u.readable) {
                  u.push(null);
                }
              }
            }
          },
          CHANNEL_CLOSE: (a, l) => {
            let u = this._chanMgr.get(l);
            if (typeof u == "object" && u !== null && (u.constructor !== Pe || !(u._ending = true, u.emit("close"), u = u._channel, !u))) {
              Ne(this, l, u);
            }
          },
          SERVICE_REQUEST: (a, l) => {
            if (O === 0 || q || this.authenticated || l !== "ssh-userauth") {
              c.disconnect(I.SERVICE_NOT_AVAILABLE);
              de.end();
              return;
            }
            q = true;
            c.serviceAccept(l);
          },
          USERAUTH_REQUEST: (a, l, u, x, D) => {
            if (O === 0 || this.authenticated || A && (A.username !== l || A.service !== u) || x !== "password" && x !== "publickey" && x !== "hostbased" && x !== "keyboard-interactive" && x !== "none" || E.length === Ue) {
              c.disconnect(I.PROTOCOL_ERROR);
              de.end();
              return;
            } else if (u !== "ssh-connection") {
              c.disconnect(I.SERVICE_NOT_AVAILABLE);
              de.end();
              return;
            }
            let G;
            switch (x) {
              case "keyboard-interactive":
                G = new Qe(c, l, u, x, D, t);
                break;
              case "publickey":
                G = new Xe(c, l, u, x, D, t);
                break;
              case "hostbased":
                G = new Ke(c, l, u, x, D, t);
                break;
              case "password":
                if (A && A instanceof Re && A._changeCb) {
                  const ie = A._changeCb;
                  A._changeCb = undefined;
                  ie(D.newPassword);
                  return;
                }
                G = new Re(c, l, u, x, D, t);
                break;
              case "none":
                G = new Le(c, l, u, x, t);
                break;
            }
            if (A) {
              if (A._initialResponse) {
                if (A._multistep && !A._finalResponse) {
                  if (A._cleanup) {
                    A._cleanup();
                  }
                  A.emit("abort");
                }
              } else {
                return E.push(G);
              }
            }
            A = G;
            if (r(this, "authentication")) {
              this.emit("authentication", A);
            } else {
              A.reject();
            }
          },
          USERAUTH_INFO_RESPONSE: (a, l) => {
            if (A && A instanceof Qe) {
              A._onInfoResponse(l);
            }
          },
          GLOBAL_REQUEST: (a, l, u, x) => {
            const D = {
              type: null,
              buf: null
            };
            function G(ie, ue) {
              D.type = ie;
              D.buf = ue;
              s();
            }
            if (u) {
              L.push(D);
            }
            if ((l === "tcpip-forward" || l === "cancel-tcpip-forward" || l === "no-more-sessions@openssh.com" || l === "streamlocal-forward@openssh.com" || l === "cancel-streamlocal-forward@openssh.com") && r(this, "request") && this.authenticated) {
              let ie;
              let ue;
              if (u) {
                let pe = false;
                ie = Te => {
                  if (pe) {
                    return;
                  }
                  pe = true;
                  let He;
                  if (l === "tcpip-forward" && x.bindPort === 0 && typeof Te == "number") {
                    He = Buffer.allocUnsafe(4);
                    V(He, Te, 0);
                  }
                  G("SUCCESS", He);
                };
                ue = () => {
                  if (!pe) {
                    pe = true;
                    G("FAILURE");
                  }
                };
              }
              if (l === "no-more-sessions@openssh.com") {
                this.noMoreSessions = true;
                if (ie) {
                  ie();
                }
                return;
              }
              this.emit("request", ie, ue, l, x);
            } else if (u) {
              G("FAILURE");
            }
          }
        }
      });
      de.pause();
      K.then(() => {
        c.start();
        de.on("data", a => {
          try {
            c.parse(a, 0, a.length);
          } catch (l) {
            this.emit("error", l);
            try {
              if (we(de)) {
                de.end();
              }
            } catch {}
          }
        });
        de.resume();
      }).catch(a => {
        this.emit("error", a);
        try {
          if (we(de)) {
            de.end();
          }
        } catch {}
      });
      de.on("error", a => {
        a.level = "socket";
        this.emit("error", a);
      }).once("end", () => {
        if (f) {
          f("Socket ended");
        }
        c.cleanup();
        this.emit("end");
      }).once("close", () => {
        if (f) {
          f("Socket closed");
        }
        c.cleanup();
        this.emit("close");
        const a = new Error("No response from server");
        this._chanMgr.cleanup(a);
      });
      const t = (a, l, u, x) => {
        if (A === a && !this.authenticated) {
          if (l) {
            A = undefined;
            this.authenticated = true;
            c.authSuccess();
            E = [];
            this.emit("ready");
          } else {
            c.authFailure(u, x);
            if (E.length) {
              A = E.pop();
              if (r(this, "authentication")) {
                this.emit("authentication", A);
              } else {
                A.reject();
              }
            }
          }
        }
      };
      function s() {
        while (L.length > 0 && L[0].type) {
          const a = L.shift();
          if (a.type === "SUCCESS") {
            c.requestSuccess(a.buf);
          }
          if (a.type === "FAILURE") {
            c.requestFailure();
          }
        }
      }
    }
    end() {
      if (this._sock && we(this._sock)) {
        this._protocol.disconnect(I.BY_APPLICATION);
        this._sock.end();
      }
      return this;
    }
    x11(de, P, W) {
      Oe(this, "x11", {
        originAddr: de,
        originPort: P
      }, W);
      return this;
    }
    forwardOut(de, P, W, g, f) {
      Oe(this, "forwarded-tcpip", {
        boundAddr: de,
        boundPort: P,
        remoteAddr: W,
        remotePort: g
      }, f);
      return this;
    }
    openssh_forwardOutStreamLocal(de, P) {
      Oe(this, "forwarded-streamlocal@openssh.com", {
        socketPath: de
      }, P);
      return this;
    }
    rekey(de) {
      let P;
      try {
        this._protocol.rekey();
      } catch (W) {
        P = W;
      }
      if (typeof de == "function") {
        if (P) {
          process.nextTick(de, P);
        } else {
          this.once("rekey", de);
        }
      }
    }
    setNoDelay(de) {
      if (this._sock && typeof this._sock.setNoDelay == "function") {
        this._sock.setNoDelay(de);
      }
      return this;
    }
  }
  function Oe($e, de, P, W) {
    const g = oe;
    const f = Z;
    if (typeof P == "function") {
      W = P;
      P = {};
    }
    const o = (O, q) => {
      W(O, q);
    };
    o.type = de;
    const b = $e._chanMgr.add(o);
    if (b === -1) {
      W(new Error("No free channels available"));
      return;
    }
    switch (de) {
      case "forwarded-tcpip":
        $e._protocol.forwardedTcpip(b, g, f, P);
        break;
      case "x11":
        $e._protocol.x11(b, g, f, P);
        break;
      case "forwarded-streamlocal@openssh.com":
        $e._protocol.openssh_forwardedStreamLocal(b, g, f, P);
        break;
      default:
        throw new Error(`Unsupported channel type: ${de}`);
    }
  }
  function Be($e, de) {
    return $e - de;
  }
  dn.exports = qe;
  dn.exports.IncomingClient = Je;
  return dn.exports;
}
var Zn;
var ni;
function Is() {
  if (ni) {
    return Zn;
  }
  ni = 1;
  const {
    createCipheriv: p,
    generateKeyPair: e,
    generateKeyPairSync: r,
    getCurves: y,
    randomBytes: k
  } = en;
  const {
    Ber: m
  } = In();
  const M = Ti().pbkdf;
  const {
    CIPHER_INFO: v
  } = tn();
  const R = 16;
  const I = 16;
  const Q = y();
  const n = new Map(Object.entries(v));
  function B(K, $) {
    if (typeof K != "string") {
      throw new TypeError("Key type must be a string");
    }
    const re = {
      type: "spki",
      format: "der"
    };
    const Y = {
      type: "pkcs8",
      format: "der"
    };
    switch (K.toLowerCase()) {
      case "rsa":
        {
          if (typeof $ != "object" || $ === null) {
            throw new TypeError("Missing options object for RSA key");
          }
          const J = $.bits;
          if (!Number.isInteger(J)) {
            throw new TypeError("RSA bits must be an integer");
          }
          if (J <= 0 || J > 16384) {
            throw new RangeError("RSA bits must be non-zero and <= 16384");
          }
          return ["rsa", {
            modulusLength: J,
            publicKeyEncoding: re,
            privateKeyEncoding: Y
          }];
        }
      case "ecdsa":
        {
          if (typeof $ != "object" || $ === null) {
            throw new TypeError("Missing options object for ECDSA key");
          }
          if (!Number.isInteger($.bits)) {
            throw new TypeError("ECDSA bits must be an integer");
          }
          let J;
          switch ($.bits) {
            case 256:
              J = "prime256v1";
              break;
            case 384:
              J = "secp384r1";
              break;
            case 521:
              J = "secp521r1";
              break;
            default:
              throw new Error("ECDSA bits must be 256, 384, or 521");
          }
          if (!Q.includes(J)) {
            throw new Error("Unsupported ECDSA bits value");
          }
          return ["ec", {
            namedCurve: J,
            publicKeyEncoding: re,
            privateKeyEncoding: Y
          }];
        }
      case "ed25519":
        return ["ed25519", {
          publicKeyEncoding: re,
          privateKeyEncoding: Y
        }];
      default:
        throw new Error(`Unsupported key type: ${K}`);
    }
  }
  function C(K, $, re) {
    switch (K) {
      case "rsa":
        {
          let Y = new m.Reader(re);
          Y.readSequence();
          if (Y.readInt() !== 0) {
            throw new Error("Unsupported version in RSA private key");
          }
          Y.readSequence();
          if (Y.readOID() !== "1.2.840.113549.1.1.1") {
            throw new Error("Bad RSA private OID");
          }
          if (Y.readByte() !== m.Null) {
            throw new Error("Malformed RSA private key (expected null)");
          }
          if (Y.readByte() !== 0) {
            throw new Error("Malformed RSA private key (expected zero-length null)");
          }
          Y = new m.Reader(Y.readString(m.OctetString, true));
          Y.readSequence();
          if (Y.readInt() !== 0) {
            throw new Error("Unsupported version in RSA private key");
          }
          const J = Y.readString(m.Integer, true);
          const V = Y.readString(m.Integer, true);
          const F = Y.readString(m.Integer, true);
          const oe = Y.readString(m.Integer, true);
          const Z = Y.readString(m.Integer, true);
          Y.readString(m.Integer, true);
          Y.readString(m.Integer, true);
          const he = Y.readString(m.Integer, true);
          const U = Buffer.from("ssh-rsa");
          const Ie = Buffer.allocUnsafe(4 + U.length + 4 + J.length + 4 + V.length + 4 + F.length + 4 + he.length + 4 + oe.length + 4 + Z.length);
          let be = 0;
          Ie.writeUInt32BE(U.length, be += 0);
          Ie.set(U, be += 4);
          Ie.writeUInt32BE(J.length, be += U.length);
          Ie.set(J, be += 4);
          Ie.writeUInt32BE(V.length, be += J.length);
          Ie.set(V, be += 4);
          Ie.writeUInt32BE(F.length, be += V.length);
          Ie.set(F, be += 4);
          Ie.writeUInt32BE(he.length, be += F.length);
          Ie.set(he, be += 4);
          Ie.writeUInt32BE(oe.length, be += he.length);
          Ie.set(oe, be += 4);
          Ie.writeUInt32BE(Z.length, be += oe.length);
          Ie.set(Z, be += 4);
          const we = Buffer.allocUnsafe(4 + U.length + 4 + V.length + 4 + J.length);
          be = 0;
          we.writeUInt32BE(U.length, be += 0);
          we.set(U, be += 4);
          we.writeUInt32BE(V.length, be += U.length);
          we.set(V, be += 4);
          we.writeUInt32BE(J.length, be += V.length);
          we.set(J, be += 4);
          return {
            sshName: U.toString(),
            priv: Ie,
            pub: we
          };
        }
      case "ec":
        {
          let Y = new m.Reader($);
          Y.readSequence();
          Y.readSequence();
          if (Y.readOID() !== "1.2.840.10045.2.1") {
            throw new Error("Bad ECDSA public OID");
          }
          Y.readOID();
          let J = Y.readString(m.BitString, true);
          {
            let be = 0;
            for (; be < J.length && J[be] === 0; ++be);
            if (be > 0) {
              J = J.slice(be);
            }
          }
          Y = new m.Reader(re);
          Y.readSequence();
          if (Y.readInt() !== 0) {
            throw new Error("Unsupported version in ECDSA private key");
          }
          Y.readSequence();
          if (Y.readOID() !== "1.2.840.10045.2.1") {
            throw new Error("Bad ECDSA private OID");
          }
          const V = Y.readOID();
          let F;
          switch (V) {
            case "1.2.840.10045.3.1.7":
              F = "nistp256";
              break;
            case "1.3.132.0.34":
              F = "nistp384";
              break;
            case "1.3.132.0.35":
              F = "nistp521";
              break;
            default:
              throw new Error("Unsupported curve in ECDSA private key");
          }
          Y = new m.Reader(Y.readString(m.OctetString, true));
          Y.readSequence();
          if (Y.readInt() !== 1) {
            throw new Error("Unsupported version in ECDSA private key");
          }
          const oe = Buffer.concat([Buffer.from([0]), Y.readString(m.OctetString, true)]);
          const Z = Buffer.from(`ecdsa-sha2-${F}`);
          F = Buffer.from(F);
          const he = Buffer.allocUnsafe(4 + Z.length + 4 + F.length + 4 + J.length + 4 + oe.length);
          let U = 0;
          he.writeUInt32BE(Z.length, U += 0);
          he.set(Z, U += 4);
          he.writeUInt32BE(F.length, U += Z.length);
          he.set(F, U += 4);
          he.writeUInt32BE(J.length, U += F.length);
          he.set(J, U += 4);
          he.writeUInt32BE(oe.length, U += J.length);
          he.set(oe, U += 4);
          const Ie = Buffer.allocUnsafe(4 + Z.length + 4 + F.length + 4 + J.length);
          U = 0;
          Ie.writeUInt32BE(Z.length, U += 0);
          Ie.set(Z, U += 4);
          Ie.writeUInt32BE(F.length, U += Z.length);
          Ie.set(F, U += 4);
          Ie.writeUInt32BE(J.length, U += F.length);
          Ie.set(J, U += 4);
          return {
            sshName: Z.toString(),
            priv: he,
            pub: Ie
          };
        }
      case "ed25519":
        {
          let Y = new m.Reader($);
          Y.readSequence();
          Y.readSequence();
          if (Y.readOID() !== "1.3.101.112") {
            throw new Error("Bad ED25519 public OID");
          }
          let J = Y.readString(m.BitString, true);
          {
            let U = 0;
            for (; U < J.length && J[U] === 0; ++U);
            if (U > 0) {
              J = J.slice(U);
            }
          }
          Y = new m.Reader(re);
          Y.readSequence();
          if (Y.readInt() !== 0) {
            throw new Error("Unsupported version in ED25519 private key");
          }
          Y.readSequence();
          if (Y.readOID() !== "1.3.101.112") {
            throw new Error("Bad ED25519 private OID");
          }
          Y = new m.Reader(Y.readString(m.OctetString, true));
          const V = Y.readString(m.OctetString, true);
          const F = Buffer.from("ssh-ed25519");
          const oe = Buffer.allocUnsafe(4 + F.length + 4 + J.length + 4 + (V.length + J.length));
          let Z = 0;
          oe.writeUInt32BE(F.length, Z += 0);
          oe.set(F, Z += 4);
          oe.writeUInt32BE(J.length, Z += F.length);
          oe.set(J, Z += 4);
          oe.writeUInt32BE(V.length + J.length, Z += J.length);
          oe.set(V, Z += 4);
          oe.set(J, Z += V.length);
          const he = Buffer.allocUnsafe(4 + F.length + 4 + J.length);
          Z = 0;
          he.writeUInt32BE(F.length, Z += 0);
          he.set(F, Z += 4);
          he.writeUInt32BE(J.length, Z += F.length);
          he.set(J, Z += 4);
          return {
            sshName: F.toString(),
            priv: oe,
            pub: he
          };
        }
    }
  }
  function w(K, $, re, Y) {
    let J = "new";
    let V;
    let F = "";
    if (typeof Y == "object" && Y !== null && (typeof Y.comment == "string" && Y.comment && (F = Y.comment), typeof Y.format == "string" && Y.format && (J = Y.format), Y.passphrase)) {
      let oe;
      if (typeof Y.passphrase == "string") {
        oe = Buffer.from(Y.passphrase);
      } else if (Buffer.isBuffer(Y.passphrase)) {
        oe = Y.passphrase;
      } else {
        throw new Error("Invalid passphrase");
      }
      if (Y.cipher === undefined) {
        throw new Error("Missing cipher name");
      }
      const Z = n.get(Y.cipher);
      if (Z === undefined) {
        throw new Error("Invalid cipher name");
      }
      if (J === "new") {
        let he = I;
        if (Y.rounds !== undefined) {
          if (!Number.isInteger(Y.rounds)) {
            throw new TypeError("rounds must be an integer");
          }
          if (Y.rounds > 0) {
            he = Y.rounds;
          }
        }
        const U = Buffer.allocUnsafe(Z.keyLen + Z.ivLen);
        const Ie = k(R);
        if (M(oe, oe.length, Ie, Ie.length, U, U.length, he) !== 0) {
          return new Error("Failed to generate information to encrypt key");
        }
        const we = Buffer.allocUnsafe(4 + Ie.length + 4);
        {
          let Me = 0;
          we.writeUInt32BE(Ie.length, Me += 0);
          we.set(Ie, Me += 4);
          we.writeUInt32BE(he, Me += Ie.length);
        }
        V = {
          cipher: Z,
          cipherName: Y.cipher,
          kdfName: "bcrypt",
          kdfOptions: we,
          key: U.slice(0, Z.keyLen),
          iv: U.slice(Z.keyLen)
        };
      }
    }
    switch (J) {
      case "new":
        {
          let oe = `-----BEGIN OPENSSH PRIVATE KEY-----
`;
          let Z;
          const he = Buffer.from(V ? V.cipherName : "none");
          const U = Buffer.from(V ? V.kdfName : "none");
          const Ie = V ? V.kdfOptions : Buffer.alloc(0);
          const be = V ? V.cipher.blockLen : 8;
          const we = C(K, $, re);
          const Me = k(4);
          const Ne = Buffer.from(F);
          const Ue = 8 + we.priv.length + 4 + Ne.length;
          let Le = [];
          for (let Pe = 1; (Ue + Le.length) % be; ++Pe) {
            Le.push(Pe & 255);
          }
          Le = Buffer.from(Le);
          let Qe = Buffer.allocUnsafe(Ue + Le.length);
          let Xe;
          {
            let Pe = 0;
            Qe.set(Me, Pe += 0);
            Qe.set(Me, Pe += 4);
            Qe.set(we.priv, Pe += 4);
            Qe.writeUInt32BE(Ne.length, Pe += we.priv.length);
            Qe.set(Ne, Pe += 4);
            Qe.set(Le, Pe += Ne.length);
          }
          if (V) {
            const Pe = {
              authTagLength: V.cipher.authLen
            };
            const qe = p(V.cipher.sslName, V.key, V.iv, Pe);
            qe.setAutoPadding(false);
            Qe = Buffer.concat([qe.update(Qe), qe.final()]);
            if (V.cipher.authLen > 0) {
              Xe = qe.getAuthTag();
            } else {
              Xe = Buffer.alloc(0);
            }
            V.key.fill(0);
            V.iv.fill(0);
          } else {
            Xe = Buffer.alloc(0);
          }
          const Ke = Buffer.from("openssh-key-v1\0");
          const Re = Buffer.allocUnsafe(Ke.length + 4 + he.length + 4 + U.length + 4 + Ie.length + 4 + 4 + we.pub.length + 4 + Qe.length + Xe.length);
          {
            let Pe = 0;
            Re.set(Ke, Pe += 0);
            Re.writeUInt32BE(he.length, Pe += Ke.length);
            Re.set(he, Pe += 4);
            Re.writeUInt32BE(U.length, Pe += he.length);
            Re.set(U, Pe += 4);
            Re.writeUInt32BE(Ie.length, Pe += U.length);
            Re.set(Ie, Pe += 4);
            Re.writeUInt32BE(1, Pe += Ie.length);
            Re.writeUInt32BE(we.pub.length, Pe += 4);
            Re.set(we.pub, Pe += 4);
            Re.writeUInt32BE(Qe.length, Pe += we.pub.length);
            Re.set(Qe, Pe += 4);
            Re.set(Xe, Pe += Qe.length);
          }
          {
            const Pe = Re.base64Slice(0, Re.length);
            let qe = Pe.replace(/.{64}/g, `$&
`);
            if (Pe.length & 63) {
              qe += `
`;
            }
            oe += qe;
          }
          {
            const Pe = we.pub.base64Slice(0, we.pub.length);
            Z = `${we.sshName} ${Pe}${F ? ` ${F}` : ""}`;
          }
          oe += `-----END OPENSSH PRIVATE KEY-----
`;
          return {
            private: oe,
            public: Z
          };
        }
      default:
        throw new Error("Invalid output key format");
    }
  }
  function X() {}
  Zn = {
    generateKeyPair: (K, $, re) => {
      if (typeof $ == "function") {
        re = $;
        $ = undefined;
      }
      if (typeof re != "function") {
        re = X;
      }
      const Y = B(K, $);
      e(...Y, (J, V, F) => {
        if (J) {
          return re(J);
        }
        let oe;
        try {
          oe = w(Y[0], V, F, $);
        } catch (Z) {
          return re(Z);
        }
        re(null, oe);
      });
    },
    generateKeyPairSync: (K, $) => {
      const re = B(K, $);
      const {
        publicKey: Y,
        privateKey: J
      } = r(...re);
      return w(re[0], Y, J, $);
    }
  };
  return Zn;
}
var er;
var ri;
function Cs() {
  if (ri) {
    return er;
  }
  ri = 1;
  const {
    AgentProtocol: p,
    BaseAgent: e,
    createAgent: r,
    CygwinAgent: y,
    OpenSSHAgent: k,
    PageantAgent: m
  } = vi();
  const {
    SSHTTPAgent: M,
    SSHTTPSAgent: v
  } = ws();
  const {
    parseKey: R
  } = nn();
  const {
    flagsToString: I,
    OPEN_MODE: Q,
    STATUS_CODE: n,
    stringToFlags: B
  } = Cn();
  er = {
    AgentProtocol: p,
    BaseAgent: e,
    createAgent: r,
    Client: Hi(),
    CygwinAgent: y,
    HTTPAgent: M,
    HTTPSAgent: v,
    OpenSSHAgent: k,
    PageantAgent: m,
    Server: xs(),
    utils: {
      parseKey: R,
      ...Is(),
      sftp: {
        flagsToString: I,
        OPEN_MODE: Q,
        STATUS_CODE: n,
        stringToFlags: B
      }
    }
  };
  return er;
}
var dr = Cs();
const Bs = 5000;
let gn;
function Rs(p) {
  const e = p.lastIndexOf("@");
  return (e !== -1 ? p.slice(e + 1) : p).toLowerCase();
}
const ks = /^[a-zA-Z0-9.:_][a-zA-Z0-9.:_-]*$/;
const Ts = new RegExp("^[a-zA-Z0-9._][a-zA-Z0-9._\\\\-]*(?<!\\\\)$");
function Qi(p) {
  const e = p.indexOf("@");
  const r = e !== -1 ? p.slice(0, e) : undefined;
  const y = e !== -1 ? p.slice(e + 1) : p;
  if (!ks.test(y)) {
    throw new bn("unsafe_host", p);
  }
  if (r !== undefined && !Ts.test(r)) {
    throw new bn("unsafe_user", p);
  }
}
function vs(p, e) {
  const r = Rs(p);
  const y = e.toLowerCase();
  if (y === "*") {
    return true;
  } else if (y.startsWith("*.")) {
    return r === y.slice(2) || r.endsWith(y.slice(1));
  } else {
    return r === y;
  }
}
async function Fi() {
  var r;
  const p = Date.now();
  if (gn && gn.expires > p) {
    return gn.allowlist;
  }
  const e = (r = ne.resolveSshHostAllowlist(await ne.readSettingsLayers())) == null ? undefined : r.value;
  gn = {
    allowlist: e,
    expires: p + Bs
  };
  return e;
}
function Ns(p, e) {
  switch (p) {
    case "disabled":
      return "SSH connections are disabled by your organization's managed settings.";
    case "unsafe_host":
      return "SSH host is not a valid hostname or address (letters, digits, '.', '_', ':', '-'; must not start with '-').";
    case "unsafe_user":
      return "SSH user is not a valid username (letters, digits, '.', '_', '-', '\\'; must not start with '-').";
    case "host_not_allowed":
      return `SSH host "${e}" is not allowed by your organization's managed settings.`;
  }
}
class bn extends Error {
  constructor(e, r) {
    super(Ns(e, r));
    this.reason = e;
    this.name = "SshPolicyError";
  }
}
async function $i(p, e) {
  const r = await Fi();
  if (r !== undefined) {
    if (r.length === 0) {
      throw new bn("disabled", p);
    }
    if (!r.some(y => vs(e.hostname, y))) {
      throw new bn("host_not_allowed", e.hostname);
    }
    if (e.proxyCommand || e.proxyJump) {
      ne.logger.warn(`[sshPolicy] sshHostAllowlist active and ${p} (→ ${e.hostname}) uses ${e.proxyJump ? "ProxyJump" : "ProxyCommand"}; allowlist validates the resolved HostName only — see assertResolvedSshTargetAllowed for the threat-model note.`);
    }
  }
}
async function Bn(p, e) {
  const r = await ne.allPaths();
  return ne.findActualExecutableCustomPath(p, e, r)[0];
}
const hn = 30000;
const Ls = 10000;
const Ps = 86400;
function Os(p) {
  for (const e of p.split(`
`)) {
    const r = e.indexOf(" ");
    if (r === -1 || e.slice(0, r).toLowerCase() !== "connecttimeout") {
      continue;
    }
    const y = e.slice(r + 1).trim();
    if (y.toLowerCase() === "none") {
      return;
    }
    const k = parseInt(y, 10);
    if (!Number.isFinite(k) || k <= 0) {
      return undefined;
    } else {
      return Math.min(k, Ps);
    }
  }
}
async function Mi(p) {
  let e;
  try {
    const r = await Promise.race([qi(p.sshHost, p.sshPort), new Promise(y => {
      e = setTimeout(() => y(null), Ls);
    })]);
    if (r !== null) {
      return Ki(r);
    } else {
      return hn;
    }
  } finally {
    clearTimeout(e);
  }
}
function Ki(p) {
  if (p.connectTimeout !== undefined) {
    return Math.max(p.connectTimeout * 1000, hn);
  } else {
    return hn;
  }
}
function Us(p) {
  const e = [];
  for (const r of p.split(`
`)) {
    const y = r.indexOf(" ");
    if (y === -1 || r.slice(0, y).toLowerCase() !== "identityfile") {
      continue;
    }
    const m = r.slice(y + 1).trim();
    if (m.toLowerCase() === "none") {
      e.length = 0;
    } else {
      e.push(m);
    }
  }
  return e;
}
function Ds(p) {
  const e = p.indexOf("@");
  if (e === -1) {
    return {
      host: p
    };
  } else {
    return {
      user: p.slice(0, e),
      host: p.slice(e + 1)
    };
  }
}
function gr(p) {
  if (p.includes(":") && !p.startsWith("[")) {
    return `[${p}]`;
  } else {
    return p;
  }
}
function tr(p, e, r) {
  return `${p}@${gr(e)}:${r}`;
}
const nr = new Map();
let rr;
const Hs = /USERAUTH|auth failed|Agent key|publickey auth|none auth/i;
function Wi(p, e) {
  if (p instanceof Error) {
    p.sshAuthMethod = e;
  }
  return p;
}
function Qs(p) {
  if (p instanceof Error) {
    return p.sshAuthMethod;
  } else {
    return undefined;
  }
}
async function Fs() {
  if (process.platform === "darwin") {
    rr ??= (async () => {
      var M;
      const p = process.env.SHELL || "/bin/zsh";
      const {
        stdout: e,
        code: r
      } = await ne.spawnAsync(p, ["-l", "-c", "printf %s \"$SSH_AUTH_SOCK\""], {
        ignoreExitCode: true,
        timeout: 5000
      });
      if (r !== 0) {
        throw new Error(`login-shell probe exited ${r ?? "timeout"}`);
      }
      const k = (M = e.split(`
`).filter(v => v.trim().length > 0).at(-1)) == null ? undefined : M.trim();
      if (!k || k === process.env.SSH_AUTH_SOCK) {
        return;
      }
      const m = await Ht.promises.stat(k).catch(() => null);
      if (m != null && m.isSocket()) {
        ne.sshLogger.info(`[SSH2Connection] login-shell SSH_AUTH_SOCK differs from launchd's (shell=${k}, env=${process.env.SSH_AUTH_SOCK ?? "<unset>"}); preferring shell agent`);
        return k;
      }
    })().catch(p => {
      ne.sshLogger.debug(`[SSH2Connection] login-shell agent probe failed: ${p}`);
      rr = undefined;
    });
    return rr;
  }
}
const ii = "\\\\.\\pipe\\openssh-ssh-agent";
async function $s() {
  if (process.platform === "win32") {
    try {
      await Ht.promises.access(ii);
      return ii;
    } catch {
      return;
    }
  }
}
async function qi(p, e) {
  const r = `${p}:${e ?? ""}`;
  let y = nr.get(r);
  if (!y) {
    y = Gi(p, e);
    nr.set(r, y);
    y.catch(() => nr.delete(r));
  }
  return y.catch(() => {
    const k = p.indexOf("@");
    const m = k !== -1 ? p.slice(k + 1) : p;
    const M = k !== -1 ? p.slice(0, k) : undefined;
    return {
      hostname: m,
      port: e ?? 22,
      username: M ?? process.env.USER ?? "root",
      identityFiles: [],
      identitiesOnly: false
    };
  });
}
async function Gi(p, e) {
  let r = p;
  let y;
  const k = p.indexOf("@");
  if (k !== -1) {
    y = p.slice(0, k);
    r = p.slice(k + 1);
  }
  const m = ["-G"];
  if (e) {
    m.push("-p", String(e));
  }
  if (y) {
    m.push("-l", y);
  }
  m.push("--", r);
  const {
    cmd: M,
    args: v
  } = await Bn("ssh", m);
  const R = await ne.spawnAsync(M, v, {
    ignoreExitCode: true
  });
  if (R.code !== 0) {
    ne.sshLogger.warn(`[SSH2Connection] ssh -G failed (code ${R.code}), using raw host`);
    throw new Error(`ssh -G exited ${R.code}`);
  }
  const I = {
    hostname: r,
    port: e ?? 22,
    username: y ?? process.env.USER ?? "root",
    identityFiles: [],
    identitiesOnly: false
  };
  let Q;
  for (const n of R.stdout.split(`
`)) {
    const B = n.indexOf(" ");
    if (B === -1) {
      continue;
    }
    const C = n.slice(0, B).toLowerCase();
    const w = n.slice(B + 1).trim();
    switch (C) {
      case "hostname":
        {
          const {
            user: X,
            host: K
          } = Ds(w);
          if (X !== undefined) {
            ne.sshLogger.warn(`[SSH2Connection] HostName '${w}' contains a 'user@' prefix; prefer a 'User' directive instead.`);
            Q = X;
          }
          I.hostname = K;
          break;
        }
      case "port":
        if (!e) {
          I.port = parseInt(w, 10);
        }
        break;
      case "user":
        if (!y) {
          I.username = w;
        }
        break;
      case "identitiesonly":
        I.identitiesOnly = w.toLowerCase() === "yes";
        break;
      case "identityagent":
        if (w !== "SSH_AUTH_SOCK") {
          I.identityAgent = w;
        }
        break;
      case "proxycommand":
        if (w !== "none") {
          I.proxyCommand = w;
        }
        break;
      case "proxyjump":
        if (w !== "none") {
          I.proxyJump = w;
        }
        break;
    }
  }
  I.identityFiles = Us(R.stdout);
  I.connectTimeout = Os(R.stdout);
  if (Q && !y) {
    I.username = Q;
  }
  return I;
}
function si(p, e, r, y, k) {
  return p.replace(/%h/g, () => e).replace(/%p/g, () => String(r)).replace(/%r/g, () => y).replace(/%n/g, () => k);
}
function oi(p, e) {
  var v;
  var R;
  var I;
  var Q;
  ne.sshLogger.info(`[SSH2Connection] Spawning ProxyCommand: ${p}`);
  const r = xi.spawn("sh", ["-c", p], {
    stdio: ["pipe", "pipe", "pipe"],
    ...(e ? {
      env: {
        ...process.env,
        PATH: e
      }
    } : {})
  });
  let y = "";
  if ((v = r.stderr) != null) {
    v.on("data", n => {
      const B = n.toString();
      y = (y + B).slice(-2048);
      ne.sshLogger.warn(`[SSH2Connection] ProxyCommand stderr: ${B.trim()}`);
    });
  }
  let k = false;
  let m;
  const M = new an.Duplex({
    read() {},
    write(n, B, C) {
      var w;
      if ((w = r.stdin) != null && w.writable) {
        r.stdin.write(n, C);
      } else {
        C(new Error("ProxyCommand stdin is not writable"));
      }
    },
    destroy(n, B) {
      k = true;
      r.kill();
      B(n);
    }
  });
  M.on("error", () => {});
  if ((R = r.stdin) != null) {
    R.on("error", () => {});
  }
  if ((I = r.stdout) != null) {
    I.on("data", n => {
      M.push(n);
    });
  }
  if ((Q = r.stdout) != null) {
    Q.on("end", () => {
      M.push(null);
    });
  }
  r.on("close", n => {
    if (!k) {
      m = n;
    }
    ne.sshLogger.info(`[SSH2Connection] ProxyCommand exited with code ${n}${k ? " (killed)" : ""}`);
    M.destroy();
  });
  r.on("error", n => {
    ne.sshLogger.error(`[SSH2Connection] ProxyCommand error: ${n.message}`);
    M.destroy(n);
  });
  return {
    stream: M,
    process: r,
    stderrTail: () => y.trim(),
    exitCode: () => m,
    markKilled: () => {
      k = true;
    }
  };
}
function Ms(p, e) {
  if (!e || !(p instanceof Error)) {
    return p;
  }
  const r = p.message.toLowerCase();
  const y = p.code;
  if (r.includes("waiting for handshake") || r.includes("before handshake") || r.includes("proxycommand stdin is not writable") || y === "ERR_STREAM_DESTROYED" || r.includes("after a stream was destroyed")) {
    return new Error(`ProxyCommand failed: ${e} (${p.message})`, {
      cause: p
    });
  } else {
    return p;
  }
}
async function Ks(p) {
  try {
    return await Ht.promises.readFile(ne.expandTildePath(p));
  } catch {
    return;
  }
}
async function ai(p) {
  const e = await Ks(p);
  if (!e) {
    return;
  }
  const r = dr.utils.parseKey(e);
  if (r instanceof Error) {
    ne.sshLogger.info(`[SSH2Connection] Skipping identity file ${p}: ${r.message}`);
    return;
  }
  return e;
}
async function Ws(p, e) {
  var y;
  const r = new Set();
  try {
    const k = e !== 22 ? ["-F", `[${p}]:${e}`] : ["-F", p];
    const {
      cmd: m,
      args: M
    } = await Bn("ssh-keygen", k);
    const v = await ne.spawnAsync(m, M, {
      ignoreExitCode: true
    });
    const R = new Set();
    for (const I of v.stdout.split(`
`)) {
      const Q = I.trim();
      if (!Q || Q.startsWith("#")) {
        continue;
      }
      const n = Q.split(/\s+/);
      if ((y = n[0]) != null && y.startsWith("@")) {
        if (n[0].toLowerCase() === "@revoked" && n[3]) {
          R.add(n[3]);
        }
        continue;
      }
      if (n.length >= 3 && n[2]) {
        r.add(n[2]);
      }
    }
    for (const I of R) {
      r.delete(I);
    }
  } catch {}
  return r;
}
async function qs(p, e) {
  const r = await qi(p.sshHost, p.sshPort);
  await $i(p.sshHost, r);
  ne.sshLogger.info(`[SSH2Connection] Resolved ${p.sshHost} -> ${tr(r.username, r.hostname, r.port)}${r.identitiesOnly ? " (identitiesOnly)" : ""}${r.identityAgent ? ` (identityAgent: ${r.identityAgent})` : ""}${r.proxyCommand ? " (proxyCommand)" : ""}${r.proxyJump ? ` (proxyJump: ${r.proxyJump})` : ""} (identityFiles: ${r.identityFiles.length})`);
  const y = r.proxyCommand ? new Set() : await Ws(r.hostname, r.port);
  if (y.size === 0 && !r.proxyCommand) {
    ne.sshLogger.warn(`[SSH2Connection] Host ${gr(r.hostname)}:${r.port} is not in known_hosts`);
  }
  const k = {
    host: r.hostname,
    port: r.port,
    username: r.username,
    hostVerifier: oe => {
      if (r.proxyCommand) {
        return true;
      }
      const Z = oe.toString("base64");
      if (y.has(Z)) {
        return true;
      }
      const he = `${gr(r.hostname)}:${r.port}`;
      if (y.size > 0) {
        ne.sshLogger.warn(`[SSH2Connection] Rejecting host key for ${he} — presented key does not match known_hosts (host key changed; possible MITM)`);
      } else {
        ne.sshLogger.warn(`[SSH2Connection] Rejecting host key for ${he} — host is not in known_hosts`);
      }
      return false;
    },
    readyTimeout: Ki(r),
    keepaliveInterval: 15000,
    keepaliveCountMax: 3,
    strictVendor: false
  };
  const m = await ne.allPaths().then(oe => oe.join(Ut.delimiter), () => process.env.PATH ?? "");
  let M;
  if (r.proxyCommand) {
    const oe = si(r.proxyCommand, r.hostname, r.port, r.username, p.sshHost.includes("@") ? p.sshHost.slice(p.sshHost.indexOf("@") + 1) : p.sshHost);
    M = oi(oe, m);
    k.sock = M.stream;
  } else if (r.proxyJump) {
    throw new Error(`SSH host ${p.sshHost} uses ProxyJump (${r.proxyJump}), which is not yet supported. Consider using ProxyCommand instead.`);
  }
  let v = "none";
  let R;
  if (r.identityAgent === "none") {
    R = undefined;
  } else if (r.identityAgent != null) {
    R = ne.expandTildePath(r.identityAgent);
    v = "identityAgent";
  } else {
    const oe = await Fs();
    if (oe) {
      R = oe;
      v = "login-shell";
    } else if (process.env.SSH_AUTH_SOCK) {
      R = process.env.SSH_AUTH_SOCK;
      v = "env";
    } else {
      const Z = await $s();
      if (Z) {
        R = Z;
        v = "win32-openssh";
      }
    }
  }
  const I = p.sshIdentityFile != null || r.identityFiles.length > 0;
  if (R && (!r.identitiesOnly || !!I)) {
    k.agent = R;
  }
  const Q = [];
  if (p.sshIdentityFile) {
    const oe = await ai(p.sshIdentityFile);
    if (oe) {
      Q.push({
        path: p.sshIdentityFile,
        buffer: oe
      });
    }
  } else {
    for (const oe of r.identityFiles) {
      const Z = await ai(oe);
      if (Z) {
        Q.push({
          path: oe,
          buffer: Z
        });
      }
    }
  }
  if (Q.length > 0) {
    k.privateKey = Q[0].buffer;
  }
  if (e) {
    k.tryKeyboard = true;
  }
  const n = Q.map(oe => {
    const Z = dr.utils.parseKey(oe.buffer);
    if (Z instanceof Error) {
      return "?";
    } else {
      return Z.type;
    }
  }).join(",");
  ne.sshLogger.info(`[SSH2Connection] Connecting to ${tr(r.username, r.hostname, r.port)} (agent: ${k.agent ? `${v}:${k.agent}` : "none"}, keys: ${Q.length}${n ? `[${n}]` : ""}, proxy: ${!!M}, keyboard: ${!!e})`);
  let B = null;
  let C = Q.length > 0 ? "publickey" : "none";
  function w(oe) {
    return new Promise((Z, he) => {
      const U = new dr.Client();
      let Ie = false;
      oe.debug = we => {
        if (!Ie) {
          if (Hs.test(we)) {
            ne.sshLogger.info(`[SSH2Connection] ssh2: ${we}`);
          }
        }
      };
      if (e) {
        U.on("keyboard-interactive", (we, Me, Ne, Ue, Le) => {
          if (Ue.length === 0) {
            Le([]);
            return;
          }
          const Qe = Ue[0].prompt || `Password for ${r.username}@${r.hostname}`;
          const Xe = typeof oe.password == "string" ? oe.password : null;
          (Xe != null ? Promise.resolve(Xe) : e(Qe)).then(Re => {
            B = Re;
            if (Re != null) {
              C = "keyboard-interactive";
            }
            Le(Re != null ? [Re] : []);
          }).catch(() => {
            Le([]);
          });
        });
      }
      U.on("ready", () => {
        Ie = true;
        ne.sshLogger.info(`[SSH2Connection] Connected to ${tr(r.username, r.hostname, r.port)}`);
        Z(U);
      });
      U.on("error", we => {
        const Me = Array.isArray(we.errors) ? we.errors.map(Ue => Ue instanceof Error ? Ue.message : String(Ue)).filter(Boolean).join("; ") : "";
        const Ne = we.message || Me || we.constructor.name;
        ne.sshLogger.error(`[SSH2Connection] Connection error: ${Ne}`);
        he(we.message ? we : new Error(Ne, {
          cause: we
        }));
      });
      const be = M;
      U.on("close", () => {
        if (be != null) {
          be.markKilled();
        }
        if (be != null) {
          be.process.kill();
        }
      });
      U.connect(oe);
    });
  }
  function X() {
    if (!r.proxyCommand) {
      return;
    }
    if (M != null) {
      M.markKilled();
    }
    if (M != null) {
      M.process.kill();
    }
    const oe = si(r.proxyCommand, r.hostname, r.port, r.username, p.sshHost.includes("@") ? p.sshHost.slice(p.sshHost.indexOf("@") + 1) : p.sshHost);
    M = oi(oe, m);
    k.sock = M.stream;
  }
  const K = oe => oe instanceof Error && oe.message.includes("authentication methods failed");
  const $ = oe => {
    const Z = (M == null ? undefined : M.stderrTail()) ?? "";
    const he = M == null ? undefined : M.exitCode();
    if (M != null) {
      M.markKilled();
    }
    if (M != null) {
      M.process.kill();
    }
    const U = he != null && he !== 0 ? new Error(`ProxyCommand failed: ${Z || "(no output)"} (exit code ${he})`, {
      cause: oe
    }) : Ms(oe, Z);
    throw K(oe) || C === "keyboard-interactive" || C === "password" ? Wi(U, C) : U;
  };
  const re = k.tryKeyboard;
  if (Q.length > 1) {
    k.tryKeyboard = false;
  }
  let Y;
  let J = false;
  let V = false;
  let F;
  for (let oe = 0; oe < Q.length; oe++) {
    if (oe > 0) {
      k.privateKey = Q[oe].buffer;
      X();
      ne.sshLogger.info(`[SSH2Connection] Auth failed with ${Q[oe - 1].path}, retrying with ${Q[oe].path}`);
    }
    try {
      F = await w(k);
      V = true;
      break;
    } catch (Z) {
      Y = Z;
      if (K(Z)) {
        J = true;
      } else {
        break;
      }
    }
  }
  k.tryKeyboard = re;
  if (V && F) {
    return {
      client: F,
      proxyProcess: M == null ? undefined : M.process,
      authMethod: C === "none" ? "publickey" : C
    };
  }
  try {
    if (Y) {
      throw Y;
    }
    return {
      client: await w(k),
      proxyProcess: M == null ? undefined : M.process,
      authMethod: C === "none" ? "publickey" : C
    };
  } catch (oe) {
    if (!K(oe) && !J || !e) {
      return $(oe);
    }
    const he = B ?? (await e(`Password for ${r.username}@${r.hostname}`));
    if (he == null) {
      return $(oe);
    }
    ne.sshLogger.info(`[SSH2Connection] Retrying with password auth (keyboard-interactive ${B != null ? "was used" : "not available"})`);
    X();
    delete k.privateKey;
    k.password = he;
    C = "password";
    try {
      return {
        client: await w(k),
        proxyProcess: M == null ? undefined : M.process,
        authMethod: C
      };
    } catch (U) {
      return $(U);
    }
  }
}
class Gs extends Sn.EventEmitter {
  constructor(e) {
    super();
    this.config = e;
    this.children = new Set();
    this.ended = false;
    ne.assertSafeWslDistro(e.distro);
  }
  exec(e, r) {
    if (this.ended) {
      r(new Error("WSLConnection: exec after end()"), undefined);
      return;
    }
    const y = xi.spawn("wsl.exe", ["-d", this.config.distro, "--exec", "sh", "-c", e], {
      stdio: ["pipe", "pipe", "pipe"],
      windowsHide: true,
      env: ne.WSL_ENV
    });
    this.children.add(y);
    let k = false;
    y.once("spawn", () => {
      if (!k) {
        k = true;
        r(undefined, Ys(y));
      }
    });
    y.once("error", m => {
      this.children.delete(y);
      if (!k) {
        k = true;
        r(m, undefined);
        return;
      }
      ne.sshLogger.warn(`[WSLConnection] child error after spawn: ${m.message}`);
    });
    y.once("close", () => this.children.delete(y));
  }
  sftp(e) {
    e(undefined, js(this.config.distro));
  }
  end() {
    if (!this.ended) {
      this.ended = true;
      for (const e of this.children) {
        e.kill();
      }
      this.children.clear();
      setImmediate(() => this.emit("close"));
    }
  }
}
function Ys(p) {
  if (!p.stdin || !p.stdout || !p.stderr) {
    throw new Error("WSLConnection: child spawned without piped stdio");
  }
  const e = p.stdin;
  const r = p.stdout;
  const y = p.stderr;
  const k = new an.Duplex({
    emitClose: false,
    autoDestroy: false,
    read() {
      r.resume();
    },
    write(M, v, R) {
      e.write(M, v, R);
    },
    final(M) {
      e.end(M);
    }
  });
  r.on("data", M => {
    if (!k.push(M)) {
      r.pause();
    }
  });
  r.on("end", () => k.push(null));
  k.stderr = y;
  p.on("exit", M => k.emit("exit", M));
  p.on("close", () => k.emit("close"));
  const m = M => v => {
    ne.sshLogger.warn(`[WSLConnection] ${M} error: ${v.message}`);
  };
  k.on("error", m("channel"));
  e.on("error", m("stdin"));
  r.on("error", m("stdout"));
  y.on("error", m("stderr"));
  k.close = () => p.kill();
  return k;
}
function Xs(p, e) {
  const r = ne.wslUncPath(p, e);
  if (!r) {
    throw new Error("WSLConnection: invalid remote path");
  }
  return r;
}
function Br(p) {
  const e = p;
  if (e != null && e.code) {
    const r = new Error(`${e.code}: ${e.syscall ?? "fs"} failed`);
    r.code = e.code;
    r.errno = e.errno;
    r.syscall = e.syscall;
    return r;
  }
  return new Error("WSL sftp shim: fs operation failed");
}
function ir(p, e) {
  p.then(r => e(undefined, r), r => e(Br(r), undefined));
}
function sr(p, e) {
  p.then(() => e(null), r => e(Br(r)));
}
async function ci(p, e, r) {
  await ne.wslExec(["-d", p, "--exec", "chmod", r.toString(8), e]).catch(y => ne.sshLogger.warn(`[WSLConnection] chmodAfter failed: ${y.message}`));
}
function js(p) {
  const e = r => Xs(p, r);
  return {
    fastPut(r, y, k, m) {
      sr((async () => {
        const {
          size: v
        } = await Vt.stat(r);
        let R = 0;
        const I = Ht.createReadStream(r);
        const Q = Ht.createWriteStream(e(y));
        I.on("data", n => {
          var B;
          R += n.length;
          if ((B = k.step) != null) {
            B.call(k, R, n.length, v);
          }
        });
        await wi.pipeline(I, Q);
      })(), m);
    },
    writeFile(r, y, k, m) {
      sr((async () => {
        await Vt.writeFile(e(r), y, {
          mode: k.mode ?? 384
        });
        await ci(p, r, k.mode ?? 384);
      })(), m);
    },
    mkdir(r, y, k) {
      sr((async () => {
        try {
          await Vt.mkdir(e(r), {
            mode: y.mode ?? 448
          });
        } catch (M) {
          if (M.code !== "EEXIST" || !(await Vt.stat(e(r))).isDirectory()) {
            throw M;
          }
          return;
        }
        await ci(p, r, y.mode ?? 448);
      })(), k);
    },
    readdir(r, y) {
      ir((async () => (await Vt.readdir(e(r))).map(M => ({
        filename: M
      })))(), y);
    },
    stat(r, y) {
      ir((async () => {
        const m = await Vt.stat(e(r));
        return {
          isFile: () => m.isFile(),
          size: m.size
        };
      })(), y);
    },
    realpath(r, y) {
      if (!r.startsWith("/")) {
        y(new Error("WSLConnection: realpath received non-absolute path"), undefined);
        return;
      }
      ne.wslExec(["-d", p, "--exec", "realpath", r]).then(k => k.code === 0 ? y(undefined, k.stdout.trim()) : y(new Error(`realpath exited ${k.code}`), undefined), k => y(Br(k), undefined));
    },
    readFile(r, y) {
      ir((async () => Vt.readFile(e(r)))(), y);
    }
  };
}
const Mt = ".claude/remote";
const zt = "server";
const cn = "srv";
const Vs = 10;
const fi = 30;
const fn = "run";
const Yi = "ccd-cli";
const zs = 3;
const Js = 30000;
const Zs = 5000;
const eo = 1048576;
const to = xn.probing;
const no = xn.serverSetup;
const ln = xn.cliDownload;
const hi = xn.cliUploadPrefix;
function li(p, e) {
  if (e <= 0) {
    return `${hi}...`;
  }
  const r = y => Math.round(y / 1048576);
  return `${hi} (${r(p)} / ${r(e)} MB)...`;
}
function Rt(p, e, r) {
  const {
    mineCode: y = true,
    ...k
  } = r;
  const m = e instanceof Error ? e.message : String(e ?? "");
  const M = m.length > 10000 ? `${m.slice(0, 2000)}
…[truncated]…
${m.slice(-8000)}` : m;
  ne.sshLogger.warn(`[BinaryDeployment] ${p}${M ? `: ${M}` : " (no detail)"}`);
  return new Zt({
    code: y ? un(e) : undefined,
    ...k
  });
}
function Nt(p) {
  return `'${p.replace(/'/g, "''")}'`;
}
function ro(p) {
  const e = `${p}/${Yi}`;
  return `test -f ${St.shellQuote(e)} && rm -f ${St.shellQuote(e)} ${St.shellQuote(`${p}/ccd-cli-version`)} || true; `;
}
function Xi(p) {
  return p.replace(/[^A-Za-z0-9._-]/g, "_");
}
function Ar() {
  return yn.createHash("sha256").update(`${Si.hostname()}\0${Yt.app.getPath("userData")}`).digest("hex").slice(0, 8);
}
function io(p, e, r, y) {
  const k = `${p}/${Mt}/${cn}/${Xi(e)}`;
  const m = `${p}/${Mt}/${fn}/${r}`;
  return {
    binDir: k,
    binPath: `${k}/${zt}${y ? ".exe" : ""}`,
    runDir: m,
    socketPath: `${m}/rpc.sock`
  };
}
function so(p) {
  return `${p}/daemon.token`;
}
const oo = 4096;
function Jt(p) {
  return `powershell.exe -NoProfile -NonInteractive -ExecutionPolicy Bypass -EncodedCommand ${Buffer.from(p, "utf16le").toString("base64")}`;
}
function ao(p) {
  if (p.includes("FullyQualifiedErrorId : CommandNotFoundException") || p.includes("is not recognized as the name of a cmdlet") || p.includes("is not recognized as a name of a cmdlet") || p.includes("ParserError:")) {
    return "powershell";
  } else if (p.includes("is not recognized as an internal or external command") || p.includes("The system cannot find the path specified")) {
    return "cmd";
  } else {
    return null;
  }
}
function on(p, e, r) {
  if (p === "posix") {
    return r.map(m => `${St.shellQuote(e)} ${m.map(St.shellQuote).join(" ")}`).join(" && ");
  }
  const k = `${r.map(m => `& ${Nt(e)} ${m.map(Nt).join(" ")}`).join("; ")}; exit $LASTEXITCODE`;
  if (p === "powershell") {
    return k;
  } else {
    return Jt(k);
  }
}
function co(p, e) {
  const r = [];
  if (p.sshPort && p.sshPort !== 22) {
    r.push("-p", String(p.sshPort));
  }
  if (p.sshIdentityFile) {
    r.push("-i", ne.expandTildePath(p.sshIdentityFile));
  }
  r.push("-o", "BatchMode=yes", "-o", "StrictHostKeyChecking=accept-new", "-o", `ConnectTimeout=${e}`, "-o", "ServerAliveInterval=15", "-o", "ServerAliveCountMax=4");
  r.push("--", p.sshHost);
  return r;
}
async function pn(p, e) {
  Qi(p.sshHost);
  try {
    const r = Math.ceil((await Mi(p)) / 1000);
    const y = [...co(p, r), e];
    const {
      cmd: k,
      args: m
    } = await Bn("ssh", y);
    const M = await ne.allPaths().then(R => R.join(Ut.delimiter), () => process.env.PATH ?? "");
    const v = await ne.spawnAsync(k, m, {
      ignoreExitCode: true,
      ...(M ? {
        env: {
          ...process.env,
          PATH: M
        }
      } : {})
    });
    return {
      stdout: v.stdout,
      stderr: v.stderr,
      exitCode: v.code ?? 1
    };
  } catch (r) {
    return {
      stdout: "",
      stderr: r instanceof Error ? r.message : String(r),
      exitCode: 1
    };
  }
}
const fo = 1048576;
function ui() {
  const p = [];
  let e = 0;
  return {
    push(r) {
      const y = fo - e;
      if (y <= 0) {
        return;
      }
      const k = r.length > y ? r.subarray(0, y) : r;
      p.push(k);
      e += k.length;
    },
    text: () => Buffer.concat(p).toString("utf8")
  };
}
function Dt(p, e, r) {
  return new Promise((y, k) => {
    p.exec(e, (m, M) => {
      if (m) {
        k(Rt("exec channel open failed", m, {
          phase: "exec_channel"
        }));
        return;
      }
      const v = ui();
      const R = ui();
      let I = 0;
      M.on("data", Q => {
        v.push(Q);
      });
      M.stderr.on("data", Q => {
        R.push(Q);
      });
      M.on("exit", Q => {
        I = Q ?? 0;
      });
      M.on("close", () => {
        y({
          stdout: v.text(),
          stderr: R.text(),
          exitCode: I
        });
      });
      M.end();
    });
  });
}
function ji(p, e, r, y = {}) {
  return new Promise((k, m) => {
    const M = y.label ?? r;
    const v = Date.now();
    let R = Date.now();
    let I = 0;
    let Q = 0;
    let n = 0;
    let B = false;
    const C = K => {
      if (!B) {
        B = true;
        clearInterval(w);
        K();
      }
    };
    const w = setInterval(() => {
      if (B) {
        return;
      }
      const K = Date.now() - R;
      if (K > Js) {
        ne.sshLogger.error(`[BinaryDeployment] SFTP upload stalled: ${M} — ${Q}/${n}B (idle ${K}ms)`);
        C(() => m(new Zt({
          phase: "upload",
          artifact: y.artifact,
          code: "STALLED"
        })));
      }
    }, Zs);
    const X = (K, $, re) => {
      var J;
      R = Date.now();
      Q = K;
      n = re;
      if ((J = y.onProgress) != null) {
        J.call(y, K, re);
      }
      const Y = re > 0 && K >= re;
      if (K - I >= eo || Y) {
        I = K;
        const V = Date.now() - v;
        const F = V > 0 ? K / 1048576 / V * 1000 : 0;
        ne.sshLogger.info(`[BinaryDeployment] SFTP upload progress: ${M} ${K}/${re}B (${F.toFixed(2)} MB/s, ${V}ms elapsed)`);
      }
    };
    p.fastPut(e, r, {
      step: X
    }, K => {
      C(() => {
        if (K) {
          m(Rt(`SFTP upload failed (${M})`, K, {
            phase: "upload",
            artifact: y.artifact
          }));
          return;
        }
        k();
      });
    });
  });
}
function ho(p, e, r) {
  return new Promise((y, k) => {
    p.writeFile(e, r, {
      mode: 384,
      encoding: "utf8"
    }, m => {
      if (m) {
        k(Rt("token write failed", m, {
          phase: "write_secret",
          artifact: "token file"
        }));
        return;
      }
      y();
    });
  });
}
async function lo(p, e) {
  const r = await lr(p, so(e), oo);
  if (r === null) {
    return null;
  }
  const y = r.toString("utf8").trim();
  if (y.length > 0) {
    return y;
  } else {
    return null;
  }
}
function uo(p, e, r, y) {
  return new Promise((k, m) => {
    const M = on(e, r, [["--bridge", "--socket", y]]);
    p.exec(M, (v, R) => {
      if (v) {
        m(Rt("bridge channel open failed", v, {
          phase: "bridge_channel"
        }));
        return;
      }
      R.stderr.on("data", I => {
        ne.sshLogger.warn(`[BinaryDeployment] Bridge stderr: ${I.toString().trim()}`);
      });
      ne.sshLogger.info("[BinaryDeployment] Bridge channel opened");
      k(R);
    });
  });
}
async function go(p) {
  const e = await Dt(p, `echo __PRB1__; printenv USERPROFILE || true; echo __PRB2__; printenv HOME || true; echo __PRB3__; uname -sm || true; echo __PRB4__; id -u || true; echo __PRB5__; chmod 700 "$HOME/${Mt}" || true`);
  const r = e.stdout.split(`
`);
  const y = I => {
    const Q = r.findIndex(B => B.trim() === `__PRB${I}__`);
    const n = r.findIndex(B => B.trim() === `__PRB${I + 1}__`);
    if (!(Q < 0) && !(n < 0)) {
      return r.slice(Q + 1, n).join(`
`).trim();
    }
  };
  const k = y(2);
  if (e.exitCode === 0 && k !== undefined) {
    const I = y(1) ?? "";
    const [Q = "", n = ""] = (y(3) ?? "").toLowerCase().split(/\s+/);
    const B = /^(mingw|msys|cygwin)/i.test(Q);
    const C = B && I ? I : k;
    const w = B ? "windows" : Q.startsWith("darwin") ? "darwin" : Q.startsWith("linux") ? "linux" : null;
    const X = /^(x86_64|x86-64|x64|amd64)$/.test(n) ? "amd64" : /^(aarch64|arm64)$/.test(n) ? "arm64" : null;
    if (w && X) {
      const K = y(4);
      const $ = K !== undefined && /^\d+$/.test(K) ? Number(K) : null;
      return {
        shell: "posix",
        isWindows: B,
        remoteHome: B ? C.replace(/\\/g, "/") : C,
        sshPlatform: `${w}-${X}`,
        remoteUid: B ? null : $
      };
    }
    if (Q || n) {
      throw Rt("unsupported platform tokens", `${Q} ${n}`, {
        phase: "platform",
        terminal: true,
        mineCode: false,
        hint: "supported: Linux/macOS on x86_64/arm64, or Windows"
      });
    }
  }
  const m = ao(e.stderr) ?? (e.exitCode === 0 && k === undefined ? "cmd" : null);
  if (!m) {
    throw Rt("POSIX probe failed; stderr", e.stderr, {
      phase: "probe",
      mineCode: false
    });
  }
  ne.sshLogger.info(`[BinaryDeployment] POSIX probe failed; remote default shell is ${m}`);
  const M = await Dt(p, Jt(["Write-Output \"__HOME__=$HOME\"", "Write-Output \"__ARCH__=$(if ($env:PROCESSOR_ARCHITEW6432) { $env:PROCESSOR_ARCHITEW6432 } else { $env:PROCESSOR_ARCHITECTURE })\""].join(`
`)));
  if (M.exitCode !== 0) {
    throw Rt("Windows probe failed; output", M.stderr || M.stdout, {
      phase: "probe",
      mineCode: false
    });
  }
  const v = I => {
    var Q;
    var n;
    return ((n = (Q = M.stdout.match(new RegExp(`^__${I}__=(.*)$`, "m"))) == null ? undefined : Q[1]) == null ? undefined : n.trim()) ?? "";
  };
  const R = v("ARCH").toUpperCase() === "ARM64" ? "arm64" : "amd64";
  return {
    shell: m,
    isWindows: true,
    remoteHome: v("HOME").replace(/\\/g, "/"),
    sshPlatform: `windows-${R}`,
    remoteUid: null
  };
}
function Ao(p, e) {
  const r = {
    phase: "prepare",
    artifact: "server binary"
  };
  switch (p.reason) {
    case "platform_unavailable":
      return {
        ...r,
        terminal: true,
        hint: `claude-ssh${wn}${e}`
      };
    case "checksum_mismatch":
      return {
        ...r,
        code: "CHECKSUM_MISMATCH"
      };
    case "disk_full":
      {
        const y = p.code ?? Gt(p.error);
        return {
          ...r,
          code: y,
          hint: y === "EDQUOT" ? "the local disk quota is exceeded — free space and retry" : "the local disk is full — free space and retry"
        };
      }
    case "download_failed":
    default:
      return {
        ...r,
        code: "DOWNLOAD_FAILED"
      };
  }
}
async function _o(p, e, r, y, k, m, M) {
  var F;
  var oe;
  var Z;
  var he;
  var U;
  var Ie;
  const {
    binDir: v,
    binPath: R,
    runDir: I,
    socketPath: Q
  } = k;
  const n = `${y}/${cn}`;
  const B = `${y}/${fn}`;
  const C = r.isWindows ? ".exe" : "";
  const w = Xi(m ?? "unknown");
  let X;
  let K;
  if (r.isWindows) {
    const be = await Dt(p, Jt([`New-Item -ItemType Directory -Force -Path ${Nt(I)} | Out-Null`, `if (Test-Path ${Nt(R)}) { (Get-Item ${Nt(R)}).LastWriteTime = Get-Date }`, `$v = & ${Nt(R)} --version 2>$null`, "if ($?) { Write-Output \"__BV__=$v\" } else { Write-Output \"__BV__=\" }", `Get-ChildItem -Path ${Nt(`${n}/*/${zt}.exe`)} -EA SilentlyContinue |`, "  Sort-Object LastWriteTime -Descending |", "  ForEach-Object { Write-Output \"__SRV__=$($_.Directory.Name)\" }"].join(`
`)));
    X = ((oe = (F = be.stdout.match(/^__BV__=(.*)$/m)) == null ? undefined : F[1]) == null ? undefined : oe.trim()) ?? "";
    K = [...be.stdout.matchAll(/^__SRV__=(.+)$/gm)].map(we => we[1].trim());
  } else {
    const be = await Dt(p, `mkdir -p ${St.shellQuote(I)} && chmod 700 ${St.shellQuote(y)} ${St.shellQuote(I)}; ${ro(y)}test -x ${St.shellQuote(R)} && touch ${St.shellQuote(R)} || true; echo __BV__; ${St.shellQuote(R)} --version || true; echo __BVE__; echo __SRV__; ls -1t ${St.shellQuote(n)}/*/${zt} || true; echo __SRVE__`);
    X = ((he = (Z = be.stdout.match(/__BV__\n([\s\S]*?)\n__BVE__/)) == null ? undefined : Z[1]) == null ? undefined : he.trim()) ?? "";
    const we = `${n}/`;
    K = (((U = be.stdout.match(/__SRV__\n([\s\S]*?)\n__SRVE__/)) == null ? undefined : U[1]) ?? "").split(`
`).map(Me => Me.trim()).filter(Me => Me.startsWith(we)).map(Me => Me.slice(we.length).split("/")[0]);
  }
  const $ = (Ie = X.match(/claude-ssh\s+(\S+)/)) == null ? undefined : Ie[1];
  if (m && $ && m === $) {
    ne.sshLogger.info(`[BinaryDeployment] Server binary up to date (${$}), skipping upload`);
    return {
      neededDeploy: false,
      binPath: R
    };
  }
  const re = await Ri.prepare(r.sshPlatform);
  if (!re.ready || !re.path) {
    const be = $ ? w : K.find(we => we !== w);
    if (be) {
      const we = `${n}/${be}/${zt}${C}`;
      ne.sshLogger.warn(`[BinaryDeployment] Failed to download claude-ssh (${re.error}); continuing with existing remote ${be}`);
      return {
        neededDeploy: false,
        binPath: we
      };
    }
    throw Rt("claude-ssh prepare failed", re.error ?? "no detail", Ao(re, r.sshPlatform));
  }
  ne.sshLogger.info(`[BinaryDeployment] Deploying server binary ${r.sshPlatform} to ${v} (remote=${$ ?? "missing"}, local=${m ?? "?"})`);
  if (r.isWindows) {
    await Dt(p, Jt([`New-Item -ItemType Directory -Force -Path ${Nt(v)} | Out-Null`, `& ${Nt(R)} --stop --socket ${Nt(Q)} 2>$null`, `Remove-Item ${Nt(R)} -Force -EA SilentlyContinue`].join(`
`)));
  } else {
    await Dt(p, `mkdir -p ${St.shellQuote(v)} && chmod 700 ${St.shellQuote(v)}; rm -f ${St.shellQuote(R)}`);
  }
  await ji(e, re.path, R, {
    artifact: "server binary"
  });
  if (!r.isWindows) {
    await Dt(p, `chmod +x ${St.shellQuote(R)}`);
  }
  const Y = `${y}/rpc.sock`;
  const J = new Set([w, ...K.slice(0, Vs - 1)]);
  const V = K.filter(be => !J.has(be));
  if (r.isWindows) {
    await Dt(p, Jt([`& ${Nt(R)} --stop --socket ${Nt(Y)} 2>$null`, ...V.map(be => `Remove-Item ${Nt(`${n}/${be}`)} -Recurse -Force -EA SilentlyContinue`), `Get-ChildItem -Directory ${Nt(B)} -EA SilentlyContinue |`, `  Where-Object { $_.Name -ne ${Nt(M)} -and $_.LastWriteTime -lt (Get-Date).AddDays(-${fi}) } |`, "  Remove-Item -Recurse -Force -EA SilentlyContinue", `Get-ChildItem ${Nt(I)} -Filter 'token.*' -EA SilentlyContinue |`, "  Where-Object { $_.LastWriteTime -lt (Get-Date).AddHours(-1) } |", "  Remove-Item -Force -EA SilentlyContinue"].join(`
`)));
  } else {
    await Dt(p, [`${St.shellQuote(R)} --stop --socket ${St.shellQuote(Y)} || true`, ...V.map(be => `rm -rf ${St.shellQuote(`${n}/${be}`)}`), `find ${St.shellQuote(n)} -mindepth 1 -maxdepth 1 -type d -empty -exec rmdir {} + || true`, `find ${St.shellQuote(B)} -mindepth 1 -maxdepth 1 -type d -mtime +${fi} ! -name ${St.shellQuote(M)} -exec rm -rf {} + || true`, `find ${St.shellQuote(I)} -maxdepth 1 -name 'token.*' -mmin +60 -exec rm -f {} + || true`].join("; "));
  }
  return {
    neededDeploy: true,
    binPath: R
  };
}
function or(p, e) {
  const r = p.match(/__INSTALL_RESULT__(.+)$/m);
  if (!r) {
    throw Rt("server --install produced no result; stderr", e, {
      phase: "install",
      mineCode: false,
      code: qt(e) ? Gt(e) : "NO_INSTALL_RESULT"
    });
  }
  try {
    const y = JSON.parse(r[1]);
    if (typeof y != "object" || y === null) {
      throw new Error("non-object payload");
    }
    return y;
  } catch {
    throw Rt("server --install produced invalid JSON", r[1], {
      phase: "install",
      mineCode: false,
      code: qt(r[1]) ? Gt(r[1]) : "BAD_INSTALL_RESULT"
    });
  }
}
function di(p, e) {
  const y = (p.sshPlatform.split("-")[1] ?? "amd64") === "arm64" ? "arm64" : "x64";
  if (p.isWindows) {
    return `win32-${y}`;
  } else if (p.sshPlatform.startsWith("darwin")) {
    return `darwin-${y}`;
  } else if (e === "musl") {
    return `linux-${y}-musl`;
  } else {
    return `linux-${y}`;
  }
}
function gi(p, e, r) {
  const y = e.manifest.platforms[r];
  if (!y) {
    throw new Zt({
      phase: "prepare",
      artifact: "cli archive",
      terminal: true,
      hint: `the Claude CLI${wn}${r}`
    });
  }
  if (typeof y.checksum != "string") {
    throw new Error(`Claude CLI manifest missing checksum for ${r}`);
  }
  const k = r.startsWith("win32") ? "claude.exe.zst" : "claude.zst";
  return [...p, "--cli-url", `${e.baseUrl}/${e.version}/${r}/${k}`, "--cli-checksum", y.checksum];
}
const ar = new Map();
async function po(p, e, r, y, k, m, M) {
  if (await Ht.promises.open(r, "r").then(I => I.close().then(() => true)).catch(() => false)) {
    return;
  }
  let R = ar.get(e);
  if (!R) {
    R = (async () => {
      const I = {};
      new URL(k);
      if (M != null) {
        M({
          step: "deploying",
          message: ln
        });
      }
      const Q = `${r}.partial`;
      try {
        await ne.downloadFile({
          url: k,
          tempFilePath: Q,
          expectedSha256: m,
          telemetryKey: "cc_cache_fill",
          headers: I,
          onDownloadProgress: (B, C) => {
            if (M != null) {
              M({
                step: "deploying",
                message: ln,
                progress: {
                  bytesTransferred: B,
                  bytesTotal: C
                }
              });
            }
          }
        });
        await Ht.promises.rename(Q, r);
      } catch (B) {
        if (wr(B)) {
          throw B;
        }
        if (B instanceof Error && /checksum verification failed/i.test(B.message)) {
          throw Rt("CLI archive checksum mismatch", B, {
            phase: "prepare",
            artifact: "cli archive",
            code: "CHECKSUM_MISMATCH"
          });
        }
        if (qt(B)) {
          const C = Gt(B);
          throw Rt(`local disk full caching the CLI at ${y}`, B, {
            phase: "prepare",
            artifact: "cli archive",
            code: C,
            hint: C === "EDQUOT" ? "the local disk quota is exceeded — free space and retry" : "the local disk is full — free space and retry"
          });
        }
        throw Rt(`CLI cache fill failed at ${y}`, B, {
          phase: "prepare",
          artifact: "cli archive",
          code: un(B) ?? "DOWNLOAD_FAILED"
        });
      }
      const n = `${p}-`;
      for (const B of await Ht.promises.readdir(y).catch(() => [])) {
        if (!B.startsWith(n) || !B.includes(".zst")) {
          await Ht.promises.unlink(Ut.join(y, B)).catch(() => {});
        }
      }
    })();
    ar.set(e, R);
    R.finally(() => ar.delete(e)).catch(() => {});
  }
  await R;
}
async function Ai(p, e, r, y, k, m, M) {
  const v = ne.getClaudeCodeBuildInfo();
  const R = v.version;
  const I = ["--install", "--cli-dir", m, "--cli-version", R, "--cli-keep", String(zs)];
  const Q = !R.includes("-dev");
  const n = Q && !y.sshPlatform.startsWith("linux") ? gi(I, v, di(y, "")) : I;
  const B = or(...(await Dt(p, on(r, k, [n])).then(Z => [Z.stdout, Z.stderr])));
  if (B.cliPath && !B.cliError) {
    ne.sshLogger.info(`[BinaryDeployment] CLI v${R} ${B.cliWasPresent ? "cached" : "installed via remote fetch"}`);
    return B.cliPath;
  }
  if (B.cliError && qt(B.cliError)) {
    throw Rt("remote disk full during install", B.cliError, {
      phase: "install",
      artifact: "cli archive",
      code: Gt(B.cliError)
    });
  }
  const C = di(y, B.libc);
  const w = v.manifest.platforms[C];
  if (!w) {
    throw new Zt({
      phase: "prepare",
      artifact: "cli archive",
      terminal: true,
      hint: `the Claude CLI${wn}${C}`
    });
  }
  if (typeof w.checksum != "string") {
    throw new Error(`Claude CLI manifest missing checksum for ${C}`);
  }
  const X = y.isWindows ? "claude.exe.zst" : "claude.zst";
  const K = `${v.baseUrl}/${R}/${C}/${X}`;
  if (Q && y.sshPlatform.startsWith("linux")) {
    if (M != null) {
      M({
        step: "deploying",
        message: ln
      });
    }
    const Z = await Dt(p, on(r, k, [gi(I, v, C)]));
    const he = or(Z.stdout, Z.stderr);
    if (!he.cliError) {
      ne.sshLogger.info(`[BinaryDeployment] CLI v${R} installed via remote fetch`);
      return he.cliPath;
    }
    if (qt(he.cliError)) {
      throw Rt("remote disk full during remote fetch", he.cliError, {
        phase: "install",
        artifact: "cli archive",
        code: Gt(he.cliError)
      });
    }
    ne.sshLogger.warn(`[BinaryDeployment] Remote CLI fetch failed, falling back to SFTP: ${he.cliError}`);
  } else if (B.cliError) {
    ne.sshLogger.warn(`[BinaryDeployment] CLI not cached on remote: ${B.cliError}`);
  }
  const $ = Ut.join(Yt.app.getPath("userData"), "ssh-cli-cache");
  try {
    await ne.mkdirPrivate($);
  } catch (Z) {
    throw Rt(`CLI cache dir setup failed at ${$}`, Z, {
      phase: "prepare",
      artifact: "cli archive"
    });
  }
  const re = `${R}-${C}.zst`;
  const Y = Ut.join($, re);
  await po(R, re, Y, $, K, w.checksum, M);
  let J;
  try {
    J = await Ht.promises.stat(Y);
  } catch (Z) {
    throw Rt(`CLI cache stat failed at ${Y}`, Z, {
      phase: "prepare",
      artifact: "cli archive"
    });
  }
  if (M != null) {
    M({
      step: "deploying",
      message: li(0, J.size),
      progress: {
        bytesTransferred: 0,
        bytesTotal: J.size
      }
    });
  }
  const V = `${m}/${R}.zst`;
  try {
    await ji(e, Y, V, {
      label: `claude.zst (${C})`,
      artifact: "cli archive",
      onProgress: (Z, he) => {
        if (M != null) {
          M({
            step: "deploying",
            message: li(Z, he),
            progress: {
              bytesTransferred: Z,
              bytesTotal: he
            }
          });
        }
      }
    });
  } catch (Z) {
    throw qt(Z) ? new Zt({
      phase: "upload",
      artifact: "cli archive",
      code: un(Z)
    }) : Z;
  }
  const F = await Dt(p, on(r, k, [[...I, "--cli-zst", V]]));
  const oe = or(F.stdout, F.stderr);
  if (oe.cliError) {
    throw Rt("server --install failed", oe.cliError, {
      phase: "install",
      artifact: "cli archive",
      ...(qt(oe.cliError) ? {
        code: Gt(oe.cliError)
      } : {})
    });
  }
  ne.sshLogger.info(`[BinaryDeployment] CLI v${R} ${oe.cliWasPresent ? "cached" : "installed via SFTP"}`);
  return oe.cliPath;
}
async function Eo(p, e) {
  if (p.kind === "wsl") {
    return {
      client: new Gs(p)
    };
  } else {
    return qs(p, e);
  }
}
async function bo(p, e, r, y, k, m = false, M = null) {
  ne.sshLogger.info(`[BinaryDeployment] Setting up remote server on ${ne.remoteTargetLabel(p)}`);
  if (k != null) {
    k.throwIfAborted();
  }
  if (r != null) {
    r({
      step: "connecting",
      message: "Connecting to remote host..."
    });
  }
  const {
    client: v,
    proxyProcess: R,
    authMethod: I
  } = await Eo(p, y);
  const Q = () => {
    ne.sshLogger.warn(`[BinaryDeployment] Aborting setup on ${ne.remoteTargetLabel(p)}`);
    v.end();
    if (R != null) {
      R.kill();
    }
  };
  if (k != null && k.aborted) {
    Q();
    throw k.reason instanceof Error ? k.reason : new Error("Aborted");
  }
  if (k != null) {
    k.addEventListener("abort", Q, {
      once: true
    });
  }
  try {
    if (r != null) {
      r({
        step: "deploying",
        message: to
      });
    }
    const [n, B] = await Promise.all([go(v), new Promise((be, we) => {
      v.sftp((Me, Ne) => {
        if (Me) {
          we(Rt("SFTP session open failed", Me, {
            phase: "sftp_channel"
          }));
          return;
        }
        be(Ne);
      });
    })]);
    if (!n.remoteHome) {
      throw new Zt({
        phase: "probe",
        code: "NO_HOME"
      });
    }
    const {
      shell: C,
      isWindows: w
    } = n;
    const X = `${n.remoteHome}/${Mt}`;
    const K = `${X}/${Yi}`;
    const $ = await Ri.getLocalVersion(n.sshPlatform);
    const re = Ar();
    const Y = io(n.remoteHome, $ ?? "unknown", re, w);
    const {
      socketPath: J,
      runDir: V
    } = Y;
    ne.sshLogger.info(`[BinaryDeployment] Remote: home=${n.remoteHome}, platform=${n.sshPlatform}, shell=${C}, localVer=${$ ?? "unknown"}`);
    if (r != null) {
      r({
        step: "deploying",
        message: no
      });
    }
    const {
      neededDeploy: F,
      binPath: oe
    } = await _o(v, B, n, X, Y, $, re);
    Y.binPath = oe;
    if (m && !F && e) {
      let be = M;
      if (!be) {
        if (r != null) {
          r({
            step: "deploying",
            message: ln
          });
        }
        be = await Ai(v, B, C, n, oe, K, r);
      }
      const we = await lo(B, V);
      if (we !== null && we !== e) {
        ne.sshLogger.info("[BinaryDeployment] Reattaching with the persisted daemon token (daemon started by another controller)");
      }
      const Me = await mo(v, C, oe, J, we !== null && we !== e ? [we, e] : [e]);
      if (Me) {
        if (r != null) {
          r({
            step: "starting",
            message: "Reattaching to remote server..."
          });
        }
        if (k != null) {
          k.removeEventListener("abort", Q);
        }
        return {
          ssh2Client: v,
          channel: Me.channel,
          sftp: B,
          proxyProcess: R,
          neededDeploy: false,
          cliPath: be,
          remoteHome: n.remoteHome,
          remoteUid: n.remoteUid,
          reusedServer: true,
          isWindows: w,
          serverToken: Me.token,
          reattachAuth: Me.token === e ? "own_token" : "persisted_token",
          serverPaths: Y,
          authMethod: I
        };
      }
      ne.sshLogger.info("[BinaryDeployment] No reusable server; starting fresh");
    }
    if (r != null) {
      r({
        step: "deploying",
        message: ln
      });
    }
    const Z = await Ai(v, B, C, n, oe, K, r);
    if (r != null) {
      r({
        step: "starting",
        message: "Starting remote server..."
      });
    }
    const he = ["--serve", "--socket", J];
    if (e) {
      const be = `${V}/token.${yn.randomBytes(8).toString("hex")}`;
      await ho(B, be, e);
      he.push("--token-file", be);
    }
    const U = await Dt(v, on(C, oe, [["--stop", "--socket", J], he]));
    if (U.exitCode !== 0) {
      const be = U.stderr || U.stdout;
      throw Rt("remote server start failed", be, {
        phase: "daemon_start",
        mineCode: false,
        ...(qt(be) ? {
          code: Gt(be)
        } : {})
      });
    }
    ne.sshLogger.info("[BinaryDeployment] Remote server started");
    const Ie = await uo(v, C, oe, J);
    if (k != null) {
      k.removeEventListener("abort", Q);
    }
    return {
      ssh2Client: v,
      channel: Ie,
      sftp: B,
      proxyProcess: R,
      neededDeploy: F,
      cliPath: Z,
      remoteHome: n.remoteHome,
      remoteUid: n.remoteUid,
      reusedServer: false,
      isWindows: w,
      serverToken: e,
      serverPaths: Y,
      authMethod: I
    };
  } catch (n) {
    if (k != null) {
      k.removeEventListener("abort", Q);
    }
    v.end();
    if (R != null) {
      R.kill();
    }
    throw I === undefined ? n : Wi(n, I);
  }
}
function mo(p, e, r, y, k) {
  return new Promise(m => {
    const M = on(e, r, [["--bridge", "--socket", y]]);
    p.exec(M, (v, R) => {
      if (v) {
        m(null);
        return;
      }
      let I = false;
      let Q = "";
      let n = 0;
      const B = $ => {
        if (!I) {
          I = true;
          clearTimeout(C);
          ne.sshLogger.info(`[BinaryDeployment] Reattach failed: ${$}`);
          R.close();
          m(null);
        }
      };
      let C = setTimeout(() => B("bridge startup timeout"), 15000);
      let w = false;
      const X = () => {
        R.write(`${JSON.stringify({
          jsonrpc: "2.0",
          id: n,
          method: "server.ping",
          auth: k[n]
        })}
`);
      };
      R.on("close", () => B("channel closed"));
      R.stderr.on("data", $ => {
        ne.sshLogger.warn(`[BinaryDeployment] Bridge stderr: ${$.toString().trim()}`);
      });
      const K = $ => {
        if (!I) {
          Q += $.toString();
          if (!w && Q.includes("{")) {
            w = true;
            clearTimeout(C);
            C = setTimeout(() => B("ping timeout"), 3000);
          }
          if (Q.includes("\"pong\":true")) {
            I = true;
            clearTimeout(C);
            R.removeListener("data", K);
            ne.sshLogger.info("[BinaryDeployment] Reattached to running server");
            m({
              channel: R,
              token: k[n]
            });
          } else if (Q.includes("\"error\":")) {
            n++;
            if (n < k.length) {
              Q = "";
              clearTimeout(C);
              C = setTimeout(() => B("ping timeout"), 3000);
              X();
              return;
            }
            B("auth error");
          }
        }
      };
      R.on("data", K);
      X();
    });
  });
}
async function _i(p, e, r) {
  ne.sshLogger.info(`[BinaryDeployment] Stopping remote server on ${ne.remoteTargetLabel(p)}`);
  const y = (R, I) => `${St.shellQuote(R)} --stop --socket ${St.shellQuote(I)} || true`;
  if (p.kind === "wsl") {
    if (!(await ne.isWslDistroRunning(p.distro))) {
      return;
    }
    const R = B => ne.wslExec(["-d", p.distro, "--exec", "sh", "-c", B], 15000).catch(() => {});
    if (r) {
      await R(y(r.binPath, r.socketPath));
      return;
    }
    const I = Ar();
    const Q = `"$HOME"/${Mt}/${fn}/${I}/rpc.sock`;
    const n = `"$HOME"/${Mt}/${cn}/*/${zt}`;
    await R(`sh -c 'for b in ${n}; do [ -x "$b" ] && "$b" --stop --socket ${Q} && exit 0; done' 2>/dev/null; exit 0`);
    return;
  }
  const k = p;
  if (r) {
    const {
      binPath: R,
      socketPath: I
    } = r;
    await pn(k, e ? Jt(`& ${Nt(R)} --stop --socket ${Nt(I)}`) : y(R, I));
    return;
  }
  const m = Ar();
  const M = `"$HOME"/${Mt}/${fn}/${m}/rpc.sock`;
  const v = `"$HOME"/${Mt}/${cn}/*/${zt}`;
  await pn(k, `sh -c 'for b in ${v}; do [ -x "$b" ] && "$b" --stop --socket ${M} && exit 0; done' 2>/dev/null; exit 0`).catch(() => {});
  await pn(k, Jt([`$b = Get-ChildItem "$HOME/${Mt}/${cn}/*/${zt}.exe" -EA SilentlyContinue | Select-Object -First 1`, `if ($b) { & $b.FullName --stop --socket "$HOME/${Mt}/${fn}/${m}/rpc.sock" }`].join(`
`))).catch(() => {});
}
async function yo(p, e) {
  const r = [".claude/settings.json", ".claude/settings.local.json"];
  return (await Promise.all(r.map(async k => {
    try {
      const m = await p(`${e}/${k}`);
      if (m.exists && m.content.trim()) {
        return {
          path: k,
          content: m.content
        };
      } else {
        return null;
      }
    } catch (m) {
      ne.sshLogger.warn(`[BinaryDeployment] files.read ${k} failed: ${m instanceof Error ? m.message : m}`);
      return null;
    }
  }))).filter(k => k !== null);
}
const So = new Set(["hostkey", "policy", "deploy_terminal"]);
function wo(p) {
  if (p && typeof p == "object") {
    const e = p;
    let r = typeof e.message == "string" ? e.message : String(p);
    if (!r && Array.isArray(e.errors)) {
      r = e.errors.map(m => m instanceof Error ? m.message : String(m ?? "")).filter(Boolean).join("; ");
    }
    const y = typeof e.code == "string" ? e.code : "";
    const k = typeof e.name == "string" ? e.name : "";
    return {
      message: r,
      code: y,
      name: k
    };
  }
  return {
    message: String(p ?? ""),
    code: "",
    name: ""
  };
}
const xo = ["setup timed out during \"deploying", "setup timed out during \"starting"];
const Io = new Set(["ETIMEDOUT", "ECONNRESET", "ECONNREFUSED", "EHOSTUNREACH", "EHOSTDOWN", "ENETUNREACH", "ENETDOWN", "ENOTFOUND", "EADDRNOTAVAIL", "EACCES", "EPIPE", "EAI_AGAIN"]);
function pi(p) {
  var M;
  var v;
  const {
    message: e,
    code: r,
    name: y
  } = wo(p);
  const k = e.toLowerCase();
  if (y === "SshPolicyError") {
    return "policy";
  }
  const m = wr(p) ? {
    code: p.code ?? ((M = _n(e)) == null ? undefined : M.code),
    terminal: p.terminal || (((v = _n(e)) == null ? undefined : v.terminal) ?? false)
  } : _n(e);
  if (m) {
    if (m.terminal) {
      return "deploy_terminal";
    } else if (m.code && Bi.has(m.code)) {
      return "network";
    } else {
      return "deploy";
    }
  } else if (k.startsWith("proxycommand ")) {
    return "network";
  } else if (r === "ENOSPC" || xo.some(R => k.includes(R))) {
    return "deploy";
  } else if (k.includes("host denied") || k.includes("host key verification failed")) {
    return "hostkey";
  } else if (k.includes("all configured authentication methods failed") || k.includes("permission denied") || k.includes("authentication failed") || k.includes("no matching authentication methods") || k.includes("publickey") && k.includes("denied") || k.includes("privatekey value does not contain") || k.includes("cannot parse privatekey")) {
    return "auth";
  } else if (Io.has(r) || k.includes("etimedout") || k.includes("econnreset") || k.includes("econnrefused") || k.includes("ehostunreach") || k.includes("ehostdown") || k.includes("enetunreach") || k.includes("enotfound") || k.includes("eaddrnotavail") || k.includes("getaddrinfo") || k.includes("read error") || k.includes("write error")) {
    return "network";
  } else if (k.includes("handshake") || k.includes("connection lost before handshake") || k.includes("timed out before handshake") || k.includes("timed out while waiting for handshake") || k.includes("ssh connection setup timed out")) {
    return "handshake";
  } else {
    return "unknown";
  }
}
function Co(p) {
  if (!(p instanceof Error)) {
    return false;
  }
  const e = p.message;
  if (e === "Connection closed" || e === "Not connected to remote server" || e.startsWith("RPC call to ") && e.endsWith(" timed out")) {
    return true;
  }
  const r = p.code;
  return r === "EPIPE" || r === "ECONNRESET" || r === "ERR_STREAM_WRITE_AFTER_END";
}
const Bo = -32002;
function cr(p) {
  return p instanceof Error && p.name === "RPCCallError" && p.code === Bo;
}
const Ro = -32003;
function fr(p) {
  return p instanceof Error && p.name === "RPCCallError" && p.code === Ro;
}
function Ei(p) {
  if (!(p instanceof Error)) {
    return false;
  }
  if (p.message === "Connection closed" || p.message === "Not connected to remote server") {
    return true;
  }
  const e = p.code;
  return e === "EPIPE" || e === "ECONNRESET" || e === "ERR_STREAM_WRITE_AFTER_END";
}
const $t = class $t extends Sn.EventEmitter {
  constructor(e) {
    super();
    this.socket = null;
    this.readline = null;
    this.requestId = 0;
    this.pendingRequests = new Map();
    this.connected = false;
    this.token = null;
    this.heartbeatTimer = null;
    this.heartbeatMisses = 0;
    this.heartbeatInFlight = false;
    this.lastLineAt = 0;
    this.lastTickAt = Date.now();
    this.streamBuffer = [];
    this.flushHandle = null;
    this.requestTimeout = (e == null ? undefined : e.requestTimeout) ?? 30000;
    this.heartbeatIntervalMs = (e == null ? undefined : e.heartbeatIntervalMs) ?? $t.HEARTBEAT_INTERVAL_MS;
    this.heartbeatTimeoutMs = (e == null ? undefined : e.heartbeatTimeoutMs) ?? $t.HEARTBEAT_TIMEOUT_MS;
    this.heartbeatMaxMisses = (e == null ? undefined : e.heartbeatMaxMisses) ?? $t.HEARTBEAT_MAX_MISSES;
    this.heartbeatEnabled = (e == null ? undefined : e.heartbeat) ?? true;
  }
  async connect(e) {
    return new Promise((r, y) => {
      this.socket = os.createConnection(e);
      this.socket.on("connect", () => {
        this.connected = true;
        this.setupReadline();
        this.startHeartbeat();
        r();
      });
      this.socket.on("error", k => {
        if (this.connected) {
          this.emit("error", k);
        } else {
          y(k);
        }
      });
      this.socket.on("close", () => {
        ne.sshLogger.info("[RemoteRPCClient] Socket closed");
        this.connected = false;
        this.cleanup();
        this.emit("close");
      });
    });
  }
  connectWithStream(e) {
    this.socket = e;
    this.connected = true;
    this.setupReadline();
    this.startHeartbeat();
    e.on("error", r => {
      this.emit("error", r);
    });
    e.on("close", () => {
      ne.sshLogger.info("[RemoteRPCClient] Stream closed");
      this.connected = false;
      this.cleanup();
      this.emit("close");
    });
  }
  setToken(e) {
    this.token = e;
  }
  isConnected() {
    return this.connected;
  }
  disconnect() {
    if (this.socket) {
      this.socket.destroy();
      this.socket = null;
    }
    this.cleanup();
  }
  async call(e, r, y) {
    if (!this.connected || !this.socket) {
      throw new Error("Not connected to remote server");
    }
    const k = ++this.requestId;
    const m = {
      jsonrpc: "2.0",
      id: k,
      method: e,
      params: r,
      ...(this.token ? {
        auth: this.token
      } : {})
    };
    const M = (y == null ? undefined : y.timeout) ?? this.requestTimeout;
    return new Promise((v, R) => {
      var n;
      const I = setTimeout(() => {
        this.pendingRequests.delete(k);
        R(new Error(`RPC call to ${e} timed out`));
      }, M);
      this.pendingRequests.set(k, {
        resolve: v,
        reject: R,
        timeout: I
      });
      const Q = `${JSON.stringify(m)}
`;
      if ((n = this.socket) != null) {
        n.write(Q, B => {
          if (B) {
            clearTimeout(I);
            this.pendingRequests.delete(k);
            R(B);
            this.forceCloseFromHeartbeat();
          }
        });
      }
    });
  }
  setupReadline() {
    if (this.socket) {
      this.readline = as.createInterface({
        input: this.socket,
        crlfDelay: Infinity
      });
      this.readline.on("line", e => {
        if (e.trim()) {
          if (e.startsWith("{\"type\":\"stream\"")) {
            this.lastLineAt = Date.now();
            this.streamBuffer.push(e);
            this.scheduleStreamFlush();
            return;
          }
          try {
            const r = JSON.parse(e);
            this.handleMessage(r);
          } catch (r) {
            ne.sshLogger.error("[RemoteRPCClient] Failed to parse JSON:", r);
          }
        }
      });
    }
  }
  handleMessage(e) {
    if (!e || typeof e != "object") {
      return;
    }
    if ("type" in e && e.type === "stream") {
      this.handleStreamFrame(e);
      return;
    }
    const r = e;
    if (r.id === undefined || r.id === null) {
      return;
    }
    const y = this.pendingRequests.get(r.id);
    if (y) {
      clearTimeout(y.timeout);
      this.pendingRequests.delete(r.id);
      if (r.error) {
        y.reject(new ko(r.error));
      } else {
        y.resolve(r.result);
      }
    }
  }
  handleStreamFrame(e) {
    this.emit("stream", e);
    this.emit(`stream:${e.processId}`, e);
  }
  scheduleStreamFlush() {
    this.flushHandle ||= setImmediate(() => this.drainStreamBuffer());
  }
  drainStreamBuffer() {
    this.flushHandle = null;
    const e = this.streamBuffer.splice(0, $t.FRAMES_PER_TICK);
    for (const r of e) {
      try {
        const y = JSON.parse(r);
        this.handleStreamFrame(y);
      } catch (y) {
        ne.sshLogger.error("[RemoteRPCClient] Failed to parse stream frame:", y);
      }
    }
    if (this.streamBuffer.length > 0) {
      this.scheduleStreamFlush();
    }
  }
  cleanup() {
    this.stopHeartbeat();
    for (const [e, r] of this.pendingRequests) {
      clearTimeout(r.timeout);
      r.reject(new Error("Connection closed"));
      this.pendingRequests.delete(e);
    }
    if (this.flushHandle) {
      clearImmediate(this.flushHandle);
      this.flushHandle = null;
    }
    this.streamBuffer = [];
    if (this.readline) {
      this.readline.close();
      this.readline = null;
    }
  }
  startHeartbeat() {
    var e;
    var r;
    if (this.heartbeatEnabled) {
      if (!this.heartbeatTimer) {
        this.heartbeatMisses = 0;
        this.heartbeatInFlight = false;
        this.lastTickAt = Date.now();
        this.heartbeatTimer = setInterval(() => void this.sendHeartbeat(), this.heartbeatIntervalMs);
        if ((r = (e = this.heartbeatTimer).unref) != null) {
          r.call(e);
        }
      }
    }
  }
  stopHeartbeat() {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = null;
    }
    this.heartbeatMisses = 0;
    this.heartbeatInFlight = false;
  }
  async sendHeartbeat() {
    const e = Date.now();
    if (e - this.lastTickAt > this.heartbeatIntervalMs * 2) {
      ne.sshLogger.warn(`[RemoteRPCClient] heartbeat tick gap ${e - this.lastTickAt}ms (>2× interval); likely resumed from sleep, arming for immediate close on next miss`);
      this.heartbeatMisses = this.heartbeatMaxMisses - 1;
    }
    this.lastTickAt = e;
    if (!this.heartbeatInFlight && !!this.connected && !!this.socket) {
      if (e - this.lastLineAt < this.heartbeatIntervalMs) {
        this.heartbeatMisses = 0;
        return;
      }
      this.heartbeatInFlight = true;
      try {
        await this.call("server.ping", undefined, {
          timeout: this.heartbeatTimeoutMs
        });
        if (!this.connected || !this.heartbeatTimer) {
          return;
        }
        this.heartbeatMisses = 0;
      } catch (r) {
        if (!this.connected || !this.heartbeatTimer) {
          return;
        }
        this.heartbeatMisses += 1;
        ne.sshLogger.warn(`[RemoteRPCClient] heartbeat miss ${this.heartbeatMisses}/${this.heartbeatMaxMisses}: ${r instanceof Error ? r.message : String(r)}`);
        if (this.heartbeatMisses >= this.heartbeatMaxMisses) {
          ne.sshLogger.error(`[RemoteRPCClient] heartbeat failed ${this.heartbeatMaxMisses} times; declaring transport dead and forcing close`);
          this.forceCloseFromHeartbeat();
        }
      } finally {
        this.heartbeatInFlight = false;
      }
    }
  }
  forceCloseFromHeartbeat() {
    this.stopHeartbeat();
    if (this.socket) {
      this.socket.destroy();
      this.socket = null;
    }
    if (this.connected) {
      this.connected = false;
      this.cleanup();
      this.emit("close");
    }
  }
};
$t.FRAMES_PER_TICK = 64;
$t.HEARTBEAT_INTERVAL_MS = 7000;
$t.HEARTBEAT_TIMEOUT_MS = 2000;
$t.HEARTBEAT_MAX_MISSES = 2;
let _r = $t;
class ko extends Error {
  constructor(e) {
    super(e.message);
    this.name = "RPCCallError";
    this.code = e.code;
    this.data = e.data;
  }
}
const Vi = "[spawn]";
const vt = class vt extends Sn.EventEmitter {
  constructor(e, r, y) {
    var k;
    super();
    this.rpcClient = e;
    this.spawnParams = r;
    this._killed = false;
    this._exitCode = null;
    this._wasKilled = false;
    this._spawnConfirmed = false;
    this._stdinBuffer = [];
    this._stdinAssignedBytes = 0;
    this._stdinBackpressured = false;
    this._stdinBackpressureRetry = null;
    this._stdinBackpressureAttempts = 0;
    this._stdinChunkSendInFlight = false;
    this._lastSeq = 0;
    this._stdoutLineChunks = [];
    this._stdoutLineBytes = 0;
    this._rawUntilNewline = false;
    this._resyncStdoutToNewline = false;
    this._detached = false;
    this._detachedKillSignal = null;
    this._graceTimer = null;
    this._rebindFrameBuffer = null;
    this._rebindFrameBytes = 0;
    this.id = yn.randomUUID();
    this._gapSurviveEnabled = (y == null ? undefined : y.gapSurviveEnabled) ?? false;
    this._stdinOffsetEnabled = (y == null ? undefined : y.stdinOffsetEnabled) ?? false;
    this._stdin = new an.PassThrough();
    this._stdout = new an.PassThrough();
    this._stderr = new an.PassThrough();
    this._startTime = Date.now();
    ne.sshLogger.info(`[RemoteProcess:${this.id}] Creating process: ${r.command} [${((k = r.args) == null ? undefined : k.length) ?? 0} arg(s)]`);
    ne.sshLogger.info(`[RemoteProcess:${this.id}] Working directory: ${r.cwd}`);
    this.boundStreamHandler = this.handleStreamFrame.bind(this);
    this.rpcClient.on(`stream:${this.id}`, this.boundStreamHandler);
    ne.sshLogger.info(`[RemoteProcess:${this.id}] Registered stream listener for stream:${this.id}`);
    this.boundTransportCloseHandler = () => this.handleTransportDetached();
    this.rpcClient.on("close", this.boundTransportCloseHandler);
    this.setupStdinForwarding();
    this.spawn().catch(m => {
      ne.sshLogger.error(`[RemoteProcess:${this.id}] Spawn failed:`, m);
      const M = m instanceof Error ? m.message : String(m);
      if (Co(m)) {
        this.abandon();
        return;
      }
      this._stderr.push(Buffer.from(`${Vi} ${M}
`));
      this._exitCode = 1;
      this._stdout.push(null);
      this._stderr.push(null);
      this.emit("exit", 1, null);
      this.cleanup();
    });
  }
  get stdin() {
    return this._stdin;
  }
  get stdout() {
    return this._stdout;
  }
  get stderr() {
    return this._stderr;
  }
  get killed() {
    return this._killed;
  }
  get exitCode() {
    return this._exitCode;
  }
  kill(e) {
    ne.sshLogger.info(`[RemoteProcess:${this.id}] kill called with signal: ${e}`);
    if (this._killed || this._exitCode !== null) {
      return true;
    } else {
      this._wasKilled = true;
      if (this._detached || !this._spawnConfirmed) {
        this._detachedKillSignal = e;
        return true;
      } else {
        this.rpcClient.call("process.kill", {
          id: this.id,
          signal: e
        }).catch(r => {
          ne.sshLogger.error(`[RemoteProcess:${this.id}] kill failed:`, r);
          this._detachedKillSignal = e;
        });
        return true;
      }
    }
  }
  cleanup() {
    this.rpcClient.off(`stream:${this.id}`, this.boundStreamHandler);
    this.rpcClient.off("close", this.boundTransportCloseHandler);
    if (this._graceTimer) {
      clearTimeout(this._graceTimer);
      this._graceTimer = null;
    }
    if (this._stdinBackpressureRetry) {
      clearTimeout(this._stdinBackpressureRetry);
      this._stdinBackpressureRetry = null;
    }
    this._stdinBackpressured = false;
    this.removeAllListeners();
  }
  async rebind(e, r = {
    canReattach: true
  }) {
    if (this._exitCode !== null) {
      return false;
    }
    if (!r.canReattach) {
      ne.sshLogger.warn(`[RemoteProcess:${this.id}] Remote server lacks process.reattach; abandoning (best-effort kill via stale client)`);
      this.abandon();
      return false;
    }
    this.rpcClient.off(`stream:${this.id}`, this.boundStreamHandler);
    this.rpcClient.off("close", this.boundTransportCloseHandler);
    this.rpcClient = e;
    this.rpcClient.on(`stream:${this.id}`, this.boundStreamHandler);
    this.rpcClient.on("close", this.boundTransportCloseHandler);
    if (this._graceTimer) {
      clearTimeout(this._graceTimer);
      this._graceTimer = null;
    }
    const y = this._lastSeq;
    if (this._gapSurviveEnabled) {
      this._rebindFrameBuffer = [];
      this._rebindFrameBytes = 0;
    }
    let k = false;
    ne.sshLogger.info(`[RemoteProcess:${this.id}] Rebinding (fromSeq=${y})`);
    let m;
    try {
      try {
        m = await this.rpcClient.call("process.reattach", {
          id: this.id,
          fromSeq: y
        });
      } catch (v) {
        ne.sshLogger.error(`[RemoteProcess:${this.id}] reattach RPC failed:`, v);
        if (Ei(v)) {
          this.handleTransportDetached();
          return false;
        } else {
          this.abandon();
          return false;
        }
      }
      if (this._exitCode !== null) {
        return false;
      }
      if (!m.found) {
        ne.sshLogger.warn(`[RemoteProcess:${this.id}] reattach: process not found on remote`);
        this.abandon();
        return false;
      }
      if (m.stdinApplied !== undefined && this._stdinBuffer.length > 0) {
        const v = this._stdinBuffer[0].offset;
        ne.sshLogger.info(`[RemoteProcess:${this.id}] reattach: daemon stdinApplied=${m.stdinApplied}, oldest unconfirmed offset=${v} (${m.stdinApplied > v ? "head chunk WAS accepted before the drop; daemon will dedup the replay" : "head chunk was not accepted; full replay needed"})`);
      }
      const M = this._detachedAt !== undefined ? Date.now() - this._detachedAt : undefined;
      this._detachedAt = undefined;
      if (m.firstSeq !== undefined && m.firstSeq > y + 1) {
        const v = m.running ? this._detachedKillSignal !== null ? "kill_deferred" : this._wasKilled ? "was_killed" : this._gapSurviveEnabled ? this.listenerCount("reattach-gap") === 0 ? "no_consumer" : this._rawUntilNewline ? "raw_mode" : null : "gate_off" : "process_exited";
        try {
          this.emit("gap-detected", {
            fromSeq: y,
            firstSeq: m.firstSeq,
            outcome: v === null ? "stayed_attached" : "abandoned",
            abandonReason: v,
            detachedMs: M
          });
        } catch (R) {
          ne.sshLogger.error(`[RemoteProcess:${this.id}] gap-detected listener threw:`, R);
        }
        if (v !== null) {
          ne.sshLogger.warn(`[RemoteProcess:${this.id}] reattach gap: server firstSeq=${m.firstSeq} > expected ${y + 1}; abandoning (${v})`);
          this.abandon();
          return false;
        }
        ne.sshLogger.warn(`[RemoteProcess:${this.id}] reattach gap: server firstSeq=${m.firstSeq} > expected ${y + 1}; staying attached, resyncing stdout`);
        this._lastSeq = Math.max(this._lastSeq, m.firstSeq - 1);
        this._stdoutLineChunks = [];
        this._stdoutLineBytes = 0;
        this._resyncStdoutToNewline = true;
        try {
          this.emit("reattach-gap", {
            fromSeq: y,
            firstSeq: m.firstSeq
          });
        } catch (R) {
          ne.sshLogger.error(`[RemoteProcess:${this.id}] reattach-gap listener threw:`, R);
        }
      }
      k = true;
    } finally {
      const M = this._rebindFrameBuffer;
      this._rebindFrameBuffer = null;
      if (M && k) {
        for (const v of M) {
          this.handleStreamFrame(v);
        }
      }
    }
    if (this._exitCode !== null) {
      return false;
    }
    ne.sshLogger.info(`[RemoteProcess:${this.id}] Reattached (running=${m.running}, lastSeq=${m.lastSeq})`);
    this._spawnConfirmed = true;
    if (!m.running) {
      return true;
    }
    if (this._detachedKillSignal) {
      this.sendDeferredKill();
    } else {
      try {
        await this.flushBufferedStdin();
      } catch (M) {
        ne.sshLogger.error(`[RemoteProcess:${this.id}] post-rebind stdin flush failed:`, M);
      }
      if (this._detachedKillSignal) {
        this.sendDeferredKill();
      }
    }
    if (this._graceTimer === null) {
      this._detached = false;
    }
    return true;
  }
  abandon() {
    if (this._exitCode !== null) {
      return;
    }
    ne.sshLogger.warn(`[RemoteProcess:${this.id}] Abandoning (transport lost, no reattach)`);
    this.rpcClient.call("process.kill", {
      id: this.id,
      signal: this._detachedKillSignal ?? "SIGTERM"
    }).catch(() => {});
    const e = this._wasKilled ? 0 : 1;
    if (!this._wasKilled && this.listenerCount("abandoned") > 0) {
      this.emit("abandoned");
    }
    this._exitCode = e;
    this._killed = this._wasKilled;
    this._stdout.push(null);
    this._stderr.push(null);
    this.emit("exit", e, null);
    this.cleanup();
  }
  sendDeferredKill() {
    const e = this._detachedKillSignal;
    if (e) {
      this._detachedKillSignal = null;
      this.rpcClient.call("process.kill", {
        id: this.id,
        signal: e
      }).catch(r => {
        ne.sshLogger.error(`[RemoteProcess:${this.id}] deferred kill failed:`, r);
        this._detachedKillSignal = e;
      });
    }
  }
  handleTransportDetached() {
    if (this._exitCode === null) {
      this._detached = true;
      this._detachedAt ??= Date.now();
      if (this._graceTimer) {
        clearTimeout(this._graceTimer);
      }
      ne.sshLogger.info(`[RemoteProcess:${this.id}] Transport closed; entering detached state (grace=${vt.REATTACH_GRACE_MS}ms)`);
      this._graceTimer = setTimeout(() => {
        this._graceTimer = null;
        this.abandon();
      }, vt.REATTACH_GRACE_MS);
    }
  }
  async spawn() {
    var y;
    const e = {
      id: this.id,
      ...this.spawnParams
    };
    ne.sshLogger.info(`[RemoteProcess:${this.id}] Spawning: ${e.command} [${((y = e.args) == null ? undefined : y.length) ?? 0} arg(s)]`);
    if (!(await this.rpcClient.call("process.spawn", e)).success) {
      throw new Error("Failed to spawn remote process");
    }
    await this.flushBufferedStdin();
    this._spawnConfirmed = true;
    ne.sshLogger.info(`[RemoteProcess:${this.id}] Spawn confirmed`);
    if (this._detachedKillSignal) {
      this.sendDeferredKill();
    }
  }
  setupStdinForwarding() {
    this._stdin.on("data", e => {
      if (this._exitCode !== null) {
        return;
      }
      const r = {
        data: e,
        offset: this._stdinAssignedBytes
      };
      this._stdinAssignedBytes += e.length;
      if (!this._spawnConfirmed || this._detached || this._stdinBackpressured || this._stdinChunkSendInFlight) {
        ne.sshLogger.debug(`[RemoteProcess:${this.id}] Buffering stdin (${this._stdinBuffer.length + 1} chunks)`);
        this.insertPending(r);
        return;
      }
      this.sendLiveStdin(r);
    });
  }
  insertPending(e) {
    let r = this._stdinBuffer.length;
    while (r > 0 && this._stdinBuffer[r - 1].offset > e.offset) {
      r--;
    }
    this._stdinBuffer.splice(r, 0, e);
  }
  takeBufferedStdin() {
    const e = this._stdinBuffer;
    if (e.length === 0) {
      return null;
    }
    let r = 1;
    while (r < e.length && e[r - 1].offset + e[r - 1].data.length === e[r].offset) {
      r++;
    }
    if (r < e.length) {
      ne.sshLogger.error(`[RemoteProcess:${this.id}] stdin buffer is not contiguous at offset ${e[r].offset} (previous span ends at ${e[r - 1].offset + e[r - 1].data.length}); sending only the contiguous head`);
    }
    this._stdinBuffer = e.slice(r);
    if (r === 1) {
      return e[0];
    } else {
      return {
        data: Buffer.concat(e.slice(0, r).map(y => y.data)),
        offset: e[0].offset
      };
    }
  }
  async sendLiveStdin(e) {
    if (await this.sendStdin(e)) {
      while (this._stdinBuffer.length > 0 && this._exitCode === null && this._spawnConfirmed && !this._detached && !this._stdinBackpressured && !this._stdinChunkSendInFlight) {
        const r = this.takeBufferedStdin();
        if (r === null || !(await this.sendStdin(r))) {
          return;
        }
      }
    }
  }
  async flushBufferedStdin() {
    while (this._stdinBuffer.length > 0) {
      ne.sshLogger.debug(`[RemoteProcess:${this.id}] Flushing ${this._stdinBuffer.length} buffered stdin chunks`);
      const e = this.takeBufferedStdin();
      if (e === null || !(await this.sendStdin(e))) {
        return;
      }
    }
  }
  async sendStdin(e, r = 0) {
    const y = e.data;
    if (this._exitCode === null && !this.rpcClient.isConnected()) {
      this.insertPending(e);
      return false;
    }
    if (y.length > vt.STDIN_CHUNK_MAX_BYTES) {
      return this.sendStdinChunked(e);
    }
    try {
      const k = {
        id: this.id,
        data: y.toString("base64")
      };
      if (this._stdinOffsetEnabled) {
        k.offset = e.offset;
      }
      const m = await this.rpcClient.call("process.stdin", k);
      if (m != null && m.duplicate) {
        ne.sshLogger.info(`[RemoteProcess:${this.id}] Daemon deduped an already-applied stdin replay (offset=${e.offset}, ${y.length}B)`);
      }
      this._stdinBackpressureAttempts = 0;
      return true;
    } catch (k) {
      if (this._exitCode === null && Ei(k)) {
        this.insertPending(e);
        ne.sshLogger.info(`[RemoteProcess:${this.id}] Re-queued ${y.length}B of stdin after transport drop; will replay on next rebind`);
        return false;
      }
      if (this._exitCode === null && (cr(k) || fr(k) || this._stdinOffsetEnabled)) {
        if (fr(k)) {
          ne.sshLogger.warn(`[RemoteProcess:${this.id}] Daemon refused stdin offset ${e.offset} as ahead of its applied bytes; re-queueing for an in-order replay`);
        } else if (!cr(k)) {
          ne.sshLogger.warn(`[RemoteProcess:${this.id}] process.stdin failed (${k instanceof Error ? k.message : String(k)}); re-queueing ${y.length}B at offset ${e.offset} for an ordered retry`);
        }
        this.insertPending(e);
        this._stdinBackpressured = true;
        const m = this._stdinBuffer.reduce((M, v) => M + v.data.length, 0) + r;
        if (m > vt.STDIN_BUFFER_MAX_BYTES || ++this._stdinBackpressureAttempts > vt.STDIN_BACKPRESSURE_MAX_RETRIES) {
          this._stderr.push(Buffer.from(`[stdin] remote child not draining stdin (backpressure attempts=${this._stdinBackpressureAttempts}, buffered=${m}B); abandoning
`));
          this.abandon();
          return false;
        } else {
          if (this._stdinBackpressureRetry === null) {
            ne.sshLogger.warn(`[RemoteProcess:${this.id}] stdin not accepted (${cr(k) ? "daemon queue full" : fr(k) ? "offset gap" : "rpc error"}); buffering locally, retry in 200ms (attempt ${this._stdinBackpressureAttempts})`);
            this._stdinBackpressureRetry = setTimeout(() => {
              this._stdinBackpressureRetry = null;
              this.flushBufferedStdin().finally(() => {
                if (this._stdinBackpressureRetry === null) {
                  this._stdinBackpressured = false;
                }
              });
            }, 200);
          }
          return false;
        }
      }
      ne.sshLogger.error(`[RemoteProcess:${this.id}] Failed to send stdin:`, k);
      return true;
    }
  }
  async sendStdinChunked(e) {
    const r = e.data;
    this._stdinChunkSendInFlight = true;
    try {
      for (let y = 0; y < r.length; y += vt.STDIN_CHUNK_MAX_BYTES) {
        if (this._exitCode !== null) {
          return true;
        }
        const k = Math.min(y + vt.STDIN_CHUNK_MAX_BYTES, r.length);
        if (!(await this.sendStdin({
          data: r.subarray(y, k),
          offset: e.offset + y
        }, r.length - k))) {
          if (k < r.length) {
            this.insertPending({
              data: r.subarray(k),
              offset: e.offset + k
            });
          }
          ne.sshLogger.info(`[RemoteProcess:${this.id}] Chunked stdin send stopped at ${y}/${r.length}B; re-queued ${r.length - y}B (delivered chunks trimmed from replay queue)`);
          return false;
        }
      }
      return true;
    } finally {
      this._stdinChunkSendInFlight = false;
    }
  }
  handleStreamFrame(e) {
    var r;
    if (this._exitCode === null) {
      if (this._rebindFrameBuffer !== null) {
        this._rebindFrameBuffer.push(e);
        this._rebindFrameBytes += (((r = e.data) == null ? undefined : r.length) ?? 0) + 128;
        if (this._rebindFrameBytes > vt.REBIND_BUFFER_MAX_BYTES) {
          ne.sshLogger.error(`[RemoteProcess:${this.id}] rebind frame buffer exceeds ${vt.REBIND_BUFFER_MAX_BYTES} bytes; abandoning`);
          this._rebindFrameBuffer = null;
          this.abandon();
        }
        return;
      }
      if (e.seq !== undefined) {
        if (e.seq <= this._lastSeq) {
          return;
        }
        this._lastSeq = e.seq;
      }
      switch (e.stream) {
        case "stdout":
          if (e.data) {
            let y = Buffer.from(e.data, "base64");
            if (!this._gapSurviveEnabled) {
              this._stdout.push(y);
              break;
            }
            if (this._resyncStdoutToNewline) {
              const M = y.indexOf(10);
              if (M === -1) {
                break;
              }
              y = y.subarray(M + 1);
              this._resyncStdoutToNewline = false;
            }
            if (this._rawUntilNewline) {
              const M = y.indexOf(10);
              if (M === -1) {
                this._stdout.push(y);
                break;
              }
              this._stdout.push(y.subarray(0, M + 1));
              y = y.subarray(M + 1);
              this._rawUntilNewline = false;
            }
            let k = 0;
            let m;
            while ((m = y.indexOf(10, k)) !== -1) {
              const M = y.subarray(k, m + 1);
              if (this._stdoutLineChunks.length > 0) {
                this._stdoutLineChunks.push(M);
                this._stdout.push(Buffer.concat(this._stdoutLineChunks));
                this._stdoutLineChunks = [];
                this._stdoutLineBytes = 0;
              } else {
                this._stdout.push(M);
              }
              k = m + 1;
            }
            if (k < y.length) {
              const M = y.subarray(k);
              this._stdoutLineChunks.push(M);
              this._stdoutLineBytes += M.length;
              if (this._stdoutLineBytes > vt.STDOUT_LINE_MAX_BYTES) {
                ne.sshLogger.warn(`[RemoteProcess:${this.id}] stdout line exceeds ${vt.STDOUT_LINE_MAX_BYTES} bytes without newline; raw-push until this line's newline`);
                this._stdout.push(Buffer.concat(this._stdoutLineChunks));
                this._stdoutLineChunks = [];
                this._stdoutLineBytes = 0;
                this._rawUntilNewline = true;
              }
            }
          }
          break;
        case "stderr":
          if (e.data) {
            const y = Buffer.from(e.data, "base64");
            this._stderr.push(y);
            ne.sshLogger.warn(`[RemoteProcess:${this.id}] stderr: ${y.toString().trim()}`);
          }
          break;
        case "exit":
          {
            const y = this._wasKilled ? 0 : e.exitCode ?? 0;
            this._exitCode = y;
            if (this._stdoutLineChunks.length > 0) {
              this._stdout.push(Buffer.concat(this._stdoutLineChunks));
              this._stdoutLineChunks = [];
              this._stdoutLineBytes = 0;
            }
            this._stdout.push(null);
            this._stderr.push(null);
            const k = Date.now() - this._startTime;
            ne.sshLogger.info(`[RemoteProcess:${this.id}] Exited, code=${y}, duration=${k}ms`);
            this.emit("exit", y, null);
            this.cleanup();
            break;
          }
      }
    }
  }
};
vt.STDIN_BUFFER_MAX_BYTES = 16777216;
vt.STDIN_BACKPRESSURE_MAX_RETRIES = 150;
vt.STDIN_CHUNK_MAX_BYTES = 262144;
vt.STDOUT_LINE_MAX_BYTES = 16777216;
vt.REATTACH_GRACE_MS = 900000;
vt.REBIND_BUFFER_MAX_BYTES = 67108864;
let mn = vt;
const At = class At extends Sn.EventEmitter {
  constructor(e) {
    super();
    this.target = e;
    this.rpcClient = null;
    this.ssh2Client = null;
    this.sftp = null;
    this.proxyProcess = null;
    this.connected = false;
    this.disconnectEmitted = false;
    this.token = null;
    this.pendingReady = null;
    this.pendingConnect = null;
    this.pendingStatusCallbacks = [];
    this.connectedAt = null;
    this.hadSuccessfulConnect = false;
    this.liveProcesses = new Set();
    this.capabilities = null;
    this.reconnecting = false;
    this.wakeReconnectResolver = null;
    this.intentionalDisconnect = false;
    this.cliPath = null;
    this.cliPathEpoch = 0;
    this.connectionGeneration = 0;
    this.isWindows = false;
    this.serverPaths = null;
    this.remoteHome = null;
    this.remoteUid = null;
    this.recentUnexpectedCloses = [];
  }
  async ensureReady(e = "send_message", r, y) {
    var k;
    if (!this.connected || (k = this.rpcClient) == null || !k.isConnected() || !this.cliPath) {
      if (r) {
        this.pendingStatusCallbacks.push(r);
      }
      if (y) {
        this.pendingPasswordPrompt = y;
      }
      if (this.pendingReady) {
        await this.pendingReady;
      } else {
        const m = this.pendingStatusCallbacks;
        const M = (v, R) => {
          for (const I of m) {
            I(v, R);
          }
        };
        this.pendingReady = this.doEnsureReady(e, M).finally(() => {
          this.pendingReady = null;
          m.length = 0;
          this.pendingStatusCallbacks = [];
          this.pendingPasswordPrompt = undefined;
        });
        await this.pendingReady;
      }
      if (this.cliPath === null) {
        return this.ensureReady(e, r, y);
      }
    }
  }
  async doEnsureReady(e, r) {
    var M;
    const y = Date.now();
    const k = this.cliPathEpoch;
    ne.sshLogger.info(`[RemoteServerController] Ensuring server is ready on ${ne.remoteTargetLabel(this.target)} (trigger: ${e})`);
    this.disconnectEmitted = true;
    if (this.rpcClient) {
      this.rpcClient.disconnect();
      this.rpcClient = null;
    }
    if (this.ssh2Client) {
      this.ssh2Client.end();
      this.ssh2Client = null;
      this.sftp = null;
    }
    if (this.proxyProcess) {
      this.proxyProcess.kill();
      this.proxyProcess = null;
    }
    const m = new AbortController();
    try {
      this.token ||= yn.randomUUID();
      let v = hn;
      const R = this.target.kind === "ssh" ? await Mi(this.target) : hn;
      if (Number.isFinite(R) && R > 0) {
        v = R;
      }
      const I = Re => Re === "deploying" ? At.DEPLOY_STEP_TIMEOUT : Re === "connecting" ? v * 2 + At.PASSWORD_PROMPT_EXTRA : At.STEP_TIMEOUT;
      let Q = "connecting";
      let n = "";
      let B;
      let C = Date.now();
      let w;
      let X;
      const K = new Promise((Re, Pe) => {
        X = Pe;
      });
      const $ = () => {
        if (m.signal.aborted) {
          return;
        }
        const Re = Date.now() - C;
        const Pe = B ? `; last progress: ${B.bytesTransferred}/${B.bytesTotal}B` : "";
        const qe = new Error(`SSH connection setup timed out during "${Q}: ${n || "(no message)"}" (idle ${Re}ms${Pe})`);
        m.abort(qe);
        X(qe);
      };
      w = setTimeout($, I(Q));
      const re = {
        fire: $,
        deadlineAt: Date.now() + I(Q)
      };
      this.pendingConnect = re;
      const Y = Re => {
        Q = Re.step;
        n = Re.message;
        if (Re.progress) {
          B = Re.progress;
        }
        C = Date.now();
        clearTimeout(w);
        const Pe = I(Re.step);
        w = setTimeout($, Pe);
        re.deadlineAt = Date.now() + Pe;
        if (r != null) {
          r(Re.step, Re.message);
        }
      };
      const J = await Promise.race([bo(this.target, this.token, Y, Re => {
        var Pe;
        if (m.signal.aborted) {
          return Promise.resolve(null);
        } else {
          return ((Pe = this.pendingPasswordPrompt) == null ? undefined : Pe.call(this, Re)) ?? Promise.resolve(null);
        }
      }, m.signal, this.hadSuccessfulConnect, this.cliPath), K]).finally(() => {
        clearTimeout(w);
        this.pendingConnect = null;
      });
      if (this.intentionalDisconnect) {
        J.ssh2Client.end();
        if ((M = J.proxyProcess) != null) {
          M.kill();
        }
        _i(this.target, J.isWindows, J.serverPaths).catch(Re => {
          ne.sshLogger.warn("[RemoteServerController] post-terminate stopRemoteServer failed:", Re);
        });
        throw new Error("Controller terminated during connection setup");
      }
      const {
        ssh2Client: V,
        channel: F,
        sftp: oe,
        proxyProcess: Z,
        neededDeploy: he,
        cliPath: U,
        remoteHome: Ie,
        remoteUid: be,
        reusedServer: we,
        isWindows: Me,
        serverToken: Ne,
        reattachAuth: Ue,
        serverPaths: Le,
        authMethod: Qe
      } = J;
      if (Ne) {
        this.token = Ne;
      }
      this.ssh2Client = V;
      this.sftp = oe;
      this.connectionGeneration++;
      this.proxyProcess = Z ?? null;
      if (this.cliPathEpoch === k) {
        this.cliPath = U;
      } else {
        ne.sshLogger.info(`[RemoteServerController] cliPath invalidated during connect (epoch ${k}→${this.cliPathEpoch}); discarding stale path`);
      }
      this.isWindows = Me;
      this.remoteHome = Ie;
      this.serverPaths = Le;
      this.remoteUid = be;
      V.on("close", () => {
        if (this.ssh2Client === V) {
          ne.sshLogger.warn("[RemoteServerController] SSH2 connection closed");
          this.handleUnexpectedClose("ssh2_close");
        }
      });
      V.on("error", Re => {
        ne.sshLogger.error(`[RemoteServerController] SSH2 error: ${Re.message}`);
      });
      this.rpcClient = new _r();
      if (this.token) {
        this.rpcClient.setToken(this.token);
      }
      this.rpcClient.connectWithStream(F);
      const Xe = this.rpcClient;
      this.rpcClient.on("error", Re => {
        ne.sshLogger.error(`[RemoteServerController] RPC stream error on ${ne.remoteTargetLabel(this.target)}: ${Re.message}`);
      });
      this.rpcClient.on("close", () => {
        if (this.rpcClient === Xe) {
          ne.sshLogger.warn("[RemoteServerController] RPC stream closed");
          this.handleUnexpectedClose("rpc_stream_close");
        }
      });
      this.disconnectEmitted = false;
      this.capabilities = await this.queryServerCapabilities(Xe);
      if (!Xe.isConnected() || this.intentionalDisconnect) {
        throw new Error("RPC transport closed during capability handshake");
      }
      this.connected = true;
      this.hadSuccessfulConnect = true;
      this.connectedAt = Date.now();
      const Ke = Date.now() - y;
      ne.sshLogger.info(`[RemoteServerController] Connected to remote server (${Ke}ms, trigger: ${e}, reused: ${we})`);
      if (this.liveProcesses.size > 0) {
        if (we) {
          this.rebindLiveProcesses();
        } else {
          ne.sshLogger.warn(`[RemoteServerController] Server restarted; abandoning ${this.liveProcesses.size} tracked process(es)`);
          for (const Re of this.liveProcesses) {
            Re.abandon();
          }
        }
      }
      ne.logEvent("desktop_ssh_connected", {
        duration_ms: Ke,
        needed_deploy: he,
        reused_server: we,
        reattach_auth: Ue,
        trigger: e,
        auth_method: Qe
      });
    } catch (v) {
      const R = Date.now() - y;
      const I = v instanceof Error ? v.message : String(v);
      ne.sshLogger.error(`[RemoteServerController] Connection failed (${R}ms, trigger: ${e}): ${I}`);
      ne.logEvent("desktop_ssh_connection_failed", {
        duration_ms: R,
        error_message: ne.scrubPaths(I).slice(0, 500),
        error_class: pi(v),
        trigger: e,
        auth_method: Qs(v)
      });
      this.cleanupConnection();
      throw v;
    }
  }
  handleUnexpectedClose(e) {
    const r = this.connectedAt ? Date.now() - this.connectedAt : 0;
    this.connected = false;
    this.connectedAt = null;
    if (this.proxyProcess) {
      this.proxyProcess.kill();
      this.proxyProcess = null;
    }
    if (this.disconnectEmitted) {
      return;
    }
    let y = 0;
    if (!this.reconnecting) {
      const k = Date.now();
      this.recentUnexpectedCloses = this.recentUnexpectedCloses.filter(M => k - M < At.FLAP_WINDOW_MS);
      this.recentUnexpectedCloses.push(k);
      const m = this.recentUnexpectedCloses.length;
      if (m >= At.FLAP_GIVE_UP_THRESHOLD) {
        ne.sshLogger.warn(`[RemoteServerController] Connection flapping: ${m} unexpected closes in ${Math.round(At.FLAP_WINDOW_MS / 1000)}s; giving up auto-reconnect and emitting disconnect`);
        for (const M of this.liveProcesses) {
          M.abandon();
        }
        this.disconnectEmitted = true;
        this.recentUnexpectedCloses = [];
        this.cleanupConnection();
        this.emit("disconnected");
        ne.logEvent("desktop_ssh_disconnected", {
          connection_duration_ms: r,
          trigger: e,
          auto_reconnect_attempts: 0,
          error_class: "flapping"
        });
        return;
      }
      if (m > At.FLAP_BACKOFF_THRESHOLD) {
        y = Math.min(At.FLAP_BACKOFF_BASE_MS * 2 ** (m - At.FLAP_BACKOFF_THRESHOLD - 1), At.FLAP_BACKOFF_CAP_MS);
        ne.sshLogger.warn(`[RemoteServerController] Connection flapping: ${m} unexpected closes in ${Math.round(At.FLAP_WINDOW_MS / 1000)}s; delaying next reconnect by ${y}ms`);
        ne.logEvent("desktop_ssh_reconnect_flapping", {
          close_count: m,
          backoff_ms: y,
          trigger: e
        });
      }
    }
    this.attemptAutoReconnect(e, r, y);
  }
  async queryServerCapabilities(e) {
    try {
      const r = await e.call("server.capabilities", undefined, {
        timeout: 5000
      });
      const y = {
        version: typeof (r == null ? undefined : r.version) == "string" ? r.version : "unknown",
        methods: Array.isArray(r == null ? undefined : r.methods) ? r.methods : [],
        features: Array.isArray(r == null ? undefined : r.features) ? r.features : []
      };
      ne.sshLogger.info(`[RemoteServerController] server capabilities: version=${y.version}, methods=${y.methods.length}, features=[${(y.features ?? []).join(", ")}]`);
      return y;
    } catch (r) {
      const y = r instanceof Error ? r.message : String(r);
      ne.sshLogger.warn(`[RemoteServerController] server.capabilities handshake failed, assuming legacy server: ${y}`);
      return {
        version: "unknown",
        methods: ["process.reattach"],
        features: []
      };
    }
  }
  supportsStdinOffset() {
    var e;
    var r;
    return ((r = (e = this.capabilities) == null ? undefined : e.features) == null ? undefined : r.includes(ne.FEATURE_STDIN_OFFSET)) ?? false;
  }
  rebindLiveProcesses() {
    var y;
    var k;
    const e = this.rpcClient;
    if (!e) {
      return;
    }
    const r = ((k = (y = this.capabilities) == null ? undefined : y.methods) == null ? undefined : k.includes("process.reattach")) ?? false;
    if (!r) {
      ne.sshLogger.warn("[RemoteServerController] Remote server does not advertise process.reattach; abandoning %d live process(es)", this.liveProcesses.size);
      for (const m of this.liveProcesses) {
        m.abandon();
      }
      return;
    }
    ne.sshLogger.info(`[RemoteServerController] Rebinding ${this.liveProcesses.size} live process(es)`);
    for (const m of this.liveProcesses) {
      m.rebind(e, {
        canReattach: r
      }).catch(M => {
        ne.sshLogger.error(`[RemoteServerController] rebind failed for ${m.id}:`, M);
        m.abandon();
      });
    }
  }
  async attemptAutoReconnect(e, r, y = 0) {
    var v;
    var R;
    if (this.reconnecting) {
      return;
    }
    this.reconnecting = true;
    const k = performance.now();
    let m = 0;
    let M = "unknown";
    try {
      while (true) {
        const I = this.liveProcesses.size > 0;
        const Q = performance.now() - k;
        if (I) {
          if (Q > At.RECONNECT_MAX_DURATION_MS) {
            break;
          }
        } else if (m >= At.RECONNECT_BACKOFF_IDLE.length) {
          break;
        }
        const n = (I ? Math.min(2 ** m * 1000, At.RECONNECT_BACKOFF_CAP_MS) : At.RECONNECT_BACKOFF_IDLE[m]) + (m === 0 ? y : 0);
        const B = Math.round(n * (0.7 + Math.random() * 0.6));
        m++;
        ne.sshLogger.info(`[RemoteServerController] Auto-reconnect attempt ${m} in ${B}ms (liveProcesses=${this.liveProcesses.size}, elapsed=${Math.round(Q / 1000)}s)`);
        await new Promise(C => {
          var X;
          const w = setTimeout(C, B);
          if ((X = w.unref) != null) {
            X.call(w);
          }
          this.wakeReconnectResolver = () => {
            clearTimeout(w);
            C();
          };
        });
        this.wakeReconnectResolver = null;
        if (this.intentionalDisconnect) {
          return;
        }
        if (this.target.kind !== "wsl" && ((R = (v = Yt.net).isOnline) == null ? undefined : R.call(v)) === false) {
          ne.sshLogger.info(`[RemoteServerController] Auto-reconnect attempt ${m} skipped: host is offline`);
          M = "network";
          continue;
        }
        if (this.target.kind === "wsl" && !(await ne.isWslDistroRunning(this.target.distro))) {
          ne.sshLogger.info(`[RemoteServerController] Auto-reconnect attempt ${m} skipped: WSL distro ${this.target.distro} not confirmed running`);
          M = "network";
          continue;
        }
        try {
          await this.ensureReady("warm_up");
        } catch (C) {
          const w = C instanceof Error ? C.message : String(C);
          M = pi(C);
          ne.sshLogger.warn(`[RemoteServerController] Auto-reconnect attempt ${m} failed: ${w}`);
          if (So.has(M)) {
            ne.sshLogger.warn(`[RemoteServerController] Auto-reconnect aborted: terminal error class "${M}" (${w})`);
            break;
          }
          if (M === "auth") {
            if (!I) {
              ne.sshLogger.warn(`[RemoteServerController] Auto-reconnect aborted: authentication failed (${w}). Check your SSH agent or key.`);
              break;
            }
            ne.sshLogger.info(`[RemoteServerController] Auth failed but ${this.liveProcesses.size} live process(es) exist; continuing patient reconnect (agent may recover after wake)`);
          }
          continue;
        }
        ne.logEvent("desktop_ssh_auto_reconnected", {
          attempts: m,
          duration_ms: Math.round(performance.now() - k),
          close_trigger: e
        });
        return;
      }
      if (this.intentionalDisconnect) {
        return;
      }
      ne.sshLogger.warn(`[RemoteServerController] Auto-reconnect exhausted after ${m} attempt(s); emitting disconnect`);
      for (const I of this.liveProcesses) {
        I.abandon();
      }
      this.disconnectEmitted = true;
      this.cleanupConnection();
      this.emit("disconnected");
      ne.logEvent("desktop_ssh_disconnected", {
        connection_duration_ms: r,
        trigger: e,
        auto_reconnect_attempts: m,
        error_class: M
      });
    } finally {
      this.reconnecting = false;
      this.wakeReconnectResolver = null;
    }
  }
  abortStalePending() {
    const e = this.pendingConnect;
    if (e != null && !(Date.now() <= e.deadlineAt)) {
      ne.sshLogger.warn(`[RemoteServerController] Aborting stale in-flight connect (wall-clock deadline exceeded by ${Date.now() - e.deadlineAt}ms; likely spanned system sleep)`);
      e.fire();
    }
  }
  invalidateCliPath() {
    this.cliPathEpoch++;
    if (this.cliPath !== null) {
      ne.sshLogger.info(`[RemoteServerController] Invalidating remote CLI path ${this.cliPath} for redeploy on next ensureReady`);
      this.cliPath = null;
    }
  }
  wake() {
    var e;
    if ((e = this.wakeReconnectResolver) != null) {
      e.call(this);
    }
  }
  recoverConnection(e) {
    if (this.reconnecting) {
      this.wake();
      return;
    }
    const r = this.connectedAt ? Date.now() - this.connectedAt : 0;
    this.connected = false;
    this.attemptAutoReconnect(e, r);
  }
  cleanupConnection() {
    if (this.rpcClient) {
      this.rpcClient.disconnect();
      this.rpcClient = null;
    }
    if (this.ssh2Client) {
      this.ssh2Client.end();
      this.ssh2Client = null;
      this.sftp = null;
    }
    if (this.proxyProcess) {
      this.proxyProcess.kill();
      this.proxyProcess = null;
    }
    this.connected = false;
    this.connectedAt = null;
  }
  isConnected() {
    var e;
    return this.connected && (((e = this.rpcClient) == null ? undefined : e.isConnected()) ?? false);
  }
  async detach() {
    ne.sshLogger.info("[RemoteServerController] Detaching (leaving daemon running)");
    this.disconnectEmitted = true;
    this.intentionalDisconnect = true;
    this.wake();
    if (this.rpcClient) {
      this.rpcClient.disconnect();
      this.rpcClient = null;
    }
    if (this.ssh2Client) {
      this.ssh2Client.end();
      this.ssh2Client = null;
      this.sftp = null;
    }
    if (this.proxyProcess) {
      this.proxyProcess.kill();
      this.proxyProcess = null;
    }
    this.connected = false;
    this.connectedAt = null;
  }
  async disconnect() {
    ne.sshLogger.info("[RemoteServerController] Disconnecting");
    await this.detach();
    await _i(this.target, this.isWindows, this.serverPaths).catch(e => {
      ne.sshLogger.warn("[RemoteServerController] Failed to stop remote server:", e);
    });
  }
  async terminate() {
    for (const e of this.liveProcesses) {
      e.abandon();
    }
    this.disconnectEmitted = true;
    this.emit("disconnected");
    await this.disconnect();
  }
  async ping(e = At.PING_TIMEOUT) {
    if (!this.rpcClient) {
      throw new Error("Not connected");
    }
    try {
      return (await this.rpcClient.call("server.ping", undefined, {
        timeout: e
      })).pong;
    } catch (r) {
      ne.sshLogger.warn(`[RemoteServerController] Ping failed, marking connection dead: ${r instanceof Error ? r.message : String(r)}`);
      this.connected = false;
      throw r;
    }
  }
  async validatePath(e) {
    await this.ensureReady();
    return this.rpcClient.call("files.validate", {
      path: this.expandRemoteTilde(e)
    });
  }
  async readFile(e) {
    await this.ensureReady();
    return this.rpcClient.call("files.read", {
      path: this.expandRemoteTilde(e),
      maxBytes: 1048576
    });
  }
  async statFile(e) {
    await this.ensureReady();
    return this.rpcClient.call("files.stat", {
      path: this.expandRemoteTilde(e)
    });
  }
  async readBinaryFile(e, r, y) {
    await this.ensureReady();
    const k = this.expandRemoteTilde(e);
    try {
      return await this.withSftp(m => new Promise(M => {
        const v = setTimeout(() => {
          M(null);
        }, At.SFTP_READ_TIMEOUT_MS);
        const R = I => {
          clearTimeout(v);
          M(I);
        };
        if (y !== undefined) {
          m.realpath(k, (I, Q) => {
            if (I || Q !== y) {
              R(null);
              return;
            }
            lr(m, k, r).then(R);
          });
          return;
        }
        lr(m, k, r).then(R);
      }));
    } catch {
      return null;
    }
  }
  async realpath(e) {
    await this.ensureReady();
    const r = this.expandRemoteTilde(e);
    try {
      return await this.withSftp(y => new Promise(k => {
        const m = setTimeout(() => {
          k(null);
        }, At.SFTP_READ_TIMEOUT_MS);
        y.realpath(r, (M, v) => {
          clearTimeout(m);
          k(M ? null : v);
        });
      }));
    } catch {
      return null;
    }
  }
  async extractTar(e, r) {
    await this.ensureReady();
    return this.rpcClient.call("files.extract_tar", {
      archivePath: this.expandRemoteTilde(e),
      destDir: this.expandRemoteTilde(r)
    });
  }
  async listDirectory(e) {
    await this.ensureReady();
    return (await this.rpcClient.call("files.list", {
      path: this.expandRemoteTilde(e)
    })).entries;
  }
  async getGitInfo(e) {
    await this.ensureReady();
    return this.rpcClient.call("git.info", {
      path: this.expandRemoteTilde(e)
    });
  }
  async listBranches(e) {
    var y;
    var k;
    await this.ensureReady();
    if ((k = (y = this.capabilities) == null ? undefined : y.methods) != null && k.includes("git.list_branches")) {
      return (await this.rpcClient.call("git.list_branches", {
        path: this.expandRemoteTilde(e)
      })).branches ?? [];
    } else {
      ne.sshLogger.warn("[RemoteServerController] Remote server does not advertise git.list_branches; returning []");
      return [];
    }
  }
  async createWorktree(e, r, y, k) {
    await this.ensureReady();
    return this.rpcClient.call("git.worktree_create", {
      baseRepo: this.expandRemoteTilde(e),
      branchName: r,
      worktreePath: this.expandRemoteTilde(y),
      sourceBranch: k
    }, {
      timeout: At.WORKTREE_RPC_TIMEOUT
    });
  }
  async removeWorktree(e, r, y) {
    await this.ensureReady();
    return this.rpcClient.call("git.worktree_remove", {
      baseRepo: this.expandRemoteTilde(e),
      worktreePath: this.expandRemoteTilde(r),
      branchName: y
    }, {
      timeout: At.WORKTREE_RPC_TIMEOUT
    });
  }
  spawnAuxProcess(e) {
    if (!this.rpcClient) {
      throw new Error("Not connected to remote server");
    }
    const r = new mn(this.rpcClient, {
      ...e,
      cwd: this.expandRemoteTilde(e.cwd)
    }, {
      stdinOffsetEnabled: this.supportsStdinOffset()
    });
    this.liveProcesses.add(r);
    r.on("exit", () => this.liveProcesses.delete(r));
    return r;
  }
  async withSftp(e) {
    if (!this.sftp) {
      throw new Error("Not connected to remote server");
    }
    return e(this.sftp);
  }
  get hostKey() {
    return ne.controllerCacheKey(this.target);
  }
  expandRemoteTilde(e) {
    if (!e || !this.remoteHome) {
      return e;
    } else if (e === "~") {
      return this.remoteHome;
    } else if (e.startsWith("~/") || e.startsWith("~\\")) {
      return `${this.remoteHome}/${e.slice(2)}`;
    } else {
      return e;
    }
  }
  createSpawnFunction(e, r, y, k) {
    return m => {
      if (!this.rpcClient) {
        throw new Error("Not connected to remote server");
      }
      const M = {};
      if (m.env) {
        for (const [I, Q] of Object.entries(m.env)) {
          if (Q !== undefined && (I.startsWith("CLAUDE_") || I.startsWith("ANTHROPIC_") || I === "DISABLE_AUTOUPDATER")) {
            if (I.endsWith("_FILE_DESCRIPTOR") || I.startsWith("CLAUDE_CODE_HOST_") || I === "CLAUDE_CODE_SSE_PORT" || I === "CLAUDE_CODE_CONTAINER_ID" || I === "CLAUDE_CONFIG_DIR" || I === "CLAUDE_CODE_TMPDIR" || I === "CLAUDE_AI_URL") {
              continue;
            }
            M[I] = Q;
          }
        }
      }
      const v = To(m.args);
      const R = new mn(this.rpcClient, {
        command: m.command,
        args: v,
        cwd: this.expandRemoteTilde(m.cwd),
        env: M
      }, {
        gapSurviveEnabled: true,
        stdinOffsetEnabled: this.supportsStdinOffset()
      });
      this.liveProcesses.add(R);
      R.on("exit", () => {
        this.liveProcesses.delete(R);
      });
      if (e) {
        R.stderr.on("data", I => {
          e(I.toString());
        });
      }
      if (r) {
        R.on("abandoned", r);
      }
      if (y) {
        R.on("reattach-gap", y);
      }
      if (k) {
        R.on("gap-detected", k);
      }
      return R;
    };
  }
};
At.RECONNECT_BACKOFF_IDLE = [1000, 2000, 5000];
At.RECONNECT_BACKOFF_CAP_MS = 30000;
At.RECONNECT_MAX_DURATION_MS = 600000;
At.FLAP_WINDOW_MS = 300000;
At.FLAP_BACKOFF_THRESHOLD = 5;
At.FLAP_GIVE_UP_THRESHOLD = 10;
At.FLAP_BACKOFF_BASE_MS = 5000;
At.FLAP_BACKOFF_CAP_MS = 60000;
At.STEP_TIMEOUT = 30000;
At.DEPLOY_STEP_TIMEOUT = 180000;
At.PASSWORD_PROMPT_EXTRA = 130000;
At.PING_TIMEOUT = 5000;
At.WORKTREE_RPC_TIMEOUT = 300000;
At.SFTP_READ_TIMEOUT_MS = 30000;
let pr = At;
function To(p) {
  const e = new Set(["--mcp-config"]);
  const r = [];
  let y = false;
  for (const k of p) {
    if (y) {
      y = false;
      continue;
    }
    if (e.has(k)) {
      y = true;
      continue;
    }
    r.push(k);
  }
  return r;
}
const Xt = new Map();
function vo(p) {
  return Xt.get(ne.controllerCacheKey(p));
}
function zi(p) {
  Qi(p.sshHost);
  return Ji({
    kind: "ssh",
    sshHost: p.sshHost,
    sshPort: p.sshPort,
    sshIdentityFile: p.sshIdentityFile,
    remoteCwd: p.remoteCwd
  });
}
function No(p) {
  ne.assertSafeWslDistro(p.distro);
  return Ji({
    kind: "wsl",
    distro: p.distro
  });
}
function Lo(p) {
  if (p.kind === "wsl") {
    return No(p);
  } else {
    return zi(p);
  }
}
function Ji(p) {
  const e = ne.controllerCacheKey(p);
  let r = Xt.get(e);
  if (!r) {
    r = new pr(p);
    Xt.set(e, r);
    Po();
  }
  return r;
}
let bi = false;
let hr = false;
function mi() {
  try {
    const p = Si.networkInterfaces();
    const e = [];
    for (const r of Object.keys(p).sort()) {
      const y = p[r];
      if (y) {
        for (const k of y) {
          if (!k.internal) {
            e.push(`${r}|${k.family}|${k.address}|${k.mac}`);
          }
        }
      }
    }
    hr = false;
    return e.join(";");
  } catch (p) {
    if (!hr) {
      ne.sshLogger.warn(`[remote] networkInterfaces() failed: ${p}`);
      hr = true;
    }
    return "";
  }
}
function Po() {
  if (bi) {
    return;
  }
  bi = true;
  const p = r => {
    ne.sshLogger.info(`[remote] ${r}; probing SSH controllers`);
    yi();
  };
  Yt.powerMonitor.on("resume", () => p("powerMonitor:resume"));
  Yt.powerMonitor.on("unlock-screen", () => p("powerMonitor:unlock-screen"));
  Yt.powerMonitor.on("user-did-become-active", () => p("powerMonitor:user-did-become-active"));
  let e = mi();
  setInterval(() => {
    const r = mi();
    if (r !== e) {
      ne.sshLogger.info("[remote] network-interface change detected; probing SSH controllers");
      e = r;
      yi();
    }
  }, 3000).unref();
}
function Oo(p) {
  const e = ne.controllerCacheKey(p);
  const r = Xt.get(e);
  if (r) {
    Xt.delete(e);
    ne.sshLogger.info(`[RemoteServerController] Evicting controller for ${e}`);
    r.terminate().catch(() => {});
  }
}
async function yi() {
  await Promise.all(Array.from(Xt.values(), async p => {
    p.abortStalePending();
    p.wake();
    if (p.isConnected()) {
      try {
        await p.ping(1500);
      } catch {
        p.recoverConnection("power_resume");
      }
    }
  }));
}
async function Uo() {
  const p = Array.from(Xt.values());
  Xt.clear();
  await Promise.all(p.map(e => e.detach().catch(() => {})));
}
ne._registerRemoteDetachHook(Uo);
exports.DEPLOY_NETWORK_CODES = Bi;
exports.SPAWN_FAILURE_MARKER = Vi;
exports.assertResolvedSshTargetAllowed = $i;
exports.deployInfoFromMessage = _n;
exports.evictRemoteServerController = Oo;
exports.getRemoteServerController = zi;
exports.getRemoteServerControllerForTarget = Lo;
exports.getSshHostAllowlist = Fi;
exports.isDeployError = wr;
exports.peekRemoteServerController = vo;
exports.readRemoteSettingsFiles = yo;
exports.resolveSSHBinary = Bn;
exports.resolveSSHConfigUncached = Gi;
exports.sshExec = pn;
//# sourceMappingURL=index.chunk-BCx6X-Yy.js.map