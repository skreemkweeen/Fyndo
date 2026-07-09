(() => {
  var e = {};
  ((e.id = 835),
    (e.ids = [835]),
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
      5036: (e, t, r) => {
        "use strict";
        (r.r(t),
          r.d(t, {
            GlobalError: () => i.a,
            __next_app__: () => u,
            pages: () => c,
            routeModule: () => x,
            tree: () => l,
          }));
        var s = r(1683),
          a = r(6393),
          n = r(9520),
          i = r.n(n),
          o = r(27),
          d = {};
        for (let e in o)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (d[e] = () => o[e]);
        r.d(t, d);
        let l = [
            "",
            {
              children: [
                "creator",
                {
                  children: [
                    "[handle]",
                    {
                      children: [
                        "__PAGE__",
                        {},
                        {
                          page: [
                            () => Promise.resolve().then(r.bind(r, 4159)),
                            "C:\\Users\\rogsh\\Documents\\Antigravity\\Fyndo\\apps\\web\\app\\creator\\[handle]\\page.tsx",
                          ],
                        },
                      ],
                    },
                    {},
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
          c = [
            "C:\\Users\\rogsh\\Documents\\Antigravity\\Fyndo\\apps\\web\\app\\creator\\[handle]\\page.tsx",
          ],
          u = { require: r, loadChunk: () => Promise.resolve() },
          x = new s.AppPageRouteModule({
            definition: {
              kind: a.RouteKind.APP_PAGE,
              page: "/creator/[handle]/page",
              pathname: "/creator/[handle]",
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
      937: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 9602));
      },
      213: (e, t, r) => {
        "use strict";
        r.d(t, { PageTransition: () => o });
        var s = r(1162),
          a = r(6426),
          n = r(5875),
          i = r(2380);
        function o({ children: e }) {
          let t = (0, i.usePathname)();
          return (0, s.jsx)(a.M, {
            mode: "wait",
            children: (0, s.jsx)(
              n.E.div,
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
      9602: (e, t, r) => {
        "use strict";
        (r.r(t), r.d(t, { Drawer: () => i }));
        var s = r(1162),
          a = r(8250),
          n = r(3025);
        function i({ isOpen: e, onClose: t, children: r }) {
          return (0, s.jsx)(a.M, {
            children:
              e &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(n.E.div, {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                    onClick: t,
                    className:
                      "fixed inset-0 z-40 bg-black/40 backdrop-blur-sm",
                  }),
                  (0, s.jsxs)(n.E.div, {
                    initial: { y: "100%" },
                    animate: { y: 0 },
                    exit: { y: "100%" },
                    transition: { type: "spring", bounce: 0, duration: 0.4 },
                    className:
                      "fixed bottom-0 left-0 right-0 z-50 h-[85vh] bg-background/80 backdrop-blur-2xl border-t border-border rounded-t-[2rem] p-6 shadow-2xl",
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "mx-auto w-12 h-1.5 rounded-full bg-muted mb-8",
                      }),
                      r,
                    ],
                  }),
                ],
              }),
          });
        }
      },
      4159: (e, t, r) => {
        "use strict";
        r.a(e, async (e, s) => {
          try {
            (r.r(t), r.d(t, { default: () => l, dynamic: () => c }));
            var a = r(2241),
              n = r(6762),
              i = r(3221),
              o = r(164),
              d = e([n]);
            n = (d.then ? (await d)() : d)[0];
            let c = "force-dynamic";
            async function l({ params: e }) {
              let { handle: t } = await e,
                r = new i.y(),
                s = await r.search("luxury");
              return (0, a.jsxs)("div", {
                className: "container mx-auto px-4 py-12",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "flex flex-col items-center text-center space-y-6 mb-16",
                    children: [
                      (0, a.jsx)("div", {
                        className:
                          "w-32 h-32 rounded-full bg-neutral-200 dark:bg-neutral-800 border-4 border-background shadow-xl",
                      }),
                      (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsxs)("h1", {
                            className: "text-3xl font-bold tracking-tight",
                            children: ["@", t],
                          }),
                          (0, a.jsx)("p", {
                            className:
                              "text-muted-foreground mt-2 max-w-md mx-auto",
                            children:
                              "Curator of fine vintage goods and modern minimalism.",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("button", {
                        className:
                          "flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-medium hover:scale-105 transition-transform",
                        children: [
                          (0, a.jsx)(o.Z, { className: "w-4 h-4" }),
                          "Follow",
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "space-y-8",
                    children: [
                      (0, a.jsx)("div", {
                        className: "flex items-center justify-between",
                        children: (0, a.jsx)("h2", {
                          className: "text-2xl font-bold tracking-tight",
                          children: "Curated Collection",
                        }),
                      }),
                      (0, a.jsx)(n.SB, {
                        children: s.map((e) =>
                          (0, a.jsx)(
                            n.xh,
                            {
                              title: e.title,
                              description: `$${(e.price / 100).toFixed(2)}`,
                              header: (0, a.jsx)("div", {
                                className:
                                  "flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 flex items-center justify-center",
                              }),
                            },
                            e.id,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              });
            }
            s();
          } catch (e) {
            s(e);
          }
        });
      },
      626: (e, t, r) => {
        "use strict";
        r.a(e, async (e, s) => {
          try {
            (r.r(t), r.d(t, { default: () => c, metadata: () => u }));
            var a = r(2241),
              n = r(997),
              i = r.n(n);
            r(463);
            var o = r(4511),
              d = r(1378),
              l = e([d]);
            d = (l.then ? (await l)() : l)[0];
            let u = {
              title: "Fyndo - Core Marketplace & Social Discovery",
              description:
                "The premier destination for highly-curated luxury products.",
            };
            function c({ children: e }) {
              return (0, a.jsx)("html", {
                lang: "en",
                className: "dark",
                children: (0, a.jsxs)("body", {
                  className: i().className,
                  children: [
                    (0, a.jsx)(o.w, {}),
                    (0, a.jsx)("main", {
                      className: "pt-20",
                      children: (0, a.jsx)(d.n, { children: e }),
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
          a = r(3825),
          n = r(1469),
          i = r(5077),
          o = r(2079);
        function d() {
          return (0, s.jsxs)("nav", {
            className:
              "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-border/50 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/40",
            children: [
              (0, s.jsxs)("div", {
                className: "flex items-center gap-8",
                children: [
                  (0, s.jsx)(a.default, {
                    href: "/",
                    className:
                      "text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity",
                    children: "Fyndo",
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground",
                    children: [
                      (0, s.jsx)(a.default, {
                        href: "/",
                        className: "hover:text-foreground transition-colors",
                        children: "Discover",
                      }),
                      (0, s.jsx)(a.default, {
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
                    children: (0, s.jsx)(n.Z, { className: "w-5 h-5" }),
                  }),
                  (0, s.jsx)("button", {
                    className:
                      "p-2 text-muted-foreground hover:text-foreground transition-colors",
                    children: (0, s.jsx)(i.Z, { className: "w-5 h-5" }),
                  }),
                  (0, s.jsx)("button", {
                    className:
                      "p-2 text-muted-foreground hover:text-foreground transition-colors",
                    children: (0, s.jsx)(o.Z, { className: "w-5 h-5" }),
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
              var a = r(8106);
              let e = (
                await (0, a.createProxy)(
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
      3221: (e, t, r) => {
        "use strict";
        r.d(t, { y: () => s });
        class s {
          async search(e) {
            return (
              console.log("Searching for:", e),
              [
                {
                  id: "mock-1",
                  storeId: "store-1",
                  title: "Apple Vision Pro",
                  description: "Spatial computing is here.",
                  price: 349900,
                  saleType: "fixed",
                  inventoryCount: 5,
                  images: ["https://example.com/vision-pro.jpg"],
                  createdAt: new Date(),
                  updatedAt: new Date(),
                },
                {
                  id: "mock-2",
                  storeId: "store-1",
                  title: "Linear Mouse",
                  description: "The minimalist workhorse.",
                  price: 12900,
                  saleType: "fixed",
                  inventoryCount: 15,
                  images: ["https://example.com/linear-mouse.jpg"],
                  createdAt: new Date(),
                  updatedAt: new Date(),
                },
                {
                  id: "mock-3",
                  storeId: "store-2",
                  title: "Vintage Leather Jacket",
                  description: "An exquisite piece of history.",
                  price: 25e3,
                  saleType: "fixed",
                  inventoryCount: 1,
                  images: ["https://example.com/vintage-jacket.jpg"],
                  createdAt: new Date(),
                  updatedAt: new Date(),
                },
              ]
            );
          }
        }
      },
      164: (e, t, r) => {
        "use strict";
        r.d(t, { Z: () => s });
        let s = (0, r(3974).Z)("UserPlus", [
          [
            "path",
            { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" },
          ],
          ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
          ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
          ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }],
        ]);
      },
      4682: (e, t, r) => {
        "use strict";
        r.d(t, { S: () => o, x: () => d });
        var s = r(2241),
          a = r(1694),
          n = r(8557);
        function i(...e) {
          return (0, n.m6)((0, a.W)(e));
        }
        function o({ className: e, children: t }) {
          return (0, s.jsx)("div", {
            className: i(
              "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-4 mx-auto",
              e,
            ),
            children: t,
          });
        }
        function d({
          className: e,
          title: t,
          description: r,
          header: a,
          icon: n,
        }) {
          return (0, s.jsxs)("div", {
            className: i(
              "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
              e,
            ),
            children: [
              a,
              (0, s.jsxs)("div", {
                className:
                  "group-hover/bento:translate-x-2 transition duration-200",
                children: [
                  n,
                  (0, s.jsx)("div", {
                    className:
                      "font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2",
                    children: t,
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300",
                    children: r,
                  }),
                ],
              }),
            ],
          });
        }
      },
      344: (e, t, r) => {
        "use strict";
        r.a(
          e,
          async (e, t) => {
            try {
              var s = r(8106);
              ((
                await (0, s.createProxy)(
                  String.raw`C:\Users\rogsh\Documents\Antigravity\Fyndo\packages\ui\src\components\drawer.tsx`,
                )
              ).Drawer,
                t());
            } catch (e) {
              t(e);
            }
          },
          1,
        );
      },
      9817: (e, t, r) => {
        "use strict";
        r(2241);
      },
      6762: (e, t, r) => {
        "use strict";
        r.a(e, async (e, s) => {
          try {
            r.d(t, { SB: () => a.S, xh: () => a.x });
            var a = r(4682);
            r(9817);
            var n = r(344),
              i = e([n]);
            ((n = (i.then ? (await i)() : i)[0]), s());
          } catch (e) {
            s(e);
          }
        });
      },
      463: () => {},
    }));
  var t = require("../../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    s = t.X(0, [630, 59, 431], () => r(5036));
  module.exports = s;
})();
