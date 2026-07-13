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
    var o = new e.Error().stack;
    if (o) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[o] = "1ab75833-a7b9-43c2-859e-3824efa28ee9";
      e._sentryDebugIdIdentifier = "sentry-dbid-1ab75833-a7b9-43c2-859e-3824efa28ee9";
    }
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
const l = require("node:path");
const d = require("electron");
const i = require("./index.chunk-c42vKsva.js");
let n = null;
function s() {
  if (n && !n.isDestroyed()) {
    return n;
  } else {
    return null;
  }
}
function a() {
  const e = s();
  if (e) {
    e.show();
    e.focus();
    return e;
  }
  const o = i.getDeploymentMode();
  n = new d.BrowserWindow({
    width: 520,
    height: 340,
    resizable: false,
    minimizable: false,
    maximizable: false,
    alwaysOnTop: true,
    backgroundColor: i.determineWindowBackgroundColor(),
    title: "Verify sign-in code",
    autoHideMenuBar: true,
    webPreferences: {
      preload: l.join(d.app.getAppPath(), ".vite/build/mainView.js"),
      enableBlinkFeatures: i.getEnabledBlinkFeatures(),
      additionalArguments: [`--desktop-enterprise-config=${JSON.stringify(i.getManagedRendererConfig())}`, `--desktop-telemetry-config=${JSON.stringify({
        deploymentMode: "3p",
        appVersion: d.app.getVersion(),
        cookielessOrigin: true,
        deploymentOrganizationUuid: o.telemetryOrgUuid() ?? undefined
      })}`]
    }
  });
  i.setWebContentsType(n.webContents, i.WebContentsType.CUSTOM3P_DEVICE_CODE);
  const t = n.webContents;
  i.setupIntlHandlers(t);
  i.registerSpaIpcHandlers(t, n);
  t.setWindowOpenHandler(() => ({
    action: "deny"
  }));
  i.pinWebContentsToBundledSpa(t);
  const r = `${i.CUSTOM_3P_ORIGIN}/device-code-verify`;
  i.logger.info(`Opening device-code verify window at ${r}`);
  n.loadURL(r);
  n.on("closed", () => {
    n = null;
  });
  return n;
}
function f() {
  const e = s();
  if (e) {
    e.destroy();
  }
  n = null;
}
exports.closeDeviceCodeWindow = f;
exports.showDeviceCodeWindow = a;
//# sourceMappingURL=index.chunk-D8ZDi1zf.js.map