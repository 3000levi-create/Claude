import { r as l, u as V, _ as w, s as C, j as i } from "./main-CJZVVI6d.js";
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
      e._sentryDebugIds[t] = "e504c6cc-5398-4e18-9dea-7972cac16684";
      e._sentryDebugIdIdentifier = "sentry-dbid-e504c6cc-5398-4e18-9dea-7972cac16684";
    }
  })();
} catch {}
function F(e, t) {
  var n = e.values;
  var s = w(e, ["values"]);
  var a = t.values;
  var d = w(t, ["values"]);
  return C(a, n) && C(s, d);
}
function H(e) {
  var t = V();
  var n = t.formatMessage;
  var s = t.textComponent;
  var a = s === undefined ? l.Fragment : s;
  var d = e.id;
  var f = e.description;
  var L = e.defaultMessage;
  var u = e.values;
  var m = e.children;
  var o = e.tagName;
  var c = o === undefined ? a : o;
  var g = e.ignoreTag;
  var x = {
    id: d,
    description: f,
    defaultMessage: L
  };
  var p = n(x, u, {
    ignoreTag: g
  });
  if (typeof m == "function") {
    return m(Array.isArray(p) ? p : [p]);
  } else if (c) {
    return l.createElement(c, null, p);
  } else {
    return l.createElement(l.Fragment, null, p);
  }
}
H.displayName = "FormattedMessage";
var _Component = l.memo(H, F);
_Component.displayName = "MemoizedFormattedMessage";
function M(e) {
  var t;
  var n;
  var s = "";
  if (typeof e == "string" || typeof e == "number") {
    s += e;
  } else if (typeof e == "object") {
    if (Array.isArray(e)) {
      var a = e.length;
      for (t = 0; t < a; t++) {
        if (e[t] && (n = M(e[t]))) {
          if (s) {
            s += " ";
          }
          s += n;
        }
      }
    } else {
      for (n in e) {
        if (e[n]) {
          if (s) {
            s += " ";
          }
          s += n;
        }
      }
    }
  }
  return s;
}
function b() {
  var e;
  var t;
  for (var n = 0, s = "", a = arguments.length; n < a; n++) {
    if ((e = arguments[n]) && (t = M(e))) {
      if (s) {
        s += " ";
      }
      s += t;
    }
  }
  return s;
}
const S = (e = "primary") => b("inline-flex items-center justify-center relative shrink-0 select-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none disabled:drop-shadow-none", {
  primary: "bg-text-000 text-bg-000 relative overflow-hidden font-medium font-sans transition-transform will-change-transform ease-[cubic-bezier(0.165,0.85,0.45,1)] duration-150 hover:scale-y-[1.015] hover:scale-x-[1.005] backface-hidden after:absolute after:inset-0 after:bg-[radial-gradient(at_bottom,hsla(var(--bg-000)/20%),hsla(var(--bg-000)/0%))] after:opacity-0 after:transition after:duration-200 after:translate-y-2 hover:after:opacity-100 hover:after:translate-y-0",
  secondary: "text-text-000 border-0.5 border-border-300 relative overflow-hidden font-sans font-medium transition duration-100 hover:border-border-300/0 bg-bg-300/0 hover:bg-bg-400 backface-hidden",
  flat: "bg-brand-000 text-oncolor-100 font-sans font-medium transition-colors hover:bg-brand-200",
  ghost: "text-text-300 border-transparent transition font-sans duration-300 ease-[cubic-bezier(0.165,0.85,0.45,1)] hover:bg-bg-400 aria-pressed:bg-bg-400 aria-checked:bg-bg-400 aria-expanded:bg-bg-300 hover:text-text-100 aria-pressed:text-text-100 aria-checked:text-text-100 aria-expanded:text-text-100",
  danger: "bg-danger-200 text-oncolor-100 font-sans font-medium transition hover:scale-y-[1.015] hover:scale-x-[1.005] hover:opacity-95",
  unstyled: ""
}[e]);
const I = (e = "default", t, n) => {
  let a = {
    default: "h-9 px-4 py-2 rounded-lg min-w-[5rem] active:scale-[0.985] whitespace-nowrap text-sm",
    sm: "h-8 rounded-md px-3 text-xs min-w-[4rem] active:scale-[0.985] whitespace-nowrap",
    lg: "h-11 rounded-[0.6rem] px-5 min-w-[6rem] active:scale-[0.985] whitespace-nowrap",
    icon: "h-9 w-9 rounded-md active:scale-95 shrink-0",
    icon_xs: "h-6 w-6 rounded-md active:scale-95",
    icon_sm: "h-8 w-8 rounded-md active:scale-95",
    icon_lg: "h-11 w-11 rounded-[0.6rem] active:scale-95",
    inline: "px-0.5 rounded-[0.25rem]",
    unset: ""
  }[e];
  if (t) {
    if (e === "default") {
      a = a.replace("px-4", "pl-2 pr-3 gap-1");
    } else if (e === "lg") {
      a = a.replace("px-5", "pl-2.5 pr-3.5 gap-1");
    } else if (e === "sm") {
      a = a.replace("px-3", "pl-2 pr-2.5 gap-1");
    }
  }
  if (n) {
    if (e === "default") {
      a = a.replace("px-4", "pl-3 pr-2 gap-1");
    } else if (e === "lg") {
      a = a.replace("px-5", "pl-3.5 pr-2.5 gap-1");
    } else if (e === "sm") {
      a = a.replace("px-3", "pl-2.5 pr-2 gap-1");
    }
  }
  return a;
};
const _Component2 = l.forwardRef(({
  className: e,
  variant: t = "primary",
  size: n = "default",
  rounded: s,
  href: a,
  onLinkClick: d,
  target: f,
  prepend: L,
  append: u,
  disabled: m,
  children: o,
  type: c = "button",
  ...g
}, x) => {
  const p = b(S(t), I(n, !!L, !!u), s && "!rounded-full", e);
  const y = <i.Fragment>{L}{o}{u}</i.Fragment>;
  if (a) {
    const {
      style: T,
      "aria-label": _,
      rel: E
    } = g;
    return <a href={a} target={f || "_self"} rel={E} className={p} aria-label={_} onClick={d} style={T}>{y}</a>;
  }
  return <button className={p} ref={x} disabled={m} type={c} {...g}>{y}</button>;
});
_Component2.displayName = "Button";
function B({
  width: e = 16,
  height: t = 16,
  style: n
}) {
  return <svg width={e} height={t} style={n} viewBox="0 0 248 248" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M52.4285 162.873L98.7844 136.879L99.5485 134.602L98.7844 133.334H96.4921L88.7237 132.862L62.2346 132.153L39.3113 131.207L17.0249 130.026L11.4214 128.844L6.2 121.873L6.7094 118.447L11.4214 115.257L18.171 115.847L33.0711 116.911L55.485 118.447L71.6586 119.392L95.728 121.873H99.5485L100.058 120.337L98.7844 119.392L97.7656 118.447L74.5877 102.732L49.4995 86.1905L36.3823 76.62L29.3779 71.7757L25.8121 67.2858L24.2839 57.3608L30.6515 50.2716L39.3113 50.8623L41.4763 51.4531L50.2636 58.1879L68.9842 72.7209L93.4357 90.6804L97.0015 93.6343L98.4374 92.6652L98.6571 91.9801L97.0015 89.2625L83.757 65.2772L69.621 40.8192L63.2534 30.6579L61.5978 24.632C60.9565 22.1032 60.579 20.0111 60.579 17.4246L67.8381 7.49965L71.9133 6.19995L81.7193 7.49965L85.7946 11.0443L91.9074 24.9865L101.714 46.8451L116.996 76.62L121.453 85.4816L123.873 93.6343L124.764 96.1155H126.292V94.6976L127.566 77.9197L129.858 57.3608L132.15 30.8942L132.915 23.4505L136.608 14.4708L143.994 9.62643L149.725 12.344L154.437 19.0788L153.8 23.4505L150.998 41.6463L145.522 70.1215L141.957 89.2625H143.994L146.414 86.7813L156.093 74.0206L172.266 53.698L179.398 45.6635L187.803 36.802L193.152 32.5484H203.34L210.726 43.6549L207.415 55.1159L196.972 68.3492L188.312 79.5739L175.896 96.2095L168.191 109.585L168.882 110.689L170.738 110.53L198.755 104.504L213.91 101.787L231.994 98.7149L240.144 102.496L241.036 106.395L237.852 114.311L218.495 119.037L195.826 123.645L162.07 131.592L161.696 131.893L162.137 132.547L177.36 133.925L183.855 134.279H199.774L229.447 136.524L237.215 141.605L241.8 147.867L241.036 152.711L229.065 158.737L213.019 154.956L175.45 145.977L162.587 142.787H160.805V143.85L171.502 154.366L191.242 172.089L215.82 195.011L217.094 200.682L213.91 205.172L210.599 204.699L188.949 188.394L180.544 181.069L161.696 165.118H160.422V166.772L164.752 173.152L187.803 207.771L188.949 218.405L187.294 221.832L181.308 223.959L174.813 222.777L161.187 203.754L147.305 182.486L136.098 163.345L134.745 164.2L128.075 235.42L125.019 239.082L117.887 241.8L111.902 237.31L108.718 229.984L111.902 215.452L115.722 196.547L118.779 181.541L121.58 162.873L123.291 156.636L123.14 156.219L121.773 156.449L107.699 175.752L86.304 204.699L69.3663 222.777L65.291 224.431L58.2867 220.768L58.9235 214.27L62.8713 208.48L86.304 178.705L100.44 160.155L109.551 149.507L109.462 147.967L108.959 147.924L46.6977 188.512L35.6182 189.93L30.7788 185.44L31.4156 178.115L33.7079 175.752L52.4285 162.873Z" fill="#D97757" /></svg>;
}
var N;
const r = (N = globalThis["claude.internal.ui"]) == null ? undefined : N.AboutWindow;
var j;
if ((j = globalThis["claude.internal.ui"]) != null) {
  j.QuickWindow;
}
var k;
if ((k = globalThis["claude.internal.ui"]) != null) {
  k.MainWindowTitleBar;
}
function $({
  className: e
}) {
  const [t, n] = l.useState("");
  l.useEffect(() => {
    (async () => {
      var L;
      const f = await ((L = r == null ? undefined : r.getAppName) == null ? undefined : L.call(r));
      if (f) {
        n(f);
      }
    })();
  }, []);
  const s = "Windows";
  const a = t || "Claude";
  return <h2 className={b(e, "font-serif font-medium text-text-100 text-2xl select-none")} style={{
    maxWidth: "95%"
  }}>{a} <em>for </em>{s}</h2>;
}
function D() {
  const [e, t] = l.useState(null);
  const [n, s] = l.useState(false);
  const d = (e == null ? undefined : e.commitHash) && e.commitHash !== "unknown" ? e.commitHash.slice(0, 6) : "Unknown";
  const f = `${process.version} (${d})`;
  const L = l.useCallback(() => {
    var o;
    if ((o = r == null ? undefined : r.openHelp) != null) {
      o.call(r);
    }
  }, []);
  const u = l.useCallback(() => {
    var o;
    if ((o = r == null ? undefined : r.getSupport) != null) {
      o.call(r);
    }
  }, []);
  const m = l.useCallback(async () => {
    var o;
    try {
      const g = `${await ((o = r == null ? undefined : r.getAppName) == null ? undefined : o.call(r))} ${process.version} (${d}) ${(e == null ? undefined : e.commitTimestamp) || ""}`.trim();
      await navigator.clipboard.writeText(g);
      s(true);
      setTimeout(() => s(false), 2000);
    } catch (c) {
      console.error("Failed to copy version to clipboard:", c);
    }
  }, [e, d]);
  l.useEffect(() => {
    var o;
    if ((o = r == null ? undefined : r.getBuildProps) != null) {
      o.call(r).then(c => {
        t(c);
      }).catch(c => {
        console.error("Failed to fetch build properties:", c);
      });
    }
  }, []);
  return <div className="flex flex-col items-center w-full h-full pt-16 nc-drag"><B width={84} height={84} /><$ className="mt-4" /><h3 className="text-text-400 font-sans text-md mt-2 nc-no-drag cursor-pointer hover:text-text-300 transition-colors" onClick={m}>{n ? <_Component defaultMessage="Copied version to clipboard" id="mCXNyEdJat" description="Message shown briefly after copying version to clipboard" /> : <_Component defaultMessage="Version {version}" id="S3k5yXss2r" description="Version number display in the About window. {version} is the application version number" values={{
        version: f
      }} />}</h3><div className="w-full px-16 mt-6 flex flex-col font-sans text-xl font-medium text-text-100 nc-no-drag"><_Component2 variant="secondary" onClick={L}><_Component id="zAYm/Z684h" defaultMessage="Help" description="Label for the Help button in the About window" /></_Component2><_Component2 className="mt-4" variant="secondary" onClick={u}><_Component id="XfMPtFNO8C" defaultMessage="Get support" description="Label for the Get support button in the About window" /></_Component2></div></div>;
}
function G() {
  return <D />;
}
export { G as default };