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
    var t = new e.Error().stack;
    if (t) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[t] = "20f8940e-5dcc-4d83-ab54-ed2501ba0337";
      e._sentryDebugIdIdentifier = "sentry-dbid-20f8940e-5dcc-4d83-ab54-ed2501ba0337";
    }
  })();
} catch {}
const l = require("node:path");
const i = require("./index.chunk-c42vKsva.js");
const S = ".claude-docs";
const g = ".documents.json";
const p = 262144;
const T = ".baseline";
const C = ".export";
const _ = {
  docx: "docx",
  cd: "clark",
  clark: "clark",
  md: "markdown",
  txt: "markdown"
};
const I = {
  docx: {
    convert: true,
    baselineExt: "docx",
    defaultExportFormat: "docx"
  },
  clark: {
    convert: false,
    defaultExportFormat: "claude"
  },
  markdown: {
    convert: false,
    defaultExportFormat: "markdown"
  }
};
const x = /^[a-z0-9]{1,8}$/;
function h(e) {
  const t = e.lastIndexOf(".");
  if (t <= 0) {
    return;
  }
  const r = e.slice(t + 1).toLowerCase();
  if (x.test(r)) {
    return r;
  } else {
    return undefined;
  }
}
const O = Object.keys(_);
function N(e) {
  const t = e.lastIndexOf(".");
  if (t <= 0) {
    return null;
  }
  const r = e.slice(t + 1).toLowerCase();
  return _[r] ?? null;
}
const A = new RegExp(`\\.(${O.join("|")})$`, "i");
const W = new RegExp(`\\.(${[...O, "pdf"].join("|")})$`, "i");
const w = 160;
const F = /^(?!\.)[^\\/:<>"|?*\u0000-\u001F\u007F\u200E\u200F\u202A-\u202E\u2066-\u2069]+\.(clark|cd)$/i;
const m = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])$/i;
const R = /^(con|prn|aux|nul|com[0-9]|lpt[0-9]) *(\.|$)/i;
function y(e) {
  if (e.length > w || !F.test(e)) {
    return false;
  }
  const t = e.replace(/\.(clark|cd)$/i, "");
  return !R.test(t) && !/[ .]$/.test(t);
}
const d = 255;
const K = /[\x00-\x1F\x7F\\/:<>"|?*`\u200E\u200F\u202A-\u202E\u2066-\u2069]/g;
const u = new TextEncoder();
function M(e) {
  let t = e.replace(K, "");
  t = t.replace(/^[\s.]+|[\s.]+$/g, "");
  if (u.encode(t).length > d) {
    let n = "";
    let s = 0;
    for (const o of t) {
      const c = u.encode(o).length;
      if (s + c > d) {
        break;
      }
      n += o;
      s += c;
    }
    t = n;
  }
  let r;
  do {
    r = t;
    t = t.replace(W, "");
    t = t.replace(/^[\s.]+|[\s.]+$/g, "");
  } while (t !== r);
  if (t === "" || m.test(t)) {
    return "Document";
  } else {
    return t;
  }
}
function k(e, t) {
  const r = e.length >= 2 && e[0] === 255 && e[1] === 254 ? "utf-16le" : e.length >= 2 && e[0] === 254 && e[1] === 255 ? "utf-16be" : null;
  if (r !== null) {
    const s = e.subarray(2);
    if (s.length % 2 !== 0) {
      return null;
    }
    let o;
    try {
      o = new TextDecoder(r, {
        fatal: true
      }).decode(s);
    } catch {
      return null;
    }
    if (o.includes("\0")) {
      return null;
    } else {
      return u.encode(o);
    }
  }
  const n = e.length >= 3 && e[0] === 239 && e[1] === 187 && e[2] === 191 ? e.subarray(3) : e;
  if (n.includes(0)) {
    return null;
  }
  if (t !== undefined) {
    if (t(n)) {
      return n;
    } else {
      return null;
    }
  }
  try {
    new TextDecoder("utf-8", {
      fatal: true
    }).decode(n);
  } catch {
    return null;
  }
  return n;
}
const f = ["https_proxy", "HTTPS_PROXY", "http_proxy", "HTTP_PROXY"];
function D(e) {
  try {
    const n = new URL(e);
    if (n.host) {
      n.username = "";
      n.password = "";
      n.search = "";
      n.hash = "";
      return n.toString();
    }
  } catch {}
  const t = e.lastIndexOf("@");
  if (t === -1) {
    return e;
  } else {
    return (e.startsWith("//") ? "//" : "") + e.slice(t + 1);
  }
}
const P = ["OTEL_METRICS_EXPORTER", "OTEL_LOGS_EXPORTER", "OTEL_TRACES_EXPORTER"];
function b(e) {
  return P.some(t => {
    const r = e[t];
    return typeof r == "string" && r.includes("console");
  });
}
async function X(e) {
  var n;
  const t = [i.getCCDSettingsFile(), l.join(e, ".claude", "settings.json"), l.join(e, ".claude", "settings.local.json"), await i.getManagedSettingsPath()];
  const r = await Promise.all(t.map(i.readSettingsFile$1));
  for (let s = 0; s < r.length; s++) {
    const o = (n = r[s]) == null ? undefined : n.env;
    if (o && b(o)) {
      return t[s];
    }
  }
  return null;
}
async function L(e) {
  var s;
  const t = [{
    tier: "user",
    path: i.getCCDSettingsFile()
  }, {
    tier: "project",
    path: l.join(e, ".claude", "settings.json")
  }, {
    tier: "local",
    path: l.join(e, ".claude", "settings.local.json")
  }, {
    tier: "managed",
    path: await i.getManagedSettingsPath()
  }];
  const r = await Promise.all(t.map(o => i.readSettingsFile$1(o.path)));
  const n = new Map();
  for (let o = 0; o < t.length; o++) {
    const c = (s = r[o]) == null ? undefined : s.env;
    if (c) {
      for (const E of f) {
        const a = c[E];
        if (typeof a == "string" && a.trim() !== "") {
          n.set(E, {
            value: a.trim(),
            tier: t[o].tier,
            path: t[o].path
          });
        }
      }
    }
  }
  for (const o of f) {
    const c = n.get(o);
    if (c) {
      return {
        path: c.path,
        tier: c.tier,
        key: o,
        safeUrl: D(c.value)
      };
    }
  }
  return null;
}
exports.COWORK_BASELINE_DIRNAME = T;
exports.COWORK_EXPORT_DIRNAME = C;
exports.COWORK_INGEST_EXT_RE = A;
exports.COWORK_INGEST_FORMAT_SPEC = I;
exports.COWORK_MANIFEST_BASENAME = g;
exports.COWORK_MANIFEST_MAX_BYTES = p;
exports.COWORK_SCRATCH_DIRNAME = S;
exports.COWORK_WIN_RESERVED_DEVICE_RE = R;
exports.coworkIngestFormatFor = N;
exports.coworkSourceExtFor = h;
exports.findOtelConsoleExporterSource = X;
exports.findSettingsProxySource = L;
exports.isSafeCoworkWorkingFileName = y;
exports.normalizeCoworkVerbatimTextBytes = k;
exports.sanitizeCoworkDisplayName = M;
//# sourceMappingURL=index.chunk-ZXPKeP3a.js.map