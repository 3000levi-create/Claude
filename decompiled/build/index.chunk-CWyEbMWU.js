"use strict";
(function() {
    try {
        var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
        a.SENTRY_RELEASE = {
            id: "df1d8a339dfabcf359af7144fe142b59ff7d9a0f"
        }
    } catch {}
})();
try {
    (function() {
        var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            i = new a.Error().stack;
        i && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[i] = "073fa990-b2bf-4379-912d-044c855d6fb2", a._sentryDebugIdIdentifier = "sentry-dbid-073fa990-b2bf-4379-912d-044c855d6fb2")
    })()
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
const P = require("./index.chunk-c42vKsva.js"),
    F = require("./index.chunk-bem6RoHM.js"),
    O = require("./index.chunk-DSw1PzNs.js"),
    B = new TextEncoder,
    f = (() => {
        const a = Array.from({
            length: 256
        });
        for (let i = 0; i < 256; i++) a[i] = (i < 16 ? "0" : "") + i.toString(16);
        return a
    })(),
    M = new Int32Array(4),
    T = new Uint8Array(128);

function D(a) {
    const i = typeof a == "string" ? B.encode(a) : a instanceof Uint8Array ? a : new Uint8Array(a),
        s = i.length;
    M[0] = 1732584193, M[1] = 4023233417, M[2] = 2562383102, M[3] = 271733878;
    const u = s - s % 64;
    for (let C = 0; C < u; C += 64) L(M, i, C);
    const d = s - u;
    T.fill(0);
    for (let C = 0; C < d; C++) T[C] = i[u + C];
    T[d] = 128;
    const c = d >= 56 ? 128 : 64,
        h = s * 8 >>> 0,
        p = s / 536870912 | 0;
    T[c - 8] = h, T[c - 7] = h >>> 8, T[c - 6] = h >>> 16, T[c - 5] = h >>> 24, T[c - 4] = p, T[c - 3] = p >>> 8, T[c - 2] = p >>> 16, T[c - 1] = p >>> 24, L(M, T, 0), c === 128 && L(M, T, 64);
    const v = M[0],
        _ = M[1],
        w = M[2],
        E = M[3];
    return f[v & 255] + f[v >>> 8 & 255] + f[v >>> 16 & 255] + f[v >>> 24 & 255] + f[_ & 255] + f[_ >>> 8 & 255] + f[_ >>> 16 & 255] + f[_ >>> 24 & 255] + f[w & 255] + f[w >>> 8 & 255] + f[w >>> 16 & 255] + f[w >>> 24 & 255] + f[E & 255] + f[E >>> 8 & 255] + f[E >>> 16 & 255] + f[E >>> 24 & 255]
}

function L(a, i, s) {
    const u = i[s] | i[s + 1] << 8 | i[s + 2] << 16 | i[s + 3] << 24,
        d = i[s + 4] | i[s + 5] << 8 | i[s + 6] << 16 | i[s + 7] << 24,
        c = i[s + 8] | i[s + 9] << 8 | i[s + 10] << 16 | i[s + 11] << 24,
        h = i[s + 12] | i[s + 13] << 8 | i[s + 14] << 16 | i[s + 15] << 24,
        p = i[s + 16] | i[s + 17] << 8 | i[s + 18] << 16 | i[s + 19] << 24,
        v = i[s + 20] | i[s + 21] << 8 | i[s + 22] << 16 | i[s + 23] << 24,
        _ = i[s + 24] | i[s + 25] << 8 | i[s + 26] << 16 | i[s + 27] << 24,
        w = i[s + 28] | i[s + 29] << 8 | i[s + 30] << 16 | i[s + 31] << 24,
        E = i[s + 32] | i[s + 33] << 8 | i[s + 34] << 16 | i[s + 35] << 24,
        C = i[s + 36] | i[s + 37] << 8 | i[s + 38] << 16 | i[s + 39] << 24,
        A = i[s + 40] | i[s + 41] << 8 | i[s + 42] << 16 | i[s + 43] << 24,
        I = i[s + 44] | i[s + 45] << 8 | i[s + 46] << 16 | i[s + 47] << 24,
        l = i[s + 48] | i[s + 49] << 8 | i[s + 50] << 16 | i[s + 51] << 24,
        y = i[s + 52] | i[s + 53] << 8 | i[s + 54] << 16 | i[s + 55] << 24,
        g = i[s + 56] | i[s + 57] << 8 | i[s + 58] << 16 | i[s + 59] << 24,
        m = i[s + 60] | i[s + 61] << 8 | i[s + 62] << 16 | i[s + 63] << 24;
    let r = a[0],
        t = a[1],
        n = a[2],
        o = a[3],
        e;
    e = r + (o ^ t & (n ^ o)) + u + 3614090360, r = t + (e << 7 | e >>> 25) | 0, e = o + (n ^ r & (t ^ n)) + d + 3905402710, o = r + (e << 12 | e >>> 20) | 0, e = n + (t ^ o & (r ^ t)) + c + 606105819, n = o + (e << 17 | e >>> 15) | 0, e = t + (r ^ n & (o ^ r)) + h + 3250441966, t = n + (e << 22 | e >>> 10) | 0, e = r + (o ^ t & (n ^ o)) + p + 4118548399, r = t + (e << 7 | e >>> 25) | 0, e = o + (n ^ r & (t ^ n)) + v + 1200080426, o = r + (e << 12 | e >>> 20) | 0, e = n + (t ^ o & (r ^ t)) + _ + 2821735955, n = o + (e << 17 | e >>> 15) | 0, e = t + (r ^ n & (o ^ r)) + w + 4249261313, t = n + (e << 22 | e >>> 10) | 0, e = r + (o ^ t & (n ^ o)) + E + 1770035416, r = t + (e << 7 | e >>> 25) | 0, e = o + (n ^ r & (t ^ n)) + C + 2336552879, o = r + (e << 12 | e >>> 20) | 0, e = n + (t ^ o & (r ^ t)) + A + 4294925233, n = o + (e << 17 | e >>> 15) | 0, e = t + (r ^ n & (o ^ r)) + I + 2304563134, t = n + (e << 22 | e >>> 10) | 0, e = r + (o ^ t & (n ^ o)) + l + 1804603682, r = t + (e << 7 | e >>> 25) | 0, e = o + (n ^ r & (t ^ n)) + y + 4254626195, o = r + (e << 12 | e >>> 20) | 0, e = n + (t ^ o & (r ^ t)) + g + 2792965006, n = o + (e << 17 | e >>> 15) | 0, e = t + (r ^ n & (o ^ r)) + m + 1236535329, t = n + (e << 22 | e >>> 10) | 0, e = r + (n ^ o & (t ^ n)) + d + 4129170786, r = t + (e << 5 | e >>> 27) | 0, e = o + (t ^ n & (r ^ t)) + _ + 3225465664, o = r + (e << 9 | e >>> 23) | 0, e = n + (r ^ t & (o ^ r)) + I + 643717713, n = o + (e << 14 | e >>> 18) | 0, e = t + (o ^ r & (n ^ o)) + u + 3921069994, t = n + (e << 20 | e >>> 12) | 0, e = r + (n ^ o & (t ^ n)) + v + 3593408605, r = t + (e << 5 | e >>> 27) | 0, e = o + (t ^ n & (r ^ t)) + A + 38016083, o = r + (e << 9 | e >>> 23) | 0, e = n + (r ^ t & (o ^ r)) + m + 3634488961, n = o + (e << 14 | e >>> 18) | 0, e = t + (o ^ r & (n ^ o)) + p + 3889429448, t = n + (e << 20 | e >>> 12) | 0, e = r + (n ^ o & (t ^ n)) + C + 568446438, r = t + (e << 5 | e >>> 27) | 0, e = o + (t ^ n & (r ^ t)) + g + 3275163606, o = r + (e << 9 | e >>> 23) | 0, e = n + (r ^ t & (o ^ r)) + h + 4107603335, n = o + (e << 14 | e >>> 18) | 0, e = t + (o ^ r & (n ^ o)) + E + 1163531501, t = n + (e << 20 | e >>> 12) | 0, e = r + (n ^ o & (t ^ n)) + y + 2850285829, r = t + (e << 5 | e >>> 27) | 0, e = o + (t ^ n & (r ^ t)) + c + 4243563512, o = r + (e << 9 | e >>> 23) | 0, e = n + (r ^ t & (o ^ r)) + w + 1735328473, n = o + (e << 14 | e >>> 18) | 0, e = t + (o ^ r & (n ^ o)) + l + 2368359562, t = n + (e << 20 | e >>> 12) | 0, e = r + (t ^ n ^ o) + v + 4294588738, r = t + (e << 4 | e >>> 28) | 0, e = o + (r ^ t ^ n) + E + 2272392833, o = r + (e << 11 | e >>> 21) | 0, e = n + (o ^ r ^ t) + I + 1839030562, n = o + (e << 16 | e >>> 16) | 0, e = t + (n ^ o ^ r) + g + 4259657740, t = n + (e << 23 | e >>> 9) | 0, e = r + (t ^ n ^ o) + d + 2763975236, r = t + (e << 4 | e >>> 28) | 0, e = o + (r ^ t ^ n) + p + 1272893353, o = r + (e << 11 | e >>> 21) | 0, e = n + (o ^ r ^ t) + w + 4139469664, n = o + (e << 16 | e >>> 16) | 0, e = t + (n ^ o ^ r) + A + 3200236656, t = n + (e << 23 | e >>> 9) | 0, e = r + (t ^ n ^ o) + y + 681279174, r = t + (e << 4 | e >>> 28) | 0, e = o + (r ^ t ^ n) + u + 3936430074, o = r + (e << 11 | e >>> 21) | 0, e = n + (o ^ r ^ t) + h + 3572445317, n = o + (e << 16 | e >>> 16) | 0, e = t + (n ^ o ^ r) + _ + 76029189, t = n + (e << 23 | e >>> 9) | 0, e = r + (t ^ n ^ o) + C + 3654602809, r = t + (e << 4 | e >>> 28) | 0, e = o + (r ^ t ^ n) + l + 3873151461, o = r + (e << 11 | e >>> 21) | 0, e = n + (o ^ r ^ t) + m + 530742520, n = o + (e << 16 | e >>> 16) | 0, e = t + (n ^ o ^ r) + c + 3299628645, t = n + (e << 23 | e >>> 9) | 0, e = r + (n ^ (t | ~o)) + u + 4096336452, r = t + (e << 6 | e >>> 26) | 0, e = o + (t ^ (r | ~n)) + w + 1126891415, o = r + (e << 10 | e >>> 22) | 0, e = n + (r ^ (o | ~t)) + g + 2878612391, n = o + (e << 15 | e >>> 17) | 0, e = t + (o ^ (n | ~r)) + v + 4237533241, t = n + (e << 21 | e >>> 11) | 0, e = r + (n ^ (t | ~o)) + l + 1700485571, r = t + (e << 6 | e >>> 26) | 0, e = o + (t ^ (r | ~n)) + h + 2399980690, o = r + (e << 10 | e >>> 22) | 0, e = n + (r ^ (o | ~t)) + A + 4293915773, n = o + (e << 15 | e >>> 17) | 0, e = t + (o ^ (n | ~r)) + d + 2240044497, t = n + (e << 21 | e >>> 11) | 0, e = r + (n ^ (t | ~o)) + E + 1873313359, r = t + (e << 6 | e >>> 26) | 0, e = o + (t ^ (r | ~n)) + m + 4264355552, o = r + (e << 10 | e >>> 22) | 0, e = n + (r ^ (o | ~t)) + _ + 2734768916, n = o + (e << 15 | e >>> 17) | 0, e = t + (o ^ (n | ~r)) + y + 1309151649, t = n + (e << 21 | e >>> 11) | 0, e = r + (n ^ (t | ~o)) + p + 4149444226, r = t + (e << 6 | e >>> 26) | 0, e = o + (t ^ (r | ~n)) + I + 3174756917, o = r + (e << 10 | e >>> 22) | 0, e = n + (r ^ (o | ~t)) + c + 718787259, n = o + (e << 15 | e >>> 17) | 0, e = t + (o ^ (n | ~r)) + C + 3951481745, t = n + (e << 21 | e >>> 11) | 0, a[0] = a[0] + r | 0, a[1] = a[1] + t | 0, a[2] = a[2] + n | 0, a[3] = a[3] + o | 0
}
const U = P.objectType({
    description: P.stringType().optional(),
    type: P.stringType().optional(),
    title: P.stringType().optional()
}).optional();

function x(a, i) {
    var d;
    const s = ((d = a.inputSchema) == null ? void 0 : d.properties) ?? {},
        u = Object.entries(s).map(([c, h]) => {
            const {
                data: p
            } = U.safeParse(h);
            return [c, (p == null ? void 0 : p.description) || ""]
        }).sort((c, h) => c[0].localeCompare(h[0]));
    return D(JSON.stringify([a.description || "", u, null]))
}

function k(a) {
    let i = a,
        s = "",
        u = 0;
    const d = 10;
    for (; i !== s && u < d;) s = i, i = i.normalize("NFKC"), i = i.replace(/[\p{Cf}\p{Co}\p{Cn}\p{Cs}\p{DI}]/gu, c => c === "‌" || c === "‍" || c === "︎" || c === "️" ? c : ""), i = i.replace(/[\p{Cc}]/gu, c => c === `
` || c === "	" || c === "\r" ? c : ""), i = i.replace(/[\u200B\u200E\u200F]/g, "").replace(/[\u202A-\u202E]/g, "").replace(/[\u2066-\u2069]/g, "").replace(/[\uFEFF]/g, "").replace(/[\uE000-\uF8FF]/g, "").replace(/[\uFE00-\uFE0D]/g, "").replace(/[\u180B-\u180F]/g, "").replace(/\u034F|\u115F|\u1160|\u17B4|\u17B5|\u3164|\uFFA0/g, "").replace(/[\u{E0000}-\u{E01EF}]/gu, ""), u++;
    if (u >= d) throw new Error("Unicode sanitization reached maximum iterations", {
        cause: {
            inputLength: a.length,
            maxIterations: d
        }
    });
    return i
}

function N(a) {
    if (typeof a == "string") return k(a);
    if (Array.isArray(a)) return a.map(N);
    if (a !== null && typeof a == "object") {
        const i = {};
        for (const [s, u] of Object.entries(a)) {
            const d = N(s);
            d !== "__proto__" && (i[d] = N(u))
        }
        return i
    }
    return a
}
const q = 18e4,
    $ = 1e4,
    S = (a, i) => {
        P.logger.info(`[localMcpBridge] ${a}`, i)
    };

function z(a, i) {
    return `${a.replace(/[^a-zA-Z0-9_-]/g,"_")}__${i}`
}
async function j() {
    var A, I;
    const a = F.LocalMcpServerManager.getSharedInstance(),
        i = F.LocalMcpServerManager.getPluginMcpInstance();
    let s = [];
    try {
        s = await O.applyPluginBridgeMcpConfigsBounded()
    } catch (l) {
        S("plugin MCP config apply failed — bridging without plugin servers", {
            error: String(l)
        })
    }
    const u = Promise.all([a.ensureAllConfiguredConnected(), i.ensureAllConfiguredConnected()]);
    let d, c = !1;
    try {
        await Promise.race([u, new Promise((l, y) => {
            d = setTimeout(() => {
                c = !0, y(new Error(`ensureAllConfiguredConnected timed out after ${$}ms`))
            }, $)
        })])
    } catch (l) {
        S("ensureAllConfiguredConnected failed — announcing partial/empty set", {
            error: String(l)
        })
    } finally {
        d && clearTimeout(d)
    }
    const h = new Set(Object.keys(await P.getMcpServersConfig())),
        p = new Set(s),
        v = i.getOrgRegistryPluginKeys(),
        _ = [...a.getConnectedServersInfo().filter(l => h.has(l.name)).map(l => ({
            ...l,
            isPlugin: !1
        })), ...i.getConnectedServersInfo().filter(l => p.has(l.name)).sort((l, y) => {
            const g = v.has(l.name),
                m = v.has(y.name);
            return g !== m ? g ? -1 : 1 : l.name.localeCompare(y.name)
        }).map(l => ({
            ...l,
            isPlugin: !0
        }))];
    if (O.notifyPluginBridgeMcpServersChanged(), c) {
        const l = new Set(_.map(y => y.name));
        u.catch(() => {}).then(async () => {
            if (![...a.getConnectedServersInfo().filter(m => h.has(m.name)), ...i.getConnectedServersInfo().filter(m => p.has(m.name))].some(m => !l.has(m.name))) return;
            S("late stdio connect after announce — reloading bridge to include it"), O.notifyPluginBridgeMcpServersChanged();
            const {
                reloadRemoteToolsDevice: g
            } = await Promise.resolve().then(() => require("./index.chunk-c42vKsva.js")).then(m => m.remoteToolsDeviceClient);
            g()
        }).catch(y => S("late-connect reload failed", {
            error: String(y)
        }))
    }
    if (_.length === 0) return S("no stdio servers connected"), H();
    const w = new Map,
        E = [];
    for (const {
            name: l,
            tools: y,
            isPlugin: g
        }
        of _) {
        const m = y.filter(F.isToolVisibleToModel);
        for (const r of m) {
            const t = z(l, r.name);
            if (w.has(t)) {
                S(`bridge tool name collision: "${t}" from server "${l}" collides with already-announced server "${(A=w.get(t))==null?void 0:A.serverName}" — dropping the later one`);
                continue
            }
            w.set(t, {
                serverName: l,
                toolName: r.name,
                isPlugin: g
            });
            let n, o;
            try {
                n = g ? r : N(r), o = x(n)
            } catch (e) {
                S(`sanitize/hash failed for ${l}/${r.name} — skipping tool`, {
                    error: String(e)
                }), w.delete(t);
                continue
            }
            E.push({
                name: t,
                description: n.description ?? n.name,
                inputSchema: {
                    type: "object",
                    properties: n.inputSchema.properties ?? {},
                    ...Array.isArray(n.inputSchema.required) && n.inputSchema.required.length > 0 ? {
                        required: n.inputSchema.required
                    } : {}
                },
                _meta: {
                    "anthropic/approvalHash": o,
                    "anthropic/serverId": l,
                    "anthropic/kind": g ? "plugin" : "local",
                    "anthropic/toolName": n.name,
                    "anthropic/readOnlyHint": ((I = n.annotations) == null ? void 0 : I.readOnlyHint) ?? null
                }
            })
        }
        S(`announcing ${l}: ${m.length} tool(s)`)
    }
    return {
        tools: E,
        handleCall: async (l, y) => {
            const g = w.get(l);
            if (!g) return {
                content: [{
                    type: "text",
                    text: `Unknown tool: ${l}`
                }],
                isError: !0
            };
            const m = Date.now(),
                t = await (g.isPlugin ? i : a).callTool(g.serverName, g.toolName, y, {
                    timeoutMs: q
                });
            return P.logCoworkEvent("lam_mcp_tool_call_completed", {
                server_name: g.serverName,
                server_type: "bridge-stdio",
                server_source: g.isPlugin ? "plugin" : "user_config",
                tool_name: `mcp__${g.serverName}__${g.toolName}`,
                is_error: t.isError === !0,
                duration_ms: Date.now() - m
            }), t
        }
    }
}

function H() {
    return {
        tools: [],
        handleCall: async a => ({
            content: [{
                type: "text",
                text: `Unknown tool: ${a}`
            }],
            isError: !0
        })
    }
}
exports.buildLocalMcpBridgeTools = j;
//# sourceMappingURL=index.chunk-CWyEbMWU.js.map