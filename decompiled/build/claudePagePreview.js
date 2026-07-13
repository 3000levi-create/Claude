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
    var d = new e.Error().stack;
    if (d) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[d] = "bd2f9253-514e-4ebf-ac56-b3629710736e";
      e._sentryDebugIdIdentifier = "sentry-dbid-bd2f9253-514e-4ebf-ac56-b3629710736e";
    }
  })();
} catch {}
const n = require("electron");
n.contextBridge.exposeInMainWorld("claudeDesktopArtifactPane", {
  embedded: true,
  platform: "desktop",
  chrome: "none"
});
//# sourceMappingURL=claudePagePreview.js.map