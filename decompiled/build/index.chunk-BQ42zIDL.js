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
      e._sentryDebugIds[t] = "f7311df5-8d70-42c1-b8f4-61b2edbce2bf";
      e._sentryDebugIdIdentifier = "sentry-dbid-f7311df5-8d70-42c1-b8f4-61b2edbce2bf";
    }
  })();
} catch {}
const K = require("node:child_process");
const D = require("electron");
const r = require("./index.chunk-c42vKsva.js");
require("node:fs");
const m = require("node:path");
const A = require("node:fs/promises");
const O = require("node:os");
require("node:url");
require("node:path/posix");
require("node:path/win32");
var C = (e => {
  e.Connected = "connected";
  e.Working = "working";
  e.Editing = "editing";
  e.Disconnected = "disconnected";
  return e;
})(C || {});
var p = (e => {
  e.Excel = "excel";
  e.PowerPoint = "powerpoint";
  e.Word = "word";
  return e;
})(p || {});
const z = "claude-haiku-4-5-20251001";
const J = 1024;
const U = 10000;
function Y() {
  const e = r.getFeatureValue("1748356779", {});
  if (!e.system_prompt || !e.user_prompt_template) {
    return null;
  } else {
    return {
      systemPrompt: e.system_prompt,
      toolDescription: e.tool_description || "",
      summaryDescription: e.summary_description || "",
      entitiesDescription: e.entities_description || "",
      nextActionDescription: e.next_action_description || "",
      userPromptTemplate: e.user_prompt_template
    };
  }
}
function Q(e) {
  return {
    name: "summarize_conversation",
    description: e.toolDescription,
    input_schema: {
      type: "object",
      properties: {
        summary: {
          type: "string",
          description: e.summaryDescription
        },
        entities: {
          type: "array",
          items: {
            type: "string"
          },
          description: e.entitiesDescription
        },
        next_action: {
          type: "string",
          description: e.nextActionDescription
        }
      },
      required: ["summary"]
    }
  };
}
let k = 0;
async function Z(e, t) {
  try {
    let n;
    try {
      n = JSON.parse(e);
    } catch (c) {
      r.logger.warn("[compactionService] Failed to parse messages JSON", {
        error: c instanceof Error ? c.message : String(c)
      });
      return null;
    }
    if (!n || n.length < 2) {
      return null;
    }
    const o = r.DESKTOP_OAUTH_CONFIGS[r.getOAuthEnvironment()];
    const i = await r.getApiToken(o);
    if (!i) {
      r.logger.warn("[compactionService] Cannot compact - no API token available");
      return null;
    }
    const s = Y();
    if (!s) {
      return null;
    }
    const a = ee(n);
    const P = Q(s);
    const h = new r.Anthropic({
      authToken: i,
      baseURL: o.apiHost,
      maxRetries: 2,
      defaultHeaders: {
        "anthropic-beta": "oauth-2025-04-20"
      }
    });
    const y = new AbortController();
    const E = setTimeout(() => y.abort(), U);
    try {
      const c = await h.messages.create({
        model: z,
        max_tokens: J,
        system: s.systemPrompt,
        tools: [P],
        tool_choice: {
          type: "tool",
          name: "summarize_conversation"
        },
        messages: [{
          role: "user",
          content: `${s.userPromptTemplate}

${a}`
        }]
      }, {
        signal: y.signal
      });
      clearTimeout(E);
      const d = c.content.find(b => b.type === "tool_use");
      if (!d || d.type !== "tool_use") {
        r.logger.warn("[compactionService] No tool_use block in response");
        return null;
      }
      const f = d.input;
      if (!f.summary) {
        r.logger.warn("[compactionService] No summary in tool input");
        return null;
      }
      k++;
      const M = Date.now();
      const g = 150;
      const B = n.slice(-10).map(b => ({
        role: b.role,
        content: b.content.length > g ? b.content.slice(0, g) + "..." : b.content
      }));
      return {
        timestamp: M,
        summary: f.summary,
        entities: f.entities,
        nextAction: f.next_action,
        conversationId: t,
        sequence: k,
        messages: B
      };
    } catch (c) {
      clearTimeout(E);
      if (c instanceof Error && c.name === "AbortError") {
        r.logger.warn("[compactionService] Haiku API call timed out", {
          timeout: U
        });
      } else {
        const d = {
          message: c instanceof Error ? c.message : String(c),
          name: c instanceof Error ? c.name : undefined
        };
        if (c && typeof c == "object") {
          const f = c;
          if (f.status) {
            d.status = f.status;
          }
          if (f.error) {
            d.error = f.error;
          }
          if (f.headers) {
            d.headers = f.headers;
          }
        }
        r.logger.error("[compactionService] Haiku API error", d);
      }
      return null;
    }
  } catch (n) {
    r.logger.error("[compactionService] Compaction failed", {
      error: n instanceof Error ? n.message : String(n)
    });
    return null;
  }
}
function ee(e) {
  return e.map((n, o) => {
    const i = n.role === "user" ? "User" : "Claude";
    let s = n.content;
    if (s.length > 1000) {
      s = s.slice(0, 1000) + "...";
    }
    return `[${o + 1}] ${i}: ${s}`;
  }).join(`

`);
}
function te() {
  k = 0;
}
function N(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, "\\\"");
}
function ne(e) {
  switch (e) {
    case "Microsoft Excel":
      return "EXCEL.EXE";
    case "Microsoft Word":
      return "WINWORD.EXE";
    case "Microsoft PowerPoint":
      return "POWERPNT.EXE";
    default:
      throw new Error(`Unknown Office app: ${e}`);
  }
}
const Le = process.env.OFFICE_ADDIN_DEV_MANIFEST_PATH || m.join(O.homedir(), "code/office-agent/public/manifest-dev.xml");
const oe = [".xlsx", ".docx", ".pptx"];
function X(e) {
  return oe.includes(e);
}
const ie = "29673e3c-d826-4f00-92ee-162334a52b1a";
const $ = "https://pivot.claude.ai/manifest.xml";
function re(e) {
  switch (e) {
    case ".xlsx":
      return "Microsoft Excel";
    case ".docx":
      return "Microsoft Word";
    case ".pptx":
      return "Microsoft PowerPoint";
    default:
      throw new Error(`Unknown Office extension: ${e}`);
  }
}
function se(e) {
  if (process.platform === "win32") {
    return m.join(process.env.LOCALAPPDATA || m.join(O.homedir(), "AppData", "Local"), "Microsoft", "Office", "16.0", "WEF");
  }
  if (process.platform !== "darwin") {
    return "";
  }
  const t = e === "Microsoft Excel" ? "com.microsoft.Excel" : e === "Microsoft Word" ? "com.microsoft.Word" : "com.microsoft.Powerpoint";
  return m.join(O.homedir(), "Library/Containers", t, "Data/Documents/wef");
}
const L = "a1b2c3d4-e5f6-7890-abcd-ef1234567890";
function ae(e) {
  var o;
  if (process.platform !== "win32") {
    return;
  }
  const t = r.maybeGetClaudeNative();
  if (!t) {
    r.logger.warn("[OfficeFileOperations] claude-native not available, cannot register WEF trusted catalog");
    return;
  }
  const n = `Software\\Microsoft\\Office\\16.0\\WEF\\TrustedCatalogs\\{${L}}`;
  try {
    if (((o = t.readRegistryValues([{
      hive: "HKCU",
      keyPath: n,
      valueName: "Url"
    }])[0]) == null ? undefined : o.value) === e) {
      return;
    }
    t.writeRegistryValue("HKCU", n, "Id", `{${L}}`);
    t.writeRegistryValue("HKCU", n, "Url", e);
    t.writeRegistryDword("HKCU", n, "Flags", 1);
    r.logger.info(`[OfficeFileOperations] Registered WEF folder as trusted catalog: ${e}`);
  } catch (i) {
    r.logger.warn("[OfficeFileOperations] Failed to register WEF trusted catalog", {
      error: i
    });
  }
}
const Re = process.env.OFFICE_ADDIN_DEV_ID || "e3e0c7c8-b8c7-4c7f-9c2f-8a9b5d6e4f3a";
async function ce(e) {
  let t;
  if (process.platform !== "win32") {
    if (process.platform === "darwin") {
      const n = e === "Microsoft Excel" ? "com.microsoft.Excel" : e === "Microsoft Word" ? "com.microsoft.Word" : "com.microsoft.Powerpoint";
      const o = m.join(O.homedir(), "Library/Containers", n);
      t = [m.join(o, "Data/Library/Caches/Microsoft/Office/16.0/Wef"), m.join(o, "Data/Library/Application Support/Microsoft/Office/16.0/Wef")];
    } else {
      return;
    }
    for (const n of t) {
      try {
        await A.rm(n, {
          recursive: true,
          force: true
        });
      } catch {}
    }
  }
}
function de() {
  return m.join(D.app.getPath("userData"), "office-addin", "manifest.xml");
}
async function le(e) {
  const t = se(e);
  const n = `${ie}.manifest.xml`;
  const o = m.join(t, n);
  ae(t);
  try {
    await A.stat(o);
    return;
  } catch {}
  const i = de();
  let s;
  try {
    const a = await D.net.fetch($);
    if (!a.ok) {
      throw new Error(`HTTP ${a.status}`);
    }
    s = await a.text();
    await r.mkdirPrivate(m.dirname(i));
    await r.writeFilePrivate(i, s);
  } catch (a) {
    r.logger.warn("[OfficeFileOperations] Failed to fetch prod manifest from remote, trying cache", {
      error: a
    });
    try {
      s = await A.readFile(i, "utf-8");
    } catch {
      throw new Error(`Failed to fetch prod manifest from ${$} and no cached version available`);
    }
  }
  await A.mkdir(t, {
    recursive: true
  });
  await ce(e);
  await A.writeFile(o, s, "utf-8");
}
async function fe(e) {
  const t = m.extname(e).toLowerCase();
  if (!X(t) || !r.getAppPreference("louderPenguinEnabled")) {
    return;
  }
  const n = re(t);
  const o = false;
  try {
    if (!o) {
      await le(n);
    }
    if (process.platform === "darwin") {
      const i = async () => {
        await pe(n, "Open Claude", "Claude", s);
      };
      const s = await ue(n);
      const a = s ? 500 : 1000;
      const P = s ? 1000 : 3000;
      let h;
      const y = setTimeout(() => {
        i().catch(() => {
          h = setTimeout(() => {
            i().catch(() => {});
          }, P);
        });
      }, a);
      D.app.once("before-quit", () => {
        clearTimeout(y);
        if (h) {
          clearTimeout(h);
        }
      });
    }
  } catch {}
}
async function ue(e) {
  if (process.platform === "win32") {
    const t = r.maybeGetClaudeNative();
    if (t != null && t.isProcessRunning) {
      const n = ne(e);
      return t.isProcessRunning(n);
    }
    return false;
  }
  if (process.platform !== "darwin") {
    return false;
  }
  try {
    return (await r.spawnAsyncDirect("pgrep", ["-x", e], {
      ignoreExitCode: true
    })).code === 0;
  } catch {
    return false;
  }
}
async function pe(e, t, n, o = false) {
  if (process.platform !== "darwin") {
    return;
  }
  const i = N(e);
  const s = N(t);
  const a = N(n);
  const y = `${o ? "" : `
tell application "${i}"
    activate
end tell
`}
tell application "System Events"
    tell process "${i}"
${o ? "" : "        delay 0.5"}
        set allElems to entire contents of window 1

        -- First pass: look for the add-in button directly in the ribbon
        repeat with elem in allElems
            try
                set elemName to name of elem
                if elemName contains "${s}" then
                    click elem
                    return "clicked: " & elemName
                end if
            end try
        end repeat

        -- Second pass: broader name match (e.g. "Claude")
        repeat with elem in allElems
            try
                set elemName to name of elem
                if elemName contains "${a}" then
                    click elem
                    return "clicked fallback: " & elemName
                end if
            end try
        end repeat

        -- Third pass: click the Add-ins button, then click the first add-in
        -- by coordinate offset (the dropdown is not accessible via Accessibility API)
        repeat with elem in allElems
            try
                set elemName to name of elem
                if elemName contains "Add" and elemName contains "ins" then
                    set btnPos to position of elem
                    set btnSize to size of elem
                    set btnCenterX to (item 1 of btnPos) + ((item 1 of btnSize) / 2)
                    set btnBottomY to (item 2 of btnPos) + (item 2 of btnSize)
                    click at {btnCenterX, (item 2 of btnPos) + ((item 2 of btnSize) / 2)}
                    delay 0.7
                    -- "My Add-ins" first icon is ~140px below the button bottom edge
                    click at {btnCenterX, btnBottomY + 140}
                    return "clicked via Add-ins dropdown"
                end if
            end try
        end repeat

        error "no button found"
    end tell
end tell
  `;
  return new Promise((E, c) => {
    const d = K.spawn("osascript", ["-e", y]);
    let f = "";
    let M = "";
    d.stdout.on("data", g => {
      M += g.toString();
    });
    d.stderr.on("data", g => {
      f += g.toString();
    });
    d.on("close", g => {
      if (g !== 0) {
        c(new Error(`AppleScript failed: ${f.trim()}`));
      } else {
        E();
      }
    });
    d.on("error", g => {
      c(g);
    });
    setTimeout(() => {
      if (!d.killed) {
        d.kill();
        c(new Error("AppleScript timed out"));
      }
    }, 10000);
  });
}
function me(e) {
  switch (e) {
    case p.Excel:
      return "Microsoft Excel";
    case p.PowerPoint:
      return "Microsoft PowerPoint";
    case p.Word:
      return "Microsoft Word";
    default:
      return "Microsoft Excel";
  }
}
async function ge(e, t) {
  return we(e, t);
}
async function we(e, t) {
  const n = r.maybeGetClaudeNative();
  if (n == null || !n.focusOfficeDocument) {
    r.logger.warn("[office-addin-ipc] focusOfficeDocument not available in claude-native");
    return false;
  }
  let o;
  switch (e) {
    case p.Excel:
      o = "excel";
      break;
    case p.Word:
      o = "word";
      break;
    case p.PowerPoint:
      o = "powerpoint";
      break;
    default:
      return false;
  }
  try {
    return n.focusOfficeDocument(o, t);
  } catch (i) {
    r.logger.error("[office-addin-ipc] Native COM focus failed", {
      app: me(e),
      document: t,
      error: i instanceof Error ? i.message : String(i)
    });
    return false;
  }
}
const u = new Map();
const w = new Map();
let l;
let j = 0;
let R = null;
let W = false;
const he = 2000;
function ye(e) {
  return !!I() && !e.isStreaming && !W && !(Date.now() - j < he) && !!e.messagesForCompaction;
}
async function be(e) {
  if (!ye(e) || !Me()) {
    return;
  }
  W = true;
  const t = e.conversationId || "unknown";
  try {
    const n = await Z(e.messagesForCompaction, t);
    if (n) {
      j = Date.now();
      const o = ve();
      if (o.length > 0) {
        n.toolInvocations = o;
      }
      ke(n);
    }
  } catch (n) {
    r.logger.error("[office-addin-ipc] Compaction failed", {
      error: n instanceof Error ? n.message : String(n)
    });
  } finally {
    W = false;
  }
}
function H(e) {
  switch (e) {
    case "excel":
      return p.Excel;
    case "powerpoint":
      return p.PowerPoint;
    case "word":
      return p.Word;
    default:
      return p.Excel;
  }
}
function T() {
  return Array.from(u.values());
}
function F() {
  for (const e of u.values()) {
    const t = w.get(e.app);
    e.isSelected = e.id === t;
  }
}
function G() {
  F();
  const e = T();
  const t = I();
  let n;
  for (const o of e) {
    if (o.isSelected) {
      n = o.id;
      break;
    }
  }
  return {
    files: e,
    selectedFileId: n,
    isFeatureEnabled: t
  };
}
function _() {
  if (l) {
    const e = G();
    try {
      l.updateConnectedFilesStateStore(e);
    } catch (t) {
      r.logger.error("[office-addin-ipc] updateConnectedFilesStateStore failed", {
        error: t instanceof Error ? t.message : String(t)
      });
    }
  }
}
function Ee(e) {
  const t = Date.now();
  const n = H(e.app);
  if (e.type === "connected" && e.addinId) {
    const o = e.addinId;
    const i = u.get(o);
    if (i) {
      i.status = C.Connected;
      i.document = e.document || i.document;
      i.deviceId = e.deviceId;
      i.platform = e.platform;
      i.lastActivityAt = t;
      if (l) {
        l.dispatchOnFileStateChanged(i);
      }
    } else {
      const s = !w.has(n);
      const a = {
        id: o,
        addinId: e.addinId,
        app: n,
        document: e.document || "Unknown",
        documentPath: e.documentPath,
        deviceId: e.deviceId,
        platform: e.platform,
        browser: e.browser,
        status: C.Connected,
        isSelected: s,
        lastConnectedAt: t,
        lastActivityAt: t
      };
      u.set(o, a);
      if (s) {
        w.set(n, o);
      }
      if (l) {
        l.dispatchOnFileAdded(a);
      }
    }
    _();
  } else if (e.type === "disconnected" && e.addinId) {
    const o = e.addinId;
    const i = u.get(o);
    if (i) {
      i.status = C.Disconnected;
      i.lastActivityAt = t;
      if (w.get(i.app) === o) {
        const s = Array.from(u.values()).find(a => a.app === i.app && a.id !== o && a.status !== C.Disconnected);
        if (s) {
          w.set(i.app, s.id);
        } else {
          w.delete(i.app);
        }
      }
      if (l) {
        l.dispatchOnFileStateChanged(i);
      }
    }
    _();
  } else if (e.type === "status_change" && e.addinId && e.status) {
    const o = e.addinId;
    const i = u.get(o);
    if (i) {
      i.status = e.status;
      i.lastActivityAt = t;
      if (l) {
        l.dispatchOnFileStateChanged(i);
      }
      _();
    }
  } else if (e.type === "context_update" && e.addinId) {
    const o = e.addinId;
    const i = u.get(o);
    if (i) {
      i.lastActivityAt = t;
    }
  } else if (e.type === "selection_change" && e.selectedAddinId) {
    const o = H(e.app);
    w.set(o, e.selectedAddinId);
    F();
    for (const i of u.values()) {
      if (i.app === o && l) {
        l.dispatchOnFileStateChanged(i);
      }
    }
    _();
  }
}
function Ae() {
  return {
    getConnectedFiles(e) {
      F();
      return T();
    },
    isFeatureEnabled() {
      return I();
    },
    async focusFile(e) {
      const t = u.get(e);
      if (!t) {
        r.logger.warn("[office-addin-ipc] Cannot focus file: not found", {
          fileId: e
        });
        return false;
      }
      if (t.platform === "OfficeOnline") {
        t.browser;
        return false;
      }
      if (await ge(t.app, t.document)) {
        const i = t.app;
        Oe(i, t.addinId);
        return true;
      }
      if (t.documentPath) {
        try {
          await D.shell.openPath(t.documentPath);
          return true;
        } catch (o) {
          r.logger.error("[office-addin-ipc] Failed to focus file via openPath", {
            fileId: e,
            error: o
          });
        }
      }
      return false;
    },
    async selectFile(e) {
      const t = u.get(e);
      if (!t) {
        r.logger.warn("[office-addin-ipc] Cannot select file: not found", {
          fileId: e
        });
        return false;
      }
      const n = t.app;
      const o = await Pe(n, t.addinId);
      if (o) {
        w.set(t.app, e);
        F();
        for (const i of u.values()) {
          if (i.app === t.app && l) {
            l.dispatchOnFileStateChanged(i);
          }
        }
        _();
      }
      return o;
    },
    getInitialConnectedFilesStateState() {
      return G();
    },
    updateActiveConversationSummary(e) {
      if (e) {
        if (e.conversationId !== R) {
          R = e.conversationId || null;
          te();
        }
        be(e);
      }
      if (e && I()) {
        Ne(e);
      }
    }
  };
}
function Ce(e) {
  l = e;
}
function _e() {
  Fe(Ee);
}
function I() {
  return r.getAppPreference("louderPenguinEnabled") === true && r.getAppPreference("quietPenguinEnabled") !== true;
}
const Ie = Object.freeze(Object.defineProperty({
  __proto__: null,
  createOfficeAddinFilesApi: Ae,
  getAllConnectedFiles: T,
  initOfficeAddinBridgeListener: _e,
  isLouderPenguinEnabled: I,
  setOfficeAddinDispatcher: Ce
}, Symbol.toStringTag, {
  value: "Module"
}));
const S = new Map();
const x = new Map();
const V = new Map();
const q = [];
const Se = new Map();
async function Pe(e, t) {
  const n = S.get(e);
  if (!n) {
    r.logger.warn("[office-addin-bridge] Cannot select add-in: not connected", {
      app: e,
      addinId: t
    });
    return false;
  }
  const o = x.get(e) || [];
  const i = o.find(s => s.addinId === t);
  if (i) {
    r.logger.info("[office-addin-bridge] Selecting add-in", {
      app: e,
      addinId: t,
      document: i.document
    });
    V.set(e, {
      addinId: i.addinId,
      document: i.document,
      deviceId: i.deviceId
    });
    n.ws.send(JSON.stringify({
      type: "select_addin",
      addinId: i.addinId,
      document: i.document,
      deviceId: i.deviceId
    }));
    Te(e, t);
    return true;
  } else {
    r.logger.warn("[office-addin-bridge] Cannot select add-in: not found", {
      app: e,
      addinId: t,
      available: o.map(s => s.addinId)
    });
    return false;
  }
}
function ve() {
  const e = [...q];
  q.length = 0;
  Se.clear();
  return e;
}
function Oe(e, t) {
  var s;
  const n = S.get(e);
  if (!n) {
    r.logger.warn("[office-addin-bridge] Cannot send focus_addin_input: no connection", {
      app: e
    });
    return;
  }
  if (!n.isPaired) {
    r.logger.warn("[office-addin-bridge] Cannot send focus_addin_input: not paired", {
      app: e,
      isPaired: n.isPaired
    });
    return;
  }
  const o = t ? (s = x.get(e)) == null ? undefined : s.find(a => a.addinId === t) : V.get(e);
  const i = {
    type: "focus_addin_input",
    ...((o == null ? undefined : o.addinId) && {
      target_addin: o.addinId
    }),
    ...((o == null ? undefined : o.document) && {
      target_document: o.document
    }),
    ...((o == null ? undefined : o.deviceId) && {
      target_device: o.deviceId
    })
  };
  n.ws.send(JSON.stringify(i));
}
const v = [];
function Fe(e) {
  v.push(e);
  return () => {
    const t = v.indexOf(e);
    if (t >= 0) {
      v.splice(t, 1);
    }
  };
}
function De(e) {
  for (const t of v) {
    try {
      t(e);
    } catch (n) {
      r.logger.error("[office-addin-bridge] Error in connection state listener", {
        error: n
      });
    }
  }
}
function Te(e, t) {
  De({
    type: "selection_change",
    app: e,
    selectedAddinId: t
  });
}
const xe = new Map();
function Me() {
  for (const e of S.values()) {
    if (e.isPaired && e.isReady) {
      return true;
    }
  }
  return false;
}
function Ne(e) {
  for (const [t, n] of S) {
    if (n.isPaired && n.isReady && n.ws) {
      const o = x.get(t) || [];
      const i = {
        type: "desktop_context_push",
        id: crypto.randomUUID(),
        context: {
          summary: e.summary,
          taskTitle: e.taskTitle,
          conversationId: e.conversationId,
          timestamp: Date.now(),
          isStreaming: e.isStreaming
        },
        trigger: "conversation_changed"
      };
      if (o.length === 0) {
        n.ws.send(JSON.stringify(i));
        continue;
      }
      for (const s of o) {
        const a = {
          ...i,
          id: crypto.randomUUID(),
          target_addin: s.addinId
        };
        n.ws.send(JSON.stringify(a));
      }
    }
  }
}
function ke(e) {
  for (const [t, n] of S) {
    if (n.isPaired && n.isReady && n.ws) {
      const o = x.get(t) || [];
      if (o.length === 0) {
        const i = {
          type: "compacted_context_push",
          id: crypto.randomUUID(),
          update: e
        };
        n.ws.send(JSON.stringify(i));
        continue;
      }
      for (const i of o) {
        const s = {
          type: "compacted_context_push",
          id: crypto.randomUUID(),
          update: e,
          target_addin: i.addinId
        };
        n.ws.send(JSON.stringify(s));
      }
    }
  }
}
function We() {
  return xe;
}
exports.getAllAddinActiveContext = We;
exports.getAllConnectedFiles = T;
exports.ipcHandlers = Ie;
exports.isOfficeExtension = X;
exports.sideloadForOpenFile = fe;
//# sourceMappingURL=index.chunk-BQ42zIDL.js.map