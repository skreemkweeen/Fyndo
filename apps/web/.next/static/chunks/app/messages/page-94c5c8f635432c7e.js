(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [750],
  {
    948: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 3925));
    },
    3925: (e, t, r) => {
      "use strict";
      (r.r(t), r.d(t, { default: () => f }));
      var s = r(8449),
        n = r(4068),
        l = r(7547),
        a = r(8613);
      let i = (0, a.Z)("Search", [
          ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
          ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
        ]),
        o = (0, a.Z)("Info", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["path", { d: "M12 16v-4", key: "1dtifu" }],
          ["path", { d: "M12 8h.01", key: "e9boi3" }],
        ]),
        c = (0, a.Z)("Image", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              ry: "2",
              key: "1m3agn",
            },
          ],
          ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
          [
            "path",
            { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" },
          ],
        ]),
        d = (0, a.Z)("Tag", [
          [
            "path",
            {
              d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
              key: "vktsd0",
            },
          ],
          [
            "circle",
            {
              cx: "7.5",
              cy: "7.5",
              r: ".5",
              fill: "currentColor",
              key: "kqv944",
            },
          ],
        ]),
        u = (0, a.Z)("Send", [
          [
            "path",
            {
              d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
              key: "1ffxy3",
            },
          ],
          ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
        ]);
      var h = r(7810);
      let m = [
          {
            id: "1",
            name: "Ninth Note Official",
            lastMessage: "Yes, the new fragrance is available.",
            unread: 2,
            avatar: "N",
          },
          {
            id: "2",
            name: "Element UX Studio",
            lastMessage: "Sent an offer for the poster.",
            unread: 0,
            avatar: "E",
          },
        ],
        x = [
          {
            id: "m1",
            sender: "other",
            text: "Are you open to offers on the Vintage Lamp?",
            time: "10:24 AM",
          },
          {
            id: "m2",
            sender: "me",
            text: "Yes, what were you thinking?",
            time: "10:26 AM",
          },
          {
            id: "m3",
            sender: "other",
            text: "Would you take $120?",
            time: "10:28 AM",
            offer: {
              id: "o1",
              amount: 120,
              status: "pending",
              product: "Vintage Industrial Lamp",
            },
          },
        ];
      function f() {
        let [e, t] = (0, h.useState)(x),
          [r, a] = (0, h.useState)(""),
          [f, p] = (0, h.useState)(m[0]),
          b = (0, h.useRef)(null),
          g = () => {
            var e;
            null === (e = b.current) ||
              void 0 === e ||
              e.scrollIntoView({ behavior: "smooth" });
          };
        (0, h.useEffect)(() => {
          g();
        }, [e]);
        let v = () => {
          r.trim() &&
            (t([
              ...e,
              {
                id: Date.now().toString(),
                sender: "me",
                text: r,
                time: new Date().toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                }),
              },
            ]),
            a(""));
        };
        return (0, s.jsxs)("div", {
          className:
            "flex h-screen bg-neutral-50 text-neutral-900 overflow-hidden font-sans",
          children: [
            (0, s.jsxs)("aside", {
              className:
                "w-80 border-r border-neutral-200 bg-white flex flex-col shrink-0",
              children: [
                (0, s.jsxs)("div", {
                  className: "p-6 border-b border-neutral-200",
                  children: [
                    (0, s.jsx)("h1", {
                      className: "text-2xl font-black tracking-tight mb-4",
                      children: "Messages",
                    }),
                    (0, s.jsxs)("div", {
                      className: "relative",
                      children: [
                        (0, s.jsx)(i, {
                          className:
                            "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400",
                        }),
                        (0, s.jsx)("input", {
                          type: "text",
                          placeholder: "Search conversations...",
                          className:
                            "w-full bg-neutral-100 rounded-xl pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/5",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className: "flex-1 overflow-y-auto",
                  children: m.map((e) =>
                    (0, s.jsxs)(
                      "div",
                      {
                        onClick: () => p(e),
                        className:
                          "p-4 border-b border-neutral-100 cursor-pointer transition-colors flex items-center gap-3 ".concat(
                            f.id === e.id
                              ? "bg-neutral-50"
                              : "hover:bg-neutral-50/50",
                          ),
                        children: [
                          (0, s.jsx)("div", {
                            className:
                              "w-12 h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold shrink-0",
                            children: e.avatar,
                          }),
                          (0, s.jsxs)("div", {
                            className: "flex-1 min-w-0",
                            children: [
                              (0, s.jsxs)("div", {
                                className:
                                  "flex justify-between items-baseline mb-1",
                                children: [
                                  (0, s.jsx)("h3", {
                                    className: "font-bold text-sm truncate",
                                    children: e.name,
                                  }),
                                  (0, s.jsx)("span", {
                                    className:
                                      "text-[10px] font-medium text-neutral-400",
                                    children: "10:28 AM",
                                  }),
                                ],
                              }),
                              (0, s.jsx)("p", {
                                className: "text-xs text-neutral-500 truncate",
                                children: e.lastMessage,
                              }),
                            ],
                          }),
                          e.unread > 0 &&
                            (0, s.jsx)("div", {
                              className:
                                "w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center shrink-0",
                              children: e.unread,
                            }),
                        ],
                      },
                      e.id,
                    ),
                  ),
                }),
              ],
            }),
            (0, s.jsxs)("main", {
              className: "flex-1 flex flex-col bg-white/50 relative",
              children: [
                (0, s.jsxs)("header", {
                  className:
                    "h-20 border-b border-neutral-200 bg-white flex items-center justify-between px-8 shrink-0 backdrop-blur-md sticky top-0 z-10",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "flex items-center gap-4",
                      children: [
                        (0, s.jsx)("div", {
                          className:
                            "w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold",
                          children: f.avatar,
                        }),
                        (0, s.jsxs)("div", {
                          children: [
                            (0, s.jsx)("h2", {
                              className: "font-bold text-lg",
                              children: f.name,
                            }),
                            (0, s.jsxs)("p", {
                              className:
                                "text-xs text-emerald-600 font-medium flex items-center gap-1",
                              children: [
                                (0, s.jsx)("span", {
                                  className:
                                    "w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block",
                                }),
                                " Active now",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsx)("button", {
                      className:
                        "p-2 hover:bg-neutral-100 rounded-full transition-colors",
                      children: (0, s.jsx)(o, {
                        className: "w-5 h-5 text-neutral-400",
                      }),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "flex-1 overflow-y-auto p-8 space-y-6",
                  children: [
                    (0, s.jsx)(n.M, {
                      initial: !1,
                      children: e.map((e) =>
                        (0, s.jsxs)(
                          l.E.div,
                          {
                            initial: { opacity: 0, y: 10, scale: 0.98 },
                            animate: { opacity: 1, y: 0, scale: 1 },
                            layout: !0,
                            className: "flex flex-col ".concat(
                              "me" === e.sender ? "items-end" : "items-start",
                            ),
                            children: [
                              (0, s.jsxs)("div", {
                                className: "flex items-end gap-2 max-w-[70%]",
                                children: [
                                  "other" === e.sender &&
                                    (0, s.jsx)("div", {
                                      className:
                                        "w-6 h-6 rounded-full bg-neutral-200 shrink-0 mb-1",
                                    }),
                                  (0, s.jsxs)("div", {
                                    className:
                                      "group relative flex flex-col ".concat(
                                        "me" === e.sender
                                          ? "items-end"
                                          : "items-start",
                                      ),
                                    children: [
                                      (0, s.jsx)("div", {
                                        className:
                                          "px-5 py-3 rounded-2xl text-sm shadow-sm ".concat(
                                            "me" === e.sender
                                              ? "bg-neutral-900 text-white rounded-br-sm"
                                              : "bg-white border border-neutral-200 text-neutral-900 rounded-bl-sm",
                                          ),
                                        children: e.text,
                                      }),
                                      e.offer &&
                                        (0, s.jsxs)("div", {
                                          className:
                                            "mt-2 w-72 bg-white border border-neutral-200 rounded-2xl p-4 shadow-sm",
                                          children: [
                                            (0, s.jsxs)("div", {
                                              className:
                                                "flex items-center justify-between mb-3 border-b border-neutral-100 pb-3",
                                              children: [
                                                (0, s.jsx)("span", {
                                                  className:
                                                    "text-xs font-bold uppercase tracking-wider text-neutral-400",
                                                  children: "Binding Offer",
                                                }),
                                                (0, s.jsxs)("span", {
                                                  className:
                                                    "font-mono text-lg font-black",
                                                  children: [
                                                    "$",
                                                    e.offer.amount,
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, s.jsx)("p", {
                                              className:
                                                "text-sm font-medium mb-4",
                                              children: e.offer.product,
                                            }),
                                            (0, s.jsxs)("div", {
                                              className: "flex gap-2",
                                              children: [
                                                (0, s.jsx)("button", {
                                                  className:
                                                    "flex-1 bg-neutral-900 text-white text-xs font-bold py-2 rounded-lg hover:bg-neutral-800 transition-colors",
                                                  children: "Accept",
                                                }),
                                                (0, s.jsx)("button", {
                                                  className:
                                                    "flex-1 bg-neutral-100 text-neutral-600 text-xs font-bold py-2 rounded-lg hover:bg-neutral-200 transition-colors",
                                                  children: "Decline",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, s.jsx)("span", {
                                className:
                                  "text-[10px] font-medium text-neutral-400 mt-1 px-8",
                                children: e.time,
                              }),
                            ],
                          },
                          e.id,
                        ),
                      ),
                    }),
                    (0, s.jsx)("div", { ref: b }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "p-6 bg-white border-t border-neutral-200",
                  children: [
                    (0, s.jsxs)("div", {
                      className:
                        "max-w-4xl mx-auto flex items-end gap-3 bg-neutral-50 border border-neutral-200 p-2 rounded-3xl focus-within:ring-2 focus-within:ring-black/5 focus-within:border-neutral-300 transition-all",
                      children: [
                        (0, s.jsx)("button", {
                          className:
                            "p-2.5 text-neutral-400 hover:text-neutral-900 hover:bg-neutral-200 rounded-full transition-colors shrink-0",
                          children: (0, s.jsx)(c, { className: "w-5 h-5" }),
                        }),
                        (0, s.jsx)("button", {
                          className:
                            "p-2.5 text-neutral-400 hover:text-neutral-900 hover:bg-neutral-200 rounded-full transition-colors shrink-0",
                          children: (0, s.jsx)(d, { className: "w-5 h-5" }),
                        }),
                        (0, s.jsx)("input", {
                          type: "text",
                          value: r,
                          onChange: (e) => a(e.target.value),
                          onKeyDown: (e) => "Enter" === e.key && v(),
                          placeholder: "Type a message or send an offer...",
                          className:
                            "flex-1 bg-transparent border-none focus:outline-none text-sm py-2.5",
                        }),
                        (0, s.jsx)("button", {
                          onClick: v,
                          disabled: !r.trim(),
                          className:
                            "p-2.5 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0",
                          children: (0, s.jsx)(u, { className: "w-4 h-4" }),
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className: "text-center mt-3",
                      children: (0, s.jsx)("span", {
                        className: "text-[10px] text-neutral-400 font-medium",
                        children:
                          "Offers are securely processed via Stripe Connect Escrow.",
                      }),
                    }),
                  ],
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
      let n = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        l = function () {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return t.filter((e, t, r) => !!e && r.indexOf(e) === t).join(" ");
        };
      var a = {
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
      let i = (0, s.forwardRef)((e, t) => {
          let {
            color: r = "currentColor",
            size: n = 24,
            strokeWidth: i = 2,
            absoluteStrokeWidth: o,
            className: c = "",
            children: d,
            iconNode: u,
            ...h
          } = e;
          return (0, s.createElement)(
            "svg",
            {
              ref: t,
              ...a,
              width: n,
              height: n,
              stroke: r,
              strokeWidth: o ? (24 * Number(i)) / Number(n) : i,
              className: l("lucide", c),
              ...h,
            },
            [
              ...u.map((e) => {
                let [t, r] = e;
                return (0, s.createElement)(t, r);
              }),
              ...(Array.isArray(d) ? d : [d]),
            ],
          );
        }),
        o = (e, t) => {
          let r = (0, s.forwardRef)((r, a) => {
            let { className: o, ...c } = r;
            return (0, s.createElement)(i, {
              ref: a,
              iconNode: t,
              className: l("lucide-".concat(n(e)), o),
              ...c,
            });
          });
          return ((r.displayName = "".concat(e)), r);
        };
    },
    4068: (e, t, r) => {
      "use strict";
      r.d(t, { M: () => b });
      var s = r(8449),
        n = r(7810),
        l = r(6973),
        a = r(8312),
        i = r(2272),
        o = r(2820);
      class c extends n.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = this.props.sizeRef.current;
            ((e.height = t.offsetHeight || 0),
              (e.width = t.offsetWidth || 0),
              (e.top = t.offsetTop),
              (e.left = t.offsetLeft));
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function d(e) {
        let { children: t, isPresent: r } = e,
          l = (0, n.useId)(),
          a = (0, n.useRef)(null),
          i = (0, n.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
          { nonce: d } = (0, n.useContext)(o._);
        return (
          (0, n.useInsertionEffect)(() => {
            let { width: e, height: t, top: s, left: n } = i.current;
            if (r || !a.current || !e || !t) return;
            a.current.dataset.motionPopId = l;
            let o = document.createElement("style");
            return (
              d && (o.nonce = d),
              document.head.appendChild(o),
              o.sheet &&
                o.sheet.insertRule(
                  '\n          [data-motion-pop-id="'
                    .concat(
                      l,
                      '"] {\n            position: absolute !important;\n            width: ',
                    )
                    .concat(e, "px !important;\n            height: ")
                    .concat(t, "px !important;\n            top: ")
                    .concat(s, "px !important;\n            left: ")
                    .concat(n, "px !important;\n          }\n        "),
                ),
              () => {
                document.head.removeChild(o);
              }
            );
          }, [r]),
          (0, s.jsx)(c, {
            isPresent: r,
            childRef: a,
            sizeRef: i,
            children: n.cloneElement(t, { ref: a }),
          })
        );
      }
      let u = (e) => {
        let {
            children: t,
            initial: r,
            isPresent: l,
            onExitComplete: o,
            custom: c,
            presenceAffectsLayout: u,
            mode: m,
          } = e,
          x = (0, a.h)(h),
          f = (0, n.useId)(),
          p = (0, n.useCallback)(
            (e) => {
              for (let t of (x.set(e, !0), x.values())) if (!t) return;
              o && o();
            },
            [x, o],
          ),
          b = (0, n.useMemo)(
            () => ({
              id: f,
              initial: r,
              isPresent: l,
              custom: c,
              onExitComplete: p,
              register: (e) => (x.set(e, !1), () => x.delete(e)),
            }),
            u ? [Math.random(), p] : [l, p],
          );
        return (
          (0, n.useMemo)(() => {
            x.forEach((e, t) => x.set(t, !1));
          }, [l]),
          n.useEffect(() => {
            l || x.size || !o || o();
          }, [l]),
          "popLayout" === m &&
            (t = (0, s.jsx)(d, { isPresent: l, children: t })),
          (0, s.jsx)(i.O.Provider, { value: b, children: t })
        );
      };
      function h() {
        return new Map();
      }
      var m = r(7008);
      let x = (e) => e.key || "";
      function f(e) {
        let t = [];
        return (
          n.Children.forEach(e, (e) => {
            (0, n.isValidElement)(e) && t.push(e);
          }),
          t
        );
      }
      var p = r(4617);
      let b = (e) => {
        let {
            children: t,
            custom: r,
            initial: i = !0,
            onExitComplete: o,
            presenceAffectsLayout: c = !0,
            mode: d = "sync",
            propagate: h = !1,
          } = e,
          [b, g] = (0, m.oO)(h),
          v = (0, n.useMemo)(() => f(t), [t]),
          j = h && !b ? [] : v.map(x),
          w = (0, n.useRef)(!0),
          N = (0, n.useRef)(v),
          y = (0, a.h)(() => new Map()),
          [k, E] = (0, n.useState)(v),
          [M, C] = (0, n.useState)(v);
        (0, p.L)(() => {
          ((w.current = !1), (N.current = v));
          for (let e = 0; e < M.length; e++) {
            let t = x(M[e]);
            j.includes(t) ? y.delete(t) : !0 !== y.get(t) && y.set(t, !1);
          }
        }, [M, j.length, j.join("-")]);
        let S = [];
        if (v !== k) {
          let e = [...v];
          for (let t = 0; t < M.length; t++) {
            let r = M[t],
              s = x(r);
            j.includes(s) || (e.splice(t, 0, r), S.push(r));
          }
          ("wait" === d && S.length && (e = S), C(f(e)), E(v));
          return;
        }
        let { forceRender: A } = (0, n.useContext)(l.p);
        return (0, s.jsx)(s.Fragment, {
          children: M.map((e) => {
            let t = x(e),
              n = (!h || !!b) && (v === M || j.includes(t));
            return (0, s.jsx)(
              u,
              {
                isPresent: n,
                initial: (!w.current || !!i) && void 0,
                custom: n ? void 0 : r,
                presenceAffectsLayout: c,
                mode: d,
                onExitComplete: n
                  ? void 0
                  : () => {
                      if (!y.has(t)) return;
                      y.set(t, !0);
                      let e = !0;
                      (y.forEach((t) => {
                        t || (e = !1);
                      }),
                        e &&
                          (null == A || A(),
                          C(N.current),
                          h && (null == g || g()),
                          o && o()));
                    },
                children: e,
              },
              t,
            );
          }),
        });
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [102, 547, 345, 996, 744], () => t(948)), (_N_E = e.O()));
  },
]);
