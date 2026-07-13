import { r as c, u as E, _ as A, s as U, j as e } from "./main-Dkz9MJlY.js";
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
    var a = new t.Error().stack;
    if (a) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[a] = "7b9afad9-cf23-4064-99ea-50636169af6a";
      t._sentryDebugIdIdentifier = "sentry-dbid-7b9afad9-cf23-4064-99ea-50636169af6a";
    }
  })();
} catch {}
function X(t, a) {
  var i = t.values;
  var o = A(t, ["values"]);
  var d = a.values;
  var p = A(a, ["values"]);
  return U(d, i) && U(o, p);
}
function q(t) {
  var a = E();
  var i = a.formatMessage;
  var o = a.textComponent;
  var d = o === undefined ? c.Fragment : o;
  var p = t.id;
  var v = t.description;
  var h = t.defaultMessage;
  var j = t.values;
  var m = t.children;
  var b = t.tagName;
  var k = b === undefined ? d : b;
  var M = t.ignoreTag;
  var y = {
    id: p,
    description: v,
    defaultMessage: h
  };
  var x = i(y, j, {
    ignoreTag: M
  });
  if (typeof m == "function") {
    return m(Array.isArray(x) ? x : [x]);
  } else if (k) {
    return c.createElement(k, null, x);
  } else {
    return c.createElement(c.Fragment, null, x);
  }
}
q.displayName = "FormattedMessage";
var _Component = c.memo(q, X);
_Component.displayName = "MemoizedFormattedMessage";
function G(t) {
  var a;
  var i;
  var o = "";
  if (typeof t == "string" || typeof t == "number") {
    o += t;
  } else if (typeof t == "object") {
    if (Array.isArray(t)) {
      var d = t.length;
      for (a = 0; a < d; a++) {
        if (t[a] && (i = G(t[a]))) {
          if (o) {
            o += " ";
          }
          o += i;
        }
      }
    } else {
      for (i in t) {
        if (t[i]) {
          if (o) {
            o += " ";
          }
          o += i;
        }
      }
    }
  }
  return o;
}
function J() {
  var t;
  var a;
  for (var i = 0, o = "", d = arguments.length; i < d; i++) {
    if ((t = arguments[i]) && (a = G(t))) {
      if (o) {
        o += " ";
      }
      o += a;
    }
  }
  return o;
}
const ee = (t = "primary") => J("inline-flex items-center justify-center relative shrink-0 select-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none disabled:drop-shadow-none", {
  primary: "bg-text-000 text-bg-000 relative overflow-hidden font-medium font-sans transition-transform will-change-transform ease-[cubic-bezier(0.165,0.85,0.45,1)] duration-150 hover:scale-y-[1.015] hover:scale-x-[1.005] backface-hidden after:absolute after:inset-0 after:bg-[radial-gradient(at_bottom,hsla(var(--bg-000)/20%),hsla(var(--bg-000)/0%))] after:opacity-0 after:transition after:duration-200 after:translate-y-2 hover:after:opacity-100 hover:after:translate-y-0",
  secondary: "text-text-000 border-0.5 border-border-300 relative overflow-hidden font-sans font-medium transition duration-100 hover:border-border-300/0 bg-bg-300/0 hover:bg-bg-400 backface-hidden",
  flat: "bg-brand-000 text-oncolor-100 font-sans font-medium transition-colors hover:bg-brand-200",
  ghost: "text-text-300 border-transparent transition font-sans duration-300 ease-[cubic-bezier(0.165,0.85,0.45,1)] hover:bg-bg-400 aria-pressed:bg-bg-400 aria-checked:bg-bg-400 aria-expanded:bg-bg-300 hover:text-text-100 aria-pressed:text-text-100 aria-checked:text-text-100 aria-expanded:text-text-100",
  danger: "bg-danger-200 text-oncolor-100 font-sans font-medium transition hover:scale-y-[1.015] hover:scale-x-[1.005] hover:opacity-95",
  unstyled: ""
}[t]);
const te = (t = "default", a, i) => {
  let d = {
    default: "h-9 px-4 py-2 rounded-lg min-w-[5rem] active:scale-[0.985] whitespace-nowrap text-sm",
    sm: "h-8 rounded-md px-3 text-xs min-w-[4rem] active:scale-[0.985] whitespace-nowrap",
    lg: "h-11 rounded-[0.6rem] px-5 min-w-[6rem] active:scale-[0.985] whitespace-nowrap",
    icon: "h-9 w-9 rounded-md active:scale-95 shrink-0",
    icon_xs: "h-6 w-6 rounded-md active:scale-95",
    icon_sm: "h-8 w-8 rounded-md active:scale-95",
    icon_lg: "h-11 w-11 rounded-[0.6rem] active:scale-95",
    inline: "px-0.5 rounded-[0.25rem]",
    unset: ""
  }[t];
  if (a) {
    if (t === "default") {
      d = d.replace("px-4", "pl-2 pr-3 gap-1");
    } else if (t === "lg") {
      d = d.replace("px-5", "pl-2.5 pr-3.5 gap-1");
    } else if (t === "sm") {
      d = d.replace("px-3", "pl-2 pr-2.5 gap-1");
    }
  }
  if (i) {
    if (t === "default") {
      d = d.replace("px-4", "pl-3 pr-2 gap-1");
    } else if (t === "lg") {
      d = d.replace("px-5", "pl-3.5 pr-2.5 gap-1");
    } else if (t === "sm") {
      d = d.replace("px-3", "pl-2.5 pr-2 gap-1");
    }
  }
  return d;
};
const _Component2 = c.forwardRef(({
  className: t,
  variant: a = "primary",
  size: i = "default",
  rounded: o,
  href: d,
  onLinkClick: p,
  target: v,
  prepend: h,
  append: j,
  disabled: m,
  children: b,
  type: k = "button",
  ...M
}, y) => {
  const x = J(ee(a), te(i, !!h, !!j), o && "!rounded-full", t);
  const L = <e.Fragment>{h}{b}{j}</e.Fragment>;
  if (d) {
    const {
      style: N,
      "aria-label": T,
      rel: D
    } = M;
    return <a href={d} target={v || "_self"} rel={D} className={x} aria-label={T} onClick={p} style={N}>{L}</a>;
  }
  return <button className={x} ref={y} disabled={m} type={k} {...M}>{L}</button>;
});
_Component2.displayName = "Button";
var V = (t => {
  t.Gif = "gif";
  t.Text = "text";
  return t;
})(V || {});
var _;
const s = (_ = globalThis["claude.buddy"]) == null ? undefined : _.Buddy;
var Z;
if ((Z = globalThis["claude.buddy"]) != null) {
  Z.BuddyBleTransport;
}
const u = {
  color: "var(--ink-dim)"
};
const W = process.platform === "darwin" ? "pl-[83px]" : "pl-5";
const se = "https://github.com/anthropics/claude-desktop-buddy";
function ae(t) {
  return <a href={se} target="_blank" rel="noreferrer">{t}</a>;
}
function re(t) {
  const a = Math.floor(t / 3600);
  const i = Math.floor(t % 3600 / 60);
  if (a > 0) {
    return `${a}h${String(i).padStart(2, "0")}m`;
  } else {
    return `${i}m`;
  }
}
function C({
  k: t,
  v: a,
  cls: i
}) {
  return <div className="flex justify-between py-[5px]"><span style={u}>{t}</span><span className="tabular-nums" style={i ? {
      color: i
    } : undefined}>{a}</span></div>;
}
function S({
  children: t
}) {
  return <div className="text-[10px] tracking-wider mt-2.5 mb-0.5" style={u}>{t}</div>;
}
function _Component3({
  preview: t
}) {
  var i;
  let a;
  if ((t == null ? undefined : t.kind) === V.Gif && t.dataUrl) {
    a = <img src={t.dataUrl} alt="" />;
  } else if ((i = t == null ? undefined : t.frames) != null && i.length) {
    a = <div className="font-mono text-[10px] whitespace-pre tracking-[0.02em]" style={{
      color: t.color ?? "#fff"
    }}>{t.frames[0]}</div>;
  } else {
    a = <div className="text-[11px] text-center px-4" style={{
      color: "#444"
    }}><_Component defaultMessage="preview" id="Jbz0kqYNRP" description="Placeholder text on the device-mockup screen before a character is selected" /></div>;
  }
  return <div className="buddy-stick"><div className="buddy-stick-screen">{a}</div><div className="flex-1 flex items-center justify-center"><div className="buddy-stick-btn" /></div></div>;
}
function _Component4({
  conn: t,
  device: a,
  name: i,
  setName: o,
  onSetName: d,
  onConnect: p,
  onChange: v,
  onForget: h
}) {
  const j = E();
  const m = (t == null ? undefined : t.connected) ?? false;
  return <div className="buddy-card flex-1 min-w-0 p-4 text-xs overflow-y-auto"><div className="flex items-center gap-2 text-[13px]"><span className={`buddy-dot ${m ? "on" : ""}`} /><span>{m ? a != null && a.sec ? <_Component defaultMessage="Connected · Encrypted" id="RyNwSXgWrG" description="Status when the buddy device is connected over an encrypted (bonded) BLE link" /> : <_Component defaultMessage="Connected" id="9HIsz1Smer" description="Status when the buddy device is connected over BLE" /> : t != null && t.paired ? <_Component defaultMessage="Disconnected" id="os7LTcHuiw" description="Status when a buddy is paired but not currently reachable" /> : <_Component defaultMessage="No buddy paired" id="EC3fHlxj1a" description="Status when no buddy device has ever been paired" />}</span></div>{m && a && !a.sec && <div className="text-[10px] mt-1 mb-2" style={{
      color: "#e8a33d"
    }} title={j.formatMessage({
      defaultMessage: "This device requested an unencrypted connection. Data is being sent unencrypted, meaning that other devices close by can easily listen in.",
      id: "4xrT8niZlX",
      description: "Tooltip explaining why the BLE link is unencrypted"
    })}><_Component defaultMessage="Connection is unencrypted" id="U4fXjfVCw/" description="Warning shown when the connected device doesn't support BLE bonding" /></div>}{(t == null ? undefined : t.paired) && <div className="py-1.5 pb-2.5 mb-3 border-b text-[11px]" style={{
      borderColor: "var(--line)"
    }}><div className="font-mono" style={{
        color: "var(--ink)"
      }}>{t.paired.name}</div><div className="flex gap-1.5 mt-1" style={u}><_Component2 variant="ghost" size="sm" onClick={v}><_Component defaultMessage="Change…" id="VhCZutgTZg" description="Button to open the BLE device picker and change the paired buddy" /></_Component2><_Component2 variant="ghost" size="sm" onClick={h}><_Component defaultMessage="Forget" id="/6Btt89krf" description="Button to forget the paired buddy device" /></_Component2></div></div>}{m ? a ? <e.Fragment><div className="flex items-center justify-between gap-2 py-[5px]"><span style={u}><_Component defaultMessage="Name" id="VOiMOmSSAB" description="Label for the buddy device name field" /></span><input className="w-14 min-w-0 px-2 py-1 border rounded text-[12px] tabular-nums text-right bg-white focus:outline-none focus:border-[var(--clay)]" style={{
          borderColor: "var(--line)"
        }} value={i} placeholder={a.name} maxLength={22} onChange={b => o(b.target.value)} onKeyDown={b => b.key === "Enter" && d()} /><_Component2 variant="ghost" size="sm" disabled={!i.trim() || i === a.name} onClick={d}><_Component defaultMessage="Save" id="JkRLRwAcGs" description="Button to save the new buddy device name" /></_Component2></div><S><_Component defaultMessage="Battery" id="olgIzDjDhD" description="Section header for battery stats" /></S><C k={a.bat.usb ? a.bat.mA > 1 ? <_Component defaultMessage="Charging" id="Ig9Ho5m0e7" description="Battery row label when the device is charging over USB" /> : <_Component defaultMessage="USB" id="BHrCNQSl+/" description="Battery row label when on USB power but not charging" /> : <_Component defaultMessage="{mA}mA" id="45E6u2ngvv" description="Battery current draw in milliamps" values={{
        mA: a.bat.mA
      }} />} v={<_Component defaultMessage="{pct}%" id="dsgmG2ONi3" description="Battery charge percentage" values={{
        pct: a.bat.pct
      }} />} cls={a.bat.pct > 30 ? "var(--ok)" : "#e8a33d"} /><S><_Component defaultMessage="Progress" id="aWKY5pRsBZ" description="Section header for buddy gamification stats" /></S><C k={<_Component defaultMessage="Level" id="OYyUbCYWdu" description="Stat label: buddy level" />} v={a.stats.lvl} /><C k={<_Component defaultMessage="Approved" id="wEHkyvS7VM" description="Stat label: number of approved tool calls" />} v={a.stats.appr} /><C k={<_Component defaultMessage="Velocity" id="icGnhQJ0b2" description="Stat label: average seconds to approve" />} v={<_Component defaultMessage="{s}s" id="FwEm/ZxDYe" description="Velocity value in seconds; em-dash if zero" values={{
        s: a.stats.vel || "—"
      }} />} /><S><_Component defaultMessage="System" id="JJRLwJcTdl" description="Section header for device system stats" /></S><C k={<_Component defaultMessage="Uptime" id="ZiyxRLRcqH" description="Stat label: device uptime" />} v={re(a.sys.up)} /><C k={<_Component defaultMessage="Heap" id="R4UYfBI7n4" description="Stat label: free heap memory" />} v={<_Component defaultMessage="{kb}KB" id="Bx8SVIBqp8" description="Heap size in kilobytes" values={{
        kb: Math.round(a.sys.heap / 1024)
      }} />} /></e.Fragment> : <div className="text-xs" style={u}><_Component defaultMessage="No response" id="mM1zeqoT65" description="Shown when connected over BLE but the device is not answering status queries" /></div> : <_Component2 variant="flat" size="sm" className="mt-3" onClick={p}><_Component defaultMessage="Connect" id="r7yWnNBpJl" description="Button to connect or pair a buddy device" /></_Component2>}</div>;
}
function _Component7({
  onClose: t,
  onPick: a
}) {
  const i = E();
  const [o, d] = c.useState(null);
  c.useEffect(() => {
    var p;
    if ((p = s == null ? undefined : s.scanDevices) != null) {
      p.call(s).then(v => d(v ?? []));
    }
  }, []);
  return <div className="buddy-overlay nc-no-drag"><_Component2 variant="ghost" size="icon" className="text-2xl leading-none" style={{
      position: "absolute",
      top: 50,
      right: 16,
      color: "var(--ink)"
    }} aria-label={i.formatMessage({
      defaultMessage: "Close",
      id: "GvZR+GimJM",
      description: "Accessible label for the maker guide close button"
    })} onClick={t}>×</_Component2><div className="px-8 pt-14 pb-7 overflow-y-auto text-[13px] leading-relaxed"><h2 className="text-lg mb-1" style={{
        color: "var(--ink)"
      }}><_Component defaultMessage="Choose your Buddy" id="X4B0fhGYCv" description="Heading for the BLE device picker overlay" /></h2><p style={u}>{o === null ? <_Component defaultMessage="Scanning for 5s…" id="+rUDCO79Js" description="Shown while scanning for nearby buddy devices" /> : <_Component defaultMessage="Tap to pair:" id="c57Uvzn9py" description="Prompt above the list of discovered buddy devices" />}</p><div className="flex flex-col gap-1.5 mt-3">{(o == null ? undefined : o.length) === 0 && <div className="text-xs py-3" style={u}><_Component defaultMessage="None found. Make sure yours is on and nearby." id="w1n324NTbz" description="Shown when the BLE scan returns no buddy devices" /></div>}{o == null ? undefined : o.map(p => <button className="buddy-card text-left font-mono text-[13px] p-3 hover:!border-[var(--clay)]" onClick={() => a(p.id)} key={p.id}>{p.name || p.id}</button>)}</div></div></div>;
}
function _Component6({
  deviceName: t,
  onSubmit: a
}) {
  const i = E();
  const [o, d] = c.useState("");
  return <div className="buddy-overlay nc-no-drag"><div className="px-8 pt-14 pb-7 text-[13px] leading-relaxed"><h2 className="text-lg mb-1" style={{
        color: "var(--ink)"
      }}><_Component defaultMessage="Pair with {name}" id="EI/bM1mkxe" description="Heading for the BLE passkey entry overlay" values={{
          name: t
        }} /></h2><p style={u}><_Component defaultMessage="Enter the 6-digit code shown on the device's screen to connect." id="bFjLlL146p" description="Instructions above the BLE passkey input" /></p><input autoFocus={true} inputMode="numeric" maxLength={6} aria-label={i.formatMessage({
        defaultMessage: "Pairing code",
        id: "lPkYPQQtQp",
        description: "Accessible label for the BLE passkey input"
      })} className="font-mono text-2xl tracking-[0.4em] text-center w-48 mt-4 px-3 py-2 border rounded bg-white focus:outline-none focus:border-[var(--clay)]" style={{
        borderColor: "var(--line)"
      }} value={o} onChange={p => d(p.target.value.replace(/\D/g, ""))} onKeyDown={p => p.key === "Enter" && o.length === 6 && a(o)} /><div className="flex gap-2 mt-4"><_Component2 variant="flat" size="sm" disabled={o.length !== 6} onClick={() => a(o)}><_Component defaultMessage="Pair" id="WiBUYCwrBG" description="Button to submit the BLE passkey" /></_Component2><_Component2 variant="ghost" size="sm" onClick={() => a(null)}><_Component defaultMessage="Cancel" id="075Zq8hhWT" description="Button to cancel BLE pairing" /></_Component2></div></div></div>;
}
function _Component5({
  onClose: t
}) {
  const a = E();
  return <div className="buddy-overlay nc-no-drag"><div className={`h-[45px] flex items-center ${W} pr-3 border-b shrink-0`} style={{
      borderColor: "var(--line)"
    }}><h1 className="text-xs font-bold opacity-40"><_Component defaultMessage="Hardware Buddy & Maker Devices" id="cIji9pIUOl" description="Title of the Hardware Buddy companion window" /></h1><_Component2 variant="ghost" size="icon" className="ml-auto text-lg leading-none" style={{
        color: "var(--ink)"
      }} aria-label={a.formatMessage({
        defaultMessage: "Close",
        id: "GvZR+GimJM",
        description: "Accessible label for the maker guide close button"
      })} onClick={t}>×</_Component2></div><div className="px-8 pt-5 pb-7 overflow-y-auto text-[13px] leading-relaxed select-text"><h2 className="text-lg mb-1" style={{
        color: "var(--ink)"
      }}><_Component defaultMessage="Connect maker devices to Claude" id="+Fax0wMvjs" description="Heading for the Hardware Buddy maker guide overlay" /></h2><p style={u}><_Component defaultMessage="Claude for macOS, Windows, and Linux can connect Claude Cowork and Claude Code to maker devices over BLE, so developers can build hardware that displays permission prompts, recent messages, and other interactions." id="ZFmsM8Cqua" description="Intro paragraph explaining the BLE maker device bridge" /></p><S><_Component defaultMessage="Reference implementation" id="ouKZBgbNpq" description="Section header for the reference desk-pet firmware" /></S><p style={u}><_Component defaultMessage="As an example, we built a desk pet that lives off permission approvals and interaction with Claude. Find the firmware, build instructions, and character pack guide in the <a>claude-desktop-buddy repository</a>." id="mTUIZX4Qq2" description="Reference desk pet description; <a> wraps the repo link text" values={{
          a: ae
        }} /></p><S><_Component defaultMessage="Build your own device" id="UKbdajsboe" description="Section header for the BLE protocol details" /></S><p style={u}><_Component defaultMessage="The repository includes full details on building and connecting your own devices. Here's the short version." id="RfhFFMTHtV" description="Pointer to detailed protocol docs in the repo" /></p><p className="mt-3" style={u}><_Component defaultMessage={"Advertise a name starting with <code>Claude</code> over the Nordic UART Service. Everything on the wire is UTF-8 JSON—one object per line, terminated with <code>\\n</code>."} id="tkAZD2CTH1" description="BLE transport requirements; <code> tags wrap literal protocol values" values={{
          code: i => <code>{i}</code>
        }} /></p><pre>{`service  6e400001-b5a3-f393-e0a9-e50e24dcca9e
`}{`rx write 6e400002-b5a3-f393-e0a9-e50e24dcca9e
`}tx notif 6e400003-b5a3-f393-e0a9-e50e24dcca9e</pre><p className="mt-3" style={u}><_Component defaultMessage="The desktop apps send a heartbeat snapshot whenever something changes, plus a keepalive every 10 seconds:" id="mRGbzwGtHn" description="Lead-in to the heartbeat JSON example" /></p><pre>{JSON.stringify({
          total: 3,
          running: 1,
          waiting: 1,
          tokens_today: 31200,
          prompt: {
            id: "req_abc",
            tool: "Bash"
          }
        }, null, 2)}</pre><p style={u}><_Component defaultMessage="When <code>prompt</code> is present, your device can return a response:" id="hzmFz+zKgD" description="Lead-in to the permission decision JSON" values={{
          code: i => <code>{i}</code>
        }} /></p><pre>{`{"cmd":"permission","id":"req_abc","decision":"once"}
`}{"{\"cmd\":\"permission\",\"id\":\"req_abc\",\"decision\":\"deny\"}"}</pre><p style={u}><_Component defaultMessage="Each completed turn also fires a one-shot event containing the raw SDK content array—text blocks, tool calls, and any other content from the message. Events that serialize larger than 4KB are dropped." id="NlhLVO18ds" description="Explains the turn event sent alongside the heartbeat" /></p><pre>{"{\"evt\":\"turn\",\"role\":\"assistant\",\"content\":[...]}"}</pre><S><_Component defaultMessage="Availability" id="f+EuS5oQ+o" description="Section header for the maker bridge disclaimer" /></S><p style={u}><_Component defaultMessage="The BLE API is only available when the desktop app is in developer mode. It's intended for makers and developers and isn't an officially supported product feature." id="zTrDHxC7yZ" description="Disclaimer that the BLE maker bridge is unsupported" /></p></div></div>;
}
function ce(t) {
  document.addEventListener("visibilitychange", t);
  return () => document.removeEventListener("visibilitychange", t);
}
function pe() {
  return c.useSyncExternalStore(ce, () => !document.hidden);
}
function fe() {
  const t = E();
  const [a, i] = c.useState(null);
  const [o, d] = c.useState(null);
  const [p, v] = c.useState("");
  const [h, j] = c.useState(null);
  const [m, b] = c.useState(null);
  const [k, M] = c.useState(false);
  const [y, x] = c.useState({
    msg: "",
    pct: 0,
    cls: ""
  });
  const [L, N] = c.useState(false);
  const [T, D] = c.useState(false);
  const [F, O] = c.useState(null);
  const [B, P] = c.useState(false);
  const z = (n, l = "") => x(f => ({
    ...f,
    msg: n,
    cls: l
  }));
  const w = c.useCallback(async () => {
    var f;
    if (s == null || !s.status) {
      return;
    }
    const n = await s.status();
    i(n);
    const l = n.connected ? (await ((f = s.deviceStatus) == null ? undefined : f.call(s))) ?? null : null;
    d(l);
    v(R => R === "" && l != null && l.name ? l.name : R);
  }, []);
  const H = pe();
  c.useEffect(() => {
    if (!H) {
      return;
    }
    w();
    const n = setInterval(() => void w(), 2000);
    return () => clearInterval(n);
  }, [w, H]);
  c.useEffect(() => {
    var n;
    if ((n = s == null ? undefined : s.onPairingPrompt) == null) {
      return undefined;
    } else {
      return n.call(s, l => {
        N(false);
        O(l);
      });
    }
  }, []);
  c.useEffect(() => {
    var n;
    if ((n = s == null ? undefined : s.onProgress) == null) {
      return undefined;
    } else {
      return n.call(s, l => {
        const f = l.match(/(\d+)%/);
        x({
          msg: l,
          pct: l.startsWith("✓") ? 100 : f ? Number(f[1]) : 0,
          cls: l.startsWith("✓") ? "ok" : l.startsWith("✗") ? "err" : ""
        });
      });
    }
  }, []);
  const I = async n => {
    var f;
    if (!n) {
      return;
    }
    const l = (await ((f = s == null ? undefined : s.preview) == null ? undefined : f.call(s, n))) ?? null;
    j(l ? n : null);
    b(l);
    z(l ? "" : t.formatMessage({
      defaultMessage: "Can't read folder, or it's empty or too large",
      id: "T4jmJZPPo0",
      description: "Error when the dropped folder cannot be read or fails the size check"
    }), l ? "" : "err");
  };
  const Y = async () => {
    var n;
    if (h) {
      M(true);
      x({
        msg: t.formatMessage({
          defaultMessage: "Uploading…",
          id: "TZvMyB3+VV",
          description: "Progress label while a folder is being uploaded to the device"
        }),
        pct: 0,
        cls: ""
      });
      try {
        await ((n = s == null ? undefined : s.install) == null ? undefined : n.call(s, h));
      } catch (l) {
        z(l.message, "err");
      } finally {
        M(false);
      }
    }
  };
  const $ = async () => {
    var f;
    const n = p.trim();
    if (!n) {
      return;
    }
    const l = await ((f = s == null ? undefined : s.setName) == null ? undefined : f.call(s, n));
    z(l ? t.formatMessage({
      defaultMessage: "Name saved",
      id: "EZtqZABDTT",
      description: "Confirmation after the buddy device name was updated"
    }) : t.formatMessage({
      defaultMessage: "Device did not respond",
      id: "b32kW1tdoX",
      description: "Error when renaming the buddy device times out"
    }), l ? "ok" : "err");
  };
  const K = () => {
    var n;
    if (a != null && a.paired) {
      if ((n = s == null ? undefined : s.pairDevice) != null) {
        n.call(s).then(w);
      }
    } else {
      N(true);
    }
  };
  const Q = () => {
    var n;
    if ((n = s == null ? undefined : s.cancelScan) != null) {
      n.call(s);
    }
    N(false);
    w();
  };
  return <div className="buddy-body h-screen flex flex-col font-sans text-sm select-none nc-drag"><header className={`h-[45px] flex items-center ${W} pr-3 border-b shrink-0`} style={{
      borderColor: "var(--line)"
    }}><h1 className="text-xs font-bold opacity-40"><_Component defaultMessage="Hardware Buddy & Maker Devices" id="cIji9pIUOl" description="Title of the Hardware Buddy companion window" /></h1><_Component2 variant="ghost" size="sm" className="ml-auto nc-no-drag" style={u} onClick={() => D(true)}><_Component defaultMessage="What is this?" id="S/wf3blo3N" description="Header button that opens the maker guide overlay" /></_Component2></header><main className="flex-1 px-6 pt-5 pb-5 flex flex-col gap-4 nc-no-drag min-h-0 overflow-hidden"><div className="flex gap-5 items-stretch flex-1 min-h-0"><_Component3 preview={m} /><_Component4 conn={a} device={o} name={p} setName={v} onSetName={$} onConnect={K} onChange={() => N(true)} onForget={() => {
          var n;
          if ((n = s == null ? undefined : s.forgetDevice) == null) {
            undefined;
          } else {
            n.call(s).then(w);
          }
          return;
        }} /><div className="flex flex-col gap-4 flex-1 min-w-0"><div className={`buddy-card buddy-dashed p-3.5 flex-1 flex flex-col items-center justify-center text-center cursor-pointer transition-colors hover:!border-[var(--clay)] ${B ? "buddy-drop-over" : ""}`} onClick={() => {
            var n;
            if ((n = s == null ? undefined : s.pickFolder) == null) {
              undefined;
            } else {
              n.call(s).then(I);
            }
            return;
          }} onDragOver={n => {
            n.preventDefault();
            P(true);
          }} onDragLeave={() => P(false)} onDrop={n => {
            n.preventDefault();
            P(false);
            const l = n.dataTransfer.files[0];
            if (l) {
              I(window.buddy.getPathForFile(l));
            }
          }}><div className="text-[13px]" style={u}><_Component defaultMessage="Drop a data folder here{br}or click to choose" id="Hi3O8oQmoX" description="Drag-and-drop target instructions for sending a folder to the device" values={{
                br: <br />
              }} /></div>{h && <div className="mt-2 font-mono text-[11px] break-all" style={u}>{h.split("/").slice(-2).join("/")}</div>}</div><_Component2 variant="flat" size="lg" disabled={!h || k} onClick={Y}><_Component defaultMessage="Send to Device" id="rzOlorSGCr" description="Button to upload the selected folder to the buddy device" /></_Component2></div></div><div><div className={`buddy-bar ${k || y.pct ? "active" : ""}`}><div style={{
            width: `${y.pct}%`
          }} /></div><div className={`mt-2 font-mono text-[11px] min-h-[14px] ${y.cls === "err" ? "whitespace-pre-wrap text-left" : "text-center"}`} style={{
          color: y.cls === "ok" ? "var(--ok)" : y.cls === "err" ? "var(--err)" : "var(--ink-dim)"
        }}>{y.msg}</div></div></main>{T && <_Component5 onClose={() => D(false)} />}{F && <_Component6 deviceName={F} onSubmit={n => {
      var l;
      if ((l = s == null ? undefined : s.submitPin) != null) {
        l.call(s, n);
      }
      O(null);
      w();
    }} />}{L && <_Component7 onClose={Q} onPick={n => {
      var l;
      if ((l = s == null ? undefined : s.pickDevice) == null) {
        undefined;
      } else {
        l.call(s, n).then(() => {
          N(false);
          w();
        });
      }
      return;
    }} />}</div>;
}
export { fe as default };