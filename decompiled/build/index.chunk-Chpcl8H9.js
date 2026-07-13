"use strict";

(function () {
  try {
    var d = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    d.SENTRY_RELEASE = {
      id: "df1d8a339dfabcf359af7144fe142b59ff7d9a0f"
    };
  } catch {}
})();
try {
  (function () {
    var d = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    var c = new d.Error().stack;
    if (c) {
      d._sentryDebugIds = d._sentryDebugIds || {};
      d._sentryDebugIds[c] = "f7babcd2-9ed1-4727-b9df-86e425b0683c";
      d._sentryDebugIdIdentifier = "sentry-dbid-f7babcd2-9ed1-4727-b9df-86e425b0683c";
    }
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
const s = require("./index.chunk-c42vKsva.js");
const H = require("electron");
const T = require("./index.chunk-Cp81FYE3.js");
const q = "[remote-cu]";
const E = "computer_resolve_access";
const R = s.REMOTE_DEVICES_COMPUTER_REQUEST_ACCESS;
const D = s.REMOTE_DEVICES_COMPUTER_RELEASE_LOCK;
const N = 10;
const k = 50;
const X = 600000;
const re = X + 120000;
const ie = 60000;
const ne = 240000;
const ae = 3600000;
const V = 5000;
const z = 5000;
let F = 0;
let U;
const de = new Set(["request_access", "request_teach_access", "teach_step", "teach_batch"]);
const le = ["request_access", "left_click_drag", "left_click", "double_click", "triple_click", "right_click", "middle_click", "mouse_move", "open_application", "switch_display", "list_granted_applications", "read_clipboard", "write_clipboard", "cursor_position", "hold_key", "left_mouse_down", "left_mouse_up"];
const ce = new RegExp(`\\b(${le.join("|")})\\b`, "g");
const pe = "Another Claude session is currently using this computer. Wait for it to finish (the user can stop it from the Claude window on that machine), or find a non-computer-use approach.";
const C = 921600;
const J = 0.5;
const ue = [70, 50, 35];
function O(d) {
  try {
    return Buffer.byteLength(JSON.stringify(d), "utf8");
  } catch {
    return Number.MAX_SAFE_INTEGER;
  }
}
function W(d, c = Math.floor(C * J)) {
  let p = c;
  let g = false;
  const _ = d.content.map(S => {
    if (S.type !== "text" || typeof S.text != "string") {
      return S;
    }
    const A = Math.min(262144, Math.max(p, 0));
    const I = Buffer.byteLength(S.text, "utf8");
    if (I <= A) {
      p -= I;
      return S;
    }
    g = true;
    const M = Buffer.from(S.text, "utf8").subarray(0, Math.max(A - 128, 0)).toString("utf8").replace(/�+$/, "");
    p -= Buffer.byteLength(M, "utf8");
    return {
      ...S,
      text: `${M}
…[truncated: content too large for the device bridge]`
    };
  });
  if (g) {
    return {
      ...d,
      content: _
    };
  } else {
    return d;
  }
}
function B(d) {
  if (O(d) <= C) {
    return d;
  }
  let c = W(d);
  if (O(c) <= C) {
    return c;
  }
  const y = new Map();
  c.content.forEach((p, g) => {
    if (p.type === "image" && typeof p.data == "string") {
      try {
        const _ = H.nativeImage.createFromBuffer(Buffer.from(p.data, "base64"));
        if (!_.isEmpty()) {
          y.set(g, _);
        }
      } catch {}
    }
  });
  for (const p of ue) {
    c = {
      ...c,
      content: c.content.map((g, _) => {
        if (g.type !== "image" || typeof g.data != "string") {
          return g;
        }
        const S = y.get(_);
        if (!S) {
          return g;
        }
        try {
          const A = S.toJPEG(p).toString("base64");
          if (A.length < g.data.length) {
            return {
              ...g,
              data: A,
              mimeType: "image/jpeg"
            };
          } else {
            return g;
          }
        } catch {
          return g;
        }
      })
    };
    if (O(c) <= C) {
      s.logger.info(`${q} screenshot recompressed to quality ${p} to fit bridge frame budget`);
      return c;
    }
  }
  if (y.size === 0) {
    let p = Math.floor(C * J);
    while (O(c) > C && p >= 256) {
      p = Math.floor(p / 2);
      c = W(d, p);
    }
    return c;
  }
  return {
    ...c,
    content: c.content.map((p, g) => y.has(g) ? {
      type: "text",
      text: "Screenshot was too large to send over the device bridge even after recompression. Use the computer_zoom tool on a smaller region instead."
    } : p),
    isError: d.isError ?? false
  };
}
function Q(d) {
  if (d.startsWith(s.REMOTE_DEVICES_COMPUTER_TOOL_PREFIX)) {
    return d;
  } else {
    return `${s.REMOTE_DEVICES_COMPUTER_TOOL_PREFIX}${d}`;
  }
}
function Y(d) {
  return d.replace(ce, c => c === "request_access" ? R : Q(c));
}
function Z(d, c) {
  const y = g => typeof g == "number" && g > k;
  const p = `The remote bridge times tool calls out at 60s; cap wait/hold_key duration to ${k}s. Split longer waits across multiple calls.`;
  if ((d === "wait" || d === "hold_key") && y(c.duration)) {
    return p;
  }
  if (d === "computer_batch" && Array.isArray(c.actions)) {
    let g = 0;
    for (const _ of c.actions) {
      if (_ !== null && typeof _ == "object" && "action" in _ && (_.action === "wait" || _.action === "hold_key") && "duration" in _ && typeof _.duration == "number") {
        if (_.duration > k) {
          return p;
        }
        g += _.duration;
      }
    }
    if (g > k) {
      return `The remote bridge times tool calls out at 60s; total wait/hold_key duration across batch actions is ${g.toFixed(1)}s. Cap the total to ${k}s or split across multiple calls.`;
    }
  }
}
const fe = s.objectType({
  apps: s.arrayType(s.stringType().min(1)).min(1).max(32),
  clipboardRead: s.booleanType().optional(),
  clipboardWrite: s.booleanType().optional(),
  systemKeyCombos: s.booleanType().optional()
});
const he = s.objectType({
  bundleId: s.stringType().min(1),
  displayName: s.stringType().min(1),
  tier: s.stringType().min(1),
  isSentinel: s.booleanType().optional()
});
const ge = s.objectType({
  apps: s.arrayType(he).min(1).max(32),
  reason: s.stringType().min(1),
  clipboardRead: s.booleanType().optional(),
  clipboardWrite: s.booleanType().optional(),
  systemKeyCombos: s.booleanType().optional(),
  willHide: s.arrayType(s.objectType({
    bundleId: s.stringType(),
    displayName: s.stringType()
  }).passthrough()).optional().catch([]),
  screenshotFiltering: s.enumType(["native", "mask"]).optional().catch(undefined)
});
function K(d, c, y) {
  const p = d.resolutionCache.get(c);
  if (p !== undefined && y - p.resolvedAt <= X) {
    return p;
  } else {
    return undefined;
  }
}
function w(d, c = false) {
  return {
    content: [{
      type: "text",
      text: d
    }],
    isError: c
  };
}
function j(d) {
  return {
    content: [{
      type: "text",
      text: JSON.stringify(d, null, 2)
    }]
  };
}
function me(d, c) {
  const y = new Map();
  let p;
  const g = e => {
    const a = s.getChicagoDispatchCuGrantTtlMs();
    const t = Date.now() - a;
    if (e.apps.some(i => i.grantedAt < t)) {
      e.apps = e.apps.filter(i => i.grantedAt >= t);
    }
    if (e.flagsGrantedAt !== undefined && e.flagsGrantedAt < t) {
      e.flags = {
        ...T.DEFAULT_GRANT_FLAGS
      };
      e.flagsGrantedAt = undefined;
    }
    return e.apps;
  };
  const _ = (e, a, t) => {
    if (a.hiddenDuringTurn.size > 0) {
      const i = [...a.hiddenDuringTurn];
      a.hiddenPendingNote = [];
      if (s.getAppPreference("chicagoAutoUnhide")) {
        s.unhideComputerUseApps(i).then(() => {
          for (const o of i) {
            a.hiddenDuringTurn.delete(o);
          }
        }, o => s.logger.warn(`${q} unhide failed (will retry): ${String(o)}`));
      } else {
        a.hiddenDuringTurn.clear();
      }
    }
    if (a.clipboardStash !== undefined) {
      const i = a.clipboardStash;
      a.clipboardStash = undefined;
      try {
        H.clipboard.writeText(i);
      } catch (o) {
        s.logger.warn(`${q} clipboard restore failed: ${String(o)}`);
      }
    }
    if (s.cuLock.currentHolder === e) {
      s.cuLock.release(e);
      s.logCoworkEvent("cu_lock_released", {
        session_id: e,
        session_type: "cowork-remote",
        held_duration_ms: a.lockAcquiredAt ? Date.now() - a.lockAcquiredAt : 0,
        release_trigger: t === "renderer" ? "remote_renderer" : t === "idle" ? "remote_idle_sweep" : t === "wedge" ? "remote_wedge" : "remote_dispose",
        was_teach_mode: false
      });
      a.lockAcquiredAt = undefined;
    }
    s.cuLock.release(e);
  };
  const S = (e, a) => {
    const t = a === "esc" || a === "stop_click";
    if (a === "stop_click" && (e === undefined || e === U)) {
      F = 0;
      U = undefined;
    }
    if (t && e !== undefined) {
      const u = y.get(e);
      if (u) {
        u.stoppedAt = Date.now();
      }
    }
    const i = s.cuLock.currentHolder;
    if (!i || e !== undefined && i !== e) {
      return false;
    }
    const o = y.get(i);
    if (o) {
      if (a === "esc") {
        F = Date.now() + V;
        U = i;
      }
      if (t && e === undefined) {
        o.stoppedAt = Date.now();
      }
      if (o.inFlightSince !== undefined) {
        o.abortRequested = true;
        return true;
      } else {
        _(i, o, "renderer");
        return true;
      }
    } else {
      return false;
    }
  };
  const A = () => {
    const e = Date.now();
    for (const [a, t] of y) {
      const i = e - t.lastCallAt;
      const o = t.inFlightSince !== undefined && e - t.inFlightSince > ne;
      if (t.inFlightSince === undefined || !!o) {
        if (o || i > re) {
          if (o) {
            t.abortRequested = true;
            t.stoppedAt = Date.now();
          }
          _(a, t, o ? "wedge" : "idle");
        }
        if (i > ae) {
          s.cuLock.forgetSession(a);
          y.delete(a);
        }
      }
    }
    if (y.size === 0 && p) {
      clearInterval(p);
      p = undefined;
    }
  };
  const I = e => {
    const a = y.get(e);
    if (a) {
      return a;
    }
    const t = {
      orgUuid: c == null ? undefined : c(),
      apps: [],
      flags: {
        ...T.DEFAULT_GRANT_FLAGS
      },
      selectedDisplayId: undefined,
      displayPinnedByModel: false,
      displayResolvedForApps: undefined,
      lastScreenshotDims: undefined,
      hiddenDuringTurn: new Set(),
      hiddenPendingNote: [],
      clipboardStash: undefined,
      resolutionCache: new Map(),
      flagsGrantedAt: undefined,
      pendingApproved: undefined,
      inFlightSince: undefined,
      dispatchMutex: Promise.resolve(),
      lastCallAt: Date.now(),
      lockAcquiredAt: undefined,
      abortRequested: false,
      stoppedAt: undefined,
      dispatcher: undefined
    };
    const i = async o => {
      var l;
      const u = () => ({
        granted: [],
        denied: o.apps.map(r => {
          var n;
          return {
            bundleId: ((n = r.resolved) == null ? undefined : n.bundleId) ?? r.requestedName,
            reason: "user_denied"
          };
        }),
        flags: t.flags
      });
      if (o.tccState || o.featureDisabled) {
        return u();
      }
      const f = t.pendingApproved;
      if (!f) {
        s.logger.warn(`${q} permission request outside request_access dispatch — denying`);
        return u();
      }
      const m = Date.now();
      const b = [];
      const v = [];
      for (const r of o.apps) {
        const n = r.resolved ? t.resolutionCache.get(r.resolved.bundleId) : undefined;
        if (r.resolved && f.bundleIds.has(r.resolved.bundleId) && (n == null ? undefined : n.tier) === r.proposedTier) {
          b.push({
            bundleId: r.resolved.bundleId,
            displayName: r.resolved.displayName,
            grantedAt: m,
            tier: r.proposedTier
          });
        } else {
          v.push({
            bundleId: ((l = r.resolved) == null ? undefined : l.bundleId) ?? r.requestedName,
            reason: "user_denied"
          });
        }
      }
      const h = {
        ...T.DEFAULT_GRANT_FLAGS,
        ...t.flags
      };
      if (f.flags.clipboardRead === true) {
        h.clipboardRead = true;
      }
      if (f.flags.clipboardWrite === true) {
        h.clipboardWrite = true;
      }
      if (f.flags.systemKeyCombos === true) {
        h.systemKeyCombos = true;
      }
      return {
        granted: b,
        denied: v,
        flags: h
      };
    };
    t.dispatcher = T.bindSessionContext(s.getComputerUseHostAdapter(), s.getChicagoCoordinateMode(), {
      skipFirstRequestWarnings: true,
      getAllowedApps: () => g(t),
      getGrantFlags: () => t.flags,
      getUserDeniedBundleIds: () => s.getAppPreference("chicagoUserDeniedBundleIds"),
      getSelectedDisplayId: () => t.selectedDisplayId,
      getDisplayPinnedByModel: () => t.displayPinnedByModel,
      getDisplayResolvedForApps: () => t.displayResolvedForApps,
      getLastScreenshotDims: () => t.lastScreenshotDims,
      onPermissionRequest: i,
      onAllowedAppsChanged: (o, u) => {
        t.apps = [...o];
        t.flags = u;
        t.flagsGrantedAt = Date.now();
      },
      onAppsHidden: o => {
        for (const u of o) {
          t.hiddenDuringTurn.add(u);
        }
        t.hiddenPendingNote.push(...o);
      },
      getHiddenPendingNote: () => t.hiddenPendingNote,
      drainHiddenPendingNote: () => {
        t.hiddenPendingNote = [];
      },
      getClipboardStash: () => t.clipboardStash,
      onClipboardStashChanged: o => {
        t.clipboardStash = o;
      },
      onResolvedDisplayUpdated: o => {
        t.selectedDisplayId = o;
        t.displayPinnedByModel = false;
        t.displayResolvedForApps = undefined;
        if (d != null) {
          d(e, o);
        }
      },
      onDisplayPinned: o => {
        t.selectedDisplayId = o;
        t.displayPinnedByModel = o !== undefined;
        if (o === undefined) {
          t.displayResolvedForApps = undefined;
        }
        if (d != null) {
          d(e, o);
        }
      },
      onDisplayResolvedForApps: o => {
        t.displayResolvedForApps = o;
      },
      onScreenshotCaptured: o => {
        t.lastScreenshotDims = o;
      },
      checkCuLock: async () => s.cuLock.check(e),
      acquireCuLock: async () => {
        if (s.cuLock.acquire(e)) {
          t.lockAcquiredAt = Date.now();
          t.abortRequested = false;
          s.logCoworkEvent("cu_lock_acquired", {
            session_id: e,
            session_type: "cowork-remote"
          });
        }
      },
      formatLockHeldMessage: () => pe,
      isAborted: () => t.abortRequested || s.cuLock.currentHolder !== e
    });
    y.set(e, t);
    p ??= setInterval(A, ie);
    return t;
  };
  const x = () => {
    if (!s.isFeatureEnabled("4293378213")) {
      return w("Computer use over the device bridge is disabled on this device.", true);
    }
    if (!s.isComputerUseEnabled()) {
      return w("Computer use is not enabled on this device. Ask the user to enable it in the Claude desktop app on that computer (Settings → Computer use), then retry.", true);
    }
  };
  const M = async (e, a) => {
    var l;
    const t = fe.safeParse(a);
    if (!t.success) {
      return w(`Invalid arguments: ${((l = t.error.issues[0]) == null ? undefined : l.message) ?? "bad args"}. Pass {"apps": ["Name", …]}.`, true);
    }
    if (t.data.apps.length > N) {
      return w(`Request at most ${N} apps per call (got ${t.data.apps.length}). Split into separate calls if you genuinely need more.`, true);
    }
    const i = s.getComputerUseHostAdapter();
    const o = await i.ensureOsPermissions();
    if (!o.granted) {
      const r = [...(o.accessibility ? [] : ["Accessibility"]), ...(o.screenRecording ? [] : ["Screen Recording"])].join(" and ");
      return w(`Computer use needs macOS ${r} permission(s) granted to the Claude desktop app on this device. Ask the user to finish setup in the desktop app on that computer, then retry. Do not retry before the user confirms.`, true);
    }
    const u = await T.buildAccessRequest(i, t.data.apps, g(e), new Set(s.getAppPreference("chicagoUserDeniedBundleIds")), e.selectedDisplayId, false);
    const f = Date.now();
    const m = u.needDialog.flatMap(r => r.resolved ? [{
      bundleId: r.resolved.bundleId,
      displayName: r.resolved.displayName,
      tier: r.proposedTier,
      isSentinel: r.isSentinel === true
    }] : []);
    const b = {
      clipboardRead: t.data.clipboardRead === true,
      clipboardWrite: t.data.clipboardWrite === true,
      systemKeyCombos: t.data.systemKeyCombos === true
    };
    const v = new Set(m.map(r => T.getDeniedCategoryForApp(r.bundleId, r.displayName)).filter(r => r === "browser" || r === "terminal"));
    const h = v.size > 0 ? [v.has("terminal") ? "Terminals and IDEs can only be granted in 'click' mode — you can see and left-click, but cannot type, press keys, or paste. To run shell commands use the Bash tool instead." : null, v.has("browser") ? "Browsers can only be granted in 'read' mode — you can see what is on screen but cannot interact. For navigation, clicking, or typing on the web use the Claude in Chrome extension instead." : null, `If you still need this restricted access, proceed with ${R} — the user approves once.`].filter(Boolean).join(" ") : undefined;
    for (const r of m) {
      e.resolutionCache.set(r.bundleId, {
        displayName: r.displayName,
        tier: r.tier,
        isSentinel: r.isSentinel === true,
        flags: b,
        resolvedAt: f
      });
    }
    for (const r of u.skipDialogGrants) {
      const n = e.resolutionCache.get(r.bundleId);
      e.resolutionCache.set(r.bundleId, {
        displayName: r.displayName,
        tier: r.tier ?? "full",
        isSentinel: (n == null ? undefined : n.isSentinel) === true,
        flags: {
          clipboardRead: b.clipboardRead || (n == null ? undefined : n.flags.clipboardRead) === true,
          clipboardWrite: b.clipboardWrite || (n == null ? undefined : n.flags.clipboardWrite) === true,
          systemKeyCombos: b.systemKeyCombos || (n == null ? undefined : n.flags.systemKeyCombos) === true
        },
        resolvedAt: f
      });
    }
    return j({
      apps: m,
      alreadyGranted: u.skipDialogGrants.map(r => ({
        bundleId: r.bundleId,
        displayName: r.displayName,
        tier: r.tier
      })),
      ...(u.notInstalled.length > 0 && {
        notInstalled: u.notInstalled
      }),
      ...(u.policyDenied.length > 0 && {
        policyDenied: u.policyDenied
      }),
      ...(u.userDenied.length > 0 && {
        userDenied: u.userDenied
      }),
      ...(u.willHide.length > 0 && {
        willHide: u.willHide
      }),
      screenshotFiltering: i.executor.capabilities.screenshotFiltering,
      ...(h && {
        restrictedTierNote: h
      }),
      guidance: m.length > 0 ? `Call ${R} with the \`apps\` entries above (and \`willHide\` / \`screenshotFiltering\`, if present) passed verbatim within 10 minutes, plus a one-sentence reason. The user will be asked to approve.${h ? " See restrictedTierNote above first." : ""}` : u.skipDialogGrants.length > 0 ? "All requested apps are already granted — you can use the other computer tools directly." : u.notInstalled.length > 0 ? `Some requested names are not installed (see notInstalled). Re-call ${E} with only the installed names.` : "No requested app could be resolved on this device. Check policyDenied/userDenied above."
    });
  };
  const ee = async (e, a, t) => {
    var v;
    const i = ge.safeParse(a);
    if (!i.success) {
      return w(`Invalid arguments: ${((v = i.error.issues[0]) == null ? undefined : v.message) ?? "bad args"}. Pass the \`apps\` entries returned by ${E} verbatim.`, true);
    }
    const o = Date.now();
    const u = new Set();
    const f = [];
    for (const h of i.data.apps) {
      const l = K(e, h.bundleId, o);
      if (!l || l.displayName !== h.displayName || l.tier !== h.tier || l.isSentinel !== (h.isSentinel === true)) {
        f.push(h.bundleId);
      } else {
        u.add(h.bundleId);
      }
    }
    if (f.length > 0) {
      return w(`These entries were not resolved by this device recently, or were altered: ${f.join(", ")}. Call ${E} again and pass its \`apps\` entries verbatim.`, true);
    }
    const m = h => i.data.apps.some(l => {
      var r;
      return ((r = K(e, l.bundleId, o)) == null ? undefined : r.flags[h]) === true;
    });
    if (i.data.clipboardRead === true && !m("clipboardRead") || i.data.clipboardWrite === true && !m("clipboardWrite") || i.data.systemKeyCombos === true && !m("systemKeyCombos")) {
      return w(`Requested flags were not declared in the matching ${E} call. Re-resolve with the flags you need, then request again.`, true);
    }
    e.pendingApproved = {
      bundleIds: u,
      flags: {
        clipboardRead: i.data.clipboardRead,
        clipboardWrite: i.data.clipboardWrite,
        systemKeyCombos: i.data.systemKeyCombos
      }
    };
    try {
      const h = Date.now();
      let l;
      try {
        l = await e.dispatcher("request_access", {
          apps: [...u],
          reason: i.data.reason,
          ...(i.data.clipboardRead === true && {
            clipboardRead: true
          }),
          ...(i.data.clipboardWrite === true && {
            clipboardWrite: true
          }),
          ...(i.data.systemKeyCombos === true && {
            systemKeyCombos: true
          })
        });
      } catch (r) {
        t("request_access", true, {
          error_kind: "other"
        }, Date.now() - h);
        throw r;
      }
      t("request_access", l.isError ?? false, l.telemetry, Date.now() - h);
      return G(l);
    } finally {
      e.pendingApproved = undefined;
    }
  };
  const G = e => {
    const {
      screenshot: a,
      telemetry: t,
      ...i
    } = e;
    return B(i);
  };
  const $ = (() => {
    const e = T.buildComputerUseTools({
      ...s.PLATFORM_CAPABILITIES,
      teachMode: false
    }, s.getChicagoCoordinateMode());
    const a = `Seconds (0–${k}). The remote bridge times calls out at 60s; for longer waits, split across multiple calls.`;
    const t = m => {
      const b = {};
      for (const [v, h] of Object.entries(m)) {
        if (h === null || typeof h != "object") {
          b[v] = h;
          continue;
        }
        const l = h;
        if (v === "duration" && typeof l.description == "string") {
          b[v] = {
            ...l,
            description: a
          };
        } else if (l.items !== null && typeof l.items == "object" && "properties" in l.items && l.items.properties !== null && typeof l.items.properties == "object") {
          b[v] = {
            ...l,
            items: {
              ...l.items,
              properties: t(l.items.properties)
            }
          };
        } else {
          b[v] = h;
        }
      }
      return b;
    };
    const i = e.filter(m => !de.has(m.name)).map(m => ({
      name: Q(m.name),
      description: Y(m.description ?? ""),
      inputSchema: {
        type: m.inputSchema.type,
        properties: t(m.inputSchema.properties ?? {}),
        ...(Array.isArray(m.inputSchema.required) && {
          required: m.inputSchema.required
        })
      }
    }));
    const o = {
      name: E,
      description: `Resolve application names on this device before requesting computer-use access. Returns the desktop-verified identity (bundleId, displayName, tier) for each app, or correction hints for names that don't resolve. Must be called before ${R}; pass the returned \`apps\` entries to it verbatim. Resolving does not grant anything and does not prompt the user.`,
      inputSchema: {
        type: "object",
        properties: {
          apps: {
            type: "array",
            items: {
              type: "string"
            },
            maxItems: N,
            description: `Application display names (e.g. "Slack", "Calendar") or bundle identifiers (e.g. "com.tinyspeck.slackmacgap"). Resolved case-insensitively against installed apps. At most ${N} per call.`
          },
          clipboardRead: {
            type: "boolean",
            description: "Declare that the upcoming request will ask for clipboard read access. Flags not declared here are refused at request time."
          },
          clipboardWrite: {
            type: "boolean",
            description: "Declare that the upcoming request will ask for clipboard write access."
          },
          systemKeyCombos: {
            type: "boolean",
            description: "Declare that the upcoming request will ask for system-level key combos."
          }
        },
        required: ["apps"]
      }
    };
    const u = {
      name: R,
      _meta: {
        "anthropic/requiresUserInteraction": true
      },
      description: `Request user permission to control applications on this device for this session. \`apps\` MUST be entries returned by ${E}, passed verbatim — this device refuses entries it did not resolve, and refuses flags that were not declared in that resolve call. The user sees one approval listing all requested apps and allows or denies the whole set. Call again mid-session to add apps; previous grants remain.`,
      inputSchema: {
        type: "object",
        properties: {
          apps: {
            type: "array",
            items: {
              type: "object",
              properties: {
                bundleId: {
                  type: "string"
                },
                displayName: {
                  type: "string"
                },
                tier: {
                  type: "string"
                },
                isSentinel: {
                  type: "boolean"
                }
              },
              required: ["bundleId", "displayName", "tier", "isSentinel"],
              additionalProperties: false
            },
            description: `The \`apps\` entries from ${E}, verbatim.`
          },
          reason: {
            type: "string",
            description: "One-sentence explanation shown to the user in the approval dialog. Explain the task, not the mechanism."
          },
          clipboardRead: {
            type: "boolean",
            description: "Also request permission to read the user's clipboard."
          },
          clipboardWrite: {
            type: "boolean",
            description: "Also request permission to write the user's clipboard."
          },
          systemKeyCombos: {
            type: "boolean",
            description: "Also request permission to send system-level key combos."
          },
          willHide: {
            type: "array",
            items: {
              type: "object",
              properties: {
                bundleId: {
                  type: "string"
                },
                displayName: {
                  type: "string"
                }
              }
            },
            description: `The \`willHide\` value from ${E}, verbatim. Display-only.`
          },
          screenshotFiltering: {
            type: "string",
            enum: ["native", "mask"],
            description: `The \`screenshotFiltering\` value from ${E}, verbatim. Display-only.`
          }
        },
        required: ["apps", "reason"]
      }
    };
    return [o, u, {
      name: D,
      description: "Release this session's hold on the device's computer-use lock (restores hidden windows and the clipboard, drops the on-screen indicator). Call once at the end of a turn that used computer-use tools so other sessions can use the device immediately. Idempotent — no-op if this session is not the current holder. Never acquires.",
      inputSchema: {
        type: "object",
        properties: {}
      }
    }, ...i];
  })();
  const te = new Set($.map(e => e.name));
  const oe = new Map($.filter(e => e.name !== E && e.name !== R && e.name !== D).map(e => [e.name, e.name === "computer_batch" ? "computer_batch" : e.name.slice(s.REMOTE_DEVICES_COMPUTER_TOOL_PREFIX.length)]));
  return {
    tools: $,
    handleCall: async (e, a, t) => {
      const i = Date.now();
      const o = l => {
        s.logCoworkEvent("lam_mcp_tool_call_completed", {
          server_name: "remote-devices",
          server_type: "internal",
          tool_name: e,
          is_error: l,
          duration_ms: Date.now() - i
        });
      };
      const u = e === D ? undefined : x();
      if (u) {
        o(true);
        return u;
      }
      if (!te.has(e)) {
        o(true);
        return w(`Unknown tool: ${e}`, true);
      }
      if (!t) {
        o(true);
        return w("Computer-use tools require a server-asserted session id, which the remote-devices bridge did not supply. Retrying will not help — ask the user to report this.", true);
      }
      const f = I(t);
      const m = s.getChicagoCoordinateMode();
      const b = (l, r, n, P) => {
        s.logCoworkEvent("cu_tool_call", {
          session_id: t,
          session_type: "cowork-remote",
          tool_name: l,
          is_error: r,
          error_kind: n == null ? undefined : n.error_kind,
          duration_ms: P,
          is_teach_mode: false,
          coordinate_mode: m,
          granted_count: n == null ? undefined : n.granted_count,
          denied_count: n == null ? undefined : n.denied_count,
          denied_browser_count: n == null ? undefined : n.denied_browser_count,
          denied_terminal_count: n == null ? undefined : n.denied_terminal_count
        });
      };
      f.lastCallAt = Date.now();
      const v = f.dispatchMutex;
      let h;
      f.dispatchMutex = new Promise(l => {
        h = l;
      });
      await v;
      f.inFlightSince = Date.now();
      try {
        if (e !== E && e !== D && Date.now() < F) {
          o(true);
          return w("Computer use is paused briefly after a user-initiated interrupt (ESC). The cloud session has been sent an interrupt; wait a few seconds before retrying.", true);
        }
        let r;
        if (e === E) {
          const n = await M(f, a);
          b("resolve_access", n.isError ?? false, undefined, Date.now() - i);
          r = B(n);
        } else if (e === R) {
          r = await ee(f, a, b);
          if (!r.isError) {
            f.stoppedAt = undefined;
            f.abortRequested = false;
          }
        } else if (e === D) {
          const n = S(t, "tool");
          b("release_lock", !n, undefined, Date.now() - i);
          r = j({
            released: n
          });
        } else {
          const n = oe.get(e);
          if (!n) {
            return w(`Unknown tool: ${e}`, true);
          }
          if (f.abortRequested) {
            f.abortRequested = false;
            b(n, true, {
              error_kind: "other"
            }, Date.now() - i);
            o(true);
            return w("A prior computer-use call wedged and was force-released; this queued call is refused. Retry.", true);
          }
          if (f.stoppedAt !== undefined && Date.now() - f.stoppedAt < z) {
            b(n, true, {
              error_kind: "other"
            }, Date.now() - i);
            o(true);
            return w("This session was stopped <5s ago — pipelined calls are refused so a queued action can't fire after the user clicked Stop. Re-request access if you intended to resume.", true);
          }
          const P = Z(n, a);
          if (P) {
            b(n, true, {
              error_kind: "bad_args"
            }, Date.now() - i);
            o(true);
            return w(P, true);
          }
          let L;
          try {
            L = await f.dispatcher(n, a);
          } catch (se) {
            b(n, true, {
              error_kind: "other"
            }, Date.now() - i);
            throw se;
          }
          b(n, L.isError ?? false, L.telemetry, Date.now() - i);
          r = G(L);
        }
        f.lastCallAt = Date.now();
        o(r.isError === true);
        return r;
      } catch (l) {
        o(true);
        s.logger.warn(`${q} ${e} failed: ${String(l)}`);
        return w("Computer-use tool failed on the device.", true);
      } finally {
        f.inFlightSince = undefined;
        h();
        if (f.abortRequested && s.cuLock.currentHolder === t) {
          f.abortRequested = false;
          _(t, f, "renderer");
        }
      }
    },
    releaseHeldLock: S,
    getSelectedDisplayId: e => {
      var a;
      if ((a = y.get(e)) == null) {
        return undefined;
      } else {
        return a.selectedDisplayId;
      }
    },
    isRemoteCuSession: e => y.has(e),
    getSessionOrgUuid: e => {
      var a;
      if ((a = y.get(e)) == null) {
        return undefined;
      } else {
        return a.orgUuid;
      }
    },
    dispose: () => {
      if (p) {
        clearInterval(p);
        p = undefined;
      }
      for (const [e, a] of y) {
        if (a.inFlightSince !== undefined) {
          a.abortRequested = true;
          _(e, a, "dispose");
          s.cuLock.forgetSession(e);
          continue;
        }
        _(e, a, "dispose");
        s.cuLock.forgetSession(e);
      }
      y.clear();
    }
  };
}
const be = {
  fitResultToBridgeBudget: B,
  renameToolsInProse: Y,
  checkRemoteDurationCap: Z,
  RESULT_BYTE_BUDGET: C,
  ESC_ACQUIRE_COOLDOWN_MS: V,
  POST_STOP_DEBOUNCE_MS: z,
  resetAcquireCooldown: () => {
    F = 0;
    U = undefined;
  }
};
exports._test = be;
exports.buildRemoteComputerUseTools = me;
//# sourceMappingURL=index.chunk-Chpcl8H9.js.map