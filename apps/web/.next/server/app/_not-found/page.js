(() => {
  var e = {};
  ((e.id = 409),
    (e.ids = [409]),
    (e.modules = {
      399: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
      },
      209: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/action-async-storage.external.js");
      },
      9348: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/work-async-storage.external.js");
      },
      412: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");
      },
      5315: (e) => {
        "use strict";
        e.exports = require("path");
      },
      1420: (e, t, r) => {
        "use strict";
        (r.r(t),
          r.d(t, {
            GlobalError: () => i.a,
            __next_app__: () => u,
            pages: () => c,
            routeModule: () => p,
            tree: () => l,
          }));
        var s = r(1683),
          n = r(6393),
          o = r(9520),
          i = r.n(o),
          a = r(27),
          d = {};
        for (let e in a)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (d[e] = () => a[e]);
        r.d(t, d);
        let l = [
            "",
            {
              children: [
                "/_not-found",
                {
                  children: [
                    "__PAGE__",
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(r.t.bind(r, 3345, 23)),
                        "next/dist/client/components/not-found-error",
                      ],
                    },
                  ],
                },
                {},
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(r.bind(r, 626)),
                "C:\\Users\\rogsh\\Documents\\Antigravity\\Fyndo\\apps\\web\\app\\layout.tsx",
              ],
              "not-found": [
                () => Promise.resolve().then(r.t.bind(r, 3345, 23)),
                "next/dist/client/components/not-found-error",
              ],
            },
          ],
          c = [],
          u = { require: r, loadChunk: () => Promise.resolve() },
          p = new s.AppPageRouteModule({
            definition: {
              kind: n.RouteKind.APP_PAGE,
              page: "/_not-found/page",
              pathname: "/_not-found",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: l },
          });
      },
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
      213: (e, t, r) => {
        "use strict";
        r.d(t, { PageTransition: () => a });
        var s = r(1162),
          n = r(6426),
          o = r(5875),
          i = r(2380);
        function a({ children: e }) {
          let t = (0, i.usePathname)();
          return (0, s.jsx)(n.M, {
            mode: "wait",
            children: (0, s.jsx)(
              o.E.div,
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
        r.a(e, async (e, s) => {
          try {
            (r.r(t), r.d(t, { default: () => c, metadata: () => u }));
            var n = r(2241),
              o = r(997),
              i = r.n(o);
            r(463);
            var a = r(4511),
              d = r(1378),
              l = e([d]);
            d = (l.then ? (await l)() : l)[0];
            let u = {
              title: "Fyndo - Core Marketplace & Social Discovery",
              description:
                "The premier destination for highly-curated luxury products.",
            };
            function c({ children: e }) {
              return (0, n.jsx)("html", {
                lang: "en",
                className: "dark",
                children: (0, n.jsxs)("body", {
                  className: i().className,
                  children: [
                    (0, n.jsx)(a.w, {}),
                    (0, n.jsx)("main", {
                      className: "pt-20",
                      children: (0, n.jsx)(d.n, { children: e }),
                    }),
                  ],
                }),
              });
            }
            s();
          } catch (e) {
            s(e);
          }
        });
      },
      4511: (e, t, r) => {
        "use strict";
        r.d(t, { w: () => d });
        var s = r(2241),
          n = r(3825),
          o = r(1469),
          i = r(5077),
          a = r(2079);
        function d() {
          return (0, s.jsxs)("nav", {
            className:
              "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-border/50 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/40",
            children: [
              (0, s.jsxs)("div", {
                className: "flex items-center gap-8",
                children: [
                  (0, s.jsx)(n.default, {
                    href: "/",
                    className:
                      "text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity",
                    children: "Fyndo",
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground",
                    children: [
                      (0, s.jsx)(n.default, {
                        href: "/",
                        className: "hover:text-foreground transition-colors",
                        children: "Discover",
                      }),
                      (0, s.jsx)(n.default, {
                        href: "/collections",
                        className: "hover:text-foreground transition-colors",
                        children: "Collections",
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "flex items-center gap-4",
                children: [
                  (0, s.jsx)("button", {
                    className:
                      "p-2 text-muted-foreground hover:text-foreground transition-colors",
                    children: (0, s.jsx)(o.Z, { className: "w-5 h-5" }),
                  }),
                  (0, s.jsx)("button", {
                    className:
                      "p-2 text-muted-foreground hover:text-foreground transition-colors",
                    children: (0, s.jsx)(i.Z, { className: "w-5 h-5" }),
                  }),
                  (0, s.jsx)("button", {
                    className:
                      "p-2 text-muted-foreground hover:text-foreground transition-colors",
                    children: (0, s.jsx)(a.Z, { className: "w-5 h-5" }),
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
          async (e, s) => {
            try {
              r.d(t, { n: () => e });
              var n = r(8106);
              let e = (
                await (0, n.createProxy)(
                  String.raw`C:\Users\rogsh\Documents\Antigravity\Fyndo\apps\web\components\page-transition.tsx`,
                )
              ).PageTransition;
              s();
            } catch (e) {
              s(e);
            }
          },
          1,
        );
      },
      463: () => {},
    }));
  var t = require("../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    s = t.X(0, [630, 59], () => r(1420));
  module.exports = s;
})();
