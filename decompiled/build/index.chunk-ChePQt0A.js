"use strict";

(function () {
  try {
    var r = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    r.SENTRY_RELEASE = {
      id: "df1d8a339dfabcf359af7144fe142b59ff7d9a0f"
    };
  } catch {}
})();
try {
  (function () {
    var r = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    var e = new r.Error().stack;
    if (e) {
      r._sentryDebugIds = r._sentryDebugIds || {};
      r._sentryDebugIds[e] = "aa9cda2c-47a6-4f26-a350-1f6cea38cc9d";
      r._sentryDebugIdIdentifier = "sentry-dbid-aa9cda2c-47a6-4f26-a350-1f6cea38cc9d";
    }
  })();
} catch {}
const y = require("node:fs/promises");
const d = require("node:path");
const $ = require("electron");
const t = require("./index.chunk-c42vKsva.js");
const q = require("./index.chunk-CSQCh8Uk.js");
const H = `First, decide whether the user wants to **create a new** scheduled task or **change an existing** one.

## Updating an existing task

If the user wants to reschedule, edit the prompt, or pause/resume a task that already exists, call the \`update_scheduled_task\` tool with its \`taskId\` — do **not** call \`create_scheduled_task\`. Use \`list_scheduled_tasks\` if you need to look up the ID. When this session is itself a scheduled run, the current task's ID is the \`name\` attribute in the \`<scheduled-task name="…">\` tag at the top of the conversation.

## Creating a new task

You are distilling the current session into a reusable shortcut. Follow these steps:

### 1. Analyze the session

Review the session history to identify the core task the user performed or requested. Distill it into a single, repeatable objective.

### 2. Draft a prompt

The prompt will be used for future autonomous runs — it must be entirely self-contained. Future runs will NOT have access to this session, so never reference "the current conversation," "the above," or any ephemeral context.

Include in the description:
- A clear objective statement (what to accomplish)
- Specific steps to execute
- Any relevant file paths, URLs, repositories, or tool names
- Expected output or success criteria
- Any constraints or preferences the user expressed

Write the description in second-person imperative ("Check the inbox…", "Run the test suite…"). Keep it concise but complete enough that another Claude session could execute it cold.

### 3. Choose a taskName

Pick a short, descriptive name in kebab-case (e.g. "daily-inbox-summary", "weekly-dep-audit", "format-pr-description").

### 4. Determine scheduling

The \`create_scheduled_task\` tool description explains the options (\`cronExpression\` for recurring, \`fireAt\` for one-time, omit both for ad-hoc) and their formats. If the user didn't give a clear schedule, propose one and ask them to confirm before proceeding.

Finally, call the \`create_scheduled_task\` tool.`;
const V = `# Setup Cowork

Help the user get Cowork configured for their work. A few steps — role, plugin, try a skill, connectors.

## Step 1 — Role

Your initial message should frame what Cowork is: it autonomously handles tasks like reading your email, searching your docs, drafting reports, etc. Educate the user on *Skills*, reusable workflows you run with \`/name\`; *Plugins* bundle skills for a domain / use case; *Connectors* wire in your tools." Two or three sentences. Hit the beats: multi-step and autonomous, uses your real tools, skills/plugins/connectors defined.

Next, ask the user for their role. Something like: "Let's get you set up — takes a few minutes. What kind of work do you do?" Then call the tool to show the onboarding role picker, which will display some roles to the user: do not list the roles yourself.

## Step 2 — Install a plugin

The role picker tool result will contain their selection. If it was dismissed, it means they didn't select a role: just suggest the productivity plugin and move on.

Search the plugin marketplace for their role — include already-installed plugins in the search so if they already have the right one, you showcase it rather than suggesting something worse. Pick the best match, then suggest that plugin to the user. End your turn here — they'll click Add and see its skills.

If the search comes up empty, fall back to the productivity plugin.

## Step 3 — Try a skill

After the plugin is suggested: explain what just happened. Something like: "That plugin bundles skills for [their role] work — reusable workflows you trigger with \`/name\`."

Wait for them to try one or type something.

If they invoke a skill (you'll see a /name message), help them with it briefly — but remember you're still running setup-cowork. Once that's done or they pause, bring it back to setup: "Nice — that's how skills work. One more thing to set up: connectors.", and immediately start suggesting connectors, i.e. step 4.

## Step 4 — Connectors

Once they've tried a skill (or typed something to move on): explain connectors briefly — "Connectors plug in your actual tools so skills have real context — your email, calendar, docs."

First, search the connector registry using their role as the keyword. Then render some connector suggestions with the top 2-3 UUIDs from the search results — pass the role as the keyword so the card header says "For your [role]".

## Step 5 — Wrap

Once they've connected something, or waved it off: close short — "You're set. Start a new task from the sidebar anytime, or type \`/\` to see your skills."

## Ground rules

- One step at a time.
- Skips are fine. If they pass on a step, move on.
- Keep each message short. Two or three sentences plus the widget, not a wall.
- The user trying a skill mid-flow is expected. Help with it, then return to where you left off. Don't let a skill invocation end the setup.
`;
const N = `# Memory Consolidation

You're doing a reflective pass over what you've learned about this user and their work. The goal: a future session should be able to orient quickly — who they work with, what they're focused on, how they like things done — without re-asking.

Your system prompt's auto-memory section defines the directory, file format, and memory types. Follow it.

## Phase 1 — Take stock

- List the memory directory and read the index (\`MEMORY.md\`)
- Skim each topic file. Note which ones overlap, which look stale, which are thin.

## Phase 2 — Consolidate

**Separate the durable from the dated.** Preferences, working style, key relationships, and recurring workflows are durable — keep and sharpen them. Specific projects, deadlines, and one-off tasks are dated — if the date has passed or the work is done, retire the file or fold the lasting takeaway (e.g. "user prefers X format for launch docs") into a durable one.

**Merge overlaps.** If two files describe the same person, project, or preference, combine into one and keep the richer file's path.

**Fix time references.** Convert "next week", "this quarter", "by Friday" to absolute dates so they stay readable later.

**Drop what's easy to re-find.** If a memory just restates something you could pull from the user's calendar, docs, or connected tools on demand, cut it. Keep what's hard to re-derive: stated preferences, context behind a decision, who to go to for what.

## Phase 3 — Tidy the index

Update \`MEMORY.md\` so it stays under 200 lines and ~25KB. One line per entry, under ~150 chars: \`- [Title](file.md) — one-line hook\`.

- Remove pointers to retired memories
- Shorten any line carrying detail that belongs in the topic file
- Add anything newly important

Finish with a short summary: how many files you touched and what changed.`;
const C = "Reflective pass over your memory files — merge duplicates, fix stale facts, prune the index.";
function G() {
  if (t.isFeatureEnabled("1824824999")) {
    const r = t.getParsedFeatureValueForKey("1004628546", "skillDescription", C, t.stringType());
    const e = t.getParsedFeatureValueForKey("1004628546", "skillPrompt", N, t.stringType());
    return {
      name: t.CONSOLIDATE_MEMORY_SKILL,
      description: r,
      prompt: e,
      isEnabled: () => t.isFeatureEnabled("123929380")
    };
  }
  return {
    name: t.CONSOLIDATE_MEMORY_SKILL,
    description: C,
    prompt: N,
    isEnabled: () => t.isFeatureEnabled("123929380")
  };
}
function J() {
  const r = t.getParsedFeatureValueForKey("3300773012", "skillDescription", "Create or update a scheduled task that runs automatically. Use when the user says things like \"every day\", \"each morning\", \"remind me in an hour\", \"run this at noon\", or wants to reschedule an existing task.", t.stringType());
  const e = t.getParsedFeatureValueForKey("3300773012", "skillPrompt", H, t.stringType());
  return {
    name: "schedule",
    description: r,
    prompt: e
  };
}
function X() {
  const r = t.getParsedFeatureValueForKey("4066504968", "skillDescription", "Guided Cowork setup — install a matching plugin, try a skill, connect tools.", t.stringType());
  const e = t.getParsedFeatureValueForKey("4066504968", "skillPrompt", V, t.stringType());
  return {
    name: "setup-cowork",
    description: r,
    prompt: e
  };
}
async function P() {
  return [J(), X(), G()];
}
const L = "bundled:";
let b;
function j() {
  return d.join($.app.getAppPath(), "resources", "bundled-skills");
}
async function U() {
  if (b !== undefined) {
    return b;
  }
  try {
    const r = await y.readFile(d.join(j(), "manifest.json"), "utf-8");
    b = JSON.parse(r);
  } catch {
    b = null;
  }
  return b;
}
async function Q() {
  const r = await U();
  if (r) {
    return r.skills.map(e => ({
      skillId: `${L}${e.name}`,
      name: e.name,
      description: e.description,
      creatorType: "anthropic",
      updatedAt: r.agentSkillsRef,
      enabled: e.tier !== "default_false"
    }));
  } else {
    return [];
  }
}
async function Z(r, e) {
  const i = r.slice(L.length);
  const s = await U();
  if (s == null || !s.skills.some(a => a.name === i)) {
    throw new Error(`Unknown bundled skill id: ${r}`);
  }
  const l = await y.readFile(d.join(j(), `${i}.skill`));
  const n = await t.extractZipBufferToDirectory(l, e);
  t.logger.debug(`[SkillsPlugin] seeded bundled skill ${i} from asar`);
  return n;
}
function ee(r) {
  return {
    skillId: r.id,
    name: r.name,
    description: r.description,
    creatorType: r.creator_type,
    updatedAt: r.updated_at,
    enabled: r.enabled
  };
}
const te = "[SkillsFetcher]";
const ie = 30000;
const se = 90000;
async function W() {
  if (t.getDeploymentMode().usesLocalSkillStorage()) {
    return Q();
  }
  const r = await t.getLastActiveOrg();
  if (!r) {
    t.logger.warn("Cannot fetch skills: no active organization");
    return [];
  }
  const e = `${t.claudeAiUrl()}/api/organizations/${r}/skills/list-skills?include_wiggle_skills=true&entrypoint=local-agent`;
  try {
    const i = await t.fetchWithTimeout(e, {
      timeout: ie
    });
    if (!i.ok) {
      const l = await i.text();
      t.logger.error(`Failed to fetch skills list: ${i.status} ${l}`);
      throw new Error(`Failed to fetch skills: ${i.status}`);
    }
    return (await i.json()).skills.map(ee);
  } catch (i) {
    throw i instanceof Error && i.name === "AbortError" ? (t.logger.error("Skills list request timed out"), new Error("Skills request timed out")) : i;
  }
}
async function ne() {
  return (await W()).filter(r => r.enabled);
}
async function B(r, e, i = 3) {
  if (r.startsWith(L)) {
    return Z(r, e);
  }
  const s = await t.getLastActiveOrg();
  if (!s) {
    throw new Error("Cannot fetch skill content: no active organization");
  }
  const l = `${t.claudeAiUrl()}/api/organizations/${s}/skills/download-dot-skill-file?skill_id=${encodeURIComponent(r)}&entrypoint=local-agent`;
  return t.fetchAndExtractWithRetry(l, e, r, {
    maxRetries: i,
    timeout: se,
    logPrefix: te
  });
}
const le = t.LOCAL_AGENT_MODE_BASE_DIR;
const re = "skills-plugin";
const I = "skills";
const A = "manifest.json";
const ae = ".claude-plugin";
const oe = "plugin.json";
const ce = 10;
const ue = "docx";
const K = 600000;
async function O(r) {
  try {
    await y.access(r);
    return true;
  } catch {
    return false;
  }
}
class de {
  constructor() {
    this.syncPromise = null;
    this.manifestMutex = new t.Mutex();
    this._syncInterval = null;
    this._resolveFirstSync = null;
    this._lastPollTime = 0;
    this._focusHandler = null;
    this._focusWindow = null;
    this._failureRetryScheduled = false;
    this._syncIntervalMs = K;
    this.baseDir = d.join($.app.getPath("userData"), le, re);
    this._firstSyncComplete = new Promise(e => {
      this._resolveFirstSync = e;
    });
  }
  waitForFirstSync() {
    return this._firstSyncComplete;
  }
  async getPluginDir() {
    const e = await t.getLastActiveOrg();
    if (!e) {
      t.logger.warn("[SkillsPlugin] Cannot get plugin dir: no active organization");
      return null;
    }
    const i = t.getAccountId();
    if (i) {
      return d.join(this.baseDir, e, i);
    } else {
      t.logger.warn("[SkillsPlugin] Cannot get plugin dir: no account");
      return null;
    }
  }
  async getPluginPath() {
    const e = await this.getPluginDir();
    if (!e) {
      return null;
    }
    const i = d.join(e, I);
    try {
      if ((await y.readdir(i)).length === 0) {
        return null;
      }
    } catch {
      return null;
    }
    return e;
  }
  async syncSkills() {
    if (this.syncPromise) {
      t.logger.info("[SkillsPlugin] Sync already in progress, waiting...");
      return this.syncPromise;
    }
    this.syncPromise = this._syncSkills();
    try {
      return await this.syncPromise;
    } finally {
      this.syncPromise = null;
    }
  }
  async getLocalSkillFiles(e) {
    const i = await this.getPluginDir();
    if (!i) {
      return [];
    }
    const s = await this.readManifest(i);
    const l = s == null ? undefined : s.skills.find(n => n.name === e);
    if (!l || l.creatorType !== "user") {
      return [];
    }
    try {
      const n = this.getSkillDir(i, e);
      const a = await y.readdir(n, {
        withFileTypes: true,
        recursive: true
      });
      const h = [];
      for (const c of a) {
        if (!c.isFile()) {
          continue;
        }
        const g = d.join(c.parentPath, c.name).slice(n.length + 1).replace(/\\/g, "/");
        const o = await y.readFile(d.join(c.parentPath, c.name), "utf-8");
        h.push({
          path: g,
          content: o
        });
      }
      return h;
    } catch {
      return [];
    }
  }
  async revealLocalSkill(e) {
    const i = await this.getPluginDir();
    if (!i) {
      return;
    }
    const s = await this.readManifest(i);
    const l = s == null ? undefined : s.skills.find(n => n.name === e);
    if (!!l && l.creatorType === "user") {
      if (this.isValidSkillDirName(i, e)) {
        $.shell.showItemInFolder(t.devirtualizeMsixPath(this.getSkillDir(i, e)));
      }
    }
  }
  async listLocalSkills() {
    const e = await this.getPluginDir();
    if (!e) {
      return [];
    }
    const i = await this.readManifest(e);
    return ((i == null ? undefined : i.skills) ?? []).filter(s => s.creatorType === "user");
  }
  async setLocalSkillEnabled(e, i) {
    const s = await this.getPluginDir();
    if (s) {
      return this.manifestMutex.runExclusive(async () => {
        const l = await this.readManifest(s);
        if (!l) {
          return {
            ok: false,
            error: `"${e}" is not a user-created skill`
          };
        }
        const n = l.skills.find(a => a.name === e);
        if (!n || n.creatorType !== "user") {
          return {
            ok: false,
            error: `"${e}" is not a user-created skill`
          };
        } else {
          n.enabled = i;
          n.updatedAt = new Date().toISOString();
          await this.writeManifest(s, {
            lastUpdated: Date.now(),
            skills: l.skills
          });
          return {
            ok: true
          };
        }
      });
    } else {
      return {
        ok: false,
        error: "No plugin directory"
      };
    }
  }
  async deleteLocalSkill(e) {
    const i = await this.getPluginDir();
    if (i) {
      return this.manifestMutex.runExclusive(async () => {
        const s = await this.readManifest(i);
        if (!s) {
          return {
            ok: false,
            error: `"${e}" is not a user-created skill`
          };
        }
        const l = s.skills.find(n => n.name === e);
        if (!l || l.creatorType !== "user") {
          return {
            ok: false,
            error: `"${e}" is not a user-created skill`
          };
        } else {
          await this.removeSkills(i, [l]);
          await this.writeManifest(i, {
            lastUpdated: Date.now(),
            skills: s.skills.filter(n => n.name !== e)
          });
          return {
            ok: true
          };
        }
      });
    } else {
      return {
        ok: false,
        error: "No plugin directory"
      };
    }
  }
  async saveLocalSkill(e, i, s, l) {
    const n = await this.getPluginDir();
    if (!n) {
      return {
        ok: false,
        error: "No plugin directory available"
      };
    }
    if (!e.trim() || e === "." || e === ".." || /[. ]$/.test(e)) {
      return {
        ok: false,
        error: `Invalid skill name: "${e}"`
      };
    }
    const a = this.skillDirKey(e);
    if (new Set((await P()).map(c => this.skillDirKey(c.name))).has(a)) {
      return {
        ok: false,
        error: `"${e}" is a built-in skill name`
      };
    } else {
      return this.manifestMutex.runExclusive(async () => {
        const c = await this.readManifest(n);
        if (!c && (await O(d.join(n, A)))) {
          return {
            ok: false,
            error: "Could not read the skills manifest, not saving"
          };
        }
        const g = c == null ? undefined : c.skills.find(w => w.name === e);
        if (g && !l) {
          return {
            ok: false,
            error: "already_exists"
          };
        }
        if (g && g.creatorType !== "user") {
          return {
            ok: false,
            error: `"${e}" is not a user-created skill`
          };
        }
        const o = c == null ? undefined : c.skills.find(w => w.name !== e && this.skillDirKey(w.name) === a);
        if (o) {
          return {
            ok: false,
            error: `"${e}" conflicts with existing skill "${o.name}"`
          };
        }
        await this.ensurePluginStructure(n);
        const p = this.getSkillDir(n, e);
        await t.mkdirPrivate(p);
        await t.writeFilePrivate(d.join(p, "SKILL.md"), s);
        const S = {
          skillId: e,
          name: e,
          description: i,
          creatorType: "user",
          syncManaged: false,
          updatedAt: new Date().toISOString(),
          enabled: (g == null ? undefined : g.enabled) ?? true
        };
        const v = [...((c == null ? undefined : c.skills.filter(w => w.name !== e)) ?? []), S];
        await this.writeManifest(n, {
          lastUpdated: Date.now(),
          skills: v
        });
        return {
          ok: true
        };
      });
    }
  }
  async getBuiltInSkillMetadata() {
    return (await P()).map(e => ({
      skillId: e.name,
      name: e.name,
      description: e.description,
      creatorType: "anthropic",
      updatedAt: null,
      enabled: true
    }));
  }
  async _syncSkills() {
    t.logger.info("[SkillsPlugin] Starting skills sync");
    const e = await this.getPluginDir();
    if (!e) {
      t.logger.warn("[SkillsPlugin] Cannot sync: no plugin directory");
      return {
        downloaded: 0,
        removed: 0
      };
    }
    const i = await this.getBuiltInSkillMetadata();
    const s = new Set(i.map(l => l.name));
    await this.ensurePluginStructure(e);
    await this._writeBuiltInSkillsTo(e);
    await this.manifestMutex.runExclusive(async () => {
      const l = d.join(e, A);
      const n = await this.readManifest(e);
      if (!n && (await O(l))) {
        let h = false;
        try {
          JSON.parse(await y.readFile(l, "utf-8"));
        } catch (c) {
          h = c instanceof SyntaxError;
        }
        if (h) {
          try {
            await y.rm(`${l}.corrupt`, {
              force: true
            });
            await y.rename(l, `${l}.corrupt`);
          } catch {}
          t.logger.warn("[SkillsPlugin] Manifest unparseable; quarantined and re-bootstrapping");
        } else {
          t.logger.warn("[SkillsPlugin] Manifest read failed; skipping built-in normalization this sync");
          return;
        }
      }
      const a = i.every(h => ((n == null ? undefined : n.skills) ?? []).some(c => c.name === h.name && c.creatorType === "anthropic"));
      if (!n || !a) {
        const h = (n == null ? undefined : n.skills.filter(c => !s.has(c.name))) ?? [];
        await this.writeManifest(e, {
          lastUpdated: Date.now(),
          skills: [...h, ...i]
        });
      }
    });
    try {
      const l = await ne();
      t.logger.info(`[SkillsPlugin] Found ${l.length} enabled skills`);
      const n = await this.readManifest(e);
      if (!n) {
        t.logger.warn("[SkillsPlugin] Manifest read failed; skipping this sync round");
        return {
          downloaded: 0,
          removed: 0
        };
      }
      const a = new Set(i.map(u => this.skillDirKey(u.name)));
      const h = new Set(n.skills.filter(u => u.syncManaged === false).map(u => this.skillDirKey(u.name)));
      const c = new Set();
      const g = l.filter(u => {
        if (!this.isValidSkillDirName(e, u.name)) {
          t.logger.warn(`[SkillsPlugin] Remote skill name ${JSON.stringify(u.name)} cannot map to a skill directory, skipping`);
          return false;
        }
        const f = this.skillDirKey(u.name);
        if (a.has(f)) {
          t.logger.warn(`[SkillsPlugin] Built-in skill "${u.name}" conflicts with remote skill, built-in takes precedence`);
          return false;
        } else if (h.has(f)) {
          t.logger.warn(`[SkillsPlugin] Local skill "${u.name}" conflicts with remote skill, local skill takes precedence`);
          return false;
        } else if (c.has(f)) {
          t.logger.warn(`[SkillsPlugin] Remote skill "${u.name}" maps to the same directory as an earlier remote skill, skipping`);
          return false;
        } else {
          c.add(f);
          return true;
        }
      });
      if (g.length === 0) {
        const u = n.skills.filter(f => !a.has(this.skillDirKey(f.name)) && !h.has(this.skillDirKey(f.name)) && f.syncManaged !== false);
        await this.removeSkills(e, u);
        await this.manifestMutex.runExclusive(async () => {
          const f = await this.readManifest(e);
          if (!f) {
            t.logger.warn("[SkillsPlugin] Manifest read failed; skipping manifest rewrite and orphan cleanup this sync");
            return;
          }
          const _ = f.skills.filter(x => x.syncManaged === false);
          const D = [...i, ..._];
          await this.writeManifest(e, {
            lastUpdated: Date.now(),
            skills: D
          });
          await this.cleanupOrphanDirs(e, D);
        });
        t.logger.info("[SkillsPlugin] Sync complete: no remote skills, built-in skills written");
        this._failureRetryScheduled = false;
        return {
          downloaded: 0,
          removed: 0
        };
      }
      const {
        toDownload: o,
        toRemove: p
      } = await this.calculateDelta(e, g, (n == null ? undefined : n.skills) ?? []);
      t.logger.info(`[SkillsPlugin] Delta: ${o.length} to download, ${p.length} to remove`);
      const S = await this.downloadSkills(e, o);
      const v = o.length - S.size;
      if (p.length > 0) {
        await this.removeSkills(e, p);
      }
      const w = new Map(((n == null ? undefined : n.skills) ?? []).filter(u => !s.has(u.name) && u.syncManaged !== false).map(u => [u.name, u]));
      const M = g.flatMap(u => {
        if (!S.has(u.name)) {
          return [u];
        }
        const f = w.get(u.name);
        if (f) {
          return [f];
        } else {
          return [];
        }
      });
      const T = await this.manifestMutex.runExclusive(async () => {
        const u = await this.readManifest(e);
        if (!u) {
          t.logger.warn("[SkillsPlugin] Manifest read failed at write time; skipping manifest rewrite and orphan cleanup this sync");
          return null;
        }
        const f = u.skills.filter(D => D.syncManaged === false);
        const _ = [...M, ...i, ...f];
        await this.writeManifest(e, {
          lastUpdated: Date.now(),
          skills: _
        });
        return this.cleanupOrphanDirs(e, _);
      });
      if (S.size > 0) {
        if (!this._failureRetryScheduled) {
          this._failureRetryScheduled = true;
          this.triggerSync();
        }
      } else {
        this._failureRetryScheduled = false;
      }
      if (T === null) {
        return {
          downloaded: v,
          removed: p.length
        };
      } else {
        t.logger.info(`[SkillsPlugin] Sync complete: ${v} downloaded, ${S.size} failed, ${p.length} removed, ${T} orphans cleaned`);
        return {
          downloaded: v,
          removed: p.length
        };
      }
    } catch (l) {
      t.logger.error("[SkillsPlugin] Sync failed:", l);
      throw l;
    }
  }
  async calculateDelta(e, i, s) {
    const l = new Map(s.map(o => [o.name, o]));
    const n = new Map(i.map(o => [o.name, o]));
    const a = [];
    const h = [];
    for (const o of i) {
      const p = l.get(o.name);
      if (!p || p.updatedAt !== o.updatedAt) {
        a.push(o);
        continue;
      }
      const S = this.getSkillDir(e, o.name);
      if (!(await O(d.join(S, "SKILL.md")))) {
        a.push(o);
      }
    }
    const c = new Set((await P()).map(o => this.skillDirKey(o.name)));
    const g = new Set(s.filter(o => o.syncManaged === false).map(o => this.skillDirKey(o.name)));
    for (const o of s) {
      if (!n.has(o.name) && !c.has(this.skillDirKey(o.name)) && !g.has(this.skillDirKey(o.name)) && o.syncManaged !== false) {
        h.push(o);
      }
    }
    return {
      toDownload: a,
      toRemove: h
    };
  }
  async downloadSkills(e, i) {
    const s = new t.PQueue({
      concurrency: ce
    });
    const l = new Set();
    await s.addAll(i.map(n => async () => {
      try {
        const a = this.getSkillDir(e, n.name);
        await B(n.skillId, a);
        t.logger.debug(`[SkillsPlugin] Downloaded skill: ${n.name}`);
      } catch (a) {
        t.logger.error(`[SkillsPlugin] Failed to download ${n.name}:`, a);
        l.add(n.name);
      }
    }));
    return l;
  }
  async removeSkills(e, i) {
    for (const s of i) {
      try {
        const l = this.getSkillDir(e, s.name);
        await y.rm(l, {
          recursive: true,
          force: true,
          ...t.RM_RETRY_OPTS
        });
        t.logger.debug(`[SkillsPlugin] Removed skill: ${s.name}`);
      } catch {}
    }
  }
  async cleanupOrphanDirs(e, i) {
    const s = d.join(e, I);
    const l = new Set(i.map(n => this.skillDirKey(n.name)));
    return t.cleanupOrphanDirectories(s, l, {
      logPrefix: "[SkillsPlugin]",
      caseInsensitive: true
    });
  }
  sanitizeSkillName(e) {
    return e.replace(/[<>"|?*\\/]/g, "_");
  }
  skillDirKey(e) {
    return this.sanitizeSkillName(e).toLowerCase();
  }
  isValidSkillDirName(e, i) {
    try {
      this.getSkillDir(e, i);
      return true;
    } catch {
      return false;
    }
  }
  getSkillDir(e, i) {
    const s = this.sanitizeSkillName(i);
    const l = d.join(e, I);
    const n = d.join(l, s);
    const a = d.relative(l, n);
    if (a === "" || d.isAbsolute(a) || a.startsWith("..") || /[. ]$/.test(s)) {
      throw new Error(`Invalid skill name: "${i}"`);
    }
    return n;
  }
  async ensurePluginStructure(e) {
    await t.mkdirPrivate(d.join(e, I));
    const i = d.join(e, ae);
    const s = d.join(i, oe);
    if (!(await O(s))) {
      await t.mkdirPrivate(i);
      await t.writeJsonAtomic(s, {
        name: "anthropic-skills",
        version: "1.0.0",
        description: "Anthropic-managed skills for Claude Desktop"
      });
    }
  }
  async readManifest(e) {
    const i = d.join(e, A);
    try {
      const s = await y.readFile(i, "utf-8");
      return JSON.parse(s);
    } catch (s) {
      if (s.code !== "ENOENT") {
        t.logger.warn("[SkillsPlugin] Failed to read manifest:", s);
      }
      return null;
    }
  }
  async writeManifest(e, i) {
    await t.writeJsonAtomic(d.join(e, A), i);
  }
  async clearPluginDir(e) {
    await y.rm(e, {
      recursive: true,
      force: true,
      ...t.RM_RETRY_OPTS
    });
    t.logger.info("[SkillsPlugin] Cleared plugin directory: %s", e);
  }
  async clearCache() {
    const e = await this.getPluginDir();
    if (e) {
      await this.clearPluginDir(e);
    }
  }
  triggerSync() {
    t.logger.info("[SkillsPlugin] Triggered sync (5s delay)");
    setTimeout(() => {
      this.periodicSync();
    }, 5000);
  }
  startPeriodicSync() {
    if (!this._syncInterval) {
      this._firstSyncComplete = new Promise(e => {
        this._resolveFirstSync = e;
      });
      this._syncIntervalMs = t.getParsedFeatureValueForKey("1978029737", "skillsSyncIntervalMs", K, t.numberType());
      t.logger.info(`[SkillsPlugin] Starting periodic sync (interval: ${this._syncIntervalMs}ms)`);
      this._syncInterval = setInterval(() => {
        if (!t.isMainWindowFocused()) {
          t.logger.debug("[SkillsPlugin] Skipping periodic sync — window not focused");
          return;
        }
        this.periodicSync();
      }, this._syncIntervalMs);
      this._focusHandler = () => {
        const e = Date.now() - this._lastPollTime;
        if (e >= this._syncIntervalMs) {
          t.logger.info("[SkillsPlugin] Window focused — polling now (last poll was %dms ago)", e);
          this.periodicSync();
        }
      };
      if (t.mainWindow && !t.mainWindow.isDestroyed()) {
        this._focusWindow = t.mainWindow;
        this._focusWindow.on("focus", this._focusHandler);
      }
      this.periodicSync();
    }
  }
  stopPeriodicSync() {
    if (this._syncInterval) {
      clearInterval(this._syncInterval);
      this._syncInterval = null;
    }
    if (this._focusHandler && this._focusWindow && !this._focusWindow.isDestroyed()) {
      this._focusWindow.removeListener("focus", this._focusHandler);
    }
    this._focusHandler = null;
    this._focusWindow = null;
    this.syncPromise = null;
  }
  async periodicSync() {
    if (this.syncPromise) {
      t.logger.info("[SkillsPlugin] Sync already in progress, skipping");
      return;
    }
    this._lastPollTime = Date.now();
    const e = this._resolveFirstSync;
    const i = this._syncSkills();
    this.syncPromise = i;
    try {
      await i;
    } catch (s) {
      t.logger.warn("[SkillsPlugin] Periodic sync failed:", s);
    } finally {
      if (this.syncPromise === i) {
        this.syncPromise = null;
      }
      if (e) {
        e();
        if (this._resolveFirstSync === e) {
          this._resolveFirstSync = null;
        }
      }
    }
  }
  async _writeBuiltInSkillsTo(e) {
    const i = await P();
    for (const s of i) {
      try {
        await this._writeOneBuiltInSkill(e, s);
      } catch (l) {
        t.logger.warn(`[SkillsPlugin] Failed to write built-in skill "${s.name}":`, l);
      }
    }
  }
  async _writeOneBuiltInSkill(e, i) {
    const s = this.getSkillDir(e, i.name);
    let l;
    try {
      l = (await y.readdir(s, {
        withFileTypes: true
      })).some(h => h.name !== "SKILL.md" || !h.isFile());
    } catch (a) {
      l = a.code !== "ENOENT";
    }
    if (l) {
      try {
        await y.rm(s, {
          recursive: true,
          force: true,
          ...t.RM_RETRY_OPTS
        });
      } catch (a) {
        t.logger.warn(`[SkillsPlugin] Failed to reset built-in skill dir "${i.name}":`, a);
      }
    }
    await t.mkdirPrivate(s);
    const n = ["---", `name: ${JSON.stringify(i.name)}`, `description: ${JSON.stringify(i.description)}`, "---", "", i.prompt].join(`
`);
    await t.writeFilePrivate(d.join(s, "SKILL.md"), n);
  }
  async generateSkillsSystemPrompt(e, i, s, l, n, a, h = false, c = true, g = true, o = true, p = false, S = false) {
    const v = [];
    let w = false;
    const M = await this.getPluginDir();
    if (M) {
      const m = await this.readManifest(M);
      if (m != null && m.skills) {
        const R = new Set((await P()).filter(k => {
          var F;
          return ((F = k.isEnabled) == null ? undefined : F.call(k)) === false;
        }).map(k => k.name));
        for (const k of m.skills) {
          if (!k.enabled || R.has(k.name)) {
            continue;
          }
          if (S && k.name === ue) {
            w = true;
            continue;
          }
          if (!c && k.creatorType !== "anthropic") {
            continue;
          }
          if (n && a && !this.isValidSkillDirName(a, k.name)) {
            t.logger.warn(`[SkillsPlugin] Skipping manifest skill with unresolvable name ${JSON.stringify(k.name)} in system prompt`);
            continue;
          }
          const F = n && a ? this.getSkillDir(a, k.name) : `/sessions/${e}/mnt/.claude/${I}/${this.sanitizeSkillName(k.name)}`;
          v.push({
            name: k.name,
            description: k.description,
            location: F
          });
        }
      }
    }
    const [T, u] = await Promise.all([g ? q.remotePluginManager.getPluginSkillsForSystemPrompt(e, l, n) : [], i && s ? t.localPluginsReader.getLocalPluginSkillsForSystemPrompt(e, i, s, n) : []]);
    const f = [...T, ...u];
    const _ = new Set(v.map(m => m.name));
    const D = [...v, ...f];
    if (t.isFeatureEnabled("2800354941")) {
      D.sort((m, R) => m.name.localeCompare(R.name));
    }
    if (D.length === 0) {
      return {
        prompt: null,
        pluginSkills: f,
        managedSkillNames: _
      };
    }
    const x = D.map(m => `<skill>
<name>
${m.name}
</name>
<description>
${m.description}
</description>
<location>
${m.location}
</location>
</skill>`).join(`
`);
    const Y = p ? "\n- Skill files at <location> are a read-only cache — editing them does not change the user's saved skill. To create a skill, or update one the user asks to change, call `save_skill` (set `overwrite: true` when updating an existing skill)." : `
- You cannot create or modify skills in this session. Skill files at <location> are a read-only cache — editing them, or saving an edited copy elsewhere, does not change the user's saved skill. If asked to create or change a skill, say you can't do that here and point the user to Settings > Capabilities.`;
    const z = w ? `
- For .docx/.pdf/.clark work, use the Documents doc_* tools. The docx skill is deliberately not listed but remains invocable by name — use it only for Word comment authoring, which doc_* does not cover.` : "";
    let E = "";
    if (o && g) {
      E = " If they ask you to recommend skills, or ask for skills for a domain they have nothing installed for, call `suggest_skills` and `search_plugins` — suggest_skills covers standalone skills, search_plugins covers skills inside uninstalled plugins (follow with suggest_plugin_install only if it returns relevant matches).";
    } else if (o) {
      E = " If they ask you to recommend skills, or ask for skills for a domain they have nothing installed for, call `suggest_skills`.";
    } else if (g) {
      E = " If they ask you to recommend skills, or ask for skills for a domain they have nothing installed for, call `search_plugins` (follow with suggest_plugin_install only if it returns relevant matches).";
    }
    return {
      prompt: `
<skills_instructions>
When users ask you to perform tasks, check if any of the available skills below can help complete the task more effectively. Skills provide specialized capabilities and domain knowledge.

How to use skills:
- Invoke skills using this tool with the skill name only (no arguments)
- When you invoke a skill, you will see <command-message>The "{name}" skill is loading</command-message>
- The skill's prompt will expand and provide detailed instructions on how to complete the task
- Examples:
  - \`skill: "pdf"\` - invoke the pdf skill
  - \`skill: "xlsx"\` - invoke the xlsx skill
  - \`skill: "ms-office-suite:pdf"\` - invoke using fully qualified name

Important:
- Only use skills listed in <available_skills> below
- Do not invoke a skill that is already running
- Do not use this tool for built-in CLI commands (like /help, /clear, etc.)${Y}${z}${h && c ? `
- If the user asks which skills they have, call \`list_skills\` to render the widget instead of writing skill names in text.${E}` : ""}${h && g ? "\n- If the user asks which plugins they have installed, call `list_plugins` to render the widget instead of writing plugin names in text." : ""}
</skills_instructions>

<available_skills>
${x}
</available_skills>
`,
      pluginSkills: f,
      managedSkillNames: _
    };
  }
}
const he = new de();
exports.fetchAllSkillsMetadata = W;
exports.fetchAndExtractSkillWithRetry = B;
exports.getAllBuiltInSkills = P;
exports.skillsPluginManager = he;
//# sourceMappingURL=index.chunk-ChePQt0A.js.map