(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [826],
  {
    9126: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 8501));
    },
    8501: (e, t, a) => {
      "use strict";
      (a.r(t), a.d(t, { default: () => d }));
      var s = a(8449),
        r = a(7547),
        l = a(8613);
      let i = (0, l.Z)("Ellipsis", [
          ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
          ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
          ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }],
        ]),
        n = (0, l.Z)("Heart", [
          [
            "path",
            {
              d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
              key: "c3ymky",
            },
          ],
        ]),
        c = (0, l.Z)("MessageCircle", [
          ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
        ]),
        o = (0, l.Z)("Share2", [
          ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
          ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
          ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
          [
            "line",
            {
              x1: "8.59",
              x2: "15.42",
              y1: "13.51",
              y2: "17.49",
              key: "47mynk",
            },
          ],
          [
            "line",
            { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" },
          ],
        ]);
      function d() {
        return (0, s.jsx)("div", {
          className: "min-h-screen bg-neutral-50 flex justify-center py-12",
          children: (0, s.jsxs)("div", {
            className: "w-full max-w-2xl px-6",
            children: [
              (0, s.jsxs)("header", {
                className: "mb-12",
                children: [
                  (0, s.jsx)("h1", {
                    className:
                      "text-3xl font-black tracking-tight text-neutral-900 mb-2",
                    children: "Discovery Feed",
                  }),
                  (0, s.jsx)("p", {
                    className: "text-neutral-500 font-medium",
                    children:
                      "Updates, drops, and stories from creators you follow.",
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: "space-y-12",
                children: [
                  {
                    id: "p1",
                    author: "Ninth Note Official",
                    avatar: "N",
                    time: "2 hours ago",
                    content:
                      "The essence of midnight. Introducing 'Vanilla Noir', a limited drop exploring the darker notes of Madagascar vanilla, paired with smoked oud and black pepper. Pre-orders open tonight.",
                    media: "/placeholder-perfume.jpg",
                    mediaType: "image",
                    likes: 1242,
                    comments: 89,
                  },
                  {
                    id: "p2",
                    author: "Element UX Studio",
                    avatar: "E",
                    time: "5 hours ago",
                    content:
                      "Exploring brutally minimalist interfaces for high-density trading platforms. Here's a sneak peek at the typography system we're shipping next month.",
                    media: null,
                    mediaType: null,
                    likes: 432,
                    comments: 12,
                  },
                  {
                    id: "p3",
                    author: "Vektor Archives",
                    avatar: "V",
                    time: "12 hours ago",
                    content:
                      "Behind the scenes: Crafting the new titanium casing. Notice the micro-bevels.",
                    media: "/placeholder-video.mp4",
                    mediaType: "video",
                    likes: 890,
                    comments: 45,
                  },
                  {
                    id: "p4",
                    author: "Soundscapes & Co.",
                    avatar: "S",
                    time: "1 day ago",
                    content:
                      "Listen to the raw analog warmth of the new synthesizer module. Pure vintage tone.",
                    media: "/placeholder-audio.mp3",
                    mediaType: "audio",
                    likes: 567,
                    comments: 23,
                  },
                ].map((e) =>
                  (0, s.jsxs)(
                    r.E.article,
                    {
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      className:
                        "bg-white border border-neutral-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow",
                      children: [
                        (0, s.jsxs)("div", {
                          className: "p-6 flex items-center justify-between",
                          children: [
                            (0, s.jsxs)("div", {
                              className: "flex items-center gap-4",
                              children: [
                                (0, s.jsx)("div", {
                                  className:
                                    "w-12 h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold",
                                  children: e.avatar,
                                }),
                                (0, s.jsxs)("div", {
                                  children: [
                                    (0, s.jsx)("h3", {
                                      className: "font-bold text-neutral-900",
                                      children: e.author,
                                    }),
                                    (0, s.jsx)("p", {
                                      className:
                                        "text-xs font-medium text-neutral-400",
                                      children: e.time,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, s.jsx)("button", {
                              className:
                                "text-neutral-400 hover:text-neutral-900 transition-colors",
                              children: (0, s.jsx)(i, { className: "w-5 h-5" }),
                            }),
                          ],
                        }),
                        e.media &&
                          "image" === e.mediaType &&
                          (0, s.jsxs)("div", {
                            className:
                              "w-full aspect-[4/3] bg-neutral-100 flex items-center justify-center border-y border-neutral-100 relative overflow-hidden",
                            children: [
                              (0, s.jsx)("div", {
                                className:
                                  "absolute inset-0 bg-gradient-to-tr from-neutral-200 to-neutral-50 opacity-50",
                              }),
                              (0, s.jsx)("span", {
                                className:
                                  "text-neutral-400 font-medium text-sm z-10",
                                children: "[ Rich Media Placeholder ]",
                              }),
                            ],
                          }),
                        e.media &&
                          "video" === e.mediaType &&
                          (0, s.jsxs)("div", {
                            className:
                              "w-full aspect-[4/3] bg-black flex items-center justify-center border-y border-neutral-900 relative overflow-hidden",
                            children: [
                              (0, s.jsx)("video", {
                                src: e.media,
                                autoPlay: !0,
                                loop: !0,
                                muted: !0,
                                playsInline: !0,
                                className:
                                  "absolute inset-0 w-full h-full object-cover opacity-80",
                              }),
                              (0, s.jsx)("span", {
                                className:
                                  "text-white/50 font-medium text-sm z-10",
                                children: "[ Video Placeholder ]",
                              }),
                            ],
                          }),
                        e.media &&
                          "audio" === e.mediaType &&
                          (0, s.jsxs)("div", {
                            className:
                              "w-full p-6 bg-neutral-900 border-y border-neutral-800 text-white flex flex-col gap-4",
                            children: [
                              (0, s.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [
                                  (0, s.jsx)("span", {
                                    className:
                                      "font-medium text-sm tracking-wide",
                                    children: "Voice Memo",
                                  }),
                                  (0, s.jsx)("span", {
                                    className: "text-xs text-neutral-400",
                                    children: "0:45",
                                  }),
                                ],
                              }),
                              (0, s.jsx)("div", {
                                className:
                                  "h-12 bg-neutral-800 rounded-full flex items-center px-4 overflow-hidden relative",
                                children: (0, s.jsx)("div", {
                                  className:
                                    "flex gap-1 items-end h-6 opacity-50",
                                  children: [...Array(30)].map((e, t) =>
                                    (0, s.jsx)(
                                      "div",
                                      {
                                        className: "w-1 bg-white rounded-t-sm",
                                        style: {
                                          height: "".concat(
                                            Math.max(20, 100 * Math.random()),
                                            "%",
                                          ),
                                        },
                                      },
                                      t,
                                    ),
                                  ),
                                }),
                              }),
                            ],
                          }),
                        (0, s.jsxs)("div", {
                          className: "p-6",
                          children: [
                            (0, s.jsx)("p", {
                              className:
                                "text-neutral-700 leading-relaxed text-[15px] mb-6",
                              children: e.content,
                            }),
                            (0, s.jsxs)("div", {
                              className:
                                "flex items-center gap-6 text-neutral-500",
                              children: [
                                (0, s.jsxs)("button", {
                                  className:
                                    "flex items-center gap-2 hover:text-red-500 transition-colors group",
                                  children: [
                                    (0, s.jsx)(n, {
                                      className:
                                        "w-5 h-5 group-hover:fill-red-500",
                                    }),
                                    (0, s.jsx)("span", {
                                      className: "text-sm font-bold",
                                      children: e.likes,
                                    }),
                                  ],
                                }),
                                (0, s.jsxs)("button", {
                                  className:
                                    "flex items-center gap-2 hover:text-neutral-900 transition-colors",
                                  children: [
                                    (0, s.jsx)(c, { className: "w-5 h-5" }),
                                    (0, s.jsx)("span", {
                                      className: "text-sm font-bold",
                                      children: e.comments,
                                    }),
                                  ],
                                }),
                                (0, s.jsx)("button", {
                                  className:
                                    "flex items-center gap-2 hover:text-neutral-900 transition-colors ml-auto",
                                  children: (0, s.jsx)(o, {
                                    className: "w-5 h-5",
                                  }),
                                }),
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
        });
      }
    },
    8613: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => c });
      var s = a(7810);
      let r = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        l = function () {
          for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
            t[a] = arguments[a];
          return t.filter((e, t, a) => !!e && a.indexOf(e) === t).join(" ");
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
      let n = (0, s.forwardRef)((e, t) => {
          let {
            color: a = "currentColor",
            size: r = 24,
            strokeWidth: n = 2,
            absoluteStrokeWidth: c,
            className: o = "",
            children: d,
            iconNode: m,
            ...h
          } = e;
          return (0, s.createElement)(
            "svg",
            {
              ref: t,
              ...i,
              width: r,
              height: r,
              stroke: a,
              strokeWidth: c ? (24 * Number(n)) / Number(r) : n,
              className: l("lucide", o),
              ...h,
            },
            [
              ...m.map((e) => {
                let [t, a] = e;
                return (0, s.createElement)(t, a);
              }),
              ...(Array.isArray(d) ? d : [d]),
            ],
          );
        }),
        c = (e, t) => {
          let a = (0, s.forwardRef)((a, i) => {
            let { className: c, ...o } = a;
            return (0, s.createElement)(n, {
              ref: i,
              iconNode: t,
              className: l("lucide-".concat(r(e)), c),
              ...o,
            });
          });
          return ((a.displayName = "".concat(e)), a);
        };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [102, 547, 345, 996, 744], () => t(9126)), (_N_E = e.O()));
  },
]);
