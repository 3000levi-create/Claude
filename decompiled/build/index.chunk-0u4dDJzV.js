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
      e._sentryDebugIds[t] = "ed82d330-307f-4b12-a936-3513fa639ce8";
      e._sentryDebugIdIdentifier = "sentry-dbid-ed82d330-307f-4b12-a936-3513fa639ce8";
    }
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
const r = require("./index.chunk-c42vKsva.js");
const ue = require("./index.chunk-B7OgxkJ-.js");
const y = require("node:path");
const _ = require("electron");
const S = require("node:fs/promises");
var U = (e => {
  e.Ready = "ready";
  e.Connected = "connected";
  e.Disconnected = "disconnected";
  return e;
})(U || {});
var D = (e => {
  e.Gif = "gif";
  e.Text = "text";
  return e;
})(D || {});
const x = new r.Store({
  name: "buddy-state",
  configFileMode: 384
});
let h = x.get("paired") ?? null;
let b = false;
let j = null;
let E = false;
let k = false;
let B = 0;
let g = null;
let O = null;
let P = null;
let R = null;
let K = null;
let f = null;
let W = null;
let N = null;
const fe = () => r.getAppPreference("hardwareBuddyEnabled");
function Y(e) {
  r.setAppPreference("hardwareBuddyEnabled", e !== null);
  h = e;
  if (e) {
    x.set("paired", e);
  } else {
    x.delete("paired");
  }
}
function J() {
  if (!fe() || g || k || b || !E) {
    return;
  }
  const e = Math.min(2 ** B * 2000, 60000);
  g = setTimeout(() => {
    g = null;
    if (!b && !!E) {
      B++;
      Z().then(t => {
        if (t) {
          B = 0;
        } else {
          J();
        }
      });
    }
  }, e);
}
function ge(e, t) {
  b = e === U.Connected;
  if (b) {
    B = 0;
    if (g) {
      clearTimeout(g);
      g = null;
    }
  } else {
    B = 0;
    J();
  }
  if (P != null) {
    P(e, t);
  }
}
function X() {
  return j ??= me();
}
async function me() {
  var s;
  try {
    await r.waitForMainViewReady();
  } catch (a) {
    r.logger.warn(`[buddy-ble] mainView not ready: ${a.message}`);
    j = null;
    return;
  }
  if ((s = r.mainView) == null || !s.webContents) {
    r.logger.warn("[buddy-ble] no mainView webContents");
    j = null;
    return;
  }
  r.logger.info("[buddy] starting bridge");
  const e = r.mainView.webContents;
  let t = 0;
  let n = null;
  let i = null;
  K = (a, o, l) => {
    a.preventDefault();
    const d = o.filter(c => {
      const w = (c.deviceName || "").toLowerCase();
      return w.startsWith("nibblet") || w.startsWith("claude");
    });
    if (f) {
      for (const c of d) {
        f.found.set(c.deviceId, c.deviceName || "");
      }
      f.cb = l;
      return;
    }
    if (!h) {
      l("");
      return;
    }
    t++;
    const u = d.find(c => c.deviceId === h.id);
    if (u) {
      r.logger.info(`[buddy-ble] picked ${u.deviceName} (${u.deviceId}) after ${t} round(s)`);
      t = 0;
      n = null;
      if (i) {
        clearTimeout(i);
        i = null;
      }
      l(u.deviceId);
      return;
    }
    n = l;
    if (t === 1) {
      r.logger.info(`[buddy-ble] scanning for ${h.name}…`);
      i = setTimeout(() => {
        i = null;
        if (n) {
          r.logger.warn(`[buddy-ble] scan timeout — saw ${d.length} stick(s), none matched`);
          const c = n;
          n = null;
          t = 0;
          c("");
        }
      }, 15000);
    }
  };
  e.on("select-bluetooth-device", K);
  e.session.setBluetoothPairingHandler((a, o) => {
    if (a.pairingKind !== "providePin") {
      o({
        confirmed: a.pairingKind === "confirm"
      });
      return;
    }
    if (!W || !h) {
      r.logger.warn("[buddy-ble] passkey requested with no prompt target");
      o({
        confirmed: false
      });
      return;
    }
    N = o;
    W(h.name ?? a.deviceId);
  });
  R = r.BuddyBleTransport.for(e).setImplementation({
    rx: a => O == null ? undefined : O(a),
    reportState: ge,
    log: a => {
      r.logger.debug(`[buddy-ble] ${a}`);
    }
  });
  E = true;
  J();
}
function C() {
  return b;
}
function I(e) {
  var t;
  if (!b || !R || (t = r.mainView) == null || !t.webContents || r.mainView.webContents.isDestroyed()) {
    return false;
  } else {
    R.dispatchTx(e);
    return true;
  }
}
function ye(e) {
  O = e;
}
function pe(e) {
  P = e;
}
function z(e) {
  W = e;
}
function H(e) {
  const t = N;
  N = null;
  if (t) {
    if (e) {
      t({
        confirmed: true,
        pin: e
      });
      return;
    }
    t({
      confirmed: false
    });
    te();
  }
}
async function Z() {
  var t;
  if (!E || k) {
    r.logger.info("[buddy-ble] pair: not installed or already in flight");
    return false;
  }
  if ((t = r.mainView) == null || !t.webContents || r.mainView.webContents.isDestroyed()) {
    r.logger.warn("[buddy-ble] no mainView, can't pair");
    return false;
  }
  k = true;
  r.logger.info("[buddy-ble] pair: invoking renderer");
  let e;
  try {
    const n = await Promise.race([r.mainView.webContents.executeJavaScript("window.buddyBle?.pair?.() ?? false", true), new Promise(i => {
      e = setTimeout(() => {
        if (N) {
          r.logger.info("[buddy-ble] pair: 20s elapsed, waiting on passkey");
          return;
        }
        r.logger.warn("[buddy-ble] pair: renderer hung past 20s");
        i(false);
      }, 20000);
    })]);
    r.logger.info(`[buddy-ble] pair: result=${!!n}`);
    return !!n;
  } catch (n) {
    r.logger.warn(`[buddy-ble] pair failed: ${n.message}`);
    return false;
  } finally {
    clearTimeout(e);
    k = false;
  }
}
function ee() {
  return h;
}
function te() {
  var e;
  if (b) {
    I(JSON.stringify({
      cmd: "unpair"
    }));
  }
  Y(null);
  B = 0;
  if (g) {
    clearTimeout(g);
    g = null;
  }
  r.logger.info("[buddy-ble] paired device forgotten");
  if (b) {
    if ((e = r.mainView) != null) {
      e.webContents.executeJavaScript("window.buddyBle?.disconnect?.()");
    }
  }
}
function A(e) {
  if (!f) {
    return;
  }
  clearTimeout(f.abandon);
  const t = f.cb;
  f = null;
  k = false;
  if (t != null) {
    t(e);
  }
  if (!e) {
    J();
  }
}
async function be() {
  var n;
  if (k || !E) {
    return [];
  }
  if (g) {
    clearTimeout(g);
    g = null;
  }
  k = true;
  f = {
    found: new Map(),
    cb: null,
    abandon: setTimeout(() => {
      r.logger.warn("[buddy-ble] picker abandoned");
      A("");
    }, 30000)
  };
  if ((n = r.mainView) != null) {
    n.webContents.executeJavaScript("window.buddyBle?.pair?.() ?? false", true).catch(i => {
      r.logger.warn(`[buddy-ble] scan pair() failed: ${i.message}`);
    });
  }
  const e = f;
  await r.sleep(5000);
  if (f !== e) {
    return [];
  }
  const t = [...e.found].map(([i, s]) => ({
    id: i,
    name: s
  }));
  if (t.length === 0) {
    A("");
  }
  return t;
}
function we(e) {
  if (!f) {
    return false;
  }
  const t = f.found.get(e);
  if (t === undefined) {
    return false;
  } else {
    Y({
      id: e,
      name: t
    });
    r.logger.info(`[buddy-ble] user picked ${t} (${e})`);
    A(e);
    return true;
  }
}
function ne() {
  A("");
}
const ie = 88;
const he = 8;
const T = new Map();
const re = new r.Store({
  name: "buddy-tokens",
  configFileMode: 384
});
let oe = 0;
let $ = {
  date: "",
  tokens: 0
};
function ae(e) {
  return `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
}
function ve() {
  const e = re.get("tokens-today", {
    date: "",
    tokens: 0
  });
  const t = ae(new Date());
  $ = e.date === t ? e : {
    date: t,
    tokens: 0
  };
}
function se() {
  const e = ae(new Date());
  if ($.date !== e) {
    $ = {
      date: e,
      tokens: 0
    };
  }
}
function ke(e) {
  se();
  $.tokens += e;
  try {
    re.set("tokens-today", $);
  } catch (t) {
    r.logger.debug("[buddy] tokens-today persist failed", {
      error: t
    });
  }
}
function Se(e) {
  var s;
  const t = e;
  if ((t == null ? undefined : t.type) !== "message" || !t.sessionId || !t.message) {
    return;
  }
  const n = t.message;
  if (n.type === "result" && typeof ((s = n.usage) == null ? undefined : s.output_tokens) == "number") {
    oe += n.usage.output_tokens;
    ke(n.usage.output_tokens);
  }
  const i = T.get(t.sessionId) ?? {
    msgs: [],
    at: 0
  };
  i.msgs.push(t.message);
  if (i.msgs.length > he) {
    i.msgs.shift();
  }
  i.at = Date.now();
  T.set(t.sessionId, i);
}
function Be(e) {
  const t = new Set(e.map(i => i.sessionId));
  for (const i of T.keys()) {
    if (!t.has(i)) {
      T.delete(i);
    }
  }
  const n = [...T.values()].sort((i, s) => s.at - i.at)[0];
  if (n) {
    return ue.formatTranscript(n.msgs).split(`
`).filter(Boolean).slice(-8).map(i => i.replace(/^\[\w+\]\s*/, "").replace(/\s+/g, " ").slice(0, ie));
  } else {
    return [];
  }
}
function $e(e) {
  var s;
  const t = e ?? {};
  const n = a => typeof a == "string" ? a : undefined;
  const i = a => a.split("/").slice(-2).join("/");
  return (n(t.command) ?? (n(t.file_path) && i(n(t.file_path))) ?? (n(t.path) && i(n(t.path))) ?? n(t.pattern) ?? ((s = n(t.url)) == null ? undefined : s.replace(/^https?:\/\//, "")) ?? n(t.query) ?? n(t.prompt) ?? Object.values(t).find(a => typeof a == "string" && a.length > 0) ?? "").replace(/\s+/g, " ").slice(0, 42);
}
async function Te(e) {
  var d;
  const n = (await Promise.all(e.map(u => Promise.resolve(u.getAllSessions())))).flat().filter(u => !u.isArchived);
  let i = 0;
  let s = 0;
  let a;
  for (const u of n) {
    if (u.isRunning) {
      i++;
    }
    const c = (d = u.pendingToolPermissions) == null ? undefined : d[0];
    if (!c || (s++, a)) {
      continue;
    }
    const w = c.toolName.replace(/^mcp__.+?__/, "").replace(/_/g, " ").slice(0, 18);
    a = {
      id: c.requestId,
      tool: w,
      hint: $e(c.input)
    };
  }
  se();
  const o = Be(n);
  const l = a && `approve: ${a.tool}` || o[o.length - 1] || i > 0 && `${i} running` || n.length > 0 && `${n.length} idle` || "ready";
  return JSON.stringify({
    total: n.length,
    running: i,
    waiting: s,
    msg: l.slice(0, ie),
    entries: o,
    tokens: oe,
    tokens_today: $.tokens,
    ...(a && {
      prompt: a
    })
  });
}
const Me = 1000;
const Ee = 10000;
const v = new Map();
let M = null;
let q = 0;
let F = false;
let L = false;
function Ie(e) {
  const t = e.trim();
  if (t.startsWith("{")) {
    try {
      const n = JSON.parse(t);
      if (n.ack) {
        const i = v.get(n.ack);
        if (i) {
          v.delete(n.ack);
          clearTimeout(i.timer);
          i.resolve({
            ack: n.ack,
            ok: !!n.ok,
            n: n.n ?? 0,
            data: n.data,
            error: n.error
          });
        }
      } else if (n.cmd) {
        if (M != null) {
          M(n);
        }
      }
    } catch {}
  }
}
function p(e, t, n = 5000) {
  return new Promise((i, s) => {
    if (!C()) {
      s(new Error("device: not connected"));
      return;
    }
    const a = v.get(t);
    if (a) {
      clearTimeout(a.timer);
      a.reject(new Error(`device: ${t} superseded`));
    }
    const o = {
      resolve: i,
      reject: s,
      timer: setTimeout(() => {
        if (v.get(t) === o) {
          v.delete(t);
        }
        s(new Error(`device: ${t} ack timeout`));
      }, n)
    };
    v.set(t, o);
    if (!I(e)) {
      v.delete(t);
      clearTimeout(o.timer);
      s(new Error("device: BLE write failed"));
    }
  });
}
async function _e() {
  try {
    const e = r.getAccountDetails();
    const t = (e == null ? undefined : e.fullName) ?? (e == null ? undefined : e.displayName) ?? null;
    const n = t == null ? undefined : t.split(/\s+/)[0];
    if (n) {
      await p(JSON.stringify({
        cmd: "owner",
        name: n.slice(0, 20)
      }), "owner", 3000);
    }
  } catch (e) {
    r.logger.debug(`[buddy] owner sync skipped: ${e.message}`);
  }
}
function De(e) {
  if (e === "connected") {
    q = 0;
    r.logger.info("[buddy] BLE connected");
    _e();
    I(JSON.stringify({
      time: [Math.floor(Date.now() / 1000), -new Date().getTimezoneOffset() * 60]
    }));
  } else if (e === "disconnected") {
    r.logger.info("[buddy] BLE disconnected");
  }
}
async function Oe() {
  try {
    const e = await p(JSON.stringify({
      cmd: "status"
    }), "status", 3000);
    q = 0;
    if (e.ok) {
      return e.data;
    } else {
      return null;
    }
  } catch {
    if (++q >= 3) {
      r.logger.warn("[buddy] 3 status timeouts");
    }
    return null;
  }
}
function Pe() {
  F = true;
}
function Ne() {
  F = false;
}
function Ce() {
  return {
    connected: C(),
    error: null,
    paired: ee()
  };
}
function Ae(e) {
  if (L) {
    return () => {};
  }
  L = true;
  ve();
  ye(Ie);
  pe(De);
  let t = 0;
  const n = async () => {
    if (!F && !!C()) {
      t = Date.now();
      I(await Te(e));
    }
  };
  M = o => {
    if (o.cmd === "permission" && o.id && (o.decision === "once" || o.decision === "deny")) {
      for (const l of e) {
        l.respondToToolPermission(o.id, o.decision);
      }
      r.notificationService.closeAskUserQuestionNotification(o.id);
      r.logger.info(`[buddy] permission ${o.decision}: ${o.id}`);
      n();
    }
  };
  let i = null;
  const s = o => {
    var u;
    Se(o);
    if (F || !C()) {
      return;
    }
    const l = o;
    const d = l.type === "message" ? l.message : undefined;
    if ((d == null ? undefined : d.type) === "user" || (d == null ? undefined : d.type) === "assistant") {
      const c = JSON.stringify({
        evt: "turn",
        role: d.type,
        content: (u = d.message) == null ? undefined : u.content
      });
      if (Buffer.byteLength(c, "utf8") <= 4096) {
        I(c);
      }
    }
    i ||= setTimeout(() => {
      i = null;
      n();
    }, 100);
  };
  for (const o of e) {
    o.on("event", s);
  }
  const a = setInterval(() => {
    if (Date.now() - t >= Ee) {
      n();
    }
  }, Me);
  n();
  r.logger.info("[buddy] bridge started");
  return () => {
    clearInterval(a);
    if (i) {
      clearTimeout(i);
    }
    for (const o of e) {
      o.off("event", s);
    }
    M = null;
    L = false;
  };
}
const G = 1800000;
async function le(e) {
  const n = (await S.readdir(e, {
    withFileTypes: true
  })).filter(o => o.isFile() && !o.name.startsWith(".")).map(o => o.name);
  if (n.length === 0) {
    throw new Error("Folder is empty");
  }
  const i = await Promise.all(n.map(async o => ({
    name: o,
    size: (await S.stat(y.join(e, o))).size
  })));
  const s = i.reduce((o, l) => o + l.size, 0);
  if (s > G) {
    throw new Error(`Folder is ${Math.round(s / 1024)}KB; device limit is ${Math.round(G / 1024)}KB`);
  }
  let a = y.basename(e);
  if (n.includes("manifest.json")) {
    try {
      const o = JSON.parse(await S.readFile(y.join(e, "manifest.json"), "utf8"));
      if (typeof o.name == "string" && o.name) {
        a = o.name;
      }
    } catch {}
  }
  return {
    dir: e,
    name: a,
    totalBytes: s,
    files: i
  };
}
const Q = 256;
async function Fe(e, t) {
  const n = await le(e);
  r.logger.info(`[buddy] uploading ${n.name}: ${n.totalBytes} bytes`);
  Pe();
  try {
    await Je(n, t);
  } finally {
    Ne();
  }
  return {
    name: n.name,
    bytes: n.totalBytes
  };
}
async function Je(e, t) {
  let n = false;
  let i = "";
  for (let o = 0; o < 8; o++) {
    try {
      const l = await p(JSON.stringify({
        cmd: "char_begin",
        name: e.name,
        total: e.totalBytes
      }), "char_begin", 2000);
      if (l.ok) {
        n = true;
        break;
      }
      if (l.error) {
        i = l.error;
        break;
      }
    } catch {}
    await r.sleep(1000);
  }
  if (!n) {
    throw new Error(i || "Stick did not respond to char_begin");
  }
  let s = 0;
  for (const o of e.files) {
    const l = await S.readFile(y.join(e.dir, o.name));
    if (!(await p(JSON.stringify({
      cmd: "file",
      path: o.name,
      size: l.length
    }), "file")).ok) {
      throw new Error(`Stick failed to open ${o.name}`);
    }
    for (let c = 0; c < l.length; c += Q) {
      const w = l.subarray(c, Math.min(c + Q, l.length));
      if (!(await p(JSON.stringify({
        cmd: "chunk",
        d: w.toString("base64")
      }), "chunk", 3000)).ok) {
        throw new Error(`chunk failed at ${o.name}+${c}`);
      }
      s += w.length;
      t({
        file: o.name,
        bytesDone: s,
        bytesTotal: e.totalBytes
      });
    }
    const u = await p(JSON.stringify({
      cmd: "file_end"
    }), "file_end", 10000);
    if (!u.ok || u.n !== l.length) {
      throw new Error(`${o.name}: wrote ${u.n} of ${l.length}`);
    }
  }
  if (!(await p(JSON.stringify({
    cmd: "char_end"
  }), "char_end", 10000)).ok) {
    throw new Error("char_end failed — character did not reload");
  }
  r.logger.info(`[buddy] ${e.name} installed`);
}
let V = false;
function Le(e) {
  const t = i => !e.isDestroyed() && n.dispatchProgress(i);
  z(i => {
    if (!e.isDestroyed()) {
      n.dispatchPairingPrompt(i);
    }
  });
  e.once("destroyed", () => {
    z(null);
    H(null);
  });
  const n = r.Buddy.for(e).setImplementation({
    status: Ce,
    deviceStatus: Oe,
    pairDevice: Z,
    scanDevices: be,
    pickDevice: we,
    cancelScan: ne,
    submitPin: H,
    forgetDevice: te,
    setName: i => p(JSON.stringify({
      cmd: "name",
      name: i.slice(0, 20)
    }), "name", 3000).then(s => s.ok).catch(() => false),
    pickFolder: () => _.dialog.showOpenDialog({
      title: r.getIntl().formatMessage({
        defaultMessage: "Choose Data Folder",
        id: "4duD3GQOwb"
      }),
      message: r.getIntl().formatMessage({
        defaultMessage: "Pick a folder to send to your device",
        id: "FgIKEp52um"
      }),
      properties: ["openDirectory"]
    }).then(i => i.canceled ? null : i.filePaths[0] ?? null),
    async preview(i) {
      var s;
      var a;
      try {
        const o = JSON.parse(await S.readFile(y.join(i, "manifest.json"), "utf8"));
        const l = o.states && (o.states.idle ?? Object.values(o.states)[0]);
        if (l && o.mode === "text") {
          const d = l;
          if ((s = d.frames) != null && s.length) {
            return {
              kind: D.Text,
              frames: d.frames,
              delay: d.delay ?? 200,
              color: ((a = o.colors) == null ? undefined : a.body) ?? "#C05630"
            };
          }
        } else if (l) {
          const d = Array.isArray(l) ? l[0] : l;
          if (d === y.basename(d)) {
            const u = await S.readFile(y.join(i, d));
            return {
              kind: D.Gif,
              dataUrl: "data:image/gif;base64," + u.toString("base64")
            };
          }
        }
      } catch {}
      try {
        const o = await le(i);
        const l = Math.round(o.totalBytes / 1024);
        const d = o.files.length === 1 ? "file" : "files";
        return {
          kind: D.Text,
          frames: [`${o.files.length} ${d}
${l} KB`],
          delay: 0,
          color: "#888"
        };
      } catch {
        return null;
      }
    },
    async install(i) {
      if (V) {
        throw new Error("install already in progress");
      }
      V = true;
      try {
        const s = await Fe(i, a => t(`uploading ${a.file} — ${Math.round(a.bytesDone / a.bytesTotal * 100)}% (${Math.round(a.bytesDone / 1024)}KB)`));
        t(`✓ sent ${s.name} (${Math.round(s.bytes / 1024)}KB)`);
      } catch (s) {
        r.logger.error("[buddy] install failed", s);
        t(`✗ ${s.message}`);
        throw s;
      } finally {
        V = false;
      }
    }
  });
}
let m = null;
function Ve() {
  X();
  if (m && !m.isDestroyed()) {
    m.focus();
    return;
  }
  m = new _.BrowserWindow({
    width: 700,
    height: 460,
    resizable: false,
    minimizable: true,
    maximizable: false,
    title: r.getIntl().formatMessage({
      defaultMessage: "Hardware Buddy & Maker Devices",
      id: "2x2ParVoQo"
    }),
    parent: r.mainWindow ?? undefined,
    titleBarStyle: "hiddenInset",
    trafficLightPosition: r.DEFAULT_WINDOW_CONTROLS_POSITION,
    backgroundColor: "#F4F3EE",
    webPreferences: {
      preload: y.join(_.app.getAppPath(), ".vite/build/buddy.js"),
      additionalArguments: [`--desktop-enterprise-config=${JSON.stringify(r.getManagedRendererConfig())}`]
    }
  });
  Le(m.webContents);
  r.setupIntlHandlers(m.webContents);
  m.webContents.setWindowOpenHandler(({
    url: e
  }) => {
    r.safeOpenExternal(e);
    return {
      action: "deny"
    };
  });
  m.loadFile(y.join(_.app.getAppPath(), ".vite/renderer/buddy_window/buddy.html"));
  m.on("closed", () => {
    m = null;
    ne();
  });
}
const de = "2358734848";
const ce = () => r.getManagedConfig().workspace.hardwareBuddyEnabled !== false;
const xe = () => ce() && r.isFeatureEnabled(de);
function je() {
  if (!ce()) {
    return;
  }
  try {
    const n = ee() ? 1 : 0;
    r.waitForAccountId().then(i => {
      if (i) {
        r.logEvent("desktop_hardware_buddy_status", {
          paired_device_count: n
        });
      }
    }).catch(i => r.logger.error("[buddy] status telemetry failed", i));
  } catch (n) {
    r.logger.error("[buddy] status telemetry failed", n);
  }
  let e = false;
  const t = () => {
    if (!e) {
      e = true;
      X().then(async () => {
        Ae([await r.getLocalAgentModeSessionManager(), await r.getClaudeCodeSessionManager(), r.buddyRemoteFeed]);
      }).catch(n => r.logger.error("[buddy] init failed", n));
    }
  };
  r.onFeatureChange(de, n => {
    if (n != null && n.on) {
      t();
    }
  });
}
function Re() {
  if (xe()) {
    return {
      label: r.getIntl().formatMessage({
        defaultMessage: "Open Hardware Buddy…",
        id: "YgfdkMAdfQ",
        description: "Developer menu item that opens the Hardware Buddy window"
      }),
      click: () => {
        try {
          Ve();
        } catch (e) {
          r.logger.error("[buddy] failed to open", e);
        }
      }
    };
  } else {
    return null;
  }
}
exports.getBuddyMenuItem = Re;
exports.initBuddy = je;
//# sourceMappingURL=index.chunk-0u4dDJzV.js.map