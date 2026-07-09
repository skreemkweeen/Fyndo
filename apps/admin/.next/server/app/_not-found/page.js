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
      9041: (e, t, r) => {
        "use strict";
        (r.r(t),
          r.d(t, {
            GlobalError: () => a.a,
            __next_app__: () => x,
            pages: () => c,
            routeModule: () => m,
            tree: () => d,
          }));
        var s = r(1683),
          n = r(6393),
          i = r(9520),
          a = r.n(i),
          o = r(27),
          l = {};
        for (let e in o)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (l[e] = () => o[e]);
        r.d(t, l);
        let d = [
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
                "C:\\Users\\rogsh\\Documents\\Antigravity\\Fyndo\\apps\\admin\\app\\layout.tsx",
              ],
              "not-found": [
                () => Promise.resolve().then(r.t.bind(r, 3345, 23)),
                "next/dist/client/components/not-found-error",
              ],
            },
          ],
          c = [],
          x = { require: r, loadChunk: () => Promise.resolve() },
          m = new s.AppPageRouteModule({
            definition: {
              kind: n.RouteKind.APP_PAGE,
              page: "/_not-found/page",
              pathname: "/_not-found",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
      7266: () => {},
      2372: (e, t, r) => {
        (Promise.resolve().then(r.t.bind(r, 6931, 23)),
          Promise.resolve().then(r.t.bind(r, 9112, 23)),
          Promise.resolve().then(r.t.bind(r, 6074, 23)),
          Promise.resolve().then(r.t.bind(r, 4914, 23)),
          Promise.resolve().then(r.t.bind(r, 7107, 23)),
          Promise.resolve().then(r.t.bind(r, 5103, 23)),
          Promise.resolve().then(r.t.bind(r, 9416, 23)));
      },
      626: (e, t, r) => {
        "use strict";
        (r.r(t), r.d(t, { default: () => c, metadata: () => d }));
        var s = r(2241),
          n = r(1690),
          i = r(3027),
          a = r(7146),
          o = r(121),
          l = r(1469);
        r(463);
        let d = {
          title: "Fyndo Admin | Trust & Safety",
          description: "Platform Administration and Mediation",
        };
        function c({ children: e }) {
          return (0, s.jsx)("html", {
            lang: "en",
            children: (0, s.jsxs)("body", {
              className: "antialiased min-h-screen bg-black text-white flex",
              children: [
                (0, s.jsxs)("aside", {
                  className:
                    "w-64 bg-neutral-900 border-r border-white/10 flex flex-col",
                  children: [
                    (0, s.jsxs)("div", {
                      className:
                        "p-6 border-b border-white/10 flex items-center gap-3",
                      children: [
                        (0, s.jsx)("div", {
                          className:
                            "w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center",
                          children: (0, s.jsx)(n.Z, {
                            className: "w-4 h-4 text-red-500",
                          }),
                        }),
                        (0, s.jsx)("div", {
                          className: "font-bold tracking-tight text-lg",
                          children: "FYNDO ADMIN",
                        }),
                      ],
                    }),
                    (0, s.jsxs)("nav", {
                      className: "flex-1 p-4 space-y-1",
                      children: [
                        (0, s.jsxs)("a", {
                          href: "/",
                          className:
                            "flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors font-medium text-sm",
                          children: [
                            (0, s.jsx)(i.Z, { className: "w-4 h-4" }),
                            " Operations",
                          ],
                        }),
                        (0, s.jsxs)("a", {
                          href: "/moderation",
                          className:
                            "flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors font-medium text-sm",
                          children: [
                            (0, s.jsx)(n.Z, { className: "w-4 h-4" }),
                            " Moderation Queue",
                          ],
                        }),
                        (0, s.jsxs)("a", {
                          href: "/disputes",
                          className:
                            "flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors font-medium text-sm",
                          children: [
                            (0, s.jsx)(a.Z, { className: "w-4 h-4" }),
                            " Disputes & Claims",
                          ],
                        }),
                        (0, s.jsxs)("a", {
                          href: "/users",
                          className:
                            "flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors font-medium text-sm",
                          children: [
                            (0, s.jsx)(o.Z, { className: "w-4 h-4" }),
                            " User Management",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)("main", {
                  className: "flex-1 overflow-y-auto",
                  children: [
                    (0, s.jsxs)("header", {
                      className:
                        "h-16 border-b border-white/10 bg-neutral-900/50 backdrop-blur-md sticky top-0 z-10 flex items-center px-8 justify-between",
                      children: [
                        (0, s.jsxs)("div", {
                          className: "relative w-96",
                          children: [
                            (0, s.jsx)(l.Z, {
                              className:
                                "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500",
                            }),
                            (0, s.jsx)("input", {
                              type: "text",
                              placeholder:
                                "Search orders, users, or dispute IDs...",
                              className:
                                "w-full bg-black/50 border border-white/10 rounded-lg pl-10 pr-4 py-1.5 text-sm focus:outline-none focus:border-white/30",
                            }),
                          ],
                        }),
                        (0, s.jsx)("div", {
                          className: "flex items-center gap-3",
                          children: (0, s.jsxs)("div", {
                            className: "text-right",
                            children: [
                              (0, s.jsx)("div", {
                                className: "text-sm font-medium",
                                children: "System Admin",
                              }),
                              (0, s.jsx)("div", {
                                className:
                                  "text-xs text-red-400 uppercase tracking-wider font-bold",
                                children: "God Mode Active",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    e,
                  ],
                }),
              ],
            }),
          });
        }
      },
      463: () => {},
    }));
  var t = require("../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    s = t.X(0, [394], () => r(9041));
  module.exports = s;
})();
