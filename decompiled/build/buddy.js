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
      r._sentryDebugIds[e] = "66654af2-65af-4da0-a47b-f0d079b6a9dc";
      r._sentryDebugIdIdentifier = "sentry-dbid-66654af2-65af-4da0-a47b-f0d079b6a9dc";
    }
  })();
} catch {}
const b = require("electron");
const x = require("electron/renderer");
function Re() {
  var r;
  if ("frameToken" in x.webFrame && x.webFrame.top && "frameToken" in x.webFrame.top) {
    return x.webFrame.top.frameToken === x.webFrame.frameToken;
  } else {
    return ((r = x.webFrame.top) == null ? undefined : r.routingId) === x.webFrame.routingId;
  }
}
const Ne = {
  status() {
    return b.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.buddy_$_Buddy_$_status");
  },
  deviceStatus() {
    return b.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.buddy_$_Buddy_$_deviceStatus");
  },
  setName(r) {
    return b.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.buddy_$_Buddy_$_setName", r);
  },
  pairDevice() {
    return b.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.buddy_$_Buddy_$_pairDevice");
  },
  scanDevices() {
    return b.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.buddy_$_Buddy_$_scanDevices");
  },
  pickDevice(r) {
    return b.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.buddy_$_Buddy_$_pickDevice", r);
  },
  cancelScan() {
    return b.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.buddy_$_Buddy_$_cancelScan");
  },
  submitPin(r) {
    return b.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.buddy_$_Buddy_$_submitPin", r);
  },
  forgetDevice() {
    return b.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.buddy_$_Buddy_$_forgetDevice");
  },
  pickFolder() {
    return b.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.buddy_$_Buddy_$_pickFolder");
  },
  preview(r) {
    return b.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.buddy_$_Buddy_$_preview", r);
  },
  install(r) {
    return b.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.buddy_$_Buddy_$_install", r);
  },
  onProgress(r) {
    const e = (t, s) => r(s);
    b.ipcRenderer.on("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.buddy_$_Buddy_$_progress", e);
    return () => {
      b.ipcRenderer.removeListener("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.buddy_$_Buddy_$_progress", e);
    };
  },
  onPairingPrompt(r) {
    const e = (t, s) => r(s);
    b.ipcRenderer.on("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.buddy_$_Buddy_$_pairingPrompt", e);
    return () => {
      b.ipcRenderer.removeListener("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.buddy_$_Buddy_$_pairingPrompt", e);
    };
  }
};
const Se = r => {
  if (Re()) {
    r["claude.buddy"] = r["claude.buddy"] || {};
    r["claude.buddy"].Buddy = Ne;
  }
};
const xe = {};
Se(xe);
for (const [r, e] of Object.entries(xe)) {
  b.contextBridge.exposeInMainWorld(r, e);
}
function Ie() {
  var e;
  let r;
  try {
    r = new URL(window.location.href);
  } catch {
    return false;
  }
  return !!("frameToken" in x.webFrame && x.webFrame.top && "frameToken" in x.webFrame.top ? x.webFrame.top.frameToken === x.webFrame.frameToken : ((e = x.webFrame.top) == null ? undefined : e.routingId) === x.webFrame.routingId) && ((r.origin === "null" || r.origin === null ? `${r.protocol}//${r.host}` : r.origin) === "https://claude.ai" || (r.origin === "null" || r.origin === null ? `${r.protocol}//${r.host}` : r.origin) === "https://preview.claude.ai" || (r.origin === "null" || r.origin === null ? `${r.protocol}//${r.host}` : r.origin) === "https://claude.com" || (r.origin === "null" || r.origin === null ? `${r.protocol}//${r.host}` : r.origin) === "https://preview.claude.com" || r.hostname === "localhost" || !!(r.origin === "null" || r.origin === null ? `${r.protocol}//${r.host}` : r.origin).endsWith(".ant.dev") || r.hostname === "localhost" || r.protocol === "file:" || (r.origin === "null" || r.origin === null ? `${r.protocol}//${r.host}` : r.origin) === "app://localhost");
}
const Ae = {
  getInitialLocale() {
    return b.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.hybrid_$_DesktopIntl_$_getInitialLocale");
  },
  requestLocaleChange(r) {
    return b.ipcRenderer.invoke("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.hybrid_$_DesktopIntl_$_requestLocaleChange", r);
  },
  onLocaleChanged(r) {
    const e = (t, s, n) => r(s, n);
    b.ipcRenderer.on("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.hybrid_$_DesktopIntl_$_localeChanged", e);
    return () => {
      b.ipcRenderer.removeListener("$eipc_message$_6b262b63-5a77-4b4d-9676-f029b3b91e60_$_claude.hybrid_$_DesktopIntl_$_localeChanged", e);
    };
  }
};
const Ze = r => {
  if (Ie()) {
    r["claude.hybrid"] = r["claude.hybrid"] || {};
    r["claude.hybrid"].DesktopIntl = Ae;
  }
};
const we = {};
Ze(we);
for (const [r, e] of Object.entries(we)) {
  b.contextBridge.exposeInMainWorld(r, e);
}
const ae = "--desktop-enterprise-config=";
function Ee(r) {
  const e = r.find(t => t.startsWith(ae));
  if (!e) {
    return false;
  }
  try {
    const t = JSON.parse(e.slice(ae.length));
    return (t == null ? undefined : t.disableEssentialTelemetry) === true;
  } catch {
    return false;
  }
}
var y;
(function (r) {
  r.assertEqual = n => {};
  function e(n) {}
  r.assertIs = e;
  function t(n) {
    throw new Error();
  }
  r.assertNever = t;
  r.arrayToEnum = n => {
    const a = {};
    for (const i of n) {
      a[i] = i;
    }
    return a;
  };
  r.getValidEnumValues = n => {
    const a = r.objectKeys(n).filter(d => typeof n[n[d]] != "number");
    const i = {};
    for (const d of a) {
      i[d] = n[d];
    }
    return r.objectValues(i);
  };
  r.objectValues = n => r.objectKeys(n).map(function (a) {
    return n[a];
  });
  r.objectKeys = typeof Object.keys == "function" ? n => Object.keys(n) : n => {
    const a = [];
    for (const i in n) {
      if (Object.prototype.hasOwnProperty.call(n, i)) {
        a.push(i);
      }
    }
    return a;
  };
  r.find = (n, a) => {
    for (const i of n) {
      if (a(i)) {
        return i;
      }
    }
  };
  r.isInteger = typeof Number.isInteger == "function" ? n => Number.isInteger(n) : n => typeof n == "number" && Number.isFinite(n) && Math.floor(n) === n;
  function s(n, a = " | ") {
    return n.map(i => typeof i == "string" ? `'${i}'` : i).join(a);
  }
  r.joinValues = s;
  r.jsonStringifyReplacer = (n, a) => typeof a == "bigint" ? a.toString() : a;
})(y ||= {});
var ie;
(function (r) {
  r.mergeShapes = (e, t) => ({
    ...e,
    ...t
  });
})(ie ||= {});
const u = y.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]);
const O = r => {
  switch (typeof r) {
    case "undefined":
      return u.undefined;
    case "string":
      return u.string;
    case "number":
      if (Number.isNaN(r)) {
        return u.nan;
      } else {
        return u.number;
      }
    case "boolean":
      return u.boolean;
    case "function":
      return u.function;
    case "bigint":
      return u.bigint;
    case "symbol":
      return u.symbol;
    case "object":
      if (Array.isArray(r)) {
        return u.array;
      } else if (r === null) {
        return u.null;
      } else if (r.then && typeof r.then == "function" && r.catch && typeof r.catch == "function") {
        return u.promise;
      } else if (typeof Map !== "undefined" && r instanceof Map) {
        return u.map;
      } else if (typeof Set !== "undefined" && r instanceof Set) {
        return u.set;
      } else if (typeof Date !== "undefined" && r instanceof Date) {
        return u.date;
      } else {
        return u.object;
      }
    default:
      return u.unknown;
  }
};
const o = y.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
class C extends Error {
  get errors() {
    return this.issues;
  }
  constructor(e) {
    super();
    this.issues = [];
    this.addIssue = s => {
      this.issues = [...this.issues, s];
    };
    this.addIssues = (s = []) => {
      this.issues = [...this.issues, ...s];
    };
    const t = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, t);
    } else {
      this.__proto__ = t;
    }
    this.name = "ZodError";
    this.issues = e;
  }
  format(e) {
    const t = e || function (a) {
      return a.message;
    };
    const s = {
      _errors: []
    };
    const n = a => {
      for (const i of a.issues) {
        if (i.code === "invalid_union") {
          i.unionErrors.map(n);
        } else if (i.code === "invalid_return_type") {
          n(i.returnTypeError);
        } else if (i.code === "invalid_arguments") {
          n(i.argumentsError);
        } else if (i.path.length === 0) {
          s._errors.push(t(i));
        } else {
          let d = s;
          let f = 0;
          while (f < i.path.length) {
            const h = i.path[f];
            if (f === i.path.length - 1) {
              d[h] = d[h] || {
                _errors: []
              };
              d[h]._errors.push(t(i));
            } else {
              d[h] = d[h] || {
                _errors: []
              };
            }
            d = d[h];
            f++;
          }
        }
      }
    };
    n(this);
    return s;
  }
  static assert(e) {
    if (!(e instanceof C)) {
      throw new Error(`Not a ZodError: ${e}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, y.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = t => t.message) {
    const t = {};
    const s = [];
    for (const n of this.issues) {
      if (n.path.length > 0) {
        const a = n.path[0];
        t[a] = t[a] || [];
        t[a].push(e(n));
      } else {
        s.push(e(n));
      }
    }
    return {
      formErrors: s,
      fieldErrors: t
    };
  }
  get formErrors() {
    return this.flatten();
  }
}
C.create = r => new C(r);
const G = (r, e) => {
  let t;
  switch (r.code) {
    case o.invalid_type:
      if (r.received === u.undefined) {
        t = "Required";
      } else {
        t = `Expected ${r.expected}, received ${r.received}`;
      }
      break;
    case o.invalid_literal:
      t = `Invalid literal value, expected ${JSON.stringify(r.expected, y.jsonStringifyReplacer)}`;
      break;
    case o.unrecognized_keys:
      t = `Unrecognized key(s) in object: ${y.joinValues(r.keys, ", ")}`;
      break;
    case o.invalid_union:
      t = "Invalid input";
      break;
    case o.invalid_union_discriminator:
      t = `Invalid discriminator value. Expected ${y.joinValues(r.options)}`;
      break;
    case o.invalid_enum_value:
      t = `Invalid enum value. Expected ${y.joinValues(r.options)}, received '${r.received}'`;
      break;
    case o.invalid_arguments:
      t = "Invalid function arguments";
      break;
    case o.invalid_return_type:
      t = "Invalid function return type";
      break;
    case o.invalid_date:
      t = "Invalid date";
      break;
    case o.invalid_string:
      if (typeof r.validation == "object") {
        if ("includes" in r.validation) {
          t = `Invalid input: must include "${r.validation.includes}"`;
          if (typeof r.validation.position == "number") {
            t = `${t} at one or more positions greater than or equal to ${r.validation.position}`;
          }
        } else if ("startsWith" in r.validation) {
          t = `Invalid input: must start with "${r.validation.startsWith}"`;
        } else if ("endsWith" in r.validation) {
          t = `Invalid input: must end with "${r.validation.endsWith}"`;
        } else {
          y.assertNever(r.validation);
        }
      } else if (r.validation !== "regex") {
        t = `Invalid ${r.validation}`;
      } else {
        t = "Invalid";
      }
      break;
    case o.too_small:
      if (r.type === "array") {
        t = `Array must contain ${r.exact ? "exactly" : r.inclusive ? "at least" : "more than"} ${r.minimum} element(s)`;
      } else if (r.type === "string") {
        t = `String must contain ${r.exact ? "exactly" : r.inclusive ? "at least" : "over"} ${r.minimum} character(s)`;
      } else if (r.type === "number") {
        t = `Number must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${r.minimum}`;
      } else if (r.type === "bigint") {
        t = `Number must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${r.minimum}`;
      } else if (r.type === "date") {
        t = `Date must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(r.minimum))}`;
      } else {
        t = "Invalid input";
      }
      break;
    case o.too_big:
      if (r.type === "array") {
        t = `Array must contain ${r.exact ? "exactly" : r.inclusive ? "at most" : "less than"} ${r.maximum} element(s)`;
      } else if (r.type === "string") {
        t = `String must contain ${r.exact ? "exactly" : r.inclusive ? "at most" : "under"} ${r.maximum} character(s)`;
      } else if (r.type === "number") {
        t = `Number must be ${r.exact ? "exactly" : r.inclusive ? "less than or equal to" : "less than"} ${r.maximum}`;
      } else if (r.type === "bigint") {
        t = `BigInt must be ${r.exact ? "exactly" : r.inclusive ? "less than or equal to" : "less than"} ${r.maximum}`;
      } else if (r.type === "date") {
        t = `Date must be ${r.exact ? "exactly" : r.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(r.maximum))}`;
      } else {
        t = "Invalid input";
      }
      break;
    case o.custom:
      t = "Invalid input";
      break;
    case o.invalid_intersection_types:
      t = "Intersection results could not be merged";
      break;
    case o.not_multiple_of:
      t = `Number must be a multiple of ${r.multipleOf}`;
      break;
    case o.not_finite:
      t = "Number must be finite";
      break;
    default:
      t = e.defaultError;
      y.assertNever(r);
  }
  return {
    message: t
  };
};
let je = G;
function De() {
  return je;
}
const Pe = r => {
  const {
    data: e,
    path: t,
    errorMaps: s,
    issueData: n
  } = r;
  const a = [...t, ...(n.path || [])];
  const i = {
    ...n,
    path: a
  };
  if (n.message !== undefined) {
    return {
      ...n,
      path: a,
      message: n.message
    };
  }
  let d = "";
  const f = s.filter(h => !!h).slice().reverse();
  for (const h of f) {
    d = h(i, {
      data: e,
      defaultError: d
    }).message;
  }
  return {
    ...n,
    path: a,
    message: d
  };
};
function c(r, e) {
  const t = De();
  const s = Pe({
    issueData: e,
    data: r.data,
    path: r.path,
    errorMaps: [r.common.contextualErrorMap, r.schemaErrorMap, t, t === G ? undefined : G].filter(n => n)
  });
  r.common.issues.push(s);
}
class w {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid") {
      this.value = "dirty";
    }
  }
  abort() {
    if (this.value !== "aborted") {
      this.value = "aborted";
    }
  }
  static mergeArray(e, t) {
    const s = [];
    for (const n of t) {
      if (n.status === "aborted") {
        return m;
      }
      if (n.status === "dirty") {
        e.dirty();
      }
      s.push(n.value);
    }
    return {
      status: e.value,
      value: s
    };
  }
  static async mergeObjectAsync(e, t) {
    const s = [];
    for (const n of t) {
      const a = await n.key;
      const i = await n.value;
      s.push({
        key: a,
        value: i
      });
    }
    return w.mergeObjectSync(e, s);
  }
  static mergeObjectSync(e, t) {
    const s = {};
    for (const n of t) {
      const {
        key: a,
        value: i
      } = n;
      if (a.status === "aborted" || i.status === "aborted") {
        return m;
      }
      if (a.status === "dirty") {
        e.dirty();
      }
      if (i.status === "dirty") {
        e.dirty();
      }
      if (a.value !== "__proto__" && (typeof i.value !== "undefined" || n.alwaysSet)) {
        s[a.value] = i.value;
      }
    }
    return {
      status: e.value,
      value: s
    };
  }
}
const m = Object.freeze({
  status: "aborted"
});
const V = r => ({
  status: "dirty",
  value: r
});
const $ = r => ({
  status: "valid",
  value: r
});
const de = r => r.status === "aborted";
const oe = r => r.status === "dirty";
const E = r => r.status === "valid";
const F = r => typeof Promise !== "undefined" && r instanceof Promise;
var l;
(function (r) {
  r.errToObj = e => typeof e == "string" ? {
    message: e
  } : e || {};
  r.toString = e => typeof e == "string" ? e : e == null ? undefined : e.message;
})(l ||= {});
class S {
  constructor(e, t, s, n) {
    this._cachedPath = [];
    this.parent = e;
    this.data = t;
    this._path = s;
    this._key = n;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (Array.isArray(this._key)) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
}
const ce = (r, e) => {
  if (E(e)) {
    return {
      success: true,
      data: e.value
    };
  }
  if (!r.common.issues.length) {
    throw new Error("Validation failed but no issues detected.");
  }
  return {
    success: false,
    get error() {
      if (this._error) {
        return this._error;
      }
      const t = new C(r.common.issues);
      this._error = t;
      return this._error;
    }
  };
};
function _(r) {
  if (!r) {
    return {};
  }
  const {
    errorMap: e,
    invalid_type_error: t,
    required_error: s,
    description: n
  } = r;
  if (e && (t || s)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (e) {
    return {
      errorMap: e,
      description: n
    };
  } else {
    return {
      errorMap: (i, d) => {
        const {
          message: f
        } = r;
        if (i.code === "invalid_enum_value") {
          return {
            message: f ?? d.defaultError
          };
        } else if (typeof d.data === "undefined") {
          return {
            message: f ?? s ?? d.defaultError
          };
        } else if (i.code !== "invalid_type") {
          return {
            message: d.defaultError
          };
        } else {
          return {
            message: f ?? t ?? d.defaultError
          };
        }
      },
      description: n
    };
  }
}
class g {
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return O(e.data);
  }
  _getOrReturnCtx(e, t) {
    return t || {
      common: e.parent.common,
      data: e.data,
      parsedType: O(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new w(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: O(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const t = this._parse(e);
    if (F(t)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return t;
  }
  _parseAsync(e) {
    const t = this._parse(e);
    return Promise.resolve(t);
  }
  parse(e, t) {
    const s = this.safeParse(e, t);
    if (s.success) {
      return s.data;
    }
    throw s.error;
  }
  safeParse(e, t) {
    const s = {
      common: {
        issues: [],
        async: (t == null ? undefined : t.async) ?? false,
        contextualErrorMap: t == null ? undefined : t.errorMap
      },
      path: (t == null ? undefined : t.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: O(e)
    };
    const n = this._parseSync({
      data: e,
      path: s.path,
      parent: s
    });
    return ce(s, n);
  }
  "~validate"(e) {
    var s;
    var n;
    const t = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: O(e)
    };
    if (!this["~standard"].async) {
      try {
        const a = this._parseSync({
          data: e,
          path: [],
          parent: t
        });
        if (E(a)) {
          return {
            value: a.value
          };
        } else {
          return {
            issues: t.common.issues
          };
        }
      } catch (a) {
        if ((n = (s = a == null ? undefined : a.message) == null ? undefined : s.toLowerCase()) != null && n.includes("encountered")) {
          this["~standard"].async = true;
        }
        t.common = {
          issues: [],
          async: true
        };
      }
    }
    return this._parseAsync({
      data: e,
      path: [],
      parent: t
    }).then(a => E(a) ? {
      value: a.value
    } : {
      issues: t.common.issues
    });
  }
  async parseAsync(e, t) {
    const s = await this.safeParseAsync(e, t);
    if (s.success) {
      return s.data;
    }
    throw s.error;
  }
  async safeParseAsync(e, t) {
    const s = {
      common: {
        issues: [],
        contextualErrorMap: t == null ? undefined : t.errorMap,
        async: true
      },
      path: (t == null ? undefined : t.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: O(e)
    };
    const n = this._parse({
      data: e,
      path: s.path,
      parent: s
    });
    const a = await (F(n) ? n : Promise.resolve(n));
    return ce(s, a);
  }
  refine(e, t) {
    const s = n => typeof t == "string" || typeof t === "undefined" ? {
      message: t
    } : typeof t == "function" ? t(n) : t;
    return this._refinement((n, a) => {
      const i = e(n);
      const d = () => a.addIssue({
        code: o.custom,
        ...s(n)
      });
      if (typeof Promise !== "undefined" && i instanceof Promise) {
        return i.then(f => f ? true : (d(), false));
      } else if (i) {
        return true;
      } else {
        d();
        return false;
      }
    });
  }
  refinement(e, t) {
    return this._refinement((s, n) => e(s) ? true : (n.addIssue(typeof t == "function" ? t(s, n) : t), false));
  }
  _refinement(e) {
    return new D({
      schema: this,
      typeName: p.ZodEffects,
      effect: {
        type: "refinement",
        refinement: e
      }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  constructor(e) {
    this.spa = this.safeParseAsync;
    this._def = e;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: t => this["~validate"](t)
    };
  }
  optional() {
    return N.create(this, this._def);
  }
  nullable() {
    return P.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return T.create(this);
  }
  promise() {
    return J.create(this, this._def);
  }
  or(e) {
    return W.create([this, e], this._def);
  }
  and(e) {
    return q.create(this, e, this._def);
  }
  transform(e) {
    return new D({
      ..._(this._def),
      schema: this,
      typeName: p.ZodEffects,
      effect: {
        type: "transform",
        transform: e
      }
    });
  }
  default(e) {
    const t = typeof e == "function" ? e : () => e;
    return new ee({
      ..._(this._def),
      innerType: this,
      defaultValue: t,
      typeName: p.ZodDefault
    });
  }
  brand() {
    return new it({
      typeName: p.ZodBranded,
      type: this,
      ..._(this._def)
    });
  }
  catch(e) {
    const t = typeof e == "function" ? e : () => e;
    return new te({
      ..._(this._def),
      innerType: this,
      catchValue: t,
      typeName: p.ZodCatch
    });
  }
  describe(e) {
    const t = this.constructor;
    return new t({
      ...this._def,
      description: e
    });
  }
  pipe(e) {
    return se.create(this, e);
  }
  readonly() {
    return re.create(this);
  }
  isOptional() {
    return this.safeParse(undefined).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Le = /^c[^\s-]{8,}$/i;
const Ve = /^[0-9a-z]+$/;
const Me = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
const Be = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
const ze = /^[a-z0-9_-]{21}$/i;
const Fe = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
const Ue = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
const We = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
const qe = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let H;
const Je = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
const He = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
const Ye = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
const Ge = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
const Xe = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
const Qe = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
const $e = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))";
const Ke = new RegExp(`^${$e}$`);
function Te(r) {
  let e = "[0-5]\\d";
  if (r.precision) {
    e = `${e}\\.\\d{${r.precision}}`;
  } else if (r.precision == null) {
    e = `${e}(\\.\\d+)?`;
  }
  const t = r.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${e})${t}`;
}
function et(r) {
  return new RegExp(`^${Te(r)}$`);
}
function tt(r) {
  let e = `${$e}T${Te(r)}`;
  const t = [];
  t.push(r.local ? "Z?" : "Z");
  if (r.offset) {
    t.push("([+-]\\d{2}:?\\d{2})");
  }
  e = `${e}(${t.join("|")})`;
  return new RegExp(`^${e}$`);
}
function rt(r, e) {
  return (e === "v4" || !e) && !!Je.test(r) || (e === "v6" || !e) && !!Ye.test(r);
}
function st(r, e) {
  if (!Fe.test(r)) {
    return false;
  }
  try {
    const [t] = r.split(".");
    if (!t) {
      return false;
    }
    const s = t.replace(/-/g, "+").replace(/_/g, "/").padEnd(t.length + (4 - t.length % 4) % 4, "=");
    const n = JSON.parse(atob(s));
    return typeof n == "object" && n !== null && (!("typ" in n) || (n == null ? undefined : n.typ) === "JWT") && !!n.alg && (!e || n.alg === e);
  } catch {
    return false;
  }
}
function nt(r, e) {
  return (e === "v4" || !e) && !!He.test(r) || (e === "v6" || !e) && !!Ge.test(r);
}
class R extends g {
  _parse(e) {
    if (this._def.coerce) {
      e.data = String(e.data);
    }
    if (this._getType(e) !== u.string) {
      const a = this._getOrReturnCtx(e);
      c(a, {
        code: o.invalid_type,
        expected: u.string,
        received: a.parsedType
      });
      return m;
    }
    const s = new w();
    let n;
    for (const a of this._def.checks) {
      if (a.kind === "min") {
        if (e.data.length < a.value) {
          n = this._getOrReturnCtx(e, n);
          c(n, {
            code: o.too_small,
            minimum: a.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: a.message
          });
          s.dirty();
        }
      } else if (a.kind === "max") {
        if (e.data.length > a.value) {
          n = this._getOrReturnCtx(e, n);
          c(n, {
            code: o.too_big,
            maximum: a.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: a.message
          });
          s.dirty();
        }
      } else if (a.kind === "length") {
        const i = e.data.length > a.value;
        const d = e.data.length < a.value;
        if (i || d) {
          n = this._getOrReturnCtx(e, n);
          if (i) {
            c(n, {
              code: o.too_big,
              maximum: a.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: a.message
            });
          } else if (d) {
            c(n, {
              code: o.too_small,
              minimum: a.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: a.message
            });
          }
          s.dirty();
        }
      } else if (a.kind === "email") {
        if (!We.test(e.data)) {
          n = this._getOrReturnCtx(e, n);
          c(n, {
            validation: "email",
            code: o.invalid_string,
            message: a.message
          });
          s.dirty();
        }
      } else if (a.kind === "emoji") {
        H ||= new RegExp(qe, "u");
        if (!H.test(e.data)) {
          n = this._getOrReturnCtx(e, n);
          c(n, {
            validation: "emoji",
            code: o.invalid_string,
            message: a.message
          });
          s.dirty();
        }
      } else if (a.kind === "uuid") {
        if (!Be.test(e.data)) {
          n = this._getOrReturnCtx(e, n);
          c(n, {
            validation: "uuid",
            code: o.invalid_string,
            message: a.message
          });
          s.dirty();
        }
      } else if (a.kind === "nanoid") {
        if (!ze.test(e.data)) {
          n = this._getOrReturnCtx(e, n);
          c(n, {
            validation: "nanoid",
            code: o.invalid_string,
            message: a.message
          });
          s.dirty();
        }
      } else if (a.kind === "cuid") {
        if (!Le.test(e.data)) {
          n = this._getOrReturnCtx(e, n);
          c(n, {
            validation: "cuid",
            code: o.invalid_string,
            message: a.message
          });
          s.dirty();
        }
      } else if (a.kind === "cuid2") {
        if (!Ve.test(e.data)) {
          n = this._getOrReturnCtx(e, n);
          c(n, {
            validation: "cuid2",
            code: o.invalid_string,
            message: a.message
          });
          s.dirty();
        }
      } else if (a.kind === "ulid") {
        if (!Me.test(e.data)) {
          n = this._getOrReturnCtx(e, n);
          c(n, {
            validation: "ulid",
            code: o.invalid_string,
            message: a.message
          });
          s.dirty();
        }
      } else if (a.kind === "url") {
        try {
          new URL(e.data);
        } catch {
          n = this._getOrReturnCtx(e, n);
          c(n, {
            validation: "url",
            code: o.invalid_string,
            message: a.message
          });
          s.dirty();
        }
      } else if (a.kind === "regex") {
        a.regex.lastIndex = 0;
        if (!a.regex.test(e.data)) {
          n = this._getOrReturnCtx(e, n);
          c(n, {
            validation: "regex",
            code: o.invalid_string,
            message: a.message
          });
          s.dirty();
        }
      } else if (a.kind === "trim") {
        e.data = e.data.trim();
      } else if (a.kind === "includes") {
        if (!e.data.includes(a.value, a.position)) {
          n = this._getOrReturnCtx(e, n);
          c(n, {
            code: o.invalid_string,
            validation: {
              includes: a.value,
              position: a.position
            },
            message: a.message
          });
          s.dirty();
        }
      } else if (a.kind === "toLowerCase") {
        e.data = e.data.toLowerCase();
      } else if (a.kind === "toUpperCase") {
        e.data = e.data.toUpperCase();
      } else if (a.kind === "startsWith") {
        if (!e.data.startsWith(a.value)) {
          n = this._getOrReturnCtx(e, n);
          c(n, {
            code: o.invalid_string,
            validation: {
              startsWith: a.value
            },
            message: a.message
          });
          s.dirty();
        }
      } else if (a.kind === "endsWith") {
        if (!e.data.endsWith(a.value)) {
          n = this._getOrReturnCtx(e, n);
          c(n, {
            code: o.invalid_string,
            validation: {
              endsWith: a.value
            },
            message: a.message
          });
          s.dirty();
        }
      } else if (a.kind === "datetime") {
        if (!tt(a).test(e.data)) {
          n = this._getOrReturnCtx(e, n);
          c(n, {
            code: o.invalid_string,
            validation: "datetime",
            message: a.message
          });
          s.dirty();
        }
      } else if (a.kind === "date") {
        if (!Ke.test(e.data)) {
          n = this._getOrReturnCtx(e, n);
          c(n, {
            code: o.invalid_string,
            validation: "date",
            message: a.message
          });
          s.dirty();
        }
      } else if (a.kind === "time") {
        if (!et(a).test(e.data)) {
          n = this._getOrReturnCtx(e, n);
          c(n, {
            code: o.invalid_string,
            validation: "time",
            message: a.message
          });
          s.dirty();
        }
      } else if (a.kind === "duration") {
        if (!Ue.test(e.data)) {
          n = this._getOrReturnCtx(e, n);
          c(n, {
            validation: "duration",
            code: o.invalid_string,
            message: a.message
          });
          s.dirty();
        }
      } else if (a.kind === "ip") {
        if (!rt(e.data, a.version)) {
          n = this._getOrReturnCtx(e, n);
          c(n, {
            validation: "ip",
            code: o.invalid_string,
            message: a.message
          });
          s.dirty();
        }
      } else if (a.kind === "jwt") {
        if (!st(e.data, a.alg)) {
          n = this._getOrReturnCtx(e, n);
          c(n, {
            validation: "jwt",
            code: o.invalid_string,
            message: a.message
          });
          s.dirty();
        }
      } else if (a.kind === "cidr") {
        if (!nt(e.data, a.version)) {
          n = this._getOrReturnCtx(e, n);
          c(n, {
            validation: "cidr",
            code: o.invalid_string,
            message: a.message
          });
          s.dirty();
        }
      } else if (a.kind === "base64") {
        if (!Xe.test(e.data)) {
          n = this._getOrReturnCtx(e, n);
          c(n, {
            validation: "base64",
            code: o.invalid_string,
            message: a.message
          });
          s.dirty();
        }
      } else if (a.kind === "base64url") {
        if (!Qe.test(e.data)) {
          n = this._getOrReturnCtx(e, n);
          c(n, {
            validation: "base64url",
            code: o.invalid_string,
            message: a.message
          });
          s.dirty();
        }
      } else {
        y.assertNever(a);
      }
    }
    return {
      status: s.value,
      value: e.data
    };
  }
  _regex(e, t, s) {
    return this.refinement(n => e.test(n), {
      validation: t,
      code: o.invalid_string,
      ...l.errToObj(s)
    });
  }
  _addCheck(e) {
    return new R({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({
      kind: "email",
      ...l.errToObj(e)
    });
  }
  url(e) {
    return this._addCheck({
      kind: "url",
      ...l.errToObj(e)
    });
  }
  emoji(e) {
    return this._addCheck({
      kind: "emoji",
      ...l.errToObj(e)
    });
  }
  uuid(e) {
    return this._addCheck({
      kind: "uuid",
      ...l.errToObj(e)
    });
  }
  nanoid(e) {
    return this._addCheck({
      kind: "nanoid",
      ...l.errToObj(e)
    });
  }
  cuid(e) {
    return this._addCheck({
      kind: "cuid",
      ...l.errToObj(e)
    });
  }
  cuid2(e) {
    return this._addCheck({
      kind: "cuid2",
      ...l.errToObj(e)
    });
  }
  ulid(e) {
    return this._addCheck({
      kind: "ulid",
      ...l.errToObj(e)
    });
  }
  base64(e) {
    return this._addCheck({
      kind: "base64",
      ...l.errToObj(e)
    });
  }
  base64url(e) {
    return this._addCheck({
      kind: "base64url",
      ...l.errToObj(e)
    });
  }
  jwt(e) {
    return this._addCheck({
      kind: "jwt",
      ...l.errToObj(e)
    });
  }
  ip(e) {
    return this._addCheck({
      kind: "ip",
      ...l.errToObj(e)
    });
  }
  cidr(e) {
    return this._addCheck({
      kind: "cidr",
      ...l.errToObj(e)
    });
  }
  datetime(e) {
    if (typeof e == "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: e
      });
    } else {
      return this._addCheck({
        kind: "datetime",
        precision: typeof (e == null ? undefined : e.precision) === "undefined" ? null : e == null ? undefined : e.precision,
        offset: (e == null ? undefined : e.offset) ?? false,
        local: (e == null ? undefined : e.local) ?? false,
        ...l.errToObj(e == null ? undefined : e.message)
      });
    }
  }
  date(e) {
    return this._addCheck({
      kind: "date",
      message: e
    });
  }
  time(e) {
    if (typeof e == "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: e
      });
    } else {
      return this._addCheck({
        kind: "time",
        precision: typeof (e == null ? undefined : e.precision) === "undefined" ? null : e == null ? undefined : e.precision,
        ...l.errToObj(e == null ? undefined : e.message)
      });
    }
  }
  duration(e) {
    return this._addCheck({
      kind: "duration",
      ...l.errToObj(e)
    });
  }
  regex(e, t) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...l.errToObj(t)
    });
  }
  includes(e, t) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: t == null ? undefined : t.position,
      ...l.errToObj(t == null ? undefined : t.message)
    });
  }
  startsWith(e, t) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...l.errToObj(t)
    });
  }
  endsWith(e, t) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...l.errToObj(t)
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...l.errToObj(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...l.errToObj(t)
    });
  }
  length(e, t) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...l.errToObj(t)
    });
  }
  nonempty(e) {
    return this.min(1, l.errToObj(e));
  }
  trim() {
    return new R({
      ...this._def,
      checks: [...this._def.checks, {
        kind: "trim"
      }]
    });
  }
  toLowerCase() {
    return new R({
      ...this._def,
      checks: [...this._def.checks, {
        kind: "toLowerCase"
      }]
    });
  }
  toUpperCase() {
    return new R({
      ...this._def,
      checks: [...this._def.checks, {
        kind: "toUpperCase"
      }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find(e => e.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find(e => e.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find(e => e.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find(e => e.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find(e => e.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find(e => e.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find(e => e.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find(e => e.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find(e => e.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find(e => e.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find(e => e.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find(e => e.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find(e => e.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find(e => e.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find(e => e.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find(e => e.kind === "base64url");
  }
  get minLength() {
    let e = null;
    for (const t of this._def.checks) {
      if (t.kind === "min" && (e === null || t.value > e)) {
        e = t.value;
      }
    }
    return e;
  }
  get maxLength() {
    let e = null;
    for (const t of this._def.checks) {
      if (t.kind === "max" && (e === null || t.value < e)) {
        e = t.value;
      }
    }
    return e;
  }
}
R.create = r => new R({
  checks: [],
  typeName: p.ZodString,
  coerce: (r == null ? undefined : r.coerce) ?? false,
  ..._(r)
});
function at(r, e) {
  const t = (r.toString().split(".")[1] || "").length;
  const s = (e.toString().split(".")[1] || "").length;
  const n = t > s ? t : s;
  const a = Number.parseInt(r.toFixed(n).replace(".", ""));
  const i = Number.parseInt(e.toFixed(n).replace(".", ""));
  return a % i / 10 ** n;
}
class M extends g {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce) {
      e.data = Number(e.data);
    }
    if (this._getType(e) !== u.number) {
      const a = this._getOrReturnCtx(e);
      c(a, {
        code: o.invalid_type,
        expected: u.number,
        received: a.parsedType
      });
      return m;
    }
    let s;
    const n = new w();
    for (const a of this._def.checks) {
      if (a.kind === "int") {
        if (!y.isInteger(e.data)) {
          s = this._getOrReturnCtx(e, s);
          c(s, {
            code: o.invalid_type,
            expected: "integer",
            received: "float",
            message: a.message
          });
          n.dirty();
        }
      } else if (a.kind === "min") {
        if (a.inclusive ? e.data < a.value : e.data <= a.value) {
          s = this._getOrReturnCtx(e, s);
          c(s, {
            code: o.too_small,
            minimum: a.value,
            type: "number",
            inclusive: a.inclusive,
            exact: false,
            message: a.message
          });
          n.dirty();
        }
      } else if (a.kind === "max") {
        if (a.inclusive ? e.data > a.value : e.data >= a.value) {
          s = this._getOrReturnCtx(e, s);
          c(s, {
            code: o.too_big,
            maximum: a.value,
            type: "number",
            inclusive: a.inclusive,
            exact: false,
            message: a.message
          });
          n.dirty();
        }
      } else if (a.kind === "multipleOf") {
        if (at(e.data, a.value) !== 0) {
          s = this._getOrReturnCtx(e, s);
          c(s, {
            code: o.not_multiple_of,
            multipleOf: a.value,
            message: a.message
          });
          n.dirty();
        }
      } else if (a.kind === "finite") {
        if (!Number.isFinite(e.data)) {
          s = this._getOrReturnCtx(e, s);
          c(s, {
            code: o.not_finite,
            message: a.message
          });
          n.dirty();
        }
      } else {
        y.assertNever(a);
      }
    }
    return {
      status: n.value,
      value: e.data
    };
  }
  gte(e, t) {
    return this.setLimit("min", e, true, l.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, false, l.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, true, l.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, false, l.toString(t));
  }
  setLimit(e, t, s, n) {
    return new M({
      ...this._def,
      checks: [...this._def.checks, {
        kind: e,
        value: t,
        inclusive: s,
        message: l.toString(n)
      }]
    });
  }
  _addCheck(e) {
    return new M({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: l.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: l.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: l.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: l.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: l.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: l.toString(t)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: l.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: l.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: l.toString(e)
    });
  }
  get minValue() {
    let e = null;
    for (const t of this._def.checks) {
      if (t.kind === "min" && (e === null || t.value > e)) {
        e = t.value;
      }
    }
    return e;
  }
  get maxValue() {
    let e = null;
    for (const t of this._def.checks) {
      if (t.kind === "max" && (e === null || t.value < e)) {
        e = t.value;
      }
    }
    return e;
  }
  get isInt() {
    return !!this._def.checks.find(e => e.kind === "int" || e.kind === "multipleOf" && y.isInteger(e.value));
  }
  get isFinite() {
    let e = null;
    let t = null;
    for (const s of this._def.checks) {
      if (s.kind === "finite" || s.kind === "int" || s.kind === "multipleOf") {
        return true;
      }
      if (s.kind === "min") {
        if (t === null || s.value > t) {
          t = s.value;
        }
      } else if (s.kind === "max" && (e === null || s.value < e)) {
        e = s.value;
      }
    }
    return Number.isFinite(t) && Number.isFinite(e);
  }
}
M.create = r => new M({
  checks: [],
  typeName: p.ZodNumber,
  coerce: (r == null ? undefined : r.coerce) || false,
  ..._(r)
});
class B extends g {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce) {
      try {
        e.data = BigInt(e.data);
      } catch {
        return this._getInvalidInput(e);
      }
    }
    if (this._getType(e) !== u.bigint) {
      return this._getInvalidInput(e);
    }
    let s;
    const n = new w();
    for (const a of this._def.checks) {
      if (a.kind === "min") {
        if (a.inclusive ? e.data < a.value : e.data <= a.value) {
          s = this._getOrReturnCtx(e, s);
          c(s, {
            code: o.too_small,
            type: "bigint",
            minimum: a.value,
            inclusive: a.inclusive,
            message: a.message
          });
          n.dirty();
        }
      } else if (a.kind === "max") {
        if (a.inclusive ? e.data > a.value : e.data >= a.value) {
          s = this._getOrReturnCtx(e, s);
          c(s, {
            code: o.too_big,
            type: "bigint",
            maximum: a.value,
            inclusive: a.inclusive,
            message: a.message
          });
          n.dirty();
        }
      } else if (a.kind === "multipleOf") {
        if (e.data % a.value !== BigInt(0)) {
          s = this._getOrReturnCtx(e, s);
          c(s, {
            code: o.not_multiple_of,
            multipleOf: a.value,
            message: a.message
          });
          n.dirty();
        }
      } else {
        y.assertNever(a);
      }
    }
    return {
      status: n.value,
      value: e.data
    };
  }
  _getInvalidInput(e) {
    const t = this._getOrReturnCtx(e);
    c(t, {
      code: o.invalid_type,
      expected: u.bigint,
      received: t.parsedType
    });
    return m;
  }
  gte(e, t) {
    return this.setLimit("min", e, true, l.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, false, l.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, true, l.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, false, l.toString(t));
  }
  setLimit(e, t, s, n) {
    return new B({
      ...this._def,
      checks: [...this._def.checks, {
        kind: e,
        value: t,
        inclusive: s,
        message: l.toString(n)
      }]
    });
  }
  _addCheck(e) {
    return new B({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: l.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: l.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: l.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: l.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: l.toString(t)
    });
  }
  get minValue() {
    let e = null;
    for (const t of this._def.checks) {
      if (t.kind === "min" && (e === null || t.value > e)) {
        e = t.value;
      }
    }
    return e;
  }
  get maxValue() {
    let e = null;
    for (const t of this._def.checks) {
      if (t.kind === "max" && (e === null || t.value < e)) {
        e = t.value;
      }
    }
    return e;
  }
}
B.create = r => new B({
  checks: [],
  typeName: p.ZodBigInt,
  coerce: (r == null ? undefined : r.coerce) ?? false,
  ..._(r)
});
class X extends g {
  _parse(e) {
    if (this._def.coerce) {
      e.data = !!e.data;
    }
    if (this._getType(e) !== u.boolean) {
      const s = this._getOrReturnCtx(e);
      c(s, {
        code: o.invalid_type,
        expected: u.boolean,
        received: s.parsedType
      });
      return m;
    }
    return $(e.data);
  }
}
X.create = r => new X({
  typeName: p.ZodBoolean,
  coerce: (r == null ? undefined : r.coerce) || false,
  ..._(r)
});
class U extends g {
  _parse(e) {
    if (this._def.coerce) {
      e.data = new Date(e.data);
    }
    if (this._getType(e) !== u.date) {
      const a = this._getOrReturnCtx(e);
      c(a, {
        code: o.invalid_type,
        expected: u.date,
        received: a.parsedType
      });
      return m;
    }
    if (Number.isNaN(e.data.getTime())) {
      const a = this._getOrReturnCtx(e);
      c(a, {
        code: o.invalid_date
      });
      return m;
    }
    const s = new w();
    let n;
    for (const a of this._def.checks) {
      if (a.kind === "min") {
        if (e.data.getTime() < a.value) {
          n = this._getOrReturnCtx(e, n);
          c(n, {
            code: o.too_small,
            message: a.message,
            inclusive: true,
            exact: false,
            minimum: a.value,
            type: "date"
          });
          s.dirty();
        }
      } else if (a.kind === "max") {
        if (e.data.getTime() > a.value) {
          n = this._getOrReturnCtx(e, n);
          c(n, {
            code: o.too_big,
            message: a.message,
            inclusive: true,
            exact: false,
            maximum: a.value,
            type: "date"
          });
          s.dirty();
        }
      } else {
        y.assertNever(a);
      }
    }
    return {
      status: s.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new U({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: l.toString(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: l.toString(t)
    });
  }
  get minDate() {
    let e = null;
    for (const t of this._def.checks) {
      if (t.kind === "min" && (e === null || t.value > e)) {
        e = t.value;
      }
    }
    if (e != null) {
      return new Date(e);
    } else {
      return null;
    }
  }
  get maxDate() {
    let e = null;
    for (const t of this._def.checks) {
      if (t.kind === "max" && (e === null || t.value < e)) {
        e = t.value;
      }
    }
    if (e != null) {
      return new Date(e);
    } else {
      return null;
    }
  }
}
U.create = r => new U({
  checks: [],
  coerce: (r == null ? undefined : r.coerce) || false,
  typeName: p.ZodDate,
  ..._(r)
});
class ue extends g {
  _parse(e) {
    if (this._getType(e) !== u.symbol) {
      const s = this._getOrReturnCtx(e);
      c(s, {
        code: o.invalid_type,
        expected: u.symbol,
        received: s.parsedType
      });
      return m;
    }
    return $(e.data);
  }
}
ue.create = r => new ue({
  typeName: p.ZodSymbol,
  ..._(r)
});
class le extends g {
  _parse(e) {
    if (this._getType(e) !== u.undefined) {
      const s = this._getOrReturnCtx(e);
      c(s, {
        code: o.invalid_type,
        expected: u.undefined,
        received: s.parsedType
      });
      return m;
    }
    return $(e.data);
  }
}
le.create = r => new le({
  typeName: p.ZodUndefined,
  ..._(r)
});
class fe extends g {
  _parse(e) {
    if (this._getType(e) !== u.null) {
      const s = this._getOrReturnCtx(e);
      c(s, {
        code: o.invalid_type,
        expected: u.null,
        received: s.parsedType
      });
      return m;
    }
    return $(e.data);
  }
}
fe.create = r => new fe({
  typeName: p.ZodNull,
  ..._(r)
});
class he extends g {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(e) {
    return $(e.data);
  }
}
he.create = r => new he({
  typeName: p.ZodAny,
  ..._(r)
});
class me extends g {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(e) {
    return $(e.data);
  }
}
me.create = r => new me({
  typeName: p.ZodUnknown,
  ..._(r)
});
class I extends g {
  _parse(e) {
    const t = this._getOrReturnCtx(e);
    c(t, {
      code: o.invalid_type,
      expected: u.never,
      received: t.parsedType
    });
    return m;
  }
}
I.create = r => new I({
  typeName: p.ZodNever,
  ..._(r)
});
class pe extends g {
  _parse(e) {
    if (this._getType(e) !== u.undefined) {
      const s = this._getOrReturnCtx(e);
      c(s, {
        code: o.invalid_type,
        expected: u.void,
        received: s.parsedType
      });
      return m;
    }
    return $(e.data);
  }
}
pe.create = r => new pe({
  typeName: p.ZodVoid,
  ..._(r)
});
class T extends g {
  _parse(e) {
    const {
      ctx: t,
      status: s
    } = this._processInputParams(e);
    const n = this._def;
    if (t.parsedType !== u.array) {
      c(t, {
        code: o.invalid_type,
        expected: u.array,
        received: t.parsedType
      });
      return m;
    }
    if (n.exactLength !== null) {
      const i = t.data.length > n.exactLength.value;
      const d = t.data.length < n.exactLength.value;
      if (i || d) {
        c(t, {
          code: i ? o.too_big : o.too_small,
          minimum: d ? n.exactLength.value : undefined,
          maximum: i ? n.exactLength.value : undefined,
          type: "array",
          inclusive: true,
          exact: true,
          message: n.exactLength.message
        });
        s.dirty();
      }
    }
    if (n.minLength !== null && t.data.length < n.minLength.value) {
      c(t, {
        code: o.too_small,
        minimum: n.minLength.value,
        type: "array",
        inclusive: true,
        exact: false,
        message: n.minLength.message
      });
      s.dirty();
    }
    if (n.maxLength !== null && t.data.length > n.maxLength.value) {
      c(t, {
        code: o.too_big,
        maximum: n.maxLength.value,
        type: "array",
        inclusive: true,
        exact: false,
        message: n.maxLength.message
      });
      s.dirty();
    }
    if (t.common.async) {
      return Promise.all([...t.data].map((i, d) => n.type._parseAsync(new S(t, i, t.path, d)))).then(i => w.mergeArray(s, i));
    }
    const a = [...t.data].map((i, d) => n.type._parseSync(new S(t, i, t.path, d)));
    return w.mergeArray(s, a);
  }
  get element() {
    return this._def.type;
  }
  min(e, t) {
    return new T({
      ...this._def,
      minLength: {
        value: e,
        message: l.toString(t)
      }
    });
  }
  max(e, t) {
    return new T({
      ...this._def,
      maxLength: {
        value: e,
        message: l.toString(t)
      }
    });
  }
  length(e, t) {
    return new T({
      ...this._def,
      exactLength: {
        value: e,
        message: l.toString(t)
      }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
T.create = (r, e) => new T({
  type: r,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: p.ZodArray,
  ..._(e)
});
function Z(r) {
  if (r instanceof k) {
    const e = {};
    for (const t in r.shape) {
      const s = r.shape[t];
      e[t] = N.create(Z(s));
    }
    return new k({
      ...r._def,
      shape: () => e
    });
  } else if (r instanceof T) {
    return new T({
      ...r._def,
      type: Z(r.element)
    });
  } else if (r instanceof N) {
    return N.create(Z(r.unwrap()));
  } else if (r instanceof P) {
    return P.create(Z(r.unwrap()));
  } else if (r instanceof A) {
    return A.create(r.items.map(e => Z(e)));
  } else {
    return r;
  }
}
class k extends g {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null) {
      return this._cached;
    }
    const e = this._def.shape();
    const t = y.objectKeys(e);
    this._cached = {
      shape: e,
      keys: t
    };
    return this._cached;
  }
  _parse(e) {
    if (this._getType(e) !== u.object) {
      const h = this._getOrReturnCtx(e);
      c(h, {
        code: o.invalid_type,
        expected: u.object,
        received: h.parsedType
      });
      return m;
    }
    const {
      status: s,
      ctx: n
    } = this._processInputParams(e);
    const {
      shape: a,
      keys: i
    } = this._getCached();
    const d = [];
    if (!(this._def.catchall instanceof I) || this._def.unknownKeys !== "strip") {
      for (const h in n.data) {
        if (!i.includes(h)) {
          d.push(h);
        }
      }
    }
    const f = [];
    for (const h of i) {
      const v = a[h];
      const L = n.data[h];
      f.push({
        key: {
          status: "valid",
          value: h
        },
        value: v._parse(new S(n, L, n.path, h)),
        alwaysSet: h in n.data
      });
    }
    if (this._def.catchall instanceof I) {
      const h = this._def.unknownKeys;
      if (h === "passthrough") {
        for (const v of d) {
          f.push({
            key: {
              status: "valid",
              value: v
            },
            value: {
              status: "valid",
              value: n.data[v]
            }
          });
        }
      } else if (h === "strict") {
        if (d.length > 0) {
          c(n, {
            code: o.unrecognized_keys,
            keys: d
          });
          s.dirty();
        }
      } else if (h !== "strip") {
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
      }
    } else {
      const h = this._def.catchall;
      for (const v of d) {
        const L = n.data[v];
        f.push({
          key: {
            status: "valid",
            value: v
          },
          value: h._parse(new S(n, L, n.path, v)),
          alwaysSet: v in n.data
        });
      }
    }
    if (n.common.async) {
      return Promise.resolve().then(async () => {
        const h = [];
        for (const v of f) {
          const L = await v.key;
          const Oe = await v.value;
          h.push({
            key: L,
            value: Oe,
            alwaysSet: v.alwaysSet
          });
        }
        return h;
      }).then(h => w.mergeObjectSync(s, h));
    } else {
      return w.mergeObjectSync(s, f);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    l.errToObj;
    return new k({
      ...this._def,
      unknownKeys: "strict",
      ...(e !== undefined ? {
        errorMap: (t, s) => {
          var a;
          var i;
          const n = ((i = (a = this._def).errorMap) == null ? undefined : i.call(a, t, s).message) ?? s.defaultError;
          if (t.code === "unrecognized_keys") {
            return {
              message: l.errToObj(e).message ?? n
            };
          } else {
            return {
              message: n
            };
          }
        }
      } : {})
    });
  }
  strip() {
    return new k({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new k({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  extend(e) {
    return new k({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...e
      })
    });
  }
  merge(e) {
    return new k({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: p.ZodObject
    });
  }
  setKey(e, t) {
    return this.augment({
      [e]: t
    });
  }
  catchall(e) {
    return new k({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const t = {};
    for (const s of y.objectKeys(e)) {
      if (e[s] && this.shape[s]) {
        t[s] = this.shape[s];
      }
    }
    return new k({
      ...this._def,
      shape: () => t
    });
  }
  omit(e) {
    const t = {};
    for (const s of y.objectKeys(this.shape)) {
      if (!e[s]) {
        t[s] = this.shape[s];
      }
    }
    return new k({
      ...this._def,
      shape: () => t
    });
  }
  deepPartial() {
    return Z(this);
  }
  partial(e) {
    const t = {};
    for (const s of y.objectKeys(this.shape)) {
      const n = this.shape[s];
      if (e && !e[s]) {
        t[s] = n;
      } else {
        t[s] = n.optional();
      }
    }
    return new k({
      ...this._def,
      shape: () => t
    });
  }
  required(e) {
    const t = {};
    for (const s of y.objectKeys(this.shape)) {
      if (e && !e[s]) {
        t[s] = this.shape[s];
      } else {
        let a = this.shape[s];
        while (a instanceof N) {
          a = a._def.innerType;
        }
        t[s] = a;
      }
    }
    return new k({
      ...this._def,
      shape: () => t
    });
  }
  keyof() {
    return Ce(y.objectKeys(this.shape));
  }
}
k.create = (r, e) => new k({
  shape: () => r,
  unknownKeys: "strip",
  catchall: I.create(),
  typeName: p.ZodObject,
  ..._(e)
});
k.strictCreate = (r, e) => new k({
  shape: () => r,
  unknownKeys: "strict",
  catchall: I.create(),
  typeName: p.ZodObject,
  ..._(e)
});
k.lazycreate = (r, e) => new k({
  shape: r,
  unknownKeys: "strip",
  catchall: I.create(),
  typeName: p.ZodObject,
  ..._(e)
});
class W extends g {
  _parse(e) {
    const {
      ctx: t
    } = this._processInputParams(e);
    const s = this._def.options;
    function n(a) {
      for (const d of a) {
        if (d.result.status === "valid") {
          return d.result;
        }
      }
      for (const d of a) {
        if (d.result.status === "dirty") {
          t.common.issues.push(...d.ctx.common.issues);
          return d.result;
        }
      }
      const i = a.map(d => new C(d.ctx.common.issues));
      c(t, {
        code: o.invalid_union,
        unionErrors: i
      });
      return m;
    }
    if (t.common.async) {
      return Promise.all(s.map(async a => {
        const i = {
          ...t,
          common: {
            ...t.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await a._parseAsync({
            data: t.data,
            path: t.path,
            parent: i
          }),
          ctx: i
        };
      })).then(n);
    }
    {
      let a;
      const i = [];
      for (const f of s) {
        const h = {
          ...t,
          common: {
            ...t.common,
            issues: []
          },
          parent: null
        };
        const v = f._parseSync({
          data: t.data,
          path: t.path,
          parent: h
        });
        if (v.status === "valid") {
          return v;
        }
        if (v.status === "dirty" && !a) {
          a = {
            result: v,
            ctx: h
          };
        }
        if (h.common.issues.length) {
          i.push(h.common.issues);
        }
      }
      if (a) {
        t.common.issues.push(...a.ctx.common.issues);
        return a.result;
      }
      const d = i.map(f => new C(f));
      c(t, {
        code: o.invalid_union,
        unionErrors: d
      });
      return m;
    }
  }
  get options() {
    return this._def.options;
  }
}
W.create = (r, e) => new W({
  options: r,
  typeName: p.ZodUnion,
  ..._(e)
});
function Q(r, e) {
  const t = O(r);
  const s = O(e);
  if (r === e) {
    return {
      valid: true,
      data: r
    };
  }
  if (t === u.object && s === u.object) {
    const n = y.objectKeys(e);
    const a = y.objectKeys(r).filter(d => n.indexOf(d) !== -1);
    const i = {
      ...r,
      ...e
    };
    for (const d of a) {
      const f = Q(r[d], e[d]);
      if (!f.valid) {
        return {
          valid: false
        };
      }
      i[d] = f.data;
    }
    return {
      valid: true,
      data: i
    };
  } else if (t === u.array && s === u.array) {
    if (r.length !== e.length) {
      return {
        valid: false
      };
    }
    const n = [];
    for (let a = 0; a < r.length; a++) {
      const i = r[a];
      const d = e[a];
      const f = Q(i, d);
      if (!f.valid) {
        return {
          valid: false
        };
      }
      n.push(f.data);
    }
    return {
      valid: true,
      data: n
    };
  } else if (t === u.date && s === u.date && +r == +e) {
    return {
      valid: true,
      data: r
    };
  } else {
    return {
      valid: false
    };
  }
}
class q extends g {
  _parse(e) {
    const {
      status: t,
      ctx: s
    } = this._processInputParams(e);
    const n = (a, i) => {
      if (de(a) || de(i)) {
        return m;
      }
      const d = Q(a.value, i.value);
      if (d.valid) {
        if (oe(a) || oe(i)) {
          t.dirty();
        }
        return {
          status: t.value,
          value: d.data
        };
      } else {
        c(s, {
          code: o.invalid_intersection_types
        });
        return m;
      }
    };
    if (s.common.async) {
      return Promise.all([this._def.left._parseAsync({
        data: s.data,
        path: s.path,
        parent: s
      }), this._def.right._parseAsync({
        data: s.data,
        path: s.path,
        parent: s
      })]).then(([a, i]) => n(a, i));
    } else {
      return n(this._def.left._parseSync({
        data: s.data,
        path: s.path,
        parent: s
      }), this._def.right._parseSync({
        data: s.data,
        path: s.path,
        parent: s
      }));
    }
  }
}
q.create = (r, e, t) => new q({
  left: r,
  right: e,
  typeName: p.ZodIntersection,
  ..._(t)
});
class A extends g {
  _parse(e) {
    const {
      status: t,
      ctx: s
    } = this._processInputParams(e);
    if (s.parsedType !== u.array) {
      c(s, {
        code: o.invalid_type,
        expected: u.array,
        received: s.parsedType
      });
      return m;
    }
    if (s.data.length < this._def.items.length) {
      c(s, {
        code: o.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return m;
    }
    if (!this._def.rest && s.data.length > this._def.items.length) {
      c(s, {
        code: o.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      t.dirty();
    }
    const a = [...s.data].map((i, d) => {
      const f = this._def.items[d] || this._def.rest;
      if (f) {
        return f._parse(new S(s, i, s.path, d));
      } else {
        return null;
      }
    }).filter(i => !!i);
    if (s.common.async) {
      return Promise.all(a).then(i => w.mergeArray(t, i));
    } else {
      return w.mergeArray(t, a);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new A({
      ...this._def,
      rest: e
    });
  }
}
A.create = (r, e) => {
  if (!Array.isArray(r)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new A({
    items: r,
    typeName: p.ZodTuple,
    rest: null,
    ..._(e)
  });
};
class _e extends g {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const {
      status: t,
      ctx: s
    } = this._processInputParams(e);
    if (s.parsedType !== u.map) {
      c(s, {
        code: o.invalid_type,
        expected: u.map,
        received: s.parsedType
      });
      return m;
    }
    const n = this._def.keyType;
    const a = this._def.valueType;
    const i = [...s.data.entries()].map(([d, f], h) => ({
      key: n._parse(new S(s, d, s.path, [h, "key"])),
      value: a._parse(new S(s, f, s.path, [h, "value"]))
    }));
    if (s.common.async) {
      const d = new Map();
      return Promise.resolve().then(async () => {
        for (const f of i) {
          const h = await f.key;
          const v = await f.value;
          if (h.status === "aborted" || v.status === "aborted") {
            return m;
          }
          if (h.status === "dirty" || v.status === "dirty") {
            t.dirty();
          }
          d.set(h.value, v.value);
        }
        return {
          status: t.value,
          value: d
        };
      });
    } else {
      const d = new Map();
      for (const f of i) {
        const h = f.key;
        const v = f.value;
        if (h.status === "aborted" || v.status === "aborted") {
          return m;
        }
        if (h.status === "dirty" || v.status === "dirty") {
          t.dirty();
        }
        d.set(h.value, v.value);
      }
      return {
        status: t.value,
        value: d
      };
    }
  }
}
_e.create = (r, e, t) => new _e({
  valueType: e,
  keyType: r,
  typeName: p.ZodMap,
  ..._(t)
});
class z extends g {
  _parse(e) {
    const {
      status: t,
      ctx: s
    } = this._processInputParams(e);
    if (s.parsedType !== u.set) {
      c(s, {
        code: o.invalid_type,
        expected: u.set,
        received: s.parsedType
      });
      return m;
    }
    const n = this._def;
    if (n.minSize !== null && s.data.size < n.minSize.value) {
      c(s, {
        code: o.too_small,
        minimum: n.minSize.value,
        type: "set",
        inclusive: true,
        exact: false,
        message: n.minSize.message
      });
      t.dirty();
    }
    if (n.maxSize !== null && s.data.size > n.maxSize.value) {
      c(s, {
        code: o.too_big,
        maximum: n.maxSize.value,
        type: "set",
        inclusive: true,
        exact: false,
        message: n.maxSize.message
      });
      t.dirty();
    }
    const a = this._def.valueType;
    function i(f) {
      const h = new Set();
      for (const v of f) {
        if (v.status === "aborted") {
          return m;
        }
        if (v.status === "dirty") {
          t.dirty();
        }
        h.add(v.value);
      }
      return {
        status: t.value,
        value: h
      };
    }
    const d = [...s.data.values()].map((f, h) => a._parse(new S(s, f, s.path, h)));
    if (s.common.async) {
      return Promise.all(d).then(f => i(f));
    } else {
      return i(d);
    }
  }
  min(e, t) {
    return new z({
      ...this._def,
      minSize: {
        value: e,
        message: l.toString(t)
      }
    });
  }
  max(e, t) {
    return new z({
      ...this._def,
      maxSize: {
        value: e,
        message: l.toString(t)
      }
    });
  }
  size(e, t) {
    return this.min(e, t).max(e, t);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
z.create = (r, e) => new z({
  valueType: r,
  minSize: null,
  maxSize: null,
  typeName: p.ZodSet,
  ..._(e)
});
class ge extends g {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const {
      ctx: t
    } = this._processInputParams(e);
    return this._def.getter()._parse({
      data: t.data,
      path: t.path,
      parent: t
    });
  }
}
ge.create = (r, e) => new ge({
  getter: r,
  typeName: p.ZodLazy,
  ..._(e)
});
class K extends g {
  _parse(e) {
    if (e.data !== this._def.value) {
      const t = this._getOrReturnCtx(e);
      c(t, {
        received: t.data,
        code: o.invalid_literal,
        expected: this._def.value
      });
      return m;
    }
    return {
      status: "valid",
      value: e.data
    };
  }
  get value() {
    return this._def.value;
  }
}
K.create = (r, e) => new K({
  value: r,
  typeName: p.ZodLiteral,
  ..._(e)
});
function Ce(r, e) {
  return new j({
    values: r,
    typeName: p.ZodEnum,
    ..._(e)
  });
}
class j extends g {
  _parse(e) {
    if (typeof e.data != "string") {
      const t = this._getOrReturnCtx(e);
      const s = this._def.values;
      c(t, {
        expected: y.joinValues(s),
        received: t.parsedType,
        code: o.invalid_type
      });
      return m;
    }
    this._cache ||= new Set(this._def.values);
    if (!this._cache.has(e.data)) {
      const t = this._getOrReturnCtx(e);
      const s = this._def.values;
      c(t, {
        received: t.data,
        code: o.invalid_enum_value,
        options: s
      });
      return m;
    }
    return $(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const e = {};
    for (const t of this._def.values) {
      e[t] = t;
    }
    return e;
  }
  get Values() {
    const e = {};
    for (const t of this._def.values) {
      e[t] = t;
    }
    return e;
  }
  get Enum() {
    const e = {};
    for (const t of this._def.values) {
      e[t] = t;
    }
    return e;
  }
  extract(e, t = this._def) {
    return j.create(e, {
      ...this._def,
      ...t
    });
  }
  exclude(e, t = this._def) {
    return j.create(this.options.filter(s => !e.includes(s)), {
      ...this._def,
      ...t
    });
  }
}
j.create = Ce;
class ye extends g {
  _parse(e) {
    const t = y.getValidEnumValues(this._def.values);
    const s = this._getOrReturnCtx(e);
    if (s.parsedType !== u.string && s.parsedType !== u.number) {
      const n = y.objectValues(t);
      c(s, {
        expected: y.joinValues(n),
        received: s.parsedType,
        code: o.invalid_type
      });
      return m;
    }
    this._cache ||= new Set(y.getValidEnumValues(this._def.values));
    if (!this._cache.has(e.data)) {
      const n = y.objectValues(t);
      c(s, {
        received: s.data,
        code: o.invalid_enum_value,
        options: n
      });
      return m;
    }
    return $(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
ye.create = (r, e) => new ye({
  values: r,
  typeName: p.ZodNativeEnum,
  ..._(e)
});
class J extends g {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const {
      ctx: t
    } = this._processInputParams(e);
    if (t.parsedType !== u.promise && t.common.async === false) {
      c(t, {
        code: o.invalid_type,
        expected: u.promise,
        received: t.parsedType
      });
      return m;
    }
    const s = t.parsedType === u.promise ? t.data : Promise.resolve(t.data);
    return $(s.then(n => this._def.type.parseAsync(n, {
      path: t.path,
      errorMap: t.common.contextualErrorMap
    })));
  }
}
J.create = (r, e) => new J({
  type: r,
  typeName: p.ZodPromise,
  ..._(e)
});
class D extends g {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    if (this._def.schema._def.typeName === p.ZodEffects) {
      return this._def.schema.sourceType();
    } else {
      return this._def.schema;
    }
  }
  _parse(e) {
    const {
      status: t,
      ctx: s
    } = this._processInputParams(e);
    const n = this._def.effect || null;
    const a = {
      addIssue: i => {
        c(s, i);
        if (i.fatal) {
          t.abort();
        } else {
          t.dirty();
        }
      },
      get path() {
        return s.path;
      }
    };
    a.addIssue = a.addIssue.bind(a);
    if (n.type === "preprocess") {
      const i = n.transform(s.data, a);
      if (s.common.async) {
        return Promise.resolve(i).then(async d => {
          if (t.value === "aborted") {
            return m;
          }
          const f = await this._def.schema._parseAsync({
            data: d,
            path: s.path,
            parent: s
          });
          if (f.status === "aborted") {
            return m;
          } else if (f.status === "dirty" || t.value === "dirty") {
            return V(f.value);
          } else {
            return f;
          }
        });
      }
      {
        if (t.value === "aborted") {
          return m;
        }
        const d = this._def.schema._parseSync({
          data: i,
          path: s.path,
          parent: s
        });
        if (d.status === "aborted") {
          return m;
        } else if (d.status === "dirty" || t.value === "dirty") {
          return V(d.value);
        } else {
          return d;
        }
      }
    }
    if (n.type === "refinement") {
      const i = d => {
        const f = n.refinement(d, a);
        if (s.common.async) {
          return Promise.resolve(f);
        }
        if (f instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return d;
      };
      if (s.common.async === false) {
        const d = this._def.schema._parseSync({
          data: s.data,
          path: s.path,
          parent: s
        });
        if (d.status === "aborted") {
          return m;
        } else {
          if (d.status === "dirty") {
            t.dirty();
          }
          i(d.value);
          return {
            status: t.value,
            value: d.value
          };
        }
      } else {
        return this._def.schema._parseAsync({
          data: s.data,
          path: s.path,
          parent: s
        }).then(d => d.status === "aborted" ? m : (d.status === "dirty" && t.dirty(), i(d.value).then(() => ({
          status: t.value,
          value: d.value
        }))));
      }
    }
    if (n.type === "transform") {
      if (s.common.async === false) {
        const i = this._def.schema._parseSync({
          data: s.data,
          path: s.path,
          parent: s
        });
        if (!E(i)) {
          return m;
        }
        const d = n.transform(i.value, a);
        if (d instanceof Promise) {
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return {
          status: t.value,
          value: d
        };
      } else {
        return this._def.schema._parseAsync({
          data: s.data,
          path: s.path,
          parent: s
        }).then(i => E(i) ? Promise.resolve(n.transform(i.value, a)).then(d => ({
          status: t.value,
          value: d
        })) : m);
      }
    }
    y.assertNever(n);
  }
}
D.create = (r, e, t) => new D({
  schema: r,
  typeName: p.ZodEffects,
  effect: e,
  ..._(t)
});
D.createWithPreprocess = (r, e, t) => new D({
  schema: e,
  effect: {
    type: "preprocess",
    transform: r
  },
  typeName: p.ZodEffects,
  ..._(t)
});
class N extends g {
  _parse(e) {
    if (this._getType(e) === u.undefined) {
      return $(undefined);
    } else {
      return this._def.innerType._parse(e);
    }
  }
  unwrap() {
    return this._def.innerType;
  }
}
N.create = (r, e) => new N({
  innerType: r,
  typeName: p.ZodOptional,
  ..._(e)
});
class P extends g {
  _parse(e) {
    if (this._getType(e) === u.null) {
      return $(null);
    } else {
      return this._def.innerType._parse(e);
    }
  }
  unwrap() {
    return this._def.innerType;
  }
}
P.create = (r, e) => new P({
  innerType: r,
  typeName: p.ZodNullable,
  ..._(e)
});
class ee extends g {
  _parse(e) {
    const {
      ctx: t
    } = this._processInputParams(e);
    let s = t.data;
    if (t.parsedType === u.undefined) {
      s = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data: s,
      path: t.path,
      parent: t
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
ee.create = (r, e) => new ee({
  innerType: r,
  typeName: p.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ..._(e)
});
class te extends g {
  _parse(e) {
    const {
      ctx: t
    } = this._processInputParams(e);
    const s = {
      ...t,
      common: {
        ...t.common,
        issues: []
      }
    };
    const n = this._def.innerType._parse({
      data: s.data,
      path: s.path,
      parent: {
        ...s
      }
    });
    if (F(n)) {
      return n.then(a => ({
        status: "valid",
        value: a.status === "valid" ? a.value : this._def.catchValue({
          get error() {
            return new C(s.common.issues);
          },
          input: s.data
        })
      }));
    } else {
      return {
        status: "valid",
        value: n.status === "valid" ? n.value : this._def.catchValue({
          get error() {
            return new C(s.common.issues);
          },
          input: s.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
}
te.create = (r, e) => new te({
  innerType: r,
  typeName: p.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ..._(e)
});
class ve extends g {
  _parse(e) {
    if (this._getType(e) !== u.nan) {
      const s = this._getOrReturnCtx(e);
      c(s, {
        code: o.invalid_type,
        expected: u.nan,
        received: s.parsedType
      });
      return m;
    }
    return {
      status: "valid",
      value: e.data
    };
  }
}
ve.create = r => new ve({
  typeName: p.ZodNaN,
  ..._(r)
});
class it extends g {
  _parse(e) {
    const {
      ctx: t
    } = this._processInputParams(e);
    const s = t.data;
    return this._def.type._parse({
      data: s,
      path: t.path,
      parent: t
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class se extends g {
  _parse(e) {
    const {
      status: t,
      ctx: s
    } = this._processInputParams(e);
    if (s.common.async) {
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: s.data,
          path: s.path,
          parent: s
        });
        if (a.status === "aborted") {
          return m;
        } else if (a.status === "dirty") {
          t.dirty();
          return V(a.value);
        } else {
          return this._def.out._parseAsync({
            data: a.value,
            path: s.path,
            parent: s
          });
        }
      })();
    }
    {
      const n = this._def.in._parseSync({
        data: s.data,
        path: s.path,
        parent: s
      });
      if (n.status === "aborted") {
        return m;
      } else if (n.status === "dirty") {
        t.dirty();
        return {
          status: "dirty",
          value: n.value
        };
      } else {
        return this._def.out._parseSync({
          data: n.value,
          path: s.path,
          parent: s
        });
      }
    }
  }
  static create(e, t) {
    return new se({
      in: e,
      out: t,
      typeName: p.ZodPipeline
    });
  }
}
class re extends g {
  _parse(e) {
    const t = this._def.innerType._parse(e);
    const s = n => {
      if (E(n)) {
        n.value = Object.freeze(n.value);
      }
      return n;
    };
    if (F(t)) {
      return t.then(n => s(n));
    } else {
      return s(t);
    }
  }
  unwrap() {
    return this._def.innerType;
  }
}
re.create = (r, e) => new re({
  innerType: r,
  typeName: p.ZodReadonly,
  ..._(e)
});
var p;
(function (r) {
  r.ZodString = "ZodString";
  r.ZodNumber = "ZodNumber";
  r.ZodNaN = "ZodNaN";
  r.ZodBigInt = "ZodBigInt";
  r.ZodBoolean = "ZodBoolean";
  r.ZodDate = "ZodDate";
  r.ZodSymbol = "ZodSymbol";
  r.ZodUndefined = "ZodUndefined";
  r.ZodNull = "ZodNull";
  r.ZodAny = "ZodAny";
  r.ZodUnknown = "ZodUnknown";
  r.ZodNever = "ZodNever";
  r.ZodVoid = "ZodVoid";
  r.ZodArray = "ZodArray";
  r.ZodObject = "ZodObject";
  r.ZodUnion = "ZodUnion";
  r.ZodDiscriminatedUnion = "ZodDiscriminatedUnion";
  r.ZodIntersection = "ZodIntersection";
  r.ZodTuple = "ZodTuple";
  r.ZodRecord = "ZodRecord";
  r.ZodMap = "ZodMap";
  r.ZodSet = "ZodSet";
  r.ZodFunction = "ZodFunction";
  r.ZodLazy = "ZodLazy";
  r.ZodLiteral = "ZodLiteral";
  r.ZodEnum = "ZodEnum";
  r.ZodEffects = "ZodEffects";
  r.ZodNativeEnum = "ZodNativeEnum";
  r.ZodOptional = "ZodOptional";
  r.ZodNullable = "ZodNullable";
  r.ZodDefault = "ZodDefault";
  r.ZodCatch = "ZodCatch";
  r.ZodPromise = "ZodPromise";
  r.ZodBranded = "ZodBranded";
  r.ZodPipeline = "ZodPipeline";
  r.ZodReadonly = "ZodReadonly";
})(p ||= {});
const Y = R.create;
const dt = X.create;
I.create;
T.create;
const ot = k.create;
const ct = W.create;
q.create;
A.create;
const be = K.create;
j.create;
J.create;
N.create;
P.create;
const ut = ot({
  isNestBuild: dt(),
  buildType: ct([be("dev"), be("prod")]),
  commitHash: Y(),
  commitTimestamp: Y(),
  appVersion: Y()
});
function lt() {
  const r = {
    commitHash: "df1d8a339dfabcf359af7144fe142b59ff7d9a0f",
    isNestBuild: false,
    commitTimestamp: "2026-07-10T21:55:12.000Z",
    buildType: "prod",
    appVersion: "1.20186.1"
  };
  const e = ut.safeParse(r);
  if (e.success) {
    return e.data;
  } else {
    return {
      buildType: "prod",
      commitHash: "UNKNOWN",
      commitTimestamp: "",
      isNestBuild: false,
      appVersion: "0.0.0"
    };
  }
}
var ke = {};
const ft = Object.fromEntries(["arch", "platform", "type", "versions"].map(r => [r, true]));
const ne = Object.fromEntries(Object.entries(process).filter(([r]) => ft[r]));
ne.version = lt().appVersion;
ne.env = ke.CI ? {
  CI: ke.CI
} : {};
b.contextBridge.exposeInMainWorld("process", ne);
b.contextBridge.exposeInMainWorld("desktopEssentialTelemetryDisabled", Ee(process.argv));
b.contextBridge.exposeInMainWorld("buddy", {
  getPathForFile: r => b.webUtils.getPathForFile(r)
});
//# sourceMappingURL=buddy.js.map