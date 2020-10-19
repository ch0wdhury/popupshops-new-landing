!(function (t) {
  function e(e) {
    for (
      var r, a, s = e[0], u = e[1], c = e[2], h = 0, d = [];
      h < s.length;
      h++
    )
      (a = s[h]), i[a] && d.push(i[a][0]), (i[a] = 0);
    for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (t[r] = u[r]);
    for (l && l(e); d.length; ) d.shift()();
    return o.push.apply(o, c || []), n();
  }
  function n() {
    for (var t, e = 0; e < o.length; e++) {
      for (var n = o[e], r = !0, s = 1; s < n.length; s++) {
        var u = n[s];
        0 !== i[u] && (r = !1);
      }
      r && (o.splice(e--, 1), (t = a((a.s = n[0]))));
    }
    return t;
  }
  var r = {},
    i = { 0: 0 },
    o = [];
  function a(e) {
    if (r[e]) return r[e].exports;
    var n = (r[e] = { i: e, l: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
  }
  (a.m = t),
    (a.c = r),
    (a.d = function (t, e, n) {
      a.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (a.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (a.t = function (t, e) {
      if ((1 & e && (t = a(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (a.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          a.d(
            n,
            r,
            function (e) {
              return t[e];
            }.bind(null, r)
          );
      return n;
    }),
    (a.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return a.d(e, "a", e), e;
    }),
    (a.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (a.p = "");
  var s = (window.webpackJsonp = window.webpackJsonp || []),
    u = s.push.bind(s);
  (s.push = e), (s = s.slice());
  for (var c = 0; c < s.length; c++) e(s[c]);
  var l = u;
  o.push([18, 1]), n();
})({
  17: function (t, e, n) {
    (function (r) {
      var i;
      function o(t) {
        return (o =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      //! moment.js
      //! version : 2.6.0
      //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
      //! license : MIT
      //! momentjs.com
      //! moment.js
      //! version : 2.6.0
      //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
      //! license : MIT
      //! momentjs.com
      (function (a) {
        function s(t, e) {
          function n() {
            !1 === X.suppressDeprecationWarnings &&
              "undefined" != typeof console &&
              console.warn &&
              console.warn("Deprecation warning: " + t);
          }
          var r = !0;
          return p(function () {
            return r && (n(), (r = !1)), e.apply(this, arguments);
          }, e);
        }
        function u(t, e) {
          return function (n) {
            return g(t.call(this, n), e);
          };
        }
        function c(t, e) {
          return function (n) {
            return this.lang().ordinal(t.call(this, n), e);
          };
        }
        function l() {}
        function h(t) {
          _(t), p(this, t);
        }
        function d(t) {
          var e = w(t),
            n = e.year || 0,
            r = e.quarter || 0,
            i = e.month || 0,
            o = e.week || 0,
            a = e.day || 0,
            s = e.hour || 0,
            u = e.minute || 0,
            c = e.second || 0,
            l = e.millisecond || 0;
          (this._milliseconds = +l + 1e3 * c + 6e4 * u + 36e5 * s),
            (this._days = +a + 7 * o),
            (this._months = +i + 3 * r + 12 * n),
            (this._data = {}),
            this._bubble();
        }
        function p(t, e) {
          for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
          return (
            e.hasOwnProperty("toString") && (t.toString = e.toString),
            e.hasOwnProperty("valueOf") && (t.valueOf = e.valueOf),
            t
          );
        }
        function f(t) {
          return 0 > t ? Math.ceil(t) : Math.floor(t);
        }
        function g(t, e, n) {
          for (var r = "" + Math.abs(t), i = t >= 0; r.length < e; )
            r = "0" + r;
          return (i ? (n ? "+" : "") : "-") + r;
        }
        function m(t, e, n, r) {
          var i = e._milliseconds,
            o = e._days,
            a = e._months;
          (r = null == r || r),
            i && t._d.setTime(+t._d + i * n),
            o && J(t, "Date", G(t, "Date") + o * n),
            a && V(t, G(t, "Month") + a * n),
            r && X.updateOffset(t, o || a);
        }
        function v(t) {
          return "[object Array]" === Object.prototype.toString.call(t);
        }
        function y(t, e, n) {
          var r,
            i = Math.min(t.length, e.length),
            o = Math.abs(t.length - e.length),
            a = 0;
          for (r = 0; i > r; r++)
            ((n && t[r] !== e[r]) || (!n && C(t[r]) !== C(e[r]))) && a++;
          return a + o;
        }
        function b(t) {
          if (t) {
            var e = t.toLowerCase().replace(/(.)s$/, "$1");
            t = jt[t] || Wt[e] || e;
          }
          return t;
        }
        function w(t) {
          var e,
            n,
            r = {};
          for (n in t) t.hasOwnProperty(n) && (e = b(n)) && (r[e] = t[n]);
          return r;
        }
        function A(t) {
          var e, n;
          if (0 === t.indexOf("week")) (e = 7), (n = "day");
          else {
            if (0 !== t.indexOf("month")) return;
            (e = 12), (n = "month");
          }
          X[t] = function (r, i) {
            var o,
              s,
              u = X.fn._lang[t],
              c = [];
            if (
              ("number" == typeof r && ((i = r), (r = a)),
              (s = function (t) {
                var e = X().utc().set(n, t);
                return u.call(X.fn._lang, e, r || "");
              }),
              null != i)
            )
              return s(i);
            for (o = 0; e > o; o++) c.push(s(o));
            return c;
          };
        }
        function C(t) {
          var e = +t,
            n = 0;
          return (
            0 !== e &&
              isFinite(e) &&
              (n = e >= 0 ? Math.floor(e) : Math.ceil(e)),
            n
          );
        }
        function D(t, e) {
          return new Date(Date.UTC(t, e + 1, 0)).getUTCDate();
        }
        function x(t, e, n) {
          return z(X([t, 11, 31 + e - n]), e, n).week;
        }
        function S(t) {
          return E(t) ? 366 : 365;
        }
        function E(t) {
          return (t % 4 == 0 && t % 100 != 0) || t % 400 == 0;
        }
        function _(t) {
          var e;
          t._a &&
            -2 === t._pf.overflow &&
            ((e =
              t._a[it] < 0 || t._a[it] > 11
                ? it
                : t._a[ot] < 1 || t._a[ot] > D(t._a[rt], t._a[it])
                ? ot
                : t._a[at] < 0 || t._a[at] > 23
                ? at
                : t._a[st] < 0 || t._a[st] > 59
                ? st
                : t._a[ut] < 0 || t._a[ut] > 59
                ? ut
                : t._a[ct] < 0 || t._a[ct] > 999
                ? ct
                : -1),
            t._pf._overflowDayOfYear && (rt > e || e > ot) && (e = ot),
            (t._pf.overflow = e));
        }
        function k(t) {
          return (
            null == t._isValid &&
              ((t._isValid =
                !isNaN(t._d.getTime()) &&
                t._pf.overflow < 0 &&
                !t._pf.empty &&
                !t._pf.invalidMonth &&
                !t._pf.nullInput &&
                !t._pf.invalidFormat &&
                !t._pf.userInvalidated),
              t._strict &&
                (t._isValid =
                  t._isValid &&
                  0 === t._pf.charsLeftOver &&
                  0 === t._pf.unusedTokens.length)),
            t._isValid
          );
        }
        function T(t) {
          return t ? t.toLowerCase().replace("_", "-") : t;
        }
        function R(t, e) {
          return e._isUTC ? X(t).zone(e._offset || 0) : X(t).local();
        }
        function L(t) {
          var e,
            n,
            r,
            i,
            o = 0,
            a = function (t) {
              if (!lt[t] && dt)
                try {
                  !(function () {
                    var t = new Error("Cannot find module 'undefined'");
                    throw ((t.code = "MODULE_NOT_FOUND"), t);
                  })();
                } catch (t) {}
              return lt[t];
            };
          if (!t) return X.fn._lang;
          if (!v(t)) {
            if ((n = a(t))) return n;
            t = [t];
          }
          for (; o < t.length; ) {
            for (
              e = (i = T(t[o]).split("-")).length,
                r = (r = T(t[o + 1])) ? r.split("-") : null;
              e > 0;

            ) {
              if ((n = a(i.slice(0, e).join("-")))) return n;
              if (r && r.length >= e && y(i, r, !0) >= e - 1) break;
              e--;
            }
            o++;
          }
          return X.fn._lang;
        }
        function M(t) {
          return t.match(/\[[\s\S]/)
            ? t.replace(/^\[|\]$/g, "")
            : t.replace(/\\/g, "");
        }
        function O(t, e) {
          return t.isValid()
            ? ((e = N(e, t.lang())),
              Ht[e] ||
                (Ht[e] = (function (t) {
                  var e,
                    n,
                    r = t.match(mt);
                  for (e = 0, n = r.length; n > e; e++)
                    r[e] = Ut[r[e]] ? Ut[r[e]] : M(r[e]);
                  return function (i) {
                    var o = "";
                    for (e = 0; n > e; e++)
                      o += r[e] instanceof Function ? r[e].call(i, t) : r[e];
                    return o;
                  };
                })(e)),
              Ht[e](t))
            : t.lang().invalidDate();
        }
        function N(t, e) {
          function n(t) {
            return e.longDateFormat(t) || t;
          }
          var r = 5;
          for (vt.lastIndex = 0; r >= 0 && vt.test(t); )
            (t = t.replace(vt, n)), (vt.lastIndex = 0), (r -= 1);
          return t;
        }
        function P(t, e) {
          var n = e._strict;
          switch (t) {
            case "Q":
              return kt;
            case "DDDD":
              return Rt;
            case "YYYY":
            case "GGGG":
            case "gggg":
              return n ? Lt : wt;
            case "Y":
            case "G":
            case "g":
              return Ot;
            case "YYYYYY":
            case "YYYYY":
            case "GGGGG":
            case "ggggg":
              return n ? Mt : At;
            case "S":
              if (n) return kt;
            case "SS":
              if (n) return Tt;
            case "SSS":
              if (n) return Rt;
            case "DDD":
              return bt;
            case "MMM":
            case "MMMM":
            case "dd":
            case "ddd":
            case "dddd":
              return Dt;
            case "a":
            case "A":
              return L(e._l)._meridiemParse;
            case "X":
              return Et;
            case "Z":
            case "ZZ":
              return xt;
            case "T":
              return St;
            case "SSSS":
              return Ct;
            case "MM":
            case "DD":
            case "YY":
            case "GG":
            case "gg":
            case "HH":
            case "hh":
            case "mm":
            case "ss":
            case "ww":
            case "WW":
              return n ? Tt : yt;
            case "M":
            case "D":
            case "d":
            case "H":
            case "h":
            case "m":
            case "s":
            case "w":
            case "W":
            case "e":
            case "E":
              return yt;
            case "Do":
              return _t;
            default:
              return new RegExp(
                (function (t) {
                  return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
                })(
                  (function (t) {
                    return t.replace(
                      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                      function (t, e, n, r, i) {
                        return e || n || r || i;
                      }
                    );
                  })(t.replace("\\", ""))
                )
              );
          }
        }
        function I(t) {
          var e = (t = t || "").match(xt) || [],
            n = ((e[e.length - 1] || []) + "").match(Ft) || ["-", 0, 0],
            r = 60 * n[1] + C(n[2]);
          return "+" === n[0] ? -r : r;
        }
        function F(t, e, n) {
          var r,
            i = n._a;
          switch (t) {
            case "Q":
              null != e && (i[it] = 3 * (C(e) - 1));
              break;
            case "M":
            case "MM":
              null != e && (i[it] = C(e) - 1);
              break;
            case "MMM":
            case "MMMM":
              null != (r = L(n._l).monthsParse(e))
                ? (i[it] = r)
                : (n._pf.invalidMonth = e);
              break;
            case "D":
            case "DD":
              null != e && (i[ot] = C(e));
              break;
            case "Do":
              null != e && (i[ot] = C(parseInt(e, 10)));
              break;
            case "DDD":
            case "DDDD":
              null != e && (n._dayOfYear = C(e));
              break;
            case "YY":
              i[rt] = X.parseTwoDigitYear(e);
              break;
            case "YYYY":
            case "YYYYY":
            case "YYYYYY":
              i[rt] = C(e);
              break;
            case "a":
            case "A":
              n._isPm = L(n._l).isPM(e);
              break;
            case "H":
            case "HH":
            case "h":
            case "hh":
              i[at] = C(e);
              break;
            case "m":
            case "mm":
              i[st] = C(e);
              break;
            case "s":
            case "ss":
              i[ut] = C(e);
              break;
            case "S":
            case "SS":
            case "SSS":
            case "SSSS":
              i[ct] = C(1e3 * ("0." + e));
              break;
            case "X":
              n._d = new Date(1e3 * parseFloat(e));
              break;
            case "Z":
            case "ZZ":
              (n._useUTC = !0), (n._tzm = I(e));
              break;
            case "w":
            case "ww":
            case "W":
            case "WW":
            case "d":
            case "dd":
            case "ddd":
            case "dddd":
            case "e":
            case "E":
              t = t.substr(0, 1);
            case "gg":
            case "gggg":
            case "GG":
            case "GGGG":
            case "GGGGG":
              (t = t.substr(0, 2)), e && ((n._w = n._w || {}), (n._w[t] = e));
          }
        }
        function B(t) {
          var e,
            n,
            r,
            i,
            o,
            a,
            s,
            u,
            c,
            l,
            h = [];
          if (!t._d) {
            for (
              r = (function (t) {
                var e = new Date();
                return t._useUTC
                  ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()]
                  : [e.getFullYear(), e.getMonth(), e.getDate()];
              })(t),
                t._w &&
                  null == t._a[ot] &&
                  null == t._a[it] &&
                  ((o = function (e) {
                    var n = parseInt(e, 10);
                    return e
                      ? e.length < 3
                        ? n > 68
                          ? 1900 + n
                          : 2e3 + n
                        : n
                      : null == t._a[rt]
                      ? X().weekYear()
                      : t._a[rt];
                  }),
                  null != (a = t._w).GG || null != a.W || null != a.E
                    ? (s = U(o(a.GG), a.W || 1, a.E, 4, 1))
                    : ((u = L(t._l)),
                      (c =
                        null != a.d
                          ? q(a.d, u)
                          : null != a.e
                          ? parseInt(a.e, 10) + u._week.dow
                          : 0),
                      (l = parseInt(a.w, 10) || 1),
                      null != a.d && c < u._week.dow && l++,
                      (s = U(o(a.gg), l, c, u._week.doy, u._week.dow))),
                  (t._a[rt] = s.year),
                  (t._dayOfYear = s.dayOfYear)),
                t._dayOfYear &&
                  ((i = null == t._a[rt] ? r[rt] : t._a[rt]),
                  t._dayOfYear > S(i) && (t._pf._overflowDayOfYear = !0),
                  (n = H(i, 0, t._dayOfYear)),
                  (t._a[it] = n.getUTCMonth()),
                  (t._a[ot] = n.getUTCDate())),
                e = 0;
              3 > e && null == t._a[e];
              ++e
            )
              t._a[e] = h[e] = r[e];
            for (; 7 > e; e++)
              t._a[e] = h[e] = null == t._a[e] ? (2 === e ? 1 : 0) : t._a[e];
            (h[at] += C((t._tzm || 0) / 60)),
              (h[st] += C((t._tzm || 0) % 60)),
              (t._d = (t._useUTC
                ? H
                : function (t, e, n, r, i, o, a) {
                    var s = new Date(t, e, n, r, i, o, a);
                    return 1970 > t && s.setFullYear(t), s;
                  }
              ).apply(null, h));
          }
        }
        function j(t) {
          (t._a = []), (t._pf.empty = !0);
          var e,
            n,
            r,
            i,
            o,
            a = L(t._l),
            s = "" + t._i,
            u = s.length,
            c = 0;
          for (r = N(t._f, a).match(mt) || [], e = 0; e < r.length; e++)
            (i = r[e]),
              (n = (s.match(P(i, t)) || [])[0]) &&
                ((o = s.substr(0, s.indexOf(n))).length > 0 &&
                  t._pf.unusedInput.push(o),
                (s = s.slice(s.indexOf(n) + n.length)),
                (c += n.length)),
              Ut[i]
                ? (n ? (t._pf.empty = !1) : t._pf.unusedTokens.push(i),
                  F(i, n, t))
                : t._strict && !n && t._pf.unusedTokens.push(i);
          (t._pf.charsLeftOver = u - c),
            s.length > 0 && t._pf.unusedInput.push(s),
            t._isPm && t._a[at] < 12 && (t._a[at] += 12),
            !1 === t._isPm && 12 === t._a[at] && (t._a[at] = 0),
            B(t),
            _(t);
        }
        function W(t) {
          var e = t._i,
            n = pt.exec(e);
          e === a
            ? (t._d = new Date())
            : n
            ? (t._d = new Date(+n[1]))
            : "string" == typeof e
            ? (function (t) {
                var e,
                  n,
                  r = t._i,
                  i = Nt.exec(r);
                if (i) {
                  for (t._pf.iso = !0, e = 0, n = Pt.length; n > e; e++)
                    if (Pt[e][1].exec(r)) {
                      t._f = Pt[e][0] + (i[6] || " ");
                      break;
                    }
                  for (e = 0, n = It.length; n > e; e++)
                    if (It[e][1].exec(r)) {
                      t._f += It[e][0];
                      break;
                    }
                  r.match(xt) && (t._f += "Z"), j(t);
                } else X.createFromInputFallback(t);
              })(t)
            : v(e)
            ? ((t._a = e.slice(0)), B(t))
            : (function (t) {
                return (
                  "[object Date]" === Object.prototype.toString.call(t) ||
                  t instanceof Date
                );
              })(e)
            ? (t._d = new Date(+e))
            : "object" == o(e)
            ? (function (t) {
                var e;
                t._d ||
                  ((e = w(t._i)),
                  (t._a = [
                    e.year,
                    e.month,
                    e.day,
                    e.hour,
                    e.minute,
                    e.second,
                    e.millisecond,
                  ]),
                  B(t));
              })(t)
            : "number" == typeof e
            ? (t._d = new Date(e))
            : X.createFromInputFallback(t);
        }
        function H(t) {
          var e = new Date(Date.UTC.apply(null, arguments));
          return 1970 > t && e.setUTCFullYear(t), e;
        }
        function q(t, e) {
          if ("string" == typeof t)
            if (isNaN(t)) {
              if ("number" != typeof (t = e.weekdaysParse(t))) return null;
            } else t = parseInt(t, 10);
          return t;
        }
        function z(t, e, n) {
          var r,
            i = n - e,
            o = n - t.day();
          return (
            o > i && (o -= 7),
            i - 7 > o && (o += 7),
            (r = X(t).add("d", o)),
            { week: Math.ceil(r.dayOfYear() / 7), year: r.year() }
          );
        }
        function U(t, e, n, r, i) {
          var o,
            a = H(t, 0, 1).getUTCDay();
          return {
            year:
              (o =
                7 * (e - 1) +
                ((n = null != n ? n : i) - i) +
                (i - a + (a > r ? 7 : 0) - (i > a ? 7 : 0)) +
                1) > 0
                ? t
                : t - 1,
            dayOfYear: o > 0 ? o : S(t - 1) + o,
          };
        }
        function Y(t) {
          var e = t._i,
            n = t._f;
          return null === e || (n === a && "" === e)
            ? X.invalid({ nullInput: !0 })
            : ("string" == typeof e && (t._i = e = L().preparse(e)),
              X.isMoment(e)
                ? ((t = (function (t) {
                    var e,
                      n = {};
                    for (e in t)
                      t.hasOwnProperty(e) &&
                        ht.hasOwnProperty(e) &&
                        (n[e] = t[e]);
                    return n;
                  })(e))._d = new Date(+e._d))
                : n
                ? v(n)
                  ? (function (t) {
                      var e, n, r, i, o;
                      if (0 === t._f.length)
                        return (
                          (t._pf.invalidFormat = !0),
                          void (t._d = new Date(NaN))
                        );
                      for (i = 0; i < t._f.length; i++)
                        (o = 0),
                          ((e = p({}, t))._pf = {
                            empty: !1,
                            unusedTokens: [],
                            unusedInput: [],
                            overflow: -2,
                            charsLeftOver: 0,
                            nullInput: !1,
                            invalidMonth: null,
                            invalidFormat: !1,
                            userInvalidated: !1,
                            iso: !1,
                          }),
                          (e._f = t._f[i]),
                          j(e),
                          k(e) &&
                            ((o += e._pf.charsLeftOver),
                            (o += 10 * e._pf.unusedTokens.length),
                            (e._pf.score = o),
                            (null == r || r > o) && ((r = o), (n = e)));
                      p(t, n || e);
                    })(t)
                  : j(t)
                : W(t),
              new h(t));
        }
        function V(t, e) {
          var n;
          return "string" == typeof e &&
            "number" != typeof (e = t.lang().monthsParse(e))
            ? t
            : ((n = Math.min(t.date(), D(t.year(), e))),
              t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n),
              t);
        }
        function G(t, e) {
          return t._d["get" + (t._isUTC ? "UTC" : "") + e]();
        }
        function J(t, e, n) {
          return "Month" === e
            ? V(t, n)
            : t._d["set" + (t._isUTC ? "UTC" : "") + e](n);
        }
        function K(t, e) {
          return function (n) {
            return null != n
              ? (J(this, t, n), X.updateOffset(this, e), this)
              : G(this, t);
          };
        }
        function $(t) {
          X.duration.fn[t] = function () {
            return this._data[t];
          };
        }
        function Z(t, e) {
          X.duration.fn["as" + t] = function () {
            return +this / e;
          };
        }
        for (
          var X,
            Q,
            tt,
            et = void 0 !== r ? r : this,
            nt = Math.round,
            rt = 0,
            it = 1,
            ot = 2,
            at = 3,
            st = 4,
            ut = 5,
            ct = 6,
            lt = {},
            ht = {
              _isAMomentObject: null,
              _i: null,
              _f: null,
              _l: null,
              _strict: null,
              _isUTC: null,
              _offset: null,
              _pf: null,
              _lang: null,
            },
            dt = t.exports,
            pt = /^\/?Date\((\-?\d+)/i,
            ft = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
            gt = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,
            mt = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,
            vt = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,
            yt = /\d\d?/,
            bt = /\d{1,3}/,
            wt = /\d{1,4}/,
            At = /[+\-]?\d{1,6}/,
            Ct = /\d+/,
            Dt = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
            xt = /Z|[\+\-]\d\d:?\d\d/gi,
            St = /T/i,
            Et = /[\+\-]?\d+(\.\d{1,3})?/,
            _t = /\d{1,2}/,
            kt = /\d/,
            Tt = /\d\d/,
            Rt = /\d{3}/,
            Lt = /\d{4}/,
            Mt = /[+-]?\d{6}/,
            Ot = /[+-]?\d+/,
            Nt = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            Pt = [
              ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
              ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
              ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
              ["GGGG-[W]WW", /\d{4}-W\d{2}/],
              ["YYYY-DDD", /\d{4}-\d{3}/],
            ],
            It = [
              ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
              ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
              ["HH:mm", /(T| )\d\d:\d\d/],
              ["HH", /(T| )\d\d/],
            ],
            Ft = /([\+\-]|\d\d)/gi,
            Bt =
              ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"),
              {
                Milliseconds: 1,
                Seconds: 1e3,
                Minutes: 6e4,
                Hours: 36e5,
                Days: 864e5,
                Months: 2592e6,
                Years: 31536e6,
              }),
            jt = {
              ms: "millisecond",
              s: "second",
              m: "minute",
              h: "hour",
              d: "day",
              D: "date",
              w: "week",
              W: "isoWeek",
              M: "month",
              Q: "quarter",
              y: "year",
              DDD: "dayOfYear",
              e: "weekday",
              E: "isoWeekday",
              gg: "weekYear",
              GG: "isoWeekYear",
            },
            Wt = {
              dayofyear: "dayOfYear",
              isoweekday: "isoWeekday",
              isoweek: "isoWeek",
              weekyear: "weekYear",
              isoweekyear: "isoWeekYear",
            },
            Ht = {},
            qt = "DDD w W M D d".split(" "),
            zt = "M D H h m s w W".split(" "),
            Ut = {
              M: function () {
                return this.month() + 1;
              },
              MMM: function (t) {
                return this.lang().monthsShort(this, t);
              },
              MMMM: function (t) {
                return this.lang().months(this, t);
              },
              D: function () {
                return this.date();
              },
              DDD: function () {
                return this.dayOfYear();
              },
              d: function () {
                return this.day();
              },
              dd: function (t) {
                return this.lang().weekdaysMin(this, t);
              },
              ddd: function (t) {
                return this.lang().weekdaysShort(this, t);
              },
              dddd: function (t) {
                return this.lang().weekdays(this, t);
              },
              w: function () {
                return this.week();
              },
              W: function () {
                return this.isoWeek();
              },
              YY: function () {
                return g(this.year() % 100, 2);
              },
              YYYY: function () {
                return g(this.year(), 4);
              },
              YYYYY: function () {
                return g(this.year(), 5);
              },
              YYYYYY: function () {
                var t = this.year();
                return (t >= 0 ? "+" : "-") + g(Math.abs(t), 6);
              },
              gg: function () {
                return g(this.weekYear() % 100, 2);
              },
              gggg: function () {
                return g(this.weekYear(), 4);
              },
              ggggg: function () {
                return g(this.weekYear(), 5);
              },
              GG: function () {
                return g(this.isoWeekYear() % 100, 2);
              },
              GGGG: function () {
                return g(this.isoWeekYear(), 4);
              },
              GGGGG: function () {
                return g(this.isoWeekYear(), 5);
              },
              e: function () {
                return this.weekday();
              },
              E: function () {
                return this.isoWeekday();
              },
              a: function () {
                return this.lang().meridiem(this.hours(), this.minutes(), !0);
              },
              A: function () {
                return this.lang().meridiem(this.hours(), this.minutes(), !1);
              },
              H: function () {
                return this.hours();
              },
              h: function () {
                return this.hours() % 12 || 12;
              },
              m: function () {
                return this.minutes();
              },
              s: function () {
                return this.seconds();
              },
              S: function () {
                return C(this.milliseconds() / 100);
              },
              SS: function () {
                return g(C(this.milliseconds() / 10), 2);
              },
              SSS: function () {
                return g(this.milliseconds(), 3);
              },
              SSSS: function () {
                return g(this.milliseconds(), 3);
              },
              Z: function () {
                var t = -this.zone(),
                  e = "+";
                return (
                  0 > t && ((t = -t), (e = "-")),
                  e + g(C(t / 60), 2) + ":" + g(C(t) % 60, 2)
                );
              },
              ZZ: function () {
                var t = -this.zone(),
                  e = "+";
                return (
                  0 > t && ((t = -t), (e = "-")),
                  e + g(C(t / 60), 2) + g(C(t) % 60, 2)
                );
              },
              z: function () {
                return this.zoneAbbr();
              },
              zz: function () {
                return this.zoneName();
              },
              X: function () {
                return this.unix();
              },
              Q: function () {
                return this.quarter();
              },
            },
            Yt = [
              "months",
              "monthsShort",
              "weekdays",
              "weekdaysShort",
              "weekdaysMin",
            ];
          qt.length;

        )
          (tt = qt.pop()), (Ut[tt + "o"] = c(Ut[tt], tt));
        for (; zt.length; ) (tt = zt.pop()), (Ut[tt + tt] = u(Ut[tt], 2));
        for (
          Ut.DDDD = u(Ut.DDD, 3),
            p(l.prototype, {
              set: function (t) {
                var e, n;
                for (n in t)
                  "function" == typeof (e = t[n])
                    ? (this[n] = e)
                    : (this["_" + n] = e);
              },
              _months: "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
              ),
              months: function (t) {
                return this._months[t.month()];
              },
              _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
                "_"
              ),
              monthsShort: function (t) {
                return this._monthsShort[t.month()];
              },
              monthsParse: function (t) {
                var e, n, r;
                for (
                  this._monthsParse || (this._monthsParse = []), e = 0;
                  12 > e;
                  e++
                )
                  if (
                    (this._monthsParse[e] ||
                      ((n = X.utc([2e3, e])),
                      (r =
                        "^" +
                        this.months(n, "") +
                        "|^" +
                        this.monthsShort(n, "")),
                      (this._monthsParse[e] = new RegExp(
                        r.replace(".", ""),
                        "i"
                      ))),
                    this._monthsParse[e].test(t))
                  )
                    return e;
              },
              _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                "_"
              ),
              weekdays: function (t) {
                return this._weekdays[t.day()];
              },
              _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
              weekdaysShort: function (t) {
                return this._weekdaysShort[t.day()];
              },
              _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
              weekdaysMin: function (t) {
                return this._weekdaysMin[t.day()];
              },
              weekdaysParse: function (t) {
                var e, n, r;
                for (
                  this._weekdaysParse || (this._weekdaysParse = []), e = 0;
                  7 > e;
                  e++
                )
                  if (
                    (this._weekdaysParse[e] ||
                      ((n = X([2e3, 1]).day(e)),
                      (r =
                        "^" +
                        this.weekdays(n, "") +
                        "|^" +
                        this.weekdaysShort(n, "") +
                        "|^" +
                        this.weekdaysMin(n, "")),
                      (this._weekdaysParse[e] = new RegExp(
                        r.replace(".", ""),
                        "i"
                      ))),
                    this._weekdaysParse[e].test(t))
                  )
                    return e;
              },
              _longDateFormat: {
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D YYYY",
                LLL: "MMMM D YYYY LT",
                LLLL: "dddd, MMMM D YYYY LT",
              },
              longDateFormat: function (t) {
                var e = this._longDateFormat[t];
                return (
                  !e &&
                    this._longDateFormat[t.toUpperCase()] &&
                    ((e = this._longDateFormat[t.toUpperCase()].replace(
                      /MMMM|MM|DD|dddd/g,
                      function (t) {
                        return t.slice(1);
                      }
                    )),
                    (this._longDateFormat[t] = e)),
                  e
                );
              },
              isPM: function (t) {
                return "p" === (t + "").toLowerCase().charAt(0);
              },
              _meridiemParse: /[ap]\.?m?\.?/i,
              meridiem: function (t, e, n) {
                return t > 11 ? (n ? "pm" : "PM") : n ? "am" : "AM";
              },
              _calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L",
              },
              calendar: function (t, e) {
                var n = this._calendar[t];
                return "function" == typeof n ? n.apply(e) : n;
              },
              _relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years",
              },
              relativeTime: function (t, e, n, r) {
                var i = this._relativeTime[n];
                return "function" == typeof i
                  ? i(t, e, n, r)
                  : i.replace(/%d/i, t);
              },
              pastFuture: function (t, e) {
                var n = this._relativeTime[t > 0 ? "future" : "past"];
                return "function" == typeof n ? n(e) : n.replace(/%s/i, e);
              },
              ordinal: function (t) {
                return this._ordinal.replace("%d", t);
              },
              _ordinal: "%d",
              preparse: function (t) {
                return t;
              },
              postformat: function (t) {
                return t;
              },
              week: function (t) {
                return z(t, this._week.dow, this._week.doy).week;
              },
              _week: { dow: 0, doy: 6 },
              _invalidDate: "Invalid date",
              invalidDate: function () {
                return this._invalidDate;
              },
            }),
            (X = function (t, e, n, r) {
              var i;
              return (
                "boolean" == typeof n && ((r = n), (n = a)),
                ((i = {})._isAMomentObject = !0),
                (i._i = t),
                (i._f = e),
                (i._l = n),
                (i._strict = r),
                (i._isUTC = !1),
                (i._pf = {
                  empty: !1,
                  unusedTokens: [],
                  unusedInput: [],
                  overflow: -2,
                  charsLeftOver: 0,
                  nullInput: !1,
                  invalidMonth: null,
                  invalidFormat: !1,
                  userInvalidated: !1,
                  iso: !1,
                }),
                Y(i)
              );
            }).suppressDeprecationWarnings = !1,
            X.createFromInputFallback = s(
              "moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",
              function (t) {
                t._d = new Date(t._i);
              }
            ),
            X.utc = function (t, e, n, r) {
              var i;
              return (
                "boolean" == typeof n && ((r = n), (n = a)),
                ((i = {})._isAMomentObject = !0),
                (i._useUTC = !0),
                (i._isUTC = !0),
                (i._l = n),
                (i._i = t),
                (i._f = e),
                (i._strict = r),
                (i._pf = {
                  empty: !1,
                  unusedTokens: [],
                  unusedInput: [],
                  overflow: -2,
                  charsLeftOver: 0,
                  nullInput: !1,
                  invalidMonth: null,
                  invalidFormat: !1,
                  userInvalidated: !1,
                  iso: !1,
                }),
                Y(i).utc()
              );
            },
            X.unix = function (t) {
              return X(1e3 * t);
            },
            X.duration = function (t, e) {
              var n,
                r,
                i,
                o = t,
                a = null;
              return (
                X.isDuration(t)
                  ? (o = { ms: t._milliseconds, d: t._days, M: t._months })
                  : "number" == typeof t
                  ? ((o = {}), e ? (o[e] = t) : (o.milliseconds = t))
                  : (a = ft.exec(t))
                  ? ((n = "-" === a[1] ? -1 : 1),
                    (o = {
                      y: 0,
                      d: C(a[ot]) * n,
                      h: C(a[at]) * n,
                      m: C(a[st]) * n,
                      s: C(a[ut]) * n,
                      ms: C(a[ct]) * n,
                    }))
                  : (a = gt.exec(t)) &&
                    ((n = "-" === a[1] ? -1 : 1),
                    (o = {
                      y: (i = function (t) {
                        var e = t && parseFloat(t.replace(",", "."));
                        return (isNaN(e) ? 0 : e) * n;
                      })(a[2]),
                      M: i(a[3]),
                      d: i(a[4]),
                      h: i(a[5]),
                      m: i(a[6]),
                      s: i(a[7]),
                      w: i(a[8]),
                    })),
                (r = new d(o)),
                X.isDuration(t) &&
                  t.hasOwnProperty("_lang") &&
                  (r._lang = t._lang),
                r
              );
            },
            X.version = "2.6.0",
            X.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ",
            X.momentProperties = ht,
            X.updateOffset = function () {},
            X.lang = function (t, e) {
              return t
                ? (e
                    ? (function (t, e) {
                        (e.abbr = t),
                          lt[t] || (lt[t] = new l()),
                          lt[t].set(e),
                          lt[t];
                      })(T(t), e)
                    : null === e
                    ? ((function (t) {
                        delete lt[t];
                      })(t),
                      (t = "en"))
                    : lt[t] || L(t),
                  (X.duration.fn._lang = X.fn._lang = L(t))._abbr)
                : X.fn._lang._abbr;
            },
            X.langData = function (t) {
              return t && t._lang && t._lang._abbr && (t = t._lang._abbr), L(t);
            },
            X.isMoment = function (t) {
              return (
                t instanceof h ||
                (null != t && t.hasOwnProperty("_isAMomentObject"))
              );
            },
            X.isDuration = function (t) {
              return t instanceof d;
            },
            tt = Yt.length - 1;
          tt >= 0;
          --tt
        )
          A(Yt[tt]);
        for (tt in ((X.normalizeUnits = function (t) {
          return b(t);
        }),
        (X.invalid = function (t) {
          var e = X.utc(NaN);
          return null != t ? p(e._pf, t) : (e._pf.userInvalidated = !0), e;
        }),
        (X.parseZone = function () {
          return X.apply(null, arguments).parseZone();
        }),
        (X.parseTwoDigitYear = function (t) {
          return C(t) + (C(t) > 68 ? 1900 : 2e3);
        }),
        p((X.fn = h.prototype), {
          clone: function () {
            return X(this);
          },
          valueOf: function () {
            return +this._d + 6e4 * (this._offset || 0);
          },
          unix: function () {
            return Math.floor(+this / 1e3);
          },
          toString: function () {
            return this.clone()
              .lang("en")
              .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
          },
          toDate: function () {
            return this._offset ? new Date(+this) : this._d;
          },
          toISOString: function () {
            var t = X(this).utc();
            return 0 < t.year() && t.year() <= 9999
              ? O(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
              : O(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
          },
          toArray: function () {
            var t = this;
            return [
              t.year(),
              t.month(),
              t.date(),
              t.hours(),
              t.minutes(),
              t.seconds(),
              t.milliseconds(),
            ];
          },
          isValid: function () {
            return k(this);
          },
          isDSTShifted: function () {
            return (
              !!this._a &&
              this.isValid() &&
              y(
                this._a,
                (this._isUTC ? X.utc(this._a) : X(this._a)).toArray()
              ) > 0
            );
          },
          parsingFlags: function () {
            return p({}, this._pf);
          },
          invalidAt: function () {
            return this._pf.overflow;
          },
          utc: function () {
            return this.zone(0);
          },
          local: function () {
            return this.zone(0), (this._isUTC = !1), this;
          },
          format: function (t) {
            var e = O(this, t || X.defaultFormat);
            return this.lang().postformat(e);
          },
          add: function (t, e) {
            return (
              m(
                this,
                "string" == typeof t ? X.duration(+e, t) : X.duration(t, e),
                1
              ),
              this
            );
          },
          subtract: function (t, e) {
            return (
              m(
                this,
                "string" == typeof t ? X.duration(+e, t) : X.duration(t, e),
                -1
              ),
              this
            );
          },
          diff: function (t, e, n) {
            var r,
              i,
              o = R(t, this),
              a = 6e4 * (this.zone() - o.zone());
            return (
              "year" === (e = b(e)) || "month" === e
                ? ((r = 432e5 * (this.daysInMonth() + o.daysInMonth())),
                  (i =
                    12 * (this.year() - o.year()) + (this.month() - o.month())),
                  (i +=
                    (this -
                      X(this).startOf("month") -
                      (o - X(o).startOf("month"))) /
                    r),
                  (i -=
                    (6e4 *
                      (this.zone() -
                        X(this).startOf("month").zone() -
                        (o.zone() - X(o).startOf("month").zone()))) /
                    r),
                  "year" === e && (i /= 12))
                : ((r = this - o),
                  (i =
                    "second" === e
                      ? r / 1e3
                      : "minute" === e
                      ? r / 6e4
                      : "hour" === e
                      ? r / 36e5
                      : "day" === e
                      ? (r - a) / 864e5
                      : "week" === e
                      ? (r - a) / 6048e5
                      : r)),
              n ? i : f(i)
            );
          },
          from: function (t, e) {
            return X.duration(this.diff(t))
              .lang(this.lang()._abbr)
              .humanize(!e);
          },
          fromNow: function (t) {
            return this.from(X(), t);
          },
          calendar: function () {
            var t = R(X(), this).startOf("day"),
              e = this.diff(t, "days", !0),
              n =
                -6 > e
                  ? "sameElse"
                  : -1 > e
                  ? "lastWeek"
                  : 0 > e
                  ? "lastDay"
                  : 1 > e
                  ? "sameDay"
                  : 2 > e
                  ? "nextDay"
                  : 7 > e
                  ? "nextWeek"
                  : "sameElse";
            return this.format(this.lang().calendar(n, this));
          },
          isLeapYear: function () {
            return E(this.year());
          },
          isDST: function () {
            return (
              this.zone() < this.clone().month(0).zone() ||
              this.zone() < this.clone().month(5).zone()
            );
          },
          day: function (t) {
            var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != t
              ? ((t = q(t, this.lang())), this.add({ d: t - e }))
              : e;
          },
          month: K("Month", !0),
          startOf: function (t) {
            switch ((t = b(t))) {
              case "year":
                this.month(0);
              case "quarter":
              case "month":
                this.date(1);
              case "week":
              case "isoWeek":
              case "day":
                this.hours(0);
              case "hour":
                this.minutes(0);
              case "minute":
                this.seconds(0);
              case "second":
                this.milliseconds(0);
            }
            return (
              "week" === t
                ? this.weekday(0)
                : "isoWeek" === t && this.isoWeekday(1),
              "quarter" === t && this.month(3 * Math.floor(this.month() / 3)),
              this
            );
          },
          endOf: function (t) {
            return (
              (t = b(t)),
              this.startOf(t)
                .add("isoWeek" === t ? "week" : t, 1)
                .subtract("ms", 1)
            );
          },
          isAfter: function (t, e) {
            return (
              (e = void 0 !== e ? e : "millisecond"),
              +this.clone().startOf(e) > +X(t).startOf(e)
            );
          },
          isBefore: function (t, e) {
            return (
              (e = void 0 !== e ? e : "millisecond"),
              +this.clone().startOf(e) < +X(t).startOf(e)
            );
          },
          isSame: function (t, e) {
            return (
              (e = e || "ms"),
              +this.clone().startOf(e) == +R(t, this).startOf(e)
            );
          },
          min: function (t) {
            return this > (t = X.apply(null, arguments)) ? this : t;
          },
          max: function (t) {
            return (t = X.apply(null, arguments)) > this ? this : t;
          },
          zone: function (t, e) {
            var n = this._offset || 0;
            return null == t
              ? this._isUTC
                ? n
                : this._d.getTimezoneOffset()
              : ("string" == typeof t && (t = I(t)),
                Math.abs(t) < 16 && (t *= 60),
                (this._offset = t),
                (this._isUTC = !0),
                n !== t &&
                  (!e || this._changeInProgress
                    ? m(this, X.duration(n - t, "m"), 1, !1)
                    : this._changeInProgress ||
                      ((this._changeInProgress = !0),
                      X.updateOffset(this, !0),
                      (this._changeInProgress = null))),
                this);
          },
          zoneAbbr: function () {
            return this._isUTC ? "UTC" : "";
          },
          zoneName: function () {
            return this._isUTC ? "Coordinated Universal Time" : "";
          },
          parseZone: function () {
            return (
              this._tzm
                ? this.zone(this._tzm)
                : "string" == typeof this._i && this.zone(this._i),
              this
            );
          },
          hasAlignedHourOffset: function (t) {
            return (t = t ? X(t).zone() : 0), (this.zone() - t) % 60 == 0;
          },
          daysInMonth: function () {
            return D(this.year(), this.month());
          },
          dayOfYear: function (t) {
            var e =
              nt((X(this).startOf("day") - X(this).startOf("year")) / 864e5) +
              1;
            return null == t ? e : this.add("d", t - e);
          },
          quarter: function (t) {
            return null == t
              ? Math.ceil((this.month() + 1) / 3)
              : this.month(3 * (t - 1) + (this.month() % 3));
          },
          weekYear: function (t) {
            var e = z(this, this.lang()._week.dow, this.lang()._week.doy).year;
            return null == t ? e : this.add("y", t - e);
          },
          isoWeekYear: function (t) {
            var e = z(this, 1, 4).year;
            return null == t ? e : this.add("y", t - e);
          },
          week: function (t) {
            var e = this.lang().week(this);
            return null == t ? e : this.add("d", 7 * (t - e));
          },
          isoWeek: function (t) {
            var e = z(this, 1, 4).week;
            return null == t ? e : this.add("d", 7 * (t - e));
          },
          weekday: function (t) {
            var e = (this.day() + 7 - this.lang()._week.dow) % 7;
            return null == t ? e : this.add("d", t - e);
          },
          isoWeekday: function (t) {
            return null == t
              ? this.day() || 7
              : this.day(this.day() % 7 ? t : t - 7);
          },
          isoWeeksInYear: function () {
            return x(this.year(), 1, 4);
          },
          weeksInYear: function () {
            var t = this._lang._week;
            return x(this.year(), t.dow, t.doy);
          },
          get: function (t) {
            return this[(t = b(t))]();
          },
          set: function (t, e) {
            return "function" == typeof this[(t = b(t))] && this[t](e), this;
          },
          lang: function (t) {
            return t === a ? this._lang : ((this._lang = L(t)), this);
          },
        }),
        (X.fn.millisecond = X.fn.milliseconds = K("Milliseconds", !1)),
        (X.fn.second = X.fn.seconds = K("Seconds", !1)),
        (X.fn.minute = X.fn.minutes = K("Minutes", !1)),
        (X.fn.hour = X.fn.hours = K("Hours", !0)),
        (X.fn.date = K("Date", !0)),
        (X.fn.dates = s(
          "dates accessor is deprecated. Use date instead.",
          K("Date", !0)
        )),
        (X.fn.year = K("FullYear", !0)),
        (X.fn.years = s(
          "years accessor is deprecated. Use year instead.",
          K("FullYear", !0)
        )),
        (X.fn.days = X.fn.day),
        (X.fn.months = X.fn.month),
        (X.fn.weeks = X.fn.week),
        (X.fn.isoWeeks = X.fn.isoWeek),
        (X.fn.quarters = X.fn.quarter),
        (X.fn.toJSON = X.fn.toISOString),
        p((X.duration.fn = d.prototype), {
          _bubble: function () {
            var t,
              e,
              n,
              r,
              i = this._milliseconds,
              o = this._days,
              a = this._months,
              s = this._data;
            (s.milliseconds = i % 1e3),
              (t = f(i / 1e3)),
              (s.seconds = t % 60),
              (e = f(t / 60)),
              (s.minutes = e % 60),
              (n = f(e / 60)),
              (s.hours = n % 24),
              (o += f(n / 24)),
              (s.days = o % 30),
              (a += f(o / 30)),
              (s.months = a % 12),
              (r = f(a / 12)),
              (s.years = r);
          },
          weeks: function () {
            return f(this.days() / 7);
          },
          valueOf: function () {
            return (
              this._milliseconds +
              864e5 * this._days +
              (this._months % 12) * 2592e6 +
              31536e6 * C(this._months / 12)
            );
          },
          humanize: function (t) {
            var e = +this,
              n = (function (t, e, n) {
                var r = nt(Math.abs(t) / 1e3),
                  i = nt(r / 60),
                  o = nt(i / 60),
                  a = nt(o / 24),
                  s = nt(a / 365),
                  u = (45 > r && ["s", r]) ||
                    (1 === i && ["m"]) ||
                    (45 > i && ["mm", i]) ||
                    (1 === o && ["h"]) ||
                    (22 > o && ["hh", o]) ||
                    (1 === a && ["d"]) ||
                    (25 >= a && ["dd", a]) ||
                    (45 >= a && ["M"]) ||
                    (345 > a && ["MM", nt(a / 30)]) ||
                    (1 === s && ["y"]) || ["yy", s];
                return (
                  (u[2] = e),
                  (u[3] = t > 0),
                  (u[4] = n),
                  function (t, e, n, r, i) {
                    return i.relativeTime(e || 1, !!n, t, r);
                  }.apply({}, u)
                );
              })(e, !t, this.lang());
            return (
              t && (n = this.lang().pastFuture(e, n)), this.lang().postformat(n)
            );
          },
          add: function (t, e) {
            var n = X.duration(t, e);
            return (
              (this._milliseconds += n._milliseconds),
              (this._days += n._days),
              (this._months += n._months),
              this._bubble(),
              this
            );
          },
          subtract: function (t, e) {
            var n = X.duration(t, e);
            return (
              (this._milliseconds -= n._milliseconds),
              (this._days -= n._days),
              (this._months -= n._months),
              this._bubble(),
              this
            );
          },
          get: function (t) {
            return this[(t = b(t)).toLowerCase() + "s"]();
          },
          as: function (t) {
            return this[
              "as" + (t = b(t)).charAt(0).toUpperCase() + t.slice(1) + "s"
            ]();
          },
          lang: X.fn.lang,
          toIsoString: function () {
            var t = Math.abs(this.years()),
              e = Math.abs(this.months()),
              n = Math.abs(this.days()),
              r = Math.abs(this.hours()),
              i = Math.abs(this.minutes()),
              o = Math.abs(this.seconds() + this.milliseconds() / 1e3);
            return this.asSeconds()
              ? (this.asSeconds() < 0 ? "-" : "") +
                  "P" +
                  (t ? t + "Y" : "") +
                  (e ? e + "M" : "") +
                  (n ? n + "D" : "") +
                  (r || i || o ? "T" : "") +
                  (r ? r + "H" : "") +
                  (i ? i + "M" : "") +
                  (o ? o + "S" : "")
              : "P0D";
          },
        }),
        Bt))
          Bt.hasOwnProperty(tt) && (Z(tt, Bt[tt]), $(tt.toLowerCase()));
        Z("Weeks", 6048e5),
          (X.duration.fn.asMonths = function () {
            return (
              (+this - 31536e6 * this.years()) / 2592e6 + 12 * this.years()
            );
          }),
          X.lang("en", {
            ordinal: function (t) {
              var e = t % 10;
              return (
                t +
                (1 === C((t % 100) / 10)
                  ? "th"
                  : 1 === e
                  ? "st"
                  : 2 === e
                  ? "nd"
                  : 3 === e
                  ? "rd"
                  : "th")
              );
            },
          }),
          dt
            ? (t.exports = X)
            : (void 0 !==
                (i = function (t, e, n) {
                  return (
                    n.config &&
                      n.config() &&
                      !0 === n.config().noGlobal &&
                      (et.moment = Q),
                    X
                  );
                }.call(e, n, e, t)) && (t.exports = i),
              (function (t) {
                "undefined" == typeof ender &&
                  ((Q = et.moment),
                  (et.moment = t
                    ? s(
                        "Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.",
                        X
                      )
                    : X));
              })(!0));
      }.call(this));
    }.call(this, n(1)));
  },
  18: function (t, e, n) {
    "use strict";
    n.r(e);
    n(5), n(6), n(7), n(12), n(13), n(3), n(15);
    var r = n(4),
      i = n.n(r);
    var o,
      a,
      s = n(0),
      u = n.n(s);
    n(16);
    (o = u.a),
      (a = function (t, e) {
        var n = this;
        (n.options = t), (n.$element = o(e));
        var r = n.$element.val();
        n.$element.removeAttr("multiple"),
          (n.select2 = n.$element
            .select2({
              dropdownCssClass: "checkbox",
              allowClear: !1,
              minimumResultsForSearch: t.minimumResultsForSearch,
              placeholder: t.placeholder,
              closeOnSelect: !1,
              templateSelection: function () {
                return n.options.templateSelection(
                  n.$element.val() || [],
                  o("option", n.$element).length
                );
              },
              templateResult: function (t) {
                return void 0 !== t.loading
                  ? t.text
                  : o("<div>").text(t.text).addClass(n.options.wrapClass);
              },
              matcher: function (t, e) {
                var r = (0, o.fn.select2.defaults.defaults.matcher)(t, e);
                return (
                  r &&
                    n.options.searchMatchOptGroups &&
                    e.children &&
                    r.children &&
                    e.children.length != r.children.length &&
                    (r.children = e.children),
                  r
                );
              },
            })
            .data("select2")),
          n.select2.$results.off("mouseup").on(
            "mouseup",
            ".select2-results__option[aria-selected]",
            (function (t) {
              return function (e) {
                var n = o(this),
                  r = o.fn.select2.amd
                    .require("select2/utils")
                    .GetData(this, "data");
                "true" !== n.attr("aria-selected")
                  ? t.trigger("select", { originalEvent: e, data: r })
                  : t.trigger("unselect", { originalEvent: e, data: r });
              };
            })(n.select2)
          ),
          n.$element
            .attr("multiple", "multiple")
            .val(r)
            .trigger("change.select2");
      }),
      o.fn.extend({
        select2MultiCheckboxes: function () {
          var t = o.extend(
            {
              placeholder: "Choose elements",
              templateSelection: function (t, e) {
                return t.length + " > " + e + " total";
              },
              wrapClass: "wrap",
              minimumResultsForSearch: -1,
              searchMatchOptGroups: !0,
            },
            arguments[0]
          );
          this.each(function () {
            new a(t, this);
          });
        },
      });
    n(17);
    function c(t) {
      return (c =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    /*!
     * FullCalendar v1.6.4
     * Docs & License: http://arshaw.com/fullcalendar/
     * (c) 2013 Adam Shaw
     */ function l() {
      document.querySelectorAll(".delete__input--btn").forEach(function (t, e) {
        t.addEventListener("click", function () {
          t.closest(".to-erase").remove();
        });
      });
    }
    /*!
     * FullCalendar v1.6.4
     * Docs & License: http://arshaw.com/fullcalendar/
     * (c) 2013 Adam Shaw
     */
    !(function (t, e) {
      var n = {
          defaultView: "month",
          aspectRatio: 1.35,
          header: { left: "title", center: "", right: "today prev,next" },
          weekends: !0,
          weekNumbers: !1,
          weekNumberCalculation: "iso",
          weekNumberTitle: "W",
          allDayDefault: !0,
          ignoreTimezone: !0,
          lazyFetching: !0,
          startParam: "start",
          endParam: "end",
          titleFormat: {
            month: "MMMM yyyy",
            week: "MMM d[ yyyy]{ '&#8212;'[ MMM] d yyyy}",
            day: "dddd, MMM d, yyyy",
          },
          columnFormat: { month: "ddd", week: "ddd M/d", day: "dddd M/d" },
          timeFormat: { "": "h(:mm)t" },
          isRTL: !1,
          firstDay: 0,
          monthNames: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          monthNamesShort: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          dayNames: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          buttonText: {
            prev: "<span class='fc-text-arrow'>&lsaquo;</span>",
            next: "<span class='fc-text-arrow'>&rsaquo;</span>",
            prevYear: "<span class='fc-text-arrow'>&laquo;</span>",
            nextYear: "<span class='fc-text-arrow'>&raquo;</span>",
            today: "today",
            month: "month",
            week: "week",
            day: "day",
          },
          theme: !1,
          buttonIcons: { prev: "circle-triangle-w", next: "circle-triangle-e" },
          unselectAuto: !0,
          dropAccept: "*",
          handleWindowResize: !0,
        },
        r = {
          header: { left: "next,prev today", center: "", right: "title" },
          buttonText: {
            prev: "<span class='fc-text-arrow'>&rsaquo;</span>",
            next: "<span class='fc-text-arrow'>&lsaquo;</span>",
            prevYear: "<span class='fc-text-arrow'>&raquo;</span>",
            nextYear: "<span class='fc-text-arrow'>&laquo;</span>",
          },
          buttonIcons: { prev: "circle-triangle-e", next: "circle-triangle-w" },
        },
        i = (t.fullCalendar = { version: "1.6.4" }),
        o = (i.views = {});
      t.fn.fullCalendar = function (i) {
        if ("string" == typeof i) {
          var o,
            a = Array.prototype.slice.call(arguments, 1);
          return (
            this.each(function () {
              var n = t.data(this, "fullCalendar");
              if (n && t.isFunction(n[i])) {
                var r = n[i].apply(n, a);
                o === e && (o = r),
                  "destroy" == i && t.removeData(this, "fullCalendar");
              }
            }),
            o !== e ? o : this
          );
        }
        var u = (i = i || {}).eventSources || [];
        return (
          delete i.eventSources,
          i.events && (u.push(i.events), delete i.events),
          (i = t.extend(
            !0,
            {},
            n,
            i.isRTL || (i.isRTL === e && n.isRTL) ? r : {},
            i
          )),
          this.each(function (e, n) {
            var r = t(n),
              o = new s(r, i, u);
            r.data("fullCalendar", o), o.render();
          }),
          this
        );
      };
      var a = function (e) {
        t.extend(!0, n, e);
      };
      t.fullCalendar.setDefaults = function (t) {
        a(t);
      };
      function s(n, r, a) {
        var s = this;
        (s.options = r),
          (s.render = function (e) {
            f
              ? P() && (q(), W(e))
              : (function () {
                  r.theme ? "ui" : "fc",
                    n.addClass("fc"),
                    r.isRTL ? n.addClass("fc-rtl") : n.addClass("fc-ltr");
                  r.theme && n.addClass("ui-widget");
                  (f = t(
                    "<div class='fc-content' style='position:relative'/>"
                  ).prependTo(n)),
                    (d = new u(s, r)),
                    (p = d.render()) && n.prepend(p);
                  B(r.defaultView), r.handleWindowResize && t(window).resize(U);
                  I() || N();
                })();
          }),
          (s.destroy = function () {
            g && (tt("viewDestroy", g, g, g.element), g.triggerEventDestroy());
            t(window).unbind("resize", U),
              d.destroy(),
              f.remove(),
              n.removeClass("fc fc-rtl ui-widget");
          }),
          (s.refetchEvents = function () {
            K(), $();
          }),
          (s.reportEvents = function (t) {
            (O = t), J();
          }),
          (s.reportEventChange = function (t) {
            Y(t);
          }),
          (s.rerenderEvents = Y),
          (s.changeView = B),
          (s.select = function (t, n, r) {
            g.select(t, n, r === e || r);
          }),
          (s.unselect = Z),
          (s.prev = function () {
            j(-1);
          }),
          (s.next = function () {
            j(1);
          }),
          (s.prevYear = function () {
            m(M, -1), j();
          }),
          (s.nextYear = function () {
            m(M, 1), j();
          }),
          (s.today = function () {
            (M = new Date()), j();
          }),
          (s.gotoDate = function (t, e, n) {
            t instanceof Date ? (M = C(t)) : S(M, t, e, n);
            j();
          }),
          (s.incrementDate = function (t, n, r) {
            t !== e && m(M, t);
            n !== e && v(M, n);
            r !== e && y(M, r);
            j();
          }),
          (s.formatDate = function (t, e) {
            return T(t, e, r);
          }),
          (s.formatDates = function (t, e, n) {
            return R(t, e, n, r);
          }),
          (s.getDate = function () {
            return C(M);
          }),
          (s.getView = function () {
            return g;
          }),
          (s.option = function (t, n) {
            if (n === e) return r[t];
            ("height" != t && "contentHeight" != t && "aspectRatio" != t) ||
              ((r[t] = n), H());
          }),
          (s.trigger = tt),
          function (n, r) {
            var o = this;
            (o.isFetchNeeded = function (t, e) {
              return !a || t < a || e > s;
            }),
              (o.fetchEvents = function (t, e) {
                (a = t), (s = e), (b = []);
                var n = ++m,
                  r = g.length;
                v = r;
                for (var i = 0; i < r; i++) A(g[i], n);
              }),
              (o.addEventSource = function (t) {
                (t = D(t)) && (v++, A(t, m));
              }),
              (o.removeEventSource = function (e) {
                (g = t.grep(g, function (t) {
                  return !k(t, e);
                })),
                  (b = t.grep(b, function (t) {
                    return !k(t.source, e);
                  })),
                  p(b);
              }),
              (o.updateEvent = function (t) {
                var e,
                  n,
                  r = b.length,
                  i = d().defaultEventEnd,
                  o = t.start - t._start,
                  a = t.end ? t.end - (t._end || i(t)) : 0;
                for (e = 0; e < r; e++)
                  (n = b[e])._id == t._id &&
                    n != t &&
                    ((n.start = new Date(+n.start + o)),
                    t.end
                      ? n.end
                        ? (n.end = new Date(+n.end + a))
                        : (n.end = new Date(+i(n) + a))
                      : (n.end = null),
                    (n.title = t.title),
                    (n.url = t.url),
                    (n.allDay = t.allDay),
                    (n.className = t.className),
                    (n.editable = t.editable),
                    (n.color = t.color),
                    (n.backgroundColor = t.backgroundColor),
                    (n.borderColor = t.borderColor),
                    (n.textColor = t.textColor),
                    _(n));
                _(t), p(b);
              }),
              (o.renderEvent = function (t, e) {
                _(t),
                  t.source ||
                    (e && (f.events.push(t), (t.source = f)), b.push(t));
                p(b);
              }),
              (o.removeEvents = function (e) {
                if (e) {
                  if (!t.isFunction(e)) {
                    var n = e + "";
                    e = function (t) {
                      return t._id == n;
                    };
                  }
                  b = t.grep(b, e, !0);
                  for (var r = 0; r < g.length; r++)
                    t.isArray(g[r].events) &&
                      (g[r].events = t.grep(g[r].events, e, !0));
                } else {
                  b = [];
                  for (var r = 0; r < g.length; r++)
                    t.isArray(g[r].events) && (g[r].events = []);
                }
                p(b);
              }),
              (o.clientEvents = function (e) {
                if (t.isFunction(e)) return t.grep(b, e);
                if (e)
                  return (
                    (e += ""),
                    t.grep(b, function (t) {
                      return t._id == e;
                    })
                  );
                return b;
              }),
              (o.normalizeEvent = _);
            for (
              var a,
                s,
                u = o.trigger,
                d = o.getView,
                p = o.reportEvents,
                f = { events: [] },
                g = [f],
                m = 0,
                v = 0,
                y = 0,
                b = [],
                w = 0;
              w < r.length;
              w++
            )
              D(r[w]);
            function A(e, r) {
              !(function e(r, o) {
                var u;
                var h = i.sourceFetchers;
                var d;
                for (u = 0; u < h.length; u++) {
                  if (!0 === (d = h[u](r, a, s, o))) return;
                  if ("object" == c(d)) return void e(d, o);
                }
                var p = r.events;
                if (p)
                  t.isFunction(p)
                    ? (x(),
                      p(C(a), C(s), function (t) {
                        o(t), S();
                      }))
                    : t.isArray(p)
                    ? o(p)
                    : o();
                else {
                  var f = r.url;
                  if (f) {
                    var g,
                      m = r.success,
                      v = r.error,
                      y = r.complete;
                    g = t.isFunction(r.data) ? r.data() : r.data;
                    var b = t.extend({}, g || {}),
                      w = G(r.startParam, n.startParam),
                      A = G(r.endParam, n.endParam);
                    w && (b[w] = Math.round(+a / 1e3)),
                      A && (b[A] = Math.round(+s / 1e3)),
                      x(),
                      t.ajax(
                        t.extend({}, l, r, {
                          data: b,
                          success: function (e) {
                            e = e || [];
                            var n = V(m, this, arguments);
                            t.isArray(n) && (e = n), o(e);
                          },
                          error: function () {
                            V(v, this, arguments), o();
                          },
                          complete: function () {
                            V(y, this, arguments), S();
                          },
                        })
                      );
                  } else o();
                }
              })(e, function (i) {
                if (r == m) {
                  if (i) {
                    n.eventDataTransform &&
                      (i = t.map(i, n.eventDataTransform)),
                      e.eventDataTransform &&
                        (i = t.map(i, e.eventDataTransform));
                    for (var o = 0; o < i.length; o++)
                      (i[o].source = e), _(i[o]);
                    b = b.concat(i);
                  }
                  --v || p(b);
                }
              });
            }
            function D(e) {
              if (
                (t.isFunction(e) || t.isArray(e)
                  ? (e = { events: e })
                  : "string" == typeof e && (e = { url: e }),
                "object" == c(e))
              )
                return (
                  (function (t) {
                    t.className
                      ? "string" == typeof t.className &&
                        (t.className = t.className.split(/\s+/))
                      : (t.className = []);
                    for (var e = i.sourceNormalizers, n = 0; n < e.length; n++)
                      e[n](t);
                  })(e),
                  g.push(e),
                  e
                );
            }
            function x() {
              y++ || u("loading", null, !0, d());
            }
            function S() {
              --y || u("loading", null, !1, d());
            }
            function _(t) {
              var r = t.source || {},
                i = G(r.ignoreTimezone, n.ignoreTimezone);
              (t._id = t._id || (t.id === e ? "_fc" + h++ : t.id + "")),
                t.date && (t.start || (t.start = t.date), delete t.date),
                (t._start = C((t.start = E(t.start, i)))),
                (t.end = E(t.end, i)),
                t.end && t.end <= t.start && (t.end = null),
                (t._end = t.end ? C(t.end) : null),
                t.allDay === e &&
                  (t.allDay = G(r.allDayDefault, n.allDayDefault)),
                t.className
                  ? "string" == typeof t.className &&
                    (t.className = t.className.split(/\s+/))
                  : (t.className = []);
            }
            function k(t, e) {
              return t && e && T(t) == T(e);
            }
            function T(t) {
              return ("object" == c(t) ? t.events || t.url : "") || t;
            }
          }.call(s, r, a);
        var d,
          p,
          f,
          g,
          b,
          w,
          A,
          D = s.isFetchNeeded,
          x = s.fetchEvents,
          _ = n[0],
          k = 0,
          L = 0,
          M = new Date(),
          O = [];
        function N() {
          setTimeout(function () {
            !g.start && I() && j();
          }, 0);
        }
        function P() {
          return n.is(":visible");
        }
        function I() {
          return t("body").is(":visible");
        }
        function B(e) {
          (g && e == g.name) ||
            (function (e) {
              L++,
                g &&
                  (tt("viewDestroy", g, g, g.element),
                  Z(),
                  g.triggerEventDestroy(),
                  X(),
                  g.element.remove(),
                  d.deactivateButton(g.name));
              d.activateButton(e),
                (g = new o[e](
                  t(
                    "<div class='fc-view fc-view-" +
                      e +
                      "' style='position:relative'/>"
                  ).appendTo(f),
                  s
                )),
                j(),
                Q(),
                L--;
            })(e);
        }
        function j(t) {
          (!g.start || t || M < g.start || M >= g.end) && P() && W(t);
        }
        function W(t) {
          L++,
            g.start && (tt("viewDestroy", g, g, g.element), Z(), K()),
            X(),
            g.render(M, t || 0),
            z(),
            Q(),
            (g.afterRender || function () {})(),
            d.updateTitle(g.title),
            (function () {
              var t = new Date();
              t >= g.start && t < g.end
                ? d.disableButton("today")
                : d.enableButton("today");
            })(),
            tt("viewRender", g, g, g.element),
            g.trigger("viewDisplay", _),
            L--,
            !r.lazyFetching || D(g.visStart, g.visEnd) ? $() : J();
        }
        function H() {
          P() && (Z(), K(), q(), z(), J());
        }
        function q() {
          w = r.contentHeight
            ? r.contentHeight
            : r.height
            ? r.height - (p ? p.height() : 0) - F(f)
            : Math.round(f.width() / Math.max(r.aspectRatio, 0.5));
        }
        function z() {
          w === e && q(),
            L++,
            g.setHeight(w),
            g.setWidth(f.width()),
            L--,
            (b = n.outerWidth());
        }
        function U() {
          if (!L)
            if (g.start) {
              var t = ++k;
              setTimeout(function () {
                t == k &&
                  !L &&
                  P() &&
                  b != (b = n.outerWidth()) &&
                  (L++, H(), g.trigger("windowResize", _), L--);
              }, 200);
            } else N();
        }
        function Y(t) {
          K(), J(t);
        }
        function J(t) {
          P() &&
            (g.setEventData(O),
            g.renderEvents(O, t),
            g.trigger("eventAfterAllRender"));
        }
        function K() {
          g.triggerEventDestroy(), g.clearEvents(), g.clearEventData();
        }
        function $() {
          x(y(C(g.visStart), -90), y(C(g.visEnd), 90));
        }
        function Z() {
          g && g.unselect();
        }
        function X() {
          f.css({ width: "100%", height: f.height(), overflow: "hidden" });
        }
        function Q() {
          f.css({ width: "", height: "", overflow: "" });
        }
        function tt(t, e) {
          if (r[t])
            return r[t].apply(e || _, Array.prototype.slice.call(arguments, 2));
        }
        S(M, r.year, r.month, r.date),
          r.droppable &&
            t(document)
              .bind("dragstart", function (e, n) {
                var i = e.target,
                  o = t(i);
                if (!o.parents(".fc").length) {
                  var a = r.dropAccept;
                  (t.isFunction(a) ? a.call(i, o) : o.is(a)) &&
                    ((A = i), g.dragStart(A, e, n));
                }
              })
              .bind("dragstop", function (t, e) {
                A && (g.dragStop(A, t, e), (A = null));
              });
      }
      function u(e, n) {
        var r = this;
        (r.render = function () {
          if (((i = n.theme ? "ui" : "fc"), n.header))
            return (a = t(
              "<table class='fc-header' style='width:100%'/>"
            ).append(
              t("<tr/>")
                .append(s("left"))
                .append(s("center"))
                .append(s("right"))
            ));
        }),
          (r.destroy = function () {
            a.remove();
          }),
          (r.updateTitle = function (t) {
            a.find("h2").html(t);
          }),
          (r.activateButton = function (t) {
            a.find("span.fc-button-" + t).addClass(i + "-state-active");
          }),
          (r.deactivateButton = function (t) {
            a.find("span.fc-button-" + t).removeClass(i + "-state-active");
          }),
          (r.disableButton = function (t) {
            a.find("span.fc-button-" + t).addClass(i + "-state-disabled");
          }),
          (r.enableButton = function (t) {
            a.find("span.fc-button-" + t).removeClass(i + "-state-disabled");
          });
        var i,
          a = t([]);
        function s(r) {
          var a = t("<td class='fc-header-" + r + "'/>"),
            s = n.header[r];
          return (
            s &&
              t.each(s.split(" "), function (r) {
                var s;
                r > 0 && a.append("<span class='fc-header-space'/>"),
                  t.each(this.split(","), function (r, u) {
                    var c;
                    if ("title" == u)
                      a.append(
                        "<span class='fc-header-title'><h2>&nbsp;</h2></span>"
                      ),
                        s && s.addClass(i + "-corner-right"),
                        (s = null);
                    else if (
                      (e[u]
                        ? (c = e[u])
                        : o[u] &&
                          (c = function () {
                            d.removeClass(i + "-state-hover"), e.changeView(u);
                          }),
                      c)
                    ) {
                      var l = n.theme ? H(n.buttonIcons, u) : null,
                        h = H(n.buttonText, u),
                        d = t(
                          "<span class='fc-button fc-button-" +
                            u +
                            " " +
                            i +
                            "-state-default'>" +
                            (l
                              ? "<span class='fc-icon-wrap'><span class='ui-icon ui-icon-" +
                                l +
                                "'/></span>"
                              : h) +
                            "</span>"
                        )
                          .click(function () {
                            d.hasClass(i + "-state-disabled") || c();
                          })
                          .mousedown(function () {
                            d.not("." + i + "-state-active")
                              .not("." + i + "-state-disabled")
                              .addClass(i + "-state-down");
                          })
                          .mouseup(function () {
                            d.removeClass(i + "-state-down");
                          })
                          .hover(
                            function () {
                              d.not("." + i + "-state-active")
                                .not("." + i + "-state-disabled")
                                .addClass(i + "-state-hover");
                            },
                            function () {
                              d.removeClass(i + "-state-hover").removeClass(
                                i + "-state-down"
                              );
                            }
                          )
                          .appendTo(a);
                      z(d), s || d.addClass(i + "-corner-left"), (s = d);
                    }
                  }),
                  s && s.addClass(i + "-corner-right");
              }),
            a
          );
        }
      }
      (t.fullCalendar.applyLocale = function (t) {
        !(function (t) {
          a({
            isRTL: t.isRTL,
            firstDay: t.firstDay,
            monthNames: t.monthNames,
            monthNamesShort: t.monthNamesShort,
            dayNames: t.dayNames,
            dayNamesShort: t.dayNamesShort,
            buttonText: { today: t.currentText },
          });
        })(t);
      }),
        (t.fullCalendar.regional = {}),
        (i.sourceNormalizers = []),
        (i.sourceFetchers = []);
      var l = { dataType: "json", cache: !1 },
        h = 1;
      (i.addDays = y),
        (i.cloneDate = C),
        (i.parseDate = E),
        (i.parseISO8601 = _),
        (i.parseTime = k),
        (i.formatDate = T),
        (i.formatDates = R);
      var d = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
        p = 864e5,
        f = 36e5,
        g = 6e4;
      function m(t, e, n) {
        return t.setFullYear(t.getFullYear() + e), n || A(t), t;
      }
      function v(t, e, n) {
        if (+t) {
          var r = t.getMonth() + e,
            i = C(t);
          for (
            i.setDate(1), i.setMonth(r), t.setMonth(r), n || A(t);
            t.getMonth() != i.getMonth();

          )
            t.setDate(t.getDate() + (t < i ? 1 : -1));
        }
        return t;
      }
      function y(t, e, n) {
        if (+t) {
          var r = t.getDate() + e,
            i = C(t);
          i.setHours(9), i.setDate(r), t.setDate(r), n || A(t), b(t, i);
        }
        return t;
      }
      function b(t, e) {
        if (+t)
          for (; t.getDate() != e.getDate(); )
            t.setTime(+t + (t < e ? 1 : -1) * f);
      }
      function w(t, e) {
        return t.setMinutes(t.getMinutes() + e), t;
      }
      function A(t) {
        return (
          t.setHours(0),
          t.setMinutes(0),
          t.setSeconds(0),
          t.setMilliseconds(0),
          t
        );
      }
      function C(t, e) {
        return e ? A(new Date(+t)) : new Date(+t);
      }
      function D() {
        var t,
          e = 0;
        do {
          t = new Date(1970, e++, 1);
        } while (t.getHours());
        return t;
      }
      function x(t, e) {
        return Math.round((C(t, !0) - C(e, !0)) / p);
      }
      function S(t, n, r, i) {
        n !== e &&
          n != t.getFullYear() &&
          (t.setDate(1), t.setMonth(0), t.setFullYear(n)),
          r !== e && r != t.getMonth() && (t.setDate(1), t.setMonth(r)),
          i !== e && t.setDate(i);
      }
      function E(t, n) {
        return "object" == c(t)
          ? t
          : "number" == typeof t
          ? new Date(1e3 * t)
          : "string" == typeof t
          ? t.match(/^\d+(\.\d+)?$/)
            ? new Date(1e3 * parseFloat(t))
            : (n === e && (n = !0), _(t, n) || (t ? new Date(t) : null))
          : null;
      }
      function _(t, e) {
        var n = t.match(
          /^([0-9]{4})(-([0-9]{2})(-([0-9]{2})([T ]([0-9]{2}):([0-9]{2})(:([0-9]{2})(\.([0-9]+))?)?(Z|(([-+])([0-9]{2})(:?([0-9]{2}))?))?)?)?)?$/
        );
        if (!n) return null;
        var r = new Date(n[1], 0, 1);
        if (e || !n[13]) {
          var i = new Date(n[1], 0, 1, 9, 0);
          n[3] && (r.setMonth(n[3] - 1), i.setMonth(n[3] - 1)),
            n[5] && (r.setDate(n[5]), i.setDate(n[5])),
            b(r, i),
            n[7] && r.setHours(n[7]),
            n[8] && r.setMinutes(n[8]),
            n[10] && r.setSeconds(n[10]),
            n[12] && r.setMilliseconds(1e3 * Number("0." + n[12])),
            b(r, i);
        } else if (
          (r.setUTCFullYear(n[1], n[3] ? n[3] - 1 : 0, n[5] || 1),
          r.setUTCHours(
            n[7] || 0,
            n[8] || 0,
            n[10] || 0,
            n[12] ? 1e3 * Number("0." + n[12]) : 0
          ),
          n[14])
        ) {
          var o = 60 * Number(n[16]) + (n[18] ? Number(n[18]) : 0);
          (o *= "-" == n[15] ? 1 : -1), (r = new Date(+r + 60 * o * 1e3));
        }
        return r;
      }
      function k(t) {
        if ("number" == typeof t) return 60 * t;
        if ("object" == c(t)) return 60 * t.getHours() + t.getMinutes();
        var e = t.match(/(\d+)(?::(\d+))?\s*(\w+)?/);
        if (e) {
          var n = parseInt(e[1], 10);
          return (
            e[3] &&
              ((n %= 12), "p" == e[3].toLowerCase().charAt(0) && (n += 12)),
            60 * n + (e[2] ? parseInt(e[2], 10) : 0)
          );
        }
      }
      function T(t, e, n) {
        return R(t, null, e, n);
      }
      function R(t, e, r, i) {
        i = i || n;
        var o,
          a,
          s,
          u,
          c = t,
          l = e,
          h = r.length,
          d = "";
        for (o = 0; o < h; o++)
          if ("'" == (a = r.charAt(o))) {
            for (s = o + 1; s < h; s++)
              if ("'" == r.charAt(s)) {
                c && ((d += s == o + 1 ? "'" : r.substring(o + 1, s)), (o = s));
                break;
              }
          } else if ("(" == a) {
            for (s = o + 1; s < h; s++)
              if (")" == r.charAt(s)) {
                var p = T(c, r.substring(o + 1, s), i);
                parseInt(p.replace(/\D/, ""), 10) && (d += p), (o = s);
                break;
              }
          } else if ("[" == a) {
            for (s = o + 1; s < h; s++)
              if ("]" == r.charAt(s)) {
                var f = r.substring(o + 1, s);
                (p = T(c, f, i)) != T(l, f, i) && (d += p), (o = s);
                break;
              }
          } else if ("{" == a) (c = e), (l = t);
          else if ("}" == a) (c = t), (l = e);
          else {
            for (s = h; s > o; s--)
              if ((u = L[r.substring(o, s)])) {
                c && (d += u(c, i)), (o = s - 1);
                break;
              }
            s == o && c && (d += a);
          }
        return d;
      }
      var L = {
        s: function (t) {
          return t.getSeconds();
        },
        ss: function (t) {
          return W(t.getSeconds());
        },
        m: function (t) {
          return t.getMinutes();
        },
        mm: function (t) {
          return W(t.getMinutes());
        },
        h: function (t) {
          return t.getHours() % 12 || 12;
        },
        hh: function (t) {
          return W(t.getHours() % 12 || 12);
        },
        H: function (t) {
          return t.getHours();
        },
        HH: function (t) {
          return W(t.getHours());
        },
        d: function (t) {
          return t.getDate();
        },
        dd: function (t) {
          return W(t.getDate());
        },
        ddd: function (t, e) {
          return e.dayNamesShort[t.getDay()];
        },
        dddd: function (t, e) {
          return e.dayNames[t.getDay()];
        },
        M: function (t) {
          return t.getMonth() + 1;
        },
        MM: function (t) {
          return W(t.getMonth() + 1);
        },
        MMM: function (t, e) {
          return e.monthNamesShort[t.getMonth()];
        },
        MMMM: function (t, e) {
          return e.monthNames[t.getMonth()];
        },
        yy: function (t) {
          return (t.getFullYear() + "").substring(2);
        },
        yyyy: function (t) {
          return t.getFullYear();
        },
        t: function (t) {
          return t.getHours() < 12 ? "a" : "p";
        },
        tt: function (t) {
          return t.getHours() < 12 ? "am" : "pm";
        },
        T: function (t) {
          return t.getHours() < 12 ? "A" : "P";
        },
        TT: function (t) {
          return t.getHours() < 12 ? "AM" : "PM";
        },
        u: function (t) {
          return T(t, "yyyy-MM-dd'T'HH:mm:ss'Z'");
        },
        S: function (t) {
          var e = t.getDate();
          return e > 10 && e < 20
            ? "th"
            : ["st", "nd", "rd"][(e % 10) - 1] || "th";
        },
        w: function (t, e) {
          return e.weekNumberCalculation(t);
        },
        W: function (t) {
          return (
            (n = new Date(t.getTime())).setDate(
              n.getDate() + 4 - (n.getDay() || 7)
            ),
            (e = n.getTime()),
            n.setMonth(0),
            n.setDate(1),
            Math.floor(Math.round((e - n) / 864e5) / 7) + 1
          );
          var e, n;
        },
      };
      function M(t) {
        return t.end
          ? ((e = t.end),
            (n = t.allDay),
            (e = C(e)),
            n || e.getHours() || e.getMinutes() ? y(e, 1) : A(e))
          : y(C(t.start), 1);
        var e, n;
      }
      function O(n, r, i) {
        n.unbind("mouseover").mouseover(function (n) {
          for (var o, a, s, u = n.target; u != this; )
            (o = u), (u = u.parentNode);
          (a = o._fci) !== e &&
            ((o._fci = e),
            (s = r[a]),
            i(s.event, s.element, s),
            t(n.target).trigger(n)),
            n.stopPropagation();
        });
      }
      function N(e, n, r) {
        for (var i, o = 0; o < e.length; o++)
          (i = t(e[o])).width(Math.max(0, n - I(i, r)));
      }
      function P(e, n, r) {
        for (var i, o = 0; o < e.length; o++)
          (i = t(e[o])).height(Math.max(0, n - F(i, r)));
      }
      function I(e, n) {
        return (
          (function (e) {
            return (
              (parseFloat(t.css(e[0], "paddingLeft", !0)) || 0) +
              (parseFloat(t.css(e[0], "paddingRight", !0)) || 0)
            );
          })(e) +
          (function (e) {
            return (
              (parseFloat(t.css(e[0], "borderLeftWidth", !0)) || 0) +
              (parseFloat(t.css(e[0], "borderRightWidth", !0)) || 0)
            );
          })(e) +
          (n
            ? (function (e) {
                return (
                  (parseFloat(t.css(e[0], "marginLeft", !0)) || 0) +
                  (parseFloat(t.css(e[0], "marginRight", !0)) || 0)
                );
              })(e)
            : 0)
        );
      }
      function F(e, n) {
        return (
          (function (e) {
            return (
              (parseFloat(t.css(e[0], "paddingTop", !0)) || 0) +
              (parseFloat(t.css(e[0], "paddingBottom", !0)) || 0)
            );
          })(e) +
          (function (e) {
            return (
              (parseFloat(t.css(e[0], "borderTopWidth", !0)) || 0) +
              (parseFloat(t.css(e[0], "borderBottomWidth", !0)) || 0)
            );
          })(e) +
          (n
            ? (function (e) {
                return (
                  (parseFloat(t.css(e[0], "marginTop", !0)) || 0) +
                  (parseFloat(t.css(e[0], "marginBottom", !0)) || 0)
                );
              })(e)
            : 0)
        );
      }
      function B(t, e) {
        return t - e;
      }
      function j(t) {
        return Math.max.apply(Math, t);
      }
      function W(t) {
        return (t < 10 ? "0" : "") + t;
      }
      function H(t, n) {
        if (t[n] !== e) return t[n];
        for (var r, i = n.split(/(?=[A-Z])/), o = i.length - 1; o >= 0; o--)
          if ((r = t[i[o].toLowerCase()]) !== e) return r;
        return t[""];
      }
      function q(t) {
        return t
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/'/g, "&#039;")
          .replace(/"/g, "&quot;")
          .replace(/\n/g, "<br />");
      }
      function z(t) {
        t.attr("unselectable", "on")
          .css("MozUserSelect", "none")
          .bind("selectstart.ui", function () {
            return !1;
          });
      }
      function U(t) {
        t.children()
          .removeClass("fc-first fc-last")
          .filter(":first-child")
          .addClass("fc-first")
          .end()
          .filter(":last-child")
          .addClass("fc-last");
      }
      function Y(t, e) {
        var n = t.source || {},
          r = t.color,
          i = n.color,
          o = e("eventColor"),
          a =
            t.backgroundColor ||
            r ||
            n.backgroundColor ||
            i ||
            e("eventBackgroundColor") ||
            o,
          s =
            t.borderColor ||
            r ||
            n.borderColor ||
            i ||
            e("eventBorderColor") ||
            o,
          u = t.textColor || n.textColor || e("eventTextColor"),
          c = [];
        return (
          a && c.push("background-color:" + a),
          s && c.push("border-color:" + s),
          u && c.push("color:" + u),
          c.join(";")
        );
      }
      function V(e, n, r) {
        if ((t.isFunction(e) && (e = [e]), e)) {
          var i, o;
          for (i = 0; i < e.length; i++) o = e[i].apply(n, r) || o;
          return o;
        }
      }
      function G() {
        for (var t = 0; t < arguments.length; t++)
          if (arguments[t] !== e) return arguments[t];
      }
      function J(e, n, r) {
        var i = this;
        (i.renderBasic = function (n, r, g) {
          (b = n),
            (w = r),
            (D = g),
            (T = P("theme") ? "ui" : "fc"),
            (R = P("columnFormat")),
            (L = P("weekNumbers")),
            (M = P("weekNumberTitle")),
            (O = "iso" != P("weekNumberCalculation") ? "w" : "W"),
            u ||
              (f = t(
                "<div class='fc-event-container' style='position:absolute;z-index:8;top:0;left:0'/>"
              ).appendTo(e));
          !(function () {
            var n =
              "<table class='fc-border-separate' style='width:100%' cellspacing='0'>" +
              (function () {
                var t,
                  e,
                  n = T + "-widget-header",
                  r = "";
                for (
                  r += "<thead><tr>",
                    L &&
                      (r +=
                        "<th class='fc-week-number " +
                        n +
                        "'>" +
                        q(M) +
                        "</th>"),
                    t = 0;
                  t < w;
                  t++
                )
                  (e = W(0, t)),
                    (r +=
                      "<th class='fc-day-header fc-" +
                      d[e.getDay()] +
                      " " +
                      n +
                      "'>" +
                      q(V(e, R)) +
                      "</th>");
                return (r += "</tr></thead>");
              })() +
              (function () {
                var t,
                  e,
                  n,
                  r = T + "-widget-content",
                  i = "";
                for (i += "<tbody>", t = 0; t < b; t++) {
                  for (
                    i += "<tr class='fc-week'>",
                      L &&
                        ((n = W(t, 0)),
                        (i +=
                          "<td class='fc-week-number " +
                          r +
                          "'><div>" +
                          q(V(n, O)) +
                          "</div></td>")),
                      e = 0;
                    e < w;
                    e++
                  )
                    (n = W(t, e)), (i += G(n));
                  i += "</tr>";
                }
                return (i += "</tbody>");
              })() +
              "</table>";
            o && o.remove();
            (o = t(n).appendTo(e)),
              (a = o.find("thead")),
              (s = a.find(".fc-day-header")),
              (u = o.find("tbody")),
              (c = u.find("tr")),
              (l = u.find(".fc-day")),
              c.find("td:first-child"),
              (h = c.eq(0).find(".fc-day > div")),
              (p = c.eq(0).find(".fc-day-content > div")),
              U(a.add(a.find("tr"))),
              U(c),
              c.eq(0).addClass("fc-first"),
              c.filter(":last").addClass("fc-last"),
              l.each(function (e, n) {
                var r = W(Math.floor(e / w), e % w);
                I("dayRender", i, r, t(n));
              }),
              J(l);
          })();
        }),
          (i.setHeight = function (t) {
            var e,
              n = t - a.height();
            "variable" == P("weekMode")
              ? (e = Math.floor(n / (1 == b ? 2 : 6)))
              : ((e = Math.floor(n / b)), n - e * (b - 1));
          }),
          (i.setWidth = function (t) {
            (g = t),
              E.clear(),
              k.clear(),
              (v = 0),
              L && (v = a.find("th.fc-week-number").outerWidth());
            (m = Math.floor((g - v) / w)), N(s.slice(0, -1), m);
          }),
          (i.renderDayOverlay = $),
          (i.defaultSelectionEnd = function (t, e) {
            return C(t);
          }),
          (i.renderSelection = function (t, e, n) {
            $(t, y(C(e), 1), !0);
          }),
          (i.clearSelection = function () {
            B();
          }),
          (i.reportDayClick = function (t, e, n) {
            var r = H(t),
              i = l[r.row * w + r.col];
            I("dayClick", i, t, e, n);
          }),
          (i.dragStart = function (t, e, n) {
            S.start(function (t) {
              B(), t && Z(t.row, t.col, t.row, t.col);
            }, e);
          }),
          (i.dragStop = function (t, e, n) {
            var r = S.stop();
            if ((B(), r)) {
              var i = W(r);
              I("drop", t, i, !0, e, n);
            }
          }),
          (i.defaultEventEnd = function (t) {
            return C(t.start);
          }),
          (i.getHoverListener = function () {
            return S;
          }),
          (i.colLeft = function (t) {
            return E.left(t);
          }),
          (i.colRight = function (t) {
            return E.right(t);
          }),
          (i.colContentLeft = function (t) {
            return k.left(t);
          }),
          (i.colContentRight = function (t) {
            return k.right(t);
          }),
          (i.getIsCellAllDay = function () {
            return !0;
          }),
          (i.allDayRow = function (t) {
            return c.eq(t);
          }),
          (i.getRowCnt = function () {
            return b;
          }),
          (i.getColCnt = function () {
            return w;
          }),
          (i.getColWidth = function () {
            return m;
          }),
          (i.getDaySegmentContainer = function () {
            return f;
          }),
          nt.call(i, e, n, r),
          ut.call(i),
          st.call(i),
          function () {
            var t = this;
            (t.renderEvents = function (e, n) {
              t.renderDayEvents(e, n);
            }),
              (t.clearEvents = function () {
                t.getDaySegmentContainer().empty();
              }),
              rt.call(t);
          }.call(i);
        var o,
          a,
          s,
          u,
          c,
          l,
          h,
          p,
          f,
          g,
          m,
          v,
          b,
          w,
          D,
          x,
          S,
          E,
          k,
          T,
          R,
          L,
          M,
          O,
          P = i.opt,
          I = i.trigger,
          F = i.renderOverlay,
          B = i.clearOverlays,
          j = i.daySelectionMousedown,
          W = i.cellToDate,
          H = i.dateToCell,
          Y = i.rangeToSegments,
          V = n.formatDate;
        function G(t) {
          var e = T + "-widget-content",
            n = i.start.getMonth(),
            r = A(new Date()),
            o = "",
            a = ["fc-day", "fc-" + d[t.getDay()], e];
          return (
            t.getMonth() != n && a.push("fc-other-month"),
            +t == +r
              ? a.push("fc-today", T + "-state-highlight")
              : t < r
              ? a.push("fc-past")
              : a.push("fc-future"),
            (o +=
              "<td class='" +
              a.join(" ") +
              "' data-date='" +
              V(t, "yyyy-MM-dd") +
              "'><div>"),
            D && (o += "<div class='fc-day-number'>" + t.getDate() + "</div>"),
            (o +=
              "<div class='fc-day-content'><div style='position:relative'>&nbsp;</div></div></div></td>")
          );
        }
        function J(t) {
          t.click(K).mousedown(j);
        }
        function K(e) {
          if (!P("selectable")) {
            var n = _(t(this).data("date"));
            I("dayClick", this, n, !0, e);
          }
        }
        function $(t, e, n) {
          n && x.build();
          for (var r = Y(t, e), i = 0; i < r.length; i++) {
            var o = r[i];
            J(Z(o.row, o.leftCol, o.row, o.rightCol));
          }
        }
        function Z(t, n, r, i) {
          var o = x.rect(t, n, r, i, e);
          return F(o, e);
        }
        z(e.addClass("fc-grid")),
          (x = new ct(function (e, n) {
            var r, i, o;
            s.each(function (e, a) {
              (r = t(a)),
                (i = r.offset().left),
                e && (o[1] = i),
                (o = [i]),
                (n[e] = o);
            }),
              (o[1] = i + r.outerWidth()),
              c.each(function (n, a) {
                n < b &&
                  ((r = t(a)),
                  (i = r.offset().top),
                  n && (o[1] = i),
                  (o = [i]),
                  (e[n] = o));
              }),
              (o[1] = i + r.outerHeight());
          })),
          (S = new lt(x)),
          (E = new ht(function (t) {
            return h.eq(t);
          })),
          (k = new ht(function (t) {
            return p.eq(t);
          }));
      }
      function K(n, r, i) {
        var o = this;
        (o.renderAgenda = function (e) {
          (Q = e),
            (pt = At("theme") ? "ui" : "fc"),
            (ft = At("isRTL")),
            (gt = k(At("minTime"))),
            (mt = k(At("maxTime"))),
            (vt = At("columnFormat")),
            (yt = At("weekNumbers")),
            (bt = At("weekNumberTitle")),
            (wt = "iso" != At("weekNumberCalculation") ? "w" : "W"),
            (K = At("snapMinutes") || At("slotMinutes")),
            a
              ? Nt()
              : (function () {
                  var e,
                    r,
                    i,
                    o,
                    a,
                    s = pt + "-widget-header",
                    u = pt + "-widget-content",
                    c = At("slotMinutes") % 15 == 0;
                  Nt(),
                    (v = t(
                      "<div style='position:absolute;z-index:2;left:0;width:100%'/>"
                    ).appendTo(n)),
                    At("allDaySlot")
                      ? ((b = t(
                          "<div class='fc-event-container' style='position:absolute;z-index:8;top:0;left:0'/>"
                        ).appendTo(v)),
                        (e =
                          "<table style='width:100%' class='fc-agenda-allday' cellspacing='0'><tr><th class='" +
                          s +
                          " fc-agenda-axis'>" +
                          At("allDayText") +
                          "</th><td><div class='fc-day-content'><div style='position:relative'/></div></td><th class='" +
                          s +
                          " fc-agenda-gutter'>&nbsp;</th></tr></table>"),
                        (S = t(e).appendTo(v)),
                        Pt((E = S.find("tr")).find("td")),
                        v.append(
                          "<div class='fc-agenda-divider " +
                            s +
                            "'><div class='fc-agenda-divider-inner'/></div>"
                        ))
                      : (b = t([]));
                  for (
                    _ = t(
                      "<div style='position:absolute;width:100%;overflow-x:hidden;overflow-y:auto'/>"
                    ).appendTo(v),
                      T = t(
                        "<div style='position:relative;width:100%;overflow:hidden'/>"
                      ).appendTo(_),
                      R = t(
                        "<div class='fc-event-container' style='position:absolute;z-index:8;top:0;left:0'/>"
                      ).appendTo(T),
                      e =
                        "<table class='fc-agenda-slots' style='width:100%' cellspacing='0'><tbody>",
                      r = D(),
                      o = w(C(r), mt),
                      w(r, gt),
                      tt = 0,
                      i = 0;
                    r < o;
                    i++
                  )
                    (a = r.getMinutes()),
                      (e +=
                        "<tr class='fc-slot" +
                        i +
                        " " +
                        (a ? "fc-minor" : "") +
                        "'><th class='fc-agenda-axis " +
                        s +
                        "'>" +
                        (c && a ? "&nbsp;" : Mt(r, At("axisFormat"))) +
                        "</th><td class='" +
                        u +
                        "'><div style='position:relative'>&nbsp;</div></td></tr>"),
                      w(r, At("slotMinutes")),
                      tt++;
                  It((L = t((e += "</tbody></table>")).appendTo(T)).find("td"));
                })();
        }),
          (o.setWidth = function (e) {
            e, at.clear(), dt.clear();
            var n = s.find("th:first");
            S && (n = n.add(S.find("th:first")));
            (n = n.add(L.find("th:first"))),
              (H = 0),
              N(
                n.width("").each(function (e, n) {
                  H = Math.max(H, t(n).outerWidth());
                }),
                H
              );
            var r = a.find(".fc-agenda-gutter");
            S && (r = r.add(S.find("th.fc-agenda-gutter")));
            var i = _[0].clientWidth;
            (G = _.width() - i)
              ? (N(r, G), r.show().prev().removeClass("fc-last"))
              : r.hide().prev().addClass("fc-last");
            (V = Math.floor((i - H) / Q)), N(u.slice(0, -1), V);
          }),
          (o.setHeight = function (t) {
            t === e && (t = W);
            (W = t), (Ot = {});
            var n = c.position().top,
              r = _.position().top,
              i = Math.min(t - n, L.height() + r + 1);
            m.height(i - F(f)),
              v.css("top", n),
              _.height(i - r - 1),
              (J = L.find("tr:first").height() + 1),
              (Z = At("slotMinutes") / K),
              (X = J / Z);
          }),
          (o.afterRender = function () {
            !(function () {
              var t = D(),
                e = C(t);
              e.setHours(At("firstHour"));
              var n = zt(t, e) + 1;
              function r() {
                _.scrollTop(n);
              }
              r(), setTimeout(r, 0);
            })();
          }),
          (o.defaultEventEnd = function (t) {
            var e = C(t.start);
            if (t.allDay) return e;
            return w(e, At("defaultEventMinutes"));
          }),
          (o.timePosition = zt),
          (o.getIsCellAllDay = Ht),
          (o.allDayRow = function (t) {
            return E;
          }),
          (o.getCoordinateGrid = function () {
            return it;
          }),
          (o.getHoverListener = function () {
            return ot;
          }),
          (o.colLeft = function (t) {
            return at.left(t);
          }),
          (o.colRight = function (t) {
            return at.right(t);
          }),
          (o.colContentLeft = function (t) {
            return dt.left(t);
          }),
          (o.colContentRight = function (t) {
            return dt.right(t);
          }),
          (o.getDaySegmentContainer = function () {
            return b;
          }),
          (o.getSlotSegmentContainer = function () {
            return R;
          }),
          (o.getMinMinute = function () {
            return gt;
          }),
          (o.getMaxMinute = function () {
            return mt;
          }),
          (o.getSlotContainer = function () {
            return T;
          }),
          (o.getRowCnt = function () {
            return 1;
          }),
          (o.getColCnt = function () {
            return Q;
          }),
          (o.getColWidth = function () {
            return V;
          }),
          (o.getSnapHeight = function () {
            return X;
          }),
          (o.getSnapMinutes = function () {
            return K;
          }),
          (o.defaultSelectionEnd = function (t, e) {
            if (e) return C(t);
            return w(C(t), At("slotMinutes"));
          }),
          (o.renderDayOverlay = Bt),
          (o.renderSelection = function (t, e, n) {
            n ? At("allDaySlot") && Bt(t, y(C(e), 1), !0) : Ut(t, e);
          }),
          (o.clearSelection = Yt),
          (o.reportDayClick = Gt),
          (o.dragStart = function (t, e, n) {
            ot.start(function (t) {
              if ((xt(), t))
                if (Ht(t)) jt(t.row, t.col, t.row, t.col);
                else {
                  var e = qt(t),
                    n = w(C(e), At("defaultEventMinutes"));
                  Wt(e, n);
                }
            }, e);
          }),
          (o.dragStop = function (t, e, n) {
            var r = ot.stop();
            xt(), r && Ct("drop", t, qt(r), Ht(r), e, n);
          }),
          nt.call(o, n, r, i),
          ut.call(o),
          st.call(o),
          function () {
            var n = this;
            (n.renderEvents = function (n, o) {
              var a,
                s = n.length,
                u = [],
                l = [];
              for (a = 0; a < s; a++) n[a].allDay ? u.push(n[a]) : l.push(n[a]);
              r("allDaySlot") && (z(u, o), c());
              !(function (n, o) {
                var a,
                  s,
                  u,
                  c,
                  l,
                  d,
                  p,
                  f,
                  g,
                  v,
                  y,
                  w,
                  C,
                  D,
                  x,
                  S,
                  E = n.length,
                  _ = "",
                  k = h(),
                  T = r("isRTL");
                for (a = 0; a < E; a++)
                  (s = n[a]),
                    (u = s.event),
                    (c = m(s.start, s.start)),
                    (l = m(s.start, s.end)),
                    (d = b(s.col)),
                    (p = A(s.col)),
                    (g =
                      (f = (p -= 0.025 * (f = p - d)) - d) *
                      (s.forwardCoord - s.backwardCoord)),
                    r("slotEventOverlap") && (g = Math.max(2 * (g - 10), g)),
                    T
                      ? ((y = p - s.backwardCoord * f), (v = y - g))
                      : ((v = d + s.backwardCoord * f), (y = v + g)),
                    (v = Math.max(v, d)),
                    (y = Math.min(y, p)),
                    (g = y - v),
                    (s.top = c),
                    (s.left = v),
                    (s.outerWidth = g),
                    (s.outerHeight = l - c),
                    (_ += Z(u, s));
                for (k[0].innerHTML = _, w = k.children(), a = 0; a < E; a++)
                  (s = n[a]),
                    (u = s.event),
                    (C = t(w[a])),
                    !1 === (D = i("eventRender", u, u, C))
                      ? C.remove()
                      : (D &&
                          !0 !== D &&
                          (C.remove(),
                          (C = t(D)
                            .css({
                              position: "absolute",
                              top: s.top,
                              left: s.left,
                            })
                            .appendTo(k))),
                        (s.element = C),
                        u._id === o ? X(u, C, s) : (C[0]._fci = a),
                        R(u, C));
                for (O(k, n, X), a = 0; a < E; a++)
                  (s = n[a]),
                    (C = s.element) &&
                      ((s.vsides = F(C, !0)),
                      (s.hsides = I(C, !0)),
                      (x = C.find(".fc-event-title")).length &&
                        (s.contentTop = x[0].offsetTop));
                for (a = 0; a < E; a++)
                  (s = n[a]),
                    (C = s.element) &&
                      ((C[0].style.width =
                        Math.max(0, s.outerWidth - s.hsides) + "px"),
                      (S = Math.max(0, s.outerHeight - s.vsides)),
                      (C[0].style.height = S + "px"),
                      (u = s.event),
                      s.contentTop !== e &&
                        S - s.contentTop < 10 &&
                        (C.find("div.fc-event-time").text(
                          V(u.start, r("timeFormat")) + " - " + u.title
                        ),
                        C.find("div.fc-event-title").remove()),
                      i("eventAfterRender", u, u, C));
              })(
                (function (e) {
                  var n,
                    r,
                    i,
                    o,
                    a,
                    s = S(),
                    u = f(),
                    c = p(),
                    l = t.map(e, K),
                    h = [];
                  for (r = 0; r < s; r++)
                    for (
                      w((n = D(0, r)), u),
                        a = $((a = J(e, l, n, w(C(n), c - u)))),
                        i = 0;
                      i < a.length;
                      i++
                    )
                      ((o = a[i]).col = r), h.push(o);
                  return h;
                })(l),
                o
              );
            }),
              (n.clearEvents = function () {
                l().empty(), h().empty();
              }),
              (n.slotSegHtml = Z),
              rt.call(n);
            var r = n.opt,
              i = n.trigger,
              o = n.isEventDraggable,
              a = n.isEventResizable,
              s = n.eventEnd,
              u = n.eventElementHandlers,
              c = n.setHeight,
              l = n.getDaySegmentContainer,
              h = n.getSlotSegmentContainer,
              d = n.getHoverListener,
              p = n.getMaxMinute,
              f = n.getMinMinute,
              m = n.timePosition,
              v = n.getIsCellAllDay,
              b = n.colContentLeft,
              A = n.colContentRight,
              D = n.cellToDate,
              S = n.getColCnt,
              E = n.getColWidth,
              _ = n.getSnapHeight,
              k = n.getSnapMinutes,
              T = n.getSlotContainer,
              R = n.reportEventElement,
              L = n.showEvents,
              N = n.hideEvents,
              B = n.eventDrop,
              j = n.eventResize,
              W = n.renderDayOverlay,
              H = n.clearOverlays,
              z = n.renderDayEvents,
              U = n.calendar,
              V = U.formatDate,
              G = U.formatDates;
            function J(t, e, n, r) {
              var i,
                o,
                a,
                s,
                u,
                c,
                l,
                h,
                d = [],
                p = t.length;
              for (i = 0; i < p; i++)
                (o = t[i]),
                  (a = o.start),
                  (s = e[i]) > n &&
                    a < r &&
                    (a < n ? ((u = C(n)), (l = !1)) : ((u = a), (l = !0)),
                    s > r ? ((c = C(r)), (h = !1)) : ((c = s), (h = !0)),
                    d.push({
                      event: o,
                      start: u,
                      end: c,
                      isStart: l,
                      isEnd: h,
                    }));
              return d.sort(et);
            }
            function K(t) {
              return t.end ? C(t.end) : w(C(t.start), r("defaultEventMinutes"));
            }
            function Z(t, e) {
              var n = "<",
                i = t.url,
                s = Y(t, r),
                u = ["fc-event", "fc-event-vert"];
              return (
                o(t) && u.push("fc-event-draggable"),
                e.isStart && u.push("fc-event-start"),
                e.isEnd && u.push("fc-event-end"),
                (u = u.concat(t.className)),
                t.source && (u = u.concat(t.source.className || [])),
                (n += i ? "a href='" + q(t.url) + "'" : "div"),
                (n +=
                  " class='" +
                  u.join(" ") +
                  "' style='position:absolute;top:" +
                  e.top +
                  "px;left:" +
                  e.left +
                  "px;" +
                  s +
                  "'><div class='fc-event-inner'><div class='fc-event-time'>" +
                  q(G(t.start, t.end, r("timeFormat"))) +
                  "</div><div class='fc-event-title'>" +
                  q(t.title || "") +
                  "</div></div><div class='fc-event-bg'></div>"),
                e.isEnd &&
                  a(t) &&
                  (n +=
                    "<div class='ui-resizable-handle ui-resizable-s'>=</div>"),
                (n += "</" + (i ? "a" : "div") + ">")
              );
            }
            function X(t, e, c) {
              var l = e.find("div.fc-event-time");
              o(t) &&
                (function (t, e, o) {
                  var a,
                    s,
                    u,
                    c,
                    l,
                    h,
                    d,
                    p,
                    f,
                    g,
                    m,
                    b = n.getCoordinateGrid(),
                    A = S(),
                    T = E(),
                    R = _(),
                    O = k();
                  function P() {
                    H(),
                      u &&
                        (l
                          ? (o.hide(),
                            e.draggable("option", "grid", null),
                            W(y(C(t.start), f), y(M(t), f)))
                          : (!(function (e) {
                              var n,
                                i = w(C(t.start), e);
                              t.end && (n = w(C(t.end), e));
                              o.text(G(i, n, r("timeFormat")));
                            })(g),
                            o.css("display", ""),
                            e.draggable("option", "grid", [T, R])));
                  }
                  e.draggable({
                    scroll: !1,
                    grid: [T, R],
                    axis: 1 == A && "y",
                    opacity: r("dragOpacity"),
                    revertDuration: r("dragRevertDuration"),
                    start: function (n, r) {
                      i("eventDragStart", e, t, n, r),
                        N(t, e),
                        b.build(),
                        (a = e.position()),
                        (s = b.cell(n.pageX, n.pageY)),
                        (u = c = !0),
                        (l = h = v(s)),
                        (d = p = 0),
                        (f = 0),
                        (g = m = 0);
                    },
                    drag: function (t, n) {
                      var r = b.cell(t.pageX, t.pageY);
                      if ((u = !!r)) {
                        if (
                          ((l = v(r)),
                          (d = Math.round((n.position.left - a.left) / T)) != p)
                        ) {
                          var i = D(0, s.col),
                            o = s.col + d;
                          (o = Math.max(0, o)), (o = Math.min(A - 1, o));
                          var y = D(0, o);
                          f = x(y, i);
                        }
                        l || (g = Math.round((n.position.top - a.top) / R) * O);
                      }
                      (u == c && l == h && d == p && g == m) ||
                        (P(), (c = u), (h = l), (p = d), (m = g)),
                        e.draggable("option", "revert", !u);
                    },
                    stop: function (n, r) {
                      H(),
                        i("eventDragStop", e, t, n, r),
                        u && (l || f || g)
                          ? B(this, t, f, l ? 0 : g, l, n, r)
                          : ((u = !0),
                            (l = !1),
                            (d = 0),
                            (f = 0),
                            (g = 0),
                            P(),
                            e.css("filter", ""),
                            e.css(a),
                            L(t, e));
                    },
                  });
                })(t, e, l),
                c.isEnd &&
                  a(t) &&
                  (function (t, e, n) {
                    var o,
                      a,
                      u = _(),
                      c = k();
                    e.resizable({
                      handles: { s: ".ui-resizable-handle" },
                      grid: u,
                      start: function (n, r) {
                        (o = a = 0),
                          N(t, e),
                          i("eventResizeStart", this, t, n, r);
                      },
                      resize: function (i, l) {
                        (o = Math.round(
                          (Math.max(u, e.height()) - l.originalSize.height) / u
                        )) != a &&
                          (n.text(
                            G(
                              t.start,
                              o || t.end ? w(s(t), c * o) : null,
                              r("timeFormat")
                            )
                          ),
                          (a = o));
                      },
                      stop: function (n, r) {
                        i("eventResizeStop", this, t, n, r),
                          o ? j(this, t, 0, c * o, n, r) : L(t, e);
                      },
                    });
                  })(t, e, l),
                u(t, e);
            }
            n.draggableDayEvent = function (t, e, n) {
              var o,
                a,
                s,
                u = n.isStart,
                c = !0,
                l = d(),
                h = E(),
                p = _(),
                m = k(),
                v = f();
              function b() {
                c ||
                  (e.width(o).height("").draggable("option", "grid", null),
                  (c = !0));
              }
              e.draggable({
                opacity: r("dragOpacity", "month"),
                revertDuration: r("dragRevertDuration"),
                start: function (n, d) {
                  i("eventDragStart", e, t, n, d),
                    N(t, e),
                    (o = e.width()),
                    l.start(
                      function (n, i) {
                        if ((H(), n)) {
                          a = !1;
                          var o = D(0, i.col),
                            l = D(0, n.col);
                          (s = x(l, o)),
                            n.row
                              ? u
                                ? c &&
                                  (e.width(h - 10),
                                  P(
                                    e,
                                    p *
                                      Math.round(
                                        (t.end
                                          ? (t.end - t.start) / g
                                          : r("defaultEventMinutes")) / m
                                      )
                                  ),
                                  e.draggable("option", "grid", [h, 1]),
                                  (c = !1))
                                : (a = !0)
                              : (W(y(C(t.start), s), y(M(t), s)), b()),
                            (a = a || (c && !s));
                        } else b(), (a = !0);
                        e.draggable("option", "revert", a);
                      },
                      n,
                      "drag"
                    );
                },
                stop: function (n, r) {
                  if ((l.stop(), H(), i("eventDragStop", e, t, n, r), a))
                    b(), e.css("filter", ""), L(t, e);
                  else {
                    var o = 0;
                    c ||
                      (o =
                        Math.round((e.offset().top - T().offset().top) / p) *
                          m +
                        v -
                        (60 * t.start.getHours() + t.start.getMinutes())),
                      B(this, t, s, o, c, n, r);
                  }
                },
              });
            };
          }.call(o);
        var a,
          s,
          u,
          c,
          l,
          h,
          p,
          f,
          m,
          v,
          b,
          S,
          E,
          _,
          T,
          R,
          L,
          j,
          W,
          H,
          V,
          G,
          J,
          K,
          Z,
          X,
          Q,
          tt,
          it,
          ot,
          at,
          dt,
          pt,
          ft,
          gt,
          mt,
          vt,
          yt,
          bt,
          wt,
          At = o.opt,
          Ct = o.trigger,
          Dt = o.renderOverlay,
          xt = o.clearOverlays,
          St = o.reportSelection,
          Et = o.unselect,
          _t = o.daySelectionMousedown,
          kt = o.slotSegHtml,
          Tt = o.cellToDate,
          Rt = o.dateToCell,
          Lt = o.rangeToSegments,
          Mt = r.formatDate,
          Ot = {};
        function Nt() {
          var e =
            "<table style='width:100%' class='fc-agenda-days fc-border-separate' cellspacing='0'>" +
            (function () {
              var t,
                e,
                n,
                r = pt + "-widget-header",
                i = "";
              for (
                i += "<thead><tr>",
                  yt
                    ? ((t = Tt(0, 0)),
                      (e = Mt(t, wt)),
                      ft ? (e += bt) : (e = bt + e),
                      (i +=
                        "<th class='fc-agenda-axis fc-week-number " +
                        r +
                        "'>" +
                        q(e) +
                        "</th>"))
                    : (i += "<th class='fc-agenda-axis " + r + "'>&nbsp;</th>"),
                  n = 0;
                n < Q;
                n++
              )
                (t = Tt(0, n)),
                  (i +=
                    "<th class='fc-" +
                    d[t.getDay()] +
                    " fc-col" +
                    n +
                    " " +
                    r +
                    "'>" +
                    q(Mt(t, vt)) +
                    "</th>");
              return (i +=
                "<th class='fc-agenda-gutter " +
                r +
                "'>&nbsp;</th></tr></thead>");
            })() +
            (function () {
              var t,
                e,
                n,
                r,
                i,
                o = pt + "-widget-header",
                a = pt + "-widget-content",
                s = A(new Date()),
                u = "";
              for (
                u +=
                  "<tbody><tr><th class='fc-agenda-axis " + o + "'>&nbsp;</th>",
                  n = "",
                  e = 0;
                e < Q;
                e++
              )
                (t = Tt(0, e)),
                  (i = ["fc-col" + e, "fc-" + d[t.getDay()], a]),
                  +t == +s
                    ? i.push(pt + "-state-highlight", "fc-today")
                    : t < s
                    ? i.push("fc-past")
                    : i.push("fc-future"),
                  (r =
                    "<td class='" +
                    i.join(" ") +
                    "'><div><div class='fc-day-content'><div style='position:relative'>&nbsp;</div></div></div></td>"),
                  (n += r);
              return (
                (u += n),
                (u +=
                  "<td class='fc-agenda-gutter " +
                  a +
                  "'>&nbsp;</td></tr></tbody>")
              );
            })() +
            "</table>";
          a && a.remove(),
            (a = t(e).appendTo(n)),
            (s = a.find("thead")),
            (u = s.find("th").slice(1, -1)),
            (c = a.find("tbody")),
            (l = c.find("td").slice(0, -1)),
            (h = l.find("> div")),
            (p = l.find(".fc-day-content > div")),
            (f = l.eq(0)),
            (m = h.eq(0)),
            U(s.add(s.find("tr"))),
            U(c.add(c.find("tr")));
        }
        function Pt(t) {
          t.click(Ft).mousedown(_t);
        }
        function It(t) {
          t.click(Ft).mousedown(Vt);
        }
        function Ft(t) {
          if (!At("selectable")) {
            var e = Math.min(
                Q - 1,
                Math.floor((t.pageX - a.offset().left - H) / V)
              ),
              n = Tt(0, e),
              r = this.parentNode.className.match(/fc-slot(\d+)/);
            if (r) {
              var i = parseInt(r[1]) * At("slotMinutes"),
                o = Math.floor(i / 60);
              n.setHours(o),
                n.setMinutes((i % 60) + gt),
                Ct("dayClick", l[e], n, !1, t);
            } else Ct("dayClick", l[e], n, !0, t);
          }
        }
        function Bt(t, e, n) {
          n && it.build();
          for (var r = Lt(t, e), i = 0; i < r.length; i++) {
            var o = r[i];
            Pt(jt(o.row, o.leftCol, o.row, o.rightCol));
          }
        }
        function jt(t, e, n, r) {
          var i = it.rect(t, e, n, r, v);
          return Dt(i, v);
        }
        function Wt(t, e) {
          for (var n = 0; n < Q; n++) {
            var r = Tt(0, n),
              i = y(C(r), 1),
              o = new Date(Math.max(r, t)),
              a = new Date(Math.min(i, e));
            if (o < a) {
              var s = it.rect(0, n, 0, n, T),
                u = zt(r, o),
                c = zt(r, a);
              (s.top = u), (s.height = c - u), It(Dt(s, T));
            }
          }
        }
        function Ht(t) {
          return At("allDaySlot") && !t.row;
        }
        function qt(t) {
          var e = Tt(0, t.col),
            n = t.row;
          return At("allDaySlot") && n--, n >= 0 && w(e, gt + n * K), e;
        }
        function zt(t, n) {
          if (((t = C(t, !0)), n < w(C(t), gt))) return 0;
          if (n >= w(C(t), mt)) return L.height();
          var r = At("slotMinutes"),
            i = 60 * n.getHours() + n.getMinutes() - gt,
            o = Math.floor(i / r),
            a = Ot[o];
          return (
            a === e &&
              (a = Ot[o] = L.find("tr").eq(o).find("td div")[0].offsetTop),
            Math.max(0, Math.round(a - 1 + J * ((i % r) / r)))
          );
        }
        function Ut(e, n) {
          var r = At("selectHelper");
          if ((it.build(), r)) {
            var i = Rt(e).col;
            if (i >= 0 && i < Q) {
              var o = it.rect(0, i, 0, i, T),
                a = zt(e, e),
                s = zt(e, n);
              if (s > a) {
                if (
                  ((o.top = a),
                  (o.height = s - a),
                  (o.left += 2),
                  (o.width -= 5),
                  t.isFunction(r))
                ) {
                  var u = r(e, n);
                  u &&
                    ((o.position = "absolute"), (j = t(u).css(o).appendTo(T)));
                } else
                  (o.isStart = !0),
                    (o.isEnd = !0),
                    (j = t(
                      kt(
                        {
                          title: "",
                          start: e,
                          end: n,
                          className: ["fc-select-helper"],
                          editable: !1,
                        },
                        o
                      )
                    )).css("opacity", At("dragOpacity"));
                j &&
                  (It(j), T.append(j), N(j, o.width, !0), P(j, o.height, !0));
              }
            }
          } else Wt(e, n);
        }
        function Yt() {
          xt(), j && (j.remove(), (j = null));
        }
        function Vt(e) {
          var n;
          1 == e.which &&
            At("selectable") &&
            (Et(e),
            ot.start(function (t, e) {
              if ((Yt(), t && t.col == e.col && !Ht(t))) {
                var r = qt(e),
                  i = qt(t);
                Ut((n = [r, w(C(r), K), i, w(C(i), K)].sort(B))[0], n[3]);
              } else n = null;
            }, e),
            t(document).one("mouseup", function (t) {
              ot.stop(),
                n && (+n[0] == +n[1] && Gt(n[0], !1, t), St(n[0], n[3], !1, t));
            }));
        }
        function Gt(t, e, n) {
          Ct("dayClick", l[Rt(t).col], t, e, n);
        }
        z(n.addClass("fc-agenda")),
          (it = new ct(function (e, n) {
            var r, i, o;
            u.each(function (e, a) {
              (r = t(a)),
                (i = r.offset().left),
                e && (o[1] = i),
                (o = [i]),
                (n[e] = o);
            }),
              (o[1] = i + r.outerWidth()),
              At("allDaySlot") &&
                ((i = (r = E).offset().top), (e[0] = [i, i + r.outerHeight()]));
            var a = T.offset().top,
              s = _.offset().top,
              c = s + _.outerHeight();
            function l(t) {
              return Math.max(s, Math.min(c, t));
            }
            for (var h = 0; h < tt * Z; h++)
              e.push([l(a + X * h), l(a + X * (h + 1))]);
          })),
          (ot = new lt(it)),
          (at = new ht(function (t) {
            return h.eq(t);
          })),
          (dt = new ht(function (t) {
            return p.eq(t);
          }));
      }
      function $(t) {
        var e,
          n = (function (t) {
            var e,
              n,
              r,
              i = [];
            for (e = 0; e < t.length; e++) {
              for (n = t[e], r = 0; r < i.length && Q(n, i[r]).length; r++);
              (i[r] || (i[r] = [])).push(n);
            }
            return i;
          })(t),
          r = n[0];
        if (
          ((function (t) {
            var e, n, r, i, o;
            for (e = 0; e < t.length; e++)
              for (n = t[e], r = 0; r < n.length; r++)
                for ((i = n[r]).forwardSegs = [], o = e + 1; o < t.length; o++)
                  Q(i, t[o], i.forwardSegs);
          })(n),
          r)
        ) {
          for (e = 0; e < r.length; e++) Z(r[e]);
          for (e = 0; e < r.length; e++) X(r[e], 0, 0);
        }
        return (function (t) {
          var e,
            n,
            r,
            i = [];
          for (e = 0; e < t.length; e++)
            for (n = t[e], r = 0; r < n.length; r++) i.push(n[r]);
          return i;
        })(n);
      }
      function Z(t) {
        var n,
          r,
          i = t.forwardSegs,
          o = 0;
        if (t.forwardPressure === e) {
          for (n = 0; n < i.length; n++)
            Z((r = i[n])), (o = Math.max(o, 1 + r.forwardPressure));
          t.forwardPressure = o;
        }
      }
      function X(t, n, r) {
        var i,
          o = t.forwardSegs;
        if (t.forwardCoord === e)
          for (
            o.length
              ? (o.sort(tt),
                X(o[0], n + 1, r),
                (t.forwardCoord = o[0].backwardCoord))
              : (t.forwardCoord = 1),
              t.backwardCoord = t.forwardCoord - (t.forwardCoord - r) / (n + 1),
              i = 0;
            i < o.length;
            i++
          )
            X(o[i], 0, t.forwardCoord);
      }
      function Q(t, e, n) {
        n = n || [];
        for (var r = 0; r < e.length; r++)
          (i = t),
            (o = e[r]),
            i.end > o.start && i.start < o.end && n.push(e[r]);
        var i, o;
        return n;
      }
      function tt(t, e) {
        return (
          e.forwardPressure - t.forwardPressure ||
          (t.backwardCoord || 0) - (e.backwardCoord || 0) ||
          et(t, e)
        );
      }
      function et(t, e) {
        return (
          t.start - e.start ||
          e.end - e.start - (t.end - t.start) ||
          (t.event.title || "").localeCompare(e.event.title)
        );
      }
      function nt(n, r, i) {
        var o = this;
        (o.element = n),
          (o.calendar = r),
          (o.name = i),
          (o.opt = f),
          (o.trigger = g),
          (o.isEventDraggable = function (t) {
            var e = t.source || {};
            return (
              G(
                t.startEditable,
                e.startEditable,
                f("eventStartEditable"),
                t.editable,
                e.editable,
                f("editable")
              ) && !f("disableDragging")
            );
          }),
          (o.isEventResizable = function (t) {
            var e = t.source || {};
            return (
              G(
                t.durationEditable,
                e.durationEditable,
                f("eventDurationEditable"),
                t.editable,
                e.editable,
                f("editable")
              ) && !f("disableResizing")
            );
          }),
          (o.setEventData = function (t) {
            l = {};
            var e,
              n,
              r = t.length;
            for (e = 0; e < r; e++)
              (n = t[e]), l[n._id] ? l[n._id].push(n) : (l[n._id] = [n]);
          }),
          (o.clearEventData = function () {
            (l = {}), (h = {}), (d = []);
          }),
          (o.eventEnd = m),
          (o.reportEventElement = function (t, e) {
            d.push({ event: t, element: e }),
              h[t._id] ? h[t._id].push(e) : (h[t._id] = [e]);
          }),
          (o.triggerEventDestroy = function () {
            t.each(d, function (t, e) {
              o.trigger("eventDestroy", e.event, e.event, e.element);
            });
          }),
          (o.eventElementHandlers = function (t, e) {
            e.click(function (n) {
              if (
                !e.hasClass("ui-draggable-dragging") &&
                !e.hasClass("ui-resizable-resizing")
              )
                return g("eventClick", this, t, n);
            }).hover(
              function (e) {
                g("eventMouseover", this, t, e);
              },
              function (e) {
                g("eventMouseout", this, t, e);
              }
            );
          }),
          (o.showEvents = function (t, e) {
            v(t, e, "show");
          }),
          (o.hideEvents = function (t, e) {
            v(t, e, "hide");
          }),
          (o.eventDrop = function (t, e, n, r, i, o, a) {
            var s = e.allDay,
              c = e._id;
            b(l[c], n, r, i),
              g(
                "eventDrop",
                t,
                e,
                n,
                r,
                i,
                function () {
                  b(l[c], -n, -r, s), u(c);
                },
                o,
                a
              ),
              u(c);
          }),
          (o.eventResize = function (t, e, n, r, i, o) {
            var a = e._id;
            A(l[a], n, r),
              g(
                "eventResize",
                t,
                e,
                n,
                r,
                function () {
                  A(l[a], -n, -r), u(a);
                },
                i,
                o
              ),
              u(a);
          });
        var a = o.defaultEventEnd,
          s = r.normalizeEvent,
          u = r.reportEventChange,
          l = {},
          h = {},
          d = [],
          p = r.options;
        function f(e, n) {
          var r = p[e];
          return t.isPlainObject(r) ? H(r, n || i) : r;
        }
        function g(t, e) {
          return r.trigger.apply(
            r,
            [t, e || o].concat(Array.prototype.slice.call(arguments, 2), [o])
          );
        }
        function m(t) {
          return t.end ? C(t.end) : a(t);
        }
        function v(t, e, n) {
          var r,
            i = h[t._id],
            o = i.length;
          for (r = 0; r < o; r++) (e && i[r][0] == e[0]) || i[r][n]();
        }
        function b(t, n, r, i) {
          r = r || 0;
          for (var o, a = t.length, u = 0; u < a; u++)
            (o = t[u]),
              i !== e && (o.allDay = i),
              w(y(o.start, n, !0), r),
              o.end && (o.end = w(y(o.end, n, !0), r)),
              s(o, p);
        }
        function A(t, e, n) {
          n = n || 0;
          for (var r, i = t.length, o = 0; o < i; o++)
            ((r = t[o]).end = w(y(m(r), e, !0), n)), s(r, p);
        }
        (o.isHiddenDay = function (t) {
          "object" == c(t) && (t = t.getDay());
          return E[t];
        }),
          (o.skipHiddenDays = function (t, e, n) {
            e = e || 1;
            for (; E[(t.getDay() + (n ? e : 0) + 7) % 7]; ) y(t, e);
          }),
          (o.getCellsPerWeek = function () {
            return D;
          }),
          (o.dateToCell = function (t) {
            return P(N(O(t)));
          }),
          (o.dateToDayOffset = O),
          (o.dayOffsetToCellOffset = N),
          (o.cellOffsetToCell = P),
          (o.cellToDate = function () {
            return M(L(R.apply(null, arguments)));
          }),
          (o.cellToCellOffset = R),
          (o.cellOffsetToDayOffset = L),
          (o.dayOffsetToDate = M),
          (o.rangeToSegments = function (t, e) {
            for (
              var n = o.getRowCnt(),
                r = o.getColCnt(),
                i = [],
                a = O(t),
                s = O(e),
                u = N(a),
                c = N(s) - 1,
                l = 0;
              l < n;
              l++
            ) {
              var h = l * r,
                d = h + r - 1,
                p = Math.max(u, h),
                f = Math.min(c, d);
              if (p <= f) {
                var g = P(p),
                  m = P(f),
                  v = [g.col, m.col].sort(),
                  y = L(p) == a,
                  b = L(f) + 1 == s;
                i.push({
                  row: l,
                  leftCol: v[0],
                  rightCol: v[1],
                  isStart: y,
                  isEnd: b,
                });
              }
            }
            return i;
          });
        var D,
          S = f("hiddenDays") || [],
          E = [],
          _ = [],
          k = [],
          T = f("isRTL");
        function R(t, e) {
          var n = o.getColCnt(),
            r = T ? -1 : 1,
            i = T ? n - 1 : 0;
          return (
            "object" == c(t) && ((e = t.col), (t = t.row)), t * n + (e * r + i)
          );
        }
        function L(t) {
          var e = o.visStart.getDay();
          return (t += _[e]), 7 * Math.floor(t / D) + k[((t % D) + D) % D] - e;
        }
        function M(t) {
          var e = C(o.visStart);
          return y(e, t), e;
        }
        function O(t) {
          return x(t, o.visStart);
        }
        function N(t) {
          var e = o.visStart.getDay();
          return (t += e), Math.floor(t / 7) * D + _[((t % 7) + 7) % 7] - _[e];
        }
        function P(t) {
          var e = o.getColCnt(),
            n = T ? -1 : 1,
            r = T ? e - 1 : 0;
          return { row: Math.floor(t / e), col: (((t % e) + e) % e) * n + r };
        }
        !(function () {
          !1 === f("weekends") && S.push(0, 6);
          for (var e = 0, n = 0; e < 7; e++)
            (_[e] = n),
              (E[e] = -1 != t.inArray(e, S)),
              E[e] || ((k[n] = e), n++);
          if (!(D = n)) throw "invalid hiddenDays";
        })();
      }
      function rt() {
        var e = this;
        (e.renderDayEvents = function (t, e) {
          var n = B(t, !1, !0);
          ot(n, function (t, e) {
            s(t.event, e);
          }),
            (function (t, e) {
              var n = A();
              ot(t, function (t, n, r) {
                var i = t.event;
                i._id === e ? V(i, n, t) : (n[0]._fci = r);
              }),
                O(n, t, V);
            })(n, e),
            ot(n, function (t, e) {
              r("eventAfterRender", t.event, t.event, e);
            });
        }),
          (e.draggableDayEvent = function (t, e) {
            var i,
              o = k();
            e.draggable({
              delay: 50,
              opacity: n("dragOpacity"),
              revertDuration: n("dragRevertDuration"),
              start: function (n, a) {
                r("eventDragStart", e, t, n, a),
                  l(t, e),
                  o.start(
                    function (n, r, o, a) {
                      if (
                        (e.draggable("option", "revert", !n || (!o && !a)),
                        E(),
                        n)
                      ) {
                        var s = R(r),
                          u = R(n);
                        (i = x(u, s)), S(y(C(t.start), i), y(M(t), i));
                      } else i = 0;
                    },
                    n,
                    "drag"
                  );
              },
              stop: function (n, a) {
                o.stop(),
                  E(),
                  r("eventDragStop", e, t, n, a),
                  i
                    ? h(this, t, i, 0, t.allDay, n, a)
                    : (e.css("filter", ""), c(t, e));
              },
            });
          }),
          (e.resizableDayEvent = function (e, i, o) {
            var s = n("isRTL") ? "w" : "e",
              u = i.find(".ui-resizable-" + s),
              h = !1;
            z(i),
              i
                .mousedown(function (t) {
                  t.preventDefault();
                })
                .click(function (t) {
                  h && (t.preventDefault(), t.stopImmediatePropagation());
                }),
              u.mousedown(function (n) {
                if (1 == n.which) {
                  h = !0;
                  var u,
                    g,
                    m = k(),
                    v = (p(), f(), i.css("top")),
                    b = t.extend({}, e),
                    w = F(P(e.start));
                  _(),
                    t("body")
                      .css("cursor", s + "-resize")
                      .one("mouseup", function (n) {
                        r("eventResizeStop", this, e, n),
                          t("body").css("cursor", ""),
                          m.stop(),
                          E(),
                          u && d(this, e, u, 0, n);
                        setTimeout(function () {
                          h = !1;
                        }, 0);
                      }),
                    r("eventResizeStart", this, e, n),
                    m.start(function (n, r) {
                      if (n) {
                        var i = L(r),
                          h = L(n);
                        if (((h = Math.max(h, w)), (u = N(h) - N(i)))) {
                          b.end = y(a(e), u, !0);
                          var d = g;
                          (g = (function (t, e, n) {
                            var r = B([t], !0, !1),
                              i = [];
                            return (
                              ot(r, function (t, r) {
                                t.row === e && r.css("top", n), i.push(r[0]);
                              }),
                              i
                            );
                          })(b, o.row, v)),
                            (g = t(g)).find("*").css("cursor", s + "-resize"),
                            d && d.remove(),
                            l(e);
                        } else g && (c(e), g.remove(), (g = null));
                        E(), S(e.start, y(M(e), u));
                      }
                    }, n);
                }
              });
          });
        var n = e.opt,
          r = e.trigger,
          i = e.isEventDraggable,
          o = e.isEventResizable,
          a = e.eventEnd,
          s = e.reportEventElement,
          u = e.eventElementHandlers,
          c = e.showEvents,
          l = e.hideEvents,
          h = e.eventDrop,
          d = e.eventResize,
          p = e.getRowCnt,
          f = e.getColCnt,
          g = (e.getColWidth, e.allDayRow),
          m = e.colLeft,
          v = e.colRight,
          b = e.colContentLeft,
          w = e.colContentRight,
          A = (e.dateToCell, e.getDaySegmentContainer),
          D = e.calendar.formatDates,
          S = e.renderDayOverlay,
          E = e.clearOverlays,
          _ = e.clearSelection,
          k = e.getHoverListener,
          T = e.rangeToSegments,
          R = e.cellToDate,
          L = e.cellToCellOffset,
          N = e.cellOffsetToDayOffset,
          P = e.dateToDayOffset,
          F = e.dayOffsetToCellOffset;
        function B(e, i, o) {
          var a,
            s,
            u = A(),
            c = i ? t("<div/>") : u,
            l = (function (t) {
              for (var e = [], n = 0; n < t.length; n++) {
                var r = W(t[n]);
                e.push.apply(e, r);
              }
              return e;
            })(e);
          return (
            (function (t) {
              for (var e = n("isRTL"), r = 0; r < t.length; r++) {
                var i = t[r],
                  o = (e ? i.isEnd : i.isStart) ? b : m,
                  a = (e ? i.isStart : i.isEnd) ? w : v,
                  s = o(i.leftCol),
                  u = a(i.rightCol);
                (i.left = s), (i.outerWidth = u - s);
              }
            })(l),
            (a = (function (t) {
              for (var e = "", n = 0; n < t.length; n++) e += H(t[n]);
              return e;
            })(l)),
            (c[0].innerHTML = a),
            (s = c.children()),
            i && u.append(s),
            (function (e, n) {
              for (var i = 0; i < e.length; i++) {
                var o = e[i],
                  a = o.event,
                  s = n.eq(i),
                  u = r("eventRender", a, a, s);
                !1 === u
                  ? s.remove()
                  : (u &&
                      !0 !== u &&
                      ((u = t(u).css({ position: "absolute", left: o.left })),
                      s.replaceWith(u),
                      (s = u)),
                    (o.element = s));
              }
            })(l, s),
            ot(l, function (t, e) {
              t.hsides = I(e, !0);
            }),
            ot(l, function (t, e) {
              e.width(Math.max(0, t.outerWidth - t.hsides));
            }),
            ot(l, function (t, e) {
              t.outerHeight = e.outerHeight(!0);
            }),
            (function (t, e) {
              var n = (function (t) {
                  for (
                    var e = p(),
                      n = f(),
                      r = [],
                      i = (function (t) {
                        var e,
                          n,
                          r,
                          i = p(),
                          o = [];
                        for (e = 0; e < t.length; e++)
                          (n = t[e]),
                            (r = n.row),
                            n.element && (o[r] ? o[r].push(n) : (o[r] = [n]));
                        for (r = 0; r < i; r++) o[r] = U(o[r] || []);
                        return o;
                      })(t),
                      o = 0;
                    o < e;
                    o++
                  ) {
                    for (var a = i[o], s = [], u = 0; u < n; u++) s.push(0);
                    for (var c = 0; c < a.length; c++) {
                      var l = a[c];
                      l.top = j(s.slice(l.leftCol, l.rightCol + 1));
                      for (var u = l.leftCol; u <= l.rightCol; u++)
                        s[u] = l.top + l.outerHeight;
                    }
                    r.push(j(s));
                  }
                  return r;
                })(t),
                r = (function () {
                  var t,
                    e = p(),
                    n = [];
                  for (t = 0; t < e; t++)
                    n[t] = g(t).find("div.fc-day-content > div");
                  return n;
                })(),
                i = [];
              if (e) for (var o = 0; o < r.length; o++) r[o].height(n[o]);
              for (var o = 0; o < r.length; o++) i.push(r[o].position().top);
              ot(t, function (t, e) {
                e.css("top", i[t.row] + t.top);
              });
            })(l, o),
            l
          );
        }
        function W(t) {
          for (var e = t.start, n = M(t), r = T(e, n), i = 0; i < r.length; i++)
            r[i].event = t;
          return r;
        }
        function H(t) {
          var e = "",
            r = n("isRTL"),
            a = t.event,
            s = a.url,
            u = ["fc-event", "fc-event-hori"];
          i(a) && u.push("fc-event-draggable"),
            t.isStart && u.push("fc-event-start"),
            t.isEnd && u.push("fc-event-end"),
            (u = u.concat(a.className)),
            a.source && (u = u.concat(a.source.className || []));
          var c = Y(a, n);
          return (
            (e += s ? "<a href='" + q(s) + "'" : "<div"),
            (e +=
              " class='" +
              u.join(" ") +
              "' style='position:absolute;left:" +
              t.left +
              "px;" +
              c +
              "'><div class='fc-event-inner'>"),
            !a.allDay &&
              t.isStart &&
              (e +=
                "<span class='fc-event-time'>" +
                q(D(a.start, a.end, n("timeFormat"))) +
                "</span>"),
            (e +=
              "<span class='fc-event-title'>" +
              q(a.title || "") +
              "</span></div>"),
            t.isEnd &&
              o(a) &&
              (e +=
                "<div class='ui-resizable-handle ui-resizable-" +
                (r ? "w" : "e") +
                "'>&nbsp;&nbsp;&nbsp;</div>"),
            (e += "</" + (s ? "a" : "div") + ">")
          );
        }
        function U(t) {
          for (
            var e = [],
              n = (function (t) {
                t.sort(at);
                for (var e = [], n = 0; n < t.length; n++) {
                  for (var r = t[n], i = 0; i < e.length && it(r, e[i]); i++);
                  e[i] ? e[i].push(r) : (e[i] = [r]);
                }
                return e;
              })(t),
              r = 0;
            r < n.length;
            r++
          )
            e.push.apply(e, n[r]);
          return e;
        }
        function V(t, n, r) {
          i(t) && e.draggableDayEvent(t, n, r),
            r.isEnd && o(t) && e.resizableDayEvent(t, n, r),
            u(t, n);
        }
      }
      function it(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          if (r.leftCol <= t.rightCol && r.rightCol >= t.leftCol) return !0;
        }
        return !1;
      }
      function ot(t, e) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n],
            i = r.element;
          i && e(r, i, n);
        }
      }
      function at(t, e) {
        return (
          e.rightCol - e.leftCol - (t.rightCol - t.leftCol) ||
          e.event.allDay - t.event.allDay ||
          t.event.start - e.event.start ||
          (t.event.title || "").localeCompare(e.event.title)
        );
      }
      function st() {
        var e = this;
        (e.select = function (t, e, n) {
          u(), e || (e = i(t, n));
          o(t, e, n), c(t, e, n);
        }),
          (e.unselect = u),
          (e.reportSelection = c),
          (e.daySelectionMousedown = function (r) {
            var i = e.cellToDate,
              s = e.getIsCellAllDay,
              l = e.getHoverListener(),
              h = e.reportDayClick;
            if (1 == r.which && n("selectable")) {
              u(r);
              var d;
              l.start(function (t, e) {
                a(),
                  t && s(t)
                    ? ((d = [i(e), i(t)].sort(B)), o(d[0], d[1], !0))
                    : (d = null);
              }, r),
                t(document).one("mouseup", function (t) {
                  l.stop(),
                    d &&
                      (+d[0] == +d[1] && h(d[0], !0, t), c(d[0], d[1], !0, t));
                });
            }
          });
        var n = e.opt,
          r = e.trigger,
          i = e.defaultSelectionEnd,
          o = e.renderSelection,
          a = e.clearSelection,
          s = !1;
        function u(t) {
          s && ((s = !1), a(), r("unselect", null, t));
        }
        function c(t, e, n, i) {
          (s = !0), r("select", null, t, e, n, i);
        }
        n("selectable") &&
          n("unselectAuto") &&
          t(document).mousedown(function (e) {
            var r = n("unselectCancel");
            (r && t(e.target).parents(r).length) || u(e);
          });
      }
      function ut() {
        (this.renderOverlay = function (r, i) {
          var o = n.shift();
          o ||
            (o = t(
              "<div class='fc-cell-overlay' style='position:absolute;z-index:3'/>"
            ));
          o[0].parentNode != i[0] && o.appendTo(i);
          return e.push(o.css(r).show()), o;
        }),
          (this.clearOverlays = function () {
            var t;
            for (; (t = e.shift()); ) n.push(t.hide().unbind());
          });
        var e = [],
          n = [];
      }
      function ct(t) {
        var e,
          n,
          r = this;
        (r.build = function () {
          t((e = []), (n = []));
        }),
          (r.cell = function (t, r) {
            var i,
              o = e.length,
              a = n.length,
              s = -1,
              u = -1;
            for (i = 0; i < o; i++)
              if (r >= e[i][0] && r < e[i][1]) {
                s = i;
                break;
              }
            for (i = 0; i < a; i++)
              if (t >= n[i][0] && t < n[i][1]) {
                u = i;
                break;
              }
            return s >= 0 && u >= 0 ? { row: s, col: u } : null;
          }),
          (r.rect = function (t, r, i, o, a) {
            var s = a.offset();
            return {
              top: e[t][0] - s.top,
              left: n[r][0] - s.left,
              width: n[o][1] - n[r][0],
              height: e[i][1] - e[t][0],
            };
          });
      }
      function lt(n) {
        var r, i, o, a;
        function s(t) {
          var r;
          (r = t).pageX === e &&
            ((r.pageX = r.originalEvent.pageX),
            (r.pageY = r.originalEvent.pageY));
          var s = n.cell(t.pageX, t.pageY);
          (!s != !a || (s && (s.row != a.row || s.col != a.col))) &&
            (s
              ? (o || (o = s), i(s, o, s.row - o.row, s.col - o.col))
              : i(s, o),
            (a = s));
        }
        (this.start = function (e, u, c) {
          (i = e),
            (o = a = null),
            n.build(),
            s(u),
            (r = c || "mousemove"),
            t(document).bind(r, s);
        }),
          (this.stop = function () {
            return t(document).unbind(r, s), a;
          });
      }
      function ht(t) {
        var n = this,
          r = {},
          i = {},
          o = {};
        function a(e) {
          return (r[e] = r[e] || t(e));
        }
        (n.left = function (t) {
          return (i[t] = i[t] === e ? a(t).position().left : i[t]);
        }),
          (n.right = function (t) {
            return (o[t] = o[t] === e ? n.left(t) + a(t).width() : o[t]);
          }),
          (n.clear = function () {
            (r = {}), (i = {}), (o = {});
          });
      }
      (i.dateFormatters = L),
        (i.applyAll = V),
        (o.month = function (t, e) {
          var n = this;
          (n.render = function (t, e) {
            e && (v(t, e), t.setDate(1));
            var u = r("firstDay"),
              c = C(t, !0);
            c.setDate(1);
            var l = v(C(c), 1),
              h = C(c);
            y(h, -(h.getDay() - u + 7) % 7), o(h);
            var d = C(l);
            y(d, (7 - d.getDay() + u) % 7), o(d, -1, !0);
            var p = a(),
              f = Math.round(x(d, h) / 7);
            "fixed" == r("weekMode") && (y(d, 7 * (6 - f)), (f = 6));
            (n.title = s(c, r("titleFormat"))),
              (n.start = c),
              (n.end = l),
              (n.visStart = h),
              (n.visEnd = d),
              i(f, p, !0);
          }),
            J.call(n, t, e, "month");
          var r = n.opt,
            i = n.renderBasic,
            o = n.skipHiddenDays,
            a = n.getCellsPerWeek,
            s = e.formatDate;
        }),
        (o.basicWeek = function (t, e) {
          var n = this;
          (n.render = function (t, e) {
            e && y(t, 7 * e);
            var u = y(C(t), -(t.getDay() - r("firstDay") + 7) % 7),
              c = y(C(u), 7),
              l = C(u);
            o(l);
            var h = C(c);
            o(h, -1, !0);
            var d = a();
            (n.start = u),
              (n.end = c),
              (n.visStart = l),
              (n.visEnd = h),
              (n.title = s(l, y(C(h), -1), r("titleFormat"))),
              i(1, d, !1);
          }),
            J.call(n, t, e, "basicWeek");
          var r = n.opt,
            i = n.renderBasic,
            o = n.skipHiddenDays,
            a = n.getCellsPerWeek,
            s = e.formatDates;
        }),
        (o.basicDay = function (t, e) {
          var n = this;
          (n.render = function (t, e) {
            e && y(t, e);
            o(t, e < 0 ? -1 : 1);
            var s = C(t, !0),
              u = y(C(s), 1);
            (n.title = a(t, r("titleFormat"))),
              (n.start = n.visStart = s),
              (n.end = n.visEnd = u),
              i(1, 1, !1);
          }),
            J.call(n, t, e, "basicDay");
          var r = n.opt,
            i = n.renderBasic,
            o = n.skipHiddenDays,
            a = e.formatDate;
        }),
        a({ weekMode: "fixed" }),
        (o.agendaWeek = function (t, e) {
          var n = this;
          (n.render = function (t, e) {
            e && y(t, 7 * e);
            var u = y(C(t), -(t.getDay() - r("firstDay") + 7) % 7),
              c = y(C(u), 7),
              l = C(u);
            o(l);
            var h = C(c);
            o(h, -1, !0);
            var d = a();
            (n.title = s(l, y(C(h), -1), r("titleFormat"))),
              (n.start = u),
              (n.end = c),
              (n.visStart = l),
              (n.visEnd = h),
              i(d);
          }),
            K.call(n, t, e, "agendaWeek");
          var r = n.opt,
            i = n.renderAgenda,
            o = n.skipHiddenDays,
            a = n.getCellsPerWeek,
            s = e.formatDates;
        }),
        (o.agendaDay = function (t, e) {
          var n = this;
          (n.render = function (t, e) {
            e && y(t, e);
            o(t, e < 0 ? -1 : 1);
            var s = C(t, !0),
              u = y(C(s), 1);
            (n.title = a(t, r("titleFormat"))),
              (n.start = n.visStart = s),
              (n.end = n.visEnd = u),
              i(1);
          }),
            K.call(n, t, e, "agendaDay");
          var r = n.opt,
            i = n.renderAgenda,
            o = n.skipHiddenDays,
            a = e.formatDate;
        }),
        a({
          allDaySlot: !0,
          allDayText: "all-day",
          firstHour: 6,
          slotMinutes: 30,
          defaultEventMinutes: 120,
          axisFormat: "h(:mm)tt",
          timeFormat: { agenda: "h:mm{ - h:mm}" },
          dragOpacity: { agenda: 0.5 },
          minTime: 0,
          maxTime: 24,
          slotEventOverlap: !0,
        });
    })(u.a),
      document.addEventListener("DOMContentLoaded", function () {
        var t, e, n, r;
        !(function () {
          var t = Array.from(
            document.querySelectorAll('[data-toggle="collapse"]')
          );
          window.addEventListener(
            "click",
            function (e) {
              var r = e.target;
              if (t.includes(r)) {
                e.preventDefault();
                var i = r.getAttribute("data-target"),
                  o = r.getAttribute("data-text-closed"),
                  a = r.getAttribute("data-text-opened");
                n(i, "toggle"),
                  e.target.classList.contains("collapse-trigger--opened")
                    ? (e.target.classList.remove("collapse-trigger--opened"),
                      (e.target.innerHTML = o))
                    : (e.target.classList.add("collapse-trigger--opened"),
                      (e.target.innerHTML = a));
              }
            },
            !1
          );
          var e = { toggle: "toggle", show: "add", hide: "remove" },
            n = function (t, n) {
              Array.from(document.querySelectorAll(t)).forEach(function (t) {
                t.classList[e[n]]("show");
              });
            };
        })(),
          new i.a({}),
          document.addEventListener(
            "click",
            function (t) {
              if (t.target.matches('[data-js="toggle-element"]')) {
                t.preventDefault();
                var e = document.querySelector(t.target.hash);
                if (!e) return;
                e.classList.toggle("is-hidden");
              }
            },
            !1
          ),
          (function () {
            u.a.fn.select2.amd.require(
              ["select2/dropdown/attachBody"],
              function (t) {
                t.prototype._positionDropdown = function () {
                  var t = u()(window),
                    e = this.$dropdown.hasClass("select2-dropdown--above"),
                    n = this.$dropdown.hasClass("select2-dropdown--below"),
                    r = null,
                    i = this.$container.offset();
                  i.bottom = i.top + this.$container.outerHeight(!1);
                  var o = { height: this.$container.outerHeight(!1) };
                  (o.top = i.top), (o.bottom = i.top + o.height);
                  var a = this.$dropdown.outerHeight(!1),
                    s = t.scrollTop(),
                    c = t.scrollTop() + t.height(),
                    l = s < i.top - a,
                    h = c > i.bottom + a,
                    d = this.$container.outerWidth(),
                    p = u()("body").outerWidth() - (i.left + d);
                  if (this.$element.hasClass("right-align"))
                    var f = { right: p, top: o.bottom };
                  else f = { left: i.left, top: o.bottom };
                  var g = this.$dropdownParent;
                  "static" === g.css("position") && (g = g.offsetParent());
                  var m = { top: 0, left: 0 };
                  (u.a.contains(document.body, g[0]) || g[0].isConnected) &&
                    (m = g.offset()),
                    (f.top -= m.top),
                    (f.left -= m.left),
                    e || n || (r = "below"),
                    h || !l || e
                      ? !l && h && e && (r = "below")
                      : (r = "above"),
                    ("above" == r || (e && "below" !== r)) &&
                      (f.top = o.top - m.top - a),
                    null != r &&
                      (this.$dropdown
                        .removeClass(
                          "select2-dropdown--below select2-dropdown--above"
                        )
                        .addClass("select2-dropdown--" + r),
                      this.$container
                        .removeClass(
                          "select2-container--below select2-container--above"
                        )
                        .addClass("select2-container--" + r)),
                    this.$dropdownContainer.css(f);
                };
              },
              void 0,
              !0
            );
            var t = u()('[data-js="select2-select"]');
            t.length > 0 && t.select2({ minimumResultsForSearch: 1 / 0 });
            var e = u()('[data-js="select2-multiselect"]');
            e.length > 0 && e.select2({ minimumResultsForSearch: 1 / 0 });
            var n = u()('[data-js="select2-multiselect-collapse"]');
            n.length > 0 &&
              (n.select2({ minimumResultsForSearch: 1 / 0, closeOnSelect: !1 }),
              n.on("change", function (t) {
                u()(t.currentTarget)
                  .next()
                  .find(
                    ".select2-selection__rendered li:not(.select2-search--inline)"
                  )
                  .hide(),
                  u()(t.currentTarget).next().find(".counter").remove();
                var e = u()(t.currentTarget)
                  .next()
                  .find(".select2-selection__choice").length;
                u()(t.currentTarget)
                  .next()
                  .find(".select2-selection__rendered")
                  .hide()
                  .after(
                    '<span class="counter select2-selection__rendered"> Selected <span class="counter__pill">' +
                      e +
                      "</span></span>"
                  );
              }),
              n.trigger("change"));
            var r = u()('[data-js="select2-multiselect-checkbox"]');
            r.length > 0 &&
              r.select2MultiCheckboxes({
                templateSelection: function (t, e) {
                  return "Selected " + t.length + " of " + e;
                },
              });
          })(),
          u()("#calendar").fullCalendar({
            events: [
              {
                title: "event1",
                start: "2020-09-01",
                end: "2020-09-21",
                backgroundColor: "#80ACED",
                className: "calendar-item available-false",
              },
              {
                title: "event2",
                start: "2020-09-05",
                end: "2020-09-07",
                className: "calendar-item available-true striped",
              },
              {
                title: "event3",
                start: "2020-09-15",
                backgroundColor: "#E82525",
                className: "calendar-item available-true striped",
              },
              {
                title: "event4",
                start: "2020-09-01",
                end: "2020-09-07",
                className: "calendar-item available-false",
              },
            ],
          }),
          document
            .querySelector(".add__input--btn")
            .addEventListener("click", function () {
              var t = document.createElement("div");
              t.classList.add("field", "grid-full-row", "to-erase"),
                (t.innerHTML =
                  '\n    <label for="tenant__email">EMAIL</label>\n    <div class="input__group">\n      <input type="text" id="tenant__email" class="input">\n      <div class="btn btn-secondary eraser-small delete__input--btn">\n        <i class="icon-close"></i>\n      </div>\n    </div>'),
                this.closest("form").insertBefore(t, this),
                l();
            }),
          l(),
          document.querySelectorAll(".edit-title-btn").forEach(function (t) {
            t.addEventListener("click", function () {
              t.closest(".title-container").classList.remove("is-visible-flex"),
                t.closest(".title-container").classList.add("is-hidden");
              for (
                var e = t.closest(".hideables-parent"), n = 0;
                n < e.children.length;
                n++
              )
                e.children[n].classList.contains("edit-container") &&
                  (e.children[n].classList.remove("is-hidden"),
                  e.children[n].classList.add("is-visible-flex"));
            });
          }),
          document
            .querySelectorAll(".cancel-edittitle-btn")
            .forEach(function (t) {
              t.addEventListener("click", function () {
                t
                  .closest(".edit-container")
                  .classList.remove("is-visible-flex"),
                  t.closest(".edit-container").classList.add("is-hidden");
                for (
                  var e = t.closest(".hideables-parent"), n = 0;
                  n < e.children.length;
                  n++
                )
                  e.children[n].classList.contains("title-container") &&
                    (e.children[n].classList.remove("is-hidden"),
                    e.children[n].classList.add("is-visible-flex"));
              });
            }),
          document
            .querySelectorAll(".accept-edittitle-btn")
            .forEach(function (t) {
              t.addEventListener("click", function () {
                t
                  .closest(".edit-container")
                  .classList.remove("is-visible-flex"),
                  t.closest(".edit-container").classList.add("is-hidden");
                for (
                  var e = t
                      .closest(".input__group")
                      .querySelector(".input-tochange"),
                    n = t.closest(".hideables-parent"),
                    r = 0;
                  r < n.children.length;
                  r++
                )
                  n.children[r].classList.contains("title-container") &&
                    (n.children[r].classList.remove("is-hidden"),
                    n.children[r].classList.add("is-visible-flex"),
                    (n.children[r].querySelector(".title-tochange").innerHTML =
                      e.value));
              });
            }),
          document.querySelector("#requestToggler") &&
            ((t = "#requestToggler"),
            (e = "#attachments"),
            (n = "footer__toggler_active"),
            (r = "request__attachments_shown"),
            document.querySelector(t).addEventListener("click", function (i) {
              i.preventDefault(),
                document.querySelector(t).classList.toggle(n),
                document.querySelector(e).classList.toggle(r);
            }));
      });
  },
  5: function (t, e) {
    Element.prototype.closest ||
      (Element.prototype.closest = function (t) {
        var e = this;
        do {
          if (e.matches(t)) return e;
          e = e.parentElement || e.parentNode;
        } while (null !== e && 1 === e.nodeType);
        return null;
      });
  },
  6: function (t, e) {
    Element.prototype.matches ||
      (Element.prototype.matches =
        Element.prototype.msMatchesSelector ||
        Element.prototype.webkitMatchesSelector);
  },
  7: function (t, e, n) {
    (function (t, r) {
      var i, o;
      function a(t) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      (function () {}.call(this),
        function () {
          null == window.Set &&
            (window.Set = (function () {
              function t() {
                this.clear();
              }
              return (
                (t.prototype.clear = function () {
                  return (this.values = []);
                }),
                (t.prototype.has = function (t) {
                  return -1 !== this.values.indexOf(t);
                }),
                (t.prototype.add = function (t) {
                  return this.has(t) || this.values.push(t), this;
                }),
                (t.prototype.delete = function (t) {
                  var e;
                  return (
                    -1 !== (e = this.values.indexOf(t)) &&
                    (this.values.splice(e, 1), !0)
                  );
                }),
                (t.prototype.forEach = function () {
                  var t;
                  return (t = this.values).forEach.apply(t, arguments);
                }),
                t
              );
            })());
        }.call(this),
        (function (e) {
          function n() {}
          function i(t) {
            if ("object" != a(this))
              throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof t) throw new TypeError("not a function");
            (this._state = 0),
              (this._handled = !1),
              (this._value = void 0),
              (this._deferreds = []),
              h(t, this);
          }
          function o(t, e) {
            for (; 3 === t._state; ) t = t._value;
            return 0 === t._state
              ? void t._deferreds.push(e)
              : ((t._handled = !0),
                void p(function () {
                  var n = 1 === t._state ? e.onFulfilled : e.onRejected;
                  if (null !== n) {
                    var r;
                    try {
                      r = n(t._value);
                    } catch (t) {
                      return void u(e.promise, t);
                    }
                    s(e.promise, r);
                  } else (1 === t._state ? s : u)(e.promise, t._value);
                }));
          }
          function s(t, e) {
            try {
              if (e === t)
                throw new TypeError(
                  "A promise cannot be resolved with itself."
                );
              if (e && ("object" == a(e) || "function" == typeof e)) {
                var n = e.then;
                if (e instanceof i)
                  return (t._state = 3), (t._value = e), void c(t);
                if ("function" == typeof n)
                  return void h(
                    (function (t, e) {
                      return function () {
                        t.apply(e, arguments);
                      };
                    })(n, e),
                    t
                  );
              }
              (t._state = 1), (t._value = e), c(t);
            } catch (e) {
              u(t, e);
            }
          }
          function u(t, e) {
            (t._state = 2), (t._value = e), c(t);
          }
          function c(t) {
            2 === t._state &&
              0 === t._deferreds.length &&
              setTimeout(function () {
                t._handled || f(t._value);
              }, 1);
            for (var e = 0, n = t._deferreds.length; n > e; e++)
              o(t, t._deferreds[e]);
            t._deferreds = null;
          }
          function l(t, e, n) {
            (this.onFulfilled = "function" == typeof t ? t : null),
              (this.onRejected = "function" == typeof e ? e : null),
              (this.promise = n);
          }
          function h(t, e) {
            var n = !1;
            try {
              t(
                function (t) {
                  n || ((n = !0), s(e, t));
                },
                function (t) {
                  n || ((n = !0), u(e, t));
                }
              );
            } catch (t) {
              if (n) return;
              (n = !0), u(e, t);
            }
          }
          var d = setTimeout,
            p =
              ("function" == typeof t && t) ||
              function (t) {
                d(t, 1);
              },
            f = function (t) {
              "undefined" != typeof console &&
                console &&
                console.warn("Possible Unhandled Promise Rejection:", t);
            };
          (i.prototype.catch = function (t) {
            return this.then(null, t);
          }),
            (i.prototype.then = function (t, e) {
              var r = new i(n);
              return o(this, new l(t, e, r)), r;
            }),
            (i.all = function (t) {
              var e = Array.prototype.slice.call(t);
              return new i(function (t, n) {
                function r(o, s) {
                  try {
                    if (s && ("object" == a(s) || "function" == typeof s)) {
                      var u = s.then;
                      if ("function" == typeof u)
                        return void u.call(
                          s,
                          function (t) {
                            r(o, t);
                          },
                          n
                        );
                    }
                    (e[o] = s), 0 == --i && t(e);
                  } catch (t) {
                    n(t);
                  }
                }
                if (0 === e.length) return t([]);
                for (var i = e.length, o = 0; o < e.length; o++) r(o, e[o]);
              });
            }),
            (i.resolve = function (t) {
              return t && "object" == a(t) && t.constructor === i
                ? t
                : new i(function (e) {
                    e(t);
                  });
            }),
            (i.reject = function (t) {
              return new i(function (e, n) {
                n(t);
              });
            }),
            (i.race = function (t) {
              return new i(function (e, n) {
                for (var r = 0, i = t.length; i > r; r++) t[r].then(e, n);
              });
            }),
            (i._setImmediateFn = function (t) {
              p = t;
            }),
            (i._setUnhandledRejectionFn = function (t) {
              f = t;
            }),
            r.exports ? (r.exports = i) : e.Promise || (e.Promise = i);
        })(this),
        function () {
          var t = "object" == a(window.customElements),
            e = "function" == typeof document.registerElement;
          t ||
            e ||
            /**
             * @license
             * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
             */
            ("undefined" == typeof WeakMap &&
              (function () {
                var t = Object.defineProperty,
                  e = Date.now() % 1e9,
                  n = function () {
                    this.name =
                      "__st" + ((1e9 * Math.random()) >>> 0) + e++ + "__";
                  };
                (n.prototype = {
                  set: function (e, n) {
                    var r = e[this.name];
                    return (
                      r && r[0] === e
                        ? (r[1] = n)
                        : t(e, this.name, { value: [e, n], writable: !0 }),
                      this
                    );
                  },
                  get: function (t) {
                    var e;
                    return (e = t[this.name]) && e[0] === t ? e[1] : void 0;
                  },
                  delete: function (t) {
                    var e = t[this.name];
                    return !(!e || e[0] !== t) && ((e[0] = e[1] = void 0), !0);
                  },
                  has: function (t) {
                    var e = t[this.name];
                    return !!e && e[0] === t;
                  },
                }),
                  (window.WeakMap = n);
              })(),
            (function (t) {
              function e(t) {
                v.push(t), m || ((m = !0), l(n));
              }
              function n() {
                m = !1;
                var t = v;
                (v = []),
                  t.sort(function (t, e) {
                    return t.uid_ - e.uid_;
                  });
                var e = !1;
                t.forEach(function (t) {
                  var n = t.takeRecords();
                  (function (t) {
                    t.nodes_.forEach(function (e) {
                      var n = h.get(e);
                      n &&
                        n.forEach(function (e) {
                          e.observer === t && e.removeTransientObservers();
                        });
                    });
                  })(t),
                    n.length && (t.callback_(n, t), (e = !0));
                }),
                  e && n();
              }
              function r(t, e) {
                for (var n = t; n; n = n.parentNode) {
                  var r = h.get(n);
                  if (r)
                    for (var i = 0; i < r.length; i++) {
                      var o = r[i],
                        a = o.options;
                      if (n === t || a.subtree) {
                        var s = e(a);
                        s && o.enqueue(s);
                      }
                    }
                }
              }
              function i(t) {
                (this.callback_ = t),
                  (this.nodes_ = []),
                  (this.records_ = []),
                  (this.uid_ = ++y);
              }
              function o(t, e) {
                (this.type = t),
                  (this.target = e),
                  (this.addedNodes = []),
                  (this.removedNodes = []),
                  (this.previousSibling = null),
                  (this.nextSibling = null),
                  (this.attributeName = null),
                  (this.attributeNamespace = null),
                  (this.oldValue = null);
              }
              function a(t, e) {
                return (f = new o(t, e));
              }
              function s(t) {
                return (
                  g ||
                  (((g = (function (t) {
                    var e = new o(t.type, t.target);
                    return (
                      (e.addedNodes = t.addedNodes.slice()),
                      (e.removedNodes = t.removedNodes.slice()),
                      (e.previousSibling = t.previousSibling),
                      (e.nextSibling = t.nextSibling),
                      (e.attributeName = t.attributeName),
                      (e.attributeNamespace = t.attributeNamespace),
                      (e.oldValue = t.oldValue),
                      e
                    );
                  })(f)).oldValue = t),
                  g)
                );
              }
              function u(t, e) {
                return t === e
                  ? t
                  : g &&
                    (function (t) {
                      return t === g || t === f;
                    })(t)
                  ? g
                  : null;
              }
              function c(t, e, n) {
                (this.observer = t),
                  (this.target = e),
                  (this.options = n),
                  (this.transientObservedNodes = []);
              }
              if (!t.JsMutationObserver) {
                var l,
                  h = new WeakMap();
                if (/Trident|Edge/.test(navigator.userAgent)) l = setTimeout;
                else if (window.setImmediate) l = window.setImmediate;
                else {
                  var d = [],
                    p = String(Math.random());
                  window.addEventListener("message", function (t) {
                    if (t.data === p) {
                      var e = d;
                      (d = []),
                        e.forEach(function (t) {
                          t();
                        });
                    }
                  }),
                    (l = function (t) {
                      d.push(t), window.postMessage(p, "*");
                    });
                }
                var f,
                  g,
                  m = !1,
                  v = [],
                  y = 0;
                (i.prototype = {
                  observe: function (t, e) {
                    if (
                      ((t = (function (t) {
                        return (
                          (window.ShadowDOMPolyfill &&
                            window.ShadowDOMPolyfill.wrapIfNeeded(t)) ||
                          t
                        );
                      })(t)),
                      (!e.childList && !e.attributes && !e.characterData) ||
                        (e.attributeOldValue && !e.attributes) ||
                        (e.attributeFilter &&
                          e.attributeFilter.length &&
                          !e.attributes) ||
                        (e.characterDataOldValue && !e.characterData))
                    )
                      throw new SyntaxError();
                    var n = h.get(t);
                    n || h.set(t, (n = []));
                    for (var r, i = 0; i < n.length; i++)
                      if (n[i].observer === this) {
                        (r = n[i]).removeListeners(), (r.options = e);
                        break;
                      }
                    r ||
                      ((r = new c(this, t, e)), n.push(r), this.nodes_.push(t)),
                      r.addListeners();
                  },
                  disconnect: function () {
                    this.nodes_.forEach(function (t) {
                      for (var e = h.get(t), n = 0; n < e.length; n++) {
                        var r = e[n];
                        if (r.observer === this) {
                          r.removeListeners(), e.splice(n, 1);
                          break;
                        }
                      }
                    }, this),
                      (this.records_ = []);
                  },
                  takeRecords: function () {
                    var t = this.records_;
                    return (this.records_ = []), t;
                  },
                }),
                  (c.prototype = {
                    enqueue: function (t) {
                      var n = this.observer.records_,
                        r = n.length;
                      if (n.length > 0) {
                        var i = u(n[r - 1], t);
                        if (i) return void (n[r - 1] = i);
                      } else e(this.observer);
                      n[r] = t;
                    },
                    addListeners: function () {
                      this.addListeners_(this.target);
                    },
                    addListeners_: function (t) {
                      var e = this.options;
                      e.attributes &&
                        t.addEventListener("DOMAttrModified", this, !0),
                        e.characterData &&
                          t.addEventListener(
                            "DOMCharacterDataModified",
                            this,
                            !0
                          ),
                        e.childList &&
                          t.addEventListener("DOMNodeInserted", this, !0),
                        (e.childList || e.subtree) &&
                          t.addEventListener("DOMNodeRemoved", this, !0);
                    },
                    removeListeners: function () {
                      this.removeListeners_(this.target);
                    },
                    removeListeners_: function (t) {
                      var e = this.options;
                      e.attributes &&
                        t.removeEventListener("DOMAttrModified", this, !0),
                        e.characterData &&
                          t.removeEventListener(
                            "DOMCharacterDataModified",
                            this,
                            !0
                          ),
                        e.childList &&
                          t.removeEventListener("DOMNodeInserted", this, !0),
                        (e.childList || e.subtree) &&
                          t.removeEventListener("DOMNodeRemoved", this, !0);
                    },
                    addTransientObserver: function (t) {
                      if (t !== this.target) {
                        this.addListeners_(t),
                          this.transientObservedNodes.push(t);
                        var e = h.get(t);
                        e || h.set(t, (e = [])), e.push(this);
                      }
                    },
                    removeTransientObservers: function () {
                      var t = this.transientObservedNodes;
                      (this.transientObservedNodes = []),
                        t.forEach(function (t) {
                          this.removeListeners_(t);
                          for (var e = h.get(t), n = 0; n < e.length; n++)
                            if (e[n] === this) {
                              e.splice(n, 1);
                              break;
                            }
                        }, this);
                    },
                    handleEvent: function (t) {
                      switch ((t.stopImmediatePropagation(), t.type)) {
                        case "DOMAttrModified":
                          var e = t.attrName,
                            n = t.relatedNode.namespaceURI,
                            i = t.target;
                          ((u = new a("attributes", i)).attributeName = e),
                            (u.attributeNamespace = n);
                          var o =
                            t.attrChange === MutationEvent.ADDITION
                              ? null
                              : t.prevValue;
                          r(i, function (t) {
                            return !t.attributes ||
                              (t.attributeFilter &&
                                t.attributeFilter.length &&
                                -1 === t.attributeFilter.indexOf(e) &&
                                -1 === t.attributeFilter.indexOf(n))
                              ? void 0
                              : t.attributeOldValue
                              ? s(o)
                              : u;
                          });
                          break;
                        case "DOMCharacterDataModified":
                          var u = a("characterData", (i = t.target));
                          o = t.prevValue;
                          r(i, function (t) {
                            return t.characterData
                              ? t.characterDataOldValue
                                ? s(o)
                                : u
                              : void 0;
                          });
                          break;
                        case "DOMNodeRemoved":
                          this.addTransientObserver(t.target);
                        case "DOMNodeInserted":
                          var c,
                            l,
                            h = t.target;
                          "DOMNodeInserted" === t.type
                            ? ((c = [h]), (l = []))
                            : ((c = []), (l = [h]));
                          var d = h.previousSibling,
                            p = h.nextSibling;
                          ((u = a(
                            "childList",
                            t.target.parentNode
                          )).addedNodes = c),
                            (u.removedNodes = l),
                            (u.previousSibling = d),
                            (u.nextSibling = p),
                            r(t.relatedNode, function (t) {
                              return t.childList ? u : void 0;
                            });
                      }
                      f = g = void 0;
                    },
                  }),
                  (t.JsMutationObserver = i),
                  t.MutationObserver ||
                    ((t.MutationObserver = i), (i._isPolyfilled = !0));
              }
            })(self),
            (function () {
              "use strict";
              if (!window.performance || !window.performance.now) {
                var t = Date.now();
                window.performance = {
                  now: function () {
                    return Date.now() - t;
                  },
                };
              }
              if (
                (window.requestAnimationFrame ||
                  (window.requestAnimationFrame = (function () {
                    var t =
                      window.webkitRequestAnimationFrame ||
                      window.mozRequestAnimationFrame;
                    return t
                      ? function (e) {
                          return t(function () {
                            e(performance.now());
                          });
                        }
                      : function (t) {
                          return window.setTimeout(t, 1e3 / 60);
                        };
                  })()),
                window.cancelAnimationFrame ||
                  (window.cancelAnimationFrame =
                    window.webkitCancelAnimationFrame ||
                    window.mozCancelAnimationFrame ||
                    function (t) {
                      clearTimeout(t);
                    }),
                !(function () {
                  var t = document.createEvent("Event");
                  return (
                    t.initEvent("foo", !0, !0),
                    t.preventDefault(),
                    t.defaultPrevented
                  );
                })())
              ) {
                var e = Event.prototype.preventDefault;
                Event.prototype.preventDefault = function () {
                  this.cancelable &&
                    (e.call(this),
                    Object.defineProperty(this, "defaultPrevented", {
                      get: function () {
                        return !0;
                      },
                      configurable: !0,
                    }));
                };
              }
              var n = /Trident/.test(navigator.userAgent);
              if (
                ((!window.CustomEvent ||
                  (n && "function" != typeof window.CustomEvent)) &&
                  ((window.CustomEvent = function (t, e) {
                    e = e || {};
                    var n = document.createEvent("CustomEvent");
                    return (
                      n.initCustomEvent(
                        t,
                        Boolean(e.bubbles),
                        Boolean(e.cancelable),
                        e.detail
                      ),
                      n
                    );
                  }),
                  (window.CustomEvent.prototype = window.Event.prototype)),
                !window.Event || (n && "function" != typeof window.Event))
              ) {
                var r = window.Event;
                (window.Event = function (t, e) {
                  e = e || {};
                  var n = document.createEvent("Event");
                  return (
                    n.initEvent(t, Boolean(e.bubbles), Boolean(e.cancelable)), n
                  );
                }),
                  (window.Event.prototype = r.prototype);
              }
            })(window.WebComponents),
            (window.CustomElements = window.CustomElements || { flags: {} }),
            (function (t) {
              var e = t.flags,
                n = [];
              (t.addModule = function (t) {
                n.push(t);
              }),
                (t.initializeModules = function () {
                  n.forEach(function (e) {
                    e(t);
                  });
                }),
                (t.hasNative = Boolean(document.registerElement)),
                (t.isIE = /Trident/.test(navigator.userAgent)),
                (t.useNative =
                  !e.register &&
                  t.hasNative &&
                  !window.ShadowDOMPolyfill &&
                  (!window.HTMLImports || window.HTMLImports.useNative));
            })(window.CustomElements),
            window.CustomElements.addModule(function (t) {
              function e(t, e) {
                (function t(e, n, r) {
                  var i = e.firstElementChild;
                  if (!i)
                    for (
                      i = e.firstChild;
                      i && i.nodeType !== Node.ELEMENT_NODE;

                    )
                      i = i.nextSibling;
                  for (; i; )
                    !0 !== n(i, r) && t(i, n, r), (i = i.nextElementSibling);
                  return null;
                })(t, function (t) {
                  return !!e(t) || void n(t, e);
                }),
                  n(t, e);
              }
              function n(t, n) {
                for (var r = t.shadowRoot; r; )
                  e(r, n), (r = r.olderShadowRoot);
              }
              var r = window.HTMLImports
                ? window.HTMLImports.IMPORT_LINK_TYPE
                : "none";
              (t.forDocumentTree = function (t, e) {
                !(function t(e, n, i) {
                  if (((e = window.wrap(e)), !(i.indexOf(e) >= 0))) {
                    i.push(e);
                    for (
                      var o,
                        a = e.querySelectorAll("link[rel=" + r + "]"),
                        s = 0,
                        u = a.length;
                      u > s && (o = a[s]);
                      s++
                    )
                      o.import && t(o.import, n, i);
                    n(e);
                  }
                })(t, e, []);
              }),
                (t.forSubtree = e);
            }),
            window.CustomElements.addModule(function (t) {
              function e(t, e) {
                return n(t, e) || r(t, e);
              }
              function n(e, n) {
                return !!t.upgrade(e, n) || void (n && a(e));
              }
              function r(t, e) {
                f(t, function (t) {
                  return !!n(t, e) || void 0;
                });
              }
              function i(t) {
                y.push(t), v || ((v = !0), setTimeout(o));
              }
              function o() {
                v = !1;
                for (
                  var t, e = y, n = 0, r = e.length;
                  r > n && (t = e[n]);
                  n++
                )
                  t();
                y = [];
              }
              function a(t) {
                m
                  ? i(function () {
                      s(t);
                    })
                  : s(t);
              }
              function s(t) {
                t.__upgraded__ &&
                  !t.__attached &&
                  ((t.__attached = !0),
                  t.attachedCallback && t.attachedCallback());
              }
              function u(t) {
                m
                  ? i(function () {
                      c(t);
                    })
                  : c(t);
              }
              function c(t) {
                t.__upgraded__ &&
                  t.__attached &&
                  ((t.__attached = !1),
                  t.detachedCallback && t.detachedCallback());
              }
              function l(t, n) {
                if (p.dom) {
                  var r = n[0];
                  if (
                    r &&
                    "childList" === r.type &&
                    r.addedNodes &&
                    r.addedNodes
                  ) {
                    for (
                      var i = r.addedNodes[0];
                      i && i !== document && !i.host;

                    )
                      i = i.parentNode;
                    var o =
                      (i &&
                        (i.URL || i._URL || (i.host && i.host.localName))) ||
                      "";
                    o = o.split("/?").shift().split("/").pop();
                  }
                  console.group("mutations (%d) [%s]", n.length, o || "");
                }
                var a = (function (t) {
                  for (var e = t, n = window.wrap(document); e; ) {
                    if (e == n) return !0;
                    e =
                      e.parentNode ||
                      (e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host);
                  }
                })(t);
                n.forEach(function (t) {
                  "childList" === t.type &&
                    (b(t.addedNodes, function (t) {
                      t.localName && e(t, a);
                    }),
                    b(t.removedNodes, function (t) {
                      t.localName &&
                        (function (t) {
                          u(t),
                            f(t, function (t) {
                              u(t);
                            });
                        })(t);
                    }));
                }),
                  p.dom && console.groupEnd();
              }
              function h(t) {
                if (!t.__observer) {
                  var e = new MutationObserver(l.bind(this, t));
                  e.observe(t, { childList: !0, subtree: !0 }),
                    (t.__observer = e);
                }
              }
              function d(t) {
                (t = window.wrap(t)),
                  p.dom &&
                    console.group(
                      "upgradeDocument: ",
                      t.baseURI.split("/").pop()
                    ),
                  e(t, t === window.wrap(document)),
                  h(t),
                  p.dom && console.groupEnd();
              }
              var p = t.flags,
                f = t.forSubtree,
                g = t.forDocumentTree,
                m =
                  window.MutationObserver._isPolyfilled &&
                  p["throttle-attached"];
              (t.hasPolyfillMutations = m), (t.hasThrottledAttached = m);
              var v = !1,
                y = [],
                b = Array.prototype.forEach.call.bind(Array.prototype.forEach),
                w = Element.prototype.createShadowRoot;
              w &&
                (Element.prototype.createShadowRoot = function () {
                  var t = w.call(this);
                  return window.CustomElements.watchShadow(this), t;
                }),
                (t.watchShadow = function (t) {
                  if (t.shadowRoot && !t.shadowRoot.__watched) {
                    p.dom &&
                      console.log("watching shadow-root for: ", t.localName);
                    for (var e = t.shadowRoot; e; )
                      h(e), (e = e.olderShadowRoot);
                  }
                }),
                (t.upgradeDocumentTree = function (t) {
                  g(t, d);
                }),
                (t.upgradeDocument = d),
                (t.upgradeSubtree = r),
                (t.upgradeAll = e),
                (t.attached = a),
                (t.takeRecords = function (t) {
                  for (
                    (t = window.wrap(t)) || (t = window.wrap(document));
                    t.parentNode;

                  )
                    t = t.parentNode;
                  var e = t.__observer;
                  e && (l(t, e.takeRecords()), o());
                });
            }),
            window.CustomElements.addModule(function (t) {
              function e(e, i, o) {
                return (
                  r.upgrade && console.group("upgrade:", e.localName),
                  i.is && e.setAttribute("is", i.is),
                  n(e, i),
                  (e.__upgraded__ = !0),
                  (function (t) {
                    t.createdCallback && t.createdCallback();
                  })(e),
                  o && t.attached(e),
                  t.upgradeSubtree(e, o),
                  r.upgrade && console.groupEnd(),
                  e
                );
              }
              function n(t, e) {
                Object.__proto__
                  ? (t.__proto__ = e.prototype)
                  : ((function (t, e, n) {
                      for (
                        var r = {}, i = e;
                        i !== n && i !== HTMLElement.prototype;

                      ) {
                        for (
                          var o, a = Object.getOwnPropertyNames(i), s = 0;
                          (o = a[s]);
                          s++
                        )
                          r[o] ||
                            (Object.defineProperty(
                              t,
                              o,
                              Object.getOwnPropertyDescriptor(i, o)
                            ),
                            (r[o] = 1));
                        i = Object.getPrototypeOf(i);
                      }
                    })(t, e.prototype, e.native),
                    (t.__proto__ = e.prototype));
              }
              var r = t.flags;
              (t.upgrade = function (n, r) {
                if (
                  ("template" === n.localName &&
                    window.HTMLTemplateElement &&
                    HTMLTemplateElement.decorate &&
                    HTMLTemplateElement.decorate(n),
                  !n.__upgraded__ && n.nodeType === Node.ELEMENT_NODE)
                ) {
                  var i = n.getAttribute("is"),
                    o =
                      t.getRegisteredDefinition(n.localName) ||
                      t.getRegisteredDefinition(i);
                  if (o && ((i && o.tag == n.localName) || (!i && !o.extends)))
                    return e(n, o, r);
                }
              }),
                (t.upgradeWithDefinition = e),
                (t.implementPrototype = n);
            }),
            window.CustomElements.addModule(function (t) {
              function e(t) {
                if (!t.setAttribute._polyfilled) {
                  var e = t.setAttribute;
                  t.setAttribute = function (t, r) {
                    n.call(this, t, r, e);
                  };
                  var r = t.removeAttribute;
                  (t.removeAttribute = function (t) {
                    n.call(this, t, null, r);
                  }),
                    (t.setAttribute._polyfilled = !0);
                }
              }
              function n(t, e, n) {
                t = t.toLowerCase();
                var r = this.getAttribute(t);
                n.apply(this, arguments);
                var i = this.getAttribute(t);
                this.attributeChangedCallback &&
                  i !== r &&
                  this.attributeChangedCallback(t, r, i);
              }
              function r(t) {
                return t ? f[t.toLowerCase()] : void 0;
              }
              function i(t) {
                return function () {
                  return (function (t) {
                    return l(m(t.tag), t);
                  })(t);
                };
              }
              function o(t, e) {
                t && (t = t.toLowerCase()), e && (e = e.toLowerCase());
                var n,
                  i = r(e || t);
                if (i) {
                  if (t == i.tag && e == i.is) return new i.ctor();
                  if (!e && !i.is) return new i.ctor();
                }
                return e
                  ? ((n = o(t)).setAttribute("is", e), n)
                  : ((n = m(t)), t.indexOf("-") >= 0 && h(n, HTMLElement), n);
              }
              function a(t, e) {
                var n = t[e];
                t[e] = function () {
                  var t = n.apply(this, arguments);
                  return c(t), t;
                };
              }
              var s,
                u = (t.isIE, t.upgradeDocumentTree),
                c = t.upgradeAll,
                l = t.upgradeWithDefinition,
                h = t.implementPrototype,
                d = t.useNative,
                p = [
                  "annotation-xml",
                  "color-profile",
                  "font-face",
                  "font-face-src",
                  "font-face-uri",
                  "font-face-format",
                  "font-face-name",
                  "missing-glyph",
                ],
                f = {},
                g = "http://www.w3.org/1999/xhtml",
                m = document.createElement.bind(document),
                v = document.createElementNS.bind(document);
              (s =
                Object.__proto__ || d
                  ? function (t, e) {
                      return t instanceof e;
                    }
                  : function (t, e) {
                      if (t instanceof e) return !0;
                      for (var n = t; n; ) {
                        if (n === e.prototype) return !0;
                        n = n.__proto__;
                      }
                      return !1;
                    }),
                a(Node.prototype, "cloneNode"),
                a(document, "importNode"),
                (document.registerElement = function (n, o) {
                  var a = o || {};
                  if (!n)
                    throw new Error(
                      "document.registerElement: first argument `name` must not be empty"
                    );
                  if (n.indexOf("-") < 0)
                    throw new Error(
                      "document.registerElement: first argument ('name') must contain a dash ('-'). Argument provided was '" +
                        String(n) +
                        "'."
                    );
                  if (
                    (function (t) {
                      for (var e = 0; e < p.length; e++)
                        if (t === p[e]) return !0;
                    })(n)
                  )
                    throw new Error(
                      "Failed to execute 'registerElement' on 'Document': Registration failed for type '" +
                        String(n) +
                        "'. The type name is invalid."
                    );
                  if (r(n))
                    throw new Error(
                      "DuplicateDefinitionError: a type with name '" +
                        String(n) +
                        "' is already registered"
                    );
                  return (
                    a.prototype ||
                      (a.prototype = Object.create(HTMLElement.prototype)),
                    (a.__name = n.toLowerCase()),
                    a.extends && (a.extends = a.extends.toLowerCase()),
                    (a.lifecycle = a.lifecycle || {}),
                    (a.ancestry = (function t(e) {
                      var n = r(e);
                      return n ? t(n.extends).concat([n]) : [];
                    })(a.extends)),
                    (function (t) {
                      for (
                        var e, n = t.extends, r = 0;
                        (e = t.ancestry[r]);
                        r++
                      )
                        n = e.is && e.tag;
                      (t.tag = n || t.__name), n && (t.is = t.__name);
                    })(a),
                    (function (t) {
                      if (!Object.__proto__) {
                        var e = HTMLElement.prototype;
                        if (t.is) {
                          var n = document.createElement(t.tag);
                          e = Object.getPrototypeOf(n);
                        }
                        for (var r, i = t.prototype, o = !1; i; )
                          i == e && (o = !0),
                            (r = Object.getPrototypeOf(i)) && (i.__proto__ = r),
                            (i = r);
                        o ||
                          console.warn(
                            t.tag +
                              " prototype not found in prototype chain for " +
                              t.is
                          ),
                          (t.native = e);
                      }
                    })(a),
                    e(a.prototype),
                    (function (t, e) {
                      f[t] = e;
                    })(a.__name, a),
                    (a.ctor = i(a)),
                    (a.ctor.prototype = a.prototype),
                    (a.prototype.constructor = a.ctor),
                    t.ready && u(document),
                    a.ctor
                  );
                }),
                (document.createElement = o),
                (document.createElementNS = function (t, e, n) {
                  return t === g ? o(e, n) : v(t, e);
                }),
                (t.registry = f),
                (t.instanceof = s),
                (t.reservedTagList = p),
                (t.getRegisteredDefinition = r),
                (document.register = document.registerElement);
            }),
            (function (t) {
              function e() {
                o(window.wrap(document)),
                  (window.CustomElements.ready = !0),
                  (
                    window.requestAnimationFrame ||
                    function (t) {
                      setTimeout(t, 16);
                    }
                  )(function () {
                    setTimeout(function () {
                      (window.CustomElements.readyTime = Date.now()),
                        window.HTMLImports &&
                          (window.CustomElements.elapsed =
                            window.CustomElements.readyTime -
                            window.HTMLImports.readyTime),
                        document.dispatchEvent(
                          new CustomEvent("WebComponentsReady", { bubbles: !0 })
                        );
                    });
                  });
              }
              var n = t.useNative,
                r = t.initializeModules;
              if ((t.isIE, n)) {
                var i = function () {};
                (t.watchShadow = i),
                  (t.upgrade = i),
                  (t.upgradeAll = i),
                  (t.upgradeDocumentTree = i),
                  (t.upgradeSubtree = i),
                  (t.takeRecords = i),
                  (t.instanceof = function (t, e) {
                    return t instanceof e;
                  });
              } else r();
              var o = t.upgradeDocumentTree,
                a = t.upgradeDocument;
              if (
                (window.wrap ||
                  (window.ShadowDOMPolyfill
                    ? ((window.wrap = window.ShadowDOMPolyfill.wrapIfNeeded),
                      (window.unwrap = window.ShadowDOMPolyfill.unwrapIfNeeded))
                    : (window.wrap = window.unwrap = function (t) {
                        return t;
                      })),
                window.HTMLImports &&
                  (window.HTMLImports.__importsParsingHook = function (t) {
                    t.import && a(wrap(t.import));
                  }),
                "complete" === document.readyState || t.flags.eager)
              )
                e();
              else if (
                "interactive" !== document.readyState ||
                window.attachEvent ||
                (window.HTMLImports && !window.HTMLImports.ready)
              ) {
                var s =
                  window.HTMLImports && !window.HTMLImports.ready
                    ? "HTMLImportsLoaded"
                    : "DOMContentLoaded";
                window.addEventListener(s, e);
              } else e();
            })(window.CustomElements));
        }.call(this),
        function () {}.call(this),
        function () {
          (function () {
            (function () {
              this.Trix = {
                VERSION: "1.2.4",
                ZERO_WIDTH_SPACE: "\ufeff",
                NON_BREAKING_SPACE: " ",
                OBJECT_REPLACEMENT_CHARACTER: "￼",
                browser: {
                  composesExistingText: /Android.*Chrome/.test(
                    navigator.userAgent
                  ),
                  forcesObjectResizing: /Trident.*rv:11/.test(
                    navigator.userAgent
                  ),
                  supportsInputEvents: (function () {
                    var t, e, n;
                    if ("undefined" == typeof InputEvent) return !1;
                    for (
                      t = 0,
                        e = (n = ["data", "getTargetRanges", "inputType"])
                          .length;
                      e > t;
                      t++
                    )
                      if (!(n[t] in InputEvent.prototype)) return !1;
                    return !0;
                  })(),
                },
                config: {},
              };
            }.call(this));
          }.call(this));
          var t = this.Trix;
          (function () {
            (function () {
              t.BasicObject = (function () {
                function t() {}
                var e, n, r;
                return (
                  (t.proxyMethod = function (t) {
                    var r, i, o, a, s;
                    return (
                      (o = n(t)),
                      (r = o.name),
                      (a = o.toMethod),
                      (s = o.toProperty),
                      (i = o.optional),
                      (this.prototype[r] = function () {
                        var t, n;
                        return (
                          (t =
                            null != a
                              ? i
                                ? "function" == typeof this[a]
                                  ? this[a]()
                                  : void 0
                                : this[a]()
                              : null != s
                              ? this[s]
                              : void 0),
                          i
                            ? null != (n = null != t ? t[r] : void 0)
                              ? e.call(n, t, arguments)
                              : void 0
                            : ((n = t[r]), e.call(n, t, arguments))
                        );
                      })
                    );
                  }),
                  (n = function (t) {
                    var e, n;
                    if (!(n = t.match(r)))
                      throw new Error(
                        "can't parse @proxyMethod expression: " + t
                      );
                    return (
                      (e = { name: n[4] }),
                      null != n[2]
                        ? (e.toMethod = n[1])
                        : (e.toProperty = n[1]),
                      null != n[3] && (e.optional = !0),
                      e
                    );
                  }),
                  (e = Function.prototype.apply),
                  (r = /^(.+?)(\(\))?(\?)?\.(.+?)$/),
                  t
                );
              })();
            }.call(this),
              function () {
                var e = function (t, e) {
                    function r() {
                      this.constructor = t;
                    }
                    for (var i in e) n.call(e, i) && (t[i] = e[i]);
                    return (
                      (r.prototype = e.prototype),
                      (t.prototype = new r()),
                      (t.__super__ = e.prototype),
                      t
                    );
                  },
                  n = {}.hasOwnProperty;
                t.Object = (function (n) {
                  function r() {
                    this.id = ++i;
                  }
                  var i;
                  return (
                    e(r, n),
                    (i = 0),
                    (r.fromJSONString = function (t) {
                      return this.fromJSON(JSON.parse(t));
                    }),
                    (r.prototype.hasSameConstructorAs = function (t) {
                      return (
                        this.constructor ===
                        (null != t ? t.constructor : void 0)
                      );
                    }),
                    (r.prototype.isEqualTo = function (t) {
                      return this === t;
                    }),
                    (r.prototype.inspect = function () {
                      var t, e, n;
                      return (
                        (t = function () {
                          var t, r, i;
                          for (e in ((i = []),
                          (r =
                            null != (t = this.contentsForInspection())
                              ? t
                              : {})))
                            (n = r[e]), i.push(e + "=" + n);
                          return i;
                        }.call(this)),
                        "#<" +
                          this.constructor.name +
                          ":" +
                          this.id +
                          (t.length ? " " + t.join(", ") : "") +
                          ">"
                      );
                    }),
                    (r.prototype.contentsForInspection = function () {}),
                    (r.prototype.toJSONString = function () {
                      return JSON.stringify(this);
                    }),
                    (r.prototype.toUTF16String = function () {
                      return t.UTF16String.box(this);
                    }),
                    (r.prototype.getCacheKey = function () {
                      return this.id.toString();
                    }),
                    r
                  );
                })(t.BasicObject);
              }.call(this),
              function () {
                t.extend = function (t) {
                  var e, n;
                  for (e in t) (n = t[e]), (this[e] = n);
                  return this;
                };
              }.call(this),
              function () {
                t.extend({
                  defer: function (t) {
                    return setTimeout(t, 1);
                  },
                });
              }.call(this),
              function () {
                var e, n;
                t.extend({
                  normalizeSpaces: function (e) {
                    return e
                      .replace(RegExp("" + t.ZERO_WIDTH_SPACE, "g"), "")
                      .replace(RegExp("" + t.NON_BREAKING_SPACE, "g"), " ");
                  },
                  normalizeNewlines: function (t) {
                    return t.replace(/\r\n/g, "\n");
                  },
                  breakableWhitespacePattern: RegExp(
                    "[^\\S" + t.NON_BREAKING_SPACE + "]"
                  ),
                  squishBreakableWhitespace: function (e) {
                    return e
                      .replace(
                        RegExp("" + t.breakableWhitespacePattern.source, "g"),
                        " "
                      )
                      .replace(/\ {2,}/g, " ");
                  },
                  escapeHTML: function (t) {
                    var e;
                    return (
                      ((e = document.createElement("div")).textContent = t),
                      e.innerHTML
                    );
                  },
                  summarizeStringChange: function (e, r) {
                    var i, o, a, s;
                    return (
                      (e = t.UTF16String.box(e)),
                      (r = t.UTF16String.box(r)).length < e.length
                        ? ((s = (o = n(e, r))[0]), (i = o[1]))
                        : ((i = (a = n(r, e))[0]), (s = a[1])),
                      { added: i, removed: s }
                    );
                  },
                }),
                  (n = function (n, r) {
                    var i, o, a, s, u;
                    return n.isEqualTo(r)
                      ? ["", ""]
                      : ((a = (s = (o = e(n, r)).utf16String.length)
                          ? ((u = o.offset),
                            (i = n.codepoints
                              .slice(0, u)
                              .concat(n.codepoints.slice(u + s))),
                            e(r, t.UTF16String.fromCodepoints(i)))
                          : e(r, n)),
                        [o.utf16String.toString(), a.utf16String.toString()]);
                  }),
                  (e = function (t, e) {
                    var n, r, i;
                    for (
                      n = 0, r = t.length, i = e.length;
                      r > n && t.charAt(n).isEqualTo(e.charAt(n));

                    )
                      n++;
                    for (
                      ;
                      r > n + 1 && t.charAt(r - 1).isEqualTo(e.charAt(i - 1));

                    )
                      r--, i--;
                    return { utf16String: t.slice(n, r), offset: n };
                  });
              }.call(this),
              function () {
                t.extend({
                  copyObject: function (t) {
                    var e, n, r;
                    for (e in (null == t && (t = {}), (n = {}), t))
                      (r = t[e]), (n[e] = r);
                    return n;
                  },
                  objectsAreEqual: function (t, e) {
                    var n;
                    if (
                      (null == t && (t = {}),
                      null == e && (e = {}),
                      Object.keys(t).length !== Object.keys(e).length)
                    )
                      return !1;
                    for (n in t) if (t[n] !== e[n]) return !1;
                    return !0;
                  },
                });
              }.call(this),
              function () {
                var e = [].slice;
                t.extend({
                  arraysAreEqual: function (t, e) {
                    var n, r, i;
                    if (
                      (null == t && (t = []),
                      null == e && (e = []),
                      t.length !== e.length)
                    )
                      return !1;
                    for (r = n = 0, i = t.length; i > n; r = ++n)
                      if (t[r] !== e[r]) return !1;
                    return !0;
                  },
                  arrayStartsWith: function (e, n) {
                    return (
                      null == e && (e = []),
                      null == n && (n = []),
                      t.arraysAreEqual(e.slice(0, n.length), n)
                    );
                  },
                  spliceArray: function () {
                    var t, n, r;
                    return (
                      (n = arguments[0]),
                      (t = 2 <= arguments.length ? e.call(arguments, 1) : []),
                      (r = n.slice(0)).splice.apply(r, t),
                      r
                    );
                  },
                  summarizeArrayChange: function (t, e) {
                    var n, r, i, o, a, s, u, c, l, h, d;
                    for (
                      null == t && (t = []),
                        null == e && (e = []),
                        n = [],
                        h = [],
                        i = new Set(),
                        o = 0,
                        u = t.length;
                      u > o;
                      o++
                    )
                      (d = t[o]), i.add(d);
                    for (r = new Set(), a = 0, c = e.length; c > a; a++)
                      (d = e[a]), r.add(d), i.has(d) || n.push(d);
                    for (s = 0, l = t.length; l > s; s++)
                      (d = t[s]), r.has(d) || h.push(d);
                    return { added: n, removed: h };
                  },
                });
              }.call(this),
              function () {
                var e, n, r, i;
                (e = null),
                  (n = null),
                  (i = null),
                  (r = null),
                  t.extend({
                    getAllAttributeNames: function () {
                      return null != e
                        ? e
                        : (e = t
                            .getTextAttributeNames()
                            .concat(t.getBlockAttributeNames()));
                    },
                    getBlockConfig: function (e) {
                      return t.config.blockAttributes[e];
                    },
                    getBlockAttributeNames: function () {
                      return null != n
                        ? n
                        : (n = Object.keys(t.config.blockAttributes));
                    },
                    getTextConfig: function (e) {
                      return t.config.textAttributes[e];
                    },
                    getTextAttributeNames: function () {
                      return null != i
                        ? i
                        : (i = Object.keys(t.config.textAttributes));
                    },
                    getListAttributeNames: function () {
                      var e, n;
                      return null != r
                        ? r
                        : (r = (function () {
                            var r, i;
                            for (e in ((i = []),
                            (r = t.config.blockAttributes)))
                              null != (n = r[e].listAttribute) && i.push(n);
                            return i;
                          })());
                    },
                  });
              }.call(this),
              function () {
                var e,
                  n,
                  r,
                  i,
                  o,
                  s =
                    [].indexOf ||
                    function (t) {
                      for (var e = 0, n = this.length; n > e; e++)
                        if (e in this && this[e] === t) return e;
                      return -1;
                    };
                (e = document.documentElement),
                  (n =
                    null !=
                    (r =
                      null !=
                      (i =
                        null != (o = e.matchesSelector)
                          ? o
                          : e.webkitMatchesSelector)
                        ? i
                        : e.msMatchesSelector)
                      ? r
                      : e.mozMatchesSelector),
                  t.extend({
                    handleEvent: function (n, r) {
                      var i, o, a, s, u, c, l, h, d, p, f;
                      return (
                        (u = (l = null != r ? r : {}).onElement),
                        (s = l.matchingSelector),
                        (f = l.withCallback),
                        (a = l.inPhase),
                        (c = l.preventDefault),
                        (d = l.times),
                        (i = null != u ? u : e),
                        (h = s),
                        f,
                        (p = "capturing" === a),
                        ((o = function (e) {
                          var n;
                          return (
                            null != d && 0 == --d && o.destroy(),
                            null !=
                              (n = t.findClosestElementFromNode(e.target, {
                                matchingSelector: h,
                              })) && (null != f && f.call(n, e, n), c)
                              ? e.preventDefault()
                              : void 0
                          );
                        }).destroy = function () {
                          return i.removeEventListener(n, o, p);
                        }),
                        i.addEventListener(n, o, p),
                        o
                      );
                    },
                    handleEventOnce: function (e, n) {
                      return (
                        null == n && (n = {}),
                        (n.times = 1),
                        t.handleEvent(e, n)
                      );
                    },
                    triggerEvent: function (n, r) {
                      var i, o, a, s, u, c, l;
                      return (
                        (c = (l = null != r ? r : {}).onElement),
                        (o = l.bubbles),
                        (a = l.cancelable),
                        (i = l.attributes),
                        (s = null != c ? c : e),
                        (o = !1 !== o),
                        (a = !1 !== a),
                        (u = document.createEvent("Events")).initEvent(n, o, a),
                        null != i && t.extend.call(u, i),
                        s.dispatchEvent(u)
                      );
                    },
                    elementMatchesSelector: function (t, e) {
                      return 1 === (null != t ? t.nodeType : void 0)
                        ? n.call(t, e)
                        : void 0;
                    },
                    findClosestElementFromNode: function (e, n) {
                      var r, i, o;
                      for (
                        r = (i = null != n ? n : {}).matchingSelector,
                          o = i.untilNode;
                        null != e && e.nodeType !== Node.ELEMENT_NODE;

                      )
                        e = e.parentNode;
                      if (null != e) {
                        if (null == r) return e;
                        if (e.closest && null == o) return e.closest(r);
                        for (; e && e !== o; ) {
                          if (t.elementMatchesSelector(e, r)) return e;
                          e = e.parentNode;
                        }
                      }
                    },
                    findInnerElement: function (t) {
                      for (; null != t ? t.firstElementChild : void 0; )
                        t = t.firstElementChild;
                      return t;
                    },
                    innerElementIsActive: function (e) {
                      return (
                        document.activeElement !== e &&
                        t.elementContainsNode(e, document.activeElement)
                      );
                    },
                    elementContainsNode: function (t, e) {
                      if (t && e)
                        for (; e; ) {
                          if (e === t) return !0;
                          e = e.parentNode;
                        }
                    },
                    findNodeFromContainerAndOffset: function (t, e) {
                      var n;
                      if (t)
                        return t.nodeType === Node.TEXT_NODE
                          ? t
                          : 0 === e
                          ? null != (n = t.firstChild)
                            ? n
                            : t
                          : t.childNodes.item(e - 1);
                    },
                    findElementFromContainerAndOffset: function (e, n) {
                      var r;
                      return (
                        (r = t.findNodeFromContainerAndOffset(e, n)),
                        t.findClosestElementFromNode(r)
                      );
                    },
                    findChildIndexOfNode: function (t) {
                      var e;
                      if (null != t ? t.parentNode : void 0) {
                        for (e = 0; (t = t.previousSibling); ) e++;
                        return e;
                      }
                    },
                    removeNode: function (t) {
                      var e;
                      return null != t && null != (e = t.parentNode)
                        ? e.removeChild(t)
                        : void 0;
                    },
                    walkTree: function (t, e) {
                      var n, r, i, o, a;
                      return (
                        (r = (i = null != e ? e : {}).onlyNodesOfType),
                        (o = i.usingFilter),
                        (n = i.expandEntityReferences),
                        (a = (function () {
                          switch (r) {
                            case "element":
                              return NodeFilter.SHOW_ELEMENT;
                            case "text":
                              return NodeFilter.SHOW_TEXT;
                            case "comment":
                              return NodeFilter.SHOW_COMMENT;
                            default:
                              return NodeFilter.SHOW_ALL;
                          }
                        })()),
                        document.createTreeWalker(
                          t,
                          a,
                          null != o ? o : null,
                          !0 === n
                        )
                      );
                    },
                    tagName: function (t) {
                      var e;
                      return null != t && null != (e = t.tagName)
                        ? e.toLowerCase()
                        : void 0;
                    },
                    makeElement: function (t, e) {
                      var n, r, i, o, s, u, c, l, h, d;
                      if (
                        (null == e && (e = {}),
                        "object" == a(t)
                          ? (t = (e = t).tagName)
                          : (e = { attributes: e }),
                        (r = document.createElement(t)),
                        null != e.editable &&
                          (null == e.attributes && (e.attributes = {}),
                          (e.attributes.contenteditable = e.editable)),
                        e.attributes)
                      )
                        for (o in (u = e.attributes))
                          (d = u[o]), r.setAttribute(o, d);
                      if (e.style)
                        for (o in (c = e.style)) (d = c[o]), (r.style[o] = d);
                      if (e.data)
                        for (o in (l = e.data)) (d = l[o]), (r.dataset[o] = d);
                      if (e.className)
                        for (
                          i = 0, s = (h = e.className.split(" ")).length;
                          s > i;
                          i++
                        )
                          (n = h[i]), r.classList.add(n);
                      return (
                        e.textContent && (r.textContent = e.textContent), r
                      );
                    },
                    getBlockTagNames: function () {
                      var e, n;
                      return null != t.blockTagNames
                        ? t.blockTagNames
                        : (t.blockTagNames = (function () {
                            var r, i;
                            for (e in ((i = []),
                            (r = t.config.blockAttributes)))
                              (n = r[e].tagName) && i.push(n);
                            return i;
                          })());
                    },
                    nodeIsBlockContainer: function (e) {
                      return t.nodeIsBlockStartComment(
                        null != e ? e.firstChild : void 0
                      );
                    },
                    nodeProbablyIsBlockContainer: function (e) {
                      var n, r;
                      return (
                        (n = t.tagName(e)),
                        s.call(t.getBlockTagNames(), n) >= 0 &&
                          ((r = t.tagName(e.firstChild)),
                          s.call(t.getBlockTagNames(), r) < 0)
                      );
                    },
                    nodeIsBlockStart: function (e, n) {
                      return (null != n ? n : { strict: !0 }).strict
                        ? t.nodeIsBlockStartComment(e)
                        : t.nodeIsBlockStartComment(e) ||
                            (!t.nodeIsBlockStartComment(e.firstChild) &&
                              t.nodeProbablyIsBlockContainer(e));
                    },
                    nodeIsBlockStartComment: function (e) {
                      return (
                        t.nodeIsCommentNode(e) &&
                        "block" === (null != e ? e.data : void 0)
                      );
                    },
                    nodeIsCommentNode: function (t) {
                      return (
                        (null != t ? t.nodeType : void 0) === Node.COMMENT_NODE
                      );
                    },
                    nodeIsCursorTarget: function (e, n) {
                      var r;
                      return (
                        (r = (null != n ? n : {}).name),
                        e
                          ? t.nodeIsTextNode(e)
                            ? e.data === t.ZERO_WIDTH_SPACE
                              ? !r ||
                                e.parentNode.dataset.trixCursorTarget === r
                              : void 0
                            : t.nodeIsCursorTarget(e.firstChild)
                          : void 0
                      );
                    },
                    nodeIsAttachmentElement: function (e) {
                      return t.elementMatchesSelector(
                        e,
                        t.AttachmentView.attachmentSelector
                      );
                    },
                    nodeIsEmptyTextNode: function (e) {
                      return (
                        t.nodeIsTextNode(e) &&
                        "" === (null != e ? e.data : void 0)
                      );
                    },
                    nodeIsTextNode: function (t) {
                      return (
                        (null != t ? t.nodeType : void 0) === Node.TEXT_NODE
                      );
                    },
                  });
              }.call(this),
              function () {
                var e, n, r, i, o;
                (e = t.copyObject),
                  (i = t.objectsAreEqual),
                  t.extend({
                    normalizeRange: (r = function (t) {
                      var e;
                      if (null != t)
                        return (
                          Array.isArray(t) || (t = [t, t]),
                          [n(t[0]), n(null != (e = t[1]) ? e : t[0])]
                        );
                    }),
                    rangeIsCollapsed: function (t) {
                      var e, n, i;
                      if (null != t)
                        return (i = (n = r(t))[0]), (e = n[1]), o(i, e);
                    },
                    rangesAreEqual: function (t, e) {
                      var n, i, a, s, u, c;
                      if (null != t && null != e)
                        return (
                          (i = (a = r(t))[0]),
                          (n = a[1]),
                          (c = (s = r(e))[0]),
                          (u = s[1]),
                          o(i, c) && o(n, u)
                        );
                    },
                  }),
                  (n = function (t) {
                    return "number" == typeof t ? t : e(t);
                  }),
                  (o = function (t, e) {
                    return "number" == typeof t ? t === e : i(t, e);
                  });
              }.call(this),
              function () {
                var e, n, r, i, o, s, u;
                (t.registerElement = function (t, e) {
                  var n, r;
                  return (
                    null == e && (e = {}),
                    (t = t.toLowerCase()),
                    (e = u(e)),
                    (n = (r = s(e)).defaultCSS) &&
                      (delete r.defaultCSS, i(n, t)),
                    o(t, r)
                  );
                }),
                  (i = function (t, e) {
                    return (r(e).textContent = t.replace(/%t/g, e));
                  }),
                  (r = function (t) {
                    var n, r;
                    return (
                      (n = document.createElement("style")).setAttribute(
                        "type",
                        "text/css"
                      ),
                      n.setAttribute("data-tag-name", t.toLowerCase()),
                      (r = e()) && n.setAttribute("nonce", r),
                      document.head.insertBefore(n, document.head.firstChild),
                      n
                    );
                  }),
                  (e = function () {
                    var t;
                    return (t = n("trix-csp-nonce") || n("csp-nonce"))
                      ? t.getAttribute("content")
                      : void 0;
                  }),
                  (n = function (t) {
                    return document.head.querySelector("meta[name=" + t + "]");
                  }),
                  (s = function (t) {
                    var e, n, r;
                    for (e in ((n = {}), t))
                      (r = t[e]),
                        (n[e] = "function" == typeof r ? { value: r } : r);
                    return n;
                  }),
                  (u = (function () {
                    var t;
                    return (
                      (t = function (t) {
                        var e, n, r, i, o;
                        for (
                          e = {},
                            n = 0,
                            i = (o = ["initialize", "connect", "disconnect"])
                              .length;
                          i > n;
                          n++
                        )
                          (e[(r = o[n])] = t[r]), delete t[r];
                        return e;
                      }),
                      window.customElements
                        ? function (e) {
                            var n, r, i, o, a;
                            return (
                              (a = t(e)),
                              (i = a.initialize),
                              (n = a.connect),
                              (r = a.disconnect),
                              i &&
                                ((o = n),
                                (n = function () {
                                  return (
                                    this.initialized ||
                                      ((this.initialized = !0), i.call(this)),
                                    null != o ? o.call(this) : void 0
                                  );
                                })),
                              n && (e.connectedCallback = n),
                              r && (e.disconnectedCallback = r),
                              e
                            );
                          }
                        : function (e) {
                            var n, r, i, o;
                            return (
                              (i = (o = t(e)).initialize),
                              (n = o.connect),
                              (r = o.disconnect),
                              i && (e.createdCallback = i),
                              n && (e.attachedCallback = n),
                              r && (e.detachedCallback = r),
                              e
                            );
                          }
                    );
                  })()),
                  (o = window.customElements
                    ? function (t, e) {
                        var n;
                        return (
                          (n = function () {
                            return "object" ==
                              ("undefined" == typeof Reflect
                                ? "undefined"
                                : a(Reflect))
                              ? Reflect.construct(HTMLElement, [], n)
                              : HTMLElement.apply(this);
                          }),
                          Object.setPrototypeOf(
                            n.prototype,
                            HTMLElement.prototype
                          ),
                          Object.setPrototypeOf(n, HTMLElement),
                          Object.defineProperties(n.prototype, e),
                          window.customElements.define(t, n),
                          n
                        );
                      }
                    : function (t, e) {
                        var n, r;
                        return (
                          (r = Object.create(HTMLElement.prototype, e)),
                          (n = document.registerElement(t, { prototype: r })),
                          Object.defineProperty(r, "constructor", { value: n }),
                          n
                        );
                      });
              }.call(this),
              function () {
                var e, n;
                t.extend({
                  getDOMSelection: function () {
                    var t;
                    return (t = window.getSelection()).rangeCount > 0
                      ? t
                      : void 0;
                  },
                  getDOMRange: function () {
                    var n, r;
                    return (n =
                      null != (r = t.getDOMSelection())
                        ? r.getRangeAt(0)
                        : void 0) && !e(n)
                      ? n
                      : void 0;
                  },
                  setDOMRange: function (e) {
                    var n;
                    return (
                      (n = window.getSelection()).removeAllRanges(),
                      n.addRange(e),
                      t.selectionChangeObserver.update()
                    );
                  },
                }),
                  (e = function (t) {
                    return n(t.startContainer) || n(t.endContainer);
                  }),
                  (n = function (t) {
                    return !Object.getPrototypeOf(t);
                  });
              }.call(this),
              function () {
                var e;
                (e = { "application/x-trix-feature-detection": "test" }),
                  t.extend({
                    dataTransferIsPlainText: function (t) {
                      var e, n, r;
                      return (
                        (r = t.getData("text/plain")),
                        (n = t.getData("text/html")),
                        r && n
                          ? (e = new DOMParser().parseFromString(n, "text/html")
                              .body).textContent === r
                            ? !e.querySelector("*")
                            : void 0
                          : null != r
                          ? r.length
                          : void 0
                      );
                    },
                    dataTransferIsWritable: function (t) {
                      var n, r;
                      if (null != (null != t ? t.setData : void 0)) {
                        for (n in e)
                          if (
                            ((r = e[n]),
                            !(function () {
                              try {
                                return t.setData(n, r), t.getData(n) === r;
                              } catch (t) {}
                            })())
                          )
                            return;
                        return !0;
                      }
                    },
                    keyEventIsKeyboardCommand: /Mac|^iP/.test(
                      navigator.platform
                    )
                      ? function (t) {
                          return t.metaKey;
                        }
                      : function (t) {
                          return t.ctrlKey;
                        },
                  });
              }.call(this),
              function () {}.call(this),
              function () {
                var e,
                  n = function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    for (var i in e) r.call(e, i) && (t[i] = e[i]);
                    return (
                      (n.prototype = e.prototype),
                      (t.prototype = new n()),
                      (t.__super__ = e.prototype),
                      t
                    );
                  },
                  r = {}.hasOwnProperty;
                (e = t.arraysAreEqual),
                  (t.Hash = (function (r) {
                    function i(t) {
                      null == t && (t = {}),
                        (this.values = a(t)),
                        i.__super__.constructor.apply(this, arguments);
                    }
                    var o, a, s, u, c;
                    return (
                      n(i, r),
                      (i.fromCommonAttributesOfObjects = function (t) {
                        var e, n, r, i, a, s;
                        if ((null == t && (t = []), !t.length))
                          return new this();
                        for (
                          r = (e = o(t[0])).getKeys(),
                            n = 0,
                            i = (s = t.slice(1)).length;
                          i > n;
                          n++
                        )
                          (a = s[n]),
                            (r = e.getKeysCommonToHash(o(a))),
                            (e = e.slice(r));
                        return e;
                      }),
                      (i.box = function (t) {
                        return o(t);
                      }),
                      (i.prototype.add = function (t, e) {
                        return this.merge(u(t, e));
                      }),
                      (i.prototype.remove = function (e) {
                        return new t.Hash(a(this.values, e));
                      }),
                      (i.prototype.get = function (t) {
                        return this.values[t];
                      }),
                      (i.prototype.has = function (t) {
                        return t in this.values;
                      }),
                      (i.prototype.merge = function (e) {
                        return new t.Hash(s(this.values, c(e)));
                      }),
                      (i.prototype.slice = function (e) {
                        var n, r, i, o;
                        for (o = {}, n = 0, i = e.length; i > n; n++)
                          (r = e[n]), this.has(r) && (o[r] = this.values[r]);
                        return new t.Hash(o);
                      }),
                      (i.prototype.getKeys = function () {
                        return Object.keys(this.values);
                      }),
                      (i.prototype.getKeysCommonToHash = function (t) {
                        var e, n, r, i, a;
                        for (
                          t = o(t),
                            a = [],
                            e = 0,
                            r = (i = this.getKeys()).length;
                          r > e;
                          e++
                        )
                          (n = i[e]),
                            this.values[n] === t.values[n] && a.push(n);
                        return a;
                      }),
                      (i.prototype.isEqualTo = function (t) {
                        return e(this.toArray(), o(t).toArray());
                      }),
                      (i.prototype.isEmpty = function () {
                        return 0 === this.getKeys().length;
                      }),
                      (i.prototype.toArray = function () {
                        var t, e, n;
                        return (null != this.array
                          ? this.array
                          : (this.array = function () {
                              var r;
                              for (t in ((e = []), (r = this.values)))
                                (n = r[t]), e.push(t, n);
                              return e;
                            }.call(this))
                        ).slice(0);
                      }),
                      (i.prototype.toObject = function () {
                        return a(this.values);
                      }),
                      (i.prototype.toJSON = function () {
                        return this.toObject();
                      }),
                      (i.prototype.contentsForInspection = function () {
                        return { values: JSON.stringify(this.values) };
                      }),
                      (u = function (t, e) {
                        var n;
                        return ((n = {})[t] = e), n;
                      }),
                      (s = function (t, e) {
                        var n, r, i;
                        for (n in ((r = a(t)), e)) (i = e[n]), (r[n] = i);
                        return r;
                      }),
                      (a = function (t, e) {
                        var n, r, i, o, a;
                        for (
                          o = {},
                            a = Object.keys(t).sort(),
                            n = 0,
                            i = a.length;
                          i > n;
                          n++
                        )
                          (r = a[n]) !== e && (o[r] = t[r]);
                        return o;
                      }),
                      (o = function (e) {
                        return e instanceof t.Hash ? e : new t.Hash(e);
                      }),
                      (c = function (e) {
                        return e instanceof t.Hash ? e.values : e;
                      }),
                      i
                    );
                  })(t.Object));
              }.call(this),
              function () {
                t.ObjectGroup = (function () {
                  function t(t, e) {
                    var n, r;
                    (this.objects = null != t ? t : []),
                      (r = e.depth),
                      (n = e.asTree) &&
                        ((this.depth = r),
                        (this.objects = this.constructor.groupObjects(
                          this.objects,
                          { asTree: n, depth: this.depth + 1 }
                        )));
                  }
                  return (
                    (t.groupObjects = function (t, e) {
                      var n, r, i, o, a, s, u, c, l;
                      for (
                        null == t && (t = []),
                          i = (l = null != e ? e : {}).depth,
                          (n = l.asTree) && null == i && (i = 0),
                          c = [],
                          a = 0,
                          s = t.length;
                        s > a;
                        a++
                      ) {
                        if (((u = t[a]), o)) {
                          if (
                            ("function" == typeof u.canBeGrouped
                              ? u.canBeGrouped(i)
                              : void 0) &&
                            ("function" ==
                            typeof (r = o[o.length - 1]).canBeGroupedWith
                              ? r.canBeGroupedWith(u, i)
                              : void 0)
                          ) {
                            o.push(u);
                            continue;
                          }
                          c.push(new this(o, { depth: i, asTree: n })),
                            (o = null);
                        }
                        (
                          "function" == typeof u.canBeGrouped
                            ? u.canBeGrouped(i)
                            : void 0
                        )
                          ? (o = [u])
                          : c.push(u);
                      }
                      return (
                        o && c.push(new this(o, { depth: i, asTree: n })), c
                      );
                    }),
                    (t.prototype.getObjects = function () {
                      return this.objects;
                    }),
                    (t.prototype.getDepth = function () {
                      return this.depth;
                    }),
                    (t.prototype.getCacheKey = function () {
                      var t, e, n, r, i;
                      for (
                        e = ["objectGroup"],
                          t = 0,
                          n = (i = this.getObjects()).length;
                        n > t;
                        t++
                      )
                        (r = i[t]), e.push(r.getCacheKey());
                      return e.join("/");
                    }),
                    t
                  );
                })();
              }.call(this),
              function () {
                var e = function (t, e) {
                    function r() {
                      this.constructor = t;
                    }
                    for (var i in e) n.call(e, i) && (t[i] = e[i]);
                    return (
                      (r.prototype = e.prototype),
                      (t.prototype = new r()),
                      (t.__super__ = e.prototype),
                      t
                    );
                  },
                  n = {}.hasOwnProperty;
                t.ObjectMap = (function (t) {
                  function n(t) {
                    var e, n, r, i, o;
                    for (
                      null == t && (t = []),
                        this.objects = {},
                        r = 0,
                        i = t.length;
                      i > r;
                      r++
                    )
                      (o = t[r]),
                        (n = JSON.stringify(o)),
                        null == (e = this.objects)[n] && (e[n] = o);
                  }
                  return (
                    e(n, t),
                    (n.prototype.find = function (t) {
                      var e;
                      return (e = JSON.stringify(t)), this.objects[e];
                    }),
                    n
                  );
                })(t.BasicObject);
              }.call(this),
              function () {
                t.ElementStore = (function () {
                  function t(t) {
                    this.reset(t);
                  }
                  var e;
                  return (
                    (t.prototype.add = function (t) {
                      var n;
                      return (n = e(t)), (this.elements[n] = t);
                    }),
                    (t.prototype.remove = function (t) {
                      var n, r;
                      return (
                        (n = e(t)),
                        (r = this.elements[n])
                          ? (delete this.elements[n], r)
                          : void 0
                      );
                    }),
                    (t.prototype.reset = function (t) {
                      var e, n, r;
                      for (
                        null == t && (t = []),
                          this.elements = {},
                          n = 0,
                          r = t.length;
                        r > n;
                        n++
                      )
                        (e = t[n]), this.add(e);
                      return t;
                    }),
                    (e = function (t) {
                      return t.dataset.trixStoreKey;
                    }),
                    t
                  );
                })();
              }.call(this),
              function () {}.call(this),
              function () {
                var e = function (t, e) {
                    function r() {
                      this.constructor = t;
                    }
                    for (var i in e) n.call(e, i) && (t[i] = e[i]);
                    return (
                      (r.prototype = e.prototype),
                      (t.prototype = new r()),
                      (t.__super__ = e.prototype),
                      t
                    );
                  },
                  n = {}.hasOwnProperty;
                t.Operation = (function (t) {
                  function n() {
                    return n.__super__.constructor.apply(this, arguments);
                  }
                  return (
                    e(n, t),
                    (n.prototype.isPerforming = function () {
                      return !0 === this.performing;
                    }),
                    (n.prototype.hasPerformed = function () {
                      return !0 === this.performed;
                    }),
                    (n.prototype.hasSucceeded = function () {
                      return this.performed && this.succeeded;
                    }),
                    (n.prototype.hasFailed = function () {
                      return this.performed && !this.succeeded;
                    }),
                    (n.prototype.getPromise = function () {
                      return null != this.promise
                        ? this.promise
                        : (this.promise = new Promise(
                            (function (t) {
                              return function (e, n) {
                                return (
                                  (t.performing = !0),
                                  t.perform(function (r, i) {
                                    return (
                                      (t.succeeded = r),
                                      (t.performing = !1),
                                      (t.performed = !0),
                                      t.succeeded ? e(i) : n(i)
                                    );
                                  })
                                );
                              };
                            })(this)
                          ));
                    }),
                    (n.prototype.perform = function (t) {
                      return t(!1);
                    }),
                    (n.prototype.release = function () {
                      var t;
                      return (
                        null != (t = this.promise) &&
                          "function" == typeof t.cancel &&
                          t.cancel(),
                        (this.promise = null),
                        (this.performing = null),
                        (this.performed = null),
                        (this.succeeded = null)
                      );
                    }),
                    n.proxyMethod("getPromise().then"),
                    n.proxyMethod("getPromise().catch"),
                    n
                  );
                })(t.BasicObject);
              }.call(this),
              function () {
                var e,
                  n,
                  r,
                  i,
                  o,
                  a = {}.hasOwnProperty;
                (t.UTF16String = (function (t) {
                  function e(t, e) {
                    (this.ucs2String = t),
                      (this.codepoints = e),
                      (this.length = this.codepoints.length),
                      (this.ucs2Length = this.ucs2String.length);
                  }
                  return (
                    (function (t, e) {
                      function n() {
                        this.constructor = t;
                      }
                      for (var r in e) a.call(e, r) && (t[r] = e[r]);
                      (n.prototype = e.prototype),
                        (t.prototype = new n()),
                        (t.__super__ = e.prototype);
                    })(e, t),
                    (e.box = function (t) {
                      return (
                        null == t && (t = ""),
                        t instanceof this
                          ? t
                          : this.fromUCS2String(
                              null != t ? t.toString() : void 0
                            )
                      );
                    }),
                    (e.fromUCS2String = function (t) {
                      return new this(t, i(t));
                    }),
                    (e.fromCodepoints = function (t) {
                      return new this(o(t), t);
                    }),
                    (e.prototype.offsetToUCS2Offset = function (t) {
                      return o(this.codepoints.slice(0, Math.max(0, t))).length;
                    }),
                    (e.prototype.offsetFromUCS2Offset = function (t) {
                      return i(this.ucs2String.slice(0, Math.max(0, t))).length;
                    }),
                    (e.prototype.slice = function () {
                      var t;
                      return this.constructor.fromCodepoints(
                        (t = this.codepoints).slice.apply(t, arguments)
                      );
                    }),
                    (e.prototype.charAt = function (t) {
                      return this.slice(t, t + 1);
                    }),
                    (e.prototype.isEqualTo = function (t) {
                      return (
                        this.constructor.box(t).ucs2String === this.ucs2String
                      );
                    }),
                    (e.prototype.toJSON = function () {
                      return this.ucs2String;
                    }),
                    (e.prototype.getCacheKey = function () {
                      return this.ucs2String;
                    }),
                    (e.prototype.toString = function () {
                      return this.ucs2String;
                    }),
                    e
                  );
                })(t.BasicObject)),
                  (e =
                    1 ===
                    ("function" == typeof Array.from
                      ? Array.from("👼").length
                      : void 0)),
                  (n =
                    null !=
                    ("function" == typeof " ".codePointAt
                      ? " ".codePointAt(0)
                      : void 0)),
                  (r =
                    " 👼" ===
                    ("function" == typeof String.fromCodePoint
                      ? String.fromCodePoint(32, 128124)
                      : void 0)),
                  (i =
                    e && n
                      ? function (t) {
                          return Array.from(t).map(function (t) {
                            return t.codePointAt(0);
                          });
                        }
                      : function (t) {
                          var e, n, r, i, o;
                          for (i = [], e = 0, r = t.length; r > e; )
                            (o = t.charCodeAt(e++)) >= 55296 &&
                              56319 >= o &&
                              r > e &&
                              (56320 == (64512 & (n = t.charCodeAt(e++)))
                                ? (o = ((1023 & o) << 10) + (1023 & n) + 65536)
                                : e--),
                              i.push(o);
                          return i;
                        }),
                  (o = r
                    ? function (t) {
                        return String.fromCodePoint.apply(String, t);
                      }
                    : function (t) {
                        var e, n;
                        return (function () {
                          var r, i, o;
                          for (o = [], r = 0, i = t.length; i > r; r++)
                            (n = t[r]),
                              (e = ""),
                              n > 65535 &&
                                ((n -= 65536),
                                (e += String.fromCharCode(
                                  ((n >>> 10) & 1023) | 55296
                                )),
                                (n = 56320 | (1023 & n))),
                              o.push(e + String.fromCharCode(n));
                          return o;
                        })().join("");
                      });
              }.call(this),
              function () {}.call(this),
              function () {}.call(this),
              function () {
                t.config.lang = {
                  attachFiles: "Attach Files",
                  bold: '<i class="icon-editor-bold"></i>',
                  bullets: '<i class="icon-editor-ol"></i>',
                  byte: "Byte",
                  bytes: "Bytes",
                  captionPlaceholder: "Add a caption…",
                  code: "Code",
                  heading1: "Heading",
                  indent: "Increase Level",
                  italic: '<i class="icon-editor-italic"></i>',
                  link: "Link",
                  numbers: '<i class="icon-editor-ul"></i>',
                  outdent: "Decrease Level",
                  quote: "Quote",
                  redo: "Redo",
                  remove: "Remove",
                  strike: "Strikethrough",
                  underline: '<i class="icon-editor-underline"></i>',
                  undo: "Undo",
                  unlink: "Unlink",
                  url: "URL",
                  urlPlaceholder: "Enter a URL…",
                  GB: "GB",
                  KB: "KB",
                  MB: "MB",
                  PB: "PB",
                  TB: "TB",
                };
              }.call(this),
              function () {
                t.config.css = {
                  attachment: "attachment",
                  attachmentCaption: "attachment__caption",
                  attachmentCaptionEditor: "attachment__caption-editor",
                  attachmentMetadata: "attachment__metadata",
                  attachmentMetadataContainer: "attachment__metadata-container",
                  attachmentName: "attachment__name",
                  attachmentProgress: "attachment__progress",
                  attachmentSize: "attachment__size",
                  attachmentToolbar: "attachment__toolbar",
                  attachmentGallery: "attachment-gallery",
                };
              }.call(this),
              function () {
                var e;
                t.config.blockAttributes = e = {
                  default: { tagName: "div", parse: !1 },
                  quote: { tagName: "blockquote", nestable: !0 },
                  heading1: {
                    tagName: "h1",
                    terminal: !0,
                    breakOnReturn: !0,
                    group: !1,
                  },
                  code: {
                    tagName: "pre",
                    terminal: !0,
                    text: { plaintext: !0 },
                  },
                  bulletList: { tagName: "ul", parse: !1 },
                  bullet: {
                    tagName: "li",
                    listAttribute: "bulletList",
                    group: !1,
                    nestable: !0,
                    test: function (n) {
                      return (
                        t.tagName(n.parentNode) ===
                        e[this.listAttribute].tagName
                      );
                    },
                  },
                  numberList: { tagName: "ol", parse: !1 },
                  number: {
                    tagName: "li",
                    listAttribute: "numberList",
                    group: !1,
                    nestable: !0,
                    test: function (n) {
                      return (
                        t.tagName(n.parentNode) ===
                        e[this.listAttribute].tagName
                      );
                    },
                  },
                  attachmentGallery: {
                    tagName: "div",
                    exclusive: !0,
                    terminal: !0,
                    parse: !1,
                    group: !1,
                  },
                };
              }.call(this),
              function () {
                var e, n;
                (e = t.config.lang),
                  (n = [e.bytes, e.KB, e.MB, e.GB, e.TB, e.PB]),
                  (t.config.fileSize = {
                    prefix: "IEC",
                    precision: 2,
                    formatter: function (t) {
                      var r, i;
                      switch (t) {
                        case 0:
                          return "0 " + e.bytes;
                        case 1:
                          return "1 " + e.byte;
                        default:
                          return (
                            (r = function () {
                              switch (this.prefix) {
                                case "SI":
                                  return 1e3;
                                case "IEC":
                                  return 1024;
                              }
                            }.call(this)),
                            (i = Math.floor(Math.log(t) / Math.log(r))),
                            (t / Math.pow(r, i))
                              .toFixed(this.precision)
                              .replace(/0*$/, "")
                              .replace(/\.$/, "") +
                              " " +
                              n[i]
                          );
                      }
                    },
                  });
              }.call(this),
              function () {
                t.config.textAttributes = {
                  bold: {
                    tagName: "strong",
                    inheritable: !0,
                    parser: function (t) {
                      var e;
                      return (
                        "bold" ===
                          (e = window.getComputedStyle(t)).fontWeight ||
                        e.fontWeight >= 600
                      );
                    },
                  },
                  italic: {
                    tagName: "em",
                    inheritable: !0,
                    parser: function (t) {
                      return "italic" === window.getComputedStyle(t).fontStyle;
                    },
                  },
                  underline: {
                    tagName: "u",
                    inheritable: !0,
                    parser: function (t) {
                      return (
                        "underline" ===
                        window.getComputedStyle(t).textDecoration
                      );
                    },
                  },
                  frozen: { style: { backgroundColor: "highlight" } },
                };
              }.call(this),
              function () {
                var e, n, r;
                (r = [
                  "contenteditable",
                  "data-trix-id",
                  "data-trix-store-key",
                  "data-trix-mutable",
                  "data-trix-placeholder",
                  "tabindex",
                ]),
                  (n = "data-trix-serialized-attributes"),
                  (e = new RegExp("\x3c!--block--\x3e", "g")),
                  t.extend({
                    serializers: {
                      "application/json": function (e) {
                        var n;
                        if (e instanceof t.Document) n = e;
                        else {
                          if (!(e instanceof HTMLElement))
                            throw new Error("unserializable object");
                          n = t.Document.fromHTML(e.innerHTML);
                        }
                        return n.toSerializableDocument().toJSONString();
                      },
                      "text/html": function (i) {
                        var o, a, s, u, c, l, h, d, p, f, g, m, v, y, b, w, A;
                        if (i instanceof t.Document)
                          u = t.DocumentView.render(i);
                        else {
                          if (!(i instanceof HTMLElement))
                            throw new Error("unserializable object");
                          u = i.cloneNode(!0);
                        }
                        for (
                          c = 0,
                            p = (y = u.querySelectorAll(
                              "[data-trix-serialize=false]"
                            )).length;
                          p > c;
                          c++
                        )
                          (s = y[c]), t.removeNode(s);
                        for (l = 0, f = r.length; f > l; l++)
                          for (
                            o = r[l],
                              h = 0,
                              g = (b = u.querySelectorAll("[" + o + "]"))
                                .length;
                            g > h;
                            h++
                          )
                            (s = b[h]).removeAttribute(o);
                        for (
                          d = 0,
                            m = (w = u.querySelectorAll(
                              "[data-trix-serialized-attributes]"
                            )).length;
                          m > d;
                          d++
                        ) {
                          s = w[d];
                          try {
                            for (v in ((a = JSON.parse(s.getAttribute(n))),
                            s.removeAttribute(n),
                            a))
                              (A = a[v]), s.setAttribute(v, A);
                          } catch (t) {}
                        }
                        return u.innerHTML.replace(e, "");
                      },
                    },
                    deserializers: {
                      "application/json": function (e) {
                        return t.Document.fromJSONString(e);
                      },
                      "text/html": function (e) {
                        return t.Document.fromHTML(e);
                      },
                    },
                    serializeToContentType: function (e, n) {
                      var r;
                      if ((r = t.serializers[n])) return r(e);
                      throw new Error("unknown content type: " + n);
                    },
                    deserializeFromContentType: function (e, n) {
                      var r;
                      if ((r = t.deserializers[n])) return r(e);
                      throw new Error("unknown content type: " + n);
                    },
                  });
              }.call(this),
              function () {
                var e;
                (e = t.config.lang),
                  (t.config.toolbar = {
                    getDefaultHTML: function () {
                      return (
                        '<div class="trix-button-row">\n  <span class="trix-button-group trix-button-group--text-tools" data-trix-button-group="text-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-bold" data-trix-attribute="bold" data-trix-key="b" tabindex="-1">' +
                        e.bold +
                        '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-italic" data-trix-attribute="italic" data-trix-key="i" tabindex="-1">' +
                        e.italic +
                        '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-underline" data-trix-attribute="underline" data-trix-key="u" tabindex="-1">' +
                        e.underline +
                        '</button>\n  </span>\n\n  <span class="trix-button-group trix-button-group--block-tools" data-trix-button-group="block-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-bullet-list" data-trix-attribute="bullet" tabindex="-1">' +
                        e.bullets +
                        '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-number-list" data-trix-attribute="number" tabindex="-1">' +
                        e.numbers +
                        '</button>\n  </span>\n\n  <span class="trix-button-group-spacer"></span>\n</div>\n\n<div class="trix-dialogs" data-trix-dialogs>\n  <div class="trix-dialog trix-dialog--link" data-trix-dialog="href" data-trix-dialog-attribute="href">\n    <div class="trix-dialog__link-fields">\n      <input type="url" name="href" class="trix-input trix-input--dialog" placeholder="' +
                        e.urlPlaceholder +
                        '" aria-label="' +
                        e.url +
                        '" required data-trix-input>\n      <div class="trix-button-group">\n        <input type="button" class="trix-button trix-button--dialog" value="' +
                        e.link +
                        '" data-trix-method="setAttribute">\n        <input type="button" class="trix-button trix-button--dialog" value="' +
                        e.unlink +
                        '" data-trix-method="removeAttribute">\n      </div>\n    </div>\n  </div>\n</div>'
                      );
                    },
                  });
              }.call(this),
              function () {
                t.config.undoInterval = 5e3;
              }.call(this),
              function () {
                t.config.attachments = {
                  preview: {
                    presentation: "gallery",
                    caption: { name: !0, size: !0 },
                  },
                  file: { caption: { size: !0 } },
                };
              }.call(this),
              function () {
                t.config.keyNames = {
                  8: "backspace",
                  9: "tab",
                  13: "return",
                  27: "escape",
                  37: "left",
                  39: "right",
                  46: "delete",
                  68: "d",
                  72: "h",
                  79: "o",
                };
              }.call(this),
              function () {
                t.config.input = {
                  level2Enabled: !0,
                  getLevel: function () {
                    return this.level2Enabled && t.browser.supportsInputEvents
                      ? 2
                      : 0;
                  },
                  pickFiles: function (e) {
                    var n;
                    return (
                      (n = t.makeElement("input", {
                        type: "file",
                        multiple: !0,
                        hidden: !0,
                        id: this.fileInputId,
                      })).addEventListener("change", function () {
                        return e(n.files), t.removeNode(n);
                      }),
                      t.removeNode(document.getElementById(this.fileInputId)),
                      document.body.appendChild(n),
                      n.click()
                    );
                  },
                  fileInputId: "trix-file-input-" + Date.now().toString(16),
                };
              }.call(this),
              function () {}.call(this),
              function () {
                t.registerElement("trix-toolbar", {
                  defaultCSS:
                    "%t {\n  display: block;\n}\n\n%t {\n  white-space: nowrap;\n}\n\n%t [data-trix-dialog] {\n  display: none;\n}\n\n%t [data-trix-dialog][data-trix-active] {\n  display: block;\n}\n\n%t [data-trix-dialog] [data-trix-validate]:invalid {\n  background-color: #ffdddd;\n}",
                  initialize: function () {
                    return "" === this.innerHTML
                      ? (this.innerHTML = t.config.toolbar.getDefaultHTML())
                      : void 0;
                  },
                });
              }.call(this),
              function () {
                var e = function (t, e) {
                    function r() {
                      this.constructor = t;
                    }
                    for (var i in e) n.call(e, i) && (t[i] = e[i]);
                    return (
                      (r.prototype = e.prototype),
                      (t.prototype = new r()),
                      (t.__super__ = e.prototype),
                      t
                    );
                  },
                  n = {}.hasOwnProperty,
                  r =
                    [].indexOf ||
                    function (t) {
                      for (var e = 0, n = this.length; n > e; e++)
                        if (e in this && this[e] === t) return e;
                      return -1;
                    };
                t.ObjectView = (function (n) {
                  function i(t, e) {
                    (this.object = t),
                      (this.options = null != e ? e : {}),
                      (this.childViews = []),
                      (this.rootView = this);
                  }
                  return (
                    e(i, n),
                    (i.prototype.getNodes = function () {
                      var t, e, n, r, i;
                      for (
                        null == this.nodes && (this.nodes = this.createNodes()),
                          i = [],
                          t = 0,
                          e = (r = this.nodes).length;
                        e > t;
                        t++
                      )
                        (n = r[t]), i.push(n.cloneNode(!0));
                      return i;
                    }),
                    (i.prototype.invalidate = function () {
                      var t;
                      return (
                        (this.nodes = null),
                        (this.childViews = []),
                        null != (t = this.parentView) ? t.invalidate() : void 0
                      );
                    }),
                    (i.prototype.invalidateViewForObject = function (t) {
                      var e;
                      return null != (e = this.findViewForObject(t))
                        ? e.invalidate()
                        : void 0;
                    }),
                    (i.prototype.findOrCreateCachedChildView = function (t, e) {
                      var n;
                      return (
                        (n = this.getCachedViewForObject(e))
                          ? this.recordChildView(n)
                          : ((n = this.createChildView.apply(this, arguments)),
                            this.cacheViewForObject(n, e)),
                        n
                      );
                    }),
                    (i.prototype.createChildView = function (e, n, r) {
                      var i;
                      return (
                        null == r && (r = {}),
                        n instanceof t.ObjectGroup &&
                          ((r.viewClass = e), (e = t.ObjectGroupView)),
                        (i = new e(n, r)),
                        this.recordChildView(i)
                      );
                    }),
                    (i.prototype.recordChildView = function (t) {
                      return (
                        (t.parentView = this),
                        (t.rootView = this.rootView),
                        this.childViews.push(t),
                        t
                      );
                    }),
                    (i.prototype.getAllChildViews = function () {
                      var t, e, n, r, i;
                      for (
                        i = [], e = 0, n = (r = this.childViews).length;
                        n > e;
                        e++
                      )
                        (t = r[e]),
                          i.push(t),
                          (i = i.concat(t.getAllChildViews()));
                      return i;
                    }),
                    (i.prototype.findElement = function () {
                      return this.findElementForObject(this.object);
                    }),
                    (i.prototype.findElementForObject = function (t) {
                      var e;
                      return (e = null != t ? t.id : void 0)
                        ? this.rootView.element.querySelector(
                            "[data-trix-id='" + e + "']"
                          )
                        : void 0;
                    }),
                    (i.prototype.findViewForObject = function (t) {
                      var e, n, r, i;
                      for (
                        e = 0, n = (r = this.getAllChildViews()).length;
                        n > e;
                        e++
                      )
                        if ((i = r[e]).object === t) return i;
                    }),
                    (i.prototype.getViewCache = function () {
                      return this.rootView !== this
                        ? this.rootView.getViewCache()
                        : this.isViewCachingEnabled()
                        ? null != this.viewCache
                          ? this.viewCache
                          : (this.viewCache = {})
                        : void 0;
                    }),
                    (i.prototype.isViewCachingEnabled = function () {
                      return !1 !== this.shouldCacheViews;
                    }),
                    (i.prototype.enableViewCaching = function () {
                      return (this.shouldCacheViews = !0);
                    }),
                    (i.prototype.disableViewCaching = function () {
                      return (this.shouldCacheViews = !1);
                    }),
                    (i.prototype.getCachedViewForObject = function (t) {
                      var e;
                      return null != (e = this.getViewCache())
                        ? e[t.getCacheKey()]
                        : void 0;
                    }),
                    (i.prototype.cacheViewForObject = function (t, e) {
                      var n;
                      return null != (n = this.getViewCache())
                        ? (n[e.getCacheKey()] = t)
                        : void 0;
                    }),
                    (i.prototype.garbageCollectCachedViews = function () {
                      var t, e, n, i, o, a;
                      if ((t = this.getViewCache())) {
                        for (e in ((a = this.getAllChildViews().concat(this)),
                        (n = (function () {
                          var t, e, n;
                          for (n = [], t = 0, e = a.length; e > t; t++)
                            (o = a[t]), n.push(o.object.getCacheKey());
                          return n;
                        })()),
                        (i = []),
                        t))
                          r.call(n, e) < 0 && i.push(delete t[e]);
                        return i;
                      }
                    }),
                    i
                  );
                })(t.BasicObject);
              }.call(this),
              function () {
                var e = function (t, e) {
                    function r() {
                      this.constructor = t;
                    }
                    for (var i in e) n.call(e, i) && (t[i] = e[i]);
                    return (
                      (r.prototype = e.prototype),
                      (t.prototype = new r()),
                      (t.__super__ = e.prototype),
                      t
                    );
                  },
                  n = {}.hasOwnProperty;
                t.ObjectGroupView = (function (t) {
                  function n() {
                    n.__super__.constructor.apply(this, arguments),
                      (this.objectGroup = this.object),
                      (this.viewClass = this.options.viewClass),
                      delete this.options.viewClass;
                  }
                  return (
                    e(n, t),
                    (n.prototype.getChildViews = function () {
                      var t, e, n, r;
                      if (!this.childViews.length)
                        for (
                          t = 0, e = (r = this.objectGroup.getObjects()).length;
                          e > t;
                          t++
                        )
                          (n = r[t]),
                            this.findOrCreateCachedChildView(
                              this.viewClass,
                              n,
                              this.options
                            );
                      return this.childViews;
                    }),
                    (n.prototype.createNodes = function () {
                      var t, e, n, r, i, o, a, s;
                      for (
                        t = this.createContainerElement(),
                          e = 0,
                          r = (a = this.getChildViews()).length;
                        r > e;
                        e++
                      )
                        for (
                          n = 0, i = (s = a[e].getNodes()).length;
                          i > n;
                          n++
                        )
                          (o = s[n]), t.appendChild(o);
                      return [t];
                    }),
                    (n.prototype.createContainerElement = function (t) {
                      return (
                        null == t && (t = this.objectGroup.getDepth()),
                        this.getChildViews()[0].createContainerElement(t)
                      );
                    }),
                    n
                  );
                })(t.ObjectView);
              }.call(this),
              function () {
                var e = function (t, e) {
                    function r() {
                      this.constructor = t;
                    }
                    for (var i in e) n.call(e, i) && (t[i] = e[i]);
                    return (
                      (r.prototype = e.prototype),
                      (t.prototype = new r()),
                      (t.__super__ = e.prototype),
                      t
                    );
                  },
                  n = {}.hasOwnProperty;
                t.Controller = (function (t) {
                  function n() {
                    return n.__super__.constructor.apply(this, arguments);
                  }
                  return e(n, t), n;
                })(t.BasicObject);
              }.call(this),
              function () {
                var e,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s = function (t, e) {
                    return function () {
                      return t.apply(e, arguments);
                    };
                  },
                  u = function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    for (var r in e) c.call(e, r) && (t[r] = e[r]);
                    return (
                      (n.prototype = e.prototype),
                      (t.prototype = new n()),
                      (t.__super__ = e.prototype),
                      t
                    );
                  },
                  c = {}.hasOwnProperty,
                  l =
                    [].indexOf ||
                    function (t) {
                      for (var e = 0, n = this.length; n > e; e++)
                        if (e in this && this[e] === t) return e;
                      return -1;
                    };
                (e = t.findClosestElementFromNode),
                  (r = t.nodeIsEmptyTextNode),
                  (n = t.nodeIsBlockStartComment),
                  (i = t.normalizeSpaces),
                  (o = t.summarizeStringChange),
                  (a = t.tagName),
                  (t.MutationObserver = (function (t) {
                    function c(t) {
                      (this.element = t),
                        (this.didMutate = s(this.didMutate, this)),
                        (this.observer = new window.MutationObserver(
                          this.didMutate
                        )),
                        this.start();
                    }
                    var h, d, p;
                    return (
                      u(c, t),
                      "[" + (d = "data-trix-mutable") + "]",
                      (p = {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        characterDataOldValue: !0,
                        subtree: !0,
                      }),
                      (c.prototype.start = function () {
                        return (
                          this.reset(), this.observer.observe(this.element, p)
                        );
                      }),
                      (c.prototype.stop = function () {
                        return this.observer.disconnect();
                      }),
                      (c.prototype.didMutate = function (t) {
                        var e, n;
                        return (
                          (e = this.mutations).push.apply(
                            e,
                            this.findSignificantMutations(t)
                          ),
                          this.mutations.length
                            ? (null != (n = this.delegate) &&
                                "function" == typeof n.elementDidMutate &&
                                n.elementDidMutate(this.getMutationSummary()),
                              this.reset())
                            : void 0
                        );
                      }),
                      (c.prototype.reset = function () {
                        return (this.mutations = []);
                      }),
                      (c.prototype.findSignificantMutations = function (t) {
                        var e, n, r, i;
                        for (i = [], e = 0, n = t.length; n > e; e++)
                          (r = t[e]),
                            this.mutationIsSignificant(r) && i.push(r);
                        return i;
                      }),
                      (c.prototype.mutationIsSignificant = function (t) {
                        var e, n, r, i;
                        if (this.nodeIsMutable(t.target)) return !1;
                        for (
                          e = 0,
                            n = (i = this.nodesModifiedByMutation(t)).length;
                          n > e;
                          e++
                        )
                          if (((r = i[e]), this.nodeIsSignificant(r)))
                            return !0;
                        return !1;
                      }),
                      (c.prototype.nodeIsSignificant = function (t) {
                        return (
                          t !== this.element && !this.nodeIsMutable(t) && !r(t)
                        );
                      }),
                      (c.prototype.nodeIsMutable = function (t) {
                        return e(t, {
                          matchingSelector: "[data-trix-mutable]",
                        });
                      }),
                      (c.prototype.nodesModifiedByMutation = function (t) {
                        var e;
                        switch (((e = []), t.type)) {
                          case "attributes":
                            t.attributeName !== d && e.push(t.target);
                            break;
                          case "characterData":
                            e.push(t.target.parentNode), e.push(t.target);
                            break;
                          case "childList":
                            e.push.apply(e, t.addedNodes),
                              e.push.apply(e, t.removedNodes);
                        }
                        return e;
                      }),
                      (c.prototype.getMutationSummary = function () {
                        return this.getTextMutationSummary();
                      }),
                      (c.prototype.getTextMutationSummary = function () {
                        var t, e, n, r, i, o, a, s, u, c, h;
                        for (
                          n = (s = this.getTextChangesFromCharacterData())
                            .additions,
                            i = s.deletions,
                            o = 0,
                            a = (u = (h = this.getTextChangesFromChildList())
                              .additions).length;
                          a > o;
                          o++
                        )
                          (e = u[o]), l.call(n, e) < 0 && n.push(e);
                        return (
                          i.push.apply(i, h.deletions),
                          (c = {}),
                          (t = n.join("")) && (c.textAdded = t),
                          (r = i.join("")) && (c.textDeleted = r),
                          c
                        );
                      }),
                      (c.prototype.getMutationsByType = function (t) {
                        var e, n, r, i, o;
                        for (
                          o = [], e = 0, n = (i = this.mutations).length;
                          n > e;
                          e++
                        )
                          (r = i[e]).type === t && o.push(r);
                        return o;
                      }),
                      (c.prototype.getTextChangesFromChildList = function () {
                        var t, e, r, o, a, s, u, c, l, d;
                        for (
                          t = [],
                            u = [],
                            e = 0,
                            o = (s = this.getMutationsByType("childList"))
                              .length;
                          o > e;
                          e++
                        )
                          (a = s[e]),
                            t.push.apply(t, a.addedNodes),
                            u.push.apply(u, a.removedNodes);
                        return (
                          0 === t.length && 1 === u.length && n(u[0])
                            ? ((l = []), (d = ["\n"]))
                            : ((l = h(t)), (d = h(u))),
                          {
                            additions: (function () {
                              var t, e, n;
                              for (
                                n = [], r = t = 0, e = l.length;
                                e > t;
                                r = ++t
                              )
                                (c = l[r]) !== d[r] && n.push(i(c));
                              return n;
                            })(),
                            deletions: (function () {
                              var t, e, n;
                              for (
                                n = [], r = t = 0, e = d.length;
                                e > t;
                                r = ++t
                              )
                                (c = d[r]) !== l[r] && n.push(i(c));
                              return n;
                            })(),
                          }
                        );
                      }),
                      (c.prototype.getTextChangesFromCharacterData = function () {
                        var t, e, n, r, a, s, u, c;
                        return (
                          (e = this.getMutationsByType("characterData"))
                            .length &&
                            ((c = e[0]),
                            (n = e[e.length - 1]),
                            (a = i(c.oldValue)),
                            (r = i(n.target.data)),
                            (t = (s = o(a, r)).added),
                            (u = s.removed)),
                          { additions: t ? [t] : [], deletions: u ? [u] : [] }
                        );
                      }),
                      (h = function (t) {
                        var e, n, r, i;
                        for (
                          null == t && (t = []), i = [], e = 0, n = t.length;
                          n > e;
                          e++
                        )
                          switch ((r = t[e]).nodeType) {
                            case Node.TEXT_NODE:
                              i.push(r.data);
                              break;
                            case Node.ELEMENT_NODE:
                              "br" === a(r)
                                ? i.push("\n")
                                : i.push.apply(i, h(r.childNodes));
                          }
                        return i;
                      }),
                      c
                    );
                  })(t.BasicObject));
              }.call(this),
              function () {
                var e = function (t, e) {
                    function r() {
                      this.constructor = t;
                    }
                    for (var i in e) n.call(e, i) && (t[i] = e[i]);
                    return (
                      (r.prototype = e.prototype),
                      (t.prototype = new r()),
                      (t.__super__ = e.prototype),
                      t
                    );
                  },
                  n = {}.hasOwnProperty;
                t.FileVerificationOperation = (function (t) {
                  function n(t) {
                    this.file = t;
                  }
                  return (
                    e(n, t),
                    (n.prototype.perform = function (t) {
                      var e;
                      return (
                        ((e = new FileReader()).onerror = function () {
                          return t(!1);
                        }),
                        (e.onload = (function (n) {
                          return function () {
                            e.onerror = null;
                            try {
                              e.abort();
                            } catch (t) {}
                            return t(!0, n.file);
                          };
                        })(this)),
                        e.readAsArrayBuffer(this.file)
                      );
                    }),
                    n
                  );
                })(t.Operation);
              }.call(this),
              function () {
                var e,
                  n,
                  r = function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    for (var r in e) i.call(e, r) && (t[r] = e[r]);
                    return (
                      (n.prototype = e.prototype),
                      (t.prototype = new n()),
                      (t.__super__ = e.prototype),
                      t
                    );
                  },
                  i = {}.hasOwnProperty;
                (e = t.handleEvent),
                  (n = t.innerElementIsActive),
                  (t.InputController = (function (i) {
                    function o(n) {
                      var r;
                      for (r in ((this.element = n),
                      (this.mutationObserver = new t.MutationObserver(
                        this.element
                      )),
                      (this.mutationObserver.delegate = this),
                      this.events))
                        e(r, {
                          onElement: this.element,
                          withCallback: this.handlerFor(r),
                        });
                    }
                    return (
                      r(o, i),
                      (o.prototype.events = {}),
                      (o.prototype.elementDidMutate = function () {}),
                      (o.prototype.editorWillSyncDocumentView = function () {
                        return this.mutationObserver.stop();
                      }),
                      (o.prototype.editorDidSyncDocumentView = function () {
                        return this.mutationObserver.start();
                      }),
                      (o.prototype.requestRender = function () {
                        var t;
                        return null != (t = this.delegate) &&
                          "function" == typeof t.inputControllerDidRequestRender
                          ? t.inputControllerDidRequestRender()
                          : void 0;
                      }),
                      (o.prototype.requestReparse = function () {
                        var t;
                        return (
                          null != (t = this.delegate) &&
                            "function" ==
                              typeof t.inputControllerDidRequestReparse &&
                            t.inputControllerDidRequestReparse(),
                          this.requestRender()
                        );
                      }),
                      (o.prototype.attachFiles = function (e) {
                        var n, r;
                        return (
                          (r = (function () {
                            var r, i, o;
                            for (o = [], r = 0, i = e.length; i > r; r++)
                              (n = e[r]),
                                o.push(new t.FileVerificationOperation(n));
                            return o;
                          })()),
                          Promise.all(r).then(
                            (function (t) {
                              return function (e) {
                                return t.handleInput(function () {
                                  var t, n;
                                  return (
                                    null != (t = this.delegate) &&
                                      t.inputControllerWillAttachFiles(),
                                    null != (n = this.responder) &&
                                      n.insertFiles(e),
                                    this.requestRender()
                                  );
                                });
                              };
                            })(this)
                          )
                        );
                      }),
                      (o.prototype.handlerFor = function (t) {
                        return (function (e) {
                          return function (r) {
                            return r.defaultPrevented
                              ? void 0
                              : e.handleInput(function () {
                                  return n(this.element)
                                    ? void 0
                                    : ((this.eventName = t),
                                      this.events[t].call(this, r));
                                });
                          };
                        })(this);
                      }),
                      (o.prototype.handleInput = function (t) {
                        var e, n;
                        try {
                          return (
                            null != (e = this.delegate) &&
                              e.inputControllerWillHandleInput(),
                            t.call(this)
                          );
                        } finally {
                          null != (n = this.delegate) &&
                            n.inputControllerDidHandleInput();
                        }
                      }),
                      (o.prototype.createLinkHTML = function (t, e) {
                        var n;
                        return (
                          ((n = document.createElement("a")).href = t),
                          (n.textContent = null != e ? e : t),
                          n.outerHTML
                        );
                      }),
                      o
                    );
                  })(t.BasicObject));
              }.call(this),
              function () {
                var e,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  c,
                  l,
                  h,
                  d,
                  p = function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    for (var r in e) f.call(e, r) && (t[r] = e[r]);
                    return (
                      (n.prototype = e.prototype),
                      (t.prototype = new n()),
                      (t.__super__ = e.prototype),
                      t
                    );
                  },
                  f = {}.hasOwnProperty,
                  g =
                    [].indexOf ||
                    function (t) {
                      for (var e = 0, n = this.length; n > e; e++)
                        if (e in this && this[e] === t) return e;
                      return -1;
                    };
                (c = t.makeElement),
                  (l = t.objectsAreEqual),
                  t.tagName,
                  (n = t.browser),
                  (s = t.keyEventIsKeyboardCommand),
                  (i = t.dataTransferIsWritable),
                  (r = t.dataTransferIsPlainText),
                  (u = t.config.keyNames),
                  (t.Level0InputController = (function (n) {
                    function a() {
                      a.__super__.constructor.apply(this, arguments),
                        this.resetInputSummary();
                    }
                    var f;
                    return (
                      p(a, n),
                      (f = 0),
                      (a.prototype.setInputSummary = function (t) {
                        var e, n;
                        for (e in (null == t && (t = {}),
                        (this.inputSummary.eventName = this.eventName),
                        t))
                          (n = t[e]), (this.inputSummary[e] = n);
                        return this.inputSummary;
                      }),
                      (a.prototype.resetInputSummary = function () {
                        return (this.inputSummary = {});
                      }),
                      (a.prototype.reset = function () {
                        return (
                          this.resetInputSummary(),
                          t.selectionChangeObserver.reset()
                        );
                      }),
                      (a.prototype.elementDidMutate = function (t) {
                        var e;
                        return this.isComposing()
                          ? null != (e = this.delegate) &&
                            "function" ==
                              typeof e.inputControllerDidAllowUnhandledInput
                            ? e.inputControllerDidAllowUnhandledInput()
                            : void 0
                          : this.handleInput(function () {
                              return (
                                this.mutationIsSignificant(t) &&
                                  (this.mutationIsExpected(t)
                                    ? this.requestRender()
                                    : this.requestReparse()),
                                this.reset()
                              );
                            });
                      }),
                      (a.prototype.mutationIsExpected = function (t) {
                        var e, n, r, i, o, a, s, u, c;
                        return (
                          (a = t.textAdded),
                          (s = t.textDeleted),
                          !!this.inputSummary.preferDocument ||
                            ((e =
                              null != a
                                ? a === this.inputSummary.textAdded
                                : !this.inputSummary.textAdded),
                            (n =
                              null != s
                                ? this.inputSummary.didDelete
                                : !this.inputSummary.didDelete),
                            (c = "\n" === s && !n),
                            !!(
                              (((u = ("\n" === a || " \n" === a) && !e) &&
                                !c) ||
                                (c && !u)) &&
                              (i = this.getSelectedRange()) &&
                              ((r = u
                                ? a.replace(/\n$/, "").length || -1
                                : (null != a ? a.length : void 0) || 1),
                              null != (o = this.responder)
                                ? o.positionIsBlockBreak(i[1] + r)
                                : void 0)
                            ) ||
                              (e && n))
                        );
                      }),
                      (a.prototype.mutationIsSignificant = function (t) {
                        var e, n, r;
                        return (
                          (r = Object.keys(t).length > 0),
                          (e =
                            "" ===
                            (null != (n = this.compositionInput)
                              ? n.getEndData()
                              : void 0)),
                          r || !e
                        );
                      }),
                      (a.prototype.events = {
                        keydown: function (e) {
                          var n, r, i, o, a, c, l, h, d;
                          if (
                            (this.isComposing() || this.resetInputSummary(),
                            (this.inputSummary.didInput = !0),
                            (o = u[e.keyCode]))
                          ) {
                            for (
                              r = this.keys,
                                i = 0,
                                c = (h = ["ctrl", "alt", "shift", "meta"])
                                  .length;
                              c > i;
                              i++
                            )
                              e[(l = h[i]) + "Key"] &&
                                ("ctrl" === l && (l = "control"),
                                (r = null != r ? r[l] : void 0));
                            null != (null != r ? r[o] : void 0) &&
                              (this.setInputSummary({ keyName: o }),
                              t.selectionChangeObserver.reset(),
                              r[o].call(this, e));
                          }
                          return s(e) &&
                            (n = String.fromCharCode(
                              e.keyCode
                            ).toLowerCase()) &&
                            ((a = (function () {
                              var t, n, r, i;
                              for (
                                i = [],
                                  t = 0,
                                  n = (r = ["alt", "shift"]).length;
                                n > t;
                                t++
                              )
                                e[(l = r[t]) + "Key"] && i.push(l);
                              return i;
                            })()).push(n),
                            null != (d = this.delegate)
                              ? d.inputControllerDidReceiveKeyboardCommand(a)
                              : void 0)
                            ? e.preventDefault()
                            : void 0;
                        },
                        keypress: function (t) {
                          var e, n, r;
                          if (
                            null == this.inputSummary.eventName &&
                            !t.metaKey &&
                            (!t.ctrlKey || t.altKey)
                          )
                            return (r = d(t))
                              ? (null != (e = this.delegate) &&
                                  e.inputControllerWillPerformTyping(),
                                null != (n = this.responder) &&
                                  n.insertString(r),
                                this.setInputSummary({
                                  textAdded: r,
                                  didDelete: this.selectionIsExpanded(),
                                }))
                              : void 0;
                        },
                        textInput: function (t) {
                          var e, n, r, i;
                          return (
                            (e = t.data),
                            (i = this.inputSummary.textAdded) &&
                            i !== e &&
                            i.toUpperCase() === e
                              ? ((n = this.getSelectedRange()),
                                this.setSelectedRange([n[0], n[1] + i.length]),
                                null != (r = this.responder) &&
                                  r.insertString(e),
                                this.setInputSummary({ textAdded: e }),
                                this.setSelectedRange(n))
                              : void 0
                          );
                        },
                        dragenter: function (t) {
                          return t.preventDefault();
                        },
                        dragstart: function (t) {
                          var e;
                          return (
                            t.target,
                            this.serializeSelectionToDataTransfer(
                              t.dataTransfer
                            ),
                            (this.draggedRange = this.getSelectedRange()),
                            null != (e = this.delegate) &&
                            "function" == typeof e.inputControllerDidStartDrag
                              ? e.inputControllerDidStartDrag()
                              : void 0
                          );
                        },
                        dragover: function (t) {
                          var e, n;
                          return (!this.draggedRange &&
                            !this.canAcceptDataTransfer(t.dataTransfer)) ||
                            (t.preventDefault(),
                            (e = { x: t.clientX, y: t.clientY }),
                            l(e, this.draggingPoint))
                            ? void 0
                            : ((this.draggingPoint = e),
                              null != (n = this.delegate) &&
                              "function" ==
                                typeof n.inputControllerDidReceiveDragOverPoint
                                ? n.inputControllerDidReceiveDragOverPoint(
                                    this.draggingPoint
                                  )
                                : void 0);
                        },
                        dragend: function () {
                          var t;
                          return (
                            null != (t = this.delegate) &&
                              "function" ==
                                typeof t.inputControllerDidCancelDrag &&
                              t.inputControllerDidCancelDrag(),
                            (this.draggedRange = null),
                            (this.draggingPoint = null)
                          );
                        },
                        drop: function (e) {
                          var n, r, i, o, a, s, u, c, l;
                          return (
                            e.preventDefault(),
                            (i =
                              null != (a = e.dataTransfer) ? a.files : void 0),
                            (o = { x: e.clientX, y: e.clientY }),
                            null != (s = this.responder) &&
                              s.setLocationRangeFromPointRange(o),
                            (null != i ? i.length : void 0)
                              ? this.attachFiles(i)
                              : this.draggedRange
                              ? (null != (u = this.delegate) &&
                                  u.inputControllerWillMoveText(),
                                null != (c = this.responder) &&
                                  c.moveTextFromRange(this.draggedRange),
                                (this.draggedRange = null),
                                this.requestRender())
                              : (r = e.dataTransfer.getData(
                                  "application/x-trix-document"
                                )) &&
                                ((n = t.Document.fromJSONString(r)),
                                null != (l = this.responder) &&
                                  l.insertDocument(n),
                                this.requestRender()),
                            (this.draggedRange = null),
                            (this.draggingPoint = null)
                          );
                        },
                        cut: function (t) {
                          var e, n;
                          return (null != (e = this.responder)
                            ? e.selectionIsExpanded()
                            : void 0) &&
                            (this.serializeSelectionToDataTransfer(
                              t.clipboardData
                            ) && t.preventDefault(),
                            null != (n = this.delegate) &&
                              n.inputControllerWillCutText(),
                            this.deleteInDirection("backward"),
                            t.defaultPrevented)
                            ? this.requestRender()
                            : void 0;
                        },
                        copy: function (t) {
                          var e;
                          return (null != (e = this.responder)
                            ? e.selectionIsExpanded()
                            : void 0) &&
                            this.serializeSelectionToDataTransfer(
                              t.clipboardData
                            )
                            ? t.preventDefault()
                            : void 0;
                        },
                        paste: function (e) {
                          var n,
                            i,
                            a,
                            s,
                            u,
                            c,
                            l,
                            d,
                            p,
                            m,
                            v,
                            y,
                            b,
                            w,
                            A,
                            C,
                            D,
                            x,
                            S,
                            E,
                            _,
                            k,
                            T;
                          return (
                            (n =
                              null != (d = e.clipboardData)
                                ? d
                                : e.testClipboardData),
                            (l = { clipboard: n }),
                            null == n || h(e)
                              ? void this.getPastedHTMLUsingHiddenElement(
                                  (function (t) {
                                    return function (e) {
                                      var n, r, i;
                                      return (
                                        (l.type = "text/html"),
                                        (l.html = e),
                                        null != (n = t.delegate) &&
                                          n.inputControllerWillPaste(l),
                                        null != (r = t.responder) &&
                                          r.insertHTML(l.html),
                                        t.requestRender(),
                                        null != (i = t.delegate)
                                          ? i.inputControllerDidPaste(l)
                                          : void 0
                                      );
                                    };
                                  })(this)
                                )
                              : ((s = n.getData("URL"))
                                  ? ((l.type = "text/html"),
                                    (T = (c = n.getData("public.url-name"))
                                      ? t.squishBreakableWhitespace(c).trim()
                                      : s),
                                    (l.html = this.createLinkHTML(s, T)),
                                    null != (p = this.delegate) &&
                                      p.inputControllerWillPaste(l),
                                    this.setInputSummary({
                                      textAdded: T,
                                      didDelete: this.selectionIsExpanded(),
                                    }),
                                    null != (A = this.responder) &&
                                      A.insertHTML(l.html),
                                    this.requestRender(),
                                    null != (C = this.delegate) &&
                                      C.inputControllerDidPaste(l))
                                  : r(n)
                                  ? ((l.type = "text/plain"),
                                    (l.string = n.getData("text/plain")),
                                    null != (D = this.delegate) &&
                                      D.inputControllerWillPaste(l),
                                    this.setInputSummary({
                                      textAdded: l.string,
                                      didDelete: this.selectionIsExpanded(),
                                    }),
                                    null != (x = this.responder) &&
                                      x.insertString(l.string),
                                    this.requestRender(),
                                    null != (S = this.delegate) &&
                                      S.inputControllerDidPaste(l))
                                  : (u = n.getData("text/html"))
                                  ? ((l.type = "text/html"),
                                    (l.html = u),
                                    null != (E = this.delegate) &&
                                      E.inputControllerWillPaste(l),
                                    null != (_ = this.responder) &&
                                      _.insertHTML(l.html),
                                    this.requestRender(),
                                    null != (k = this.delegate) &&
                                      k.inputControllerDidPaste(l))
                                  : g.call(n.types, "Files") >= 0 &&
                                    (a =
                                      null != (m = n.items) &&
                                      null != (v = m[0]) &&
                                      "function" == typeof v.getAsFile
                                        ? v.getAsFile()
                                        : void 0) &&
                                    (!a.name &&
                                      (i = o(a)) &&
                                      (a.name = "pasted-file-" + ++f + "." + i),
                                    (l.type = "File"),
                                    (l.file = a),
                                    null != (y = this.delegate) &&
                                      y.inputControllerWillAttachFiles(),
                                    null != (b = this.responder) &&
                                      b.insertFile(l.file),
                                    this.requestRender(),
                                    null != (w = this.delegate) &&
                                      w.inputControllerDidPaste(l)),
                                e.preventDefault())
                          );
                        },
                        compositionstart: function (t) {
                          return this.getCompositionInput().start(t.data);
                        },
                        compositionupdate: function (t) {
                          return this.getCompositionInput().update(t.data);
                        },
                        compositionend: function (t) {
                          return this.getCompositionInput().end(t.data);
                        },
                        beforeinput: function () {
                          return (this.inputSummary.didInput = !0);
                        },
                        input: function (t) {
                          return (
                            (this.inputSummary.didInput = !0),
                            t.stopPropagation()
                          );
                        },
                      }),
                      (a.prototype.keys = {
                        backspace: function (t) {
                          var e;
                          return (
                            null != (e = this.delegate) &&
                              e.inputControllerWillPerformTyping(),
                            this.deleteInDirection("backward", t)
                          );
                        },
                        delete: function (t) {
                          var e;
                          return (
                            null != (e = this.delegate) &&
                              e.inputControllerWillPerformTyping(),
                            this.deleteInDirection("forward", t)
                          );
                        },
                        return: function () {
                          var t, e;
                          return (
                            this.setInputSummary({ preferDocument: !0 }),
                            null != (t = this.delegate) &&
                              t.inputControllerWillPerformTyping(),
                            null != (e = this.responder)
                              ? e.insertLineBreak()
                              : void 0
                          );
                        },
                        tab: function (t) {
                          var e, n;
                          return (
                            null != (e = this.responder)
                              ? e.canIncreaseNestingLevel()
                              : void 0
                          )
                            ? (null != (n = this.responder) &&
                                n.increaseNestingLevel(),
                              this.requestRender(),
                              t.preventDefault())
                            : void 0;
                        },
                        left: function (t) {
                          var e;
                          return this.selectionIsInCursorTarget()
                            ? (t.preventDefault(),
                              null != (e = this.responder)
                                ? e.moveCursorInDirection("backward")
                                : void 0)
                            : void 0;
                        },
                        right: function (t) {
                          var e;
                          return this.selectionIsInCursorTarget()
                            ? (t.preventDefault(),
                              null != (e = this.responder)
                                ? e.moveCursorInDirection("forward")
                                : void 0)
                            : void 0;
                        },
                        control: {
                          d: function (t) {
                            var e;
                            return (
                              null != (e = this.delegate) &&
                                e.inputControllerWillPerformTyping(),
                              this.deleteInDirection("forward", t)
                            );
                          },
                          h: function (t) {
                            var e;
                            return (
                              null != (e = this.delegate) &&
                                e.inputControllerWillPerformTyping(),
                              this.deleteInDirection("backward", t)
                            );
                          },
                          o: function (t) {
                            var e, n;
                            return (
                              t.preventDefault(),
                              null != (e = this.delegate) &&
                                e.inputControllerWillPerformTyping(),
                              null != (n = this.responder) &&
                                n.insertString("\n", { updatePosition: !1 }),
                              this.requestRender()
                            );
                          },
                        },
                        shift: {
                          return: function (t) {
                            var e, n;
                            return (
                              null != (e = this.delegate) &&
                                e.inputControllerWillPerformTyping(),
                              null != (n = this.responder) &&
                                n.insertString("\n"),
                              this.requestRender(),
                              t.preventDefault()
                            );
                          },
                          tab: function (t) {
                            var e, n;
                            return (
                              null != (e = this.responder)
                                ? e.canDecreaseNestingLevel()
                                : void 0
                            )
                              ? (null != (n = this.responder) &&
                                  n.decreaseNestingLevel(),
                                this.requestRender(),
                                t.preventDefault())
                              : void 0;
                          },
                          left: function (t) {
                            return this.selectionIsInCursorTarget()
                              ? (t.preventDefault(),
                                this.expandSelectionInDirection("backward"))
                              : void 0;
                          },
                          right: function (t) {
                            return this.selectionIsInCursorTarget()
                              ? (t.preventDefault(),
                                this.expandSelectionInDirection("forward"))
                              : void 0;
                          },
                        },
                        alt: {
                          backspace: function () {
                            var t;
                            return (
                              this.setInputSummary({ preferDocument: !1 }),
                              null != (t = this.delegate)
                                ? t.inputControllerWillPerformTyping()
                                : void 0
                            );
                          },
                        },
                        meta: {
                          backspace: function () {
                            var t;
                            return (
                              this.setInputSummary({ preferDocument: !1 }),
                              null != (t = this.delegate)
                                ? t.inputControllerWillPerformTyping()
                                : void 0
                            );
                          },
                        },
                      }),
                      (a.prototype.getCompositionInput = function () {
                        return this.isComposing()
                          ? this.compositionInput
                          : (this.compositionInput = new e(this));
                      }),
                      (a.prototype.isComposing = function () {
                        return (
                          null != this.compositionInput &&
                          !this.compositionInput.isEnded()
                        );
                      }),
                      (a.prototype.deleteInDirection = function (t, e) {
                        var n;
                        return !1 !==
                          (null != (n = this.responder)
                            ? n.deleteInDirection(t)
                            : void 0)
                          ? this.setInputSummary({ didDelete: !0 })
                          : e
                          ? (e.preventDefault(), this.requestRender())
                          : void 0;
                      }),
                      (a.prototype.serializeSelectionToDataTransfer = function (
                        e
                      ) {
                        var n, r;
                        if (i(e))
                          return (
                            (n =
                              null != (r = this.responder)
                                ? r
                                    .getSelectedDocument()
                                    .toSerializableDocument()
                                : void 0),
                            e.setData(
                              "application/x-trix-document",
                              JSON.stringify(n)
                            ),
                            e.setData(
                              "text/html",
                              t.DocumentView.render(n).innerHTML
                            ),
                            e.setData(
                              "text/plain",
                              n.toString().replace(/\n$/, "")
                            ),
                            !0
                          );
                      }),
                      (a.prototype.canAcceptDataTransfer = function (t) {
                        var e, n, r, i, o;
                        for (
                          o = {},
                            e = 0,
                            n = (i =
                              null != (r = null != t ? t.types : void 0)
                                ? r
                                : []).length;
                          n > e;
                          e++
                        )
                          o[i[e]] = !0;
                        return (
                          o.Files ||
                          o["application/x-trix-document"] ||
                          o["text/html"] ||
                          o["text/plain"]
                        );
                      }),
                      (a.prototype.getPastedHTMLUsingHiddenElement = function (
                        e
                      ) {
                        var n, r, i;
                        return (
                          (r = this.getSelectedRange()),
                          (i = {
                            position: "absolute",
                            left: window.pageXOffset + "px",
                            top: window.pageYOffset + "px",
                            opacity: 0,
                          }),
                          (n = c({ style: i, tagName: "div", editable: !0 })),
                          document.body.appendChild(n),
                          n.focus(),
                          requestAnimationFrame(
                            (function (i) {
                              return function () {
                                var o;
                                return (
                                  (o = n.innerHTML),
                                  t.removeNode(n),
                                  i.setSelectedRange(r),
                                  e(o)
                                );
                              };
                            })(this)
                          )
                        );
                      }),
                      a.proxyMethod("responder?.getSelectedRange"),
                      a.proxyMethod("responder?.setSelectedRange"),
                      a.proxyMethod("responder?.expandSelectionInDirection"),
                      a.proxyMethod("responder?.selectionIsInCursorTarget"),
                      a.proxyMethod("responder?.selectionIsExpanded"),
                      a
                    );
                  })(t.InputController)),
                  (o = function (t) {
                    var e, n;
                    return null != (e = t.type) &&
                      null != (n = e.match(/\/(\w+)$/))
                      ? n[1]
                      : void 0;
                  }),
                  (a =
                    null !=
                    ("function" == typeof " ".codePointAt
                      ? " ".codePointAt(0)
                      : void 0)),
                  (d = function (e) {
                    var n;
                    return e.key && a && e.key.codePointAt(0) === e.keyCode
                      ? e.key
                      : (null === e.which
                          ? (n = e.keyCode)
                          : 0 !== e.which &&
                            0 !== e.charCode &&
                            (n = e.charCode),
                        null != n && "escape" !== u[n]
                          ? t.UTF16String.fromCodepoints([n]).toString()
                          : void 0);
                  }),
                  (h = function (t) {
                    var e, n, r, i, o, a, s, u, c;
                    if ((s = t.clipboardData)) {
                      if (g.call(s.types, "text/html") >= 0) {
                        for (r = 0, a = (u = s.types).length; a > r; r++)
                          if (
                            ((c = u[r]),
                            (e = /^CorePasteboardFlavorType/.test(c)),
                            (n = /^dyn\./.test(c) && s.getData(c)),
                            e || n)
                          )
                            return !0;
                        return !1;
                      }
                      return (
                        (i = g.call(s.types, "com.apple.webarchive") >= 0),
                        (o = g.call(s.types, "com.apple.flat-rtfd") >= 0),
                        i || o
                      );
                    }
                  }),
                  (e = (function (t) {
                    function e(t) {
                      var e;
                      (this.inputController = t),
                        (e = this.inputController),
                        (this.responder = e.responder),
                        (this.delegate = e.delegate),
                        (this.inputSummary = e.inputSummary),
                        (this.data = {});
                    }
                    return (
                      p(e, t),
                      (e.prototype.start = function (t) {
                        var e, n;
                        return (
                          (this.data.start = t),
                          this.isSignificant()
                            ? ("keypress" === this.inputSummary.eventName &&
                                this.inputSummary.textAdded &&
                                null != (e = this.responder) &&
                                e.deleteInDirection("left"),
                              this.selectionIsExpanded() ||
                                (this.insertPlaceholder(),
                                this.requestRender()),
                              (this.range =
                                null != (n = this.responder)
                                  ? n.getSelectedRange()
                                  : void 0))
                            : void 0
                        );
                      }),
                      (e.prototype.update = function (t) {
                        var e;
                        return (
                          (this.data.update = t),
                          this.isSignificant() && (e = this.selectPlaceholder())
                            ? (this.forgetPlaceholder(), (this.range = e))
                            : void 0
                        );
                      }),
                      (e.prototype.end = function (t) {
                        var e, n, r, i;
                        return (
                          (this.data.end = t),
                          this.isSignificant()
                            ? (this.forgetPlaceholder(),
                              this.canApplyToDocument()
                                ? (this.setInputSummary({
                                    preferDocument: !0,
                                    didInput: !1,
                                  }),
                                  null != (e = this.delegate) &&
                                    e.inputControllerWillPerformTyping(),
                                  null != (n = this.responder) &&
                                    n.setSelectedRange(this.range),
                                  null != (r = this.responder) &&
                                    r.insertString(this.data.end),
                                  null != (i = this.responder)
                                    ? i.setSelectedRange(
                                        this.range[0] + this.data.end.length
                                      )
                                    : void 0)
                                : null != this.data.start ||
                                  null != this.data.update
                                ? (this.requestReparse(),
                                  this.inputController.reset())
                                : void 0)
                            : this.inputController.reset()
                        );
                      }),
                      (e.prototype.getEndData = function () {
                        return this.data.end;
                      }),
                      (e.prototype.isEnded = function () {
                        return null != this.getEndData();
                      }),
                      (e.prototype.isSignificant = function () {
                        return (
                          !n.composesExistingText || this.inputSummary.didInput
                        );
                      }),
                      (e.prototype.canApplyToDocument = function () {
                        var t, e;
                        return (
                          0 ===
                            (null != (t = this.data.start)
                              ? t.length
                              : void 0) &&
                          (null != (e = this.data.end) ? e.length : void 0) >
                            0 &&
                          null != this.range
                        );
                      }),
                      e.proxyMethod("inputController.setInputSummary"),
                      e.proxyMethod("inputController.requestRender"),
                      e.proxyMethod("inputController.requestReparse"),
                      e.proxyMethod("responder?.selectionIsExpanded"),
                      e.proxyMethod("responder?.insertPlaceholder"),
                      e.proxyMethod("responder?.selectPlaceholder"),
                      e.proxyMethod("responder?.forgetPlaceholder"),
                      e
                    );
                  })(t.BasicObject));
              }.call(this),
              function () {
                var e,
                  n,
                  r,
                  i = function (t, e) {
                    return function () {
                      return t.apply(e, arguments);
                    };
                  },
                  o = function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    for (var r in e) a.call(e, r) && (t[r] = e[r]);
                    return (
                      (n.prototype = e.prototype),
                      (t.prototype = new n()),
                      (t.__super__ = e.prototype),
                      t
                    );
                  },
                  a = {}.hasOwnProperty,
                  s =
                    [].indexOf ||
                    function (t) {
                      for (var e = 0, n = this.length; n > e; e++)
                        if (e in this && this[e] === t) return e;
                      return -1;
                    };
                (e = t.dataTransferIsPlainText),
                  (n = t.keyEventIsKeyboardCommand),
                  (r = t.objectsAreEqual),
                  (t.Level2InputController = (function (a) {
                    function u() {
                      return (
                        (this.render = i(this.render, this)),
                        u.__super__.constructor.apply(this, arguments)
                      );
                    }
                    var c, l, h, d, p, f;
                    return (
                      o(u, a),
                      (u.prototype.elementDidMutate = function () {
                        var t;
                        return this.scheduledRender
                          ? this.composing &&
                            null != (t = this.delegate) &&
                            "function" ==
                              typeof t.inputControllerDidAllowUnhandledInput
                            ? t.inputControllerDidAllowUnhandledInput()
                            : void 0
                          : this.reparse();
                      }),
                      (u.prototype.scheduleRender = function () {
                        return null != this.scheduledRender
                          ? this.scheduledRender
                          : (this.scheduledRender = requestAnimationFrame(
                              this.render
                            ));
                      }),
                      (u.prototype.render = function () {
                        var t;
                        return (
                          cancelAnimationFrame(this.scheduledRender),
                          (this.scheduledRender = null),
                          this.composing ||
                            (null != (t = this.delegate) && t.render()),
                          "function" == typeof this.afterRender &&
                            this.afterRender(),
                          (this.afterRender = null)
                        );
                      }),
                      (u.prototype.reparse = function () {
                        var t;
                        return null != (t = this.delegate)
                          ? t.reparse()
                          : void 0;
                      }),
                      (u.prototype.events = {
                        keydown: function (t) {
                          var e, r, i, o;
                          if (n(t)) {
                            if (
                              ((e = l(t)),
                              null != (o = this.delegate)
                                ? o.inputControllerDidReceiveKeyboardCommand(e)
                                : void 0)
                            )
                              return t.preventDefault();
                          } else if (
                            ((i = t.key),
                            t.altKey && (i += "+Alt"),
                            t.shiftKey && (i += "+Shift"),
                            (r = this.keys[i]))
                          )
                            return this.withEvent(t, r);
                        },
                        paste: function (t) {
                          var e, n, r, i, o, a, s, u, c;
                          return h(t)
                            ? (t.preventDefault(),
                              this.attachFiles(t.clipboardData.files))
                            : d(t)
                            ? (t.preventDefault(),
                              (n = {
                                type: "text/plain",
                                string: t.clipboardData.getData("text/plain"),
                              }),
                              null != (r = this.delegate) &&
                                r.inputControllerWillPaste(n),
                              null != (i = this.responder) &&
                                i.insertString(n.string),
                              this.render(),
                              null != (o = this.delegate)
                                ? o.inputControllerDidPaste(n)
                                : void 0)
                            : (e =
                                null != (a = t.clipboardData)
                                  ? a.getData("URL")
                                  : void 0)
                            ? (t.preventDefault(),
                              (n = {
                                type: "text/html",
                                html: this.createLinkHTML(e),
                              }),
                              null != (s = this.delegate) &&
                                s.inputControllerWillPaste(n),
                              null != (u = this.responder) &&
                                u.insertHTML(n.html),
                              this.render(),
                              null != (c = this.delegate)
                                ? c.inputControllerDidPaste(n)
                                : void 0)
                            : void 0;
                        },
                        beforeinput: function (t) {
                          var e;
                          return (e = this.inputTypes[t.inputType])
                            ? (this.withEvent(t, e), this.scheduleRender())
                            : void 0;
                        },
                        input: function () {
                          return t.selectionChangeObserver.reset();
                        },
                        dragstart: function (t) {
                          var e, n;
                          return (
                            null != (e = this.responder)
                              ? e.selectionContainsAttachments()
                              : void 0
                          )
                            ? (t.dataTransfer.setData(
                                "application/x-trix-dragging",
                                !0
                              ),
                              (this.dragging = {
                                range:
                                  null != (n = this.responder)
                                    ? n.getSelectedRange()
                                    : void 0,
                                point: p(t),
                              }))
                            : void 0;
                        },
                        dragenter: function (t) {
                          return c(t) ? t.preventDefault() : void 0;
                        },
                        dragover: function (t) {
                          var e, n;
                          return this.dragging &&
                            (t.preventDefault(),
                            (e = p(t)),
                            !r(e, this.dragging.point))
                            ? ((this.dragging.point = e),
                              null != (n = this.responder)
                                ? n.setLocationRangeFromPointRange(e)
                                : void 0)
                            : void 0;
                        },
                        drop: function (t) {
                          var e, n, r, i;
                          return this.dragging
                            ? (t.preventDefault(),
                              null != (n = this.delegate) &&
                                n.inputControllerWillMoveText(),
                              null != (r = this.responder) &&
                                r.moveTextFromRange(this.dragging.range),
                              (this.dragging = null),
                              this.scheduleRender())
                            : c(t)
                            ? (t.preventDefault(),
                              (e = p(t)),
                              null != (i = this.responder) &&
                                i.setLocationRangeFromPointRange(e),
                              this.attachFiles(t.dataTransfer.files))
                            : void 0;
                        },
                        dragend: function () {
                          var t;
                          return this.dragging
                            ? (null != (t = this.responder) &&
                                t.setSelectedRange(this.dragging.range),
                              (this.dragging = null))
                            : void 0;
                        },
                        compositionend: function () {
                          return this.composing
                            ? ((this.composing = !1), this.scheduleRender())
                            : void 0;
                        },
                      }),
                      (u.prototype.keys = {
                        ArrowLeft: function () {
                          var t, e;
                          return (
                            null != (t = this.responder)
                              ? t.shouldManageMovingCursorInDirection(
                                  "backward"
                                )
                              : void 0
                          )
                            ? (this.event.preventDefault(),
                              null != (e = this.responder)
                                ? e.moveCursorInDirection("backward")
                                : void 0)
                            : void 0;
                        },
                        ArrowRight: function () {
                          var t, e;
                          return (
                            null != (t = this.responder)
                              ? t.shouldManageMovingCursorInDirection("forward")
                              : void 0
                          )
                            ? (this.event.preventDefault(),
                              null != (e = this.responder)
                                ? e.moveCursorInDirection("forward")
                                : void 0)
                            : void 0;
                        },
                        Backspace: function () {
                          var t, e, n;
                          return (
                            null != (t = this.responder)
                              ? t.shouldManageDeletingInDirection("backward")
                              : void 0
                          )
                            ? (this.event.preventDefault(),
                              null != (e = this.delegate) &&
                                e.inputControllerWillPerformTyping(),
                              null != (n = this.responder) &&
                                n.deleteInDirection("backward"),
                              this.render())
                            : void 0;
                        },
                        Tab: function () {
                          var t, e;
                          return (
                            null != (t = this.responder)
                              ? t.canIncreaseNestingLevel()
                              : void 0
                          )
                            ? (this.event.preventDefault(),
                              null != (e = this.responder) &&
                                e.increaseNestingLevel(),
                              this.render())
                            : void 0;
                        },
                        "Tab+Shift": function () {
                          var t, e;
                          return (
                            null != (t = this.responder)
                              ? t.canDecreaseNestingLevel()
                              : void 0
                          )
                            ? (this.event.preventDefault(),
                              null != (e = this.responder) &&
                                e.decreaseNestingLevel(),
                              this.render())
                            : void 0;
                        },
                      }),
                      (u.prototype.inputTypes = {
                        deleteByComposition: function () {
                          return this.deleteInDirection("backward", {
                            recordUndoEntry: !1,
                          });
                        },
                        deleteByCut: function () {
                          return this.deleteInDirection("backward");
                        },
                        deleteByDrag: function () {
                          return (
                            this.event.preventDefault(),
                            this.withTargetDOMRange(function () {
                              var t;
                              return (this.deleteByDragRange =
                                null != (t = this.responder)
                                  ? t.getSelectedRange()
                                  : void 0);
                            })
                          );
                        },
                        deleteCompositionText: function () {
                          return this.deleteInDirection("backward", {
                            recordUndoEntry: !1,
                          });
                        },
                        deleteContent: function () {
                          return this.deleteInDirection("backward");
                        },
                        deleteContentBackward: function () {
                          return this.deleteInDirection("backward");
                        },
                        deleteContentForward: function () {
                          return this.deleteInDirection("forward");
                        },
                        deleteEntireSoftLine: function () {
                          return this.deleteInDirection("forward");
                        },
                        deleteHardLineBackward: function () {
                          return this.deleteInDirection("backward");
                        },
                        deleteHardLineForward: function () {
                          return this.deleteInDirection("forward");
                        },
                        deleteSoftLineBackward: function () {
                          return this.deleteInDirection("backward");
                        },
                        deleteSoftLineForward: function () {
                          return this.deleteInDirection("forward");
                        },
                        deleteWordBackward: function () {
                          return this.deleteInDirection("backward");
                        },
                        deleteWordForward: function () {
                          return this.deleteInDirection("forward");
                        },
                        formatBackColor: function () {
                          return this.activateAttributeIfSupported(
                            "backgroundColor",
                            this.event.data
                          );
                        },
                        formatBold: function () {
                          return this.toggleAttributeIfSupported("bold");
                        },
                        formatFontColor: function () {
                          return this.activateAttributeIfSupported(
                            "color",
                            this.event.data
                          );
                        },
                        formatFontName: function () {
                          return this.activateAttributeIfSupported(
                            "font",
                            this.event.data
                          );
                        },
                        formatIndent: function () {
                          var t;
                          return (
                            null != (t = this.responder)
                              ? t.canIncreaseNestingLevel()
                              : void 0
                          )
                            ? this.withTargetDOMRange(function () {
                                var t;
                                return null != (t = this.responder)
                                  ? t.increaseNestingLevel()
                                  : void 0;
                              })
                            : void 0;
                        },
                        formatItalic: function () {
                          return this.toggleAttributeIfSupported("italic");
                        },
                        formatJustifyCenter: function () {
                          return this.toggleAttributeIfSupported(
                            "justifyCenter"
                          );
                        },
                        formatJustifyFull: function () {
                          return this.toggleAttributeIfSupported("justifyFull");
                        },
                        formatJustifyLeft: function () {
                          return this.toggleAttributeIfSupported("justifyLeft");
                        },
                        formatJustifyRight: function () {
                          return this.toggleAttributeIfSupported(
                            "justifyRight"
                          );
                        },
                        formatOutdent: function () {
                          var t;
                          return (
                            null != (t = this.responder)
                              ? t.canDecreaseNestingLevel()
                              : void 0
                          )
                            ? this.withTargetDOMRange(function () {
                                var t;
                                return null != (t = this.responder)
                                  ? t.decreaseNestingLevel()
                                  : void 0;
                              })
                            : void 0;
                        },
                        formatRemove: function () {
                          return this.withTargetDOMRange(function () {
                            var t, e, n, r;
                            for (t in ((r = []),
                            null != (e = this.responder)
                              ? e.getCurrentAttributes()
                              : void 0))
                              r.push(
                                null != (n = this.responder)
                                  ? n.removeCurrentAttribute(t)
                                  : void 0
                              );
                            return r;
                          });
                        },
                        formatSetBlockTextDirection: function () {
                          return this.activateAttributeIfSupported(
                            "blockDir",
                            this.event.data
                          );
                        },
                        formatSetInlineTextDirection: function () {
                          return this.activateAttributeIfSupported(
                            "textDir",
                            this.event.data
                          );
                        },
                        formatStrikeThrough: function () {
                          return this.toggleAttributeIfSupported("strike");
                        },
                        formatSubscript: function () {
                          return this.toggleAttributeIfSupported("sub");
                        },
                        formatSuperscript: function () {
                          return this.toggleAttributeIfSupported("sup");
                        },
                        formatUnderline: function () {
                          return this.toggleAttributeIfSupported("underline");
                        },
                        historyRedo: function () {
                          var t;
                          return null != (t = this.delegate)
                            ? t.inputControllerWillPerformRedo()
                            : void 0;
                        },
                        historyUndo: function () {
                          var t;
                          return null != (t = this.delegate)
                            ? t.inputControllerWillPerformUndo()
                            : void 0;
                        },
                        insertCompositionText: function () {
                          return (
                            (this.composing = !0),
                            this.insertString(this.event.data)
                          );
                        },
                        insertFromComposition: function () {
                          return (
                            (this.composing = !1),
                            this.insertString(this.event.data)
                          );
                        },
                        insertFromDrop: function () {
                          var t, e;
                          return (t = this.deleteByDragRange)
                            ? ((this.deleteByDragRange = null),
                              null != (e = this.delegate) &&
                                e.inputControllerWillMoveText(),
                              this.withTargetDOMRange(function () {
                                var e;
                                return null != (e = this.responder)
                                  ? e.moveTextFromRange(t)
                                  : void 0;
                              }))
                            : void 0;
                        },
                        insertFromPaste: function () {
                          var n, r, i, o, a, s, u, c, l, h, d;
                          return (
                            (n = this.event.dataTransfer),
                            (a = { dataTransfer: n }),
                            (r = n.getData("URL"))
                              ? ((a.type = "text/html"),
                                (d = (o = n.getData("public.url-name"))
                                  ? t.squishBreakableWhitespace(o).trim()
                                  : r),
                                (a.html = this.createLinkHTML(r, d)),
                                null != (s = this.delegate) &&
                                  s.inputControllerWillPaste(a),
                                this.withTargetDOMRange(function () {
                                  var t;
                                  return null != (t = this.responder)
                                    ? t.insertHTML(a.html)
                                    : void 0;
                                }),
                                (this.afterRender = (function (t) {
                                  return function () {
                                    var e;
                                    return null != (e = t.delegate)
                                      ? e.inputControllerDidPaste(a)
                                      : void 0;
                                  };
                                })(this)))
                              : e(n)
                              ? ((a.type = "text/plain"),
                                (a.string = n.getData("text/plain")),
                                null != (u = this.delegate) &&
                                  u.inputControllerWillPaste(a),
                                this.withTargetDOMRange(function () {
                                  var t;
                                  return null != (t = this.responder)
                                    ? t.insertString(a.string)
                                    : void 0;
                                }),
                                (this.afterRender = (function (t) {
                                  return function () {
                                    var e;
                                    return null != (e = t.delegate)
                                      ? e.inputControllerDidPaste(a)
                                      : void 0;
                                  };
                                })(this)))
                              : (i = n.getData("text/html"))
                              ? ((a.type = "text/html"),
                                (a.html = i),
                                null != (c = this.delegate) &&
                                  c.inputControllerWillPaste(a),
                                this.withTargetDOMRange(function () {
                                  var t;
                                  return null != (t = this.responder)
                                    ? t.insertHTML(a.html)
                                    : void 0;
                                }),
                                (this.afterRender = (function (t) {
                                  return function () {
                                    var e;
                                    return null != (e = t.delegate)
                                      ? e.inputControllerDidPaste(a)
                                      : void 0;
                                  };
                                })(this)))
                              : (null != (l = n.files) ? l.length : void 0)
                              ? ((a.type = "File"),
                                (a.file = n.files[0]),
                                null != (h = this.delegate) &&
                                  h.inputControllerWillPaste(a),
                                this.withTargetDOMRange(function () {
                                  var t;
                                  return null != (t = this.responder)
                                    ? t.insertFile(a.file)
                                    : void 0;
                                }),
                                (this.afterRender = (function (t) {
                                  return function () {
                                    var e;
                                    return null != (e = t.delegate)
                                      ? e.inputControllerDidPaste(a)
                                      : void 0;
                                  };
                                })(this)))
                              : void 0
                          );
                        },
                        insertFromYank: function () {
                          return this.insertString(this.event.data);
                        },
                        insertLineBreak: function () {
                          return this.insertString("\n");
                        },
                        insertLink: function () {
                          return this.activateAttributeIfSupported(
                            "href",
                            this.event.data
                          );
                        },
                        insertOrderedList: function () {
                          return this.toggleAttributeIfSupported("number");
                        },
                        insertParagraph: function () {
                          var t;
                          return (
                            null != (t = this.delegate) &&
                              t.inputControllerWillPerformTyping(),
                            this.withTargetDOMRange(function () {
                              var t;
                              return null != (t = this.responder)
                                ? t.insertLineBreak()
                                : void 0;
                            })
                          );
                        },
                        insertReplacementText: function () {
                          return this.insertString(
                            this.event.dataTransfer.getData("text/plain"),
                            { updatePosition: !1 }
                          );
                        },
                        insertText: function () {
                          var t, e;
                          return this.insertString(
                            null != (t = this.event.data)
                              ? t
                              : null != (e = this.event.dataTransfer)
                              ? e.getData("text/plain")
                              : void 0
                          );
                        },
                        insertTranspose: function () {
                          return this.insertString(this.event.data);
                        },
                        insertUnorderedList: function () {
                          return this.toggleAttributeIfSupported("bullet");
                        },
                      }),
                      (u.prototype.insertString = function (t, e) {
                        var n;
                        return (
                          null == t && (t = ""),
                          null != (n = this.delegate) &&
                            n.inputControllerWillPerformTyping(),
                          this.withTargetDOMRange(function () {
                            var n;
                            return null != (n = this.responder)
                              ? n.insertString(t, e)
                              : void 0;
                          })
                        );
                      }),
                      (u.prototype.toggleAttributeIfSupported = function (e) {
                        var n;
                        return s.call(t.getAllAttributeNames(), e) >= 0
                          ? (null != (n = this.delegate) &&
                              n.inputControllerWillPerformFormatting(e),
                            this.withTargetDOMRange(function () {
                              var t;
                              return null != (t = this.responder)
                                ? t.toggleCurrentAttribute(e)
                                : void 0;
                            }))
                          : void 0;
                      }),
                      (u.prototype.activateAttributeIfSupported = function (
                        e,
                        n
                      ) {
                        var r;
                        return s.call(t.getAllAttributeNames(), e) >= 0
                          ? (null != (r = this.delegate) &&
                              r.inputControllerWillPerformFormatting(e),
                            this.withTargetDOMRange(function () {
                              var t;
                              return null != (t = this.responder)
                                ? t.setCurrentAttribute(e, n)
                                : void 0;
                            }))
                          : void 0;
                      }),
                      (u.prototype.deleteInDirection = function (t, e) {
                        var n, r, i;
                        return (
                          (null != e ? e : { recordUndoEntry: !0 })
                            .recordUndoEntry &&
                            null != (i = this.delegate) &&
                            i.inputControllerWillPerformTyping(),
                          (r = (function (e) {
                            return function () {
                              var n;
                              return null != (n = e.responder)
                                ? n.deleteInDirection(t)
                                : void 0;
                            };
                          })(this)),
                          (n = this.getTargetDOMRange({ minLength: 2 }))
                            ? this.withTargetDOMRange(n, r)
                            : r()
                        );
                      }),
                      (u.prototype.withTargetDOMRange = function (e, n) {
                        var r;
                        return (
                          "function" == typeof e &&
                            ((n = e), (e = this.getTargetDOMRange())),
                          e
                            ? null != (r = this.responder)
                              ? r.withTargetDOMRange(e, n.bind(this))
                              : void 0
                            : (t.selectionChangeObserver.reset(), n.call(this))
                        );
                      }),
                      (u.prototype.getTargetDOMRange = function (t) {
                        var e, n, r, i;
                        return (
                          (r = (null != t ? t : { minLength: 0 }).minLength),
                          (i =
                            "function" ==
                            typeof (e = this.event).getTargetRanges
                              ? e.getTargetRanges()
                              : void 0) &&
                          i.length &&
                          ((n = f(i[0])), 0 === r || n.toString().length >= r)
                            ? n
                            : void 0
                        );
                      }),
                      (f = function (t) {
                        var e;
                        return (
                          (e = document.createRange()).setStart(
                            t.startContainer,
                            t.startOffset
                          ),
                          e.setEnd(t.endContainer, t.endOffset),
                          e
                        );
                      }),
                      (u.prototype.withEvent = function (t, e) {
                        var n;
                        this.event = t;
                        try {
                          n = e.call(this);
                        } finally {
                          this.event = null;
                        }
                        return n;
                      }),
                      (c = function (t) {
                        var e, n;
                        return (
                          s.call(
                            null !=
                              (e =
                                null != (n = t.dataTransfer) ? n.types : void 0)
                              ? e
                              : [],
                            "Files"
                          ) >= 0
                        );
                      }),
                      (h = function (t) {
                        var e;
                        return (e = t.clipboardData)
                          ? s.call(e.types, "Files") >= 0 &&
                              1 === e.types.length &&
                              e.files.length >= 1
                          : void 0;
                      }),
                      (d = function (t) {
                        var e;
                        return (e = t.clipboardData)
                          ? s.call(e.types, "text/plain") >= 0 &&
                              1 === e.types.length
                          : void 0;
                      }),
                      (l = function (t) {
                        var e;
                        return (
                          (e = []),
                          t.altKey && e.push("alt"),
                          t.shiftKey && e.push("shift"),
                          e.push(t.key),
                          e
                        );
                      }),
                      (p = function (t) {
                        return { x: t.clientX, y: t.clientY };
                      }),
                      u
                    );
                  })(t.InputController));
              }.call(this),
              function () {
                var e,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  c,
                  l = function (t, e) {
                    return function () {
                      return t.apply(e, arguments);
                    };
                  },
                  h = function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    for (var r in e) d.call(e, r) && (t[r] = e[r]);
                    return (
                      (n.prototype = e.prototype),
                      (t.prototype = new n()),
                      (t.__super__ = e.prototype),
                      t
                    );
                  },
                  d = {}.hasOwnProperty;
                (n = t.defer),
                  (r = t.escapeHTML),
                  (i = t.handleEvent),
                  (s = t.makeElement),
                  (c = t.tagName),
                  (u = t.config),
                  (a = u.lang),
                  (e = u.css),
                  (o = u.keyNames),
                  (t.AttachmentEditorController = (function (u) {
                    function d(t, e, n, r) {
                      (this.attachmentPiece = t),
                        (this.element = e),
                        (this.container = n),
                        (this.options = null != r ? r : {}),
                        (this.didBlurCaption = l(this.didBlurCaption, this)),
                        (this.didChangeCaption = l(
                          this.didChangeCaption,
                          this
                        )),
                        (this.didInputCaption = l(this.didInputCaption, this)),
                        (this.didKeyDownCaption = l(
                          this.didKeyDownCaption,
                          this
                        )),
                        (this.didClickActionButton = l(
                          this.didClickActionButton,
                          this
                        )),
                        (this.didClickToolbar = l(this.didClickToolbar, this)),
                        (this.attachment = this.attachmentPiece.attachment),
                        "a" === c(this.element) &&
                          (this.element = this.element.firstChild),
                        this.install();
                    }
                    var p;
                    return (
                      h(d, u),
                      (p = function (t) {
                        return function () {
                          var e;
                          return (
                            (e = t.apply(this, arguments)).do(),
                            null == this.undos && (this.undos = []),
                            this.undos.push(e.undo)
                          );
                        };
                      }),
                      (d.prototype.install = function () {
                        return (
                          this.makeElementMutable(),
                          this.addToolbar(),
                          this.attachment.isPreviewable()
                            ? this.installCaptionEditor()
                            : void 0
                        );
                      }),
                      (d.prototype.uninstall = function () {
                        var t, e;
                        for (
                          this.savePendingCaption();
                          (e = this.undos.pop());

                        )
                          e();
                        return null != (t = this.delegate)
                          ? t.didUninstallAttachmentEditor(this)
                          : void 0;
                      }),
                      (d.prototype.savePendingCaption = function () {
                        var t, e, n;
                        return null != this.pendingCaption
                          ? ((t = this.pendingCaption),
                            (this.pendingCaption = null),
                            t
                              ? null != (e = this.delegate) &&
                                "function" ==
                                  typeof e.attachmentEditorDidRequestUpdatingAttributesForAttachment
                                ? e.attachmentEditorDidRequestUpdatingAttributesForAttachment(
                                    { caption: t },
                                    this.attachment
                                  )
                                : void 0
                              : null != (n = this.delegate) &&
                                "function" ==
                                  typeof n.attachmentEditorDidRequestRemovingAttributeForAttachment
                              ? n.attachmentEditorDidRequestRemovingAttributeForAttachment(
                                  "caption",
                                  this.attachment
                                )
                              : void 0)
                          : void 0;
                      }),
                      (d.prototype.makeElementMutable = p(function () {
                        return {
                          do: (function (t) {
                            return function () {
                              return (t.element.dataset.trixMutable = !0);
                            };
                          })(this),
                          undo: (function (t) {
                            return function () {
                              return delete t.element.dataset.trixMutable;
                            };
                          })(this),
                        };
                      })),
                      (d.prototype.addToolbar = p(function () {
                        var n, o, u;
                        return (
                          ((n = s({
                            tagName: "div",
                            className: e.attachmentToolbar,
                            data: { trixMutable: !0 },
                          })).innerHTML =
                            '<div class="trix-button-row">\n  <span class="trix-button-group trix-button-group--actions">\n    <button type="button" data-trix-action="remove" class="trix-button trix-button--remove" title="' +
                            a.remove +
                            '">' +
                            a.remove +
                            "</button>\n  </span>\n</div>"),
                          this.attachment.isPreviewable() &&
                            ((o = r(this.attachment.getFilename())),
                            (u = r(this.attachment.getFormattedFilesize())),
                            (n.innerHTML +=
                              '<div class="' +
                              e.attachmentMetadataContainer +
                              '">\n  <span class="' +
                              e.attachmentMetadata +
                              '">\n    <span class="' +
                              e.attachmentName +
                              '" title="' +
                              o +
                              '">' +
                              o +
                              '</span>\n    <span class="' +
                              e.attachmentSize +
                              '">' +
                              u +
                              "</span>\n  </span>\n</div>")),
                          i("click", {
                            onElement: n,
                            withCallback: this.didClickToolbar,
                          }),
                          i("click", {
                            onElement: n,
                            matchingSelector: "[data-trix-action]",
                            withCallback: this.didClickActionButton,
                          }),
                          {
                            do: (function (t) {
                              return function () {
                                return t.element.appendChild(n);
                              };
                            })(this),
                            undo: function () {
                              return t.removeNode(n);
                            },
                          }
                        );
                      })),
                      (d.prototype.installCaptionEditor = p(function () {
                        var r, o, u, c, l;
                        return (
                          ((c = s({
                            tagName: "textarea",
                            className: e.attachmentCaptionEditor,
                            attributes: { placeholder: a.captionPlaceholder },
                            data: { trixMutable: !0 },
                          })).value = this.attachmentPiece.getCaption()),
                          (l = c.cloneNode()).classList.add(
                            "trix-autoresize-clone"
                          ),
                          (l.tabIndex = -1),
                          (r = function () {
                            return (
                              (l.value = c.value),
                              (c.style.height = l.scrollHeight + "px")
                            );
                          }),
                          i("input", { onElement: c, withCallback: r }),
                          i("input", {
                            onElement: c,
                            withCallback: this.didInputCaption,
                          }),
                          i("keydown", {
                            onElement: c,
                            withCallback: this.didKeyDownCaption,
                          }),
                          i("change", {
                            onElement: c,
                            withCallback: this.didChangeCaption,
                          }),
                          i("blur", {
                            onElement: c,
                            withCallback: this.didBlurCaption,
                          }),
                          (u = this.element.querySelector("figcaption")),
                          (o = u.cloneNode()),
                          {
                            do: (function (t) {
                              return function () {
                                return (
                                  (u.style.display = "none"),
                                  o.appendChild(c),
                                  o.appendChild(l),
                                  o.classList.add(
                                    e.attachmentCaption + "--editing"
                                  ),
                                  u.parentElement.insertBefore(o, u),
                                  r(),
                                  t.options.editCaption
                                    ? n(function () {
                                        return c.focus();
                                      })
                                    : void 0
                                );
                              };
                            })(this),
                            undo: function () {
                              return t.removeNode(o), (u.style.display = null);
                            },
                          }
                        );
                      })),
                      (d.prototype.didClickToolbar = function (t) {
                        return t.preventDefault(), t.stopPropagation();
                      }),
                      (d.prototype.didClickActionButton = function (t) {
                        var e;
                        switch (t.target.getAttribute("data-trix-action")) {
                          case "remove":
                            return null != (e = this.delegate)
                              ? e.attachmentEditorDidRequestRemovalOfAttachment(
                                  this.attachment
                                )
                              : void 0;
                        }
                      }),
                      (d.prototype.didKeyDownCaption = function (t) {
                        var e;
                        return "return" === o[t.keyCode]
                          ? (t.preventDefault(),
                            this.savePendingCaption(),
                            null != (e = this.delegate) &&
                            "function" ==
                              typeof e.attachmentEditorDidRequestDeselectingAttachment
                              ? e.attachmentEditorDidRequestDeselectingAttachment(
                                  this.attachment
                                )
                              : void 0)
                          : void 0;
                      }),
                      (d.prototype.didInputCaption = function (t) {
                        return (this.pendingCaption = t.target.value
                          .replace(/\s/g, " ")
                          .trim());
                      }),
                      (d.prototype.didChangeCaption = function () {
                        return this.savePendingCaption();
                      }),
                      (d.prototype.didBlurCaption = function () {
                        return this.savePendingCaption();
                      }),
                      d
                    );
                  })(t.BasicObject));
              }.call(this),
              function () {
                var e,
                  n,
                  r,
                  i = function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    for (var r in e) o.call(e, r) && (t[r] = e[r]);
                    return (
                      (n.prototype = e.prototype),
                      (t.prototype = new n()),
                      (t.__super__ = e.prototype),
                      t
                    );
                  },
                  o = {}.hasOwnProperty;
                (r = t.makeElement),
                  (e = t.config.css),
                  (t.AttachmentView = (function (o) {
                    function a() {
                      a.__super__.constructor.apply(this, arguments),
                        (this.attachment = this.object),
                        (this.attachment.uploadProgressDelegate = this),
                        (this.attachmentPiece = this.options.piece);
                    }
                    var s;
                    return (
                      i(a, o),
                      (a.attachmentSelector = "[data-trix-attachment]"),
                      (a.prototype.createContentNodes = function () {
                        return [];
                      }),
                      (a.prototype.createNodes = function () {
                        var t, n, i, o, a, u, c;
                        if (
                          ((t = o = r({
                            tagName: "figure",
                            className: this.getClassName(),
                            data: this.getData(),
                            editable: !1,
                          })),
                          (n = this.getHref()) &&
                            ((o = r({
                              tagName: "a",
                              editable: !1,
                              attributes: { href: n, tabindex: -1 },
                            })),
                            t.appendChild(o)),
                          this.attachment.hasContent())
                        )
                          o.innerHTML = this.attachment.getContent();
                        else
                          for (
                            i = 0, a = (c = this.createContentNodes()).length;
                            a > i;
                            i++
                          )
                            (u = c[i]), o.appendChild(u);
                        return (
                          o.appendChild(this.createCaptionElement()),
                          this.attachment.isPending() &&
                            ((this.progressElement = r({
                              tagName: "progress",
                              attributes: {
                                class: e.attachmentProgress,
                                value: this.attachment.getUploadProgress(),
                                max: 100,
                              },
                              data: {
                                trixMutable: !0,
                                trixStoreKey: [
                                  "progressElement",
                                  this.attachment.id,
                                ].join("/"),
                              },
                            })),
                            t.appendChild(this.progressElement)),
                          [s("left"), t, s("right")]
                        );
                      }),
                      (a.prototype.createCaptionElement = function () {
                        var t, n, i, o, a, s, u;
                        return (
                          (i = r({
                            tagName: "figcaption",
                            className: e.attachmentCaption,
                          })),
                          (t = this.attachmentPiece.getCaption())
                            ? (i.classList.add(
                                e.attachmentCaption + "--edited"
                              ),
                              (i.textContent = t))
                            : ((n = this.getCaptionConfig()).name &&
                                (o = this.attachment.getFilename()),
                              n.size &&
                                (s = this.attachment.getFormattedFilesize()),
                              o &&
                                ((a = r({
                                  tagName: "span",
                                  className: e.attachmentName,
                                  textContent: o,
                                })),
                                i.appendChild(a)),
                              s &&
                                (o &&
                                  i.appendChild(document.createTextNode(" ")),
                                (u = r({
                                  tagName: "span",
                                  className: e.attachmentSize,
                                  textContent: s,
                                })),
                                i.appendChild(u))),
                          i
                        );
                      }),
                      (a.prototype.getClassName = function () {
                        var t, n;
                        return (
                          (n = [
                            e.attachment,
                            e.attachment + "--" + this.attachment.getType(),
                          ]),
                          (t = this.attachment.getExtension()) &&
                            n.push(e.attachment + "--" + t),
                          n.join(" ")
                        );
                      }),
                      (a.prototype.getData = function () {
                        var t, e;
                        return (
                          (e = {
                            trixAttachment: JSON.stringify(this.attachment),
                            trixContentType: this.attachment.getContentType(),
                            trixId: this.attachment.id,
                          }),
                          (t = this.attachmentPiece.attributes).isEmpty() ||
                            (e.trixAttributes = JSON.stringify(t)),
                          this.attachment.isPending() && (e.trixSerialize = !1),
                          e
                        );
                      }),
                      (a.prototype.getHref = function () {
                        return n(this.attachment.getContent(), "a")
                          ? void 0
                          : this.attachment.getHref();
                      }),
                      (a.prototype.getCaptionConfig = function () {
                        var e, n, r;
                        return (
                          (r = this.attachment.getType()),
                          (e = t.copyObject(
                            null != (n = t.config.attachments[r])
                              ? n.caption
                              : void 0
                          )),
                          "file" === r && (e.name = !0),
                          e
                        );
                      }),
                      (a.prototype.findProgressElement = function () {
                        var t;
                        return null != (t = this.findElement())
                          ? t.querySelector("progress")
                          : void 0;
                      }),
                      (s = function (e) {
                        return r({
                          tagName: "span",
                          textContent: t.ZERO_WIDTH_SPACE,
                          data: { trixCursorTarget: e, trixSerialize: !1 },
                        });
                      }),
                      (a.prototype.attachmentDidChangeUploadProgress = function () {
                        var t, e;
                        return (
                          (e = this.attachment.getUploadProgress()),
                          null != (t = this.findProgressElement())
                            ? (t.value = e)
                            : void 0
                        );
                      }),
                      a
                    );
                  })(t.ObjectView)),
                  (n = function (t, e) {
                    var n;
                    return (
                      (n = r("div")),
                      (n.innerHTML = null != t ? t : ""),
                      n.querySelector(e)
                    );
                  });
              }.call(this),
              function () {
                var e,
                  n = function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    for (var i in e) r.call(e, i) && (t[i] = e[i]);
                    return (
                      (n.prototype = e.prototype),
                      (t.prototype = new n()),
                      (t.__super__ = e.prototype),
                      t
                    );
                  },
                  r = {}.hasOwnProperty;
                (e = t.makeElement),
                  (t.PreviewableAttachmentView = (function (r) {
                    function i() {
                      i.__super__.constructor.apply(this, arguments),
                        (this.attachment.previewDelegate = this);
                    }
                    return (
                      n(i, r),
                      (i.prototype.createContentNodes = function () {
                        return (
                          (this.image = e({
                            tagName: "img",
                            attributes: { src: "" },
                            data: { trixMutable: !0 },
                          })),
                          this.refresh(this.image),
                          [this.image]
                        );
                      }),
                      (i.prototype.createCaptionElement = function () {
                        var e;
                        return (
                          (e = i.__super__.createCaptionElement.apply(
                            this,
                            arguments
                          )).textContent ||
                            e.setAttribute(
                              "data-trix-placeholder",
                              t.config.lang.captionPlaceholder
                            ),
                          e
                        );
                      }),
                      (i.prototype.refresh = function (t) {
                        var e;
                        return (
                          null == t &&
                            (t =
                              null != (e = this.findElement())
                                ? e.querySelector("img")
                                : void 0),
                          t ? this.updateAttributesForImage(t) : void 0
                        );
                      }),
                      (i.prototype.updateAttributesForImage = function (t) {
                        var e, n, r, i, o, a;
                        return (
                          (o = this.attachment.getURL()),
                          (n = this.attachment.getPreviewURL()),
                          (t.src = n || o),
                          n === o
                            ? t.removeAttribute(
                                "data-trix-serialized-attributes"
                              )
                            : ((r = JSON.stringify({ src: o })),
                              t.setAttribute(
                                "data-trix-serialized-attributes",
                                r
                              )),
                          (a = this.attachment.getWidth()),
                          (e = this.attachment.getHeight()),
                          null != a && (t.width = a),
                          null != e && (t.height = e),
                          (i = [
                            "imageElement",
                            this.attachment.id,
                            t.src,
                            t.width,
                            t.height,
                          ].join("/")),
                          (t.dataset.trixStoreKey = i)
                        );
                      }),
                      (i.prototype.attachmentDidChangeAttributes = function () {
                        return this.refresh(this.image), this.refresh();
                      }),
                      i
                    );
                  })(t.AttachmentView));
              }.call(this),
              function () {
                var e,
                  n,
                  r,
                  i = function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    for (var r in e) o.call(e, r) && (t[r] = e[r]);
                    return (
                      (n.prototype = e.prototype),
                      (t.prototype = new n()),
                      (t.__super__ = e.prototype),
                      t
                    );
                  },
                  o = {}.hasOwnProperty;
                (r = t.makeElement),
                  (e = t.findInnerElement),
                  (n = t.getTextConfig),
                  (t.PieceView = (function (o) {
                    function a() {
                      var t;
                      a.__super__.constructor.apply(this, arguments),
                        (this.piece = this.object),
                        (this.attributes = this.piece.getAttributes()),
                        (t = this.options),
                        (this.textConfig = t.textConfig),
                        (this.context = t.context),
                        this.piece.attachment
                          ? (this.attachment = this.piece.attachment)
                          : (this.string = this.piece.toString());
                    }
                    var s;
                    return (
                      i(a, o),
                      (a.prototype.createNodes = function () {
                        var t, n, r, i, o, a;
                        if (
                          ((a = this.attachment
                            ? this.createAttachmentNodes()
                            : this.createStringNodes()),
                          (t = this.createElement()))
                        ) {
                          for (r = e(t), n = 0, i = a.length; i > n; n++)
                            (o = a[n]), r.appendChild(o);
                          a = [t];
                        }
                        return a;
                      }),
                      (a.prototype.createAttachmentNodes = function () {
                        var e;
                        return (
                          (e = this.attachment.isPreviewable()
                            ? t.PreviewableAttachmentView
                            : t.AttachmentView),
                          this.createChildView(e, this.piece.attachment, {
                            piece: this.piece,
                          }).getNodes()
                        );
                      }),
                      (a.prototype.createStringNodes = function () {
                        var t, e, n, i, o, a, s, u, c;
                        if (
                          null != (s = this.textConfig) ? s.plaintext : void 0
                        )
                          return [document.createTextNode(this.string)];
                        for (
                          a = [],
                            n = e = 0,
                            i = (u = this.string.split("\n")).length;
                          i > e;
                          n = ++e
                        )
                          (c = u[n]),
                            n > 0 && ((t = r("br")), a.push(t)),
                            c.length &&
                              ((o = document.createTextNode(
                                this.preserveSpaces(c)
                              )),
                              a.push(o));
                        return a;
                      }),
                      (a.prototype.createElement = function () {
                        var t, e, i, o, a, s, u, c, l;
                        for (o in ((c = {}), (s = this.attributes)))
                          if (
                            ((l = s[o]),
                            (t = n(o)) &&
                              (t.tagName &&
                                ((a = r(t.tagName)),
                                i ? (i.appendChild(a), (i = a)) : (e = i = a)),
                              t.styleProperty && (c[t.styleProperty] = l),
                              t.style))
                          )
                            for (o in (u = t.style)) (l = u[o]), (c[o] = l);
                        if (Object.keys(c).length)
                          for (o in (null == e && (e = r("span")), c))
                            (l = c[o]), (e.style[o] = l);
                        return e;
                      }),
                      (a.prototype.createContainerElement = function () {
                        var t, e, i, o, a;
                        for (i in (o = this.attributes))
                          if (((a = o[i]), (e = n(i)) && e.groupTagName))
                            return ((t = {})[i] = a), r(e.groupTagName, t);
                      }),
                      (s = t.NON_BREAKING_SPACE),
                      (a.prototype.preserveSpaces = function (t) {
                        return (
                          this.context.isLast && (t = t.replace(/\ $/, s)),
                          (t = t
                            .replace(/(\S)\ {3}(\S)/g, "$1 " + s + " $2")
                            .replace(/\ {2}/g, s + " ")
                            .replace(/\ {2}/g, " " + s)),
                          (this.context.isFirst ||
                            this.context.followsWhitespace) &&
                            (t = t.replace(/^\ /, s)),
                          t
                        );
                      }),
                      a
                    );
                  })(t.ObjectView));
              }.call(this),
              function () {
                var e = function (t, e) {
                    function r() {
                      this.constructor = t;
                    }
                    for (var i in e) n.call(e, i) && (t[i] = e[i]);
                    return (
                      (r.prototype = e.prototype),
                      (t.prototype = new r()),
                      (t.__super__ = e.prototype),
                      t
                    );
                  },
                  n = {}.hasOwnProperty;
                t.TextView = (function (n) {
                  function r() {
                    r.__super__.constructor.apply(this, arguments),
                      (this.text = this.object),
                      (this.textConfig = this.options.textConfig);
                  }
                  var i;
                  return (
                    e(r, n),
                    (r.prototype.createNodes = function () {
                      var e, n, r, o, a, s, u, c, l, h;
                      for (
                        s = [],
                          o =
                            (c = t.ObjectGroup.groupObjects(this.getPieces()))
                              .length - 1,
                          r = n = 0,
                          a = c.length;
                        a > n;
                        r = ++n
                      )
                        (u = c[r]),
                          (e = {}),
                          0 === r && (e.isFirst = !0),
                          r === o && (e.isLast = !0),
                          i(l) && (e.followsWhitespace = !0),
                          (h = this.findOrCreateCachedChildView(
                            t.PieceView,
                            u,
                            { textConfig: this.textConfig, context: e }
                          )),
                          s.push.apply(s, h.getNodes()),
                          (l = u);
                      return s;
                    }),
                    (r.prototype.getPieces = function () {
                      var t, e, n, r, i;
                      for (
                        i = [], t = 0, e = (r = this.text.getPieces()).length;
                        e > t;
                        t++
                      )
                        (n = r[t]).hasAttribute("blockBreak") || i.push(n);
                      return i;
                    }),
                    (i = function (t) {
                      return /\s$/.test(null != t ? t.toString() : void 0);
                    }),
                    r
                  );
                })(t.ObjectView);
              }.call(this),
              function () {
                var e,
                  n,
                  r,
                  i = function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    for (var r in e) o.call(e, r) && (t[r] = e[r]);
                    return (
                      (n.prototype = e.prototype),
                      (t.prototype = new n()),
                      (t.__super__ = e.prototype),
                      t
                    );
                  },
                  o = {}.hasOwnProperty;
                (r = t.makeElement),
                  (n = t.getBlockConfig),
                  (e = t.config.css),
                  (t.BlockView = (function (o) {
                    function a() {
                      a.__super__.constructor.apply(this, arguments),
                        (this.block = this.object),
                        (this.attributes = this.block.getAttributes());
                    }
                    return (
                      i(a, o),
                      (a.prototype.createNodes = function () {
                        var e, i, o, a, s, u, c, l;
                        if (
                          ((s = [document.createComment("block")]),
                          this.block.isEmpty()
                            ? s.push(r("br"))
                            : ((c =
                                null != (u = n(this.block.getLastAttribute()))
                                  ? u.text
                                  : void 0),
                              (l = this.findOrCreateCachedChildView(
                                t.TextView,
                                this.block.text,
                                { textConfig: c }
                              )),
                              s.push.apply(s, l.getNodes()),
                              this.shouldAddExtraNewlineElement() &&
                                s.push(r("br"))),
                          this.attributes.length)
                        )
                          return s;
                        for (
                          e = r(t.config.blockAttributes.default.tagName),
                            i = 0,
                            o = s.length;
                          o > i;
                          i++
                        )
                          (a = s[i]), e.appendChild(a);
                        return [e];
                      }),
                      (a.prototype.createContainerElement = function (t) {
                        var i, o, a;
                        return (
                          (i = this.attributes[t]),
                          (o = { tagName: n(i).tagName }),
                          "attachmentGallery" === i &&
                            ((a = this.block.getBlockBreakPosition()),
                            (o.className =
                              e.attachmentGallery +
                              " " +
                              e.attachmentGallery +
                              "--" +
                              a)),
                          r(o)
                        );
                      }),
                      (a.prototype.shouldAddExtraNewlineElement = function () {
                        return /\n\n$/.test(this.block.toString());
                      }),
                      a
                    );
                  })(t.ObjectView));
              }.call(this),
              function () {
                var e,
                  n,
                  r = function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    for (var r in e) i.call(e, r) && (t[r] = e[r]);
                    return (
                      (n.prototype = e.prototype),
                      (t.prototype = new n()),
                      (t.__super__ = e.prototype),
                      t
                    );
                  },
                  i = {}.hasOwnProperty;
                (e = t.defer),
                  (n = t.makeElement),
                  (t.DocumentView = (function (i) {
                    function o() {
                      o.__super__.constructor.apply(this, arguments),
                        (this.element = this.options.element),
                        (this.elementStore = new t.ElementStore()),
                        this.setDocument(this.object);
                    }
                    var a, s, u;
                    return (
                      r(o, i),
                      (o.render = function (t) {
                        var e, r;
                        return (
                          (r = new this(t, {
                            element: (e = n("div")),
                          })).render(),
                          r.sync(),
                          e
                        );
                      }),
                      (o.prototype.setDocument = function (t) {
                        return t.isEqualTo(this.document)
                          ? void 0
                          : (this.document = this.object = t);
                      }),
                      (o.prototype.render = function () {
                        var e, r, i, o, a, s, u;
                        if (
                          ((this.childViews = []),
                          (this.shadowElement = n("div")),
                          !this.document.isEmpty())
                        ) {
                          for (
                            s = [],
                              e = 0,
                              r = (a = t.ObjectGroup.groupObjects(
                                this.document.getBlocks(),
                                { asTree: !0 }
                              )).length;
                            r > e;
                            e++
                          )
                            (o = a[e]),
                              (u = this.findOrCreateCachedChildView(
                                t.BlockView,
                                o
                              )),
                              s.push(
                                function () {
                                  var t, e, n, r;
                                  for (
                                    r = [],
                                      t = 0,
                                      e = (n = u.getNodes()).length;
                                    e > t;
                                    t++
                                  )
                                    (i = n[t]),
                                      r.push(this.shadowElement.appendChild(i));
                                  return r;
                                }.call(this)
                              );
                          return s;
                        }
                      }),
                      (o.prototype.isSynced = function () {
                        return a(this.shadowElement, this.element);
                      }),
                      (o.prototype.sync = function () {
                        var t;
                        for (
                          t = this.createDocumentFragmentForSync();
                          this.element.lastChild;

                        )
                          this.element.removeChild(this.element.lastChild);
                        return this.element.appendChild(t), this.didSync();
                      }),
                      (o.prototype.didSync = function () {
                        return (
                          this.elementStore.reset(s(this.element)),
                          e(
                            (function (t) {
                              return function () {
                                return t.garbageCollectCachedViews();
                              };
                            })(this)
                          )
                        );
                      }),
                      (o.prototype.createDocumentFragmentForSync = function () {
                        var t, e, n, r, i, o, a, u, c, l;
                        for (
                          e = document.createDocumentFragment(),
                            n = 0,
                            i = (u = this.shadowElement.childNodes).length;
                          i > n;
                          n++
                        )
                          (a = u[n]), e.appendChild(a.cloneNode(!0));
                        for (r = 0, o = (c = s(e)).length; o > r; r++)
                          (t = c[r]),
                            (l = this.elementStore.remove(t)) &&
                              t.parentNode.replaceChild(l, t);
                        return e;
                      }),
                      (s = function (t) {
                        return t.querySelectorAll("[data-trix-store-key]");
                      }),
                      (a = function (t, e) {
                        return u(t.innerHTML) === u(e.innerHTML);
                      }),
                      (u = function (t) {
                        return t.replace(/&nbsp;/g, " ");
                      }),
                      o
                    );
                  })(t.ObjectView));
              }.call(this),
              function () {
                var e,
                  n,
                  r,
                  i,
                  o,
                  a = function (t, e) {
                    return function () {
                      return t.apply(e, arguments);
                    };
                  },
                  s = function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    for (var r in e) u.call(e, r) && (t[r] = e[r]);
                    return (
                      (n.prototype = e.prototype),
                      (t.prototype = new n()),
                      (t.__super__ = e.prototype),
                      t
                    );
                  },
                  u = {}.hasOwnProperty;
                (r = t.findClosestElementFromNode),
                  (i = t.handleEvent),
                  (o = t.innerElementIsActive),
                  (n = t.defer),
                  (e = t.AttachmentView.attachmentSelector),
                  (t.CompositionController = (function (u) {
                    function c(n, r) {
                      (this.element = n),
                        (this.composition = r),
                        (this.didClickAttachment = a(
                          this.didClickAttachment,
                          this
                        )),
                        (this.didBlur = a(this.didBlur, this)),
                        (this.didFocus = a(this.didFocus, this)),
                        (this.documentView = new t.DocumentView(
                          this.composition.document,
                          { element: this.element }
                        )),
                        i("focus", {
                          onElement: this.element,
                          withCallback: this.didFocus,
                        }),
                        i("blur", {
                          onElement: this.element,
                          withCallback: this.didBlur,
                        }),
                        i("click", {
                          onElement: this.element,
                          matchingSelector: "a[contenteditable=false]",
                          preventDefault: !0,
                        }),
                        i("mousedown", {
                          onElement: this.element,
                          matchingSelector: e,
                          withCallback: this.didClickAttachment,
                        }),
                        i("click", {
                          onElement: this.element,
                          matchingSelector: "a" + e,
                          preventDefault: !0,
                        });
                    }
                    return (
                      s(c, u),
                      (c.prototype.didFocus = function () {
                        var t, e, n;
                        return (
                          (t = (function (t) {
                            return function () {
                              var e;
                              return t.focused
                                ? void 0
                                : ((t.focused = !0),
                                  null != (e = t.delegate) &&
                                  "function" ==
                                    typeof e.compositionControllerDidFocus
                                    ? e.compositionControllerDidFocus()
                                    : void 0);
                            };
                          })(this)),
                          null !=
                          (e =
                            null != (n = this.blurPromise) ? n.then(t) : void 0)
                            ? e
                            : t()
                        );
                      }),
                      (c.prototype.didBlur = function () {
                        return (this.blurPromise = new Promise(
                          (function (t) {
                            return function (e) {
                              return n(function () {
                                var n;
                                return (
                                  o(t.element) ||
                                    ((t.focused = null),
                                    null != (n = t.delegate) &&
                                      "function" ==
                                        typeof n.compositionControllerDidBlur &&
                                      n.compositionControllerDidBlur()),
                                  (t.blurPromise = null),
                                  e()
                                );
                              });
                            };
                          })(this)
                        ));
                      }),
                      (c.prototype.didClickAttachment = function (t, e) {
                        var n, i, o;
                        return (
                          (n = this.findAttachmentForElement(e)),
                          (i =
                            null !=
                            r(t.target, { matchingSelector: "figcaption" })),
                          null != (o = this.delegate) &&
                          "function" ==
                            typeof o.compositionControllerDidSelectAttachment
                            ? o.compositionControllerDidSelectAttachment(n, {
                                editCaption: i,
                              })
                            : void 0
                        );
                      }),
                      (c.prototype.getSerializableElement = function () {
                        return this.isEditingAttachment()
                          ? this.documentView.shadowElement
                          : this.element;
                      }),
                      (c.prototype.render = function () {
                        var t, e, n;
                        return (
                          this.revision !== this.composition.revision &&
                            (this.documentView.setDocument(
                              this.composition.document
                            ),
                            this.documentView.render(),
                            (this.revision = this.composition.revision)),
                          this.canSyncDocumentView() &&
                            !this.documentView.isSynced() &&
                            (null != (t = this.delegate) &&
                              "function" ==
                                typeof t.compositionControllerWillSyncDocumentView &&
                              t.compositionControllerWillSyncDocumentView(),
                            this.documentView.sync(),
                            null != (e = this.delegate) &&
                              "function" ==
                                typeof e.compositionControllerDidSyncDocumentView &&
                              e.compositionControllerDidSyncDocumentView()),
                          null != (n = this.delegate) &&
                          "function" == typeof n.compositionControllerDidRender
                            ? n.compositionControllerDidRender()
                            : void 0
                        );
                      }),
                      (c.prototype.rerenderViewForObject = function (t) {
                        return this.invalidateViewForObject(t), this.render();
                      }),
                      (c.prototype.invalidateViewForObject = function (t) {
                        return this.documentView.invalidateViewForObject(t);
                      }),
                      (c.prototype.isViewCachingEnabled = function () {
                        return this.documentView.isViewCachingEnabled();
                      }),
                      (c.prototype.enableViewCaching = function () {
                        return this.documentView.enableViewCaching();
                      }),
                      (c.prototype.disableViewCaching = function () {
                        return this.documentView.disableViewCaching();
                      }),
                      (c.prototype.refreshViewCache = function () {
                        return this.documentView.garbageCollectCachedViews();
                      }),
                      (c.prototype.isEditingAttachment = function () {
                        return null != this.attachmentEditor;
                      }),
                      (c.prototype.installAttachmentEditorForAttachment = function (
                        e,
                        n
                      ) {
                        var r, i, o;
                        if (
                          (null != (o = this.attachmentEditor)
                            ? o.attachment
                            : void 0) !== e &&
                          (i = this.documentView.findElementForObject(e))
                        )
                          return (
                            this.uninstallAttachmentEditor(),
                            (r = this.composition.document.getAttachmentPieceForAttachment(
                              e
                            )),
                            (this.attachmentEditor = new t.AttachmentEditorController(
                              r,
                              i,
                              this.element,
                              n
                            )),
                            (this.attachmentEditor.delegate = this)
                          );
                      }),
                      (c.prototype.uninstallAttachmentEditor = function () {
                        var t;
                        return null != (t = this.attachmentEditor)
                          ? t.uninstall()
                          : void 0;
                      }),
                      (c.prototype.didUninstallAttachmentEditor = function () {
                        return (this.attachmentEditor = null), this.render();
                      }),
                      (c.prototype.attachmentEditorDidRequestUpdatingAttributesForAttachment = function (
                        t,
                        e
                      ) {
                        var n;
                        return (
                          null != (n = this.delegate) &&
                            "function" ==
                              typeof n.compositionControllerWillUpdateAttachment &&
                            n.compositionControllerWillUpdateAttachment(e),
                          this.composition.updateAttributesForAttachment(t, e)
                        );
                      }),
                      (c.prototype.attachmentEditorDidRequestRemovingAttributeForAttachment = function (
                        t,
                        e
                      ) {
                        var n;
                        return (
                          null != (n = this.delegate) &&
                            "function" ==
                              typeof n.compositionControllerWillUpdateAttachment &&
                            n.compositionControllerWillUpdateAttachment(e),
                          this.composition.removeAttributeForAttachment(t, e)
                        );
                      }),
                      (c.prototype.attachmentEditorDidRequestRemovalOfAttachment = function (
                        t
                      ) {
                        var e;
                        return null != (e = this.delegate) &&
                          "function" ==
                            typeof e.compositionControllerDidRequestRemovalOfAttachment
                          ? e.compositionControllerDidRequestRemovalOfAttachment(
                              t
                            )
                          : void 0;
                      }),
                      (c.prototype.attachmentEditorDidRequestDeselectingAttachment = function (
                        t
                      ) {
                        var e;
                        return null != (e = this.delegate) &&
                          "function" ==
                            typeof e.compositionControllerDidRequestDeselectingAttachment
                          ? e.compositionControllerDidRequestDeselectingAttachment(
                              t
                            )
                          : void 0;
                      }),
                      (c.prototype.canSyncDocumentView = function () {
                        return !this.isEditingAttachment();
                      }),
                      (c.prototype.findAttachmentForElement = function (t) {
                        return this.composition.document.getAttachmentById(
                          parseInt(t.dataset.trixId, 10)
                        );
                      }),
                      c
                    );
                  })(t.BasicObject));
              }.call(this),
              function () {
                var e,
                  n,
                  r,
                  i = function (t, e) {
                    return function () {
                      return t.apply(e, arguments);
                    };
                  },
                  o = function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    for (var r in e) a.call(e, r) && (t[r] = e[r]);
                    return (
                      (n.prototype = e.prototype),
                      (t.prototype = new n()),
                      (t.__super__ = e.prototype),
                      t
                    );
                  },
                  a = {}.hasOwnProperty;
                (n = t.handleEvent),
                  (r = t.triggerEvent),
                  (e = t.findClosestElementFromNode),
                  (t.ToolbarController = (function (t) {
                    function a(t) {
                      (this.element = t),
                        (this.didKeyDownDialogInput = i(
                          this.didKeyDownDialogInput,
                          this
                        )),
                        (this.didClickDialogButton = i(
                          this.didClickDialogButton,
                          this
                        )),
                        (this.didClickAttributeButton = i(
                          this.didClickAttributeButton,
                          this
                        )),
                        (this.didClickActionButton = i(
                          this.didClickActionButton,
                          this
                        )),
                        (this.attributes = {}),
                        (this.actions = {}),
                        this.resetDialogInputs(),
                        n("mousedown", {
                          onElement: this.element,
                          matchingSelector: s,
                          withCallback: this.didClickActionButton,
                        }),
                        n("mousedown", {
                          onElement: this.element,
                          matchingSelector: u,
                          withCallback: this.didClickAttributeButton,
                        }),
                        n("click", {
                          onElement: this.element,
                          matchingSelector: m,
                          preventDefault: !0,
                        }),
                        n("click", {
                          onElement: this.element,
                          matchingSelector: c,
                          withCallback: this.didClickDialogButton,
                        }),
                        n("keydown", {
                          onElement: this.element,
                          matchingSelector: l,
                          withCallback: this.didKeyDownDialogInput,
                        });
                    }
                    var s, u, c, l, h, d, p, f, g, m;
                    return (
                      o(a, t),
                      (m =
                        (u = "[data-trix-attribute]") +
                        ", " +
                        (s = "[data-trix-action]")),
                      (h = "[data-trix-dialog]") + "[data-trix-active]",
                      (c = h + " [data-trix-method]"),
                      (l = h + " [data-trix-input]"),
                      (a.prototype.didClickActionButton = function (t, e) {
                        var n, r, i;
                        return (
                          null != (r = this.delegate) &&
                            r.toolbarDidClickButton(),
                          t.preventDefault(),
                          (n = d(e)),
                          this.getDialog(n)
                            ? this.toggleDialog(n)
                            : null != (i = this.delegate)
                            ? i.toolbarDidInvokeAction(n)
                            : void 0
                        );
                      }),
                      (a.prototype.didClickAttributeButton = function (t, e) {
                        var n, r, i;
                        return (
                          null != (r = this.delegate) &&
                            r.toolbarDidClickButton(),
                          t.preventDefault(),
                          (n = p(e)),
                          this.getDialog(n)
                            ? this.toggleDialog(n)
                            : null != (i = this.delegate) &&
                              i.toolbarDidToggleAttribute(n),
                          this.refreshAttributeButtons()
                        );
                      }),
                      (a.prototype.didClickDialogButton = function (t, n) {
                        var r;
                        return (
                          (r = e(n, { matchingSelector: h })),
                          this[n.getAttribute("data-trix-method")].call(this, r)
                        );
                      }),
                      (a.prototype.didKeyDownDialogInput = function (t, e) {
                        var n, r;
                        return (
                          13 === t.keyCode &&
                            (t.preventDefault(),
                            (n = e.getAttribute("name")),
                            (r = this.getDialog(n)),
                            this.setAttribute(r)),
                          27 === t.keyCode
                            ? (t.preventDefault(), this.hideDialog())
                            : void 0
                        );
                      }),
                      (a.prototype.updateActions = function (t) {
                        return (this.actions = t), this.refreshActionButtons();
                      }),
                      (a.prototype.refreshActionButtons = function () {
                        return this.eachActionButton(
                          (function (t) {
                            return function (e, n) {
                              return (e.disabled = !1 === t.actions[n]);
                            };
                          })(this)
                        );
                      }),
                      (a.prototype.eachActionButton = function (t) {
                        var e, n, r, i, o;
                        for (
                          o = [],
                            n = 0,
                            r = (i = this.element.querySelectorAll(s)).length;
                          r > n;
                          n++
                        )
                          (e = i[n]), o.push(t(e, d(e)));
                        return o;
                      }),
                      (a.prototype.updateAttributes = function (t) {
                        return (
                          (this.attributes = t), this.refreshAttributeButtons()
                        );
                      }),
                      (a.prototype.refreshAttributeButtons = function () {
                        return this.eachAttributeButton(
                          (function (t) {
                            return function (e, n) {
                              return (
                                (e.disabled = !1 === t.attributes[n]),
                                t.attributes[n] || t.dialogIsVisible(n)
                                  ? (e.setAttribute("data-trix-active", ""),
                                    e.classList.add("trix-active"))
                                  : (e.removeAttribute("data-trix-active"),
                                    e.classList.remove("trix-active"))
                              );
                            };
                          })(this)
                        );
                      }),
                      (a.prototype.eachAttributeButton = function (t) {
                        var e, n, r, i, o;
                        for (
                          o = [],
                            n = 0,
                            r = (i = this.element.querySelectorAll(u)).length;
                          r > n;
                          n++
                        )
                          (e = i[n]), o.push(t(e, p(e)));
                        return o;
                      }),
                      (a.prototype.applyKeyboardCommand = function (t) {
                        var e, n, i, o, a, s;
                        for (
                          o = JSON.stringify(t.sort()),
                            i = 0,
                            a = (s = this.element.querySelectorAll(
                              "[data-trix-key]"
                            )).length;
                          a > i;
                          i++
                        )
                          if (
                            ((n = (e = s[i])
                              .getAttribute("data-trix-key")
                              .split("+")),
                            JSON.stringify(n.sort()) === o)
                          )
                            return r("mousedown", { onElement: e }), !0;
                        return !1;
                      }),
                      (a.prototype.dialogIsVisible = function (t) {
                        var e;
                        return (e = this.getDialog(t))
                          ? e.hasAttribute("data-trix-active")
                          : void 0;
                      }),
                      (a.prototype.toggleDialog = function (t) {
                        return this.dialogIsVisible(t)
                          ? this.hideDialog()
                          : this.showDialog(t);
                      }),
                      (a.prototype.showDialog = function (t) {
                        var e, n, r, i, o, a, s, u, c;
                        for (
                          this.hideDialog(),
                            null != (a = this.delegate) &&
                              a.toolbarWillShowDialog(),
                            (n = this.getDialog(t)).setAttribute(
                              "data-trix-active",
                              ""
                            ),
                            n.classList.add("trix-active"),
                            r = 0,
                            o = (s = n.querySelectorAll("input[disabled]"))
                              .length;
                          o > r;
                          r++
                        )
                          s[r].removeAttribute("disabled");
                        return (
                          (e = p(n)) &&
                            (i = g(n, t)) &&
                            ((i.value =
                              null != (u = this.attributes[e]) ? u : ""),
                            i.select()),
                          null != (c = this.delegate)
                            ? c.toolbarDidShowDialog(t)
                            : void 0
                        );
                      }),
                      (a.prototype.setAttribute = function (t) {
                        var e, n, r;
                        return (
                          (e = p(t)),
                          (n = g(t, e)).willValidate && !n.checkValidity()
                            ? (n.setAttribute("data-trix-validate", ""),
                              n.classList.add("trix-validate"),
                              n.focus())
                            : (null != (r = this.delegate) &&
                                r.toolbarDidUpdateAttribute(e, n.value),
                              this.hideDialog())
                        );
                      }),
                      (a.prototype.removeAttribute = function (t) {
                        var e, n;
                        return (
                          (e = p(t)),
                          null != (n = this.delegate) &&
                            n.toolbarDidRemoveAttribute(e),
                          this.hideDialog()
                        );
                      }),
                      (a.prototype.hideDialog = function () {
                        var t, e;
                        return (t = this.element.querySelector(
                          "[data-trix-dialog][data-trix-active]"
                        ))
                          ? (t.removeAttribute("data-trix-active"),
                            t.classList.remove("trix-active"),
                            this.resetDialogInputs(),
                            null != (e = this.delegate)
                              ? e.toolbarDidHideDialog(f(t))
                              : void 0)
                          : void 0;
                      }),
                      (a.prototype.resetDialogInputs = function () {
                        var t, e, n, r, i;
                        for (
                          i = [],
                            t = 0,
                            n = (r = this.element.querySelectorAll(l)).length;
                          n > t;
                          t++
                        )
                          (e = r[t]).setAttribute("disabled", "disabled"),
                            e.removeAttribute("data-trix-validate"),
                            i.push(e.classList.remove("trix-validate"));
                        return i;
                      }),
                      (a.prototype.getDialog = function (t) {
                        return this.element.querySelector(
                          "[data-trix-dialog=" + t + "]"
                        );
                      }),
                      (g = function (t, e) {
                        return (
                          null == e && (e = p(t)),
                          t.querySelector("[data-trix-input][name='" + e + "']")
                        );
                      }),
                      (d = function (t) {
                        return t.getAttribute("data-trix-action");
                      }),
                      (p = function (t) {
                        var e;
                        return null !=
                          (e = t.getAttribute("data-trix-attribute"))
                          ? e
                          : t.getAttribute("data-trix-dialog-attribute");
                      }),
                      (f = function (t) {
                        return t.getAttribute("data-trix-dialog");
                      }),
                      a
                    );
                  })(t.BasicObject));
              }.call(this),
              function () {
                var e = function (t, e) {
                    function r() {
                      this.constructor = t;
                    }
                    for (var i in e) n.call(e, i) && (t[i] = e[i]);
                    return (
                      (r.prototype = e.prototype),
                      (t.prototype = new r()),
                      (t.__super__ = e.prototype),
                      t
                    );
                  },
                  n = {}.hasOwnProperty;
                t.ImagePreloadOperation = (function (t) {
                  function n(t) {
                    this.url = t;
                  }
                  return (
                    e(n, t),
                    (n.prototype.perform = function (t) {
                      var e;
                      return (
                        ((e = new Image()).onload = (function (n) {
                          return function () {
                            return (
                              (e.width = n.width = e.naturalWidth),
                              (e.height = n.height = e.naturalHeight),
                              t(!0, e)
                            );
                          };
                        })(this)),
                        (e.onerror = function () {
                          return t(!1);
                        }),
                        (e.src = this.url)
                      );
                    }),
                    n
                  );
                })(t.Operation);
              }.call(this),
              function () {
                var e = function (t, e) {
                    return function () {
                      return t.apply(e, arguments);
                    };
                  },
                  n = function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    for (var i in e) r.call(e, i) && (t[i] = e[i]);
                    return (
                      (n.prototype = e.prototype),
                      (t.prototype = new n()),
                      (t.__super__ = e.prototype),
                      t
                    );
                  },
                  r = {}.hasOwnProperty;
                t.Attachment = (function (r) {
                  function i(n) {
                    null == n && (n = {}),
                      (this.releaseFile = e(this.releaseFile, this)),
                      i.__super__.constructor.apply(this, arguments),
                      (this.attributes = t.Hash.box(n)),
                      this.didChangeAttributes();
                  }
                  return (
                    n(i, r),
                    (i.previewablePattern = /^image(\/(gif|png|jpe?g)|$)/),
                    (i.attachmentForFile = function (t) {
                      var e;
                      return (
                        (e = new this(this.attributesForFile(t))).setFile(t), e
                      );
                    }),
                    (i.attributesForFile = function (e) {
                      return new t.Hash({
                        filename: e.name,
                        filesize: e.size,
                        contentType: e.type,
                      });
                    }),
                    (i.fromJSON = function (t) {
                      return new this(t);
                    }),
                    (i.prototype.getAttribute = function (t) {
                      return this.attributes.get(t);
                    }),
                    (i.prototype.hasAttribute = function (t) {
                      return this.attributes.has(t);
                    }),
                    (i.prototype.getAttributes = function () {
                      return this.attributes.toObject();
                    }),
                    (i.prototype.setAttributes = function (t) {
                      var e, n, r;
                      return (
                        null == t && (t = {}),
                        (e = this.attributes.merge(t)),
                        this.attributes.isEqualTo(e)
                          ? void 0
                          : ((this.attributes = e),
                            this.didChangeAttributes(),
                            null != (n = this.previewDelegate) &&
                              "function" ==
                                typeof n.attachmentDidChangeAttributes &&
                              n.attachmentDidChangeAttributes(this),
                            null != (r = this.delegate) &&
                            "function" == typeof r.attachmentDidChangeAttributes
                              ? r.attachmentDidChangeAttributes(this)
                              : void 0)
                      );
                    }),
                    (i.prototype.didChangeAttributes = function () {
                      return this.isPreviewable() ? this.preloadURL() : void 0;
                    }),
                    (i.prototype.isPending = function () {
                      return (
                        null != this.file && !(this.getURL() || this.getHref())
                      );
                    }),
                    (i.prototype.isPreviewable = function () {
                      return this.attributes.has("previewable")
                        ? this.attributes.get("previewable")
                        : this.constructor.previewablePattern.test(
                            this.getContentType()
                          );
                    }),
                    (i.prototype.getType = function () {
                      return this.hasContent()
                        ? "content"
                        : this.isPreviewable()
                        ? "preview"
                        : "file";
                    }),
                    (i.prototype.getURL = function () {
                      return this.attributes.get("url");
                    }),
                    (i.prototype.getHref = function () {
                      return this.attributes.get("href");
                    }),
                    (i.prototype.getFilename = function () {
                      var t;
                      return null != (t = this.attributes.get("filename"))
                        ? t
                        : "";
                    }),
                    (i.prototype.getFilesize = function () {
                      return this.attributes.get("filesize");
                    }),
                    (i.prototype.getFormattedFilesize = function () {
                      var e;
                      return "number" ==
                        typeof (e = this.attributes.get("filesize"))
                        ? t.config.fileSize.formatter(e)
                        : "";
                    }),
                    (i.prototype.getExtension = function () {
                      var t;
                      return null != (t = this.getFilename().match(/\.(\w+)$/))
                        ? t[1].toLowerCase()
                        : void 0;
                    }),
                    (i.prototype.getContentType = function () {
                      return this.attributes.get("contentType");
                    }),
                    (i.prototype.hasContent = function () {
                      return this.attributes.has("content");
                    }),
                    (i.prototype.getContent = function () {
                      return this.attributes.get("content");
                    }),
                    (i.prototype.getWidth = function () {
                      return this.attributes.get("width");
                    }),
                    (i.prototype.getHeight = function () {
                      return this.attributes.get("height");
                    }),
                    (i.prototype.getFile = function () {
                      return this.file;
                    }),
                    (i.prototype.setFile = function (t) {
                      return (
                        (this.file = t),
                        this.isPreviewable() ? this.preloadFile() : void 0
                      );
                    }),
                    (i.prototype.releaseFile = function () {
                      return this.releasePreloadedFile(), (this.file = null);
                    }),
                    (i.prototype.getUploadProgress = function () {
                      var t;
                      return null != (t = this.uploadProgress) ? t : 0;
                    }),
                    (i.prototype.setUploadProgress = function (t) {
                      var e;
                      return this.uploadProgress !== t
                        ? ((this.uploadProgress = t),
                          null != (e = this.uploadProgressDelegate) &&
                          "function" ==
                            typeof e.attachmentDidChangeUploadProgress
                            ? e.attachmentDidChangeUploadProgress(this)
                            : void 0)
                        : void 0;
                    }),
                    (i.prototype.toJSON = function () {
                      return this.getAttributes();
                    }),
                    (i.prototype.getCacheKey = function () {
                      return [
                        i.__super__.getCacheKey.apply(this, arguments),
                        this.attributes.getCacheKey(),
                        this.getPreviewURL(),
                      ].join("/");
                    }),
                    (i.prototype.getPreviewURL = function () {
                      return this.previewURL || this.preloadingURL;
                    }),
                    (i.prototype.setPreviewURL = function (t) {
                      var e, n;
                      return t !== this.getPreviewURL()
                        ? ((this.previewURL = t),
                          null != (e = this.previewDelegate) &&
                            "function" ==
                              typeof e.attachmentDidChangeAttributes &&
                            e.attachmentDidChangeAttributes(this),
                          null != (n = this.delegate) &&
                          "function" == typeof n.attachmentDidChangePreviewURL
                            ? n.attachmentDidChangePreviewURL(this)
                            : void 0)
                        : void 0;
                    }),
                    (i.prototype.preloadURL = function () {
                      return this.preload(this.getURL(), this.releaseFile);
                    }),
                    (i.prototype.preloadFile = function () {
                      return this.file
                        ? ((this.fileObjectURL = URL.createObjectURL(
                            this.file
                          )),
                          this.preload(this.fileObjectURL))
                        : void 0;
                    }),
                    (i.prototype.releasePreloadedFile = function () {
                      return this.fileObjectURL
                        ? (URL.revokeObjectURL(this.fileObjectURL),
                          (this.fileObjectURL = null))
                        : void 0;
                    }),
                    (i.prototype.preload = function (e, n) {
                      return e && e !== this.getPreviewURL()
                        ? ((this.preloadingURL = e),
                          new t.ImagePreloadOperation(e)
                            .then(
                              (function (t) {
                                return function (r) {
                                  var i, o;
                                  return (
                                    (o = r.width),
                                    (i = r.height),
                                    (t.getWidth() && t.getHeight()) ||
                                      t.setAttributes({ width: o, height: i }),
                                    (t.preloadingURL = null),
                                    t.setPreviewURL(e),
                                    "function" == typeof n ? n() : void 0
                                  );
                                };
                              })(this)
                            )
                            .catch(
                              (function (t) {
                                return function () {
                                  return (
                                    (t.preloadingURL = null),
                                    "function" == typeof n ? n() : void 0
                                  );
                                };
                              })(this)
                            ))
                        : void 0;
                    }),
                    i
                  );
                })(t.Object);
              }.call(this),
              function () {
                var e = function (t, e) {
                    function r() {
                      this.constructor = t;
                    }
                    for (var i in e) n.call(e, i) && (t[i] = e[i]);
                    return (
                      (r.prototype = e.prototype),
                      (t.prototype = new r()),
                      (t.__super__ = e.prototype),
                      t
                    );
                  },
                  n = {}.hasOwnProperty;
                t.Piece = (function (n) {
                  function r(e, n) {
                    null == n && (n = {}),
                      r.__super__.constructor.apply(this, arguments),
                      (this.attributes = t.Hash.box(n));
                  }
                  return (
                    e(r, n),
                    (r.types = {}),
                    (r.registerType = function (t, e) {
                      return (e.type = t), (this.types[t] = e);
                    }),
                    (r.fromJSON = function (t) {
                      var e;
                      return (e = this.types[t.type]) ? e.fromJSON(t) : void 0;
                    }),
                    (r.prototype.copyWithAttributes = function (t) {
                      return new this.constructor(this.getValue(), t);
                    }),
                    (r.prototype.copyWithAdditionalAttributes = function (t) {
                      return this.copyWithAttributes(this.attributes.merge(t));
                    }),
                    (r.prototype.copyWithoutAttribute = function (t) {
                      return this.copyWithAttributes(this.attributes.remove(t));
                    }),
                    (r.prototype.copy = function () {
                      return this.copyWithAttributes(this.attributes);
                    }),
                    (r.prototype.getAttribute = function (t) {
                      return this.attributes.get(t);
                    }),
                    (r.prototype.getAttributesHash = function () {
                      return this.attributes;
                    }),
                    (r.prototype.getAttributes = function () {
                      return this.attributes.toObject();
                    }),
                    (r.prototype.getCommonAttributes = function () {
                      var t, e, n;
                      return (n = pieceList.getPieceAtIndex(0))
                        ? ((t = n.attributes),
                          (e = t.getKeys()),
                          pieceList.eachPiece(function (n) {
                            return (
                              (e = t.getKeysCommonToHash(n.attributes)),
                              (t = t.slice(e))
                            );
                          }),
                          t.toObject())
                        : {};
                    }),
                    (r.prototype.hasAttribute = function (t) {
                      return this.attributes.has(t);
                    }),
                    (r.prototype.hasSameStringValueAsPiece = function (t) {
                      return null != t && this.toString() === t.toString();
                    }),
                    (r.prototype.hasSameAttributesAsPiece = function (t) {
                      return (
                        null != t &&
                        (this.attributes === t.attributes ||
                          this.attributes.isEqualTo(t.attributes))
                      );
                    }),
                    (r.prototype.isBlockBreak = function () {
                      return !1;
                    }),
                    (r.prototype.isEqualTo = function (t) {
                      return (
                        r.__super__.isEqualTo.apply(this, arguments) ||
                        (this.hasSameConstructorAs(t) &&
                          this.hasSameStringValueAsPiece(t) &&
                          this.hasSameAttributesAsPiece(t))
                      );
                    }),
                    (r.prototype.isEmpty = function () {
                      return 0 === this.length;
                    }),
                    (r.prototype.isSerializable = function () {
                      return !0;
                    }),
                    (r.prototype.toJSON = function () {
                      return {
                        type: this.constructor.type,
                        attributes: this.getAttributes(),
                      };
                    }),
                    (r.prototype.contentsForInspection = function () {
                      return {
                        type: this.constructor.type,
                        attributes: this.attributes.inspect(),
                      };
                    }),
                    (r.prototype.canBeGrouped = function () {
                      return this.hasAttribute("href");
                    }),
                    (r.prototype.canBeGroupedWith = function (t) {
                      return (
                        this.getAttribute("href") === t.getAttribute("href")
                      );
                    }),
                    (r.prototype.getLength = function () {
                      return this.length;
                    }),
                    (r.prototype.canBeConsolidatedWith = function () {
                      return !1;
                    }),
                    r
                  );
                })(t.Object);
              }.call(this),
              function () {
                var e = function (t, e) {
                    function r() {
                      this.constructor = t;
                    }
                    for (var i in e) n.call(e, i) && (t[i] = e[i]);
                    return (
                      (r.prototype = e.prototype),
                      (t.prototype = new r()),
                      (t.__super__ = e.prototype),
                      t
                    );
                  },
                  n = {}.hasOwnProperty;
                t.Piece.registerType(
                  "attachment",
                  (t.AttachmentPiece = (function (n) {
                    function r(t) {
                      (this.attachment = t),
                        r.__super__.constructor.apply(this, arguments),
                        (this.length = 1),
                        this.ensureAttachmentExclusivelyHasAttribute("href"),
                        this.attachment.hasContent() ||
                          this.removeProhibitedAttributes();
                    }
                    return (
                      e(r, n),
                      (r.fromJSON = function (e) {
                        return new this(
                          t.Attachment.fromJSON(e.attachment),
                          e.attributes
                        );
                      }),
                      (r.permittedAttributes = ["caption", "presentation"]),
                      (r.prototype.ensureAttachmentExclusivelyHasAttribute = function (
                        t
                      ) {
                        return this.hasAttribute(t)
                          ? (this.attachment.hasAttribute(t) ||
                              this.attachment.setAttributes(
                                this.attributes.slice(t)
                              ),
                            (this.attributes = this.attributes.remove(t)))
                          : void 0;
                      }),
                      (r.prototype.removeProhibitedAttributes = function () {
                        var t;
                        return (t = this.attributes.slice(
                          this.constructor.permittedAttributes
                        )).isEqualTo(this.attributes)
                          ? void 0
                          : (this.attributes = t);
                      }),
                      (r.prototype.getValue = function () {
                        return this.attachment;
                      }),
                      (r.prototype.isSerializable = function () {
                        return !this.attachment.isPending();
                      }),
                      (r.prototype.getCaption = function () {
                        var t;
                        return null != (t = this.attributes.get("caption"))
                          ? t
                          : "";
                      }),
                      (r.prototype.isEqualTo = function (t) {
                        var e;
                        return (
                          r.__super__.isEqualTo.apply(this, arguments) &&
                          this.attachment.id ===
                            (null != t && null != (e = t.attachment)
                              ? e.id
                              : void 0)
                        );
                      }),
                      (r.prototype.toString = function () {
                        return t.OBJECT_REPLACEMENT_CHARACTER;
                      }),
                      (r.prototype.toJSON = function () {
                        var t;
                        return (
                          ((t = r.__super__.toJSON.apply(
                            this,
                            arguments
                          )).attachment = this.attachment),
                          t
                        );
                      }),
                      (r.prototype.getCacheKey = function () {
                        return [
                          r.__super__.getCacheKey.apply(this, arguments),
                          this.attachment.getCacheKey(),
                        ].join("/");
                      }),
                      (r.prototype.toConsole = function () {
                        return JSON.stringify(this.toString());
                      }),
                      r
                    );
                  })(t.Piece))
                );
              }.call(this),
              function () {
                var e,
                  n = function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    for (var i in e) r.call(e, i) && (t[i] = e[i]);
                    return (
                      (n.prototype = e.prototype),
                      (t.prototype = new n()),
                      (t.__super__ = e.prototype),
                      t
                    );
                  },
                  r = {}.hasOwnProperty;
                (e = t.normalizeNewlines),
                  t.Piece.registerType(
                    "string",
                    (t.StringPiece = (function (t) {
                      function r(t) {
                        r.__super__.constructor.apply(this, arguments),
                          (this.string = e(t)),
                          (this.length = this.string.length);
                      }
                      return (
                        n(r, t),
                        (r.fromJSON = function (t) {
                          return new this(t.string, t.attributes);
                        }),
                        (r.prototype.getValue = function () {
                          return this.string;
                        }),
                        (r.prototype.toString = function () {
                          return this.string.toString();
                        }),
                        (r.prototype.isBlockBreak = function () {
                          return (
                            "\n" === this.toString() &&
                            !0 === this.getAttribute("blockBreak")
                          );
                        }),
                        (r.prototype.toJSON = function () {
                          var t;
                          return (
                            ((t = r.__super__.toJSON.apply(
                              this,
                              arguments
                            )).string = this.string),
                            t
                          );
                        }),
                        (r.prototype.canBeConsolidatedWith = function (t) {
                          return (
                            null != t &&
                            this.hasSameConstructorAs(t) &&
                            this.hasSameAttributesAsPiece(t)
                          );
                        }),
                        (r.prototype.consolidateWith = function (t) {
                          return new this.constructor(
                            this.toString() + t.toString(),
                            this.attributes
                          );
                        }),
                        (r.prototype.splitAtOffset = function (t) {
                          var e, n;
                          return (
                            0 === t
                              ? ((e = null), (n = this))
                              : t === this.length
                              ? ((e = this), (n = null))
                              : ((e = new this.constructor(
                                  this.string.slice(0, t),
                                  this.attributes
                                )),
                                (n = new this.constructor(
                                  this.string.slice(t),
                                  this.attributes
                                ))),
                            [e, n]
                          );
                        }),
                        (r.prototype.toConsole = function () {
                          var t;
                          return (
                            (t = this.string).length > 15 &&
                              (t = t.slice(0, 14) + "…"),
                            JSON.stringify(t.toString())
                          );
                        }),
                        r
                      );
                    })(t.Piece))
                  );
              }.call(this),
              function () {
                var e,
                  n = function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    for (var i in e) r.call(e, i) && (t[i] = e[i]);
                    return (
                      (n.prototype = e.prototype),
                      (t.prototype = new n()),
                      (t.__super__ = e.prototype),
                      t
                    );
                  },
                  r = {}.hasOwnProperty,
                  i = [].slice;
                (e = t.spliceArray),
                  (t.SplittableList = (function (t) {
                    function r(t) {
                      null == t && (t = []),
                        r.__super__.constructor.apply(this, arguments),
                        (this.objects = t.slice(0)),
                        (this.length = this.objects.length);
                    }
                    var o, a, s;
                    return (
                      n(r, t),
                      (r.box = function (t) {
                        return t instanceof this ? t : new this(t);
                      }),
                      (r.prototype.indexOf = function (t) {
                        return this.objects.indexOf(t);
                      }),
                      (r.prototype.splice = function () {
                        var t;
                        return (
                          (t =
                            1 <= arguments.length ? i.call(arguments, 0) : []),
                          new this.constructor(
                            e.apply(null, [this.objects].concat(i.call(t)))
                          )
                        );
                      }),
                      (r.prototype.eachObject = function (t) {
                        var e, n, r, i, o, a;
                        for (
                          a = [], n = e = 0, r = (o = this.objects).length;
                          r > e;
                          n = ++e
                        )
                          (i = o[n]), a.push(t(i, n));
                        return a;
                      }),
                      (r.prototype.insertObjectAtIndex = function (t, e) {
                        return this.splice(e, 0, t);
                      }),
                      (r.prototype.insertSplittableListAtIndex = function (
                        t,
                        e
                      ) {
                        return this.splice.apply(
                          this,
                          [e, 0].concat(i.call(t.objects))
                        );
                      }),
                      (r.prototype.insertSplittableListAtPosition = function (
                        t,
                        e
                      ) {
                        var n, r, i;
                        return (
                          (r = (i = this.splitObjectAtPosition(e))[0]),
                          (n = i[1]),
                          new this.constructor(r).insertSplittableListAtIndex(
                            t,
                            n
                          )
                        );
                      }),
                      (r.prototype.editObjectAtIndex = function (t, e) {
                        return this.replaceObjectAtIndex(e(this.objects[t]), t);
                      }),
                      (r.prototype.replaceObjectAtIndex = function (t, e) {
                        return this.splice(e, 1, t);
                      }),
                      (r.prototype.removeObjectAtIndex = function (t) {
                        return this.splice(t, 1);
                      }),
                      (r.prototype.getObjectAtIndex = function (t) {
                        return this.objects[t];
                      }),
                      (r.prototype.getSplittableListInRange = function (t) {
                        var e, n, r, i;
                        return (
                          (n = (r = this.splitObjectsAtRange(t))[0]),
                          (e = r[1]),
                          (i = r[2]),
                          new this.constructor(n.slice(e, i + 1))
                        );
                      }),
                      (r.prototype.selectSplittableList = function (t) {
                        var e, n;
                        return (
                          (n = function () {
                            var n, r, i, o;
                            for (
                              o = [], n = 0, r = (i = this.objects).length;
                              r > n;
                              n++
                            )
                              (e = i[n]), t(e) && o.push(e);
                            return o;
                          }.call(this)),
                          new this.constructor(n)
                        );
                      }),
                      (r.prototype.removeObjectsInRange = function (t) {
                        var e, n, r, i;
                        return (
                          (n = (r = this.splitObjectsAtRange(t))[0]),
                          (e = r[1]),
                          (i = r[2]),
                          new this.constructor(n).splice(e, i - e + 1)
                        );
                      }),
                      (r.prototype.transformObjectsInRange = function (t, e) {
                        var n, r, i, o, a, s, u;
                        return (
                          (a = this.splitObjectsAtRange(t)),
                          (o = a[0]),
                          (r = a[1]),
                          (s = a[2]),
                          (u = (function () {
                            var t, a, u;
                            for (
                              u = [], n = t = 0, a = o.length;
                              a > t;
                              n = ++t
                            )
                              (i = o[n]), u.push(n >= r && s >= n ? e(i) : i);
                            return u;
                          })()),
                          new this.constructor(u)
                        );
                      }),
                      (r.prototype.splitObjectsAtRange = function (t) {
                        var e, n, r, i, a;
                        return (
                          (n = (i = this.splitObjectAtPosition(s(t)))[0]),
                          (e = i[1]),
                          (r = i[2]),
                          [
                            (n = (a = new this.constructor(
                              n
                            ).splitObjectAtPosition(o(t) + r))[0]),
                            e,
                            a[1] - 1,
                          ]
                        );
                      }),
                      (r.prototype.getObjectAtPosition = function (t) {
                        var e, n;
                        return (
                          (e = (n = this.findIndexAndOffsetAtPosition(t))
                            .index),
                          n.offset,
                          this.objects[e]
                        );
                      }),
                      (r.prototype.splitObjectAtPosition = function (t) {
                        var e, n, r, i, o, a, s, u, c;
                        return (
                          (e = (o = this.findIndexAndOffsetAtPosition(t))
                            .index),
                          (i = o.offset),
                          (r = this.objects.slice(0)),
                          null != e
                            ? 0 === i
                              ? ((u = e), (c = 0))
                              : ((n = (a = this.getObjectAtIndex(
                                  e
                                ).splitAtOffset(i))[0]),
                                (s = a[1]),
                                r.splice(e, 1, n, s),
                                (u = e + 1),
                                (c = n.getLength() - i))
                            : ((u = r.length), (c = 0)),
                          [r, u, c]
                        );
                      }),
                      (r.prototype.consolidate = function () {
                        var t, e, n, r, i, o;
                        for (
                          r = [],
                            i = this.objects[0],
                            t = 0,
                            e = (o = this.objects.slice(1)).length;
                          e > t;
                          t++
                        )
                          (n = o[t]),
                            (
                              "function" == typeof i.canBeConsolidatedWith
                                ? i.canBeConsolidatedWith(n)
                                : void 0
                            )
                              ? (i = i.consolidateWith(n))
                              : (r.push(i), (i = n));
                        return null != i && r.push(i), new this.constructor(r);
                      }),
                      (r.prototype.consolidateFromIndexToIndex = function (
                        t,
                        e
                      ) {
                        var n, r;
                        return (
                          (r = this.objects.slice(0).slice(t, e + 1)),
                          (n = new this.constructor(r).consolidate().toArray()),
                          this.splice.apply(
                            this,
                            [t, r.length].concat(i.call(n))
                          )
                        );
                      }),
                      (r.prototype.findIndexAndOffsetAtPosition = function (t) {
                        var e, n, r, i, o, a;
                        for (
                          e = 0, r = n = 0, i = (a = this.objects).length;
                          i > n;
                          r = ++n
                        ) {
                          if (((o = e + a[r].getLength()), t >= e && o > t))
                            return { index: r, offset: t - e };
                          e = o;
                        }
                        return { index: null, offset: null };
                      }),
                      (r.prototype.findPositionAtIndexAndOffset = function (
                        t,
                        e
                      ) {
                        var n, r, i, o, a, s;
                        for (
                          a = 0, n = r = 0, i = (s = this.objects).length;
                          i > r;
                          n = ++r
                        )
                          if (((o = s[n]), t > n)) a += o.getLength();
                          else if (n === t) {
                            a += e;
                            break;
                          }
                        return a;
                      }),
                      (r.prototype.getEndPosition = function () {
                        var t, e;
                        return null != this.endPosition
                          ? this.endPosition
                          : (this.endPosition = function () {
                              var n, r, i;
                              for (
                                e = 0, n = 0, r = (i = this.objects).length;
                                r > n;
                                n++
                              )
                                (t = i[n]), (e += t.getLength());
                              return e;
                            }.call(this));
                      }),
                      (r.prototype.toString = function () {
                        return this.objects.join("");
                      }),
                      (r.prototype.toArray = function () {
                        return this.objects.slice(0);
                      }),
                      (r.prototype.toJSON = function () {
                        return this.toArray();
                      }),
                      (r.prototype.isEqualTo = function (t) {
                        return (
                          r.__super__.isEqualTo.apply(this, arguments) ||
                          a(this.objects, null != t ? t.objects : void 0)
                        );
                      }),
                      (a = function (t, e) {
                        var n, r, i, o, a;
                        if ((null == e && (e = []), t.length !== e.length))
                          return !1;
                        for (a = !0, r = n = 0, i = t.length; i > n; r = ++n)
                          (o = t[r]), a && !o.isEqualTo(e[r]) && (a = !1);
                        return a;
                      }),
                      (r.prototype.contentsForInspection = function () {
                        var t;
                        return {
                          objects:
                            "[" +
                            function () {
                              var e, n, r, i;
                              for (
                                i = [], e = 0, n = (r = this.objects).length;
                                n > e;
                                e++
                              )
                                (t = r[e]), i.push(t.inspect());
                              return i;
                            }
                              .call(this)
                              .join(", ") +
                            "]",
                        };
                      }),
                      (s = function (t) {
                        return t[0];
                      }),
                      (o = function (t) {
                        return t[1];
                      }),
                      r
                    );
                  })(t.Object));
              }.call(this),
              function () {
                var e = function (t, e) {
                    function r() {
                      this.constructor = t;
                    }
                    for (var i in e) n.call(e, i) && (t[i] = e[i]);
                    return (
                      (r.prototype = e.prototype),
                      (t.prototype = new r()),
                      (t.__super__ = e.prototype),
                      t
                    );
                  },
                  n = {}.hasOwnProperty;
                t.Text = (function (n) {
                  function r(e) {
                    var n;
                    null == e && (e = []),
                      r.__super__.constructor.apply(this, arguments),
                      (this.pieceList = new t.SplittableList(
                        (function () {
                          var t, r, i;
                          for (i = [], t = 0, r = e.length; r > t; t++)
                            (n = e[t]).isEmpty() || i.push(n);
                          return i;
                        })()
                      ));
                  }
                  return (
                    e(r, n),
                    (r.textForAttachmentWithAttributes = function (e, n) {
                      return new this([new t.AttachmentPiece(e, n)]);
                    }),
                    (r.textForStringWithAttributes = function (e, n) {
                      return new this([new t.StringPiece(e, n)]);
                    }),
                    (r.fromJSON = function (e) {
                      var n;
                      return new this(
                        (function () {
                          var r, i, o;
                          for (o = [], r = 0, i = e.length; i > r; r++)
                            (n = e[r]), o.push(t.Piece.fromJSON(n));
                          return o;
                        })()
                      );
                    }),
                    (r.prototype.copy = function () {
                      return this.copyWithPieceList(this.pieceList);
                    }),
                    (r.prototype.copyWithPieceList = function (t) {
                      return new this.constructor(t.consolidate().toArray());
                    }),
                    (r.prototype.copyUsingObjectMap = function (t) {
                      var e, n;
                      return (
                        (n = function () {
                          var n, r, i, o, a;
                          for (
                            a = [], n = 0, r = (i = this.getPieces()).length;
                            r > n;
                            n++
                          )
                            (e = i[n]), a.push(null != (o = t.find(e)) ? o : e);
                          return a;
                        }.call(this)),
                        new this.constructor(n)
                      );
                    }),
                    (r.prototype.appendText = function (t) {
                      return this.insertTextAtPosition(t, this.getLength());
                    }),
                    (r.prototype.insertTextAtPosition = function (t, e) {
                      return this.copyWithPieceList(
                        this.pieceList.insertSplittableListAtPosition(
                          t.pieceList,
                          e
                        )
                      );
                    }),
                    (r.prototype.removeTextAtRange = function (t) {
                      return this.copyWithPieceList(
                        this.pieceList.removeObjectsInRange(t)
                      );
                    }),
                    (r.prototype.replaceTextAtRange = function (t, e) {
                      return this.removeTextAtRange(e).insertTextAtPosition(
                        t,
                        e[0]
                      );
                    }),
                    (r.prototype.moveTextFromRangeToPosition = function (t, e) {
                      var n, r;
                      if (!(t[0] <= e && e <= t[1]))
                        return (
                          (n = (r = this.getTextAtRange(t)).getLength()),
                          t[0] < e && (e -= n),
                          this.removeTextAtRange(t).insertTextAtPosition(r, e)
                        );
                    }),
                    (r.prototype.addAttributeAtRange = function (t, e, n) {
                      var r;
                      return ((r = {})[t] = e), this.addAttributesAtRange(r, n);
                    }),
                    (r.prototype.addAttributesAtRange = function (t, e) {
                      return this.copyWithPieceList(
                        this.pieceList.transformObjectsInRange(e, function (e) {
                          return e.copyWithAdditionalAttributes(t);
                        })
                      );
                    }),
                    (r.prototype.removeAttributeAtRange = function (t, e) {
                      return this.copyWithPieceList(
                        this.pieceList.transformObjectsInRange(e, function (e) {
                          return e.copyWithoutAttribute(t);
                        })
                      );
                    }),
                    (r.prototype.setAttributesAtRange = function (t, e) {
                      return this.copyWithPieceList(
                        this.pieceList.transformObjectsInRange(e, function (e) {
                          return e.copyWithAttributes(t);
                        })
                      );
                    }),
                    (r.prototype.getAttributesAtPosition = function (t) {
                      var e, n;
                      return null !=
                        (e =
                          null != (n = this.pieceList.getObjectAtPosition(t))
                            ? n.getAttributes()
                            : void 0)
                        ? e
                        : {};
                    }),
                    (r.prototype.getCommonAttributes = function () {
                      var e, n;
                      return (
                        (e = function () {
                          var t, e, r, i;
                          for (
                            i = [],
                              t = 0,
                              e = (r = this.pieceList.toArray()).length;
                            e > t;
                            t++
                          )
                            (n = r[t]), i.push(n.getAttributes());
                          return i;
                        }.call(this)),
                        t.Hash.fromCommonAttributesOfObjects(e).toObject()
                      );
                    }),
                    (r.prototype.getCommonAttributesAtRange = function (t) {
                      var e;
                      return null !=
                        (e = this.getTextAtRange(t).getCommonAttributes())
                        ? e
                        : {};
                    }),
                    (r.prototype.getExpandedRangeForAttributeAtOffset = function (
                      t,
                      e
                    ) {
                      var n, r, i;
                      for (
                        n = i = e, r = this.getLength();
                        n > 0 && this.getCommonAttributesAtRange([n - 1, i])[t];

                      )
                        n--;
                      for (
                        ;
                        r > i && this.getCommonAttributesAtRange([e, i + 1])[t];

                      )
                        i++;
                      return [n, i];
                    }),
                    (r.prototype.getTextAtRange = function (t) {
                      return this.copyWithPieceList(
                        this.pieceList.getSplittableListInRange(t)
                      );
                    }),
                    (r.prototype.getStringAtRange = function (t) {
                      return this.pieceList
                        .getSplittableListInRange(t)
                        .toString();
                    }),
                    (r.prototype.getStringAtPosition = function (t) {
                      return this.getStringAtRange([t, t + 1]);
                    }),
                    (r.prototype.startsWithString = function (t) {
                      return this.getStringAtRange([0, t.length]) === t;
                    }),
                    (r.prototype.endsWithString = function (t) {
                      var e;
                      return (
                        (e = this.getLength()),
                        this.getStringAtRange([e - t.length, e]) === t
                      );
                    }),
                    (r.prototype.getAttachmentPieces = function () {
                      var t, e, n, r, i;
                      for (
                        i = [],
                          t = 0,
                          e = (r = this.pieceList.toArray()).length;
                        e > t;
                        t++
                      )
                        null != (n = r[t]).attachment && i.push(n);
                      return i;
                    }),
                    (r.prototype.getAttachments = function () {
                      var t, e, n, r, i;
                      for (
                        i = [],
                          t = 0,
                          e = (r = this.getAttachmentPieces()).length;
                        e > t;
                        t++
                      )
                        (n = r[t]), i.push(n.attachment);
                      return i;
                    }),
                    (r.prototype.getAttachmentAndPositionById = function (t) {
                      var e, n, r, i, o, a;
                      for (
                        i = 0, e = 0, n = (o = this.pieceList.toArray()).length;
                        n > e;
                        e++
                      ) {
                        if (
                          (null != (a = (r = o[e]).attachment)
                            ? a.id
                            : void 0) === t
                        )
                          return { attachment: r.attachment, position: i };
                        i += r.length;
                      }
                      return { attachment: null, position: null };
                    }),
                    (r.prototype.getAttachmentById = function (t) {
                      var e, n;
                      return (
                        (e = (n = this.getAttachmentAndPositionById(t))
                          .attachment),
                        n.position,
                        e
                      );
                    }),
                    (r.prototype.getRangeOfAttachment = function (t) {
                      var e, n;
                      return (
                        (t = (n = this.getAttachmentAndPositionById(t.id))
                          .attachment),
                        (e = n.position),
                        null != t ? [e, e + 1] : void 0
                      );
                    }),
                    (r.prototype.updateAttributesForAttachment = function (
                      t,
                      e
                    ) {
                      var n;
                      return (n = this.getRangeOfAttachment(e))
                        ? this.addAttributesAtRange(t, n)
                        : this;
                    }),
                    (r.prototype.getLength = function () {
                      return this.pieceList.getEndPosition();
                    }),
                    (r.prototype.isEmpty = function () {
                      return 0 === this.getLength();
                    }),
                    (r.prototype.isEqualTo = function (t) {
                      var e;
                      return (
                        r.__super__.isEqualTo.apply(this, arguments) ||
                        (null != t && null != (e = t.pieceList)
                          ? e.isEqualTo(this.pieceList)
                          : void 0)
                      );
                    }),
                    (r.prototype.isBlockBreak = function () {
                      return (
                        1 === this.getLength() &&
                        this.pieceList.getObjectAtIndex(0).isBlockBreak()
                      );
                    }),
                    (r.prototype.eachPiece = function (t) {
                      return this.pieceList.eachObject(t);
                    }),
                    (r.prototype.getPieces = function () {
                      return this.pieceList.toArray();
                    }),
                    (r.prototype.getPieceAtPosition = function (t) {
                      return this.pieceList.getObjectAtPosition(t);
                    }),
                    (r.prototype.contentsForInspection = function () {
                      return { pieceList: this.pieceList.inspect() };
                    }),
                    (r.prototype.toSerializableText = function () {
                      var t;
                      return (
                        (t = this.pieceList.selectSplittableList(function (t) {
                          return t.isSerializable();
                        })),
                        this.copyWithPieceList(t)
                      );
                    }),
                    (r.prototype.toString = function () {
                      return this.pieceList.toString();
                    }),
                    (r.prototype.toJSON = function () {
                      return this.pieceList.toJSON();
                    }),
                    (r.prototype.toConsole = function () {
                      var t;
                      return JSON.stringify(
                        function () {
                          var e, n, r, i;
                          for (
                            i = [],
                              e = 0,
                              n = (r = this.pieceList.toArray()).length;
                            n > e;
                            e++
                          )
                            (t = r[e]), i.push(JSON.parse(t.toConsole()));
                          return i;
                        }.call(this)
                      );
                    }),
                    r
                  );
                })(t.Object);
              }.call(this),
              function () {
                var e,
                  n,
                  r,
                  i,
                  o = function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    for (var r in e) a.call(e, r) && (t[r] = e[r]);
                    return (
                      (n.prototype = e.prototype),
                      (t.prototype = new n()),
                      (t.__super__ = e.prototype),
                      t
                    );
                  },
                  a = {}.hasOwnProperty,
                  s =
                    [].indexOf ||
                    function (t) {
                      for (var e = 0, n = this.length; n > e; e++)
                        if (e in this && this[e] === t) return e;
                      return -1;
                    },
                  u = [].slice;
                (e = t.arraysAreEqual),
                  (i = t.spliceArray),
                  (n = t.getBlockConfig),
                  t.getBlockAttributeNames,
                  (r = t.getListAttributeNames),
                  (t.Block = (function (a) {
                    function c(e, n) {
                      null == e && (e = new t.Text()),
                        null == n && (n = []),
                        c.__super__.constructor.apply(this, arguments),
                        (this.text = h(e)),
                        (this.attributes = n);
                    }
                    var l, h, d, p, f, g, m, v, y;
                    return (
                      o(c, a),
                      (c.fromJSON = function (e) {
                        return new this(t.Text.fromJSON(e.text), e.attributes);
                      }),
                      (c.prototype.isEmpty = function () {
                        return this.text.isBlockBreak();
                      }),
                      (c.prototype.isEqualTo = function (t) {
                        return (
                          c.__super__.isEqualTo.apply(this, arguments) ||
                          (this.text.isEqualTo(null != t ? t.text : void 0) &&
                            e(
                              this.attributes,
                              null != t ? t.attributes : void 0
                            ))
                        );
                      }),
                      (c.prototype.copyWithText = function (t) {
                        return new this.constructor(t, this.attributes);
                      }),
                      (c.prototype.copyWithoutText = function () {
                        return this.copyWithText(null);
                      }),
                      (c.prototype.copyWithAttributes = function (t) {
                        return new this.constructor(this.text, t);
                      }),
                      (c.prototype.copyWithoutAttributes = function () {
                        return this.copyWithAttributes(null);
                      }),
                      (c.prototype.copyUsingObjectMap = function (t) {
                        var e;
                        return this.copyWithText(
                          (e = t.find(this.text))
                            ? e
                            : this.text.copyUsingObjectMap(t)
                        );
                      }),
                      (c.prototype.addAttribute = function (t) {
                        var e;
                        return (
                          (e = this.attributes.concat(p(t))),
                          this.copyWithAttributes(e)
                        );
                      }),
                      (c.prototype.removeAttribute = function (t) {
                        var e, r;
                        return (
                          (r = n(t).listAttribute),
                          (e = g(g(this.attributes, t), r)),
                          this.copyWithAttributes(e)
                        );
                      }),
                      (c.prototype.removeLastAttribute = function () {
                        return this.removeAttribute(this.getLastAttribute());
                      }),
                      (c.prototype.getLastAttribute = function () {
                        return f(this.attributes);
                      }),
                      (c.prototype.getAttributes = function () {
                        return this.attributes.slice(0);
                      }),
                      (c.prototype.getAttributeLevel = function () {
                        return this.attributes.length;
                      }),
                      (c.prototype.getAttributeAtLevel = function (t) {
                        return this.attributes[t - 1];
                      }),
                      (c.prototype.hasAttribute = function (t) {
                        return s.call(this.attributes, t) >= 0;
                      }),
                      (c.prototype.hasAttributes = function () {
                        return this.getAttributeLevel() > 0;
                      }),
                      (c.prototype.getLastNestableAttribute = function () {
                        return f(this.getNestableAttributes());
                      }),
                      (c.prototype.getNestableAttributes = function () {
                        var t, e, r, i, o;
                        for (
                          o = [], e = 0, r = (i = this.attributes).length;
                          r > e;
                          e++
                        )
                          (t = i[e]), n(t).nestable && o.push(t);
                        return o;
                      }),
                      (c.prototype.getNestingLevel = function () {
                        return this.getNestableAttributes().length;
                      }),
                      (c.prototype.decreaseNestingLevel = function () {
                        var t;
                        return (t = this.getLastNestableAttribute())
                          ? this.removeAttribute(t)
                          : this;
                      }),
                      (c.prototype.increaseNestingLevel = function () {
                        var t, e, n;
                        return (t = this.getLastNestableAttribute())
                          ? ((n = this.attributes.lastIndexOf(t)),
                            (e = i.apply(
                              null,
                              [this.attributes, n + 1, 0].concat(u.call(p(t)))
                            )),
                            this.copyWithAttributes(e))
                          : this;
                      }),
                      (c.prototype.getListItemAttributes = function () {
                        var t, e, r, i, o;
                        for (
                          o = [], e = 0, r = (i = this.attributes).length;
                          r > e;
                          e++
                        )
                          (t = i[e]), n(t).listAttribute && o.push(t);
                        return o;
                      }),
                      (c.prototype.isListItem = function () {
                        var t;
                        return null != (t = n(this.getLastAttribute()))
                          ? t.listAttribute
                          : void 0;
                      }),
                      (c.prototype.isTerminalBlock = function () {
                        var t;
                        return null != (t = n(this.getLastAttribute()))
                          ? t.terminal
                          : void 0;
                      }),
                      (c.prototype.breaksOnReturn = function () {
                        var t;
                        return null != (t = n(this.getLastAttribute()))
                          ? t.breakOnReturn
                          : void 0;
                      }),
                      (c.prototype.findLineBreakInDirectionFromPosition = function (
                        t,
                        e
                      ) {
                        var n, r;
                        return (
                          (r = this.toString()),
                          -1 !==
                          (n = (function () {
                            switch (t) {
                              case "forward":
                                return r.indexOf("\n", e);
                              case "backward":
                                return r.slice(0, e).lastIndexOf("\n");
                            }
                          })())
                            ? n
                            : void 0
                        );
                      }),
                      (c.prototype.contentsForInspection = function () {
                        return {
                          text: this.text.inspect(),
                          attributes: this.attributes,
                        };
                      }),
                      (c.prototype.toString = function () {
                        return this.text.toString();
                      }),
                      (c.prototype.toJSON = function () {
                        return { text: this.text, attributes: this.attributes };
                      }),
                      (c.prototype.getLength = function () {
                        return this.text.getLength();
                      }),
                      (c.prototype.canBeConsolidatedWith = function (t) {
                        return !this.hasAttributes() && !t.hasAttributes();
                      }),
                      (c.prototype.consolidateWith = function (e) {
                        var n, r;
                        return (
                          (n = t.Text.textForStringWithAttributes("\n")),
                          (r = this.getTextWithoutBlockBreak().appendText(n)),
                          this.copyWithText(r.appendText(e.text))
                        );
                      }),
                      (c.prototype.splitAtOffset = function (t) {
                        var e, n;
                        return (
                          0 === t
                            ? ((e = null), (n = this))
                            : t === this.getLength()
                            ? ((e = this), (n = null))
                            : ((e = this.copyWithText(
                                this.text.getTextAtRange([0, t])
                              )),
                              (n = this.copyWithText(
                                this.text.getTextAtRange([t, this.getLength()])
                              ))),
                          [e, n]
                        );
                      }),
                      (c.prototype.getBlockBreakPosition = function () {
                        return this.text.getLength() - 1;
                      }),
                      (c.prototype.getTextWithoutBlockBreak = function () {
                        return m(this.text)
                          ? this.text.getTextAtRange([
                              0,
                              this.getBlockBreakPosition(),
                            ])
                          : this.text.copy();
                      }),
                      (c.prototype.canBeGrouped = function (t) {
                        return this.attributes[t];
                      }),
                      (c.prototype.canBeGroupedWith = function (t, e) {
                        var i, o, a, u;
                        return (
                          (o = (a = t.getAttributes())[e]),
                          (i = this.attributes[e]) === o &&
                            !(
                              !1 === n(i).group &&
                              ((u = a[e + 1]), s.call(r(), u) < 0)
                            )
                        );
                      }),
                      (h = function (t) {
                        return (t = y(t)), l(t);
                      }),
                      (y = function (e) {
                        var n, r, i, o, a, s;
                        return (
                          (o = !1),
                          (s = e.getPieces()),
                          (r =
                            2 <= s.length
                              ? u.call(s, 0, (n = s.length - 1))
                              : ((n = 0), [])),
                          null == (i = s[n++])
                            ? e
                            : ((r = (function () {
                                var t, e, n;
                                for (n = [], t = 0, e = r.length; e > t; t++)
                                  (a = r[t]).isBlockBreak()
                                    ? ((o = !0), n.push(v(a)))
                                    : n.push(a);
                                return n;
                              })()),
                              o ? new t.Text(u.call(r).concat([i])) : e)
                        );
                      }),
                      (d = t.Text.textForStringWithAttributes("\n", {
                        blockBreak: !0,
                      })),
                      (l = function (t) {
                        return m(t) ? t : t.appendText(d);
                      }),
                      (m = function (t) {
                        var e;
                        return (
                          0 !== (e = t.getLength()) &&
                          t.getTextAtRange([e - 1, e]).isBlockBreak()
                        );
                      }),
                      (v = function (t) {
                        return t.copyWithoutAttribute("blockBreak");
                      }),
                      (p = function (t) {
                        var e;
                        return null != (e = n(t).listAttribute) ? [e, t] : [t];
                      }),
                      (f = function (t) {
                        return t.slice(-1)[0];
                      }),
                      (g = function (t, e) {
                        var n;
                        return -1 === (n = t.lastIndexOf(e)) ? t : i(t, n, 1);
                      }),
                      c
                    );
                  })(t.Object));
              }.call(this),
              function () {
                var e,
                  n,
                  r,
                  i = function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    for (var r in e) o.call(e, r) && (t[r] = e[r]);
                    return (
                      (n.prototype = e.prototype),
                      (t.prototype = new n()),
                      (t.__super__ = e.prototype),
                      t
                    );
                  },
                  o = {}.hasOwnProperty,
                  a =
                    [].indexOf ||
                    function (t) {
                      for (var e = 0, n = this.length; n > e; e++)
                        if (e in this && this[e] === t) return e;
                      return -1;
                    },
                  s = [].slice;
                (n = t.tagName),
                  (r = t.walkTree),
                  (e = t.nodeIsAttachmentElement),
                  (t.HTMLSanitizer = (function (o) {
                    function u(t, e) {
                      var n;
                      (n = null != e ? e : {}),
                        (this.allowedAttributes = n.allowedAttributes),
                        (this.forbiddenProtocols = n.forbiddenProtocols),
                        null == this.allowedAttributes &&
                          (this.allowedAttributes = c),
                        null == this.forbiddenProtocols &&
                          (this.forbiddenProtocols = l),
                        (this.body = h(t));
                    }
                    var c, l, h, d;
                    return (
                      i(u, o),
                      (c = "style href src width height class".split(" ")),
                      (l = "javascript:".split(" ")),
                      (u.sanitize = function (t, e) {
                        var n;
                        return (n = new this(t, e)).sanitize(), n;
                      }),
                      (u.prototype.sanitize = function () {
                        return (
                          this.sanitizeElements(),
                          this.normalizeListElementNesting()
                        );
                      }),
                      (u.prototype.getHTML = function () {
                        return this.body.innerHTML;
                      }),
                      (u.prototype.getBody = function () {
                        return this.body;
                      }),
                      (u.prototype.sanitizeElements = function () {
                        var e, n, i, o, a;
                        for (a = r(this.body), o = []; a.nextNode(); )
                          switch ((i = a.currentNode).nodeType) {
                            case Node.ELEMENT_NODE:
                              d(i) ? o.push(i) : this.sanitizeElement(i);
                              break;
                            case Node.COMMENT_NODE:
                              o.push(i);
                          }
                        for (e = 0, n = o.length; n > e; e++)
                          (i = o[e]), t.removeNode(i);
                        return this.body;
                      }),
                      (u.prototype.sanitizeElement = function (t) {
                        var e, n, r, i, o;
                        for (
                          t.hasAttribute("href") &&
                            ((i = t.protocol),
                            a.call(this.forbiddenProtocols, i) >= 0 &&
                              t.removeAttribute("href")),
                            e = 0,
                            n = (o = s.call(t.attributes)).length;
                          n > e;
                          e++
                        )
                          (r = o[e].name),
                            a.call(this.allowedAttributes, r) >= 0 ||
                              0 === r.indexOf("data-trix") ||
                              t.removeAttribute(r);
                        return t;
                      }),
                      (u.prototype.normalizeListElementNesting = function () {
                        var t, e, r, i, o;
                        for (
                          t = 0,
                            e = (o = s.call(
                              this.body.querySelectorAll("ul,ol")
                            )).length;
                          e > t;
                          t++
                        )
                          (i = (r = o[t]).previousElementSibling) &&
                            "li" === n(i) &&
                            i.appendChild(r);
                        return this.body;
                      }),
                      (d = function (t) {
                        return (null != t ? t.nodeType : void 0) !==
                          Node.ELEMENT_NODE || e(t)
                          ? void 0
                          : "script" === n(t) ||
                              "false" === t.getAttribute("data-trix-serialize");
                      }),
                      (h = function (t) {
                        var e, n, r, i, o;
                        for (
                          null == t && (t = ""),
                            t = t.replace(/<\/html[^>]*>[^]*$/i, "</html>"),
                            (e = document.implementation.createHTMLDocument(
                              ""
                            )).documentElement.innerHTML = t,
                            r = 0,
                            i = (o = e.head.querySelectorAll("style")).length;
                          i > r;
                          r++
                        )
                          (n = o[r]), e.body.appendChild(n);
                        return e.body;
                      }),
                      u
                    );
                  })(t.BasicObject));
              }.call(this),
              function () {
                var e,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  c,
                  l,
                  h,
                  d = function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    for (var r in e) p.call(e, r) && (t[r] = e[r]);
                    return (
                      (n.prototype = e.prototype),
                      (t.prototype = new n()),
                      (t.__super__ = e.prototype),
                      t
                    );
                  },
                  p = {}.hasOwnProperty,
                  f =
                    [].indexOf ||
                    function (t) {
                      for (var e = 0, n = this.length; n > e; e++)
                        if (e in this && this[e] === t) return e;
                      return -1;
                    };
                (e = t.arraysAreEqual),
                  (a = t.makeElement),
                  (l = t.tagName),
                  (o = t.getBlockTagNames),
                  (h = t.walkTree),
                  (i = t.findClosestElementFromNode),
                  (r = t.elementContainsNode),
                  (s = t.nodeIsAttachmentElement),
                  (u = t.normalizeSpaces),
                  (n = t.breakableWhitespacePattern),
                  (c = t.squishBreakableWhitespace),
                  (t.HTMLParser = (function (p) {
                    function g(t, e) {
                      (this.html = t),
                        (this.referenceElement = (null != e
                          ? e
                          : {}
                        ).referenceElement),
                        (this.blocks = []),
                        (this.blockElements = []),
                        (this.processedElements = []);
                    }
                    var m, v, y, b, w, A, C, D, x, S, E, _;
                    return (
                      d(g, p),
                      (g.parse = function (t, e) {
                        var n;
                        return (n = new this(t, e)).parse(), n;
                      }),
                      (g.prototype.getDocument = function () {
                        return t.Document.fromJSON(this.blocks);
                      }),
                      (g.prototype.parse = function () {
                        var e, n;
                        try {
                          for (
                            this.createHiddenContainer(),
                              e = t.HTMLSanitizer.sanitize(this.html).getHTML(),
                              this.containerElement.innerHTML = e,
                              n = h(this.containerElement, { usingFilter: D });
                            n.nextNode();

                          )
                            this.processNode(n.currentNode);
                          return this.translateBlockElementMarginsToNewlines();
                        } finally {
                          this.removeHiddenContainer();
                        }
                      }),
                      (g.prototype.createHiddenContainer = function () {
                        return this.referenceElement
                          ? ((this.containerElement = this.referenceElement.cloneNode(
                              !1
                            )),
                            this.containerElement.removeAttribute("id"),
                            this.containerElement.setAttribute(
                              "data-trix-internal",
                              ""
                            ),
                            (this.containerElement.style.display = "none"),
                            this.referenceElement.parentNode.insertBefore(
                              this.containerElement,
                              this.referenceElement.nextSibling
                            ))
                          : ((this.containerElement = a({
                              tagName: "div",
                              style: { display: "none" },
                            })),
                            document.body.appendChild(this.containerElement));
                      }),
                      (g.prototype.removeHiddenContainer = function () {
                        return t.removeNode(this.containerElement);
                      }),
                      (D = function (t) {
                        return "style" === l(t)
                          ? NodeFilter.FILTER_REJECT
                          : NodeFilter.FILTER_ACCEPT;
                      }),
                      (g.prototype.processNode = function (t) {
                        switch (t.nodeType) {
                          case Node.TEXT_NODE:
                            if (!this.isInsignificantTextNode(t))
                              return (
                                this.appendBlockForTextNode(t),
                                this.processTextNode(t)
                              );
                            break;
                          case Node.ELEMENT_NODE:
                            return (
                              this.appendBlockForElement(t),
                              this.processElement(t)
                            );
                        }
                      }),
                      (g.prototype.appendBlockForTextNode = function (t) {
                        var n, r, i;
                        return (r = t.parentNode) ===
                          this.currentBlockElement &&
                          this.isBlockElement(t.previousSibling)
                          ? this.appendStringWithAttributes("\n")
                          : (r !== this.containerElement &&
                              !this.isBlockElement(r)) ||
                            ((n = this.getBlockAttributes(r)),
                            e(
                              n,
                              null != (i = this.currentBlock)
                                ? i.attributes
                                : void 0
                            ))
                          ? void 0
                          : ((this.currentBlock = this.appendBlockForAttributesWithElement(
                              n,
                              r
                            )),
                            (this.currentBlockElement = r));
                      }),
                      (g.prototype.appendBlockForElement = function (t) {
                        var n, i, o, a;
                        if (
                          ((o = this.isBlockElement(t)),
                          (i = r(this.currentBlockElement, t)),
                          o && !this.isBlockElement(t.firstChild))
                        ) {
                          if (
                            (!this.isInsignificantTextNode(t.firstChild) ||
                              !this.isBlockElement(t.firstElementChild)) &&
                            ((n = this.getBlockAttributes(t)), t.firstChild)
                          )
                            return i && e(n, this.currentBlock.attributes)
                              ? this.appendStringWithAttributes("\n")
                              : ((this.currentBlock = this.appendBlockForAttributesWithElement(
                                  n,
                                  t
                                )),
                                (this.currentBlockElement = t));
                        } else if (this.currentBlockElement && !i && !o)
                          return (a = this.findParentBlockElement(t))
                            ? this.appendBlockForElement(a)
                            : ((this.currentBlock = this.appendEmptyBlock()),
                              (this.currentBlockElement = null));
                      }),
                      (g.prototype.findParentBlockElement = function (t) {
                        var e;
                        for (
                          e = t.parentElement;
                          e && e !== this.containerElement;

                        ) {
                          if (
                            this.isBlockElement(e) &&
                            f.call(this.blockElements, e) >= 0
                          )
                            return e;
                          e = e.parentElement;
                        }
                        return null;
                      }),
                      (g.prototype.processTextNode = function (t) {
                        var e, n;
                        return (
                          (n = t.data),
                          v(t.parentNode) ||
                            ((n = c(n)),
                            E(
                              null != (e = t.previousSibling)
                                ? e.textContent
                                : void 0
                            ) && (n = A(n))),
                          this.appendStringWithAttributes(
                            n,
                            this.getTextAttributes(t.parentNode)
                          )
                        );
                      }),
                      (g.prototype.processElement = function (t) {
                        var e, n, r, i, o;
                        if (s(t))
                          return (
                            (e = y(t)),
                            Object.keys(e).length &&
                              ((i = this.getTextAttributes(t)),
                              this.appendAttachmentWithAttributes(e, i),
                              (t.innerHTML = "")),
                            this.processedElements.push(t)
                          );
                        switch (l(t)) {
                          case "br":
                            return (
                              this.isExtraBR(t) ||
                                this.isBlockElement(t.nextSibling) ||
                                this.appendStringWithAttributes(
                                  "\n",
                                  this.getTextAttributes(t)
                                ),
                              this.processedElements.push(t)
                            );
                          case "img":
                            for (n in ((e = {
                              url: t.getAttribute("src"),
                              contentType: "image",
                            }),
                            (r = w(t))))
                              (o = r[n]), (e[n] = o);
                            return (
                              this.appendAttachmentWithAttributes(
                                e,
                                this.getTextAttributes(t)
                              ),
                              this.processedElements.push(t)
                            );
                          case "tr":
                            if (t.parentNode.firstChild !== t)
                              return this.appendStringWithAttributes("\n");
                            break;
                          case "td":
                            if (t.parentNode.firstChild !== t)
                              return this.appendStringWithAttributes(" | ");
                        }
                      }),
                      (g.prototype.appendBlockForAttributesWithElement = function (
                        t,
                        e
                      ) {
                        var n;
                        return (
                          this.blockElements.push(e),
                          (n = m(t)),
                          this.blocks.push(n),
                          n
                        );
                      }),
                      (g.prototype.appendEmptyBlock = function () {
                        return this.appendBlockForAttributesWithElement(
                          [],
                          null
                        );
                      }),
                      (g.prototype.appendStringWithAttributes = function (
                        t,
                        e
                      ) {
                        return this.appendPiece(S(t, e));
                      }),
                      (g.prototype.appendAttachmentWithAttributes = function (
                        t,
                        e
                      ) {
                        return this.appendPiece(x(t, e));
                      }),
                      (g.prototype.appendPiece = function (t) {
                        return (
                          0 === this.blocks.length && this.appendEmptyBlock(),
                          this.blocks[this.blocks.length - 1].text.push(t)
                        );
                      }),
                      (g.prototype.appendStringToTextAtIndex = function (t, e) {
                        var n, r;
                        return "string" ===
                          (null != (n = (r = this.blocks[e].text)[r.length - 1])
                            ? n.type
                            : void 0)
                          ? (n.string += t)
                          : r.push(S(t));
                      }),
                      (g.prototype.prependStringToTextAtIndex = function (
                        t,
                        e
                      ) {
                        var n, r;
                        return "string" ===
                          (null != (n = (r = this.blocks[e].text)[0])
                            ? n.type
                            : void 0)
                          ? (n.string = t + n.string)
                          : r.unshift(S(t));
                      }),
                      (S = function (t, e) {
                        return (
                          null == e && (e = {}),
                          "string",
                          { string: (t = u(t)), attributes: e, type: "string" }
                        );
                      }),
                      (x = function (t, e) {
                        return (
                          null == e && (e = {}),
                          "attachment",
                          { attachment: t, attributes: e, type: "attachment" }
                        );
                      }),
                      (m = function (t) {
                        return (
                          null == t && (t = {}), { text: [], attributes: t }
                        );
                      }),
                      (g.prototype.getTextAttributes = function (e) {
                        var n, r, o, a, u, c, l, h, d, p, f, g, m;
                        for (n in ((o = {}), (p = t.config.textAttributes)))
                          if (
                            (u = p[n]).tagName &&
                            i(e, {
                              matchingSelector: u.tagName,
                              untilNode: this.containerElement,
                            })
                          )
                            o[n] = !0;
                          else if (u.parser) {
                            if ((m = u.parser(e))) {
                              for (
                                r = !1,
                                  c = 0,
                                  d = (f = this.findBlockElementAncestors(e))
                                    .length;
                                d > c;
                                c++
                              )
                                if (((a = f[c]), u.parser(a) === m)) {
                                  r = !0;
                                  break;
                                }
                              r || (o[n] = m);
                            }
                          } else
                            u.styleProperty &&
                              (m = e.style[u.styleProperty]) &&
                              (o[n] = m);
                        if (
                          s(e) &&
                          (l = e.getAttribute("data-trix-attributes"))
                        )
                          for (h in (g = JSON.parse(l))) (m = g[h]), (o[h] = m);
                        return o;
                      }),
                      (g.prototype.getBlockAttributes = function (e) {
                        var n, r, i, o;
                        for (r = []; e && e !== this.containerElement; ) {
                          for (n in (o = t.config.blockAttributes))
                            !1 !== (i = o[n]).parse &&
                              l(e) === i.tagName &&
                              (("function" == typeof i.test
                                ? i.test(e)
                                : void 0) ||
                                !i.test) &&
                              (r.push(n),
                              i.listAttribute && r.push(i.listAttribute));
                          e = e.parentNode;
                        }
                        return r.reverse();
                      }),
                      (g.prototype.findBlockElementAncestors = function (t) {
                        var e, n;
                        for (e = []; t && t !== this.containerElement; )
                          (n = l(t)),
                            f.call(o(), n) >= 0 && e.push(t),
                            (t = t.parentNode);
                        return e;
                      }),
                      (y = function (t) {
                        return JSON.parse(
                          t.getAttribute("data-trix-attachment")
                        );
                      }),
                      (w = function (t) {
                        var e, n, r;
                        return (
                          (r = t.getAttribute("width")),
                          (n = t.getAttribute("height")),
                          (e = {}),
                          r && (e.width = parseInt(r, 10)),
                          n && (e.height = parseInt(n, 10)),
                          e
                        );
                      }),
                      (g.prototype.isBlockElement = function (t) {
                        var e;
                        if (
                          (null != t ? t.nodeType : void 0) ===
                            Node.ELEMENT_NODE &&
                          !s(t) &&
                          !i(t, {
                            matchingSelector: "td",
                            untilNode: this.containerElement,
                          })
                        )
                          return (
                            (e = l(t)),
                            f.call(o(), e) >= 0 ||
                              "block" === window.getComputedStyle(t).display
                          );
                      }),
                      (g.prototype.isInsignificantTextNode = function (t) {
                        var e, n, r;
                        if (
                          (null != t ? t.nodeType : void 0) ===
                            Node.TEXT_NODE &&
                          _(t.data) &&
                          ((n = t.parentNode),
                          (r = t.previousSibling),
                          (e = t.nextSibling),
                          (!C(n.previousSibling) ||
                            this.isBlockElement(n.previousSibling)) &&
                            !v(n))
                        )
                          return (
                            !r ||
                            this.isBlockElement(r) ||
                            !e ||
                            this.isBlockElement(e)
                          );
                      }),
                      (g.prototype.isExtraBR = function (t) {
                        return (
                          "br" === l(t) &&
                          this.isBlockElement(t.parentNode) &&
                          t.parentNode.lastChild === t
                        );
                      }),
                      (v = function (t) {
                        var e;
                        return (
                          "pre" ===
                            (e = window.getComputedStyle(t).whiteSpace) ||
                          "pre-wrap" === e ||
                          "pre-line" === e
                        );
                      }),
                      (C = function (t) {
                        return t && !E(t.textContent);
                      }),
                      (g.prototype.translateBlockElementMarginsToNewlines = function () {
                        var t, e, n, r, i, o, a;
                        for (
                          t = this.getMarginOfDefaultBlockElement(),
                            a = [],
                            n = e = 0,
                            r = (o = this.blocks).length;
                          r > e;
                          n = ++e
                        )
                          o[n],
                            (i = this.getMarginOfBlockElementAtIndex(n)) &&
                              (i.top > 2 * t.top &&
                                this.prependStringToTextAtIndex("\n", n),
                              a.push(
                                i.bottom > 2 * t.bottom
                                  ? this.appendStringToTextAtIndex("\n", n)
                                  : void 0
                              ));
                        return a;
                      }),
                      (g.prototype.getMarginOfBlockElementAtIndex = function (
                        t
                      ) {
                        var e, n;
                        return !(e = this.blockElements[t]) ||
                          !e.textContent ||
                          ((n = l(e)),
                          f.call(o(), n) >= 0 ||
                            f.call(this.processedElements, e) >= 0)
                          ? void 0
                          : b(e);
                      }),
                      (g.prototype.getMarginOfDefaultBlockElement = function () {
                        var e;
                        return (
                          (e = a(t.config.blockAttributes.default.tagName)),
                          this.containerElement.appendChild(e),
                          b(e)
                        );
                      }),
                      (b = function (t) {
                        var e;
                        return "block" ===
                          (e = window.getComputedStyle(t)).display
                          ? {
                              top: parseInt(e.marginTop),
                              bottom: parseInt(e.marginBottom),
                            }
                          : void 0;
                      }),
                      (A = function (t) {
                        return t.replace(RegExp("^" + n.source + "+"), "");
                      }),
                      (_ = function (t) {
                        return RegExp("^" + n.source + "*$").test(t);
                      }),
                      (E = function (t) {
                        return /\s$/.test(t);
                      }),
                      g
                    );
                  })(t.BasicObject));
              }.call(this),
              function () {
                var e,
                  n,
                  r,
                  i,
                  o = function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    for (var r in e) a.call(e, r) && (t[r] = e[r]);
                    return (
                      (n.prototype = e.prototype),
                      (t.prototype = new n()),
                      (t.__super__ = e.prototype),
                      t
                    );
                  },
                  a = {}.hasOwnProperty,
                  s = [].slice,
                  u =
                    [].indexOf ||
                    function (t) {
                      for (var e = 0, n = this.length; n > e; e++)
                        if (e in this && this[e] === t) return e;
                      return -1;
                    };
                (e = t.arraysAreEqual),
                  (r = t.normalizeRange),
                  (i = t.rangeIsCollapsed),
                  (n = t.getBlockConfig),
                  (t.Document = (function (a) {
                    function c(e) {
                      null == e && (e = []),
                        c.__super__.constructor.apply(this, arguments),
                        0 === e.length && (e = [new t.Block()]),
                        (this.blockList = t.SplittableList.box(e));
                    }
                    var l;
                    return (
                      o(c, a),
                      (c.fromJSON = function (e) {
                        var n;
                        return new this(
                          (function () {
                            var r, i, o;
                            for (o = [], r = 0, i = e.length; i > r; r++)
                              (n = e[r]), o.push(t.Block.fromJSON(n));
                            return o;
                          })()
                        );
                      }),
                      (c.fromHTML = function (e, n) {
                        return t.HTMLParser.parse(e, n).getDocument();
                      }),
                      (c.fromString = function (e, n) {
                        var r;
                        return (
                          (r = t.Text.textForStringWithAttributes(e, n)),
                          new this([new t.Block(r)])
                        );
                      }),
                      (c.prototype.isEmpty = function () {
                        var t;
                        return (
                          1 === this.blockList.length &&
                          (t = this.getBlockAtIndex(0)).isEmpty() &&
                          !t.hasAttributes()
                        );
                      }),
                      (c.prototype.copy = function (t) {
                        var e;
                        return (
                          null == t && (t = {}),
                          (e = t.consolidateBlocks
                            ? this.blockList.consolidate().toArray()
                            : this.blockList.toArray()),
                          new this.constructor(e)
                        );
                      }),
                      (c.prototype.copyUsingObjectsFromDocument = function (e) {
                        var n;
                        return (
                          (n = new t.ObjectMap(e.getObjects())),
                          this.copyUsingObjectMap(n)
                        );
                      }),
                      (c.prototype.copyUsingObjectMap = function (t) {
                        var e, n, r;
                        return (
                          (n = function () {
                            var n, i, o, a;
                            for (
                              a = [], n = 0, i = (o = this.getBlocks()).length;
                              i > n;
                              n++
                            )
                              (e = o[n]),
                                a.push(
                                  (r = t.find(e)) ? r : e.copyUsingObjectMap(t)
                                );
                            return a;
                          }.call(this)),
                          new this.constructor(n)
                        );
                      }),
                      (c.prototype.copyWithBaseBlockAttributes = function (t) {
                        var e, n, r;
                        return (
                          null == t && (t = []),
                          (r = function () {
                            var r, i, o, a;
                            for (
                              a = [], r = 0, i = (o = this.getBlocks()).length;
                              i > r;
                              r++
                            )
                              (n = o[r]),
                                (e = t.concat(n.getAttributes())),
                                a.push(n.copyWithAttributes(e));
                            return a;
                          }.call(this)),
                          new this.constructor(r)
                        );
                      }),
                      (c.prototype.replaceBlock = function (t, e) {
                        var n;
                        return -1 === (n = this.blockList.indexOf(t))
                          ? this
                          : new this.constructor(
                              this.blockList.replaceObjectAtIndex(e, n)
                            );
                      }),
                      (c.prototype.insertDocumentAtRange = function (t, e) {
                        var n, o, a, s, u, c, l;
                        return (
                          (o = t.blockList),
                          (u = (e = r(e))[0]),
                          (a = (c = this.locationFromPosition(u)).index),
                          (s = c.offset),
                          (l = this),
                          (n = this.getBlockAtPosition(u)),
                          i(e) && n.isEmpty() && !n.hasAttributes()
                            ? (l = new this.constructor(
                                l.blockList.removeObjectAtIndex(a)
                              ))
                            : n.getBlockBreakPosition() === s && u++,
                          (l = l.removeTextAtRange(e)),
                          new this.constructor(
                            l.blockList.insertSplittableListAtPosition(o, u)
                          )
                        );
                      }),
                      (c.prototype.mergeDocumentAtRange = function (t, n) {
                        var i, o, a, s, u, c, l, h, d, p, f, g;
                        return (
                          (f = (n = r(n))[0]),
                          (p = this.locationFromPosition(f)),
                          (o = this.getBlockAtIndex(p.index).getAttributes()),
                          (i = t.getBaseBlockAttributes()),
                          (g = o.slice(-i.length)),
                          e(i, g)
                            ? ((l = o.slice(0, -i.length)),
                              (c = t.copyWithBaseBlockAttributes(l)))
                            : (c = t
                                .copy({ consolidateBlocks: !0 })
                                .copyWithBaseBlockAttributes(o)),
                          (a = c.getBlockCount()),
                          (s = c.getBlockAtIndex(0)),
                          e(o, s.getAttributes())
                            ? ((u = s.getTextWithoutBlockBreak()),
                              (d = this.insertTextAtRange(u, n)),
                              a > 1 &&
                                ((c = new this.constructor(
                                  c.getBlocks().slice(1)
                                )),
                                (h = f + u.getLength()),
                                (d = d.insertDocumentAtRange(c, h))))
                            : (d = this.insertDocumentAtRange(c, n)),
                          d
                        );
                      }),
                      (c.prototype.insertTextAtRange = function (t, e) {
                        var n, i, o, a, s;
                        return (
                          (s = (e = r(e))[0]),
                          (i = (a = this.locationFromPosition(s)).index),
                          (o = a.offset),
                          (n = this.removeTextAtRange(e)),
                          new this.constructor(
                            n.blockList.editObjectAtIndex(i, function (e) {
                              return e.copyWithText(
                                e.text.insertTextAtPosition(t, o)
                              );
                            })
                          )
                        );
                      }),
                      (c.prototype.removeTextAtRange = function (t) {
                        var e,
                          n,
                          o,
                          a,
                          s,
                          u,
                          c,
                          l,
                          h,
                          d,
                          p,
                          f,
                          g,
                          m,
                          v,
                          y,
                          b,
                          w;
                        return (
                          (l = (d = t = r(t))[0]),
                          (y = d[1]),
                          i(t)
                            ? this
                            : ((u = (p = this.locationRangeFromRange(t))[0]),
                              (m = p[1]),
                              (s = u.index),
                              (c = u.offset),
                              (a = this.getBlockAtIndex(s)),
                              (g = m.index),
                              (v = m.offset),
                              (f = this.getBlockAtIndex(g)),
                              y - l == 1 &&
                              a.getBlockBreakPosition() === c &&
                              f.getBlockBreakPosition() !== v &&
                              "\n" === f.text.getStringAtPosition(v)
                                ? (o = this.blockList.editObjectAtIndex(
                                    g,
                                    function (t) {
                                      return t.copyWithText(
                                        t.text.removeTextAtRange([v, v + 1])
                                      );
                                    }
                                  ))
                                : ((h = a.text.getTextAtRange([0, c])),
                                  (b = f.text.getTextAtRange([
                                    v,
                                    f.getLength(),
                                  ])),
                                  (w = h.appendText(b)),
                                  (n =
                                    s !== g &&
                                    0 === c &&
                                    a.getAttributeLevel() >=
                                      f.getAttributeLevel()
                                      ? f.copyWithText(w)
                                      : a.copyWithText(w)),
                                  (e = g + 1 - s),
                                  (o = this.blockList.splice(s, e, n))),
                              new this.constructor(o))
                        );
                      }),
                      (c.prototype.moveTextFromRangeToPosition = function (
                        t,
                        e
                      ) {
                        var n, i, o, a, u, c, l, h, d, p;
                        return (
                          (d = (c = t = r(t))[0]),
                          (o = c[1]),
                          e >= d && o >= e
                            ? this
                            : ((i = this.getDocumentAtRange(t)),
                              (h = this.removeTextAtRange(t)),
                              (u = e > d) && (e -= i.getLength()),
                              (a = (l = i.getBlocks())[0]),
                              0 ===
                              (n = 2 <= l.length ? s.call(l, 1) : []).length
                                ? ((p = a.getTextWithoutBlockBreak()),
                                  u && (e += 1))
                                : (p = a.text),
                              (h = h.insertTextAtRange(p, e)),
                              0 === n.length
                                ? h
                                : ((i = new this.constructor(n)),
                                  (e += p.getLength()),
                                  h.insertDocumentAtRange(i, e)))
                        );
                      }),
                      (c.prototype.addAttributeAtRange = function (t, e, r) {
                        var i;
                        return (
                          (i = this.blockList),
                          this.eachBlockAtRange(r, function (r, o, a) {
                            return (i = i.editObjectAtIndex(a, function () {
                              return n(t)
                                ? r.addAttribute(t, e)
                                : o[0] === o[1]
                                ? r
                                : r.copyWithText(
                                    r.text.addAttributeAtRange(t, e, o)
                                  );
                            }));
                          }),
                          new this.constructor(i)
                        );
                      }),
                      (c.prototype.addAttribute = function (t, e) {
                        var n;
                        return (
                          (n = this.blockList),
                          this.eachBlock(function (r, i) {
                            return (n = n.editObjectAtIndex(i, function () {
                              return r.addAttribute(t, e);
                            }));
                          }),
                          new this.constructor(n)
                        );
                      }),
                      (c.prototype.removeAttributeAtRange = function (t, e) {
                        var r;
                        return (
                          (r = this.blockList),
                          this.eachBlockAtRange(e, function (e, i, o) {
                            return n(t)
                              ? (r = r.editObjectAtIndex(o, function () {
                                  return e.removeAttribute(t);
                                }))
                              : i[0] !== i[1]
                              ? (r = r.editObjectAtIndex(o, function () {
                                  return e.copyWithText(
                                    e.text.removeAttributeAtRange(t, i)
                                  );
                                }))
                              : void 0;
                          }),
                          new this.constructor(r)
                        );
                      }),
                      (c.prototype.updateAttributesForAttachment = function (
                        t,
                        e
                      ) {
                        var n, r, i;
                        return (
                          (r = this.getRangeOfAttachment(e)[0]),
                          (n = this.locationFromPosition(r).index),
                          (i = this.getTextAtIndex(n)),
                          new this.constructor(
                            this.blockList.editObjectAtIndex(n, function (n) {
                              return n.copyWithText(
                                i.updateAttributesForAttachment(t, e)
                              );
                            })
                          )
                        );
                      }),
                      (c.prototype.removeAttributeForAttachment = function (
                        t,
                        e
                      ) {
                        var n;
                        return (
                          (n = this.getRangeOfAttachment(e)),
                          this.removeAttributeAtRange(t, n)
                        );
                      }),
                      (c.prototype.insertBlockBreakAtRange = function (e) {
                        var n, i, o, a;
                        return (
                          (a = (e = r(e))[0]),
                          (o = this.locationFromPosition(a).offset),
                          (i = this.removeTextAtRange(e)),
                          0 === o && (n = [new t.Block()]),
                          new this.constructor(
                            i.blockList.insertSplittableListAtPosition(
                              new t.SplittableList(n),
                              a
                            )
                          )
                        );
                      }),
                      (c.prototype.applyBlockAttributeAtRange = function (
                        t,
                        e,
                        r
                      ) {
                        var i, o, a, s;
                        return (
                          (o = (a = this.expandRangeToLineBreaksAndSplitBlocks(
                            r
                          )).document),
                          (r = a.range),
                          (i = n(t)).listAttribute
                            ? ((s = (o = o.removeLastListAttributeAtRange(r, {
                                exceptAttributeName: t,
                              })).convertLineBreaksToBlockBreaksInRange(r)),
                              (o = s.document),
                              (r = s.range))
                            : (o = i.exclusive
                                ? o.removeBlockAttributesAtRange(r)
                                : i.terminal
                                ? o.removeLastTerminalAttributeAtRange(r)
                                : o.consolidateBlocksAtRange(r)),
                          o.addAttributeAtRange(t, e, r)
                        );
                      }),
                      (c.prototype.removeLastListAttributeAtRange = function (
                        t,
                        e
                      ) {
                        var r;
                        return (
                          null == e && (e = {}),
                          (r = this.blockList),
                          this.eachBlockAtRange(t, function (t, i, o) {
                            var a;
                            if (
                              (a = t.getLastAttribute()) &&
                              n(a).listAttribute &&
                              a !== e.exceptAttributeName
                            )
                              return (r = r.editObjectAtIndex(o, function () {
                                return t.removeAttribute(a);
                              }));
                          }),
                          new this.constructor(r)
                        );
                      }),
                      (c.prototype.removeLastTerminalAttributeAtRange = function (
                        t
                      ) {
                        var e;
                        return (
                          (e = this.blockList),
                          this.eachBlockAtRange(t, function (t, r, i) {
                            var o;
                            if ((o = t.getLastAttribute()) && n(o).terminal)
                              return (e = e.editObjectAtIndex(i, function () {
                                return t.removeAttribute(o);
                              }));
                          }),
                          new this.constructor(e)
                        );
                      }),
                      (c.prototype.removeBlockAttributesAtRange = function (t) {
                        var e;
                        return (
                          (e = this.blockList),
                          this.eachBlockAtRange(t, function (t, n, r) {
                            return t.hasAttributes()
                              ? (e = e.editObjectAtIndex(r, function () {
                                  return t.copyWithoutAttributes();
                                }))
                              : void 0;
                          }),
                          new this.constructor(e)
                        );
                      }),
                      (c.prototype.expandRangeToLineBreaksAndSplitBlocks = function (
                        t
                      ) {
                        var e, n, i, o, a, s, u, c, l;
                        return (
                          (l = (s = t = r(t))[0]),
                          (o = s[1]),
                          (c = this.locationFromPosition(l)),
                          (i = this.locationFromPosition(o)),
                          (u = (e = this).getBlockAtIndex(c.index)),
                          null !=
                            (c.offset = u.findLineBreakInDirectionFromPosition(
                              "backward",
                              c.offset
                            )) &&
                            ((a = e.positionFromLocation(c)),
                            (e = e.insertBlockBreakAtRange([a, a + 1])),
                            (i.index += 1),
                            (i.offset -= e
                              .getBlockAtIndex(c.index)
                              .getLength()),
                            (c.index += 1)),
                          (c.offset = 0),
                          0 === i.offset && i.index > c.index
                            ? ((i.index -= 1),
                              (i.offset = e
                                .getBlockAtIndex(i.index)
                                .getBlockBreakPosition()))
                            : ("\n" ===
                              (n = e.getBlockAtIndex(
                                i.index
                              )).text.getStringAtRange([i.offset - 1, i.offset])
                                ? (i.offset -= 1)
                                : (i.offset = n.findLineBreakInDirectionFromPosition(
                                    "forward",
                                    i.offset
                                  )),
                              i.offset !== n.getBlockBreakPosition() &&
                                ((a = e.positionFromLocation(i)),
                                (e = e.insertBlockBreakAtRange([a, a + 1])))),
                          (l = e.positionFromLocation(c)),
                          (o = e.positionFromLocation(i)),
                          { document: e, range: (t = r([l, o])) }
                        );
                      }),
                      (c.prototype.convertLineBreaksToBlockBreaksInRange = function (
                        t
                      ) {
                        var e, n, i;
                        return (
                          (n = (t = r(t))[0]),
                          (i = this.getStringAtRange(t).slice(0, -1)),
                          (e = this),
                          i.replace(/.*?\n/g, function (t) {
                            return (
                              (n += t.length),
                              (e = e.insertBlockBreakAtRange([n - 1, n]))
                            );
                          }),
                          { document: e, range: t }
                        );
                      }),
                      (c.prototype.consolidateBlocksAtRange = function (t) {
                        var e, n, i, o, a;
                        return (
                          (a = (i = t = r(t))[0]),
                          (n = i[1]),
                          (o = this.locationFromPosition(a).index),
                          (e = this.locationFromPosition(n).index),
                          new this.constructor(
                            this.blockList.consolidateFromIndexToIndex(o, e)
                          )
                        );
                      }),
                      (c.prototype.getDocumentAtRange = function (t) {
                        var e;
                        return (
                          (t = r(t)),
                          (e = this.blockList
                            .getSplittableListInRange(t)
                            .toArray()),
                          new this.constructor(e)
                        );
                      }),
                      (c.prototype.getStringAtRange = function (t) {
                        var e, n;
                        return (
                          (n = t = r(t))[n.length - 1] !== this.getLength() &&
                            (e = -1),
                          this.getDocumentAtRange(t).toString().slice(0, e)
                        );
                      }),
                      (c.prototype.getBlockAtIndex = function (t) {
                        return this.blockList.getObjectAtIndex(t);
                      }),
                      (c.prototype.getBlockAtPosition = function (t) {
                        var e;
                        return (
                          (e = this.locationFromPosition(t).index),
                          this.getBlockAtIndex(e)
                        );
                      }),
                      (c.prototype.getTextAtIndex = function (t) {
                        var e;
                        return null != (e = this.getBlockAtIndex(t))
                          ? e.text
                          : void 0;
                      }),
                      (c.prototype.getTextAtPosition = function (t) {
                        var e;
                        return (
                          (e = this.locationFromPosition(t).index),
                          this.getTextAtIndex(e)
                        );
                      }),
                      (c.prototype.getPieceAtPosition = function (t) {
                        var e, n, r;
                        return (
                          (e = (r = this.locationFromPosition(t)).index),
                          (n = r.offset),
                          this.getTextAtIndex(e).getPieceAtPosition(n)
                        );
                      }),
                      (c.prototype.getCharacterAtPosition = function (t) {
                        var e, n, r;
                        return (
                          (e = (r = this.locationFromPosition(t)).index),
                          (n = r.offset),
                          this.getTextAtIndex(e).getStringAtRange([n, n + 1])
                        );
                      }),
                      (c.prototype.getLength = function () {
                        return this.blockList.getEndPosition();
                      }),
                      (c.prototype.getBlocks = function () {
                        return this.blockList.toArray();
                      }),
                      (c.prototype.getBlockCount = function () {
                        return this.blockList.length;
                      }),
                      (c.prototype.getEditCount = function () {
                        return this.editCount;
                      }),
                      (c.prototype.eachBlock = function (t) {
                        return this.blockList.eachObject(t);
                      }),
                      (c.prototype.eachBlockAtRange = function (t, e) {
                        var n, i, o, a, s, u, c, l, h, d, p, f;
                        if (
                          ((p = (u = t = r(t))[0]),
                          (o = u[1]),
                          (d = this.locationFromPosition(p)),
                          (i = this.locationFromPosition(o)),
                          d.index === i.index)
                        )
                          return (
                            (n = this.getBlockAtIndex(d.index)),
                            (f = [d.offset, i.offset]),
                            e(n, f, d.index)
                          );
                        for (
                          h = [], s = a = c = d.index, l = i.index;
                          l >= c ? l >= a : a >= l;
                          s = l >= c ? ++a : --a
                        )
                          (n = this.getBlockAtIndex(s))
                            ? ((f = (function () {
                                switch (s) {
                                  case d.index:
                                    return [d.offset, n.text.getLength()];
                                  case i.index:
                                    return [0, i.offset];
                                  default:
                                    return [0, n.text.getLength()];
                                }
                              })()),
                              h.push(e(n, f, s)))
                            : h.push(void 0);
                        return h;
                      }),
                      (c.prototype.getCommonAttributesAtRange = function (e) {
                        var n, o, a;
                        return (
                          (o = (e = r(e))[0]),
                          i(e)
                            ? this.getCommonAttributesAtPosition(o)
                            : ((a = []),
                              (n = []),
                              this.eachBlockAtRange(e, function (t, e) {
                                return e[0] !== e[1]
                                  ? (a.push(
                                      t.text.getCommonAttributesAtRange(e)
                                    ),
                                    n.push(l(t)))
                                  : void 0;
                              }),
                              t.Hash.fromCommonAttributesOfObjects(a)
                                .merge(t.Hash.fromCommonAttributesOfObjects(n))
                                .toObject())
                        );
                      }),
                      (c.prototype.getCommonAttributesAtPosition = function (
                        e
                      ) {
                        var n, r, i, o, a, s, c, h, d, p;
                        if (
                          ((a = (d = this.locationFromPosition(e)).index),
                          (h = d.offset),
                          !(i = this.getBlockAtIndex(a)))
                        )
                          return {};
                        for (c in ((o = l(i)),
                        (n = i.text.getAttributesAtPosition(h)),
                        (r = i.text.getAttributesAtPosition(h - 1)),
                        (s = (function () {
                          var e, n;
                          for (c in ((n = []), (e = t.config.textAttributes)))
                            (p = e[c]).inheritable && n.push(c);
                          return n;
                        })()),
                        r))
                          ((p = r[c]) === n[c] || u.call(s, c) >= 0) &&
                            (o[c] = p);
                        return o;
                      }),
                      (c.prototype.getRangeOfCommonAttributeAtPosition = function (
                        t,
                        e
                      ) {
                        var n, i, o, a, s, u, c, l;
                        return (
                          (o = (s = this.locationFromPosition(e)).index),
                          (a = s.offset),
                          (l = (u = this.getTextAtIndex(
                            o
                          ).getExpandedRangeForAttributeAtOffset(t, a))[0]),
                          (i = u[1]),
                          (c = this.positionFromLocation({
                            index: o,
                            offset: l,
                          })),
                          (n = this.positionFromLocation({
                            index: o,
                            offset: i,
                          })),
                          r([c, n])
                        );
                      }),
                      (c.prototype.getBaseBlockAttributes = function () {
                        var t, e, n, r, i, o, a;
                        for (
                          t = this.getBlockAtIndex(0).getAttributes(),
                            n = r = 1,
                            a = this.getBlockCount();
                          a >= 1 ? a > r : r > a;
                          n = a >= 1 ? ++r : --r
                        )
                          (e = this.getBlockAtIndex(n).getAttributes()),
                            (o = Math.min(t.length, e.length)),
                            (t = (function () {
                              var n, r, a;
                              for (
                                a = [], i = n = 0, r = o;
                                (r >= 0 ? r > n : n > r) && e[i] === t[i];
                                i = r >= 0 ? ++n : --n
                              )
                                a.push(e[i]);
                              return a;
                            })());
                        return t;
                      }),
                      (l = function (t) {
                        var e, n;
                        return (
                          (n = {}), (e = t.getLastAttribute()) && (n[e] = !0), n
                        );
                      }),
                      (c.prototype.getAttachmentById = function (t) {
                        var e, n, r, i;
                        for (
                          n = 0, r = (i = this.getAttachments()).length;
                          r > n;
                          n++
                        )
                          if ((e = i[n]).id === t) return e;
                      }),
                      (c.prototype.getAttachmentPieces = function () {
                        var t;
                        return (
                          (t = []),
                          this.blockList.eachObject(function (e) {
                            var n;
                            return (
                              (n = e.text),
                              (t = t.concat(n.getAttachmentPieces()))
                            );
                          }),
                          t
                        );
                      }),
                      (c.prototype.getAttachments = function () {
                        var t, e, n, r, i;
                        for (
                          i = [],
                            t = 0,
                            e = (r = this.getAttachmentPieces()).length;
                          e > t;
                          t++
                        )
                          (n = r[t]), i.push(n.attachment);
                        return i;
                      }),
                      (c.prototype.getRangeOfAttachment = function (t) {
                        var e, n, i, o, a, s, u;
                        for (
                          o = 0,
                            n = e = 0,
                            i = (a = this.blockList.toArray()).length;
                          i > e;
                          n = ++e
                        ) {
                          if ((u = (s = a[n].text).getRangeOfAttachment(t)))
                            return r([o + u[0], o + u[1]]);
                          o += s.getLength();
                        }
                      }),
                      (c.prototype.getLocationRangeOfAttachment = function (t) {
                        var e;
                        return (
                          (e = this.getRangeOfAttachment(t)),
                          this.locationRangeFromRange(e)
                        );
                      }),
                      (c.prototype.getAttachmentPieceForAttachment = function (
                        t
                      ) {
                        var e, n, r, i;
                        for (
                          e = 0, n = (i = this.getAttachmentPieces()).length;
                          n > e;
                          e++
                        )
                          if ((r = i[e]).attachment === t) return r;
                      }),
                      (c.prototype.findRangesForBlockAttribute = function (t) {
                        var e, n, r, i, o, a, s;
                        for (
                          o = 0,
                            a = [],
                            n = 0,
                            r = (s = this.getBlocks()).length;
                          r > n;
                          n++
                        )
                          (i = (e = s[n]).getLength()),
                            e.hasAttribute(t) && a.push([o, o + i]),
                            (o += i);
                        return a;
                      }),
                      (c.prototype.findRangesForTextAttribute = function (
                        t,
                        e
                      ) {
                        var n, r, i, o, a, s, u, c, l, h;
                        for (
                          h = (null != e ? e : {}).withValue,
                            s = 0,
                            u = [],
                            c = [],
                            o = function (e) {
                              return null != h
                                ? e.getAttribute(t) === h
                                : e.hasAttribute(t);
                            },
                            n = 0,
                            r = (l = this.getPieces()).length;
                          r > n;
                          n++
                        )
                          (i = (a = l[n]).getLength()),
                            o(a) &&
                              (u[1] === s
                                ? (u[1] = s + i)
                                : c.push((u = [s, s + i]))),
                            (s += i);
                        return c;
                      }),
                      (c.prototype.locationFromPosition = function (t) {
                        var e, n;
                        return null !=
                          (n = this.blockList.findIndexAndOffsetAtPosition(
                            Math.max(0, t)
                          )).index
                          ? n
                          : {
                              index: (e = this.getBlocks()).length - 1,
                              offset: e[e.length - 1].getLength(),
                            };
                      }),
                      (c.prototype.positionFromLocation = function (t) {
                        return this.blockList.findPositionAtIndexAndOffset(
                          t.index,
                          t.offset
                        );
                      }),
                      (c.prototype.locationRangeFromPosition = function (t) {
                        return r(this.locationFromPosition(t));
                      }),
                      (c.prototype.locationRangeFromRange = function (t) {
                        var e, n, i, o;
                        if ((t = r(t)))
                          return (
                            (o = t[0]),
                            (n = t[1]),
                            (i = this.locationFromPosition(o)),
                            (e = this.locationFromPosition(n)),
                            r([i, e])
                          );
                      }),
                      (c.prototype.rangeFromLocationRange = function (t) {
                        var e, n;
                        return (
                          (t = r(t)),
                          (e = this.positionFromLocation(t[0])),
                          i(t) || (n = this.positionFromLocation(t[1])),
                          r([e, n])
                        );
                      }),
                      (c.prototype.isEqualTo = function (t) {
                        return this.blockList.isEqualTo(
                          null != t ? t.blockList : void 0
                        );
                      }),
                      (c.prototype.getTexts = function () {
                        var t, e, n, r, i;
                        for (
                          i = [], e = 0, n = (r = this.getBlocks()).length;
                          n > e;
                          e++
                        )
                          (t = r[e]), i.push(t.text);
                        return i;
                      }),
                      (c.prototype.getPieces = function () {
                        var t, e, n, r, i;
                        for (
                          n = [], t = 0, e = (r = this.getTexts()).length;
                          e > t;
                          t++
                        )
                          (i = r[t]), n.push.apply(n, i.getPieces());
                        return n;
                      }),
                      (c.prototype.getObjects = function () {
                        return this.getBlocks()
                          .concat(this.getTexts())
                          .concat(this.getPieces());
                      }),
                      (c.prototype.toSerializableDocument = function () {
                        var t;
                        return (
                          (t = []),
                          this.blockList.eachObject(function (e) {
                            return t.push(
                              e.copyWithText(e.text.toSerializableText())
                            );
                          }),
                          new this.constructor(t)
                        );
                      }),
                      (c.prototype.toString = function () {
                        return this.blockList.toString();
                      }),
                      (c.prototype.toJSON = function () {
                        return this.blockList.toJSON();
                      }),
                      (c.prototype.toConsole = function () {
                        var t;
                        return JSON.stringify(
                          function () {
                            var e, n, r, i;
                            for (
                              i = [],
                                e = 0,
                                n = (r = this.blockList.toArray()).length;
                              n > e;
                              e++
                            )
                              (t = r[e]),
                                i.push(JSON.parse(t.text.toConsole()));
                            return i;
                          }.call(this)
                        );
                      }),
                      c
                    );
                  })(t.Object));
              }.call(this),
              function () {
                t.LineBreakInsertion = (function () {
                  function t(t) {
                    var e;
                    (this.composition = t),
                      (this.document = this.composition.document),
                      (e = this.composition.getSelectedRange()),
                      (this.startPosition = e[0]),
                      (this.endPosition = e[1]),
                      (this.startLocation = this.document.locationFromPosition(
                        this.startPosition
                      )),
                      (this.endLocation = this.document.locationFromPosition(
                        this.endPosition
                      )),
                      (this.block = this.document.getBlockAtIndex(
                        this.endLocation.index
                      )),
                      (this.breaksOnReturn = this.block.breaksOnReturn()),
                      (this.previousCharacter = this.block.text.getStringAtPosition(
                        this.endLocation.offset - 1
                      )),
                      (this.nextCharacter = this.block.text.getStringAtPosition(
                        this.endLocation.offset
                      ));
                  }
                  return (
                    (t.prototype.shouldInsertBlockBreak = function () {
                      return this.block.hasAttributes() &&
                        this.block.isListItem() &&
                        !this.block.isEmpty()
                        ? 0 !== this.startLocation.offset
                        : this.breaksOnReturn && "\n" !== this.nextCharacter;
                    }),
                    (t.prototype.shouldBreakFormattedBlock = function () {
                      return (
                        this.block.hasAttributes() &&
                        !this.block.isListItem() &&
                        ((this.breaksOnReturn && "\n" === this.nextCharacter) ||
                          "\n" === this.previousCharacter)
                      );
                    }),
                    (t.prototype.shouldDecreaseListLevel = function () {
                      return (
                        this.block.hasAttributes() &&
                        this.block.isListItem() &&
                        this.block.isEmpty()
                      );
                    }),
                    (t.prototype.shouldPrependListItem = function () {
                      return (
                        this.block.isListItem() &&
                        0 === this.startLocation.offset &&
                        !this.block.isEmpty()
                      );
                    }),
                    (t.prototype.shouldRemoveLastBlockAttribute = function () {
                      return (
                        this.block.hasAttributes() &&
                        !this.block.isListItem() &&
                        this.block.isEmpty()
                      );
                    }),
                    t
                  );
                })();
              }.call(this),
              function () {
                var e,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  c,
                  l,
                  h = function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    for (var r in e) d.call(e, r) && (t[r] = e[r]);
                    return (
                      (n.prototype = e.prototype),
                      (t.prototype = new n()),
                      (t.__super__ = e.prototype),
                      t
                    );
                  },
                  d = {}.hasOwnProperty;
                (a = t.normalizeRange),
                  (c = t.rangesAreEqual),
                  (u = t.rangeIsCollapsed),
                  (s = t.objectsAreEqual),
                  (e = t.arrayStartsWith),
                  (l = t.summarizeArrayChange),
                  (r = t.getAllAttributeNames),
                  (i = t.getBlockConfig),
                  (o = t.getTextConfig),
                  (n = t.extend),
                  (t.Composition = (function (d) {
                    function p() {
                      (this.document = new t.Document()),
                        (this.attachments = []),
                        (this.currentAttributes = {}),
                        (this.revision = 0);
                    }
                    return (
                      h(p, d),
                      (p.prototype.setDocument = function (t) {
                        var e;
                        return t.isEqualTo(this.document)
                          ? void 0
                          : ((this.document = t),
                            this.refreshAttachments(),
                            this.revision++,
                            null != (e = this.delegate) &&
                            "function" == typeof e.compositionDidChangeDocument
                              ? e.compositionDidChangeDocument(t)
                              : void 0);
                      }),
                      (p.prototype.getSnapshot = function () {
                        return {
                          document: this.document,
                          selectedRange: this.getSelectedRange(),
                        };
                      }),
                      (p.prototype.loadSnapshot = function (e) {
                        var n, r, i, o;
                        return (
                          (n = e.document),
                          (o = e.selectedRange),
                          null != (r = this.delegate) &&
                            "function" ==
                              typeof r.compositionWillLoadSnapshot &&
                            r.compositionWillLoadSnapshot(),
                          this.setDocument(null != n ? n : new t.Document()),
                          this.setSelection(null != o ? o : [0, 0]),
                          null != (i = this.delegate) &&
                          "function" == typeof i.compositionDidLoadSnapshot
                            ? i.compositionDidLoadSnapshot()
                            : void 0
                        );
                      }),
                      (p.prototype.insertText = function (t, e) {
                        var n, r, i, o;
                        return (
                          (o = (null != e ? e : { updatePosition: !0 })
                            .updatePosition),
                          (r = this.getSelectedRange()),
                          this.setDocument(
                            this.document.insertTextAtRange(t, r)
                          ),
                          (n = (i = r[0]) + t.getLength()),
                          o && this.setSelection(n),
                          this.notifyDelegateOfInsertionAtRange([i, n])
                        );
                      }),
                      (p.prototype.insertBlock = function (e) {
                        var n;
                        return (
                          null == e && (e = new t.Block()),
                          (n = new t.Document([e])),
                          this.insertDocument(n)
                        );
                      }),
                      (p.prototype.insertDocument = function (e) {
                        var n, r, i;
                        return (
                          null == e && (e = new t.Document()),
                          (r = this.getSelectedRange()),
                          this.setDocument(
                            this.document.insertDocumentAtRange(e, r)
                          ),
                          (n = (i = r[0]) + e.getLength()),
                          this.setSelection(n),
                          this.notifyDelegateOfInsertionAtRange([i, n])
                        );
                      }),
                      (p.prototype.insertString = function (e, n) {
                        var r, i;
                        return (
                          (r = this.getCurrentTextAttributes()),
                          (i = t.Text.textForStringWithAttributes(e, r)),
                          this.insertText(i, n)
                        );
                      }),
                      (p.prototype.insertBlockBreak = function () {
                        var t, e, n;
                        return (
                          (e = this.getSelectedRange()),
                          this.setDocument(
                            this.document.insertBlockBreakAtRange(e)
                          ),
                          (t = (n = e[0]) + 1),
                          this.setSelection(t),
                          this.notifyDelegateOfInsertionAtRange([n, t])
                        );
                      }),
                      (p.prototype.insertLineBreak = function () {
                        var e, n;
                        return (n = new t.LineBreakInsertion(
                          this
                        )).shouldDecreaseListLevel()
                          ? (this.decreaseListLevel(),
                            this.setSelection(n.startPosition))
                          : n.shouldPrependListItem()
                          ? ((e = new t.Document([n.block.copyWithoutText()])),
                            this.insertDocument(e))
                          : n.shouldInsertBlockBreak()
                          ? this.insertBlockBreak()
                          : n.shouldRemoveLastBlockAttribute()
                          ? this.removeLastBlockAttribute()
                          : n.shouldBreakFormattedBlock()
                          ? this.breakFormattedBlock(n)
                          : this.insertString("\n");
                      }),
                      (p.prototype.insertHTML = function (e) {
                        var n, r, i, o;
                        return (
                          (n = t.Document.fromHTML(e)),
                          (i = this.getSelectedRange()),
                          this.setDocument(
                            this.document.mergeDocumentAtRange(n, i)
                          ),
                          (r = (o = i[0]) + n.getLength() - 1),
                          this.setSelection(r),
                          this.notifyDelegateOfInsertionAtRange([o, r])
                        );
                      }),
                      (p.prototype.replaceHTML = function (e) {
                        var n, r, i;
                        return (
                          (n = t.Document.fromHTML(
                            e
                          ).copyUsingObjectsFromDocument(this.document)),
                          (r = this.getLocationRange({ strict: !1 })),
                          (i = this.document.rangeFromLocationRange(r)),
                          this.setDocument(n),
                          this.setSelection(i)
                        );
                      }),
                      (p.prototype.insertFile = function (t) {
                        return this.insertFiles([t]);
                      }),
                      (p.prototype.insertFiles = function (e) {
                        var n, r, i, o, a, s;
                        for (r = [], o = 0, a = e.length; a > o; o++)
                          (i = e[o]),
                            (null != (s = this.delegate)
                              ? s.compositionShouldAcceptFile(i)
                              : void 0) &&
                              ((n = t.Attachment.attachmentForFile(i)),
                              r.push(n));
                        return this.insertAttachments(r);
                      }),
                      (p.prototype.insertAttachment = function (t) {
                        return this.insertAttachments([t]);
                      }),
                      (p.prototype.insertAttachments = function (e) {
                        var n, r, i, o, a, s, u, c, l;
                        for (c = new t.Text(), o = 0, a = e.length; a > o; o++)
                          (l = (n = e[o]).getType()),
                            (s =
                              null != (u = t.config.attachments[l])
                                ? u.presentation
                                : void 0),
                            (i = this.getCurrentTextAttributes()),
                            s && (i.presentation = s),
                            (r = t.Text.textForAttachmentWithAttributes(n, i)),
                            (c = c.appendText(r));
                        return this.insertText(c);
                      }),
                      (p.prototype.shouldManageDeletingInDirection = function (
                        t
                      ) {
                        var e;
                        if (((e = this.getLocationRange()), u(e))) {
                          if ("backward" === t && 0 === e[0].offset) return !0;
                          if (this.shouldManageMovingCursorInDirection(t))
                            return !0;
                        } else if (e[0].index !== e[1].index) return !0;
                        return !1;
                      }),
                      (p.prototype.deleteInDirection = function (t, e) {
                        var n, r, i, o, a, s, c, l;
                        return (
                          (o = (null != e ? e : {}).length),
                          (a = this.getLocationRange()),
                          (s = this.getSelectedRange()),
                          (c = u(s))
                            ? (i = "backward" === t && 0 === a[0].offset)
                            : (l = a[0].index !== a[1].index),
                          !(
                            i &&
                            this.canDecreaseBlockAttributeLevel() &&
                            ((r = this.getBlock()),
                            r.isListItem()
                              ? this.decreaseListLevel()
                              : this.decreaseBlockAttributeLevel(),
                            this.setSelection(s[0]),
                            r.isEmpty())
                          ) &&
                            (c &&
                              ((s = this.getExpandedRangeInDirection(t, {
                                length: o,
                              })),
                              "backward" === t &&
                                (n = this.getAttachmentAtRange(s))),
                            n
                              ? (this.editAttachment(n), !1)
                              : (this.setDocument(
                                  this.document.removeTextAtRange(s)
                                ),
                                this.setSelection(s[0]),
                                !i && !l && void 0))
                        );
                      }),
                      (p.prototype.moveTextFromRange = function (t) {
                        var e;
                        return (
                          (e = this.getSelectedRange()[0]),
                          this.setDocument(
                            this.document.moveTextFromRangeToPosition(t, e)
                          ),
                          this.setSelection(e)
                        );
                      }),
                      (p.prototype.removeAttachment = function (t) {
                        var e;
                        return (e = this.document.getRangeOfAttachment(t))
                          ? (this.stopEditingAttachment(),
                            this.setDocument(
                              this.document.removeTextAtRange(e)
                            ),
                            this.setSelection(e[0]))
                          : void 0;
                      }),
                      (p.prototype.removeLastBlockAttribute = function () {
                        var t, e, n, r;
                        return (
                          (r = (n = this.getSelectedRange())[0]),
                          (e = n[1]),
                          (t = this.document.getBlockAtPosition(e)),
                          this.removeCurrentAttribute(t.getLastAttribute()),
                          this.setSelection(r)
                        );
                      }),
                      " ",
                      (p.prototype.insertPlaceholder = function () {
                        return (
                          (this.placeholderPosition = this.getPosition()),
                          this.insertString(" ")
                        );
                      }),
                      (p.prototype.selectPlaceholder = function () {
                        return null != this.placeholderPosition
                          ? (this.setSelectedRange([
                              this.placeholderPosition,
                              this.placeholderPosition + " ".length,
                            ]),
                            this.getSelectedRange())
                          : void 0;
                      }),
                      (p.prototype.forgetPlaceholder = function () {
                        return (this.placeholderPosition = null);
                      }),
                      (p.prototype.hasCurrentAttribute = function (t) {
                        var e;
                        return (
                          null != (e = this.currentAttributes[t]) && !1 !== e
                        );
                      }),
                      (p.prototype.toggleCurrentAttribute = function (t) {
                        var e;
                        return (e = !this.currentAttributes[t])
                          ? this.setCurrentAttribute(t, e)
                          : this.removeCurrentAttribute(t);
                      }),
                      (p.prototype.canSetCurrentAttribute = function (t) {
                        return i(t)
                          ? this.canSetCurrentBlockAttribute(t)
                          : this.canSetCurrentTextAttribute(t);
                      }),
                      (p.prototype.canSetCurrentTextAttribute = function () {
                        var t, e, n, r;
                        if ((t = this.getSelectedDocument())) {
                          for (
                            e = 0, n = (r = t.getAttachments()).length;
                            n > e;
                            e++
                          )
                            if (!r[e].hasContent()) return !1;
                          return !0;
                        }
                      }),
                      (p.prototype.canSetCurrentBlockAttribute = function () {
                        var t;
                        if ((t = this.getBlock())) return !t.isTerminalBlock();
                      }),
                      (p.prototype.setCurrentAttribute = function (t, e) {
                        return i(t)
                          ? this.setBlockAttribute(t, e)
                          : (this.setTextAttribute(t, e),
                            (this.currentAttributes[t] = e),
                            this.notifyDelegateOfCurrentAttributesChange());
                      }),
                      (p.prototype.setTextAttribute = function (e, n) {
                        var r, i;
                        if ((r = this.getSelectedRange()))
                          return r[0] !== r[1]
                            ? this.setDocument(
                                this.document.addAttributeAtRange(e, n, r)
                              )
                            : "href" === e
                            ? ((i = t.Text.textForStringWithAttributes(n, {
                                href: n,
                              })),
                              this.insertText(i))
                            : void 0;
                      }),
                      (p.prototype.setBlockAttribute = function (t, e) {
                        var n;
                        if ((n = this.getSelectedRange()))
                          return this.canSetCurrentAttribute(t)
                            ? (this.getBlock(),
                              this.setDocument(
                                this.document.applyBlockAttributeAtRange(
                                  t,
                                  e,
                                  n
                                )
                              ),
                              this.setSelection(n))
                            : void 0;
                      }),
                      (p.prototype.removeCurrentAttribute = function (t) {
                        return i(t)
                          ? (this.removeBlockAttribute(t),
                            this.updateCurrentAttributes())
                          : (this.removeTextAttribute(t),
                            delete this.currentAttributes[t],
                            this.notifyDelegateOfCurrentAttributesChange());
                      }),
                      (p.prototype.removeTextAttribute = function (t) {
                        var e;
                        if ((e = this.getSelectedRange()))
                          return this.setDocument(
                            this.document.removeAttributeAtRange(t, e)
                          );
                      }),
                      (p.prototype.removeBlockAttribute = function (t) {
                        var e;
                        if ((e = this.getSelectedRange()))
                          return this.setDocument(
                            this.document.removeAttributeAtRange(t, e)
                          );
                      }),
                      (p.prototype.canDecreaseNestingLevel = function () {
                        var t;
                        return (
                          (null != (t = this.getBlock())
                            ? t.getNestingLevel()
                            : void 0) > 0
                        );
                      }),
                      (p.prototype.canIncreaseNestingLevel = function () {
                        var t, n, r;
                        if ((t = this.getBlock()))
                          return null !=
                            (r = i(t.getLastNestableAttribute())) &&
                            r.listAttribute
                            ? (n = this.getPreviousBlock())
                              ? e(
                                  n.getListItemAttributes(),
                                  t.getListItemAttributes()
                                )
                              : void 0
                            : t.getNestingLevel() > 0;
                      }),
                      (p.prototype.decreaseNestingLevel = function () {
                        var t;
                        if ((t = this.getBlock()))
                          return this.setDocument(
                            this.document.replaceBlock(
                              t,
                              t.decreaseNestingLevel()
                            )
                          );
                      }),
                      (p.prototype.increaseNestingLevel = function () {
                        var t;
                        if ((t = this.getBlock()))
                          return this.setDocument(
                            this.document.replaceBlock(
                              t,
                              t.increaseNestingLevel()
                            )
                          );
                      }),
                      (p.prototype.canDecreaseBlockAttributeLevel = function () {
                        var t;
                        return (
                          (null != (t = this.getBlock())
                            ? t.getAttributeLevel()
                            : void 0) > 0
                        );
                      }),
                      (p.prototype.decreaseBlockAttributeLevel = function () {
                        var t, e;
                        return (t =
                          null != (e = this.getBlock())
                            ? e.getLastAttribute()
                            : void 0)
                          ? this.removeCurrentAttribute(t)
                          : void 0;
                      }),
                      (p.prototype.decreaseListLevel = function () {
                        var t, e, n, r, i, o;
                        for (
                          o = this.getSelectedRange()[0],
                            n = i = this.document.locationFromPosition(o).index,
                            t = this.getBlock().getAttributeLevel();
                          (e = this.document.getBlockAtIndex(n + 1)) &&
                          e.isListItem() &&
                          e.getAttributeLevel() > t;

                        )
                          n++;
                        return (
                          (o = this.document.positionFromLocation({
                            index: i,
                            offset: 0,
                          })),
                          (r = this.document.positionFromLocation({
                            index: n,
                            offset: 0,
                          })),
                          this.setDocument(
                            this.document.removeLastListAttributeAtRange([o, r])
                          )
                        );
                      }),
                      (p.prototype.updateCurrentAttributes = function () {
                        var t, e, n, i, o, a;
                        if ((a = this.getSelectedRange({ ignoreLock: !0 }))) {
                          for (
                            e = this.document.getCommonAttributesAtRange(a),
                              n = 0,
                              i = (o = r()).length;
                            i > n;
                            n++
                          )
                            e[(t = o[n])] ||
                              this.canSetCurrentAttribute(t) ||
                              (e[t] = !1);
                          if (!s(e, this.currentAttributes))
                            return (
                              (this.currentAttributes = e),
                              this.notifyDelegateOfCurrentAttributesChange()
                            );
                        }
                      }),
                      (p.prototype.getCurrentAttributes = function () {
                        return n.call({}, this.currentAttributes);
                      }),
                      (p.prototype.getCurrentTextAttributes = function () {
                        var t, e, n, r;
                        for (e in ((t = {}), (n = this.currentAttributes)))
                          !1 !== (r = n[e]) && o(e) && (t[e] = r);
                        return t;
                      }),
                      (p.prototype.freezeSelection = function () {
                        return this.setCurrentAttribute("frozen", !0);
                      }),
                      (p.prototype.thawSelection = function () {
                        return this.removeCurrentAttribute("frozen");
                      }),
                      (p.prototype.hasFrozenSelection = function () {
                        return this.hasCurrentAttribute("frozen");
                      }),
                      p.proxyMethod("getSelectionManager().getPointRange"),
                      p.proxyMethod(
                        "getSelectionManager().setLocationRangeFromPointRange"
                      ),
                      p.proxyMethod(
                        "getSelectionManager().createLocationRangeFromDOMRange"
                      ),
                      p.proxyMethod(
                        "getSelectionManager().locationIsCursorTarget"
                      ),
                      p.proxyMethod(
                        "getSelectionManager().selectionIsExpanded"
                      ),
                      p.proxyMethod("delegate?.getSelectionManager"),
                      (p.prototype.setSelection = function (t) {
                        var e, n;
                        return (
                          (e = this.document.locationRangeFromRange(t)),
                          null != (n = this.delegate)
                            ? n.compositionDidRequestChangingSelectionToLocationRange(
                                e
                              )
                            : void 0
                        );
                      }),
                      (p.prototype.getSelectedRange = function () {
                        var t;
                        return (t = this.getLocationRange())
                          ? this.document.rangeFromLocationRange(t)
                          : void 0;
                      }),
                      (p.prototype.setSelectedRange = function (t) {
                        var e;
                        return (
                          (e = this.document.locationRangeFromRange(t)),
                          this.getSelectionManager().setLocationRange(e)
                        );
                      }),
                      (p.prototype.getPosition = function () {
                        var t;
                        return (t = this.getLocationRange())
                          ? this.document.positionFromLocation(t[0])
                          : void 0;
                      }),
                      (p.prototype.getLocationRange = function (t) {
                        var e, n;
                        return null !=
                          (e =
                            null != (n = this.targetLocationRange)
                              ? n
                              : this.getSelectionManager().getLocationRange(t))
                          ? e
                          : a({ index: 0, offset: 0 });
                      }),
                      (p.prototype.withTargetLocationRange = function (t, e) {
                        var n;
                        this.targetLocationRange = t;
                        try {
                          n = e();
                        } finally {
                          this.targetLocationRange = null;
                        }
                        return n;
                      }),
                      (p.prototype.withTargetRange = function (t, e) {
                        var n;
                        return (
                          (n = this.document.locationRangeFromRange(t)),
                          this.withTargetLocationRange(n, e)
                        );
                      }),
                      (p.prototype.withTargetDOMRange = function (t, e) {
                        var n;
                        return (
                          (n = this.createLocationRangeFromDOMRange(t, {
                            strict: !1,
                          })),
                          this.withTargetLocationRange(n, e)
                        );
                      }),
                      (p.prototype.getExpandedRangeInDirection = function (
                        t,
                        e
                      ) {
                        var n, r, i, o;
                        return (
                          (r = (null != e ? e : {}).length),
                          (o = (i = this.getSelectedRange())[0]),
                          (n = i[1]),
                          "backward" === t
                            ? r
                              ? (o -= r)
                              : (o = this.translateUTF16PositionFromOffset(
                                  o,
                                  -1
                                ))
                            : r
                            ? (n += r)
                            : (n = this.translateUTF16PositionFromOffset(n, 1)),
                          a([o, n])
                        );
                      }),
                      (p.prototype.shouldManageMovingCursorInDirection = function (
                        t
                      ) {
                        var e;
                        return (
                          !!this.editingAttachment ||
                          ((e = this.getExpandedRangeInDirection(t)),
                          null != this.getAttachmentAtRange(e))
                        );
                      }),
                      (p.prototype.moveCursorInDirection = function (t) {
                        var e, n, r, i;
                        return (
                          this.editingAttachment
                            ? (r = this.document.getRangeOfAttachment(
                                this.editingAttachment
                              ))
                            : ((i = this.getSelectedRange()),
                              (r = this.getExpandedRangeInDirection(t)),
                              (n = !c(i, r))),
                          this.setSelectedRange("backward" === t ? r[0] : r[1]),
                          n && (e = this.getAttachmentAtRange(r))
                            ? this.editAttachment(e)
                            : void 0
                        );
                      }),
                      (p.prototype.expandSelectionInDirection = function (
                        t,
                        e
                      ) {
                        var n, r;
                        return (
                          (n = (null != e ? e : {}).length),
                          (r = this.getExpandedRangeInDirection(t, {
                            length: n,
                          })),
                          this.setSelectedRange(r)
                        );
                      }),
                      (p.prototype.expandSelectionForEditing = function () {
                        return this.hasCurrentAttribute("href")
                          ? this.expandSelectionAroundCommonAttribute("href")
                          : void 0;
                      }),
                      (p.prototype.expandSelectionAroundCommonAttribute = function (
                        t
                      ) {
                        var e, n;
                        return (
                          (e = this.getPosition()),
                          (n = this.document.getRangeOfCommonAttributeAtPosition(
                            t,
                            e
                          )),
                          this.setSelectedRange(n)
                        );
                      }),
                      (p.prototype.selectionContainsAttachments = function () {
                        var t;
                        return (
                          (null != (t = this.getSelectedAttachments())
                            ? t.length
                            : void 0) > 0
                        );
                      }),
                      (p.prototype.selectionIsInCursorTarget = function () {
                        return (
                          this.editingAttachment ||
                          this.positionIsCursorTarget(this.getPosition())
                        );
                      }),
                      (p.prototype.positionIsCursorTarget = function (t) {
                        var e;
                        return (e = this.document.locationFromPosition(t))
                          ? this.locationIsCursorTarget(e)
                          : void 0;
                      }),
                      (p.prototype.positionIsBlockBreak = function (t) {
                        var e;
                        return null != (e = this.document.getPieceAtPosition(t))
                          ? e.isBlockBreak()
                          : void 0;
                      }),
                      (p.prototype.getSelectedDocument = function () {
                        var t;
                        return (t = this.getSelectedRange())
                          ? this.document.getDocumentAtRange(t)
                          : void 0;
                      }),
                      (p.prototype.getSelectedAttachments = function () {
                        var t;
                        return null != (t = this.getSelectedDocument())
                          ? t.getAttachments()
                          : void 0;
                      }),
                      (p.prototype.getAttachments = function () {
                        return this.attachments.slice(0);
                      }),
                      (p.prototype.refreshAttachments = function () {
                        var t, e, n, r, i, o, a, s, u, c, h, d;
                        for (
                          n = this.document.getAttachments(),
                            t = (s = l(this.attachments, n)).added,
                            h = s.removed,
                            this.attachments = n,
                            r = 0,
                            o = h.length;
                          o > r;
                          r++
                        )
                          ((e = h[r]).delegate = null),
                            null != (u = this.delegate) &&
                              "function" ==
                                typeof u.compositionDidRemoveAttachment &&
                              u.compositionDidRemoveAttachment(e);
                        for (d = [], i = 0, a = t.length; a > i; i++)
                          ((e = t[i]).delegate = this),
                            d.push(
                              null != (c = this.delegate) &&
                                "function" ==
                                  typeof c.compositionDidAddAttachment
                                ? c.compositionDidAddAttachment(e)
                                : void 0
                            );
                        return d;
                      }),
                      (p.prototype.attachmentDidChangeAttributes = function (
                        t
                      ) {
                        var e;
                        return (
                          this.revision++,
                          null != (e = this.delegate) &&
                          "function" == typeof e.compositionDidEditAttachment
                            ? e.compositionDidEditAttachment(t)
                            : void 0
                        );
                      }),
                      (p.prototype.attachmentDidChangePreviewURL = function (
                        t
                      ) {
                        var e;
                        return (
                          this.revision++,
                          null != (e = this.delegate) &&
                          "function" ==
                            typeof e.compositionDidChangeAttachmentPreviewURL
                            ? e.compositionDidChangeAttachmentPreviewURL(t)
                            : void 0
                        );
                      }),
                      (p.prototype.editAttachment = function (t, e) {
                        var n;
                        if (t !== this.editingAttachment)
                          return (
                            this.stopEditingAttachment(),
                            (this.editingAttachment = t),
                            null != (n = this.delegate) &&
                            "function" ==
                              typeof n.compositionDidStartEditingAttachment
                              ? n.compositionDidStartEditingAttachment(
                                  this.editingAttachment,
                                  e
                                )
                              : void 0
                          );
                      }),
                      (p.prototype.stopEditingAttachment = function () {
                        var t;
                        if (this.editingAttachment)
                          return (
                            null != (t = this.delegate) &&
                              "function" ==
                                typeof t.compositionDidStopEditingAttachment &&
                              t.compositionDidStopEditingAttachment(
                                this.editingAttachment
                              ),
                            (this.editingAttachment = null)
                          );
                      }),
                      (p.prototype.updateAttributesForAttachment = function (
                        t,
                        e
                      ) {
                        return this.setDocument(
                          this.document.updateAttributesForAttachment(t, e)
                        );
                      }),
                      (p.prototype.removeAttributeForAttachment = function (
                        t,
                        e
                      ) {
                        return this.setDocument(
                          this.document.removeAttributeForAttachment(t, e)
                        );
                      }),
                      (p.prototype.breakFormattedBlock = function (e) {
                        var n, r, i, o, a;
                        return (
                          (r = e.document),
                          (n = e.block),
                          (a = [(o = e.startPosition) - 1, o]),
                          n.getBlockBreakPosition() === e.startLocation.offset
                            ? (n.breaksOnReturn() && "\n" === e.nextCharacter
                                ? (o += 1)
                                : (r = r.removeTextAtRange(a)),
                              (a = [o, o]))
                            : "\n" === e.nextCharacter
                            ? "\n" === e.previousCharacter
                              ? (a = [o - 1, o + 1])
                              : ((a = [o, o + 1]), (o += 1))
                            : e.startLocation.offset - 1 != 0 && (o += 1),
                          (i = new t.Document([
                            n.removeLastAttribute().copyWithoutText(),
                          ])),
                          this.setDocument(r.insertDocumentAtRange(i, a)),
                          this.setSelection(o)
                        );
                      }),
                      (p.prototype.getPreviousBlock = function () {
                        var t, e;
                        return (e = this.getLocationRange()) &&
                          (t = e[0].index) > 0
                          ? this.document.getBlockAtIndex(t - 1)
                          : void 0;
                      }),
                      (p.prototype.getBlock = function () {
                        var t;
                        return (t = this.getLocationRange())
                          ? this.document.getBlockAtIndex(t[0].index)
                          : void 0;
                      }),
                      (p.prototype.getAttachmentAtRange = function (e) {
                        var n;
                        return (n = this.document.getDocumentAtRange(
                          e
                        )).toString() ===
                          t.OBJECT_REPLACEMENT_CHARACTER + "\n"
                          ? n.getAttachments()[0]
                          : void 0;
                      }),
                      (p.prototype.notifyDelegateOfCurrentAttributesChange = function () {
                        var t;
                        return null != (t = this.delegate) &&
                          "function" ==
                            typeof t.compositionDidChangeCurrentAttributes
                          ? t.compositionDidChangeCurrentAttributes(
                              this.currentAttributes
                            )
                          : void 0;
                      }),
                      (p.prototype.notifyDelegateOfInsertionAtRange = function (
                        t
                      ) {
                        var e;
                        return null != (e = this.delegate) &&
                          "function" ==
                            typeof e.compositionDidPerformInsertionAtRange
                          ? e.compositionDidPerformInsertionAtRange(t)
                          : void 0;
                      }),
                      (p.prototype.translateUTF16PositionFromOffset = function (
                        t,
                        e
                      ) {
                        var n, r;
                        return (
                          (n = (r = this.document.toUTF16String()).offsetFromUCS2Offset(
                            t
                          )),
                          r.offsetToUCS2Offset(n + e)
                        );
                      }),
                      p
                    );
                  })(t.BasicObject));
              }.call(this),
              function () {
                var e = function (t, e) {
                    function r() {
                      this.constructor = t;
                    }
                    for (var i in e) n.call(e, i) && (t[i] = e[i]);
                    return (
                      (r.prototype = e.prototype),
                      (t.prototype = new r()),
                      (t.__super__ = e.prototype),
                      t
                    );
                  },
                  n = {}.hasOwnProperty;
                t.UndoManager = (function (t) {
                  function n(t) {
                    (this.composition = t),
                      (this.undoEntries = []),
                      (this.redoEntries = []);
                  }
                  var r;
                  return (
                    e(n, t),
                    (n.prototype.recordUndoEntry = function (t, e) {
                      var n, i, o, a, s;
                      return (
                        (i = (a = null != e ? e : {}).context),
                        (n = a.consolidatable),
                        (o = this.undoEntries.slice(-1)[0]),
                        n && r(o, t, i)
                          ? void 0
                          : ((s = this.createEntry({
                              description: t,
                              context: i,
                            })),
                            this.undoEntries.push(s),
                            (this.redoEntries = []))
                      );
                    }),
                    (n.prototype.undo = function () {
                      var t, e;
                      return (e = this.undoEntries.pop())
                        ? ((t = this.createEntry(e)),
                          this.redoEntries.push(t),
                          this.composition.loadSnapshot(e.snapshot))
                        : void 0;
                    }),
                    (n.prototype.redo = function () {
                      var t, e;
                      return (t = this.redoEntries.pop())
                        ? ((e = this.createEntry(t)),
                          this.undoEntries.push(e),
                          this.composition.loadSnapshot(t.snapshot))
                        : void 0;
                    }),
                    (n.prototype.canUndo = function () {
                      return this.undoEntries.length > 0;
                    }),
                    (n.prototype.canRedo = function () {
                      return this.redoEntries.length > 0;
                    }),
                    (n.prototype.createEntry = function (t) {
                      var e, n, r;
                      return (
                        (n = (r = null != t ? t : {}).description),
                        (e = r.context),
                        {
                          description: null != n ? n.toString() : void 0,
                          context: JSON.stringify(e),
                          snapshot: this.composition.getSnapshot(),
                        }
                      );
                    }),
                    (r = function (t, e, n) {
                      return (
                        (null != t ? t.description : void 0) ===
                          (null != e ? e.toString() : void 0) &&
                        (null != t ? t.context : void 0) === JSON.stringify(n)
                      );
                    }),
                    n
                  );
                })(t.BasicObject);
              }.call(this),
              function () {
                var e;
                (t.attachmentGalleryFilter = function (t) {
                  var n;
                  return (n = new e(t)).perform(), n.getSnapshot();
                }),
                  (e = (function () {
                    function t(t) {
                      (this.document = t.document),
                        (this.selectedRange = t.selectedRange);
                    }
                    var e;
                    return (
                      (e = "attachmentGallery"),
                      "presentation",
                      "gallery",
                      (t.prototype.perform = function () {
                        return (
                          this.removeBlockAttribute(),
                          this.applyBlockAttribute()
                        );
                      }),
                      (t.prototype.getSnapshot = function () {
                        return {
                          document: this.document,
                          selectedRange: this.selectedRange,
                        };
                      }),
                      (t.prototype.removeBlockAttribute = function () {
                        var t, n, r, i, o;
                        for (
                          o = [],
                            t = 0,
                            n = (i = this.findRangesOfBlocks()).length;
                          n > t;
                          t++
                        )
                          (r = i[t]),
                            o.push(
                              (this.document = this.document.removeAttributeAtRange(
                                e,
                                r
                              ))
                            );
                        return o;
                      }),
                      (t.prototype.applyBlockAttribute = function () {
                        var t, n, r, i, o, a;
                        for (
                          r = 0,
                            a = [],
                            t = 0,
                            n = (o = this.findRangesOfPieces()).length;
                          n > t;
                          t++
                        )
                          (i = o[t])[1] - i[0] > 1 &&
                            ((i[0] += r),
                            (i[1] += r),
                            "\n" !==
                              this.document.getCharacterAtPosition(i[1]) &&
                              ((this.document = this.document.insertBlockBreakAtRange(
                                i[1]
                              )),
                              i[1] < this.selectedRange[1] &&
                                this.moveSelectedRangeForward(),
                              i[1]++,
                              r++),
                            0 !== i[0] &&
                              "\n" !==
                                this.document.getCharacterAtPosition(
                                  i[0] - 1
                                ) &&
                              ((this.document = this.document.insertBlockBreakAtRange(
                                i[0]
                              )),
                              i[0] < this.selectedRange[0] &&
                                this.moveSelectedRangeForward(),
                              i[0]++,
                              r++),
                            a.push(
                              (this.document = this.document.applyBlockAttributeAtRange(
                                e,
                                !0,
                                i
                              ))
                            ));
                        return a;
                      }),
                      (t.prototype.findRangesOfBlocks = function () {
                        return this.document.findRangesForBlockAttribute(e);
                      }),
                      (t.prototype.findRangesOfPieces = function () {
                        return this.document.findRangesForTextAttribute(
                          "presentation",
                          { withValue: "gallery" }
                        );
                      }),
                      (t.prototype.moveSelectedRangeForward = function () {
                        return (
                          (this.selectedRange[0] += 1),
                          (this.selectedRange[1] += 1)
                        );
                      }),
                      t
                    );
                  })());
              }.call(this),
              function () {
                var e = function (t, e) {
                  return function () {
                    return t.apply(e, arguments);
                  };
                };
                t.Editor = (function () {
                  function n(n, i, o) {
                    (this.composition = n),
                      (this.selectionManager = i),
                      (this.element = o),
                      (this.insertFiles = e(this.insertFiles, this)),
                      (this.undoManager = new t.UndoManager(this.composition)),
                      (this.filters = r.slice(0));
                  }
                  var r;
                  return (
                    (r = [t.attachmentGalleryFilter]),
                    (n.prototype.loadDocument = function (t) {
                      return this.loadSnapshot({
                        document: t,
                        selectedRange: [0, 0],
                      });
                    }),
                    (n.prototype.loadHTML = function (e) {
                      return (
                        null == e && (e = ""),
                        this.loadDocument(
                          t.Document.fromHTML(e, {
                            referenceElement: this.element,
                          })
                        )
                      );
                    }),
                    (n.prototype.loadJSON = function (e) {
                      var n, r;
                      return (
                        (n = e.document),
                        (r = e.selectedRange),
                        (n = t.Document.fromJSON(n)),
                        this.loadSnapshot({ document: n, selectedRange: r })
                      );
                    }),
                    (n.prototype.loadSnapshot = function (e) {
                      return (
                        (this.undoManager = new t.UndoManager(
                          this.composition
                        )),
                        this.composition.loadSnapshot(e)
                      );
                    }),
                    (n.prototype.getDocument = function () {
                      return this.composition.document;
                    }),
                    (n.prototype.getSelectedDocument = function () {
                      return this.composition.getSelectedDocument();
                    }),
                    (n.prototype.getSnapshot = function () {
                      return this.composition.getSnapshot();
                    }),
                    (n.prototype.toJSON = function () {
                      return this.getSnapshot();
                    }),
                    (n.prototype.deleteInDirection = function (t) {
                      return this.composition.deleteInDirection(t);
                    }),
                    (n.prototype.insertAttachment = function (t) {
                      return this.composition.insertAttachment(t);
                    }),
                    (n.prototype.insertAttachments = function (t) {
                      return this.composition.insertAttachments(t);
                    }),
                    (n.prototype.insertDocument = function (t) {
                      return this.composition.insertDocument(t);
                    }),
                    (n.prototype.insertFile = function (t) {
                      return this.composition.insertFile(t);
                    }),
                    (n.prototype.insertFiles = function (t) {
                      return this.composition.insertFiles(t);
                    }),
                    (n.prototype.insertHTML = function (t) {
                      return this.composition.insertHTML(t);
                    }),
                    (n.prototype.insertString = function (t) {
                      return this.composition.insertString(t);
                    }),
                    (n.prototype.insertText = function (t) {
                      return this.composition.insertText(t);
                    }),
                    (n.prototype.insertLineBreak = function () {
                      return this.composition.insertLineBreak();
                    }),
                    (n.prototype.getSelectedRange = function () {
                      return this.composition.getSelectedRange();
                    }),
                    (n.prototype.getPosition = function () {
                      return this.composition.getPosition();
                    }),
                    (n.prototype.getClientRectAtPosition = function (t) {
                      var e;
                      return (
                        (e = this.getDocument().locationRangeFromRange([
                          t,
                          t + 1,
                        ])),
                        this.selectionManager.getClientRectAtLocationRange(e)
                      );
                    }),
                    (n.prototype.expandSelectionInDirection = function (t) {
                      return this.composition.expandSelectionInDirection(t);
                    }),
                    (n.prototype.moveCursorInDirection = function (t) {
                      return this.composition.moveCursorInDirection(t);
                    }),
                    (n.prototype.setSelectedRange = function (t) {
                      return this.composition.setSelectedRange(t);
                    }),
                    (n.prototype.activateAttribute = function (t, e) {
                      return (
                        null == e && (e = !0),
                        this.composition.setCurrentAttribute(t, e)
                      );
                    }),
                    (n.prototype.attributeIsActive = function (t) {
                      return this.composition.hasCurrentAttribute(t);
                    }),
                    (n.prototype.canActivateAttribute = function (t) {
                      return this.composition.canSetCurrentAttribute(t);
                    }),
                    (n.prototype.deactivateAttribute = function (t) {
                      return this.composition.removeCurrentAttribute(t);
                    }),
                    (n.prototype.canDecreaseNestingLevel = function () {
                      return this.composition.canDecreaseNestingLevel();
                    }),
                    (n.prototype.canIncreaseNestingLevel = function () {
                      return this.composition.canIncreaseNestingLevel();
                    }),
                    (n.prototype.decreaseNestingLevel = function () {
                      return this.canDecreaseNestingLevel()
                        ? this.composition.decreaseNestingLevel()
                        : void 0;
                    }),
                    (n.prototype.increaseNestingLevel = function () {
                      return this.canIncreaseNestingLevel()
                        ? this.composition.increaseNestingLevel()
                        : void 0;
                    }),
                    (n.prototype.canRedo = function () {
                      return this.undoManager.canRedo();
                    }),
                    (n.prototype.canUndo = function () {
                      return this.undoManager.canUndo();
                    }),
                    (n.prototype.recordUndoEntry = function (t, e) {
                      var n, r, i;
                      return (
                        (r = (i = null != e ? e : {}).context),
                        (n = i.consolidatable),
                        this.undoManager.recordUndoEntry(t, {
                          context: r,
                          consolidatable: n,
                        })
                      );
                    }),
                    (n.prototype.redo = function () {
                      return this.canRedo() ? this.undoManager.redo() : void 0;
                    }),
                    (n.prototype.undo = function () {
                      return this.canUndo() ? this.undoManager.undo() : void 0;
                    }),
                    n
                  );
                })();
              }.call(this),
              function () {
                var e = function (t, e) {
                    function r() {
                      this.constructor = t;
                    }
                    for (var i in e) n.call(e, i) && (t[i] = e[i]);
                    return (
                      (r.prototype = e.prototype),
                      (t.prototype = new r()),
                      (t.__super__ = e.prototype),
                      t
                    );
                  },
                  n = {}.hasOwnProperty;
                t.ManagedAttachment = (function (t) {
                  function n(t, e) {
                    var n;
                    (this.attachmentManager = t),
                      (this.attachment = e),
                      (n = this.attachment),
                      (this.id = n.id),
                      (this.file = n.file);
                  }
                  return (
                    e(n, t),
                    (n.prototype.remove = function () {
                      return this.attachmentManager.requestRemovalOfAttachment(
                        this.attachment
                      );
                    }),
                    n.proxyMethod("attachment.getAttribute"),
                    n.proxyMethod("attachment.hasAttribute"),
                    n.proxyMethod("attachment.setAttribute"),
                    n.proxyMethod("attachment.getAttributes"),
                    n.proxyMethod("attachment.setAttributes"),
                    n.proxyMethod("attachment.isPending"),
                    n.proxyMethod("attachment.isPreviewable"),
                    n.proxyMethod("attachment.getURL"),
                    n.proxyMethod("attachment.getHref"),
                    n.proxyMethod("attachment.getFilename"),
                    n.proxyMethod("attachment.getFilesize"),
                    n.proxyMethod("attachment.getFormattedFilesize"),
                    n.proxyMethod("attachment.getExtension"),
                    n.proxyMethod("attachment.getContentType"),
                    n.proxyMethod("attachment.getFile"),
                    n.proxyMethod("attachment.setFile"),
                    n.proxyMethod("attachment.releaseFile"),
                    n.proxyMethod("attachment.getUploadProgress"),
                    n.proxyMethod("attachment.setUploadProgress"),
                    n
                  );
                })(t.BasicObject);
              }.call(this),
              function () {
                var e = function (t, e) {
                    function r() {
                      this.constructor = t;
                    }
                    for (var i in e) n.call(e, i) && (t[i] = e[i]);
                    return (
                      (r.prototype = e.prototype),
                      (t.prototype = new r()),
                      (t.__super__ = e.prototype),
                      t
                    );
                  },
                  n = {}.hasOwnProperty;
                t.AttachmentManager = (function (n) {
                  function r(t) {
                    var e, n, r;
                    for (
                      null == t && (t = []),
                        this.managedAttachments = {},
                        n = 0,
                        r = t.length;
                      r > n;
                      n++
                    )
                      (e = t[n]), this.manageAttachment(e);
                  }
                  return (
                    e(r, n),
                    (r.prototype.getAttachments = function () {
                      var t, e, n, r;
                      for (e in ((r = []), (n = this.managedAttachments)))
                        (t = n[e]), r.push(t);
                      return r;
                    }),
                    (r.prototype.manageAttachment = function (e) {
                      var n, r;
                      return null != (n = this.managedAttachments)[(r = e.id)]
                        ? n[r]
                        : (n[r] = new t.ManagedAttachment(this, e));
                    }),
                    (r.prototype.attachmentIsManaged = function (t) {
                      return t.id in this.managedAttachments;
                    }),
                    (r.prototype.requestRemovalOfAttachment = function (t) {
                      var e;
                      return this.attachmentIsManaged(t) &&
                        null != (e = this.delegate) &&
                        "function" ==
                          typeof e.attachmentManagerDidRequestRemovalOfAttachment
                        ? e.attachmentManagerDidRequestRemovalOfAttachment(t)
                        : void 0;
                    }),
                    (r.prototype.unmanageAttachment = function (t) {
                      var e;
                      return (
                        (e = this.managedAttachments[t.id]),
                        delete this.managedAttachments[t.id],
                        e
                      );
                    }),
                    r
                  );
                })(t.BasicObject);
              }.call(this),
              function () {
                var e, n, r, i, o, a, s, u, c, l, h;
                (e = t.elementContainsNode),
                  (n = t.findChildIndexOfNode),
                  (o = t.nodeIsBlockStart),
                  (a = t.nodeIsBlockStartComment),
                  (i = t.nodeIsBlockContainer),
                  (s = t.nodeIsCursorTarget),
                  (u = t.nodeIsEmptyTextNode),
                  (c = t.nodeIsTextNode),
                  (r = t.nodeIsAttachmentElement),
                  (l = t.tagName),
                  (h = t.walkTree),
                  (t.LocationMapper = (function () {
                    function t(t) {
                      this.element = t;
                    }
                    var d, p, f, g;
                    return (
                      (t.prototype.findLocationFromContainerAndOffset = function (
                        t,
                        r,
                        i
                      ) {
                        var a, u, l, d, g, m, v;
                        for (
                          m = (null != i ? i : { strict: !0 }).strict,
                            u = 0,
                            l = !1,
                            d = { index: 0, offset: 0 },
                            (a = this.findAttachmentElementParentForNode(t)) &&
                              ((t = a.parentNode), (r = n(a))),
                            v = h(this.element, { usingFilter: f });
                          v.nextNode();

                        ) {
                          if ((g = v.currentNode) === t && c(t)) {
                            s(g) || (d.offset += r);
                            break;
                          }
                          if (g.parentNode === t) {
                            if (u++ === r) break;
                          } else if (!e(t, g) && u > 0) break;
                          o(g, { strict: m })
                            ? (l && d.index++, (d.offset = 0), (l = !0))
                            : (d.offset += p(g));
                        }
                        return d;
                      }),
                      (t.prototype.findContainerAndOffsetFromLocation = function (
                        t
                      ) {
                        var e, r, a, u, l;
                        if (0 === t.index && 0 === t.offset) {
                          for (e = this.element, u = 0; e.firstChild; )
                            if (((e = e.firstChild), i(e))) {
                              u = 1;
                              break;
                            }
                          return [e, u];
                        }
                        if (
                          ((r = (l = this.findNodeAndOffsetFromLocation(t))[0]),
                          (a = l[1]),
                          r)
                        ) {
                          if (c(r))
                            0 === p(r)
                              ? ((e = r.parentNode.parentNode),
                                (u = n(r.parentNode)),
                                s(r, { name: "right" }) && u++)
                              : ((e = r), (u = t.offset - a));
                          else {
                            if (
                              ((e = r.parentNode),
                              !o(r.previousSibling) && !i(e))
                            )
                              for (
                                ;
                                r === e.lastChild &&
                                ((r = e), (e = e.parentNode), !i(e));

                              );
                            (u = n(r)), 0 !== t.offset && u++;
                          }
                          return [e, u];
                        }
                      }),
                      (t.prototype.findNodeAndOffsetFromLocation = function (
                        t
                      ) {
                        var e, n, r, i, o, a, u, l;
                        for (
                          u = 0,
                            n = 0,
                            r = (l = this.getSignificantNodesForIndex(t.index))
                              .length;
                          r > n;
                          n++
                        ) {
                          if (((e = l[n]), (i = p(e)), t.offset <= u + i))
                            if (c(e)) {
                              if (((o = e), (a = u), t.offset === a && s(o)))
                                break;
                            } else o || ((o = e), (a = u));
                          if ((u += i) > t.offset) break;
                        }
                        return [o, a];
                      }),
                      (t.prototype.findAttachmentElementParentForNode = function (
                        t
                      ) {
                        for (; t && t !== this.element; ) {
                          if (r(t)) return t;
                          t = t.parentNode;
                        }
                      }),
                      (t.prototype.getSignificantNodesForIndex = function (t) {
                        var e, n, r, i, o;
                        for (
                          r = [],
                            o = h(this.element, { usingFilter: d }),
                            i = !1;
                          o.nextNode();

                        )
                          if (((n = o.currentNode), a(n))) {
                            if ((null != e ? e++ : (e = 0), e === t)) i = !0;
                            else if (i) break;
                          } else i && r.push(n);
                        return r;
                      }),
                      (p = function (t) {
                        return t.nodeType === Node.TEXT_NODE
                          ? s(t)
                            ? 0
                            : t.textContent.length
                          : "br" === l(t) || r(t)
                          ? 1
                          : 0;
                      }),
                      (d = function (t) {
                        return g(t) === NodeFilter.FILTER_ACCEPT
                          ? f(t)
                          : NodeFilter.FILTER_REJECT;
                      }),
                      (g = function (t) {
                        return u(t)
                          ? NodeFilter.FILTER_REJECT
                          : NodeFilter.FILTER_ACCEPT;
                      }),
                      (f = function (t) {
                        return r(t.parentNode)
                          ? NodeFilter.FILTER_REJECT
                          : NodeFilter.FILTER_ACCEPT;
                      }),
                      t
                    );
                  })());
              }.call(this),
              function () {
                var e,
                  n,
                  r = [].slice;
                (e = t.getDOMRange),
                  (n = t.setDOMRange),
                  (t.PointMapper = (function () {
                    function t() {}
                    return (
                      (t.prototype.createDOMRangeFromPoint = function (t) {
                        var r, i, o, a, s, u, c, l;
                        if (
                          ((c = t.x),
                          (l = t.y),
                          document.caretPositionFromPoint)
                        )
                          return (
                            (o = (s = document.caretPositionFromPoint(c, l))
                              .offsetNode),
                            (i = s.offset),
                            (r = document.createRange()).setStart(o, i),
                            r
                          );
                        if (document.caretRangeFromPoint)
                          return document.caretRangeFromPoint(c, l);
                        if (document.body.createTextRange) {
                          a = e();
                          try {
                            (u = document.body.createTextRange()).moveToPoint(
                              c,
                              l
                            ),
                              u.select();
                          } catch (t) {}
                          return (r = e()), n(a), r;
                        }
                      }),
                      (t.prototype.getClientRectsForDOMRange = function (t) {
                        var e;
                        return [
                          (e = r.call(t.getClientRects()))[0],
                          e[e.length - 1],
                        ];
                      }),
                      t
                    );
                  })());
              }.call(this),
              function () {
                var e,
                  n = function (t, e) {
                    return function () {
                      return t.apply(e, arguments);
                    };
                  },
                  r = function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    for (var r in e) i.call(e, r) && (t[r] = e[r]);
                    return (
                      (n.prototype = e.prototype),
                      (t.prototype = new n()),
                      (t.__super__ = e.prototype),
                      t
                    );
                  },
                  i = {}.hasOwnProperty,
                  o =
                    [].indexOf ||
                    function (t) {
                      for (var e = 0, n = this.length; n > e; e++)
                        if (e in this && this[e] === t) return e;
                      return -1;
                    };
                (e = t.getDOMRange),
                  (t.SelectionChangeObserver = (function (t) {
                    function i() {
                      (this.run = n(this.run, this)),
                        (this.update = n(this.update, this)),
                        (this.selectionManagers = []);
                    }
                    var a;
                    return (
                      r(i, t),
                      (i.prototype.start = function () {
                        return this.started
                          ? void 0
                          : ((this.started = !0),
                            "onselectionchange" in document
                              ? document.addEventListener(
                                  "selectionchange",
                                  this.update,
                                  !0
                                )
                              : this.run());
                      }),
                      (i.prototype.stop = function () {
                        return this.started
                          ? ((this.started = !1),
                            document.removeEventListener(
                              "selectionchange",
                              this.update,
                              !0
                            ))
                          : void 0;
                      }),
                      (i.prototype.registerSelectionManager = function (t) {
                        return o.call(this.selectionManagers, t) < 0
                          ? (this.selectionManagers.push(t), this.start())
                          : void 0;
                      }),
                      (i.prototype.unregisterSelectionManager = function (t) {
                        var e;
                        return (
                          (this.selectionManagers = function () {
                            var n, r, i, o;
                            for (
                              o = [],
                                n = 0,
                                r = (i = this.selectionManagers).length;
                              r > n;
                              n++
                            )
                              (e = i[n]) !== t && o.push(e);
                            return o;
                          }.call(this)),
                          0 === this.selectionManagers.length
                            ? this.stop()
                            : void 0
                        );
                      }),
                      (i.prototype.notifySelectionManagersOfSelectionChange = function () {
                        var t, e, n, r, i;
                        for (
                          r = [],
                            t = 0,
                            e = (n = this.selectionManagers).length;
                          e > t;
                          t++
                        )
                          (i = n[t]), r.push(i.selectionDidChange());
                        return r;
                      }),
                      (i.prototype.update = function () {
                        var t;
                        return (
                          (t = e()),
                          a(t, this.domRange)
                            ? void 0
                            : ((this.domRange = t),
                              this.notifySelectionManagersOfSelectionChange())
                        );
                      }),
                      (i.prototype.reset = function () {
                        return (this.domRange = null), this.update();
                      }),
                      (i.prototype.run = function () {
                        return this.started
                          ? (this.update(), requestAnimationFrame(this.run))
                          : void 0;
                      }),
                      (a = function (t, e) {
                        return (
                          (null != t ? t.startContainer : void 0) ===
                            (null != e ? e.startContainer : void 0) &&
                          (null != t ? t.startOffset : void 0) ===
                            (null != e ? e.startOffset : void 0) &&
                          (null != t ? t.endContainer : void 0) ===
                            (null != e ? e.endContainer : void 0) &&
                          (null != t ? t.endOffset : void 0) ===
                            (null != e ? e.endOffset : void 0)
                        );
                      }),
                      i
                    );
                  })(t.BasicObject)),
                  null == t.selectionChangeObserver &&
                    (t.selectionChangeObserver = new t.SelectionChangeObserver());
              }.call(this),
              function () {
                var e,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  c,
                  l,
                  h = function (t, e) {
                    return function () {
                      return t.apply(e, arguments);
                    };
                  },
                  d = function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    for (var r in e) p.call(e, r) && (t[r] = e[r]);
                    return (
                      (n.prototype = e.prototype),
                      (t.prototype = new n()),
                      (t.__super__ = e.prototype),
                      t
                    );
                  },
                  p = {}.hasOwnProperty;
                (r = t.getDOMSelection),
                  (n = t.getDOMRange),
                  (l = t.setDOMRange),
                  (e = t.elementContainsNode),
                  (a = t.nodeIsCursorTarget),
                  (o = t.innerElementIsActive),
                  (i = t.handleEvent),
                  (s = t.normalizeRange),
                  (u = t.rangeIsCollapsed),
                  (c = t.rangesAreEqual),
                  (t.SelectionManager = (function (p) {
                    function f(e) {
                      (this.element = e),
                        (this.selectionDidChange = h(
                          this.selectionDidChange,
                          this
                        )),
                        (this.didMouseDown = h(this.didMouseDown, this)),
                        (this.locationMapper = new t.LocationMapper(
                          this.element
                        )),
                        (this.pointMapper = new t.PointMapper()),
                        (this.lockCount = 0),
                        i("mousedown", {
                          onElement: this.element,
                          withCallback: this.didMouseDown,
                        });
                    }
                    return (
                      d(f, p),
                      (f.prototype.getLocationRange = function (t) {
                        var e;
                        return (
                          null == t && (t = {}),
                          !1 === t.strict
                            ? this.createLocationRangeFromDOMRange(n(), {
                                strict: !1,
                              })
                            : t.ignoreLock
                            ? this.currentLocationRange
                            : null != (e = this.lockedLocationRange)
                            ? e
                            : this.currentLocationRange
                        );
                      }),
                      (f.prototype.setLocationRange = function (t) {
                        var e;
                        if (!this.lockedLocationRange)
                          return (
                            (t = s(t)),
                            (e = this.createDOMRangeFromLocationRange(t))
                              ? (l(e), this.updateCurrentLocationRange(t))
                              : void 0
                          );
                      }),
                      (f.prototype.setLocationRangeFromPointRange = function (
                        t
                      ) {
                        var e, n;
                        return (
                          (t = s(t)),
                          (n = this.getLocationAtPoint(t[0])),
                          (e = this.getLocationAtPoint(t[1])),
                          this.setLocationRange([n, e])
                        );
                      }),
                      (f.prototype.getClientRectAtLocationRange = function (t) {
                        var e;
                        return (e = this.createDOMRangeFromLocationRange(t))
                          ? this.getClientRectsForDOMRange(e)[1]
                          : void 0;
                      }),
                      (f.prototype.locationIsCursorTarget = function (t) {
                        var e, n;
                        return (
                          (e = (n = this.findNodeAndOffsetFromLocation(t))[0]),
                          n[1],
                          a(e)
                        );
                      }),
                      (f.prototype.lock = function () {
                        return 0 == this.lockCount++
                          ? (this.updateCurrentLocationRange(),
                            (this.lockedLocationRange = this.getLocationRange()))
                          : void 0;
                      }),
                      (f.prototype.unlock = function () {
                        var t;
                        return 0 == --this.lockCount &&
                          ((t = this.lockedLocationRange),
                          (this.lockedLocationRange = null),
                          null != t)
                          ? this.setLocationRange(t)
                          : void 0;
                      }),
                      (f.prototype.clearSelection = function () {
                        var t;
                        return null != (t = r()) ? t.removeAllRanges() : void 0;
                      }),
                      (f.prototype.selectionIsCollapsed = function () {
                        var t;
                        return (
                          !0 === (null != (t = n()) ? t.collapsed : void 0)
                        );
                      }),
                      (f.prototype.selectionIsExpanded = function () {
                        return !this.selectionIsCollapsed();
                      }),
                      (f.prototype.createLocationRangeFromDOMRange = function (
                        t,
                        e
                      ) {
                        var n, r;
                        if (
                          null != t &&
                          this.domRangeWithinElement(t) &&
                          (r = this.findLocationFromContainerAndOffset(
                            t.startContainer,
                            t.startOffset,
                            e
                          ))
                        )
                          return (
                            t.collapsed ||
                              (n = this.findLocationFromContainerAndOffset(
                                t.endContainer,
                                t.endOffset,
                                e
                              )),
                            s([r, n])
                          );
                      }),
                      f.proxyMethod(
                        "locationMapper.findLocationFromContainerAndOffset"
                      ),
                      f.proxyMethod(
                        "locationMapper.findContainerAndOffsetFromLocation"
                      ),
                      f.proxyMethod(
                        "locationMapper.findNodeAndOffsetFromLocation"
                      ),
                      f.proxyMethod("pointMapper.createDOMRangeFromPoint"),
                      f.proxyMethod("pointMapper.getClientRectsForDOMRange"),
                      (f.prototype.didMouseDown = function () {
                        return this.pauseTemporarily();
                      }),
                      (f.prototype.pauseTemporarily = function () {
                        var t, n, r, o;
                        return (
                          (this.paused = !0),
                          (n = (function (t) {
                            return function () {
                              var n, i;
                              for (
                                t.paused = !1,
                                  clearTimeout(o),
                                  n = 0,
                                  i = r.length;
                                i > n;
                                n++
                              )
                                r[n].destroy();
                              return e(document, t.element)
                                ? t.selectionDidChange()
                                : void 0;
                            };
                          })(this)),
                          (o = setTimeout(n, 200)),
                          (r = (function () {
                            var e, r, o, a;
                            for (
                              a = [],
                                e = 0,
                                r = (o = ["mousemove", "keydown"]).length;
                              r > e;
                              e++
                            )
                              (t = o[e]),
                                a.push(
                                  i(t, { onElement: document, withCallback: n })
                                );
                            return a;
                          })())
                        );
                      }),
                      (f.prototype.selectionDidChange = function () {
                        return this.paused || o(this.element)
                          ? void 0
                          : this.updateCurrentLocationRange();
                      }),
                      (f.prototype.updateCurrentLocationRange = function (t) {
                        var e;
                        return (null != t
                          ? t
                          : (t = this.createLocationRangeFromDOMRange(n()))) &&
                          !c(t, this.currentLocationRange)
                          ? ((this.currentLocationRange = t),
                            null != (e = this.delegate) &&
                            "function" == typeof e.locationRangeDidChange
                              ? e.locationRangeDidChange(
                                  this.currentLocationRange.slice(0)
                                )
                              : void 0)
                          : void 0;
                      }),
                      (f.prototype.createDOMRangeFromLocationRange = function (
                        t
                      ) {
                        var e, n, r, i;
                        return (
                          (r = this.findContainerAndOffsetFromLocation(t[0])),
                          (n = u(t)
                            ? r
                            : null !=
                              (i = this.findContainerAndOffsetFromLocation(
                                t[1]
                              ))
                            ? i
                            : r),
                          null != r && null != n
                            ? ((e = document.createRange()).setStart.apply(
                                e,
                                r
                              ),
                              e.setEnd.apply(e, n),
                              e)
                            : void 0
                        );
                      }),
                      (f.prototype.getLocationAtPoint = function (t) {
                        var e, n;
                        return (e = this.createDOMRangeFromPoint(t)) &&
                          null != (n = this.createLocationRangeFromDOMRange(e))
                          ? n[0]
                          : void 0;
                      }),
                      (f.prototype.domRangeWithinElement = function (t) {
                        return t.collapsed
                          ? e(this.element, t.startContainer)
                          : e(this.element, t.startContainer) &&
                              e(this.element, t.endContainer);
                      }),
                      f
                    );
                  })(t.BasicObject));
              }.call(this),
              function () {
                var e,
                  n,
                  r,
                  i,
                  o = function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    for (var r in e) a.call(e, r) && (t[r] = e[r]);
                    return (
                      (n.prototype = e.prototype),
                      (t.prototype = new n()),
                      (t.__super__ = e.prototype),
                      t
                    );
                  },
                  a = {}.hasOwnProperty,
                  s = [].slice;
                (r = t.rangeIsCollapsed),
                  (i = t.rangesAreEqual),
                  (n = t.objectsAreEqual),
                  (e = t.getBlockConfig),
                  (t.EditorController = (function (a) {
                    function u(e) {
                      var n, r;
                      (this.editorElement = e.editorElement),
                        (n = e.document),
                        (r = e.html),
                        (this.selectionManager = new t.SelectionManager(
                          this.editorElement
                        )),
                        (this.selectionManager.delegate = this),
                        (this.composition = new t.Composition()),
                        (this.composition.delegate = this),
                        (this.attachmentManager = new t.AttachmentManager(
                          this.composition.getAttachments()
                        )),
                        (this.attachmentManager.delegate = this),
                        (this.inputController = new t[
                          "Level" +
                            t.config.input.getLevel() +
                            "InputController"
                        ](this.editorElement)),
                        (this.inputController.delegate = this),
                        (this.inputController.responder = this.composition),
                        (this.compositionController = new t.CompositionController(
                          this.editorElement,
                          this.composition
                        )),
                        (this.compositionController.delegate = this),
                        (this.toolbarController = new t.ToolbarController(
                          this.editorElement.toolbarElement
                        )),
                        (this.toolbarController.delegate = this),
                        (this.editor = new t.Editor(
                          this.composition,
                          this.selectionManager,
                          this.editorElement
                        )),
                        null != n
                          ? this.editor.loadDocument(n)
                          : this.editor.loadHTML(r);
                    }
                    var c;
                    return (
                      o(u, a),
                      (u.prototype.registerSelectionManager = function () {
                        return t.selectionChangeObserver.registerSelectionManager(
                          this.selectionManager
                        );
                      }),
                      (u.prototype.unregisterSelectionManager = function () {
                        return t.selectionChangeObserver.unregisterSelectionManager(
                          this.selectionManager
                        );
                      }),
                      (u.prototype.render = function () {
                        return this.compositionController.render();
                      }),
                      (u.prototype.reparse = function () {
                        return this.composition.replaceHTML(
                          this.editorElement.innerHTML
                        );
                      }),
                      (u.prototype.compositionDidChangeDocument = function () {
                        return (
                          this.notifyEditorElement("document-change"),
                          this.handlingInput ? void 0 : this.render()
                        );
                      }),
                      (u.prototype.compositionDidChangeCurrentAttributes = function (
                        t
                      ) {
                        return (
                          (this.currentAttributes = t),
                          this.toolbarController.updateAttributes(
                            this.currentAttributes
                          ),
                          this.updateCurrentActions(),
                          this.notifyEditorElement("attributes-change", {
                            attributes: this.currentAttributes,
                          })
                        );
                      }),
                      (u.prototype.compositionDidPerformInsertionAtRange = function (
                        t
                      ) {
                        return this.pasting ? (this.pastedRange = t) : void 0;
                      }),
                      (u.prototype.compositionShouldAcceptFile = function (t) {
                        return this.notifyEditorElement("file-accept", {
                          file: t,
                        });
                      }),
                      (u.prototype.compositionDidAddAttachment = function (t) {
                        var e;
                        return (
                          (e = this.attachmentManager.manageAttachment(t)),
                          this.notifyEditorElement("attachment-add", {
                            attachment: e,
                          })
                        );
                      }),
                      (u.prototype.compositionDidEditAttachment = function (t) {
                        var e;
                        return (
                          this.compositionController.rerenderViewForObject(t),
                          (e = this.attachmentManager.manageAttachment(t)),
                          this.notifyEditorElement("attachment-edit", {
                            attachment: e,
                          }),
                          this.notifyEditorElement("change")
                        );
                      }),
                      (u.prototype.compositionDidChangeAttachmentPreviewURL = function (
                        t
                      ) {
                        return (
                          this.compositionController.invalidateViewForObject(t),
                          this.notifyEditorElement("change")
                        );
                      }),
                      (u.prototype.compositionDidRemoveAttachment = function (
                        t
                      ) {
                        var e;
                        return (
                          (e = this.attachmentManager.unmanageAttachment(t)),
                          this.notifyEditorElement("attachment-remove", {
                            attachment: e,
                          })
                        );
                      }),
                      (u.prototype.compositionDidStartEditingAttachment = function (
                        t,
                        e
                      ) {
                        return (
                          (this.attachmentLocationRange = this.composition.document.getLocationRangeOfAttachment(
                            t
                          )),
                          this.compositionController.installAttachmentEditorForAttachment(
                            t,
                            e
                          ),
                          this.selectionManager.setLocationRange(
                            this.attachmentLocationRange
                          )
                        );
                      }),
                      (u.prototype.compositionDidStopEditingAttachment = function () {
                        return (
                          this.compositionController.uninstallAttachmentEditor(),
                          (this.attachmentLocationRange = null)
                        );
                      }),
                      (u.prototype.compositionDidRequestChangingSelectionToLocationRange = function (
                        t
                      ) {
                        return !this.loadingSnapshot || this.isFocused()
                          ? ((this.requestedLocationRange = t),
                            (this.compositionRevisionWhenLocationRangeRequested = this.composition.revision),
                            this.handlingInput ? void 0 : this.render())
                          : void 0;
                      }),
                      (u.prototype.compositionWillLoadSnapshot = function () {
                        return (this.loadingSnapshot = !0);
                      }),
                      (u.prototype.compositionDidLoadSnapshot = function () {
                        return (
                          this.compositionController.refreshViewCache(),
                          this.render(),
                          (this.loadingSnapshot = !1)
                        );
                      }),
                      (u.prototype.getSelectionManager = function () {
                        return this.selectionManager;
                      }),
                      u.proxyMethod("getSelectionManager().setLocationRange"),
                      u.proxyMethod("getSelectionManager().getLocationRange"),
                      (u.prototype.attachmentManagerDidRequestRemovalOfAttachment = function (
                        t
                      ) {
                        return this.removeAttachment(t);
                      }),
                      (u.prototype.compositionControllerWillSyncDocumentView = function () {
                        return (
                          this.inputController.editorWillSyncDocumentView(),
                          this.selectionManager.lock(),
                          this.selectionManager.clearSelection()
                        );
                      }),
                      (u.prototype.compositionControllerDidSyncDocumentView = function () {
                        return (
                          this.inputController.editorDidSyncDocumentView(),
                          this.selectionManager.unlock(),
                          this.updateCurrentActions(),
                          this.notifyEditorElement("sync")
                        );
                      }),
                      (u.prototype.compositionControllerDidRender = function () {
                        return (
                          null != this.requestedLocationRange &&
                            (this
                              .compositionRevisionWhenLocationRangeRequested ===
                              this.composition.revision &&
                              this.selectionManager.setLocationRange(
                                this.requestedLocationRange
                              ),
                            (this.requestedLocationRange = null),
                            (this.compositionRevisionWhenLocationRangeRequested = null)),
                          this.renderedCompositionRevision !==
                            this.composition.revision &&
                            (this.runEditorFilters(),
                            this.composition.updateCurrentAttributes(),
                            this.notifyEditorElement("render")),
                          (this.renderedCompositionRevision = this.composition.revision)
                        );
                      }),
                      (u.prototype.compositionControllerDidFocus = function () {
                        return (
                          this.isFocusedInvisibly() &&
                            this.setLocationRange({ index: 0, offset: 0 }),
                          this.toolbarController.hideDialog(),
                          this.notifyEditorElement("focus")
                        );
                      }),
                      (u.prototype.compositionControllerDidBlur = function () {
                        return this.notifyEditorElement("blur");
                      }),
                      (u.prototype.compositionControllerDidSelectAttachment = function (
                        t,
                        e
                      ) {
                        return (
                          this.toolbarController.hideDialog(),
                          this.composition.editAttachment(t, e)
                        );
                      }),
                      (u.prototype.compositionControllerDidRequestDeselectingAttachment = function (
                        t
                      ) {
                        var e, n;
                        return (
                          (e =
                            null != (n = this.attachmentLocationRange)
                              ? n
                              : this.composition.document.getLocationRangeOfAttachment(
                                  t
                                )),
                          this.selectionManager.setLocationRange(e[1])
                        );
                      }),
                      (u.prototype.compositionControllerWillUpdateAttachment = function (
                        t
                      ) {
                        return this.editor.recordUndoEntry("Edit Attachment", {
                          context: t.id,
                          consolidatable: !0,
                        });
                      }),
                      (u.prototype.compositionControllerDidRequestRemovalOfAttachment = function (
                        t
                      ) {
                        return this.removeAttachment(t);
                      }),
                      (u.prototype.inputControllerWillHandleInput = function () {
                        return (
                          (this.handlingInput = !0), (this.requestedRender = !1)
                        );
                      }),
                      (u.prototype.inputControllerDidRequestRender = function () {
                        return (this.requestedRender = !0);
                      }),
                      (u.prototype.inputControllerDidHandleInput = function () {
                        return (
                          (this.handlingInput = !1),
                          this.requestedRender
                            ? ((this.requestedRender = !1), this.render())
                            : void 0
                        );
                      }),
                      (u.prototype.inputControllerDidAllowUnhandledInput = function () {
                        return this.notifyEditorElement("change");
                      }),
                      (u.prototype.inputControllerDidRequestReparse = function () {
                        return this.reparse();
                      }),
                      (u.prototype.inputControllerWillPerformTyping = function () {
                        return this.recordTypingUndoEntry();
                      }),
                      (u.prototype.inputControllerWillPerformFormatting = function (
                        t
                      ) {
                        return this.recordFormattingUndoEntry(t);
                      }),
                      (u.prototype.inputControllerWillCutText = function () {
                        return this.editor.recordUndoEntry("Cut");
                      }),
                      (u.prototype.inputControllerWillPaste = function (t) {
                        return (
                          this.editor.recordUndoEntry("Paste"),
                          (this.pasting = !0),
                          this.notifyEditorElement("before-paste", { paste: t })
                        );
                      }),
                      (u.prototype.inputControllerDidPaste = function (t) {
                        return (
                          (t.range = this.pastedRange),
                          (this.pastedRange = null),
                          (this.pasting = null),
                          this.notifyEditorElement("paste", { paste: t })
                        );
                      }),
                      (u.prototype.inputControllerWillMoveText = function () {
                        return this.editor.recordUndoEntry("Move");
                      }),
                      (u.prototype.inputControllerWillAttachFiles = function () {
                        return this.editor.recordUndoEntry("Drop Files");
                      }),
                      (u.prototype.inputControllerWillPerformUndo = function () {
                        return this.editor.undo();
                      }),
                      (u.prototype.inputControllerWillPerformRedo = function () {
                        return this.editor.redo();
                      }),
                      (u.prototype.inputControllerDidReceiveKeyboardCommand = function (
                        t
                      ) {
                        return this.toolbarController.applyKeyboardCommand(t);
                      }),
                      (u.prototype.inputControllerDidStartDrag = function () {
                        return (this.locationRangeBeforeDrag = this.selectionManager.getLocationRange());
                      }),
                      (u.prototype.inputControllerDidReceiveDragOverPoint = function (
                        t
                      ) {
                        return this.selectionManager.setLocationRangeFromPointRange(
                          t
                        );
                      }),
                      (u.prototype.inputControllerDidCancelDrag = function () {
                        return (
                          this.selectionManager.setLocationRange(
                            this.locationRangeBeforeDrag
                          ),
                          (this.locationRangeBeforeDrag = null)
                        );
                      }),
                      (u.prototype.locationRangeDidChange = function (t) {
                        return (
                          this.composition.updateCurrentAttributes(),
                          this.updateCurrentActions(),
                          this.attachmentLocationRange &&
                            !i(this.attachmentLocationRange, t) &&
                            this.composition.stopEditingAttachment(),
                          this.notifyEditorElement("selection-change")
                        );
                      }),
                      (u.prototype.toolbarDidClickButton = function () {
                        return this.getLocationRange()
                          ? void 0
                          : this.setLocationRange({ index: 0, offset: 0 });
                      }),
                      (u.prototype.toolbarDidInvokeAction = function (t) {
                        return this.invokeAction(t);
                      }),
                      (u.prototype.toolbarDidToggleAttribute = function (t) {
                        return (
                          this.recordFormattingUndoEntry(t),
                          this.composition.toggleCurrentAttribute(t),
                          this.render(),
                          this.selectionFrozen
                            ? void 0
                            : this.editorElement.focus()
                        );
                      }),
                      (u.prototype.toolbarDidUpdateAttribute = function (t, e) {
                        return (
                          this.recordFormattingUndoEntry(t),
                          this.composition.setCurrentAttribute(t, e),
                          this.render(),
                          this.selectionFrozen
                            ? void 0
                            : this.editorElement.focus()
                        );
                      }),
                      (u.prototype.toolbarDidRemoveAttribute = function (t) {
                        return (
                          this.recordFormattingUndoEntry(t),
                          this.composition.removeCurrentAttribute(t),
                          this.render(),
                          this.selectionFrozen
                            ? void 0
                            : this.editorElement.focus()
                        );
                      }),
                      (u.prototype.toolbarWillShowDialog = function () {
                        return (
                          this.composition.expandSelectionForEditing(),
                          this.freezeSelection()
                        );
                      }),
                      (u.prototype.toolbarDidShowDialog = function (t) {
                        return this.notifyEditorElement("toolbar-dialog-show", {
                          dialogName: t,
                        });
                      }),
                      (u.prototype.toolbarDidHideDialog = function (t) {
                        return (
                          this.thawSelection(),
                          this.editorElement.focus(),
                          this.notifyEditorElement("toolbar-dialog-hide", {
                            dialogName: t,
                          })
                        );
                      }),
                      (u.prototype.freezeSelection = function () {
                        return this.selectionFrozen
                          ? void 0
                          : (this.selectionManager.lock(),
                            this.composition.freezeSelection(),
                            (this.selectionFrozen = !0),
                            this.render());
                      }),
                      (u.prototype.thawSelection = function () {
                        return this.selectionFrozen
                          ? (this.composition.thawSelection(),
                            this.selectionManager.unlock(),
                            (this.selectionFrozen = !1),
                            this.render())
                          : void 0;
                      }),
                      (u.prototype.actions = {
                        undo: {
                          test: function () {
                            return this.editor.canUndo();
                          },
                          perform: function () {
                            return this.editor.undo();
                          },
                        },
                        redo: {
                          test: function () {
                            return this.editor.canRedo();
                          },
                          perform: function () {
                            return this.editor.redo();
                          },
                        },
                        link: {
                          test: function () {
                            return this.editor.canActivateAttribute("href");
                          },
                        },
                        increaseNestingLevel: {
                          test: function () {
                            return this.editor.canIncreaseNestingLevel();
                          },
                          perform: function () {
                            return (
                              this.editor.increaseNestingLevel() &&
                              this.render()
                            );
                          },
                        },
                        decreaseNestingLevel: {
                          test: function () {
                            return this.editor.canDecreaseNestingLevel();
                          },
                          perform: function () {
                            return (
                              this.editor.decreaseNestingLevel() &&
                              this.render()
                            );
                          },
                        },
                        attachFiles: {
                          test: function () {
                            return !0;
                          },
                          perform: function () {
                            return t.config.input.pickFiles(
                              this.editor.insertFiles
                            );
                          },
                        },
                      }),
                      (u.prototype.canInvokeAction = function (t) {
                        var e, n;
                        return (
                          !!this.actionIsExternal(t) ||
                          !!(null != (e = this.actions[t]) &&
                          null != (n = e.test)
                            ? n.call(this)
                            : void 0)
                        );
                      }),
                      (u.prototype.invokeAction = function (t) {
                        var e, n;
                        return this.actionIsExternal(t)
                          ? this.notifyEditorElement("action-invoke", {
                              actionName: t,
                            })
                          : null != (e = this.actions[t]) &&
                            null != (n = e.perform)
                          ? n.call(this)
                          : void 0;
                      }),
                      (u.prototype.actionIsExternal = function (t) {
                        return /^x-./.test(t);
                      }),
                      (u.prototype.getCurrentActions = function () {
                        var t, e;
                        for (t in ((e = {}), this.actions))
                          e[t] = this.canInvokeAction(t);
                        return e;
                      }),
                      (u.prototype.updateCurrentActions = function () {
                        var t;
                        return (
                          (t = this.getCurrentActions()),
                          n(t, this.currentActions)
                            ? void 0
                            : ((this.currentActions = t),
                              this.toolbarController.updateActions(
                                this.currentActions
                              ),
                              this.notifyEditorElement("actions-change", {
                                actions: this.currentActions,
                              }))
                        );
                      }),
                      (u.prototype.runEditorFilters = function () {
                        var t, e, n, r, i, o, a, s;
                        for (
                          s = this.composition.getSnapshot(),
                            n = 0,
                            r = (i = this.editor.filters).length;
                          r > n;
                          n++
                        )
                          (e = i[n]),
                            (t = s.document),
                            (a = s.selectedRange),
                            null ==
                              (s =
                                null != (o = e.call(this.editor, s)) ? o : {})
                                .document && (s.document = t),
                            null == s.selectedRange && (s.selectedRange = a);
                        return c(s, this.composition.getSnapshot())
                          ? void 0
                          : this.composition.loadSnapshot(s);
                      }),
                      (c = function (t, e) {
                        return (
                          i(t.selectedRange, e.selectedRange) &&
                          t.document.isEqualTo(e.document)
                        );
                      }),
                      (u.prototype.updateInputElement = function () {
                        var e, n;
                        return (
                          (e = this.compositionController.getSerializableElement()),
                          (n = t.serializeToContentType(e, "text/html")),
                          this.editorElement.setInputElementValue(n)
                        );
                      }),
                      (u.prototype.notifyEditorElement = function (t, e) {
                        switch (t) {
                          case "document-change":
                            this.documentChangedSinceLastRender = !0;
                            break;
                          case "render":
                            this.documentChangedSinceLastRender &&
                              ((this.documentChangedSinceLastRender = !1),
                              this.notifyEditorElement("change"));
                            break;
                          case "change":
                          case "attachment-add":
                          case "attachment-edit":
                          case "attachment-remove":
                            this.updateInputElement();
                        }
                        return this.editorElement.notify(t, e);
                      }),
                      (u.prototype.removeAttachment = function (t) {
                        return (
                          this.editor.recordUndoEntry("Delete Attachment"),
                          this.composition.removeAttachment(t),
                          this.render()
                        );
                      }),
                      (u.prototype.recordFormattingUndoEntry = function (t) {
                        var n, i;
                        return (
                          (n = e(t)),
                          (i = this.selectionManager.getLocationRange()),
                          n || !r(i)
                            ? this.editor.recordUndoEntry("Formatting", {
                                context: this.getUndoContext(),
                                consolidatable: !0,
                              })
                            : void 0
                        );
                      }),
                      (u.prototype.recordTypingUndoEntry = function () {
                        return this.editor.recordUndoEntry("Typing", {
                          context: this.getUndoContext(this.currentAttributes),
                          consolidatable: !0,
                        });
                      }),
                      (u.prototype.getUndoContext = function () {
                        var t;
                        return (
                          (t =
                            1 <= arguments.length ? s.call(arguments, 0) : []),
                          [
                            this.getLocationContext(),
                            this.getTimeContext(),
                          ].concat(s.call(t))
                        );
                      }),
                      (u.prototype.getLocationContext = function () {
                        var t;
                        return (
                          (t = this.selectionManager.getLocationRange()),
                          r(t) ? t[0].index : t
                        );
                      }),
                      (u.prototype.getTimeContext = function () {
                        return t.config.undoInterval > 0
                          ? Math.floor(
                              new Date().getTime() / t.config.undoInterval
                            )
                          : 0;
                      }),
                      (u.prototype.isFocused = function () {
                        var t;
                        return (
                          this.editorElement ===
                          (null != (t = this.editorElement.ownerDocument)
                            ? t.activeElement
                            : void 0)
                        );
                      }),
                      (u.prototype.isFocusedInvisibly = function () {
                        return this.isFocused() && !this.getLocationRange();
                      }),
                      u
                    );
                  })(t.Controller));
              }.call(this),
              function () {
                var e, n, r, i, o, a, s, u, c, l, h, d, p, f;
                (n = t.browser),
                  (o = t.makeElement),
                  (a = t.triggerEvent),
                  (r = t.handleEvent),
                  (i = t.handleEventOnce),
                  (e = t.AttachmentView.attachmentSelector),
                  t.registerElement(
                    "trix-editor",
                    ((d = 0),
                    (u = function (t) {
                      return !document.querySelector(":focus") &&
                        t.hasAttribute("autofocus") &&
                        document.querySelector("[autofocus]") === t
                        ? t.focus()
                        : void 0;
                    }),
                    (p = function (t) {
                      return t.hasAttribute("contenteditable")
                        ? void 0
                        : (t.setAttribute("contenteditable", ""),
                          i("focus", {
                            onElement: t,
                            withCallback: function () {
                              return c(t);
                            },
                          }));
                    }),
                    (s = function (t) {
                      return t.hasAttribute("role")
                        ? void 0
                        : t.setAttribute("role", "textbox");
                    }),
                    (c = function (t) {
                      return h(t), f(t);
                    }),
                    (h = function (t) {
                      return (
                        "function" == typeof document.queryCommandSupported
                          ? document.queryCommandSupported(
                              "enableObjectResizing"
                            )
                          : void 0
                      )
                        ? (document.execCommand("enableObjectResizing", !1, !1),
                          r("mscontrolselect", {
                            onElement: t,
                            preventDefault: !0,
                          }))
                        : void 0;
                    }),
                    (f = function () {
                      var e;
                      return ("function" ==
                      typeof document.queryCommandSupported
                        ? document.queryCommandSupported(
                            "DefaultParagraphSeparator"
                          )
                        : void 0) &&
                        ("div" ===
                          (e = t.config.blockAttributes.default.tagName) ||
                          "p" === e)
                        ? document.execCommand(
                            "DefaultParagraphSeparator",
                            !1,
                            e
                          )
                        : void 0;
                    }),
                    (l = n.forcesObjectResizing
                      ? { display: "inline", width: "auto" }
                      : { display: "inline-block", width: "1px" }),
                    {
                      defaultCSS:
                        "%t {\n  display: block;\n}\n\n%t:empty:not(:focus)::before {\n  content: attr(placeholder);\n  color: graytext;\n  cursor: text;\n}\n\n%t a[contenteditable=false] {\n  cursor: text;\n}\n\n%t img {\n  max-width: 100%;\n  height: auto;\n}\n\n%t " +
                        e +
                        " figcaption textarea {\n  resize: none;\n}\n\n%t " +
                        e +
                        " figcaption textarea.trix-autoresize-clone {\n  position: absolute;\n  left: -9999px;\n  max-height: 0px;\n}\n\n%t " +
                        e +
                        " figcaption[data-trix-placeholder]:empty::before {\n  content: attr(data-trix-placeholder);\n  color: graytext;\n}\n\n%t [data-trix-cursor-target] {\n  display: " +
                        l.display +
                        " !important;\n  width: " +
                        l.width +
                        " !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  border: none !important;\n}\n\n%t [data-trix-cursor-target=left] {\n  vertical-align: top !important;\n  margin-left: -1px !important;\n}\n\n%t [data-trix-cursor-target=right] {\n  vertical-align: bottom !important;\n  margin-right: -1px !important;\n}",
                      trixId: {
                        get: function () {
                          return this.hasAttribute("trix-id")
                            ? this.getAttribute("trix-id")
                            : (this.setAttribute("trix-id", ++d), this.trixId);
                        },
                      },
                      toolbarElement: {
                        get: function () {
                          var t, e, n;
                          return this.hasAttribute("toolbar")
                            ? null != (e = this.ownerDocument)
                              ? e.getElementById(this.getAttribute("toolbar"))
                              : void 0
                            : this.parentNode
                            ? ((n = "trix-toolbar-" + this.trixId),
                              this.setAttribute("toolbar", n),
                              (t = o("trix-toolbar", { id: n })),
                              this.parentNode.insertAdjacentElement(
                                "afterend",
                                t
                              ),
                              t)
                            : void 0;
                        },
                      },
                      inputElement: {
                        get: function () {
                          var t, e, n;
                          return this.hasAttribute("input")
                            ? null != (n = this.ownerDocument)
                              ? n.getElementById(this.getAttribute("input"))
                              : void 0
                            : this.parentNode
                            ? ((e = "trix-input-" + this.trixId),
                              this.setAttribute("input", e),
                              (t = o("input", { type: "hidden", id: e })),
                              this.parentNode.insertBefore(
                                t,
                                this.nextElementSibling
                              ),
                              t)
                            : void 0;
                        },
                      },
                      editor: {
                        get: function () {
                          var t;
                          return null != (t = this.editorController)
                            ? t.editor
                            : void 0;
                        },
                      },
                      name: {
                        get: function () {
                          var t;
                          return null != (t = this.inputElement)
                            ? t.name
                            : void 0;
                        },
                      },
                      value: {
                        get: function () {
                          var t;
                          return null != (t = this.inputElement)
                            ? t.value
                            : void 0;
                        },
                        set: function (t) {
                          var e;
                          return (
                            (this.defaultValue = t),
                            null != (e = this.editor)
                              ? e.loadHTML(this.defaultValue)
                              : void 0
                          );
                        },
                      },
                      notify: function (t, e) {
                        return this.editorController
                          ? a("trix-" + t, { onElement: this, attributes: e })
                          : void 0;
                      },
                      setInputElementValue: function (t) {
                        var e;
                        return null != (e = this.inputElement)
                          ? (e.value = t)
                          : void 0;
                      },
                      initialize: function () {
                        return p(this), s(this);
                      },
                      connect: function () {
                        return this.hasAttribute("data-trix-internal")
                          ? void 0
                          : (this.editorController ||
                              (a("trix-before-initialize", { onElement: this }),
                              (this.editorController = new t.EditorController({
                                editorElement: this,
                                html: (this.defaultValue = this.value),
                              })),
                              requestAnimationFrame(
                                (function (t) {
                                  return function () {
                                    return a("trix-initialize", {
                                      onElement: t,
                                    });
                                  };
                                })(this)
                              )),
                            this.editorController.registerSelectionManager(),
                            this.registerResetListener(),
                            u(this));
                      },
                      disconnect: function () {
                        var t;
                        return (
                          null != (t = this.editorController) &&
                            t.unregisterSelectionManager(),
                          this.unregisterResetListener()
                        );
                      },
                      registerResetListener: function () {
                        return (
                          (this.resetListener = this.resetBubbled.bind(this)),
                          window.addEventListener(
                            "reset",
                            this.resetListener,
                            !1
                          )
                        );
                      },
                      unregisterResetListener: function () {
                        return window.removeEventListener(
                          "reset",
                          this.resetListener,
                          !1
                        );
                      },
                      resetBubbled: function (t) {
                        var e;
                        return t.target !==
                          (null != (e = this.inputElement) ? e.form : void 0) ||
                          t.defaultPrevented
                          ? void 0
                          : this.reset();
                      },
                      reset: function () {
                        return (this.value = this.defaultValue);
                      },
                    })
                  );
              }.call(this),
              function () {}.call(this));
          }.call(this),
            "object" == a(r) && r.exports
              ? (r.exports = t)
              : void 0 ===
                  (o = "function" == typeof (i = t) ? i.call(e, n, e, r) : i) ||
                (r.exports = o));
        }.call(this));
    }.call(this, n(8).setImmediate, n(11)(t)));
  },
});
//# sourceMappingURL=app.js.map
