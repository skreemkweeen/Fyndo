(() => {
  var e = {};
  ((e.id = 463),
    (e.ids = [463]),
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
      2130: (e, t, r) => {
        "use strict";
        (r.r(t),
          r.d(t, {
            GlobalError: () => n.a,
            __next_app__: () => x,
            pages: () => c,
            routeModule: () => m,
            tree: () => d,
          }));
        var s = r(1683),
          a = r(6393),
          i = r(9520),
          n = r.n(i),
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
                "moderation",
                {
                  children: [
                    "__PAGE__",
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(r.bind(r, 8674)),
                        "C:\\Users\\rogsh\\Documents\\Antigravity\\Fyndo\\apps\\admin\\app\\moderation\\page.tsx",
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
          c = [
            "C:\\Users\\rogsh\\Documents\\Antigravity\\Fyndo\\apps\\admin\\app\\moderation\\page.tsx",
          ],
          x = { require: r, loadChunk: () => Promise.resolve() },
          m = new s.AppPageRouteModule({
            definition: {
              kind: a.RouteKind.APP_PAGE,
              page: "/moderation/page",
              pathname: "/moderation",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
      7266: () => {},
      6910: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 7206));
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
      7206: (e, t, r) => {
        "use strict";
        (r.r(t), r.d(t, { default: () => x }));
        var s = r(1162),
          a = r(247);
        let i = (0, a.Z)("Search", [
            ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
            ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
          ]),
          n = (0, a.Z)("Filter", [
            [
              "polygon",
              {
                points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",
                key: "1yg77f",
              },
            ],
          ]),
          o = (0, a.Z)("TriangleAlert", [
            [
              "path",
              {
                d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
                key: "wmoenq",
              },
            ],
            ["path", { d: "M12 9v4", key: "juzpu7" }],
            ["path", { d: "M12 17h.01", key: "p32p05" }],
          ]);
        var l = r(5544);
        let d = (0, a.Z)("X", [
          ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
          ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
        ]);
        var c = r(1398);
        function x() {
          let [e] = (0, c.useState)([
            {
              id: "MOD-101",
              targetType: "product",
              targetId: "PROD-A",
              reason: "Potential Counterfeit",
              aiScore: 94,
              status: "pending",
              reporter: "AI_WATCHDOG",
            },
            {
              id: "MOD-102",
              targetType: "stream",
              targetId: "STRM-B",
              reason: "TOS Violation",
              aiScore: 88,
              status: "investigating",
              reporter: "user_88a",
            },
            {
              id: "MOD-103",
              targetType: "store",
              targetId: "STR-C",
              reason: "IP Infringement",
              aiScore: 72,
              status: "pending",
              reporter: "brand_rep",
            },
          ]);
          return (0, s.jsxs)("div", {
            className:
              "p-10 max-w-7xl mx-auto h-[calc(100vh-4rem)] flex flex-col",
            children: [
              (0, s.jsxs)("header", {
                className: "mb-8 shrink-0",
                children: [
                  (0, s.jsx)("h1", {
                    className:
                      "text-3xl font-black tracking-tight text-white mb-2",
                    children: "Trust & Safety Queue",
                  }),
                  (0, s.jsx)("p", {
                    className: "text-neutral-400",
                    children:
                      "AI-flagged cases and user reports pending manual review.",
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className:
                  "bg-neutral-900 border border-white/10 rounded-2xl flex flex-col flex-1 overflow-hidden",
                children: [
                  (0, s.jsxs)("div", {
                    className:
                      "p-4 border-b border-white/10 flex items-center justify-between bg-black/20",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "flex gap-4",
                        children: [
                          (0, s.jsx)("button", {
                            className:
                              "text-white font-medium text-sm border-b-2 border-red-500 pb-4 -mb-4",
                            children: "Pending Review (142)",
                          }),
                          (0, s.jsx)("button", {
                            className:
                              "text-neutral-500 hover:text-white font-medium text-sm pb-4 -mb-4 transition-colors",
                            children: "Investigating (18)",
                          }),
                          (0, s.jsx)("button", {
                            className:
                              "text-neutral-500 hover:text-white font-medium text-sm pb-4 -mb-4 transition-colors",
                            children: "Action Taken (8,421)",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "flex gap-2",
                        children: [
                          (0, s.jsx)("button", {
                            className:
                              "p-2 border border-white/10 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors",
                            children: (0, s.jsx)(i, { className: "w-4 h-4" }),
                          }),
                          (0, s.jsx)("button", {
                            className:
                              "p-2 border border-white/10 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors",
                            children: (0, s.jsx)(n, { className: "w-4 h-4" }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: "flex-1 overflow-auto p-4 space-y-3",
                    children: e.map((e) =>
                      (0, s.jsxs)(
                        "div",
                        {
                          className:
                            "bg-black/40 border border-white/5 rounded-xl p-5 flex items-start justify-between group hover:border-white/10 transition-colors",
                          children: [
                            (0, s.jsxs)("div", {
                              className: "flex gap-4",
                              children: [
                                (0, s.jsx)("div", {
                                  className: `w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${e.aiScore > 90 ? "bg-red-500/10" : "bg-amber-500/10"}`,
                                  children: (0, s.jsx)(o, {
                                    className: `w-6 h-6 ${e.aiScore > 90 ? "text-red-500" : "text-amber-500"}`,
                                  }),
                                }),
                                (0, s.jsxs)("div", {
                                  children: [
                                    (0, s.jsxs)("div", {
                                      className: "flex items-center gap-2 mb-1",
                                      children: [
                                        (0, s.jsx)("span", {
                                          className:
                                            "font-mono text-xs text-neutral-500",
                                          children: e.id,
                                        }),
                                        (0, s.jsx)("span", {
                                          className:
                                            "bg-white/10 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm",
                                          children: e.targetType,
                                        }),
                                      ],
                                    }),
                                    (0, s.jsx)("h3", {
                                      className:
                                        "text-lg font-bold text-white mb-1",
                                      children: e.reason,
                                    }),
                                    (0, s.jsxs)("p", {
                                      className:
                                        "text-sm text-neutral-400 mb-3",
                                      children: [
                                        "Reported by: ",
                                        (0, s.jsx)("span", {
                                          className:
                                            "font-mono text-neutral-300",
                                          children: e.reporter,
                                        }),
                                      ],
                                    }),
                                    (0, s.jsxs)("div", {
                                      className: "flex items-center gap-2",
                                      children: [
                                        (0, s.jsx)(l.Z, {
                                          className: "w-4 h-4 text-indigo-400",
                                        }),
                                        (0, s.jsxs)("span", {
                                          className:
                                            "text-xs font-medium text-indigo-300",
                                          children: [
                                            "AI Confidence: ",
                                            e.aiScore,
                                            "%",
                                          ],
                                        }),
                                        (0, s.jsx)("div", {
                                          className:
                                            "w-32 h-1.5 bg-neutral-800 rounded-full ml-2 overflow-hidden",
                                          children: (0, s.jsx)("div", {
                                            className: "h-full bg-indigo-500",
                                            style: { width: `${e.aiScore}%` },
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, s.jsxs)("button", {
                                  className:
                                    "px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-medium rounded-lg transition-colors flex items-center gap-2",
                                  children: [
                                    (0, s.jsx)(d, { className: "w-4 h-4" }),
                                    " Dismiss",
                                  ],
                                }),
                                (0, s.jsxs)("button", {
                                  className:
                                    "px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(220,38,38,0.3)]",
                                  children: [
                                    (0, s.jsx)(l.Z, { className: "w-4 h-4" }),
                                    " Suspend",
                                  ],
                                }),
                              ],
                            }),
                          ],
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
      },
      247: (e, t, r) => {
        "use strict";
        r.d(t, { Z: () => l });
        var s = r(1398);
        let a = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
          i = (...e) =>
            e.filter((e, t, r) => !!e && r.indexOf(e) === t).join(" ");
        var n = {
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        };
        let o = (0, s.forwardRef)(
            (
              {
                color: e = "currentColor",
                size: t = 24,
                strokeWidth: r = 2,
                absoluteStrokeWidth: a,
                className: o = "",
                children: l,
                iconNode: d,
                ...c
              },
              x,
            ) =>
              (0, s.createElement)(
                "svg",
                {
                  ref: x,
                  ...n,
                  width: t,
                  height: t,
                  stroke: e,
                  strokeWidth: a ? (24 * Number(r)) / Number(t) : r,
                  className: i("lucide", o),
                  ...c,
                },
                [
                  ...d.map(([e, t]) => (0, s.createElement)(e, t)),
                  ...(Array.isArray(l) ? l : [l]),
                ],
              ),
          ),
          l = (e, t) => {
            let r = (0, s.forwardRef)(({ className: r, ...n }, l) =>
              (0, s.createElement)(o, {
                ref: l,
                iconNode: t,
                className: i(`lucide-${a(e)}`, r),
                ...n,
              }),
            );
            return ((r.displayName = `${e}`), r);
          };
      },
      5544: (e, t, r) => {
        "use strict";
        r.d(t, { Z: () => s });
        let s = (0, r(247).Z)("Shield", [
          [
            "path",
            {
              d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
              key: "oel41y",
            },
          ],
        ]);
      },
      626: (e, t, r) => {
        "use strict";
        (r.r(t), r.d(t, { default: () => c, metadata: () => d }));
        var s = r(2241),
          a = r(1690),
          i = r(3027),
          n = r(7146),
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
                          children: (0, s.jsx)(a.Z, {
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
                            (0, s.jsx)(a.Z, { className: "w-4 h-4" }),
                            " Moderation Queue",
                          ],
                        }),
                        (0, s.jsxs)("a", {
                          href: "/disputes",
                          className:
                            "flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors font-medium text-sm",
                          children: [
                            (0, s.jsx)(n.Z, { className: "w-4 h-4" }),
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
      8674: (e, t, r) => {
        "use strict";
        r.a(
          e,
          async (e, s) => {
            try {
              (r.r(t), r.d(t, { default: () => e }));
              var a = r(8106);
              let e = (
                await (0, a.createProxy)(
                  String.raw`C:\Users\rogsh\Documents\Antigravity\Fyndo\apps\admin\app\moderation\page.tsx`,
                )
              ).default;
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
    s = t.X(0, [394], () => r(2130));
  module.exports = s;
})();
