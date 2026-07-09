(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    2821: (e, s, t) => {
      Promise.resolve().then(t.bind(t, 2375));
    },
    2375: (e, s, t) => {
      "use strict";
      (t.r(s), t.d(s, { default: () => x }));
      var a = t(8449),
        l = t(2588),
        i = t(1982),
        r = t(4930),
        n = t(5460),
        d = t(9707),
        c = t(5586);
      function x() {
        let e = {
          hidden: { opacity: 0, y: 20 },
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
              className: "mb-12 flex justify-between items-end",
              children: [
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)("h1", {
                      className:
                        "text-4xl font-black tracking-tight text-white mb-2",
                      children: "Dashboard",
                    }),
                    (0, a.jsx)("p", {
                      className: "text-neutral-400",
                      children:
                        "Welcome back, Ninth Note. Here's your brand overview.",
                    }),
                  ],
                }),
                (0, a.jsxs)("button", {
                  className:
                    "bg-white text-black px-6 py-2 rounded-full font-medium text-sm hover:bg-neutral-200 transition-colors flex items-center gap-2",
                  children: [
                    "Start Livestream ",
                    (0, a.jsx)(i.Z, { className: "w-4 h-4" }),
                  ],
                }),
              ],
            }),
            (0, a.jsxs)(l.E.div, {
              variants: {
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.1 } },
              },
              initial: "hidden",
              animate: "show",
              className:
                "grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[160px]",
              children: [
                (0, a.jsxs)(l.E.div, {
                  variants: e,
                  className:
                    "md:col-span-2 md:row-span-2 bg-gradient-to-br from-neutral-900 to-black border border-white/10 rounded-3xl p-8 relative overflow-hidden group",
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "absolute inset-0 bg-white/[0.02] group-hover:bg-white/[0.04] transition-colors",
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "relative z-10 h-full flex flex-col justify-between",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex justify-between items-start",
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "p-3 bg-white/10 rounded-2xl backdrop-blur-md",
                              children: (0, a.jsx)(r.Z, {
                                className: "w-6 h-6 text-white",
                              }),
                            }),
                            (0, a.jsxs)("span", {
                              className:
                                "text-emerald-400 text-sm font-medium flex items-center gap-1",
                              children: [
                                "+14.2% ",
                                (0, a.jsx)(i.Z, { className: "w-3 h-3" }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsx)("p", {
                              className: "text-neutral-400 font-medium mb-2",
                              children: "Total Revenue",
                            }),
                            (0, a.jsxs)("h2", {
                              className:
                                "text-5xl font-black tracking-tighter text-white",
                              children: [
                                "$124,500",
                                (0, a.jsx)("span", {
                                  className:
                                    "text-2xl text-neutral-500 font-normal",
                                  children: ".00",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "absolute bottom-0 left-0 right-0 h-32 flex items-end justify-between px-8 pb-8 opacity-20 pointer-events-none gap-2",
                      children: [40, 70, 45, 90, 65, 80, 100].map((e, s) =>
                        (0, a.jsx)(
                          l.E.div,
                          {
                            initial: { height: 0 },
                            animate: { height: "".concat(e, "%") },
                            transition: {
                              duration: 1,
                              delay: 0.1 * s,
                              type: "spring",
                            },
                            className: "w-full bg-white rounded-t-sm",
                          },
                          s,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, a.jsxs)(l.E.div, {
                  variants: e,
                  className:
                    "bg-neutral-900 border border-white/10 rounded-3xl p-6 flex flex-col justify-between",
                  children: [
                    (0, a.jsx)("div", {
                      className: "p-3 bg-white/5 rounded-xl w-fit",
                      children: (0, a.jsx)(n.Z, {
                        className: "w-5 h-5 text-neutral-300",
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsx)("p", {
                          className:
                            "text-neutral-400 text-sm font-medium mb-1",
                          children: "Active Watchers",
                        }),
                        (0, a.jsx)("h3", {
                          className: "text-3xl font-bold text-white",
                          children: "1,248",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)(l.E.div, {
                  variants: e,
                  className:
                    "bg-rose-500/10 border border-rose-500/20 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden",
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "absolute top-0 right-0 w-32 h-32 bg-rose-500/20 rounded-full blur-3xl -mr-10 -mt-10",
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex items-center gap-2 mb-4",
                      children: [
                        (0, a.jsx)("span", {
                          className:
                            "w-2 h-2 rounded-full bg-rose-500 animate-pulse",
                        }),
                        (0, a.jsx)("span", {
                          className:
                            "text-rose-500 text-xs font-bold tracking-wider uppercase",
                          children: "Live Now",
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "p-3 bg-rose-500/20 rounded-xl w-fit mb-4 text-rose-500",
                      children: (0, a.jsx)(d.Z, { className: "w-5 h-5" }),
                    }),
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsx)("p", {
                          className:
                            "text-rose-200/70 text-sm font-medium mb-1",
                          children: "Livestream Viewers",
                        }),
                        (0, a.jsx)("h3", {
                          className: "text-3xl font-bold text-white",
                          children: "4,892",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)(l.E.div, {
                  variants: e,
                  className:
                    "md:col-span-2 bg-neutral-900 border border-white/10 rounded-3xl p-6 flex flex-col justify-between",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex justify-between items-start mb-6",
                      children: [
                        (0, a.jsx)("div", {
                          className: "p-3 bg-white/5 rounded-xl w-fit",
                          children: (0, a.jsx)(c.Z, {
                            className: "w-5 h-5 text-neutral-300",
                          }),
                        }),
                        (0, a.jsx)("a", {
                          href: "#",
                          className:
                            "text-sm text-neutral-400 hover:text-white transition-colors",
                          children: "View all",
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex items-end justify-between",
                      children: [
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsx)("p", {
                              className:
                                "text-neutral-400 text-sm font-medium mb-1",
                              children: "Pending Fulfillment",
                            }),
                            (0, a.jsxs)("h3", {
                              className: "text-3xl font-bold text-white",
                              children: [
                                "34 ",
                                (0, a.jsx)("span", {
                                  className:
                                    "text-base font-normal text-neutral-500",
                                  children: "orders",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className: "flex -space-x-3",
                          children: [1, 2, 3, 4].map((e) =>
                            (0, a.jsx)(
                              "div",
                              {
                                className:
                                  "w-10 h-10 rounded-full border-2 border-neutral-900 bg-neutral-800 flex items-center justify-center z-[".concat(
                                    5 - e,
                                    "]",
                                  ),
                                children: (0, a.jsx)(c.Z, {
                                  className: "w-4 h-4 text-neutral-500",
                                }),
                              },
                              e,
                            ),
                          ),
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
    (e.O(0, [666, 345, 996, 744], () => s(2821)), (_N_E = e.O()));
  },
]);
