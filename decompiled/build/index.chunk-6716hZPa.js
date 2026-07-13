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
      e._sentryDebugIds[o] = "b67a293e-c755-487c-9f6a-ed41cfab73a6";
      e._sentryDebugIdIdentifier = "sentry-dbid-b67a293e-c755-487c-9f6a-ed41cfab73a6";
    }
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
const t = require("./index.chunk-c42vKsva.js");
function d(e) {
  return `code-prompt-${e}`;
}
async function u(e) {
  const o = e.split(":").pop() ?? e;
  if (e.startsWith("chat:")) {
    return `/chat/${o}`;
  }
  try {
    const {
      localAgentModeSessionManager: n
    } = await Promise.resolve().then(() => require("./index.chunk-DcrvRgQ0.js")).then(i => i.LocalAgentModeSessionManager);
    for (const i of [e, o]) {
      if (n.getSession(i) !== null) {
        return `/cowork/${i}`;
      }
    }
  } catch {}
  try {
    const {
      getClaudeCodeSessionManager: n
    } = await Promise.resolve().then(() => require("./index.chunk-c42vKsva.js")).then(a => a.localSessionManagerAccessor);
    const i = await n();
    for (const a of [e, o]) {
      if ((await i.getSession(a)) != null) {
        return t.desktopCodeSessionRoute(a);
      }
    }
  } catch {}
  return `/cowork/${e}`;
}
async function l(e) {
  var a;
  if (!t.mainWindow || t.mainWindow.isDestroyed() || !t.mainWindow.isFocused()) {
    return false;
  }
  const o = e.split(":").pop() ?? e;
  try {
    const {
      localAgentModeSessionManager: s
    } = await Promise.resolve().then(() => require("./index.chunk-DcrvRgQ0.js")).then(c => c.LocalAgentModeSessionManager);
    const r = s.getFocusedSession();
    if (r != null && (r === e || r === o)) {
      return true;
    }
  } catch {}
  const n = t.getFocusedSession();
  if (n != null && (n === e || n === o)) {
    return true;
  }
  const i = (a = t.mainView) == null ? undefined : a.webContents;
  if (o.length > 0 && i && !i.isDestroyed()) {
    return i.getURL().includes(o);
  } else {
    return false;
  }
}
async function g(e, o, n) {
  try {
    if (!n() || (await l(o)) || !n()) {
      return;
    }
    const i = t.getIntl();
    t.notificationService.showNotification(i.formatMessage({
      defaultMessage: "Claude needs your input to continue",
      id: "2kVHmyDyr/",
      description: "OS notification title when an agent task is waiting for the user to type something into the app"
    }), i.formatMessage({
      defaultMessage: "Return to Claude to keep your task moving",
      id: "a0S8gcqLbU",
      description: "OS notification body asking the user to switch back to the Claude app"
    }), d(e), () => {
      if (!!t.mainWindow && !t.mainWindow.isDestroyed()) {
        if (!t.mainWindow.isVisible()) {
          t.mainWindow.show();
        }
        t.mainWindow.focus();
        u(o).then(a => {
          var r;
          var c;
          const s = (r = t.mainView) == null ? undefined : r.webContents;
          if (s && !s.isDestroyed()) {
            if ((c = t.Navigation.getDispatcher(s)) != null) {
              c.dispatchNavigate(a);
            }
          }
        }).catch(() => {});
      }
    });
    if (!n()) {
      f(e);
    }
  } catch (i) {
    t.logger.debug(`${t.LOG_PREFIX} code prompt notification failed`, {
      error: i
    });
  }
}
function f(e) {
  t.notificationService.closeNotification(d(e)).catch(() => {});
}
exports.closeCodePromptNotification = f;
exports.showCodePromptNotification = g;
//# sourceMappingURL=index.chunk-6716hZPa.js.map