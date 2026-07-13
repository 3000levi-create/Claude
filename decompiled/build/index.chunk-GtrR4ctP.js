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
      e._sentryDebugIds[n] = "61a70a4b-24e7-4991-803b-dc326c979396";
      e._sentryDebugIdIdentifier = "sentry-dbid-61a70a4b-24e7-4991-803b-dc326c979396";
    }
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
const a = require("./index.chunk-c42vKsva.js");
const d = "[PluginsFetcher]";
const w = 90000;
async function b(e) {
  const n = [];
  let r = 0;
  const t = 100;
  while (true) {
    const i = `${a.claudeAiUrl()}/api/organizations/${e}/plugins/list-plugins?installation_preference=auto_install&installation_preference=required&compact=true&limit=${t}&offset=${r}`;
    const o = await a.fetchWithTimeout(i, {
      timeout: 30000
    });
    if (!o.ok) {
      throw new Error(`Failed to fetch auto-installed plugins (HTTP ${o.status})`);
    }
    const l = await o.json();
    const s = l.plugins.map(a.pluginMetadataFromApi);
    n.push(...s);
    if (!l.has_more || s.length === 0) {
      break;
    }
    r += t;
  }
  a.logger.info("%s fetchAutoInstalledPlugins: %d plugins", d, n.length);
  return n;
}
async function _(e) {
  const n = [];
  let r = 0;
  const t = 100;
  while (true) {
    const i = `${a.claudeAiUrl()}/api/organizations/${e}/plugins/list-plugins?enabled_only=true&compact=true&limit=${t}&offset=${r}`;
    const o = await a.fetchWithTimeout(i, {
      timeout: 30000
    });
    if (!o.ok) {
      throw new Error(`Failed to fetch account-enabled plugins (HTTP ${o.status})`);
    }
    const l = await o.json();
    const s = l.plugins.map(a.pluginMetadataFromApi);
    n.push(...s);
    if (!l.has_more || s.length === 0) {
      break;
    }
    r += t;
  }
  a.logger.info("%s fetchAccountEnabledPlugins: %d plugins", d, n.length);
  return n;
}
async function y(e) {
  const n = `${a.claudeAiUrl()}/api/organizations/${e}/plugins/enabled-state`;
  const r = await a.fetchWithTimeout(n, {
    timeout: 10000
  });
  if (!r.ok) {
    throw new Error(`Failed to fetch plugin enabled state (HTTP ${r.status})`);
  }
  const i = ((await r.json()).preferences ?? []).map(o => ({
    pluginName: o.plugin_name,
    marketplaceId: o.marketplace_id ?? null,
    marketplaceName: o.marketplace_name ?? null,
    enabled: o.enabled
  }));
  a.logger.info("%s fetchPluginEnabledState: %d overrides", d, i.length);
  return i;
}
async function k(e) {
  const n = (e == null ? undefined : e.orgId) ?? (await a.getLastActiveOrg());
  if (!n) {
    return {
      plugins: [],
      hasMore: false
    };
  }
  const r = (e == null ? undefined : e.limit) ?? 100;
  const t = (e == null ? undefined : e.offset) ?? 0;
  const i = e != null && e.compact ? "&compact=true" : "";
  const o = `${a.claudeAiUrl()}/api/organizations/${n}/plugins/list-plugins?installation_preference=auto_install&installation_preference=required&installation_preference=available${i}&limit=${r}&offset=${t}`;
  const l = await a.fetchWithTimeout(o, {
    timeout: (e == null ? undefined : e.timeoutMs) ?? 30000
  });
  if (!l.ok) {
    throw new Error(`Failed to fetch browsable plugins (HTTP ${l.status})`);
  }
  const s = await l.json();
  const c = s.plugins.map(a.pluginMetadataFromApi);
  a.logger.info("%s fetchBrowsableRemotePlugins: %d plugins (offset=%d, hasMore=%s)", d, c.length, t, s.has_more ?? false);
  return {
    plugins: c,
    hasMore: s.has_more ?? false
  };
}
async function P(e) {
  const n = await a.getLastActiveOrg();
  if (!n) {
    return [];
  }
  let r;
  try {
    r = await a.listAccountMarketplaces();
  } catch (l) {
    a.logger.warn("%s fetchAccountScopedRemotePlugins: listAccountMarketplaces failed, returning []: %s", d, String(l));
    return [];
  }
  if (r.length === 0) {
    return [];
  }
  const t = [];
  const i = 100;
  const o = e != null && e.compact ? "&compact=true" : "";
  for (const l of r) {
    try {
      let s = 0;
      while (true) {
        const c = `${a.claudeAiUrl()}/api/organizations/${n}/marketplaces/${encodeURIComponent(l.id)}/plugins/account-list-plugins?installation_preference=auto_install&installation_preference=required&installation_preference=available${o}&limit=${i}&offset=${s}`;
        const u = await a.fetchWithTimeout(c, {
          timeout: 30000
        });
        if (!u.ok) {
          a.logger.warn("%s fetchAccountScopedRemotePlugins: marketplace %s HTTP %d, skipping", d, l.id, u.status);
          break;
        }
        const f = await u.json();
        const m = f.plugins.map(a.pluginMetadataFromApi);
        t.push(...m);
        if (!f.has_more || m.length === 0) {
          break;
        }
        s += i;
      }
    } catch (s) {
      a.logger.warn("%s fetchAccountScopedRemotePlugins: marketplace %s fetch failed, skipping: %s", d, l.id, String(s));
    }
  }
  a.logger.info("%s fetchAccountScopedRemotePlugins: %d plugins from %d marketplace(s)", d, t.length, r.length);
  return t;
}
const $ = /^[a-z_]{1,64}$/;
async function h(e, n, r) {
  var o;
  var l;
  if (!e.ok) {
    if (e.status === 404) {
      let s;
      try {
        const u = await e.json();
        const f = (l = (o = u == null ? undefined : u.error) == null ? undefined : o.details) == null ? undefined : l.error_code;
        if (typeof f == "string" && $.test(f)) {
          s = f;
        }
      } catch {}
      const c = s === "marketplace_not_found" ? "marketplace" : s === "plugin_not_found" ? "plugin" : "unknown";
      a.logger.info("%s %s: not found (%s)", d, n, c);
      return {
        notFound: c,
        httpStatus: 404,
        backendErrorCode: s
      };
    }
    throw new Error(`${n} failed (HTTP ${e.status})`);
  }
  const t = await e.json();
  const i = t.installation_preference;
  if ((r == null || !r.forceInstall) && i !== "auto_install" && i !== "required" && i !== "available") {
    a.logger.info("%s %s: installation_preference=%s, skipping", d, n, i ?? "undefined");
    return {
      notFound: "filtered",
      httpStatus: 200
    };
  } else {
    return {
      id: t.id,
      name: t.name,
      displayName: t.display_name ?? undefined,
      description: t.description,
      updatedAt: t.updated_at,
      enabled: t.enabled,
      partitionBy: t.partition_by === "marketplace" ? null : t.partition_by,
      skillCount: 0,
      marketplaceId: t.marketplace_id ?? undefined,
      marketplaceName: t.marketplace_name,
      installationPreference: t.installation_preference,
      author: a.sanitizePluginAuthor(t.author ?? undefined)
    };
  }
}
async function R(e, n) {
  const r = await a.getLastActiveOrg();
  if (!r) {
    return {
      notFound: "unknown"
    };
  }
  const t = `${a.claudeAiUrl()}/api/organizations/${r}/plugins/${encodeURIComponent(e)}`;
  const i = await a.fetchWithTimeout(t, {
    timeout: 30000
  });
  return h(i, "fetchRemotePluginById", n);
}
async function p(e, n, r) {
  const t = (r == null ? undefined : r.orgId) ?? (await a.getLastActiveOrg());
  if (!t) {
    return {
      notFound: "unknown"
    };
  }
  const i = new URLSearchParams({
    marketplace_name: n
  });
  const o = `${a.claudeAiUrl()}/api/organizations/${t}/plugins/by-name/${encodeURIComponent(e)}?${i.toString()}`;
  const l = await a.fetchWithTimeout(o, {
    timeout: (r == null ? undefined : r.timeoutMs) ?? 30000
  });
  return h(l, "fetchRemotePluginByName", r);
}
async function g(e, n, r, t) {
  const i = `${a.claudeAiUrl()}/api/organizations/${e}/plugins/${encodeURIComponent(n)}/enabled`;
  const o = await a.fetchWithTimeout(i, {
    method: "PUT",
    body: JSON.stringify({
      enabled: r
    }),
    timeout: (t == null ? undefined : t.timeoutMs) ?? 30000
  });
  if (!o.ok) {
    throw Object.assign(new Error(`Failed to set plugin enabled state for ${n} (HTTP ${o.status})`), {
      status: o.status
    });
  }
  return await o.json();
}
async function A(e, n, r, t) {
  const i = (o, l) => void a.logEvent("remote_plugin_enabled_put_outcome", {
    caller: t.caller,
    outcome: o,
    enabled: r,
    ...l
  });
  try {
    const o = await g(e, n.id, r, {
      timeoutMs: t.timeoutMs
    });
    i("ok");
    return {
      outcome: "ok",
      response: o,
      effectiveId: n.id
    };
  } catch (o) {
    const l = o.status;
    const s = {
      outcome: "error",
      error: o,
      status: l,
      effectiveId: n.id
    };
    if (l !== 404) {
      i("error", {
        status: l,
        reason: "non_404"
      });
      return s;
    }
    if (!n.marketplaceName) {
      i("error", {
        status: l,
        reason: "no_marketplace_name"
      });
      return s;
    }
    let c;
    try {
      c = await p(n.name, n.marketplaceName, {
        orgId: e,
        forceInstall: true,
        timeoutMs: t.timeoutMs
      });
    } catch (u) {
      a.logger.warn("%s setRemotePluginEnabledResolved: by-name re-resolve failed:", d, u);
      i("error", {
        status: 404,
        reason: "discriminate_failed"
      });
      return s;
    }
    if (!("id" in c)) {
      if (c.notFound === "plugin") {
        i("unresolvable");
        return {
          outcome: "unresolvable"
        };
      } else {
        i("error", {
          status: 404,
          reason: `miss_${c.notFound}`
        });
        return s;
      }
    }
    if (n.marketplaceId === undefined) {
      i("error", {
        status: 404,
        reason: "no_marketplace_id"
      });
      return s;
    }
    if (c.marketplaceId !== n.marketplaceId) {
      a.logger.warn("%s setRemotePluginEnabledResolved: by-name re-resolve crossed marketplace scope; not retrying", d, {
        expected: n.marketplaceId,
        got: c.marketplaceId
      });
      i("error", {
        status: 404,
        reason: "scope_mismatch"
      });
      return s;
    }
    if (c.id === n.id) {
      i("error", {
        status: 404,
        reason: "same_id"
      });
      return s;
    }
    try {
      const u = await g(e, c.id, r, {
        timeoutMs: t.timeoutMs
      });
      i("retried");
      return {
        outcome: "retried",
        response: u,
        effectiveId: c.id
      };
    } catch (u) {
      const f = u.status;
      i("error", {
        status: f,
        reason: "retry_failed"
      });
      return {
        outcome: "error",
        error: u,
        status: f,
        effectiveId: c.id
      };
    }
  }
}
async function E(e, n, r = 3) {
  const t = await a.getLastActiveOrg();
  if (!t) {
    throw new Error("Cannot fetch plugin content: no active organization");
  }
  const i = `${a.claudeAiUrl()}/api/organizations/${t}/plugins/${encodeURIComponent(e)}/download`;
  return a.fetchAndExtractWithRetry(i, n, e, {
    maxRetries: r,
    timeout: w,
    logPrefix: d
  });
}
exports.fetchAccountEnabledPlugins = _;
exports.fetchAccountScopedRemotePlugins = P;
exports.fetchAndExtractPluginWithRetry = E;
exports.fetchAutoInstalledPlugins = b;
exports.fetchBrowsableRemotePlugins = k;
exports.fetchPluginEnabledState = y;
exports.fetchRemotePluginById = R;
exports.fetchRemotePluginByName = p;
exports.setRemotePluginEnabled = g;
exports.setRemotePluginEnabledResolved = A;
//# sourceMappingURL=index.chunk-GtrR4ctP.js.map