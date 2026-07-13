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
    var a = new e.Error().stack;
    if (a) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[a] = "a7fa7dca-1524-4565-9595-23b8e1afe0f0";
      e._sentryDebugIdIdentifier = "sentry-dbid-a7fa7dca-1524-4565-9595-23b8e1afe0f0";
    }
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
const l = require("electron");
const t = require("./index.chunk-c42vKsva.js");
async function r(e, a, o, n) {
  const s = n ? t.getIntl().formatMessage({
    defaultMessage: "from {orgName}",
    id: "NNEmTvq77p",
    description: "Organization name in update dialog"
  }, {
    orgName: n
  }) : t.getIntl().formatMessage({
    defaultMessage: "from your organization",
    id: "MNF5cWO3lm",
    description: "Generic organization text in update dialog"
  });
  const {
    response: d
  } = await l.dialog.showMessageBox({
    type: "question",
    title: t.getIntl().formatMessage({
      defaultMessage: "Organization Extension Update Available",
      id: "ejZ+goAcuh",
      description: "Title for org-scoped extension update dialog"
    }),
    message: t.getIntl().formatMessage({
      defaultMessage: "The extension {extensionName} {organizationText} has an update available.",
      id: "HmOsjnFwIk",
      description: "Message for org-scoped extension update dialog"
    }, {
      extensionName: e,
      organizationText: s
    }),
    detail: t.getIntl().formatMessage({
      defaultMessage: "Version {currentVersion} → {newVersion} Would you like to install this update?",
      id: "s7EJA5V2XI",
      description: "Detail text for org-scoped extension update dialog"
    }, {
      currentVersion: a,
      newVersion: o
    }),
    buttons: [t.getIntl().formatMessage({
      defaultMessage: "Install Update",
      id: "pz9fNjr/Ms",
      description: "Install update button"
    }), t.getIntl().formatMessage({
      defaultMessage: "Skip This Update",
      id: "VT7DsHRYaU",
      description: "Skip update button"
    })],
    defaultId: 1,
    cancelId: 1,
    noLink: true
  });
  const i = d === 0;
  t.logger.info(`User ${i ? "accepted" : "declined"} update for org-scoped extension '${e}' (${a} → ${o})`);
  return i;
}
exports.showOrgScopedDxtUpdateDialog = r;
//# sourceMappingURL=index.chunk-BIDR9cU0.js.map