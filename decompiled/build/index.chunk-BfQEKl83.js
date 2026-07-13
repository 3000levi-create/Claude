"use strict";

(function () {
  try {
    var f = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    f.SENTRY_RELEASE = {
      id: "df1d8a339dfabcf359af7144fe142b59ff7d9a0f"
    };
  } catch {}
})();
try {
  (function () {
    var f = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    var e = new f.Error().stack;
    if (e) {
      f._sentryDebugIds = f._sentryDebugIds || {};
      f._sentryDebugIds[e] = "e7feee43-ee96-45fb-8599-a69ef496d9da";
      f._sentryDebugIdIdentifier = "sentry-dbid-e7feee43-ee96-45fb-8599-a69ef496d9da";
    }
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
const g = require("./index.chunk-dXneFYYY.js");
const w = require("electron");
const d = require("./index.chunk-c42vKsva.js");
const h = "[outbound-ccr]";
const p = 15000;
const v = 5000;
const _ = 30000;
const b = 60000;
const k = 300000;
class O {
  constructor(e) {
    this.sessions = new Map();
    this.initInFlight = new Map();
    this.pending = new Map();
    this.initFailedUntil = new Map();
    this.tornDownDuringInit = new Map();
    this.idleTeardownTimers = new Map();
    this.remoteIdByLocalId = new Map();
    this.eventCleanup = null;
    this.disposed = false;
    this.sessionManager = e.sessionManager;
    this.getOAuthToken = e.getOAuthToken;
    this.apiHost = e.apiHost;
    this.getTrustedDeviceToken = e.getTrustedDeviceToken;
    this.enrollTrustedDevice = e.enrollTrustedDevice;
  }
  start() {
    if (this.disposed || this.eventCleanup) {
      return;
    }
    const e = i => {
      if (i.type === "archived") {
        this.teardownSession(i.sessionId);
        return;
      }
      if (i.type === "deleted") {
        if (this.initInFlight.has(i.sessionId)) {
          this.tornDownDuringInit.set(i.sessionId, "deleted");
          this.pending.delete(i.sessionId);
        }
        this.deleteRemoteSession(i.sessionId, i.outboundCCRRemoteId).finally(() => {
          this.remoteIdByLocalId.delete(i.sessionId);
          return this.teardownSession(i.sessionId, "deleted");
        });
        return;
      }
      if (i.type === "session_updated") {
        this.syncTitle(i.sessionId);
        return;
      }
      if (i.type === "close") {
        this.reportState(i.sessionId, "idle");
        this.scheduleIdleTeardown(i.sessionId);
        return;
      }
      this.handleSessionEvent(i);
    };
    this.sessionManager.on("event", e);
    const t = i => {
      this.reportState(i, "idle");
      this.scheduleIdleTeardown(i);
    };
    this.sessionManager.on("queryCompleted", t);
    let r = null;
    w.app.whenReady().then(() => {
      if (!this.disposed) {
        r = () => {
          const i = Date.now();
          for (const [s, n] of this.sessions) {
            if (i >= n.refreshAt) {
              if (n.refreshTimer) {
                clearTimeout(n.refreshTimer);
              }
              this.refreshCredentials(s);
            }
          }
        };
        w.powerMonitor.on("resume", r);
      }
    });
    this.eventCleanup = () => {
      this.sessionManager.off("event", e);
      this.sessionManager.off("queryCompleted", t);
      if (r) {
        w.powerMonitor.off("resume", r);
      }
    };
    d.logger.info(`${h} started`);
  }
  dispose() {
    var e;
    if (!this.disposed) {
      this.disposed = true;
      if ((e = this.eventCleanup) != null) {
        e.call(this);
      }
      this.eventCleanup = null;
      for (const t of Array.from(this.sessions.keys())) {
        this.teardownSession(t);
      }
      for (const t of this.idleTeardownTimers.values()) {
        clearTimeout(t);
      }
      this.idleTeardownTimers.clear();
      this.remoteIdByLocalId.clear();
      this.pending.clear();
      this.initFailedUntil.clear();
      this.tornDownDuringInit.clear();
      d.logger.info(`${h} disposed`);
    }
  }
  async handleSessionEvent(e) {
    if (this.disposed || !d.getOutboundOnlyRemoteModeRequested() || e.type !== "message" || !e.message || (this.clearIdleTeardownTimer(e.sessionId), this.reportState(e.sessionId, "running"), !(await this.sessionManager.isOutboundCCREligibleSession(e.sessionId))) || this.disposed) {
      return;
    }
    const t = e.message;
    if (t.type === "result" || t.type === "stream_event" || t.isSynthetic === true || t.parent_tool_use_id != null || t.type === "system" && t.subtype !== "status") {
      return;
    }
    const r = this.sessions.get(e.sessionId);
    if (r) {
      this.safeWrite(r.handle, e.message);
      return;
    }
    const i = this.initFailedUntil.get(e.sessionId);
    if (i !== undefined) {
      if (Date.now() < i) {
        return;
      }
      this.initFailedUntil.delete(e.sessionId);
    }
    let s = this.pending.get(e.sessionId);
    if (!s) {
      s = [];
      this.pending.set(e.sessionId, s);
    }
    s.push(e.message);
    this.kickInit(e.sessionId);
  }
  kickInit(e) {
    let t = this.initInFlight.get(e);
    if (!t) {
      t = this.initSession(e).finally(() => {
        this.initInFlight.delete(e);
        this.tornDownDuringInit.delete(e);
      });
      this.initInFlight.set(e, t);
    }
    return t;
  }
  async preallocateRemoteId(e, t) {
    if (this.disposed || !d.getOutboundOnlyRemoteModeRequested()) {
      return;
    }
    const r = await this.getOAuthToken();
    if (this.disposed) {
      return;
    }
    const i = await g.bse(this.apiHost, r, e, p, d.outboundCCRTagsForSessionType(t));
    if (!i) {
      throw new Error("createCodeSession returned null");
    }
    return i;
  }
  async syncTitle(e) {
    var r;
    if (this.disposed || !d.getOutboundOnlyRemoteModeRequested()) {
      return;
    }
    const t = this.sessions.get(e);
    if (t) {
      if (t.titleSyncInFlight) {
        t.titleSyncPending = true;
        return;
      }
      t.titleSyncInFlight = true;
      try {
        const i = (r = this.sessionManager.getSession(e)) == null ? undefined : r.title;
        if (!i || i === t.lastSyncedTitle) {
          return;
        }
        let s;
        try {
          s = await this.getOAuthToken();
        } catch (o) {
          d.logger.warn(`${h} title sync skipped for ${e}: getOAuthToken: ${o instanceof Error ? o.message : String(o)}`);
          return;
        }
        const n = new AbortController();
        const l = setTimeout(() => n.abort(), p);
        try {
          const o = await w.net.fetch(`${this.apiHost}/v1/code/sessions/${encodeURIComponent(t.remoteId)}`, {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${s}`,
              "Content-Type": "application/json",
              "anthropic-version": "2023-06-01"
            },
            body: JSON.stringify({
              title: i.slice(0, 500)
            }),
            redirect: "error",
            signal: n.signal
          });
          if (o.ok) {
            t.lastSyncedTitle = i;
          } else {
            d.logger.warn(`${h} title sync for ${e} returned ${o.status}`);
          }
        } catch (o) {
          d.logger.warn(`${h} title sync failed for ${e}: ${o instanceof Error ? o.message : String(o)}`);
        } finally {
          clearTimeout(l);
        }
      } finally {
        t.titleSyncInFlight = false;
        if (t.titleSyncPending) {
          t.titleSyncPending = false;
          this.syncTitle(e);
        }
      }
    }
  }
  async probeRemoteSession(e, t) {
    const r = new AbortController();
    const i = setTimeout(() => r.abort(), p);
    try {
      const s = await w.net.fetch(`${this.apiHost}/v1/code/sessions/${encodeURIComponent(e)}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${t}`,
          "anthropic-version": "2023-06-01"
        },
        redirect: "error",
        signal: r.signal
      });
      if (s.ok) {
        return "exists";
      } else if (s.status === 404) {
        return "gone";
      } else {
        return "transient";
      }
    } catch {
      return "transient";
    } finally {
      clearTimeout(i);
    }
  }
  reportState(e, t) {
    var r;
    var i;
    var s;
    if ((s = (r = this.sessions.get(e)) == null ? undefined : (i = r.handle).reportState) != null) {
      s.call(i, t);
    }
  }
  safeWrite(e, t) {
    try {
      e.write(t);
    } catch (r) {
      d.logger.warn(`${h} write failed: ${r instanceof Error ? r.message : String(r)}`);
    }
  }
  async initSession(e) {
    const t = this.sessionManager.getSession(e);
    if (!t || t.isArchived || !(await this.sessionManager.isOutboundCCREligibleSession(e))) {
      this.pending.delete(e);
      return;
    }
    const r = t.title ?? "Cowork session";
    d.logger.info(`${h} attaching outbound-only CCR for ${e}`);
    const i = a => {
      d.logger.warn(`${h} init failed for ${e}: ${a}`);
      this.pending.delete(e);
      this.initFailedUntil.set(e, Date.now() + _);
    };
    const s = () => this.disposed || this.tornDownDuringInit.has(e);
    const n = a => {
      if (this.tornDownDuringInit.get(e) === "deleted") {
        this.deleteRemoteSessionById(a);
      }
    };
    let l;
    try {
      l = await this.getOAuthToken();
    } catch (a) {
      return i(`getOAuthToken: ${a instanceof Error ? a.message : String(a)}`);
    }
    if (s()) {
      return;
    }
    let o = null;
    let $ = false;
    const m = this.sessionManager.getOutboundCCRRemoteId(e);
    if (m) {
      const a = await this.probeRemoteSession(m, l);
      if (s()) {
        if (a !== "gone") {
          n(m);
        }
        return;
      }
      if (a === "exists") {
        o = m;
        this.remoteIdByLocalId.set(e, o);
        $ = true;
        d.logger.info(`${h} ${e} reattaching to persisted remote ${o}`);
      } else if (a === "gone") {
        d.logger.info(`${h} persisted remote ${m} for ${e} is gone; creating a new one`);
        this.sessionManager.setOutboundCCRRemoteId(e, undefined);
        this.remoteIdByLocalId.delete(e);
      } else {
        n(m);
        return i(`probe of persisted remote ${m} failed (transient)`);
      }
    }
    if (o === null) {
      try {
        o = await g.bse(this.apiHost, l, r, p, d.outboundCCRTagsForSessionType(t.sessionType));
      } catch (a) {
        return i(`createCodeSession: ${a instanceof Error ? a.message : String(a)}`);
      }
      if (!o) {
        return i("createCodeSession returned null");
      }
      this.sessionManager.setOutboundCCRRemoteId(e, o);
      this.remoteIdByLocalId.set(e, o);
      if (s()) {
        n(o);
        return;
      }
    }
    let u;
    try {
      u = await g.vse(o, this.apiHost, l, p, this.getTrustedDeviceToken());
    } catch (a) {
      n(o);
      return i(`fetchRemoteCredentials: ${a instanceof Error ? a.message : String(a)}`);
    }
    if (s()) {
      n(o);
      return;
    }
    if (!u) {
      n(o);
      return i("fetchRemoteCredentials returned null");
    }
    if (g.Bse(u)) {
      if (u.reason !== "untrusted_device") {
        n(o);
        return i(`fetchRemoteCredentials: transient elevated-auth denial (${u.reason})`);
      }
      const a = await this.enrollTrustedDevice();
      if (s()) {
        n(o);
        return;
      }
      if (a) {
        try {
          u = await g.vse(o, this.apiHost, l, p, a);
        } catch (T) {
          n(o);
          return i(`fetchRemoteCredentials: ${T instanceof Error ? T.message : String(T)}`);
        }
        if (s()) {
          n(o);
          return;
        }
      }
      if (!u || g.Bse(u)) {
        n(o);
        return i(`fetchRemoteCredentials: terminal ${(u == null ? undefined : u.reason) ?? "untrusted_device"} — device needs re-enrollment`);
      }
    }
    let y;
    try {
      y = await g.mUe({
        sessionId: o,
        ingressToken: u.worker_jwt,
        apiBaseUrl: u.api_base_url,
        epoch: u.worker_epoch,
        outboundOnly: true,
        onClose: a => {
          var T;
          d.logger.info(`${h} transport closed for ${e} code=${a}`);
          if (y && ((T = this.sessions.get(e)) == null ? undefined : T.handle) === y) {
            this.teardownSession(e);
          }
        }
      });
    } catch (a) {
      n(o);
      return i(`attachBridgeSession: ${a instanceof Error ? a.message : String(a)}`);
    }
    if (s()) {
      y.close();
      n(o);
      return;
    }
    const C = {
      remoteId: o,
      handle: y,
      credentials: u,
      refreshTimer: null,
      refreshAt: 0,
      lastSyncedTitle: $ ? undefined : r,
      titleSyncInFlight: false,
      titleSyncPending: false
    };
    this.sessions.set(e, C);
    this.scheduleRefresh(e, C, false);
    this.reportState(e, this.idleTeardownTimers.has(e) ? "idle" : "running");
    this.syncTitle(e);
    const R = this.pending.get(e) ?? [];
    this.pending.delete(e);
    d.logger.info(`${h} ${e} → ${o} attached, draining ${R.length} queued event(s)`);
    for (const a of R) {
      this.safeWrite(y, a);
    }
  }
  scheduleRefresh(e, t, r) {
    if (t.refreshTimer) {
      clearTimeout(t.refreshTimer);
    }
    const i = r ? b : Math.max(30000, t.credentials.expires_in * 800);
    t.refreshAt = Date.now() + i;
    t.refreshTimer = setTimeout(() => {
      this.refreshCredentials(e);
    }, i);
  }
  async refreshCredentials(e) {
    const t = this.sessions.get(e);
    if (!t || this.disposed) {
      return;
    }
    const r = n => {
      d.logger.warn(`${h} JWT refresh failed for ${e}: ${n}; retrying in ${b / 1000}s`);
      if (!this.disposed && this.sessions.has(e)) {
        this.scheduleRefresh(e, t, true);
      }
    };
    let i;
    try {
      i = await this.getOAuthToken();
    } catch (n) {
      return r(`getOAuthToken: ${n instanceof Error ? n.message : String(n)}`);
    }
    let s;
    try {
      s = await g.vse(t.remoteId, this.apiHost, i, p, this.getTrustedDeviceToken());
    } catch (n) {
      return r(`fetchRemoteCredentials: ${n instanceof Error ? n.message : String(n)}`);
    }
    if (!this.disposed && !!this.sessions.has(e)) {
      if (!s) {
        return r("fetchRemoteCredentials returned null");
      }
      if (g.Bse(s)) {
        if (s.reason !== "untrusted_device") {
          return r(`fetchRemoteCredentials: transient elevated-auth denial (${s.reason})`);
        }
        const n = await this.enrollTrustedDevice();
        if (this.disposed || !this.sessions.has(e)) {
          return;
        }
        if (n) {
          try {
            s = await g.vse(t.remoteId, this.apiHost, i, p, n);
          } catch (l) {
            return r(`fetchRemoteCredentials: ${l instanceof Error ? l.message : String(l)}`);
          }
          if (this.disposed || !this.sessions.has(e)) {
            return;
          }
        }
        if (!s || g.Bse(s)) {
          d.logger.warn(`${h} JWT refresh hit terminal ${(s == null ? undefined : s.reason) ?? "untrusted_device"} for ${e} — tearing down`);
          this.teardownSession(e);
          return;
        }
      }
      t.credentials = s;
      try {
        await t.handle.reconnectTransport({
          ingressToken: s.worker_jwt,
          apiBaseUrl: s.api_base_url,
          epoch: s.worker_epoch
        });
      } catch (n) {
        return r(`reconnectTransport: ${n instanceof Error ? n.message : String(n)}`);
      }
      if (!this.disposed && this.sessions.has(e)) {
        this.scheduleRefresh(e, t, false);
      }
    }
  }
  scheduleIdleTeardown(e) {
    if (this.disposed || !this.sessions.has(e) && !this.initInFlight.has(e) && !this.pending.has(e)) {
      return;
    }
    this.clearIdleTeardownTimer(e);
    const t = setTimeout(() => {
      this.idleTeardownTimers.delete(e);
      if (this.disposed) {
        return;
      }
      const r = this.initInFlight.get(e);
      if (r) {
        r.finally(() => {
          if (!this.disposed) {
            this.teardownSession(e);
          }
        });
      } else {
        this.teardownSession(e);
      }
    }, k);
    this.idleTeardownTimers.set(e, t);
  }
  clearIdleTeardownTimer(e) {
    const t = this.idleTeardownTimers.get(e);
    if (t) {
      clearTimeout(t);
      this.idleTeardownTimers.delete(e);
    }
  }
  async deleteRemoteSession(e, t) {
    var i;
    const r = ((i = this.sessions.get(e)) == null ? undefined : i.remoteId) ?? this.remoteIdByLocalId.get(e) ?? t;
    if (r) {
      await this.deleteRemoteSessionById(r);
    }
  }
  async deleteRemoteSessionById(e) {
    let t;
    try {
      t = await this.getOAuthToken();
    } catch (s) {
      d.logger.warn(`${h} delete skipped for ${e}: getOAuthToken: ${s instanceof Error ? s.message : String(s)}`);
      return;
    }
    const r = new AbortController();
    const i = setTimeout(() => r.abort(), p);
    try {
      const s = await w.net.fetch(`${this.apiHost}/v1/code/sessions/${encodeURIComponent(e)}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${t}`,
          "anthropic-version": "2023-06-01"
        },
        redirect: "error",
        signal: r.signal
      });
      if (!s.ok && s.status !== 404) {
        d.logger.warn(`${h} delete for ${e} returned ${s.status}`);
      }
    } catch (s) {
      d.logger.warn(`${h} delete for ${e} failed: ${s instanceof Error ? s.message : String(s)}`);
    } finally {
      clearTimeout(i);
    }
  }
  async teardownSession(e, t = "archived") {
    this.clearIdleTeardownTimer(e);
    if (this.initInFlight.has(e)) {
      this.tornDownDuringInit.set(e, t);
      this.pending.delete(e);
    }
    const r = this.sessions.get(e);
    if (r) {
      this.sessions.delete(e);
      this.initFailedUntil.delete(e);
      if (r.refreshTimer) {
        clearTimeout(r.refreshTimer);
      }
      try {
        await Promise.race([r.handle.flush(), new Promise(i => setTimeout(i, v))]);
      } catch (i) {
        d.logger.warn(`${h} flush failed during teardown of ${e}: ${i instanceof Error ? i.message : String(i)}`);
      }
      r.handle.close();
      d.logger.info(`${h} torn down ${e} → ${r.remoteId}`);
    }
  }
}
let c = null;
function E(f) {
  if (!c) {
    c = new O(f);
    c.start();
  }
}
function D() {
  if (c != null) {
    c.dispose();
  }
  c = null;
}
function I(f, e) {
  return (c == null ? undefined : c.preallocateRemoteId(f, e)) ?? Promise.resolve(undefined);
}
const M = {
  OutboundOnlyCCRClient: O
};
exports._test = M;
exports.disposeOutboundOnlyCCRClient = D;
exports.initOutboundOnlyCCRClient = E;
exports.preallocateOutboundCCRRemoteId = I;
//# sourceMappingURL=index.chunk-BfQEKl83.js.map