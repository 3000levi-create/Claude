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
    var l = new u.Error().stack;
    if (l) {
      u._sentryDebugIds = u._sentryDebugIds || {};
      u._sentryDebugIds[l] = "acd948f8-9277-4cdb-a1ba-9069ded6f3b7";
      u._sentryDebugIdIdentifier = "sentry-dbid-acd948f8-9277-4cdb-a1ba-9069ded6f3b7";
    }
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
const Q = require("node:crypto");
const ye = require("node:os");
const q = require("electron");
const se = require("./index.chunk-c42vKsva.js");
const we = require("./index.chunk-IUD6Pydn.js");
function me() {
  if (se.getOAuthEnvironment() === "production") {
    return "https://api.anthropic.com";
  } else {
    return "https://api-staging.anthropic.com";
  }
}
const _e = 1000;
const $e = 30000;
const Z = 45000;
const ve = 600000;
const x = 3;
const Ne = 1000;
function i(u) {
  se.logger.info(`[dispatch-host] ${u}`);
}
const te = "cowork";
const ne = "code";
const ee = {
  cowork: te,
  code: ne
};
const Oe = {
  running: "SESSION_STATUS_RUNNING",
  requires_action: "SESSION_STATUS_REQUIRES_ACTION",
  complete: "SESSION_STATUS_COMPLETE",
  cancelled: "SESSION_STATUS_CANCELLED"
};
let H = false;
async function Re() {
  if (H) {
    return true;
  }
  const {
    claudeCodeManager: u
  } = await Promise.resolve().then(() => require("./index.chunk-c42vKsva.js")).then(l => l.ClaudeCodeManager);
  if ((await u.getBinaryPathIfReady()) !== null || (await u.getHostBinaryPathIfPresent()) !== null) {
    H = true;
  }
  return H;
}
async function ke() {
  const {
    isVMGuestConnected: u
  } = await Promise.resolve().then(() => require("./index.chunk-c42vKsva.js")).then(l => l.VMSpawnController);
  return u();
}
function Pe(u) {
  var K;
  var G;
  var Y;
  var j;
  const {
    deviceName: l,
    ctx: o,
    getOAuthToken: ie
  } = u;
  const J = me();
  const B = `${J}/v1/dispatch/host/events`;
  const V = `${J}/v1/dispatch/host/updates`;
  let S = null;
  let w = false;
  let _ = 0;
  let g = null;
  const T = new Map();
  const P = new Set();
  const E = new Map();
  async function b() {
    const e = await ie();
    if (e) {
      return {
        Authorization: `Bearer ${e}`
      };
    } else {
      return {};
    }
  }
  async function p(e) {
    try {
      const s = await q.net.fetch(V, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(await b())
        },
        body: JSON.stringify(e),
        credentials: "omit"
      });
      if (!s.ok) {
        i(`POST /updates → HTTP ${s.status} ${await s.text()}`);
      }
    } catch (s) {
      i(`POST /updates failed: ${String(s)}`);
    }
  }
  function $(e, s) {
    p({
      correlationId: e,
      sessionUpdate: {
        ...s,
        hostId: l
      }
    });
  }
  async function oe(e) {
    const s = JSON.stringify({
      correlationId: "",
      permissionRequest: e
    });
    for (let t = 1; t <= x; t++) {
      if (w) {
        return false;
      }
      try {
        const n = await q.net.fetch(V, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(await b())
          },
          body: s,
          credentials: "omit"
        });
        if (n.ok) {
          return true;
        }
        i(`POST /updates permission_request → HTTP ${n.status} ${await n.text().catch(() => "")}`);
        if (n.status < 500) {
          return false;
        }
      } catch (n) {
        i(`POST /updates permission_request failed: ${String(n)}`);
      }
      if (t < x) {
        await new Promise(n => setTimeout(n, Ne * t));
      }
    }
    return false;
  }
  function v(e, s, t, n = false) {
    var c;
    const a = E.get(e);
    if (!a) {
      i(`permission_response for unknown/stale request ${e}`);
      return;
    }
    E.delete(e);
    clearTimeout(a.timeout);
    const r = n ? "always-allow" : s ? "allow" : "deny";
    i(`permission ${e} (session ${a.sessionId}) → ${r}: ${t}`);
    if ((c = o.respondToToolPermission) != null) {
      c.call(o, a.lasmRequestId, s, t);
    }
  }
  function A(e, s) {
    for (const [t, n] of E) {
      if (e(n)) {
        clearTimeout(n.timeout);
        E.delete(t);
        i(`permission ${t} dropped: ${s}`);
      }
    }
  }
  async function W(e) {
    var t;
    if (P.has(e)) {
      return "SESSION_STATUS_REQUIRES_ACTION";
    }
    const s = await ((t = o.getTargetSession) == null ? undefined : t.call(o, e));
    if (s) {
      if (s.lifecycleState === "running") {
        return "SESSION_STATUS_RUNNING";
      } else {
        return "SESSION_STATUS_COMPLETE";
      }
    } else {
      return "SESSION_STATUS_CANCELLED";
    }
  }
  async function ae(e, s) {
    var c;
    const t = s.runnerId ?? "";
    const n = s.title ?? "";
    const a = s.spec ?? {};
    const r = await we.handleDispatchStartSession(o, t, n, {
      prompt: a.prompt ?? "",
      model: a.model,
      cowork: a.cowork,
      code: (c = a.code) != null && c.cwd ? {
        ...a.code,
        cwd: a.code.cwd
      } : undefined
    });
    if (r.error !== undefined) {
      i(`startSession (runner=${t}) failed: ${r.error}`);
      $(e, {
        id: `failed-${Q.randomUUID()}`,
        runnerId: t,
        title: n,
        status: "SESSION_STATUS_COMPLETE",
        result: r.error
      });
      return;
    }
    T.set(r.sessionId, t);
    i(`startSession (runner=${t}) → local session ${r.sessionId}`);
    $(e, {
      id: r.sessionId,
      runnerId: t,
      title: n,
      status: "SESSION_STATUS_RUNNING"
    });
  }
  async function re(e, s) {
    const t = s.sessionId;
    const n = s.runnerId ?? T.get(t ?? "");
    if (!t) {
      i("sendMessage: missing session id, ignoring");
      return;
    }
    let a;
    try {
      await o.sendMessage(t, s.message ?? "");
    } catch (r) {
      a = r instanceof Error ? r.message : String(r);
      i(`sendMessage ${t} failed: ${a}`);
    }
    $(e, {
      id: t,
      runnerId: n,
      status: await W(t),
      result: a
    });
  }
  async function de(e, s) {
    var a;
    const t = s.sessionId;
    if (!t) {
      i("stopSession: missing session id, ignoring");
      return;
    }
    const n = s.runnerId ?? T.get(t);
    try {
      await ((a = o.stopSession) == null ? undefined : a.call(o, t));
    } catch (r) {
      i(`stopSession ${t} failed: ${String(r)}`);
    }
    T.delete(t);
    A(r => r.sessionId === t, "session stopped");
    $(e, {
      id: t,
      runnerId: n,
      status: "SESSION_STATUS_CANCELLED"
    });
  }
  const N = () => Promise.resolve().then(() => require("./index.chunk-DgthhoM5.js"));
  function O(e, s) {
    if (s.error !== undefined) {
      i(`scheduledTask reply (corr=${e}) error: ${s.error}`);
    }
    p({
      correlationId: e,
      scheduledTask: s.task ?? {
        hostId: l,
        title: s.error,
        enabled: false
      }
    });
  }
  async function le(e, s) {
    try {
      const t = await N();
      O(e, await t.handleCreateScheduledTask(l, s));
    } catch (t) {
      O(e, {
        error: t instanceof Error ? t.message : String(t)
      });
    }
  }
  async function ce(e, s) {
    try {
      const t = await N();
      O(e, await t.handleUpdateScheduledTask(l, s));
    } catch (t) {
      O(e, {
        error: t instanceof Error ? t.message : String(t)
      });
    }
  }
  async function ue(e, s) {
    let t = [];
    try {
      t = await (await N()).handleListScheduledTasks(l, s);
    } catch (n) {
      i(`listScheduledTasks failed: ${String(n)}`);
    }
    i(`listScheduledTasks (runner=${s.runnerId ?? "all"}) → ${t.length} tasks`);
    p({
      correlationId: e,
      scheduledTaskList: {
        tasks: t
      }
    });
  }
  async function Se(e, s) {
    var r;
    const t = (await ((r = o.listDispatchSessions) == null ? undefined : r.call(o))) ?? [];
    const a = (s.runnerId ? t.filter(c => ee[c.kind] === s.runnerId) : t).map(c => ({
      id: c.sessionId,
      hostId: l,
      runnerId: ee[c.kind],
      scheduledTaskId: c.scheduledTaskId,
      title: c.title,
      status: c.isRunning ? "SESSION_STATUS_RUNNING" : "SESSION_STATUS_COMPLETE"
    }));
    i(`listSessions (runner=${s.runnerId ?? "all"}) → ${a.length} sessions`);
    p({
      correlationId: e,
      sessionList: {
        sessions: a
      }
    });
  }
  const fe = 50;
  const he = 200;
  function m(e) {
    return e.replace(/<(?=\/?agent_transcript\b)/gi, "&lt;");
  }
  async function Ie(e, s) {
    var k;
    var y;
    const t = Date.now();
    const n = s.sessionId;
    i(`getSessionEvents recv: sessionId=${n ?? "<none>"} runner=${s.runnerId ?? "<none>"} corr=${e || "<empty>"} format=${s.format ?? "summary"} limit=${s.limit ?? "default"} before=${s.beforeEventId ?? "tail"}`);
    if (!n) {
      i("getSessionEvents: missing session id, ignoring");
      return;
    }
    const a = d => {
      i(`getSessionEvents reply: sessionId=${n} corr=${e || "<empty>"} status=${d.status} hasSummary=${!!d.summary} hasEvents=${!!d.eventsJson} elapsed=${Date.now() - t}ms`);
      p({
        correlationId: e,
        sessionEvents: d
      }).then(() => i(`getSessionEvents POST done: corr=${e || "<empty>"}`));
    };
    const r = s.format === "raw" ? "raw" : "summary";
    const c = Number(s.limit);
    const h = Number.isFinite(c) ? Math.min(Math.max(1, Math.floor(c)), he) : fe;
    const I = await W(n);
    i(`getSessionEvents: status resolved=${I} (+${Date.now() - t}ms)`);
    const R = (y = await ((k = o.getTargetSession) == null ? undefined : k.call(o, n))) == null ? undefined : y.title;
    const f = R ? m(R) : undefined;
    i(`getSessionEvents: title resolved (+${Date.now() - t}ms), calling ctx.${r === "raw" ? "getSessionRawEvents" : "getSessionEvents"}`);
    if (r === "raw") {
      if (!o.getSessionRawEvents) {
        a({
          sessionId: n,
          status: I,
          title: f,
          summary: "raw event reads are not available on this host"
        });
        return;
      }
      try {
        const d = await o.getSessionRawEvents(n, {
          limit: h,
          beforeEventId: s.beforeEventId
        });
        i(`getSessionEvents ${n} (raw, limit=${h}, before=${s.beforeEventId ?? "tail"}) → ${d.events.length} events, hasMore=${d.hasMore}`);
        a({
          sessionId: n,
          status: I,
          title: f,
          eventsJson: m(JSON.stringify(d.events)),
          firstEventId: d.firstEventId,
          hasMore: d.hasMore
        });
      } catch (d) {
        i(`getSessionEvents ${n} (raw) failed: ${String(d)}`);
        a({
          sessionId: n,
          status: I,
          summary: "failed to read session events"
        });
      }
      return;
    }
    if (!o.getSessionEvents) {
      a({
        sessionId: n,
        status: I,
        title: f,
        summary: "get_session_events is not available on this host"
      });
      return;
    }
    try {
      const d = await o.getSessionEvents(n, h);
      i(`getSessionEvents ${n} (summary, limit=${h}) → ${d.status}`);
      a({
        sessionId: n,
        status: d.status === "not_found" ? "SESSION_STATUS_CANCELLED" : I,
        title: d.title ? m(d.title) : f,
        summary: m(d.summary)
      });
    } catch (d) {
      i(`getSessionEvents ${n} (summary) failed: ${String(d)}`);
      a({
        sessionId: n,
        status: I,
        summary: "failed to read session events"
      });
    }
  }
  function Te(e) {
    const s = e.requestId;
    if (!s) {
      i("permissionResponse: missing request id, ignoring");
      return;
    }
    i(`permissionResponse ${s}: verdict=${e.verdict ?? "<missing>"}`);
    const t = e.verdict === "PERMISSION_VERDICT_ALLOW" || e.verdict === "PERMISSION_VERDICT_ALWAYS_ALLOW";
    const n = e.verdict === "PERMISSION_VERDICT_ALWAYS_ALLOW";
    v(s, t, e.reason ?? (t ? "allowed by dispatch" : "denied by dispatch"), n);
  }
  async function pe(e) {
    const s = e.correlationId ?? "";
    if (e.startSession) {
      await ae(s, e.startSession);
    } else if (e.sendMessage) {
      await re(s, e.sendMessage);
    } else if (e.stopSession) {
      await de(s, e.stopSession);
    } else if (e.permissionResponse) {
      Te(e.permissionResponse);
    } else if (e.getSessionEvents) {
      i(`SSE frame: getSessionEvents corr=${s || "<empty>"}`);
      await Ie(s, e.getSessionEvents);
    } else if (e.listSessions) {
      await Se(s, e.listSessions);
    } else if (e.createScheduledTask) {
      await le(s, e.createScheduledTask);
    } else if (e.updateScheduledTask) {
      await ce(s, e.updateScheduledTask);
    } else if (e.listScheduledTasks) {
      await ue(s, e.listScheduledTasks);
    } else {
      i(`unknown frame: ${JSON.stringify(e)}`);
    }
  }
  function M() {
    if (w || g) {
      return;
    }
    const e = Math.min(_e * 1.5 ** _, $e);
    _++;
    i(`reconnect #${_} in ${e}ms`);
    g = setTimeout(() => {
      g = null;
      F();
    }, e);
  }
  async function F() {
    if (S || w) {
      return;
    }
    S = new AbortController();
    const e = S.signal;
    const [s, t] = await Promise.all([ke().catch(() => false), Re().catch(() => false)]);
    const n = {
      id: l,
      displayName: ye.hostname(),
      runners: [{
        id: te,
        kind: "RUNNER_KIND_COWORK",
        displayName: "Cowork",
        ready: s
      }, {
        id: ne,
        kind: "RUNNER_KIND_CODE_DESKTOP",
        displayName: "Code",
        ready: t
      }]
    };
    i(`opening SSE ${B} as host ${l} (cowork ready=${s}, code ready=${t})`);
    let a;
    try {
      a = await q.net.fetch(B, {
        method: "POST",
        headers: {
          Accept: "text/event-stream",
          "Content-Type": "application/json",
          ...(await b())
        },
        body: JSON.stringify(n),
        signal: e,
        credentials: "omit"
      });
    } catch (f) {
      if (!e.aborted) {
        i(`SSE connect failed: ${String(f)}`);
      }
      S = null;
      M();
      return;
    }
    if (!a.ok || !a.body) {
      const f = await a.text().catch(() => "");
      i(`SSE HTTP ${a.status} ${f}`);
      S = null;
      M();
      return;
    }
    i("SSE connected");
    _ = 0;
    const r = a.body.getReader();
    const c = new TextDecoder();
    let h = "";
    let I = Date.now();
    const R = setInterval(() => {
      if (Date.now() - I > Z) {
        i("keepalive timeout — aborting stream");
        if (S != null) {
          S.abort();
        }
      }
    }, Z / 2);
    try {
      while (true) {
        const {
          value: f,
          done: k
        } = await r.read();
        if (k) {
          break;
        }
        I = Date.now();
        h += c.decode(f, {
          stream: true
        });
        let y;
        while ((y = h.indexOf(`

`)) !== -1) {
          const d = h.slice(0, y);
          h = h.slice(y + 2);
          for (const X of d.split(`
`)) {
            if (!X.startsWith("data:")) {
              continue;
            }
            const z = X.slice(5).replace(/^ /, "");
            if (z) {
              try {
                await pe(JSON.parse(z));
              } catch (Ee) {
                i(`bad frame: ${String(Ee)}`);
              }
            }
          }
        }
      }
    } catch (f) {
      if (!e.aborted) {
        i(`SSE read error: ${String(f)}`);
      }
    } finally {
      clearInterval(R);
    }
    S = null;
    if (!w) {
      i("SSE closed");
      M();
    }
  }
  const U = (K = o.onSessionLifecycle) == null ? undefined : K.call(o, e => {
    if (e.status === "requires_action") {
      P.add(e.sessionId);
    } else {
      P.delete(e.sessionId);
    }
    const s = T.get(e.sessionId);
    if (s === undefined) {
      return;
    }
    const t = Oe[e.status];
    i(`session ${e.sessionId} → ${e.status}; pushing ${t}`);
    p({
      correlationId: "",
      sessionUpdate: {
        id: e.sessionId,
        hostId: l,
        runnerId: s,
        status: t,
        result: e.error
      }
    });
    if (e.status === "cancelled") {
      T.delete(e.sessionId);
      A(n => n.sessionId === e.sessionId, "session cancelled");
    }
  });
  const C = (G = o.onScheduledTaskRunFinished) == null ? undefined : G.call(o, e => {
    (async () => {
      var a;
      var r;
      const s = await N().catch(() => null);
      if (!(await (s == null ? undefined : s.isDispatchSubscribed(e.runnerId, e.scheduledTaskId)))) {
        return;
      }
      const t = (r = await ((a = o.getTargetSession) == null ? undefined : a.call(o, e.sessionId))) == null ? undefined : r.title;
      const n = t ? m(t) : undefined;
      i(`scheduled-task run finished: task=${e.scheduledTaskId} session=${e.sessionId} runner=${e.runnerId} status=${e.status}`);
      p({
        correlationId: "",
        sessionUpdate: {
          id: e.sessionId,
          hostId: l,
          runnerId: e.runnerId,
          scheduledTaskId: e.scheduledTaskId,
          status: "SESSION_STATUS_COMPLETE",
          title: n,
          result: e.status === "failed" ? "scheduled task run failed" : ""
        }
      });
    })();
  });
  const D = (Y = o.onToolPermissionRequest) == null ? undefined : Y.call(o, e => {
    if (!T.has(e.sessionId)) {
      return;
    }
    const s = Q.randomUUID();
    i(`forwarding permission ${s} (${e.toolName}) for session ${e.sessionId}`);
    const t = setTimeout(() => {
      v(s, false, "permission request timed out");
    }, ve);
    E.set(s, {
      lasmRequestId: e.requestId,
      sessionId: e.sessionId,
      timeout: t
    });
    oe({
      sessionId: e.sessionId,
      hostId: l,
      requestId: s,
      toolName: e.toolName,
      toolInputJson: JSON.stringify(e.input)
    }).then(n => {
      if (!n) {
        v(s, false, "failed to deliver permission request to dispatch");
      }
    });
  });
  const L = (j = o.onToolPermissionResolved) == null ? undefined : j.call(o, e => {
    A(s => s.lasmRequestId === e.requestId, "resolved locally");
  });
  const ge = !!o.onToolPermissionRequest && !!o.respondToToolPermission;
  F();
  return {
    ownsSessionPermissions(e) {
      return ge && T.has(e);
    },
    close() {
      if (U != null) {
        U();
      }
      if (C != null) {
        C();
      }
      if (D != null) {
        D();
      }
      if (L != null) {
        L();
      }
      for (const e of [...E.keys()]) {
        v(e, false, "dispatch host client closed");
      }
      w = true;
      if (g) {
        clearTimeout(g);
        g = null;
      }
      if (S != null) {
        S.abort();
      }
      S = null;
    }
  };
}
exports.createDispatchHostClient = Pe;
//# sourceMappingURL=index.chunk-DlJjYyL3.js.map