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
      e._sentryDebugIds[d] = "adb23195-b9fb-46a5-b624-fff53bfbf16b";
      e._sentryDebugIdIdentifier = "sentry-dbid-adb23195-b9fb-46a5-b624-fff53bfbf16b";
    }
  })();
} catch {}
const n = require("electron");
n.contextBridge.exposeInMainWorld("cuTeach", {
  onShow: e => {
    n.ipcRenderer.on("cu-teach:show", (d, o) => e(o));
  },
  onWorking: e => {
    n.ipcRenderer.on("cu-teach:working", () => e());
  },
  onHide: e => {
    n.ipcRenderer.on("cu-teach:hide", () => e());
  },
  next: () => n.ipcRenderer.invoke("cu-teach:next"),
  exit: () => n.ipcRenderer.invoke("cu-teach:exit"),
  mouseEnter: () => n.ipcRenderer.send("cu-teach:mouse-enter"),
  mouseLeave: () => n.ipcRenderer.send("cu-teach:mouse-leave"),
  onReassertHover: e => {
    n.ipcRenderer.on("cu-teach:reassert-hover", () => e());
  }
});
//# sourceMappingURL=computerUseTeach.js.map