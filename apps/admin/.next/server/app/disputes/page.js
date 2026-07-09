(() => {
  var e = {};
  ((e.id = 110),
    (e.ids = [110]),
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
      8717: (e, t, s) => {
        "use strict";
        (s.r(t),
          s.d(t, {
            GlobalError: () => i.a,
            __next_app__: () => x,
            pages: () => c,
            routeModule: () => h,
            tree: () => o,
          }));
        var r = s(1683),
          a = s(6393),
          l = s(9520),
          i = s.n(l),
          n = s(27),
          d = {};
        for (let e in n)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (d[e] = () => n[e]);
        s.d(t, d);
        let o = [
            "",
            {
              children: [
                "disputes",
                {
                  children: [
                    "__PAGE__",
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(s.bind(s, 6676)),
                        "C:\\Users\\rogsh\\Documents\\Antigravity\\Fyndo\\apps\\admin\\app\\disputes\\page.tsx",
                      ],
                    },
                  ],
                },
                {},
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(s.bind(s, 626)),
                "C:\\Users\\rogsh\\Documents\\Antigravity\\Fyndo\\apps\\admin\\app\\layout.tsx",
              ],
              "not-found": [
                () => Promise.resolve().then(s.t.bind(s, 3345, 23)),
                "next/dist/client/components/not-found-error",
              ],
            },
          ],
          c = [
            "C:\\Users\\rogsh\\Documents\\Antigravity\\Fyndo\\apps\\admin\\app\\disputes\\page.tsx",
          ],
          x = { require: s, loadChunk: () => Promise.resolve() },
          h = new r.AppPageRouteModule({
            definition: {
              kind: a.RouteKind.APP_PAGE,
              page: "/disputes/page",
              pathname: "/disputes",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: o },
          });
      },
      5003: (e, t, s) => {
        Promise.resolve().then(s.bind(s, 6654));
      },
      7266: () => {},
      2372: (e, t, s) => {
        (Promise.resolve().then(s.t.bind(s, 6931, 23)),
          Promise.resolve().then(s.t.bind(s, 9112, 23)),
          Promise.resolve().then(s.t.bind(s, 6074, 23)),
          Promise.resolve().then(s.t.bind(s, 4914, 23)),
          Promise.resolve().then(s.t.bind(s, 7107, 23)),
          Promise.resolve().then(s.t.bind(s, 5103, 23)),
          Promise.resolve().then(s.t.bind(s, 9416, 23)));
      },
      6654: (e, t, s) => {
        "use strict";
        (s.r(t), s.d(t, { default: () => c }));
        var r = s(1162),
          a = s(247);
        let l = (0, a.Z)("ChevronRight", [
            ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
          ]),
          i = (0, a.Z)("FileText", [
            [
              "path",
              {
                d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
                key: "1rqfz7",
              },
            ],
            ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
            ["path", { d: "M10 9H8", key: "b1mrlr" }],
            ["path", { d: "M16 13H8", key: "t4e002" }],
            ["path", { d: "M16 17H8", key: "z1uh3a" }],
          ]);
        var n = s(5544);
        let d = (0, a.Z)("MessageSquare", [
            [
              "path",
              {
                d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
                key: "1lielz",
              },
            ],
          ]),
          o = (0, a.Z)("Lock", [
            [
              "rect",
              {
                width: "18",
                height: "11",
                x: "3",
                y: "11",
                rx: "2",
                ry: "2",
                key: "1w4ew1",
              },
            ],
            ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
          ]);
        function c() {
          return (0, r.jsxs)("div", {
            className:
              "p-10 max-w-7xl mx-auto h-[calc(100vh-4rem)] flex flex-col",
            children: [
              (0, r.jsxs)("header", {
                className: "mb-8 shrink-0",
                children: [
                  (0, r.jsx)("h1", {
                    className:
                      "text-3xl font-black tracking-tight text-white mb-2",
                    children: "Disputes & Claims Ledger",
                  }),
                  (0, r.jsx)("p", {
                    className: "text-neutral-400",
                    children:
                      "Immutable mediation center for chargebacks and order conflicts.",
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: "flex flex-1 gap-6 min-h-0",
                children: [
                  (0, r.jsxs)("div", {
                    className:
                      "w-1/3 bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden flex flex-col",
                    children: [
                      (0, r.jsx)("div", {
                        className: "p-4 border-b border-white/10 bg-black/20",
                        children: (0, r.jsx)("h2", {
                          className: "font-bold text-white",
                          children: "Active Cases",
                        }),
                      }),
                      (0, r.jsxs)("div", {
                        className: "flex-1 overflow-y-auto",
                        children: [
                          (0, r.jsxs)("div", {
                            className:
                              "p-4 border-b border-white/5 bg-white/5 cursor-pointer relative",
                            children: [
                              (0, r.jsx)("div", {
                                className:
                                  "absolute left-0 top-0 bottom-0 w-1 bg-amber-500",
                              }),
                              (0, r.jsxs)("div", {
                                className:
                                  "flex justify-between items-start mb-2",
                                children: [
                                  (0, r.jsx)("span", {
                                    className:
                                      "font-mono text-xs font-bold text-amber-500",
                                    children: "DISP-98A",
                                  }),
                                  (0, r.jsx)("span", {
                                    className: "text-[10px] text-neutral-500",
                                    children: "2h ago",
                                  }),
                                ],
                              }),
                              (0, r.jsx)("h3", {
                                className:
                                  "font-medium text-sm text-white mb-1",
                                children: "Item Not As Described",
                              }),
                              (0, r.jsx)("p", {
                                className: "text-xs text-neutral-400",
                                children: "Order: ORD-1192X",
                              }),
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            className:
                              "p-4 border-b border-white/5 hover:bg-white/[0.02] cursor-pointer transition-colors",
                            children: [
                              (0, r.jsxs)("div", {
                                className:
                                  "flex justify-between items-start mb-2",
                                children: [
                                  (0, r.jsx)("span", {
                                    className:
                                      "font-mono text-xs font-bold text-neutral-500",
                                    children: "DISP-94C",
                                  }),
                                  (0, r.jsx)("span", {
                                    className: "text-[10px] text-neutral-500",
                                    children: "1d ago",
                                  }),
                                ],
                              }),
                              (0, r.jsx)("h3", {
                                className:
                                  "font-medium text-sm text-white mb-1",
                                children: "Package Never Arrived",
                              }),
                              (0, r.jsx)("p", {
                                className: "text-xs text-neutral-400",
                                children: "Order: ORD-7742Y",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "flex-1 bg-neutral-900 border border-white/10 rounded-2xl flex flex-col",
                    children: [
                      (0, r.jsxs)("div", {
                        className:
                          "p-6 border-b border-white/10 bg-black/20 flex justify-between items-center",
                        children: [
                          (0, r.jsxs)("div", {
                            children: [
                              (0, r.jsxs)("div", {
                                className: "flex items-center gap-2 mb-1",
                                children: [
                                  (0, r.jsx)("h2", {
                                    className: "font-bold text-xl text-white",
                                    children: "Item Not As Described",
                                  }),
                                  (0, r.jsx)("span", {
                                    className:
                                      "bg-amber-500/20 text-amber-500 text-[10px] font-bold uppercase px-2 py-0.5 rounded-sm",
                                    children: "Under Review",
                                  }),
                                ],
                              }),
                              (0, r.jsx)("p", {
                                className: "text-sm text-neutral-400 font-mono",
                                children: "DISP-98A • ORD-1192X",
                              }),
                            ],
                          }),
                          (0, r.jsxs)("button", {
                            className:
                              "bg-white text-black px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-neutral-200 transition-colors",
                            children: [
                              "Resolve Case ",
                              (0, r.jsx)(l, { className: "w-4 h-4" }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "flex-1 overflow-y-auto p-6 space-y-6",
                        children: [
                          (0, r.jsxs)("div", {
                            className: "flex gap-4",
                            children: [
                              (0, r.jsx)("div", {
                                className:
                                  "w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center shrink-0",
                                children: (0, r.jsx)("span", {
                                  className: "text-xs font-bold text-white",
                                  children: "B",
                                }),
                              }),
                              (0, r.jsxs)("div", {
                                children: [
                                  (0, r.jsxs)("div", {
                                    className: "flex items-center gap-2 mb-1",
                                    children: [
                                      (0, r.jsx)("span", {
                                        className:
                                          "font-bold text-sm text-white",
                                        children: "Buyer (buyer_71x)",
                                      }),
                                      (0, r.jsx)("span", {
                                        className: "text-xs text-neutral-500",
                                        children: "Oct 24, 2:14 PM",
                                      }),
                                    ],
                                  }),
                                  (0, r.jsx)("div", {
                                    className:
                                      "bg-neutral-800 p-4 rounded-xl rounded-tl-none text-sm text-neutral-200 mb-2",
                                    children:
                                      "The vintage jacket arrived but it has a large tear on the left sleeve that was not shown in the livestream or the photos.",
                                  }),
                                  (0, r.jsx)("div", {
                                    className: "flex gap-2",
                                    children: (0, r.jsxs)("div", {
                                      className:
                                        "flex items-center gap-1.5 bg-black/50 px-3 py-1.5 rounded-lg border border-white/5 text-xs text-neutral-400 cursor-pointer hover:bg-white/5",
                                      children: [
                                        (0, r.jsx)(i, { className: "w-3 h-3" }),
                                        " evidence_img1.jpg",
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            className: "flex gap-4 flex-row-reverse",
                            children: [
                              (0, r.jsx)("div", {
                                className:
                                  "w-8 h-8 rounded-full bg-indigo-900 flex items-center justify-center shrink-0",
                                children: (0, r.jsx)("span", {
                                  className:
                                    "text-xs font-bold text-indigo-300",
                                  children: "S",
                                }),
                              }),
                              (0, r.jsxs)("div", {
                                className: "text-right",
                                children: [
                                  (0, r.jsxs)("div", {
                                    className:
                                      "flex items-center gap-2 mb-1 justify-end",
                                    children: [
                                      (0, r.jsx)("span", {
                                        className: "text-xs text-neutral-500",
                                        children: "Oct 24, 3:30 PM",
                                      }),
                                      (0, r.jsx)("span", {
                                        className:
                                          "font-bold text-sm text-white",
                                        children: "Seller (Store: RetroRevive)",
                                      }),
                                    ],
                                  }),
                                  (0, r.jsx)("div", {
                                    className:
                                      "bg-indigo-600 p-4 rounded-xl rounded-tr-none text-sm text-white inline-block text-left",
                                    children:
                                      "The wear and tear was explicitly mentioned during the livestream at the 14:20 mark. It is sold as-is.",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            className: "flex gap-4",
                            children: [
                              (0, r.jsx)("div", {
                                className:
                                  "w-8 h-8 rounded-full bg-red-900/50 border border-red-500/20 flex items-center justify-center shrink-0",
                                children: (0, r.jsx)(n.Z, {
                                  className: "w-4 h-4 text-red-500",
                                }),
                              }),
                              (0, r.jsxs)("div", {
                                children: [
                                  (0, r.jsxs)("div", {
                                    className: "flex items-center gap-2 mb-1",
                                    children: [
                                      (0, r.jsx)("span", {
                                        className:
                                          "font-bold text-sm text-red-400",
                                        children: "System Admin",
                                      }),
                                      (0, r.jsx)("span", {
                                        className: "text-xs text-neutral-500",
                                        children: "Oct 24, 4:00 PM",
                                      }),
                                    ],
                                  }),
                                  (0, r.jsx)("div", {
                                    className:
                                      "bg-red-500/10 border border-red-500/20 p-4 rounded-xl rounded-tl-none text-sm text-red-200",
                                    children:
                                      "Admin joined the mediation. Reviewing livestream VOD at 14:20 for confirmation.",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "p-4 border-t border-white/10 bg-black/20",
                        children: [
                          (0, r.jsxs)("div", {
                            className: "relative",
                            children: [
                              (0, r.jsx)("textarea", {
                                className:
                                  "w-full bg-neutral-800 border border-white/10 rounded-xl pl-4 pr-12 py-3 text-sm text-white focus:outline-none focus:border-white/30 resize-none h-14",
                                placeholder:
                                  "Add an immutable message to the ledger...",
                              }),
                              (0, r.jsx)("button", {
                                className:
                                  "absolute right-2 top-2 p-2 bg-white text-black rounded-lg hover:bg-neutral-200 transition-colors",
                                children: (0, r.jsx)(d, {
                                  className: "w-4 h-4",
                                }),
                              }),
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            className:
                              "flex items-center gap-1 mt-2 justify-end text-[10px] text-neutral-500 font-mono",
                            children: [
                              (0, r.jsx)(o, { className: "w-3 h-3" }),
                              " Messages are cryptographically logged and cannot be deleted.",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
      },
      247: (e, t, s) => {
        "use strict";
        s.d(t, { Z: () => d });
        var r = s(1398);
        let a = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
          l = (...e) =>
            e.filter((e, t, s) => !!e && s.indexOf(e) === t).join(" ");
        var i = {
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
        let n = (0, r.forwardRef)(
            (
              {
                color: e = "currentColor",
                size: t = 24,
                strokeWidth: s = 2,
                absoluteStrokeWidth: a,
                className: n = "",
                children: d,
                iconNode: o,
                ...c
              },
              x,
            ) =>
              (0, r.createElement)(
                "svg",
                {
                  ref: x,
                  ...i,
                  width: t,
                  height: t,
                  stroke: e,
                  strokeWidth: a ? (24 * Number(s)) / Number(t) : s,
                  className: l("lucide", n),
                  ...c,
                },
                [
                  ...o.map(([e, t]) => (0, r.createElement)(e, t)),
                  ...(Array.isArray(d) ? d : [d]),
                ],
              ),
          ),
          d = (e, t) => {
            let s = (0, r.forwardRef)(({ className: s, ...i }, d) =>
              (0, r.createElement)(n, {
                ref: d,
                iconNode: t,
                className: l(`lucide-${a(e)}`, s),
                ...i,
              }),
            );
            return ((s.displayName = `${e}`), s);
          };
      },
      5544: (e, t, s) => {
        "use strict";
        s.d(t, { Z: () => r });
        let r = (0, s(247).Z)("Shield", [
          [
            "path",
            {
              d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
              key: "oel41y",
            },
          ],
        ]);
      },
      6676: (e, t, s) => {
        "use strict";
        s.a(
          e,
          async (e, r) => {
            try {
              (s.r(t), s.d(t, { default: () => e }));
              var a = s(8106);
              let e = (
                await (0, a.createProxy)(
                  String.raw`C:\Users\rogsh\Documents\Antigravity\Fyndo\apps\admin\app\disputes\page.tsx`,
                )
              ).default;
              r();
            } catch (e) {
              r(e);
            }
          },
          1,
        );
      },
      626: (e, t, s) => {
        "use strict";
        (s.r(t), s.d(t, { default: () => c, metadata: () => o }));
        var r = s(2241),
          a = s(1690),
          l = s(3027),
          i = s(7146),
          n = s(121),
          d = s(1469);
        s(463);
        let o = {
          title: "Fyndo Admin | Trust & Safety",
          description: "Platform Administration and Mediation",
        };
        function c({ children: e }) {
          return (0, r.jsx)("html", {
            lang: "en",
            children: (0, r.jsxs)("body", {
              className: "antialiased min-h-screen bg-black text-white flex",
              children: [
                (0, r.jsxs)("aside", {
                  className:
                    "w-64 bg-neutral-900 border-r border-white/10 flex flex-col",
                  children: [
                    (0, r.jsxs)("div", {
                      className:
                        "p-6 border-b border-white/10 flex items-center gap-3",
                      children: [
                        (0, r.jsx)("div", {
                          className:
                            "w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center",
                          children: (0, r.jsx)(a.Z, {
                            className: "w-4 h-4 text-red-500",
                          }),
                        }),
                        (0, r.jsx)("div", {
                          className: "font-bold tracking-tight text-lg",
                          children: "FYNDO ADMIN",
                        }),
                      ],
                    }),
                    (0, r.jsxs)("nav", {
                      className: "flex-1 p-4 space-y-1",
                      children: [
                        (0, r.jsxs)("a", {
                          href: "/",
                          className:
                            "flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors font-medium text-sm",
                          children: [
                            (0, r.jsx)(l.Z, { className: "w-4 h-4" }),
                            " Operations",
                          ],
                        }),
                        (0, r.jsxs)("a", {
                          href: "/moderation",
                          className:
                            "flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors font-medium text-sm",
                          children: [
                            (0, r.jsx)(a.Z, { className: "w-4 h-4" }),
                            " Moderation Queue",
                          ],
                        }),
                        (0, r.jsxs)("a", {
                          href: "/disputes",
                          className:
                            "flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors font-medium text-sm",
                          children: [
                            (0, r.jsx)(i.Z, { className: "w-4 h-4" }),
                            " Disputes & Claims",
                          ],
                        }),
                        (0, r.jsxs)("a", {
                          href: "/users",
                          className:
                            "flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors font-medium text-sm",
                          children: [
                            (0, r.jsx)(n.Z, { className: "w-4 h-4" }),
                            " User Management",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)("main", {
                  className: "flex-1 overflow-y-auto",
                  children: [
                    (0, r.jsxs)("header", {
                      className:
                        "h-16 border-b border-white/10 bg-neutral-900/50 backdrop-blur-md sticky top-0 z-10 flex items-center px-8 justify-between",
                      children: [
                        (0, r.jsxs)("div", {
                          className: "relative w-96",
                          children: [
                            (0, r.jsx)(d.Z, {
                              className:
                                "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500",
                            }),
                            (0, r.jsx)("input", {
                              type: "text",
                              placeholder:
                                "Search orders, users, or dispute IDs...",
                              className:
                                "w-full bg-black/50 border border-white/10 rounded-lg pl-10 pr-4 py-1.5 text-sm focus:outline-none focus:border-white/30",
                            }),
                          ],
                        }),
                        (0, r.jsx)("div", {
                          className: "flex items-center gap-3",
                          children: (0, r.jsxs)("div", {
                            className: "text-right",
                            children: [
                              (0, r.jsx)("div", {
                                className: "text-sm font-medium",
                                children: "System Admin",
                              }),
                              (0, r.jsx)("div", {
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
  var s = (e) => t((t.s = e)),
    r = t.X(0, [394], () => s(8717));
  module.exports = r;
})();
