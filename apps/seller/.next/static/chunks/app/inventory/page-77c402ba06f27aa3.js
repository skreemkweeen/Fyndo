(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [268],
  {
    5353: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 5627));
    },
    5627: (e, t, s) => {
      "use strict";
      (s.r(t), s.d(t, { default: () => m }));
      var a = s(8449),
        r = s(7810),
        l = s(8613);
      let i = (0, l.Z)("Sparkles", [
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
        c = (0, l.Z)("Plus", [
          ["path", { d: "M5 12h14", key: "1ays0h" }],
          ["path", { d: "M12 5v14", key: "s699le" }],
        ]),
        n = (0, l.Z)("Search", [
          ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
          ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
        ]),
        d = (0, l.Z)("Filter", [
          [
            "polygon",
            {
              points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",
              key: "1yg77f",
            },
          ],
        ]);
      var o = s(5586);
      let x = (0, l.Z)("Ellipsis", [
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
      function m() {
        let [e, t] = (0, r.useState)("");
        return (0, a.jsxs)("div", {
          className: "p-10 max-w-7xl mx-auto h-screen flex flex-col",
          children: [
            (0, a.jsxs)("header", {
              className: "mb-8 flex justify-between items-end shrink-0",
              children: [
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)("h1", {
                      className:
                        "text-3xl font-black tracking-tight text-white mb-2",
                      children: "Inventory Management",
                    }),
                    (0, a.jsx)("p", {
                      className: "text-neutral-400 text-sm",
                      children:
                        "Manage physical goods, digital assets, and services.",
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [
                    (0, a.jsxs)("button", {
                      className:
                        "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-4 py-2 rounded-xl font-medium text-sm hover:bg-indigo-500/20 transition-colors flex items-center gap-2",
                      children: [
                        (0, a.jsx)(i, { className: "w-4 h-4" }),
                        " AI Auto-Draft",
                      ],
                    }),
                    (0, a.jsxs)("button", {
                      className:
                        "bg-white text-black px-4 py-2 rounded-xl font-medium text-sm hover:bg-neutral-200 transition-colors flex items-center gap-2",
                      children: [
                        (0, a.jsx)(c, { className: "w-4 h-4" }),
                        " Add Product",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className:
                "bg-neutral-900 border border-white/10 rounded-2xl flex flex-col flex-1 overflow-hidden",
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "p-4 border-b border-white/10 flex items-center justify-between bg-neutral-900/50",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "relative w-96",
                      children: [
                        (0, a.jsx)(n, {
                          className:
                            "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500",
                        }),
                        (0, a.jsx)("input", {
                          type: "text",
                          placeholder: "Search by name or SKU...",
                          value: e,
                          onChange: (e) => t(e.target.value),
                          className:
                            "w-full bg-black/50 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-colors",
                        }),
                      ],
                    }),
                    (0, a.jsx)("button", {
                      className:
                        "p-2 border border-white/10 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors",
                      children: (0, a.jsx)(d, { className: "w-4 h-4" }),
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "flex-1 overflow-auto",
                  children: (0, a.jsxs)("table", {
                    className: "w-full text-left text-sm whitespace-nowrap",
                    children: [
                      (0, a.jsx)("thead", {
                        className:
                          "bg-black/40 text-neutral-400 sticky top-0 z-10 backdrop-blur-md",
                        children: (0, a.jsxs)("tr", {
                          children: [
                            (0, a.jsx)("th", {
                              className: "px-6 py-3 font-medium",
                              children: "Product Name",
                            }),
                            (0, a.jsx)("th", {
                              className: "px-6 py-3 font-medium",
                              children: "SKU",
                            }),
                            (0, a.jsx)("th", {
                              className: "px-6 py-3 font-medium",
                              children: "Type",
                            }),
                            (0, a.jsx)("th", {
                              className: "px-6 py-3 font-medium",
                              children: "Price",
                            }),
                            (0, a.jsx)("th", {
                              className: "px-6 py-3 font-medium",
                              children: "Stock",
                            }),
                            (0, a.jsx)("th", {
                              className: "px-6 py-3 font-medium",
                              children: "Status",
                            }),
                            (0, a.jsx)("th", {
                              className: "px-6 py-3 font-medium text-right",
                              children: "Actions",
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("tbody", {
                        className: "divide-y divide-white/5",
                        children: h.map((e) =>
                          (0, a.jsxs)(
                            "tr",
                            {
                              className:
                                "hover:bg-white/[0.02] transition-colors group",
                              children: [
                                (0, a.jsx)("td", {
                                  className: "px-6 py-4",
                                  children: (0, a.jsxs)("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                      (0, a.jsx)("div", {
                                        className:
                                          "w-10 h-10 rounded-lg bg-neutral-800 border border-white/5 flex items-center justify-center shrink-0",
                                        children: (0, a.jsx)(o.Z, {
                                          className: "w-5 h-5 text-neutral-500",
                                        }),
                                      }),
                                      (0, a.jsx)("span", {
                                        className: "font-medium text-white",
                                        children: e.name,
                                      }),
                                    ],
                                  }),
                                }),
                                (0, a.jsx)("td", {
                                  className:
                                    "px-6 py-4 text-neutral-400 font-mono text-xs",
                                  children: e.sku,
                                }),
                                (0, a.jsx)("td", {
                                  className: "px-6 py-4",
                                  children: (0, a.jsx)("span", {
                                    className:
                                      "px-2.5 py-1 rounded-md bg-white/5 text-neutral-300 text-xs font-medium capitalize border border-white/10",
                                    children: e.type,
                                  }),
                                }),
                                (0, a.jsxs)("td", {
                                  className: "px-6 py-4 text-white",
                                  children: ["$", e.price.toFixed(2)],
                                }),
                                (0, a.jsx)("td", {
                                  className: "px-6 py-4",
                                  children:
                                    "Unlimited" === e.stock
                                      ? (0, a.jsx)("span", {
                                          className:
                                            "text-neutral-500 font-mono text-xs",
                                          children: "∞",
                                        })
                                      : 0 === e.stock
                                        ? (0, a.jsx)("span", {
                                            className:
                                              "text-red-400 font-medium text-xs",
                                            children: "Out of stock",
                                          })
                                        : (0, a.jsx)("span", {
                                            className: "text-neutral-300",
                                            children: e.stock,
                                          }),
                                }),
                                (0, a.jsx)("td", {
                                  className: "px-6 py-4",
                                  children: (0, a.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      (0, a.jsx)("div", {
                                        className:
                                          "w-2 h-2 rounded-full ".concat(
                                            "active" === e.status
                                              ? "bg-emerald-500"
                                              : "bg-neutral-600",
                                          ),
                                      }),
                                      (0, a.jsx)("span", {
                                        className:
                                          "text-neutral-400 capitalize",
                                        children: e.status,
                                      }),
                                    ],
                                  }),
                                }),
                                (0, a.jsx)("td", {
                                  className: "px-6 py-4 text-right",
                                  children: (0, a.jsx)("button", {
                                    className:
                                      "p-2 text-neutral-500 hover:text-white transition-colors opacity-0 group-hover:opacity-100",
                                    children: (0, a.jsx)(x, {
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
    8613: (e, t, s) => {
      "use strict";
      s.d(t, { Z: () => n });
      var a = s(7810);
      let r = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        l = function () {
          for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
            t[s] = arguments[s];
          return t.filter((e, t, s) => !!e && s.indexOf(e) === t).join(" ");
        };
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
      let c = (0, a.forwardRef)((e, t) => {
          let {
            color: s = "currentColor",
            size: r = 24,
            strokeWidth: c = 2,
            absoluteStrokeWidth: n,
            className: d = "",
            children: o,
            iconNode: x,
            ...h
          } = e;
          return (0, a.createElement)(
            "svg",
            {
              ref: t,
              ...i,
              width: r,
              height: r,
              stroke: s,
              strokeWidth: n ? (24 * Number(c)) / Number(r) : c,
              className: l("lucide", d),
              ...h,
            },
            [
              ...x.map((e) => {
                let [t, s] = e;
                return (0, a.createElement)(t, s);
              }),
              ...(Array.isArray(o) ? o : [o]),
            ],
          );
        }),
        n = (e, t) => {
          let s = (0, a.forwardRef)((s, i) => {
            let { className: n, ...d } = s;
            return (0, a.createElement)(c, {
              ref: i,
              iconNode: t,
              className: l("lucide-".concat(r(e)), n),
              ...d,
            });
          });
          return ((s.displayName = "".concat(e)), s);
        };
    },
    5586: (e, t, s) => {
      "use strict";
      s.d(t, { Z: () => a });
      let a = (0, s(8613).Z)("Package", [
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
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [345, 996, 744], () => t(5353)), (_N_E = e.O()));
  },
]);
