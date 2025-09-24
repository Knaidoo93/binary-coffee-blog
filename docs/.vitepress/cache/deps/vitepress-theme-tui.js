import {
  computed,
  customRef,
  getCurrentInstance,
  getCurrentScope,
  nextTick,
  onMounted,
  onScopeDispose,
  readonly,
  ref,
  shallowRef,
  toRef,
  toValue,
  unref,
  watch
} from "./chunk-JD3CXNQ6.js";

// node_modules/vitepress-theme-tui/dist/vitepress-theme-tui.js
function ne(e) {
  return getCurrentScope() ? (onScopeDispose(e), true) : false;
}
var re = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var oe = Object.prototype.toString;
var ie = (e) => oe.call(e) === "[object Object]";
var ue = () => {
};
function ae(...e) {
  if (e.length !== 1)
    return toRef(...e);
  const t = e[0];
  return typeof t == "function" ? readonly(customRef(() => ({ get: t, set: ue }))) : ref(t);
}
function le(e, t) {
  function r(...i) {
    return new Promise((s, f) => {
      Promise.resolve(e(() => t.apply(this, i), { fn: t, thisArg: this, args: i })).then(s).catch(f);
    });
  }
  return r;
}
var $ = (e) => e();
function se(e = $, t = {}) {
  const {
    initialState: r = "active"
  } = t, i = ae(r === "active");
  function s() {
    i.value = false;
  }
  function f() {
    i.value = true;
  }
  const m = (...o) => {
    i.value && e(...o);
  };
  return { isActive: readonly(i), pause: s, resume: f, eventFilter: m };
}
function F(e) {
  return Array.isArray(e) ? e : [e];
}
function ce(e) {
  return getCurrentInstance();
}
function fe(e, t, r = {}) {
  const {
    eventFilter: i = $,
    ...s
  } = r;
  return watch(
    e,
    le(
      i,
      t
    ),
    s
  );
}
function de(e, t, r = {}) {
  const {
    eventFilter: i,
    initialState: s = "active",
    ...f
  } = r, { eventFilter: m, pause: o, resume: u, isActive: l } = se(i, { initialState: s });
  return { stop: fe(
    e,
    t,
    {
      ...f,
      eventFilter: m
    }
  ), pause: o, resume: u, isActive: l };
}
function pe(e, t = true, r) {
  ce() ? onMounted(e, r) : t ? e() : nextTick(e);
}
function me(e, t, r) {
  return watch(
    e,
    t,
    {
      ...r,
      immediate: true
    }
  );
}
var W = re ? window : void 0;
function ye(e) {
  var t;
  const r = toValue(e);
  return (t = r == null ? void 0 : r.$el) != null ? t : r;
}
function N(...e) {
  const t = [], r = () => {
    t.forEach((o) => o()), t.length = 0;
  }, i = (o, u, l, d) => (o.addEventListener(u, l, d), () => o.removeEventListener(u, l, d)), s = computed(() => {
    const o = F(toValue(e[0])).filter((u) => u != null);
    return o.every((u) => typeof u != "string") ? o : void 0;
  }), f = me(
    () => {
      var o, u;
      return [
        (u = (o = s.value) == null ? void 0 : o.map((l) => ye(l))) != null ? u : [W].filter((l) => l != null),
        F(toValue(s.value ? e[1] : e[0])),
        F(unref(s.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        toValue(s.value ? e[3] : e[2])
      ];
    },
    ([o, u, l, d]) => {
      if (r(), !(o == null ? void 0 : o.length) || !(u == null ? void 0 : u.length) || !(l == null ? void 0 : l.length))
        return;
      const y = ie(d) ? { ...d } : d;
      t.push(
        ...o.flatMap(
          (T) => u.flatMap(
            (S) => l.map((b) => i(T, S, b, y))
          )
        )
      );
    },
    { flush: "post" }
  ), m = () => {
    f(), r();
  };
  return ne(r), m;
}
var A = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
var O = "__vueuse_ssr_handlers__";
var he = ve();
function ve() {
  return O in A || (A[O] = A[O] || {}), A[O];
}
function ge(e, t) {
  return he[e] || t;
}
function Se(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
var be = {
  boolean: {
    read: (e) => e === "true",
    write: (e) => String(e)
  },
  object: {
    read: (e) => JSON.parse(e),
    write: (e) => JSON.stringify(e)
  },
  number: {
    read: (e) => Number.parseFloat(e),
    write: (e) => String(e)
  },
  any: {
    read: (e) => e,
    write: (e) => String(e)
  },
  string: {
    read: (e) => e,
    write: (e) => String(e)
  },
  map: {
    read: (e) => new Map(JSON.parse(e)),
    write: (e) => JSON.stringify(Array.from(e.entries()))
  },
  set: {
    read: (e) => new Set(JSON.parse(e)),
    write: (e) => JSON.stringify(Array.from(e))
  },
  date: {
    read: (e) => new Date(e),
    write: (e) => e.toISOString()
  }
};
var L = "vueuse-storage";
function we(e, t, r, i = {}) {
  var s;
  const {
    flush: f = "pre",
    deep: m = true,
    listenToStorageChanges: o = true,
    writeDefaults: u = true,
    mergeDefaults: l = false,
    shallow: d,
    window: y = W,
    eventFilter: T,
    onError: S = (n) => {
      console.error(n);
    },
    initOnMounted: b
  } = i, v = (d ? shallowRef : ref)(t), p = computed(() => toValue(e));
  if (!r)
    try {
      r = ge("getDefaultStorage", () => {
        var n;
        return (n = W) == null ? void 0 : n.localStorage;
      })();
    } catch (n) {
      S(n);
    }
  if (!r)
    return v;
  const h = toValue(t), k = Se(h), w = (s = i.serializer) != null ? s : be[k], { pause: I, resume: D } = de(
    v,
    (n) => H(n),
    { flush: f, deep: m, eventFilter: T }
  );
  watch(p, () => E(), { flush: f });
  let C = false;
  const x = (n) => {
    b && !C || E(n);
  }, G = (n) => {
    b && !C || U(n);
  };
  y && o && (r instanceof Storage ? N(y, "storage", x, { passive: true }) : N(y, L, G)), b ? pe(() => {
    C = true, E();
  }) : E();
  function M(n, a) {
    if (y) {
      const c = {
        key: p.value,
        oldValue: n,
        newValue: a,
        storageArea: r
      };
      y.dispatchEvent(r instanceof Storage ? new StorageEvent("storage", c) : new CustomEvent(L, {
        detail: c
      }));
    }
  }
  function H(n) {
    try {
      const a = r.getItem(p.value);
      if (n == null)
        M(a, null), r.removeItem(p.value);
      else {
        const c = w.write(n);
        a !== c && (r.setItem(p.value, c), M(a, c));
      }
    } catch (a) {
      S(a);
    }
  }
  function K(n) {
    const a = n ? n.newValue : r.getItem(p.value);
    if (a == null)
      return u && h != null && r.setItem(p.value, w.write(h)), h;
    if (!n && l) {
      const c = w.read(a);
      return typeof l == "function" ? l(c, h) : k === "object" && !Array.isArray(c) ? { ...h, ...c } : c;
    } else return typeof a != "string" ? a : w.read(a);
  }
  function E(n) {
    if (!(n && n.storageArea !== r)) {
      if (n && n.key == null) {
        v.value = h;
        return;
      }
      if (!(n && n.key !== p.value)) {
        I();
        try {
          const a = w.write(v.value);
          (n === void 0 || (n == null ? void 0 : n.newValue) !== a) && (v.value = K(n));
        } catch (a) {
          S(a);
        } finally {
          n ? nextTick(D) : D();
        }
      }
    }
  }
  function U(n) {
    E(n.detail);
  }
  return v;
}
var _ = [
  {
    name: "plain",
    label: "Plain"
  },
  {
    name: "default",
    label: "Default"
  },
  {
    name: "monokai",
    label: "Monokai"
  }
];
var z = _.map((e) => e.name);
var Ee = we("vp-tui-theme", "default");
function Te() {
  if (typeof document > "u")
    return "default";
  const e = document.documentElement;
  for (const t of _)
    if (e.classList.contains(t.className))
      return t.name;
  return "default";
}
function Ae(e) {
  if (typeof document > "u")
    return false;
  z.includes(e) || console.warn(`Theme "${e}" not found. Available themes: ${z.join(", ")}`);
  const t = document.documentElement;
  return t.classList.remove(
    ...Array.from(t.classList).filter((r) => r.startsWith("tui-theme-"))
  ), t.classList.add(`tui-theme-${e}`), Ee.value = e, true;
}
function Ce({ theme: e } = {}) {
  Ae(e || "default");
}
export {
  Ee as currentTheme,
  Te as getCurrentTheme,
  Ae as setTheme,
  _ as themes,
  Ce as useTUI
};
//# sourceMappingURL=vitepress-theme-tui.js.map
