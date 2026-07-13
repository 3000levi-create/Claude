"use strict";

(function () {
  try {
    var s = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    s.SENTRY_RELEASE = {
      id: "df1d8a339dfabcf359af7144fe142b59ff7d9a0f"
    };
  } catch {}
})();
try {
  (function () {
    var s = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    var t = new s.Error().stack;
    if (t) {
      s._sentryDebugIds = s._sentryDebugIds || {};
      s._sentryDebugIds[t] = "13c113f2-6cf9-4f3d-a67a-e1ffe84c826e";
      s._sentryDebugIdIdentifier = "sentry-dbid-13c113f2-6cf9-4f3d-a67a-e1ffe84c826e";
    }
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
const a = require("./index.chunk-c42vKsva.js");
const T = require("node:crypto");
const _ = require("electron");
const b = require("./index.chunk-dXneFYYY.js");
class y {
  constructor(t) {
    this.pending = [];
    this.draining = false;
    this.closed = false;
    this.backpressureResolvers = [];
    this.sleepResolve = null;
    this.flushResolvers = [];
    this.config = t;
  }
  async enqueue(t) {
    if (this.closed) {
      return;
    }
    const e = Array.isArray(t) ? t : [t];
    if (e.length !== 0) {
      while (this.pending.length + e.length > this.config.maxQueueSize && !this.closed) {
        await new Promise(r => {
          this.backpressureResolvers.push(r);
        });
      }
      if (!this.closed) {
        this.pending.push(...e);
        this.drain();
      }
    }
  }
  flush() {
    if (this.pending.length === 0 && !this.draining) {
      return Promise.resolve();
    } else {
      this.drain();
      return new Promise(t => {
        this.flushResolvers.push(t);
      });
    }
  }
  close() {
    var t;
    this.closed = true;
    this.pending = [];
    if ((t = this.sleepResolve) != null) {
      t.call(this);
    }
    this.sleepResolve = null;
    for (const e of this.backpressureResolvers) {
      e();
    }
    this.backpressureResolvers = [];
    for (const e of this.flushResolvers) {
      e();
    }
    this.flushResolvers = [];
  }
  async drain() {
    if (this.draining || this.closed) {
      return;
    }
    this.draining = true;
    let t = 0;
    try {
      while (this.pending.length > 0 && !this.closed) {
        const e = this.pending.splice(0, this.config.maxBatchSize);
        try {
          await this.config.send(e);
          t = 0;
        } catch {
          this.pending = e.concat(this.pending);
          t++;
          await this.sleep(this.retryDelay(t));
          continue;
        }
        this.releaseBackpressure();
      }
    } finally {
      this.draining = false;
      if (this.pending.length === 0) {
        for (const e of this.flushResolvers) {
          e();
        }
        this.flushResolvers = [];
      }
    }
  }
  retryDelay(t) {
    const e = Math.min(this.config.baseDelayMs * 2 ** (t - 1), this.config.maxDelayMs);
    const r = Math.random() * this.config.jitterMs;
    return e + r;
  }
  releaseBackpressure() {
    const t = this.backpressureResolvers;
    this.backpressureResolvers = [];
    for (const e of t) {
      e();
    }
  }
  sleep(t) {
    return new Promise(e => {
      this.sleepResolve = e;
      setTimeout(() => {
        this.sleepResolve = null;
        e();
      }, t);
    });
  }
}
class k {
  constructor(t) {
    this.inflight = null;
    this.pending = null;
    this.closed = false;
    this.config = t;
  }
  enqueue(t) {
    if (!this.closed) {
      this.pending = this.pending ? S(this.pending, t) : t;
      this.drain();
    }
  }
  close() {
    this.closed = true;
    this.pending = null;
  }
  async drain() {
    if (this.inflight || this.closed || !this.pending) {
      return;
    }
    const t = this.pending;
    this.pending = null;
    this.inflight = this.sendWithRetry(t).then(() => {
      this.inflight = null;
      if (this.pending && !this.closed) {
        this.drain();
      }
    });
  }
  async sendWithRetry(t) {
    let e = t;
    let r = 0;
    while (!this.closed) {
      if (await this.config.send(e)) {
        return;
      }
      r++;
      await a.sleep(this.retryDelay(r));
      if (this.pending && !this.closed) {
        e = S(e, this.pending);
        this.pending = null;
      }
    }
  }
  retryDelay(t) {
    const e = Math.min(this.config.baseDelayMs * 2 ** (t - 1), this.config.maxDelayMs);
    const r = Math.random() * this.config.jitterMs;
    return e + r;
  }
}
function S(s, t) {
  const e = {
    ...s
  };
  for (const [r, i] of Object.entries(t)) {
    if ((r === "external_metadata" || r === "internal_metadata") && e[r] && typeof e[r] == "object" && typeof i == "object" && i !== null) {
      e[r] = {
        ...e[r],
        ...i
      };
    } else {
      e[r] = i;
    }
  }
  return e;
}
const p = "[transport:ccr]";
const C = 20000;
class I {
  constructor(t, e, r) {
    this.workerEpoch = 0;
    this.heartbeatTimer = null;
    this.heartbeatInFlight = false;
    this.closed = false;
    this.currentState = null;
    this.getAuthToken = r.getAuthToken;
    this.onEpochMismatch = r.onEpochMismatch;
    if (e.protocol !== "http:" && e.protocol !== "https:") {
      throw new Error(`CCRClient: Expected http(s) URL, got ${e.protocol}`);
    }
    const i = e.pathname.replace(/\/$/, "");
    this.sessionBaseUrl = `${e.protocol}//${e.host}${i}`;
    this.sessionId = i.split("/").pop() || "";
    this.workerState = new k({
      send: n => this.request("PUT", "/worker", {
        worker_epoch: this.workerEpoch,
        ...n
      }, "PUT worker"),
      baseDelayMs: 500,
      maxDelayMs: 30000,
      jitterMs: 500
    });
    this.eventUploader = new y({
      maxBatchSize: 100,
      maxQueueSize: 50,
      send: async n => {
        if (!(await this.request("POST", "/worker/events", {
          worker_epoch: this.workerEpoch,
          events: n
        }, "client events"))) {
          throw new Error("client event POST failed");
        }
      },
      baseDelayMs: 500,
      maxDelayMs: 30000,
      jitterMs: 500
    });
    this.deliveryUploader = new y({
      maxBatchSize: 1,
      maxQueueSize: 50,
      send: async ([n]) => {
        if (!(await this.request("POST", `/worker/events/${encodeURIComponent(n.eventId)}/delivery`, {
          status: n.status,
          worker_epoch: this.workerEpoch
        }, `Delivery ${n.eventId}`))) {
          throw new Error("delivery POST failed");
        }
      },
      baseDelayMs: 500,
      maxDelayMs: 30000,
      jitterMs: 500
    });
    t.setOnEvent(n => {
      this.reportDelivery(n.event_id, "received");
    });
  }
  async initialize(t) {
    if (!Number.isSafeInteger(t)) {
      throw new Error(`CCRClient: invalid worker epoch: ${t} (must be a safe integer)`);
    }
    this.workerEpoch = t;
    const e = await this.request("PUT", "/worker", {
      worker_status: "idle",
      worker_epoch: this.workerEpoch
    }, "PUT worker (init)");
    if (this.closed) {
      throw new Error("CCRClient: closed during initialize");
    }
    if (!e) {
      throw new Error("CCRClient: initial PUT /worker failed");
    }
    if (this.currentState === null) {
      this.currentState = "idle";
    }
    this.startHeartbeat();
    a.logger.info(`${p} initialized, epoch=${this.workerEpoch}`);
  }
  async request(t, e, r, i, {
    timeout: n = 10000
  } = {}) {
    const l = this.getAuthToken();
    if (!l) {
      a.logger.warn(`${p} No token available for ${i}`);
      return false;
    }
    const o = new AbortController();
    const c = setTimeout(() => o.abort(), n);
    try {
      const u = await _.net.fetch(`${this.sessionBaseUrl}${e}`, {
        method: t,
        headers: {
          Authorization: `Bearer ${l}`,
          "Content-Type": "application/json",
          "anthropic-version": "2023-06-01"
        },
        body: JSON.stringify(r),
        signal: o.signal
      });
      if (u.status >= 200 && u.status < 300) {
        return true;
      } else {
        if (u.status === 409) {
          this.handleEpochMismatch();
        }
        a.logger.warn(`${p} ${i} returned ${u.status}`);
        return false;
      }
    } catch (u) {
      a.logger.warn(`${p} ${i} failed: ${u instanceof Error ? u.message : String(u)}`);
      return false;
    } finally {
      clearTimeout(c);
    }
  }
  reportState(t, e) {
    if (t !== this.currentState || !!e) {
      a.logger.info(`${p} reportState ${this.currentState ?? "<unset>"} -> ${t}${e ? ` (tool=${e.tool_name} req=${e.request_id})` : ""}`);
      this.currentState = t;
      this.workerState.enqueue({
        worker_status: t,
        requires_action_details: e ?? null
      });
    }
  }
  reportMetadata(t) {
    a.logger.info(`${p} reportMetadata ${JSON.stringify(t)}`);
    this.workerState.enqueue({
      external_metadata: t
    });
  }
  handleEpochMismatch() {
    a.logger.error(`${p} Epoch mismatch (409), invoking onEpochMismatch handler`);
    this.onEpochMismatch();
  }
  startHeartbeat() {
    this.stopHeartbeat();
    this.heartbeatTimer = setInterval(() => {
      this.sendHeartbeat();
    }, C);
  }
  stopHeartbeat() {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = null;
    }
  }
  async sendHeartbeat() {
    if (!this.heartbeatInFlight && !this.closed) {
      this.heartbeatInFlight = true;
      try {
        if (await this.request("POST", "/worker/heartbeat", {
          session_id: this.sessionId,
          worker_epoch: this.workerEpoch
        }, "Heartbeat", {
          timeout: 5000
        })) {
          a.logger.info(`${p} Heartbeat sent`);
        }
      } finally {
        this.heartbeatInFlight = false;
      }
    }
  }
  async writeEvent(t) {
    const e = t;
    const r = {
      payload: {
        ...e,
        uuid: e.uuid ?? T.randomUUID()
      }
    };
    await this.eventUploader.enqueue(r);
  }
  reportDelivery(t, e) {
    a.logger.info(`${p} reportDelivery event_id=${t} status=${e}`);
    this.deliveryUploader.enqueue({
      eventId: t,
      status: e
    });
  }
  flushEvents() {
    return this.eventUploader.flush();
  }
  getWorkerEpoch() {
    return this.workerEpoch;
  }
  close() {
    this.closed = true;
    this.stopHeartbeat();
    this.workerState.close();
    this.eventUploader.close();
    this.deliveryUploader.close();
  }
}
const R = "[transport:attestation]";
const M = "2023768496";
const N = "371539023";
const O = "922442190";
const D = new Set(["verified", "verified_by_gate", "verified_keyless_device", "service_vouched", "absent", "invalid", "unchecked"]);
const A = {
  verified: new Set(["verified"]),
  verified_or_gate: new Set(["verified", "verified_by_gate"]),
  any_verified: new Set(["verified", "verified_by_gate", "verified_keyless_device", "service_vouched"])
};
const w = {
  enforce: false,
  acceptLevel: "any_verified",
  acceptStatuses: new Set()
};
function q(s) {
  return s === "verified" || s === "verified_or_gate" || s === "any_verified";
}
function P() {
  if (!a.isFeatureEnabled(N)) {
    return w;
  }
  const s = a.getFeatureValue(O, {});
  const t = s && typeof s == "object" ? s : {};
  return {
    enforce: true,
    acceptLevel: q(t.accept_level) ? t.accept_level : w.acceptLevel,
    acceptStatuses: new Set(Array.isArray(t.accept_statuses) ? t.accept_statuses.filter(e => typeof e == "string") : [])
  };
}
function U(s) {
  if (typeof s == "string" && D.has(s)) {
    return s;
  } else {
    return "unspecified";
  }
}
function L(s) {
  const t = s == null ? undefined : s.type;
  return t === "user" || t === "control_response";
}
function F(s) {
  var n;
  if (!a.isFeatureEnabled(M)) {
    return false;
  }
  const t = U(s.device_attestation_status);
  const e = P();
  const r = typeof ((n = s.payload) == null ? undefined : n.type) == "string" ? s.payload.type : "unknown";
  const i = l => {
    if (L(s.payload)) {
      a.logCoworkEvent("lam_bridge_event_attestation", {
        status: t,
        payload_type: r,
        action: l,
        enforce: e.enforce
      });
    }
  };
  if (A[e.acceptLevel].has(t)) {
    i("accept");
    return false;
  } else if (e.enforce) {
    if (e.acceptStatuses.has(t)) {
      i("accept_by_config");
      return false;
    } else {
      a.logger.warn(`${R} dropping event_id=${s.event_id} status=${t} payload_type=${r}`);
      i("drop");
      return true;
    }
  } else {
    if (t !== "unspecified") {
      i("accept_telemetry_only");
    }
    return false;
  }
}
const E = "[transport:sdk]";
function x(s) {
  const t = s.workSecret.api_base_url || s.apiHost;
  let e = null;
  let r;
  let i;
  let n = false;
  let l = false;
  return {
    async connect() {
      a.logger.info(`${E} attaching SDK bridge session ${s.sessionId} (apiBaseUrl=${t})`);
      let o;
      try {
        o = await b.mUe({
          sessionId: s.sessionId,
          ingressToken: s.getAuthToken(),
          apiBaseUrl: t,
          onInboundMessage: c => {
            if (r != null) {
              r(JSON.stringify(c));
            }
          },
          onPermissionResponse: c => {
            if (r != null) {
              r(JSON.stringify(c));
            }
          },
          onClose: c => {
            if (!n) {
              n = true;
              if (l) {
                if (i != null) {
                  i(c);
                }
              }
            }
          }
        });
      } catch (c) {
        n = true;
        const u = c instanceof Error ? c.message : String(c);
        throw /\b401\b/.test(u) || /authentication/i.test(u) ? new Error(`registerWorker: HTTP 401 (SDK) ${u}`) : c;
      }
      if (n) {
        o.close();
        throw new Error("transport closed during attachBridgeSession");
      }
      e = o;
      l = true;
      a.logger.info(`${E} attached; handle ready for writes (sessionId=${s.sessionId})`);
    },
    async write(o) {
      if (!l) {
        throw new Error("write() before transport initialized");
      }
      if (n || !e) {
        return {
          ok: false
        };
      }
      const c = o;
      if (c.type === "control_request") {
        e.sendControlRequest(o);
      } else if (c.type === "control_response") {
        e.sendControlResponse(o);
      } else {
        e.write(o);
      }
      return {
        ok: true
      };
    },
    close() {
      n = true;
      if (e != null) {
        e.close();
      }
      e = null;
    },
    async reconnectTransport(o) {
      var h;
      if (!e || n) {
        return;
      }
      const c = (h = e.getEpoch) == null ? undefined : h.call(e);
      const u = {
        ...o,
        epoch: c
      };
      try {
        await e.reconnectTransport(u);
      } catch (f) {
        n = true;
        e = null;
        if (l) {
          if (i != null) {
            i(4093);
          }
        }
        throw f;
      }
    },
    isConnectedStatus() {
      return e !== null && !n;
    },
    setOnData(o) {
      r = o;
    },
    setOnClose(o) {
      i = o;
    },
    reportState(o) {
      if (e != null) {
        e.reportState(o);
      }
    },
    reportMetadata(o) {
      if (!n && e != null) {
        e.reportMetadata(o);
      }
    },
    reportDelivery(o, c) {
      if (!n && e != null) {
        e.reportDelivery(o, c);
      }
    },
    flush() {
      return (e == null ? undefined : e.flush()) ?? Promise.resolve();
    }
  };
}
const d = "[transport:sse]";
const B = 1000;
const z = 30000;
const H = 600000;
const j = 45000;
const G = new Set([401, 403, 404]);
function K(s) {
  const t = [];
  let e = s;
  let r;
  while ((r = e.indexOf(`

`)) !== -1) {
    const i = e.slice(0, r);
    e = e.slice(r + 2);
    if (!i.trim()) {
      continue;
    }
    const n = {};
    let l = false;
    for (const o of i.split(`
`)) {
      if (o.startsWith(":")) {
        l = true;
        continue;
      }
      const c = o.indexOf(":");
      if (c === -1) {
        continue;
      }
      const u = o.slice(0, c);
      const h = o[c + 1] === " " ? o.slice(c + 2) : o.slice(c + 1);
      switch (u) {
        case "event":
          n.event = h;
          break;
        case "id":
          n.id = h;
          break;
        case "data":
          n.data = n.data ? `${n.data}
${h}` : h;
          break;
      }
    }
    if (n.data || l) {
      t.push(n);
    }
  }
  return {
    frames: t,
    remaining: e
  };
}
class V {
  constructor(t, e, r) {
    this.url = t;
    this.getAuthToken = e;
    this.sessionId = r;
    this.state = "idle";
    this.abortController = null;
    this.lastSequenceNum = 0;
    this.seenSequenceNums = new Set();
    this.reconnectAttempts = 0;
    this.reconnectStartTime = null;
    this.reconnectTimer = null;
    this.livenessTimer = null;
    a.logger.info(`${d} SSE URL = ${t.href}`);
  }
  async connect() {
    var n;
    if (this.state !== "idle" && this.state !== "reconnecting") {
      a.logger.error(`${d} Cannot connect, current state is ${this.state}`);
      return;
    }
    this.state = "reconnecting";
    const t = new URL(this.url.href);
    if (this.lastSequenceNum > 0) {
      t.searchParams.set("from_sequence_num", String(this.lastSequenceNum));
    }
    const r = {
      Authorization: `Bearer ${this.getAuthToken()}`,
      Accept: "text/event-stream",
      "anthropic-version": "2023-06-01"
    };
    if (this.lastSequenceNum > 0) {
      r["Last-Event-ID"] = String(this.lastSequenceNum);
    }
    a.logger.info(`${d} Opening stream${this.sessionId ? ` session=${this.sessionId}` : ""}${this.lastSequenceNum > 0 ? ` from_seq=${this.lastSequenceNum}` : ""}`);
    this.abortController = new AbortController();
    const i = this.abortController.signal;
    try {
      const l = await _.net.fetch(t.href, {
        headers: r,
        signal: i
      });
      if (!l.ok) {
        const o = G.has(l.status);
        a.logger.error(`${d} HTTP ${l.status}${o ? " (permanent)" : ""}`);
        if (o) {
          this.state = "closed";
          if ((n = this.onCloseCallback) != null) {
            n.call(this);
          }
          return;
        }
        this.handleConnectionError();
        return;
      }
      if (!l.body) {
        a.logger.error(`${d} No response body`);
        this.handleConnectionError();
        return;
      }
      if (i.aborted) {
        return;
      }
      a.logger.info(`${d} Connected`);
      this.state = "connected";
      this.reconnectAttempts = 0;
      this.reconnectStartTime = null;
      this.resetLivenessTimer();
      await this.readStream(l.body);
    } catch (l) {
      if (i.aborted) {
        return;
      }
      a.logger.error(`${d} Connection error: ${l instanceof Error ? l.message : String(l)}`);
      this.handleConnectionError();
    }
  }
  async readStream(t) {
    var l;
    const e = (l = this.abortController) == null ? undefined : l.signal;
    const r = t.getReader();
    const i = new TextDecoder();
    let n = "";
    try {
      while (true) {
        const {
          done: o,
          value: c
        } = await r.read();
        if (o) {
          break;
        }
        n += i.decode(c, {
          stream: true
        });
        const {
          frames: u,
          remaining: h
        } = K(n);
        n = h;
        for (const f of u) {
          this.resetLivenessTimer();
          if (f.id) {
            const m = parseInt(f.id, 10);
            if (!isNaN(m)) {
              if (this.seenSequenceNums.has(m)) {
                a.logger.warn(`${d} DUPLICATE frame seq=${m} (lastSequenceNum=${this.lastSequenceNum}, seenCount=${this.seenSequenceNums.size}) — skipped`);
                continue;
              } else {
                this.seenSequenceNums.add(m);
                if (this.seenSequenceNums.size > 1000) {
                  const $ = this.lastSequenceNum - 200;
                  for (const v of this.seenSequenceNums) {
                    if (v < $) {
                      this.seenSequenceNums.delete(v);
                    }
                  }
                }
              }
              if (m > this.lastSequenceNum) {
                this.lastSequenceNum = m;
              }
            }
          }
          if (f.event && f.data) {
            this.handleSSEFrame(f.event, f.data);
          } else if (f.data) {
            a.logger.warn(`${d} Frame has data: but no event: field — dropped`);
          }
        }
      }
    } catch (o) {
      if (e != null && e.aborted) {
        return;
      }
      a.logger.error(`${d} Stream read error: ${o instanceof Error ? o.message : String(o)}`);
    } finally {
      r.releaseLock();
    }
    if (e == null || !e.aborted) {
      if (this.state !== "closing" && this.state !== "closed") {
        a.logger.info(`${d} Stream ended, reconnecting`);
        this.handleConnectionError();
      }
    }
  }
  handleSSEFrame(t, e) {
    var n;
    var l;
    var o;
    if (t !== "client_event") {
      a.logger.warn(`${d} Unexpected SSE event type '${t}' on worker stream`);
      return;
    }
    let r;
    try {
      r = JSON.parse(e);
    } catch (c) {
      a.logger.error(`${d} Failed to parse client_event data: ${c instanceof Error ? c.message : String(c)}`);
      return;
    }
    if ((n = this.onEventCallback) != null) {
      n.call(this, r);
    }
    if ((l = this.eventFilter) != null && l.call(this, r)) {
      a.logger.info(`${d} Event seq=${r.sequence_num} event_id=${r.event_id} dropped by filter (attestation=${r.device_attestation_status ?? "unspecified"})`);
      return;
    }
    const i = r.payload;
    if (i && typeof i == "object" && "type" in i) {
      a.logger.info(`${d} Event seq=${r.sequence_num} event_id=${r.event_id} payload_type=${String(i.type)} attestation=${r.device_attestation_status ?? "unspecified"}${this.sessionId ? ` session=${this.sessionId}` : ""}`);
      if ((o = this.onData) != null) {
        o.call(this, `${JSON.stringify(i)}
`);
      }
    } else {
      a.logger.info(`${d} Ignoring client_event with no type in payload: event_id=${r.event_id}`);
    }
  }
  handleConnectionError() {
    var r;
    var i;
    this.clearLivenessTimer();
    if (this.state === "closing" || this.state === "closed") {
      return;
    }
    if ((r = this.abortController) != null) {
      r.abort();
    }
    this.abortController = null;
    const t = Date.now();
    this.reconnectStartTime ||= t;
    const e = t - this.reconnectStartTime;
    if (e < H) {
      if (this.reconnectTimer) {
        clearTimeout(this.reconnectTimer);
        this.reconnectTimer = null;
      }
      this.state = "reconnecting";
      this.reconnectAttempts++;
      const n = Math.min(B * Math.pow(2, this.reconnectAttempts - 1), z);
      const l = Math.max(0, n + n * 0.25 * (Math.random() * 2 - 1));
      a.logger.info(`${d} Reconnecting in ${Math.round(l)}ms (attempt ${this.reconnectAttempts}, ${Math.round(e / 1000)}s elapsed)`);
      this.reconnectTimer = setTimeout(() => {
        this.reconnectTimer = null;
        this.connect();
      }, l);
    } else {
      a.logger.error(`${d} Reconnection time budget exhausted after ${Math.round(e / 1000)}s`);
      this.state = "closed";
      if ((i = this.onCloseCallback) != null) {
        i.call(this);
      }
    }
  }
  resetLivenessTimer() {
    this.clearLivenessTimer();
    this.livenessTimer = setTimeout(() => {
      var t;
      this.livenessTimer = null;
      a.logger.error(`${d} Liveness timeout, reconnecting`);
      if ((t = this.abortController) != null) {
        t.abort();
      }
      this.handleConnectionError();
    }, j);
  }
  clearLivenessTimer() {
    if (this.livenessTimer) {
      clearTimeout(this.livenessTimer);
      this.livenessTimer = null;
    }
  }
  write(t) {
    return Promise.reject(new Error("SSETransport.write() is not supported — use CCRClient.writeEvent"));
  }
  isConnectedStatus() {
    return this.state === "connected";
  }
  isClosedStatus() {
    return this.state === "closed";
  }
  setOnData(t) {
    this.onData = t;
  }
  setOnClose(t) {
    this.onCloseCallback = t;
  }
  setOnEvent(t) {
    this.onEventCallback = t;
  }
  setEventFilter(t) {
    this.eventFilter = t;
  }
  close() {
    var t;
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
    this.clearLivenessTimer();
    this.state = "closing";
    if ((t = this.abortController) != null) {
      t.abort();
    }
    this.abortController = null;
  }
}
const g = "[transport:bridge]";
const W = "583857784";
const J = 4090;
async function X(s) {
  if (a.isFeatureEnabled(W)) {
    a.logger.info(`${g} gate on — using SDK adapter for session ${s.sessionId}`);
    return x(s);
  }
  const t = s.workSecret.api_base_url || s.apiHost;
  const e = Y(t, s.sessionId);
  a.logger.info(`${g} CCR transport for session ${s.sessionId} (sessionUrl=${e})`);
  const r = await a.registerWorker(e, s.getAuthToken);
  a.logger.info(`${g} registered worker sessionId=${s.sessionId} epoch=${r}`);
  const i = new URL(e);
  i.pathname = i.pathname.replace(/\/$/, "") + "/worker/events/stream";
  const n = new V(i, s.getAuthToken, s.sessionId);
  n.setEventFilter(F);
  let l;
  let o = false;
  let c = false;
  const u = new I(n, new URL(e), {
    getAuthToken: s.getAuthToken,
    onEpochMismatch: () => {
      if (c) {
        throw new Error("epoch superseded");
      }
      c = true;
      a.logger.info(`${g} epoch superseded (409) — closing for poll-loop recovery`);
      try {
        u.close();
        n.close();
        if (l != null) {
          l(J);
        }
      } catch (h) {
        a.logger.error(`${g} error during epoch-mismatch cleanup: ${h instanceof Error ? h.message : String(h)}`);
      }
      throw new Error("epoch superseded");
    }
  });
  return {
    async write(h) {
      if (c) {
        return {
          ok: false
        };
      } else {
        await u.writeEvent(h);
        return {
          ok: true
        };
      }
    },
    close() {
      c = true;
      u.close();
      n.close();
    },
    async connect() {
      n.connect();
      try {
        await u.initialize(r);
      } catch (h) {
        if (!c) {
          a.logger.error(`${g} CCR initialize failed: ${h instanceof Error ? h.message : String(h)}`);
          c = true;
          u.close();
          n.close();
        }
        throw h;
      }
      o = true;
      a.logger.info(`${g} transport ready for writes (epoch=${r}, sse=${n.isConnectedStatus() ? "open" : "opening"})`);
    },
    isConnectedStatus() {
      return o && !c;
    },
    setOnData(h) {
      n.setOnData(h);
    },
    setOnClose(h) {
      l = h;
      n.setOnClose(f => {
        if (!c) {
          c = true;
          u.close();
          if (o) {
            h(f);
          }
        }
      });
    },
    reportState(h, f) {
      u.reportState(h, f);
    },
    reportMetadata(h) {
      if (!c) {
        u.reportMetadata(h);
      }
    },
    reportDelivery(h, f) {
      if (!c) {
        u.reportDelivery(h, f);
      }
    },
    flush() {
      return u.flushEvents();
    }
  };
}
function Y(s, t) {
  return `${s.replace(/\/+$/, "")}/v1/code/sessions/${encodeURIComponent(t)}`;
}
exports.createBridgeTransport = X;
//# sourceMappingURL=index.chunk-BPLNVhkV.js.map