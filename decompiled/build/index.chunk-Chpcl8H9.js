"use strict";
(function() {
    try {
        var d = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
        d.SENTRY_RELEASE = {
            id: "df1d8a339dfabcf359af7144fe142b59ff7d9a0f"
        }
    } catch {}
})();
try {
    (function() {
        var d = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            c = new d.Error().stack;
        c && (d._sentryDebugIds = d._sentryDebugIds || {}, d._sentryDebugIds[c] = "f7babcd2-9ed1-4727-b9df-86e425b0683c", d._sentryDebugIdIdentifier = "sentry-dbid-f7babcd2-9ed1-4727-b9df-86e425b0683c")
    })()
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
const s = require("./index.chunk-c42vKsva.js"),
    H = require("electron"),
    T = require("./index.chunk-Cp81FYE3.js"),
    q = "[remote-cu]",
    E = "computer_resolve_access",
    R = s.REMOTE_DEVICES_COMPUTER_REQUEST_ACCESS,
    D = s.REMOTE_DEVICES_COMPUTER_RELEASE_LOCK,
    N = 10,
    k = 50,
    X = 10 * 6e4,
    re = X + 2 * 6e4,
    ie = 6e4,
    ne = 4 * 6e4,
    ae = 60 * 6e4,
    V = 5e3,
    z = 5e3;
let F = 0,
    U;
const de = new Set(["request_access", "request_teach_access", "teach_step", "teach_batch"]),
    le = ["request_access", "left_click_drag", "left_click", "double_click", "triple_click", "right_click", "middle_click", "mouse_move", "open_application", "switch_display", "list_granted_applications", "read_clipboard", "write_clipboard", "cursor_position", "hold_key", "left_mouse_down", "left_mouse_up"],
    ce = new RegExp(`\\b(${le.join("|")})\\b`, "g"),
    pe = "Another Claude session is currently using this computer. Wait for it to finish (the user can stop it from the Claude window on that machine), or find a non-computer-use approach.",
    C = 900 * 1024,
    J = .5,
    ue = [70, 50, 35];

function O(d) {
    try {
        return Buffer.byteLength(JSON.stringify(d), "utf8")
    } catch {
        return Number.MAX_SAFE_INTEGER
    }
}

function W(d, c = Math.floor(C * J)) {
    let p = c,
        g = !1;
    const _ = d.content.map(S => {
        if (S.type !== "text" || typeof S.text != "string") return S;
        const A = Math.min(262144, Math.max(p, 0)),
            I = Buffer.byteLength(S.text, "utf8");
        if (I <= A) return p -= I, S;
        g = !0;
        const M = Buffer.from(S.text, "utf8").subarray(0, Math.max(A - 128, 0)).toString("utf8").replace(/�+$/, "");
        return p -= Buffer.byteLength(M, "utf8"), {
            ...S,
            text: M + `
…[truncated: content too large for the device bridge]`
        }
    });
    return g ? {
        ...d,
        content: _
    } : d
}

function B(d) {
    if (O(d) <= C) return d;
    let c = W(d);
    if (O(c) <= C) return c;
    const y = new Map;
    c.content.forEach((p, g) => {
        if (p.type === "image" && typeof p.data == "string") try {
            const _ = H.nativeImage.createFromBuffer(Buffer.from(p.data, "base64"));
            _.isEmpty() || y.set(g, _)
        } catch {}
    });
    for (const p of ue)
        if (c = {
                ...c,
                content: c.content.map((g, _) => {
                    if (g.type !== "image" || typeof g.data != "string") return g;
                    const S = y.get(_);
                    if (!S) return g;
                    try {
                        const A = S.toJPEG(p).toString("base64");
                        return A.length < g.data.length ? {
                            ...g,
                            data: A,
                            mimeType: "image/jpeg"
                        } : g
                    } catch {
                        return g
                    }
                })
            }, O(c) <= C) return s.logger.info(`${q} screenshot recompressed to quality ${p} to fit bridge frame budget`), c;
    if (y.size === 0) {
        let p = Math.floor(C * J);
        for (; O(c) > C && p >= 256;) p = Math.floor(p / 2), c = W(d, p);
        return c
    }
    return {
        ...c,
        content: c.content.map((p, g) => y.has(g) ? {
            type: "text",
            text: "Screenshot was too large to send over the device bridge even after recompression. Use the computer_zoom tool on a smaller region instead."
        } : p),
        isError: d.isError ?? !1
    }
}

function Q(d) {
    return d.startsWith(s.REMOTE_DEVICES_COMPUTER_TOOL_PREFIX) ? d : `${s.REMOTE_DEVICES_COMPUTER_TOOL_PREFIX}${d}`
}

function Y(d) {
    return d.replace(ce, c => c === "request_access" ? R : Q(c))
}

function Z(d, c) {
    const y = g => typeof g == "number" && g > k,
        p = `The remote bridge times tool calls out at 60s; cap wait/hold_key duration to ${k}s. Split longer waits across multiple calls.`;
    if ((d === "wait" || d === "hold_key") && y(c.duration)) return p;
    if (d === "computer_batch" && Array.isArray(c.actions)) {
        let g = 0;
        for (const _ of c.actions)
            if (_ !== null && typeof _ == "object" && "action" in _ && (_.action === "wait" || _.action === "hold_key") && "duration" in _ && typeof _.duration == "number") {
                if (_.duration > k) return p;
                g += _.duration
            } if (g > k) return `The remote bridge times tool calls out at 60s; total wait/hold_key duration across batch actions is ${g.toFixed(1)}s. Cap the total to ${k}s or split across multiple calls.`
    }
}
const fe = s.objectType({
        apps: s.arrayType(s.stringType().min(1)).min(1).max(32),
        clipboardRead: s.booleanType().optional(),
        clipboardWrite: s.booleanType().optional(),
        systemKeyCombos: s.booleanType().optional()
    }),
    he = s.objectType({
        bundleId: s.stringType().min(1),
        displayName: s.stringType().min(1),
        tier: s.stringType().min(1),
        isSentinel: s.booleanType().optional()
    }),
    ge = s.objectType({
        apps: s.arrayType(he).min(1).max(32),
        reason: s.stringType().min(1),
        clipboardRead: s.booleanType().optional(),
        clipboardWrite: s.booleanType().optional(),
        systemKeyCombos: s.booleanType().optional(),
        willHide: s.arrayType(s.objectType({
            bundleId: s.stringType(),
            displayName: s.stringType()
        }).passthrough()).optional().catch([]),
        screenshotFiltering: s.enumType(["native", "mask"]).optional().catch(void 0)
    });

function K(d, c, y) {
    const p = d.resolutionCache.get(c);
    return p !== void 0 && y - p.resolvedAt <= X ? p : void 0
}

function w(d, c = !1) {
    return {
        content: [{
            type: "text",
            text: d
        }],
        isError: c
    }
}

function j(d) {
    return {
        content: [{
            type: "text",
            text: JSON.stringify(d, null, 2)
        }]
    }
}

function me(d, c) {
    const y = new Map;
    let p;
    const g = e => {
            const a = s.getChicagoDispatchCuGrantTtlMs(),
                t = Date.now() - a;
            return e.apps.some(i => i.grantedAt < t) && (e.apps = e.apps.filter(i => i.grantedAt >= t)), e.flagsGrantedAt !== void 0 && e.flagsGrantedAt < t && (e.flags = {
                ...T.DEFAULT_GRANT_FLAGS
            }, e.flagsGrantedAt = void 0), e.apps
        },
        _ = (e, a, t) => {
            if (a.hiddenDuringTurn.size > 0) {
                const i = [...a.hiddenDuringTurn];
                a.hiddenPendingNote = [], s.getAppPreference("chicagoAutoUnhide") ? s.unhideComputerUseApps(i).then(() => {
                    for (const o of i) a.hiddenDuringTurn.delete(o)
                }, o => s.logger.warn(`${q} unhide failed (will retry): ${String(o)}`)) : a.hiddenDuringTurn.clear()
            }
            if (a.clipboardStash !== void 0) {
                const i = a.clipboardStash;
                a.clipboardStash = void 0;
                try {
                    H.clipboard.writeText(i)
                } catch (o) {
                    s.logger.warn(`${q} clipboard restore failed: ${String(o)}`)
                }
            }
            s.cuLock.currentHolder === e && (s.cuLock.release(e), s.logCoworkEvent("cu_lock_released", {
                session_id: e,
                session_type: "cowork-remote",
                held_duration_ms: a.lockAcquiredAt ? Date.now() - a.lockAcquiredAt : 0,
                release_trigger: t === "renderer" ? "remote_renderer" : t === "idle" ? "remote_idle_sweep" : t === "wedge" ? "remote_wedge" : "remote_dispose",
                was_teach_mode: !1
            }), a.lockAcquiredAt = void 0), s.cuLock.release(e)
        },
        S = (e, a) => {
            const t = a === "esc" || a === "stop_click";
            if (a === "stop_click" && (e === void 0 || e === U) && (F = 0, U = void 0), t && e !== void 0) {
                const u = y.get(e);
                u && (u.stoppedAt = Date.now())
            }
            const i = s.cuLock.currentHolder;
            if (!i || e !== void 0 && i !== e) return !1;
            const o = y.get(i);
            return o ? (a === "esc" && (F = Date.now() + V, U = i), t && e === void 0 && (o.stoppedAt = Date.now()), o.inFlightSince !== void 0 ? (o.abortRequested = !0, !0) : (_(i, o, "renderer"), !0)) : !1
        },
        A = () => {
            const e = Date.now();
            for (const [a, t] of y) {
                const i = e - t.lastCallAt,
                    o = t.inFlightSince !== void 0 && e - t.inFlightSince > ne;
                t.inFlightSince !== void 0 && !o || ((o || i > re) && (o && (t.abortRequested = !0, t.stoppedAt = Date.now()), _(a, t, o ? "wedge" : "idle")), i > ae && (s.cuLock.forgetSession(a), y.delete(a)))
            }
            y.size === 0 && p && (clearInterval(p), p = void 0)
        },
        I = e => {
            const a = y.get(e);
            if (a) return a;
            const t = {
                    orgUuid: c == null ? void 0 : c(),
                    apps: [],
                    flags: {
                        ...T.DEFAULT_GRANT_FLAGS
                    },
                    selectedDisplayId: void 0,
                    displayPinnedByModel: !1,
                    displayResolvedForApps: void 0,
                    lastScreenshotDims: void 0,
                    hiddenDuringTurn: new Set,
                    hiddenPendingNote: [],
                    clipboardStash: void 0,
                    resolutionCache: new Map,
                    flagsGrantedAt: void 0,
                    pendingApproved: void 0,
                    inFlightSince: void 0,
                    dispatchMutex: Promise.resolve(),
                    lastCallAt: Date.now(),
                    lockAcquiredAt: void 0,
                    abortRequested: !1,
                    stoppedAt: void 0,
                    dispatcher: void 0
                },
                i = async o => {
                    var l;
                    const u = () => ({
                        granted: [],
                        denied: o.apps.map(r => {
                            var n;
                            return {
                                bundleId: ((n = r.resolved) == null ? void 0 : n.bundleId) ?? r.requestedName,
                                reason: "user_denied"
                            }
                        }),
                        flags: t.flags
                    });
                    if (o.tccState || o.featureDisabled) return u();
                    const f = t.pendingApproved;
                    if (!f) return s.logger.warn(`${q} permission request outside request_access dispatch — denying`), u();
                    const m = Date.now(),
                        b = [],
                        v = [];
                    for (const r of o.apps) {
                        const n = r.resolved ? t.resolutionCache.get(r.resolved.bundleId) : void 0;
                        r.resolved && f.bundleIds.has(r.resolved.bundleId) && (n == null ? void 0 : n.tier) === r.proposedTier ? b.push({
                            bundleId: r.resolved.bundleId,
                            displayName: r.resolved.displayName,
                            grantedAt: m,
                            tier: r.proposedTier
                        }) : v.push({
                            bundleId: ((l = r.resolved) == null ? void 0 : l.bundleId) ?? r.requestedName,
                            reason: "user_denied"
                        })
                    }
                    const h = {
                        ...T.DEFAULT_GRANT_FLAGS,
                        ...t.flags
                    };
                    return f.flags.clipboardRead === !0 && (h.clipboardRead = !0), f.flags.clipboardWrite === !0 && (h.clipboardWrite = !0), f.flags.systemKeyCombos === !0 && (h.systemKeyCombos = !0), {
                        granted: b,
                        denied: v,
                        flags: h
                    }
                };
            return t.dispatcher = T.bindSessionContext(s.getComputerUseHostAdapter(), s.getChicagoCoordinateMode(), {
                skipFirstRequestWarnings: !0,
                getAllowedApps: () => g(t),
                getGrantFlags: () => t.flags,
                getUserDeniedBundleIds: () => s.getAppPreference("chicagoUserDeniedBundleIds"),
                getSelectedDisplayId: () => t.selectedDisplayId,
                getDisplayPinnedByModel: () => t.displayPinnedByModel,
                getDisplayResolvedForApps: () => t.displayResolvedForApps,
                getLastScreenshotDims: () => t.lastScreenshotDims,
                onPermissionRequest: i,
                onAllowedAppsChanged: (o, u) => {
                    t.apps = [...o], t.flags = u, t.flagsGrantedAt = Date.now()
                },
                onAppsHidden: o => {
                    for (const u of o) t.hiddenDuringTurn.add(u);
                    t.hiddenPendingNote.push(...o)
                },
                getHiddenPendingNote: () => t.hiddenPendingNote,
                drainHiddenPendingNote: () => {
                    t.hiddenPendingNote = []
                },
                getClipboardStash: () => t.clipboardStash,
                onClipboardStashChanged: o => {
                    t.clipboardStash = o
                },
                onResolvedDisplayUpdated: o => {
                    t.selectedDisplayId = o, t.displayPinnedByModel = !1, t.displayResolvedForApps = void 0, d == null || d(e, o)
                },
                onDisplayPinned: o => {
                    t.selectedDisplayId = o, t.displayPinnedByModel = o !== void 0, o === void 0 && (t.displayResolvedForApps = void 0), d == null || d(e, o)
                },
                onDisplayResolvedForApps: o => {
                    t.displayResolvedForApps = o
                },
                onScreenshotCaptured: o => {
                    t.lastScreenshotDims = o
                },
                checkCuLock: async () => s.cuLock.check(e),
                acquireCuLock: async () => {
                    s.cuLock.acquire(e) && (t.lockAcquiredAt = Date.now(), t.abortRequested = !1, s.logCoworkEvent("cu_lock_acquired", {
                        session_id: e,
                        session_type: "cowork-remote"
                    }))
                },
                formatLockHeldMessage: () => pe,
                isAborted: () => t.abortRequested || s.cuLock.currentHolder !== e
            }), y.set(e, t), p ?? (p = setInterval(A, ie)), t
        },
        x = () => {
            if (!s.isFeatureEnabled("4293378213")) return w("Computer use over the device bridge is disabled on this device.", !0);
            if (!s.isComputerUseEnabled()) return w("Computer use is not enabled on this device. Ask the user to enable it in the Claude desktop app on that computer (Settings → Computer use), then retry.", !0)
        },
        M = async (e, a) => {
            var l;
            const t = fe.safeParse(a);
            if (!t.success) return w(`Invalid arguments: ${((l=t.error.issues[0])==null?void 0:l.message)??"bad args"}. Pass {"apps": ["Name", …]}.`, !0);
            if (t.data.apps.length > N) return w(`Request at most ${N} apps per call (got ${t.data.apps.length}). Split into separate calls if you genuinely need more.`, !0);
            const i = s.getComputerUseHostAdapter(),
                o = await i.ensureOsPermissions();
            if (!o.granted) {
                const r = [...o.accessibility ? [] : ["Accessibility"], ...o.screenRecording ? [] : ["Screen Recording"]].join(" and ");
                return w(`Computer use needs macOS ${r} permission(s) granted to the Claude desktop app on this device. Ask the user to finish setup in the desktop app on that computer, then retry. Do not retry before the user confirms.`, !0)
            }
            const u = await T.buildAccessRequest(i, t.data.apps, g(e), new Set(s.getAppPreference("chicagoUserDeniedBundleIds")), e.selectedDisplayId, !1),
                f = Date.now(),
                m = u.needDialog.flatMap(r => r.resolved ? [{
                    bundleId: r.resolved.bundleId,
                    displayName: r.resolved.displayName,
                    tier: r.proposedTier,
                    isSentinel: r.isSentinel === !0
                }] : []),
                b = {
                    clipboardRead: t.data.clipboardRead === !0,
                    clipboardWrite: t.data.clipboardWrite === !0,
                    systemKeyCombos: t.data.systemKeyCombos === !0
                },
                v = new Set(m.map(r => T.getDeniedCategoryForApp(r.bundleId, r.displayName)).filter(r => r === "browser" || r === "terminal")),
                h = v.size > 0 ? [v.has("terminal") ? "Terminals and IDEs can only be granted in 'click' mode — you can see and left-click, but cannot type, press keys, or paste. To run shell commands use the Bash tool instead." : null, v.has("browser") ? "Browsers can only be granted in 'read' mode — you can see what is on screen but cannot interact. For navigation, clicking, or typing on the web use the Claude in Chrome extension instead." : null, `If you still need this restricted access, proceed with ${R} — the user approves once.`].filter(Boolean).join(" ") : void 0;
            for (const r of m) e.resolutionCache.set(r.bundleId, {
                displayName: r.displayName,
                tier: r.tier,
                isSentinel: r.isSentinel === !0,
                flags: b,
                resolvedAt: f
            });
            for (const r of u.skipDialogGrants) {
                const n = e.resolutionCache.get(r.bundleId);
                e.resolutionCache.set(r.bundleId, {
                    displayName: r.displayName,
                    tier: r.tier ?? "full",
                    isSentinel: (n == null ? void 0 : n.isSentinel) === !0,
                    flags: {
                        clipboardRead: b.clipboardRead || (n == null ? void 0 : n.flags.clipboardRead) === !0,
                        clipboardWrite: b.clipboardWrite || (n == null ? void 0 : n.flags.clipboardWrite) === !0,
                        systemKeyCombos: b.systemKeyCombos || (n == null ? void 0 : n.flags.systemKeyCombos) === !0
                    },
                    resolvedAt: f
                })
            }
            return j({
                apps: m,
                alreadyGranted: u.skipDialogGrants.map(r => ({
                    bundleId: r.bundleId,
                    displayName: r.displayName,
                    tier: r.tier
                })),
                ...u.notInstalled.length > 0 && {
                    notInstalled: u.notInstalled
                },
                ...u.policyDenied.length > 0 && {
                    policyDenied: u.policyDenied
                },
                ...u.userDenied.length > 0 && {
                    userDenied: u.userDenied
                },
                ...u.willHide.length > 0 && {
                    willHide: u.willHide
                },
                screenshotFiltering: i.executor.capabilities.screenshotFiltering,
                ...h && {
                    restrictedTierNote: h
                },
                guidance: m.length > 0 ? `Call ${R} with the \`apps\` entries above (and \`willHide\` / \`screenshotFiltering\`, if present) passed verbatim within 10 minutes, plus a one-sentence reason. The user will be asked to approve.` + (h ? " See restrictedTierNote above first." : "") : u.skipDialogGrants.length > 0 ? "All requested apps are already granted — you can use the other computer tools directly." : u.notInstalled.length > 0 ? `Some requested names are not installed (see notInstalled). Re-call ${E} with only the installed names.` : "No requested app could be resolved on this device. Check policyDenied/userDenied above."
            })
        }, ee = async (e, a, t) => {
            var v;
            const i = ge.safeParse(a);
            if (!i.success) return w(`Invalid arguments: ${((v=i.error.issues[0])==null?void 0:v.message)??"bad args"}. Pass the \`apps\` entries returned by ${E} verbatim.`, !0);
            const o = Date.now(),
                u = new Set,
                f = [];
            for (const h of i.data.apps) {
                const l = K(e, h.bundleId, o);
                !l || l.displayName !== h.displayName || l.tier !== h.tier || l.isSentinel !== (h.isSentinel === !0) ? f.push(h.bundleId) : u.add(h.bundleId)
            }
            if (f.length > 0) return w(`These entries were not resolved by this device recently, or were altered: ${f.join(", ")}. Call ${E} again and pass its \`apps\` entries verbatim.`, !0);
            const m = h => i.data.apps.some(l => {
                var r;
                return ((r = K(e, l.bundleId, o)) == null ? void 0 : r.flags[h]) === !0
            });
            if (i.data.clipboardRead === !0 && !m("clipboardRead") || i.data.clipboardWrite === !0 && !m("clipboardWrite") || i.data.systemKeyCombos === !0 && !m("systemKeyCombos")) return w(`Requested flags were not declared in the matching ${E} call. Re-resolve with the flags you need, then request again.`, !0);
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
                        ...i.data.clipboardRead === !0 && {
                            clipboardRead: !0
                        },
                        ...i.data.clipboardWrite === !0 && {
                            clipboardWrite: !0
                        },
                        ...i.data.systemKeyCombos === !0 && {
                            systemKeyCombos: !0
                        }
                    })
                } catch (r) {
                    throw t("request_access", !0, {
                        error_kind: "other"
                    }, Date.now() - h), r
                }
                return t("request_access", l.isError ?? !1, l.telemetry, Date.now() - h), G(l)
            } finally {
                e.pendingApproved = void 0
            }
        }, G = e => {
            const {
                screenshot: a,
                telemetry: t,
                ...i
            } = e;
            return B(i)
        }, $ = (() => {
            const e = T.buildComputerUseTools({
                    ...s.PLATFORM_CAPABILITIES,
                    teachMode: !1
                }, s.getChicagoCoordinateMode()),
                a = `Seconds (0–${k}). The remote bridge times calls out at 60s; for longer waits, split across multiple calls.`,
                t = m => {
                    const b = {};
                    for (const [v, h] of Object.entries(m)) {
                        if (h === null || typeof h != "object") {
                            b[v] = h;
                            continue
                        }
                        const l = h;
                        v === "duration" && typeof l.description == "string" ? b[v] = {
                            ...l,
                            description: a
                        } : l.items !== null && typeof l.items == "object" && "properties" in l.items && l.items.properties !== null && typeof l.items.properties == "object" ? b[v] = {
                            ...l,
                            items: {
                                ...l.items,
                                properties: t(l.items.properties)
                            }
                        } : b[v] = h
                    }
                    return b
                },
                i = e.filter(m => !de.has(m.name)).map(m => ({
                    name: Q(m.name),
                    description: Y(m.description ?? ""),
                    inputSchema: {
                        type: m.inputSchema.type,
                        properties: t(m.inputSchema.properties ?? {}),
                        ...Array.isArray(m.inputSchema.required) && {
                            required: m.inputSchema.required
                        }
                    }
                })),
                o = {
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
                },
                u = {
                    name: R,
                    _meta: {
                        "anthropic/requiresUserInteraction": !0
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
                                    additionalProperties: !1
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
            }, ...i]
        })(), te = new Set($.map(e => e.name)), oe = new Map($.filter(e => e.name !== E && e.name !== R && e.name !== D).map(e => [e.name, e.name === "computer_batch" ? "computer_batch" : e.name.slice(s.REMOTE_DEVICES_COMPUTER_TOOL_PREFIX.length)]));
    return {
        tools: $,
        handleCall: async (e, a, t) => {
            const i = Date.now(),
                o = l => {
                    s.logCoworkEvent("lam_mcp_tool_call_completed", {
                        server_name: "remote-devices",
                        server_type: "internal",
                        tool_name: e,
                        is_error: l,
                        duration_ms: Date.now() - i
                    })
                },
                u = e === D ? void 0 : x();
            if (u) return o(!0), u;
            if (!te.has(e)) return o(!0), w(`Unknown tool: ${e}`, !0);
            if (!t) return o(!0), w("Computer-use tools require a server-asserted session id, which the remote-devices bridge did not supply. Retrying will not help — ask the user to report this.", !0);
            const f = I(t),
                m = s.getChicagoCoordinateMode(),
                b = (l, r, n, P) => {
                    s.logCoworkEvent("cu_tool_call", {
                        session_id: t,
                        session_type: "cowork-remote",
                        tool_name: l,
                        is_error: r,
                        error_kind: n == null ? void 0 : n.error_kind,
                        duration_ms: P,
                        is_teach_mode: !1,
                        coordinate_mode: m,
                        granted_count: n == null ? void 0 : n.granted_count,
                        denied_count: n == null ? void 0 : n.denied_count,
                        denied_browser_count: n == null ? void 0 : n.denied_browser_count,
                        denied_terminal_count: n == null ? void 0 : n.denied_terminal_count
                    })
                };
            f.lastCallAt = Date.now();
            const v = f.dispatchMutex;
            let h;
            f.dispatchMutex = new Promise(l => {
                h = l
            }), await v, f.inFlightSince = Date.now();
            try {
                if (e !== E && e !== D && Date.now() < F) return o(!0), w("Computer use is paused briefly after a user-initiated interrupt (ESC). The cloud session has been sent an interrupt; wait a few seconds before retrying.", !0);
                let r;
                if (e === E) {
                    const n = await M(f, a);
                    b("resolve_access", n.isError ?? !1, void 0, Date.now() - i), r = B(n)
                } else if (e === R) r = await ee(f, a, b), r.isError || (f.stoppedAt = void 0, f.abortRequested = !1);
                else if (e === D) {
                    const n = S(t, "tool");
                    b("release_lock", !n, void 0, Date.now() - i), r = j({
                        released: n
                    })
                } else {
                    const n = oe.get(e);
                    if (!n) return w(`Unknown tool: ${e}`, !0);
                    if (f.abortRequested) return f.abortRequested = !1, b(n, !0, {
                        error_kind: "other"
                    }, Date.now() - i), o(!0), w("A prior computer-use call wedged and was force-released; this queued call is refused. Retry.", !0);
                    if (f.stoppedAt !== void 0 && Date.now() - f.stoppedAt < z) return b(n, !0, {
                        error_kind: "other"
                    }, Date.now() - i), o(!0), w("This session was stopped <5s ago — pipelined calls are refused so a queued action can't fire after the user clicked Stop. Re-request access if you intended to resume.", !0);
                    const P = Z(n, a);
                    if (P) return b(n, !0, {
                        error_kind: "bad_args"
                    }, Date.now() - i), o(!0), w(P, !0);
                    let L;
                    try {
                        L = await f.dispatcher(n, a)
                    } catch (se) {
                        throw b(n, !0, {
                            error_kind: "other"
                        }, Date.now() - i), se
                    }
                    b(n, L.isError ?? !1, L.telemetry, Date.now() - i), r = G(L)
                }
                return f.lastCallAt = Date.now(), o(r.isError === !0), r
            } catch (l) {
                return o(!0), s.logger.warn(`${q} ${e} failed: ${String(l)}`), w("Computer-use tool failed on the device.", !0)
            } finally {
                f.inFlightSince = void 0, h(), f.abortRequested && s.cuLock.currentHolder === t && (f.abortRequested = !1, _(t, f, "renderer"))
            }
        },
        releaseHeldLock: S,
        getSelectedDisplayId: e => {
            var a;
            return (a = y.get(e)) == null ? void 0 : a.selectedDisplayId
        },
        isRemoteCuSession: e => y.has(e),
        getSessionOrgUuid: e => {
            var a;
            return (a = y.get(e)) == null ? void 0 : a.orgUuid
        },
        dispose: () => {
            p && (clearInterval(p), p = void 0);
            for (const [e, a] of y) {
                if (a.inFlightSince !== void 0) {
                    a.abortRequested = !0, _(e, a, "dispose"), s.cuLock.forgetSession(e);
                    continue
                }
                _(e, a, "dispose"), s.cuLock.forgetSession(e)
            }
            y.clear()
        }
    }
}
const be = {
    fitResultToBridgeBudget: B,
    renameToolsInProse: Y,
    checkRemoteDurationCap: Z,
    RESULT_BYTE_BUDGET: C,
    ESC_ACQUIRE_COOLDOWN_MS: V,
    POST_STOP_DEBOUNCE_MS: z,
    resetAcquireCooldown: () => {
        F = 0, U = void 0
    }
};
exports._test = be;
exports.buildRemoteComputerUseTools = me;
//# sourceMappingURL=index.chunk-Chpcl8H9.js.map