(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [463],
  {
    7253: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 8351));
    },
    8351: (e, t, r) => {
      "use strict";
      (r.r(t), r.d(t, { default: () => x }));
      var s = r(8449),
        a = r(8613);
      let n = (0, a.Z)("Search", [
          ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
          ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
        ]),
        i = (0, a.Z)("Filter", [
          [
            "polygon",
            {
              points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",
              key: "1yg77f",
            },
          ],
        ]),
        l = (0, a.Z)("TriangleAlert", [
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
      var o = r(4646);
      let d = (0, a.Z)("X", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]);
      var c = r(7810);
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
                          children: (0, s.jsx)(n, { className: "w-4 h-4" }),
                        }),
                        (0, s.jsx)("button", {
                          className:
                            "p-2 border border-white/10 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors",
                          children: (0, s.jsx)(i, { className: "w-4 h-4" }),
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
                                className:
                                  "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ".concat(
                                    e.aiScore > 90
                                      ? "bg-red-500/10"
                                      : "bg-amber-500/10",
                                  ),
                                children: (0, s.jsx)(l, {
                                  className: "w-6 h-6 ".concat(
                                    e.aiScore > 90
                                      ? "text-red-500"
                                      : "text-amber-500",
                                  ),
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
                                    className: "text-sm text-neutral-400 mb-3",
                                    children: [
                                      "Reported by: ",
                                      (0, s.jsx)("span", {
                                        className: "font-mono text-neutral-300",
                                        children: e.reporter,
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      (0, s.jsx)(o.Z, {
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
                                          style: {
                                            width: "".concat(e.aiScore, "%"),
                                          },
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
                                  (0, s.jsx)(o.Z, { className: "w-4 h-4" }),
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
    8613: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => o });
      var s = r(7810);
      let a = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        n = function () {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return t.filter((e, t, r) => !!e && r.indexOf(e) === t).join(" ");
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
      let l = (0, s.forwardRef)((e, t) => {
          let {
            color: r = "currentColor",
            size: a = 24,
            strokeWidth: l = 2,
            absoluteStrokeWidth: o,
            className: d = "",
            children: c,
            iconNode: x,
            ...h
          } = e;
          return (0, s.createElement)(
            "svg",
            {
              ref: t,
              ...i,
              width: a,
              height: a,
              stroke: r,
              strokeWidth: o ? (24 * Number(l)) / Number(a) : l,
              className: n("lucide", d),
              ...h,
            },
            [
              ...x.map((e) => {
                let [t, r] = e;
                return (0, s.createElement)(t, r);
              }),
              ...(Array.isArray(c) ? c : [c]),
            ],
          );
        }),
        o = (e, t) => {
          let r = (0, s.forwardRef)((r, i) => {
            let { className: o, ...d } = r;
            return (0, s.createElement)(l, {
              ref: i,
              iconNode: t,
              className: n("lucide-".concat(a(e)), o),
              ...d,
            });
          });
          return ((r.displayName = "".concat(e)), r);
        };
    },
    4646: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => s });
      let s = (0, r(8613).Z)("Shield", [
        [
          "path",
          {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y",
          },
        ],
      ]);
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [345, 996, 744], () => t(7253)), (_N_E = e.O()));
  },
]);
