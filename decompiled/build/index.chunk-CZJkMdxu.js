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
    var o = new t.Error().stack;
    if (o) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[o] = "5b5d54b9-5aa9-4fe9-9935-0c418dbeb8aa";
      t._sentryDebugIdIdentifier = "sentry-dbid-5b5d54b9-5aa9-4fe9-9935-0c418dbeb8aa";
    }
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
const I = require("node:os");
const k = require("./index.chunk-CvbeGVMj.js");
const L = require("electron");
const e = require("./index.chunk-c42vKsva.js");
function g(t) {
  return t.replace(/@(?=\S)/g, "@​");
}
const C = `Answer this one-shot request.

`;
function f(t) {
  return t.replace(/@\u200b/g, "@");
}
function T(t, o) {
  const n = g(t);
  if (!o || o.length === 0) {
    return C + n;
  }
  const a = o.map(s => typeof s == "string" ? s : JSON.stringify(s) ?? "undefined").map(s => g(`<data>${s}</data>`)).join(`
`);
  return `${C}${a}

${n}`;
}
async function M(t, o, n) {
  var y;
  var E;
  var S;
  var h;
  if ((y = n.signal) != null && y.aborted) {
    return {
      text: "Inference cancelled.",
      isError: true
    };
  }
  const a = await e.claudeCodeManager.getBinaryPathIfReady();
  if (!a) {
    e.logger.warn("[OneShotSampler] CLI binary not ready");
    return {
      text: "Claude is still starting up. Try again in a moment.",
      isError: true
    };
  }
  const s = e.getCoworkCliOauthConfig();
  const i = await e.getApiTokenResult(s);
  if (!i.ok) {
    e.logger.warn("[OneShotSampler] OAuth failed (%s): %s", i.reason.type, i.reason.detail);
    return {
      text: "Not signed in.",
      isError: true
    };
  }
  const {
    cmd: v,
    args: O
  } = e.getUntrustedLaunchOptions({
    cmd: a,
    args: []
  });
  const _ = T(t, o);
  const u = e.getDeploymentMode();
  const b = u.discoveredRendererConfig();
  const x = b ? e.selectableModels(await b) : [];
  const p = u.resolveDefaultSessionModel();
  const A = e.getDefaultSubagentModel() ?? e.pickTitleGenModel(x) ?? (p.ok ? p.model : undefined) ?? (u.getProvider() === null ? e.DEFAULT_SUBAGENT_MODEL : undefined);
  const l = new AbortController();
  const c = () => l.abort();
  if ((E = n.signal) != null) {
    E.addEventListener("abort", c, {
      once: true
    });
  }
  if ((S = n.signal) != null && S.aborted) {
    l.abort();
    n.signal.removeEventListener("abort", c);
    return {
      text: "Inference cancelled.",
      isError: true
    };
  }
  const D = k.query({
    prompt: _,
    options: {
      abortController: l,
      pathToClaudeCodeExecutable: v,
      executableArgs: O,
      cwd: I.tmpdir(),
      model: A,
      maxTurns: 1,
      systemPrompt: n.systemPrompt,
      allowedTools: [],
      settingSources: [],
      mcpServers: {},
      strictMcpConfig: true,
      persistSession: false,
      canUseTool: async () => ({
        behavior: "deny",
        message: "one-shot sampling has no tools"
      }),
      env: {
        ...e.buildIsolatedSessionEnvironment({
          oauthToken: i.token,
          apiHost: s.apiHost,
          disableCron: true,
          localAgent: true
        }),
        ...e.getWin32EssentialEnv(),
        CLAUDE_CODE_ENTRYPOINT: "local-agent",
        CLAUDE_CODE_TAGS: n.tags,
        NODE_USE_SYSTEM_CA: "1",
        ...(await e.getOtelEnvVars(undefined, {
          target: "vm",
          sandboxed: false,
          platformLacksGrpcCaBridge: true,
          appVersion: L.app.getVersion()
        }))
      },
      stderr: r => {
        e.logger.warn(`[OneShotSampler] stderr: ${r}`);
      }
    }
  });
  let d = "";
  let m = false;
  try {
    for await (const r of D) {
      if (r.type === "assistant") {
        for (const w of r.message.content) {
          if (w.type === "text") {
            d += w.text;
          }
        }
      }
      if (r.type === "result") {
        if (r.subtype !== "success") {
          e.logger.warn("[OneShotSampler] Result %s: %o", r.subtype, r);
          return {
            text: f(d) || "Inference did not complete.",
            isError: true
          };
        }
        m = true;
        break;
      }
    }
  } catch (r) {
    if (l.signal.aborted) {
      e.logger.info("[OneShotSampler] query() aborted by caller");
      return {
        text: "Inference cancelled.",
        isError: true
      };
    } else {
      e.logger.error("[OneShotSampler] query() iteration threw", r);
      return {
        text: r instanceof Error ? r.message : "Inference failed.",
        isError: true
      };
    }
  } finally {
    if ((h = n.signal) != null) {
      h.removeEventListener("abort", c);
    }
  }
  if (m) {
    return {
      text: f(d)
    };
  } else {
    e.logger.warn("[OneShotSampler] query() ended without a result message");
    return {
      text: f(d) || "Inference did not complete.",
      isError: true
    };
  }
}
const q = {
  buildUserTurn: T,
  neutralizeHostCliExpansion: g
};
exports._test = q;
exports.sampleOneShot = M;
//# sourceMappingURL=index.chunk-CZJkMdxu.js.map