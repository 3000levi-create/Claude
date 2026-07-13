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
    var n = new e.Error().stack;
    if (n) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[n] = "34e3cd4b-edaf-4dec-b331-177e1f2a4c27";
      e._sentryDebugIdIdentifier = "sentry-dbid-34e3cd4b-edaf-4dec-b331-177e1f2a4c27";
    }
  })();
} catch {}
const r = require("electron");
require("electron/renderer");
var o = (e => {
  e.Back = "back";
  e.Forward = "forward";
  return e;
})(o || {});
const t = {
  callMcpTool(e, n, a) {
    return r.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.coworkArtifact_$_CoworkArtifactBridge_$_callMcpTool", e, n, a);
  },
  askClaude(e, n) {
    return r.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.coworkArtifact_$_CoworkArtifactBridge_$_askClaude", e, n);
  },
  runScheduledTask(e, n) {
    return r.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.coworkArtifact_$_CoworkArtifactBridge_$_runScheduledTask", e, n);
  },
  navigateHost(e) {
    return r.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.coworkArtifact_$_CoworkArtifactBridge_$_navigateHost", e);
  },
  openExternalUrl(e) {
    return r.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.coworkArtifact_$_CoworkArtifactBridge_$_openExternalUrl", e);
  }
};
r.contextBridge.exposeInMainWorld("cowork", {
  callMcpTool: (e, n) => {
    var a;
    if ((a = t.callMcpTool) == null) {
      return undefined;
    } else {
      return a.call(t, e, n, {
        hasUserActivation: navigator.userActivation.isActive
      });
    }
  },
  askClaude: t.askClaude,
  runScheduledTask: e => {
    var n;
    if ((n = t.runScheduledTask) == null) {
      return undefined;
    } else {
      return n.call(t, e, {
        hasUserActivation: navigator.userActivation.isActive
      });
    }
  }
});
function c(e) {
  var a;
  var d;
  var i;
  if (!e.isTrusted) {
    return;
  }
  const n = (d = (a = e.target) == null ? undefined : a.closest) == null ? undefined : d.call(a, "a[href]");
  if (n instanceof HTMLAnchorElement) {
    if (!!n.protocol && n.protocol !== "cowork-artifact:") {
      e.preventDefault();
      if ((i = t.openExternalUrl) != null) {
        i.call(t, n.href);
      }
    }
  }
}
window.addEventListener("click", e => {
  if (e.button === 0) {
    c(e);
  }
}, true);
window.addEventListener("auxclick", e => {
  if (e.button === 1) {
    c(e);
  }
}, true);
if (process.platform === "darwin") {
  window.addEventListener("mouseup", e => {
    var n;
    var a;
    if (e.isTrusted) {
      if (e.button === 3) {
        e.preventDefault();
        if ((n = t.navigateHost) != null) {
          n.call(t, o.Back);
        }
      } else if (e.button === 4) {
        e.preventDefault();
        if ((a = t.navigateHost) != null) {
          a.call(t, o.Forward);
        }
      }
    }
  }, true);
} //# sourceMappingURL=coworkArtifact.js.map