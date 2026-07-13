"use strict";
(function() {
    try {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
        e.SENTRY_RELEASE = {
            id: "df1d8a339dfabcf359af7144fe142b59ff7d9a0f"
        }
    } catch {}
})();
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
            n = new e.Error().stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "a3899a57-6868-4f9f-aa30-20c7fd3a8892", e._sentryDebugIdIdentifier = "sentry-dbid-a3899a57-6868-4f9f-aa30-20c7fd3a8892")
    })()
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
const o = require("electron"),
    u = require("./index.chunk-c42vKsva.js"),
    r = new Set,
    s = new Map;
async function c(e, n, i) {
    const t = `${n}:${i}`;
    if (r.has(t)) return !0;
    const a = s.get(t);
    if (a) return a;
    const d = (async () => {
        try {
            const f = {
                    type: "question",
                    buttons: ["Cancel", "Allow"],
                    defaultId: 0,
                    cancelId: 0,
                    title: "File access request",
                    message: "Allow Claude to open this file?",
                    detail: `${i}

This will open the file with your default application.`
                },
                l = o.BrowserWindow.fromWebContents(e);
            return (l ? await o.dialog.showMessageBox(l, f) : await o.dialog.showMessageBox(f)).response !== 1 ? (u.logger.info("[sessionOpenConsent] user declined default-app open"), !1) : (r.add(t), !0)
        } finally {
            s.delete(t)
        }
    })();
    return s.set(t, d), d
}
exports.confirmOpenSessionFileWithDefaultApp = c;
//# sourceMappingURL=index.chunk-B2WFCMlK.js.map