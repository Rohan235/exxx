function e(e, t, r, n) {
  Object.defineProperty(e, t, {
    get: r,
    set: n,
    enumerable: !0,
    configurable: !0,
  });
}
var t =
  "undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof self
    ? self
    : "undefined" != typeof window
    ? window
    : "undefined" != typeof global
    ? global
    : {};
function r(e) {
  return e && e.__esModule ? e.default : e;
}
var n = {},
  o = {},
  i = t.parcelRequire3a11;
null == i &&
  (((i = function (e) {
    if (e in n) return n[e].exports;
    if (e in o) {
      var t = o[e];
      delete o[e];
      var r = { id: e, exports: {} };
      return (n[e] = r), t.call(r.exports, r, r.exports), r.exports;
    }
    var i = new Error("Cannot find module '" + e + "'");
    throw ((i.code = "MODULE_NOT_FOUND"), i);
  }).register = function (e, t) {
    o[e] = t;
  }),
  (t.parcelRequire3a11 = i)),
  i.register("27Lyk", function (t, r) {
    var n, o;
    e(
      t.exports,
      "register",
      () => n,
      (e) => (n = e)
    ),
      e(
        t.exports,
        "resolve",
        () => o,
        (e) => (o = e)
      );
    var i = {};
    (n = function (e) {
      for (var t = Object.keys(e), r = 0; r < t.length; r++) i[t[r]] = e[t[r]];
    }),
      (o = function (e) {
        var t = i[e];
        if (null == t) throw new Error("Could not resolve bundle with id " + e);
        return t;
      });
  }),
  i.register("3gXC5", function (e, t) {
    var r = i("7mb70"),
      n = i("kxexm"),
      o = i("a0W74"),
      a = i("1YgHc"),
      c = i("8lFU3"),
      s = r.RegExp,
      u = s.prototype;
    n &&
      c(function () {
        var e = !0;
        try {
          s(".", "d");
        } catch (t) {
          e = !1;
        }
        var t = {},
          r = "",
          n = e ? "dgimsy" : "gimsy",
          o = function (e, n) {
            Object.defineProperty(t, e, {
              get: function () {
                return (r += n), !0;
              },
            });
          },
          i = {
            dotAll: "s",
            global: "g",
            ignoreCase: "i",
            multiline: "m",
            sticky: "y",
          };
        for (var a in (e && (i.hasIndices = "d"), i)) o(a, i[a]);
        return (
          Object.getOwnPropertyDescriptor(u, "flags").get.call(t) !== n ||
          r !== n
        );
      }) &&
      o(u, "flags", { configurable: !0, get: a });
  }),
  i.register("7mb70", function (e, r) {
    var n = function (e) {
      return e && e.Math == Math && e;
    };
    e.exports =
      n("object" == typeof globalThis && globalThis) ||
      n("object" == typeof window && window) ||
      n("object" == typeof self && self) ||
      n("object" == typeof t && t) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  }),
  i.register("kxexm", function (e, t) {
    var r = i("8lFU3");
    e.exports = !r(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    });
  }),
  i.register("8lFU3", function (e, t) {
    e.exports = function (e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    };
  }),
  i.register("a0W74", function (e, t) {
    var r = i("Q0KqA"),
      n = i("3RKYQ");
    e.exports = function (e, t, o) {
      return (
        o.get && r(o.get, t, { getter: !0 }),
        o.set && r(o.set, t, { setter: !0 }),
        n.f(e, t, o)
      );
    };
  }),
  i.register("Q0KqA", function (e, t) {
    var r = i("5Okwt"),
      n = i("8lFU3"),
      o = i("9GTLg"),
      a = i("2HOcD"),
      c = i("kxexm"),
      s = i("b8MME").CONFIGURABLE,
      u = i("dbqDy"),
      f = i("51DEQ"),
      l = f.enforce,
      p = f.get,
      g = String,
      h = Object.defineProperty,
      d = r("".slice),
      m = r("".replace),
      v = r([].join),
      y =
        c &&
        !n(function () {
          return 8 !== h(function () {}, "length", { value: 8 }).length;
        }),
      b = String(String).split("String"),
      x = (e.exports = function (e, t, r) {
        "Symbol(" === d(g(t), 0, 7) &&
          (t = "[" + m(g(t), /^Symbol\(([^)]*)\)/, "$1") + "]"),
          r && r.getter && (t = "get " + t),
          r && r.setter && (t = "set " + t),
          (!a(e, "name") || (s && e.name !== t)) &&
            (c ? h(e, "name", { value: t, configurable: !0 }) : (e.name = t)),
          y &&
            r &&
            a(r, "arity") &&
            e.length !== r.arity &&
            h(e, "length", { value: r.arity });
        try {
          r && a(r, "constructor") && r.constructor
            ? c && h(e, "prototype", { writable: !1 })
            : e.prototype && (e.prototype = void 0);
        } catch (e) {}
        var n = l(e);
        return (
          a(n, "source") || (n.source = v(b, "string" == typeof t ? t : "")), e
        );
      });
    Function.prototype.toString = x(function () {
      return (o(this) && p(this).source) || u(this);
    }, "toString");
  }),
  i.register("5Okwt", function (e, t) {
    var r = i("gcG3g"),
      n = Function.prototype,
      o = n.call,
      a = r && n.bind.bind(o, o);
    e.exports = r
      ? a
      : function (e) {
          return function () {
            return o.apply(e, arguments);
          };
        };
  }),
  i.register("gcG3g", function (e, t) {
    var r = i("8lFU3");
    e.exports = !r(function () {
      var e = function () {}.bind();
      return "function" != typeof e || e.hasOwnProperty("prototype");
    });
  }),
  i.register("9GTLg", function (e, t) {
    var r = i("cs4Sg"),
      n = r.all;
    e.exports = r.IS_HTMLDDA
      ? function (e) {
          return "function" == typeof e || e === n;
        }
      : function (e) {
          return "function" == typeof e;
        };
  }),
  i.register("cs4Sg", function (e, t) {
    var r = "object" == typeof document && document.all,
      n = void 0 === r && void 0 !== r;
    e.exports = { all: r, IS_HTMLDDA: n };
  }),
  i.register("2HOcD", function (e, t) {
    var r = i("5Okwt"),
      n = i("dZoqA"),
      o = r({}.hasOwnProperty);
    e.exports =
      Object.hasOwn ||
      function (e, t) {
        return o(n(e), t);
      };
  }),
  i.register("dZoqA", function (e, t) {
    var r = i("gMtBp"),
      n = Object;
    e.exports = function (e) {
      return n(r(e));
    };
  }),
  i.register("gMtBp", function (e, t) {
    var r = i("aIKND"),
      n = TypeError;
    e.exports = function (e) {
      if (r(e)) throw n("Can't call method on " + e);
      return e;
    };
  }),
  i.register("aIKND", function (e, t) {
    e.exports = function (e) {
      return null == e;
    };
  }),
  i.register("b8MME", function (e, t) {
    var r = i("kxexm"),
      n = i("2HOcD"),
      o = Function.prototype,
      a = r && Object.getOwnPropertyDescriptor,
      c = n(o, "name"),
      s = c && "something" === function () {}.name,
      u = c && (!r || (r && a(o, "name").configurable));
    e.exports = { EXISTS: c, PROPER: s, CONFIGURABLE: u };
  }),
  i.register("dbqDy", function (e, t) {
    var r = i("5Okwt"),
      n = i("9GTLg"),
      o = i("hRrSO"),
      a = r(Function.toString);
    n(o.inspectSource) ||
      (o.inspectSource = function (e) {
        return a(e);
      }),
      (e.exports = o.inspectSource);
  }),
  i.register("hRrSO", function (e, t) {
    var r = i("7mb70"),
      n = i("6BhPC"),
      o = "__core-js_shared__",
      a = r[o] || n(o, {});
    e.exports = a;
  }),
  i.register("6BhPC", function (e, t) {
    var r = i("7mb70"),
      n = Object.defineProperty;
    e.exports = function (e, t) {
      try {
        n(r, e, { value: t, configurable: !0, writable: !0 });
      } catch (n) {
        r[e] = t;
      }
      return t;
    };
  }),
  i.register("51DEQ", function (e, t) {
    var r,
      n,
      o,
      a = i("6amDj"),
      c = i("7mb70"),
      s = i("96Da4"),
      u = i("bylnm"),
      f = i("2HOcD"),
      l = i("hRrSO"),
      p = i("bgRz0"),
      g = i("dGabS"),
      h = "Object already initialized",
      d = c.TypeError,
      m = c.WeakMap;
    if (a || l.state) {
      var v = l.state || (l.state = new m());
      (v.get = v.get),
        (v.has = v.has),
        (v.set = v.set),
        (r = function (e, t) {
          if (v.has(e)) throw d(h);
          return (t.facade = e), v.set(e, t), t;
        }),
        (n = function (e) {
          return v.get(e) || {};
        }),
        (o = function (e) {
          return v.has(e);
        });
    } else {
      var y = p("state");
      (g[y] = !0),
        (r = function (e, t) {
          if (f(e, y)) throw d(h);
          return (t.facade = e), u(e, y, t), t;
        }),
        (n = function (e) {
          return f(e, y) ? e[y] : {};
        }),
        (o = function (e) {
          return f(e, y);
        });
    }
    e.exports = {
      set: r,
      get: n,
      has: o,
      enforce: function (e) {
        return o(e) ? n(e) : r(e, {});
      },
      getterFor: function (e) {
        return function (t) {
          var r;
          if (!s(t) || (r = n(t)).type !== e)
            throw d("Incompatible receiver, " + e + " required");
          return r;
        };
      },
    };
  }),
  i.register("6amDj", function (e, t) {
    var r = i("7mb70"),
      n = i("9GTLg"),
      o = r.WeakMap;
    e.exports = n(o) && /native code/.test(String(o));
  }),
  i.register("96Da4", function (e, t) {
    var r = i("9GTLg"),
      n = i("cs4Sg"),
      o = n.all;
    e.exports = n.IS_HTMLDDA
      ? function (e) {
          return "object" == typeof e ? null !== e : r(e) || e === o;
        }
      : function (e) {
          return "object" == typeof e ? null !== e : r(e);
        };
  }),
  i.register("bylnm", function (e, t) {
    var r = i("kxexm"),
      n = i("3RKYQ"),
      o = i("fEYls");
    e.exports = r
      ? function (e, t, r) {
          return n.f(e, t, o(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        };
  }),
  i.register("3RKYQ", function (t, r) {
    var n;
    e(
      t.exports,
      "f",
      () => n,
      (e) => (n = e)
    );
    var o = i("kxexm"),
      a = i("ieeYC"),
      c = i("1TEKD"),
      s = i("hc2VB"),
      u = i("aUydt"),
      f = TypeError,
      l = Object.defineProperty,
      p = Object.getOwnPropertyDescriptor,
      g = "enumerable",
      h = "configurable",
      d = "writable";
    n = o
      ? c
        ? function (e, t, r) {
            if (
              (s(e),
              (t = u(t)),
              s(r),
              "function" == typeof e &&
                "prototype" === t &&
                "value" in r &&
                d in r &&
                !r[d])
            ) {
              var n = p(e, t);
              n &&
                n[d] &&
                ((e[t] = r.value),
                (r = {
                  configurable: h in r ? r[h] : n[h],
                  enumerable: g in r ? r[g] : n[g],
                  writable: !1,
                }));
            }
            return l(e, t, r);
          }
        : l
      : function (e, t, r) {
          if ((s(e), (t = u(t)), s(r), a))
            try {
              return l(e, t, r);
            } catch (e) {}
          if ("get" in r || "set" in r) throw f("Accessors not supported");
          return "value" in r && (e[t] = r.value), e;
        };
  }),
  i.register("ieeYC", function (e, t) {
    var r = i("kxexm"),
      n = i("8lFU3"),
      o = i("1RN1j");
    e.exports =
      !r &&
      !n(function () {
        return (
          7 !=
          Object.defineProperty(o("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  }),
  i.register("1RN1j", function (e, t) {
    var r = i("7mb70"),
      n = i("96Da4"),
      o = r.document,
      a = n(o) && n(o.createElement);
    e.exports = function (e) {
      return a ? o.createElement(e) : {};
    };
  }),
  i.register("1TEKD", function (e, t) {
    var r = i("kxexm"),
      n = i("8lFU3");
    e.exports =
      r &&
      n(function () {
        return (
          42 !=
          Object.defineProperty(function () {}, "prototype", {
            value: 42,
            writable: !1,
          }).prototype
        );
      });
  }),
  i.register("hc2VB", function (e, t) {
    var r = i("96Da4"),
      n = String,
      o = TypeError;
    e.exports = function (e) {
      if (r(e)) return e;
      throw o(n(e) + " is not an object");
    };
  }),
  i.register("aUydt", function (e, t) {
    var r = i("cmpCY"),
      n = i("XW8Vm");
    e.exports = function (e) {
      var t = r(e, "string");
      return n(t) ? t : t + "";
    };
  }),
  i.register("cmpCY", function (e, t) {
    var r = i("bGtV7"),
      n = i("96Da4"),
      o = i("XW8Vm"),
      a = i("kdzTk"),
      c = i("fc07P"),
      s = i("blCy8"),
      u = TypeError,
      f = s("toPrimitive");
    e.exports = function (e, t) {
      if (!n(e) || o(e)) return e;
      var i,
        s = a(e, f);
      if (s) {
        if ((void 0 === t && (t = "default"), (i = r(s, e, t)), !n(i) || o(i)))
          return i;
        throw u("Can't convert object to primitive value");
      }
      return void 0 === t && (t = "number"), c(e, t);
    };
  }),
  i.register("bGtV7", function (e, t) {
    var r = i("gcG3g"),
      n = Function.prototype.call;
    e.exports = r
      ? n.bind(n)
      : function () {
          return n.apply(n, arguments);
        };
  }),
  i.register("XW8Vm", function (e, t) {
    var r = i("eaZdY"),
      n = i("9GTLg"),
      o = i("5Ef1u"),
      a = i("6aX88"),
      c = Object;
    e.exports = a
      ? function (e) {
          return "symbol" == typeof e;
        }
      : function (e) {
          var t = r("Symbol");
          return n(t) && o(t.prototype, c(e));
        };
  }),
  i.register("eaZdY", function (e, t) {
    var r = i("7mb70"),
      n = i("9GTLg");
    e.exports = function (e, t) {
      return arguments.length < 2
        ? ((o = r[e]), n(o) ? o : void 0)
        : r[e] && r[e][t];
      var o;
    };
  }),
  i.register("5Ef1u", function (e, t) {
    var r = i("5Okwt");
    e.exports = r({}.isPrototypeOf);
  }),
  i.register("6aX88", function (e, t) {
    var r = i("6n5Js");
    e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
  }),
  i.register("6n5Js", function (e, t) {
    var r = i("dbmhE"),
      n = i("8lFU3");
    e.exports =
      !!Object.getOwnPropertySymbols &&
      !n(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && r && r < 41)
        );
      });
  }),
  i.register("dbmhE", function (e, t) {
    var r,
      n,
      o = i("7mb70"),
      a = i("6hv4b"),
      c = o.process,
      s = o.Deno,
      u = (c && c.versions) || (s && s.version),
      f = u && u.v8;
    f && (n = (r = f.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])),
      !n &&
        a &&
        (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) &&
        (r = a.match(/Chrome\/(\d+)/)) &&
        (n = +r[1]),
      (e.exports = n);
  }),
  i.register("6hv4b", function (e, t) {
    e.exports =
      ("undefined" != typeof navigator && String(navigator.userAgent)) || "";
  }),
  i.register("kdzTk", function (e, t) {
    var r = i("eXHxq"),
      n = i("aIKND");
    e.exports = function (e, t) {
      var o = e[t];
      return n(o) ? void 0 : r(o);
    };
  }),
  i.register("eXHxq", function (e, t) {
    var r = i("9GTLg"),
      n = i("chuuX"),
      o = TypeError;
    e.exports = function (e) {
      if (r(e)) return e;
      throw o(n(e) + " is not a function");
    };
  }),
  i.register("chuuX", function (e, t) {
    var r = String;
    e.exports = function (e) {
      try {
        return r(e);
      } catch (e) {
        return "Object";
      }
    };
  }),
  i.register("fc07P", function (e, t) {
    var r = i("bGtV7"),
      n = i("9GTLg"),
      o = i("96Da4"),
      a = TypeError;
    e.exports = function (e, t) {
      var i, c;
      if ("string" === t && n((i = e.toString)) && !o((c = r(i, e)))) return c;
      if (n((i = e.valueOf)) && !o((c = r(i, e)))) return c;
      if ("string" !== t && n((i = e.toString)) && !o((c = r(i, e)))) return c;
      throw a("Can't convert object to primitive value");
    };
  }),
  i.register("blCy8", function (e, t) {
    var r = i("7mb70"),
      n = i("2axMY"),
      o = i("2HOcD"),
      a = i("84zlK"),
      c = i("6n5Js"),
      s = i("6aX88"),
      u = r.Symbol,
      f = n("wks"),
      l = s ? u.for || u : (u && u.withoutSetter) || a;
    e.exports = function (e) {
      return o(f, e) || (f[e] = c && o(u, e) ? u[e] : l("Symbol." + e)), f[e];
    };
  }),
  i.register("2axMY", function (e, t) {
    var r = i("jfGLK"),
      n = i("hRrSO");
    (e.exports = function (e, t) {
      return n[e] || (n[e] = void 0 !== t ? t : {});
    })("versions", []).push({
      version: "3.29.1",
      mode: r ? "pure" : "global",
      copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.29.1/LICENSE",
      source: "https://github.com/zloirock/core-js",
    });
  }),
  i.register("jfGLK", function (e, t) {
    e.exports = !1;
  }),
  i.register("84zlK", function (e, t) {
    var r = i("5Okwt"),
      n = 0,
      o = Math.random(),
      a = r((1).toString);
    e.exports = function (e) {
      return "Symbol(" + (void 0 === e ? "" : e) + ")_" + a(++n + o, 36);
    };
  }),
  i.register("fEYls", function (e, t) {
    e.exports = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t,
      };
    };
  }),
  i.register("bgRz0", function (e, t) {
    var r = i("2axMY"),
      n = i("84zlK"),
      o = r("keys");
    e.exports = function (e) {
      return o[e] || (o[e] = n(e));
    };
  }),
  i.register("dGabS", function (e, t) {
    e.exports = {};
  }),
  i.register("1YgHc", function (e, t) {
    var r = i("hc2VB");
    e.exports = function () {
      var e = r(this),
        t = "";
      return (
        e.hasIndices && (t += "d"),
        e.global && (t += "g"),
        e.ignoreCase && (t += "i"),
        e.multiline && (t += "m"),
        e.dotAll && (t += "s"),
        e.unicode && (t += "u"),
        e.unicodeSets && (t += "v"),
        e.sticky && (t += "y"),
        t
      );
    };
  }),
  i.register("ic7rk", function (e, t) {
    i("dcbyp"), i("jGQDB");
  }),
  i.register("dcbyp", function (e, t) {
    var r = i("hmx0d"),
      n = i("7mb70"),
      o = i("e2IBw").clear;
    r(
      { global: !0, bind: !0, enumerable: !0, forced: n.clearImmediate !== o },
      { clearImmediate: o }
    );
  }),
  i.register("hmx0d", function (e, t) {
    var r = i("7mb70"),
      n = i("9po1L").f,
      o = i("bylnm"),
      a = i("5zwnU"),
      c = i("6BhPC"),
      s = i("kwCyx"),
      u = i("hm2ET");
    e.exports = function (e, t) {
      var i,
        f,
        l,
        p,
        g,
        h = e.target,
        d = e.global,
        m = e.stat;
      if ((i = d ? r : m ? r[h] || c(h, {}) : (r[h] || {}).prototype))
        for (f in t) {
          if (
            ((p = t[f]),
            (l = e.dontCallGetSet ? (g = n(i, f)) && g.value : i[f]),
            !u(d ? f : h + (m ? "." : "#") + f, e.forced) && void 0 !== l)
          ) {
            if (typeof p == typeof l) continue;
            s(p, l);
          }
          (e.sham || (l && l.sham)) && o(p, "sham", !0), a(i, f, p, e);
        }
    };
  }),
  i.register("9po1L", function (t, r) {
    var n;
    e(
      t.exports,
      "f",
      () => n,
      (e) => (n = e)
    );
    var o = i("kxexm"),
      a = i("bGtV7"),
      c = i("2zQpY"),
      s = i("fEYls"),
      u = i("6CGth"),
      f = i("aUydt"),
      l = i("2HOcD"),
      p = i("ieeYC"),
      g = Object.getOwnPropertyDescriptor;
    n = o
      ? g
      : function (e, t) {
          if (((e = u(e)), (t = f(t)), p))
            try {
              return g(e, t);
            } catch (e) {}
          if (l(e, t)) return s(!a(c.f, e, t), e[t]);
        };
  }),
  i.register("2zQpY", function (t, r) {
    var n;
    e(
      t.exports,
      "f",
      () => n,
      (e) => (n = e)
    );
    var o = {}.propertyIsEnumerable,
      i = Object.getOwnPropertyDescriptor,
      a = i && !o.call({ 1: 2 }, 1);
    n = a
      ? function (e) {
          var t = i(this, e);
          return !!t && t.enumerable;
        }
      : o;
  }),
  i.register("6CGth", function (e, t) {
    var r = i("bbbU8"),
      n = i("gMtBp");
    e.exports = function (e) {
      return r(n(e));
    };
  }),
  i.register("bbbU8", function (e, t) {
    var r = i("5Okwt"),
      n = i("8lFU3"),
      o = i("faIBy"),
      a = Object,
      c = r("".split);
    e.exports = n(function () {
      return !a("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return "String" == o(e) ? c(e, "") : a(e);
        }
      : a;
  }),
  i.register("faIBy", function (e, t) {
    var r = i("5Okwt"),
      n = r({}.toString),
      o = r("".slice);
    e.exports = function (e) {
      return o(n(e), 8, -1);
    };
  }),
  i.register("5zwnU", function (e, t) {
    var r = i("9GTLg"),
      n = i("3RKYQ"),
      o = i("Q0KqA"),
      a = i("6BhPC");
    e.exports = function (e, t, i, c) {
      c || (c = {});
      var s = c.enumerable,
        u = void 0 !== c.name ? c.name : t;
      if ((r(i) && o(i, u, c), c.global)) s ? (e[t] = i) : a(t, i);
      else {
        try {
          c.unsafe ? e[t] && (s = !0) : delete e[t];
        } catch (e) {}
        s
          ? (e[t] = i)
          : n.f(e, t, {
              value: i,
              enumerable: !1,
              configurable: !c.nonConfigurable,
              writable: !c.nonWritable,
            });
      }
      return e;
    };
  }),
  i.register("kwCyx", function (e, t) {
    var r = i("2HOcD"),
      n = i("4qMpp"),
      o = i("9po1L"),
      a = i("3RKYQ");
    e.exports = function (e, t, i) {
      for (var c = n(t), s = a.f, u = o.f, f = 0; f < c.length; f++) {
        var l = c[f];
        r(e, l) || (i && r(i, l)) || s(e, l, u(t, l));
      }
    };
  }),
  i.register("4qMpp", function (e, t) {
    var r = i("eaZdY"),
      n = i("5Okwt"),
      o = i("lbvB0"),
      a = i("1gYLQ"),
      c = i("hc2VB"),
      s = n([].concat);
    e.exports =
      r("Reflect", "ownKeys") ||
      function (e) {
        var t = o.f(c(e)),
          r = a.f;
        return r ? s(t, r(e)) : t;
      };
  }),
  i.register("lbvB0", function (t, r) {
    var n;
    e(
      t.exports,
      "f",
      () => n,
      (e) => (n = e)
    );
    var o = i("gUxdt"),
      a = i("jQUZd").concat("length", "prototype");
    n =
      Object.getOwnPropertyNames ||
      function (e) {
        return o(e, a);
      };
  }),
  i.register("gUxdt", function (e, t) {
    var r = i("5Okwt"),
      n = i("2HOcD"),
      o = i("6CGth"),
      a = i("kBDFQ").indexOf,
      c = i("dGabS"),
      s = r([].push);
    e.exports = function (e, t) {
      var r,
        i = o(e),
        u = 0,
        f = [];
      for (r in i) !n(c, r) && n(i, r) && s(f, r);
      for (; t.length > u; ) n(i, (r = t[u++])) && (~a(f, r) || s(f, r));
      return f;
    };
  }),
  i.register("kBDFQ", function (e, t) {
    var r = i("6CGth"),
      n = i("2ES4E"),
      o = i("ptmgx"),
      a = function (e) {
        return function (t, i, a) {
          var c,
            s = r(t),
            u = o(s),
            f = n(a, u);
          if (e && i != i) {
            for (; u > f; ) if ((c = s[f++]) != c) return !0;
          } else
            for (; u > f; f++)
              if ((e || f in s) && s[f] === i) return e || f || 0;
          return !e && -1;
        };
      };
    e.exports = { includes: a(!0), indexOf: a(!1) };
  }),
  i.register("2ES4E", function (e, t) {
    var r = i("fBlGn"),
      n = Math.max,
      o = Math.min;
    e.exports = function (e, t) {
      var i = r(e);
      return i < 0 ? n(i + t, 0) : o(i, t);
    };
  }),
  i.register("fBlGn", function (e, t) {
    var r = i("7aV2g");
    e.exports = function (e) {
      var t = +e;
      return t != t || 0 === t ? 0 : r(t);
    };
  }),
  i.register("7aV2g", function (e, t) {
    var r = Math.ceil,
      n = Math.floor;
    e.exports =
      Math.trunc ||
      function (e) {
        var t = +e;
        return (t > 0 ? n : r)(t);
      };
  }),
  i.register("ptmgx", function (e, t) {
    var r = i("6pMmI");
    e.exports = function (e) {
      return r(e.length);
    };
  }),
  i.register("6pMmI", function (e, t) {
    var r = i("fBlGn"),
      n = Math.min;
    e.exports = function (e) {
      return e > 0 ? n(r(e), 9007199254740991) : 0;
    };
  }),
  i.register("jQUZd", function (e, t) {
    e.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  }),
  i.register("1gYLQ", function (t, r) {
    var n;
    e(
      t.exports,
      "f",
      () => n,
      (e) => (n = e)
    ),
      (n = Object.getOwnPropertySymbols);
  }),
  i.register("hm2ET", function (e, t) {
    var r = i("8lFU3"),
      n = i("9GTLg"),
      o = /#|\.prototype\./,
      a = function (e, t) {
        var o = s[c(e)];
        return o == f || (o != u && (n(t) ? r(t) : !!t));
      },
      c = (a.normalize = function (e) {
        return String(e).replace(o, ".").toLowerCase();
      }),
      s = (a.data = {}),
      u = (a.NATIVE = "N"),
      f = (a.POLYFILL = "P");
    e.exports = a;
  }),
  i.register("e2IBw", function (e, t) {
    var r,
      n,
      o,
      a,
      c = i("7mb70"),
      s = i("5dW2a"),
      u = i("5LtBJ"),
      f = i("9GTLg"),
      l = i("2HOcD"),
      p = i("8lFU3"),
      g = i("fRIdv"),
      h = i("BsNAl"),
      d = i("1RN1j"),
      m = i("aM51J"),
      v = i("vJWYV"),
      y = i("5sfID"),
      b = c.setImmediate,
      x = c.clearImmediate,
      w = c.process,
      O = c.Dispatch,
      k = c.Function,
      S = c.MessageChannel,
      E = c.String,
      L = 0,
      _ = {},
      T = "onreadystatechange";
    p(function () {
      r = c.location;
    });
    var M = function (e) {
        if (l(_, e)) {
          var t = _[e];
          delete _[e], t();
        }
      },
      A = function (e) {
        return function () {
          M(e);
        };
      },
      I = function (e) {
        M(e.data);
      },
      P = function (e) {
        c.postMessage(E(e), r.protocol + "//" + r.host);
      };
    (b && x) ||
      ((b = function (e) {
        m(arguments.length, 1);
        var t = f(e) ? e : k(e),
          r = h(arguments, 1);
        return (
          (_[++L] = function () {
            s(t, void 0, r);
          }),
          n(L),
          L
        );
      }),
      (x = function (e) {
        delete _[e];
      }),
      y
        ? (n = function (e) {
            w.nextTick(A(e));
          })
        : O && O.now
        ? (n = function (e) {
            O.now(A(e));
          })
        : S && !v
        ? ((a = (o = new S()).port2),
          (o.port1.onmessage = I),
          (n = u(a.postMessage, a)))
        : c.addEventListener &&
          f(c.postMessage) &&
          !c.importScripts &&
          r &&
          "file:" !== r.protocol &&
          !p(P)
        ? ((n = P), c.addEventListener("message", I, !1))
        : (n =
            T in d("script")
              ? function (e) {
                  g.appendChild(d("script"))[T] = function () {
                    g.removeChild(this), M(e);
                  };
                }
              : function (e) {
                  setTimeout(A(e), 0);
                })),
      (e.exports = { set: b, clear: x });
  }),
  i.register("5dW2a", function (e, t) {
    var r = i("gcG3g"),
      n = Function.prototype,
      o = n.apply,
      a = n.call;
    e.exports =
      ("object" == typeof Reflect && Reflect.apply) ||
      (r
        ? a.bind(o)
        : function () {
            return a.apply(o, arguments);
          });
  }),
  i.register("5LtBJ", function (e, t) {
    var r = i("6c6m5"),
      n = i("eXHxq"),
      o = i("gcG3g"),
      a = r(r.bind);
    e.exports = function (e, t) {
      return (
        n(e),
        void 0 === t
          ? e
          : o
          ? a(e, t)
          : function () {
              return e.apply(t, arguments);
            }
      );
    };
  }),
  i.register("6c6m5", function (e, t) {
    var r = i("faIBy"),
      n = i("5Okwt");
    e.exports = function (e) {
      if ("Function" === r(e)) return n(e);
    };
  }),
  i.register("fRIdv", function (e, t) {
    var r = i("eaZdY");
    e.exports = r("document", "documentElement");
  }),
  i.register("BsNAl", function (e, t) {
    var r = i("5Okwt");
    e.exports = r([].slice);
  }),
  i.register("aM51J", function (e, t) {
    var r = TypeError;
    e.exports = function (e, t) {
      if (e < t) throw r("Not enough arguments");
      return e;
    };
  }),
  i.register("vJWYV", function (e, t) {
    var r = i("6hv4b");
    e.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(r);
  }),
  i.register("5sfID", function (e, t) {
    var r = i("hPtJY"),
      n = i("faIBy");
    e.exports = void 0 !== r && "process" == n(r);
  }),
  i.register("hPtJY", function (e, t) {
    var r,
      n,
      o = (e.exports = {});
    function i() {
      throw new Error("setTimeout has not been defined");
    }
    function a() {
      throw new Error("clearTimeout has not been defined");
    }
    function c(e) {
      if (r === setTimeout) return setTimeout(e, 0);
      if ((r === i || !r) && setTimeout)
        return (r = setTimeout), setTimeout(e, 0);
      try {
        return r(e, 0);
      } catch (t) {
        try {
          return r.call(null, e, 0);
        } catch (t) {
          return r.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        r = "function" == typeof setTimeout ? setTimeout : i;
      } catch (e) {
        r = i;
      }
      try {
        n = "function" == typeof clearTimeout ? clearTimeout : a;
      } catch (e) {
        n = a;
      }
    })();
    var s,
      u = [],
      f = !1,
      l = -1;
    function p() {
      f &&
        s &&
        ((f = !1), s.length ? (u = s.concat(u)) : (l = -1), u.length && g());
    }
    function g() {
      if (!f) {
        var e = c(p);
        f = !0;
        for (var t = u.length; t; ) {
          for (s = u, u = []; ++l < t; ) s && s[l].run();
          (l = -1), (t = u.length);
        }
        (s = null),
          (f = !1),
          (function (e) {
            if (n === clearTimeout) return clearTimeout(e);
            if ((n === a || !n) && clearTimeout)
              return (n = clearTimeout), clearTimeout(e);
            try {
              return n(e);
            } catch (t) {
              try {
                return n.call(null, e);
              } catch (t) {
                return n.call(this, e);
              }
            }
          })(e);
      }
    }
    function h(e, t) {
      (this.fun = e), (this.array = t);
    }
    function d() {}
    (o.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
      u.push(new h(e, t)), 1 !== u.length || f || c(g);
    }),
      (h.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (o.title = "browser"),
      (o.browser = !0),
      (o.env = {}),
      (o.argv = []),
      (o.version = ""),
      (o.versions = {}),
      (o.on = d),
      (o.addListener = d),
      (o.once = d),
      (o.off = d),
      (o.removeListener = d),
      (o.removeAllListeners = d),
      (o.emit = d),
      (o.prependListener = d),
      (o.prependOnceListener = d),
      (o.listeners = function (e) {
        return [];
      }),
      (o.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (o.cwd = function () {
        return "/";
      }),
      (o.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (o.umask = function () {
        return 0;
      });
  }),
  i.register("jGQDB", function (e, t) {
    var r = i("hmx0d"),
      n = i("7mb70"),
      o = i("e2IBw").set,
      a = i("kHdVR"),
      c = n.setImmediate ? a(o, !1) : o;
    r(
      { global: !0, bind: !0, enumerable: !0, forced: n.setImmediate !== c },
      { setImmediate: c }
    );
  }),
  i.register("kHdVR", function (e, t) {
    var r,
      n = i("7mb70"),
      o = i("5dW2a"),
      a = i("9GTLg"),
      c = i("datYX"),
      s = i("6hv4b"),
      u = i("BsNAl"),
      f = i("aM51J"),
      l = n.Function,
      p =
        /MSIE .\./.test(s) ||
        (c &&
          ((r = n.Bun.version.split(".")).length < 3 ||
            (0 == r[0] && (r[1] < 3 || (3 == r[1] && 0 == r[2])))));
    e.exports = function (e, t) {
      var r = t ? 2 : 1;
      return p
        ? function (n, i) {
            var c = f(arguments.length, 1) > r,
              s = a(n) ? n : l(n),
              p = c ? u(arguments, r) : [],
              g = c
                ? function () {
                    o(s, this, p);
                  }
                : s;
            return t ? e(g, i) : e(g);
          }
        : e;
    };
  }),
  i.register("datYX", function (e, t) {
    e.exports =
      "function" == typeof Bun && Bun && "string" == typeof Bun.version;
  }),
  i.register("1is5Y", function (t, r) {
    e(t.exports, "state", () => a),
      e(t.exports, "loadRecipe", () => u),
      e(t.exports, "loadSearchResults", () => f),
      e(t.exports, "getSearchResultsPage", () => l),
      e(t.exports, "updateServings", () => p),
      e(t.exports, "addBookmark", () => h),
      e(t.exports, "deleteBookmark", () => d),
      e(t.exports, "uploadRecipe", () => m),
      e(t.exports, "clearIngredients", () => y),
      e(t.exports, "addIngredient", () => b),
      e(t.exports, "removeIngredient", () => x),
      e(t.exports, "submitListData", () => w),
      e(t.exports, "clearPlanner", () => k),
      e(t.exports, "deleteMeal", () => S),
      e(t.exports, "addPlannedMeal", () => E),
      e(t.exports, "changeWeek", () => L),
      e(t.exports, "changeActive", () => _),
      e(t.exports, "clearLocalStorage", () => A),
      e(t.exports, "changeTheme", () => I),
      i("9NZOq");
    var n = i("fZ5A9"),
      o = (i("fZ5A9"), (n = i("fZ5A9")), i("ge6e3"));
    const a = {
        theme: "light",
        recipe: {},
        search: {
          query: "",
          results: [],
          resultsPerPage: n.RES_PER_PAGE,
          page: 1,
        },
        bookmarks: [],
        ingredientsList: [],
        planner: {
          currentWeek: [
            ["", "", "", ""],
            ["", "", "", ""],
            ["", "", "", ""],
            ["", "", "", ""],
            ["", "", "", ""],
            ["", "", "", ""],
            ["", "", "", ""],
          ],
          nextWeek: [
            ["", "", "", ""],
            ["", "", "", ""],
            ["", "", "", ""],
            ["", "", "", ""],
            ["", "", "", ""],
            ["", "", "", ""],
            ["", "", "", ""],
          ],
          page: 1,
          date: new Date(),
          active: 0,
        },
        lastMonday: n.FIRST_MONDAY,
      },
      c = function (e) {
        const { recipe: t } = e.data;
        return {
          id: t.id,
          title: t.title,
          publisher: t.publisher,
          sourceUrl: t.source_url,
          image: t.image_url,
          servings: t.servings,
          cookingTime: t.cooking_time,
          ingredients: t.ingredients,
          ...(t.key && { key: t.key }),
        };
      },
      s = function (e, t) {
        return e
          .map(
            (e) =>
              e.nutrition?.nutrients.find(
                (e) => e.name === t[0].toUpperCase() + t.slice(1)
              )?.amount ?? 0
          )
          .reduce((e, t) => e + t, 0);
      },
      u = async function (e) {
        try {
          const t = await (0, o.AJAX)(`${n.API_URL}${e}?key=${n.KEY}`);
          (a.recipe = c(t)),
            a.bookmarks.some((t) => t.id === e)
              ? (a.recipe.bookmarked = !0)
              : (a.recipe.bookmarked = !1);
          const r = a.recipe.ingredients
              .map(
                (e) => `${e.quantity ?? ""} ${e.unit ?? ""} ${e.description}`
              )
              .join("\n"),
            i = await (0, o.AJAX)(
              `${n.SPOONACULAR_ENDPOINT}?apiKey=${n.SPOONACULAR_API_KEY}`,
              {
                ingredientList: r,
                servings: a.recipe.servings,
                includeNutrition: !0,
              },
              "application/x-www-form-urlencoded"
            ),
            u = s(i, "calories"),
            f = s(i, "carbohydrates"),
            l = s(i, "protein"),
            p = s(i, "fat");
          (a.recipe.calories = Math.floor(u / a.recipe.servings)),
            (a.recipe.carbs = Math.floor(f / a.recipe.servings)),
            (a.recipe.proteins = Math.floor(l / a.recipe.servings)),
            (a.recipe.fats = Math.floor(p / a.recipe.servings));
        } catch (e) {
          throw (
            ("402" === e.message.slice(-3) &&
              ((a.recipe.calories = void 0),
              (a.recipe.carbs = void 0),
              (a.recipe.proteins = void 0),
              (a.recipe.proteins = void 0)),
            e)
          );
        }
      },
      f = async function (e) {
        try {
          a.search;
          const t = await (0, o.AJAX)(`${n.API_URL}?search=${e}&key=${n.KEY}`);
          (a.search.results = t.data.recipes.map((e) => ({
            id: e.id,
            title: e.title,
            publisher: e.publisher,
            image: e.image_url,
            ...(e.key && { key: e.key }),
          }))),
            (a.search.page = 1);
        } catch (e) {
          throw (console.error(`${e} ⚠⚠⚠`), e);
        }
      },
      l = function (e = a.search.page) {
        a.search.page = e;
        const t = (e - 1) * a.search.resultsPerPage,
          r = e * a.search.resultsPerPage;
        return a.search.results.slice(t, r);
      },
      p = function (e) {
        a.recipe.ingredients.forEach((t) => {
          t.quantity = (t.quantity * e) / a.recipe.servings;
        }),
          (a.recipe.servings = e);
      },
      g = function () {
        localStorage.setItem("bookmarks", JSON.stringify(a.bookmarks));
      },
      h = function (e) {
        a.bookmarks.push(e),
          e.id === a.recipe.id && (a.recipe.bookmarked = !0),
          g();
      },
      d = function (e) {
        const t = a.bookmarks.findIndex((t) => t.id === e);
        a.bookmarks.splice(t, 1),
          e === a.recipe.id && (a.recipe.bookmarked = !1),
          g();
      },
      m = async function (e) {
        try {
          const t = (0, o.formatIngredientsArr)(e),
            r = {
              title: e.title,
              source_url: e.sourceUrl,
              image_url: e.image,
              publisher: e.publisher,
              cooking_time: +e.cookingTime,
              servings: n.SERVINGS_TO_UPLOAD,
              ingredients: t,
            },
            i = await (0, o.AJAX)(
              `${n.API_URL}?key=${n.KEY}`,
              r,
              "application/json"
            );
          (a.recipe = c(i)), h(a.recipe);
        } catch (e) {
          throw e;
        }
      },
      v = function () {
        localStorage.setItem("ingredients", JSON.stringify(a.ingredientsList));
      },
      y = function () {
        (a.ingredientsList = ["My shopping list"]), v();
      },
      b = function (e) {
        a.ingredientsList.push(e), v();
      },
      x = function (e) {
        const t = a.ingredientsList.findIndex((t) => t.trim() === e.trim());
        a.ingredientsList.splice(t, 1), v();
      },
      w = function (e) {
        y(), "" === e[0][1] && (e[0][1] = "My shopping list");
        const t = e.map((e) => e[1]).filter((e) => "" !== e);
        (a.ingredientsList = t), v();
      },
      O = function () {
        localStorage.setItem("plannerData", JSON.stringify(a.planner));
      },
      k = function () {
        localStorage.removeItem("plannerData"),
          (a.planner = {
            currentWeek: [
              ["", "", "", ""],
              ["", "", "", ""],
              ["", "", "", ""],
              ["", "", "", ""],
              ["", "", "", ""],
              ["", "", "", ""],
              ["", "", "", ""],
            ],
            nextWeek: [
              ["", "", "", ""],
              ["", "", "", ""],
              ["", "", "", ""],
              ["", "", "", ""],
              ["", "", "", ""],
              ["", "", "", ""],
              ["", "", "", ""],
            ],
            page: 1,
            date: new Date(),
            active: 0,
          }),
          O();
      },
      S = function (e, t) {
        (a.planner[1 === a.planner.page ? "currentWeek" : "nextWeek"][e][t] =
          ""),
          O();
      },
      E = function (e) {
        (a.planner[e.week][e.weekday][e.meal] = e.recipe), O();
      },
      L = function (e) {
        (a.planner.page = e), O();
      },
      _ = function (e) {
        (a.planner.active = e), O();
      },
      T = function () {
        const e = a.planner.nextWeek.map((e) => e.map((e) => e));
        console.log(e),
          (a.planner.currentWeek = e),
          (a.planner.nextWeek = [
            ["", "", "", ""],
            ["", "", "", ""],
            ["", "", "", ""],
            ["", "", "", ""],
            ["", "", "", ""],
            ["", "", "", ""],
            ["", "", "", ""],
          ]),
          O();
      },
      M = function () {
        const e = Math.trunc((0, o.calcDaysPassed)(a.lastMonday, new Date()));
        if (!(e < 7)) {
          if ((7 === e && ((a.lastMonday = new Date()), T()), e > 7)) {
            const t = Math.trunc(e / 7),
              r = e % 7;
            (a.lastMonday = new Date() - r * n.MS_PER_DAY),
              1 === t && T(),
              t > 1 &&
                ((a.planner.currentWeek = [
                  ["", "", "", ""],
                  ["", "", "", ""],
                  ["", "", "", ""],
                  ["", "", "", ""],
                  ["", "", "", ""],
                  ["", "", "", ""],
                  ["", "", "", ""],
                ]),
                (a.planner.nextWeek = [
                  ["", "", "", ""],
                  ["", "", "", ""],
                  ["", "", "", ""],
                  ["", "", "", ""],
                  ["", "", "", ""],
                  ["", "", "", ""],
                  ["", "", "", ""],
                ]));
          }
          localStorage.setItem("lastMonday", JSON.stringify(a.lastMonday));
        }
      },
      A = function () {
        localStorage.removeItem("lastMonday"),
          k(),
          localStorage.removeItem("bookmarks"),
          localStorage.removeItem("lastMonday");
      },
      I = function (e) {
        (a.theme = e), localStorage.setItem("theme", JSON.stringify(a.theme));
      };
    !(function () {
      const e = localStorage.getItem("bookmarks"),
        t = localStorage.getItem("ingredients"),
        r = localStorage.getItem("plannerData"),
        o = localStorage.getItem("lastMonday"),
        i = localStorage.getItem("theme");
      e && (a.bookmarks = JSON.parse(e)),
        t && (a.ingredientsList = JSON.parse(t)),
        t || (a.ingredientsList = ["My shopping list"]),
        r && (a.planner = JSON.parse(r)),
        i && (a.theme = JSON.parse(i)),
        o && (a.lastMonday = new Date(JSON.parse(o))),
        o || (a.lastMonday = new Date(n.FIRST_MONDAY)),
        M();
    })();
  }),
  i.register("9NZOq", function (e, t) {
    var r = (function (e) {
      var t,
        r = Object.prototype,
        n = r.hasOwnProperty,
        o =
          Object.defineProperty ||
          function (e, t, r) {
            e[t] = r.value;
          },
        i = "function" == typeof Symbol ? Symbol : {},
        a = i.iterator || "@@iterator",
        c = i.asyncIterator || "@@asyncIterator",
        s = i.toStringTag || "@@toStringTag";
      function u(e, t, r) {
        return (
          Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          e[t]
        );
      }
      try {
        u({}, "");
      } catch (e) {
        u = function (e, t, r) {
          return (e[t] = r);
        };
      }
      function f(e, t, r, n) {
        var i = t && t.prototype instanceof v ? t : v,
          a = Object.create(i.prototype),
          c = new A(n || []);
        return o(a, "_invoke", { value: L(e, r, c) }), a;
      }
      function l(e, t, r) {
        try {
          return { type: "normal", arg: e.call(t, r) };
        } catch (e) {
          return { type: "throw", arg: e };
        }
      }
      e.wrap = f;
      var p = "suspendedStart",
        g = "suspendedYield",
        h = "executing",
        d = "completed",
        m = {};
      function v() {}
      function y() {}
      function b() {}
      var x = {};
      u(x, a, function () {
        return this;
      });
      var w = Object.getPrototypeOf,
        O = w && w(w(I([])));
      O && O !== r && n.call(O, a) && (x = O);
      var k = (b.prototype = v.prototype = Object.create(x));
      function S(e) {
        ["next", "throw", "return"].forEach(function (t) {
          u(e, t, function (e) {
            return this._invoke(t, e);
          });
        });
      }
      function E(e, t) {
        function r(o, i, a, c) {
          var s = l(e[o], e, i);
          if ("throw" !== s.type) {
            var u = s.arg,
              f = u.value;
            return f && "object" == typeof f && n.call(f, "__await")
              ? t.resolve(f.__await).then(
                  function (e) {
                    r("next", e, a, c);
                  },
                  function (e) {
                    r("throw", e, a, c);
                  }
                )
              : t.resolve(f).then(
                  function (e) {
                    (u.value = e), a(u);
                  },
                  function (e) {
                    return r("throw", e, a, c);
                  }
                );
          }
          c(s.arg);
        }
        var i;
        o(this, "_invoke", {
          value: function (e, n) {
            function o() {
              return new t(function (t, o) {
                r(e, n, t, o);
              });
            }
            return (i = i ? i.then(o, o) : o());
          },
        });
      }
      function L(e, t, r) {
        var n = p;
        return function (o, i) {
          if (n === h) throw new Error("Generator is already running");
          if (n === d) {
            if ("throw" === o) throw i;
            return P();
          }
          for (r.method = o, r.arg = i; ; ) {
            var a = r.delegate;
            if (a) {
              var c = _(a, r);
              if (c) {
                if (c === m) continue;
                return c;
              }
            }
            if ("next" === r.method) r.sent = r._sent = r.arg;
            else if ("throw" === r.method) {
              if (n === p) throw ((n = d), r.arg);
              r.dispatchException(r.arg);
            } else "return" === r.method && r.abrupt("return", r.arg);
            n = h;
            var s = l(e, t, r);
            if ("normal" === s.type) {
              if (((n = r.done ? d : g), s.arg === m)) continue;
              return { value: s.arg, done: r.done };
            }
            "throw" === s.type &&
              ((n = d), (r.method = "throw"), (r.arg = s.arg));
          }
        };
      }
      function _(e, r) {
        var n = r.method,
          o = e.iterator[n];
        if (o === t)
          return (
            (r.delegate = null),
            ("throw" === n &&
              e.iterator.return &&
              ((r.method = "return"),
              (r.arg = t),
              _(e, r),
              "throw" === r.method)) ||
              ("return" !== n &&
                ((r.method = "throw"),
                (r.arg = new TypeError(
                  "The iterator does not provide a '" + n + "' method"
                )))),
            m
          );
        var i = l(o, e.iterator, r.arg);
        if ("throw" === i.type)
          return (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), m;
        var a = i.arg;
        return a
          ? a.done
            ? ((r[e.resultName] = a.value),
              (r.next = e.nextLoc),
              "return" !== r.method && ((r.method = "next"), (r.arg = t)),
              (r.delegate = null),
              m)
            : a
          : ((r.method = "throw"),
            (r.arg = new TypeError("iterator result is not an object")),
            (r.delegate = null),
            m);
      }
      function T(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]),
          2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
          this.tryEntries.push(t);
      }
      function M(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
      }
      function A(e) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          e.forEach(T, this),
          this.reset(!0);
      }
      function I(e) {
        if (e) {
          var r = e[a];
          if (r) return r.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var o = -1,
              i = function r() {
                for (; ++o < e.length; )
                  if (n.call(e, o)) return (r.value = e[o]), (r.done = !1), r;
                return (r.value = t), (r.done = !0), r;
              };
            return (i.next = i);
          }
        }
        return { next: P };
      }
      function P() {
        return { value: t, done: !0 };
      }
      return (
        (y.prototype = b),
        o(k, "constructor", { value: b, configurable: !0 }),
        o(b, "constructor", { value: y, configurable: !0 }),
        (y.displayName = u(b, s, "GeneratorFunction")),
        (e.isGeneratorFunction = function (e) {
          var t = "function" == typeof e && e.constructor;
          return (
            !!t &&
            (t === y || "GeneratorFunction" === (t.displayName || t.name))
          );
        }),
        (e.mark = function (e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, b)
              : ((e.__proto__ = b), u(e, s, "GeneratorFunction")),
            (e.prototype = Object.create(k)),
            e
          );
        }),
        (e.awrap = function (e) {
          return { __await: e };
        }),
        S(E.prototype),
        u(E.prototype, c, function () {
          return this;
        }),
        (e.AsyncIterator = E),
        (e.async = function (t, r, n, o, i) {
          void 0 === i && (i = Promise);
          var a = new E(f(t, r, n, o), i);
          return e.isGeneratorFunction(r)
            ? a
            : a.next().then(function (e) {
                return e.done ? e.value : a.next();
              });
        }),
        S(k),
        u(k, s, "Generator"),
        u(k, a, function () {
          return this;
        }),
        u(k, "toString", function () {
          return "[object Generator]";
        }),
        (e.keys = function (e) {
          var t = Object(e),
            r = [];
          for (var n in t) r.push(n);
          return (
            r.reverse(),
            function e() {
              for (; r.length; ) {
                var n = r.pop();
                if (n in t) return (e.value = n), (e.done = !1), e;
              }
              return (e.done = !0), e;
            }
          );
        }),
        (e.values = I),
        (A.prototype = {
          constructor: A,
          reset: function (e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = t),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = t),
              this.tryEntries.forEach(M),
              !e)
            )
              for (var r in this)
                "t" === r.charAt(0) &&
                  n.call(this, r) &&
                  !isNaN(+r.slice(1)) &&
                  (this[r] = t);
          },
          stop: function () {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval;
          },
          dispatchException: function (e) {
            if (this.done) throw e;
            var r = this;
            function o(n, o) {
              return (
                (c.type = "throw"),
                (c.arg = e),
                (r.next = n),
                o && ((r.method = "next"), (r.arg = t)),
                !!o
              );
            }
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var a = this.tryEntries[i],
                c = a.completion;
              if ("root" === a.tryLoc) return o("end");
              if (a.tryLoc <= this.prev) {
                var s = n.call(a, "catchLoc"),
                  u = n.call(a, "finallyLoc");
                if (s && u) {
                  if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                } else if (s) {
                  if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                } else {
                  if (!u)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                }
              }
            }
          },
          abrupt: function (e, t) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var o = this.tryEntries[r];
              if (
                o.tryLoc <= this.prev &&
                n.call(o, "finallyLoc") &&
                this.prev < o.finallyLoc
              ) {
                var i = o;
                break;
              }
            }
            i &&
              ("break" === e || "continue" === e) &&
              i.tryLoc <= t &&
              t <= i.finallyLoc &&
              (i = null);
            var a = i ? i.completion : {};
            return (
              (a.type = e),
              (a.arg = t),
              i
                ? ((this.method = "next"), (this.next = i.finallyLoc), m)
                : this.complete(a)
            );
          },
          complete: function (e, t) {
            if ("throw" === e.type) throw e.arg;
            return (
              "break" === e.type || "continue" === e.type
                ? (this.next = e.arg)
                : "return" === e.type
                ? ((this.rval = this.arg = e.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === e.type && t && (this.next = t),
              m
            );
          },
          finish: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var r = this.tryEntries[t];
              if (r.finallyLoc === e)
                return this.complete(r.completion, r.afterLoc), M(r), m;
            }
          },
          catch: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var r = this.tryEntries[t];
              if (r.tryLoc === e) {
                var n = r.completion;
                if ("throw" === n.type) {
                  var o = n.arg;
                  M(r);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (e, r, n) {
            return (
              (this.delegate = { iterator: I(e), resultName: r, nextLoc: n }),
              "next" === this.method && (this.arg = t),
              m
            );
          },
        }),
        e
      );
    })(e.exports);
    try {
      regeneratorRuntime = r;
    } catch (e) {
      "object" == typeof globalThis
        ? (globalThis.regeneratorRuntime = r)
        : Function("r", "regeneratorRuntime = r")(r);
    }
  }),
  i.register("fZ5A9", function (t, r) {
    e(t.exports, "API_URL", () => n),
      e(t.exports, "TIMEOUT_SEC", () => o),
      e(t.exports, "RES_PER_PAGE", () => i),
      e(t.exports, "KEY", () => a),
      e(t.exports, "MODAL_CLOSE_SEC", () => c),
      e(t.exports, "SERVINGS_TO_UPLOAD", () => s),
      e(t.exports, "SPOONACULAR_ENDPOINT", () => u),
      e(t.exports, "SPOONACULAR_API_KEY", () => f),
      e(t.exports, "MS_PER_DAY", () => l),
      e(t.exports, "FIRST_MONDAY", () => p);
    const n = "https://forkify-api.herokuapp.com/api/v2/recipes/",
      o = 10,
      i = 10,
      a = "f267ad8a-3e06-44e7-8c2e-bfdd23d4f5ab",
      c = 2.5,
      s = 4,
      u = "https://api.spoonacular.com/recipes/parseIngredients",
      f = "9638f65d27dc4037866f95ddff97fe36",
      l = 864e5,
      p = new Date(0).getTime() + 4 * l;
  }),
  i.register("ge6e3", function (t, r) {
    e(t.exports, "AJAX", () => o),
      e(t.exports, "formatIngredientsArr", () => a),
      e(t.exports, "maxFourWords", () => c),
      e(t.exports, "calcDaysPassed", () => s),
      e(t.exports, "formatDate", () => u);
    var n = i("fZ5A9");
    n = i("fZ5A9");
    i("9NZOq");
    const o = async function (e, t, r) {
        try {
          const i = t
              ? fetch(e, {
                  method: "POST",
                  headers: { "Content-Type": r },
                  body:
                    "application/json" === r
                      ? JSON.stringify(t)
                      : new URLSearchParams(t),
                })
              : fetch(e),
            a = await Promise.race([
              i,
              ((o = n.TIMEOUT_SEC),
              new Promise(function (e, t) {
                setTimeout(function () {
                  t(
                    new Error(
                      `Request took too long! Timeout after ${o} second`
                    )
                  );
                }, 1e3 * o);
              })),
            ]),
            c = await a.json();
          if (!a.ok) throw new Error(`${c.message} ${a.status}`);
          return c;
        } catch (e) {
          throw e;
        }
        var o;
      },
      a = function (e) {
        const t = Object.entries(e)
            .filter((e) => e[0].startsWith("ingredient"))
            .map((e) => {
              const t = +e[0].split("-").slice(-2, -1) - 1,
                [r] = e[0].split("-").slice(-1);
              return [t, r, e[1]];
            }),
          r = t.filter((e) => "quantity" === e[1]),
          n = t.filter((e) => "unit" === e[1]),
          o = t.filter((e) => "description" === e[1]),
          i = [];
        for (
          let e = 0;
          e < 8 && ("" !== r[e][2] || "" !== n[e][2] || "" !== o[e][2]);
          e++
        )
          i.push({
            quantity: r[e][2] ? +r[e][2] : null,
            unit: n[e][2],
            description: o[e][2],
          });
        return i;
      },
      c = function (e) {
        const t = e.split(" ");
        return t.length <= 4
          ? e
          : t.length > 4
          ? t.filter((e, t) => t < 4).join(" ") + "..."
          : void 0;
      },
      s = function (e, t) {
        return Math.abs(t - e) / n.MS_PER_DAY;
      },
      u = function () {
        return new Intl.DateTimeFormat("en-US", {
          day: "numeric",
          weekday: "long",
          month: "long",
          year: "numeric",
        }).format(new Date());
      };
  }),
  i.register("4YTqJ", function (t, n) {
    e(t.exports, "default", () => a);
    var o = i("RMgkO");
    class a {
      _data;
      render(e, t = !0) {
        if (!e || (Array.isArray(e) && 0 === e.length))
          return this.renderError();
        this._data = e;
        const r = this._generateMarkup();
        if (!t) return r;
        this._clear(), this._parentElement.insertAdjacentHTML("afterbegin", r);
      }
      update(e) {
        this._data = e;
        const t = this._generateMarkup(),
          r = document.createRange().createContextualFragment(t),
          n = Array.from(r.querySelectorAll("*")),
          o = Array.from(this._parentElement.querySelectorAll("*"));
        n.forEach((e, t) => {
          const r = o[t];
          e.isEqualNode(r) ||
            "" === e.firstChild?.nodeValue.trim() ||
            (r.textContent = e.textContent),
            e.isEqualNode(r) ||
              Array.from(e.attributes).forEach((e) =>
                r.setAttribute(e.name, e.value)
              );
        });
      }
      _clear() {
        this._parentElement.innerHTML = "";
      }
      renderSpinner() {
        const e = `\n    <div class="spinner">\n            <svg>\n              <use href="${r(
          o
        )}#icon-loader"></use>\n            </svg>\n          </div>\n    `;
        this._clear(), this._parentElement.insertAdjacentHTML("afterbegin", e);
      }
      renderError(e = this._errorMessage) {
        const t = `\n      <div class="error">\n            <div>\n              <svg>\n                <use href="${r(
          o
        )}#icon-alert-triangle"></use>\n              </svg>\n            </div>\n            <p>${e}</p>\n          </div>\n      `;
        this._clear(), this._parentElement.insertAdjacentHTML("afterbegin", t);
      }
      renderMessage(e = this._message) {
        const t = `\n      <div class="message">\n            <div>\n              <svg>\n                <use href="${r(
          o
        )}#icon-smile"></use>\n              </svg>\n            </div>\n            <p>${e}</p>\n          </div>\n      `;
        this._clear(), this._parentElement.insertAdjacentHTML("afterbegin", t);
      }
    }
  }),
  i.register("RMgkO", function (e, t) {
    e.exports = new URL(
      "../" + i("27Lyk").resolve("eyyUD"),
      import.meta.url
    ).toString();
  }),
  i.register("5smQv", function (t, r) {
    e(t.exports, "default", () => n);
    var n = new (class {
      _parentElement = document.documentElement;
      _sliderBtn = document.querySelector(".slider__circle");
      setTheme(e) {
        (document.documentElement.dataset.theme = e),
          (document.querySelector(".slider__circle").style.left =
            "dark" === e ? "4.5rem" : "1rem");
      }
      addHandlerChangeTheme(e) {
        document
          .querySelector(".slider")
          .addEventListener("click", function () {
            const t = document.documentElement.dataset.theme;
            e(t);
          });
      }
    })();
  }),
  i("27Lyk").register(
    JSON.parse(
      '{"1J7OZ":"mealPlanner.ef01a64d.js","eyyUD":"icons.7bb96926.svg"}'
    )
  );
//# sourceMappingURL=mealPlanner.ef01a64d.js.map
