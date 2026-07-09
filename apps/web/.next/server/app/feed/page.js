(() => {
  var e = {};
  ((e.id = 826),
    (e.ids = [826]),
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
      3835: (e, t, r) => {
        "use strict";
        (r.r(t),
          r.d(t, {
            GlobalError: () => n.a,
            __next_app__: () => m,
            pages: () => c,
            routeModule: () => h,
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
                "feed",
                {
                  children: [
                    "__PAGE__",
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(r.bind(r, 5238)),
                        "C:\\Users\\rogsh\\Documents\\Antigravity\\Fyndo\\apps\\web\\app\\feed\\page.tsx",
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
                "C:\\Users\\rogsh\\Documents\\Antigravity\\Fyndo\\apps\\web\\app\\layout.tsx",
              ],
              "not-found": [
                () => Promise.resolve().then(r.t.bind(r, 3345, 23)),
                "next/dist/client/components/not-found-error",
              ],
            },
          ],
          c = [
            "C:\\Users\\rogsh\\Documents\\Antigravity\\Fyndo\\apps\\web\\app\\feed\\page.tsx",
          ],
          m = { require: r, loadChunk: () => Promise.resolve() },
          h = new s.AppPageRouteModule({
            definition: {
              kind: a.RouteKind.APP_PAGE,
              page: "/feed/page",
              pathname: "/feed",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
      2165: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 3310));
      },
      6200: (e, t, r) => {
        (Promise.resolve().then(r.bind(r, 213)),
          Promise.resolve().then(r.t.bind(r, 1397, 23)));
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
      3310: (e, t, r) => {
        "use strict";
        (r.r(t), r.d(t, { default: () => c }));
        var s = r(1162),
          a = r(5875),
          i = r(247);
        let n = (0, i.Z)("Ellipsis", [
            ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
            ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
            ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }],
          ]),
          o = (0, i.Z)("Heart", [
            [
              "path",
              {
                d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
                key: "c3ymky",
              },
            ],
          ]),
          l = (0, i.Z)("MessageCircle", [
            ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
          ]),
          d = (0, i.Z)("Share2", [
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
              {
                x1: "15.41",
                x2: "8.59",
                y1: "6.51",
                y2: "10.49",
                key: "1n3mei",
              },
            ],
          ]);
        function c() {
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
                      a.E.article,
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
                                children: (0, s.jsx)(n, {
                                  className: "w-5 h-5",
                                }),
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
                                  className:
                                    "flex items-center justify-between",
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
                                          className:
                                            "w-1 bg-white rounded-t-sm",
                                          style: {
                                            height: `${Math.max(20, 100 * Math.random())}%`,
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
                                      (0, s.jsx)(o, {
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
                                      (0, s.jsx)(l, { className: "w-5 h-5" }),
                                      (0, s.jsx)("span", {
                                        className: "text-sm font-bold",
                                        children: e.comments,
                                      }),
                                    ],
                                  }),
                                  (0, s.jsx)("button", {
                                    className:
                                      "flex items-center gap-2 hover:text-neutral-900 transition-colors ml-auto",
                                    children: (0, s.jsx)(d, {
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
      213: (e, t, r) => {
        "use strict";
        r.d(t, { PageTransition: () => o });
        var s = r(1162),
          a = r(6426),
          i = r(5875),
          n = r(2380);
        function o({ children: e }) {
          let t = (0, n.usePathname)();
          return (0, s.jsx)(a.M, {
            mode: "wait",
            children: (0, s.jsx)(
              i.E.div,
              {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -10 },
                transition: { duration: 0.2, ease: "easeInOut" },
                className: "flex min-h-screen flex-col",
                children: e,
              },
              t,
            ),
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
              m,
            ) =>
              (0, s.createElement)(
                "svg",
                {
                  ref: m,
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
      5238: (e, t, r) => {
        "use strict";
        r.a(
          e,
          async (e, s) => {
            try {
              (r.r(t), r.d(t, { default: () => e }));
              var a = r(8106);
              let e = (
                await (0, a.createProxy)(
                  String.raw`C:\Users\rogsh\Documents\Antigravity\Fyndo\apps\web\app\feed\page.tsx`,
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
      626: (e, t, r) => {
        "use strict";
        r.a(e, async (e, s) => {
          try {
            (r.r(t), r.d(t, { default: () => c, metadata: () => m }));
            var a = r(2241),
              i = r(997),
              n = r.n(i);
            r(463);
            var o = r(4511),
              l = r(1378),
              d = e([l]);
            l = (d.then ? (await d)() : d)[0];
            let m = {
              title: "Fyndo - Core Marketplace & Social Discovery",
              description:
                "The premier destination for highly-curated luxury products.",
            };
            function c({ children: e }) {
              return (0, a.jsx)("html", {
                lang: "en",
                className: "dark",
                children: (0, a.jsxs)("body", {
                  className: n().className,
                  children: [
                    (0, a.jsx)(o.w, {}),
                    (0, a.jsx)("main", {
                      className: "pt-20",
                      children: (0, a.jsx)(l.n, { children: e }),
                    }),
                  ],
                }),
              });
            }
            s();
          } catch (e) {
            s(e);
          }
        });
      },
      4511: (e, t, r) => {
        "use strict";
        r.d(t, { w: () => l });
        var s = r(2241),
          a = r(3825),
          i = r(1469),
          n = r(5077),
          o = r(2079);
        function l() {
          return (0, s.jsxs)("nav", {
            className:
              "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-border/50 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/40",
            children: [
              (0, s.jsxs)("div", {
                className: "flex items-center gap-8",
                children: [
                  (0, s.jsx)(a.default, {
                    href: "/",
                    className:
                      "text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity",
                    children: "Fyndo",
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground",
                    children: [
                      (0, s.jsx)(a.default, {
                        href: "/",
                        className: "hover:text-foreground transition-colors",
                        children: "Discover",
                      }),
                      (0, s.jsx)(a.default, {
                        href: "/collections",
                        className: "hover:text-foreground transition-colors",
                        children: "Collections",
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "flex items-center gap-4",
                children: [
                  (0, s.jsx)("button", {
                    className:
                      "p-2 text-muted-foreground hover:text-foreground transition-colors",
                    children: (0, s.jsx)(i.Z, { className: "w-5 h-5" }),
                  }),
                  (0, s.jsx)("button", {
                    className:
                      "p-2 text-muted-foreground hover:text-foreground transition-colors",
                    children: (0, s.jsx)(n.Z, { className: "w-5 h-5" }),
                  }),
                  (0, s.jsx)("button", {
                    className:
                      "p-2 text-muted-foreground hover:text-foreground transition-colors",
                    children: (0, s.jsx)(o.Z, { className: "w-5 h-5" }),
                  }),
                ],
              }),
            ],
          });
        }
      },
      1378: (e, t, r) => {
        "use strict";
        r.a(
          e,
          async (e, s) => {
            try {
              r.d(t, { n: () => e });
              var a = r(8106);
              let e = (
                await (0, a.createProxy)(
                  String.raw`C:\Users\rogsh\Documents\Antigravity\Fyndo\apps\web\components\page-transition.tsx`,
                )
              ).PageTransition;
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
    s = t.X(0, [630, 59], () => r(3835));
  module.exports = s;
})();
