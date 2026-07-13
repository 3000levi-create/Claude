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
      e._sentryDebugIds[t] = "12b5bfde-030e-4af9-8bbd-e226cbed6c6b";
      e._sentryDebugIdIdentifier = "sentry-dbid-12b5bfde-030e-4af9-8bbd-e226cbed6c6b";
    }
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
const h = require("./index.chunk-c42vKsva.js");
const g = "terminal";
const r = "";
const p = "";
const S = new RegExp(r + "\\[[0-9;?]*[A-Za-z]", "g");
const E = new RegExp(r + "\\][^" + p + r + "]*(?:" + p + "|" + r + "\\\\)", "g");
const I = "Terminal is not open. Ask the user to open the terminal panel first.";
function N(e) {
  return `Terminal tab with id "${e}" is not open. Omit tab_id to read the primary terminal, or ask the user which tab to read.`;
}
function T() {
  return {
    serverName: g,
    tools: [{
      name: "read_terminal",
      description: "Read the contents of the user's integrated terminal panel. Returns the last ~200 lines with ANSI codes stripped. Use when the user references test output, errors, or 'this' in a way that implies terminal content. If the user attached a terminal snippet whose sentinel reads `<!-- attach: … | tab:N -->`, pass that N as tab_id to read the same tab. If a test watcher or dev server is running, set wait_for_output_ms to block until fresh output arrives — lets you wait for the watcher to react after you edit a file, instead of reading stale output.",
      inputSchema: {
        type: "object",
        properties: {
          lines: {
            type: "number",
            description: "How many trailing lines to return. Default 200, max 1000."
          },
          tab_id: {
            type: "string",
            description: "Which terminal tab to read. Omit (or pass \"0\") for the primary terminal. When the user attaches terminal output as context, the attach sentinel carries the tab id as `| tab:N` — pass that N here."
          },
          wait_for_output_ms: {
            type: "number",
            description: "If set, block up to this many ms for NEW output to arrive before reading. Use after editing a file when a watcher is running — the tool waits for the watcher to react, then returns the fresh result. If no new output arrives, returns the current buffer with a note."
          }
        }
      }
    }],
    handleToolCall: async (e, t, a) => {
      if (e !== "read_terminal") {
        return {
          content: [{
            type: "text",
            text: `Unknown tool: ${e}`
          }],
          isError: true
        };
      }
      const [{
        claudeCodeSessionManager: s
      }, {
        shellPtyKeyFor: b
      }] = await Promise.all([Promise.resolve().then(() => require("./index.chunk-B3Z2xpgG.js")), Promise.resolve().then(() => require("./index.chunk-Dtoqdu4o.js"))]);
      const l = typeof t.tab_id == "string" ? t.tab_id : undefined;
      const i = b(a.sessionId, l);
      const d = i === a.sessionId ? I : N(l ?? "");
      const o = typeof t.wait_for_output_ms == "number" ? t.wait_for_output_ms : undefined;
      let u = "";
      if (o !== undefined) {
        const n = await s.shellPty.waitForTerminalOutput(i, o);
        if ("noShell" in n) {
          return {
            content: [{
              type: "text",
              text: d
            }]
          };
        }
        if ("timedOut" in n) {
          u = `${"[waited " + o}ms — no new output; the watcher may not have reacted yet, or nothing is watching]

`;
        }
      }
      const f = s.shellPty.getShellPtyBuffer(i);
      if (f === null) {
        return {
          content: [{
            type: "text",
            text: d
          }]
        };
      }
      const m = f.replace(S, "").replace(E, "").replace(/\r\n/g, `
`).split(`
`).map(n => {
        const c = n.lastIndexOf("\r");
        if (c >= 0) {
          return n.slice(c + 1);
        } else {
          return n;
        }
      });
      const y = typeof t.lines == "number" && Number.isFinite(t.lines) ? t.lines : 200;
      const w = Math.max(1, Math.min(y, 1000));
      const _ = m.slice(-w).join(`
`);
      return {
        content: [{
          type: "text",
          text: u + _
        }]
      };
    },
    isEnabled: e => e.sessionType === "ccd" && !e.isSSH && h.isNodePtyBundled && h.isFeatureEnabled("397125142")
  };
}
exports.getTerminalServerDef = T;
//# sourceMappingURL=index.chunk-BoaAXvf0.js.map