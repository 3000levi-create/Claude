"use strict";

(function () {
  try {
    var t = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    t.SENTRY_RELEASE = {
      id: "df1d8a339dfabcf359af7144fe142b59ff7d9a0f"
    };
  } catch {}
})();
try {
  (function () {
    var t = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    var e = new t.Error().stack;
    if (e) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[e] = "8ebc2e11-cea3-4aa7-9ae3-11df592f3caa";
      t._sentryDebugIdIdentifier = "sentry-dbid-8ebc2e11-cea3-4aa7-9ae3-11df592f3caa";
    }
  })();
} catch {}
const d = require("electron");
const w = require("electron/renderer");
function j() {
  var e;
  let t;
  try {
    t = new URL(window.location.href);
  } catch {
    return false;
  }
  return !!("frameToken" in w.webFrame && w.webFrame.top && "frameToken" in w.webFrame.top ? w.webFrame.top.frameToken === w.webFrame.frameToken : ((e = w.webFrame.top) == null ? undefined : e.routingId) === w.webFrame.routingId) && ((t.origin === "null" || t.origin === null ? `${t.protocol}//${t.host}` : t.origin) === "https://claude.ai" || (t.origin === "null" || t.origin === null ? `${t.protocol}//${t.host}` : t.origin) === "https://preview.claude.ai" || (t.origin === "null" || t.origin === null ? `${t.protocol}//${t.host}` : t.origin) === "https://claude.com" || (t.origin === "null" || t.origin === null ? `${t.protocol}//${t.host}` : t.origin) === "https://preview.claude.com" || t.hostname === "localhost" || (t.origin === "null" || t.origin === null ? `${t.protocol}//${t.host}` : t.origin) === "app://localhost" || !!(t.origin === "null" || t.origin === null ? `${t.protocol}//${t.host}` : t.origin).endsWith(".ant.dev"));
}
function wr() {
  var e;
  let t;
  try {
    t = new URL(window.location.href);
  } catch {
    return false;
  }
  return ("frameToken" in w.webFrame && w.webFrame.top && "frameToken" in w.webFrame.top ? w.webFrame.top.frameToken === w.webFrame.frameToken : ((e = w.webFrame.top) == null ? undefined : e.routingId) === w.webFrame.routingId) && (t.origin === "null" || t.origin === null ? `${t.protocol}//${t.host}` : t.origin) === "app://localhost";
}
const Rs = {
  getAppConfig() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_AppConfig_$_getAppConfig");
  },
  setAppFeature(t, e) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_AppConfig_$_setAppFeature", t, e);
  },
  setIsUsingBuiltInNodeForMcp(t) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_AppConfig_$_setIsUsingBuiltInNodeForMcp", t);
  },
  setIsDxtAutoUpdatesEnabled(t) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_AppConfig_$_setIsDxtAutoUpdatesEnabled", t);
  }
};
const Cs = t => {
  if (j()) {
    t["claude.settings"] = t["claude.settings"] || {};
    t["claude.settings"].AppConfig = Rs;
  }
};
const Is = {
  isStartupOnLoginEnabled() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Startup_$_isStartupOnLoginEnabled");
  },
  setStartupOnLoginEnabled(t) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Startup_$_setStartupOnLoginEnabled", t);
  },
  isMenuBarEnabled() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Startup_$_isMenuBarEnabled");
  },
  setMenuBarEnabled(t) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Startup_$_setMenuBarEnabled", t);
  }
};
const Ts = t => {
  if (j()) {
    t["claude.settings"] = t["claude.settings"] || {};
    t["claude.settings"].Startup = Is;
  }
};
const As = {
  setGlobalShortcut(t) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_GlobalShortcut_$_setGlobalShortcut", t);
  },
  getGlobalShortcut() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_GlobalShortcut_$_getGlobalShortcut");
  },
  onGlobalShortcutChange(t) {
    const e = (n, r) => t(r);
    d.ipcRenderer.on("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_GlobalShortcut_$_globalShortcutChange", e);
    return () => {
      d.ipcRenderer.removeListener("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_GlobalShortcut_$_globalShortcutChange", e);
    };
  }
};
const Ns = t => {
  if (j()) {
    t["claude.settings"] = t["claude.settings"] || {};
    t["claude.settings"].GlobalShortcut = As;
  }
};
const Os = {
  isLocalDevMcpEnabled() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_MCP_$_isLocalDevMcpEnabled");
  },
  setMcpServerConfigs(t) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_MCP_$_setMcpServerConfigs", t);
  },
  getMcpServersConfig(t) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_MCP_$_getMcpServersConfig", t);
  },
  getMcpServersConfigWithStatus() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_MCP_$_getMcpServersConfigWithStatus");
  },
  revealConfig() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_MCP_$_revealConfig");
  },
  revealLogs() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_MCP_$_revealLogs");
  },
  revealServerLog(t) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_MCP_$_revealServerLog", t);
  },
  onMcpConfigChange(t) {
    const e = (n, r) => t(r);
    d.ipcRenderer.on("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_MCP_$_mcpConfigChange", e);
    return () => {
      d.ipcRenderer.removeListener("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_MCP_$_mcpConfigChange", e);
    };
  },
  onMcpStatusChanged(t) {
    const e = (n, r, s, i) => t(r, s, i);
    d.ipcRenderer.on("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_MCP_$_mcpStatusChanged", e);
    return () => {
      d.ipcRenderer.removeListener("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_MCP_$_mcpStatusChanged", e);
    };
  },
  onRevealMcpServerSettingsRequested(t) {
    const e = (n, r) => t(r);
    d.ipcRenderer.on("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_MCP_$_revealMcpServerSettingsRequested", e);
    return () => {
      d.ipcRenderer.removeListener("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_MCP_$_revealMcpServerSettingsRequested", e);
    };
  }
};
const Ds = t => {
  if (j()) {
    t["claude.settings"] = t["claude.settings"] || {};
    t["claude.settings"].MCP = Os;
  }
};
const Ms = {
  isExtensionsEnabled() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Extensions_$_isExtensionsEnabled");
  },
  isLocalExtensionInstallAllowed() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Extensions_$_isLocalExtensionInstallAllowed");
  },
  isDirectoryEnabled() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Extensions_$_isDirectoryEnabled");
  },
  isDesktopExtensionSignatureRequired() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Extensions_$_isDesktopExtensionSignatureRequired");
  },
  isDesktopExtensionDirectoryEnabled() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Extensions_$_isDesktopExtensionDirectoryEnabled");
  },
  getInstalledExtensionsWithState() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Extensions_$_getInstalledExtensionsWithState");
  },
  getIsUpdateAvailable(t, e) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Extensions_$_getIsUpdateAvailable", t, e);
  },
  getManifestCompatibilityResult(t) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Extensions_$_getManifestCompatibilityResult", t);
  },
  getAvailableExtensionRuntimes() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Extensions_$_getAvailableExtensionRuntimes");
  },
  getExtensionSettings(t) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Extensions_$_getExtensionSettings", t);
  },
  setExtensionSettings(t, e) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Extensions_$_setExtensionSettings", t, e);
  },
  installDxt(t, e) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Extensions_$_installDxt", t, e);
  },
  installDxtUnpacked(t) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Extensions_$_installDxtUnpacked", t);
  },
  installDxtFromDirectory(t, e) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Extensions_$_installDxtFromDirectory", t, e);
  },
  handleDxtFile(t) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Extensions_$_handleDxtFile", t);
  },
  showInstallDxtDialog() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Extensions_$_showInstallDxtDialog");
  },
  deleteExtension(t) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Extensions_$_deleteExtension", t);
  },
  showExtensionInFolder(t) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Extensions_$_showExtensionInFolder", t);
  },
  openExtensionsFolder() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Extensions_$_openExtensionsFolder");
  },
  openExtensionSettingsFolder() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Extensions_$_openExtensionSettingsFolder");
  },
  getDirectoryUrl() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Extensions_$_getDirectoryUrl");
  },
  getExtension(t) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Extensions_$_getExtension", t);
  },
  getExtensions(t) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Extensions_$_getExtensions", t);
  },
  getExtensionVersion(t) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Extensions_$_getExtensionVersion", t);
  },
  getExtensionVersions(t) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Extensions_$_getExtensionVersions", t);
  },
  onExtensionsChanged(t) {
    const e = n => t();
    d.ipcRenderer.on("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Extensions_$_extensionsChanged", e);
    return () => {
      d.ipcRenderer.removeListener("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Extensions_$_extensionsChanged", e);
    };
  },
  onExtensionSettingsChanged(t) {
    const e = (n, r, s) => t(r, s);
    d.ipcRenderer.on("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Extensions_$_extensionSettingsChanged", e);
    return () => {
      d.ipcRenderer.removeListener("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Extensions_$_extensionSettingsChanged", e);
    };
  },
  onPreviewExtensionInstallation(t) {
    const e = (n, r, s, i, a) => t(r, s, i, a);
    d.ipcRenderer.on("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Extensions_$_previewExtensionInstallation", e);
    return () => {
      d.ipcRenderer.removeListener("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Extensions_$_previewExtensionInstallation", e);
    };
  },
  installExtensionFromPreview(t, e) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Extensions_$_installExtensionFromPreview", t, e);
  },
  refreshAllowlistCheck() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Extensions_$_refreshAllowlistCheck");
  },
  onExtensionDownloadProgress(t) {
    const e = (n, r, s, i, a, o, c) => t(r, s, i, a, o, c);
    d.ipcRenderer.on("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Extensions_$_extensionDownloadProgress", e);
    return () => {
      d.ipcRenderer.removeListener("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Extensions_$_extensionDownloadProgress", e);
    };
  }
};
const Ps = t => {
  if (j()) {
    t["claude.settings"] = t["claude.settings"] || {};
    t["claude.settings"].Extensions = Ms;
  }
};
const Ls = {
  getDirectoryPath(t) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_FilePickers_$_getDirectoryPath", t);
  },
  getFilePath(t) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_FilePickers_$_getFilePath", t);
  }
};
const Fs = t => {
  if (j()) {
    t["claude.settings"] = t["claude.settings"] || {};
    t["claude.settings"].FilePickers = Ls;
  }
};
const js = {
  getPreferences() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_AppPreferences_$_getPreferences");
  },
  setPreference(t, e) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_AppPreferences_$_setPreference", t, e);
  },
  onPreferencesChanged(t) {
    const e = (n, r) => t(r);
    d.ipcRenderer.on("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_AppPreferences_$_preferencesChanged", e);
    return () => {
      d.ipcRenderer.removeListener("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_AppPreferences_$_preferencesChanged", e);
    };
  }
};
const Us = t => {
  if (j()) {
    t["claude.settings"] = t["claude.settings"] || {};
    t["claude.settings"].AppPreferences = js;
  }
};
const Bs = {
  getSupportedFeatures() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_AppFeatures_$_getSupportedFeatures");
  }
};
const Ws = t => {
  if (j()) {
    t["claude.settings"] = t["claude.settings"] || {};
    t["claude.settings"].AppFeatures = Bs;
  }
};
const Zs = {
  getSystemInfo() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_DesktopInfo_$_getSystemInfo");
  },
  showLogsInFileManager() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_DesktopInfo_$_showLogsInFileManager");
  }
};
const Hs = t => {
  if (j()) {
    t["claude.settings"] = t["claude.settings"] || {};
    t["claude.settings"].DesktopInfo = Zs;
  }
};
const Vs = {
  exportConfig(t, e) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Custom3pSetup_$_exportConfig", t, e);
  },
  relaunchApp() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Custom3pSetup_$_relaunchApp");
  },
  probeEgressHosts(t) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Custom3pSetup_$_probeEgressHosts", t);
  },
  scanOrgPlugins() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Custom3pSetup_$_scanOrgPlugins");
  },
  probeMcpServer(t) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Custom3pSetup_$_probeMcpServer", t);
  },
  authorizeAndProbeMcpServer(t) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Custom3pSetup_$_authorizeAndProbeMcpServer", t);
  },
  forgetMcpOAuth(t) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Custom3pSetup_$_forgetMcpOAuth", t);
  },
  getLoginDesktop3pStatus() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Custom3pSetup_$_getLoginDesktop3pStatus");
  },
  getConfigHealth() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Custom3pSetup_$_getConfigHealth");
  },
  recheckConfigHealth() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Custom3pSetup_$_recheckConfigHealth");
  },
  setDeploymentMode(t) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Custom3pSetup_$_setDeploymentMode", t);
  },
  openSetupWindow() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Custom3pSetup_$_openSetupWindow");
  },
  signInWithAnthropicApi() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Custom3pSetup_$_signInWithAnthropicApi");
  },
  applyAnthropicApiShortcut() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Custom3pSetup_$_applyAnthropicApiShortcut");
  },
  openDeviceCodeWindowForE2e() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Custom3pSetup_$_openDeviceCodeWindowForE2e");
  },
  listConfigs() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Custom3pSetup_$_listConfigs");
  },
  readConfig(t) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Custom3pSetup_$_readConfig", t);
  },
  writeConfig(t, e) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Custom3pSetup_$_writeConfig", t, e);
  },
  createConfig(t) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Custom3pSetup_$_createConfig", t);
  },
  duplicateConfig(t, e) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Custom3pSetup_$_duplicateConfig", t, e);
  },
  renameConfig(t, e) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Custom3pSetup_$_renameConfig", t, e);
  },
  deleteConfig(t) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Custom3pSetup_$_deleteConfig", t);
  },
  setAppliedConfig(t) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Custom3pSetup_$_setAppliedConfig", t);
  },
  revealConfig(t) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Custom3pSetup_$_revealConfig", t);
  },
  triggerBootstrapAuth(t) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Custom3pSetup_$_triggerBootstrapAuth", t);
  },
  bootstrapStateStore: {
    getState() {
      return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Custom3pSetup_$_bootstrapState_$store$_getState");
    },
    getStateSync() {
      const t = d.ipcRenderer.sendSync("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Custom3pSetup_$_bootstrapState_$store$_getStateSync");
      if (t.error) {
        throw new Error(t.error);
      }
      return t.result;
    },
    onStateChange(t) {
      const e = (n, r) => t(r);
      d.ipcRenderer.on("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Custom3pSetup_$_bootstrapState_$store$_update", e);
      return () => {
        d.ipcRenderer.removeListener("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Custom3pSetup_$_bootstrapState_$store$_update", e);
      };
    }
  }
};
const zs = t => {
  if (j()) {
    t["claude.settings"] = t["claude.settings"] || {};
    t["claude.settings"].Custom3pSetup = Vs;
  }
};
const qs = {
  runCredentialHelper(t, e, n) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Custom3pHelperRun_$_runCredentialHelper", t, e, n);
  },
  probeInference(t) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Custom3pHelperRun_$_probeInference", t);
  },
  discoverModels(t) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Custom3pHelperRun_$_discoverModels", t);
  },
  onProbeDeviceCode(t) {
    const e = (n, r, s) => t(r, s);
    d.ipcRenderer.on("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Custom3pHelperRun_$_probeDeviceCode", e);
    return () => {
      d.ipcRenderer.removeListener("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_Custom3pHelperRun_$_probeDeviceCode", e);
    };
  }
};
const Gs = t => {
  if (wr()) {
    t["claude.settings"] = t["claude.settings"] || {};
    t["claude.settings"].Custom3pHelperRun = qs;
  }
};
const Ys = {
  isAvailable() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_ClaudeAiImport_$_isAvailable");
  },
  getAuthState() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_ClaudeAiImport_$_getAuthState");
  },
  startAuth() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_ClaudeAiImport_$_startAuth");
  },
  reopenAuthTab() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_ClaudeAiImport_$_reopenAuthTab");
  },
  clearAuth() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_ClaudeAiImport_$_clearAuth");
  },
  runImport() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_ClaudeAiImport_$_runImport");
  },
  onOnAuthUserCode(t) {
    const e = (n, r) => t(r);
    d.ipcRenderer.on("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_ClaudeAiImport_$_onAuthUserCode", e);
    return () => {
      d.ipcRenderer.removeListener("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_ClaudeAiImport_$_onAuthUserCode", e);
    };
  },
  onOnAuthStateChange(t) {
    const e = (n, r) => t(r);
    d.ipcRenderer.on("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_ClaudeAiImport_$_onAuthStateChange", e);
    return () => {
      d.ipcRenderer.removeListener("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_ClaudeAiImport_$_onAuthStateChange", e);
    };
  }
};
const Js = t => {
  if (wr()) {
    t["claude.settings"] = t["claude.settings"] || {};
    t["claude.settings"].ClaudeAiImport = Ys;
  }
};
const Ks = {
  submitAction(t) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_SupportBundle_$_submitAction", t);
  },
  supportBundleStateStore: {
    getState() {
      return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_SupportBundle_$_supportBundleState_$store$_getState");
    },
    getStateSync() {
      const t = d.ipcRenderer.sendSync("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_SupportBundle_$_supportBundleState_$store$_getStateSync");
      if (t.error) {
        throw new Error(t.error);
      }
      return t.result;
    },
    onStateChange(t) {
      const e = (n, r) => t(r);
      d.ipcRenderer.on("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_SupportBundle_$_supportBundleState_$store$_update", e);
      return () => {
        d.ipcRenderer.removeListener("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_SupportBundle_$_supportBundleState_$store$_update", e);
      };
    }
  }
};
const Xs = t => {
  if (j()) {
    t["claude.settings"] = t["claude.settings"] || {};
    t["claude.settings"].SupportBundle = Ks;
  }
};
const Qs = {
  getStatus() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_WakeScheduler_$_getStatus");
  },
  openSettings() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.settings_$_WakeScheduler_$_openSettings");
  }
};
const ei = t => {
  if (j()) {
    t["claude.settings"] = t["claude.settings"] || {};
    t["claude.settings"].WakeScheduler = Qs;
  }
};
const D = {};
Cs(D);
Ts(D);
Ns(D);
Ds(D);
Ps(D);
Fs(D);
Us(D);
Ws(D);
Hs(D);
zs(D);
Gs(D);
Js(D);
Xs(D);
ei(D);
for (const [t, e] of Object.entries(D)) {
  d.contextBridge.exposeInMainWorld(t, e);
}
function Ht() {
  var t;
  if ("frameToken" in w.webFrame && w.webFrame.top && "frameToken" in w.webFrame.top) {
    return w.webFrame.top.frameToken === w.webFrame.frameToken;
  } else {
    return ((t = w.webFrame.top) == null ? undefined : t.routingId) === w.webFrame.routingId;
  }
}
const ti = {
  openHelp() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.internal.ui_$_AboutWindow_$_openHelp");
  },
  getSupport() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.internal.ui_$_AboutWindow_$_getSupport");
  },
  getAppName() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.internal.ui_$_AboutWindow_$_getAppName");
  },
  getBuildProps() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.internal.ui_$_AboutWindow_$_getBuildProps");
  }
};
const ni = t => {
  if (Ht()) {
    t["claude.internal.ui"] = t["claude.internal.ui"] || {};
    t["claude.internal.ui"].AboutWindow = ti;
  }
};
const ri = {
  requestDismiss(t) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.internal.ui_$_QuickWindow_$_requestDismiss", t);
  },
  requestDismissWithPayload(t) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.internal.ui_$_QuickWindow_$_requestDismissWithPayload", t);
  },
  requestSkooch(t, e) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.internal.ui_$_QuickWindow_$_requestSkooch", t, e);
  }
};
const si = t => {
  if (Ht()) {
    t["claude.internal.ui"] = t["claude.internal.ui"] || {};
    t["claude.internal.ui"].QuickWindow = ri;
  }
};
const ii = {
  titleBarReady() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.internal.ui_$_MainWindowTitleBar_$_titleBarReady");
  },
  requestReloadMainView() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.internal.ui_$_MainWindowTitleBar_$_requestReloadMainView");
  },
  requestMainMenuPopup() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.internal.ui_$_MainWindowTitleBar_$_requestMainMenuPopup");
  },
  isClaudeCurrentlyHealthy() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.internal.ui_$_MainWindowTitleBar_$_isClaudeCurrentlyHealthy");
  },
  onUpdateTitleBar(t) {
    const e = (n, r) => t(r);
    d.ipcRenderer.on("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.internal.ui_$_MainWindowTitleBar_$_updateTitleBar", e);
    return () => {
      d.ipcRenderer.removeListener("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.internal.ui_$_MainWindowTitleBar_$_updateTitleBar", e);
    };
  },
  onShowLoadError(t) {
    const e = (n, r) => t(r);
    d.ipcRenderer.on("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.internal.ui_$_MainWindowTitleBar_$_showLoadError", e);
    return () => {
      d.ipcRenderer.removeListener("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.internal.ui_$_MainWindowTitleBar_$_showLoadError", e);
    };
  },
  onHideLoadError(t) {
    const e = n => t();
    d.ipcRenderer.on("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.internal.ui_$_MainWindowTitleBar_$_hideLoadError", e);
    return () => {
      d.ipcRenderer.removeListener("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.internal.ui_$_MainWindowTitleBar_$_hideLoadError", e);
    };
  }
};
const ai = t => {
  if (Ht()) {
    t["claude.internal.ui"] = t["claude.internal.ui"] || {};
    t["claude.internal.ui"].MainWindowTitleBar = ii;
  }
};
const nt = {};
ni(nt);
si(nt);
ai(nt);
for (const [t, e] of Object.entries(nt)) {
  d.contextBridge.exposeInMainWorld(t, e);
}
function oi() {
  var e;
  let t;
  try {
    t = new URL(window.location.href);
  } catch {
    return false;
  }
  return !!("frameToken" in w.webFrame && w.webFrame.top && "frameToken" in w.webFrame.top ? w.webFrame.top.frameToken === w.webFrame.frameToken : ((e = w.webFrame.top) == null ? undefined : e.routingId) === w.webFrame.routingId) && ((t.origin === "null" || t.origin === null ? `${t.protocol}//${t.host}` : t.origin) === "https://claude.ai" || (t.origin === "null" || t.origin === null ? `${t.protocol}//${t.host}` : t.origin) === "https://preview.claude.ai" || (t.origin === "null" || t.origin === null ? `${t.protocol}//${t.host}` : t.origin) === "https://claude.com" || (t.origin === "null" || t.origin === null ? `${t.protocol}//${t.host}` : t.origin) === "https://preview.claude.com" || t.hostname === "localhost" || !!(t.origin === "null" || t.origin === null ? `${t.protocol}//${t.host}` : t.origin).endsWith(".ant.dev") || t.hostname === "localhost" || t.protocol === "file:" || (t.origin === "null" || t.origin === null ? `${t.protocol}//${t.host}` : t.origin) === "app://localhost");
}
const ci = {
  getInitialLocale() {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.hybrid_$_DesktopIntl_$_getInitialLocale");
  },
  requestLocaleChange(t) {
    return d.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.hybrid_$_DesktopIntl_$_requestLocaleChange", t);
  },
  onLocaleChanged(t) {
    const e = (n, r, s) => t(r, s);
    d.ipcRenderer.on("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.hybrid_$_DesktopIntl_$_localeChanged", e);
    return () => {
      d.ipcRenderer.removeListener("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.hybrid_$_DesktopIntl_$_localeChanged", e);
    };
  }
};
const ui = t => {
  if (oi()) {
    t["claude.hybrid"] = t["claude.hybrid"] || {};
    t["claude.hybrid"].DesktopIntl = ci;
  }
};
const Rr = {};
ui(Rr);
for (const [t, e] of Object.entries(Rr)) {
  d.contextBridge.exposeInMainWorld(t, e);
}
const E = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const R = globalThis;
const ae = "10.27.0";
function rt() {
  st(R);
  return R;
}
function st(t) {
  const e = t.__SENTRY__ = t.__SENTRY__ || {};
  e.version = e.version || ae;
  return e[ae] = e[ae] || {};
}
function Ee(t, e, n = R) {
  const r = n.__SENTRY__ = n.__SENTRY__ || {};
  const s = r[ae] = r[ae] || {};
  return s[t] ||= e();
}
const di = ["debug", "info", "warn", "error", "log", "assert", "trace"];
const li = "Sentry Logger ";
const Ge = {};
function Se(t) {
  if (!("console" in R)) {
    return t();
  }
  const e = R.console;
  const n = {};
  const r = Object.keys(Ge);
  r.forEach(s => {
    const i = Ge[s];
    n[s] = e[s];
    e[s] = i;
  });
  try {
    return t();
  } finally {
    r.forEach(s => {
      e[s] = n[s];
    });
  }
}
function fi() {
  zt().enabled = true;
}
function pi() {
  zt().enabled = false;
}
function Cr() {
  return zt().enabled;
}
function _i(...t) {
  Vt("log", ...t);
}
function hi(...t) {
  Vt("warn", ...t);
}
function mi(...t) {
  Vt("error", ...t);
}
function Vt(t, ...e) {
  if (E && Cr()) {
    Se(() => {
      R.console[t](`${li}[${t}]:`, ...e);
    });
  }
}
function zt() {
  if (E) {
    return Ee("loggerSettings", () => ({
      enabled: false
    }));
  } else {
    return {
      enabled: false
    };
  }
}
const y = {
  enable: fi,
  disable: pi,
  isEnabled: Cr,
  log: _i,
  warn: hi,
  error: mi
};
const Ir = 50;
const ee = "?";
const fn = /\(error: (.*)\)/;
const pn = /captureMessage|captureException/;
function Tr(...t) {
  const e = t.sort((n, r) => n[0] - r[0]).map(n => n[1]);
  return (n, r = 0, s = 0) => {
    const i = [];
    const a = n.split(`
`);
    for (let o = r; o < a.length; o++) {
      let c = a[o];
      if (c.length > 1024) {
        c = c.slice(0, 1024);
      }
      const u = fn.test(c) ? c.replace(fn, "$1") : c;
      if (!u.match(/\S*Error: /)) {
        for (const l of e) {
          const f = l(u);
          if (f) {
            i.push(f);
            break;
          }
        }
        if (i.length >= Ir + s) {
          break;
        }
      }
    }
    return Ar(i.slice(s));
  };
}
function gi(t) {
  if (Array.isArray(t)) {
    return Tr(...t);
  } else {
    return t;
  }
}
function Ar(t) {
  if (!t.length) {
    return [];
  }
  const e = Array.from(t);
  if (/sentryWrapped/.test(je(e).function || "")) {
    e.pop();
  }
  e.reverse();
  if (pn.test(je(e).function || "")) {
    e.pop();
    if (pn.test(je(e).function || "")) {
      e.pop();
    }
  }
  return e.slice(0, Ir).map(n => ({
    ...n,
    filename: n.filename || je(e).filename,
    function: n.function || ee
  }));
}
function je(t) {
  return t[t.length - 1] || {};
}
const lt = "<anonymous>";
function te(t) {
  try {
    if (!t || typeof t != "function") {
      return lt;
    } else {
      return t.name || lt;
    }
  } catch {
    return lt;
  }
}
function _n(t) {
  const e = t.exception;
  if (e) {
    const n = [];
    try {
      e.values.forEach(r => {
        if (r.stacktrace.frames) {
          n.push(...r.stacktrace.frames);
        }
      });
      return n;
    } catch {
      return;
    }
  }
}
function Nr(t) {
  if ("__v_isVNode" in t && t.__v_isVNode) {
    return "[VueVNode]";
  } else {
    return "[VueViewModel]";
  }
}
const He = {};
const hn = {};
function de(t, e) {
  He[t] = He[t] || [];
  He[t].push(e);
}
function le(t, e) {
  if (!hn[t]) {
    hn[t] = true;
    try {
      e();
    } catch (n) {
      if (E) {
        y.error(`Error while instrumenting ${t}`, n);
      }
    }
  }
}
function B(t, e) {
  const n = t && He[t];
  if (n) {
    for (const r of n) {
      try {
        r(e);
      } catch (s) {
        if (E) {
          y.error(`Error while triggering instrumentation handler.
Type: ${t}
Name: ${te(r)}
Error:`, s);
        }
      }
    }
  }
}
let ft = null;
function bi(t) {
  const e = "error";
  de(e, t);
  le(e, yi);
}
function yi() {
  ft = R.onerror;
  R.onerror = function (t, e, n, r, s) {
    B("error", {
      column: r,
      error: s,
      line: n,
      msg: t,
      url: e
    });
    if (ft) {
      return ft.apply(this, arguments);
    } else {
      return false;
    }
  };
  R.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let pt = null;
function $i(t) {
  const e = "unhandledrejection";
  de(e, t);
  le(e, vi);
}
function vi() {
  pt = R.onunhandledrejection;
  R.onunhandledrejection = function (t) {
    B("unhandledrejection", t);
    if (pt) {
      return pt.apply(this, arguments);
    } else {
      return true;
    }
  };
  R.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
const Or = Object.prototype.toString;
function qt(t) {
  switch (Or.call(t)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
    case "[object WebAssembly.Exception]":
      return true;
    default:
      return ne(t, Error);
  }
}
function ke(t, e) {
  return Or.call(t) === `[object ${e}]`;
}
function Dr(t) {
  return ke(t, "ErrorEvent");
}
function mn(t) {
  return ke(t, "DOMError");
}
function Ei(t) {
  return ke(t, "DOMException");
}
function z(t) {
  return ke(t, "String");
}
function Gt(t) {
  return typeof t == "object" && t !== null && "__sentry_template_string__" in t && "__sentry_template_values__" in t;
}
function it(t) {
  return t === null || Gt(t) || typeof t != "object" && typeof t != "function";
}
function Ce(t) {
  return ke(t, "Object");
}
function at(t) {
  return typeof Event !== "undefined" && ne(t, Event);
}
function Si(t) {
  return typeof Element !== "undefined" && ne(t, Element);
}
function ki(t) {
  return ke(t, "RegExp");
}
function De(t) {
  return t != null && !!t.then && typeof t.then == "function";
}
function xi(t) {
  return Ce(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t;
}
function ne(t, e) {
  try {
    return t instanceof e;
  } catch {
    return false;
  }
}
function Mr(t) {
  return typeof t == "object" && t !== null && (!!t.__isVue || !!t._isVue || !!t.__v_isVNode);
}
function wi(t) {
  return typeof Request !== "undefined" && ne(t, Request);
}
const Yt = R;
const Ri = 80;
function Pr(t, e = {}) {
  if (!t) {
    return "<unknown>";
  }
  try {
    let n = t;
    const r = 5;
    const s = [];
    let i = 0;
    let a = 0;
    const o = " > ";
    const c = o.length;
    let u;
    const l = Array.isArray(e) ? e : e.keyAttrs;
    const f = !Array.isArray(e) && e.maxStringLength || Ri;
    while (n && i++ < r && (u = Ci(n, l), u !== "html" && (!(i > 1) || !(a + s.length * c + u.length >= f)))) {
      s.push(u);
      a += u.length;
      n = n.parentNode;
    }
    return s.reverse().join(o);
  } catch {
    return "<unknown>";
  }
}
function Ci(t, e) {
  const n = t;
  const r = [];
  if (n == null || !n.tagName) {
    return "";
  }
  if (Yt.HTMLElement && n instanceof HTMLElement && n.dataset) {
    if (n.dataset.sentryComponent) {
      return n.dataset.sentryComponent;
    }
    if (n.dataset.sentryElement) {
      return n.dataset.sentryElement;
    }
  }
  r.push(n.tagName.toLowerCase());
  const s = e != null && e.length ? e.filter(a => n.getAttribute(a)).map(a => [a, n.getAttribute(a)]) : null;
  if (s != null && s.length) {
    s.forEach(a => {
      r.push(`[${a[0]}="${a[1]}"]`);
    });
  } else {
    if (n.id) {
      r.push(`#${n.id}`);
    }
    const a = n.className;
    if (a && z(a)) {
      const o = a.split(/\s+/);
      for (const c of o) {
        r.push(`.${c}`);
      }
    }
  }
  const i = ["aria-label", "type", "name", "title", "alt"];
  for (const a of i) {
    const o = n.getAttribute(a);
    if (o) {
      r.push(`[${a}="${o}"]`);
    }
  }
  return r.join("");
}
function Jt() {
  try {
    return Yt.document.location.href;
  } catch {
    return "";
  }
}
function Ii(t) {
  if (!Yt.HTMLElement) {
    return null;
  }
  let e = t;
  const n = 5;
  for (let r = 0; r < n; r++) {
    if (!e) {
      return null;
    }
    if (e instanceof HTMLElement) {
      if (e.dataset.sentryComponent) {
        return e.dataset.sentryComponent;
      }
      if (e.dataset.sentryElement) {
        return e.dataset.sentryElement;
      }
    }
    e = e.parentNode;
  }
  return null;
}
function P(t, e, n) {
  if (!(e in t)) {
    return;
  }
  const r = t[e];
  if (typeof r != "function") {
    return;
  }
  const s = n(r);
  if (typeof s == "function") {
    Lr(s, r);
  }
  try {
    t[e] = s;
  } catch {
    if (E) {
      y.log(`Failed to replace method "${e}" in object`, t);
    }
  }
}
function oe(t, e, n) {
  try {
    Object.defineProperty(t, e, {
      value: n,
      writable: true,
      configurable: true
    });
  } catch {
    if (E) {
      y.log(`Failed to add non-enumerable property "${e}" to object`, t);
    }
  }
}
function Lr(t, e) {
  try {
    const n = e.prototype || {};
    t.prototype = e.prototype = n;
    oe(t, "__sentry_original__", e);
  } catch {}
}
function Kt(t) {
  return t.__sentry_original__;
}
function Fr(t) {
  if (qt(t)) {
    return {
      message: t.message,
      name: t.name,
      stack: t.stack,
      ...bn(t)
    };
  }
  if (at(t)) {
    const e = {
      type: t.type,
      target: gn(t.target),
      currentTarget: gn(t.currentTarget),
      ...bn(t)
    };
    if (typeof CustomEvent !== "undefined" && ne(t, CustomEvent)) {
      e.detail = t.detail;
    }
    return e;
  } else {
    return t;
  }
}
function gn(t) {
  try {
    if (Si(t)) {
      return Pr(t);
    } else {
      return Object.prototype.toString.call(t);
    }
  } catch {
    return "<unknown>";
  }
}
function bn(t) {
  if (typeof t == "object" && t !== null) {
    const e = {};
    for (const n in t) {
      if (Object.prototype.hasOwnProperty.call(t, n)) {
        e[n] = t[n];
      }
    }
    return e;
  } else {
    return {};
  }
}
function Ti(t) {
  const e = Object.keys(Fr(t));
  e.sort();
  if (e[0]) {
    return e.join(", ");
  } else {
    return "[object has no keys]";
  }
}
function Et(t, e = 0) {
  if (typeof t != "string" || e === 0 || t.length <= e) {
    return t;
  } else {
    return `${t.slice(0, e)}...`;
  }
}
function yn(t, e) {
  if (!Array.isArray(t)) {
    return "";
  }
  const n = [];
  for (let r = 0; r < t.length; r++) {
    const s = t[r];
    try {
      if (Mr(s)) {
        n.push(Nr(s));
      } else {
        n.push(String(s));
      }
    } catch {
      n.push("[value cannot be serialized]");
    }
  }
  return n.join(e);
}
function Ve(t, e, n = false) {
  if (z(t)) {
    if (ki(e)) {
      return e.test(t);
    } else if (z(e)) {
      if (n) {
        return t === e;
      } else {
        return t.includes(e);
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function ot(t, e = [], n = false) {
  return e.some(r => Ve(t, r, n));
}
function Ai() {
  const t = R;
  return t.crypto || t.msCrypto;
}
let _t;
function Ni() {
  return Math.random() * 16;
}
function L(t = Ai()) {
  try {
    if (t != null && t.randomUUID) {
      return t.randomUUID().replace(/-/g, "");
    }
  } catch {}
  _t ||= "10000000100040008000100000000000";
  return _t.replace(/[018]/g, e => (e ^ (Ni() & 15) >> e / 4).toString(16));
}
function jr(t) {
  var e;
  var n;
  if ((n = (e = t.exception) == null ? undefined : e.values) == null) {
    return undefined;
  } else {
    return n[0];
  }
}
function ie(t) {
  const {
    message: e,
    event_id: n
  } = t;
  if (e) {
    return e;
  }
  const r = jr(t);
  if (r) {
    if (r.type && r.value) {
      return `${r.type}: ${r.value}`;
    } else {
      return r.type || r.value || n || "<unknown>";
    }
  } else {
    return n || "<unknown>";
  }
}
function St(t, e, n) {
  const r = t.exception = t.exception || {};
  const s = r.values = r.values || [];
  const i = s[0] = s[0] || {};
  i.value ||= e || "";
  i.type ||= "Error";
}
function _e(t, e) {
  const n = jr(t);
  if (!n) {
    return;
  }
  const r = {
    type: "generic",
    handled: true
  };
  const s = n.mechanism;
  n.mechanism = {
    ...r,
    ...s,
    ...e
  };
  if (e && "data" in e) {
    const i = {
      ...(s == null ? undefined : s.data),
      ...e.data
    };
    n.mechanism.data = i;
  }
}
function $n(t) {
  if (Oi(t)) {
    return true;
  }
  try {
    oe(t, "__sentry_captured__", true);
  } catch {}
  return false;
}
function Oi(t) {
  try {
    return t.__sentry_captured__;
  } catch {}
}
const Ur = 1000;
function Me() {
  return Date.now() / Ur;
}
function Di() {
  const {
    performance: t
  } = R;
  if (t == null || !t.now || !t.timeOrigin) {
    return Me;
  }
  const e = t.timeOrigin;
  return () => (e + t.now()) / Ur;
}
let vn;
function q() {
  return (vn ??= Di())();
}
function Mi(t) {
  const e = q();
  const n = {
    sid: L(),
    init: true,
    timestamp: e,
    started: e,
    duration: 0,
    status: "ok",
    errors: 0,
    ignoreDuration: false,
    toJSON: () => Li(n)
  };
  if (t) {
    he(n, t);
  }
  return n;
}
function he(t, e = {}) {
  if (e.user) {
    if (!t.ipAddress && e.user.ip_address) {
      t.ipAddress = e.user.ip_address;
    }
    if (!t.did && !e.did) {
      t.did = e.user.id || e.user.email || e.user.username;
    }
  }
  t.timestamp = e.timestamp || q();
  if (e.abnormal_mechanism) {
    t.abnormal_mechanism = e.abnormal_mechanism;
  }
  if (e.ignoreDuration) {
    t.ignoreDuration = e.ignoreDuration;
  }
  if (e.sid) {
    t.sid = e.sid.length === 32 ? e.sid : L();
  }
  if (e.init !== undefined) {
    t.init = e.init;
  }
  if (!t.did && e.did) {
    t.did = `${e.did}`;
  }
  if (typeof e.started == "number") {
    t.started = e.started;
  }
  if (t.ignoreDuration) {
    t.duration = undefined;
  } else if (typeof e.duration == "number") {
    t.duration = e.duration;
  } else {
    const n = t.timestamp - t.started;
    t.duration = n >= 0 ? n : 0;
  }
  if (e.release) {
    t.release = e.release;
  }
  if (e.environment) {
    t.environment = e.environment;
  }
  if (!t.ipAddress && e.ipAddress) {
    t.ipAddress = e.ipAddress;
  }
  if (!t.userAgent && e.userAgent) {
    t.userAgent = e.userAgent;
  }
  if (typeof e.errors == "number") {
    t.errors = e.errors;
  }
  if (e.status) {
    t.status = e.status;
  }
}
function Pi(t, e) {
  let n = {};
  if (t.status === "ok") {
    n = {
      status: "exited"
    };
  }
  he(t, n);
}
function Li(t) {
  return {
    sid: `${t.sid}`,
    init: t.init,
    started: new Date(t.started * 1000).toISOString(),
    timestamp: new Date(t.timestamp * 1000).toISOString(),
    status: t.status,
    errors: t.errors,
    did: typeof t.did == "number" || typeof t.did == "string" ? `${t.did}` : undefined,
    duration: t.duration,
    abnormal_mechanism: t.abnormal_mechanism,
    attrs: {
      release: t.release,
      environment: t.environment,
      ip_address: t.ipAddress,
      user_agent: t.userAgent
    }
  };
}
function Pe(t, e, n = 2) {
  if (!e || typeof e != "object" || n <= 0) {
    return e;
  }
  if (t && Object.keys(e).length === 0) {
    return t;
  }
  const r = {
    ...t
  };
  for (const s in e) {
    if (Object.prototype.hasOwnProperty.call(e, s)) {
      r[s] = Pe(r[s], e[s], n - 1);
    }
  }
  return r;
}
function En() {
  return L();
}
function Br() {
  return L().substring(16);
}
const kt = "_sentrySpan";
function Sn(t, e) {
  if (e) {
    oe(t, kt, e);
  } else {
    delete t[kt];
  }
}
function kn(t) {
  return t[kt];
}
const Fi = 100;
class G {
  constructor() {
    this._notifyingListeners = false;
    this._scopeListeners = [];
    this._eventProcessors = [];
    this._breadcrumbs = [];
    this._attachments = [];
    this._user = {};
    this._tags = {};
    this._attributes = {};
    this._extra = {};
    this._contexts = {};
    this._sdkProcessingMetadata = {};
    this._propagationContext = {
      traceId: En(),
      sampleRand: Math.random()
    };
  }
  clone() {
    const e = new G();
    e._breadcrumbs = [...this._breadcrumbs];
    e._tags = {
      ...this._tags
    };
    e._attributes = {
      ...this._attributes
    };
    e._extra = {
      ...this._extra
    };
    e._contexts = {
      ...this._contexts
    };
    if (this._contexts.flags) {
      e._contexts.flags = {
        values: [...this._contexts.flags.values]
      };
    }
    e._user = this._user;
    e._level = this._level;
    e._session = this._session;
    e._transactionName = this._transactionName;
    e._fingerprint = this._fingerprint;
    e._eventProcessors = [...this._eventProcessors];
    e._attachments = [...this._attachments];
    e._sdkProcessingMetadata = {
      ...this._sdkProcessingMetadata
    };
    e._propagationContext = {
      ...this._propagationContext
    };
    e._client = this._client;
    e._lastEventId = this._lastEventId;
    Sn(e, kn(this));
    return e;
  }
  setClient(e) {
    this._client = e;
  }
  setLastEventId(e) {
    this._lastEventId = e;
  }
  getClient() {
    return this._client;
  }
  lastEventId() {
    return this._lastEventId;
  }
  addScopeListener(e) {
    this._scopeListeners.push(e);
  }
  addEventProcessor(e) {
    this._eventProcessors.push(e);
    return this;
  }
  setUser(e) {
    this._user = e || {
      email: undefined,
      id: undefined,
      ip_address: undefined,
      username: undefined
    };
    if (this._session) {
      he(this._session, {
        user: e
      });
    }
    this._notifyScopeListeners();
    return this;
  }
  getUser() {
    return this._user;
  }
  setTags(e) {
    this._tags = {
      ...this._tags,
      ...e
    };
    this._notifyScopeListeners();
    return this;
  }
  setTag(e, n) {
    return this.setTags({
      [e]: n
    });
  }
  setAttributes(e) {
    this._attributes = {
      ...this._attributes,
      ...e
    };
    this._notifyScopeListeners();
    return this;
  }
  setAttribute(e, n) {
    return this.setAttributes({
      [e]: n
    });
  }
  removeAttribute(e) {
    if (e in this._attributes) {
      delete this._attributes[e];
      this._notifyScopeListeners();
    }
    return this;
  }
  setExtras(e) {
    this._extra = {
      ...this._extra,
      ...e
    };
    this._notifyScopeListeners();
    return this;
  }
  setExtra(e, n) {
    this._extra = {
      ...this._extra,
      [e]: n
    };
    this._notifyScopeListeners();
    return this;
  }
  setFingerprint(e) {
    this._fingerprint = e;
    this._notifyScopeListeners();
    return this;
  }
  setLevel(e) {
    this._level = e;
    this._notifyScopeListeners();
    return this;
  }
  setTransactionName(e) {
    this._transactionName = e;
    this._notifyScopeListeners();
    return this;
  }
  setContext(e, n) {
    if (n === null) {
      delete this._contexts[e];
    } else {
      this._contexts[e] = n;
    }
    this._notifyScopeListeners();
    return this;
  }
  setSession(e) {
    if (e) {
      this._session = e;
    } else {
      delete this._session;
    }
    this._notifyScopeListeners();
    return this;
  }
  getSession() {
    return this._session;
  }
  update(e) {
    if (!e) {
      return this;
    }
    const n = typeof e == "function" ? e(this) : e;
    const r = n instanceof G ? n.getScopeData() : Ce(n) ? e : undefined;
    const {
      tags: s,
      attributes: i,
      extra: a,
      user: o,
      contexts: c,
      level: u,
      fingerprint: l = [],
      propagationContext: f
    } = r || {};
    this._tags = {
      ...this._tags,
      ...s
    };
    this._attributes = {
      ...this._attributes,
      ...i
    };
    this._extra = {
      ...this._extra,
      ...a
    };
    this._contexts = {
      ...this._contexts,
      ...c
    };
    if (o && Object.keys(o).length) {
      this._user = o;
    }
    if (u) {
      this._level = u;
    }
    if (l.length) {
      this._fingerprint = l;
    }
    if (f) {
      this._propagationContext = f;
    }
    return this;
  }
  clear() {
    this._breadcrumbs = [];
    this._tags = {};
    this._attributes = {};
    this._extra = {};
    this._user = {};
    this._contexts = {};
    this._level = undefined;
    this._transactionName = undefined;
    this._fingerprint = undefined;
    this._session = undefined;
    Sn(this, undefined);
    this._attachments = [];
    this.setPropagationContext({
      traceId: En(),
      sampleRand: Math.random()
    });
    this._notifyScopeListeners();
    return this;
  }
  addBreadcrumb(e, n) {
    var i;
    const r = typeof n == "number" ? n : Fi;
    if (r <= 0) {
      return this;
    }
    const s = {
      timestamp: Me(),
      ...e,
      message: e.message ? Et(e.message, 2048) : e.message
    };
    this._breadcrumbs.push(s);
    if (this._breadcrumbs.length > r) {
      this._breadcrumbs = this._breadcrumbs.slice(-r);
      if ((i = this._client) != null) {
        i.recordDroppedEvent("buffer_overflow", "log_item");
      }
    }
    this._notifyScopeListeners();
    return this;
  }
  getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1];
  }
  clearBreadcrumbs() {
    this._breadcrumbs = [];
    this._notifyScopeListeners();
    return this;
  }
  addAttachment(e) {
    this._attachments.push(e);
    return this;
  }
  clearAttachments() {
    this._attachments = [];
    return this;
  }
  getScopeData() {
    return {
      breadcrumbs: this._breadcrumbs,
      attachments: this._attachments,
      contexts: this._contexts,
      tags: this._tags,
      attributes: this._attributes,
      extra: this._extra,
      user: this._user,
      level: this._level,
      fingerprint: this._fingerprint || [],
      eventProcessors: this._eventProcessors,
      propagationContext: this._propagationContext,
      sdkProcessingMetadata: this._sdkProcessingMetadata,
      transactionName: this._transactionName,
      span: kn(this)
    };
  }
  setSDKProcessingMetadata(e) {
    this._sdkProcessingMetadata = Pe(this._sdkProcessingMetadata, e, 2);
    return this;
  }
  setPropagationContext(e) {
    this._propagationContext = e;
    return this;
  }
  getPropagationContext() {
    return this._propagationContext;
  }
  captureException(e, n) {
    const r = (n == null ? undefined : n.event_id) || L();
    if (!this._client) {
      if (E) {
        y.warn("No client configured on scope - will not capture exception!");
      }
      return r;
    }
    const s = new Error("Sentry syntheticException");
    this._client.captureException(e, {
      originalException: e,
      syntheticException: s,
      ...n,
      event_id: r
    }, this);
    return r;
  }
  captureMessage(e, n, r) {
    const s = (r == null ? undefined : r.event_id) || L();
    if (!this._client) {
      if (E) {
        y.warn("No client configured on scope - will not capture message!");
      }
      return s;
    }
    const i = (r == null ? undefined : r.syntheticException) ?? new Error(e);
    this._client.captureMessage(e, n, {
      originalException: e,
      syntheticException: i,
      ...r,
      event_id: s
    }, this);
    return s;
  }
  captureEvent(e, n) {
    const r = (n == null ? undefined : n.event_id) || L();
    if (this._client) {
      this._client.captureEvent(e, {
        ...n,
        event_id: r
      }, this);
      return r;
    } else {
      if (E) {
        y.warn("No client configured on scope - will not capture event!");
      }
      return r;
    }
  }
  _notifyScopeListeners() {
    if (!this._notifyingListeners) {
      this._notifyingListeners = true;
      this._scopeListeners.forEach(e => {
        e(this);
      });
      this._notifyingListeners = false;
    }
  }
}
function ji() {
  return Ee("defaultCurrentScope", () => new G());
}
function Ui() {
  return Ee("defaultIsolationScope", () => new G());
}
class Bi {
  constructor(e, n) {
    let r;
    if (e) {
      r = e;
    } else {
      r = new G();
    }
    let s;
    if (n) {
      s = n;
    } else {
      s = new G();
    }
    this._stack = [{
      scope: r
    }];
    this._isolationScope = s;
  }
  withScope(e) {
    const n = this._pushScope();
    let r;
    try {
      r = e(n);
    } catch (s) {
      this._popScope();
      throw s;
    }
    if (De(r)) {
      return r.then(s => {
        this._popScope();
        return s;
      }, s => {
        this._popScope();
        throw s;
      });
    } else {
      this._popScope();
      return r;
    }
  }
  getClient() {
    return this.getStackTop().client;
  }
  getScope() {
    return this.getStackTop().scope;
  }
  getIsolationScope() {
    return this._isolationScope;
  }
  getStackTop() {
    return this._stack[this._stack.length - 1];
  }
  _pushScope() {
    const e = this.getScope().clone();
    this._stack.push({
      client: this.getClient(),
      scope: e
    });
    return e;
  }
  _popScope() {
    if (this._stack.length <= 1) {
      return false;
    } else {
      return !!this._stack.pop();
    }
  }
}
function me() {
  const t = rt();
  const e = st(t);
  return e.stack = e.stack || new Bi(ji(), Ui());
}
function Wi(t) {
  return me().withScope(t);
}
function Zi(t, e) {
  const n = me();
  return n.withScope(() => {
    n.getStackTop().scope = t;
    return e(t);
  });
}
function xn(t) {
  return me().withScope(() => t(me().getIsolationScope()));
}
function Hi() {
  return {
    withIsolationScope: xn,
    withScope: Wi,
    withSetScope: Zi,
    withSetIsolationScope: (t, e) => xn(e),
    getCurrentScope: () => me().getScope(),
    getIsolationScope: () => me().getIsolationScope()
  };
}
function Xt(t) {
  const e = st(t);
  if (e.acs) {
    return e.acs;
  } else {
    return Hi();
  }
}
function H() {
  const t = rt();
  return Xt(t).getCurrentScope();
}
function fe() {
  const t = rt();
  return Xt(t).getIsolationScope();
}
function Qt() {
  return Ee("globalScope", () => new G());
}
function Vi(...t) {
  const e = rt();
  const n = Xt(e);
  if (t.length === 2) {
    const [r, s] = t;
    if (r) {
      return n.withSetScope(r, s);
    } else {
      return n.withScope(s);
    }
  }
  return n.withScope(t[0]);
}
function N() {
  return H().getClient();
}
function zi(t) {
  const e = t.getPropagationContext();
  const {
    traceId: n,
    parentSpanId: r,
    propagationSpanId: s
  } = e;
  const i = {
    trace_id: n,
    span_id: s || Br()
  };
  if (r) {
    i.parent_span_id = r;
  }
  return i;
}
const qi = "sentry.source";
const Gi = "sentry.sample_rate";
const Yi = "sentry.previous_trace_sample_rate";
const Ji = "sentry.op";
const Ki = "sentry.origin";
const Wr = "sentry.profile_id";
const Zr = "sentry.exclusive_time";
const Xi = 0;
const Qi = 1;
const ea = "_sentryScope";
const ta = "_sentryIsolationScope";
function na(t) {
  if (t) {
    if (typeof t == "object" && "deref" in t && typeof t.deref == "function") {
      try {
        return t.deref();
      } catch {
        return;
      }
    }
    return t;
  }
}
function Hr(t) {
  const e = t;
  return {
    scope: e[ea],
    isolationScope: na(e[ta])
  };
}
const ra = "sentry-";
const sa = /^sentry-/;
function ia(t) {
  const e = aa(t);
  if (!e) {
    return;
  }
  const n = Object.entries(e).reduce((r, [s, i]) => {
    if (s.match(sa)) {
      const a = s.slice(ra.length);
      r[a] = i;
    }
    return r;
  }, {});
  if (Object.keys(n).length > 0) {
    return n;
  }
}
function aa(t) {
  if (!!t && (!!z(t) || !!Array.isArray(t))) {
    if (Array.isArray(t)) {
      return t.reduce((e, n) => {
        const r = wn(n);
        Object.entries(r).forEach(([s, i]) => {
          e[s] = i;
        });
        return e;
      }, {});
    } else {
      return wn(t);
    }
  }
}
function wn(t) {
  return t.split(",").map(e => {
    const n = e.indexOf("=");
    if (n === -1) {
      return [];
    }
    const r = e.slice(0, n);
    const s = e.slice(n + 1);
    return [r, s].map(i => {
      try {
        return decodeURIComponent(i.trim());
      } catch {
        return;
      }
    });
  }).reduce((e, [n, r]) => {
    if (n && r) {
      e[n] = r;
    }
    return e;
  }, {});
}
const oa = /^o(\d+)\./;
const ca = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function ua(t) {
  return t === "http" || t === "https";
}
function Le(t, e = false) {
  const {
    host: n,
    path: r,
    pass: s,
    port: i,
    projectId: a,
    protocol: o,
    publicKey: c
  } = t;
  return `${o}://${c}${e && s ? `:${s}` : ""}@${n}${i ? `:${i}` : ""}/${r && `${r}/`}${a}`;
}
function da(t) {
  const e = ca.exec(t);
  if (!e) {
    Se(() => {
      console.error(`Invalid Sentry Dsn: ${t}`);
    });
    return;
  }
  const [n, r, s = "", i = "", a = "", o = ""] = e.slice(1);
  let c = "";
  let u = o;
  const l = u.split("/");
  if (l.length > 1) {
    c = l.slice(0, -1).join("/");
    u = l.pop();
  }
  if (u) {
    const f = u.match(/^\d+/);
    if (f) {
      u = f[0];
    }
  }
  return Vr({
    host: i,
    pass: s,
    path: c,
    projectId: u,
    port: a,
    protocol: n,
    publicKey: r
  });
}
function Vr(t) {
  return {
    protocol: t.protocol,
    publicKey: t.publicKey || "",
    pass: t.pass || "",
    host: t.host,
    port: t.port || "",
    path: t.path || "",
    projectId: t.projectId
  };
}
function la(t) {
  if (!E) {
    return true;
  }
  const {
    port: e,
    projectId: n,
    protocol: r
  } = t;
  if (["protocol", "publicKey", "host", "projectId"].find(a => t[a] ? false : (y.error(`Invalid Sentry Dsn: ${a} missing`), true))) {
    return false;
  } else if (n.match(/^\d+$/)) {
    if (ua(r)) {
      if (e && isNaN(parseInt(e, 10))) {
        y.error(`Invalid Sentry Dsn: Invalid port ${e}`);
        return false;
      } else {
        return true;
      }
    } else {
      y.error(`Invalid Sentry Dsn: Invalid protocol ${r}`);
      return false;
    }
  } else {
    y.error(`Invalid Sentry Dsn: Invalid projectId ${n}`);
    return false;
  }
}
function fa(t) {
  const e = t.match(oa);
  if (e == null) {
    return undefined;
  } else {
    return e[1];
  }
}
function pa(t) {
  const e = t.getOptions();
  const {
    host: n
  } = t.getDsn() || {};
  let r;
  if (e.orgId) {
    r = String(e.orgId);
  } else if (n) {
    r = fa(n);
  }
  return r;
}
function _a(t) {
  const e = typeof t == "string" ? da(t) : Vr(t);
  if (!!e && !!la(e)) {
    return e;
  }
}
function ha(t) {
  if (typeof t == "boolean") {
    return Number(t);
  }
  const e = typeof t == "string" ? parseFloat(t) : t;
  if (typeof e == "number" && !isNaN(e) && !(e < 0) && !(e > 1)) {
    return e;
  }
}
const zr = 1;
let Rn = false;
function ma(t) {
  const {
    spanId: e,
    traceId: n,
    isRemote: r
  } = t.spanContext();
  const s = r ? e : en(t).parent_span_id;
  const i = Hr(t).scope;
  const a = r ? (i == null ? undefined : i.getPropagationContext().propagationSpanId) || Br() : e;
  return {
    parent_span_id: s,
    span_id: a,
    trace_id: n
  };
}
function ga(t) {
  if (t && t.length > 0) {
    return t.map(({
      context: {
        spanId: e,
        traceId: n,
        traceFlags: r,
        ...s
      },
      attributes: i
    }) => ({
      span_id: e,
      trace_id: n,
      sampled: r === zr,
      attributes: i,
      ...s
    }));
  }
}
function Cn(t) {
  if (typeof t == "number") {
    return In(t);
  } else if (Array.isArray(t)) {
    return t[0] + t[1] / 1000000000;
  } else if (t instanceof Date) {
    return In(t.getTime());
  } else {
    return q();
  }
}
function In(t) {
  if (t > 9999999999) {
    return t / 1000;
  } else {
    return t;
  }
}
function en(t) {
  var r;
  if (ya(t)) {
    return t.getSpanJSON();
  }
  const {
    spanId: e,
    traceId: n
  } = t.spanContext();
  if (ba(t)) {
    const {
      attributes: s,
      startTime: i,
      name: a,
      endTime: o,
      status: c,
      links: u
    } = t;
    const l = "parentSpanId" in t ? t.parentSpanId : "parentSpanContext" in t ? (r = t.parentSpanContext) == null ? undefined : r.spanId : undefined;
    return {
      span_id: e,
      trace_id: n,
      data: s,
      description: a,
      parent_span_id: l,
      start_timestamp: Cn(i),
      timestamp: Cn(o) || undefined,
      status: va(c),
      op: s[Ji],
      origin: s[Ki],
      links: ga(u)
    };
  }
  return {
    span_id: e,
    trace_id: n,
    start_timestamp: 0,
    data: {}
  };
}
function ba(t) {
  const e = t;
  return !!e.attributes && !!e.startTime && !!e.name && !!e.endTime && !!e.status;
}
function ya(t) {
  return typeof t.getSpanJSON == "function";
}
function $a(t) {
  const {
    traceFlags: e
  } = t.spanContext();
  return e === zr;
}
function va(t) {
  if (!!t && t.code !== Xi) {
    if (t.code === Qi) {
      return "ok";
    } else {
      return t.message || "internal_error";
    }
  }
}
const Ea = "_sentryRootSpan";
function qr(t) {
  return t[Ea] || t;
}
function Tn() {
  if (!Rn) {
    Se(() => {
      console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.");
    });
    Rn = true;
  }
}
function Sa(t) {
  var n;
  if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) {
    return false;
  }
  const e = (n = N()) == null ? undefined : n.getOptions();
  return !!e && (e.tracesSampleRate != null || !!e.tracesSampler);
}
function An(t) {
  y.log(`Ignoring span ${t.op} - ${t.description} because it matches \`ignoreSpans\`.`);
}
function Nn(t, e) {
  if (e == null || !e.length || !t.description) {
    return false;
  }
  for (const n of e) {
    if (xa(n)) {
      if (Ve(t.description, n)) {
        if (E) {
          An(t);
        }
        return true;
      }
      continue;
    }
    if (!n.name && !n.op) {
      continue;
    }
    const r = n.name ? Ve(t.description, n.name) : true;
    const s = n.op ? t.op && Ve(t.op, n.op) : true;
    if (r && s) {
      if (E) {
        An(t);
      }
      return true;
    }
  }
  return false;
}
function ka(t, e) {
  const n = e.parent_span_id;
  const r = e.span_id;
  if (n) {
    for (const s of t) {
      if (s.parent_span_id === r) {
        s.parent_span_id = n;
      }
    }
  }
}
function xa(t) {
  return typeof t == "string" || t instanceof RegExp;
}
const tn = "production";
const wa = "_frozenDsc";
function Gr(t, e) {
  const n = e.getOptions();
  const {
    publicKey: r
  } = e.getDsn() || {};
  const s = {
    environment: n.environment || tn,
    release: n.release,
    public_key: r,
    trace_id: t,
    org_id: pa(e)
  };
  e.emit("createDsc", s);
  return s;
}
function Ra(t, e) {
  const n = e.getPropagationContext();
  return n.dsc || Gr(n.traceId, t);
}
function Ca(t) {
  var C;
  const e = N();
  if (!e) {
    return {};
  }
  const n = qr(t);
  const r = en(n);
  const s = r.data;
  const i = n.spanContext().traceState;
  const a = (i == null ? undefined : i.get("sentry.sample_rate")) ?? s[Gi] ?? s[Yi];
  function o(M) {
    if (typeof a == "number" || typeof a == "string") {
      M.sample_rate = `${a}`;
    }
    return M;
  }
  const c = n[wa];
  if (c) {
    return o(c);
  }
  const u = i == null ? undefined : i.get("sentry.dsc");
  const l = u && ia(u);
  if (l) {
    return o(l);
  }
  const f = Gr(t.spanContext().traceId, e);
  const b = s[qi];
  const _ = r.description;
  if (b !== "url" && _) {
    f.transaction = _;
  }
  if (Sa()) {
    f.sampled = String($a(n));
    f.sample_rand = (i == null ? undefined : i.get("sentry.sample_rand")) ?? ((C = Hr(n).scope) == null ? undefined : C.getPropagationContext().sampleRand.toString());
  }
  o(f);
  e.emit("createDsc", f, n);
  return f;
}
function W(t, e = 100, n = Infinity) {
  try {
    return xt("", t, e, n);
  } catch (r) {
    return {
      ERROR: `**non-serializable** (${r})`
    };
  }
}
function Yr(t, e = 3, n = 102400) {
  const r = W(t, e);
  if (Na(r) > n) {
    return Yr(t, e - 1, n);
  } else {
    return r;
  }
}
function xt(t, e, n = Infinity, r = Infinity, s = Oa()) {
  const [i, a] = s;
  if (e == null || ["boolean", "string"].includes(typeof e) || typeof e == "number" && Number.isFinite(e)) {
    return e;
  }
  const o = Ia(t, e);
  if (!o.startsWith("[object ")) {
    return o;
  }
  if (e.__sentry_skip_normalization__) {
    return e;
  }
  const c = typeof e.__sentry_override_normalization_depth__ == "number" ? e.__sentry_override_normalization_depth__ : n;
  if (c === 0) {
    return o.replace("object ", "");
  }
  if (i(e)) {
    return "[Circular ~]";
  }
  const u = e;
  if (u && typeof u.toJSON == "function") {
    try {
      const _ = u.toJSON();
      return xt("", _, c - 1, r, s);
    } catch {}
  }
  const l = Array.isArray(e) ? [] : {};
  let f = 0;
  const b = Fr(e);
  for (const _ in b) {
    if (!Object.prototype.hasOwnProperty.call(b, _)) {
      continue;
    }
    if (f >= r) {
      l[_] = "[MaxProperties ~]";
      break;
    }
    const C = b[_];
    l[_] = xt(_, C, c - 1, r, s);
    f++;
  }
  a(e);
  return l;
}
function Ia(t, e) {
  try {
    if (t === "domain" && e && typeof e == "object" && e._events) {
      return "[Domain]";
    }
    if (t === "domainEmitter") {
      return "[DomainEmitter]";
    }
    if (typeof global !== "undefined" && e === global) {
      return "[Global]";
    }
    if (typeof window !== "undefined" && e === window) {
      return "[Window]";
    }
    if (typeof document !== "undefined" && e === document) {
      return "[Document]";
    }
    if (Mr(e)) {
      return Nr(e);
    }
    if (xi(e)) {
      return "[SyntheticEvent]";
    }
    if (typeof e == "number" && !Number.isFinite(e)) {
      return `[${e}]`;
    }
    if (typeof e == "function") {
      return `[Function: ${te(e)}]`;
    }
    if (typeof e == "symbol") {
      return `[${String(e)}]`;
    }
    if (typeof e == "bigint") {
      return `[BigInt: ${String(e)}]`;
    }
    const n = Ta(e);
    if (/^HTML(\w*)Element$/.test(n)) {
      return `[HTMLElement: ${n}]`;
    } else {
      return `[object ${n}]`;
    }
  } catch (n) {
    return `**non-serializable** (${n})`;
  }
}
function Ta(t) {
  const e = Object.getPrototypeOf(t);
  if (e != null && e.constructor) {
    return e.constructor.name;
  } else {
    return "null prototype";
  }
}
function Aa(t) {
  return ~-encodeURI(t).split(/%..|./).length;
}
function Na(t) {
  return Aa(JSON.stringify(t));
}
function Oa() {
  const t = new WeakSet();
  function e(r) {
    if (t.has(r)) {
      return true;
    } else {
      t.add(r);
      return false;
    }
  }
  function n(r) {
    t.delete(r);
  }
  return [e, n];
}
function xe(t, e = []) {
  return [t, e];
}
function Da(t, e) {
  const [n, r] = t;
  return [n, [...r, e]];
}
function On(t, e) {
  const n = t[1];
  for (const r of n) {
    const s = r[0].type;
    if (e(r, s)) {
      return true;
    }
  }
  return false;
}
function wt(t) {
  const e = st(R);
  if (e.encodePolyfill) {
    return e.encodePolyfill(t);
  } else {
    return new TextEncoder().encode(t);
  }
}
function Ma(t) {
  const [e, n] = t;
  let r = JSON.stringify(e);
  function s(i) {
    if (typeof r == "string") {
      r = typeof i == "string" ? r + i : [wt(r), i];
    } else {
      r.push(typeof i == "string" ? wt(i) : i);
    }
  }
  for (const i of n) {
    const [a, o] = i;
    s(`
${JSON.stringify(a)}
`);
    if (typeof o == "string" || o instanceof Uint8Array) {
      s(o);
    } else {
      let c;
      try {
        c = JSON.stringify(o);
      } catch {
        c = JSON.stringify(W(o));
      }
      s(c);
    }
  }
  if (typeof r == "string") {
    return r;
  } else {
    return Pa(r);
  }
}
function Pa(t) {
  const e = t.reduce((s, i) => s + i.length, 0);
  const n = new Uint8Array(e);
  let r = 0;
  for (const s of t) {
    n.set(s, r);
    r += s.length;
  }
  return n;
}
function La(t) {
  const e = typeof t.data == "string" ? wt(t.data) : t.data;
  return [{
    type: "attachment",
    length: e.length,
    filename: t.filename,
    content_type: t.contentType,
    attachment_type: t.attachmentType
  }, e];
}
const Fa = {
  session: "session",
  sessions: "session",
  attachment: "attachment",
  transaction: "transaction",
  event: "error",
  client_report: "internal",
  user_report: "default",
  profile: "profile",
  profile_chunk: "profile",
  replay_event: "replay",
  replay_recording: "replay",
  check_in: "monitor",
  feedback: "feedback",
  span: "span",
  raw_security: "security",
  log: "log_item",
  metric: "metric",
  trace_metric: "metric"
};
function Dn(t) {
  return Fa[t];
}
function Jr(t) {
  if (t == null || !t.sdk) {
    return;
  }
  const {
    name: e,
    version: n
  } = t.sdk;
  return {
    name: e,
    version: n
  };
}
function ja(t, e, n, r) {
  var i;
  const s = (i = t.sdkProcessingMetadata) == null ? undefined : i.dynamicSamplingContext;
  return {
    event_id: t.event_id,
    sent_at: new Date().toISOString(),
    ...(e && {
      sdk: e
    }),
    ...(!!n && r && {
      dsn: Le(r)
    }),
    ...(s && {
      trace: s
    })
  };
}
function Ua(t, e) {
  var r;
  var s;
  var i;
  var a;
  if (!e) {
    return t;
  }
  const n = t.sdk || {};
  t.sdk = {
    ...n,
    name: n.name || e.name,
    version: n.version || e.version,
    integrations: [...(((r = t.sdk) == null ? undefined : r.integrations) || []), ...(e.integrations || [])],
    packages: [...(((s = t.sdk) == null ? undefined : s.packages) || []), ...(e.packages || [])],
    settings: (i = t.sdk) != null && i.settings || e.settings ? {
      ...((a = t.sdk) == null ? undefined : a.settings),
      ...e.settings
    } : undefined
  };
  return t;
}
function Ba(t, e, n, r) {
  const s = Jr(n);
  const i = {
    sent_at: new Date().toISOString(),
    ...(s && {
      sdk: s
    }),
    ...(!!r && e && {
      dsn: Le(e)
    })
  };
  const a = "aggregates" in t ? [{
    type: "sessions"
  }, t] : [{
    type: "session"
  }, t.toJSON()];
  return xe(i, [a]);
}
function Wa(t, e, n, r) {
  const s = Jr(n);
  const i = t.type && t.type !== "replay_event" ? t.type : "event";
  Ua(t, n == null ? undefined : n.sdk);
  const a = ja(t, s, r, e);
  delete t.sdkProcessingMetadata;
  return xe(a, [[{
    type: i
  }, t]]);
}
const ht = 0;
const Mn = 1;
const Pn = 2;
function ct(t) {
  return new Ie(e => {
    e(t);
  });
}
function nn(t) {
  return new Ie((e, n) => {
    n(t);
  });
}
class Ie {
  constructor(e) {
    this._state = ht;
    this._handlers = [];
    this._runExecutor(e);
  }
  then(e, n) {
    return new Ie((r, s) => {
      this._handlers.push([false, i => {
        if (!e) {
          r(i);
        } else {
          try {
            r(e(i));
          } catch (a) {
            s(a);
          }
        }
      }, i => {
        if (!n) {
          s(i);
        } else {
          try {
            r(n(i));
          } catch (a) {
            s(a);
          }
        }
      }]);
      this._executeHandlers();
    });
  }
  catch(e) {
    return this.then(n => n, e);
  }
  finally(e) {
    return new Ie((n, r) => {
      let s;
      let i;
      return this.then(a => {
        i = false;
        s = a;
        if (e) {
          e();
        }
      }, a => {
        i = true;
        s = a;
        if (e) {
          e();
        }
      }).then(() => {
        if (i) {
          r(s);
          return;
        }
        n(s);
      });
    });
  }
  _executeHandlers() {
    if (this._state === ht) {
      return;
    }
    const e = this._handlers.slice();
    this._handlers = [];
    e.forEach(n => {
      if (!n[0]) {
        if (this._state === Mn) {
          n[1](this._value);
        }
        if (this._state === Pn) {
          n[2](this._value);
        }
        n[0] = true;
      }
    });
  }
  _runExecutor(e) {
    const n = (i, a) => {
      if (this._state === ht) {
        if (De(a)) {
          a.then(r, s);
          return;
        }
        this._state = i;
        this._value = a;
        this._executeHandlers();
      }
    };
    const r = i => {
      n(Mn, i);
    };
    const s = i => {
      n(Pn, i);
    };
    try {
      e(r, s);
    } catch (i) {
      s(i);
    }
  }
}
function Za(t, e, n, r = 0) {
  try {
    const s = Rt(e, n, t, r);
    if (De(s)) {
      return s;
    } else {
      return ct(s);
    }
  } catch (s) {
    return nn(s);
  }
}
function Rt(t, e, n, r) {
  const s = n[r];
  if (!t || !s) {
    return t;
  }
  const i = s({
    ...t
  }, e);
  if (E && i === null) {
    y.log(`Event processor "${s.id || "?"}" dropped event`);
  }
  if (De(i)) {
    return i.then(a => Rt(a, e, n, r + 1));
  } else {
    return Rt(i, e, n, r + 1);
  }
}
function Ha(t, e) {
  const {
    fingerprint: n,
    span: r,
    breadcrumbs: s,
    sdkProcessingMetadata: i
  } = e;
  Va(t, e);
  if (r) {
    Ga(t, r);
  }
  Ya(t, n);
  za(t, s);
  qa(t, i);
}
function Ye(t, e) {
  const {
    extra: n,
    tags: r,
    user: s,
    contexts: i,
    level: a,
    sdkProcessingMetadata: o,
    breadcrumbs: c,
    fingerprint: u,
    eventProcessors: l,
    attachments: f,
    propagationContext: b,
    transactionName: _,
    span: C
  } = e;
  Ue(t, "extra", n);
  Ue(t, "tags", r);
  Ue(t, "user", s);
  Ue(t, "contexts", i);
  t.sdkProcessingMetadata = Pe(t.sdkProcessingMetadata, o, 2);
  if (a) {
    t.level = a;
  }
  if (_) {
    t.transactionName = _;
  }
  if (C) {
    t.span = C;
  }
  if (c.length) {
    t.breadcrumbs = [...t.breadcrumbs, ...c];
  }
  if (u.length) {
    t.fingerprint = [...t.fingerprint, ...u];
  }
  if (l.length) {
    t.eventProcessors = [...t.eventProcessors, ...l];
  }
  if (f.length) {
    t.attachments = [...t.attachments, ...f];
  }
  t.propagationContext = {
    ...t.propagationContext,
    ...b
  };
}
function Ue(t, e, n) {
  t[e] = Pe(t[e], n, 1);
}
function Va(t, e) {
  const {
    extra: n,
    tags: r,
    user: s,
    contexts: i,
    level: a,
    transactionName: o
  } = e;
  if (Object.keys(n).length) {
    t.extra = {
      ...n,
      ...t.extra
    };
  }
  if (Object.keys(r).length) {
    t.tags = {
      ...r,
      ...t.tags
    };
  }
  if (Object.keys(s).length) {
    t.user = {
      ...s,
      ...t.user
    };
  }
  if (Object.keys(i).length) {
    t.contexts = {
      ...i,
      ...t.contexts
    };
  }
  if (a) {
    t.level = a;
  }
  if (o && t.type !== "transaction") {
    t.transaction = o;
  }
}
function za(t, e) {
  const n = [...(t.breadcrumbs || []), ...e];
  t.breadcrumbs = n.length ? n : undefined;
}
function qa(t, e) {
  t.sdkProcessingMetadata = {
    ...t.sdkProcessingMetadata,
    ...e
  };
}
function Ga(t, e) {
  t.contexts = {
    trace: ma(e),
    ...t.contexts
  };
  t.sdkProcessingMetadata = {
    dynamicSamplingContext: Ca(e),
    ...t.sdkProcessingMetadata
  };
  const n = qr(e);
  const r = en(n).description;
  if (r && !t.transaction && t.type === "transaction") {
    t.transaction = r;
  }
}
function Ya(t, e) {
  t.fingerprint = t.fingerprint ? Array.isArray(t.fingerprint) ? t.fingerprint : [t.fingerprint] : [];
  if (e) {
    t.fingerprint = t.fingerprint.concat(e);
  }
  if (!t.fingerprint.length) {
    delete t.fingerprint;
  }
}
let V;
let Ln;
let Fn;
let J;
function Ja(t) {
  const e = R._sentryDebugIds;
  const n = R._debugIds;
  if (!e && !n) {
    return {};
  }
  const r = e ? Object.keys(e) : [];
  const s = n ? Object.keys(n) : [];
  if (J && r.length === Ln && s.length === Fn) {
    return J;
  }
  Ln = r.length;
  Fn = s.length;
  J = {};
  V ||= {};
  const i = (a, o) => {
    for (const c of a) {
      const u = o[c];
      const l = V == null ? undefined : V[c];
      if (l && J && u) {
        J[l[0]] = u;
        if (V) {
          V[c] = [l[0], u];
        }
      } else if (u) {
        const f = t(c);
        for (let b = f.length - 1; b >= 0; b--) {
          const _ = f[b];
          const C = _ == null ? undefined : _.filename;
          if (C && J && V) {
            J[C] = u;
            V[c] = [C, u];
            break;
          }
        }
      }
    }
  };
  if (e) {
    i(r, e);
  }
  if (n) {
    i(s, n);
  }
  return J;
}
function Ka(t, e, n, r, s, i) {
  const {
    normalizeDepth: a = 3,
    normalizeMaxBreadth: o = 1000
  } = t;
  const c = {
    ...e,
    event_id: e.event_id || n.event_id || L(),
    timestamp: e.timestamp || Me()
  };
  const u = n.integrations || t.integrations.map(A => A.name);
  Xa(c, t);
  to(c, u);
  if (s) {
    s.emit("applyFrameMetadata", e);
  }
  if (e.type === undefined) {
    Qa(c, t.stackParser);
  }
  const l = ro(r, n.captureContext);
  if (n.mechanism) {
    _e(c, n.mechanism);
  }
  const f = s ? s.getEventProcessors() : [];
  const b = Qt().getScopeData();
  if (i) {
    const A = i.getScopeData();
    Ye(b, A);
  }
  if (l) {
    const A = l.getScopeData();
    Ye(b, A);
  }
  const _ = [...(n.attachments || []), ...b.attachments];
  if (_.length) {
    n.attachments = _;
  }
  Ha(c, b);
  const C = [...f, ...b.eventProcessors];
  return Za(C, c, n).then(A => {
    if (A) {
      eo(A);
    }
    if (typeof a == "number" && a > 0) {
      return no(A, a, o);
    } else {
      return A;
    }
  });
}
function Xa(t, e) {
  var o;
  var c;
  const {
    environment: n,
    release: r,
    dist: s,
    maxValueLength: i
  } = e;
  t.environment = t.environment || n || tn;
  if (!t.release && r) {
    t.release = r;
  }
  if (!t.dist && s) {
    t.dist = s;
  }
  const a = t.request;
  if (a != null && a.url && i) {
    a.url = Et(a.url, i);
  }
  if (i) {
    if ((c = (o = t.exception) == null ? undefined : o.values) != null) {
      c.forEach(u => {
        u.value &&= Et(u.value, i);
      });
    }
  }
}
function Qa(t, e) {
  var r;
  var s;
  const n = Ja(e);
  if ((s = (r = t.exception) == null ? undefined : r.values) != null) {
    s.forEach(i => {
      var a;
      var o;
      if ((o = (a = i.stacktrace) == null ? undefined : a.frames) != null) {
        o.forEach(c => {
          if (c.filename) {
            c.debug_id = n[c.filename];
          }
        });
      }
    });
  }
}
function eo(t) {
  var r;
  var s;
  const e = {};
  if ((s = (r = t.exception) == null ? undefined : r.values) != null) {
    s.forEach(i => {
      var a;
      var o;
      if ((o = (a = i.stacktrace) == null ? undefined : a.frames) != null) {
        o.forEach(c => {
          if (c.debug_id) {
            if (c.abs_path) {
              e[c.abs_path] = c.debug_id;
            } else if (c.filename) {
              e[c.filename] = c.debug_id;
            }
            delete c.debug_id;
          }
        });
      }
    });
  }
  if (Object.keys(e).length === 0) {
    return;
  }
  t.debug_meta = t.debug_meta || {};
  t.debug_meta.images = t.debug_meta.images || [];
  const n = t.debug_meta.images;
  Object.entries(e).forEach(([i, a]) => {
    n.push({
      type: "sourcemap",
      code_file: i,
      debug_id: a
    });
  });
}
function to(t, e) {
  if (e.length > 0) {
    t.sdk = t.sdk || {};
    t.sdk.integrations = [...(t.sdk.integrations || []), ...e];
  }
}
function no(t, e, n) {
  var s;
  var i;
  if (!t) {
    return null;
  }
  const r = {
    ...t,
    ...(t.breadcrumbs && {
      breadcrumbs: t.breadcrumbs.map(a => ({
        ...a,
        ...(a.data && {
          data: W(a.data, e, n)
        })
      }))
    }),
    ...(t.user && {
      user: W(t.user, e, n)
    }),
    ...(t.contexts && {
      contexts: W(t.contexts, e, n)
    }),
    ...(t.extra && {
      extra: W(t.extra, e, n)
    })
  };
  if ((s = t.contexts) != null && s.trace && r.contexts) {
    r.contexts.trace = t.contexts.trace;
    if (t.contexts.trace.data) {
      r.contexts.trace.data = W(t.contexts.trace.data, e, n);
    }
  }
  if (t.spans) {
    r.spans = t.spans.map(a => ({
      ...a,
      ...(a.data && {
        data: W(a.data, e, n)
      })
    }));
  }
  if ((i = t.contexts) != null && i.flags && r.contexts) {
    r.contexts.flags = W(t.contexts.flags, 3, n);
  }
  return r;
}
function ro(t, e) {
  if (!e) {
    return t;
  }
  const n = t ? t.clone() : new G();
  n.update(e);
  return n;
}
function so(t, e) {
  return H().captureException(t, undefined);
}
function Kr(t, e) {
  return H().captureEvent(t, e);
}
function jn(t) {
  const e = fe();
  const n = H();
  const {
    userAgent: r
  } = R.navigator || {};
  const s = Mi({
    user: n.getUser() || e.getUser(),
    ...(r && {
      userAgent: r
    }),
    ...t
  });
  const i = e.getSession();
  if ((i == null ? undefined : i.status) === "ok") {
    he(i, {
      status: "exited"
    });
  }
  Xr();
  e.setSession(s);
  return s;
}
function Xr() {
  const t = fe();
  const n = H().getSession() || t.getSession();
  if (n) {
    Pi(n);
  }
  Qr();
  t.setSession();
}
function Qr() {
  const t = fe();
  const e = N();
  const n = t.getSession();
  if (n && e) {
    e.captureSession(n);
  }
}
function Un(t = false) {
  if (t) {
    Xr();
    return;
  }
  Qr();
}
const io = "7";
function ao(t) {
  const e = t.protocol ? `${t.protocol}:` : "";
  const n = t.port ? `:${t.port}` : "";
  return `${e}//${t.host}${n}${t.path ? `/${t.path}` : ""}/api/`;
}
function oo(t) {
  return `${ao(t)}${t.projectId}/envelope/`;
}
function co(t, e) {
  const n = {
    sentry_version: io
  };
  if (t.publicKey) {
    n.sentry_key = t.publicKey;
  }
  if (e) {
    n.sentry_client = `${e.name}/${e.version}`;
  }
  return new URLSearchParams(n).toString();
}
function uo(t, e, n) {
  return e || `${oo(t)}?${co(t, n)}`;
}
const Bn = [];
function lo(t) {
  const e = {};
  t.forEach(n => {
    const {
      name: r
    } = n;
    const s = e[r];
    if (!s || !!s.isDefaultInstance || !n.isDefaultInstance) {
      e[r] = n;
    }
  });
  return Object.values(e);
}
function fo(t) {
  const e = t.defaultIntegrations || [];
  const n = t.integrations;
  e.forEach(s => {
    s.isDefaultInstance = true;
  });
  let r;
  if (Array.isArray(n)) {
    r = [...e, ...n];
  } else if (typeof n == "function") {
    const s = n(e);
    r = Array.isArray(s) ? s : [s];
  } else {
    r = e;
  }
  return lo(r);
}
function po(t, e) {
  const n = {};
  e.forEach(r => {
    if (r) {
      es(t, r, n);
    }
  });
  return n;
}
function Wn(t, e) {
  for (const n of e) {
    if (n != null && n.afterAllSetup) {
      n.afterAllSetup(t);
    }
  }
}
function es(t, e, n) {
  if (n[e.name]) {
    if (E) {
      y.log(`Integration skipped because it was already installed: ${e.name}`);
    }
    return;
  }
  n[e.name] = e;
  if (!Bn.includes(e.name) && typeof e.setupOnce == "function") {
    e.setupOnce();
    Bn.push(e.name);
  }
  if (e.setup && typeof e.setup == "function") {
    e.setup(t);
  }
  if (typeof e.preprocessEvent == "function") {
    const r = e.preprocessEvent.bind(e);
    t.on("preprocessEvent", (s, i) => r(s, i, t));
  }
  if (typeof e.processEvent == "function") {
    const r = e.processEvent.bind(e);
    const s = Object.assign((i, a) => r(i, a, t), {
      id: e.name
    });
    t.addEventProcessor(s);
  }
  if (E) {
    y.log(`Integration installed: ${e.name}`);
  }
}
function _o(t) {
  return [{
    type: "log",
    item_count: t.length,
    content_type: "application/vnd.sentry.items.log+json"
  }, {
    items: t
  }];
}
function ho(t, e, n, r) {
  const s = {};
  if (e != null && e.sdk) {
    s.sdk = {
      name: e.sdk.name,
      version: e.sdk.version
    };
  }
  if (n && r) {
    s.dsn = Le(r);
  }
  return xe(s, [_o(t)]);
}
function ts(t, e) {
  const n = e ?? mo(t) ?? [];
  if (n.length === 0) {
    return;
  }
  const r = t.getOptions();
  const s = ho(n, r._metadata, r.tunnel, t.getDsn());
  ns().set(t, []);
  t.emit("flushLogs");
  t.sendEnvelope(s);
}
function mo(t) {
  return ns().get(t);
}
function ns() {
  return Ee("clientToLogBufferMap", () => new WeakMap());
}
function go(t) {
  return [{
    type: "trace_metric",
    item_count: t.length,
    content_type: "application/vnd.sentry.items.trace-metric+json"
  }, {
    items: t
  }];
}
function bo(t, e, n, r) {
  const s = {};
  if (e != null && e.sdk) {
    s.sdk = {
      name: e.sdk.name,
      version: e.sdk.version
    };
  }
  if (n && r) {
    s.dsn = Le(r);
  }
  return xe(s, [go(t)]);
}
function rs(t, e) {
  const n = e ?? yo(t) ?? [];
  if (n.length === 0) {
    return;
  }
  const r = t.getOptions();
  const s = bo(n, r._metadata, r.tunnel, t.getDsn());
  ss().set(t, []);
  t.emit("flushMetrics");
  t.sendEnvelope(s);
}
function yo(t) {
  return ss().get(t);
}
function ss() {
  return Ee("clientToMetricBufferMap", () => new WeakMap());
}
const rn = Symbol.for("SentryBufferFullError");
function sn(t = 100) {
  const e = new Set();
  function n() {
    return e.size < t;
  }
  function r(a) {
    e.delete(a);
  }
  function s(a) {
    if (!n()) {
      return nn(rn);
    }
    const o = a();
    e.add(o);
    o.then(() => r(o), () => r(o));
    return o;
  }
  function i(a) {
    if (!e.size) {
      return ct(true);
    }
    const o = Promise.allSettled(Array.from(e)).then(() => true);
    if (!a) {
      return o;
    }
    const c = [o, new Promise(u => setTimeout(() => u(false), a))];
    return Promise.race(c);
  }
  return {
    get $() {
      return Array.from(e);
    },
    add: s,
    drain: i
  };
}
const $o = 60000;
function vo(t, e = Date.now()) {
  const n = parseInt(`${t}`, 10);
  if (!isNaN(n)) {
    return n * 1000;
  }
  const r = Date.parse(`${t}`);
  if (isNaN(r)) {
    return $o;
  } else {
    return r - e;
  }
}
function Eo(t, e) {
  return t[e] || t.all || 0;
}
function So(t, e, n = Date.now()) {
  return Eo(t, e) > n;
}
function ko(t, {
  statusCode: e,
  headers: n
}, r = Date.now()) {
  const s = {
    ...t
  };
  const i = n == null ? undefined : n["x-sentry-rate-limits"];
  const a = n == null ? undefined : n["retry-after"];
  if (i) {
    for (const o of i.trim().split(",")) {
      const [c, u,,, l] = o.split(":", 5);
      const f = parseInt(c, 10);
      const b = (isNaN(f) ? 60 : f) * 1000;
      if (!u) {
        s.all = r + b;
      } else {
        for (const _ of u.split(";")) {
          if (_ === "metric_bucket") {
            if (!l || l.split(";").includes("custom")) {
              s[_] = r + b;
            }
          } else {
            s[_] = r + b;
          }
        }
      }
    }
  } else if (a) {
    s.all = r + vo(a, r);
  } else if (e === 429) {
    s.all = r + 60000;
  }
  return s;
}
const is = 64;
function as(t, e, n = sn(t.bufferSize || is)) {
  let r = {};
  const s = a => n.drain(a);
  function i(a) {
    const o = [];
    On(a, (f, b) => {
      const _ = Dn(b);
      if (So(r, _)) {
        t.recordDroppedEvent("ratelimit_backoff", _);
      } else {
        o.push(f);
      }
    });
    if (o.length === 0) {
      return Promise.resolve({});
    }
    const c = xe(a[0], o);
    const u = f => {
      On(c, (b, _) => {
        t.recordDroppedEvent(f, Dn(_));
      });
    };
    const l = () => e({
      body: Ma(c)
    }).then(f => {
      if (f.statusCode !== undefined && (f.statusCode < 200 || f.statusCode >= 300) && E) {
        y.warn(`Sentry responded with status code ${f.statusCode} to sent event.`);
      }
      r = ko(r, f);
      return f;
    }, f => {
      u("network_error");
      if (E) {
        y.error("Encountered error running transport request:", f);
      }
      throw f;
    });
    return n.add(l).then(f => f, f => {
      if (f === rn) {
        if (E) {
          y.error("Skipped sending event because buffer is full.");
        }
        u("queue_overflow");
        return Promise.resolve({});
      }
      throw f;
    });
  }
  return {
    send: i,
    flush: s
  };
}
function xo(t, e, n) {
  const r = [{
    type: "client_report"
  }, {
    timestamp: Me(),
    discarded_events: t
  }];
  return xe(e ? {
    dsn: e
  } : {}, [r]);
}
function os(t) {
  const e = [];
  if (t.message) {
    e.push(t.message);
  }
  try {
    const n = t.exception.values[t.exception.values.length - 1];
    if (n != null && n.value) {
      e.push(n.value);
      if (n.type) {
        e.push(`${n.type}: ${n.value}`);
      }
    }
  } catch {}
  return e;
}
function wo(t) {
  var c;
  const {
    trace_id: e,
    parent_span_id: n,
    span_id: r,
    status: s,
    origin: i,
    data: a,
    op: o
  } = ((c = t.contexts) == null ? undefined : c.trace) ?? {};
  return {
    data: a ?? {},
    description: t.transaction,
    op: o,
    parent_span_id: n,
    span_id: r ?? "",
    start_timestamp: t.start_timestamp ?? 0,
    status: s,
    timestamp: t.timestamp,
    trace_id: e ?? "",
    origin: i,
    profile_id: a == null ? undefined : a[Wr],
    exclusive_time: a == null ? undefined : a[Zr],
    measurements: t.measurements,
    is_segment: true
  };
}
function Ro(t) {
  return {
    type: "transaction",
    timestamp: t.timestamp,
    start_timestamp: t.start_timestamp,
    transaction: t.description,
    contexts: {
      trace: {
        trace_id: t.trace_id,
        span_id: t.span_id,
        parent_span_id: t.parent_span_id,
        op: t.op,
        status: t.status,
        origin: t.origin,
        data: {
          ...t.data,
          ...(t.profile_id && {
            [Wr]: t.profile_id
          }),
          ...(t.exclusive_time && {
            [Zr]: t.exclusive_time
          })
        }
      }
    },
    measurements: t.measurements
  };
}
const Zn = "Not capturing exception because it's already been captured.";
const Hn = "Discarded session because of missing or non-string release";
const cs = Symbol.for("SentryInternalError");
const us = Symbol.for("SentryDoNotSendEventError");
const Co = 5000;
function ze(t) {
  return {
    message: t,
    [cs]: true
  };
}
function mt(t) {
  return {
    message: t,
    [us]: true
  };
}
function Vn(t) {
  return !!t && typeof t == "object" && cs in t;
}
function zn(t) {
  return !!t && typeof t == "object" && us in t;
}
function qn(t, e, n, r, s) {
  let i = 0;
  let a;
  let o = false;
  t.on(n, () => {
    i = 0;
    clearTimeout(a);
    o = false;
  });
  t.on(e, c => {
    i += r(c);
    if (i >= 800000) {
      s(t);
    } else if (!o) {
      o = true;
      a = setTimeout(() => {
        s(t);
      }, Co);
    }
  });
  t.on("flush", () => {
    s(t);
  });
}
class Io {
  constructor(e) {
    var r;
    var s;
    var i;
    this._options = e;
    this._integrations = {};
    this._numProcessing = 0;
    this._outcomes = {};
    this._hooks = {};
    this._eventProcessors = [];
    this._promiseBuffer = sn(((r = e.transportOptions) == null ? undefined : r.bufferSize) ?? is);
    if (e.dsn) {
      this._dsn = _a(e.dsn);
    } else if (E) {
      y.warn("No DSN provided, client will not send events.");
    }
    if (this._dsn) {
      const a = uo(this._dsn, e.tunnel, e._metadata ? e._metadata.sdk : undefined);
      this._transport = e.transport({
        tunnel: this._options.tunnel,
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...e.transportOptions,
        url: a
      });
    }
    this._options.enableLogs = this._options.enableLogs ?? ((s = this._options._experiments) == null ? undefined : s.enableLogs);
    if (this._options.enableLogs) {
      qn(this, "afterCaptureLog", "flushLogs", Oo, ts);
    }
    if (this._options.enableMetrics ?? ((i = this._options._experiments) == null ? undefined : i.enableMetrics) ?? true) {
      qn(this, "afterCaptureMetric", "flushMetrics", No, rs);
    }
  }
  captureException(e, n, r) {
    const s = L();
    if ($n(e)) {
      if (E) {
        y.log(Zn);
      }
      return s;
    }
    const i = {
      event_id: s,
      ...n
    };
    this._process(() => this.eventFromException(e, i).then(a => this._captureEvent(a, i, r)).then(a => a), "error");
    return i.event_id;
  }
  captureMessage(e, n, r, s) {
    const i = {
      event_id: L(),
      ...r
    };
    const a = Gt(e) ? e : String(e);
    const o = it(e);
    const c = o ? this.eventFromMessage(a, n, i) : this.eventFromException(e, i);
    this._process(() => c.then(u => this._captureEvent(u, i, s)), o ? "unknown" : "error");
    return i.event_id;
  }
  captureEvent(e, n, r) {
    const s = L();
    if (n != null && n.originalException && $n(n.originalException)) {
      if (E) {
        y.log(Zn);
      }
      return s;
    }
    const i = {
      event_id: s,
      ...n
    };
    const a = e.sdkProcessingMetadata || {};
    const o = a.capturedSpanScope;
    const c = a.capturedSpanIsolationScope;
    const u = Gn(e.type);
    this._process(() => this._captureEvent(e, i, o || r, c), u);
    return i.event_id;
  }
  captureSession(e) {
    this.sendSession(e);
    he(e, {
      init: false
    });
  }
  getDsn() {
    return this._dsn;
  }
  getOptions() {
    return this._options;
  }
  getSdkMetadata() {
    return this._options._metadata;
  }
  getTransport() {
    return this._transport;
  }
  async flush(e) {
    const n = this._transport;
    if (!n) {
      return true;
    }
    this.emit("flush");
    const r = await this._isClientDoneProcessing(e);
    const s = await n.flush(e);
    return r && s;
  }
  async close(e) {
    const n = await this.flush(e);
    this.getOptions().enabled = false;
    this.emit("close");
    return n;
  }
  getEventProcessors() {
    return this._eventProcessors;
  }
  addEventProcessor(e) {
    this._eventProcessors.push(e);
  }
  init() {
    if (this._isEnabled() || this._options.integrations.some(({
      name: e
    }) => e.startsWith("Spotlight"))) {
      this._setupIntegrations();
    }
  }
  getIntegrationByName(e) {
    return this._integrations[e];
  }
  addIntegration(e) {
    const n = this._integrations[e.name];
    es(this, e, this._integrations);
    if (!n) {
      Wn(this, [e]);
    }
  }
  sendEvent(e, n = {}) {
    this.emit("beforeSendEvent", e, n);
    let r = Wa(e, this._dsn, this._options._metadata, this._options.tunnel);
    for (const s of n.attachments || []) {
      r = Da(r, La(s));
    }
    this.sendEnvelope(r).then(s => this.emit("afterSendEvent", e, s));
  }
  sendSession(e) {
    const {
      release: n,
      environment: r = tn
    } = this._options;
    if ("aggregates" in e) {
      const i = e.attrs || {};
      if (!i.release && !n) {
        if (E) {
          y.warn(Hn);
        }
        return;
      }
      i.release = i.release || n;
      i.environment = i.environment || r;
      e.attrs = i;
    } else {
      if (!e.release && !n) {
        if (E) {
          y.warn(Hn);
        }
        return;
      }
      e.release = e.release || n;
      e.environment = e.environment || r;
    }
    this.emit("beforeSendSession", e);
    const s = Ba(e, this._dsn, this._options._metadata, this._options.tunnel);
    this.sendEnvelope(s);
  }
  recordDroppedEvent(e, n, r = 1) {
    if (this._options.sendClientReports) {
      const s = `${e}:${n}`;
      if (E) {
        y.log(`Recording outcome: "${s}"${r > 1 ? ` (${r} times)` : ""}`);
      }
      this._outcomes[s] = (this._outcomes[s] || 0) + r;
    }
  }
  on(e, n) {
    const r = this._hooks[e] = this._hooks[e] || new Set();
    const s = (...i) => n(...i);
    r.add(s);
    return () => {
      r.delete(s);
    };
  }
  emit(e, ...n) {
    const r = this._hooks[e];
    if (r) {
      r.forEach(s => s(...n));
    }
  }
  async sendEnvelope(e) {
    this.emit("beforeEnvelope", e);
    if (this._isEnabled() && this._transport) {
      try {
        return await this._transport.send(e);
      } catch (n) {
        if (E) {
          y.error("Error while sending envelope:", n);
        }
        return {};
      }
    }
    if (E) {
      y.error("Transport disabled");
    }
    return {};
  }
  _setupIntegrations() {
    const {
      integrations: e
    } = this._options;
    this._integrations = po(this, e);
    Wn(this, e);
  }
  _updateSessionFromEvent(e, n) {
    var c;
    var u;
    let r = n.level === "fatal";
    let s = false;
    const i = (c = n.exception) == null ? undefined : c.values;
    if (i) {
      s = true;
      r = false;
      for (const l of i) {
        if (((u = l.mechanism) == null ? undefined : u.handled) === false) {
          r = true;
          break;
        }
      }
    }
    const a = e.status === "ok";
    if (a && e.errors === 0 || a && r) {
      he(e, {
        ...(r && {
          status: "crashed"
        }),
        errors: e.errors || Number(s || r)
      });
      this.captureSession(e);
    }
  }
  async _isClientDoneProcessing(e) {
    let n = 0;
    while (!e || n < e) {
      await new Promise(r => setTimeout(r, 1));
      if (!this._numProcessing) {
        return true;
      }
      n++;
    }
    return false;
  }
  _isEnabled() {
    return this.getOptions().enabled !== false && this._transport !== undefined;
  }
  _prepareEvent(e, n, r, s) {
    const i = this.getOptions();
    const a = Object.keys(this._integrations);
    if (!n.integrations && a != null && a.length) {
      n.integrations = a;
    }
    this.emit("preprocessEvent", e, n);
    if (!e.type) {
      s.setLastEventId(e.event_id || n.event_id);
    }
    return Ka(i, e, n, r, this, s).then(o => {
      if (o === null) {
        return o;
      }
      this.emit("postprocessEvent", o, n);
      o.contexts = {
        trace: zi(r),
        ...o.contexts
      };
      const c = Ra(this, r);
      o.sdkProcessingMetadata = {
        dynamicSamplingContext: c,
        ...o.sdkProcessingMetadata
      };
      return o;
    });
  }
  _captureEvent(e, n = {}, r = H(), s = fe()) {
    if (E && Ct(e)) {
      y.log(`Captured error event \`${os(e)[0] || "<unknown>"}\``);
    }
    return this._processEvent(e, n, r, s).then(i => i.event_id, i => {
      if (E) {
        if (zn(i)) {
          y.log(i.message);
        } else if (Vn(i)) {
          y.warn(i.message);
        } else {
          y.warn(i);
        }
      }
    });
  }
  _processEvent(e, n, r, s) {
    const i = this.getOptions();
    const {
      sampleRate: a
    } = i;
    const o = ds(e);
    const c = Ct(e);
    const l = `before send for type \`${e.type || "error"}\``;
    const f = typeof a === "undefined" ? undefined : ha(a);
    if (c && typeof f == "number" && Math.random() > f) {
      this.recordDroppedEvent("sample_rate", "error");
      return nn(mt(`Discarding event because it's not included in the random sample (sampling rate = ${a})`));
    }
    const b = Gn(e.type);
    return this._prepareEvent(e, n, r, s).then(_ => {
      if (_ === null) {
        this.recordDroppedEvent("event_processor", b);
        throw mt("An event processor returned `null`, will not send event.");
      }
      if (n.data && n.data.__sentry__ === true) {
        return _;
      }
      const M = Ao(this, i, _, n);
      return To(M, l);
    }).then(_ => {
      var A;
      if (_ === null) {
        this.recordDroppedEvent("before_send", b);
        if (o) {
          const dt = 1 + (e.spans || []).length;
          this.recordDroppedEvent("before_send", "span", dt);
        }
        throw mt(`${l} returned \`null\`, will not send event.`);
      }
      const C = r.getSession() || s.getSession();
      if (c && C) {
        this._updateSessionFromEvent(C, _);
      }
      if (o) {
        const Fe = ((A = _.sdkProcessingMetadata) == null ? undefined : A.spanCountBeforeProcessing) || 0;
        const dt = _.spans ? _.spans.length : 0;
        const ln = Fe - dt;
        if (ln > 0) {
          this.recordDroppedEvent("before_send", "span", ln);
        }
      }
      const M = _.transaction_info;
      if (o && M && _.transaction !== e.transaction) {
        const Fe = "custom";
        _.transaction_info = {
          ...M,
          source: Fe
        };
      }
      this.sendEvent(_, n);
      return _;
    }).then(null, _ => {
      throw zn(_) || Vn(_) ? _ : (this.captureException(_, {
        mechanism: {
          handled: false,
          type: "internal"
        },
        data: {
          __sentry__: true
        },
        originalException: _
      }), ze(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${_}`));
    });
  }
  _process(e, n) {
    this._numProcessing++;
    this._promiseBuffer.add(e).then(r => {
      this._numProcessing--;
      return r;
    }, r => {
      this._numProcessing--;
      if (r === rn) {
        this.recordDroppedEvent("queue_overflow", n);
      }
      return r;
    });
  }
  _clearOutcomes() {
    const e = this._outcomes;
    this._outcomes = {};
    return Object.entries(e).map(([n, r]) => {
      const [s, i] = n.split(":");
      return {
        reason: s,
        category: i,
        quantity: r
      };
    });
  }
  _flushOutcomes() {
    if (E) {
      y.log("Flushing outcomes...");
    }
    const e = this._clearOutcomes();
    if (e.length === 0) {
      if (E) {
        y.log("No outcomes to send");
      }
      return;
    }
    if (!this._dsn) {
      if (E) {
        y.log("No dsn provided, will not send outcomes");
      }
      return;
    }
    if (E) {
      y.log("Sending outcomes:", e);
    }
    const n = xo(e, this._options.tunnel && Le(this._dsn));
    this.sendEnvelope(n);
  }
}
function Gn(t) {
  if (t === "replay_event") {
    return "replay";
  } else {
    return t || "error";
  }
}
function To(t, e) {
  const n = `${e} must return \`null\` or a valid event.`;
  if (De(t)) {
    return t.then(r => {
      if (!Ce(r) && r !== null) {
        throw ze(n);
      }
      return r;
    }, r => {
      throw ze(`${e} rejected with ${r}`);
    });
  }
  if (!Ce(t) && t !== null) {
    throw ze(n);
  }
  return t;
}
function Ao(t, e, n, r) {
  const {
    beforeSend: s,
    beforeSendTransaction: i,
    beforeSendSpan: a,
    ignoreSpans: o
  } = e;
  let c = n;
  if (Ct(c) && s) {
    return s(c, r);
  }
  if (ds(c)) {
    if (a || o) {
      const u = wo(c);
      if (o != null && o.length && Nn(u, o)) {
        return null;
      }
      if (a) {
        const l = a(u);
        if (l) {
          c = Pe(n, Ro(l));
        } else {
          Tn();
        }
      }
      if (c.spans) {
        const l = [];
        const f = c.spans;
        for (const _ of f) {
          if (o != null && o.length && Nn(_, o)) {
            ka(f, _);
            continue;
          }
          if (a) {
            const C = a(_);
            if (C) {
              l.push(C);
            } else {
              Tn();
              l.push(_);
            }
          } else {
            l.push(_);
          }
        }
        const b = c.spans.length - l.length;
        if (b) {
          t.recordDroppedEvent("before_send", "span", b);
        }
        c.spans = l;
      }
    }
    if (i) {
      if (c.spans) {
        const u = c.spans.length;
        c.sdkProcessingMetadata = {
          ...n.sdkProcessingMetadata,
          spanCountBeforeProcessing: u
        };
      }
      return i(c, r);
    }
  }
  return c;
}
function Ct(t) {
  return t.type === undefined;
}
function ds(t) {
  return t.type === "transaction";
}
function No(t) {
  let e = 0;
  if (t.name) {
    e += t.name.length * 2;
  }
  e += 8;
  return e + ls(t.attributes);
}
function Oo(t) {
  let e = 0;
  if (t.message) {
    e += t.message.length * 2;
  }
  return e + ls(t.attributes);
}
function ls(t) {
  if (!t) {
    return 0;
  }
  let e = 0;
  Object.values(t).forEach(n => {
    if (Array.isArray(n)) {
      e += n.length * Yn(n[0]);
    } else if (it(n)) {
      e += Yn(n);
    } else {
      e += 100;
    }
  });
  return e;
}
function Yn(t) {
  if (typeof t == "string") {
    return t.length * 2;
  } else if (typeof t == "number") {
    return 8;
  } else if (typeof t == "boolean") {
    return 4;
  } else {
    return 0;
  }
}
function Do(t, e) {
  if (e.debug === true) {
    if (E) {
      y.enable();
    } else {
      Se(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  H().update(e.initialScope);
  const r = new t(e);
  Mo(r);
  r.init();
  return r;
}
function Mo(t) {
  H().setClient(t);
}
function gt(t) {
  if (!t) {
    return {};
  }
  const e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
  if (!e) {
    return {};
  }
  const n = e[6] || "";
  const r = e[8] || "";
  return {
    host: e[4],
    path: e[5],
    protocol: e[2],
    search: n,
    hash: r,
    relative: e[5] + n + r
  };
}
function Po(t) {
  var e;
  if ("aggregates" in t) {
    if (((e = t.attrs) == null ? undefined : e.ip_address) === undefined) {
      t.attrs = {
        ...t.attrs,
        ip_address: "{{auto}}"
      };
    }
  } else if (t.ipAddress === undefined) {
    t.ipAddress = "{{auto}}";
  }
}
function Lo(t, e, n = [e], r = "npm") {
  const s = t._metadata || {};
  s.sdk ||= {
    name: `sentry.javascript.${e}`,
    packages: n.map(i => ({
      name: `${r}:@sentry/${i}`,
      version: ae
    })),
    version: ae
  };
  t._metadata = s;
}
const Fo = 100;
function ce(t, e) {
  const n = N();
  const r = fe();
  if (!n) {
    return;
  }
  const {
    beforeBreadcrumb: s = null,
    maxBreadcrumbs: i = Fo
  } = n.getOptions();
  if (i <= 0) {
    return;
  }
  const o = {
    timestamp: Me(),
    ...t
  };
  const c = s ? Se(() => s(o, e)) : o;
  if (c !== null) {
    if (n.emit) {
      n.emit("beforeAddBreadcrumb", c, e);
    }
    r.addBreadcrumb(c, i);
  }
}
let Jn;
const jo = "FunctionToString";
const Kn = new WeakMap();
const Uo = () => ({
  name: jo,
  setupOnce() {
    Jn = Function.prototype.toString;
    try {
      Function.prototype.toString = function (...t) {
        const e = Kt(this);
        const n = Kn.has(N()) && e !== undefined ? e : this;
        return Jn.apply(n, t);
      };
    } catch {}
  },
  setup(t) {
    Kn.set(t, true);
  }
});
const Bo = Uo;
const Wo = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, /^Can't find variable: gmo$/, /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/, `can't redefine non-configurable property "solana"`, "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler", /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/, /^Java exception was raised during method invocation$/];
const Zo = "EventFilters";
const Ho = (t = {}) => {
  let e;
  return {
    name: Zo,
    setup(n) {
      const r = n.getOptions();
      e = Xn(t, r);
    },
    processEvent(n, r, s) {
      if (!e) {
        const i = s.getOptions();
        e = Xn(t, i);
      }
      if (zo(n, e)) {
        return null;
      } else {
        return n;
      }
    }
  };
};
const Vo = (t = {}) => ({
  ...Ho(t),
  name: "InboundFilters"
});
function Xn(t = {}, e = {}) {
  return {
    allowUrls: [...(t.allowUrls || []), ...(e.allowUrls || [])],
    denyUrls: [...(t.denyUrls || []), ...(e.denyUrls || [])],
    ignoreErrors: [...(t.ignoreErrors || []), ...(e.ignoreErrors || []), ...(t.disableErrorDefaults ? [] : Wo)],
    ignoreTransactions: [...(t.ignoreTransactions || []), ...(e.ignoreTransactions || [])]
  };
}
function zo(t, e) {
  if (t.type) {
    if (t.type === "transaction" && Go(t, e.ignoreTransactions)) {
      if (E) {
        y.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${ie(t)}`);
      }
      return true;
    }
  } else {
    if (qo(t, e.ignoreErrors)) {
      if (E) {
        y.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${ie(t)}`);
      }
      return true;
    }
    if (Xo(t)) {
      if (E) {
        y.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${ie(t)}`);
      }
      return true;
    }
    if (Yo(t, e.denyUrls)) {
      if (E) {
        y.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${ie(t)}.
Url: ${Je(t)}`);
      }
      return true;
    }
    if (!Jo(t, e.allowUrls)) {
      if (E) {
        y.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${ie(t)}.
Url: ${Je(t)}`);
      }
      return true;
    }
  }
  return false;
}
function qo(t, e) {
  if (e != null && e.length) {
    return os(t).some(n => ot(n, e));
  } else {
    return false;
  }
}
function Go(t, e) {
  if (e == null || !e.length) {
    return false;
  }
  const n = t.transaction;
  if (n) {
    return ot(n, e);
  } else {
    return false;
  }
}
function Yo(t, e) {
  if (e == null || !e.length) {
    return false;
  }
  const n = Je(t);
  if (n) {
    return ot(n, e);
  } else {
    return false;
  }
}
function Jo(t, e) {
  if (e == null || !e.length) {
    return true;
  }
  const n = Je(t);
  if (n) {
    return ot(n, e);
  } else {
    return true;
  }
}
function Ko(t = []) {
  for (let e = t.length - 1; e >= 0; e--) {
    const n = t[e];
    if (n && n.filename !== "<anonymous>" && n.filename !== "[native code]") {
      return n.filename || null;
    }
  }
  return null;
}
function Je(t) {
  var e;
  var n;
  try {
    const r = [...(((e = t.exception) == null ? undefined : e.values) ?? [])].reverse().find(i => {
      var a;
      var o;
      var c;
      return ((a = i.mechanism) == null ? undefined : a.parent_id) === undefined && ((c = (o = i.stacktrace) == null ? undefined : o.frames) == null ? undefined : c.length);
    });
    const s = (n = r == null ? undefined : r.stacktrace) == null ? undefined : n.frames;
    if (s) {
      return Ko(s);
    } else {
      return null;
    }
  } catch {
    if (E) {
      y.error(`Cannot extract url for event ${ie(t)}`);
    }
    return null;
  }
}
function Xo(t) {
  var e;
  var n;
  if ((n = (e = t.exception) == null ? undefined : e.values) != null && n.length) {
    return !t.message && !t.exception.values.some(r => r.stacktrace || r.type && r.type !== "Error" || r.value);
  } else {
    return false;
  }
}
function Qo(t, e, n, r, s, i) {
  var o;
  if ((o = s.exception) == null || !o.values || !i || !ne(i.originalException, Error)) {
    return;
  }
  const a = s.exception.values.length > 0 ? s.exception.values[s.exception.values.length - 1] : undefined;
  if (a) {
    s.exception.values = It(t, e, r, i.originalException, n, s.exception.values, a, 0);
  }
}
function It(t, e, n, r, s, i, a, o) {
  if (i.length >= n + 1) {
    return i;
  }
  let c = [...i];
  if (ne(r[s], Error)) {
    Qn(a, o);
    const u = t(e, r[s]);
    const l = c.length;
    er(u, s, l, o);
    c = It(t, e, n, r[s], s, [u, ...c], u, l);
  }
  if (Array.isArray(r.errors)) {
    r.errors.forEach((u, l) => {
      if (ne(u, Error)) {
        Qn(a, o);
        const f = t(e, u);
        const b = c.length;
        er(f, `errors[${l}]`, b, o);
        c = It(t, e, n, u, s, [f, ...c], f, b);
      }
    });
  }
  return c;
}
function Qn(t, e) {
  t.mechanism = {
    handled: true,
    type: "auto.core.linked_errors",
    ...t.mechanism,
    ...(t.type === "AggregateError" && {
      is_exception_group: true
    }),
    exception_id: e
  };
}
function er(t, e, n, r) {
  t.mechanism = {
    handled: true,
    ...t.mechanism,
    type: "chained",
    source: e,
    exception_id: n,
    parent_id: r
  };
}
function ec(t) {
  const e = "console";
  de(e, t);
  le(e, tc);
}
function tc() {
  if ("console" in R) {
    di.forEach(function (t) {
      if (t in R.console) {
        P(R.console, t, function (e) {
          Ge[t] = e;
          return function (...n) {
            B("console", {
              args: n,
              level: t
            });
            const s = Ge[t];
            if (s != null) {
              s.apply(R.console, n);
            }
          };
        });
      }
    });
  }
}
function nc(t) {
  if (t === "warn") {
    return "warning";
  } else if (["fatal", "error", "warning", "log", "info", "debug"].includes(t)) {
    return t;
  } else {
    return "log";
  }
}
const rc = "Dedupe";
const sc = () => {
  let t;
  return {
    name: rc,
    processEvent(e) {
      if (e.type) {
        return e;
      }
      try {
        if (ac(e, t)) {
          if (E) {
            y.warn("Event dropped due to being a duplicate of previously captured event.");
          }
          return null;
        }
      } catch {}
      return t = e;
    }
  };
};
const ic = sc;
function ac(t, e) {
  if (e) {
    return !!oc(t, e) || !!cc(t, e);
  } else {
    return false;
  }
}
function oc(t, e) {
  const n = t.message;
  const r = e.message;
  return (!!n || !!r) && (!n || !!r) && (!!n || !r) && n === r && !!ps(t, e) && !!fs(t, e);
}
function cc(t, e) {
  const n = tr(e);
  const r = tr(t);
  return !!n && !!r && n.type === r.type && n.value === r.value && !!ps(t, e) && !!fs(t, e);
}
function fs(t, e) {
  let n = _n(t);
  let r = _n(e);
  if (!n && !r) {
    return true;
  }
  if (n && !r || !n && r || (n = n, r = r, r.length !== n.length)) {
    return false;
  }
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    const a = n[s];
    if (i.filename !== a.filename || i.lineno !== a.lineno || i.colno !== a.colno || i.function !== a.function) {
      return false;
    }
  }
  return true;
}
function ps(t, e) {
  let n = t.fingerprint;
  let r = e.fingerprint;
  if (!n && !r) {
    return true;
  }
  if (n && !r || !n && r) {
    return false;
  }
  n = n;
  r = r;
  try {
    return n.join("") === r.join("");
  } catch {
    return false;
  }
}
function tr(t) {
  var e;
  var n;
  if ((n = (e = t.exception) == null ? undefined : e.values) == null) {
    return undefined;
  } else {
    return n[0];
  }
}
function _s(t) {
  if (t !== undefined) {
    if (t >= 400 && t < 500) {
      return "warning";
    } else if (t >= 500) {
      return "error";
    } else {
      return undefined;
    }
  }
}
const Te = R;
function uc() {
  return "history" in Te && !!Te.history;
}
function dc() {
  if (!("fetch" in Te)) {
    return false;
  }
  try {
    new Headers();
    new Request("data:,");
    new Response();
    return true;
  } catch {
    return false;
  }
}
function Tt(t) {
  return t && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString());
}
function lc() {
  var n;
  if (typeof EdgeRuntime == "string") {
    return true;
  }
  if (!dc()) {
    return false;
  }
  if (Tt(Te.fetch)) {
    return true;
  }
  let t = false;
  const e = Te.document;
  if (e && typeof e.createElement == "function") {
    try {
      const r = e.createElement("iframe");
      r.hidden = true;
      e.head.appendChild(r);
      if ((n = r.contentWindow) != null && n.fetch) {
        t = Tt(r.contentWindow.fetch);
      }
      e.head.removeChild(r);
    } catch (r) {
      if (E) {
        y.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", r);
      }
    }
  }
  return t;
}
function fc(t, e) {
  const n = "fetch";
  de(n, t);
  le(n, () => pc(undefined, e));
}
function pc(t, e = false) {
  if (!e || !!lc()) {
    P(R, "fetch", function (n) {
      return function (...r) {
        const s = new Error();
        const {
          method: i,
          url: a
        } = _c(r);
        const o = {
          args: r,
          fetchData: {
            method: i,
            url: a
          },
          startTimestamp: q() * 1000,
          virtualError: s,
          headers: hc(r)
        };
        B("fetch", {
          ...o
        });
        return n.apply(R, r).then(async c => {
          B("fetch", {
            ...o,
            endTimestamp: q() * 1000,
            response: c
          });
          return c;
        }, c => {
          B("fetch", {
            ...o,
            endTimestamp: q() * 1000,
            error: c
          });
          if (qt(c) && c.stack === undefined) {
            c.stack = s.stack;
            oe(c, "framesToPop", 1);
          }
          if (c instanceof TypeError && (c.message === "Failed to fetch" || c.message === "Load failed" || c.message === "NetworkError when attempting to fetch resource.")) {
            try {
              const u = new URL(o.fetchData.url);
              c.message = `${c.message} (${u.host})`;
            } catch {}
          }
          throw c;
        });
      };
    });
  }
}
function At(t, e) {
  return !!t && typeof t == "object" && !!t[e];
}
function nr(t) {
  if (typeof t == "string") {
    return t;
  } else if (t) {
    if (At(t, "url")) {
      return t.url;
    } else if (t.toString) {
      return t.toString();
    } else {
      return "";
    }
  } else {
    return "";
  }
}
function _c(t) {
  if (t.length === 0) {
    return {
      method: "GET",
      url: ""
    };
  }
  if (t.length === 2) {
    const [n, r] = t;
    return {
      url: nr(n),
      method: At(r, "method") ? String(r.method).toUpperCase() : "GET"
    };
  }
  const e = t[0];
  return {
    url: nr(e),
    method: At(e, "method") ? String(e.method).toUpperCase() : "GET"
  };
}
function hc(t) {
  const [e, n] = t;
  try {
    if (typeof n == "object" && n !== null && "headers" in n && n.headers) {
      return new Headers(n.headers);
    }
    if (wi(e)) {
      return new Headers(e.headers);
    }
  } catch {}
}
function mc() {
  return "npm";
}
function gc(t, e = false) {
  return !e && (!t || !!t.startsWith("/") || !!t.match(/^[A-Z]:/) || !!t.startsWith(".") || !!t.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//)) && t !== undefined && !t.includes("node_modules/");
}
function bc(t) {
  const e = /^\s*[-]{4,}$/;
  const n = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;
  const r = /at (?:async )?(.+?) \(data:(.*?),/;
  return s => {
    var o;
    const i = s.match(r);
    if (i) {
      return {
        filename: `<data:${i[2]}>`,
        function: i[1]
      };
    }
    const a = s.match(n);
    if (a) {
      let c;
      let u;
      let l;
      let f;
      let b;
      if (a[1]) {
        l = a[1];
        let M = l.lastIndexOf(".");
        if (l[M - 1] === ".") {
          M--;
        }
        if (M > 0) {
          c = l.slice(0, M);
          u = l.slice(M + 1);
          const A = c.indexOf(".Module");
          if (A > 0) {
            l = l.slice(A + 1);
            c = c.slice(0, A);
          }
        }
        f = undefined;
      }
      if (u) {
        f = c;
        b = u;
      }
      if (u === "<anonymous>") {
        b = undefined;
        l = undefined;
      }
      if (l === undefined) {
        b = b || ee;
        l = f ? `${f}.${b}` : b;
      }
      let _ = (o = a[2]) != null && o.startsWith("file://") ? a[2].slice(7) : a[2];
      const C = a[5] === "native";
      if (_ != null && _.match(/\/[A-Z]:/)) {
        _ = _.slice(1);
      }
      if (!_ && a[5] && !C) {
        _ = a[5];
      }
      return {
        filename: _ ? decodeURI(_) : undefined,
        module: undefined,
        function: l,
        lineno: rr(a[3]),
        colno: rr(a[4]),
        in_app: gc(_ || "", C)
      };
    }
    if (s.match(e)) {
      return {
        filename: s
      };
    }
  };
}
function yc(t) {
  return [90, bc()];
}
function rr(t) {
  return parseInt(t || "", 10) || undefined;
}
var sr;
(function (t) {
  t[t.Classic = 1] = "Classic";
  t[t.Protocol = 2] = "Protocol";
  t[t.Both = 3] = "Both";
})(sr ||= {});
function $c(t) {
  return {
    createUrl: e => `${t}://${e}/sentry_key`,
    urlMatches: function (e, n) {
      return e.startsWith(this.createUrl(n));
    },
    createKey: e => `${t}.${e}`,
    namespace: t
  };
}
const vc = "sentry-electron-renderer-id";
function Ec(t) {
  var n;
  const e = $c(t);
  if ((n = window.__SENTRY_IPC__) != null && n[e.namespace]) {
    return window.__SENTRY_IPC__[e.namespace];
  }
  {
    y.log("IPC was not configured in preload script, falling back to custom protocol and fetch");
    const r = window.__SENTRY_RENDERER_ID__ = L();
    const s = {
      [vc]: r
    };
    return {
      sendRendererStart: () => {
        fetch(e.createUrl("start"), {
          method: "POST",
          body: "",
          headers: s
        }).catch(() => {
          console.error(`Sentry SDK failed to establish connection with the Electron main process.
  - Ensure you have initialized the SDK in the main process
  - If your renderers use custom sessions, be sure to set 'getSessions' in the main process options
  - If you are bundling your main process code and using Electron < v5, you'll need to manually configure a preload script`);
        });
      },
      sendScope: i => {
        fetch(e.createUrl("scope"), {
          method: "POST",
          body: i,
          headers: s
        }).catch(() => {});
      },
      sendEnvelope: i => {
        fetch(e.createUrl("envelope"), {
          method: "POST",
          body: i,
          headers: s
        }).catch(() => {});
      },
      sendStatus: i => {
        fetch(e.createUrl("status"), {
          method: "POST",
          body: JSON.stringify({
            status: i
          }),
          headers: s
        }).catch(() => {});
      },
      sendStructuredLog: i => {
        fetch(e.createUrl("structured-log"), {
          method: "POST",
          body: JSON.stringify(i),
          headers: s
        }).catch(() => {});
      }
    };
  }
}
let Be;
function hs(t = N()) {
  if (!t) {
    throw new Error("Could not find client, make sure to call Sentry.init before getIPC");
  }
  Be ||= new WeakMap();
  const e = Be.get(t);
  if (e) {
    return e;
  }
  const n = t.getOptions().ipcNamespace;
  const r = Ec(n);
  Be.set(t, r);
  r.sendRendererStart();
  return r;
}
const I = R;
let Nt = 0;
function ms() {
  return Nt > 0;
}
function Sc() {
  Nt++;
  setTimeout(() => {
    Nt--;
  });
}
function ge(t, e = {}) {
  function n(s) {
    return typeof s == "function";
  }
  if (!n(t)) {
    return t;
  }
  try {
    const s = t.__sentry_wrapped__;
    if (s) {
      if (typeof s == "function") {
        return s;
      } else {
        return t;
      }
    }
    if (Kt(t)) {
      return t;
    }
  } catch {
    return t;
  }
  const r = function (...s) {
    try {
      const i = s.map(a => ge(a, e));
      return t.apply(this, i);
    } catch (i) {
      Sc();
      Vi(a => {
        a.addEventProcessor(o => {
          if (e.mechanism) {
            St(o, undefined);
            _e(o, e.mechanism);
          }
          o.extra = {
            ...o.extra,
            arguments: s
          };
          return o;
        });
        so(i);
      });
      throw i;
    }
  };
  try {
    for (const s in t) {
      if (Object.prototype.hasOwnProperty.call(t, s)) {
        r[s] = t[s];
      }
    }
  } catch {}
  Lr(r, t);
  oe(t, "__sentry_wrapped__", r);
  try {
    if (Object.getOwnPropertyDescriptor(r, "name").configurable) {
      Object.defineProperty(r, "name", {
        get() {
          return t.name;
        }
      });
    }
  } catch {}
  return r;
}
function kc() {
  const t = Jt();
  const {
    referrer: e
  } = I.document || {};
  const {
    userAgent: n
  } = I.navigator || {};
  const r = {
    ...(e && {
      Referer: e
    }),
    ...(n && {
      "User-Agent": n
    })
  };
  return {
    url: t,
    headers: r
  };
}
function an(t, e) {
  const n = on(t, e);
  const r = {
    type: Ic(e),
    value: Tc(e)
  };
  if (n.length) {
    r.stacktrace = {
      frames: n
    };
  }
  if (r.type === undefined && r.value === "") {
    r.value = "Unrecoverable error caught";
  }
  return r;
}
function xc(t, e, n, r) {
  const s = N();
  const i = s == null ? undefined : s.getOptions().normalizeDepth;
  const a = Mc(e);
  const o = {
    __serialized__: Yr(e, i)
  };
  if (a) {
    return {
      exception: {
        values: [an(t, a)]
      },
      extra: o
    };
  }
  const c = {
    exception: {
      values: [{
        type: at(e) ? e.constructor.name : r ? "UnhandledRejection" : "Error",
        value: Oc(e, {
          isUnhandledRejection: r
        })
      }]
    },
    extra: o
  };
  if (n) {
    const u = on(t, n);
    if (u.length) {
      c.exception.values[0].stacktrace = {
        frames: u
      };
    }
  }
  return c;
}
function bt(t, e) {
  return {
    exception: {
      values: [an(t, e)]
    }
  };
}
function on(t, e) {
  const n = e.stacktrace || e.stack || "";
  const r = Rc(e);
  const s = Cc(e);
  try {
    return t(n, r, s);
  } catch {}
  return [];
}
const wc = /Minified React error #\d+;/i;
function Rc(t) {
  if (t && wc.test(t.message)) {
    return 1;
  } else {
    return 0;
  }
}
function Cc(t) {
  if (typeof t.framesToPop == "number") {
    return t.framesToPop;
  } else {
    return 0;
  }
}
function gs(t) {
  if (typeof WebAssembly !== "undefined" && typeof WebAssembly.Exception !== "undefined") {
    return t instanceof WebAssembly.Exception;
  } else {
    return false;
  }
}
function Ic(t) {
  const e = t == null ? undefined : t.name;
  if (!e && gs(t)) {
    if (t.message && Array.isArray(t.message) && t.message.length == 2) {
      return t.message[0];
    } else {
      return "WebAssembly.Exception";
    }
  } else {
    return e;
  }
}
function Tc(t) {
  const e = t == null ? undefined : t.message;
  if (gs(t)) {
    if (Array.isArray(t.message) && t.message.length == 2) {
      return t.message[1];
    } else {
      return "wasm exception";
    }
  } else if (e) {
    if (e.error && typeof e.error.message == "string") {
      return e.error.message;
    } else {
      return e;
    }
  } else {
    return "No error message";
  }
}
function Ac(t, e, n, r) {
  const s = (n == null ? undefined : n.syntheticException) || undefined;
  const i = cn(t, e, s, r);
  _e(i);
  i.level = "error";
  if (n != null && n.event_id) {
    i.event_id = n.event_id;
  }
  return ct(i);
}
function Nc(t, e, n = "info", r, s) {
  const i = (r == null ? undefined : r.syntheticException) || undefined;
  const a = Ot(t, e, i, s);
  a.level = n;
  if (r != null && r.event_id) {
    a.event_id = r.event_id;
  }
  return ct(a);
}
function cn(t, e, n, r, s) {
  let i;
  if (Dr(e) && e.error) {
    return bt(t, e.error);
  }
  if (mn(e) || Ei(e)) {
    const a = e;
    if ("stack" in e) {
      i = bt(t, e);
    } else {
      const o = a.name || (mn(a) ? "DOMError" : "DOMException");
      const c = a.message ? `${o}: ${a.message}` : o;
      i = Ot(t, c, n, r);
      St(i, c);
    }
    if ("code" in a) {
      i.tags = {
        ...i.tags,
        "DOMException.code": `${a.code}`
      };
    }
    return i;
  }
  if (qt(e)) {
    return bt(t, e);
  } else if (Ce(e) || at(e)) {
    i = xc(t, e, n, s);
    _e(i, {
      synthetic: true
    });
    return i;
  } else {
    i = Ot(t, e, n, r);
    St(i, `${e}`);
    _e(i, {
      synthetic: true
    });
    return i;
  }
}
function Ot(t, e, n, r) {
  const s = {};
  if (r && n) {
    const i = on(t, n);
    if (i.length) {
      s.exception = {
        values: [{
          value: e,
          stacktrace: {
            frames: i
          }
        }]
      };
    }
    _e(s, {
      synthetic: true
    });
  }
  if (Gt(e)) {
    const {
      __sentry_template_string__: i,
      __sentry_template_values__: a
    } = e;
    s.logentry = {
      message: i,
      params: a
    };
    return s;
  }
  s.message = e;
  return s;
}
function Oc(t, {
  isUnhandledRejection: e
}) {
  const n = Ti(t);
  const r = e ? "promise rejection" : "exception";
  if (Dr(t)) {
    return `Event \`ErrorEvent\` captured as ${r} with message \`${t.message}\``;
  } else if (at(t)) {
    return `Event \`${Dc(t)}\` (type=${t.type}) captured as ${r}`;
  } else {
    return `Object captured as ${r} with keys: ${n}`;
  }
}
function Dc(t) {
  try {
    const e = Object.getPrototypeOf(t);
    if (e) {
      return e.constructor.name;
    } else {
      return undefined;
    }
  } catch {}
}
function Mc(t) {
  for (const e in t) {
    if (Object.prototype.hasOwnProperty.call(t, e)) {
      const n = t[e];
      if (n instanceof Error) {
        return n;
      }
    }
  }
}
class Pc extends Io {
  constructor(e) {
    var l;
    const n = Lc(e);
    const r = I.SENTRY_SDK_SOURCE || mc();
    Lo(n, "browser", ["browser"], r);
    if ((l = n._metadata) != null && l.sdk) {
      n._metadata.sdk.settings = {
        infer_ip: n.sendDefaultPii ? "auto" : "never",
        ...n._metadata.sdk.settings
      };
    }
    super(n);
    const {
      sendDefaultPii: s,
      sendClientReports: i,
      enableLogs: a,
      _experiments: o,
      enableMetrics: c
    } = this._options;
    const u = c ?? (o == null ? undefined : o.enableMetrics) ?? true;
    if (I.document && (i || a || u)) {
      I.document.addEventListener("visibilitychange", () => {
        if (I.document.visibilityState === "hidden") {
          if (i) {
            this._flushOutcomes();
          }
          if (a) {
            ts(this);
          }
          if (u) {
            rs(this);
          }
        }
      });
    }
    if (s) {
      this.on("beforeSendSession", Po);
    }
  }
  eventFromException(e, n) {
    return Ac(this._options.stackParser, e, n, this._options.attachStacktrace);
  }
  eventFromMessage(e, n = "info", r) {
    return Nc(this._options.stackParser, e, n, r, this._options.attachStacktrace);
  }
  _prepareEvent(e, n, r, s) {
    e.platform = e.platform || "javascript";
    return super._prepareEvent(e, n, r, s);
  }
}
function Lc(t) {
  var e;
  return {
    release: typeof __SENTRY_RELEASE__ == "string" ? __SENTRY_RELEASE__ : (e = I.SENTRY_RELEASE) == null ? undefined : e.id,
    sendClientReports: true,
    parentSpanIsAlwaysRootSpan: true,
    ...t
  };
}
const Fc = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const O = R;
const jc = 1000;
let ir;
let Dt;
let Mt;
function Uc(t) {
  de("dom", t);
  le("dom", Bc);
}
function Bc() {
  if (!O.document) {
    return;
  }
  const t = B.bind(null, "dom");
  const e = ar(t, true);
  O.document.addEventListener("click", e, false);
  O.document.addEventListener("keypress", e, false);
  ["EventTarget", "Node"].forEach(n => {
    var i;
    var a;
    const s = (i = O[n]) == null ? undefined : i.prototype;
    if ((a = s == null ? undefined : s.hasOwnProperty) != null && a.call(s, "addEventListener")) {
      P(s, "addEventListener", function (o) {
        return function (c, u, l) {
          if (c === "click" || c == "keypress") {
            try {
              const f = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {};
              const b = f[c] = f[c] || {
                refCount: 0
              };
              if (!b.handler) {
                const _ = ar(t);
                b.handler = _;
                o.call(this, c, _, l);
              }
              b.refCount++;
            } catch {}
          }
          return o.call(this, c, u, l);
        };
      });
      P(s, "removeEventListener", function (o) {
        return function (c, u, l) {
          if (c === "click" || c == "keypress") {
            try {
              const f = this.__sentry_instrumentation_handlers__ || {};
              const b = f[c];
              if (b) {
                b.refCount--;
                if (b.refCount <= 0) {
                  o.call(this, c, b.handler, l);
                  b.handler = undefined;
                  delete f[c];
                }
                if (Object.keys(f).length === 0) {
                  delete this.__sentry_instrumentation_handlers__;
                }
              }
            } catch {}
          }
          return o.call(this, c, u, l);
        };
      });
    }
  });
}
function Wc(t) {
  if (t.type !== Dt) {
    return false;
  }
  try {
    if (!t.target || t.target._sentryId !== Mt) {
      return false;
    }
  } catch {}
  return true;
}
function Zc(t, e) {
  if (t !== "keypress") {
    return false;
  } else if (e != null && e.tagName) {
    return e.tagName !== "INPUT" && e.tagName !== "TEXTAREA" && !e.isContentEditable;
  } else {
    return true;
  }
}
function ar(t, e = false) {
  return n => {
    if (!n || n._sentryCaptured) {
      return;
    }
    const r = Hc(n);
    if (Zc(n.type, r)) {
      return;
    }
    oe(n, "_sentryCaptured", true);
    if (r && !r._sentryId) {
      oe(r, "_sentryId", L());
    }
    const s = n.type === "keypress" ? "input" : n.type;
    if (!Wc(n)) {
      t({
        event: n,
        name: s,
        global: e
      });
      Dt = n.type;
      Mt = r ? r._sentryId : undefined;
    }
    clearTimeout(ir);
    ir = O.setTimeout(() => {
      Mt = undefined;
      Dt = undefined;
    }, jc);
  };
}
function Hc(t) {
  try {
    return t.target;
  } catch {
    return null;
  }
}
let We;
function bs(t) {
  const e = "history";
  de(e, t);
  le(e, Vc);
}
function Vc() {
  O.addEventListener("popstate", () => {
    const e = O.location.href;
    const n = We;
    We = e;
    if (n === e) {
      return;
    }
    B("history", {
      from: n,
      to: e
    });
  });
  if (!uc()) {
    return;
  }
  function t(e) {
    return function (...n) {
      const r = n.length > 2 ? n[2] : undefined;
      if (r) {
        const s = We;
        const i = zc(String(r));
        We = i;
        if (s === i) {
          return e.apply(this, n);
        }
        B("history", {
          from: s,
          to: i
        });
      }
      return e.apply(this, n);
    };
  }
  P(O.history, "pushState", t);
  P(O.history, "replaceState", t);
}
function zc(t) {
  try {
    return new URL(t, O.location.origin).toString();
  } catch {
    return t;
  }
}
const qe = {};
function qc(t) {
  const e = qe[t];
  if (e) {
    return e;
  }
  let n = O[t];
  if (Tt(n)) {
    return qe[t] = n.bind(O);
  }
  const r = O.document;
  if (r && typeof r.createElement == "function") {
    try {
      const s = r.createElement("iframe");
      s.hidden = true;
      r.head.appendChild(s);
      const i = s.contentWindow;
      if (i != null && i[t]) {
        n = i[t];
      }
      r.head.removeChild(s);
    } catch (s) {
      if (Fc) {
        y.warn(`Could not create sandbox iframe for ${t} check, bailing to window.${t}: `, s);
      }
    }
  }
  return n && (qe[t] = n.bind(O));
}
function Gc(t) {
  qe[t] = undefined;
}
const we = "__sentry_xhr_v3__";
function Yc(t) {
  de("xhr", t);
  le("xhr", Jc);
}
function Jc() {
  if (!O.XMLHttpRequest) {
    return;
  }
  const t = XMLHttpRequest.prototype;
  t.open = new Proxy(t.open, {
    apply(e, n, r) {
      const s = new Error();
      const i = q() * 1000;
      const a = z(r[0]) ? r[0].toUpperCase() : undefined;
      const o = Kc(r[1]);
      if (!a || !o) {
        return e.apply(n, r);
      }
      n[we] = {
        method: a,
        url: o,
        request_headers: {}
      };
      if (a === "POST" && o.match(/sentry_key/)) {
        n.__sentry_own_request__ = true;
      }
      const c = () => {
        const u = n[we];
        if (u && n.readyState === 4) {
          try {
            u.status_code = n.status;
          } catch {}
          const l = {
            endTimestamp: q() * 1000,
            startTimestamp: i,
            xhr: n,
            virtualError: s
          };
          B("xhr", l);
        }
      };
      if ("onreadystatechange" in n && typeof n.onreadystatechange == "function") {
        n.onreadystatechange = new Proxy(n.onreadystatechange, {
          apply(u, l, f) {
            c();
            return u.apply(l, f);
          }
        });
      } else {
        n.addEventListener("readystatechange", c);
      }
      n.setRequestHeader = new Proxy(n.setRequestHeader, {
        apply(u, l, f) {
          const [b, _] = f;
          const C = l[we];
          if (C && z(b) && z(_)) {
            C.request_headers[b.toLowerCase()] = _;
          }
          return u.apply(l, f);
        }
      });
      return e.apply(n, r);
    }
  });
  t.send = new Proxy(t.send, {
    apply(e, n, r) {
      const s = n[we];
      if (!s) {
        return e.apply(n, r);
      }
      if (r[0] !== undefined) {
        s.body = r[0];
      }
      const i = {
        startTimestamp: q() * 1000,
        xhr: n
      };
      B("xhr", i);
      return e.apply(n, r);
    }
  });
}
function Kc(t) {
  if (z(t)) {
    return t;
  }
  try {
    return t.toString();
  } catch {}
}
const Xc = 40;
function Qc(t, e = qc("fetch")) {
  let n = 0;
  let r = 0;
  async function s(i) {
    const a = i.body.length;
    n += a;
    r++;
    const o = {
      body: i.body,
      method: "POST",
      referrerPolicy: "strict-origin",
      headers: t.headers,
      keepalive: n <= 60000 && r < 15,
      ...t.fetchOptions
    };
    try {
      const c = await e(t.url, o);
      return {
        statusCode: c.status,
        headers: {
          "x-sentry-rate-limits": c.headers.get("X-Sentry-Rate-Limits"),
          "retry-after": c.headers.get("Retry-After")
        }
      };
    } catch (c) {
      Gc("fetch");
      throw c;
    } finally {
      n -= a;
      r--;
    }
  }
  return as(t, s, sn(t.bufferSize || Xc));
}
const ut = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const eu = 30;
const tu = 50;
function Pt(t, e, n, r) {
  const s = {
    filename: t,
    function: e === "<anonymous>" ? ee : e,
    in_app: true
  };
  if (n !== undefined) {
    s.lineno = n;
  }
  if (r !== undefined) {
    s.colno = r;
  }
  return s;
}
const nu = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i;
const ru = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
const su = /\((\S*)(?::(\d+))(?::(\d+))\)/;
const iu = /at (.+?) ?\(data:(.+?),/;
const au = t => {
  const e = t.match(iu);
  if (e) {
    return {
      filename: `<data:${e[2]}>`,
      function: e[1]
    };
  }
  const n = nu.exec(t);
  if (n) {
    const [, s, i, a] = n;
    return Pt(s, ee, +i, +a);
  }
  const r = ru.exec(t);
  if (r) {
    if (r[2] && r[2].indexOf("eval") === 0) {
      const o = su.exec(r[2]);
      if (o) {
        r[2] = o[1];
        r[3] = o[2];
        r[4] = o[3];
      }
    }
    const [i, a] = $s(r[1] || ee, r[2]);
    return Pt(a, i, r[3] ? +r[3] : undefined, r[4] ? +r[4] : undefined);
  }
};
const ys = [eu, au];
const ou = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
const cu = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
const uu = t => {
  const e = ou.exec(t);
  if (e) {
    if (e[3] && e[3].indexOf(" > eval") > -1) {
      const i = cu.exec(e[3]);
      if (i) {
        e[1] = e[1] || "eval";
        e[3] = i[1];
        e[4] = i[2];
        e[5] = "";
      }
    }
    let r = e[3];
    let s = e[1] || ee;
    [s, r] = $s(s, r);
    return Pt(r, s, e[4] ? +e[4] : undefined, e[5] ? +e[5] : undefined);
  }
};
const du = [tu, uu];
const lu = [ys, du];
const fu = Tr(...lu);
const $s = (t, e) => {
  const n = t.indexOf("safari-extension") !== -1;
  const r = t.indexOf("safari-web-extension") !== -1;
  if (n || r) {
    return [t.indexOf("@") !== -1 ? t.split("@")[0] : ee, n ? `safari-extension:${e}` : `safari-web-extension:${e}`];
  } else {
    return [t, e];
  }
};
const Ze = 1024;
const pu = "Breadcrumbs";
const _u = (t = {}) => {
  const e = {
    console: true,
    dom: true,
    fetch: true,
    history: true,
    sentry: true,
    xhr: true,
    ...t
  };
  return {
    name: pu,
    setup(n) {
      if (e.console) {
        ec(bu(n));
      }
      if (e.dom) {
        Uc(gu(n, e.dom));
      }
      if (e.xhr) {
        Yc(yu(n));
      }
      if (e.fetch) {
        fc($u(n));
      }
      if (e.history) {
        bs(vu(n));
      }
      if (e.sentry) {
        n.on("beforeSendEvent", mu(n));
      }
    }
  };
};
const hu = _u;
function mu(t) {
  return function (n) {
    if (N() === t) {
      ce({
        category: `sentry.${n.type === "transaction" ? "transaction" : "event"}`,
        event_id: n.event_id,
        level: n.level,
        message: ie(n)
      }, {
        event: n
      });
    }
  };
}
function gu(t, e) {
  return function (r) {
    if (N() !== t) {
      return;
    }
    let s;
    let i;
    let a = typeof e == "object" ? e.serializeAttribute : undefined;
    let o = typeof e == "object" && typeof e.maxStringLength == "number" ? e.maxStringLength : undefined;
    if (o && o > Ze) {
      if (ut) {
        y.warn(`\`dom.maxStringLength\` cannot exceed ${Ze}, but a value of ${o} was configured. Sentry will use ${Ze} instead.`);
      }
      o = Ze;
    }
    if (typeof a == "string") {
      a = [a];
    }
    try {
      const u = r.event;
      const l = Eu(u) ? u.target : u;
      s = Pr(l, {
        keyAttrs: a,
        maxStringLength: o
      });
      i = Ii(l);
    } catch {
      s = "<unknown>";
    }
    if (s.length === 0) {
      return;
    }
    const c = {
      category: `ui.${r.name}`,
      message: s
    };
    if (i) {
      c.data = {
        "ui.component_name": i
      };
    }
    ce(c, {
      event: r.event,
      name: r.name,
      global: r.global
    });
  };
}
function bu(t) {
  return function (n) {
    if (N() !== t) {
      return;
    }
    const r = {
      category: "console",
      data: {
        arguments: n.args,
        logger: "console"
      },
      level: nc(n.level),
      message: yn(n.args, " ")
    };
    if (n.level === "assert") {
      if (n.args[0] === false) {
        r.message = `Assertion failed: ${yn(n.args.slice(1), " ") || "console.assert"}`;
        r.data.arguments = n.args.slice(1);
      } else {
        return;
      }
    }
    ce(r, {
      input: n.args,
      level: n.level
    });
  };
}
function yu(t) {
  return function (n) {
    if (N() !== t) {
      return;
    }
    const {
      startTimestamp: r,
      endTimestamp: s
    } = n;
    const i = n.xhr[we];
    if (!r || !s || !i) {
      return;
    }
    const {
      method: a,
      url: o,
      status_code: c,
      body: u
    } = i;
    const l = {
      method: a,
      url: o,
      status_code: c
    };
    const f = {
      xhr: n.xhr,
      input: u,
      startTimestamp: r,
      endTimestamp: s
    };
    const b = {
      category: "xhr",
      data: l,
      type: "http",
      level: _s(c)
    };
    t.emit("beforeOutgoingRequestBreadcrumb", b, f);
    ce(b, f);
  };
}
function $u(t) {
  return function (n) {
    if (N() !== t) {
      return;
    }
    const {
      startTimestamp: r,
      endTimestamp: s
    } = n;
    if (s && (!n.fetchData.url.match(/sentry_key/) || n.fetchData.method !== "POST")) {
      n.fetchData.method;
      n.fetchData.url;
      if (n.error) {
        const i = n.fetchData;
        const a = {
          data: n.error,
          input: n.args,
          startTimestamp: r,
          endTimestamp: s
        };
        const o = {
          category: "fetch",
          data: i,
          level: "error",
          type: "http"
        };
        t.emit("beforeOutgoingRequestBreadcrumb", o, a);
        ce(o, a);
      } else {
        const i = n.response;
        const a = {
          ...n.fetchData,
          status_code: i == null ? undefined : i.status
        };
        n.fetchData.request_body_size;
        n.fetchData.response_body_size;
        if (i != null) {
          i.status;
        }
        const o = {
          input: n.args,
          response: i,
          startTimestamp: r,
          endTimestamp: s
        };
        const c = {
          category: "fetch",
          data: a,
          type: "http",
          level: _s(a.status_code)
        };
        t.emit("beforeOutgoingRequestBreadcrumb", c, o);
        ce(c, o);
      }
    }
  };
}
function vu(t) {
  return function (n) {
    if (N() !== t) {
      return;
    }
    let r = n.from;
    let s = n.to;
    const i = gt(I.location.href);
    let a = r ? gt(r) : undefined;
    const o = gt(s);
    if (a == null || !a.path) {
      a = i;
    }
    if (i.protocol === o.protocol && i.host === o.host) {
      s = o.relative;
    }
    if (i.protocol === a.protocol && i.host === a.host) {
      r = a.relative;
    }
    ce({
      category: "navigation",
      data: {
        from: r,
        to: s
      }
    });
  };
}
function Eu(t) {
  return !!t && !!t.target;
}
const Su = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
const ku = "BrowserApiErrors";
const xu = (t = {}) => {
  const e = {
    XMLHttpRequest: true,
    eventTarget: true,
    requestAnimationFrame: true,
    setInterval: true,
    setTimeout: true,
    unregisterOriginalCallbacks: false,
    ...t
  };
  return {
    name: ku,
    setupOnce() {
      if (e.setTimeout) {
        P(I, "setTimeout", or);
      }
      if (e.setInterval) {
        P(I, "setInterval", or);
      }
      if (e.requestAnimationFrame) {
        P(I, "requestAnimationFrame", Ru);
      }
      if (e.XMLHttpRequest && "XMLHttpRequest" in I) {
        P(XMLHttpRequest.prototype, "send", Cu);
      }
      const n = e.eventTarget;
      if (n) {
        (Array.isArray(n) ? n : Su).forEach(s => Iu(s, e));
      }
    }
  };
};
const wu = xu;
function or(t) {
  return function (...e) {
    const n = e[0];
    e[0] = ge(n, {
      mechanism: {
        handled: false,
        type: `auto.browser.browserapierrors.${te(t)}`
      }
    });
    return t.apply(this, e);
  };
}
function Ru(t) {
  return function (e) {
    return t.apply(this, [ge(e, {
      mechanism: {
        data: {
          handler: te(t)
        },
        handled: false,
        type: "auto.browser.browserapierrors.requestAnimationFrame"
      }
    })]);
  };
}
function Cu(t) {
  return function (...e) {
    const n = this;
    ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(s => {
      if (s in n && typeof n[s] == "function") {
        P(n, s, function (i) {
          const a = {
            mechanism: {
              data: {
                handler: te(i)
              },
              handled: false,
              type: `auto.browser.browserapierrors.xhr.${s}`
            }
          };
          const o = Kt(i);
          if (o) {
            a.mechanism.data.handler = te(o);
          }
          return ge(i, a);
        });
      }
    });
    return t.apply(this, e);
  };
}
function Iu(t, e) {
  var s;
  var i;
  const r = (s = I[t]) == null ? undefined : s.prototype;
  if ((i = r == null ? undefined : r.hasOwnProperty) != null && i.call(r, "addEventListener")) {
    P(r, "addEventListener", function (a) {
      return function (o, c, u) {
        try {
          if (Tu(c)) {
            c.handleEvent = ge(c.handleEvent, {
              mechanism: {
                data: {
                  handler: te(c),
                  target: t
                },
                handled: false,
                type: "auto.browser.browserapierrors.handleEvent"
              }
            });
          }
        } catch {}
        if (e.unregisterOriginalCallbacks) {
          Au(this, o, c);
        }
        return a.apply(this, [o, ge(c, {
          mechanism: {
            data: {
              handler: te(c),
              target: t
            },
            handled: false,
            type: "auto.browser.browserapierrors.addEventListener"
          }
        }), u]);
      };
    });
    P(r, "removeEventListener", function (a) {
      return function (o, c, u) {
        try {
          const l = c.__sentry_wrapped__;
          if (l) {
            a.call(this, o, l, u);
          }
        } catch {}
        return a.call(this, o, c, u);
      };
    });
  }
}
function Tu(t) {
  return typeof t.handleEvent == "function";
}
function Au(t, e, n) {
  if (t && typeof t == "object" && "removeEventListener" in t && typeof t.removeEventListener == "function") {
    t.removeEventListener(e, n);
  }
}
const Nu = () => ({
  name: "BrowserSession",
  setupOnce() {
    if (typeof I.document === "undefined") {
      if (ut) {
        y.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
      }
      return;
    }
    jn({
      ignoreDuration: true
    });
    Un();
    bs(({
      from: t,
      to: e
    }) => {
      if (t !== undefined && t !== e) {
        jn({
          ignoreDuration: true
        });
        Un();
      }
    });
  }
});
const Ou = "GlobalHandlers";
const Du = (t = {}) => {
  const e = {
    onerror: true,
    onunhandledrejection: true,
    ...t
  };
  return {
    name: Ou,
    setupOnce() {
      Error.stackTraceLimit = 50;
    },
    setup(n) {
      if (e.onerror) {
        Pu(n);
        cr("onerror");
      }
      if (e.onunhandledrejection) {
        Lu(n);
        cr("onunhandledrejection");
      }
    }
  };
};
const Mu = Du;
function Pu(t) {
  bi(e => {
    const {
      stackParser: n,
      attachStacktrace: r
    } = vs();
    if (N() !== t || ms()) {
      return;
    }
    const {
      msg: s,
      url: i,
      line: a,
      column: o,
      error: c
    } = e;
    const u = Uu(cn(n, c || s, undefined, r, false), i, a, o);
    u.level = "error";
    Kr(u, {
      originalException: c,
      mechanism: {
        handled: false,
        type: "auto.browser.global_handlers.onerror"
      }
    });
  });
}
function Lu(t) {
  $i(e => {
    const {
      stackParser: n,
      attachStacktrace: r
    } = vs();
    if (N() !== t || ms()) {
      return;
    }
    const s = Fu(e);
    const i = it(s) ? ju(s) : cn(n, s, undefined, r, true);
    i.level = "error";
    Kr(i, {
      originalException: s,
      mechanism: {
        handled: false,
        type: "auto.browser.global_handlers.onunhandledrejection"
      }
    });
  });
}
function Fu(t) {
  if (it(t)) {
    return t;
  }
  try {
    if ("reason" in t) {
      return t.reason;
    }
    if ("detail" in t && "reason" in t.detail) {
      return t.detail.reason;
    }
  } catch {}
  return t;
}
function ju(t) {
  return {
    exception: {
      values: [{
        type: "UnhandledRejection",
        value: `Non-Error promise rejection captured with value: ${String(t)}`
      }]
    }
  };
}
function Uu(t, e, n, r) {
  const s = t.exception = t.exception || {};
  const i = s.values = s.values || [];
  const a = i[0] = i[0] || {};
  const o = a.stacktrace = a.stacktrace || {};
  const c = o.frames = o.frames || [];
  const u = r;
  const l = n;
  const f = Bu(e) ?? Jt();
  if (c.length === 0) {
    c.push({
      colno: u,
      filename: f,
      function: ee,
      in_app: true,
      lineno: l
    });
  }
  return t;
}
function cr(t) {
  if (ut) {
    y.log(`Global Handler attached: ${t}`);
  }
}
function vs() {
  const t = N();
  return (t == null ? undefined : t.getOptions()) || {
    stackParser: () => [],
    attachStacktrace: false
  };
}
function Bu(t) {
  if (!!z(t) && t.length !== 0) {
    if (t.startsWith("data:")) {
      const e = t.match(/^data:([^;]+)/);
      const n = e ? e[1] : "text/javascript";
      const r = t.includes("base64,");
      return `<data:${n}${r ? ",base64" : ""}>`;
    }
    return t;
  }
}
const Wu = () => ({
  name: "HttpContext",
  preprocessEvent(t) {
    var r;
    if (!I.navigator && !I.location && !I.document) {
      return;
    }
    const e = kc();
    const n = {
      ...e.headers,
      ...((r = t.request) == null ? undefined : r.headers)
    };
    t.request = {
      ...e,
      ...t.request,
      headers: n
    };
  }
});
const Zu = "cause";
const Hu = 5;
const Vu = "LinkedErrors";
const zu = (t = {}) => {
  const e = t.limit || Hu;
  const n = t.key || Zu;
  return {
    name: Vu,
    preprocessEvent(r, s, i) {
      const a = i.getOptions();
      Qo(an, a.stackParser, n, e, r, s);
    }
  };
};
const qu = zu;
function Gu() {
  if (Yu()) {
    if (ut) {
      Se(() => {
        console.error("[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/");
      });
    }
    return true;
  } else {
    return false;
  }
}
function Yu() {
  var i;
  if (typeof I.window === "undefined") {
    return false;
  }
  const t = I;
  if (t.nw) {
    return false;
  }
  const e = t.chrome || t.browser;
  if ((i = e == null ? undefined : e.runtime) == null || !i.id) {
    return false;
  }
  const n = Jt();
  const r = ["chrome-extension", "moz-extension", "ms-browser-extension", "safari-web-extension"];
  return I !== I.top || !r.some(a => n.startsWith(`${a}://`));
}
function Es(t) {
  return [Vo(), Bo(), wu(), hu(), Mu(), qu(), ic(), Wu(), Nu()];
}
function Ju(t = {}) {
  const e = !t.skipBrowserExtensionCheck && Gu();
  let n = t.defaultIntegrations == null ? Es() : t.defaultIntegrations;
  const r = {
    ...t,
    enabled: e ? false : t.enabled,
    stackParser: gi(t.stackParser || fu),
    integrations: fo({
      integrations: t.integrations,
      defaultIntegrations: n
    }),
    transport: t.transport || Qc
  };
  return Do(Pc, r);
}
function yt() {
  const t = Qt().getScopeData();
  const e = fe().getScopeData();
  const n = H().getScopeData();
  Ye(t, e);
  Ye(t, n);
  t.eventProcessors = [];
  return t;
}
function Ku(t) {
  fe().addScopeListener(e => {
    const n = yt();
    t(n, e);
  });
  H().addScopeListener(e => {
    const n = yt();
    t(n, e);
  });
  Qt().addScopeListener(e => {
    const n = yt();
    t(n, e);
  });
}
const Xu = () => ({
  name: "ScopeToMain",
  setup(t) {
    const e = hs(t);
    Ku((n, r) => {
      e.sendScope(JSON.stringify(W(n, 20, 2000)));
      r.clearBreadcrumbs();
      r.clearAttachments();
    });
  }
});
function Qu(t) {
  let e;
  return as(t, async n => {
    e ||= hs();
    e.sendEnvelope(n.body);
    return {
      statusCode: 200
    };
  });
}
const ed = 50;
const [, td] = ys;
const [, nd] = yc();
const rd = (t, e = 0) => {
  const n = [];
  for (const r of t.split(`
`).slice(e)) {
    const s = td(r);
    const i = nd(r);
    if (s && (i == null ? undefined : i.in_app) !== false) {
      n.push(s);
    } else if (i) {
      if (i.module === undefined) {
        delete i.module;
      }
      n.push(i);
    }
    if (n.length >= ed) {
      break;
    }
  }
  return Ar(n);
};
function sd(t) {
  return [...Es().filter(e => e.name !== "BrowserSession"), Xu()];
}
function id(t = {}, e = Ju) {
  if (window != null && window.__SENTRY__RENDERER_INIT__) {
    y.warn(`The browser SDK has already been initialized.
If init has been called in the preload and contextIsolation is disabled, is not required to call init in the renderer`);
    return;
  }
  window.__SENTRY__RENDERER_INIT__ = true;
  t.sendClientReports = false;
  if (t.defaultIntegrations === undefined) {
    t.defaultIntegrations = sd();
  }
  if (t.stackParser === undefined) {
    t.stackParser = rd;
  }
  if (t.ipcNamespace === undefined) {
    t.ipcNamespace = "sentry-ipc";
  }
  if (t.dsn === undefined) {
    t.dsn = "https://12345@dummy.dsn/12345";
  }
  if (t.transport === undefined) {
    t.transport = Qu;
  }
  delete t.initialScope;
  e(t);
}
const ur = "--desktop-enterprise-config=";
function ad(t) {
  const e = t.find(n => n.startsWith(ur));
  if (!e) {
    return false;
  }
  try {
    const n = JSON.parse(e.slice(ur.length));
    return (n == null ? undefined : n.disableEssentialTelemetry) === true;
  } catch {
    return false;
  }
}
var x;
(function (t) {
  t.assertEqual = s => {};
  function e(s) {}
  t.assertIs = e;
  function n(s) {
    throw new Error();
  }
  t.assertNever = n;
  t.arrayToEnum = s => {
    const i = {};
    for (const a of s) {
      i[a] = a;
    }
    return i;
  };
  t.getValidEnumValues = s => {
    const i = t.objectKeys(s).filter(o => typeof s[s[o]] != "number");
    const a = {};
    for (const o of i) {
      a[o] = s[o];
    }
    return t.objectValues(a);
  };
  t.objectValues = s => t.objectKeys(s).map(function (i) {
    return s[i];
  });
  t.objectKeys = typeof Object.keys == "function" ? s => Object.keys(s) : s => {
    const i = [];
    for (const a in s) {
      if (Object.prototype.hasOwnProperty.call(s, a)) {
        i.push(a);
      }
    }
    return i;
  };
  t.find = (s, i) => {
    for (const a of s) {
      if (i(a)) {
        return a;
      }
    }
  };
  t.isInteger = typeof Number.isInteger == "function" ? s => Number.isInteger(s) : s => typeof s == "number" && Number.isFinite(s) && Math.floor(s) === s;
  function r(s, i = " | ") {
    return s.map(a => typeof a == "string" ? `'${a}'` : a).join(i);
  }
  t.joinValues = r;
  t.jsonStringifyReplacer = (s, i) => typeof i == "bigint" ? i.toString() : i;
})(x ||= {});
var dr;
(function (t) {
  t.mergeShapes = (e, n) => ({
    ...e,
    ...n
  });
})(dr ||= {});
const m = x.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]);
const K = t => {
  switch (typeof t) {
    case "undefined":
      return m.undefined;
    case "string":
      return m.string;
    case "number":
      if (Number.isNaN(t)) {
        return m.nan;
      } else {
        return m.number;
      }
    case "boolean":
      return m.boolean;
    case "function":
      return m.function;
    case "bigint":
      return m.bigint;
    case "symbol":
      return m.symbol;
    case "object":
      if (Array.isArray(t)) {
        return m.array;
      } else if (t === null) {
        return m.null;
      } else if (t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function") {
        return m.promise;
      } else if (typeof Map !== "undefined" && t instanceof Map) {
        return m.map;
      } else if (typeof Set !== "undefined" && t instanceof Set) {
        return m.set;
      } else if (typeof Date !== "undefined" && t instanceof Date) {
        return m.date;
      } else {
        return m.object;
      }
    default:
      return m.unknown;
  }
};
const p = x.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
class Y extends Error {
  get errors() {
    return this.issues;
  }
  constructor(e) {
    super();
    this.issues = [];
    this.addIssue = r => {
      this.issues = [...this.issues, r];
    };
    this.addIssues = (r = []) => {
      this.issues = [...this.issues, ...r];
    };
    const n = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, n);
    } else {
      this.__proto__ = n;
    }
    this.name = "ZodError";
    this.issues = e;
  }
  format(e) {
    const n = e || function (i) {
      return i.message;
    };
    const r = {
      _errors: []
    };
    const s = i => {
      for (const a of i.issues) {
        if (a.code === "invalid_union") {
          a.unionErrors.map(s);
        } else if (a.code === "invalid_return_type") {
          s(a.returnTypeError);
        } else if (a.code === "invalid_arguments") {
          s(a.argumentsError);
        } else if (a.path.length === 0) {
          r._errors.push(n(a));
        } else {
          let o = r;
          let c = 0;
          while (c < a.path.length) {
            const u = a.path[c];
            if (c === a.path.length - 1) {
              o[u] = o[u] || {
                _errors: []
              };
              o[u]._errors.push(n(a));
            } else {
              o[u] = o[u] || {
                _errors: []
              };
            }
            o = o[u];
            c++;
          }
        }
      }
    };
    s(this);
    return r;
  }
  static assert(e) {
    if (!(e instanceof Y)) {
      throw new Error(`Not a ZodError: ${e}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, x.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = n => n.message) {
    const n = {};
    const r = [];
    for (const s of this.issues) {
      if (s.path.length > 0) {
        const i = s.path[0];
        n[i] = n[i] || [];
        n[i].push(e(s));
      } else {
        r.push(e(s));
      }
    }
    return {
      formErrors: r,
      fieldErrors: n
    };
  }
  get formErrors() {
    return this.flatten();
  }
}
Y.create = t => new Y(t);
const Lt = (t, e) => {
  let n;
  switch (t.code) {
    case p.invalid_type:
      if (t.received === m.undefined) {
        n = "Required";
      } else {
        n = `Expected ${t.expected}, received ${t.received}`;
      }
      break;
    case p.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(t.expected, x.jsonStringifyReplacer)}`;
      break;
    case p.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${x.joinValues(t.keys, ", ")}`;
      break;
    case p.invalid_union:
      n = "Invalid input";
      break;
    case p.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${x.joinValues(t.options)}`;
      break;
    case p.invalid_enum_value:
      n = `Invalid enum value. Expected ${x.joinValues(t.options)}, received '${t.received}'`;
      break;
    case p.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case p.invalid_return_type:
      n = "Invalid function return type";
      break;
    case p.invalid_date:
      n = "Invalid date";
      break;
    case p.invalid_string:
      if (typeof t.validation == "object") {
        if ("includes" in t.validation) {
          n = `Invalid input: must include "${t.validation.includes}"`;
          if (typeof t.validation.position == "number") {
            n = `${n} at one or more positions greater than or equal to ${t.validation.position}`;
          }
        } else if ("startsWith" in t.validation) {
          n = `Invalid input: must start with "${t.validation.startsWith}"`;
        } else if ("endsWith" in t.validation) {
          n = `Invalid input: must end with "${t.validation.endsWith}"`;
        } else {
          x.assertNever(t.validation);
        }
      } else if (t.validation !== "regex") {
        n = `Invalid ${t.validation}`;
      } else {
        n = "Invalid";
      }
      break;
    case p.too_small:
      if (t.type === "array") {
        n = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)`;
      } else if (t.type === "string") {
        n = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)`;
      } else if (t.type === "number") {
        n = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}`;
      } else if (t.type === "bigint") {
        n = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}`;
      } else if (t.type === "date") {
        n = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}`;
      } else {
        n = "Invalid input";
      }
      break;
    case p.too_big:
      if (t.type === "array") {
        n = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)`;
      } else if (t.type === "string") {
        n = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)`;
      } else if (t.type === "number") {
        n = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}`;
      } else if (t.type === "bigint") {
        n = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}`;
      } else if (t.type === "date") {
        n = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}`;
      } else {
        n = "Invalid input";
      }
      break;
    case p.custom:
      n = "Invalid input";
      break;
    case p.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case p.not_multiple_of:
      n = `Number must be a multiple of ${t.multipleOf}`;
      break;
    case p.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = e.defaultError;
      x.assertNever(t);
  }
  return {
    message: n
  };
};
let od = Lt;
function cd() {
  return od;
}
const ud = t => {
  const {
    data: e,
    path: n,
    errorMaps: r,
    issueData: s
  } = t;
  const i = [...n, ...(s.path || [])];
  const a = {
    ...s,
    path: i
  };
  if (s.message !== undefined) {
    return {
      ...s,
      path: i,
      message: s.message
    };
  }
  let o = "";
  const c = r.filter(u => !!u).slice().reverse();
  for (const u of c) {
    o = u(a, {
      data: e,
      defaultError: o
    }).message;
  }
  return {
    ...s,
    path: i,
    message: o
  };
};
function h(t, e) {
  const n = cd();
  const r = ud({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, n, n === Lt ? undefined : Lt].filter(s => s)
  });
  t.common.issues.push(r);
}
class F {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid") {
      this.value = "dirty";
    }
  }
  abort() {
    if (this.value !== "aborted") {
      this.value = "aborted";
    }
  }
  static mergeArray(e, n) {
    const r = [];
    for (const s of n) {
      if (s.status === "aborted") {
        return $;
      }
      if (s.status === "dirty") {
        e.dirty();
      }
      r.push(s.value);
    }
    return {
      status: e.value,
      value: r
    };
  }
  static async mergeObjectAsync(e, n) {
    const r = [];
    for (const s of n) {
      const i = await s.key;
      const a = await s.value;
      r.push({
        key: i,
        value: a
      });
    }
    return F.mergeObjectSync(e, r);
  }
  static mergeObjectSync(e, n) {
    const r = {};
    for (const s of n) {
      const {
        key: i,
        value: a
      } = s;
      if (i.status === "aborted" || a.status === "aborted") {
        return $;
      }
      if (i.status === "dirty") {
        e.dirty();
      }
      if (a.status === "dirty") {
        e.dirty();
      }
      if (i.value !== "__proto__" && (typeof a.value !== "undefined" || s.alwaysSet)) {
        r[i.value] = a.value;
      }
    }
    return {
      status: e.value,
      value: r
    };
  }
}
const $ = Object.freeze({
  status: "aborted"
});
const Re = t => ({
  status: "dirty",
  value: t
});
const U = t => ({
  status: "valid",
  value: t
});
const lr = t => t.status === "aborted";
const fr = t => t.status === "dirty";
const be = t => t.status === "valid";
const Ke = t => typeof Promise !== "undefined" && t instanceof Promise;
var g;
(function (t) {
  t.errToObj = e => typeof e == "string" ? {
    message: e
  } : e || {};
  t.toString = e => typeof e == "string" ? e : e == null ? undefined : e.message;
})(g ||= {});
class re {
  constructor(e, n, r, s) {
    this._cachedPath = [];
    this.parent = e;
    this.data = n;
    this._path = r;
    this._key = s;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (Array.isArray(this._key)) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
}
const pr = (t, e) => {
  if (be(e)) {
    return {
      success: true,
      data: e.value
    };
  }
  if (!t.common.issues.length) {
    throw new Error("Validation failed but no issues detected.");
  }
  return {
    success: false,
    get error() {
      if (this._error) {
        return this._error;
      }
      const n = new Y(t.common.issues);
      this._error = n;
      return this._error;
    }
  };
};
function S(t) {
  if (!t) {
    return {};
  }
  const {
    errorMap: e,
    invalid_type_error: n,
    required_error: r,
    description: s
  } = t;
  if (e && (n || r)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (e) {
    return {
      errorMap: e,
      description: s
    };
  } else {
    return {
      errorMap: (a, o) => {
        const {
          message: c
        } = t;
        if (a.code === "invalid_enum_value") {
          return {
            message: c ?? o.defaultError
          };
        } else if (typeof o.data === "undefined") {
          return {
            message: c ?? r ?? o.defaultError
          };
        } else if (a.code !== "invalid_type") {
          return {
            message: o.defaultError
          };
        } else {
          return {
            message: c ?? n ?? o.defaultError
          };
        }
      },
      description: s
    };
  }
}
class k {
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return K(e.data);
  }
  _getOrReturnCtx(e, n) {
    return n || {
      common: e.parent.common,
      data: e.data,
      parsedType: K(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new F(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: K(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const n = this._parse(e);
    if (Ke(n)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return n;
  }
  _parseAsync(e) {
    const n = this._parse(e);
    return Promise.resolve(n);
  }
  parse(e, n) {
    const r = this.safeParse(e, n);
    if (r.success) {
      return r.data;
    }
    throw r.error;
  }
  safeParse(e, n) {
    const r = {
      common: {
        issues: [],
        async: (n == null ? undefined : n.async) ?? false,
        contextualErrorMap: n == null ? undefined : n.errorMap
      },
      path: (n == null ? undefined : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: K(e)
    };
    const s = this._parseSync({
      data: e,
      path: r.path,
      parent: r
    });
    return pr(r, s);
  }
  "~validate"(e) {
    var r;
    var s;
    const n = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: K(e)
    };
    if (!this["~standard"].async) {
      try {
        const i = this._parseSync({
          data: e,
          path: [],
          parent: n
        });
        if (be(i)) {
          return {
            value: i.value
          };
        } else {
          return {
            issues: n.common.issues
          };
        }
      } catch (i) {
        if ((s = (r = i == null ? undefined : i.message) == null ? undefined : r.toLowerCase()) != null && s.includes("encountered")) {
          this["~standard"].async = true;
        }
        n.common = {
          issues: [],
          async: true
        };
      }
    }
    return this._parseAsync({
      data: e,
      path: [],
      parent: n
    }).then(i => be(i) ? {
      value: i.value
    } : {
      issues: n.common.issues
    });
  }
  async parseAsync(e, n) {
    const r = await this.safeParseAsync(e, n);
    if (r.success) {
      return r.data;
    }
    throw r.error;
  }
  async safeParseAsync(e, n) {
    const r = {
      common: {
        issues: [],
        contextualErrorMap: n == null ? undefined : n.errorMap,
        async: true
      },
      path: (n == null ? undefined : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: K(e)
    };
    const s = this._parse({
      data: e,
      path: r.path,
      parent: r
    });
    const i = await (Ke(s) ? s : Promise.resolve(s));
    return pr(r, i);
  }
  refine(e, n) {
    const r = s => typeof n == "string" || typeof n === "undefined" ? {
      message: n
    } : typeof n == "function" ? n(s) : n;
    return this._refinement((s, i) => {
      const a = e(s);
      const o = () => i.addIssue({
        code: p.custom,
        ...r(s)
      });
      if (typeof Promise !== "undefined" && a instanceof Promise) {
        return a.then(c => c ? true : (o(), false));
      } else if (a) {
        return true;
      } else {
        o();
        return false;
      }
    });
  }
  refinement(e, n) {
    return this._refinement((r, s) => e(r) ? true : (s.addIssue(typeof n == "function" ? n(r, s) : n), false));
  }
  _refinement(e) {
    return new $e({
      schema: this,
      typeName: v.ZodEffects,
      effect: {
        type: "refinement",
        refinement: e
      }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  constructor(e) {
    this.spa = this.safeParseAsync;
    this._def = e;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: n => this["~validate"](n)
    };
  }
  optional() {
    return Q.create(this, this._def);
  }
  nullable() {
    return ve.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Z.create(this);
  }
  promise() {
    return tt.create(this, this._def);
  }
  or(e) {
    return Qe.create([this, e], this._def);
  }
  and(e) {
    return et.create(this, e, this._def);
  }
  transform(e) {
    return new $e({
      ...S(this._def),
      schema: this,
      typeName: v.ZodEffects,
      effect: {
        type: "transform",
        transform: e
      }
    });
  }
  default(e) {
    const n = typeof e == "function" ? e : () => e;
    return new Bt({
      ...S(this._def),
      innerType: this,
      defaultValue: n,
      typeName: v.ZodDefault
    });
  }
  brand() {
    return new Nd({
      typeName: v.ZodBranded,
      type: this,
      ...S(this._def)
    });
  }
  catch(e) {
    const n = typeof e == "function" ? e : () => e;
    return new Wt({
      ...S(this._def),
      innerType: this,
      catchValue: n,
      typeName: v.ZodCatch
    });
  }
  describe(e) {
    const n = this.constructor;
    return new n({
      ...this._def,
      description: e
    });
  }
  pipe(e) {
    return un.create(this, e);
  }
  readonly() {
    return Zt.create(this);
  }
  isOptional() {
    return this.safeParse(undefined).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const dd = /^c[^\s-]{8,}$/i;
const ld = /^[0-9a-z]+$/;
const fd = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
const pd = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
const _d = /^[a-z0-9_-]{21}$/i;
const hd = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
const md = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
const gd = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
const bd = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let $t;
const yd = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
const $d = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
const vd = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
const Ed = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
const Sd = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
const kd = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
const Ss = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))";
const xd = new RegExp(`^${Ss}$`);
function ks(t) {
  let e = "[0-5]\\d";
  if (t.precision) {
    e = `${e}\\.\\d{${t.precision}}`;
  } else if (t.precision == null) {
    e = `${e}(\\.\\d+)?`;
  }
  const n = t.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${e})${n}`;
}
function wd(t) {
  return new RegExp(`^${ks(t)}$`);
}
function Rd(t) {
  let e = `${Ss}T${ks(t)}`;
  const n = [];
  n.push(t.local ? "Z?" : "Z");
  if (t.offset) {
    n.push("([+-]\\d{2}:?\\d{2})");
  }
  e = `${e}(${n.join("|")})`;
  return new RegExp(`^${e}$`);
}
function Cd(t, e) {
  return (e === "v4" || !e) && !!yd.test(t) || (e === "v6" || !e) && !!vd.test(t);
}
function Id(t, e) {
  if (!hd.test(t)) {
    return false;
  }
  try {
    const [n] = t.split(".");
    if (!n) {
      return false;
    }
    const r = n.replace(/-/g, "+").replace(/_/g, "/").padEnd(n.length + (4 - n.length % 4) % 4, "=");
    const s = JSON.parse(atob(r));
    return typeof s == "object" && s !== null && (!("typ" in s) || (s == null ? undefined : s.typ) === "JWT") && !!s.alg && (!e || s.alg === e);
  } catch {
    return false;
  }
}
function Td(t, e) {
  return (e === "v4" || !e) && !!$d.test(t) || (e === "v6" || !e) && !!Ed.test(t);
}
class X extends k {
  _parse(e) {
    if (this._def.coerce) {
      e.data = String(e.data);
    }
    if (this._getType(e) !== m.string) {
      const i = this._getOrReturnCtx(e);
      h(i, {
        code: p.invalid_type,
        expected: m.string,
        received: i.parsedType
      });
      return $;
    }
    const r = new F();
    let s;
    for (const i of this._def.checks) {
      if (i.kind === "min") {
        if (e.data.length < i.value) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            code: p.too_small,
            minimum: i.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "max") {
        if (e.data.length > i.value) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            code: p.too_big,
            maximum: i.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "length") {
        const a = e.data.length > i.value;
        const o = e.data.length < i.value;
        if (a || o) {
          s = this._getOrReturnCtx(e, s);
          if (a) {
            h(s, {
              code: p.too_big,
              maximum: i.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: i.message
            });
          } else if (o) {
            h(s, {
              code: p.too_small,
              minimum: i.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: i.message
            });
          }
          r.dirty();
        }
      } else if (i.kind === "email") {
        if (!gd.test(e.data)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            validation: "email",
            code: p.invalid_string,
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "emoji") {
        $t ||= new RegExp(bd, "u");
        if (!$t.test(e.data)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            validation: "emoji",
            code: p.invalid_string,
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "uuid") {
        if (!pd.test(e.data)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            validation: "uuid",
            code: p.invalid_string,
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "nanoid") {
        if (!_d.test(e.data)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            validation: "nanoid",
            code: p.invalid_string,
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "cuid") {
        if (!dd.test(e.data)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            validation: "cuid",
            code: p.invalid_string,
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "cuid2") {
        if (!ld.test(e.data)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            validation: "cuid2",
            code: p.invalid_string,
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "ulid") {
        if (!fd.test(e.data)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            validation: "ulid",
            code: p.invalid_string,
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "url") {
        try {
          new URL(e.data);
        } catch {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            validation: "url",
            code: p.invalid_string,
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "regex") {
        i.regex.lastIndex = 0;
        if (!i.regex.test(e.data)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            validation: "regex",
            code: p.invalid_string,
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "trim") {
        e.data = e.data.trim();
      } else if (i.kind === "includes") {
        if (!e.data.includes(i.value, i.position)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            code: p.invalid_string,
            validation: {
              includes: i.value,
              position: i.position
            },
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "toLowerCase") {
        e.data = e.data.toLowerCase();
      } else if (i.kind === "toUpperCase") {
        e.data = e.data.toUpperCase();
      } else if (i.kind === "startsWith") {
        if (!e.data.startsWith(i.value)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            code: p.invalid_string,
            validation: {
              startsWith: i.value
            },
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "endsWith") {
        if (!e.data.endsWith(i.value)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            code: p.invalid_string,
            validation: {
              endsWith: i.value
            },
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "datetime") {
        if (!Rd(i).test(e.data)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            code: p.invalid_string,
            validation: "datetime",
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "date") {
        if (!xd.test(e.data)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            code: p.invalid_string,
            validation: "date",
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "time") {
        if (!wd(i).test(e.data)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            code: p.invalid_string,
            validation: "time",
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "duration") {
        if (!md.test(e.data)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            validation: "duration",
            code: p.invalid_string,
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "ip") {
        if (!Cd(e.data, i.version)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            validation: "ip",
            code: p.invalid_string,
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "jwt") {
        if (!Id(e.data, i.alg)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            validation: "jwt",
            code: p.invalid_string,
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "cidr") {
        if (!Td(e.data, i.version)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            validation: "cidr",
            code: p.invalid_string,
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "base64") {
        if (!Sd.test(e.data)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            validation: "base64",
            code: p.invalid_string,
            message: i.message
          });
          r.dirty();
        }
      } else if (i.kind === "base64url") {
        if (!kd.test(e.data)) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            validation: "base64url",
            code: p.invalid_string,
            message: i.message
          });
          r.dirty();
        }
      } else {
        x.assertNever(i);
      }
    }
    return {
      status: r.value,
      value: e.data
    };
  }
  _regex(e, n, r) {
    return this.refinement(s => e.test(s), {
      validation: n,
      code: p.invalid_string,
      ...g.errToObj(r)
    });
  }
  _addCheck(e) {
    return new X({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({
      kind: "email",
      ...g.errToObj(e)
    });
  }
  url(e) {
    return this._addCheck({
      kind: "url",
      ...g.errToObj(e)
    });
  }
  emoji(e) {
    return this._addCheck({
      kind: "emoji",
      ...g.errToObj(e)
    });
  }
  uuid(e) {
    return this._addCheck({
      kind: "uuid",
      ...g.errToObj(e)
    });
  }
  nanoid(e) {
    return this._addCheck({
      kind: "nanoid",
      ...g.errToObj(e)
    });
  }
  cuid(e) {
    return this._addCheck({
      kind: "cuid",
      ...g.errToObj(e)
    });
  }
  cuid2(e) {
    return this._addCheck({
      kind: "cuid2",
      ...g.errToObj(e)
    });
  }
  ulid(e) {
    return this._addCheck({
      kind: "ulid",
      ...g.errToObj(e)
    });
  }
  base64(e) {
    return this._addCheck({
      kind: "base64",
      ...g.errToObj(e)
    });
  }
  base64url(e) {
    return this._addCheck({
      kind: "base64url",
      ...g.errToObj(e)
    });
  }
  jwt(e) {
    return this._addCheck({
      kind: "jwt",
      ...g.errToObj(e)
    });
  }
  ip(e) {
    return this._addCheck({
      kind: "ip",
      ...g.errToObj(e)
    });
  }
  cidr(e) {
    return this._addCheck({
      kind: "cidr",
      ...g.errToObj(e)
    });
  }
  datetime(e) {
    if (typeof e == "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: e
      });
    } else {
      return this._addCheck({
        kind: "datetime",
        precision: typeof (e == null ? undefined : e.precision) === "undefined" ? null : e == null ? undefined : e.precision,
        offset: (e == null ? undefined : e.offset) ?? false,
        local: (e == null ? undefined : e.local) ?? false,
        ...g.errToObj(e == null ? undefined : e.message)
      });
    }
  }
  date(e) {
    return this._addCheck({
      kind: "date",
      message: e
    });
  }
  time(e) {
    if (typeof e == "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: e
      });
    } else {
      return this._addCheck({
        kind: "time",
        precision: typeof (e == null ? undefined : e.precision) === "undefined" ? null : e == null ? undefined : e.precision,
        ...g.errToObj(e == null ? undefined : e.message)
      });
    }
  }
  duration(e) {
    return this._addCheck({
      kind: "duration",
      ...g.errToObj(e)
    });
  }
  regex(e, n) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...g.errToObj(n)
    });
  }
  includes(e, n) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: n == null ? undefined : n.position,
      ...g.errToObj(n == null ? undefined : n.message)
    });
  }
  startsWith(e, n) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...g.errToObj(n)
    });
  }
  endsWith(e, n) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...g.errToObj(n)
    });
  }
  min(e, n) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...g.errToObj(n)
    });
  }
  max(e, n) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...g.errToObj(n)
    });
  }
  length(e, n) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...g.errToObj(n)
    });
  }
  nonempty(e) {
    return this.min(1, g.errToObj(e));
  }
  trim() {
    return new X({
      ...this._def,
      checks: [...this._def.checks, {
        kind: "trim"
      }]
    });
  }
  toLowerCase() {
    return new X({
      ...this._def,
      checks: [...this._def.checks, {
        kind: "toLowerCase"
      }]
    });
  }
  toUpperCase() {
    return new X({
      ...this._def,
      checks: [...this._def.checks, {
        kind: "toUpperCase"
      }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find(e => e.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find(e => e.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find(e => e.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find(e => e.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find(e => e.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find(e => e.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find(e => e.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find(e => e.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find(e => e.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find(e => e.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find(e => e.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find(e => e.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find(e => e.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find(e => e.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find(e => e.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find(e => e.kind === "base64url");
  }
  get minLength() {
    let e = null;
    for (const n of this._def.checks) {
      if (n.kind === "min" && (e === null || n.value > e)) {
        e = n.value;
      }
    }
    return e;
  }
  get maxLength() {
    let e = null;
    for (const n of this._def.checks) {
      if (n.kind === "max" && (e === null || n.value < e)) {
        e = n.value;
      }
    }
    return e;
  }
}
X.create = t => new X({
  checks: [],
  typeName: v.ZodString,
  coerce: (t == null ? undefined : t.coerce) ?? false,
  ...S(t)
});
function Ad(t, e) {
  const n = (t.toString().split(".")[1] || "").length;
  const r = (e.toString().split(".")[1] || "").length;
  const s = n > r ? n : r;
  const i = Number.parseInt(t.toFixed(s).replace(".", ""));
  const a = Number.parseInt(e.toFixed(s).replace(".", ""));
  return i % a / 10 ** s;
}
class Ae extends k {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce) {
      e.data = Number(e.data);
    }
    if (this._getType(e) !== m.number) {
      const i = this._getOrReturnCtx(e);
      h(i, {
        code: p.invalid_type,
        expected: m.number,
        received: i.parsedType
      });
      return $;
    }
    let r;
    const s = new F();
    for (const i of this._def.checks) {
      if (i.kind === "int") {
        if (!x.isInteger(e.data)) {
          r = this._getOrReturnCtx(e, r);
          h(r, {
            code: p.invalid_type,
            expected: "integer",
            received: "float",
            message: i.message
          });
          s.dirty();
        }
      } else if (i.kind === "min") {
        if (i.inclusive ? e.data < i.value : e.data <= i.value) {
          r = this._getOrReturnCtx(e, r);
          h(r, {
            code: p.too_small,
            minimum: i.value,
            type: "number",
            inclusive: i.inclusive,
            exact: false,
            message: i.message
          });
          s.dirty();
        }
      } else if (i.kind === "max") {
        if (i.inclusive ? e.data > i.value : e.data >= i.value) {
          r = this._getOrReturnCtx(e, r);
          h(r, {
            code: p.too_big,
            maximum: i.value,
            type: "number",
            inclusive: i.inclusive,
            exact: false,
            message: i.message
          });
          s.dirty();
        }
      } else if (i.kind === "multipleOf") {
        if (Ad(e.data, i.value) !== 0) {
          r = this._getOrReturnCtx(e, r);
          h(r, {
            code: p.not_multiple_of,
            multipleOf: i.value,
            message: i.message
          });
          s.dirty();
        }
      } else if (i.kind === "finite") {
        if (!Number.isFinite(e.data)) {
          r = this._getOrReturnCtx(e, r);
          h(r, {
            code: p.not_finite,
            message: i.message
          });
          s.dirty();
        }
      } else {
        x.assertNever(i);
      }
    }
    return {
      status: s.value,
      value: e.data
    };
  }
  gte(e, n) {
    return this.setLimit("min", e, true, g.toString(n));
  }
  gt(e, n) {
    return this.setLimit("min", e, false, g.toString(n));
  }
  lte(e, n) {
    return this.setLimit("max", e, true, g.toString(n));
  }
  lt(e, n) {
    return this.setLimit("max", e, false, g.toString(n));
  }
  setLimit(e, n, r, s) {
    return new Ae({
      ...this._def,
      checks: [...this._def.checks, {
        kind: e,
        value: n,
        inclusive: r,
        message: g.toString(s)
      }]
    });
  }
  _addCheck(e) {
    return new Ae({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: g.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: g.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: g.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: g.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: g.toString(e)
    });
  }
  multipleOf(e, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: g.toString(n)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: g.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: g.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: g.toString(e)
    });
  }
  get minValue() {
    let e = null;
    for (const n of this._def.checks) {
      if (n.kind === "min" && (e === null || n.value > e)) {
        e = n.value;
      }
    }
    return e;
  }
  get maxValue() {
    let e = null;
    for (const n of this._def.checks) {
      if (n.kind === "max" && (e === null || n.value < e)) {
        e = n.value;
      }
    }
    return e;
  }
  get isInt() {
    return !!this._def.checks.find(e => e.kind === "int" || e.kind === "multipleOf" && x.isInteger(e.value));
  }
  get isFinite() {
    let e = null;
    let n = null;
    for (const r of this._def.checks) {
      if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf") {
        return true;
      }
      if (r.kind === "min") {
        if (n === null || r.value > n) {
          n = r.value;
        }
      } else if (r.kind === "max" && (e === null || r.value < e)) {
        e = r.value;
      }
    }
    return Number.isFinite(n) && Number.isFinite(e);
  }
}
Ae.create = t => new Ae({
  checks: [],
  typeName: v.ZodNumber,
  coerce: (t == null ? undefined : t.coerce) || false,
  ...S(t)
});
class Ne extends k {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce) {
      try {
        e.data = BigInt(e.data);
      } catch {
        return this._getInvalidInput(e);
      }
    }
    if (this._getType(e) !== m.bigint) {
      return this._getInvalidInput(e);
    }
    let r;
    const s = new F();
    for (const i of this._def.checks) {
      if (i.kind === "min") {
        if (i.inclusive ? e.data < i.value : e.data <= i.value) {
          r = this._getOrReturnCtx(e, r);
          h(r, {
            code: p.too_small,
            type: "bigint",
            minimum: i.value,
            inclusive: i.inclusive,
            message: i.message
          });
          s.dirty();
        }
      } else if (i.kind === "max") {
        if (i.inclusive ? e.data > i.value : e.data >= i.value) {
          r = this._getOrReturnCtx(e, r);
          h(r, {
            code: p.too_big,
            type: "bigint",
            maximum: i.value,
            inclusive: i.inclusive,
            message: i.message
          });
          s.dirty();
        }
      } else if (i.kind === "multipleOf") {
        if (e.data % i.value !== BigInt(0)) {
          r = this._getOrReturnCtx(e, r);
          h(r, {
            code: p.not_multiple_of,
            multipleOf: i.value,
            message: i.message
          });
          s.dirty();
        }
      } else {
        x.assertNever(i);
      }
    }
    return {
      status: s.value,
      value: e.data
    };
  }
  _getInvalidInput(e) {
    const n = this._getOrReturnCtx(e);
    h(n, {
      code: p.invalid_type,
      expected: m.bigint,
      received: n.parsedType
    });
    return $;
  }
  gte(e, n) {
    return this.setLimit("min", e, true, g.toString(n));
  }
  gt(e, n) {
    return this.setLimit("min", e, false, g.toString(n));
  }
  lte(e, n) {
    return this.setLimit("max", e, true, g.toString(n));
  }
  lt(e, n) {
    return this.setLimit("max", e, false, g.toString(n));
  }
  setLimit(e, n, r, s) {
    return new Ne({
      ...this._def,
      checks: [...this._def.checks, {
        kind: e,
        value: n,
        inclusive: r,
        message: g.toString(s)
      }]
    });
  }
  _addCheck(e) {
    return new Ne({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: g.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: g.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: g.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: g.toString(e)
    });
  }
  multipleOf(e, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: g.toString(n)
    });
  }
  get minValue() {
    let e = null;
    for (const n of this._def.checks) {
      if (n.kind === "min" && (e === null || n.value > e)) {
        e = n.value;
      }
    }
    return e;
  }
  get maxValue() {
    let e = null;
    for (const n of this._def.checks) {
      if (n.kind === "max" && (e === null || n.value < e)) {
        e = n.value;
      }
    }
    return e;
  }
}
Ne.create = t => new Ne({
  checks: [],
  typeName: v.ZodBigInt,
  coerce: (t == null ? undefined : t.coerce) ?? false,
  ...S(t)
});
class Ft extends k {
  _parse(e) {
    if (this._def.coerce) {
      e.data = !!e.data;
    }
    if (this._getType(e) !== m.boolean) {
      const r = this._getOrReturnCtx(e);
      h(r, {
        code: p.invalid_type,
        expected: m.boolean,
        received: r.parsedType
      });
      return $;
    }
    return U(e.data);
  }
}
Ft.create = t => new Ft({
  typeName: v.ZodBoolean,
  coerce: (t == null ? undefined : t.coerce) || false,
  ...S(t)
});
class Xe extends k {
  _parse(e) {
    if (this._def.coerce) {
      e.data = new Date(e.data);
    }
    if (this._getType(e) !== m.date) {
      const i = this._getOrReturnCtx(e);
      h(i, {
        code: p.invalid_type,
        expected: m.date,
        received: i.parsedType
      });
      return $;
    }
    if (Number.isNaN(e.data.getTime())) {
      const i = this._getOrReturnCtx(e);
      h(i, {
        code: p.invalid_date
      });
      return $;
    }
    const r = new F();
    let s;
    for (const i of this._def.checks) {
      if (i.kind === "min") {
        if (e.data.getTime() < i.value) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            code: p.too_small,
            message: i.message,
            inclusive: true,
            exact: false,
            minimum: i.value,
            type: "date"
          });
          r.dirty();
        }
      } else if (i.kind === "max") {
        if (e.data.getTime() > i.value) {
          s = this._getOrReturnCtx(e, s);
          h(s, {
            code: p.too_big,
            message: i.message,
            inclusive: true,
            exact: false,
            maximum: i.value,
            type: "date"
          });
          r.dirty();
        }
      } else {
        x.assertNever(i);
      }
    }
    return {
      status: r.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new Xe({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, n) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: g.toString(n)
    });
  }
  max(e, n) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: g.toString(n)
    });
  }
  get minDate() {
    let e = null;
    for (const n of this._def.checks) {
      if (n.kind === "min" && (e === null || n.value > e)) {
        e = n.value;
      }
    }
    if (e != null) {
      return new Date(e);
    } else {
      return null;
    }
  }
  get maxDate() {
    let e = null;
    for (const n of this._def.checks) {
      if (n.kind === "max" && (e === null || n.value < e)) {
        e = n.value;
      }
    }
    if (e != null) {
      return new Date(e);
    } else {
      return null;
    }
  }
}
Xe.create = t => new Xe({
  checks: [],
  coerce: (t == null ? undefined : t.coerce) || false,
  typeName: v.ZodDate,
  ...S(t)
});
class _r extends k {
  _parse(e) {
    if (this._getType(e) !== m.symbol) {
      const r = this._getOrReturnCtx(e);
      h(r, {
        code: p.invalid_type,
        expected: m.symbol,
        received: r.parsedType
      });
      return $;
    }
    return U(e.data);
  }
}
_r.create = t => new _r({
  typeName: v.ZodSymbol,
  ...S(t)
});
class hr extends k {
  _parse(e) {
    if (this._getType(e) !== m.undefined) {
      const r = this._getOrReturnCtx(e);
      h(r, {
        code: p.invalid_type,
        expected: m.undefined,
        received: r.parsedType
      });
      return $;
    }
    return U(e.data);
  }
}
hr.create = t => new hr({
  typeName: v.ZodUndefined,
  ...S(t)
});
class mr extends k {
  _parse(e) {
    if (this._getType(e) !== m.null) {
      const r = this._getOrReturnCtx(e);
      h(r, {
        code: p.invalid_type,
        expected: m.null,
        received: r.parsedType
      });
      return $;
    }
    return U(e.data);
  }
}
mr.create = t => new mr({
  typeName: v.ZodNull,
  ...S(t)
});
class gr extends k {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(e) {
    return U(e.data);
  }
}
gr.create = t => new gr({
  typeName: v.ZodAny,
  ...S(t)
});
class br extends k {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(e) {
    return U(e.data);
  }
}
br.create = t => new br({
  typeName: v.ZodUnknown,
  ...S(t)
});
class se extends k {
  _parse(e) {
    const n = this._getOrReturnCtx(e);
    h(n, {
      code: p.invalid_type,
      expected: m.never,
      received: n.parsedType
    });
    return $;
  }
}
se.create = t => new se({
  typeName: v.ZodNever,
  ...S(t)
});
class yr extends k {
  _parse(e) {
    if (this._getType(e) !== m.undefined) {
      const r = this._getOrReturnCtx(e);
      h(r, {
        code: p.invalid_type,
        expected: m.void,
        received: r.parsedType
      });
      return $;
    }
    return U(e.data);
  }
}
yr.create = t => new yr({
  typeName: v.ZodVoid,
  ...S(t)
});
class Z extends k {
  _parse(e) {
    const {
      ctx: n,
      status: r
    } = this._processInputParams(e);
    const s = this._def;
    if (n.parsedType !== m.array) {
      h(n, {
        code: p.invalid_type,
        expected: m.array,
        received: n.parsedType
      });
      return $;
    }
    if (s.exactLength !== null) {
      const a = n.data.length > s.exactLength.value;
      const o = n.data.length < s.exactLength.value;
      if (a || o) {
        h(n, {
          code: a ? p.too_big : p.too_small,
          minimum: o ? s.exactLength.value : undefined,
          maximum: a ? s.exactLength.value : undefined,
          type: "array",
          inclusive: true,
          exact: true,
          message: s.exactLength.message
        });
        r.dirty();
      }
    }
    if (s.minLength !== null && n.data.length < s.minLength.value) {
      h(n, {
        code: p.too_small,
        minimum: s.minLength.value,
        type: "array",
        inclusive: true,
        exact: false,
        message: s.minLength.message
      });
      r.dirty();
    }
    if (s.maxLength !== null && n.data.length > s.maxLength.value) {
      h(n, {
        code: p.too_big,
        maximum: s.maxLength.value,
        type: "array",
        inclusive: true,
        exact: false,
        message: s.maxLength.message
      });
      r.dirty();
    }
    if (n.common.async) {
      return Promise.all([...n.data].map((a, o) => s.type._parseAsync(new re(n, a, n.path, o)))).then(a => F.mergeArray(r, a));
    }
    const i = [...n.data].map((a, o) => s.type._parseSync(new re(n, a, n.path, o)));
    return F.mergeArray(r, i);
  }
  get element() {
    return this._def.type;
  }
  min(e, n) {
    return new Z({
      ...this._def,
      minLength: {
        value: e,
        message: g.toString(n)
      }
    });
  }
  max(e, n) {
    return new Z({
      ...this._def,
      maxLength: {
        value: e,
        message: g.toString(n)
      }
    });
  }
  length(e, n) {
    return new Z({
      ...this._def,
      exactLength: {
        value: e,
        message: g.toString(n)
      }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Z.create = (t, e) => new Z({
  type: t,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: v.ZodArray,
  ...S(e)
});
function pe(t) {
  if (t instanceof T) {
    const e = {};
    for (const n in t.shape) {
      const r = t.shape[n];
      e[n] = Q.create(pe(r));
    }
    return new T({
      ...t._def,
      shape: () => e
    });
  } else if (t instanceof Z) {
    return new Z({
      ...t._def,
      type: pe(t.element)
    });
  } else if (t instanceof Q) {
    return Q.create(pe(t.unwrap()));
  } else if (t instanceof ve) {
    return ve.create(pe(t.unwrap()));
  } else if (t instanceof ue) {
    return ue.create(t.items.map(e => pe(e)));
  } else {
    return t;
  }
}
class T extends k {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null) {
      return this._cached;
    }
    const e = this._def.shape();
    const n = x.objectKeys(e);
    this._cached = {
      shape: e,
      keys: n
    };
    return this._cached;
  }
  _parse(e) {
    if (this._getType(e) !== m.object) {
      const u = this._getOrReturnCtx(e);
      h(u, {
        code: p.invalid_type,
        expected: m.object,
        received: u.parsedType
      });
      return $;
    }
    const {
      status: r,
      ctx: s
    } = this._processInputParams(e);
    const {
      shape: i,
      keys: a
    } = this._getCached();
    const o = [];
    if (!(this._def.catchall instanceof se) || this._def.unknownKeys !== "strip") {
      for (const u in s.data) {
        if (!a.includes(u)) {
          o.push(u);
        }
      }
    }
    const c = [];
    for (const u of a) {
      const l = i[u];
      const f = s.data[u];
      c.push({
        key: {
          status: "valid",
          value: u
        },
        value: l._parse(new re(s, f, s.path, u)),
        alwaysSet: u in s.data
      });
    }
    if (this._def.catchall instanceof se) {
      const u = this._def.unknownKeys;
      if (u === "passthrough") {
        for (const l of o) {
          c.push({
            key: {
              status: "valid",
              value: l
            },
            value: {
              status: "valid",
              value: s.data[l]
            }
          });
        }
      } else if (u === "strict") {
        if (o.length > 0) {
          h(s, {
            code: p.unrecognized_keys,
            keys: o
          });
          r.dirty();
        }
      } else if (u !== "strip") {
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
      }
    } else {
      const u = this._def.catchall;
      for (const l of o) {
        const f = s.data[l];
        c.push({
          key: {
            status: "valid",
            value: l
          },
          value: u._parse(new re(s, f, s.path, l)),
          alwaysSet: l in s.data
        });
      }
    }
    if (s.common.async) {
      return Promise.resolve().then(async () => {
        const u = [];
        for (const l of c) {
          const f = await l.key;
          const b = await l.value;
          u.push({
            key: f,
            value: b,
            alwaysSet: l.alwaysSet
          });
        }
        return u;
      }).then(u => F.mergeObjectSync(r, u));
    } else {
      return F.mergeObjectSync(r, c);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    g.errToObj;
    return new T({
      ...this._def,
      unknownKeys: "strict",
      ...(e !== undefined ? {
        errorMap: (n, r) => {
          var i;
          var a;
          const s = ((a = (i = this._def).errorMap) == null ? undefined : a.call(i, n, r).message) ?? r.defaultError;
          if (n.code === "unrecognized_keys") {
            return {
              message: g.errToObj(e).message ?? s
            };
          } else {
            return {
              message: s
            };
          }
        }
      } : {})
    });
  }
  strip() {
    return new T({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new T({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  extend(e) {
    return new T({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...e
      })
    });
  }
  merge(e) {
    return new T({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: v.ZodObject
    });
  }
  setKey(e, n) {
    return this.augment({
      [e]: n
    });
  }
  catchall(e) {
    return new T({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const n = {};
    for (const r of x.objectKeys(e)) {
      if (e[r] && this.shape[r]) {
        n[r] = this.shape[r];
      }
    }
    return new T({
      ...this._def,
      shape: () => n
    });
  }
  omit(e) {
    const n = {};
    for (const r of x.objectKeys(this.shape)) {
      if (!e[r]) {
        n[r] = this.shape[r];
      }
    }
    return new T({
      ...this._def,
      shape: () => n
    });
  }
  deepPartial() {
    return pe(this);
  }
  partial(e) {
    const n = {};
    for (const r of x.objectKeys(this.shape)) {
      const s = this.shape[r];
      if (e && !e[r]) {
        n[r] = s;
      } else {
        n[r] = s.optional();
      }
    }
    return new T({
      ...this._def,
      shape: () => n
    });
  }
  required(e) {
    const n = {};
    for (const r of x.objectKeys(this.shape)) {
      if (e && !e[r]) {
        n[r] = this.shape[r];
      } else {
        let i = this.shape[r];
        while (i instanceof Q) {
          i = i._def.innerType;
        }
        n[r] = i;
      }
    }
    return new T({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return xs(x.objectKeys(this.shape));
  }
}
T.create = (t, e) => new T({
  shape: () => t,
  unknownKeys: "strip",
  catchall: se.create(),
  typeName: v.ZodObject,
  ...S(e)
});
T.strictCreate = (t, e) => new T({
  shape: () => t,
  unknownKeys: "strict",
  catchall: se.create(),
  typeName: v.ZodObject,
  ...S(e)
});
T.lazycreate = (t, e) => new T({
  shape: t,
  unknownKeys: "strip",
  catchall: se.create(),
  typeName: v.ZodObject,
  ...S(e)
});
class Qe extends k {
  _parse(e) {
    const {
      ctx: n
    } = this._processInputParams(e);
    const r = this._def.options;
    function s(i) {
      for (const o of i) {
        if (o.result.status === "valid") {
          return o.result;
        }
      }
      for (const o of i) {
        if (o.result.status === "dirty") {
          n.common.issues.push(...o.ctx.common.issues);
          return o.result;
        }
      }
      const a = i.map(o => new Y(o.ctx.common.issues));
      h(n, {
        code: p.invalid_union,
        unionErrors: a
      });
      return $;
    }
    if (n.common.async) {
      return Promise.all(r.map(async i => {
        const a = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await i._parseAsync({
            data: n.data,
            path: n.path,
            parent: a
          }),
          ctx: a
        };
      })).then(s);
    }
    {
      let i;
      const a = [];
      for (const c of r) {
        const u = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        };
        const l = c._parseSync({
          data: n.data,
          path: n.path,
          parent: u
        });
        if (l.status === "valid") {
          return l;
        }
        if (l.status === "dirty" && !i) {
          i = {
            result: l,
            ctx: u
          };
        }
        if (u.common.issues.length) {
          a.push(u.common.issues);
        }
      }
      if (i) {
        n.common.issues.push(...i.ctx.common.issues);
        return i.result;
      }
      const o = a.map(c => new Y(c));
      h(n, {
        code: p.invalid_union,
        unionErrors: o
      });
      return $;
    }
  }
  get options() {
    return this._def.options;
  }
}
Qe.create = (t, e) => new Qe({
  options: t,
  typeName: v.ZodUnion,
  ...S(e)
});
function jt(t, e) {
  const n = K(t);
  const r = K(e);
  if (t === e) {
    return {
      valid: true,
      data: t
    };
  }
  if (n === m.object && r === m.object) {
    const s = x.objectKeys(e);
    const i = x.objectKeys(t).filter(o => s.indexOf(o) !== -1);
    const a = {
      ...t,
      ...e
    };
    for (const o of i) {
      const c = jt(t[o], e[o]);
      if (!c.valid) {
        return {
          valid: false
        };
      }
      a[o] = c.data;
    }
    return {
      valid: true,
      data: a
    };
  } else if (n === m.array && r === m.array) {
    if (t.length !== e.length) {
      return {
        valid: false
      };
    }
    const s = [];
    for (let i = 0; i < t.length; i++) {
      const a = t[i];
      const o = e[i];
      const c = jt(a, o);
      if (!c.valid) {
        return {
          valid: false
        };
      }
      s.push(c.data);
    }
    return {
      valid: true,
      data: s
    };
  } else if (n === m.date && r === m.date && +t == +e) {
    return {
      valid: true,
      data: t
    };
  } else {
    return {
      valid: false
    };
  }
}
class et extends k {
  _parse(e) {
    const {
      status: n,
      ctx: r
    } = this._processInputParams(e);
    const s = (i, a) => {
      if (lr(i) || lr(a)) {
        return $;
      }
      const o = jt(i.value, a.value);
      if (o.valid) {
        if (fr(i) || fr(a)) {
          n.dirty();
        }
        return {
          status: n.value,
          value: o.data
        };
      } else {
        h(r, {
          code: p.invalid_intersection_types
        });
        return $;
      }
    };
    if (r.common.async) {
      return Promise.all([this._def.left._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      }), this._def.right._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      })]).then(([i, a]) => s(i, a));
    } else {
      return s(this._def.left._parseSync({
        data: r.data,
        path: r.path,
        parent: r
      }), this._def.right._parseSync({
        data: r.data,
        path: r.path,
        parent: r
      }));
    }
  }
}
et.create = (t, e, n) => new et({
  left: t,
  right: e,
  typeName: v.ZodIntersection,
  ...S(n)
});
class ue extends k {
  _parse(e) {
    const {
      status: n,
      ctx: r
    } = this._processInputParams(e);
    if (r.parsedType !== m.array) {
      h(r, {
        code: p.invalid_type,
        expected: m.array,
        received: r.parsedType
      });
      return $;
    }
    if (r.data.length < this._def.items.length) {
      h(r, {
        code: p.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return $;
    }
    if (!this._def.rest && r.data.length > this._def.items.length) {
      h(r, {
        code: p.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      n.dirty();
    }
    const i = [...r.data].map((a, o) => {
      const c = this._def.items[o] || this._def.rest;
      if (c) {
        return c._parse(new re(r, a, r.path, o));
      } else {
        return null;
      }
    }).filter(a => !!a);
    if (r.common.async) {
      return Promise.all(i).then(a => F.mergeArray(n, a));
    } else {
      return F.mergeArray(n, i);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new ue({
      ...this._def,
      rest: e
    });
  }
}
ue.create = (t, e) => {
  if (!Array.isArray(t)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ue({
    items: t,
    typeName: v.ZodTuple,
    rest: null,
    ...S(e)
  });
};
class $r extends k {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const {
      status: n,
      ctx: r
    } = this._processInputParams(e);
    if (r.parsedType !== m.map) {
      h(r, {
        code: p.invalid_type,
        expected: m.map,
        received: r.parsedType
      });
      return $;
    }
    const s = this._def.keyType;
    const i = this._def.valueType;
    const a = [...r.data.entries()].map(([o, c], u) => ({
      key: s._parse(new re(r, o, r.path, [u, "key"])),
      value: i._parse(new re(r, c, r.path, [u, "value"]))
    }));
    if (r.common.async) {
      const o = new Map();
      return Promise.resolve().then(async () => {
        for (const c of a) {
          const u = await c.key;
          const l = await c.value;
          if (u.status === "aborted" || l.status === "aborted") {
            return $;
          }
          if (u.status === "dirty" || l.status === "dirty") {
            n.dirty();
          }
          o.set(u.value, l.value);
        }
        return {
          status: n.value,
          value: o
        };
      });
    } else {
      const o = new Map();
      for (const c of a) {
        const u = c.key;
        const l = c.value;
        if (u.status === "aborted" || l.status === "aborted") {
          return $;
        }
        if (u.status === "dirty" || l.status === "dirty") {
          n.dirty();
        }
        o.set(u.value, l.value);
      }
      return {
        status: n.value,
        value: o
      };
    }
  }
}
$r.create = (t, e, n) => new $r({
  valueType: e,
  keyType: t,
  typeName: v.ZodMap,
  ...S(n)
});
class Oe extends k {
  _parse(e) {
    const {
      status: n,
      ctx: r
    } = this._processInputParams(e);
    if (r.parsedType !== m.set) {
      h(r, {
        code: p.invalid_type,
        expected: m.set,
        received: r.parsedType
      });
      return $;
    }
    const s = this._def;
    if (s.minSize !== null && r.data.size < s.minSize.value) {
      h(r, {
        code: p.too_small,
        minimum: s.minSize.value,
        type: "set",
        inclusive: true,
        exact: false,
        message: s.minSize.message
      });
      n.dirty();
    }
    if (s.maxSize !== null && r.data.size > s.maxSize.value) {
      h(r, {
        code: p.too_big,
        maximum: s.maxSize.value,
        type: "set",
        inclusive: true,
        exact: false,
        message: s.maxSize.message
      });
      n.dirty();
    }
    const i = this._def.valueType;
    function a(c) {
      const u = new Set();
      for (const l of c) {
        if (l.status === "aborted") {
          return $;
        }
        if (l.status === "dirty") {
          n.dirty();
        }
        u.add(l.value);
      }
      return {
        status: n.value,
        value: u
      };
    }
    const o = [...r.data.values()].map((c, u) => i._parse(new re(r, c, r.path, u)));
    if (r.common.async) {
      return Promise.all(o).then(c => a(c));
    } else {
      return a(o);
    }
  }
  min(e, n) {
    return new Oe({
      ...this._def,
      minSize: {
        value: e,
        message: g.toString(n)
      }
    });
  }
  max(e, n) {
    return new Oe({
      ...this._def,
      maxSize: {
        value: e,
        message: g.toString(n)
      }
    });
  }
  size(e, n) {
    return this.min(e, n).max(e, n);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Oe.create = (t, e) => new Oe({
  valueType: t,
  minSize: null,
  maxSize: null,
  typeName: v.ZodSet,
  ...S(e)
});
class vr extends k {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const {
      ctx: n
    } = this._processInputParams(e);
    return this._def.getter()._parse({
      data: n.data,
      path: n.path,
      parent: n
    });
  }
}
vr.create = (t, e) => new vr({
  getter: t,
  typeName: v.ZodLazy,
  ...S(e)
});
class Ut extends k {
  _parse(e) {
    if (e.data !== this._def.value) {
      const n = this._getOrReturnCtx(e);
      h(n, {
        received: n.data,
        code: p.invalid_literal,
        expected: this._def.value
      });
      return $;
    }
    return {
      status: "valid",
      value: e.data
    };
  }
  get value() {
    return this._def.value;
  }
}
Ut.create = (t, e) => new Ut({
  value: t,
  typeName: v.ZodLiteral,
  ...S(e)
});
function xs(t, e) {
  return new ye({
    values: t,
    typeName: v.ZodEnum,
    ...S(e)
  });
}
class ye extends k {
  _parse(e) {
    if (typeof e.data != "string") {
      const n = this._getOrReturnCtx(e);
      const r = this._def.values;
      h(n, {
        expected: x.joinValues(r),
        received: n.parsedType,
        code: p.invalid_type
      });
      return $;
    }
    this._cache ||= new Set(this._def.values);
    if (!this._cache.has(e.data)) {
      const n = this._getOrReturnCtx(e);
      const r = this._def.values;
      h(n, {
        received: n.data,
        code: p.invalid_enum_value,
        options: r
      });
      return $;
    }
    return U(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const e = {};
    for (const n of this._def.values) {
      e[n] = n;
    }
    return e;
  }
  get Values() {
    const e = {};
    for (const n of this._def.values) {
      e[n] = n;
    }
    return e;
  }
  get Enum() {
    const e = {};
    for (const n of this._def.values) {
      e[n] = n;
    }
    return e;
  }
  extract(e, n = this._def) {
    return ye.create(e, {
      ...this._def,
      ...n
    });
  }
  exclude(e, n = this._def) {
    return ye.create(this.options.filter(r => !e.includes(r)), {
      ...this._def,
      ...n
    });
  }
}
ye.create = xs;
class Er extends k {
  _parse(e) {
    const n = x.getValidEnumValues(this._def.values);
    const r = this._getOrReturnCtx(e);
    if (r.parsedType !== m.string && r.parsedType !== m.number) {
      const s = x.objectValues(n);
      h(r, {
        expected: x.joinValues(s),
        received: r.parsedType,
        code: p.invalid_type
      });
      return $;
    }
    this._cache ||= new Set(x.getValidEnumValues(this._def.values));
    if (!this._cache.has(e.data)) {
      const s = x.objectValues(n);
      h(r, {
        received: r.data,
        code: p.invalid_enum_value,
        options: s
      });
      return $;
    }
    return U(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
Er.create = (t, e) => new Er({
  values: t,
  typeName: v.ZodNativeEnum,
  ...S(e)
});
class tt extends k {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const {
      ctx: n
    } = this._processInputParams(e);
    if (n.parsedType !== m.promise && n.common.async === false) {
      h(n, {
        code: p.invalid_type,
        expected: m.promise,
        received: n.parsedType
      });
      return $;
    }
    const r = n.parsedType === m.promise ? n.data : Promise.resolve(n.data);
    return U(r.then(s => this._def.type.parseAsync(s, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
tt.create = (t, e) => new tt({
  type: t,
  typeName: v.ZodPromise,
  ...S(e)
});
class $e extends k {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    if (this._def.schema._def.typeName === v.ZodEffects) {
      return this._def.schema.sourceType();
    } else {
      return this._def.schema;
    }
  }
  _parse(e) {
    const {
      status: n,
      ctx: r
    } = this._processInputParams(e);
    const s = this._def.effect || null;
    const i = {
      addIssue: a => {
        h(r, a);
        if (a.fatal) {
          n.abort();
        } else {
          n.dirty();
        }
      },
      get path() {
        return r.path;
      }
    };
    i.addIssue = i.addIssue.bind(i);
    if (s.type === "preprocess") {
      const a = s.transform(r.data, i);
      if (r.common.async) {
        return Promise.resolve(a).then(async o => {
          if (n.value === "aborted") {
            return $;
          }
          const c = await this._def.schema._parseAsync({
            data: o,
            path: r.path,
            parent: r
          });
          if (c.status === "aborted") {
            return $;
          } else if (c.status === "dirty" || n.value === "dirty") {
            return Re(c.value);
          } else {
            return c;
          }
        });
      }
      {
        if (n.value === "aborted") {
          return $;
        }
        const o = this._def.schema._parseSync({
          data: a,
          path: r.path,
          parent: r
        });
        if (o.status === "aborted") {
          return $;
        } else if (o.status === "dirty" || n.value === "dirty") {
          return Re(o.value);
        } else {
          return o;
        }
      }
    }
    if (s.type === "refinement") {
      const a = o => {
        const c = s.refinement(o, i);
        if (r.common.async) {
          return Promise.resolve(c);
        }
        if (c instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return o;
      };
      if (r.common.async === false) {
        const o = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (o.status === "aborted") {
          return $;
        } else {
          if (o.status === "dirty") {
            n.dirty();
          }
          a(o.value);
          return {
            status: n.value,
            value: o.value
          };
        }
      } else {
        return this._def.schema._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        }).then(o => o.status === "aborted" ? $ : (o.status === "dirty" && n.dirty(), a(o.value).then(() => ({
          status: n.value,
          value: o.value
        }))));
      }
    }
    if (s.type === "transform") {
      if (r.common.async === false) {
        const a = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!be(a)) {
          return $;
        }
        const o = s.transform(a.value, i);
        if (o instanceof Promise) {
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return {
          status: n.value,
          value: o
        };
      } else {
        return this._def.schema._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        }).then(a => be(a) ? Promise.resolve(s.transform(a.value, i)).then(o => ({
          status: n.value,
          value: o
        })) : $);
      }
    }
    x.assertNever(s);
  }
}
$e.create = (t, e, n) => new $e({
  schema: t,
  typeName: v.ZodEffects,
  effect: e,
  ...S(n)
});
$e.createWithPreprocess = (t, e, n) => new $e({
  schema: e,
  effect: {
    type: "preprocess",
    transform: t
  },
  typeName: v.ZodEffects,
  ...S(n)
});
class Q extends k {
  _parse(e) {
    if (this._getType(e) === m.undefined) {
      return U(undefined);
    } else {
      return this._def.innerType._parse(e);
    }
  }
  unwrap() {
    return this._def.innerType;
  }
}
Q.create = (t, e) => new Q({
  innerType: t,
  typeName: v.ZodOptional,
  ...S(e)
});
class ve extends k {
  _parse(e) {
    if (this._getType(e) === m.null) {
      return U(null);
    } else {
      return this._def.innerType._parse(e);
    }
  }
  unwrap() {
    return this._def.innerType;
  }
}
ve.create = (t, e) => new ve({
  innerType: t,
  typeName: v.ZodNullable,
  ...S(e)
});
class Bt extends k {
  _parse(e) {
    const {
      ctx: n
    } = this._processInputParams(e);
    let r = n.data;
    if (n.parsedType === m.undefined) {
      r = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Bt.create = (t, e) => new Bt({
  innerType: t,
  typeName: v.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...S(e)
});
class Wt extends k {
  _parse(e) {
    const {
      ctx: n
    } = this._processInputParams(e);
    const r = {
      ...n,
      common: {
        ...n.common,
        issues: []
      }
    };
    const s = this._def.innerType._parse({
      data: r.data,
      path: r.path,
      parent: {
        ...r
      }
    });
    if (Ke(s)) {
      return s.then(i => ({
        status: "valid",
        value: i.status === "valid" ? i.value : this._def.catchValue({
          get error() {
            return new Y(r.common.issues);
          },
          input: r.data
        })
      }));
    } else {
      return {
        status: "valid",
        value: s.status === "valid" ? s.value : this._def.catchValue({
          get error() {
            return new Y(r.common.issues);
          },
          input: r.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Wt.create = (t, e) => new Wt({
  innerType: t,
  typeName: v.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...S(e)
});
class Sr extends k {
  _parse(e) {
    if (this._getType(e) !== m.nan) {
      const r = this._getOrReturnCtx(e);
      h(r, {
        code: p.invalid_type,
        expected: m.nan,
        received: r.parsedType
      });
      return $;
    }
    return {
      status: "valid",
      value: e.data
    };
  }
}
Sr.create = t => new Sr({
  typeName: v.ZodNaN,
  ...S(t)
});
class Nd extends k {
  _parse(e) {
    const {
      ctx: n
    } = this._processInputParams(e);
    const r = n.data;
    return this._def.type._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class un extends k {
  _parse(e) {
    const {
      status: n,
      ctx: r
    } = this._processInputParams(e);
    if (r.common.async) {
      return (async () => {
        const i = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (i.status === "aborted") {
          return $;
        } else if (i.status === "dirty") {
          n.dirty();
          return Re(i.value);
        } else {
          return this._def.out._parseAsync({
            data: i.value,
            path: r.path,
            parent: r
          });
        }
      })();
    }
    {
      const s = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r
      });
      if (s.status === "aborted") {
        return $;
      } else if (s.status === "dirty") {
        n.dirty();
        return {
          status: "dirty",
          value: s.value
        };
      } else {
        return this._def.out._parseSync({
          data: s.value,
          path: r.path,
          parent: r
        });
      }
    }
  }
  static create(e, n) {
    return new un({
      in: e,
      out: n,
      typeName: v.ZodPipeline
    });
  }
}
class Zt extends k {
  _parse(e) {
    const n = this._def.innerType._parse(e);
    const r = s => {
      if (be(s)) {
        s.value = Object.freeze(s.value);
      }
      return s;
    };
    if (Ke(n)) {
      return n.then(s => r(s));
    } else {
      return r(n);
    }
  }
  unwrap() {
    return this._def.innerType;
  }
}
Zt.create = (t, e) => new Zt({
  innerType: t,
  typeName: v.ZodReadonly,
  ...S(e)
});
var v;
(function (t) {
  t.ZodString = "ZodString";
  t.ZodNumber = "ZodNumber";
  t.ZodNaN = "ZodNaN";
  t.ZodBigInt = "ZodBigInt";
  t.ZodBoolean = "ZodBoolean";
  t.ZodDate = "ZodDate";
  t.ZodSymbol = "ZodSymbol";
  t.ZodUndefined = "ZodUndefined";
  t.ZodNull = "ZodNull";
  t.ZodAny = "ZodAny";
  t.ZodUnknown = "ZodUnknown";
  t.ZodNever = "ZodNever";
  t.ZodVoid = "ZodVoid";
  t.ZodArray = "ZodArray";
  t.ZodObject = "ZodObject";
  t.ZodUnion = "ZodUnion";
  t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion";
  t.ZodIntersection = "ZodIntersection";
  t.ZodTuple = "ZodTuple";
  t.ZodRecord = "ZodRecord";
  t.ZodMap = "ZodMap";
  t.ZodSet = "ZodSet";
  t.ZodFunction = "ZodFunction";
  t.ZodLazy = "ZodLazy";
  t.ZodLiteral = "ZodLiteral";
  t.ZodEnum = "ZodEnum";
  t.ZodEffects = "ZodEffects";
  t.ZodNativeEnum = "ZodNativeEnum";
  t.ZodOptional = "ZodOptional";
  t.ZodNullable = "ZodNullable";
  t.ZodDefault = "ZodDefault";
  t.ZodCatch = "ZodCatch";
  t.ZodPromise = "ZodPromise";
  t.ZodBranded = "ZodBranded";
  t.ZodPipeline = "ZodPipeline";
  t.ZodReadonly = "ZodReadonly";
})(v ||= {});
const vt = X.create;
const Od = Ft.create;
se.create;
Z.create;
const Dd = T.create;
const Md = Qe.create;
et.create;
ue.create;
const kr = Ut.create;
ye.create;
tt.create;
Q.create;
ve.create;
const Pd = Dd({
  isNestBuild: Od(),
  buildType: Md([kr("dev"), kr("prod")]),
  commitHash: vt(),
  commitTimestamp: vt(),
  appVersion: vt()
});
function Ld() {
  const t = {
    commitHash: "df1d8a339dfabcf359af7144fe142b59ff7d9a0f",
    isNestBuild: false,
    commitTimestamp: "2026-07-10T21:55:12.000Z",
    buildType: "prod",
    appVersion: "1.20186.1"
  };
  const e = Pd.safeParse(t);
  if (e.success) {
    return e.data;
  } else {
    return {
      buildType: "prod",
      commitHash: "UNKNOWN",
      commitTimestamp: "",
      isNestBuild: false,
      appVersion: "0.0.0"
    };
  }
}
var xr = {};
const Fd = Object.fromEntries(["arch", "platform", "type", "versions"].map(t => [t, true]));
const dn = Object.fromEntries(Object.entries(process).filter(([t]) => Fd[t]));
dn.version = Ld().appVersion;
dn.env = xr.CI ? {
  CI: xr.CI
} : {};
var jd = {};
const ws = ad(process.argv);
if (!ws && !jd.CI) {
  id();
}
d.contextBridge.exposeInMainWorld("process", dn);
d.contextBridge.exposeInMainWorld("desktopEssentialTelemetryDisabled", ws);
//# sourceMappingURL=mainWindow.js.map