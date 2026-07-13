"use strict";

(function () {
  try {
    var i = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    i.SENTRY_RELEASE = {
      id: "df1d8a339dfabcf359af7144fe142b59ff7d9a0f"
    };
  } catch {}
})();
try {
  (function () {
    var i = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    var d = new i.Error().stack;
    if (d) {
      i._sentryDebugIds = i._sentryDebugIds || {};
      i._sentryDebugIds[d] = "d78e1732-af91-4537-92f6-f40cedcfdfb4";
      i._sentryDebugIdIdentifier = "sentry-dbid-d78e1732-af91-4537-92f6-f40cedcfdfb4";
    }
  })();
} catch {}
Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
const v = require("./index.chunk-CvbeGVMj.js");
const e = require("./index.chunk-c42vKsva.js");
const w = "Tool approvals granted during a run are stored on the task and auto-applied to future runs. If this task is likely to use remote connectors or browser control, recommend the user click \"Run now\" first to pre-approve the tools it needs — this prevents future runs from pausing on permission prompts.";
async function $(i, d) {
  try {
    const p = await i.getAll();
    if (p.length === 0) {
      return {
        content: [{
          type: "text",
          text: "No scheduled tasks found. Use create_scheduled_task to create one."
        }]
      };
    }
    const y = await Promise.all(p.map(async r => {
      const g = i.getJitterSecondsForTask(r.id);
      let n;
      if (r.fireAt) {
        n = `One-time: ${new Date(r.fireAt).toLocaleString()}`;
      } else if (r.cronExpression) {
        n = e.cronToHumanReadable(e.applyJitterToCron(r.cronExpression, Math.round(g / 60)));
      } else {
        n = "Manual only";
      }
      let f;
      if (r.fireAt && !r.lastRunAt && r.enabled) {
        f = new Date(r.fireAt).toISOString();
      } else if (r.cronExpression && r.enabled) {
        f = new Date(e.getNextRunTime(r.cronExpression).getTime() + g * 1000).toISOString();
      }
      let c = "";
      try {
        const s = await i.getFileContent(r.id);
        if (typeof s == "string") {
          const t = e.parseTaskFileContent(s);
          if (t) {
            c = t.description;
          }
        }
      } catch {}
      return {
        taskId: r.id,
        description: c,
        path: d(r),
        schedule: n,
        cronExpression: r.cronExpression,
        fireAt: r.fireAt ? new Date(r.fireAt).toISOString() : undefined,
        enabled: r.enabled,
        nextRunAt: f,
        lastRunAt: r.lastRunAt,
        jitterSeconds: g
      };
    }));
    return {
      content: [{
        type: "text",
        text: JSON.stringify(y, null, 2)
      }]
    };
  } catch (p) {
    e.logger.error("[ScheduledTasksMcpServer] Failed to list scheduled tasks:", p);
    return {
      content: [{
        type: "text",
        text: `Failed to list scheduled tasks: ${p instanceof Error ? p.message : String(p)}`
      }],
      isError: true
    };
  }
}
async function O(i, d, p, y, r, g, n) {
  const {
    taskId: f,
    prompt: c,
    description: s,
    cronExpression: t,
    fireAt: a,
    notifyOnCompletion: h
  } = i;
  try {
    const l = y();
    const b = !!l && !!p(l);
    if (h === true && b) {
      return {
        content: [{
          type: "text",
          text: "Can't subscribe a scheduled-task run session to completion notifications — it ends when the run does. Pass notifyOnCompletion: false, or create the task from a regular session."
        }],
        isError: true
      };
    }
    if (t && a) {
      return {
        content: [{
          type: "text",
          text: "Provide either cronExpression (recurring) or fireAt (one-time), not both."
        }],
        isError: true
      };
    }
    if (t && !e.isValidCron(t)) {
      return {
        content: [{
          type: "text",
          text: `Invalid cron expression: "${t}". Please provide a valid 5-field cron expression (minute hour dayOfMonth month dayOfWeek).`
        }],
        isError: true
      };
    }
    let m;
    if (a) {
      m = new Date(a).getTime();
      if (isNaN(m)) {
        return {
          content: [{
            type: "text",
            text: `Invalid fireAt timestamp: "${a}". Provide an ISO 8601 string like "2026-03-05T14:30:00-08:00".`
          }],
          isError: true
        };
      }
      if (m < Date.now()) {
        return {
          content: [{
            type: "text",
            text: `fireAt must be in the future. Got "${a}" which is ${new Date(m).toLocaleString()}.`
          }],
          isError: true
        };
      }
    }
    const u = e.sanitizeTaskId(f);
    if (await d.get(u)) {
      return {
        content: [{
          type: "text",
          text: `A scheduled task with ID "${u}" already exists. Use update_scheduled_task to modify it, or choose a different taskId.`
        }],
        isError: true
      };
    }
    const x = await e.writeScheduledTaskFile(u, c, s, n.taskFilesDir);
    const o = g();
    if (!(await d.create({
      scheduledTaskId: u,
      filePath: x,
      cronExpression: t,
      fireAt: m,
      userSelectedFolders: o == null ? undefined : o.userSelectedFolders,
      userSelectedFiles: o == null ? undefined : o.userSelectedFiles,
      userSelectedProjectUuids: o == null ? undefined : o.userSelectedProjectUuids,
      spaceId: o == null ? undefined : o.spaceId,
      cwd: o == null ? undefined : o.cwd,
      notifySessionId: (h ?? true) && !b ? l : undefined
    }))) {
      return {
        content: [{
          type: "text",
          text: "Scheduled tasks are not initialized. Cannot create task."
        }],
        isError: true
      };
    }
    e.logEvent(n.evCreated, {
      scheduled_task_id: u,
      has_cron: !!t,
      has_fire_at: !!m,
      has_notify_on_completion: h ?? true,
      mcp_tool: true,
      creator_session_id: l,
      creator_session_type: r()
    });
    if (m) {
      const k = new Date(m);
      return {
        content: [{
          type: "text",
          text: `Scheduled task "${u}" created.

**Task file:** ${x}
**Will run once at:** ${k.toLocaleString()} (${e.formatNextRun(k)})

The task will auto-disable after running. You can manage it from the "Scheduled" section in the sidebar.

${w}`
        }]
      };
    } else if (t) {
      const k = d.getJitterSecondsForTask(u);
      const T = e.applyJitterToCron(t, Math.round(k / 60));
      const E = new Date(e.getNextRunTime(t).getTime() + k * 1000);
      const I = e.cronToHumanReadable(T);
      return {
        content: [{
          type: "text",
          text: `Scheduled task "${u}" created.

**Task file:** ${x}
**Schedule:** ${I}
**Next run:** ${e.formatNextRun(E)}

The task will run automatically according to the schedule. You can manage it from the "Scheduled" section in the sidebar.

${w}`
        }]
      };
    } else {
      return {
        content: [{
          type: "text",
          text: `Scheduled task "${u}" created.

**Task file:** ${x}
**Schedule:** Manual only (no automatic schedule)

This task will not run automatically. You can start it manually from the "Scheduled" section in the sidebar.

${w}`
        }]
      };
    }
  } catch (l) {
    e.logger.error("[ScheduledTasksMcpServer] Failed to create scheduled task:", l);
    return {
      content: [{
        type: "text",
        text: `Failed to create scheduled task: ${l instanceof Error ? l.message : String(l)}`
      }],
      isError: true
    };
  }
}
async function D(i, d, p, y, r, g) {
  const {
    taskId: n,
    prompt: f,
    description: c,
    cronExpression: s,
    fireAt: t,
    enabled: a,
    notifyOnCompletion: h
  } = i;
  try {
    const l = y();
    const b = !!l && !!p(l);
    if (h === true && b) {
      return {
        content: [{
          type: "text",
          text: "Can't subscribe a scheduled-task run session to completion notifications — it ends when the run does. Omit notifyOnCompletion here, or set it from a regular session."
        }],
        isError: true
      };
    }
    const m = await d.get(n);
    if (!m) {
      return {
        content: [{
          type: "text",
          text: `Scheduled task "${n}" not found. Use list_scheduled_tasks to see available tasks.`
        }],
        isError: true
      };
    }
    if (s && t) {
      return {
        content: [{
          type: "text",
          text: "Provide either cronExpression (recurring) or fireAt (one-time), not both."
        }],
        isError: true
      };
    }
    if (s !== undefined && !e.isValidCron(s)) {
      return {
        content: [{
          type: "text",
          text: `Invalid cron expression: "${s}". Please provide a valid 5-field cron expression (minute hour dayOfMonth month dayOfWeek).`
        }],
        isError: true
      };
    }
    let u;
    if (t) {
      u = new Date(t).getTime();
      if (isNaN(u)) {
        return {
          content: [{
            type: "text",
            text: `Invalid fireAt timestamp: "${t}". Provide an ISO 8601 string like "2026-03-05T14:30:00-08:00".`
          }],
          isError: true
        };
      }
      if (u < Date.now()) {
        return {
          content: [{
            type: "text",
            text: `fireAt must be in the future. Got "${t}" which is ${new Date(u).toLocaleString()}.`
          }],
          isError: true
        };
      }
    }
    const _ = f !== undefined || c !== undefined;
    if (!_ && s === undefined && t === undefined && a === undefined && h === undefined) {
      return {
        content: [{
          type: "text",
          text: `No updates provided for task "${n}". Supply at least one of: prompt, description, cronExpression, fireAt, enabled, notifyOnCompletion.`
        }],
        isError: true
      };
    }
    if (a === true && !t && !s && m.fireAt && m.lastRunAt) {
      return {
        content: [{
          type: "text",
          text: `Task "${n}" is a one-time task that already fired at ${m.lastRunAt}. Provide a new fireAt timestamp to re-arm it, or a cronExpression to make it recurring.`
        }],
        isError: true
      };
    }
    if (_) {
      await e.updateScheduledTaskFile(m.filePath, {
        prompt: f,
        description: c
      }, g.taskFilesDir);
    }
    const o = {};
    if (s !== undefined) {
      o.cronExpression = s;
      if (s) {
        o.enabled = true;
      }
    }
    if (u !== undefined) {
      o.fireAt = u;
      o.enabled = true;
    }
    if (a !== undefined) {
      o.enabled = a;
    }
    if (h !== undefined) {
      o.notifySessionId = h ? y() : undefined;
    }
    if (!(await d.update(n, o))) {
      return {
        content: [{
          type: "text",
          text: `Failed to update task "${n}": task not found during update.`
        }],
        isError: true
      };
    }
    e.logEvent(g.evUpdated, {
      scheduled_task_id: n,
      updated_prompt: f !== undefined,
      updated_description: c !== undefined,
      updated_cron: s !== undefined,
      updated_fire_at: t !== undefined,
      updated_enabled: a !== undefined,
      updated_notify_on_completion: h !== undefined,
      mcp_tool: true,
      creator_session_id: y(),
      creator_session_type: r(),
      ...(h !== undefined && {
        notify_on_completion_after: h
      })
    });
    const k = [];
    if (f !== undefined) {
      k.push("prompt");
    }
    if (c !== undefined) {
      k.push("description");
    }
    if (s !== undefined) {
      const T = d.getJitterSecondsForTask(n);
      const E = e.applyJitterToCron(s, Math.round(T / 60));
      k.push(`schedule (${e.cronToHumanReadable(E)})`);
    }
    if (u !== undefined) {
      k.push(`one-time run at ${new Date(u).toLocaleString()} (${e.formatNextRun(new Date(u))})`);
    }
    if (a !== undefined) {
      k.push(a ? "enabled" : "disabled");
    }
    if (h !== undefined) {
      k.push(h ? "completion notifications enabled" : "completion notifications disabled");
    }
    return {
      content: [{
        type: "text",
        text: `Scheduled task "${n}" updated: ${k.join(", ")}.${f !== undefined ? `

${w}` : ""}`
      }]
    };
  } catch (l) {
    e.logger.error("[ScheduledTasksMcpServer] Failed to update scheduled task:", l);
    return {
      content: [{
        type: "text",
        text: `Failed to update scheduled task: ${l instanceof Error ? l.message : String(l)}`
      }],
      isError: true
    };
  }
}
function S(i) {
  return {
    content: [{
      type: "text",
      text: i
    }],
    isError: true
  };
}
async function M(i, d, p, y, r, g, n, f) {
  const {
    taskId: c
  } = i;
  try {
    const s = await d.get(c);
    if (!s) {
      return S(`Scheduled task "${c}" not found. Use list_scheduled_tasks to see available tasks.`);
    }
    const t = y();
    if (t && p(t) === c) {
      return S("Refusing to delete the scheduled task that launched this session. Delete it from a regular session instead.");
    }
    const {
      deleted: a,
      sessionsArchived: h
    } = await e.runScheduledTaskDeletePipeline({
      scheduledTasks: d,
      taskId: c,
      archiveSessions: g,
      logTag: "[ScheduledTasksMcpServer]"
    });
    if (!a) {
      return S(`Failed to delete task "${c}": task not found during delete.`);
    }
    e.logEvent(f.evDeleted, {
      scheduled_task_id: c,
      mcp_tool: true,
      sessions_archived: h,
      creator_session_id: t,
      creator_session_type: r()
    });
    const l = h > 0 ? ` ${h} run session${h === 1 ? " was" : "s were"} archived.` : "";
    return {
      content: [{
        type: "text",
        text: `Scheduled task "${c}" deleted.${l} Its SKILL.md file was left in place at ${n(s)} in case you need to recover the prompt.`
      }]
    };
  } catch (s) {
    e.logger.error("[ScheduledTasksMcpServer] Failed to delete scheduled task:", s);
    return S(`Failed to delete scheduled task: ${s instanceof Error ? s.message : String(s)}`);
  }
}
function R(i, d, p, y, r, g, n) {
  const {
    telemetryPrefix: f,
    taskFilePathForModel: c
  } = n;
  const s = i.requireTaskFilesDir();
  const t = {
    taskFilesDir: s,
    readSessionFile: n.readSessionFile,
    isMcpToolDestructive: n.isMcpToolDestructive,
    evCreated: `${f}_scheduled_tasks_created`,
    evUpdated: `${f}_scheduled_tasks_updated`,
    evDeleted: `${f}_scheduled_tasks_deleted`
  };
  return v.createSdkMcpServer({
    name: e.SERVER_NAME,
    version: "1.0.0",
    tools: [v.tool("list_scheduled_tasks", "List all scheduled tasks with their current state. Use this to discover existing tasks and their IDs before updating them.\n\nReturns each task's taskId, description, schedule (human-readable), cronExpression, fireAt (ISO timestamp if one-time), enabled state, nextRunAt (ISO timestamp), and lastRunAt (ISO timestamp). Each entry also includes a `path` to the task's SKILL.md — Read it to see the current prompt.", {}, async () => $(i, c)), v.tool("create_scheduled_task", `Create a scheduled task that runs automatically — on a recurring schedule or once at a future moment. Use this when the user asks for something to happen repeatedly ("every day at 6am", "each Monday", "hourly") or at a specific later time ("remind me in 20 minutes", "tomorrow at 3pm"), rather than once right now. Calling this tool shows the user an approval prompt; go ahead and call it when the request clearly describes a schedule — the approval dialog is the confirmation step.

To modify an existing scheduled task's schedule or prompt, use \`update_scheduled_task\` instead.

The task is stored as {taskId}/SKILL.md in ${s}/. Each run starts fresh with no memory of this conversation, so the prompt must be fully self-contained: include which connectors to use, the output format, and any preferences the user expressed here.

Scheduled tasks run while this app is open. If the app is closed when a task is due, it runs on next launch — tell the user this so they aren't surprised.

**Scheduling options (pick at most one):**
- cronExpression: recurring (daily, weekly, etc.)
- fireAt: one-time — runs once at the given moment, then auto-disables. Never use a cron expression for a one-time task; cron has no one-shot semantics.
- Omit both: "ad-hoc" — can only be started manually

**Recurring (cronExpression):** Cron is evaluated in the user's LOCAL timezone, not UTC. Use local times directly. Format: minute hour dayOfMonth month dayOfWeek
- "0 9 * * *" — Every day at 9:00 AM local time
- "0 9 * * 1-5" — Weekdays at 9:00 AM local time
- "30 8 * * 1" — Every Monday at 8:30 AM local time
- "0 0 1 * *" — First day of every month at midnight local time

**One-time (fireAt):** An ISO 8601 timestamp with timezone offset. The task fires once at that moment (or on next app launch if it was closed), then disables itself.
- "2026-03-05T14:30:00-08:00" — Runs once on March 5 at 2:30 PM Pacific
- Use this for reminders ("remind me in 5 minutes"), one-off future actions ("tomorrow at 3pm"), or specific dates

**Note on timing:** Recurring tasks apply a small deterministic delay of several minutes at dispatch time to balance server load. One-time tasks fire without delay.`, {
      taskId: e.stringType().describe("Kebab-case identifier for the task (e.g., 'check-inbox', 'daily-standup'). Used as the directory name and storage key. Auto-sanitized as a safety net."),
      prompt: e.stringType().describe("The full task prompt/instructions that will be executed each time the task runs. Write this as a complete prompt describing what Claude should do."),
      description: e.stringType().describe("A short one-line description of what this task does (used in skill frontmatter)."),
      cronExpression: e.stringType().optional().describe("Standard 5-field cron expression for recurring runs, in LOCAL time (not UTC). For example, '0 9 * * *' means 9am daily in the user's local timezone. Mutually exclusive with fireAt."),
      fireAt: e.stringType().optional().describe("ISO 8601 timestamp with timezone offset for a one-time run (e.g. '2026-03-05T14:30:00-08:00'). Mutually exclusive with cronExpression. Must be in the future. Task auto-disables after firing."),
      notifyOnCompletion: e.booleanType().optional().describe("When true (default), this session receives a notification each time the task finishes a run. Pass false to opt out.")
    }, async a => O(a, i, d, p, y, r, t)), v.tool("update_scheduled_task", `Update an existing scheduled task. taskId must be an exact ID from list_scheduled_tasks. To see the current prompt before editing it, Read the \`path\` returned by list_scheduled_tasks.

Supports partial updates — only supply the fields you want to change:
- prompt: Replace the instructions Claude executes on each run
- description: Replace the one-line summary shown in the sidebar
- cronExpression: Change or set a recurring schedule (5-field cron string in LOCAL time, not UTC). Clears any one-time fireAt.
- fireAt: Change or set a one-time run (ISO 8601 timestamp with offset, must be in the future). Clears any cron schedule and re-arms the task.
- enabled: Pass false to pause automatic runs, true to resume them
- notifyOnCompletion: Pass true to receive a notification each time the task finishes a run; pass false to stop

**Note on timing:** Recurring tasks apply a small deterministic delay of several minutes at dispatch time to balance server load. One-time tasks fire without delay.`, {
      taskId: e.stringType().describe("The exact ID of the task to update (from list_scheduled_tasks)."),
      prompt: e.stringType().optional().describe("New prompt/instructions to replace the current ones."),
      description: e.stringType().optional().describe("New one-line description for the task."),
      cronExpression: e.stringType().optional().describe("New 5-field cron expression for recurring runs in LOCAL time (not UTC). For example, '0 9 * * *' means 9am in the user's local timezone. Mutually exclusive with fireAt."),
      fireAt: e.stringType().optional().describe("New ISO 8601 timestamp with timezone offset for a one-time run. Mutually exclusive with cronExpression. Must be in the future. Re-arms and auto-enables the task."),
      enabled: e.booleanType().optional().describe("Set to false to pause automatic runs, true to resume. Does not affect manual runs."),
      notifyOnCompletion: e.booleanType().optional().describe("Pass true to have this session notified each time the task finishes a run (replaces any prior subscriber). Pass false to clear the subscription.")
    }, async a => D(a, i, d, p, y, t)), v.tool("delete_scheduled_task", `Delete an existing scheduled task. taskId must be an exact ID from list_scheduled_tasks.

This removes the task from the scheduler so it will no longer run. The task's SKILL.md file is left on disk so the prompt can be recovered. To pause a task without deleting it, use update_scheduled_task with enabled: false instead.`, {
      taskId: e.stringType().describe("The exact ID of the task to delete (from list_scheduled_tasks).")
    }, async a => M(a, i, d, p, y, g, c, t))]
  });
}
exports.createScheduledTasksServer = R;
//# sourceMappingURL=index.chunk-CB8k5BVM.js.map