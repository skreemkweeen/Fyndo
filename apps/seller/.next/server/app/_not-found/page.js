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
      9785: (e, r, t) => {
        "use strict";
        (t.r(r),
          t.d(r, {
            GlobalError: () => i.a,
            __next_app__: () => c,
            pages: () => u,
            routeModule: () => p,
            tree: () => d,
          }));
        var n = t(1683),
          s = t(6393),
          o = t(9520),
          i = t.n(o),
          a = t(27),
          l = {};
        for (let e in a)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (l[e] = () => a[e]);
        t.d(r, l);
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
                        () => Promise.resolve().then(t.t.bind(t, 3345, 23)),
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
                () => Promise.resolve().then(t.bind(t, 626)),
                "C:\\Users\\rogsh\\Documents\\Antigravity\\Fyndo\\apps\\seller\\app\\layout.tsx",
              ],
              "not-found": [
                () => Promise.resolve().then(t.t.bind(t, 3345, 23)),
                "next/dist/client/components/not-found-error",
              ],
            },
          ],
          u = [],
          c = { require: t, loadChunk: () => Promise.resolve() },
          p = new n.AppPageRouteModule({
            definition: {
              kind: s.RouteKind.APP_PAGE,
              page: "/_not-found/page",
              pathname: "/_not-found",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
      5986: () => {},
      2372: (e, r, t) => {
        (Promise.resolve().then(t.t.bind(t, 6931, 23)),
          Promise.resolve().then(t.t.bind(t, 9112, 23)),
          Promise.resolve().then(t.t.bind(t, 6074, 23)),
          Promise.resolve().then(t.t.bind(t, 4914, 23)),
          Promise.resolve().then(t.t.bind(t, 7107, 23)),
          Promise.resolve().then(t.t.bind(t, 5103, 23)),
          Promise.resolve().then(t.t.bind(t, 9416, 23)));
      },
      626: (e, r, t) => {
        "use strict";
        (t.r(r), t.d(r, { default: () => o, metadata: () => s }));
        var n = t(2241);
        t(463);
        let s = {
          title: "Fyndo Seller OS",
          description: "Advanced operating system for premium brands.",
        };
        function o({ children: e }) {
          return (0, n.jsx)("html", {
            lang: "en",
            children: (0, n.jsxs)("body", {
              className:
                "antialiased min-h-screen bg-neutral-950 text-white flex",
              children: [
                (0, n.jsxs)("aside", {
                  className:
                    "w-64 bg-neutral-900 border-r border-white/10 p-6 flex flex-col",
                  children: [
                    (0, n.jsxs)("div", {
                      className: "text-2xl font-black tracking-tighter mb-12",
                      children: [
                        "FYNDO",
                        (0, n.jsx)("span", {
                          className: "text-neutral-500 font-normal ml-1",
                          children: "OS",
                        }),
                      ],
                    }),
                    (0, n.jsxs)("nav", {
                      className: "flex-1 space-y-2",
                      children: [
                        (0, n.jsx)("a", {
                          href: "/",
                          className:
                            "block px-4 py-3 rounded-lg bg-white/5 text-white font-medium hover:bg-white/10 transition-colors",
                          children: "Dashboard",
                        }),
                        (0, n.jsx)("a", {
                          href: "/inventory",
                          className:
                            "block px-4 py-3 rounded-lg text-neutral-400 font-medium hover:bg-white/10 hover:text-white transition-colors",
                          children: "Inventory",
                        }),
                        (0, n.jsx)("a", {
                          href: "/storefront",
                          className:
                            "block px-4 py-3 rounded-lg text-neutral-400 font-medium hover:bg-white/10 hover:text-white transition-colors",
                          children: "Storefront Builder",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsx)("main", {
                  className: "flex-1 overflow-y-auto",
                  children: e,
                }),
              ],
            }),
          });
        }
      },
      463: () => {},
    }));
  var r = require("../../webpack-runtime.js");
  r.C(e);
  var t = (e) => r((r.s = e)),
    n = r.X(0, [869], () => t(9785));
  module.exports = n;
})();
