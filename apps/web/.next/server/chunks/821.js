((exports.id = 821),
  (exports.ids = [821]),
  (exports.modules = {
    6200: (e, t, r) => {
      (Promise.resolve().then(r.bind(r, 213)),
        Promise.resolve().then(r.t.bind(r, 1397, 23)));
    },
    2372: (e, t, r) => {
      (Promise.resolve().then(r.t.bind(r, 6931, 23)),
        Promise.resolve().then(r.t.bind(r, 9112, 23)),
        Promise.resolve().then(r.t.bind(r, 6074, 23)),
        Promise.resolve().then(r.t.bind(r, 4914, 23)),
        Promise.resolve().then(r.t.bind(r, 7107, 23)),
        Promise.resolve().then(r.t.bind(r, 5103, 23)),
        Promise.resolve().then(r.t.bind(r, 9416, 23)));
    },
    7034: () => {},
    213: (e, t, r) => {
      "use strict";
      r.d(t, { PageTransition: () => u });
      var n = r(1162),
        o = r(6426),
        i = r(5875),
        s = r(2380);
      function u({ children: e }) {
        let t = (0, s.usePathname)();
        return (0, n.jsx)(o.M, {
          mode: "wait",
          children: (0, n.jsx)(
            i.E.div,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -10 },
              transition: { duration: 0.2, ease: "easeInOut" },
              className: "flex min-h-screen flex-col",
              children: e,
            },
            t,
          ),
        });
      }
    },
    626: (e, t, r) => {
      "use strict";
      r.a(e, async (e, n) => {
        try {
          (r.r(t), r.d(t, { default: () => d, metadata: () => l }));
          var o = r(2241),
            i = r(997),
            s = r.n(i);
          r(463);
          var u = r(4511),
            a = r(1378),
            c = e([a]);
          a = (c.then ? (await c)() : c)[0];
          let l = {
            title: "Fyndo - Core Marketplace & Social Discovery",
            description:
              "The premier destination for highly-curated luxury products.",
          };
          function d({ children: e }) {
            return (0, o.jsx)("html", {
              lang: "en",
              className: "dark",
              children: (0, o.jsxs)("body", {
                className: s().className,
                children: [
                  (0, o.jsx)(u.w, {}),
                  (0, o.jsx)("main", {
                    className: "pt-20",
                    children: (0, o.jsx)(a.n, { children: e }),
                  }),
                ],
              }),
            });
          }
          n();
        } catch (e) {
          n(e);
        }
      });
    },
    4511: (e, t, r) => {
      "use strict";
      r.d(t, { w: () => a });
      var n = r(2241),
        o = r(3825),
        i = r(1469),
        s = r(5077),
        u = r(2079);
      function a() {
        return (0, n.jsxs)("nav", {
          className:
            "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-border/50 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/40",
          children: [
            (0, n.jsxs)("div", {
              className: "flex items-center gap-8",
              children: [
                (0, n.jsx)(o.default, {
                  href: "/",
                  className:
                    "text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity",
                  children: "Fyndo",
                }),
                (0, n.jsxs)("div", {
                  className:
                    "hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground",
                  children: [
                    (0, n.jsx)(o.default, {
                      href: "/",
                      className: "hover:text-foreground transition-colors",
                      children: "Discover",
                    }),
                    (0, n.jsx)(o.default, {
                      href: "/collections",
                      className: "hover:text-foreground transition-colors",
                      children: "Collections",
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: "flex items-center gap-4",
              children: [
                (0, n.jsx)("button", {
                  className:
                    "p-2 text-muted-foreground hover:text-foreground transition-colors",
                  children: (0, n.jsx)(i.Z, { className: "w-5 h-5" }),
                }),
                (0, n.jsx)("button", {
                  className:
                    "p-2 text-muted-foreground hover:text-foreground transition-colors",
                  children: (0, n.jsx)(s.Z, { className: "w-5 h-5" }),
                }),
                (0, n.jsx)("button", {
                  className:
                    "p-2 text-muted-foreground hover:text-foreground transition-colors",
                  children: (0, n.jsx)(u.Z, { className: "w-5 h-5" }),
                }),
              ],
            }),
          ],
        });
      }
    },
    1378: (e, t, r) => {
      "use strict";
      r.a(
        e,
        async (e, n) => {
          try {
            r.d(t, { n: () => e });
            var o = r(8106);
            let e = (
              await (0, o.createProxy)(
                String.raw`C:\Users\rogsh\Documents\Antigravity\Fyndo\apps\web\components\page-transition.tsx`,
              )
            ).PageTransition;
            n();
          } catch (e) {
            n(e);
          }
        },
        1,
      );
    },
    2542: (e, t, r) => {
      "use strict";
      var n = r(5007);
      r.o(n, "notFound") &&
        r.d(t, {
          notFound: function () {
            return n.notFound;
          },
        });
    },
    7767: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isNextRouterError", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }));
      let n = r(981),
        o = r(3226);
      function i(e) {
        return (0, o.isRedirectError)(e) || (0, n.isNotFoundError)(e);
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    5007: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          ReadonlyURLSearchParams: function () {
            return u;
          },
          RedirectType: function () {
            return n.RedirectType;
          },
          notFound: function () {
            return o.notFound;
          },
          permanentRedirect: function () {
            return n.permanentRedirect;
          },
          redirect: function () {
            return n.redirect;
          },
          unstable_rethrow: function () {
            return i.unstable_rethrow;
          },
        }));
      let n = r(3226),
        o = r(981),
        i = r(7899);
      class s extends Error {
        constructor() {
          super(
            "Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams",
          );
        }
      }
      class u extends URLSearchParams {
        append() {
          throw new s();
        }
        delete() {
          throw new s();
        }
        set() {
          throw new s();
        }
        sort() {
          throw new s();
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    7287: (e, t) => {
      "use strict";
      var r;
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RedirectStatusCode", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        (function (e) {
          ((e[(e.SeeOther = 303)] = "SeeOther"),
            (e[(e.TemporaryRedirect = 307)] = "TemporaryRedirect"),
            (e[(e.PermanentRedirect = 308)] = "PermanentRedirect"));
        })(r || (r = {})),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default)));
    },
    3226: (e, t, r) => {
      "use strict";
      var n;
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          RedirectType: function () {
            return n;
          },
          getRedirectError: function () {
            return u;
          },
          getRedirectStatusCodeFromError: function () {
            return p;
          },
          getRedirectTypeFromError: function () {
            return f;
          },
          getURLFromRedirectError: function () {
            return l;
          },
          isRedirectError: function () {
            return d;
          },
          permanentRedirect: function () {
            return c;
          },
          redirect: function () {
            return a;
          },
        }));
      let o = r(209),
        i = r(7287),
        s = "NEXT_REDIRECT";
      function u(e, t, r) {
        void 0 === r && (r = i.RedirectStatusCode.TemporaryRedirect);
        let n = Error(s);
        return ((n.digest = s + ";" + t + ";" + e + ";" + r + ";"), n);
      }
      function a(e, t) {
        let r = o.actionAsyncStorage.getStore();
        throw u(
          e,
          t || ((null == r ? void 0 : r.isAction) ? "push" : "replace"),
          i.RedirectStatusCode.TemporaryRedirect,
        );
      }
      function c(e, t) {
        throw (
          void 0 === t && (t = "replace"),
          u(e, t, i.RedirectStatusCode.PermanentRedirect)
        );
      }
      function d(e) {
        if (
          "object" != typeof e ||
          null === e ||
          !("digest" in e) ||
          "string" != typeof e.digest
        )
          return !1;
        let t = e.digest.split(";"),
          [r, n] = t,
          o = t.slice(2, -2).join(";"),
          u = Number(t.at(-2));
        return (
          r === s &&
          ("replace" === n || "push" === n) &&
          "string" == typeof o &&
          !isNaN(u) &&
          u in i.RedirectStatusCode
        );
      }
      function l(e) {
        return d(e) ? e.digest.split(";").slice(2, -2).join(";") : null;
      }
      function f(e) {
        if (!d(e)) throw Error("Not a redirect error");
        return e.digest.split(";", 2)[1];
      }
      function p(e) {
        if (!d(e)) throw Error("Not a redirect error");
        return Number(e.digest.split(";").at(-2));
      }
      ((function (e) {
        ((e.push = "push"), (e.replace = "replace"));
      })(n || (n = {})),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default)));
    },
    7899: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "unstable_rethrow", {
          enumerable: !0,
          get: function () {
            return function e(t) {
              if (
                (0, s.isNextRouterError)(t) ||
                (0, i.isBailoutToCSRError)(t) ||
                (0, n.isDynamicUsageError)(t) ||
                (0, o.isPostpone)(t)
              )
                throw t;
              t instanceof Error && "cause" in t && e(t.cause);
            };
          },
        }));
      let n = r(3199),
        o = r(6717),
        i = r(9261),
        s = r(7767);
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    3199: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isDynamicUsageError", {
          enumerable: !0,
          get: function () {
            return u;
          },
        }));
      let n = r(5643),
        o = r(9261),
        i = r(7767),
        s = r(4314),
        u = (e) =>
          (0, n.isDynamicServerError)(e) ||
          (0, o.isBailoutToCSRError)(e) ||
          (0, i.isNextRouterError)(e) ||
          (0, s.isDynamicPostpone)(e);
    },
    6717: (e, t) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isPostpone", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }));
      let r = Symbol.for("react.postpone");
      function n(e) {
        return "object" == typeof e && null !== e && e.$$typeof === r;
      }
    },
    9261: (e, t) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          BailoutToCSRError: function () {
            return n;
          },
          isBailoutToCSRError: function () {
            return o;
          },
        }));
      let r = "BAILOUT_TO_CLIENT_SIDE_RENDERING";
      class n extends Error {
        constructor(e) {
          (super("Bail out to client-side rendering: " + e),
            (this.reason = e),
            (this.digest = r));
        }
      }
      function o(e) {
        return (
          "object" == typeof e && null !== e && "digest" in e && e.digest === r
        );
      }
    },
    463: () => {},
  }));
