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
      e._sentryDebugIds[o] = "09a47c7d-c3f4-4956-adf4-11d9ee47d0fb";
      e._sentryDebugIdIdentifier = "sentry-dbid-09a47c7d-c3f4-4956-adf4-11d9ee47d0fb";
    }
  })();
} catch {}
const ut = require("node:crypto");
const x = require("node:fs/promises");
const Ve = require("node:os");
const b = require("node:path");
const De = require("./index.chunk-ZXPKeP3a.js");
const t = require("./index.chunk-c42vKsva.js");
const D = require("node:fs");
require("node:timers/promises");
const dt = require("node:child_process");
const J = require("./index.chunk-BLNdD7Yt.js");
const X = require("./index.chunk-CvbeGVMj.js");
const Ye = require("electron");
const We = "CLAUDE_CODE_OAUTH_TOKEN";
const ht = "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR";
const de = new Set();
process.once("exit", () => {
  for (const e of de) {
    try {
      e.kill("SIGTERM");
    } catch {}
  }
});
const Ue = 20;
const mt = 500;
function ft(e) {
  const o = [];
  let r = "";
  e.stderrTail = o;
  e.stderrPartial = undefined;
  return n => {
    t.logger.warn(`[HostLoop] cli.js stderr: ${n.trimEnd()}`);
    if (e.stderrTail !== o) {
      return;
    }
    const s = (r + n).split(`
`);
    r = s.pop() ?? "";
    e.stderrPartial = r || undefined;
    for (const i of s) {
      if (i.length > 0) {
        o.push(i.slice(0, mt));
      }
    }
    if (o.length > Ue) {
      o.splice(0, o.length - Ue);
    }
  };
}
function pt(e = {}) {
  if (process.platform !== "win32") {
    return o => yt(o, e);
  }
}
function yt(e, {
  onStderr: o,
  onSpawnConfirmed: r,
  onFirstStdout: n
}) {
  var v;
  var T;
  const {
    command: s,
    args: i,
    cwd: c,
    env: y,
    signal: d
  } = e;
  const m = {
    ...y
  };
  let l;
  const u = y[We];
  if (u) {
    l = gt(u);
    if (l !== undefined) {
      delete m[We];
      m[ht] = "3";
    }
  }
  const h = l !== undefined ? ["pipe", "pipe", "pipe", l] : ["pipe", "pipe", "pipe"];
  m.CLAUDE_CODE_SPAWN_TIMESTAMP_MS = String(Date.now());
  let a;
  try {
    a = dt.spawn(s, i, {
      cwd: c,
      stdio: h,
      signal: d,
      env: m,
      windowsHide: true
    });
  } finally {
    if (l !== undefined) {
      try {
        D.closeSync(l);
      } catch {}
    }
  }
  de.add(a);
  const p = () => de.delete(a);
  a.once("exit", p);
  a.once("error", p);
  if (r != null) {
    r();
  }
  if ((v = a.stdout) != null) {
    v.once("data", () => n == null ? undefined : n());
  }
  const w = o ?? (_ => t.logger.warn(`[HostLoop] cli.js stderr: ${_.trimEnd()}`));
  if ((T = a.stderr) != null) {
    T.on("data", _ => w(_.toString()));
  }
  return {
    stdin: a.stdin,
    stdout: a.stdout,
    get killed() {
      return a.killed;
    },
    get exitCode() {
      return a.exitCode;
    },
    kill: a.kill.bind(a),
    on: a.on.bind(a),
    once: a.once.bind(a),
    off: a.off.bind(a)
  };
}
function gt(e) {
  let o;
  let r;
  try {
    o = D.mkdtempSync(b.join(Ve.tmpdir(), "hlsp-"));
    const n = b.join(o, "t");
    D.writeFileSync(n, e, {
      encoding: "utf8",
      mode: 384
    });
    r = D.openSync(n, "r");
    D.rmSync(n, {
      force: true
    });
    D.rmSync(o, {
      recursive: true,
      force: true
    });
    return r;
  } catch (n) {
    t.logger.warn("[HostLoop] Failed to stage OAuth token fd; falling back to env:", n);
    if (r !== undefined) {
      try {
        D.closeSync(r);
      } catch {}
    }
    if (o) {
      try {
        D.rmSync(o, {
          recursive: true,
          force: true
        });
      } catch {}
    }
    return;
  }
}
const ee = "MEMORY.md";
const _t = 200;
const wt = ["user", "feedback", "project", "reference"];
const vt = "This directory already exists — write to it directly with the Write tool (do not run mkdir or check for its existence).";
const bt = ["## Types of memory", "", "There are several discrete types of memory that you can store in your memory system:", "", "<types>", "<type>", "    <name>user</name>", "    <description>Contain information about the user's role, goals, responsibilities, and knowledge. Great user memories help you tailor your future behavior to the user's preferences and perspective. Your goal in reading and writing these memories is to build up an understanding of who the user is and how you can be most helpful to them specifically. For example, you should collaborate with a senior software engineer differently than a student who is coding for the very first time. Keep in mind, that the aim here is to be helpful to the user. Avoid writing memories about the user that could be viewed as a negative judgement or that are not relevant to the work you're trying to accomplish together.</description>", "    <when_to_save>When you learn any details about the user's role, preferences, responsibilities, or knowledge</when_to_save>", "    <how_to_use>When your work should be informed by the user's profile or perspective. For example, if the user is asking you to explain a part of the code, you should answer that question in a way that is tailored to the specific details that they will find most valuable or that helps them build their mental model in relation to domain knowledge they already have.</how_to_use>", "    <examples>", "    user: I'm in-house commercial counsel — I review vendor and customer contracts, I don't touch litigation or IP", "    assistant: [saves user memory: in-house commercial counsel; scope is vendor/customer contracts, not litigation or IP — frame contract review around commercial risk and business terms]", "", "    user: I run enterprise accounts in EMEA, so anything under $50k ARR isn't really my lane", "    assistant: [saves user memory: enterprise AE covering EMEA; deals under $50k ARR are out of scope — prioritize and surface accounts accordingly]", "    </examples>", "</type>", "<type>", "    <name>feedback</name>", "    <description>Guidance the user has given you about how to approach work — both what to avoid and what to keep doing. These are a very important type of memory to read and write as they allow you to remain coherent and responsive to the way you should approach work in the project. Record from failure AND success: if you only save corrections, you will avoid past mistakes but drift away from approaches the user has already validated, and may grow overly cautious.</description>", "    <when_to_save>Any time the user corrects your approach (\"no not that\", \"don't\", \"stop doing X\") OR confirms a non-obvious approach worked (\"yes exactly\", \"perfect, keep doing that\", accepting an unusual choice without pushback). Corrections are easy to notice; confirmations are quieter — watch for them. In both cases, save what is applicable to future conversations, especially if surprising or not obvious from the context. Include *why* so you can judge edge cases later. If the guidance is tied to one specific project or deliverable, file it as a `project` memory instead — reserve `feedback` for preferences that generalize across the user's work.</when_to_save>", "    <how_to_use>Let these memories guide your behavior so that the user does not need to offer the same guidance twice.</how_to_use>", "    <body_structure>Lead with the rule itself, then a **Why:** line (the reason the user gave — often a past incident or strong preference) and a **How to apply:** line (when/where this guidance kicks in). Knowing *why* lets you judge edge cases instead of blindly following the rule.</body_structure>", "    <examples>", "    user: don't hedge in the exec summary — the CFO wants a number and a recommendation, caveats go in the appendix", "    assistant: [saves feedback memory: exec summaries lead with a single number and a recommendation; move caveats to the appendix. Why: CFO preference for directness]", "", "    user: yeah, putting the open issues in a table at the top of the redline memo was the right call — keep doing that", "    assistant: [saves feedback memory: redline memos lead with an open-issues table before the clause-by-clause notes. Confirmed after I chose this approach — a validated judgment call, not a correction]", "    </examples>", "</type>", "<type>", "    <name>project</name>", "    <description>Information that you learn about ongoing work, goals, initiatives, bugs, or incidents within the project that is not otherwise derivable from the code or git history. Project memories help you understand the broader context and motivation behind the work the user is doing within this working directory.</description>", "    <when_to_save>When you learn who is doing what, why, or by when. These states change relatively quickly so try to keep your understanding of this up to date. Always convert relative dates in user messages to absolute dates when saving (e.g., \"Thursday\" → \"2026-03-05\"), so the memory remains interpretable after time passes.</when_to_save>", "    <how_to_use>Use these memories to more fully understand the details and nuance behind the user's request and make better informed suggestions.</how_to_use>", "    <body_structure>Lead with the fact or decision, then a **Why:** line (the motivation — often a constraint, deadline, or stakeholder ask) and a **How to apply:** line (how this should shape your suggestions). Project memories decay fast, so the why helps future-you judge whether the memory is still load-bearing.</body_structure>", "    <examples>", "    user: the Northwind deal is in exclusivity through the end of the month — don't reference it outside the deal-team thread", "    assistant: [saves project memory: Northwind acquisition is in exclusivity through 2026-04-30; treat as confidential to the deal team — flag any draft that mentions it for a wider audience]", "", "    user: Q3 launch slipped to October because the product won't be GA in time — anything tied to the September date needs to move", "    assistant: [saves project memory: [[q3-launch]] moved from September to October 2026; reason is product GA slip — shift dependent campaign timelines and flag assets that still cite September]", "", "    user: we locked in the Japan trip for the first two weeks of May — my partner can't do work calls past 6pm their time", "    assistant: [saves project memory: [[japan-trip]] confirmed for 2026-05-01 through 2026-05-14; partner unavailable for calls after 6pm local — when scheduling or drafting itinerary items, keep evenings clear]", "    </examples>", "</type>", "<type>", "    <name>reference</name>", "    <description>Stores pointers to where information can be found in external systems. These memories allow you to remember where to look to find up-to-date information outside of the project directory.</description>", "    <when_to_save>When you learn about resources in external systems and their purpose. For example, that bugs are tracked in a specific project in Linear or that feedback can be found in a specific Slack channel.</when_to_save>", "    <how_to_use>When the user references an external system or information that may be in an external system.</how_to_use>", "    <examples>", "    user: stop pulling campaign numbers from the weekly spreadsheet — Looker is the source of truth, the sheet lags by a week", "    assistant: [saves reference memory: [[campaign-performance]] source of truth is Looker, not the weekly spreadsheet — sheet lags ~1 week]", "", "    user: check the clause library in Ironclad before drafting fallback language — most of what we'd accept is already pre-approved there", "    assistant: [saves reference memory: pre-approved fallback contract language lives in the Ironclad clause library — search there before drafting from scratch]", "    </examples>", "</type>", "</types>", ""];
const Et = ["## What NOT to save in memory", "", "- Facts you can re-derive from the filesystem (file locations, project structure you could just re-read) or re-fetch from a connected tool.", "- Anything already documented in CLAUDE.md files.", "- Ephemeral task details: analysis results, in-progress work, temporary state, current conversation context.", "", "These exclusions apply even when the user explicitly asks you to save. If they ask you to save a meeting recap or an inbox summary, ask what was *surprising* or *non-obvious* about it — that is the part worth keeping."];
const Tt = ["## When to access memories", "- When memories seem relevant, or the user references prior-conversation work.", "- You MUST access memory when the user explicitly asks you to check, recall, or remember.", "- If the user says to *ignore* or *not use* memory: Do not apply remembered facts, cite, compare against, or mention memory content.", "- **Maintain it.** If something in memory turns out to be wrong or outdated, correct it immediately — stale memory is worse than no memory."];
const St = ["## Before applying/recommending a memory", "", "Check if the memory applies - some guidance is only specific to a particular type of workflow/deliverable, DO NOT extrapolate. When in doubt, ask the user.", "", "Memory records what was true at write time. Docs get edited, tickets get reassigned, threads get new replies. When a memory points at something you can refetch, verify it before the user acts on it.", "", "- **Doc or page** → open it. Content may have changed.", "- **Ticket, task, or link** → re-read from the source when you can."];
const Rt = ["```markdown", "---", "name: {{memory name — other memories can reference this one inline as [[name]]}}", "description: {{one-line description — used to decide relevance in future conversations, so be specific}}", `type: {{${wt.join(", ")}}}`, "---", "", "{{memory content — for feedback/project types, structure as: rule/fact, then **Why:** and **How to apply:** lines. Use [[name]] to reference other memories by their name field. [[name]] should match filename.}}", "```"];
const Ot = ["## How to save memories", "", "**Write early, write often.** Memory writes are cheap; rediscovery is expensive. Don't wait for a clean stopping point — there isn't one. Good moments to write include:", "- figuring out why something was broken or behaving unexpectedly", "- learning a fact, constraint, or config detail that wasn't obvious from the code/docs", "- making a non-trivial decision (record the *why*, not just the what)", "- discovering that an approach *doesn't* work — negative results save future time too", "- finishing a sub-task or switching context", "- noticing you've been working >15-20 min without saving anything", "- finishing research (even partially)", "", "**Err toward writing.** If you're unsure whether something is worth saving, save it — a slightly noisy memory is far better than an empty one.", "", "Saving a memory is a two-step process:", "", "**Step 1** — write the memory to its own file (e.g., `user_role.md`, `feedback_testing.md`) using this frontmatter format:", "", ...Rt, "", `**Step 2** — add a pointer to that file in \`${ee}\`. \`${ee}\` is an index, not a memory — each entry should be one line, under ~150 characters: \`- [Title](file.md) — one-line hook\`. It has no frontmatter. Never write memory content directly into \`${ee}\`.`, "", `- \`${ee}\` is always loaded into your conversation context — lines after ${_t} will be truncated, so keep the index concise`, "- Keep the name, description, and type fields in memory files up-to-date with the content", "- Organize memory semantically by topic, not chronologically", "- Update or remove memories that turn out to be wrong or outdated", "- Do not write duplicate memories. First check if there is an existing memory you can update before writing a new one."];
const Ct = ["## Memory and other forms of persistence", "Memory is one of several persistence mechanisms available to you as you assist the user in a given conversation. The distinction is often that memory can be recalled in future conversations and should not be used for persisting information that is only useful within the scope of the current conversation.", "- When to use or update a plan instead of memory: If you are about to start a non-trivial implementation task and would like to reach alignment with the user on your approach you should use a Plan rather than saving this information to memory. Similarly, if you already have a plan within the conversation and you have changed your approach persist that change by updating the plan rather than saving a memory.", "- When to use or update tasks instead of memory: When you need to break your work in current conversation into discrete steps or keep track of your progress use tasks instead of saving to memory. Tasks are great for persisting information about the work that needs to be done in the current conversation, but memory should be reserved for information that will be useful in future conversations."];
const Pt = ["What you write here survives across sessions, interruptions and context compaction — a future session (or you, hours from now) can read it. Anything useful that exists only in your working context is one interruption away from being lost.", "", "Build this memory up over time so that future conversations start with a picture of who the user is, how they like to collaborate, and the context behind their work. That includes more than facts: tone and formality, how much to hedge versus assert, how closely to stick to cited sources, and preferred output formats or tools (e.g. \"always save financial reports as Excel, not markdown\").", "", "If the user explicitly asks you to remember something, save it immediately as whichever type fits best. If they ask you to forget something, find and remove the relevant entry.", "", ...bt, ...Et, "", ...Ot, "", ...Tt, "", ...St, "", ...Ct].join(`
`);
const He = "{{memoryDir}}";
function qe(e) {
  const {
    memoryDir: o,
    template: r,
    extraGuidelines: n = []
  } = e;
  let s;
  if (r && r.includes(He)) {
    s = r.replaceAll(He, () => o);
  } else {
    if (r) {
      t.logger.warn("cowork_memory_guidelines template is missing {{memoryDir}}; falling back to the in-file default");
    }
    s = `You have a persistent, file-based memory system at \`${o}\`. ${vt} ${Pt}`;
  }
  return [s, "", ...n].join(`
`);
}
const At = `## Sensitive personal information

Do not save the following to memory unless the user explicitly asks you to remember it:

- Protected attributes: race, ethnicity, national origin, religion, age, sex, sexual orientation, gender identity, immigration status, disability, serious illness, union membership
- Government identifiers: Social Security numbers, driver's license numbers, passport numbers, government ID numbers
- Financial account details: credit card numbers, bank account numbers
- Health information: medical conditions, diagnoses, lab results, mental health details, therapy or counseling
- Home or personal mailing addresses (work addresses are fine)

If any of the above appears in conversation context, complete the task but do not persist it to a memory file. If the user explicitly says "remember my address is X", saving it is acceptable — they've given consent.`;
function Xe() {
  const e = t.getFeatureValue("2860753854", "");
  if (typeof e == "string" && e.length > 0) {
    return e;
  } else {
    return At;
  }
}
const kt = /https?:\/\/[^\s<>"'`]+/g;
const Lt = /www\.[^\s<>"'`]+/g;
const $t = new RegExp("(?<!\\S)(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\\.)+[a-zA-Z]{2,63}(?:\\/[^\\s<>\"'`]*)?", "g");
function Mt(e) {
  const o = [];
  for (const r of e.matchAll(kt)) {
    const n = G(ce(r[0]));
    if (n) {
      o.push(n);
    }
  }
  for (const r of e.matchAll(Lt)) {
    const n = G(`https://${ce(r[0])}`);
    if (n) {
      o.push(n);
    }
  }
  for (const r of e.matchAll($t)) {
    const n = G(`https://${ce(r[0])}`);
    if (n) {
      o.push(n);
    }
  }
  return o;
}
function G(e) {
  let o;
  try {
    o = new URL(e);
  } catch {
    return null;
  }
  if (o.protocol !== "http:" && o.protocol !== "https:") {
    return null;
  } else {
    o.hash = "";
    if (o.pathname !== "/" && o.pathname.endsWith("/")) {
      o.pathname = o.pathname.slice(0, -1);
    }
    return o.href;
  }
}
const It = new Set(`.,;:!?'"`);
const Ft = {
  ")": "(",
  "]": "[",
  "}": "{"
};
function ce(e) {
  let o = e.length;
  while (o > 0) {
    const r = e[o - 1];
    if (It.has(r)) {
      o--;
      continue;
    }
    const n = Ft[r];
    if (n) {
      let s = 0;
      let i = 0;
      for (let c = 0; c < o; c++) {
        if (e[c] === n) {
          s++;
        } else if (e[c] === r) {
          i++;
        }
      }
      if (i > s) {
        o--;
        continue;
      }
    }
    break;
  }
  return e.slice(0, o);
}
const he = "[webFetch]";
const Y = 30000;
const ze = `Fetch the contents of a web page at a given URL.
Do not add www. to URLs that do not have them.
URLs must include the scheme: https://example.com is valid, example.com is not.`;
function Dt(e, o) {
  const r = e;
  if (!r || !Array.isArray(r.results)) {
    t.logger.debug(`${he} ingestWebSearchResultForProvenance: no results[] on input (${r == null ? "nullish" : typeof r})`);
    return 0;
  }
  const n = o.size;
  for (const s of r.results) {
    if (!!s && !!Array.isArray(s.content)) {
      for (const i of s.content) {
        const c = i == null ? undefined : i.url;
        if (typeof c != "string") {
          continue;
        }
        const y = G(c);
        if (y) {
          o.add(y);
        }
      }
    }
  }
  return o.size - n;
}
function le(e) {
  try {
    return new URL(e).host;
  } catch {
    return "(unparseable)";
  }
}
function K(e) {
  return {
    content: [{
      type: "text",
      text: e
    }],
    isError: true
  };
}
function Wt(e) {
  return {
    content: [{
      type: "text",
      text: e
    }]
  };
}
async function Ze(e, o, r, n, s) {
  const i = G(e.url);
  if (!i) {
    r(true);
    return K(`Invalid URL: ${e.url}`);
  }
  if (t.permissionModeSkipsProvenance(s == null ? undefined : s())) {
    o.add(i);
  }
  if (!o.has(i)) {
    const a = new URL(i).hostname;
    if (n && (await n(a, i))) {
      o.add(i);
    } else {
      r(true);
      return K(n ? "Web fetch was not allowed." : "URL not in provenance set. web_fetch can only retrieve URLs that appeared in a user message or a prior web_fetch result. Ask the user to include the URL in a message first.");
    }
  }
  const c = await t.getLastActiveOrg();
  if (!c) {
    r(true);
    return K("No active organization");
  }
  const y = e.timeout_ms ?? Y;
  const d = new AbortController();
  const m = setTimeout(() => d.abort(), y);
  let l;
  try {
    l = await Ye.net.fetch(`${t.claudeAiUrl()}/api/organizations/${c}/cowork/web_fetch`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        url: e.url,
        allowed_urls: Array.from(o)
      }),
      signal: d.signal
    });
  } catch (a) {
    clearTimeout(m);
    const p = a instanceof Error ? a.message : String(a);
    r(true);
    return K(`Fetch failed: ${p}`);
  }
  if (!l.ok) {
    const a = await l.text().catch(() => "");
    clearTimeout(m);
    if (l.status === 403 && a.includes("url_not_allowed")) {
      t.logger.error(`${he} client/server provenance mismatch: client accepted ${le(i)} but server rejected. allowed_urls size=${o.size}`);
    }
    r(true);
    return K(`HTTP ${l.status}: ${a}`);
  }
  let u;
  try {
    u = await l.json();
  } catch (a) {
    clearTimeout(m);
    r(true);
    return K(`Failed to parse response: ${a}`);
  }
  clearTimeout(m);
  if (u.destination_url) {
    const a = G(u.destination_url);
    if (a) {
      o.add(a);
    }
  }
  for (const a of u.links) {
    const p = G(a);
    if (p) {
      o.add(p);
    }
  }
  t.logger.info(`${he} via claude.ai: ${le(u.url)}${u.destination_url ? ` → ${le(u.destination_url)}` : ""}, ${u.text.length} chars, ${u.links.length} same-site links`);
  r(false);
  const h = (u.title ? `${u.title}
` : "") + u.url + (u.destination_url ? `
→ ${u.destination_url}` : "") + (u.content_type ? `
Content-Type: ${u.content_type}` : "");
  return Wt(`${h}

${u.text}`);
}
function Ut(e) {
  const o = X.tool(t.WORKSPACE_WEB_FETCH, ze, {
    url: t.stringType().url().describe("The URL to fetch."),
    timeout_ms: t.numberType().int().positive().max(Y).optional().describe(`Timeout in milliseconds. Default ${Y}.`)
  }, async r => {
    const n = Date.now();
    const s = i => void t.logCoworkEvent("lam_mcp_tool_call_completed", {
      server_name: t.WORKSPACE_MCP_SERVER,
      server_type: "internal",
      server_uuid: t.INTERNAL_SERVER_UUIDS[t.WORKSPACE_MCP_SERVER],
      tool_name: `internal__${t.WORKSPACE_MCP_SERVER}__${t.WORKSPACE_WEB_FETCH}`,
      is_error: i,
      duration_ms: Date.now() - n,
      session_id: e.sessionId,
      session_type: e.sessionType
    });
    return Ze(r, e.getWebFetchAllowedUrls(), s, e.requestWebFetchApproval, e.getSdkPermissionMode);
  });
  return X.createSdkMcpServer({
    name: t.WORKSPACE_MCP_SERVER,
    version: "1.0.0",
    tools: [o],
    alwaysLoad: true
  });
}
const V = "[workspaceMcpServer]";
const Ne = "cowork-egress-blocked";
const ue = 45000;
const Ht = 5000;
const Nt = 30000;
const te = 1000000;
const je = 5;
const Be = new Set();
let jt;
function Bt() {
  return jt ??= Ye.session.fromPartition("workspace-web-fetch");
}
function R(e) {
  return {
    content: [{
      type: "text",
      text: e
    }],
    isError: true
  };
}
function Ge(e, o, r, n, s, i) {
  const c = new Map([...o].map(([h, a]) => [t.toGuestCompatibleMountName(a), h]));
  const y = new Map((r ?? []).map(h => [t.mountPathOf(h), h.display]));
  const d = /[/\s;&|()<>,}:="'$`]/;
  const m = (h, a) => {
    let p = -1;
    while ((p = h.indexOf(a, p + 1)) !== -1) {
      const w = h[p + a.length];
      if (w === undefined || d.test(w)) {
        return true;
      }
    }
    return false;
  };
  const l = [];
  for (const h of [...new Set(e)].slice(0, 20)) {
    const a = i + h;
    if (m(n, a)) {
      const p = c.get(h);
      l.push(y.get(p ?? "") ?? p ?? h);
    }
  }
  if (l.length === 0) {
    return "";
  } else {
    return `

[Note: ${new Intl.ListFormat("en", {
      type: "conjunction"
    }).format(l.map(h => `"${h}"`))} ${t.MOUNT_FAILED_TAG_HOST_LOOP}.]`;
  }
}
function Ke(e) {
  return {
    content: [{
      type: "text",
      text: e
    }]
  };
}
function Gt(e, o) {
  if (o === "*") {
    return true;
  }
  const r = e.toLowerCase();
  const n = o.toLowerCase();
  if (n.startsWith("*.")) {
    return r.endsWith(n.slice(1));
  } else {
    return r === n;
  }
}
function Qe(e, o) {
  if (e.protocol !== "http:" && e.protocol !== "https:") {
    return `URL scheme "${e.protocol}" is not allowed. Use http or https.`;
  }
  if (t.isLocalOrPrivateHost(e.hostname)) {
    return `Host "${e.hostname}" is a local or private address.`;
  }
  if (!o || o.length === 0) {
    return `No network allowlist is configured for this session (${Ne}). The web_fetch tool is disabled.`;
  }
  if (o.includes("*")) {
    return null;
  }
  if (!o.some(r => Gt(e.hostname, r))) {
    const r = t.getDeploymentMode().type === "3p" ? "Ask your administrator to add this domain to the Cowork egress allowlist (`coworkEgressAllowedHosts`)." : "The user can add it in Settings → Capabilities (or ask their workspace admin on Team/Enterprise).";
    return `Host "${e.hostname}" is not on the network allowlist (${Ne}). ${r} Allowed: ${o.join(", ")}`;
  }
  return null;
}
async function Kt(e, o) {
  const r = Symbol("booting");
  let n;
  try {
    if ((await Promise.race([e, new Promise(i => {
      n = setTimeout(() => i(r), o);
    })])) === r) {
      return "booting";
    } else {
      return "ready";
    }
  } catch {
    return "failed";
  } finally {
    if (n) {
      clearTimeout(n);
    }
  }
}
async function xt(e, o) {
  let r;
  const n = i => {
    const c = i == null ? undefined : i.failedMounts;
    if (c !== undefined) {
      r = c;
    }
  };
  const s = () => t.runOneShotInVM({
    ...e,
    isResume: true
  }, o);
  try {
    return await s();
  } catch (i) {
    n(i);
    const c = i instanceof Error ? i.message : String(i);
    t.logger.info(`${V} bash resume failed, retrying with create: ${c}`);
    try {
      return await t.runOneShotInVM({
        ...e,
        isResume: false
      }, o);
    } catch (y) {
      n(y);
      const d = y instanceof Error ? y.message : String(y);
      t.logger.info(`${V} bash create failed (${d}), retrying resume`);
      try {
        return await s();
      } catch (m) {
        n(m);
        const l = new Error(`bash failed on resume, create, and re-resume. resume: ${c}; create: ${d}`);
        if (r != null && r.length) {
          l.failedMounts = r;
        }
        throw l;
      }
    }
  }
}
function B(e, o, r, n, s) {
  t.logCoworkEvent("lam_mcp_tool_call_completed", {
    server_name: t.WORKSPACE_MCP_SERVER,
    server_type: "internal",
    server_uuid: t.INTERNAL_SERVER_UUIDS[t.WORKSPACE_MCP_SERVER],
    tool_name: `internal__${t.WORKSPACE_MCP_SERVER}__${o}`,
    is_error: n,
    duration_ms: Date.now() - r,
    session_id: e.sessionId,
    session_type: e.sessionType,
    ...((s == null ? undefined : s.vm_status) && {
      vm_status: s.vm_status
    }),
    ...((s == null ? undefined : s.target_folder_kind) && {
      target_folder_kind: s.target_folder_kind
    }),
    ...((s == null ? undefined : s.vm_was_ready) !== undefined && {
      internal_server_name: s.vm_was_ready ? "workspace_bash_vm_ready" : "workspace_bash_vm_not_ready"
    })
  });
}
function Vt(e) {
  const o = t.getParsedFeatureValueForKey("1978029737", "workspaceBashWaitLonger", false, t.booleanType());
  const r = t.getParsedFeatureValueForKey("1978029737", "bashHostOnlyIntercept", true, t.booleanType());
  const n = X.tool(t.WORKSPACE_BASH, "Run a shell command in the session's isolated Linux workspace. Your connected folders are mounted under /sessions/<session>/mnt/ — the Shell access section of your system prompt lists the exact path for each folder. Each bash call is independent (no cwd/env carryover). Use absolute paths. The workspace boots in the background and may not be ready on the first call; if so, you'll see 'Workspace still starting' — wait a few seconds and retry.", {
    command: t.stringType().describe("Shell command to execute (passed to bash -c)."),
    timeout_ms: t.numberType().int().positive().max(ue).optional().describe(`Timeout in milliseconds. Default ${ue}.`)
  }, async (c, y) => {
    var W;
    var U;
    var H;
    var N;
    var E;
    var C;
    const d = Date.now();
    const m = e.ensureVmReady();
    const l = e.computeBashMounts();
    const u = (W = e.getResolvedFolders) == null ? undefined : W.call(e);
    const h = `/sessions/${e.vmProcessName}/mnt/`;
    const a = new Map();
    for (const [f, P] of l.nameByFolder ?? []) {
      a.set(f, h + P);
    }
    const p = (U = t.findContainingResolvedFolder(c.command, u, a)) == null ? undefined : U.kind;
    const w = r ? t.findBashUnreachableTarget(c.command, u, a, [`/sessions/${e.vmProcessName}`, "/tmp"]) : undefined;
    if (w) {
      const f = t.folderKindHintsOf(w);
      B(e, t.WORKSPACE_BASH, d, true, {
        target_folder_kind: p
      });
      const P = (f == null ? undefined : f.tag) ?? "host-only folder";
      const A = f != null && f.copyHint ? ` ${f.copyHint}` : "";
      return R(`That command targets ${w.display}, which bash cannot reach from the sandbox (${P}).${A}`);
    }
    const v = !Be.has(e.sessionId);
    const T = o && v ? Nt : Ht;
    const _ = t.getLastVMStartupError();
    const F = ((H = t.getSupportedFeaturesSync().yukonSilver) == null ? undefined : H.status) !== "supported";
    const O = F || _ ? "failed" : await Kt(m, T);
    if (o && v && O !== "failed") {
      Be.add(e.sessionId);
    }
    const L = y == null ? undefined : y.signal;
    if (L != null && L.aborted) {
      B(e, t.WORKSPACE_BASH, d, true, {
        vm_status: O
      });
      return R("Cancelled.");
    }
    t.logger.info(`${V} bash: vmStatus=${O} after ${Date.now() - d}ms wait, cmdLen=${c.command.length}, vmCwd=${l.vmCwd}, mounts=${Object.keys(l.mounts).join(",")}`);
    if (O === "booting") {
      B(e, t.WORKSPACE_BASH, d, true, {
        vm_was_ready: false,
        vm_status: "booting",
        target_folder_kind: p
      });
      return R("Workspace still starting. The isolated Linux environment is booting in the background (usually 10–30 seconds). Try again shortly.");
    }
    if (O === "failed") {
      B(e, t.WORKSPACE_BASH, d, true, {
        vm_was_ready: false,
        vm_status: "failed",
        target_folder_kind: p
      });
      const f = F ? "not supported on this device" : _ ?? t.getLastVMStartupError();
      const P = f ? ` (${f.slice(0, 200)})` : "";
      return R(`Workspace unavailable. The isolated Linux environment failed to start${P}. You can still use file tools directly.`);
    }
    try {
      const f = await xt({
        processName: e.vmProcessName,
        command: "bash",
        args: ["-c", c.command],
        cwd: l.vmCwd,
        env: {
          TZ: Intl.DateTimeFormat().resolvedOptions().timeZone
        },
        additionalMounts: l.mounts,
        allowedDomains: e.disableBashNetwork ? [] : e.allowedDomains
      }, c.timeout_ms ?? ue);
      t.logger.info(`${V} bash done: exit=${f.exitCode}, duration=${Date.now() - d}ms, outputBytes=${f.output.length}`);
      B(e, t.WORKSPACE_BASH, d, f.exitCode !== 0, {
        vm_was_ready: true,
        vm_status: O,
        target_folder_kind: p
      });
      let P = "";
      if ((N = f.failedMounts) != null && N.length) {
        if ((E = e.onBashFailedMounts) != null) {
          E.call(e, f.failedMounts, l.nameByFolder ?? new Map(), l.mountSetGen);
        }
        P = Ge(f.failedMounts, l.nameByFolder ?? new Map(), u, c.command, l.vmCwd, h);
      }
      const A = f.output.length > 0 ? f.output : "(no output)";
      if (f.exitCode === 0) {
        return Ke(A + P);
      } else {
        return R(`Exit code ${f.exitCode}
${A}${P}`);
      }
    } catch (f) {
      const P = f instanceof Error ? f.message : String(f);
      const A = f == null ? undefined : f.failedMounts;
      let z = "";
      if (A != null && A.length) {
        if ((C = e.onBashFailedMounts) != null) {
          C.call(e, A, l.nameByFolder ?? new Map(), l.mountSetGen);
        }
        z = Ge(A, l.nameByFolder ?? new Map(), u, c.command, l.vmCwd, h);
      }
      t.logger.warn(`${V} bash failed:`, f);
      B(e, t.WORKSPACE_BASH, d, true, {
        vm_was_ready: true,
        vm_status: O,
        target_folder_kind: p
      });
      return R(P + z);
    }
  });
  const s = t.getParsedFeatureValueForKey("1978029737", "coworkWebFetchViaApi", false, t.booleanType());
  const i = X.tool(t.WORKSPACE_WEB_FETCH, ze, {
    url: t.stringType().url().describe("The URL to fetch."),
    timeout_ms: t.numberType().int().positive().max(Y).optional().describe(`Timeout in milliseconds. Default ${Y}.`)
  }, async c => {
    var u;
    var h;
    var a;
    const y = Date.now();
    const d = p => B(e, t.WORKSPACE_WEB_FETCH, y, p);
    if (s && (e.getWebFetchAllowedUrls().size > 0 || e.requestWebFetchApproval || t.permissionModeSkipsProvenance((u = e.getSdkPermissionMode) == null ? undefined : u.call(e)))) {
      return Ze(c, e.getWebFetchAllowedUrls(), d, e.requestWebFetchApproval, e.getSdkPermissionMode);
    }
    let m;
    try {
      m = new URL(c.url);
    } catch {
      d(true);
      return R(`Invalid URL: ${c.url}`);
    }
    const l = c.timeout_ms ?? Y;
    for (let p = 0; p <= je; p++) {
      const w = Qe(m, e.allowedDomains);
      if (w) {
        d(true);
        return R(p === 0 ? w : `Redirect to ${m.href} blocked: ${w}`);
      }
      const v = new AbortController();
      const T = setTimeout(() => v.abort(), l);
      let _;
      try {
        _ = await Bt().fetch(m.href, {
          redirect: "manual",
          signal: v.signal
        });
      } catch (E) {
        clearTimeout(T);
        const C = E instanceof Error ? E.message : String(E);
        d(true);
        return R(`Fetch failed: ${C}`);
      }
      if (_.status >= 300 && _.status < 400) {
        clearTimeout(T);
        if ((h = _.body) != null) {
          h.cancel();
        }
        const E = _.headers.get("location");
        if (!E) {
          d(true);
          return R(`Redirect ${_.status} from ${m.href} had no Location header.`);
        }
        try {
          m = new URL(E, m);
        } catch {
          d(true);
          return R(`Redirect ${_.status} from ${m.href} had invalid Location: ${E}`);
        }
        continue;
      }
      const F = (a = _.body) == null ? undefined : a.getReader();
      const O = [];
      let L = 0;
      let W = false;
      if (F) {
        try {
          while (true) {
            const {
              done: E,
              value: C
            } = await F.read();
            if (E) {
              break;
            }
            if (L + C.length > te) {
              O.push(C.subarray(0, te - L));
              L = te;
              W = true;
              F.cancel();
              break;
            }
            L += C.length;
            O.push(C);
          }
        } catch (E) {
          clearTimeout(T);
          const C = E instanceof Error ? E.message : String(E);
          d(true);
          return R(`Body read failed after ${L} bytes (${Date.now() - y}ms): ${C}`);
        }
      }
      clearTimeout(T);
      const U = Buffer.concat(O);
      const H = U.toString("utf-8");
      t.logger.info(`${V} web_fetch: ${_.status} from ${m.host}, ${U.length} bytes, ${p} redirects, ${Date.now() - y}ms`);
      const N = `HTTP ${_.status} ${_.statusText}
Content-Type: ${_.headers.get("content-type") ?? "(unknown)"}${W ? `
(Truncated at ${te} bytes.)` : ""}`;
      d(!_.ok);
      if (_.ok) {
        return Ke(`${N}

${H}`);
      } else {
        return R(`${N}

${H}`);
      }
    }
    d(true);
    return R(`Gave up after ${je} redirects starting from ${c.url}.`);
  });
  return X.createSdkMcpServer({
    name: t.WORKSPACE_MCP_SERVER,
    version: "1.0.0",
    tools: [n, i],
    alwaysLoad: true
  });
}
const Yt = ["Write", "Edit", "MultiEdit"];
async function qt(e) {
  if (!Yt.includes(e.toolName)) {
    return;
  }
  const {
    resolved: o,
    inputPath: r
  } = e;
  if (e.isChat && (await t.isPathContainedInFolders(o, e.chatWritableRoots))) {
    return;
  }
  const n = `\`${r}\` is read-only in this session. Read it and write a modified copy to a bare filename in the scratch directory instead.`;
  if (await t.isPathContainedInFolders(o, e.uploadsReadOnlyRoots)) {
    return {
      decision: "block",
      reason: e.isChat ? n : `\`${r}\` is read-only in this session — it is a hardlink to the user's original file, so writing here would overwrite it on their disk. If this document has a working copy (a Documents working file the user can see and export), edit that instead. Otherwise write your changes to a new file under the outputs directory.`
    };
  }
  if (await t.isPathContainedInFolders(o, e.spooledProjectsReadOnlyRoots)) {
    return {
      decision: "block",
      reason: e.isChat ? n : `\`${r}\` is read-only in this session (spooled tool results). Write a modified copy under the outputs directory instead.`
    };
  }
  if (!e.isChat && (await t.isPathContainedInFolders(o, e.readOnlyPluginPaths))) {
    return {
      decision: "block",
      reason: `\`${r}\` is read-only in this session (plugin, skill, or knowledge content). Write a modified copy under the outputs directory instead.`
    };
  }
}
const me = b.join(Ve.tmpdir(), "claude-hostloop-plugins");
const Xt = new t.Mutex();
async function fe(e) {
  if (!e.includes(" ")) {
    return e;
  }
  const o = me;
  const r = ut.createHash("sha256").update(e).digest("hex").slice(0, 16);
  const n = b.join(o, r);
  return Xt.runExclusive(async () => {
    await x.mkdir(o, {
      recursive: true
    });
    try {
      if ((await x.readlink(n)) === e) {
        return n;
      }
      await x.rm(n, {
        force: true
      });
    } catch {}
    try {
      await x.symlink(e, n, "dir");
    } catch (s) {
      if (s.code === "EEXIST") {
        try {
          if ((await x.readlink(n)) === e) {
            return n;
          }
        } catch {}
      }
      t.logger.warn(`[HostLoop] Could not stage plugin symlink, falling back to raw path (hooks with unquoted \${CLAUDE_PLUGIN_ROOT} will break): ${n} -> ${e}: ${String(s)}`);
      return e;
    }
    t.logger.info(`[HostLoop] Staged plugin: ${n} -> ${e}`);
    return n;
  });
}
async function Je(e) {
  if (process.platform === "win32") {
    return e;
  }
  const o = await fe(e);
  if (o === e) {
    return e;
  }
  const r = b.join(e, "plugins");
  for (const n of ["known_marketplaces.json", "installed_plugins.json"]) {
    const s = b.join(r, n);
    try {
      const i = await x.readFile(s, "utf-8");
      const c = i.replaceAll(e, () => o);
      if (c !== i) {
        await t.writeFileAtomic(s, c);
        t.logger.info(`[HostLoop] Rewrote ${n} paths through staged config dir`);
      }
    } catch (i) {
      if (i.code !== "ENOENT") {
        t.logger.warn(`[HostLoop] Failed to rewrite ${s} through staged config dir:`, i);
      }
    }
  }
  return o;
}
function zt(e) {
  return e.filter(o => o.startsWith("mcp__") || t.HOST_LOOP_SAFE_BUILTIN_TOOLS.includes(o));
}
const pe = ["file_path", "path"];
const Zt = "Path is outside allowed working directories";
function xe(e, o) {
  if (t.HOST_LOOP_PATH_GATED_BUILTIN_TOOLS.includes(e)) {
    for (const r of pe) {
      const n = o[r];
      if (typeof n == "string" && (n === "/sessions" || n.startsWith("/sessions/"))) {
        t.logger.info(`[canUseTool:HostLoop] ${e} → deny (VM path on host: ${n})`);
        return {
          behavior: "deny",
          message: `\`${n}\` is a VM path. In this session the ${e} tool runs on the host filesystem, where \`/sessions/...\` doesn't exist. Use the host path for this file (connected folders are available at their real locations), or use the \`bash\` tool — which runs inside the VM — to operate on \`/sessions/...\` paths.`
        };
      }
    }
  }
}
function Qt(e, o, r, n) {
  if (!t.HOST_LOOP_PATH_GATED_BUILTIN_TOOLS.includes(e)) {
    return;
  }
  const s = pe.map(i => o[i]).find(i => typeof i == "string");
  if (s !== undefined) {
    t.logger.info(`[canUseTool:HostLoop] ${e} → deny (${s}; reason: ${r ?? "none"})`);
    if (r === Zt) {
      return {
        behavior: "deny",
        message: n === t.SESSION_TYPE_CHAT ? `\`${s}\` is outside this session's scratch directory, so ${e} can't reach it. Use a bare filename to stay inside the scratch directory; for files on the user's computer, suggest starting a Cowork task instead.` : `\`${s}\` is outside this session's connected folders, so ${e} can't reach it. If this is a user project or working folder, request it with the \`${t.REQUEST_COWORK_DIRECTORY}\` tool — the user will be asked to approve it. Don't request system or application-internal directories.`
      };
    } else {
      return {
        behavior: "deny",
        message: n === t.SESSION_TYPE_CHAT ? `${e} on \`${s}\` is blocked in this session — it resolves to a protected location or a path outside the scratch directory. Use a bare filename to stay inside the scratch directory.` : `${e} on \`${s}\` is blocked in this session — it resolves to a protected location or a path outside the connected folder. Work on a copy under the session outputs folder if you need to modify it.`
      };
    }
  }
}
const oe = e => `Read(${t.folderToRulePattern(b.join(e, "projects")).replace(/\/\*\*$/, "/**/tool-results/**")})`;
const Jt = ["Write", "Edit", "MultiEdit"];
function eo(e, o, r, n, s, i, c, y = s) {
  const d = c ? t.folderToRulePattern(c) : null;
  return [...((e == null ? undefined : e.filter(m => !t.HOST_LOOP_EXCLUDED_BUILTIN_TOOLS.includes(m) && !t.HOST_LOOP_PATH_GATED_BUILTIN_TOOLS.includes(m))) ?? []), ...t.WORKSPACE_ALLOWED_TOOLS, ...t.buildFolderPermissionRules([r, ...o]), `Read(${t.folderToRulePattern(n)})`, oe(s), ...(y !== s ? [oe(y)] : []), ...t.buildFolderReadRules(i ?? []), ...(d ? [`Edit(${d})`, `Write(${d})`, `Read(${d})`] : [])];
}
async function et(e, o) {
  var Ce;
  var Pe;
  var Ae;
  var ke;
  var Le;
  var $e;
  var Me;
  const {
    sessionId: r,
    sessionType: n,
    vmProcessName: s,
    apiHost: i,
    hostCwd: c,
    documentFunnelEnabled: y,
    ensureVmStarted: d,
    hostBinaryPath: m,
    hostClaudeConfigDir: l,
    hostOutputsDir: u,
    hostUploadsDir: h,
    autoMemoryHostDir: a,
    memoryIndexSnapshot: p,
    memoryGuidelinesTemplate: w,
    getUserSelectedFolders: v,
    getFolderPermissionPaths: T,
    getNetworkDriveFolders: _,
    getResolvedFolders: F,
    getMountSetGen: O,
    demoteFailedMounts: L,
    getFileDeleteApprovedMounts: W,
    isBridgeSession: U,
    getWebFetchAllowedUrls: H,
    requestWebFetchApproval: N,
    getSdkPermissionMode: E,
    isFirstTurn: C,
    onStderr: f,
    onSpawnConfirmed: P,
    onFirstStdout: A,
    allowedDomains: z,
    disableBashNetwork: tt,
    readOnlyPluginPaths: re,
    getMidSessionReadOnlyPaths: ne,
    skillsPluginPath: se,
    pluginMounts: ot,
    projectContexts: rt
  } = o;
  if (!m) {
    throw new Error("Host Claude Code binary not available. Check that the download completed.");
  }
  await t.mkdirPrivate(c);
  await t.mkdirPrivate(h);
  await t.mkdirPrivate(b.join(l, "projects"));
  let $ = a;
  if ($) {
    try {
      await t.mkdirPrivate($);
    } catch (g) {
      t.logger.warn(`[HostLoop] Failed to create auto-memory dir ${$} — degrading to no-memory:`, g);
      $ = null;
    }
  }
  const ye = t.getUntrustedLaunchOptions({
    cmd: m,
    args: []
  });
  e.pathToClaudeCodeExecutable = ye.cmd;
  e.executableArgs = ye.args;
  e.cwd = c;
  const ge = pt({
    onStderr: f,
    onSpawnConfirmed: P,
    onFirstStdout: A
  });
  if (ge) {
    e.spawnClaudeCodeProcess = ge;
  } else {
    delete e.spawnClaudeCodeProcess;
  }
  if (Array.isArray(e.tools)) {
    e.tools = zt(e.tools);
  }
  const Z = T();
  const j = await Je(l);
  e.allowedTools = eo(e.allowedTools, Z, u, h, l, re, $, j);
  const _e = (Ce = e.env) == null ? undefined : Ce.CLAUDE_CODE_GIT_BASH_PATH;
  const [we, ae] = await Promise.all([t.allPaths().catch(() => {}), t.getSystemCABundlePath()]);
  e.env = {
    ...e.env,
    ...t.getWin32EssentialEnv(),
    ...(we && {
      PATH: we.join(b.delimiter)
    }),
    ...(process.env.HOME && {
      HOME: process.env.HOME
    }),
    ...(process.env.LOGNAME && {
      LOGNAME: process.env.LOGNAME
    }),
    ...(process.env.SHELL && {
      SHELL: process.env.SHELL
    }),
    ...(process.env.TERM && {
      TERM: process.env.TERM
    }),
    ...(process.env.USER && {
      USER: process.env.USER
    }),
    CLAUDE_CONFIG_DIR: j,
    ...(y === true ? {
      DOCUMENTS_MCP_SCRATCH_ROOT: b.join(c, De.COWORK_SCRATCH_DIRNAME)
    } : {}),
    API_FORCE_IDLE_TIMEOUT: "1",
    ...(_e ? {
      CLAUDE_CODE_GIT_BASH_PATH: _e
    } : {}),
    ...($ ? (() => {
      const g = Xe();
      const S = t.isFeatureEnabled("1696890383");
      return {
        CLAUDE_COWORK_MEMORY_PATH_OVERRIDE: $,
        ...(S && {
          CLAUDE_COWORK_MEMORY_GUIDELINES: qe({
            template: w,
            memoryDir: $,
            extraGuidelines: [g]
          })
        }),
        ...(p !== undefined && {
          CLAUDE_COWORK_MEMORY_INDEX_CONTENT: p
        }),
        CLAUDE_COWORK_MEMORY_EXTRA_GUIDELINES: g
      };
    })() : {
      CLAUDE_CODE_DISABLE_AUTO_MEMORY: "1"
    }),
    ...(ae !== undefined ? {
      NODE_EXTRA_CA_CERTS: ae
    } : {
      NODE_USE_SYSTEM_CA: "1"
    })
  };
  e.env = t.mergeNetworkEnv(await t.resolveSystemProxyEnv(i), e.env);
  e.env = {
    ...e.env,
    ...t.grpcProxyDowngradeEntries(e.env)
  };
  if (e.env.OTEL_EXPORTER_OTLP_PROTOCOL === "grpc" && (await De.findSettingsProxySource(c)) !== null) {
    e.env = {
      ...e.env,
      OTEL_EXPORTER_OTLP_PROTOCOL: "http/protobuf"
    };
  }
  const ve = t.grpcTlsRootsForSpawn({
    effectiveProtocol: (Pe = e.env) == null ? undefined : Pe.OTEL_EXPORTER_OTLP_PROTOCOL,
    existingSpawnValue: (Ae = e.env) == null ? undefined : Ae.GRPC_DEFAULT_SSL_ROOTS_FILE_PATH,
    desktopProcessValue: process.env.GRPC_DEFAULT_SSL_ROOTS_FILE_PATH,
    caBundlePath: ae
  });
  if (ve !== undefined) {
    e.env = {
      ...e.env,
      GRPC_DEFAULT_SSL_ROOTS_FILE_PATH: ve
    };
  }
  if (Z.length > 0) {
    e.additionalDirectories = [...(e.additionalDirectories ?? []), ...Z];
  }
  e.disallowedTools = [...(e.disallowedTools ?? []), ...t.HOST_LOOP_EXCLUDED_BUILTIN_TOOLS];
  e.toolAliases = {
    Bash: t.MCP_WORKSPACE_BASH,
    WebFetch: t.MCP_WORKSPACE_WEB_FETCH
  };
  const ie = n === t.SESSION_TYPE_CHAT;
  const be = [c, u];
  const Ee = [h];
  const Te = [b.join(l, "projects"), ...(j !== l ? [b.join(j, "projects")] : [])];
  const nt = [...Ee, ...Te];
  const st = ie ? [...be, ...nt] : [c, u, h, b.join(l, "projects"), ...(j !== l ? [b.join(j, "projects")] : []), ...($ ? [$] : []), ...(se ? [se] : []), ...(re ?? []), ...(e.additionalDirectories ?? [])];
  e.hooks = {
    ...e.hooks,
    PreToolUse: [...(((ke = e.hooks) == null ? undefined : ke.PreToolUse) ?? []), {
      matcher: [...t.HOST_LOOP_PATH_GATED_BUILTIN_TOOLS, "MultiEdit"].join("|"),
      hooks: [async g => {
        if (g.hook_event_name !== "PreToolUse") {
          return {};
        }
        const S = g.tool_input;
        const k = xe(g.tool_name, S);
        if ((k == null ? undefined : k.behavior) === "deny") {
          return {
            decision: "block",
            reason: k.message
          };
        }
        const I = pe.map(M => S[M]).find(M => typeof M == "string");
        if (!I) {
          return {};
        }
        const q = t.expandTildePath(I.trim());
        const Ie = b.isAbsolute(q) ? q : b.resolve(c, q);
        let Q;
        try {
          Q = await t.resolveFilePath(Ie, true);
        } catch (M) {
          if ((M == null ? undefined : M.code) !== "ENOENT") {
            t.logger.info(`[canUseTool:HostLoop] ${g.tool_name} → block (PreToolUse resolve failed: ${String(M)})`);
            return {
              decision: "block",
              reason: `\`${I}\` could not be safely resolved (${M instanceof Error ? M.message : String(M)}).`
            };
          }
          Q = Ie;
        }
        const ct = Jt.includes(g.tool_name);
        const Fe = await qt({
          toolName: g.tool_name,
          resolved: Q,
          inputPath: I,
          isChat: ie,
          chatWritableRoots: be,
          uploadsReadOnlyRoots: Ee,
          spooledProjectsReadOnlyRoots: Te,
          readOnlyPluginPaths: re ?? []
        });
        if (Fe !== undefined) {
          return Fe;
        }
        const lt = [...st, ...T(), ...(ie || ct ? [] : (ne == null ? undefined : ne()) ?? [])];
        if (await t.isPathContainedInFolders(Q, lt)) {
          return {};
        } else {
          t.logger.info(`[canUseTool:HostLoop] ${g.tool_name} → block (PreToolUse: ${I})`);
          return {
            decision: "block",
            reason: n === t.SESSION_TYPE_CHAT ? `\`${I}\` is outside this session's scratch directory, so ${g.tool_name} can't reach it. Use a bare filename to stay inside the scratch directory; for files on the user's computer, suggest starting a Cowork task instead.` : `\`${I}\` is outside this session's connected folders, so ${g.tool_name} can't reach it. If this is a user project or working folder, request it with the \`${t.REQUEST_COWORK_DIRECTORY}\` tool — the user will be asked to approve it. Don't request system or application-internal directories.`
          };
        }
      }]
    }]
  };
  const Se = e.canUseTool;
  if (Se) {
    e.canUseTool = async (g, S, k) => xe(g, S) ?? Qt(g, S, k.decisionReason, n) ?? Se(g, S, k);
  }
  e.debugFile &&= b.join(u, "sdk-debug.txt");
  e.stderr = f ?? (g => {
    t.logger.warn(`[HostLoop] cli.js stderr: ${g.trimEnd()}`);
  });
  let Re = false;
  const at = () => {
    const g = d();
    if (!Re) {
      Re = true;
      g.catch(S => {
        t.logger.warn("[HostLoop] VM boot failed; bash proxy unavailable:", S);
      });
    }
    return g;
  };
  const Oe = () => {
    const g = v();
    const {
      mounts: S,
      vmCwdMountName: k,
      nameByFolder: I
    } = to(g, _(), u, h, l, W(), U, se, ot, $, rt);
    const q = `/sessions/${s}/mnt/${k}`;
    return {
      mounts: S,
      vmCwd: q,
      nameByFolder: I,
      mountSetGen: O()
    };
  };
  const it = {
    [t.WORKSPACE_MCP_SERVER]: Vt({
      sessionId: r,
      sessionType: n,
      vmProcessName: s,
      computeBashMounts: Oe,
      allowedDomains: z,
      disableBashNetwork: tt,
      getWebFetchAllowedUrls: H,
      requestWebFetchApproval: N,
      getSdkPermissionMode: E,
      ensureVmReady: at,
      getResolvedFolders: F,
      onBashFailedMounts: L
    })
  };
  if (C) {
    t.logCoworkEvent("lam_host_loop_session_started", {
      session_id: r,
      platform: process.platform,
      has_workspace_folders: Z.length > 0
    });
  }
  t.logger.info("[HostLoop] sdkOptions after patch: %o", {
    cwd: e.cwd,
    executable: e.pathToClaudeCodeExecutable,
    executableArgs: e.executableArgs,
    hasSpawnClaudeCodeProcess: !!e.spawnClaudeCodeProcess,
    toolCount: Array.isArray(e.tools) ? e.tools.length : "(preset)",
    allowedToolCount: (Le = e.allowedTools) == null ? undefined : Le.length,
    plugins: e.plugins,
    debugFile: e.debugFile,
    additionalDirectories: e.additionalDirectories,
    envKeys: e.env ? Object.keys(e.env).sort() : [],
    CLAUDE_CONFIG_DIR: ($e = e.env) == null ? undefined : $e.CLAUDE_CONFIG_DIR,
    model: e.model,
    effort: e.effort,
    maxThinkingTokens: e.maxThinkingTokens,
    CLAUDE_CODE_AUTO_COMPACT_WINDOW: (Me = e.env) == null ? undefined : Me.CLAUDE_CODE_AUTO_COMPACT_WINDOW,
    autoMemoryHostDir: a
  });
  return {
    workspaceMcpServer: it,
    onFolderAddedForBash: g => {
      const {
        nameByFolder: S
      } = Oe();
      const k = S.get(g);
      t.logger.info(`[HostLoop] Folder added: ${g} → /mnt/${k} — next bash call will mount it`);
      return k ?? "";
    },
    stagedConfigDir: j
  };
}
function to(e, o, r, n, s, i, c, y, d, m, l) {
  const u = {};
  let h;
  const a = t.toGuestCompatibleMountName("outputs");
  const p = {
    path: t.guestCompatibleRootPath(r),
    mode: J.resolveWorkspaceMountMode(a, i, c)
  };
  let w;
  if (e.length === 0) {
    u[a] = p;
    h = a;
    w = new Map();
  } else {
    w = J.deriveMountNamesIncremental(e, J.HOST_LOOP_RESERVED_MOUNT_NAMES);
    for (const [v, T] of w) {
      if (o.has(v)) {
        continue;
      }
      const _ = t.toGuestCompatibleMountName(T);
      h ??= _;
      u[_] = {
        path: t.guestCompatibleRootPath(v),
        mode: J.resolveWorkspaceMountMode(_, i, c),
        optional: true
      };
    }
    h ??= a;
  }
  u[t.toGuestCompatibleMountName("uploads")] = {
    path: t.guestCompatibleRootPath(n),
    mode: "ro"
  };
  if (y) {
    u[t.toGuestCompatibleMountName(".claude/skills")] = {
      path: t.guestCompatibleRootPath(b.join(y, "skills")),
      mode: "ro"
    };
  }
  u[t.toGuestCompatibleMountName(".claude/projects")] = {
    path: t.guestCompatibleRootPath(b.join(s, "projects")),
    mode: "ro"
  };
  u[a] = p;
  for (const {
    mountName: v,
    hostPath: T
  } of d ?? []) {
    u[t.toGuestCompatibleMountName(v)] = {
      path: t.guestCompatibleRootPath(T),
      mode: "ro"
    };
  }
  for (const v of l ?? []) {
    if (v.hostPath) {
      u[t.toGuestCompatibleMountName(`.projects/${v.uuid}`)] = {
        path: t.guestCompatibleRootPath(v.hostPath),
        mode: "ro"
      };
    }
  }
  if (m) {
    u[t.toGuestCompatibleMountName(t.AUTO_MEMORY_MOUNT_NAME)] = {
      path: t.guestCompatibleRootPath(m),
      mode: "ro"
    };
  }
  return {
    mounts: u,
    vmCwdMountName: h,
    nameByFolder: w
  };
}
const oo = Object.freeze(Object.defineProperty({
  __proto__: null,
  HOST_LOOP_PLUGIN_STAGING_ROOT: me,
  configureHostLoopExecution: et,
  stageHostLoopConfigDir: Je,
  stageHostLoopPluginPath: fe,
  toolResultsReadRule: oe
}, Symbol.toStringTag, {
  value: "Module"
}));
exports.HOST_LOOP_PLUGIN_STAGING_ROOT = me;
exports.buildCoworkMemoryPrompt = qe;
exports.checkFetchTarget = Qe;
exports.configureHostLoopExecution = et;
exports.createHostLoopStderrSink = ft;
exports.createWebFetchMcpServer = Ut;
exports.extractUrlsForProvenance = Mt;
exports.getMemoryPrivacyGuardText = Xe;
exports.hostLoopSession = oo;
exports.ingestWebSearchResultForProvenance = Dt;
exports.stageHostLoopPluginPath = fe;
exports.toolResultsReadRule = oe;
//# sourceMappingURL=index.chunk-t0dGjYqo.js.map