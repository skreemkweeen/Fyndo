(() => {
  var e = {};
  ((e.id = 268),
    (e.ids = [268]),
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
      5109: (e, t, s) => {
        "use strict";
        (s.r(t),
          s.d(t, {
            GlobalError: () => l.a,
            __next_app__: () => x,
            pages: () => c,
            routeModule: () => h,
            tree: () => d,
          }));
        var r = s(1683),
          a = s(6393),
          i = s(9520),
          l = s.n(i),
          n = s(27),
          o = {};
        for (let e in n)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (o[e] = () => n[e]);
        s.d(t, o);
        let d = [
            "",
            {
              children: [
                "inventory",
                {
                  children: [
                    "__PAGE__",
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(s.bind(s, 3545)),
                        "C:\\Users\\rogsh\\Documents\\Antigravity\\Fyndo\\apps\\seller\\app\\inventory\\page.tsx",
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
                "C:\\Users\\rogsh\\Documents\\Antigravity\\Fyndo\\apps\\seller\\app\\layout.tsx",
              ],
              "not-found": [
                () => Promise.resolve().then(s.t.bind(s, 3345, 23)),
                "next/dist/client/components/not-found-error",
              ],
            },
          ],
          c = [
            "C:\\Users\\rogsh\\Documents\\Antigravity\\Fyndo\\apps\\seller\\app\\inventory\\page.tsx",
          ],
          x = { require: s, loadChunk: () => Promise.resolve() },
          h = new r.AppPageRouteModule({
            definition: {
              kind: a.RouteKind.APP_PAGE,
              page: "/inventory/page",
              pathname: "/inventory",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
      5986: () => {},
      1591: (e, t, s) => {
        Promise.resolve().then(s.bind(s, 7690));
      },
      2372: (e, t, s) => {
        (Promise.resolve().then(s.t.bind(s, 6931, 23)),
          Promise.resolve().then(s.t.bind(s, 9112, 23)),
          Promise.resolve().then(s.t.bind(s, 6074, 23)),
          Promise.resolve().then(s.t.bind(s, 4914, 23)),
          Promise.resolve().then(s.t.bind(s, 7107, 23)),
          Promise.resolve().then(s.t.bind(s, 5103, 23)),
          Promise.resolve().then(s.t.bind(s, 9416, 23)));
      },
      7690: (e, t, s) => {
        "use strict";
        (s.r(t), s.d(t, { default: () => p }));
        var r = s(1162),
          a = s(1398),
          i = s(247);
        let l = (0, i.Z)("Sparkles", [
            [
              "path",
              {
                d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
                key: "4pj2yx",
              },
            ],
            ["path", { d: "M20 3v4", key: "1olli1" }],
            ["path", { d: "M22 5h-4", key: "1gvqau" }],
            ["path", { d: "M4 17v2", key: "vumght" }],
            ["path", { d: "M5 18H3", key: "zchphs" }],
          ]),
          n = (0, i.Z)("Plus", [
            ["path", { d: "M5 12h14", key: "1ays0h" }],
            ["path", { d: "M12 5v14", key: "s699le" }],
          ]),
          o = (0, i.Z)("Search", [
            ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
            ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
          ]),
          d = (0, i.Z)("Filter", [
            [
              "polygon",
              {
                points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",
                key: "1yg77f",
              },
            ],
          ]);
        var c = s(6040);
        let x = (0, i.Z)("Ellipsis", [
            ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
            ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
            ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }],
          ]),
          h = [
            {
              id: "1",
              name: "Vanilla Noir 50ml",
              sku: "VN-50-PH",
              type: "physical",
              price: 185,
              stock: 42,
              status: "active",
            },
            {
              id: "2",
              name: "Vanilla Noir Discovery Set",
              sku: "VN-DS-PH",
              type: "physical",
              price: 45,
              stock: 112,
              status: "active",
            },
            {
              id: "3",
              name: "Brand Identity Consultation",
              sku: "SVC-BID-01",
              type: "service",
              price: 1500,
              stock: "Unlimited",
              status: "active",
            },
            {
              id: "4",
              name: "Element UX Component Library",
              sku: "DIG-EL-UI",
              type: "digital",
              price: 99,
              stock: "Unlimited",
              status: "active",
            },
            {
              id: "5",
              name: "Oud Supreme 100ml",
              sku: "OS-100-PH",
              type: "physical",
              price: 240,
              stock: 0,
              status: "draft",
            },
          ];
        function p() {
          let [e, t] = (0, a.useState)("");
          return (0, r.jsxs)("div", {
            className: "p-10 max-w-7xl mx-auto h-screen flex flex-col",
            children: [
              (0, r.jsxs)("header", {
                className: "mb-8 flex justify-between items-end shrink-0",
                children: [
                  (0, r.jsxs)("div", {
                    children: [
                      (0, r.jsx)("h1", {
                        className:
                          "text-3xl font-black tracking-tight text-white mb-2",
                        children: "Inventory Management",
                      }),
                      (0, r.jsx)("p", {
                        className: "text-neutral-400 text-sm",
                        children:
                          "Manage physical goods, digital assets, and services.",
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [
                      (0, r.jsxs)("button", {
                        className:
                          "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-4 py-2 rounded-xl font-medium text-sm hover:bg-indigo-500/20 transition-colors flex items-center gap-2",
                        children: [
                          (0, r.jsx)(l, { className: "w-4 h-4" }),
                          " AI Auto-Draft",
                        ],
                      }),
                      (0, r.jsxs)("button", {
                        className:
                          "bg-white text-black px-4 py-2 rounded-xl font-medium text-sm hover:bg-neutral-200 transition-colors flex items-center gap-2",
                        children: [
                          (0, r.jsx)(n, { className: "w-4 h-4" }),
                          " Add Product",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className:
                  "bg-neutral-900 border border-white/10 rounded-2xl flex flex-col flex-1 overflow-hidden",
                children: [
                  (0, r.jsxs)("div", {
                    className:
                      "p-4 border-b border-white/10 flex items-center justify-between bg-neutral-900/50",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "relative w-96",
                        children: [
                          (0, r.jsx)(o, {
                            className:
                              "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500",
                          }),
                          (0, r.jsx)("input", {
                            type: "text",
                            placeholder: "Search by name or SKU...",
                            value: e,
                            onChange: (e) => t(e.target.value),
                            className:
                              "w-full bg-black/50 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-colors",
                          }),
                        ],
                      }),
                      (0, r.jsx)("button", {
                        className:
                          "p-2 border border-white/10 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors",
                        children: (0, r.jsx)(d, { className: "w-4 h-4" }),
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className: "flex-1 overflow-auto",
                    children: (0, r.jsxs)("table", {
                      className: "w-full text-left text-sm whitespace-nowrap",
                      children: [
                        (0, r.jsx)("thead", {
                          className:
                            "bg-black/40 text-neutral-400 sticky top-0 z-10 backdrop-blur-md",
                          children: (0, r.jsxs)("tr", {
                            children: [
                              (0, r.jsx)("th", {
                                className: "px-6 py-3 font-medium",
                                children: "Product Name",
                              }),
                              (0, r.jsx)("th", {
                                className: "px-6 py-3 font-medium",
                                children: "SKU",
                              }),
                              (0, r.jsx)("th", {
                                className: "px-6 py-3 font-medium",
                                children: "Type",
                              }),
                              (0, r.jsx)("th", {
                                className: "px-6 py-3 font-medium",
                                children: "Price",
                              }),
                              (0, r.jsx)("th", {
                                className: "px-6 py-3 font-medium",
                                children: "Stock",
                              }),
                              (0, r.jsx)("th", {
                                className: "px-6 py-3 font-medium",
                                children: "Status",
                              }),
                              (0, r.jsx)("th", {
                                className: "px-6 py-3 font-medium text-right",
                                children: "Actions",
                              }),
                            ],
                          }),
                        }),
                        (0, r.jsx)("tbody", {
                          className: "divide-y divide-white/5",
                          children: h.map((e) =>
                            (0, r.jsxs)(
                              "tr",
                              {
                                className:
                                  "hover:bg-white/[0.02] transition-colors group",
                                children: [
                                  (0, r.jsx)("td", {
                                    className: "px-6 py-4",
                                    children: (0, r.jsxs)("div", {
                                      className: "flex items-center gap-3",
                                      children: [
                                        (0, r.jsx)("div", {
                                          className:
                                            "w-10 h-10 rounded-lg bg-neutral-800 border border-white/5 flex items-center justify-center shrink-0",
                                          children: (0, r.jsx)(c.Z, {
                                            className:
                                              "w-5 h-5 text-neutral-500",
                                          }),
                                        }),
                                        (0, r.jsx)("span", {
                                          className: "font-medium text-white",
                                          children: e.name,
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, r.jsx)("td", {
                                    className:
                                      "px-6 py-4 text-neutral-400 font-mono text-xs",
                                    children: e.sku,
                                  }),
                                  (0, r.jsx)("td", {
                                    className: "px-6 py-4",
                                    children: (0, r.jsx)("span", {
                                      className:
                                        "px-2.5 py-1 rounded-md bg-white/5 text-neutral-300 text-xs font-medium capitalize border border-white/10",
                                      children: e.type,
                                    }),
                                  }),
                                  (0, r.jsxs)("td", {
                                    className: "px-6 py-4 text-white",
                                    children: ["$", e.price.toFixed(2)],
                                  }),
                                  (0, r.jsx)("td", {
                                    className: "px-6 py-4",
                                    children:
                                      "Unlimited" === e.stock
                                        ? (0, r.jsx)("span", {
                                            className:
                                              "text-neutral-500 font-mono text-xs",
                                            children: "∞",
                                          })
                                        : 0 === e.stock
                                          ? (0, r.jsx)("span", {
                                              className:
                                                "text-red-400 font-medium text-xs",
                                              children: "Out of stock",
                                            })
                                          : (0, r.jsx)("span", {
                                              className: "text-neutral-300",
                                              children: e.stock,
                                            }),
                                  }),
                                  (0, r.jsx)("td", {
                                    className: "px-6 py-4",
                                    children: (0, r.jsxs)("div", {
                                      className: "flex items-center gap-2",
                                      children: [
                                        (0, r.jsx)("div", {
                                          className: `w-2 h-2 rounded-full ${"active" === e.status ? "bg-emerald-500" : "bg-neutral-600"}`,
                                        }),
                                        (0, r.jsx)("span", {
                                          className:
                                            "text-neutral-400 capitalize",
                                          children: e.status,
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, r.jsx)("td", {
                                    className: "px-6 py-4 text-right",
                                    children: (0, r.jsx)("button", {
                                      className:
                                        "p-2 text-neutral-500 hover:text-white transition-colors opacity-0 group-hover:opacity-100",
                                      children: (0, r.jsx)(x, {
                                        className: "w-4 h-4",
                                      }),
                                    }),
                                  }),
                                ],
                              },
                              e.id,
                            ),
                          ),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        }
      },
      247: (e, t, s) => {
        "use strict";
        s.d(t, { Z: () => o });
        var r = s(1398);
        let a = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
          i = (...e) =>
            e.filter((e, t, s) => !!e && s.indexOf(e) === t).join(" ");
        var l = {
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
                children: o,
                iconNode: d,
                ...c
              },
              x,
            ) =>
              (0, r.createElement)(
                "svg",
                {
                  ref: x,
                  ...l,
                  width: t,
                  height: t,
                  stroke: e,
                  strokeWidth: a ? (24 * Number(s)) / Number(t) : s,
                  className: i("lucide", n),
                  ...c,
                },
                [
                  ...d.map(([e, t]) => (0, r.createElement)(e, t)),
                  ...(Array.isArray(o) ? o : [o]),
                ],
              ),
          ),
          o = (e, t) => {
            let s = (0, r.forwardRef)(({ className: s, ...l }, o) =>
              (0, r.createElement)(n, {
                ref: o,
                iconNode: t,
                className: i(`lucide-${a(e)}`, s),
                ...l,
              }),
            );
            return ((s.displayName = `${e}`), s);
          };
      },
      6040: (e, t, s) => {
        "use strict";
        s.d(t, { Z: () => r });
        let r = (0, s(247).Z)("Package", [
          [
            "path",
            {
              d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
              key: "1a0edw",
            },
          ],
          ["path", { d: "M12 22V12", key: "d0xqtd" }],
          [
            "path",
            { d: "m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7", key: "yx3hmr" },
          ],
          ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
        ]);
      },
      3545: (e, t, s) => {
        "use strict";
        s.a(
          e,
          async (e, r) => {
            try {
              (s.r(t), s.d(t, { default: () => e }));
              var a = s(8106);
              let e = (
                await (0, a.createProxy)(
                  String.raw`C:\Users\rogsh\Documents\Antigravity\Fyndo\apps\seller\app\inventory\page.tsx`,
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
        (s.r(t), s.d(t, { default: () => i, metadata: () => a }));
        var r = s(2241);
        s(463);
        let a = {
          title: "Fyndo Seller OS",
          description: "Advanced operating system for premium brands.",
        };
        function i({ children: e }) {
          return (0, r.jsx)("html", {
            lang: "en",
            children: (0, r.jsxs)("body", {
              className:
                "antialiased min-h-screen bg-neutral-950 text-white flex",
              children: [
                (0, r.jsxs)("aside", {
                  className:
                    "w-64 bg-neutral-900 border-r border-white/10 p-6 flex flex-col",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "text-2xl font-black tracking-tighter mb-12",
                      children: [
                        "FYNDO",
                        (0, r.jsx)("span", {
                          className: "text-neutral-500 font-normal ml-1",
                          children: "OS",
                        }),
                      ],
                    }),
                    (0, r.jsxs)("nav", {
                      className: "flex-1 space-y-2",
                      children: [
                        (0, r.jsx)("a", {
                          href: "/",
                          className:
                            "block px-4 py-3 rounded-lg bg-white/5 text-white font-medium hover:bg-white/10 transition-colors",
                          children: "Dashboard",
                        }),
                        (0, r.jsx)("a", {
                          href: "/inventory",
                          className:
                            "block px-4 py-3 rounded-lg text-neutral-400 font-medium hover:bg-white/10 hover:text-white transition-colors",
                          children: "Inventory",
                        }),
                        (0, r.jsx)("a", {
                          href: "/storefront",
                          className:
                            "block px-4 py-3 rounded-lg text-neutral-400 font-medium hover:bg-white/10 hover:text-white transition-colors",
                          children: "Storefront Builder",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsx)("main", {
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
  var t = require("../../webpack-runtime.js");
  t.C(e);
  var s = (e) => t((t.s = e)),
    r = t.X(0, [869], () => s(5109));
  module.exports = r;
})();
