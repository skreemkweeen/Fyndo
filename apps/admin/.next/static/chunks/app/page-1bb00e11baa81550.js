(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    1154: (e, s, t) => {
      Promise.resolve().then(t.bind(t, 2375));
    },
    2375: (e, s, t) => {
      "use strict";
      (t.r(s), t.d(s, { default: () => c }));
      var a = t(8449),
        r = t(2588),
        l = t(9023),
        i = t(9814),
        n = t(1219),
        d = t(1406);
      function c() {
        let e = {
          hidden: { opacity: 0, y: 10 },
          show: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 24 },
          },
        };
        return (0, a.jsxs)("div", {
          className: "p-10 max-w-7xl mx-auto",
          children: [
            (0, a.jsxs)("header", {
              className: "mb-10",
              children: [
                (0, a.jsx)("h1", {
                  className:
                    "text-3xl font-black tracking-tight text-white mb-2",
                  children: "Operations Dashboard",
                }),
                (0, a.jsx)("p", {
                  className: "text-neutral-400",
                  children:
                    "High-level platform health, escrow status, and system vitals.",
                }),
              ],
            }),
            (0, a.jsxs)(r.E.div, {
              variants: {
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.1 } },
              },
              initial: "hidden",
              animate: "show",
              className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",
              children: [
                (0, a.jsxs)(r.E.div, {
                  variants: e,
                  className:
                    "bg-neutral-900 border border-white/10 p-6 rounded-2xl flex flex-col justify-between h-40",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex items-center justify-between",
                      children: [
                        (0, a.jsx)("span", {
                          className: "text-neutral-400 font-medium",
                          children: "Funds in Escrow",
                        }),
                        (0, a.jsx)("div", {
                          className:
                            "w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center",
                          children: (0, a.jsx)(l.Z, {
                            className: "w-5 h-5 text-emerald-500",
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      children: (0, a.jsx)("h2", {
                        className: "text-4xl font-black tracking-tighter",
                        children: "$2.4M",
                      }),
                    }),
                  ],
                }),
                (0, a.jsxs)(r.E.div, {
                  variants: e,
                  className:
                    "bg-neutral-900 border border-white/10 p-6 rounded-2xl flex flex-col justify-between h-40",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex items-center justify-between",
                      children: [
                        (0, a.jsx)("span", {
                          className: "text-neutral-400 font-medium",
                          children: "Pending Moderation",
                        }),
                        (0, a.jsx)("div", {
                          className:
                            "w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center",
                          children: (0, a.jsx)(i.Z, {
                            className: "w-5 h-5 text-rose-500",
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex items-baseline gap-2",
                      children: [
                        (0, a.jsx)("h2", {
                          className: "text-4xl font-black tracking-tighter",
                          children: "142",
                        }),
                        (0, a.jsx)("span", {
                          className: "text-sm font-medium text-rose-400",
                          children: "+12%",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)(r.E.div, {
                  variants: e,
                  className:
                    "bg-neutral-900 border border-white/10 p-6 rounded-2xl flex flex-col justify-between h-40",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex items-center justify-between",
                      children: [
                        (0, a.jsx)("span", {
                          className: "text-neutral-400 font-medium",
                          children: "Open Disputes",
                        }),
                        (0, a.jsx)("div", {
                          className:
                            "w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center",
                          children: (0, a.jsx)(n.Z, {
                            className: "w-5 h-5 text-amber-500",
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      children: (0, a.jsx)("h2", {
                        className: "text-4xl font-black tracking-tighter",
                        children: "28",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsxs)(r.E.div, {
              variants: e,
              className:
                "bg-neutral-900 border border-white/10 rounded-2xl p-6",
              children: [
                (0, a.jsxs)("h3", {
                  className: "text-lg font-bold mb-6 flex items-center gap-2",
                  children: [
                    (0, a.jsx)(d.Z, { className: "w-5 h-5 text-emerald-500" }),
                    " Shipping & Fulfillment Orchestration",
                  ],
                }),
                (0, a.jsxs)("table", {
                  className: "w-full text-left text-sm whitespace-nowrap",
                  children: [
                    (0, a.jsx)("thead", {
                      className: "text-neutral-500 border-b border-white/10",
                      children: (0, a.jsxs)("tr", {
                        children: [
                          (0, a.jsx)("th", {
                            className: "pb-3 font-medium",
                            children: "Order ID",
                          }),
                          (0, a.jsx)("th", {
                            className: "pb-3 font-medium",
                            children: "Logistics Adapter",
                          }),
                          (0, a.jsx)("th", {
                            className: "pb-3 font-medium",
                            children: "Status",
                          }),
                          (0, a.jsx)("th", {
                            className: "pb-3 font-medium text-right",
                            children: "Escrow Release",
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsxs)("tbody", {
                      className: "divide-y divide-white/5",
                      children: [
                        (0, a.jsxs)("tr", {
                          className: "hover:bg-white/[0.02]",
                          children: [
                            (0, a.jsx)("td", {
                              className: "py-4 font-mono text-xs",
                              children: "ORD-9A82B3",
                            }),
                            (0, a.jsx)("td", {
                              className: "py-4",
                              children: (0, a.jsx)("span", {
                                className:
                                  "bg-neutral-800 text-neutral-300 px-2 py-1 rounded-md text-xs font-mono border border-white/10",
                                children: "EasyPost_Mock",
                              }),
                            }),
                            (0, a.jsx)("td", {
                              className: "py-4",
                              children: (0, a.jsxs)("span", {
                                className:
                                  "text-emerald-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5",
                                children: [
                                  (0, a.jsx)("div", {
                                    className:
                                      "w-1.5 h-1.5 rounded-full bg-emerald-400",
                                  }),
                                  " Delivered",
                                ],
                              }),
                            }),
                            (0, a.jsx)("td", {
                              className: "py-4 text-right",
                              children: (0, a.jsx)("button", {
                                className:
                                  "bg-white/5 hover:bg-white/10 border border-white/10 text-white px-4 py-1.5 rounded-lg font-medium text-xs transition-colors",
                                children: "Force Transfer",
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsxs)("tr", {
                          className: "hover:bg-white/[0.02]",
                          children: [
                            (0, a.jsx)("td", {
                              className: "py-4 font-mono text-xs",
                              children: "ORD-7C44E1",
                            }),
                            (0, a.jsx)("td", {
                              className: "py-4",
                              children: (0, a.jsx)("span", {
                                className:
                                  "bg-neutral-800 text-neutral-300 px-2 py-1 rounded-md text-xs font-mono border border-white/10",
                                children: "Shippo_Hazmat",
                              }),
                            }),
                            (0, a.jsx)("td", {
                              className: "py-4",
                              children: (0, a.jsxs)("span", {
                                className:
                                  "text-amber-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5",
                                children: [
                                  (0, a.jsx)("div", {
                                    className:
                                      "w-1.5 h-1.5 rounded-full bg-amber-400",
                                  }),
                                  " In Transit",
                                ],
                              }),
                            }),
                            (0, a.jsx)("td", {
                              className: "py-4 text-right",
                              children: (0, a.jsx)("span", {
                                className:
                                  "text-neutral-500 text-xs font-medium italic",
                                children: "Awaiting Scan",
                              }),
                            }),
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
  },
  (e) => {
    var s = (s) => e((e.s = s));
    (e.O(0, [707, 345, 996, 744], () => s(1154)), (_N_E = e.O()));
  },
]);
