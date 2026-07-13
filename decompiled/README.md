# Decompiled `vite/` build — Claude Desktop (Electron)

This directory is a **decompiled / de-minified** copy of the production `vite/`
build shipped in `vite.zip`. Every `*.js` file here mirrors the same relative
path under `vite/`, so `decompiled/build/mainView.js` corresponds to
`vite/build/mainView.js`.

> **What the artifact is:** the packaged front-end of the **Claude Desktop**
> app. It is a Vite/Rollup build (no webpack runtime), split into an Electron
> **main-process** bundle (`build/`) and per-window **renderer** bundles
> (`renderer/`). Sentry release: `df1d8a339dfabcf359af7144fe142b59ff7d9a0f`.

## How it was decompiled

| Pass | Tool | What it does |
|------|------|--------------|
| 1 — de-minify / deobfuscate | [`webcrack`](https://github.com/j4k0xb/webcrack) 2.16 | Reverses minifier transforms at the AST level |
| (superseded) whitespace-only | `js-beautify` | The first commit only re-indented; this pass replaces it |

`webcrack` does far more than re-indent. On a single mid-size chunk it applied
**~5,000 transforms**. Concretely, it recovers:

| Minified form | Recovered form |
|---|---|
| `typeof x < "u"` | `typeof x !== "undefined"` |
| `a && (b, c, d)` (comma sequence) | `if (a) { b; c; d; }` |
| `!0` / `!1` | `true` / `false` |
| `x ? a : b` used as a statement | `if (x) a; else b;` |
| `const a = 1, b = 2, c = 3` | one declaration per line |
| `void 0` | `undefined` |

All **108** JS files were reprocessed. Every output file passes
`node --check` (valid syntax).

### Reproduce

```bash
unzip vite.zip
npm install -g webcrack
# per file:
webcrack vite/build/mainView.js -o out/    # -> out/deobfuscated.js
```

## What is *not* recovered

- **No original identifiers.** No source maps ship with the app (the files
  reference `*.js.map` siblings that are not included, and there are no inline
  maps), so variables keep Rollup's mangled names (`e`, `Ft`, `qt`, …). The
  *structure* is readable; the *names* are not the originals.
- **React JSX** stays as automatic-runtime `jsx()`/`jsxs()` calls in the
  renderer bundles rather than `<Tag/>` syntax.
- Embedded content-scripts (e.g. the computer-use accessibility-tree injector
  in `build/index.chunk-D6CHG_4h.js`) were shipped **with their original
  comments intact** and read almost like source.

## Architecture map

### Main process — `build/`

Preload scripts (they call `contextBridge.exposeInMainWorld`) — each backs a
window/webview:

| File | Role |
|------|------|
| `mainView.js` | Primary web-view preload (696 `invoke` + 89 `on/send` bindings) |
| `mainWindow.js` | Main application window shell |
| `quickWindow.js` | Quick-launcher window |
| `aboutWindow.js` | About window |
| `buddy.js` | "Buddy" companion window |
| `findInPage.js` | Find-in-page bar |
| `coworkArtifact.js` | Cowork artifact viewer |
| `claudePagePreview.js` | Page-preview webview |
| `computerUseTeach.js` | Computer-use teaching overlay |
| `index.js` / `index.pre.js` | Main-process entrypoint + pre-bundle |
| `index.chunk-*.js` | Shared code chunks required by the above |

Workers & runtimes:

| Path | Role |
|------|------|
| `mcp-runtime/directMcpHost.js` | In-process **MCP** host (uses `StreamableHTTP` transport) |
| `mcp-runtime/nodeHost.js` | Node-subprocess MCP host |
| `file-index-worker/fileIndexWorker.js` | Local file indexing |
| `heavy-work-worker/heavyWorkWorker.js` | Off-thread heavy compute |
| `shell-path-worker/shellPathWorker.js` | Resolves the user's shell `PATH` |
| `transcript-search-worker/transcriptSearchWorker.js` | Transcript search |

### Renderer — `renderer/`

Per-window React bundles: `main_window`, `quick_window`, `buddy_window`,
`about_window`, `find_in_page`. Each `assets/main-*.js` bundles React
(production) plus the Anthropic Sans/Serif variable fonts.

### IPC scheme

Renderer↔main communication is namespaced with a signed channel string:

```
$eipc_message$_<uuid>_$_<namespace>_$_<Interface>_$_<method>
```

Two signing UUIDs are used: `6b262b63-5a77-4b4d-9676-f029b3b91e60` and
`fcb91d11-972d-4fd6-b90b-72739699bff5`. There are **817 distinct endpoints**.
Top-level namespaces by endpoint count:

| Namespace | Endpoints | Notable interfaces |
|---|---:|---|
| `claude.web` | 1906 | `LocalSessions`, `LocalAgentModeSessions`, `Launch`, `CoworkSpaces`, `CoworkArtifacts`, `FileSystem`, `ClaudeVM`, `AutoUpdater` |
| `claude.settings` | 438 | `Extensions`, `Custom3pSetup`, `MCP`, `ClaudeAiImport`, `AppConfig`, `Startup` |
| `claude.internal.ui` | 76 | `MainWindowTitleBar`, `AboutWindow`, `QuickWindow` |
| `claude.buddy` | 70 | `Buddy` |
| `claude.officeAddin` | 36 | `OfficeAddinFiles` |
| `claude.hybrid` | 29 | `DesktopIntl` |
| `claude.simulator` | 24 | `Simulator` |
| `electron_window` | 21 | `WindowManager` |
| `claude.internal.findInPage` | 18 | `FindInPage` |
| `claude.coworkArtifact` | 15 | — |
| `claude.skills` | 3 | — |

These names surface the app's feature set: local chat sessions, agent-mode
sessions, Cowork (spaces / artifacts / scheduled tasks / memory), MCP &
third-party extensions, a Claude VM, an Office add-in bridge, skills, and an
auto-updater.
