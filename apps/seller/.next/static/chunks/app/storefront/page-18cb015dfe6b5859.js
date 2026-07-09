(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [705],
  {
    8371: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 871));
    },
    871: (e, t, r) => {
      "use strict";
      (r.r(t), r.d(t, { default: () => u }));
      var a = r(8449),
        l = r(7810),
        s = r(8613);
      let n = (0, s.Z)("Monitor", [
          [
            "rect",
            {
              width: "20",
              height: "14",
              x: "2",
              y: "3",
              rx: "2",
              key: "48i651",
            },
          ],
          ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
          ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }],
        ]),
        c = (0, s.Z)("Moon", [
          ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
        ]),
        o = (0, s.Z)("Sun", [
          ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
          ["path", { d: "M12 2v2", key: "tus03m" }],
          ["path", { d: "M12 20v2", key: "1lh1kg" }],
          ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
          ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
          ["path", { d: "M2 12h2", key: "1t8f8n" }],
          ["path", { d: "M20 12h2", key: "1q8mjw" }],
          ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
          ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
        ]),
        i = (0, s.Z)("Palette", [
          [
            "circle",
            {
              cx: "13.5",
              cy: "6.5",
              r: ".5",
              fill: "currentColor",
              key: "1okk4w",
            },
          ],
          [
            "circle",
            {
              cx: "17.5",
              cy: "10.5",
              r: ".5",
              fill: "currentColor",
              key: "f64h9f",
            },
          ],
          [
            "circle",
            {
              cx: "8.5",
              cy: "7.5",
              r: ".5",
              fill: "currentColor",
              key: "fotxhn",
            },
          ],
          [
            "circle",
            {
              cx: "6.5",
              cy: "12.5",
              r: ".5",
              fill: "currentColor",
              key: "qy21gx",
            },
          ],
          [
            "path",
            {
              d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
              key: "12rzf8",
            },
          ],
        ]),
        d = (0, s.Z)("Type", [
          ["polyline", { points: "4 7 4 4 20 4 20 7", key: "1nosan" }],
          ["line", { x1: "9", x2: "15", y1: "20", y2: "20", key: "swin9y" }],
          ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }],
        ]),
        x = (0, s.Z)("Check", [
          ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
        ]),
        h = (0, s.Z)("Save", [
          [
            "path",
            {
              d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
              key: "1c8476",
            },
          ],
          [
            "path",
            { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" },
          ],
          ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }],
        ]);
      function u() {
        let [e, t] = (0, l.useState)("dark"),
          [r, s] = (0, l.useState)("#ffffff"),
          [u, m] = (0, l.useState)("Inter"),
          [f, p] = (0, l.useState)(!1);
        return (0, a.jsxs)("div", {
          className: "flex h-screen overflow-hidden",
          children: [
            (0, a.jsxs)("div", {
              className:
                "w-80 bg-neutral-900 border-r border-white/10 flex flex-col shrink-0",
              children: [
                (0, a.jsxs)("div", {
                  className: "p-6 border-b border-white/10",
                  children: [
                    (0, a.jsx)("h2", {
                      className: "text-lg font-bold text-white",
                      children: "Storefront Settings",
                    }),
                    (0, a.jsx)("p", {
                      className: "text-xs text-neutral-400 mt-1",
                      children: "Configure your `theme_config` JSON.",
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "p-6 flex-1 overflow-y-auto space-y-8",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "space-y-3",
                      children: [
                        (0, a.jsxs)("label", {
                          className:
                            "text-sm font-medium text-neutral-300 flex items-center gap-2",
                          children: [
                            (0, a.jsx)(n, { className: "w-4 h-4" }),
                            " Default Mode",
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "flex bg-black/50 p-1 rounded-xl border border-white/5",
                          children: [
                            (0, a.jsxs)("button", {
                              onClick: () => t("dark"),
                              className:
                                "flex-1 flex items-center justify-center gap-2 py-2 text-sm rounded-lg transition-all ".concat(
                                  "dark" === e
                                    ? "bg-neutral-800 text-white shadow-sm"
                                    : "text-neutral-500 hover:text-white",
                                ),
                              children: [
                                (0, a.jsx)(c, { className: "w-4 h-4" }),
                                " Dark",
                              ],
                            }),
                            (0, a.jsxs)("button", {
                              onClick: () => t("light"),
                              className:
                                "flex-1 flex items-center justify-center gap-2 py-2 text-sm rounded-lg transition-all ".concat(
                                  "light" === e
                                    ? "bg-white text-black shadow-sm"
                                    : "text-neutral-500 hover:text-white",
                                ),
                              children: [
                                (0, a.jsx)(o, { className: "w-4 h-4" }),
                                " Light",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "space-y-3",
                      children: [
                        (0, a.jsxs)("label", {
                          className:
                            "text-sm font-medium text-neutral-300 flex items-center gap-2",
                          children: [
                            (0, a.jsx)(i, { className: "w-4 h-4" }),
                            " Primary Brand Color",
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "flex items-center gap-4",
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "w-12 h-12 rounded-full border-4 border-black shadow-md cursor-pointer ring-2 ring-white/10 transition-transform hover:scale-105",
                              style: { backgroundColor: r },
                            }),
                            (0, a.jsx)("input", {
                              type: "text",
                              value: r,
                              onChange: (e) => s(e.target.value),
                              className:
                                "bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-sm font-mono text-white flex-1 focus:outline-none focus:border-white/30",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "space-y-3",
                      children: [
                        (0, a.jsxs)("label", {
                          className:
                            "text-sm font-medium text-neutral-300 flex items-center gap-2",
                          children: [
                            (0, a.jsx)(d, { className: "w-4 h-4" }),
                            " Typography",
                          ],
                        }),
                        (0, a.jsxs)("select", {
                          value: u,
                          onChange: (e) => m(e.target.value),
                          className:
                            "w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white/30 appearance-none",
                          children: [
                            (0, a.jsx)("option", {
                              value: "Inter",
                              children: "Inter (Default)",
                            }),
                            (0, a.jsx)("option", {
                              value: "Helvetica Neue",
                              children: "Helvetica Neue (Editorial)",
                            }),
                            (0, a.jsx)("option", {
                              value: "Playfair Display",
                              children: "Playfair Display (Luxury)",
                            }),
                            (0, a.jsx)("option", {
                              value: "JetBrains Mono",
                              children: "JetBrains Mono (Technical)",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className:
                    "p-6 border-t border-white/10 bg-neutral-900/50 backdrop-blur-md",
                  children: (0, a.jsxs)("button", {
                    onClick: () => {
                      (p(!0), setTimeout(() => p(!1), 1e3));
                    },
                    className:
                      "w-full bg-white text-black py-2.5 rounded-xl font-medium text-sm hover:bg-neutral-200 transition-all flex items-center justify-center gap-2",
                    children: [
                      f
                        ? (0, a.jsx)(x, { className: "w-4 h-4" })
                        : (0, a.jsx)(h, { className: "w-4 h-4" }),
                      f ? "Published" : "Publish to Storefront",
                    ],
                  }),
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className:
                "flex-1 p-8 transition-colors duration-500 flex items-center justify-center ".concat(
                  "dark" === e ? "bg-black" : "bg-neutral-100",
                ),
              children: (0, a.jsxs)("div", {
                className:
                  "w-full max-w-4xl h-[800px] border border-neutral-500/20 rounded-t-3xl shadow-2xl overflow-hidden flex flex-col relative transition-colors duration-500",
                style: {
                  backgroundColor: "dark" === e ? "#0a0a0a" : "#ffffff",
                },
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "h-12 border-b flex items-center px-4 gap-2 transition-colors duration-500 ".concat(
                        "dark" === e
                          ? "border-neutral-800 bg-neutral-900/50"
                          : "border-neutral-200 bg-neutral-100/50",
                      ),
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex gap-1.5",
                        children: [
                          (0, a.jsx)("div", {
                            className: "w-3 h-3 rounded-full bg-red-500/80",
                          }),
                          (0, a.jsx)("div", {
                            className: "w-3 h-3 rounded-full bg-amber-500/80",
                          }),
                          (0, a.jsx)("div", {
                            className: "w-3 h-3 rounded-full bg-green-500/80",
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "mx-auto text-xs px-3 py-1 rounded-md opacity-50 font-medium ".concat(
                            "dark" === e
                              ? "bg-black text-white"
                              : "bg-white text-black shadow-sm",
                          ),
                        children: "fyndo.co/ninth-note",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex-1 overflow-y-auto",
                    style: { fontFamily: u },
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "h-[400px] w-full flex items-center justify-center relative overflow-hidden group cursor-pointer",
                        children: [
                          (0, a.jsx)("div", {
                            className: "absolute inset-0 bg-neutral-500/10",
                          }),
                          (0, a.jsxs)("div", {
                            className: "relative z-10 text-center p-8",
                            children: [
                              (0, a.jsx)("h1", {
                                className:
                                  "text-6xl font-black tracking-tighter mb-4 ".concat(
                                    "dark" === e ? "text-white" : "text-black",
                                  ),
                                children: "NINTH NOTE",
                              }),
                              (0, a.jsx)("p", {
                                className:
                                  "text-lg mb-8 max-w-md mx-auto ".concat(
                                    "dark" === e
                                      ? "text-neutral-400"
                                      : "text-neutral-600",
                                  ),
                                children:
                                  "Extrait de Parfum. Olfactory luxury from the void.",
                              }),
                              (0, a.jsx)("button", {
                                className:
                                  "px-8 py-3 rounded-full font-medium text-sm transition-all shadow-lg hover:scale-105 active:scale-95",
                                style: {
                                  backgroundColor: r,
                                  color: "dark" === e ? "#000" : "#fff",
                                },
                                children: "Explore Collection",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "p-12",
                        children: (0, a.jsx)("div", {
                          className: "grid grid-cols-3 gap-8",
                          children: [1, 2, 3].map((t) =>
                            (0, a.jsxs)(
                              "div",
                              {
                                className: "group cursor-pointer",
                                children: [
                                  (0, a.jsx)("div", {
                                    className:
                                      "aspect-square w-full rounded-2xl mb-4 transition-colors ".concat(
                                        "dark" === e
                                          ? "bg-neutral-900"
                                          : "bg-neutral-100",
                                      ),
                                  }),
                                  (0, a.jsxs)("h3", {
                                    className: "font-bold mb-1 ".concat(
                                      "dark" === e
                                        ? "text-white"
                                        : "text-black",
                                    ),
                                    children: ["Product ", t],
                                  }),
                                  (0, a.jsx)("p", {
                                    className: "text-sm ".concat(
                                      "dark" === e
                                        ? "text-neutral-500"
                                        : "text-neutral-400",
                                    ),
                                    children: "$185.00",
                                  }),
                                ],
                              },
                              t,
                            ),
                          ),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    8613: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => o });
      var a = r(7810);
      let l = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        s = function () {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return t.filter((e, t, r) => !!e && r.indexOf(e) === t).join(" ");
        };
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
      let c = (0, a.forwardRef)((e, t) => {
          let {
            color: r = "currentColor",
            size: l = 24,
            strokeWidth: c = 2,
            absoluteStrokeWidth: o,
            className: i = "",
            children: d,
            iconNode: x,
            ...h
          } = e;
          return (0, a.createElement)(
            "svg",
            {
              ref: t,
              ...n,
              width: l,
              height: l,
              stroke: r,
              strokeWidth: o ? (24 * Number(c)) / Number(l) : c,
              className: s("lucide", i),
              ...h,
            },
            [
              ...x.map((e) => {
                let [t, r] = e;
                return (0, a.createElement)(t, r);
              }),
              ...(Array.isArray(d) ? d : [d]),
            ],
          );
        }),
        o = (e, t) => {
          let r = (0, a.forwardRef)((r, n) => {
            let { className: o, ...i } = r;
            return (0, a.createElement)(c, {
              ref: n,
              iconNode: t,
              className: s("lucide-".concat(l(e)), o),
              ...i,
            });
          });
          return ((r.displayName = "".concat(e)), r);
        };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [345, 996, 744], () => t(8371)), (_N_E = e.O()));
  },
]);
